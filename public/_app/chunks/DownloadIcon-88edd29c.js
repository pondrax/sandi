import{S as w,i as k,s as v,F as u,G as c,a as f,d as h,b as t,g as m,H as d,E as g}from"./index-29d38ad4.js";function _(l){let e,a,i,n,o;return{c(){e=u("svg"),a=u("path"),i=u("polyline"),n=u("line"),this.h()},l(s){e=c(s,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var r=f(e);a=c(r,"path",{d:!0}),f(a).forEach(h),i=c(r,"polyline",{points:!0}),f(i).forEach(h),n=c(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),f(n).forEach(h),r.forEach(h),this.h()},h(){t(a,"d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"),t(i,"points","7 10 12 15 17 10"),t(n,"x1","12"),t(n,"y1","15"),t(n,"x2","12"),t(n,"y2","3"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"width",l[0]),t(e,"height",l[0]),t(e,"fill","none"),t(e,"viewBox","0 0 24 24"),t(e,"stroke","currentColor"),t(e,"stroke-width",l[1]),t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"class",o="feather feather-download "+l[2])},m(s,r){m(s,e,r),d(e,a),d(e,i),d(e,n)},p(s,[r]){r&1&&t(e,"width",s[0]),r&1&&t(e,"height",s[0]),r&2&&t(e,"stroke-width",s[1]),r&4&&o!==(o="feather feather-download "+s[2])&&t(e,"class",o)},i:g,o:g,d(s){s&&h(e)}}}function p(l,e,a){let{size:i="100%"}=e,{strokeWidth:n=2}=e,{class:o=""}=e;return i!=="100%"&&(i=i.slice(-1)==="x"?i.slice(0,i.length-1)+"em":parseInt(i)+"px"),l.$$set=s=>{"size"in s&&a(0,i=s.size),"strokeWidth"in s&&a(1,n=s.strokeWidth),"class"in s&&a(2,o=s.class)},[i,n,o]}class y extends w{constructor(e){super(),k(this,e,p,_,v,{size:0,strokeWidth:1,class:2})}}export{y as D};