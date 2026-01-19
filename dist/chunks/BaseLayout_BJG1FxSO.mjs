import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, a as renderTemplate, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderComponent, b as createAstro, i as renderSlot, m as maybeRenderHead, d as addAttribute, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, j as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, k as UnsupportedImageConversion, t as toStyleString, N as NoImageMetadata, F as FailedToFetchRemoteImageDimensions, l as ExpectedImageOptions, n as ExpectedNotESMImage, o as InvalidImageService, p as ImageMissingAlt, s as spreadAttributes, q as ExperimentalFontsNotEnabled, v as FontFamilyNotFound, w as cspAlgorithmSchema, x as cspHashSchema, y as allowedDirectivesSchema, z as ASTRO_VERSION, B as NoMatchingImport, C as renderHead } from './astro/server_DmGAE-cX.mjs';
import colors from 'piccolore';
/* empty css                         */
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import * as z from 'zod';
import { z as z$1, ZodError } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash, joinPaths, slash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import { isRemoteAllowed } from '@astrojs/internal-helpers/remote';
import 'clsx';
import * as mime from 'mrmime';
import { version } from 'vite';
import 'common-ancestor-path';
import { syntaxHighlightDefaults, markdownConfigDefaults, parseFrontmatter, isFrontmatterValid, rehypeShiki, rehypePrism, rehypeHeadingIds, remarkCollectImages } from '@astrojs/markdown-remark';
import { bundledThemes } from 'shiki';
import { createRequire } from 'node:module';
import { parse as parse$1 } from 'es-module-lexer';
import './shared_9gEenf6c.mjs';
import 'xxhash-wasm';
import 'github-slugger';
import path$1, { resolve, normalize } from 'node:path';
import fs$1, { createWriteStream } from 'node:fs';
import 'esbuild';
import { AstroTelemetry } from '@astrojs/telemetry';
import debugPackage from 'debug';
import 'smol-toml';
import 'tsconfck';
import 'zod-to-json-schema';
import '@rollup/pluginutils';
import 'dlv';
import 'dset';
import 'tinyexec';
import '@astrojs/compiler';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { version as version$1 } from 'react-dom';
import fs$2, { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parse } from 'acorn';
import colors$1 from 'picocolors';
import { visit } from 'unist-util-visit';
import { VFile } from 'vfile';
import { createProcessor, nodeTypes } from '@mdx-js/mdx';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import { SourceMapGenerator } from 'source-map';
import { visit as visit$1, SKIP } from 'estree-util-visit';
import { toHtml } from 'hast-util-to-html';
import { EnumChangefreq, SitemapAndIndexStream, SitemapStream, SitemapIndexStream } from 'sitemap';
import { Readable, pipeline } from 'node:stream';
import { promisify } from 'node:util';
import replace from 'stream-replace-string';
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_CUvq5xyU.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://miguelangelft.github.io/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z$1.object({
  tags: z$1.array(z$1.string()).optional(),
  lastModified: z$1.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await Promise.resolve().then(() => _astro_assets);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_CuGxj2Km.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const $$Astro$7 = createAstro("https://miguelangelft.github.io/");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Container;
  const { as: Tag = "div", class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "max-w-[40rem] mx-auto px-4",
    className
  ] }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/Container.astro", void 0);

const SiteConfigSchema = z.object({
  sections: z.object({
    about: z.boolean(),
    workExperience: z.boolean(),
    talks: z.boolean(),
    writing: z.boolean(),
    socialLinks: z.boolean()
  }),
  elements: z.object({
    avatar: z.boolean(),
    themeSwitch: z.boolean(),
    header: z.boolean(),
    footer: z.boolean()
  })
});
const defaultConfig = {
  sections: {
    about: true,
    workExperience: true,
    talks: true,
    writing: true,
    socialLinks: true
  },
  elements: {
    avatar: true,
    themeSwitch: true,
    footer: true,
    header: true
  }
};
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      if (target[key] === void 0) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
function isValidConfig(config) {
  return SiteConfigSchema.safeParse(config).success;
}
function getSiteConfig() {
  const configPath = path.join(process.cwd(), "config.yml");
  let loadedConfig = {};
  try {
    const fileContents = fs.readFileSync(configPath, "utf8");
    loadedConfig = yaml.load(fileContents);
    if (!loadedConfig || typeof loadedConfig !== "object") {
      console.warn(
        "config.yml is empty or not a valid YAML object, using defaults"
      );
      return defaultConfig;
    }
    const mergedConfig = deepMerge(loadedConfig, defaultConfig);
    if (!isValidConfig(mergedConfig)) {
      console.warn(
        "config.yml is malformed or missing required fields, using defaults"
      );
      return defaultConfig;
    }
    return mergedConfig;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn("config.yml not found, using defaults");
    } else if (error.name === "YAMLException" || error instanceof yaml.YAMLException) {
      console.warn("config.yml is malformed YAML, using defaults");
    } else {
      console.warn(
        `Error loading config.yml: ${error.message}, using defaults`
      );
    }
    return defaultConfig;
  }
}

const $$Astro$6 = createAstro("https://miguelangelft.github.io/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const isHomePage = pathname === "/";
  pathname.startsWith("/writing");
  const config = getSiteConfig();
  return renderTemplate`${config.elements.header && renderTemplate`${renderComponent($$result, "Container", $$Container, { "as": "header", "class": "w-full max-w-full flex justify-center items-center" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-max fixed top-0 mt-5 bg-muted-foreground/40 backdrop-blur-3xl border border-border rounded-full p-1"><nav class="flex items-center"><ul class="flex items-center gap-1"><li><a href="/"${addAttribute([
    "font-medium transition-colors block px-5 py-2",
    "hover:text-headings",
    isHomePage && "text-headings bg-muted-foreground/40 rounded-full"
  ], "class:list")}>Home</a></li></ul></nav></div>` })}`}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/partials/Header.astro", void 0);

