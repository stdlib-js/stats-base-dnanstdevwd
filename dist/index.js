"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(k,d){
var p=require('@stdlib/stats-base-dnanvariancewd/dist').ndarray,w=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,n,a,f){return w(p(e,r,n,a,f))}d.exports=x
});var v=i(function(z,u){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=t();function l(e,r,n,a){return m(e,r,n,a,j(e,a))}u.exports=l
});var c=i(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=t();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,y=O(E(__dirname,"./native.js"));b(y)?s=g:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
