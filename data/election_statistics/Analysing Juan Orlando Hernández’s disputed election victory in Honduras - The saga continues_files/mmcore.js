/*! Copyright ? 2015, 2016, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.11 */
/*v1.11.22.0679*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(b,O){function h(a,c){return typeof a===c}function A(a){return h(a,"undefined")}function w(a,c){return Object.prototype.hasOwnProperty.call(a,c)}function B(a,c){return w(a,c)&&h(a[c],"string")}function K(a,c,d){try{h(a,"function")&&a.apply(c,d)}catch(b){P&&P.log(b)}}function e(a,c){for(var d in a)w(a,d)&&c(a[d],d)}function L(a){var c=new Date;c.setTime(c.getTime()+864E5*a);return c}function Q(a){this.enableUtility=function(c){var d=a.getParam("un",a.baseStorage.storeStrategy.persistent)||
"";(new RegExp("(^|,)"+c+"($|,)")).test(d)||(d=d.split(","),d.push(c),a.setParam("un",d.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(c){var d=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(d)&&(d=d.replace(new RegExp("(^|,)"+c+"($|,)","gi"),",").replace(/(^,)|(,$)/g,""),a.setParam("un",d,a.baseStorage.storeStrategy.persistent));return this};this.enable=function(){a.enable();return this};
this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}function H(a){function c(){for(var a=document.cookie.split(/;\s+/g),c={},d=0;d<a.length;d++){var b=a[d].split(/;|=/);1<b.length&&(c[b[0]]=b[1])}return c}
var d=this,b=a.domain,h=a.secure,k=encodeURIComponent,t=decodeURIComponent;d.set=function(a,c,t,e){e||(c=k(c));a=k(a)+"="+c+";domain="+b+";path=/"+(t?";expires="+L(t).toGMTString():"")+(h?";secure":"");document.cookie=a;return d};d.remove=function(a){d.set(a,"",-1);return d};d.removeAll=function(a){if(a){var b=c();e(b,function(c,b){(new RegExp("^"+a)).test(b)&&d.remove(t(b))})}};d.get=function(a,c){var b=new RegExp("(?:^|; )"+k(a).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)"),b=(document.cookie.match(b)||
[,""])[1];return c?b:t(b)};d.getAll=function(a,b){if(a){var d=c(),k={};e(d,function(c,d){(new RegExp("^"+a)).test(d)&&(k[t(d)]=b?c:t(c))});return k}}}function ca(a){function c(a){a=JSON.parse('{"v":'+a+"}");return"v"in a?a.v:a}if(!/^((cookie-key-value)|(cookie-key-value-secure))$/.test(a.type))throw"(mm module: storage) Invalid storage type: "+a.type;var b="cookie-key-value-secure"===a.type,m=a.cprefix+"."+(a.namespace||"def")+".",h=m.replace(/\./g,"\\."),k=new H({domain:a.domain,secure:b});this.get=
function(a){if(!a){a=k.getAll(h);var b=m.length,d={};e(a,function(a,e){d[e.substring(b)]=c(a)});return d}return(a=k.get(m+a))?c(a):a};this.set=function(a,b,c){null===b||A(b)||(b=JSON.stringify({v:b}),b=b.substring(5,b.length-1),k.set(m+a,b,A(c)?365:c));return this};this.removeAll=function(){k.removeAll(h);return this};this.testStorage=function(){var a=(""+Math.random()).substring(0,5);k.set(m+"tst",a,10);a=k.get(m+"tst",!0)===a?1:0;k.remove(m+"tst");return a}}function da(a){function b(a,c){var d=
{};e(a,function(a,b){d[b]=a});e(c,function(a,b){d[b]=a});return d}function d(a){for(var b={},c="",d=0,e;e=y.get(a+d++,!0);)c+=e;c=decodeURIComponent(c);try{b=JSON.parse(c)}catch(f){}return b}function m(){q=d(I);v=d(B);w();q[r]=q[r]||{};v[r]=v[r]||{}}function h(a,b,c){b=JSON.stringify(b);var d="{}"===b,e=0;for(b=encodeURIComponent(b);y.get(a+e,!0);)y.remove(a+e++);if(!d)for(e=0;d=b.substr(3E3*e,3E3);)y.set(a+e++,d,A(c)?365:c,!0)}function k(){h(I,q);h(B,v,0)}function t(a){var b={};e(a,function(a,c){b[c]=
E(a).v});return b}function w(){var a=(new Date).getTime(),b=q[r];e(b,function(c,d){E(c).e<=a&&delete b[d]});k()}function E(a){var b=a.indexOf("|");return{v:JSON.parse(a.substring(b+1,a.length)),e:a.substring(0,b)}}if(!/^((cookie)|(cookie-secure))$/.test(a.type))throw"(mm module: storage) Invalid storage type: "+a.type;var q,v,x=a.cprefix+".",I=x+"store.p.",B=x+"store.s.",y=new H({domain:a.domain,secure:"cookie-secure"===a.type}),r=a.namespace||"def";this.get=function(a){m();var d=b(q[r],v[r]);return a?
d[a]?E(d[a]).v:d[a]:t(d)};this.set=function(a,b,c){m();var d=q[r],e=v[r];delete d[a];delete e[a];null===b||A(b)||(c?(b=L(c).getTime()+"|"+JSON.stringify(b),d[a]=b):e[a]="0|"+JSON.stringify(b));k();return this};this.removeAll=function(){m();q[r]={};v[r]={};k();return this};this.testStorage=function(){var a=(""+Math.random()).substring(0,5);y.set(x+"tst",a,10);a=y.get(x+"tst",!0)===a?1:0;y.remove(x+"tst");return a};this.exportData=function(){m();var a={};e(q,function(b,c){a[c]=b});e(v,function(d,e){a[e]=
b(a[e],d)});e(a,function(b,c){e(b,function(b,d){a[c][d]=E(b)})});return a};m()}function S(a){function c(a,g){if(z[a])for(var b=z[a].length-1;0<=b;b--)z[a][b].call({},g)}function d(a){F=h(a,"boolean")?a:!1}function m(a,b,C){C=C||{};C.type="text/javascript";C.id=a;C.src=b;if(F){a=document.getElementsByTagName("head")[0];var J=document.createElement("script");e(C,function(a,p){J.setAttribute(p,a)});a.insertBefore(J,a.lastChild)}else{var c="";e(C,function(a,p){c+=" "+p+'="'+a+'"'});document.write("<script"+
c+">\x3c/script>")}}function L(a){if(!h(a,"object"))return a;if(a.constructor===Array)return a.join(";");var b=[];e(a,function(a,p){a.constructor===Array?e(a,function(a){b.push(p+"="+a)}):b.push(p+"="+encodeURIComponent(a))});return b.join(";")}function k(a){a=a?I(a):{};var b={};h(a["mm-dlp-api"],"string")&&(b.fv={ref:a["original-ref"].substring(0,256),url:a["original-url"].substring(0,1024)},b.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(b.fv.url)[0]);e(a,function(a,p){"mmcore."===p.substring(0,7)&&(b[p.substring(7)]=
a)});return b}function t(){var p="mmRequestCallbacks["+G+"]",g={},c=b.screen;g.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:c.width,scrh:c.height,clrd:c.colorDepth,cok:u[l.persistent].testStorage()};g.lver="1.11";g.jsncl=p;g.ri=G;g.lto=-(new Date).getTimezoneOffset();return g}function Q(p,g){var c=p&&p.Packages||[],d=c.length;if(0<d){b.mmInitCallback=function(a){a(f,p,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0,debug:fa});
0===--d&&(g(),b.mmInitCallback=O)};for(var n=0;n<c.length;n++)m("mmpack."+n,0===c[n].indexOf("//")?c[n]:a.baseContentUrl+c[n])}else g()}function E(a){(a=document.getElementById(a))&&a.parentNode?a.parentNode.removeChild(a):a&&a.removeAttribute("src")}function q(a,g,d){a=(Z[a-1]=g)&&g.PersistData||[];var J=g&&g.SystemData&&g.SystemData[0]&&g.SystemData[0].ResponseId||0;if(J>=aa){for(var n=a.length;n--;)f.setParam(a[n].Name,a[n].Value,l.persistent,a[n].Expiration);aa=J}if(B(g,"mmcoreResponse")&&w(b,
"mmcore"))try{Function(g.mmcoreResponse).call(b)}catch(e){P.log(e)}c("response",g);d(!!g);c("responseExecuted",g)}function v(a,g){var c="mmrequest."+G;(function(a,p){b.mmRequestCallbacks[a]=function(g){E(c);var d=function(){1===a?Q(g,function(){q(a,g,p);var c=k(document.location.search).origin;c&&b.parent&&b.parent.postMessage&&b.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),c)}):q(a,g,p)};if(0!=M.length)for(var e=0;e<M.length;e++)M[e](g,d);else d();F=!0;delete b.mmRequestCallbacks[a]}})(G,
g);m(c,a,{onerror:"window['mmRequestCallbacks']["+G+"](false);"});G++}function x(){var a={};return{get:function(b){return b?a[b]:a},set:function(b,c,d){0>parseInt(d)?delete a[b]:a[b]=c},removeAll:function(){a={}}}}function I(a){a=a.split(/\?|&/);for(var b={},c,d,n=0;n<a.length;n++)if(a[n]){c=a[n].split("=");try{d=decodeURIComponent(c[1]||"")}catch(e){d=c[1]||""}b[c[0]]=d}return b}function S(a){function b(a,p,g){var e,f;if(e=d[a]){c[a]=p;e=e.split(/;/);for(var k=0;k<e.length;k++)f=e[k].split("="),
(a=f[0].replace(/^\s+|\s+$/gm,""))&&g(p,a,f[1]||"")}}var c={},d=I(a);N||(c.pageid=d.pageid);c.jsver=d.jsver;b("uv",{},function(a,b,c){w(a,b)||(a[b]=[]);a[b].push(c)});b("uat",{},function(a,b,c){a[b]=decodeURIComponent(c)});b("ids",{},function(a,b,c){c&&(a[b]=decodeURIComponent(c))});b("rul",[],function(a,b,c){a.push(b)});return c}function y(){if(w(b,"mmcore")){var c=b.mmcore;c.server=a.srv;f.CGRequestInternal=f.CGRequest;f.CGRequest=function(a,b){N=!0;T=a;U=b;c.CGRequest()};var d=c._Tag;c._Tag=function(b){if(-1==
b.indexOf(a.srv))d.apply(c,arguments);else{c._Clear.call(c);var e=f.mergeParams(U,S(b));ba=F;N||(F=c._async);f.CGRequestInternal(T,e);F=ba;U=T=O;N=!1}};var e=c.SetCookie;c.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||e.apply(c,arguments)}}}function r(a){return a||b.location.hostname.replace(/^www\./i,"")}function R(a,b,c){var d="";0<b.length&&"."!=b.substring(b.length-1)&&(d=".");b=b+d+c;d=a.get(b);h(d,"string")&&d&&(f.setParam(c,d,l.persistent,365),a.remove(b))}function X(a){var c;c=w(b,"mmcore")&&
b.mmcore.cookie_domain?b.mmcore.cookie_domain:B(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:a.cookie_domain;a=w(b,"mmcore")&&b.mmcore.cprefix?b.mmcore.cprefix:B(a,"mmcoreCprefix")?a.mmcoreCprefix:a.cprefix+".";c=new H({domain:r(c)});R(c,a,"pd");R(c,a,"srv");R(c,"","mmid")}function W(a){var b=f.getParam,c=function(a,b,c,d){f.setParam(a,b,A(c)?1:c,d)};K(a.beforeInit,{},[b,c,{getParam:b,setParam:c,validateResponses:f.validateResponses,disable:function(){D[l.page].set("disabled",1)},setAsync:d}]);Y()||
(f.on("request",function(){K(a.beforeRequest,{},[b,c])}),f.on("response",function(d){K(a.afterResponse,{},[b,c,d])}),f.on("responseExecuted",function(d){K(a.afterResponseExecution,{},[b,c,d])}))}function ea(a){b.mmcoreInitCallback=function(c){X(a);y();f.CGRequest(function(){h(c,"function")&&c.apply(b.mmcore,arguments)},{});delete b.mmcoreInitCallback};"local"!==a.mmcoreUrl&&m("mmcoreIntegration",a.mmcoreUrl)}function Y(){return 1==D[l.persistent].get("disabled")||1==D[l.page].get("disabled")}this.version=
"1.11";var f=this,Z=[],G=1,F=!1,z={},fa={},u=[],D=[],l={persistent:0,deferredRequest:1,request:2,page:3},M=[],aa=0,T,U,ba,N=!1,V=null!==a.storageType.match(/.*-secure$/);this.baseStorage=function(){var b=r(a.cookie_domain),c=a.cprefix+"\\.store\\.p\\.",d=a.cprefix+"\\.store\\.s\\.",f=function(c){return function(d){var e={p:"mmparams.p",d:"mmparams.d",e:"mmengine"};return new da({type:c,namespace:e[d]?e[d]:d,domain:b,cprefix:a.cprefix})}},n=function(c){return function(d){var e={"mmparams.p":"p","mmparams.d":"d",
mmengine:"e"};return new ca({type:c,namespace:e[d]?e[d]:d,domain:b,cprefix:a.cprefix})}};if(a.storageType.match(/cookie-key-value($|-secure$)/)){var k=f("cookie"),l=n(a.storageType),f=k().exportData(),h=!1;e(f,function(a,b){var c=l(b);e(a,function(a,b){h=!0;var d;d=a.e;d=(d=parseInt(d))?Math.round(Math.abs(((new Date).getTime()-d)/864E5)):d;c.set(b,a.v,0<=d?d:30)})});h&&(f=new H({domain:b,secure:V}),f.removeAll(c),f.removeAll(d));return l}var k=f(a.storageType),l=n("cookie-key-value"),f=new H({domain:b,
secure:V}),f=f.getAll(a.cprefix+"\\.",!0),m={};e(f,function(a,b){var c=b.split(/\./);if(2<c.length&&"store"!=c[1]){var d=m[c[1]];d||(d=l(c[1]),m[c[1]]=d);var e=k(c[1]),c=b.substring((c[0]+"."+c[1]+".").length);a=d.get(c);e.set(c,a,30)}});e(m,function(a){a.removeAll()});return k}();this.baseStorage.storeStrategy=l;this.baseStorage.isSecure=V;this.mergeParams=function(a,b){a=A(a)?{}:a;b=A(b)?{}:b;if(!h(b,"object"))return b;var c={};h(a,"object")&&e(a,function(a,b){c[b]=a});e(b,function(a,d){c[d]=c[d]?
c[d].constructor===Array&&b[d].constructor===Array?c[d].concat(a):f.mergeParams(c[d],a):a});return c};this.CGRequest=function(d,g){d=d||function(){};g=g||{};b.mmRequestCallbacks=b.mmRequestCallbacks||{};c("request");var h=f.mergeParams(t(),f.mergeParams(f.mergeParams(u[l.persistent].get(),f.mergeParams(u[l.deferredRequest].get(),f.mergeParams(u[l.page].get(),u[l.request].get()))),k(location.search))),m=[],n=a.srv,h=f.mergeParams(h,g);e(h,function(a,b){m.push(encodeURIComponent(b)+"="+encodeURIComponent(L(a)))});
u[l.deferredRequest].removeAll();u[l.request].removeAll();v(n+m.join("&"),d);return this};this.getResponses=function(){return Z};this.setParam=function(a,b,c,d){u[c].set(a,b,d);return this};this.getParam=function(a,b){return u[b].get(a)};this.removeParam=function(a,b){u[b].set(a,"",-1);return this};this.on=function(a,b){z[a]&&z[a].push(b);return f};this.disable=function(){D[l.persistent].set("disabled",1,0);return this};this.enable=function(){D[l.persistent].set("disabled",null,-1);return this};this.validateResponses=
function(a){h(a,"function")&&M.push(a)};(function(a){function c(){W(a);Y()||(B(a,"mmcoreUrl")&&a.mmcoreUrl?ea(a):(X(a),f.CGRequest(O,{})))}e(a,function(a,b){f[b]=a});var h=k(document.location.search);if(1!=h.disabled){f.calcCookieDomain=r(f.cookie_domain);d(a.async);D[l.persistent]=f.baseStorage("ls");D[l.page]=x();u[l.persistent]=f.baseStorage("p");u[l.deferredRequest]=f.baseStorage("d");u[l.request]=x();u[l.page]=x();z.request=[];z.response=[];z.responseExecuted=[];var q=k(document.referrer).pruh,
h=h.pruh,n=b.mmpruh,t=f.getParam("pruh",0),v=(q?q+",":"")+(h?h+",":"")+(n?n+",":"")+(t?t:"");v?(b.mmInitCallback=function(a){a(f,v,c)},m("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):c()}})(a);return this}if(!b.mmsystem){var P=b.console||{log:function(){},error:function(){}},W=new S({
 storageType:'cookie',
 cprefix:'mmapi',
 domain:'economist.com',
 baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
 cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
 srv:'//service.maxymiser.net/cg/v5/?',
 async:false,
 mmcoreUrl:'',
 mmcoreCookieDomain:'',
 mmcoreCprefix:'',
 beforeInit: function( getParam, setParam, loader ) {
   var cookie_domain = location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]);
   var getCookie = function(name) { var value = "; " + document.cookie; var parts = value.split("; " + name + "="); if (parts.length === 2) return parts.pop().split(";").shift();};
   var createCookie = function(name, value, days, domain) { var expires; if (days) { var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); expires = "; expires=" + date.toGMTString();} else { expires = "";} document.cookie = name + "=" + value + expires + "; domain=" + domain +";path=/";};
   if(/campaign=bulk|fsrc=bulk/gi.test(window.location.search) || getCookie('blk') === '1') {
     loader.disable();
     createCookie('blk', '1', 365, cookie_domain);
   }
 },
 beforeRequest:function( getParam, setParam ){   },
 afterResponse:function( getParam, setParam, genInfo ){   },
 afterResponseExecution:function( getParam, setParam, genInfo ){   }
});b.mmsystem=new Q(W)}})(window);
