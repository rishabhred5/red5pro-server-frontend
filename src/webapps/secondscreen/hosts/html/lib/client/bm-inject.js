/*! red5pro-client-html-sdk - v0.5.2 - 2015-10-07
* Copyright (c) 2015 Infrared5; Licensed  */
!function(a,b){function c(a){var b=Array.prototype.splice.call(arguments,1),c=[a,b];j.push(JSON.stringify(c)),console.log(j),k||1!=j.length||(l?(g=g||d(),g.src="r5bridge://ready"):(h&&4!=h.readyState&&(h=null),h=h||new XMLHttpRequest,h.open("HEAD","/!r5_exec?"+ +new Date,!0),h.setRequestHeader("rc",++i),h.send(null)))}function d(){var a=document.createElement("iframe");return a.style.display="none",document.body.appendChild(a),a}function e(a){if("undefined"==typeof a)throw"undefined is not valid parameter";return a instanceof Object?JSON.stringify(a):null===a?"":a}function f(a){for(var b=Array.prototype.splice.call(arguments,1),d=0;d<b.length;++d)b[d]=e(b[d]);c("message",a,b)}var g,h,i=0,j=[],k=0,l="undefined"==typeof b?!0:b,m={},n={},o=function(){if(!j.length)return"";var a="["+j.join(",")+"]";return j.length=0,a},p=function(a){k++;try{return a(),o()}finally{k--}},q=function(a,b){void 0===m[a]&&(m[a]=[]),m[a].push(b);var c=n[a];if(void 0!==c){for(var d=0;d<c.length;++d)b.apply(null,c[d]);n[a]=void 0}},r=function(a,b){console.log(a,b);var c=m[a];if(void 0!==c)for(var d=0;d<c.length;++d)c[d].apply(null,b);else void 0===n[a]&&(n[a]=[]),n[a].push(b)};a.nativeFetchMessages=o,a.nativeEvalAndFetch=p,a.sendToHost=f,a.handleMessageFromNative=r,a.addCallback=q,a.getUnhandledMessages=function(){return n};var s;a.latencyReply=function(){var a=new Date-s;console.log(a),c("log",a)},a.testLatency=function(){s=new Date,c("latency-test")},a.sendButton=function(a,b){c("button",a,b)};var t=function(){c("ready",!0)},u=function(){"complete"===document.readyState?t():window.addEventListener("load",t,!1)};u()}(window,window.injectionUseIframe);