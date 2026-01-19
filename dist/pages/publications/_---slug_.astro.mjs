import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DmGAE-cX.mjs';
import 'piccolore';
import { r as renderEntry, $ as $$BaseLayout, b as getCollection, a as $$Container, D as DEFAULT_CONFIGURATION, c as $$Image } from '../../chunks/BaseLayout_BJG1FxSO.mjs';
import { $ as $$Avatar } from '../../chunks/Avatar_DWF9UoTI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://miguelangelft.github.io/");
async function getStaticPaths() {
  const entries = await getCollection("posts");
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": entry.data.seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "as": "section" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <a href="/writing" class="transition-all text-muted-foreground hover:text-foreground pb-4 text-sm w-max">
Back to writing
</a> <div class="flex flex-col gap-1.5"> ${renderComponent($$result3, "Avatar", $$Avatar, {})} <span class="text-foreground">${DEFAULT_CONFIGURATION.author.name}</span> </div> <h1 class="text-3xl font-semibold text-headings">${entry.data.title}</h1> </div> ${entry.data.image && renderTemplate`<div class="relative aspect-video overflow-hidden rounded-lg"> ${renderComponent($$result3, "Image", $$Image, { "src": entry.data.image, "alt": entry.data.title, "class": "object-cover" })} </div>`} <div class="prose dark:prose-invert"> ${renderComponent($$result3, "Content", Content, {})} </div> </article> ` })} ` })}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/publications/[...slug].astro", void 0);

const $$file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/publications/[...slug].astro";
const $$url = "/publications/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
