require('dotenv').config();

const fetch = require('node-fetch');
const fs = require('fs');
const prettier = require("prettier");
const { createComponent, getComponentName, colorString, getFileName } = require('./figma.lib');

let devToken = process.env.DEV_TOKEN;

if (process.argv.length < 3) {
  console.log('Usage: node setup.js <file-key> [figma-dev-token]');
  process.exit(0);
}

if (process.argv.length > 3) {
  devToken = process.argv[3];
}

const fileKey = process.argv[2];
const baseUrl = 'https://api.figma.com';

const headers = new fetch.Headers();
headers.append('X-Figma-Token', devToken);

const path = './src/design-system/generated.tsx';

const vectorTypes = ['VECTOR', 'LINE', 'REGULAR_POLYGON', 'ELLIPSE', 'STAR'];

const vectorMap = {};
const vectorList = [];
const componentMap = {};

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

function preprocessTree(node) {
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
      if (vectorTypes.indexOf(children[j].type) < 0) vectorsOnly = false;
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

  if (vectorTypes.indexOf(node.type) >= 0) {
    node.type = 'VECTOR';
    vectorMap[node.id] = node;
    vectorList.push(node.id);
    node.children = [];
  }

  if (node.children) {
    for (const child of node.children) {
      preprocessTree(child);
    }
  }
}

async function loadCanvas() {
  let resp = await fetch(`${baseUrl}/v1/files/${fileKey}`, { headers });
  let data = await resp.json();
  const document = data.document;
  const canvas = document.children[0];
  return canvas;
}

function preprocessCanvasComponents(canvas) {
  for (let i = 0; i < canvas.children.length; i++) {
    const child = canvas.children[i];
    if (child.name.charAt(0) === '#' && child.visible !== false) {
      const child = canvas.children[i];
      preprocessTree(child);
    }
  }
}

async function loadImages() {
  const guids = vectorList.join(',');
  data = await fetch(`${baseUrl}/v1/images/${fileKey}?ids=${guids}&format=svg`, { headers });
  return await data.json();
}

async function loadURLImages() {
  const guids = vectorList.join(',');
  data = await fetch(`${baseUrl}/v1/images/${fileKey}?ids=${guids}&format=svg`, { headers });
  return await data.json();
}

async function loadImages(imageJSON) {
  const images = imageJSON.images || {};
  if (images) {
    let promises = [];
    let guids = [];

    for (const guid in images) {
      if (images[guid] == null) continue;
      guids.push(guid);
      promises.push(fetch(images[guid]));
    }

    let responses = await Promise.all(promises);
    promises = [];
    for (const resp of responses) {
      promises.push(resp.text());
    }

    responses = await Promise.all(promises);
    for (let i = 0; i < responses.length; i++) {
      images[guids[i]] = responses[i].replace('<svg ', '<svg preserveAspectRatio="none" ');
    }
  }
  return images;
}

function createComponents(canvas, images, componentMap) {
  for (let i = 0; i < canvas.children.length; i++) {
    const child = canvas.children[i];
    if (child.name.charAt(0) === '#' && child.visible !== false) {
      const child = canvas.children[i];
      createComponent(child, images, componentMap);
    }
  }
}

function writeFile(contents) {
  prettier.resolveConfig('./.prettierrc').then(options => {
    fs.writeFile(path, prettier.format(contents, options), (err) => {
      if (err) console.log(err);
      console.log(`wrote ${path}`);
    });
  });
}

async function main() {
  const canvas = await loadCanvas();
  preprocessCanvasComponents(canvas);

  const imageJSON = await loadURLImages();
  const images = await loadImages(imageJSON);

  let contents = '';
  let nextSection = '';

  // Header
  contents += `import * as React from 'react';\n`;
  contents += `import { observer } from 'mobx-react';\n`;
  contents += `\n`;

  // Debug
  fs.writeFileSync('./temp.json', JSON.stringify(canvas, null, 4));

  createComponents(canvas, images, componentMap);

  contents += `export const getComponentFromId = (id) => {\n`;

  for (const key in componentMap) {
    contents += `if (id === "${key}") return ${componentMap[key].instance};\n`;
    nextSection += componentMap[key].doc + '\n';
  }

  contents += 'return null;\n}\n\n';
  contents += nextSection;

  writeFile(contents);
}

main().catch(err => {
  console.error(err);
  console.error(err.stack);
});
