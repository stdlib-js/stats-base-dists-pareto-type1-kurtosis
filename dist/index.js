"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=o(function(f,s){
var t=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-pow/dist');function v(r,e){var i;return t(r)||r<=4||t(e)||e<=0?NaN:(i=6*(u(r,3)+u(r,2)-6*r-2),i/=r*(r-3)*(r-4),i)}s.exports=v
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
