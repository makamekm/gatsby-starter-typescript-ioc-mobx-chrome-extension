const fetch = require('node-fetch');

const baseUrl = 'https://api.figma.com';

async function loadCanvas(fileKey, headers) {
  let resp = await fetch(`${baseUrl}/v1/files/${fileKey}`, { headers });
  let data = await resp.json();
  const document = data.document;
  const canvas = document.children[0];
  return canvas;
}

async function loadURLImages(vectorList, fileKey, headers) {
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

module.exports = {
  loadCanvas,
  loadURLImages,
  loadImages
};
