(function(){for(var k,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da=["String",
"prototype","startsWith"],ea=0;ea<da.length-1;ea++){var ga=da[ea];ga in ca||(ca[ga]={});ca=ca[ga]}
var ha=da[da.length-1],ia=ca[ha],ja=ia?ia:function(a,b){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");c=this+"";a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
ja!=ia&&null!=ja&&ba(ca,ha,{configurable:!0,writable:!0,value:ja});var m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&Object.prototype.hasOwnProperty.call(c,d)?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function ka(){}
function la(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function oa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function pa(a){return"array"==oa(a)}
function qa(a){var b=oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){return"string"==typeof a}
function ra(a){return"function"==oa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ta(a){return a[ua]||(a[ua]=++va)}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?wa:xa;return u.apply(null,arguments)}
function ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function za(a,b){for(var c in b)a[c]=b[c]}
var v=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Aa(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Aa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Ba(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Ca(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ca);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(Ca,Error);Ca.prototype.name="CustomError";function Da(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ea(a){var b=Fa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ga(){var a=Ha,b;for(b in a)return!1;return!0}
function Ia(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ja(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ka.length;f++)c=Ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Na(a,b){return a<b?-1:a>b?1:0}
function Oa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;function Pa(a){a&&(a.dataset?a.dataset[Qa("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ra(a,b){return a?a.dataset?a.dataset[Qa(b)]:a.getAttribute("data-"+b):null}
var Sa={};function Qa(a){return Sa[a]||(Sa[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Ta(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var Ua=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Va="Microsoft Internet Explorer"==navigator.appName;function x(){this.f=this.f;this.G=this.G}
x.prototype.f=!1;x.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function Wa(a,b){a.f?p(void 0)?b.call(void 0):b():(a.G||(a.G=[]),a.G.push(p(void 0)?u(b,void 0):b))}
x.prototype.o=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function Xa(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Ya(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];qa(d)?Ya.apply(null,d):Xa(d)}}
;var y;a:{var Za=m.navigator;if(Za){var $a=Za.userAgent;if($a){y=$a;break a}}y=""}function z(a){return-1!=y.indexOf(a)}
;var ab=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",ab,void 0);function A(a){Ta(ab,arguments)}
function C(a,b){return a in ab?ab[a]:b}
;var bb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function db(a,b){var c;a:{c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function eb(a,b){var c=bb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function fb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function gb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function hb(a,b,c,d){return Array.prototype.splice.apply(a,ib(arguments,1))}
function ib(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function jb(){this.f=this.b=null}
var lb=new Aa(function(){return new kb},function(a){a.reset()},100);
jb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function kb(){this.next=this.scope=this.b=null}
kb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
kb.prototype.reset=function(){this.next=this.scope=this.b=null};function mb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){E(b)}}:a}
function E(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=C("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),A("ERRORS",c))}
;function nb(){this.b="";this.f=ob}
nb.prototype.la=!0;nb.prototype.ka=function(){return this.b};
var ob={};function pb(){return(z("Chrome")||z("CriOS"))&&!z("Edge")}
;function F(a,b){ra(a)&&(a=mb(a));return window.setTimeout(a,b)}
;function qb(a){m.setTimeout(function(){throw a;},0)}
var rb;
function sb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ta;c.ta=null;a()}};
return function(a){d.next={ta:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function tb(){this.b="";this.f=ub}
tb.prototype.la=!0;tb.prototype.ka=function(){return this.b};
function vb(a){return a instanceof tb&&a.constructor===tb&&a.f===ub?a.b:"type_error:SafeUrl"}
var wb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function xb(a){if(a instanceof tb)return a;a=a.la?a.ka():String(a);wb.test(a)||(a="about:invalid#zClosurez");return yb(a)}
var ub={};function yb(a){var b=new tb;b.b=a;return b}
yb("about:blank");function zb(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):F(a,c||0)}
function Ab(a,b){return zb(a,1,b)}
;function Bb(a,b){Cb||Db();Eb||(Cb(),Eb=!0);var c=Fb,d=lb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Cb;function Db(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);Cb=function(){a.then(Gb)}}else Cb=function(){var a=Gb;
!ra(m.setImmediate)||m.Window&&m.Window.prototype&&!z("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(rb||(rb=sb()),rb(a)):m.setImmediate(a)}}
var Eb=!1,Fb=new jb;function Gb(){for(var a;a=Fb.remove();){try{a.b.call(a.scope)}catch(b){qb(b)}Ba(lb,a)}Eb=!1}
;function Hb(){this.b=""}
Hb.prototype.la=!0;Hb.prototype.ka=function(){return this.b};
function Ib(a){var b=new Hb;b.b=a;return b}
Ib("<!DOCTYPE html>");Ib("");Ib("<br>");function Jb(a,b){var c;c=b instanceof tb?b:xb(b);a.href=vb(c)}
function Kb(a,b){a.rel="stylesheet";a.href=b instanceof nb&&b.constructor===nb&&b.f===ob?b.b:"type_error:TrustedResourceUrl"}
;function G(a){x.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
w(G,x);k=G.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Lb(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=db(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=ka):(c&&eb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.W=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Mb(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.L(c)}}return 0!=e}return!1};
function Mb(a,b,c){Bb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(D(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.o=function(){G.B.o.call(this);this.clear();this.i.length=0};var Nb=r("yt.pubsub.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.L;G.prototype.publish=G.prototype.W;G.prototype.clear=G.prototype.clear;q("yt.pubsub.instance_",Nb,void 0);var Ob=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Ob,void 0);var Pb=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Pb,void 0);var Qb=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Qb,void 0);
var Rb=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Rb,void 0);function Sb(a,b){var c=Tb();if(c){var d=c.subscribe(a,function(){if(!Rb||Rb!=d){var c=arguments,f;f=function(){Ob[d]&&b.apply(window,c)};
try{Qb[a]?f():F(f,0)}catch(g){E(g)}}},void 0);
Ob[d]=!0;Pb[a]||(Pb[a]=[]);Pb[a].push(d);return d}return 0}
function Ub(a){var b=Tb();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete Ob[a]}))}
function Vb(a,b){var c=Tb();return c?c.publish.apply(c,arguments):!1}
function Wb(a){Pb[a]&&(a=Pb[a],D(a,function(a){Ob[a]&&delete Ob[a]}),a.length=0)}
function Xb(a){var b=Tb();if(b)if(b.clear(a),a)Wb(a);else for(var c in Pb)Wb(c)}
function Tb(){return r("yt.pubsub.instance_")}
;function Yb(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Zb,""),c=c.replace($b,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ac(a,b)}
function ac(a,b){var c=bc(a),d=document.getElementById(c),e=d&&Ra(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Sb(c,b),g=""+ta(b);cc[g]=e}f||(d=dc(a,c,function(){Ra(d,"loaded")||(Pa(d),Vb(c),F(ya(Xb,c),0))}))}}
function dc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ec(a,b){if(a&&b){var c=""+ta(b);(c=cc[c])&&Ub(c)}}
function bc(a){var b=document.createElement("a");Jb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Oa(a)}
var Zb=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,$b=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,cc={};var fc=null;function gc(){var a=C("BG_I",null),b=C("BG_IU",null),c=C("BG_P",void 0);b?Yb(b,function(){fc=new botguard.bg(c)}):a&&(eval(a),fc=new botguard.bg(c))}
function hc(){return null!=fc}
function ic(){return fc?fc.invoke():null}
;var jc=[],kc=!1;function lc(){function a(){kc=!0;"google_ad_status"in window?A("DCLKSTAT",1):A("DCLKSTAT",2)}
Yb("//static.doubleclick.net/instream/ad_status.js",a);jc.push(Ab(function(){kc||"google_ad_status"in window||(ec("//static.doubleclick.net/instream/ad_status.js",a),A("DCLKSTAT",3))},5E3))}
function mc(){return parseInt(C("DCLKSTAT",0),10)}
;function nc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function oc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;B=n=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],l=e[4],n,I,c=0;80>c;c++)40>c?20>c?(n=h^d&(f^h),I=1518500249):(n=d^f^h,I=1859775393):60>c?(n=d&f|h&(d|f),I=2400959708):(n=d^f^h,I=3395469782),n=((a<<5|a>>>27)&4294967295)+n+l+I+b[c]&4294967295,l=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64;for(;d<c;)if(f[n++]=a[d++],B++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64}
function d(){var a=[],d=8*B;56>n?c(h,56-n):c(h,64-(n-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var n,B;a();return{reset:a,update:c,digest:d,Ha:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var pc=window,qc=document,rc=pc.location;function sc(){}
var tc=/\[native code\]/;function H(a,b,c){return a[b]=a[b]||c}
function uc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function vc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function J(){var a;if((a=Object.create)&&tc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var wc=H(pc,"gapi",{});function xc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function yc(a){a=String(a);if(xc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function zc(a){return eval("("+a+")")}
function Ac(a){var b=[];Bc(new Cc,a,b);return b.join("")}
function Cc(){}
function Bc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(pa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Bc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Dc(d,c),c.push(":"),Bc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Dc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ec={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Dc(a,b){b.push('"',a.replace(Fc,function(a){var b=Ec[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ec[a]=b);return b}),'"')}
;function Gc(a,b){this.width=a;this.height=b}
k=Gc.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hc(a){this.b=a||{cookie:""}}
var Ic=/\s*;\s*/;k=Hc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(v()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Ic),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(Ic),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Jc=new Hc("undefined"==typeof document?null:document);Jc.f=3950;function Kc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Lc(a,b){var c=Mc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Nc(){}
;function Oc(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Qc||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Oc.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Oc.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Oc.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Qc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Rc(a,b,c){this.b=a;this.g=b;this.f=c}
var Sc=1;function Tc(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Uc=null;"undefined"!=typeof XMLHttpRequest?Uc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Uc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Vc(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Wc(a){this.b=a}
Wc.prototype.set=function(a,b){p(b)?this.b.set(a,Ac(b)):this.b.remove(a)};
Wc.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return yc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wc.prototype.remove=function(a){this.b.remove(a)};var K;K=H(pc,"___jsl",J());H(K,"I",0);H(K,"hel",10);function Xc(){var a=rc.href,b;if(K.dpo)b=K.h;else{b=K.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Yc(a){var b=H(K,"PQ",[]);K.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Zc(a){return H(H(K,"H",J()),a,J())}
;function $c(){return z("iPhone")&&!z("iPod")&&!z("iPad")}
;function ad(a){this.b=a}
w(ad,Wc);function bd(a){this.data=a}
function cd(a){return!p(a)||a instanceof bd?a:new bd(a)}
ad.prototype.set=function(a,b){ad.B.set.call(this,a,cd(b))};
ad.prototype.f=function(a){a=ad.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ad.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var dd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(dd)}
function ed(a){return a?decodeURI(a):a}
function fd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function gd(a,b,c){if(pa(b))for(var d=0;d<b.length;d++)gd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function hd(a,b,c){for(c=c||0;c<b.length;c+=2)gd(b[c],b[c+1],a);return a}
function id(a,b){for(var c in b)gd(c,b[c],a);return a}
function jd(a){a=id([],a);a[0]="";return a.join("")}
function kd(a,b){return fd(2==arguments.length?hd([a],arguments[1],0):hd([a],arguments,1))}
;function M(a){return C("EXPERIMENT_FLAGS",{})[a]}
;function ld(){return{apiaryHost:C("APIARY_HOST",void 0),Fa:C("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:C("GAPI_HINT_OVERRIDE"),gapiHintParams:C("GAPI_HINT_PARAMS",void 0),innertubeApiKey:C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:C("INNERTUBE_API_VERSION",void 0),Oa:C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qa:C("INNERTUBE_CONTEXT_HL",void 0),Pa:C("INNERTUBE_CONTEXT_GL",void 0),mb:C("XHR_APIARY_HOST",void 0)}}
function md(a){a={client:{hl:a.Qa,gl:a.Pa,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion}};C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:C("DELEGATED_SESSION_ID")});return a}
;function nd(a,b,c){var d=[],e=[];if(1==(pa(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),od(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=od(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function od(a){var b=oc();b.update(a);return b.Ha().toLowerCase()}
;var pd=H(K,"perf",J());H(pd,"g",J());var qd=H(pd,"i",J());H(pd,"r",[]);J();J();function rd(a,b,c){b&&0<b.length&&(b=sd(b),c&&0<c.length&&(b+="___"+sd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=H(qd,"_p",J()),H(b,c,J())[a]=(new Date).getTime(),b=pd.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function sd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function td(a){this.b=a}
w(td,ad);td.prototype.set=function(a,b,c){if(b=cd(b)){if(c){if(c<v()){td.prototype.remove.call(this,a);return}b.expiration=c}b.creation=v()}td.B.set.call(this,a,b)};
td.prototype.f=function(a,b){var c=td.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<v()||!!d&&d>v()}if(d)td.prototype.remove.call(this,a);else return c}};function ud(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?pa(b[f])?gb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function vd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=ud(d[1]||""),e;for(e in b)d[e]=b[e];return fd(id([a],d))+c}
;var wd=J(),xd=[];function N(a){throw Error("Bad hint"+(a?": "+a:""));}
xd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?K[b]=H(K,b,[]).concat(c):H(K,b,c)}if(b=a.u)a=H(K,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var yd=/^(\/[a-zA-Z0-9_\-]+)+$/,zd=[/\/amp\//,/\/amp$/,/^\/amp$/],Ad=/^[a-zA-Z0-9\-_\.,!]+$/,Bd=/^gapi\.loaded_[0-9]+$/,Cd=/^[a-zA-Z0-9,._-]+$/;function Dd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=wd[f],h=null;g?h=g(e,b,c,d):N("no hint processor for: "+f);h||N("failed to generate load url");b=h;c=b.match(Ed);(d=b.match(Fd))&&1===d.length&&Gd.test(b)&&c&&1===c.length||N("failed sanity: "+a);return h}
function Hd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Id(a);Bd.test(c)||N("invalid_callback");b=Jd(b);d=d&&d.length?Jd(d):null;return[encodeURIComponent(a.$a).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.sa?"/am="+e(a.sa):"",a.za?"/rs="+e(a.za):"",a.Da?"/t="+e(a.Da):"","/cb=",e(c)].join("")}
function Id(a){"/"!==a.charAt(0)&&N("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))N("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");yd.test(b)||N("invalid_prefix");c=0;for(d=zd.length;c<d;++c)zd[c].test(b)&&N("invalid_prefix");c=Kd(a,
"k",!0);d=Kd(a,"am");e=Kd(a,"rs");a=Kd(a,"t");return{$a:b,version:c,sa:d,za:e,Da:a}}
function Jd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Cd.test(e)&&b.push(e)}return b.join(",")}
function Kd(a,b,c){a=a[b];!a&&c&&N("missing: "+b);if(a){if(Ad.test(a))return a;N("invalid: "+b)}return null}
var Gd=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Fd=/\/cb=/g,Ed=/\/\//g;function Ld(){var a=Xc();if(!a)throw Error("Bad hint");return a}
wd.m=function(a,b,c,d){(a=a[0])||N("missing_hint");return"https://apis.google.com"+Hd(a,b,c,d)};
var Md=decodeURI("%73cript"),Nd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Od(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>uc.call(b,e)&&c.push(e)}return c}
function Pd(){var a=K.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Nd)?a:K.nonce=null;var b=H(K,"us",[]);if(!b||!b.length)return K.nonce=null;for(var c=qc.getElementsByTagName(Md),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Nd))return K.nonce=a}}return null}
function Qd(a){if("loading"!=qc.readyState)Rd(a);else{var b=Pd(),c="";null!==b&&(c=' nonce="'+b+'"');qc.write("<"+Md+' src="'+encodeURI(a)+'"'+c+"></"+Md+">")}}
function Rd(a){var b=qc.createElement(Md);b.setAttribute("src",a);a=Pd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=qc.getElementsByTagName(Md)[0])?a.parentNode.insertBefore(b,a):(qc.head||qc.body||qc.documentElement).appendChild(b)}
function Sd(a,b){var c=b&&b._c;if(c)for(var d=0;d<xd.length;d++){var e=xd[d][0],f=xd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Td(a,b,c){Ud(function(){var c;c=b===Xc()?H(wc,"_",J()):J();c=H(Zc(b),"_",c);a(c)},c)}
function Vd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Sd(a,c);var d=a?a.split(":"):[],e=c.h||Ld(),f=H(K,"ah",J());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,B=n;n&&n.hint==l||(B={hint:l,features:[]},g.push(B));B.features.push(h)}var I=g.length;if(1<I){var fa=c.callback;fa&&(c.callback=function(){0==--I&&fa()})}for(;d=g.shift();)Wd(d.features,c,d.hint)}else Wd(d||[],c,e)}
function Wd(a,b,c){function d(a,b){if(I)return 0;pc.clearTimeout(B);fa.push.apply(fa,aa);var d=((wc||{}).config||{}).update;d?d(f):f&&H(K,"cu",[]).push(f);if(b){rd("me0",a,Z);try{Td(b,c,n)}finally{rd("me1",a,Z)}}return 1}
a=vc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var B=null,I=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=H(Zc(c),"r",[]).sort(),fa=H(Zc(c),"L",[]).sort(),Z=[].concat(l);0<g&&(B=pc.setTimeout(function(){I=!0;h()},g));
var aa=Od(a,fa);if(aa.length){var aa=Od(a,l),ma=H(K,"CP",[]),na=ma.length;ma[na]=function(a){function b(){var a=ma[na+1];a&&a()}
function c(b){ma[na]=null;d(aa,a)&&Yc(function(){e&&e();b()})}
if(!a)return 0;rd("ml1",aa,Z);0<na&&ma[na-1]?ma[na]=function(){c(b)}:c(b)};
if(aa.length){var Pc="loaded_"+K.I++;wc[Pc]=function(a){ma[na](a);wc[Pc]=null};
a=Dd(c,aa,"gapi."+Pc,l);l.push.apply(l,aa);rd("ml0",aa,Z);b.sync||pc.___gapisync?Qd(a):Rd(a)}else ma[na](sc)}else d(aa)&&e&&e()}
function Ud(a,b){if(K.hee&&0<K.hel)try{return a()}catch(c){b&&b(c),K.hel--,Vd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
wc.load=function(a,b){return Ud(function(){return Vd(a,b)})};var Xd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Yd(){}
Yd.prototype.next=function(){throw Xd;};
Yd.prototype.ca=function(){return this};
function Zd(a){if(a instanceof Yd)return a;if("function"==typeof a.ca)return a.ca(!1);if(qa(a)){var b=0,c=new Yd;c.next=function(){for(;;){if(b>=a.length)throw Xd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function $d(a,b){if(qa(a))try{D(a,b,void 0)}catch(c){if(c!==Xd)throw c;}else{a=Zd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Xd)throw c;}}}
function ae(a){if(qa(a))return fb(a);a=Zd(a);var b=[];$d(a,function(a){b.push(a)});
return b}
;function be(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
be.prototype.equals=function(a){return a instanceof be&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
be.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
be.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
be.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var ce=z("Opera"),O=z("Trident")||z("MSIE"),de=z("Edge"),ee=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),fe=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"),ge=z("Macintosh"),he=z("Windows"),ie=z("Android"),je=$c(),ke=z("iPad"),le=z("iPod");function me(){var a=m.document;return a?a.documentMode:void 0}
var ne;a:{var oe="",pe=function(){var a=y;if(ee)return/rv\:([^\);]+)(\)|;)/.exec(a);if(de)return/Edge\/([\d\.]+)/.exec(a);if(O)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fe)return/WebKit\/(\S+)/.exec(a);if(ce)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pe&&(oe=pe?pe[1]:"");if(O){var qe=me();if(null!=qe&&qe>parseFloat(oe)){ne=String(qe);break a}}ne=oe}var re=ne,Mc={};
function P(a){return Lc(a,function(){for(var b=0,c=Ma(String(re)).split("."),d=Ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Na(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Na(0==g[2].length,0==h[2].length)||Na(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var se;var te=m.document;se=te&&O?me()||("CSS1Compat"==te.compatMode?parseInt(re,10):5):void 0;!ee&&!O||O&&9<=Number(se)||ee&&P("1.9.1");O&&P("9");function ue(a){this.b=a}
w(ue,td);function ve(){}
w(ve,Nc);ve.prototype.clear=function(){var a=ae(this.ca(!0)),b=this;D(a,function(a){b.remove(a)})};var we=z("Firefox"),xe=$c()||z("iPod"),ye=z("iPad"),ze=z("Android")&&!(pb()||z("Firefox")||z("Opera")||z("Silk")),Ae=pb(),Be=z("Safari")&&!(pb()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))&&!($c()||z("iPad")||z("iPod"));function Ce(a){De();var b=new nb;b.b=a;return b}
var De=ka;function Q(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=ka)try{var c=this;a.call(b,function(a){Ee(c,2,a)},function(a){Ee(c,3,a)})}catch(d){Ee(this,3,d)}}
function Fe(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Fe.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Ge=new Aa(function(){return new Fe},function(a){a.reset()},100);
function He(a,b,c){var d=Ge.get();d.g=a;d.f=b;d.context=c;return d}
function Ie(a){if(a instanceof Q)return a;var b=new Q(ka);Ee(b,2,a);return b}
function Je(a){return new Q(function(b,c){c(a)})}
Q.prototype.then=function(a,b,c){return Ke(this,ra(a)?a:null,ra(b)?b:null,c)};
Kc(Q);Q.prototype.cancel=function(a){0==this.b&&Bb(function(){var b=new Le(a);Me(this,b)},this)};
function Me(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Me(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Ne(c),Oe(c,e,3,b)))}a.g=null}else Ee(a,3,b)}
function Pe(a,b){a.f||2!=a.b&&3!=a.b||Qe(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Ke(a,b,c,d){var e=He(null,null,null);e.b=new Q(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Le?g(b):a(e)}catch(n){g(n)}}:g});
e.b.g=a;Pe(a,e);return e.b}
Q.prototype.C=function(a){this.b=0;Ee(this,2,a)};
Q.prototype.G=function(a){this.b=0;Ee(this,3,a)};
function Ee(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.G;if(e instanceof Q)Pe(e,He(f||ka,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(sa(e))try{var l=e.then;if(ra(l)){Re(e,l,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,Qe(a),3!=b||c instanceof Le||Se(a,c))}}
function Re(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Qe(a){a.l||(a.l=!0,Bb(a.D,a))}
function Ne(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Q.prototype.D=function(){for(var a;a=Ne(this);)Oe(this,a,this.b,this.w);this.l=!1};
function Oe(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Te(b,c,d);else try{b.i?b.g.call(b.context):Te(b,c,d)}catch(e){Ue.call(null,e)}Ba(Ge,b)}
function Te(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Se(a,b){a.j=!0;Bb(function(){a.j&&Ue.call(null,b)})}
var Ue=qb;function Le(a){Ca.call(this,a)}
w(Le,Ca);Le.prototype.name="cancel";function Ve(a){this.b=a}
w(Ve,ve);k=Ve.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.ca=function(a){var b=0,c=this.b,d=new Yd;d.next=function(){if(b>=c.length)throw Xd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function We(a){var b=document;return t(a)?b.getElementById(a):a}
function Xe(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ye(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Ze(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function $e(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w($e,Ve);function af(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(af,Ve);function bf(a){this.b=a||ld();cf||(cf=df(this.b))}
var cf=null;function df(a){return(new Q(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ra(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||La(d,{_c:{jsl:{h:C("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||C("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=ud(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&La(d,{_c:{jsl:{h:h}}})}Vd("client",d)}catch(l){E(l)}})).then(function(){})}
bf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",C("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
bf.prototype.f=function(){return{context:md(this.b)}};
bf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=F(function(){e||(e=!0,c.N&&c.N())},c.timeout));
ef(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function ef(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":C("VISITOR_DATA")},method:"POST",body:Ac(c)},f=u(a.i,a);cf.then(function(){f();r("gapi.client.request")(e).execute(d||ka)})}
;var ff=r("yt.dom.getNextId_");if(!ff){ff=function(){return++gf};
q("yt.dom.getNextId_",ff,void 0);var gf=0};var hf={log_event:"events",log_interaction:"interactions"},jf={},kf={},lf=0,Ha=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Ha,void 0);function mf(a,b){Ha[a.endpoint]=Ha[a.endpoint]||[];var c=Ha[a.endpoint];c.push(a.wa);kf[a.endpoint]=b;c.length>=(Number(M("web_logging_max_batch")||0)||20)?nf():of()}
function nf(){window.clearTimeout(lf);if(!Ga()){for(var a in Ha){var b=jf[a];if(!b){b=kf[a];if(!b)continue;b=new b;jf[a]=b}var c=b.f();c.requestTimeMs=Math.round(Ua());c[hf[a]]=Ha[a];b.g(a,c,{});delete Ha[a]}Ga()||of()}}
function of(){window.clearTimeout(lf);lf=F(nf,C("LOGGING_BATCH_TIMEOUT",1E4))}
;function pf(){if(!qf&&!rf||!window.JSON)return null;var a;try{a=qf.get("yt-player-two-stage-token")}catch(b){}if(!t(a))try{a=rf.get("yt-player-two-stage-token")}catch(b){}if(!t(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var rf,sf=new $e;rf=sf.isAvailable()?new ue(sf):null;var qf,tf=new af;qf=tf.isAvailable()?new ue(tf):null;var Fa=r("yt.events.listeners_")||{};q("yt.events.listeners_",Fa,void 0);var uf=r("yt.events.counter_")||{count:0};q("yt.events.counter_",uf,void 0);function vf(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ea(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function wf(a,b,c){if(!a||!a.addEventListener&&!a.attachEvent)return"";var d=vf(a,b,c);if(d)return d;var d=++uf.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new Oc(d);if(!Ze(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Oc(b);
b.currentTarget=a;return c.call(a,b)};
f=mb(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);Fa[d]=[a,b,c,f,!1];return d}
function xf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in Fa){var b=Fa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Fa[a]}}))}
;function yf(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&mb(b)(l)}
var l=Uc&&Uc();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=zf(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function zf(a,b){b=b||{};var c;c||(c=window.location.href);var d=L(a)[1]||null,e=ed(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ed(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in Af){if((e=d=C(Af[f]))&&!(e=c)){var e=f,g=C("CORS_HEADER_WHITELIST")||{},h=ed(L(a)[3]||null);e=h?(g=g[h])?0<=bb(g,e):!1:!0}e&&(b[f]=d)}return b}
function Bf(a,b){b.method="POST";b.A||(b.A={});Cf(a,b)}
function Df(a,b){var c=C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!ed(L(a)[3]||null)||b.withCredentials||ed(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.A&&b.A[c])}
function Cf(a,b){var c=b.format||"JSON";b.Na&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=C("XSRF_FIELD_NAME",void 0),e=C("XSRF_TOKEN",void 0),f=b.oa;f&&(f[d]&&delete f[d],a=vd(a,f||{}));var g=b.postBody||"",f=b.A;Df(a,b)&&(f||(f={}),f[d]=e);f&&t(g)&&(d=ud(g),La(d,f),g=b.xa&&"JSON"==b.xa?JSON.stringify(d):jd(d));var h=!1,l,n=yf(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=Vc(a),e=null;if(d||400<=a.status&&
500>a.status)e=Ef(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.na&&b.na.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.N&&0<b.timeout&&(l=F(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.N.call(b.context||m,n))},b.timeout))}
function Ef(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=zc(a));break;case "XML":if(b=(b=b.responseXML)?Ff(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=Gf(a)})}c&&Hf(d);
return d}
function Hf(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Ib(a[b]);a[c]=d}else Hf(a[b])}}
function Ff(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Gf(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Af={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function If(a,b,c,d,e){c={name:c||C("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Jf)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,l=!1;try{g=a.lineNumber||a.line||"Not available"}catch(I){g="Not available",l=!0}try{h=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(I){h=
"Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Kf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={oa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},A:{url:C("PAGE_NAME",window.location.href),file:a.fileName},
method:"POST"};e&&(b.A.stack=e);for(var n in c)b.A["client."+n]=c[n];if(n=C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var B in n)b.A[B]=n[B];Cf("/error_204",b);Kf[a.message]=!0;Jf++}}}
var Kf={},Jf=0;function Lf(){this.b=ld()}
Lf.prototype.f=function(){return{context:md(this.b)}};
Lf.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":C("VISITOR_DATA")},A:b,xa:"JSON",N:c.N,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=nc(String(m.location.href)),e=m.__OVERRIDE_SID;null==e&&(e=(new Hc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==d&&(d=(new Hc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(m.location.href);
c=f&&d&&e?[e,nd(nc(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=C("SESSION_INDEX",0));c=this.b.mb;c.startsWith("http")||(c="//"+c);Bf(c+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Mf(){if(null==r("_lact",window)){var a=parseInt(C("LACT"),10),a=isFinite(a)?v()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Nf();wf(document,"keydown",Nf);wf(document,"keyup",Nf);wf(document,"mousedown",Nf);wf(document,"mouseup",Nf);Sb("page-mouse",Nf);Sb("page-scroll",Nf);Sb("page-resize",Nf)}}
function Nf(){null==r("_lact",window)&&(Mf(),r("_lact",window));var a=v();q("_lact",a,window);Vb("USER_ACTIVE")}
function Of(){var a=r("_lact",window);return null==a?-1:Math.max(v()-a,0)}
;function Pf(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||Ua());e[a]=b;M("web_gel_lact")&&(e.context={lastActivityMs:Of()});mf({endpoint:"log_event",wa:e},c)}
;function Qf(a,b,c){Rf(Sf(),{attachChild:{csn:a,parentVisualElement:Tc(b),visualElements:[Tc(c)]}},void 0)}
function Tf(a,b){var c=Sf(),d=cb(b,function(a){return Tc(a)});
Rf(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function Rf(a,b,c){b.eventTimeMs=Math.round(Ua());b.lactMs=Of();c&&(b.clientData=Uf(c));mf({endpoint:"log_interaction",wa:b},a)}
function Uf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=cb(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Sf(){return M("enable_youtubei_innertube")?Lf:bf}
;var Vf=r("yt.logging.latency.usageStats_")||{};q("yt.logging.latency.usageStats_",Vf,void 0);var Wf=0;function Xf(a){Vf[a]=Vf[a]||{count:0};var b=Vf[a];b.count++;b.time=Ua();Wf||(Wf=zb(Yf,0,5E3));return 10<b.count?(11==b.count&&If(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Yf(){var a=Ua(),b;for(b in Vf)6E4<a-Vf[b].time&&delete Vf[b];Wf=0}
;function Zf(){var a=C("ROOT_VE_TYPE",void 0);return a?new Rc(void 0,a,void 0):null}
function $f(){var a=C("client-screen-nonce",void 0);a||(a=C("EVENT_ID",void 0));return a}
;var ag=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",ag,void 0);var bg=v().toString();function cg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=C("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=C("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=ed(L(window.location.href)[3]||null);f&&e.push(f);f=ed(L(d)[3]||null);if(0<=bb(e,f)||!f&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(e=document.createElement("a"),Jb(e,d),d=e.href),d){var f=L(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
$f();d="ST-"+Oa(d).toString(36);e=b?jd(b):"";Jc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Rc(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,l;h=void 0===h?{}:h;l=void 0===l?"":l;c=window.location;a=fd(id([a],h))+l;a=a instanceof tb?a:xb(a);c.href=vb(a)}return!0}
;function dg(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ja(eg);this.assets=a.assets||{};this.attrs=a.attrs||Ja(fg);this.params=a.params||Ja(gg);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var eg={enablejsapi:1},fg={},gg={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function hg(a){a instanceof dg||(a=new dg(a));return a}
function ig(a){var b=new dg,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==oa(d)?Ja(d):d}return b}
;function jg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,l,n;if(Va)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(B){g=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(n);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(B){h=""}l&&n&&l.removeChild(n);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
la(jg);function kg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function lg(){x.call(this);this.b=new G;Wa(this,ya(Xa,this.b))}
w(lg,x);lg.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
lg.prototype.L=function(a){return this.f?!1:this.b.L(a)};
lg.prototype.j=function(a,b){this.f||this.b.W.apply(this.b,arguments)};function mg(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function ng(a){if(window.spf){var b=a.match(og);spf.style.load(a,b?b[1]:"",void 0)}else pg(a)}
function pg(a){var b=qg(a),c=document.getElementById(b),d=c&&Ra(c,"loaded");d||c&&!d||(c=rg(a,b,function(){Ra(c,"loaded")||(Pa(c),Vb(b),F(ya(Xb,b),0))}))}
function rg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ce(a);Kb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qg(a){var b=document.createElement("a");Jb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Oa(a)}
var og=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var sg={},tg=0;function ug(a,b){a&&(C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?yf(a,b):vg(a,b))}
function vg(a,b){var c=new Image,d=""+tg++;sg[d]=c;c.onload=c.onerror=function(){b&&sg[d]&&b();delete sg[d]};
c.src=a}
;function wg(){var a=Ja(xg);return new Q(function(b,c){a.F=function(a){Vc(a)?b(a):c(new yg("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new yg("Unknown request error","net.unknown"))};
a.N=function(){c(new yg("Request timed out","net.timeout"))};
Cf("//googleads.g.doubleclick.net/pagead/id",a)})}
function yg(a,b){Ca.call(this,a+", errorCode="+b);this.errorCode=b}
w(yg,Ca);yg.prototype.name="PromiseAjaxError";var zg;var Ag=y,Ag=Ag.toLowerCase();if(-1!=Ag.indexOf("android")){var Bg=Ag.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Bg)zg=Number(Bg[1]);else{var Cg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Dg=[],Eg=0,Fg;for(Fg in Cg)Dg[Eg++]=Fg;var Gg=Ag.match("("+Dg.join("|")+")");zg=Gg?Cg[Gg[0]]:0}}else zg=void 0;var Hg=y,Ig=Hg.match(/\((BB10|PlayBook|BlackBerry);/);!Ig||2>Ig.length||Hg.match(/Version\/(\d+\.\d+)/);y.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var Jg;var Kg=y,Lg=Kg.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Lg||2>Lg.length)Jg=void 0;else{var Mg=Kg.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Jg=Mg&&6==Mg.length?Number(Mg[5].replace("_",".")):0}0<=Jg&&0<=y.search("Safari")&&y.search("Version");var Ng=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Og=['audio/mp4; codecs="mp4a.40.2"'];O&&P("9");!fe||P("528");ee&&P("1.9b")||O&&P("8")||ce&&P("9.5")||fe&&P("528");ee&&!P("8")||O&&P("9");function Pg(a){x.call(this);this.b=[];this.g=a||this}
w(Pg,x);function Qg(a,b,c,d){d=mb(u(d,a.g));d={target:b,name:c,ha:d};b.addEventListener(c,d.ha,void 0);a.b.push(d)}
function Rg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ha)}}
Pg.prototype.o=function(){Rg(this);Pg.B.o.call(this)};function Sg(a,b,c,d){x.call(this);this.i=b||null;this.D="*";this.j=c||null;this.b=null;this.channel=d||null;this.J=!!a;this.C=u(this.K,this);window.addEventListener("message",this.C)}
w(Sg,x);Sg.prototype.K=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&t(a.data)){var b;try{b=yc(a.data)}catch(c){return}if(!(null==b||this.J&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.j=this.D=a.origin:E(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.l&&(this.w&&!(0<=bb(this.w,b.func))||this.l(b.func,b.args))}}};
Sg.prototype.sendMessage=function(a,b){var c=b||this.i;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=Ac(a);c.postMessage(d,this.D)}catch(e){E(e,"WARNING")}}};
Sg.prototype.o=function(){window.removeEventListener("message",this.C);Sg.B.o.call(this)};function Tg(a,b,c){Sg.call(this,a,b,c||C("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.w=this.g=this.l=null}
w(Tg,Sg);function R(a,b){this.version=a;this.args=b}
function Ug(a){if(!a.Ba){var b={};a.call(b);a.Ba=b.version}return a.Ba}
function Vg(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Ug(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var Wg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Xg(a){R.call(this,1,arguments)}
w(Xg,R);var Yg=new S("timing-sent",Xg);var Zg=r("yt.pubsub2.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.L;G.prototype.publish=G.prototype.W;G.prototype.clear=G.prototype.clear;q("yt.pubsub2.instance_",Zg,void 0);var $g=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",$g,void 0);var ah=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",ah,void 0);var bh=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",bh,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=ch();c&&c.publish.call(c,a.toString(),a,b)}
function U(a,b){var c=ch();if(!c)return 0;var d=c.subscribe(a.toString(),function(c,f){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=d){var e=function(){if($g[d])try{if(f&&a instanceof S&&a!=c)try{f=Vg(a.b,f)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(window,f)}catch(h){E(h)}};
bh[a.toString()]?r("yt.scheduler.instance")?Ab(e):F(e,0):e()}});
$g[d]=!0;ah[a.toString()]||(ah[a.toString()]=[]);ah[a.toString()].push(d);return d}
function dh(a){var b=ch();b&&("number"==typeof a&&(a=[a]),D(a,function(a){b.unsubscribeByKey(a);delete $g[a]}))}
function ch(){return r("yt.pubsub2.instance_")}
;function eh(a,b,c){x.call(this);this.b=a;this.j=b||0;this.g=c;this.i=u(this.Ia,this)}
w(eh,x);k=eh.prototype;k.V=0;k.o=function(){eh.B.o.call(this);this.stop();delete this.b;delete this.g};
k.start=function(a){this.stop();var b=this.i;a=p(a)?a:this.j;if(!ra(b))if(b&&"function"==typeof b.handleEvent)b=u(b.handleEvent,b);else throw Error("Invalid listener argument");this.V=2147483647<Number(a)?-1:m.setTimeout(b,a||0)};
k.stop=function(){this.isActive()&&m.clearTimeout(this.V);this.V=0};
k.isActive=function(){return 0!=this.V};
k.Ia=function(){this.V=0;this.b&&this.b.call(this.g)};var fh={vc:!0},gh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},hh="ap c cver ei yt_fss yt_li".split(" "),ih=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],jh=u(Wg.clearResourceTimings||Wg.webkitClearResourceTimings||Wg.mozClearResourceTimings||Wg.msClearResourceTimings||Wg.oClearResourceTimings||
ka,Wg);
function kh(a,b){if(!b&&"_"!=a[0]){var c=a;Wg.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Wg.mark(c))}var c=lh(),d=b||Ua();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(mh()["tick_"+a]=b)||Ua();M("csi_on_gel")?(c=nh(),"_start"==a?Xf("baseline_"+c)||Pf("latencyActionBaselined",{clientActionNonce:c},Lf,b):Xf("tick_"+a+"_"+c)||Pf("latencyActionTicked",{tickName:a,clientActionNonce:c},Lf,b),c=!0):c=!1;if(c=!c)c=!r("yt.timing.pingSent_");if(c&&(d=C("TIMING_ACTION",void 0),c=lh(),r("yt.timing.ready_")&&
d&&c._start&&oh())){var d=!0,e=C("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&ph()}}
function qh(){var a=rh().info.yt_lt="hot_bg";mh().info_yt_lt=a;if(M("csi_on_gel"))if("yt_lt"in gh){var b={},c=gh.yt_lt;0<=bb(ih,c)&&(a=!!a);b[c]=a;a=nh();c=Object.keys(b).join("");Xf("info_"+c+"_"+a)||(b.clientActionNonce=a,Pf("latencyActionInfo",b,Lf))}else"yt_lt"in hh||E(Error("Unknown label yt_lt logged with GEL CSI."))}
function oh(){var a=lh();if(a.aft)return a.aft;for(var b=C("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ph(){if(!M("csi_on_gel")){var a=lh(),b=rh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&pa(a[d])){var e=d.slice(1);if(e in fh){var f=cb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))sh(f,e),th(),jh(),uh(!1,void 0),C("TIMING_ACTION")&&A("PREVIOUS_ACTION",C("TIMING_ACTION")),A("TIMING_ACTION","")}else{var g=C("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:C("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=Wg.getEntriesByName?Wg.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=oh();vh()&&"youtube"==g&&(qh(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=Ua();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,n.push(d+"."+g));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);sh(f,e,void 0);T(Yg,new Xg(b.aft+(h||0)))}}}
function sh(a,b,c){if(M("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||ug(a,void 0)}catch(f){ug(a,void 0)}else ug(a);uh(!0,c)}
function nh(){var a=rh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=v();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(bg)for(c=1,d=0;d<bg.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^bg.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");rh().nonce=a}return a}
function lh(){return rh().tick}
function mh(){var a=rh();"gel"in a||(a.gel={});return a.gel}
function rh(){return r("ytcsi.data_")||th()}
function th(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function uh(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function vh(){var a=lh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==rh().info.yt_pvis}
;new eh(wh,1E3);function wh(){kh("vptl",0);kh("vpl",0)}
;var xh={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function yh(a,b){x.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.$=this.S=null;this.U=new G;Wa(this,ya(Xa,this.U));this.j={};this.J=this.aa=this.i=this.ga=this.b=null;this.X=!1;this.K=this.D=this.P=this.R=null;this.ba={};this.Ea=["onReady"];this.Y=new Pg(this);Wa(this,ya(Xa,this.Y));this.ea=null;this.qa=NaN;this.Z={};zh(this);this.H("onDetailedError",u(this.Ua,this));this.H("onTabOrderChange",u(this.Ga,this));this.H("onTabAnnounce",u(this.ra,this));this.H("WATCH_LATER_VIDEO_ADDED",
u(this.Va,this));this.H("WATCH_LATER_VIDEO_REMOVED",u(this.Wa,this));we||(this.H("onMouseWheelCapture",u(this.Sa,this)),this.H("onMouseWheelRelease",u(this.Ta,this)));this.H("onAdAnnounce",u(this.ra,this));this.M=new Pg(this);Wa(this,ya(Xa,this.M));this.fa=!1;this.da=null}
w(yh,x);var Ah=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=yh.prototype;k.pa=function(a,b){this.f||(Bh(this,a),Ch(this,b),this.C&&Dh(this))};
function Bh(a,b){a.ga=b;a.b=ig(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=Eh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=mg(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=mg(Number(c)||c)}
k.Ka=function(){return this.ga};
function Dh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Fh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=kg(jg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Gh(a,b){if((!b||(5!=(xh[b.errorCode]||5)?0:-1!=Ah.indexOf(b.errorCode)))&&Fh(a)){var c=Hh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=hg(c));d.args.autoplay=1;d.args.html5_unavailable="1";Bh(a,d);Ch(a,"flash")}}
function Ch(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Fh(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==zg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Ng:Og,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Ih(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Fh(a)?"flash":"unsupported":"html5"}("flash"==b?a.kb:a.lb).call(a)}}
function Ih(a){var b=!0,c=Hh(a);c&&a.b&&(a=a.b,b=Ra(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
k.lb=function(){if(!this.X){var a=Ih(this);a&&"html5"==Jh(this)?(this.J="html5",this.C||this.O()):(Kh(this),this.J="html5",a&&this.P?(this.l.appendChild(this.P),this.O()):(this.b.loaded=!0,this.R=u(function(){var a=this.l,c=ig(this.b);r("yt.player.Application.create")(a,c);this.O()},this),this.X=!0,a?this.R():(Yb(this.b.assets.js,this.R),ng(this.b.assets.css))))}};
k.kb=function(){var a=ig(this.b);if(!this.D){var b=Hh(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,Qg(this.Y,this.D,"focus",this.ua),this.K=document.createElement("SPAN"),this.K.tabIndex=0,Qg(this.Y,this.K,"focus",this.ua),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Jh(this))this.J="flash",this.C||this.O();else{Kh(this);this.J=
"flash";this.b.loaded=!0;var b=jg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!kg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=t(b)?We(b):b,d=Ja(a.attrs);d.tabindex=0;var e=Ja(a.params);e.flashvars=jd(a.args);if(Va){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.O()}};
k.ua=function(){Hh(this).focus()};
function Hh(a){var b=We(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
k.O=function(){if(!this.f){var a=Hh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.X=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Gh(this);else{zh(this);this.C=!0;a=Hh(this);a.addEventListener&&(this.S=Lh(this,a,"addEventListener"));a.removeEventListener&&(this.$=Lh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Lh(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);Dh(this);this.aa&&this.aa(this.g);this.U.W("onReady",this.g)}else this.qa=F(u(this.O,this),50)}};
function Lh(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ea=e,E(e,"WARNING"))}}}
function zh(a){a.C=!1;if(a.$)for(var b in a.j)a.$(b,a.j[b]);for(var c in a.Z)window.clearTimeout(parseInt(c,10));a.Z={};a.S=null;a.$=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=u(a.H,a);a.g.removeEventListener=u(a.bb,a);a.g.destroy=u(a.dispose,a);a.g.getLastError=u(a.La,a);a.g.getPlayerType=u(a.Ma,a);a.g.getCurrentVideoConfig=u(a.Ka,a);a.g.loadNewVideoConfig=u(a.pa,a);a.g.isReady=u(a.nb,a)}
k.nb=function(){return this.C};
k.H=function(a,b){if(!this.f){var c=Eh(this,b);if(c){if(!(0<=bb(this.Ea,a)||this.j[a])){var d=Mh(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&F(ya(c,this.g),0)}}};
k.bb=function(a,b){if(!this.f){var c=Eh(this,b);c&&Lb(this.U,a,c)}};
function Eh(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.ba[b]=c}return c?c:null}
function Mh(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;m[c]=function(c){var d=F(function(){if(!a.f){a.U.W(b,c);var e=a.Z,g=String(d);g in e&&delete e[g]}},0);
Ia(a.Z,String(d))};
return c}
k.Ga=function(a){a=a?Ye:Xe;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
k.ra=function(a){Vb("a11y-announce",a)};
k.Ua=function(a){Gh(this,a)};
k.Va=function(a){Vb("WATCH_LATER_VIDEO_ADDED",a)};
k.Wa=function(a){Vb("WATCH_LATER_VIDEO_REMOVED",a)};
k.Sa=function(){if(!this.fa){if(Ae){var a=document,b=a.scrollingElement?a.scrollingElement:fe||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.da=O&&P("10")&&a.pageYOffset!=b.scrollTop?new be(b.scrollLeft,b.scrollTop):new be(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Qg(this.M,window,"scroll",this.Za);Qg(this.M,this.l,"touchmove",this.Ya)}else Qg(this.M,this.l,"mousewheel",this.va),Qg(this.M,this.l,"wheel",this.va);this.fa=!0}};
k.Ta=function(){Rg(this.M);this.fa=!1};
k.va=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Za=function(){window.scrollTo(this.da.b,this.da.f)};
k.Ya=function(a){a.preventDefault()};
k.Ma=function(){return this.J||Jh(this)};
k.La=function(){return this.ea};
function Jh(a){return(a=Hh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Kh(a){kh("dcp");a.cancel();zh(a);a.J=null;a.b&&(a.b.loaded=!1);var b=Hh(a);"html5"==Jh(a)?a.P=b:b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Rg(a.Y);a.D=null;a.K=null}
k.cancel=function(){this.R&&ec(this.b.assets.js,this.R);window.clearTimeout(this.qa);this.X=!1};
k.o=function(){Kh(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){E(b)}this.ba=null;for(var a in this.j)m[this.j[a]]=null;this.ga=this.b=this.g=null;delete this.l;delete this.w;yh.B.o.call(this)};var Nh={},Oh="player_uid_"+(1E9*Math.random()>>>0);function Ph(a,b){a=t(a)?We(a):a;b=hg(b);var c=Oh+"_"+ta(a),d=Nh[c];if(d)return d.pa(b),d.g;d=new yh(a,c);Nh[c]=d;Vb("player-added",d.g);Wa(d,ya(Qh,d));F(function(){d.pa(b)},0);
return d.g}
function Qh(a){Nh[a.T]=null}
function Rh(a){a=We(a);if(!a)return null;var b=Oh+"_"+ta(a),c=Nh[b];c||(c=new yh(a,b),Nh[b]=c);return c.g}
;var Sh=r("yt.abuse.botguardInitialized")||hc;q("yt.abuse.botguardInitialized",Sh,void 0);var Th=r("yt.abuse.invokeBotguard")||ic;q("yt.abuse.invokeBotguard",Th,void 0);var Uh=r("yt.abuse.dclkstatus.checkDclkStatus")||mc;q("yt.abuse.dclkstatus.checkDclkStatus",Uh,void 0);var Vh=r("yt.player.exports.navigate")||cg;q("yt.player.exports.navigate",Vh,void 0);var Wh=r("yt.player.embed")||Ph;q("yt.player.embed",Wh,void 0);var Xh=r("yt.player.getPlayerByElement")||Rh;q("yt.player.getPlayerByElement",Xh,void 0);
var Yh=r("yt.util.activity.init")||Mf;q("yt.util.activity.init",Yh,void 0);var Zh=r("yt.util.activity.getTimeSinceActive")||Of;q("yt.util.activity.getTimeSinceActive",Zh,void 0);var $h=r("yt.util.activity.setTimestamp")||Nf;q("yt.util.activity.setTimestamp",$h,void 0);function ai(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function bi(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ci(a)}
function ci(a,b,c){if(sa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function di(a,b,c,d){if(sa(a)&&!pa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function ei(a){var b=a.video_id||a.videoId;if(t(b)){var c=pf()||{},d=pf()||{};p(void 0)?d[b]=void 0:delete d[b];var e=v()+3E5,f=rf;if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function fi(a){R.call(this,1,arguments);this.b=a}
w(fi,R);function V(a){R.call(this,1,arguments);this.b=a}
w(V,R);function gi(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(gi,R);function hi(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w(hi,R);function ii(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(ii,R);function ji(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.i=e||null;this.g=f||null;this.source=g||null}
w(ji,R);
var ki=new S("subscription-batch-subscribe",fi),li=new S("subscription-batch-unsubscribe",fi),mi=new S("subscription-subscribe",hi),ni=new S("subscription-subscribe-loading",V),oi=new S("subscription-subscribe-loaded",V),pi=new S("subscription-subscribe-success",ii),qi=new S("subscription-subscribe-external",hi),ri=new S("subscription-unsubscribe",ji),si=new S("subscription-unsubscirbe-loading",V),ti=new S("subscription-unsubscribe-loaded",V),ui=new S("subscription-unsubscribe-success",V),vi=new S("subscription-external-unsubscribe",
ji),wi=new S("subscription-enable-ypc",V),xi=new S("subscription-prefs",gi),yi=new S("subscription-prefs-success",gi),zi=new S("subscription-prefs-failure",gi);function Ai(a){var b=kd("/signin?context=popup","next",document.location.protocol+"//"+document.domain+"/post_login"),b=kd(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Sb("LOGGED_IN",function(b){Ub(C("LOGGED_IN_PUBSUB_KEY",void 0));A("LOGGED_IN",!0);a(b)});
A("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",Vb,void 0);var W=null,Bi=[];function Ci(a){return{externalChannelId:a.externalChannelId,Ra:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Di(a){a&&a.externalChannelId&&Ei(Ci(a))}
function Ei(a){var b=C("PLAYER_CONFIG");b&&b.args&&void 0!==b.args.authuser||C("SESSION_INDEX")||C("LOGGED_IN")?(T(mi,new hi(a.externalChannelId,a.Ra?{itemType:"U",itemId:a.externalChannelId}:null)),a=jd({event:"subscribe",source:a.source}),ug("/gen_204?"+a,void 0)):Fi(a)}
function Fi(a){Ai(function(b){b.subscription_ajax&&Ei(a)})}
function Gi(a){a=Ci(a);T(ri,new ji(a.externalChannelId,a.subscriptionId,null));a=jd({event:"unsubscribe",source:a.source});ug("/gen_204?"+a,void 0)}
function Hi(a){W&&W.channelSubscribed(a.b,a.subscriptionId)}
function Ii(a){W&&W.channelUnsubscribed(a.b)}
;function Ji(a){x.call(this);this.g=a;this.g.subscribe("command",this.ya,this);this.i={};this.j=!1}
w(Ji,x);k=Ji.prototype;k.start=function(){this.j||this.f||(this.j=!0,Ki(this.g,"RECEIVING"))};
k.ya=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(t(c.event)&&(c=c.event,!(c in this.i))){var d=u(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":t(c.event)&&Li(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Mi(a,b||{}),c=this.b[a].apply(this.b,c),(c=Ni(a,c))&&this.j&&!this.f&&Ki(this.g,a,c))}}};
k.eb=function(a,b){this.j&&!this.f&&Ki(this.g,a,this.ia(a,b))};
k.ia=function(a,b){if(null!=b)return{value:b}};
function Li(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
k.o=function(){var a=this.g;a.f||Lb(a.b,"command",this.ya,this);this.g=null;for(var b in this.i)Li(this,b);Ji.B.o.call(this)};function Oi(a,b,c){lg.call(this);this.g=a;this.i=b;this.l=c}
w(Oi,lg);function Ki(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.l,command:b},c&&(a.data=c),d.b.postMessage(Ac(a),d.i))}}
Oi.prototype.o=function(){this.i=this.g=null;Oi.B.o.call(this)};new G;function Pi(){var a=this.f=new Tg(!!C("WIDGET_ID_ENFORCE")),b=u(this.ab,this);a.l=b;a.w=null;this.f.channel="widget";if(a=C("WIDGET_ID"))this.f.b=a;this.i=[];this.l=!1;this.j={}}
k=Pi.prototype;k.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,Qi(this,c)),this.j[c]=!0)}else this.Ca(a,b)};
k.Ca=function(){};
function Qi(a,b){return u(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.Ja=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");D(this.i,this.Aa,this);this.i=[]};
k.ja=function(){return null};
function Ri(a,b){a.sendMessage("infoDelivery",b)}
k.Aa=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Si(a,b,c){x.call(this);this.b=a;this.i=c;this.j=wf(window,"message",u(this.l,this));this.g=new Oi(this,a,b);Wa(this,ya(Xa,this.g))}
w(Si,x);Si.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,t(a))){try{a=yc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
Si.prototype.o=function(){xf(this.j);this.b=null;Si.B.o.call(this)};function Ti(a,b){Ji.call(this,b);this.b=a;this.start()}
w(Ti,Ji);Ti.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Ti.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Mi(a,b){switch(a){case "loadVideoById":return b=ci(b),ei(b),[b];case "cueVideoById":return b=ci(b),ei(b),[b];case "loadVideoByPlayerVars":return ei(b),[b];case "cueVideoByPlayerVars":return ei(b),[b];case "loadPlaylist":return b=di(b),ei(b),[b];case "cuePlaylist":return b=di(b),ei(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Ni(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ti.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ti.B.ia.call(this,a,b)};
Ti.prototype.o=function(){Ti.B.o.call(this);delete this.b};function Ui(a){Pi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",u(this.Xa,this));this.addEventListener("onVideoProgress",u(this.ib,this));this.addEventListener("onVolumeChange",u(this.jb,this));this.addEventListener("onApiChange",u(this.cb,this));this.addEventListener("onPlaybackQualityChange",u(this.fb,this));this.addEventListener("onPlaybackRateChange",u(this.gb,this));this.addEventListener("onStateChange",u(this.hb,this))}
w(Ui,Pi);k=Ui.prototype;k.Ca=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&ai(a)){var c;c=b;if(sa(c[0])&&!pa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=ci.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=bi.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=di.apply(window,c)}c=d}ei(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);ai(a)&&Ri(this,this.ja())}};
k.Xa=function(){var a=u(this.Ja,this);this.f.g=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();eb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=v()/1E3;return b};
k.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Ri(this,a)};
k.fb=function(a){Ri(this,{playbackQuality:a})};
k.gb=function(a){Ri(this,{playbackRate:a})};
k.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],n=this.b.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
k.jb=function(){Ri(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Ri(this,a)};
k.dispose=function(){Ui.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var Vi=document,X=window;var Wi=!1,Xi="";function Yi(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Wi=!0,a.description)){Xi=Yi(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Wi=!0;Xi="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Wi=!(!a||!a.enabledPlugin))){Xi=Yi(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Wi=!0;Xi=Yi(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Wi=!0;Xi="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Wi=!0,Xi=Yi(b.GetVariable("$version"))}catch(c){}})();
var Zi=Wi,$i=Xi;(function(){var a;return he?(a=/Windows NT ([0-9.]+)/,(a=a.exec(y))?a[1]:"0"):ge?(a=/10[_.][0-9_.]+/,(a=a.exec(y))?a[0].replace(/_/g,"."):"10"):ie?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(y))?a[1]:""):je||ke||le?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(y))?a[1].replace(/_/g,"."):""):""})();function aj(a){return(a=a.exec(y))?a[1]:""}
(function(){if(we)return aj(/Firefox\/([0-9.]+)/);if(O||de||ce)return re;if(Ae)return aj(/Chrome\/([0-9.]+)/);if(Be&&!($c()||z("iPad")||z("iPod")))return aj(/Version\/([0-9.]+)/);if(xe||ye){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y);if(a)return a[1]+"."+a[2]}else if(ze)return(a=aj(/Android\s+([0-9.]+)/))?a:aj(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
m.addEventListener("test",null,b)}catch(c){}return a})();var bj=(new Date).getTime();function cj(a){Ca.call(this,a.message||a.description||a.name);this.b=a instanceof Le}
w(cj,Ca);cj.prototype.name="BiscottiError";function dj(a,b){this.f=a;this.b=b}
dj.prototype.then=function(a,b,c){try{if(p(this.f))return a?Ie(a.call(c,this.f)):Ie(this.f);if(p(this.b)){if(!b)return Je(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Je(this.b):Ie(d)}throw Error("Invalid Result_ state");}catch(e){return Je(e)}};
Kc(dj);var xg={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ej=null;function fj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return gj(""),ej=new dj(""),"";a=JSON.parse(a.substr(4)).id;gj(a);ej=new dj(a);hj(18E5,2);return a}
function ij(a,b){var c=new cj(b);gj("");ej=new dj(void 0,c);0<a&&hj(12E4,a-1);throw c;}
function hj(a,b){F(function(){var a=u(ij,m,b),a=wg().then(fj,a);Ke(a,null,ka,void 0)},a)}
function gj(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function jj(){}
function kj(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!ej){var d=u(ij,m,2);ej=wg().then(fj,d)}c=ej}a=c}catch(e){a=Je(e)}a.then(lj,jj);F(kj,18E5)}catch(e){E(e)}}
function lj(a){var b;a:{try{b=window.top.location.href}catch(Z){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:bj,flash:$i||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=X.history.length}catch(Z){c=0}b.u_his=c;b.u_java=!!X.navigator&&"unknown"!==typeof X.navigator.javaEnabled&&!!X.navigator.javaEnabled&&X.navigator.javaEnabled();X.screen&&(b.u_h=X.screen.height,b.u_w=X.screen.width,b.u_ah=X.screen.availHeight,b.u_aw=X.screen.availWidth,b.u_cd=X.screen.colorDepth);
X.navigator&&X.navigator.plugins&&(b.u_nplug=X.navigator.plugins.length);X.navigator&&X.navigator.mimeTypes&&(b.u_nmime=X.navigator.mimeTypes.length);b.bid=a;b.ca_type=Zi?"flash":"image";if(M("enable_server_side_search_pyv")||M("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(Z){}try{var f=a.outerWidth,g=a.outerHeight}catch(Z){}try{var h=a.innerWidth,l=a.innerHeight}catch(Z){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,l];var n;e=window.top||X;try{var B;if(e.document&&!e.document.body)B=new Gc(-1,-1);else{var I=(e||window).document,fa="CSS1Compat"==I.compatMode?I.documentElement:I.body;B=(new Gc(fa.clientWidth,fa.clientHeight)).round()}n=B}catch(Z){n=new Gc(-12245933,-12245933)}B=0;window.SVGElement&&document.createElementNS&&(B|=1);za(b,{bc:B,bih:n.height,biw:n.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Vi.webkitVisibilityState||Vi.mozVisibilityState||Vi.visibilityState||""]||
0,wgl:!!X.WebGLRenderingContext})}Bf("//www.youtube.com/ad_data_204",{Na:!1,A:b})}
;function mj(){this.b=C("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Jc.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
la(mj);var Y=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Y,void 0);function nj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function oj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function pj(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
mj.prototype.get=function(a,b){oj(a);nj(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
mj.prototype.set=function(a,b){oj(a);nj(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
mj.prototype.remove=function(a){oj(a);nj(a);delete Y[a]};
mj.prototype.clear=function(){Y={}};function qj(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&ug(c.data.follow_on_url)}}
;function rj(a){R.call(this,1,arguments);this.ha=a}
w(rj,R);function sj(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
w(sj,R);function tj(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(tj,R);function uj(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
w(uj,R);function vj(a){R.call(this,1,arguments)}
w(vj,R);var wj=new S("ypc-core-load",rj),xj=new S("ypc-guide-sync-success",sj),yj=new S("ypc-purchase-success",tj),zj=new S("ypc-subscription-cancel",vj),Aj=new S("ypc-subscription-cancel-success",uj),Bj=new S("ypc-init-subscription",vj);var Cj=!1,Dj=[],Ej=[];function Fj(a){a.b?Cj?T(qi,a):T(wj,new rj(function(){T(Bj,new vj(a.b))})):Gj(a.f,a.i,a.g,a.source)}
function Hj(a){a.b?Cj?T(vi,a):T(wj,new rj(function(){T(zj,new vj(a.b))})):Ij(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Jj(a){Kj(fb(a.b))}
function Lj(a){Mj(fb(a.b))}
function Nj(a){Oj(a.g,a.f,a.b)}
function Pj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(pi,new ii(b,c,a.b.channelInfo))}
function Qj(a){var b=a.b;Da(a.f,function(a,d){T(pi,new ii(d,a,b[d]))})}
function Rj(a){T(ui,new V(a.f.itemId));a.b&&a.b.length&&(Sj(a.b,ui),Sj(a.b,wi))}
function Gj(a,b,c,d){var e=new V(a);T(ni,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=C("PLAYBACK_ID"))&&(c.plid=d);(d=C("EVENT_ID"))&&(c.ei=d);b&&Tj(b,c);Cf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",oa:f,A:c,F:function(b,c){var d=c.response;T(pi,new ii(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Vb("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&qj(d.actions)},
na:function(){T(oi,e)}})}
function Ij(a,b,c,d,e){var f=new V(a);T(si,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=C("PLAYBACK_ID"))&&(d.plid=a);(a=C("EVENT_ID"))&&(d.ei=a);c&&Tj(c,d);Cf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",oa:g,A:d,F:function(a,b){var c=b.response;T(ui,f);c.actions&&qj(c.actions)},
na:function(){T(ti,f)}})}
function Oj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new gi(a,b,c);Cf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",A:d,onError:function(){T(zi,e)},
F:function(){T(yi,e)}})}}
function Kj(a){if(a.length){var b=hb(a,0,40);T("subscription-batch-subscribe-loading");Sj(b,ni);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Sj(b,oi)};
Cf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",A:c,F:function(c,f){d();var e=f.response,h=e.id;if(pa(h)&&h.length==b.length){var l=e.channel_info_map;D(h,function(a,c){var d=b[c];T(pi,new ii(d,a,l[d]))});
a.length?Kj(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Mj(a){if(a.length){var b=hb(a,0,40);T("subscription-batch-unsubscribe-loading");Sj(b,si);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Sj(b,ti)};
Cf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",A:c,F:function(){d();Sj(b,ui);a.length&&Mj(a)},
onError:function(){d()}})}}
function Sj(a,b){D(a,function(a){T(b,new V(a))})}
function Tj(a,b){var c=ud(a);za(b,c)}
;var Uj=null,Vj=null,Wj=null,Xj={};function Yj(a){Pf(a.payload_name,a.payload,M("enable_youtubei_innertube")?Lf:bf,void 0)}
function Zj(a){var b=a.id;a=a.ve_type;var c=Sc++;a=new Rc(void 0,a,c);Xj[b]=a;b=$f();c=Zf();b&&c&&Qf(b,c,a)}
function ak(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(A("client-screen-nonce",b),A("ROOT_VE_TYPE",a),a=Zf()))for(var c in Xj)Qf(b,a,Xj[c])}
function bk(a){Xj[a.id]=new Rc(a.tracking_params)}
function ck(a){var b=$f();a=Xj[a.id];b&&a&&Rf(Sf(),{click:{csn:b,visualElement:Tc(a)}},void 0)}
function dk(a){a=a.ids;var b=$f();if(b){for(var c=[],d=0;d<a.length;d++){var e=Xj[a[d]];e&&c.push(e)}c.length&&Tf(b,c)}}
function ek(){var a=Uj;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",A,void 0);q("yt.setMsg",function(a){Ta(ag,arguments)},void 0);
q("yt.logging.errors.log",If,void 0);
q("writeEmbed",function(){var a=C("PLAYER_CONFIG",void 0);"1"!=a.privembed&&kj();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=C("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);C("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ei(a.args);Uj=a=Ph("player",a);a.addEventListener("onScreenChanged",ak);a.addEventListener("onLogClientVeCreated",Zj);a.addEventListener("onLogServerVeCreated",bk);a.addEventListener("onLogToGel",
Yj);a.addEventListener("onLogVeClicked",ck);a.addEventListener("onLogVesShown",dk);a.addEventListener("onReady",ek);b=C("POST_MESSAGE_ID","player");C("ENABLE_JS_API")?Wj=new Ui(a):C("ENABLE_POST_API")&&t(b)&&t(c)&&(Vj=new Si(window.parent,b,c),Wj=new Ti(a,Vj.g));C("BG_P")&&(C("BG_I")||C("BG_IU"))&&gc();lc();W=a;W.addEventListener("SUBSCRIBE",Di);W.addEventListener("UNSUBSCRIBE",Gi);Bi.push(U(pi,Hi),U(ui,Ii))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){ug(a+"mac_204?action_fcts=1");return!0},void 0);
var fk=mb(function(){kh("ol");Cj=!0;Ej.push(U(mi,Fj),U(ri,Hj));Cj||Ej.push(U(qi,Fj),U(vi,Hj),U(ki,Jj),U(li,Lj),U(xi,Nj),U(yj,Pj),U(Aj,Rj),U(xj,Qj));var a=mj.getInstance(),b=1<window.devicePixelRatio;if(!!((pj("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=pj(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Y[c]:Y[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Y)b.push(e+"="+escape(Y[e]));Jc.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),gk=mb(function(){var a=
Uj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();C("PL_ATT")&&(fc=null);for(var a=0,b=jc.length;a<b;a++){var c=jc[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}jc.length=0;a=bc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Xb(a),b.parentNode.removeChild(b);kc=!1;A("DCLKSTAT",0);Ub(Dj);Dj.length=0;dh(Ej);Ej.length=0;Cj=!1;W&&(W.removeEventListener("SUBSCRIBE",Ei),W.removeEventListener("UNSUBSCRIBE",Gi));W=null;dh(Bi);
Bi.length=0;Ya(Wj,Vj);if(a=Uj)a.removeEventListener("onScreenChanged",ak),a.removeEventListener("onLogClientVeCreated",Zj),a.removeEventListener("onLogServerVeCreated",bk),a.removeEventListener("onLogToGel",Yj),a.removeEventListener("onLogVeClicked",ck),a.removeEventListener("onLogVesShown",dk),a.removeEventListener("onReady",ek),a.destroy();Xj={}});
window.addEventListener?(window.addEventListener("load",fk),window.addEventListener("unload",gk)):window.attachEvent&&(window.attachEvent("onload",fk),window.attachEvent("onunload",gk));}).call(this);
