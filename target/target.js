var h=this;
function k(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
c&&"undefined"==typeof a.call)return"object";return c}function l(a){var c=k(a);return"array"==c||"object"==c&&"number"==typeof a.length}function m(a){return"string"==typeof a}function n(a){var c=typeof a;return"object"==c&&null!=a||"function"==c}function p(a){var c=q;function b(){}b.prototype=c.prototype;a.b=c.prototype;a.prototype=new b;a.prototype.constructor=a};function r(a){if(!v.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(aa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ba,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ca,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(da,"&quot;"));return a}var aa=/&/g,ba=/</g,ca=/>/g,da=/\"/g,v=/[&<>\"]/;function w(a,c){return a<c?-1:a>c?1:0};var x=Array.prototype,ea=x.indexOf?function(a,c,b){return x.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if(m(a))return m(c)&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},fa=x.forEach?function(a,c,b){x.forEach.call(a,c,b)}:function(a,c,b){for(var e=a.length,g=m(a)?a.split(""):a,d=0;d<e;d++)d in g&&c.call(b,g[d],d,a)};function ga(a){var c=a.length;if(0<c){for(var b=Array(c),e=0;e<c;e++)b[e]=a[e];return b}return[]}
function ha(a,c,b){return 2>=arguments.length?x.slice.call(a,c):x.slice.call(a,c,b)};var y,z,A,B;function C(){return h.navigator?h.navigator.userAgent:null}B=A=z=y=!1;var D;if(D=C()){var ia=h.navigator;y=0==D.indexOf("Opera");z=!y&&-1!=D.indexOf("MSIE");A=!y&&-1!=D.indexOf("WebKit");B=!y&&!A&&"Gecko"==ia.product}var E=z,F=B,ja=A;function G(){var a=h.document;return a?a.documentMode:void 0}var H;
a:{var I="",J;if(y&&h.opera)var K=h.opera.version,I="function"==typeof K?K():K;else if(F?J=/rv\:([^\);]+)(\)|;)/:E?J=/MSIE\s+([^\);]+)(\)|;)/:ja&&(J=/WebKit\/(\S+)/),J)var L=J.exec(C()),I=L?L[1]:"";if(E){var M=G();if(M>parseFloat(I)){H=String(M);break a}}H=I}var N={};
function O(a){if(!N[a]){for(var c=0,b=String(H).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(b.length,e.length),d=0;0==c&&d<g;d++){var f=b[d]||"",s=e[d]||"",ka=RegExp("(\\d*)(\\D*)","g"),la=RegExp("(\\d*)(\\D*)","g");do{var t=ka.exec(f)||["","",""],u=la.exec(s)||["","",""];if(0==t[0].length&&0==u[0].length)break;c=w(0==t[1].length?0:parseInt(t[1],10),0==u[1].length?0:parseInt(u[1],10))||w(0==t[2].length,0==u[2].length)||w(t[2],
u[2])}while(0==c)}N[a]=0<=c}}var P=h.document,Q=P&&E?G()||("CSS1Compat"==P.compatMode?parseInt(H,10):5):void 0;var ma=!E||E&&9<=Q;!F&&!E||E&&E&&9<=Q||F&&O("1.9.1");E&&O("9");function na(a,c){var b;b=a.className;b=m(b)&&b.match(/\S+/g)||[];for(var e=ha(arguments,1),g=b.length+e.length,d=b,f=0;f<e.length;f++)0<=ea(d,e[f])||d.push(e[f]);a.className=b.join(" ");return b.length==g};function oa(a,c){for(var b in a)c.call(void 0,a[b],b,a)}var R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,c){for(var b,e,g=1;g<arguments.length;g++){e=arguments[g];for(b in e)a[b]=e[b];for(var d=0;d<R.length;d++)b=R[d],Object.prototype.hasOwnProperty.call(e,b)&&(a[b]=e[b])}};function qa(a,c){oa(c,function(b,c){"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:c in S?a.setAttribute(S[c],b):0==c.lastIndexOf("aria-",0)||0==c.lastIndexOf("data-",0)?a.setAttribute(c,b):a[c]=b})}var S={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ra(a,c,b){var e=arguments,g=document,d=e[0],f=e[1];if(!ma&&f&&(f.name||f.type)){d=["<",d];f.name&&d.push(' name="',r(f.name),'"');if(f.type){d.push(' type="',r(f.type),'"');var s={};pa(s,f);delete s.type;f=s}d.push(">");d=d.join("")}d=g.createElement(d);f&&(m(f)?d.className=f:"array"==k(f)?na.apply(null,[d].concat(f)):qa(d,f));2<e.length&&sa(g,d,e);return d}
function sa(a,c,b){function e(b){b&&c.appendChild(m(b)?a.createTextNode(b):b)}for(var g=2;g<b.length;g++){var d=b[g];if(!l(d)||n(d)&&0<d.nodeType)e(d);else{var f;a:{if(d&&"number"==typeof d.length){if(n(d)){f="function"==typeof d.item||"string"==typeof d.item;break a}if("function"==k(d)){f="function"==typeof d.item;break a}}f=!1}fa(f?ga(d):d,e)}}};E&&O(8);var T={};function q(){throw Error("Do not instantiate directly");}q.prototype.toString=function(){return this.content};function U(){q.call(this)}p(U);U.prototype.a=T;function V(){q.call(this)}p(V);V.prototype.a={};function W(){q.call(this)}p(W);W.prototype.a={};function X(){q.call(this)}p(X);X.prototype.a={};function Y(){q.call(this)}p(Y);Y.prototype.a={};function Z(){q.call(this)}p(Z);Z.prototype.a={};function $(a){return a&&a.a&&a.a===T?a.content:String(a).replace(ta,ua)}
var va={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function ua(a){return va[a]}var ta=/[\x00\x22\x26\x27\x3c\x3e]/g;(function(a){if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var c=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(a(),clearInterval(c))},10);else window.onload=a})(function(){var a=ra("h1","a","Hello world!");document.body.appendChild(a);var c=a.innerHTML,b;b=(new Date).getFullYear();b='<h1 id="greeting">'+$("LOLWOW")+"</h1>The year is "+$(b)+".";a.innerHTML=c+b});

//# sourceMappingURL=target.js.map