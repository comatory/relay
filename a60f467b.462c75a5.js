(window.webpackJsonp=window.webpackJsonp||[]).push([[698,920],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),h=r,f=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return t?a.a.createElement(f,s(s({ref:n},u),{},{components:t})):a.a.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1143:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=i(t(1146));const o=["internal","external"];let s;try{s=t(1144).usePluginData}catch(p){s=null}function c(e){return l(e),d()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||s&&s("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=l,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1145))},1144:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1145:function(e,n){var t,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,d=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var n=u.length;n;){for(c=u,u=[];++d<n;)c&&c[d].run();d=-1,n=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function b(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new f(e,n)),1!==u.length||l||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1146:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(1147);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,i=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,s),t}))}},1148:function(e,n,t){"use strict";t(61);var r=t(1143),a=t(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var s=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return a.createElement(o,null,a.createElement(c,null),a.createElement(s,null))},l=function(){return a.createElement(o,null,a.createElement(s,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(u,null),external:a.createElement(l,null)})}},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(1142)),o={},s={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"guided-tour/refetching/OssAvoidSuspenseNote",isDocsHomePage:!1,title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/docs/guided-tour/refetching/OssAvoidSuspenseNote.md",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/next/guided-tour/refetching/OssAvoidSuspenseNote",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/refetching/OssAvoidSuspenseNote.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1619714006},c=[],u={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending."))))}l.isMDXComponent=!0},782:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(8),i=(t(0),t(1142)),o=t(1148),s=t(1143),c=t(67),u={id:"refetching-queries-with-different-data",title:"Refetching Queries with Different Data",slug:"/guided-tour/refetching/refetching-queries-with-different-data/",description:"Relay guide to refetching queries with different data",keywords:["refetching","query"]},l={unversionedId:"guided-tour/refetching/refetching-queries-with-different-data",id:"guided-tour/refetching/refetching-queries-with-different-data",isDocsHomePage:!1,title:"Refetching Queries with Different Data",description:"Relay guide to refetching queries with different data",source:"@site/docs/guided-tour/refetching/refetching-queries-with-different-data.md",slug:"/guided-tour/refetching/refetching-queries-with-different-data/",permalink:"/docs/next/guided-tour/refetching/refetching-queries-with-different-data/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/refetching/refetching-queries-with-different-data.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1619714006,sidebar:"docs",previous:{title:"Refreshing Queries",permalink:"/docs/next/guided-tour/refetching/refreshing-queries/"},next:{title:"Refreshing Fragments",permalink:"/docs/next/guided-tour/refetching/refreshing-fragments/"}},d=[{value:"When using <code>useQueryLoader</code> / <code>loadQuery</code>",id:"when-using-usequeryloader--loadquery",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",children:[]}]},{value:"When using <code>useLazyLoadQuery</code>",id:"when-using-uselazyloadquery",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense-1",children:[]}]}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},h=p("FbRefetchingQueriesUsingUseQueryLoader"),f=p("FbAvoidSuspenseCaution"),b=p("FbRefetchingQueriesUsingUseLazyLoadQuery"),y={toc:d};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When referring to ",Object(i.b)("strong",{parentName:"p"},'"refetching a query"'),", we mean fetching the query again for ",Object(i.b)("em",{parentName:"p"},"different")," data than was originally rendered by the query. For example, this might be to change a currently selected item, to render a different list of items than the one being shown, or more generally to transition the currently rendered content to show new or different content."),Object(i.b)("h2",{id:"when-using-usequeryloader--loadquery"},"When using ",Object(i.b)("inlineCode",{parentName:"h2"},"useQueryLoader")," / ",Object(i.b)("inlineCode",{parentName:"h2"},"loadQuery")),Object(i.b)("p",null,"Similarly to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../refreshing-queries/#when-using-usequeryloader--loadquery"}),"Refreshing Queries with ",Object(i.b)("inlineCode",{parentName:"a"},"useQueryLoader")),", we can also use the ",Object(i.b)("inlineCode",{parentName:"p"},"useQueryLoader")," Hook described in our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../rendering/queries/#fetching-queries-for-render"}),"Fetching Queries for Render")," section, but this time passing ",Object(i.b)("em",{parentName:"p"},"different query variables"),":"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(h,{mdxType:"FbRefetchingQueriesUsingUseQueryLoader"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const variables = {id: '4'};\n  const [queryRef, loadQuery] = useQueryLoader<AppQueryType>(\n    AppQuery,\n    props.appQueryRef /* initial query ref */\n  );\n\n  const refetch = useCallback(() => {\n    // Load the query again using the same original variables.\n    // Calling loadQuery will update the value of queryRef.\n    loadQuery({id: 'different-id'});\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        refetch={refetch}\n        queryRef={queryRef}\n      />\n    </React.Suspense>\n  );\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * MainContent.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\n// Renders the preloaded query, given the query reference\nfunction MainContent(props) {\n  const {refetch, queryRef} = props;\n  const data = usePreloadedQuery<AppQueryType>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n          friends {\n            count\n          }\n        }\n      }\n    `,\n    queryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user?.friends?.count}</div>\n      <Button\n        onClick={() => refetch()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We call ",Object(i.b)("inlineCode",{parentName:"li"},"loadQuery")," in the event handler for refetching, so the network request starts immediately, and then pass the ",Object(i.b)("inlineCode",{parentName:"li"},"queryRef")," to ",Object(i.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),", so it renders the updated data."),Object(i.b)("li",{parentName:"ul"},"We are not passing a ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," to ",Object(i.b)("inlineCode",{parentName:"li"},"loadQuery"),", meaning that it will use the default value of ",Object(i.b)("inlineCode",{parentName:"li"},"'store-or-network'"),". We could provide a different policy in order to specify whether to use locally cached data (as we covered in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render"),")."),Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"loadQuery")," will re-render the component and may cause ",Object(i.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," to suspend (as explained in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Loading States with Suspense"),"). This means that we'll need to make sure that there's a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," component, in order to show a fallback loading state."))),Object(i.b)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),Object(i.b)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../api-reference/fetch-query/"}),Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(f,{mdxType:"FbAvoidSuspenseCaution"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)(c.default,{mdxType:"OssAvoidSuspenseNote"})),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const environment = useRelayEnvironment();\n  const [queryRef, loadQuery] = useQueryLoader<AppQueryType>(\n    AppQuery,\n    props.appQueryRef /* initial query ref */\n  );\n  const [isRefetching, setIsRefetching] = useState(false)\n\n  const refetch = useCallback(() => {\n    if (isRefetching) { return; }\n    setIsRefetching(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefetching(false);\n\n          // *After* the query has been fetched, we call\n          // loadQuery again to re-render with a new\n          // queryRef.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          loadQuery({id: 'different-id'}, {fetchPolicy: 'store-only'});\n        }\n        error: () => {\n          setIsRefetching(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        isRefetching={isRefetching}\n        refetch={refetch}\n        queryRef={queryRef}\n      />\n    </React.Suspense>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When refetching, we now keep track of our own ",Object(i.b)("inlineCode",{parentName:"li"},"isRefetching")," loading state, since we are avoiding supending. We can use this state to render a busy spinner or similar loading UI inside the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," component, ",Object(i.b)("em",{parentName:"li"},"without")," hiding the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent"),"."),Object(i.b)("li",{parentName:"ul"},"In the event handler, we first call ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",Object(i.b)("inlineCode",{parentName:"li"},"loadQuery")," so that we obtain an updated ",Object(i.b)("inlineCode",{parentName:"li"},"queryRef")," that we then pass to ",Object(i.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," in order render the updated data, similar to the previous example."),Object(i.b)("li",{parentName:"ul"},"At this point, when ",Object(i.b)("inlineCode",{parentName:"li"},"loadQuery")," is called, the data for the query should already be cached in the local Relay store, so we use ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(i.b)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),Object(i.b)("h2",{id:"when-using-uselazyloadquery"},"When using ",Object(i.b)("inlineCode",{parentName:"h2"},"useLazyLoadQuery")),Object(i.b)("p",null,"Similarly to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../refreshing-queries/#when-using-uselazyloadquery"}),"Refreshing Queries with ",Object(i.b)("inlineCode",{parentName:"a"},"useLazyLoadQuery")),", we can also use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../api-reference/use-lazy-load-query/"}),Object(i.b)("inlineCode",{parentName:"a"},"useLazyLoadQuery"))," Hook described in our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../rendering/queries/#lazily-fetching-queries-during-render"}),"Lazily Fetching Queries during Render")," section, but this time passing ",Object(i.b)("em",{parentName:"p"},"different query variables"),":"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(b,{mdxType:"FbRefetchingQueriesUsingUseLazyLoadQuery"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const [queryArgs, setQueryArgs] = useState({\n    options: {fetchKey: 0},\n    variables: {id: '4'},\n  });\n\n  const refetch = useCallback(() => {\n    // Trigger a re-render of useLazyLoadQuery with new variables,\n    // *and* an updated fetchKey.\n    // The new fetchKey will ensure that the query is fully\n    // re-evaluated and refetched.\n    setQueryArgs(prev => ({\n      options: {\n        fetchKey: (prev?.fetchKey ?? 0) + 1,\n      },\n      variables: {id: 'different-id'}\n    }));\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        refetch={refetch}\n        queryArgs={queryArgs}\n      />\n    </React.Suspense>\n  );\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * MainContent.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\n// Fetches and renders the query, given the fetch options\nfunction MainContent(props) {\n  const {refetch, queryArgs} = props;\n  const data = useLazyLoadQuery<AppQueryType>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n          friends {\n            count\n          }\n        }\n      }\n    `,\n    queryArgs.variables,\n    queryArgs.options,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user.friends?.count}</div>\n      <Button\n        onClick={() => refetch()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We update the component in the event handler for refreshing by setting new query args in state. This will cause the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," component that uses ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," to re-render with the new ",Object(i.b)("inlineCode",{parentName:"li"},"variables")," and  ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey"),", and refetch the query upon rendering."),Object(i.b)("li",{parentName:"ul"},"We are passing a new value of ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," which we increment on every update. Passing a new ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," to ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," on every update will ensure that the query is fully re-evaluated and refetched."),Object(i.b)("li",{parentName:"ul"},"We are not passing a new ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," to ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),", meaning that it will use the default value of ",Object(i.b)("inlineCode",{parentName:"li"},"'store-or-network'"),". We could provide a different policy in order to specify whether to use locally cached data (as we covered in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render"),")."),Object(i.b)("li",{parentName:"ul"},"The state update in ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and may cause the component to suspend (as explained in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Loading States with Suspense"),"). This means that we'll need to make sure that there's a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," component, in order to show a fallback loading state."))),Object(i.b)("h3",{id:"if-you-need-to-avoid-suspense-1"},"If you need to avoid Suspense"),Object(i.b)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../api-reference/fetch-query/"}),Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(f,{mdxType:"FbAvoidSuspenseCaution"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)(c.default,{mdxType:"OssAvoidSuspenseNote"})),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const environment = useRelayEnvironment();\n  const [isRefreshing, setIsRefreshing] = useState(false)\n  const [queryArgs, setQueryArgs] = useState({\n    options: {fetchKey: 0, fetchPolicy: 'store-or-network'},\n    variables: {id: '4'},\n  });\n\n  const refetch = useCallback(() => {\n    if (isRefreshing) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we update\n          // our state to re-render with the new fetchKey\n          // and fetchPolicy.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          setQueryArgs(prev => ({\n            options: {\n              fetchKey: (prev?.fetchKey ?? 0) + 1,\n              fetchPolicy: 'store-only',\n            },\n            variables: {id: 'different-id'}\n          }));\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        isRefetching={isRefetching}\n        refetch={refetch}\n        queryArgs={queryArgs}\n      />\n    </React.Suspense>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When refetching, we now keep track of our own ",Object(i.b)("inlineCode",{parentName:"li"},"isRefetching")," loading state, since we are avoiding supending. We can use this state to render a busy spinner or similar loading UI inside the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," component, ",Object(i.b)("em",{parentName:"li"},"without")," hiding the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent"),"."),Object(i.b)("li",{parentName:"ul"},"In the event handler, we first call ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we update our state so that we re-render an updated ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," and ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," that we then pass to ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," in order render the updated data, similar to the previous example."),Object(i.b)("li",{parentName:"ul"},"At this point, when we update the state, the data for the query should already be cached in the local Relay store, so we use ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(i.b)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);