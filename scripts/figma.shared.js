const fs = require('fs');
const prettier = require('prettier');

const VECTOR_TYPES = ['VECTOR', 'LINE', 'REGULAR_POLYGON', 'ELLIPSE', 'STAR'];
const GROUP_TYPES = ['GROUP', 'BOOLEAN_OPERATION'];

function colorString(color) {
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`;
}

function dropShadow(effect) {
  return `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${colorString(effect.color)}`;
}

function innerShadow(effect) {
  return `inset ${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${colorString(effect.color)}`;
}

function imageURL(hash) {
  const squash = hash.split('-').join('');
  return `url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/${squash.substring(0, 4)}/${squash.substring(4, 8)}/${squash.substring(
    8
  )})`;
}

function backgroundSize(scaleMode) {
  if (scaleMode === 'FILL') {
    return 'cover';
  }
}

function nodeSort(a, b) {
  if (a.absoluteBoundingBox.y < b.absoluteBoundingBox.y) return -1;
  else if (a.absoluteBoundingBox.y === b.absoluteBoundingBox.y) return 0;
  else return 1;
}

function getPaint(paintList) {
  if (paintList && paintList.length > 0) {
    return paintList[paintList.length - 1];
  }

  return null;
}

function paintToLinearGradient(paint) {
  const handles = paint.gradientHandlePositions;
  const handle0 = handles[0];
  const handle1 = handles[1];

  const yDiff = handle1.y - handle0.y;
  const xDiff = handle0.x - handle1.x;

  const angle = Math.atan2(-xDiff, -yDiff);
  const stops = paint.gradientStops
    .map(stop => {
      return `${colorString(stop.color)} ${Math.round(stop.position * 100)}%`;
    })
    .join(', ');
  return `linear-gradient(${angle}rad, ${stops})`;
}

function paintToRadialGradient(paint) {
  const stops = paint.gradientStops
    .map(stop => {
      return `${colorString(stop.color)} ${Math.round(stop.position * 60)}%`;
    })
    .join(', ');

  return `radial-gradient(${stops})`;
}

function expandChildren(node, parent, minChildren, maxChildren, centerChildren, offset) {
  const children = node.children;
  let added = offset;

  if (children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      // WTF?!?!
      // if (parent != null && (node.type === 'COMPONENT' || node.type === 'INSTANCE')) {
      //   child.constraints = { vertical: 'TOP_BOTTOM', horizontal: 'LEFT_RIGHT' };
      // }

      if (GROUP_TYPES.indexOf(child.type) >= 0) {
        added += expandChildren(child, parent, minChildren, maxChildren, centerChildren, added + i);
        continue;
      }

      child.order = i + added;

      if (child.constraints && child.constraints.vertical === 'BOTTOM') {
        maxChildren.push(child);
      } else if (child.constraints && child.constraints.vertical === 'TOP') {
        minChildren.push(child);
      } else {
        centerChildren.push(child);
      }
    }

    minChildren.sort(nodeSort);
    maxChildren.sort(nodeSort);

    return added + children.length - offset;
  }

  return added - offset;
}

async function generateComponentFile(path, name, id) {
  if (!fs.existsSync(path)) {
    let componentSrc = '';
    componentSrc += `import * as React from 'react';\n`;
    componentSrc += `import { observer } from 'mobx-react';\n`;
    componentSrc += `import { getComponentFromId } from './generated';\n`;
    componentSrc += `\n`;
    componentSrc += `export const ${name} = observer(props => {\n`;
    componentSrc += `const Component = getComponentFromId('${id}');\n`;
    componentSrc += `return <Component {...props} />;\n`;
    componentSrc += `});\n`;
    await writeFile(path, componentSrc);
  }
}

function applyFontStyle(_styles, fontStyle) {
  if (fontStyle) {
    _styles.fontSize = fontStyle.fontSize;
    _styles.fontWeight = fontStyle.fontWeight;
    _styles.fontFamily = fontStyle.fontFamily;
    _styles.textAlign = fontStyle.textAlignHorizontal;
    _styles.fontStyle = fontStyle.italic ? 'italic' : 'normal';
    _styles.lineHeight = `${fontStyle.lineHeightPercent * 1.25}%`;
    _styles.letterSpacing = `${fontStyle.letterSpacing}px`;
  }
}

function camelToSnake(str) {
  let value = str.replace(/([A-Z])/g, group => '-' + group.toLowerCase());
  if (value[0] === '-') return value.substring(1);
  return value;
}

function getFileName(str) {
  return camelToSnake(str.replace(/\W+/g, ''));
}

function convertStyles(styles) {
  return Object.keys(styles)
    .map(key => {
      const name = camelToSnake(key);
      if (
        [
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'left',
          'right',
          'top',
          'bottom',
          'font-size',
          'margin-right',
          'margin-left',
          'margin-top',
          'margin-bottom',
          'padding-right',
          'padding-left',
          'padding-top',
          'padding-bottom'
        ].includes(name) &&
        styles[key] != null &&
        String(styles[key]).match(/[^0-9\.\-]/g) == null
      ) {
        styles[key] = `${styles[key]}px`;
      }
      return styles[key] != null && `${name}: ${styles[key]};`;
    })
    .filter(n => !!n)
    .join('\n');
}

function getComponentName(name) {
  const dotIndex = name.indexOf('??');
  if (dotIndex >= 0) {
    name = name.substring(0, dotIndex);
  }
  return name.replace(/\W+/g, '');
}

function getElementParams(name) {
  let params = {};
  const delIndex = name.indexOf('??');
  if (delIndex >= 0) {
    const paramsStr = name.substring(delIndex + 2);
    const paramsSplit = paramsStr.split('&');
    paramsSplit.forEach(paramStr => {
      const [paramKey, paramValue] = paramStr.split('=');
      const dotIndex = paramKey.indexOf('.');
      if (dotIndex >= 0) {
        const [firstKey, secondKey] = paramKey.split('.');
        if (!params[firstKey]) params[firstKey] = {};
        params[firstKey][secondKey] = paramValue;
      } else params[paramKey] = paramValue;
    });
  }

  return params;
}

const defaultStyles = `
input {
  font: inherit;
  border: inherit;
  padding: inherit;
  background-color: inherit;
  color: inherit;
}
input:focus {
  outline: none;
}
.vector :global(svg) {
  width: 100%;
  height: 100%;
  position: absolute;
}`;

function createNodeBounds(node, parent, lastVertical) {
  if (parent != null) {
    const nodeBounds = node.absoluteBoundingBox;
    const nx2 = nodeBounds.x + nodeBounds.width;
    const ny2 = nodeBounds.y + nodeBounds.height;
    const parentBounds = parent.absoluteBoundingBox;
    const px = parentBounds.x;
    const py = parentBounds.y;

    return {
      left: nodeBounds.x - px,
      right: px + parentBounds.width - nx2,
      top: lastVertical == null ? nodeBounds.y - py : nodeBounds.y - lastVertical,
      bottom: py + parentBounds.height - ny2,
      width: nodeBounds.width,
      height: nodeBounds.height
    };
  }
  return null;
}

function printDiv({ node, increaseDivCounter, middleStyle, outerStyle, innerStyle }, { printStyle, print }) {
  if (Object.keys(outerStyle).length > 0 && middleStyle.zIndex != null) {
    outerStyle.zIndex = middleStyle.zIndex;
  }

  const middleId = printStyle(middleStyle);
  const outerId = printStyle(outerStyle);
  const innerId = printStyle(innerStyle);

  if (outerId) {
    print(`<div className='${outerId}'>`);
    increaseDivCounter();
  }

  print(`<div`);
  print(`id='${node.id}'`);
  print(`className='${middleId}'`);
  print(`>`);
  increaseDivCounter();

  if (innerId) {
    print(`<div className='${innerId}'>`);
    increaseDivCounter();
  }
}

function emptyChildren({ content, minChildren, centerChildren, maxChildren }) {
  minChildren.splice(0, minChildren.length);
  centerChildren.splice(0, minChildren.length);
  maxChildren.splice(0, minChildren.length);
  content.splice(0, content.length);
}

function renderChildren({ node, minChildren, centerChildren, maxChildren }, shared) {
  const newNodeBounds = node.absoluteBoundingBox;
  const newLastVertical = newNodeBounds && newNodeBounds.y + newNodeBounds.height;
  let first = true;

  for (const child of minChildren) {
    visitNode(shared, child, node, first ? null : newLastVertical);
    first = false;
  }

  for (const child of centerChildren) {
    visitNode(shared, child, node, null);
  }

  first = true;
  for (const child of maxChildren) {
    visitNode(shared, child, node, first ? null : newLastVertical);
    first = false;
  }
}

function visitNode(shared, node, parent = null, lastVertical = null) {
  const { print, stylePlugins, contentPlugins } = shared;

  const minChildren = [];
  const maxChildren = [];
  const centerChildren = [];
  const content = [];

  let divCounter = 0;
  const increaseDivCounter = () => divCounter++;
  const decreaseDivCounter = () => divCounter--;

  const outerStyle = {};
  const innerStyle = {};
  const middleStyle = {
    position: 'relative',
    boxSizing: 'border-box',
    pointerEvents: 'auto'
  };

  const props = getElementParams(node.name);
  const bounds = createNodeBounds(node, parent, lastVertical);

  const state = {
    node,
    props,
    increaseDivCounter,
    decreaseDivCounter,
    middleStyle,
    outerStyle,
    innerStyle,
    parent,
    bounds,
    minChildren,
    maxChildren,
    centerChildren,
    content
  };

  expandChildren(node, parent, minChildren, maxChildren, centerChildren, 0);

  // Style Plugins

  stylePlugins.forEach(plugin => plugin(state, shared));

  // Apply styles
  Object.assign(middleStyle, props.style);
  Object.assign(innerStyle, props.innerStyle);
  Object.assign(outerStyle, props.outerStyle);

  // Render if it's not a parent
  if (parent != null) {
    printDiv(state, shared);
  }

  // Content Plugins

  contentPlugins.forEach(plugin => plugin(state, shared));

  renderChildren(state, shared);

  // WTF?!?!
  // if (node.name.charAt(0) === '$') {
  //   const varName = node.name.substring(1);
  //   print(`{this.props.${varName} && this.props.${varName}.split('\\n').map((line, idx) => <div key={idx}>{line}</div>)}`);
  //   print(`{!this.props.${varName} && (<div>`);
  //   for (const piece of content) {
  //     print(piece);
  //   }
  //   print(`</div>)}`);
  // }

  for (const piece of content) {
    print(piece);
  }

  // Render endings
  for (let i = 0; i < divCounter; i++) {
    print(`</div>`);
  }
}

function paintsRequireRender(paints) {
  if (!paints) return false;

  let numPaints = 0;
  for (const paint of paints) {
    if (paint.visible === false) continue;

    numPaints++;
    if (paint.type === 'EMOJI') return true;
  }

  return numPaints > 1;
}

function preprocessTree(node, shared) {
  const { vectorMap, vectorList } = shared;

  let vectorsOnly = node.name.charAt(0) !== '#';
  let vectorVConstraint = null;
  let vectorHConstraint = null;

  if (
    paintsRequireRender(node.fills) ||
    paintsRequireRender(node.strokes) ||
    (node.blendMode != null && ['PASS_THROUGH', 'NORMAL'].indexOf(node.blendMode) < 0)
  ) {
    node.type = 'VECTOR';
  }

  const children = node.children && node.children.filter(child => child.visible !== false);
  if (children) {
    for (let j = 0; j < children.length; j++) {
      if (VECTOR_TYPES.indexOf(children[j].type) < 0) vectorsOnly = false;
      else {
        if (vectorVConstraint != null && children[j].constraints.vertical != vectorVConstraint) vectorsOnly = false;
        if (vectorHConstraint != null && children[j].constraints.horizontal != vectorHConstraint) vectorsOnly = false;
        vectorVConstraint = children[j].constraints.vertical;
        vectorHConstraint = children[j].constraints.horizontal;
      }
    }
  }
  node.children = children;

  if (children && children.length > 0 && vectorsOnly) {
    node.type = 'VECTOR';
    node.constraints = {
      vertical: vectorVConstraint,
      horizontal: vectorHConstraint
    };
  }

  if (VECTOR_TYPES.indexOf(node.type) >= 0) {
    node.type = 'VECTOR';
    vectorMap[node.id] = node;
    vectorList.push(node.id);
    node.children = [];
  }

  if (node.children) {
    for (const child of node.children) {
      preprocessTree(child, shared);
    }
  }
}

function preprocessCanvasComponents(canvas, shared) {
  for (let i = 0; i < canvas.children.length; i++) {
    const child = canvas.children[i];
    if (child.name.charAt(0) === '#' && child.visible !== false) {
      const child = canvas.children[i];
      preprocessTree(child, shared);
    }
  }
}

function writeFile(path, contents) {
  new Promise((r, e) =>
    prettier.resolveConfig('./.prettierrc').then(options => {
      fs.writeFile(path, prettier.format(contents, options), err => {
        if (err) {
          console.error(err);
          e(err);
        } else {
          console.log(`wrote ${path}`);
          r();
        }
      });
    })
  );
}

module.exports = {
  VECTOR_TYPES,
  GROUP_TYPES,
  colorString,
  dropShadow,
  innerShadow,
  imageURL,
  backgroundSize,
  nodeSort,
  getPaint,
  paintToLinearGradient,
  paintToRadialGradient,
  expandChildren,
  generateComponentFile,
  applyFontStyle,
  camelToSnake,
  getFileName,
  convertStyles,
  getComponentName,
  getElementParams,
  defaultStyles,
  createNodeBounds,
  printDiv,
  emptyChildren,
  renderChildren,
  visitNode,
  paintsRequireRender,
  preprocessTree,
  preprocessCanvasComponents,
  writeFile
};