const $$Astro$5 = createAstro("https://miguelangelft.github.io/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const config = getSiteConfig();
  return renderTemplate`${config.elements.footer && renderTemplate`${renderComponent($$result, "Container", $$Container, { "as": "footer", "class": "pt-24" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p class="text-center text-muted-foreground text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}. Powered by <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a> and CVfolio.
</p>` })}`}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/partials/Footer.astro", void 0);

const DEFAULT_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  960,
  // older horizontal phones
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  1920,
  // 1080p
  2048,
  // QXGA
  2560,
  // WQXGA
  3200,
  // QHD+
  3840,
  // 4K
  4480,
  // 4.5K
  5120,
  // 5K
  6016
  // 6K
];
const LIMITED_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  2048,
  // QXGA
  2560
  // WQXGA
];
const getWidths = ({
  width,
  layout,
  breakpoints = DEFAULT_RESOLUTIONS,
  originalWidth
}) => {
  const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
  if (layout === "full-width") {
    return breakpoints.filter(smallerThanOriginal);
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
  if (layout === "fixed") {
    return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      ...breakpoints
    ].filter((w) => w <= maxSize).sort((a, b) => a - b);
  }
  return [];
};
const getSizesAttribute = ({
  width,
  layout
}) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size then image width is the max size,
    // otherwise it's the width of the screen
    case "constrained":
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case "fixed":
      return `${width}px`;
    // Image is always the width of the screen
    case "full-width":
      return `100vw`;
    case "none":
    default:
      return void 0;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  if (typeof src === "object" && "then" in src) {
    const resource = await src;
    return resource.default ?? resource;
  }
  return src;
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const sortNumeric = (a, b) => a - b;
function verifyOptions(options) {
  if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        JSON.stringify(options.src),
        typeof options.src,
        JSON.stringify(options, (_, v) => v === void 0 ? null : v)
      )
    });
  }
  if (!isESMImportedImage(options.src)) {
    if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
      throw new AstroError({
        ...LocalImageUsedWrongly,
        message: LocalImageUsedWrongly.message(options.src)
      });
    }
    let missingDimension;
    if (!options.width && !options.height) {
      missingDimension = "both";
    } else if (!options.width && options.height) {
      missingDimension = "width";
    } else if (options.width && !options.height) {
      missingDimension = "height";
    }
    if (missingDimension) {
      throw new AstroError({
        ...MissingImageDimension,
        message: MissingImageDimension.message(missingDimension, options.src)
      });
    }
  } else {
    if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
      throw new AstroError({
        ...UnsupportedImageFormat,
        message: UnsupportedImageFormat.message(
          options.src.format,
          options.src.src,
          VALID_SUPPORTED_FORMATS
        )
      });
    }
    if (options.widths && options.densities) {
      throw new AstroError(IncompatibleDescriptorOptions);
    }
    if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
      throw new AstroError(UnsupportedImageConversion);
    }
  }
}
const baseService = {
  validateOptions(options) {
    if (isESMImportedImage(options.src) && options.src.format === "svg") {
      options.format = "svg";
    }
    verifyOptions(options);
    if (!options.format) {
      options.format = DEFAULT_OUTPUT_FORMAT;
    }
    if (options.width) options.width = Math.round(options.width);
    if (options.height) options.height = Math.round(options.height);
    if (options.layout && options.width && options.height) {
      options.fit ??= "cover";
      delete options.layout;
    }
    if (options.fit === "none") {
      delete options.fit;
    }
    return options;
  },
  getHTMLAttributes(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const {
      src,
      width,
      height,
      format,
      quality,
      densities,
      widths,
      formats,
      layout,
      priority,
      fit,
      position,
      ...attributes
    } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getSrcSet(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const aspectRatio = targetWidth / targetHeight;
    const { widths, densities } = options;
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
    let transformedWidths = (widths ?? []).sort(sortNumeric);
    let imageWidth = options.width;
    let maxWidth = Infinity;
    if (isESMImportedImage(options.src)) {
      imageWidth = options.src.width;
      maxWidth = imageWidth;
      if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
        transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
        transformedWidths.push(maxWidth);
      }
    }
    transformedWidths = Array.from(new Set(transformedWidths));
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`
      }));
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio);
      const transform = { ...transformWithoutDimensions, width, height };
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`
        }
      };
    });
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format",
      fit: "fit",
      position: "position"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", imageConfig.endpoint.route);
    let url = `${imageEndpoint}?${searchParams}`;
    if (imageConfig.assetQueryParams) {
      const assetQueryString = imageConfig.assetQueryParams.toString();
      if (assetQueryString) {
        url += "&" + assetQueryString;
      }
    }
    return url;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q"),
      fit: params.get("fit"),
      position: params.get("position") ?? void 0
    };
    return transform;
  }
};
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const cssFitValues = ["fill", "contain", "cover", "scale-down"];
function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + `0${i.toString(16)}`.slice(-2), "");
const getView = (input, offset) => new DataView(input.buffer, input.byteOffset + offset);
const readInt16LE = (input, offset = 0) => getView(input, offset).getInt16(0, true);
const readUInt16BE = (input, offset = 0) => getView(input, offset).getUint16(0, false);
const readUInt16LE = (input, offset = 0) => getView(input, offset).getUint16(0, true);
const readUInt24LE = (input, offset = 0) => {
  const view = getView(input, offset);
  return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
const readInt32LE = (input, offset = 0) => getView(input, offset).getInt32(0, true);
const readUInt32BE = (input, offset = 0) => getView(input, offset).getUint32(0, false);
const readUInt32LE = (input, offset = 0) => getView(input, offset).getUint32(0, true);
const readUInt64 = (input, offset, isBigEndian) => getView(input, offset).getBigUint64(0, !isBigEndian);
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = `readUInt${bits}${endian}`;
  return methods[methodName](input, offset);
}
function readBox(input, offset) {
  if (input.length - offset < 4) return;
  const boxSize = readUInt32BE(input, offset);
  if (input.length - offset < boxSize) return;
  return {
    name: toUTF8String(input, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(input, boxName, currentOffset) {
  while (currentOffset < input.length) {
    const box = readBox(input, currentOffset);
    if (!box) break;
    if (box.name === boxName) return box;
    currentOffset += box.size > 0 ? box.size : 8;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const images = [];
    for (let imageIndex = 0; imageIndex < nbImages; imageIndex += 1) {
      images.push(getImageSize$1(input, imageIndex));
    }
    return {
      width: imageSize.width,
      height: imageSize.height,
      images
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  avis: "avif",
  // avif-sequence
  mif1: "heif",
  msf1: "heif",
  // heif-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectType(input, start, end) {
  let hasAvif = false;
  let hasHeic = false;
  let hasHeif = false;
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(input, i, i + 4);
    if (brand === "avif" || brand === "avis") hasAvif = true;
    else if (brand === "heic" || brand === "heix" || brand === "hevc" || brand === "hevx") hasHeic = true;
    else if (brand === "mif1" || brand === "msf1") hasHeif = true;
  }
  if (hasAvif) return "avif";
  if (hasHeic) return "heic";
  if (hasHeif) return "heif";
}
const HEIF = {
  validate(input) {
    const boxType = toUTF8String(input, 4, 8);
    if (boxType !== "ftyp") return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
    return brand in brandMap;
  },
  calculate(input) {
    const metaBox = findBox(input, "meta", 0);
    const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
    if (!ipcoBox) {
      throw new TypeError("Invalid HEIF, no ipco box found");
    }
    const type = detectType(input, 8, metaBox.offset);
    const images = [];
    let currentOffset = ipcoBox.offset + 8;
    while (currentOffset < ipcoBox.offset + ipcoBox.size) {
      const ispeBox = findBox(input, "ispe", currentOffset);
      if (!ispeBox) break;
      const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
      const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
      const clapBox = findBox(input, "clap", currentOffset);
      let width = rawWidth;
      let height = rawHeight;
      if (clapBox && clapBox.offset < ipcoBox.offset + ipcoBox.size) {
        const cropRight = readUInt32BE(input, clapBox.offset + 12);
        width = rawWidth - cropRight;
      }
      images.push({ height, width });
      currentOffset = ispeBox.offset + ispeBox.size;
    }
    if (images.length === 0) {
      throw new TypeError("Invalid HEIF, no sizes found");
    }
    return {
      width: images[0].width,
      height: images[0].height,
      type,
      ...images.length > 1 ? { images } : {}
    };
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    const images = [];
    while (imageOffset < fileLength && imageOffset < inputLength) {
      const imageHeader = readImageHeader(input, imageOffset);
      const imageSize = getImageSize(imageHeader[0]);
      images.push(imageSize);
      imageOffset += imageHeader[1];
    }
    if (images.length === 0) {
      throw new TypeError("Invalid ICNS, no sizes found");
    }
    return {
      width: images[0].width,
      height: images[0].height,
      ...images.length > 1 ? { images } : {}
    };
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => readUInt32BE(input, 0) === 4283432785,
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    const boxType = toUTF8String(input, 4, 8);
    if (boxType !== "jP  ") return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
    return brand === "jp2 ";
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(_input) {
    let input = _input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      validateInput(input, i);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

class BitReader {
  constructor(input, endianness) {
    this.input = input;
    this.endianness = endianness;
  }
  // Skip the first 16 bits (2 bytes) of signature
  byteOffset = 2;
  bitOffset = 0;
  /** Reads a specified number of bits, and move the offset */
  getBits(length = 1) {
    let result = 0;
    let bitsRead = 0;
    while (bitsRead < length) {
      if (this.byteOffset >= this.input.length) {
        throw new Error("Reached end of input");
      }
      const currentByte = this.input[this.byteOffset];
      const bitsLeft = 8 - this.bitOffset;
      const bitsToRead = Math.min(length - bitsRead, bitsLeft);
      if (this.endianness === "little-endian") {
        const mask = (1 << bitsToRead) - 1;
        const bits = currentByte >> this.bitOffset & mask;
        result |= bits << bitsRead;
      } else {
        const mask = (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead;
        const bits = (currentByte & mask) >> 8 - this.bitOffset - bitsToRead;
        result = result << bitsToRead | bits;
      }
      bitsRead += bitsToRead;
      this.bitOffset += bitsToRead;
      if (this.bitOffset === 8) {
        this.byteOffset++;
        this.bitOffset = 0;
      }
    }
    return result;
  }
}

function calculateImageDimension(reader, isSmallImage) {
  if (isSmallImage) {
    return 8 * (1 + reader.getBits(5));
  }
  const sizeClass = reader.getBits(2);
  const extraBits = [9, 13, 18, 30][sizeClass];
  return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
  if (isSmallImage && widthMode === 0) {
    return 8 * (1 + reader.getBits(5));
  }
  if (widthMode === 0) {
    return calculateImageDimension(reader, false);
  }
  const aspectRatios = [1, 1.2, 4 / 3, 1.5, 16 / 9, 5 / 4, 2];
  return Math.floor(height * aspectRatios[widthMode - 1]);
}
const JXLStream = {
  validate: (input) => {
    return toHexString(input, 0, 2) === "ff0a";
  },
  calculate(input) {
    const reader = new BitReader(input, "little-endian");
    const isSmallImage = reader.getBits(1) === 1;
    const height = calculateImageDimension(reader, isSmallImage);
    const widthMode = reader.getBits(3);
    const width = calculateImageWidth(reader, isSmallImage, widthMode, height);
    return { width, height };
  }
};

function extractCodestream(input) {
  const jxlcBox = findBox(input, "jxlc", 0);
  if (jxlcBox) {
    return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
  }
  const partialStreams = extractPartialStreams(input);
  if (partialStreams.length > 0) {
    return concatenateCodestreams(partialStreams);
  }
  return void 0;
}
function extractPartialStreams(input) {
  const partialStreams = [];
  let offset = 0;
  while (offset < input.length) {
    const jxlpBox = findBox(input, "jxlp", offset);
    if (!jxlpBox) break;
    partialStreams.push(
      input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size)
    );
    offset = jxlpBox.offset + jxlpBox.size;
  }
  return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
  const totalLength = partialCodestreams.reduce(
    (acc, curr) => acc + curr.length,
    0
  );
  const codestream = new Uint8Array(totalLength);
  let position = 0;
  for (const partial of partialCodestreams) {
    codestream.set(partial, position);
    position += partial.length;
  }
  return codestream;
}
const JXL = {
  validate: (input) => {
    const boxType = toUTF8String(input, 4, 8);
    if (boxType !== "JXL ") return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
    return brand === "jxl ";
  },
  calculate(input) {
    const codestream = extractCodestream(input);
    if (codestream) return JXLStream.calculate(codestream);
    throw new Error("No codestream found in JXL container");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: Number.parseInt(dimensions[1], 10),
        width: Number.parseInt(dimensions[0], 10)
      };
    }
    throw new TypeError("Invalid PNM");
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = Number.parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    }
    throw new TypeError("Invalid PAM");
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

const CONSTANTS = {
  TAG: {
    WIDTH: 256,
    HEIGHT: 257,
    COMPRESSION: 259
  },
  TYPE: {
    SHORT: 3,
    LONG: 4,
    LONG8: 16
  },
  ENTRY_SIZE: {
    STANDARD: 12,
    BIG: 20
  },
  COUNT_SIZE: {
    STANDARD: 2,
    BIG: 8
  }
};
function readIFD(input, { isBigEndian, isBigTiff }) {
  const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
  const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
  return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
  switch (type) {
    case CONSTANTS.TYPE.SHORT:
      return readUInt(input, 16, offset, isBigEndian);
    case CONSTANTS.TYPE.LONG:
      return readUInt(input, 32, offset, isBigEndian);
    case CONSTANTS.TYPE.LONG8: {
      const value = Number(readUInt64(input, offset, isBigEndian));
      if (value > Number.MAX_SAFE_INTEGER) {
        throw new TypeError("Value too large");
      }
      return value;
    }
    default:
      return 0;
  }
}
function nextTag(input, isBigTiff) {
  const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
  if (input.length > entrySize) {
    return input.slice(entrySize);
  }
}
function extractTags(input, { isBigEndian, isBigTiff }) {
  const tags = {};
  let temp = input;
  while (temp?.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) break;
    if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) {
      const valueOffset = isBigTiff ? 12 : 8;
      tags[code] = readTagValue(temp, type, valueOffset, isBigEndian);
    }
    temp = nextTag(temp, isBigTiff);
  }
  return tags;
}
function determineFormat(input) {
  const signature = toUTF8String(input, 0, 2);
  const version = readUInt(input, 16, 2, signature === "MM");
  return {
    isBigEndian: signature === "MM",
    isBigTiff: version === 43
  };
}
function validateBigTIFFHeader(input, isBigEndian) {
  const byteSize = readUInt(input, 16, 4, isBigEndian);
  const reserved = readUInt(input, 16, 6, isBigEndian);
  if (byteSize !== 8 || reserved !== 0) {
    throw new TypeError("Invalid BigTIFF header");
  }
}
const signatures = /* @__PURE__ */ new Set([
  "49492a00",
  // Little Endian
  "4d4d002a",
  // Big Endian
  "49492b00",
  // BigTIFF Little Endian
  "4d4d002b"
  // BigTIFF Big Endian
]);
const TIFF = {
  validate: (input) => {
    const signature = toHexString(input, 0, 4);
    return signatures.has(signature);
  },
  calculate(input) {
    const format = determineFormat(input);
    if (format.isBigTiff) {
      validateBigTIFFHeader(input, format.isBigEndian);
    }
    const ifdBuffer = readIFD(input, format);
    const tags = extractTags(ifdBuffer, format);
    const info = {
      height: tags[CONSTANTS.TAG.HEIGHT],
      width: tags[CONSTANTS.TAG.WIDTH],
      type: format.isBigTiff ? "bigtiff" : "tiff"
    };
    if (tags[CONSTANTS.TAG.COMPRESSION]) {
      info.compression = tags[CONSTANTS.TAG.COMPRESSION];
    }
    if (!info.width || !info.height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return info;
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(_input) {
    const chunkHeader = toUTF8String(_input, 12, 16);
    const input = _input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      }
      throw new TypeError("Invalid WebP");
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["jxl", JXL],
  ["jxl-stream", JXLStream],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [0, "heif"],
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((imageType) => typeHandlers.get(imageType).validate(input));
}

function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  let result;
  try {
    result = lookup(data);
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  if (!result.height || !result.width || !result.type) {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  const { width, height, type, orientation } = result;
  const isPortrait = (orientation || 0) >= 5;
  return {
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type,
    orientation
  };
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

const PLACEHOLDER_BASE = "astro://placeholder";
function createPlaceholderURL(pathOrUrl) {
  return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(url) {
  return url.href.replace(PLACEHOLDER_BASE, "");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './sharp_Dz0Y7KFJ.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig.layout ?? "none";
  if (resolvedOptions.priority) {
    resolvedOptions.loading ??= "eager";
    resolvedOptions.decoding ??= "sync";
    resolvedOptions.fetchpriority ??= "high";
    delete resolvedOptions.priority;
  } else {
    resolvedOptions.loading ??= "lazy";
    resolvedOptions.decoding ??= "async";
    resolvedOptions.fetchpriority ??= "auto";
  }
  if (layout !== "none") {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    delete resolvedOptions.densities;
    resolvedOptions.style = addCSSVarsToStyle(
      {
        fit: cssFitValues.includes(resolvedOptions.fit ?? "") && resolvedOptions.fit,
        pos: resolvedOptions.position
      },
      resolvedOptions.style
    );
    resolvedOptions["data-astro-image"] = layout;
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  } else if (imageConfig.assetQueryParams) {
    const imageURLObj = createPlaceholderURL(imageURL);
    imageConfig.assetQueryParams.forEach((value, key) => {
      imageURLObj.searchParams.set(key, value);
    });
    imageURL = stringifyPlaceholderURL(imageURLObj);
    srcSets = srcSets.map((srcSet) => {
      const urlObj = createPlaceholderURL(srcSet.url);
      imageConfig.assetQueryParams.forEach((value, key) => {
        urlObj.searchParams.set(key, value);
      });
      return {
        ...srcSet,
        url: stringifyPlaceholderURL(urlObj)
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$4 = createAstro("https://miguelangelft.github.io/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/node_modules/astro/components/Image.astro", void 0);

const $$Astro$3 = createAstro("https://miguelangelft.github.io/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/node_modules/astro/components/Picture.astro", void 0);

const internalConsumableMap = new Map([["--font-inter",{"preloadData":[{"url":"/_astro/fonts/26313074bda99f9f.woff2","type":"woff2","weight":"400","style":"normal"},{"url":"/_astro/fonts/c9ea79599d17d954.woff2","type":"woff2","weight":"500","style":"normal"},{"url":"/_astro/fonts/df41ba968fad4dea.woff2","type":"woff2","weight":"600","style":"normal"},{"url":"/_astro/fonts/7fafc375d40077fb.woff2","type":"woff2","weight":"700","style":"normal"},{"url":"/_astro/fonts/968facafb715f119.woff2","type":"woff2","weight":"800","style":"normal"}],"css":"@font-face{font-family:Inter-a8dd60fd88b99a8e;src:url(\"/_astro/fonts/26313074bda99f9f.woff2\") format(\"woff2\");font-display:swap;font-weight:400;font-style:normal;}@font-face{font-family:Inter-a8dd60fd88b99a8e;src:url(\"/_astro/fonts/c9ea79599d17d954.woff2\") format(\"woff2\");font-display:swap;font-weight:500;font-style:normal;}@font-face{font-family:Inter-a8dd60fd88b99a8e;src:url(\"/_astro/fonts/df41ba968fad4dea.woff2\") format(\"woff2\");font-display:swap;font-weight:600;font-style:normal;}@font-face{font-family:Inter-a8dd60fd88b99a8e;src:url(\"/_astro/fonts/7fafc375d40077fb.woff2\") format(\"woff2\");font-display:swap;font-weight:700;font-style:normal;}@font-face{font-family:Inter-a8dd60fd88b99a8e;src:url(\"/_astro/fonts/968facafb715f119.woff2\") format(\"woff2\");font-display:swap;font-weight:800;font-style:normal;}@font-face{font-family:\"Inter-a8dd60fd88b99a8e fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:400;font-style:normal;size-adjust:107.1194%;ascent-override:90.4365%;descent-override:22.518%;line-gap-override:0%;}@font-face{font-family:\"Inter-a8dd60fd88b99a8e fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:500;font-style:normal;size-adjust:107.1194%;ascent-override:90.4365%;descent-override:22.518%;line-gap-override:0%;}@font-face{font-family:\"Inter-a8dd60fd88b99a8e fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:600;font-style:normal;size-adjust:107.1194%;ascent-override:90.4365%;descent-override:22.518%;line-gap-override:0%;}@font-face{font-family:\"Inter-a8dd60fd88b99a8e fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:700;font-style:normal;size-adjust:107.1194%;ascent-override:90.4365%;descent-override:22.518%;line-gap-override:0%;}@font-face{font-family:\"Inter-a8dd60fd88b99a8e fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:800;font-style:normal;size-adjust:107.1194%;ascent-override:90.4365%;descent-override:22.518%;line-gap-override:0%;}:root{--font-inter:Inter-a8dd60fd88b99a8e,\"Inter-a8dd60fd88b99a8e fallback: Arial\",sans-serif;}"}],["--font-inter-variable",{"preloadData":[{"url":"/_astro/fonts/569efcc233e2cdcc.woff2","type":"woff2","weight":"variable","style":"normal"}],"css":"@font-face{font-family:InterVariable-ef71d9f53625d89b;src:url(\"/_astro/fonts/569efcc233e2cdcc.woff2\") format(\"woff2\");font-display:swap;font-weight:variable;font-style:normal;}@font-face{font-family:\"InterVariable-ef71d9f53625d89b fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:variable;font-style:normal;size-adjust:107.1194%;ascent-override:90.4365%;descent-override:22.518%;line-gap-override:0%;}:root{--font-inter-variable:InterVariable-ef71d9f53625d89b,\"InterVariable-ef71d9f53625d89b fallback: Arial\",sans-serif;}"}]]);
						const consumableMap = new Map([["--font-inter",[{"weight":"400","style":"normal","src":[{"url":"/_astro/fonts/26313074bda99f9f.woff2","format":"woff2"}]},{"weight":"500","style":"normal","src":[{"url":"/_astro/fonts/c9ea79599d17d954.woff2","format":"woff2"}]},{"weight":"600","style":"normal","src":[{"url":"/_astro/fonts/df41ba968fad4dea.woff2","format":"woff2"}]},{"weight":"700","style":"normal","src":[{"url":"/_astro/fonts/7fafc375d40077fb.woff2","format":"woff2"}]},{"weight":"800","style":"normal","src":[{"url":"/_astro/fonts/968facafb715f119.woff2","format":"woff2"}]}]],["--font-inter-variable",[{"weight":"variable","style":"normal","src":[{"url":"/_astro/fonts/569efcc233e2cdcc.woff2","format":"woff2"}]}]]]);

const fontsMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  consumableMap,
  internalConsumableMap
}, Symbol.toStringTag, { value: 'Module' }));

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Astro$2 = createAstro("https://miguelangelft.github.io/");
const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Font;
  const { internalConsumableMap } = fontsMod;
  if (!internalConsumableMap) {
    throw new AstroError(ExperimentalFontsNotEnabled);
  }
  const { cssVariable, preload = false } = Astro2.props;
  const data = internalConsumableMap.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloadData, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/node_modules/astro/components/Font.astro", void 0);

const assetQueryParams = undefined;
							const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"responsiveStyles":false};
							Object.defineProperty(imageConfig, 'assetQueryParams', {
								value: assetQueryParams,
								enumerable: false,
								configurable: true,
							});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const _astro_assets = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Font: $$Font,
  Image: $$Image,
  getConfiguredImageService,
  getImage,
  imageConfig,
  inferRemoteSize,
  isLocalService
}, Symbol.toStringTag, { value: 'Module' }));

const MetaDefaultImage = new Proxy({"src":"/_astro/meta-default.DK5p9QRF.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/matorres/Documents/personal/miguelangelft.github.io/src/assets/images/meta-default.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/matorres/Documents/personal/miguelangelft.github.io/src/assets/images/meta-default.jpg");
							return target[name];
						}
					});

const avatar = new Proxy({"src":"/_astro/MA_2024_25.Bp_v_shK.jpg","width":908,"height":908,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/matorres/Documents/personal/miguelangelft.github.io/src/assets/images/MA_2024_25.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/matorres/Documents/personal/miguelangelft.github.io/src/assets/images/MA_2024_25.jpg");
							return target[name];
						}
					});

function resolveJsToTs(filePath) {
  if (filePath.endsWith(".jsx") && !fs$1.existsSync(filePath)) {
    const tryPath = filePath.slice(0, -4) + ".tsx";
    if (fs$1.existsSync(tryPath)) {
      return tryPath;
    }
  }
  return filePath;
}

const LOCAL_PROVIDER_NAME = "local";
const FONT_TYPES = ["woff2", "woff", "otf", "ttf", "eot"];

const weightSchema = z$1.union([z$1.string(), z$1.number()]);
const styleSchema = z$1.enum(["normal", "italic", "oblique"]);
const displaySchema = z$1.enum(["auto", "block", "swap", "fallback", "optional"]);
const familyPropertiesSchema = z$1.object({
  weight: weightSchema.optional(),
  style: styleSchema.optional(),
  display: displaySchema.optional(),
  stretch: z$1.string().optional(),
  featureSettings: z$1.string().optional(),
  variationSettings: z$1.string().optional(),
  unicodeRange: z$1.array(z$1.string()).nonempty().optional()
});
const fallbacksSchema = z$1.object({
  fallbacks: z$1.array(z$1.string()).optional(),
  optimizedFallbacks: z$1.boolean().optional()
});
const requiredFamilyAttributesSchema = z$1.object({
  name: z$1.string(),
  cssVariable: z$1.string()
});
const entrypointSchema = z$1.union([z$1.string(), z$1.instanceof(URL)]);
const localFontFamilySchema = z$1.object({
  ...requiredFamilyAttributesSchema.shape,
  ...fallbacksSchema.shape,
  provider: z$1.literal(LOCAL_PROVIDER_NAME),
  variants: z$1.array(
    z$1.object({
      ...familyPropertiesSchema.shape,
      src: z$1.array(
        z$1.union([
          entrypointSchema,
          z$1.object({ url: entrypointSchema, tech: z$1.string().optional() }).strict()
        ])
      ).nonempty()
      // TODO: find a way to support subsets (through fontkit?)
    }).strict()
  ).nonempty()
}).strict();
const fontProviderSchema = z$1.object({
  name: z$1.string(),
  config: z$1.record(z$1.string(), z$1.any()).optional(),
  init: z$1.custom((v) => typeof v === "function").optional(),
  resolveFont: z$1.custom((v) => typeof v === "function"),
  listFonts: z$1.custom((v) => typeof v === "function").optional()
}).strict();
const remoteFontFamilySchema = z$1.object({
  ...requiredFamilyAttributesSchema.shape,
  ...fallbacksSchema.shape,
  ...familyPropertiesSchema.omit({
    weight: true,
    style: true
  }).shape,
  provider: fontProviderSchema,
  weights: z$1.array(weightSchema).nonempty().optional(),
  styles: z$1.array(styleSchema).nonempty().optional(),
  subsets: z$1.array(z$1.string()).nonempty().optional(),
  formats: z$1.array(z$1.enum(FONT_TYPES)).nonempty().optional()
}).strict();

const StringSchema = z$1.object({
  type: z$1.literal("string"),
  optional: z$1.boolean().optional(),
  default: z$1.string().optional(),
  max: z$1.number().optional(),
  min: z$1.number().min(0).optional(),
  length: z$1.number().optional(),
  url: z$1.boolean().optional(),
  includes: z$1.string().optional(),
  startsWith: z$1.string().optional(),
  endsWith: z$1.string().optional()
});
const NumberSchema = z$1.object({
  type: z$1.literal("number"),
  optional: z$1.boolean().optional(),
  default: z$1.number().optional(),
  gt: z$1.number().optional(),
  min: z$1.number().optional(),
  lt: z$1.number().optional(),
  max: z$1.number().optional(),
  int: z$1.boolean().optional()
});
const BooleanSchema = z$1.object({
  type: z$1.literal("boolean"),
  optional: z$1.boolean().optional(),
  default: z$1.boolean().optional()
});
const EnumSchema = z$1.object({
  type: z$1.literal("enum"),
  values: z$1.array(
    // We use "'" for codegen so it can't be passed here
    z$1.string().refine((v) => !v.includes("'"), {
      message: `The "'" character can't be used as an enum value`
    })
  ),
  optional: z$1.boolean().optional(),
  default: z$1.string().optional()
});
const EnvFieldType = z$1.union([
  StringSchema,
  NumberSchema,
  BooleanSchema,
  EnumSchema.superRefine((schema, ctx) => {
    if (schema.default) {
      if (!schema.values.includes(schema.default)) {
        ctx.addIssue({
          code: z$1.ZodIssueCode.custom,
          message: `The default value "${schema.default}" must be one of the specified values: ${schema.values.join(", ")}.`
        });
      }
    }
  })
]);
const PublicClientEnvFieldMetadata = z$1.object({
  context: z$1.literal("client"),
  access: z$1.literal("public")
});
const PublicServerEnvFieldMetadata = z$1.object({
  context: z$1.literal("server"),
  access: z$1.literal("public")
});
const SecretServerEnvFieldMetadata = z$1.object({
  context: z$1.literal("server"),
  access: z$1.literal("secret")
});
const _EnvFieldMetadata = z$1.union([
  PublicClientEnvFieldMetadata,
  PublicServerEnvFieldMetadata,
  SecretServerEnvFieldMetadata
]);
const EnvFieldMetadata = z$1.custom().superRefine((data, ctx) => {
  const result = _EnvFieldMetadata.safeParse(data);
  if (result.success) {
    return;
  }
  for (const issue of result.error.issues) {
    if (issue.code === z$1.ZodIssueCode.invalid_union) {
      ctx.addIssue({
        code: z$1.ZodIssueCode.custom,
        message: `**Invalid combination** of "access" and "context" options:
  Secret client variables are not supported. Please review the configuration of \`env.schema.${ctx.path.at(-1)}\`.
  Learn more at https://docs.astro.build/en/guides/environment-variables/#variable-types`,
        path: ["context", "access"]
      });
    } else {
      ctx.addIssue(issue);
    }
  }
});
const EnvSchemaKey = z$1.string().min(1).refine(([firstChar]) => isNaN(Number.parseInt(firstChar)), {
  message: "A valid variable name cannot start with a number."
}).refine((str) => /^[A-Z0-9_]+$/.test(str), {
  message: "A valid variable name can only contain uppercase letters, numbers and underscores."
});
const EnvSchema = z$1.record(EnvSchemaKey, z$1.intersection(EnvFieldMetadata, EnvFieldType));

const ASTRO_CONFIG_DEFAULTS = {
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  cacheDir: "./node_modules/.astro",
  base: "/",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    client: "./client/",
    server: "./server/",
    assets: "_astro",
    serverEntry: "entry.mjs",
    redirects: true,
    inlineStylesheets: "auto",
    concurrency: 1
  },
  image: {
    endpoint: { entrypoint: void 0, route: "/_image" },
    service: { entrypoint: "astro/assets/services/sharp", config: {} },
    responsiveStyles: false
  },
  devToolbar: {
    enabled: true
  },
  compressHTML: true,
  server: {
    host: false,
    port: 4321,
    open: false,
    allowedHosts: []
  },
  integrations: [],
  markdown: markdownConfigDefaults,
  vite: {},
  legacy: {
    collections: false
  },
  redirects: {},
  security: {
    checkOrigin: true,
    allowedDomains: []
  },
  env: {
    schema: {},
    validateSecrets: false
  },
  experimental: {
    clientPrerender: false,
    contentIntellisense: false,
    headingIdCompat: false,
    preserveScriptOrder: false,
    liveContentCollections: false,
    csp: false,
    staticImportMetaEnv: false,
    chromeDevtoolsWorkspace: false,
    failOnPrerenderConflict: false,
    svgo: false
  }
};
const highlighterTypesSchema = z$1.union([z$1.literal("shiki"), z$1.literal("prism")]).default(syntaxHighlightDefaults.type);
z$1.object({
  root: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.root).transform((val) => new URL(val)),
  srcDir: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.srcDir).transform((val) => new URL(val)),
  publicDir: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.publicDir).transform((val) => new URL(val)),
  outDir: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.outDir).transform((val) => new URL(val)),
  cacheDir: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.cacheDir).transform((val) => new URL(val)),
  site: z$1.string().url().optional(),
  compressHTML: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.compressHTML),
  base: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.base),
  trailingSlash: z$1.union([z$1.literal("always"), z$1.literal("never"), z$1.literal("ignore")]).optional().default(ASTRO_CONFIG_DEFAULTS.trailingSlash),
  output: z$1.union([z$1.literal("static"), z$1.literal("server"), z$1.literal("hybrid")]).optional().default("static").refine((val) => val !== "hybrid", {
    message: 'The `output: "hybrid"` option has been removed. Use `output: "static"` (the default) instead, which now behaves the same way.'
  }),
  scopedStyleStrategy: z$1.union([z$1.literal("where"), z$1.literal("class"), z$1.literal("attribute")]).optional().default("attribute"),
  adapter: z$1.object({ name: z$1.string(), hooks: z$1.object({}).passthrough().default({}) }).optional(),
  integrations: z$1.preprocess(
    // preprocess
    (val) => Array.isArray(val) ? val.flat(Infinity).filter(Boolean) : val,
    // validate
    z$1.array(z$1.object({ name: z$1.string(), hooks: z$1.object({}).passthrough().default({}) })).default(ASTRO_CONFIG_DEFAULTS.integrations)
  ),
  build: z$1.object({
    format: z$1.union([z$1.literal("file"), z$1.literal("directory"), z$1.literal("preserve")]).optional().default(ASTRO_CONFIG_DEFAULTS.build.format),
    client: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.client).transform((val) => new URL(val)),
    server: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.server).transform((val) => new URL(val)),
    assets: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.assets),
    assetsPrefix: z$1.string().optional().or(z$1.object({ fallback: z$1.string() }).and(z$1.record(z$1.string())).optional()),
    serverEntry: z$1.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.serverEntry),
    redirects: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.build.redirects),
    inlineStylesheets: z$1.enum(["always", "auto", "never"]).optional().default(ASTRO_CONFIG_DEFAULTS.build.inlineStylesheets),
    concurrency: z$1.number().min(1).optional().default(ASTRO_CONFIG_DEFAULTS.build.concurrency)
  }).default({}),
  server: z$1.preprocess(
    // preprocess
    // NOTE: Uses the "error" command here because this is overwritten by the
    // individualized schema parser with the correct command.
    (val) => typeof val === "function" ? val({ command: "error" }) : val,
    // validate
    z$1.object({
      open: z$1.union([z$1.string(), z$1.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.open),
      host: z$1.union([z$1.string(), z$1.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.host),
      port: z$1.number().optional().default(ASTRO_CONFIG_DEFAULTS.server.port),
      headers: z$1.custom().optional(),
      allowedHosts: z$1.union([z$1.array(z$1.string()), z$1.literal(true)]).optional().default(ASTRO_CONFIG_DEFAULTS.server.allowedHosts)
    }).default({})
  ),
  redirects: z$1.record(
    z$1.string(),
    z$1.union([
      z$1.string(),
      z$1.object({
        status: z$1.union([
          z$1.literal(300),
          z$1.literal(301),
          z$1.literal(302),
          z$1.literal(303),
          z$1.literal(304),
          z$1.literal(307),
          z$1.literal(308)
        ]),
        destination: z$1.string()
      })
    ])
  ).default(ASTRO_CONFIG_DEFAULTS.redirects),
  prefetch: z$1.union([
    z$1.boolean(),
    z$1.object({
      prefetchAll: z$1.boolean().optional(),
      defaultStrategy: z$1.enum(["tap", "hover", "viewport", "load"]).optional()
    })
  ]).optional(),
  image: z$1.object({
    endpoint: z$1.object({
      route: z$1.literal("/_image").or(z$1.string()).default(ASTRO_CONFIG_DEFAULTS.image.endpoint.route),
      entrypoint: z$1.string().optional()
    }).default(ASTRO_CONFIG_DEFAULTS.image.endpoint),
    service: z$1.object({
      entrypoint: z$1.union([z$1.literal("astro/assets/services/sharp"), z$1.string()]).default(ASTRO_CONFIG_DEFAULTS.image.service.entrypoint),
      config: z$1.record(z$1.any()).default({})
    }).default(ASTRO_CONFIG_DEFAULTS.image.service),
    domains: z$1.array(z$1.string()).default([]),
    remotePatterns: z$1.array(
      z$1.object({
        protocol: z$1.string().optional(),
        hostname: z$1.string().optional(),
        port: z$1.string().optional(),
        pathname: z$1.string().optional()
      })
    ).default([]),
    layout: z$1.enum(["constrained", "fixed", "full-width", "none"]).optional(),
    objectFit: z$1.string().optional(),
    objectPosition: z$1.string().optional(),
    breakpoints: z$1.array(z$1.number()).optional(),
    responsiveStyles: z$1.boolean().default(ASTRO_CONFIG_DEFAULTS.image.responsiveStyles)
  }).default(ASTRO_CONFIG_DEFAULTS.image),
  devToolbar: z$1.object({
    enabled: z$1.boolean().default(ASTRO_CONFIG_DEFAULTS.devToolbar.enabled)
  }).default(ASTRO_CONFIG_DEFAULTS.devToolbar),
  markdown: z$1.object({
    syntaxHighlight: z$1.union([
      z$1.object({
        type: highlighterTypesSchema,
        excludeLangs: z$1.array(z$1.string()).optional().default(syntaxHighlightDefaults.excludeLangs)
      }).default(syntaxHighlightDefaults),
      highlighterTypesSchema,
      z$1.literal(false)
    ]).default(ASTRO_CONFIG_DEFAULTS.markdown.syntaxHighlight),
    shikiConfig: z$1.object({
      langs: z$1.custom().array().transform((langs) => {
        for (const lang of langs) {
          if (typeof lang === "object") {
            if (lang.id) {
              lang.name = lang.id;
            }
            if (lang.grammar) {
              Object.assign(lang, lang.grammar);
            }
          }
        }
        return langs;
      }).default([]),
      langAlias: z$1.record(z$1.string(), z$1.string()).optional().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.langAlias),
      theme: z$1.enum(Object.keys(bundledThemes)).or(z$1.custom()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.theme),
      themes: z$1.record(
        z$1.enum(Object.keys(bundledThemes)).or(z$1.custom())
      ).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.themes),
      defaultColor: z$1.union([z$1.literal("light"), z$1.literal("dark"), z$1.string(), z$1.literal(false)]).optional(),
      wrap: z$1.boolean().or(z$1.null()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.wrap),
      transformers: z$1.custom().array().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.transformers)
    }).default({}),
    remarkPlugins: z$1.union([
      z$1.string(),
      z$1.tuple([z$1.string(), z$1.any()]),
      z$1.custom((data) => typeof data === "function"),
      z$1.tuple([z$1.custom((data) => typeof data === "function"), z$1.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.remarkPlugins),
    rehypePlugins: z$1.union([
      z$1.string(),
      z$1.tuple([z$1.string(), z$1.any()]),
      z$1.custom((data) => typeof data === "function"),
      z$1.tuple([z$1.custom((data) => typeof data === "function"), z$1.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.rehypePlugins),
    remarkRehype: z$1.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.markdown.remarkRehype),
    gfm: z$1.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.gfm),
    smartypants: z$1.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.smartypants)
  }).default({}),
  vite: z$1.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.vite),
  i18n: z$1.optional(
    z$1.object({
      defaultLocale: z$1.string(),
      locales: z$1.array(
        z$1.union([
          z$1.string(),
          z$1.object({
            path: z$1.string(),
            codes: z$1.string().array().nonempty()
          })
        ])
      ),
      domains: z$1.record(
        z$1.string(),
        z$1.string().url(
          "The domain value must be a valid URL, and it has to start with 'https' or 'http'."
        )
      ).optional(),
      fallback: z$1.record(z$1.string(), z$1.string()).optional(),
      routing: z$1.literal("manual").or(
        z$1.object({
          prefixDefaultLocale: z$1.boolean().optional().default(false),
          // TODO: Astro 6.0 change to false
          redirectToDefaultLocale: z$1.boolean().optional().default(true),
          fallbackType: z$1.enum(["redirect", "rewrite"]).optional().default("redirect")
        })
      ).optional().default({})
    }).optional()
  ),
  security: z$1.object({
    checkOrigin: z$1.boolean().default(ASTRO_CONFIG_DEFAULTS.security.checkOrigin),
    allowedDomains: z$1.array(
      z$1.object({
        hostname: z$1.string().optional(),
        protocol: z$1.string().optional(),
        port: z$1.string().optional()
      })
    ).optional().default(ASTRO_CONFIG_DEFAULTS.security.allowedDomains)
  }).optional().default(ASTRO_CONFIG_DEFAULTS.security),
  env: z$1.object({
    schema: EnvSchema.optional().default(ASTRO_CONFIG_DEFAULTS.env.schema),
    validateSecrets: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.env.validateSecrets)
  }).strict().optional().default(ASTRO_CONFIG_DEFAULTS.env),
  session: z$1.object({
    driver: z$1.string().optional(),
    options: z$1.record(z$1.any()).optional(),
    cookie: z$1.object({
      name: z$1.string().optional(),
      domain: z$1.string().optional(),
      path: z$1.string().optional(),
      maxAge: z$1.number().optional(),
      sameSite: z$1.union([z$1.enum(["strict", "lax", "none"]), z$1.boolean()]).optional(),
      secure: z$1.boolean().optional()
    }).or(z$1.string()).transform((val) => {
      if (typeof val === "string") {
        return { name: val };
      }
      return val;
    }).optional(),
    ttl: z$1.number().optional()
  }).optional(),
  experimental: z$1.object({
    clientPrerender: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.clientPrerender),
    contentIntellisense: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.contentIntellisense),
    headingIdCompat: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.headingIdCompat),
    preserveScriptOrder: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.preserveScriptOrder),
    fonts: z$1.array(z$1.union([localFontFamilySchema, remoteFontFamilySchema])).optional(),
    liveContentCollections: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.liveContentCollections),
    csp: z$1.union([
      z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.csp),
      z$1.object({
        algorithm: cspAlgorithmSchema,
        directives: z$1.array(allowedDirectivesSchema).optional(),
        styleDirective: z$1.object({
          resources: z$1.array(z$1.string()).optional(),
          hashes: z$1.array(cspHashSchema).optional()
        }).optional(),
        scriptDirective: z$1.object({
          resources: z$1.array(z$1.string()).optional(),
          hashes: z$1.array(cspHashSchema).optional(),
          strictDynamic: z$1.boolean().optional()
        }).optional()
      })
    ]).optional().default(ASTRO_CONFIG_DEFAULTS.experimental.csp),
    staticImportMetaEnv: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.staticImportMetaEnv),
    chromeDevtoolsWorkspace: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.chromeDevtoolsWorkspace),
    failOnPrerenderConflict: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.failOnPrerenderConflict),
    svgo: z$1.union([z$1.boolean(), z$1.custom((value) => value && typeof value === "object")]).optional().default(ASTRO_CONFIG_DEFAULTS.experimental.svgo)
  }).strict(
    `Invalid or outdated experimental feature.
Check for incorrect spelling or outdated Astro version.
See https://docs.astro.build/en/reference/experimental-flags/ for a list of all current experiments.`
  ).default({}),
  legacy: z$1.object({
    collections: z$1.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.legacy.collections)
  }).default({})
});

