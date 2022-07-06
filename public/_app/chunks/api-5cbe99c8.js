var Pe=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var ee=(r,e,t)=>e in r?Pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_=(r,e)=>{for(var t in e||(e={}))$e.call(e,t)&&ee(r,t,e[t]);if(Z)for(var t of Z(e))Te.call(e,t)&&ee(r,t,e[t]);return r};import{E as Ue}from"./variables-3aad20e0.js";import{w as $}from"./index-a832b3bb.js";var z={exports:{}},de=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},je=de,E=Object.prototype.toString;function V(r){return Array.isArray(r)}function M(r){return typeof r=="undefined"}function Be(r){return r!==null&&!M(r)&&r.constructor!==null&&!M(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function he(r){return E.call(r)==="[object ArrayBuffer]"}function Le(r){return E.call(r)==="[object FormData]"}function _e(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&he(r.buffer),e}function De(r){return typeof r=="string"}function ke(r){return typeof r=="number"}function pe(r){return r!==null&&typeof r=="object"}function N(r){if(E.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function qe(r){return E.call(r)==="[object Date]"}function Ie(r){return E.call(r)==="[object File]"}function Fe(r){return E.call(r)==="[object Blob]"}function me(r){return E.call(r)==="[object Function]"}function Me(r){return pe(r)&&me(r.pipe)}function He(r){return E.call(r)==="[object URLSearchParams]"}function Je(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ze(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function W(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),V(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function H(){var r={};function e(n,s){N(r[s])&&N(n)?r[s]=H(r[s],n):N(n)?r[s]=H({},n):V(n)?r[s]=n.slice():r[s]=n}for(var t=0,a=arguments.length;t<a;t++)W(arguments[t],e);return r}function Ve(r,e,t){return W(e,function(n,s){t&&typeof n=="function"?r[s]=je(n,t):r[s]=n}),r}function We(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:V,isArrayBuffer:he,isBuffer:Be,isFormData:Le,isArrayBufferView:_e,isString:De,isNumber:ke,isObject:pe,isPlainObject:N,isUndefined:M,isDate:qe,isFile:Ie,isBlob:Fe,isFunction:me,isStream:Me,isURLSearchParams:He,isStandardBrowserEnv:ze,forEach:W,merge:H,extend:Ve,trim:Je,stripBOM:We},C=h;function re(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ve=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(C.isURLSearchParams(t))n=t.toString();else{var s=[];C.forEach(t,function(l,m){l===null||typeof l=="undefined"||(C.isArray(l)?m=m+"[]":l=[l],C.forEach(l,function(f){C.isDate(f)?f=f.toISOString():C.isObject(f)&&(f=JSON.stringify(f)),s.push(re(m)+"="+re(f))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Xe=h;function T(){this.handlers=[]}T.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};T.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};T.prototype.forEach=function(e){Xe.forEach(this.handlers,function(a){a!==null&&e(a)})};var Ke=T,Ge=h,Ye=function(e,t){Ge.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},be=function(e,t,a,n,s){return e.config=t,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Qe=be,Ee=function(e,t,a,n,s){var o=new Error(e);return Qe(o,t,a,n,s)},Ze=Ee,er=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Ze("Request failed with status code "+a.status,a.config,null,a.request,a))},g=h,rr=g.isStandardBrowserEnv()?function(){return{write:function(t,a,n,s,o,u){var l=[];l.push(t+"="+encodeURIComponent(a)),g.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),g.isString(s)&&l.push("path="+s),g.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),tr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},nr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},ar=tr,sr=nr,ir=function(e,t){return e&&!ar(t)?sr(e,t):t},D=h,or=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ur=function(e){var t={},a,n,s;return e&&D.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=D.trim(u.substr(0,s)).toLowerCase(),n=D.trim(u.substr(s+1)),a){if(t[a]&&or.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},te=h,lr=te.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=te.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function X(r){this.message=r}X.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};X.prototype.__CANCEL__=!0;var U=X,A=h,fr=er,cr=rr,dr=ve,hr=ir,pr=ur,mr=lr,k=Ee,vr=ye,br=U,ne=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}A.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+b)}var d=hr(e.baseURL,e.url);i.open(e.method.toUpperCase(),dr(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function Y(){if(!!i){var v="getAllResponseHeaders"in i?pr(i.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?i.responseText:i.response,w={data:S,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};fr(function(L){a(L),m()},function(L){n(L),m()},w),i=null}}if("onloadend"in i?i.onloadend=Y:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(Y)},i.onabort=function(){!i||(n(k("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(k("Network Error",e,null,i)),i=null},i.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||vr;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(k(S,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},A.isStandardBrowserEnv()){var Q=(e.withCredentials||mr(d))&&e.xsrfCookieName?cr.read(e.xsrfCookieName):void 0;Q&&(o[e.xsrfHeaderName]=Q)}"setRequestHeader"in i&&A.forEach(o,function(S,w){typeof s=="undefined"&&w.toLowerCase()==="content-type"?delete o[w]:i.setRequestHeader(w,S)}),A.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!i||(n(!v||v&&v.type?new br("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),i.send(s)})},c=h,ae=Ye,yr=be,Er=ye,wr={"Content-Type":"application/x-www-form-urlencoded"};function se(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Sr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ne),r}function Cr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var j={transitional:Er,adapter:Sr(),transformRequest:[function(e,t){return ae(t,"Accept"),ae(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(se(t,"application/json"),Cr(e)):e}],transformResponse:[function(e){var t=this.transitional||j.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?yr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){j.headers[e]={}});c.forEach(["post","put","patch"],function(e){j.headers[e]=c.merge(wr)});var K=j,Or=h,Rr=K,xr=function(e,t,a){var n=this||Rr;return Or.forEach(a,function(o){e=o.call(n,e,t)}),e},we=function(e){return!!(e&&e.__CANCEL__)},ie=h,q=xr,gr=we,Ar=K,Nr=U;function I(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Nr("canceled")}var Pr=function(e){I(e),e.headers=e.headers||{},e.data=q.call(e,e.data,e.headers,e.transformRequest),e.headers=ie.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ie.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Ar.adapter;return t(e).then(function(n){return I(e),n.data=q.call(e,n.data,n.headers,e.transformResponse),n},function(n){return gr(n)||(I(e),n&&n.response&&(n.response.data=q.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,Se=function(e,t){t=t||{};var a={};function n(i,f){return p.isPlainObject(i)&&p.isPlainObject(f)?p.merge(i,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function s(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!p.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function l(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var b=m[f]||s,d=b(f);p.isUndefined(d)&&b!==l||(a[f]=d)}),a},Ce={version:"0.26.1"},$r=Ce.version,G={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){G[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var oe={};G.transitional=function(e,t,a){function n(s,o){return"[Axios v"+$r+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!oe[o]&&(oe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,u):!0}};function Tr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=r[s],l=u===void 0||o(u,s,r);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+s)}}var Ur={assertOptions:Tr,validators:G},Oe=h,jr=ve,ue=Ke,le=Pr,B=Se,Re=Ur,O=Re.validators;function x(r){this.defaults=r,this.interceptors={request:new ue,response:new ue}}x.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=B(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&Re.assertOptions(a,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(s=s&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!s){var l=[le,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=t;n.length;){var i=n.shift(),f=n.shift();try{m=i(m)}catch(b){f(b);break}}try{u=le(m)}catch(b){return Promise.reject(b)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};x.prototype.getUri=function(e){return e=B(this.defaults,e),jr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Oe.forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(t,a){return this.request(B(a||{},{method:e,url:t,data:(a||{}).data}))}});Oe.forEach(["post","put","patch"],function(e){x.prototype[e]=function(t,a,n){return this.request(B(n||{},{method:e,url:t,data:a}))}});var Br=x,Lr=U;function R(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){t.subscribe(o),n=o}).then(a);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Lr(n),e(t.reason))})}R.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};R.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};R.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};R.source=function(){var e,t=new R(function(n){e=n});return{token:t,cancel:e}};var _r=R,Dr=function(e){return function(a){return e.apply(null,a)}},kr=h,qr=function(e){return kr.isObject(e)&&e.isAxiosError===!0},fe=h,Ir=de,P=Br,Fr=Se,Mr=K;function xe(r){var e=new P(r),t=Ir(P.prototype.request,e);return fe.extend(t,P.prototype,e),fe.extend(t,e),t.create=function(n){return xe(Fr(r,n))},t}var y=xe(Mr);y.Axios=P;y.Cancel=U;y.CancelToken=_r;y.isCancel=we;y.VERSION=Ce.version;y.all=function(e){return Promise.all(e)};y.spread=Dr;y.isAxiosError=qr;z.exports=y;z.exports.default=y;var ge=z.exports;let ce=$({name:"Pengguna Esign",nip:"NIP",jabatan:"Member",status:"ISSUE",unit_kerja:"Pemerintah Kota Mojokerto",avatar:"/logo.png"}),Ae=$(null),Vr=$([]),Wr=$("dokumen");localStorage.getItem("access_user")?(ce.set(JSON.parse(localStorage.getItem("access_user"))||{}),Ae.set(localStorage.getItem("access_token")),ce.subscribe(r=>localStorage.setItem("access_user",JSON.stringify(r)))):location.href.includes("/app/")&&(location.href="/");let J;Ae.subscribe(r=>J=r);const F=ge.create({baseURL:Ue.apiUrl}),Xr=(r,e,t,a)=>{const n=ge.CancelToken.source();return a=Object.assign(a||{},{cancelToken:n.token}),J?F("/sanctum/csrf-cookie").then(()=>{const s={Authorization:`Bearer ${J}`};return F(_({method:r,url:e,data:t,headers:s},a)).then(o=>Promise.resolve(o.data)).catch(o=>Promise.reject(o))}):F(_({method:r,url:e,data:t},a)).then(s=>Promise.resolve(s.data)).catch(s=>Promise.reject(s))};export{Xr as h,Wr as m,Vr as n,ce as u};