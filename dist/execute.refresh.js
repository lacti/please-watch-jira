parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qmao":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refresh=exports.alert=exports.addServicedeskWatchers=exports.addWatchers=exports.searchMember=void 0,exports.searchMember="searchMember",exports.addWatchers="addWatchers",exports.addServicedeskWatchers="addServicedeskWatchers",exports.alert="alert",exports.refresh="refresh";
},{}],"h6EI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateContextMenu=void 0,exports.updateContextMenu="updateContextMenu";
},{}],"C1YM":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),t=this&&this.__exportStar||function(t,r){for(var i in t)"default"===i||r.hasOwnProperty(i)||e(r,t,i)};Object.defineProperty(exports,"__esModule",{value:!0}),t(require("./execute"),exports),t(require("./background"),exports);
},{"./execute":"qmao","./background":"h6EI"}],"UEJS":[function(require,module,exports) {
"use strict";function r(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=n(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var o=0,u=function(){};return{s:u,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return a=r.done,r},e:function(r){c=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function e(r,e){return i(r)||u(r,e)||n(r,e)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,e){if(r){if("string"==typeof r)return o(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(r,e):void 0}}function o(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function u(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(c){o=!0,u=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return t}}function i(r){if(Array.isArray(r))return r}function a(r){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function c(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function f(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function l(r,e,t){return e&&f(r.prototype,e),t&&f(r,t),r}function p(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&g(r,e)}function y(r){var e=h();return function(){var t,n=w(r);if(e){var o=w(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)}}function s(r,e){return!e||"object"!==a(e)&&"function"!=typeof e?b(r):e}function b(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function m(r){var e="function"==typeof Map?new Map:void 0;return(m=function(r){if(null===r||!d(r))return r;if("function"!=typeof r)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(r))return e.get(r);e.set(r,t)}function t(){return v(r,arguments,w(this).constructor)}return t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),g(t,r)})(r)}function v(r,e,t){return(v=h()?Reflect.construct:function(r,e,t){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(r,n));return t&&g(o,t.prototype),o}).apply(null,arguments)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(r){return!1}}function d(r){return-1!==Function.toString.call(r).indexOf("[native code]")}function g(r,e){return(g=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function w(r){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}var S=function(r){p(t,m(Error));var e=y(t);function t(r){var n;return c(this,t),n=e.call(this,t._prepareSuperMessage(r)),Object.defineProperty(b(n),"name",{value:"NonError",configurable:!0,writable:!0}),Error.captureStackTrace&&Error.captureStackTrace(b(n),t),n}return l(t,null,[{key:"_prepareSuperMessage",value:function(r){try{return JSON.stringify(r)}catch(e){return String(r)}}}]),t}(),j=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0}],O=function t(n){var o=n.from,u=n.seen,i=n.to_,c=n.forceEnumerable,f=i||(Array.isArray(o)?[]:{});u.push(o);for(var l=0,p=Object.entries(o);l<p.length;l++){var y=e(p[l],2),s=y[0],b=y[1];"function"!=typeof b&&(b&&"object"===a(b)?u.includes(o[s])?f[s]="[Circular]":f[s]=t({from:o[s],seen:u.slice(),forceEnumerable:c}):f[s]=b)}var m,v=r(j);try{for(v.s();!(m=v.n()).done;){var h=m.value,d=h.property,g=h.enumerable;"string"==typeof o[d]&&Object.defineProperty(f,d,{value:o[d],enumerable:!!c||g,configurable:!0,writable:!0})}}catch(w){v.e(w)}finally{v.f()}return f},E=function(r){return"object"===a(r)&&null!==r?O({from:r,seen:[],forceEnumerable:!0}):"function"==typeof r?"[Function: ".concat(r.name||"anonymous","]"):r},A=function(r){if(r instanceof Error)return r;if("object"===a(r)&&null!==r&&!Array.isArray(r)){var e=new Error;return O({from:r,seen:[],to_:e}),e}return new S(r)};module.exports={serializeError:E,deserializeError:A};
},{}],"UJHr":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var n,o,a=t.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)u.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return u},e=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e};function t(r){var t=(void 0===r?{}:r).level,o=void 0===t?"debug":t;function a(r){return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];n(r)>=n(o)&&console[r].apply(console,e([(new Date).toISOString(),r.toUpperCase()],t))}}return{trace:a("trace"),debug:a("debug"),info:a("info"),warn:a("warn"),error:a("error")}}function n(r){switch(r){case"trace":return 0;case"debug":return 10;case"info":return 20;case"warn":return 30;case"error":return 40}return 99}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"btZR":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,a)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function n(n,r){return e(this,void 0,void 0,function(){return t(this,function(e){return[2,new Promise(function(e){return chrome.tabs.executeScript(n,r,e)})]})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"kbLt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.urlAlphabet=void 0;let e="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";exports.urlAlphabet=e;
},{}],"ya15":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"urlAlphabet",{enumerable:!0,get:function(){return r.urlAlphabet}}),exports.random=exports.customRandom=exports.customAlphabet=exports.nanoid=void 0;var r=require("./url-alphabet/index.js");var t=function(r){return crypto.getRandomValues(new Uint8Array(r))};exports.random=t;var e=function(r,t,e){var n=(2<<Math.log(r.length-1)/Math.LN2)-1,o=-~(1.6*n*t/r.length);return function(){for(var a="";;)for(var u=e(o),p=o;p--;)if((a+=r[u[p]&n]||"").length===+t)return a}};exports.customRandom=e;var n=function(r,n){return e(r,n,t)};exports.customAlphabet=n;var o=function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(r));r--;){var n=63&e[r];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t};exports.nanoid=o;
},{"./url-alphabet/index.js":"kbLt"}],"qT6Y":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,a=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i},t=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};function e(r){var e=!1;return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(!e)return e=!0,r.apply(void 0,t(n))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"nD5C":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,a)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function n(n){return e(this,void 0,void 0,function(){return t(this,function(e){return[2,new Promise(function(e){return chrome.tabs.query(n,e)})]})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"dfZ4":[function(require,module,exports) {
"use strict";function e(){var e,r;return{promise:new Promise(function(t,o){e=t,r=o}),resolve:e,reject:r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"TOnL":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{c(n.next(e))}catch(t){i(t)}}function a(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(u,a)}c((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},r=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u},n=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("serialize-error"),u=o(require("../logger/useLogger")),a=o(require("../chrome/executeScript")),c=require("nanoid"),s=o(require("./once")),l=o(require("../chrome/queryTabs")),d=o(require("./usePromise"));function f(r){var o=(void 0===r?{}:r).logger,f=void 0===o?u.default():o;var h={};var v=s.default(function(){var r=this;chrome.runtime.onMessage.addListener(function(n){return e(r,void 0,void 0,function(){var e,r,o,u;return t(this,function(t){return r=(e=n).executionId,o=e.result,u=e.error,f.debug("Listen from execution",n),r&&r in h&&(void 0!==u?h[r].reject(i.deserializeError(u)):h[r].resolve(o),delete h[r]),[2]})})})});return{serve:function(r,o){return e(this,void 0,void 0,function(){var e,u,a;return t(this,function(t){switch(t.label){case 0:e=JSON.parse(_executionContext),f.debug(_executionId,"Call delegate",r,"with",e),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,o.apply(void 0,n(e))];case 2:return u=t.sent(),f.debug(_executionId,r,u),chrome.runtime.sendMessage({executionId:_executionId,result:u}),[3,4];case 3:return a=t.sent(),f.debug(_executionId,r,a),chrome.runtime.sendMessage({executionId:_executionId,error:i.serializeError(a)}),[3,4];case 4:return[2]}})})},stub:function(r){return v(),function(){for(var n,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return e(this,void 0,void 0,function(){var e,i,u,s,v,b;return t(this,function(t){switch(t.label){case 0:return[4,l.default({active:!0,currentWindow:!0})];case 1:return e=null===(n=t.sent()[0])||void 0===n?void 0:n.id,i=c.nanoid(),f.debug("Run query on tab",e,"with",i),u=d.default(),s=u.promise,v=u.resolve,b=u.reject,h[i]={resolve:v,reject:b},f.debug({tabId:e,thisExecutionId:i},"Setup context"),[4,a.default(e,{code:'var _executionId = "'+i+'"; var _executionContext = '+JSON.stringify(JSON.stringify(o))+"; console.log(_executionId, _executionContext);"})];case 2:return t.sent(),f.debug({tabId:e,thisExecutionId:i,functionName:r,args:o},"Run function"),[4,a.default(e,{file:"execute."+r+".js"})];case 3:return t.sent(),[2,s]}})})}}}}exports.default=f;
},{"serialize-error":"UEJS","../logger/useLogger":"UJHr","../chrome/executeScript":"btZR","nanoid":"ya15","./once":"qT6Y","../chrome/queryTabs":"nD5C","./usePromise":"dfZ4"}],"DfLQ":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var r={};if(null!=n)for(var o in n)"default"!==o&&Object.hasOwnProperty.call(n,o)&&e(r,n,o);return t(r,n),r},r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var u=n(require("./rpc-types")),a=i(require("chrome-extension-support/lib/rpc/useExecutionRPC"));a.default().serve(u.refresh,function(e){var t=e.confirm,n=void 0!==t&&t;return r(void 0,void 0,Promise,function(){return o(this,function(e){return n?window.confirm("Do you want to refresh this page?")&&window.location.reload():window.location.reload(),[2]})})});
},{"./rpc-types":"C1YM","chrome-extension-support/lib/rpc/useExecutionRPC":"TOnL"}]},{},["DfLQ"], null)
//# sourceMappingURL=execute.refresh.js.map