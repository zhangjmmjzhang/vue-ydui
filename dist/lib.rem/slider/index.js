/*! vue-ydui v0.4.9 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var r=i(73),s=n(r),o=i(72),a=n(o);e.Slider=s.default,e.SliderItem=a.default},1:function(t,e){t.exports=function(t,e,i,n){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:r,exports:s,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},3:function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(s(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],r=0;r<i.parts.length;r++)o.push(s(i.parts[r]));c[i.id]={id:i.id,refs:1,parts:o}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function s(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return m;n.parentNode.removeChild(n)}if(v){var s=f++;n=h||(h=r()),e=o.bind(null,n,s,!1),i=o.bind(null,n,s,!0)}else n=r(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function o(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function a(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,d=i(4),c={},u=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var r=d(t,e);return n(r),function(e){for(var i=[],s=0;s<r.length;s++){var o=r[s],a=c[o.id];a.refs--,i.push(a)}e?(r=d(t,e),n(r)):r=[];for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],o=s[0],a=s[1],l=s[2],d=s[3],c={id:t+":"+r,css:a,media:l,sourceMap:d};n[o]?n[o].parts.push(c):i.push(n[o]={id:o,parts:[c]})}return i}},23:function(t,e,i){e=t.exports=i(2)(),e.push([t.id,".m-slider{overflow:hidden}.m-slider,.slider-wrapper{width:100%;position:relative}.slider-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.slider-wrapper.slider-wrapper-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.slider-item{width:100%;height:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.slider-item a{display:block}.slider-item img{width:100%}@-webkit-keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}@keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}.slider-pagination{position:absolute;width:100%;z-index:2;left:0;bottom:.1rem;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;opacity:0;-webkit-animation:slider-pagination-opacity .3s linear .4s forwards;animation:slider-pagination-opacity .3s linear .4s forwards}.slider-pagination,.slider-pagination.slider-pagination-vertical{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.slider-pagination.slider-pagination-vertical{width:0;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;bottom:0;left:auto;right:.1rem}.slider-pagination>.slider-pagination-item{margin:.05rem;width:6px;height:6px;display:inline-block;border-radius:100%;background-color:#b7d0e1}.slider-pagination>.slider-pagination-item.slider-pagination-item-active{background-color:#ff0005}",""])},72:function(t,e,i){var n=i(1)(i(183),i(81),null,null);t.exports=n.exports},73:function(t,e,i){i(133);var n=i(1)(i(184),i(98),null,null);t.exports=n.exports},81:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-item"},[t._t("default")],2)},staticRenderFns:[]}},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"m-slider"},[i("div",{ref:"warpper",staticClass:"slider-wrapper",class:"vertical"==t.direction?"slider-wrapper-vertical":"",style:t.dragStyleObject},[i("div",{staticClass:"slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.lastItem)}}),t._v(" "),t._t("default"),t._v(" "),i("div",{staticClass:"slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.firtstItem)}})],2),t._v(" "),i("div",{staticClass:"slider-pagination",class:"vertical"==t.direction?"slider-pagination-vertical":""},t._l(t.itemNums,function(e,n){return i("span",{staticClass:"slider-pagination-item",class:t.paginationIndex==n?"slider-pagination-item-active":""})}))])},staticRenderFns:[]}},133:function(t,e,i){var n=i(23);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(3)("487e4844",n,!0)},183:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider-item"}},184:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider",data:function(){return{firtstItem:"",lastItem:"",itemNums:0,index:1,itemsArr:[],autoPlayTimer:null,paginationIndex:0,itemHeight:{height:null},dragStyleObject:{transform:0,speed:0},touches:{moveTag:0,startClientPosition:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1}}},props:{ready:{type:Boolean,default:!0},speed:{default:300,validator:function(t){return/^\d*$/.test(t)}},autoplay:{default:0,validator:function(t){return/^\d*$/.test(t)}},direction:{validator:function(t){return["horizontal","vertical"].indexOf(t)>-1},default:"horizontal"}},methods:{init:function(){if(this.ready){if(this.itemsArr=this.$children.filter(function(t){return"yd-slider-item"===t.$options.name}),this.itemNums=this.itemsArr.length,"vertical"==this.direction){this.$refs.slider.style.height="100%";var t=this.$el.clientHeight;this.itemHeight.height=t+"px",this.setTranslate(0,-t),this.itemsArr.forEach(function(e){e.$el.style.height=t+"px"})}else this.setTranslate(0,-this.$refs.warpper.offsetWidth);this.cloneItem(),this.bindEvents(),this.autoplay>0&&this.autoPlay()}},cloneItem:function(){var t=this.itemsArr;this.firtstItem=t[0].$el.innerHTML,this.lastItem=t[t.length-1].$el.innerHTML},touchStartHandler:function(t){var e=this.touches;if(e.allowClick=!0,e.isTouchEvent="touchstart"===t.type,(e.isTouchEvent||!("which"in t)||3!==t.which)&&0==e.moveTag){e.moveTag=1,"vertical"==this.direction?e.startClientPosition=t.touches?t.touches[0].clientY:t.clientY:e.startClientPosition=t.touches?t.touches[0].clientX:t.clientX,e.touchStartTime=Date.now();var i=this.itemNums;if(0==this.index)return this.index=i,void this.setTranslate(0,-i*("vertical"==this.direction?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.index>i&&(this.index=1,this.setTranslate(0,"vertical"==this.direction?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}},touchMoveHandler:function(t){t.preventDefault();var e=this.touches;if(e.allowClick=!1,!e.isTouchEvent||"mousemove"!==t.type){var i=0;i="vertical"==this.direction?t.touches?t.touches[0].clientY:t.clientY:t.touches?t.touches[0].clientX:t.clientX;var n=e.moveOffset=i-e.startClientPosition;0!=n&&0!=e.moveTag&&(1==e.moveTag&&(this.stopAutoplay(),e.moveTag=2),2==e.moveTag&&this.setTranslate(0,-this.index*("vertical"==this.direction?this.$el.clientHeight:this.$refs.warpper.offsetWidth)+n))}},touchEndHandler:function(){var t=this.touches,e=t.moveOffset,i="vertical"==this.direction?this.$el.clientHeight:this.$refs.warpper.offsetWidth;if(setTimeout(function(){t.allowClick=!0},0),1==t.moveTag&&(t.moveTag=0),2==t.moveTag){t.moveTag=0;var n=Date.now()-t.touchStartTime;n>300&&Math.abs(e)<=.5*i?this.setTranslate(this.speed,-this.index*i):this.setTranslate(this.speed,-((e>0?--this.index:++this.index)*i)),this.autoPlay()}},autoPlay:function(){var t=this;this.autoPlayTimer=setInterval(function(){var e="vertical"==t.direction?t.$el.clientHeight:t.$refs.warpper.offsetWidth;return t.index>t.itemNums?(t.index=1,t.setTranslate(0,-e),void setTimeout(function(){t.setTranslate(t.speed,-(++t.index*e))},100)):void t.setTranslate(t.speed,-(++t.index*e))},this.autoplay)},stopAutoplay:function(){clearInterval(this.autoPlayTimer)},bindEvents:function(){var t=this,e=this.touchEvents();this.$el.addEventListener(e.start,this.touchStartHandler),this.$el.addEventListener(e.move,this.touchMoveHandler),this.$el.addEventListener(e.end,this.touchEndHandler),this.$el.addEventListener("click",function(e){t.touches.allowClick||e.preventDefault()}),window.addEventListener("resize",this.resizeSlides)},unbindEvents:function(){var t=this.touchEvents();this.$el.removeEventListener(t.start,this.touchStartHandler),this.$el.removeEventListener(t.move,this.touchMoveHandler),this.$el.removeEventListener(t.end,this.touchEndHandler),window.removeEventListener("resize",this.resizeSlides)},touchEvents:function(){var t=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();return{start:t?"touchstart":"mousedown",move:t?"touchmove":"mousemove",end:t?"touchend":"mouseup"}},setTranslate:function(t,e){this.dragStyleObject.transitionDuration=t+"ms","vertical"==this.direction?this.dragStyleObject.transform="translate3d(0, "+e+"px, 0)":this.dragStyleObject.transform="translate3d("+e+"px, 0, 0)"},resizeSlides:function(){if("vertical"==this.direction){var t=this.$el.clientHeight;this.dragStyleObject.transform="translate3d(0, "+-this.index*t+"px, 0)"}else{var e=this.$refs.warpper.offsetWidth;this.dragStyleObject.transform="translate3d("+-this.index*e+"px, 0, 0)"}}},watch:{index:function t(){var t=this.index,e=this.itemNums,i=(t-1)%e;this.paginationIndex=i<0?e-1:i},ready:function(t){t&&setTimeout(this.init,0)}},mounted:function(){this.init()},destroyed:function(){this.unbindEvents(),this.stopAutoplay()}}}})});