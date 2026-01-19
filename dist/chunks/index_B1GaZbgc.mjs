import { G as createVNode, Q as Fragment, _ as __astro_tag_component__ } from './astro/server_DmGAE-cX.mjs';
import 'clsx';

const frontmatter = {
  "title": "Miguel-Angel Fernandez-Torres — Assistant Professor at Universidad Carlos III de Madrid, Spain",
  "seo": {
    "title": "Miguel-Angel Fernandez-Torres — Assistant Professor",
    "description": "Hey I'm Miguel-Ángel, Assistant Professor at Universidad Carlos III de Madrid, Spain",
    "type": "website",
    "keywords": "computer vision, machine learning, explainable artificial intelligence, image and video processing, multimedia"
  },
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Miguel-Angel Fernandez-Torres received the Audiovisual Systems Engineering degree, the Master degree in Multimedia and Communications, and the Ph.D. degree in Multimedia and Communications from Universidad Carlos III de Madrid, Spain, in 2013, 2014, and 2019, respectively. He works at present as an Assistant Professor at the Signal Theory and Communications Department of Universidad Carlos III de Madrid, Spain, after having finished his postdoctoral stage at the Image and Signal Processing Group at the Universitat de València, Spain.</p>\n<p>His current research within the area of Machine Learning for Earth and Climate Sciences involves the design and understanding of explainable deep generative models and machine attention mechanisms to be deployed for anomaly and extreme event detection. Previously, he has participated in other projects within the Computer Vision field, which includes spatio-temporal visual attention modeling and understanding, image and video analysis, and medical image analysis and classification. He had also the opportunity to study at Technische Universität Wien, Vienna, Austria, during his Bachelor degree, in 2013, and to do two research stays at the Visual Perception Laboratory of Purdue University, West Lafayette, Indiana, USA, and the International Future Lab AI4EO at Technische Universität München, Munich, Germany, in 2016 and 2022, respectively.</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "/homepage";
const file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/homepage/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/homepage/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
