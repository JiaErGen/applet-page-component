!function(n,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["applet-page-component"]=o():n["applet-page-component"]=o()}(window,(function(){return function(n){var o={};function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=o,t.d=function(n,o,e){t.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,o){if(1&o&&(n=t(n)),8&o)return n;if(4&o&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var r in n)t.d(e,r,function(o){return n[o]}.bind(null,r));return e},t.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},t.p="",t(t.s=0)}([function(n,o,t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};n.exports={createPublish:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o={onShow:function(){},onHide:function(){},onShareAppMessage:function(){},onTitleClick:function(){},onOptionMenuClick:function(){},onPullDownRefresh:function(){},onPullIntercept:function(){},onTabItemTap:function(){},onPageScroll:function(){},onReachBottom:function(){}};for(var t in o)Object.hasOwnProperty.call(o,t)&&(n[t]=n[t]||o[t]);return n},createSubscribe:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(o){var t=o.didMount,r={onShow:function(){},onHide:function(){},onShareAppMessage:function(){},onTitleClick:function(){},onOptionMenuClick:function(){},onPullDownRefresh:function(){},onPullIntercept:function(){},onTabItemTap:function(){},onPageScroll:function(){},onReachBottom:function(){}};return o.didMount=function(){var o=this.$page,u=this,c=function(t){if(!Object.hasOwnProperty.call(r,t))return{v:void 0};var e=o[t],c=n[t];c&&!e&&console.error("页面没有添加 "+t+" 方法"),o[t]=function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];var i=e&&e.call.apply(e,[o].concat(t)),f=c&&c.call.apply(c,[u,i].concat(t));return f||i}};for(var i in r){var f=c(i);if("object"===(void 0===f?"undefined":e(f)))return f.v}for(var l=arguments.length,a=Array(l),p=0;p<l;p++)a[p]=arguments[p];t&&t.call.apply(t,[this].concat(a))},o}}}}])}));