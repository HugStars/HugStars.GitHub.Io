(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,h=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-25e1d9de":"56a6afaf","chunk-83f8b44e":"98b56956"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-25e1d9de":1,"chunk-83f8b44e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-25e1d9de":"cfae74f8","chunk-83f8b44e":"add06dd6"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){l=h[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var h=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"flex-row"},[n("svg",{staticClass:"moon",attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:e.changeTheme}},[n("path",{attrs:{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"}})]),n("h1",{on:{click:function(t){return e.$router.replace("/home")}}},[e._v("九思 - Nicholaz")])]),n("main",[n("router-view")],1)])},a=[],c={data:function(){return{}},mounted:function(){localStorage.getItem("NicholazTheme")||localStorage.setItem("NicholazTheme","light"),this.setTheme()},methods:{setTheme:function(){"light"==localStorage.getItem("NicholazTheme")?document.documentElement.className="":document.documentElement.className="dark"},changeTheme:function(){"light"==localStorage.getItem("NicholazTheme")?localStorage.setItem("NicholazTheme","dark"):localStorage.setItem("NicholazTheme","light"),this.setTheme()}}},u=c,i=(n("034f"),n("2877")),l=Object(i["a"])(u,o,a,!1,null,null,null),s=l.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(h["a"]);var d=new h["a"]({base:"/",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(){return n.e("chunk-83f8b44e").then(n.bind(null,"bb51"))}},{path:"/query",name:"Query",component:function(){return n.e("chunk-25e1d9de").then(n.bind(null,"a962"))}}]}),f=d;r["a"].config.productionTip=!1,new r["a"]({router:f,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});