require('dotenv').config();

const fetch = require('node-fetch');

const { preprocessCanvasComponents } = require('./figma.shared');
const { createComponents, generateComponent } = require('./figma.lib');
const { loadCanvas, loadImages, loadURLImages } = require('./figma.api');
const { contentPlugins } = require('./figma.content.plugins');
const { stylePlugins } = require('./figma.style.plugins');

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
// - decorator // default 'observer'
// - typeFactory // default ({ props: componentProps }) => `{ ${Object.keys(componentProps).map(key => `${key}: ${componentProps[key] || 'any'};\n`).join('')} }`

function getConfig(options = {}) {
  let fileKey = options.fileKey || process.argv[2] || process.env.FIGMA_FILE_KEY_DEFAULT;
  let devToken = options.devToken || process.argv[3] || process.env.FIGMA_DEV_TOKEN;

  if (!fileKey || !devToken) {
    console.log('Usage: node figma.js <file-key> [figma-dev-token] or use env.FIGMA_FILE_KEY_DEFAULT, env.FIGMA_DEV_TOKEN');
    process.exit(0);
  }

  const headers = getHeaders(devToken);

  options.dir = options.dir || process.env.FIGMA_DIR || './src/design-system';

  if (!options.contentPlugins) {
    options.contentPlugins = contentPlugins;
  }

  if (!options.stylePlugins) {
    options.stylePlugins = stylePlugins;
  }

  return {
    headers,
    fileKey
  };
}

async function main(options = {}) {
  const { headers, fileKey, dit } = getConfig(options);

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

  // Debug
  // fs.writeFileSync('./temp.json', JSON.stringify(canvas, null, 4));

  // Create components
  await createComponents(canvas, images, componentMap, options);

  // Generate components
  for (const key in componentMap) {
    await generateComponent(componentMap[key], options);
  }
}

if (process.env.FIGMA_FILE_KEY_DEFAULT) {
  main().catch(err => {
    console.error(err);
    console.error(err.stack);
  });
}
