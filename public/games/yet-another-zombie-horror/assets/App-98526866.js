import{_ as Yc}from"./index-578bf340.js";function Mt(){}const Rc=r=>r;function hg(r){return r()}function Kd(){return Object.create(null)}function cn(r){r.forEach(hg)}function Va(r){return typeof r=="function"}function gi(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Ay(r){return Object.keys(r).length===0}function Zd(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}const ug=typeof window<"u";let Ju=ug?()=>window.performance.now():()=>Date.now(),Qu=ug?r=>requestAnimationFrame(r):Mt;const xo=new Set;function dg(r){xo.forEach(e=>{e.c(r)||(xo.delete(e),e.f())}),xo.size!==0&&Qu(dg)}function ed(r){let e;return xo.size===0&&Qu(dg),{promise:new Promise(t=>{xo.add(e={c:r,f:t})}),abort(){xo.delete(e)}}}function Be(r,e){r.appendChild(e)}function fg(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function Ey(r){const e=Ne("style");return Ry(fg(r),e),e.sheet}function Ry(r,e){return Be(r.head||r,e),e.sheet}function vt(r,e,t){r.insertBefore(e,t||null)}function mt(r){r.parentNode&&r.parentNode.removeChild(r)}function pg(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function Ne(r){return document.createElement(r)}function Cc(r){return document.createTextNode(r)}function Wt(){return Cc(" ")}function mg(){return Cc("")}function Ue(r,e,t,i){return r.addEventListener(e,t,i),()=>r.removeEventListener(e,t,i)}function me(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Cy(r){return Array.from(r.childNodes)}function Py(r,e){e=""+e,r.data!==e&&(r.data=e)}function Es(r,e,t,i){t==null?r.style.removeProperty(e):r.style.setProperty(e,t,i?"important":"")}function je(r,e,t){r.classList[t?"add":"remove"](e)}function gg(r,e,{bubbles:t=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(r,t,i,e),n}const pc=new Map;let mc=0;function Ly(r){let e=5381,t=r.length;for(;t--;)e=(e<<5)-e^r.charCodeAt(t);return e>>>0}function Iy(r,e){const t={stylesheet:Ey(e),rules:{}};return pc.set(r,t),t}function gc(r,e,t,i,n,s,o,a=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const p=e+(t-e)*s(y);c+=y*100+`%{${o(p,1-p)}}
`}const h=c+`100% {${o(t,1-t)}}
}`,u=`__svelte_${Ly(h)}_${a}`,d=fg(r),{stylesheet:f,rules:m}=pc.get(d)||Iy(d,r);m[u]||(m[u]=!0,f.insertRule(`@keyframes ${u} ${h}`,f.cssRules.length));const g=r.style.animation||"";return r.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${n}ms 1 both`,mc+=1,u}function yc(r,e){const t=(r.style.animation||"").split(", "),i=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),n=t.length-i.length;n&&(r.style.animation=i.join(", "),mc-=n,mc||Dy())}function Dy(){Qu(()=>{mc||(pc.forEach(r=>{const{ownerNode:e}=r.stylesheet;e&&mt(e)}),pc.clear())})}let Ca;function wa(r){Ca=r}function td(){if(!Ca)throw new Error("Function called outside component initialization");return Ca}function br(r){td().$$.on_mount.push(r)}function En(r){td().$$.on_destroy.push(r)}function Rn(){const r=td();return(e,t,{cancelable:i=!1}={})=>{const n=r.$$.callbacks[e];if(n){const s=gg(e,t,{cancelable:i});return n.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function Ii(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const ho=[],Ds=[];let vo=[];const Jd=[],yg=Promise.resolve();let yu=!1;function _g(){yu||(yu=!0,yg.then(xg))}function Fy(){return _g(),yg}function on(r){vo.push(r)}const Kc=new Set;let Tr=0;function xg(){if(Tr!==0)return;const r=Ca;do{try{for(;Tr<ho.length;){const e=ho[Tr];Tr++,wa(e),Uy(e.$$)}}catch(e){throw ho.length=0,Tr=0,e}for(wa(null),ho.length=0,Tr=0;Ds.length;)Ds.pop()();for(let e=0;e<vo.length;e+=1){const t=vo[e];Kc.has(t)||(Kc.add(t),t())}vo.length=0}while(ho.length);for(;Jd.length;)Jd.pop()();yu=!1,Kc.clear(),wa(r)}function Uy(r){if(r.fragment!==null){r.update(),cn(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(on)}}function Ny(r){const e=[],t=[];vo.forEach(i=>r.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),vo=e}let qo;function id(){return qo||(qo=Promise.resolve(),qo.then(()=>{qo=null})),qo}function ur(r,e,t){r.dispatchEvent(gg(`${e?"intro":"outro"}${t}`))}const rc=new Set;let _n;function Gi(){_n={r:0,c:[],p:_n}}function Wi(){_n.r||cn(_n.c),_n=_n.p}function we(r,e){r&&r.i&&(rc.delete(r),r.i(e))}function Oe(r,e,t,i){if(r&&r.o){if(rc.has(r))return;rc.add(r),_n.c.push(()=>{rc.delete(r),i&&(t&&r.d(1),i())}),r.o(e)}else i&&i()}const nd={duration:0};function vg(r,e,t){const i={direction:"in"};let n=e(r,t,i),s=!1,o,a,l=0;function c(){o&&yc(r,o)}function h(){const{delay:d=0,duration:f=300,easing:m=Rc,tick:g=Mt,css:y}=n||nd;y&&(o=gc(r,0,1,f,d,m,y,l++)),g(0,1);const p=Ju()+d,x=p+f;a&&a.abort(),s=!0,on(()=>ur(r,!0,"start")),a=ed(_=>{if(s){if(_>=x)return g(1,0),ur(r,!0,"end"),c(),s=!1;if(_>=p){const b=m((_-p)/f);g(b,1-b)}}return s})}let u=!1;return{start(){u||(u=!0,yc(r),Va(n)?(n=n(i),id().then(h)):h())},invalidate(){u=!1},end(){s&&(c(),s=!1)}}}function Mg(r,e,t){const i={direction:"out"};let n=e(r,t,i),s=!0,o;const a=_n;a.r+=1;function l(){const{delay:c=0,duration:h=300,easing:u=Rc,tick:d=Mt,css:f}=n||nd;f&&(o=gc(r,1,0,h,c,u,f));const m=Ju()+c,g=m+h;on(()=>ur(r,!1,"start")),ed(y=>{if(s){if(y>=g)return d(0,1),ur(r,!1,"end"),--a.r||cn(a.c),!1;if(y>=m){const p=u((y-m)/h);d(1-p,p)}}return s})}return Va(n)?id().then(()=>{n=n(i),l()}):l(),{end(c){c&&n.tick&&n.tick(1,0),s&&(o&&yc(r,o),s=!1)}}}function Eo(r,e,t,i){const n={direction:"both"};let s=e(r,t,n),o=i?0:1,a=null,l=null,c=null;function h(){c&&yc(r,c)}function u(f,m){const g=f.b-o;return m*=Math.abs(g),{a:o,b:f.b,d:g,duration:m,start:f.start,end:f.start+m,group:f.group}}function d(f){const{delay:m=0,duration:g=300,easing:y=Rc,tick:p=Mt,css:x}=s||nd,_={start:Ju()+m,b:f};f||(_.group=_n,_n.r+=1),a||l?l=_:(x&&(h(),c=gc(r,o,f,g,m,y,x)),f&&p(0,1),a=u(_,g),on(()=>ur(r,f,"start")),ed(b=>{if(l&&b>l.start&&(a=u(l,g),l=null,ur(r,a.b,"start"),x&&(h(),c=gc(r,o,a.b,a.duration,0,y,s.css))),a){if(b>=a.end)p(o=a.b,1-o),ur(r,a.b,"end"),l||(a.b?h():--a.group.r||cn(a.group.c)),a=null;else if(b>=a.start){const v=b-a.start;o=a.a+a.d*y(v/a.duration),p(o,1-o)}}return!!(a||l)}))}return{run(f){Va(s)?id().then(()=>{s=s(n),d(f)}):d(f)},end(){h(),a=l=null}}}function yi(r){r&&r.c()}function ri(r,e,t,i){const{fragment:n,after_update:s}=r.$$;n&&n.m(e,t),i||on(()=>{const o=r.$$.on_mount.map(hg).filter(Va);r.$$.on_destroy?r.$$.on_destroy.push(...o):cn(o),r.$$.on_mount=[]}),s.forEach(on)}function oi(r,e){const t=r.$$;t.fragment!==null&&(Ny(t.after_update),cn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function By(r,e){r.$$.dirty[0]===-1&&(ho.push(r),_g(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function _i(r,e,t,i,n,s,o,a=[-1]){const l=Ca;wa(r);const c=r.$$={fragment:null,ctx:[],props:s,update:Mt,not_equal:n,bound:Kd(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Kd(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(r,e.props||{},(u,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&n(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),h&&By(r,u)),d}):[],c.update(),h=!0,cn(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=Cy(e.target);c.fragment&&c.fragment.l(u),u.forEach(mt)}else c.fragment&&c.fragment.c();e.intro&&we(r.$$.fragment),ri(r,e.target,e.anchor,e.customElement),xg()}wa(l)}class xi{$destroy(){oi(this,1),this.$destroy=Mt}$on(e,t){if(!Va(t))return Mt;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!Ay(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class zy{target=new EventTarget;events=new Map;callbacks=new Map;add(e,t){this.callbacks.set(e,t),this.events.set(e,new qR(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t=null){const i=this.events.get(e);i&&(i.data=t,this.target.dispatchEvent(i))}remove(e){const t=this.callbacks.get(e);this.target.removeEventListener(e,t,!1),this.callbacks.delete(e),this.events.delete(e)}dispose(){for(const[e]of this.events)this.remove(e);this.callbacks.clear(),this.events.clear()}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=Math.PI/180,_c=180/Math.PI;function wr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function si(r,e,t){return Math.max(e,Math.min(t,r))}function ky(r,e){return(r%e+e)%e}function Zc(r,e,t){return(1-t)*r+t*e}function Oy(r){return r*oc}function Vy(r){return r*_c}function Qd(r){return(r&r-1)===0&&r!==0}function Hy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}let wi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let y=1-a;const p=l*d+c*f+h*m+u*g,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const v=Math.sqrt(_),M=Math.atan2(v,p*x);y=Math.sin(y*M)/v,a=Math.sin(a*M)/v}const b=a*x;if(l=l*y+d*b,c=c*y+f*b,h=h*y+m*b,u=u*y+g*b,y===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(si(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class bg{constructor(e=0,t=0,i=0){bg.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ef.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-s*n,u=l*n+s*i-o*t,d=-s*t-o*i-a*n;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Jc=new L,ef=new wi;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wg="152",Ro=0,Sg=1,Tg=2,tf=1,Gy=100,Wy=204,Xy=205,jy=3,qy=0,Ag=300,Pa=1e3,ga=1001,_u=1002,xu=1003,$y=1004,Yy=1005,sd=1006,Ky=1007,rd=1008,Zy=1009,Jy=1015,Eg=1023,La=2300,Co=2301,Qc=2302,nf=2400,sf=2401,rf=2402,Qy=2500,e_=0,Rg=1,vu=2,t_=3e3,eh=3001,i_=0,th="",Kt="srgb",od="srgb-linear",Cg="display-p3",ih=7680,n_=519,Mu=35044;let Pc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}};const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let of=1234567;const Sa=Math.PI/180,Ia=180/Math.PI;function rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function Zt(r,e,t){return Math.max(e,Math.min(t,r))}function ad(r,e){return(r%e+e)%e}function s_(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function r_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ta(r,e,t){return(1-t)*r+t*e}function o_(r,e,t,i){return Ta(r,e,1-Math.exp(-t*i))}function a_(r,e=1){return e-Math.abs(ad(r,e*2)-e)}function l_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function c_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function h_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function u_(r,e){return r+Math.random()*(e-r)}function d_(r){return r*(.5-Math.random())}function f_(r){r!==void 0&&(of=r);let e=of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p_(r){return r*Sa}function m_(r){return r*Ia}function g_(r){return(r&r-1)===0&&r!==0}function Pg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function y_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function __(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function es(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lg={DEG2RAD:Sa,RAD2DEG:Ia,generateUUID:rn,clamp:Zt,euclideanModulo:ad,mapLinear:s_,inverseLerp:r_,lerp:Ta,damp:o_,pingpong:a_,smoothstep:l_,smootherstep:c_,randInt:h_,randFloat:u_,randFloatSpread:d_,seededRandom:f_,degToRad:p_,radToDeg:m_,isPowerOfTwo:g_,ceilPowerOfTwo:Pg,floorPowerOfTwo:y_,setQuaternionFromProperEuler:__,normalize:dt,denormalize:es};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Fs=class Ig{constructor(){Ig.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],g=n[0],y=n[3],p=n[6],x=n[1],_=n[4],b=n[7],v=n[2],M=n[5],S=n[8];return s[0]=o*g+a*x+l*v,s[3]=o*y+a*_+l*M,s[6]=o*p+a*b+l*S,s[1]=c*g+h*x+u*v,s[4]=c*y+h*_+u*M,s[7]=c*p+h*b+u*S,s[2]=d*g+f*x+m*v,s[5]=d*y+f*_+m*M,s[8]=d*p+f*b+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nh.makeScale(e,t)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const nh=new Fs;function x_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const af={};function sh(r){r in af||(af[r]=!0,console.warn(r))}function Mo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const v_=new Fs().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),M_=new Fs().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function b_(r){return r.convertSRGBToLinear().applyMatrix3(M_)}function w_(r){return r.applyMatrix3(v_).convertLinearToSRGB()}const S_={[od]:r=>r,[Kt]:r=>r.convertSRGBToLinear(),[Cg]:b_},T_={[od]:r=>r,[Kt]:r=>r.convertLinearToSRGB(),[Cg]:w_},qi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return od},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=S_[e],n=T_[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ar,A_=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=bu("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Mo(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mo(t[i]/255)*255):t[i]=Mo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E_=class{constructor(e=null){this.isSource=!0,this.uuid=rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(oh(n[o].image)):s.push(oh(n[o]))}else s=oh(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0,yr=class ac extends Pc{constructor(e=ac.DEFAULT_IMAGE,t=ac.DEFAULT_MAPPING,i=ga,n=ga,s=sd,o=rd,a=Eg,l=Zy,c=ac.DEFAULT_ANISOTROPY,h=th){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=rn(),this.name="",this.source=new E_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fs,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sh("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===eh?Kt:th),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case _u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case _u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sh("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?eh:t_}set encoding(e){sh("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===eh?Kt:th}};yr.DEFAULT_IMAGE=null;yr.DEFAULT_MAPPING=Ag;yr.DEFAULT_ANISOTROPY=1;let Fi=class Dg{constructor(e=0,t=0,i=0,n=1){Dg.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],y=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(f+1)/2,v=(p+1)/2,M=(h+d)/4,S=(u+g)/4,R=(m+y)/4;return _>b&&_>v?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=M/i,s=S/i):b>v?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=M/n,s=R/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=S/s,n=R/s),this.set(i,n,s,t),this}let x=Math.sqrt((y-m)*(y-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(y-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class Us{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let y=1-a;const p=l*d+c*f+h*m+u*g,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const v=Math.sqrt(_),M=Math.atan2(v,p*x);y=Math.sin(y*M)/v,a=Math.sin(a*M)/v}const b=a*x;if(l=l*y+d*b,c=c*y+f*b,h=h*y+m*b,u=u*y+g*b,y===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-s*n,u=l*n+s*i-o*t,d=-s*t-o*i-a*n;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new I,lf=new Us;let ai=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox),Er.applyMatrix4(e.matrixWorld),this.union(Er);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Dn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),qa.subVectors(this.max,$o),Rr.subVectors(e.a,$o),Cr.subVectors(e.b,$o),Pr.subVectors(e.c,$o),hs.subVectors(Cr,Rr),us.subVectors(Pr,Cr),Hs.subVectors(Rr,Pr);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Hs.z,Hs.y,hs.z,0,-hs.x,us.z,0,-us.x,Hs.z,0,-Hs.x,-hs.y,hs.x,0,-us.y,us.x,0,-Hs.y,Hs.x,0];return!lh(t,Rr,Cr,Pr,qa)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,Rr,Cr,Pr,qa))?!1:($a.crossVectors(hs,us),t=[$a.x,$a.y,$a.z],lh(t,Rr,Cr,Pr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const In=[new I,new I,new I,new I,new I,new I,new I,new I],Dn=new I,Er=new ai,Rr=new I,Cr=new I,Pr=new I,hs=new I,us=new I,Hs=new I,$o=new I,qa=new I,$a=new I,Gs=new I;function lh(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Gs.fromArray(r,s);const a=n.x*Math.abs(Gs.x)+n.y*Math.abs(Gs.y)+n.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),h=i.dot(Gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const C_=new ai,Yo=new I,ch=new I;let Cn=class{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):C_.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Yo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(ch)),this.expandByPoint(Yo.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Fn=new I,hh=new I,Ya=new I,ds=new I,uh=new I,Ka=new I,dh=new I;let ld=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){hh.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(hh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=ds.dot(this.direction),l=-ds.dot(Ya),c=ds.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(hh).addScaledVector(Ya,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),n=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,n,s){uh.subVectors(t,e),Ka.subVectors(i,e),dh.crossVectors(uh,Ka);let o=this.direction.dot(dh),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(ds,Ka));if(l<0)return null;const c=a*this.direction.dot(uh.cross(ds));if(c<0||l+c>o)return null;const h=-a*ds.dot(dh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class wu{constructor(){wu.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,a,l,c,h,u,d,f,m,g,y){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P_,e,L_)}lookAt(e,t,i){const n=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),fs.crossVectors(i,Ei),fs.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),fs.crossVectors(i,Ei)),fs.normalize(),Za.crossVectors(Ei,fs),n[0]=fs.x,n[4]=Za.x,n[8]=Ei.x,n[1]=fs.y,n[5]=Za.y,n[9]=Ei.y,n[2]=fs.z,n[6]=Za.z,n[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],g=i[6],y=i[10],p=i[14],x=i[3],_=i[7],b=i[11],v=i[15],M=n[0],S=n[4],R=n[8],w=n[12],T=n[1],D=n[5],F=n[9],P=n[13],U=n[2],z=n[6],j=n[10],B=n[14],V=n[3],W=n[7],ee=n[11],oe=n[15];return s[0]=o*M+a*T+l*U+c*V,s[4]=o*S+a*D+l*z+c*W,s[8]=o*R+a*F+l*j+c*ee,s[12]=o*w+a*P+l*B+c*oe,s[1]=h*M+u*T+d*U+f*V,s[5]=h*S+u*D+d*z+f*W,s[9]=h*R+u*F+d*j+f*ee,s[13]=h*w+u*P+d*B+f*oe,s[2]=m*M+g*T+y*U+p*V,s[6]=m*S+g*D+y*z+p*W,s[10]=m*R+g*F+y*j+p*ee,s[14]=m*w+g*P+y*B+p*oe,s[3]=x*M+_*T+b*U+v*V,s[7]=x*S+_*D+b*z+v*W,s[11]=x*R+_*F+b*j+v*ee,s[15]=x*w+_*P+b*B+v*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],y=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+g*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+y*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],y=e[14],p=e[15],x=u*y*c-g*d*c+g*l*f-a*y*f-u*l*p+a*d*p,_=m*d*c-h*y*c-m*l*f+o*y*f+h*l*p-o*d*p,b=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,v=m*u*l-h*g*l-m*a*d+o*g*d+h*a*y-o*u*y,M=t*x+i*_+n*b+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=x*S,e[1]=(g*d*s-u*y*s-g*n*f+i*y*f+u*n*p-i*d*p)*S,e[2]=(a*y*s-g*l*s+g*n*c-i*y*c-a*n*p+i*l*p)*S,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*S,e[4]=_*S,e[5]=(h*y*s-m*d*s+m*n*f-t*y*f-h*n*p+t*d*p)*S,e[6]=(m*l*s-o*y*s-m*n*c+t*y*c+o*n*p-t*l*p)*S,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=b*S,e[9]=(m*u*s-h*g*s-m*i*f+t*g*f+h*i*p-t*u*p)*S,e[10]=(o*g*s-m*a*s+m*i*c-t*g*c-o*i*p+t*a*p)*S,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*S,e[12]=v*S,e[13]=(h*g*n-m*u*n+m*i*d-t*g*d-h*i*y+t*u*y)*S,e[14]=(m*a*n-o*g*n-m*i*l+t*g*l+o*i*y-t*a*y)*S,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,g=o*h,y=o*u,p=a*u,x=l*c,_=l*h,b=l*u,v=i.x,M=i.y,S=i.z;return n[0]=(1-(g+p))*v,n[1]=(f+b)*v,n[2]=(m-_)*v,n[3]=0,n[4]=(f-b)*M,n[5]=(1-(d+p))*M,n[6]=(y+x)*M,n[7]=0,n[8]=(m+_)*S,n[9]=(y-x)*S,n[10]=(1-(d+g))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Lr.set(n[0],n[1],n[2]).length();const o=Lr.set(n[4],n[5],n[6]).length(),a=Lr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],$i.copy(this);const c=1/s,h=1/o,u=1/a;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=u,$i.elements[9]*=u,$i.elements[10]*=u,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-s),u=(t+e)*l,d=(i+n)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const Lr=new I,$i=new Le,P_=new I(0,0,0),L_=new I(1,1,1),fs=new I,Za=new I,Ei=new I,cf=new Le,hf=new Us;let Fg=class Ug{constructor(e=0,t=0,i=0,n=Ug.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hf.setFromEuler(this),this.setFromQuaternion(hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fg.DEFAULT_ORDER="XYZ";let I_=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D_=0;const uf=new I,Ir=new Us,Un=new Le,Ja=new I,Ko=new I,F_=new I,U_=new Us,df=new I(1,0,0),ff=new I(0,1,0),pf=new I(0,0,1),N_={type:"added"},mf={type:"removed"};let Jt=class lc extends Pc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lc.DEFAULT_UP.clone();const e=new I,t=new Fg,i=new Us,n=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new Fs}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=lc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,t){return uf.copy(e).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ja.copy(e):Ja.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ko,Ja,this.up):Un.lookAt(Ja,Ko,this.up),this.quaternion.setFromRotationMatrix(Un),n&&(Un.extractRotation(n.matrixWorld),Ir.setFromRotationMatrix(Un),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(N_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(mf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,F_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}};Jt.DEFAULT_UP=new I(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new I,Nn=new I,fh=new I,Bn=new I,Dr=new I,Fr=new I,gf=new I,ph=new I,mh=new I,gh=new I;let Qa=!1,xn=class nr{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Yi.subVectors(e,t),n.cross(Yi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Yi.subVectors(n,t),Nn.subVectors(i,t),fh.subVectors(e,t);const o=Yi.dot(Yi),a=Yi.dot(Nn),l=Yi.dot(fh),c=Nn.dot(Nn),h=Nn.dot(fh),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,n,s,o,a,l){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Bn),l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,i,n){return Yi.subVectors(i,t),Nn.subVectors(e,t),Yi.cross(Nn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Yi.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),nr.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return nr.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Dr.subVectors(n,i),Fr.subVectors(s,i),ph.subVectors(e,i);const l=Dr.dot(ph),c=Fr.dot(ph);if(l<=0&&c<=0)return t.copy(i);mh.subVectors(e,n);const h=Dr.dot(mh),u=Fr.dot(mh);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Dr,o);gh.subVectors(e,s);const f=Dr.dot(gh),m=Fr.dot(gh);if(m>=0&&f<=m)return t.copy(s);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Fr,a);const y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return gf.subVectors(s,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(gf,a);const p=1/(y+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(Dr,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},B_=0,dr=class extends Pc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=tf,this.side=Ro,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wy,this.blendDst=Xy,this.blendEquation=Gy,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jy,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ih,this.stencilZFail=ih,this.stencilZPass=ih,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tf&&(i.blending=this.blending),this.side!==Ro&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},el={h:0,s:0,l:0};function yh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Xt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=qi.workingColorSpace){return this.r=e,this.g=t,this.b=i,qi.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=qi.workingColorSpace){if(e=ad(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yh(o,s,e+1/3),this.g=yh(o,s,e),this.b=yh(o,s,e-1/3)}return qi.toWorkingColorSpace(this,n),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Ng[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}copyLinearToSRGB(e){return this.r=rh(e.r),this.g=rh(e.g),this.b=rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return qi.fromWorkingColorSpace(ii.copy(this),e),Math.round(Zt(ii.r*255,0,255))*65536+Math.round(Zt(ii.g*255,0,255))*256+Math.round(Zt(ii.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qi.workingColorSpace){qi.fromWorkingColorSpace(ii.copy(this),t);const i=ii.r,n=ii.g,s=ii.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qi.workingColorSpace){return qi.fromWorkingColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=Kt){qi.fromWorkingColorSpace(ii.copy(this),e);const t=ii.r,i=ii.g,n=ii.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),Ki.h+=e,Ki.s+=t,Ki.l+=i,this.setHSL(Ki.h,Ki.s,Ki.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(el);const i=Ta(Ki.h,el.h,t),n=Ta(Ki.s,el.s,t),s=Ta(Ki.l,el.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const ii=new Xt;Xt.NAMES=Ng;let fo=class extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const Lt=new I,tl=new lt;let pi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},z_=class extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},k_=class extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ts=class extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}},O_=0;const zi=new Le,_h=new Jt,Ur=new I,Ri=new ai,Zo=new ai,Vt=new I;let wn=class Bg extends Pc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?k_:z_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fs().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ts(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ri.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Ri.min,Zo.min),Ri.expandByPoint(Vt),Vt.addVectors(Ri.max,Zo.max),Ri.expandByPoint(Vt)):(Ri.expandByPoint(Zo.min),Ri.expandByPoint(Zo.max))}Ri.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),Vt.add(Ur)),n=Math.max(n,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new I,h[T]=new I;const u=new I,d=new I,f=new I,m=new lt,g=new lt,y=new lt,p=new I,x=new I;function _(T,D,F){u.fromArray(n,T*3),d.fromArray(n,D*3),f.fromArray(n,F*3),m.fromArray(o,T*2),g.fromArray(o,D*2),y.fromArray(o,F*2),d.sub(u),f.sub(u),g.sub(m),y.sub(m);const P=1/(g.x*y.y-y.x*g.y);isFinite(P)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(P),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(P),c[T].add(p),c[D].add(p),c[F].add(p),h[T].add(x),h[D].add(x),h[F].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,D=b.length;T<D;++T){const F=b[T],P=F.start,U=F.count;for(let z=P,j=P+U;z<j;z+=3)_(i[z+0],i[z+1],i[z+2])}const v=new I,M=new I,S=new I,R=new I;function w(T){S.fromArray(s,T*3),R.copy(S);const D=c[T];v.copy(D),v.sub(S.multiplyScalar(S.dot(D))).normalize(),M.crossVectors(R,D);const P=M.dot(h[T])<0?-1:1;l[T*4]=v.x,l[T*4+1]=v.y,l[T*4+2]=v.z,l[T*4+3]=P}for(let T=0,D=b.length;T<D;++T){const F=b[T],P=F.start,U=F.count;for(let z=P,j=P+U;z<j;z+=3)w(i[z+0]),w(i[z+1]),w(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new pi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bg,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const yf=new Le,un=new ld,il=new Cn,_f=new I,Nr=new I,Br=new I,zr=new I,xh=new I,nl=new I,sl=new lt,rl=new lt,ol=new lt,xf=new I,vf=new I,Mf=new I,al=new I,ll=new I;let Lc=class extends Jt{constructor(e=new wn,t=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(xh.fromBufferAttribute(u,e),o?nl.addScaledVector(xh,h):nl.addScaledVector(xh.sub(t),h))}t.add(nl)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),un.copy(e.ray).recast(e.near),!(il.containsPoint(un.origin)===!1&&(un.intersectSphere(il,_f)===null||un.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(yf.copy(s).invert(),un.copy(e.ray).applyMatrix4(yf),!(i.boundingBox!==null&&un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=s[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,b=x;_<b;_+=3){const v=o.getX(_),M=o.getX(_+1),S=o.getX(_+2);i=cl(this,y,e,un,l,c,h,v,M,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=cl(this,s,e,un,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=s[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,b=x;_<b;_+=3){const v=_,M=_+1,S=_+2;i=cl(this,y,e,un,l,c,h,v,M,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=g,x=g+1,_=g+2;i=cl(this,s,e,un,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function V_(r,e,t,i,n,s,o,a){let l;if(e.side===Sg?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Ro,a),l===null)return null;ll.copy(a),ll.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:r}}function cl(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Nr),r.getVertexPosition(l,Br),r.getVertexPosition(c,zr);const h=V_(r,e,t,i,Nr,Br,zr,al);if(h){n&&(sl.fromBufferAttribute(n,a),rl.fromBufferAttribute(n,l),ol.fromBufferAttribute(n,c),h.uv=xn.getInterpolation(al,Nr,Br,zr,sl,rl,ol,new lt)),s&&(sl.fromBufferAttribute(s,a),rl.fromBufferAttribute(s,l),ol.fromBufferAttribute(s,c),h.uv1=xn.getInterpolation(al,Nr,Br,zr,sl,rl,ol,new lt),h.uv2=h.uv1),o&&(xf.fromBufferAttribute(o,a),vf.fromBufferAttribute(o,l),Mf.fromBufferAttribute(o,c),h.normal=xn.getInterpolation(al,Nr,Br,zr,xf,vf,Mf,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};xn.getNormal(Nr,Br,zr,u.normal),h.face=u}return h}let H_=class zg extends wn{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ts(c,3)),this.setAttribute("normal",new ts(h,3)),this.setAttribute("uv",new ts(u,2));function m(g,y,p,x,_,b,v,M,S,R,w){const T=b/S,D=v/R,F=b/2,P=v/2,U=M/2,z=S+1,j=R+1;let B=0,V=0;const W=new I;for(let ee=0;ee<j;ee++){const oe=ee*D-P;for(let K=0;K<z;K++){const H=K*T-F;W[g]=H*x,W[y]=oe*_,W[p]=U,c.push(W.x,W.y,W.z),W[g]=0,W[y]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(K/S),u.push(1-ee/R),B+=1}}for(let ee=0;ee<R;ee++)for(let oe=0;oe<S;oe++){const K=d+oe+z*ee,H=d+oe+z*(ee+1),X=d+(oe+1)+z*(ee+1),ne=d+(oe+1)+z*ee;l.push(K,H,ne),l.push(H,X,ne),V+=6}a.addGroup(f,V,w),f+=V,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zg(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},kg=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cd=class extends kg{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const vh=new I,G_=new I,W_=new Fs;let Ss=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=vh.subVectors(i,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||W_.getNormalMatrix(e),n=this.coplanarPoint(vh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ws=new Cn,hl=new I;let X_=class{constructor(e=new Ss,t=new Ss,i=new Ss,n=new Ss,s=new Ss,o=new Ss){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],g=i[11],y=i[12],p=i[13],x=i[14],_=i[15];return t[0].setComponents(a-n,u-l,g-d,_-y).normalize(),t[1].setComponents(a+n,u+l,g+d,_+y).normalize(),t[2].setComponents(a+s,u+c,g+f,_+p).normalize(),t[3].setComponents(a-s,u-c,g-f,_-p).normalize(),t[4].setComponents(a-o,u-h,g-m,_-x).normalize(),t[5].setComponents(a+o,u+h,g+m,_+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(hl.x=n.normal.x>0?e.max.x:e.min.x,hl.y=n.normal.y>0?e.max.y:e.min.y,hl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Og=class extends kg{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mh=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}};class j_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hi=new I;class hd{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=es(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=es(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=es(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=es(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bf=new I,wf=new Fi,Sf=new Fi,q_=new I,Tf=new Le,kr=new I;class $_ extends Lc{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)kr.fromBufferAttribute(t,i),this.applyBoneTransform(i,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)kr.fromBufferAttribute(t,i),this.applyBoneTransform(i,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Fi,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;wf.fromBufferAttribute(n.attributes.skinIndex,e),Sf.fromBufferAttribute(n.attributes.skinWeight,e),bf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Sf.getComponent(s);if(o!==0){const a=wf.getComponent(s);Tf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(q_.copy(bf).applyMatrix4(Tf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Vg extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Y_ extends yr{constructor(e=null,t=1,i=1,n,s,o,a,l,c=xu,h=xu,u,d){super(null,o,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Af=new Le,K_=new Le;class ud{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:K_;Af.multiplyMatrices(a,t[s]),Af.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new ud(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Pg(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Y_(t,e,e,Eg,Jy);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vg),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}let Ef=class extends pi{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};const Or=new Le,Rf=new Le,ul=[],Cf=new ai,Z_=new Le,Jo=new Lc,Qo=new Cn;let J_=class extends Lc{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ef(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Z_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Cf.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Qo.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(i),e.ray.intersectsSphere(Qo)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Or),Rf.multiplyMatrices(i,Or),Jo.matrixWorld=Rf,Jo.raycast(e,ul);for(let o=0,a=ul.length;o<a;o++){const l=ul[o];l.instanceId=s,l.object=this,t.push(l)}ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ef(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class Hg extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pf=new I,Lf=new I,If=new Le,bh=new ld,dl=new Cn;class dd extends Jt{constructor(e=new wn,t=new Hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Pf.fromBufferAttribute(t,n-1),Lf.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Pf.distanceTo(Lf);e.setAttribute("lineDistance",new ts(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(n),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;If.copy(n).invert(),bh.copy(e.ray).applyMatrix4(If);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,d=new I,f=this.isLineSegments?2:1,m=i.index,y=i.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,b=x-1;_<b;_+=f){const v=m.getX(_),M=m.getX(_+1);if(c.fromBufferAttribute(y,v),h.fromBufferAttribute(y,M),bh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(y.count,o.start+o.count);for(let _=p,b=x-1;_<b;_+=f){if(c.fromBufferAttribute(y,_),h.fromBufferAttribute(y,_+1),bh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Df=new I,Ff=new I;class Q_ extends dd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Df.fromBufferAttribute(t,n),Ff.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Df.distanceTo(Ff);e.setAttribute("lineDistance",new ts(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ex extends dd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Gg=class extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Uf=new Le,Su=new ld,fl=new Cn,pl=new I;let tx=class extends Jt{constructor(e=new wn,t=new Gg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(n),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Uf.copy(n).invert(),Su.copy(e.ray).applyMatrix4(Uf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const y=c.getX(m);pl.fromBufferAttribute(u,y),Nf(pl,y,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)pl.fromBufferAttribute(u,m),Nf(pl,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nf(r,e,t,i,n,s,o){const a=Su.distanceSqToPoint(r);if(a<t){const l=new I;Su.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}let fd=class extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};class Sr extends fd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ps(r,e,t){return Wg(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ml(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Wg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ix(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Bf(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function Xg(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}let Ha=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nx=class extends Ha{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nf,endingEnd:nf}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case sf:s=e,a=2*t-i;break;case rf:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sf:o=e,l=2*i-t;break;case rf:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,y=g*m,p=-d*y+2*d*g-d*m,x=(1+d)*y+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*y+(1.5+f)*g+.5*m,b=f*y-f*g;for(let v=0;v!==a;++v)s[v]=p*o[h+v]+x*o[c+v]+_*o[l+v]+b*o[u+v];return s}},sx=class extends Ha{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},rx=class extends Ha{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case Qc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ps(i,s,o),this.values=ps(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Wg(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ps(this.times),t=ps(this.values),i=this.getValueSize(),n=this.getInterpolation()===Qc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ps(e,0,o),this.values=ps(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=ps(this.times,0),t=ps(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Co;let Bo=class extends Pn{};Bo.prototype.ValueTypeName="bool";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=La;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;let jg=class extends Pn{};jg.prototype.ValueTypeName="color";let Da=class extends Pn{};Da.prototype.ValueTypeName="number";let ox=class extends Ha{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Us.slerpFlat(s,0,o,c-a,o,c,l);return s}},_r=class extends Pn{InterpolantFactoryMethodLinear(e){return new ox(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.DefaultInterpolation=Co;_r.prototype.InterpolantFactoryMethodSmooth=void 0;let zo=class extends Pn{};zo.prototype.ValueTypeName="string";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=La;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;let Fa=class extends Pn{};Fa.prototype.ValueTypeName="vector";let ax=class{constructor(e,t=-1,i,n=Qy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(cx(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Pn.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=ix(l);l=Bf(l,1,h),c=Bf(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Da(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,g){if(f.length!==0){const y=[],p=[];Xg(f,y,p,m),y.length!==0&&g.push(new u(d,y,p))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const y=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];y.push(_.time),p.push(_.morphTarget===g?1:0)}n.push(new Da(".morphTargetInfluence["+g+"]",y,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Fa,f+".position",d,"pos",n),i(_r,f+".quaternion",d,"rot",n),i(Fa,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function lx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Da;case"vector":case"vector2":case"vector3":case"vector4":return Fa;case"color":return jg;case"quaternion":return _r;case"bool":case"boolean":return Bo;case"string":return zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function cx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lx(r.type);if(r.times===void 0){const t=[],i=[];Xg(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Po={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};let hx=class{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}};const ux=new hx;let Ga=class{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const zn={};let dx=class extends Error{constructor(e,t){super(e),this.response=t}},qg=class extends Ga{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Po.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:i,onError:n});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const y=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:b})=>{if(_)p.close();else{g+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let M=0,S=h.length;M<S;M++){const R=h[M];R.onProgress&&R.onProgress(v)}p.enqueue(b),x()}})}}});return new Response(y)}else throw new dx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Po.add(e,c);const h=zn[e];delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},fx=class extends Ga{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Po.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=bu("img");function l(){h(),Po.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},px=class extends Ga{constructor(e){super(e)}load(e,t,i,n){const s=new yr,o=new fx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},pd=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const wh=new Le,zf=new I,kf=new I;let md=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new X_,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Fi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};class mx extends md{constructor(){super(new cd(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ia*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gx extends pd{constructor(e,t,i=0,n=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new mx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Of=new Le,ea=new I,Sh=new I;let yx=class extends md{constructor(){super(new cd(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Fi(2,1,1,1),new Fi(0,1,1,1),new Fi(3,1,1,1),new Fi(1,1,1,1),new Fi(3,0,1,1),new Fi(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(ea),Sh.copy(i.position),Sh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Sh),i.updateMatrixWorld(),n.makeTranslation(-ea.x,-ea.y,-ea.z),Of.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}},_x=class extends pd{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xx=class extends md{constructor(){super(new Og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$g=class extends pd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new xx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class Tu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}let vx=class extends Ga{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Po.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Po.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};const gd="\\[\\]\\.:\\/",Mx=new RegExp("["+gd+"]","g"),yd="[^"+gd+"]",bx="[^"+gd.replace("\\.","")+"]",wx=/((?:WC+[\/:])*)/.source.replace("WC",yd),Sx=/(WCOD+)?/.source.replace("WCOD",bx),Tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),Ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),Ex=new RegExp("^"+wx+Sx+Tx+Ax+"$"),Rx=["material","materials","bones","map"];let Cx=class{constructor(e,t,i){const n=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class uo{constructor(e,t,i){this.path=t,this.parsedPath=i||uo.parseTrackName(t),this.node=uo.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new uo.Composite(e,t,i):new uo(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mx,"")}static parseTrackName(e){const t=Ex.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Rx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=uo.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Cx;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Vf=new I,gl=new I;let is=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vf.subVectors(e,this.start),gl.subVectors(this.end,this.start);const i=gl.dot(gl);let s=gl.dot(Vf)/i;return t&&(s=Zt(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wg);const qt=new xn,yl=new I;class Px{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,i=new Float32Array(e.count/3);for(let s=0;s<e.count;s+=3){let o=1;t&&(o=t.getX(s)+t.getX(s+1)+t.getX(s+2)),qt.a.fromBufferAttribute(e,s),qt.b.fromBufferAttribute(e,s+1),qt.c.fromBufferAttribute(e,s+2),o*=qt.getArea(),i[s/3]=o}this.distribution=new Float32Array(e.count/3);let n=0;for(let s=0;s<i.length;s++)n+=i[s],this.distribution[s]=n;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i){const n=this.distribution[this.distribution.length-1],s=this.binarySearch(this.randomFunction()*n);return this.sampleFace(s,e,t,i)}binarySearch(e){const t=this.distribution;let i=0,n=t.length-1,s=-1;for(;i<=n;){const o=Math.ceil((i+n)/2);if(o===0||t[o-1]<=e&&t[o]>e){s=o;break}else e<t[o]?n=o-1:i=o+1}return s}sampleFace(e,t,i,n){let s=this.randomFunction(),o=this.randomFunction();return s+o>1&&(s=1-s,o=1-o),qt.a.fromBufferAttribute(this.positionAttribute,e*3),qt.b.fromBufferAttribute(this.positionAttribute,e*3+1),qt.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(qt.a,s).addScaledVector(qt.b,o).addScaledVector(qt.c,1-(s+o)),i!==void 0&&qt.getNormal(i),n!==void 0&&this.colorAttribute!==void 0&&(qt.a.fromBufferAttribute(this.colorAttribute,e*3),qt.b.fromBufferAttribute(this.colorAttribute,e*3+1),qt.c.fromBufferAttribute(this.colorAttribute,e*3+2),yl.set(0,0,0).addScaledVector(qt.a,s).addScaledVector(qt.b,o).addScaledVector(qt.c,1-(s+o)),n.r=yl.x,n.g=yl.y,n.b=yl.z),this}}const Lx="152",Ix=0,Hf=1,Dx=2,Yg=1,Kg=2,qn=3,an=0,Si=1,gn=2,Ps=0,bo=1,Au=2,Gf=3,Wf=4,Zg=5,ar=100,Fx=101,Ux=102,Xf=103,jf=104,Nx=200,Jg=201,Bx=202,zx=203,Qg=204,_d=205,kx=206,Ox=207,Vx=208,Hx=209,Gx=210,Wx=0,Xx=1,jx=2,Eu=3,qx=4,$x=5,Yx=6,Kx=7,Ic=0,Zx=1,Jx=2,ns=0,Qx=1,ev=2,tv=3,e0=4,iv=5,t0=300,Lo=301,Io=302,Ru=303,Cu=304,Dc=306,Pu=1e3,nn=1001,Lu=1002,Ut=1003,qf=1004,Th=1005,Hi=1006,nv=1007,Ua=1008,xr=1009,sv=1010,rv=1011,i0=1012,ov=1013,cr=1014,hr=1015,Na=1016,av=1017,lv=1018,fr=1020,cv=1021,bi=1023,hv=1024,uv=1025,pr=1026,vr=1027,dv=1028,fv=1029,pv=1030,mv=1031,gv=1033,Ah=33776,Eh=33777,Rh=33778,Ch=33779,$f=35840,Yf=35841,Kf=35842,Zf=35843,yv=36196,Jf=37492,Qf=37496,ep=37808,tp=37809,ip=37810,np=37811,sp=37812,rp=37813,op=37814,ap=37815,lp=37816,cp=37817,hp=37818,up=37819,dp=37820,fp=37821,Ph=36492,_v=36283,pp=36284,mp=36285,gp=36286,Di=2200,xv=2201,vv=2202,xc=2300,vc=2301,Lh=2302,po=2400,mo=2401,Mc=2402,xd=2500,Mv=2501,n0=3e3,mr=3001,bv=3200,wv=3201,Fc=0,Sv=1,gr="",De="srgb",Tn="srgb-linear",s0="display-p3",Ih=7680,Tv=519,yp=35044,Do="300 es",Iu=1035;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}let Av=0,Bs=class extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=bo,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qg,this.blendDst=_d,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ih,this.stencilZFail=Ih,this.stencilZPass=Ih,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==an&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pe=class r0{constructor(e=0,t=0){r0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],g=n[0],y=n[3],p=n[6],x=n[1],_=n[4],b=n[7],v=n[2],M=n[5],S=n[8];return s[0]=o*g+a*x+l*v,s[3]=o*y+a*_+l*M,s[6]=o*p+a*b+l*S,s[1]=c*g+h*x+u*v,s[4]=c*y+h*_+u*M,s[7]=c*p+h*b+u*S,s[2]=d*g+f*x+m*v,s[5]=d*y+f*_+m*M,s[8]=d*p+f*b+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new qe;function wo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ev=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Rv=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cv(r){return r.convertSRGBToLinear().applyMatrix3(Rv)}function Pv(r){return r.applyMatrix3(Ev).convertLinearToSRGB()}const Lv={[Tn]:r=>r,[De]:r=>r.convertSRGBToLinear(),[s0]:Cv},Iv={[Tn]:r=>r,[De]:r=>r.convertLinearToSRGB(),[s0]:Pv},Zi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Tn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Lv[e],n=Iv[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Uh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Zi.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zi.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Zi.workingColorSpace){if(e=ky(e,1),t=si(t,0,1),i=si(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Uh(o,s,e+1/3),this.g=Uh(o,s,e),this.b=Uh(o,s,e-1/3)}return Zi.toWorkingColorSpace(this,n),this}setStyle(e,t=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=De){const i=o0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}copyLinearToSRGB(e){return this.r=Fh(e.r),this.g=Fh(e.g),this.b=Fh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return Zi.fromWorkingColorSpace(ni.copy(this),e),Math.round(si(ni.r*255,0,255))*65536+Math.round(si(ni.g*255,0,255))*256+Math.round(si(ni.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zi.workingColorSpace){Zi.fromWorkingColorSpace(ni.copy(this),t);const i=ni.r,n=ni.g,s=ni.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Zi.workingColorSpace){return Zi.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=De){Zi.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,i=ni.g,n=ni.b;return e!==De?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),Ji.h+=e,Ji.s+=t,Ji.l+=i,this.setHSL(Ji.h,Ji.s,Ji.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(_l);const i=Zc(Ji.h,_l.h,t),n=Zc(Ji.s,_l.s,t),s=Zc(Ji.l,_l.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new ze;ze.NAMES=o0;class Dv extends Bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zs{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)On.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),xl.subVectors(this.max,ta),Hr.subVectors(e.a,ta),Gr.subVectors(e.b,ta),Wr.subVectors(e.c,ta),ms.subVectors(Gr,Hr),gs.subVectors(Wr,Gr),Xs.subVectors(Hr,Wr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Xs.z,Xs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Xs.z,0,-Xs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Xs.y,Xs.x,0];return!Nh(t,Hr,Gr,Wr,xl)||(t=[1,0,0,0,1,0,0,0,1],!Nh(t,Hr,Gr,Wr,xl))?!1:(vl.crossVectors(ms,gs),t=[vl.x,vl.y,vl.z],Nh(t,Hr,Gr,Wr,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Vr=new zs,Hr=new L,Gr=new L,Wr=new L,ms=new L,gs=new L,Xs=new L,ta=new L,xl=new L,vl=new L,js=new L;function Nh(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){js.fromArray(r,s);const a=n.x*Math.abs(js.x)+n.y*Math.abs(js.y)+n.z*Math.abs(js.z),l=e.dot(js),c=t.dot(js),h=i.dot(js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jn=Fv();function Fv(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ci(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=si(r,-65504,65504),Jn.floatView[0]=r;const e=Jn.uint32View[0],t=e>>23&511;return Jn.baseTable[t]+((e&8388607)>>Jn.shiftTable[t])}function Ml(r){const e=r>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[e]+(r&1023)]+Jn.exponentTable[e],Jn.floatView[0]}const It=new L,bl=new Pe;class Xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class a0 extends Xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class l0 extends Xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bh extends Xi{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ml(this.array[e*this.itemSize]);return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=Ci(t),this}getY(e){let t=Ml(this.array[e*this.itemSize+1]);return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=Ci(t),this}getZ(e){let t=Ml(this.array[e*this.itemSize+2]);return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=Ci(t),this}getW(e){let t=Ml(this.array[e*this.itemSize+3]);return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=Ci(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=Ci(t),this.array[e+1]=Ci(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.array[e+0]=Ci(t),this.array[e+1]=Ci(i),this.array[e+2]=Ci(n),this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=Ci(t),this.array[e+1]=Ci(i),this.array[e+2]=Ci(n),this.array[e+3]=Ci(s),this}}class tt extends Xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Uv=new zs,ia=new L,zh=new L;class ko{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uv.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ia,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(zh)),this.expandByPoint(ia.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,a,l,c,h,u,d,f,m,g,y){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Bv)}lookAt(e,t,i){const n=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),ys.crossVectors(i,Pi),ys.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),ys.crossVectors(i,Pi)),ys.normalize(),wl.crossVectors(Pi,ys),n[0]=ys.x,n[4]=wl.x,n[8]=Pi.x,n[1]=ys.y,n[5]=wl.y,n[9]=Pi.y,n[2]=ys.z,n[6]=wl.z,n[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],g=i[6],y=i[10],p=i[14],x=i[3],_=i[7],b=i[11],v=i[15],M=n[0],S=n[4],R=n[8],w=n[12],T=n[1],D=n[5],F=n[9],P=n[13],U=n[2],z=n[6],j=n[10],B=n[14],V=n[3],W=n[7],ee=n[11],oe=n[15];return s[0]=o*M+a*T+l*U+c*V,s[4]=o*S+a*D+l*z+c*W,s[8]=o*R+a*F+l*j+c*ee,s[12]=o*w+a*P+l*B+c*oe,s[1]=h*M+u*T+d*U+f*V,s[5]=h*S+u*D+d*z+f*W,s[9]=h*R+u*F+d*j+f*ee,s[13]=h*w+u*P+d*B+f*oe,s[2]=m*M+g*T+y*U+p*V,s[6]=m*S+g*D+y*z+p*W,s[10]=m*R+g*F+y*j+p*ee,s[14]=m*w+g*P+y*B+p*oe,s[3]=x*M+_*T+b*U+v*V,s[7]=x*S+_*D+b*z+v*W,s[11]=x*R+_*F+b*j+v*ee,s[15]=x*w+_*P+b*B+v*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],y=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+g*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+y*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],y=e[14],p=e[15],x=u*y*c-g*d*c+g*l*f-a*y*f-u*l*p+a*d*p,_=m*d*c-h*y*c-m*l*f+o*y*f+h*l*p-o*d*p,b=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,v=m*u*l-h*g*l-m*a*d+o*g*d+h*a*y-o*u*y,M=t*x+i*_+n*b+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=x*S,e[1]=(g*d*s-u*y*s-g*n*f+i*y*f+u*n*p-i*d*p)*S,e[2]=(a*y*s-g*l*s+g*n*c-i*y*c-a*n*p+i*l*p)*S,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*S,e[4]=_*S,e[5]=(h*y*s-m*d*s+m*n*f-t*y*f-h*n*p+t*d*p)*S,e[6]=(m*l*s-o*y*s-m*n*c+t*y*c+o*n*p-t*l*p)*S,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=b*S,e[9]=(m*u*s-h*g*s-m*i*f+t*g*f+h*i*p-t*u*p)*S,e[10]=(o*g*s-m*a*s+m*i*c-t*g*c-o*i*p+t*a*p)*S,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*S,e[12]=v*S,e[13]=(h*g*n-m*u*n+m*i*d-t*g*d-h*i*y+t*u*y)*S,e[14]=(m*a*n-o*g*n-m*i*l+t*g*l+o*i*y-t*a*y)*S,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,g=o*h,y=o*u,p=a*u,x=l*c,_=l*h,b=l*u,v=i.x,M=i.y,S=i.z;return n[0]=(1-(g+p))*v,n[1]=(f+b)*v,n[2]=(m-_)*v,n[3]=0,n[4]=(f-b)*M,n[5]=(1-(d+p))*M,n[6]=(y+x)*M,n[7]=0,n[8]=(m+_)*S,n[9]=(y-x)*S,n[10]=(1-(d+g))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Xr.set(n[0],n[1],n[2]).length();const o=Xr.set(n[4],n[5],n[6]).length(),a=Xr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Qi.copy(this);const c=1/s,h=1/o,u=1/a;return Qi.elements[0]*=c,Qi.elements[1]*=c,Qi.elements[2]*=c,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=u,Qi.elements[9]*=u,Qi.elements[10]*=u,t.setFromRotationMatrix(Qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-s),u=(t+e)*l,d=(i+n)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xr=new L,Qi=new ct,Nv=new L(0,0,0),Bv=new L(1,1,1),ys=new L,wl=new L,Pi=new L,_p=new ct,xp=new wi;class Sn{constructor(e=0,t=0,i=0,n=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(si(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-si(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(si(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-si(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(si(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-si(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zv=0;const vp=new L,jr=new wi,Vn=new ct,Sl=new L,na=new L,kv=new L,Ov=new wi,Mp=new L(1,0,0),bp=new L(0,1,0),wp=new L(0,0,1),Vv={type:"added"},Sp={type:"removed"};class _t extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new L,t=new Sn,i=new wi,n=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sl.copy(e):Sl.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(na,Sl,this.up):Vn.lookAt(Sl,na,this.up),this.quaternion.setFromRotationMatrix(Vn),n&&(Vn.extractRotation(n.matrixWorld),jr.setFromRotationMatrix(Vn),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function c0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Tp={};function Aa(r){r in Tp||(Tp[r]=!0,console.warn(r))}let Hv=0;const ki=new ct,kh=new _t,qr=new L,Li=new zs,sa=new zs,Ht=new L;class Ni extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?l0:a0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,i){return ki.makeTranslation(e,t,i),this.applyMatrix4(ki),this}scale(e,t,i){return ki.makeScale(e,t,i),this.applyMatrix4(ki),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Li.min,sa.min),Li.expandByPoint(Ht),Ht.addVectors(Li.max,sa.max),Li.expandByPoint(Ht)):(Li.expandByPoint(sa.min),Li.expandByPoint(sa.max))}Li.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ht.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Ht.add(qr)),n=Math.max(n,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new L,h[T]=new L;const u=new L,d=new L,f=new L,m=new Pe,g=new Pe,y=new Pe,p=new L,x=new L;function _(T,D,F){u.fromArray(n,T*3),d.fromArray(n,D*3),f.fromArray(n,F*3),m.fromArray(o,T*2),g.fromArray(o,D*2),y.fromArray(o,F*2),d.sub(u),f.sub(u),g.sub(m),y.sub(m);const P=1/(g.x*y.y-y.x*g.y);isFinite(P)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(P),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(P),c[T].add(p),c[D].add(p),c[F].add(p),h[T].add(x),h[D].add(x),h[F].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,D=b.length;T<D;++T){const F=b[T],P=F.start,U=F.count;for(let z=P,j=P+U;z<j;z+=3)_(i[z+0],i[z+1],i[z+2])}const v=new L,M=new L,S=new L,R=new L;function w(T){S.fromArray(s,T*3),R.copy(S);const D=c[T];v.copy(D),v.sub(S.multiplyScalar(S.dot(D))).normalize(),M.crossVectors(R,D);const P=M.dot(h[T])<0?-1:1;l[T*4]=v.x,l[T*4+1]=v.y,l[T*4+2]=v.z,l[T*4+3]=P}for(let T=0,D=b.length;T<D;++T){const F=b[T],P=F.start,U=F.count;for(let z=P,j=P+U;z<j;z+=3)w(i[z+0]),w(i[z+1]),w(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Xi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Md extends Ni{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],m=[],g=[],y=[];for(let p=0;p<=i;p++){const x=[],_=p/i;let b=0;p===0&&o===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){const M=v/t;u.x=-e*Math.cos(n+M*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(n+M*s)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),y.push(M+b,1-_),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const _=h[p][x+1],b=h[p][x],v=h[p+1][x],M=h[p+1][x+1];(p!==0||o>0)&&f.push(_,b,M),(p!==i-1||l<Math.PI)&&f.push(b,v,M)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uc extends Ni{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],g=[],y=[];for(let p=0;p<h;p++){const x=p*d-o;for(let _=0;_<c;_++){const b=_*u-s;m.push(b,-x,0),g.push(0,0,1),y.push(_/a),y.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,b=x+c*(p+1),v=x+1+c*(p+1),M=x+1+c*p;f.push(_,b,M),f.push(b,v,M)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ap extends Xi{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hn=new L,Oh=new L,Tl=new L,_s=new L,Vh=new L,Al=new L,Hh=new L;class bd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Oh.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(Oh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tl),a=_s.dot(this.direction),l=-_s.dot(Tl),c=_s.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Oh).addScaledVector(Tl,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),n=Hn.dot(Hn)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,n,s){Vh.subVectors(t,e),Al.subVectors(i,e),Hh.crossVectors(Vh,Al);let o=this.direction.dot(Hh),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_s.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(_s,Al));if(l<0)return null;const c=a*this.direction.dot(Vh.cross(_s));if(c<0||l+c>o)return null;const h=-a*_s.dot(Hh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const en=new L,Gn=new L,Gh=new L,Wn=new L,$r=new L,Yr=new L,Ep=new L,Wh=new L,Xh=new L,jh=new L;let El=!1;class tn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),en.subVectors(e,t),n.cross(en);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){en.subVectors(n,t),Gn.subVectors(i,t),Gh.subVectors(e,t);const o=en.dot(en),a=en.dot(Gn),l=en.dot(Gh),c=Gn.dot(Gn),h=Gn.dot(Gh),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,i,n,s,o,a,l){return El===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),El=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Wn),l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l}static isFrontFacing(e,t,i,n){return en.subVectors(i,t),Gn.subVectors(e,t),en.cross(Gn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),en.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return El===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),El=!0),tn.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;$r.subVectors(n,i),Yr.subVectors(s,i),Wh.subVectors(e,i);const l=$r.dot(Wh),c=Yr.dot(Wh);if(l<=0&&c<=0)return t.copy(i);Xh.subVectors(e,n);const h=$r.dot(Xh),u=Yr.dot(Xh);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector($r,o);jh.subVectors(e,s);const f=$r.dot(jh),m=Yr.dot(jh);if(m>=0&&f<=m)return t.copy(s);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Yr,a);const y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return Ep.subVectors(s,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Ep,a);const p=1/(y+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector($r,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rp=new ct,dn=new bd,Rl=new ko,Cp=new L,Kr=new L,Zr=new L,Jr=new L,qh=new L,Cl=new L,Pl=new Pe,Ll=new Pe,Il=new Pe,Pp=new L,Lp=new L,Ip=new L,Dl=new L,Fl=new L;class St extends _t{constructor(e=new Ni,t=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(qh.fromBufferAttribute(u,e),o?Cl.addScaledVector(qh,h):Cl.addScaledVector(qh.sub(t),h))}t.add(Cl)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),dn.copy(e.ray).recast(e.near),!(Rl.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Rl,Cp)===null||dn.origin.distanceToSquared(Cp)>(e.far-e.near)**2))&&(Rp.copy(s).invert(),dn.copy(e.ray).applyMatrix4(Rp),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=s[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,b=x;_<b;_+=3){const v=o.getX(_),M=o.getX(_+1),S=o.getX(_+2);i=Ul(this,y,e,dn,l,c,h,v,M,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=Ul(this,s,e,dn,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=s[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,b=x;_<b;_+=3){const v=_,M=_+1,S=_+2;i=Ul(this,y,e,dn,l,c,h,v,M,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=g,x=g+1,_=g+2;i=Ul(this,s,e,dn,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Gv(r,e,t,i,n,s,o,a){let l;if(e.side===Si?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===an,a),l===null)return null;Fl.copy(a),Fl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fl);return c<t.near||c>t.far?null:{distance:c,point:Fl.clone(),object:r}}function Ul(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Kr),r.getVertexPosition(l,Zr),r.getVertexPosition(c,Jr);const h=Gv(r,e,t,i,Kr,Zr,Jr,Dl);if(h){n&&(Pl.fromBufferAttribute(n,a),Ll.fromBufferAttribute(n,l),Il.fromBufferAttribute(n,c),h.uv=tn.getInterpolation(Dl,Kr,Zr,Jr,Pl,Ll,Il,new Pe)),s&&(Pl.fromBufferAttribute(s,a),Ll.fromBufferAttribute(s,l),Il.fromBufferAttribute(s,c),h.uv1=tn.getInterpolation(Dl,Kr,Zr,Jr,Pl,Ll,Il,new Pe),h.uv2=h.uv1),o&&(Pp.fromBufferAttribute(o,a),Lp.fromBufferAttribute(o,l),Ip.fromBufferAttribute(o,c),h.normal=tn.getInterpolation(Dl,Kr,Zr,Jr,Pp,Lp,Ip,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};tn.getNormal(Kr,Zr,Jr,u.normal),h.face=u}return h}const Qr=new ct,Dp=new ct,Nl=[],Fp=new zs,Wv=new ct,ra=new St,oa=new ko;class Xv extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ap(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Wv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),Fp.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Fp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ko),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),oa.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Qr),Dp.multiplyMatrices(i,Qr),ra.matrixWorld=Dp,ra.raycast(e,Nl);for(let o=0,a=Nl.length;o<a;o++){const l=Nl[o];l.instanceId=s,l.object=this,t.push(l)}Nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ap(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class wd extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class yt{constructor(e=0,t=0,i=0,n=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],y=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(f+1)/2,v=(p+1)/2,M=(h+d)/4,S=(u+g)/4,R=(m+y)/4;return _>b&&_>v?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=M/i,s=S/i):b>v?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=M/n,s=R/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=S/s,n=R/s),this.set(i,n,s,t),this}let x=Math.sqrt((y-m)*(y-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(y-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}const $h=new L,jv=new L,qv=new qe;class sr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=$h.subVectors(i,t).cross(jv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($h),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qv.getNormalMatrix(e),n=this.coplanarPoint($h).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new ko,Bl=new L;class Sd{constructor(e=new sr,t=new sr,i=new sr,n=new sr,s=new sr,o=new sr){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],g=i[11],y=i[12],p=i[13],x=i[14],_=i[15];return t[0].setComponents(a-n,u-l,g-d,_-y).normalize(),t[1].setComponents(a+n,u+l,g+d,_+y).normalize(),t[2].setComponents(a+s,u+c,g+f,_+p).normalize(),t[3].setComponents(a-s,u-c,g-f,_-p).normalize(),t[4].setComponents(a-o,u-h,g-m,_-x).normalize(),t[5].setComponents(a+o,u+h,g+m,_+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Bl.x=n.normal.x>0?e.max.x:e.min.x,Bl.y=n.normal.y>0?e.max.y:e.min.y,Bl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Yh=new ct,Up=new L,Np=new L;class h0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sd,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),t.position.copy(Up),Np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Np),t.updateMatrixWorld(),Yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}let u0=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class di extends u0{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oc*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bp=new ct,aa=new L,Kh=new L;class $v extends h0{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(aa),Kh.copy(i.position),Kh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Kh),i.updateMatrixWorld(),n.makeTranslation(-aa.x,-aa.y,-aa.z),Bp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}}class d0 extends wd{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const Yv=(r,e,t)=>r*(1-t)+e*t,Nc=(r,e)=>(Math.random()*(e-r+1)|0)+r,fi=(r,e)=>Math.random()*(e-r)+r,Kv=r=>r?r===1?1:Math.sin(r*et.d2):0,Zv=(r,e,t)=>r+t*(e-r),So=1/60,et=Object.freeze({m075:Math.PI*.75,m2:Math.PI*2,d2:Math.PI/2,d3:Math.PI/3,d4:Math.PI/4,d6:Math.PI/6});function zp(r,e){if(e===e_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===vu||e===Rg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===vu)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Jv extends Ga{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new pM(t)})}load(e,t,i,n){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Tu.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new qg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===f0){try{o[Ze.KHR_BINARY_GLTF]=new mM(e)}catch(u){n&&n(u);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new RM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new tM;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new gM(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new yM;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new _M;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function Qv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eM{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Xt(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $g(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _x(h),c.distance=u;break;case"spot":c=new gx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ts(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class tM{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return fo}extendParams(e,t,i){const n=[];e.color=new Xt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Kt))}return Promise.all(n)}}class iM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class nM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(a,a)}return Promise.all(s)}}class sM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class rM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Xt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class oM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class aM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xt(a[0],a[1],a[2]),Promise.all(s)}}class lM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class cM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xt(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(s)}}class hM{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class uM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fM{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class pM{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Vi.TRIANGLES&&c.mode!==Vi.TRIANGLE_STRIP&&c.mode!==Vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const g=new Le,y=new I,p=new Us,x=new I(1,1,1),_=new J_(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&y.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,g.compose(y,p,x));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,l[b]);Jt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const f0="glTF",la=12,kp={JSON:1313821514,BIN:5130562};class mM{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,la),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==f0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-la,s=new DataView(e,la);let o=0;for(;o<n;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===kp.JSON){const c=new Uint8Array(e,la+o,a);this.content=i.decode(c)}else if(l===kp.BIN){const c=la+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Du[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Du[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=To[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],g=l[f];g!==void 0&&(m.normalized=g)}u(d)},a,c)})})}}class yM{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _M{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class p0 extends Ha{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,g=m-c,y=-2*f+3*d,p=f-d,x=1-y,_=p-d+u;for(let b=0;b!==a;b++){const v=o[g+b+a],M=o[g+b+l]*h,S=o[m+b+a],R=o[m+b]*h;s[b]=x*v+_*M+y*S+p*R}return s}}const xM=new Us;class vM extends p0{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return xM.fromArray(s).normalize().toArray(s),s}}const Vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Op={9728:xu,9729:sd,9984:$y,9985:Ky,9986:Yy,9987:rd},Vp={33071:ga,33648:_u,10497:Pa},Zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MM={CUBICSPLINE:void 0,LINEAR:Co,STEP:La},Jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new fd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ro})),r.DefaultMaterial}function ca(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ts(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function SM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TM(r){const e=r.extensions&&r.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Hp(e.attributes):t=r.indices+":"+Hp(r.attributes)+":"+r.mode,t}function Hp(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Fu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const EM=new Le;class RM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new px(this.options.manager):this.textureLoader=new vx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};ca(s,a,n),Ts(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,o){i.load(Tu.resolveURL(t.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=Zh[n.type],a=To[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new pi(c,o,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Zh[n.type],c=To[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let g,y;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let _=t.cache.get(x);_||(g=new c(a,p*f,n.count*f/h),_=new j_(g,f/h),t.cache.add(x,_)),y=new hd(_,l,d%f/h,m)}else a===null?g=new c(n.count*l):g=new c(a,d,n.count*l),y=new pi(g,l,m);if(n.sparse!==void 0){const p=Zh.SCALAR,x=To[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,v=new x(o[1],_,n.sparse.count*p),M=new c(o[2],b,n.sparse.count*l);a!==null&&(y=new pi(y.array.slice(),y.itemSize,y.normalized));for(let S=0,R=v.length;S<R;S++){const w=v[S];if(y.setX(w,M[S*l]),l>=2&&y.setY(w,M[S*l+1]),l>=3&&y.setZ(w,M[S*l+2]),l>=4&&y.setW(w,M[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const n=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Op[d.magFilter]||sd,h.minFilter=Op[d.minFilter]||rd,h.wrapS=Vp[d.wrapS]||Pa,h.wrapT=Vp[d.wrapT]||Pa,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const y=new yr(g);y.needsUpdate=!0,d(y)}),t.load(Tu.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||AM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Gg,dr.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Hg,dr.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return fd}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=n[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Xt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Kt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Tg);const h=s.alphaMode||Jh.OPAQUE;if(h===Jh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Jh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==fo&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new lt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==fo&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==fo&&(a.emissive=new Xt().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==fo&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Kt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Ts(u,s),t.associations.set(u,{materials:e}),s.extensions&&ca(n,u,s),u})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");let i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=TM(c),u=n[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Gp(new wn,c,t),n[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?bM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],y=o[f];let p;const x=c[f];if(y.mode===Vi.TRIANGLES||y.mode===Vi.TRIANGLE_STRIP||y.mode===Vi.TRIANGLE_FAN||y.mode===void 0)p=s.isSkinnedMesh===!0?new $_(g,x):new Lc(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),y.mode===Vi.TRIANGLE_STRIP?p.geometry=zp(p.geometry,Rg):y.mode===Vi.TRIANGLE_FAN&&(p.geometry=zp(p.geometry,vu));else if(y.mode===Vi.LINES)p=new Q_(g,x);else if(y.mode===Vi.LINE_STRIP)p=new dd(g,x);else if(y.mode===Vi.LINE_LOOP)p=new ex(g,x);else if(y.mode===Vi.POINTS)p=new tx(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(p.geometry.morphAttributes).length>0&&SM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ts(p,s),y.extensions&&ca(n,p,y),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Mh;t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new cd(Lg.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Og(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ts(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Le;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ud(a,l)})}loadAnimation(e){const i=this.json.animations[e],n=i.name?i.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const d=i.channels[h],f=i.samplers[d.sampler],m=d.target,g=m.node,y=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;m.node!==void 0&&(s.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",y)),a.push(this.getDependency("accessor",p)),l.push(f),c.push(m))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],m=h[3],g=h[4],y=[];for(let p=0,x=u.length;p<x;p++){const _=u[p],b=d[p],v=f[p],M=m[p],S=g[p];if(_===void 0)continue;_.updateMatrix();let R;switch(xs[S.path]){case xs.weights:R=Da;break;case xs.rotation:R=_r;break;case xs.position:case xs.scale:default:R=Fa;break}const w=_.name?_.name:_.uuid,T=M.interpolation!==void 0?MM[M.interpolation]:Co,D=[];xs[S.path]===xs.weights?_.traverse(function(P){P.morphTargetInfluences&&D.push(P.name?P.name:P.uuid)}):D.push(w);let F=v.array;if(v.normalized){const P=Fu(F.constructor),U=new Float32Array(F.length);for(let z=0,j=F.length;z<j;z++)U[z]=F[z]*P;F=U}for(let P=0,U=D.length;P<U;P++){const z=new R(D[P]+"."+xs[S.path],b.array,F,T);M.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(B){const V=this instanceof _r?vM:p0;return new V(this.times,this.values,this.getValueSize()/3,B)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(z)}}return new ax(n,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,EM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Vg:c.length>1?h=new Mh:c.length===1?h=c[0]:h=new Jt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Ts(h,s),s.extensions&&ca(i,h,s),s.matrix!==void 0){const u=new Le;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Mh;i.name&&(s.name=n.createUniqueName(i.name)),Ts(s,i),i.extensions&&ca(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof dr||d instanceof yr)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}}function CM(r,e,t){const i=e.attributes,n=new ai;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const h=Fu(To[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=Fu(To[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;const o=new Cn;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function Gp(r,e,t){const i=e.attributes,n=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in i){const a=Du[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});n.push(o)}return Ts(r,e),CM(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?wM(r,e.targets,t):r})}class m0{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const PM=new m0;let eo;class g0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{eo===void 0&&(eo=Ba("canvas")),eo.width=e.width,eo.height=e.height;const i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=wo(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wo(t[i]/255)*255):t[i]=wo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class y0{constructor(e=null){this.isSource=!0,this.uuid=wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Qh(n[o].image)):s.push(Qh(n[o]))}else s=Qh(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?g0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LM=0;class Ti extends Ns{constructor(e=Ti.DEFAULT_IMAGE,t=Ti.DEFAULT_MAPPING,i=nn,n=nn,s=Hi,o=Ua,a=bi,l=xr,c=Ti.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=wr(),this.name="",this.source=new y0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mr?De:gr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pu:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pu:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?mr:n0}set encoding(e){Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?De:gr}}Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=t0;Ti.DEFAULT_ANISOTROPY=1;class Oo extends Ti{constructor(e,t,i,n,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}let zl;class _0{static getContext(){return zl===void 0&&(zl=new(window.AudioContext||window.webkitAudioContext)),zl}static setContext(e){zl=e}}const Fo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vo{constructor(e){this.manager=e!==void 0?e:PM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xn={};class IM extends Error{constructor(e,t){super(e),this.response=t}}class DM extends Vo{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:i,onError:n});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const y=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:b})=>{if(_)p.close();else{g+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let M=0,S=h.length;M<S;M++){const R=h[M];R.onProgress&&R.onProgress(v)}p.enqueue(b),x()}})}}});return new Response(y)}else throw new IM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Fo.add(e,c);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class FM extends Vo{constructor(e){super(e)}load(e,t,i,n){const s=this,o=new DM(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);_0.getContext().decodeAudioData(c,function(u){t(u)},a)}catch(c){a(c)}},i,n);function a(l){n?n(l):console.error(l),s.manager.itemError(e)}}}class UM extends Vo{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ba("img");function l(){h(),Fo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}let NM=class extends Vo{constructor(e){super(e)}load(e,t,i,n){const s=new Oo,o=new UM(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}};class x0 extends Vo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Fo.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class BM extends NM{load(e,t,i,n){const s=new x0(this.manager),o=new Oo;s.setPath(this.path);let a=0;function l(c){s.load(e[c],h=>{o.images[c]=h,++a===6&&(o.needsUpdate=!0,t?.(o))},i,n)}for(let c=0;c<e.length;c++)l(c);return o}}class zM extends Ti{constructor(e,t,i,n,s,o,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kM extends Vo{load(e,t,i,n){const s=new x0(this.manager);return s.setOptions({imageOrientation:"flipY"}),s.setPath(this.path),s.load(e,o=>{const a=new zM(o);return a.image=o,a.format=bi,a.needsUpdate=!0,t?.(a),a},i,n)}}const OM={maxEnemies:10,rifleSpawn:3,enemy:{immune:!1,lose:!0,walk:500,run:250},damage:{enemy:{strong:10,soft:5},pistol:{head:90,body:25,leg:10},rifle:{head:100,body:50,leg:20}}},VM={maxEnemies:25,rifleSpawn:5,enemy:{immune:!1,lose:!1,walk:1e3,run:500},damage:{enemy:{strong:25,soft:10},pistol:{head:75,body:10,leg:5},rifle:{head:80,body:20,leg:10}}},HM={maxEnemies:50,rifleSpawn:8,enemy:{immune:!0,lose:!1,walk:-1,run:1e4},damage:{enemy:{strong:50,soft:25},pistol:{head:50,body:5,leg:1},rifle:{head:75,body:10,leg:5}}},GM={easy:OM,normal:VM,hard:HM},WM=[0,1.25,25],XM=[.6,1.7,-.85],jM=[1.5,1.5,1.5],qM="player.glb",$M=90,YM={death:"player/death.mp3",hit:"player/hit.mp3"},KM={Idle:[0,0,0,0],Run:[8.75,1,0,0],Left:[3.5,1,-1,1],Right:[4.5,1,1,-1],Backward:[3,-1,0,0],BackwardLeft:[2,-1,-.5,.5],BackwardRight:[2,-1,.5,-.5],ForwardRight:[4,1,.5,-.5],ForwardLeft:[4,1,-.5,.5],Forward:[5,1,0,0]},vs={position:WM,collider:XM,scale:jM,model:qM,mass:$M,sounds:YM,animations:KM},ZM=[1.5707963267948966,3.3415926535897933,-.075],JM=[-10,-4,.25],QM=[13,13,13],eb=.025,tb=[.001,.001],ib=[0,-.01],nb=12632256,sb="1911.glb",rb="1911",ob=.9,ab=-1,lb=-1,cb={bullet:"weapons/shell.mp3",shoot:"weapons/1911.mp3"},hb={position:[.1,.1,.35],lifeTime:500,speed:253,scale:.4},ub={position:[1.5,.53],particles:[3,5],intensity:2,velocity:.25,scale:1},wt={rotation:ZM,position:JM,scale:QM,emissiveIntensity:eb,spread:tb,recoil:ib,emissive:nb,model:sb,textures:rb,headshot:ob,magazine:ab,ammo:lb,sounds:cb,bullet:hb,fire:ub},db={idle:[0,1.6,.075],aim:[-.05,1.525,.25]},fb={idle:[-.525,1.5375,-1.5],aim:[-.3,1.535,-.5],run:[-1.1,1.2,-3]},to={fps:db,tps:fb},pb="environment/rain.mp3",mb=[0,4.98,13.5],gb=.216,yb=[75,75,75],_b="level.glb",xb="cloud.png",vb=.01,Mb="fog.png",bb="sky",wb=10,Sb=250,Tb=[-.025,.225,-.275,-.025],Ab=["environment/lightning0.mp3","environment/lightning1.mp3","environment/lightning2.mp3","environment/lightning3.mp3","environment/lightning4.mp3"],Eb=["rain/drop0.png","rain/drop1.png","rain/drop2.png","rain/drop3.png","rain/drop4.png"],Rb=[[-39.5,53],[-39.5,37],[-29.5,-128],[-29.5,-144],[74,-144],[74,-128],[64,37],[64,53]],Cb=[[84,53],[-59.5,53],[-59.5,37],[-10,37],[-10,-30],[-6.5,-39],[.2,-46.8],[9.2,-52.5],[19.5,-53.5],[25,-59.8],[25,-128],[-49.5,-128],[-49.5,-144],[94,-144],[94,-128],[44.5,-128],[44.5,-61],[41,-52],[34.3,-44.2],[25.3,-38.5],[15,-37.5],[9.5,-31.2],[9.5,37],[84,37]],Pb=[[85,50.35],[-60,50.35],[-60,39.75],[-7.2,39.75],[-7.2,-31],[-4.2,-38.1],[2.25,-45],[10.15,-49.8],[19.75,-51],[27.85,-59.25],[27.75,-130.75],[-50.5,-130.75],[-50.5,-141.35],[94.5,-141.35],[94.5,-130.75],[41.7,-130.75],[41.7,-59.75],[38.7,-52.25],[32.8,-46.25],[24.5,-41.25],[14.4,-39.9],[6.75,-31.75],[6.75,39.75],[85,39.75]],$t={ambient:pb,position:mb,sidewalkHeight:gb,scale:yb,model:_b,cloud:xb,fogDensity:vb,fog:Mb,skybox:bb,height:wb,depth:Sb,portalsOffset:Tb,lighting:Ab,rain:Eb,portals:Rb,bounds:Cb,sidewalk:Pb},Lb=[.75,1.8,-.895],Ib=[0,1.18,-10],Db=[1.33,1.33,1.33],Fb="enemy.glb",Ub=75,Nb={hardAttack:"enemy/hardAttack.mp3",softAttack:"enemy/softAttack.mp3",scream:"enemy/scream.mp3",death:"enemy/death.mp3",hit:"enemy/hit.mp3"},Bb={Idle:[0,0,0,0],Walking:[.5,1,0,0],Running:[3.5,1,0,0],Falling:[.75,1,0,0],Crawling:[.5,1,0,0]},Ms={collider:Lb,position:Ib,scale:Db,model:Fb,mass:Ub,sounds:Nb,animations:Bb},zb=[1.7707963267948965,3.061592653589793,-.41],kb=[-10,22.5,-20],Ob=[.005,.005,.005],Vb=[0,0,-1],Hb=[-26,1,-5.75],Gb=[.29,.29,.29],Wb=[.0025,.0025],Xb=[.02,-.025],jb="AK47.glb",qb="AK47",$b=.8,Yb=150,Kb=30,Zb=0,Jb={reload:"weapons/reload.mp3",bullet:"weapons/case.mp3",empty:"weapons/empty.mp3",shoot:"weapons/AK47.mp3",pick:"weapons/pick.mp3"},Qb={position:[.065,.13,.75],lifeTime:200,speed:670,scale:.6},e1={position:[160,30],particles:[5,8],intensity:3,velocity:11.2,scale:2.5},gt={rotation:zb,spinePosition:kb,worldScale:Ob,spineRotation:Vb,position:Hb,scale:Gb,spread:Wb,recoil:Xb,model:jb,textures:qb,headshot:$b,maxStock:Yb,magazine:Kb,ammo:Zb,sounds:Jb,bullet:Qb,fire:e1},$n=r=>{Object.freeze(r);const e=Object.getOwnPropertyNames(r);for(const t in e){const i=r[e[t]];i&&(typeof i=="object"||typeof i=="function")&&!Object.isFrozen(i)&&$n(i)}return r};var Uu;(r=>{const e=()=>r.offscreen?`${window.location.pathname.slice(0,window.location.pathname.lastIndexOf("/"))}/assets`:`${window.location.pathname.replace(/\/[^/]*$/,"")}/assets`,t=o=>Object.assign({},...Object.keys(o).map(a=>({[a]:{speed:o[a][0],direction:{z0:o[a][1],x0:o[a][2],x1:o[a][3]}}}))),i=vs.animations,n=Ms.animations;r.APP=navigator.userAgent.toLowerCase().includes("electron");const s=o=>o<0?1/0:o;r.offscreen=typeof HTMLCanvasElement<"u"&&!!HTMLCanvasElement.prototype.transferControlToOffscreen,r.worker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,r.basePath=(o=!1)=>r.APP?r.offscreen||!r.worker?o?"./":"./assets":"./":o?"":e(),r.RandomCoords=$n({playerDistance:5,boundOffset:.5,ammount:50}),r.Gameplay=$n(GM.normal),r.Level=$n({position:new L(...$t.position),sidewalkHeight:$t.sidewalkHeight,portalsOffset:$t.portalsOffset,scale:new L(...$t.scale),fogDensity:$t.fogDensity,lighting:$t.lighting,sidewalk:$t.sidewalk,ambient:$t.ambient,portals:$t.portals,skybox:$t.skybox,bounds:$t.bounds,height:$t.height,depth:$t.depth,model:$t.model,cloud:$t.cloud,rain:$t.rain,fog:$t.fog}),r.Camera=$n({fps:{idle:new L(...to.fps.idle),run:new L(...to.fps.idle),aim:new L(...to.fps.aim)},tps:{idle:new L(...to.tps.idle),run:new L(...to.tps.run),aim:new L(...to.tps.aim)}}),r.Player=$n({position:new L(...vs.position),collider:new L(...vs.collider),scale:new L(...vs.scale),moves:t(i),animations:vs.animations,sounds:vs.sounds,model:vs.model,mass:vs.mass}),r.Enemy=$n({position:new L(...Ms.position),collider:new L(...Ms.collider),scale:new L(...Ms.scale),moves:t(n),animations:Ms.animations,sounds:Ms.sounds,model:Ms.model,mass:Ms.mass}),r.Pistol=$n({emissiveIntensity:wt.emissiveIntensity,position:new L(...wt.position),rotation:new Sn(...wt.rotation),spread:new Pe(...wt.spread),recoil:new Pe(...wt.recoil),scale:new L(...wt.scale),magazine:s(wt.magazine),ammo:s(wt.ammo),headshot:wt.headshot,textures:wt.textures,emissive:wt.emissive,sounds:wt.sounds,model:wt.model,bullet:{position:new L(...wt.bullet.position),lifeTime:wt.bullet.lifeTime,speed:wt.bullet.speed,scale:wt.bullet.scale},fire:{position:new Pe(...wt.fire.position),particles:wt.fire.particles,intensity:wt.fire.intensity,velocity:wt.fire.velocity,scale:wt.fire.scale}}),r.Rifle=$n({spinePosition:new L(...gt.spinePosition),spineRotation:new Sn(...gt.spineRotation),worldScale:new L(...gt.worldScale),position:new L(...gt.position),rotation:new Sn(...gt.rotation),spread:new Pe(...gt.spread),recoil:new Pe(...gt.recoil),scale:new L(...gt.scale),magazine:s(gt.magazine),ammo:s(gt.ammo),headshot:gt.headshot,textures:gt.textures,maxStock:gt.maxStock,sounds:gt.sounds,model:gt.model,bullet:{position:new L(...gt.bullet.position),lifeTime:gt.bullet.lifeTime,speed:gt.bullet.speed,scale:gt.bullet.scale},fire:{position:new Pe(...gt.fire.position),particles:gt.fire.particles,intensity:gt.fire.intensity,velocity:gt.fire.velocity,scale:gt.fire.scale}})})(Uu||(Uu={}));const ue=Uu;var Je;(r=>{class e extends m0{imageBasePath=`${t}/images/`;modelBasePath=`${t}/models/`;soundBasePath=`${t}/sounds/`;shaderBasePath=`${t}/shaders/`;cubeTexture=new BM(this);texture=new kM(this);audio=new FM(this);gltf=new Jv(this);uuid=wr();cubeTextures=["px.png","nx.png","py.png","ny.png","pz.png","nz.png"];getPromiseCallbacks(n,s){return{onLoad:o=>{o instanceof Oo&&(o.format=bi),n(o)},onProgress:o=>this.onProgress(o.target?.responseURL,o.loaded,o.total),onError:o=>s(o)}}async loadCubeTexture(n){return await new Promise((s,o)=>{const a=this.getPromiseCallbacks(s,o);this.cubeTexture.setPath(`${this.imageBasePath+n}/`),this.cubeTexture.load(this.cubeTextures,a.onLoad,a.onProgress,a.onError)})}async loadTexture(n){return await new Promise((s,o)=>{const a=this.getPromiseCallbacks(s,o);this.texture.setPath(this.imageBasePath),this.texture.load(n,a.onLoad,a.onProgress,a.onError)})}async loadAudio(n){return await new Promise((s,o)=>{const a=this.getPromiseCallbacks(s,o);this.audio.setPath(this.soundBasePath),this.audio.load(n,a.onLoad,a.onProgress,a.onError)})}async loadShader(n){return await(await fetch(`${this.shaderBasePath+n}`)).text()}async loadGLTF(n){return await new Promise((s,o)=>{const a=this.getPromiseCallbacks(s,o);this.gltf.setPath(this.modelBasePath),this.gltf.load(n,a.onLoad,a.onProgress,a.onError)})}onProgress=(n,s,o)=>{Z.dispatch("Loading::Progress",{progress:s*100/o,uuid:this.uuid},!0)};onError=n=>{console.error(`Error occurred loading ${n}.`)};onStart=()=>{Z.dispatch("Loading::Start",this.uuid,!0)};onLoad=()=>{Z.dispatch("Loading::Complete",this.uuid,!0)}}const t=ue.basePath();r.Loader=new e,(i=>{i.Complete="Loading::Complete",i.Progress="Loading::Progress",i.Start="Loading::Start"})(r.Loading||(r.Loading={}))})(Je||(Je={}));var Ui;(r=>{r.UP=new L(0,1,0),r.RIGHT=new L(1,0,0),r.FORWARD=new L(0,0,1),r.BACKWARD=new L(0,0,-1),r.LEFT=new L(-1,0,0),r.DOWN=new L(0,-1,0),r.random=()=>new L(fi(-1,1),fi(-1,1),fi(-1,1))})(Ui||(Ui={}));function v0(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function t1(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class ss extends Ni{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function m(g,y,p,x,_,b,v,M,S,R,w){const T=b/S,D=v/R,F=b/2,P=v/2,U=M/2,z=S+1,j=R+1;let B=0,V=0;const W=new L;for(let ee=0;ee<j;ee++){const oe=ee*D-P;for(let K=0;K<z;K++){const H=K*T-F;W[g]=H*x,W[y]=oe*_,W[p]=U,c.push(W.x,W.y,W.z),W[g]=0,W[y]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(K/S),u.push(1-ee/R),B+=1}}for(let ee=0;ee<R;ee++)for(let oe=0;oe<S;oe++){const K=d+oe+z*ee,H=d+oe+z*(ee+1),X=d+(oe+1)+z*(ee+1),ne=d+(oe+1)+z*ee;l.push(K,H,ne),l.push(H,X,ne),V+=6}a.addGroup(f,V,w),f+=V,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ui(r){const e={};for(let t=0;t<r.length;t++){const i=Uo(r[t]);for(const n in i)e[n]=i[n]}return e}function i1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function M0(r){return r.getRenderTarget()===null?r.outputColorSpace:Tn}const n1={clone:Uo,merge:ui},s1=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,r1=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class ln extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=i1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const o1=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,a1=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,l1=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,c1=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,h1=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,u1=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,d1=`
vec3 transformed = vec3( position );
`,f1=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,p1=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,m1=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			 return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,g1=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,y1=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,_1=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,x1=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,v1=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,M1=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,b1=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,w1=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,S1=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,T1=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,A1=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,E1=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,R1=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,C1=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,P1=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,L1=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,I1=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,D1=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,F1=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,U1=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,N1=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,B1=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,z1=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,k1=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,O1=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,V1=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,H1=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,G1=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,W1=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,X1=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,j1=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,q1=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,$1=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,Y1=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,K1=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Z1=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,J1=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Q1=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,ew=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif
`,tw=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,iw=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,nw=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,sw=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,rw=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,ow=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,aw=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,lw=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,cw=`
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`,hw=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,uw=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,dw=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,fw=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,pw=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,mw=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,gw=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,yw=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,_w=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,xw=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#ifdef USE_NORMALMAP_TANGENTSPACE

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,vw=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Mw=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,bw=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,ww=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Sw=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,Tw=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Aw=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Ew=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,Rw=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Cw=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Pw=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,Lw=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Iw=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Dw=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Fw=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Uw=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Nw=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Bw=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,zw=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,kw=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,Ow=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,Vw=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Hw=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,Gw=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Ww=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,Xw=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,jw=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,qw=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,$w=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,Yw=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );

#endif
`,Kw=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,Zw=`
#ifdef USE_UV

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Jw=`
#ifdef USE_UV

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Qw=`
#ifdef USE_UV

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,eS=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,tS=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,iS=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,nS=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,sS=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,rS=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,oS=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,aS=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,lS=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,cS=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,hS=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,uS=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,dS=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,fS=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,pS=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,mS=`
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,gS=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,yS=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,_S=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,xS=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,vS=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,MS=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,bS=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,wS=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,SS=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,TS=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,AS=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,ES=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,RS=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,CS=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,PS=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,LS=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,IS=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,DS=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,FS=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Ie={alphamap_fragment:o1,alphamap_pars_fragment:a1,alphatest_fragment:l1,alphatest_pars_fragment:c1,aomap_fragment:h1,aomap_pars_fragment:u1,begin_vertex:d1,beginnormal_vertex:f1,bsdfs:p1,iridescence_fragment:m1,bumpmap_pars_fragment:g1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:_1,clipping_planes_pars_vertex:x1,clipping_planes_vertex:v1,color_fragment:M1,color_pars_fragment:b1,color_pars_vertex:w1,color_vertex:S1,common:T1,cube_uv_reflection_fragment:A1,defaultnormal_vertex:E1,displacementmap_pars_vertex:R1,displacementmap_vertex:C1,emissivemap_fragment:P1,emissivemap_pars_fragment:L1,encodings_fragment:I1,encodings_pars_fragment:D1,envmap_fragment:F1,envmap_common_pars_fragment:U1,envmap_pars_fragment:N1,envmap_pars_vertex:B1,envmap_physical_pars_fragment:Y1,envmap_vertex:z1,fog_vertex:k1,fog_pars_vertex:O1,fog_fragment:V1,fog_pars_fragment:H1,gradientmap_pars_fragment:G1,lightmap_fragment:W1,lightmap_pars_fragment:X1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:q1,lights_pars_begin:$1,lights_toon_fragment:K1,lights_toon_pars_fragment:Z1,lights_phong_fragment:J1,lights_phong_pars_fragment:Q1,lights_physical_fragment:ew,lights_physical_pars_fragment:tw,lights_fragment_begin:iw,lights_fragment_maps:nw,lights_fragment_end:sw,logdepthbuf_fragment:rw,logdepthbuf_pars_fragment:ow,logdepthbuf_pars_vertex:aw,logdepthbuf_vertex:lw,map_fragment:cw,map_pars_fragment:hw,map_particle_fragment:uw,map_particle_pars_fragment:dw,metalnessmap_fragment:fw,metalnessmap_pars_fragment:pw,morphcolor_vertex:mw,morphnormal_vertex:gw,morphtarget_pars_vertex:yw,morphtarget_vertex:_w,normal_fragment_begin:xw,normal_fragment_maps:vw,normal_pars_fragment:Mw,normal_pars_vertex:bw,normal_vertex:ww,normalmap_pars_fragment:Sw,clearcoat_normal_fragment_begin:Tw,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:Ew,iridescence_pars_fragment:Rw,output_fragment:Cw,packing:Pw,premultiplied_alpha_fragment:Lw,project_vertex:Iw,dithering_fragment:Dw,dithering_pars_fragment:Fw,roughnessmap_fragment:Uw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Bw,shadowmap_pars_vertex:zw,shadowmap_vertex:kw,shadowmask_pars_fragment:Ow,skinbase_vertex:Vw,skinning_pars_vertex:Hw,skinning_vertex:Gw,skinnormal_vertex:Ww,specularmap_fragment:Xw,specularmap_pars_fragment:jw,tonemapping_fragment:qw,tonemapping_pars_fragment:$w,transmission_fragment:Yw,transmission_pars_fragment:Kw,uv_pars_fragment:Zw,uv_pars_vertex:Jw,uv_vertex:Qw,worldpos_vertex:eS,background_vert:tS,background_frag:iS,backgroundCube_vert:nS,backgroundCube_frag:sS,cube_vert:rS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:hS,equirect_vert:uS,equirect_frag:dS,linedashed_vert:fS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:yS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:vS,meshnormal_vert:MS,meshnormal_frag:bS,meshphong_vert:wS,meshphong_frag:SS,meshphysical_vert:TS,meshphysical_frag:AS,meshtoon_vert:ES,meshtoon_frag:RS,points_vert:CS,points_frag:PS,shadow_vert:LS,shadow_frag:IS,sprite_vert:DS,sprite_frag:FS},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},pn={basic:{uniforms:ui([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:ui([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:ui([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:ui([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:ui([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:ui([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:ui([re.points,re.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:ui([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:ui([re.common,re.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:ui([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:ui([re.sprite,re.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:ui([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:ui([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};pn.physical={uniforms:ui([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const kl={r:0,b:0,g:0};function US(r,e,t,i,n,s,o){const a=new ze(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(y,p){let x=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),x=!0),r.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),x=!0;break}(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Dc)?(h===void 0&&(h=new St(new ss(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Uo(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_.colorSpace!==De,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new St(new Uc(2,2),new ln({name:"BackgroundMaterial",uniforms:Uo(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.colorSpace!==De,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,p){y.getRGB(kl,M0(r)),i.buffers.color.setClear(kl.r,kl.g,kl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(y,p=1){a.set(y),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:m}}function NS(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=y(null);let c=l,h=!1;function u(U,z,j,B,V){let W=!1;if(o){const ee=g(B,j,z);c!==ee&&(c=ee,f(c.object)),W=p(U,B,j,V),W&&x(U,B,j,V)}else{const ee=z.wireframe===!0;(c.geometry!==B.id||c.program!==j.id||c.wireframe!==ee)&&(c.geometry=B.id,c.program=j.id,c.wireframe=ee,W=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,R(U,z,j,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(U){return i.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function m(U){return i.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,z,j){const B=j.wireframe===!0;let V=a[U.id];V===void 0&&(V={},a[U.id]=V);let W=V[z.id];W===void 0&&(W={},V[z.id]=W);let ee=W[B];return ee===void 0&&(ee=y(d()),W[B]=ee),ee}function y(U){const z=[],j=[],B=[];for(let V=0;V<n;V++)z[V]=0,j[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:B,object:U,attributes:{},index:null}}function p(U,z,j,B){const V=c.attributes,W=z.attributes;let ee=0;const oe=j.getAttributes();for(const K in oe)if(oe[K].location>=0){const X=V[K];let ne=W[K];if(ne===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),X===void 0||X.attribute!==ne||ne&&X.data!==ne.data)return!0;ee++}return c.attributesNum!==ee||c.index!==B}function x(U,z,j,B){const V={},W=z.attributes;let ee=0;const oe=j.getAttributes();for(const K in oe)if(oe[K].location>=0){let X=W[K];X===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));const ne={};ne.attribute=X,X&&X.data&&(ne.data=X.data),V[K]=ne,ee++}c.attributes=V,c.attributesNum=ee,c.index=B}function _(){const U=c.newAttributes;for(let z=0,j=U.length;z<j;z++)U[z]=0}function b(U){v(U,0)}function v(U,z){const j=c.newAttributes,B=c.enabledAttributes,V=c.attributeDivisors;j[U]=1,B[U]===0&&(r.enableVertexAttribArray(U),B[U]=1),V[U]!==z&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),V[U]=z)}function M(){const U=c.newAttributes,z=c.enabledAttributes;for(let j=0,B=z.length;j<B;j++)z[j]!==U[j]&&(r.disableVertexAttribArray(j),z[j]=0)}function S(U,z,j,B,V,W){i.isWebGL2===!0&&(j===r.INT||j===r.UNSIGNED_INT)?r.vertexAttribIPointer(U,z,j,V,W):r.vertexAttribPointer(U,z,j,B,V,W)}function R(U,z,j,B){if(i.isWebGL2===!1&&(U.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=B.attributes,W=j.getAttributes(),ee=z.defaultAttributeValues;for(const oe in W){const K=W[oe];if(K.location>=0){let H=V[oe];if(H===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){const X=H.normalized,ne=H.itemSize,ae=t.get(H);if(ae===void 0)continue;const k=ae.buffer,Fe=ae.type,Re=ae.bytesPerElement;if(H.isInterleavedBufferAttribute){const le=H.data,Ae=le.stride,nt=H.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)v(K.location+xe,le.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<K.locationSize;xe++)b(K.location+xe);r.bindBuffer(r.ARRAY_BUFFER,k);for(let xe=0;xe<K.locationSize;xe++)S(K.location+xe,ne/K.locationSize,Fe,X,Ae*Re,(nt+ne/K.locationSize*xe)*Re)}else{if(H.isInstancedBufferAttribute){for(let le=0;le<K.locationSize;le++)v(K.location+le,H.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<K.locationSize;le++)b(K.location+le);r.bindBuffer(r.ARRAY_BUFFER,k);for(let le=0;le<K.locationSize;le++)S(K.location+le,ne/K.locationSize,Fe,X,ne*Re,ne/K.locationSize*le*Re)}}else if(ee!==void 0){const X=ee[oe];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(K.location,X);break;case 3:r.vertexAttrib3fv(K.location,X);break;case 4:r.vertexAttrib4fv(K.location,X);break;default:r.vertexAttrib1fv(K.location,X)}}}}M()}function w(){F();for(const U in a){const z=a[U];for(const j in z){const B=z[j];for(const V in B)m(B[V].object),delete B[V];delete z[j]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const z=a[U.id];for(const j in z){const B=z[j];for(const V in B)m(B[V].object),delete B[V];delete z[j]}delete a[U.id]}function D(U){for(const z in a){const j=a[z];if(j[U.id]===void 0)continue;const B=j[U.id];for(const V in B)m(B[V].object),delete B[V];delete j[U.id]}}function F(){P(),h=!0,c!==l&&(c=l,f(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:b,disableUnusedAttributes:M}}function BS(r,e,t,i){const n=i.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function zS(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=o||e.has("OES_texture_float"),v=_&&b,M=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:M}}function kS(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new sr,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,y=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!y)s?h(null):c();else{const x=s?0:i,_=x*4;let b=p.clippingState||null;l.value=b,b=h(m,d,_,f);for(let v=0;v!==_;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let y=null;if(g!==0){if(y=l.value,m!==!0||y===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(y===null||y.length<p)&&(y=new Float32Array(p));for(let _=0,b=f;_!==g;++_,b+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(y,b),y[b+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}}class os extends Ns{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(Aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?De:gr),this.texture=new Ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Hi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new y0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=-90,no=1;class OS extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new di(io,no,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new di(io,no,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new di(io,no,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new di(io,no,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new di(io,no,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new di(io,no,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=ns,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class VS extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mr?De:gr),this.texture=new Oo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ss(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Si,blending:Ps});s.uniforms.tEquirect.value=t;const o=new St(n,s),a=t.minFilter;return t.minFilter===Ua&&(t.minFilter=Hi),new OS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}function HS(r){let e=new WeakMap;function t(o,a){return a===Ru?o.mapping=Lo:a===Cu&&(o.mapping=Io),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ru||a===Cu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new VS(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class b0 extends u0{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yo=4,Wp=[.125,.215,.35,.446,.526,.582],lr=20,eu=new b0,Xp=new ze;let tu=null;const rr=(1+Math.sqrt(5))/2,so=1/rr,jp=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,rr,so),new L(0,rr,-so),new L(so,0,rr),new L(-so,0,rr),new L(rr,so,0),new L(-rr,so,0)];class Nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){tu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu),e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:Na,format:bi,colorSpace:Tn,depthBuffer:!1},n=qp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GS(s)),this._blurMaterial=WS(s,e,t)}return n}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,i,n){const a=new di(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xp),h.toneMapping=ns,h.autoClear=!1;const f=new go({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1}),m=new St(new ss,f);let g=!1;const y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,g=!0):(f.color.copy(Xp),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Ol(n,x*_,p>2?_:0,_,_),h.setRenderTarget(n),g&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Lo||e.mapping===Io;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ol(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,eu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=jp[(n-1)%jp.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*lr-1),g=s/m,y=isFinite(s)?1+Math.floor(h*g):lr;y>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${lr}`);const p=[];let x=0;for(let S=0;S<lr;++S){const R=S/g,w=Math.exp(-R*R/2);p.push(w),S===0?x+=w:S<y&&(x+=2*w)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const b=this._sizeLods[n],v=3*b*(n>_-yo?n-_+yo:0),M=4*(this._cubeSize-b);Ol(t,v,M,3*b,2*b),l.setRenderTarget(t),l.render(u,eu)}}function GS(r){const e=[],t=[],i=[];let n=r;const s=r-yo+1+Wp.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-yo?l=Wp[o-r+yo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,y=2,p=1,x=new Float32Array(g*m*f),_=new Float32Array(y*m*f),b=new Float32Array(p*m*f);for(let M=0;M<f;M++){const S=M%3*2/3-1,R=M>2?0:-1,w=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(w,g*m*M),_.set(d,y*m*M);const T=[M,M,M,M,M,M];b.set(T,p*m*M)}const v=new Ni;v.setAttribute("position",new Xi(x,g)),v.setAttribute("uv",new Xi(_,y)),v.setAttribute("faceIndex",new Xi(b,p)),e.push(v),n>yo&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qp(r,e,t){const i=new os(r,e,t);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function WS(r,e,t){const i=new Float32Array(lr),n=new L(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function $p(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Yp(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XS(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ru||l===Cu,h=l===Lo||l===Io;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Nu(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Nu(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jS(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function qS(r,e,t,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let y=0,p=g.length;y<p;y++)e.update(g[y],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let _=0,b=x.length;_<b;_+=3){const v=x[_+0],M=x[_+1],S=x[_+2];d.push(v,M,M,S,S,v)}}else{const x=m.array;g=m.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const v=_+0,M=_+1,S=_+2;d.push(v,M,M,S,S,v)}}const y=new(c0(d)?l0:a0)(d,1);y.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,y)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $S(r,e,t,i){const n=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let g,y;if(n)g=r,y="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,a,d*l,m),t.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function YS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class w0 extends Ti{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function KS(r,e){return r[0]-e[0]}function ZS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function JS(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let g=s.get(h);if(g===void 0||g.count!==m){let U=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let R=0;x===!0&&(R=1),_===!0&&(R=2),b===!0&&(R=3);let w=h.attributes.position.count*R,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*T*4*m),F=new w0(D,w,T,m);F.type=hr,F.needsUpdate=!0;const P=R*4;for(let z=0;z<m;z++){const j=v[z],B=M[z],V=S[z],W=w*T*4*z;for(let ee=0;ee<j.count;ee++){const oe=ee*P;x===!0&&(o.fromBufferAttribute(j,ee),D[W+oe+0]=o.x,D[W+oe+1]=o.y,D[W+oe+2]=o.z,D[W+oe+3]=0),_===!0&&(o.fromBufferAttribute(B,ee),D[W+oe+4]=o.x,D[W+oe+5]=o.y,D[W+oe+6]=o.z,D[W+oe+7]=0),b===!0&&(o.fromBufferAttribute(V,ee),D[W+oe+8]=o.x,D[W+oe+9]=o.y,D[W+oe+10]=o.z,D[W+oe+11]=V.itemSize===4?o.w:1)}}g={count:m,texture:F,size:new Pe(w,T)},s.set(h,g),h.addEventListener("dispose",U)}let y=0;for(let x=0;x<d.length;x++)y+=d[x];const p=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let m=i[h.id];if(m===void 0||m.length!==f){m=[];for(let _=0;_<f;_++)m[_]=[_,0];i[h.id]=m}for(let _=0;_<f;_++){const b=m[_];b[0]=_,b[1]=d[_]}m.sort(ZS);for(let _=0;_<8;_++)_<f&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(KS);const g=h.morphAttributes.position,y=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const b=a[_],v=b[0],M=b[1];v!==Number.MAX_SAFE_INTEGER&&M?(g&&h.getAttribute("morphTarget"+_)!==g[v]&&h.setAttribute("morphTarget"+_,g[v]),y&&h.getAttribute("morphNormal"+_)!==y[v]&&h.setAttribute("morphNormal"+_,y[v]),n[_]=M,p+=M):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),y&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function QS(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class eT extends Ti{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const S0=new Ti,T0=new w0,A0=new eT,E0=new Oo,Kp=[],Zp=[],Jp=new Float32Array(16),Qp=new Float32Array(9),em=new Float32Array(4);function Ho(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Kp[n];if(s===void 0&&(s=new Float32Array(n),Kp[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Bt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Bc(r,e){let t=Zp[e];t===void 0&&(t=new Int32Array(e),Zp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function tT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function iT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Bt(t,e)}}function nT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Bt(t,e)}}function sT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Bt(t,e)}}function rT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Nt(t,i))return;em.set(i),r.uniformMatrix2fv(this.addr,!1,em),Bt(t,i)}}function oT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Nt(t,i))return;Qp.set(i),r.uniformMatrix3fv(this.addr,!1,Qp),Bt(t,i)}}function aT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Nt(t,i))return;Jp.set(i),r.uniformMatrix4fv(this.addr,!1,Jp),Bt(t,i)}}function lT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Bt(t,e)}}function hT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Bt(t,e)}}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Bt(t,e)}}function dT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Bt(t,e)}}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Bt(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Bt(t,e)}}function gT(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||S0,n)}function yT(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||A0,n)}function _T(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||E0,n)}function xT(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||T0,n)}function vT(r){switch(r){case 5126:return tT;case 35664:return iT;case 35665:return nT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return aT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return hT;case 35669:case 35673:return uT;case 5125:return dT;case 36294:return fT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return xT}}function MT(r,e){r.uniform1fv(this.addr,e)}function bT(r,e){const t=Ho(e,this.size,2);r.uniform2fv(this.addr,t)}function wT(r,e){const t=Ho(e,this.size,3);r.uniform3fv(this.addr,t)}function ST(r,e){const t=Ho(e,this.size,4);r.uniform4fv(this.addr,t)}function TT(r,e){const t=Ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AT(r,e){const t=Ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ET(r,e){const t=Ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function RT(r,e){r.uniform1iv(this.addr,e)}function CT(r,e){r.uniform2iv(this.addr,e)}function PT(r,e){r.uniform3iv(this.addr,e)}function LT(r,e){r.uniform4iv(this.addr,e)}function IT(r,e){r.uniform1uiv(this.addr,e)}function DT(r,e){r.uniform2uiv(this.addr,e)}function FT(r,e){r.uniform3uiv(this.addr,e)}function UT(r,e){r.uniform4uiv(this.addr,e)}function NT(r,e,t){const i=this.cache,n=e.length,s=Bc(t,n);Nt(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||S0,s[o])}function BT(r,e,t){const i=this.cache,n=e.length,s=Bc(t,n);Nt(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||A0,s[o])}function zT(r,e,t){const i=this.cache,n=e.length,s=Bc(t,n);Nt(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||E0,s[o])}function kT(r,e,t){const i=this.cache,n=e.length,s=Bc(t,n);Nt(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||T0,s[o])}function OT(r){switch(r){case 5126:return MT;case 35664:return bT;case 35665:return wT;case 35666:return ST;case 35674:return TT;case 35675:return AT;case 35676:return ET;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return IT;case 36294:return DT;case 36295:return FT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return kT}}class VT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=vT(t.type)}}class HT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=OT(t.type)}}class GT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function tm(r,e){r.seq.push(e),r.map[e.id]=e}function WT(r,e,t){const i=r.name,n=i.length;for(iu.lastIndex=0;;){const s=iu.exec(i),o=iu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){tm(t,c===void 0?new VT(a,r,e):new HT(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new GT(a),tm(t,u)),t=u}}}class cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);WT(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function im(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let XT=0;function jT(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function qT(r){switch(r){case Tn:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function nm(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+jT(r.getShaderSource(e),o)}else return n}function $T(r,e){const t=qT(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function YT(r,e){let t;switch(e){case Qx:t="Linear";break;case ev:t="Reinhard";break;case tv:t="OptimizedCineon";break;case e0:t="ACESFilmic";break;case iv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ya).join(`
`)}function ZT(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JT(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ya(r){return r!==""}function sm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(r){return r.replace(QT,eA)}function eA(r,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bu(t)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(r){return r.replace(tA,iA)}function iA(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function am(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lo:case Io:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ic:e="ENVMAP_BLENDING_MULTIPLY";break;case Zx:e="ENVMAP_BLENDING_MIX";break;case Jx:e="ENVMAP_BLENDING_ADD";break}return e}function aA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lA(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nA(t),c=sA(t),h=rA(t),u=oA(t),d=aA(t),f=t.isWebGL2?"":KT(t),m=ZT(s),g=n.createProgram();let y,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(ya).join(`
`),y.length>0&&(y+=`
`),p=[f,m].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(y=[am(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[f,am(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ns?YT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,$T("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),o=Bu(o),o=sm(o,t),o=rm(o,t),a=Bu(a),a=sm(a,t),a=rm(a,t),o=om(o),a=om(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+y+o,b=x+p+a,v=im(n,n.VERTEX_SHADER,_),M=im(n,n.FRAGMENT_SHADER,b);if(n.attachShader(g,v),n.attachShader(g,M),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),r.debug.checkShaderErrors){const w=n.getProgramInfoLog(g).trim(),T=n.getShaderInfoLog(v).trim(),D=n.getShaderInfoLog(M).trim();let F=!0,P=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,v,M);else{const U=nm(n,v,"vertex"),z=nm(n,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+U+`
`+z)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(T===""||D==="")&&(P=!1);P&&(this.diagnostics={runnable:F,programLog:w,vertexShader:{log:T,prefix:y},fragmentShader:{log:D,prefix:p}})}n.deleteShader(v),n.deleteShader(M);let S;this.getUniforms=function(){return S===void 0&&(S=new cc(n,g)),S};let R;return this.getAttributes=function(){return R===void 0&&(R=JT(n,g)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=XT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=M,this}let cA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uA(e),t.set(e,i)),i}}class uA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function dA(r,e,t,i,n,s,o){const a=new vd,l=new hA,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return w===1?"uv1":w===2?"uv2":w===3?"uv3":"uv"}function y(w,T,D,F,P){const U=F.fog,z=P.geometry,j=w.isMeshStandardMaterial?F.environment:null,B=(w.isMeshStandardMaterial?t:e).get(w.envMap||j),V=B&&B.mapping===Dc?B.image.height:null,W=m[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=ee!==void 0?ee.length:0;let K=0;z.morphAttributes.position!==void 0&&(K=1),z.morphAttributes.normal!==void 0&&(K=2),z.morphAttributes.color!==void 0&&(K=3);let H,X,ne,ae;if(W){const ht=pn[W];H=ht.vertexShader,X=ht.fragmentShader}else H=w.vertexShader,X=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const k=r.getRenderTarget(),Fe=P.isInstancedMesh===!0,Re=!!w.map,le=!!w.matcap,Ae=!!B,nt=!!w.aoMap,xe=!!w.lightMap,We=!!w.bumpMap,zt=!!w.normalMap,jt=!!w.displacementMap,kt=!!w.emissiveMap,Ft=!!w.metalnessMap,st=!!w.roughnessMap,bt=w.clearcoat>0,vi=w.iridescence>0,C=w.sheen>0,A=w.transmission>0,q=bt&&!!w.clearcoatMap,ie=bt&&!!w.clearcoatNormalMap,se=bt&&!!w.clearcoatRoughnessMap,ce=vi&&!!w.iridescenceMap,Ee=vi&&!!w.iridescenceThicknessMap,fe=C&&!!w.sheenColorMap,J=C&&!!w.sheenRoughnessMap,ge=!!w.specularMap,Me=!!w.specularColorMap,Se=!!w.specularIntensityMap,de=A&&!!w.transmissionMap,ye=A&&!!w.thicknessMap,Ye=!!w.gradientMap,ot=!!w.alphaMap,At=w.alphaTest>0,N=!!w.extensions,$=!!z.attributes.uv1,te=!!z.attributes.uv2,he=!!z.attributes.uv3;return{isWebGL2:h,shaderID:W,shaderName:w.type,vertexShader:H,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:Fe,instancingColor:Fe&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:k===null?r.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Tn,map:Re,matcap:le,envMap:Ae,envMapMode:Ae&&B.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:xe,bumpMap:We,normalMap:zt,displacementMap:d&&jt,emissiveMap:kt,normalMapObjectSpace:zt&&w.normalMapType===Sv,normalMapTangentSpace:zt&&w.normalMapType===Fc,metalnessMap:Ft,roughnessMap:st,clearcoat:bt,clearcoatMap:q,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:vi,iridescenceMap:ce,iridescenceThicknessMap:Ee,sheen:C,sheenColorMap:fe,sheenRoughnessMap:J,specularMap:ge,specularColorMap:Me,specularIntensityMap:Se,transmission:A,transmissionMap:de,thicknessMap:ye,gradientMap:Ye,opaque:w.transparent===!1&&w.blending===bo,alphaMap:ot,alphaTest:At,combine:w.combine,mapUv:Re&&g(w.map.channel),aoMapUv:nt&&g(w.aoMap.channel),lightMapUv:xe&&g(w.lightMap.channel),bumpMapUv:We&&g(w.bumpMap.channel),normalMapUv:zt&&g(w.normalMap.channel),displacementMapUv:jt&&g(w.displacementMap.channel),emissiveMapUv:kt&&g(w.emissiveMap.channel),metalnessMapUv:Ft&&g(w.metalnessMap.channel),roughnessMapUv:st&&g(w.roughnessMap.channel),clearcoatMapUv:q&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(w.sheenRoughnessMap.channel),specularMapUv:ge&&g(w.specularMap.channel),specularColorMapUv:Me&&g(w.specularColorMap.channel),specularIntensityMapUv:Se&&g(w.specularIntensityMap.channel),transmissionMapUv:de&&g(w.transmissionMap.channel),thicknessMapUv:ye&&g(w.thicknessMap.channel),alphaMapUv:ot&&g(w.alphaMap.channel),vertexTangents:zt&&!!z.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:te,vertexUv3s:he,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Re||ot),fog:!!U,useFog:w.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:w.toneMapped?r.toneMapping:ns,useLegacyLights:r.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gn,flipSided:w.side===Si,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:N&&w.extensions.derivatives===!0,extensionFragDepth:N&&w.extensions.fragDepth===!0,extensionDrawBuffers:N&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)T.push(D),T.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(x(T,w),_(T,w),T.push(r.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function x(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),w.push(a.mask)}function b(w){const T=m[w.type];let D;if(T){const F=pn[T];D=n1.clone(F.uniforms)}else D=w.uniforms;return D}function v(w,T){let D;for(let F=0,P=c.length;F<P;F++){const U=c[F];if(U.cacheKey===T){D=U,++D.usedTimes;break}}return D===void 0&&(D=new lA(r,T,w,s),c.push(D)),D}function M(w){if(--w.usedTimes===0){const T=c.indexOf(w);c[T]=c[c.length-1],c.pop(),w.destroy()}}function S(w){l.remove(w)}function R(){l.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:R}}function fA(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function pA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cm(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,m,g,y){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:y},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=y),e++,p}function a(u,d,f,m,g,y){const p=o(u,d,f,m,g,y);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,m,g,y){const p=o(u,d,f,m,g,y);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||pA),i.length>1&&i.sort(d||lm),n.length>1&&n.sort(d||lm)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function mA(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new cm,r.set(i,[o])):n>=s.length?(o=new cm,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function yA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _A=0;function xA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vA(r,e){const t=new gA,i=yA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new L);const s=new L,o=new ct,a=new ct;function l(h,u){let d=0,f=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,y=0,p=0,x=0,_=0,b=0,v=0,M=0,S=0,R=0;h.sort(xA);const w=u===!0?Math.PI:1;for(let D=0,F=h.length;D<F;D++){const P=h[D],U=P.color,z=P.intensity,j=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*z*w,f+=U.g*z*w,m+=U.b*z*w;else if(P.isLightProbe)for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],z);else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const W=P.shadow,ee=i.get(P);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=V,g++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(U).multiplyScalar(z*w),V.distance=j,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[p]=V;const W=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,W.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[p]=W.matrix,P.castShadow){const ee=i.get(P);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=B,M++}p++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(U).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=V,x++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*w),V.distance=P.distance,V.decay=P.decay,P.castShadow){const W=P.shadow,ee=i.get(P);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[y]=ee,n.pointShadowMap[y]=B,n.pointShadowMatrix[y]=P.shadow.matrix,v++}n.point[y]=V,y++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(z*w),V.groundColor.copy(P.groundColor).multiplyScalar(z*w),n.hemi[_]=V,_++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const T=n.hash;(T.directionalLength!==g||T.pointLength!==y||T.spotLength!==p||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==b||T.numPointShadows!==v||T.numSpotShadows!==M||T.numSpotMaps!==S)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,T.directionalLength=g,T.pointLength=y,T.spotLength=p,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=b,T.numPointShadows=v,T.numSpotShadows=M,T.numSpotMaps=S,n.version=_A++)}function c(h,u){let d=0,f=0,m=0,g=0,y=0;const p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const b=h[x];if(b.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(b.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),y++}}}return{setup:l,setupView:c,state:n}}function hm(r,e){const t=new vA(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function MA(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hm(r,e),t.set(s,[l])):o>=a.length?(l=new hm(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class bA extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wA extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,TA=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function AA(r,e,t){let i=new Sd;const n=new Pe,s=new Pe,o=new yt,a=new bA({depthPacking:wv}),l=new wA,c={},h=t.maxTextureSize,u={[an]:Si,[Si]:an,[gn]:gn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:SA,fragmentShader:TA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ni;m.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new St(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let p=this.type;this.render=function(v,M,S){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||v.length===0)return;const R=r.getRenderTarget(),w=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Ps),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==qn&&this.type===qn,P=p===qn&&this.type!==qn;for(let U=0,z=v.length;U<z;U++){const j=v[U],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);const V=B.getFrameExtents();if(n.multiply(V),s.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/V.x),n.x=s.x*V.x,B.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/V.y),n.y=s.y*V.y,B.mapSize.y=s.y)),B.map===null||F===!0||P===!0){const ee=this.type!==qn?{minFilter:Ut,magFilter:Ut}:{};B.map!==null&&B.map.dispose(),B.map=new os(n.x,n.y,ee),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const W=B.getViewportCount();for(let ee=0;ee<W;ee++){const oe=B.getViewport(ee);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),D.viewport(o),B.updateMatrices(j,ee),i=B.getFrustum(),b(M,S,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===qn&&x(B,S),B.needsUpdate=!1}p=this.type,y.needsUpdate=!1,r.setRenderTarget(R,w,T)};function x(v,M){const S=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new os(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(M,null,S,d,g,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(M,null,S,f,g,null)}function _(v,M,S,R){let w=null;const T=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(T!==void 0)w=T;else if(w=S.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=w.uuid,F=M.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let U=P[F];U===void 0&&(U=w.clone(),P[F]=U),w=U}if(w.visible=M.visible,w.wireframe=M.wireframe,R===qn?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:u[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=r.properties.get(w);D.light=S}return w}function b(v,M,S,R,w){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===qn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const F=e.update(v),P=v.material;if(Array.isArray(P)){const U=F.groups;for(let z=0,j=U.length;z<j;z++){const B=U[z],V=P[B.materialIndex];if(V&&V.visible){const W=_(v,V,R,w);r.renderBufferDirect(S,null,F,W,v,B)}}}else if(P.visible){const U=_(v,P,R,w);r.renderBufferDirect(S,null,F,U,v,null)}}const D=v.children;for(let F=0,P=D.length;F<P;F++)b(D[F],M,S,R,w)}}function EA(r,e,t){const i=t.isWebGL2;function n(){let N=!1;const $=new yt;let te=null;const he=new yt(0,0,0,0);return{setMask:function(pe){te!==pe&&!N&&(r.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){N=pe},setClear:function(pe,ht,ut,Qt,cs){cs===!0&&(pe*=Qt,ht*=Qt,ut*=Qt),$.set(pe,ht,ut,Qt),he.equals($)===!1&&(r.clearColor(pe,ht,ut,Qt),he.copy($))},reset:function(){N=!1,te=null,he.set(-1,0,0,0)}}}function s(){let N=!1,$=null,te=null,he=null;return{setTest:function(pe){pe?k(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(pe){$!==pe&&!N&&(r.depthMask(pe),$=pe)},setFunc:function(pe){if(te!==pe){switch(pe){case Wx:r.depthFunc(r.NEVER);break;case Xx:r.depthFunc(r.ALWAYS);break;case jx:r.depthFunc(r.LESS);break;case Eu:r.depthFunc(r.LEQUAL);break;case qx:r.depthFunc(r.EQUAL);break;case $x:r.depthFunc(r.GEQUAL);break;case Yx:r.depthFunc(r.GREATER);break;case Kx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=pe}},setLocked:function(pe){N=pe},setClear:function(pe){he!==pe&&(r.clearDepth(pe),he=pe)},reset:function(){N=!1,$=null,te=null,he=null}}}function o(){let N=!1,$=null,te=null,he=null,pe=null,ht=null,ut=null,Qt=null,cs=null;return{setTest:function(Et){N||(Et?k(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(Et){$!==Et&&!N&&(r.stencilMask(Et),$=Et)},setFunc:function(Et,Bi,hn){(te!==Et||he!==Bi||pe!==hn)&&(r.stencilFunc(Et,Bi,hn),te=Et,he=Bi,pe=hn)},setOp:function(Et,Bi,hn){(ht!==Et||ut!==Bi||Qt!==hn)&&(r.stencilOp(Et,Bi,hn),ht=Et,ut=Bi,Qt=hn)},setLocked:function(Et){N=Et},setClear:function(Et){cs!==Et&&(r.clearStencil(Et),cs=Et)},reset:function(){N=!1,$=null,te=null,he=null,pe=null,ht=null,ut=null,Qt=null,cs=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,g=[],y=null,p=!1,x=null,_=null,b=null,v=null,M=null,S=null,R=null,w=!1,T=null,D=null,F=null,P=null,U=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=B>=2);let W=null,ee={};const oe=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),H=new yt().fromArray(oe),X=new yt().fromArray(K);function ne(N,$,te,he){const pe=new Uint8Array(4),ht=r.createTexture();r.bindTexture(N,ht),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<te;ut++)i&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D($,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D($+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return ht}const ae={};ae[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(r.DEPTH_TEST),l.setFunc(Eu),jt(!1),kt(Hf),k(r.CULL_FACE),We(Ps);function k(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function Fe(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function Re(N,$){return f[N]!==$?(r.bindFramebuffer(N,$),f[N]=$,i&&(N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=$),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=$)),!0):!1}function le(N,$){let te=g,he=!1;if(N)if(te=m.get($),te===void 0&&(te=[],m.set($,te)),N.isWebGLMultipleRenderTargets){const pe=N.texture;if(te.length!==pe.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,ut=pe.length;ht<ut;ht++)te[ht]=r.COLOR_ATTACHMENT0+ht;te.length=pe.length,he=!0}}else te[0]!==r.COLOR_ATTACHMENT0&&(te[0]=r.COLOR_ATTACHMENT0,he=!0);else te[0]!==r.BACK&&(te[0]=r.BACK,he=!0);he&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ae(N){return y!==N?(r.useProgram(N),y=N,!0):!1}const nt={[ar]:r.FUNC_ADD,[Fx]:r.FUNC_SUBTRACT,[Ux]:r.FUNC_REVERSE_SUBTRACT};if(i)nt[Xf]=r.MIN,nt[jf]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(nt[Xf]=N.MIN_EXT,nt[jf]=N.MAX_EXT)}const xe={[Nx]:r.ZERO,[Jg]:r.ONE,[Bx]:r.SRC_COLOR,[Qg]:r.SRC_ALPHA,[Gx]:r.SRC_ALPHA_SATURATE,[Vx]:r.DST_COLOR,[kx]:r.DST_ALPHA,[zx]:r.ONE_MINUS_SRC_COLOR,[_d]:r.ONE_MINUS_SRC_ALPHA,[Hx]:r.ONE_MINUS_DST_COLOR,[Ox]:r.ONE_MINUS_DST_ALPHA};function We(N,$,te,he,pe,ht,ut,Qt){if(N===Ps){p===!0&&(Fe(r.BLEND),p=!1);return}if(p===!1&&(k(r.BLEND),p=!0),N!==Zg){if(N!==x||Qt!==w){if((_!==ar||M!==ar)&&(r.blendEquation(r.FUNC_ADD),_=ar,M=ar),Qt)switch(N){case bo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Au:r.blendFunc(r.ONE,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case bo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Au:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,v=null,S=null,R=null,x=N,w=Qt}return}pe=pe||$,ht=ht||te,ut=ut||he,($!==_||pe!==M)&&(r.blendEquationSeparate(nt[$],nt[pe]),_=$,M=pe),(te!==b||he!==v||ht!==S||ut!==R)&&(r.blendFuncSeparate(xe[te],xe[he],xe[ht],xe[ut]),b=te,v=he,S=ht,R=ut),x=N,w=!1}function zt(N,$){N.side===gn?Fe(r.CULL_FACE):k(r.CULL_FACE);let te=N.side===Si;$&&(te=!te),jt(te),N.blending===bo&&N.transparent===!1?We(Ps):We(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const he=N.stencilWrite;c.setTest(he),he&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?k(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function jt(N){T!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),T=N)}function kt(N){N!==Ix?(k(r.CULL_FACE),N!==D&&(N===Hf?r.cullFace(r.BACK):N===Dx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),D=N}function Ft(N){N!==F&&(j&&r.lineWidth(N),F=N)}function st(N,$,te){N?(k(r.POLYGON_OFFSET_FILL),(P!==$||U!==te)&&(r.polygonOffset($,te),P=$,U=te)):Fe(r.POLYGON_OFFSET_FILL)}function bt(N){N?k(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function vi(N){N===void 0&&(N=r.TEXTURE0+z-1),W!==N&&(r.activeTexture(N),W=N)}function C(N,$,te){te===void 0&&(W===null?te=r.TEXTURE0+z-1:te=W);let he=ee[te];he===void 0&&(he={type:void 0,texture:void 0},ee[te]=he),(he.type!==N||he.texture!==$)&&(W!==te&&(r.activeTexture(te),W=te),r.bindTexture(N,$||ae[N]),he.type=N,he.texture=$)}function A(){const N=ee[W];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){H.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),H.copy(N))}function ye(N){X.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),X.copy(N))}function Ye(N,$){let te=u.get($);te===void 0&&(te=new WeakMap,u.set($,te));let he=te.get(N);he===void 0&&(he=r.getUniformBlockIndex($,N.name),te.set(N,he))}function ot(N,$){const he=u.get($).get(N);h.get($)!==he&&(r.uniformBlockBinding($,he,N.__bindingPointIndex),h.set($,he))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,ee={},f={},m=new WeakMap,g=[],y=null,p=!1,x=null,_=null,b=null,v=null,M=null,S=null,R=null,w=!1,T=null,D=null,F=null,P=null,U=null,H.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:k,disable:Fe,bindFramebuffer:Re,drawBuffers:le,useProgram:Ae,setBlending:We,setMaterial:zt,setFlipSided:jt,setCullFace:kt,setLineWidth:Ft,setPolygonOffset:st,setScissorTest:bt,activeTexture:vi,bindTexture:C,unbindTexture:A,compressedTexImage2D:q,compressedTexImage3D:ie,texImage2D:Me,texImage3D:Se,updateUBOMapping:Ye,uniformBlockBinding:ot,texStorage2D:J,texStorage3D:ge,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Ee,compressedTexSubImage3D:fe,scissor:de,viewport:ye,reset:At}}function RA(r,e,t,i,n,s,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const y=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,A){return p?new OffscreenCanvas(C,A):Ba("canvas")}function _(C,A,q,ie){let se=1;if((C.width>ie||C.height>ie)&&(se=ie/Math.max(C.width,C.height)),se<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ce=A?Hy:Math.floor,Ee=ce(se*C.width),fe=ce(se*C.height);g===void 0&&(g=x(Ee,fe));const J=q?x(Ee,fe):g;return J.width=Ee,J.height=fe,J.getContext("2d").drawImage(C,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ee+"x"+fe+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return Qd(C.width)&&Qd(C.height)}function v(C){return a?!1:C.wrapS!==nn||C.wrapT!==nn||C.minFilter!==Ut&&C.minFilter!==Hi}function M(C,A){return C.generateMipmaps&&A&&C.minFilter!==Ut&&C.minFilter!==Hi}function S(C){r.generateMipmap(C)}function R(C,A,q,ie,se=!1){if(a===!1)return A;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=A;return A===r.RED&&(q===r.FLOAT&&(ce=r.R32F),q===r.HALF_FLOAT&&(ce=r.R16F),q===r.UNSIGNED_BYTE&&(ce=r.R8)),A===r.RG&&(q===r.FLOAT&&(ce=r.RG32F),q===r.HALF_FLOAT&&(ce=r.RG16F),q===r.UNSIGNED_BYTE&&(ce=r.RG8)),A===r.RGBA&&(q===r.FLOAT&&(ce=r.RGBA32F),q===r.HALF_FLOAT&&(ce=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ce=ie===De&&se===!1?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)),(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(C,A,q){return M(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==Hi?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function T(C){return C===Ut||C===qf||C===Th?r.NEAREST:r.LINEAR}function D(C){const A=C.target;A.removeEventListener("dispose",D),P(A),A.isVideoTexture&&m.delete(A)}function F(C){const A=C.target;A.removeEventListener("dispose",F),z(A)}function P(C){const A=i.get(C);if(A.__webglInit===void 0)return;const q=C.source,ie=y.get(q);if(ie){const se=ie[A.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(C),Object.keys(ie).length===0&&y.delete(q)}i.remove(C)}function U(C){const A=i.get(C);r.deleteTexture(A.__webglTexture);const q=C.source,ie=y.get(q);delete ie[A.__cacheKey],o.memory.textures--}function z(C){const A=C.texture,q=i.get(C),ie=i.get(A);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(q.__webglFramebuffer[se]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let se=0;se<q.__webglColorRenderbuffer.length;se++)q.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[se]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let se=0,ce=A.length;se<ce;se++){const Ee=i.get(A[se]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(A[se])}i.remove(A),i.remove(C)}let j=0;function B(){j=0}function V(){const C=j;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),j+=1,C}function W(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function ee(C,A){const q=i.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(q,C,A);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+A)}function oe(C,A){const q=i.get(C);if(C.version>0&&q.__version!==C.version){Fe(q,C,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+A)}function K(C,A){const q=i.get(C);if(C.version>0&&q.__version!==C.version){Fe(q,C,A);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+A)}function H(C,A){const q=i.get(C);if(C.version>0&&q.__version!==C.version){Re(q,C,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+A)}const X={[Pu]:r.REPEAT,[nn]:r.CLAMP_TO_EDGE,[Lu]:r.MIRRORED_REPEAT},ne={[Ut]:r.NEAREST,[qf]:r.NEAREST_MIPMAP_NEAREST,[Th]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[nv]:r.LINEAR_MIPMAP_NEAREST,[Ua]:r.LINEAR_MIPMAP_LINEAR};function ae(C,A,q){if(q?(r.texParameteri(C,r.TEXTURE_WRAP_S,X[A.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[A.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[A.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ne[A.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ne[A.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==nn||A.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,T(A.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Ut&&A.minFilter!==Hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ut||A.minFilter!==Th&&A.minFilter!==Ua||A.type===hr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Na&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(r.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function k(C,A){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",D));const ie=A.source;let se=y.get(ie);se===void 0&&(se={},y.set(ie,se));const ce=W(A);if(ce!==C.__cacheKey){se[ce]===void 0&&(se[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[ce].usedTimes++;const Ee=se[C.__cacheKey];Ee!==void 0&&(se[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&U(A)),C.__cacheKey=ce,C.__webglTexture=se[ce].texture}return q}function Fe(C,A,q){let ie=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=r.TEXTURE_3D);const se=k(C,A),ce=A.source;t.bindTexture(ie,C.__webglTexture,r.TEXTURE0+q);const Ee=i.get(ce);if(ce.version!==Ee.__version||se===!0){t.activeTexture(r.TEXTURE0+q),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const fe=v(A)&&b(A.image)===!1;let J=_(A.image,fe,!1,h);J=vi(A,J);const ge=b(J)||a,Me=s.convert(A.format,A.colorSpace);let Se=s.convert(A.type),de=R(A.internalFormat,Me,Se,A.colorSpace);ae(ie,A,ge);let ye;const Ye=A.mipmaps,ot=a&&A.isVideoTexture!==!0,At=Ee.__version===void 0||se===!0,N=w(A,J,ge);if(A.isDepthTexture)de=r.DEPTH_COMPONENT,a?A.type===hr?de=r.DEPTH_COMPONENT32F:A.type===cr?de=r.DEPTH_COMPONENT24:A.type===fr?de=r.DEPTH24_STENCIL8:de=r.DEPTH_COMPONENT16:A.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===pr&&de===r.DEPTH_COMPONENT&&A.type!==i0&&A.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=cr,Se=s.convert(A.type)),A.format===vr&&de===r.DEPTH_COMPONENT&&(de=r.DEPTH_STENCIL,A.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=fr,Se=s.convert(A.type))),At&&(ot?t.texStorage2D(r.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,de,J.width,J.height,0,Me,Se,null));else if(A.isDataTexture)if(Ye.length>0&&ge){ot&&At&&t.texStorage2D(r.TEXTURE_2D,N,de,Ye[0].width,Ye[0].height);for(let $=0,te=Ye.length;$<te;$++)ye=Ye[$],ot?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ye.width,ye.height,Me,Se,ye.data):t.texImage2D(r.TEXTURE_2D,$,de,ye.width,ye.height,0,Me,Se,ye.data);A.generateMipmaps=!1}else ot?(At&&t.texStorage2D(r.TEXTURE_2D,N,de,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,Me,Se,J.data)):t.texImage2D(r.TEXTURE_2D,0,de,J.width,J.height,0,Me,Se,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ot&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,N,de,Ye[0].width,Ye[0].height,J.depth);for(let $=0,te=Ye.length;$<te;$++)ye=Ye[$],A.format!==bi?Me!==null?ot?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,J.depth,Me,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,de,ye.width,ye.height,J.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,J.depth,Me,Se,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,de,ye.width,ye.height,J.depth,0,Me,Se,ye.data)}else{ot&&At&&t.texStorage2D(r.TEXTURE_2D,N,de,Ye[0].width,Ye[0].height);for(let $=0,te=Ye.length;$<te;$++)ye=Ye[$],A.format!==bi?Me!==null?ot?t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,$,de,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ye.width,ye.height,Me,Se,ye.data):t.texImage2D(r.TEXTURE_2D,$,de,ye.width,ye.height,0,Me,Se,ye.data)}else if(A.isDataArrayTexture)ot?(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,N,de,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Me,Se,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,Me,Se,J.data);else if(A.isData3DTexture)ot?(At&&t.texStorage3D(r.TEXTURE_3D,N,de,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Me,Se,J.data)):t.texImage3D(r.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,Me,Se,J.data);else if(A.isFramebufferTexture){if(At)if(ot)t.texStorage2D(r.TEXTURE_2D,N,de,J.width,J.height);else{let $=J.width,te=J.height;for(let he=0;he<N;he++)t.texImage2D(r.TEXTURE_2D,he,de,$,te,0,Me,Se,null),$>>=1,te>>=1}}else if(Ye.length>0&&ge){ot&&At&&t.texStorage2D(r.TEXTURE_2D,N,de,Ye[0].width,Ye[0].height);for(let $=0,te=Ye.length;$<te;$++)ye=Ye[$],ot?t.texSubImage2D(r.TEXTURE_2D,$,0,0,Me,Se,ye):t.texImage2D(r.TEXTURE_2D,$,de,Me,Se,ye);A.generateMipmaps=!1}else ot?(At&&t.texStorage2D(r.TEXTURE_2D,N,de,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Se,J)):t.texImage2D(r.TEXTURE_2D,0,de,Me,Se,J);M(A,ge)&&S(ie),Ee.__version=ce.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Re(C,A,q){if(A.image.length!==6)return;const ie=k(C,A),se=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+q);const ce=i.get(se);if(se.version!==ce.__version||ie===!0){t.activeTexture(r.TEXTURE0+q),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,fe=A.image[0]&&A.image[0].isDataTexture,J=[];for(let $=0;$<6;$++)!Ee&&!fe?J[$]=_(A.image[$],!1,!0,c):J[$]=fe?A.image[$].image:A.image[$],J[$]=vi(A,J[$]);const ge=J[0],Me=b(ge)||a,Se=s.convert(A.format,A.colorSpace),de=s.convert(A.type),ye=R(A.internalFormat,Se,de,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,ot=ce.__version===void 0||ie===!0;let At=w(A,ge,Me);ae(r.TEXTURE_CUBE_MAP,A,Me);let N;if(Ee){Ye&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,At,ye,ge.width,ge.height);for(let $=0;$<6;$++){N=J[$].mipmaps;for(let te=0;te<N.length;te++){const he=N[te];A.format!==bi?Se!==null?Ye?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,0,0,he.width,he.height,Se,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,0,0,he.width,he.height,Se,de,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,ye,he.width,he.height,0,Se,de,he.data)}}}else{N=A.mipmaps,Ye&&ot&&(N.length>0&&At++,t.texStorage2D(r.TEXTURE_CUBE_MAP,At,ye,J[0].width,J[0].height));for(let $=0;$<6;$++)if(fe){Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,J[$].width,J[$].height,Se,de,J[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,J[$].width,J[$].height,0,Se,de,J[$].data);for(let te=0;te<N.length;te++){const pe=N[te].image[$].image;Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,0,0,pe.width,pe.height,Se,de,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,ye,pe.width,pe.height,0,Se,de,pe.data)}}else{Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,de,J[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,Se,de,J[$]);for(let te=0;te<N.length;te++){const he=N[te];Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,0,0,Se,de,he.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,ye,Se,de,he.image[$])}}}M(A,Me)&&S(r.TEXTURE_CUBE_MAP),ce.__version=se.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function le(C,A,q,ie,se){const ce=s.convert(q.format,q.colorSpace),Ee=s.convert(q.type),fe=R(q.internalFormat,ce,Ee,q.colorSpace);i.get(A).__hasExternalTextures||(se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,0,fe,A.width,A.height,A.depth,0,ce,Ee,null):t.texImage2D(se,0,fe,A.width,A.height,0,ce,Ee,null)),t.bindFramebuffer(r.FRAMEBUFFER,C),st(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,se,i.get(q).__webglTexture,0,Ft(A)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,se,i.get(q).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,A,q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ie=r.DEPTH_COMPONENT16;if(q||st(A)){const se=A.depthTexture;se&&se.isDepthTexture&&(se.type===hr?ie=r.DEPTH_COMPONENT32F:se.type===cr&&(ie=r.DEPTH_COMPONENT24));const ce=Ft(A);st(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ie,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ie,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Ft(A);q&&st(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,A.width,A.height):st(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let se=0;se<ie.length;se++){const ce=ie[se],Ee=s.convert(ce.format,ce.colorSpace),fe=s.convert(ce.type),J=R(ce.internalFormat,Ee,fe,ce.colorSpace),ge=Ft(A);q&&st(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,J,A.width,A.height):st(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,J,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,J,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nt(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);const ie=i.get(A.depthTexture).__webglTexture,se=Ft(A);if(A.depthTexture.format===pr)st(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(A.depthTexture.format===vr)st(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function xe(C){const A=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");nt(A.__webglFramebuffer,C)}else if(q){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ae(A.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Ae(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(C,A,q){const ie=i.get(C);A!==void 0&&le(ie.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),q!==void 0&&xe(C)}function zt(C){const A=C.texture,q=i.get(C),ie=i.get(A);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=A.version,o.memory.textures++);const se=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,Ee=b(C)||a;if(se){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)q.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),ce)if(n.drawBuffers){const fe=C.texture;for(let J=0,ge=fe.length;J<ge;J++){const Me=i.get(fe[J]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&st(C)===!1){const fe=ce?A:[A];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let J=0;J<fe.length;J++){const ge=fe[J];q.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[J]);const Me=s.convert(ge.format,ge.colorSpace),Se=s.convert(ge.type),de=R(ge.internalFormat,Me,Se,ge.colorSpace,C.isXRRenderTarget===!0),ye=Ft(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,de,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,q.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),ae(r.TEXTURE_CUBE_MAP,A,Ee);for(let fe=0;fe<6;fe++)le(q.__webglFramebuffer[fe],C,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe);M(A,Ee)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const fe=C.texture;for(let J=0,ge=fe.length;J<ge;J++){const Me=fe[J],Se=i.get(Me);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ae(r.TEXTURE_2D,Me,Ee),le(q.__webglFramebuffer,C,Me,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D),M(Me,Ee)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),ae(fe,A,Ee),le(q.__webglFramebuffer,C,A,r.COLOR_ATTACHMENT0,fe),M(A,Ee)&&S(fe),t.unbindTexture()}C.depthBuffer&&xe(C)}function jt(C){const A=b(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,se=q.length;ie<se;ie++){const ce=q[ie];if(M(ce,A)){const Ee=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,fe=i.get(ce).__webglTexture;t.bindTexture(Ee,fe),S(Ee),t.unbindTexture()}}}function kt(C){if(a&&C.samples>0&&st(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ie=C.height;let se=r.COLOR_BUFFER_BIT;const ce=[],Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=i.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let ge=0;ge<A.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<A.length;ge++){ce.push(r.COLOR_ATTACHMENT0+ge),C.depthBuffer&&ce.push(Ee);const Me=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Me===!1&&(C.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),J&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]),Me===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ee]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ee])),J){const Se=i.get(A[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,q,ie,0,0,q,ie,se,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let ge=0;ge<A.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Me=i.get(A[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ft(C){return Math.min(u,C.samples)}function st(C){const A=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function bt(C){const A=o.render.frame;m.get(C)!==A&&(m.set(C,A),C.update())}function vi(C,A){const q=C.colorSpace,ie=C.format,se=C.type;return C.isCompressedTexture===!0||C.format===Iu||q!==Tn&&q!==gr&&(q===De?a===!1?e.has("EXT_sRGB")===!0&&ie===bi?(C.format=Iu,C.minFilter=Hi,C.generateMipmaps=!1):A=g0.sRGBToLinear(A):(ie!==bi||se!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=We,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=st}function CA(r,e,t){const i=t.isWebGL2;function n(s,o=gr){let a;if(s===xr)return r.UNSIGNED_BYTE;if(s===av)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lv)return r.UNSIGNED_SHORT_5_5_5_1;if(s===sv)return r.BYTE;if(s===rv)return r.SHORT;if(s===i0)return r.UNSIGNED_SHORT;if(s===ov)return r.INT;if(s===cr)return r.UNSIGNED_INT;if(s===hr)return r.FLOAT;if(s===Na)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cv)return r.ALPHA;if(s===bi)return r.RGBA;if(s===hv)return r.LUMINANCE;if(s===uv)return r.LUMINANCE_ALPHA;if(s===pr)return r.DEPTH_COMPONENT;if(s===vr)return r.DEPTH_STENCIL;if(s===Iu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dv)return r.RED;if(s===fv)return r.RED_INTEGER;if(s===pv)return r.RG;if(s===mv)return r.RG_INTEGER;if(s===gv)return r.RGBA_INTEGER;if(s===Ah||s===Eh||s===Rh||s===Ch)if(o===De)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ah)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ah)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ch)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$f||s===Yf||s===Kf||s===Zf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$f)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jf||s===Qf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jf)return o===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qf)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===tp||s===ip||s===np||s===sp||s===rp||s===op||s===ap||s===lp||s===cp||s===hp||s===up||s===dp||s===fp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ep)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===np)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===op)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ap)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===up)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ph)return o===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===_v||s===pp||s===mp||s===gp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ph)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class PA extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _a extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LA={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const y=t.getJointPose(g,i),p=this._getHandJoint(c,g);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LA)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class R0 extends Ti{constructor(e,t,i,n,s,o,a,l,c,h){if(h=h!==void 0?h:pr,h!==pr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=cr),i===void 0&&h===vr&&(i=fr),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class IA extends Ns{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const g=t.getContextAttributes();let y=null,p=null;const x=[],_=[],b=new Set,v=new Map,M=new di;M.layers.enable(1),M.viewport=new yt;const S=new di;S.layers.enable(2),S.viewport=new yt;const R=[M,S],w=new PA;w.layers.enable(1),w.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=x[H];return X===void 0&&(X=new nu,x[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=x[H];return X===void 0&&(X=new nu,x[H]=X),X.getGripSpace()},this.getHand=function(H){let X=x[H];return X===void 0&&(X=new nu,x[H]=X),X.getHandSpace()};function F(H){const X=_.indexOf(H.inputSource);if(X===-1)return;const ne=x[X];ne!==void 0&&(ne.update(H.inputSource,H.frame,c||o),ne.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",P),n.removeEventListener("inputsourceschange",U);for(let H=0;H<x.length;H++){const X=_[H];X!==null&&(_[H]=null,x[H].disconnect(X))}T=null,D=null,e.setRenderTarget(y),f=null,d=null,u=null,n=null,p=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",P),n.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,X),n.updateRenderState({baseLayer:f}),p=new os(f.framebufferWidth,f.framebufferHeight,{format:bi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,ne=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?vr:pr,ne=g.stencil?fr:cr);const k={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(k),n.updateRenderState({layers:[d]}),p=new os(d.textureWidth,d.textureHeight,{format:bi,type:xr,depthTexture:new R0(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Fe=e.properties.get(p);Fe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),K.setContext(n),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(H){for(let X=0;X<H.removed.length;X++){const ne=H.removed[X],ae=_.indexOf(ne);ae>=0&&(_[ae]=null,x[ae].disconnect(ne))}for(let X=0;X<H.added.length;X++){const ne=H.added[X];let ae=_.indexOf(ne);if(ae===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=_.length){_.push(ne),ae=Fe;break}else if(_[Fe]===null){_[Fe]=ne,ae=Fe;break}if(ae===-1)break}const k=x[ae];k&&k.connect(ne)}}const z=new L,j=new L;function B(H,X,ne){z.setFromMatrixPosition(X.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const ae=z.distanceTo(j),k=X.projectionMatrix.elements,Fe=ne.projectionMatrix.elements,Re=k[14]/(k[10]-1),le=k[14]/(k[10]+1),Ae=(k[9]+1)/k[5],nt=(k[9]-1)/k[5],xe=(k[8]-1)/k[0],We=(Fe[8]+1)/Fe[0],zt=Re*xe,jt=Re*We,kt=ae/(-xe+We),Ft=kt*-xe;X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ft),H.translateZ(kt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const st=Re+kt,bt=le+kt,vi=zt-Ft,C=jt+(ae-Ft),A=Ae*le/bt*st,q=nt*le/bt*st;H.projectionMatrix.makePerspective(vi,C,A,q,st,bt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;w.near=S.near=M.near=H.near,w.far=S.far=M.far=H.far,(T!==w.near||D!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,D=w.far);const X=H.parent,ne=w.cameras;V(w,X);for(let ae=0;ae<ne.length;ae++)V(ne[ae],X);ne.length===2?B(w,M,S):w.projectionMatrix.copy(M.projectionMatrix),W(H,w,X)};function W(H,X,ne){ne===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(ne.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const ae=H.children;for(let k=0,Fe=ae.length;k<Fe;k++)ae[k].updateMatrixWorld(!0);H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=_c*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.getPlanes=function(){return b};let ee=null;function oe(H,X){if(h=X.getViewerPose(c||o),m=X,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ae=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let k=0;k<ne.length;k++){const Fe=ne[k];let Re=null;if(f!==null)Re=f.getViewport(Fe);else{const Ae=u.getViewSubImage(d,Fe);Re=Ae.viewport,k===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let le=R[k];le===void 0&&(le=new di,le.layers.enable(k),le.viewport=new yt,R[k]=le),le.matrix.fromArray(Fe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Fe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Re.x,Re.y,Re.width,Re.height),k===0&&(w.matrix.copy(le.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(le)}}for(let ne=0;ne<x.length;ne++){const ae=_[ne],k=x[ne];ae!==null&&k!==void 0&&k.update(ae,X,c||o)}if(ee&&ee(H,X),X.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let ne=null;for(const ae of b)X.detectedPlanes.has(ae)||(ne===null&&(ne=[]),ne.push(ae));if(ne!==null)for(const ae of ne)b.delete(ae),v.delete(ae),i.dispatchEvent({type:"planeremoved",data:ae});for(const ae of X.detectedPlanes)if(!b.has(ae))b.add(ae),v.set(ae,X.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ae});else{const k=v.get(ae);ae.lastChangedTime>k&&(v.set(ae,ae.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ae}))}}m=null}const K=new v0;K.setAnimationLoop(oe),this.setAnimationLoop=function(H){ee=H},this.dispose=function(){}}}function DA(r,e){function t(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function i(y,p){p.color.getRGB(y.fogColor.value,M0(r)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function n(y,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(y,p):p.isMeshToonMaterial?(s(y,p),u(y,p)):p.isMeshPhongMaterial?(s(y,p),h(y,p)):p.isMeshStandardMaterial?(s(y,p),d(y,p),p.isMeshPhysicalMaterial&&f(y,p,b)):p.isMeshMatcapMaterial?(s(y,p),m(y,p)):p.isMeshDepthMaterial?s(y,p):p.isMeshDistanceMaterial?(s(y,p),g(y,p)):p.isMeshNormalMaterial?s(y,p):p.isLineBasicMaterial?(o(y,p),p.isLineDashedMaterial&&a(y,p)):p.isPointsMaterial?l(y,p,x,_):p.isSpriteMaterial?c(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,t(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,t(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,t(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===Si&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,t(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===Si&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,t(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,t(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(y.envMap.value=x,y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap){y.lightMap.value=p.lightMap;const _=r.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,y.lightMapTransform)}p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,y.aoMapTransform))}function o(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,t(p.map,y.mapTransform))}function a(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function l(y,p,x,_){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*x,y.scale.value=_*.5,p.map&&(y.map.value=p.map,t(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function c(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,t(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function h(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function u(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function d(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,y.roughnessMapTransform)),e.get(p).envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function f(y,p,x){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Si&&y.clearcoatNormalScale.value.negate())),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=x.texture,y.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,y.specularIntensityMapTransform))}function m(y,p){p.matcap&&(y.matcap.value=p.matcap)}function g(y,p){const x=e.get(p).light;y.referencePosition.value.setFromMatrixPosition(x.matrixWorld),y.nearDistance.value=x.shadow.camera.near,y.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function FA(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const b=_.program;i.uniformBlockBinding(x,b)}function c(x,_){let b=n[x.id];b===void 0&&(m(x),b=h(x),n[x.id]=b,x.addEventListener("dispose",y));const v=_.program;i.updateUBOMapping(x,v);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function h(x){const _=u();x.__bindingPointIndex=_;const b=r.createBuffer(),v=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=n[x.id],b=x.uniforms,v=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let M=0,S=b.length;M<S;M++){const R=b[M];if(f(R,M,v)===!0){const w=R.__offset,T=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let F=0;F<T.length;F++){const P=T[F],U=g(P);typeof P=="number"?(R.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,w+D,R.__data)):P.isMatrix3?(R.__data[0]=P.elements[0],R.__data[1]=P.elements[1],R.__data[2]=P.elements[2],R.__data[3]=P.elements[0],R.__data[4]=P.elements[3],R.__data[5]=P.elements[4],R.__data[6]=P.elements[5],R.__data[7]=P.elements[0],R.__data[8]=P.elements[6],R.__data[9]=P.elements[7],R.__data[10]=P.elements[8],R.__data[11]=P.elements[0]):(P.toArray(R.__data,D),D+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,w,R.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,b){const v=x.value;if(b[_]===void 0){if(typeof v=="number")b[_]=v;else{const M=Array.isArray(v)?v:[v],S=[];for(let R=0;R<M.length;R++)S.push(M[R].clone());b[_]=S}return!0}else if(typeof v=="number"){if(b[_]!==v)return b[_]=v,!0}else{const M=Array.isArray(b[_])?b[_]:[b[_]],S=Array.isArray(v)?v:[v];for(let R=0;R<M.length;R++){const w=M[R];if(w.equals(S[R])===!1)return w.copy(S[R]),!0}}return!1}function m(x){const _=x.uniforms;let b=0;const v=16;let M=0;for(let S=0,R=_.length;S<R;S++){const w=_[S],T={boundary:0,storage:0},D=Array.isArray(w.value)?w.value:[w.value];for(let F=0,P=D.length;F<P;F++){const U=D[F],z=g(U);T.boundary+=z.boundary,T.storage+=z.storage}if(w.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,S>0){M=b%v;const F=v-M;M!==0&&F-T.boundary<0&&(b+=v-M,w.__offset=b)}b+=T.storage}return M=b%v,M>0&&(b+=v-M),x.__size=b,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function y(x){const _=x.target;_.removeEventListener("dispose",y);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function p(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:l,update:c,dispose:p}}function UA(){const r=Ba("canvas");return r.style.display="block",r}class Ad{constructor(e={}){const{canvas:t=UA(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=null,m=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=ns,this.toneMappingExposure=1;const p=this;let x=!1,_=0,b=0,v=null,M=-1,S=null;const R=new yt,w=new yt;let T=null,D=t.width,F=t.height,P=1,U=null,z=null;const j=new yt(0,0,D,F),B=new yt(0,0,D,F);let V=!1;const W=new Sd;let ee=!1,oe=!1,K=null;const H=new ct,X=new L,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return v===null?P:1}let k=i;function Fe(E,G){for(let Y=0;Y<E.length;Y++){const O=E[Y],Q=t.getContext(O,G);if(Q!==null)return Q}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lx}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",ot,!1),k===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),k=Fe(G,E),k===null)throw Fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,le,Ae,nt,xe,We,zt,jt,kt,Ft,st,bt,vi,C,A,q,ie,se,ce,Ee,fe,J,ge,Me;function Se(){Re=new jS(k),le=new zS(k,Re,e),Re.init(le),J=new CA(k,Re,le),Ae=new EA(k,Re,le),nt=new YS(k),xe=new fA,We=new RA(k,Re,Ae,xe,le,J,nt),zt=new HS(p),jt=new XS(p),kt=new t1(k,le),ge=new NS(k,Re,kt,le),Ft=new qS(k,kt,nt,ge),st=new QS(k,Ft,kt,nt),ce=new JS(k,le,We),q=new kS(xe),bt=new dA(p,zt,jt,Re,le,ge,q),vi=new DA(p,xe),C=new mA,A=new MA(Re,le),se=new US(p,zt,jt,Ae,st,d,l),ie=new AA(p,st,le),Me=new FA(k,nt,le,Ae),Ee=new BS(k,Re,nt,le),fe=new $S(k,Re,nt,le),nt.programs=bt.programs,p.capabilities=le,p.extensions=Re,p.properties=xe,p.renderLists=C,p.shadowMap=ie,p.state=Ae,p.info=nt}Se();const de=new IA(p,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(E){E!==void 0&&(P=E,this.setSize(D,F,!1))},this.getSize=function(E){return E.set(D,F)},this.setSize=function(E,G,Y=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,F=G,t.width=Math.floor(E*P),t.height=Math.floor(G*P),Y===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(D*P,F*P).floor()},this.setDrawingBufferSize=function(E,G,Y){D=E,F=G,P=Y,t.width=Math.floor(E*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,G,Y,O){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,G,Y,O),Ae.viewport(R.copy(j).multiplyScalar(P).floor())},this.getScissor=function(E){return E.copy(B)},this.setScissor=function(E,G,Y,O){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,G,Y,O),Ae.scissor(w.copy(B).multiplyScalar(P).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){Ae.setScissorTest(V=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(E=!0,G=!0,Y=!0){let O=0;E&&(O|=k.COLOR_BUFFER_BIT),G&&(O|=k.DEPTH_BUFFER_BIT),Y&&(O|=k.STENCIL_BUFFER_BIT),k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),C.dispose(),A.dispose(),xe.dispose(),zt.dispose(),jt.dispose(),st.dispose(),ge.dispose(),Me.dispose(),bt.dispose(),de.dispose(),de.removeEventListener("sessionstart",pe),de.removeEventListener("sessionend",ht),K&&(K.dispose(),K=null),ut.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ye(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=nt.autoReset,G=ie.enabled,Y=ie.autoUpdate,O=ie.needsUpdate,Q=ie.type;Se(),nt.autoReset=E,ie.enabled=G,ie.autoUpdate=Y,ie.needsUpdate=O,ie.type=Q}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){const G=E.target;G.removeEventListener("dispose",At),N(G)}function N(E){$(E),xe.remove(E)}function $(E){const G=xe.get(E).programs;G!==void 0&&(G.forEach(function(Y){bt.releaseProgram(Y)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Y,O,Q,be){G===null&&(G=ne);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=by(E,G,Y,O,Q);Ae.setMaterial(O,Te);let ke=Y.index,He=1;O.wireframe===!0&&(ke=Ft.getWireframeAttribute(Y),He=2);const Ge=Y.drawRange,Xe=Y.attributes.position;let at=Ge.start*He,li=(Ge.start+Ge.count)*He;be!==null&&(at=Math.max(at,be.start*He),li=Math.min(li,(be.start+be.count)*He)),ke!==null?(at=Math.max(at,0),li=Math.min(li,ke.count)):Xe!=null&&(at=Math.max(at,0),li=Math.min(li,Xe.count));const ji=li-at;if(ji<0||ji===1/0)return;ge.setup(Q,O,Ce,Y,ke);let ks,Pt=Ee;if(ke!==null&&(ks=kt.get(ke),Pt=fe,Pt.setIndex(ks)),Q.isMesh)O.wireframe===!0?(Ae.setLineWidth(O.wireframeLinewidth*ae()),Pt.setMode(k.LINES)):Pt.setMode(k.TRIANGLES);else if(Q.isLine){let Ke=O.linewidth;Ke===void 0&&(Ke=1),Ae.setLineWidth(Ke*ae()),Q.isLineSegments?Pt.setMode(k.LINES):Q.isLineLoop?Pt.setMode(k.LINE_LOOP):Pt.setMode(k.LINE_STRIP)}else Q.isPoints?Pt.setMode(k.POINTS):Q.isSprite&&Pt.setMode(k.TRIANGLES);if(Q.isInstancedMesh)Pt.renderInstances(at,ji,Q.count);else if(Y.isInstancedBufferGeometry){const Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xc=Math.min(Y.instanceCount,Ke);Pt.renderInstances(at,ji,Xc)}else Pt.render(at,ji)},this.compile=function(E,G){function Y(O,Q,be){O.transparent===!0&&O.side===gn&&O.forceSinglePass===!1?(O.side=Si,O.needsUpdate=!0,ja(O,Q,be),O.side=an,O.needsUpdate=!0,ja(O,Q,be),O.side=gn):ja(O,Q,be)}m=A.get(E),m.init(),y.push(m),E.traverseVisible(function(O){O.isLight&&O.layers.test(G.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(p.useLegacyLights),E.traverse(function(O){const Q=O.material;if(Q)if(Array.isArray(Q))for(let be=0;be<Q.length;be++){const Te=Q[be];Y(Te,E,O)}else Y(Q,E,O)}),y.pop(),m=null};let te=null;function he(E){te&&te(E)}function pe(){ut.stop()}function ht(){ut.start()}const ut=new v0;ut.setAnimationLoop(he),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(E){te=E,de.setAnimationLoop(E),E===null?ut.stop():ut.start()},de.addEventListener("sessionstart",pe),de.addEventListener("sessionend",ht),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,G,v),m=A.get(E,y.length),m.init(),y.push(m),H.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(H),oe=this.localClippingEnabled,ee=q.init(this.clippingPlanes,oe),f=C.get(E,g.length),f.init(),g.push(f),Qt(E,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(U,z),ee===!0&&q.beginShadows();const Y=m.state.shadowsArray;if(ie.render(Y,E,G),ee===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(f,E),m.setupLights(p.useLegacyLights),G.isArrayCamera){const O=G.cameras;for(let Q=0,be=O.length;Q<be;Q++){const Te=O[Q];cs(f,E,Te,Te.viewport)}}else cs(f,E,G);v!==null&&(We.updateMultisampleRenderTarget(v),We.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(p,E,G),ge.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function Qt(E,G,Y,O){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){O&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const Te=st.update(E),Ce=E.material;Ce.visible&&f.push(E,Te,Ce,Y,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==nt.render.frame&&(E.skeleton.update(),E.skeleton.frame=nt.render.frame);const Te=st.update(E),Ce=E.material;if(O&&(Te.boundingSphere===null&&Te.computeBoundingSphere(),X.copy(Te.boundingSphere.center).applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(Ce)){const ke=Te.groups;for(let He=0,Ge=ke.length;He<Ge;He++){const Xe=ke[He],at=Ce[Xe.materialIndex];at&&at.visible&&f.push(E,Te,at,Y,X.z,Xe)}}else Ce.visible&&f.push(E,Te,Ce,Y,X.z,null)}}const be=E.children;for(let Te=0,Ce=be.length;Te<Ce;Te++)Qt(be[Te],G,Y,O)}function cs(E,G,Y,O){const Q=E.opaque,be=E.transmissive,Te=E.transparent;m.setupLightsView(Y),ee===!0&&q.setGlobalState(p.clippingPlanes,Y),be.length>0&&Et(Q,be,G,Y),O&&Ae.viewport(R.copy(O)),Q.length>0&&Bi(Q,G,Y),be.length>0&&Bi(be,G,Y),Te.length>0&&Bi(Te,G,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Et(E,G,Y,O){if(K===null){const Ce=le.isWebGL2;K=new os(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Na:xr,minFilter:Ua,samples:Ce&&a===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(K),p.clear();const be=p.toneMapping;p.toneMapping=ns,Bi(E,Y,O),We.updateMultisampleRenderTarget(K),We.updateRenderTargetMipmap(K);let Te=!1;for(let Ce=0,ke=G.length;Ce<ke;Ce++){const He=G[Ce],Ge=He.object,Xe=He.geometry,at=He.material,li=He.group;if(at.side===gn&&Ge.layers.test(O.layers)){const ji=at.side;at.side=Si,at.needsUpdate=!0,hn(Ge,Y,O,Xe,at,li),at.side=ji,at.needsUpdate=!0,Te=!0}}Te===!0&&(We.updateMultisampleRenderTarget(K),We.updateRenderTargetMipmap(K)),p.setRenderTarget(Q),p.toneMapping=be}function Bi(E,G,Y){const O=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,be=E.length;Q<be;Q++){const Te=E[Q],Ce=Te.object,ke=Te.geometry,He=O===null?Te.material:O,Ge=Te.group;Ce.layers.test(Y.layers)&&hn(Ce,G,Y,ke,He,Ge)}}function hn(E,G,Y,O,Q,be){E.onBeforeRender(p,G,Y,O,Q,be),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(p,G,Y,O,E,be),Q.transparent===!0&&Q.side===gn&&Q.forceSinglePass===!1?(Q.side=Si,Q.needsUpdate=!0,p.renderBufferDirect(Y,G,O,Q,E,be),Q.side=an,Q.needsUpdate=!0,p.renderBufferDirect(Y,G,O,Q,E,be),Q.side=gn):p.renderBufferDirect(Y,G,O,Q,E,be),E.onAfterRender(p,G,Y,O,Q,be)}function ja(E,G,Y){G.isScene!==!0&&(G=ne);const O=xe.get(E),Q=m.state.lights,be=m.state.shadowsArray,Te=Q.state.version,Ce=bt.getParameters(E,Q.state,be,G,Y),ke=bt.getProgramCacheKey(Ce);let He=O.programs;O.environment=E.isMeshStandardMaterial?G.environment:null,O.fog=G.fog,O.envMap=(E.isMeshStandardMaterial?jt:zt).get(E.envMap||O.environment),He===void 0&&(E.addEventListener("dispose",At),He=new Map,O.programs=He);let Ge=He.get(ke);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===Te)return qd(E,Ce),Ge}else Ce.uniforms=bt.getUniforms(E),E.onBuild(Y,Ce,p),E.onBeforeCompile(Ce,p),Ge=bt.acquireProgram(Ce,ke),He.set(ke,Ge),O.uniforms=Ce.uniforms;const Xe=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=q.uniform),qd(E,Ce),O.needsLights=Sy(E),O.lightsStateVersion=Te,O.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const at=Ge.getUniforms(),li=cc.seqWithValue(at.seq,Xe);return O.currentProgram=Ge,O.uniformsList=li,Ge}function qd(E,G){const Y=xe.get(E);Y.outputColorSpace=G.outputColorSpace,Y.instancing=G.instancing,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function by(E,G,Y,O,Q){G.isScene!==!0&&(G=ne),We.resetTextureUnits();const be=G.fog,Te=O.isMeshStandardMaterial?G.environment:null,Ce=v===null?p.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Tn,ke=(O.isMeshStandardMaterial?jt:zt).get(O.envMap||Te),He=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!O.normalMap&&!!Y.attributes.tangent,Xe=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,li=!!Y.morphAttributes.color,ji=O.toneMapped?p.toneMapping:ns,ks=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pt=ks!==void 0?ks.length:0,Ke=xe.get(O),Xc=m.state.lights;if(ee===!0&&(oe===!0||E!==S)){const Ai=E===S&&O.id===M;q.setState(O,E,Ai)}let Ot=!1;O.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xc.state.version||Ke.outputColorSpace!==Ce||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==ke||O.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==q.numPlanes||Ke.numIntersection!==q.numIntersection)||Ke.vertexAlphas!==He||Ke.vertexTangents!==Ge||Ke.morphTargets!==Xe||Ke.morphNormals!==at||Ke.morphColors!==li||Ke.toneMapping!==ji||le.isWebGL2===!0&&Ke.morphTargetsCount!==Pt)&&(Ot=!0):(Ot=!0,Ke.__version=O.version);let Os=Ke.currentProgram;Ot===!0&&(Os=ja(O,G,Q));let $d=!1,jo=!1,jc=!1;const ci=Os.getUniforms(),Vs=Ke.uniforms;if(Ae.useProgram(Os.program)&&($d=!0,jo=!0,jc=!0),O.id!==M&&(M=O.id,jo=!0),$d||S!==E){if(ci.setValue(k,"projectionMatrix",E.projectionMatrix),le.logarithmicDepthBuffer&&ci.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,jo=!0,jc=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Ai=ci.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,X.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ci.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Q.isSkinnedMesh)&&ci.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(Q.isSkinnedMesh){ci.setOptional(k,Q,"bindMatrix"),ci.setOptional(k,Q,"bindMatrixInverse");const Ai=Q.skeleton;Ai&&(le.floatVertexTextures?(Ai.boneTexture===null&&Ai.computeBoneTexture(),ci.setValue(k,"boneTexture",Ai.boneTexture,We),ci.setValue(k,"boneTextureSize",Ai.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qc=Y.morphAttributes;if((qc.position!==void 0||qc.normal!==void 0||qc.color!==void 0&&le.isWebGL2===!0)&&ce.update(Q,Y,Os),(jo||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,ci.setValue(k,"receiveShadow",Q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Vs.envMap.value=ke,Vs.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),jo&&(ci.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&wy(Vs,jc),be&&O.fog===!0&&vi.refreshFogUniforms(Vs,be),vi.refreshMaterialUniforms(Vs,O,P,F,K),cc.upload(k,Ke.uniformsList,Vs,We)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(cc.upload(k,Ke.uniformsList,Vs,We),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ci.setValue(k,"center",Q.center),ci.setValue(k,"modelViewMatrix",Q.modelViewMatrix),ci.setValue(k,"normalMatrix",Q.normalMatrix),ci.setValue(k,"modelMatrix",Q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ai=O.uniformsGroups;for(let $c=0,Ty=Ai.length;$c<Ty;$c++)if(le.isWebGL2){const Yd=Ai[$c];Me.update(Yd,Os),Me.bind(Yd,Os)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Os}function wy(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Sy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,G,Y){xe.get(E.texture).__webglTexture=G,xe.get(E.depthTexture).__webglTexture=Y;const O=xe.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const Y=xe.get(E);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Y=0){v=E,_=G,b=Y;let O=!0,Q=null,be=!1,Te=!1;if(E){const ke=xe.get(E);ke.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(k.FRAMEBUFFER,null),O=!1):ke.__webglFramebuffer===void 0?We.setupRenderTarget(E):ke.__hasExternalTextures&&We.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ge=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Ge[G],be=!0):le.isWebGL2&&E.samples>0&&We.useMultisampledRTT(E)===!1?Q=xe.get(E).__webglMultisampledFramebuffer:Q=Ge,R.copy(E.viewport),w.copy(E.scissor),T=E.scissorTest}else R.copy(j).multiplyScalar(P).floor(),w.copy(B).multiplyScalar(P).floor(),T=V;if(Ae.bindFramebuffer(k.FRAMEBUFFER,Q)&&le.drawBuffers&&O&&Ae.drawBuffers(E,Q),Ae.viewport(R),Ae.scissor(w),Ae.setScissorTest(T),be){const ke=xe.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,Y)}else if(Te){const ke=xe.get(E.texture),He=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,Y||0,He)}M=-1},this.readRenderTargetPixels=function(E,G,Y,O,Q,be,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){Ae.bindFramebuffer(k.FRAMEBUFFER,Ce);try{const ke=E.texture,He=ke.format,Ge=ke.type;if(He!==bi&&J.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ge===Na&&(Re.has("EXT_color_buffer_half_float")||le.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==xr&&J.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===hr&&(le.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-O&&Y>=0&&Y<=E.height-Q&&k.readPixels(G,Y,O,Q,J.convert(He),J.convert(Ge),be)}finally{const ke=v!==null?xe.get(v).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(E,G,Y=0){const O=Math.pow(2,-Y),Q=Math.floor(G.image.width*O),be=Math.floor(G.image.height*O);We.setTexture2D(G,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,E.x,E.y,Q,be),Ae.unbindTexture()},this.copyTextureToTexture=function(E,G,Y,O=0){const Q=G.image.width,be=G.image.height,Te=J.convert(Y.format),Ce=J.convert(Y.type);We.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,E.x,E.y,Q,be,Te,Ce,G.image.data):G.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Te,G.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,O,E.x,E.y,Te,Ce,G.image),O===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Y,O,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,ke=J.convert(O.format),He=J.convert(O.type);let Ge;if(O.isData3DTexture)We.setTexture3D(O,0),Ge=k.TEXTURE_3D;else if(O.isDataArrayTexture)We.setTexture2DArray(O,0),Ge=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);const Xe=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),li=k.getParameter(k.UNPACK_SKIP_PIXELS),ji=k.getParameter(k.UNPACK_SKIP_ROWS),ks=k.getParameter(k.UNPACK_SKIP_IMAGES),Pt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Pt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,E.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,E.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,E.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(Ge,Q,G.x,G.y,G.z,be,Te,Ce,ke,He,Pt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ge,Q,G.x,G.y,G.z,be,Te,Ce,ke,Pt.data)):k.texSubImage3D(Ge,Q,G.x,G.y,G.z,be,Te,Ce,ke,He,Pt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Xe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,li),k.pixelStorei(k.UNPACK_SKIP_ROWS,ji),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ks),Q===0&&O.generateMipmaps&&k.generateMipmap(Ge),Ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,Ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?mr:n0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?De:Tn}}class C0 extends wd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class NA extends h0{constructor(){super(new b0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BA extends wd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new NA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let P0=class extends _t{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};const $s=new L,um=new wi,zA=new L,Ys=new L;class xa extends P0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose($s,um,zA),Ys.set(0,0,1).applyQuaternion(um);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime($s.x,i),t.positionY.linearRampToValueAtTime($s.y,i),t.positionZ.linearRampToValueAtTime($s.z,i),t.orientationX.linearRampToValueAtTime(Ys.x,i),t.orientationY.linearRampToValueAtTime(Ys.y,i),t.orientationZ.linearRampToValueAtTime(Ys.z,i)}else t.setPosition($s.x,$s.y,$s.z),t.setOrientation(Ys.x,Ys.y,Ys.z)}}class zc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dm(){return(typeof performance>"u"?Date:performance).now()}const Ks=new L,fm=new wi,kA=new L,Zs=new L;class L0 extends _t{constructor(){super(),this.type="AudioListener",this.context=_0.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new zc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ks,fm,kA),Zs.set(0,0,-1).applyQuaternion(fm),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ks.x,n),t.positionY.linearRampToValueAtTime(Ks.y,n),t.positionZ.linearRampToValueAtTime(Ks.z,n),t.forwardX.linearRampToValueAtTime(Zs.x,n),t.forwardY.linearRampToValueAtTime(Zs.y,n),t.forwardZ.linearRampToValueAtTime(Zs.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(Ks.x,Ks.y,Ks.z),t.setOrientation(Zs.x,Zs.y,Zs.z,i.x,i.y,i.z)}}class Ed extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class I0 extends Bs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}var Tt=(r=>(r[r.BLACK=0]="BLACK",r[r.PORTAL=2236962]="PORTAL",r[r.BLUE=2980095]="BLUE",r[r.FOG=4737096]="FOG",r[r.RAIN=4934475]="RAIN",r[r.RED=9045767]="RED",r[r.MOON=11065767]="MOON",r[r.FIRE=16496449]="FIRE",r[r.WHITE=16777215]="WHITE",r))(Tt||{}),vn;(r=>{class e extends I0{constructor(i={}){super(i),this.setValues(i)}async updateDefaultFragmentShader(i){const n=await Je.Loader.loadShader("ground/pars.frag"),s=await Je.Loader.loadShader("ground/main.frag");i.fragmentShader=`${n}
      ${i.fragmentShader.replace("#include <output_fragment>",`
        ${s}`)}`}async updateDefaultVertexShader(i){const n=await Je.Loader.loadShader("ground/pars.vert"),s=await Je.Loader.loadShader("ground/main.vert");i.vertexShader=`${n}
      ${i.vertexShader.replace("void main() {",`void main() {
          ${s}`)}`}onBeforeCompile(i){this.updateDefaultFragmentShader(i),this.updateDefaultVertexShader(i),this.needsUpdate=!0}}r.Ground=e,r.DynamicCollider=new go({color:Tt.RED,wireframe:!0,visible:!1,opacity:.33}),r.StaticCollider=new go({color:Tt.RAIN,transparent:!0,depthWrite:!1,visible:!1,opacity:.5}),r.Transparent=new go({color:Tt.BLACK,transparent:!0,depthWrite:!1,visible:!1,opacity:0}),r.HitBox=new go({transparent:!0,depthWrite:!1,color:Tt.RED,visible:!1,opacity:.75})})(vn||(vn={}));class OA{lockChange=this.onLockChange.bind(this);lockError=this.onLockError.bind(this);constructor(){document.addEventListener("pointerlockchange",this.lockChange,!1),document.addEventListener("pointerlockerror",this.lockError,!1)}onLockChange(e){e.stopPropagation(),e.preventDefault(),!this.locked&&Z.dispatch("Game::Pause")}onLockError(e){e.stopPropagation(),e.preventDefault(),console.error(e)}requestPointerLock(){document.documentElement.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}dispose(){document.removeEventListener("pointerlockchange",this.lockChange,!1),document.removeEventListener("pointerlockerror",this.lockError,!1)}get locked(){return!!document.pointerLockElement}}const ha=new I;function Oi(r,e,t,i,n,s){const o=2*Math.PI*n/4,a=Math.max(s-2*n,0),l=Math.PI/4;ha.copy(e),ha[i]=0,ha.normalize();const c=.5*o/(o+a),h=1-ha.angleTo(r)/l;return Math.sign(ha[t])===1?h*c:a/(o+a)+c+c*(1-h)}class D0 extends H_{constructor(e=1,t=1,i=1,n=2,s=.1){if(n=n*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,n,n,n),n===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new I,l=new I,c=new I(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new I,g=.5/n;for(let y=0,p=0;y<h.length;y+=3,p+=2)switch(a.fromArray(h,y),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[y+0]=c.x*Math.sign(a.x)+l.x*s,h[y+1]=c.y*Math.sign(a.y)+l.y*s,h[y+2]=c.z*Math.sign(a.z)+l.z*s,u[y+0]=l.x,u[y+1]=l.y,u[y+2]=l.z,Math.floor(y/f)){case 0:m.set(1,0,0),d[p+0]=Oi(m,l,"z","y",s,i),d[p+1]=1-Oi(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[p+0]=1-Oi(m,l,"z","y",s,i),d[p+1]=1-Oi(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[p+0]=1-Oi(m,l,"x","z",s,e),d[p+1]=Oi(m,l,"z","x",s,i);break;case 3:m.set(0,-1,0),d[p+0]=1-Oi(m,l,"x","z",s,e),d[p+1]=1-Oi(m,l,"z","x",s,i);break;case 4:m.set(0,0,1),d[p+0]=1-Oi(m,l,"x","y",s,e),d[p+1]=1-Oi(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[p+0]=Oi(m,l,"x","y",s,e),d[p+1]=1-Oi(m,l,"y","x",s,t);break}}}function VA(r){const e=new Map,t=new Map,i=r.clone();return F0(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,o=e.get(n),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function F0(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)F0(r.children[i],e.children[i],t)}class Rd extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HA{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:po,endingEnd:po};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,o=s/n,a=n/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Mv:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case xd:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const o=i===vv;if(e===0)return s===-1?n:o&&(s&1)===1?t-n:n;if(i===Di){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));i:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break i}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=mo,n.endingEnd=mo):(e?n.endingStart=this.zeroSlopeAtStart?mo:po:n.endingStart=Mc,t?n.endingEnd=this.zeroSlopeAtEnd?mo:po:n.endingEnd=Mc)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}class kc{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class U0 extends kc{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}const Cd="\\[\\]\\.:\\/",GA=new RegExp("["+Cd+"]","g"),Pd="[^"+Cd+"]",WA="[^"+Cd.replace("\\.","")+"]",XA=/((?:WC+[\/:])*)/.source.replace("WC",Pd),jA=/(WCOD+)?/.source.replace("WCOD",WA),qA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),$A=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),YA=new RegExp("^"+XA+jA+qA+$A+"$"),KA=["material","materials","bones","map"];class ZA{constructor(e,t,i){const n=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GA,"")}static parseTrackName(e){const t=YA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);KA.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=ZA;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class JA{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,o;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,o=n;s!==o;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){wi.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const o=this._workIndex*s;wi.multiplyQuaternionsFlat(e,o,e,t,e,i),wi.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,s){const o=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}}function bs(r,e,t){return N0(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Vl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function N0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function QA(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function pm(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function B0(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}class eE extends kc{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case mo:s=e,a=2*t-i;break;case Mc:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mo:o=e,l=2*i-t;break;case Mc:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,y=g*m,p=-d*y+2*d*g-d*m,x=(1+d)*y+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*y+(1.5+f)*g+.5*m,b=f*y-f*g;for(let v=0;v!==a;++v)s[v]=p*o[h+v]+x*o[c+v]+_*o[l+v]+b*o[u+v];return s}}class tE extends kc{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vl(t,this.TimeBufferType),this.values=Vl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vl(e.times,Array),values:Vl(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new U0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xc:t=this.InterpolantFactoryMethodDiscrete;break;case vc:t=this.InterpolantFactoryMethodLinear;break;case Lh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xc;case this.InterpolantFactoryMethodLinear:return vc;case this.InterpolantFactoryMethodSmooth:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=bs(i,s,o),this.values=bs(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&N0(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=bs(this.times),t=bs(this.values),i=this.getValueSize(),n=this.getInterpolation()===Lh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=bs(e,0,o),this.values=bs(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=bs(this.times,0),t=bs(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=vc;class Go extends Ln{}Go.prototype.ValueTypeName="bool";Go.prototype.ValueBufferType=Array;Go.prototype.DefaultInterpolation=xc;Go.prototype.InterpolantFactoryMethodLinear=void 0;Go.prototype.InterpolantFactoryMethodSmooth=void 0;class z0 extends Ln{}z0.prototype.ValueTypeName="color";class bc extends Ln{}bc.prototype.ValueTypeName="number";class iE extends kc{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)wi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Wa extends Ln{InterpolantFactoryMethodLinear(e){return new iE(this.times,this.values,this.getValueSize(),e)}}Wa.prototype.ValueTypeName="quaternion";Wa.prototype.DefaultInterpolation=vc;Wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Wo extends Ln{}Wo.prototype.ValueTypeName="string";Wo.prototype.ValueBufferType=Array;Wo.prototype.DefaultInterpolation=xc;Wo.prototype.InterpolantFactoryMethodLinear=void 0;Wo.prototype.InterpolantFactoryMethodSmooth=void 0;class wc extends Ln{}wc.prototype.ValueTypeName="vector";class mm{constructor(e,t=-1,i,n=xd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=wr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(sE(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ln.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=QA(l);l=pm(l,1,h),c=pm(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new bc(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,g){if(f.length!==0){const y=[],p=[];B0(f,y,p,m),y.length!==0&&g.push(new u(d,y,p))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const y=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];y.push(_.time),p.push(_.morphTarget===g?1:0)}n.push(new bc(".morphTargetInfluence["+g+"]",y,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(wc,f+".position",d,"pos",n),i(Wa,f+".quaternion",d,"rot",n),i(wc,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bc;case"vector":case"vector2":case"vector3":case"vector4":return wc;case"color":return z0;case"quaternion":return Wa;case"bool":case"boolean":return Go;case"string":return Wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function sE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nE(r.type);if(r.times===void 0){const t=[],i=[];B0(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const rE=new Float32Array(1);class oE extends Ns{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;m=new JA(rt.create(i,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new U0(new Float32Array(2),new Float32Array(2),1,rE),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let o=typeof e=="string"?mm.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=xd),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new HA(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?mm.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const gm=new L,Hl=new L;class k0{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gm.subVectors(e,this.start),Hl.subVectors(this.end,this.start);const i=Hl.dot(Hl);let s=Hl.dot(gm)/i;return t&&(s=si(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const O0=0,aE=1,lE=2,ym=2,su=1.25,_m=1,hc=6*4+4+4,zu=65535,cE=Math.pow(2,-24);class Gl{constructor(){}}function yn(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function xm(r){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=r[i+3]-r[i];n>t&&(t=n,e=i)}return e}function vm(r,e){e.set(r)}function Mm(r,e,t){let i,n;for(let s=0;s<3;s++){const o=s+3;i=r[s],n=e[s],t[s]=i<n?i:n,i=r[o],n=e[o],t[o]=i>n?i:n}}function Wl(r,e,t){for(let i=0;i<3;i++){const n=e[r+2*i],s=e[r+2*i+1],o=n-s,a=n+s;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function ua(r){const e=r[3]-r[0],t=r[4]-r[1],i=r[5]-r[2];return 2*(e*t+t*i+i*e)}function hE(r,e){if(!r.index){const t=r.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let n;t>65535?n=new Uint32Array(new i(4*t)):n=new Uint16Array(new i(2*t)),r.setIndex(new pi(n,1));for(let s=0;s<t;s++)n[s]=s}}function uE(r){if(!r.groups||!r.groups.length)return[{offset:0,count:r.index.count/3}];const e=[],t=new Set;for(const n of r.groups)t.add(n.start),t.add(n.start+n.count);const i=Array.from(t.values()).sort((n,s)=>n-s);for(let n=0;n<i.length-1;n++){const s=i[n],o=i[n+1];e.push({offset:s/3,count:(o-s)/3})}return e}function ru(r,e,t,i,n=null){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,m=-1/0,g=-1/0,y=-1/0;const p=n!==null;for(let x=e*6,_=(e+t)*6;x<_;x+=6){const b=r[x+0],v=r[x+1],M=b-v,S=b+v;M<s&&(s=M),S>l&&(l=S),p&&b<u&&(u=b),p&&b>m&&(m=b);const R=r[x+2],w=r[x+3],T=R-w,D=R+w;T<o&&(o=T),D>c&&(c=D),p&&R<d&&(d=R),p&&R>g&&(g=R);const F=r[x+4],P=r[x+5],U=F-P,z=F+P;U<a&&(a=U),z>h&&(h=z),p&&F<f&&(f=F),p&&F>y&&(y=F)}i[0]=s,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,p&&(n[0]=u,n[1]=d,n[2]=f,n[3]=m,n[4]=g,n[5]=y)}function dE(r,e,t,i){let n=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let h=e*6,u=(e+t)*6;h<u;h+=6){const d=r[h+0];d<n&&(n=d),d>a&&(a=d);const f=r[h+2];f<s&&(s=f),f>l&&(l=f);const m=r[h+4];m<o&&(o=m),m>c&&(c=m)}i[0]=n,i[1]=s,i[2]=o,i[3]=a,i[4]=l,i[5]=c}function fE(r,e,t,i,n){let s=t,o=t+i-1;const a=n.pos,l=n.axis*2;for(;;){for(;s<=o&&e[s*6+l]<a;)s++;for(;s<=o&&e[o*6+l]>=a;)o--;if(s<o){for(let c=0;c<3;c++){let h=r[s*3+c];r[s*3+c]=r[o*3+c],r[o*3+c]=h;let u=e[s*6+c*2+0];e[s*6+c*2+0]=e[o*6+c*2+0],e[o*6+c*2+0]=u;let d=e[s*6+c*2+1];e[s*6+c*2+1]=e[o*6+c*2+1],e[o*6+c*2+1]=d}s++,o--}else return s}}const Yn=32,pE=(r,e)=>r.candidate-e.candidate,ws=new Array(Yn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Xl=new Float32Array(6);function mE(r,e,t,i,n,s){let o=-1,a=0;if(s===O0)o=xm(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===aE)o=xm(r),o!==-1&&(a=gE(t,i,n,o));else if(s===lE){const l=ua(r);let c=su*n;const h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){const f=e[d],y=(e[d+3]-f)/Yn;if(n<Yn/4){const p=[...ws];p.length=n;let x=0;for(let b=h;b<u;b+=6,x++){const v=p[x];v.candidate=t[b+2*d],v.count=0;const{bounds:M,leftCacheBounds:S,rightCacheBounds:R}=v;for(let w=0;w<3;w++)R[w]=1/0,R[w+3]=-1/0,S[w]=1/0,S[w+3]=-1/0,M[w]=1/0,M[w+3]=-1/0;Wl(b,t,M)}p.sort(pE);let _=n;for(let b=0;b<_;b++){const v=p[b];for(;b+1<_&&p[b+1].candidate===v.candidate;)p.splice(b+1,1),_--}for(let b=h;b<u;b+=6){const v=t[b+2*d];for(let M=0;M<_;M++){const S=p[M];v>=S.candidate?Wl(b,t,S.rightCacheBounds):(Wl(b,t,S.leftCacheBounds),S.count++)}}for(let b=0;b<_;b++){const v=p[b],M=v.count,S=n-v.count,R=v.leftCacheBounds,w=v.rightCacheBounds;let T=0;M!==0&&(T=ua(R)/l);let D=0;S!==0&&(D=ua(w)/l);const F=_m+su*(T*M+D*S);F<c&&(o=d,c=F,a=v.candidate)}}else{for(let _=0;_<Yn;_++){const b=ws[_];b.count=0,b.candidate=f+y+_*y;const v=b.bounds;for(let M=0;M<3;M++)v[M]=1/0,v[M+3]=-1/0}for(let _=h;_<u;_+=6){let M=~~((t[_+2*d]-f)/y);M>=Yn&&(M=Yn-1);const S=ws[M];S.count++,Wl(_,t,S.bounds)}const p=ws[Yn-1];vm(p.bounds,p.rightCacheBounds);for(let _=Yn-2;_>=0;_--){const b=ws[_],v=ws[_+1];Mm(b.bounds,v.rightCacheBounds,b.rightCacheBounds)}let x=0;for(let _=0;_<Yn-1;_++){const b=ws[_],v=b.count,M=b.bounds,R=ws[_+1].rightCacheBounds;v!==0&&(x===0?vm(M,Xl):Mm(M,Xl,Xl)),x+=v;let w=0,T=0;x!==0&&(w=ua(Xl)/l);const D=n-x;D!==0&&(T=ua(R)/l);const F=_m+su*(w*x+T*D);F<c&&(o=d,c=F,a=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function gE(r,e,t,i){let n=0;for(let s=e,o=e+t;s<o;s++)n+=r[s*6+i*2];return n/t}function yE(r,e){const t=r.attributes.position,i=r.index.array,n=i.length/3,s=new Float32Array(n*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const h=["getX","getY","getZ"];for(let u=0;u<n;u++){const d=u*3,f=u*6;let m,g,y;o?(m=i[d+0],g=i[d+1],y=i[d+2]):(m=i[d+0]*c+l,g=i[d+1]*c+l,y=i[d+2]*c+l);for(let p=0;p<3;p++){let x,_,b;o?(x=t[h[p]](m),_=t[h[p]](g),b=t[h[p]](y)):(x=a[m+p],_=a[g+p],b=a[y+p]);let v=x;_<v&&(v=_),b<v&&(v=b);let M=x;_>M&&(M=_),b>M&&(M=b);const S=(M-v)/2,R=p*2;s[f+R+0]=v+S,s[f+R+1]=S+(Math.abs(v)+S)*cE,v<e[p]&&(e[p]=v),M>e[p+3]&&(e[p+3]=M)}}return s}function _E(r,e){function t(p){d&&d(p/f)}function i(p,x,_,b=null,v=0){if(!m&&v>=l&&(m=!0,c&&(console.warn(`MeshBVH: Max depth of ${l} reached when generating BVH. Consider increasing maxDepth.`),console.warn(r))),_<=h||v>=l)return t(x+_),p.offset=x,p.count=_,p;const M=mE(p.boundingData,b,o,x,_,u);if(M.axis===-1)return t(x+_),p.offset=x,p.count=_,p;const S=fE(a,o,x,_,M);if(S===x||S===x+_)t(x+_),p.offset=x,p.count=_;else{p.splitAxis=M.axis;const R=new Gl,w=x,T=S-x;p.left=R,R.boundingData=new Float32Array(6),ru(o,w,T,R.boundingData,s),i(R,w,T,s,v+1);const D=new Gl,F=S,P=_-T;p.right=D,D.boundingData=new Float32Array(6),ru(o,F,P,D.boundingData,s),i(D,F,P,s,v+1)}return p}hE(r,e);const n=new Float32Array(6),s=new Float32Array(6),o=yE(r,n),a=r.index.array,l=e.maxDepth,c=e.verbose,h=e.maxLeafTris,u=e.strategy,d=e.onProgress,f=r.index.count/3;let m=!1;const g=[],y=uE(r);if(y.length===1){const p=y[0],x=new Gl;x.boundingData=n,dE(o,p.offset,p.count,s),i(x,p.offset,p.count,s),g.push(x)}else for(let p of y){const x=new Gl;x.boundingData=new Float32Array(6),ru(o,p.offset,p.count,x.boundingData,s),i(x,p.offset,p.count,s),g.push(x)}return g}function xE(r,e){const t=_E(r,e);let i,n,s;const o=[],a=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<t.length;h++){const u=t[h];let d=l(u);const f=new a(hc*d);i=new Float32Array(f),n=new Uint32Array(f),s=new Uint16Array(f),c(0,u),o.push(f)}return o;function l(h){return h.count?1:1+l(h.left)+l(h.right)}function c(h,u){const d=h/4,f=h/2,m=!!u.count,g=u.boundingData;for(let y=0;y<6;y++)i[d+y]=g[y];if(m){const y=u.offset,p=u.count;return n[d+6]=y,s[f+14]=p,s[f+15]=zu,h+hc}else{const y=u.left,p=u.right,x=u.splitAxis;let _;if(_=c(h+hc,y),_/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return n[d+6]=_/4,_=c(_,p),n[d+7]=x,_}}}class as{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}as.prototype.setFromBox=function(){const r=new I;return function(t,i){const n=i.min,s=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=n.x*l+s.x*(1-l),r.y=n.y*c+s.y*(1-c),r.z=n.z*h+s.z*(1-h);const u=t.dot(r);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}}();const vE=function(){const r=new I,e=new I,t=new I;return function(n,s,o){const a=n.start,l=r,c=s.start,h=e;t.subVectors(a,c),r.subVectors(n.end,n.start),e.subVectors(s.end,s.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),m=t.dot(l),y=l.dot(l)*f-d*d;let p,x;y!==0?p=(u*d-m*f)/y:p=0,x=(u+p*d)/f,o.x=p,o.y=x}}(),Ld=function(){const r=new lt,e=new I,t=new I;return function(n,s,o,a){vE(n,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),n.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?n.at(0,o):n.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=s.start:u=s.end;const d=e,f=t;if(n.closestPointToPoint(u,!0,e),s.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(f);return}}}}(),ME=function(){const r=new I,e=new I,t=new Ss,i=new is;return function(s,o){const{radius:a,center:l}=s,{a:c,b:h,c:u}=o;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const p=g.projectPoint(l,e);if(o.containsPoint(p))return!0}return!1}}(),bE=1e-15;function ro(r){return Math.abs(r)<bE}class ls extends xn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new as),this.points=[this.a,this.b,this.c],this.sphere=new Cn,this.plane=new Ss,this.needsUpdate=!0}intersectsSphere(e){return ME(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);const c=s[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,n);const u=s[2],d=o[2];u.subVectors(t,i),d.setFromPoints(u,n);const f=s[3],m=o[3];f.subVectors(i,e),m.setFromPoints(f,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}ls.prototype.closestPointToSegment=function(){const r=new I,e=new I,t=new is;return function(n,s=null,o=null){const{start:a,end:l}=n,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),Ld(t,n,r,e),h=r.distanceToSquared(e),h<u&&(u=h,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(u)}}();ls.prototype.intersectsTriangle=function(){const r=new ls,e=new Array(3),t=new Array(3),i=new as,n=new as,s=new I,o=new I,a=new I,l=new I,c=new is,h=new is,u=new is;return function(f,m=null,g=!1){this.needsUpdate&&this.update(),f.isExtendedTriangle?f.needsUpdate&&f.update():(r.copy(f),r.update(),f=r);const y=this.plane,p=f.plane;if(Math.abs(y.normal.dot(p.normal))>1-1e-10){const x=this.satBounds,_=this.satAxes;t[0]=f.a,t[1]=f.b,t[2]=f.c;for(let M=0;M<4;M++){const S=x[M],R=_[M];if(i.setFromPoints(R,t),S.isSeparated(i))return!1}const b=f.satBounds,v=f.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){const S=b[M],R=v[M];if(i.setFromPoints(R,e),S.isSeparated(i))return!1}for(let M=0;M<4;M++){const S=_[M];for(let R=0;R<4;R++){const w=v[R];if(s.crossVectors(S,w),i.setFromPoints(s,e),n.setFromPoints(s,t),i.isSeparated(n))return!1}}return m&&(g||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const x=this.points;let _=!1,b=0;for(let U=0;U<3;U++){const z=x[U],j=x[(U+1)%3];c.start.copy(z),c.end.copy(j),c.delta(o);const B=_?h.start:h.end,V=ro(p.distanceToPoint(z));if(ro(p.normal.dot(o))&&V){h.copy(c),b=2;break}if((p.intersectLine(c,B)||V)&&!ro(B.distanceTo(j))){if(b++,_)break;_=!0}}if(b===1&&f.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(b!==2)return!1;const v=f.points;let M=!1,S=0;for(let U=0;U<3;U++){const z=v[U],j=v[(U+1)%3];c.start.copy(z),c.end.copy(j),c.delta(a);const B=M?u.start:u.end,V=ro(y.distanceToPoint(z));if(ro(y.normal.dot(a))&&V){u.copy(c),S=2;break}if((y.intersectLine(c,B)||V)&&!ro(B.distanceTo(j))){if(S++,M)break;M=!0}}if(S===1&&this.containsPoint(u.end))return m&&(m.start.copy(u.end),m.end.copy(u.end)),!0;if(S!==2)return!1;if(h.delta(o),u.delta(a),o.dot(a)<0){let U=u.start;u.start=u.end,u.end=U}const R=h.start.dot(o),w=h.end.dot(o),T=u.start.dot(o),D=u.end.dot(o),F=w<T,P=R<D;return R!==D&&T!==w&&F===P?!1:(m&&(l.subVectors(h.start,u.start),l.dot(o)>0?m.start.copy(h.start):m.start.copy(u.start),l.subVectors(h.end,u.end),l.dot(o)<0?m.end.copy(h.end):m.end.copy(u.end)),!0)}}}();ls.prototype.distanceToPoint=function(){const r=new I;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();ls.prototype.distanceToTriangle=function(){const r=new I,e=new I,t=["a","b","c"],i=new is,n=new is;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],m=o[f];this.closestPointToPoint(m,r),d=m.distanceToSquared(r),d<h&&(h=d,a&&a.copy(r),l&&l.copy(m));const g=this[f];o.closestPointToPoint(g,r),d=g.distanceToSquared(r),d<h&&(h=d,a&&a.copy(g),l&&l.copy(r))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];i.set(this[d],this[f]);for(let m=0;m<3;m++){const g=t[m],y=t[(m+1)%3];n.set(o[g],o[y]),Ld(i,n,r,e);const p=r.distanceToSquared(e);p<h&&(h=p,a&&a.copy(r),l&&l.copy(e))}}return Math.sqrt(h)}}();class An{constructor(e,t,i){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Le,this.invMatrix=new Le,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new as),this.alignedSatBounds=new Array(3).fill().map(()=>new as),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}An.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=n[d];f.x=c?i.x:t.x,f.y=h?i.y:t.y,f.z=u?i.z:t.z,f.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=n[0];for(let c=0;c<3;c++){const h=o[c],u=s[c],d=1<<c,f=n[d];h.subVectors(a,f),u.setFromPoints(h,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();An.prototype.intersectsBox=function(){const r=new as;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=i.x,r.max=n.x,a[0].isSeparated(r)||(r.min=i.y,r.max=n.y,a[1].isSeparated(r))||(r.min=i.z,r.max=n.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],h=s[l];if(r.setFromBox(c,t),h.isSeparated(r))return!1}return!0}}();An.prototype.intersectsTriangle=function(){const r=new ls,e=new Array(3),t=new as,i=new as,n=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],m=l[d];if(t.setFromPoints(m,e),f.isSeparated(t))return!1}const c=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],m=h[d];if(t.setFromPoints(m,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let m=0;m<4;m++){const g=h[m];if(n.crossVectors(f,g),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}();An.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();An.prototype.distanceToPoint=function(){const r=new I;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();An.prototype.distanceToBox=function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new is),t=new Array(12).fill().map(()=>new is),i=new I,n=new I;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(n),this.closestPointToPoint(n,i),o.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const h=a*a,u=o.min,d=o.max,f=this.points;let m=1/0;for(let y=0;y<8;y++){const p=f[y];n.copy(p).clamp(u,d);const x=p.distanceToSquared(n);if(x<m&&(m=x,l&&l.copy(p),c&&c.copy(n),x<h))return Math.sqrt(x)}let g=0;for(let y=0;y<3;y++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const _=(y+1)%3,b=(y+2)%3,v=p<<_|x<<b,M=1<<y|p<<_|x<<b,S=f[v],R=f[M];e[g].set(S,R);const T=r[y],D=r[_],F=r[b],P=t[g],U=P.start,z=P.end;U[T]=u[T],U[D]=p?u[D]:d[D],U[F]=x?u[F]:d[D],z[T]=d[T],z[D]=p?u[D]:d[D],z[F]=x?u[F]:d[D],g++}for(let y=0;y<=1;y++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){n.x=y?d.x:u.x,n.y=p?d.y:u.y,n.z=x?d.z:u.z,this.closestPointToPoint(n,i);const _=n.distanceToSquared(i);if(_<m&&(m=_,l&&l.copy(i),c&&c.copy(n),_<h))return Math.sqrt(_)}for(let y=0;y<12;y++){const p=e[y];for(let x=0;x<12;x++){const _=t[x];Ld(p,_,i,n);const b=i.distanceToSquared(n);if(b<m&&(m=b,l&&l.copy(i),c&&c.copy(n),b<h))return Math.sqrt(b)}}return Math.sqrt(m)}}();const oo=new I,ao=new I,lo=new I,jl=new lt,ql=new lt,$l=new lt,bm=new I,wm=new I,Sm=new I,Yl=new I;function wE(r,e,t,i,n,s){let o;return s===Sg?o=r.intersectTriangle(i,t,e,!0,n):o=r.intersectTriangle(e,t,i,s!==Tg,n),o===null?null:{distance:r.origin.distanceTo(n),point:n.clone()}}function SE(r,e,t,i,n,s,o,a,l){oo.fromBufferAttribute(e,s),ao.fromBufferAttribute(e,o),lo.fromBufferAttribute(e,a);const c=wE(r,oo,ao,lo,Yl,l);if(c){i&&(jl.fromBufferAttribute(i,s),ql.fromBufferAttribute(i,o),$l.fromBufferAttribute(i,a),c.uv=xn.getInterpolation(Yl,oo,ao,lo,jl,ql,$l,new lt)),n&&(jl.fromBufferAttribute(n,s),ql.fromBufferAttribute(n,o),$l.fromBufferAttribute(n,a),c.uv1=xn.getInterpolation(Yl,oo,ao,lo,jl,ql,$l,new lt)),t&&(bm.fromBufferAttribute(t,s),wm.fromBufferAttribute(t,o),Sm.fromBufferAttribute(t,a),c.normal=xn.getInterpolation(Yl,oo,ao,lo,bm,wm,Sm,new I),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const h={a:s,b:o,c:a,normal:new I,materialIndex:0};xn.getNormal(oo,ao,lo,h.normal),c.face=h,c.faceIndex=s}return c}function V0(r,e,t,i,n){const s=i*3,o=r.index.getX(s),a=r.index.getX(s+1),l=r.index.getX(s+2),{position:c,normal:h,uv:u,uv1:d}=r.attributes,f=SE(t,c,h,u,d,o,a,l,e);return f?(f.faceIndex=i,n&&n.push(f),f):null}function TE(r,e,t,i,n,s){for(let o=i,a=i+n;o<a;o++)V0(r,e,t,o,s)}function AE(r,e,t,i,n){let s=1/0,o=null;for(let a=i,l=i+n;a<l;a++){const c=V0(r,e,t,a);c&&c.distance<s&&(o=c,s=c.distance)}return o}function mn(r,e,t,i){const n=r.a,s=r.b,o=r.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(e),l=t.getX(e+1),c=t.getX(e+2)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function Tm(r,e,t,i,n,s,o){const a=t.index,l=t.attributes.position;for(let c=r,h=e+r;c<h;c++)if(mn(o,c*3,a,l),o.needsUpdate=!0,i(o,c,n,s))return!0;return!1}class H0{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function As(r,e){return e[r+15]===65535}function Ao(r,e){return e[r+6]}function za(r,e){return e[r+14]}function ka(r){return r+8}function Oa(r,e){return e[r+6]}function EE(r,e){return e[r+7]}const _o=new ai,Sc=new I,RE=["x","y","z"];function ku(r,e,t,i,n){let s=r*2,o=Xo,a=Ls,l=Is;if(As(s,a)){const h=Ao(r,l),u=za(s,a);TE(e,t,i,h,u,n)}else{const h=ka(r);Tc(h,o,i,Sc)&&ku(h,e,t,i,n);const u=Oa(r,l);Tc(u,o,i,Sc)&&ku(u,e,t,i,n)}}function Ou(r,e,t,i){let n=r*2,s=Xo,o=Ls,a=Is;if(As(n,o)){const c=Ao(r,a),h=za(n,o);return AE(e,t,i,c,h)}else{const c=EE(r,a),h=RE[c],d=i.direction[h]>=0;let f,m;d?(f=ka(r),m=Oa(r,a)):(f=Oa(r,a),m=ka(r));const y=Tc(f,s,i,Sc)?Ou(f,e,t,i):null;if(y){const _=y.point[h];if(d?_<=s[m+c]:_>=s[m+c+3])return y}const x=Tc(m,s,i,Sc)?Ou(m,e,t,i):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const CE=function(){let r,e;const t=[],i=new H0(()=>new ai);return function(...o){r=i.getPrimitive(),e=i.getPrimitive(),t.push(r,e);const a=n(...o);i.releasePrimitive(r),i.releasePrimitive(e),t.pop(),t.pop();const l=t.length;return l>0&&(e=t[l-1],r=t[l-2]),a};function n(s,o,a,l,c=null,h=0,u=0){function d(_){let b=_*2,v=Ls,M=Is;for(;!As(b,v);)_=ka(_),b=_*2;return Ao(_,M)}function f(_){let b=_*2,v=Ls,M=Is;for(;!As(b,v);)_=Oa(_,M),b=_*2;return Ao(_,M)+za(b,v)}let m=s*2,g=Xo,y=Ls,p=Is;if(As(m,y)){const _=Ao(s,p),b=za(m,y);return yn(s,g,r),l(_,b,!1,u,h+s,r)}else{const _=ka(s),b=Oa(s,p);let v=_,M=b,S,R,w,T;if(c&&(w=r,T=e,yn(v,g,w),yn(M,g,T),S=c(w),R=c(T),R<S)){v=b,M=_;const B=S;S=R,R=B,w=T}w||(w=r,yn(v,g,w));const D=As(v*2,y),F=a(w,D,S,u+1,h+v);let P;if(F===ym){const B=d(v),W=f(v)-B;P=l(B,W,!0,u+1,h+v,w)}else P=F&&n(v,o,a,l,c,h,u+1);if(P)return!0;T=e,yn(M,g,T);const U=As(M*2,y),z=a(T,U,R,u+1,h+M);let j;if(z===ym){const B=d(M),W=f(M)-B;j=l(B,W,!0,u+1,h+M,T)}else j=z&&n(M,o,a,l,c,h,u+1);return!!j}}}(),PE=function(){const r=new ls,e=new ls,t=new Le,i=new An,n=new An;return function s(o,a,l,c,h=null){let u=o*2,d=Xo,f=Ls,m=Is;if(h===null&&(l.boundingBox||l.computeBoundingBox(),i.set(l.boundingBox.min,l.boundingBox.max,c),h=i),As(u,f)){const y=a,p=y.index,x=y.attributes.position,_=l.index,b=l.attributes.position,v=Ao(o,m),M=za(u,f);if(t.copy(c).invert(),l.boundsTree)return yn(o,d,n),n.matrix.copy(t),n.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:R=>n.intersectsBox(R),intersectsTriangle:R=>{R.a.applyMatrix4(c),R.b.applyMatrix4(c),R.c.applyMatrix4(c),R.needsUpdate=!0;for(let w=v*3,T=(M+v)*3;w<T;w+=3)if(mn(e,w,p,x),e.needsUpdate=!0,R.intersectsTriangle(e))return!0;return!1}});for(let S=v*3,R=M+v*3;S<R;S+=3){mn(r,S,p,x),r.a.applyMatrix4(t),r.b.applyMatrix4(t),r.c.applyMatrix4(t),r.needsUpdate=!0;for(let w=0,T=_.count;w<T;w+=3)if(mn(e,w,_,b),e.needsUpdate=!0,r.intersectsTriangle(e))return!0}}else{const y=o+8,p=m[o+6];return yn(y,d,_o),!!(h.intersectsBox(_o)&&s(y,a,l,c,h)||(yn(p,d,_o),h.intersectsBox(_o)&&s(p,a,l,c,h)))}}}();function Tc(r,e,t,i){return yn(r,e,_o),t.intersectBox(_o,i)}const Vu=[];let uc,Xo,Ls,Is;function va(r){uc&&Vu.push(uc),uc=r,Xo=new Float32Array(r),Ls=new Uint16Array(r),Is=new Uint32Array(r)}function Kl(){uc=null,Xo=null,Ls=null,Is=null,Vu.length&&va(Vu.pop())}const ou=Symbol("skip tree generation"),au=new ai,lu=new ai,co=new Le,Js=new An,da=new An,fa=new I,Zl=new I,LE=new I,IE=new I,DE=new I,Am=new ai,fn=new H0(()=>new ls);class Ea{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),Ea.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,s=i.getIndex();let o;return t.cloneBuffers?o={roots:n.map(a=>a.slice()),index:s.array.slice()}:o={roots:n,index:s.array},o}static deserialize(e,t,i={}){if(typeof i=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),Ea.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});i={setIndex:!0,...i};const{index:n,roots:s}=e,o=new Ea(t,{...i,[ou]:!0});if(o._roots=s,i.setIndex){const a=t.getIndex();if(a===null){const l=new pi(e.index,1,!1);t.setIndex(l)}else a.array!==n&&(a.array.set(n),a.needsUpdate=!0)}return o}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:O0,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[ou]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[ou]||(this._roots=xE(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ai))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,i=t.index.array,n=t.attributes.position;let s,o,a,l,c=0;const h=this._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,m=!1){const g=d*2;if(a[g+15]===zu){const p=o[d+6],x=a[g+14];let _=1/0,b=1/0,v=1/0,M=-1/0,S=-1/0,R=-1/0;for(let w=3*p,T=3*(p+x);w<T;w++){const D=i[w],F=n.getX(D),P=n.getY(D),U=n.getZ(D);F<_&&(_=F),F>M&&(M=F),P<b&&(b=P),P>S&&(S=P),U<v&&(v=U),U>R&&(R=U)}return l[d+0]!==_||l[d+1]!==b||l[d+2]!==v||l[d+3]!==M||l[d+4]!==S||l[d+5]!==R?(l[d+0]=_,l[d+1]=b,l[d+2]=v,l[d+3]=M,l[d+4]=S,l[d+5]=R,!0):!1}else{const p=d+8,x=o[d+6],_=p+f,b=x+f;let v=m,M=!1,S=!1;e?v||(M=e.has(_),S=e.has(b),v=!M&&!S):(M=!0,S=!0);const R=v||M,w=v||S;let T=!1;R&&(T=u(p,f,v));let D=!1;w&&(D=u(x,f,v));const F=T||D;if(F)for(let P=0;P<3;P++){const U=p+P,z=x+P,j=l[U],B=l[U+3],V=l[z],W=l[z+3];l[d+P]=j<V?j:V,l[d+P+3]=B>W?B:W}return F}}}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),s=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,h=s[c+15]===zu;if(h){const u=n[a+6],d=s[c+14];e(l,h,new Float32Array(i,a*4,6),u,d)}else{const u=a+hc/4,d=n[a+6],f=n[a+7];e(l,h,new Float32Array(i,a*4,6),f)||(o(u,l+1),o(d,l+1))}}}raycast(e,t=Ro){const i=this._roots,n=this.geometry,s=[],o=t.isMaterial,a=Array.isArray(t),l=n.groups,c=o?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=a?t[l[h].materialIndex].side:c,f=s.length;if(va(i[h]),ku(0,n,d,e,s),Kl(),a){const m=l[h].materialIndex;for(let g=f,y=s.length;g<y;g++)s[g].face.materialIndex=m}}return s}raycastFirst(e,t=Ro){const i=this._roots,n=this.geometry,s=t.isMaterial,o=Array.isArray(t);let a=null;const l=n.groups,c=s?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=o?t[l[h].materialIndex].side:c;va(i[h]);const f=Ou(0,n,d,e);Kl(),f!=null&&(a==null||f.distance<a.distance)&&(a=f,o&&(f.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){const i=this.geometry;let n=!1;for(const s of this._roots)if(va(s),n=PE(0,i,e,t),Kl(),n)break;return n}shapecast(e,t,i){const n=this.geometry;if(e instanceof Function){if(t){const d=t;t=(f,m,g,y)=>{const p=m*3;return d(f,p,p+1,p+2,g,y)}}e={boundsTraverseOrder:i,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const s=fn.getPrimitive();let{boundsTraverseOrder:o,intersectsBounds:a,intersectsRange:l,intersectsTriangle:c}=e;if(l&&c){const d=l;l=(f,m,g,y,p)=>d(f,m,g,y,p)?!0:Tm(f,m,n,c,g,y,s)}else l||(c?l=(d,f,m,g)=>Tm(d,f,n,c,m,g,s):l=(d,f,m)=>m);let h=!1,u=0;for(const d of this._roots){if(va(d),h=CE(0,n,a,l,o,u),Kl(),h)break;u+=d.byteLength}return fn.releasePrimitive(s),h}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:s}=i;const o=this.geometry.index,a=this.geometry.attributes.position,l=e.geometry.index,c=e.geometry.attributes.position;co.copy(t).invert();const h=fn.getPrimitive(),u=fn.getPrimitive();if(s){let f=function(m,g,y,p,x,_,b,v){for(let M=y,S=y+p;M<S;M++){mn(u,M*3,l,c),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let R=m,w=m+g;R<w;R++)if(mn(h,R*3,o,a),h.needsUpdate=!0,s(h,u,R,M,x,_,b,v))return!0}return!1};if(n){const m=n;n=function(g,y,p,x,_,b,v,M){return m(g,y,p,x,_,b,v,M)?!0:f(g,y,p,x,_,b,v,M)}}else n=f}e.getBoundingBox(lu),lu.applyMatrix4(t);const d=this.shapecast({intersectsBounds:f=>lu.intersectsBox(f),intersectsRange:(f,m,g,y,p,x)=>(au.copy(x),au.applyMatrix4(co),e.shapecast({intersectsBounds:_=>au.intersectsBox(_),intersectsRange:(_,b,v,M,S)=>n(f,m,_,b,y,p,M,S)}))});return fn.releasePrimitive(h),fn.releasePrimitive(u),d}intersectsBox(e,t){return Js.set(e.min,e.max,t),Js.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Js.intersectsBox(i),intersectsTriangle:i=>Js.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Js.set(e.boundingBox.min,e.boundingBox.max,t),Js.needsUpdate=!0;const a=this.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=fn.getPrimitive(),f=fn.getPrimitive();let m=Zl,g=LE,y=null,p=null;n&&(y=IE,p=DE);let x=1/0,_=null,b=null;return co.copy(t).invert(),da.matrix.copy(co),this.shapecast({boundsTraverseOrder:v=>Js.distanceToBox(v),intersectsBounds:(v,M,S)=>S<x&&S<o?(M&&(da.min.copy(v.min),da.max.copy(v.max),da.needsUpdate=!0),!0):!1,intersectsRange:(v,M)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:S=>da.distanceToBox(S),intersectsBounds:(S,R,w)=>w<x&&w<o,intersectsRange:(S,R)=>{for(let w=S*3,T=(S+R)*3;w<T;w+=3){mn(f,w,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let D=v*3,F=(v+M)*3;D<F;D+=3){mn(d,D,c,l),d.needsUpdate=!0;const P=d.distanceToTriangle(f,m,y);if(P<x&&(g.copy(m),p&&p.copy(y),x=P,_=D/3,b=w/3),P<s)return!0}}}});{const S=u?u.count:h.count;for(let R=0,w=S;R<w;R+=3){mn(f,R,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let T=v*3,D=(v+M)*3;T<D;T+=3){mn(d,T,c,l),d.needsUpdate=!0;const F=d.distanceToTriangle(f,m,y);if(F<x&&(g.copy(m),p&&p.copy(y),x=F,_=T/3,b=R/3),F<s)return!0}}}}}),fn.releasePrimitive(d),fn.releasePrimitive(f),x===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=x,i.faceIndex=_,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(co),g.applyMatrix4(co),n.distance=g.sub(n.point).length(),n.faceIndex=b),i)}closestPointToPoint(e,t={},i=0,n=1/0){const s=i*i,o=n*n;let a=1/0,l=null;if(this.shapecast({boundsTraverseOrder:h=>(fa.copy(e).clamp(h.min,h.max),fa.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,fa);const d=e.distanceToSquared(fa);return d<a&&(Zl.copy(fa),a=d,l=u),d<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(Zl):t.point=Zl.clone(),t.distance=c,t.faceIndex=l,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{yn(0,new Float32Array(i),Am),e.union(Am)}),e}}function FE(){this.boundsTree=null}const Qs=new I,er=new I,tr=new I,Em=new Fi,Jl=new I,cu=new I,Rm=new Fi,Cm=new Fi,Ql=new Le,Pm=new Le;function pa(r,e){if(!r&&!e)return;const t=r.count===e.count,i=r.normalized===e.normalized,n=r.array.constructor===e.array.constructor,s=r.itemSize===e.itemSize;if(!t||!i||!n||!s)throw new Error}function Ma(r,e=null){const t=r.array.constructor,i=r.normalized,n=r.itemSize,s=e===null?r.count:e;return new pi(new t(n*s),n,i)}function G0(r,e,t=0){if(r.isInterleavedBufferAttribute){const i=r.itemSize;for(let n=0,s=r.count;n<s;n++){const o=n+t;e.setX(o,r.getX(n)),i>=2&&e.setY(o,r.getY(n)),i>=3&&e.setZ(o,r.getZ(n)),i>=4&&e.setW(o,r.getW(n))}}else{const i=e.array,n=i.constructor,s=i.BYTES_PER_ELEMENT*r.itemSize*t;new n(i.buffer,s,r.array.length).set(r.array)}}function UE(r,e,t){const i=r.elements,n=e.elements;for(let s=0,o=n.length;s<o;s++)i[s]+=n[s]*t}function Lm(r,e,t){const i=r.skeleton,n=r.geometry,s=i.bones,o=i.boneInverses;Rm.fromBufferAttribute(n.attributes.skinIndex,e),Cm.fromBufferAttribute(n.attributes.skinWeight,e),Ql.elements.fill(0);for(let a=0;a<4;a++){const l=Cm.getComponent(a);if(l!==0){const c=Rm.getComponent(a);Pm.multiplyMatrices(s[c].matrixWorld,o[c]),UE(Ql,Pm,l)}}return Ql.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),t.transformDirection(Ql),t}function hu(r,e,t,i,n){Jl.set(0,0,0);for(let s=0,o=r.length;s<o;s++){const a=e[s],l=r[s];a!==0&&(cu.fromBufferAttribute(l,i),t?Jl.addScaledVector(cu,a):Jl.addScaledVector(cu.sub(n),a))}n.add(Jl)}function NE(r,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new wn){const i=r[0].index!==null,{useGroups:n=!1,updateIndex:s=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(r[0].attributes)),l={};let c=0;t.clearGroups();for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const f in u.attributes){if(!a.has(f))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.');l[f]===void 0&&(l[f]=[]),l[f].push(u.attributes[f]),d++}if(d!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let f;if(i)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,f,h),c+=f}}if(i){let h=!1;if(!t.index){let u=0;for(let d=0;d<r.length;++d)u+=r[d].index.count;t.setIndex(new pi(new Uint32Array(u),1,!1)),h=!0}if(s||h){const u=t.index;let d=0,f=0;for(let m=0;m<r.length;++m){const g=r[m],y=g.index;if(o[m]!==!0)for(let p=0;p<y.count;++p)u.setX(d,y.getX(p)+f),d++;f+=g.attributes.position.count}}}for(const h in l){const u=l[h];if(!(h in t.attributes)){let m=0;for(const g in u)m+=u[g].count;t.setAttribute(h,Ma(l[h][0],m))}const d=t.attributes[h];let f=0;for(let m=0,g=u.length;m<g;m++){const y=u[m];o[m]!==!0&&G0(y,d,f),f+=y.count}}return t}function BE(r,e){if(r===null||e===null)return r===e;if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}class zE{constructor(e){this.matrixWorld=new Le,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const s=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&BE(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class kE{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new wn),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new wn){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:s,_diffMap:o}=this;for(let a=0,l=i.length;a<l;a++){const c=i[a],h=s[a],u=o.get(c);!u||u.didChange(c)?(this._convertToStaticGeometry(c,h),t.push(!1),u?u.update():o.set(c,new zE(c))):t.push(!0)}NE(s,{useGroups:n,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new wn){const i=e.geometry,n=this.applyWorldTransforms,s=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=i.attributes,l=t.attributes;t.index||(t.index=i.index),l.position||t.setAttribute("position",Ma(a.position)),s&&!l.normal&&a.normal&&t.setAttribute("normal",Ma(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",Ma(a.tangent)),pa(i.index,t.index),pa(a.position,l.position),s&&pa(a.normal,l.normal),o&&pa(a.tangent,l.tangent);const c=a.position,h=s?a.normal:null,u=o?a.tangent:null,d=i.morphAttributes.position,f=i.morphAttributes.normal,m=i.morphAttributes.tangent,g=i.morphTargetsRelative,y=e.morphTargetInfluences,p=new Fs;p.getNormalMatrix(e.matrixWorld);for(let x=0,_=a.position.count;x<_;x++)Qs.fromBufferAttribute(c,x),h&&er.fromBufferAttribute(h,x),u&&(Em.fromBufferAttribute(u,x),tr.fromBufferAttribute(u,x)),y&&(d&&hu(d,y,g,x,Qs),f&&hu(f,y,g,x,er),m&&hu(m,y,g,x,tr)),e.isSkinnedMesh&&(e.applyBoneTransform(x,Qs),h&&Lm(e,x,er),u&&Lm(e,x,tr)),n&&Qs.applyMatrix4(e.matrixWorld),l.position.setXYZ(x,Qs.x,Qs.y,Qs.z),h&&(n&&er.applyNormalMatrix(p),l.normal.setXYZ(x,er.x,er.y,er.z)),u&&(n&&tr.transformDirection(e.matrixWorld),l.tangent.setXYZW(x,tr.x,tr.y,tr.z,Em.w));for(const x in this.attributes){const _=this.attributes[x];_==="position"||_==="tangent"||_==="normal"||!(_ in a)||(l[_]||t.setAttribute(_,Ma(a[_])),pa(a[_],l[_]),G0(a[_],l[_]))}return t}}class OE{positionVector=new L;rotationVector=new Sn;sizeVector=new L;GRAVITY=-9.81;MIN_SIZE=.01;DISABLE=5;ENABLE=1;SPEED=5;createBound(e,t,i,n=0){this.rotationVector.set(0,0,0);const s=e[0],o=e[1],a=s-t[0],l=o-t[1],c=a/-2+s,h=l/-2+o;let u=Math.abs(a),d=Math.abs(l);if(u&&d){const f=d>u,m=Math.hypot(u,d);this.rotationVector.set(0,f?et.d2+Math.atan(d/u):et.d2-Math.atan(u/d),0),f?d=m:u=m}u=u<d?this.MIN_SIZE:u,d=d<u?this.MIN_SIZE:d,this.positionVector.set(c,n,h),this.sizeVector.set(u,i,d)}borderOverflow(e){const{x:t,z:i}=this.positionVector;return Math.abs(t)>Math.abs(e.x)&&Math.abs(i)>Math.abs(e.z)&&t-e.x<=1&&i-e.z<=1}createStaticCollider(e){const{x:t,y:i,z:n}=this.sizeVector,s=new St(new ss(t,i,n),e);s.position.copy(this.positionVector),s.rotation.copy(this.rotationVector),Z.dispatch("Level::AddObject",s),this.addStaticCollider(s)}createGround(e,t){this.sizeVector.set(Math.abs(e[0]-t[0]),this.MIN_SIZE,Math.abs(e[1]-t[1])),this.positionVector.set((e[0]+t[0])/2,0,(e[1]+t[1])/2),this.createStaticCollider(vn.Transparent)}createBounds(e,t){const i=new L,n=e.borders.concat([e.borders[0]]),s=t?.borders.concat([t?.borders[0]]);for(let o=0;o<e.borders.length;o++){if(this.createBound(n[o],n[o+1],e.height,e.y),this.createStaticCollider(vn.StaticCollider),i.copy(this.positionVector),s&&this.createBound(s[o],s[o+1],t?.height,t?.y),this.borderOverflow(i))continue;const a=this.rotationVector.y?1.1:1,l=this.positionVector.distanceTo(i)/2*.95;this.positionVector.x-=(this.positionVector.x-i.x)/2,this.positionVector.z-=(this.positionVector.z-i.z)/2,this.sizeVector.z===this.MIN_SIZE?this.sizeVector.setZ(l):this.sizeVector.setX(l),this.positionVector.x<0?this.sizeVector.z*=a:this.sizeVector.x*=a,this.createStaticCollider(vn.StaticCollider)}}}class VE extends OE{characterVelocity=new Map;characters=new Map;linearVelocity=new L;environment=new _a;capsule=new L;matrix=new ct;segment=new k0;environmentCollider;box=new zs;paused=!0;delta=0;updateCollisions(){const e=Array.from(this.characters.values());for(let t=e.length;t--;){const i=e[t];for(let n=t;n--;){const s=e[n];this.linearVelocity.subVectors(i.position,s.position);const o=this.linearVelocity.length()-(i.userData.radius+s.userData.radius);if(o>0)continue;this.linearVelocity.normalize();const a=this.characterVelocity.get(i.uuid),l=this.characterVelocity.get(s.uuid),c=a.dot(this.linearVelocity),h=l.dot(this.linearVelocity),u=Math.max(c,.2),d=Math.max(h,.2),f=u+d,m=u/f,g=d/f,{y}=i.position,{y:p}=s.position;i.position.addScaledVector(this.linearVelocity,-m*o),s.position.addScaledVector(this.linearVelocity,g*o),i.position.y=y,s.position.y=p}}}addPhysicsCollider(){this.environment.updateMatrixWorld(!0);const e=new kE(this.environment);e.attributes=["position"];const t=e.generate();t.boundsTree=new Ea(t,{lazyGeneration:!1}),Z.dispatch("Level::AddObject",this.environment),this.environmentCollider=new St(t)}addStaticCollider(e){this.environment.attach(e)}createBounds(e,t){super.createBounds(e,t),this.addPhysicsCollider()}setCharacter(e){this.characterVelocity.set(e.uuid,new L),this.characters.set(e.uuid,e);const{height:t,radius:i}=e.userData;e.geometry.translate(0,-i,0),e.children[0].translateY(-i);const{x:n,z:s}=e.position;e.position.set(n,t,s),this.move(e.uuid,Ui.UP)}move(e,t){const i=this.characters.get(e),{segment:n,radius:s}=i.userData,o=this.characterVelocity.get(e),a=this.environmentCollider?.matrixWorld,l=this.environmentCollider?.geometry;o.y+=this.delta*this.GRAVITY,i.position.addScaledVector(o,this.delta),this.linearVelocity.set(t.x,t.y,t.z),i.position.addScaledVector(this.linearVelocity,this.SPEED*this.delta),i.updateMatrixWorld(),this.box.makeEmpty(),this.matrix.copy(a).invert(),this.segment.copy(n),this.segment.start.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.segment.end.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.box.expandByPoint(this.segment.start),this.box.expandByPoint(this.segment.end),this.box.min.addScalar(-s),this.box.max.addScalar(s),l.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(this.box),intersectsTriangle:u=>{const d=this.capsule,f=this.linearVelocity,m=u.closestPointToSegment(this.segment,f,d);if(m<s){const g=s-m,y=d.sub(f).normalize();this.segment.start.addScaledVector(y,g),this.segment.end.addScaledVector(y,g)}}});const c=this.linearVelocity;c.copy(this.segment.start).applyMatrix4(a),this.capsule.subVectors(c,i.position),i.position.copy(c),o.setScalar(0)}stop(e){this.characterVelocity.get(e)?.setScalar(0)}update(e){this.paused||(this.delta=e*.2,this.updateCollisions())}remove(e){this.characterVelocity.delete(e),this.characters.delete(e)}dispose(){const e=this.environmentCollider?.geometry,t=FE.bind(e);e.dispose(),t(),this.paused=!0,this.characters.clear(),this.environment.clear(),this.characterVelocity.clear(),delete this.environmentCollider}set pause(e){this.paused=e}}const Mi=new VE;Mi.constructor.name.includes("Ammo");class Id{constructor(e){this.config=e;const{x:t,y:i}=this.config.collider;this.object=new St(new D0(t,i,t,2,.5),vn.DynamicCollider),this.object.userData={segment:new k0(new L,Ui.DOWN),height:i,radius:.5,mass:this.config.mass},this.step=this.config.moves.Idle,this.uuid=this.object.uuid}animations={};currentAnimation;direction=new L;position=new L;rotation=new L;animationUpdate=!1;uuid;mixer;lastAnimation="";step;hitting=!1;running=!1;moving=!1;object;dead=!1;still=!1;model;health=100;updateAnimation(e,t,i){return this.currentAnimation.crossFadeTo(this.animations[t],i,!0),this.animations[t].play(),this.animationUpdate=!0,setTimeout(()=>{this.lastAnimation=t,this.setAnimation(e),this.currentAnimation.stop(),this.animationUpdate=!1,this.currentAnimation=this.animations[t]},i*1e3)}async load(e){const t=await Je.Loader.loadGLTF(this.config.model);return this.mesh=t.scene,this.setTransform(t),this.setMaterial(e,1),t}playSound(e,t=!1){t&&this.stopSound(e),Z.dispatch("SFX::Character",{uuid:this.uuid,play:!0,sfx:e,matrix:this.object.matrixWorld},!0)}setMaterial(e,t=0){this.mesh.traverse(i=>{const n=i,s=n.material;n.isMesh&&(n.castShadow=!0,n.updateMorphTargets(),n.material=new Rd({envMap:e??null,transparent:!0,map:s.map,side:an,opacity:t}))})}getAnimationDuration(e){return this.animations[e].getClip().duration*1e3}setAnimation(e){this.step=this.config.moves[e]}setAnimations(e){const t=e.animations;this.mixer=new oE(this.mesh);for(let i=t.length;i--;){const{name:n}=t[i],s=n.charAt(0).toLowerCase()+n.slice(1);this.animations[s]=this.mixer.clipAction(t[i])}this.currentAnimation=this.animations.idle}setTransform(e){this.object.position.copy(this.config.position),this.mesh.position.set(0,this.config.collider.z,0),this.object.scale.copy(this.config.scale),this.rotation.setFromEuler(this.object.rotation),this.position.copy(this.object.position),this.object.add(this.mesh),this.setAnimations(e)}setMixerTimeScale(e){this.mixer&&(this.mixer.timeScale=e)}updateHealth(e){return this.dead?!0:(this.health=Math.max(this.health-e,0),!this.health&&this.die(),this.dead)}stopSound(e){Z.dispatch("SFX::Character",{uuid:this.uuid,play:!1,sfx:e,matrix:this.object.matrixWorld},!0)}setMixerTime(e){this.mixer?.setTime(e)}teleport(e){Mi.pause=!0,this.object.position.copy(e),this.mesh.rotateOnWorldAxis(Ui.UP,Math.PI),Mi.teleportCollider?.(this.object.uuid),Mi.pause=!1}update(e){this.mixer?.update(e),this.updateDirection(),this.moving?(this.still=!1,Mi.move(this.uuid,this.direction)):this.still||(this.still=!0,Mi.stop(this.uuid))}updateDirection(){const{speed:e,direction:t}=this.step;this.mesh.getWorldDirection(this.rotation),this.object.getWorldPosition(this.position);const i=this.rotation.x*e,n=this.rotation.z*e,{z0:s,x0:o,x1:a}=t,l=Math.min(o,a);this.direction.set(i*s+i*l+n*a,-1,n*s+n*l+i*o)}dispose(){this.object.userData={},this.object.geometry.dispose(),this.object.material.dispose();for(const e in this.animations)this.animations[e].stopFading(),this.animations[e].stop(),delete this.animations[e];this.model&&(this.object.remove(this.model),this.model.clear(),delete this.model),this.animations={},delete this.mixer,this.reset()}die(){this.playSound("death",!0),this.setAnimation("Idle"),Mi.remove(this.uuid),this.hitting=!1,this.running=!1,this.moving=!1,this.still=!1,this.dead=!0}reset(){this.step=this.config.moves.Idle,this.direction.setScalar(0),this.position.setScalar(0),this.rotation.setScalar(0),this.hitting=!1,this.running=!1,this.moving=!1,this.health=100,this.still=!0,this.dead=!1}get blockingAnimation(){return this.dead||this.animationUpdate}set mesh(e){this.model=e}get mesh(){return this.model}get life(){return this.health}get collider(){return this.object}get alive(){return!this.dead}}var W0={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Dd={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},HE=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ac={CSS:{},springs:{}};function Mn(r,e,t){return Math.min(Math.max(r,e),t)}function Ra(r,e){return r.indexOf(e)>-1}function uu(r,e){return r.apply(null,e)}var _e={arr:function(r){return Array.isArray(r)},obj:function(r){return Ra(Object.prototype.toString.call(r),"Object")},pth:function(r){return _e.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||_e.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return _e.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return _e.hex(r)||_e.rgb(r)||_e.hsl(r)},key:function(r){return!W0.hasOwnProperty(r)&&!Dd.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function X0(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function j0(r,e){var t=X0(r),i=Mn(_e.und(t[0])?1:t[0],.1,100),n=Mn(_e.und(t[1])?100:t[1],.1,100),s=Mn(_e.und(t[2])?10:t[2],.1,100),o=Mn(_e.und(t[3])?0:t[3],.1,100),a=Math.sqrt(n/i),l=s/(2*Math.sqrt(n*i)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*a+-o)/c:-o+a;function d(m){var g=e?e*m/1e3:m;return l<1?g=Math.exp(-g*l*a)*(h*Math.cos(c*g)+u*Math.sin(c*g)):g=(h+u*g)*Math.exp(-g*a),m===0||m===1?m:1-g}function f(){var m=Ac.springs[r];if(m)return m;for(var g=1/6,y=0,p=0;;)if(y+=g,d(y)===1){if(p++,p>=16)break}else p=0;var x=y*g*1e3;return Ac.springs[r]=x,x}return e?d:f}function GE(r){return r===void 0&&(r=10),function(e){return Math.ceil(Mn(e,1e-6,1)*r)*(1/r)}}var WE=function(){var r=11,e=1/(r-1);function t(h,u){return 1-3*u+3*h}function i(h,u){return 3*u-6*h}function n(h){return 3*h}function s(h,u,d){return((t(u,d)*h+i(u,d))*h+n(u))*h}function o(h,u,d){return 3*t(u,d)*h*h+2*i(u,d)*h+n(u)}function a(h,u,d,f,m){var g,y,p=0;do y=u+(d-u)/2,g=s(y,f,m)-h,g>0?d=y:u=y;while(Math.abs(g)>1e-7&&++p<10);return y}function l(h,u,d,f){for(var m=0;m<4;++m){var g=o(u,d,f);if(g===0)return u;var y=s(u,d,f)-h;u-=y/g}return u}function c(h,u,d,f){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var m=new Float32Array(r);if(h!==u||d!==f)for(var g=0;g<r;++g)m[g]=s(g*e,h,d);function y(p){for(var x=0,_=1,b=r-1;_!==b&&m[_]<=p;++_)x+=e;--_;var v=(p-m[_])/(m[_+1]-m[_]),M=x+v*e,S=o(M,h,d);return S>=.001?l(p,M,h,d):S===0?M:a(p,x,x+e,h,d)}return function(p){return h===u&&d===f||p===0||p===1?p:s(y(p),u,f)}}return c}(),q0=function(){var r={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var n,s=4;i<((n=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((n*3-2)/22-i,2)}},Elastic:function(i,n){i===void 0&&(i=1),n===void 0&&(n=.5);var s=Mn(i,1,10),o=Mn(n,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,n){e[i]=function(){return function(s){return Math.pow(s,n+2)}}}),Object.keys(e).forEach(function(i){var n=e[i];r["easeIn"+i]=n,r["easeOut"+i]=function(s,o){return function(a){return 1-n(s,o)(1-a)}},r["easeInOut"+i]=function(s,o){return function(a){return a<.5?n(s,o)(a*2)/2:1-n(s,o)(a*-2+2)/2}},r["easeOutIn"+i]=function(s,o){return function(a){return a<.5?(1-n(s,o)(1-a*2))/2:(n(s,o)(a*2-1)+1)/2}}}),r}();function Fd(r,e){if(_e.fnc(r))return r;var t=r.split("(")[0],i=q0[t],n=X0(r);switch(t){case"spring":return j0(r,e);case"cubicBezier":return uu(WE,n);case"steps":return uu(GE,n);default:return uu(i,n)}}function $0(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function Oc(r,e){for(var t=r.length,i=arguments.length>=2?arguments[1]:void 0,n=[],s=0;s<t;s++)if(s in r){var o=r[s];e.call(i,o,s,r)&&n.push(o)}return n}function Vc(r){return r.reduce(function(e,t){return e.concat(_e.arr(t)?Vc(t):t)},[])}function Im(r){return _e.arr(r)?r:(_e.str(r)&&(r=$0(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Ud(r,e){return r.some(function(t){return t===e})}function Nd(r){var e={};for(var t in r)e[t]=r[t];return e}function Hu(r,e){var t=Nd(r);for(var i in r)t[i]=e.hasOwnProperty(i)?e[i]:r[i];return t}function Hc(r,e){var t=Nd(r);for(var i in e)t[i]=_e.und(r[i])?e[i]:r[i];return t}function XE(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function jE(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(a,l,c,h){return l+l+c+c+h+h}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),s=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+n+","+s+","+o+",1)"}function qE(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,s=e[4]||1;function o(d,f,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?d+(f-d)*6*m:m<1/2?f:m<2/3?d+(f-d)*(2/3-m)*6:d}var a,l,c;if(i==0)a=l=c=n;else{var h=n<.5?n*(1+i):n+i-n*i,u=2*n-h;a=o(u,h,t+1/3),l=o(u,h,t),c=o(u,h,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function $E(r){if(_e.rgb(r))return XE(r);if(_e.hex(r))return jE(r);if(_e.hsl(r))return qE(r)}function rs(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function YE(r){if(Ra(r,"translate")||r==="perspective")return"px";if(Ra(r,"rotate")||Ra(r,"skew"))return"deg"}function Gu(r,e){return _e.fnc(r)?r(e.target,e.id,e.total):r}function bn(r,e){return r.getAttribute(e)}function Bd(r,e,t){var i=rs(e);if(Ud([t,"deg","rad","turn"],i))return e;var n=Ac.CSS[e+t];if(!_e.und(n))return n;var s=100,o=document.createElement(r.tagName),a=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Ac.CSS[e+t]=c,c}function Y0(r,e,t){if(e in r.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.style[e]||getComputedStyle(r).getPropertyValue(i)||"0";return t?Bd(r,n,t):n}}function zd(r,e){if(_e.dom(r)&&!_e.inp(r)&&(!_e.nil(bn(r,e))||_e.svg(r)&&r[e]))return"attribute";if(_e.dom(r)&&Ud(HE,e))return"transform";if(_e.dom(r)&&e!=="transform"&&Y0(r,e))return"css";if(r[e]!=null)return"object"}function K0(r){if(_e.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,n;n=t.exec(e);)i.set(n[1],n[2]);return i}}function KE(r,e,t,i){var n=Ra(e,"scale")?1:0+YE(e),s=K0(r).get(e)||n;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),i?Bd(r,s,i):s}function kd(r,e,t,i){switch(zd(r,e)){case"transform":return KE(r,e,i,t);case"css":return Y0(r,e,t);case"attribute":return bn(r,e);default:return r[e]||0}}function Od(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var i=rs(r)||0,n=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return n+s+i;case"-":return n-s+i;case"*":return n*s+i}}function Z0(r,e){if(_e.col(r))return $E(r);if(/\s/g.test(r))return r;var t=rs(r),i=t?r.substr(0,r.length-t.length):r;return e?i+e:i}function Vd(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function ZE(r){return Math.PI*2*bn(r,"r")}function JE(r){return bn(r,"width")*2+bn(r,"height")*2}function QE(r){return Vd({x:bn(r,"x1"),y:bn(r,"y1")},{x:bn(r,"x2"),y:bn(r,"y2")})}function J0(r){for(var e=r.points,t=0,i,n=0;n<e.numberOfItems;n++){var s=e.getItem(n);n>0&&(t+=Vd(i,s)),i=s}return t}function eR(r){var e=r.points;return J0(r)+Vd(e.getItem(e.numberOfItems-1),e.getItem(0))}function Q0(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return ZE(r);case"rect":return JE(r);case"line":return QE(r);case"polyline":return J0(r);case"polygon":return eR(r)}}function tR(r){var e=Q0(r);return r.setAttribute("stroke-dasharray",e),e}function iR(r){for(var e=r.parentNode;_e.svg(e)&&_e.svg(e.parentNode);)e=e.parentNode;return e}function ey(r,e){var t=e||{},i=t.el||iR(r),n=i.getBoundingClientRect(),s=bn(i,"viewBox"),o=n.width,a=n.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function nR(r,e){var t=_e.str(r)?$0(r)[0]:r,i=e||100;return function(n){return{property:n,el:t,svg:ey(t),totalLength:Q0(t)*(i/100)}}}function sR(r,e,t){function i(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return r.el.getPointAtLength(u)}var n=ey(r.el,r.svg),s=i(),o=i(-1),a=i(1),l=t?1:n.w/n.vW,c=t?1:n.h/n.vH;switch(r.property){case"x":return(s.x-n.x)*l;case"y":return(s.y-n.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Dm(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Z0(_e.pth(r)?r.totalLength:r,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:_e.str(r)||e?i.split(t):[]}}function Hd(r){var e=r?Vc(_e.arr(r)?r.map(Im):Im(r)):[];return Oc(e,function(t,i,n){return n.indexOf(t)===i})}function ty(r){var e=Hd(r);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:K0(t)}}})}function rR(r,e){var t=Nd(e);if(/^spring/.test(t.easing)&&(t.duration=j0(t.easing)),_e.arr(r)){var i=r.length,n=i===2&&!_e.obj(r[0]);n?r={value:r}:_e.fnc(e.duration)||(t.duration=e.duration/i)}var s=_e.arr(r)?r:[r];return s.map(function(o,a){var l=_e.obj(o)&&!_e.pth(o)?o:{value:o};return _e.und(l.delay)&&(l.delay=a?0:e.delay),_e.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return Hc(o,t)})}function oR(r){for(var e=Oc(Vc(r.map(function(s){return Object.keys(s)})),function(s){return _e.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},i=function(s){var o=e[s];t[o]=r.map(function(a){var l={};for(var c in a)_e.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},n=0;n<e.length;n++)i(n);return t}function aR(r,e){var t=[],i=e.keyframes;i&&(e=Hc(oR(i),e));for(var n in e)_e.key(n)&&t.push({name:n,tweens:rR(e[n],r)});return t}function lR(r,e){var t={};for(var i in r){var n=Gu(r[i],e);_e.arr(n)&&(n=n.map(function(s){return Gu(s,e)}),n.length===1&&(n=n[0])),t[i]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function cR(r,e){var t;return r.tweens.map(function(i){var n=lR(i,e),s=n.value,o=_e.arr(s)?s[1]:s,a=rs(o),l=kd(e.target,r.name,a,e),c=t?t.to.original:l,h=_e.arr(s)?s[0]:c,u=rs(h)||rs(l),d=a||u;return _e.und(o)&&(o=c),n.from=Dm(h,d),n.to=Dm(Od(o,h),d),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=Fd(n.easing,n.duration),n.isPath=_e.pth(s),n.isPathTargetInsideSVG=n.isPath&&_e.svg(e.target),n.isColor=_e.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var iy={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,i,n){if(i.list.set(e,t),e===i.last||n){var s="";i.list.forEach(function(o,a){s+=a+"("+o+") "}),r.style.transform=s}}};function ny(r,e){var t=ty(r);t.forEach(function(i){for(var n in e){var s=Gu(e[n],i),o=i.target,a=rs(s),l=kd(o,n,a,i),c=a||rs(l),h=Od(Z0(s,c),l),u=zd(o,n);iy[u](o,n,h,i.transforms,!0)}})}function hR(r,e){var t=zd(r.target,e.name);if(t){var i=cR(e,r),n=i[i.length-1];return{type:t,property:e.name,animatable:r,tweens:i,duration:n.end,delay:i[0].delay,endDelay:n.endDelay}}}function uR(r,e){return Oc(Vc(r.map(function(t){return e.map(function(i){return hR(t,i)})})),function(t){return!_e.und(t)})}function sy(r,e){var t=r.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,r.map(function(s){return i(s)+s.duration})):e.duration,n.delay=t?Math.min.apply(Math,r.map(function(s){return i(s)+s.delay})):e.delay,n.endDelay=t?n.duration-Math.max.apply(Math,r.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,n}var Fm=0;function dR(r){var e=Hu(W0,r),t=Hu(Dd,r),i=aR(t,r),n=ty(r.targets),s=uR(n,i),o=sy(s,t),a=Fm;return Fm++,Hc(e,{id:a,children:[],animatables:n,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var sn=[],ry=function(){var r;function e(){!r&&(!Um()||!ve.suspendWhenDocumentHidden)&&sn.length>0&&(r=requestAnimationFrame(t))}function t(n){for(var s=sn.length,o=0;o<s;){var a=sn[o];a.paused?(sn.splice(o,1),s--):(a.tick(n),o++)}r=o>0?requestAnimationFrame(t):void 0}function i(){ve.suspendWhenDocumentHidden&&(Um()?r=cancelAnimationFrame(r):(sn.forEach(function(n){return n._onDocumentVisibility()}),ry()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function Um(){return!!document&&document.hidden}function ve(r){r===void 0&&(r={});var e=0,t=0,i=0,n,s=0,o=null;function a(x){var _=window.Promise&&new Promise(function(b){return o=b});return x.finished=_,_}var l=dR(r);a(l);function c(){var x=l.direction;x!=="alternate"&&(l.direction=x!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,n.forEach(function(_){return _.reversed=l.reversed})}function h(x){return l.reversed?l.duration-x:x}function u(){e=0,t=h(l.currentTime)*(1/ve.speed)}function d(x,_){_&&_.seek(x-_.timelineOffset)}function f(x){if(l.reversePlayback)for(var b=s;b--;)d(x,n[b]);else for(var _=0;_<s;_++)d(x,n[_])}function m(x){for(var _=0,b=l.animations,v=b.length;_<v;){var M=b[_],S=M.animatable,R=M.tweens,w=R.length-1,T=R[w];w&&(T=Oc(R,function(ae){return x<ae.end})[0]||T);for(var D=Mn(x-T.start-T.delay,0,T.duration)/T.duration,F=isNaN(D)?1:T.easing(D),P=T.to.strings,U=T.round,z=[],j=T.to.numbers.length,B=void 0,V=0;V<j;V++){var W=void 0,ee=T.to.numbers[V],oe=T.from.numbers[V]||0;T.isPath?W=sR(T.value,F*ee,T.isPathTargetInsideSVG):W=oe+F*(ee-oe),U&&(T.isColor&&V>2||(W=Math.round(W*U)/U)),z.push(W)}var K=P.length;if(!K)B=z[0];else{B=P[0];for(var H=0;H<K;H++){P[H];var X=P[H+1],ne=z[H];isNaN(ne)||(X?B+=ne+X:B+=ne+" ")}}iy[M.type](S.target,M.property,B,S.transforms),M.currentValue=B,_++}}function g(x){l[x]&&!l.passThrough&&l[x](l)}function y(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(x){var _=l.duration,b=l.delay,v=_-l.endDelay,M=h(x);l.progress=Mn(M/_*100,0,100),l.reversePlayback=M<l.currentTime,n&&f(M),!l.began&&l.currentTime>0&&(l.began=!0,g("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,g("loopBegin")),M<=b&&l.currentTime!==0&&m(0),(M>=v&&l.currentTime!==_||!_)&&m(_),M>b&&M<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,g("changeBegin")),g("change"),m(M)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,g("changeComplete")),l.currentTime=Mn(M,0,_),l.began&&g("update"),x>=_&&(t=0,y(),l.remaining?(e=i,g("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,g("loopComplete"),g("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var x=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=x==="reverse",l.remaining=l.loop,n=l.children,s=n.length;for(var _=s;_--;)l.children[_].reset();(l.reversed&&l.loop!==!0||x==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(x,_){return ny(x,_),l},l.tick=function(x){i=x,e||(e=i),p((i+(t-e))*ve.speed)},l.seek=function(x){p(h(x))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,sn.push(l),u(),ry())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(x){var _=Hd(x);oy(_,l)},l.reset(),l.autoplay&&l.play(),l}function Nm(r,e){for(var t=e.length;t--;)Ud(r,e[t].animatable.target)&&e.splice(t,1)}function oy(r,e){var t=e.animations,i=e.children;Nm(r,t);for(var n=i.length;n--;){var s=i[n],o=s.animations;Nm(r,o),!o.length&&!s.children.length&&i.splice(n,1)}!t.length&&!i.length&&e.pause()}function fR(r){for(var e=Hd(r),t=sn.length;t--;){var i=sn[t];oy(e,i)}}function pR(r,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?Fd(e.easing):null,n=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",h=_e.arr(r),u=parseFloat(h?r[0]:r),d=h?parseFloat(r[1]):0,f=rs(h?r[1]:r)||0,m=e.start||0+(h?u:0),g=[],y=0;return function(p,x,_){if(a&&(o=0),l&&(o=(_-1)/2),c&&(o=_-1),!g.length){for(var b=0;b<_;b++){if(!n)g.push(Math.abs(o-b));else{var v=l?(n[0]-1)/2:o%n[0],M=l?(n[1]-1)/2:Math.floor(o/n[0]),S=b%n[0],R=Math.floor(b/n[0]),w=v-S,T=M-R,D=Math.sqrt(w*w+T*T);s==="x"&&(D=-w),s==="y"&&(D=-T),g.push(D)}y=Math.max.apply(Math,g)}i&&(g=g.map(function(P){return i(P/y)*y})),t==="reverse"&&(g=g.map(function(P){return s?P<0?P*-1:-P:Math.abs(y-P)}))}var F=h?(d-u)/y:u;return m+F*(Math.round(g[x]*100)/100)+f}}function mR(r){r===void 0&&(r={});var e=ve(r);return e.duration=0,e.add=function(t,i){var n=sn.indexOf(e),s=e.children;n>-1&&sn.splice(n,1);function o(d){d.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=Hc(t,Hu(Dd,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=_e.und(i)?c:Od(i,c),o(e),e.seek(l.timelineOffset);var h=ve(l);o(h),s.push(h);var u=sy(s,r);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}ve.version="3.2.1";ve.speed=1;ve.suspendWhenDocumentHidden=!0;ve.running=sn;ve.remove=fR;ve.get=kd;ve.set=ny;ve.convertPx=Bd;ve.path=nR;ve.setDashoffset=tR;ve.stagger=pR;ve.timeline=mR;ve.easing=Fd;ve.penner=q0;ve.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};class Bm extends Id{constructor(e,t,i=0){if(super(ue.Enemy),this.id=i,this.walkDistance=this.walkDistance<0?1/0:this.walkDistance,this.runDistance=this.runDistance<0?1/0:this.runDistance,e&&t){this.character=VA(e.scene),Z.dispatch("Level::AddObject",this.object),Z.dispatch("Enemy::Spawn",this.uuid,!0);const n=+!this.id;this.mesh=this.character,this.setMaterial(t,n),this.setTransform(e),this.setDefaultState(),this.toggleVisibility(!0)}}walkDistance=ue.Gameplay.enemy.walk;runDistance=ue.Gameplay.enemy.run;lose=ue.Gameplay.enemy.lose;animationUpdate=!0;lastAnimation="idle";crawlAnimation;hitBoxes=[];attackDistance=2.5;hittingTimeout;attackTimeout;crawlTimeout;animTimeout;runTimeout;hitTimeout;previousAnimation="idle";screamDuration;screamStart;hitDuration;distance=1/0;playerDead=!1;hitStart;character;attacking=!1;screaming=!1;screamed=!1;crawling=!1;falling=!1;visible=!1;crawlTime=0;fallTime=0;hitTime=0;updateAnimation(e,t,i=.5){return super.updateAnimation(e,t,i)}toggleVisibility(e,t){if(!this.hitBoxes.length)return;const i=1e3+ +!e*1500,n=e?"easeInQuad":"easeOutQuad",s=t&&this.getAnimationDuration(t)+500||0;if(e)this.visible=!0;else{this.cancelHit(),this.removeHitBoxes(),clearTimeout(this.crawlTimeout);const o=s+i,a=t==="crawlDeath";setTimeout(this.dispose.bind(this),o);const l=Date.now()-this.crawlTime<3e3;a&&l&&this.animations.crawling.stop(),this.animations.idle.stopFading(),this.animations.walk.stopFading(),this.animations.run.stopFading(),this.animations.idle.stop(),this.animations.walk.stop(),this.animations.run.stop()}setTimeout(()=>{Z.dispatch("Enemy::Active",e),this.animationUpdate=!1},+e*i),ve({changeBegin:this.disableShadow.bind(this),targets:this.material,opacity:+e,duration:i,easing:n,delay:s})}async loadCharacter(e){return this.load(e)}fallDeadAnimation(e){const t=Date.now()-this.fallTime<1500;this.falling&&t&&this.updateAnimation("Idle",e),this.toggleVisibility(!1,e)}headHit(e,t){if(!this.dead){if(this.stopSounds(),this.cancelAnimation(),this.hitting&&this.cancelHit(),!t&&this.life>e)return this.bodyHit(e);this.updateHitDamage(e)?this.falling&&this.fallDeadAnimation("headshot"):(this.toggleVisibility(!1,"headshot"),this.updateAnimation("Idle","headshot")),this.hitTime=Date.now(),this.running=!1}}bodyHit(e){if(this.dead)return;if(this.playHitSound(),this.cancelAnimation(),this.updateHitDamage(e)){this.dead&&this.fallDeadAnimation("death");return}if(this.dead){this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}else if(!this.hitting)this.previousAnimation=this.lastAnimation;else{this.cancelHit(),this.animations.idle.play(),this.currentAnimation=this.animations.idle;const i=this.previousAnimation==="run",n=this.lastAnimation==="run";if(this.running&&i&&n){if(this.updateHitDamage(this.life))return this.fallDeadAnimation("death");this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}}this.previousAnimation!=="hit"&&(this.animations.hit.time=this.hitStart,this.updateAnimation("Idle","hit",.1)),this.hitTimeout=setTimeout(()=>{if(this.dead||this.attacking)return;const i=this.previousAnimation==="hit",n=this.previousAnimation==="scream",s=this.previousAnimation.includes("Attack"),o=i||n||s;o||(this.animTimeout=this.updateAnimation(t,this.previousAnimation,.1)),this.hitTimeout=setTimeout(()=>{if(this.dead)return;this.hitting=!1;const a=this.distance<this.runDistance&&!this.running;this.distance<this.attackDistance?this.attack():a&&this.run()},+!o*100)},this.hitDuration-100);const t=this.animation;this.hitTime=Date.now(),this.hitting=!0}legHit(e){if(this.dead)return;this.playHitSound(),this.cancelAnimation();const t=Date.now(),i=t-this.hitTime,n=this.updateHitDamage(e);if(i<825&&i>600)return setTimeout(this.legHit.bind(this,e),825-i);if(this.hitting&&this.cancelHit(),n){this.dead&&this.falling&&this.toggleVisibility(!1,"crawlDeath");return}this.crawlTimeout=setTimeout(this.crawl.bind(this),2500),this.updateAnimation("Falling","falling",.1),this.hitTime=this.fallTime=t,this.running=!1,this.falling=!0,this.hitting=!0,this.moving=!1}crawl(e=3){this.dead||(this.crawlTime=Date.now(),this.crawlTimeout=this.updateAnimation("Crawling","crawling",e),this.crawling||(this.crawlAnimation=ve({z:this.rotation.z*(e*-.1),targets:this.character.position,duration:e*1e3,easing:"linear"})),this.attacking=!1,this.crawling=!0,this.falling=!1,this.hitting=!1,this.moving=!0)}cancelAnimation(){this.attacking&&(this.animations.softAttack.stopFading(),this.animations.hardAttack.stopFading(),this.animations.softAttack.stop(),this.animations.hardAttack.stop(),clearTimeout(this.hittingTimeout),clearTimeout(this.attackTimeout),clearTimeout(this.animTimeout),this.attacking=!1),this.screaming&&(this.animations.scream.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.runTimeout),this.animations.scream.stop(),this.screaming=!1)}playHitSound(){this.stopSounds(),!this.falling&&this.playSound("hit")}stopSounds(){this.screaming?this.stopSound("scream"):this.attacking&&(this.stopSound("hardAttack"),this.stopSound("softAttack"))}cancelHit(){this.animations.hit.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.hitTimeout),this.animations.hit.stop()}idle(){if(this.dead)return;const e=+!this.attacking*.4+.1;this.updateAnimation("Idle","idle",e),this.attacking=!1,this.hitting=!1,this.running=!1,this.moving=!1}walk(){this.dead||(this.updateAnimation("Walking","walk"),this.hitting=!1,this.running=!1,this.moving=!0)}scream(){this.dead||(this.cancelHit(),this.moving=!1,this.hitting=!1,this.screamed=!0,this.screaming=!0,this.attacking=!1,this.runTimeout=setTimeout(()=>{this.playSound("scream"),this.runTimeout=setTimeout(()=>this.distance<this.attackDistance?this.attack():this.run(),this.screamDuration-250)},this.screamStart*1e3),this.animTimeout=this.updateAnimation("Idle","scream",this.screamStart))}run(){if(this.dead||this.playerDead)return;const e=+(this.attacking||this.screaming)*.1;this.updateAnimation("Running","run",e+.1),this.attacking=!1,this.screaming=!1,this.hitting=!1,this.running=!0,this.moving=!0}attack(){if(this.dead)return;const e=this.life>50&&Math.random()<.5;let t="crawlAttack",i=.5,n=2200,s=250;this.crawling||(t=e?"hardAttack":"softAttack",s=e?1300:1e3,n=e?3e3:2500,setTimeout(this.playSound.bind(this,t,!0),+!e*350+400),i=.166),this.updateAnimation("Idle",t,i),this.hittingTimeout=setTimeout(()=>{const{strong:o,soft:a}=ue.Gameplay.damage.enemy;this.canAttack&&Z.dispatch("Enemy::Attack",{position:this.position,damage:e?o:a})},s),this.attackTimeout=setTimeout(()=>{if(this.dead||this.crawling&&this.playerDead)return;const o=this.distance<(this.crawling?1.5:this.attackDistance);this.crawling?this.crawl(+o+1):o?this.idle():this.run()},i*1e3+n),this.screaming=!1,this.attacking=!0,this.screamed=!0,this.hitting=!1,this.running=!1,this.moving=!1}update(e,t){const i=t;return this.visible?(super.update(e),this.dead?this.position:(this.distance=this.object.position.distanceToSquared(i),this.character.lookAt(i.x,0,i.z),this.toggleAnimation(),this.position)):this.position}updateHitDamage(e){const t=this.falling||this.crawling,i=this.updateHealth(e);if(t){if(i&&this.crawling){let n;this.crawlAnimation?.completed||(this.character.position.z=this.rotation.z,this.crawlAnimation?.pause(),this.animations.falling.setEffectiveTimeScale(1).setEffectiveWeight(1).stopWarping().stopFading(),n=0),this.toggleVisibility(!1,"crawlDeath"),this.updateAnimation("Idle","crawlDeath",n)}}else return!1;return!0}toggleAnimation(){if(this.blockingAnimation)return;if(this.canAttack)return this.attack();if(this.crawling||!this.lose&&this.running)return;const e=this.distance>this.walkDistance,t=this.distance<this.runDistance,i=!e&&!t,n=!this.screamed&&t;this.lose&&this.moving&&e?this.idle():!this.moving&&i?this.walk():!(this.lose&&this.running)&&n&&this.scream()}dispose(){super.dispose(),this.removeHitBoxes(),this.character?.clear(),Z.dispatch("Enemy::Death",this.id),Z.dispatch("Enemy::Dispose",this.uuid,!0),Z.dispatch("Level::RemoveObject",this.object)}setDefaultState(){const e=this.getAnimationDuration("scream");this.screamDuration=e-333.3332538604736|0,this.screamStart=(e-this.screamDuration)/1e3;const t=this.getAnimationDuration("hit");this.hitDuration=t-233.3333015441895|0,this.hitStart=(t-this.hitDuration)/1e3,this.animations.softAttack.clampWhenFinished=!0,this.animations.hardAttack.clampWhenFinished=!0,this.animations.crawlDeath.clampWhenFinished=!0,this.animations.headshot.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.falling.clampWhenFinished=!0,this.animations.scream.clampWhenFinished=!0,this.animations.hit.clampWhenFinished=!0,this.animations.softAttack.setLoop(Di,0),this.animations.hardAttack.setLoop(Di,0),this.animations.crawlDeath.setLoop(Di,0),this.animations.headshot.setLoop(Di,0),this.animations.death.setLoop(Di,0),this.animations.falling.setLoop(Di,0),this.animations.scream.setLoop(Di,0),this.animations.hit.setLoop(Di,0);const{idle:i}=this.animations;this.currentAnimation=i,this.createHitBoxes(),i.play()}createHitBoxes(){this.addHeadHitBox(),this.addBodyHitBox(),this.addLegsHitBox()}removeHitBoxes(){for(let e=this.hitBoxes.length;e--;)delete this.hitBoxes[e];this.hitBoxes.splice(0)}addHeadHitBox(){const e=this.character.getObjectByName("Head"),t=new St(new ss(15,10,22),vn.HitBox.clone());t.position.y+=9.5,t.position.z+=2,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addBodyHitBox(){const e=this.character.getObjectByName("Spine"),t=new St(new D0(38,95,40,2,25),vn.HitBox.clone());t.position.y+=15,t.position.z+=2.5,t.position.x-=1,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addLegsHitBox(){const e=this.character.getObjectByName("RightUpLeg"),t=this.character.getObjectByName("LeftUpLeg"),i=this.character.getObjectByName("RightLeg"),n=this.character.getObjectByName("LeftLeg"),s=new St(new ss(16,50,15),vn.HitBox.clone()),o=new St(new ss(10,50,10),vn.HitBox.clone());o.userData.enemy=this.id,s.userData.enemy=this.id,o.position.y-=22.5,o.position.z-=2.5,s.position.y-=20;const a=s.clone(),l=s.clone(),c=o.clone(),h=o.clone();a.position.x+=1,l.position.x-=1,this.hitBoxes.push(a),this.hitBoxes.push(l),this.hitBoxes.push(c),this.hitBoxes.push(h),e.add(a),t.add(l),i.add(c),n.add(h)}disableShadow(){this.dead&&this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!1)})}get blockingAnimation(){return this.attacking||this.falling||this.screaming||this.playerDead||super.blockingAnimation}get material(){return this.mesh.children[0].children[0].material}get animation(){const e=this.running?"Running":this.moving?"Walking":"Idle";return this.falling?"Falling":this.crawling?"Crawling":e}set playerDeath(e){(this.playerDead=e)&&this.moving&&this.idle()}get hitBox(){return this.hitBoxes}get canAttack(){return!this.playerDead&&this.distance<(this.crawling?1.5:this.attackDistance)}get index(){return this.id}}function gR(r,e=r.length,t=0){for(;e;)t=fi(0,1)*e--|0,[r[e],r[t]]=[r[t],r[e]]}function ay(r){return JSON.parse(JSON.stringify(r))}function yR(r){return r[Nc(0,r.length-1)]}function Ec(r){let e=r.length,t=1/0;for(;e--;)r[e]<t&&(t=r[e]);return t}function No(r){let e=r.length,t=-1/0;for(;e--;)r[e]>t&&(t=r[e]);return t}const ly=r=>{const e=ay(r.bounds),{boundOffset:t}=ue.RandomCoords;e.unshift(e.pop());const i=e.slice(0,e.length/2).slice(4),n=e.slice(e.length/2).slice(4),s=r.minCoords[1]+t,o=r.maxCoords[1]-t,a=[r.portals[2],r.portals[3],r.portals[4],r.portals[5]],l=[r.portals[6],r.portals[7],r.portals[0],r.portals[1]],c=fi(s,o);if(c>l[0][1]){const m=Ec(l.map(y=>y[0])),g=No(l.map(y=>y[0]));return[fi(m,g),c]}if(c<a[0][1]){const m=Ec(a.map(y=>y[0])),g=No(a.map(y=>y[0]));return[fi(m,g),c]}let h,u,d,f;for(let m=0,g=i.length-1;m<g;m++)if(i[m][1]>c&&i[m+1][1]<c){d=i[m][0]+t,u=n[g-m][0]-t,h=i[m+1][0]+t,f=n[g-m-1][0]-t;break}return[fi(Math.max(d,h),Math.min(f,u))|0,c|0]};class Gt{static levelCoords=new Pe;static playerCoords=new Pe;static coords=[];static ammount=ue.RandomCoords.ammount;static distance=ue.RandomCoords.playerDistance**2;static getRandomLevelCoords(e,t,i){Gt.playerCoords.set(e,t);do i=Gt.setRandomCoords();while(i<Gt.distance);return gR(Gt.coords),Gt.levelCoords.toArray()}static addLevelCoords(e){return Gt.coords.push(e)===Gt.ammount}static setRandomCoords(){return Gt.levelCoords.fromArray(yR(Gt.coords)),Gt.levelCoords.distanceToSquared(Gt.playerCoords)}static fillRandomLevelCoords(){for(let e=Gt.ammount;e--;)Gt.coords.push(ly({minCoords:Ve.minCoords,maxCoords:Ve.maxCoords,portals:Ve.portals,bounds:Ve.bounds}))}}class _R{constructor(e){this.envMap=e,new Bm().loadCharacter(e).then(t=>{this.enemyModel=t,this.spawnEnemy([0,0])}),this.addEvents()}onHeadHit=this.headHit.bind(this);onBodyHit=this.bodyHit.bind(this);onLegHit=this.legHit.bind(this);onDeath=this.death.bind(this);positions=[];enemyPosition=new L;enemies=[];spawnedEnemies=0;enemyModel;addEvents(){Z.add("Enemy::Death",this.onDeath),Z.add("Hit::Head",this.onHeadHit),Z.add("Hit::Body",this.onBodyHit),Z.add("Hit::Leg",this.onLegHit)}spawnEnemy(e){const t=new Bm(this.enemyModel,this.envMap,this.spawnedEnemies++);this.enemyPosition.set(e[0],t.collider.position.y,e[1]),t.teleport(this.enemyPosition),this.positions.push(new L().copy(this.enemyPosition)),Mi.setCharacter(t.collider),this.enemies.push(t)}headHit(e){const{enemy:t,damage:i,headshot:n}=e.data,s=this.getEnemyIndex(t);this.enemies[s].headHit(i,n)}bodyHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].bodyHit(i)}legHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].legHit(i)}death(e){const t=this.getEnemyIndex(e.data);this.positions.splice(t,1),this.enemies.splice(t,1)}update(e,t){for(let i=this.enemies.length;i--;){const n=this.enemies[i].update(e,t);this.enemies[i].alive?this.positions[i].copy(n):this.positions[i].setScalar(NaN)}return this.positions}spawnMultiple(e,t,i=2){const n=this.enemies.length-1;i=Math.min(ue.Gameplay.maxEnemies-n,i);for(let s=i;s--;)this.spawnEnemy(Gt.getRandomLevelCoords(e,t))}getHitDirection(e,t,i){let n=Math.atan2(e.z-t.z,e.x-t.x);const s=Oy(i);let o="Front";return Math.abs(s)>et.m075?(n=Math.abs(n),o=n<et.d4?"Right":n>et.m075?"Left":"Front"):s<-et.d4&&s>-et.m075?(n*=-1,o=n<-et.d4&&n>-et.m075?"Right":n<et.m075&&n>et.d4?"Left":"Front"):Math.abs(s)<et.d4?(n=Math.abs(n),o=n>et.m075?"Right":n<et.d4?"Left":"Front"):s<et.m075&&s>et.d4&&(n*=-1,o=n<et.m075&&n>et.d4?"Right":n<-et.d4&&n>-et.m075?"Left":"Front"),o}getEnemy(e){return this.enemies.find(t=>t.collider.uuid===e)}getEnemyIndex(e){return this.enemies.findIndex(t=>t.index===e)}removeEvents(){Z.remove("Enemy::Death"),Z.remove("Hit::Head"),Z.remove("Hit::Body"),Z.remove("Hit::Leg")}dispose(){for(let e=this.enemies.length;e--;)this.enemies[e].dispose(),delete this.enemies[e];this.enemyModel.scene.clear(),this.positions.splice(0),this.enemies.splice(0),this.removeEvents()}get colliders(){const e=[];for(let t=this.enemies.length;t--;)e.push(...this.enemies[t].hitBox);return e}set playerDead(e){for(let t=this.enemies.length;t--;)this.enemies[t].playerDeath=e}}class xR extends Ns{noop=()=>{};addEventListener(e,t,i){super.addEventListener(e,t)}dispatchEvent(e){e.stopPropagation=this.noop,e.preventDefault=this.noop,super.dispatchEvent(e)}removeEventListener(e,t,i){super.removeEventListener(e,t)}}const Wu=new xR;class pt{constructor(e){this.player=e}static directions=[0,0,0,0];static running=!1;paused=!0;move=Xu;static get moves(){return pt.directions}static get moving(){return pt.directions.includes(1)}static get idle(){return!pt.moving}static get runs(){return pt.running}static set runs(e){pt.running=e}get disabled(){return this.paused||!this.player.alive}set pause(e){this.paused=e}get movement(){return pt.moves.join("")}dispose(){this.paused=!0}}class Kn extends pt{wheelTime=0;aimTime=0;aimTimeout;events=Object.entries({contextmenu:this.onContextMenu.bind(this),mousewheel:this.onMouseWheel.bind(this),mousedown:this.onMouseDown.bind(this),mousemove:this.onMouseMove.bind(this),mouseup:this.onMouseUp.bind(this),keydown:this.onKeyDown.bind(this),keyup:this.onKeyUp.bind(this)});constructor(e){super(e),this.addEventListeners()}addEventListeners(){const e=ue.worker?Wu:document;for(const[t,i]of this.events)e.addEventListener(t,i,!1)}onContextMenu(e){if(!this.paused)return e.stopPropagation(),e.preventDefault(),!1}onMouseWheel(e){const t=Date.now();e.stopPropagation(),!this.disabled&&t>this.wheelTime&&(this.wheelTime=t+450,this.player.changeWeapon())}onMouseDown(e){if(e.preventDefault(),e.stopPropagation(),!this.disabled){if(e.button===ba.LEFT)this.player.startShooting();else if(e.button===ba.RIGHT){const t=this.move!==Xu;this.player.startAiming(t),this.aimTime=Date.now()}}}onMouseMove(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&this.player.rotate(e.movementX/-100,e.movementY/400,.15)}onMouseUp(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(e.button===ba.LEFT?this.player.stopShooting():e.button===ba.RIGHT&&(clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const t=!!pt.moves[Rt.UP],i=pt.runs&&t;this.player.stopAiming(i),i?this.player.run(!0):this.player.move()},Math.max(450-(Date.now()-this.aimTime),0))))}onKeyDown(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;switch(this.onShift(e.code,!0),e.code){case"KeyW":pt.moves[Rt.UP]=1,pt.moves[Rt.DOWN]=0;break;case"KeyD":pt.moves[Rt.RIGHT]=1,pt.moves[Rt.LEFT]=0;break;case"KeyS":pt.moves[Rt.DOWN]=1,pt.moves[Rt.UP]=0;break;case"KeyA":pt.moves[Rt.RIGHT]=0,pt.moves[Rt.LEFT]=1;break;default:return}const t=this.movement;this.move!==t&&this.player.move(),this.move=t}onKeyUp(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;switch(this.onShift(e.code,!1),e.code){case"KeyW":pt.moves[Rt.UP]=0;break;case"KeyD":pt.moves[Rt.RIGHT]=0;break;case"KeyS":pt.moves[Rt.DOWN]=0;break;case"KeyA":pt.moves[Rt.LEFT]=0;break;case"KeyQ":case"KeyE":{const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());return}case"KeyC":return this.player.changeCamera(!0);case"KeyV":return this.player.changeCamera(!1);case"KeyR":return this.player.reload();default:return}const t=this.movement;t===Xu?this.player.idle():this.move!==t&&this.player.move(),this.move=t}onShift(e,t){const i=t?!pt.runs:pt.runs;e==="ShiftLeft"&&i&&(this.player.run(t),pt.runs=t)}removeEventListeners(){const e=ue.worker?Wu:document;for(const[t,i]of this.events)e.removeEventListener(t,i,!1)}dispose(){this.removeEventListeners(),super.dispose()}}var Rt=(r=>(r[r.UP=0]="UP",r[r.RIGHT=1]="RIGHT",r[r.DOWN=2]="DOWN",r[r.LEFT=3]="LEFT",r))(Rt||{}),ba=(r=>(r[r.LEFT=0]="LEFT",r[r.WHEEL=1]="WHEEL",r[r.RIGHT=2]="RIGHT",r))(ba||{});const Xu="0000";var or=(r=>(r.Pistol="pistol",r.Rifle="rifle",r))(or||{});let vR=class extends Id{modelRotation=new wi;lastAnimation="pistolIdle";reloadTimeout;animTimeout;aimTimeout;weapon;equipRifle=!1;hasRifle=!1;reloading=!1;shooting=!1;aiming=!1;hand;pistol;rifle;shootTime=0;idleTime=0;aimTime=0;constructor(){super(ue.Player)}async loadCharacter(e){const t=await this.load(e);this.hand=t.scene.getObjectByName("swatRightHand"),Z.dispatch("Level::AddObject",this.object),this.currentAnimation=this.animations.pistolIdle,this.animations.rifleReload.clampWhenFinished=!0,this.animations.rifleAim.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.rifleReload.setLoop(Di,1),this.animations.rifleAim.setLoop(Di,1),this.animations.death.setLoop(Di,1),Qe.setTo(t.scene),this.currentAnimation.play(),this.rotate(-Math.PI,0)}rotate(e,t,i=.25){const n=t>0,s=this.mesh,o=+Qe.isFPS,a=this.rotation.y;if(s.rotateOnWorldAxis(Ui.UP,e),this.running)return;const l=o*-.2-.2;i=Math.min(i+o*i,.25),(n&&a>=l||!n&&a<=i)&&s.rotateOnAxis(Ui.RIGHT,t)}idle(){const e=Date.now(),t=Math.max(350-(e-this.idleTime),0);if(this.blockingAnimation||t)return setTimeout(this.idle.bind(this),t);Z.dispatch("Player::Aim",!this.equipRifle,!0),Z.dispatch("Player::Run",!1,!0);const i=this.getWeaponAnimation("Idle");this.lastAnimation!==i&&(this.hasRifle&&this.rifle.updatePosition(0),this.running=this.moving=!1,Qe.runAnimation(!1),this.idleTime=e,setTimeout(this.updateAnimation.bind(this,"Idle",i),+(this.lastAnimation===i)*100))}move(){if(this.blockingAnimation){this.reloading&&(this.moving=Kn.moving);return}const e=this.movementAnimation,t=this.getWeaponAnimation(e);this.lastAnimation!==t&&(this.updateAnimation(e,t),this.running=!1,this.moving=e!=="Idle",this.moving&&Qe.runAnimation(!1),this.hasRifle&&this.rifle.updatePosition(1),Z.dispatch("Player::Run",!1,!0),Z.dispatch("Player::Aim",!1,!0))}run(e){if(this.blockingAnimation||this.running===e)return;const t=this.getWeaponAnimation("Run");if(!e||this.lastAnimation===t)return this.running=!1,Kn.moving?this.move():setTimeout(this.idle.bind(this),150);Kn.moves[Rt.UP]&&(this.hasRifle&&this.rifle.updatePosition(1.5),Z.dispatch("Player::Run",!0,!0),this.running=this.moving=!0,this.updateAnimation("Run",t),Qe.runAnimation(!0),this.resetRotation(!0))}hit(e,t){if(this.dead||this.updateHealth(t)||this.hitting)return;this.aiming&&this.stopAiming(this.running);const i=this.getHitAnimation(e),n=+!this.equipRifle*100+1200;Z.dispatch("Player::Aim",!1,!0),this.updateAnimation("Idle",i),clearTimeout(this.reloadTimeout),Qe.isFPS&&(Qe.headAnimation(e,n*.5),this.equipRifle&&this.weapon.toggleVisibility(0,n+100,0)),this.playSound("hit",!0),this.weapon.stopReloading(),this.toggleMesh(!1),setTimeout(()=>{if(this.hitting=!1,this.dead)return this.toggleMesh(!0);Kn.runs?this.run(!0):this.move();const s=Kn.idle&&!this.equipRifle;Z.dispatch("Player::Aim",s,!0),setTimeout(this.toggleMesh.bind(this,!0),100)},n),this.reloading=!1,this.running=!1,this.hitting=!0,this.moving=!1}startAiming(e){if(this.blockingAnimation)return;this.weapon.aiming=this.aiming=!0,Z.dispatch("Player::Run",!1,!0),Qe.runAnimation(!1),Qe.aimAnimation(!0,this.equipRifle),Qe.updateNearPlane(!0,this.equipRifle);const t=this.equipRifle?"rifleAim":"pistolIdle";setTimeout(this.toggleMesh.bind(this,!0),300),this.aimTime=+this.equipRifle*Date.now(),clearTimeout(this.animTimeout),this.weapon.setAim(),this.lastAnimation!==t&&((this.equipRifle||e)&&(this.animTimeout=this.updateAnimation("Idle",t)),this.running=this.moving=!1),this.aimTimeout=setTimeout(()=>Z.dispatch("Player::Aim",!Qe.isFPS,!0),300+ +this.equipRifle*300),!this.equipRifle&&setTimeout(()=>{this.currentAnimation.paused=!0,this.setMixerTime(.5)},400)}stopAiming(e){if(this.reloading)return;this.equipRifle&&clearTimeout(this.aimTimeout);const t=Math.min(Date.now()-this.aimTime,400);Z.dispatch("Player::Aim",!this.equipRifle,!0),!e&&Qe.aimAnimation(!1,this.equipRifle,t),Qe.isFPS&&e?Qe.setNearPlane(+this.equipRifle*.185+.315,0):Qe.updateNearPlane(!1,this.equipRifle),setTimeout(()=>this.weapon.aiming=this.aiming=!1,100),this.weapon.aiming=this.aiming=!1,this.currentAnimation.paused=!1,this.weapon.cancelAim(t),clearTimeout(this.animTimeout),this.toggleMesh(!1)}startShooting(e=Date.now()){if(this.equipRifle&&!this.aiming||this.moving||this.hitting||this.reloading||e-this.aimTime<500||e-this.shootTime<165)return;this.shooting=!0,this.shootTime=e;const t=this.weapon.shoot();t&&this.rotate(t.x,t.y),!this.equipRifle&&this.stopShooting()}stopShooting(){this.shooting=!1}reload(){const e=this.moving;if(this.blockingAnimation||this.weapon.full||!this.weapon.inStock)return;Z.dispatch("Player::Run",!1,!0),this.updateAnimation("Idle","rifleReload");const t=+this.running*.02+.13;this.running=this.moving=!1,Qe.setNearPlane(t,400),this.weapon.startReloading(),Qe.runAnimation(!1),this.reloading=!0,this.toggleMesh(!0),this.reloadTimeout=setTimeout(()=>{Kn.idle&&(e||this.moving)&&this.weapon.stopReloading(),this.weapon.addAmmo(0),this.reloading=!1},2e3),this.animTimeout=setTimeout(()=>{this.dead||(this.toggleMesh(!1),this.weapon.stopReloading(),Qe.setNearPlane(.5,100),Kn.runs?this.run(!0):this.move())},2500)}setPistol(e=this.weapon.walls,t){if(this.setWeapon(!1),t)this.pistol=t,this.weapon=this.pistol,this.weapon.walls=e,this.weapon.visible=!0,this.hand?.add(this.weapon.object);else{const i=this.weapon.targets;this.weapon=this.pistol,this.updateRiflePosition(!0),this.weapon.visible=!0,this.weapon.walls=e,this.rifle.toggle=!1,this.setTargets(i)}}setRifle(){this.rifle.walls=this.weapon.walls;const e=this.weapon.targets;this.weapon.visible=!1,this.rifle.toggle=!0,this.weapon=this.rifle,this.setTargets(e),this.setWeapon(!0)}setWeapon(e){Z.dispatch("Weapon::Change",e);let t=e?this.lastAnimation.replace(or.Pistol,or.Rifle):this.lastAnimation.replace(or.Rifle,or.Pistol);!e&&!this.animations[t]&&(t=t.replace(/BackwardLeft|BackwardRight/gm,"Backward"),t=t.replace(/ForwardLeft|ForwardRight/gm,"Forward")),this.lastAnimation!==t&&this.updateAnimation(this.playerAnimation,t),this.equipRifle=e}setTargets(e){this.weapon.targets=e}changeCamera(e){if(!e)Qe.changeShoulder(this.aiming,this.equipRifle);else if(!this.hitting){const t=this.equipRifle&&!this.aiming||!Qe.isFPS&&this.aiming;Qe.changeView(this.running,this.aiming,this.equipRifle),!Qe.isFPS&&this.resetRotation(),this.toggleVisibility(),setTimeout(()=>{const i=!this.moving&&!t;Z.dispatch("Player::Aim",i,!0)},+t*300)}}resetRotation(e=!1){if(e){const t=this.mesh,i=new wi().setFromAxisAngle(Ui.RIGHT,this.rotation.y);this.modelRotation.copy(t.quaternion),this.modelRotation.multiply(i),ve({targets:t.quaternion,easing:"easeInOutQuad",...this.modelRotation,duration:500})}else if(this.rotation.y<-.2){const t=this.rotation.y+.2;this.mesh.rotateOnAxis(Ui.RIGHT,t)}}toggleMesh(e){Qe.isFPS&&this.equipRifle&&this.meshes.forEach(t=>t.material.opacity=+e)}toggleVisibility(){const e=+Qe.isFPS*250,t=+Qe.isFPS*150+250;this.weapon.toggleVisibility(e,t);const i=!(Qe.isFPS&&this.equipRifle&&!this.aiming);this.meshes.forEach(n=>{ve({targets:n.material,delay:e,easing:"linear",duration:100,opacity:0}),i&&setTimeout(()=>ve({targets:n.material,easing:"linear",duration:100,opacity:1}),t)})}changeWeapon(){if(!this.hasRifle||this.blockingAnimation)return;const e=!this.moving&&this.equipRifle;Z.dispatch("Player::Aim",e,!0),this.toggleMesh(!0),this.equipRifle?this.setPistol():this.setRifle(),Qe.updateNearPlane(this.aiming,this.equipRifle,this.running)}addRifle(e){this.rifle=e,this.rifle.toggle=!1,this.rifle.dummy.visible=!1,this.hand?.add(this.rifle.object),this.spine.add(this.rifle.dummy),this.updateRiflePosition(!0)}pickRifle(){this.rifle.dummy.visible=!this.equipRifle,this.updateRiflePosition(),this.rifle.addAmmo(),this.hasRifle||(this.rifle.addAmmo(0),this.hasRifle=!0)}updateRiflePosition(e=!1){const t=+this.running*.5+ +this.moving;e?this.rifle.append(t):this.rifle.updatePosition(t)}update(e){super.update(e),this.shooting&&this.startShooting()}updateAnimation(e,t,i=.1){return super.updateAnimation(e,t,i)}dispose(){clearTimeout(this.reloadTimeout),clearTimeout(this.animTimeout),clearTimeout(this.aimTimeout),this.pistol?.dispose(),this.weapon.dispose(),this.rifle.dispose(),delete this.pistol,delete this.hand,super.dispose()}die(){super.die();const e=+Qe.isFPS*500;Qe.isFPS&&this.changeCamera(!0),this.updateAnimation("Idle","death",.5),Z.dispatch("Player::Death",!0),Z.dispatch("Player::Aim",!1,!0),setTimeout(()=>Z.dispatch("Game::Quit",void 0,!0),e+5e3),clearTimeout(this.reloadTimeout),Qe.deathAnimation(e),this.weapon.stopReloading(),this.reloading=!1,this.shooting=!1,this.aiming=!1}getHitAnimation(e){return`${this.currentWeapon}${e}Hit`}getWeaponAnimation(e){return`${this.currentWeapon}${e}`}get blockingAnimation(){return this.aiming||this.hitting||this.reloading||super.blockingAnimation}get movementAnimation(){const e=Kn.moves;let t=e[Rt.UP]?"Forward":e[Rt.DOWN]?"Backward":"";return!this.equipRifle&&!t?t=e[Rt.LEFT]?"Left":e[Rt.RIGHT]?"Right":t:this.equipRifle&&(t+=e[Rt.LEFT]?"Left":e[Rt.RIGHT]?"Right":""),t||"Idle"}get playerAnimation(){return this.lastAnimation.replace(this.currentWeapon,"")}get meshes(){return this.mesh.children[0].children[0].children}get location(){return{position:this.position,rotation:Vy(Math.atan2(-this.rotation.x,this.rotation.z))}}get currentWeapon(){return this.equipRifle?or.Rifle:or.Pistol}get spine(){return this.mesh.children[0].children[1].children[0]}};class MR{update=this.updateScreen.bind(this);callbacks=[];root;ratio=16/9;height=0;width=0;constructor(){typeof window<"u"&&(this.root=document.documentElement.style,this.root.setProperty("--ratio",`${this.ratio}`),window.addEventListener("resize",this.update,!1),this.updateScreen())}updateScreen(){this.width=window.innerWidth,this.height=window.innerHeight,this.width/this.height<this.ratio?this.height=this.width/this.ratio:this.width=this.height*this.ratio,this.root.setProperty("--height",`${this.height}px`),this.root.setProperty("--width",`${this.width}px`);for(let e=this.callbacks.length;e--;)this.callbacks[e](this.width,this.height)}addResizeCallback(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}removeResizeCallback(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){window.removeEventListener("resize",this.update,!1),this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}const mi=new MR;class bR{constructor(e,t,i=0,n=1/0){this.ray=new bd(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ju(e,this,i,t),i.sort(zm),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)ju(e[n],this,i,t);return i.sort(zm),i}}function zm(r,e){return r.distance-e.distance}function ju(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)ju(n[s],e,t,!0)}}class Gc extends Ni{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const g=[],y=i/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function x(){const b=new L,v=new L;let M=0;const S=(t-e)/i;for(let R=0;R<=s;R++){const w=[],T=R/s,D=T*(t-e)+e;for(let F=0;F<=n;F++){const P=F/n,U=P*l+a,z=Math.sin(U),j=Math.cos(U);v.x=D*z,v.y=-T*i+y,v.z=D*j,u.push(v.x,v.y,v.z),b.set(z,S,j).normalize(),d.push(b.x,b.y,b.z),f.push(P,1-T),w.push(m++)}g.push(w)}for(let R=0;R<n;R++)for(let w=0;w<s;w++){const T=g[w][R],D=g[w+1][R],F=g[w+1][R+1],P=g[w][R+1];h.push(T,D,P),h.push(D,F,P),M+=6}c.addGroup(p,M,0),p+=M}function _(b){const v=m,M=new Pe,S=new L;let R=0;const w=b===!0?e:t,T=b===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,y*T,0),d.push(0,T,0),f.push(.5,.5),m++;const D=m;for(let F=0;F<=n;F++){const U=F/n*l+a,z=Math.cos(U),j=Math.sin(U);S.x=w*j,S.y=y*T,S.z=w*z,u.push(S.x,S.y,S.z),d.push(0,T,0),M.x=z*.5+.5,M.y=j*.5*T+.5,f.push(M.x,M.y),m++}for(let F=0;F<n;F++){const P=v+F,U=D+F;b===!0?h.push(U,U+1,P):h.push(U+1,U,P),R+=3}c.addGroup(p,R,b===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gd extends Gc{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Gd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const qu=[{bullet:!0,bulletPath:!1,bulletHoles:!1,fog:!0,volumetricFog:!1,raining:!0,raindrops:!1,softParticles:!1,clouds:0,dynamicClouds:!1,lighting:!1,physicalLights:!1},{bullet:!0,bulletPath:!1,bulletHoles:!0,fog:!1,volumetricFog:!1,raining:!0,raindrops:!0,softParticles:!1,clouds:300,dynamicClouds:!0,lighting:!0,physicalLights:!1},{bullet:!0,bulletPath:!0,bulletHoles:!0,fog:!0,volumetricFog:!0,raining:!0,raindrops:!0,softParticles:!0,clouds:1,dynamicClouds:!1,lighting:!0,physicalLights:!0}],cy=300,hy=0,uy=qu[hy],{length:wR}=Object.keys(uy),dc=wR;var Dt=(r=>(r[r.LOW=dc+0]="LOW",r[r.MEDIUM=dc+1]="MEDIUM",r[r.HIGH=dc+2]="HIGH",r))(Dt||{});class $e{static visuals=$e.getDefaultVisualValues();constructor(){this.openDBConnection(this.getEnviromentSettings.bind(this))}updateVisualsStore(e,t=!0,i=uy){const n=e.transaction("Visuals","readwrite"),s=n.objectStore("Visuals");for(const o in i){const a=o;$e.visuals.set(a,i[a]),s[t?"add":"put"](i[a],a).onerror=this.onQueryError.bind(this)}n.oncomplete=this.onTransactionComplete.bind(this,e,!1)}getEnviromentSettings(e,t=!1){const i=e.transaction("Visuals","readonly"),n=i.objectStore("Visuals");n.openCursor().onsuccess=s=>{const o=s.target.result;if(!o)return t?null:this.updateVisualsStore(e);const a=o.key;$e.visuals.set(a,o.value),o.continue(),t=!0},i.oncomplete=this.onTransactionComplete.bind(this,e,!0)}updateVisualValues(e){this.openDBConnection(t=>this.updateVisualsStore(t,!1,e))}onTransactionComplete(e,t){t&&Z.dispatch("Game::SettingsInit"),e.close()}onUpgradeNeeded(e){e.target.result.createObjectStore("Visuals")}openDBConnection(e){const t=indexedDB.open("YAZH");t.onerror=this.onRequestError.bind(this),t.onupgradeneeded=this.onUpgradeNeeded.bind(this),t.onsuccess=i=>{const n=i.target.result;e(n)}}resetVisualValues(e){this.updateVisualValues(qu[e])}onRequestError(e){console.error("Settings DB Request Error:",e)}onQueryError(e){console.error("Settings DB Query Error:",e)}static getDefaultVisualValues(e=hy){return new Map(Object.entries(qu[e]))}static getVisualValue(e){return $e.visuals.get(e)}static getVisualValues(){return $e.visuals}}const SR=10;class TR{constructor(e){this.config=e,this.acceleration=e.speed*So,this.speed=1/this.acceleration,this.createBullet()}bullet;speed;width=1;height=.3;radius=.1;segments=8;acceleration;rotation=new wi;pivot=new ct().makeTranslation(0,this.width*-.5,0);async createBullet(){const e=await Je.Loader.loadTexture("bullet.png");this.bullet=new St(new Gd(this.radius,this.height,this.segments),new Rd({map:e})),this.bullet.scale.setScalar(this.config.scale),$e.getVisualValue("bulletPath")&&this.bullet.add(await this.createPath())}async createPath(){const e=this.radius*1.2,t=await Je.Loader.loadShader("main.vert"),i=await Je.Loader.loadShader("shot/bullet.frag"),n=new St(new Gc(e,e,this.width,this.segments,1,!0),new ln({uniforms:{color:{value:new ze(Tt.WHITE)},traces:{value:0},time:{value:0}},fragmentShader:i,vertexShader:t,glslVersion:Do,transparent:!0,depthWrite:!1,side:gn}));return n.geometry.applyMatrix4(this.pivot),n.position.y-=this.height/2,n.scale.y=0,n}shoot(e,t){const i=this.config.position.z,{lifeTime:n}=this.config,s=this.bullet.clone(),o=+!t*.01+.01;return s.userData.direction=e.direction.clone(),s.userData.lifeTime=Date.now()+n,Z.dispatch("Level::AddObject",s),Yt.getWorldQuaternion(this.rotation),s.userData.direction.y+=o,s.quaternion.copy(this.rotation),s.position.copy(e.origin),s.rotateX(-1.56),s.translateY(i),s}update(e){const t=e.children[0];if(e.position.addScaledVector(e.userData.direction,this.acceleration),e.rotateY(.5),!t)return;const i=t.material;t.scale.y>=SR?i.uniforms.time.value+=.1:i.uniforms.traces.value=t.scale.y+=this.acceleration}dispose(){const e=this.bullet.material,t=this.bullet.children[0];t?.material?.dispose(),this.bullet.geometry.dispose(),e.map?.dispose(),t?.geometry.dispose(),e.dispose(),this.bullet.clear()}}class AR extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const km=new ct,$u=new bd,ec=new ko,tc=new L;class dy extends _t{constructor(e=new Ni,t=new AR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(n),ec.radius+=s,e.ray.intersectsSphere(ec)===!1)return;km.copy(n).invert(),$u.copy(e.ray).applyMatrix4(km);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const y=c.getX(m);tc.fromBufferAttribute(u,y),Om(tc,y,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)tc.fromBufferAttribute(u,m),Om(tc,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Om(r,e,t,i,n,s,o){const a=$u.distanceSqToPoint(r);if(a<t){const l=new L;$u.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class fc{constructor(e=Zv){this.lerp=e}length=0;points=[];addPoint(e,t){this.length=this.points.push([e,t])}getValue(e){let t=0;for(let n=0;n<this.length&&!(this.points[n][0]>=e);n++)t=n;const i=Math.min(this.length-1,t+1);return t===i?this.points[t][1]:this.lerp(this.points[t][1],this.points[i][1],(e-this.points[t][0])/(this.points[i][0]-this.points[t][0]))}dispose(){this.length=this.points.length=0}}const ER=Math.tan(et.d6)*2,RR=[0,0,0];class CR{constructor(e,t,i){this.config=e,this.geometry=new Ni,this.createFireLight(t),this.createParticleGeometry(),this.createParticles(t,i)}smokeParticles=[];fireParticles=[];smokeAlpha=new fc;smokeSize=new fc;fireAlpha=new fc;material;light;geometry;lightPower=0;createFireLight(e){const{intensity:t,position:{x:i,y:n}}=this.config,s=+$e.getVisualValue("physicalLights")+1;this.light=new d0(Tt.FIRE,t*(3-s),1,s),this.lightPower=this.light.power,this.light.position.set(i,n,0),this.light.castShadow=!0,this.light.power=0,e.add(this.light)}createParticleGeometry(){this.geometry.setAttribute("smokeAngle",new tt([],1)),this.geometry.setAttribute("smokeAlpha",new tt([],1)),this.geometry.setAttribute("smokeSize",new tt([],1)),this.geometry.setAttribute("fireAngle",new tt([],1)),this.geometry.setAttribute("fireSize",new tt([],1)),this.geometry.setAttribute("position",new tt([],3)),this.geometry.setAttribute("blend",new Bh([],1)),this.fireAlpha.addPoint(0,0),this.fireAlpha.addPoint(.2,1),this.fireAlpha.addPoint(.5,1),this.fireAlpha.addPoint(1,0),this.smokeAlpha.addPoint(0,0),this.smokeAlpha.addPoint(.1,.1),this.smokeAlpha.addPoint(.5,.1),this.smokeAlpha.addPoint(1,0),this.smokeSize.addPoint(0,0),this.smokeSize.addPoint(.8,this.config.scale*.1),this.smokeSize.addPoint(1,this.config.scale*.12)}async createParticles(e,t){const i=await Je.Loader.loadTexture(`${t}/smoke.png`),n=await Je.Loader.loadTexture(`${t}/fire.png`),s=await Je.Loader.loadShader("shot/fire.vert"),o=await Je.Loader.loadShader("shot/fire.frag");this.material=new ln({blendDst:_d,blendEquation:ar,blending:Zg,fragmentShader:o,vertexShader:s,blendSrc:Jg,glslVersion:Do,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{smoke:{value:i},ratio:{value:null},fire:{value:n}}});const a=new dy(this.geometry,this.material);a.position.x=this.config.position.x,a.position.y=this.config.position.y,a.renderOrder=2,e.add(a)}addParticles(){this.addFireParticle(),this.addSmokeParticles()}addFireParticle(){const e=Math.random()*.1+.1,t=this.config.scale*(Math.random()*.1+.15);this.fireParticles.push({rotation:Math.random()*et.m2,currentSize:t,maxLife:e,life:e,size:t,blend:0,alpha:0})}addSmokeParticles(){const[e,t]=this.config.particles,i=Nc(e,t);for(let n=i;n--;){const s=this.config.velocity*(i-n),o=Math.random()*.1+.4,a=this.config.scale*o;this.smokeParticles.push({rotation:Math.random()*et.m2,position:new L,currentSize:0,life:a,velocity:s,maxLife:a,blend:1,alpha:0})}}update(){this.updateParticles();const{length:e}=this.fireParticles;return this.light.power=e*this.lightPower,e?this.updateFireGeometry():this.updateSmokeGeometry(),!!(e||this.smokeParticles.length)}updateParticles(e=So){for(let t=this.fireParticles.length;t--;){const i=this.fireParticles[t];if((i.life-=.05)<=0)continue;const n=1-i.life/i.maxLife,s=this.fireAlpha.getValue(n);i.currentSize=i.size*s,i.alpha=s,i.rotation+=.025}this.fireParticles=this.fireParticles.filter(t=>t.life>0);for(let t=this.smokeParticles.length;t--;){const i=this.smokeParticles[t];if((i.life-=.01)<=0)continue;const n=1-i.life/i.maxLife;i.currentSize=this.smokeSize.getValue(n),i.alpha=this.smokeAlpha.getValue(n);const s=(t%2*2-1)*e,o=i.velocity*e;i.rotation+=s,i.position.y+=o,i.velocity-=o}this.smokeParticles=this.smokeParticles.filter(t=>t.life>0)}updateFireGeometry(){const e=[],t=[],i=[];for(let n=this.fireParticles.length;n--;){const s=this.fireParticles[n];e.push(s.rotation),i.push(s.currentSize),t.push(s.blend)}this.geometry.setAttribute("fireAngle",new tt(e,1)),this.geometry.setAttribute("fireSize",new tt(i,1)),this.geometry.setAttribute("position",new tt(RR,3)),this.geometry.setAttribute("blend",new Bh(t,1)),this.geometry.attributes.fireAngle.needsUpdate=!0,this.geometry.attributes.fireSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}updateSmokeGeometry(){const e=[],t=[],i=[],n=[],s=[];for(let o=this.smokeParticles.length;o--;){const a=this.smokeParticles[o],{x:l,y:c,z:h}=a.position;t.push(a.rotation),s.push(a.currentSize),i.push(a.alpha),n.push(a.blend),e.push(l,c,h)}this.geometry.setAttribute("smokeAngle",new tt(t,1)),this.geometry.setAttribute("smokeAlpha",new tt(i,1)),this.geometry.setAttribute("smokeSize",new tt(s,1)),this.geometry.setAttribute("position",new tt(e,3)),this.geometry.setAttribute("blend",new Bh(n,1)),this.geometry.attributes.smokeAngle.needsUpdate=!0,this.geometry.attributes.smokeAlpha.needsUpdate=!0,this.geometry.attributes.smokeSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}resize(e){this.material.uniforms.ratio.value=e/ER}dispose(){this.material.uniforms.smoke.value.dispose(),this.material.uniforms.fire.value.dispose(),this.smokeParticles.splice(0),this.fireParticles.splice(0),this.smokeAlpha.dispose(),this.smokeSize.dispose(),this.fireAlpha.dispose(),this.geometry.dispose(),this.material.dispose(),this.light.dispose()}}class PR extends wn{constructor(e,t,i,n){super();const s=[],o=[],a=[],l=new I,c=new Le;c.makeRotationFromEuler(i),c.setPosition(t);const h=new Le;h.copy(c).invert(),u(),this.setAttribute("position",new ts(s,3)),this.setAttribute("normal",new ts(o,3)),this.setAttribute("uv",new ts(a,2));function u(){let g=[];const y=new I,p=new I,x=e.geometry,_=x.attributes.position,b=x.attributes.normal;if(x.index!==null){const v=x.index;for(let M=0;M<v.count;M++)y.fromBufferAttribute(_,v.getX(M)),p.fromBufferAttribute(b,v.getX(M)),d(g,y,p)}else for(let v=0;v<_.count;v++)y.fromBufferAttribute(_,v),p.fromBufferAttribute(b,v),d(g,y,p);g=f(g,l.set(1,0,0)),g=f(g,l.set(-1,0,0)),g=f(g,l.set(0,1,0)),g=f(g,l.set(0,-1,0)),g=f(g,l.set(0,0,1)),g=f(g,l.set(0,0,-1));for(let v=0;v<g.length;v++){const M=g[v];a.push(.5+M.position.x/n.x,.5+M.position.y/n.y),M.position.applyMatrix4(c),s.push(M.position.x,M.position.y,M.position.z),o.push(M.normal.x,M.normal.y,M.normal.z)}}function d(g,y,p){y.applyMatrix4(e.matrixWorld),y.applyMatrix4(h),p.transformDirection(e.matrixWorld),g.push(new Vm(y.clone(),p.clone()))}function f(g,y){const p=[],x=.5*Math.abs(n.dot(y));for(let _=0;_<g.length;_+=3){let b=0,v,M,S,R;const w=g[_+0].position.dot(y)-x,T=g[_+1].position.dot(y)-x,D=g[_+2].position.dot(y)-x,F=w>0,P=T>0,U=D>0;switch(b=(F?1:0)+(P?1:0)+(U?1:0),b){case 0:{p.push(g[_]),p.push(g[_+1]),p.push(g[_+2]);break}case 1:{if(F&&(v=g[_+1],M=g[_+2],S=m(g[_],v,y,x),R=m(g[_],M,y,x)),P){v=g[_],M=g[_+2],S=m(g[_+1],v,y,x),R=m(g[_+1],M,y,x),p.push(S),p.push(M.clone()),p.push(v.clone()),p.push(M.clone()),p.push(S.clone()),p.push(R);break}U&&(v=g[_],M=g[_+1],S=m(g[_+2],v,y,x),R=m(g[_+2],M,y,x)),p.push(v.clone()),p.push(M.clone()),p.push(S),p.push(R),p.push(S.clone()),p.push(M.clone());break}case 2:{F||(v=g[_].clone(),M=m(v,g[_+1],y,x),S=m(v,g[_+2],y,x),p.push(v),p.push(M),p.push(S)),P||(v=g[_+1].clone(),M=m(v,g[_+2],y,x),S=m(v,g[_],y,x),p.push(v),p.push(M),p.push(S)),U||(v=g[_+2].clone(),M=m(v,g[_],y,x),S=m(v,g[_+1],y,x),p.push(v),p.push(M),p.push(S));break}}}return p}function m(g,y,p,x){const _=g.position.dot(p)-x,b=y.position.dot(p)-x,v=_/(_-b);return new Vm(new I(g.position.x+v*(y.position.x-g.position.x),g.position.y+v*(y.position.y-g.position.y),g.position.z+v*(y.position.z-g.position.z)),new I(g.normal.x+v*(y.normal.x-g.normal.x),g.normal.y+v*(y.normal.y-g.normal.y),g.normal.z+v*(y.normal.z-g.normal.z)))}}}class Vm{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class LR{orientation=new Sn;rotation=new ct;position=new L;holes=[];origin=new L;scale=new L;material;surface=["defaultMaterial002_24","defaultMaterial002_39"];constructor(e,t){this.scale.setScalar(t*.5),Je.Loader.loadTexture(`${e}/hole.png`).then(i=>{this.material=new I0({polygonOffsetFactor:-.1,polygonOffset:!0,transparent:!0,depthWrite:!1,depthTest:!0,map:i})})}show(e){if(this.surface.includes(e.object.name))return;this.position.copy(e.point),this.origin.copy(this.position),this.origin.add(e.face.normal),this.rotation.lookAt(this.origin,this.position,Ui.UP),this.orientation.setFromRotationMatrix(this.rotation),this.orientation.z=Math.random()*et.m2;const t=new PR(e.object,e.point,this.orientation,this.scale);this.holes.push(new St(t,this.material.clone()));const i=this.holes.length-1,n=this.holes[i];Z.dispatch("Level::AddObject",n),ve({complete:this.remove.bind(this,i),targets:n.material,easing:"linear",duration:1e3,opacity:0,delay:5e3})}remove(e){if(!this.holes[e])return;const t=this.holes[e];t.material.map?.dispose(),t.material.dispose(),t.geometry.dispose(),delete this.holes[e],Z.dispatch("Level::RemoveObject",t)}dispose(){for(let e=this.holes.length;e--;)this.remove(e);this.material.dispose(),this.holes.splice(0)}}class IR{raf;paused=!0;lastTime=0;callbacks=[];onUpdate=this.update.bind(this);add(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}update(e){this.raf=requestAnimationFrame(this.onUpdate);const t=e-(this.lastTime||0);for(let i=this.callbacks.length;i--;)this.callbacks[i](t,e);this.lastTime=e}remove(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){cancelAnimationFrame(this.raf),this.callbacks.length=0}set pause(e){this.paused!==e&&((this.paused=e)?cancelAnimationFrame(this.raf):this.raf=requestAnimationFrame(this.onUpdate))}}const Ct=new IR;class fy{constructor(e){this.config=e,$e.getVisualValue("bullet")&&(this.bullet=new TR(e.bullet)),this.magazine=e.magazine,this.loadedAmmo=e.ammo,this.totalAmmo=e.ammo}onUpdate=this.updateAimSign.bind(this);onShoot=this.updateBullets.bind(this);bullets=new Map;hits=[];raycaster=new bR;camera=new L;offset=new L;origin=new L;targets=[];magazine;walls=[];bullet;loadedAmmo;totalAmmo;weapon;aimed=!1;aiming=!1;fire;hole;async load(e){const{emissive:t=Tt.BLACK,emissiveIntensity:i=1}=this.config;this.weapon=(await Je.Loader.loadGLTF(this.config.model)).scene,this.weapon.traverse(s=>{const o=s,a=o.material;o.isMesh&&(o.castShadow=o.receiveShadow=!0,o.material=new Rd({emissiveIntensity:i,transparent:!0,map:a.map,side:an,roughness:.75,metalness:.25,emissive:t,envMap:e}))}),this.weapon.position.copy(this.config.position),this.weapon.rotation.copy(this.config.rotation),this.weapon.scale.copy(this.config.scale);const n=this.weapon.clone();return this.fire=new CR(this.config.fire,this.weapon,this.config.textures),$e.getVisualValue("bulletHoles")&&(this.hole=new LR(this.config.textures,this.config.bullet.scale)),n}playSound(e,t){const{stop:i,pistol:n,delay:s}=t;i&&this.stopSound(e,n),Z.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!0,sfx:e,delay:s,pistol:n},!0)}stopSound(e,t){Z.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!1,sfx:e,pistol:t},!0)}updateRaycaster(e=!0,t=this.targets){this.camera.setFromMatrixPosition(Yt.matrixWorld),this.raycaster.ray.origin.copy(e?this.camera.clone().add(this.spread):this.camera),this.raycaster.ray.direction.copy(Ui.FORWARD).unproject(Yt).sub(this.camera).normalize(),this.hits.splice(0)&&this.raycaster.intersectObjects(t,!1,this.hits)}toggleAimSign(e=!1){Z.dispatch("Weapon::Aim",e,!0),this.aimed=e}removeBullet(e){const t=this.bullets.get(e);t&&(t.clear(),this.bullets.delete(e),Z.dispatch("Level::RemoveObject",t))}getEvent(e){return e?e===1?"Hit::Body":"Hit::Leg":"Hit::Head"}updateAimSign(){if(!this.aiming)return this.aimed&&this.toggleAimSign(!1);this.updateRaycaster(!1);const e=!!this.hits.length;this.aimed!==e&&this.toggleAimSign(e)}startReloading(){}stopReloading(){}resize(e){this.fire?.resize(e)}addAmmo(){}animateRecoil(){const{x:e,y:t}=this.weapon.position,i=this.recoil;return ve({targets:this.weapon.rotation,easing:"easeInOutSine",direction:"alternate",z:i.y/5,duration:50}),ve({targets:this.weapon.position,easing:"easeInOutSine",direction:"alternate",y:t-i.y*7.5,x:e-i.y*15,duration:50}),i}updateBullets(){!this.fire.update()&&Ct.remove(this.onShoot),this.bullets.forEach((e,t)=>{Date.now()<e.userData.lifeTime?this.bullet.update(e):this.removeBullet(t)})}shoot(){if(this.empty)return this.playSound("empty",{stop:!1});const e=this.target,t=this.targets[e],i=this.animateRecoil();let n;if(!this.bullets.size&&Ct.add(this.onShoot),Z.dispatch("Player::Shoot",!0,!0),this.bullet){const{ray:h}=this.raycaster;n=this.bullet.shoot(h,this.aiming),this.bullets.set(n.uuid,n)}if(this.fire.addParticles(),this.loadedAmmo--,this.totalAmmo--,this.playSound("shoot",{stop:!0}),this.playSound("bullet",{stop:!1,delay:.5}),e<0)return this.updateRaycaster(!1,this.walls),this.hits.length&&this.hole?.show(this.hits[0]),i;const s=e%6,o=this.getEvent(s),a=!s&&Math.random()<this.config.headshot,l=a&&100||this.getDamage(s);n&&this.removeBullet(n.uuid);const{enemy:c}=t.userData;return Z.dispatch(o,{enemy:c,damage:l,headshot:a}),i}dispose(){this.bullets.forEach((e,t)=>{const i=e.children[0],n=e.material;i.material.dispose(),n.map?.dispose(),e.geometry.dispose(),n.dispose(),i.geometry.dispose(),this.removeBullet(t)}),Ct.remove(this.onUpdate),Ct.remove(this.onShoot),this.bullet?.dispose(),this.targets.splice(0),this.walls.splice(0),this.hole?.dispose(),this.weapon.clear(),this.fire.dispose()}set visible(e){Ct[e?"add":"remove"](this.onUpdate),this.weapon.children[0].visible=e}get originOffset(){const{x:e,y:t}=this.config.bullet.position;return this.aiming?t:e}get spread(){let{x:e,y:t}=this.config.spread;const i=+!this.aiming*.5+.5;return e=fi(-e,e)*i,t=fi(-t,t)*i,this.offset.set(e,t-.003,0)}get recoil(){const{x:e,y:t}=this.config.recoil,i=+!this.aiming*.5+.5;return{x:fi(-e,e)*i,y:t*i}}get target(){return this.updateRaycaster(),this.weapon.getWorldPosition(this.origin),this.origin.y+=this.originOffset,this.raycaster.ray.origin.copy(this.origin),this.hits.length?this.targets.indexOf(this.hits[0].object):-1}get inStock(){return this.totalAmmo-this.loadedAmmo}get empty(){return!this.loadedAmmo}get full(){return this.loadedAmmo===this.magazine}get object(){return this.weapon}}class DR extends fy{position=ue.Pistol.position;rotation=ue.Pistol.rotation;damage=ue.Gameplay.damage.pistol;constructor(e){super(ue.Pistol),this.load(e)}playSound(e,t){super.playSound(e,{...t,pistol:!0})}stopSound(e){super.stopSound(e,!0)}setAim(){ve({targets:this.object.rotation,y:this.rotation.y+.015,x:this.rotation.x,easing:"linear",duration:200,delay:200,z:-.06}),ve({targets:this.object.position,x:this.position.x,z:this.position.z,easing:"linear",duration:200,delay:200,y:-4.45})}cancelAim(e){ve({targets:this.object.rotation,x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,easing:"linear",duration:e}),ve({targets:this.object.position,x:this.position.x,y:this.position.y,z:this.position.z,easing:"linear",duration:e})}toggleVisibility(e,t,i=100){this.object.children[0].children.forEach(n=>{const{material:s}=n;ve({targets:s,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>ve({targets:s,easing:"linear",opacity:1,duration:i}),t)})}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}dispose(){super.dispose()}}class FR extends fy{spinePosition=ue.Rifle.spinePosition;spineRotation=ue.Rifle.spineRotation;position=ue.Rifle.position;rotation=ue.Rifle.rotation;damage=ue.Gameplay.damage.rifle;maxStock=ue.Rifle.maxStock;appended=!1;spawned=!1;clone;spine;constructor(e){super(ue.Rifle),this.load(e)}async load(e){const t=await super.load(e);return this.spine=t.clone(),t.scale.copy(ue.Rifle.worldScale),Z.dispatch("Level::AddObject",t),t.rotation.set(0,0,0),t.visible=!1,this.clone=t,t}setAim(){this.object.rotation.set(this.rotation.x-.1,Math.PI-.028,-.1),this.object.position.set(this.position.x,-1,-2)}cancelAim(){ve({targets:this.object.rotation,easing:"easeInOutSine",x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,duration:50,delay:50}),ve({targets:this.object.position,easing:"easeInOutSine",x:this.position.x,y:this.position.y,z:this.position.z,duration:50,delay:50})}toggleVisibility(e,t,i=100){const{material:n}=this.object.children[0];ve({targets:n,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>ve({targets:n,easing:"linear",opacity:1,duration:i}),t)}addAmmo(e=ue.Rifle.magazine){if(e){this.playSound("pick",{stop:!1});const t=Math.min(this.inStock+e,this.maxStock);this.totalAmmo=t+ +!this.empty*this.loadedAmmo}else{const t=Math.min(Math.min(this.magazine-this.loadedAmmo,this.magazine),this.totalAmmo);this.loadedAmmo+=t,Z.dispatch("Weapon::Reload",{loaded:this.loadedAmmo,inStock:this.inStock,ammo:this.totalAmmo})}}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}startReloading(){this.object.position.set(this.position.x,this.position.y,0),this.object.rotation.set(this.rotation.x,this.rotation.y,0),this.playSound("reload",{stop:!0})}stopReloading(){!this.aiming&&this.reset()}update(e){if(!this.spawned)return;this.clone.rotation.y-=.025;const t=this.clone.position.distanceToSquared(e);this.inStock<this.maxStock&&t<6.25&&(Z.dispatch("Player::PickRifle",this.clone),Z.dispatch("Rifle::Pick",null,!0),this.clone.visible=!1,this.spawned=!1)}spawn(e){this.clone.position.set(e[0],1.75,e[1]),Z.dispatch("Rifle::Spawn",e,!0),this.clone.visible=!0,this.spawned=!0}updatePosition(e){this.appended&&ve({targets:this.spine.position,duration:+!e*100,x:e*10-10,easing:"linear"})}append(e){this.spine.position.copy(this.spinePosition),this.spine.rotation.copy(this.spineRotation),this.appended=!0,this.updatePosition(e)}reset(){this.object.position.copy(this.position),this.object.rotation.copy(this.rotation),this.appended=!1}dispose(){this.clone.clear(),super.dispose()}set toggle(e){this.spine.visible=!e,this.visible=e}get onStage(){return this.spawned}get dummy(){return this.spine}}class Qn{fps=!1;runTimeout=0;runDelta;shakeDuration=0;rightShoulder=!0;position=new L;static state;shakePower=.025;clock=new zc;shakeAttenuation=1;camera;onRunning=this.run.bind(this);fpRifleAim=new L(-.1541,1.524,.5);constructor(){const e=mi.size.ratio;this.camera=new di(45,e,+this.fps*.215+.1),this.camera.far=ue.Level.depth,this.setCamera(),this.updateState()}setCamera(){const e=this.getPosition(),t=+!this.fps*2.5+22.5;this.camera.rotation.set(0,Math.PI,0),this.camera.setFocalLength(t),this.camera.position.copy(e)}updateState(){const{aspect:e,near:t,far:i,fov:n}=this.camera;Qn.state={matrix:this.camera.matrixWorld,aspect:e,near:t,far:i,fov:n}}getPosition(e=!1,t=!1,i=!1){if(this.fps&&t&&i)return this.fpRifleAim;const{idle:n,run:s,aim:o}=ue.Camera[this.fps?"fps":"tps"];return this.position.copy(e?s:t?o:n),this.position.x-=+(!this.fps&&this.rightShoulder&&t&&i)*.125,this.position.x*=+(!this.fps&&!this.rightShoulder)*-2+1,this.position}changeView(e,t,i){this.fps=!this.fps,this.updateNearPlane(t,i);const{x:n,y:s,z:o}=this.getPosition(e,t,i);ve({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:n,y:s,z:o})}updateNearPlane(e,t,i){const s=+(this.camera.near===.5)*-300+400,o=e?.03:this.fps?t?.5:.315:.1;this.fps&&i&&t&&(this.camera.position.z=.2),this.camera.near!==o&&this.setNearPlane(o,s)}setNearPlane(e,t){ve({complete:()=>this.camera.updateProjectionMatrix(),update:()=>this.camera.updateProjectionMatrix(),targets:this.camera,easing:"linear",duration:t,near:e})}changeShoulder(e,t){if(this.fps)return;let{x:i}=this.camera.position;this.rightShoulder=!this.rightShoulder,e&&t&&(i=ue.Camera.tps.aim.x,i-=+this.rightShoulder*.125,i*=+this.rightShoulder*-2+1),ve({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:-i})}aimAnimation(e,t,i=400){const{x:n,y:s,z:o}=this.getPosition(!1,e,t);e&&Ct.remove(this.onRunning),e&&ve({targets:this.camera.rotation,easing:"linear",duration:250,y:Math.PI}),ve({targets:this.camera.position,easing:"easeInOutQuad",delay:+e*100,duration:i,x:n,y:s,z:o})}headAnimation(e,t){const{x:i,y:n,z:s}=this.camera.position,{x:o,y:a,z:l}=this.camera.rotation,c={x:0,y:0,z:0},h={x:0,y:0,z:0};switch(e){case"Front":c.y=.2,h.x=-.2;break;case"Left":c.x=-.5,c.y=.5,h.x=.5,h.y=-1;break;case"Right":c.x=.36,c.y=-.2,h.x=.5,h.y=.55;break}ve({targets:this.camera.position,direction:"alternate",easing:"easeOutSine",duration:t,x:i+c.x,y:n+c.y,z:s+c.z}),ve({targets:this.camera.rotation,direction:"alternate",easing:"easeOutSine",duration:t,x:o+h.x,y:a+h.y,z:l+h.z})}shakeAnimation(e){if(this.shakeDuration=Math.max(e,0),this.shakeDuration){const t=this.clock.getDelta(),i=Ui.random().multiplyScalar(this.shakePower);setTimeout(()=>this.shakeAnimation(this.shakeDuration),t),this.shakeDuration-=t*this.shakeAttenuation,this.camera.position.add(i)}else this.camera.position.copy(this.getPosition())}runAnimation(e){if(e&&this.runTimeout)return;this.runTimeout=e?setTimeout(()=>Ct.add(this.onRunning),500):this.dispose();const t=this.getPosition(e),{x:i,y:n,z:s}=t;this.runDelta=0,!this.camera.position.equals(t)&&ve({targets:this.camera.position,easing:"easeOutQuad",duration:300,x:i,y:n,z:s})}run(){this.runDelta+=.25;const e=+this.fps+1,t=Math.sin(this.runDelta),i=Math.cos(this.runDelta/2);this.camera.position.y+=t*e/100,this.camera.rotation.y-=i*e/500}deathAnimation(e){const{x:t,z:i}=ue.Camera.tps.idle;ve({targets:this.camera.position,easing:"easeInOutQuad",duration:500,z:i-1,y:.75,delay:e,x:t})}setTo(e){e.add(this.camera)}resize(){this.camera.updateProjectionMatrix()}dispose(){return clearTimeout(this.runTimeout),Ct.remove(this.onRunning),0}static get config(){return Qn.state}get object(){return this.camera}get isFPS(){return this.fps}}const py=new Qn,Yt=py.object,Qe=py,du=new Le;class Wc{constructor(e){e=e||{},this.vertices={near:[new I,new I,new I,new I],far:[new I,new I,new I,new I]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return du.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(n){n.applyMatrix4(du)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(n){n.applyMatrix4(du);const s=Math.abs(n.z);i?n.z*=Math.min(t/s,1):n.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new Wc);t.length=e.length;for(let i=0;i<e.length;i++){const n=t[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const Hm=new Le,fu=new Wc,jn=new I,ma=new ai,pu=[],mu=[],gu=new Le,Gm=new Le,UR=new I(0,1,0);class NR{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new I(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Wc,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new $g(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const n=this.lights[t].shadow.camera,s=this.frustums[t],o=s.vertices.near,a=s.vertices.far,l=a[0];let c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),m=.25*Math.pow(f,2)*(d-u.near);h+=m}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":n(this.cascades,e.near,t,this.breaks);break;case"practical":s(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(o,a,l,c){for(let h=1;h<o;h++)c.push((a+(l-a)*h/o)/l);c.push(1)}function n(o,a,l,c){for(let h=1;h<o;h++)c.push(a*(l/a)**(h/o)/l);c.push(1)}function s(o,a,l,c,h){pu.length=0,mu.length=0,n(o,a,l,mu),i(o,a,l,pu);for(let u=1;u<o;u++)h.push(Lg.lerp(pu[u-1],mu[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;gu.lookAt(new I,this.lightDirection,UR),Gm.copy(gu).invert();for(let i=0;i<t.length;i++){const n=this.lights[i],s=n.shadow.camera,o=(s.right-s.left)/this.shadowMapSize,a=(s.top-s.bottom)/this.shadowMapSize;Hm.multiplyMatrices(Gm,e.matrixWorld),t[i].toSpace(Hm,fu);const l=fu.vertices.near,c=fu.vertices.far;ma.makeEmpty();for(let h=0;h<4;h++)ma.expandByPoint(l[h]),ma.expandByPoint(c[h]);ma.getCenter(jn),jn.z=ma.max.z+this.lightMargin,jn.x=Math.floor(jn.x/o)*o,jn.y=Math.floor(jn.y/a)*a,jn.applyMatrix4(gu),n.position.copy(jn),n.target.position.copy(jn),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,n=this.shaders;e.onBeforeCompile=function(s){const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:o},n.set(e,s)},n.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){const s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=e}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new lt);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],n=this.breaks[t-1]||0;e[t].x=n,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}class Wd extends Ni{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,h=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class BR{coords=Ve.portals;position=new L;player=new L;offset=new Pe;triggers=this.coords.filter((e,t)=>!(t%2)).map((e,t,i)=>e[0]+(+(t<i.length/2)*-2+1)*-.1);material;constructor(){this.createPortals()}async createPortals(){await this.createMaterial();for(let e=0,t=0;t<this.triggers.length;e+=2,t++){const i=this.coords[e][1],n=this.coords[e+1][1],s=Math.abs(i-n)/2,o=+(t<2)*2-1,a=s+.52,l=new St(new Wd(a,32,0,Math.PI),this.material);l.renderOrder=1,l.position.x=this.triggers[t],l.rotation.y=et.d2*o,l.position.z=i+s*-o,l.position.z+=ue.Level.portalsOffset[t],Z.dispatch("Level::AddObject",l)}}async createMaterial(){const e=await Je.Loader.loadShader("portal/main.vert"),t=await Je.Loader.loadShader("portal/main.frag"),i=$e.getVisualValue("volumetricFog"),n=new ze(Tt.PORTAL),s=new ze(Tt.MOON),o=ue.Level.fogDensity*(+!i*4+1);return this.material=new ln({uniforms:{fogColor:{value:new ze(Tt.FOG)},backgroundColor:{value:n},spikesColor:{value:s},fogDensity:{value:o},deltaTime:{value:0}},fragmentShader:t,vertexShader:e,glslVersion:Do,transparent:!0}),this.material.defines={VOLUMETRIC_FOG:i},this.material.fog=$e.getVisualValue("fog"),this.material}topPortalArea(){if(this.player.z>this.coords[1][1]){if(this.player.x<=this.triggers[0])return this.offset.set(this.coords[0][0]-this.player.x,this.coords[0][1]-this.player.z),this.updatePosition(2,3),!0;if(this.player.x>=this.triggers[3])return this.offset.set(this.player.x-this.coords[6][0],this.coords[7][1]-this.player.z),this.updatePosition(4),!0}return!1}bottomPortalArea(){if(this.player.z<this.coords[2][1]){if(this.player.x<=this.triggers[1])return this.offset.set(-(this.coords[2][0]-this.player.x),this.coords[2][1]-this.player.z),this.updatePosition(0,1),!0;if(this.player.x>=this.triggers[2])return this.offset.set(this.player.x-this.coords[4][0],this.coords[5][1]-this.player.z),this.updatePosition(6),!0}return!1}updatePosition(e,t=e){const i=this.coords[e][0],n=Math.sign(i)*-.3;this.position.set(this.coords[e][0]-this.offset.x+n,this.player.y,this.coords[t][1]+this.offset.y)}update(e){this.material.uniforms.deltaTime.value+=e/10}portalPassed(e){return this.player.copy(e),this.topPortalArea()||this.bottomPortalArea()}setFogUniforms(e){this.material.onBeforeCompile=e}dispose(){this.material?.dispose(),this.triggers.splice(0)}get playerPosition(){return this.position}}const Wm=Math.tan(et.d3)*3;class zR{constructor(e,t,i){this.renderer=e,this.scene=t,this.worker=i,this.createRenderTargets(),this.createWorkerLoop(),this.createParticles()}minCoords=Ve.minCoords.map(e=>e-5);maxCoords=Ve.maxCoords.map(e=>e+5);geometry=new Ni;renderTargets;material;drops;delta=0;createRenderTargets(){if(!$e.getVisualValue("softParticles"))return;const{width:e,height:t}=this.renderer.domElement,i=new R0(e,t,fr);this.renderTargets=[new os(e,t),new os(e,t)],i.format=vr,i.minFilter=Ut,i.magFilter=Ut,this.renderTargets.forEach(n=>{n.depthTexture=i.clone(),n.texture.minFilter=Ut,n.texture.magFilter=Ut,n.texture.generateMipmaps=!1,n.texture.format=bi,n.stencilBuffer=!0,n.depthBuffer=!0})}async createParticles(){const{width:e,height:t}=this.renderer.domElement,i=await Je.Loader.loadShader("rain/main.vert"),n=await Je.Loader.loadShader("rain/main.frag");this.material=new ln({uniforms:{soft:{value:$e.getVisualValue("softParticles")},screenSize:{value:new Pe(e,t)},color:{value:new ze(Tt.RAIN)},ratio:{value:t/Wm},near:{value:Yt.near},far:{value:Yt.far},dropSize:{value:3},diffuse:{value:null},depth:{value:null}},blending:Au,fragmentShader:n,vertexShader:i,glslVersion:Do,transparent:!0,depthWrite:!1});const s=this.material.uniforms;this.drops=new dy(this.geometry,this.material),this.renderTargets&&(s.depth.value=this.renderTargets[0].depthTexture),Promise.all(ue.Level.rain.map(Je.Loader.loadTexture.bind(Je.Loader))).then(o=>s.diffuse.value=o),this.drops.frustumCulled=!1,this.drops.renderOrder=2,this.scene.add(this.drops)}createWorkerLoop(){this.worker?.add("Rain::UpdateParticles",e=>this.updateParticleGeometry(e.data),{minCoords:this.minCoords,maxCoords:this.maxCoords}),this.worker?.post("Rain::UpdateParticles",{camera:Yt.position,delta:this.delta})}update(e){if(this.delta=e,!this.worker&&this.updateParticles(),this.renderTargets){const t=this.renderTargets[0];this.material.uniforms.depth.value=t.depthTexture,this.material.uniforms.near.value=Yt.near,this.material.uniforms.far.value=Yt.far,this.renderer.setRenderTarget(this.renderTargets[1]),this.renderer.render(this.scene,Yt),this.renderTargets[0]=this.renderTargets[1],this.renderTargets[1]=t,this.renderer.setRenderTarget(null)}}updateParticles(){const e=this.minCoords,t=this.maxCoords;this.updateParticleGeometry(my({camera:Yt.position,minCoords:e,maxCoords:t,delta:this.delta}))}updateParticleGeometry(e){this.geometry.setAttribute("position",new tt(e[0],3)),this.geometry.setAttribute("angle",new tt(e[1],1)),this.geometry.setAttribute("alpha",new tt(e[2],1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.worker?.post("Rain::UpdateParticles",{camera:Yt.position,delta:this.delta})}resize(e,t){this.material&&(this.material.uniforms.ratio.value=t/Wm,this.material.uniforms.screenSize.value.set(e,t)),this.renderTargets?.forEach(i=>{i.depthTexture.needsUpdate=!0,i.texture.needsUpdate=!0,i.setSize(e,t)})}dispose(){if(this.material){const e=this.material.uniforms.diffuse;this.material.uniforms.depth.value?.dispose(),e.value?.forEach(i=>i.dispose())}this.worker?.remove("Rain::UpdateParticles"),this.renderTargets?.forEach(e=>{e.depthTexture.dispose(),e.texture.dispose(),e.dispose()}),this.minCoords.splice(0),this.maxCoords.splice(0),this.material?.dispose(),this.geometry.dispose(),this.drops?.clear(),this.delta=0}}class Xd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Xd(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class kR extends Xd{constructor(e){super(Tt.FOG,ue.Level.fogDensity*(+!e*4+1)),this.volumetric=e,this.volumetric&&(this.loadShaders(),$e.getVisualValue("volumetricFog")&&Je.Loader.loadTexture(ue.Level.fog).then(t=>this.noise=t))}shaders=[];noise;materials=0;time=0;async loadShaders(){const e=await Je.Loader.loadShader("fog/pars.frag"),t=await Je.Loader.loadShader("fog/pars.vert"),i=await Je.Loader.loadShader("fog/main.frag"),n=await Je.Loader.loadShader("fog/main.vert");Ie.fog_pars_fragment=e,Ie.fog_pars_vertex=t,Ie.fog_fragment=i,Ie.fog_vertex=n}setShaderUniforms(e){e.uniforms.noise={value:this.noise},e.uniforms.fogTime={value:0},this.shaders.push(e),this.materials=this.shaders.length}update(e){if(this.volumetric){this.time+=e*.025;for(let t=0;t<this.materials;t++)this.shaders[t].uniforms.fogTime.value=this.time}}dispose(){this.volumetric&&(this.shaders.splice(0),this.noise?.dispose(),this.materials=0)}get setUniforms(){return this.setShaderUniforms.bind(this)}}class Ve{objects=[];physicalLights;renderer;portals=new BR;clouds=new Zn;pmrem;scene=new Ed;rain;csm;fog;constructor(e,t,i){this.physicalLights=$e.getVisualValue("physicalLights");const n=$e.getVisualValue("raindrops");this.renderer=new Ad({powerPreference:"high-performance",preserveDrawingBuffer:n,antialias:!0,canvas:e}),Z.add("Level::RemoveObject",this.removeGameObject.bind(this)),Z.add("Level::AddObject",this.addGameObject.bind(this)),this.pmrem=new Nu(this.renderer),this.createColliders(),this.createEnvironment(i),this.createRenderer(t)}createColliders(){const{position:e,height:t,sidewalkHeight:i}=ue.Level;Mi.createGround(Ve.minCoords,Ve.maxCoords),Mi.createBounds({borders:Ve.bounds,y:e.y,height:t},{borders:ue.Level.sidewalk,y:i*.5,height:i})}async createEnvironment(e){const t=$e.getVisualValue("fog"),i=$e.getVisualValue("raining"),n=$e.getVisualValue("lighting"),s=t&&$e.getVisualValue("volumetricFog"),o=await this.createSkybox(ue.Level.skybox),a=await this.loadLevel(ue.Level.model);a.position.copy(ue.Level.position),a.scale.copy(ue.Level.scale),n&&this.scene.add(this.clouds.flash),i&&(this.rain=new zR(this.renderer,this.scene,e)),t?(this.fog=new kR(s),this.scene.fog=this.fog,this.scene.background=new ze(Tt.FOG),s&&this.portals.setFogUniforms(this.fog.setUniforms)):this.clouds.sky&&this.scene.add(this.clouds.sky),this.createLights(),a.traverse(c=>{const h=c,u=h.material;h.isMesh&&(u.opacity=1,u.alphaTest=1,u.side=an,u.envMap=o,h.renderOrder=1,this.objects.push(h),h.receiveShadow=!0,this.csm?.setupMaterial(u),this.fog&&s&&(u.onBeforeCompile=this.fog.setUniforms))});const l=this.getSceneEnvMap();Z.dispatch("Level::EnvMap",l)}async loadLevel(e){const t=await Je.Loader.loadGLTF(e);return this.scene.add(t.scene),t.scene}async createSkybox(e){const t=await Je.Loader.loadCubeTexture(e);return t.colorSpace=De,$e.getVisualValue("fog")||(this.scene.background=t),this.pmrem.compileCubemapShader(),this.pmrem.fromCubemap(t).texture}createLights(){const t=.25+ +!this.physicalLights*.1,i=new L(.925,-1.875,-1).normalize();this.scene.add(new C0(Tt.WHITE,.2)),this.csm=new NR({mode:"logarithmic",maxFar:Yt.far*10,lightFar:Yt.far,lightDirection:i,lightIntensity:t,camera:Yt,parent:this.scene,cascades:4}),this.csm.lights.forEach(n=>n.color.set(Tt.MOON)),this.csm.fade=!0}getSceneEnvMap(){return this.pmrem.fromScene(this.scene,0,Yt.near,Yt.far).texture}createRenderer(e){const t=+!this.physicalLights*.25+.25;this.renderer.debug.checkShaderErrors=!1,this.renderer.useLegacyLights=this.physicalLights,this.renderer.toneMapping=e0,this.renderer.outputColorSpace=De,this.renderer.shadowMap.type=Kg,this.renderer.setClearColor(Tt.BLACK,0),this.renderer.toneMappingExposure=t,this.renderer.setPixelRatio(e),this.renderer.shadowMap.enabled=!0}removeGameObject(e){const t=e.data;this.scene.remove(t)}addGameObject(e){const t=e.data;this.scene.add(t)}render(e){this.renderer.render(this.scene,Yt),this.portals.update(e),this.rain?.update(e),this.fog?.update(e),this.clouds.update(),this.csm?.update()}resize(e,t){this.renderer.setSize(e,t,!1),this.rain?.resize(e,t),this.csm?.updateFrustums()}outOfBounds(e){return this.portals.portalPassed(e)&&this.portals.playerPosition||null}dispose(){for(this.fog?.dispose(),this.csm?.dispose(),this.rain?.dispose(),this.pmrem.dispose(),this.clouds.dispose(),this.portals.dispose(),this.renderer.dispose(),this.csm?.lights.forEach(e=>e.dispose()),Z.remove("Level::AddObject"),Z.remove("Level::RemoveObject");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.background instanceof Oo&&this.scene.background.dispose()}static get maxCoords(){return[No(Ve.bounds.map(e=>e[0])),No(Ve.bounds.map(e=>e[1]))]}static get minCoords(){return[Ec(Ve.bounds.map(e=>e[0])),Ec(Ve.bounds.map(e=>e[1]))]}static get portals(){return ue.Level.portals}static get bounds(){return ue.Level.bounds}static get center(){return new L((Ve.maxCoords[0]+Ve.minCoords[0])/2,0,(Ve.maxCoords[1]+Ve.minCoords[1])/2)}static get size(){return new Pe(Ve.maxCoords[0]-Ve.minCoords[0],Ve.maxCoords[1]-Ve.minCoords[1])}set pause(e){this.clouds.pause=e}get walls(){return this.objects}}class Zn{count=$e.getVisualValue("clouds");staticClouds=!$e.getVisualValue("dynamicClouds");isLighting=$e.getVisualValue("lighting");useFog=$e.getVisualValue("fog");onShowLighting=this.showLighting.bind(this);onHideLighting=this.hideLighting.bind(this);rotation=new Sn(et.d2,0,0);matrix=new ct;timeout;clouds;lighting;paused=!0;constructor(){this.isLighting&&this.createLighting(),this.createClouds()}createLighting(){const e=+(!this.useFog&&$e.getVisualValue("physicalLights"))+1;this.lighting=new d0(Tt.BLUE,10,Zn.height,e),this.lighting.position.set(0,Zn.height,0),this.lighting.castShadow=!0,this.lighting.power=0}startLighting(){this.timeout=setTimeout(this.onShowLighting,1e3*(Math.random()*15+15))}showLighting(){this.updateLightingPosition(),this.lighting.power=100+Math.random()*150,setTimeout(this.onHideLighting,Math.random()*400+100),Z.dispatch("SFX::Thunder",this.lighting.position,!0)}updateLightingPosition(){this.clouds?(this.clouds.getMatrixAt(Nc(0,this.count-1),this.matrix),this.lighting.position.setFromMatrixPosition(this.matrix)):this.lighting.position.set(fi(Ve.minCoords[0],Ve.maxCoords[0]),Zn.height/ue.Level.height,fi(Ve.minCoords[1],Ve.maxCoords[1])),this.lighting.position.y-=Math.random()*(this.lighting.position.y/4)}hideLighting(){!this.paused&&this.startLighting(),this.lighting.power=0}async createClouds(){if(!this.count||!this.isLighting&&this.useFog)return;const e=new Md(Zn.height,16,16,0,Math.PI);e.rotateX(-et.d2);const t=new L,i=new _t;this.clouds=new Xv(new Uc(Zn.height,Zn.height),new Dv({transparent:!0,depthWrite:!1,opacity:.25}),this.count);const n=new Px(new St(e.toNonIndexed())).build();for(let s=0;s<this.count;s++)n.sample(t),i.position.copy(t),i.lookAt(Ui.DOWN),i.updateMatrix(),this.clouds.setMatrixAt(s,i.matrix);this.clouds.position.copy(Ve.center),this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.material.map=await Je.Loader.loadTexture(ue.Level.cloud)}update(){if(!(this.staticClouds||!this.clouds)){for(let e=0;e<this.count;e++){const t=e%2*2-1;this.clouds.getMatrixAt(e,this.matrix);const i=this.matrix.clone();this.rotation.setFromRotationMatrix(i),this.rotation.z+=Math.random()*t*.002,this.matrix.makeRotationFromEuler(this.rotation),this.matrix.copyPosition(i),this.clouds.setMatrixAt(e,this.matrix)}this.clouds.instanceMatrix.needsUpdate=!0}}dispose(){const e=this.clouds?.material;clearTimeout(this.timeout),e?.map?.dispose(),this.lighting?.dispose(),this.clouds?.dispose(),e?.dispose()}static get height(){return Math.max(Ve.size.x,Ve.size.y)}set pause(e){(this.paused=e)?clearTimeout(this.timeout):this.isLighting&&this.startLighting()}get sky(){return this.clouds}get flash(){return this.lighting}}let Cs=[];const Xa=new fc,Yu=new L;let Ku=0;Xa.addPoint(0,0);Xa.addPoint(.5,0);Xa.addPoint(.8,.5);Xa.addPoint(1,.5);const my=r=>{const{camera:e,delta:t}=r;return Yu.copy(e),Ku+=t,OR(r),VR(t),HR()},OR=r=>{const{minCoords:e,maxCoords:t}=r,i=Ku*100|0;Ku-=i/100;const n=i*50;for(let s=0;s<n;s++){const o=Math.random(),a=5.25-o*1.5,l=Math.random()*.1,c=Math.random()*25+50,h=-1+ +(Math.random()<.5)*2;Cs.push({velocity:new L(0,-c,0),position:new L(fi(e[0],t[0]),Zn.height-o*50,fi(e[1],t[1])),rotation:h*l,maxLife:a,alpha:0,life:a})}},VR=r=>{for(let e=0;e<Cs.length;e++){const t=Cs[e];if((t.life-=r)<=0)continue;const i=1-t.life/t.maxLife,n=t.velocity.clone(),{x:s,y:o,z:a}=n;t.position.add(n.multiplyScalar(r)),t.alpha=Xa.getValue(i),n.multiplyScalar(.1).set(Math.sign(s)*Math.min(Math.abs(n.x),Math.abs(s)),Math.sign(o)*Math.min(Math.abs(n.y),Math.abs(o)),Math.sign(a)*Math.min(Math.abs(n.z),Math.abs(a))),t.velocity.sub(n)}Cs=Cs.filter(e=>e.life>0).sort((e,t)=>{const i=Yu.distanceToSquared(e.position),n=Yu.distanceToSquared(t.position);return i>n?-1:i<n?1:0})},HR=()=>{const r=[],e=[],t=[];for(let i=0,n=Cs.length;i<n;i++){const{x:s,y:o,z:a}=Cs[i].position,{rotation:l,alpha:c}=Cs[i];r.push(s,o,a),t.push(l),e.push(c)}return[r,t,e]};class GR{constructor(e,t,i){this.worker=i,this.level=new Ve(e,t,i),Z.dispatch("Game::LoopInit",null,!0),this.addEventListeners()}rifle;pistol;enemyKills=0;enemies;level;clock=new zc;player=new vR;loop=this.update.bind(this);controls=new Kn(this.player);onSceneLoad=this.onLoad.bind(this);onPlayerHit=this.playerHit.bind(this);addEventListeners(){Z.add("Level::EnvMap",this.onSceneLoad),Z.add("Enemy::Attack",this.onPlayerHit),this.worker?.add("Level::GetRandomCoord",e=>{Gt.addLevelCoords(e.data)?Z.dispatch("Loading::Complete",null,!0):this.worker?.post("Level::GetRandomCoord")},{minCoords:Ve.minCoords,maxCoords:Ve.maxCoords,portals:Ve.portals,bounds:Ve.bounds}),Z.add("Enemy::Active",e=>{!e.data&&this.onEnemyKill(),this.player.setTargets(this.enemies.colliders)}),Z.add("Player::PickRifle",()=>this.player.pickRifle()),Z.add("Player::Death",e=>this.enemies.playerDead=e.data)}async onLoad(e){const t=e.data;this.player.loadCharacter(t).then(()=>{Mi.setCharacter(this.player.collider),this.player.setPistol(this.level.walls,this.pistol),this.enemies=new _R(t),this.player.addRifle(this.rifle),this.createRandomCoords(),Ct.add(this.loop)}),this.pistol=new DR(t),this.rifle=new FR(t)}start(){}playerHit(e){const{position:t,damage:i}=e.data,{position:n,rotation:s}=this.player.location,o=this.enemies.getHitDirection(t,n,s);this.player.hit(o,i)}createRandomCoords(){if(this.worker)return this.worker.post("Level::GetRandomCoord");Gt.fillRandomLevelCoords(),Z.dispatch("Loading::Complete",null,!0)}onEnemyKill(){const{x:e,z:t}=this.player.location.position;this.enemies.spawnMultiple(e,t),!(++this.enemyKills%ue.Gameplay.rifleSpawn)&&this.spawnRifle(e,t)}spawnRifle(e,t){!this.rifle.onStage&&this.rifle.spawn(Gt.getRandomLevelCoords(e,t))}update(){const e=Math.min(this.clock.getDelta(),.1),t=this.updateCharactersLocation(e);this.player.alive&&Mi.update(e),this.rifle.update(t),this.level.render(e),Qe.updateState()}updateCharactersLocation(e){this.player.update(e);const{location:t}=this.player,i=this.level.outOfBounds(t.position),n=this.enemies.update(e,t.position);return i&&this.player.teleport(i),Z.dispatch("Characters::Location",{player:t,enemies:n},!0),i??t.position}resize(e,t){this.level.resize(e,t),this.pistol.resize(t),this.rifle.resize(t),Qe.resize()}removeEventListeners(){this.worker?.remove("Level::GetRandomCoord"),Z.remove("Player::PickRifle"),Z.remove("Player::Death"),Z.remove("Level::EnvMap"),Z.remove("Enemy::Active"),Z.remove("Enemy::Attack")}dispose(){this.removeEventListeners(),this.controls.dispose(),this.enemies.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.level.dispose(),Mi.dispose(),Qe.dispose(),Ct.dispose()}set inputs(e){this.controls.pause=e}set pause(e){this.level.pause=e,Mi.pause=e,Ct.pause=e}}class WR{loop;takeControl(e){const t=e.element;Z.add("Game::SettingsInit",()=>this.createMainLoop(t,e.pixelRatio)),this.resetDOMElements(),new $e}createMainLoop(e,t){this.loop=new GR(e,t),Z.remove("Game::SettingsInit")}resetDOMElements(){const e=self.DedicatedWorkerGlobalScope;self.HTMLCollection=e,self.SVGElement=e,self.NodeList=e,self.document=null,self.window=self}dispatch(e){Wu.dispatchEvent(e)}resize(e){const{width:t,height:i}=e;this.loop.resize(t,i)}dispose(){this.loop.dispose()}start(){this.loop.start()}set inputs(e){this.loop.inputs=e}set pause(e){this.loop.pause=e}}const ir=new WR,XR=(r,e)=>{switch(r){case"EventsTarget::Dispatch":return ir.dispatch(e);case"Rain::UpdateParticles":return my(e);case"Level::GetRandomCoord":return ly(e);case"Offscreen::Transfer":return ir.takeControl(e);case"Game::Resize":return ir.resize(e);case"Game::Inputs":{const{disabled:t}=e;return ir.inputs=t}case"Game::Pause":{const{paused:t}=e;return ir.pause=t}case"Game::Dispose":return ir.dispose();case"Game::Start":return ir.start()}return e};self.onmessage=r=>{const{event:e,params:t}=r.data,i=XR(e,t);self.postMessage({name:e,response:i})};self.onerror=r=>console.error(r);const jR=self;class Xm{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t=null){jR.postMessage({name:e,response:t})}remove(e){this.worker.remove(e)}dispose(){this.worker.clear()}}class qR extends CustomEvent{data=null}class $R extends zy{workerEvents;createWorkerEvents(e){this.workerEvents=new Xm(e)}add(e,t,i=!1){ue.offscreen&&i?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t=null,i=!1){ue.worker&&i?Xm.dispatch(e,t):super.dispatch(e,t)}remove(e,t=!1){ue.offscreen&&t?this.workerEvents?.remove(e):super.remove(e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const Z=new $R;function YR(r){let e,t;return{c(){e=Ne("div"),t=Ne("div"),me(t,"class","svelte-12grfy8"),je(t,"shooting",r[3]),je(t,"black",r[0]),je(t,"hide",r[1]),je(t,"red",r[4]),me(e,"class","container svelte-12grfy8")},m(i,n){vt(i,e,n),Be(e,t),r[5](t)},p(i,[n]){n&8&&je(t,"shooting",i[3]),n&1&&je(t,"black",i[0]),n&2&&je(t,"hide",i[1]),n&16&&je(t,"red",i[4])},i:Mt,o:Mt,d(i){i&&mt(e),r[5](null)}}}function KR(r,e,t){let{black:i=!1}=e,{hide:n}=e,s,o=!1,a=!1;function l(){setTimeout(()=>{s.offsetWidth,t(3,o=!1)},150),setTimeout(()=>t(3,o=!0)),t(3,o=!1)}Z.add("Player::Shoot",l,!i),Z.add("Weapon::Aim",h=>t(4,a=h.data),!i),En(()=>{Z.remove("Player::Shoot",!0),Z.remove("Weapon::Aim",!0)});function c(h){Ds[h?"unshift":"push"](()=>{s=h,t(2,s)})}return r.$$set=h=>{"black"in h&&t(0,i=h.black),"hide"in h&&t(1,n=h.hide)},[i,n,s,o,a,c]}class ZR extends xi{constructor(e){super(),_i(this,e,KR,YR,gi,{black:0,hide:1})}}function JR(r){const e=r-1;return e*e*e+1}function gy(r){return r*r}function yy(r){return-r*(r-2)}function Mr(r,{delay:e=0,duration:t=400,easing:i=Rc}={}){const n=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*n}`}}function _y(r,{delay:e=0,duration:t=400,easing:i=JR,x:n=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(r),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o),[u,d]=Zd(n),[f,m]=Zd(s);return{delay:e,duration:t,easing:i,css:(g,y)=>`
			transform: ${c} translate(${(1-g)*u}${d}, ${(1-g)*f}${m});
			opacity: ${l-h*y}`}}function jm(r){let e;return{c(){e=Ne("h1"),e.textContent="Loading...",me(e,"class","svelte-18fefvm")},m(t,i){vt(t,e,i)},d(t){t&&mt(e)}}}function qm(r){let e;return{c(){e=Ne("h1"),e.textContent="Saving...",me(e,"class","svelte-18fefvm")},m(t,i){vt(t,e,i)},d(t){t&&mt(e)}}}function QR(r){let e,t,i,n,s=r[1]&&jm(),o=r[0]&&qm();return{c(){e=Ne("div"),s&&s.c(),t=Wt(),o&&o.c(),me(e,"class","svelte-18fefvm"),je(e,"loading",r[1])},m(a,l){vt(a,e,l),s&&s.m(e,null),Be(e,t),o&&o.m(e,null),n=!0},p(a,[l]){a[1]?s||(s=jm(),s.c(),s.m(e,t)):s&&(s.d(1),s=null),a[0]?o||(o=qm(),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!n||l&2)&&je(e,"loading",a[1])},i(a){n||(on(()=>{n&&(i||(i=Eo(e,Mr,{},!0)),i.run(1))}),n=!0)},o(a){i||(i=Eo(e,Mr,{},!1)),i.run(0),n=!1},d(a){a&&mt(e),s&&s.d(),o&&o.d(),a&&i&&i.end()}}}function eC(r,e,t){const i=Rn();let{updating:n=!1}=e,{loading:s=!1}=e;return s&&Z.add("Loading::Complete",()=>{Z.remove("Loading::Complete",!0),i("complete")},!0),r.$$set=o=>{"updating"in o&&t(0,n=o.updating),"loading"in o&&t(1,s=o.loading)},[n,s]}class xy extends xi{constructor(e){super(),_i(this,e,eC,QR,gi,{updating:0,loading:1})}}const tC=["ArrowUp","ArrowDown","Enter"],iC=(r,e,t)=>Math.abs((t+e+(+(r==="ArrowDown")*2-1))%t),$m=(r,{show:e,menuFade:t})=>(t?Mr:_y)(r,{...!t&&{easing:e?yy:gy},delay:+!!(t&&e)*250+ +!!e*250,x:mi.size.width*-.5,duration:250}),Ym=(r,{show:e})=>_y(r,{easing:e?yy:gy,x:mi.size.width*.5,delay:+!!e*250,duration:250}),jd=(r,e,t)=>{r.stopPropagation(),r.preventDefault();const i=r.key;if(tC.includes(i)){if(i==="Enter")return-1}else return e;return iC(i,e,t)};class it{static vol=.5;static hover=new Audio(`${ue.basePath()}/sounds/${ue.Rifle.sounds.empty}`);static click=new Audio(`${ue.basePath()}/sounds/${ue.Rifle.sounds.pick}`);static set volume(e){it.hover.volume=it.click.volume=e,it.vol=e}static get volume(){return it.vol}static onHover(){const e=it.hover.ended,t=it.hover.paused,i=it.hover.currentTime>.2;!e&&!t&&!i||(it.hover.currentTime=0,it.hover.play())}static onClick(){it.click.currentTime=0,it.click.play()}static mute(){it.volume=0}static load(){it.hover.volume=it.vol,it.click.volume=it.vol,it.hover.load(),it.click.load()}}it.load();function nC(r){let e,t,i,n,s,o,a,l,c,h,u;return{c(){e=Ne("div"),t=Ne("ul"),i=Ne("li"),n=Ne("h3"),n.textContent="Continue",s=Wt(),o=Ne("li"),a=Ne("h3"),a.textContent="Quit",me(n,"class","svelte-wpjsr6"),je(n,"active",!r[0]),me(i,"class","svelte-wpjsr6"),me(a,"class","svelte-wpjsr6"),je(a,"active",r[0]),me(o,"class","svelte-wpjsr6"),me(t,"class","svelte-wpjsr6"),me(e,"class","svelte-wpjsr6")},m(d,f){vt(d,e,f),Be(e,t),Be(t,i),Be(i,n),Be(t,s),Be(t,o),Be(o,a),c=!0,h||(u=[Ue(i,"mouseover",r[5]),Ue(i,"keydown",r[2]),Ue(i,"click",r[2]),Ue(i,"focus",r[4]),Ue(o,"mouseover",r[6]),Ue(o,"keydown",r[2]),Ue(o,"click",r[2]),Ue(o,"focus",r[3])],h=!0)},p(d,[f]){(!c||f&1)&&je(n,"active",!d[0]),(!c||f&1)&&je(a,"active",d[0])},i(d){c||(on(()=>{c&&(l||(l=Eo(e,Mr,{},!0)),l.run(1))}),c=!0)},o(d){l||(l=Eo(e,Mr,{},!1)),l.run(0),c=!1},d(d){d&&mt(e),d&&l&&l.end(),h=!1,cn(u)}}}function sC(r,e,t){const i=Rn();let n=0;function s(d){const f=jd(d,n,2);if(f===-1)return a();t(0,n=f),it.onHover()}function o(d){n!==d&&it.onHover(),t(0,n=d)}function a(){it.onClick(),i(n?"quit":"continue")}br(()=>document.addEventListener("keydown",s,!0)),En(()=>document.removeEventListener("keydown",s,!0));function l(d){Ii.call(this,r,d)}function c(d){Ii.call(this,r,d)}return[n,o,a,l,c,()=>o(0),()=>o(1)]}class rC extends xi{constructor(e){super(),_i(this,e,sC,nC,gi,{})}}function oC(r){let e;return{c(){e=Ne("canvas"),me(e,"width",r[3]),me(e,"height",r[2]),me(e,"class","svelte-16ba91j"),je(e,"visible",r[1])},m(t,i){vt(t,e,i),r[5](e)},p(t,[i]){i&2&&je(e,"visible",t[1])},i:Mt,o:Mt,d(t){t&&mt(e),r[5](null)}}}function aC(r,e,t){const i=mi.size.height,n=mi.size.width;let s,{updating:o=!1}=e,a=!1;En(()=>Z.remove("Rain::Toggle"));function l(c){Ds[c?"unshift":"push"](()=>{s=c,t(0,s)})}return r.$$set=c=>{"updating"in c&&t(4,o=c.updating)},r.$$.update=()=>{r.$$.dirty&16&&(c=>c?Z.remove("Rain::Toggle"):Z.add("Rain::Toggle",h=>t(1,a=h.data)))(o)},[s,a,i,n,o,l]}class lC extends xi{constructor(e){super(),_i(this,e,aC,oC,gi,{updating:4})}}const vy=new $e,cC=new Map([["bullet",["bulletPath","bulletHoles"]],["fog",["volumetricFog"]],["raining",["raindrops","softParticles"]],["clouds",["lighting","dynamicClouds"]]]),My=(r,e)=>{const t=r.reduce((i,n)=>({...i,[n.key]:n.value}),{});for(const i in t){const n=i;if(e.get(n)!==t[n])return t}},hC=(r,e)=>{const t=e-dc,i=$e.getDefaultVisualValues(t),n=My(r,i);return n&&vy.resetVisualValues(t),!!n},uC=r=>{const e=cC.get(r);if(e)return e},dC=r=>{const e=$e.getVisualValues(),t=My(r,e);return t&&vy.updateVisualValues(t),!!t};function fC(r){let e,t,i;return{c(){e=Ne("input"),me(e,"type","checkbox"),me(e,"class","svelte-o4zxq7"),je(e,"active",r[1]),je(e,"checked",r[0])},m(n,s){vt(n,e,s),t||(i=Ue(e,"change",r[2]),t=!0)},p(n,[s]){s&2&&je(e,"active",n[1]),s&1&&je(e,"checked",n[0])},i:Mt,o:Mt,d(n){n&&mt(e),t=!1,i()}}}function pC(r,e,t){const i=Rn();let{checked:n=!1}=e,{active:s=!1}=e;function o(){i("toggle",!n),t(0,n=!n)}return r.$$set=a=>{"checked"in a&&t(0,n=a.checked),"active"in a&&t(1,s=a.active)},[n,s,o]}class mC extends xi{constructor(e){super(),_i(this,e,pC,fC,gi,{checked:0,active:1})}}function gC(r){let e,t,i,n,s;return{c(){e=Ne("input"),me(e,"type","range"),me(e,"min",t=r[4]-r[2]),me(e,"max",i=r[3]-r[2]),e.value=r[1],me(e,"step","1"),me(e,"class","svelte-hkg4rb"),je(e,"active",r[0])},m(o,a){vt(o,e,a),n||(s=Ue(e,"input",r[5]),n=!0)},p(o,[a]){a&20&&t!==(t=o[4]-o[2])&&me(e,"min",t),a&12&&i!==(i=o[3]-o[2])&&me(e,"max",i),a&2&&(e.value=o[1]),a&1&&je(e,"active",o[0])},i:Mt,o:Mt,d(o){o&&mt(e),n=!1,s()}}}function yC(r,e,t){const i=Rn();let{active:n=!1}=e,{value:s=100}=e,{offset:o=0}=e,{max:a=100}=e,{min:l=0}=e;function c(h){const u=h.target;i("update",+u.value)}return r.$$set=h=>{"active"in h&&t(0,n=h.active),"value"in h&&t(1,s=h.value),"offset"in h&&t(2,o=h.offset),"max"in h&&t(3,a=h.max),"min"in h&&t(4,l=h.min)},[n,s,o,a,l,c]}class _C extends xi{constructor(e){super(),_i(this,e,yC,gC,gi,{active:0,value:1,offset:2,max:3,min:4})}}function Km(r,e,t){const i=r.slice();return i[35]=e[t],i[37]=t,i}function xC(r){let e,t;return e=new mC({props:{active:r[1]===r[37],checked:r[35].value}}),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p(i,n){const s={};n[0]&2&&(s.active=i[1]===i[37]),n[0]&1&&(s.checked=i[35].value),e.$set(s)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function vC(r){let e,t;return e=new _C({props:{active:r[1]===r[37],max:cy+99,value:r[35].value,offset:99,min:99}}),e.$on("update",r[8]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p(i,n){const s={};n[0]&2&&(s.active=i[1]===i[37]),n[0]&1&&(s.value=i[35].value),e.$set(s)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function Zm(r){let e,t,i=r[35].name+"",n,s,o,a,l,c,h;const u=[vC,xC],d=[];function f(g,y){return typeof g[35].value=="number"?0:1}o=f(r),a=d[o]=u[o](r);function m(){return r[18](r[37])}return{c(){e=Ne("li"),t=Ne("h5"),n=Cc(i),s=Wt(),a.c(),me(t,"class","svelte-1rbumt8"),je(t,"active",r[1]===r[37]),me(e,"class","svelte-1rbumt8"),je(e,"disabled",!r[35].enabled)},m(g,y){vt(g,e,y),Be(e,t),Be(t,n),Be(e,s),d[o].m(e,null),l=!0,c||(h=[Ue(e,"mouseover",m),Ue(e,"mouseout",r[19]),Ue(e,"keydown",r[20]),Ue(e,"click",r[4]),Ue(e,"focus",r[16]),Ue(e,"blur",r[17])],c=!0)},p(g,y){r=g,(!l||y[0]&1)&&i!==(i=r[35].name+"")&&Py(n,i),(!l||y[0]&2)&&je(t,"active",r[1]===r[37]);let p=o;o=f(r),o===p?d[o].p(r,y):(Gi(),Oe(d[p],1,1,()=>{d[p]=null}),Wi(),a=d[o],a?a.p(r,y):(a=d[o]=u[o](r),a.c()),we(a,1),a.m(e,null)),(!l||y[0]&1)&&je(e,"disabled",!r[35].enabled)},i(g){l||(we(a),l=!0)},o(g){Oe(a),l=!1},d(g){g&&mt(e),d[o].d(),c=!1,cn(h)}}}function MC(r){let e,t,i,n,s,o,a,l,c,h,u,d,f,m,g,y,p,x,_=r[0],b=[];for(let M=0;M<_.length;M+=1)b[M]=Zm(Km(r,_,M));const v=M=>Oe(b[M],1,1,()=>{b[M]=null});return{c(){e=Ne("div"),t=Ne("ul");for(let M=0;M<b.length;M+=1)b[M].c();i=Wt(),n=Ne("li"),s=Ne("h5"),s.textContent="Reset To:",o=Wt(),a=Ne("dl"),l=Ne("h5"),l.textContent=`${Dt[Dt.LOW]} 
        `,c=Ne("h5"),c.textContent=`${Dt[Dt.MEDIUM]} 
        `,h=Ne("h5"),h.textContent=`${Dt[Dt.HIGH]}`,u=Wt(),d=Ne("li"),f=Ne("h4"),f.textContent="Back",me(s,"class","svelte-1rbumt8"),me(l,"class","svelte-1rbumt8"),je(l,"active",r[1]===Dt.LOW),me(c,"class","svelte-1rbumt8"),je(c,"active",r[1]===Dt.MEDIUM),me(h,"class","svelte-1rbumt8"),je(h,"active",r[1]===Dt.HIGH),me(a,"class","svelte-1rbumt8"),me(n,"class","reset svelte-1rbumt8"),me(f,"class","svelte-1rbumt8"),je(f,"active",r[1]===r[2]),me(d,"class","svelte-1rbumt8"),me(t,"class","svelte-1rbumt8"),me(e,"class","svelte-1rbumt8")},m(M,S){vt(M,e,S),Be(e,t);for(let R=0;R<b.length;R+=1)b[R]&&b[R].m(t,null);Be(t,i),Be(t,n),Be(n,s),Be(n,o),Be(n,a),Be(a,l),Be(a,c),Be(a,h),Be(t,u),Be(t,d),Be(d,f),y=!0,p||(x=[Ue(l,"mouseover",r[21]),Ue(l,"mouseout",r[22]),Ue(l,"keydown",r[5]),Ue(l,"click",r[5]),Ue(l,"focus",r[14]),Ue(l,"blur",r[15]),Ue(c,"mouseover",r[23]),Ue(c,"mouseout",r[24]),Ue(c,"keydown",r[5]),Ue(c,"click",r[5]),Ue(c,"focus",r[12]),Ue(c,"blur",r[13]),Ue(h,"mouseover",r[25]),Ue(h,"mouseout",r[26]),Ue(h,"keydown",r[5]),Ue(h,"click",r[5]),Ue(h,"focus",r[10]),Ue(h,"blur",r[11]),Ue(d,"mouseover",r[27]),Ue(d,"keydown",r[6]),Ue(d,"click",r[6]),Ue(d,"focus",r[9])],p=!0)},p(M,S){if(S[0]&411){_=M[0];let R;for(R=0;R<_.length;R+=1){const w=Km(M,_,R);b[R]?(b[R].p(w,S),we(b[R],1)):(b[R]=Zm(w),b[R].c(),we(b[R],1),b[R].m(t,i))}for(Gi(),R=_.length;R<b.length;R+=1)v(R);Wi()}(!y||S[0]&2)&&je(l,"active",M[1]===Dt.LOW),(!y||S[0]&2)&&je(c,"active",M[1]===Dt.MEDIUM),(!y||S[0]&2)&&je(h,"active",M[1]===Dt.HIGH),(!y||S[0]&6)&&je(f,"active",M[1]===M[2])},i(M){if(!y){for(let S=0;S<_.length;S+=1)we(b[S]);on(()=>{y&&(g&&g.end(1),m=vg(e,Ym,{show:!0}),m.start())}),y=!0}},o(M){b=b.filter(Boolean);for(let S=0;S<b.length;S+=1)Oe(b[S]);m&&m.invalidate(),g=Mg(e,Ym,{show:!1}),y=!1},d(M){M&&mt(e),pg(b,M),M&&g&&g.end(),p=!1,cn(x)}}}function bC(r,e,t){const i=Rn();let n,s,o,a=!1,l;(n=()=>{t(0,s=Array.from($e.getVisualValues()).map(([H,X])=>({name:H.replace(/[A-Z]/g,ne=>` ${ne}`),enabled:!0,key:H,value:X})));const K=Object.keys(Dt).length*.5;t(1,o=t(2,l=s.length+K)),c()})();function c(K,H){if(!K&&!H)return s.forEach(({key:X,value:ne})=>h(X,ne));h(K,H)}function h(K,H){const X=uC(K);X&&X.forEach(ne=>{const ae=s.find(k=>k.key===ne);ae&&(H||(ae.value=!1),ae.enabled=!!H)})}function u(K){o!==K&&it.onHover(),t(1,o=K)}function d(K){const H=K.target;p(H.tagName==="LI")}function f(K,H){const X=H??jd(K,o,l+1);if(s[X]&&!s[X].enabled){const ne=+(K.code==="ArrowDown");return f(K,X+ne*2-1)}if(X===-1)return p();it.onHover(),t(1,o=X)}function m(){switch(o){case Dt.LOW:case Dt.MEDIUM:case Dt.HIGH:return!0;default:return!1}}function g(){it.onClick(),a=hC(s,o),a&&setTimeout(n,100)}function y(){const K=dC(s);i("menu",K||a),it.onClick()}function p(K=!0){if(m())return g();if(o===l)return y();const{key:H,value:X}=s[o];typeof X=="number"?x({detail:K?X?0:cy:X}):t(0,s[o].value=!X,s),c(H,s[o].value),it.onClick()}function x(K){t(0,s[o].value=K.detail,s)}br(()=>document.addEventListener("keydown",f,!0)),En(()=>document.removeEventListener("keydown",f,!0));function _(K){Ii.call(this,r,K)}function b(K){Ii.call(this,r,K)}function v(K){Ii.call(this,r,K)}function M(K){Ii.call(this,r,K)}function S(K){Ii.call(this,r,K)}function R(K){Ii.call(this,r,K)}function w(K){Ii.call(this,r,K)}function T(K){Ii.call(this,r,K)}function D(K){Ii.call(this,r,K)}return[s,o,l,u,d,g,y,p,x,_,b,v,M,S,R,w,T,D,K=>u(K),()=>t(1,o=-1),()=>p(),()=>u(Dt.LOW),()=>t(1,o=-1),()=>u(Dt.MEDIUM),()=>t(1,o=-1),()=>u(Dt.HIGH),()=>t(1,o=-1),()=>u(l)]}class wC extends xi{constructor(e){super(),_i(this,e,bC,MC,gi,{},null,[-1,-1])}}function Jm(r,e,t){const i=r.slice();return i[12]=e[t],i[14]=t,i}function Qm(r){let e,t,i=r[12]+"",n,s,o,a;function l(){return r[7](r[14])}return{c(){e=Ne("li"),t=Ne("h3"),n=Cc(i),s=Wt(),me(t,"class","svelte-1dedv9g"),je(t,"active",r[1]===r[14]),me(e,"class","svelte-1dedv9g")},m(c,h){vt(c,e,h),Be(e,t),Be(t,n),Be(e,s),o||(a=[Ue(e,"mouseover",l),Ue(e,"keydown",r[5]),Ue(e,"click",r[5]),Ue(e,"focus",r[6])],o=!0)},p(c,h){r=c,h&2&&je(t,"active",r[1]===r[14])},d(c){c&&mt(e),o=!1,cn(a)}}}function SC(r){let e,t,i,n,s,o,a=r[3],l=[];for(let c=0;c<a.length;c+=1)l[c]=Qm(Jm(r,a,c));return{c(){e=Ne("div"),t=Ne("menu");for(let c=0;c<l.length;c+=1)l[c].c();me(t,"style",i=`
    transform: rotateY(12deg) rotateX(${r[2]}deg);
    height: ${r[3].length*10+20}%;
  `),me(t,"class","svelte-1dedv9g"),me(e,"class","svelte-1dedv9g")},m(c,h){vt(c,e,h),Be(e,t);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(t,null);o=!0},p(c,[h]){if(r=c,h&58){a=r[3];let u;for(u=0;u<a.length;u+=1){const d=Jm(r,a,u);l[u]?l[u].p(d,h):(l[u]=Qm(d),l[u].c(),l[u].m(t,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=a.length}(!o||h&4&&i!==(i=`
    transform: rotateY(12deg) rotateX(${r[2]}deg);
    height: ${r[3].length*10+20}%;
  `))&&me(t,"style",i)},i(c){o||(on(()=>{o&&(s&&s.end(1),n=vg(e,$m,{show:!0,menuFade:r[0]}),n.start())}),o=!0)},o(c){n&&n.invalidate(),s=Mg(e,$m,{menuFade:r[0]}),o=!1},d(c){c&&mt(e),pg(l,c),c&&s&&s.end()}}}function TC(r,e,t){const i=["Play","Settings","Credits"],n=Rn();ue.APP&&i.push("Exit");const s=i.length-1;let{menuFade:o}=e,{selected:a}=e,l=-6;function c(g){const y=jd(g,a,i.length);if(y===-1)return d();t(1,a=y),it.onHover(),u()}function h(g){a!==g&&it.onHover(),t(1,a=g),u()}function u(){t(2,l=Yv(-6,6,a/s))}function d(){switch(it.onClick(),a){case 0:n("play"),t(0,o=!0);break;case 1:n("settings"),t(0,o=!1);break;case 2:break;case 3:window.exit();break}}br(()=>document.addEventListener("keydown",c,!0)),En(()=>document.removeEventListener("keydown",c,!0));function f(g){Ii.call(this,r,g)}const m=g=>h(g);return r.$$set=g=>{"menuFade"in g&&t(0,o=g.menuFade),"selected"in g&&t(1,a=g.selected)},u(),[o,a,l,i,h,d,f,m]}class AC extends xi{constructor(e){super(),_i(this,e,TC,SC,gi,{menuFade:0,selected:1})}}class EC extends Id{constructor(){super({...ue.Enemy,model:`${ue.basePath(!0)}${ue.Enemy.model}`})}async load(){const e=await super.load();return this.setDefaultState(),e}update(e){super.update(e)}fade(e){ve({targets:this.skinnedMesh.material,duration:+e*150+100,opacity:+e,easing:"linear"})}setDefaultState(){this.animations.scream.clampWhenFinished=!0,this.animations.scream.setLoop(Di,0),this.mesh.position.set(0,-.81,0),this.mesh.rotation.set(0,2.85,0),this.setMixerTimeScale(.5),this.animations.idle.play(),this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.material.opacity=0,t.castShadow=!1)}),this.reset()}scream(){this.setMixerTimeScale(1),this.animations.scream.play(),setTimeout(this.animations.idle.stop.bind(this.animations.idle),250),this.animations.idle.crossFadeTo(this.animations.scream,.25,!0),setTimeout(()=>{this.fade(!1),this.animations.idle.play(),this.setMixerTimeScale(.5),this.animations.scream.crossFadeTo(this.animations.idle,.1,!0),setTimeout(this.animations.scream.stop.bind(this.animations.scream),100)},this.getAnimationDuration("scream")-100)}get skinnedMesh(){return this.mesh.children[0].children[0]}set freeze(e){this.setMixerTimeScale(+!e*.5)}}class RC{frame=0;clock=new zc;scene=new Ed;enemy=new EC;renderer;listener=new L0;onRender=this.render.bind(this);onResize=this.resize.bind(this);ratio=window.innerWidth/window.innerHeight;scream=new xa(this.listener);camera=new di(45,this.ratio,1,500);constructor(e){this.scene.background=new ze(Tt.BLACK),mi.addResizeCallback(this.onResize),this.camera.rotation.set(0,Math.PI,0),this.camera.position.set(.7,.1,-3),this.camera.add(this.listener),this.renderer=new Ad({antialias:!0,canvas:e}),this.loadScreamSound(),this.createRenderer(),this.createLights(),this.createEnemy()}rotateCamera(e=0,t=500){ve({targets:this.camera.rotation,easing:"easeInOutQuad",y:Math.PI+e,duration:t})}async loadScreamSound(){const{scream:e}=ue.Enemy.sounds,t=await Je.Loader.loadAudio(e);this.scream.setBuffer(t),this.scream.setVolume(.5),this.scream.setLoop(!1)}async createEnemy(){const e=(await this.enemy.load()).scene;this.frame=requestAnimationFrame(this.onRender),this.scene.add(e),this.enemy.fade(!0)}playScreamAnimation(){this.rotateCamera(-.25,250),setTimeout(()=>{this.scream.play(.25),this.enemy.scream()},100)}createRenderer(){const e=window.innerWidth,t=window.innerHeight,i=window.devicePixelRatio;this.renderer.debug.checkShaderErrors=!1,this.renderer.outputColorSpace=De,this.renderer.setClearColor(Tt.BLACK,1),this.renderer.setPixelRatio(i||1),this.renderer.shadowMap.enabled=!1,this.renderer.setSize(e,t)}createLights(){const e=new BA(Tt.WHITE,.1),t=new C0(Tt.WHITE);e.position.set(-5,10,25),this.scene.add(e),this.scene.add(t)}render(){this.frame=requestAnimationFrame(this.onRender),this.renderer.render(this.scene,this.camera),this.enemy.update(this.clock.getDelta())}resize(){const e=window.innerHeight,t=window.innerWidth;this.ratio=t/e,this.camera.aspect=this.ratio,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}dispose(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);mi.removeResizeCallback(this.onResize),cancelAnimationFrame(this.frame),this.renderer.dispose(),this.enemy.dispose(),this.scene.clear()}set freeze(e){this.enemy.freeze=e}}function eg(r){let e,t;return e=new wC({}),e.$on("menu",r[12]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p:Mt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function tg(r){let e,t;return e=new AC({props:{selected:r[5],menuFade:r[4]}}),e.$on("settings",r[13]),e.$on("play",r[9]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p(i,n){const s={};n&32&&(s.selected=i[5]),n&16&&(s.menuFade=i[4]),e.$set(s)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function ig(r){let e,t;return e=new xy({props:{updating:!0}}),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function CC(r){let e,t,i,n,s,o,a=r[2]&&eg(r),l=r[3]&&tg(r),c=r[0]&&ig();return{c(){e=Ne("div"),t=Ne("canvas"),i=Wt(),a&&a.c(),n=Wt(),l&&l.c(),s=Wt(),c&&c.c(),me(t,"width",r[6]),me(t,"height",r[7]),me(t,"class","svelte-1sf6i7h"),me(e,"class","svelte-1sf6i7h")},m(h,u){vt(h,e,u),Be(e,t),r[11](t),Be(e,i),a&&a.m(e,null),Be(e,n),l&&l.m(e,null),Be(e,s),c&&c.m(e,null),o=!0},p(h,[u]){h[2]?a?(a.p(h,u),u&4&&we(a,1)):(a=eg(h),a.c(),we(a,1),a.m(e,n)):a&&(Gi(),Oe(a,1,1,()=>{a=null}),Wi()),h[3]?l?(l.p(h,u),u&8&&we(l,1)):(l=tg(h),l.c(),we(l,1),l.m(e,s)):l&&(Gi(),Oe(l,1,1,()=>{l=null}),Wi()),h[0]?c?u&1&&we(c,1):(c=ig(),c.c(),we(c,1),c.m(e,null)):c&&(Gi(),Oe(c,1,1,()=>{c=null}),Wi())},i(h){o||(we(a),we(l),we(c),o=!0)},o(h){Oe(a),Oe(l),Oe(c),o=!1},d(h){h&&mt(e),r[11](null),a&&a.d(),l&&l.d(),c&&c.d()}}}function PC(r,e,t){let i,n=!1,s=!1,{ready:o}=e,a,l=!0,c=!0,h=0;const u=window.innerWidth,d=window.innerHeight,f=Rn();async function m(v,M=!1){if(M)return g();a.rotateCamera(+v*-.5),t(2,n=v),t(5,h=+!v),t(3,l=!v),t(4,c=!1)}async function g(){f("update",!0),a.freeze=!0,t(0,s=!0),f("hide"),await Fy(),f("update",!1)}function y(){setTimeout(()=>m(!1),3500),setTimeout(()=>{a.freeze=!1,t(0,s=!1)},2500)}function p(){t(3,l=!1);const v=1*3e3;a.playScreamAnimation(),setTimeout(()=>f("start"),v)}br(()=>a=new RC(i)),En(()=>a?.dispose());function x(v){Ds[v?"unshift":"push"](()=>{i=v,t(1,i)})}const _=({detail:v})=>m(!1,v),b=()=>m(!0);return r.$$set=v=>{"ready"in v&&t(10,o=v.ready)},r.$$.update=()=>{r.$$.dirty&1025&&(v=>s&&v&&y())(o)},[s,i,n,l,c,h,u,d,m,p,o,x,_,b]}class LC extends xi{constructor(e){super(),_i(this,e,PC,CC,gi,{ready:10})}}function IC(r){let e,t;return{c(){e=Ne("div"),t=Ne("div"),me(t,"class","arc svelte-2cb48p"),me(e,"class","container svelte-2cb48p"),Es(e,"transform","rotate("+r[0]+"deg)")},m(i,n){vt(i,e,n),Be(e,t)},p(i,[n]){n&1&&Es(e,"transform","rotate("+i[0]+"deg)")},i:Mt,o:Mt,d(i){i&&mt(e)}}}function DC(r,e,t){let{playerRotation:i}=e,n,{angle:s}=e;function o(){t(0,n=s-i)}return r.$$set=a=>{"playerRotation"in a&&t(1,i=a.playerRotation),"angle"in a&&t(2,s=a.angle)},r.$$.update=()=>{r.$$.dirty&6&&(a=>i&&o())(),r.$$.dirty&6&&(a=>s&&o())()},[n,i,s]}class FC extends xi{constructor(e){super(),_i(this,e,DC,IC,gi,{playerRotation:1,angle:2})}}const ic=(r,e,t)=>[r[0]*t+t*e[0],r[1]*t+t*e[1]],UC=(r,e,t)=>Math.hypot(r[0]-e[0],r[1]-e[1])<t,NC=(r,e)=>Math.atan2(-(r[0]-e[0]),r[1]-e[1])*180/Math.PI+180;function BC(r){let e;return{c(){e=Ne("div"),Es(e,"transform","rotate("+r[0]+"deg)"),me(e,"class","svelte-1xsktiv")},m(t,i){vt(t,e,i)},p(t,[i]){i&1&&Es(e,"transform","rotate("+t[0]+"deg)")},i:Mt,o:Mt,d(t){t&&mt(e)}}}function zC(r,e,t){let{rotation:i}=e;return r.$$set=n=>{"rotation"in n&&t(0,i=n.rotation)},[i]}class kC extends xi{constructor(e){super(),_i(this,e,zC,BC,gi,{rotation:0})}}function OC(r){let e,t,i,n,s,o;return s=new kC({props:{rotation:r[0]}}),{c(){e=Ne("div"),t=Ne("div"),i=Ne("canvas"),n=Wt(),yi(s.$$.fragment),Es(i,"transform",r[3]),me(i,"class","svelte-1bcj3d6"),Es(t,"transform","scale3d("+r[1]+", "+r[1]+", 1) rotate("+-r[0]+"deg)"),me(t,"class","svelte-1bcj3d6"),me(e,"class","map svelte-1bcj3d6")},m(a,l){vt(a,e,l),Be(e,t),Be(t,i),r[8](i),Be(t,n),ri(s,t,null),o=!0},p(a,[l]){(!o||l&8)&&Es(i,"transform",a[3]);const c={};l&1&&(c.rotation=a[0]),s.$set(c),(!o||l&3)&&Es(t,"transform","scale3d("+a[1]+", "+a[1]+", 1) rotate("+-a[0]+"deg)")},i(a){o||(we(s.$$.fragment,a),o=!0)},o(a){Oe(s.$$.fragment,a),o=!1},d(a){a&&mt(e),r[8](null),oi(s)}}}const nc=5,sc=1;function VC(r,e,t){const i=Ve.minCoords.map(B=>Math.abs(B)+sc),n=Rn(),s=Ve.maxCoords;let o,{enemies:a}=e,{playerPosition:l}=e,{playerRotation:c}=e,h;const u=Ve.bounds;let d,f,m,g,y=0,p,x,{radius:_}=e,{scale:b}=e,{zoom:v}=e;const M=nc*Math.PI,S=M*2,R=nc*2;function w(){const B=ay(u).map(V=>ic(V,i,b));return t(2,m.height=No(B.map(V=>V[1]))+sc*2,m),t(2,m.width=No(B.map(V=>V[0]))+sc*2,m),B}function T(B){d=ic(B.data,i,b),x=!0}function D(){const B=l.x,V=l.z,W=(B-s[0])*b-g,ee=(V-s[1])*b-g;if(x){const oe=ic([B,V],i,b);n("rifle",{visible:!UC(d,oe,_),angle:NC(oe,d)})}t(3,f=`translate(${W}px, ${ee}px) scale3d(-1, -1, 1)`)}function F(){for(let B=a.length;B--;){const[V,W]=ic([a[B].x,a[B].z],i,b);o.beginPath(),o.fillStyle="#8A0707",o.arc(V,W,4,0,et.m2),o.closePath(),o.fill()}}function P(){o.strokeStyle="#000",o.lineWidth=2,o.beginPath(),o.clearRect(0,0,m.width,m.height),o.moveTo(h[0][0],h[0][1]);for(let B=1;B<h.length;B++)o.lineTo(h[B][0],h[B][1]);o.closePath(),o.stroke()}function U(){if(!x)return;const[B,V]=d;o.fillStyle="#FFF",o.clearRect(B-M,V-M,S,S),o.beginPath(),o.arc(B,V,nc,0,et.m2),o.closePath(),o.fill(),o.lineWidth=1,o.beginPath(),p=y+=So,p=Kv(p-(p|0)),o.strokeStyle=`rgba(255, 255, 255, ${1-p})`;const W=nc+p*R;o.arc(B,V,W,0,et.m2),o.closePath(),o.stroke()}function z(){P(),F(),U()}Z.add("Rifle::Spawn",T,!0),Z.add("Rifle::Pick",()=>{y=0,x=!1},!0),br(()=>{o=m.getContext("2d"),h=w(),Ct.add(z)}),En(()=>{Z.remove("Rifle::Spawn",!0),Z.remove("Rifle::Pick",!0),Ct.remove(z)});function j(B){Ds[B?"unshift":"push"](()=>{m=B,t(2,m)})}return r.$$set=B=>{"enemies"in B&&t(4,a=B.enemies),"playerPosition"in B&&t(5,l=B.playerPosition),"playerRotation"in B&&t(0,c=B.playerRotation),"radius"in B&&t(6,_=B.radius),"scale"in B&&t(7,b=B.scale),"zoom"in B&&t(1,v=B.zoom)},r.$$.update=()=>{r.$$.dirty&36&&(B=>{m&&B&&D()})(l),r.$$.dirty&132&&(B=>{!m||!B||(g=sc*B/2)})(b)},[c,v,m,f,a,l,_,b,j]}let HC=class extends xi{constructor(e){super(),_i(this,e,VC,OC,gi,{enemies:4,playerPosition:5,playerRotation:0,radius:6,scale:7,zoom:1})}};var Zu;(r=>{class e{current;target;speed=10;constructor(s){this.target=this.current=s}update(s=So){const o=this.target-this.current;this.current+=o*(this.speed*s)}set(s){this.target=s}get value(){return this.current}}r.Number=e;class t{current=new Pe;target=new Pe;speed=10;constructor(s){this.current.copy(s),this.target.copy(s)}set(s,o){this.target.set(s,o)}copy(s){this.target.copy(s)}update(s=So){const o=this.target.x-this.current.x,a=this.target.y-this.current.y;this.current.x+=o*(this.speed*s),this.current.y+=a*(this.speed*s)}get value(){return this.current}get x(){return this.current.x}get y(){return this.current.y}}r.Vector2=t;class i{current=new L;target=new L;speed=10;constructor(s){this.current.copy(s),this.target.copy(s)}set(s,o,a){this.target.set(s,o,a)}copy(s){this.target.copy(s)}update(s=So){const o=this.target.x-this.current.x,a=this.target.y-this.current.y,l=this.target.z-this.current.z;this.current.x+=o*(this.speed*s),this.current.y+=a*(this.speed*s),this.current.z+=l*(this.speed*s)}get value(){return this.current}get x(){return this.current.x}get y(){return this.current.y}get z(){return this.current.z}}r.Vector3=i})(Zu||(Zu={}));function ng(r){let e,t,i,n,s;t=new HC({props:{playerPosition:r[1].position,playerRotation:r[1].rotation,radius:r[6]/r[5],scale:r[8],zoom:r[5],enemies:r[0]}}),t.$on("rifle",r[9]);let o=r[2]&&sg(r);return{c(){e=Ne("div"),yi(t.$$.fragment),i=Wt(),o&&o.c(),me(e,"class","svelte-87myo6")},m(a,l){vt(a,e,l),ri(t,e,null),Be(e,i),o&&o.m(e,null),s=!0},p(a,l){const c={};l&2&&(c.playerPosition=a[1].position),l&2&&(c.playerRotation=a[1].rotation),l&96&&(c.radius=a[6]/a[5]),l&256&&(c.scale=a[8]),l&32&&(c.zoom=a[5]),l&1&&(c.enemies=a[0]),t.$set(c),a[2]?o?(o.p(a,l),l&4&&we(o,1)):(o=sg(a),o.c(),we(o,1),o.m(e,null)):o&&(Gi(),Oe(o,1,1,()=>{o=null}),Wi())},i(a){s||(we(t.$$.fragment,a),we(o),on(()=>{s&&(n||(n=Eo(e,Mr,{},!0)),n.run(1))}),s=!0)},o(a){Oe(t.$$.fragment,a),Oe(o),n||(n=Eo(e,Mr,{},!1)),n.run(0),s=!1},d(a){a&&mt(e),oi(t),o&&o.d(),a&&n&&n.end()}}}function sg(r){let e,t;return e=new FC({props:{playerRotation:r[1].rotation,angle:r[4]}}),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p(i,n){const s={};n&2&&(s.playerRotation=i[1].rotation),n&16&&(s.angle=i[4]),e.$set(s)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function GC(r){let e,t,i,n;e=new ZR({props:{hide:!r[7]}});let s=r[3]&&ng(r);return{c(){yi(e.$$.fragment),t=Wt(),s&&s.c(),i=mg()},m(o,a){ri(e,o,a),vt(o,t,a),s&&s.m(o,a),vt(o,i,a),n=!0},p(o,[a]){const l={};a&128&&(l.hide=!o[7]),e.$set(l),o[3]?s?(s.p(o,a),a&8&&we(s,1)):(s=ng(o),s.c(),we(s,1),s.m(i.parentNode,i)):s&&(Gi(),Oe(s,1,1,()=>{s=null}),Wi())},i(o){n||(we(e.$$.fragment,o),we(s),n=!0)},o(o){Oe(e.$$.fragment,o),Oe(s),n=!1},d(o){oi(e,o),o&&mt(t),s&&s.d(o),o&&mt(i)}}}function WC(r,e,t){const i=Math.tan(et.d3)+Number.EPSILON,n=Math.round(i*100),s=Rn(),o=n/10,a=new Zu.Number(0);let l,c,h=!1,u=!1,d=!1,f,m,g,y=!1,p;function x(M){t(2,h=M.detail.visible),t(4,f=M.detail.angle)}function _(M){t(6,g=M/o),t(8,p=M/n)}function b(){a.update(),t(5,m=Math.round((1-a.value)*1e5+Number.EPSILON)/1e5),(m===1||m===.5)&&Ct.remove(b)}function v(){setTimeout(()=>t(3,d=t(7,y=!0)),5e3),setTimeout(()=>s("firstUpdate"),2500),u=!0,s("start")}return Z.add("Characters::Location",M=>{const{player:S,enemies:R}=M.data;!u&&v(),t(0,l=R),t(1,c=S)},!0),Z.add("Player::Run",M=>{const S=M.data;S&&t(7,y=!1),a.set(+S*.5),Ct.remove(b),Ct.add(b)},!0),Z.add("Player::Aim",M=>t(7,y=M.data),!0),br(()=>{mi.addResizeCallback(_),_(mi.size.width)}),En(()=>{Z.remove("Characters::Location",!0),mi.removeResizeCallback(_),Z.remove("Player::Run",!0),Z.remove("Player::Aim",!0),Ct.remove(b)}),[l,c,h,d,f,m,g,y,p,x]}class XC extends xi{constructor(e){super(),_i(this,e,WC,GC,gi,{})}}class jC{playerSounds=new Map;enemySounds=new Map;pistolSounds=new Map;rifleSounds=new Map;onDisposeEnemy=this.disposeEnemy.bind(this);onCharacter=this.playCharacter.bind(this);enemies=new Map;onSpawnEnemy=this.spawnEnemy.bind(this);onThunder=this.playThuder.bind(this);onWeapon=this.playWeapon.bind(this);onUpdate=this.update.bind(this);camera=new di(Qn.config.fov,Qn.config.aspect,Qn.config.near,Qn.config.far);listener=new L0;renderer=new Ad;thunder=new _t;weapon=new _t;player=new _t;scene=new Ed;ambient;constructor(){this.renderer.debug.checkShaderErrors=!1,this.scene.matrixWorldAutoUpdate=!1,this.camera.matrixAutoUpdate=!1,this.scene.matrixAutoUpdate=!1,this.camera.add(this.listener),this.scene.add(this.player),this.createCharacterSounds(ue.Player.sounds,!0),this.createCharacterSounds(ue.Enemy.sounds,!1),this.createWeaponSounds(ue.Pistol.sounds,!0),this.createWeaponSounds(ue.Rifle.sounds,!1),this.addEventListeners(),Ct.add(this.onUpdate)}async loadSounds(e){return Promise.all(e.map(Je.Loader.loadAudio.bind(Je.Loader)))}async createCharacterSounds(e,t){const i=Object.keys(e),n=t?this.playerSounds:this.enemySounds;(await this.loadSounds(Object.values(e))).forEach((o,a)=>{const l=new xa(this.listener);let c=i[a]==="scream"?1:.5;c=i[a]==="death"?2.5:c,l.setVolume(c).setBuffer(o),t&&this.player.add(l),n.set(i[a],l),l.name=i[a]})}async createWeaponSounds(e,t){const i=t?this.pistolSounds:this.rifleSounds,n=Object.keys(e);(await this.loadSounds(Object.values(e))).forEach((o,a)=>{const l=new xa(this.listener);let c=n[a]==="bullet"?.25:2.5;c=n[a]==="shoot"?5:c,l.setVolume(c).setBuffer(o),i.set(n[a],l),this.weapon.add(l)})}async createThunderSounds(){(await this.loadSounds(ue.Level.lighting)).forEach(t=>{const i=new xa(this.listener);i.setBuffer(t),this.thunder.add(i)})}async createAmbientSound(){const e=await Je.Loader.loadAudio(ue.Level.ambient);this.ambient=new P0(this.listener),this.ambient.setBuffer(e),this.ambient.autoplay=!1,this.ambient.setVolume(0),this.ambient.setLoop(!0)}disposeEnemy(e){const t=e.data,i=this.enemies.get(t);this.scene.remove(i.clear()),this.enemies.delete(t)}async updateAmbient(){$e.getVisualValue("lighting")&&this.createThunderSounds(),$e.getVisualValue("raining")&&(await this.createAmbientSound(),this.scene.updateMatrixWorld(!0),setTimeout(()=>ve({begin:()=>this.ambient?.play(),targets:{volume:this.ambient?.getVolume()},update:({animations:e})=>this.ambient?.setVolume(+e[0].currentValue),easing:"linear",duration:1e3,volume:.25}),100))}spawnEnemy(e){const t=new _t,i=e.data;this.enemySounds.forEach((n,s)=>{const o=new xa(this.listener);o.setBuffer(n.buffer).setVolume(n.getVolume()).name=s,t.add(o)}),this.scene.add(t),this.enemies.set(i,t)}removeEventListeners(){Z.remove("Enemy::Dispose",!0),Z.remove("SFX::Character",!0),Z.remove("Enemy::Spawn",!0),Z.remove("SFX::Thunder",!0),Z.remove("SFX::Weapon",!0)}addEventListeners(){Z.add("Enemy::Dispose",this.onDisposeEnemy,!0),Z.add("SFX::Character",this.onCharacter,!0),Z.add("Enemy::Spawn",this.onSpawnEnemy,!0),Z.add("SFX::Thunder",this.onThunder,!0),Z.add("SFX::Weapon",this.onWeapon,!0)}playThuder(e){this.thunder.position.copy(e.data),this.thunder.updateMatrix(),this.thunder.updateMatrixWorld();const t=this.thunder.position.distanceToSquared(this.listener.position),i=Nc(0,this.thunder.children.length-1),n=this.thunder.children[i],s=(n.buffer?.duration??0)*1e3;n.setRefDistance(t/ue.Level.depth),n.setVolume(1),n.play(),setTimeout(()=>ve({targets:{volume:n?.getVolume()},complete:()=>n?.stop(),update:({animations:o})=>n?.setVolume(+o[0].currentValue),easing:"linear",duration:500,volume:0}),s-500)}playCharacter(e){let t=this.player;const{sfx:i,uuid:n,matrix:s,play:o}=e.data;let a=this.playerSounds.get(i);this.enemies.has(n)&&(t=this.enemies.get(n),a=t.getObjectByName(i)),t.matrixWorld.copy(s),t.updateMatrix(),t.updateMatrixWorld(),o?!a.isPlaying&&a.play():a.isPlaying&&a.stop()}playWeapon(e){const{sfx:t,pistol:i,matrix:n,play:s,delay:o}=e.data,l=(i?this.pistolSounds:this.rifleSounds).get(t);this.weapon.matrixWorld.copy(n),this.weapon.updateMatrix(),this.weapon.updateMatrixWorld(),s?!l.isPlaying&&l.play(o):l.isPlaying&&l.stop()}update(){this.updateCameraState(),this.renderer.render(this.scene,this.camera)}updateCameraState(){const{fov:e,aspect:t,near:i,far:n,matrix:s}=Qn.config;this.camera.matrixWorld.copy(s),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.camera.aspect=t,this.camera.near=i,this.camera.far=n,this.camera.fov=e}set pause(e){this.ambient?.[e?"pause":"play"](),this.listener.setMasterVolume(+!e)}dispose(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.removeEventListeners(),this.playerSounds.clear(),this.pistolSounds.clear(),this.enemySounds.clear(),this.rifleSounds.clear(),Ct.remove(this.onUpdate),this.renderer.dispose(),this.enemies.clear(),this.pause=!0}}function qC(){return new Worker(""+new URL("WorkerManager-7b7965c9.js",import.meta.url).href)}class $C{worker=new qC;events=new Map;constructor(){this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this)}add(e,t,i){this.events.set(e,{callback:t,params:i})}transfer(e,t){this.worker.postMessage({event:"Offscreen::Transfer",params:{element:e,...t}},[e])}post(e,t){const i=this.events.get(e)?.params;this.worker.postMessage({event:e,params:{...i,...t}})}onMessage(e){const{name:t,response:i}=e.data;this.events.get(t)?.callback({data:i})}onError(e){console.error(e)}remove(e){this.events.delete(e)}dispose(){this.worker.onmessage=this.worker.onerror=null,this.events.clear()}clear(){this.events.clear()}}class YC{constructor(e){this.scene=e;const t=window.devicePixelRatio||1;Z.createWorkerEvents(this.worker),mi.addResizeCallback(this.onResize),this.audioScene=new jC,(ue.offscreen?Yc(()=>import("./OffscreenCanvas-ca846e58.js"),[],import.meta.url):Yc(()=>import("./Onscreen-9677759c.js"),["./Onscreen-9677759c.js","./index-578bf340.js"],import.meta.url)).then(i=>this.manager=new i.default(this.scene,this.worker,t))}started=!1;raindrops;manager;audioScene;pointer=new OA;worker=new $C;onResize=this.resize.bind(this);async createRaindrops(e){$e.getVisualValue("raindrops")&&Yc(()=>import("./Raindrops-41203a26.js"),["./Raindrops-41203a26.js","./index-578bf340.js"],import.meta.url).then(t=>this.raindrops=new t.default(this.scene,e))}start(e){const{width:t,height:i}=mi.size;this.audioScene.updateAmbient(),this.createRaindrops(e),this.resize(t,i),this.toggleInputs(!1),this.toggleAudio(!1),this.manager.start(),this.started=!0}resize(e,t){this.manager.resize(e,t)}toggleInputs(e){this.manager.inputs=e}toggleAudio(e){this.audioScene.pause=e}dispose(){Ct.dispose(),this.pause=!0,this.started=!1,mi.removeResizeCallback(this.onResize),this.audioScene.dispose(),this.raindrops?.dispose(),this.manager?.dispose(),this.pointer.dispose(),this.worker.dispose(),delete this.raindrops,Z.dispose()}set pause(e){e?this.pointer.exitPointerLock():this.pointer.requestPointerLock(),this.started&&(this.toggleInputs(e),this.toggleAudio(e)),this.raindrops?.pause(e),this.manager.pause=e,Ct.pause=e}get ready(){return!!this.manager}}function rg(r){let e,t;return e=new XC({}),e.$on("start",r[4]),e.$on("firstUpdate",r[8]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p:Mt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function KC(r){let e,t,i,n,s=r[0]&&rg(r);return{c(){e=Ne("canvas"),t=Wt(),s&&s.c(),i=mg(),me(e,"width",r[2]),me(e,"height",r[3]),me(e,"class","svelte-1on0yzg")},m(o,a){vt(o,e,a),r[7](e),vt(o,t,a),s&&s.m(o,a),vt(o,i,a),n=!0},p(o,[a]){o[0]?s?(s.p(o,a),a&1&&we(s,1)):(s=rg(o),s.c(),we(s,1),s.m(i.parentNode,i)):s&&(Gi(),Oe(s,1,1,()=>{s=null}),Wi())},i(o){n||(we(s),n=!0)},o(o){Oe(s),n=!1},d(o){o&&mt(e),r[7](null),o&&mt(t),s&&s.d(o),o&&mt(i)}}}function ZC(r,e,t){let i,{running:n}=e,s,{raindrops:o}=e;const a=mi.size.width,l=mi.size.height,c=Rn();function h(){i.start(o.$$.ctx[0])}br(()=>{t(0,i=new YC(s)),Z.add("Game::LoopInit",()=>{Z.add("Game::Quit",()=>c("quit"),!0),Z.remove("Game::LoopInit",!0),c("ready")},!0)}),En(()=>{Z.remove("Game::Quit",!0),i.dispose()});function u(f){Ds[f?"unshift":"push"](()=>{s=f,t(1,s)})}function d(f){Ii.call(this,r,f)}return r.$$set=f=>{"running"in f&&t(5,n=f.running),"raindrops"in f&&t(6,o=f.raindrops)},r.$$.update=()=>{r.$$.dirty&33&&(f=>{i?.ready&&t(0,i.pause=!f,i)})(n)},[i,s,a,l,h,n,o,u,d]}class JC extends xi{constructor(e){super(),_i(this,e,ZC,KC,gi,{running:5,raindrops:6})}}function og(r){let e,t;return e=new LC({props:{ready:r[3]}}),e.$on("update",r[8]),e.$on("hide",r[9]),e.$on("start",r[6]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p(i,n){const s={};n&8&&(s.ready=i[3]),e.$set(s)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function ag(r){let e,t;return e=new rC({}),e.$on("continue",r[10]),e.$on("quit",r[7]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p:Mt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function lg(r){let e,t;return e=new xy({props:{loading:!0}}),e.$on("complete",r[11]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p:Mt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function cg(r){let e,t;return e=new JC({props:{running:!r[5],raindrops:r[1]}}),e.$on("quit",r[7]),e.$on("ready",r[12]),e.$on("firstUpdate",r[13]),{c(){yi(e.$$.fragment)},m(i,n){ri(e,i,n),t=!0},p(i,n){const s={};n&32&&(s.running=!i[5]),n&2&&(s.raindrops=i[1]),e.$set(s)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){oi(e,i)}}}function QC(r){let e,t,i,n,s,o,a,l=r[2]&&!r[4]&&og(r),c=r[5]&&!r[2]&&ag(r),h=r[3]&&r[4]&&lg(r),u=!r[0]&&cg(r),d={updating:r[0]};return o=new lC({props:d}),r[14](o),{c(){e=Ne("main"),l&&l.c(),t=Wt(),c&&c.c(),i=Wt(),h&&h.c(),n=Wt(),u&&u.c(),s=Wt(),yi(o.$$.fragment),me(e,"id","root")},m(f,m){vt(f,e,m),l&&l.m(e,null),Be(e,t),c&&c.m(e,null),Be(e,i),h&&h.m(e,null),Be(e,n),u&&u.m(e,null),Be(e,s),ri(o,e,null),a=!0},p(f,[m]){f[2]&&!f[4]?l?(l.p(f,m),m&20&&we(l,1)):(l=og(f),l.c(),we(l,1),l.m(e,t)):l&&(Gi(),Oe(l,1,1,()=>{l=null}),Wi()),f[5]&&!f[2]?c?(c.p(f,m),m&36&&we(c,1)):(c=ag(f),c.c(),we(c,1),c.m(e,i)):c&&(Gi(),Oe(c,1,1,()=>{c=null}),Wi()),f[3]&&f[4]?h?(h.p(f,m),m&24&&we(h,1)):(h=lg(f),h.c(),we(h,1),h.m(e,n)):h&&(Gi(),Oe(h,1,1,()=>{h=null}),Wi()),f[0]?u&&(Gi(),Oe(u,1,1,()=>{u=null}),Wi()):u?(u.p(f,m),m&1&&we(u,1)):(u=cg(f),u.c(),we(u,1),u.m(e,s));const g={};m&1&&(g.updating=f[0]),o.$set(g)},i(f){a||(we(l),we(c),we(h),we(u),we(o.$$.fragment,f),a=!0)},o(f){Oe(l),Oe(c),Oe(h),Oe(u),Oe(o.$$.fragment,f),a=!1},d(f){f&&mt(e),l&&l.d(),c&&c.d(),h&&h.d(),u&&u.d(),r[14](null),oi(o)}}}function eP(r,e,t){let i,n=!0,s=!1,o=!1,a=!0,l=!0;const c=()=>{let _=window.location.pathname;const b=ue.basePath(!0);return _=_.slice(0,_.lastIndexOf("/")),!b&&`${_}/assets`||b};function h(){setTimeout(()=>t(5,l=!1),500),t(4,a=!0)}function u(){Z.dispatch("Rain::Toggle",!1),setTimeout(()=>t(0,o=!1),1e3),t(2,n=!0),t(0,o=!0),t(5,l=!0)}(()=>{const _=c(),{style:b}=document.documentElement,v=`${_}/images/cursor/default.png`,M=`${_}/images/cursor/pointer.png`;b.setProperty("--default-cursor",`url("${v}")`),b.setProperty("--pointer-cursor",`url("${M}")`)})(),En(()=>Z.remove("Game::Pause"));const d=({detail:_})=>t(0,o=_),f=()=>t(3,s=!1),m=()=>t(5,l=!1),g=()=>t(4,a=!1),y=()=>t(3,s=!0),p=()=>{t(2,n=!1),t(4,a=!1)};function x(_){Ds[_?"unshift":"push"](()=>{i=_,t(1,i)})}return r.$$.update=()=>{r.$$.dirty&1&&(_=>_?Z.remove("Game::Pause"):Z.add("Game::Pause",()=>t(5,l=!0)))(o)},[o,i,n,s,a,l,h,u,d,f,m,g,y,p,x]}class tP extends xi{constructor(e){super(),_i(this,e,eP,QC,gi,{})}}const h2=Object.freeze(Object.defineProperty({__proto__:null,default:tP},Symbol.toStringTag,{value:"Module"}));export{h2 as A,Z as G,GR as M,Ct as R,mi as V};
