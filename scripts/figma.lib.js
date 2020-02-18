const fsPath = require('path');
const {
  generateComponentFile,
  getFileName,
  convertStyles,
  getComponentName,
  defaultStyles,
  visitNode,
  writeFile
} = require('./figma.shared');

module.exports = { createComponent, createComponents, generateComponent };

async function createComponent(component, imgMap, componentMap, options = {}) {
  const name = getComponentName(component.name, options);
  const fileName = getFileName(name);
  const instance = name + component.id.replace(';', 'S').replace(':', 'D');
  const classPrefix = options.classPrefix || 'figma-';
  const localComponentMap = {};

  let doc = '';
  let styleCounter = 0;
  let styles = defaultStyles;
  let props = {};

  const preprint = msg => {
    doc = `${msg}\n` + doc;
  };

  const print = msg => {
    doc += `${msg}\n`;
  };

  const genClassName = () => classPrefix + styleCounter;

  const printStyle = style => {
    if (!style) return null;
    const id = genClassName();
    const convertedStyle = convertStyles(style);
    if (convertedStyle) {
      styles += `\n.${id} {\n${convertedStyle}\n}`;
      styleCounter++;
      return id;
    }
    return null;
  };

  const path = `src/design-system/${fileName}.tsx`;

  const shared = {
    name,
    fileName,
    path,
    instance,
    props,
    component,
    print,
    preprint,
    printStyle,
    imgMap,
    componentMap,
    localComponentMap,
    stylePlugins: options.stylePlugins,
    contentPlugins: options.contentPlugins,
    options
  };

  print(`return (<>`);

  // Stage 1 (Generate the /Component for importing and code reuse)

  await generateComponentFile(shared, options);

  // Stage 2 (Generate the component from the root)

  await visitNode(shared, component);

  // Render props
  const decorator = options.decorator || 'observer';
  const typeFactory =
    options.typeFactory ||
    (({ props: componentProps }) =>
      `{ ${Object.keys(componentProps)
        .map(key => `${key}: ${componentProps[key] || 'any'};\n`)
        .join('')} }`);
  preprint(
    `export const ${instance}: React.FC<${typeFactory(shared)}> = ${decorator}(props => { ${
      Object.keys(props).length ? `const { ${Object.keys(props).join(', ')} } = props;` : ''
    }`
  ); // Can be replaced with React.memo(...)

  // Stage 3 (Collect all styles)

  print(`<style jsx>{\`${styles}\n    \`}</style>`);

  // Stage 4 (Finish the component)

  print('</>);');
  print('});');

  // Stage 5 (Cache the component)

  componentMap[component.id] = { instance, name, doc, fileName, localComponentMap };
}

async function createComponents(canvas, images, componentMap, options = {}) {
  for (let i = 0; i < canvas.children.length; i++) {
    const child = canvas.children[i];
    if (child.name.charAt(0) === '#' && child.visible !== false) {
      const child = canvas.children[i];
      await createComponent(child, images, componentMap, options);
    }
  }
}

async function generateComponent(component, options) {
  const path = fsPath.resolve(options.dir, `${component.fileName}.generated.tsx`);

  // Content represents writing cursor
  let contents = '';

  // Header
  contents += `import * as React from 'react';\n`;

  const imports = options.imports || [`import { observer } from 'mobx-react';`];
  imports.forEach(imp => {
    contents += `${imp}\n`;
  });

  for (const key in component.localComponentMap) {
    contents += `import { ${component.localComponentMap[key].name} } from './${component.localComponentMap[key].fileName}';\n`;
  }

  contents += `\n`;
  contents += component.doc;

  // Write the final result
  await writeFile(path, contents);
}