z$1.custom().superRefine((config, ctx) => {
  if (config.build.assetsPrefix && typeof config.build.assetsPrefix !== "string" && !config.build.assetsPrefix.fallback) {
    ctx.addIssue({
      code: z$1.ZodIssueCode.custom,
      message: "The `fallback` is mandatory when defining the option as an object.",
      path: ["build", "assetsPrefix"]
    });
  }
  for (let i = 0; i < config.image.remotePatterns.length; i++) {
    const { hostname, pathname } = config.image.remotePatterns[i];
    if (hostname && hostname.includes("*") && !(hostname.startsWith("*.") || hostname.startsWith("**."))) {
      ctx.addIssue({
        code: z$1.ZodIssueCode.custom,
        message: "wildcards can only be placed at the beginning of the hostname",
        path: ["image", "remotePatterns", i, "hostname"]
      });
    }
    if (pathname && pathname.includes("*") && !(pathname.endsWith("/*") || pathname.endsWith("/**"))) {
      ctx.addIssue({
        code: z$1.ZodIssueCode.custom,
        message: "wildcards can only be placed at the end of a pathname",
        path: ["image", "remotePatterns", i, "pathname"]
      });
    }
  }
  if (config.outDir.toString().startsWith(config.publicDir.toString())) {
    ctx.addIssue({
      code: z$1.ZodIssueCode.custom,
      message: "The value of `outDir` must not point to a path within the folder set as `publicDir`, this will cause an infinite loop",
      path: ["outDir"]
    });
  }
  if (config.i18n) {
    const { defaultLocale, locales: _locales, fallback, domains } = config.i18n;
    const locales = _locales.map((locale) => {
      if (typeof locale === "string") {
        return locale;
      } else {
        return locale.path;
      }
    });
    if (!locales.includes(defaultLocale)) {
      ctx.addIssue({
        code: z$1.ZodIssueCode.custom,
        message: `The default locale \`${defaultLocale}\` is not present in the \`i18n.locales\` array.`,
        path: ["i18n", "locales"]
      });
    }
    if (fallback) {
      for (const [fallbackFrom, fallbackTo] of Object.entries(fallback)) {
        if (!locales.includes(fallbackFrom)) {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: `The locale \`${fallbackFrom}\` key in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "fallbacks"]
          });
        }
        if (fallbackFrom === defaultLocale) {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: `You can't use the default locale as a key. The default locale can only be used as value.`,
            path: ["i18n", "fallbacks"]
          });
        }
        if (!locales.includes(fallbackTo)) {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: `The locale \`${fallbackTo}\` value in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "fallbacks"]
          });
        }
      }
    }
    if (domains) {
      const entries = Object.entries(domains);
      const hasDomains = domains ? Object.keys(domains).length > 0 : false;
      if (entries.length > 0 && !hasDomains) {
        ctx.addIssue({
          code: z$1.ZodIssueCode.custom,
          message: `When specifying some domains, the property \`i18n.routing.strategy\` must be set to \`"domains"\`.`,
          path: ["i18n", "routing", "strategy"]
        });
      }
      if (hasDomains) {
        if (!config.site) {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: "The option `site` isn't set. When using the 'domains' strategy for `i18n`, `site` is required to create absolute URLs for locales that aren't mapped to a domain.",
            path: ["site"]
          });
        }
        if (config.output !== "server") {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: 'Domain support is only available when `output` is `"server"`.',
            path: ["output"]
          });
        }
      }
      for (const [domainKey, domainValue] of entries) {
        if (!locales.includes(domainKey)) {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: `The locale \`${domainKey}\` key in the \`i18n.domains\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "domains"]
          });
        }
        if (!domainValue.startsWith("https") && !domainValue.startsWith("http")) {
          ctx.addIssue({
            code: z$1.ZodIssueCode.custom,
            message: "The domain value must be a valid URL, and it has to start with 'https' or 'http'.",
            path: ["i18n", "domains"]
          });
        } else {
          try {
            const domainUrl = new URL(domainValue);
            if (domainUrl.pathname !== "/") {
              ctx.addIssue({
                code: z$1.ZodIssueCode.custom,
                message: `The URL \`${domainValue}\` must contain only the origin. A subsequent pathname isn't allowed here. Remove \`${domainUrl.pathname}\`.`,
                path: ["i18n", "domains"]
              });
            }
          } catch {
          }
        }
      }
    }
  }
  if (config.experimental.fonts && config.experimental.fonts.length > 0) {
    for (let i = 0; i < config.experimental.fonts.length; i++) {
      const { cssVariable } = config.experimental.fonts[i];
      if (!cssVariable.startsWith("--") || cssVariable.includes(" ") || cssVariable.includes(":")) {
        ctx.addIssue({
          code: z$1.ZodIssueCode.custom,
          message: `**cssVariable** property "${cssVariable}" contains invalid characters for CSS variable generation. It must start with -- and be a valid indent: https://developer.mozilla.org/en-US/docs/Web/CSS/ident.`,
          path: ["fonts", i, "cssVariable"]
        });
      }
    }
  }
});

