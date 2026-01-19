import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { K as NOOP_MIDDLEWARE_HEADER, O as decodeKey } from './chunks/astro/server_DmGAE-cX.mjs';
import 'clsx';
import './chunks/shared_9gEenf6c.mjs';
import 'es-module-lexer';
import 'html-escaper';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/matorres/Documents/personal/miguelangelft.github.io/","cacheDir":"file:///home/matorres/Documents/personal/miguelangelft.github.io/node_modules/.astro/","outDir":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/","srcDir":"file:///home/matorres/Documents/personal/miguelangelft.github.io/src/","publicDir":"file:///home/matorres/Documents/personal/miguelangelft.github.io/public/","buildClientDir":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/client/","buildServerDir":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/server/","adapterName":"","routes":[{"file":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/publications/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/publications","isIndex":true,"type":"page","pattern":"^\\/publications\\/?$","segments":[[{"content":"publications","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/publications/index.astro","pathname":"/publications","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/writing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing","isIndex":true,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/index.astro","pathname":"/writing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://miguelangelft.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/PostPreview.astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/publications/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/publications/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/writing/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/writing/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/Talk.astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/WorkExperience.astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/lib/config.ts",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/components/partials/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/publications/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/publications/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/pages/writing/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/writing/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/matorres/Documents/personal/miguelangelft.github.io/src/components/partials/Header.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/publications/index@_@astro":"pages/publications.astro.mjs","\u0000@astro-page:src/pages/publications/[...slug]@_@astro":"pages/publications/_---slug_.astro.mjs","\u0000@astro-page:src/pages/writing/index@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/writing/[...slug]@_@astro":"pages/writing/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B-Wml_bw.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/.astro/content-modules.mjs":"chunks/content-modules_CuGxj2Km.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CUvq5xyU.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dz0Y7KFJ.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/jobs/AP_UC3M.mdx?astroPropagatedAssets":"chunks/AP_UC3M_lya7m0bX.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/404.mdx?astroPropagatedAssets":"chunks/404_WgMk5kUI.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/writing/index.mdx?astroPropagatedAssets":"chunks/index_CjVgBpOM.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/homepage/index.mdx?astroPropagatedAssets":"chunks/index_DsM5t3DZ.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/jobs/AP_UC3M.mdx":"chunks/AP_UC3M_CZC3SDuY.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/404.mdx":"chunks/404_C2oQwbVm.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/writing/index.mdx":"chunks/index_ClJaYN3x.mjs","/home/matorres/Documents/personal/miguelangelft.github.io/src/content/pages/homepage/index.mdx":"chunks/index_B1GaZbgc.mjs","@/components/SwitchTheme.tsx":"_astro/SwitchTheme.DdJi1lbf.js","@astrojs/react/client.js":"_astro/client.DVXtUz19.js","/home/matorres/Documents/personal/miguelangelft.github.io/src/components/ui/WorkExperience.astro?astro&type=script&index=0&lang.ts":"_astro/WorkExperience.astro_astro_type_script_index_0_lang.BzhrsYsi.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/404.html","/file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/publications/index.html","/file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/writing/index.html","/file:///home/matorres/Documents/personal/miguelangelft.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"pJZb9zggNW18DscygRBd+l+lI1OB+W4BmSgkGcMCmgU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
