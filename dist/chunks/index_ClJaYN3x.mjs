import { G as createVNode, Q as Fragment, _ as __astro_tag_component__ } from './astro/server_DmGAE-cX.mjs';
import 'clsx';

const frontmatter = {
  "title": "My posts — Miguel-Angel Fernandez-Torres",
  "seo": {
    "title": "My posts — Miguel-Angel Fernandez-Torres",
    "description": "My personal space, where I share more about my experience.",
    "type": "website",
    "keywords": "computer vision, machine learning, explainable artificial intelligence, image and video processing, multimedia"
  },
  "minutesRead": "0 min read"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "/writing";
const file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/writing/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/writing/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
