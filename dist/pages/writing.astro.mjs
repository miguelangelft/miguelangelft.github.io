import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DmGAE-cX.mjs';
import 'piccolore';
import { g as getEntry, b as getCollection, $ as $$BaseLayout, a as $$Container, D as DEFAULT_CONFIGURATION } from '../chunks/BaseLayout_BJG1FxSO.mjs';
import { $ as $$Author } from '../chunks/Author_CoLUCE7r.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_BzwpCAe8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("pages", "writing");
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": entry.data.seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-6" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Author", $$Author, { ...DEFAULT_CONFIGURATION.author })} ` })} ${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-6" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6"> <span class="text-headings">Latest posts</span> <ul class="flex flex-col gap-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result3, "PostPreview", $$PostPreview, { "entry": post })}`)} </ul> </div> ` })} ` })}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/writing/index.astro", void 0);

const $$file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/writing/index.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
