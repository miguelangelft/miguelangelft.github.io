import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DmGAE-cX.mjs';
import 'piccolore';
import { d as getImage, D as DEFAULT_CONFIGURATION, c as $$Image } from './BaseLayout_BJG1FxSO.mjs';

const $$Astro = createAstro("https://miguelangelft.github.io/");
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { class: className } = Astro2.props;
  const image = await getImage({ src: DEFAULT_CONFIGURATION.author.avatar, format: "avif" });
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "relative rounded-full shrink-0 overflow-hidden w-12 h-12",
    className
  ], "class:list")}> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "src": image.src, "alt": DEFAULT_CONFIGURATION.author.name, "width": 52, "height": 52, "class": "object-cover" })} </div>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/Avatar.astro", void 0);

export { $$Avatar as $ };
