function W(){}function rt(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(X)}function ct(t){return typeof t=="function"}function Nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Mt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function lt(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return W;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ct(t,e,n){t.$$.on_destroy.push(at(e,n))}function jt(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?rt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Lt(t,e,n,i,s,c){if(s){const o=Y(e,n,i,c);t.p(o,s)}}function qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Dt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ot(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function zt(t){const e={};for(const n in t)e[n]=!0;return e}function Pt(t,e,n){return t.set(n),e}let j=!1;function ut(){j=!0}function ft(){j=!1}function dt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:dt(1,s,d=>e[n[d]].claim_order,a))-1;i[r]=n[f]+1;const _=f+1;n[_]=r,s=Math.max(_,s)}const c=[],o=[];let l=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);l>=r;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);c.reverse(),o.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<o.length;r++){for(;a<c.length&&o[r].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(o[r],f)}}function ht(t,e){t.appendChild(e)}function mt(t,e){if(j){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){t.insertBefore(e,n||null)}function yt(t,e,n){j&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function gt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Wt(){return G(" ")}function It(){return G("")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ft(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:bt(t,i,e[i])}function Jt(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function Kt(t){return t===""?null:+t}function wt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const r=n(l);return r===void 0?t.splice(o,1):t[o]=r,s||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const r=n(l);return r===void 0?t.splice(o,1):t[o]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function et(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const c=[];for(let o=0;o<s.attributes.length;o++){const l=s.attributes[o];n[l.name]||c.push(l.name)}c.forEach(o=>s.removeAttribute(o))},()=>i(e))}function Qt(t,e,n){return et(t,e,n,I)}function Ut(t,e,n){return et(t,e,n,gt)}function xt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Vt(t){return xt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Xt(t){const e=Q(t,"HTML_TAG_START",0),n=Q(t,"HTML_TAG_END",e);if(e===n)return new U;Z(t);const i=t.splice(e,n-e+1);x(i[0]),x(i[i.length-1]);const s=i.slice(1,i.length-1);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(s)}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e==null?"":e}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ee(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ne(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function ie(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let T;function $t(){if(T===void 0){T=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{T=!0}}return T}function se(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=I("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=$t();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=K(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=K(i.contentWindow,"resize",e)}),ht(t,i),()=>{(s||c&&i.contentWindow)&&c(),x(i)}}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function re(t,e=document.body){return Array.from(e.querySelectorAll(t))}class kt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class U extends kt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)yt(this.t,this.n[n],e)}}let $;function w(t){$=t}function k(){if(!$)throw new Error("Function called outside component initialization");return $}function ce(t){k().$$.on_mount.push(t)}function le(t){k().$$.after_update.push(t)}function ae(t){k().$$.on_destroy.push(t)}function ue(){const t=k();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=vt(e,n);i.slice().forEach(c=>{c.call(t,s)})}}}function fe(t,e){k().$$.context.set(t,e)}function de(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],V=[],M=[],z=[],nt=Promise.resolve();let P=!1;function it(){P||(P=!0,nt.then(st))}function _e(){return it(),nt}function B(t){M.push(t)}function he(t){z.push(t)}const O=new Set;let N=0;function st(){const t=$;do{for(;N<b.length;){const e=b[N];N++,w(e),Et(e.$$)}for(w(null),b.length=0,N=0;V.length;)V.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];O.has(n)||(O.add(n),n())}M.length=0}while(b.length);for(;z.length;)z.pop()();P=!1,O.clear(),w(t)}function Et(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const C=new Set;let g;function me(){g={r:0,c:[],p:g}}function pe(){g.r||v(g.c),g=g.p}function ot(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ge=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function be(t,e){t.d(1),e.delete(t.key)}function we(t,e,n,i,s,c,o,l,r,a,f,_){let d=t.length,m=c.length,h=d;const H={};for(;h--;)H[t[h].key]=h;const E=[],L=new Map,q=new Map;for(h=m;h--;){const u=_(s,c,h),p=n(u);let y=o.get(p);y?i&&y.p(u,e):(y=a(p,u),y.c()),L.set(p,E[h]=y),p in H&&q.set(p,Math.abs(h-H[p]))}const F=new Set,R=new Set;function D(u){ot(u,1),u.m(l,f),o.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=E[m-1],p=t[d-1],y=u.key,A=p.key;u===p?(f=u.first,d--,m--):L.has(A)?!o.has(y)||F.has(y)?D(u):R.has(A)?d--:q.get(y)>q.get(A)?(R.add(y),D(u)):(F.add(A),d--):(r(p,o),d--)}for(;d--;){const u=t[d];L.has(u.key)||r(u,o)}for(;m;)D(E[m-1]);return E}function xe(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const o=t[c],l=e[c];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)s[r]||(n[r]=l[r],s[r]=1);t[c]=l}else for(const r in o)s[r]=1}for(const o in i)o in n||(n[o]=void 0);return n}function $e(t){return typeof t=="object"&&t!==null?t:{}}function ve(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ke(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function At(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:o,after_update:l}=t.$$;s&&s.m(e,n),i||B(()=>{const r=c.map(X).filter(ct);o?o.push(...r):v(r),t.$$.on_mount=[]}),l.forEach(B)}function St(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(b.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,s,c,o,l=[-1]){const r=$;w(t);const a=t.$$={fragment:null,ctx:null,props:c,update:W,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};o&&o(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),f&&Tt(t,_)),d}):[],a.update(),f=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ut();const _=wt(e.target);a.fragment&&a.fragment.l(_),_.forEach(x)}else a.fragment&&a.fragment.c();e.intro&&ot(t.$$.fragment),At(t,e.target,e.anchor,e.customElement),ft(),st()}w(r)}class Se{$destroy(){St(this,1),this.$destroy=W}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Jt as $,$e as A,St as B,rt as C,_e as D,W as E,gt as F,Ut as G,mt as H,jt as I,re as J,Lt as K,qt as L,Ht as M,Ot as N,Dt as O,de as P,Rt as Q,oe as R,Se as S,K as T,Ft as U,V,Mt as W,ge as X,ve as Y,Gt as Z,he as _,wt as a,v as a0,we as a1,be as a2,Bt as a3,Zt as a4,Kt as a5,zt as a6,Ct as a7,ue as a8,U as a9,Xt as aa,ae as ab,B as ac,se as ad,ct as ae,ne as af,ee as ag,ie as ah,Pt as ai,bt as b,Qt as c,x as d,I as e,te as f,yt as g,xt as h,Ae as i,Yt as j,Wt as k,It as l,Vt as m,me as n,ye as o,pe as p,ot as q,fe as r,Nt as s,G as t,le as u,ce as v,ke as w,Ee as x,At as y,xe as z};