const isWindows = typeof process !== "undefined" && process.platform === "win32";
function normalizePath(id) {
  return path$1.posix.normalize(isWindows ? slash(id) : id);
}
function resolvePath(specifier, importer) {
  if (specifier.startsWith(".")) {
    const absoluteSpecifier = path$1.resolve(path$1.dirname(importer), specifier);
    return resolveJsToTs(normalizePath(absoluteSpecifier));
  } else {
    return specifier;
  }
}

const entryTypeSchema = z$1.object({
  id: z$1.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z$1.union([
  z$1.array(entryTypeSchema),
  z$1.record(
    z$1.string(),
    z$1.object({
      id: z$1.string({
        invalid_type_error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z$1.union([
  z$1.object({
    type: z$1.literal("content").optional().default("content"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal("data"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal(CONTENT_LAYER_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.union([
      z$1.function(),
      z$1.object({
        name: z$1.string(),
        load: z$1.function(
          z$1.tuple(
            [
              z$1.object({
                collection: z$1.string(),
                store: z$1.any(),
                meta: z$1.any(),
                logger: z$1.any(),
                config: z$1.any(),
                entryTypes: z$1.any(),
                parseData: z$1.any(),
                renderMarkdown: z$1.any(),
                generateDigest: z$1.function(z$1.tuple([z$1.any()], z$1.string())),
                watcher: z$1.any().optional(),
                refreshContextData: z$1.record(z$1.unknown()).optional()
              })
            ],
            z$1.unknown()
          )
        ),
        schema: z$1.any().optional(),
        render: z$1.function(z$1.tuple([z$1.any()], z$1.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z$1.boolean().optional()
  }),
  z$1.object({
    type: z$1.literal(LIVE_CONTENT_TYPE).optional().default(LIVE_CONTENT_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.function()
  })
]);
z$1.object({
  collections: z$1.record(collectionConfigParser)
});

new AstroTelemetry({
  astroVersion: ASTRO_VERSION,
  viteVersion: version
});

const {
  bgGreen,
  bgYellow,
  bgCyan,
  bgWhite,
  black,
  blue,
  bold,
  cyan,
  dim,
  green,
  red,
  underline,
  yellow
} = colors;

const debuggers = {};
function debug(type, ...messages) {
  const namespace = `astro:${type}`;
  debuggers[namespace] = debuggers[namespace] || debugPackage(namespace);
  return debuggers[namespace](...messages);
}
globalThis._astroGlobalDebug = debug;

function createDefaultAstroMetadata() {
  return {
    hydratedComponents: [],
    clientOnlyComponents: [],
    serverComponents: [],
    scripts: [],
    propagation: "none",
    containsHead: false,
    pageOptions: {}
  };
}

new AstroError({
  ...UnknownContentCollectionError,
  message: `Unexpected error while parsing content entry IDs and slugs.`
});

createRequire(import.meta.url);

function defineConfig(config) {
  return config;
}

function getReactMajorVersion() {
  const matches = /\d+\./.exec(version$1);
  if (!matches) {
    return NaN;
  }
  return Number(matches[0]);
}
function isUnsupportedVersion(majorVersion) {
  return majorVersion < 17 || majorVersion > 19 || Number.isNaN(majorVersion);
}
const versionsConfig = {
  17: {
    server: "@astrojs/react/server-v17.js",
    client: "@astrojs/react/client-v17.js"
  },
  18: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js"
  },
  19: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js"
  }
};

const FAST_REFRESH_PREAMBLE = react.preambleCode;
function getRenderer(reactConfig) {
  return {
    name: "@astrojs/react",
    clientEntrypoint: reactConfig.client,
    serverEntrypoint: reactConfig.server
  };
}
function optionsPlugin({
  experimentalReactChildren = false,
  experimentalDisableStreaming = false
}) {
  const virtualModule = "astro:react:opts";
  const virtualModuleId = "\0" + virtualModule;
  return {
    name: "@astrojs/react:opts",
    resolveId(id) {
      if (id === virtualModule) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return {
          code: `export default {
						experimentalReactChildren: ${JSON.stringify(experimentalReactChildren)},
						experimentalDisableStreaming: ${JSON.stringify(experimentalDisableStreaming)}
					}`
        };
      }
    }
  };
}
function getViteConfiguration({
  include,
  exclude,
  babel,
  experimentalReactChildren,
  experimentalDisableStreaming
} = {}, reactConfig) {
  return {
    optimizeDeps: {
      include: [reactConfig.client],
      exclude: [reactConfig.server]
    },
    plugins: [
      react({ include, exclude, babel }),
      optionsPlugin({
        experimentalReactChildren: !!experimentalReactChildren,
        experimentalDisableStreaming: !!experimentalDisableStreaming
      })
    ],
    ssr: {
      noExternal: [
        // These are all needed to get mui to work.
        "@mui/material",
        "@mui/base",
        "@babel/runtime",
        "use-immer",
        "@material-tailwind/react"
      ]
    }
  };
}
function index_default$1({
  include,
  exclude,
  babel,
  experimentalReactChildren,
  experimentalDisableStreaming
} = {}) {
  const majorVersion = getReactMajorVersion();
  if (isUnsupportedVersion(majorVersion)) {
    throw new Error(`Unsupported React version: ${majorVersion}.`);
  }
  const versionConfig = versionsConfig[majorVersion];
  return {
    name: "@astrojs/react",
    hooks: {
      "astro:config:setup": ({ command, addRenderer, updateConfig, injectScript }) => {
        addRenderer(getRenderer(versionConfig));
        updateConfig({
          vite: getViteConfiguration(
            { include, exclude, babel, experimentalReactChildren, experimentalDisableStreaming },
            versionConfig
          )
        });
        if (command === "dev") {
          const preamble = FAST_REFRESH_PREAMBLE.replace(`__BASE__`, "/");
          injectScript("before-hydration", preamble);
        }
      },
      "astro:config:done": ({ logger, config }) => {
        const knownJsxRenderers = ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js"];
        const enabledKnownJsxRenderers = config.integrations.filter(
          (renderer) => knownJsxRenderers.includes(renderer.name)
        );
        if (enabledKnownJsxRenderers.length > 1 && !include && !exclude) {
          logger.warn(
            "More than one JSX renderer is enabled. This will lead to unexpected behavior unless you set the `include` or `exclude` option. See https://docs.astro.build/en/guides/integrations-guide/react/#combining-multiple-jsx-frameworks for more information."
          );
        }
      }
    }
  };
}

function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function getFileInfo(id, config) {
  const sitePathname = appendForwardSlash(
    config.site ? new URL(config.base, config.site).pathname : config.base
  );
  let url = void 0;
  try {
    url = new URL(`file://${id}`);
  } catch {
  }
  const fileId = id.split("?")[0];
  let fileUrl;
  const isPage = fileId.includes("/pages/");
  if (isPage) {
    fileUrl = fileId.replace(/^.*?\/pages\//, sitePathname).replace(/(?:\/index)?\.mdx$/, "");
  } else if (url?.pathname.startsWith(config.root.pathname)) {
    fileUrl = url.pathname.slice(config.root.pathname.length);
  } else {
    fileUrl = fileId;
  }
  if (fileUrl && config.trailingSlash === "always") {
    fileUrl = appendForwardSlash(fileUrl);
  }
  return { fileId, fileUrl };
}
function safeParseFrontmatter(code, id) {
  try {
    return parseFrontmatter(code, { frontmatter: "empty-with-spaces" });
  } catch (e) {
    if (e.name === "YAMLException") {
      const err = e;
      err.id = id;
      err.loc = { file: e.id, line: e.mark.line + 1, column: e.mark.column };
      err.message = e.reason;
      throw err;
    } else {
      throw e;
    }
  }
}
function jsToTreeNode(jsString, acornOpts = {
  ecmaVersion: "latest",
  sourceType: "module"
}) {
  return {
    type: "mdxjsEsm",
    value: "",
    data: {
      // @ts-expect-error `parse` return types is incompatible but it should work in runtime
      estree: {
        ...parse(jsString, acornOpts),
        type: "Program",
        sourceType: "module"
      }
    }
  };
}
function ignoreStringPlugins(plugins, logger) {
  let validPlugins = [];
  let hasInvalidPlugin = false;
  for (const plugin of plugins) {
    if (typeof plugin === "string") {
      logger.warn(`${colors$1.bold(plugin)} not applied.`);
      hasInvalidPlugin = true;
    } else if (Array.isArray(plugin) && typeof plugin[0] === "string") {
      logger.warn(`${colors$1.bold(plugin[0])} not applied.`);
      hasInvalidPlugin = true;
    } else {
      validPlugins.push(plugin);
    }
  }
  if (hasInvalidPlugin) {
    logger.warn(
      `To inherit Markdown plugins in MDX, please use explicit imports in your config instead of "strings." See Markdown docs: https://docs.astro.build/en/guides/markdown-content/#markdown-plugins`
    );
  }
  return validPlugins;
}

const ClientOnlyPlaceholder = "astro-client-only";
const rehypeAnalyzeAstroMetadata = () => {
  return (tree, file) => {
    const metadata = createDefaultAstroMetadata();
    const imports = parseImports(tree.children);
    visit(tree, (node) => {
      if (node.type !== "mdxJsxFlowElement" && node.type !== "mdxJsxTextElement") return;
      const tagName = node.name;
      if (!tagName || !isComponent(tagName) || !(hasClientDirective(node) || hasServerDeferDirective(node)))
        return;
      const matchedImport = findMatchingImport(tagName, imports);
      if (!matchedImport) {
        throw new AstroError({
          ...NoMatchingImport,
          message: NoMatchingImport.message(node.name)
        });
      }
      if (matchedImport.path.endsWith(".astro")) {
        const clientAttribute = node.attributes.find(
          (attr) => attr.type === "mdxJsxAttribute" && attr.name.startsWith("client:")
        );
        if (clientAttribute) {
          console.warn(
            `You are attempting to render <${node.name} ${clientAttribute.name} />, but ${node.name} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
          );
        }
      }
      const resolvedPath = resolvePath(matchedImport.path, file.path);
      if (hasClientOnlyDirective(node)) {
        metadata.clientOnlyComponents.push({
          exportName: matchedImport.name,
          localName: "",
          specifier: tagName,
          resolvedPath
        });
        addClientOnlyMetadata(node, matchedImport, resolvedPath);
      } else if (hasClientDirective(node)) {
        metadata.hydratedComponents.push({
          exportName: "*",
          localName: "",
          specifier: tagName,
          resolvedPath
        });
        addClientMetadata(node, matchedImport, resolvedPath);
      } else if (hasServerDeferDirective(node)) {
        metadata.serverComponents.push({
          exportName: matchedImport.name,
          localName: tagName,
          specifier: matchedImport.path,
          resolvedPath
        });
        addServerDeferMetadata(node, matchedImport, resolvedPath);
      }
    });
    file.data.__astroMetadata = metadata;
  };
};
function getAstroMetadata(file) {
  return file.data.__astroMetadata;
}
function parseImports(children) {
  const imports = /* @__PURE__ */ new Map();
  for (const child of children) {
    if (child.type !== "mdxjsEsm") continue;
    const body = child.data?.estree?.body;
    if (!body) continue;
    for (const ast of body) {
      if (ast.type !== "ImportDeclaration") continue;
      const source = ast.source.value;
      const specs = ast.specifiers.map((spec) => {
        switch (spec.type) {
          case "ImportDefaultSpecifier":
            return { local: spec.local.name, imported: "default" };
          case "ImportNamespaceSpecifier":
            return { local: spec.local.name, imported: "*" };
          case "ImportSpecifier": {
            return {
              local: spec.local.name,
              imported: spec.imported.type === "Identifier" ? spec.imported.name : String(spec.imported.value)
            };
          }
          default:
            throw new Error("Unknown import declaration specifier: " + spec);
        }
      });
      let specSet = imports.get(source);
      if (!specSet) {
        specSet = /* @__PURE__ */ new Set();
        imports.set(source, specSet);
      }
      for (const spec of specs) {
        specSet.add(spec);
      }
    }
  }
  return imports;
}
function isComponent(tagName) {
  return tagName[0] && tagName[0].toLowerCase() !== tagName[0] || tagName.includes(".") || /[^a-zA-Z]/.test(tagName[0]);
}
function hasClientDirective(node) {
  return node.attributes.some(
    (attr) => attr.type === "mdxJsxAttribute" && attr.name.startsWith("client:")
  );
}
function hasServerDeferDirective(node) {
  return node.attributes.some(
    (attr) => attr.type === "mdxJsxAttribute" && attr.name === "server:defer"
  );
}
function hasClientOnlyDirective(node) {
  return node.attributes.some(
    (attr) => attr.type === "mdxJsxAttribute" && attr.name === "client:only"
  );
}
function findMatchingImport(tagName, imports) {
  const tagSpecifier = tagName.split(".")[0];
  for (const [source, specs] of imports) {
    for (const { imported, local } of specs) {
      if (local === tagSpecifier) {
        if (tagSpecifier !== tagName) {
          switch (imported) {
            // Namespace import: "<buttons.Foo.Bar />" => name: "Foo.Bar"
            case "*": {
              const accessPath = tagName.slice(tagSpecifier.length + 1);
              return { name: accessPath, path: source };
            }
            // Default import: "<buttons.Foo.Bar />" => name: "default.Foo.Bar"
            case "default": {
              const accessPath = tagName.slice(tagSpecifier.length + 1);
              return { name: `default.${accessPath}`, path: source };
            }
            // Named import: "<buttons.Foo.Bar />" => name: "buttons.Foo.Bar"
            default: {
              return { name: tagName, path: source };
            }
          }
        }
        return { name: imported, path: source };
      }
    }
  }
}
function addClientMetadata(node, meta, resolvedPath) {
  const attributeNames = node.attributes.map((attr) => attr.type === "mdxJsxAttribute" ? attr.name : null).filter(Boolean);
  if (!attributeNames.includes("client:component-path")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-path",
      value: resolvedPath
    });
  }
  if (!attributeNames.includes("client:component-export")) {
    if (meta.name === "*") {
      meta.name = node.name.split(".").slice(1).join(".");
    }
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-export",
      value: meta.name
    });
  }
  if (!attributeNames.includes("client:component-hydration")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-hydration",
      value: null
    });
  }
}
function addClientOnlyMetadata(node, meta, resolvedPath) {
  const attributeNames = node.attributes.map((attr) => attr.type === "mdxJsxAttribute" ? attr.name : null).filter(Boolean);
  if (!attributeNames.includes("client:display-name")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:display-name",
      value: node.name
    });
  }
  if (!attributeNames.includes("client:component-hydpathation")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-path",
      value: resolvedPath
    });
  }
  if (!attributeNames.includes("client:component-export")) {
    if (meta.name === "*") {
      meta.name = node.name.split(".").slice(1).join(".");
    }
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-export",
      value: meta.name
    });
  }
  if (!attributeNames.includes("client:component-hydration")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "client:component-hydration",
      value: null
    });
  }
  node.name = ClientOnlyPlaceholder;
}
function addServerDeferMetadata(node, meta, resolvedPath) {
  const attributeNames = node.attributes.map((attr) => attr.type === "mdxJsxAttribute" ? attr.name : null).filter(Boolean);
  if (!attributeNames.includes("server:component-directive")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "server:component-directive",
      value: "server:defer"
    });
  }
  if (!attributeNames.includes("server:component-path")) {
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "server:component-path",
      value: resolvedPath
    });
  }
  if (!attributeNames.includes("server:component-export")) {
    if (meta.name === "*") {
      meta.name = node.name.split(".").slice(1).join(".");
    }
    node.attributes.push({
      type: "mdxJsxAttribute",
      name: "server:component-export",
      value: meta.name
    });
  }
}

const exportConstPartialTrueRe = /export\s+const\s+partial\s*=\s*true/;
function rehypeApplyFrontmatterExport() {
  return function(tree, vfile) {
    const frontmatter = vfile.data.astro?.frontmatter;
    if (!frontmatter || !isFrontmatterValid(frontmatter))
      throw new Error(
        // Copied from Astro core `errors-data`
        // TODO: find way to import error data from core
        '[MDX] A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.'
      );
    const extraChildren = [
      jsToTreeNode(`export const frontmatter = ${JSON.stringify(frontmatter)};`)
    ];
    if (frontmatter.layout) {
      extraChildren.unshift(
        jsToTreeNode(
          // NOTE: Use `__astro_*` import names to prevent conflicts with user code
          /** @see 'vite-plugin-markdown' for layout props reference */
          `import { jsx as __astro_layout_jsx__ } from 'astro/jsx-runtime';
import __astro_layout_component__ from ${JSON.stringify(frontmatter.layout)};

export default function ({ children }) {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = url;
	return __astro_layout_jsx__(__astro_layout_component__, {
		file,
		url,
		content,
		frontmatter: content,
		headings: getHeadings(),
		'server:root': true,
		children,
	});
};`
        )
      );
    } else if (shouldAddCharset(tree, vfile)) {
      extraChildren.unshift({
        type: "mdxJsxFlowElement",
        name: "meta",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "charset",
            value: "utf-8"
          }
        ],
        children: []
      });
    }
    tree.children = extraChildren.concat(tree.children);
  };
}
function shouldAddCharset(tree, vfile) {
  const srcDirUrl = vfile.data.applyFrontmatterExport?.srcDir;
  if (!srcDirUrl) return false;
  const hasConstPartialTrue = tree.children.some(
    (node) => node.type === "mdxjsEsm" && exportConstPartialTrueRe.test(node.value)
  );
  if (hasConstPartialTrue) return false;
  const pagesDir = path$1.join(fileURLToPath(srcDirUrl), "pages").replace(/\\/g, "/");
  const filePath = vfile.path;
  if (!filePath.startsWith(pagesDir)) return false;
  const hasLeadingUnderscoreInPath = filePath.slice(pagesDir.length).replace(/\\/g, "/").split("/").some((part) => part.startsWith("_"));
  if (hasLeadingUnderscoreInPath) return false;
  for (const child of tree.children) {
    if (child.type === "element") break;
    if (child.type === "mdxJsxFlowElement") {
      if (child.name == null) break;
      if (child.name[0] === child.name[0].toLowerCase()) break;
      return false;
    }
  }
  return true;
}

function rehypeInjectHeadingsExport() {
  return function(tree, file) {
    const headings = file.data.astro?.headings ?? [];
    tree.children.unshift(
      jsToTreeNode(`export function getHeadings() { return ${JSON.stringify(headings)} }`)
    );
  };
}

const ASTRO_IMAGE_ELEMENT = "astro-image";
const ASTRO_IMAGE_IMPORT = "__AstroImage__";
const USES_ASTRO_IMAGE_FLAG = "__usesAstroImage";
function createArrayAttribute(name, values) {
  return {
    type: "mdxJsxAttribute",
    name,
    value: {
      type: "mdxJsxAttributeValueExpression",
      value: name,
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "ArrayExpression",
                elements: values.map((value) => ({
                  type: "Literal",
                  value,
                  raw: String(value)
                }))
              }
            }
          ],
          sourceType: "module",
          comments: []
        }
      }
    }
  };
}
function getImageComponentAttributes(props) {
  const attrs = [];
  for (const [prop, value] of Object.entries(props)) {
    if (prop === "src") continue;
    if (prop === "widths" || prop === "densities") {
      attrs.push(createArrayAttribute(prop, String(value).split(" ")));
    } else {
      attrs.push({
        name: prop,
        type: "mdxJsxAttribute",
        value: String(value)
      });
    }
  }
  return attrs;
}
function rehypeImageToComponent() {
  return function(tree, file) {
    if (!file.data.astro?.localImagePaths?.length && !file.data.astro?.remoteImagePaths?.length)
      return;
    const importsStatements = [];
    const importedImages = /* @__PURE__ */ new Map();
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "img" || !node.properties.src) return;
      const src = decodeURI(String(node.properties.src));
      const isLocalImage = file.data.astro?.localImagePaths?.includes(src);
      const isRemoteImage = file.data.astro?.remoteImagePaths?.includes(src);
      let element;
      if (isLocalImage) {
        let importName = importedImages.get(src);
        if (!importName) {
          importName = `__${importedImages.size}_${src.replace(/\W/g, "_")}__`;
          importsStatements.push({
            type: "mdxjsEsm",
            value: "",
            data: {
              estree: {
                type: "Program",
                sourceType: "module",
                body: [
                  {
                    attributes: [],
                    type: "ImportDeclaration",
                    source: {
                      type: "Literal",
                      value: src,
                      raw: JSON.stringify(src)
                    },
                    specifiers: [
                      {
                        type: "ImportDefaultSpecifier",
                        local: { type: "Identifier", name: importName }
                      }
                    ]
                  }
                ]
              }
            }
          });
          importedImages.set(src, importName);
        }
        element = {
          name: ASTRO_IMAGE_ELEMENT,
          type: "mdxJsxFlowElement",
          attributes: [
            ...getImageComponentAttributes(node.properties),
            {
              name: "src",
              type: "mdxJsxAttribute",
              value: {
                type: "mdxJsxAttributeValueExpression",
                value: importName,
                data: {
                  estree: {
                    type: "Program",
                    sourceType: "module",
                    comments: [],
                    body: [
                      {
                        type: "ExpressionStatement",
                        expression: { type: "Identifier", name: importName }
                      }
                    ]
                  }
                }
              }
            }
          ],
          children: []
        };
      } else if (isRemoteImage) {
        element = {
          name: ASTRO_IMAGE_ELEMENT,
          type: "mdxJsxFlowElement",
          attributes: [
            ...getImageComponentAttributes(node.properties),
            {
              name: "src",
              type: "mdxJsxAttribute",
              value: src
            }
          ],
          children: []
        };
      } else {
        return;
      }
      parent.children.splice(index, 1, element);
    });
    tree.children.unshift(...importsStatements);
    tree.children.unshift(
      jsToTreeNode(`import { Image as ${ASTRO_IMAGE_IMPORT} } from "astro:assets";`)
    );
    tree.children.push(jsToTreeNode(`export const ${USES_ASTRO_IMAGE_FLAG} = true`));
  };
}

function rehypeMetaString() {
  return function(tree) {
    visit(tree, (node) => {
      if (node.type === "element" && node.tagName === "code" && node.data?.meta) {
        node.properties ??= {};
        node.properties.metastring = node.data.meta;
      }
    });
  };
}

const exportConstComponentsRe = /export\s+const\s+components\s*=/;
const rehypeOptimizeStatic = (options) => {
  return (tree) => {
    const ignoreElementNames = new Set(options?.ignoreElementNames);
    for (const child of tree.children) {
      if (child.type === "mdxjsEsm" && exportConstComponentsRe.test(child.value)) {
        const keys = getExportConstComponentObjectKeys(child);
        if (keys) {
          for (const key of keys) {
            ignoreElementNames.add(key);
          }
        }
        break;
      }
    }
    const allPossibleElements = /* @__PURE__ */ new Set();
    const elementStack = [];
    const elementMetadatas = /* @__PURE__ */ new WeakMap();
    const isNodeNonStatic = (node) => {
      return node.type.startsWith("mdx") || // @ts-expect-error `node` should never have `type: 'root'`, but in some cases plugins may inject it as children,
      // which MDX will render as a fragment instead (an MDX fragment is a `mdxJsxFlowElement` type).
      node.type === "root" || // @ts-expect-error Access `.tagName` naively for perf
      ignoreElementNames.has(node.tagName);
    };
    visit$1(tree, {
      // @ts-expect-error Force coerce node as hast node
      enter(node, key, index, parents) {
        if (key != null && key !== "children") return SKIP;
        simplifyPlainMdxComponentNode(node, ignoreElementNames);
        if (isNodeNonStatic(node)) {
          for (const el of elementStack) {
            allPossibleElements.delete(el);
          }
          elementStack.length = 0;
        }
        if (node.type === "element" || isMdxComponentNode(node)) {
          elementStack.push(node);
          allPossibleElements.add(node);
          if (index != null && node.type === "element") {
            elementMetadatas.set(node, { parent: parents[parents.length - 1], index });
          }
        }
      },
      // @ts-expect-error Force coerce node as hast node
      leave(node, key, _, parents) {
        if (key != null && key !== "children") return SKIP;
        if (node.type === "element" || isMdxComponentNode(node)) {
          elementStack.pop();
          const parent = parents[parents.length - 1];
          if (allPossibleElements.has(parent)) {
            allPossibleElements.delete(node);
          }
        }
      }
    });
    const elementGroups = findElementGroups(allPossibleElements, elementMetadatas, isNodeNonStatic);
    for (const el of allPossibleElements) {
      if (el.children.length === 0) continue;
      if (isMdxComponentNode(el)) {
        el.attributes.push({
          type: "mdxJsxAttribute",
          name: "set:html",
          value: toHtml(el.children)
        });
      } else {
        el.properties["set:html"] = toHtml(el.children);
      }
      el.children = [];
    }
    for (let i = elementGroups.length - 1; i >= 0; i--) {
      const group = elementGroups[i];
      const fragmentNode = {
        type: "mdxJsxFlowElement",
        name: "Fragment",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "set:html",
            value: toHtml(group.children)
          }
        ],
        children: []
      };
      group.parent.children.splice(group.startIndex, group.children.length, fragmentNode);
    }
  };
};
function findElementGroups(allPossibleElements, elementMetadatas, isNodeNonStatic) {
  const elementGroups = [];
  for (const el of allPossibleElements) {
    if (isNodeNonStatic(el)) continue;
    const metadata = elementMetadatas.get(el);
    if (!metadata) {
      throw new Error(
        "Internal MDX error: rehype-optimize-static should have metadata for element node"
      );
    }
    const groupableElements = [el];
    for (let i = metadata.index + 1; i < metadata.parent.children.length; i++) {
      const node = metadata.parent.children[i];
      if (isNodeNonStatic(node)) break;
      if (node.type === "element") {
        const existed = allPossibleElements.delete(node);
        if (!existed) break;
      }
      groupableElements.push(node);
    }
    if (groupableElements.length > 1) {
      elementGroups.push({
        parent: metadata.parent,
        startIndex: metadata.index,
        children: groupableElements
      });
      allPossibleElements.delete(el);
    }
  }
  return elementGroups;
}
function isMdxComponentNode(node) {
  return node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement";
}
function getExportConstComponentObjectKeys(node) {
  const exportNamedDeclaration = node.data?.estree?.body[0];
  if (exportNamedDeclaration?.type !== "ExportNamedDeclaration") return;
  const variableDeclaration = exportNamedDeclaration.declaration;
  if (variableDeclaration?.type !== "VariableDeclaration") return;
  const variableInit = variableDeclaration.declarations[0]?.init;
  if (variableInit?.type !== "ObjectExpression") return;
  const keys = [];
  for (const propertyNode of variableInit.properties) {
    if (propertyNode.type === "Property" && propertyNode.key.type === "Identifier") {
      keys.push(propertyNode.key.name);
    }
  }
  return keys;
}
function simplifyPlainMdxComponentNode(node, ignoreElementNames) {
  if (!isMdxComponentNode(node) || // Attributes could be dynamic, so bail if so.
  node.attributes.length > 0 || // Fragments are also dynamic
  !node.name || // Ignore if the node name is in the ignore list
  ignoreElementNames.has(node.name) || // If the node name has uppercase characters, it's likely an actual MDX component
  node.name.toLowerCase() !== node.name) {
    return;
  }
  const newNode = node;
  newNode.type = "element";
  newNode.tagName = node.name;
  newNode.properties = {};
  node.attributes = void 0;
  node.data = void 0;
}

const isPerformanceBenchmark = Boolean(process.env.ASTRO_PERFORMANCE_BENCHMARK);
function createMdxProcessor(mdxOptions, extraOptions) {
  return createProcessor({
    remarkPlugins: getRemarkPlugins(mdxOptions),
    rehypePlugins: getRehypePlugins(mdxOptions, extraOptions),
    recmaPlugins: mdxOptions.recmaPlugins,
    remarkRehypeOptions: mdxOptions.remarkRehype,
    jsxImportSource: "astro",
    // Note: disable `.md` (and other alternative extensions for markdown files like `.markdown`) support
    format: "mdx",
    mdExtensions: [],
    elementAttributeNameCase: "html",
    SourceMapGenerator: extraOptions.sourcemap ? SourceMapGenerator : void 0
  });
}
function getRemarkPlugins(mdxOptions) {
  let remarkPlugins = [];
  if (!isPerformanceBenchmark) {
    if (mdxOptions.gfm) {
      remarkPlugins.push(remarkGfm);
    }
    if (mdxOptions.smartypants) {
      remarkPlugins.push(remarkSmartypants);
    }
  }
  remarkPlugins.push(...mdxOptions.remarkPlugins, remarkCollectImages);
  return remarkPlugins;
}
function getRehypePlugins(mdxOptions, { experimentalHeadingIdCompat }) {
  let rehypePlugins = [
    // ensure `data.meta` is preserved in `properties.metastring` for rehype syntax highlighters
    rehypeMetaString,
    // rehypeRaw allows custom syntax highlighters to work without added config
    [rehypeRaw, { passThrough: nodeTypes }]
  ];
  const syntaxHighlight = mdxOptions.syntaxHighlight;
  if (syntaxHighlight && !isPerformanceBenchmark) {
    const syntaxHighlightType = typeof syntaxHighlight === "string" ? syntaxHighlight : syntaxHighlight?.type;
    const excludeLangs = typeof syntaxHighlight === "object" ? syntaxHighlight?.excludeLangs : void 0;
    if (syntaxHighlightType === "shiki") {
      rehypePlugins.push([rehypeShiki, mdxOptions.shikiConfig, excludeLangs]);
    } else if (syntaxHighlightType === "prism") {
      rehypePlugins.push([rehypePrism, excludeLangs]);
    }
  }
  rehypePlugins.push(...mdxOptions.rehypePlugins, rehypeImageToComponent);
  if (!isPerformanceBenchmark) {
    rehypePlugins.push(
      [rehypeHeadingIds, { experimentalHeadingIdCompat }],
      rehypeInjectHeadingsExport
    );
  }
  rehypePlugins.push(
    // Render info from `vfile.data.astro.frontmatter` as JS
    rehypeApplyFrontmatterExport,
    // Analyze MDX nodes and attach to `vfile.data.__astroMetadata`
    rehypeAnalyzeAstroMetadata
  );
  if (mdxOptions.optimize) {
    const options = mdxOptions.optimize === true ? void 0 : mdxOptions.optimize;
    rehypePlugins.push([rehypeOptimizeStatic, options]);
  }
  return rehypePlugins;
}

function vitePluginMdx(opts) {
  let processor;
  let sourcemapEnabled;
  return {
    name: "@mdx-js/rollup",
    enforce: "pre",
    buildEnd() {
      processor = void 0;
    },
    configResolved(resolved) {
      sourcemapEnabled = !!resolved.build.sourcemap;
      const jsxPluginIndex = resolved.plugins.findIndex((p) => p.name === "astro:jsx");
      if (jsxPluginIndex !== -1) {
        resolved.plugins.splice(jsxPluginIndex, 1);
      }
    },
    async resolveId(source, importer, options) {
      if (importer?.endsWith(".mdx") && source[0] !== "/") {
        let resolved = await this.resolve(source, importer, options);
        if (!resolved) resolved = await this.resolve("./" + source, importer, options);
        return resolved;
      }
    },
    // Override transform to alter code before MDX compilation
    // ex. inject layouts
    async transform(code, id) {
      if (!id.endsWith(".mdx")) return;
      const { frontmatter, content } = safeParseFrontmatter(code, id);
      const vfile = new VFile({
        value: content,
        path: id,
        data: {
          astro: {
            frontmatter
          },
          applyFrontmatterExport: {
            srcDir: opts.srcDir
          }
        }
      });
      if (!processor) {
        processor = createMdxProcessor(opts.mdxOptions, {
          sourcemap: sourcemapEnabled,
          experimentalHeadingIdCompat: opts.experimentalHeadingIdCompat
        });
      }
      try {
        const compiled = await processor.process(vfile);
        return {
          code: String(compiled.value),
          map: compiled.map,
          meta: getMdxMeta(vfile)
        };
      } catch (e) {
        const err = e;
        err.name = "MDXError";
        err.loc = { file: id, line: e.line, column: e.column };
        Error.captureStackTrace(err);
        throw err;
      }
    }
  };
}
function getMdxMeta(vfile) {
  const astroMetadata = getAstroMetadata(vfile);
  if (!astroMetadata) {
    throw new Error(
      "Internal MDX error: Astro metadata is not set by rehype-analyze-astro-metadata"
    );
  }
  return {
    astro: astroMetadata,
    vite: {
      // Setting this vite metadata to `ts` causes Vite to resolve .js
      // extensions to .ts files.
      lang: "ts"
    }
  };
}

const underscoreFragmentImportRegex = /[\s,{]_Fragment[\s,}]/;
const astroTagComponentImportRegex = /[\s,{]__astro_tag_component__[\s,}]/;
function vitePluginMdxPostprocess(astroConfig) {
  return {
    name: "@astrojs/mdx-postprocess",
    transform(code, id, opts) {
      if (!id.endsWith(".mdx")) return;
      const fileInfo = getFileInfo(id, astroConfig);
      const [imports, exports$1] = parse$1(code);
      code = injectUnderscoreFragmentImport(code, imports);
      code = injectMetadataExports(code, exports$1, fileInfo);
      code = transformContentExport(code, exports$1);
      code = annotateContentExport(code, id, !!opts?.ssr, imports);
      return { code, map: null };
    }
  };
}
function injectUnderscoreFragmentImport(code, imports) {
  if (!isSpecifierImported(code, imports, underscoreFragmentImportRegex, "astro/jsx-runtime")) {
    code += `
import { Fragment as _Fragment } from 'astro/jsx-runtime';`;
  }
  return code;
}
function injectMetadataExports(code, exports$1, fileInfo) {
  if (!exports$1.some(({ n }) => n === "url")) {
    code += `
export const url = ${JSON.stringify(fileInfo.fileUrl)};`;
  }
  if (!exports$1.some(({ n }) => n === "file")) {
    code += `
export const file = ${JSON.stringify(fileInfo.fileId)};`;
  }
  return code;
}
function transformContentExport(code, exports$1) {
  if (exports$1.find(({ n }) => n === "Content")) return code;
  const hasComponents = exports$1.find(({ n }) => n === "components");
  const usesAstroImage = exports$1.find(({ n }) => n === USES_ASTRO_IMAGE_FLAG);
  let componentsCode = `{ Fragment: _Fragment${hasComponents ? ", ...components" : ""}, ...props.components,`;
  if (usesAstroImage) {
    componentsCode += ` ${JSON.stringify(ASTRO_IMAGE_ELEMENT)}: ${hasComponents ? "components.img ?? " : ""} props.components?.img ?? ${ASTRO_IMAGE_IMPORT}`;
  }
  componentsCode += " }";
  code = code.replace("export default function MDXContent", "function MDXContent");
  code += `
export const Content = (props = {}) => MDXContent({
  ...props,
  components: ${componentsCode},
});
export default Content;`;
  return code;
}
function annotateContentExport(code, id, ssr, imports) {
  code += `
Content[Symbol.for('mdx-component')] = true`;
  code += `
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);`;
  code += `
Content.moduleId = ${JSON.stringify(id)};`;
  if (ssr) {
    if (!isSpecifierImported(
      code,
      imports,
      astroTagComponentImportRegex,
      "astro/runtime/server/index.js"
    )) {
      code += `
import { __astro_tag_component__ } from 'astro/runtime/server/index.js';`;
    }
    code += `
__astro_tag_component__(Content, 'astro:jsx');`;
  }
  return code;
}
function isSpecifierImported(code, imports, specifierRegex, source) {
  for (const imp of imports) {
    if (imp.n !== source) continue;
    const importStatement = code.slice(imp.ss, imp.se);
    if (specifierRegex.test(importStatement)) return true;
  }
  return false;
}

function mdx(partialMdxOptions = {}) {
  let vitePluginMdxOptions = {};
  return {
    name: "@astrojs/mdx",
    hooks: {
      "astro:config:setup": async (params) => {
        const { updateConfig, config, addPageExtension, addContentEntryType, addRenderer } = params;
        addRenderer({
          name: "astro:jsx",
          serverEntrypoint: new URL("../dist/server.js", import.meta.url)
        });
        addPageExtension(".mdx");
        addContentEntryType({
          extensions: [".mdx"],
          async getEntryInfo({ fileUrl, contents }) {
            const parsed = safeParseFrontmatter(contents, fileURLToPath(fileUrl));
            return {
              data: parsed.frontmatter,
              body: parsed.content.trim(),
              slug: parsed.frontmatter.slug,
              rawData: parsed.rawFrontmatter
            };
          },
          contentModuleTypes: await fs$2.readFile(
            new URL("../template/content-module-types.d.ts", import.meta.url),
            "utf-8"
          ),
          // MDX can import scripts and styles,
          // so wrap all MDX files with script / style propagation checks
          handlePropagation: true
        });
        updateConfig({
          vite: {
            plugins: [vitePluginMdx(vitePluginMdxOptions), vitePluginMdxPostprocess(config)]
          }
        });
      },
      "astro:config:done": ({ config, logger }) => {
        const extendMarkdownConfig = partialMdxOptions.extendMarkdownConfig ?? defaultMdxOptions.extendMarkdownConfig;
        const resolvedMdxOptions = applyDefaultOptions({
          options: partialMdxOptions,
          defaults: markdownConfigToMdxOptions(
            extendMarkdownConfig ? config.markdown : markdownConfigDefaults,
            logger
          )
        });
        Object.assign(vitePluginMdxOptions, {
          mdxOptions: resolvedMdxOptions,
          srcDir: config.srcDir,
          experimentalHeadingIdCompat: config.experimental.headingIdCompat
        });
        vitePluginMdxOptions = {};
      }
    }
  };
}
const defaultMdxOptions = {
  extendMarkdownConfig: true,
  recmaPlugins: [],
  optimize: false
};
function markdownConfigToMdxOptions(markdownConfig, logger) {
  return {
    ...defaultMdxOptions,
    ...markdownConfig,
    remarkPlugins: ignoreStringPlugins(markdownConfig.remarkPlugins, logger),
    rehypePlugins: ignoreStringPlugins(markdownConfig.rehypePlugins, logger),
    remarkRehype: markdownConfig.remarkRehype ?? {}
  };
}
function applyDefaultOptions({
  options,
  defaults
}) {
  return {
    syntaxHighlight: options.syntaxHighlight ?? defaults.syntaxHighlight,
    extendMarkdownConfig: options.extendMarkdownConfig ?? defaults.extendMarkdownConfig,
    recmaPlugins: options.recmaPlugins ?? defaults.recmaPlugins,
    remarkRehype: options.remarkRehype ?? defaults.remarkRehype,
    gfm: options.gfm ?? defaults.gfm,
    smartypants: options.smartypants ?? defaults.smartypants,
    remarkPlugins: options.remarkPlugins ?? defaults.remarkPlugins,
    rehypePlugins: options.rehypePlugins ?? defaults.rehypePlugins,
    shikiConfig: options.shikiConfig ?? defaults.shikiConfig,
    optimize: options.optimize ?? defaults.optimize
  };
}

function parseI18nUrl(url, defaultLocale, locales, base) {
  if (!url.startsWith(base)) {
    return void 0;
  }
  let s = url.slice(base.length);
  if (!s || s === "/") {
    return { locale: defaultLocale, path: "/" };
  }
  if (s[0] !== "/") {
    s = "/" + s;
  }
  const locale = s.split("/")[1];
  if (locale in locales) {
    let path = s.slice(1 + locale.length);
    if (!path) {
      path = "/";
    }
    return { locale, path };
  }
  return { locale: defaultLocale, path: s };
}

function generateSitemap(pages, finalSiteUrl, opts) {
  const { changefreq, priority, lastmod: lastmodSrc, i18n } = opts ?? {};
  const urls = [...pages];
  urls.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  const lastmod = lastmodSrc?.toISOString();
  const { defaultLocale, locales } = i18n ?? {};
  let getI18nLinks;
  if (defaultLocale && locales) {
    getI18nLinks = createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl);
  }
  const urlData = urls.map((url, i) => ({
    url,
    links: getI18nLinks?.(i),
    lastmod,
    priority,
    changefreq
  }));
  return urlData;
}
function createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl) {
  const parsedI18nUrls = urls.map((url) => parseI18nUrl(url, defaultLocale, locales, finalSiteUrl));
  const i18nPathToLinksCache = /* @__PURE__ */ new Map();
  return (urlIndex) => {
    const i18nUrl = parsedI18nUrls[urlIndex];
    if (!i18nUrl) {
      return void 0;
    }
    const cached = i18nPathToLinksCache.get(i18nUrl.path);
    if (cached) {
      return cached;
    }
    const links = [];
    for (let i = 0; i < parsedI18nUrls.length; i++) {
      const parsed = parsedI18nUrls[i];
      if (parsed?.path === i18nUrl.path) {
        links.push({
          url: urls[i],
          lang: locales[parsed.locale]
        });
      }
    }
    if (links.length <= 1) {
      return void 0;
    }
    i18nPathToLinksCache.set(i18nUrl.path, links);
    return links;
  };
}

const SITEMAP_CONFIG_DEFAULTS = {
  filenameBase: "sitemap",
  entryLimit: 45e3,
  namespaces: {
    news: true,
    xhtml: true,
    image: true,
    video: true
  }
};

const localeKeySchema = z$1.string().min(1);
const SitemapOptionsSchema = z$1.object({
  filenameBase: z$1.string().optional().default(SITEMAP_CONFIG_DEFAULTS.filenameBase),
  filter: z$1.function().args(z$1.string()).returns(z$1.boolean()).optional(),
  customSitemaps: z$1.string().url().array().optional(),
  customPages: z$1.string().url().array().optional(),
  canonicalURL: z$1.string().url().optional(),
  xslURL: z$1.string().optional(),
  i18n: z$1.object({
    defaultLocale: localeKeySchema,
    locales: z$1.record(
      localeKeySchema,
      z$1.string().min(2).regex(/^[a-zA-Z\-]+$/gm, {
        message: "Only English alphabet symbols and hyphen allowed"
      })
    )
  }).refine((val) => !val || val.locales[val.defaultLocale], {
    message: "`defaultLocale` must exist in `locales` keys"
  }).optional(),
  entryLimit: z$1.number().nonnegative().optional().default(SITEMAP_CONFIG_DEFAULTS.entryLimit),
  serialize: z$1.function().args(z$1.any()).returns(z$1.any()).optional(),
  changefreq: z$1.nativeEnum(EnumChangefreq).optional(),
  lastmod: z$1.date().optional(),
  priority: z$1.number().min(0).max(1).optional(),
  namespaces: z$1.object({
    news: z$1.boolean().optional(),
    xhtml: z$1.boolean().optional(),
    image: z$1.boolean().optional(),
    video: z$1.boolean().optional()
  }).optional().default(SITEMAP_CONFIG_DEFAULTS.namespaces)
}).strict().default(SITEMAP_CONFIG_DEFAULTS);

const validateOptions = (site, opts) => {
  const result = SitemapOptionsSchema.parse(opts);
  z$1.object({
    site: z$1.string().optional(),
    // Astro takes care of `site`: how to validate, transform and refine
    canonicalURL: z$1.string().optional()
    // `canonicalURL` is already validated in prev step
  }).refine((options) => options.site || options.canonicalURL, {
    message: "Required `site` astro.config option or `canonicalURL` integration option"
  }).parse({
    site,
    canonicalURL: result.canonicalURL
  });
  return result;
};

async function writeSitemap({
  filenameBase,
  hostname,
  sitemapHostname = hostname,
  sourceData,
  destinationDir,
  limit = 5e4,
  customSitemaps = [],
  publicBasePath = "./",
  xslURL: xslUrl,
  lastmod,
  namespaces = { news: true, xhtml: true, image: true, video: true }
}, astroConfig) {
  await mkdir(destinationDir, { recursive: true });
  const sitemapAndIndexStream = new SitemapAndIndexStream({
    limit,
    xslUrl,
    getSitemapStream: (i) => {
      const sitemapStream = new SitemapStream({
        hostname,
        xslUrl,
        // Custom namespace handling
        xmlns: {
          news: namespaces?.news !== false,
          xhtml: namespaces?.xhtml !== false,
          image: namespaces?.image !== false,
          video: namespaces?.video !== false
        }
      });
      const path = `./${filenameBase}-${i}.xml`;
      const writePath = resolve(destinationDir, path);
      if (!publicBasePath.endsWith("/")) {
        publicBasePath += "/";
      }
      const publicPath = normalize(publicBasePath + path);
      let stream;
      if (astroConfig.trailingSlash === "never" || astroConfig.build.format === "file") {
        const host = hostname.endsWith("/") ? hostname.slice(0, -1) : hostname;
        const searchStr = `<loc>${host}/</loc>`;
        const replaceStr = `<loc>${host}</loc>`;
        stream = sitemapStream.pipe(replace(searchStr, replaceStr)).pipe(createWriteStream(writePath));
      } else {
        stream = sitemapStream.pipe(createWriteStream(writePath));
      }
      const url = new URL(publicPath, sitemapHostname).toString();
      return [{ url, lastmod }, sitemapStream, stream];
    }
  });
  const src = Readable.from(sourceData);
  const indexPath = resolve(destinationDir, `./${filenameBase}-index.xml`);
  for (const url of customSitemaps) {
    SitemapIndexStream.prototype._transform.call(
      sitemapAndIndexStream,
      { url, lastmod },
      "utf8",
      () => {
      }
    );
  }
  return promisify(pipeline)(src, sitemapAndIndexStream, createWriteStream(indexPath));
}

function formatConfigErrorMessage(err) {
  const errorList = err.issues.map((issue) => ` ${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
const PKG_NAME = "@astrojs/sitemap";
const STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["404", "500"]);
const isStatusCodePage = (locales) => {
  const statusPathNames = new Set(
    locales.flatMap((locale) => [...STATUS_CODE_PAGES].map((page) => `${locale}/${page}`)).concat([...STATUS_CODE_PAGES])
  );
  return (pathname) => {
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    if (pathname.startsWith("/")) {
      pathname = pathname.slice(1);
    }
    return statusPathNames.has(pathname);
  };
};
const createPlugin = (options) => {
  let config;
  return {
    name: PKG_NAME,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir, routes, pages, logger }) => {
        try {
          if (!config.site) {
            logger.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          const opts = validateOptions(config.site, options);
          const { filenameBase, filter, customPages, customSitemaps, serialize, entryLimit } = opts;
          const outFile = `${filenameBase}-index.xml`;
          const finalSiteUrl = new URL(config.base, config.site);
          const shouldIgnoreStatus = isStatusCodePage(Object.keys(opts.i18n?.locales ?? {}));
          let pageUrls = pages.filter((p) => !shouldIgnoreStatus(p.pathname)).map((p) => {
            if (p.pathname !== "" && !finalSiteUrl.pathname.endsWith("/"))
              finalSiteUrl.pathname += "/";
            if (p.pathname.startsWith("/")) p.pathname = p.pathname.slice(1);
            const fullPath = finalSiteUrl.pathname + p.pathname;
            return new URL(fullPath, finalSiteUrl).href;
          });
          const routeUrls = routes.reduce((urls, r) => {
            if (r.type !== "page") return urls;
            if (r.pathname) {
              if (shouldIgnoreStatus(r.pathname ?? r.route)) return urls;
              let fullPath = finalSiteUrl.pathname;
              if (fullPath.endsWith("/")) fullPath += r.generate(r.pathname).substring(1);
              else fullPath += r.generate(r.pathname);
              const newUrl = new URL(fullPath, finalSiteUrl).href;
              if (config.trailingSlash === "never") {
                urls.push(newUrl);
              } else if (config.build.format === "directory" && !newUrl.endsWith("/")) {
                urls.push(newUrl + "/");
              } else {
                urls.push(newUrl);
              }
            }
            return urls;
          }, []);
          pageUrls = Array.from(/* @__PURE__ */ new Set([...pageUrls, ...routeUrls, ...customPages ?? []]));
          if (filter) {
            pageUrls = pageUrls.filter(filter);
          }
          if (pageUrls.length === 0) {
            logger.warn(`No pages found!
\`${outFile}\` not created.`);
            return;
          }
          let urlData = generateSitemap(pageUrls, finalSiteUrl.href, opts);
          if (serialize) {
            try {
              const serializedUrls = [];
              for (const item of urlData) {
                const serialized = await Promise.resolve(serialize(item));
                if (serialized) {
                  serializedUrls.push(serialized);
                }
              }
              if (serializedUrls.length === 0) {
                logger.warn("No pages found!");
                return;
              }
              urlData = serializedUrls;
            } catch (err) {
              logger.error(`Error serializing pages
${err.toString()}`);
              return;
            }
          }
          const destDir = fileURLToPath(dir);
          const lastmod = opts.lastmod?.toISOString();
          const xslURL = opts.xslURL ? new URL(opts.xslURL, finalSiteUrl).href : void 0;
          await writeSitemap(
            {
              filenameBase,
              hostname: finalSiteUrl.href,
              destinationDir: destDir,
              publicBasePath: config.base,
              sourceData: urlData,
              limit: entryLimit,
              customSitemaps,
              xslURL,
              lastmod,
              namespaces: opts.namespaces
            },
            config
          );
          logger.info(`\`${outFile}\` created at \`${path$1.relative(process.cwd(), destDir)}\``);
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var index_default = createPlugin;

function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

// @ts-check

// https://astro.build/config
const astroConfig = defineConfig({
  site: 'https://miguelangelft.github.io/',
  base: '/',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    index_default$1(),
    index_default(),
    mdx({
      optimize: true,
      syntaxHighlight: 'shiki',
    }),
  ],
  experimental: {
    fonts: [
      {
        name: 'Inter',
        cssVariable: '--font-inter',
        provider: 'local',
        variants: [
          {
            src: ['./src/assets/fonts/Inter-Regular.woff2'],
            style: 'normal',
            weight: 400,
          },
          {
            src: ['./src/assets/fonts/Inter-Medium.woff2'],
            style: 'normal',
            weight: 500,
          },
          {
            src: ['./src/assets/fonts/Inter-SemiBold.woff2'],
            style: 'normal',
            weight: 600,
          },
          {
            src: ['./src/assets/fonts/Inter-Bold.woff2'],
            style: 'normal',
            weight: 700,
          },
          {
            src: ['./src/assets/fonts/Inter-ExtraBold.woff2'],
            style: 'normal',
            weight: 800,
          },
        ],
      },
      {
        name: 'InterVariable',
        cssVariable: '--font-inter-variable',
        provider: 'local',
        variants: [
          {
            src: ['./src/assets/fonts/InterVariable.woff2'],
            style: 'normal',
            weight: 'variable',
          },
        ],
      },
    ],
  },
});

const DEFAULT_CONFIGURATION = {
  baseUrl: astroConfig.site || "https://getcvfolio.com",
  author: {
    avatar,
    name: "Miguel-Ángel Fernández-Torres",
    headline: "Assistant Professor at Universidad Carlos III de Madrid",
    username: "miguelangelft",
    location: "Leganés, Madrid, Spain",
    pronouns: "He/Him"
  },
  seo: {
    title: "CV Folio — An Astro template inspired on Read.cv",
    description: "Clean and aesthetic portfolio website for developers and designers",
    image: MetaDefaultImage,
    twitter: {
      creator: "@cvfolio"
    },
    robots: "noindex, nofollow"
  }
};

const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
    // Default to UTC to prevent timezone issues
  });
  return formatter.format(new Date(date));
};
const generateAbsoluteUrl = (path) => DEFAULT_CONFIGURATION.baseUrl.concat(path);
const sortByDateRange = (items) => {
  const getCurrentYear = () => (/* @__PURE__ */ new Date()).getFullYear();
  return items.sort((current, next) => {
    const currentIsOngoing = current.data.to === void 0;
    const nextIsOngoing = next.data.to === void 0;
    if (currentIsOngoing && !nextIsOngoing) return -1;
    if (!currentIsOngoing && nextIsOngoing) return 1;
    const currentEnd = current.data.to ?? getCurrentYear();
    const nextEnd = next.data.to ?? getCurrentYear();
    return nextEnd - currentEnd || next.data.from - current.data.from;
  });
};
const sortByYear = (items) => {
  return items.sort((a, b) => b.data.year - a.data.year);
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://miguelangelft.github.io/");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const defaultSeo = DEFAULT_CONFIGURATION.seo;
  const { seo } = Astro2.props;
  const image = await getImage({ src: seo?.image || defaultSeo.image, format: "jpg" });
  const seoImage = generateAbsoluteUrl(image.src);
  return renderTemplate(_a || (_a = __template(['<head><meta charset="utf-8"><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/svg+xml" href="/favicon.svg">', "", "", "<title>", '</title><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><meta name="description"', ">", '<meta name="generator"', '><meta name="robots"', '><!-- OpenGraph Meta --><meta property="og:type"', '><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1280"><meta property="og:image:height" content="720"><!-- Twitter Meta --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:creator"', '><meta property="twitter:site"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><script>\n    // Prevent FOUC by applying theme before page renders\n    (function() {\n      const theme = localStorage.getItem('theme') || \n        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');\n      if (theme === 'dark') {\n        document.documentElement.classList.add('dark');\n      }\n    })();\n  <\/script>", "", "</head>"])), renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-inter", "preload": true }), renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-inter-variable", "preload": true }), seo?.canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(seo?.canonicalUrl, "href")}>`, seo?.title || defaultSeo.title, addAttribute(Astro2.generator, "content"), addAttribute(seo?.description || defaultSeo.description, "content"), renderSlot($$result, $$slots["keywords"], renderTemplate`<meta name="keywords"${addAttribute(seo?.keywords || defaultSeo.keywords, "content")}>`), addAttribute(Astro2.generator, "content"), addAttribute(seo?.robots || defaultSeo.robots, "content"), addAttribute(seo?.type ?? "website", "content"), addAttribute(defaultSeo.title, "content"), addAttribute(seo?.title || defaultSeo.title, "content"), addAttribute(seo?.description || defaultSeo.description, "content"), addAttribute(seoImage, "content"), addAttribute(seo?.twitter?.creator || defaultSeo.twitter?.creator, "content"), addAttribute(seo?.twitter?.creator || defaultSeo.twitter?.creator, "content"), addAttribute(seo?.title || defaultSeo.title, "content"), addAttribute(seo?.description || defaultSeo.description, "content"), addAttribute(seoImage, "content"), renderSlot($$result, $$slots["default"]), renderHead());
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/components/partials/Head.astro", void 0);

const $$Astro = createAstro("https://miguelangelft.github.io/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { seo } = Astro2.props;
  const config = getSiteConfig();
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "seo": seo })}${maybeRenderHead()}<body class="bg-background text-foreground pb-12"> ${renderComponent($$result, "Header", $$Header, {})} <main class="pt-24"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${config.elements.themeSwitch && renderTemplate`${renderComponent($$result, "SwitchTheme", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/SwitchTheme.tsx", "client:component-export": "default" })}`} </body></html>`;
}, "/home/matorres/Documents/personal/miguelangelft.github.io/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, DEFAULT_CONFIGURATION as D, $$Container as a, getCollection as b, $$Image as c, getImage as d, sortByYear as e, formatDate as f, getEntry as g, getSiteConfig as h, baseService as i, parseQuality as p, renderEntry as r, sortByDateRange as s };
