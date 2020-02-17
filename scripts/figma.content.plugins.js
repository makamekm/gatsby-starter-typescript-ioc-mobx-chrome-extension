const { getComponentName, emptyChildren } = require('./figma.shared');

const contentPlugins = [
  setComponentFromCache,
  renderVector,
  renderPropsChildren,
  renderPropsChildrenIfEmpty,
  renderIfTrue,
  renderIfFalse
];

function setComponentFromCache(state, { component, imgMap, componentMap }) {
  const { node, content } = state;
  if (node.id !== component.id && node.name.charAt(0) === '#') {
    emptyChildren(state);
    content.push(`<${getComponentName(node.name)} {...this.props} nodeId="${node.id}" />`);
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
    print(`{ !!${props.content} && (`);
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

module.exports = {
  contentPlugins,
  setComponentFromCache,
  renderVector,
  renderPropsChildren,
  renderPropsChildrenIfEmpty,
  renderIfTrue,
  renderIfFalse
};