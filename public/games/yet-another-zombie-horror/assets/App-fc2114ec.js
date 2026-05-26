import{V as Xu,g as p_}from"./quality-244afbe8.js";import{_ as _h}from"./index-0e950fc8.js";function wt(){}const $c=s=>s;function Jg(s){return s()}function If(){return Object.create(null)}function bn(s){s.forEach(Jg)}function tl(s){return typeof s=="function"}function _i(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}function m_(s){return Object.keys(s).length===0}function Df(s){const e=typeof s=="string"&&s.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[s,"px"]}const Qg=typeof window<"u";let Cd=Qg?()=>window.performance.now():()=>Date.now(),Pd=Qg?s=>requestAnimationFrame(s):wt;const Io=new Set;function e0(s){Io.forEach(e=>{e.c(s)||(Io.delete(e),e.f())}),Io.size!==0&&Pd(e0)}function Ld(s){let e;return Io.size===0&&Pd(e0),{promise:new Promise(t=>{Io.add(e={c:s,f:t})}),abort(){Io.delete(e)}}}function Be(s,e){s.appendChild(e)}function t0(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function g_(s){const e=Ne("style");return y_(t0(s),e),e.sheet}function y_(s,e){return Be(s.head||s,e),e.sheet}function bt(s,e,t){s.insertBefore(e,t||null)}function mt(s){s.parentNode&&s.parentNode.removeChild(s)}function i0(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function Ne(s){return document.createElement(s)}function Yc(s){return document.createTextNode(s)}function qt(){return Yc(" ")}function n0(){return Yc("")}function Ue(s,e,t,i){return s.addEventListener(e,t,i),()=>s.removeEventListener(e,t,i)}function me(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function __(s){return Array.from(s.childNodes)}function x_(s,e){e=""+e,s.data!==e&&(s.data=e)}function Us(s,e,t,i){t==null?s.style.removeProperty(e):s.style.setProperty(e,t,i?"important":"")}function je(s,e,t){s.classList[t?"add":"remove"](e)}function s0(s,e,{bubbles:t=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(s,t,i,e),n}const Uc=new Map;let Nc=0;function v_(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function M_(s,e){const t={stylesheet:g_(e),rules:{}};return Uc.set(s,t),t}function Bc(s,e,t,i,n,r,o,a=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const p=e+(t-e)*r(y);c+=y*100+`%{${o(p,1-p)}}
`}const h=c+`100% {${o(t,1-t)}}
}`,u=`__svelte_${v_(h)}_${a}`,d=t0(s),{stylesheet:f,rules:m}=Uc.get(d)||M_(d,s);m[u]||(m[u]=!0,f.insertRule(`@keyframes ${u} ${h}`,f.cssRules.length));const g=s.style.animation||"";return s.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${n}ms 1 both`,Nc+=1,u}function zc(s,e){const t=(s.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),n=t.length-i.length;n&&(s.style.animation=i.join(", "),Nc-=n,Nc||b_())}function b_(){Pd(()=>{Nc||(Uc.forEach(s=>{const{ownerNode:e}=s.stylesheet;e&&mt(e)}),Uc.clear())})}let Xa;function ka(s){Xa=s}function Id(){if(!Xa)throw new Error("Function called outside component initialization");return Xa}function Pr(s){Id().$$.on_mount.push(s)}function Nn(s){Id().$$.on_destroy.push(s)}function Bn(){const s=Id();return(e,t,{cancelable:i=!1}={})=>{const n=s.$$.callbacks[e];if(n){const r=s0(e,t,{cancelable:i});return n.slice().forEach(o=>{o.call(s,r)}),!r.defaultPrevented}return!0}}function Ni(s,e){const t=s.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const So=[],Os=[];let Do=[];const Ff=[],r0=Promise.resolve();let ju=!1;function o0(){ju||(ju=!0,r0.then(a0))}function w_(){return o0(),r0}function _n(s){Do.push(s)}const xh=new Set;let Dr=0;function a0(){if(Dr!==0)return;const s=Xa;do{try{for(;Dr<So.length;){const e=So[Dr];Dr++,ka(e),S_(e.$$)}}catch(e){throw So.length=0,Dr=0,e}for(ka(null),So.length=0,Dr=0;Os.length;)Os.pop()();for(let e=0;e<Do.length;e+=1){const t=Do[e];xh.has(t)||(xh.add(t),t())}Do.length=0}while(So.length);for(;Ff.length;)Ff.pop()();ju=!1,xh.clear(),ka(s)}function S_(s){if(s.fragment!==null){s.update(),bn(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(_n)}}function T_(s){const e=[],t=[];Do.forEach(i=>s.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),Do=e}let oa;function Dd(){return oa||(oa=Promise.resolve(),oa.then(()=>{oa=null})),oa}function xr(s,e,t){s.dispatchEvent(s0(`${e?"intro":"outro"}${t}`))}const Ac=new Set;let Rn;function Ki(){Rn={r:0,c:[],p:Rn}}function Zi(){Rn.r||bn(Rn.c),Rn=Rn.p}function we(s,e){s&&s.i&&(Ac.delete(s),s.i(e))}function Oe(s,e,t,i){if(s&&s.o){if(Ac.has(s))return;Ac.add(s),Rn.c.push(()=>{Ac.delete(s),i&&(t&&s.d(1),i())}),s.o(e)}else i&&i()}const Fd={duration:0};function l0(s,e,t){const i={direction:"in"};let n=e(s,t,i),r=!1,o,a,l=0;function c(){o&&zc(s,o)}function h(){const{delay:d=0,duration:f=300,easing:m=$c,tick:g=wt,css:y}=n||Fd;y&&(o=Bc(s,0,1,f,d,m,y,l++)),g(0,1);const p=Cd()+d,x=p+f;a&&a.abort(),r=!0,_n(()=>xr(s,!0,"start")),a=Ld(_=>{if(r){if(_>=x)return g(1,0),xr(s,!0,"end"),c(),r=!1;if(_>=p){const M=m((_-p)/f);g(M,1-M)}}return r})}let u=!1;return{start(){u||(u=!0,zc(s),tl(n)?(n=n(i),Dd().then(h)):h())},invalidate(){u=!1},end(){r&&(c(),r=!1)}}}function c0(s,e,t){const i={direction:"out"};let n=e(s,t,i),r=!0,o;const a=Rn;a.r+=1;function l(){const{delay:c=0,duration:h=300,easing:u=$c,tick:d=wt,css:f}=n||Fd;f&&(o=Bc(s,1,0,h,c,u,f));const m=Cd()+c,g=m+h;_n(()=>xr(s,!1,"start")),Ld(y=>{if(r){if(y>=g)return d(0,1),xr(s,!1,"end"),--a.r||bn(a.c),!1;if(y>=m){const p=u((y-m)/h);d(1-p,p)}}return r})}return tl(n)?Dd().then(()=>{n=n(i),l()}):l(),{end(c){c&&n.tick&&n.tick(1,0),r&&(o&&zc(s,o),r=!1)}}}function ko(s,e,t,i){const n={direction:"both"};let r=e(s,t,n),o=i?0:1,a=null,l=null,c=null;function h(){c&&zc(s,c)}function u(f,m){const g=f.b-o;return m*=Math.abs(g),{a:o,b:f.b,d:g,duration:m,start:f.start,end:f.start+m,group:f.group}}function d(f){const{delay:m=0,duration:g=300,easing:y=$c,tick:p=wt,css:x}=r||Fd,_={start:Cd()+m,b:f};f||(_.group=Rn,Rn.r+=1),a||l?l=_:(x&&(h(),c=Bc(s,o,f,g,m,y,x)),f&&p(0,1),a=u(_,g),_n(()=>xr(s,f,"start")),Ld(M=>{if(l&&M>l.start&&(a=u(l,g),l=null,xr(s,a.b,"start"),x&&(h(),c=Bc(s,o,a.b,a.duration,0,y,r.css))),a){if(M>=a.end)p(o=a.b,1-o),xr(s,a.b,"end"),l||(a.b?h():--a.group.r||bn(a.group.c)),a=null;else if(M>=a.start){const v=M-a.start;o=a.a+a.d*y(v/a.duration),p(o,1-o)}}return!!(a||l)}))}return{run(f){tl(r)?Dd().then(()=>{r=r(n),d(f)}):d(f)},end(){h(),a=l=null}}}function xi(s){s&&s.c()}function li(s,e,t,i){const{fragment:n,after_update:r}=s.$$;n&&n.m(e,t),i||_n(()=>{const o=s.$$.on_mount.map(Jg).filter(tl);s.$$.on_destroy?s.$$.on_destroy.push(...o):bn(o),s.$$.on_mount=[]}),r.forEach(_n)}function ci(s,e){const t=s.$$;t.fragment!==null&&(T_(t.after_update),bn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function A_(s,e){s.$$.dirty[0]===-1&&(So.push(s),o0(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function vi(s,e,t,i,n,r,o,a=[-1]){const l=Xa;ka(s);const c=s.$$={fragment:null,ctx:[],props:r,update:wt,not_equal:n,bound:If(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:If(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(s,e.props||{},(u,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&n(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),h&&A_(s,u)),d}):[],c.update(),h=!0,bn(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=__(e.target);c.fragment&&c.fragment.l(u),u.forEach(mt)}else c.fragment&&c.fragment.c();e.intro&&we(s.$$.fragment),li(s,e.target,e.anchor,e.customElement),a0()}ka(l)}class Mi{$destroy(){ci(this,1),this.$destroy=wt}$on(e,t){if(!tl(t))return wt;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!m_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class E_{constructor(){this.target=new EventTarget,this.events=new Map,this.callbacks=new Map}add(e,t){this.callbacks.set(e,t),this.events.set(e,new dP(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t=null){const i=this.events.get(e);i&&(i.data=t,this.target.dispatchEvent(i))}remove(e){const t=this.callbacks.get(e);this.target.removeEventListener(e,t,!1),this.callbacks.delete(e),this.events.delete(e)}dispose(){for(const[e]of this.events)this.remove(e);this.callbacks.clear(),this.events.clear()}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,kc=180/Math.PI;function Lr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ni[s&255]+ni[s>>8&255]+ni[s>>16&255]+ni[s>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]).toLowerCase()}function ai(s,e,t){return Math.max(e,Math.min(t,s))}function R_(s,e){return(s%e+e)%e}function vh(s,e,t){return(1-t)*s+t*e}function C_(s){return s*Ec}function P_(s){return s*kc}function Uf(s){return(s&s-1)===0&&s!==0}function L_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ns(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}let Ei=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let y=1-a;const p=l*d+c*f+h*m+u*g,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const v=Math.sqrt(_),b=Math.atan2(v,p*x);y=Math.sin(y*b)/v,a=Math.sin(a*b)/v}const M=a*x;if(l=l*y+d*M,c=c*y+f*M,h=h*y+m*M,u=u*y+g*M,y===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ai(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class h0{constructor(e=0,t=0,i=0){h0.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-r*n,u=l*n+r*i-o*t,d=-r*t-o*i-a*n;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ai(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Mh=new I,Nf=new Ei;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const u0="152",Oo=0,d0=1,f0=2,Bf=1,I_=100,D_=204,F_=205,U_=3,N_=0,p0=300,ja=1e3,Ia=1001,qu=1002,$u=1003,B_=1004,z_=1005,Ud=1006,k_=1007,Nd=1008,O_=1009,V_=1015,m0=1023,qa=2300,Vo=2301,bh=2302,zf=2400,kf=2401,Of=2402,H_=2500,G_=0,g0=1,Yu=2,W_=3e3,wh=3001,X_=0,Sh="",Qt="srgb",Bd="srgb-linear",y0="display-p3",Th=7680,j_=519,Ku=35044;let Kc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}};const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vf=1234567;const Oa=Math.PI/180,$a=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[s&255]+si[s>>8&255]+si[s>>16&255]+si[s>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function ei(s,e,t){return Math.max(e,Math.min(t,s))}function zd(s,e){return(s%e+e)%e}function q_(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function $_(s,e,t){return s!==e?(t-s)/(e-s):0}function Va(s,e,t){return(1-t)*s+t*e}function Y_(s,e,t,i){return Va(s,e,1-Math.exp(-t*i))}function K_(s,e=1){return e-Math.abs(zd(s,e*2)-e)}function Z_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function J_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Q_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ex(s,e){return s+Math.random()*(e-s)}function tx(s){return s*(.5-Math.random())}function ix(s){s!==void 0&&(Vf=s);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nx(s){return s*Oa}function sx(s){return s*$a}function rx(s){return(s&s-1)===0&&s!==0}function _0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ox(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ax(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function cs(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const x0={DEG2RAD:Oa,RAD2DEG:$a,generateUUID:yn,clamp:ei,euclideanModulo:zd,mapLinear:q_,inverseLerp:$_,lerp:Va,damp:Y_,pingpong:K_,smoothstep:Z_,smootherstep:J_,randInt:Q_,randFloat:ex,randFloatSpread:tx,seededRandom:ix,degToRad:nx,radToDeg:sx,isPowerOfTwo:rx,ceilPowerOfTwo:_0,floorPowerOfTwo:ox,setQuaternionFromProperEuler:ax,normalize:ft,denormalize:cs};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ei(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Hs=class v0{constructor(){v0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],g=n[0],y=n[3],p=n[6],x=n[1],_=n[4],M=n[7],v=n[2],b=n[5],S=n[8];return r[0]=o*g+a*x+l*v,r[3]=o*y+a*_+l*b,r[6]=o*p+a*M+l*S,r[1]=c*g+h*x+u*v,r[4]=c*y+h*_+u*b,r[7]=c*p+h*M+u*S,r[2]=d*g+f*x+m*v,r[5]=d*y+f*_+m*b,r[8]=d*p+f*M+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Ah=new Hs;function lx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Hf={};function Eh(s){s in Hf||(Hf[s]=!0,console.warn(s))}function Fo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const cx=new Hs().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hx=new Hs().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ux(s){return s.convertSRGBToLinear().applyMatrix3(hx)}function dx(s){return s.applyMatrix3(cx).convertLinearToSRGB()}const fx={[Bd]:s=>s,[Qt]:s=>s.convertSRGBToLinear(),[y0]:ux},px={[Bd]:s=>s,[Qt]:s=>s.convertLinearToSRGB(),[y0]:dx},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Bd},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=fx[e],n=px[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Fr,mx=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=Zu("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Fo(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fo(t[i]/255)*255):t[i]=Fo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gx=class{constructor(e=null){this.isSource=!0,this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Ch(n[o].image)):r.push(Ch(n[o]))}else r=Ch(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yx=0,Tr=class Rc extends Kc{constructor(e=Rc.DEFAULT_IMAGE,t=Rc.DEFAULT_MAPPING,i=Ia,n=Ia,r=Ud,o=Nd,a=m0,l=O_,c=Rc.DEFAULT_ANISOTROPY,h=Sh){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=yn(),this.name="",this.source=new gx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Hs,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Eh("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wh?Qt:Sh),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Ia:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Ia:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Eh("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?wh:W_}set encoding(e){Eh("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wh?Qt:Sh}};Tr.DEFAULT_IMAGE=null;Tr.DEFAULT_MAPPING=p0;Tr.DEFAULT_ANISOTROPY=1;let zi=class M0{constructor(e=0,t=0,i=0,n=1){M0.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],y=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(f+1)/2,v=(p+1)/2,b=(h+d)/4,S=(u+g)/4,E=(m+y)/4;return _>M&&_>v?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=b/i,r=S/i):M>v?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=b/n,r=E/n):v<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(v),i=S/r,n=E/r),this.set(i,n,r,t),this}let x=Math.sqrt((y-m)*(y-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(y-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class Gs{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let y=1-a;const p=l*d+c*f+h*m+u*g,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const v=Math.sqrt(_),b=Math.atan2(v,p*x);y=Math.sin(y*b)/v,a=Math.sin(a*b)/v}const M=a*x;if(l=l*y+d*M,c=c*y+f*M,h=h*y+m*M,u=u*y+g*M,y===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ei(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-r*n,u=l*n+r*i-o*t,d=-r*t-o*i-a*n;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ei(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new D,Gf=new Gs;let Lt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox),Ur.applyMatrix4(e.matrixWorld),this.union(Ur);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Hn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const i=e.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),al.subVectors(this.max,aa),Nr.subVectors(e.a,aa),Br.subVectors(e.b,aa),zr.subVectors(e.c,aa),_s.subVectors(Br,Nr),xs.subVectors(zr,Br),Ks.subVectors(Nr,zr);let t=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-Ks.z,Ks.y,_s.z,0,-_s.x,xs.z,0,-xs.x,Ks.z,0,-Ks.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-Ks.y,Ks.x,0];return!Lh(t,Nr,Br,zr,al)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,Nr,Br,zr,al))?!1:(ll.crossVectors(_s,xs),t=[ll.x,ll.y,ll.z],Lh(t,Nr,Br,zr,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const Vn=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,Ur=new Lt,Nr=new D,Br=new D,zr=new D,_s=new D,xs=new D,Ks=new D,aa=new D,al=new D,ll=new D,Zs=new D;function Lh(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Zs.fromArray(s,r);const a=n.x*Math.abs(Zs.x)+n.y*Math.abs(Zs.y)+n.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),h=i.dot(Zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _x=new Lt,la=new D,Ih=new D;let zn=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_x.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(la,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Ih)),this.expandByPoint(la.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Gn=new D,Dh=new D,cl=new D,vs=new D,Fh=new D,hl=new D,Uh=new D;let kd=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Dh.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(Dh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cl),a=vs.dot(this.direction),l=-vs.dot(cl),c=vs.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Dh).addScaledVector(cl,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),n=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,n,r){Fh.subVectors(t,e),hl.subVectors(i,e),Uh.crossVectors(Fh,hl);let o=this.direction.dot(Uh),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);const l=a*this.direction.dot(hl.crossVectors(vs,hl));if(l<0)return null;const c=a*this.direction.dot(Fh.cross(vs));if(c<0||l+c>o)return null;const h=-a*vs.dot(Uh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class Ju{constructor(){Ju.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,o,a,l,c,h,u,d,f,m,g,y){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ju().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/kr.setFromMatrixColumn(e,0).length(),r=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xx,e,vx)}lookAt(e,t,i){const n=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Ms.crossVectors(i,Li),Ms.lengthSq()===0&&(Math.abs(i.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Ms.crossVectors(i,Li)),Ms.normalize(),ul.crossVectors(Li,Ms),n[0]=Ms.x,n[4]=ul.x,n[8]=Li.x,n[1]=Ms.y,n[5]=ul.y,n[9]=Li.y,n[2]=Ms.z,n[6]=ul.z,n[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],g=i[6],y=i[10],p=i[14],x=i[3],_=i[7],M=i[11],v=i[15],b=n[0],S=n[4],E=n[8],w=n[12],T=n[1],F=n[5],L=n[9],C=n[13],U=n[2],N=n[6],W=n[10],k=n[14],G=n[3],X=n[7],ee=n[11],oe=n[15];return r[0]=o*b+a*T+l*U+c*G,r[4]=o*S+a*F+l*N+c*X,r[8]=o*E+a*L+l*W+c*ee,r[12]=o*w+a*C+l*k+c*oe,r[1]=h*b+u*T+d*U+f*G,r[5]=h*S+u*F+d*N+f*X,r[9]=h*E+u*L+d*W+f*ee,r[13]=h*w+u*C+d*k+f*oe,r[2]=m*b+g*T+y*U+p*G,r[6]=m*S+g*F+y*N+p*X,r[10]=m*E+g*L+y*W+p*ee,r[14]=m*w+g*C+y*k+p*oe,r[3]=x*b+_*T+M*U+v*G,r[7]=x*S+_*F+M*N+v*X,r[11]=x*E+_*L+M*W+v*ee,r[15]=x*w+_*C+M*k+v*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],y=e[11],p=e[15];return m*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+g*(+t*l*f-t*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+y*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],y=e[14],p=e[15],x=u*y*c-g*d*c+g*l*f-a*y*f-u*l*p+a*d*p,_=m*d*c-h*y*c-m*l*f+o*y*f+h*l*p-o*d*p,M=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,v=m*u*l-h*g*l-m*a*d+o*g*d+h*a*y-o*u*y,b=t*x+i*_+n*M+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=x*S,e[1]=(g*d*r-u*y*r-g*n*f+i*y*f+u*n*p-i*d*p)*S,e[2]=(a*y*r-g*l*r+g*n*c-i*y*c-a*n*p+i*l*p)*S,e[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*S,e[4]=_*S,e[5]=(h*y*r-m*d*r+m*n*f-t*y*f-h*n*p+t*d*p)*S,e[6]=(m*l*r-o*y*r-m*n*c+t*y*c+o*n*p-t*l*p)*S,e[7]=(o*d*r-h*l*r+h*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=M*S,e[9]=(m*u*r-h*g*r-m*i*f+t*g*f+h*i*p-t*u*p)*S,e[10]=(o*g*r-m*a*r+m*i*c-t*g*c-o*i*p+t*a*p)*S,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*S,e[12]=v*S,e[13]=(h*g*n-m*u*n+m*i*d-t*g*d-h*i*y+t*u*y)*S,e[14]=(m*a*n-o*g*n-m*i*l+t*g*l+o*i*y-t*a*y)*S,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,g=o*h,y=o*u,p=a*u,x=l*c,_=l*h,M=l*u,v=i.x,b=i.y,S=i.z;return n[0]=(1-(g+p))*v,n[1]=(f+M)*v,n[2]=(m-_)*v,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+p))*b,n[6]=(y+x)*b,n[7]=0,n[8]=(m+_)*S,n[9]=(y-x)*S,n[10]=(1-(d+g))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=kr.set(n[0],n[1],n[2]).length();const o=kr.set(n[4],n[5],n[6]).length(),a=kr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,r,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-r),u=(t+e)*l,d=(i+n)*c,f=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const kr=new D,on=new Ee,xx=new D(0,0,0),vx=new D(1,1,1),Ms=new D,ul=new D,Li=new D,Wf=new Ee,Xf=new Gs;let b0=class w0{constructor(e=0,t=0,i=0,n=w0.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ei(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ei(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ei(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ei(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ei(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ei(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};b0.DEFAULT_ORDER="XYZ";let Mx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bx=0;const jf=new D,Or=new Gs,Wn=new Ee,dl=new D,ca=new D,wx=new D,Sx=new Gs,qf=new D(1,0,0),$f=new D(0,1,0),Yf=new D(0,0,1),Tx={type:"added"},Kf={type:"removed"};let ti=class Cc extends Kc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cc.DEFAULT_UP.clone();const e=new D,t=new b0,i=new Gs,n=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Hs}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Cc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Cc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(qf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dl.copy(e):dl.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(ca,dl,this.up):Wn.lookAt(dl,ca,this.up),this.quaternion.setFromRotationMatrix(Wn),n&&(Wn.extractRotation(n.matrixWorld),Or.setFromRotationMatrix(Wn),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Kf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}};ti.DEFAULT_UP=new D(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,Xn=new D,Nh=new D,jn=new D,Vr=new D,Hr=new D,Zf=new D,Bh=new D,zh=new D,kh=new D;let fl=!1,Cn=class hr{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),an.subVectors(e,t),n.cross(an);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){an.subVectors(n,t),Xn.subVectors(i,t),Nh.subVectors(e,t);const o=an.dot(an),a=an.dot(Xn),l=an.dot(Nh),c=Xn.dot(Xn),h=Xn.dot(Nh),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,i,n,r,o,a,l){return fl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fl=!0),this.getInterpolation(e,t,i,n,r,o,a,l)}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,jn),l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l}static isFrontFacing(e,t,i,n){return an.subVectors(i,t),Xn.subVectors(e,t),an.cross(Xn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),an.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return fl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fl=!0),hr.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return hr.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;Vr.subVectors(n,i),Hr.subVectors(r,i),Bh.subVectors(e,i);const l=Vr.dot(Bh),c=Hr.dot(Bh);if(l<=0&&c<=0)return t.copy(i);zh.subVectors(e,n);const h=Vr.dot(zh),u=Hr.dot(zh);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Vr,o);kh.subVectors(e,r);const f=Vr.dot(kh),m=Hr.dot(kh);if(m>=0&&f<=m)return t.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Hr,a);const y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return Zf.subVectors(r,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Zf,a);const p=1/(y+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(Vr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ax=0,vr=class extends Kc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Bf,this.side=Oo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=D_,this.blendDst=F_,this.blendEquation=I_,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=U_,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Th,this.stencilZFail=Th,this.stencilZPass=Th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bf&&(i.blending=this.blending),this.side!==Oo&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Oh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let $t=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=rn.workingColorSpace){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=rn.workingColorSpace){if(e=zd(e,1),t=ei(t,0,1),i=ei(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oh(o,r,e+1/3),this.g=Oh(o,r,e),this.b=Oh(o,r,e-1/3)}return rn.toWorkingColorSpace(this,n),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=S0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}copyLinearToSRGB(e){return this.r=Rh(e.r),this.g=Rh(e.g),this.b=Rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return rn.fromWorkingColorSpace(ri.copy(this),e),Math.round(ei(ri.r*255,0,255))*65536+Math.round(ei(ri.g*255,0,255))*256+Math.round(ei(ri.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(ri.copy(this),t);const i=ri.r,n=ri.g,r=ri.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=Qt){rn.fromWorkingColorSpace(ri.copy(this),e);const t=ri.r,i=ri.g,n=ri.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=i,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(pl);const i=Va(ln.h,pl.h,t),n=Va(ln.s,pl.s,t),r=Va(ln.l,pl.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const ri=new $t;$t.NAMES=S0;let Ao=class extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const Dt=new D,ml=new ct;let gi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ku,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},Ex=class extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Rx=class extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},hs=class extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cx=0;const Wi=new Ee,Vh=new ti,Gr=new D,Ii=new Lt,ha=new Lt,Xt=new D;let Dn=class T0 extends Kc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?Rx:Ex)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Hs().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,i){return Wi.makeTranslation(e,t,i),this.applyMatrix4(Wi),this}scale(e,t,i){return Wi.makeScale(e,t,i),this.applyMatrix4(Wi),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Ii.min,ha.min),Ii.expandByPoint(Xt),Xt.addVectors(Ii.max,ha.max),Ii.expandByPoint(Xt)):(Ii.expandByPoint(ha.min),Ii.expandByPoint(ha.max))}Ii.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Xt.add(Gr)),n=Math.max(n,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new D,h[T]=new D;const u=new D,d=new D,f=new D,m=new ct,g=new ct,y=new ct,p=new D,x=new D;function _(T,F,L){u.fromArray(n,T*3),d.fromArray(n,F*3),f.fromArray(n,L*3),m.fromArray(o,T*2),g.fromArray(o,F*2),y.fromArray(o,L*2),d.sub(u),f.sub(u),g.sub(m),y.sub(m);const C=1/(g.x*y.y-y.x*g.y);isFinite(C)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(C),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(C),c[T].add(p),c[F].add(p),c[L].add(p),h[T].add(x),h[F].add(x),h[L].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,F=M.length;T<F;++T){const L=M[T],C=L.start,U=L.count;for(let N=C,W=C+U;N<W;N+=3)_(i[N+0],i[N+1],i[N+2])}const v=new D,b=new D,S=new D,E=new D;function w(T){S.fromArray(r,T*3),E.copy(S);const F=c[T];v.copy(F),v.sub(S.multiplyScalar(S.dot(F))).normalize(),b.crossVectors(E,F);const C=b.dot(h[T])<0?-1:1;l[T*4]=v.x,l[T*4+1]=v.y,l[T*4+2]=v.z,l[T*4+3]=C}for(let T=0,F=M.length;T<F;++T){const L=M[T],C=L.start,U=L.count;for(let N=C,W=C+U;N<W;N+=3)w(i[N+0]),w(i[N+1]),w(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new gi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new T0,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Jf=new Ee,Sn=new kd,gl=new zn,Qf=new D,Wr=new D,Xr=new D,jr=new D,Hh=new D,yl=new D,_l=new ct,xl=new ct,vl=new ct,ep=new D,tp=new D,ip=new D,Ml=new D,bl=new D;let Zc=class extends ti{constructor(e=new Dn,t=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Hh.fromBufferAttribute(u,e),o?yl.addScaledVector(Hh,h):yl.addScaledVector(Hh.sub(t),h))}t.add(yl)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),Sn.copy(e.ray).recast(e.near),!(gl.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(gl,Qf)===null||Sn.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&(Jf.copy(r).invert(),Sn.copy(e.ray).applyMatrix4(Jf),!(i.boundingBox!==null&&Sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,r=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(r))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=r[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,M=x;_<M;_+=3){const v=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);i=wl(this,y,e,Sn,l,c,h,v,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=wl(this,r,e,Sn,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=r[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,M=x;_<M;_+=3){const v=_,b=_+1,S=_+2;i=wl(this,y,e,Sn,l,c,h,v,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=g,x=g+1,_=g+2;i=wl(this,r,e,Sn,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Px(s,e,t,i,n,r,o,a){let l;if(e.side===d0?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Oo,a),l===null)return null;bl.copy(a),bl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(bl);return c<t.near||c>t.far?null:{distance:c,point:bl.clone(),object:s}}function wl(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Wr),s.getVertexPosition(l,Xr),s.getVertexPosition(c,jr);const h=Px(s,e,t,i,Wr,Xr,jr,Ml);if(h){n&&(_l.fromBufferAttribute(n,a),xl.fromBufferAttribute(n,l),vl.fromBufferAttribute(n,c),h.uv=Cn.getInterpolation(Ml,Wr,Xr,jr,_l,xl,vl,new ct)),r&&(_l.fromBufferAttribute(r,a),xl.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,c),h.uv1=Cn.getInterpolation(Ml,Wr,Xr,jr,_l,xl,vl,new ct),h.uv2=h.uv1),o&&(ep.fromBufferAttribute(o,a),tp.fromBufferAttribute(o,l),ip.fromBufferAttribute(o,c),h.normal=Cn.getInterpolation(Ml,Wr,Xr,jr,ep,tp,ip,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Cn.getNormal(Wr,Xr,jr,u.normal),h.face=u}return h}let Lx=class A0 extends Dn{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new hs(c,3)),this.setAttribute("normal",new hs(h,3)),this.setAttribute("uv",new hs(u,2));function m(g,y,p,x,_,M,v,b,S,E,w){const T=M/S,F=v/E,L=M/2,C=v/2,U=b/2,N=S+1,W=E+1;let k=0,G=0;const X=new D;for(let ee=0;ee<W;ee++){const oe=ee*F-C;for(let Z=0;Z<N;Z++){const V=Z*T-L;X[g]=V*x,X[y]=oe*_,X[p]=U,c.push(X.x,X.y,X.z),X[g]=0,X[y]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(Z/S),u.push(1-ee/E),k+=1}}for(let ee=0;ee<E;ee++)for(let oe=0;oe<S;oe++){const Z=d+oe+N*ee,V=d+oe+N*(ee+1),j=d+(oe+1)+N*(ee+1),ne=d+(oe+1)+N*ee;l.push(Z,V,ne),l.push(V,j,ne),G+=6}a.addGroup(f,G,w),f+=G,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new A0(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},E0=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Od=class extends E0{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Gh=new D,Ix=new D,Dx=new Hs;let Is=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Gh.subVectors(i,t).cross(Ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dx.getNormalMatrix(e),n=this.coplanarPoint(Gh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Js=new zn,Sl=new D;let Fx=class{constructor(e=new Is,t=new Is,i=new Is,n=new Is,r=new Is,o=new Is){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],g=i[11],y=i[12],p=i[13],x=i[14],_=i[15];return t[0].setComponents(a-n,u-l,g-d,_-y).normalize(),t[1].setComponents(a+n,u+l,g+d,_+y).normalize(),t[2].setComponents(a+r,u+c,g+f,_+p).normalize(),t[3].setComponents(a-r,u-c,g-f,_-p).normalize(),t[4].setComponents(a-o,u-h,g-m,_-x).normalize(),t[5].setComponents(a+o,u+h,g+m,_+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Sl.x=n.normal.x>0?e.max.x:e.min.x,Sl.y=n.normal.y>0?e.max.y:e.min.y,Sl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},R0=class extends E0{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wh=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}};class Ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ku,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const di=new D;class Vd{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)di.fromBufferAttribute(this,t),di.applyMatrix4(e),this.setXYZ(t,di.x,di.y,di.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)di.fromBufferAttribute(this,t),di.applyNormalMatrix(e),this.setXYZ(t,di.x,di.y,di.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)di.fromBufferAttribute(this,t),di.transformDirection(e),this.setXYZ(t,di.x,di.y,di.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cs(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const np=new D,sp=new zi,rp=new zi,Nx=new D,op=new Ee,qr=new D;class Bx extends Zc{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)qr.fromBufferAttribute(t,i),this.applyBoneTransform(i,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)qr.fromBufferAttribute(t,i),this.applyBoneTransform(i,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new zi,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;sp.fromBufferAttribute(n.attributes.skinIndex,e),rp.fromBufferAttribute(n.attributes.skinWeight,e),np.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=rp.getComponent(r);if(o!==0){const a=sp.getComponent(r);op.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Nx.copy(np).applyMatrix4(op),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class C0 extends ti{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zx extends Tr{constructor(e=null,t=1,i=1,n,r,o,a,l,c=$u,h=$u,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ap=new Ee,kx=new Ee;class Hd{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kx;ap.multiplyMatrices(a,t[r]),ap.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Hd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=_0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new zx(t,e,e,m0,V_);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new C0),this.bones.push(o),this.boneInverses.push(new Ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}let lp=class extends gi{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};const $r=new Ee,cp=new Ee,Tl=[],hp=new Lt,Ox=new Ee,ua=new Zc,da=new zn;let Vx=class extends Zc{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ox)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$r),hp.copy(e.boundingBox).applyMatrix4($r),this.boundingBox.union(hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$r),da.copy(e.boundingSphere).applyMatrix4($r),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,$r),cp.multiplyMatrices(i,$r),ua.matrixWorld=cp,ua.raycast(e,Tl);for(let o=0,a=Tl.length;o<a;o++){const l=Tl[o];l.instanceId=r,l.object=this,t.push(l)}Tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class P0 extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const up=new D,dp=new D,fp=new Ee,Xh=new kd,Al=new zn;class Gd extends ti{constructor(e=new Dn,t=new P0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)up.fromBufferAttribute(t,n-1),dp.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=up.distanceTo(dp);e.setAttribute("lineDistance",new hs(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(n),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;fp.copy(n).invert(),Xh.copy(e.ray).applyMatrix4(fp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,d=new D,f=this.isLineSegments?2:1,m=i.index,y=i.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,M=x-1;_<M;_+=f){const v=m.getX(_),b=m.getX(_+1);if(c.fromBufferAttribute(y,v),h.fromBufferAttribute(y,b),Xh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(y.count,o.start+o.count);for(let _=p,M=x-1;_<M;_+=f){if(c.fromBufferAttribute(y,_),h.fromBufferAttribute(y,_+1),Xh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const pp=new D,mp=new D;class Hx extends Gd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)pp.fromBufferAttribute(t,n),mp.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+pp.distanceTo(mp);e.setAttribute("lineDistance",new hs(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gx extends Gd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let L0=class extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const gp=new Ee,Qu=new kd,El=new zn,Rl=new D;let Wx=class extends ti{constructor(e=new Dn,t=new L0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(n),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;gp.copy(n).invert(),Qu.copy(e.ray).applyMatrix4(gp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const y=c.getX(m);Rl.fromBufferAttribute(u,y),yp(Rl,y,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)Rl.fromBufferAttribute(u,m),yp(Rl,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yp(s,e,t,i,n,r,o){const a=Qu.distanceSqToPoint(s);if(a<t){const l=new D;Qu.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}let Wd=class extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X_,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};class Ir extends Wd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ei(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function bs(s,e,t){return I0(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Cl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function I0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xx(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function _p(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function D0(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}let il=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jx=class extends il{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zf,endingEnd:zf}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case kf:r=e,a=2*t-i;break;case Of:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kf:o=e,l=2*i-t;break;case Of:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,y=g*m,p=-d*y+2*d*g-d*m,x=(1+d)*y+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*y+(1.5+f)*g+.5*m,M=f*y-f*g;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+x*o[c+v]+_*o[l+v]+M*o[u+v];return r}},qx=class extends il{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},$x=class extends il{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cl(t,this.TimeBufferType),this.values=Cl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Cl(e.times,Array),values:Cl(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $x(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case Vo:t=this.InterpolantFactoryMethodLinear;break;case bh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=bs(i,r,o),this.values=bs(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&I0(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=bs(this.times),t=bs(this.values),i=this.getValueSize(),n=this.getInterpolation()===bh,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=bs(e,0,o),this.values=bs(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=bs(this.times,0),t=bs(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Vo;let Yo=class extends kn{};Yo.prototype.ValueTypeName="bool";Yo.prototype.ValueBufferType=Array;Yo.prototype.DefaultInterpolation=qa;Yo.prototype.InterpolantFactoryMethodLinear=void 0;Yo.prototype.InterpolantFactoryMethodSmooth=void 0;let F0=class extends kn{};F0.prototype.ValueTypeName="color";let Ya=class extends kn{};Ya.prototype.ValueTypeName="number";let Yx=class extends il{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Gs.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ar=class extends kn{InterpolantFactoryMethodLinear(e){return new Yx(this.times,this.values,this.getValueSize(),e)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.DefaultInterpolation=Vo;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;let Ko=class extends kn{};Ko.prototype.ValueTypeName="string";Ko.prototype.ValueBufferType=Array;Ko.prototype.DefaultInterpolation=qa;Ko.prototype.InterpolantFactoryMethodLinear=void 0;Ko.prototype.InterpolantFactoryMethodSmooth=void 0;let Ka=class extends kn{};Ka.prototype.ValueTypeName="vector";let Kx=class{constructor(e,t=-1,i,n=H_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Jx(i[o]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(kn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Xx(l);l=_p(l,1,h),c=_p(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ya(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,g){if(f.length!==0){const y=[],p=[];D0(f,y,p,m),y.length!==0&&g.push(new u(d,y,p))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const y=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];y.push(_.time),p.push(_.morphTarget===g?1:0)}n.push(new Ya(".morphTargetInfluence["+g+"]",y,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Ka,f+".position",d,"pos",n),i(Ar,f+".quaternion",d,"rot",n),i(Ka,f+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Zx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ya;case"vector":case"vector2":case"vector3":case"vector4":return Ka;case"color":return F0;case"quaternion":return Ar;case"bool":case"boolean":return Yo;case"string":return Ko}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zx(s.type);if(s.times===void 0){const t=[],i=[];D0(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ho={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};let Qx=class{constructor(e,t,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}};const ev=new Qx;let nl=class{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const qn={};let tv=class extends Error{constructor(e,t){super(e),this.response=t}},U0=class extends nl{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ho.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:i,onError:n});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const y=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:M})=>{if(_)p.close();else{g+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let b=0,S=h.length;b<S;b++){const E=h[b];E.onProgress&&E.onProgress(v)}p.enqueue(M),x()}})}}});return new Response(y)}else throw new tv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ho.add(e,c);const h=qn[e];delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},iv=class extends nl{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ho.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zu("img");function l(){h(),Ho.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},nv=class extends nl{constructor(e){super(e)}load(e,t,i,n){const r=new Tr,o=new iv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Xd=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const jh=new Ee,xp=new D,vp=new D;let jd=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fx,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new zi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(xp),vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vp),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};class sv extends jd{constructor(){super(new Od(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=$a*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rv extends Xd{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mp=new Ee,fa=new D,qh=new D;let ov=class extends jd{constructor(){super(new Od(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new zi(2,1,1,1),new zi(0,1,1,1),new zi(3,1,1,1),new zi(1,1,1,1),new zi(3,0,1,1),new zi(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),i.position.copy(fa),qh.copy(i.position),qh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qh),i.updateMatrixWorld(),n.makeTranslation(-fa.x,-fa.y,-fa.z),Mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp)}},av=class extends Xd{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},lv=class extends jd{constructor(){super(new R0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},N0=class extends Xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new lv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class ed{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}let cv=class extends nl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ho.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ho.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){n&&n(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};const qd="\\[\\]\\.:\\/",hv=new RegExp("["+qd+"]","g"),$d="[^"+qd+"]",uv="[^"+qd.replace("\\.","")+"]",dv=/((?:WC+[\/:])*)/.source.replace("WC",$d),fv=/(WCOD+)?/.source.replace("WCOD",uv),pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$d),mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$d),gv=new RegExp("^"+dv+fv+pv+mv+"$"),yv=["material","materials","bones","map"];let _v=class{constructor(e,t,i){const n=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class To{constructor(e,t,i){this.path=t,this.parsedPath=i||To.parseTrackName(t),this.node=To.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new To.Composite(e,t,i):new To(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(e){const t=gv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);yv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=To.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=_v;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const bp=new D,Pl=new D;let us=class{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bp.subVectors(e,this.start),Pl.subVectors(this.end,this.start);const i=Pl.dot(Pl);let r=Pl.dot(bp)/i;return t&&(r=ei(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:u0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=u0);const Kt=new Cn,Ll=new D;class xv{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,i=new Float32Array(e.count/3);for(let r=0;r<e.count;r+=3){let o=1;t&&(o=t.getX(r)+t.getX(r+1)+t.getX(r+2)),Kt.a.fromBufferAttribute(e,r),Kt.b.fromBufferAttribute(e,r+1),Kt.c.fromBufferAttribute(e,r+2),o*=Kt.getArea(),i[r/3]=o}this.distribution=new Float32Array(e.count/3);let n=0;for(let r=0;r<i.length;r++)n+=i[r],this.distribution[r]=n;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i){const n=this.distribution[this.distribution.length-1],r=this.binarySearch(this.randomFunction()*n);return this.sampleFace(r,e,t,i)}binarySearch(e){const t=this.distribution;let i=0,n=t.length-1,r=-1;for(;i<=n;){const o=Math.ceil((i+n)/2);if(o===0||t[o-1]<=e&&t[o]>e){r=o;break}else e<t[o]?n=o-1:i=o+1}return r}sampleFace(e,t,i,n){let r=this.randomFunction(),o=this.randomFunction();return r+o>1&&(r=1-r,o=1-o),Kt.a.fromBufferAttribute(this.positionAttribute,e*3),Kt.b.fromBufferAttribute(this.positionAttribute,e*3+1),Kt.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(Kt.a,r).addScaledVector(Kt.b,o).addScaledVector(Kt.c,1-(r+o)),i!==void 0&&Kt.getNormal(i),n!==void 0&&this.colorAttribute!==void 0&&(Kt.a.fromBufferAttribute(this.colorAttribute,e*3),Kt.b.fromBufferAttribute(this.colorAttribute,e*3+1),Kt.c.fromBufferAttribute(this.colorAttribute,e*3+2),Ll.set(0,0,0).addScaledVector(Kt.a,r).addScaledVector(Kt.b,o).addScaledVector(Kt.c,1-(r+o)),n.r=Ll.x,n.g=Ll.y,n.b=Ll.z),this}}const vv="152",Mv=0,wp=1,bv=2,B0=1,z0=2,is=3,xn=0,Ri=1,En=2,ks=0,Uo=1,td=2,Sp=3,Tp=4,k0=5,mr=100,wv=101,Sv=102,Ap=103,Ep=104,Tv=200,O0=201,Av=202,Ev=203,V0=204,Yd=205,Rv=206,Cv=207,Pv=208,Lv=209,Iv=210,Dv=0,Fv=1,Uv=2,id=3,Nv=4,Bv=5,zv=6,kv=7,Jc=0,Ov=1,Vv=2,ds=0,Hv=1,Gv=2,Wv=3,H0=4,Xv=5,G0=300,Go=301,Wo=302,nd=303,sd=304,Qc=306,rd=1e3,mn=1001,od=1002,kt=1003,Rp=1004,$h=1005,$i=1006,jv=1007,Za=1008,Er=1009,qv=1010,$v=1011,W0=1012,Yv=1013,yr=1014,_r=1015,Ja=1016,Kv=1017,Zv=1018,Mr=1020,Jv=1021,Ai=1023,Qv=1024,eM=1025,br=1026,Rr=1027,tM=1028,iM=1029,nM=1030,sM=1031,rM=1033,Yh=33776,Kh=33777,Zh=33778,Jh=33779,Cp=35840,Pp=35841,Lp=35842,Ip=35843,oM=36196,Dp=37492,Fp=37496,Up=37808,Np=37809,Bp=37810,zp=37811,kp=37812,Op=37813,Vp=37814,Hp=37815,Gp=37816,Wp=37817,Xp=37818,jp=37819,qp=37820,$p=37821,Qh=36492,aM=36283,Yp=36284,Kp=36285,Zp=36286,Bi=2200,lM=2201,cM=2202,Oc=2300,Vc=2301,eu=2302,Eo=2400,Ro=2401,Hc=2402,Kd=2500,hM=2501,X0=3e3,wr=3001,uM=3200,dM=3201,eh=0,fM=1,Sr="",De="srgb",Un="srgb-linear",j0="display-p3",tu=7680,pM=519,Jp=35044,Xo="300 es",ad=1035;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}let mM=0,Xs=class extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Uo,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=V0,this.blendDst=Yd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=id,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tu,this.stencilZFail=tu,this.stencilZPass=tu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Le=class q0{constructor(e=0,t=0){q0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ai(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],g=n[0],y=n[3],p=n[6],x=n[1],_=n[4],M=n[7],v=n[2],b=n[5],S=n[8];return r[0]=o*g+a*x+l*v,r[3]=o*y+a*_+l*b,r[6]=o*p+a*M+l*S,r[1]=c*g+h*x+u*v,r[4]=c*y+h*_+u*b,r[7]=c*p+h*M+u*S,r[2]=d*g+f*x+m*v,r[5]=d*y+f*_+m*b,r[8]=d*p+f*M+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(iu.makeScale(e,t)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new qe;function No(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function nu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const gM=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yM=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function _M(s){return s.convertSRGBToLinear().applyMatrix3(yM)}function xM(s){return s.applyMatrix3(gM).convertLinearToSRGB()}const vM={[Un]:s=>s,[De]:s=>s.convertSRGBToLinear(),[j0]:_M},MM={[Un]:s=>s,[De]:s=>s.convertLinearToSRGB(),[j0]:xM},cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Un},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=vM[e],n=MM[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},$0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Il={h:0,s:0,l:0};function su(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=cn.workingColorSpace){return this.r=e,this.g=t,this.b=i,cn.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=cn.workingColorSpace){if(e=R_(e,1),t=ai(t,0,1),i=ai(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=su(o,r,e+1/3),this.g=su(o,r,e),this.b=su(o,r,e-1/3)}return cn.toWorkingColorSpace(this,n),this}setStyle(e,t=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=De){const i=$0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return cn.fromWorkingColorSpace(oi.copy(this),e),Math.round(ai(oi.r*255,0,255))*65536+Math.round(ai(oi.g*255,0,255))*256+Math.round(ai(oi.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cn.workingColorSpace){cn.fromWorkingColorSpace(oi.copy(this),t);const i=oi.r,n=oi.g,r=oi.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=cn.workingColorSpace){return cn.fromWorkingColorSpace(oi.copy(this),t),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=De){cn.fromWorkingColorSpace(oi.copy(this),e);const t=oi.r,i=oi.g,n=oi.b;return e!==De?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=i,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Il);const i=vh(hn.h,Il.h,t),n=vh(hn.s,Il.s,t),r=vh(hn.l,Il.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new ze;ze.NAMES=$0;class bM extends Xs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class js{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Yn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const i=e.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Dl.subVectors(this.max,pa),Kr.subVectors(e.a,pa),Zr.subVectors(e.b,pa),Jr.subVectors(e.c,pa),ws.subVectors(Zr,Kr),Ss.subVectors(Jr,Zr),Qs.subVectors(Kr,Jr);let t=[0,-ws.z,ws.y,0,-Ss.z,Ss.y,0,-Qs.z,Qs.y,ws.z,0,-ws.x,Ss.z,0,-Ss.x,Qs.z,0,-Qs.x,-ws.y,ws.x,0,-Ss.y,Ss.x,0,-Qs.y,Qs.x,0];return!ru(t,Kr,Zr,Jr,Dl)||(t=[1,0,0,0,1,0,0,0,1],!ru(t,Kr,Zr,Jr,Dl))?!1:(Fl.crossVectors(ws,Ss),t=[Fl.x,Fl.y,Fl.z],ru(t,Kr,Zr,Jr,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new I,new I,new I,new I,new I,new I,new I,new I],Yn=new I,Yr=new js,Kr=new I,Zr=new I,Jr=new I,ws=new I,Ss=new I,Qs=new I,pa=new I,Dl=new I,Fl=new I,er=new I;function ru(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){er.fromArray(s,r);const a=n.x*Math.abs(er.x)+n.y*Math.abs(er.y)+n.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),h=i.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const as=wM();function wM(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:o,offsetTable:a}}function Di(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ai(s,-65504,65504),as.floatView[0]=s;const e=as.uint32View[0],t=e>>23&511;return as.baseTable[t]+((e&8388607)>>as.shiftTable[t])}function Ul(s){const e=s>>10;return as.uint32View[0]=as.mantissaTable[as.offsetTable[e]+(s&1023)]+as.exponentTable[e],as.floatView[0]}const Ft=new I,Nl=new Le;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Y0 extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class K0 extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ou extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ul(this.array[e*this.itemSize]);return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Di(t),this}getY(e){let t=Ul(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Di(t),this}getZ(e){let t=Ul(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Di(t),this}getW(e){let t=Ul(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Di(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=Di(t),this.array[e+1]=Di(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array)),this.array[e+0]=Di(t),this.array[e+1]=Di(i),this.array[e+2]=Di(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=Di(t),this.array[e+1]=Di(i),this.array[e+2]=Di(n),this.array[e+3]=Di(r),this}}class tt extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const SM=new js,ma=new I,au=new I;class Zo{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SM.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ma,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(au)),this.expandByPoint(ma.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,o,a,l,c,h,u,d,f,m,g,y){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Qr.setFromMatrixColumn(e,0).length(),r=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,AM)}lookAt(e,t,i){const n=this.elements;return Fi.subVectors(e,t),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),Ts.crossVectors(i,Fi),Ts.lengthSq()===0&&(Math.abs(i.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),Ts.crossVectors(i,Fi)),Ts.normalize(),Bl.crossVectors(Fi,Ts),n[0]=Ts.x,n[4]=Bl.x,n[8]=Fi.x,n[1]=Ts.y,n[5]=Bl.y,n[9]=Fi.y,n[2]=Ts.z,n[6]=Bl.z,n[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],g=i[6],y=i[10],p=i[14],x=i[3],_=i[7],M=i[11],v=i[15],b=n[0],S=n[4],E=n[8],w=n[12],T=n[1],F=n[5],L=n[9],C=n[13],U=n[2],N=n[6],W=n[10],k=n[14],G=n[3],X=n[7],ee=n[11],oe=n[15];return r[0]=o*b+a*T+l*U+c*G,r[4]=o*S+a*F+l*N+c*X,r[8]=o*E+a*L+l*W+c*ee,r[12]=o*w+a*C+l*k+c*oe,r[1]=h*b+u*T+d*U+f*G,r[5]=h*S+u*F+d*N+f*X,r[9]=h*E+u*L+d*W+f*ee,r[13]=h*w+u*C+d*k+f*oe,r[2]=m*b+g*T+y*U+p*G,r[6]=m*S+g*F+y*N+p*X,r[10]=m*E+g*L+y*W+p*ee,r[14]=m*w+g*C+y*k+p*oe,r[3]=x*b+_*T+M*U+v*G,r[7]=x*S+_*F+M*N+v*X,r[11]=x*E+_*L+M*W+v*ee,r[15]=x*w+_*C+M*k+v*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],y=e[11],p=e[15];return m*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+g*(+t*l*f-t*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+y*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],y=e[14],p=e[15],x=u*y*c-g*d*c+g*l*f-a*y*f-u*l*p+a*d*p,_=m*d*c-h*y*c-m*l*f+o*y*f+h*l*p-o*d*p,M=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,v=m*u*l-h*g*l-m*a*d+o*g*d+h*a*y-o*u*y,b=t*x+i*_+n*M+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=x*S,e[1]=(g*d*r-u*y*r-g*n*f+i*y*f+u*n*p-i*d*p)*S,e[2]=(a*y*r-g*l*r+g*n*c-i*y*c-a*n*p+i*l*p)*S,e[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*S,e[4]=_*S,e[5]=(h*y*r-m*d*r+m*n*f-t*y*f-h*n*p+t*d*p)*S,e[6]=(m*l*r-o*y*r-m*n*c+t*y*c+o*n*p-t*l*p)*S,e[7]=(o*d*r-h*l*r+h*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=M*S,e[9]=(m*u*r-h*g*r-m*i*f+t*g*f+h*i*p-t*u*p)*S,e[10]=(o*g*r-m*a*r+m*i*c-t*g*c-o*i*p+t*a*p)*S,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*S,e[12]=v*S,e[13]=(h*g*n-m*u*n+m*i*d-t*g*d-h*i*y+t*u*y)*S,e[14]=(m*a*n-o*g*n-m*i*l+t*g*l+o*i*y-t*a*y)*S,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,g=o*h,y=o*u,p=a*u,x=l*c,_=l*h,M=l*u,v=i.x,b=i.y,S=i.z;return n[0]=(1-(g+p))*v,n[1]=(f+M)*v,n[2]=(m-_)*v,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+p))*b,n[6]=(y+x)*b,n[7]=0,n[8]=(m+_)*S,n[9]=(y-x)*S,n[10]=(1-(d+g))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Qr.set(n[0],n[1],n[2]).length();const o=Qr.set(n[4],n[5],n[6]).length(),a=Qr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],un.copy(this);const c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,r,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-r),u=(t+e)*l,d=(i+n)*c,f=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new I,un=new ht,TM=new I(0,0,0),AM=new I(1,1,1),Ts=new I,Bl=new I,Fi=new I,Qp=new ht,em=new Ei;class Fn{constructor(e=0,t=0,i=0,n=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ai(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ai(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ai(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const tm=new I,eo=new Ei,Kn=new ht,zl=new I,ga=new I,RM=new I,CM=new Ei,im=new I(1,0,0),nm=new I(0,1,0),sm=new I(0,0,1),PM={type:"added"},rm={type:"removed"};class xt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new I,t=new Fn,i=new Ei,n=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ht},normalMatrix:{value:new qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,t){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zl.copy(e):zl.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ga,zl,this.up):Kn.lookAt(zl,ga,this.up),this.quaternion.setFromRotationMatrix(Kn),n&&(Kn.extractRotation(n.matrixWorld),eo.setFromRotationMatrix(Kn),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(PM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,RM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}xt.DEFAULT_UP=new I(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Z0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const om={};function Ha(s){s in om||(om[s]=!0,console.warn(s))}let LM=0;const Xi=new ht,lu=new xt,to=new I,Ui=new js,ya=new js,jt=new I;class Hi extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?K0:Y0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,i){return Xi.makeTranslation(e,t,i),this.applyMatrix4(Xi),this}scale(e,t,i){return Xi.makeScale(e,t,i),this.applyMatrix4(Xi),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Ui.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Ui.min,ya.min),Ui.expandByPoint(jt),jt.addVectors(Ui.max,ya.max),Ui.expandByPoint(jt)):(Ui.expandByPoint(ya.min),Ui.expandByPoint(ya.max))}Ui.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(e,c),jt.add(to)),n=Math.max(n,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new I,h[T]=new I;const u=new I,d=new I,f=new I,m=new Le,g=new Le,y=new Le,p=new I,x=new I;function _(T,F,L){u.fromArray(n,T*3),d.fromArray(n,F*3),f.fromArray(n,L*3),m.fromArray(o,T*2),g.fromArray(o,F*2),y.fromArray(o,L*2),d.sub(u),f.sub(u),g.sub(m),y.sub(m);const C=1/(g.x*y.y-y.x*g.y);isFinite(C)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(C),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(C),c[T].add(p),c[F].add(p),c[L].add(p),h[T].add(x),h[F].add(x),h[L].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,F=M.length;T<F;++T){const L=M[T],C=L.start,U=L.count;for(let N=C,W=C+U;N<W;N+=3)_(i[N+0],i[N+1],i[N+2])}const v=new I,b=new I,S=new I,E=new I;function w(T){S.fromArray(r,T*3),E.copy(S);const F=c[T];v.copy(F),v.sub(S.multiplyScalar(S.dot(F))).normalize(),b.crossVectors(E,F);const C=b.dot(h[T])<0?-1:1;l[T*4]=v.x,l[T*4+1]=v.y,l[T*4+2]=v.z,l[T*4+3]=C}for(let T=0,F=M.length;T<F;++T){const L=M[T],C=L.start,U=L.count;for(let N=C,W=C+U;N<W;N+=3)w(i[N+0]),w(i[N+1]),w(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jd extends Hi{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],m=[],g=[],y=[];for(let p=0;p<=i;p++){const x=[],_=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let v=0;v<=t;v++){const b=v/t;u.x=-e*Math.cos(n+b*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(n+b*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),y.push(b+M,1-_),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const _=h[p][x+1],M=h[p][x],v=h[p+1][x],b=h[p+1][x+1];(p!==0||o>0)&&f.push(_,M,b),(p!==i-1||l<Math.PI)&&f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class th extends Hi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],g=[],y=[];for(let p=0;p<h;p++){const x=p*d-o;for(let _=0;_<c;_++){const M=_*u-r;m.push(M,-x,0),g.push(0,0,1),y.push(_/a),y.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,M=x+c*(p+1),v=x+1+c*(p+1),b=x+1+c*p;f.push(_,M,b),f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.width,e.height,e.widthSegments,e.heightSegments)}}class am extends nn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zn=new I,cu=new I,kl=new I,As=new I,hu=new I,Ol=new I,uu=new I;class Qd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){cu.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),As.copy(this.origin).sub(cu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=As.dot(this.direction),l=-As.dot(kl),c=As.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(cu).addScaledVector(kl,d),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),n=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,n,r){hu.subVectors(t,e),Ol.subVectors(i,e),uu.crossVectors(hu,Ol);let o=this.direction.dot(uu),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;As.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(As,Ol));if(l<0)return null;const c=a*this.direction.dot(hu.cross(As));if(c<0||l+c>o)return null;const h=-a*As.dot(uu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const dn=new I,Jn=new I,du=new I,Qn=new I,io=new I,no=new I,lm=new I,fu=new I,pu=new I,mu=new I;let Vl=!1;class pn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),dn.subVectors(e,t),n.cross(dn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){dn.subVectors(n,t),Jn.subVectors(i,t),du.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Jn),l=dn.dot(du),c=Jn.dot(Jn),h=Jn.dot(du),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,i,n,r,o,a,l){return Vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vl=!0),this.getInterpolation(e,t,i,n,r,o,a,l)}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Qn),l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l}static isFrontFacing(e,t,i,n){return dn.subVectors(i,t),Jn.subVectors(e,t),dn.cross(Jn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),dn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vl=!0),pn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;io.subVectors(n,i),no.subVectors(r,i),fu.subVectors(e,i);const l=io.dot(fu),c=no.dot(fu);if(l<=0&&c<=0)return t.copy(i);pu.subVectors(e,n);const h=io.dot(pu),u=no.dot(pu);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(io,o);mu.subVectors(e,r);const f=io.dot(mu),m=no.dot(mu);if(m>=0&&f<=m)return t.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(no,a);const y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return lm.subVectors(r,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(lm,a);const p=1/(y+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(io,o).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cm=new ht,Tn=new Qd,Hl=new Zo,hm=new I,so=new I,ro=new I,oo=new I,gu=new I,Gl=new I,Wl=new Le,Xl=new Le,jl=new Le,um=new I,dm=new I,fm=new I,ql=new I,$l=new I;class At extends xt{constructor(e=new Hi,t=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Gl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(gu.fromBufferAttribute(u,e),o?Gl.addScaledVector(gu,h):Gl.addScaledVector(gu.sub(t),h))}t.add(Gl)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Tn.copy(e.ray).recast(e.near),!(Hl.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Hl,hm)===null||Tn.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(cm.copy(r).invert(),Tn.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&Tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,r=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(r))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=r[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,M=x;_<M;_+=3){const v=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);i=Yl(this,y,e,Tn,l,c,h,v,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=Yl(this,r,e,Tn,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let f=0,m=u.length;f<m;f++){const g=u[f],y=r[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=p,M=x;_<M;_+=3){const v=_,b=_+1,S=_+2;i=Yl(this,y,e,Tn,l,c,h,v,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=f,y=m;g<y;g+=3){const p=g,x=g+1,_=g+2;i=Yl(this,r,e,Tn,l,c,h,p,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function IM(s,e,t,i,n,r,o,a){let l;if(e.side===Ri?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===xn,a),l===null)return null;$l.copy(a),$l.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:s}}function Yl(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,so),s.getVertexPosition(l,ro),s.getVertexPosition(c,oo);const h=IM(s,e,t,i,so,ro,oo,ql);if(h){n&&(Wl.fromBufferAttribute(n,a),Xl.fromBufferAttribute(n,l),jl.fromBufferAttribute(n,c),h.uv=pn.getInterpolation(ql,so,ro,oo,Wl,Xl,jl,new Le)),r&&(Wl.fromBufferAttribute(r,a),Xl.fromBufferAttribute(r,l),jl.fromBufferAttribute(r,c),h.uv1=pn.getInterpolation(ql,so,ro,oo,Wl,Xl,jl,new Le),h.uv2=h.uv1),o&&(um.fromBufferAttribute(o,a),dm.fromBufferAttribute(o,l),fm.fromBufferAttribute(o,c),h.normal=pn.getInterpolation(ql,so,ro,oo,um,dm,fm,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};pn.getNormal(so,ro,oo,u.normal),h.face=u}return h}const ao=new ht,pm=new ht,Kl=[],mm=new js,DM=new ht,_a=new At,xa=new Zo;class FM extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new am(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,DM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new js),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),mm.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union(mm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),xa.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ao),pm.multiplyMatrices(i,ao),_a.matrixWorld=pm,_a.raycast(e,Kl);for(let o=0,a=Kl.length;o<a;o++){const l=Kl[o];l.instanceId=r,l.object=this,t.push(l)}Kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new am(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ef extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _t{constructor(e=0,t=0,i=0,n=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],y=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(f+1)/2,v=(p+1)/2,b=(h+d)/4,S=(u+g)/4,E=(m+y)/4;return _>M&&_>v?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=b/i,r=S/i):M>v?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=b/n,r=E/n):v<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(v),i=S/r,n=E/r),this.set(i,n,r,t),this}let x=Math.sqrt((y-m)*(y-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(y-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}const yu=new I,UM=new I,NM=new qe;class ur{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=yu.subVectors(i,t).cross(UM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yu),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NM.getNormalMatrix(e),n=this.coplanarPoint(yu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Zo,Zl=new I;class tf{constructor(e=new ur,t=new ur,i=new ur,n=new ur,r=new ur,o=new ur){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],g=i[11],y=i[12],p=i[13],x=i[14],_=i[15];return t[0].setComponents(a-n,u-l,g-d,_-y).normalize(),t[1].setComponents(a+n,u+l,g+d,_+y).normalize(),t[2].setComponents(a+r,u+c,g+f,_+p).normalize(),t[3].setComponents(a-r,u-c,g-f,_-p).normalize(),t[4].setComponents(a-o,u-h,g-m,_-x).normalize(),t[5].setComponents(a+o,u+h,g+m,_+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Zl.x=n.normal.x>0?e.max.x:e.min.x,Zl.y=n.normal.y>0?e.max.y:e.min.y,Zl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const _u=new ht,gm=new I,ym=new I;class J0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(gm),ym.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ym),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}let Q0=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class pi extends Q0{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _m=new ht,va=new I,xu=new I;class BM extends J0{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),xu.copy(i.position),xu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xu),i.updateMatrixWorld(),n.makeTranslation(-va.x,-va.y,-va.z),_m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_m)}}class ey extends ef{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const zM=(s,e,t)=>s*(1-t)+e*t,ih=(s,e)=>(Math.random()*(e-s+1)|0)+s,mi=(s,e)=>Math.random()*(e-s)+s,kM=s=>s?s===1?1:Math.sin(s*Qe.d2):0,OM=(s,e,t)=>s+t*(e-s),Bo=1/60,Qe=Object.freeze({m075:Math.PI*.75,m2:Math.PI*2,d2:Math.PI/2,d3:Math.PI/3,d4:Math.PI/4,d6:Math.PI/6});function xm(s,e){if(e===G_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Yu||e===g0){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===Yu)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class VM extends nl{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new nb(t)})}load(e,t,i,n){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ed.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new U0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ty){try{o[Ke.KHR_BINARY_GLTF]=new sb(e)}catch(u){n&&n(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new WM;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new rb(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new ob;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new ab;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function HM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GM{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new $t(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new N0(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new av(h),c.distance=u;break;case"spot":c=new rv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ds(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class WM{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Ao}extendParams(e,t,i){const n=[];e.color=new $t(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Qt))}return Promise.all(n)}}class XM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(a,a)}return Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class $M{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $t(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Qt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $t(a[0],a[1],a[2]),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class JM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $t(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Qt)),Promise.all(r)}}class QM{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class eb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ib{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class nb{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==qi.TRIANGLES&&c.mode!==qi.TRIANGLE_STRIP&&c.mode!==qi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const g=new Ee,y=new D,p=new Gs,x=new D(1,1,1),_=new Vx(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&y.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),_.setMatrixAt(M,g.compose(y,p,x));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);ti.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ty="glTF",Ma=12,vm={JSON:1313821514,BIN:5130562};class sb{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ty)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ma,r=new DataView(e,Ma);let o=0;for(;o<n;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===vm.JSON){const c=new Uint8Array(e,Ma+o,a);this.content=i.decode(c)}else if(l===vm.BIN){const c=Ma+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ld[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ld[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=zo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],g=l[f];g!==void 0&&(m.normalized=g)}u(d)},a,c)})})}}class ob{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ab{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class iy extends il{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,g=m-c,y=-2*f+3*d,p=f-d,x=1-y,_=p-d+u;for(let M=0;M!==a;M++){const v=o[g+M+a],b=o[g+M+l]*h,S=o[m+M+a],E=o[m+M]*h;r[M]=x*v+_*b+y*S+p*E}return r}}const lb=new Gs;class cb extends iy{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return lb.fromArray(r).normalize().toArray(r),r}}const qi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mm={9728:$u,9729:Ud,9984:B_,9985:k_,9986:z_,9987:Nd},bm={33071:Ia,33648:qu,10497:ja},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ld={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hb={CUBICSPLINE:void 0,LINEAR:Vo,STEP:qa},Mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ub(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Wd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oo})),s.DefaultMaterial}function ba(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ds(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function db(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function fb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pb(s){const e=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+wm(e.attributes):t=s.indices+":"+wm(s.attributes)+":"+s.mode,t}function wm(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function cd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gb=new Ee;class yb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new nv(this.options.manager):this.textureLoader=new cv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new U0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};ba(r,a,n),Ds(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,o){i.load(ed.resolveURL(t.uri,n.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=vu[n.type],a=zo[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new gi(c,o,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=vu[n.type],c=zo[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let g,y;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let _=t.cache.get(x);_||(g=new c(a,p*f,n.count*f/h),_=new Ux(g,f/h),t.cache.add(x,_)),y=new Vd(_,l,d%f/h,m)}else a===null?g=new c(n.count*l):g=new c(a,d,n.count*l),y=new gi(g,l,m);if(n.sparse!==void 0){const p=vu.SCALAR,x=zo[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,v=new x(o[1],_,n.sparse.count*p),b=new c(o[2],M,n.sparse.count*l);a!==null&&(y=new gi(y.array.slice(),y.itemSize,y.normalized));for(let S=0,E=v.length;S<E;S++){const w=v[S];if(y.setX(w,b[S*l]),l>=2&&y.setY(w,b[S*l+1]),l>=3&&y.setZ(w,b[S*l+2]),l>=4&&y.setW(w,b[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const n=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Mm[d.magFilter]||Ud,h.minFilter=Mm[d.minFilter]||Nd,h.wrapS=bm[d.wrapS]||ja,h.wrapT=bm[d.wrapT]||ja,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const y=new Tr(g);y.needsUpdate=!0,d(y)}),t.load(ed.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||mb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new L0,vr.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new P0,vr.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Wd}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=n[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new $t(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Qt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=f0);const h=r.alphaMode||Mu.OPAQUE;if(h===Mu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ao&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}return r.occlusionTexture!==void 0&&o!==Ao&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ao&&(a.emissive=new $t().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Ao&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Qt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ds(u,r),t.associations.set(u,{materials:e}),r.extensions&&ba(n,u,r),u})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");let i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Sm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=pb(c),u=n[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Sm(new Dn,c,t),n[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?ub(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],y=o[f];let p;const x=c[f];if(y.mode===qi.TRIANGLES||y.mode===qi.TRIANGLE_STRIP||y.mode===qi.TRIANGLE_FAN||y.mode===void 0)p=r.isSkinnedMesh===!0?new Bx(g,x):new Zc(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),y.mode===qi.TRIANGLE_STRIP?p.geometry=xm(p.geometry,g0):y.mode===qi.TRIANGLE_FAN&&(p.geometry=xm(p.geometry,Yu));else if(y.mode===qi.LINES)p=new Hx(g,x);else if(y.mode===qi.LINE_STRIP)p=new Gd(g,x);else if(y.mode===qi.LINE_LOOP)p=new Gx(g,x);else if(y.mode===qi.POINTS)p=new Wx(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(p.geometry.morphAttributes).length>0&&fb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ds(p,r),y.extensions&&ba(n,p,y),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Wh;t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Od(x0.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new R0(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ds(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ee;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hd(a,l)})}loadAnimation(e){const i=this.json.animations[e],n=i.name?i.name:"animation_"+e,r=[],o=[],a=[],l=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const d=i.channels[h],f=i.samplers[d.sampler],m=d.target,g=m.node,y=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;m.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",y)),a.push(this.getDependency("accessor",p)),l.push(f),c.push(m))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],m=h[3],g=h[4],y=[];for(let p=0,x=u.length;p<x;p++){const _=u[p],M=d[p],v=f[p],b=m[p],S=g[p];if(_===void 0)continue;_.updateMatrix();let E;switch(Es[S.path]){case Es.weights:E=Ya;break;case Es.rotation:E=Ar;break;case Es.position:case Es.scale:default:E=Ka;break}const w=_.name?_.name:_.uuid,T=b.interpolation!==void 0?hb[b.interpolation]:Vo,F=[];Es[S.path]===Es.weights?_.traverse(function(C){C.morphTargetInfluences&&F.push(C.name?C.name:C.uuid)}):F.push(w);let L=v.array;if(v.normalized){const C=cd(L.constructor),U=new Float32Array(L.length);for(let N=0,W=L.length;N<W;N++)U[N]=L[N]*C;L=U}for(let C=0,U=F.length;C<U;C++){const N=new E(F[C]+"."+Es[S.path],M.array,L,T);b.interpolation==="CUBICSPLINE"&&(N.createInterpolant=function(k){const G=this instanceof Ar?cb:iy;return new G(this.times,this.values,this.getValueSize()/3,k)},N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(N)}}return new Kx(n,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new C0:c.length>1?h=new Wh:c.length===1?h=c[0]:h=new ti,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ds(h,r),r.extensions&&ba(i,h,r),r.matrix!==void 0){const u=new Ee;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Wh;i.name&&(r.name=n.createUniqueName(i.name)),Ds(r,i),i.extensions&&ba(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof vr||d instanceof Tr)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}}function _b(s,e,t){const i=e.attributes,n=new Lt;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=cd(zo[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=cd(zo[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}s.boundingBox=n;const o=new zn;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=o}function Sm(s,e,t){const i=e.attributes,n=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in i){const a=ld[o]||o.toLowerCase();a in s.attributes||n.push(r(i[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});n.push(o)}return Ds(s,e),_b(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?db(s,e.targets,t):s})}class ny{constructor(e,t,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const xb=new ny;let lo;class sy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lo===void 0&&(lo=Qa("canvas")),lo.width=e.width,lo.height=e.height;const i=lo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=lo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=No(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(No(t[i]/255)*255):t[i]=No(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ry{constructor(e=null){this.isSource=!0,this.uuid=Lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(bu(n[o].image)):r.push(bu(n[o]))}else r=bu(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vb=0;class Ci extends Ws{constructor(e=Ci.DEFAULT_IMAGE,t=Ci.DEFAULT_MAPPING,i=mn,n=mn,r=$i,o=Za,a=Ai,l=Er,c=Ci.DEFAULT_ANISOTROPY,h=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Lr(),this.name="",this.source=new ry(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wr?De:Sr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?wr:X0}set encoding(e){Ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?De:Sr}}Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=G0;Ci.DEFAULT_ANISOTROPY=1;class Jo extends Ci{constructor(e,t,i,n,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Go,super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}let Jl;class oy{static getContext(){return Jl===void 0&&(Jl=new(window.AudioContext||window.webkitAudioContext)),Jl}static setContext(e){Jl=e}}const jo={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Qo{constructor(e){this.manager=e!==void 0?e:xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const es={};class Mb extends Error{constructor(e,t){super(e),this.response=t}}class bb extends Qo{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(es[e]!==void 0){es[e].push({onLoad:t,onProgress:i,onError:n});return}es[e]=[],es[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=es[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const y=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:M})=>{if(_)p.close();else{g+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let b=0,S=h.length;b<S;b++){const E=h[b];E.onProgress&&E.onProgress(v)}p.enqueue(M),x()}})}}});return new Response(y)}else throw new Mb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{jo.add(e,c);const h=es[e];delete es[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=es[e];if(h===void 0)throw this.manager.itemError(e),c;delete es[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wb extends Qo{constructor(e){super(e)}load(e,t,i,n){const r=this,o=new bb(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);oy.getContext().decodeAudioData(c,function(u){t(u)},a)}catch(c){a(c)}},i,n);function a(l){n?n(l):console.error(l),r.manager.itemError(e)}}}class Sb extends Qo{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Qa("img");function l(){h(),jo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}let Tb=class extends Qo{constructor(e){super(e)}load(e,t,i,n){const r=new Jo,o=new Sb(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}};class ay extends Qo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){jo.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){n&&n(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Ab extends Tb{load(e,t,i,n){const r=new ay(this.manager),o=new Jo;r.setPath(this.path);let a=0;function l(c){r.load(e[c],h=>{o.images[c]=h,++a===6&&(o.needsUpdate=!0,t?.(o))},i,n)}for(let c=0;c<e.length;c++)l(c);return o}}class Eb extends Ci{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rb extends Qo{load(e,t,i,n){const r=new ay(this.manager);return r.setOptions({imageOrientation:"flipY"}),r.setPath(this.path),r.load(e,o=>{const a=new Eb(o);return a.image=o,a.format=Ai,a.needsUpdate=!0,t?.(a),a},i,n)}}const Cb={maxEnemies:10,rifleSpawn:3,enemy:{immune:!1,lose:!0,walk:500,run:250},damage:{enemy:{strong:10,soft:5},pistol:{head:90,body:25,leg:10},rifle:{head:100,body:50,leg:20}}},Pb={maxEnemies:25,rifleSpawn:5,enemy:{immune:!1,lose:!1,walk:1e3,run:500},damage:{enemy:{strong:25,soft:10},pistol:{head:75,body:10,leg:5},rifle:{head:80,body:20,leg:10}}},Lb={maxEnemies:50,rifleSpawn:8,enemy:{immune:!0,lose:!1,walk:-1,run:1e4},damage:{enemy:{strong:50,soft:25},pistol:{head:50,body:5,leg:1},rifle:{head:75,body:10,leg:5}}},Ib={easy:Cb,normal:Pb,hard:Lb},Db=[0,1.25,25],Fb=[.6,1.7,-.85],Ub=[1.5,1.5,1.5],Nb="player.glb",Bb=90,zb={death:"player/death.mp3",hit:"player/hit.mp3"},kb={Idle:[0,0,0,0],Run:[8.75,1,0,0],Left:[3.5,1,-1,1],Right:[4.5,1,1,-1],Backward:[3,-1,0,0],BackwardLeft:[2,-1,-.5,.5],BackwardRight:[2,-1,.5,-.5],ForwardRight:[4,1,.5,-.5],ForwardLeft:[4,1,-.5,.5],Forward:[5,1,0,0]},Rs={position:Db,collider:Fb,scale:Ub,model:Nb,mass:Bb,sounds:zb,animations:kb},Ob=[1.5707963267948966,3.3415926535897933,-.075],Vb=[-10,-4,.25],Hb=[13,13,13],Gb=.025,Wb=[.001,.001],Xb=[0,-.01],jb=12632256,qb="1911.glb",$b="1911",Yb=.9,Kb=-1,Zb=-1,Jb={bullet:"weapons/shell.mp3",shoot:"weapons/1911.mp3"},Qb={position:[.1,.1,.35],lifeTime:500,speed:253,scale:.4},ew={position:[1.5,.53],particles:[3,5],intensity:2,velocity:.25,scale:1},Tt={rotation:Ob,position:Vb,scale:Hb,emissiveIntensity:Gb,spread:Wb,recoil:Xb,emissive:jb,model:qb,textures:$b,headshot:Yb,magazine:Kb,ammo:Zb,sounds:Jb,bullet:Qb,fire:ew},tw={idle:[0,1.6,.075],aim:[-.05,1.525,.25]},iw={idle:[-.525,1.5375,-1.5],aim:[-.3,1.535,-.5],run:[-1.1,1.2,-3]},co={fps:tw,tps:iw},nw="environment/rain.mp3",sw=[0,4.98,13.5],rw=.216,ow=[75,75,75],aw="level.glb",lw="cloud.png",cw=.01,hw="fog.png",uw="sky",dw=10,fw=250,pw=[-.025,.225,-.275,-.025],mw=["environment/lightning0.mp3","environment/lightning1.mp3","environment/lightning2.mp3","environment/lightning3.mp3","environment/lightning4.mp3"],gw=["rain/drop0.png","rain/drop1.png","rain/drop2.png","rain/drop3.png","rain/drop4.png"],yw=[[-39.5,53],[-39.5,37],[-29.5,-128],[-29.5,-144],[74,-144],[74,-128],[64,37],[64,53]],_w=[[84,53],[-59.5,53],[-59.5,37],[-10,37],[-10,-30],[-6.5,-39],[.2,-46.8],[9.2,-52.5],[19.5,-53.5],[25,-59.8],[25,-128],[-49.5,-128],[-49.5,-144],[94,-144],[94,-128],[44.5,-128],[44.5,-61],[41,-52],[34.3,-44.2],[25.3,-38.5],[15,-37.5],[9.5,-31.2],[9.5,37],[84,37]],xw=[[85,50.35],[-60,50.35],[-60,39.75],[-7.2,39.75],[-7.2,-31],[-4.2,-38.1],[2.25,-45],[10.15,-49.8],[19.75,-51],[27.85,-59.25],[27.75,-130.75],[-50.5,-130.75],[-50.5,-141.35],[94.5,-141.35],[94.5,-130.75],[41.7,-130.75],[41.7,-59.75],[38.7,-52.25],[32.8,-46.25],[24.5,-41.25],[14.4,-39.9],[6.75,-31.75],[6.75,39.75],[85,39.75]],Zt={ambient:nw,position:sw,sidewalkHeight:rw,scale:ow,model:aw,cloud:lw,fogDensity:cw,fog:hw,skybox:uw,height:dw,depth:fw,portalsOffset:pw,lighting:mw,rain:gw,portals:yw,bounds:_w,sidewalk:xw},vw=[.75,1.8,-.895],Mw=[0,1.18,-10],bw=[1.33,1.33,1.33],ww="enemy.glb",Sw=75,Tw={hardAttack:"enemy/hardAttack.mp3",softAttack:"enemy/softAttack.mp3",scream:"enemy/scream.mp3",death:"enemy/death.mp3",hit:"enemy/hit.mp3"},Aw={Idle:[0,0,0,0],Walking:[.5,1,0,0],Running:[3.5,1,0,0],Falling:[.75,1,0,0],Crawling:[.5,1,0,0]},Cs={collider:vw,position:Mw,scale:bw,model:ww,mass:Sw,sounds:Tw,animations:Aw},Ew=[1.7707963267948965,3.061592653589793,-.41],Rw=[-10,22.5,-20],Cw=[.005,.005,.005],Pw=[0,0,-1],Lw=[-26,1,-5.75],Iw=[.29,.29,.29],Dw=[.0025,.0025],Fw=[.02,-.025],Uw="AK47.glb",Nw="AK47",Bw=.8,zw=150,kw=30,Ow=0,Vw={reload:"weapons/reload.mp3",bullet:"weapons/case.mp3",empty:"weapons/empty.mp3",shoot:"weapons/AK47.mp3",pick:"weapons/pick.mp3"},Hw={position:[.065,.13,.75],lifeTime:200,speed:670,scale:.6},Gw={position:[160,30],particles:[5,8],intensity:3,velocity:11.2,scale:2.5},yt={rotation:Ew,spinePosition:Rw,worldScale:Cw,spineRotation:Pw,position:Lw,scale:Iw,spread:Dw,recoil:Fw,model:Uw,textures:Nw,headshot:Bw,maxStock:zw,magazine:kw,ammo:Ow,sounds:Vw,bullet:Hw,fire:Gw},ns=s=>{Object.freeze(s);const e=Object.getOwnPropertyNames(s);for(const t in e){const i=s[e[t]];i&&(typeof i=="object"||typeof i=="function")&&!Object.isFrozen(i)&&ns(i)}return s};var hd;(s=>{const e=()=>s.offscreen||s.worker?`${window.location.pathname.slice(0,window.location.pathname.lastIndexOf("/"))}/assets`:`${window.location.pathname.replace(/\/[^/]*$/,"")}/assets`,t=o=>Object.assign({},...Object.keys(o).map(a=>({[a]:{speed:o[a][0],direction:{z0:o[a][1],x0:o[a][2],x1:o[a][3]}}}))),i=Rs.animations,n=Cs.animations;s.APP=navigator.userAgent.toLowerCase().includes("electron");const r=o=>o<0?1/0:o;s.offscreen=typeof HTMLCanvasElement<"u"&&!!HTMLCanvasElement.prototype.transferControlToOffscreen,s.worker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,s.basePath=(o=!1)=>s.APP?s.offscreen||!s.worker?o?"./":"./assets":"./":o?"":e(),s.RandomCoords=ns({playerDistance:5,boundOffset:.5,ammount:50}),s.Gameplay=ns(Ib.normal),s.Level=ns({position:new I(...Zt.position),sidewalkHeight:Zt.sidewalkHeight,portalsOffset:Zt.portalsOffset,scale:new I(...Zt.scale),fogDensity:Zt.fogDensity,lighting:Zt.lighting,sidewalk:Zt.sidewalk,ambient:Zt.ambient,portals:Zt.portals,skybox:Zt.skybox,bounds:Zt.bounds,height:Zt.height,depth:Zt.depth,model:Zt.model,cloud:Zt.cloud,rain:Zt.rain,fog:Zt.fog}),s.Camera=ns({fps:{idle:new I(...co.fps.idle),run:new I(...co.fps.idle),aim:new I(...co.fps.aim)},tps:{idle:new I(...co.tps.idle),run:new I(...co.tps.run),aim:new I(...co.tps.aim)}}),s.Player=ns({position:new I(...Rs.position),collider:new I(...Rs.collider),scale:new I(...Rs.scale),moves:t(i),animations:Rs.animations,sounds:Rs.sounds,model:Rs.model,mass:Rs.mass}),s.Enemy=ns({position:new I(...Cs.position),collider:new I(...Cs.collider),scale:new I(...Cs.scale),moves:t(n),animations:Cs.animations,sounds:Cs.sounds,model:Cs.model,mass:Cs.mass}),s.Pistol=ns({emissiveIntensity:Tt.emissiveIntensity,position:new I(...Tt.position),rotation:new Fn(...Tt.rotation),spread:new Le(...Tt.spread),recoil:new Le(...Tt.recoil),scale:new I(...Tt.scale),magazine:r(Tt.magazine),ammo:r(Tt.ammo),headshot:Tt.headshot,textures:Tt.textures,emissive:Tt.emissive,sounds:Tt.sounds,model:Tt.model,bullet:{position:new I(...Tt.bullet.position),lifeTime:Tt.bullet.lifeTime,speed:Tt.bullet.speed,scale:Tt.bullet.scale},fire:{position:new Le(...Tt.fire.position),particles:Tt.fire.particles,intensity:Tt.fire.intensity,velocity:Tt.fire.velocity,scale:Tt.fire.scale}}),s.Rifle=ns({spinePosition:new I(...yt.spinePosition),spineRotation:new Fn(...yt.spineRotation),worldScale:new I(...yt.worldScale),position:new I(...yt.position),rotation:new Fn(...yt.rotation),spread:new Le(...yt.spread),recoil:new Le(...yt.recoil),scale:new I(...yt.scale),magazine:r(yt.magazine),ammo:r(yt.ammo),headshot:yt.headshot,textures:yt.textures,maxStock:yt.maxStock,sounds:yt.sounds,model:yt.model,bullet:{position:new I(...yt.bullet.position),lifeTime:yt.bullet.lifeTime,speed:yt.bullet.speed,scale:yt.bullet.scale},fire:{position:new Le(...yt.fire.position),particles:yt.fire.particles,intensity:yt.fire.intensity,velocity:yt.fire.velocity,scale:yt.fire.scale}})})(hd||(hd={}));const ue=hd;var Ze;(s=>{class e extends ny{constructor(){super(...arguments),this.imageBasePath=`${t}/images/`,this.modelBasePath=`${t}/models/`,this.soundBasePath=`${t}/sounds/`,this.shaderBasePath=`${t}/shaders/`,this.cubeTexture=new Ab(this),this.texture=new Rb(this),this.audio=new wb(this),this.gltf=new VM(this),this.uuid=Lr(),this.cubeTextures=["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],this.onProgress=(n,r,o)=>{K.dispatch("Loading::Progress",{progress:r*100/o,uuid:this.uuid},!0)},this.onError=n=>{console.error(`Error occurred loading ${n}.`)},this.onStart=()=>{K.dispatch("Loading::Start",this.uuid,!0)},this.onLoad=()=>{K.dispatch("Loading::Complete",this.uuid,!0)}}getPromiseCallbacks(n,r){return{onLoad:o=>{o instanceof Jo&&(o.format=Ai),n(o)},onProgress:o=>this.onProgress(o.target?.responseURL,o.loaded,o.total),onError:o=>r(o)}}async loadCubeTexture(n){return await new Promise((r,o)=>{const a=this.getPromiseCallbacks(r,o);this.cubeTexture.setPath(`${this.imageBasePath+n}/`),this.cubeTexture.load(this.cubeTextures,a.onLoad,a.onProgress,a.onError)})}async loadTexture(n){return await new Promise((r,o)=>{const a=this.getPromiseCallbacks(r,o);this.texture.setPath(this.imageBasePath),this.texture.load(n,a.onLoad,a.onProgress,a.onError)})}async loadAudio(n){return await new Promise((r,o)=>{const a=this.getPromiseCallbacks(r,o);this.audio.setPath(this.soundBasePath),this.audio.load(n,a.onLoad,a.onProgress,a.onError)})}async loadShader(n){return await(await fetch(`${this.shaderBasePath+n}`)).text()}async loadGLTF(n){return await new Promise((r,o)=>{const a=this.getPromiseCallbacks(r,o);this.gltf.setPath(this.modelBasePath),this.gltf.load(n,a.onLoad,a.onProgress,a.onError)})}}const t=ue.basePath();s.Loader=new e,(i=>{i.Complete="Loading::Complete",i.Progress="Loading::Progress",i.Start="Loading::Start"})(s.Loading||(s.Loading={}))})(Ze||(Ze={}));var Oi;(s=>{s.UP=new I(0,1,0),s.RIGHT=new I(1,0,0),s.FORWARD=new I(0,0,1),s.BACKWARD=new I(0,0,-1),s.LEFT=new I(-1,0,0),s.DOWN=new I(0,-1,0),s.random=()=>new I(mi(-1,1),mi(-1,1),mi(-1,1))})(Oi||(Oi={}));function ly(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ww(s,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=s.SHORT;else if(u instanceof Uint32Array)m=s.UNSIGNED_INT;else if(u instanceof Int32Array)m=s.INT;else if(u instanceof Int8Array)m=s.BYTE;else if(u instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class fs extends Hi{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function m(g,y,p,x,_,M,v,b,S,E,w){const T=M/S,F=v/E,L=M/2,C=v/2,U=b/2,N=S+1,W=E+1;let k=0,G=0;const X=new I;for(let ee=0;ee<W;ee++){const oe=ee*F-C;for(let Z=0;Z<N;Z++){const V=Z*T-L;X[g]=V*x,X[y]=oe*_,X[p]=U,c.push(X.x,X.y,X.z),X[g]=0,X[y]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(Z/S),u.push(1-ee/E),k+=1}}for(let ee=0;ee<E;ee++)for(let oe=0;oe<S;oe++){const Z=d+oe+N*ee,V=d+oe+N*(ee+1),j=d+(oe+1)+N*(ee+1),ne=d+(oe+1)+N*ee;l.push(Z,V,ne),l.push(V,j,ne),G+=6}a.addGroup(f,G,w),f+=G,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function fi(s){const e={};for(let t=0;t<s.length;t++){const i=qo(s[t]);for(const n in i)e[n]=i[n]}return e}function Xw(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cy(s){return s.getRenderTarget()===null?s.outputColorSpace:Un}const jw={clone:qo,merge:fi},qw=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,$w=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class vn extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qw,this.fragmentShader=$w,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=Xw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const Yw=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,Kw=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Zw=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,Jw=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Qw=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,eS=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,tS=`
vec3 transformed = vec3( position );
`,iS=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,nS=`

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

`,sS=`

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

`,rS=`
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
`,oS=`
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
`,aS=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,lS=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,cS=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,hS=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,uS=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,dS=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,fS=`
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
`,pS=`
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
`,mS=`
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
`,gS=`
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
`,yS=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,_S=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,xS=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,vS=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,MS=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,bS=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,wS=`
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
`,SS=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,TS=`
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
`,AS=`
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
`,ES=`
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
`,RS=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,CS=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,PS=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,LS=`
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
`,IS=`

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
`,DS=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,FS=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,US=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,NS=`
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
`,BS=`
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
`,zS=`
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
`,kS=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,OS=`
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
`,VS=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,HS=`
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
`,GS=`
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
`,WS=`

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
`,XS=`
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
`,jS=`
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
`,qS=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,$S=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,YS=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,KS=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,ZS=`
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
`,JS=`
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`,QS=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,e1=`
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
`,t1=`
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
`,i1=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,n1=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,s1=`
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
`,r1=`
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
`,o1=`
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
`,a1=`
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
`,l1=`
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

`,c1=`

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
`,h1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,u1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,d1=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,f1=`
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
`,p1=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,m1=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,g1=`

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
`,y1=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,_1=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,x1=`
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
`,v1=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,M1=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,b1=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,w1=`
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
`,S1=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,T1=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,A1=`
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
`,E1=`

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
`,R1=`

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


`,C1=`
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
`,P1=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,L1=`
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
`,I1=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,D1=`
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
`,F1=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,U1=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,N1=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,B1=`
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
`,z1=`
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
`,k1=`
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
`,O1=`
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
`,V1=`
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
`,H1=`
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
`,G1=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,W1=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,X1=`
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
`,j1=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,q1=`

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
`,$1=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Y1=`
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
`,K1=`
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
`,Z1=`
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
`,J1=`
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
`,Q1=`
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
`,eT=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,tT=`
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
`,iT=`
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
`,nT=`
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
`,sT=`
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
`,rT=`
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
`,oT=`
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
`,aT=`
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
`,lT=`
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
`,cT=`
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
`,hT=`
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
`,uT=`
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
`,dT=`
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
`,fT=`
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
`,pT=`
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
`,mT=`
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
`,gT=`
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
`,yT=`
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
`,_T=`
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
`,xT=`
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
`,vT=`
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
`,MT=`
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
`,bT=`
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
`,wT=`
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
`,Ie={alphamap_fragment:Yw,alphamap_pars_fragment:Kw,alphatest_fragment:Zw,alphatest_pars_fragment:Jw,aomap_fragment:Qw,aomap_pars_fragment:eS,begin_vertex:tS,beginnormal_vertex:iS,bsdfs:nS,iridescence_fragment:sS,bumpmap_pars_fragment:rS,clipping_planes_fragment:oS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:cS,color_fragment:hS,color_pars_fragment:uS,color_pars_vertex:dS,color_vertex:fS,common:pS,cube_uv_reflection_fragment:mS,defaultnormal_vertex:gS,displacementmap_pars_vertex:yS,displacementmap_vertex:_S,emissivemap_fragment:xS,emissivemap_pars_fragment:vS,encodings_fragment:MS,encodings_pars_fragment:bS,envmap_fragment:wS,envmap_common_pars_fragment:SS,envmap_pars_fragment:TS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:zS,envmap_vertex:ES,fog_vertex:RS,fog_pars_vertex:CS,fog_fragment:PS,fog_pars_fragment:LS,gradientmap_pars_fragment:IS,lightmap_fragment:DS,lightmap_pars_fragment:FS,lights_lambert_fragment:US,lights_lambert_pars_fragment:NS,lights_pars_begin:BS,lights_toon_fragment:kS,lights_toon_pars_fragment:OS,lights_phong_fragment:VS,lights_phong_pars_fragment:HS,lights_physical_fragment:GS,lights_physical_pars_fragment:WS,lights_fragment_begin:XS,lights_fragment_maps:jS,lights_fragment_end:qS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:KS,logdepthbuf_vertex:ZS,map_fragment:JS,map_pars_fragment:QS,map_particle_fragment:e1,map_particle_pars_fragment:t1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:n1,morphcolor_vertex:s1,morphnormal_vertex:r1,morphtarget_pars_vertex:o1,morphtarget_vertex:a1,normal_fragment_begin:l1,normal_fragment_maps:c1,normal_pars_fragment:h1,normal_pars_vertex:u1,normal_vertex:d1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:y1,output_fragment:_1,packing:x1,premultiplied_alpha_fragment:v1,project_vertex:M1,dithering_fragment:b1,dithering_pars_fragment:w1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:E1,shadowmap_vertex:R1,shadowmask_pars_fragment:C1,skinbase_vertex:P1,skinning_pars_vertex:L1,skinning_vertex:I1,skinnormal_vertex:D1,specularmap_fragment:F1,specularmap_pars_fragment:U1,tonemapping_fragment:N1,tonemapping_pars_fragment:B1,transmission_fragment:z1,transmission_pars_fragment:k1,uv_pars_fragment:O1,uv_pars_vertex:V1,uv_vertex:H1,worldpos_vertex:G1,background_vert:W1,background_frag:X1,backgroundCube_vert:j1,backgroundCube_frag:q1,cube_vert:$1,cube_frag:Y1,depth_vert:K1,depth_frag:Z1,distanceRGBA_vert:J1,distanceRGBA_frag:Q1,equirect_vert:eT,equirect_frag:tT,linedashed_vert:iT,linedashed_frag:nT,meshbasic_vert:sT,meshbasic_frag:rT,meshlambert_vert:oT,meshlambert_frag:aT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:hT,meshnormal_frag:uT,meshphong_vert:dT,meshphong_frag:fT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:yT,points_vert:_T,points_frag:xT,shadow_vert:vT,shadow_frag:MT,sprite_vert:bT,sprite_frag:wT},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},An={basic:{uniforms:fi([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:fi([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:fi([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:fi([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:fi([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:fi([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:fi([re.points,re.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:fi([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:fi([re.common,re.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:fi([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:fi([re.sprite,re.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:fi([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:fi([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};An.physical={uniforms:fi([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Ql={r:0,b:0,g:0};function ST(s,e,t,i,n,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y,p){let x=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),x=!0),s.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),x=!0;break}(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qc)?(h===void 0&&(h=new At(new fs(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:qo(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_.colorSpace!==De,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new At(new th(2,2),new vn({name:"BackgroundMaterial",uniforms:qo(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.colorSpace!==De,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,p){y.getRGB(Ql,cy(s)),i.buffers.color.setClear(Ql.r,Ql.g,Ql.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(y,p=1){a.set(y),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:m}}function TT(s,e,t,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=y(null);let c=l,h=!1;function u(U,N,W,k,G){let X=!1;if(o){const ee=g(k,W,N);c!==ee&&(c=ee,f(c.object)),X=p(U,k,W,G),X&&x(U,k,W,G)}else{const ee=N.wireframe===!0;(c.geometry!==k.id||c.program!==W.id||c.wireframe!==ee)&&(c.geometry=k.id,c.program=W.id,c.wireframe=ee,X=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,E(U,N,W,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(U){return i.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function m(U){return i.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,N,W){const k=W.wireframe===!0;let G=a[U.id];G===void 0&&(G={},a[U.id]=G);let X=G[N.id];X===void 0&&(X={},G[N.id]=X);let ee=X[k];return ee===void 0&&(ee=y(d()),X[k]=ee),ee}function y(U){const N=[],W=[],k=[];for(let G=0;G<n;G++)N[G]=0,W[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:k,object:U,attributes:{},index:null}}function p(U,N,W,k){const G=c.attributes,X=N.attributes;let ee=0;const oe=W.getAttributes();for(const Z in oe)if(oe[Z].location>=0){const j=G[Z];let ne=X[Z];if(ne===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),j===void 0||j.attribute!==ne||ne&&j.data!==ne.data)return!0;ee++}return c.attributesNum!==ee||c.index!==k}function x(U,N,W,k){const G={},X=N.attributes;let ee=0;const oe=W.getAttributes();for(const Z in oe)if(oe[Z].location>=0){let j=X[Z];j===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));const ne={};ne.attribute=j,j&&j.data&&(ne.data=j.data),G[Z]=ne,ee++}c.attributes=G,c.attributesNum=ee,c.index=k}function _(){const U=c.newAttributes;for(let N=0,W=U.length;N<W;N++)U[N]=0}function M(U){v(U,0)}function v(U,N){const W=c.newAttributes,k=c.enabledAttributes,G=c.attributeDivisors;W[U]=1,k[U]===0&&(s.enableVertexAttribArray(U),k[U]=1),G[U]!==N&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,N),G[U]=N)}function b(){const U=c.newAttributes,N=c.enabledAttributes;for(let W=0,k=N.length;W<k;W++)N[W]!==U[W]&&(s.disableVertexAttribArray(W),N[W]=0)}function S(U,N,W,k,G,X){i.isWebGL2===!0&&(W===s.INT||W===s.UNSIGNED_INT)?s.vertexAttribIPointer(U,N,W,G,X):s.vertexAttribPointer(U,N,W,k,G,X)}function E(U,N,W,k){if(i.isWebGL2===!1&&(U.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const G=k.attributes,X=W.getAttributes(),ee=N.defaultAttributeValues;for(const oe in X){const Z=X[oe];if(Z.location>=0){let V=G[oe];if(V===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){const j=V.normalized,ne=V.itemSize,ae=t.get(V);if(ae===void 0)continue;const z=ae.buffer,Fe=ae.type,Ce=ae.bytesPerElement;if(V.isInterleavedBufferAttribute){const le=V.data,Ae=le.stride,nt=V.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<Z.locationSize;xe++)v(Z.location+xe,le.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<Z.locationSize;xe++)M(Z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,z);for(let xe=0;xe<Z.locationSize;xe++)S(Z.location+xe,ne/Z.locationSize,Fe,j,Ae*Ce,(nt+ne/Z.locationSize*xe)*Ce)}else{if(V.isInstancedBufferAttribute){for(let le=0;le<Z.locationSize;le++)v(Z.location+le,V.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let le=0;le<Z.locationSize;le++)M(Z.location+le);s.bindBuffer(s.ARRAY_BUFFER,z);for(let le=0;le<Z.locationSize;le++)S(Z.location+le,ne/Z.locationSize,Fe,j,ne*Ce,ne/Z.locationSize*le*Ce)}}else if(ee!==void 0){const j=ee[oe];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Z.location,j);break;case 3:s.vertexAttrib3fv(Z.location,j);break;case 4:s.vertexAttrib4fv(Z.location,j);break;default:s.vertexAttrib1fv(Z.location,j)}}}}b()}function w(){L();for(const U in a){const N=a[U];for(const W in N){const k=N[W];for(const G in k)m(k[G].object),delete k[G];delete N[W]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const N=a[U.id];for(const W in N){const k=N[W];for(const G in k)m(k[G].object),delete k[G];delete N[W]}delete a[U.id]}function F(U){for(const N in a){const W=a[N];if(W[U.id]===void 0)continue;const k=W[U.id];for(const G in k)m(k[G].object),delete k[G];delete W[U.id]}}function L(){C(),h=!0,c!==l&&(c=l,f(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:M,disableUnusedAttributes:b}}function AT(s,e,t,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function ET(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||e.has("OES_texture_float"),v=_&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:b}}function RT(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new ur,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,y=u.clipShadows,p=s.get(u);if(!n||m===null||m.length===0||r&&!y)r?h(null):c();else{const x=r?0:i,_=x*4;let M=p.clippingState||null;l.value=M,M=h(m,d,_,f);for(let v=0;v!==_;++v)M[v]=t[v];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let y=null;if(g!==0){if(y=l.value,m!==!0||y===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(y===null||y.length<p)&&(y=new Float32Array(p));for(let _=0,M=f;_!==g;++_,M+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(y,M),y[M+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}}class ms extends Ws{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(Ha("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?De:Sr),this.texture=new Ci(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$i,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ry(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=-90,uo=1;class CT extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new pi(ho,uo,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new pi(ho,uo,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new pi(ho,uo,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new pi(ho,uo,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new pi(ho,uo,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new pi(ho,uo,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=ds,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class PT extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Ha("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wr?De:Sr),this.texture=new Jo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new fs(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ri,blending:ks});r.uniforms.tEquirect.value=t;const o=new At(n,r),a=t.minFilter;return t.minFilter===Za&&(t.minFilter=$i),new CT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}function LT(s){let e=new WeakMap;function t(o,a){return a===nd?o.mapping=Go:a===sd&&(o.mapping=Wo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===nd||a===sd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new PT(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class hy extends Q0{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Po=4,Tm=[.125,.215,.35,.446,.526,.582],gr=20,wu=new hy,Am=new ze;let Su=null;const dr=(1+Math.sqrt(5))/2,fo=1/dr,Em=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,dr,fo),new I(0,dr,-fo),new I(fo,0,dr),new I(-fo,0,dr),new I(dr,fo,0),new I(-dr,fo,0)];class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Su=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su),e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:Ja,format:Ai,colorSpace:Un,depthBuffer:!1},n=Rm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(r)),this._blurMaterial=DT(r,e,t)}return n}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,wu)}_sceneToCubeUV(e,t,i,n){const a=new pi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Am),h.toneMapping=ds,h.autoClear=!1;const f=new Co({name:"PMREM.Background",side:Ri,depthWrite:!1,depthTest:!1}),m=new At(new fs,f);let g=!1;const y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,g=!0):(f.color.copy(Am),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;ec(n,x*_,p>2?_:0,_,_),h.setRenderTarget(n),g&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Go||e.mapping===Wo;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ec(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Em[(n-1)%Em.length];this._blur(e,n-1,n,r,o)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gr-1),g=r/m,y=isFinite(r)?1+Math.floor(h*g):gr;y>gr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gr}`);const p=[];let x=0;for(let S=0;S<gr;++S){const E=S/g,w=Math.exp(-E*E/2);p.push(w),S===0?x+=w:S<y&&(x+=2*w)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const M=this._sizeLods[n],v=3*M*(n>_-Po?n-_+Po:0),b=4*(this._cubeSize-M);ec(t,v,b,3*M,2*M),l.setRenderTarget(t),l.render(u,wu)}}function IT(s){const e=[],t=[],i=[];let n=s;const r=s-Po+1+Tm.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Po?l=Tm[o-s+Po-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,y=2,p=1,x=new Float32Array(g*m*f),_=new Float32Array(y*m*f),M=new Float32Array(p*m*f);for(let b=0;b<f;b++){const S=b%3*2/3-1,E=b>2?0:-1,w=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];x.set(w,g*m*b),_.set(d,y*m*b);const T=[b,b,b,b,b,b];M.set(T,p*m*b)}const v=new Hi;v.setAttribute("position",new nn(x,g)),v.setAttribute("uv",new nn(_,y)),v.setAttribute("faceIndex",new nn(M,p)),e.push(v),n>Po&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rm(s,e,t){const i=new ms(s,e,t);return i.texture.mapping=Qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ec(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function DT(s,e,t){const i=new Float32Array(gr),n=new I(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Cm(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Pm(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function nf(){return`

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
	`}function FT(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nd||l===sd,h=l===Go||l===Wo;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ud(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new ud(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function UT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function NT(s,e,t,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete n[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let y=0,p=g.length;y<p;y++)e.update(g[y],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let _=0,M=x.length;_<M;_+=3){const v=x[_+0],b=x[_+1],S=x[_+2];d.push(v,b,b,S,S,v)}}else{const x=m.array;g=m.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const v=_+0,b=_+1,S=_+2;d.push(v,b,b,S,S,v)}}const y=new(Z0(d)?K0:Y0)(d,1);y.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,y)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function BT(s,e,t,i){const n=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*l),t.update(f,r,1)}function u(d,f,m){if(m===0)return;let g,y;if(n)g=s,y="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](r,f,a,d*l,m),t.update(f,r,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function zT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class uy extends Ci{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kt,this.minFilter=kt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function kT(s,e){return s[0]-e[0]}function OT(s,e){return Math.abs(e[1])-Math.abs(s[1])}function VT(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==m){let U=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let E=0;x===!0&&(E=1),_===!0&&(E=2),M===!0&&(E=3);let w=h.attributes.position.count*E,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const F=new Float32Array(w*T*4*m),L=new uy(F,w,T,m);L.type=_r,L.needsUpdate=!0;const C=E*4;for(let N=0;N<m;N++){const W=v[N],k=b[N],G=S[N],X=w*T*4*N;for(let ee=0;ee<W.count;ee++){const oe=ee*C;x===!0&&(o.fromBufferAttribute(W,ee),F[X+oe+0]=o.x,F[X+oe+1]=o.y,F[X+oe+2]=o.z,F[X+oe+3]=0),_===!0&&(o.fromBufferAttribute(k,ee),F[X+oe+4]=o.x,F[X+oe+5]=o.y,F[X+oe+6]=o.z,F[X+oe+7]=0),M===!0&&(o.fromBufferAttribute(G,ee),F[X+oe+8]=o.x,F[X+oe+9]=o.y,F[X+oe+10]=o.z,F[X+oe+11]=G.itemSize===4?o.w:1)}}g={count:m,texture:L,size:new Le(w,T)},r.set(h,g),h.addEventListener("dispose",U)}let y=0;for(let x=0;x<d.length;x++)y+=d[x];const p=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let m=i[h.id];if(m===void 0||m.length!==f){m=[];for(let _=0;_<f;_++)m[_]=[_,0];i[h.id]=m}for(let _=0;_<f;_++){const M=m[_];M[0]=_,M[1]=d[_]}m.sort(OT);for(let _=0;_<8;_++)_<f&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(kT);const g=h.morphAttributes.position,y=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const M=a[_],v=M[0],b=M[1];v!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+_)!==g[v]&&h.setAttribute("morphTarget"+_,g[v]),y&&h.getAttribute("morphNormal"+_)!==y[v]&&h.setAttribute("morphNormal"+_,y[v]),n[_]=b,p+=b):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),y&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function HT(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class GT extends Ci{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kt,this.minFilter=kt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dy=new Ci,fy=new uy,py=new GT,my=new Jo,Lm=[],Im=[],Dm=new Float32Array(16),Fm=new Float32Array(9),Um=new Float32Array(4);function ea(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Lm[n];if(r===void 0&&(r=new Float32Array(n),Lm[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function nh(s,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function WT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function XT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function jT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function qT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function $T(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ot(t,i))return;Um.set(i),s.uniformMatrix2fv(this.addr,!1,Um),Vt(t,i)}}function YT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ot(t,i))return;Fm.set(i),s.uniformMatrix3fv(this.addr,!1,Fm),Vt(t,i)}}function KT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ot(t,i))return;Dm.set(i),s.uniformMatrix4fv(this.addr,!1,Dm),Vt(t,i)}}function ZT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function JT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function QT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function tA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function nA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function sA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function rA(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||dy,n)}function oA(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||py,n)}function aA(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||my,n)}function lA(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||fy,n)}function cA(s){switch(s){case 5126:return WT;case 35664:return XT;case 35665:return jT;case 35666:return qT;case 35674:return $T;case 35675:return YT;case 35676:return KT;case 5124:case 35670:return ZT;case 35667:case 35671:return JT;case 35668:case 35672:return QT;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return iA;case 36295:return nA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return lA}}function hA(s,e){s.uniform1fv(this.addr,e)}function uA(s,e){const t=ea(e,this.size,2);s.uniform2fv(this.addr,t)}function dA(s,e){const t=ea(e,this.size,3);s.uniform3fv(this.addr,t)}function fA(s,e){const t=ea(e,this.size,4);s.uniform4fv(this.addr,t)}function pA(s,e){const t=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mA(s,e){const t=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gA(s,e){const t=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yA(s,e){s.uniform1iv(this.addr,e)}function _A(s,e){s.uniform2iv(this.addr,e)}function xA(s,e){s.uniform3iv(this.addr,e)}function vA(s,e){s.uniform4iv(this.addr,e)}function MA(s,e){s.uniform1uiv(this.addr,e)}function bA(s,e){s.uniform2uiv(this.addr,e)}function wA(s,e){s.uniform3uiv(this.addr,e)}function SA(s,e){s.uniform4uiv(this.addr,e)}function TA(s,e,t){const i=this.cache,n=e.length,r=nh(t,n);Ot(i,r)||(s.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||dy,r[o])}function AA(s,e,t){const i=this.cache,n=e.length,r=nh(t,n);Ot(i,r)||(s.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||py,r[o])}function EA(s,e,t){const i=this.cache,n=e.length,r=nh(t,n);Ot(i,r)||(s.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||my,r[o])}function RA(s,e,t){const i=this.cache,n=e.length,r=nh(t,n);Ot(i,r)||(s.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||fy,r[o])}function CA(s){switch(s){case 5126:return hA;case 35664:return uA;case 35665:return dA;case 35666:return fA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return yA;case 35667:case 35671:return _A;case 35668:case 35672:return xA;case 35669:case 35673:return vA;case 5125:return MA;case 36294:return bA;case 36295:return wA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return RA}}class PA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=cA(t.type)}}class LA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=CA(t.type)}}class IA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const Tu=/(\w+)(\])?(\[|\.)?/g;function Nm(s,e){s.seq.push(e),s.map[e.id]=e}function DA(s,e,t){const i=s.name,n=i.length;for(Tu.lastIndex=0;;){const r=Tu.exec(i),o=Tu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Nm(t,c===void 0?new PA(a,s,e):new LA(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new IA(a),Nm(t,u)),t=u}}}class Pc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);DA(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Bm(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let FA=0;function UA(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function NA(s){switch(s){case Un:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function zm(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+UA(s.getShaderSource(e),o)}else return n}function BA(s,e){const t=NA(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zA(s,e){let t;switch(e){case Hv:t="Linear";break;case Gv:t="Reinhard";break;case Wv:t="OptimizedCineon";break;case H0:t="ACESFilmic";break;case Xv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kA(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Da).join(`
`)}function OA(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VA(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Da(s){return s!==""}function km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(s){return s.replace(HA,GA)}function GA(s,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dd(t)}const WA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(WA,XA)}function XA(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Hm(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Go:case Wo:e="ENVMAP_TYPE_CUBE";break;case Qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $A(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wo:e="ENVMAP_MODE_REFRACTION";break}return e}function YA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ov:e="ENVMAP_BLENDING_MIX";break;case Vv:e="ENVMAP_BLENDING_ADD";break}return e}function KA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ZA(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jA(t),c=qA(t),h=$A(t),u=YA(t),d=KA(t),f=t.isWebGL2?"":kA(t),m=OA(r),g=n.createProgram();let y,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(Da).join(`
`),y.length>0&&(y+=`
`),p=[f,m].filter(Da).join(`
`),p.length>0&&(p+=`
`)):(y=[Hm(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),p=[f,Hm(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ds?zA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,BA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),o=dd(o),o=km(o,t),o=Om(o,t),a=dd(a),a=km(a,t),a=Om(a,t),o=Vm(o),a=Vm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+y+o,M=x+p+a,v=Bm(n,n.VERTEX_SHADER,_),b=Bm(n,n.FRAGMENT_SHADER,M);if(n.attachShader(g,v),n.attachShader(g,b),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),s.debug.checkShaderErrors){const w=n.getProgramInfoLog(g).trim(),T=n.getShaderInfoLog(v).trim(),F=n.getShaderInfoLog(b).trim();let L=!0,C=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(L=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,v,b);else{const U=zm(n,v,"vertex"),N=zm(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+U+`
`+N)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(T===""||F==="")&&(C=!1);C&&(this.diagnostics={runnable:L,programLog:w,vertexShader:{log:T,prefix:y},fragmentShader:{log:F,prefix:p}})}n.deleteShader(v),n.deleteShader(b);let S;this.getUniforms=function(){return S===void 0&&(S=new Pc(n,g)),S};let E;return this.getAttributes=function(){return E===void 0&&(E=VA(n,g)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=FA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=b,this}let JA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eE(e),t.set(e,i)),i}}class eE{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function tE(s,e,t,i,n,r,o){const a=new Zd,l=new QA,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return w===1?"uv1":w===2?"uv2":w===3?"uv3":"uv"}function y(w,T,F,L,C){const U=L.fog,N=C.geometry,W=w.isMeshStandardMaterial?L.environment:null,k=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),G=k&&k.mapping===Qc?k.image.height:null,X=m[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,oe=ee!==void 0?ee.length:0;let Z=0;N.morphAttributes.position!==void 0&&(Z=1),N.morphAttributes.normal!==void 0&&(Z=2),N.morphAttributes.color!==void 0&&(Z=3);let V,j,ne,ae;if(X){const ut=An[X];V=ut.vertexShader,j=ut.fragmentShader}else V=w.vertexShader,j=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const z=s.getRenderTarget(),Fe=C.isInstancedMesh===!0,Ce=!!w.map,le=!!w.matcap,Ae=!!k,nt=!!w.aoMap,xe=!!w.lightMap,We=!!w.bumpMap,Ht=!!w.normalMap,Yt=!!w.displacementMap,Gt=!!w.emissiveMap,Bt=!!w.metalnessMap,st=!!w.roughnessMap,St=w.clearcoat>0,wi=w.iridescence>0,P=w.sheen>0,A=w.transmission>0,q=St&&!!w.clearcoatMap,ie=St&&!!w.clearcoatNormalMap,se=St&&!!w.clearcoatRoughnessMap,ce=wi&&!!w.iridescenceMap,Re=wi&&!!w.iridescenceThicknessMap,fe=P&&!!w.sheenColorMap,J=P&&!!w.sheenRoughnessMap,ge=!!w.specularMap,Me=!!w.specularColorMap,Se=!!w.specularIntensityMap,de=A&&!!w.transmissionMap,ye=A&&!!w.thicknessMap,$e=!!w.gradientMap,at=!!w.alphaMap,Rt=w.alphaTest>0,B=!!w.extensions,$=!!N.attributes.uv1,te=!!N.attributes.uv2,he=!!N.attributes.uv3;return{isWebGL2:h,shaderID:X,shaderName:w.type,vertexShader:V,fragmentShader:j,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:Fe,instancingColor:Fe&&C.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Un,map:Ce,matcap:le,envMap:Ae,envMapMode:Ae&&k.mapping,envMapCubeUVHeight:G,aoMap:nt,lightMap:xe,bumpMap:We,normalMap:Ht,displacementMap:d&&Yt,emissiveMap:Gt,normalMapObjectSpace:Ht&&w.normalMapType===fM,normalMapTangentSpace:Ht&&w.normalMapType===eh,metalnessMap:Bt,roughnessMap:st,clearcoat:St,clearcoatMap:q,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:wi,iridescenceMap:ce,iridescenceThicknessMap:Re,sheen:P,sheenColorMap:fe,sheenRoughnessMap:J,specularMap:ge,specularColorMap:Me,specularIntensityMap:Se,transmission:A,transmissionMap:de,thicknessMap:ye,gradientMap:$e,opaque:w.transparent===!1&&w.blending===Uo,alphaMap:at,alphaTest:Rt,combine:w.combine,mapUv:Ce&&g(w.map.channel),aoMapUv:nt&&g(w.aoMap.channel),lightMapUv:xe&&g(w.lightMap.channel),bumpMapUv:We&&g(w.bumpMap.channel),normalMapUv:Ht&&g(w.normalMap.channel),displacementMapUv:Yt&&g(w.displacementMap.channel),emissiveMapUv:Gt&&g(w.emissiveMap.channel),metalnessMapUv:Bt&&g(w.metalnessMap.channel),roughnessMapUv:st&&g(w.roughnessMap.channel),clearcoatMapUv:q&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(w.sheenRoughnessMap.channel),specularMapUv:ge&&g(w.specularMap.channel),specularColorMapUv:Me&&g(w.specularColorMap.channel),specularIntensityMapUv:Se&&g(w.specularIntensityMap.channel),transmissionMapUv:de&&g(w.transmissionMap.channel),thicknessMapUv:ye&&g(w.thicknessMap.channel),alphaMapUv:at&&g(w.alphaMap.channel),vertexTangents:Ht&&!!N.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:te,vertexUv3s:he,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Ce||at),fog:!!U,useFog:w.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:w.toneMapped?s.toneMapping:ds,useLegacyLights:s.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===Ri,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:B&&w.extensions.derivatives===!0,extensionFragDepth:B&&w.extensions.fragDepth===!0,extensionDrawBuffers:B&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)T.push(F),T.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(x(T,w),_(T,w),T.push(s.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function x(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),w.push(a.mask)}function M(w){const T=m[w.type];let F;if(T){const L=An[T];F=jw.clone(L.uniforms)}else F=w.uniforms;return F}function v(w,T){let F;for(let L=0,C=c.length;L<C;L++){const U=c[L];if(U.cacheKey===T){F=U,++F.usedTimes;break}}return F===void 0&&(F=new ZA(s,T,w,r),c.push(F)),F}function b(w){if(--w.usedTimes===0){const T=c.indexOf(w);c[T]=c[c.length-1],c.pop(),w.destroy()}}function S(w){l.remove(w)}function E(){l.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:E}}function iE(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function nE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,m,g,y){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:y},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=y),e++,p}function a(u,d,f,m,g,y){const p=o(u,d,f,m,g,y);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,m,g,y){const p=o(u,d,f,m,g,y);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||nE),i.length>1&&i.sort(d||Gm),n.length>1&&n.sort(d||Gm)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function sE(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new Wm,s.set(i,[o])):n>=r.length?(o=new Wm,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let aE=0;function lE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cE(s,e){const t=new rE,i=oE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new I);const r=new I,o=new ht,a=new ht;function l(h,u){let d=0,f=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let g=0,y=0,p=0,x=0,_=0,M=0,v=0,b=0,S=0,E=0;h.sort(lE);const w=u===!0?Math.PI:1;for(let F=0,L=h.length;F<L;F++){const C=h[F],U=C.color,N=C.intensity,W=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=U.r*N*w,f+=U.g*N*w,m+=U.b*N*w;else if(C.isLightProbe)for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],N);else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const X=C.shadow,ee=i.get(C);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=C.shadow.matrix,M++}n.directional[g]=G,g++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(N*w),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[p]=G;const X=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,X.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[p]=X.matrix,C.castShadow){const ee=i.get(C);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=k,b++}p++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(U).multiplyScalar(N),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=G,x++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*w),G.distance=C.distance,G.decay=C.decay,C.castShadow){const X=C.shadow,ee=i.get(C);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,n.pointShadow[y]=ee,n.pointShadowMap[y]=k,n.pointShadowMatrix[y]=C.shadow.matrix,v++}n.point[y]=G,y++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(N*w),G.groundColor.copy(C.groundColor).multiplyScalar(N*w),n.hemi[_]=G,_++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const T=n.hash;(T.directionalLength!==g||T.pointLength!==y||T.spotLength!==p||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==M||T.numPointShadows!==v||T.numSpotShadows!==b||T.numSpotMaps!==S)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,T.directionalLength=g,T.pointLength=y,T.spotLength=p,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=M,T.numPointShadows=v,T.numSpotShadows=b,T.numSpotMaps=S,n.version=aE++)}function c(h,u){let d=0,f=0,m=0,g=0,y=0;const p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const M=h[x];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(M.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),y++}}}return{setup:l,setupView:c,state:n}}function Xm(s,e){const t=new cE(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hE(s,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Xm(s,e),t.set(r,[l])):o>=a.length?(l=new Xm(s,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class uE extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dE extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,pE=`
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
`;function mE(s,e,t){let i=new tf;const n=new Le,r=new Le,o=new _t,a=new uE({depthPacking:dM}),l=new dE,c={},h=t.maxTextureSize,u={[xn]:Ri,[Ri]:xn,[En]:En},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:fE,fragmentShader:pE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Hi;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let p=this.type;this.render=function(v,b,S){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||v.length===0)return;const E=s.getRenderTarget(),w=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ks),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=p!==is&&this.type===is,C=p===is&&this.type!==is;for(let U=0,N=v.length;U<N;U++){const W=v[U],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const G=k.getFrameExtents();if(n.multiply(G),r.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/G.x),n.x=r.x*G.x,k.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/G.y),n.y=r.y*G.y,k.mapSize.y=r.y)),k.map===null||L===!0||C===!0){const ee=this.type!==is?{minFilter:kt,magFilter:kt}:{};k.map!==null&&k.map.dispose(),k.map=new ms(n.x,n.y,ee),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const X=k.getViewportCount();for(let ee=0;ee<X;ee++){const oe=k.getViewport(ee);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),F.viewport(o),k.updateMatrices(W,ee),i=k.getFrustum(),M(b,S,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===is&&x(k,S),k.needsUpdate=!1}p=this.type,y.needsUpdate=!1,s.setRenderTarget(E,w,T)};function x(v,b){const S=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ms(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(b,null,S,d,g,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(b,null,S,f,g,null)}function _(v,b,S,E){let w=null;const T=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(T!==void 0)w=T;else if(w=S.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=w.uuid,L=b.uuid;let C=c[F];C===void 0&&(C={},c[F]=C);let U=C[L];U===void 0&&(U=w.clone(),C[L]=U),w=U}if(w.visible=b.visible,w.wireframe=b.wireframe,E===is?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=s.properties.get(w);F.light=S}return w}function M(v,b,S,E,w){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===is)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const L=e.update(v),C=v.material;if(Array.isArray(C)){const U=L.groups;for(let N=0,W=U.length;N<W;N++){const k=U[N],G=C[k.materialIndex];if(G&&G.visible){const X=_(v,G,E,w);s.renderBufferDirect(S,null,L,X,v,k)}}}else if(C.visible){const U=_(v,C,E,w);s.renderBufferDirect(S,null,L,U,v,null)}}const F=v.children;for(let L=0,C=F.length;L<C;L++)M(F[L],b,S,E,w)}}function gE(s,e,t){const i=t.isWebGL2;function n(){let B=!1;const $=new _t;let te=null;const he=new _t(0,0,0,0);return{setMask:function(pe){te!==pe&&!B&&(s.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){B=pe},setClear:function(pe,ut,dt,ii,ys){ys===!0&&(pe*=ii,ut*=ii,dt*=ii),$.set(pe,ut,dt,ii),he.equals($)===!1&&(s.clearColor(pe,ut,dt,ii),he.copy($))},reset:function(){B=!1,te=null,he.set(-1,0,0,0)}}}function r(){let B=!1,$=null,te=null,he=null;return{setTest:function(pe){pe?z(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(pe){$!==pe&&!B&&(s.depthMask(pe),$=pe)},setFunc:function(pe){if(te!==pe){switch(pe){case Dv:s.depthFunc(s.NEVER);break;case Fv:s.depthFunc(s.ALWAYS);break;case Uv:s.depthFunc(s.LESS);break;case id:s.depthFunc(s.LEQUAL);break;case Nv:s.depthFunc(s.EQUAL);break;case Bv:s.depthFunc(s.GEQUAL);break;case zv:s.depthFunc(s.GREATER);break;case kv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=pe}},setLocked:function(pe){B=pe},setClear:function(pe){he!==pe&&(s.clearDepth(pe),he=pe)},reset:function(){B=!1,$=null,te=null,he=null}}}function o(){let B=!1,$=null,te=null,he=null,pe=null,ut=null,dt=null,ii=null,ys=null;return{setTest:function(Ct){B||(Ct?z(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(Ct){$!==Ct&&!B&&(s.stencilMask(Ct),$=Ct)},setFunc:function(Ct,Gi,wn){(te!==Ct||he!==Gi||pe!==wn)&&(s.stencilFunc(Ct,Gi,wn),te=Ct,he=Gi,pe=wn)},setOp:function(Ct,Gi,wn){(ut!==Ct||dt!==Gi||ii!==wn)&&(s.stencilOp(Ct,Gi,wn),ut=Ct,dt=Gi,ii=wn)},setLocked:function(Ct){B=Ct},setClear:function(Ct){ys!==Ct&&(s.clearStencil(Ct),ys=Ct)},reset:function(){B=!1,$=null,te=null,he=null,pe=null,ut=null,dt=null,ii=null,ys=null}}}const a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,g=[],y=null,p=!1,x=null,_=null,M=null,v=null,b=null,S=null,E=null,w=!1,T=null,F=null,L=null,C=null,U=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=k>=2);let X=null,ee={};const oe=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),V=new _t().fromArray(oe),j=new _t().fromArray(Z);function ne(B,$,te,he){const pe=new Uint8Array(4),ut=s.createTexture();s.bindTexture(B,ut),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<te;dt++)i&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D($,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D($+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ut}const ae={};ae[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),z(s.DEPTH_TEST),l.setFunc(id),Yt(!1),Gt(wp),z(s.CULL_FACE),We(ks);function z(B){d[B]!==!0&&(s.enable(B),d[B]=!0)}function Fe(B){d[B]!==!1&&(s.disable(B),d[B]=!1)}function Ce(B,$){return f[B]!==$?(s.bindFramebuffer(B,$),f[B]=$,i&&(B===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=$),B===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=$)),!0):!1}function le(B,$){let te=g,he=!1;if(B)if(te=m.get($),te===void 0&&(te=[],m.set($,te)),B.isWebGLMultipleRenderTargets){const pe=B.texture;if(te.length!==pe.length||te[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,dt=pe.length;ut<dt;ut++)te[ut]=s.COLOR_ATTACHMENT0+ut;te.length=pe.length,he=!0}}else te[0]!==s.COLOR_ATTACHMENT0&&(te[0]=s.COLOR_ATTACHMENT0,he=!0);else te[0]!==s.BACK&&(te[0]=s.BACK,he=!0);he&&(t.isWebGL2?s.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ae(B){return y!==B?(s.useProgram(B),y=B,!0):!1}const nt={[mr]:s.FUNC_ADD,[wv]:s.FUNC_SUBTRACT,[Sv]:s.FUNC_REVERSE_SUBTRACT};if(i)nt[Ap]=s.MIN,nt[Ep]=s.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(nt[Ap]=B.MIN_EXT,nt[Ep]=B.MAX_EXT)}const xe={[Tv]:s.ZERO,[O0]:s.ONE,[Av]:s.SRC_COLOR,[V0]:s.SRC_ALPHA,[Iv]:s.SRC_ALPHA_SATURATE,[Pv]:s.DST_COLOR,[Rv]:s.DST_ALPHA,[Ev]:s.ONE_MINUS_SRC_COLOR,[Yd]:s.ONE_MINUS_SRC_ALPHA,[Lv]:s.ONE_MINUS_DST_COLOR,[Cv]:s.ONE_MINUS_DST_ALPHA};function We(B,$,te,he,pe,ut,dt,ii){if(B===ks){p===!0&&(Fe(s.BLEND),p=!1);return}if(p===!1&&(z(s.BLEND),p=!0),B!==k0){if(B!==x||ii!==w){if((_!==mr||b!==mr)&&(s.blendEquation(s.FUNC_ADD),_=mr,b=mr),ii)switch(B){case Uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case td:s.blendFunc(s.ONE,s.ONE);break;case Sp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case td:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,v=null,S=null,E=null,x=B,w=ii}return}pe=pe||$,ut=ut||te,dt=dt||he,($!==_||pe!==b)&&(s.blendEquationSeparate(nt[$],nt[pe]),_=$,b=pe),(te!==M||he!==v||ut!==S||dt!==E)&&(s.blendFuncSeparate(xe[te],xe[he],xe[ut],xe[dt]),M=te,v=he,S=ut,E=dt),x=B,w=!1}function Ht(B,$){B.side===En?Fe(s.CULL_FACE):z(s.CULL_FACE);let te=B.side===Ri;$&&(te=!te),Yt(te),B.blending===Uo&&B.transparent===!1?We(ks):We(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const he=B.stencilWrite;c.setTest(he),he&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),st(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?z(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(B){T!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),T=B)}function Gt(B){B!==Mv?(z(s.CULL_FACE),B!==F&&(B===wp?s.cullFace(s.BACK):B===bv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),F=B}function Bt(B){B!==L&&(W&&s.lineWidth(B),L=B)}function st(B,$,te){B?(z(s.POLYGON_OFFSET_FILL),(C!==$||U!==te)&&(s.polygonOffset($,te),C=$,U=te)):Fe(s.POLYGON_OFFSET_FILL)}function St(B){B?z(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function wi(B){B===void 0&&(B=s.TEXTURE0+N-1),X!==B&&(s.activeTexture(B),X=B)}function P(B,$,te){te===void 0&&(X===null?te=s.TEXTURE0+N-1:te=X);let he=ee[te];he===void 0&&(he={type:void 0,texture:void 0},ee[te]=he),(he.type!==B||he.texture!==$)&&(X!==te&&(s.activeTexture(te),X=te),s.bindTexture(B,$||ae[B]),he.type=B,he.texture=$)}function A(){const B=ee[X];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(B){V.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),V.copy(B))}function ye(B){j.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),j.copy(B))}function $e(B,$){let te=u.get($);te===void 0&&(te=new WeakMap,u.set($,te));let he=te.get(B);he===void 0&&(he=s.getUniformBlockIndex($,B.name),te.set(B,he))}function at(B,$){const he=u.get($).get(B);h.get($)!==he&&(s.uniformBlockBinding($,he,B.__bindingPointIndex),h.set($,he))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},X=null,ee={},f={},m=new WeakMap,g=[],y=null,p=!1,x=null,_=null,M=null,v=null,b=null,S=null,E=null,w=!1,T=null,F=null,L=null,C=null,U=null,V.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:z,disable:Fe,bindFramebuffer:Ce,drawBuffers:le,useProgram:Ae,setBlending:We,setMaterial:Ht,setFlipSided:Yt,setCullFace:Gt,setLineWidth:Bt,setPolygonOffset:st,setScissorTest:St,activeTexture:wi,bindTexture:P,unbindTexture:A,compressedTexImage2D:q,compressedTexImage3D:ie,texImage2D:Me,texImage3D:Se,updateUBOMapping:$e,uniformBlockBinding:at,texStorage2D:J,texStorage3D:ge,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Re,compressedTexSubImage3D:fe,scissor:de,viewport:ye,reset:Rt}}function yE(s,e,t,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const y=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,A){return p?new OffscreenCanvas(P,A):Qa("canvas")}function _(P,A,q,ie){let se=1;if((P.width>ie||P.height>ie)&&(se=ie/Math.max(P.width,P.height)),se<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ce=A?L_:Math.floor,Re=ce(se*P.width),fe=ce(se*P.height);g===void 0&&(g=x(Re,fe));const J=q?x(Re,fe):g;return J.width=Re,J.height=fe,J.getContext("2d").drawImage(P,0,0,Re,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Re+"x"+fe+")."),J}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return Uf(P.width)&&Uf(P.height)}function v(P){return a?!1:P.wrapS!==mn||P.wrapT!==mn||P.minFilter!==kt&&P.minFilter!==$i}function b(P,A){return P.generateMipmaps&&A&&P.minFilter!==kt&&P.minFilter!==$i}function S(P){s.generateMipmap(P)}function E(P,A,q,ie,se=!1){if(a===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=A;return A===s.RED&&(q===s.FLOAT&&(ce=s.R32F),q===s.HALF_FLOAT&&(ce=s.R16F),q===s.UNSIGNED_BYTE&&(ce=s.R8)),A===s.RG&&(q===s.FLOAT&&(ce=s.RG32F),q===s.HALF_FLOAT&&(ce=s.RG16F),q===s.UNSIGNED_BYTE&&(ce=s.RG8)),A===s.RGBA&&(q===s.FLOAT&&(ce=s.RGBA32F),q===s.HALF_FLOAT&&(ce=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ce=ie===De&&se===!1?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)),(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(P,A,q){return b(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==$i?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){return P===kt||P===Rp||P===$h?s.NEAREST:s.LINEAR}function F(P){const A=P.target;A.removeEventListener("dispose",F),C(A),A.isVideoTexture&&m.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),N(A)}function C(P){const A=i.get(P);if(A.__webglInit===void 0)return;const q=P.source,ie=y.get(q);if(ie){const se=ie[A.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(P),Object.keys(ie).length===0&&y.delete(q)}i.remove(P)}function U(P){const A=i.get(P);s.deleteTexture(A.__webglTexture);const q=P.source,ie=y.get(q);delete ie[A.__cacheKey],o.memory.textures--}function N(P){const A=P.texture,q=i.get(P),ie=i.get(A);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(q.__webglFramebuffer[se]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let se=0;se<q.__webglColorRenderbuffer.length;se++)q.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[se]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let se=0,ce=A.length;se<ce;se++){const Re=i.get(A[se]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(A[se])}i.remove(A),i.remove(P)}let W=0;function k(){W=0}function G(){const P=W;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),W+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ee(P,A){const q=i.get(P);if(P.isVideoTexture&&St(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(q,P,A);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function oe(P,A){const q=i.get(P);if(P.version>0&&q.__version!==P.version){Fe(q,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function Z(P,A){const q=i.get(P);if(P.version>0&&q.__version!==P.version){Fe(q,P,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function V(P,A){const q=i.get(P);if(P.version>0&&q.__version!==P.version){Ce(q,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}const j={[rd]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[od]:s.MIRRORED_REPEAT},ne={[kt]:s.NEAREST,[Rp]:s.NEAREST_MIPMAP_NEAREST,[$h]:s.NEAREST_MIPMAP_LINEAR,[$i]:s.LINEAR,[jv]:s.LINEAR_MIPMAP_NEAREST,[Za]:s.LINEAR_MIPMAP_LINEAR};function ae(P,A,q){if(q?(s.texParameteri(P,s.TEXTURE_WRAP_S,j[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,j[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,j[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ne[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ne[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==mn||A.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,T(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==kt&&A.minFilter!==$i&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===kt||A.minFilter!==$h&&A.minFilter!==Za||A.type===_r&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ja&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(s.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function z(P,A){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",F));const ie=A.source;let se=y.get(ie);se===void 0&&(se={},y.set(ie,se));const ce=X(A);if(ce!==P.__cacheKey){se[ce]===void 0&&(se[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[ce].usedTimes++;const Re=se[P.__cacheKey];Re!==void 0&&(se[P.__cacheKey].usedTimes--,Re.usedTimes===0&&U(A)),P.__cacheKey=ce,P.__webglTexture=se[ce].texture}return q}function Fe(P,A,q){let ie=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=s.TEXTURE_3D);const se=z(P,A),ce=A.source;t.bindTexture(ie,P.__webglTexture,s.TEXTURE0+q);const Re=i.get(ce);if(ce.version!==Re.__version||se===!0){t.activeTexture(s.TEXTURE0+q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const fe=v(A)&&M(A.image)===!1;let J=_(A.image,fe,!1,h);J=wi(A,J);const ge=M(J)||a,Me=r.convert(A.format,A.colorSpace);let Se=r.convert(A.type),de=E(A.internalFormat,Me,Se,A.colorSpace);ae(ie,A,ge);let ye;const $e=A.mipmaps,at=a&&A.isVideoTexture!==!0,Rt=Re.__version===void 0||se===!0,B=w(A,J,ge);if(A.isDepthTexture)de=s.DEPTH_COMPONENT,a?A.type===_r?de=s.DEPTH_COMPONENT32F:A.type===yr?de=s.DEPTH_COMPONENT24:A.type===Mr?de=s.DEPTH24_STENCIL8:de=s.DEPTH_COMPONENT16:A.type===_r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===br&&de===s.DEPTH_COMPONENT&&A.type!==W0&&A.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=yr,Se=r.convert(A.type)),A.format===Rr&&de===s.DEPTH_COMPONENT&&(de=s.DEPTH_STENCIL,A.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Mr,Se=r.convert(A.type))),Rt&&(at?t.texStorage2D(s.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,de,J.width,J.height,0,Me,Se,null));else if(A.isDataTexture)if($e.length>0&&ge){at&&Rt&&t.texStorage2D(s.TEXTURE_2D,B,de,$e[0].width,$e[0].height);for(let $=0,te=$e.length;$<te;$++)ye=$e[$],at?t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,Me,Se,ye.data):t.texImage2D(s.TEXTURE_2D,$,de,ye.width,ye.height,0,Me,Se,ye.data);A.generateMipmaps=!1}else at?(Rt&&t.texStorage2D(s.TEXTURE_2D,B,de,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Me,Se,J.data)):t.texImage2D(s.TEXTURE_2D,0,de,J.width,J.height,0,Me,Se,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,B,de,$e[0].width,$e[0].height,J.depth);for(let $=0,te=$e.length;$<te;$++)ye=$e[$],A.format!==Ai?Me!==null?at?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,J.depth,Me,ye.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,de,ye.width,ye.height,J.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,J.depth,Me,Se,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,de,ye.width,ye.height,J.depth,0,Me,Se,ye.data)}else{at&&Rt&&t.texStorage2D(s.TEXTURE_2D,B,de,$e[0].width,$e[0].height);for(let $=0,te=$e.length;$<te;$++)ye=$e[$],A.format!==Ai?Me!==null?at?t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,$,de,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,Me,Se,ye.data):t.texImage2D(s.TEXTURE_2D,$,de,ye.width,ye.height,0,Me,Se,ye.data)}else if(A.isDataArrayTexture)at?(Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,B,de,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Me,Se,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,Me,Se,J.data);else if(A.isData3DTexture)at?(Rt&&t.texStorage3D(s.TEXTURE_3D,B,de,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Me,Se,J.data)):t.texImage3D(s.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,Me,Se,J.data);else if(A.isFramebufferTexture){if(Rt)if(at)t.texStorage2D(s.TEXTURE_2D,B,de,J.width,J.height);else{let $=J.width,te=J.height;for(let he=0;he<B;he++)t.texImage2D(s.TEXTURE_2D,he,de,$,te,0,Me,Se,null),$>>=1,te>>=1}}else if($e.length>0&&ge){at&&Rt&&t.texStorage2D(s.TEXTURE_2D,B,de,$e[0].width,$e[0].height);for(let $=0,te=$e.length;$<te;$++)ye=$e[$],at?t.texSubImage2D(s.TEXTURE_2D,$,0,0,Me,Se,ye):t.texImage2D(s.TEXTURE_2D,$,de,Me,Se,ye);A.generateMipmaps=!1}else at?(Rt&&t.texStorage2D(s.TEXTURE_2D,B,de,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Se,J)):t.texImage2D(s.TEXTURE_2D,0,de,Me,Se,J);b(A,ge)&&S(ie),Re.__version=ce.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ce(P,A,q){if(A.image.length!==6)return;const ie=z(P,A),se=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);const ce=i.get(se);if(se.version!==ce.__version||ie===!0){t.activeTexture(s.TEXTURE0+q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,fe=A.image[0]&&A.image[0].isDataTexture,J=[];for(let $=0;$<6;$++)!Re&&!fe?J[$]=_(A.image[$],!1,!0,c):J[$]=fe?A.image[$].image:A.image[$],J[$]=wi(A,J[$]);const ge=J[0],Me=M(ge)||a,Se=r.convert(A.format,A.colorSpace),de=r.convert(A.type),ye=E(A.internalFormat,Se,de,A.colorSpace),$e=a&&A.isVideoTexture!==!0,at=ce.__version===void 0||ie===!0;let Rt=w(A,ge,Me);ae(s.TEXTURE_CUBE_MAP,A,Me);let B;if(Re){$e&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,ye,ge.width,ge.height);for(let $=0;$<6;$++){B=J[$].mipmaps;for(let te=0;te<B.length;te++){const he=B[te];A.format!==Ai?Se!==null?$e?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,0,0,he.width,he.height,Se,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,0,0,he.width,he.height,Se,de,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,ye,he.width,he.height,0,Se,de,he.data)}}}else{B=A.mipmaps,$e&&at&&(B.length>0&&Rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,ye,J[0].width,J[0].height));for(let $=0;$<6;$++)if(fe){$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,J[$].width,J[$].height,Se,de,J[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,J[$].width,J[$].height,0,Se,de,J[$].data);for(let te=0;te<B.length;te++){const pe=B[te].image[$].image;$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,0,0,pe.width,pe.height,Se,de,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,ye,pe.width,pe.height,0,Se,de,pe.data)}}else{$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,de,J[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,Se,de,J[$]);for(let te=0;te<B.length;te++){const he=B[te];$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,0,0,Se,de,he.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,ye,Se,de,he.image[$])}}}b(A,Me)&&S(s.TEXTURE_CUBE_MAP),ce.__version=se.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function le(P,A,q,ie,se){const ce=r.convert(q.format,q.colorSpace),Re=r.convert(q.type),fe=E(q.internalFormat,ce,Re,q.colorSpace);i.get(A).__hasExternalTextures||(se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,0,fe,A.width,A.height,A.depth,0,ce,Re,null):t.texImage2D(se,0,fe,A.width,A.height,0,ce,Re,null)),t.bindFramebuffer(s.FRAMEBUFFER,P),st(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,se,i.get(q).__webglTexture,0,Bt(A)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,se,i.get(q).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(P,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ie=s.DEPTH_COMPONENT16;if(q||st(A)){const se=A.depthTexture;se&&se.isDepthTexture&&(se.type===_r?ie=s.DEPTH_COMPONENT32F:se.type===yr&&(ie=s.DEPTH_COMPONENT24));const ce=Bt(A);st(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ie,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ie,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Bt(A);q&&st(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):st(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let se=0;se<ie.length;se++){const ce=ie[se],Re=r.convert(ce.format,ce.colorSpace),fe=r.convert(ce.type),J=E(ce.internalFormat,Re,fe,ce.colorSpace),ge=Bt(A);q&&st(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,J,A.width,A.height):st(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,J,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,J,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);const ie=i.get(A.depthTexture).__webglTexture,se=Bt(A);if(A.depthTexture.format===br)st(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(A.depthTexture.format===Rr)st(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function xe(P){const A=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");nt(A.__webglFramebuffer,P)}else if(q){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=s.createRenderbuffer(),Ae(A.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Ae(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(P,A,q){const ie=i.get(P);A!==void 0&&le(ie.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),q!==void 0&&xe(P)}function Ht(P){const A=P.texture,q=i.get(P),ie=i.get(A);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=A.version,o.memory.textures++);const se=P.isWebGLCubeRenderTarget===!0,ce=P.isWebGLMultipleRenderTargets===!0,Re=M(P)||a;if(se){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)q.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),ce)if(n.drawBuffers){const fe=P.texture;for(let J=0,ge=fe.length;J<ge;J++){const Me=i.get(fe[J]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&st(P)===!1){const fe=ce?A:[A];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let J=0;J<fe.length;J++){const ge=fe[J];q.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[J]);const Me=r.convert(ge.format,ge.colorSpace),Se=r.convert(ge.type),de=E(ge.internalFormat,Me,Se,ge.colorSpace,P.isXRRenderTarget===!0),ye=Bt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,de,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,q.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),ae(s.TEXTURE_CUBE_MAP,A,Re);for(let fe=0;fe<6;fe++)le(q.__webglFramebuffer[fe],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe);b(A,Re)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const fe=P.texture;for(let J=0,ge=fe.length;J<ge;J++){const Me=fe[J],Se=i.get(Me);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ae(s.TEXTURE_2D,Me,Re),le(q.__webglFramebuffer,P,Me,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D),b(Me,Re)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?fe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),ae(fe,A,Re),le(q.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,fe),b(A,Re)&&S(fe),t.unbindTexture()}P.depthBuffer&&xe(P)}function Yt(P){const A=M(P)||a,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,se=q.length;ie<se;ie++){const ce=q[ie];if(b(ce,A)){const Re=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=i.get(ce).__webglTexture;t.bindTexture(Re,fe),S(Re),t.unbindTexture()}}}function Gt(P){if(a&&P.samples>0&&st(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,ie=P.height;let se=s.COLOR_BUFFER_BIT;const ce=[],Re=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=i.get(P),J=P.isWebGLMultipleRenderTargets===!0;if(J)for(let ge=0;ge<A.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<A.length;ge++){ce.push(s.COLOR_ATTACHMENT0+ge),P.depthBuffer&&ce.push(Re);const Me=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Me===!1&&(P.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),J&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]),Me===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Re]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Re])),J){const Se=i.get(A[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,q,ie,0,0,q,ie,se,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ge=0;ge<A.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Me=i.get(A[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Bt(P){return Math.min(u,P.samples)}function st(P){const A=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function St(P){const A=o.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function wi(P,A){const q=P.colorSpace,ie=P.format,se=P.type;return P.isCompressedTexture===!0||P.format===ad||q!==Un&&q!==Sr&&(q===De?a===!1?e.has("EXT_sRGB")===!0&&ie===Ai?(P.format=ad,P.minFilter=$i,P.generateMipmaps=!1):A=sy.sRGBToLinear(A):(ie!==Ai||se!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=st}function _E(s,e,t){const i=t.isWebGL2;function n(r,o=Sr){let a;if(r===Er)return s.UNSIGNED_BYTE;if(r===Kv)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zv)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qv)return s.BYTE;if(r===$v)return s.SHORT;if(r===W0)return s.UNSIGNED_SHORT;if(r===Yv)return s.INT;if(r===yr)return s.UNSIGNED_INT;if(r===_r)return s.FLOAT;if(r===Ja)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jv)return s.ALPHA;if(r===Ai)return s.RGBA;if(r===Qv)return s.LUMINANCE;if(r===eM)return s.LUMINANCE_ALPHA;if(r===br)return s.DEPTH_COMPONENT;if(r===Rr)return s.DEPTH_STENCIL;if(r===ad)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===tM)return s.RED;if(r===iM)return s.RED_INTEGER;if(r===nM)return s.RG;if(r===sM)return s.RG_INTEGER;if(r===rM)return s.RGBA_INTEGER;if(r===Yh||r===Kh||r===Zh||r===Jh)if(o===De)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Yh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Yh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cp||r===Pp||r===Lp||r===Ip)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Cp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ip)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dp||r===Fp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Dp)return o===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Up||r===Np||r===Bp||r===zp||r===kp||r===Op||r===Vp||r===Hp||r===Gp||r===Wp||r===Xp||r===jp||r===qp||r===$p)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Up)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Np)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Op)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$p)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Qh)return o===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===aM||r===Yp||r===Kp||r===Zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Qh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Yp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mr?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class xE extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fa extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const y=t.getJointPose(g,i),p=this._getHandJoint(c,g);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gy extends Ci{constructor(e,t,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:br,h!==br&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===br&&(i=yr),i===void 0&&h===Rr&&(i=Mr),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1}}class ME extends Ws{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const g=t.getContextAttributes();let y=null,p=null;const x=[],_=[],M=new Set,v=new Map,b=new pi;b.layers.enable(1),b.viewport=new _t;const S=new pi;S.layers.enable(2),S.viewport=new _t;const E=[b,S],w=new xE;w.layers.enable(1),w.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=x[V];return j===void 0&&(j=new Au,x[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=x[V];return j===void 0&&(j=new Au,x[V]=j),j.getGripSpace()},this.getHand=function(V){let j=x[V];return j===void 0&&(j=new Au,x[V]=j),j.getHandSpace()};function L(V){const j=_.indexOf(V.inputSource);if(j===-1)return;const ne=x[j];ne!==void 0&&(ne.update(V.inputSource,V.frame,c||o),ne.dispatchEvent({type:V.type,data:V.inputSource}))}function C(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",C),n.removeEventListener("inputsourceschange",U);for(let V=0;V<x.length;V++){const j=_[V];j!==null&&(_[V]=null,x[V].disconnect(j))}T=null,F=null,e.setRenderTarget(y),f=null,d=null,u=null,n=null,p=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",C),n.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:f}),p=new ms(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,ne=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?Rr:br,ne=g.stencil?Mr:yr);const z={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(z),n.updateRenderState({layers:[d]}),p=new ms(d.textureWidth,d.textureHeight,{format:Ai,type:Er,depthTexture:new gy(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Fe=e.properties.get(p);Fe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Z.setContext(n),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(V){for(let j=0;j<V.removed.length;j++){const ne=V.removed[j],ae=_.indexOf(ne);ae>=0&&(_[ae]=null,x[ae].disconnect(ne))}for(let j=0;j<V.added.length;j++){const ne=V.added[j];let ae=_.indexOf(ne);if(ae===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=_.length){_.push(ne),ae=Fe;break}else if(_[Fe]===null){_[Fe]=ne,ae=Fe;break}if(ae===-1)break}const z=x[ae];z&&z.connect(ne)}}const N=new I,W=new I;function k(V,j,ne){N.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(ne.matrixWorld);const ae=N.distanceTo(W),z=j.projectionMatrix.elements,Fe=ne.projectionMatrix.elements,Ce=z[14]/(z[10]-1),le=z[14]/(z[10]+1),Ae=(z[9]+1)/z[5],nt=(z[9]-1)/z[5],xe=(z[8]-1)/z[0],We=(Fe[8]+1)/Fe[0],Ht=Ce*xe,Yt=Ce*We,Gt=ae/(-xe+We),Bt=Gt*-xe;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(Gt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const st=Ce+Gt,St=le+Gt,wi=Ht-Bt,P=Yt+(ae-Bt),A=Ae*le/St*st,q=nt*le/St*st;V.projectionMatrix.makePerspective(wi,P,A,q,st,St),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function G(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;w.near=S.near=b.near=V.near,w.far=S.far=b.far=V.far,(T!==w.near||F!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,F=w.far);const j=V.parent,ne=w.cameras;G(w,j);for(let ae=0;ae<ne.length;ae++)G(ne[ae],j);ne.length===2?k(w,b,S):w.projectionMatrix.copy(b.projectionMatrix),X(V,w,j)};function X(V,j,ne){ne===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(ne.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ae=V.children;for(let z=0,Fe=ae.length;z<Fe;z++)ae[z].updateMatrixWorld(!0);V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=kc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.getPlanes=function(){return M};let ee=null;function oe(V,j){if(h=j.getViewerPose(c||o),m=j,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ae=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let z=0;z<ne.length;z++){const Fe=ne[z];let Ce=null;if(f!==null)Ce=f.getViewport(Fe);else{const Ae=u.getViewSubImage(d,Fe);Ce=Ae.viewport,z===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let le=E[z];le===void 0&&(le=new pi,le.layers.enable(z),le.viewport=new _t,E[z]=le),le.matrix.fromArray(Fe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Fe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),z===0&&(w.matrix.copy(le.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(le)}}for(let ne=0;ne<x.length;ne++){const ae=_[ne],z=x[ne];ae!==null&&z!==void 0&&z.update(ae,j,c||o)}if(ee&&ee(V,j),j.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ne=null;for(const ae of M)j.detectedPlanes.has(ae)||(ne===null&&(ne=[]),ne.push(ae));if(ne!==null)for(const ae of ne)M.delete(ae),v.delete(ae),i.dispatchEvent({type:"planeremoved",data:ae});for(const ae of j.detectedPlanes)if(!M.has(ae))M.add(ae),v.set(ae,j.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ae});else{const z=v.get(ae);ae.lastChangedTime>z&&(v.set(ae,ae.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ae}))}}m=null}const Z=new ly;Z.setAnimationLoop(oe),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}}function bE(s,e){function t(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function i(y,p){p.color.getRGB(y.fogColor.value,cy(s)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function n(y,p,x,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(y,p):p.isMeshToonMaterial?(r(y,p),u(y,p)):p.isMeshPhongMaterial?(r(y,p),h(y,p)):p.isMeshStandardMaterial?(r(y,p),d(y,p),p.isMeshPhysicalMaterial&&f(y,p,M)):p.isMeshMatcapMaterial?(r(y,p),m(y,p)):p.isMeshDepthMaterial?r(y,p):p.isMeshDistanceMaterial?(r(y,p),g(y,p)):p.isMeshNormalMaterial?r(y,p):p.isLineBasicMaterial?(o(y,p),p.isLineDashedMaterial&&a(y,p)):p.isPointsMaterial?l(y,p,x,_):p.isSpriteMaterial?c(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,t(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,t(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,t(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===Ri&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,t(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===Ri&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,t(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,t(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(y.envMap.value=x,y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap){y.lightMap.value=p.lightMap;const _=s.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,y.lightMapTransform)}p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,y.aoMapTransform))}function o(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,t(p.map,y.mapTransform))}function a(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function l(y,p,x,_){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*x,y.scale.value=_*.5,p.map&&(y.map.value=p.map,t(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function c(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,t(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function h(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function u(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function d(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,y.roughnessMapTransform)),e.get(p).envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function f(y,p,x){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ri&&y.clearcoatNormalScale.value.negate())),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=x.texture,y.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,y.specularIntensityMapTransform))}function m(y,p){p.matcap&&(y.matcap.value=p.matcap)}function g(y,p){const x=e.get(p).light;y.referencePosition.value.setFromMatrixPosition(x.matrixWorld),y.nearDistance.value=x.shadow.camera.near,y.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function wE(s,e,t,i){let n={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function c(x,_){let M=n[x.id];M===void 0&&(m(x),M=h(x),n[x.id]=M,x.addEventListener("dispose",y));const v=_.program;i.updateUBOMapping(x,v);const b=e.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function h(x){const _=u();x.__bindingPointIndex=_;const M=s.createBuffer(),v=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=n[x.id],M=x.uniforms,v=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,S=M.length;b<S;b++){const E=M[b];if(f(E,b,v)===!0){const w=E.__offset,T=Array.isArray(E.value)?E.value:[E.value];let F=0;for(let L=0;L<T.length;L++){const C=T[L],U=g(C);typeof C=="number"?(E.__data[0]=C,s.bufferSubData(s.UNIFORM_BUFFER,w+F,E.__data)):C.isMatrix3?(E.__data[0]=C.elements[0],E.__data[1]=C.elements[1],E.__data[2]=C.elements[2],E.__data[3]=C.elements[0],E.__data[4]=C.elements[3],E.__data[5]=C.elements[4],E.__data[6]=C.elements[5],E.__data[7]=C.elements[0],E.__data[8]=C.elements[6],E.__data[9]=C.elements[7],E.__data[10]=C.elements[8],E.__data[11]=C.elements[0]):(C.toArray(E.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,E.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,M){const v=x.value;if(M[_]===void 0){if(typeof v=="number")M[_]=v;else{const b=Array.isArray(v)?v:[v],S=[];for(let E=0;E<b.length;E++)S.push(b[E].clone());M[_]=S}return!0}else if(typeof v=="number"){if(M[_]!==v)return M[_]=v,!0}else{const b=Array.isArray(M[_])?M[_]:[M[_]],S=Array.isArray(v)?v:[v];for(let E=0;E<b.length;E++){const w=b[E];if(w.equals(S[E])===!1)return w.copy(S[E]),!0}}return!1}function m(x){const _=x.uniforms;let M=0;const v=16;let b=0;for(let S=0,E=_.length;S<E;S++){const w=_[S],T={boundary:0,storage:0},F=Array.isArray(w.value)?w.value:[w.value];for(let L=0,C=F.length;L<C;L++){const U=F[L],N=g(U);T.boundary+=N.boundary,T.storage+=N.storage}if(w.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,S>0){b=M%v;const L=v-b;b!==0&&L-T.boundary<0&&(M+=v-b,w.__offset=M)}M+=T.storage}return b=M%v,b>0&&(M+=v-b),x.__size=M,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function y(x){const _=x.target;_.removeEventListener("dispose",y);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function p(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}function SE(){const s=Qa("canvas");return s.style.display="block",s}class sf{constructor(e={}){const{canvas:t=SE(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=null,m=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=ds,this.toneMappingExposure=1;const p=this;let x=!1,_=0,M=0,v=null,b=-1,S=null;const E=new _t,w=new _t;let T=null,F=t.width,L=t.height,C=1,U=null,N=null;const W=new _t(0,0,F,L),k=new _t(0,0,F,L);let G=!1;const X=new tf;let ee=!1,oe=!1,Z=null;const V=new ht,j=new I,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return v===null?C:1}let z=i;function Fe(R,H){for(let Y=0;Y<R.length;Y++){const O=R[Y],Q=t.getContext(O,H);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vv}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",at,!1),z===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),z=Fe(H,R),z===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ce,le,Ae,nt,xe,We,Ht,Yt,Gt,Bt,st,St,wi,P,A,q,ie,se,ce,Re,fe,J,ge,Me;function Se(){Ce=new UT(z),le=new ET(z,Ce,e),Ce.init(le),J=new _E(z,Ce,le),Ae=new gE(z,Ce,le),nt=new zT(z),xe=new iE,We=new yE(z,Ce,Ae,xe,le,J,nt),Ht=new LT(p),Yt=new FT(p),Gt=new Ww(z,le),ge=new TT(z,Ce,Gt,le),Bt=new NT(z,Gt,nt,ge),st=new HT(z,Bt,Gt,nt),ce=new VT(z,le,We),q=new RT(xe),St=new tE(p,Ht,Yt,Ce,le,ge,q),wi=new bE(p,xe),P=new sE,A=new hE(Ce,le),se=new ST(p,Ht,Yt,Ae,st,d,l),ie=new mE(p,st,le),Me=new wE(z,nt,le,Ae),Re=new AT(z,Ce,nt,le),fe=new BT(z,Ce,nt,le),nt.programs=St.programs,p.capabilities=le,p.extensions=Ce,p.properties=xe,p.renderLists=P,p.shadowMap=ie,p.state=Ae,p.info=nt}Se();const de=new ME(p,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(R){R!==void 0&&(C=R,this.setSize(F,L,!1))},this.getSize=function(R){return R.set(F,L)},this.setSize=function(R,H,Y=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,L=H,t.width=Math.floor(R*C),t.height=Math.floor(H*C),Y===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(F*C,L*C).floor()},this.setDrawingBufferSize=function(R,H,Y){F=R,L=H,C=Y,t.width=Math.floor(R*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,H,Y,O){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,H,Y,O),Ae.viewport(E.copy(W).multiplyScalar(C).floor())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,H,Y,O){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,H,Y,O),Ae.scissor(w.copy(k).multiplyScalar(C).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(R){Ae.setScissorTest(G=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(R=!0,H=!0,Y=!0){let O=0;R&&(O|=z.COLOR_BUFFER_BIT),H&&(O|=z.DEPTH_BUFFER_BIT),Y&&(O|=z.STENCIL_BUFFER_BIT),z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",at,!1),P.dispose(),A.dispose(),xe.dispose(),Ht.dispose(),Yt.dispose(),st.dispose(),ge.dispose(),Me.dispose(),St.dispose(),de.dispose(),de.removeEventListener("sessionstart",pe),de.removeEventListener("sessionend",ut),Z&&(Z.dispose(),Z=null),dt.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function $e(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=nt.autoReset,H=ie.enabled,Y=ie.autoUpdate,O=ie.needsUpdate,Q=ie.type;Se(),nt.autoReset=R,ie.enabled=H,ie.autoUpdate=Y,ie.needsUpdate=O,ie.type=Q}function at(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Rt(R){const H=R.target;H.removeEventListener("dispose",Rt),B(H)}function B(R){$(R),xe.remove(R)}function $(R){const H=xe.get(R).programs;H!==void 0&&(H.forEach(function(Y){St.releaseProgram(Y)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Y,O,Q,be){H===null&&(H=ne);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,Pe=h_(R,H,Y,O,Q);Ae.setMaterial(O,Te);let ke=Y.index,He=1;O.wireframe===!0&&(ke=Bt.getWireframeAttribute(Y),He=2);const Ge=Y.drawRange,Xe=Y.attributes.position;let lt=Ge.start*He,hi=(Ge.start+Ge.count)*He;be!==null&&(lt=Math.max(lt,be.start*He),hi=Math.min(hi,(be.start+be.count)*He)),ke!==null?(lt=Math.max(lt,0),hi=Math.min(hi,ke.count)):Xe!=null&&(lt=Math.max(lt,0),hi=Math.min(hi,Xe.count));const sn=hi-lt;if(sn<0||sn===1/0)return;ge.setup(Q,O,Pe,Y,ke);let qs,It=Re;if(ke!==null&&(qs=Gt.get(ke),It=fe,It.setIndex(qs)),Q.isMesh)O.wireframe===!0?(Ae.setLineWidth(O.wireframeLinewidth*ae()),It.setMode(z.LINES)):It.setMode(z.TRIANGLES);else if(Q.isLine){let Ye=O.linewidth;Ye===void 0&&(Ye=1),Ae.setLineWidth(Ye*ae()),Q.isLineSegments?It.setMode(z.LINES):Q.isLineLoop?It.setMode(z.LINE_LOOP):It.setMode(z.LINE_STRIP)}else Q.isPoints?It.setMode(z.POINTS):Q.isSprite&&It.setMode(z.TRIANGLES);if(Q.isInstancedMesh)It.renderInstances(lt,sn,Q.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ph=Math.min(Y.instanceCount,Ye);It.renderInstances(lt,sn,ph)}else It.render(lt,sn)},this.compile=function(R,H){function Y(O,Q,be){O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=Ri,O.needsUpdate=!0,ol(O,Q,be),O.side=xn,O.needsUpdate=!0,ol(O,Q,be),O.side=En):ol(O,Q,be)}m=A.get(R),m.init(),y.push(m),R.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(p.useLegacyLights),R.traverse(function(O){const Q=O.material;if(Q)if(Array.isArray(Q))for(let be=0;be<Q.length;be++){const Te=Q[be];Y(Te,R,O)}else Y(Q,R,O)}),y.pop(),m=null};let te=null;function he(R){te&&te(R)}function pe(){dt.stop()}function ut(){dt.start()}const dt=new ly;dt.setAnimationLoop(he),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(R){te=R,de.setAnimationLoop(R),R===null?dt.stop():dt.start()},de.addEventListener("sessionstart",pe),de.addEventListener("sessionend",ut),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,H,v),m=A.get(R,y.length),m.init(),y.push(m),V.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(V),oe=this.localClippingEnabled,ee=q.init(this.clippingPlanes,oe),f=P.get(R,g.length),f.init(),g.push(f),ii(R,H,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(U,N),ee===!0&&q.beginShadows();const Y=m.state.shadowsArray;if(ie.render(Y,R,H),ee===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(f,R),m.setupLights(p.useLegacyLights),H.isArrayCamera){const O=H.cameras;for(let Q=0,be=O.length;Q<be;Q++){const Te=O[Q];ys(f,R,Te,Te.viewport)}}else ys(f,R,H);v!==null&&(We.updateMultisampleRenderTarget(v),We.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(p,R,H),ge.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function ii(R,H,Y,O){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){O&&j.setFromMatrixPosition(R.matrixWorld).applyMatrix4(V);const Te=st.update(R),Pe=R.material;Pe.visible&&f.push(R,Te,Pe,Y,j.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==nt.render.frame&&(R.skeleton.update(),R.skeleton.frame=nt.render.frame);const Te=st.update(R),Pe=R.material;if(O&&(Te.boundingSphere===null&&Te.computeBoundingSphere(),j.copy(Te.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(V)),Array.isArray(Pe)){const ke=Te.groups;for(let He=0,Ge=ke.length;He<Ge;He++){const Xe=ke[He],lt=Pe[Xe.materialIndex];lt&&lt.visible&&f.push(R,Te,lt,Y,j.z,Xe)}}else Pe.visible&&f.push(R,Te,Pe,Y,j.z,null)}}const be=R.children;for(let Te=0,Pe=be.length;Te<Pe;Te++)ii(be[Te],H,Y,O)}function ys(R,H,Y,O){const Q=R.opaque,be=R.transmissive,Te=R.transparent;m.setupLightsView(Y),ee===!0&&q.setGlobalState(p.clippingPlanes,Y),be.length>0&&Ct(Q,be,H,Y),O&&Ae.viewport(E.copy(O)),Q.length>0&&Gi(Q,H,Y),be.length>0&&Gi(be,H,Y),Te.length>0&&Gi(Te,H,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ct(R,H,Y,O){if(Z===null){const Pe=le.isWebGL2;Z=new ms(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Ja:Er,minFilter:Za,samples:Pe&&a===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const be=p.toneMapping;p.toneMapping=ds,Gi(R,Y,O),We.updateMultisampleRenderTarget(Z),We.updateRenderTargetMipmap(Z);let Te=!1;for(let Pe=0,ke=H.length;Pe<ke;Pe++){const He=H[Pe],Ge=He.object,Xe=He.geometry,lt=He.material,hi=He.group;if(lt.side===En&&Ge.layers.test(O.layers)){const sn=lt.side;lt.side=Ri,lt.needsUpdate=!0,wn(Ge,Y,O,Xe,lt,hi),lt.side=sn,lt.needsUpdate=!0,Te=!0}}Te===!0&&(We.updateMultisampleRenderTarget(Z),We.updateRenderTargetMipmap(Z)),p.setRenderTarget(Q),p.toneMapping=be}function Gi(R,H,Y){const O=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,be=R.length;Q<be;Q++){const Te=R[Q],Pe=Te.object,ke=Te.geometry,He=O===null?Te.material:O,Ge=Te.group;Pe.layers.test(Y.layers)&&wn(Pe,H,Y,ke,He,Ge)}}function wn(R,H,Y,O,Q,be){R.onBeforeRender(p,H,Y,O,Q,be),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(p,H,Y,O,R,be),Q.transparent===!0&&Q.side===En&&Q.forceSinglePass===!1?(Q.side=Ri,Q.needsUpdate=!0,p.renderBufferDirect(Y,H,O,Q,R,be),Q.side=xn,Q.needsUpdate=!0,p.renderBufferDirect(Y,H,O,Q,R,be),Q.side=En):p.renderBufferDirect(Y,H,O,Q,R,be),R.onAfterRender(p,H,Y,O,Q,be)}function ol(R,H,Y){H.isScene!==!0&&(H=ne);const O=xe.get(R),Q=m.state.lights,be=m.state.shadowsArray,Te=Q.state.version,Pe=St.getParameters(R,Q.state,be,H,Y),ke=St.getProgramCacheKey(Pe);let He=O.programs;O.environment=R.isMeshStandardMaterial?H.environment:null,O.fog=H.fog,O.envMap=(R.isMeshStandardMaterial?Yt:Ht).get(R.envMap||O.environment),He===void 0&&(R.addEventListener("dispose",Rt),He=new Map,O.programs=He);let Ge=He.get(ke);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===Te)return Cf(R,Pe),Ge}else Pe.uniforms=St.getUniforms(R),R.onBuild(Y,Pe,p),R.onBeforeCompile(Pe,p),Ge=St.acquireProgram(Pe,ke),He.set(ke,Ge),O.uniforms=Pe.uniforms;const Xe=O.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=q.uniform),Cf(R,Pe),O.needsLights=d_(R),O.lightsStateVersion=Te,O.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const lt=Ge.getUniforms(),hi=Pc.seqWithValue(lt.seq,Xe);return O.currentProgram=Ge,O.uniformsList=hi,Ge}function Cf(R,H){const Y=xe.get(R);Y.outputColorSpace=H.outputColorSpace,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function h_(R,H,Y,O,Q){H.isScene!==!0&&(H=ne),We.resetTextureUnits();const be=H.fog,Te=O.isMeshStandardMaterial?H.environment:null,Pe=v===null?p.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Un,ke=(O.isMeshStandardMaterial?Yt:Ht).get(O.envMap||Te),He=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!O.normalMap&&!!Y.attributes.tangent,Xe=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,hi=!!Y.morphAttributes.color,sn=O.toneMapped?p.toneMapping:ds,qs=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,It=qs!==void 0?qs.length:0,Ye=xe.get(O),ph=m.state.lights;if(ee===!0&&(oe===!0||R!==S)){const Pi=R===S&&O.id===b;q.setState(O,R,Pi)}let Wt=!1;O.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ph.state.version||Ye.outputColorSpace!==Pe||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==ke||O.fog===!0&&Ye.fog!==be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==q.numPlanes||Ye.numIntersection!==q.numIntersection)||Ye.vertexAlphas!==He||Ye.vertexTangents!==Ge||Ye.morphTargets!==Xe||Ye.morphNormals!==lt||Ye.morphColors!==hi||Ye.toneMapping!==sn||le.isWebGL2===!0&&Ye.morphTargetsCount!==It)&&(Wt=!0):(Wt=!0,Ye.__version=O.version);let $s=Ye.currentProgram;Wt===!0&&($s=ol(O,H,Q));let Pf=!1,ra=!1,mh=!1;const ui=$s.getUniforms(),Ys=Ye.uniforms;if(Ae.useProgram($s.program)&&(Pf=!0,ra=!0,mh=!0),O.id!==b&&(b=O.id,ra=!0),Pf||S!==R){if(ui.setValue(z,"projectionMatrix",R.projectionMatrix),le.logarithmicDepthBuffer&&ui.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),S!==R&&(S=R,ra=!0,mh=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Pi=ui.map.cameraPosition;Pi!==void 0&&Pi.setValue(z,j.setFromMatrixPosition(R.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ui.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Q.isSkinnedMesh)&&ui.setValue(z,"viewMatrix",R.matrixWorldInverse)}if(Q.isSkinnedMesh){ui.setOptional(z,Q,"bindMatrix"),ui.setOptional(z,Q,"bindMatrixInverse");const Pi=Q.skeleton;Pi&&(le.floatVertexTextures?(Pi.boneTexture===null&&Pi.computeBoneTexture(),ui.setValue(z,"boneTexture",Pi.boneTexture,We),ui.setValue(z,"boneTextureSize",Pi.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gh=Y.morphAttributes;if((gh.position!==void 0||gh.normal!==void 0||gh.color!==void 0&&le.isWebGL2===!0)&&ce.update(Q,Y,$s),(ra||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,ui.setValue(z,"receiveShadow",Q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ys.envMap.value=ke,Ys.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ra&&(ui.setValue(z,"toneMappingExposure",p.toneMappingExposure),Ye.needsLights&&u_(Ys,mh),be&&O.fog===!0&&wi.refreshFogUniforms(Ys,be),wi.refreshMaterialUniforms(Ys,O,C,L,Z),Pc.upload(z,Ye.uniformsList,Ys,We)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Pc.upload(z,Ye.uniformsList,Ys,We),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ui.setValue(z,"center",Q.center),ui.setValue(z,"modelViewMatrix",Q.modelViewMatrix),ui.setValue(z,"normalMatrix",Q.normalMatrix),ui.setValue(z,"modelMatrix",Q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Pi=O.uniformsGroups;for(let yh=0,f_=Pi.length;yh<f_;yh++)if(le.isWebGL2){const Lf=Pi[yh];Me.update(Lf,$s),Me.bind(Lf,$s)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $s}function u_(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function d_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,H,Y){xe.get(R.texture).__webglTexture=H,xe.get(R.depthTexture).__webglTexture=Y;const O=xe.get(R);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){const Y=xe.get(R);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Y=0){v=R,_=H,M=Y;let O=!0,Q=null,be=!1,Te=!1;if(R){const ke=xe.get(R);ke.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(z.FRAMEBUFFER,null),O=!1):ke.__webglFramebuffer===void 0?We.setupRenderTarget(R):ke.__hasExternalTextures&&We.rebindTextures(R,xe.get(R.texture).__webglTexture,xe.get(R.depthTexture).__webglTexture);const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ge=xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Ge[H],be=!0):le.isWebGL2&&R.samples>0&&We.useMultisampledRTT(R)===!1?Q=xe.get(R).__webglMultisampledFramebuffer:Q=Ge,E.copy(R.viewport),w.copy(R.scissor),T=R.scissorTest}else E.copy(W).multiplyScalar(C).floor(),w.copy(k).multiplyScalar(C).floor(),T=G;if(Ae.bindFramebuffer(z.FRAMEBUFFER,Q)&&le.drawBuffers&&O&&Ae.drawBuffers(R,Q),Ae.viewport(E),Ae.scissor(w),Ae.setScissorTest(T),be){const ke=xe.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,Y)}else if(Te){const ke=xe.get(R.texture),He=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,Y||0,He)}b=-1},this.readRenderTargetPixels=function(R,H,Y,O,Q,be,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){Ae.bindFramebuffer(z.FRAMEBUFFER,Pe);try{const ke=R.texture,He=ke.format,Ge=ke.type;if(He!==Ai&&J.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ge===Ja&&(Ce.has("EXT_color_buffer_half_float")||le.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ge!==Er&&J.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===_r&&(le.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-O&&Y>=0&&Y<=R.height-Q&&z.readPixels(H,Y,O,Q,J.convert(He),J.convert(Ge),be)}finally{const ke=v!==null?xe.get(v).__webglFramebuffer:null;Ae.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,H,Y=0){const O=Math.pow(2,-Y),Q=Math.floor(H.image.width*O),be=Math.floor(H.image.height*O);We.setTexture2D(H,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,R.x,R.y,Q,be),Ae.unbindTexture()},this.copyTextureToTexture=function(R,H,Y,O=0){const Q=H.image.width,be=H.image.height,Te=J.convert(Y.format),Pe=J.convert(Y.type);We.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,R.x,R.y,Q,be,Te,Pe,H.image.data):H.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,Te,H.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,O,R.x,R.y,Te,Pe,H.image),O===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(R,H,Y,O,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=R.max.x-R.min.x+1,Te=R.max.y-R.min.y+1,Pe=R.max.z-R.min.z+1,ke=J.convert(O.format),He=J.convert(O.type);let Ge;if(O.isData3DTexture)We.setTexture3D(O,0),Ge=z.TEXTURE_3D;else if(O.isDataArrayTexture)We.setTexture2DArray(O,0),Ge=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Xe=z.getParameter(z.UNPACK_ROW_LENGTH),lt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hi=z.getParameter(z.UNPACK_SKIP_PIXELS),sn=z.getParameter(z.UNPACK_SKIP_ROWS),qs=z.getParameter(z.UNPACK_SKIP_IMAGES),It=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,It.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,It.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(Ge,Q,H.x,H.y,H.z,be,Te,Pe,ke,He,It.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ge,Q,H.x,H.y,H.z,be,Te,Pe,ke,It.data)):z.texSubImage3D(Ge,Q,H.x,H.y,H.z,be,Te,Pe,ke,He,It),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hi),z.pixelStorei(z.UNPACK_SKIP_ROWS,sn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qs),Q===0&&O.generateMipmaps&&z.generateMipmap(Ge),Ae.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?We.setTextureCube(R,0):R.isData3DTexture?We.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?We.setTexture2DArray(R,0):We.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){_=0,M=0,v=null,Ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?wr:X0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?De:Un}}class yy extends ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class TE extends J0{constructor(){super(new hy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AE extends ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new TE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let _y=class extends xt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};const ir=new I,jm=new Ei,EE=new I,nr=new I;class Ua extends _y{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ir,jm,EE),nr.set(0,0,1).applyQuaternion(jm);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ir.x,i),t.positionY.linearRampToValueAtTime(ir.y,i),t.positionZ.linearRampToValueAtTime(ir.z,i),t.orientationX.linearRampToValueAtTime(nr.x,i),t.orientationY.linearRampToValueAtTime(nr.y,i),t.orientationZ.linearRampToValueAtTime(nr.z,i)}else t.setPosition(ir.x,ir.y,ir.z),t.setOrientation(nr.x,nr.y,nr.z)}}class sh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qm(){return(typeof performance>"u"?Date:performance).now()}const sr=new I,$m=new Ei,RE=new I,rr=new I;class xy extends xt{constructor(){super(),this.type="AudioListener",this.context=oy.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new sh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(sr,$m,RE),rr.set(0,0,-1).applyQuaternion($m),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(sr.x,n),t.positionY.linearRampToValueAtTime(sr.y,n),t.positionZ.linearRampToValueAtTime(sr.z,n),t.forwardX.linearRampToValueAtTime(rr.x,n),t.forwardY.linearRampToValueAtTime(rr.y,n),t.forwardZ.linearRampToValueAtTime(rr.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(sr.x,sr.y,sr.z),t.setOrientation(rr.x,rr.y,rr.z,i.x,i.y,i.z)}}class rf extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vy extends Xs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}var Et=(s=>(s[s.BLACK=0]="BLACK",s[s.PORTAL=2236962]="PORTAL",s[s.BLUE=2980095]="BLUE",s[s.FOG=4737096]="FOG",s[s.RAIN=4934475]="RAIN",s[s.RED=9045767]="RED",s[s.MOON=11065767]="MOON",s[s.FIRE=16496449]="FIRE",s[s.WHITE=16777215]="WHITE",s))(Et||{}),Pn;(s=>{class e extends vy{constructor(i={}){super(i),this.setValues(i)}async updateDefaultFragmentShader(i){const n=await Ze.Loader.loadShader("ground/pars.frag"),r=await Ze.Loader.loadShader("ground/main.frag");i.fragmentShader=`${n}
      ${i.fragmentShader.replace("#include <output_fragment>",`
        ${r}`)}`}async updateDefaultVertexShader(i){const n=await Ze.Loader.loadShader("ground/pars.vert"),r=await Ze.Loader.loadShader("ground/main.vert");i.vertexShader=`${n}
      ${i.vertexShader.replace("void main() {",`void main() {
          ${r}`)}`}onBeforeCompile(i){this.updateDefaultFragmentShader(i),this.updateDefaultVertexShader(i),this.needsUpdate=!0}}s.Ground=e,s.DynamicCollider=new Co({color:Et.RED,wireframe:!0,visible:!1,opacity:.33}),s.StaticCollider=new Co({color:Et.RAIN,transparent:!0,depthWrite:!1,visible:!1,opacity:.5}),s.Transparent=new Co({color:Et.BLACK,transparent:!0,depthWrite:!1,visible:!1,opacity:0}),s.HitBox=new Co({transparent:!0,depthWrite:!1,color:Et.RED,visible:!1,opacity:.75})})(Pn||(Pn={}));class CE{constructor(){this.lockChange=this.onLockChange.bind(this),this.lockError=this.onLockError.bind(this),document.addEventListener("pointerlockchange",this.lockChange,!1),document.addEventListener("pointerlockerror",this.lockError,!1)}onLockChange(e){e.stopPropagation(),e.preventDefault(),!this.locked&&K.dispatch("Game::Pause")}onLockError(e){e.stopPropagation(),e.preventDefault(),console.error(e)}requestPointerLock(){document.documentElement.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}dispose(){document.removeEventListener("pointerlockchange",this.lockChange,!1),document.removeEventListener("pointerlockerror",this.lockError,!1)}get locked(){return!!document.pointerLockElement}}const wa=new D;function ji(s,e,t,i,n,r){const o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;wa.copy(e),wa[i]=0,wa.normalize();const c=.5*o/(o+a),h=1-wa.angleTo(s)/l;return Math.sign(wa[t])===1?h*c:a/(o+a)+c+c*(1-h)}class My extends Lx{constructor(e=1,t=1,i=1,n=2,r=.1){if(n=n*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,n,n,n),n===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,l=new D,c=new D(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new D,g=.5/n;for(let y=0,p=0;y<h.length;y+=3,p+=2)switch(a.fromArray(h,y),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[y+0]=c.x*Math.sign(a.x)+l.x*r,h[y+1]=c.y*Math.sign(a.y)+l.y*r,h[y+2]=c.z*Math.sign(a.z)+l.z*r,u[y+0]=l.x,u[y+1]=l.y,u[y+2]=l.z,Math.floor(y/f)){case 0:m.set(1,0,0),d[p+0]=ji(m,l,"z","y",r,i),d[p+1]=1-ji(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-ji(m,l,"z","y",r,i),d[p+1]=1-ji(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-ji(m,l,"x","z",r,e),d[p+1]=ji(m,l,"z","x",r,i);break;case 3:m.set(0,-1,0),d[p+0]=1-ji(m,l,"x","z",r,e),d[p+1]=1-ji(m,l,"z","x",r,i);break;case 4:m.set(0,0,1),d[p+0]=1-ji(m,l,"x","y",r,e),d[p+1]=1-ji(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=ji(m,l,"x","y",r,e),d[p+1]=1-ji(m,l,"y","x",r,t);break}}}function PE(s){const e=new Map,t=new Map,i=s.clone();return by(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const r=n,o=e.get(n),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function by(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)by(s.children[i],e.children[i],t)}class of extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LE{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Eo,endingEnd:Eo};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,r=e._clip.duration,o=r/n,a=n/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case hM:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Kd:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const o=i===cM;if(e===0)return r===-1?n:o&&(r&1)===1?t-n:n;if(i===Bi){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));i:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break i}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Ro,n.endingEnd=Ro):(e?n.endingStart=this.zeroSlopeAtStart?Ro:Eo:n.endingStart=Hc,t?n.endingEnd=this.zeroSlopeAtEnd?Ro:Eo:n.endingEnd=Hc)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}}class rh{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wy extends rh{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}const af="\\[\\]\\.:\\/",IE=new RegExp("["+af+"]","g"),lf="[^"+af+"]",DE="[^"+af.replace("\\.","")+"]",FE=/((?:WC+[\/:])*)/.source.replace("WC",lf),UE=/(WCOD+)?/.source.replace("WCOD",DE),NE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),BE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),zE=new RegExp("^"+FE+UE+NE+BE+"$"),kE=["material","materials","bones","map"];class OE{constructor(e,t,i){const n=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IE,"")}static parseTrackName(e){const t=zE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);kE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=OE;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class VE{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,o;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,o=n;r!==o;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){Ei.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const o=this._workIndex*r;Ei.multiplyQuaternionsFlat(e,o,e,t,e,i),Ei.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,r){const o=1-n;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}}function Ps(s,e,t){return Sy(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function tc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function HE(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Ym(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function Ty(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}class GE extends rh{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eo,endingEnd:Eo}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ro:r=e,a=2*t-i;break;case Hc:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ro:o=e,l=2*i-t;break;case Hc:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,y=g*m,p=-d*y+2*d*g-d*m,x=(1+d)*y+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*y+(1.5+f)*g+.5*m,M=f*y-f*g;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+x*o[c+v]+_*o[l+v]+M*o[u+v];return r}}class WE extends rh{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tc(t,this.TimeBufferType),this.values=tc(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:tc(e.times,Array),values:tc(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new WE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new GE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oc:t=this.InterpolantFactoryMethodDiscrete;break;case Vc:t=this.InterpolantFactoryMethodLinear;break;case eu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oc;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Ps(i,r,o),this.values=Ps(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Sy(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ps(this.times),t=Ps(this.values),i=this.getValueSize(),n=this.getInterpolation()===eu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Ps(e,0,o),this.values=Ps(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Ps(this.times,0),t=Ps(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Vc;class ta extends On{}ta.prototype.ValueTypeName="bool";ta.prototype.ValueBufferType=Array;ta.prototype.DefaultInterpolation=Oc;ta.prototype.InterpolantFactoryMethodLinear=void 0;ta.prototype.InterpolantFactoryMethodSmooth=void 0;class Ay extends On{}Ay.prototype.ValueTypeName="color";class Gc extends On{}Gc.prototype.ValueTypeName="number";class XE extends rh{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ei.slerpFlat(r,0,o,c-a,o,c,l);return r}}class sl extends On{InterpolantFactoryMethodLinear(e){return new XE(this.times,this.values,this.getValueSize(),e)}}sl.prototype.ValueTypeName="quaternion";sl.prototype.DefaultInterpolation=Vc;sl.prototype.InterpolantFactoryMethodSmooth=void 0;class ia extends On{}ia.prototype.ValueTypeName="string";ia.prototype.ValueBufferType=Array;ia.prototype.DefaultInterpolation=Oc;ia.prototype.InterpolantFactoryMethodLinear=void 0;ia.prototype.InterpolantFactoryMethodSmooth=void 0;class Wc extends On{}Wc.prototype.ValueTypeName="vector";class Km{constructor(e,t=-1,i,n=Kd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Lr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(qE(i[o]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(On.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=HE(l);l=Ym(l,1,h),c=Ym(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Gc(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,g){if(f.length!==0){const y=[],p=[];Ty(f,y,p,m),y.length!==0&&g.push(new u(d,y,p))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const y=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];y.push(_.time),p.push(_.morphTarget===g?1:0)}n.push(new Gc(".morphTargetInfluence["+g+"]",y,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Wc,f+".position",d,"pos",n),i(sl,f+".quaternion",d,"rot",n),i(Wc,f+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gc;case"vector":case"vector2":case"vector3":case"vector4":return Wc;case"color":return Ay;case"quaternion":return sl;case"bool":case"boolean":return ta;case"string":return ia}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jE(s.type);if(s.times===void 0){const t=[],i=[];Ty(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const $E=new Float32Array(1);class YE extends Ws{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=n[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;m=new VE(rt.create(i,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new wy(new Float32Array(2),new Float32Array(2),1,$E),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let o=typeof e=="string"?Km.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Kd),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new LE(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?Km.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Zm=new I,ic=new I;class Ey{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Zm.subVectors(e,this.start),ic.subVectors(this.end,this.start);const i=ic.dot(ic);let r=ic.dot(Zm)/i;return t&&(r=ai(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ry=0,KE=1,ZE=2,Jm=2,Eu=1.25,Qm=1,Lc=6*4+4+4,oh=65535,JE=Math.pow(2,-24),Ru=Symbol("SKIP_GENERATION");function QE(s){return s.index?s.index.count:s.attributes.position.count}function na(s){return QE(s)/3}function eR(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function tR(s,e){if(!s.index){const t=s.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=eR(t,i);s.setIndex(new gi(n,1));for(let r=0;r<t;r++)n[r]=r}}function Cy(s){const e=na(s),t=s.drawRange,i=t.start/3,n=(t.start+t.count)/3,r=Math.max(0,i),o=Math.min(e,n)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Py(s){if(!s.groups||!s.groups.length)return Cy(s);const e=[],t=new Set,i=s.drawRange,n=i.start/3,r=(i.start+i.count)/3;for(const a of s.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(n,l)),t.add(Math.min(r,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function iR(s){if(s.groups.length===0)return!1;const e=na(s),t=Py(s).sort((r,o)=>r.offset-o.offset),i=t[t.length-1];i.count=Math.min(e-i.offset,i.count);let n=0;return t.forEach(({count:r})=>n+=r),e!==n}function Mt(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function nR(s){s[0]=s[1]=s[2]=1/0,s[3]=s[4]=s[5]=-1/0}function eg(s){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=s[i+3]-s[i];n>t&&(t=n,e=i)}return e}function tg(s,e){e.set(s)}function ig(s,e,t){let i,n;for(let r=0;r<3;r++){const o=r+3;i=s[r],n=e[r],t[r]=i<n?i:n,i=s[o],n=e[o],t[o]=i>n?i:n}}function nc(s,e,t){for(let i=0;i<3;i++){const n=e[s+2*i],r=e[s+2*i+1],o=n-r,a=n+r;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function Sa(s){const e=s[3]-s[0],t=s[4]-s[1],i=s[5]-s[2];return 2*(e*t+t*i+i*e)}function Cu(s,e,t,i,n=null){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,m=-1/0,g=-1/0,y=-1/0;const p=n!==null;for(let x=e*6,_=(e+t)*6;x<_;x+=6){const M=s[x+0],v=s[x+1],b=M-v,S=M+v;b<r&&(r=b),S>l&&(l=S),p&&M<u&&(u=M),p&&M>m&&(m=M);const E=s[x+2],w=s[x+3],T=E-w,F=E+w;T<o&&(o=T),F>c&&(c=F),p&&E<d&&(d=E),p&&E>g&&(g=E);const L=s[x+4],C=s[x+5],U=L-C,N=L+C;U<a&&(a=U),N>h&&(h=N),p&&L<f&&(f=L),p&&L>y&&(y=L)}i[0]=r,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,p&&(n[0]=u,n[1]=d,n[2]=f,n[3]=m,n[4]=g,n[5]=y)}function sR(s,e,t,i){let n=1/0,r=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let h=e*6,u=(e+t)*6;h<u;h+=6){const d=s[h+0];d<n&&(n=d),d>a&&(a=d);const f=s[h+2];f<r&&(r=f),f>l&&(l=f);const m=s[h+4];m<o&&(o=m),m>c&&(c=m)}i[0]=n,i[1]=r,i[2]=o,i[3]=a,i[4]=l,i[5]=c}function rR(s,e){nR(e);const t=s.attributes.position,i=s.index?s.index.array:null,n=na(s),r=new Float32Array(n*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const h=["getX","getY","getZ"];for(let u=0;u<n;u++){const d=u*3,f=u*6;let m=d+0,g=d+1,y=d+2;i&&(m=i[m],g=i[g],y=i[y]),o||(m=m*c+l,g=g*c+l,y=y*c+l);for(let p=0;p<3;p++){let x,_,M;o?(x=t[h[p]](m),_=t[h[p]](g),M=t[h[p]](y)):(x=a[m+p],_=a[g+p],M=a[y+p]);let v=x;_<v&&(v=_),M<v&&(v=M);let b=x;_>b&&(b=_),M>b&&(b=M);const S=(b-v)/2,E=p*2;r[f+E+0]=v+S,r[f+E+1]=S+(Math.abs(v)+S)*JE,v<e[p]&&(e[p]=v),b>e[p+3]&&(e[p+3]=b)}}return r}const ss=32,oR=(s,e)=>s.candidate-e.candidate,Ls=new Array(ss).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),sc=new Float32Array(6);function aR(s,e,t,i,n,r){let o=-1,a=0;if(r===Ry)o=eg(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===KE)o=eg(s),o!==-1&&(a=lR(t,i,n,o));else if(r===ZE){const l=Sa(s);let c=Eu*n;const h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){const f=e[d],y=(e[d+3]-f)/ss;if(n<ss/4){const p=[...Ls];p.length=n;let x=0;for(let M=h;M<u;M+=6,x++){const v=p[x];v.candidate=t[M+2*d],v.count=0;const{bounds:b,leftCacheBounds:S,rightCacheBounds:E}=v;for(let w=0;w<3;w++)E[w]=1/0,E[w+3]=-1/0,S[w]=1/0,S[w+3]=-1/0,b[w]=1/0,b[w+3]=-1/0;nc(M,t,b)}p.sort(oR);let _=n;for(let M=0;M<_;M++){const v=p[M];for(;M+1<_&&p[M+1].candidate===v.candidate;)p.splice(M+1,1),_--}for(let M=h;M<u;M+=6){const v=t[M+2*d];for(let b=0;b<_;b++){const S=p[b];v>=S.candidate?nc(M,t,S.rightCacheBounds):(nc(M,t,S.leftCacheBounds),S.count++)}}for(let M=0;M<_;M++){const v=p[M],b=v.count,S=n-v.count,E=v.leftCacheBounds,w=v.rightCacheBounds;let T=0;b!==0&&(T=Sa(E)/l);let F=0;S!==0&&(F=Sa(w)/l);const L=Qm+Eu*(T*b+F*S);L<c&&(o=d,c=L,a=v.candidate)}}else{for(let _=0;_<ss;_++){const M=Ls[_];M.count=0,M.candidate=f+y+_*y;const v=M.bounds;for(let b=0;b<3;b++)v[b]=1/0,v[b+3]=-1/0}for(let _=h;_<u;_+=6){let b=~~((t[_+2*d]-f)/y);b>=ss&&(b=ss-1);const S=Ls[b];S.count++,nc(_,t,S.bounds)}const p=Ls[ss-1];tg(p.bounds,p.rightCacheBounds);for(let _=ss-2;_>=0;_--){const M=Ls[_],v=Ls[_+1];ig(M.bounds,v.rightCacheBounds,M.rightCacheBounds)}let x=0;for(let _=0;_<ss-1;_++){const M=Ls[_],v=M.count,b=M.bounds,E=Ls[_+1].rightCacheBounds;v!==0&&(x===0?tg(b,sc):ig(b,sc,sc)),x+=v;let w=0,T=0;x!==0&&(w=Sa(sc)/l);const F=n-x;F!==0&&(T=Sa(E)/l);const L=Qm+Eu*(w*x+T*F);L<c&&(o=d,c=L,a=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function lR(s,e,t,i){let n=0;for(let r=e,o=e+t;r<o;r++)n+=s[r*6+i*2];return n/t}class rc{constructor(){}}function cR(s,e,t,i,n,r){let o=i,a=i+n-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let h=0;h<3;h++){let u=e[o*3+h];e[o*3+h]=e[a*3+h],e[a*3+h]=u}for(let h=0;h<6;h++){let u=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=u}o++,a--}else return o}}function hR(s,e,t,i,n,r){let o=i,a=i+n-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let h=s[o];s[o]=s[a],s[a]=h;for(let u=0;u<6;u++){let d=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=d}o++,a--}else return o}}function uR(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,i=t>2**16,n=i?4:2,r=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function dR(s,e){const t=s.geometry,i=t.index?t.index.array:null,n=e.maxDepth,r=e.verbose,o=e.maxLeafTris,a=e.strategy,l=e.onProgress,c=na(t),h=s._indirectBuffer;let u=!1;const d=new Float32Array(6),f=new Float32Array(6),m=rR(t,d),g=e.indirect?hR:cR,y=[],p=e.indirect?Cy(t):Py(t);if(p.length===1){const M=p[0],v=new rc;v.boundingData=d,sR(m,M.offset,M.count,f),_(v,M.offset,M.count,f),y.push(v)}else for(let M of p){const v=new rc;v.boundingData=new Float32Array(6),Cu(m,M.offset,M.count,v.boundingData,f),_(v,M.offset,M.count,f),y.push(v)}return y;function x(M){l&&l(M/c)}function _(M,v,b,S=null,E=0){if(!u&&E>=n&&(u=!0,r&&(console.warn(`MeshBVH: Max depth of ${n} reached when generating BVH. Consider increasing maxDepth.`),console.warn(t))),b<=o||E>=n)return x(v+b),M.offset=v,M.count=b,M;const w=aR(M.boundingData,S,m,v,b,a);if(w.axis===-1)return x(v+b),M.offset=v,M.count=b,M;const T=g(h,i,m,v,b,w);if(T===v||T===v+b)x(v+b),M.offset=v,M.count=b;else{M.splitAxis=w.axis;const F=new rc,L=v,C=T-v;M.left=F,F.boundingData=new Float32Array(6),Cu(m,L,C,F.boundingData,f),_(F,L,C,f,E+1);const U=new rc,N=T,W=b-C;M.right=U,U.boundingData=new Float32Array(6),Cu(m,N,W,U.boundingData,f),_(U,N,W,f,E+1)}return M}}function fR(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=uR(t,e.useSharedArrayBuffer),iR(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||tR(t,e);const i=dR(s,e);let n,r,o;const a=[],l=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<i.length;u++){const d=i[u];let f=c(d);const m=new l(Lc*f);n=new Float32Array(m),r=new Uint32Array(m),o=new Uint16Array(m),h(0,d),a.push(m)}s._roots=a;return;function c(u){return u.count?1:1+c(u.left)+c(u.right)}function h(u,d){const f=u/4,m=u/2,g=!!d.count,y=d.boundingData;for(let p=0;p<6;p++)n[f+p]=y[p];if(g){const p=d.offset,x=d.count;return r[f+6]=p,o[m+14]=x,o[m+15]=oh,u+Lc}else{const p=d.left,x=d.right,_=d.splitAxis;let M;if(M=h(u+Lc,p),M/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return r[f+6]=M/4,M=h(M,x),r[f+7]=_,M}}}class gs{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let r=0,o=e.length;r<o;r++){const l=e[r][t];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let r=0,o=t.length;r<o;r++){const a=t[r],l=e.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}gs.prototype.setFromBox=function(){const s=new D;return function(t,i){const n=i.min,r=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){s.x=n.x*l+r.x*(1-l),s.y=n.y*c+r.y*(1-c),s.z=n.z*h+r.z*(1-h);const u=t.dot(s);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}}();const pR=function(){const s=new D,e=new D,t=new D;return function(n,r,o){const a=n.start,l=s,c=r.start,h=e;t.subVectors(a,c),s.subVectors(n.end,n.start),e.subVectors(r.end,r.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),m=t.dot(l),y=l.dot(l)*f-d*d;let p,x;y!==0?p=(u*d-m*f)/y:p=0,x=(u+p*d)/f,o.x=p,o.y=x}}(),cf=function(){const s=new ct,e=new D,t=new D;return function(n,r,o,a){pR(n,r,s);let l=s.x,c=s.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),n.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?n.at(0,o):n.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=r.start:u=r.end;const d=e,f=t;if(n.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(f);return}}}}(),mR=function(){const s=new D,e=new D,t=new Is,i=new us;return function(r,o){const{radius:a,center:l}=r,{a:c,b:h,c:u}=o;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const p=g.projectPoint(l,e);if(o.containsPoint(p))return!0}return!1}}(),gR=1e-15;function Pu(s){return Math.abs(s)<gR}class Mn extends Cn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new gs),this.points=[this.a,this.b,this.c],this.sphere=new zn,this.plane=new Is,this.needsUpdate=!0}intersectsSphere(e){return mR(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);const c=r[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,n);const u=r[2],d=o[2];u.subVectors(t,i),d.setFromPoints(u,n);const f=r[3],m=o[3];f.subVectors(i,e),m.setFromPoints(f,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Mn.prototype.closestPointToSegment=function(){const s=new D,e=new D,t=new us;return function(n,r=null,o=null){const{start:a,end:l}=n,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),cf(t,n,s,e),h=s.distanceToSquared(e),h<u&&(u=h,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(a,s),h=a.distanceToSquared(s),h<u&&(u=h,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(l,s),h=l.distanceToSquared(s),h<u&&(u=h,r&&r.copy(s),o&&o.copy(l)),Math.sqrt(u)}}();Mn.prototype.intersectsTriangle=function(){const s=new Mn,e=new Array(3),t=new Array(3),i=new gs,n=new gs,r=new D,o=new D,a=new D,l=new D,c=new D,h=new us,u=new us,d=new us,f=new D;function m(g,y,p){const x=g.points;let _=0,M=-1;for(let v=0;v<3;v++){const{start:b,end:S}=h;b.copy(x[v]),S.copy(x[(v+1)%3]),h.delta(o);const E=Pu(y.distanceToPoint(b));if(Pu(y.normal.dot(o))&&E){p.copy(h),_=2;break}const w=y.intersectLine(h,f);if(!w&&E&&f.copy(b),(w||E)&&!Pu(f.distanceTo(S))){if(_<=1)(_===1?p.start:p.end).copy(f),E&&(M=_);else if(_>=2){(M===1?p.start:p.end).copy(f),_=2;break}if(_++,_===2&&M===-1)break}}return _}return function(y,p=null,x=!1){this.needsUpdate&&this.update(),y.isExtendedTriangle?y.needsUpdate&&y.update():(s.copy(y),s.update(),y=s);const _=this.plane,M=y.plane;if(Math.abs(_.normal.dot(M.normal))>1-1e-10){const v=this.satBounds,b=this.satAxes;t[0]=y.a,t[1]=y.b,t[2]=y.c;for(let w=0;w<4;w++){const T=v[w],F=b[w];if(i.setFromPoints(F,t),T.isSeparated(i))return!1}const S=y.satBounds,E=y.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let w=0;w<4;w++){const T=S[w],F=E[w];if(i.setFromPoints(F,e),T.isSeparated(i))return!1}for(let w=0;w<4;w++){const T=b[w];for(let F=0;F<4;F++){const L=E[F];if(r.crossVectors(T,L),i.setFromPoints(r,e),n.setFromPoints(r,t),i.isSeparated(n))return!1}}return p&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const v=m(this,M,u);if(v===1&&y.containsPoint(u.end))return p&&(p.start.copy(u.end),p.end.copy(u.end)),!0;if(v!==2)return!1;const b=m(y,_,d);if(b===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(b!==2)return!1;if(u.delta(a),d.delta(l),a.dot(l)<0){let C=d.start;d.start=d.end,d.end=C}const S=u.start.dot(a),E=u.end.dot(a),w=d.start.dot(a),T=d.end.dot(a),F=E<w,L=S<T;return S!==T&&w!==E&&F===L?!1:(p&&(c.subVectors(u.start,d.start),c.dot(a)>0?p.start.copy(u.start):p.start.copy(d.start),c.subVectors(u.end,d.end),c.dot(a)<0?p.end.copy(u.end):p.end.copy(d.end)),!0)}}}();Mn.prototype.distanceToPoint=function(){const s=new D;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Mn.prototype.distanceToTriangle=function(){const s=new D,e=new D,t=["a","b","c"],i=new us,n=new us;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],m=o[f];this.closestPointToPoint(m,s),d=m.distanceToSquared(s),d<h&&(h=d,a&&a.copy(s),l&&l.copy(m));const g=this[f];o.closestPointToPoint(g,s),d=g.distanceToSquared(s),d<h&&(h=d,a&&a.copy(g),l&&l.copy(s))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];i.set(this[d],this[f]);for(let m=0;m<3;m++){const g=t[m],y=t[(m+1)%3];n.set(o[g],o[y]),cf(i,n,s,e);const p=s.distanceToSquared(e);p<h&&(h=p,a&&a.copy(s),l&&l.copy(e))}}return Math.sqrt(h)}}();class bi{constructor(e,t,i){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Ee,this.invMatrix=new Ee,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new gs),this.alignedSatBounds=new Array(3).fill().map(()=>new gs),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}bi.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=n[d];f.x=c?i.x:t.x,f.y=h?i.y:t.y,f.z=u?i.z:t.z,f.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,a=n[0];for(let c=0;c<3;c++){const h=o[c],u=r[c],d=1<<c,f=n[d];h.subVectors(a,f),u.setFromPoints(h,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();bi.prototype.intersectsBox=function(){const s=new gs;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=i.x,s.max=n.x,a[0].isSeparated(s)||(s.min=i.y,s.max=n.y,a[1].isSeparated(s))||(s.min=i.z,s.max=n.z,a[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const c=o[l],h=r[l];if(s.setFromBox(c,t),h.isSeparated(s))return!1}return!0}}();bi.prototype.intersectsTriangle=function(){const s=new Mn,e=new Array(3),t=new gs,i=new gs,n=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],m=l[d];if(t.setFromPoints(m,e),f.isSeparated(t))return!1}const c=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],m=h[d];if(t.setFromPoints(m,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let m=0;m<4;m++){const g=h[m];if(n.crossVectors(f,g),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}();bi.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();bi.prototype.distanceToPoint=function(){const s=new D;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();bi.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new us),t=new Array(12).fill().map(()=>new us),i=new D,n=new D;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(n),this.closestPointToPoint(n,i),o.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const h=a*a,u=o.min,d=o.max,f=this.points;let m=1/0;for(let y=0;y<8;y++){const p=f[y];n.copy(p).clamp(u,d);const x=p.distanceToSquared(n);if(x<m&&(m=x,l&&l.copy(p),c&&c.copy(n),x<h))return Math.sqrt(x)}let g=0;for(let y=0;y<3;y++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const _=(y+1)%3,M=(y+2)%3,v=p<<_|x<<M,b=1<<y|p<<_|x<<M,S=f[v],E=f[b];e[g].set(S,E);const T=s[y],F=s[_],L=s[M],C=t[g],U=C.start,N=C.end;U[T]=u[T],U[F]=p?u[F]:d[F],U[L]=x?u[L]:d[F],N[T]=d[T],N[F]=p?u[F]:d[F],N[L]=x?u[L]:d[F],g++}for(let y=0;y<=1;y++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){n.x=y?d.x:u.x,n.y=p?d.y:u.y,n.z=x?d.z:u.z,this.closestPointToPoint(n,i);const _=n.distanceToSquared(i);if(_<m&&(m=_,l&&l.copy(i),c&&c.copy(n),_<h))return Math.sqrt(_)}for(let y=0;y<12;y++){const p=e[y];for(let x=0;x<12;x++){const _=t[x];cf(p,_,i,n);const M=i.distanceToSquared(n);if(M<m&&(m=M,l&&l.copy(i),c&&c.copy(n),M<h))return Math.sqrt(M)}}return Math.sqrt(m)}}();class hf{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class yR extends hf{constructor(){super(()=>new Mn)}}const Ji=new yR;function ki(s,e){return e[s+15]===65535}function Vi(s,e){return e[s+6]}function Qi(s,e){return e[s+14]}function en(s){return s+8}function tn(s,e){return e[s+6]}function Ly(s,e){return e[s+7]}class _R{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const gt=new _R;let Bs,Lo;const po=[],oc=new hf(()=>new Lt);function xR(s,e,t,i,n,r){Bs=oc.getPrimitive(),Lo=oc.getPrimitive(),po.push(Bs,Lo),gt.setBuffer(s._roots[e]);const o=fd(0,s.geometry,t,i,n,r);gt.clearBuffer(),oc.releasePrimitive(Bs),oc.releasePrimitive(Lo),po.pop(),po.pop();const a=po.length;return a>0&&(Lo=po[a-1],Bs=po[a-2]),o}function fd(s,e,t,i,n=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=gt;let h=s*2;if(ki(h,l)){const d=Vi(s,c),f=Qi(h,l);return Mt(s,a,Bs),i(d,f,!1,o,r+s,Bs)}else{let T=function(L){const{uint16Array:C,uint32Array:U}=gt;let N=L*2;for(;!ki(N,C);)L=en(L),N=L*2;return Vi(L,U)},F=function(L){const{uint16Array:C,uint32Array:U}=gt;let N=L*2;for(;!ki(N,C);)L=tn(L,U),N=L*2;return Vi(L,U)+Qi(N,C)};const d=en(s),f=tn(s,c);let m=d,g=f,y,p,x,_;if(n&&(x=Bs,_=Lo,Mt(m,a,x),Mt(g,a,_),y=n(x),p=n(_),p<y)){m=f,g=d;const L=y;y=p,p=L,x=_}x||(x=Bs,Mt(m,a,x));const M=ki(m*2,l),v=t(x,M,y,o+1,r+m);let b;if(v===Jm){const L=T(m),U=F(m)-L;b=i(L,U,!0,o+1,r+m,x)}else b=v&&fd(m,e,t,i,n,r,o+1);if(b)return!0;_=Lo,Mt(g,a,_);const S=ki(g*2,l),E=t(_,S,p,o+1,r+g);let w;if(E===Jm){const L=T(g),U=F(g)-L;w=i(L,U,!0,o+1,r+g,_)}else w=E&&fd(g,e,t,i,n,r,o+1);return!!w}}const Ta=new D,Lu=new D;function vR(s,e,t={},i=0,n=1/0){const r=i*i,o=n*n;let a=1/0,l=null;if(s.shapecast({boundsTraverseOrder:h=>(Ta.copy(e).clamp(h.min,h.max),Ta.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,Ta);const d=e.distanceToSquared(Ta);return d<a&&(Lu.copy(Ta),a=d,l=u),d<r}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(Lu):t.point=Lu.clone(),t.distance=c,t.faceIndex=l,t}const mo=new D,go=new D,yo=new D,ac=new ct,lc=new ct,cc=new ct,ng=new D,sg=new D,rg=new D,hc=new D;function MR(s,e,t,i,n,r){let o;return r===d0?o=s.intersectTriangle(i,t,e,!0,n):o=s.intersectTriangle(e,t,i,r!==f0,n),o===null?null:{distance:s.origin.distanceTo(n),point:n.clone()}}function bR(s,e,t,i,n,r,o,a,l){mo.fromBufferAttribute(e,r),go.fromBufferAttribute(e,o),yo.fromBufferAttribute(e,a);const c=MR(s,mo,go,yo,hc,l);if(c){i&&(ac.fromBufferAttribute(i,r),lc.fromBufferAttribute(i,o),cc.fromBufferAttribute(i,a),c.uv=Cn.getInterpolation(hc,mo,go,yo,ac,lc,cc,new ct)),n&&(ac.fromBufferAttribute(n,r),lc.fromBufferAttribute(n,o),cc.fromBufferAttribute(n,a),c.uv1=Cn.getInterpolation(hc,mo,go,yo,ac,lc,cc,new ct)),t&&(ng.fromBufferAttribute(t,r),sg.fromBufferAttribute(t,o),rg.fromBufferAttribute(t,a),c.normal=Cn.getInterpolation(hc,mo,go,yo,ng,sg,rg,new D),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));const h={a:r,b:o,c:a,normal:new D,materialIndex:0};Cn.getNormal(mo,go,yo,h.normal),c.face=h,c.faceIndex=r}return c}function ah(s,e,t,i,n){const r=i*3;let o=r+0,a=r+1,l=r+2;const c=s.index;s.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:h,normal:u,uv:d,uv1:f}=s.attributes,m=bR(t,h,u,d,f,o,a,l,e);return m?(m.faceIndex=i,n&&n.push(m),m):null}function Nt(s,e,t,i){const n=s.a,r=s.b,o=s.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function wR(s,e,t,i,n,r){const{geometry:o,_indirectBuffer:a}=s;for(let l=i,c=i+n;l<c;l++)ah(o,e,t,l,r)}function SR(s,e,t,i,n){const{geometry:r,_indirectBuffer:o}=s;let a=1/0,l=null;for(let c=i,h=i+n;c<h;c++){let u;u=ah(r,e,t,c),u&&u.distance<a&&(l=u,a=u.distance)}return l}function TR(s,e,t,i,n,r,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=s,u=e+s;h<u;h++){let d;if(d=h,Nt(o,d*3,l,c),o.needsUpdate=!0,i(o,d,n,r))return!0}return!1}function AR(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,m=!1){const g=d*2;if(a[g+15]===oh){const p=o[d+6],x=a[g+14];let _=1/0,M=1/0,v=1/0,b=-1/0,S=-1/0,E=-1/0;for(let w=3*p,T=3*(p+x);w<T;w++){let F=i[w];const L=n.getX(F),C=n.getY(F),U=n.getZ(F);L<_&&(_=L),L>b&&(b=L),C<M&&(M=C),C>S&&(S=C),U<v&&(v=U),U>E&&(E=U)}return l[d+0]!==_||l[d+1]!==M||l[d+2]!==v||l[d+3]!==b||l[d+4]!==S||l[d+5]!==E?(l[d+0]=_,l[d+1]=M,l[d+2]=v,l[d+3]=b,l[d+4]=S,l[d+5]=E,!0):!1}else{const p=d+8,x=o[d+6],_=p+f,M=x+f;let v=m,b=!1,S=!1;e?v||(b=e.has(_),S=e.has(M),v=!b&&!S):(b=!0,S=!0);const E=v||b,w=v||S;let T=!1;E&&(T=u(p,f,v));let F=!1;w&&(F=u(x,f,v));const L=T||F;if(L)for(let C=0;C<3;C++){const U=p+C,N=x+C,W=l[U],k=l[U+3],G=l[N],X=l[N+3];l[d+C]=W<G?W:G,l[d+C+3]=k>X?k:X}return L}}}const og=new Lt;function Vs(s,e,t,i){return Mt(s,e,og),t.intersectBox(og,i)}function ER(s,e,t,i,n,r){const{geometry:o,_indirectBuffer:a}=s;for(let l=i,c=i+n;l<c;l++){let h=a?a[l]:l;ah(o,e,t,h,r)}}function RR(s,e,t,i,n){const{geometry:r,_indirectBuffer:o}=s;let a=1/0,l=null;for(let c=i,h=i+n;c<h;c++){let u;u=ah(r,e,t,o?o[c]:c),u&&u.distance<a&&(l=u,a=u.distance)}return l}function CR(s,e,t,i,n,r,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=s,u=e+s;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),Nt(o,d*3,l,c),o.needsUpdate=!0,i(o,d,n,r))return!0}return!1}const ag=new D;function PR(s,e,t,i,n){gt.setBuffer(s._roots[e]),pd(0,s,t,i,n),gt.clearBuffer()}function pd(s,e,t,i,n){const{float32Array:r,uint16Array:o,uint32Array:a}=gt,l=s*2;if(ki(l,o)){const h=Vi(s,a),u=Qi(l,o);wR(e,t,i,h,u,n)}else{const h=en(s);Vs(h,r,i,ag)&&pd(h,e,t,i,n);const u=tn(s,a);Vs(u,r,i,ag)&&pd(u,e,t,i,n)}}const lg=new D,LR=["x","y","z"];function IR(s,e,t,i){gt.setBuffer(s._roots[e]);const n=md(0,s,t,i);return gt.clearBuffer(),n}function md(s,e,t,i){const{float32Array:n,uint16Array:r,uint32Array:o}=gt;let a=s*2;if(ki(a,r)){const c=Vi(s,o),h=Qi(a,r);return SR(e,t,i,c,h)}else{const c=Ly(s,o),h=LR[c],d=i.direction[h]>=0;let f,m;d?(f=en(s),m=tn(s,o)):(f=tn(s,o),m=en(s));const y=Vs(f,n,i,lg)?md(f,e,t,i):null;if(y){const _=y.point[h];if(d?_<=n[m+c]:_>=n[m+c+3])return y}const x=Vs(m,n,i,lg)?md(m,e,t,i):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const uc=new Lt,_o=new Mn,xo=new Mn,Aa=new Ee,cg=new bi,dc=new bi;function DR(s,e,t,i){gt.setBuffer(s._roots[e]);const n=gd(0,s,t,i);return gt.clearBuffer(),n}function gd(s,e,t,i,n=null){const{float32Array:r,uint16Array:o,uint32Array:a}=gt;let l=s*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),cg.set(t.boundingBox.min,t.boundingBox.max,i),n=cg),ki(l,o)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,m=t.attributes.position,g=Vi(s,a),y=Qi(l,o);if(Aa.copy(i).invert(),t.boundsTree)return Mt(s,r,dc),dc.matrix.copy(Aa),dc.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>dc.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let _=g*3,M=(y+g)*3;_<M;_+=3)if(Nt(xo,_,u,d),xo.needsUpdate=!0,x.intersectsTriangle(xo))return!0;return!1}});for(let p=g*3,x=(y+g)*3;p<x;p+=3){Nt(_o,p,u,d),_o.a.applyMatrix4(Aa),_o.b.applyMatrix4(Aa),_o.c.applyMatrix4(Aa),_o.needsUpdate=!0;for(let _=0,M=f.count;_<M;_+=3)if(Nt(xo,_,f,m),xo.needsUpdate=!0,_o.intersectsTriangle(xo))return!0}}else{const h=s+8,u=a[s+6];return Mt(h,r,uc),!!(n.intersectsBox(uc)&&gd(h,e,t,i,n)||(Mt(u,r,uc),n.intersectsBox(uc)&&gd(u,e,t,i,n)))}}const fc=new Ee,Iu=new bi,Ea=new bi,FR=new D,UR=new D,NR=new D,BR=new D;function zR(s,e,t,i={},n={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Iu.set(e.boundingBox.min,e.boundingBox.max,t),Iu.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=Ji.getPrimitive(),f=Ji.getPrimitive();let m=FR,g=UR,y=null,p=null;n&&(y=NR,p=BR);let x=1/0,_=null,M=null;return fc.copy(t).invert(),Ea.matrix.copy(fc),s.shapecast({boundsTraverseOrder:v=>Iu.distanceToBox(v),intersectsBounds:(v,b,S)=>S<x&&S<o?(b&&(Ea.min.copy(v.min),Ea.max.copy(v.max),Ea.needsUpdate=!0),!0):!1,intersectsRange:(v,b)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:E=>Ea.distanceToBox(E),intersectsBounds:(E,w,T)=>T<x&&T<o,intersectsRange:(E,w)=>{for(let T=E,F=E+w;T<F;T++){Nt(f,3*T,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let L=v,C=v+b;L<C;L++){Nt(d,3*L,c,l),d.needsUpdate=!0;const U=d.distanceToTriangle(f,m,y);if(U<x&&(g.copy(m),p&&p.copy(y),x=U,_=L,M=T),U<r)return!0}}}});{const S=na(e);for(let E=0,w=S;E<w;E++){Nt(f,3*E,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let T=v,F=v+b;T<F;T++){Nt(d,3*T,c,l),d.needsUpdate=!0;const L=d.distanceToTriangle(f,m,y);if(L<x&&(g.copy(m),p&&p.copy(y),x=L,_=T,M=E),L<r)return!0}}}}}),Ji.releasePrimitive(d),Ji.releasePrimitive(f),x===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=x,i.faceIndex=_,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(fc),g.applyMatrix4(fc),n.distance=g.sub(n.point).length(),n.faceIndex=M),i)}function kR(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,m=!1){const g=d*2;if(a[g+15]===oh){const p=o[d+6],x=a[g+14];let _=1/0,M=1/0,v=1/0,b=-1/0,S=-1/0,E=-1/0;for(let w=p,T=p+x;w<T;w++){const F=3*s.resolveTriangleIndex(w);for(let L=0;L<3;L++){let C=F+L;C=i?i[C]:C;const U=n.getX(C),N=n.getY(C),W=n.getZ(C);U<_&&(_=U),U>b&&(b=U),N<M&&(M=N),N>S&&(S=N),W<v&&(v=W),W>E&&(E=W)}}return l[d+0]!==_||l[d+1]!==M||l[d+2]!==v||l[d+3]!==b||l[d+4]!==S||l[d+5]!==E?(l[d+0]=_,l[d+1]=M,l[d+2]=v,l[d+3]=b,l[d+4]=S,l[d+5]=E,!0):!1}else{const p=d+8,x=o[d+6],_=p+f,M=x+f;let v=m,b=!1,S=!1;e?v||(b=e.has(_),S=e.has(M),v=!b&&!S):(b=!0,S=!0);const E=v||b,w=v||S;let T=!1;E&&(T=u(p,f,v));let F=!1;w&&(F=u(x,f,v));const L=T||F;if(L)for(let C=0;C<3;C++){const U=p+C,N=x+C,W=l[U],k=l[U+3],G=l[N],X=l[N+3];l[d+C]=W<G?W:G,l[d+C+3]=k>X?k:X}return L}}}const hg=new D;function OR(s,e,t,i,n){gt.setBuffer(s._roots[e]),yd(0,s,t,i,n),gt.clearBuffer()}function yd(s,e,t,i,n){const{float32Array:r,uint16Array:o,uint32Array:a}=gt,l=s*2;if(ki(l,o)){const h=Vi(s,a),u=Qi(l,o);ER(e,t,i,h,u,n)}else{const h=en(s);Vs(h,r,i,hg)&&yd(h,e,t,i,n);const u=tn(s,a);Vs(u,r,i,hg)&&yd(u,e,t,i,n)}}const ug=new D,VR=["x","y","z"];function HR(s,e,t,i){gt.setBuffer(s._roots[e]);const n=_d(0,s,t,i);return gt.clearBuffer(),n}function _d(s,e,t,i){const{float32Array:n,uint16Array:r,uint32Array:o}=gt;let a=s*2;if(ki(a,r)){const c=Vi(s,o),h=Qi(a,r);return RR(e,t,i,c,h)}else{const c=Ly(s,o),h=VR[c],d=i.direction[h]>=0;let f,m;d?(f=en(s),m=tn(s,o)):(f=tn(s,o),m=en(s));const y=Vs(f,n,i,ug)?_d(f,e,t,i):null;if(y){const _=y.point[h];if(d?_<=n[m+c]:_>=n[m+c+3])return y}const x=Vs(m,n,i,ug)?_d(m,e,t,i):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const pc=new Lt,vo=new Mn,Mo=new Mn,Ra=new Ee,dg=new bi,mc=new bi;function GR(s,e,t,i){gt.setBuffer(s._roots[e]);const n=xd(0,s,t,i);return gt.clearBuffer(),n}function xd(s,e,t,i,n=null){const{float32Array:r,uint16Array:o,uint32Array:a}=gt;let l=s*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),dg.set(t.boundingBox.min,t.boundingBox.max,i),n=dg),ki(l,o)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,m=t.attributes.position,g=Vi(s,a),y=Qi(l,o);if(Ra.copy(i).invert(),t.boundsTree)return Mt(s,r,mc),mc.matrix.copy(Ra),mc.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>mc.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let _=g,M=y+g;_<M;_++)if(Nt(Mo,3*e.resolveTriangleIndex(_),u,d),Mo.needsUpdate=!0,x.intersectsTriangle(Mo))return!0;return!1}});for(let p=g,x=y+g;p<x;p++){const _=e.resolveTriangleIndex(p);Nt(vo,3*_,u,d),vo.a.applyMatrix4(Ra),vo.b.applyMatrix4(Ra),vo.c.applyMatrix4(Ra),vo.needsUpdate=!0;for(let M=0,v=f.count;M<v;M+=3)if(Nt(Mo,M,f,m),Mo.needsUpdate=!0,vo.intersectsTriangle(Mo))return!0}}else{const h=s+8,u=a[s+6];return Mt(h,r,pc),!!(n.intersectsBox(pc)&&xd(h,e,t,i,n)||(Mt(u,r,pc),n.intersectsBox(pc)&&xd(u,e,t,i,n)))}}const gc=new Ee,Du=new bi,Ca=new bi,WR=new D,XR=new D,jR=new D,qR=new D;function $R(s,e,t,i={},n={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Du.set(e.boundingBox.min,e.boundingBox.max,t),Du.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=Ji.getPrimitive(),f=Ji.getPrimitive();let m=WR,g=XR,y=null,p=null;n&&(y=jR,p=qR);let x=1/0,_=null,M=null;return gc.copy(t).invert(),Ca.matrix.copy(gc),s.shapecast({boundsTraverseOrder:v=>Du.distanceToBox(v),intersectsBounds:(v,b,S)=>S<x&&S<o?(b&&(Ca.min.copy(v.min),Ca.max.copy(v.max),Ca.needsUpdate=!0),!0):!1,intersectsRange:(v,b)=>{if(e.boundsTree){const S=e.boundsTree;return S.shapecast({boundsTraverseOrder:E=>Ca.distanceToBox(E),intersectsBounds:(E,w,T)=>T<x&&T<o,intersectsRange:(E,w)=>{for(let T=E,F=E+w;T<F;T++){const L=S.resolveTriangleIndex(T);Nt(f,3*L,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let C=v,U=v+b;C<U;C++){const N=s.resolveTriangleIndex(C);Nt(d,3*N,c,l),d.needsUpdate=!0;const W=d.distanceToTriangle(f,m,y);if(W<x&&(g.copy(m),p&&p.copy(y),x=W,_=C,M=T),W<r)return!0}}}})}else{const S=na(e);for(let E=0,w=S;E<w;E++){Nt(f,3*E,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let T=v,F=v+b;T<F;T++){const L=s.resolveTriangleIndex(T);Nt(d,3*L,c,l),d.needsUpdate=!0;const C=d.distanceToTriangle(f,m,y);if(C<x&&(g.copy(m),p&&p.copy(y),x=C,_=T,M=E),C<r)return!0}}}}}),Ji.releasePrimitive(d),Ji.releasePrimitive(f),x===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=x,i.faceIndex=_,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(gc),g.applyMatrix4(gc),n.distance=g.sub(n.point).length(),n.faceIndex=M),i)}function YR(){return typeof SharedArrayBuffer<"u"}const Ga=new gt.constructor,Xc=new gt.constructor,Fs=new hf(()=>new Lt),bo=new Lt,wo=new Lt,Fu=new Lt,Uu=new Lt;let Nu=!1;function KR(s,e,t,i){if(Nu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Nu=!0;const n=s._roots,r=e._roots;let o,a=0,l=0;const c=new Ee().copy(t).invert();for(let h=0,u=n.length;h<u;h++){Ga.setBuffer(n[h]),l=0;const d=Fs.getPrimitive();Mt(0,Ga.float32Array,d),d.applyMatrix4(c);for(let f=0,m=r.length;f<m&&(Xc.setBuffer(r[h]),o=fn(0,0,t,c,i,a,l,0,0,d),Xc.clearBuffer(),l+=r[f].length,!o);f++);if(Fs.releasePrimitive(d),Ga.clearBuffer(),a+=n[h].length,o)break}return Nu=!1,o}function fn(s,e,t,i,n,r=0,o=0,a=0,l=0,c=null,h=!1){let u,d;h?(u=Xc,d=Ga):(u=Ga,d=Xc);const f=u.float32Array,m=u.uint32Array,g=u.uint16Array,y=d.float32Array,p=d.uint32Array,x=d.uint16Array,_=s*2,M=e*2,v=ki(_,g),b=ki(M,x);let S=!1;if(b&&v)h?S=n(Vi(e,p),Qi(e*2,x),Vi(s,m),Qi(s*2,g),l,o+e,a,r+s):S=n(Vi(s,m),Qi(s*2,g),Vi(e,p),Qi(e*2,x),a,r+s,l,o+e);else if(b){const E=Fs.getPrimitive();Mt(e,y,E),E.applyMatrix4(t);const w=en(s),T=tn(s,m);Mt(w,f,bo),Mt(T,f,wo);const F=E.intersectsBox(bo),L=E.intersectsBox(wo);S=F&&fn(e,w,i,t,n,o,r,l,a+1,E,!h)||L&&fn(e,T,i,t,n,o,r,l,a+1,E,!h),Fs.releasePrimitive(E)}else{const E=en(e),w=tn(e,p);Mt(E,y,Fu),Mt(w,y,Uu);const T=c.intersectsBox(Fu),F=c.intersectsBox(Uu);if(T&&F)S=fn(s,E,t,i,n,r,o,a,l+1,c,h)||fn(s,w,t,i,n,r,o,a,l+1,c,h);else if(T)if(v)S=fn(s,E,t,i,n,r,o,a,l+1,c,h);else{const L=Fs.getPrimitive();L.copy(Fu).applyMatrix4(t);const C=en(s),U=tn(s,m);Mt(C,f,bo),Mt(U,f,wo);const N=L.intersectsBox(bo),W=L.intersectsBox(wo);S=N&&fn(E,C,i,t,n,o,r,l,a+1,L,!h)||W&&fn(E,U,i,t,n,o,r,l,a+1,L,!h),Fs.releasePrimitive(L)}else if(F)if(v)S=fn(s,w,t,i,n,r,o,a,l+1,c,h);else{const L=Fs.getPrimitive();L.copy(Uu).applyMatrix4(t);const C=en(s),U=tn(s,m);Mt(C,f,bo),Mt(U,f,wo);const N=L.intersectsBox(bo),W=L.intersectsBox(wo);S=N&&fn(w,C,i,t,n,o,r,l,a+1,L,!h)||W&&fn(w,U,i,t,n,o,r,l,a+1,L,!h),Fs.releasePrimitive(L)}}return S}const yc=new bi,fg=new Lt;class uf{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,r=e._indirectBuffer,o=i.getIndex();let a;return t.cloneBuffers?a={roots:n.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:n,index:o.array,indirectBuffer:r},a}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:n,roots:r,indirectBuffer:o}=e,a=new uf(t,{...i,[Ru]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const l=t.getIndex();if(l===null){const c=new gi(e.index,1,!1);t.setIndex(c)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Ry,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[Ru]:!1},t),t.useSharedArrayBuffer&&!YR())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Ru]||(fR(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Lt)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=t.indirect?n=>i[n]:n=>n}refit(e=null){return(this.indirect?kR:AR)(this,e)}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,h=r[c+15]===oh;if(h){const u=n[a+6],d=r[c+14];e(l,h,new Float32Array(i,a*4,6),u,d)}else{const u=a+Lc/4,d=n[a+6],f=n[a+7];e(l,h,new Float32Array(i,a*4,6),f)||(o(u,l+1),o(d,l+1))}}}raycast(e,t=Oo){const i=this._roots,n=this.geometry,r=[],o=t.isMaterial,a=Array.isArray(t),l=n.groups,c=o?t.side:t,h=this.indirect?OR:PR;for(let u=0,d=i.length;u<d;u++){const f=a?t[l[u].materialIndex].side:c,m=r.length;if(h(this,u,f,e,r),a){const g=l[u].materialIndex;for(let y=m,p=r.length;y<p;y++)r[y].face.materialIndex=g}}return r}raycastFirst(e,t=Oo){const i=this._roots,n=this.geometry,r=t.isMaterial,o=Array.isArray(t);let a=null;const l=n.groups,c=r?t.side:t,h=this.indirect?HR:IR;for(let u=0,d=i.length;u<d;u++){const f=o?t[l[u].materialIndex].side:c,m=h(this,u,f,e);m!=null&&(a==null||m.distance<a.distance)&&(a=m,o&&(m.face.materialIndex=l[u].materialIndex))}return a}intersectsGeometry(e,t){let i=!1;const n=this._roots,r=this.indirect?GR:DR;for(let o=0,a=n.length;o<a&&(i=r(this,o,e,t),!i);o++);return i}shapecast(e){const t=Ji.getPrimitive(),i=this.indirect?CR:TR;let{boundsTraverseOrder:n,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const u=o;o=(d,f,m,g,y)=>u(d,f,m,g,y)?!0:i(d,f,this,a,m,g,t)}else o||(a?o=(u,d,f,m)=>i(u,d,this,a,f,m,t):o=(u,d,f)=>f);let l=!1,c=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(l=xR(this,u,r,o,n,c),l)break;c+=f.byteLength}return Ji.releasePrimitive(t),l}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:r}=i;const o=Ji.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{const g=this.resolveTriangleIndex(m);Nt(o,g*3,a,l)}:m=>{Nt(o,m*3,a,l)},h=Ji.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?m=>{const g=e.resolveTriangleIndex(m);Nt(h,g*3,u,d)}:m=>{Nt(h,m*3,u,d)};if(r){const m=(g,y,p,x,_,M,v,b)=>{for(let S=p,E=p+x;S<E;S++){f(S),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let w=g,T=g+y;w<T;w++)if(c(w),o.needsUpdate=!0,r(o,h,w,S,_,M,v,b))return!0}return!1};if(n){const g=n;n=function(y,p,x,_,M,v,b,S){return g(y,p,x,_,M,v,b,S)?!0:m(y,p,x,_,M,v,b,S)}}else n=m}return KR(this,e,t,n)}intersectsBox(e,t){return yc.set(e.min,e.max,t),yc.needsUpdate=!0,this.shapecast({intersectsBounds:i=>yc.intersectsBox(i),intersectsTriangle:i=>yc.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},r=0,o=1/0){return(this.indirect?$R:zR)(this,e,t,i,n,r,o)}closestPointToPoint(e,t={},i=0,n=1/0){return vR(this,e,t,i,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Mt(0,new Float32Array(i),fg),e.union(fg)}),e}}function ZR(){this.boundsTree=null}const or=new D,ar=new D,lr=new D,pg=new zi,_c=new D,Bu=new D,mg=new zi,gg=new zi,xc=new Ee,yg=new Ee;function Pa(s,e){if(!s&&!e)return;const t=s.count===e.count,i=s.normalized===e.normalized,n=s.array.constructor===e.array.constructor,r=s.itemSize===e.itemSize;if(!t||!i||!n||!r)throw new Error}function Na(s,e=null){const t=s.array.constructor,i=s.normalized,n=s.itemSize,r=e===null?s.count:e;return new gi(new t(n*r),n,i)}function Iy(s,e,t=0){if(s.isInterleavedBufferAttribute){const i=s.itemSize;for(let n=0,r=s.count;n<r;n++){const o=n+t;e.setX(o,s.getX(n)),i>=2&&e.setY(o,s.getY(n)),i>=3&&e.setZ(o,s.getZ(n)),i>=4&&e.setW(o,s.getW(n))}}else{const i=e.array,n=i.constructor,r=i.BYTES_PER_ELEMENT*s.itemSize*t;new n(i.buffer,r,s.array.length).set(s.array)}}function JR(s,e,t){const i=s.elements,n=e.elements;for(let r=0,o=n.length;r<o;r++)i[r]+=n[r]*t}function _g(s,e,t){const i=s.skeleton,n=s.geometry,r=i.bones,o=i.boneInverses;mg.fromBufferAttribute(n.attributes.skinIndex,e),gg.fromBufferAttribute(n.attributes.skinWeight,e),xc.elements.fill(0);for(let a=0;a<4;a++){const l=gg.getComponent(a);if(l!==0){const c=mg.getComponent(a);yg.multiplyMatrices(r[c].matrixWorld,o[c]),JR(xc,yg,l)}}return xc.multiply(s.bindMatrix).premultiply(s.bindMatrixInverse),t.transformDirection(xc),t}function zu(s,e,t,i,n){_c.set(0,0,0);for(let r=0,o=s.length;r<o;r++){const a=e[r],l=s[r];a!==0&&(Bu.fromBufferAttribute(l,i),t?_c.addScaledVector(Bu,a):_c.addScaledVector(Bu.sub(n),a))}n.add(_c)}function QR(s,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Dn){const i=s[0].index!==null,{useGroups:n=!1,updateIndex:r=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(s[0].attributes)),l={};let c=0;t.clearGroups();for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const f in u.attributes){if(!a.has(f))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.');l[f]===void 0&&(l[f]=[]),l[f].push(u.attributes[f]),d++}if(d!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let f;if(i)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,f,h),c+=f}}if(i){let h=!1;if(!t.index){let u=0;for(let d=0;d<s.length;++d)u+=s[d].index.count;t.setIndex(new gi(new Uint32Array(u),1,!1)),h=!0}if(r||h){const u=t.index;let d=0,f=0;for(let m=0;m<s.length;++m){const g=s[m],y=g.index;if(o[m]!==!0)for(let p=0;p<y.count;++p)u.setX(d,y.getX(p)+f),d++;f+=g.attributes.position.count}}}for(const h in l){const u=l[h];if(!(h in t.attributes)){let m=0;for(const g in u)m+=u[g].count;t.setAttribute(h,Na(l[h][0],m))}const d=t.attributes[h];let f=0;for(let m=0,g=u.length;m<g;m++){const y=u[m];o[m]!==!0&&Iy(y,d,f),f+=y.count}}return t}function eC(s,e){if(s===null||e===null)return s===e;if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}class tC{constructor(e){this.matrixWorld=new Ee,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const r=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==r.length?this.boneMatrices=r.slice():this.boneMatrices.set(r)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&eC(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class iC{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Dn),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Dn){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:r,_diffMap:o}=this;for(let a=0,l=i.length;a<l;a++){const c=i[a],h=r[a],u=o.get(c);!u||u.didChange(c)?(this._convertToStaticGeometry(c,h),t.push(!1),u?u.update():o.set(c,new tC(c))):t.push(!0)}QR(r,{useGroups:n,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Dn){const i=e.geometry,n=this.applyWorldTransforms,r=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=i.attributes,l=t.attributes;t.index||(t.index=i.index),l.position||t.setAttribute("position",Na(a.position)),r&&!l.normal&&a.normal&&t.setAttribute("normal",Na(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",Na(a.tangent)),Pa(i.index,t.index),Pa(a.position,l.position),r&&Pa(a.normal,l.normal),o&&Pa(a.tangent,l.tangent);const c=a.position,h=r?a.normal:null,u=o?a.tangent:null,d=i.morphAttributes.position,f=i.morphAttributes.normal,m=i.morphAttributes.tangent,g=i.morphTargetsRelative,y=e.morphTargetInfluences,p=new Hs;p.getNormalMatrix(e.matrixWorld);for(let x=0,_=a.position.count;x<_;x++)or.fromBufferAttribute(c,x),h&&ar.fromBufferAttribute(h,x),u&&(pg.fromBufferAttribute(u,x),lr.fromBufferAttribute(u,x)),y&&(d&&zu(d,y,g,x,or),f&&zu(f,y,g,x,ar),m&&zu(m,y,g,x,lr)),e.isSkinnedMesh&&(e.applyBoneTransform(x,or),h&&_g(e,x,ar),u&&_g(e,x,lr)),n&&or.applyMatrix4(e.matrixWorld),l.position.setXYZ(x,or.x,or.y,or.z),h&&(n&&ar.applyNormalMatrix(p),l.normal.setXYZ(x,ar.x,ar.y,ar.z)),u&&(n&&lr.transformDirection(e.matrixWorld),l.tangent.setXYZW(x,lr.x,lr.y,lr.z,pg.w));for(const x in this.attributes){const _=this.attributes[x];_==="position"||_==="tangent"||_==="normal"||!(_ in a)||(l[_]||t.setAttribute(_,Na(a[_])),Pa(a[_],l[_]),Iy(a[_],l[_]))}return t}}class nC{constructor(){this.positionVector=new I,this.rotationVector=new Fn,this.sizeVector=new I,this.GRAVITY=-9.81,this.MIN_SIZE=.01,this.DISABLE=5,this.ENABLE=1,this.SPEED=5}createBound(e,t,i,n=0){this.rotationVector.set(0,0,0);const r=e[0],o=e[1],a=r-t[0],l=o-t[1],c=a/-2+r,h=l/-2+o;let u=Math.abs(a),d=Math.abs(l);if(u&&d){const f=d>u,m=Math.hypot(u,d);this.rotationVector.set(0,f?Qe.d2+Math.atan(d/u):Qe.d2-Math.atan(u/d),0),f?d=m:u=m}u=u<d?this.MIN_SIZE:u,d=d<u?this.MIN_SIZE:d,this.positionVector.set(c,n,h),this.sizeVector.set(u,i,d)}borderOverflow(e){const{x:t,z:i}=this.positionVector;return Math.abs(t)>Math.abs(e.x)&&Math.abs(i)>Math.abs(e.z)&&t-e.x<=1&&i-e.z<=1}createStaticCollider(e){const{x:t,y:i,z:n}=this.sizeVector,r=new At(new fs(t,i,n),e);r.position.copy(this.positionVector),r.rotation.copy(this.rotationVector),K.dispatch("Level::AddObject",r),this.addStaticCollider(r)}createGround(e,t){this.sizeVector.set(Math.abs(e[0]-t[0]),this.MIN_SIZE,Math.abs(e[1]-t[1])),this.positionVector.set((e[0]+t[0])/2,0,(e[1]+t[1])/2),this.createStaticCollider(Pn.Transparent)}createBounds(e,t){const i=new I,n=e.borders.concat([e.borders[0]]),r=t?.borders.concat([t?.borders[0]]);for(let o=0;o<e.borders.length;o++){if(this.createBound(n[o],n[o+1],e.height,e.y),this.createStaticCollider(Pn.StaticCollider),i.copy(this.positionVector),r&&this.createBound(r[o],r[o+1],t?.height,t?.y),this.borderOverflow(i))continue;const a=this.rotationVector.y?1.1:1,l=this.positionVector.distanceTo(i)/2*.95;this.positionVector.x-=(this.positionVector.x-i.x)/2,this.positionVector.z-=(this.positionVector.z-i.z)/2,this.sizeVector.z===this.MIN_SIZE?this.sizeVector.setZ(l):this.sizeVector.setX(l),this.positionVector.x<0?this.sizeVector.z*=a:this.sizeVector.x*=a,this.createStaticCollider(Pn.StaticCollider)}}}class sC extends nC{constructor(){super(...arguments),this.characterVelocity=new Map,this.characters=new Map,this.linearVelocity=new I,this.environment=new Fa,this.capsule=new I,this.matrix=new ht,this.segment=new Ey,this.box=new js,this.paused=!0,this.delta=0}updateCollisions(){const e=Array.from(this.characters.values());for(let t=e.length;t--;){const i=e[t];for(let n=t;n--;){const r=e[n];this.linearVelocity.subVectors(i.position,r.position);const o=this.linearVelocity.length()-(i.userData.radius+r.userData.radius);if(o>0)continue;this.linearVelocity.normalize();const a=this.characterVelocity.get(i.uuid),l=this.characterVelocity.get(r.uuid),c=a.dot(this.linearVelocity),h=l.dot(this.linearVelocity),u=Math.max(c,.2),d=Math.max(h,.2),f=u+d,m=u/f,g=d/f,{y}=i.position,{y:p}=r.position;i.position.addScaledVector(this.linearVelocity,-m*o),r.position.addScaledVector(this.linearVelocity,g*o),i.position.y=y,r.position.y=p}}}addPhysicsCollider(){this.environment.updateMatrixWorld(!0);const e=new iC(this.environment);e.attributes=["position"];const t=e.generate();t.boundsTree=new uf(t,{lazyGeneration:!1}),K.dispatch("Level::AddObject",this.environment),this.environmentCollider=new At(t)}addStaticCollider(e){this.environment.attach(e)}createBounds(e,t){super.createBounds(e,t),this.addPhysicsCollider()}setCharacter(e){this.characterVelocity.set(e.uuid,new I),this.characters.set(e.uuid,e);const{height:t,radius:i}=e.userData;e.geometry.translate(0,-i,0),e.children[0].translateY(-i);const{x:n,z:r}=e.position;e.position.set(n,t,r),this.move(e.uuid,Oi.UP)}move(e,t){const i=this.characters.get(e),{segment:n,radius:r}=i.userData,o=this.characterVelocity.get(e),a=this.environmentCollider?.matrixWorld,l=this.environmentCollider?.geometry;o.y+=this.delta*this.GRAVITY,i.position.addScaledVector(o,this.delta),this.linearVelocity.set(t.x,t.y,t.z),i.position.addScaledVector(this.linearVelocity,this.SPEED*this.delta),i.updateMatrixWorld(),this.box.makeEmpty(),this.matrix.copy(a).invert(),this.segment.copy(n),this.segment.start.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.segment.end.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.box.expandByPoint(this.segment.start),this.box.expandByPoint(this.segment.end),this.box.min.addScalar(-r),this.box.max.addScalar(r),l.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(this.box),intersectsTriangle:u=>{const d=this.capsule,f=this.linearVelocity,m=u.closestPointToSegment(this.segment,f,d);if(m<r){const g=r-m,y=d.sub(f).normalize();this.segment.start.addScaledVector(y,g),this.segment.end.addScaledVector(y,g)}}});const c=this.linearVelocity;c.copy(this.segment.start).applyMatrix4(a),this.capsule.subVectors(c,i.position),i.position.copy(c),o.setScalar(0)}stop(e){this.characterVelocity.get(e)?.setScalar(0)}update(e){this.paused||(this.delta=e*.2,this.updateCollisions())}remove(e){this.characterVelocity.delete(e),this.characters.delete(e)}dispose(){const e=this.environmentCollider?.geometry,t=ZR.bind(e);e.dispose(),t(),this.paused=!0,this.characters.clear(),this.environment.clear(),this.characterVelocity.clear(),delete this.environmentCollider}set pause(e){this.paused=e}}const Ti=new sC;Ti.constructor.name.includes("Ammo");class df{constructor(e){this.config=e,this.animations={},this.direction=new I,this.position=new I,this.rotation=new I,this.animationUpdate=!1,this.lastAnimation="",this.hitting=!1,this.running=!1,this.moving=!1,this.dead=!1,this.still=!1,this.health=100;const{x:t,y:i}=this.config.collider;this.object=new At(new My(t,i,t,2,.5),Pn.DynamicCollider),this.object.userData={segment:new Ey(new I,Oi.DOWN),height:i,radius:.5,mass:this.config.mass},this.step=this.config.moves.Idle,this.uuid=this.object.uuid}updateAnimation(e,t,i){return this.currentAnimation.crossFadeTo(this.animations[t],i,!0),this.animations[t].play(),this.animationUpdate=!0,setTimeout(()=>{this.lastAnimation=t,this.setAnimation(e),this.currentAnimation.stop(),this.animationUpdate=!1,this.currentAnimation=this.animations[t]},i*1e3)}async load(e){const t=await Ze.Loader.loadGLTF(this.config.model);return this.mesh=t.scene,this.setTransform(t),this.setMaterial(e,1),t}playSound(e,t=!1){t&&this.stopSound(e),K.dispatch("SFX::Character",{uuid:this.uuid,play:!0,sfx:e,matrix:this.object.matrixWorld},!0)}setMaterial(e,t=0){this.mesh.traverse(i=>{const n=i,r=n.material;n.isMesh&&(n.castShadow=!0,n.updateMorphTargets(),n.material=new of({envMap:e??null,transparent:!0,map:r.map,side:xn,opacity:t}))})}getAnimationDuration(e){return this.animations[e].getClip().duration*1e3}setAnimation(e){this.step=this.config.moves[e]}setAnimations(e){const t=e.animations;this.mixer=new YE(this.mesh);for(let i=t.length;i--;){const{name:n}=t[i],r=n.charAt(0).toLowerCase()+n.slice(1);this.animations[r]=this.mixer.clipAction(t[i])}this.currentAnimation=this.animations.idle}setTransform(e){this.object.position.copy(this.config.position),this.mesh.position.set(0,this.config.collider.z,0),this.object.scale.copy(this.config.scale),this.rotation.setFromEuler(this.object.rotation),this.position.copy(this.object.position),this.object.add(this.mesh),this.setAnimations(e)}setMixerTimeScale(e){this.mixer&&(this.mixer.timeScale=e)}updateHealth(e){return this.dead?!0:(this.health=Math.max(this.health-e,0),!this.health&&this.die(),this.dead)}stopSound(e){K.dispatch("SFX::Character",{uuid:this.uuid,play:!1,sfx:e,matrix:this.object.matrixWorld},!0)}setMixerTime(e){this.mixer?.setTime(e)}teleport(e){Ti.pause=!0,this.object.position.copy(e),this.mesh.rotateOnWorldAxis(Oi.UP,Math.PI),Ti.teleportCollider?.(this.object.uuid),Ti.pause=!1}update(e){this.mixer?.update(e),this.updateDirection(),this.moving?(this.still=!1,Ti.move(this.uuid,this.direction)):this.still||(this.still=!0,Ti.stop(this.uuid))}updateDirection(){const{speed:e,direction:t}=this.step;this.mesh.getWorldDirection(this.rotation),this.object.getWorldPosition(this.position);const i=this.rotation.x*e,n=this.rotation.z*e,{z0:r,x0:o,x1:a}=t,l=Math.min(o,a);this.direction.set(i*r+i*l+n*a,-1,n*r+n*l+i*o)}dispose(){this.object.userData={},this.object.geometry.dispose(),this.object.material.dispose();for(const e in this.animations)this.animations[e].stopFading(),this.animations[e].stop(),delete this.animations[e];this.model&&(this.object.remove(this.model),this.model.clear(),delete this.model),this.animations={},delete this.mixer,this.reset()}die(){this.playSound("death",!0),this.setAnimation("Idle"),Ti.remove(this.uuid),this.hitting=!1,this.running=!1,this.moving=!1,this.still=!1,this.dead=!0}reset(){this.step=this.config.moves.Idle,this.direction.setScalar(0),this.position.setScalar(0),this.rotation.setScalar(0),this.hitting=!1,this.running=!1,this.moving=!1,this.health=100,this.still=!0,this.dead=!1}get blockingAnimation(){return this.dead||this.animationUpdate}set mesh(e){this.model=e}get mesh(){return this.model}get life(){return this.health}get collider(){return this.object}get alive(){return!this.dead}}var Dy={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ff={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},rC=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],jc={CSS:{},springs:{}};function Ln(s,e,t){return Math.min(Math.max(s,e),t)}function Wa(s,e){return s.indexOf(e)>-1}function ku(s,e){return s.apply(null,e)}var _e={arr:function(s){return Array.isArray(s)},obj:function(s){return Wa(Object.prototype.toString.call(s),"Object")},pth:function(s){return _e.obj(s)&&s.hasOwnProperty("totalLength")},svg:function(s){return s instanceof SVGElement},inp:function(s){return s instanceof HTMLInputElement},dom:function(s){return s.nodeType||_e.svg(s)},str:function(s){return typeof s=="string"},fnc:function(s){return typeof s=="function"},und:function(s){return typeof s>"u"},nil:function(s){return _e.und(s)||s===null},hex:function(s){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s)},rgb:function(s){return/^rgb/.test(s)},hsl:function(s){return/^hsl/.test(s)},col:function(s){return _e.hex(s)||_e.rgb(s)||_e.hsl(s)},key:function(s){return!Dy.hasOwnProperty(s)&&!ff.hasOwnProperty(s)&&s!=="targets"&&s!=="keyframes"}};function Fy(s){var e=/\(([^)]+)\)/.exec(s);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Uy(s,e){var t=Fy(s),i=Ln(_e.und(t[0])?1:t[0],.1,100),n=Ln(_e.und(t[1])?100:t[1],.1,100),r=Ln(_e.und(t[2])?10:t[2],.1,100),o=Ln(_e.und(t[3])?0:t[3],.1,100),a=Math.sqrt(n/i),l=r/(2*Math.sqrt(n*i)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*a+-o)/c:-o+a;function d(m){var g=e?e*m/1e3:m;return l<1?g=Math.exp(-g*l*a)*(h*Math.cos(c*g)+u*Math.sin(c*g)):g=(h+u*g)*Math.exp(-g*a),m===0||m===1?m:1-g}function f(){var m=jc.springs[s];if(m)return m;for(var g=1/6,y=0,p=0;;)if(y+=g,d(y)===1){if(p++,p>=16)break}else p=0;var x=y*g*1e3;return jc.springs[s]=x,x}return e?d:f}function oC(s){return s===void 0&&(s=10),function(e){return Math.ceil(Ln(e,1e-6,1)*s)*(1/s)}}var aC=function(){var s=11,e=1/(s-1);function t(h,u){return 1-3*u+3*h}function i(h,u){return 3*u-6*h}function n(h){return 3*h}function r(h,u,d){return((t(u,d)*h+i(u,d))*h+n(u))*h}function o(h,u,d){return 3*t(u,d)*h*h+2*i(u,d)*h+n(u)}function a(h,u,d,f,m){var g,y,p=0;do y=u+(d-u)/2,g=r(y,f,m)-h,g>0?d=y:u=y;while(Math.abs(g)>1e-7&&++p<10);return y}function l(h,u,d,f){for(var m=0;m<4;++m){var g=o(u,d,f);if(g===0)return u;var y=r(u,d,f)-h;u-=y/g}return u}function c(h,u,d,f){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var m=new Float32Array(s);if(h!==u||d!==f)for(var g=0;g<s;++g)m[g]=r(g*e,h,d);function y(p){for(var x=0,_=1,M=s-1;_!==M&&m[_]<=p;++_)x+=e;--_;var v=(p-m[_])/(m[_+1]-m[_]),b=x+v*e,S=o(b,h,d);return S>=.001?l(p,b,h,d):S===0?b:a(p,x,x+e,h,d)}return function(p){return h===u&&d===f||p===0||p===1?p:r(y(p),u,f)}}return c}(),Ny=function(){var s={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Expo:function(){return function(i){return i?Math.pow(2,10*i-10):0}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var n,r=4;i<((n=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((n*3-2)/22-i,2)}},Elastic:function(i,n){i===void 0&&(i=1),n===void 0&&(n=.5);var r=Ln(i,1,10),o=Ln(n,.1,2);return function(a){return a===0||a===1?a:-r*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(i,n){e[i]=function(){return function(r){return Math.pow(r,n+2)}}}),Object.keys(e).forEach(function(i){var n=e[i];s["easeIn"+i]=n,s["easeOut"+i]=function(r,o){return function(a){return 1-n(r,o)(1-a)}},s["easeInOut"+i]=function(r,o){return function(a){return a<.5?n(r,o)(a*2)/2:1-n(r,o)(a*-2+2)/2}},s["easeOutIn"+i]=function(r,o){return function(a){return a<.5?(1-n(r,o)(1-a*2))/2:(n(r,o)(a*2-1)+1)/2}}}),s}();function pf(s,e){if(_e.fnc(s))return s;var t=s.split("(")[0],i=Ny[t],n=Fy(s);switch(t){case"spring":return Uy(s,e);case"cubicBezier":return ku(aC,n);case"steps":return ku(oC,n);default:return ku(i,n)}}function By(s){try{var e=document.querySelectorAll(s);return e}catch{return}}function lh(s,e){for(var t=s.length,i=arguments.length>=2?arguments[1]:void 0,n=[],r=0;r<t;r++)if(r in s){var o=s[r];e.call(i,o,r,s)&&n.push(o)}return n}function ch(s){return s.reduce(function(e,t){return e.concat(_e.arr(t)?ch(t):t)},[])}function xg(s){return _e.arr(s)?s:(_e.str(s)&&(s=By(s)||s),s instanceof NodeList||s instanceof HTMLCollection?[].slice.call(s):[s])}function mf(s,e){return s.some(function(t){return t===e})}function gf(s){var e={};for(var t in s)e[t]=s[t];return e}function vd(s,e){var t=gf(s);for(var i in s)t[i]=e.hasOwnProperty(i)?e[i]:s[i];return t}function hh(s,e){var t=gf(s);for(var i in e)t[i]=_e.und(s[i])?e[i]:s[i];return t}function lC(s){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(s);return e?"rgba("+e[1]+",1)":s}function cC(s){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=s.replace(e,function(a,l,c,h){return l+l+c+c+h+h}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+n+","+r+","+o+",1)"}function hC(s){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(s),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,r=e[4]||1;function o(d,f,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?d+(f-d)*6*m:m<1/2?f:m<2/3?d+(f-d)*(2/3-m)*6:d}var a,l,c;if(i==0)a=l=c=n;else{var h=n<.5?n*(1+i):n+i-n*i,u=2*n-h;a=o(u,h,t+1/3),l=o(u,h,t),c=o(u,h,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+r+")"}function uC(s){if(_e.rgb(s))return lC(s);if(_e.hex(s))return cC(s);if(_e.hsl(s))return hC(s)}function ps(s){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(s);if(e)return e[1]}function dC(s){if(Wa(s,"translate")||s==="perspective")return"px";if(Wa(s,"rotate")||Wa(s,"skew"))return"deg"}function Md(s,e){return _e.fnc(s)?s(e.target,e.id,e.total):s}function In(s,e){return s.getAttribute(e)}function yf(s,e,t){var i=ps(e);if(mf([t,"deg","rad","turn"],i))return e;var n=jc.CSS[e+t];if(!_e.und(n))return n;var r=100,o=document.createElement(s.tagName),a=s.parentNode&&s.parentNode!==document?s.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+t;var l=r/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return jc.CSS[e+t]=c,c}function zy(s,e,t){if(e in s.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=s.style[e]||getComputedStyle(s).getPropertyValue(i)||"0";return t?yf(s,n,t):n}}function _f(s,e){if(_e.dom(s)&&!_e.inp(s)&&(!_e.nil(In(s,e))||_e.svg(s)&&s[e]))return"attribute";if(_e.dom(s)&&mf(rC,e))return"transform";if(_e.dom(s)&&e!=="transform"&&zy(s,e))return"css";if(s[e]!=null)return"object"}function ky(s){if(_e.dom(s)){for(var e=s.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,n;n=t.exec(e);)i.set(n[1],n[2]);return i}}function fC(s,e,t,i){var n=Wa(e,"scale")?1:0+dC(e),r=ky(s).get(e)||n;return t&&(t.transforms.list.set(e,r),t.transforms.last=e),i?yf(s,r,i):r}function xf(s,e,t,i){switch(_f(s,e)){case"transform":return fC(s,e,i,t);case"css":return zy(s,e,t);case"attribute":return In(s,e);default:return s[e]||0}}function vf(s,e){var t=/^(\*=|\+=|-=)/.exec(s);if(!t)return s;var i=ps(s)||0,n=parseFloat(e),r=parseFloat(s.replace(t[0],""));switch(t[0][0]){case"+":return n+r+i;case"-":return n-r+i;case"*":return n*r+i}}function Oy(s,e){if(_e.col(s))return uC(s);if(/\s/g.test(s))return s;var t=ps(s),i=t?s.substr(0,s.length-t.length):s;return e?i+e:i}function Mf(s,e){return Math.sqrt(Math.pow(e.x-s.x,2)+Math.pow(e.y-s.y,2))}function pC(s){return Math.PI*2*In(s,"r")}function mC(s){return In(s,"width")*2+In(s,"height")*2}function gC(s){return Mf({x:In(s,"x1"),y:In(s,"y1")},{x:In(s,"x2"),y:In(s,"y2")})}function Vy(s){for(var e=s.points,t=0,i,n=0;n<e.numberOfItems;n++){var r=e.getItem(n);n>0&&(t+=Mf(i,r)),i=r}return t}function yC(s){var e=s.points;return Vy(s)+Mf(e.getItem(e.numberOfItems-1),e.getItem(0))}function Hy(s){if(s.getTotalLength)return s.getTotalLength();switch(s.tagName.toLowerCase()){case"circle":return pC(s);case"rect":return mC(s);case"line":return gC(s);case"polyline":return Vy(s);case"polygon":return yC(s)}}function _C(s){var e=Hy(s);return s.setAttribute("stroke-dasharray",e),e}function xC(s){for(var e=s.parentNode;_e.svg(e)&&_e.svg(e.parentNode);)e=e.parentNode;return e}function Gy(s,e){var t=e||{},i=t.el||xC(s),n=i.getBoundingClientRect(),r=In(i,"viewBox"),o=n.width,a=n.height,l=t.viewBox||(r?r.split(" "):[0,0,o,a]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function vC(s,e){var t=_e.str(s)?By(s)[0]:s,i=e||100;return function(n){return{property:n,el:t,svg:Gy(t),totalLength:Hy(t)*(i/100)}}}function MC(s,e,t){function i(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return s.el.getPointAtLength(u)}var n=Gy(s.el,s.svg),r=i(),o=i(-1),a=i(1),l=t?1:n.w/n.vW,c=t?1:n.h/n.vH;switch(s.property){case"x":return(r.x-n.x)*l;case"y":return(r.y-n.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function vg(s,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Oy(_e.pth(s)?s.totalLength:s,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:_e.str(s)||e?i.split(t):[]}}function bf(s){var e=s?ch(_e.arr(s)?s.map(xg):xg(s)):[];return lh(e,function(t,i,n){return n.indexOf(t)===i})}function Wy(s){var e=bf(s);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:ky(t)}}})}function bC(s,e){var t=gf(e);if(/^spring/.test(t.easing)&&(t.duration=Uy(t.easing)),_e.arr(s)){var i=s.length,n=i===2&&!_e.obj(s[0]);n?s={value:s}:_e.fnc(e.duration)||(t.duration=e.duration/i)}var r=_e.arr(s)?s:[s];return r.map(function(o,a){var l=_e.obj(o)&&!_e.pth(o)?o:{value:o};return _e.und(l.delay)&&(l.delay=a?0:e.delay),_e.und(l.endDelay)&&(l.endDelay=a===r.length-1?e.endDelay:0),l}).map(function(o){return hh(o,t)})}function wC(s){for(var e=lh(ch(s.map(function(r){return Object.keys(r)})),function(r){return _e.key(r)}).reduce(function(r,o){return r.indexOf(o)<0&&r.push(o),r},[]),t={},i=function(r){var o=e[r];t[o]=s.map(function(a){var l={};for(var c in a)_e.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},n=0;n<e.length;n++)i(n);return t}function SC(s,e){var t=[],i=e.keyframes;i&&(e=hh(wC(i),e));for(var n in e)_e.key(n)&&t.push({name:n,tweens:bC(e[n],s)});return t}function TC(s,e){var t={};for(var i in s){var n=Md(s[i],e);_e.arr(n)&&(n=n.map(function(r){return Md(r,e)}),n.length===1&&(n=n[0])),t[i]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function AC(s,e){var t;return s.tweens.map(function(i){var n=TC(i,e),r=n.value,o=_e.arr(r)?r[1]:r,a=ps(o),l=xf(e.target,s.name,a,e),c=t?t.to.original:l,h=_e.arr(r)?r[0]:c,u=ps(h)||ps(l),d=a||u;return _e.und(o)&&(o=c),n.from=vg(h,d),n.to=vg(vf(o,h),d),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=pf(n.easing,n.duration),n.isPath=_e.pth(r),n.isPathTargetInsideSVG=n.isPath&&_e.svg(e.target),n.isColor=_e.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var Xy={css:function(s,e,t){return s.style[e]=t},attribute:function(s,e,t){return s.setAttribute(e,t)},object:function(s,e,t){return s[e]=t},transform:function(s,e,t,i,n){if(i.list.set(e,t),e===i.last||n){var r="";i.list.forEach(function(o,a){r+=a+"("+o+") "}),s.style.transform=r}}};function jy(s,e){var t=Wy(s);t.forEach(function(i){for(var n in e){var r=Md(e[n],i),o=i.target,a=ps(r),l=xf(o,n,a,i),c=a||ps(l),h=vf(Oy(r,c),l),u=_f(o,n);Xy[u](o,n,h,i.transforms,!0)}})}function EC(s,e){var t=_f(s.target,e.name);if(t){var i=AC(e,s),n=i[i.length-1];return{type:t,property:e.name,animatable:s,tweens:i,duration:n.end,delay:i[0].delay,endDelay:n.endDelay}}}function RC(s,e){return lh(ch(s.map(function(t){return e.map(function(i){return EC(t,i)})})),function(t){return!_e.und(t)})}function qy(s,e){var t=s.length,i=function(r){return r.timelineOffset?r.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,s.map(function(r){return i(r)+r.duration})):e.duration,n.delay=t?Math.min.apply(Math,s.map(function(r){return i(r)+r.delay})):e.delay,n.endDelay=t?n.duration-Math.max.apply(Math,s.map(function(r){return i(r)+r.duration-r.endDelay})):e.endDelay,n}var Mg=0;function CC(s){var e=vd(Dy,s),t=vd(ff,s),i=SC(t,s),n=Wy(s.targets),r=RC(n,i),o=qy(r,t),a=Mg;return Mg++,hh(e,{id:a,children:[],animatables:n,animations:r,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var gn=[],$y=function(){var s;function e(){!s&&(!bg()||!ve.suspendWhenDocumentHidden)&&gn.length>0&&(s=requestAnimationFrame(t))}function t(n){for(var r=gn.length,o=0;o<r;){var a=gn[o];a.paused?(gn.splice(o,1),r--):(a.tick(n),o++)}s=o>0?requestAnimationFrame(t):void 0}function i(){ve.suspendWhenDocumentHidden&&(bg()?s=cancelAnimationFrame(s):(gn.forEach(function(n){return n._onDocumentVisibility()}),$y()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function bg(){return!!document&&document.hidden}function ve(s){s===void 0&&(s={});var e=0,t=0,i=0,n,r=0,o=null;function a(x){var _=window.Promise&&new Promise(function(M){return o=M});return x.finished=_,_}var l=CC(s);a(l);function c(){var x=l.direction;x!=="alternate"&&(l.direction=x!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,n.forEach(function(_){return _.reversed=l.reversed})}function h(x){return l.reversed?l.duration-x:x}function u(){e=0,t=h(l.currentTime)*(1/ve.speed)}function d(x,_){_&&_.seek(x-_.timelineOffset)}function f(x){if(l.reversePlayback)for(var M=r;M--;)d(x,n[M]);else for(var _=0;_<r;_++)d(x,n[_])}function m(x){for(var _=0,M=l.animations,v=M.length;_<v;){var b=M[_],S=b.animatable,E=b.tweens,w=E.length-1,T=E[w];w&&(T=lh(E,function(ae){return x<ae.end})[0]||T);for(var F=Ln(x-T.start-T.delay,0,T.duration)/T.duration,L=isNaN(F)?1:T.easing(F),C=T.to.strings,U=T.round,N=[],W=T.to.numbers.length,k=void 0,G=0;G<W;G++){var X=void 0,ee=T.to.numbers[G],oe=T.from.numbers[G]||0;T.isPath?X=MC(T.value,L*ee,T.isPathTargetInsideSVG):X=oe+L*(ee-oe),U&&(T.isColor&&G>2||(X=Math.round(X*U)/U)),N.push(X)}var Z=C.length;if(!Z)k=N[0];else{k=C[0];for(var V=0;V<Z;V++){C[V];var j=C[V+1],ne=N[V];isNaN(ne)||(j?k+=ne+j:k+=ne+" ")}}Xy[b.type](S.target,b.property,k,S.transforms),b.currentValue=k,_++}}function g(x){l[x]&&!l.passThrough&&l[x](l)}function y(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(x){var _=l.duration,M=l.delay,v=_-l.endDelay,b=h(x);l.progress=Ln(b/_*100,0,100),l.reversePlayback=b<l.currentTime,n&&f(b),!l.began&&l.currentTime>0&&(l.began=!0,g("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,g("loopBegin")),b<=M&&l.currentTime!==0&&m(0),(b>=v&&l.currentTime!==_||!_)&&m(_),b>M&&b<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,g("changeBegin")),g("change"),m(b)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,g("changeComplete")),l.currentTime=Ln(b,0,_),l.began&&g("update"),x>=_&&(t=0,y(),l.remaining?(e=i,g("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,g("loopComplete"),g("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var x=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=x==="reverse",l.remaining=l.loop,n=l.children,r=n.length;for(var _=r;_--;)l.children[_].reset();(l.reversed&&l.loop!==!0||x==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(x,_){return jy(x,_),l},l.tick=function(x){i=x,e||(e=i),p((i+(t-e))*ve.speed)},l.seek=function(x){p(h(x))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,gn.push(l),u(),$y())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(x){var _=bf(x);Yy(_,l)},l.reset(),l.autoplay&&l.play(),l}function wg(s,e){for(var t=e.length;t--;)mf(s,e[t].animatable.target)&&e.splice(t,1)}function Yy(s,e){var t=e.animations,i=e.children;wg(s,t);for(var n=i.length;n--;){var r=i[n],o=r.animations;wg(s,o),!o.length&&!r.children.length&&i.splice(n,1)}!t.length&&!i.length&&e.pause()}function PC(s){for(var e=bf(s),t=gn.length;t--;){var i=gn[t];Yy(e,i)}}function LC(s,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?pf(e.easing):null,n=e.grid,r=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",h=_e.arr(s),u=parseFloat(h?s[0]:s),d=h?parseFloat(s[1]):0,f=ps(h?s[1]:s)||0,m=e.start||0+(h?u:0),g=[],y=0;return function(p,x,_){if(a&&(o=0),l&&(o=(_-1)/2),c&&(o=_-1),!g.length){for(var M=0;M<_;M++){if(!n)g.push(Math.abs(o-M));else{var v=l?(n[0]-1)/2:o%n[0],b=l?(n[1]-1)/2:Math.floor(o/n[0]),S=M%n[0],E=Math.floor(M/n[0]),w=v-S,T=b-E,F=Math.sqrt(w*w+T*T);r==="x"&&(F=-w),r==="y"&&(F=-T),g.push(F)}y=Math.max.apply(Math,g)}i&&(g=g.map(function(C){return i(C/y)*y})),t==="reverse"&&(g=g.map(function(C){return r?C<0?C*-1:-C:Math.abs(y-C)}))}var L=h?(d-u)/y:u;return m+L*(Math.round(g[x]*100)/100)+f}}function IC(s){s===void 0&&(s={});var e=ve(s);return e.duration=0,e.add=function(t,i){var n=gn.indexOf(e),r=e.children;n>-1&&gn.splice(n,1);function o(d){d.passThrough=!0}for(var a=0;a<r.length;a++)o(r[a]);var l=hh(t,vd(ff,s));l.targets=l.targets||s.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=_e.und(i)?c:vf(i,c),o(e),e.seek(l.timelineOffset);var h=ve(l);o(h),r.push(h);var u=qy(r,s);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}ve.version="3.2.1";ve.speed=1;ve.suspendWhenDocumentHidden=!0;ve.running=gn;ve.remove=PC;ve.get=xf;ve.set=jy;ve.convertPx=yf;ve.path=vC;ve.setDashoffset=_C;ve.stagger=LC;ve.timeline=IC;ve.easing=pf;ve.penner=Ny;ve.random=function(s,e){return Math.floor(Math.random()*(e-s+1))+s};class Sg extends df{constructor(e,t,i=0){if(super(ue.Enemy),this.id=i,this.walkDistance=ue.Gameplay.enemy.walk,this.runDistance=ue.Gameplay.enemy.run,this.lose=ue.Gameplay.enemy.lose,this.animationUpdate=!0,this.lastAnimation="idle",this.hitBoxes=[],this.attackDistance=2.5,this.previousAnimation="idle",this.distance=1/0,this.playerDead=!1,this.attacking=!1,this.screaming=!1,this.screamed=!1,this.crawling=!1,this.falling=!1,this.visible=!1,this.crawlTime=0,this.fallTime=0,this.hitTime=0,this.walkDistance=this.walkDistance<0?1/0:this.walkDistance,this.runDistance=this.runDistance<0?1/0:this.runDistance,e&&t){this.character=PE(e.scene),K.dispatch("Level::AddObject",this.object),K.dispatch("Enemy::Spawn",this.uuid,!0);const n=+!this.id;this.mesh=this.character,this.setMaterial(t,n),this.setTransform(e),this.setDefaultState(),this.toggleVisibility(!0)}}updateAnimation(e,t,i=.5){return super.updateAnimation(e,t,i)}toggleVisibility(e,t){if(!this.hitBoxes.length)return;const i=1e3+ +!e*1500,n=e?"easeInQuad":"easeOutQuad",r=t&&this.getAnimationDuration(t)+500||0;if(e)this.visible=!0;else{this.cancelHit(),this.removeHitBoxes(),clearTimeout(this.crawlTimeout);const o=r+i,a=t==="crawlDeath";setTimeout(this.dispose.bind(this),o);const l=Date.now()-this.crawlTime<3e3;a&&l&&this.animations.crawling.stop(),this.animations.idle.stopFading(),this.animations.walk.stopFading(),this.animations.run.stopFading(),this.animations.idle.stop(),this.animations.walk.stop(),this.animations.run.stop()}setTimeout(()=>{K.dispatch("Enemy::Active",e),this.animationUpdate=!1},+e*i),ve({changeBegin:this.disableShadow.bind(this),targets:this.material,opacity:+e,duration:i,easing:n,delay:r})}async loadCharacter(e){return this.load(e)}fallDeadAnimation(e){const t=Date.now()-this.fallTime<1500;this.falling&&t&&this.updateAnimation("Idle",e),this.toggleVisibility(!1,e)}headHit(e,t){if(!this.dead){if(this.stopSounds(),this.cancelAnimation(),this.hitting&&this.cancelHit(),!t&&this.life>e)return this.bodyHit(e);this.updateHitDamage(e)?this.falling&&this.fallDeadAnimation("headshot"):(this.toggleVisibility(!1,"headshot"),this.updateAnimation("Idle","headshot")),this.hitTime=Date.now(),this.running=!1}}bodyHit(e){if(this.dead)return;if(this.playHitSound(),this.cancelAnimation(),this.updateHitDamage(e)){this.dead&&this.fallDeadAnimation("death");return}if(this.dead){this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}else if(!this.hitting)this.previousAnimation=this.lastAnimation;else{this.cancelHit(),this.animations.idle.play(),this.currentAnimation=this.animations.idle;const i=this.previousAnimation==="run",n=this.lastAnimation==="run";if(this.running&&i&&n){if(this.updateHitDamage(this.life))return this.fallDeadAnimation("death");this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}}this.previousAnimation!=="hit"&&(this.animations.hit.time=this.hitStart,this.updateAnimation("Idle","hit",.1)),this.hitTimeout=setTimeout(()=>{if(this.dead||this.attacking)return;const i=this.previousAnimation==="hit",n=this.previousAnimation==="scream",r=this.previousAnimation.includes("Attack"),o=i||n||r;o||(this.animTimeout=this.updateAnimation(t,this.previousAnimation,.1)),this.hitTimeout=setTimeout(()=>{if(this.dead)return;this.hitting=!1;const a=this.distance<this.runDistance&&!this.running;this.distance<this.attackDistance?this.attack():a&&this.run()},+!o*100)},this.hitDuration-100);const t=this.animation;this.hitTime=Date.now(),this.hitting=!0}legHit(e){if(this.dead)return;this.playHitSound(),this.cancelAnimation();const t=Date.now(),i=t-this.hitTime,n=this.updateHitDamage(e);if(i<825&&i>600)return setTimeout(this.legHit.bind(this,e),825-i);if(this.hitting&&this.cancelHit(),n){this.dead&&this.falling&&this.toggleVisibility(!1,"crawlDeath");return}this.crawlTimeout=setTimeout(this.crawl.bind(this),2500),this.updateAnimation("Falling","falling",.1),this.hitTime=this.fallTime=t,this.running=!1,this.falling=!0,this.hitting=!0,this.moving=!1}crawl(e=3){this.dead||(this.crawlTime=Date.now(),this.crawlTimeout=this.updateAnimation("Crawling","crawling",e),this.crawling||(this.crawlAnimation=ve({z:this.rotation.z*(e*-.1),targets:this.character.position,duration:e*1e3,easing:"linear"})),this.attacking=!1,this.crawling=!0,this.falling=!1,this.hitting=!1,this.moving=!0)}cancelAnimation(){this.attacking&&(this.animations.softAttack.stopFading(),this.animations.hardAttack.stopFading(),this.animations.softAttack.stop(),this.animations.hardAttack.stop(),clearTimeout(this.hittingTimeout),clearTimeout(this.attackTimeout),clearTimeout(this.animTimeout),this.attacking=!1),this.screaming&&(this.animations.scream.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.runTimeout),this.animations.scream.stop(),this.screaming=!1)}playHitSound(){this.stopSounds(),!this.falling&&this.playSound("hit")}stopSounds(){this.screaming?this.stopSound("scream"):this.attacking&&(this.stopSound("hardAttack"),this.stopSound("softAttack"))}cancelHit(){this.animations.hit.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.hitTimeout),this.animations.hit.stop()}idle(){if(this.dead)return;const e=+!this.attacking*.4+.1;this.updateAnimation("Idle","idle",e),this.attacking=!1,this.hitting=!1,this.running=!1,this.moving=!1}walk(){this.dead||(this.updateAnimation("Walking","walk"),this.hitting=!1,this.running=!1,this.moving=!0)}scream(){this.dead||(this.cancelHit(),this.moving=!1,this.hitting=!1,this.screamed=!0,this.screaming=!0,this.attacking=!1,this.runTimeout=setTimeout(()=>{this.playSound("scream"),this.runTimeout=setTimeout(()=>this.distance<this.attackDistance?this.attack():this.run(),this.screamDuration-250)},this.screamStart*1e3),this.animTimeout=this.updateAnimation("Idle","scream",this.screamStart))}run(){if(this.dead||this.playerDead)return;const e=+(this.attacking||this.screaming)*.1;this.updateAnimation("Running","run",e+.1),this.attacking=!1,this.screaming=!1,this.hitting=!1,this.running=!0,this.moving=!0}attack(){if(this.dead)return;const e=this.life>50&&Math.random()<.5;let t="crawlAttack",i=.5,n=2200,r=250;this.crawling||(t=e?"hardAttack":"softAttack",r=e?1300:1e3,n=e?3e3:2500,setTimeout(this.playSound.bind(this,t,!0),+!e*350+400),i=.166),this.updateAnimation("Idle",t,i),this.hittingTimeout=setTimeout(()=>{const{strong:o,soft:a}=ue.Gameplay.damage.enemy;this.canAttack&&K.dispatch("Enemy::Attack",{position:this.position,damage:e?o:a})},r),this.attackTimeout=setTimeout(()=>{if(this.dead||this.crawling&&this.playerDead)return;const o=this.distance<(this.crawling?1.5:this.attackDistance);this.crawling?this.crawl(+o+1):o?this.idle():this.run()},i*1e3+n),this.screaming=!1,this.attacking=!0,this.screamed=!0,this.hitting=!1,this.running=!1,this.moving=!1}update(e,t){const i=t;return this.visible?(super.update(e),this.dead?this.position:(this.distance=this.object.position.distanceToSquared(i),this.character.lookAt(i.x,0,i.z),this.toggleAnimation(),this.position)):this.position}updateHitDamage(e){const t=this.falling||this.crawling,i=this.updateHealth(e);if(t){if(i&&this.crawling){let n;this.crawlAnimation?.completed||(this.character.position.z=this.rotation.z,this.crawlAnimation?.pause(),this.animations.falling.setEffectiveTimeScale(1).setEffectiveWeight(1).stopWarping().stopFading(),n=0),this.toggleVisibility(!1,"crawlDeath"),this.updateAnimation("Idle","crawlDeath",n)}}else return!1;return!0}toggleAnimation(){if(this.blockingAnimation)return;if(this.canAttack)return this.attack();if(this.crawling||!this.lose&&this.running)return;const e=this.distance>this.walkDistance,t=this.distance<this.runDistance,i=!e&&!t,n=!this.screamed&&t;this.lose&&this.moving&&e?this.idle():!this.moving&&i?this.walk():!(this.lose&&this.running)&&n&&this.scream()}dispose(){super.dispose(),this.removeHitBoxes(),this.character?.clear(),K.dispatch("Enemy::Death",this.id),K.dispatch("Enemy::Dispose",this.uuid,!0),K.dispatch("Level::RemoveObject",this.object)}setDefaultState(){const e=this.getAnimationDuration("scream");this.screamDuration=e-333.3332538604736|0,this.screamStart=(e-this.screamDuration)/1e3;const t=this.getAnimationDuration("hit");this.hitDuration=t-233.3333015441895|0,this.hitStart=(t-this.hitDuration)/1e3,this.animations.softAttack.clampWhenFinished=!0,this.animations.hardAttack.clampWhenFinished=!0,this.animations.crawlDeath.clampWhenFinished=!0,this.animations.headshot.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.falling.clampWhenFinished=!0,this.animations.scream.clampWhenFinished=!0,this.animations.hit.clampWhenFinished=!0,this.animations.softAttack.setLoop(Bi,0),this.animations.hardAttack.setLoop(Bi,0),this.animations.crawlDeath.setLoop(Bi,0),this.animations.headshot.setLoop(Bi,0),this.animations.death.setLoop(Bi,0),this.animations.falling.setLoop(Bi,0),this.animations.scream.setLoop(Bi,0),this.animations.hit.setLoop(Bi,0);const{idle:i}=this.animations;this.currentAnimation=i,this.createHitBoxes(),i.play()}createHitBoxes(){this.addHeadHitBox(),this.addBodyHitBox(),this.addLegsHitBox()}removeHitBoxes(){for(let e=this.hitBoxes.length;e--;)delete this.hitBoxes[e];this.hitBoxes.splice(0)}addHeadHitBox(){const e=this.character.getObjectByName("Head"),t=new At(new fs(15,10,22),Pn.HitBox.clone());t.position.y+=9.5,t.position.z+=2,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addBodyHitBox(){const e=this.character.getObjectByName("Spine"),t=new At(new My(38,95,40,2,25),Pn.HitBox.clone());t.position.y+=15,t.position.z+=2.5,t.position.x-=1,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addLegsHitBox(){const e=this.character.getObjectByName("RightUpLeg"),t=this.character.getObjectByName("LeftUpLeg"),i=this.character.getObjectByName("RightLeg"),n=this.character.getObjectByName("LeftLeg"),r=new At(new fs(16,50,15),Pn.HitBox.clone()),o=new At(new fs(10,50,10),Pn.HitBox.clone());o.userData.enemy=this.id,r.userData.enemy=this.id,o.position.y-=22.5,o.position.z-=2.5,r.position.y-=20;const a=r.clone(),l=r.clone(),c=o.clone(),h=o.clone();a.position.x+=1,l.position.x-=1,this.hitBoxes.push(a),this.hitBoxes.push(l),this.hitBoxes.push(c),this.hitBoxes.push(h),e.add(a),t.add(l),i.add(c),n.add(h)}disableShadow(){this.dead&&this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!1)})}get blockingAnimation(){return this.attacking||this.falling||this.screaming||this.playerDead||super.blockingAnimation}get material(){return this.mesh.children[0].children[0].material}get animation(){const e=this.running?"Running":this.moving?"Walking":"Idle";return this.falling?"Falling":this.crawling?"Crawling":e}set playerDeath(e){(this.playerDead=e)&&this.moving&&this.idle()}get hitBox(){return this.hitBoxes}get canAttack(){return!this.playerDead&&this.distance<(this.crawling?1.5:this.attackDistance)}get index(){return this.id}}function DC(s,e=s.length,t=0){for(;e;)t=mi(0,1)*e--|0,[s[e],s[t]]=[s[t],s[e]]}function Ky(s){return JSON.parse(JSON.stringify(s))}function FC(s){return s[ih(0,s.length-1)]}function qc(s){let e=s.length,t=1/0;for(;e--;)s[e]<t&&(t=s[e]);return t}function $o(s){let e=s.length,t=-1/0;for(;e--;)s[e]>t&&(t=s[e]);return t}const Zy=s=>{const e=Ky(s.bounds),{boundOffset:t}=ue.RandomCoords;e.unshift(e.pop());const i=e.slice(0,e.length/2).slice(4),n=e.slice(e.length/2).slice(4),r=s.minCoords[1]+t,o=s.maxCoords[1]-t,a=[s.portals[2],s.portals[3],s.portals[4],s.portals[5]],l=[s.portals[6],s.portals[7],s.portals[0],s.portals[1]],c=mi(r,o);if(c>l[0][1]){const m=qc(l.map(y=>y[0])),g=$o(l.map(y=>y[0]));return[mi(m,g),c]}if(c<a[0][1]){const m=qc(a.map(y=>y[0])),g=$o(a.map(y=>y[0]));return[mi(m,g),c]}let h,u,d,f;for(let m=0,g=i.length-1;m<g;m++)if(i[m][1]>c&&i[m+1][1]<c){d=i[m][0]+t,u=n[g-m][0]-t,h=i[m+1][0]+t,f=n[g-m-1][0]-t;break}return[mi(Math.max(d,h),Math.min(f,u))|0,c|0]},sa=class Si{static getRandomLevelCoords(e,t,i){Si.playerCoords.set(e,t);do i=Si.setRandomCoords();while(i<Si.distance);return DC(Si.coords),Si.levelCoords.toArray()}static addLevelCoords(e){return Si.coords.push(e)===Si.ammount}static setRandomCoords(){return Si.levelCoords.fromArray(FC(Si.coords)),Si.levelCoords.distanceToSquared(Si.playerCoords)}static fillRandomLevelCoords(){for(let e=Si.ammount;e--;)Si.coords.push(Zy({minCoords:Ve.minCoords,maxCoords:Ve.maxCoords,portals:Ve.portals,bounds:Ve.bounds}))}};sa.levelCoords=new Le;sa.playerCoords=new Le;sa.coords=[];sa.ammount=ue.RandomCoords.ammount;sa.distance=ue.RandomCoords.playerDistance**2;let Ic=sa;class UC{constructor(e){this.envMap=e,this.onHeadHit=this.headHit.bind(this),this.onBodyHit=this.bodyHit.bind(this),this.onLegHit=this.legHit.bind(this),this.onDeath=this.death.bind(this),this.positions=[],this.enemyPosition=new I,this.enemies=[],this.spawnedEnemies=0,new Sg().loadCharacter(e).then(t=>{this.enemyModel=t,this.spawnEnemy([0,0])}),this.addEvents()}addEvents(){K.add("Enemy::Death",this.onDeath),K.add("Hit::Head",this.onHeadHit),K.add("Hit::Body",this.onBodyHit),K.add("Hit::Leg",this.onLegHit)}spawnEnemy(e){const t=new Sg(this.enemyModel,this.envMap,this.spawnedEnemies++);this.enemyPosition.set(e[0],t.collider.position.y,e[1]),t.teleport(this.enemyPosition),this.positions.push(new I().copy(this.enemyPosition)),Ti.setCharacter(t.collider),this.enemies.push(t)}headHit(e){const{enemy:t,damage:i,headshot:n}=e.data,r=this.getEnemyIndex(t);this.enemies[r].headHit(i,n)}bodyHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].bodyHit(i)}legHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].legHit(i)}death(e){const t=this.getEnemyIndex(e.data);this.positions.splice(t,1),this.enemies.splice(t,1)}update(e,t){for(let i=this.enemies.length;i--;){const n=this.enemies[i].update(e,t);this.enemies[i].alive?this.positions[i].copy(n):this.positions[i].setScalar(NaN)}return this.positions}spawnMultiple(e,t,i=2){const n=this.enemies.length-1;i=Math.min(ue.Gameplay.maxEnemies-n,i);for(let r=i;r--;)this.spawnEnemy(Ic.getRandomLevelCoords(e,t))}getHitDirection(e,t,i){let n=Math.atan2(e.z-t.z,e.x-t.x);const r=C_(i);let o="Front";return Math.abs(r)>Qe.m075?(n=Math.abs(n),o=n<Qe.d4?"Right":n>Qe.m075?"Left":"Front"):r<-Qe.d4&&r>-Qe.m075?(n*=-1,o=n<-Qe.d4&&n>-Qe.m075?"Right":n<Qe.m075&&n>Qe.d4?"Left":"Front"):Math.abs(r)<Qe.d4?(n=Math.abs(n),o=n>Qe.m075?"Right":n<Qe.d4?"Left":"Front"):r<Qe.m075&&r>Qe.d4&&(n*=-1,o=n<Qe.m075&&n>Qe.d4?"Right":n<-Qe.d4&&n>-Qe.m075?"Left":"Front"),o}getEnemy(e){return this.enemies.find(t=>t.collider.uuid===e)}getEnemyIndex(e){return this.enemies.findIndex(t=>t.index===e)}removeEvents(){K.remove("Enemy::Death"),K.remove("Hit::Head"),K.remove("Hit::Body"),K.remove("Hit::Leg")}dispose(){for(let e=this.enemies.length;e--;)this.enemies[e].dispose(),delete this.enemies[e];this.enemyModel.scene.clear(),this.positions.splice(0),this.enemies.splice(0),this.removeEvents()}get colliders(){const e=[];for(let t=this.enemies.length;t--;)e.push(...this.enemies[t].hitBox);return e}set playerDead(e){for(let t=this.enemies.length;t--;)this.enemies[t].playerDeath=e}}const wf=class fr{constructor(e){this.player=e,this.paused=!0,this.move=el}static get moves(){return fr.directions}static get moving(){return fr.directions.includes(1)}static get idle(){return!fr.moving}static get runs(){return fr.running}static set runs(e){fr.running=e}get disabled(){return this.paused||!this.player.alive}set pause(e){this.paused=e}get movement(){return fr.moves.join("")}dispose(){this.paused=!0}};wf.directions=[0,0,0,0];wf.running=!1;let et=wf;const vc=14;function NC(){return typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)}class BC extends et{constructor(e){super(e),this.player=e,this.moveTouchId=null,this.lookTouchId=null,this.joyOrigin={x:0,y:0},this.lookLast={x:0,y:0},this.aimActive=!1,this.wheelTime=0,this.aimTime=0,this.move=el,this.root=document.createElement("div"),this.root.className="yazh-mobile-controls pn-allow-scroll",this.root.innerHTML=`
      <div class="yazh-joy-zone" data-zone="move"><div class="yazh-joy-knob"></div></div>
      <div class="yazh-look-zone" data-zone="look"></div>
      <div class="yazh-actions">
        <button type="button" data-action="run" aria-label="Run">RUN</button>
        <button type="button" data-action="reload" aria-label="Reload">R</button>
        <button type="button" data-action="weapon" aria-label="Switch weapon">W</button>
        <button type="button" data-action="aim" aria-label="Aim">AIM</button>
        <button type="button" data-action="shoot" aria-label="Shoot">FIRE</button>
      </div>`,document.body.appendChild(this.root),this.bindControls()}bindControls(){const e=this.root.querySelector('[data-zone="move"]'),t=this.root.querySelector('[data-zone="look"]'),i=this.root.querySelector(".yazh-joy-knob");e.addEventListener("touchstart",n=>this.onMoveStart(n,i),{passive:!1}),e.addEventListener("touchmove",n=>this.onMoveMove(n,i),{passive:!1}),e.addEventListener("touchend",n=>this.onMoveEnd(n,i),{passive:!1}),e.addEventListener("touchcancel",n=>this.onMoveEnd(n,i),{passive:!1}),t.addEventListener("touchstart",n=>this.onLookStart(n),{passive:!1}),t.addEventListener("touchmove",n=>this.onLookMove(n),{passive:!1}),t.addEventListener("touchend",n=>this.onLookEnd(n),{passive:!1}),t.addEventListener("touchcancel",n=>this.onLookEnd(n),{passive:!1}),this.root.querySelectorAll("[data-action]").forEach(n=>{const r=n.dataset.action;n.addEventListener("touchstart",o=>{o.preventDefault(),this.onAction(r,!0)},{passive:!1}),n.addEventListener("touchend",o=>{o.preventDefault(),this.onAction(r,!1)},{passive:!1})})}onMoveStart(e,t){if(this.disabled||this.moveTouchId!==null)return;const i=e.changedTouches[0];this.moveTouchId=i.identifier;const n=e.currentTarget.getBoundingClientRect();this.joyOrigin={x:n.left+n.width/2,y:n.top+n.height/2},this.updateMove(i.clientX,i.clientY,t),e.preventDefault()}onMoveMove(e,t){const i=[...e.changedTouches,...e.touches].find(n=>n.identifier===this.moveTouchId);i&&(this.updateMove(i.clientX,i.clientY,t),e.preventDefault())}onMoveEnd(e,t){[...e.changedTouches].some(i=>i.identifier===this.moveTouchId)&&(this.moveTouchId=null,et.moves[it.UP]=0,et.moves[it.DOWN]=0,et.moves[it.LEFT]=0,et.moves[it.RIGHT]=0,t.style.transform="translate(-50%, -50%)",this.player.idle(),this.move=el,e.preventDefault())}updateMove(e,t,i){if(this.disabled)return;let n=e-this.joyOrigin.x,r=t-this.joyOrigin.y;const o=Math.hypot(n,r)||1,a=52;o>a&&(n=n/o*a,r=r/o*a),i.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${r}px))`,et.moves[it.UP]=r<-vc?1:0,et.moves[it.DOWN]=r>vc?1:0,et.moves[it.LEFT]=n<-vc?1:0,et.moves[it.RIGHT]=n>vc?1:0;const l=this.movement;this.move!==l&&(et.runs&&et.moves[it.UP]?this.player.run(!0):this.player.move()),this.move=l}onLookStart(e){if(this.disabled||this.lookTouchId!==null)return;const t=e.changedTouches[0];this.lookTouchId=t.identifier,this.lookLast={x:t.clientX,y:t.clientY},e.preventDefault()}onLookMove(e){const t=[...e.changedTouches,...e.touches].find(r=>r.identifier===this.lookTouchId);if(!t||this.disabled)return;const i=t.clientX-this.lookLast.x,n=t.clientY-this.lookLast.y;this.lookLast={x:t.clientX,y:t.clientY},this.player.rotate(i/-80,n/320,.12),e.preventDefault()}onLookEnd(e){[...e.changedTouches].some(t=>t.identifier===this.lookTouchId)&&(this.lookTouchId=null,e.preventDefault())}onAction(e,t){if(!this.disabled)switch(e){case"shoot":t?this.player.startShooting():this.player.stopShooting();break;case"aim":t?(this.aimActive=!0,this.aimTime=Date.now(),this.player.startAiming(!1)):this.aimActive&&(this.aimActive=!1,clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const i=!!et.moves[it.UP];this.player.stopAiming(et.runs&&i),i&&et.runs?this.player.run(!0):this.player.move()},120));break;case"reload":t&&this.player.reload();break;case"weapon":{if(!t)return;const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());break}case"run":et.runs=t,t?this.player.run(!0):this.player.move();break}}dispose(){this.root.remove(),super.dispose()}}class zC extends Ws{constructor(){super(...arguments),this.noop=()=>{}}addEventListener(e,t,i){super.addEventListener(e,t)}dispatchEvent(e){e.stopPropagation=this.noop,e.preventDefault=this.noop,super.dispatchEvent(e)}removeEventListener(e,t,i){super.removeEventListener(e,t)}}const bd=new zC;class rs extends et{constructor(e){super(e),this.wheelTime=0,this.aimTime=0,this.events=Object.entries({contextmenu:this.onContextMenu.bind(this),mousewheel:this.onMouseWheel.bind(this),mousedown:this.onMouseDown.bind(this),mousemove:this.onMouseMove.bind(this),mouseup:this.onMouseUp.bind(this),keydown:this.onKeyDown.bind(this),keyup:this.onKeyUp.bind(this)}),this.addEventListeners()}addEventListeners(){const e=ue.worker?bd:document;for(const[t,i]of this.events)e.addEventListener(t,i,!1)}onContextMenu(e){if(!this.paused)return e.stopPropagation(),e.preventDefault(),!1}onMouseWheel(e){const t=Date.now();e.stopPropagation(),!this.disabled&&t>this.wheelTime&&(this.wheelTime=t+450,this.player.changeWeapon())}onMouseDown(e){if(e.preventDefault(),e.stopPropagation(),!this.disabled){if(e.button===Ba.LEFT)this.player.startShooting();else if(e.button===Ba.RIGHT){const t=this.move!==el;this.player.startAiming(t),this.aimTime=Date.now()}}}onMouseMove(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&this.player.rotate(e.movementX/-100,e.movementY/400,.15)}onMouseUp(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(e.button===Ba.LEFT?this.player.stopShooting():e.button===Ba.RIGHT&&(clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const t=!!et.moves[it.UP],i=et.runs&&t;this.player.stopAiming(i),i?this.player.run(!0):this.player.move()},Math.max(450-(Date.now()-this.aimTime),0))))}onKeyDown(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;switch(this.onShift(e.code,!0),e.code){case"KeyW":et.moves[it.UP]=1,et.moves[it.DOWN]=0;break;case"KeyD":et.moves[it.RIGHT]=1,et.moves[it.LEFT]=0;break;case"KeyS":et.moves[it.DOWN]=1,et.moves[it.UP]=0;break;case"KeyA":et.moves[it.RIGHT]=0,et.moves[it.LEFT]=1;break;default:return}const t=this.movement;this.move!==t&&this.player.move(),this.move=t}onKeyUp(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;switch(this.onShift(e.code,!1),e.code){case"KeyW":et.moves[it.UP]=0;break;case"KeyD":et.moves[it.RIGHT]=0;break;case"KeyS":et.moves[it.DOWN]=0;break;case"KeyA":et.moves[it.LEFT]=0;break;case"KeyQ":case"KeyE":{const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());return}case"KeyC":return this.player.changeCamera(!0);case"KeyV":return this.player.changeCamera(!1);case"KeyR":return this.player.reload();default:return}const t=this.movement;t===el?this.player.idle():this.move!==t&&this.player.move(),this.move=t}onShift(e,t){const i=t?!et.runs:et.runs;e==="ShiftLeft"&&i&&(this.player.run(t),et.runs=t)}removeEventListeners(){const e=ue.worker?bd:document;for(const[t,i]of this.events)e.removeEventListener(t,i,!1)}dispose(){this.removeEventListeners(),super.dispose()}}var it=(s=>(s[s.UP=0]="UP",s[s.RIGHT=1]="RIGHT",s[s.DOWN=2]="DOWN",s[s.LEFT=3]="LEFT",s))(it||{}),Ba=(s=>(s[s.LEFT=0]="LEFT",s[s.WHEEL=1]="WHEEL",s[s.RIGHT=2]="RIGHT",s))(Ba||{});const el="0000";var pr=(s=>(s.Pistol="pistol",s.Rifle="rifle",s))(pr||{});let kC=class extends df{constructor(){super(ue.Player),this.modelRotation=new Ei,this.lastAnimation="pistolIdle",this.equipRifle=!1,this.hasRifle=!1,this.reloading=!1,this.shooting=!1,this.aiming=!1,this.shootTime=0,this.idleTime=0,this.aimTime=0}async loadCharacter(e){const t=await this.load(e);this.hand=t.scene.getObjectByName("swatRightHand"),K.dispatch("Level::AddObject",this.object),this.currentAnimation=this.animations.pistolIdle,this.animations.rifleReload.clampWhenFinished=!0,this.animations.rifleAim.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.rifleReload.setLoop(Bi,1),this.animations.rifleAim.setLoop(Bi,1),this.animations.death.setLoop(Bi,1),Je.setTo(t.scene),this.currentAnimation.play(),this.rotate(-Math.PI,0)}rotate(e,t,i=.25){const n=t>0,r=this.mesh,o=+Je.isFPS,a=this.rotation.y;if(r.rotateOnWorldAxis(Oi.UP,e),this.running)return;const l=o*-.2-.2;i=Math.min(i+o*i,.25),(n&&a>=l||!n&&a<=i)&&r.rotateOnAxis(Oi.RIGHT,t)}idle(){const e=Date.now(),t=Math.max(350-(e-this.idleTime),0);if(this.blockingAnimation||t)return setTimeout(this.idle.bind(this),t);K.dispatch("Player::Aim",!this.equipRifle,!0),K.dispatch("Player::Run",!1,!0);const i=this.getWeaponAnimation("Idle");this.lastAnimation!==i&&(this.hasRifle&&this.rifle.updatePosition(0),this.running=this.moving=!1,Je.runAnimation(!1),this.idleTime=e,setTimeout(this.updateAnimation.bind(this,"Idle",i),+(this.lastAnimation===i)*100))}move(){if(this.blockingAnimation){this.reloading&&(this.moving=rs.moving);return}const e=this.movementAnimation,t=this.getWeaponAnimation(e);this.lastAnimation!==t&&(this.updateAnimation(e,t),this.running=!1,this.moving=e!=="Idle",this.moving&&Je.runAnimation(!1),this.hasRifle&&this.rifle.updatePosition(1),K.dispatch("Player::Run",!1,!0),K.dispatch("Player::Aim",!1,!0))}run(e){if(this.blockingAnimation||this.running===e)return;const t=this.getWeaponAnimation("Run");if(!e||this.lastAnimation===t)return this.running=!1,rs.moving?this.move():setTimeout(this.idle.bind(this),150);rs.moves[it.UP]&&(this.hasRifle&&this.rifle.updatePosition(1.5),K.dispatch("Player::Run",!0,!0),this.running=this.moving=!0,this.updateAnimation("Run",t),Je.runAnimation(!0),this.resetRotation(!0))}hit(e,t){if(this.dead||this.updateHealth(t)||this.hitting)return;this.aiming&&this.stopAiming(this.running);const i=this.getHitAnimation(e),n=+!this.equipRifle*100+1200;K.dispatch("Player::Aim",!1,!0),this.updateAnimation("Idle",i),clearTimeout(this.reloadTimeout),Je.isFPS&&(Je.headAnimation(e,n*.5),this.equipRifle&&this.weapon.toggleVisibility(0,n+100,0)),this.playSound("hit",!0),this.weapon.stopReloading(),this.toggleMesh(!1),setTimeout(()=>{if(this.hitting=!1,this.dead)return this.toggleMesh(!0);rs.runs?this.run(!0):this.move();const r=rs.idle&&!this.equipRifle;K.dispatch("Player::Aim",r,!0),setTimeout(this.toggleMesh.bind(this,!0),100)},n),this.reloading=!1,this.running=!1,this.hitting=!0,this.moving=!1}startAiming(e){if(this.blockingAnimation)return;this.weapon.aiming=this.aiming=!0,K.dispatch("Player::Run",!1,!0),Je.runAnimation(!1),Je.aimAnimation(!0,this.equipRifle),Je.updateNearPlane(!0,this.equipRifle);const t=this.equipRifle?"rifleAim":"pistolIdle";setTimeout(this.toggleMesh.bind(this,!0),300),this.aimTime=+this.equipRifle*Date.now(),clearTimeout(this.animTimeout),this.weapon.setAim(),this.lastAnimation!==t&&((this.equipRifle||e)&&(this.animTimeout=this.updateAnimation("Idle",t)),this.running=this.moving=!1),this.aimTimeout=setTimeout(()=>K.dispatch("Player::Aim",!Je.isFPS,!0),300+ +this.equipRifle*300),!this.equipRifle&&setTimeout(()=>{this.currentAnimation.paused=!0,this.setMixerTime(.5)},400)}stopAiming(e){if(this.reloading)return;this.equipRifle&&clearTimeout(this.aimTimeout);const t=Math.min(Date.now()-this.aimTime,400);K.dispatch("Player::Aim",!this.equipRifle,!0),!e&&Je.aimAnimation(!1,this.equipRifle,t),Je.isFPS&&e?Je.setNearPlane(+this.equipRifle*.185+.315,0):Je.updateNearPlane(!1,this.equipRifle),setTimeout(()=>this.weapon.aiming=this.aiming=!1,100),this.weapon.aiming=this.aiming=!1,this.currentAnimation.paused=!1,this.weapon.cancelAim(t),clearTimeout(this.animTimeout),this.toggleMesh(!1)}startShooting(e=Date.now()){if(this.equipRifle&&!this.aiming||this.moving||this.hitting||this.reloading||e-this.aimTime<500||e-this.shootTime<165)return;this.shooting=!0,this.shootTime=e;const t=this.weapon.shoot();t&&this.rotate(t.x,t.y),!this.equipRifle&&this.stopShooting()}stopShooting(){this.shooting=!1}reload(){const e=this.moving;if(this.blockingAnimation||this.weapon.full||!this.weapon.inStock)return;K.dispatch("Player::Run",!1,!0),this.updateAnimation("Idle","rifleReload");const t=+this.running*.02+.13;this.running=this.moving=!1,Je.setNearPlane(t,400),this.weapon.startReloading(),Je.runAnimation(!1),this.reloading=!0,this.toggleMesh(!0),this.reloadTimeout=setTimeout(()=>{rs.idle&&(e||this.moving)&&this.weapon.stopReloading(),this.weapon.addAmmo(0),this.reloading=!1},2e3),this.animTimeout=setTimeout(()=>{this.dead||(this.toggleMesh(!1),this.weapon.stopReloading(),Je.setNearPlane(.5,100),rs.runs?this.run(!0):this.move())},2500)}setPistol(e=this.weapon.walls,t){if(this.setWeapon(!1),t)this.pistol=t,this.weapon=this.pistol,this.weapon.walls=e,this.weapon.visible=!0,this.hand?.add(this.weapon.object);else{const i=this.weapon.targets;this.weapon=this.pistol,this.updateRiflePosition(!0),this.weapon.visible=!0,this.weapon.walls=e,this.rifle.toggle=!1,this.setTargets(i)}}setRifle(){this.rifle.walls=this.weapon.walls;const e=this.weapon.targets;this.weapon.visible=!1,this.rifle.toggle=!0,this.weapon=this.rifle,this.setTargets(e),this.setWeapon(!0)}setWeapon(e){K.dispatch("Weapon::Change",e);let t=e?this.lastAnimation.replace(pr.Pistol,pr.Rifle):this.lastAnimation.replace(pr.Rifle,pr.Pistol);!e&&!this.animations[t]&&(t=t.replace(/BackwardLeft|BackwardRight/gm,"Backward"),t=t.replace(/ForwardLeft|ForwardRight/gm,"Forward")),this.lastAnimation!==t&&this.updateAnimation(this.playerAnimation,t),this.equipRifle=e}setTargets(e){this.weapon.targets=e}changeCamera(e){if(!e)Je.changeShoulder(this.aiming,this.equipRifle);else if(!this.hitting){const t=this.equipRifle&&!this.aiming||!Je.isFPS&&this.aiming;Je.changeView(this.running,this.aiming,this.equipRifle),!Je.isFPS&&this.resetRotation(),this.toggleVisibility(),setTimeout(()=>{const i=!this.moving&&!t;K.dispatch("Player::Aim",i,!0)},+t*300)}}resetRotation(e=!1){if(e){const t=this.mesh,i=new Ei().setFromAxisAngle(Oi.RIGHT,this.rotation.y);this.modelRotation.copy(t.quaternion),this.modelRotation.multiply(i),ve({targets:t.quaternion,easing:"easeInOutQuad",...this.modelRotation,duration:500})}else if(this.rotation.y<-.2){const t=this.rotation.y+.2;this.mesh.rotateOnAxis(Oi.RIGHT,t)}}toggleMesh(e){Je.isFPS&&this.equipRifle&&this.meshes.forEach(t=>t.material.opacity=+e)}toggleVisibility(){const e=+Je.isFPS*250,t=+Je.isFPS*150+250;this.weapon.toggleVisibility(e,t);const i=!(Je.isFPS&&this.equipRifle&&!this.aiming);this.meshes.forEach(n=>{ve({targets:n.material,delay:e,easing:"linear",duration:100,opacity:0}),i&&setTimeout(()=>ve({targets:n.material,easing:"linear",duration:100,opacity:1}),t)})}changeWeapon(){if(!this.hasRifle||this.blockingAnimation)return;const e=!this.moving&&this.equipRifle;K.dispatch("Player::Aim",e,!0),this.toggleMesh(!0),this.equipRifle?this.setPistol():this.setRifle(),Je.updateNearPlane(this.aiming,this.equipRifle,this.running)}addRifle(e){this.rifle=e,this.rifle.toggle=!1,this.rifle.dummy.visible=!1,this.hand?.add(this.rifle.object),this.spine.add(this.rifle.dummy),this.updateRiflePosition(!0)}pickRifle(){this.rifle.dummy.visible=!this.equipRifle,this.updateRiflePosition(),this.rifle.addAmmo(),this.hasRifle||(this.rifle.addAmmo(0),this.hasRifle=!0)}updateRiflePosition(e=!1){const t=+this.running*.5+ +this.moving;e?this.rifle.append(t):this.rifle.updatePosition(t)}update(e){super.update(e),this.shooting&&this.startShooting()}updateAnimation(e,t,i=.1){return super.updateAnimation(e,t,i)}dispose(){clearTimeout(this.reloadTimeout),clearTimeout(this.animTimeout),clearTimeout(this.aimTimeout),this.pistol?.dispose(),this.weapon.dispose(),this.rifle.dispose(),delete this.pistol,delete this.hand,super.dispose()}die(){super.die();const e=+Je.isFPS*500;Je.isFPS&&this.changeCamera(!0),this.updateAnimation("Idle","death",.5),K.dispatch("Player::Death",!0),K.dispatch("Player::Aim",!1,!0),setTimeout(()=>K.dispatch("Game::Quit",void 0,!0),e+5e3),clearTimeout(this.reloadTimeout),Je.deathAnimation(e),this.weapon.stopReloading(),this.reloading=!1,this.shooting=!1,this.aiming=!1}getHitAnimation(e){return`${this.currentWeapon}${e}Hit`}getWeaponAnimation(e){return`${this.currentWeapon}${e}`}get blockingAnimation(){return this.aiming||this.hitting||this.reloading||super.blockingAnimation}get movementAnimation(){const e=rs.moves;let t=e[it.UP]?"Forward":e[it.DOWN]?"Backward":"";return!this.equipRifle&&!t?t=e[it.LEFT]?"Left":e[it.RIGHT]?"Right":t:this.equipRifle&&(t+=e[it.LEFT]?"Left":e[it.RIGHT]?"Right":""),t||"Idle"}get playerAnimation(){return this.lastAnimation.replace(this.currentWeapon,"")}get meshes(){return this.mesh.children[0].children[0].children}get location(){return{position:this.position,rotation:P_(Math.atan2(-this.rotation.x,this.rotation.z))}}get currentWeapon(){return this.equipRifle?pr.Rifle:pr.Pistol}get spine(){return this.mesh.children[0].children[1].children[0]}};class OC{constructor(){this.update=this.updateScreen.bind(this),this.callbacks=[],this.ratio=16/9,this.height=0,this.width=0,typeof window<"u"&&(this.root=document.documentElement.style,this.root.setProperty("--ratio",`${this.ratio}`),window.addEventListener("resize",this.update,!1),this.updateScreen())}updateScreen(){this.width=window.innerWidth,this.height=window.innerHeight,this.width/this.height<this.ratio?this.height=this.width/this.ratio:this.width=this.height*this.ratio,this.root.setProperty("--height",`${this.height}px`),this.root.setProperty("--width",`${this.width}px`);for(let e=this.callbacks.length;e--;)this.callbacks[e](this.width,this.height)}addResizeCallback(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}removeResizeCallback(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){window.removeEventListener("resize",this.update,!1),this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}const yi=new OC;class VC{constructor(e,t,i=0,n=1/0){this.ray=new Qd(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return wd(e,this,i,t),i.sort(Tg),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)wd(e[n],this,i,t);return i.sort(Tg),i}}function Tg(s,e){return s.distance-e.distance}function wd(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const n=s.children;for(let r=0,o=n.length;r<o;r++)wd(n[r],e,t,!0)}}class uh extends Hi{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const g=[],y=i/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function x(){const M=new I,v=new I;let b=0;const S=(t-e)/i;for(let E=0;E<=r;E++){const w=[],T=E/r,F=T*(t-e)+e;for(let L=0;L<=n;L++){const C=L/n,U=C*l+a,N=Math.sin(U),W=Math.cos(U);v.x=F*N,v.y=-T*i+y,v.z=F*W,u.push(v.x,v.y,v.z),M.set(N,S,W).normalize(),d.push(M.x,M.y,M.z),f.push(C,1-T),w.push(m++)}g.push(w)}for(let E=0;E<n;E++)for(let w=0;w<r;w++){const T=g[w][E],F=g[w+1][E],L=g[w+1][E+1],C=g[w][E+1];h.push(T,F,C),h.push(F,L,C),b+=6}c.addGroup(p,b,0),p+=b}function _(M){const v=m,b=new Le,S=new I;let E=0;const w=M===!0?e:t,T=M===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,y*T,0),d.push(0,T,0),f.push(.5,.5),m++;const F=m;for(let L=0;L<=n;L++){const U=L/n*l+a,N=Math.cos(U),W=Math.sin(U);S.x=w*W,S.y=y*T,S.z=w*N,u.push(S.x,S.y,S.z),d.push(0,T,0),b.x=N*.5+.5,b.y=W*.5*T+.5,f.push(b.x,b.y),m++}for(let L=0;L<n;L++){const C=v+L,U=F+L;M===!0?h.push(U,U+1,C):h.push(U+1,U,C),E+=3}c.addGroup(p,E,M===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sf extends uh{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Sf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Jy=300,Qy=0,e_=Xu[Qy],{length:HC}=Object.keys(e_),Dc=HC;var Ut=(s=>(s[s.LOW=Dc+0]="LOW",s[s.MEDIUM=Dc+1]="MEDIUM",s[s.HIGH=Dc+2]="HIGH",s))(Ut||{});const Sd=class za{constructor(){this.openDBConnection(this.getEnviromentSettings.bind(this))}updateVisualsStore(e,t=!0,i=e_){const n=e.transaction("Visuals","readwrite"),r=n.objectStore("Visuals");for(const o in i){const a=o;za.visuals.set(a,i[a]),r[t?"add":"put"](i[a],a).onerror=this.onQueryError.bind(this)}n.oncomplete=this.onTransactionComplete.bind(this,e,!1)}getEnviromentSettings(e,t=!1){const i=e.transaction("Visuals","readonly"),n=i.objectStore("Visuals");n.openCursor().onsuccess=r=>{const o=r.target.result;if(!o)return t?null:this.updateVisualsStore(e);const a=o.key;za.visuals.set(a,o.value),o.continue(),t=!0},i.oncomplete=this.onTransactionComplete.bind(this,e,!0)}updateVisualValues(e){this.openDBConnection(t=>this.updateVisualsStore(t,!1,e))}onTransactionComplete(e,t){t&&K.dispatch("Game::SettingsInit"),e.close()}onUpgradeNeeded(e){e.target.result.createObjectStore("Visuals")}openDBConnection(e){const t=indexedDB.open("YAZH");t.onerror=this.onRequestError.bind(this),t.onupgradeneeded=this.onUpgradeNeeded.bind(this),t.onsuccess=i=>{const n=i.target.result;e(n)}}resetVisualValues(e){this.updateVisualValues(Xu[e])}onRequestError(e){console.error("Settings DB Request Error:",e)}onQueryError(e){console.error("Settings DB Query Error:",e)}static getDefaultVisualValues(e=Qy){return new Map(Object.entries(Xu[e]))}static getVisualValue(e){return za.visuals.get(e)}static getVisualValues(){return za.visuals}};Sd.visuals=Sd.getDefaultVisualValues();let ot=Sd;const GC=10;class WC{constructor(e){this.config=e,this.width=1,this.height=.3,this.radius=.1,this.segments=8,this.rotation=new Ei,this.pivot=new ht().makeTranslation(0,this.width*-.5,0),this.acceleration=e.speed*Bo,this.speed=1/this.acceleration,this.createBullet()}async createBullet(){const e=await Ze.Loader.loadTexture("bullet.png");this.bullet=new At(new Sf(this.radius,this.height,this.segments),new of({map:e})),this.bullet.scale.setScalar(this.config.scale),ot.getVisualValue("bulletPath")&&this.bullet.add(await this.createPath())}async createPath(){const e=this.radius*1.2,t=await Ze.Loader.loadShader("main.vert"),i=await Ze.Loader.loadShader("shot/bullet.frag"),n=new At(new uh(e,e,this.width,this.segments,1,!0),new vn({uniforms:{color:{value:new ze(Et.WHITE)},traces:{value:0},time:{value:0}},fragmentShader:i,vertexShader:t,glslVersion:Xo,transparent:!0,depthWrite:!1,side:En}));return n.geometry.applyMatrix4(this.pivot),n.position.y-=this.height/2,n.scale.y=0,n}shoot(e,t){const i=this.config.position.z,{lifeTime:n}=this.config,r=this.bullet.clone(),o=+!t*.01+.01;return r.userData.direction=e.direction.clone(),r.userData.lifeTime=Date.now()+n,K.dispatch("Level::AddObject",r),Jt.getWorldQuaternion(this.rotation),r.userData.direction.y+=o,r.quaternion.copy(this.rotation),r.position.copy(e.origin),r.rotateX(-1.56),r.translateY(i),r}update(e){const t=e.children[0];if(e.position.addScaledVector(e.userData.direction,this.acceleration),e.rotateY(.5),!t)return;const i=t.material;t.scale.y>=GC?i.uniforms.time.value+=.1:i.uniforms.traces.value=t.scale.y+=this.acceleration}dispose(){const e=this.bullet.material,t=this.bullet.children[0];t?.material?.dispose(),this.bullet.geometry.dispose(),e.map?.dispose(),t?.geometry.dispose(),e.dispose(),this.bullet.clear()}}class XC extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ag=new ht,Td=new Qd,Mc=new Zo,bc=new I;class t_ extends xt{constructor(e=new Hi,t=new XC){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(n),Mc.radius+=r,e.ray.intersectsSphere(Mc)===!1)return;Ag.copy(n).invert(),Td.copy(e.ray).applyMatrix4(Ag);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const y=c.getX(m);bc.fromBufferAttribute(u,y),Eg(bc,y,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)bc.fromBufferAttribute(u,m),Eg(bc,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eg(s,e,t,i,n,r,o){const a=Td.distanceSqToPoint(s);if(a<t){const l=new I;Td.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Fc{constructor(e=OM){this.lerp=e,this.length=0,this.points=[]}addPoint(e,t){this.length=this.points.push([e,t])}getValue(e){let t=0;for(let n=0;n<this.length&&!(this.points[n][0]>=e);n++)t=n;const i=Math.min(this.length-1,t+1);return t===i?this.points[t][1]:this.lerp(this.points[t][1],this.points[i][1],(e-this.points[t][0])/(this.points[i][0]-this.points[t][0]))}dispose(){this.length=this.points.length=0}}const jC=Math.tan(Qe.d6)*2,qC=[0,0,0];class $C{constructor(e,t,i){this.config=e,this.smokeParticles=[],this.fireParticles=[],this.smokeAlpha=new Fc,this.smokeSize=new Fc,this.fireAlpha=new Fc,this.lightPower=0,this.geometry=new Hi,this.createFireLight(t),this.createParticleGeometry(),this.createParticles(t,i)}createFireLight(e){const{intensity:t,position:{x:i,y:n}}=this.config,r=+ot.getVisualValue("physicalLights")+1;this.light=new ey(Et.FIRE,t*(3-r),1,r),this.lightPower=this.light.power,this.light.position.set(i,n,0),this.light.castShadow=!0,this.light.power=0,e.add(this.light)}createParticleGeometry(){this.geometry.setAttribute("smokeAngle",new tt([],1)),this.geometry.setAttribute("smokeAlpha",new tt([],1)),this.geometry.setAttribute("smokeSize",new tt([],1)),this.geometry.setAttribute("fireAngle",new tt([],1)),this.geometry.setAttribute("fireSize",new tt([],1)),this.geometry.setAttribute("position",new tt([],3)),this.geometry.setAttribute("blend",new ou([],1)),this.fireAlpha.addPoint(0,0),this.fireAlpha.addPoint(.2,1),this.fireAlpha.addPoint(.5,1),this.fireAlpha.addPoint(1,0),this.smokeAlpha.addPoint(0,0),this.smokeAlpha.addPoint(.1,.1),this.smokeAlpha.addPoint(.5,.1),this.smokeAlpha.addPoint(1,0),this.smokeSize.addPoint(0,0),this.smokeSize.addPoint(.8,this.config.scale*.1),this.smokeSize.addPoint(1,this.config.scale*.12)}async createParticles(e,t){const i=await Ze.Loader.loadTexture(`${t}/smoke.png`),n=await Ze.Loader.loadTexture(`${t}/fire.png`),r=await Ze.Loader.loadShader("shot/fire.vert"),o=await Ze.Loader.loadShader("shot/fire.frag");this.material=new vn({blendDst:Yd,blendEquation:mr,blending:k0,fragmentShader:o,vertexShader:r,blendSrc:O0,glslVersion:Xo,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{smoke:{value:i},ratio:{value:null},fire:{value:n}}});const a=new t_(this.geometry,this.material);a.position.x=this.config.position.x,a.position.y=this.config.position.y,a.renderOrder=2,e.add(a)}addParticles(){this.addFireParticle(),this.addSmokeParticles()}addFireParticle(){const e=Math.random()*.1+.1,t=this.config.scale*(Math.random()*.1+.15);this.fireParticles.push({rotation:Math.random()*Qe.m2,currentSize:t,maxLife:e,life:e,size:t,blend:0,alpha:0})}addSmokeParticles(){const[e,t]=this.config.particles,i=ih(e,t);for(let n=i;n--;){const r=this.config.velocity*(i-n),o=Math.random()*.1+.4,a=this.config.scale*o;this.smokeParticles.push({rotation:Math.random()*Qe.m2,position:new I,currentSize:0,life:a,velocity:r,maxLife:a,blend:1,alpha:0})}}update(){this.updateParticles();const{length:e}=this.fireParticles;return this.light.power=e*this.lightPower,e?this.updateFireGeometry():this.updateSmokeGeometry(),!!(e||this.smokeParticles.length)}updateParticles(e=Bo){for(let t=this.fireParticles.length;t--;){const i=this.fireParticles[t];if((i.life-=.05)<=0)continue;const n=1-i.life/i.maxLife,r=this.fireAlpha.getValue(n);i.currentSize=i.size*r,i.alpha=r,i.rotation+=.025}this.fireParticles=this.fireParticles.filter(t=>t.life>0);for(let t=this.smokeParticles.length;t--;){const i=this.smokeParticles[t];if((i.life-=.01)<=0)continue;const n=1-i.life/i.maxLife;i.currentSize=this.smokeSize.getValue(n),i.alpha=this.smokeAlpha.getValue(n);const r=(t%2*2-1)*e,o=i.velocity*e;i.rotation+=r,i.position.y+=o,i.velocity-=o}this.smokeParticles=this.smokeParticles.filter(t=>t.life>0)}updateFireGeometry(){const e=[],t=[],i=[];for(let n=this.fireParticles.length;n--;){const r=this.fireParticles[n];e.push(r.rotation),i.push(r.currentSize),t.push(r.blend)}this.geometry.setAttribute("fireAngle",new tt(e,1)),this.geometry.setAttribute("fireSize",new tt(i,1)),this.geometry.setAttribute("position",new tt(qC,3)),this.geometry.setAttribute("blend",new ou(t,1)),this.geometry.attributes.fireAngle.needsUpdate=!0,this.geometry.attributes.fireSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}updateSmokeGeometry(){const e=[],t=[],i=[],n=[],r=[];for(let o=this.smokeParticles.length;o--;){const a=this.smokeParticles[o],{x:l,y:c,z:h}=a.position;t.push(a.rotation),r.push(a.currentSize),i.push(a.alpha),n.push(a.blend),e.push(l,c,h)}this.geometry.setAttribute("smokeAngle",new tt(t,1)),this.geometry.setAttribute("smokeAlpha",new tt(i,1)),this.geometry.setAttribute("smokeSize",new tt(r,1)),this.geometry.setAttribute("position",new tt(e,3)),this.geometry.setAttribute("blend",new ou(n,1)),this.geometry.attributes.smokeAngle.needsUpdate=!0,this.geometry.attributes.smokeAlpha.needsUpdate=!0,this.geometry.attributes.smokeSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}resize(e){this.material.uniforms.ratio.value=e/jC}dispose(){this.material.uniforms.smoke.value.dispose(),this.material.uniforms.fire.value.dispose(),this.smokeParticles.splice(0),this.fireParticles.splice(0),this.smokeAlpha.dispose(),this.smokeSize.dispose(),this.fireAlpha.dispose(),this.geometry.dispose(),this.material.dispose(),this.light.dispose()}}class YC extends Dn{constructor(e,t,i,n){super();const r=[],o=[],a=[],l=new D,c=new Ee;c.makeRotationFromEuler(i),c.setPosition(t);const h=new Ee;h.copy(c).invert(),u(),this.setAttribute("position",new hs(r,3)),this.setAttribute("normal",new hs(o,3)),this.setAttribute("uv",new hs(a,2));function u(){let g=[];const y=new D,p=new D,x=e.geometry,_=x.attributes.position,M=x.attributes.normal;if(x.index!==null){const v=x.index;for(let b=0;b<v.count;b++)y.fromBufferAttribute(_,v.getX(b)),p.fromBufferAttribute(M,v.getX(b)),d(g,y,p)}else for(let v=0;v<_.count;v++)y.fromBufferAttribute(_,v),p.fromBufferAttribute(M,v),d(g,y,p);g=f(g,l.set(1,0,0)),g=f(g,l.set(-1,0,0)),g=f(g,l.set(0,1,0)),g=f(g,l.set(0,-1,0)),g=f(g,l.set(0,0,1)),g=f(g,l.set(0,0,-1));for(let v=0;v<g.length;v++){const b=g[v];a.push(.5+b.position.x/n.x,.5+b.position.y/n.y),b.position.applyMatrix4(c),r.push(b.position.x,b.position.y,b.position.z),o.push(b.normal.x,b.normal.y,b.normal.z)}}function d(g,y,p){y.applyMatrix4(e.matrixWorld),y.applyMatrix4(h),p.transformDirection(e.matrixWorld),g.push(new Rg(y.clone(),p.clone()))}function f(g,y){const p=[],x=.5*Math.abs(n.dot(y));for(let _=0;_<g.length;_+=3){let M=0,v,b,S,E;const w=g[_+0].position.dot(y)-x,T=g[_+1].position.dot(y)-x,F=g[_+2].position.dot(y)-x,L=w>0,C=T>0,U=F>0;switch(M=(L?1:0)+(C?1:0)+(U?1:0),M){case 0:{p.push(g[_]),p.push(g[_+1]),p.push(g[_+2]);break}case 1:{if(L&&(v=g[_+1],b=g[_+2],S=m(g[_],v,y,x),E=m(g[_],b,y,x)),C){v=g[_],b=g[_+2],S=m(g[_+1],v,y,x),E=m(g[_+1],b,y,x),p.push(S),p.push(b.clone()),p.push(v.clone()),p.push(b.clone()),p.push(S.clone()),p.push(E);break}U&&(v=g[_],b=g[_+1],S=m(g[_+2],v,y,x),E=m(g[_+2],b,y,x)),p.push(v.clone()),p.push(b.clone()),p.push(S),p.push(E),p.push(S.clone()),p.push(b.clone());break}case 2:{L||(v=g[_].clone(),b=m(v,g[_+1],y,x),S=m(v,g[_+2],y,x),p.push(v),p.push(b),p.push(S)),C||(v=g[_+1].clone(),b=m(v,g[_+2],y,x),S=m(v,g[_],y,x),p.push(v),p.push(b),p.push(S)),U||(v=g[_+2].clone(),b=m(v,g[_],y,x),S=m(v,g[_+1],y,x),p.push(v),p.push(b),p.push(S));break}}}return p}function m(g,y,p,x){const _=g.position.dot(p)-x,M=y.position.dot(p)-x,v=_/(_-M);return new Rg(new D(g.position.x+v*(y.position.x-g.position.x),g.position.y+v*(y.position.y-g.position.y),g.position.z+v*(y.position.z-g.position.z)),new D(g.normal.x+v*(y.normal.x-g.normal.x),g.normal.y+v*(y.normal.y-g.normal.y),g.normal.z+v*(y.normal.z-g.normal.z)))}}}class Rg{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class KC{constructor(e,t){this.orientation=new Fn,this.rotation=new ht,this.position=new I,this.holes=[],this.origin=new I,this.scale=new I,this.surface=["defaultMaterial002_24","defaultMaterial002_39"],this.scale.setScalar(t*.5),Ze.Loader.loadTexture(`${e}/hole.png`).then(i=>{this.material=new vy({polygonOffsetFactor:-.1,polygonOffset:!0,transparent:!0,depthWrite:!1,depthTest:!0,map:i})})}show(e){if(this.surface.includes(e.object.name))return;this.position.copy(e.point),this.origin.copy(this.position),this.origin.add(e.face.normal),this.rotation.lookAt(this.origin,this.position,Oi.UP),this.orientation.setFromRotationMatrix(this.rotation),this.orientation.z=Math.random()*Qe.m2;const t=new YC(e.object,e.point,this.orientation,this.scale);this.holes.push(new At(t,this.material.clone()));const i=this.holes.length-1,n=this.holes[i];K.dispatch("Level::AddObject",n),ve({complete:this.remove.bind(this,i),targets:n.material,easing:"linear",duration:1e3,opacity:0,delay:5e3})}remove(e){if(!this.holes[e])return;const t=this.holes[e];t.material.map?.dispose(),t.material.dispose(),t.geometry.dispose(),delete this.holes[e],K.dispatch("Level::RemoveObject",t)}dispose(){for(let e=this.holes.length;e--;)this.remove(e);this.material.dispose(),this.holes.splice(0)}}class ZC{constructor(){this.paused=!0,this.lastTime=0,this.callbacks=[],this.onUpdate=this.update.bind(this)}add(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}update(e){this.raf=requestAnimationFrame(this.onUpdate);const t=e-(this.lastTime||0);for(let i=this.callbacks.length;i--;)this.callbacks[i](t,e);this.lastTime=e}remove(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){cancelAnimationFrame(this.raf),this.callbacks.length=0}set pause(e){this.paused!==e&&((this.paused=e)?cancelAnimationFrame(this.raf):this.raf=requestAnimationFrame(this.onUpdate))}}const Pt=new ZC;class i_{constructor(e){this.config=e,this.onUpdate=this.updateAimSign.bind(this),this.onShoot=this.updateBullets.bind(this),this.bullets=new Map,this.hits=[],this.raycaster=new VC,this.camera=new I,this.offset=new I,this.origin=new I,this.targets=[],this.walls=[],this.aimed=!1,this.aiming=!1,ot.getVisualValue("bullet")&&(this.bullet=new WC(e.bullet)),this.magazine=e.magazine,this.loadedAmmo=e.ammo,this.totalAmmo=e.ammo}async load(e){const{emissive:t=Et.BLACK,emissiveIntensity:i=1}=this.config;this.weapon=(await Ze.Loader.loadGLTF(this.config.model)).scene,this.weapon.traverse(r=>{const o=r,a=o.material;o.isMesh&&(o.castShadow=o.receiveShadow=!0,o.material=new of({emissiveIntensity:i,transparent:!0,map:a.map,side:xn,roughness:.75,metalness:.25,emissive:t,envMap:e}))}),this.weapon.position.copy(this.config.position),this.weapon.rotation.copy(this.config.rotation),this.weapon.scale.copy(this.config.scale);const n=this.weapon.clone();return this.fire=new $C(this.config.fire,this.weapon,this.config.textures),ot.getVisualValue("bulletHoles")&&(this.hole=new KC(this.config.textures,this.config.bullet.scale)),n}playSound(e,t){const{stop:i,pistol:n,delay:r}=t;i&&this.stopSound(e,n),K.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!0,sfx:e,delay:r,pistol:n},!0)}stopSound(e,t){K.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!1,sfx:e,pistol:t},!0)}updateRaycaster(e=!0,t=this.targets){this.camera.setFromMatrixPosition(Jt.matrixWorld),this.raycaster.ray.origin.copy(e?this.camera.clone().add(this.spread):this.camera),this.raycaster.ray.direction.copy(Oi.FORWARD).unproject(Jt).sub(this.camera).normalize(),this.hits.splice(0)&&this.raycaster.intersectObjects(t,!1,this.hits)}toggleAimSign(e=!1){K.dispatch("Weapon::Aim",e,!0),this.aimed=e}removeBullet(e){const t=this.bullets.get(e);t&&(t.clear(),this.bullets.delete(e),K.dispatch("Level::RemoveObject",t))}getEvent(e){return e?e===1?"Hit::Body":"Hit::Leg":"Hit::Head"}updateAimSign(){if(!this.aiming)return this.aimed&&this.toggleAimSign(!1);this.updateRaycaster(!1);const e=!!this.hits.length;this.aimed!==e&&this.toggleAimSign(e)}startReloading(){}stopReloading(){}resize(e){this.fire?.resize(e)}addAmmo(){}animateRecoil(){const{x:e,y:t}=this.weapon.position,i=this.recoil;return ve({targets:this.weapon.rotation,easing:"easeInOutSine",direction:"alternate",z:i.y/5,duration:50}),ve({targets:this.weapon.position,easing:"easeInOutSine",direction:"alternate",y:t-i.y*7.5,x:e-i.y*15,duration:50}),i}updateBullets(){!this.fire.update()&&Pt.remove(this.onShoot),this.bullets.forEach((e,t)=>{Date.now()<e.userData.lifeTime?this.bullet.update(e):this.removeBullet(t)})}shoot(){if(this.empty)return this.playSound("empty",{stop:!1});const e=this.target,t=this.targets[e],i=this.animateRecoil();let n;if(!this.bullets.size&&Pt.add(this.onShoot),K.dispatch("Player::Shoot",!0,!0),this.bullet){const{ray:h}=this.raycaster;n=this.bullet.shoot(h,this.aiming),this.bullets.set(n.uuid,n)}if(this.fire.addParticles(),this.loadedAmmo--,this.totalAmmo--,this.playSound("shoot",{stop:!0}),this.playSound("bullet",{stop:!1,delay:.5}),e<0)return this.updateRaycaster(!1,this.walls),this.hits.length&&this.hole?.show(this.hits[0]),i;const r=e%6,o=this.getEvent(r),a=!r&&Math.random()<this.config.headshot,l=a&&100||this.getDamage(r);n&&this.removeBullet(n.uuid);const{enemy:c}=t.userData;return K.dispatch(o,{enemy:c,damage:l,headshot:a}),i}dispose(){this.bullets.forEach((e,t)=>{const i=e.children[0],n=e.material;i.material.dispose(),n.map?.dispose(),e.geometry.dispose(),n.dispose(),i.geometry.dispose(),this.removeBullet(t)}),Pt.remove(this.onUpdate),Pt.remove(this.onShoot),this.bullet?.dispose(),this.targets.splice(0),this.walls.splice(0),this.hole?.dispose(),this.weapon.clear(),this.fire.dispose()}set visible(e){Pt[e?"add":"remove"](this.onUpdate),this.weapon.children[0].visible=e}get originOffset(){const{x:e,y:t}=this.config.bullet.position;return this.aiming?t:e}get spread(){let{x:e,y:t}=this.config.spread;const i=+!this.aiming*.5+.5;return e=mi(-e,e)*i,t=mi(-t,t)*i,this.offset.set(e,t-.003,0)}get recoil(){const{x:e,y:t}=this.config.recoil,i=+!this.aiming*.5+.5;return{x:mi(-e,e)*i,y:t*i}}get target(){return this.updateRaycaster(),this.weapon.getWorldPosition(this.origin),this.origin.y+=this.originOffset,this.raycaster.ray.origin.copy(this.origin),this.hits.length?this.targets.indexOf(this.hits[0].object):-1}get inStock(){return this.totalAmmo-this.loadedAmmo}get empty(){return!this.loadedAmmo}get full(){return this.loadedAmmo===this.magazine}get object(){return this.weapon}}class JC extends i_{constructor(e){super(ue.Pistol),this.position=ue.Pistol.position,this.rotation=ue.Pistol.rotation,this.damage=ue.Gameplay.damage.pistol,this.load(e)}playSound(e,t){super.playSound(e,{...t,pistol:!0})}stopSound(e){super.stopSound(e,!0)}setAim(){ve({targets:this.object.rotation,y:this.rotation.y+.015,x:this.rotation.x,easing:"linear",duration:200,delay:200,z:-.06}),ve({targets:this.object.position,x:this.position.x,z:this.position.z,easing:"linear",duration:200,delay:200,y:-4.45})}cancelAim(e){ve({targets:this.object.rotation,x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,easing:"linear",duration:e}),ve({targets:this.object.position,x:this.position.x,y:this.position.y,z:this.position.z,easing:"linear",duration:e})}toggleVisibility(e,t,i=100){this.object.children[0].children.forEach(n=>{const{material:r}=n;ve({targets:r,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>ve({targets:r,easing:"linear",opacity:1,duration:i}),t)})}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}dispose(){super.dispose()}}class QC extends i_{constructor(e){super(ue.Rifle),this.spinePosition=ue.Rifle.spinePosition,this.spineRotation=ue.Rifle.spineRotation,this.position=ue.Rifle.position,this.rotation=ue.Rifle.rotation,this.damage=ue.Gameplay.damage.rifle,this.maxStock=ue.Rifle.maxStock,this.appended=!1,this.spawned=!1,this.load(e)}async load(e){const t=await super.load(e);return this.spine=t.clone(),t.scale.copy(ue.Rifle.worldScale),K.dispatch("Level::AddObject",t),t.rotation.set(0,0,0),t.visible=!1,this.clone=t,t}setAim(){this.object.rotation.set(this.rotation.x-.1,Math.PI-.028,-.1),this.object.position.set(this.position.x,-1,-2)}cancelAim(){ve({targets:this.object.rotation,easing:"easeInOutSine",x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,duration:50,delay:50}),ve({targets:this.object.position,easing:"easeInOutSine",x:this.position.x,y:this.position.y,z:this.position.z,duration:50,delay:50})}toggleVisibility(e,t,i=100){const{material:n}=this.object.children[0];ve({targets:n,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>ve({targets:n,easing:"linear",opacity:1,duration:i}),t)}addAmmo(e=ue.Rifle.magazine){if(e){this.playSound("pick",{stop:!1});const t=Math.min(this.inStock+e,this.maxStock);this.totalAmmo=t+ +!this.empty*this.loadedAmmo}else{const t=Math.min(Math.min(this.magazine-this.loadedAmmo,this.magazine),this.totalAmmo);this.loadedAmmo+=t,K.dispatch("Weapon::Reload",{loaded:this.loadedAmmo,inStock:this.inStock,ammo:this.totalAmmo})}}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}startReloading(){this.object.position.set(this.position.x,this.position.y,0),this.object.rotation.set(this.rotation.x,this.rotation.y,0),this.playSound("reload",{stop:!0})}stopReloading(){!this.aiming&&this.reset()}update(e){if(!this.spawned)return;this.clone.rotation.y-=.025;const t=this.clone.position.distanceToSquared(e);this.inStock<this.maxStock&&t<6.25&&(K.dispatch("Player::PickRifle",this.clone),K.dispatch("Rifle::Pick",null,!0),this.clone.visible=!1,this.spawned=!1)}spawn(e){this.clone.position.set(e[0],1.75,e[1]),K.dispatch("Rifle::Spawn",e,!0),this.clone.visible=!0,this.spawned=!0}updatePosition(e){this.appended&&ve({targets:this.spine.position,duration:+!e*100,x:e*10-10,easing:"linear"})}append(e){this.spine.position.copy(this.spinePosition),this.spine.rotation.copy(this.spineRotation),this.appended=!0,this.updatePosition(e)}reset(){this.object.position.copy(this.position),this.object.rotation.copy(this.rotation),this.appended=!1}dispose(){this.clone.clear(),super.dispose()}set toggle(e){this.spine.visible=!e,this.visible=e}get onStage(){return this.spawned}get dummy(){return this.spine}}class ls{constructor(){this.fps=!1,this.runTimeout=0,this.shakeDuration=0,this.rightShoulder=!0,this.position=new I,this.shakePower=.025,this.clock=new sh,this.shakeAttenuation=1,this.onRunning=this.run.bind(this),this.fpRifleAim=new I(-.1541,1.524,.5);const e=yi.size.ratio;this.camera=new pi(45,e,+this.fps*.215+.1),this.camera.far=ue.Level.depth,this.setCamera(),this.updateState()}setCamera(){const e=this.getPosition(),t=+!this.fps*2.5+22.5;this.camera.rotation.set(0,Math.PI,0),this.camera.setFocalLength(t),this.camera.position.copy(e)}updateState(){const{aspect:e,near:t,far:i,fov:n}=this.camera;ls.state={matrix:this.camera.matrixWorld,aspect:e,near:t,far:i,fov:n}}getPosition(e=!1,t=!1,i=!1){if(this.fps&&t&&i)return this.fpRifleAim;const{idle:n,run:r,aim:o}=ue.Camera[this.fps?"fps":"tps"];return this.position.copy(e?r:t?o:n),this.position.x-=+(!this.fps&&this.rightShoulder&&t&&i)*.125,this.position.x*=+(!this.fps&&!this.rightShoulder)*-2+1,this.position}changeView(e,t,i){this.fps=!this.fps,this.updateNearPlane(t,i);const{x:n,y:r,z:o}=this.getPosition(e,t,i);ve({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:n,y:r,z:o})}updateNearPlane(e,t,i){const r=+(this.camera.near===.5)*-300+400,o=e?.03:this.fps?t?.5:.315:.1;this.fps&&i&&t&&(this.camera.position.z=.2),this.camera.near!==o&&this.setNearPlane(o,r)}setNearPlane(e,t){ve({complete:()=>this.camera.updateProjectionMatrix(),update:()=>this.camera.updateProjectionMatrix(),targets:this.camera,easing:"linear",duration:t,near:e})}changeShoulder(e,t){if(this.fps)return;let{x:i}=this.camera.position;this.rightShoulder=!this.rightShoulder,e&&t&&(i=ue.Camera.tps.aim.x,i-=+this.rightShoulder*.125,i*=+this.rightShoulder*-2+1),ve({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:-i})}aimAnimation(e,t,i=400){const{x:n,y:r,z:o}=this.getPosition(!1,e,t);e&&Pt.remove(this.onRunning),e&&ve({targets:this.camera.rotation,easing:"linear",duration:250,y:Math.PI}),ve({targets:this.camera.position,easing:"easeInOutQuad",delay:+e*100,duration:i,x:n,y:r,z:o})}headAnimation(e,t){const{x:i,y:n,z:r}=this.camera.position,{x:o,y:a,z:l}=this.camera.rotation,c={x:0,y:0,z:0},h={x:0,y:0,z:0};switch(e){case"Front":c.y=.2,h.x=-.2;break;case"Left":c.x=-.5,c.y=.5,h.x=.5,h.y=-1;break;case"Right":c.x=.36,c.y=-.2,h.x=.5,h.y=.55;break}ve({targets:this.camera.position,direction:"alternate",easing:"easeOutSine",duration:t,x:i+c.x,y:n+c.y,z:r+c.z}),ve({targets:this.camera.rotation,direction:"alternate",easing:"easeOutSine",duration:t,x:o+h.x,y:a+h.y,z:l+h.z})}shakeAnimation(e){if(this.shakeDuration=Math.max(e,0),this.shakeDuration){const t=this.clock.getDelta(),i=Oi.random().multiplyScalar(this.shakePower);setTimeout(()=>this.shakeAnimation(this.shakeDuration),t),this.shakeDuration-=t*this.shakeAttenuation,this.camera.position.add(i)}else this.camera.position.copy(this.getPosition())}runAnimation(e){if(e&&this.runTimeout)return;this.runTimeout=e?setTimeout(()=>Pt.add(this.onRunning),500):this.dispose();const t=this.getPosition(e),{x:i,y:n,z:r}=t;this.runDelta=0,!this.camera.position.equals(t)&&ve({targets:this.camera.position,easing:"easeOutQuad",duration:300,x:i,y:n,z:r})}run(){this.runDelta+=.25;const e=+this.fps+1,t=Math.sin(this.runDelta),i=Math.cos(this.runDelta/2);this.camera.position.y+=t*e/100,this.camera.rotation.y-=i*e/500}deathAnimation(e){const{x:t,z:i}=ue.Camera.tps.idle;ve({targets:this.camera.position,easing:"easeInOutQuad",duration:500,z:i-1,y:.75,delay:e,x:t})}setTo(e){e.add(this.camera)}resize(){this.camera.updateProjectionMatrix()}dispose(){return clearTimeout(this.runTimeout),Pt.remove(this.onRunning),0}static get config(){return ls.state}get object(){return this.camera}get isFPS(){return this.fps}}const n_=new ls,Jt=n_.object,Je=n_,Ou=new Ee;class dh{constructor(e){e=e||{},this.vertices={near:[new D,new D,new D,new D],far:[new D,new D,new D,new D]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return Ou.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(n){n.applyMatrix4(Ou)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(n){n.applyMatrix4(Ou);const r=Math.abs(n.z);i?n.z*=Math.min(t/r,1):n.multiplyScalar(Math.min(t/r,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new dh);t.length=e.length;for(let i=0;i<e.length;i++){const n=t[i];if(i===0)for(let r=0;r<4;r++)n.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)n.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[i-1]);if(i===e.length-1)for(let r=0;r<4;r++)n.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)n.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const Cg=new Ee,Vu=new dh,ts=new D,La=new Lt,Hu=[],Gu=[],Wu=new Ee,Pg=new Ee,eP=new D(0,1,0);class tP{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new D(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new dh,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new N0(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const n=this.lights[t].shadow.camera,r=this.frustums[t],o=r.vertices.near,a=r.vertices.far,l=a[0];let c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=r.vertices.far[0].z/(d-u.near),m=.25*Math.pow(f,2)*(d-u.near);h+=m}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":n(this.cascades,e.near,t,this.breaks);break;case"practical":r(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(o,a,l,c){for(let h=1;h<o;h++)c.push((a+(l-a)*h/o)/l);c.push(1)}function n(o,a,l,c){for(let h=1;h<o;h++)c.push(a*(l/a)**(h/o)/l);c.push(1)}function r(o,a,l,c,h){Hu.length=0,Gu.length=0,n(o,a,l,Gu),i(o,a,l,Hu);for(let u=1;u<o;u++)h.push(x0.lerp(Hu[u-1],Gu[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;Wu.lookAt(new D,this.lightDirection,eP),Pg.copy(Wu).invert();for(let i=0;i<t.length;i++){const n=this.lights[i],r=n.shadow.camera,o=(r.right-r.left)/this.shadowMapSize,a=(r.top-r.bottom)/this.shadowMapSize;Cg.multiplyMatrices(Pg,e.matrixWorld),t[i].toSpace(Cg,Vu);const l=Vu.vertices.near,c=Vu.vertices.far;La.makeEmpty();for(let h=0;h<4;h++)La.expandByPoint(l[h]),La.expandByPoint(c[h]);La.getCenter(ts),ts.z=La.max.z+this.lightMargin,ts.x=Math.floor(ts.x/o)*o,ts.y=Math.floor(ts.y/a)*a,ts.applyMatrix4(Wu),n.position.copy(ts),n.target.position.copy(ts),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,n=this.shaders;e.onBeforeCompile=function(r){const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),r.uniforms.CSM_cascades={value:t},r.uniforms.cameraNear={value:i.camera.near},r.uniforms.shadowFar={value:o},n.set(e,r)},n.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){const r=i.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new ct);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],n=this.breaks[t-1]||0;e[t].x=n,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}class Tf extends Hi{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new I,h=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class iP{constructor(){this.coords=Ve.portals,this.position=new I,this.player=new I,this.offset=new Le,this.triggers=this.coords.filter((e,t)=>!(t%2)).map((e,t,i)=>e[0]+(+(t<i.length/2)*-2+1)*-.1),this.createPortals()}async createPortals(){await this.createMaterial();for(let e=0,t=0;t<this.triggers.length;e+=2,t++){const i=this.coords[e][1],n=this.coords[e+1][1],r=Math.abs(i-n)/2,o=+(t<2)*2-1,a=r+.52,l=new At(new Tf(a,32,0,Math.PI),this.material);l.renderOrder=1,l.position.x=this.triggers[t],l.rotation.y=Qe.d2*o,l.position.z=i+r*-o,l.position.z+=ue.Level.portalsOffset[t],K.dispatch("Level::AddObject",l)}}async createMaterial(){const e=await Ze.Loader.loadShader("portal/main.vert"),t=await Ze.Loader.loadShader("portal/main.frag"),i=ot.getVisualValue("volumetricFog"),n=new ze(Et.PORTAL),r=new ze(Et.MOON),o=ue.Level.fogDensity*(+!i*4+1);return this.material=new vn({uniforms:{fogColor:{value:new ze(Et.FOG)},backgroundColor:{value:n},spikesColor:{value:r},fogDensity:{value:o},deltaTime:{value:0}},fragmentShader:t,vertexShader:e,glslVersion:Xo,transparent:!0}),this.material.defines={VOLUMETRIC_FOG:i},this.material.fog=ot.getVisualValue("fog"),this.material}topPortalArea(){if(this.player.z>this.coords[1][1]){if(this.player.x<=this.triggers[0])return this.offset.set(this.coords[0][0]-this.player.x,this.coords[0][1]-this.player.z),this.updatePosition(2,3),!0;if(this.player.x>=this.triggers[3])return this.offset.set(this.player.x-this.coords[6][0],this.coords[7][1]-this.player.z),this.updatePosition(4),!0}return!1}bottomPortalArea(){if(this.player.z<this.coords[2][1]){if(this.player.x<=this.triggers[1])return this.offset.set(-(this.coords[2][0]-this.player.x),this.coords[2][1]-this.player.z),this.updatePosition(0,1),!0;if(this.player.x>=this.triggers[2])return this.offset.set(this.player.x-this.coords[4][0],this.coords[5][1]-this.player.z),this.updatePosition(6),!0}return!1}updatePosition(e,t=e){const i=this.coords[e][0],n=Math.sign(i)*-.3;this.position.set(this.coords[e][0]-this.offset.x+n,this.player.y,this.coords[t][1]+this.offset.y)}update(e){this.material.uniforms.deltaTime.value+=e/10}portalPassed(e){return this.player.copy(e),this.topPortalArea()||this.bottomPortalArea()}setFogUniforms(e){this.material.onBeforeCompile=e}dispose(){this.material?.dispose(),this.triggers.splice(0)}get playerPosition(){return this.position}}const Lg=Math.tan(Qe.d3)*3;class nP{constructor(e,t,i){this.renderer=e,this.scene=t,this.worker=i,this.minCoords=Ve.minCoords.map(n=>n-5),this.maxCoords=Ve.maxCoords.map(n=>n+5),this.geometry=new Hi,this.delta=0,this.createRenderTargets(),this.createWorkerLoop(),this.createParticles()}createRenderTargets(){if(!ot.getVisualValue("softParticles"))return;const{width:e,height:t}=this.renderer.domElement,i=new gy(e,t,Mr);this.renderTargets=[new ms(e,t),new ms(e,t)],i.format=Rr,i.minFilter=kt,i.magFilter=kt,this.renderTargets.forEach(n=>{n.depthTexture=i.clone(),n.texture.minFilter=kt,n.texture.magFilter=kt,n.texture.generateMipmaps=!1,n.texture.format=Ai,n.stencilBuffer=!0,n.depthBuffer=!0})}async createParticles(){const{width:e,height:t}=this.renderer.domElement,i=await Ze.Loader.loadShader("rain/main.vert"),n=await Ze.Loader.loadShader("rain/main.frag");this.material=new vn({uniforms:{soft:{value:ot.getVisualValue("softParticles")},screenSize:{value:new Le(e,t)},color:{value:new ze(Et.RAIN)},ratio:{value:t/Lg},near:{value:Jt.near},far:{value:Jt.far},dropSize:{value:3},diffuse:{value:null},depth:{value:null}},blending:td,fragmentShader:n,vertexShader:i,glslVersion:Xo,transparent:!0,depthWrite:!1});const r=this.material.uniforms;this.drops=new t_(this.geometry,this.material),this.renderTargets&&(r.depth.value=this.renderTargets[0].depthTexture),Promise.all(ue.Level.rain.map(Ze.Loader.loadTexture.bind(Ze.Loader))).then(o=>r.diffuse.value=o),this.drops.frustumCulled=!1,this.drops.renderOrder=2,this.scene.add(this.drops)}createWorkerLoop(){this.worker?.add("Rain::UpdateParticles",e=>this.updateParticleGeometry(e.data),{minCoords:this.minCoords,maxCoords:this.maxCoords}),this.worker?.post("Rain::UpdateParticles",{camera:Jt.position,delta:this.delta})}update(e){if(this.delta=e,!this.worker&&this.updateParticles(),this.renderTargets){const t=this.renderTargets[0];this.material.uniforms.depth.value=t.depthTexture,this.material.uniforms.near.value=Jt.near,this.material.uniforms.far.value=Jt.far,this.renderer.setRenderTarget(this.renderTargets[1]),this.renderer.render(this.scene,Jt),this.renderTargets[0]=this.renderTargets[1],this.renderTargets[1]=t,this.renderer.setRenderTarget(null)}}updateParticles(){const e=this.minCoords,t=this.maxCoords;this.updateParticleGeometry(s_({camera:Jt.position,minCoords:e,maxCoords:t,delta:this.delta}))}updateParticleGeometry(e){this.geometry.setAttribute("position",new tt(e[0],3)),this.geometry.setAttribute("angle",new tt(e[1],1)),this.geometry.setAttribute("alpha",new tt(e[2],1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.worker?.post("Rain::UpdateParticles",{camera:Jt.position,delta:this.delta})}resize(e,t){this.material&&(this.material.uniforms.ratio.value=t/Lg,this.material.uniforms.screenSize.value.set(e,t)),this.renderTargets?.forEach(i=>{i.depthTexture.needsUpdate=!0,i.texture.needsUpdate=!0,i.setSize(e,t)})}dispose(){if(this.material){const e=this.material.uniforms.diffuse;this.material.uniforms.depth.value?.dispose(),e.value?.forEach(i=>i.dispose())}this.worker?.remove("Rain::UpdateParticles"),this.renderTargets?.forEach(e=>{e.depthTexture.dispose(),e.texture.dispose(),e.dispose()}),this.minCoords.splice(0),this.maxCoords.splice(0),this.material?.dispose(),this.geometry.dispose(),this.drops?.clear(),this.delta=0}}class Af{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Af(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class sP extends Af{constructor(e){super(Et.FOG,ue.Level.fogDensity*(+!e*4+1)),this.volumetric=e,this.shaders=[],this.materials=0,this.time=0,this.volumetric&&(this.loadShaders(),ot.getVisualValue("volumetricFog")&&Ze.Loader.loadTexture(ue.Level.fog).then(t=>this.noise=t))}async loadShaders(){const e=await Ze.Loader.loadShader("fog/pars.frag"),t=await Ze.Loader.loadShader("fog/pars.vert"),i=await Ze.Loader.loadShader("fog/main.frag"),n=await Ze.Loader.loadShader("fog/main.vert");Ie.fog_pars_fragment=e,Ie.fog_pars_vertex=t,Ie.fog_fragment=i,Ie.fog_vertex=n}setShaderUniforms(e){e.uniforms.noise={value:this.noise},e.uniforms.fogTime={value:0},this.shaders.push(e),this.materials=this.shaders.length}update(e){if(this.volumetric){this.time+=e*.025;for(let t=0;t<this.materials;t++)this.shaders[t].uniforms.fogTime.value=this.time}}dispose(){this.volumetric&&(this.shaders.splice(0),this.noise?.dispose(),this.materials=0)}get setUniforms(){return this.setShaderUniforms.bind(this)}}class Ve{constructor(e,t,i){this.objects=[],this.portals=new iP,this.clouds=new os,this.scene=new rf,this.physicalLights=ot.getVisualValue("physicalLights");const n=ot.getVisualValue("raindrops");this.renderer=new sf({powerPreference:"high-performance",preserveDrawingBuffer:n,antialias:!0,canvas:e}),K.add("Level::RemoveObject",this.removeGameObject.bind(this)),K.add("Level::AddObject",this.addGameObject.bind(this)),this.pmrem=new ud(this.renderer),this.createColliders(),this.createEnvironment(i),this.createRenderer(t)}createColliders(){const{position:e,height:t,sidewalkHeight:i}=ue.Level;Ti.createGround(Ve.minCoords,Ve.maxCoords),Ti.createBounds({borders:Ve.bounds,y:e.y,height:t},{borders:ue.Level.sidewalk,y:i*.5,height:i})}async createEnvironment(e){const t=ot.getVisualValue("fog"),i=ot.getVisualValue("raining"),n=ot.getVisualValue("lighting"),r=t&&ot.getVisualValue("volumetricFog"),o=await this.createSkybox(ue.Level.skybox),a=await this.loadLevel(ue.Level.model);a.position.copy(ue.Level.position),a.scale.copy(ue.Level.scale),n&&this.scene.add(this.clouds.flash),i&&(this.rain=new nP(this.renderer,this.scene,e)),t?(this.fog=new sP(r),this.scene.fog=this.fog,this.scene.background=new ze(Et.FOG),r&&this.portals.setFogUniforms(this.fog.setUniforms)):this.clouds.sky&&this.scene.add(this.clouds.sky),this.createLights(),a.traverse(c=>{const h=c,u=h.material;h.isMesh&&(u.opacity=1,u.alphaTest=1,u.side=xn,u.envMap=o,h.renderOrder=1,this.objects.push(h),h.receiveShadow=!0,this.csm?.setupMaterial(u),this.fog&&r&&(u.onBeforeCompile=this.fog.setUniforms))});const l=this.getSceneEnvMap();K.dispatch("Level::EnvMap",l)}async loadLevel(e){const t=await Ze.Loader.loadGLTF(e);return this.scene.add(t.scene),t.scene}async createSkybox(e){const t=await Ze.Loader.loadCubeTexture(e);return t.colorSpace=De,ot.getVisualValue("fog")||(this.scene.background=t),this.pmrem.compileCubemapShader(),this.pmrem.fromCubemap(t).texture}createLights(){const t=.25+ +!this.physicalLights*.1,i=new I(.925,-1.875,-1).normalize();this.scene.add(new yy(Et.WHITE,.2)),this.csm=new tP({mode:"logarithmic",maxFar:Jt.far*10,lightFar:Jt.far,lightDirection:i,lightIntensity:t,camera:Jt,parent:this.scene,cascades:4}),this.csm.lights.forEach(n=>n.color.set(Et.MOON)),this.csm.fade=!0}getSceneEnvMap(){return this.pmrem.fromScene(this.scene,0,Jt.near,Jt.far).texture}createRenderer(e){const t=+!this.physicalLights*.25+.25;this.renderer.debug.checkShaderErrors=!1,this.renderer.useLegacyLights=this.physicalLights,this.renderer.toneMapping=H0,this.renderer.outputColorSpace=De,this.renderer.shadowMap.type=z0,this.renderer.setClearColor(Et.BLACK,0),this.renderer.toneMappingExposure=t,this.renderer.setPixelRatio(e),this.renderer.shadowMap.enabled=!0}removeGameObject(e){const t=e.data;this.scene.remove(t)}addGameObject(e){const t=e.data;this.scene.add(t)}render(e){this.renderer.render(this.scene,Jt),this.portals.update(e),this.rain?.update(e),this.fog?.update(e),this.clouds.update(),this.csm?.update()}resize(e,t){this.renderer.setSize(e,t,!1),this.rain?.resize(e,t),this.csm?.updateFrustums()}outOfBounds(e){return this.portals.portalPassed(e)&&this.portals.playerPosition||null}dispose(){for(this.fog?.dispose(),this.csm?.dispose(),this.rain?.dispose(),this.pmrem.dispose(),this.clouds.dispose(),this.portals.dispose(),this.renderer.dispose(),this.csm?.lights.forEach(e=>e.dispose()),K.remove("Level::AddObject"),K.remove("Level::RemoveObject");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.background instanceof Jo&&this.scene.background.dispose()}static get maxCoords(){return[$o(Ve.bounds.map(e=>e[0])),$o(Ve.bounds.map(e=>e[1]))]}static get minCoords(){return[qc(Ve.bounds.map(e=>e[0])),qc(Ve.bounds.map(e=>e[1]))]}static get portals(){return ue.Level.portals}static get bounds(){return ue.Level.bounds}static get center(){return new I((Ve.maxCoords[0]+Ve.minCoords[0])/2,0,(Ve.maxCoords[1]+Ve.minCoords[1])/2)}static get size(){return new Le(Ve.maxCoords[0]-Ve.minCoords[0],Ve.maxCoords[1]-Ve.minCoords[1])}set pause(e){this.clouds.pause=e}get walls(){return this.objects}}class os{constructor(){this.count=ot.getVisualValue("clouds"),this.staticClouds=!ot.getVisualValue("dynamicClouds"),this.isLighting=ot.getVisualValue("lighting"),this.useFog=ot.getVisualValue("fog"),this.onShowLighting=this.showLighting.bind(this),this.onHideLighting=this.hideLighting.bind(this),this.rotation=new Fn(Qe.d2,0,0),this.matrix=new ht,this.paused=!0,this.isLighting&&this.createLighting(),this.createClouds()}createLighting(){const e=+(!this.useFog&&ot.getVisualValue("physicalLights"))+1;this.lighting=new ey(Et.BLUE,10,os.height,e),this.lighting.position.set(0,os.height,0),this.lighting.castShadow=!0,this.lighting.power=0}startLighting(){this.timeout=setTimeout(this.onShowLighting,1e3*(Math.random()*15+15))}showLighting(){this.updateLightingPosition(),this.lighting.power=100+Math.random()*150,setTimeout(this.onHideLighting,Math.random()*400+100),K.dispatch("SFX::Thunder",this.lighting.position,!0)}updateLightingPosition(){this.clouds?(this.clouds.getMatrixAt(ih(0,this.count-1),this.matrix),this.lighting.position.setFromMatrixPosition(this.matrix)):this.lighting.position.set(mi(Ve.minCoords[0],Ve.maxCoords[0]),os.height/ue.Level.height,mi(Ve.minCoords[1],Ve.maxCoords[1])),this.lighting.position.y-=Math.random()*(this.lighting.position.y/4)}hideLighting(){!this.paused&&this.startLighting(),this.lighting.power=0}async createClouds(){if(!this.count||!this.isLighting&&this.useFog)return;const e=new Jd(os.height,16,16,0,Math.PI);e.rotateX(-Qe.d2);const t=new I,i=new xt;this.clouds=new FM(new th(os.height,os.height),new bM({transparent:!0,depthWrite:!1,opacity:.25}),this.count);const n=new xv(new At(e.toNonIndexed())).build();for(let r=0;r<this.count;r++)n.sample(t),i.position.copy(t),i.lookAt(Oi.DOWN),i.updateMatrix(),this.clouds.setMatrixAt(r,i.matrix);this.clouds.position.copy(Ve.center),this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.material.map=await Ze.Loader.loadTexture(ue.Level.cloud)}update(){if(!(this.staticClouds||!this.clouds)){for(let e=0;e<this.count;e++){const t=e%2*2-1;this.clouds.getMatrixAt(e,this.matrix);const i=this.matrix.clone();this.rotation.setFromRotationMatrix(i),this.rotation.z+=Math.random()*t*.002,this.matrix.makeRotationFromEuler(this.rotation),this.matrix.copyPosition(i),this.clouds.setMatrixAt(e,this.matrix)}this.clouds.instanceMatrix.needsUpdate=!0}}dispose(){const e=this.clouds?.material;clearTimeout(this.timeout),e?.map?.dispose(),this.lighting?.dispose(),this.clouds?.dispose(),e?.dispose()}static get height(){return Math.max(Ve.size.x,Ve.size.y)}set pause(e){(this.paused=e)?clearTimeout(this.timeout):this.isLighting&&this.startLighting()}get sky(){return this.clouds}get flash(){return this.lighting}}let zs=[];const rl=new Fc,Ad=new I;let Ed=0;rl.addPoint(0,0);rl.addPoint(.5,0);rl.addPoint(.8,.5);rl.addPoint(1,.5);const s_=s=>{const{camera:e,delta:t}=s;return Ad.copy(e),Ed+=t,rP(s),oP(t),aP()},rP=s=>{const{minCoords:e,maxCoords:t}=s,i=Ed*100|0;Ed-=i/100;const n=i*50;for(let r=0;r<n;r++){const o=Math.random(),a=5.25-o*1.5,l=Math.random()*.1,c=Math.random()*25+50,h=-1+ +(Math.random()<.5)*2;zs.push({velocity:new I(0,-c,0),position:new I(mi(e[0],t[0]),os.height-o*50,mi(e[1],t[1])),rotation:h*l,maxLife:a,alpha:0,life:a})}},oP=s=>{for(let e=0;e<zs.length;e++){const t=zs[e];if((t.life-=s)<=0)continue;const i=1-t.life/t.maxLife,n=t.velocity.clone(),{x:r,y:o,z:a}=n;t.position.add(n.multiplyScalar(s)),t.alpha=rl.getValue(i),n.multiplyScalar(.1).set(Math.sign(r)*Math.min(Math.abs(n.x),Math.abs(r)),Math.sign(o)*Math.min(Math.abs(n.y),Math.abs(o)),Math.sign(a)*Math.min(Math.abs(n.z),Math.abs(a))),t.velocity.sub(n)}zs=zs.filter(e=>e.life>0).sort((e,t)=>{const i=Ad.distanceToSquared(e.position),n=Ad.distanceToSquared(t.position);return i>n?-1:i<n?1:0})},aP=()=>{const s=[],e=[],t=[];for(let i=0,n=zs.length;i<n;i++){const{x:r,y:o,z:a}=zs[i].position,{rotation:l,alpha:c}=zs[i];s.push(r,o,a),t.push(l),e.push(c)}return[s,t,e]};class lP{constructor(e,t,i){this.worker=i,this.enemyKills=0,this.clock=new sh,this.player=new kC,this.loop=this.update.bind(this),this.controls=NC()?new BC(this.player):new rs(this.player),this.onSceneLoad=this.onLoad.bind(this),this.onPlayerHit=this.playerHit.bind(this),this.level=new Ve(e,t,i),K.dispatch("Game::LoopInit",null,!0),this.addEventListeners()}addEventListeners(){K.add("Level::EnvMap",this.onSceneLoad),K.add("Enemy::Attack",this.onPlayerHit),this.worker?.add("Level::GetRandomCoord",e=>{Ic.addLevelCoords(e.data)?K.dispatch("Loading::Complete",null,!0):this.worker?.post("Level::GetRandomCoord")},{minCoords:Ve.minCoords,maxCoords:Ve.maxCoords,portals:Ve.portals,bounds:Ve.bounds}),K.add("Enemy::Active",e=>{!e.data&&this.onEnemyKill(),this.player.setTargets(this.enemies.colliders)}),K.add("Player::PickRifle",()=>this.player.pickRifle()),K.add("Player::Death",e=>this.enemies.playerDead=e.data)}async onLoad(e){const t=e.data;this.player.loadCharacter(t).then(()=>{Ti.setCharacter(this.player.collider),this.player.setPistol(this.level.walls,this.pistol),this.enemies=new UC(t),this.player.addRifle(this.rifle),this.createRandomCoords(),Pt.add(this.loop)}),this.pistol=new JC(t),this.rifle=new QC(t)}start(){}playerHit(e){const{position:t,damage:i}=e.data,{position:n,rotation:r}=this.player.location,o=this.enemies.getHitDirection(t,n,r);this.player.hit(o,i)}createRandomCoords(){if(this.worker)return this.worker.post("Level::GetRandomCoord");Ic.fillRandomLevelCoords(),K.dispatch("Loading::Complete",null,!0)}onEnemyKill(){const{x:e,z:t}=this.player.location.position;this.enemies.spawnMultiple(e,t),!(++this.enemyKills%ue.Gameplay.rifleSpawn)&&this.spawnRifle(e,t)}spawnRifle(e,t){!this.rifle.onStage&&this.rifle.spawn(Ic.getRandomLevelCoords(e,t))}update(){const e=Math.min(this.clock.getDelta(),.1),t=this.updateCharactersLocation(e);this.player.alive&&Ti.update(e),this.rifle.update(t),this.level.render(e),Je.updateState()}updateCharactersLocation(e){this.player.update(e);const{location:t}=this.player,i=this.level.outOfBounds(t.position),n=this.enemies.update(e,t.position);return i&&this.player.teleport(i),K.dispatch("Characters::Location",{player:t,enemies:n},!0),i??t.position}resize(e,t){this.level.resize(e,t),this.pistol.resize(t),this.rifle.resize(t),Je.resize()}removeEventListeners(){this.worker?.remove("Level::GetRandomCoord"),K.remove("Player::PickRifle"),K.remove("Player::Death"),K.remove("Level::EnvMap"),K.remove("Enemy::Active"),K.remove("Enemy::Attack")}dispose(){this.removeEventListeners(),this.controls.dispose(),this.enemies.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.level.dispose(),Ti.dispose(),Je.dispose(),Pt.dispose()}set inputs(e){this.controls.pause=e}set pause(e){this.level.pause=e,Ti.pause=e,Pt.pause=e}}class cP{takeControl(e){const t=e.element;K.add("Game::SettingsInit",()=>this.createMainLoop(t,e.pixelRatio)),this.resetDOMElements(),new ot}createMainLoop(e,t){this.loop=new lP(e,t),K.remove("Game::SettingsInit")}resetDOMElements(){const e=self.DedicatedWorkerGlobalScope;self.HTMLCollection=e,self.SVGElement=e,self.NodeList=e,self.document=null,self.window=self}dispatch(e){bd.dispatchEvent(e)}resize(e){const{width:t,height:i}=e;this.loop.resize(t,i)}dispose(){this.loop.dispose()}start(){this.loop.start()}set inputs(e){this.loop.inputs=e}set pause(e){this.loop.pause=e}}const cr=new cP,hP=(s,e)=>{switch(s){case"EventsTarget::Dispatch":return cr.dispatch(e);case"Rain::UpdateParticles":return s_(e);case"Level::GetRandomCoord":return Zy(e);case"Offscreen::Transfer":return cr.takeControl(e);case"Game::Resize":return cr.resize(e);case"Game::Inputs":{const{disabled:t}=e;return cr.inputs=t}case"Game::Pause":{const{paused:t}=e;return cr.pause=t}case"Game::Dispose":return cr.dispose();case"Game::Start":return cr.start()}return e};self.onmessage=s=>{const{event:e,params:t}=s.data,i=hP(e,t);self.postMessage({name:e,response:i})};self.onerror=s=>console.error(s);const uP=self;class Ig{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t=null){uP.postMessage({name:e,response:t})}remove(e){this.worker.remove(e)}dispose(){this.worker.clear()}}class dP extends CustomEvent{constructor(){super(...arguments),this.data=null}}class fP extends E_{createWorkerEvents(e){this.workerEvents=new Ig(e)}add(e,t,i=!1){ue.offscreen&&i?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t=null,i=!1){ue.worker&&i?Ig.dispatch(e,t):super.dispatch(e,t)}remove(e,t=!1){ue.offscreen&&t?this.workerEvents?.remove(e):super.remove(e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const K=new fP;function pP(s){let e,t;return{c(){e=Ne("div"),t=Ne("div"),me(t,"class","svelte-12grfy8"),je(t,"shooting",s[3]),je(t,"black",s[0]),je(t,"hide",s[1]),je(t,"red",s[4]),me(e,"class","container svelte-12grfy8")},m(i,n){bt(i,e,n),Be(e,t),s[5](t)},p(i,[n]){n&8&&je(t,"shooting",i[3]),n&1&&je(t,"black",i[0]),n&2&&je(t,"hide",i[1]),n&16&&je(t,"red",i[4])},i:wt,o:wt,d(i){i&&mt(e),s[5](null)}}}function mP(s,e,t){let{black:i=!1}=e,{hide:n}=e,r,o=!1,a=!1;function l(){setTimeout(()=>{r.offsetWidth,t(3,o=!1)},150),setTimeout(()=>t(3,o=!0)),t(3,o=!1)}K.add("Player::Shoot",l,!i),K.add("Weapon::Aim",h=>t(4,a=h.data),!i),Nn(()=>{K.remove("Player::Shoot",!0),K.remove("Weapon::Aim",!0)});function c(h){Os[h?"unshift":"push"](()=>{r=h,t(2,r)})}return s.$$set=h=>{"black"in h&&t(0,i=h.black),"hide"in h&&t(1,n=h.hide)},[i,n,r,o,a,c]}class gP extends Mi{constructor(e){super(),vi(this,e,mP,pP,_i,{black:0,hide:1})}}function yP(s){const e=s-1;return e*e*e+1}function r_(s){return s*s}function o_(s){return-s*(s-2)}function Cr(s,{delay:e=0,duration:t=400,easing:i=$c}={}){const n=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*n}`}}function a_(s,{delay:e=0,duration:t=400,easing:i=yP,x:n=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(s),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o),[u,d]=Df(n),[f,m]=Df(r);return{delay:e,duration:t,easing:i,css:(g,y)=>`
			transform: ${c} translate(${(1-g)*u}${d}, ${(1-g)*f}${m});
			opacity: ${l-h*y}`}}function Dg(s){let e;return{c(){e=Ne("h1"),e.textContent="Loading...",me(e,"class","svelte-18fefvm")},m(t,i){bt(t,e,i)},d(t){t&&mt(e)}}}function Fg(s){let e;return{c(){e=Ne("h1"),e.textContent="Saving...",me(e,"class","svelte-18fefvm")},m(t,i){bt(t,e,i)},d(t){t&&mt(e)}}}function _P(s){let e,t,i,n,r=s[1]&&Dg(),o=s[0]&&Fg();return{c(){e=Ne("div"),r&&r.c(),t=qt(),o&&o.c(),me(e,"class","svelte-18fefvm"),je(e,"loading",s[1])},m(a,l){bt(a,e,l),r&&r.m(e,null),Be(e,t),o&&o.m(e,null),n=!0},p(a,[l]){a[1]?r||(r=Dg(),r.c(),r.m(e,t)):r&&(r.d(1),r=null),a[0]?o||(o=Fg(),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!n||l&2)&&je(e,"loading",a[1])},i(a){n||(_n(()=>{n&&(i||(i=ko(e,Cr,{},!0)),i.run(1))}),n=!0)},o(a){i||(i=ko(e,Cr,{},!1)),i.run(0),n=!1},d(a){a&&mt(e),r&&r.d(),o&&o.d(),a&&i&&i.end()}}}function xP(s,e,t){const i=Bn();let{updating:n=!1}=e,{loading:r=!1}=e;return r&&K.add("Loading::Complete",()=>{K.remove("Loading::Complete",!0),i("complete")},!0),s.$$set=o=>{"updating"in o&&t(0,n=o.updating),"loading"in o&&t(1,r=o.loading)},[n,r]}class l_ extends Mi{constructor(e){super(),vi(this,e,xP,_P,_i,{updating:0,loading:1})}}const vP=["ArrowUp","ArrowDown","Enter"],MP=(s,e,t)=>Math.abs((t+e+(+(s==="ArrowDown")*2-1))%t),Ug=(s,{show:e,menuFade:t})=>(t?Cr:a_)(s,{...!t&&{easing:e?o_:r_},delay:+!!(t&&e)*250+ +!!e*250,x:yi.size.width*-.5,duration:250}),Ng=(s,{show:e})=>a_(s,{easing:e?o_:r_,x:yi.size.width*.5,delay:+!!e*250,duration:250}),Ef=(s,e,t)=>{s.stopPropagation(),s.preventDefault();const i=s.key;if(vP.includes(i)){if(i==="Enter")return-1}else return e;return MP(i,e,t)},fh=class zt{static set volume(e){zt.hover.volume=zt.click.volume=e,zt.vol=e}static get volume(){return zt.vol}static onHover(){const e=zt.hover.ended,t=zt.hover.paused,i=zt.hover.currentTime>.2;!e&&!t&&!i||(zt.hover.currentTime=0,zt.hover.play())}static onClick(){zt.click.currentTime=0,zt.click.play()}static mute(){zt.volume=0}static load(){zt.hover.volume=zt.vol,zt.click.volume=zt.vol,zt.hover.load(),zt.click.load()}};fh.vol=.5;fh.hover=new Audio(`${ue.basePath()}/sounds/${ue.Rifle.sounds.empty}`);fh.click=new Audio(`${ue.basePath()}/sounds/${ue.Rifle.sounds.pick}`);let Yi=fh;Yi.load();function bP(s){let e,t,i,n,r,o,a,l,c,h,u;return{c(){e=Ne("div"),t=Ne("ul"),i=Ne("li"),n=Ne("h3"),n.textContent="Continue",r=qt(),o=Ne("li"),a=Ne("h3"),a.textContent="Quit",me(n,"class","svelte-fq8x9c"),je(n,"active",!s[0]),me(i,"class","svelte-fq8x9c"),me(a,"class","svelte-fq8x9c"),je(a,"active",s[0]),me(o,"class","svelte-fq8x9c"),me(t,"class","svelte-fq8x9c"),me(e,"class","svelte-fq8x9c")},m(d,f){bt(d,e,f),Be(e,t),Be(t,i),Be(i,n),Be(t,r),Be(t,o),Be(o,a),c=!0,h||(u=[Ue(i,"mouseover",s[5]),Ue(i,"keydown",s[2]),Ue(i,"click",s[2]),Ue(i,"focus",s[4]),Ue(o,"mouseover",s[6]),Ue(o,"keydown",s[2]),Ue(o,"click",s[2]),Ue(o,"focus",s[3])],h=!0)},p(d,[f]){(!c||f&1)&&je(n,"active",!d[0]),(!c||f&1)&&je(a,"active",d[0])},i(d){c||(_n(()=>{c&&(l||(l=ko(e,Cr,{},!0)),l.run(1))}),c=!0)},o(d){l||(l=ko(e,Cr,{},!1)),l.run(0),c=!1},d(d){d&&mt(e),d&&l&&l.end(),h=!1,bn(u)}}}function wP(s,e,t){const i=Bn();let n=0;function r(d){const f=Ef(d,n,2);if(f===-1)return a();t(0,n=f),Yi.onHover()}function o(d){n!==d&&Yi.onHover(),t(0,n=d)}function a(){Yi.onClick(),i(n?"quit":"continue")}Pr(()=>document.addEventListener("keydown",r,!0)),Nn(()=>document.removeEventListener("keydown",r,!0));function l(d){Ni.call(this,s,d)}function c(d){Ni.call(this,s,d)}return[n,o,a,l,c,()=>o(0),()=>o(1)]}class SP extends Mi{constructor(e){super(),vi(this,e,wP,bP,_i,{})}}function TP(s){let e;return{c(){e=Ne("canvas"),me(e,"width",s[3]),me(e,"height",s[2]),me(e,"class","svelte-16ba91j"),je(e,"visible",s[1])},m(t,i){bt(t,e,i),s[5](e)},p(t,[i]){i&2&&je(e,"visible",t[1])},i:wt,o:wt,d(t){t&&mt(e),s[5](null)}}}function AP(s,e,t){const i=yi.size.height,n=yi.size.width;let r,{updating:o=!1}=e,a=!1;Nn(()=>K.remove("Rain::Toggle"));function l(c){Os[c?"unshift":"push"](()=>{r=c,t(0,r)})}return s.$$set=c=>{"updating"in c&&t(4,o=c.updating)},s.$$.update=()=>{s.$$.dirty&16&&(c=>c?K.remove("Rain::Toggle"):K.add("Rain::Toggle",h=>t(1,a=h.data)))(o)},[r,a,i,n,o,l]}class EP extends Mi{constructor(e){super(),vi(this,e,AP,TP,_i,{updating:4})}}function Bg(s,e,t,i){function n(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(h){try{c(i.next(h))}catch(u){o(u)}}function l(h){try{c(i.throw(h))}catch(u){o(u)}}function c(h){h.done?r(h.value):n(h.value).then(a,l)}c((i=i.apply(s,e||[])).next())})}const Rf=new ot;K.add("Game::SettingsInit",()=>{Rf.updateVisualValues(p_()),K.remove("Game::SettingsInit",!0)},!0);const RP=new Map([["bullet",["bulletPath","bulletHoles"]],["fog",["volumetricFog"]],["raining",["raindrops","softParticles"]],["clouds",["lighting","dynamicClouds"]]]),c_=(s,e)=>{const t=s.reduce((i,n)=>({...i,[n.key]:n.value}),{});for(const i in t){const n=i;if(e.get(n)!==t[n])return t}},CP=(s,e)=>{const t=e-Dc,i=ot.getDefaultVisualValues(t),n=c_(s,i);return n&&Rf.resetVisualValues(t),!!n},PP=s=>{const e=RP.get(s);if(e)return e},LP=s=>{const e=ot.getVisualValues(),t=c_(s,e);return t&&Rf.updateVisualValues(t),!!t};function IP(s){let e,t,i;return{c(){e=Ne("input"),me(e,"type","checkbox"),me(e,"class","svelte-o4zxq7"),je(e,"active",s[1]),je(e,"checked",s[0])},m(n,r){bt(n,e,r),t||(i=Ue(e,"change",s[2]),t=!0)},p(n,[r]){r&2&&je(e,"active",n[1]),r&1&&je(e,"checked",n[0])},i:wt,o:wt,d(n){n&&mt(e),t=!1,i()}}}function DP(s,e,t){const i=Bn();let{checked:n=!1}=e,{active:r=!1}=e;function o(){i("toggle",!n),t(0,n=!n)}return s.$$set=a=>{"checked"in a&&t(0,n=a.checked),"active"in a&&t(1,r=a.active)},[n,r,o]}class FP extends Mi{constructor(e){super(),vi(this,e,DP,IP,_i,{checked:0,active:1})}}function UP(s){let e,t,i,n,r;return{c(){e=Ne("input"),me(e,"type","range"),me(e,"min",t=s[4]-s[2]),me(e,"max",i=s[3]-s[2]),e.value=s[1],me(e,"step","1"),me(e,"class","svelte-hkg4rb"),je(e,"active",s[0])},m(o,a){bt(o,e,a),n||(r=Ue(e,"input",s[5]),n=!0)},p(o,[a]){a&20&&t!==(t=o[4]-o[2])&&me(e,"min",t),a&12&&i!==(i=o[3]-o[2])&&me(e,"max",i),a&2&&(e.value=o[1]),a&1&&je(e,"active",o[0])},i:wt,o:wt,d(o){o&&mt(e),n=!1,r()}}}function NP(s,e,t){const i=Bn();let{active:n=!1}=e,{value:r=100}=e,{offset:o=0}=e,{max:a=100}=e,{min:l=0}=e;function c(h){const u=h.target;i("update",+u.value)}return s.$$set=h=>{"active"in h&&t(0,n=h.active),"value"in h&&t(1,r=h.value),"offset"in h&&t(2,o=h.offset),"max"in h&&t(3,a=h.max),"min"in h&&t(4,l=h.min)},[n,r,o,a,l,c]}class BP extends Mi{constructor(e){super(),vi(this,e,NP,UP,_i,{active:0,value:1,offset:2,max:3,min:4})}}function zg(s,e,t){const i=s.slice();return i[35]=e[t],i[37]=t,i}function zP(s){let e,t;return e=new FP({props:{active:s[1]===s[37],checked:s[35].value}}),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p(i,n){const r={};n[0]&2&&(r.active=i[1]===i[37]),n[0]&1&&(r.checked=i[35].value),e.$set(r)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function kP(s){let e,t;return e=new BP({props:{active:s[1]===s[37],max:Jy+99,value:s[35].value,offset:99,min:99}}),e.$on("update",s[8]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p(i,n){const r={};n[0]&2&&(r.active=i[1]===i[37]),n[0]&1&&(r.value=i[35].value),e.$set(r)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function kg(s){let e,t,i=s[35].name+"",n,r,o,a,l,c,h;const u=[kP,zP],d=[];function f(g,y){return typeof g[35].value=="number"?0:1}o=f(s),a=d[o]=u[o](s);function m(){return s[18](s[37])}return{c(){e=Ne("li"),t=Ne("h5"),n=Yc(i),r=qt(),a.c(),me(t,"class","svelte-1tgwt0z"),je(t,"active",s[1]===s[37]),me(e,"class","svelte-1tgwt0z"),je(e,"disabled",!s[35].enabled)},m(g,y){bt(g,e,y),Be(e,t),Be(t,n),Be(e,r),d[o].m(e,null),l=!0,c||(h=[Ue(e,"mouseover",m),Ue(e,"mouseout",s[19]),Ue(e,"keydown",s[20]),Ue(e,"click",s[4]),Ue(e,"focus",s[16]),Ue(e,"blur",s[17])],c=!0)},p(g,y){s=g,(!l||y[0]&1)&&i!==(i=s[35].name+"")&&x_(n,i),(!l||y[0]&2)&&je(t,"active",s[1]===s[37]);let p=o;o=f(s),o===p?d[o].p(s,y):(Ki(),Oe(d[p],1,1,()=>{d[p]=null}),Zi(),a=d[o],a?a.p(s,y):(a=d[o]=u[o](s),a.c()),we(a,1),a.m(e,null)),(!l||y[0]&1)&&je(e,"disabled",!s[35].enabled)},i(g){l||(we(a),l=!0)},o(g){Oe(a),l=!1},d(g){g&&mt(e),d[o].d(),c=!1,bn(h)}}}function OP(s){let e,t,i,n,r,o,a,l,c,h,u,d,f,m,g,y,p,x,_=s[0],M=[];for(let b=0;b<_.length;b+=1)M[b]=kg(zg(s,_,b));const v=b=>Oe(M[b],1,1,()=>{M[b]=null});return{c(){e=Ne("div"),t=Ne("ul");for(let b=0;b<M.length;b+=1)M[b].c();i=qt(),n=Ne("li"),r=Ne("h5"),r.textContent="Reset To:",o=qt(),a=Ne("dl"),l=Ne("h5"),l.textContent=`${Ut[Ut.LOW]} 
        `,c=Ne("h5"),c.textContent=`${Ut[Ut.MEDIUM]} 
        `,h=Ne("h5"),h.textContent=`${Ut[Ut.HIGH]}`,u=qt(),d=Ne("li"),f=Ne("h4"),f.textContent="Back",me(r,"class","svelte-1tgwt0z"),me(l,"class","svelte-1tgwt0z"),je(l,"active",s[1]===Ut.LOW),me(c,"class","svelte-1tgwt0z"),je(c,"active",s[1]===Ut.MEDIUM),me(h,"class","svelte-1tgwt0z"),je(h,"active",s[1]===Ut.HIGH),me(a,"class","svelte-1tgwt0z"),me(n,"class","reset svelte-1tgwt0z"),me(f,"class","svelte-1tgwt0z"),je(f,"active",s[1]===s[2]),me(d,"class","svelte-1tgwt0z"),me(t,"class","svelte-1tgwt0z"),me(e,"class","svelte-1tgwt0z")},m(b,S){bt(b,e,S),Be(e,t);for(let E=0;E<M.length;E+=1)M[E]&&M[E].m(t,null);Be(t,i),Be(t,n),Be(n,r),Be(n,o),Be(n,a),Be(a,l),Be(a,c),Be(a,h),Be(t,u),Be(t,d),Be(d,f),y=!0,p||(x=[Ue(l,"mouseover",s[21]),Ue(l,"mouseout",s[22]),Ue(l,"keydown",s[5]),Ue(l,"click",s[5]),Ue(l,"focus",s[14]),Ue(l,"blur",s[15]),Ue(c,"mouseover",s[23]),Ue(c,"mouseout",s[24]),Ue(c,"keydown",s[5]),Ue(c,"click",s[5]),Ue(c,"focus",s[12]),Ue(c,"blur",s[13]),Ue(h,"mouseover",s[25]),Ue(h,"mouseout",s[26]),Ue(h,"keydown",s[5]),Ue(h,"click",s[5]),Ue(h,"focus",s[10]),Ue(h,"blur",s[11]),Ue(d,"mouseover",s[27]),Ue(d,"keydown",s[6]),Ue(d,"click",s[6]),Ue(d,"focus",s[9])],p=!0)},p(b,S){if(S[0]&411){_=b[0];let E;for(E=0;E<_.length;E+=1){const w=zg(b,_,E);M[E]?(M[E].p(w,S),we(M[E],1)):(M[E]=kg(w),M[E].c(),we(M[E],1),M[E].m(t,i))}for(Ki(),E=_.length;E<M.length;E+=1)v(E);Zi()}(!y||S[0]&2)&&je(l,"active",b[1]===Ut.LOW),(!y||S[0]&2)&&je(c,"active",b[1]===Ut.MEDIUM),(!y||S[0]&2)&&je(h,"active",b[1]===Ut.HIGH),(!y||S[0]&6)&&je(f,"active",b[1]===b[2])},i(b){if(!y){for(let S=0;S<_.length;S+=1)we(M[S]);_n(()=>{y&&(g&&g.end(1),m=l0(e,Ng,{show:!0}),m.start())}),y=!0}},o(b){M=M.filter(Boolean);for(let S=0;S<M.length;S+=1)Oe(M[S]);m&&m.invalidate(),g=c0(e,Ng,{show:!1}),y=!1},d(b){b&&mt(e),i0(M,b),b&&g&&g.end(),p=!1,bn(x)}}}function VP(s,e,t){const i=Bn();let n,r,o,a=!1,l;(n=()=>{t(0,r=Array.from(ot.getVisualValues()).map(([V,j])=>({name:V.replace(/[A-Z]/g,ne=>` ${ne}`),enabled:!0,key:V,value:j})));const Z=Object.keys(Ut).length*.5;t(1,o=t(2,l=r.length+Z)),c()})();function c(Z,V){if(!Z&&!V)return r.forEach(({key:j,value:ne})=>h(j,ne));h(Z,V)}function h(Z,V){const j=PP(Z);j&&j.forEach(ne=>{const ae=r.find(z=>z.key===ne);ae&&(V||(ae.value=!1),ae.enabled=!!V)})}function u(Z){o!==Z&&Yi.onHover(),t(1,o=Z)}function d(Z){const V=Z.target;p(V.tagName==="LI")}function f(Z,V){const j=V??Ef(Z,o,l+1);if(r[j]&&!r[j].enabled){const ne=+(Z.code==="ArrowDown");return f(Z,j+ne*2-1)}if(j===-1)return p();Yi.onHover(),t(1,o=j)}function m(){switch(o){case Ut.LOW:case Ut.MEDIUM:case Ut.HIGH:return!0;default:return!1}}function g(){Yi.onClick(),a=CP(r,o),a&&setTimeout(n,100)}function y(){const Z=LP(r);i("menu",Z||a),Yi.onClick()}function p(Z=!0){if(m())return g();if(o===l)return y();const{key:V,value:j}=r[o];typeof j=="number"?x({detail:Z?j?0:Jy:j}):t(0,r[o].value=!j,r),c(V,r[o].value),Yi.onClick()}function x(Z){t(0,r[o].value=Z.detail,r)}Pr(()=>document.addEventListener("keydown",f,!0)),Nn(()=>document.removeEventListener("keydown",f,!0));function _(Z){Ni.call(this,s,Z)}function M(Z){Ni.call(this,s,Z)}function v(Z){Ni.call(this,s,Z)}function b(Z){Ni.call(this,s,Z)}function S(Z){Ni.call(this,s,Z)}function E(Z){Ni.call(this,s,Z)}function w(Z){Ni.call(this,s,Z)}function T(Z){Ni.call(this,s,Z)}function F(Z){Ni.call(this,s,Z)}return[r,o,l,u,d,g,y,p,x,_,M,v,b,S,E,w,T,F,Z=>u(Z),()=>t(1,o=-1),()=>p(),()=>u(Ut.LOW),()=>t(1,o=-1),()=>u(Ut.MEDIUM),()=>t(1,o=-1),()=>u(Ut.HIGH),()=>t(1,o=-1),()=>u(l)]}class HP extends Mi{constructor(e){super(),vi(this,e,VP,OP,_i,{},null,[-1,-1])}}function Og(s,e,t){const i=s.slice();return i[12]=e[t],i[14]=t,i}function Vg(s){let e,t,i=s[12]+"",n,r,o,a;function l(){return s[7](s[14])}return{c(){e=Ne("li"),t=Ne("h3"),n=Yc(i),r=qt(),me(t,"class","svelte-6khxbc"),je(t,"active",s[1]===s[14]),me(e,"class","svelte-6khxbc")},m(c,h){bt(c,e,h),Be(e,t),Be(t,n),Be(e,r),o||(a=[Ue(e,"mouseover",l),Ue(e,"keydown",s[5]),Ue(e,"click",s[5]),Ue(e,"focus",s[6])],o=!0)},p(c,h){s=c,h&2&&je(t,"active",s[1]===s[14])},d(c){c&&mt(e),o=!1,bn(a)}}}function GP(s){let e,t,i,n,r,o,a=s[3],l=[];for(let c=0;c<a.length;c+=1)l[c]=Vg(Og(s,a,c));return{c(){e=Ne("div"),t=Ne("menu");for(let c=0;c<l.length;c+=1)l[c].c();me(t,"style",i=`
    transform: rotateY(12deg) rotateX(${s[2]}deg);
    height: ${s[3].length*10+20}%;
  `),me(t,"class","svelte-6khxbc"),me(e,"class","svelte-6khxbc")},m(c,h){bt(c,e,h),Be(e,t);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(t,null);o=!0},p(c,[h]){if(s=c,h&58){a=s[3];let u;for(u=0;u<a.length;u+=1){const d=Og(s,a,u);l[u]?l[u].p(d,h):(l[u]=Vg(d),l[u].c(),l[u].m(t,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=a.length}(!o||h&4&&i!==(i=`
    transform: rotateY(12deg) rotateX(${s[2]}deg);
    height: ${s[3].length*10+20}%;
  `))&&me(t,"style",i)},i(c){o||(_n(()=>{o&&(r&&r.end(1),n=l0(e,Ug,{show:!0,menuFade:s[0]}),n.start())}),o=!0)},o(c){n&&n.invalidate(),r=c0(e,Ug,{menuFade:s[0]}),o=!1},d(c){c&&mt(e),i0(l,c),c&&r&&r.end()}}}function WP(s,e,t){const i=["Play","Settings","Credits"],n=Bn();ue.APP&&i.push("Exit");const r=i.length-1;let{menuFade:o}=e,{selected:a}=e,l=-6;function c(g){const y=Ef(g,a,i.length);if(y===-1)return d();t(1,a=y),Yi.onHover(),u()}function h(g){a!==g&&Yi.onHover(),t(1,a=g),u()}function u(){t(2,l=zM(-6,6,a/r))}function d(){switch(Yi.onClick(),a){case 0:n("play"),t(0,o=!0);break;case 1:n("settings"),t(0,o=!1);break;case 2:break;case 3:window.exit();break}}Pr(()=>document.addEventListener("keydown",c,!0)),Nn(()=>document.removeEventListener("keydown",c,!0));function f(g){Ni.call(this,s,g)}const m=g=>h(g);return s.$$set=g=>{"menuFade"in g&&t(0,o=g.menuFade),"selected"in g&&t(1,a=g.selected)},u(),[o,a,l,i,h,d,f,m]}class XP extends Mi{constructor(e){super(),vi(this,e,WP,GP,_i,{menuFade:0,selected:1})}}class jP extends df{constructor(){super({...ue.Enemy,model:`${ue.basePath(!0)}${ue.Enemy.model}`})}async load(){const e=await super.load();return this.setDefaultState(),e}update(e){super.update(e)}fade(e){ve({targets:this.skinnedMesh.material,duration:+e*150+100,opacity:+e,easing:"linear"})}setDefaultState(){this.animations.scream.clampWhenFinished=!0,this.animations.scream.setLoop(Bi,0),this.mesh.position.set(0,-.81,0),this.mesh.rotation.set(0,2.85,0),this.setMixerTimeScale(.5),this.animations.idle.play(),this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.material.opacity=0,t.castShadow=!1)}),this.reset()}scream(){this.setMixerTimeScale(1),this.animations.scream.play(),setTimeout(this.animations.idle.stop.bind(this.animations.idle),250),this.animations.idle.crossFadeTo(this.animations.scream,.25,!0),setTimeout(()=>{this.fade(!1),this.animations.idle.play(),this.setMixerTimeScale(.5),this.animations.scream.crossFadeTo(this.animations.idle,.1,!0),setTimeout(this.animations.scream.stop.bind(this.animations.scream),100)},this.getAnimationDuration("scream")-100)}get skinnedMesh(){return this.mesh.children[0].children[0]}set freeze(e){this.setMixerTimeScale(+!e*.5)}}class qP{constructor(e){this.frame=0,this.clock=new sh,this.scene=new rf,this.enemy=new jP,this.listener=new xy,this.onRender=this.render.bind(this),this.onResize=this.resize.bind(this),this.ratio=window.innerWidth/window.innerHeight,this.scream=new Ua(this.listener),this.camera=new pi(45,this.ratio,1,500),this.scene.background=new ze(Et.BLACK),yi.addResizeCallback(this.onResize),this.camera.rotation.set(0,Math.PI,0),this.camera.position.set(.7,.1,-3),this.camera.add(this.listener),this.renderer=new sf({antialias:!0,canvas:e}),this.loadScreamSound(),this.createRenderer(),this.createLights(),this.createEnemy()}rotateCamera(e=0,t=500){ve({targets:this.camera.rotation,easing:"easeInOutQuad",y:Math.PI+e,duration:t})}async loadScreamSound(){const{scream:e}=ue.Enemy.sounds,t=await Ze.Loader.loadAudio(e);this.scream.setBuffer(t),this.scream.setVolume(.5),this.scream.setLoop(!1)}async createEnemy(){const e=(await this.enemy.load()).scene;this.frame=requestAnimationFrame(this.onRender),this.scene.add(e),this.enemy.fade(!0)}playScreamAnimation(){this.rotateCamera(-.25,250),setTimeout(()=>{this.scream.play(.25),this.enemy.scream()},100)}createRenderer(){const e=window.innerWidth,t=window.innerHeight,i=window.devicePixelRatio;this.renderer.debug.checkShaderErrors=!1,this.renderer.outputColorSpace=De,this.renderer.setClearColor(Et.BLACK,1),this.renderer.setPixelRatio(i||1),this.renderer.shadowMap.enabled=!1,this.renderer.setSize(e,t)}createLights(){const e=new AE(Et.WHITE,.1),t=new yy(Et.WHITE);e.position.set(-5,10,25),this.scene.add(e),this.scene.add(t)}render(){this.frame=requestAnimationFrame(this.onRender),this.renderer.render(this.scene,this.camera),this.enemy.update(this.clock.getDelta())}resize(){const e=window.innerHeight,t=window.innerWidth;this.ratio=t/e,this.camera.aspect=this.ratio,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}dispose(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);yi.removeResizeCallback(this.onResize),cancelAnimationFrame(this.frame),this.renderer.dispose(),this.enemy.dispose(),this.scene.clear()}set freeze(e){this.enemy.freeze=e}}function Hg(s){let e,t;return e=new HP({}),e.$on("menu",s[12]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p:wt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function Gg(s){let e,t;return e=new XP({props:{selected:s[5],menuFade:s[4]}}),e.$on("settings",s[13]),e.$on("play",s[9]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p(i,n){const r={};n&32&&(r.selected=i[5]),n&16&&(r.menuFade=i[4]),e.$set(r)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function Wg(s){let e,t;return e=new l_({props:{updating:!0}}),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function $P(s){let e,t,i,n,r,o,a=s[2]&&Hg(s),l=s[3]&&Gg(s),c=s[0]&&Wg();return{c(){e=Ne("div"),t=Ne("canvas"),i=qt(),a&&a.c(),n=qt(),l&&l.c(),r=qt(),c&&c.c(),me(t,"width",s[6]),me(t,"height",s[7]),me(t,"class","svelte-1sf6i7h"),me(e,"class","svelte-1sf6i7h")},m(h,u){bt(h,e,u),Be(e,t),s[11](t),Be(e,i),a&&a.m(e,null),Be(e,n),l&&l.m(e,null),Be(e,r),c&&c.m(e,null),o=!0},p(h,[u]){h[2]?a?(a.p(h,u),u&4&&we(a,1)):(a=Hg(h),a.c(),we(a,1),a.m(e,n)):a&&(Ki(),Oe(a,1,1,()=>{a=null}),Zi()),h[3]?l?(l.p(h,u),u&8&&we(l,1)):(l=Gg(h),l.c(),we(l,1),l.m(e,r)):l&&(Ki(),Oe(l,1,1,()=>{l=null}),Zi()),h[0]?c?u&1&&we(c,1):(c=Wg(),c.c(),we(c,1),c.m(e,null)):c&&(Ki(),Oe(c,1,1,()=>{c=null}),Zi())},i(h){o||(we(a),we(l),we(c),o=!0)},o(h){Oe(a),Oe(l),Oe(c),o=!1},d(h){h&&mt(e),s[11](null),a&&a.d(),l&&l.d(),c&&c.d()}}}function YP(s,e,t){let i,n=!1,r=!1,{ready:o}=e,a,l=!0,c=!0,h=0;const u=window.innerWidth,d=window.innerHeight,f=Bn();function m(v){return Bg(this,arguments,void 0,function*(b,S=!1){if(S)return g();a.rotateCamera(+b*-.5),t(2,n=b),t(5,h=+!b),t(3,l=!b),t(4,c=!1)})}function g(){return Bg(this,void 0,void 0,function*(){f("update",!0),a.freeze=!0,t(0,r=!0),f("hide"),yield w_(),f("update",!1)})}function y(){setTimeout(()=>m(!1),3500),setTimeout(()=>{a.freeze=!1,t(0,r=!1)},2500)}function p(){t(3,l=!1);const v=1*3e3;a.playScreamAnimation(),setTimeout(()=>f("start"),v)}Pr(()=>a=new qP(i)),Nn(()=>a?.dispose());function x(v){Os[v?"unshift":"push"](()=>{i=v,t(1,i)})}const _=({detail:v})=>m(!1,v),M=()=>m(!0);return s.$$set=v=>{"ready"in v&&t(10,o=v.ready)},s.$$.update=()=>{s.$$.dirty&1025&&(v=>r&&v&&y())(o)},[r,i,n,l,c,h,u,d,m,p,o,x,_,M]}class KP extends Mi{constructor(e){super(),vi(this,e,YP,$P,_i,{ready:10})}}function ZP(s){let e,t;return{c(){e=Ne("div"),t=Ne("div"),me(t,"class","arc svelte-2cb48p"),me(e,"class","container svelte-2cb48p"),Us(e,"transform","rotate("+s[0]+"deg)")},m(i,n){bt(i,e,n),Be(e,t)},p(i,[n]){n&1&&Us(e,"transform","rotate("+i[0]+"deg)")},i:wt,o:wt,d(i){i&&mt(e)}}}function JP(s,e,t){let{playerRotation:i}=e,n,{angle:r}=e;function o(){t(0,n=r-i)}return s.$$set=a=>{"playerRotation"in a&&t(1,i=a.playerRotation),"angle"in a&&t(2,r=a.angle)},s.$$.update=()=>{s.$$.dirty&6&&(a=>i&&o())(),s.$$.dirty&6&&(a=>r&&o())()},[n,i,r]}class QP extends Mi{constructor(e){super(),vi(this,e,JP,ZP,_i,{playerRotation:1,angle:2})}}const wc=(s,e,t)=>[s[0]*t+t*e[0],s[1]*t+t*e[1]],eL=(s,e,t)=>Math.hypot(s[0]-e[0],s[1]-e[1])<t,tL=(s,e)=>Math.atan2(-(s[0]-e[0]),s[1]-e[1])*180/Math.PI+180;function iL(s){let e;return{c(){e=Ne("div"),Us(e,"transform","rotate("+s[0]+"deg)"),me(e,"class","svelte-1xsktiv")},m(t,i){bt(t,e,i)},p(t,[i]){i&1&&Us(e,"transform","rotate("+t[0]+"deg)")},i:wt,o:wt,d(t){t&&mt(e)}}}function nL(s,e,t){let{rotation:i}=e;return s.$$set=n=>{"rotation"in n&&t(0,i=n.rotation)},[i]}class sL extends Mi{constructor(e){super(),vi(this,e,nL,iL,_i,{rotation:0})}}function rL(s){let e,t,i,n,r,o;return r=new sL({props:{rotation:s[0]}}),{c(){e=Ne("div"),t=Ne("div"),i=Ne("canvas"),n=qt(),xi(r.$$.fragment),Us(i,"transform",s[3]),me(i,"class","svelte-1bcj3d6"),Us(t,"transform","scale3d("+s[1]+", "+s[1]+", 1) rotate("+-s[0]+"deg)"),me(t,"class","svelte-1bcj3d6"),me(e,"class","map svelte-1bcj3d6")},m(a,l){bt(a,e,l),Be(e,t),Be(t,i),s[8](i),Be(t,n),li(r,t,null),o=!0},p(a,[l]){(!o||l&8)&&Us(i,"transform",a[3]);const c={};l&1&&(c.rotation=a[0]),r.$set(c),(!o||l&3)&&Us(t,"transform","scale3d("+a[1]+", "+a[1]+", 1) rotate("+-a[0]+"deg)")},i(a){o||(we(r.$$.fragment,a),o=!0)},o(a){Oe(r.$$.fragment,a),o=!1},d(a){a&&mt(e),s[8](null),ci(r)}}}const Sc=5,Tc=1;function oL(s,e,t){const i=Ve.minCoords.map(k=>Math.abs(k)+Tc),n=Bn(),r=Ve.maxCoords;let o,{enemies:a}=e,{playerPosition:l}=e,{playerRotation:c}=e,h;const u=Ve.bounds;let d,f,m,g,y=0,p,x,{radius:_}=e,{scale:M}=e,{zoom:v}=e;const b=Sc*Math.PI,S=b*2,E=Sc*2;function w(){const k=Ky(u).map(G=>wc(G,i,M));return t(2,m.height=$o(k.map(G=>G[1]))+Tc*2,m),t(2,m.width=$o(k.map(G=>G[0]))+Tc*2,m),k}function T(k){d=wc(k.data,i,M),x=!0}function F(){const k=l.x,G=l.z,X=(k-r[0])*M-g,ee=(G-r[1])*M-g;if(x){const oe=wc([k,G],i,M);n("rifle",{visible:!eL(d,oe,_),angle:tL(oe,d)})}t(3,f=`translate(${X}px, ${ee}px) scale3d(-1, -1, 1)`)}function L(){for(let k=a.length;k--;){const[G,X]=wc([a[k].x,a[k].z],i,M);o.beginPath(),o.fillStyle="#8A0707",o.arc(G,X,4,0,Qe.m2),o.closePath(),o.fill()}}function C(){o.strokeStyle="#000",o.lineWidth=2,o.beginPath(),o.clearRect(0,0,m.width,m.height),o.moveTo(h[0][0],h[0][1]);for(let k=1;k<h.length;k++)o.lineTo(h[k][0],h[k][1]);o.closePath(),o.stroke()}function U(){if(!x)return;const[k,G]=d;o.fillStyle="#FFF",o.clearRect(k-b,G-b,S,S),o.beginPath(),o.arc(k,G,Sc,0,Qe.m2),o.closePath(),o.fill(),o.lineWidth=1,o.beginPath(),p=y+=Bo,p=kM(p-(p|0)),o.strokeStyle=`rgba(255, 255, 255, ${1-p})`;const X=Sc+p*E;o.arc(k,G,X,0,Qe.m2),o.closePath(),o.stroke()}function N(){C(),L(),U()}K.add("Rifle::Spawn",T,!0),K.add("Rifle::Pick",()=>{y=0,x=!1},!0),Pr(()=>{o=m.getContext("2d"),h=w(),Pt.add(N)}),Nn(()=>{K.remove("Rifle::Spawn",!0),K.remove("Rifle::Pick",!0),Pt.remove(N)});function W(k){Os[k?"unshift":"push"](()=>{m=k,t(2,m)})}return s.$$set=k=>{"enemies"in k&&t(4,a=k.enemies),"playerPosition"in k&&t(5,l=k.playerPosition),"playerRotation"in k&&t(0,c=k.playerRotation),"radius"in k&&t(6,_=k.radius),"scale"in k&&t(7,M=k.scale),"zoom"in k&&t(1,v=k.zoom)},s.$$.update=()=>{s.$$.dirty&36&&(k=>{m&&k&&F()})(l),s.$$.dirty&132&&(k=>{!m||!k||(g=Tc*k/2)})(M)},[c,v,m,f,a,l,_,M,W]}let aL=class extends Mi{constructor(e){super(),vi(this,e,oL,rL,_i,{enemies:4,playerPosition:5,playerRotation:0,radius:6,scale:7,zoom:1})}};var Rd;(s=>{class e{constructor(r){this.speed=10,this.target=this.current=r}update(r=Bo){const o=this.target-this.current;this.current+=o*(this.speed*r)}set(r){this.target=r}get value(){return this.current}}s.Number=e;class t{constructor(r){this.current=new Le,this.target=new Le,this.speed=10,this.current.copy(r),this.target.copy(r)}set(r,o){this.target.set(r,o)}copy(r){this.target.copy(r)}update(r=Bo){const o=this.target.x-this.current.x,a=this.target.y-this.current.y;this.current.x+=o*(this.speed*r),this.current.y+=a*(this.speed*r)}get value(){return this.current}get x(){return this.current.x}get y(){return this.current.y}}s.Vector2=t;class i{constructor(r){this.current=new I,this.target=new I,this.speed=10,this.current.copy(r),this.target.copy(r)}set(r,o,a){this.target.set(r,o,a)}copy(r){this.target.copy(r)}update(r=Bo){const o=this.target.x-this.current.x,a=this.target.y-this.current.y,l=this.target.z-this.current.z;this.current.x+=o*(this.speed*r),this.current.y+=a*(this.speed*r),this.current.z+=l*(this.speed*r)}get value(){return this.current}get x(){return this.current.x}get y(){return this.current.y}get z(){return this.current.z}}s.Vector3=i})(Rd||(Rd={}));function Xg(s){let e,t,i,n,r;t=new aL({props:{playerPosition:s[1].position,playerRotation:s[1].rotation,radius:s[6]/s[5],scale:s[8],zoom:s[5],enemies:s[0]}}),t.$on("rifle",s[9]);let o=s[2]&&jg(s);return{c(){e=Ne("div"),xi(t.$$.fragment),i=qt(),o&&o.c(),me(e,"class","svelte-87myo6")},m(a,l){bt(a,e,l),li(t,e,null),Be(e,i),o&&o.m(e,null),r=!0},p(a,l){const c={};l&2&&(c.playerPosition=a[1].position),l&2&&(c.playerRotation=a[1].rotation),l&96&&(c.radius=a[6]/a[5]),l&256&&(c.scale=a[8]),l&32&&(c.zoom=a[5]),l&1&&(c.enemies=a[0]),t.$set(c),a[2]?o?(o.p(a,l),l&4&&we(o,1)):(o=jg(a),o.c(),we(o,1),o.m(e,null)):o&&(Ki(),Oe(o,1,1,()=>{o=null}),Zi())},i(a){r||(we(t.$$.fragment,a),we(o),_n(()=>{r&&(n||(n=ko(e,Cr,{},!0)),n.run(1))}),r=!0)},o(a){Oe(t.$$.fragment,a),Oe(o),n||(n=ko(e,Cr,{},!1)),n.run(0),r=!1},d(a){a&&mt(e),ci(t),o&&o.d(),a&&n&&n.end()}}}function jg(s){let e,t;return e=new QP({props:{playerRotation:s[1].rotation,angle:s[4]}}),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p(i,n){const r={};n&2&&(r.playerRotation=i[1].rotation),n&16&&(r.angle=i[4]),e.$set(r)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function lL(s){let e,t,i,n;e=new gP({props:{hide:!s[7]}});let r=s[3]&&Xg(s);return{c(){xi(e.$$.fragment),t=qt(),r&&r.c(),i=n0()},m(o,a){li(e,o,a),bt(o,t,a),r&&r.m(o,a),bt(o,i,a),n=!0},p(o,[a]){const l={};a&128&&(l.hide=!o[7]),e.$set(l),o[3]?r?(r.p(o,a),a&8&&we(r,1)):(r=Xg(o),r.c(),we(r,1),r.m(i.parentNode,i)):r&&(Ki(),Oe(r,1,1,()=>{r=null}),Zi())},i(o){n||(we(e.$$.fragment,o),we(r),n=!0)},o(o){Oe(e.$$.fragment,o),Oe(r),n=!1},d(o){ci(e,o),o&&mt(t),r&&r.d(o),o&&mt(i)}}}function cL(s,e,t){const i=Math.tan(Qe.d3)+Number.EPSILON,n=Math.round(i*100),r=Bn(),o=n/10,a=new Rd.Number(0);let l,c,h=!1,u=!1,d=!1,f,m,g,y=!1,p;function x(b){t(2,h=b.detail.visible),t(4,f=b.detail.angle)}function _(b){t(6,g=b/o),t(8,p=b/n)}function M(){a.update(),t(5,m=Math.round((1-a.value)*1e5+Number.EPSILON)/1e5),(m===1||m===.5)&&Pt.remove(M)}function v(){setTimeout(()=>t(3,d=t(7,y=!0)),5e3),setTimeout(()=>r("firstUpdate"),2500),u=!0,r("start")}return K.add("Characters::Location",b=>{const{player:S,enemies:E}=b.data;!u&&v(),t(0,l=E),t(1,c=S)},!0),K.add("Player::Run",b=>{const S=b.data;S&&t(7,y=!1),a.set(+S*.5),Pt.remove(M),Pt.add(M)},!0),K.add("Player::Aim",b=>t(7,y=b.data),!0),Pr(()=>{yi.addResizeCallback(_),_(yi.size.width)}),Nn(()=>{K.remove("Characters::Location",!0),yi.removeResizeCallback(_),K.remove("Player::Run",!0),K.remove("Player::Aim",!0),Pt.remove(M)}),[l,c,h,d,f,m,g,y,p,x]}class hL extends Mi{constructor(e){super(),vi(this,e,cL,lL,_i,{})}}class uL{constructor(){this.playerSounds=new Map,this.enemySounds=new Map,this.pistolSounds=new Map,this.rifleSounds=new Map,this.onDisposeEnemy=this.disposeEnemy.bind(this),this.onCharacter=this.playCharacter.bind(this),this.enemies=new Map,this.onSpawnEnemy=this.spawnEnemy.bind(this),this.onThunder=this.playThuder.bind(this),this.onWeapon=this.playWeapon.bind(this),this.onUpdate=this.update.bind(this),this.camera=new pi(ls.config.fov,ls.config.aspect,ls.config.near,ls.config.far),this.listener=new xy,this.renderer=new sf,this.thunder=new xt,this.weapon=new xt,this.player=new xt,this.scene=new rf,this.renderer.debug.checkShaderErrors=!1,this.scene.matrixWorldAutoUpdate=!1,this.camera.matrixAutoUpdate=!1,this.scene.matrixAutoUpdate=!1,this.camera.add(this.listener),this.scene.add(this.player),this.createCharacterSounds(ue.Player.sounds,!0),this.createCharacterSounds(ue.Enemy.sounds,!1),this.createWeaponSounds(ue.Pistol.sounds,!0),this.createWeaponSounds(ue.Rifle.sounds,!1),this.addEventListeners(),Pt.add(this.onUpdate)}async loadSounds(e){return Promise.all(e.map(Ze.Loader.loadAudio.bind(Ze.Loader)))}async createCharacterSounds(e,t){const i=Object.keys(e),n=t?this.playerSounds:this.enemySounds;(await this.loadSounds(Object.values(e))).forEach((o,a)=>{const l=new Ua(this.listener);let c=i[a]==="scream"?1:.5;c=i[a]==="death"?2.5:c,l.setVolume(c).setBuffer(o),t&&this.player.add(l),n.set(i[a],l),l.name=i[a]})}async createWeaponSounds(e,t){const i=t?this.pistolSounds:this.rifleSounds,n=Object.keys(e);(await this.loadSounds(Object.values(e))).forEach((o,a)=>{const l=new Ua(this.listener);let c=n[a]==="bullet"?.25:2.5;c=n[a]==="shoot"?5:c,l.setVolume(c).setBuffer(o),i.set(n[a],l),this.weapon.add(l)})}async createThunderSounds(){(await this.loadSounds(ue.Level.lighting)).forEach(t=>{const i=new Ua(this.listener);i.setBuffer(t),this.thunder.add(i)})}async createAmbientSound(){const e=await Ze.Loader.loadAudio(ue.Level.ambient);this.ambient=new _y(this.listener),this.ambient.setBuffer(e),this.ambient.autoplay=!1,this.ambient.setVolume(0),this.ambient.setLoop(!0)}disposeEnemy(e){const t=e.data,i=this.enemies.get(t);this.scene.remove(i.clear()),this.enemies.delete(t)}async updateAmbient(){ot.getVisualValue("lighting")&&this.createThunderSounds(),ot.getVisualValue("raining")&&(await this.createAmbientSound(),this.scene.updateMatrixWorld(!0),setTimeout(()=>ve({begin:()=>this.ambient?.play(),targets:{volume:this.ambient?.getVolume()},update:({animations:e})=>this.ambient?.setVolume(+e[0].currentValue),easing:"linear",duration:1e3,volume:.25}),100))}spawnEnemy(e){const t=new xt,i=e.data;this.enemySounds.forEach((n,r)=>{const o=new Ua(this.listener);o.setBuffer(n.buffer).setVolume(n.getVolume()).name=r,t.add(o)}),this.scene.add(t),this.enemies.set(i,t)}removeEventListeners(){K.remove("Enemy::Dispose",!0),K.remove("SFX::Character",!0),K.remove("Enemy::Spawn",!0),K.remove("SFX::Thunder",!0),K.remove("SFX::Weapon",!0)}addEventListeners(){K.add("Enemy::Dispose",this.onDisposeEnemy,!0),K.add("SFX::Character",this.onCharacter,!0),K.add("Enemy::Spawn",this.onSpawnEnemy,!0),K.add("SFX::Thunder",this.onThunder,!0),K.add("SFX::Weapon",this.onWeapon,!0)}playThuder(e){this.thunder.position.copy(e.data),this.thunder.updateMatrix(),this.thunder.updateMatrixWorld();const t=this.thunder.position.distanceToSquared(this.listener.position),i=ih(0,this.thunder.children.length-1),n=this.thunder.children[i],r=(n.buffer?.duration??0)*1e3;n.setRefDistance(t/ue.Level.depth),n.setVolume(1),n.play(),setTimeout(()=>ve({targets:{volume:n?.getVolume()},complete:()=>n?.stop(),update:({animations:o})=>n?.setVolume(+o[0].currentValue),easing:"linear",duration:500,volume:0}),r-500)}playCharacter(e){let t=this.player;const{sfx:i,uuid:n,matrix:r,play:o}=e.data;let a=this.playerSounds.get(i);this.enemies.has(n)&&(t=this.enemies.get(n),a=t.getObjectByName(i)),t.matrixWorld.copy(r),t.updateMatrix(),t.updateMatrixWorld(),o?!a.isPlaying&&a.play():a.isPlaying&&a.stop()}playWeapon(e){const{sfx:t,pistol:i,matrix:n,play:r,delay:o}=e.data,l=(i?this.pistolSounds:this.rifleSounds).get(t);this.weapon.matrixWorld.copy(n),this.weapon.updateMatrix(),this.weapon.updateMatrixWorld(),r?!l.isPlaying&&l.play(o):l.isPlaying&&l.stop()}update(){this.updateCameraState(),this.renderer.render(this.scene,this.camera)}updateCameraState(){const{fov:e,aspect:t,near:i,far:n,matrix:r}=ls.config;this.camera.matrixWorld.copy(r),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.camera.aspect=t,this.camera.near=i,this.camera.far=n,this.camera.fov=e}set pause(e){this.ambient?.[e?"pause":"play"](),this.listener.setMasterVolume(+!e)}dispose(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.removeEventListeners(),this.playerSounds.clear(),this.pistolSounds.clear(),this.enemySounds.clear(),this.rifleSounds.clear(),Pt.remove(this.onUpdate),this.renderer.dispose(),this.enemies.clear(),this.pause=!0}}function dL(){return new Worker(""+new URL("WorkerManager-1a3e0911.js",import.meta.url).href)}class fL{constructor(){this.worker=new dL,this.events=new Map,this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this)}add(e,t,i){this.events.set(e,{callback:t,params:i})}transfer(e,t){this.worker.postMessage({event:"Offscreen::Transfer",params:{element:e,...t}},[e])}post(e,t){const i=this.events.get(e)?.params;this.worker.postMessage({event:e,params:{...i,...t}})}onMessage(e){const{name:t,response:i}=e.data;this.events.get(t)?.callback({data:i})}onError(e){console.error(e)}remove(e){this.events.delete(e)}dispose(){this.worker.onmessage=this.worker.onerror=null,this.events.clear()}clear(){this.events.clear()}}class pL{constructor(e){this.scene=e,this.started=!1,this.pointer=new CE,this.worker=new fL,this.onResize=this.resize.bind(this);const t=window.devicePixelRatio||1;K.createWorkerEvents(this.worker),yi.addResizeCallback(this.onResize),this.audioScene=new uL,(ue.offscreen?_h(()=>import("./OffscreenCanvas-04a4a2d0.js"),[],import.meta.url):_h(()=>import("./Onscreen-7169bdb5.js"),["./Onscreen-7169bdb5.js","./quality-244afbe8.js","./index-0e950fc8.js"],import.meta.url)).then(i=>this.manager=new i.default(this.scene,this.worker,t))}async createRaindrops(e){ot.getVisualValue("raindrops")&&_h(()=>import("./Raindrops-b4d1a5b2.js"),["./Raindrops-b4d1a5b2.js","./quality-244afbe8.js","./index-0e950fc8.js"],import.meta.url).then(t=>this.raindrops=new t.default(this.scene,e))}start(e){const{width:t,height:i}=yi.size;this.audioScene.updateAmbient(),this.createRaindrops(e),this.resize(t,i),this.toggleInputs(!1),this.toggleAudio(!1),this.manager.start(),this.started=!0}resize(e,t){this.manager.resize(e,t)}toggleInputs(e){this.manager.inputs=e}toggleAudio(e){this.audioScene.pause=e}dispose(){Pt.dispose(),this.pause=!0,this.started=!1,yi.removeResizeCallback(this.onResize),this.audioScene.dispose(),this.raindrops?.dispose(),this.manager?.dispose(),this.pointer.dispose(),this.worker.dispose(),delete this.raindrops,K.dispose()}set pause(e){e?this.pointer.exitPointerLock():this.pointer.requestPointerLock(),this.started&&(this.toggleInputs(e),this.toggleAudio(e)),this.raindrops?.pause(e),this.manager.pause=e,Pt.pause=e}get ready(){return!!this.manager}}function qg(s){let e,t;return e=new hL({}),e.$on("start",s[4]),e.$on("firstUpdate",s[8]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p:wt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function mL(s){let e,t,i,n,r=s[0]&&qg(s);return{c(){e=Ne("canvas"),t=qt(),r&&r.c(),i=n0(),me(e,"width",s[2]),me(e,"height",s[3]),me(e,"class","svelte-1on0yzg")},m(o,a){bt(o,e,a),s[7](e),bt(o,t,a),r&&r.m(o,a),bt(o,i,a),n=!0},p(o,[a]){o[0]?r?(r.p(o,a),a&1&&we(r,1)):(r=qg(o),r.c(),we(r,1),r.m(i.parentNode,i)):r&&(Ki(),Oe(r,1,1,()=>{r=null}),Zi())},i(o){n||(we(r),n=!0)},o(o){Oe(r),n=!1},d(o){o&&mt(e),s[7](null),o&&mt(t),r&&r.d(o),o&&mt(i)}}}function gL(s,e,t){let i,{running:n}=e,r,{raindrops:o}=e;const a=yi.size.width,l=yi.size.height,c=Bn();function h(){i.start(o.$$.ctx[0])}Pr(()=>{t(0,i=new pL(r)),K.add("Game::LoopInit",()=>{K.add("Game::Quit",()=>c("quit"),!0),K.remove("Game::LoopInit",!0),c("ready")},!0)}),Nn(()=>{K.remove("Game::Quit",!0),i.dispose()});function u(f){Os[f?"unshift":"push"](()=>{r=f,t(1,r)})}function d(f){Ni.call(this,s,f)}return s.$$set=f=>{"running"in f&&t(5,n=f.running),"raindrops"in f&&t(6,o=f.raindrops)},s.$$.update=()=>{s.$$.dirty&33&&(f=>{i?.ready&&t(0,i.pause=!f,i)})(n)},[i,r,a,l,h,n,o,u,d]}class yL extends Mi{constructor(e){super(),vi(this,e,gL,mL,_i,{running:5,raindrops:6})}}function $g(s){let e,t;return e=new KP({props:{ready:s[3]}}),e.$on("update",s[8]),e.$on("hide",s[9]),e.$on("start",s[6]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p(i,n){const r={};n&8&&(r.ready=i[3]),e.$set(r)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function Yg(s){let e,t;return e=new SP({}),e.$on("continue",s[10]),e.$on("quit",s[7]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p:wt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function Kg(s){let e,t;return e=new l_({props:{loading:!0}}),e.$on("complete",s[11]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p:wt,i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function Zg(s){let e,t;return e=new yL({props:{running:!s[5],raindrops:s[1]}}),e.$on("quit",s[7]),e.$on("ready",s[12]),e.$on("firstUpdate",s[13]),{c(){xi(e.$$.fragment)},m(i,n){li(e,i,n),t=!0},p(i,n){const r={};n&32&&(r.running=!i[5]),n&2&&(r.raindrops=i[1]),e.$set(r)},i(i){t||(we(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){ci(e,i)}}}function _L(s){let e,t,i,n,r,o,a,l=s[2]&&!s[4]&&$g(s),c=s[5]&&!s[2]&&Yg(s),h=s[3]&&s[4]&&Kg(s),u=!s[0]&&Zg(s),d={updating:s[0]};return o=new EP({props:d}),s[14](o),{c(){e=Ne("main"),l&&l.c(),t=qt(),c&&c.c(),i=qt(),h&&h.c(),n=qt(),u&&u.c(),r=qt(),xi(o.$$.fragment),me(e,"id","root")},m(f,m){bt(f,e,m),l&&l.m(e,null),Be(e,t),c&&c.m(e,null),Be(e,i),h&&h.m(e,null),Be(e,n),u&&u.m(e,null),Be(e,r),li(o,e,null),a=!0},p(f,[m]){f[2]&&!f[4]?l?(l.p(f,m),m&20&&we(l,1)):(l=$g(f),l.c(),we(l,1),l.m(e,t)):l&&(Ki(),Oe(l,1,1,()=>{l=null}),Zi()),f[5]&&!f[2]?c?(c.p(f,m),m&36&&we(c,1)):(c=Yg(f),c.c(),we(c,1),c.m(e,i)):c&&(Ki(),Oe(c,1,1,()=>{c=null}),Zi()),f[3]&&f[4]?h?(h.p(f,m),m&24&&we(h,1)):(h=Kg(f),h.c(),we(h,1),h.m(e,n)):h&&(Ki(),Oe(h,1,1,()=>{h=null}),Zi()),f[0]?u&&(Ki(),Oe(u,1,1,()=>{u=null}),Zi()):u?(u.p(f,m),m&1&&we(u,1)):(u=Zg(f),u.c(),we(u,1),u.m(e,r));const g={};m&1&&(g.updating=f[0]),o.$set(g)},i(f){a||(we(l),we(c),we(h),we(u),we(o.$$.fragment,f),a=!0)},o(f){Oe(l),Oe(c),Oe(h),Oe(u),Oe(o.$$.fragment,f),a=!1},d(f){f&&mt(e),l&&l.d(),c&&c.d(),h&&h.d(),u&&u.d(),s[14](null),ci(o)}}}function xL(s,e,t){let i,n=!0,r=!1,o=!1,a=!0,l=!0;const c=()=>{let _=window.location.pathname;const M=ue.basePath(!0);return _=_.slice(0,_.lastIndexOf("/")),!M&&`${_}/assets`||M};function h(){setTimeout(()=>t(5,l=!1),500),t(4,a=!0)}function u(){K.dispatch("Rain::Toggle",!1),setTimeout(()=>t(0,o=!1),1e3),t(2,n=!0),t(0,o=!0),t(5,l=!0)}(()=>{const _=c(),{style:M}=document.documentElement,v=`${_}/images/cursor/default.png`,b=`${_}/images/cursor/pointer.png`;M.setProperty("--default-cursor",`url("${v}")`),M.setProperty("--pointer-cursor",`url("${b}")`)})(),Nn(()=>K.remove("Game::Pause"));const d=({detail:_})=>t(0,o=_),f=()=>t(3,r=!1),m=()=>t(5,l=!1),g=()=>t(4,a=!1),y=()=>t(3,r=!0),p=()=>{t(2,n=!1),t(4,a=!1)};function x(_){Os[_?"unshift":"push"](()=>{i=_,t(1,i)})}return s.$$.update=()=>{s.$$.dirty&1&&(_=>_?K.remove("Game::Pause"):K.add("Game::Pause",()=>t(5,l=!0)))(o)},[o,i,n,r,a,l,h,u,d,f,m,g,y,p,x]}class vL extends Mi{constructor(e){super(),vi(this,e,xL,_L,_i,{})}}const P2=Object.freeze(Object.defineProperty({__proto__:null,default:vL},Symbol.toStringTag,{value:"Module"}));export{P2 as A,K as G,lP as M,Pt as R,yi as V};
