(window.webpackJsonp_sprayloc_blocks=window.webpackJsonp_sprayloc_blocks||[]).push([[1],{25:function(e,t,n){},26:function(e,t,n){}}]),function(e){function t(t){for(var r,c,l=t[0],i=t[1],u=t[2],p=0,d=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp_sprayloc_blocks=window.webpackJsonp_sprayloc_blocks||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push([27,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t,n){e.exports=!n(9)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(19),o=n(20),a=n(22),c=Object.defineProperty;t.f=n(4)?Object.defineProperty:function(e,t,n){if(r(e),t=a(t,!0),r(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=window.wp.blocks},function(e,t,n){var r=n(12);e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){e.exports=n(13)},function(e,t,n){n(14);var r=n(7).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(15);r(r.S+r.F*!n(4),"Object",{defineProperty:n(8).f})},function(e,t,n){var r=n(6),o=n(7),a=n(16),c=n(18),l=n(24),i=function(e,t,n){var u,s,p,d=e&i.F,f=e&i.G,b=e&i.S,m=e&i.P,g=e&i.B,y=e&i.W,v=f?o:o[t]||(o[t]={}),O=v.prototype,j=f?r:b?r[t]:(r[t]||{}).prototype;for(u in f&&(n=t),n)(s=!d&&j&&void 0!==j[u])&&l(v,u)||(p=s?j[u]:n[u],v[u]=f&&"function"!=typeof j[u]?n[u]:g&&s?a(p,r):y&&j[u]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):m&&"function"==typeof p?a(Function.call,p):p,m&&((v.virtual||(v.virtual={}))[u]=p,e&i.R&&O&&!O[u]&&c(O,u,p)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,e.exports=i},function(e,t,n){var r=n(17);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(8),o=n(23);e.exports=n(4)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(5);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(4)&&!n(9)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(5),o=n(6).document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},function(e,t,n){var r=n(5);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},,,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"name",(function(){return p})),n.d(r,"settings",(function(){return d}));var o={};n.r(o),n.d(o,"name",(function(){return O})),n.d(o,"settings",(function(){return h}));var a={};n.r(a),n.d(a,"name",(function(){return E})),n.d(a,"settings",(function(){return w}));var c={};n.r(c),n.d(c,"name",(function(){return C})),n.d(c,"settings",(function(){return P}));var l={};n.r(l),n.d(l,"name",(function(){return _})),n.d(l,"settings",(function(){return B}));var i=n(10),u=n(0),s=n(2),p="sprayloc/title",d={apiVersion:2,title:"Sprayloc Title",description:"Title Block",category:"design",icon:"edit",attributes:{content:{type:"array",source:"children",selector:"p",default:["Hello"]},title_str:{type:"string",value:"hello",default:"haaaa !!!!"}},edit:function(e){return Object(u.createElement)("p",{class:"title"},Object(u.createElement)(s.RichText,{value:e.attributes.content,onChange:function(t){e.setAttributes({content:t})},tagName:"p"}))},save:function(e){return Object(u.createElement)("p",{class:"title"},e.attributes.content)}},f=n(11),b=n.n(f),m=n(3),g=(n(25),n(1));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O="sprayloc/slanted-container",j={backgroundColor:"#900",color:"#fff",padding:"20px",width:"100%",backgroundSize:"cover",backgroundPosition:"center center"},h={title:"Sprayloc Slanted Container",description:"Slanted container",category:"design",icon:"edit",supports:{align:!0},attributes:{clipPath:{type:"string",default:"polygon(-1px 0, -1px calc(100% - 50px), 101% 100%, 101% 0)"},slantHeight:{type:"number",default:150},slantInvert:{type:"boolean",default:!1},minHeight:{type:"number",default:100},paddingTop:{type:"number",default:0},paddingBottom:{type:"number",default:0},backgroundColor:{type:"string",default:"black"},overlayColor:{type:"string",default:"orangered"},overlayColors:{type:"array",default:[{name:"color 1",color:"#ff0000"},{name:"color 2",color:"#00ff00"}]},overlayOpacity:{type:"number",default:.2},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},backgroundURL:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=t.clipPath,r=t.slantInvert,o=t.slantHeight,a=t.minHeight,c=t.paddingTop,l=t.paddingBottom,i=t.backgroundColor,p=t.overlayColor,d=t.overlayColors,f=t.overlayOpacity,b=t.mediaID,y=(t.mediaURL,t.backgroundURL),O=e.setAttributes,h=e.className,E=function(e){console.log(e),O({mediaURL:"",mediaID:void 0,backgroundURL:""})};return[Object(u.createElement)(s.InspectorControls,null,Object(u.createElement)(g.Panel,{header:"Slanted Controls"},Object(u.createElement)(g.PanelBody,{title:"Misc",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.RangeControl,{label:"Height",value:a,max:500,onChange:function(e){O({minHeight:e})}})),Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.RangeControl,{label:"Slant Height",value:o,max:500,onChange:function(e){var t;O({slantHeight:e}),console.log(e),t=r?"polygon(-1px 0, -1px 100%, 100% calc(100% - ".concat(o,"px), 101% 0)"):"polygon(-1px 0, -1px calc(100% - ".concat(o,"px), 101% 100%, 100% 0)"),O({clipPath:t})}})),Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.CheckboxControl,{label:"invert",checked:r,onChange:function(e){var t;console.log(e),O({slantInvert:e}),t=e?"polygon(-10px 0, -10px 100%, 100% calc(100% - ".concat(o,"px), 100% 0)"):"polygon(-10px 0, -10px calc(100% - ".concat(o,"px), 100% 100%, 100% 0)"),O({clipPath:t})}}))),Object(u.createElement)(g.PanelBody,{title:"background",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(s.MediaUpload,{onSelect:function(e){O({mediaURL:e.url,mediaID:e.id,backgroundURL:e.url})},allowedTypes:"image",value:b,render:function(e){var t=e.open;return Object(u.createElement)("div",null,Object(u.createElement)(g.Button,{className:"button button-large",onClick:t},b?Object(m.__)("Change Image","gutenberg-examples"):Object(m.__)("Upload Image","gutenberg-examples")),b?Object(u.createElement)(g.Button,{className:"button button-alert",onClick:E},"Remove"):"")}}))),Object(u.createElement)(g.PanelBody,{title:"Padding",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.RangeControl,{label:"Padding Top",value:c,max:500,onChange:function(e){O({paddingTop:e})}})),Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.RangeControl,{label:"Padding Bottom",value:l,max:500,onChange:function(e){O({paddingBottom:e})}}))),Object(u.createElement)(g.PanelBody,{title:"Colors"},Object(u.createElement)(g.ColorPalette,{title:"backgroundColor",value:i,onChange:function(e){O({backgroundColor:e})}})),Object(u.createElement)(g.PanelBody,{title:"Overlay Color",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.RangeControl,{label:"Overlay Opacity",value:f,max:1,step:.01,onChange:function(e){O({overlayOpacity:e})}})),Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.ColorPalette,{value:p,colors:d,onChange:function(e){O({overlayColor:e})}}),Object(u.createElement)(g.ColorIndicator,{colorValue:p}))))),Object(u.createElement)("div",{style:v(v({zIndex:10},j),{},{minHeight:a,backgroundColor:i,backgroundImage:"url("+y+")",clipPath:n,marginTop:"".concat(-o,"px"),transform:"translateY(".concat(o,"px)"),paddingTop:c,paddingBottom:l}),className:h},Object(u.createElement)("div",{className:"container"},Object(u.createElement)("div",{class:"overlay",style:{backgroundColor:p,opacity:f}}),Object(u.createElement)(s.InnerBlocks,null)))]},save:function(e){var t=e.attributes,n=t.clipPath,r=(t.slantInvert,t.slantHeight),o=t.minHeight,a=t.paddingTop,c=t.paddingBottom,l=t.backgroundColor,i=t.backgroundURL,p=t.overlayColor,d=t.overlayOpacity;return e.className,Object(u.createElement)("div",{style:v(v({zIndex:10},j),{},{position:"relative",minHeight:o,backgroundColor:l,backgroundImage:"url("+i+")",clipPath:n,marginTop:"".concat(-r,"px"),transform:"translateY(".concat(r,"px) translateZ(0)"),paddingTop:a,paddingBottom:c}),className:"alignwide"},Object(u.createElement)("div",{className:"container"},Object(u.createElement)("div",{class:"overlay",style:{backgroundColor:p,opacity:d}}),Object(u.createElement)(s.InnerBlocks.Content,null)))}},E="sprayloc/color-test",w={title:"Color test",description:"a test to understand Color settings inspector control",category:"design",icon:"edit",attributes:{minHeight:{type:"number",default:150},color:{type:"string",default:"hotpink"},colors:{type:"array",default:[{name:"color 1",color:"#ff0000"},{name:"color 2",color:"#00ff00"}]}},edit:function(e){var t=e.attributes,n=t.minHeight,r=t.color,o=t.colors,a=e.setAttributes;return[Object(u.createElement)(s.InspectorControls,null,Object(u.createElement)(g.Panel,{header:"Slanted Controls"},Object(u.createElement)(g.PanelBody,{title:"Misc",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.RangeControl,{label:"Height",value:n,max:500,onChange:function(e){a({minHeight:e})}}))),Object(u.createElement)(g.PanelBody,{title:"Color",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(g.ColorPalette,{value:r,colors:o,onChange:function(e){console.log(r),a({color:e})}}),Object(u.createElement)(g.ColorIndicator,{colorValue:r}))))),Object(u.createElement)("h1",{style:{color:r}},"Color test")]},save:function(e){var t=e.attributes,n=(t.minHeight,t.color);return Object(u.createElement)("h1",{style:{color:n}},"Color test")}},x=(n(26),wp.data.withSelect),C="sprayloc/image-float",P={apiVersion:2,title:"Sprayloc Image Float",description:"Image Float Block",category:"design",icon:"edit",attributes:{mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},mediaID:{type:"string"},backgroundURL:{type:"string"}},edit:x((function(e,t){return{media:t.attributes.mediaID?e("core").getMedia(t.attributes.mediaID):void 0}}))((function(e){var t=e.attributes,n=t.mediaID,r=t.mediaURL,o=(t.backgroundURL,e.setAttributes),a=e.className,c=function(e){console.log(e),o({mediaURL:"",mediaID:void 0,backgroundURL:""})};return[Object(u.createElement)(s.InspectorControls,null,Object(u.createElement)(g.Panel,null,Object(u.createElement)(g.PanelBody,{title:"background",initialOpen:!0},Object(u.createElement)(g.PanelRow,null,Object(u.createElement)(s.MediaUpload,{onSelect:function(t){e.setAttributes({mediaURL:t.url,mediaID:t.id,backgroundURL:t.url})},allowedTypes:"image",value:n,render:function(e){var t=e.open;return Object(u.createElement)("div",null,Object(u.createElement)(g.Button,{className:"button button-large",onClick:t},n?Object(m.__)("Change Image","gutenberg-examples"):Object(m.__)("Upload Image","gutenberg-examples")),n?Object(u.createElement)(g.Button,{className:"button button-alert",onClick:c},"Remove"):"")}}))))),Object(u.createElement)("div",{className:a},Object(u.createElement)("img",{src:r}))]})),save:function(e){var t=e.attributes.mediaURL,n=e.className;return Object(u.createElement)("div",{className:n},Object(u.createElement)("img",{src:t}))}},k=(wp.element.createElement,wp.blocks.registerBlockType,wp.blockEditor.InnerBlocks),R=wp.data,I=(R.useDispatch,R.useSelect,[["sprayloc/slanted-container",{},[["core/heading",{placeholder:"Enter Title",level:1,content:["Title"],align:"right",className:"big-title"}]]],["core/group",{className:"inner-content"},[["core/spacer",{}],["core/heading",{placeholder:"title"}],["core/image",{align:"right",placeholder:""}],["core/paragraph",{placeholder:"Image Details"}]]]]),_="sprayloc/en-avant",B={title:"En-Avant",category:"widgets",supports:{fontSize:!0,align:!0},edit:function(e){return Object(u.createElement)("div",{className:"en-avant"},Object(u.createElement)(k,{template:I,templateLock:!1}))},save:function(e){return Object(u.createElement)("div",{className:"en-avant"},Object(u.createElement)(k.Content,null))}};[r,o,a,c,l].forEach((function(e){var t=e.name,n=e.settings;Object(i.registerBlockType)(t,n)}))}]);