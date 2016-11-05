!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.RSVP=t.RSVP||{})}(this,function(t){"use strict";function r(t,r){for(var e=0,n=t.length;e<n;e++)if(t[e]===r)return e;return-1}function e(t){var r=t._promiseCallbacks;return r||(r=t._promiseCallbacks={}),r}function n(t,r){return"onerror"===t?void bt.on("error",r):2!==arguments.length?bt[t]:void(bt[t]=r)}function o(t){return"function"==typeof t||"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function u(t){return"object"==typeof t&&null!==t}function s(){}function a(){setTimeout(function(){for(var t=0;t<St.length;t++){var r=St[t],e=r.payload;e.guid=e.key+e.id,e.childGuid=e.key+e.childId,e.error&&(e.stack=e.error.stack),bt.trigger(r.name,r.payload)}St.length=0},50)}function c(t,r,e){1===St.push({name:t,payload:{key:r._guidKey,id:r._id,eventName:t,detail:r._result,childId:e&&e._id,label:r._label,timeStamp:At(),error:bt["instrument-with-stack"]?new Error(r._label):null}})&&a()}function f(t,r){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(h,r);return m(n,t),n}function l(){return new TypeError("A promises callback cannot return that same promise.")}function h(){}function p(t){try{return t.then}catch(r){return Rt.error=r,Rt}}function v(t,r,e,n){try{t.call(r,e,n)}catch(o){return o}}function d(t,r,e){bt.async(function(t){var n=!1,o=v(e,r,function(e){n||(n=!0,r!==e?m(t,e,void 0):g(t,e))},function(r){n||(n=!0,b(t,r))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,b(t,o))},t)}function _(t,r){r._state===Ot?g(t,r._result):r._state===Ct?(r._onError=null,b(t,r._result)):E(r,void 0,function(e){r!==e?m(t,e,void 0):g(t,e)},function(r){return b(t,r)})}function y(t,r,e){r.constructor===t.constructor&&e===O&&t.constructor.resolve===f?_(t,r):e===Rt?b(t,Rt.error):void 0===e?g(t,r):i(e)?d(t,r,e):g(t,r)}function m(t,r){t===r?g(t,r):o(r)?y(t,r,p(r)):g(t,r)}function w(t){t._onError&&t._onError(t._result),j(t)}function g(t,r){t._state===kt&&(t._result=r,t._state=Ot,0===t._subscribers.length?bt.instrument&&c("fulfilled",t):bt.async(j,t))}function b(t,r){t._state===kt&&(t._state=Ct,t._result=r,bt.async(w,t))}function E(t,r,e,n){var o=t._subscribers,i=o.length;t._onError=null,o[i]=r,o[i+Ot]=e,o[i+Ct]=n,0===i&&t._state&&bt.async(j,t)}function j(t){var r=t._subscribers,e=t._state;if(bt.instrument&&c(e===Ot?"fulfilled":"rejected",t),0!==r.length){for(var n=void 0,o=void 0,i=t._result,u=0;u<r.length;u+=3)n=r[u],o=r[u+e],n?S(e,n,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function T(t,r){try{return t(r)}catch(e){return Mt.error=e,Mt}}function S(t,r,e,n){var o=i(e),u=void 0,s=void 0,a=void 0,c=void 0;if(o){if(u=T(e,n),u===Mt?(c=!0,s=u.error,u=null):a=!0,r===u)return void b(r,l())}else u=n,a=!0;r._state!==kt||(o&&a?m(r,u):c?b(r,s):t===Ot?g(r,u):t===Ct&&b(r,u))}function k(t,r){var e=!1;try{r(function(r){e||(e=!0,m(t,r))},function(r){e||(e=!0,b(t,r))})}catch(n){b(t,n)}}function O(t,r,e){var n=arguments,o=this,i=o._state;if(i===Ot&&!t||i===Ct&&!r)return bt.instrument&&c("chained",o,o),o;o._onError=null;var u=new o.constructor(h,e),s=o._result;return bt.instrument&&c("chained",o,u),i?!function(){var t=n[i-1];bt.async(function(){return S(i,u,t,s)})}():E(o,u,t,r),u}function C(t,r,e){return t===Ot?{state:"fulfilled",value:e}:{state:"rejected",reason:e}}function R(t,r,e,n){this._instanceConstructor=t,this.promise=new t(h,n),this._abortOnReject=e,this._validateInput(r)?(this._input=r,this.length=r.length,this._remaining=r.length,this._init(),0===this.length?g(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&g(this.promise,this._result))):b(this.promise,this._validationError())}function M(t,r){return new R(this,t,(!0),r).promise}function P(t,r){var e=this,n=new e(h,r);if(!jt(t))return b(n,new TypeError("You must pass an array to race.")),n;for(var o=0;n._state===kt&&o<t.length;o++)E(e.resolve(t[o]),void 0,function(t){return m(n,t)},function(t){return b(n,t)});return n}function I(t,r){var e=this,n=new e(h,r);return b(n,t),n}function x(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function Y(t,r){this._id=It++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],bt.instrument&&c("created",this),h!==t&&("function"!=typeof t&&x(),this instanceof Y?k(this,t):N())}function D(){this.value=void 0}function K(t){try{return t.then}catch(r){return xt.value=r,xt}}function U(t,r,e){try{t.apply(r,e)}catch(n){return xt.value=n,xt}}function q(t,r){for(var e={},n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=t[i];for(var u=0;u<r.length;u++){var s=r[u];e[s]=o[u+1]}return e}function V(t){for(var r=t.length,e=new Array(r-1),n=1;n<r;n++)e[n-1]=t[n];return e}function F(t,r){return{then:function(e,n){return t.call(r,e,n)}}}function G(t,r){var e=function(){for(var e=this,n=arguments.length,o=new Array(n+1),i=!1,u=0;u<n;++u){var s=arguments[u];if(!i){if(i=$(s),i===Nt){var a=new Y(h);return b(a,Nt.value),a}i&&i!==!0&&(s=F(i,s))}o[u]=s}var c=new Y(h);return o[n]=function(t,e){t?b(c,t):void 0===r?m(c,e):r===!0?m(c,V(arguments)):jt(r)?m(c,q(arguments,r)):m(c,e)},i?W(c,o,t,e):L(c,o,t,e)};return e.__proto__=t,e}function L(t,r,e,n){var o=U(e,n,r);return o===xt&&b(t,o.value),t}function W(t,r,e,n){return Y.all(r).then(function(r){var o=U(e,n,r);return o===xt&&b(t,o.value),t})}function $(t){return!(!t||"object"!=typeof t)&&(t.constructor===Y||K(t))}function z(t,r){return Y.all(t,r)}function B(t,r,e){this._superConstructor(t,r,!1,e)}function H(t,r){return new B(Y,t,r).promise}function J(t,r){return Y.race(t,r)}function Q(t,r,e){this._superConstructor(t,r,!0,e)}function X(t,r){return new Q(Y,t,r).promise}function Z(t,r,e){this._superConstructor(t,r,!1,e)}function tt(t,r){return new Z(Y,t,r).promise}function rt(t){throw setTimeout(function(){throw t}),t}function et(t){var r={resolve:void 0,reject:void 0};return r.promise=new Y(function(t,e){r.resolve=t,r.reject=e},t),r}function nt(t,r,e){return Y.all(t,e).then(function(t){if(!i(r))throw new TypeError("You must pass a function as map's second argument.");for(var n=t.length,o=new Array(n),u=0;u<n;u++)o[u]=r(t[u]);return Y.all(o,e)})}function ot(t,r){return Y.resolve(t,r)}function it(t,r){return Y.reject(t,r)}function ut(t,r){return Y.all(t,r)}function st(t,r){return Y.resolve(t,r).then(function(t){return ut(t,r)})}function at(t,r,e){var n=jt(t)?ut(t,e):st(t,e);return n.then(function(t){if(!i(r))throw new TypeError("You must pass a function as filter's second argument.");for(var n=t.length,o=new Array(n),u=0;u<n;u++)o[u]=r(t[u]);return ut(o,e).then(function(r){for(var e=new Array(n),o=0,i=0;i<n;i++)r[i]&&(e[o]=t[i],o++);return e.length=o,e})})}function ct(t,r){Gt[Yt]=t,Gt[Yt+1]=r,Yt+=2,2===Yt&&Lt()}function ft(){var t=process.nextTick,r=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(r)&&"0"===r[1]&&"10"===r[2]&&(t=setImmediate),function(){return t(dt)}}function lt(){return"undefined"!=typeof Dt?function(){Dt(dt)}:vt()}function ht(){var t=0,r=new qt(dt),e=document.createTextNode("");return r.observe(e,{characterData:!0}),function(){return e.data=t=++t%2}}function pt(){var t=new MessageChannel;return t.port1.onmessage=dt,function(){return t.port2.postMessage(0)}}function vt(){return function(){return setTimeout(dt,1)}}function dt(){for(var t=0;t<Yt;t+=2){var r=Gt[t],e=Gt[t+1];r(e),Gt[t]=void 0,Gt[t+1]=void 0}Yt=0}function _t(){try{var t=require,r=t("vertx");return Dt=r.runOnLoop||r.runOnContext,lt()}catch(e){return vt()}}function yt(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function mt(){bt.on.apply(bt,arguments)}function wt(){bt.off.apply(bt,arguments)}var gt={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,n){if("function"!=typeof n)throw new TypeError("Callback must be a function");var o=e(this),i=void 0;i=o[t],i||(i=o[t]=[]),r(i,n)===-1&&i.push(n)},off:function(t,n){var o=e(this),i=void 0,u=void 0;return n?(i=o[t],u=r(i,n),void(u!==-1&&i.splice(u,1))):void(o[t]=[])},trigger:function(t,r,n){var o=e(this),i=void 0,u=void 0;if(i=o[t])for(var s=0;s<i.length;s++)(u=i[s])(r,n)}},bt={instrument:!1};gt.mixin(bt);var Et=void 0;Et=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var jt=Et,At=Date.now||function(){return(new Date).getTime()},Tt=Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return s.prototype=t,new s},St=[],kt=void 0,Ot=1,Ct=2,Rt=new A,Mt=new A;R.prototype._validateInput=function(t){return jt(t)},R.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},R.prototype._init=function(){this._result=new Array(this.length)},R.prototype._enumerate=function(){for(var t=this.length,r=this.promise,e=this._input,n=0;r._state===kt&&n<t;n++)this._eachEntry(e[n],n)},R.prototype._settleMaybeThenable=function(t,r){var e=this._instanceConstructor,n=e.resolve;if(n===f){var o=p(t);if(o===O&&t._state!==kt)t._onError=null,this._settledAt(t._state,r,t._result);else if("function"!=typeof o)this._remaining--,this._result[r]=this._makeResult(Ot,r,t);else if(e===Y){var i=new e(h);y(i,t,o),this._willSettleAt(i,r)}else this._willSettleAt(new e(function(r){return r(t)}),r)}else this._willSettleAt(n(t),r)},R.prototype._eachEntry=function(t,r){u(t)?this._settleMaybeThenable(t,r):(this._remaining--,this._result[r]=this._makeResult(Ot,r,t))},R.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===kt&&(this._remaining--,this._abortOnReject&&t===Ct?b(n,e):this._result[r]=this._makeResult(t,r,e)),0===this._remaining&&g(n,this._result)},R.prototype._makeResult=function(t,r,e){return e},R.prototype._willSettleAt=function(t,r){var e=this;E(t,void 0,function(t){return e._settledAt(Ot,r,t)},function(t){return e._settledAt(Ct,r,t)})};var Pt="rsvp_"+At()+"-",It=0;Y.cast=f,Y.all=M,Y.race=P,Y.resolve=f,Y.reject=I,Y.prototype={constructor:Y,_guidKey:Pt,_onError:function(t){var r=this;bt.after(function(){r._onError&&bt.trigger("error",t,r._label)})},then:O,"catch":function(t,r){return this.then(void 0,t,r)},"finally":function(t,r){var e=this,n=e.constructor;return e.then(function(r){return n.resolve(t()).then(function(){return r})},function(r){return n.resolve(t()).then(function(){throw r})},r)}};var xt=new D,Nt=new D;B.prototype=Tt(R.prototype),B.prototype._superConstructor=R,B.prototype._makeResult=C,B.prototype._validationError=function(){return new Error("allSettled must be called with an array")},Q.prototype=Tt(R.prototype),Q.prototype._superConstructor=R,Q.prototype._init=function(){this._result={}},Q.prototype._validateInput=function(t){return t&&"object"==typeof t},Q.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},Q.prototype._enumerate=function(){var t=this,r=t.promise,e=t._input,n=[];for(var o in e)r._state===kt&&Object.prototype.hasOwnProperty.call(e,o)&&n.push({position:o,entry:e[o]});var i=n.length;t._remaining=i;for(var u=void 0,s=0;r._state===kt&&s<i;s++)u=n[s],t._eachEntry(u.entry,u.position)},Z.prototype=Tt(Q.prototype),Z.prototype._superConstructor=R,Z.prototype._makeResult=C,Z.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var Yt=0,Dt=void 0,Kt="undefined"!=typeof window?window:void 0,Ut=Kt||{},qt=Ut.MutationObserver||Ut.WebKitMutationObserver,Vt="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Ft="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Gt=new Array(1e3),Lt=void 0;Lt=Vt?ft():qt?ht():Ft?pt():void 0===Kt&&"function"==typeof require?_t():vt();var Wt=void 0;if("object"==typeof self)Wt=self;else{if("object"!=typeof global)throw new Error("no global: `self` or `global` found");Wt=global}var $t;bt.async=ct,bt.after=function(t){return setTimeout(t,0)};var zt=ot,Bt=function(t,r){return bt.async(t,r)};if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Ht=window.__PROMISE_INSTRUMENTATION__;n("instrument",!0);for(var Jt in Ht)Ht.hasOwnProperty(Jt)&&mt(Jt,Ht[Jt])}var Qt=($t={cast:zt,Promise:Y,EventTarget:gt,all:z,allSettled:H,race:J,hash:X,hashSettled:tt,rethrow:rt,defer:et,denodeify:G,configure:n,on:mt,off:wt,resolve:ot,reject:it,map:nt},yt($t,"async",Bt),yt($t,"filter",at),$t);t["default"]=Qt,t.cast=zt,t.Promise=Y,t.EventTarget=gt,t.all=z,t.allSettled=H,t.race=J,t.hash=X,t.hashSettled=tt,t.rethrow=rt,t.defer=et,t.denodeify=G,t.configure=n,t.on=mt,t.off=wt,t.resolve=ot,t.reject=it,t.map=nt,t.async=Bt,t.filter=at,Object.defineProperty(t,"__esModule",{value:!0})});