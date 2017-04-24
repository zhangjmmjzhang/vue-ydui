/*! vue-ydui v0.5.2 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var o=r(59),i=n(o);t.Layout=i.default},1:function(e,t){e.exports=function(e,t,r,n){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=f[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(i(r.parts[o]));f[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function i(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(v)return h;n.parentNode.removeChild(n)}if(x){var i=p++;n=d||(d=o()),t=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=o(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document,u=r(4),f={},c=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){v=r;var o=u(e,t);return n(o),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i],a=f[s.id];a.refs--,r.push(a)}t?(o=u(e,t),n(o)):o=[];for(var i=0;i<r.length;i++){var a=r[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete f[a.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],l=i[2],u=i[3],f={id:e+":"+o,css:a,media:l,sourceMap:u};n[s]?n[s].parts.push(f):r.push(n[s]={id:s,parts:[f]})}return r}},18:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.g-view{margin:0 auto;max-width:750px;min-width:300px}.g-view:before{height:45px}.g-view:after,.g-view:before{content:"";display:block;width:100%}.g-view:after{height:75px}.g-flexview{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:750px;min-width:300px}.g-scrollview{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;position:relative;margin-bottom:-1px}.g-scrollview:after{content:"";display:block;width:100%;height:25px}.ios .g-scrollview{margin-top:1px}.hairline .g-scrollview{margin-top:.5px}',""])},59:function(e,t,r){r(136);var n=r(1)(r(178),r(93),null,null);e.exports=n.exports},93:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"g-flexview"},[e.showNavbar?e._t("navbar",[e.title?r("yd-navbar",{attrs:{title:e.title}},[r("router-link",{attrs:{to:e.link||"/"},slot:"left"},[r("yd-navbar-back-icon")],1)],1):e._e()]):e._e(),e._v(" "),r("section",{ref:"scrollView",staticClass:"g-scrollview",attrs:{id:"scrollView"}},[e._t("default")],2),e._v(" "),e._t("tabbar")],2)},staticRenderFns:[]}},136:function(e,t,r){var n=r(18);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("51846cf6",n,!0)},178:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-layout",props:{link:String,title:String,showNavbar:{type:Boolean,default:!0}}}}})});