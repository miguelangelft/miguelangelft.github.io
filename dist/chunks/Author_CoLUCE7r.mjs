import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DmGAE-cX.mjs';
import 'piccolore';
import { d as getImage, c as $$Image } from './BaseLayout_BJG1FxSO.mjs';

const $$Astro = createAstro("https://miguelangelft.github.io/");
const $$Author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Author;
  const { avatar, name, headline, username, location, pronouns } = Astro2.props;
  const image = await getImage({ src: avatar, format: "avif" });
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-4"> <div class="relative rounded-full shrink-0 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "src": image.src, "alt": name, "width": 92, "height": 92, "class": "rounded-full" })} </div> <div class="flex flex-col gap-2"> <div class="flex flex-col gap-0.5"> <h1 class="text-xl font-semibold text-headings leading-tight">${name}</h1> <p class="text-base text-foreground leading-tight"> ${headline} in ${" "} <span> ${location} </span>,
${pronouns && renderTemplate`<span> ${pronouns} </span>`} </p> </div> <span class="text-foreground text-sm bg-muted-foreground/40 px-2 py-1 rounded-full w-max leading-none"> ${username} </span> </div> </div>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/Author.astro", void 0);

export { $$Author as $ };
