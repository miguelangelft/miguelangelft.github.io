import { G as createVNode, Q as Fragment, _ as __astro_tag_component__ } from './astro/server_DmGAE-cX.mjs';
import 'clsx';

const frontmatter = {
  "title": "404 - Page not found",
  "description": "Sorry, the page you are looking for doesn't exist or has been moved.",
  "seo": {
    "title": "404 - Page not found",
    "description": "Sorry, the page you are looking for doesn't exist or has been moved.",
    "type": "website",
    "robots": "noindex, no follow"
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

const url = "/404";
const file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/404.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/404.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
