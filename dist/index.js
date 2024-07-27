"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=i(function(k,s){
var y=require('@stdlib/stats-base-dnanvariancewd/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,n){return x(y(e,r,a,n))}s.exports=f
});var v=i(function(z,u){
var j=require('@stdlib/stats-base-dnanvariancewd/dist').ndarray,m=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,n,p){return m(j(e,r,a,n,p))}u.exports=l
});var c=i(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=v();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),t,w=O(E(__dirname,"./native.js"));b(w)?t=g:t=w;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
