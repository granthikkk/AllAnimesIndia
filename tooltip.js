(()=>{"use strict";var t,e={5285:(t,e,r)=>{var a=r(8689);const n=(0,a.ZP)(document.querySelectorAll("[data-tippy-trigger]"),{content:t=>{const e=t.dataset.tippyContentTo;return document.querySelector(`[data-tippy-content-for="${e}"]`)},interactive:!0,placement:"auto-start",animation:"scale",onMount:t=>{(0,a.ZP)(document.querySelectorAll("[data-tippy-sub-trigger]"),{content:t=>{const e=t.dataset.tippySubTrigger;return document.querySelector(`[data-tippy-sub-content-for="${e}"]`)},interactive:!0,animation:"shift-away",placement:"auto-start",trigger:"click",arrow:!1})},theme:"transparent",zIndex:40,appendTo:document.body});(0,a.ZP)(document.querySelectorAll("[data-anime-tippy-add-list]"),{content:t=>{const e=t.dataset.animeTippyAddList;return document.querySelector(`[data-anime-tippy-content="${e}"]`)},interactive:!0,animation:"shift-away",arrow:!1,placement:"bottom",trigger:"click"});const o=(0,a.ZP)(document.querySelectorAll("[data-tippy-featured-id]"),{content:t=>{const e=t.dataset.tippyFeaturedId;return document.querySelector(`[data-tippy-featured-content-for="${e}"]`)},animation:"scale",interactive:!0,placement:"auto-start"}),i=((0,a.ZP)(document.querySelectorAll("[data-popular-add-to-list]"),{content:t=>{const e=t.dataset.popularAddToList;return document.querySelector(`[data-popular-add-to-list-for="${e}"]`)},interactive:!0,animation:"shift-away",placement:"auto-start",trigger:"click",arrow:!1}),document.querySelector("[data-tippy-landing-menu-trigger]"));i&&(0,a.ZP)(i,{content:t=>document.querySelector("[data-tippy-landing-menu]"),interactive:!0,animation:"shift-away",arrow:!1,placement:"bottom",trigger:"click"});const c=[n,o];let d;window.addEventListener("resize",(t=>{clearTimeout(d),d=setTimeout((()=>{window.innerWidth<768?c.forEach((t=>{t.forEach((t=>t.disable()))})):c.forEach((t=>{t.forEach((t=>t.enable()))}))}),500)})),document.addEventListener("DOMContentLoaded",(()=>{window.innerWidth<768?c.forEach((t=>{t.forEach((t=>t.disable()))})):c.forEach((t=>{t.forEach((t=>t.enable()))}))}))}},r={};function a(t){var n=r[t];if(void 0!==n)return n.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,a),o.exports}a.m=e,t=[],a.O=(e,r,n,o)=>{if(!r){var i=1/0;for(u=0;u<t.length;u++){for(var[r,n,o]=t[u],c=!0,d=0;d<r.length;d++)(!1&o||i>=o)&&Object.keys(a.O).every((t=>a.O[t](r[d])))?r.splice(d--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,n,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.j=816,(()=>{var t={816:0};a.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[i,c,d]=r,l=0;if(i.some((e=>0!==t[e]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(d)var u=d(a)}for(e&&e(r);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},r=self.webpackChunkkiranime=self.webpackChunkkiranime||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var n=a.O(void 0,[216],(()=>a(5285)));n=a.O(n)})();