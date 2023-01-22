(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ca(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function w(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.oa=b.prototype}
function ta(){this.H=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.s=0;this.X=this.j=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.N=function(a){this.i=a};
function xa(a,b){a.j={fc:b,pc:!0};a.h=a.s||a.v}
ta.prototype.return=function(a){this.j={return:a};this.h=this.v};
function x(a,b,c){a.h=c;return{value:b}}
ta.prototype.D=function(a){this.h=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.v=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.fc;a.j=null;return b}
function Ca(a){a.X=[a.j];a.s=0;a.v=0}
function Da(a){var b=a.X.splice(0)[0];(b=a.j=a.j||b)?b.pc?a.h=a.s||a.v:void 0!=b.D&&a.v<b.D?(a.h=b.D,a.j=null):a.h=a.v:a.h=0}
function Ea(a){this.h=new ta;this.i=a}
function Fa(a,b){ua(a.h);var c=a.h.m;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.m=null,xa(a.h,g),Ia(a)}a.h.m=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.pc)throw b.fc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){ua(a.h);a.h.m?b=Ha(a,a.h.m.next,b,a.h.N):(a.h.N(b),b=Ia(a));return b};
this.throw=function(b){ua(a.h);a.h.m?b=Ha(a,a.h.m["throw"],b,a.h.N):(xa(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ka(new Ja(new Ea(a)))}
function La(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Jb),reject:g(this.v)}};
b.prototype.Jb=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Gc(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ib(g):this.s(g)}};
b.prototype.Ib=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.Hc(h,g):this.s(g)};
b.prototype.v=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Kb();this.X()};
b.prototype.Kb=function(){var g=this;e(function(){if(g.Fa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.Fa=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.X=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Gc=function(g){var h=this.m();g.ub(h.resolve,h.reject)};
b.prototype.Hc=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(z){m(z)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.ub(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ub=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ub(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(z){r[v]=z;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).ub(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ja(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
t("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Oa(a){return a?a:Array.prototype.fill}
t("Int8Array.prototype.fill",Oa);t("Uint8Array.prototype.fill",Oa);t("Uint8ClampedArray.prototype.fill",Oa);t("Int16Array.prototype.fill",Oa);t("Uint16Array.prototype.fill",Oa);t("Int32Array.prototype.fill",Oa);t("Uint32Array.prototype.fill",Oa);t("Float32Array.prototype.fill",Oa);t("Float64Array.prototype.fill",Oa);t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Za=Xa:Za=Ya;return Za.apply(null,arguments)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.oa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ld=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
E(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a){return Array.prototype.concat.apply([],arguments)}
function jb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=qb(a[c]);return b}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;function ub(){}
function vb(a){return new ub(wb,a)}
var wb={};vb("");var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a,b){this.h=b===Gb?a:""}
Fb.prototype.toString=function(){return this.h.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);function Ib(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=Ib().indexOf(a)}
;function Jb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Pb={};function Qb(a){this.h=Pb===Pb?a:""}
Qb.prototype.toString=function(){return this.h.toString()};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){return a?decodeURI(a):a}
function Tb(a){return Sb(a.match(Rb)[3]||null)}
function Ub(a){var b=a.match(Rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a,b){var c=a.search(Xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Zb(a){A.setTimeout(function(){throw a;},0)}
;function $b(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function ac(a){ac[" "](a);return a}
ac[" "]=function(){};var bc=G("Opera"),cc=G("Trident")||G("MSIE"),dc=G("Edge"),ec=G("Gecko")&&!(-1!=Ib().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),fc=-1!=Ib().toLowerCase().indexOf("webkit")&&!G("Edge");function gc(){var a=A.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",jc=function(){var a=Ib();if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(cc){var kc=gc();if(null!=kc&&kc>parseFloat(ic)){hc=String(kc);break a}}hc=ic}var lc=hc,mc;if(A.document&&cc){var rc=gc();mc=rc?rc:parseInt(lc,10)||void 0}else mc=void 0;var sc=mc;var tc=$b()||G("iPod"),uc=G("iPad");!G("Android")||Jb();Jb();var vc=G("Safari")&&!(Jb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!($b()||G("iPad")||G("iPod"));var wc={},xc=null;function yc(a,b){Qa(a);void 0===b&&(b=0);zc();b=wc[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ac(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Bc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Bc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=xc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
zc();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function zc(){if(!xc){xc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));wc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===xc[f]&&(xc[f]=e)}}}}
;var Cc="undefined"!==typeof Uint8Array;function Dc(a){return Cc&&null!=a&&a instanceof Uint8Array}
var Ec={};var Fc;function Gc(){if(Ec!==Ec)throw Error("illegal external caller");}
function Hc(a){Gc();this.ob=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Hc.prototype.Ab=function(){return null==this.ob};
Hc.prototype.sizeBytes=function(){Gc();var a=this.ob;null==a||Dc(a)||("string"===typeof a?a=Ac(a):(Pa(a),a=null));return(a=null==a?a:this.ob=a)?a.length:0};var Ic="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Jc(a,b){if(Ic)return a[Ic]|=b;if(void 0!==a.la)return a.la|=b;Object.defineProperties(a,{la:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Kc(a,b){Ic?a[Ic]&&(a[Ic]&=~b):void 0!==a.la&&(a.la&=~b)}
function H(a){var b;Ic?b=a[Ic]:b=a.la;return null==b?0:b}
function Lc(a,b){Ic?a[Ic]=b:void 0!==a.la?a.la=b:Object.defineProperties(a,{la:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Mc(a){Jc(a,1);return a}
function Nc(a){return!!(H(a)&2)}
function Oc(a){Jc(a,16);return a}
function Pc(a,b){Lc(b,(a|0)&-51)}
function Qc(a,b){Lc(b,(a|18)&-41)}
;var Rc={};function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc,Wc=[];Lc(Wc,23);Vc=Object.freeze(Wc);function Xc(a){if(Nc(a.I))throw Error("Cannot mutate an immutable Message");}
function Yc(a){var b=a.length;(b=b?a[b-1]:void 0)&&Tc(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;var Zc;function $c(a){return a.displayName||a.name||"unknown type name"}
function ad(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+$c(b)+" but got "+(a&&$c(a.constructor)));return a}
;function bd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(H(a)&128))return a=Array.prototype.slice.call(a),Yc(a),a}else{if(Dc(a))return yc(a);if(a instanceof Hc){var b=a.ob;return null==b?"":"string"===typeof b?b:a.ob=yc(b)}}}return a}
;function cd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=dd(a,b,c,void 0!==d);else if(Tc(a)){var e={},f;for(f in a)e[f]=cd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function dd(a,b,c,d){var e=H(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=cd(a[f],b,c,d);c(e,a);return a}
function ed(a){return a.Cb===Rc?a.toJSON():bd(a)}
function fd(a){if(!a)return a;if("object"===typeof a){if(Dc(a))return new Uint8Array(a);if(a.Cb===Rc)return a.clone()}return a}
function gd(a,b){a&128&&Yc(b)}
;function hd(a){var b=a.i+a.Ha;return a.ca||(a.ca=a.I[b]={})}
function id(a,b,c){return-1===b?null:b>=a.i?a.ca?a.ca[b]:void 0:c&&a.ca&&(c=a.ca[b],null!=c)?c:a.I[b+a.Ha]}
function I(a,b,c,d){Xc(a);return jd(a,b,c,d)}
function jd(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return hd(a)[b]=c,a;a.I[b+a.Ha]=c;(c=a.ca)&&b in c&&delete c[b];return a}
function nd(a,b){a&&Nc(b.I)&&Nc(a.I);return a}
function od(a,b,c,d,e){var f=id(a,b,d);Array.isArray(f)||(f=Vc);var g=H(f);g&1||Mc(f);if(e)g&2||Jc(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Kc(f,16):(f=Mc(Array.prototype.slice.call(f)),jd(a,b,f,d))}return f}
function pd(a,b,c,d){Xc(a);(c=qd(a,c))&&c!==b&&null!=d&&jd(a,c,void 0,!1);jd(a,b,d)}
function qd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&jd(a,c,void 0,!1),c=e)}return c}
function rd(a,b,c){var d=void 0===d?!1:d;var e=id(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Cb!==Rc?f?new b(e):void 0:e;g!==e&&null!=g&&(jd(a,c,g,d),Jc(g.I,H(a.I)&18));b=nd(g,a);if(null==b)return b;Nc(a.I)||(e=sd(b),e!==b&&(b=e,jd(a,c,b,d)));return nd(b,a)}
function td(a,b,c,d,e,f){a.h||(a.h={});var g=a.h[c],h=od(a,c,3,d,f);if(!g){var k=h;g=[];var l=!!(H(a.I)&16);h=Nc(k);var m=k;!f&&h&&(k=Array.prototype.slice.call(k));for(var n=h,r=0;r<k.length;r++){var p=k[r];var v=b,z=!1;z=void 0===z?!1:z;p=Array.isArray(p)?new v(p):z?new v:void 0;if(void 0!==p){v=p.I;var D=z=H(v);h&&(D|=2);l&&(D|=16);D!=z&&Lc(v,D);v=D;n=n||!!(2&v);g.push(p)}}a.h[c]=g;b=k;k=!n;l=H(b);n=l|33;n=k?n|8:n&-9;l!=n&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Lc(b,n));k=b;m!==
k&&jd(a,c,k,d);(f||e&&h)&&Jc(g,2);e&&Object.freeze(g);return g}d=g;f||(Object.isFrozen(d)?e||(g=Array.prototype.slice.call(g),a.h[c]=g):e&&Object.freeze(d));return g}
function J(a,b,c,d){Xc(a);null!=d?ad(d,b):d=void 0;return jd(a,c,d)}
function ud(a,b,c,d,e){Xc(a);null!=e?ad(e,b):e=void 0;pd(a,c,d,e)}
function vd(a,b,c,d,e){Xc(a);var f=null==d?Vc:Mc([]);if(null!=d){for(var g=!1,h=0;h<d.length;h++){var k=d[h];ad(k,b);g=g||Nc(k.I);f[h]=k.I}b=f;g=(g?0:8)|1;f=H(b);(f&g)!==g&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Lc(b,f|g));f=b;a.h||(a.h={});a.h[c]=d}else a.h&&(a.h[c]=void 0);return jd(a,c,f,e)}
function wd(a,b,c,d){Xc(a);var e=td(a,c,b,void 0,!1,!1);c=null!=d?ad(d,c):new c;a=od(a,b,2,void 0,!1);e.push(c);a.push(c.I);Nc(c.I)&&Kc(a,8)}
function xd(a,b){return id(a,b)}
function yd(a,b){a=id(a,b);return null==a?"":a}
;function zd(a,b,c){c=void 0===c?Qc:c;if(null!=a){if(Cc&&a instanceof Uint8Array)return a.length?new Hc(new Uint8Array(a)):Fc||(Fc=new Hc(null));if(Array.isArray(a)){var d=H(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Lc(a,d|2),a;a=dd(a,zd,d&4?Qc:c,!0);b=H(a);b&4&&b&2&&Object.freeze(a);return a}return a.Cb===Rc?Ad(a):a}}
function Bd(a,b,c,d,e,f,g){(a=a.h&&a.h[c])?(d=0<a.length?a[0].constructor:void 0,f=H(a),f&2||(a=fb(a,Ad),Qc(f,a),Object.freeze(a)),vd(b,d,c,a,e)):I(b,c,zd(d,f,g),e)}
function Ad(a){if(Nc(a.I))return a;a=Cd(a,!0);Jc(a.I,2);return a}
function Cd(a,b){var c=a.I,d=Oc([]),e=a.constructor.h;e&&d.push(e);e=a.ca;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(H(c)&128)&&Yc(d);b=b||Nc(a.I)?Qc:Pc;var g=a.constructor;H(d);Zc=d;d=new g(d);Zc=void 0;a.hb&&(d.hb=a.hb.slice());g=!!(H(c)&16);for(var h=e?c.length-1:c.length,k=0;k<h;k++)Bd(a,d,k-a.Ha,c[k],!1,g,b);if(e)for(var l in e)c=e[l],h=+l,Number.isNaN(h)?f[h]=c:Bd(a,d,h,c,!0,g,b);return d}
;function K(a,b,c){null==a&&(a=Zc);Zc=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=!0;Lc(a,48)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var k=Jc(a,0),l=k;if(h=0!==(16&l))(g=0!==(32&l))||(l|=32);if(e)if(128&l)d=0;else{if(0<a.length){var m=a[a.length-1];if(Tc(m)&&"g"in m){d=0;l|=128;delete m.g;var n=!0,r;for(r in m){n=!1;break}n&&a.pop()}}}else if(128&l)throw Error();k!==l&&Lc(a,l)}this.Ha=(f?0:-1)-d;this.h=void 0;this.I=
a;a:{f=this.I.length;d=f-1;if(f&&(f=this.I[d],Tc(f))){this.ca=f;this.i=d-this.Ha;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.Ha),this.ca=void 0):this.i=Number.MAX_VALUE}if(!e&&this.ca&&"g"in this.ca)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;e=this.i;var p;for(h=0;h<c.length;h++)g=c[h],g<e?(g+=this.Ha,(d=a[g])?Dd(d,b):a[g]=Vc):(p||(p=hd(this)),(d=p[g])?Dd(d,b):p[g]=Vc)}}
K.prototype.toJSON=function(){var a=this.I,b;Uc?b=a:b=dd(a,ed,gd);return b};
function Ed(a){Uc=!0;try{return JSON.stringify(a.toJSON(),Fd)}finally{Uc=!1}}
K.prototype.clone=function(){var a=dd(this.I,fd,Pc);Oc(a);Zc=a;a=new this.constructor(a);Zc=void 0;Gd(a,this);return a};
function sd(a){if(Nc(a.I)){var b=Cd(a,!1);b.j=a;a=b}return a}
function Dd(a,b){if(Array.isArray(a)){var c=H(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Lc(a,c|d)}}
K.prototype.Cb=Rc;K.prototype.toString=function(){return this.I.toString()};
function Fd(a,b){return bd(b)}
function Gd(a,b){b.hb&&(a.hb=b.hb.slice());var c=b.h;if(c){b=b.ca;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=Nc(h.I);k=td(h,k,g,f,l,l);f=od(h,g,3,f,l);if(!(l||H(f)&8)){for(l=0;l<k.length;l++)g=k[l],h=sd(g),g!==h&&(k[l]=h,f[l]=h.I);Jc(f,8)}for(l=0;l<Math.min(k.length,e.length);l++)Gd(k[l],e[l])}}else throw Error("unexpected object: type: "+Pa(e)+": "+e);}}}}
;var Hd=window;vb("csi.gstatic.com");vb("googleads.g.doubleclick.net");vb("partner.googleadservices.com");vb("pubads.g.doubleclick.net");vb("securepubads.g.doubleclick.net");vb("tpc.googlesyndication.com");function Id(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=Id.prototype;q.clone=function(){return new Id(this.x,this.y)};
q.equals=function(a){return a instanceof Id&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Jd(a,b){this.width=a;this.height=b}
q=Jd.prototype;q.clone=function(){return new Jd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.Ab=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Kd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Md(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Nd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Od[c])c=Od[c];else{c=String(c);if(!Od[c]){var f=/function\s+([^\(]+)/m.exec(c);Od[c]=f?f[1]:"[Anonymous]"}c=Od[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Nd(a,b){b||(b={});b[Pd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Pd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Nd(a,b));return c}
function Pd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Od={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Qd;try{new URL("s://g"),Qd=!0}catch(a){Qd=!1}var Rd=Qd;function Sd(a,b){a.removeAttribute("srcdoc");if(b instanceof Fb)b instanceof Fb&&b.constructor===Fb?b=b.h:(Pa(b),b="type_error:SafeUrl");else{b:if(Rd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Td(a){this.cd=a}
function Ud(a){return new Td(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Vd=[Ud("data"),Ud("http"),Ud("https"),Ud("mailto"),Ud("ftp"),new Td(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Wd(a,b){b=void 0===b?Vd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Td&&d.cd(a))return new Fb(a,Gb)}}
function Xd(a){var b=void 0===b?Vd:b;return Wd(a,b)||Hb}
;function Yd(a){var b=Zd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function $d(){var a=[];Yd(function(b){a.push(b)});
return a}
var Zd={sd:"allow-forms",td:"allow-modals",ud:"allow-orientation-lock",vd:"allow-pointer-lock",wd:"allow-popups",xd:"allow-popups-to-escape-sandbox",yd:"allow-presentation",zd:"allow-same-origin",Ad:"allow-scripts",Bd:"allow-top-navigation",Cd:"allow-top-navigation-by-user-activation"},ae=db(function(){return $d()});
function be(){var a=ce(),b={};F(ae(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ce(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var de=(new Date).getTime();function ee(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var fe="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka(fe);function ge(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],z=e[2],D=e[3],M=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var S=D^v&(z^D);var O=1518500249}else S=v^z^D,O=1859775393;else 60>p?(S=v&z|D&(v|z),O=2400959708):(S=v^z^D,O=3395469782);S=((n<<5|n>>>27)&4294967295)+S+M+O+r[p]&4294967295;M=D;D=z;z=(v<<30|v>>>2)&4294967295;v=n;n=S}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+M&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,z=n.length;v<z;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Mc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function he(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,ie(ee(d),a,c||null)].join(" "):null}
function ie(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),je(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=je(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function je(a){var b=ge();b.update(a);return b.Mc().toLowerCase()}
;var ke={};function le(a){this.h=a||{cookie:""}}
q=le.prototype;q.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.Ab())return!0;this.set("TESTCOOKIESENABLED","1",{Pb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Td;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Pb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Pb:0,path:b,domain:c});return d};
q.Ab=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var me=new le("undefined"==typeof document?null:document);function ne(a){return!!ke.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function oe(a,b,c,d){(a=A[a])||(a=(new le(document)).get(b));return a?he(a,c,d):null}
function pe(a){var b=void 0===b?!1:b;var c=ee(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;ne(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new le(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ne(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new le(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?he(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ne(b)&&((b=oe("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=oe("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var qe="undefined"!==typeof TextEncoder?new TextEncoder:null,re=qe?function(a){return qe.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function se(){this.j=this.j;this.v=this.v}
se.prototype.j=!1;se.prototype.dispose=function(){this.j||(this.j=!0,this.Ra())};
se.prototype.Ra=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function te(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
te.prototype.stopPropagation=function(){this.j=!0};
te.prototype.preventDefault=function(){this.defaultPrevented=!0};var ue=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ve(a,b){te.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(ve,te);var we={2:"touch",3:"pen",4:"mouse"};
ve.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ec){a:{try{ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:we[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ve.oa.preventDefault.call(this)};
ve.prototype.stopPropagation=function(){ve.oa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ve.prototype.preventDefault=function(){ve.oa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xe="closure_listenable_"+(1E6*Math.random()|0);var Ae=0;function Be(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.yb=e;this.key=++Ae;this.lb=this.tb=!1}
function Ce(a){a.lb=!0;a.listener=null;a.proxy=null;a.src=null;a.yb=null}
;function De(a){this.src=a;this.listeners={};this.h=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.tb=!1)):(b=new Be(b,this.src,f,!!d,e),b.tb=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.lb&&f.listener==b&&f.capture==!!c&&f.yb==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[xe]?a.Ja(b,c,Ra(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new De(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ue||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[xe]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Le(c),a&&a[xe])?a.h.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.lb){var b=a.src;if(b&&b[xe])Fe(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.h&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.lb)a=!0;else{b=new ve(b,this);var c=a.listener,d=a.yb||a.src;a.tb&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){se.call(this);this.h=new De(this);this.Fa=this;this.N=null}
E(Ue,se);Ue.prototype[xe]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.N;if(c){var d=[];for(var e=1;c;c=c.N)d.push(c),++e}a=a.Fa;c=b.type||b;"string"===typeof b?b=new te(b,a):b instanceof te?b.target=b.target||a:(e=b,b=new te(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=We(g,c,!0,b)&&e}b.j||(g=b.h=a,e=We(g,c,!0,b)&&e,b.j||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.Ra=function(){Ue.oa.Ra.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.h--}}this.N=null};
Ue.prototype.Ja=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function We(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.lb&&g.capture==c){var h=g.listener,k=g.yb||g.src;g.tb&&Fe(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Xe(a){Ue.call(this);var b=this;this.X=this.m=0;this.ha=null!=a?a:{ja:function(e,f){return setTimeout(e,f)},
Pa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return y(function(e){return x(e,Ye(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.X||Ze(this)}
w(Xe,Ue);function $e(){var a=af;Xe.h||(Xe.h=new Xe(a));return Xe.h}
Xe.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.ha.Pa(this.X);delete Xe.h};
Xe.prototype.da=function(){return this.i};
function Ze(a){a.X=a.ha.ja(function(){var b;return y(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.D(3):x(c,Ye(a),3):x(c,Ye(a),3);Ze(a);c.h=0})},3E4)}
function Ye(a,b){return a.H?a.H:a.H=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.m=a.ha.ja(function(){d.abort()},b||2E4)),x(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.H=void 0;a.m&&(a.ha.Pa(a.m),a.m=0);g!==a.i&&(a.i=g,a.i?Ve(a,"networkstatus-online"):Ve(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.D(3)}})})}
;function bf(){this.data_=[];this.h=-1}
bf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
bf.prototype.get=function(a){return!!this.data_[a]};
function cf(a){-1===a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function df(a){K.call(this,a,-1,ef)}
w(df,K);function ff(a,b){return I(a,2,b)}
function gf(a,b){return I(a,3,b)}
function hf(a,b){return I(a,4,b)}
function jf(a,b){return I(a,5,b)}
function kf(a,b){return I(a,9,b)}
function lf(a,b){return vd(a,mf,10,b)}
function nf(a,b){return I(a,11,b)}
function of(a,b){return I(a,1,b)}
function pf(a,b){return I(a,7,b)}
function mf(a){K.call(this,a)}
w(mf,K);var ef=[10,6];var qf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function rf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function sf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function tf(){var a=window;if(!sf(a))return null;var b=rf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(qf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function uf(a){var b;return nf(lf(jf(ff(of(hf(pf(kf(gf(new df,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new mf;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function vf(){var a,b;return null!=(b=null==(a=tf())?void 0:a.then(function(c){return uf(c)}))?b:null}
;function wf(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
wf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function xf(a,b){a.m(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var yf;function zf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Kd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cc;c.cc=null;e()}};
return function(e){d.next={cc:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Af(){this.i=this.h=null}
Af.prototype.add=function(a,b){var c=Bf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Af.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Bf=new wf(function(){return new Cf},function(a){return a.reset()});
function Cf(){this.next=this.scope=this.h=null}
Cf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Cf.prototype.reset=function(){this.next=this.scope=this.h=null};var Df,Ef=!1,Ff=new Af;function Gf(a,b){Df||Hf();Ef||(Df(),Ef=!0);Ff.add(a,b)}
function Hf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Df=function(){a.then(If)}}else Df=function(){var b=If;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!G("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(yf||(yf=zf()),yf(b)):A.setImmediate(b)}}
function If(){for(var a;a=Ff.remove();){try{a.h.call(a.scope)}catch(b){Zb(b)}xf(Bf,a)}Ef=!1}
;function Jf(a,b){this.h=a[A.Symbol.iterator]();this.i=b}
Jf.prototype[Symbol.iterator]=function(){return this};
Jf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Kf(a,b){return new Jf(a,b)}
;function Lf(){this.blockSize=-1}
;function Mf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
E(Mf,Lf);Mf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function Nf(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Mf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Nf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Nf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Nf(this,e);f=0;break}}this.i=f;this.m+=b}};
Mf.prototype.digest=function(){var a=[],b=8*this.m;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Nf(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Of(){}
Of.prototype.next=function(){return Pf};
var Pf={done:!0,value:void 0};function Qf(a){return{value:a,done:!1}}
Of.prototype.ia=function(){return this};function Rf(a){if(a instanceof Sf||a instanceof Tf||a instanceof Uf)return a;if("function"==typeof a.next)return new Sf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Sf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new Sf(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function Sf(a){this.i=a}
Sf.prototype.ia=function(){return new Tf(this.i())};
Sf.prototype[Symbol.iterator]=function(){return new Uf(this.i())};
Sf.prototype.h=function(){return new Uf(this.i())};
function Tf(a){this.i=a}
w(Tf,Of);Tf.prototype.next=function(){return this.i.next()};
Tf.prototype[Symbol.iterator]=function(){return new Uf(this.i)};
Tf.prototype.h=function(){return new Uf(this.i)};
function Uf(a){Sf.call(this,function(){return a});
this.j=a}
w(Uf,Sf);Uf.prototype.next=function(){return this.j.next()};function Vf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vf)for(c=Wf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Wf(a){Xf(a);return a.h.concat()}
q=Vf.prototype;q.has=function(a){return Yf(this.i,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Zf;Xf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Zf(a,b){return a===b}
q.Ab=function(){return 0==this.size};
q.clear=function(){this.i={};this.j=this.size=this.h.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Yf(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Xf(this),!0):!1};
function Xf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Yf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Yf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Yf(this.i,a)?this.i[a]:b};
q.set=function(a,b){Yf(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Wf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Vf(this)};
q.keys=function(){return Rf(this.ia(!0)).h()};
q.values=function(){return Rf(this.ia(!1)).h()};
q.entries=function(){var a=this;return Kf(this.keys(),function(b){return[b,a.get(b)]})};
q.ia=function(a){Xf(this);var b=0,c=this.j,d=this,e=new Of;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Pf;var f=d.h[b++];return Qf(a?f:d.i[f])};
return e};
function Yf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var $f=A.JSON.stringify;function ag(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function bg(a){this.h=0;this.H=void 0;this.m=this.i=this.j=null;this.v=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){cg(b,2,c)},function(c){cg(b,3,c)})}catch(c){cg(this,3,c)}}
function dg(){this.next=this.context=this.i=this.j=this.h=null;this.m=!1}
dg.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.m=!1};
var eg=new wf(function(){return new dg},function(a){a.reset()});
function fg(a,b,c){var d=eg.get();d.j=a;d.i=b;d.context=c;return d}
bg.prototype.then=function(a,b,c){return gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
bg.prototype.$goog_Thenable=!0;bg.prototype.cancel=function(a){if(0==this.h){var b=new hg(a);Gf(function(){ig(this,b)},this)}};
function ig(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.m||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ig(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):jg(c),kg(c,e,3,b)))}a.j=null}else cg(a,3,b)}
function lg(a,b){a.i||2!=a.h&&3!=a.h||mg(a);a.m?a.m.next=b:a.i=b;a.m=b}
function gg(a,b,c,d){var e=fg(null,null,null);e.h=new bg(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof hg?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;lg(a,e);return e.h}
bg.prototype.X=function(a){this.h=0;cg(this,2,a)};
bg.prototype.Fa=function(a){this.h=0;cg(this,3,a)};
function cg(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.X,f=a.Fa;if(d instanceof bg){lg(d,fg(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){ng(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,mg(a),3!=b||c instanceof hg||og(a,c))}}
function ng(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function mg(a){a.s||(a.s=!0,Gf(a.N,a))}
function jg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
bg.prototype.N=function(){for(var a;a=jg(this);)kg(this,a,this.h,this.H);this.s=!1};
function kg(a,b,c,d){if(3==c&&b.i&&!b.m)for(;a&&a.v;a=a.j)a.v=!1;if(b.h)b.h.j=null,pg(b,c,d);else try{b.m?b.j.call(b.context):pg(b,c,d)}catch(e){qg.call(null,e)}xf(eg,b)}
function pg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function og(a,b){a.v=!0;Gf(function(){a.v&&qg.call(null,b)})}
var qg=Zb;function hg(a){ab.call(this,a)}
E(hg,ab);hg.prototype.name="cancel";function L(a){se.call(this);this.H=1;this.m=[];this.s=0;this.h=[];this.i={};this.N=!!a}
E(L,se);q=L.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
function rg(a,b,c){var d=sg;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.nb(a)}}
q.nb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.m.push(a),this.h[a+1]=function(){}):(c&&hb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.Za=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.N)for(e=0;e<c.length;e++){var g=c[e];tg(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.nb(c)}}return 0!=e}return!1};
function tg(a,b,c){Gf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.nb,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Ra=function(){L.oa.Ra.call(this);this.clear();this.m.length=0};function ug(a){this.h=a}
ug.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,$f(b))};
ug.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ug.prototype.remove=function(a){this.h.remove(a)};function vg(a){this.h=a}
E(vg,ug);function wg(a){this.data=a}
function xg(a){return void 0===a||a instanceof wg?a:new wg(a)}
vg.prototype.set=function(a,b){vg.oa.set.call(this,a,xg(b))};
vg.prototype.i=function(a){a=vg.oa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yg(a){this.h=a}
E(yg,vg);yg.prototype.set=function(a,b,c){if(b=xg(b)){if(c){if(c<Date.now()){yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}yg.oa.set.call(this,a,b)};
yg.prototype.i=function(a){var b=yg.oa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())yg.prototype.remove.call(this,a);else return b}};function zg(){}
;function Ag(){}
E(Ag,zg);Ag.prototype[Symbol.iterator]=function(){return Rf(this.ia(!0)).h()};
Ag.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Bg(a){this.h=a}
E(Bg,Ag);q=Bg.prototype;q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.ia=function(a){var b=0,c=this.h,d=new Of;d.next=function(){if(b>=c.length)return Pf;var e=c.key(b++);if(a)return Qf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Qf(e)};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function Cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
E(Cg,Bg);function Dg(a,b){this.i=a;this.h=null;var c;if(c=cc)c=!(9<=Number(sc));if(c){Eg||(Eg=new Vf);this.h=Eg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Eg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
E(Dg,Ag);var Fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Eg=null;function Gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Fg[b]})}
q=Dg.prototype;q.set=function(a,b){this.h.setAttribute(Gg(a),b);Hg(this)};
q.get=function(a){a=this.h.getAttribute(Gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(Gg(a));Hg(this)};
q.ia=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Of;d.next=function(){if(b>=c.length)return Pf;var e=c[b++];if(a)return Qf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Qf(e)};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hg(this)};
function Hg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ig(a,b){this.i=a;this.h=b+"::"}
E(Ig,Ag);Ig.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ig.prototype.get=function(a){return this.i.get(this.h+a)};
Ig.prototype.remove=function(a){this.i.remove(this.h+a)};
Ig.prototype.ia=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Of;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Qf(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},fh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Vb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var gh={Oa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},hh={Oa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hc:function(a){return[].concat.apply([],a)}};
N.md=function(){fh?(N.Ga=Uint8Array,N.pa=Uint16Array,N.Fc=Int32Array,N.assign(N,gh)):(N.Ga=Array,N.pa=Array,N.Fc=Array,N.assign(N,hh))};
N.md();var ih=!0;try{new Uint8Array(1)}catch(a){ih=!1}for(var jh=new N.Ga(256),kh=0;256>kh;kh++)jh[kh]=252<=kh?6:248<=kh?5:240<=kh?4:224<=kh?3:192<=kh?2:1;jh[254]=jh[254]=1;
function lh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Ga(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var mh={};mh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var nh={},oh,ph=[],qh=0;256>qh;qh++){oh=qh;for(var rh=0;8>rh;rh++)oh=oh&1?3988292384^oh>>>1:oh>>>1;ph[qh]=oh}nh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^ph[(a^b[d])&255];return a^-1};var sh={};sh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function th(a){for(var b=a.length;0<=--b;)a[b]=0}
var uh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],vh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],yh=Array(576);th(yh);var zh=Array(60);th(zh);var Ah=Array(512);th(Ah);var Bh=Array(256);th(Bh);var Ch=Array(29);th(Ch);var Dh=Array(30);th(Dh);function Eh(a,b,c,d,e){this.Ac=a;this.Rc=b;this.Qc=c;this.Nc=d;this.gd=e;this.kc=a&&a.length}
var Fh,Gh,Hh;function Ih(a,b){this.ec=a;this.Wa=0;this.Ba=b}
function Jh(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function P(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Jh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Kh(a,b,c){P(a,c[2*b],c[2*b+1])}
function Lh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Mh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Lh(d[e]++,e))}
function Nh(a){var b;for(b=0;286>b;b++)a.Y[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.Y[512]=1;a.va=a.ab=0;a.ea=a.matches=0}
function Oh(a){8<a.P?Jh(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function Ph(a,b,c){Oh(a);Jh(a,c);Jh(a,~c);N.Oa(a.L,a.window,b,c,a.pending);a.pending+=c}
function Qh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Rh(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.ta;){e<a.ta&&Qh(b,a.M[e+1],a.M[e],a.depth)&&e++;if(Qh(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function Sh(a,b,c){var d=0;if(0!==a.ea){do{var e=a.L[a.eb+2*d]<<8|a.L[a.eb+2*d+1];var f=a.L[a.Ob+d];d++;if(0===e)Kh(a,f,b);else{var g=Bh[f];Kh(a,g+256+1,b);var h=uh[g];0!==h&&(f-=Ch[g],P(a,f,h));e--;g=256>e?Ah[e]:Ah[256+(e>>>7)];Kh(a,g,c);h=vh[g];0!==h&&(e-=Dh[g],P(a,e,h))}}while(d<a.ea)}Kh(a,256,b)}
function Th(a,b){var c=b.ec,d=b.Ba.Ac,e=b.Ba.kc,f=b.Ba.Nc,g,h=-1;a.ta=0;a.Ta=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.ta]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.ta;){var k=a.M[++a.ta]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.va--;e&&(a.ab-=d[2*k+1])}b.Wa=h;for(g=a.ta>>1;1<=g;g--)Rh(a,c,g);k=f;do g=a.M[1],a.M[1]=a.M[a.ta--],Rh(a,c,1),d=a.M[1],a.M[--a.Ta]=g,a.M[--a.Ta]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.M[1]=k++,Rh(a,c,1);while(2<=a.ta);a.M[--a.Ta]=
a.M[1];g=b.ec;k=b.Wa;d=b.Ba.Ac;e=b.Ba.kc;f=b.Ba.Rc;var l=b.Ba.Qc,m=b.Ba.gd,n,r=0;for(n=0;15>=n;n++)a.qa[n]=0;g[2*a.M[a.Ta]+1]=0;for(b=a.Ta+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.qa[n]++;var v=0;p>=l&&(v=f[p-l]);var z=g[2*p];a.va+=z*(n+v);e&&(a.ab+=z*(d[2*p+1]+v))}}if(0!==r){do{for(n=m-1;0===a.qa[n];)n--;a.qa[n]--;a.qa[n+1]+=2;a.qa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.qa[n];0!==p;)d=a.M[--b],d>k||(g[2*d+1]!==n&&(a.va+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Mh(c,h,a.qa)}
function Uh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Vh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Kh(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(Kh(a,l,a.S),g--),Kh(a,16,a.S),P(a,g-3,2)):10>=g?(Kh(a,17,a.S),P(a,g-3,3)):(Kh(a,18,a.S),P(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Wh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Y[2*c])return 0;if(0!==a.Y[18]||0!==a.Y[20]||0!==a.Y[26])return 1;for(c=32;256>c;c++)if(0!==a.Y[2*c])return 1;return 0}
var Xh=!1;function Yh(a,b,c){a.L[a.eb+2*a.ea]=b>>>8&255;a.L[a.eb+2*a.ea+1]=b&255;a.L[a.Ob+a.ea]=c&255;a.ea++;0===b?a.Y[2*c]++:(a.matches++,b--,a.Y[2*(Bh[c]+256+1)]++,a.Ia[2*(256>b?Ah[b]:Ah[256+(b>>>7)])]++);return a.ea===a.ib-1}
;function Zh(a,b){a.msg=sh[b];return b}
function $h(a){for(var b=a.length;0<=--b;)a[b]=0}
function ai(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Oa(a.jb,b.L,b.kb,c,a.Xa),a.Xa+=c,b.kb+=c,a.Wb+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.kb=0))}
function Q(a,b){var c=0<=a.aa?a.aa:-1,d=a.l-a.aa,e=0;if(0<a.level){2===a.B.Lb&&(a.B.Lb=Wh(a));Th(a,a.Bb);Th(a,a.wb);Uh(a,a.Y,a.Bb.Wa);Uh(a,a.Ia,a.wb.Wa);Th(a,a.Zb);for(e=18;3<=e&&0===a.S[2*xh[e]+1];e--);a.va+=3*(e+1)+14;var f=a.va+3+7>>>3;var g=a.ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)P(a,b?1:0,3),Ph(a,c,d);else if(4===a.strategy||g===f)P(a,2+(b?1:0),3),Sh(a,yh,zh);else{P(a,4+(b?1:0),3);c=a.Bb.Wa+1;d=a.wb.Wa+1;e+=1;P(a,c-257,5);P(a,d-1,5);P(a,e-4,4);for(f=0;f<e;f++)P(a,a.S[2*xh[f]+
1],3);Vh(a,a.Y,c-1);Vh(a,a.Ia,d-1);Sh(a,a.Y,a.Ia)}Nh(a);b&&Oh(a);a.aa=a.l;ai(a.B)}
function T(a,b){a.L[a.pending++]=b}
function bi(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function ci(a,b){var c=a.qc,d=a.l,e=a.ba,f=a.tc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ca,l=a.na,m=a.l+258,n=h[d+e-1],r=h[d+e];a.ba>=a.jc&&(c>>=2);f>a.o&&(f=a.o);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Va=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.o?e:a.o}
function di(a){var b=a.T,c;do{var d=a.Dc-a.o-a.l;if(a.l>=b+(b-262)){N.Oa(a.window,a.window,b,b,0);a.Va-=b;a.l-=b;a.aa-=b;var e=c=a.zb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.na[--e],a.na[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.B.U)break;e=a.B;c=a.window;f=a.l+a.o;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Oa(c,e.input,e.Ma,g,f),1===e.state.wrap?e.A=mh(e.A,c,g,f):2===e.state.wrap&&(e.A=nh(e.A,c,g,f)),e.Ma+=g,e.Na+=g,c=g);a.o+=c;if(3<=a.o+a.Z)for(d=a.l-a.Z,a.C=a.window[d],a.C=
(a.C<<a.sa^a.window[d+1])&a.ra;a.Z&&!(a.C=(a.C<<a.sa^a.window[d+3-1])&a.ra,a.na[d&a.Ca]=a.head[a.C],a.head[a.C]=d,d++,a.Z--,3>a.o+a.Z););}while(262>a.o&&0!==a.B.U)}
function ei(a,b){for(var c;;){if(262>a.o){di(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,c=a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=ci(a,c));if(3<=a.G)if(c=Yh(a,a.l-a.Va,a.G-3),a.o-=a.G,a.G<=a.Qb&&3<=a.o){a.G--;do a.l++,a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.C=a.window[a.l],a.C=(a.C<<a.sa^a.window[a.l+1])&a.ra;else c=Yh(a,0,a.window[a.l]),
a.o--,a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function fi(a,b){for(var c,d;;){if(262>a.o){di(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,c=a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l);a.ba=a.G;a.vc=a.Va;a.G=2;0!==c&&a.ba<a.Qb&&a.l-c<=a.T-262&&(a.G=ci(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Va)&&(a.G=2));if(3<=a.ba&&a.G<=a.ba){d=a.l+a.o-3;c=Yh(a,a.l-1-a.vc,a.ba-3);a.o-=a.ba-1;a.ba-=2;do++a.l<=d&&(a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l);while(0!==
--a.ba);a.Ka=0;a.G=2;a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}else if(a.Ka){if((c=Yh(a,0,a.window[a.l-1]))&&Q(a,!1),a.l++,a.o--,0===a.B.F)return 1}else a.Ka=1,a.l++,a.o--}a.Ka&&(Yh(a,0,a.window[a.l-1]),a.Ka=0);a.Z=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function gi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.o){di(a);if(258>=a.o&&0===b)return 1;if(0===a.o)break}a.G=0;if(3<=a.o&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.o&&(a.G=a.o)}3<=a.G?(c=Yh(a,1,a.G-3),a.o-=a.G,a.l+=a.G,a.G=0):(c=Yh(a,0,a.window[a.l]),a.o--,a.l++);if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&
(Q(a,!1),0===a.B.F)?1:2}
function hi(a,b){for(var c;;){if(0===a.o&&(di(a),0===a.o)){if(0===b)return 1;break}a.G=0;c=Yh(a,0,a.window[a.l]);a.o--;a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function ii(a,b,c,d,e){this.Uc=a;this.fd=b;this.jd=c;this.ed=d;this.Sc=e}
var ji;ji=[new ii(0,0,0,0,function(a,b){var c=65535;for(c>a.fa-5&&(c=a.fa-5);;){if(1>=a.o){di(a);if(0===a.o&&0===b)return 1;if(0===a.o)break}a.l+=a.o;a.o=0;var d=a.aa+c;if(0===a.l||a.l>=d)if(a.o=a.l-d,a.l=d,Q(a,!1),0===a.B.F)return 1;if(a.l-a.aa>=a.T-262&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;if(4===b)return Q(a,!0),0===a.B.F?3:4;a.l>a.aa&&Q(a,!1);return 1}),
new ii(4,4,8,4,ei),new ii(4,5,16,8,ei),new ii(4,6,32,32,ei),new ii(4,4,16,16,fi),new ii(8,16,32,32,fi),new ii(8,16,128,128,fi),new ii(8,32,128,256,fi),new ii(32,128,258,1024,fi),new ii(32,258,258,4096,fi)];
function ki(){this.B=null;this.status=0;this.L=null;this.wrap=this.pending=this.kb=this.fa=0;this.u=null;this.ga=0;this.method=8;this.Ua=-1;this.Ca=this.Xb=this.T=0;this.window=null;this.Dc=0;this.head=this.na=null;this.tc=this.jc=this.strategy=this.level=this.Qb=this.qc=this.ba=this.o=this.Va=this.l=this.Ka=this.vc=this.G=this.aa=this.sa=this.ra=this.Mb=this.zb=this.C=0;this.Y=new N.pa(1146);this.Ia=new N.pa(122);this.S=new N.pa(78);$h(this.Y);$h(this.Ia);$h(this.S);this.Zb=this.wb=this.Bb=null;
this.qa=new N.pa(16);this.M=new N.pa(573);$h(this.M);this.Ta=this.ta=0;this.depth=new N.pa(573);$h(this.depth);this.P=this.V=this.Z=this.matches=this.ab=this.va=this.eb=this.ea=this.ib=this.Ob=0}
function li(a,b){if(!a||!a.state||5<b||0>b)return a?Zh(a,-2):-2;var c=a.state;if(!a.jb||!a.input&&0!==a.U||666===c.status&&4!==b)return Zh(a,0===a.F?-5:-2);c.B=a;var d=c.Ua;c.Ua=b;if(42===c.status)if(2===c.wrap)a.A=0,T(c,31),T(c,139),T(c,8),c.u?(T(c,(c.u.text?1:0)+(c.u.za?2:0)+(c.u.ya?4:0)+(c.u.name?8:0)+(c.u.comment?16:0)),T(c,c.u.time&255),T(c,c.u.time>>8&255),T(c,c.u.time>>16&255),T(c,c.u.time>>24&255),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,c.u.Rd&255),c.u.ya&&c.u.ya.length&&(T(c,
c.u.ya.length&255),T(c,c.u.ya.length>>8&255)),c.u.za&&(a.A=nh(a.A,c.L,c.pending,0)),c.ga=0,c.status=69):(T(c,0),T(c,0),T(c,0),T(c,0),T(c,0),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,3),c.status=113);else{var e=8+(c.Xb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;bi(c,e+(31-e%31));0!==c.l&&(bi(c,a.A>>>16),bi(c,a.A&65535));a.A=1}if(69===c.status)if(c.u.ya){for(e=c.pending;c.ga<(c.u.ya.length&65535)&&(c.pending!==c.fa||(c.u.za&&c.pending>
e&&(a.A=nh(a.A,c.L,c.pending-e,e)),ai(a),e=c.pending,c.pending!==c.fa));)T(c,c.u.ya[c.ga]&255),c.ga++;c.u.za&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e));c.ga===c.u.ya.length&&(c.ga=0,c.status=73)}else c.status=73;if(73===c.status)if(c.u.name){e=c.pending;do{if(c.pending===c.fa&&(c.u.za&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e)),ai(a),e=c.pending,c.pending===c.fa)){var f=1;break}f=c.ga<c.u.name.length?c.u.name.charCodeAt(c.ga++)&255:0;T(c,f)}while(0!==f);c.u.za&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-
e,e));0===f&&(c.ga=0,c.status=91)}else c.status=91;if(91===c.status)if(c.u.comment){e=c.pending;do{if(c.pending===c.fa&&(c.u.za&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e)),ai(a),e=c.pending,c.pending===c.fa)){f=1;break}f=c.ga<c.u.comment.length?c.u.comment.charCodeAt(c.ga++)&255:0;T(c,f)}while(0!==f);c.u.za&&c.pending>e&&(a.A=nh(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.u.za?(c.pending+2>c.fa&&ai(a),c.pending+2<=c.fa&&(T(c,a.A&255),T(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(ai(a),0===a.F)return c.Ua=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Zh(a,-5);if(666===c.status&&0!==a.U)return Zh(a,-5);if(0!==a.U||0!==c.o||0!==b&&666!==c.status){d=2===c.strategy?hi(c,b):3===c.strategy?gi(c,b):ji[c.level].Sc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ua=-1),0;if(2===d&&(1===b?(P(c,2,3),Kh(c,256,yh),16===c.P?(Jh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=c.V&255,c.V>>=8,c.P-=
8)):5!==b&&(P(c,0,3),Ph(c,0,0),3===b&&($h(c.head),0===c.o&&(c.l=0,c.aa=0,c.Z=0))),ai(a),0===a.F))return c.Ua=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(T(c,a.A&255),T(c,a.A>>8&255),T(c,a.A>>16&255),T(c,a.A>>24&255),T(c,a.Na&255),T(c,a.Na>>8&255),T(c,a.Na>>16&255),T(c,a.Na>>24&255)):(bi(c,a.A>>>16),bi(c,a.A&65535));ai(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var mi={};mi=function(){this.input=null;this.Na=this.U=this.Ma=0;this.jb=null;this.Wb=this.F=this.Xa=0;this.msg="";this.state=null;this.Lb=2;this.A=0};var ni=Object.prototype.toString;
function oi(a){if(!(this instanceof oi))return new oi(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Da:15,hd:8,strategy:0,Cc:""},a||{});a.raw&&0<a.Da?a.Da=-a.Da:a.Vc&&0<a.Da&&16>a.Da&&(a.Da+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.B=new mi;this.B.F=0;var b=this.B;var c=a.level,d=a.method,e=a.Da,f=a.hd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Zh(b,-2);else{8===e&&(e=9);var k=new ki;
b.state=k;k.B=b;k.wrap=h;k.u=null;k.Xb=e;k.T=1<<k.Xb;k.Ca=k.T-1;k.Mb=f+7;k.zb=1<<k.Mb;k.ra=k.zb-1;k.sa=~~((k.Mb+3-1)/3);k.window=new N.Ga(2*k.T);k.head=new N.pa(k.zb);k.na=new N.pa(k.T);k.ib=1<<f+6;k.fa=4*k.ib;k.L=new N.Ga(k.fa);k.eb=1*k.ib;k.Ob=3*k.ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Na=b.Wb=0;b.Lb=2;c=b.state;c.pending=0;c.kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ua=0;if(!Xh){d=Array(16);for(f=g=0;28>f;f++)for(Ch[f]=g,e=0;e<1<<uh[f];e++)Bh[g++]=
f;Bh[g-1]=f;for(f=g=0;16>f;f++)for(Dh[f]=g,e=0;e<1<<vh[f];e++)Ah[g++]=f;for(g>>=7;30>f;f++)for(Dh[f]=g<<7,e=0;e<1<<vh[f]-7;e++)Ah[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)yh[2*e+1]=8,e++,d[8]++;for(;255>=e;)yh[2*e+1]=9,e++,d[9]++;for(;279>=e;)yh[2*e+1]=7,e++,d[7]++;for(;287>=e;)yh[2*e+1]=8,e++,d[8]++;Mh(yh,287,d);for(e=0;30>e;e++)zh[2*e+1]=5,zh[2*e]=Lh(e,5);Fh=new Eh(yh,uh,257,286,15);Gh=new Eh(zh,vh,0,30,15);Hh=new Eh([],wh,0,19,7);Xh=!0}c.Bb=new Ih(c.Y,Fh);c.wb=new Ih(c.Ia,Gh);c.Zb=new Ih(c.S,
Hh);c.V=0;c.P=0;Nh(c);c=0}else c=Zh(b,-2);0===c&&(b=b.state,b.Dc=2*b.T,$h(b.head),b.Qb=ji[b.level].fd,b.jc=ji[b.level].Uc,b.tc=ji[b.level].jd,b.qc=ji[b.level].ed,b.l=0,b.aa=0,b.o=0,b.Z=0,b.G=b.ba=2,b.Ka=0,b.C=0);b=c}}else b=-2;if(0!==b)throw Error(sh[b]);a.header&&(b=this.B)&&b.state&&2===b.state.wrap&&(b.state.u=a.header);if(a.fb){var l;"string"===typeof a.fb?l=lh(a.fb):"[object ArrayBuffer]"===ni.call(a.fb)?l=new Uint8Array(a.fb):l=a.fb;a=this.B;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.o)b=-2;else{1===b&&(a.A=mh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&($h(l.head),l.l=0,l.aa=0,l.Z=0),c=new N.Ga(l.T),N.Oa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Ma;e=a.input;a.U=g;a.Ma=0;a.input=f;for(di(l);3<=l.o;){f=l.l;g=l.o-2;do l.C=(l.C<<l.sa^l.window[f+3-1])&l.ra,l.na[f&l.Ca]=l.head[l.C],l.head[l.C]=f,f++;while(--g);l.l=f;l.o=2;di(l)}l.l+=l.o;l.aa=l.l;l.Z=l.o;l.o=0;l.G=l.ba=2;l.Ka=0;a.Ma=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(sh[b]);this.Id=!0}}
oi.prototype.push=function(a,b){var c=this.B,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=lh(a):"[object ArrayBuffer]"===ni.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ma=0;c.U=c.input.length;do{0===c.F&&(c.jb=new N.Ga(d),c.Xa=0,c.F=d);a=li(c,e);if(1!==a&&0!==a)return pi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Cc){var f=N.Vb(c.jb,c.Xa);b=f;f=f.length;if(65537>f&&(b.subarray&&ih||!b.subarray))b=
String.fromCharCode.apply(null,N.Vb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Vb(c.jb,c.Xa),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.B)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Zh(c,-2):(c.state=null,a=113===d?Zh(c,-3):0)):a=-2,pi(this,a),this.ended=!0,0===a;2===e&&(pi(this,0),c.F=0);return!0};
function pi(a,b){0===b&&(a.result="string"===a.options.Cc?a.chunks.join(""):N.hc(a.chunks));a.chunks=[];a.err=b;a.msg=a.B.msg}
;function qi(a){this.name=a}
;var ri=new qi("rawColdConfigGroup");var si=new qi("rawHotConfigGroup");function ti(a){K.call(this,a)}
w(ti,K);ti.prototype.getKey=function(){return id(this,1)};
ti.prototype.ka=function(){return xd(this,2===qd(this,ui)?2:-1)};
var ui=[2,3,4,5,6];function vi(a){K.call(this,a)}
w(vi,K);function wi(a){K.call(this,a)}
w(wi,K);function xi(a){K.call(this,a,-1,yi)}
w(xi,K);var yi=[2];function zi(a){K.call(this,a,-1,Ai)}
w(zi,K);zi.prototype.getPlayerType=function(){return id(this,36)};
zi.prototype.setHomeGroupInfo=function(a){return J(this,xi,81,a)};
var Ai=[9,66,24,32,86,100,101];function Bi(a){K.call(this,a,-1,Ci)}
w(Bi,K);var Ci=[15,26,28];function Di(a){K.call(this,a,-1,Ei)}
w(Di,K);var Ei=[5];function Fi(a){K.call(this,a)}
w(Fi,K);function Gi(a){K.call(this,a,-1,Hi)}
w(Gi,K);Gi.prototype.setSafetyMode=function(a){return I(this,5,a)};
var Hi=[12];function Ii(a){K.call(this,a,-1,Ji)}
w(Ii,K);var Ji=[12];var Ki={Hd:"WEB_DISPLAY_MODE_UNKNOWN",Dd:"WEB_DISPLAY_MODE_BROWSER",Fd:"WEB_DISPLAY_MODE_MINIMAL_UI",Gd:"WEB_DISPLAY_MODE_STANDALONE",Ed:"WEB_DISPLAY_MODE_FULLSCREEN"};function Li(a){K.call(this,a,-1,Mi)}
w(Li,K);function Ni(a){K.call(this,a)}
w(Ni,K);Ni.prototype.getKey=function(){return yd(this,1)};
Ni.prototype.ka=function(){return yd(this,2)};
var Mi=[4,5];function Oi(a){K.call(this,a)}
w(Oi,K);function Pi(a){K.call(this,a)}
w(Pi,K);var Qi=[2,3,4];function Ri(a){K.call(this,a)}
w(Ri,K);function Si(a){K.call(this,a)}
w(Si,K);function Ti(a){K.call(this,a)}
w(Ti,K);function Ui(a){K.call(this,a,-1,Vi)}
w(Ui,K);var Vi=[10,17];function Wi(a){K.call(this,a)}
w(Wi,K);function Xi(a){K.call(this,a)}
w(Xi,K);function Yi(a){K.call(this,a)}
w(Yi,K);function Zi(a){K.call(this,a,459)}
w(Zi,K);
var $i=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];function aj(a){K.call(this,a)}
w(aj,K);function bj(a){K.call(this,a)}
w(bj,K);bj.prototype.getPlaylistId=function(){return xd(this,2===qd(this,cj)?2:-1)};
var cj=[1,2];function dj(a){K.call(this,a,-1,ej)}
w(dj,K);var ej=[3];var fj=A.window,gj,hj,ij=(null==fj?void 0:null==(gj=fj.yt)?void 0:gj.config_)||(null==fj?void 0:null==(hj=fj.ytcfg)?void 0:hj.data_)||{};B("yt.config_",ij);function jj(){var a=arguments;1<a.length?ij[a[0]]=a[1]:1===a.length&&Object.assign(ij,a[0])}
function V(a,b){return a in ij?ij[a]:b}
function kj(){return V("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function lj(){var a=ij.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var mj=[];function nj(a){mj.forEach(function(b){return b(a)})}
function oj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pj(b)}}:a}
function pj(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=V("ERRORS",[]),e.push([a,"ERROR",b,c,d]),jj("ERRORS",e));nj(a)}
function qj(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=V("ERRORS",[]),e.push([a,"WARNING",b,c,d]),jj("ERRORS",e))}
;function W(a){a=rj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function sj(a,b){a=rj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function rj(a){var b=V("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:V("EXPERIMENT_FLAGS",{})[a]}
function tj(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var uj=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++uj});var vj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function wj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in vj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function xj(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
wj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
wj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
wj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=A.ytEventsEventsListeners||{};B("ytEventsEventsListeners",ob);var yj=A.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",yj);
function zj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Aj(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
var Bj=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=zj(a,b,c,d);if(e)return e;e=++yj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new wj(h);if(!Ld(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new wj(h);
h.currentTarget=a;return c.call(a,h)};
g=oj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
;function Dj(a,b){"function"===typeof a&&(a=oj(a));return window.setTimeout(a,b)}
function Ej(a,b){"function"===typeof a&&(a=oj(a));return window.setInterval(a,b)}
;var Fj=/^[\w.]*$/,Gj={q:!0,search_query:!0};function Hj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ij(f[0]||""),h=Ij(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Hj);k.args=[{key:l,value:f[1],query:a,method:Jj==m?"unchanged":m}];Gj.hasOwnProperty(l)||qj(k)}}return c}
var Jj=String(Hj);function Kj(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Lj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Hj(a,"&")}
function Mj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Lj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Nj(a){if(!b)var b=window.location.href;var c=a.match(Rb)[1]||null,d=Tb(a);c&&d?(a=a.match(Rb),b=b.match(Rb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Tb(b)==d&&(Number(b.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;return a}
function Ij(a){return a&&a.match(Fj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Oj(a){var b=Pj;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=de;e.flash="0";a:{try{var f=b.h.top.location.href}catch(aa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Hd:g;try{var h=g.history.length}catch(aa){h=0}e.u_his=h;var k;e.u_h=null==(k=Hd.screen)?void 0:k.height;var l;e.u_w=null==(l=Hd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Hd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Hd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Hd.screen)?void 0:r.colorDepth}catch(aa){}h=b.h;try{var p=h.screenX;var v=h.screenY}catch(aa){}try{var z=h.outerWidth;var D=h.outerHeight}catch(aa){}try{var M=h.innerWidth;var S=h.innerHeight}catch(aa){}try{var O=h.screenLeft;var va=h.screenTop}catch(aa){}try{M=h.innerWidth,S=h.innerHeight}catch(aa){}try{var Sc=h.screen.availWidth;var Ga=h.screen.availTop}catch(aa){}p=[O,va,p,v,Sc,Ga,z,D,M,S];v=b.h.top;try{var wa=(v||window).document,ba=
"CSS1Compat"==wa.compatMode?wa.documentElement:wa.body;var ha=(new Jd(ba.clientWidth,ba.clientHeight)).round()}catch(aa){ha=new Jd(-12245933,-12245933)}wa=ha;ha={};var ia=void 0===ia?A:ia;ba=new bf;ia.SVGElement&&ia.document.createElementNS&&ba.set(0);v=be();v["allow-top-navigation-by-user-activation"]&&ba.set(1);v["allow-popups-to-escape-sandbox"]&&ba.set(2);ia.crypto&&ia.crypto.subtle&&ba.set(3);ia.TextDecoder&&ia.TextEncoder&&ba.set(4);ia=cf(ba);ha.bc=ia;ha.bih=wa.height;ha.biw=wa.width;ha.brdim=
p.join();b=b.i;b=(ha.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ha.wgl=!!Hd.WebGLRenderingContext,ha);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Pj=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Kj(Oj(a))});Date.now();var Qj="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Rj(){if(!Qj)return null;var a=Qj();return"open"in a?a:null}
;var Sj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Tj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(fe)),Uj=!1;
function Vj(a,b){b=void 0===b?{}:b;var c=Nj(a),d=W("web_ajax_ignore_global_headers_if_set"),e;for(e in Sj){var f=V(Sj[e]);"X-Goog-Visitor-Id"!==e||f||(f=V("VISITOR_DATA"));!f||!c&&Tb(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Tb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&Tb(a)||(b["X-YouTube-Ad-Signals"]=Kj(Oj()));return b}
function Wj(a){var b=window.location.search,c=Tb(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Nj(a)&&(c=document.location.hostname);var d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Lj(b),f={};F(Tj,function(g){e[g]&&(f[g]=e[g])});
return Mj(a,f||{},!1)}
function Xj(a,b){var c=b.format||"JSON";a=Yj(a,b);var d=Zj(a,b),e=!1,f=ak(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=bk(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Dj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}return f}
function Yj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Mj(a,b||{},!0);return a}
function Zj(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Tb(a)&&!b.withCredentials&&Tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Lj(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Wb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Uj&&a&&"POST"!=b.method&&(Uj=!0,pj(Error("AJAX request with postData should use POST")));return e}
function bk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,qj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ck(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=dk(g)})}d&&ek(e);
return e}
function ek(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===tb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){A.console&&A.console.error(g.message)}tb=e}else tb=e}d=(e=tb)?e.createHTML(d):d;a[c]=new Qb(d)}else ek(a[b])}}
function ck(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function dk(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function fk(a,b){b.method="POST";b.postParams||(b.postParams={});return Xj(a,b)}
function ak(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&oj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Rj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;W("debug_forward_web_query_parameters")&&(a=Wj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Vj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var gk=tc||uc;var hk=[{Rb:function(a){return"Cannot read property '"+a.key+"'"},
Db:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Rb:function(a){return"Cannot call '"+a.key+"'"},
Db:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Rb:function(a){return a.key+" is not defined"},
Db:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var jk={Aa:[],xa:[{Kc:ik,weight:500}]};function ik(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function kk(){this.xa=[];this.Aa=[]}
var lk;function mk(){if(!lk){var a=lk=new kk;a.Aa.length=0;a.xa.length=0;jk.Aa&&a.Aa.push.apply(a.Aa,jk.Aa);jk.xa&&a.xa.push.apply(a.xa,jk.xa)}return lk}
;var nk=new L;function ok(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=pk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=pk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=pk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function pk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function qk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=rk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=ok(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?rk(e+".ve",f,g,h):0;d+=g;d+=rk(e,a[e],b,c);if(500<d)break}}else c[b]=sk(a),d+=c[b].length;else c[b]=sk(a),d+=c[b].length;return d}
function rk(a,b,c,d){c+="."+a;a=sk(b);d[c]=a;return c.length+a.length}
function sk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function tk(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var uk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},vk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},wk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},xk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function yk(){var a=A.navigator;return a?a.connection:void 0}
;function zk(){}
function Ak(a,b){return Bk(a,0,b)}
zk.prototype.ja=function(a,b){return Bk(a,1,b)};function Ck(){zk.apply(this,arguments)}
w(Ck,zk);function Dk(){Ck.h||(Ck.h=new Ck);return Ck.h}
function Bk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Dj(a,c||0)}
Ck.prototype.Pa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Ck.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var af=Dk();function Ek(a){var b=La.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
w(Ek,Error);function Fk(){try{return Gk(),!0}catch(a){return!1}}
function Gk(){if(void 0!==V("DATASYNC_ID"))return V("DATASYNC_ID");throw new Ek("Datasync ID not set","unknown");}
;function Hk(a){var b=new Cg;if(b.h)try{b.h.setItem("__sak","1");b.h.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Ig(b,a):b:null)||(a=new Dg(a||"UserDataSharedStore"),b=a.h?a:null);this.h=(a=b)?new yg(a):null;this.i=document.domain||window.location.hostname}
Hk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape($f(b))}catch(f){return}else e=escape(b);b=this.i;me.set(""+a,e,{Pb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Hk.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=me.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Hk.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;me.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ik=function(){var a;return function(){a||(a=new Hk("ytidb"));return a}}();
function Jk(){var a;return null==(a=Ik())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Kk=[],Lk=!1;function Mk(a){Lk||(Kk.push({type:"ERROR",payload:a}),10<Kk.length&&Kk.shift())}
function Nk(a,b){Lk||(Kk.push({type:"EVENT",eventType:a,payload:b}),10<Kk.length&&Kk.shift())}
;function Ok(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Pk(a){return a.substr(0,a.indexOf(":"))||a}
;var Qk={},Rk=(Qk.AUTH_INVALID="No user identifier specified.",Qk.EXPLICIT_ABORT="Transaction was explicitly aborted.",Qk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Qk.MISSING_INDEX="Index not created.",Qk.MISSING_OBJECT_STORES="Object stores not created.",Qk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Qk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Qk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Qk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Qk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Qk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Qk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Qk),Sk={},Tk=(Sk.AUTH_INVALID="ERROR",Sk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Sk.EXPLICIT_ABORT="IGNORED",Sk.IDB_NOT_SUPPORTED="ERROR",Sk.MISSING_INDEX=
"WARNING",Sk.MISSING_OBJECT_STORES="ERROR",Sk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Sk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Sk.QUOTA_EXCEEDED="WARNING",Sk.QUOTA_MAYBE_EXCEEDED="WARNING",Sk.UNKNOWN_ABORT="WARNING",Sk.INCOMPATIBLE_DB_VERSION="WARNING",Sk),Uk={},Vk=(Uk.AUTH_INVALID=!1,Uk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Uk.EXPLICIT_ABORT=!1,Uk.IDB_NOT_SUPPORTED=!1,Uk.MISSING_INDEX=!1,Uk.MISSING_OBJECT_STORES=!1,Uk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Uk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Uk.QUOTA_EXCEEDED=!1,Uk.QUOTA_MAYBE_EXCEEDED=!0,Uk.UNKNOWN_ABORT=!0,Uk.INCOMPATIBLE_DB_VERSION=!1,Uk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Rk[a]:c;d=void 0===d?Tk[a]:d;e=void 0===e?Vk[a]:e;Ek.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,X.prototype)}
w(X,Ek);function Wk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Rk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Wk.prototype)}
w(Wk,X);function Xk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Xk.prototype)}
w(Xk,Error);var Yk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Zk(a,b,c,d){b=Pk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(vc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Xk)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Yk.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Qd:e.name})];e.level="WARNING";return e}
function $k(a,b,c){var d=Jk();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function al(a){if(!a)throw Error();throw a;}
function bl(a){return a}
function cl(a){this.h=a}
function dl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
dl.resolve=function(a){return new dl(new cl(function(b,c){a instanceof dl?a.then(b,c):b(a)}))};
dl.reject=function(a){return new dl(new cl(function(b,c){c(a)}))};
dl.prototype.then=function(a,b){var c=this,d=null!=a?a:bl,e=null!=b?b:al;return new dl(new cl(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){el(c,c,d,f,g)}),c.i.push(function(){fl(c,c,e,f,g)})):"FULFILLED"===c.state.status?el(c,c,d,f,g):"REJECTED"===c.state.status&&fl(c,c,e,f,g)}))};
function gl(a,b){a.then(void 0,b)}
function el(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof dl?hl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof dl?hl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof dl?hl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function il(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jl(a){return new Promise(function(b,c){il(a,b,c)})}
function Yl(a){return new dl(new cl(function(b,c){il(a,b,c)}))}
;function Zl(a,b){return new dl(new cl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var $l=window,Y=$l.ytcsi&&$l.ytcsi.now?$l.ytcsi.now:$l.performance&&$l.performance.timing&&$l.performance.now&&$l.performance.timing.navigationStart?function(){return $l.performance.timing.navigationStart+$l.performance.now()}:function(){return(new Date).getTime()};function am(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Y());this.i=!1}
q=am.prototype;q.add=function(a,b,c){return bm(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return bm(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function cm(a,b,c){a=a.h.createObjectStore(b,c);return new dm(a)}
q.delete=function(a,b){return bm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return bm(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function em(a,b,c){return bm(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Yl(d.h.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function bm(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,v,z;return y(function(D){switch(D.h){case 1:var M={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){D.D(3);break}g++;k=Math.round(Y());ya(D,4);l=a.h.transaction(b,e.mode);M=new fm(l);M=gm(M,d);return x(D,M,6);case 6:return m=D.i,n=Math.round(Y()),hm(a,k,n,g,void 0,b.join(),e),D.return(m);case 4:r=Ba(D);p=Math.round(Y());v=Zk(r,a.h.name,b.join(),a.h.version);
if((z=v instanceof X&&!v.h)||g>=f)hm(a,k,p,g,v,b.join(),e),h=v;D.D(2);break;case 3:return D.return(Promise.reject(h))}})}
function hm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Nk("QUOTA_EXCEEDED",{dbName:Pk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Nk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),im(a,!1,d,f,b,g.tag),Mk(e)):im(a,!0,d,f,b,g.tag)}
function im(a,b,c,d,e,f){Nk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.h.name};
function dm(a){this.h=a}
q=dm.prototype;q.add=function(a,b){return Yl(this.h.add(a,b))};
q.autoIncrement=function(){return this.h.autoIncrement};
q.clear=function(){return Yl(this.h.clear()).then(function(){})};
function jm(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function km(a,b){return lm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?km(this,a):Yl(this.h.delete(a))};
q.get=function(a){return Yl(this.h.get(a))};
q.index=function(a){try{return new mm(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Xk(a,this.h.name);throw b;}};
q.getName=function(){return this.h.name};
q.keyPath=function(){return this.h.keyPath};
function lm(a,b,c){a=a.h.openCursor(b.query,b.direction);return nm(a).then(function(d){return Zl(d,c)})}
function fm(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=X;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function gm(a,b){var c=new Promise(function(d,e){try{gl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
fm.prototype.abort=function(){this.h.abort();this.i=!0;throw new X("EXPLICIT_ABORT");};
fm.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new dm(a),this.j.set(a,b));return b};
function mm(a){this.h=a}
q=mm.prototype;q.delete=function(a){return om(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Yl(this.h.get(a))};
q.getKey=function(a){return Yl(this.h.getKey(a))};
q.keyPath=function(){return this.h.keyPath};
q.unique=function(){return this.h.unique};
function om(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return nm(a).then(function(d){return Zl(d,c)})}
function pm(a,b){this.request=a;this.cursor=b}
function nm(a){return Yl(a).then(function(b){return b?new pm(a,b):null})}
q=pm.prototype;q.advance=function(a){this.cursor.advance(a);return nm(this.request)};
q.continue=function(a){this.cursor.continue(a);return nm(this.request)};
q.delete=function(){return Yl(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ka=function(){return this.cursor.value};
q.update=function(a){return Yl(this.cursor.update(a))};function qm(a,b,c){return new Promise(function(d,e){function f(){r||(r=new am(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ic,k=c.Jc,l=c.nd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Nk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Pk(a)});var v=f(),z=new fm(g.transaction);m&&
m(v,function(D){return p.oldVersion<D&&p.newVersion>=D},z);
z.done.catch(function(D){e(D)})}catch(D){e(D)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Nk("IDB_UNEXPECTEDLY_CLOSED",{dbName:Pk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function rm(a,b,c){c=void 0===c?{}:c;return qm(a,b,c)}
function sm(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ic)&&c.addEventListener("blocked",function(){e()}),x(g,jl(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Zk(f,a,"",-1);})}
;function tm(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.m=0}
tm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return rm(a,b,c)};
tm.prototype.delete=function(a){a=void 0===a?{}:a;return sm(this.name,a)};
function um(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vm(a,b){if(!b)throw $k("openWithToken",Pk(a.name));return wm(a)}
function wm(a){function b(){var f,g,h,k,l,m,n,r,p,v;return y(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(z,2),x(z,a.i(a.name,a.options.version,d),4);case 4:h=z.i;for(var D=a.options,M=[],S=u(Object.keys(D.Ya)),O=S.next();!O.done;O=S.next()){O=O.value;var va=D.Ya[O],Sc=void 0===va.ld?Number.MAX_VALUE:va.ld;!(h.h.version>=va.cb)||h.h.version>=Sc||h.h.objectStoreNames.contains(O)||M.push(O)}k=M;if(0===k.length){z.D(5);break}l=Object.keys(a.options.Ya);m=h.objectStoreNames();
if(a.v<sj("ytidb_reopen_db_retries",0))return a.v++,h.close(),Mk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.m<sj("ytidb_remake_db_retries",1))){z.D(6);break}a.m++;return x(z,a.delete(),7);case 7:return Mk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());case 6:throw new Wk(m,l);case 5:return z.return(h);case 2:n=Ba(z);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){z.D(8);break}return x(z,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=z.i;p=r.h.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.j=!1,um(a,p);return z.return(r);case 8:throw c(),n instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Zk(n,a.name,"",null!=(v=a.options.version)?v:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw um(a);if(a.h)return a.h;var d={Jc:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var xm=new tm("YtIdbMeta",{Ya:{databases:{cb:1}},upgrade:function(a,b){b(1)&&cm(a,"databases",{keyPath:"actualName"})}});
function ym(a,b){var c;return y(function(d){if(1==d.h)return x(d,vm(xm,b),2);c=d.i;return d.return(bm(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Yl(f.h.put(a,void 0)).then(function(){})})}))})}
function zm(a,b){var c;return y(function(d){if(1==d.h)return a?x(d,vm(xm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Am(a,b){var c,d;return y(function(e){return 1==e.h?(c=[],x(e,vm(xm,b),2)):3!=e.h?(d=e.i,x(e,bm(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return lm(f.objectStore("databases"),{},function(g){a(g.ka())&&c.push(g.ka());return g.continue()})}),3)):e.return(c)})}
function Bm(a){return Am(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Cm,Dm=new function(){}(new function(){});
function Em(){var a,b,c,d;return y(function(e){switch(e.h){case 1:a=Jk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=gk)f=/WebKit\/([0-9]+)/.exec(Ib()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ib()),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,ym(d,Dm),4);case 4:return x(e,zm("yt-idb-test-do-not-use",Dm),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Fm(){if(void 0!==Cm)return Cm;Lk=!0;return Cm=Em().then(function(a){Lk=!1;var b;if(null!=(b=Ik())&&b.h){var c;b={hasSucceededOnce:(null==(c=Jk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Ik())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Gm(){return C("ytglobal.idbToken_")||void 0}
function Hm(){var a=Gm();return a?Promise.resolve(a):Fm().then(function(b){(b=b?Dm:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new ag;function Im(a){if(!Fk())throw a=new X("AUTH_INVALID",{dbName:a}),Mk(a),a;var b=Gk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Jm(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",x(m,Hm(),2);case 2:g=m.i;if(!g)throw h=$k("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Mk(h),h;Ok(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Im(a);ya(m,3);return x(m,ym(k,g),5);case 5:return x(m,rm(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),ya(m,7),x(m,zm(k.actualName,g),9);case 9:Aa(m,
8);break;case 7:Ba(m);case 8:throw l;}})}
function Km(a,b,c){c=void 0===c?{}:c;return Jm(a,b,!1,c)}
function Lm(a,b,c){c=void 0===c?{}:c;return Jm(a,b,!0,c)}
function Mm(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.h)return x(e,Hm(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Ok(a);d=Im(a);return x(e,sm(d.actualName,b),3)}return x(e,zm(d.actualName,c),0)})}
function Nm(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.h?x(e,sm(d.actualName,b),2):x(e,zm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Om(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.h)return x(d,Hm(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Ok("LogsDatabaseV2");return x(d,Bm(b),3)}c=d.i;return x(d,Nm(c,a,b),0)})}
function Pm(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.h)return x(d,Hm(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Ok(a);return x(d,sm(a,b),3)}return x(d,zm(a,c),0)})}
;function Qm(a,b){tm.call(this,a,b);this.options=b;Ok(a)}
w(Qm,tm);function Rm(a,b){var c;return function(){c||(c=new Qm(a,b));return c}}
Qm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Hb?Lm:Km)(a,b,Object.assign({},c))};
Qm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Hb?Pm:Mm)(this.name,a)};
function Sm(a,b){return Rm(a,b)}
;var Tm={},Um=Sm("ytGcfConfig",{Ya:(Tm.coldConfigStore={cb:1},Tm.hotConfigStore={cb:1},Tm),Hb:!1,upgrade:function(a,b){b(1)&&(jm(cm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),jm(cm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Vm(a){return vm(Um(),a)}
function Wm(a,b,c){var d,e,f;return y(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Y()},x(g,Vm(c),2);case 2:return e=g.i,x(g,e.clear("hotConfigStore"),3);case 3:return x(g,em(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Xm(a,b,c,d){var e,f,g;return y(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},x(h,Vm(d),2);case 2:return f=h.i,x(h,f.clear("coldConfigStore"),3);case 3:return x(h,em(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Ym(a){var b,c;return y(function(d){return 1==d.h?x(d,Vm(a),2):3!=d.h?(b=d.i,c=void 0,x(d,bm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return om(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ka()})}),3)):d.return(c)})}
function Zm(a){var b,c;return y(function(d){return 1==d.h?x(d,Vm(a),2):3!=d.h?(b=d.i,c=void 0,x(d,bm(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return om(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ka()})}),3)):d.return(c)})}
;function $m(){}
function an(a,b,c){var d,e,f;return y(function(g){if(1==g.h){if(!W("update_log_event_config"))return g.D(0);c&&(a.h=c,B("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=Gm())?c?g.D(4):x(g,Zm(d),5):g.D(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return x(g,Wm(c,b,d),0)})}
function bn(a,b,c){var d,e,f,g;return y(function(h){if(1==h.h){if(!W("update_log_event_config"))return h.D(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=Gm())?c?h.D(4):x(h,Ym(d),5):h.D(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.D(0);g=c.configData;return x(h,Xm(c,b,g,d),0)})}
;function cn(){return"INNERTUBE_API_KEY"in ij&&"INNERTUBE_API_VERSION"in ij}
function dn(){return{Wc:V("INNERTUBE_API_KEY"),Xc:V("INNERTUBE_API_VERSION"),Nb:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),lc:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Yc:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),mc:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),oc:V("INNERTUBE_CONTEXT_HL"),nc:V("INNERTUBE_CONTEXT_GL"),Zc:V("INNERTUBE_HOST_OVERRIDE")||"",bd:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ad:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function en(a){var b={client:{hl:a.oc,gl:a.nc,clientName:a.lc,clientVersion:a.mc,configInfo:a.Nb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=tj();0<c.length&&(b.request={internalExperimentFlags:c});fn(a,void 0,b);W("enable_third_party_info")&&gn(void 0,b);hn(void 0,b);jn(a,void 0,b);kn(void 0,b);W("start_sending_config_hash")&&ln(void 0,
b);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Lj(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function mn(a){var b=new Ii,c=new zi;I(c,1,a.oc);I(c,2,a.nc);I(c,16,a.Yc);I(c,17,a.mc);if(a.Nb){var d=a.Nb,e=new vi;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,vi,62,e)}if((d=A.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float field must be a number|null|undefined, found "+typeof d+": "+d);I(c,65,d)}d=V("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=
tj();if(0<d.length){e=new Bi;for(var f=0;f<d.length;f++){var g=new ti;I(g,1,d[f].key);pd(g,2,ui,d[f].value);wd(e,15,ti,g)}J(b,Bi,5,e)}fn(a,c);W("enable_third_party_info")&&gn(b);hn(c);jn(a,c);kn(c);W("start_sending_config_hash")&&ln(c);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(a=new Gi,I(a,3,V("DELEGATED_SESSION_ID")));a=u(Object.entries(Lj(V("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):
"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,zi,1,c);return b}
function fn(a,b,c){a=a.lc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=rd(b,wi,96)||new wi;var d=tk();d=Object.keys(Ki).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,wi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=tk())}
function gn(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=rd(a,Di,7)||new Di,I(b,4,c),J(a,Di,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function hn(a,b){var c;if(W("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function jn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=rd(b,vi,62))?d:new vi;I(c,6,a.appInstallData);J(b,vi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function kn(a,b){a:{var c=yk();if(c){var d=uk[c.type||"unknown"]||"CONN_UNKNOWN";c=uk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,vk[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=yk(),d=null!=d&&d.effectiveType?xk.hasOwnProperty(d.effectiveType)?xk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,wk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function nn(a,b,c){c=void 0===c?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Kd||V("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Jd:b=pe([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=V("SESSION_INDEX",0),W("pageid_as_header_web")&&(d["X-Goog-PageId"]=V("DELEGATED_SESSION_ID")));return d}
function ln(a,b){$m.h||($m.h=new $m);var c=C("yt.gcf.config.coldConfigData");var d=C("yt.gcf.config.hotHashData");var e=C("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=rd(a,vi,62))?f:new vi;I(b,1,c);I(b,3,e);I(b,5,d);J(a,vi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function on(a,b,c,d){try{var e=re(b);var f=f||{};f.Vc=!0;var g=new oi(f);g.push(e,!0);if(g.err)throw g.msg||sh[g.err];var h=g.result;c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0;d(a,c)}catch(k){qj(k),d(a,c)}}
;function pn(a){a=Object.assign({},a);delete a.Authorization;var b=pe();if(b){var c=new Mf;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=yc(c.digest(),3)}return a}
;var qn;function rn(){qn||(qn=new Hk("yt.innertube"));return qn}
function sn(a,b,c,d){if(d)return null;d=rn().get("nextId",!0)||1;var e=rn().get("requests",!0)||{};e[d]={method:a,request:b,authState:pn(c),requestTime:Math.round(Y())};rn().set("nextId",d+1,86400,!0);rn().set("requests",e,86400,!0);return d}
function tn(a){var b=rn().get("requests",!0)||{};delete b[a];rn().set("requests",b,86400,!0)}
function un(a){var b=rn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=pn(nn(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),vn(a,d.method,e,{}));delete b[c]}}rn().set("requests",b,86400,!0)}}
;function wn(a){this.sb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Sa=function(){};
this.now=Date.now;this.gb=!1;var b;this.Bc=null!=(b=a.Bc)?b:100;var c;this.zc=null!=(c=a.zc)?c:1;var d;this.xc=null!=(d=a.xc)?d:2592E6;var e;this.wc=null!=(e=a.wc)?e:12E4;var f;this.yc=null!=(f=a.yc)?f:5E3;var g;this.K=null!=(g=a.K)?g:void 0;this.xb=!!a.xb;var h;this.vb=null!=(h=a.vb)?h:.1;var k;this.Eb=null!=(k=a.Eb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Sa&&(this.Sa=a.Sa);a.gb&&(this.gb=a.gb);a.sb&&(this.sb=a.sb);this.J=a.J;this.ha=a.ha;this.O=a.O;this.R=a.R;this.wa=a.wa;this.Tb=
a.Tb;this.Sb=a.Sb;xn(this)&&(!this.J||this.J("networkless_logging"))&&yn(this)}
function yn(a){xn(a)&&!a.gb&&(a.h=!0,a.xb&&Math.random()<=a.vb&&a.O.Lc(a.K),zn(a),a.R.da()&&a.mb(),a.R.Ja(a.Tb,a.mb.bind(a)),a.R.Ja(a.Sb,a.ac.bind(a)))}
q=wn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(xn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.K).then(function(e){d.id=e;c.R.da()&&An(c,d)}).catch(function(e){An(c,d);
Bn(c,e)})}else this.wa(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(xn(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.da()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.h)return x(k,d.O.set(e,d.K).catch(function(l){Bn(d,l)}),2);
f(g,h);k.h=0})}}this.wa(a,b,e.skipRetry)}else this.O.set(e,this.K).catch(function(g){d.wa(a,b,e.skipRetry);
Bn(d,g)})}else this.wa(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(xn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.Qa(d.id,c.K):e=!0;c.R.La&&c.J&&c.J("vss_network_hint")&&c.R.La(!0);f(g,h)};
this.wa(d.url,d.options);this.O.set(d,this.K).then(function(g){d.id=g;e&&c.O.Qa(d.id,c.K)}).catch(function(g){Bn(c,g)})}else this.wa(a,b)};
q.mb=function(){var a=this;if(!xn(this))throw $k("throttleSend");this.i||(this.i=this.ha.ja(function(){var b;return y(function(c){if(1==c.h)return x(c,a.O.ic("NEW",a.K),2);if(3!=c.h)return b=c.i,b?x(c,An(a,b),3):(a.ac(),c.return());a.i&&(a.i=0,a.mb());c.h=0})},this.Bc))};
q.ac=function(){this.ha.Pa(this.i);this.i=0};
function An(a,b){var c,d;return y(function(e){switch(e.h){case 1:if(!xn(a))throw c=$k("immediateSend"),c;if(void 0===b.id){e.D(2);break}return x(e,a.O.dd(b.id,a.K),3);case 3:if(d=e.i){if(a.J&&!a.J("nwl_send_from_memory_when_online")||void 0===a.J)b=d}else a.Sa(Error("The request cannot be found in the database."));case 2:if(Cn(a,b,a.xc)){e.D(4);break}a.Sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.D(5);break}return x(e,a.O.Qa(b.id,a.K),5);case 5:return e.return();
case 4:b.skipRetry||(b=Dn(a,b));if(!b){e.D(0);break}if(!b.skipRetry||void 0===b.id){e.D(8);break}return x(e,a.O.Qa(b.id,a.K),8);case 8:a.wa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Dn(a,b){if(!xn(a))throw $k("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return y(function(m){switch(m.h){case 1:g=En(f);h=Fn(f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Eb)){m.D(2);break}if(!a.R.Gb){m.D(3);break}return x(m,a.R.Gb(),3);case 3:if(a.R.da()){m.D(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.D(6);break}return x(m,a.O.Ub(b.id,a.K,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Eb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.D(8);break}return b.sendCount<a.zc?x(m,a.O.Ub(b.id,a.K,!0,h?!1:void 0),12):x(m,a.O.Qa(b.id,a.K),8);case 12:a.ha.ja(function(){a.R.da()&&a.mb()},a.yc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.D(2):x(h,a.O.Qa(b.id,a.K),2);a.R.La&&a.J&&a.J("vss_network_hint")&&a.R.La(!0);d(e,f);h.h=0})};
return b}
function Cn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zn(a){if(!xn(a))throw $k("retryQueuedRequests");a.O.ic("QUEUED",a.K).then(function(b){b&&!Cn(a,b,a.wc)?a.ha.ja(function(){return y(function(c){if(1==c.h)return void 0===b.id?c.D(2):x(c,a.O.Ub(b.id,a.K),2);zn(a);c.h=0})}):a.R.da()&&a.mb()})}
function Bn(a,b){a.Ec&&!a.R.da()?a.Ec(b):a.handleError(b)}
function xn(a){return!!a.K||a.sb}
function En(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Fn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Gn=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.nb;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;B("ytPubsub2Pubsub2Instance",Gn);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);var Hn;
function In(){if(Hn)return Hn();var a={};Hn=Sm("LogsDatabaseV2",{Ya:(a.LogsRequestsStore={cb:2},a),Hb:!1,upgrade:function(b,c,d){c(2)&&cm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),jm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Hn()}
;function Jn(a){return vm(In(),a)}
function Kn(a,b){var c,d,e,f;return y(function(g){if(1==g.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,Jn(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,em(d,"LogsRequestsStore",e),3);f=g.i;c.od=Y();Ln(c);return g.return(f)})}
function Mn(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,Jn(b),2);if(3!=l.h)return d=l.i,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,bm(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return om(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ka()&&(k=n.ka(),"NEW"===a&&(k.status="QUEUED",n.update(k)))})}),
3);
c.od=Y();Ln(c);return l.return(k)})}
function Nn(a,b){var c;return y(function(d){if(1==d.h)return x(d,Jn(b),2);c=d.i;return d.return(bm(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Yl(f.h.put(g,void 0)).then(function(){return g})})}))})}
function On(a,b,c,d){c=void 0===c?!0:c;var e;return y(function(f){if(1==f.h)return x(f,Jn(b),2);e=f.i;return f.return(bm(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Yl(h.h.put(k,void 0)).then(function(){return k})):dl.resolve(void 0)})}))})}
function Pn(a,b){var c;return y(function(d){if(1==d.h)return x(d,Jn(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Qn(a){var b,c;return y(function(d){if(1==d.h)return x(d,Jn(a),2);b=d.i;c=Y()-2592E6;return x(d,bm(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return lm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ka().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Rn(){y(function(a){return x(a,Om(),0)})}
function Ln(a){if(!W("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Sn={},Tn=Sm("ServiceWorkerLogsDatabase",{Ya:(Sn.SWHealthLog={cb:1},Sn),Hb:!0,upgrade:function(a,b){b(1)&&jm(cm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Un(a){return vm(Tn(),a)}
function Vn(a){var b,c;y(function(d){if(1==d.h)return x(d,Un(a),2);b=d.i;c=Y()-2592E6;return x(d,bm(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return lm(e.objectStore("SWHealthLog"),{},function(f){if(f.ka().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Wn(a){var b;return y(function(c){if(1==c.h)return x(c,Un(a),2);b=c.i;return x(c,b.clear("SWHealthLog"),0)})}
;var Xn={},Yn=0;function Zn(a){var b=new Image,c=""+Yn++;Xn[c]=b;b.onload=b.onerror=function(){delete Xn[c]};
b.src=a}
;function $n(){this.h=new Map;this.i=!1}
function ao(){if(!$n.h){var a=C("yt.networkRequestMonitor.instance")||new $n;B("yt.networkRequestMonitor.instance",a);$n.h=a}return $n.h}
$n.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
$n.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
$n.prototype.removeParams=function(a){return a.split("?")[0]};
$n.prototype.removeParams=$n.prototype.removeParams;$n.prototype.isEndpointCFR=$n.prototype.isEndpointCFR;$n.prototype.requestComplete=$n.prototype.requestComplete;$n.getInstance=ao;var bo;function co(){bo||(bo=new Hk("yt.offline"));return bo}
function eo(a){if(W("offline_error_handling")){var b=co().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);co().set("errors",b,2592E3,!0)}}
;function Z(){Ue.call(this);var a=this;this.m=!1;this.i=$e();this.i.Ja("networkstatus-online",function(){if(a.m&&W("offline_error_handling")){var b=co().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Ek(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;pj(d)}co().set("errors",{},2592E3,!0)}}})}
w(Z,Ue);function fo(){if(!Z.h){var a=C("yt.networkStatusManager.instance")||new Z;B("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
q=Z.prototype;q.da=function(){return this.i.da()};
q.La=function(a){this.i.i=a};
q.Tc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Oc=function(){this.m=!0};
q.Ja=function(a,b){return this.i.Ja(a,b)};
q.Gb=function(a){a=Ye(this.i,a);a.then(function(b){W("use_cfr_monitor")&&ao().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Gb;Z.prototype.listen=Z.prototype.Ja;Z.prototype.enableErrorFlushing=Z.prototype.Oc;Z.prototype.getWindowStatus=Z.prototype.Tc;Z.prototype.networkStatusHint=Z.prototype.La;Z.prototype.isNetworkAvailable=Z.prototype.da;Z.getInstance=fo;function go(a){a=void 0===a?{}:a;Ue.call(this);var b=this;this.i=this.H=0;this.m=fo();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Fb?(this.Fb=a.Fb,c("networkstatus-online",function(){ho(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ho(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ve(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ve(b,"publicytnetworkstatus-offline")})))}
w(go,Ue);go.prototype.da=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
go.prototype.La=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
go.prototype.Gb=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return W("skip_network_check_if_cfr")&&ao().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.La((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.da())})):c?d.return(c(a)):d.return(!0)})};
function ho(a,b){a.Fb?a.i?(af.Pa(a.H),a.H=af.ja(function(){a.s!==b&&(Ve(a,b),a.s=b,a.i=Y())},a.Fb-(Y()-a.i))):(Ve(a,b),a.s=b,a.i=Y()):Ve(a,b)}
;var io;function jo(){var a=wn.call;io||(io=new go({Od:!0,Nd:!0}));a.call(wn,this,{O:{Lc:Qn,Qa:Pn,ic:Mn,dd:Nn,Ub:On,set:Kn},R:io,handleError:pj,Sa:qj,wa:ko,now:Y,Ec:eo,ha:Dk(),Tb:"publicytnetworkstatus-online",Sb:"publicytnetworkstatus-offline",xb:!0,vb:.1,Eb:sj("potential_esf_error_limit",10),J:W,gb:!(Fk()&&"www.youtube-nocookie.com"!==Tb(document.location.toString()))});this.j=new ag;W("networkless_immediately_drop_all_requests")&&Rn();Pm("LogsDatabaseV2")}
w(jo,wn);function lo(){var a=C("yt.networklessRequestController.instance");a||(a=new jo,B("yt.networklessRequestController.instance",a),W("networkless_logging")&&Hm().then(function(b){a.K=b;yn(a);a.j.resolve();a.xb&&Math.random()<=a.vb&&a.K&&Vn(a.K);W("networkless_immediately_drop_sw_health_store")&&mo(a)}));
return a}
jo.prototype.writeThenSend=function(a,b){b||(b={});Fk()||(this.h=!1);wn.prototype.writeThenSend.call(this,a,b)};
jo.prototype.sendThenWrite=function(a,b,c){b||(b={});Fk()||(this.h=!1);wn.prototype.sendThenWrite.call(this,a,b,c)};
jo.prototype.sendAndWrite=function(a,b){b||(b={});Fk()||(this.h=!1);wn.prototype.sendAndWrite.call(this,a,b)};
jo.prototype.awaitInitialization=function(){return this.j.promise};
function mo(a){var b;y(function(c){if(!a.K)throw b=$k("clearSWHealthLogsDb"),b;return c.return(Wn(a.K).catch(function(d){a.handleError(d)}))})}
function ko(a,b,c){W("use_cfr_monitor")&&no(a,b);if(W("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)ak(a,void 0,"POST",e);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ak(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new bb({url:a});if(g.j&&g.i||
g.m){var h=Sb(a.match(Rb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==Yb(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Zn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),on(a,b.postBody,b,Xj)):on(a,JSON.stringify(b.postParams),b,fk):Xj(a,b)}
function no(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){ao().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){ao().requestComplete(a,!0);d(e,f)}}
;var oo=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",oo);function po(a){var b=this;this.config_=null;a?this.config_=a:cn()&&(this.config_=dn());Ak(function(){un(b)},5E3)}
po.prototype.isReady=function(){!this.config_&&cn()&&(this.config_=dn());return!!this.config_};
function vn(a,b,c,d){function e(v){v=void 0===v?!1:v;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||W("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=sn(b,c,l,k)),z)){var D=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(O,va){tn(z);D(O,va)};
c.onFetchSuccess=function(O,va){tn(z);M(O,va)}}try{if(v&&d.retry&&!d.sc.bypassNetworkless)g.method="POST",d.sc.writeThenSend?lo().writeThenSend(p,g):lo().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var S=g.postBody;"string"!==typeof S&&(S=JSON.stringify(g.postBody));on(p,S,g,Xj)}else on(p,JSON.stringify(g.postParams),g,fk);else W("web_all_payloads_via_jspb")?Xj(p,g):fk(p,g)}catch(O){if("InvalidAccessError"==O.name)z&&(tn(z),z=0),qj(Error("An extension is blocking network request."));else throw O;}z&&Ak(function(){un(a)},5E3)}
!V("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&qj(new Ek("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ek("innertube xhrclient not ready",b,c,d);pj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,z){if(d.onError)d.onError(z)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Zc)&&(h=f);var k=a.config_.bd||!1,l=nn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Xc+"/"+b,n={alt:"json"},r=a.config_.ad&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Wc);var p=Mj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
oo.isNwlInitialized?Fm().then(function(v){e(v)}):e(!1)}
;var qo=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ro(a){this.X=a;this.h=null;this.s=0;this.N=null;this.H=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.m=0;this.Ib=Cj(window,"mousemove",Za(this.Jb,this));this.Kb=Ej(Za(this.Fa,this),25)}
E(ro,se);ro.prototype.Jb=function(a){void 0===a.h&&xj(a);var b=a.h;void 0===a.i&&xj(a);this.h=new Id(b,a.i)};
ro.prototype.Fa=function(){if(this.h){var a=qo();if(0!=this.s){var b=this.N,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.s);this.i[this.m]=.5<Math.abs((d-this.H)/this.H)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.X();this.H=d}this.s=a;this.N=this.h;this.m=(this.m+1)%4}};
ro.prototype.Ra=function(){window.clearInterval(this.Kb);Aj(this.Ib)};var so={};
function to(){var a={},b=void 0===a.kd?!1:a.kd;a=void 0===a.Pc?!0:a.Pc;if(null==C("_lact",window)){var c=parseInt(V("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&uo();Cj(document,"keydown",uo);Cj(document,"keyup",uo);Cj(document,"mousedown",uo);Cj(document,"mouseup",uo);b?Cj(window,"touchmove",function(){vo("touchmove",200)},{passive:!0}):(Cj(window,"resize",function(){vo("resize",200)}),a&&Cj(window,"scroll",function(){vo("scroll",200)}));
new ro(function(){vo("mouse",100)});
Cj(document,"touchstart",uo,{passive:!0});Cj(document,"touchend",uo,{passive:!0})}}
function vo(a,b){so[a]||(so[a]=!0,af.ja(function(){uo();so[a]=!1},b))}
function uo(){null==C("_lact",window)&&to();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function wo(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var xo=A.ytPubsubPubsubInstance||new L,yo=A.ytPubsubPubsubSubscribedKeys||{},zo=A.ytPubsubPubsubTopicToKeys||{},Ao=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.nb;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;B("ytPubsubPubsubInstance",xo);B("ytPubsubPubsubTopicToKeys",zo);B("ytPubsubPubsubIsSynchronous",Ao);B("ytPubsubPubsubSubscribedKeys",yo);var Bo=Symbol("injectionDeps");function Co(){this.i=new Map;this.h=new Map}
Co.prototype.resolve=function(a){return Do(this,a,[])};
function Do(a,b,c){var d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.rd)var e=d.rd;else if(d.qd)e=d[Bo]?Eo(a,d[Bo],c):[],e=d.qd.apply(d,ka(e));else if(d.pd){e=d.pd;var f=e[Bo]?Eo(a,e[Bo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ud||a.h.set(b,e);return e}
function Eo(a,b,c){return b?b.map(function(d){return Do(a,d,c)}):[]}
;var Fo;function Go(){this.store={};this.h={}}
Go.prototype.storePayload=function(a,b){a=Ho(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Go.prototype.extractMatchingEntries=function(a){a=Io(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
Go.prototype.getSequenceCount=function(a){a=Io(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Io(a,b){var c=Ho(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Ho(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Jo(b.auth,g[0])){var h=b.isJspb;Jo(void 0===h?"undefined":h?"true":"false",g[1])&&Jo(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Jo(a,b){return void 0===a||"undefined"===a?!0:a===b}
Go.prototype.getSequenceCount=Go.prototype.getSequenceCount;Go.prototype.extractMatchingEntries=Go.prototype.extractMatchingEntries;Go.prototype.storePayload=Go.prototype.storePayload;function Ho(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var Ko=sj("initial_gel_batch_timeout",2E3),Lo=sj("gel_queue_timeout_max_ms",6E4),Mo=Math.pow(2,16)-1,No=void 0;function Oo(){this.j=this.h=this.i=0}
var Po=new Oo,Qo=new Oo,Ro,So=!0,To=A.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",To);var Uo=A.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Uo);var Vo=A.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Vo);var Wo=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Wo);var Xo={};function Yo(){var a=C("yt.logging.ims");a||(a=new Go,B("yt.logging.ims",a));return a}
function Zo(a,b){W("web_all_payloads_via_jspb")&&qj(new Ek("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){$o(a);var c=ap(a);if(W("use_new_in_memory_storage")){Xo[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Yo().storePayload(d,a.payload);bp(b,[],c,!1,d)}else d=To.get(c)||[],To.set(c,d),d.push(a.payload),bp(b,d,c)}}
function cp(a,b){if("log_event"===a.endpoint){$o(void 0,a);var c=ap(a,!0);if(W("use_new_in_memory_storage")){Xo[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Yo().storePayload(d,a.payload.toJSON());bp(b,[],c,!0,d)}else d=Uo.get(c)||[],Uo.set(c,d),a=a.payload.toJSON(),d.push(a),bp(b,d,c,!0)}}
function bp(a,b,c,d,e){d=void 0===d?!1:d;a&&(No=new a);a=sj("tvhtml5_logging_max_batch_ads_fork")||sj("tvhtml5_logging_max_batch")||sj("web_logging_max_batch")||100;var f=Y(),g=d?Qo.j:Po.j;b=b.length;e&&(b=Yo().getSequenceCount(e));b>=a?Ro||(Ro=dp(function(){ep({writeThenSend:!0},W("flush_only_full_queue")?c:void 0,d);Ro=void 0},0)):10<=f-g&&(fp(d),d?Qo.j=f:Po.j=f)}
function gp(a,b){W("web_all_payloads_via_jspb")&&qj(new Ek("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){$o(a);var c=ap(a),d=new Map;d.set(c,[a.payload]);b&&(No=new b);return new bg(function(e,f){No&&No.isReady()?hp(d,No,e,f,{bypassNetworkless:!0},!0):e()})}}
function ip(a,b){if("log_event"===a.endpoint){$o(void 0,a);var c=ap(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(No=new b);return new bg(function(e){No&&No.isReady()?jp(d,No,e,{bypassNetworkless:!0},!0):e()})}}
function ap(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new bj;c.videoId?pd(d,1,cj,c.videoId):c.playlistId&&pd(d,2,cj,c.playlistId);Wo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function ep(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&W("web_all_payloads_via_jspb")&&qj(new Ek("transport.flushLogs called for JSON in JSPB only experiment"));new bg(function(d,e){c?(kp(Qo.i),kp(Qo.h),Qo.h=0):(kp(Po.i),kp(Po.h),Po.h=0);if(No&&No.isReady())if(W("use_new_in_memory_storage")){var f=a,g=c,h=No;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Yo().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),jp(k,h,d,f)):(k=Yo().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),l.set(b,k),hp(l,h,d,e,f));else if(g){e=u(Object.keys(Xo));for(g=e.next();!g.done;g=e.next())l=g.value,g=Yo().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Xo[l];jp(k,h,d,f)}else{k=u(Object.keys(Xo));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Yo().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Xo[g]}hp(l,h,d,e,f)}}else f=a,k=c,h=No,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Uo.get(b)||[],e.set(b,
k),jp(e,h,d,f),Uo.delete(b)):(k=new Map,l=To.get(b)||[],k.set(b,l),hp(k,h,d,e,f),To.delete(b)):k?(jp(Uo,h,d,f),Uo.clear()):(hp(To,h,d,e,f),To.clear());else fp(c),d()})}
function fp(a){a=void 0===a?!1:a;if(W("web_gel_timeout_cap")&&(!a&&!Po.h||a&&!Qo.h)){var b=dp(function(){ep({writeThenSend:!0},void 0,a)},Lo);
a?Qo.h=b:Po.h=b}kp(a?Qo.i:Po.i);b=V("LOGGING_BATCH_TIMEOUT",sj("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&So&&(b=Ko);b=dp(function(){ep({writeThenSend:!0},void 0,a)},b);
a?Qo.i=b:Po.i=b}
function hp(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={pb:k.pb,Ea:k.Ea,bb:k.bb,rb:k.rb,qb:k.qb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Ea=qb({context:en(b.config_||dn())});if(!Qa(m)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}k.Ea.events=m;(m=Vo[l])&&lp(k.Ea,l,m);delete Vo[l];k.bb="visitorOnlyApprovedKey"===l;mp(k.Ea,g,k.bb);np(e);k.rb=function(n){W("update_log_event_config")&&af.ja(function(){return y(function(r){return x(r,
op(n),0)})});
h--;h||c()};
k.pb=0;k.qb=function(n){return function(){n.pb++;if(e.bypassNetworkless&&1===n.pb)try{vn(b,"log_event",n.Ea,pp({writeThenSend:!0},n.bb,n.rb,n.qb,f)),So=!1}catch(r){pj(r),d()}h--;h||c()}}(k);
try{vn(b,"log_event",k.Ea,pp(e,k.bb,k.rb,k.qb,f)),So=!1}catch(n){pj(n),d()}}}
function jp(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ka(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new dj;var n=mn(b.config_||dn());J(k,Ii,1,n);m=m?qp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())wd(k,3,Zi,n.value);(m=Wo[l])&&rp(k,l,m);delete Wo[l];l="visitorOnlyApprovedKey"===l;sp(k,f,l);np(d);k=Ed(k);l=pp(d,l,function(r){W("update_log_event_config")&&af.ja(function(){return y(function(p){return x(p,op(r),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;vn(b,"log_event","",l);So=!1}}
function np(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function pp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,sc:a,dangerousLogToVisitorSession:b,Md:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")};tp()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function mp(a,b,c){tp()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=up(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function sp(a,b,c){tp()||I(a,2,b);if(!c&&(b=V("EVENT_ID"))){c=up();var d=new aj;I(d,1,b);I(d,2,c);J(a,aj,5,d)}}
function up(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Mo/2));a++;a>Mo&&(a=1);jj("BATCH_CLIENT_COUNTER",a);return a}
function lp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function rp(a,b,c){if(xd(c,1===qd(c,cj)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,bj,4,c);a=rd(a,Ii,1)||new Ii;c=rd(a,Gi,3)||new Gi;var e=new Fi;I(e,2,b);I(e,1,d);wd(c,12,Fi,e);J(a,Gi,3,c)}
function qp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Zi(a[c]))}catch(d){pj(new Ek("Transport failed to deserialize "+String(a[c])))}return b}
function $o(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function tp(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function dp(a,b){return W("transport_use_scheduler")?Ak(a,b):Dj(a,b)}
function kp(a){W("transport_use_scheduler")?af.Pa(a):window.clearTimeout(a)}
function op(a){var b,c,d,e,f,g,h,k,l,m;return y(function(n){if(1==n.h){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[si.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[ri.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;Fo||(Fo=new Co);m=Fo.resolve($m);return g?e?x(n,an(m,g,e),2):x(n,an(m,g),2):n.D(2)}return l?h?x(n,bn(m,l,h),0):x(n,bn(m,l),0):n.D(0)})}
;var vp=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",vp);function wp(a){ep(void 0,void 0,void 0===a?!1:a)}
function xp(a){vp[a]=a in vp?vp[a]+1:0;return vp[a]}
;var yp=[];
function zp(a,b){var c=void 0===c?{}:c;var d=po;V("ytLoggingEventsDefaultDisabled",!1)&&po===po&&(d=null);if(W("web_all_payloads_via_jspb"))yp.push({Sd:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;W("enable_unknown_lact_fix_on_html5")&&to();a=wo();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};W("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,b=c.sequenceGroup,b={index:xp(b),
groupKey:b},a.sequence=b,c.endOfSequence&&delete vp[c.sequenceGroup]);(c.sendIsolatedPayload?gp:Zo)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var Ap=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",Ap);function Bp(a){var b=void 0;b=void 0===b?{}:b;var c=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:po;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Y());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=wo();d=new Yi;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(W("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=xp(e),g=new Xi;I(g,2,f);I(g,1,e);J(d,Xi,3,g);b.endOfSequence&&delete Ap[b.sequenceGroup]}J(a,Yi,33,d);(b.sendIsolatedPayload?ip:cp)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var Cp=new Set,Dp=0,Ep=0,Fp=0,Gp=[],Hp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ip(){for(var a=u(Hp),b=a.next();!b.done;b=a.next()){var c=Ib();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Jp(){var a;return y(function(b){return(a=vf())?b.return(a.then(function(c){c=Ed(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return yc(d,3)})):b.return(Promise.resolve(null))})}
;var Kp={};function Lp(a){return Kp[a]||(Kp[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Mp={},Np=[],sg=new L,Op={};function Pp(){for(var a=u(Np),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Qp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Lp(b)]:a.getAttribute("data-"+b):null;return c}
function Rp(a){sg.Za.apply(sg,arguments)}
;function Sp(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Tp(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Up(a,b,c){Vp||(Vp={},Cj(window,"message",function(d){a:{if(d.origin===Tp(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Vp[e.id])d.H=!0,d.H&&(F(d.s,d.sendMessage,d),d.s.length=0),d.Yb(e)}e=void 0}return e}));
Vp[c]=b}
var Vp=null;var Wp=window;
function Xp(a,b,c){this.v=this.h=this.i=null;this.j=0;this.H=!1;this.s=[];this.m=null;this.X={};if(!a)throw Error("YouTube player element ID required.");this.id=Sa(this);this.N=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.i=new Sp(b),c||(b=Yp(this,a),this.v=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Sa(this.h)),Mp[this.h.id]=this,window.postMessage){this.m=
new L;Zp(this);b=Tp(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Op)Op.hasOwnProperty(e)&&$p(this,e)}}
q=Xp.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.getIframe=function(){return this.h};
q.Yb=function(a){aq(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);bq(this,a);return this};
function $p(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.N===b[0]&&bq(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Mp[this.h.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.v){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.v,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Vp&&(Vp[this.id]=null);this.i=null;a=this.h;for(var c in ob)ob[c][0]==a&&Aj(c);this.v=this.h=null};
q.dc=function(){return{}};
function cq(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.s.push(b)}
function aq(a,b,c){a.m.j||(c={target:a,data:c},a.m.Za(b,c),Rp(a.N+"."+b,c))}
function Yp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Tp(a.i,"title"));(b=Tp(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Tp(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.dc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&F(["debugjs","debugcss"],function(k){var l=Yb(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Tp(a.i,"host")+("/embed/"+Tp(a.i,"videoId"))+"?"+Wb(g);Wp.yt_embedsEnableUaChProbe?Jp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Wd(l.href).toString();Sd(c,Xd(k));return k}):Wp.yt_embedsEnableIframeSrcWithIntent?Sd(c,Xd(h)):c.src=h;
return c}
q.uc=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Zp(a){Up(a.i,a,a.id);a.j=Ej(a.uc.bind(a),250);Cj(a.h,"load",function(){window.clearInterval(a.j);a.j=Ej(a.uc.bind(a),250)})}
function bq(a,b){a.X[b]||(a.X[b]=!0,cq(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Ub(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(nc){if(nc.name&&"SyntaxError"===nc.name){if(!(nc.message&&0<nc.message.indexOf("target origin ''"))){var e=void 0,f=nc;e=void 0===e?{}:e;e.name=V("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=V("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(W("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Dp)){var m=void 0,n=void 0,r=f,p=g,v=Md(r),z=v.message||"Unknown Error",D=v.name||"UnknownError",
M=v.stack||r.i||"Not available";if(M.startsWith(D+": "+z)){var S=M.split("\n");S.shift();M=S.join("\n")}var O=v.lineNumber||"Not available",va=v.fileName||"Not available",Sc=M,Ga=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var wa=0;wa<r.args.length&&!(Ga=qk(r.args[wa],"params."+wa,p,Ga),500<=Ga);wa++);else if(r.hasOwnProperty("params")&&r.params){var ba=r.params;if("object"===typeof r.params)for(n in ba){if(ba[n]){var ha="params."+n,ia=sk(ba[n]);p[ha]=ia;Ga+=ha.length+ia.length;if(500<
Ga)break}}else p.params=sk(ba)}if(Gp.length)for(var aa=0;aa<Gp.length&&!(Ga=qk(Gp[aa],"params.context."+aa,p,Ga),500<=Ga);aa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var U={message:z,name:D,lineNumber:O,fileName:va,stack:Sc,params:p,sampleWeight:1},kl=Number(r.columnNumber);isNaN(kl)||(U.lineNumber=U.lineNumber+":"+kl);if("IGNORED"===r.level)m=0;else a:{for(var ll=mk(),ml=u(ll.Aa),Jg=ml.next();!Jg.done;Jg=ml.next()){var nl=Jg.value;if(U.message&&U.message.match(nl.Pd)){m=
nl.weight;break a}}for(var ol=u(ll.xa),Kg=ol.next();!Kg.done;Kg=ol.next()){var pl=Kg.value;if(pl.Kc(U)){m=pl.weight;break a}}m=1}U.sampleWeight=m;for(var ql=u(hk),Lg=ql.next();!Lg.done;Lg=ql.next()){var Mg=Lg.value;if(Mg.Db[U.name])for(var rl=u(Mg.Db[U.name]),Ng=rl.next();!Ng.done;Ng=rl.next()){var sl=Ng.value,ye=U.message.match(sl.regexp);if(ye){U.params["params.error.original"]=ye[0];for(var Og=sl.groups,tl={},oc=0;oc<Og.length;oc++)tl[Og[oc]]=ye[oc+1],U.params["params.error."+Og[oc]]=ye[oc+1];
U.message=Mg.Rb(tl);break}}}U.params||(U.params={});var ul=mk();U.params["params.errorServiceSignature"]="msg="+ul.Aa.length+"&cb="+ul.xa.length;U.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(U.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));vb("sample").constructor!==ub&&(U.params["params.fconst"]="true");var za=U;window.yterr&&"function"===typeof window.yterr&&window.yterr(za);if(0!==za.sampleWeight&&!Cp.has(za.message)){if("ERROR"===
h){nk.Za("handleError",za);if(W("record_app_crashed_web")&&0===Fp&&1===za.sampleWeight)if(Fp++,W("errors_via_jspb")){var Pg=new Wi;I(Pg,1,1);if(!W("report_client_error_with_app_crash_ks")){var vl=new Ri;I(vl,1,za.message);var wl=new Si;J(wl,Ri,3,vl);var xl=new Ti;J(xl,Si,5,wl);var yl=new Ui;J(yl,Ti,9,xl);J(Pg,Ui,4,yl)}var iq=Pg,zl=new Zi;ud(zl,Wi,20,$i,iq);Bp(zl)}else{var Al={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};W("report_client_error_with_app_crash_ks")||(Al.systemHealth={crashData:{clientError:{logMessage:{message:za.message}}}});
zp("appCrashed",Al)}Ep++}else"WARNING"===h&&nk.Za("handleWarning",za);if(W("kevlar_gel_error_routing"))a:{var Qg=void 0,Rg=void 0,kd=h,R=za;if(W("errors_via_jspb")){if(Ip())Rg=void 0;else{var pc=new Oi;I(pc,1,R.stack);R.fileName&&I(pc,4,R.fileName);var Va=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Va.length&&(1!==Va.length||isNaN(Number(Va[0]))?2!==Va.length||isNaN(Number(Va[0]))||isNaN(Number(Va[1]))||(I(pc,2,Number(Va[0])),I(pc,3,Number(Va[1]))):I(pc,2,Number(Va[0])));var Kb=
new Ri;I(Kb,1,R.message);I(Kb,3,R.name);I(Kb,6,R.sampleWeight);"ERROR"===kd?I(Kb,2,2):"WARNING"===kd?I(Kb,2,1):I(Kb,2,0);var Sg=new Pi;I(Sg,1,!0);ud(Sg,Oi,3,Qi,pc);var Lb=new Li;I(Lb,3,window.location.href);for(var Bl=V("FEXP_EXPERIMENTS",[]),Tg=0;Tg<Bl.length;Tg++){var Cl=Lb,jq=Bl[Tg];Xc(Cl);od(Cl,5,2,!1,!1).push(jq)}var Ug=kj();if(!lj()&&Ug)for(var Dl=u(Object.keys(Ug)),Mb=Dl.next();!Mb.done;Mb=Dl.next()){var El=Mb.value,Vg=new Ni;I(Vg,1,El);I(Vg,2,String(Ug[El]));wd(Lb,4,Ni,Vg)}var Wg=R.params;
if(Wg){var Fl=u(Object.keys(Wg));for(Mb=Fl.next();!Mb.done;Mb=Fl.next()){var Gl=Mb.value,Xg=new Ni;I(Xg,1,"client."+Gl);I(Xg,2,String(Wg[Gl]));wd(Lb,4,Ni,Xg)}}var Hl=V("SERVER_NAME"),Il=V("SERVER_VERSION");if(Hl&&Il){var Yg=new Ni;I(Yg,1,"server.name");I(Yg,2,Hl);wd(Lb,4,Ni,Yg);var Zg=new Ni;I(Zg,1,"server.version");I(Zg,2,Il);wd(Lb,4,Ni,Zg)}var ze=new Si;J(ze,Li,1,Lb);J(ze,Pi,2,Sg);J(ze,Ri,3,Kb);Rg=ze}var Jl=Rg;if(!Jl)break a;var Kl=new Zi;ud(Kl,Si,163,$i,Jl);Bp(Kl)}else{if(Ip())Qg=void 0;else{var ld=
{stackTrace:R.stack};R.fileName&&(ld.filename=R.fileName);var Wa=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Wa.length&&(1!==Wa.length||isNaN(Number(Wa[0]))?2!==Wa.length||isNaN(Number(Wa[0]))||isNaN(Number(Wa[1]))||(ld.lineNumber=Number(Wa[0]),ld.columnNumber=Number(Wa[1])):ld.lineNumber=Number(Wa[0]));var $g={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===kd?$g.level="ERROR_LEVEL_ERROR":"WARNING"===kd&&($g.level="ERROR_LEVEL_WARNNING");
var kq={isObfuscated:!0,browserStackInfo:ld},qc={pageUrl:window.location.href,kvPairs:[]};V("FEXP_EXPERIMENTS")&&(qc.experimentIds=V("FEXP_EXPERIMENTS"));var ah=kj();if(!lj()&&ah)for(var Ll=u(Object.keys(ah)),Nb=Ll.next();!Nb.done;Nb=Ll.next()){var Ml=Nb.value;qc.kvPairs.push({key:Ml,value:String(ah[Ml])})}var bh=R.params;if(bh){var Nl=u(Object.keys(bh));for(Nb=Nl.next();!Nb.done;Nb=Nl.next()){var Ol=Nb.value;qc.kvPairs.push({key:"client."+Ol,value:String(bh[Ol])})}}var Pl=V("SERVER_NAME"),Ql=V("SERVER_VERSION");
Pl&&Ql&&(qc.kvPairs.push({key:"server.name",value:Pl}),qc.kvPairs.push({key:"server.version",value:Ql}));Qg={errorMetadata:qc,stackTrace:kq,logMessage:$g}}var Rl=Qg;if(!Rl)break a;zp("clientError",Rl)}if("ERROR"===kd||W("errors_flush_gel_always_killswitch"))b:{if(W("web_fp_via_jspb")&&(wp(!0),!W("web_fp_via_jspb_and_json")))break b;wp()}}if(!W("suppress_error_204_logging")){var Ob=za,md=Ob.params||{},nb={urlParams:{a:"logerror",t:"jserror",type:Ob.name,msg:Ob.message.substr(0,250),line:Ob.lineNumber,
level:h,"client.name":md.name},postParams:{url:V("PAGE_NAME",window.location.href),file:Ob.fileName},method:"POST"};md.version&&(nb["client.version"]=md.version);if(nb.postParams){Ob.stack&&(nb.postParams.stack=Ob.stack);for(var Sl=u(Object.keys(md)),ch=Sl.next();!ch.done;ch=Sl.next()){var Tl=ch.value;nb.postParams["client."+Tl]=md[Tl]}var dh=kj();if(dh)for(var Ul=u(Object.keys(dh)),eh=Ul.next();!eh.done;eh=Ul.next()){var Vl=eh.value;nb.postParams[Vl]=dh[Vl]}var Wl=V("SERVER_NAME"),Xl=V("SERVER_VERSION");
Wl&&Xl&&(nb.postParams["server.name"]=Wl,nb.postParams["server.version"]=Xl)}Xj(V("ECATCHER_REPORT_HOST","")+"/error_204",nb)}try{Cp.add(za.message)}catch(pq){}Dp++}}}}}else throw nc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function dq(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function eq(a){return 0===a.search("get")||0===a.search("is")}
;function fq(a,b){Xp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ma={};this.playerInfo={};this.videoTitle=""}
w(fq,Xp);q=fq.prototype;q.dc=function(){var a=Tp(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Tp(this.i,"embedConfig")){if(Ra(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Yb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ra(a))for(var c in a)a.hasOwnProperty(c)&&(this.ma[c]=a[c]);break;case "infoDelivery":gq(this,a);break;case "initialDelivery":Ra(a)&&(window.clearInterval(this.j),this.playerInfo={},this.ma={},hq(this,a.apiInterface),gq(this,a));break;default:aq(this,b,a)}};
function gq(a,b){if(Ra(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.h.setAttribute("title",b))):(a.videoTitle="",a.h.setAttribute("title","YouTube "+Tp(a.i,"title"))))}}
function hq(a,b){F(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:dq(c)?this[c]=function(){this.playerInfo={};
this.ma={};cq(this,c,arguments);return this}:eq(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){cq(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Tp(this.i,"host")+("/embed/"+Tp(this.i,"videoId")),b=Number(Tp(this.i,"width")),c=Number(Tp(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ma.namespaces?a?this.ma[a]?this.ma[a].options||[]:[]:this.ma.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ma.namespaces&&a&&b&&this.ma[a])return this.ma[a][b]};
function lq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Qp(a,"videoid");b&&(b={videoId:b,width:Qp(a,"width"),height:Qp(a,"height")},new fq(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Mp[a]});
B("YT.scan",Pp);B("YT.subscribe",function(a,b,c){sg.subscribe(a,b,c);Op[a]=!0;for(var d in Mp)Mp.hasOwnProperty(d)&&$p(Mp[d],a)});
B("YT.unsubscribe",function(a,b,c){rg(a,b,c)});
B("YT.Player",fq);Xp.prototype.destroy=Xp.prototype.destroy;Xp.prototype.setSize=Xp.prototype.setSize;Xp.prototype.getIframe=Xp.prototype.getIframe;Xp.prototype.addEventListener=Xp.prototype.addEventListener;fq.prototype.getVideoEmbedCode=fq.prototype.getVideoEmbedCode;fq.prototype.getOptions=fq.prototype.getOptions;fq.prototype.getOption=fq.prototype.getOption;
Np.push(function(a){var b=a;b||(b=document);a=jb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=eb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=jb(b);F(ib(a,b),lq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Pp();var mq=A.onYTReady;mq&&mq();var nq=A.onYouTubeIframeAPIReady;nq&&nq();var oq=A.onYouTubePlayerAPIReady;oq&&oq();}).call(this);
