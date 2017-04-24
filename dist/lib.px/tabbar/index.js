/*! vue-ydui v0.5.2 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TabBarItem=t.TabBar=void 0;var o=n(83),a=r(o),i=n(82),s=r(i);t.TabBar=a.default,t.TabBarItem=s.default},1:function(e,t){e.exports=function(e,t,n,r){var o,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:a,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(b)return v;r.parentNode.removeChild(r)}if(m){var a=p++;r=f||(f=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){b=n;var o=c(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=u[i.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],l=a[2],c=a[3],u={id:e+":"+o,css:s,media:l,sourceMap:c};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-r,a=o+t.offsetHeight;return o>=0&&o<n||a>0&&a<=n},i=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){i(e,t)||(e.className=""==e.className?t:e.className+" "+t)},l=function(e,t){if(i(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=r,t.getScrollview=o,t.checkInview=a,t.addClass=s,t.removeClass=l},22:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.m-tabbar{width:100%;position:relative;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:5px 0 3px;background-color:hsla(0,0%,100%,.96)}.m-tabbar:after{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.tabbar-fixed{position:fixed;bottom:0;left:0;z-index:49}.tabbar-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tabbar-active,.tabbar-active .tabbar-icon{color:inherit}.tabbar-badge{top:-1px;margin-left:-7px}.tabbar-badge,.tabbar-dot{position:absolute;left:100%;z-index:999}.tabbar-dot{display:block;width:10px;height:10px;background-color:#ef4f4f;border-radius:50%;top:1px;margin-left:-5px}.tabbar-icon{height:29px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.tabbar-icon img{height:70%}.tabbar-txt{display:inline-block;font-size:inherit}',""])},82:function(e,t,n){var r=n(1)(n(201),n(128),null,null);e.exports=r.exports},83:function(e,t,n){n(140);var r=n(1)(n(202),n(102),null,null);e.exports=r.exports},102:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"m-tabbar tabbbar-top-line-color",class:e.classes,style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"tabbar-item",class:e.classes,style:e.styles,attrs:{to:e.link,exact:e.$parent.exact,"active-class":e.$parent.activeClass}},[n("span",{staticClass:"tabbar-icon"},[e._t("icon"),e._v(" "),n("span",{staticClass:"tabbar-badge"},[e._t("badge")],2),e._v(" "),e.dot?n("span",{staticClass:"tabbar-dot"}):e._e()],2),e._v(" "),n("span",{staticClass:"tabbar-txt"},[e._v(e._s(e.title))])])},staticRenderFns:[]}},140:function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("897b08ee",r,!0)},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5);t.default={name:"yd-tabbar-item",props:{link:String,title:String,active:Boolean,dot:Boolean},computed:{classes:function(){return this.active?"tabbar-active":""},styles:function(){return this.active?{}:{color:this.$parent.color}}}}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-tabbar",props:{fixed:Boolean,exact:{type:Boolean,default:!0},activeClass:{type:String,default:"router-link-active"},activeColor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#09BB07"},bgcolor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#FFF"},color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#979797"},fontsize:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:"12px"}},computed:{classes:function(){return this.fixed?"tabbar-fixed":""},styles:function(){return{color:this.activeColor,backgroundColor:this.bgcolor,fontSize:this.fontsize}}}}}})});