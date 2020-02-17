const { getComponentName, emptyChildren } = require('./figma.shared');

const contentPlugins = [
  applyStyles,
  setComponentFromCache,
  renderVector,
  renderPropsChildren,
  renderPropsChildrenIfEmpty,
  renderIfTrue,
  renderIfFalse,
  setOnClick,
  setId
];

function applyStyles(state) {
  const { middleStyle, innerStyle, outerStyle, props } = state;
  Object.assign(middleStyle, props.style);
  Object.assign(innerStyle, props.innerStyle);
  Object.assign(outerStyle, props.outerStyle);
}

// TODO: use import from './${getComponentName(node.name, options)}'
function setComponentFromCache(state, { component, imgMap, componentMap, options }) {
  const { node, content } = state;
  if (node.id !== component.id && node.name.charAt(0) === '#') {
    emptyChildren(state);
    content.push(`<${getComponentName(node.name, options)} {...props} nodeId="${node.id}" />`);
    createComponent(node, imgMap, componentMap);
  }
}

function renderVector(state, { imgMap }) {
  const { node, content } = state;
  if (node.type === 'VECTOR') {
    emptyChildren(state);
    content.push(`<div className="vector" dangerouslySetInnerHTML={{__html: \`${imgMap[node.id]}\`}} />`);
  }
}

function renderPropsChildren(state, { props: componentProps }) {
  const { content, props } = state;
  if (Object.keys(props).includes('content') && !Object.keys(props).includes('contentIfEmpty')) {
    emptyChildren(state);
    content.push(`{${props.content}}`);
    componentProps[props.content] = 'any';
  }
}

function renderPropsChildrenIfEmpty(state, { props: componentProps, print }) {
  const { content, props } = state;
  if (Object.keys(props).includes('content') && Object.keys(props).includes('contentIfEmpty')) {
    print(`{ !${props.content} && (`);
    content.push(`)}`);
    content.push(`{${props.content}}`);
    componentProps[props.content] = 'any';
  }
}

function renderIfTrue(state, { props: componentProps, print }) {
  const { content, props } = state;
  if (Object.keys(props).includes('ifTrue')) {
    print(`{ !!${props.ifTrue} && (`);
    content.push(`)}`);
    componentProps[props.ifTrue] = 'any';
  }
}

function renderIfFalse(state, { props: componentProps, print }) {
  const { content, props } = state;
  if (Object.keys(props).includes('ifFalse')) {
    print(`{ !!${props.ifFalse} && (`);
    content.push(`)}`);
    componentProps[props.ifFalse] = 'any';
  }
}

function setOnClick(state, { props: componentProps }) {
  const { props, nodeProps } = state;
  if (Object.keys(props).includes('onClick')) {
    nodeProps['onClick'] = props.onClick;
    componentProps[props.onClick] = 'Function';
  }
}

function setId(state) {
  const { props, nodeProps } = state;
  if (Object.keys(props).includes('id')) {
    nodeProps['id'] = `'${props.id}'`;
  }
}

module.exports = {
  applyStyles,
  contentPlugins,
  setComponentFromCache,
  renderVector,
  renderPropsChildren,
  renderPropsChildrenIfEmpty,
  renderIfTrue,
  renderIfFalse,
  setOnClick,
  setId
};
