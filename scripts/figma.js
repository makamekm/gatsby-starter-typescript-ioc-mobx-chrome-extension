require('dotenv').config();

const fetch = require('node-fetch');
const fs = require('fs');
const fsPath = require('path');

const { preprocessCanvasComponents, writeFile } = require('./figma.shared');
const { createComponents } = require('./figma.lib');
const { loadCanvas, loadImages, loadURLImages } = require('./figma.api');

function getHeaders(devToken) {
  const headers = new fetch.Headers();
  headers.append('X-Figma-Token', devToken);
  return headers;
}

// Options:
// - fileKey // * required
// - devToken // * required
// - dir // default './src/design-system'
// - stylePlugins // default from './figma.style.plugins'
// - contentPlugins // default from './figma.content.plugins'
// - classPrefix // default 'figma-'
// - delIndex // default '??'
// - paramsSplitIndex // default '&'
// - paramSplitIndex // default '='
// - objectIndex // default '.'
// - imports // default ['import { observer } from 'mobx-react';']

function getConfig(options = {}) {
  let fileKey = options.fileKey || process.argv[2] || process.env.FIGMA_FILE_KEY_DEFAULT;
  let devToken = options.devToken || process.argv[3] || process.env.FIGMA_DEV_TOKEN;
  let dir = options.dir || process.env.FIGMA_DIR;

  if (!dir) {
    dir = './src/design-system';
  }

  const path = fsPath.resolve(dir, 'generated.tsx');

  if (!fileKey || !devToken) {
    console.log('Usage: node figma.js <file-key> [figma-dev-token] or use env.FIGMA_FILE_KEY_DEFAULT, env.FIGMA_DEV_TOKEN');
    process.exit(0);
  }

  const headers = getHeaders(devToken);

  return {
    headers,
    fileKey,
    path
  };
}

async function main(options = {}) {
  const { headers, fileKey, path } = getConfig(options);

  // Create shared objects
  const vectorMap = {};
  const componentMap = {};
  const vectorList = [];

  const shared = {
    componentMap,
    vectorMap,
    vectorList
  };

  // Load the document from Figma
  const canvas = await loadCanvas(fileKey, headers);

  // Wrap vectors and images
  preprocessCanvasComponents(canvas, shared);

  // Load all images used in the document from Figma
  const imageJSON = await loadURLImages(vectorList, fileKey, headers);
  const images = await loadImages(imageJSON, fileKey, headers);

  // Content represents writing cursor
  let contents = '';

  // Next Section represents components' content
  let nextSection = '';

  // Header
  contents += `import * as React from 'react';\n`;

  const imports = options.imports || [`import { observer } from 'mobx-react';`];
  imports.forEach(imp => {
    contents += `${imp}\n`;
  });

  contents += `\n`;

  // Debug
  fs.writeFileSync('./temp.json', JSON.stringify(canvas, null, 4));

  // Generate components
  await createComponents(canvas, images, componentMap, options);

  // Generate getComponentFromId function
  contents += `export const getComponentFromId = (id) => {\n`;
  for (const key in componentMap) {
    contents += `if (id === '${key}') return ${componentMap[key].instance};\n`;
    // Write the generated component tree
    nextSection += componentMap[key].doc + '\n';
  }
  contents += 'return null;\n}\n\n';
  contents += nextSection;

  // Write the final result
  await writeFile(path, contents);
}

if (process.env.FIGMA_FILE_KEY_DEFAULT) {
  main().catch(err => {
    console.error(err);
    console.error(err.stack);
  });
}
