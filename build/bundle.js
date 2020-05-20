var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e,n){t.classList[n?"add":"remove"](e)}let g;function m(t){g=t}function w(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const v=[],S=[],y=[],b=[],x=Promise.resolve();let _=!1;function k(t){y.push(t)}let j=!1;const E=new Set;function M(){if(!j){j=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];m(e),C(e.$$)}for(v.length=0;S.length;)S.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(v.length);for(;b.length;)b.pop()();_=!1,j=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const q=new Set;let z;function A(t,e){t&&t.i&&(q.delete(t),t.i(e))}function L(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function N(t){t&&t.c()}function O(t,n,s){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,s),k(()=>{const n=a.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(k)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,x.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,s,l,a,u,i=[-1]){const d=g;m(e);const f=o.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:i};let $=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),$&&P(e,t)),n}):[],p.update(),$=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(c)}else p.fragment&&p.fragment.c();o.intro&&A(e.$$.fragment),O(e,o.target,o.anchor),M()}m(d)}class I{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function R(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function T(t){let e,n=0!==t[9]&&function(t){let e,n,r,o,s,u,f,h,g;function m(...e){return t[6](t[9],...e)}return{c(){e=i("g"),n=i("rect"),r=i("text"),o=d(t[9]),$(n,"height","22"),$(n,"width","22"),$(n,"stroke-width","0"),$(n,"x","1"),$(n,"y","1"),$(n,"class","svelte-1bct2j6"),$(r,"x",s=12),$(r,"y",u=12),$(r,"alignment-baseline","central"),$(r,"text-anchor","middle"),$(r,"class","svelte-1bct2j6"),$(e,"class","tile svelte-1bct2j6"),$(e,"key",f=t[9]),$(e,"transform",h=`translate(${24*t[7][1]+1}, ${24*t[7][0]+1})`)},m(t,s,c){a(t,e,s),l(e,n),l(e,r),l(r,o),c&&g(),g=p(e,"click",m)},p(n,r){t=n,8&r&&h!==(h=`translate(${24*t[7][1]+1}, ${24*t[7][0]+1})`)&&$(e,"transform",h)},d(t){t&&c(e),g()}}}(t);return{c(){n&&n.c(),e=d("")},m(t,r){n&&n.m(t,r),a(t,e,r)},p(t,e){0!==t[9]&&n.p(t,e)},d(t){n&&n.d(t),t&&c(e)}}}function Y(e){let n,r,o,s=e[3],d=[];for(let t=0;t<s.length;t+=1)d[t]=T(R(e,s,t));return{c(){n=u("div"),r=i("svg");for(let t=0;t<d.length;t+=1)d[t].c();$(r,"class","board svelte-1bct2j6"),$(r,"width","100%"),$(r,"height","100%"),$(r,"viewBox",o=`0 0 ${24*e[1]} ${24*e[2]}`),$(r,"xmlns","http://www.w3.org/2000/svg"),$(r,"xmlnsxlink","http://www.w3.org/1999/xlink"),$(n,"class","board-wrapper svelte-1bct2j6")},m(t,e){a(t,n,e),l(n,r);for(let t=0;t<d.length;t+=1)d[t].m(r,null)},p(t,[e]){if(9&e){let n;for(s=t[3],n=0;n<s.length;n+=1){const o=R(t,s,n);d[n]?d[n].p(o,e):(d[n]=T(o),d[n].c(),d[n].m(r,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=s.length}6&e&&o!==(o=`0 0 ${24*t[1]} ${24*t[2]}`)&&$(r,"viewBox",o)},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(d,t)}}}function D(t,e,n){let{tiles:r}=e,{updateState:o}=e;const s=t=>{const e=[];return t.forEach((t,n)=>{t.forEach((t,r)=>{e[t]=[n,r]})}),e};let l,a,c;return t.$set=t=>{"tiles"in t&&n(4,r=t.tiles),"updateState"in t&&n(0,o=t.updateState)},t.$$.update=()=>{16&t.$$.dirty&&n(1,l=r[0].length),16&t.$$.dirty&&n(2,a=r.length),16&t.$$.dirty&&n(3,c=s(r))},[o,l,a,c,r,s,t=>{o("move",t)}]}class G extends I{constructor(t){super(),F(this,t,D,Y,s,{tiles:4,updateState:0})}}function H(e){let n,r,o,s,i,d,h,g,m,w,v;return{c(){n=u("div"),r=u("div"),o=f(),s=u("div"),s.textContent="You did it!",i=f(),d=u("audio"),g=f(),m=u("div"),w=u("a"),w.textContent="Play again!",$(r,"class","congrats-star svelte-b4iurp"),$(s,"class","congrats-header svelte-b4iurp"),d.src!==(h="build/win.ogg")&&$(d,"src","build/win.ogg"),$(w,"href","# "),$(w,"alt","Play again!"),$(w,"class","svelte-b4iurp"),$(m,"class","congrats-controls svelte-b4iurp"),$(n,"class","congrats svelte-b4iurp")},m(t,c,u){a(t,n,c),l(n,r),l(n,o),l(n,s),l(n,i),l(n,d),e[5](d),l(n,g),l(n,m),l(m,w),u&&v(),v=p(w,"click",e[6])},p:t,i:t,o:t,d(t){t&&c(n),e[5](null),v()}}}function J(t,e,n){let r,{tiles:o}=e,{updateState:s}=e;w(()=>{r.play()});let l,a;return t.$set=t=>{"tiles"in t&&n(4,o=t.tiles),"updateState"in t&&n(0,s=t.updateState)},t.$$.update=()=>{16&t.$$.dirty&&n(2,l=o[0].length),16&t.$$.dirty&&n(3,a=o.length)},[s,r,l,a,o,function(t){S[t?"unshift":"push"](()=>{n(1,r=t)})},()=>s("updateSize",a,l)]}class K extends I{constructor(t){super(),F(this,t,J,H,s,{tiles:4,updateState:0})}}function Q(t){let e,n=t[0]>0?"+":"-";return{c(){e=d(n)},m(t,n){a(t,e,n)},p(t,r){1&r&&n!==(n=t[0]>0?"+":"-")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(e,n)},d(t){t&&c(e)}}}function U(e){let n,r,o,s=!e[3]&&Q(e);return{c(){n=u("button"),s&&s.c(),$(n,"class","btn outline svelte-zbnct6"),$(n,"title",r=`${e[0]>0?"More":"Less"} ${e[5]?"rows":"columns"}`),h(n,"shuffle",e[3]),h(n,"outline",!e[3])},m(t,r,l){a(t,n,r),s&&s.m(n,null),l&&o(),o=p(n,"click",e[8])},p(t,[e]){t[3]?s&&(s.d(1),s=null):s?s.p(t,e):(s=Q(t),s.c(),s.m(n,null)),33&e&&r!==(r=`${t[0]>0?"More":"Less"} ${t[5]?"rows":"columns"}`)&&$(n,"title",r),8&e&&h(n,"shuffle",t[3]),8&e&&h(n,"outline",!t[3])},i:t,o:t,d(t){t&&c(n),s&&s.d(),o()}}}function V(t,e,n){let{direction:r=0}=e,{update:o=[]}=e,{rows:s}=e,{cols:l}=e,{shuffle:a=!1}=e,{updateState:c}=e;let u,i;return t.$set=t=>{"direction"in t&&n(0,r=t.direction),"update"in t&&n(7,o=t.update),"rows"in t&&n(1,s=t.rows),"cols"in t&&n(2,l=t.cols),"shuffle"in t&&n(3,a=t.shuffle),"updateState"in t&&n(4,c=t.updateState)},t.$$.update=()=>{128&t.$$.dirty&&n(5,u="rows"===o[0]),128&t.$$.dirty&&n(6,i="cols"===o[0]),128&t.$$.dirty&&n(0,r=o[1])},[r,s,l,a,c,u,i,o,()=>{const t=a?s:Math.max(2,s+(u?r:0)),e=a?l:Math.max(2,l+(i?r:0));c("updateSize",t,e)}]}class W extends I{constructor(t){super(),F(this,t,V,U,s,{direction:0,update:7,rows:1,cols:2,shuffle:3,updateState:4})}}function X(t,e){const n=t.findIndex(t=>t.indexOf(e)>-1);return[n,t[n].indexOf(e)]}function Z(t,e){const[n,r]=X(t,0),[o,s]=X(t,e);return Math.abs(n-o)+Math.abs(r-s)===1&&(t[n][r]=e,t[o][s]=0),t}function tt(t){return Z(t,(e=function(t,e){const n=[],[r,o]=X(t,e);return r>0&&n.push(t[r-1][o]),r<t.length-1&&n.push(t[r+1][o]),o>0&&n.push(t[r][o-1]),o<t[0].length-1&&n.push(t[r][o+1]),n}(t,0))[Math.floor(Math.random()*e.length)]);var e}function et(t,e){const n=[];for(let r=0;r<t;r++)n.push(Array.from({length:e},(t,n)=>n+e*r+1));return n[t-1][e-1]=0,n}function nt(t){for(let e=0;e<t.length*t[0].length**2;e++)tt(t);return t}function rt(t){let e,n,r,o,s,i,h,g,m,w,v,S;const y=new W({props:{cols:t[1],rows:t[2],update:["rows",-1],updateState:t[0]}}),b=new W({props:{cols:t[1],rows:t[2],update:["rows",1],updateState:t[0]}}),x=new W({props:{cols:t[1],rows:t[2],update:["cols",-1],updateState:t[0]}}),_=new W({props:{cols:t[1],rows:t[2],update:["cols",1],updateState:t[0]}}),k=new W({props:{cols:t[1],rows:t[2],shuffle:!0,updateState:t[0]}});return{c(){e=u("div"),n=u("div"),r=d("Rows\n    "),N(y.$$.fragment),o=f(),N(b.$$.fragment),s=f(),i=u("div"),h=d("Columns\n    "),N(x.$$.fragment),g=f(),N(_.$$.fragment),m=f(),w=u("div"),N(k.$$.fragment),$(n,"class","rows-controls svelte-1jactq2"),$(i,"class","cols-controls svelte-1jactq2"),$(w,"class","aside-controls svelte-1jactq2"),$(e,"class","controls svelte-1jactq2")},m(c,u,d){a(c,e,u),l(e,n),l(n,r),O(y,n,null),l(n,o),O(b,n,null),l(e,s),l(e,i),l(i,h),O(x,i,null),l(i,g),O(_,i,null),l(e,m),l(e,w),O(k,w,null),v=!0,d&&S(),S=p(window,"keydown",t[3])},p(t,[e]){const n={};2&e&&(n.cols=t[1]),4&e&&(n.rows=t[2]),1&e&&(n.updateState=t[0]),y.$set(n);const r={};2&e&&(r.cols=t[1]),4&e&&(r.rows=t[2]),1&e&&(r.updateState=t[0]),b.$set(r);const o={};2&e&&(o.cols=t[1]),4&e&&(o.rows=t[2]),1&e&&(o.updateState=t[0]),x.$set(o);const s={};2&e&&(s.cols=t[1]),4&e&&(s.rows=t[2]),1&e&&(s.updateState=t[0]),_.$set(s);const l={};2&e&&(l.cols=t[1]),4&e&&(l.rows=t[2]),1&e&&(l.updateState=t[0]),k.$set(l)},i(t){v||(A(y.$$.fragment,t),A(b.$$.fragment,t),A(x.$$.fragment,t),A(_.$$.fragment,t),A(k.$$.fragment,t),v=!0)},o(t){L(y.$$.fragment,t),L(b.$$.fragment,t),L(x.$$.fragment,t),L(_.$$.fragment,t),L(k.$$.fragment,t),v=!1},d(t){t&&c(e),B(y),B(b),B(x),B(_),B(k),S()}}}function ot(t,e,n){let{tiles:r}=e,{updateState:o}=e;let s,l;return t.$set=t=>{"tiles"in t&&n(4,r=t.tiles),"updateState"in t&&n(0,o=t.updateState)},t.$$.update=()=>{16&t.$$.dirty&&n(1,s=r[0].length),16&t.$$.dirty&&n(2,l=r.length)},[o,s,l,({keyCode:t})=>{const[e,n]=X(r,0);let a;37===t&&n<s-1?a=r[e][n+1]:38===t&&e<l-1?a=r[e+1][n]:39===t&&n>0?a=r[e][n-1]:40===t&&e>0&&(a=r[e-1][n]),a&&o("move",a)},r]}class st extends I{constructor(t){super(),F(this,t,ot,rt,s,{tiles:4,updateState:0})}}function lt(t){let e,n;const r=new st({props:{tiles:t[0],updateState:t[1]}}),o=new G({props:{tiles:t[0],updateState:t[1]}});return{c(){N(r.$$.fragment),e=f(),N(o.$$.fragment)},m(t,s){O(r,t,s),a(t,e,s),O(o,t,s),n=!0},p(t,e){const n={};1&e&&(n.tiles=t[0]),2&e&&(n.updateState=t[1]),r.$set(n);const s={};1&e&&(s.tiles=t[0]),2&e&&(s.updateState=t[1]),o.$set(s)},i(t){n||(A(r.$$.fragment,t),A(o.$$.fragment,t),n=!0)},o(t){L(r.$$.fragment,t),L(o.$$.fragment,t),n=!1},d(t){B(r,t),t&&c(e),B(o,t)}}}function at(t){let e;const n=new K({props:{tiles:t[0],updateState:t[1]}});return{c(){N(n.$$.fragment)},m(t,r){O(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.tiles=t[0]),2&e&&(r.updateState=t[1]),n.$set(r)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){L(n.$$.fragment,t),e=!1},d(t){B(n,t)}}}function ct(t){let e,n,o,s,i;const d=[at,lt],f=[];function p(t,e){return t[2]?0:1}return o=p(t),s=f[o]=d[o](t),{c(){e=u("div"),n=u("main"),s.c(),$(n,"class","svelte-xr5wv4"),$(e,"id","root"),$(e,"class","svelte-xr5wv4")},m(t,r){a(t,e,r),l(e,n),f[o].m(n,null),i=!0},p(t,[e]){let l=o;o=p(t),o===l?f[o].p(t,e):(z={r:0,c:[],p:z},L(f[l],1,1,()=>{f[l]=null}),z.r||r(z.c),z=z.p,s=f[o],s||(s=f[o]=d[o](t),s.c()),A(s,1),s.m(n,null))},i(t){i||(A(s),i=!0)},o(t){L(s),i=!1},d(t){t&&c(e),f[o].d()}}}function ut(t,e,n){let r,{tiles:o=nt(et(4,4))}=e,{updateState:s=((t,...e)=>{switch(t){case"move":{const[t]=e;n(0,o=Z(o,t));break}case"updateSize":{const[t,r]=e;n(0,o=nt(et(t,r)));break}}})}=e;return t.$set=t=>{"tiles"in t&&n(0,o=t.tiles),"updateState"in t&&n(1,s=t.updateState)},t.$$.update=()=>{1&t.$$.dirty&&n(2,r=function(t,e=t.length,n=t[0].length){for(let r=0,o=0;r<e;r++)for(let s=0;s<n;s++){if(o++,0===t[r][s]&&o===e*n)return!0;if(t[r][s]!==o)return!1}return!0}(o))},[o,s,r]}return new class extends I{constructor(t){super(),F(this,t,ut,ct,s,{tiles:0,updateState:1})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
