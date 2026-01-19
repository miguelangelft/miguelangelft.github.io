import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, e as renderScript, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_DmGAE-cX.mjs';
import 'piccolore';
import { r as renderEntry, g as getEntry, b as getCollection, s as sortByDateRange, e as sortByYear, h as getSiteConfig, $ as $$BaseLayout, a as $$Container, D as DEFAULT_CONFIGURATION } from '../chunks/BaseLayout_BJG1FxSO.mjs';
import { $ as $$Author } from '../chunks/Author_CoLUCE7r.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://miguelangelft.github.io/");
const $$WorkExperience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkExperience;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const images = entry.data.images ? entry.data.images.map((img) => ({
    src: img.src,
    alt: entry.data.title
  })) : [];
  return renderTemplate`${maybeRenderHead()}<li class="py-0.5"> <div class="flex gap-5"> <div class="relative min-w-28 shrink-0"> <span class="text-muted-foreground text-sm">${entry.data.from} - ${entry.data.to ?? "Present"}</span> </div> <div class="flex flex-col gap-3"> <div class="flex flex-col"> <span class="text-headings font-medium">${entry.data.title}</span> <span class="text-foreground text-sm">${entry.data.company}</span> </div> <div class="prose dark:prose-invert prose-sm"> ${renderComponent($$result, "Content", Content, {})} </div> ${images.length > 0 && renderTemplate`<div class="flex gap-2 flex-wrap mt-2"> ${images.map((image, idx) => renderTemplate`<button class="work-image-thumb overflow-hidden rounded-lg border border-border hover:opacity-80 transition-opacity"${addAttribute(JSON.stringify(images), "data-images")}${addAttribute(idx, "data-index")}> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-20 h-20 object-cover"> </button>`)} </div>`} </div> </div> </li> ${renderScript($$result, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/WorkExperience.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/WorkExperience.astro", void 0);

const $$Astro = createAstro("https://miguelangelft.github.io/");
const $$Talk = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Talk;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${maybeRenderHead()}<li class="py-0.5"> <div class="flex gap-5"> <div class="relative min-w-28 shrink-0"> <span class="text-muted-foreground text-sm">${entry.data.year}</span> </div> <div class="flex flex-col gap-3"> <div class="flex flex-col"> <span class="text-headings font-medium">${entry.data.title}</span> <span class="text-foreground text-sm">${entry.data.event}, ${entry.data.location}</span> </div> <div class="prose dark:prose-invert prose-sm"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </li>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/Talk.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("pages", "homepage");
  if (!entry) {
    throw new Error("Homepage entry not found");
  }
  const { Content } = await renderEntry(entry);
  const links = await getCollection("links");
  const jobs = await getCollection("jobs");
  const sortedJobs = sortByDateRange(jobs);
  const talks = await getCollection("talks");
  const sortedTalks = sortByYear(talks);
  const config = getSiteConfig();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": entry.data.seo }, { "default": async ($$result2) => renderTemplate`${config.elements.avatar && renderTemplate`${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-6" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Author", $$Author, { ...DEFAULT_CONFIGURATION.author })} ` })}`}${config.sections.about && renderTemplate`${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-6" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6"> <div class="flex items-center"> <span class="text-headings">About</span> </div> <div class="prose dark:prose-invert"> ${renderComponent($$result3, "Content", Content, {})} </div> </div> ` })}`}${config.sections.socialLinks && links.length > 0 && renderTemplate`${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-8" }, { "default": async ($$result3) => renderTemplate` <div class="flex flex-col gap-5"> <span class="text-headings">Contact</span> <ul class="flex flex-col gap-3"> ${links.map((link) => renderTemplate`<li class="py-0.5"> <div class="flex items-center gap-5"> <span class="min-w-28 text-muted-foreground"> ${link.data.label} </span> <a class="text-headings font-medium" rel="noopener noreferrer" target="_blank"${addAttribute(link.data.url, "href")}> ${link.data.name} </a> </div> </li>`)} </ul> </div> ` })}`}${config.sections.workExperience && sortedJobs.length > 0 && renderTemplate`${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-6" }, { "default": async ($$result3) => renderTemplate` <div class="flex flex-col gap-5"> <span class="text-headings">Work Experience</span> <ul class="flex flex-col gap-8"> ${sortedJobs.map((job) => renderTemplate`${renderComponent($$result3, "WorkExperience", $$WorkExperience, { "entry": job })}`)} </ul> </div> ` })}`}${config.sections.talks && sortedTalks.length > 0 && renderTemplate`${renderComponent($$result2, "Container", $$Container, { "as": "section", "class": "py-6" }, { "default": async ($$result3) => renderTemplate` <div class="flex flex-col gap-5"> <span class="text-headings">Speaking</span> <ul class="flex flex-col gap-8"> ${sortedTalks.map((talk) => renderTemplate`${renderComponent($$result3, "Talk", $$Talk, { "entry": talk })}`)} </ul> </div> ` })}`}` })}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/index.astro", void 0);

const $$file = "/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
