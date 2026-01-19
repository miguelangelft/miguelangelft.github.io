import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DmGAE-cX.mjs';
import 'piccolore';
import 'clsx';
import { r as renderEntry, f as formatDate } from './BaseLayout_BJG1FxSO.mjs';

const $$Astro = createAstro("https://miguelangelft.github.io/");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { entry } = Astro2.props;
  const { remarkPluginFrontmatter } = await renderEntry(entry);
  return renderTemplate`${maybeRenderHead()}<li class="py-2"> <div class="flex gap-5"> <div class="relative min-w-22 shrink-0"> <span class="text-muted-foreground text-sm">${formatDate(entry.data.date)}</span> </div> <a${addAttribute(`/writing/${entry.id}/`, "href")} class="flex flex-col gap-3"> <div class="flex flex-col"> <span class="text-headings font-medium">${entry.data.title}</span> <span class="text-muted-foreground">${remarkPluginFrontmatter.minutesRead}</span> </div> </a> </div> </li>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/PostPreview.astro", void 0);

export { $$PostPreview as $ };
