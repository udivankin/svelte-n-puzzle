var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}let g;function h(t){g=t}function w(){if(!g)throw new Error("Function called outside component initialization");return g}function v(t){w().$$.on_mount.push(t)}function y(t){return w().$$.context.get(t)}const x=[],b=[],S=[],I=[],_=Promise.resolve();let k=!1;function E(t){S.push(t)}let M=!1;const z=new Set;function A(){if(!M){M=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];h(e),C(e.$$)}for(x.length=0;b.length;)b.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];z.has(e)||(z.add(e),e())}S.length=0}while(x.length);for(;I.length;)I.pop()();k=!1,M=!1,z.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const B=new Set;let N;function O(t,e){t&&t.i&&(B.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),N.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function L(t){t&&t.c()}function P(t,n,s){const{fragment:l,on_mount:c,on_destroy:i,after_update:a}=t.$$;l&&l.m(n,s),E(()=>{const n=c.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(E)}function H(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(x.push(t),k||(k=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,o,s,l,c,a,u=[-1]){const f=g;h(e);const d=o.props||{},$=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let p=!1;if($.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return $.ctx&&c($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),p&&T(e,t)),n}):[],$.update(),p=!0,r($.before_update),$.fragment=!!l&&l($.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();o.intro&&O(e.$$.fragment),P(e,o.target,o.anchor),A()}h(f)}class F{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function R(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function Y(t){let e,n=0!==t[9]&&function(t){let e,n,r,o,s,a,d,m;function g(...e){return t[6](t[9],...e)}return{c(){e=u("g"),n=u("rect"),r=u("text"),o=f(t[9]),p(n,"height","22"),p(n,"width","22"),p(n,"stroke-width","0"),p(n,"x","1"),p(n,"y","1"),p(n,"class","svelte-1li683d"),p(r,"font-size","12"),p(r,"transform",s="translate(12, 16)"),p(r,"text-anchor","middle"),p(r,"class","svelte-1li683d"),p(e,"class","tile svelte-1li683d"),p(e,"key",a=t[9]),p(e,"transform",d=`translate(${24*t[7][1]}, ${24*t[7][0]})`)},m(t,s,i){c(t,e,s),l(e,n),l(e,r),l(r,o),i&&m(),m=$(e,"click",g)},p(n,r){t=n,4&r&&d!==(d=`translate(${24*t[7][1]}, ${24*t[7][0]})`)&&p(e,"transform",d)},d(t){t&&i(e),m()}}}(t);return{c(){n&&n.c(),e=f("")},m(t,r){n&&n.m(t,r),c(t,e,r)},p(t,e){0!==t[9]&&n.p(t,e)},d(t){n&&n.d(t),t&&i(e)}}}function D(e){let n,r,o,s=e[2],f=[];for(let t=0;t<s.length;t+=1)f[t]=Y(R(e,s,t));return{c(){n=a("div"),r=u("svg");for(let t=0;t<f.length;t+=1)f[t].c();p(r,"class","board svelte-1li683d"),p(r,"width","100%"),p(r,"height","100%"),p(r,"viewBox",o=`0 0 ${24*e[0]} ${24*e[1]}`),p(r,"xmlns","http://www.w3.org/2000/svg"),p(n,"class","board-wrapper svelte-1li683d")},m(t,e){c(t,n,e),l(n,r);for(let t=0;t<f.length;t+=1)f[t].m(r,null)},p(t,[e]){if(12&e){let n;for(s=t[2],n=0;n<s.length;n+=1){const o=R(t,s,n);f[n]?f[n].p(o,e):(f[n]=Y(o),f[n].c(),f[n].m(r,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=s.length}3&e&&o!==(o=`0 0 ${24*t[0]} ${24*t[1]}`)&&p(r,"viewBox",o)},i:t,o:t,d(t){t&&i(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(f,t)}}}function G(t,e,n){let{tiles:r}=e,o=y("updateState");const s=t=>{const e=[];return t.forEach((t,n)=>{t.forEach((t,r)=>{e[t]=[n,r]})}),e};let l,c,i;return t.$set=t=>{"tiles"in t&&n(4,r=t.tiles)},t.$$.update=()=>{16&t.$$.dirty&&n(0,l=r[0].length),16&t.$$.dirty&&n(1,c=r.length),16&t.$$.dirty&&n(2,i=s(r))},[l,c,i,o,r,s,t=>{o("move",t)}]}class J extends F{constructor(t){super(),q(this,t,G,D,s,{tiles:4})}}function K(e){let n,r,o,s,u,f,m,g,h,w,v;return{c(){n=a("div"),r=a("div"),o=d(),s=a("div"),s.textContent="You did it!",u=d(),f=a("audio"),g=d(),h=a("div"),w=a("a"),w.textContent="Play again!",p(r,"class","congrats-star svelte-b4iurp"),p(s,"class","congrats-header svelte-b4iurp"),f.src!==(m="build/win.ogg")&&p(f,"src","build/win.ogg"),p(w,"href","#"),p(w,"alt","Play again!"),p(w,"class","svelte-b4iurp"),p(h,"class","congrats-controls svelte-b4iurp"),p(n,"class","congrats svelte-b4iurp")},m(t,i,a){c(t,n,i),l(n,r),l(n,o),l(n,s),l(n,u),l(n,f),e[5](f),l(n,g),l(n,h),l(h,w),a&&v(),v=$(w,"click",e[6])},p:t,i:t,o:t,d(t){t&&i(n),e[5](null),v()}}}function Q(t,e,n){let r,{tiles:o}=e,s=y("updateState");v(()=>{r.play()});let l,c;return t.$set=t=>{"tiles"in t&&n(4,o=t.tiles)},t.$$.update=()=>{16&t.$$.dirty&&n(1,l=o[0].length),16&t.$$.dirty&&n(2,c=o.length)},[r,l,c,s,o,function(t){b[t?"unshift":"push"](()=>{n(0,r=t)})},()=>s("updateSize",c,l)]}class U extends F{constructor(t){super(),q(this,t,Q,K,s,{tiles:4})}}function V(t){let e,n,r,o,s=t[0]>0?"+":"-";return{c(){e=u("circle"),n=u("text"),r=f(s),p(e,"cx","12"),p(e,"cy","12"),p(e,"fill","#fff"),p(e,"fill-opacity","0.1"),p(e,"r","11"),p(e,"stroke-width","0.5"),p(e,"stroke","#fff"),p(n,"text-anchor","middle"),p(n,"font-size","9"),p(n,"font-weight","bold"),p(n,"transform",o="translate(12, 15.5)"),p(n,"fill","#fff")},m(t,o){c(t,e,o),c(t,n,o),l(n,r)},p(t,e){1&e&&s!==(s=t[0]>0?"+":"-")&&m(r,s)},d(t){t&&i(e),t&&i(n)}}}function W(e){let n,r,o,s;return{c(){n=u("circle"),r=u("g"),o=u("path"),s=u("path"),p(n,"cx","12"),p(n,"cy","12"),p(n,"fill","#0dad8a"),p(n,"r","11"),p(o,"d","M6.59 9.49h2.43c.51 0 .97.27 1.29.68.22-.4.5-.8.82-1.15a2.95 2.95 0\n        00-2.11-.93H6.59a.7.7 0 100 1.4zm5.34 2.15c.38-1.15 1.56-2.15\n        2.53-2.15h1.28l-.9.89a.7.7 0 10.97.98L18.4 8.8l-2.57-2.57a.7.7 0\n        10-.98.98l.9.9h-1.28c-1.58 0-3.27 1.36-3.85 3.1l-.33.99c-.45 1.33-1.44\n        2.15-1.95 2.15H6.58a.7.7 0 100 1.4h1.75c1.28 0 2.69-1.34\n        3.28-3.12l.32-.98z"),p(s,"d","M15 12.47a.7.7 0 000 .98l.9.9h-1.63a2 2 0 01-1.88-1.47 6.36 6.36 0\n        01-.75 1.52 3.3 3.3 0 002.63 1.34h1.62l-.9.89a.7.7 0\n        10.98.98l2.58-2.57-2.57-2.57a.7.7 0 00-.99 0z"),p(r,"fill","#fff")},m(t,e){c(t,n,e),c(t,r,e),l(r,o),l(r,s)},p:t,d(t){t&&i(n),t&&i(r)}}}function X(e){let n,r;function o(t,e){return t[3]?W:V}let s=o(e),l=s(e);return{c(){n=u("svg"),l.c(),p(n,"class","btn svelte-1lgdls7"),p(n,"viewBox","0 0 24 24"),p(n,"xmlns","http://www.w3.org/2000/svg")},m(t,o,s){c(t,n,o),l.m(n,null),s&&r(),r=$(n,"click",e[8])},p(t,[e]){s===(s=o(t))&&l?l.p(t,e):(l.d(1),l=s(t),l&&(l.c(),l.m(n,null)))},i:t,o:t,d(t){t&&i(n),l.d(),r()}}}function Z(t,e,n){let{direction:r=0}=e,{update:o=[]}=e,{rows:s}=e,{cols:l}=e,{shuffle:c=!1}=e,i=y("updateState");let a,u;return t.$set=t=>{"direction"in t&&n(0,r=t.direction),"update"in t&&n(7,o=t.update),"rows"in t&&n(1,s=t.rows),"cols"in t&&n(2,l=t.cols),"shuffle"in t&&n(3,c=t.shuffle)},t.$$.update=()=>{128&t.$$.dirty&&n(4,a="rows"===o[0]),128&t.$$.dirty&&n(5,u="cols"===o[0]),128&t.$$.dirty&&n(0,r=o[1])},[r,s,l,c,a,u,i,o,()=>{const t=c?s:Math.max(2,s+(a?r:0)),e=c?l:Math.max(2,l+(u?r:0));i("updateSize",t,e)}]}class tt extends F{constructor(t){super(),q(this,t,Z,X,s,{direction:0,update:7,rows:1,cols:2,shuffle:3})}}function et(t,e){return Array.from({length:Math.abs(t-e)},(n,r)=>t+r*(t>e?-1:1))}function nt(t){return t[Math.floor(Math.random()*t.length)]}function rt(t,e){const n=t.findIndex(t=>t.indexOf(e)>-1);return[n,t[n].indexOf(e)]}function ot(t,e){const[n,r]=rt(t,0),[o,s]=rt(t,e);let l=0;if(n!==o&&r!==s)return[t,l];if(n===o){const e=r<s?1:-1;et(r,s).forEach(r=>{[t[n][r],t[n][r+e]]=[t[n][r+e],t[n][r]],l+=1})}else{const e=n<o?1:-1;et(n,o).forEach(n=>{[t[n][r],t[n+e][r]]=[t[n+e][r],t[n][r]],l+=1})}return[t,l]}function st(t,e=Math.round(Math.random())){const[n,r]=rt(t,0);let o=nt(0===e?t[n].filter(t=>0!==t):t.map(t=>t[r]).filter(Boolean));return ot(t,o)}function lt(t,e){const n=[];for(let r=0;r<t;r++)n.push(Array.from({length:e},(t,n)=>n+e*r+1));return n[t-1][e-1]=0,n}function ct(t){for(let e=0;e<t.length*t[0].length**2;e++)st(t);return it(t)?st(t)[0]:t}function it(t,e=t.length,n=t[0].length){for(let r=0,o=0;r<e;r++)for(let s=0;s<n;s++){if(o++,0===t[r][s]&&o===e*n)return!0;if(t[r][s]!==o)return!1}return!0}function at(t){let e,n,r,o,s,u,m,g,h,w,v,y;const x=new tt({props:{cols:t[0],rows:t[1],update:["rows",-1]}}),b=new tt({props:{cols:t[0],rows:t[1],update:["rows",1]}}),S=new tt({props:{cols:t[0],rows:t[1],update:["cols",-1]}}),I=new tt({props:{cols:t[0],rows:t[1],update:["cols",1]}}),_=new tt({props:{cols:t[0],rows:t[1],shuffle:!0}});return{c(){e=a("div"),n=a("div"),r=f("Rows\n    "),L(x.$$.fragment),o=d(),L(b.$$.fragment),s=d(),u=a("div"),m=f("Columns\n    "),L(S.$$.fragment),g=d(),L(I.$$.fragment),h=d(),w=a("div"),L(_.$$.fragment),p(n,"class","rows-controls svelte-oumnd5"),p(u,"class","cols-controls svelte-oumnd5"),p(w,"class","aside-controls svelte-oumnd5"),p(e,"class","controls svelte-oumnd5")},m(i,a,f){c(i,e,a),l(e,n),l(n,r),P(x,n,null),l(n,o),P(b,n,null),l(e,s),l(e,u),l(u,m),P(S,u,null),l(u,g),P(I,u,null),l(e,h),l(e,w),P(_,w,null),v=!0,f&&y(),y=$(window,"keydown",t[2])},p(t,[e]){const n={};1&e&&(n.cols=t[0]),2&e&&(n.rows=t[1]),x.$set(n);const r={};1&e&&(r.cols=t[0]),2&e&&(r.rows=t[1]),b.$set(r);const o={};1&e&&(o.cols=t[0]),2&e&&(o.rows=t[1]),S.$set(o);const s={};1&e&&(s.cols=t[0]),2&e&&(s.rows=t[1]),I.$set(s);const l={};1&e&&(l.cols=t[0]),2&e&&(l.rows=t[1]),_.$set(l)},i(t){v||(O(x.$$.fragment,t),O(b.$$.fragment,t),O(S.$$.fragment,t),O(I.$$.fragment,t),O(_.$$.fragment,t),v=!0)},o(t){j(x.$$.fragment,t),j(b.$$.fragment,t),j(S.$$.fragment,t),j(I.$$.fragment,t),j(_.$$.fragment,t),v=!1},d(t){t&&i(e),H(x),H(b),H(S),H(I),H(_),y()}}}function ut(t,e,n){let{tiles:r}=e,o=y("updateState");let s,l;return t.$set=t=>{"tiles"in t&&n(3,r=t.tiles)},t.$$.update=()=>{8&t.$$.dirty&&n(0,s=r[0].length),8&t.$$.dirty&&n(1,l=r.length)},[s,l,({keyCode:t})=>{const[e,n]=rt(r,0);let c;37===t&&n<s-1?c=r[e][n+1]:38===t&&e<l-1?c=r[e+1][n]:39===t&&n>0?c=r[e][n-1]:40===t&&e>0&&(c=r[e-1][n]),c&&o("move",c)},r]}class ft extends F{constructor(t){super(),q(this,t,ut,at,s,{tiles:3})}}function dt(e){let n,r,o,s,u,$,g,h;return{c(){n=a("div"),r=a("span"),o=f("Move: "),s=f(e[0]),u=d(),$=a("span"),g=f("Time: "),h=f(e[1]),p(r,"class","svelte-1yxoovo"),p($,"class","svelte-1yxoovo"),p(n,"class","stats svelte-1yxoovo")},m(t,e){c(t,n,e),l(n,r),l(r,o),l(r,s),l(n,u),l(n,$),l($,g),l($,h)},p(t,[e]){1&e&&m(s,t[0]),2&e&&m(h,t[1])},i:t,o:t,d(t){t&&i(n)}}}function $t(t,e,n){let r,o,s,{moveId:l}=e,{gameId:c}=e;const i=()=>(clearInterval(s),s=setInterval(()=>{n(3,r+=1)},1e3),()=>clearInterval(s));let a;return v(i),t.$set=t=>{"moveId"in t&&n(0,l=t.moveId),"gameId"in t&&n(2,c=t.gameId)},t.$$.update=()=>{20&t.$$.dirty&&o!==c&&(n(3,r=0),n(4,o=c),i()),8&t.$$.dirty&&n(1,a=(t=>{const e=Math.floor(t/3600);return[e,Math.floor((t-3600*e)/60),t%60].map(t=>String(t).padStart(2,"0")).join(":")})(r))},[l,a,c]}class pt extends F{constructor(t){super(),q(this,t,$t,dt,s,{moveId:0,gameId:2})}}function mt(t){let e,n,r;const o=new ft({props:{tiles:t[0]}}),s=new J({props:{tiles:t[0]}}),l=new pt({props:{moveId:t[1],gameId:t[2]}});return{c(){L(o.$$.fragment),e=d(),L(s.$$.fragment),n=d(),L(l.$$.fragment)},m(t,i){P(o,t,i),c(t,e,i),P(s,t,i),c(t,n,i),P(l,t,i),r=!0},p(t,e){const n={};1&e&&(n.tiles=t[0]),o.$set(n);const r={};1&e&&(r.tiles=t[0]),s.$set(r);const c={};2&e&&(c.moveId=t[1]),4&e&&(c.gameId=t[2]),l.$set(c)},i(t){r||(O(o.$$.fragment,t),O(s.$$.fragment,t),O(l.$$.fragment,t),r=!0)},o(t){j(o.$$.fragment,t),j(s.$$.fragment,t),j(l.$$.fragment,t),r=!1},d(t){H(o,t),t&&i(e),H(s,t),t&&i(n),H(l,t)}}}function gt(t){let e;const n=new U({props:{tiles:t[0]}});return{c(){L(n.$$.fragment)},m(t,r){P(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.tiles=t[0]),n.$set(r)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function ht(t){let e,n,o,s;const l=[gt,mt],u=[];function f(t,e){return t[3]?0:1}return n=f(t),o=u[n]=l[n](t),{c(){e=a("main"),o.c(),p(e,"id","root"),p(e,"class","svelte-1x8xz2o")},m(t,r){c(t,e,r),u[n].m(e,null),s=!0},p(t,[s]){let c=n;n=f(t),n===c?u[n].p(t,s):(N={r:0,c:[],p:N},j(u[c],1,1,()=>{u[c]=null}),N.r||r(N.c),N=N.p,o=u[n],o||(o=u[n]=l[n](t),o.c()),O(o,1),o.m(e,null))},i(t){s||(O(o),s=!0)},o(t){j(o),s=!1},d(t){t&&i(e),u[n].d()}}}function wt(t,e,n){let r=0,o=Symbol("gameId"),{tiles:s=ct(lt(4,4))}=e,{updateState:l=((t,...e)=>{switch(t){case"move":{const[t]=e;let o=0;n(0,[s,o]=ot(s,t),s),n(1,r+=o);break}case"updateSize":{const[t,l]=e;n(0,s=ct(lt(t,l))),n(1,r=0),n(2,o=Symbol("gameId"));break}}})}=e;var c,i;let a;return c="updateState",i=l,w().$$.context.set(c,i),t.$set=t=>{"tiles"in t&&n(0,s=t.tiles),"updateState"in t&&n(4,l=t.updateState)},t.$$.update=()=>{1&t.$$.dirty&&n(3,a=it(s)),1&t.$$.dirty&&(document.title=s[0].length*s.length-1+"-puzzle")},[s,r,o,a,l]}return new class extends F{constructor(t){super(),q(this,t,wt,ht,s,{tiles:0,updateState:4})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
