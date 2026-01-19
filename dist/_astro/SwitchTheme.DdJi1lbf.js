import{j as m}from"./jsx-runtime.ClP7wGfN.js";import{r as n}from"./index.DK-fsZOb.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),i=e=>{const t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)},h=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim(),x=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:f,...l},g)=>n.createElement("svg",{ref:g,...C,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:h("lucide",c),...!a&&!x(l)&&{"aria-hidden":"true"},...l},[...f.map(([k,w])=>n.createElement(k,w)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const r=n.forwardRef(({className:o,...c},a)=>n.createElement(b,{ref:a,iconNode:t,className:h(`lucide-${E(i(e))}`,`lucide-${e}`,o),...c}));return r.displayName=i(e),r};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],L=p("moon",v);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],T=p("sun",M),d="theme",s="dark",u="light";function _(){const[e,t]=n.useState(null);n.useEffect(()=>{const o=localStorage.getItem(d),c=window.matchMedia("(prefers-color-scheme: dark)").matches,a=o||(c?s:u);a===s?document.documentElement.classList.add(s):document.documentElement.classList.remove(s),t(a)},[]);const r=()=>{const o=e===s?u:s;t(o),localStorage.setItem(d,o),o===s?document.documentElement.classList.add(s):document.documentElement.classList.remove(s)};return e===null?null:m.jsx("button",{onClick:r,className:"hidden md:block fixed z-50 top-0 mt-5 mr-5 right-0 p-2 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60 text-headings transition-colors cursor-pointer","aria-label":`Switch to ${e===s?"light":"dark"} theme`,children:e===s?m.jsx(T,{className:"w-5 h-5"}):m.jsx(L,{className:"w-5 h-5"})})}export{_ as default};
