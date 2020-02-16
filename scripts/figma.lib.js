const fs = require('fs');
const prettier = require("prettier");

const VECTOR_TYPES = ['VECTOR', 'LINE', 'REGULAR_POLYGON', 'ELLIPSE'];
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

  const ydiff = handle1.y - handle0.y;
  const xdiff = handle0.x - handle1.x;

  const angle = Math.atan2(-xdiff, -ydiff);
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

function generateComponentFile(path, name, id) {
  if (!fs.existsSync(path)) {
    let componentSrc = '';
    componentSrc += `import * as React from 'react';\n`;
    componentSrc += `import { observer } from 'mobx-react';\n`;
    componentSrc += `import { getComponentFromId } from './generated';\n`;
    componentSrc += `\n`;
    componentSrc += `export const ${name} = observer(props => {\n`;
    componentSrc += `const Component = getComponentFromId("${id}");\n`;
    componentSrc += `return <Component {...props} />;\n`;
    componentSrc += `});\n`;
    prettier.resolveConfig('./.prettierrc').then(options => {
      fs.writeFile(path, prettier.format(componentSrc, options), err => {
        if (err) console.log(err);
        console.log(`wrote ${path}`);
      });
    });
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
      }
      else params[paramKey] = paramValue;
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

function visitNode({ component, print, printStyle, imgMap, componentMap }, node, parent, lastVertical) {
  let content = null;

  let minChildren = [];
  const maxChildren = [];
  const centerChildren = [];

  let bounds = null;
  let nodeBounds = null;

  let middleClass = '';
  let outerClass = '';
  let innerClass = '';

  const outerStyle = {};
  const innerStyle = {};
  const middleStyle = {
    position: 'relative',
    boxSizing: 'border-box',
    pointerEvents: 'auto'
  };

  const cHorizontal = node.constraints && node.constraints.horizontal;
  const cVertical = node.constraints && node.constraints.vertical;

  const props = getElementParams(node.name);

  if (parent != null) {
    nodeBounds = node.absoluteBoundingBox;
    const nx2 = nodeBounds.x + nodeBounds.width;
    const ny2 = nodeBounds.y + nodeBounds.height;
    const parentBounds = parent.absoluteBoundingBox;
    const px = parentBounds.x;
    const py = parentBounds.y;

    bounds = {
      left: nodeBounds.x - px,
      right: px + parentBounds.width - nx2,
      top: lastVertical == null ? nodeBounds.y - py : nodeBounds.y - lastVertical,
      bottom: py + parentBounds.height - ny2,
      width: nodeBounds.width,
      height: nodeBounds.height
    };
  }

  expandChildren(node, parent, minChildren, maxChildren, centerChildren, 0);

  if (node.order) {
    middleStyle.zIndex = node.order;
  }

  if (cHorizontal === 'LEFT_RIGHT') {
    if (bounds != null) {
      middleStyle.marginLeft = bounds.left;
      middleStyle.marginRight = bounds.right;
      middleStyle.flexGrow = 1;
    }
  } else if (cHorizontal === 'RIGHT') {
    outerStyle.position = 'relative';
    outerStyle.display = 'flex';
    outerStyle.width = '100%';
    outerStyle.pointerEvents = 'none';
    outerStyle.justifyContent = 'flex-end';
    if (bounds != null) {
      middleStyle.marginRight = bounds.right;
      middleStyle.width = bounds.width;
      middleStyle.minWidth = bounds.width;
    }
  } else if (cHorizontal === 'CENTER') {
    outerStyle.position = 'relative';
    outerStyle.display = 'flex';
    outerStyle.width = '100%';
    outerStyle.pointerEvents = 'none';
    outerStyle.justifyContent = 'center';
    if (bounds != null) {
      middleStyle.width = bounds.width;
      middleStyle.marginLeft = bounds.left && bounds.right ? bounds.left - bounds.right : null;
    }
  } else if (cHorizontal === 'SCALE') {
    if (bounds != null) {
      const parentWidth = bounds.left + bounds.width + bounds.right;
      middleStyle.width = `${(bounds.width * 100) / parentWidth}%`;
      middleStyle.marginLeft = `${(bounds.left * 100) / parentWidth}%`;
    }
  } else {
    if (bounds != null) {
      middleStyle.marginLeft = bounds.left;
      middleStyle.width = bounds.width;
      middleStyle.minWidth = bounds.width;
    }
  }

  if (bounds && bounds.height && cVertical !== 'TOP_BOTTOM') middleStyle.height = bounds.height;
  if (cVertical === 'TOP_BOTTOM') {
    outerStyle.position = 'relative';
    outerStyle.display = 'flex';
    outerStyle.width = '100%';
    outerStyle.pointerEvents = 'none';
    outerStyle.position = 'absolute';
    outerStyle.height = '100%';
    outerStyle.top = 0;
    outerStyle.left = 0;
    if (bounds != null) {
      middleStyle.marginTop = bounds.top;
      middleStyle.marginBottom = bounds.bottom;
    }
  } else if (cVertical === 'CENTER') {
    outerStyle.position = 'relative';
    outerStyle.display = 'flex';
    outerStyle.width = '100%';
    outerStyle.pointerEvents = 'none';
    outerStyle.alignItems = 'center';
    outerStyle.position = 'absolute';
    outerStyle.height = '100%';
    outerStyle.top = 0;
    outerStyle.left = 0;
    if (bounds != null) {
      middleStyle.marginTop = bounds.top - bounds.bottom;
    }
  } else if (cVertical === 'SCALE') {
    outerStyle.position = 'relative';
    outerStyle.display = 'flex';
    outerStyle.width = '100%';
    outerStyle.pointerEvents = 'none';
    outerStyle.position = 'absolute';
    outerStyle.height = '100%';
    outerStyle.top = 0;
    outerStyle.left = 0;
    if (bounds != null) {
      const parentHeight = bounds.top + bounds.height + bounds.bottom;
      middleStyle.height = `${(bounds.height * 100) / parentHeight}%`;
      middleStyle.top = `${(bounds.top * 100) / parentHeight}%`;
    }
  } else {
    if (bounds != null) {
      middleStyle.marginTop = bounds.top;
      middleStyle.marginBottom = bounds.bottom;
      middleStyle.minHeight = middleStyle.height;
      middleStyle.height = null;
    }
  }

  if (node.layoutMode === 'HORIZONTAL') {
    innerStyle.display = 'flex';
    innerStyle.flexDirection = 'row';
    middleStyle.maxWidth = '100%';
    innerStyle.maxWidth = '100%';
    innerStyle.marginTop = -parent.itemSpacing;
    innerStyle.marginLeft = -parent.itemSpacing;
    innerStyle.marginRight = -parent.itemSpacing;
  }

  if (parent && parent.layoutMode === 'HORIZONTAL') {
    middleStyle.marginLeft = parent.itemSpacing;
    middleStyle.marginRight = parent.itemSpacing;
    middleStyle.marginTop = parent.itemSpacing;
    middleStyle.marginBottom = 0;
  }

  if (['FRAME', 'RECTANGLE', 'INSTANCE', 'COMPONENT'].indexOf(node.type) >= 0) {
    if (['FRAME', 'COMPONENT', 'INSTANCE'].indexOf(node.type) >= 0) {
      middleStyle.backgroundColor = colorString(node.backgroundColor);
      if (node.clipsContent) middleStyle.overflow = 'hidden';
    } else if (node.type === 'RECTANGLE') {
      const lastFill = getPaint(node.fills);
      if (lastFill) {
        if (lastFill.type === 'SOLID') {
          middleStyle.backgroundColor = colorString(lastFill.color);
          middleStyle.opacity = lastFill.opacity;
        } else if (lastFill.type === 'IMAGE') {
          middleStyle.backgroundImage = imageURL(lastFill.imageRef);
          middleStyle.backgroundSize = backgroundSize(lastFill.scaleMode);
        } else if (lastFill.type === 'GRADIENT_LINEAR') {
          middleStyle.background = paintToLinearGradient(lastFill);
        } else if (lastFill.type === 'GRADIENT_RADIAL') {
          middleStyle.background = paintToRadialGradient(lastFill);
        }
      }

      if (node.effects) {
        for (let i = 0; i < node.effects.length; i++) {
          const effect = node.effects[i];
          if (effect.type === 'DROP_SHADOW') {
            middleStyle.boxShadow = dropShadow(effect);
          } else if (effect.type === 'INNER_SHADOW') {
            middleStyle.boxShadow = innerShadow(effect);
          } else if (effect.type === 'LAYER_BLUR') {
            middleStyle.filter = `blur(${effect.radius}px)`;
          }
        }
      }

      const lastStroke = getPaint(node.strokes);
      if (lastStroke) {
        if (lastStroke.type === 'SOLID') {
          const weight = node.strokeWeight || 1;
          middleStyle.border = `${weight}px solid ${colorString(lastStroke.color)}`;
        }
      }

      const cornerRadii = node.rectangleCornerRadii;
      if (cornerRadii && cornerRadii.length === 4 && cornerRadii[0] + cornerRadii[1] + cornerRadii[2] + cornerRadii[3] > 0) {
        middleStyle.borderRadius = `${cornerRadii[0]}px ${cornerRadii[1]}px ${cornerRadii[2]}px ${cornerRadii[3]}px`;
      }
    }
  } else if (node.type === 'TEXT') {
    const lastFill = getPaint(node.fills);
    if (lastFill) {
      middleStyle.color = colorString(lastFill.color);
    }

    const lastStroke = getPaint(node.strokes);
    if (lastStroke) {
      const weight = node.strokeWeight || 1;
      middleStyle.WebkitTextStroke = `${weight}px ${colorString(lastStroke.color)}`;
    }

    const fontStyle = node.style;

    applyFontStyle(middleStyle, fontStyle);

    if (node.name.substring(0, 6) === 'input:') {
      content = [`<input key="${node.id}" type="text" placeholder="${node.characters}" name="${node.name.substring(7)}" />`];
    } else if (node.characterStyleOverrides) {
      let para = '';
      const ps = [];
      const styleCache = {};
      let currStyle = 0;

      const commitParagraph = key => {
        if (para !== '') {
          if (styleCache[currStyle] == null && currStyle !== 0) {
            styleCache[currStyle] = {};
            applyFontStyle(styleCache[currStyle], node.styleOverrideTable[currStyle]);
          }

          const id = printStyle(styleCache[currStyle]);
          if (id) ps.push(`<span className="${id}" key="${key}">${para}</span>`);
          else ps.push(`<span key="${key}">${para}</span>`);
          para = '';
        }
      };

      for (const i in node.characters) {
        let idx = node.characterStyleOverrides[i];

        if (node.characters[i] === '\n') {
          commitParagraph(i);
          ps.push(`<br key="${`br${i}`}" />`);
          continue;
        }

        if (idx == null) idx = 0;
        if (idx !== currStyle) {
          commitParagraph(i);
          currStyle = idx;
        }

        para += node.characters[i];
      }
      commitParagraph('end');

      content = ps;
    } else {
      content = node.characters.split('\n').map((line, idx) => `<div key="${idx}">${line}</div>`);
    }
  }

  function printDiv(middleStyle, outerStyle) {
    if (Object.keys(outerStyle).length > 0 && middleStyle.zIndex != null) {
      outerStyle.zIndex = middleStyle.zIndex;
    }

    const middleId = printStyle(middleStyle);
    const outerId = printStyle(outerStyle);
    const innerId = printStyle(innerStyle);

    if (middleId) middleClass += middleId;
    if (outerId) outerClass = outerId;
    if (innerId) innerClass = innerId;

    if (outerClass) print(`<div className="${outerClass}">`);
    print(`<div`);
    print(`id="${node.id}"`);
    print(`className="${middleClass}"`);
    print(`>`);
    if (innerClass) print(`<div className="${innerClass}">`);
  }

  Object.assign(middleStyle, props.style);
  Object.assign(innerStyle, props.innerStyle);
  Object.assign(outerStyle, props.outerStyle);

  if (parent != null) {
    printDiv(middleStyle, outerStyle);
  }

  if (node.id !== component.id && node.name.charAt(0) === '#') {
    print(`<${getComponentName(node.name)} {...this.props} nodeId="${node.id}" />`);
    createComponent(node, imgMap, componentMap);
  } else if (node.type === 'VECTOR') {
    print(`<div className="vector" dangerouslySetInnerHTML={{__html: \`${imgMap[node.id]}\`}} />`);
  } else {
    const newNodeBounds = node.absoluteBoundingBox;
    const newLastVertical = newNodeBounds && newNodeBounds.y + newNodeBounds.height;
    let first = true;

    for (const child of minChildren) {
      visitNode({ component, print, printStyle, imgMap, componentMap }, child, node, first ? null : newLastVertical);
      first = false;
    }

    for (const child of centerChildren) {
      visitNode({ component, print, printStyle, imgMap, componentMap }, child, node, null);
    }

    if (maxChildren.length > 0) {
      first = true;
      for (const child of maxChildren) {
        visitNode({ component, print, printStyle, imgMap, componentMap }, child, node, first ? null : newLastVertical);
        first = false;
      }
    }

    if (content != null) {
      if (node.name.charAt(0) === '$') {
        const varName = node.name.substring(1);
        print(
          `{this.props.${varName} && this.props.${varName}.split("\\n").map((line, idx) => <div key={idx}>{line}</div>)}`
        );
        print(`{!this.props.${varName} && (<div>`);
        for (const piece of content) {
          print(piece);
        }
        print(`</div>)}`);
      } else {
        for (const piece of content) {
          print(piece);
        }
      }
    }
  }

  if (parent != null) {
    if (innerClass) print(`</div>`);
    print(`</div>`);
    if (outerClass) print(`</div>`);
  }
}

const createComponent = (component, imgMap, componentMap) => {
  const name = getComponentName(component.name);
  const fileName = getFileName(name);
  const instance = name + component.id.replace(';', 'S').replace(':', 'D');
  let doc = '';
  let styleCounter = -1;
  let styles = defaultStyles;

  function print(msg) {
    doc += `${msg}\n`;
  }

  function genClassName() {
    styleCounter++;
    return 'figma-' + styleCounter;
  }

  function printStyle(style) {
    if (!style) return null;
    const id = genClassName();
    const convertedStyle = convertStyles(style);
    const finalStyleStr = !!convertedStyle && `\n.${id} {\n${convertedStyle}\n}`;
    if (finalStyleStr) styles += finalStyleStr;
    return finalStyleStr ? id : null;
  }

  print(`const ${instance} = observer(() => {`); // Can be replaced with React.memo(...)
  print(`return (<>`);

  const path = `src/design-system/${fileName}.tsx`;

  // Stage 1 (Generate the /Component for importing and code reuse)

  generateComponentFile(path, name, component.id);

  // Stage 2 (Generate the component from the root)

  visitNode({ component, print, printStyle, imgMap, componentMap }, component, null, null);

  // Stage 3 (Collect all styles)

  print(`<style jsx>{\`${styles}\n    \`}</style>`);

  // Stage 4 (Finish the component)

  print('</>);');
  print('});');

  // Stage 5 (Cache the component)

  componentMap[component.id] = { instance, name, doc };
};

module.exports = { createComponent, colorString, getFileName, getComponentName, getElementParams };
