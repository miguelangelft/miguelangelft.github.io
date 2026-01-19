import { G as createVNode, Q as Fragment, _ as __astro_tag_component__ } from './astro/server_DmGAE-cX.mjs';
import 'clsx';

const frontmatter = {
  "title": "Assistant Professor",
  "company": "Universidad Carlos III de Madrid",
  "location": "Leganés, Madrid, Spain",
  "from": 2024,
  "url": "https://miguelangelft.github.io/",
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

const url = "src/content/jobs/AP_UC3M.mdx";
const file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/jobs/AP_UC3M.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/jobs/AP_UC3M.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
