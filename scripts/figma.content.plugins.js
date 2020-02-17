const { getComponentName, emptyChildren } = require('./figma.shared');

const contentPlugins = [
  (state, { component, imgMap, componentMap }) => {
    const { node, content } = state;
    if (node.id !== component.id && node.name.charAt(0) === '#') {
      emptyChildren(state);
      content.push(`<${getComponentName(node.name)} {...this.props} nodeId="${node.id}" />`);
      createComponent(node, imgMap, componentMap);
    }
  },
  (state, { imgMap }) => {
    const { node, content } = state;
    if (node.type === 'VECTOR') {
      emptyChildren(state);
      content.push(`<div className="vector" dangerouslySetInnerHTML={{__html: \`${imgMap[node.id]}\`}} />`);
    }
  }
];

module.exports = { contentPlugins };
