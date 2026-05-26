/**
 * PlayNest / YAZH runtime asset path rewriter.
 * Must run before game bundles and inside the Web Worker.
 */
(function (global) {
  "use strict";

  var ROOT = "/games/yet-another-zombie-horror";

  try {
    var loc = global.location;
    if (loc && loc.pathname) {
      var p = loc.pathname.replace(/\/[^/]*$/, "");
      if (/\/assets$/i.test(p)) p = p.slice(0, -7);
      if (p && p.indexOf("yet-another-zombie-horror") !== -1) ROOT = p;
    }
  } catch (e) {}

  global.__YAZH_BASE__ = ROOT;
  var ASSET_ROOT = ROOT + "/assets";

  global.__YAZH_ASSET_ROOT = ASSET_ROOT;
  global.__PLAYNEST_YAZH_ASSET_ROOT = ASSET_ROOT;

  function fixUrl(url) {
    if (url == null) return url;
    var s = String(url);
    if (s.indexOf("/assets/") === 0) return ROOT + s;
    if (s === "/assets") return ASSET_ROOT;
    if (s.indexOf("assets/") === 0) return ROOT + "/" + s;
    return s;
  }

  function fixFetchInput(input) {
    if (typeof input === "string") return fixUrl(input);
    try {
      if (typeof URL !== "undefined" && input instanceof URL) {
        return new URL(fixUrl(input.href));
      }
    } catch (e) {}
    try {
      if (typeof Request !== "undefined" && input instanceof Request) {
        return new Request(fixUrl(input.url), input);
      }
    } catch (e) {}
    return input;
  }

  if (typeof global.fetch === "function") {
    var nativeFetch = global.fetch.bind(global);
    global.fetch = function (input, init) {
      return nativeFetch(fixFetchInput(input), init);
    };
  }

  if (global.XMLHttpRequest) {
    var xhrOpen = global.XMLHttpRequest.prototype.open;
    global.XMLHttpRequest.prototype.open = function (method, url) {
      arguments[1] = fixUrl(url);
      return xhrOpen.apply(this, arguments);
    };
  }

  if (global.Image) {
    var desc = Object.getOwnPropertyDescriptor(global.Image.prototype, "src");
    if (desc && desc.set) {
      Object.defineProperty(global.Image.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: desc.get,
        set: function (v) {
          desc.set.call(this, fixUrl(v));
        },
      });
    }
  }

  if (global.URL) {
    var NativeURL = global.URL;
    function PatchedURL(url, base) {
      if (arguments.length === 0) return new NativeURL();
      if (arguments.length === 1) return new NativeURL(fixUrl(url));
      return new NativeURL(fixUrl(url), base);
    }
    PatchedURL.prototype = NativeURL.prototype;
    PatchedURL.createObjectURL = NativeURL.createObjectURL.bind(NativeURL);
    PatchedURL.revokeObjectURL = NativeURL.revokeObjectURL.bind(NativeURL);
    global.URL = PatchedURL;
  }

  global.__yazhFixUrl = fixUrl;
  global.__yazhPatchConfigs = function (configs) {
    if (!configs || typeof configs.basePath !== "function") return;
    configs.basePath = function () {
      return ASSET_ROOT;
    };
  };

  global.__yazhForceAssetRoot = function () {
    return ASSET_ROOT;
  };
})(typeof self !== "undefined" ? self : window);

(function(){"use strict";const __pnYazhAssetBase=(()=>{const l=typeof self<"u"&&self.location?self.location:typeof window<"u"&&window.location?window.location:null;let p=l&&l.pathname?l.pathname.replace(/\/[^/]*$/,""):"/games/yet-another-zombie-horror";p&&p.length||(p="/games/yet-another-zombie-horror"),/\/assets$/i.test(p)&&(p=p.slice(0,-7));return p+"/assets"})();const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,Ka=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Ot(r,e,t){return Math.max(e,Math.min(t,r))}function ug(r,e){return(r%e+e)%e}function zl(r,e,t){return(1-t)*r+t*e}function dg(r){return r*Ya}function fg(r){return r*Ka}function Eu(r){return(r&r-1)===0&&r!==0}function pg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}let fi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const v=Math.sqrt(y),M=Math.atan2(v,p*_);g=Math.sin(g*M)/v,o=Math.sin(o*M)/v}const S=o*_;if(l=l*g+d*S,c=c*g+f*S,h=h*g+m*S,u=u*g+x*S,g===1-o){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class sg{constructor(e=0,t=0,i=0){sg.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*n-o*i,h=l*i+o*t-s*n,u=l*n+s*i-a*t,d=-s*t-a*i-o*n;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Ol=new L,Ru=new fi;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="152",Vs=0,Pu=1,Lu=2,Iu=1,mg=100,gg=204,xg=205,yg=3,_g=0,Du=300,ea=1e3,ta=1001,kl=1002,Vl=1003,vg=1004,Mg=1005,Hl=1006,bg=1007,Gl=1008,Sg=1009,wg=1015,Fu=1023,ia=2300,Hs=2301,Wl=2302,Uu=2400,Nu=2401,Bu=2402,Tg=2500,Ag=0,zu=1,Xl=2,Eg=3e3,$l=3001,Rg=0,jl="",Lt="srgb",ql="srgb-linear",Ou="display-p3",Yl=7680,Cg=519,Kl=35044;let Za=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}};const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ku=1234567;const na=Math.PI/180,sa=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[r&255]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function It(r,e,t){return Math.max(e,Math.min(t,r))}function Zl(r,e){return(r%e+e)%e}function Pg(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Lg(r,e,t){return r!==e?(t-r)/(e-r):0}function ra(r,e,t){return(1-t)*r+t*e}function Ig(r,e,t,i){return ra(r,e,1-Math.exp(-t*i))}function Dg(r,e=1){return e-Math.abs(Zl(r,e*2)-e)}function Fg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ug(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ng(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Bg(r,e){return r+Math.random()*(e-r)}function zg(r){return r*(.5-Math.random())}function Og(r){r!==void 0&&(ku=r);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kg(r){return r*na}function Vg(r){return r*sa}function Hg(r){return(r&r-1)===0&&r!==0}function Vu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wg(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Hu={DEG2RAD:na,RAD2DEG:sa,generateUUID:bi,clamp:It,euclideanModulo:Zl,mapLinear:Pg,inverseLerp:Lg,lerp:ra,damp:Ig,pingpong:Dg,smoothstep:Fg,smootherstep:Ug,randInt:Ng,randFloat:Bg,randFloatSpread:zg,seededRandom:Og,degToRad:kg,radToDeg:Vg,isPowerOfTwo:Hg,ceilPowerOfTwo:Vu,floorPowerOfTwo:Gg,setQuaternionFromProperEuler:Wg,normalize:tt,denormalize:sn};let rt=class rg{constructor(e=0,t=0){rg.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class ag{constructor(){ag.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],x=n[0],g=n[3],p=n[6],_=n[1],y=n[4],S=n[7],v=n[2],M=n[5],T=n[8];return s[0]=a*x+o*_+l*v,s[3]=a*g+o*y+l*M,s[6]=a*p+o*S+l*T,s[1]=c*x+h*_+u*v,s[4]=c*g+h*y+u*M,s[7]=c*p+h*S+u*T,s[2]=d*x+f*_+m*v,s[5]=d*g+f*y+m*M,s[8]=d*p+f*S+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Jl=new Un;function Xg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Gu={};function ec(r){r in Gu||(Gu[r]=!0,console.warn(r))}function Gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const $g=new Un().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jg=new Un().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qg(r){return r.convertSRGBToLinear().applyMatrix3(jg)}function Yg(r){return r.applyMatrix3($g).convertLinearToSRGB()}const Kg={[ql]:r=>r,[Lt]:r=>r.convertSRGBToLinear(),[Ou]:qg},Zg={[ql]:r=>r,[Lt]:r=>r.convertLinearToSRGB(),[Ou]:Yg},Si={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ql},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Kg[e],n=Zg[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ws,Jg=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=Ql("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Gs(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gs(t[i]/255)*255):t[i]=Gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qg=class{constructor(e=null){this.isSource=!0,this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ic(n[a].image)):s.push(ic(n[a]))}else s=ic(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ic(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0,cs=class Nl extends Za{constructor(e=Nl.DEFAULT_IMAGE,t=Nl.DEFAULT_MAPPING,i=ta,n=ta,s=Hl,a=Gl,o=Fu,l=Sg,c=Nl.DEFAULT_ANISOTROPY,h=jl){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=bi(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ec("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$l?Lt:jl),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case ta:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case ta:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ec("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?$l:Eg}set encoding(e){ec("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$l?Lt:jl}};cs.DEFAULT_IMAGE=null,cs.DEFAULT_MAPPING=Du,cs.DEFAULT_ANISOTROPY=1;let ni=class og{constructor(e=0,t=0,i=0,n=1){og.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(f+1)/2,v=(p+1)/2,M=(h+d)/4,T=(u+x)/4,C=(m+g)/4;return y>S&&y>v?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=M/i,s=T/i):S>v?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=M/n,s=C/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=T/s,n=C/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class Nn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const v=Math.sqrt(y),M=Math.atan2(v,p*_);g=Math.sin(g*M)/v,o=Math.sin(o*M)/v}const S=o*_;if(l=l*g+d*S,c=c*g+f*S,h=h*g+m*S,u=u*g+x*S,g===1-o){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*n-o*i,h=l*i+o*t-s*n,u=l*n+s*i-a*t,d=-s*t-a*i-o*n;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new I,Wu=new Nn;let Vt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox),Xs.applyMatrix4(e.matrixWorld),this.union(Xs);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)an.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(an)}else n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Ja.subVectors(this.max,aa),$s.subVectors(e.a,aa),js.subVectors(e.b,aa),qs.subVectors(e.c,aa),Bn.subVectors(js,$s),zn.subVectors(qs,js),hs.subVectors($s,qs);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-hs.z,hs.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,hs.z,0,-hs.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-hs.y,hs.x,0];return!sc(t,$s,js,qs,Ja)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,$s,js,qs,Ja))?!1:(Qa.crossVectors(Bn,zn),t=[Qa.x,Qa.y,Qa.z],sc(t,$s,js,qs,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const rn=[new I,new I,new I,new I,new I,new I,new I,new I],an=new I,Xs=new Vt,$s=new I,js=new I,qs=new I,Bn=new I,zn=new I,hs=new I,aa=new I,Ja=new I,Qa=new I,us=new I;function sc(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){us.fromArray(r,s);const o=n.x*Math.abs(us.x)+n.y*Math.abs(us.y)+n.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=i.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const t0=new Vt,oa=new I,rc=new I;let zi=class{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):t0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(oa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(rc)),this.expandByPoint(oa.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const on=new I,ac=new I,eo=new I,On=new I,oc=new I,to=new I,lc=new I;let cc=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ac.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),On.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=On.dot(this.direction),l=-On.dot(eo),c=On.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ac).addScaledVector(eo,d),f}intersectSphere(e,t){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),n=on.dot(on)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,n,s){oc.subVectors(t,e),to.subVectors(i,e),lc.crossVectors(oc,to);let a=this.direction.dot(lc),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(to.crossVectors(On,to));if(l<0)return null;const c=o*this.direction.dot(oc.cross(On));if(c<0||l+c>a)return null;const h=-o*On.dot(lc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class Au{constructor(){Au.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,a,o,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Au().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),a=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,n0)}lookAt(e,t,i){const n=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),kn.crossVectors(i,si),kn.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),kn.crossVectors(i,si)),kn.normalize(),io.crossVectors(si,kn),n[0]=kn.x,n[4]=io.x,n[8]=si.x,n[1]=kn.y,n[5]=io.y,n[9]=si.y,n[2]=kn.z,n[6]=io.z,n[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],_=i[3],y=i[7],S=i[11],v=i[15],M=n[0],T=n[4],C=n[8],b=n[12],w=n[1],F=n[5],U=n[9],P=n[13],N=n[2],z=n[6],q=n[10],V=n[14],H=n[3],W=n[7],Z=n[11],oe=n[15];return s[0]=a*M+o*w+l*N+c*H,s[4]=a*T+o*F+l*z+c*W,s[8]=a*C+o*U+l*q+c*Z,s[12]=a*b+o*P+l*V+c*oe,s[1]=h*M+u*w+d*N+f*H,s[5]=h*T+u*F+d*z+f*W,s[9]=h*C+u*U+d*q+f*Z,s[13]=h*b+u*P+d*V+f*oe,s[2]=m*M+x*w+g*N+p*H,s[6]=m*T+x*F+g*z+p*W,s[10]=m*C+x*U+g*q+p*Z,s[14]=m*b+x*P+g*V+p*oe,s[3]=_*M+y*w+S*N+v*H,s[7]=_*T+y*F+S*z+v*W,s[11]=_*C+y*U+S*q+v*Z,s[15]=_*b+y*P+S*V+v*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=u*g*c-x*d*c+x*l*f-o*g*f-u*l*p+o*d*p,y=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,S=h*x*c-m*u*c+m*o*f-a*x*f-h*o*p+a*u*p,v=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,M=t*_+i*y+n*S+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*p-i*d*p)*T,e[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*p+i*l*p)*T,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*T,e[4]=y*T,e[5]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*T,e[6]=(m*l*s-a*g*s-m*n*c+t*g*c+a*n*p-t*l*p)*T,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*T,e[8]=S*T,e[9]=(m*u*s-h*x*s-m*i*f+t*x*f+h*i*p-t*u*p)*T,e[10]=(a*x*s-m*o*s+m*i*c-t*x*c-a*i*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*T,e[12]=v*T,e[13]=(h*x*n-m*u*n+m*i*d-t*x*d-h*i*g+t*u*g)*T,e[14]=(m*o*n-a*x*n-m*i*l+t*x*l+a*i*g-t*o*g)*T,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,x=a*h,g=a*u,p=o*u,_=l*c,y=l*h,S=l*u,v=i.x,M=i.y,T=i.z;return n[0]=(1-(x+p))*v,n[1]=(f+S)*v,n[2]=(m-y)*v,n[3]=0,n[4]=(f-S)*M,n[5]=(1-(d+p))*M,n[6]=(g+_)*M,n[7]=0,n[8]=(m+y)*T,n[9]=(g-_)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Ys.set(n[0],n[1],n[2]).length();const a=Ys.set(n[4],n[5],n[6]).length(),o=Ys.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],wi.copy(this);const c=1/s,h=1/a,u=1/o;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,t.setFromRotationMatrix(wi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){const o=this.elements,l=1/(t-e),c=1/(i-n),h=1/(a-s),u=(t+e)*l,d=(i+n)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const Ys=new I,wi=new Ae,i0=new I(0,0,0),n0=new I(1,1,1),kn=new I,io=new I,si=new I,Xu=new Ae,$u=new Nn;let ju=class lg{constructor(e=0,t=0,i=0,n=lg.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $u.setFromEuler(this),this.setFromQuaternion($u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ju.DEFAULT_ORDER="XYZ";let s0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0;const qu=new I,Ks=new Nn,ln=new Ae,no=new I,la=new I,a0=new I,o0=new Nn,Yu=new I(1,0,0),Ku=new I(0,1,0),Zu=new I(0,0,1),l0={type:"added"},Ju={type:"removed"};let Dt=class Bl extends Za{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bl.DEFAULT_UP.clone();const e=new I,t=new ju,i=new Nn,n=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Un}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Bl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?no.copy(e):no.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(la,no,this.up):ln.lookAt(no,la,this.up),this.quaternion.setFromRotationMatrix(ln),n&&(ln.extractRotation(n.matrixWorld),Ks.setFromRotationMatrix(ln),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(l0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ju)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}};Dt.DEFAULT_UP=new I(0,1,0),Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new I,cn=new I,hc=new I,hn=new I,Zs=new I,Js=new I,Qu=new I,uc=new I,dc=new I,fc=new I;let so=!1,Oi=class ks{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ti.subVectors(e,t),n.cross(Ti);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ti.subVectors(n,t),cn.subVectors(i,t),hc.subVectors(e,t);const a=Ti.dot(Ti),o=Ti.dot(cn),l=Ti.dot(hc),c=cn.dot(cn),h=cn.dot(hc),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,i,n,s,a,o,l){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,hn),l.setScalar(0),l.addScaledVector(s,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l}static isFrontFacing(e,t,i,n){return Ti.subVectors(i,t),cn.subVectors(e,t),Ti.cross(cn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ti.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ks.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ks.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),ks.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return ks.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ks.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ks.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Zs.subVectors(n,i),Js.subVectors(s,i),uc.subVectors(e,i);const l=Zs.dot(uc),c=Js.dot(uc);if(l<=0&&c<=0)return t.copy(i);dc.subVectors(e,n);const h=Zs.dot(dc),u=Js.dot(dc);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Zs,a);fc.subVectors(e,s);const f=Zs.dot(fc),m=Js.dot(fc);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Js,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Qu.subVectors(s,n),o=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Qu,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Zs,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},c0=0,ds=class extends Za{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Iu,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gg,this.blendDst=xg,this.blendEquation=mg,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yg,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yl,this.stencilZFail=Yl,this.stencilZPass=Yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Iu&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ro={h:0,s:0,l:0};function pc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let St=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Si.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Si.workingColorSpace){return this.r=e,this.g=t,this.b=i,Si.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Si.workingColorSpace){if(e=Zl(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=pc(a,s,e+1/3),this.g=pc(a,s,e),this.b=pc(a,s,e-1/3)}return Si.toWorkingColorSpace(this,n),this}setStyle(e,t=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Si.fromWorkingColorSpace(Ht.copy(this),e),Math.round(It(Ht.r*255,0,255))*65536+Math.round(It(Ht.g*255,0,255))*256+Math.round(It(Ht.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Si.workingColorSpace){Si.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,n=Ht.g,s=Ht.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Si.workingColorSpace){return Si.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Lt){Si.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,n=Ht.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),Ai.h+=e,Ai.s+=t,Ai.l+=i,this.setHSL(Ai.h,Ai.s,Ai.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ro);const i=ra(Ai.h,ro.h,t),n=ra(Ai.s,ro.s,t),s=ra(Ai.l,ro.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ht=new St;St.NAMES=ed;let Qs=class extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const gt=new I,ao=new rt;let $t=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},h0=class extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}},u0=class extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}},un=class extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}},d0=0;const pi=new Ae,mc=new Dt,er=new I,ri=new Vt,ca=new Vt,wt=new I;let ki=class cg extends Za{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?u0:h0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Un().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(ri.min,ca.min),ri.expandByPoint(wt),wt.addVectors(ri.max,ca.max),ri.expandByPoint(wt)):(ri.expandByPoint(ca.min),ri.expandByPoint(ca.max))}ri.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),wt.add(er)),n=Math.max(n,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new I,h[w]=new I;const u=new I,d=new I,f=new I,m=new rt,x=new rt,g=new rt,p=new I,_=new I;function y(w,F,U){u.fromArray(n,w*3),d.fromArray(n,F*3),f.fromArray(n,U*3),m.fromArray(a,w*2),x.fromArray(a,F*2),g.fromArray(a,U*2),d.sub(u),f.sub(u),x.sub(m),g.sub(m);const P=1/(x.x*g.y-g.x*x.y);isFinite(P)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(P),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(P),c[w].add(p),c[F].add(p),c[U].add(p),h[w].add(_),h[F].add(_),h[U].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,F=S.length;w<F;++w){const U=S[w],P=U.start,N=U.count;for(let z=P,q=P+N;z<q;z+=3)y(i[z+0],i[z+1],i[z+2])}const v=new I,M=new I,T=new I,C=new I;function b(w){T.fromArray(s,w*3),C.copy(T);const F=c[w];v.copy(F),v.sub(T.multiplyScalar(T.dot(F))).normalize(),M.crossVectors(C,F);const P=M.dot(h[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=P}for(let w=0,F=S.length;w<F;++w){const U=S[w],P=U.start,N=U.count;for(let z=P,q=P+N;z<q;z+=3)b(i[z+0]),b(i[z+1]),b(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new $t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cg,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const td=new Ae,Vi=new cc,oo=new zi,id=new I,tr=new I,ir=new I,nr=new I,gc=new I,lo=new I,co=new rt,ho=new rt,uo=new rt,nd=new I,sd=new I,rd=new I,fo=new I,po=new I;let mo=class extends Dt{constructor(e=new ki,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(gc.fromBufferAttribute(u,e),a?lo.addScaledVector(gc,h):lo.addScaledVector(gc.sub(t),h))}t.add(lo)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(oo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(oo,id)===null||Vi.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(td.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const x=u[f],g=s[x.materialIndex],p=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let y=p,S=_;y<S;y+=3){const v=a.getX(y),M=a.getX(y+1),T=a.getX(y+2);i=go(this,g,e,Vi,l,c,h,v,M,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=f,g=m;x<g;x+=3){const p=a.getX(x),_=a.getX(x+1),y=a.getX(x+2);i=go(this,s,e,Vi,l,c,h,p,_,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const x=u[f],g=s[x.materialIndex],p=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let y=p,S=_;y<S;y+=3){const v=y,M=y+1,T=y+2;i=go(this,g,e,Vi,l,c,h,v,M,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let x=f,g=m;x<g;x+=3){const p=x,_=x+1,y=x+2;i=go(this,s,e,Vi,l,c,h,p,_,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};function f0(r,e,t,i,n,s,a,o){let l;if(e.side===Pu?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Vs,o),l===null)return null;po.copy(o),po.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:r}}function go(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,tr),r.getVertexPosition(l,ir),r.getVertexPosition(c,nr);const h=f0(r,e,t,i,tr,ir,nr,fo);if(h){n&&(co.fromBufferAttribute(n,o),ho.fromBufferAttribute(n,l),uo.fromBufferAttribute(n,c),h.uv=Oi.getInterpolation(fo,tr,ir,nr,co,ho,uo,new rt)),s&&(co.fromBufferAttribute(s,o),ho.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,c),h.uv1=Oi.getInterpolation(fo,tr,ir,nr,co,ho,uo,new rt),h.uv2=h.uv1),a&&(nd.fromBufferAttribute(a,o),sd.fromBufferAttribute(a,l),rd.fromBufferAttribute(a,c),h.normal=Oi.getInterpolation(fo,tr,ir,nr,nd,sd,rd,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};Oi.getNormal(tr,ir,nr,u.normal),h.face=u}return h}let p0=class hg extends ki{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(u,2));function m(x,g,p,_,y,S,v,M,T,C,b){const w=S/T,F=v/C,U=S/2,P=v/2,N=M/2,z=T+1,q=C+1;let V=0,H=0;const W=new I;for(let Z=0;Z<q;Z++){const oe=Z*F-P;for(let re=0;re<z;re++){const G=re*w-U;W[x]=G*_,W[g]=oe*y,W[p]=N,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(re/T),u.push(1-Z/C),V+=1}}for(let Z=0;Z<C;Z++)for(let oe=0;oe<T;oe++){const re=d+oe+z*Z,G=d+oe+z*(Z+1),J=d+(oe+1)+z*(Z+1),ie=d+(oe+1)+z*Z;l.push(re,G,ie),l.push(G,J,ie),H+=6}o.addGroup(f,H,b),f+=H,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hg(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ad=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xc=class extends ad{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const yc=new I,m0=new I,g0=new Un;let Vn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=yc.subVectors(i,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g0.getNormalMatrix(e),n=this.coplanarPoint(yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const fs=new zi,xo=new I;let x0=class{constructor(e=new Vn,t=new Vn,i=new Vn,n=new Vn,s=new Vn,a=new Vn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],x=i[11],g=i[12],p=i[13],_=i[14],y=i[15];return t[0].setComponents(o-n,u-l,x-d,y-g).normalize(),t[1].setComponents(o+n,u+l,x+d,y+g).normalize(),t[2].setComponents(o+s,u+c,x+f,y+p).normalize(),t[3].setComponents(o-s,u-c,x-f,y-p).normalize(),t[4].setComponents(o-a,u-h,x-m,y-_).normalize(),t[5].setComponents(o+a,u+h,x+m,y+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(xo.x=n.normal.x>0?e.max.x:e.min.x,xo.y=n.normal.y>0?e.max.y:e.min.y,xo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},od=class extends ad{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_c=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}};class y0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new I;class vc{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ld=new I,cd=new ni,hd=new ni,_0=new I,ud=new Ae,sr=new I;class v0 extends mo{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)sr.fromBufferAttribute(t,i),this.applyBoneTransform(i,sr),this.boundingBox.expandByPoint(sr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)sr.fromBufferAttribute(t,i),this.applyBoneTransform(i,sr),this.boundingSphere.expandByPoint(sr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ni,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;cd.fromBufferAttribute(n.attributes.skinIndex,e),hd.fromBufferAttribute(n.attributes.skinWeight,e),ld.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=hd.getComponent(s);if(a!==0){const o=cd.getComponent(s);ud.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(_0.copy(ld).applyMatrix4(ud),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dd extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class M0 extends cs{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Vl,h=Vl,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new Ae,b0=new Ae;class Mc{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ae;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:b0;fd.multiplyMatrices(o,t[s]),fd.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Mc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Vu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new M0(t,e,e,Fu,wg);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new dd),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}let pd=class extends $t{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};const rr=new Ae,md=new Ae,yo=[],gd=new Vt,S0=new Ae,ha=new mo,ua=new zi;let w0=class extends mo{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,S0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),gd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),ua.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,rr),md.multiplyMatrices(i,rr),ha.matrixWorld=md,ha.raycast(e,yo);for(let a=0,o=yo.length;a<o;a++){const l=yo[a];l.instanceId=s,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class xd extends ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yd=new I,_d=new I,vd=new Ae,bc=new cc,_o=new zi;class Sc extends Dt{constructor(e=new ki,t=new xd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)yd.fromBufferAttribute(t,n-1),_d.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=yd.distanceTo(_d);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(n),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;vd.copy(n).invert(),bc.copy(e.ray).applyMatrix4(vd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let y=p,S=_-1;y<S;y+=f){const v=m.getX(y),M=m.getX(y+1);if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,M),bc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let y=p,S=_-1;y<S;y+=f){if(c.fromBufferAttribute(g,y),h.fromBufferAttribute(g,y+1),bc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Md=new I,bd=new I;class T0 extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Md.fromBufferAttribute(t,n),bd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Md.distanceTo(bd);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A0 extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Sd=class extends ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const wd=new Ae,wc=new cc,vo=new zi,Mo=new I;let E0=class extends Dt{constructor(e=new ki,t=new Sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(n),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;wd.copy(n).invert(),wc.copy(e.ray).applyMatrix4(wd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Mo.fromBufferAttribute(u,g),Td(Mo,g,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Mo.fromBufferAttribute(u,m),Td(Mo,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Td(r,e,t,i,n,s,a){const o=wc.distanceSqToPoint(r);if(o<t){const l=new I;wc.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}let Tc=class extends ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rg,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};class ps extends Tc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Hn(r,e,t){return Ad(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function bo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ad(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function R0(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Ed(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function Rd(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}let da=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},C0=class extends da{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nu:s=e,o=2*t-i;break;case Bu:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:a=e,l=2*i-t;break;case Bu:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,S=f*g-f*x;for(let v=0;v!==o;++v)s[v]=p*a[h+v]+_*a[c+v]+y*a[l+v]+S*a[u+v];return s}},P0=class extends da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},L0=class extends da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Hi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new L0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new P0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new C0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Hn(i,s,a),this.values=Hn(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ad(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Hn(this.times),t=Hn(this.values),i=this.getValueSize(),n=this.getInterpolation()===Wl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Hn(e,0,a),this.values=Hn(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=Hn(this.times,0),t=Hn(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Hi.prototype.TimeBufferType=Float32Array,Hi.prototype.ValueBufferType=Float32Array,Hi.prototype.DefaultInterpolation=Hs;let ar=class extends Hi{};ar.prototype.ValueTypeName="bool",ar.prototype.ValueBufferType=Array,ar.prototype.DefaultInterpolation=ia,ar.prototype.InterpolantFactoryMethodLinear=void 0,ar.prototype.InterpolantFactoryMethodSmooth=void 0;let Cd=class extends Hi{};Cd.prototype.ValueTypeName="color";let fa=class extends Hi{};fa.prototype.ValueTypeName="number";let I0=class extends da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Nn.slerpFlat(s,0,a,c-o,a,c,l);return s}},ms=class extends Hi{InterpolantFactoryMethodLinear(e){return new I0(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion",ms.prototype.DefaultInterpolation=Hs,ms.prototype.InterpolantFactoryMethodSmooth=void 0;let or=class extends Hi{};or.prototype.ValueTypeName="string",or.prototype.ValueBufferType=Array,or.prototype.DefaultInterpolation=ia,or.prototype.InterpolantFactoryMethodLinear=void 0,or.prototype.InterpolantFactoryMethodSmooth=void 0;let pa=class extends Hi{};pa.prototype.ValueTypeName="vector";let D0=class{constructor(e,t=-1,i,n=Tg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(U0(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Hi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=R0(l);l=Ed(l,1,h),c=Ed(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new fa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];Rd(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}n.push(new fa(".morphTargetInfluence["+x+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(pa,f+".position",d,"pos",n),i(ms,f+".quaternion",d,"rot",n),i(pa,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function F0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fa;case"vector":case"vector2":case"vector3":case"vector4":return pa;case"color":return Cd;case"quaternion":return ms;case"bool":case"boolean":return ar;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function U0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=F0(r.type);if(r.times===void 0){const t=[],i=[];Rd(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const lr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};let N0=class{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}};const B0=new N0;let ma=class{constructor(e){this.manager=e!==void 0?e:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const dn={};let z0=class extends Error{constructor(e,t){super(e),this.response=t}},Pd=class extends ma{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=lr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dn[e]!==void 0){dn[e].push({onLoad:t,onProgress:i,onError:n});return}dn[e]=[],dn[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=dn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:S})=>{if(y)p.close();else{x+=S.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let M=0,T=h.length;M<T;M++){const C=h[M];C.onProgress&&C.onProgress(v)}p.enqueue(S),_()}})}}});return new Response(g)}else throw new z0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{lr.add(e,c);const h=dn[e];delete dn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete dn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},O0=class extends ma{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=lr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ql("img");function l(){h(),lr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}},k0=class extends ma{constructor(e){super(e)}load(e,t,i,n){const s=new cs,a=new O0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Ac=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const Ec=new Ae,Ld=new I,Id=new I;let Rc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new x0,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ni(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};class V0 extends Rc{constructor(){super(new xc(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=sa*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class H0 extends Ac{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new V0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dd=new Ae,ga=new I,Cc=new I;let G0=class extends Rc{constructor(){super(new xc(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ni(2,1,1,1),new ni(0,1,1,1),new ni(3,1,1,1),new ni(1,1,1,1),new ni(3,0,1,1),new ni(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(ga),Cc.copy(i.position),Cc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cc),i.updateMatrixWorld(),n.makeTranslation(-ga.x,-ga.y,-ga.z),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd)}},W0=class extends Ac{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new G0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};class X0 extends Rc{constructor(){super(new od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fd extends Ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new X0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}let $0=class extends ma{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=lr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){lr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};const Lc="\\[\\]\\.:\\/",j0=new RegExp("["+Lc+"]","g"),Ic="[^"+Lc+"]",q0="[^"+Lc.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",Ic),K0=/(WCOD+)?/.source.replace("WCOD",q0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),Q0=new RegExp("^"+Y0+K0+Z0+J0+"$"),ex=["material","materials","bones","map"];let tx=class{constructor(e,t,i){const n=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ct=class Qr{constructor(e,t,i){this.path=t,this.parsedPath=i||Qr.parseTrackName(t),this.node=Qr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qr.Composite(e,t,i):new Qr(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j0,"")}static parseTrackName(e){const t=Q0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);ex.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Qr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=tx,ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray],ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ud=new I,So=new I;let fn=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ud.subVectors(e,this.start),So.subVectors(this.end,this.start);const i=So.dot(So);let s=So.dot(Ud)/i;return t&&(s=It(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);const Ft=new Oi,wo=new I;class ix{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,i=new Float32Array(e.count/3);for(let s=0;s<e.count;s+=3){let a=1;t&&(a=t.getX(s)+t.getX(s+1)+t.getX(s+2)),Ft.a.fromBufferAttribute(e,s),Ft.b.fromBufferAttribute(e,s+1),Ft.c.fromBufferAttribute(e,s+2),a*=Ft.getArea(),i[s/3]=a}this.distribution=new Float32Array(e.count/3);let n=0;for(let s=0;s<i.length;s++)n+=i[s],this.distribution[s]=n;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i){const n=this.distribution[this.distribution.length-1],s=this.binarySearch(this.randomFunction()*n);return this.sampleFace(s,e,t,i)}binarySearch(e){const t=this.distribution;let i=0,n=t.length-1,s=-1;for(;i<=n;){const a=Math.ceil((i+n)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?n=a-1:i=a+1}return s}sampleFace(e,t,i,n){let s=this.randomFunction(),a=this.randomFunction();return s+a>1&&(s=1-s,a=1-a),Ft.a.fromBufferAttribute(this.positionAttribute,e*3),Ft.b.fromBufferAttribute(this.positionAttribute,e*3+1),Ft.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(Ft.a,s).addScaledVector(Ft.b,a).addScaledVector(Ft.c,1-(s+a)),i!==void 0&&Ft.getNormal(i),n!==void 0&&this.colorAttribute!==void 0&&(Ft.a.fromBufferAttribute(this.colorAttribute,e*3),Ft.b.fromBufferAttribute(this.colorAttribute,e*3+1),Ft.c.fromBufferAttribute(this.colorAttribute,e*3+2),wo.set(0,0,0).addScaledVector(Ft.a,s).addScaledVector(Ft.b,a).addScaledVector(Ft.c,1-(s+a)),n.r=wo.x,n.g=wo.y,n.b=wo.z),this}}const nx="152",sx=0,Nd=1,rx=2,Bd=1,zd=2,pn=3,Ei=0,Jt=1,Gi=2,Gn=0,cr=1,Dc=2,Od=3,kd=4,Vd=5,gs=100,ax=101,ox=102,Hd=103,Gd=104,lx=200,Wd=201,cx=202,hx=203,Xd=204,Fc=205,ux=206,dx=207,fx=208,px=209,mx=210,gx=0,xx=1,yx=2,Uc=3,_x=4,vx=5,Mx=6,bx=7,To=0,Sx=1,wx=2,mn=0,Tx=1,Ax=2,Ex=3,$d=4,Rx=5,jd=300,hr=301,ur=302,Nc=303,Bc=304,Ao=306,zc=1e3,Ri=1001,Oc=1002,_t=1003,qd=1004,kc=1005,mi=1006,Cx=1007,xa=1008,xs=1009,Px=1010,Lx=1011,Yd=1012,Ix=1013,ys=1014,_s=1015,ya=1016,Dx=1017,Fx=1018,vs=1020,Ux=1021,Qt=1023,Nx=1024,Bx=1025,Ms=1026,bs=1027,zx=1028,Ox=1029,kx=1030,Vx=1031,Hx=1033,Vc=33776,Hc=33777,Gc=33778,Wc=33779,Kd=35840,Zd=35841,Jd=35842,Qd=35843,Gx=36196,ef=37492,tf=37496,nf=37808,sf=37809,rf=37810,af=37811,of=37812,lf=37813,cf=37814,hf=37815,uf=37816,df=37817,ff=37818,pf=37819,mf=37820,gf=37821,Xc=36492,Wx=36283,xf=36284,yf=36285,_f=36286,gi=2200,Xx=2201,$x=2202,Eo=2300,Ro=2301,$c=2302,dr=2400,fr=2401,Co=2402,jc=2500,jx=2501,vf=3e3,Ss=3001,qx=3200,Yx=3201,Po=0,Kx=1,ws="",Le="srgb",Wi="srgb-linear",Mf="display-p3",qc=7680,Zx=519,bf=35044,pr="300 es",Yc=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}let Jx=0,Xn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=cr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xd,this.blendDst=Fc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],x=n[0],g=n[3],p=n[6],_=n[1],y=n[4],S=n[7],v=n[2],M=n[5],T=n[8];return s[0]=a*x+o*_+l*v,s[3]=a*g+o*y+l*M,s[6]=a*p+o*S+l*T,s[1]=c*x+h*_+u*v,s[4]=c*g+h*y+u*M,s[7]=c*p+h*S+u*T,s[2]=d*x+f*_+m*v,s[5]=d*g+f*y+m*M,s[8]=d*p+f*S+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new Oe;function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qx=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ey=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ty(r){return r.convertSRGBToLinear().applyMatrix3(ey)}function iy(r){return r.applyMatrix3(Qx).convertLinearToSRGB()}const ny={[Wi]:r=>r,[Le]:r=>r.convertSRGBToLinear(),[Mf]:ty},sy={[Wi]:r=>r,[Le]:r=>r.convertLinearToSRGB(),[Mf]:iy},Ci={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Wi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ny[e],n=sy[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Jc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ci.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ci.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ci.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ci.workingColorSpace){if(e=ug(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jc(a,s,e+1/3),this.g=Jc(a,s,e),this.b=Jc(a,s,e-1/3)}return Ci.toWorkingColorSpace(this,n),this}setStyle(e,t=Le){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){const i=Sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Ci.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Ot(Gt.r*255,0,255))*65536+Math.round(Ot(Gt.g*255,0,255))*256+Math.round(Ot(Gt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ci.workingColorSpace){Ci.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,n=Gt.g,s=Gt.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ci.workingColorSpace){return Ci.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Le){Ci.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,n=Gt.b;return e!==Le?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),Pi.h+=e,Pi.s+=t,Pi.l+=i,this.setHSL(Pi.h,Pi.s,Pi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Lo);const i=zl(Pi.h,Lo.h,t),n=zl(Pi.s,Lo.s,t),s=zl(Pi.l,Lo.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new De;De.NAMES=Sf;class ry extends Xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox),gr.applyMatrix4(e.matrixWorld),this.union(gr);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)xn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),Io.subVectors(this.max,_a),xr.subVectors(e.a,_a),yr.subVectors(e.b,_a),_r.subVectors(e.c,_a),jn.subVectors(yr,xr),qn.subVectors(_r,yr),Ts.subVectors(xr,_r);let t=[0,-jn.z,jn.y,0,-qn.z,qn.y,0,-Ts.z,Ts.y,jn.z,0,-jn.x,qn.z,0,-qn.x,Ts.z,0,-Ts.x,-jn.y,jn.x,0,-qn.y,qn.x,0,-Ts.y,Ts.x,0];return!Qc(t,xr,yr,_r,Io)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,xr,yr,_r,Io))?!1:(Do.crossVectors(jn,qn),t=[Do.x,Do.y,Do.z],Qc(t,xr,yr,_r,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,gr=new $n,xr=new L,yr=new L,_r=new L,jn=new L,qn=new L,Ts=new L,_a=new L,Io=new L,Do=new L,As=new L;function Qc(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){As.fromArray(r,s);const o=n.x*Math.abs(As.x)+n.y*Math.abs(As.y)+n.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=i.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yn=ay();function ay(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function ai(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ot(r,-65504,65504),yn.floatView[0]=r;const e=yn.uint32View[0],t=e>>23&511;return yn.baseTable[t]+((e&8388607)>>yn.shiftTable[t])}function Fo(r){const e=r>>10;return yn.uint32View[0]=yn.mantissaTable[yn.offsetTable[e]+(r&1023)]+yn.exponentTable[e],yn.floatView[0]}const xt=new L,Uo=new Ee;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wf extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tf extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class eh extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Fo(this.array[e*this.itemSize]);return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=ai(t),this}getY(e){let t=Fo(this.array[e*this.itemSize+1]);return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=ai(t),this}getZ(e){let t=Fo(this.array[e*this.itemSize+2]);return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=ai(t),this}getW(e){let t=Fo(this.array[e*this.itemSize+3]);return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=ai(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=ai(t),this.array[e+1]=ai(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=ai(t),this.array[e+1]=ai(i),this.array[e+2]=ai(n),this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=ai(t),this.array[e+1]=ai(i),this.array[e+2]=ai(n),this.array[e+3]=ai(s),this}}class Xe extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const oy=new $n,va=new L,th=new L;class vr{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oy.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(va,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(th)),this.expandByPoint(va.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,a,o,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,t,i){const n=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Yn.crossVectors(i,oi),Yn.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Yn.crossVectors(i,oi)),Yn.normalize(),No.crossVectors(oi,Yn),n[0]=Yn.x,n[4]=No.x,n[8]=oi.x,n[1]=Yn.y,n[5]=No.y,n[9]=oi.y,n[2]=Yn.z,n[6]=No.z,n[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],_=i[3],y=i[7],S=i[11],v=i[15],M=n[0],T=n[4],C=n[8],b=n[12],w=n[1],F=n[5],U=n[9],P=n[13],N=n[2],z=n[6],q=n[10],V=n[14],H=n[3],W=n[7],Z=n[11],oe=n[15];return s[0]=a*M+o*w+l*N+c*H,s[4]=a*T+o*F+l*z+c*W,s[8]=a*C+o*U+l*q+c*Z,s[12]=a*b+o*P+l*V+c*oe,s[1]=h*M+u*w+d*N+f*H,s[5]=h*T+u*F+d*z+f*W,s[9]=h*C+u*U+d*q+f*Z,s[13]=h*b+u*P+d*V+f*oe,s[2]=m*M+x*w+g*N+p*H,s[6]=m*T+x*F+g*z+p*W,s[10]=m*C+x*U+g*q+p*Z,s[14]=m*b+x*P+g*V+p*oe,s[3]=_*M+y*w+S*N+v*H,s[7]=_*T+y*F+S*z+v*W,s[11]=_*C+y*U+S*q+v*Z,s[15]=_*b+y*P+S*V+v*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=u*g*c-x*d*c+x*l*f-o*g*f-u*l*p+o*d*p,y=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,S=h*x*c-m*u*c+m*o*f-a*x*f-h*o*p+a*u*p,v=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,M=t*_+i*y+n*S+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*p-i*d*p)*T,e[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*p+i*l*p)*T,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*T,e[4]=y*T,e[5]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*T,e[6]=(m*l*s-a*g*s-m*n*c+t*g*c+a*n*p-t*l*p)*T,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*T,e[8]=S*T,e[9]=(m*u*s-h*x*s-m*i*f+t*x*f+h*i*p-t*u*p)*T,e[10]=(a*x*s-m*o*s+m*i*c-t*x*c-a*i*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*T,e[12]=v*T,e[13]=(h*x*n-m*u*n+m*i*d-t*x*d-h*i*g+t*u*g)*T,e[14]=(m*o*n-a*x*n-m*i*l+t*x*l+a*i*g-t*o*g)*T,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,x=a*h,g=a*u,p=o*u,_=l*c,y=l*h,S=l*u,v=i.x,M=i.y,T=i.z;return n[0]=(1-(x+p))*v,n[1]=(f+S)*v,n[2]=(m-y)*v,n[3]=0,n[4]=(f-S)*M,n[5]=(1-(d+p))*M,n[6]=(g+_)*M,n[7]=0,n[8]=(m+y)*T,n[9]=(g-_)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Mr.set(n[0],n[1],n[2]).length();const a=Mr.set(n[4],n[5],n[6]).length(),o=Mr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Li.copy(this);const c=1/s,h=1/a,u=1/o;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=u,Li.elements[9]*=u,Li.elements[10]*=u,t.setFromRotationMatrix(Li),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){const o=this.elements,l=1/(t-e),c=1/(i-n),h=1/(a-s),u=(t+e)*l,d=(i+n)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mr=new L,Li=new Ke,ly=new L(0,0,0),cy=new L(1,1,1),Yn=new L,No=new L,oi=new L,Af=new Ke,Ef=new fi;class Xi{constructor(e=0,t=0,i=0,n=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Af,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const Rf=new L,br=new fi,_n=new Ke,Bo=new L,Ma=new L,uy=new L,dy=new fi,Cf=new L(1,0,0),Pf=new L(0,1,0),Lf=new L(0,0,1),fy={type:"added"},If={type:"removed"};class Wt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new L,t=new Xi,i=new fi,n=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Oe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Pf,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Pf,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bo.copy(e):Bo.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ma,Bo,this.up):_n.lookAt(Bo,Ma,this.up),this.quaternion.setFromRotationMatrix(_n),n&&(_n.extractRotation(n.matrixWorld),br.setFromRotationMatrix(_n),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(If)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(If)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Wt.DEFAULT_UP=new L(0,1,0),Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Df(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Ff={};function Sa(r){r in Ff||(Ff[r]=!0,console.warn(r))}let py=0;const yi=new Ke,nh=new Wt,Sr=new L,li=new $n,wa=new $n,Tt=new L;class ci extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Tf:wf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(li.min,wa.min),li.expandByPoint(Tt),Tt.addVectors(li.max,wa.max),li.expandByPoint(Tt)):(li.expandByPoint(wa.min),li.expandByPoint(wa.max))}li.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),Tt.add(Sr)),n=Math.max(n,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new L,h[w]=new L;const u=new L,d=new L,f=new L,m=new Ee,x=new Ee,g=new Ee,p=new L,_=new L;function y(w,F,U){u.fromArray(n,w*3),d.fromArray(n,F*3),f.fromArray(n,U*3),m.fromArray(a,w*2),x.fromArray(a,F*2),g.fromArray(a,U*2),d.sub(u),f.sub(u),x.sub(m),g.sub(m);const P=1/(x.x*g.y-g.x*x.y);isFinite(P)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(P),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(P),c[w].add(p),c[F].add(p),c[U].add(p),h[w].add(_),h[F].add(_),h[U].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,F=S.length;w<F;++w){const U=S[w],P=U.start,N=U.count;for(let z=P,q=P+N;z<q;z+=3)y(i[z+0],i[z+1],i[z+2])}const v=new L,M=new L,T=new L,C=new L;function b(w){T.fromArray(s,w*3),C.copy(T);const F=c[w];v.copy(F),v.sub(T.multiplyScalar(T.dot(F))).normalize(),M.crossVectors(C,F);const P=M.dot(h[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=P}for(let w=0,F=S.length;w<F;++w){const U=S[w],P=U.start,N=U.count;for(let z=P,q=P+N;z<q;z+=3)b(i[z+0]),b(i[z+1]),b(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new xi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sh extends ci{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){const _=[],y=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let v=0;v<=t;v++){const M=v/t;u.x=-e*Math.cos(n+M*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(n+M*s)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(M+S,1-y),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){const y=h[p][_+1],S=h[p][_],v=h[p+1][_],M=h[p+1][_+1];(p!==0||a>0)&&f.push(y,S,M),(p!==i-1||l<Math.PI)&&f.push(S,v,M)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zo extends ci{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const _=p*d-a;for(let y=0;y<c;y++){const S=y*u-s;m.push(S,-_,0),x.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+c*p,S=_+c*(p+1),v=_+1+c*(p+1),M=_+1+c*p;f.push(y,S,M),f.push(S,v,M)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uf extends xi{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vn=new L,rh=new L,Oo=new L,Kn=new L,ah=new L,ko=new L,oh=new L;class lh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){rh.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(rh);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=Kn.dot(this.direction),l=-Kn.dot(Oo),c=Kn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(rh).addScaledVector(Oo,d),f}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),n=vn.dot(vn)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,n,s){ah.subVectors(t,e),ko.subVectors(i,e),oh.crossVectors(ah,ko);let a=this.direction.dot(oh),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(ko.crossVectors(Kn,ko));if(l<0)return null;const c=o*this.direction.dot(ah.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(oh);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const Ii=new L,Mn=new L,ch=new L,bn=new L,wr=new L,Tr=new L,Nf=new L,hh=new L,uh=new L,dh=new L;let Vo=!1;class Di{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ii.subVectors(e,t),n.cross(Ii);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ii.subVectors(n,t),Mn.subVectors(i,t),ch.subVectors(e,t);const a=Ii.dot(Ii),o=Ii.dot(Mn),l=Ii.dot(ch),c=Mn.dot(Mn),h=Mn.dot(ch),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,i,n,s,a,o,l){return Vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vo=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,bn),l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l}static isFrontFacing(e,t,i,n){return Ii.subVectors(i,t),Mn.subVectors(e,t),Ii.cross(Mn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Ii.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vo=!0),Di.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return Di.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;wr.subVectors(n,i),Tr.subVectors(s,i),hh.subVectors(e,i);const l=wr.dot(hh),c=Tr.dot(hh);if(l<=0&&c<=0)return t.copy(i);uh.subVectors(e,n);const h=wr.dot(uh),u=Tr.dot(uh);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(wr,a);dh.subVectors(e,s);const f=wr.dot(dh),m=Tr.dot(dh);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Tr,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Nf.subVectors(s,n),o=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Nf,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(wr,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ar extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bf=new Ke,$i=new lh,Ho=new vr,zf=new L,Er=new L,Rr=new L,Cr=new L,fh=new L,Go=new L,Wo=new Ee,Xo=new Ee,$o=new Ee,Of=new L,kf=new L,Vf=new L,jo=new L,qo=new L;class ht extends Wt{constructor(e=new ci,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){Go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(fh.fromBufferAttribute(u,e),a?Go.addScaledVector(fh,h):Go.addScaledVector(fh.sub(t),h))}t.add(Go)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Ho.containsPoint($i.origin)===!1&&($i.intersectSphere(Ho,zf)===null||$i.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(Bf.copy(s).invert(),$i.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const x=u[f],g=s[x.materialIndex],p=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let y=p,S=_;y<S;y+=3){const v=a.getX(y),M=a.getX(y+1),T=a.getX(y+2);i=Yo(this,g,e,$i,l,c,h,v,M,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=f,g=m;x<g;x+=3){const p=a.getX(x),_=a.getX(x+1),y=a.getX(x+2);i=Yo(this,s,e,$i,l,c,h,p,_,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const x=u[f],g=s[x.materialIndex],p=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let y=p,S=_;y<S;y+=3){const v=y,M=y+1,T=y+2;i=Yo(this,g,e,$i,l,c,h,v,M,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let x=f,g=m;x<g;x+=3){const p=x,_=x+1,y=x+2;i=Yo(this,s,e,$i,l,c,h,p,_,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function my(r,e,t,i,n,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Ei,o),l===null)return null;qo.copy(o),qo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:r}}function Yo(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Er),r.getVertexPosition(l,Rr),r.getVertexPosition(c,Cr);const h=my(r,e,t,i,Er,Rr,Cr,jo);if(h){n&&(Wo.fromBufferAttribute(n,o),Xo.fromBufferAttribute(n,l),$o.fromBufferAttribute(n,c),h.uv=Di.getInterpolation(jo,Er,Rr,Cr,Wo,Xo,$o,new Ee)),s&&(Wo.fromBufferAttribute(s,o),Xo.fromBufferAttribute(s,l),$o.fromBufferAttribute(s,c),h.uv1=Di.getInterpolation(jo,Er,Rr,Cr,Wo,Xo,$o,new Ee),h.uv2=h.uv1),a&&(Of.fromBufferAttribute(a,o),kf.fromBufferAttribute(a,l),Vf.fromBufferAttribute(a,c),h.normal=Di.getInterpolation(jo,Er,Rr,Cr,Of,kf,Vf,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Di.getNormal(Er,Rr,Cr,u.normal),h.face=u}return h}const Pr=new Ke,Hf=new Ke,Ko=[],Gf=new $n,gy=new Ke,Ta=new ht,Aa=new vr;class xy extends ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uf(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,gy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pr),Gf.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(Gf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pr),Aa.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Pr),Hf.multiplyMatrices(i,Pr),Ta.matrixWorld=Hf,Ta.raycast(e,Ko);for(let a=0,o=Ko.length;a<o;a++){const l=Ko[a];l.instanceId=s,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wf extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ot{constructor(e=0,t=0,i=0,n=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(f+1)/2,v=(p+1)/2,M=(h+d)/4,T=(u+x)/4,C=(m+g)/4;return y>S&&y>v?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=M/i,s=T/i):S>v?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=M/n,s=C/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=T/s,n=C/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}const ph=new L,yy=new L,_y=new Oe;class Es{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ph.subVectors(i,t).cross(yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ph),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_y.getNormalMatrix(e),n=this.coplanarPoint(ph).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new vr,Zo=new L;class mh{constructor(e=new Es,t=new Es,i=new Es,n=new Es,s=new Es,a=new Es){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],x=i[11],g=i[12],p=i[13],_=i[14],y=i[15];return t[0].setComponents(o-n,u-l,x-d,y-g).normalize(),t[1].setComponents(o+n,u+l,x+d,y+g).normalize(),t[2].setComponents(o+s,u+c,x+f,y+p).normalize(),t[3].setComponents(o-s,u-c,x-f,y-p).normalize(),t[4].setComponents(o-a,u-h,x-m,y-_).normalize(),t[5].setComponents(o+a,u+h,x+m,y+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Zo.x=n.normal.x>0?e.max.x:e.min.x,Zo.y=n.normal.y>0?e.max.y:e.min.y,Zo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const gh=new Ke,Xf=new L,$f=new L;class vy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}let jf=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class hi extends jf{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qf=new Ke,Ea=new L,xh=new L;class My extends vy{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ea),xh.copy(i.position),xh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xh),i.updateMatrixWorld(),n.makeTranslation(-Ea.x,-Ea.y,-Ea.z),qf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}}class Yf extends Wf{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new My}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const yh=(r,e)=>(Math.random()*(e-r+1)|0)+r,qt=(r,e)=>Math.random()*(e-r)+r,by=(r,e,t)=>r+t*(e-r),Kf=1/60,Ze=Object.freeze({m075:Math.PI*.75,m2:Math.PI*2,d2:Math.PI/2,d3:Math.PI/3,d4:Math.PI/4,d6:Math.PI/6});class Sy{target=new EventTarget;events=new Map;callbacks=new Map;add(e,t){this.callbacks.set(e,t),this.events.set(e,new Ty(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t=null){const i=this.events.get(e);i&&(i.data=t,this.target.dispatchEvent(i))}remove(e){const t=this.callbacks.get(e);this.target.removeEventListener(e,t,!1),this.callbacks.delete(e),this.events.delete(e)}dispose(){for(const[e]of this.events)this.remove(e);this.callbacks.clear(),this.events.clear()}}class Zf{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t=null){C1.postMessage({name:e,response:t})}remove(e){this.worker.remove(e)}dispose(){this.worker.clear()}}var wy={easy:{maxEnemies:10,rifleSpawn:3,enemy:{immune:!1,lose:!0,walk:500,run:250},damage:{enemy:{strong:10,soft:5},pistol:{head:90,body:25,leg:10},rifle:{head:100,body:50,leg:20}}},normal:{maxEnemies:25,rifleSpawn:5,enemy:{immune:!1,lose:!1,walk:1e3,run:500},damage:{enemy:{strong:25,soft:10},pistol:{head:75,body:10,leg:5},rifle:{head:80,body:20,leg:10}}},hard:{maxEnemies:50,rifleSpawn:8,enemy:{immune:!0,lose:!1,walk:-1,run:1e4},damage:{enemy:{strong:50,soft:25},pistol:{head:50,body:5,leg:1},rifle:{head:75,body:10,leg:5}}}},Zn={position:[0,1.25,25],collider:[.6,1.7,-.85],scale:[1.5,1.5,1.5],model:"player.glb",mass:90,sounds:{death:"player/death.mp3",hit:"player/hit.mp3"},animations:{Idle:[0,0,0,0],Run:[8.75,1,0,0],Left:[3.5,1,-1,1],Right:[4.5,1,1,-1],Backward:[3,-1,0,0],BackwardLeft:[2,-1,-.5,.5],BackwardRight:[2,-1,.5,-.5],ForwardRight:[4,1,.5,-.5],ForwardLeft:[4,1,-.5,.5],Forward:[5,1,0,0]}},ut={rotation:[1.5707963267948966,3.3415926535897933,-.075],position:[-10,-4,.25],scale:[13,13,13],emissiveIntensity:.025,spread:[.001,.001],recoil:[0,-.01],emissive:12632256,model:"1911.glb",textures:"1911",headshot:.9,magazine:-1,ammo:-1,sounds:{bullet:"weapons/shell.mp3",shoot:"weapons/1911.mp3"},bullet:{position:[.1,.1,.35],lifeTime:500,speed:253,scale:.4},fire:{position:[1.5,.53],particles:[3,5],intensity:2,velocity:.25,scale:1}},Lr={fps:{idle:[0,1.6,.075],aim:[-.05,1.525,.25]},tps:{idle:[-.525,1.5375,-1.5],aim:[-.3,1.535,-.5],run:[-1.1,1.2,-3]}},Ut={ambient:"environment/rain.mp3",position:[0,4.98,13.5],sidewalkHeight:.216,scale:[75,75,75],model:"level.glb",cloud:"cloud.png",fogDensity:.01,fog:"fog.png",skybox:"sky",height:10,depth:250,portalsOffset:[-.025,.225,-.275,-.025],lighting:["environment/lightning0.mp3","environment/lightning1.mp3","environment/lightning2.mp3","environment/lightning3.mp3","environment/lightning4.mp3"],rain:["rain/drop0.png","rain/drop1.png","rain/drop2.png","rain/drop3.png","rain/drop4.png"],portals:[[-39.5,53],[-39.5,37],[-29.5,-128],[-29.5,-144],[74,-144],[74,-128],[64,37],[64,53]],bounds:[[84,53],[-59.5,53],[-59.5,37],[-10,37],[-10,-30],[-6.5,-39],[.2,-46.8],[9.2,-52.5],[19.5,-53.5],[25,-59.8],[25,-128],[-49.5,-128],[-49.5,-144],[94,-144],[94,-128],[44.5,-128],[44.5,-61],[41,-52],[34.3,-44.2],[25.3,-38.5],[15,-37.5],[9.5,-31.2],[9.5,37],[84,37]],sidewalk:[[85,50.35],[-60,50.35],[-60,39.75],[-7.2,39.75],[-7.2,-31],[-4.2,-38.1],[2.25,-45],[10.15,-49.8],[19.75,-51],[27.85,-59.25],[27.75,-130.75],[-50.5,-130.75],[-50.5,-141.35],[94.5,-141.35],[94.5,-130.75],[41.7,-130.75],[41.7,-59.75],[38.7,-52.25],[32.8,-46.25],[24.5,-41.25],[14.4,-39.9],[6.75,-31.75],[6.75,39.75],[85,39.75]]},Jn={collider:[.75,1.8,-.895],position:[0,1.18,-10],scale:[1.33,1.33,1.33],model:"enemy.glb",mass:75,sounds:{hardAttack:"enemy/hardAttack.mp3",softAttack:"enemy/softAttack.mp3",scream:"enemy/scream.mp3",death:"enemy/death.mp3",hit:"enemy/hit.mp3"},animations:{Idle:[0,0,0,0],Walking:[.5,1,0,0],Running:[3.5,1,0,0],Falling:[.75,1,0,0],Crawling:[.5,1,0,0]}},lt={rotation:[1.7707963267948965,3.061592653589793,-.41],spinePosition:[-10,22.5,-20],worldScale:[.005,.005,.005],spineRotation:[0,0,-1],position:[-26,1,-5.75],scale:[.29,.29,.29],spread:[.0025,.0025],recoil:[.02,-.025],model:"AK47.glb",textures:"AK47",headshot:.8,maxStock:150,magazine:30,ammo:0,sounds:{reload:"weapons/reload.mp3",bullet:"weapons/case.mp3",empty:"weapons/empty.mp3",shoot:"weapons/AK47.mp3",pick:"weapons/pick.mp3"},bullet:{position:[.065,.13,.75],lifeTime:200,speed:670,scale:.6},fire:{position:[160,30],particles:[5,8],intensity:3,velocity:11.2,scale:2.5}};const Sn=r=>{Object.freeze(r);const e=Object.getOwnPropertyNames(r);for(const t in e){const i=r[e[t]];i&&(typeof i=="object"||typeof i=="function")&&!Object.isFrozen(i)&&Sn(i)}return r};var _h;(r=>{const e=()=>__pnYazhAssetBase,t=a=>Object.assign({},...Object.keys(a).map(o=>({[o]:{speed:a[o][0],direction:{z0:a[o][1],x0:a[o][2],x1:a[o][3]}}}))),i=Zn.animations,n=Jn.animations;r.APP=navigator.userAgent.toLowerCase().includes("electron");const s=a=>a<0?1/0:a;r.offscreen=typeof HTMLCanvasElement<"u"&&!!HTMLCanvasElement.prototype.transferControlToOffscreen,r.worker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,r.basePath=(a=!1)=>r.APP?r.offscreen||!r.worker?a?"./":"./assets":"./":a?"":e(),r.RandomCoords=Sn({playerDistance:5,boundOffset:.5,ammount:50}),r.Gameplay=Sn(wy.normal),r.Level=Sn({position:new L(...Ut.position),sidewalkHeight:Ut.sidewalkHeight,portalsOffset:Ut.portalsOffset,scale:new L(...Ut.scale),fogDensity:Ut.fogDensity,lighting:Ut.lighting,sidewalk:Ut.sidewalk,ambient:Ut.ambient,portals:Ut.portals,skybox:Ut.skybox,bounds:Ut.bounds,height:Ut.height,depth:Ut.depth,model:Ut.model,cloud:Ut.cloud,rain:Ut.rain,fog:Ut.fog}),r.Camera=Sn({fps:{idle:new L(...Lr.fps.idle),run:new L(...Lr.fps.idle),aim:new L(...Lr.fps.aim)},tps:{idle:new L(...Lr.tps.idle),run:new L(...Lr.tps.run),aim:new L(...Lr.tps.aim)}}),r.Player=Sn({position:new L(...Zn.position),collider:new L(...Zn.collider),scale:new L(...Zn.scale),moves:t(i),animations:Zn.animations,sounds:Zn.sounds,model:Zn.model,mass:Zn.mass}),r.Enemy=Sn({position:new L(...Jn.position),collider:new L(...Jn.collider),scale:new L(...Jn.scale),moves:t(n),animations:Jn.animations,sounds:Jn.sounds,model:Jn.model,mass:Jn.mass}),r.Pistol=Sn({emissiveIntensity:ut.emissiveIntensity,position:new L(...ut.position),rotation:new Xi(...ut.rotation),spread:new Ee(...ut.spread),recoil:new Ee(...ut.recoil),scale:new L(...ut.scale),magazine:s(ut.magazine),ammo:s(ut.ammo),headshot:ut.headshot,textures:ut.textures,emissive:ut.emissive,sounds:ut.sounds,model:ut.model,bullet:{position:new L(...ut.bullet.position),lifeTime:ut.bullet.lifeTime,speed:ut.bullet.speed,scale:ut.bullet.scale},fire:{position:new Ee(...ut.fire.position),particles:ut.fire.particles,intensity:ut.fire.intensity,velocity:ut.fire.velocity,scale:ut.fire.scale}}),r.Rifle=Sn({spinePosition:new L(...lt.spinePosition),spineRotation:new Xi(...lt.spineRotation),worldScale:new L(...lt.worldScale),position:new L(...lt.position),rotation:new Xi(...lt.rotation),spread:new Ee(...lt.spread),recoil:new Ee(...lt.recoil),scale:new L(...lt.scale),magazine:s(lt.magazine),ammo:s(lt.ammo),headshot:lt.headshot,textures:lt.textures,maxStock:lt.maxStock,sounds:lt.sounds,model:lt.model,bullet:{position:new L(...lt.bullet.position),lifeTime:lt.bullet.lifeTime,speed:lt.bullet.speed,scale:lt.bullet.scale},fire:{position:new Ee(...lt.fire.position),particles:lt.fire.particles,intensity:lt.fire.intensity,velocity:lt.fire.velocity,scale:lt.fire.scale}})})(_h||(_h={}));var ve=_h;try{__yazhPatchConfigs(ve);}catch(_yazh){}class Ty extends CustomEvent{data=null}class Ay extends Sy{workerEvents;createWorkerEvents(e){this.workerEvents=new Zf(e)}add(e,t,i=!1){ve.offscreen&&i?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t=null,i=!1){ve.worker&&i?Zf.dispatch(e,t):super.dispatch(e,t)}remove(e,t=!1){ve.offscreen&&t?this.workerEvents?.remove(e):super.remove(e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const ne=new Ay;function Jf(r,e){if(e===Ag)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Xl||e===zu){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===Xl)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ey extends ma{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Gy(t)})}load(e,t,i,n){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Pc.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Pd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qf){try{a[Ve.KHR_BINARY_GLTF]=new Wy(e)}catch(u){n&&n(u);return}s=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new n_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:a[u]=new Py;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[u]=new Xy(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[u]=new $y;break;case Ve.KHR_MESH_QUANTIZATION:a[u]=new jy;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function Ry(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cy{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new St(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new W0(h),c.distance=u;break;case"spot":c=new H0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class Py{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Qs}extendParams(e,t,i){const n=[];e.color=new St(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(n)}}class Ly{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Iy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(o,o)}return Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Fy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new St(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Ny{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new St(o[0],o[1],o[2]),Promise.all(s)}}class By{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class zy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ps}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new St(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(s)}}class Oy{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class ky{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vy{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hy{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class Gy{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==_i.TRIANGLES&&c.mode!==_i.TRIANGLE_STRIP&&c.mode!==_i.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const x=new Ae,g=new I,p=new Nn,_=new I(1,1,1),y=new w0(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,x.compose(g,p,_));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);Dt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Qf="glTF",Ra=12,ep={JSON:1313821514,BIN:5130562};class Wy{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ra),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ra,s=new DataView(e,Ra);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ep.JSON){const c=new Uint8Array(e,Ra+a,o);this.content=i.decode(c)}else if(l===ep.BIN){const c=Ra+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Mh[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Mh[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Ir[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],x=l[f];x!==void 0&&(m.normalized=x)}u(d)},o,c)})})}}class $y{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jy{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class tp extends da{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,_=1-g,y=p-d+u;for(let S=0;S!==o;S++){const v=a[x+S+o],M=a[x+S+l]*h,T=a[m+S+o],C=a[m+S]*h;s[S]=_*v+y*M+g*T+p*C}return s}}const qy=new Nn;class Yy extends tp{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return qy.fromArray(s).normalize().toArray(s),s}}const _i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ip={9728:Vl,9729:Hl,9984:vg,9985:bg,9986:Mg,9987:Gl},np={33071:ta,33648:kl,10497:ea},vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ky={CUBICSPLINE:void 0,LINEAR:Hs,STEP:ia},bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Tc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vs})),r.DefaultMaterial}function Ca(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function es(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jy(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Qy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e_(r){const e=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+sp(e.attributes):t=r.indices+":"+sp(r.attributes)+":"+r.mode,t}function sp(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Sh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const i_=new Ae;class n_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ry,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new k0(this.options.manager):this.textureLoader=new $0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};Ca(s,o,n),es(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(Pc.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=vh[n.type],o=Ir[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new $t(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=vh[n.type],c=Ir[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let x,g;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let y=t.cache.get(_);y||(x=new c(o,p*f,n.count*f/h),y=new y0(x,f/h),t.cache.add(_,y)),g=new vc(y,l,d%f/h,m)}else o===null?x=new c(n.count*l):x=new c(o,d,n.count*l),g=new $t(x,l,m);if(n.sparse!==void 0){const p=vh.SCALAR,_=Ir[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,S=n.sparse.values.byteOffset||0,v=new _(a[1],y,n.sparse.count*p),M=new c(a[2],S,n.sparse.count*l);o!==null&&(g=new $t(g.array.slice(),g.itemSize,g.normalized));for(let T=0,C=v.length;T<C;T++){const b=v[T];if(g.setX(b,M[T*l]),l>=2&&g.setY(b,M[T*l+1]),l>=3&&g.setZ(b,M[T*l+2]),l>=4&&g.setW(b,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=ip[d.magFilter]||Hl,h.minFilter=ip[d.minFilter]||Gl,h.wrapS=np[d.wrapS]||ea,h.wrapT=np[d.wrapT]||ea,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){const g=new cs(x);g.needsUpdate=!0,d(g)}),t.load(Pc.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||t_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Sd,ds.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new xd,ds.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Tc}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const u=n[Ve.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new St(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Lu);const h=s.alphaMode||bh.OPAQUE;if(h===bh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===bh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qs&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new rt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==Qs&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qs&&(o.emissive=new St().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==Qs&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),es(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ca(n,u,s),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");let i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return rp(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=e_(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=rp(new ki,c,t),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Zy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],g=a[f];let p;const _=c[f];if(g.mode===_i.TRIANGLES||g.mode===_i.TRIANGLE_STRIP||g.mode===_i.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new v0(x,_):new mo(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===_i.TRIANGLE_STRIP?p.geometry=Jf(p.geometry,zu):g.mode===_i.TRIANGLE_FAN&&(p.geometry=Jf(p.geometry,Xl));else if(g.mode===_i.LINES)p=new T0(x,_);else if(g.mode===_i.LINE_STRIP)p=new Sc(x,_);else if(g.mode===_i.LINE_LOOP)p=new A0(x,_);else if(g.mode===_i.POINTS)p=new E0(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Qy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),es(p,s),g.extensions&&Ca(n,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new _c;t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new xc(Hu.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new od(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),es(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ae;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mc(o,l)})}loadAnimation(e){const i=this.json.animations[e],n=i.name?i.name:"animation_"+e,s=[],a=[],o=[],l=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const d=i.channels[h],f=i.samplers[d.sampler],m=d.target,x=m.node,g=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;m.node!==void 0&&(s.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",p)),l.push(f),c.push(m))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],m=h[3],x=h[4],g=[];for(let p=0,_=u.length;p<_;p++){const y=u[p],S=d[p],v=f[p],M=m[p],T=x[p];if(y===void 0)continue;y.updateMatrix();let C;switch(Qn[T.path]){case Qn.weights:C=fa;break;case Qn.rotation:C=ms;break;case Qn.position:case Qn.scale:default:C=pa;break}const b=y.name?y.name:y.uuid,w=M.interpolation!==void 0?Ky[M.interpolation]:Hs,F=[];Qn[T.path]===Qn.weights?y.traverse(function(P){P.morphTargetInfluences&&F.push(P.name?P.name:P.uuid)}):F.push(b);let U=v.array;if(v.normalized){const P=Sh(U.constructor),N=new Float32Array(U.length);for(let z=0,q=U.length;z<q;z++)N[z]=U[z]*P;U=N}for(let P=0,N=F.length;P<N;P++){const z=new C(F[P]+"."+Qn[T.path],S.array,U,w);M.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(V){const H=this instanceof ms?Yy:tp;return new H(this.times,this.values,this.getValueSize()/3,V)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(z)}}return new D0(n,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,i_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new dd:c.length>1?h=new _c:c.length===1?h=c[0]:h=new Dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),es(h,s),s.extensions&&Ca(i,h,s),s.matrix!==void 0){const u=new Ae;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new _c;i.name&&(s.name=n.createUniqueName(i.name)),es(s,i),i.extensions&&Ca(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof ds||d instanceof cs)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}}function s_(r,e,t){const i=e.attributes,n=new Vt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Sh(Ir[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=Sh(Ir[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new zi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function rp(r,e,t){const i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=Mh[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return es(r,e),s_(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Jy(r,e.targets,t):r})}class ap{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const r_=new ap;let Dr;class op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dr===void 0&&(Dr=ba("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class lp{constructor(e=null){this.isSource=!0,this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(wh(n[a].image)):s.push(wh(n[a]))}else s=wh(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?op.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;class ei extends Wn{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,i=Ri,n=Ri,s=mi,a=xa,o=Qt,l=xs,c=ei.DEFAULT_ANISOTROPY,h=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ls(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ss?Le:ws),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?Ss:vf}set encoding(e){Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ss?Le:ws}}ei.DEFAULT_IMAGE=null,ei.DEFAULT_MAPPING=jd,ei.DEFAULT_ANISOTROPY=1;class Fr extends ei{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}let Jo;class o_{static getContext(){return Jo===void 0&&(Jo=new(window.AudioContext||window.webkitAudioContext)),Jo}static setContext(e){Jo=e}}const Ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Nr{constructor(e){this.manager=e!==void 0?e:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const wn={};class l_ extends Error{constructor(e,t){super(e),this.response=t}}class c_ extends Nr{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ur.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:i,onError:n});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=wn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:S})=>{if(y)p.close();else{x+=S.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let M=0,T=h.length;M<T;M++){const C=h[M];C.onProgress&&C.onProgress(v)}p.enqueue(S),_()}})}}});return new Response(g)}else throw new l_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ur.add(e,c);const h=wn[e];delete wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=wn[e];if(h===void 0)throw this.manager.itemError(e),c;delete wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class h_ extends Nr{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new c_(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);o_.getContext().decodeAudioData(c,function(u){t(u)},o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),s.manager.itemError(e)}}}class u_ extends Nr{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ur.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ba("img");function l(){h(),Ur.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}let d_=class extends Nr{constructor(e){super(e)}load(e,t,i,n){const s=new Fr,a=new u_(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}};class cp extends Nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ur.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ur.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class f_ extends d_{load(e,t,i,n){const s=new cp(this.manager),a=new Fr;s.setPath(this.path);let o=0;function l(c){s.load(e[c],h=>{a.images[c]=h,++o===6&&(a.needsUpdate=!0,t?.(a))},i,n)}for(let c=0;c<e.length;c++)l(c);return a}}class p_ extends ei{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class m_ extends Nr{load(e,t,i,n){const s=new cp(this.manager);return s.setOptions({imageOrientation:"flipY"}),s.setPath(this.path),s.load(e,a=>{const o=new p_(a);return o.image=a,o.format=Qt,o.needsUpdate=!0,t?.(o),o},i,n)}}var $e;(r=>{class e extends ap{imageBasePath=`${t}/images/`;modelBasePath=`${t}/models/`;soundBasePath=`${t}/sounds/`;shaderBasePath=`${t}/shaders/`;cubeTexture=new f_(this);texture=new m_(this);audio=new h_(this);gltf=new Ey(this);uuid=ls();cubeTextures=["px.png","nx.png","py.png","ny.png","pz.png","nz.png"];getPromiseCallbacks(n,s){return{onLoad:a=>{a instanceof Fr&&(a.format=Qt),n(a)},onProgress:a=>this.onProgress(a.target?.responseURL,a.loaded,a.total),onError:a=>s(a)}}async loadCubeTexture(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.cubeTexture.setPath(`${this.imageBasePath+n}/`),this.cubeTexture.load(this.cubeTextures,o.onLoad,o.onProgress,o.onError)})}async loadTexture(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.texture.setPath(this.imageBasePath),this.texture.load(n,o.onLoad,o.onProgress,o.onError)})}async loadAudio(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.audio.setPath(this.soundBasePath),this.audio.load(n,o.onLoad,o.onProgress,o.onError)})}async loadShader(n){return await(await fetch(`${this.shaderBasePath+n}`)).text()}async loadGLTF(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.gltf.setPath(this.modelBasePath),this.gltf.load(n,o.onLoad,o.onProgress,o.onError)})}onProgress=(n,s,a)=>{ne.dispatch("Loading::Progress",{progress:s*100/a,uuid:this.uuid},!0)};onError=n=>{console.error(`Error occurred loading ${n}.`)};onStart=()=>{ne.dispatch("Loading::Start",this.uuid,!0)};onLoad=()=>{ne.dispatch("Loading::Complete",this.uuid,!0)}}const t=(typeof __yazhForceAssetRoot==="function"?__yazhForceAssetRoot():ve.basePath());r.Loader=new e,(i=>{i.Complete="Loading::Complete",i.Progress="Loading::Progress",i.Start="Loading::Start"})(r.Loading||(r.Loading={}))})($e||($e={}));var ui;(r=>{r.UP=new L(0,1,0),r.RIGHT=new L(1,0,0),r.FORWARD=new L(0,0,1),r.BACKWARD=new L(0,0,-1),r.LEFT=new L(-1,0,0),r.DOWN=new L(0,-1,0),r.random=()=>new L(qt(-1,1),qt(-1,1),qt(-1,1))})(ui||(ui={}));function hp(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function g_(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Tn extends ci{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function m(x,g,p,_,y,S,v,M,T,C,b){const w=S/T,F=v/C,U=S/2,P=v/2,N=M/2,z=T+1,q=C+1;let V=0,H=0;const W=new L;for(let Z=0;Z<q;Z++){const oe=Z*F-P;for(let re=0;re<z;re++){const G=re*w-U;W[x]=G*_,W[g]=oe*y,W[p]=N,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(re/T),u.push(1-Z/C),V+=1}}for(let Z=0;Z<C;Z++)for(let oe=0;oe<T;oe++){const re=d+oe+z*Z,G=d+oe+z*(Z+1),J=d+(oe+1)+z*(Z+1),ie=d+(oe+1)+z*Z;l.push(re,G,ie),l.push(G,J,ie),H+=6}o.addGroup(f,H,b),f+=H,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const i=Br(r[t]);for(const n in i)e[n]=i[n]}return e}function x_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function up(r){return r.getRenderTarget()===null?r.outputColorSpace:Wi}const y_={clone:Br,merge:Yt};var __=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,v_=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Fi extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=x_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}var M_=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,b_=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,S_=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,w_=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,T_=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,A_=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,E_=`
vec3 transformed = vec3( position );
`,R_=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,C_=`

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

`,P_=`

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

`,L_=`
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
`,I_=`
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
`,D_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,F_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,U_=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,N_=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,B_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,z_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,O_=`
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
`,k_=`
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
`,V_=`
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
`,H_=`
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
`,G_=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,W_=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,X_=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,$_=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,j_=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,q_=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Y_=`
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
`,K_=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Z_=`
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
`,J_=`
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
`,Q_=`
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
`,ev=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,tv=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,iv=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,nv=`
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
`,sv=`

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
`,rv=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,av=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,ov=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,lv=`
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
`,cv=`
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
`,hv=`
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
`,uv=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,dv=`
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
`,fv=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,pv=`
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
`,mv=`
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
`,gv=`

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
`,xv=`
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
`,yv=`
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
`,_v=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,vv=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Mv=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,bv=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Sv=`
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
`,wv=`
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`,Tv=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Av=`
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
`,Ev=`
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
`,Rv=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Cv=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Pv=`
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
`,Lv=`
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
`,Iv=`
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
`,Dv=`
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
`,Fv=`
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

`,Uv=`

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
`,Nv=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Bv=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,zv=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Ov=`
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
`,kv=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Vv=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Hv=`

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
`,Gv=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Wv=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Xv=`
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
`,$v=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,jv=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,qv=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Yv=`
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
`,Kv=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Zv=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Jv=`
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
`,Qv=`

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
`,eM=`

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


`,tM=`
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
`,iM=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,nM=`
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
`,sM=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,rM=`
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
`,aM=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,oM=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,lM=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,cM=`
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
`,hM=`
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
`,uM=`
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
`,dM=`
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
`,fM=`
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
`,pM=`
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
`,mM=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const Pe={alphamap_fragment:M_,alphamap_pars_fragment:b_,alphatest_fragment:S_,alphatest_pars_fragment:w_,aomap_fragment:T_,aomap_pars_fragment:A_,begin_vertex:E_,beginnormal_vertex:R_,bsdfs:C_,iridescence_fragment:P_,bumpmap_pars_fragment:L_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:F_,clipping_planes_vertex:U_,color_fragment:N_,color_pars_fragment:B_,color_pars_vertex:z_,color_vertex:O_,common:k_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:H_,displacementmap_pars_vertex:G_,displacementmap_vertex:W_,emissivemap_fragment:X_,emissivemap_pars_fragment:$_,encodings_fragment:j_,encodings_pars_fragment:q_,envmap_fragment:Y_,envmap_common_pars_fragment:K_,envmap_pars_fragment:Z_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:hv,envmap_vertex:Q_,fog_vertex:ev,fog_pars_vertex:tv,fog_fragment:iv,fog_pars_fragment:nv,gradientmap_pars_fragment:sv,lightmap_fragment:rv,lightmap_pars_fragment:av,lights_lambert_fragment:ov,lights_lambert_pars_fragment:lv,lights_pars_begin:cv,lights_toon_fragment:uv,lights_toon_pars_fragment:dv,lights_phong_fragment:fv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:xv,lights_fragment_maps:yv,lights_fragment_end:_v,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:bv,logdepthbuf_vertex:Sv,map_fragment:wv,map_pars_fragment:Tv,map_particle_fragment:Av,map_particle_pars_fragment:Ev,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Cv,morphcolor_vertex:Pv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Dv,normal_fragment_begin:Fv,normal_fragment_maps:Uv,normal_pars_fragment:Nv,normal_pars_vertex:Bv,normal_vertex:zv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Gv,output_fragment:Wv,packing:Xv,premultiplied_alpha_fragment:$v,project_vertex:jv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:eM,shadowmask_pars_fragment:tM,skinbase_vertex:iM,skinning_pars_vertex:nM,skinning_vertex:sM,skinnormal_vertex:rM,specularmap_fragment:aM,specularmap_pars_fragment:oM,tonemapping_fragment:lM,tonemapping_pars_fragment:cM,transmission_fragment:hM,transmission_pars_fragment:uM,uv_pars_fragment:dM,uv_pars_vertex:fM,uv_vertex:pM,worldpos_vertex:mM,background_vert:`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,background_frag:`
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
`,backgroundCube_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,backgroundCube_frag:`

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
`,cube_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,cube_frag:`
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
`,depth_vert:`
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
`,depth_frag:`
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
`,distanceRGBA_vert:`
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
`,distanceRGBA_frag:`
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
`,equirect_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,equirect_frag:`
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
`,linedashed_vert:`
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
`,linedashed_frag:`
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
`,meshbasic_vert:`
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
`,meshbasic_frag:`
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
`,meshlambert_vert:`
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
`,meshlambert_frag:`
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
`,meshmatcap_vert:`
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
`,meshmatcap_frag:`
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
`,meshnormal_vert:`
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
`,meshnormal_frag:`
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
`,meshphong_vert:`
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
`,meshphong_frag:`
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
`,meshphysical_vert:`
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
`,meshphysical_frag:`
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
`,meshtoon_vert:`
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
`,meshtoon_frag:`
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
`,points_vert:`
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
`,points_frag:`
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
`,shadow_vert:`
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
`,shadow_frag:`
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
`,sprite_vert:`
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
`,sprite_frag:`
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
`},se={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaTest:{value:0}}},ji={basic:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new De(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new De(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Yt([se.points,se.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Yt([se.common,se.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Yt([se.sprite,se.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Yt([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Yt([se.lights,se.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};ji.physical={uniforms:Yt([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Qo={r:0,b:0,g:0};function gM(r,e,t,i,n,s,a){const o=new De(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(g,p){let _=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),_=!0),r.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),_=!0;break}(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ao)?(h===void 0&&(h=new ht(new Tn(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Br(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.colorSpace!==Le,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ht(new zo(2,2),new Fi({name:"BackgroundMaterial",uniforms:Br(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,p){g.getRGB(Qo,up(r)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(o,l)},render:m}}function xM(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function u(N,z,q,V,H){let W=!1;if(a){const Z=x(V,q,z);c!==Z&&(c=Z,f(c.object)),W=p(N,V,q,H),W&&_(N,V,q,H)}else{const Z=z.wireframe===!0;(c.geometry!==V.id||c.program!==q.id||c.wireframe!==Z)&&(c.geometry=V.id,c.program=q.id,c.wireframe=Z,W=!0)}H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(N,z,q,V),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(N){return i.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function m(N){return i.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,z,q){const V=q.wireframe===!0;let H=o[N.id];H===void 0&&(H={},o[N.id]=H);let W=H[z.id];W===void 0&&(W={},H[z.id]=W);let Z=W[V];return Z===void 0&&(Z=g(d()),W[V]=Z),Z}function g(N){const z=[],q=[],V=[];for(let H=0;H<n;H++)z[H]=0,q[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:V,object:N,attributes:{},index:null}}function p(N,z,q,V){const H=c.attributes,W=z.attributes;let Z=0;const oe=q.getAttributes();for(const re in oe)if(oe[re].location>=0){const J=H[re];let ie=W[re];if(ie===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;Z++}return c.attributesNum!==Z||c.index!==V}function _(N,z,q,V){const H={},W=z.attributes;let Z=0;const oe=q.getAttributes();for(const re in oe)if(oe[re].location>=0){let J=W[re];J===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),H[re]=ie,Z++}c.attributes=H,c.attributesNum=Z,c.index=V}function y(){const N=c.newAttributes;for(let z=0,q=N.length;z<q;z++)N[z]=0}function S(N){v(N,0)}function v(N,z){const q=c.newAttributes,V=c.enabledAttributes,H=c.attributeDivisors;q[N]=1,V[N]===0&&(r.enableVertexAttribArray(N),V[N]=1),H[N]!==z&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),H[N]=z)}function M(){const N=c.newAttributes,z=c.enabledAttributes;for(let q=0,V=z.length;q<V;q++)z[q]!==N[q]&&(r.disableVertexAttribArray(q),z[q]=0)}function T(N,z,q,V,H,W){i.isWebGL2===!0&&(q===r.INT||q===r.UNSIGNED_INT)?r.vertexAttribIPointer(N,z,q,H,W):r.vertexAttribPointer(N,z,q,V,H,W)}function C(N,z,q,V){if(i.isWebGL2===!1&&(N.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const H=V.attributes,W=q.getAttributes(),Z=z.defaultAttributeValues;for(const oe in W){const re=W[oe];if(re.location>=0){let G=H[oe];if(G===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const J=G.normalized,ie=G.itemSize,le=t.get(G);if(le===void 0)continue;const B=le.buffer,Ie=le.type,Re=le.bytesPerElement;if(G.isInterleavedBufferAttribute){const ae=G.data,we=ae.stride,qe=G.offset;if(ae.isInstancedInterleavedBuffer){for(let xe=0;xe<re.locationSize;xe++)v(re.location+xe,ae.meshPerAttribute);N.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<re.locationSize;xe++)S(re.location+xe);r.bindBuffer(r.ARRAY_BUFFER,B);for(let xe=0;xe<re.locationSize;xe++)T(re.location+xe,ie/re.locationSize,Ie,J,we*Re,(qe+ie/re.locationSize*xe)*Re)}else{if(G.isInstancedBufferAttribute){for(let ae=0;ae<re.locationSize;ae++)v(re.location+ae,G.meshPerAttribute);N.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<re.locationSize;ae++)S(re.location+ae);r.bindBuffer(r.ARRAY_BUFFER,B);for(let ae=0;ae<re.locationSize;ae++)T(re.location+ae,ie/re.locationSize,Ie,J,ie*Re,ie/re.locationSize*ae*Re)}}else if(Z!==void 0){const J=Z[oe];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(re.location,J);break;case 3:r.vertexAttrib3fv(re.location,J);break;case 4:r.vertexAttrib4fv(re.location,J);break;default:r.vertexAttrib1fv(re.location,J)}}}}M()}function b(){U();for(const N in o){const z=o[N];for(const q in z){const V=z[q];for(const H in V)m(V[H].object),delete V[H];delete z[q]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const z=o[N.id];for(const q in z){const V=z[q];for(const H in V)m(V[H].object),delete V[H];delete z[q]}delete o[N.id]}function F(N){for(const z in o){const q=o[z];if(q[N.id]===void 0)continue;const V=q[N.id];for(const H in V)m(V[H].object),delete V[H];delete q[N.id]}}function U(){P(),h=!0,c!==l&&(c=l,f(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:S,disableUnusedAttributes:M}}function yM(r,e,t,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function _M(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,S=a||e.has("OES_texture_float"),v=y&&S,M=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:M}}function vM(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new Es,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,y=_*4;let S=p.clippingState||null;l.value=S,S=h(m,d,y,f);for(let v=0;v!==y;++v)S[v]=t[v];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=f;y!==x;++y,S+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}class An extends Wn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(Sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ss?Le:ws),this.texture=new ei(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zr=-90,Or=1;class MM extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new hi(zr,Or,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new hi(zr,Or,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new hi(zr,Or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new hi(zr,Or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new hi(zr,Or,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new hi(zr,Or,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class bM extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ss?Le:ws),this.texture=new Fr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Tn(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Gn});s.uniforms.tEquirect.value=t;const a=new ht(n,s),o=t.minFilter;return t.minFilter===xa&&(t.minFilter=mi),new MM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}function SM(r){let e=new WeakMap;function t(a,o){return o===Nc?a.mapping=hr:o===Bc&&(a.mapping=ur),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Nc||o===Bc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bM(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wM extends jf{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,dp=[.125,.215,.35,.446,.526,.582],Cs=20,Th=new wM,fp=new De;let Ah=null;const Ps=(1+Math.sqrt(5))/2,Vr=1/Ps,pp=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ps,Vr),new L(0,Ps,-Vr),new L(Vr,0,Ps),new L(-Vr,0,Ps),new L(Ps,Vr,0),new L(-Ps,Vr,0)];class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ah=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:ya,format:Qt,colorSpace:Wi,depthBuffer:!1},n=mp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(s)),this._blurMaterial=AM(s,e,t)}return n}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Th)}_sceneToCubeUV(e,t,i,n){const o=new hi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fp),h.toneMapping=mn,h.autoClear=!1;const f=new Ar({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),m=new ht(new Tn,f);let x=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(fp),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;el(n,_*y,p>2?y:0,y,y),h.setRenderTarget(n),x&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===hr||e.mapping===ur;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;el(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Th)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=pp[(n-1)%pp.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):Cs;g>Cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);const p=[];let _=0;for(let T=0;T<Cs;++T){const C=T/x,b=Math.exp(-C*C/2);p.push(b),T===0?_+=b:T<g&&(_+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const S=this._sizeLods[n],v=3*S*(n>y-kr?n-y+kr:0),M=4*(this._cubeSize-S);el(t,v,M,3*S,2*S),l.setRenderTarget(t),l.render(u,Th)}}function TM(r){const e=[],t=[],i=[];let n=r;const s=r-kr+1+dp.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-kr?l=dp[a-r+kr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*f),y=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,C=M>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(b,x*m*M),y.set(d,g*m*M);const w=[M,M,M,M,M,M];S.set(w,p*m*M)}const v=new ci;v.setAttribute("position",new xi(_,x)),v.setAttribute("uv",new xi(y,g)),v.setAttribute("faceIndex",new xi(S,p)),e.push(v),n>kr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mp(r,e,t){const i=new An(r,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function AM(r,e,t){const i=new Float32Array(Cs),n=new L(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function gp(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xp(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function EM(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nc||l===Bc,h=l===hr||l===ur;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Eh(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Eh(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function RM(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function CM(r,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,S=_.length;y<S;y+=3){const v=_[y+0],M=_[y+1],T=_[y+2];d.push(v,M,M,T,T,v)}}else{const _=m.array;x=m.version;for(let y=0,S=_.length/3-1;y<S;y+=3){const v=y+0,M=y+1,T=y+2;d.push(v,M,M,T,T,v)}}const g=new(Df(d)?Tf:wf)(d,1);g.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function PM(r,e,t,i){const n=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,o,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let x,g;if(n)x=r,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](s,f,o,d*l,m),t.update(f,s,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function LM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class yp extends ei{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_t,this.minFilter=_t,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function IM(r,e){return r[0]-e[0]}function DM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function FM(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let x=s.get(h);if(x===void 0||x.count!==m){let N=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let C=0;_===!0&&(C=1),y===!0&&(C=2),S===!0&&(C=3);let b=h.attributes.position.count*C,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*w*4*m),U=new yp(F,b,w,m);U.type=_s,U.needsUpdate=!0;const P=C*4;for(let z=0;z<m;z++){const q=v[z],V=M[z],H=T[z],W=b*w*4*z;for(let Z=0;Z<q.count;Z++){const oe=Z*P;_===!0&&(a.fromBufferAttribute(q,Z),F[W+oe+0]=a.x,F[W+oe+1]=a.y,F[W+oe+2]=a.z,F[W+oe+3]=0),y===!0&&(a.fromBufferAttribute(V,Z),F[W+oe+4]=a.x,F[W+oe+5]=a.y,F[W+oe+6]=a.z,F[W+oe+7]=0),S===!0&&(a.fromBufferAttribute(H,Z),F[W+oe+8]=a.x,F[W+oe+9]=a.y,F[W+oe+10]=a.z,F[W+oe+11]=H.itemSize===4?a.w:1)}}x={count:m,texture:U,size:new Ee(b,w)},s.set(h,x),h.addEventListener("dispose",N)}let g=0;for(let _=0;_<d.length;_++)g+=d[_];const p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const f=d===void 0?0:d.length;let m=i[h.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];i[h.id]=m}for(let y=0;y<f;y++){const S=m[y];S[0]=y,S[1]=d[y]}m.sort(DM);for(let y=0;y<8;y++)y<f&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(IM);const x=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const S=o[y],v=S[0],M=S[1];v!==Number.MAX_SAFE_INTEGER&&M?(x&&h.getAttribute("morphTarget"+y)!==x[v]&&h.setAttribute("morphTarget"+y,x[v]),g&&h.getAttribute("morphNormal"+y)!==g[v]&&h.setAttribute("morphNormal"+y,g[v]),n[y]=M,p+=M):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),g&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}const _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function UM(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class NM extends ei{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_t,this.minFilter=_t,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _p=new ei,vp=new yp,Mp=new NM,bp=new Fr,Sp=[],wp=[],Tp=new Float32Array(16),Ap=new Float32Array(9),Ep=new Float32Array(4);function Hr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Sp[n];if(s===void 0&&(s=new Float32Array(n),Sp[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function vt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function tl(r,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function BM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function VM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Ep.set(i),r.uniformMatrix2fv(this.addr,!1,Ep),Mt(t,i)}}function HM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Ap.set(i),r.uniformMatrix3fv(this.addr,!1,Ap),Mt(t,i)}}function GM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Tp.set(i),r.uniformMatrix4fv(this.addr,!1,Tp),Mt(t,i)}}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function qM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function JM(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||_p,n)}function QM(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Mp,n)}function eb(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||bp,n)}function tb(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||vp,n)}function ib(r){switch(r){case 5126:return BM;case 35664:return zM;case 35665:return OM;case 35666:return kM;case 35674:return VM;case 35675:return HM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return $M;case 35669:case 35673:return jM;case 5125:return qM;case 36294:return YM;case 36295:return KM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(r,e){r.uniform1fv(this.addr,e)}function sb(r,e){const t=Hr(e,this.size,2);r.uniform2fv(this.addr,t)}function rb(r,e){const t=Hr(e,this.size,3);r.uniform3fv(this.addr,t)}function ab(r,e){const t=Hr(e,this.size,4);r.uniform4fv(this.addr,t)}function ob(r,e){const t=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lb(r,e){const t=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cb(r,e){const t=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hb(r,e){r.uniform1iv(this.addr,e)}function ub(r,e){r.uniform2iv(this.addr,e)}function db(r,e){r.uniform3iv(this.addr,e)}function fb(r,e){r.uniform4iv(this.addr,e)}function pb(r,e){r.uniform1uiv(this.addr,e)}function mb(r,e){r.uniform2uiv(this.addr,e)}function gb(r,e){r.uniform3uiv(this.addr,e)}function xb(r,e){r.uniform4uiv(this.addr,e)}function yb(r,e,t){const i=this.cache,n=e.length,s=tl(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||_p,s[a])}function _b(r,e,t){const i=this.cache,n=e.length,s=tl(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Mp,s[a])}function vb(r,e,t){const i=this.cache,n=e.length,s=tl(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||bp,s[a])}function Mb(r,e,t){const i=this.cache,n=e.length,s=tl(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||vp,s[a])}function bb(r){switch(r){case 5126:return nb;case 35664:return sb;case 35665:return rb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return hb;case 35667:case 35671:return ub;case 35668:case 35672:return db;case 35669:case 35673:return fb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return Mb}}class Sb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ib(t.type)}}class wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=bb(t.type)}}class Tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function Rp(r,e){r.seq.push(e),r.map[e.id]=e}function Ab(r,e,t){const i=r.name,n=i.length;for(Ch.lastIndex=0;;){const s=Ch.exec(i),a=Ch.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Rp(t,c===void 0?new Sb(o,r,e):new wb(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Tb(o),Rp(t,u)),t=u}}}class il{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);Ab(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Cp(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let Eb=0;function Rb(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Cb(r){switch(r){case Wi:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Pp(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Rb(r.getShaderSource(e),a)}else return n}function Pb(r,e){const t=Cb(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Lb(r,e){let t;switch(e){case Tx:t="Linear";break;case Ax:t="Reinhard";break;case Ex:t="OptimizedCineon";break;case $d:t="ACESFilmic";break;case Rx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ib(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pa).join(`
`)}function Db(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fb(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Pa(r){return r!==""}function Lp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(r){return r.replace(Ub,Nb)}function Nb(r,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ph(t)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(r){return r.replace(Bb,zb)}function zb(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Fp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ob(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function kb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hr:case ur:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ur:e="ENVMAP_MODE_REFRACTION";break}return e}function Hb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case To:e="ENVMAP_BLENDING_MULTIPLY";break;case Sx:e="ENVMAP_BLENDING_MIX";break;case wx:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Wb(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ob(t),c=kb(t),h=Vb(t),u=Hb(t),d=Gb(t),f=t.isWebGL2?"":Ib(t),m=Db(s),x=n.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Pa).join(`
`),g.length>0&&(g+=`
`),p=[f,m].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(g=[Fp(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[f,Fp(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==mn?Lb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Pb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Ph(a),a=Lp(a,t),a=Ip(a,t),o=Ph(o),o=Lp(o,t),o=Ip(o,t),a=Dp(a),o=Dp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===pr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+g+a,S=_+p+o,v=Cp(n,n.VERTEX_SHADER,y),M=Cp(n,n.FRAGMENT_SHADER,S);if(n.attachShader(x,v),n.attachShader(x,M),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),r.debug.checkShaderErrors){const b=n.getProgramInfoLog(x).trim(),w=n.getShaderInfoLog(v).trim(),F=n.getShaderInfoLog(M).trim();let U=!0,P=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,v,M);else{const N=Pp(n,v,"vertex"),z=Pp(n,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+N+`
`+z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(w===""||F==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:b,vertexShader:{log:w,prefix:g},fragmentShader:{log:F,prefix:p}})}n.deleteShader(v),n.deleteShader(M);let T;this.getUniforms=function(){return T===void 0&&(T=new il(n,x)),T};let C;return this.getAttributes=function(){return C===void 0&&(C=Fb(n,x)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=M,this}let Xb=0;class $b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jb(e),t.set(e,i)),i}}class jb{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function qb(r,e,t,i,n,s,a){const o=new ih,l=new $b,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function g(b,w,F,U,P){const N=U.fog,z=P.geometry,q=b.isMeshStandardMaterial?U.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),H=V&&V.mapping===Ao?V.image.height:null,W=m[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=Z!==void 0?Z.length:0;let re=0;z.morphAttributes.position!==void 0&&(re=1),z.morphAttributes.normal!==void 0&&(re=2),z.morphAttributes.color!==void 0&&(re=3);let G,J,ie,le;if(W){const it=ji[W];G=it.vertexShader,J=it.fragmentShader}else G=b.vertexShader,J=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),le=l.getFragmentShaderID(b);const B=r.getRenderTarget(),Ie=P.isInstancedMesh===!0,Re=!!b.map,ae=!!b.matcap,we=!!V,qe=!!b.aoMap,xe=!!b.lightMap,Be=!!b.bumpMap,Rt=!!b.normalMap,Bt=!!b.displacementMap,Ct=!!b.emissiveMap,bt=!!b.metalnessMap,Ye=!!b.roughnessMap,dt=b.clearcoat>0,ii=b.iridescence>0,R=b.sheen>0,A=b.transmission>0,X=dt&&!!b.clearcoatMap,ee=dt&&!!b.clearcoatNormalMap,te=dt&&!!b.clearcoatRoughnessMap,ce=ii&&!!b.iridescenceMap,Te=ii&&!!b.iridescenceThicknessMap,de=R&&!!b.sheenColorMap,Y=R&&!!b.sheenRoughnessMap,me=!!b.specularMap,ye=!!b.specularColorMap,be=!!b.specularIntensityMap,ue=A&&!!b.transmissionMap,ge=A&&!!b.thicknessMap,He=!!b.gradientMap,Qe=!!b.alphaMap,pt=b.alphaTest>0,D=!!b.extensions,$=!!z.attributes.uv1,Q=!!z.attributes.uv2,he=!!z.attributes.uv3;return{isWebGL2:h,shaderID:W,shaderName:b.type,vertexShader:G,fragmentShader:J,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:B===null?r.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Wi,map:Re,matcap:ae,envMap:we,envMapMode:we&&V.mapping,envMapCubeUVHeight:H,aoMap:qe,lightMap:xe,bumpMap:Be,normalMap:Rt,displacementMap:d&&Bt,emissiveMap:Ct,normalMapObjectSpace:Rt&&b.normalMapType===Kx,normalMapTangentSpace:Rt&&b.normalMapType===Po,metalnessMap:bt,roughnessMap:Ye,clearcoat:dt,clearcoatMap:X,clearcoatNormalMap:ee,clearcoatRoughnessMap:te,iridescence:ii,iridescenceMap:ce,iridescenceThicknessMap:Te,sheen:R,sheenColorMap:de,sheenRoughnessMap:Y,specularMap:me,specularColorMap:ye,specularIntensityMap:be,transmission:A,transmissionMap:ue,thicknessMap:ge,gradientMap:He,opaque:b.transparent===!1&&b.blending===cr,alphaMap:Qe,alphaTest:pt,combine:b.combine,mapUv:Re&&x(b.map.channel),aoMapUv:qe&&x(b.aoMap.channel),lightMapUv:xe&&x(b.lightMap.channel),bumpMapUv:Be&&x(b.bumpMap.channel),normalMapUv:Rt&&x(b.normalMap.channel),displacementMapUv:Bt&&x(b.displacementMap.channel),emissiveMapUv:Ct&&x(b.emissiveMap.channel),metalnessMapUv:bt&&x(b.metalnessMap.channel),roughnessMapUv:Ye&&x(b.roughnessMap.channel),clearcoatMapUv:X&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Y&&x(b.sheenRoughnessMap.channel),specularMapUv:me&&x(b.specularMap.channel),specularColorMapUv:ye&&x(b.specularColorMap.channel),specularIntensityMapUv:be&&x(b.specularIntensityMap.channel),transmissionMapUv:ue&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:Qe&&x(b.alphaMap.channel),vertexTangents:Rt&&!!z.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:Q,vertexUv3s:he,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Re||Qe),fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:mn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gi,flipSided:b.side===Jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:D&&b.extensions.derivatives===!0,extensionFragDepth:D&&b.extensions.fragDepth===!0,extensionDrawBuffers:D&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)w.push(F),w.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(_(w,b),y(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function _(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),b.push(o.mask)}function S(b){const w=m[b.type];let F;if(w){const U=ji[w];F=y_.clone(U.uniforms)}else F=b.uniforms;return F}function v(b,w){let F;for(let U=0,P=c.length;U<P;U++){const N=c[U];if(N.cacheKey===w){F=N,++F.usedTimes;break}}return F===void 0&&(F=new Wb(r,w,b,s),c.push(F)),F}function M(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:C}}function Yb(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Kb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Up(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Np(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,m,x,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function o(u,d,f,m,x,g){const p=a(u,d,f,m,x,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,m,x,g){const p=a(u,d,f,m,x,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Kb),i.length>1&&i.sort(d||Up),n.length>1&&n.sort(d||Up)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Zb(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new Np,r.set(i,[a])):n>=s.length?(a=new Np,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Qb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eS=0;function tS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function iS(r,e){const t=new Jb,i=Qb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new L);const s=new L,a=new Ke,o=new Ke;function l(h,u){let d=0,f=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let x=0,g=0,p=0,_=0,y=0,S=0,v=0,M=0,T=0,C=0;h.sort(tS);const b=u===!0?Math.PI:1;for(let F=0,U=h.length;F<U;F++){const P=h[F],N=P.color,z=P.intensity,q=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*z*b,f+=N.g*z*b,m+=N.b*z*b;else if(P.isLightProbe)for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],z);else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const W=P.shadow,Z=i.get(P);Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.directionalShadow[x]=Z,n.directionalShadowMap[x]=V,n.directionalShadowMatrix[x]=P.shadow.matrix,S++}n.directional[x]=H,x++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(z*b),H.distance=q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[p]=H;const W=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,W.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[p]=W.matrix,P.castShadow){const Z=i.get(P);Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.spotShadow[p]=Z,n.spotShadowMap[p]=V,M++}p++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(N).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=H,_++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*b),H.distance=P.distance,H.decay=P.decay,P.castShadow){const W=P.shadow,Z=i.get(P);Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(z*b),H.groundColor.copy(P.groundColor).multiplyScalar(z*b),n.hemi[y]=H,y++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const w=n.hash;(w.directionalLength!==x||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==_||w.hemiLength!==y||w.numDirectionalShadows!==S||w.numPointShadows!==v||w.numSpotShadows!==M||w.numSpotMaps!==T)&&(n.directional.length=x,n.spot.length=p,n.rectArea.length=_,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,w.directionalLength=x,w.pointLength=g,w.spotLength=p,w.rectAreaLength=_,w.hemiLength=y,w.numDirectionalShadows=S,w.numPointShadows=v,w.numSpotShadows=M,w.numSpotMaps=T,n.version=eS++)}function c(h,u){let d=0,f=0,m=0,x=0,g=0;const p=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const S=h[_];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(S.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:n}}function Bp(r,e){const t=new iS(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function nS(r,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Bp(r,e),t.set(s,[l])):a>=o.length?(l=new Bp(r,e),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class sS extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,oS=`
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
`;function lS(r,e,t){let i=new mh;const n=new Ee,s=new Ee,a=new ot,o=new sS({depthPacking:Yx}),l=new rS,c={},h=t.maxTextureSize,u={[Ei]:Jt,[Jt]:Ei,[Gi]:Gi},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:aS,fragmentShader:oS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new ci;m.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(v,M,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Gn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==pn&&this.type===pn,P=p===pn&&this.type!==pn;for(let N=0,z=v.length;N<z;N++){const q=v[N],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const H=V.getFrameExtents();if(n.multiply(H),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/H.x),n.x=s.x*H.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/H.y),n.y=s.y*H.y,V.mapSize.y=s.y)),V.map===null||U===!0||P===!0){const Z=this.type!==pn?{minFilter:_t,magFilter:_t}:{};V.map!==null&&V.map.dispose(),V.map=new An(n.x,n.y,Z),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const W=V.getViewportCount();for(let Z=0;Z<W;Z++){const oe=V.getViewport(Z);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a),V.updateMatrices(q,Z),i=V.getFrustum(),S(M,T,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===pn&&_(V,T),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(C,b,w)};function _(v,M){const T=e.update(x);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new An(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(M,null,T,d,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(M,null,T,f,x,null)}function y(v,M,T,C){let b=null;const w=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)b=w;else if(b=T.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=b.uuid,U=M.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let N=P[U];N===void 0&&(N=b.clone(),P[U]=N),b=N}if(b.visible=M.visible,b.wireframe=M.wireframe,C===pn?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:u[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=r.properties.get(b);F.light=T}return b}function S(v,M,T,C,b){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===pn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const U=e.update(v),P=v.material;if(Array.isArray(P)){const N=U.groups;for(let z=0,q=N.length;z<q;z++){const V=N[z],H=P[V.materialIndex];if(H&&H.visible){const W=y(v,H,C,b);r.renderBufferDirect(T,null,U,W,v,V)}}}else if(P.visible){const N=y(v,P,C,b);r.renderBufferDirect(T,null,U,N,v,null)}}const F=v.children;for(let U=0,P=F.length;U<P;U++)S(F[U],M,T,C,b)}}function cS(r,e,t){const i=t.isWebGL2;function n(){let D=!1;const $=new ot;let Q=null;const he=new ot(0,0,0,0);return{setMask:function(fe){Q!==fe&&!D&&(r.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){D=fe},setClear:function(fe,it,nt,Xt,os){os===!0&&(fe*=Xt,it*=Xt,nt*=Xt),$.set(fe,it,nt,Xt),he.equals($)===!1&&(r.clearColor(fe,it,nt,Xt),he.copy($))},reset:function(){D=!1,Q=null,he.set(-1,0,0,0)}}}function s(){let D=!1,$=null,Q=null,he=null;return{setTest:function(fe){fe?B(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(fe){$!==fe&&!D&&(r.depthMask(fe),$=fe)},setFunc:function(fe){if(Q!==fe){switch(fe){case gx:r.depthFunc(r.NEVER);break;case xx:r.depthFunc(r.ALWAYS);break;case yx:r.depthFunc(r.LESS);break;case Uc:r.depthFunc(r.LEQUAL);break;case _x:r.depthFunc(r.EQUAL);break;case vx:r.depthFunc(r.GEQUAL);break;case Mx:r.depthFunc(r.GREATER);break;case bx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=fe}},setLocked:function(fe){D=fe},setClear:function(fe){he!==fe&&(r.clearDepth(fe),he=fe)},reset:function(){D=!1,$=null,Q=null,he=null}}}function a(){let D=!1,$=null,Q=null,he=null,fe=null,it=null,nt=null,Xt=null,os=null;return{setTest:function(mt){D||(mt?B(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(mt){$!==mt&&!D&&(r.stencilMask(mt),$=mt)},setFunc:function(mt,Mi,nn){(Q!==mt||he!==Mi||fe!==nn)&&(r.stencilFunc(mt,Mi,nn),Q=mt,he=Mi,fe=nn)},setOp:function(mt,Mi,nn){(it!==mt||nt!==Mi||Xt!==nn)&&(r.stencilOp(mt,Mi,nn),it=mt,nt=Mi,Xt=nn)},setLocked:function(mt){D=mt},setClear:function(mt){os!==mt&&(r.clearStencil(mt),os=mt)},reset:function(){D=!1,$=null,Q=null,he=null,fe=null,it=null,nt=null,Xt=null,os=null}}}const o=new n,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,x=[],g=null,p=!1,_=null,y=null,S=null,v=null,M=null,T=null,C=null,b=!1,w=null,F=null,U=null,P=null,N=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=V>=2);let W=null,Z={};const oe=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),G=new ot().fromArray(oe),J=new ot().fromArray(re);function ie(D,$,Q,he){const fe=new Uint8Array(4),it=r.createTexture();r.bindTexture(D,it),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<Q;nt++)i&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D($,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D($+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return it}const le={};le[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(r.DEPTH_TEST),l.setFunc(Uc),Bt(!1),Ct(Nd),B(r.CULL_FACE),Be(Gn);function B(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function Ie(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function Re(D,$){return f[D]!==$?(r.bindFramebuffer(D,$),f[D]=$,i&&(D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=$),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=$)),!0):!1}function ae(D,$){let Q=x,he=!1;if(D)if(Q=m.get($),Q===void 0&&(Q=[],m.set($,Q)),D.isWebGLMultipleRenderTargets){const fe=D.texture;if(Q.length!==fe.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let it=0,nt=fe.length;it<nt;it++)Q[it]=r.COLOR_ATTACHMENT0+it;Q.length=fe.length,he=!0}}else Q[0]!==r.COLOR_ATTACHMENT0&&(Q[0]=r.COLOR_ATTACHMENT0,he=!0);else Q[0]!==r.BACK&&(Q[0]=r.BACK,he=!0);he&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function we(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const qe={[gs]:r.FUNC_ADD,[ax]:r.FUNC_SUBTRACT,[ox]:r.FUNC_REVERSE_SUBTRACT};if(i)qe[Hd]=r.MIN,qe[Gd]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(qe[Hd]=D.MIN_EXT,qe[Gd]=D.MAX_EXT)}const xe={[lx]:r.ZERO,[Wd]:r.ONE,[cx]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[mx]:r.SRC_ALPHA_SATURATE,[fx]:r.DST_COLOR,[ux]:r.DST_ALPHA,[hx]:r.ONE_MINUS_SRC_COLOR,[Fc]:r.ONE_MINUS_SRC_ALPHA,[px]:r.ONE_MINUS_DST_COLOR,[dx]:r.ONE_MINUS_DST_ALPHA};function Be(D,$,Q,he,fe,it,nt,Xt){if(D===Gn){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(B(r.BLEND),p=!0),D!==Vd){if(D!==_||Xt!==b){if((y!==gs||M!==gs)&&(r.blendEquation(r.FUNC_ADD),y=gs,M=gs),Xt)switch(D){case cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dc:r.blendFunc(r.ONE,r.ONE);break;case Od:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Od:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,v=null,T=null,C=null,_=D,b=Xt}return}fe=fe||$,it=it||Q,nt=nt||he,($!==y||fe!==M)&&(r.blendEquationSeparate(qe[$],qe[fe]),y=$,M=fe),(Q!==S||he!==v||it!==T||nt!==C)&&(r.blendFuncSeparate(xe[Q],xe[he],xe[it],xe[nt]),S=Q,v=he,T=it,C=nt),_=D,b=!1}function Rt(D,$){D.side===Gi?Ie(r.CULL_FACE):B(r.CULL_FACE);let Q=D.side===Jt;$&&(Q=!Q),Bt(Q),D.blending===cr&&D.transparent===!1?Be(Gn):Be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const he=D.stencilWrite;c.setTest(he),he&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?B(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(D){w!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),w=D)}function Ct(D){D!==sx?(B(r.CULL_FACE),D!==F&&(D===Nd?r.cullFace(r.BACK):D===rx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),F=D}function bt(D){D!==U&&(q&&r.lineWidth(D),U=D)}function Ye(D,$,Q){D?(B(r.POLYGON_OFFSET_FILL),(P!==$||N!==Q)&&(r.polygonOffset($,Q),P=$,N=Q)):Ie(r.POLYGON_OFFSET_FILL)}function dt(D){D?B(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function ii(D){D===void 0&&(D=r.TEXTURE0+z-1),W!==D&&(r.activeTexture(D),W=D)}function R(D,$,Q){Q===void 0&&(W===null?Q=r.TEXTURE0+z-1:Q=W);let he=Z[Q];he===void 0&&(he={type:void 0,texture:void 0},Z[Q]=he),(he.type!==D||he.texture!==$)&&(W!==Q&&(r.activeTexture(Q),W=Q),r.bindTexture(D,$||le[D]),he.type=D,he.texture=$)}function A(){const D=Z[W];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){G.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),G.copy(D))}function ge(D){J.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function He(D,$){let Q=u.get($);Q===void 0&&(Q=new WeakMap,u.set($,Q));let he=Q.get(D);he===void 0&&(he=r.getUniformBlockIndex($,D.name),Q.set(D,he))}function Qe(D,$){const he=u.get($).get(D);h.get($)!==he&&(r.uniformBlockBinding($,he,D.__bindingPointIndex),h.set($,he))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,Z={},f={},m=new WeakMap,x=[],g=null,p=!1,_=null,y=null,S=null,v=null,M=null,T=null,C=null,b=!1,w=null,F=null,U=null,P=null,N=null,G.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:B,disable:Ie,bindFramebuffer:Re,drawBuffers:ae,useProgram:we,setBlending:Be,setMaterial:Rt,setFlipSided:Bt,setCullFace:Ct,setLineWidth:bt,setPolygonOffset:Ye,setScissorTest:dt,activeTexture:ii,bindTexture:R,unbindTexture:A,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:ye,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Qe,texStorage2D:Y,texStorage3D:me,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:Te,compressedTexSubImage3D:de,scissor:ue,viewport:ge,reset:pt}}function hS(r,e,t,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let x;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return p?new OffscreenCanvas(R,A):ba("canvas")}function y(R,A,X,ee){let te=1;if((R.width>ee||R.height>ee)&&(te=ee/Math.max(R.width,R.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=A?pg:Math.floor,Te=ce(te*R.width),de=ce(te*R.height);x===void 0&&(x=_(Te,de));const Y=X?_(Te,de):x;return Y.width=Te,Y.height=de,Y.getContext("2d").drawImage(R,0,0,Te,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+de+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Eu(R.width)&&Eu(R.height)}function v(R){return o?!1:R.wrapS!==Ri||R.wrapT!==Ri||R.minFilter!==_t&&R.minFilter!==mi}function M(R,A){return R.generateMipmaps&&A&&R.minFilter!==_t&&R.minFilter!==mi}function T(R){r.generateMipmap(R)}function C(R,A,X,ee,te=!1){if(o===!1)return A;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=A;return A===r.RED&&(X===r.FLOAT&&(ce=r.R32F),X===r.HALF_FLOAT&&(ce=r.R16F),X===r.UNSIGNED_BYTE&&(ce=r.R8)),A===r.RG&&(X===r.FLOAT&&(ce=r.RG32F),X===r.HALF_FLOAT&&(ce=r.RG16F),X===r.UNSIGNED_BYTE&&(ce=r.RG8)),A===r.RGBA&&(X===r.FLOAT&&(ce=r.RGBA32F),X===r.HALF_FLOAT&&(ce=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ce=ee===Le&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)),(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(R,A,X){return M(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==_t&&R.minFilter!==mi?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function w(R){return R===_t||R===qd||R===kc?r.NEAREST:r.LINEAR}function F(R){const A=R.target;A.removeEventListener("dispose",F),P(A),A.isVideoTexture&&m.delete(A)}function U(R){const A=R.target;A.removeEventListener("dispose",U),z(A)}function P(R){const A=i.get(R);if(A.__webglInit===void 0)return;const X=R.source,ee=g.get(X);if(ee){const te=ee[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(R),Object.keys(ee).length===0&&g.delete(X)}i.remove(R)}function N(R){const A=i.get(R);r.deleteTexture(A.__webglTexture);const X=R.source,ee=g.get(X);delete ee[A.__cacheKey],a.memory.textures--}function z(R){const A=R.texture,X=i.get(R),ee=i.get(A);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(X.__webglFramebuffer[te]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let te=0;te<X.__webglColorRenderbuffer.length;te++)X.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,ce=A.length;te<ce;te++){const Te=i.get(A[te]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(R)}let q=0;function V(){q=0}function H(){const R=q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),q+=1,R}function W(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function Z(R,A){const X=i.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(X,R,A);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+A)}function oe(R,A){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Ie(X,R,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+A)}function re(R,A){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Ie(X,R,A);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+A)}function G(R,A){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Re(X,R,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+A)}const J={[zc]:r.REPEAT,[Ri]:r.CLAMP_TO_EDGE,[Oc]:r.MIRRORED_REPEAT},ie={[_t]:r.NEAREST,[qd]:r.NEAREST_MIPMAP_NEAREST,[kc]:r.NEAREST_MIPMAP_LINEAR,[mi]:r.LINEAR,[Cx]:r.LINEAR_MIPMAP_NEAREST,[xa]:r.LINEAR_MIPMAP_LINEAR};function le(R,A,X){if(X?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[A.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[A.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[A.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ie[A.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ie[A.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==Ri||A.wrapT!==Ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(A.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==_t&&A.minFilter!==mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===_t||A.minFilter!==kc&&A.minFilter!==xa||A.type===_s&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(r.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function B(R,A){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",F));const ee=A.source;let te=g.get(ee);te===void 0&&(te={},g.set(ee,te));const ce=W(A);if(ce!==R.__cacheKey){te[ce]===void 0&&(te[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[ce].usedTimes++;const Te=te[R.__cacheKey];Te!==void 0&&(te[R.__cacheKey].usedTimes--,Te.usedTimes===0&&N(A)),R.__cacheKey=ce,R.__webglTexture=te[ce].texture}return X}function Ie(R,A,X){let ee=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=r.TEXTURE_3D);const te=B(R,A),ce=A.source;t.bindTexture(ee,R.__webglTexture,r.TEXTURE0+X);const Te=i.get(ce);if(ce.version!==Te.__version||te===!0){t.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const de=v(A)&&S(A.image)===!1;let Y=y(A.image,de,!1,h);Y=ii(A,Y);const me=S(Y)||o,ye=s.convert(A.format,A.colorSpace);let be=s.convert(A.type),ue=C(A.internalFormat,ye,be,A.colorSpace);le(ee,A,me);let ge;const He=A.mipmaps,Qe=o&&A.isVideoTexture!==!0,pt=Te.__version===void 0||te===!0,D=b(A,Y,me);if(A.isDepthTexture)ue=r.DEPTH_COMPONENT,o?A.type===_s?ue=r.DEPTH_COMPONENT32F:A.type===ys?ue=r.DEPTH_COMPONENT24:A.type===vs?ue=r.DEPTH24_STENCIL8:ue=r.DEPTH_COMPONENT16:A.type===_s&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ms&&ue===r.DEPTH_COMPONENT&&A.type!==Yd&&A.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ys,be=s.convert(A.type)),A.format===bs&&ue===r.DEPTH_COMPONENT&&(ue=r.DEPTH_STENCIL,A.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=vs,be=s.convert(A.type))),pt&&(Qe?t.texStorage2D(r.TEXTURE_2D,1,ue,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,ue,Y.width,Y.height,0,ye,be,null));else if(A.isDataTexture)if(He.length>0&&me){Qe&&pt&&t.texStorage2D(r.TEXTURE_2D,D,ue,He[0].width,He[0].height);for(let $=0,Q=He.length;$<Q;$++)ge=He[$],Qe?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ge.width,ge.height,ye,be,ge.data):t.texImage2D(r.TEXTURE_2D,$,ue,ge.width,ge.height,0,ye,be,ge.data);A.generateMipmaps=!1}else Qe?(pt&&t.texStorage2D(r.TEXTURE_2D,D,ue,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,ye,be,Y.data)):t.texImage2D(r.TEXTURE_2D,0,ue,Y.width,Y.height,0,ye,be,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qe&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,D,ue,He[0].width,He[0].height,Y.depth);for(let $=0,Q=He.length;$<Q;$++)ge=He[$],A.format!==Qt?ye!==null?Qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,Y.depth,ye,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,ue,ge.width,ge.height,Y.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,Y.depth,ye,be,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,ue,ge.width,ge.height,Y.depth,0,ye,be,ge.data)}else{Qe&&pt&&t.texStorage2D(r.TEXTURE_2D,D,ue,He[0].width,He[0].height);for(let $=0,Q=He.length;$<Q;$++)ge=He[$],A.format!==Qt?ye!==null?Qe?t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,$,ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ge.width,ge.height,ye,be,ge.data):t.texImage2D(r.TEXTURE_2D,$,ue,ge.width,ge.height,0,ye,be,ge.data)}else if(A.isDataArrayTexture)Qe?(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,D,ue,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ye,be,Y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,Y.width,Y.height,Y.depth,0,ye,be,Y.data);else if(A.isData3DTexture)Qe?(pt&&t.texStorage3D(r.TEXTURE_3D,D,ue,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ye,be,Y.data)):t.texImage3D(r.TEXTURE_3D,0,ue,Y.width,Y.height,Y.depth,0,ye,be,Y.data);else if(A.isFramebufferTexture){if(pt)if(Qe)t.texStorage2D(r.TEXTURE_2D,D,ue,Y.width,Y.height);else{let $=Y.width,Q=Y.height;for(let he=0;he<D;he++)t.texImage2D(r.TEXTURE_2D,he,ue,$,Q,0,ye,be,null),$>>=1,Q>>=1}}else if(He.length>0&&me){Qe&&pt&&t.texStorage2D(r.TEXTURE_2D,D,ue,He[0].width,He[0].height);for(let $=0,Q=He.length;$<Q;$++)ge=He[$],Qe?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ye,be,ge):t.texImage2D(r.TEXTURE_2D,$,ue,ye,be,ge);A.generateMipmaps=!1}else Qe?(pt&&t.texStorage2D(r.TEXTURE_2D,D,ue,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,be,Y)):t.texImage2D(r.TEXTURE_2D,0,ue,ye,be,Y);M(A,me)&&T(ee),Te.__version=ce.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Re(R,A,X){if(A.image.length!==6)return;const ee=B(R,A),te=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const ce=i.get(te);if(te.version!==ce.__version||ee===!0){t.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Te=A.isCompressedTexture||A.image[0].isCompressedTexture,de=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let $=0;$<6;$++)!Te&&!de?Y[$]=y(A.image[$],!1,!0,c):Y[$]=de?A.image[$].image:A.image[$],Y[$]=ii(A,Y[$]);const me=Y[0],ye=S(me)||o,be=s.convert(A.format,A.colorSpace),ue=s.convert(A.type),ge=C(A.internalFormat,be,ue,A.colorSpace),He=o&&A.isVideoTexture!==!0,Qe=ce.__version===void 0||ee===!0;let pt=b(A,me,ye);le(r.TEXTURE_CUBE_MAP,A,ye);let D;if(Te){He&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,ge,me.width,me.height);for(let $=0;$<6;$++){D=Y[$].mipmaps;for(let Q=0;Q<D.length;Q++){const he=D[Q];A.format!==Qt?be!==null?He?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q,0,0,he.width,he.height,be,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q,0,0,he.width,he.height,be,ue,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q,ge,he.width,he.height,0,be,ue,he.data)}}}else{D=A.mipmaps,He&&Qe&&(D.length>0&&pt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,ge,Y[0].width,Y[0].height));for(let $=0;$<6;$++)if(de){He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Y[$].width,Y[$].height,be,ue,Y[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ge,Y[$].width,Y[$].height,0,be,ue,Y[$].data);for(let Q=0;Q<D.length;Q++){const fe=D[Q].image[$].image;He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q+1,0,0,fe.width,fe.height,be,ue,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q+1,ge,fe.width,fe.height,0,be,ue,fe.data)}}else{He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,ue,Y[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ge,be,ue,Y[$]);for(let Q=0;Q<D.length;Q++){const he=D[Q];He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q+1,0,0,be,ue,he.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q+1,ge,be,ue,he.image[$])}}}M(A,ye)&&T(r.TEXTURE_CUBE_MAP),ce.__version=te.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ae(R,A,X,ee,te){const ce=s.convert(X.format,X.colorSpace),Te=s.convert(X.type),de=C(X.internalFormat,ce,Te,X.colorSpace);i.get(A).__hasExternalTextures||(te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,0,de,A.width,A.height,A.depth,0,ce,Te,null):t.texImage2D(te,0,de,A.width,A.height,0,ce,Te,null)),t.bindFramebuffer(r.FRAMEBUFFER,R),Ye(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,te,i.get(X).__webglTexture,0,bt(A)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,te,i.get(X).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,A,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ee=r.DEPTH_COMPONENT16;if(X||Ye(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===_s?ee=r.DEPTH_COMPONENT32F:te.type===ys&&(ee=r.DEPTH_COMPONENT24));const ce=bt(A);Ye(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ee,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ee,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ee=bt(A);X&&Ye(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,A.width,A.height):Ye(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ee=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ee.length;te++){const ce=ee[te],Te=s.convert(ce.format,ce.colorSpace),de=s.convert(ce.type),Y=C(ce.internalFormat,Te,de,ce.colorSpace),me=bt(A);X&&Ye(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,Y,A.width,A.height):Ye(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,Y,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Y,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z(A.depthTexture,0);const ee=i.get(A.depthTexture).__webglTexture,te=bt(A);if(A.depthTexture.format===Ms)Ye(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(A.depthTexture.format===bs)Ye(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xe(R){const A=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");qe(A.__webglFramebuffer,R)}else if(X){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]=r.createRenderbuffer(),we(A.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),we(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(R,A,X){const ee=i.get(R);A!==void 0&&ae(ee.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),X!==void 0&&xe(R)}function Rt(R){const A=R.texture,X=i.get(R),ee=i.get(A);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=A.version,a.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,Te=S(R)||o;if(te){X.__webglFramebuffer=[];for(let de=0;de<6;de++)X.__webglFramebuffer[de]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),ce)if(n.drawBuffers){const de=R.texture;for(let Y=0,me=de.length;Y<me;Y++){const ye=i.get(de[Y]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ye(R)===!1){const de=ce?A:[A];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Y=0;Y<de.length;Y++){const me=de[Y];X.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Y]);const ye=s.convert(me.format,me.colorSpace),be=s.convert(me.type),ue=C(me.internalFormat,ye,be,me.colorSpace,R.isXRRenderTarget===!0),ge=bt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,X.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),we(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),le(r.TEXTURE_CUBE_MAP,A,Te);for(let de=0;de<6;de++)ae(X.__webglFramebuffer[de],R,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de);M(A,Te)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const de=R.texture;for(let Y=0,me=de.length;Y<me;Y++){const ye=de[Y],be=i.get(ye);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),le(r.TEXTURE_2D,ye,Te),ae(X.__webglFramebuffer,R,ye,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D),M(ye,Te)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?de=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ee.__webglTexture),le(de,A,Te),ae(X.__webglFramebuffer,R,A,r.COLOR_ATTACHMENT0,de),M(A,Te)&&T(de),t.unbindTexture()}R.depthBuffer&&xe(R)}function Bt(R){const A=S(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,te=X.length;ee<te;ee++){const ce=X[ee];if(M(ce,A)){const Te=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=i.get(ce).__webglTexture;t.bindTexture(Te,de),T(Te),t.unbindTexture()}}}function Ct(R){if(o&&R.samples>0&&Ye(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ee=R.height;let te=r.COLOR_BUFFER_BIT;const ce=[],Te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=i.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let me=0;me<A.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<A.length;me++){ce.push(r.COLOR_ATTACHMENT0+me),R.depthBuffer&&ce.push(Te);const ye=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ye===!1&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),Y&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[me]),ye===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Te]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Te])),Y){const be=i.get(A[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,X,ee,0,0,X,ee,te,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let me=0;me<A.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const ye=i.get(A[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function bt(R){return Math.min(u,R.samples)}function Ye(R){const A=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function dt(R){const A=a.render.frame;m.get(R)!==A&&(m.set(R,A),R.update())}function ii(R,A){const X=R.colorSpace,ee=R.format,te=R.type;return R.isCompressedTexture===!0||R.format===Yc||X!==Wi&&X!==ws&&(X===Le?o===!1?e.has("EXT_sRGB")===!0&&ee===Qt?(R.format=Yc,R.minFilter=mi,R.generateMipmaps=!1):A=op.sRGBToLinear(A):(ee!==Qt||te!==xs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Be,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ye}function uS(r,e,t){const i=t.isWebGL2;function n(s,a=ws){let o;if(s===xs)return r.UNSIGNED_BYTE;if(s===Dx)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fx)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Px)return r.BYTE;if(s===Lx)return r.SHORT;if(s===Yd)return r.UNSIGNED_SHORT;if(s===Ix)return r.INT;if(s===ys)return r.UNSIGNED_INT;if(s===_s)return r.FLOAT;if(s===ya)return i?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ux)return r.ALPHA;if(s===Qt)return r.RGBA;if(s===Nx)return r.LUMINANCE;if(s===Bx)return r.LUMINANCE_ALPHA;if(s===Ms)return r.DEPTH_COMPONENT;if(s===bs)return r.DEPTH_STENCIL;if(s===Yc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zx)return r.RED;if(s===Ox)return r.RED_INTEGER;if(s===kx)return r.RG;if(s===Vx)return r.RG_INTEGER;if(s===Hx)return r.RGBA_INTEGER;if(s===Vc||s===Hc||s===Gc||s===Wc)if(a===Le)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kd||s===Zd||s===Jd||s===Qd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Kd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ef||s===tf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ef)return a===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nf||s===sf||s===rf||s===af||s===of||s===lf||s===cf||s===hf||s===uf||s===df||s===ff||s===pf||s===mf||s===gf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===af)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===of)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===df)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ff)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gf)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Xc)return a===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Wx||s===xf||s===yf||s===_f)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Xc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_f)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vs?i?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class dS extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fS={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fS)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zp extends ei{constructor(e,t,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:Ms,h!==Ms&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ms&&(i=ys),i===void 0&&h===bs&&(i=vs),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}class pS extends Wn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=t.getContextAttributes();let g=null,p=null;const _=[],y=[],S=new Set,v=new Map,M=new hi;M.layers.enable(1),M.viewport=new ot;const T=new hi;T.layers.enable(2),T.viewport=new ot;const C=[M,T],b=new dS;b.layers.enable(1),b.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=_[G];return J===void 0&&(J=new Lh,_[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=_[G];return J===void 0&&(J=new Lh,_[G]=J),J.getGripSpace()},this.getHand=function(G){let J=_[G];return J===void 0&&(J=new Lh,_[G]=J),J.getHandSpace()};function U(G){const J=y.indexOf(G.inputSource);if(J===-1)return;const ie=_[J];ie!==void 0&&(ie.update(G.inputSource,G.frame,c||a),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function P(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",P),n.removeEventListener("inputsourceschange",N);for(let G=0;G<_.length;G++){const J=y[G];J!==null&&(y[G]=null,_[G].disconnect(J))}w=null,F=null,e.setRenderTarget(g),f=null,d=null,u=null,n=null,p=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",P),n.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:f}),p=new An(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:xs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ie=null,le=null;x.depth&&(le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=x.stencil?bs:Ms,ie=x.stencil?vs:ys);const B={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(B),n.updateRenderState({layers:[d]}),p=new An(d.textureWidth,d.textureHeight,{format:Qt,type:xs,depthTexture:new zp(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ie=e.properties.get(p);Ie.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function N(G){for(let J=0;J<G.removed.length;J++){const ie=G.removed[J],le=y.indexOf(ie);le>=0&&(y[le]=null,_[le].disconnect(ie))}for(let J=0;J<G.added.length;J++){const ie=G.added[J];let le=y.indexOf(ie);if(le===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=y.length){y.push(ie),le=Ie;break}else if(y[Ie]===null){y[Ie]=ie,le=Ie;break}if(le===-1)break}const B=_[le];B&&B.connect(ie)}}const z=new L,q=new L;function V(G,J,ie){z.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ie.matrixWorld);const le=z.distanceTo(q),B=J.projectionMatrix.elements,Ie=ie.projectionMatrix.elements,Re=B[14]/(B[10]-1),ae=B[14]/(B[10]+1),we=(B[9]+1)/B[5],qe=(B[9]-1)/B[5],xe=(B[8]-1)/B[0],Be=(Ie[8]+1)/Ie[0],Rt=Re*xe,Bt=Re*Be,Ct=le/(-xe+Be),bt=Ct*-xe;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(bt),G.translateZ(Ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ye=Re+Ct,dt=ae+Ct,ii=Rt-bt,R=Bt+(le-bt),A=we*ae/dt*Ye,X=qe*ae/dt*Ye;G.projectionMatrix.makePerspective(ii,R,A,X,Ye,dt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;b.near=T.near=M.near=G.near,b.far=T.far=M.far=G.far,(w!==b.near||F!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,F=b.far);const J=G.parent,ie=b.cameras;H(b,J);for(let le=0;le<ie.length;le++)H(ie[le],J);ie.length===2?V(b,M,T):b.projectionMatrix.copy(M.projectionMatrix),W(G,b,J)};function W(G,J,ie){ie===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const le=G.children;for(let B=0,Ie=le.length;B<Ie;B++)le[B].updateMatrixWorld(!0);G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ka*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.getPlanes=function(){return S};let Z=null;function oe(G,J){if(h=J.getViewerPose(c||a),m=J,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let le=!1;ie.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let B=0;B<ie.length;B++){const Ie=ie[B];let Re=null;if(f!==null)Re=f.getViewport(Ie);else{const we=u.getViewSubImage(d,Ie);Re=we.viewport,B===0&&(e.setRenderTargetTextures(p,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let ae=C[B];ae===void 0&&(ae=new hi,ae.layers.enable(B),ae.viewport=new ot,C[B]=ae),ae.matrix.fromArray(Ie.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ie.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),B===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(ae)}}for(let ie=0;ie<_.length;ie++){const le=y[ie],B=_[ie];le!==null&&B!==void 0&&B.update(le,J,c||a)}if(Z&&Z(G,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ie=null;for(const le of S)J.detectedPlanes.has(le)||(ie===null&&(ie=[]),ie.push(le));if(ie!==null)for(const le of ie)S.delete(le),v.delete(le),i.dispatchEvent({type:"planeremoved",data:le});for(const le of J.detectedPlanes)if(!S.has(le))S.add(le),v.set(le,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:le});else{const B=v.get(le);le.lastChangedTime>B&&(v.set(le,le.lastChangedTime),i.dispatchEvent({type:"planechanged",data:le}))}}m=null}const re=new hp;re.setAnimationLoop(oe),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function mS(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,up(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,_,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function gS(r,e,t,i){let n={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const S=y.program;i.uniformBlockBinding(_,S)}function c(_,y){let S=n[_.id];S===void 0&&(m(_),S=h(_),n[_.id]=S,_.addEventListener("dispose",g));const v=y.program;i.updateUBOMapping(_,v);const M=e.render.frame;s[_.id]!==M&&(d(_),s[_.id]=M)}function h(_){const y=u();_.__bindingPointIndex=y;const S=r.createBuffer(),v=_.__size,M=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=n[_.id],S=_.uniforms,v=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,T=S.length;M<T;M++){const C=S[M];if(f(C,M,v)===!0){const b=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let U=0;U<w.length;U++){const P=w[U],N=x(P);typeof P=="number"?(C.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,b+F,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=P.elements[0],C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=P.elements[0],C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=P.elements[0]):(P.toArray(C.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,y,S){const v=_.value;if(S[y]===void 0){if(typeof v=="number")S[y]=v;else{const M=Array.isArray(v)?v:[v],T=[];for(let C=0;C<M.length;C++)T.push(M[C].clone());S[y]=T}return!0}else if(typeof v=="number"){if(S[y]!==v)return S[y]=v,!0}else{const M=Array.isArray(S[y])?S[y]:[S[y]],T=Array.isArray(v)?v:[v];for(let C=0;C<M.length;C++){const b=M[C];if(b.equals(T[C])===!1)return b.copy(T[C]),!0}}return!1}function m(_){const y=_.uniforms;let S=0;const v=16;let M=0;for(let T=0,C=y.length;T<C;T++){const b=y[T],w={boundary:0,storage:0},F=Array.isArray(b.value)?b.value:[b.value];for(let U=0,P=F.length;U<P;U++){const N=F[U],z=x(N);w.boundary+=z.boundary,w.storage+=z.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,T>0){M=S%v;const U=v-M;M!==0&&U-w.boundary<0&&(S+=v-M,b.__offset=S)}S+=w.storage}return M=S%v,M>0&&(S+=v-M),_.__size=S,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(const _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}function xS(){const r=ba("canvas");return r.style.display="block",r}class yS{constructor(e={}){const{canvas:t=xS(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=null,m=null;const x=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const p=this;let _=!1,y=0,S=0,v=null,M=-1,T=null;const C=new ot,b=new ot;let w=null,F=t.width,U=t.height,P=1,N=null,z=null;const q=new ot(0,0,F,U),V=new ot(0,0,F,U);let H=!1;const W=new mh;let Z=!1,oe=!1,re=null;const G=new Ke,J=new L,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return v===null?P:1}let B=i;function Ie(E,k){for(let j=0;j<E.length;j++){const O=E[j],K=t.getContext(O,k);if(K!==null)return K}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nx}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),B=Ie(k,E),B===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,ae,we,qe,xe,Be,Rt,Bt,Ct,bt,Ye,dt,ii,R,A,X,ee,te,ce,Te,de,Y,me,ye;function be(){Re=new RM(B),ae=new _M(B,Re,e),Re.init(ae),Y=new uS(B,Re,ae),we=new cS(B,Re,ae),qe=new LM(B),xe=new Yb,Be=new hS(B,Re,we,xe,ae,Y,qe),Rt=new SM(p),Bt=new EM(p),Ct=new g_(B,ae),me=new xM(B,Re,Ct,ae),bt=new CM(B,Ct,qe,me),Ye=new UM(B,bt,Ct,qe),ce=new FM(B,ae,Be),X=new vM(xe),dt=new qb(p,Rt,Bt,Re,ae,me,X),ii=new mS(p,xe),R=new Zb,A=new nS(Re,ae),te=new gM(p,Rt,Bt,we,Ye,d,l),ee=new lS(p,Ye,ae),ye=new gS(B,qe,ae,we),Te=new yM(B,Re,qe,ae),de=new PM(B,Re,qe,ae),qe.programs=dt.programs,p.capabilities=ae,p.extensions=Re,p.properties=xe,p.renderLists=R,p.shadowMap=ee,p.state=we,p.info=qe}be();const ue=new pS(p,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(E){E!==void 0&&(P=E,this.setSize(F,U,!1))},this.getSize=function(E){return E.set(F,U)},this.setSize=function(E,k,j=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,U=k,t.width=Math.floor(E*P),t.height=Math.floor(k*P),j===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(F*P,U*P).floor()},this.setDrawingBufferSize=function(E,k,j){F=E,U=k,P=j,t.width=Math.floor(E*j),t.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,k,j,O){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,k,j,O),we.viewport(C.copy(q).multiplyScalar(P).floor())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,k,j,O){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,k,j,O),we.scissor(b.copy(V).multiplyScalar(P).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){we.setScissorTest(H=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,k=!0,j=!0){let O=0;E&&(O|=B.COLOR_BUFFER_BIT),k&&(O|=B.DEPTH_BUFFER_BIT),j&&(O|=B.STENCIL_BUFFER_BIT),B.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),R.dispose(),A.dispose(),xe.dispose(),Rt.dispose(),Bt.dispose(),Ye.dispose(),me.dispose(),ye.dispose(),dt.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fe),ue.removeEventListener("sessionend",it),re&&(re.dispose(),re=null),nt.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const E=qe.autoReset,k=ee.enabled,j=ee.autoUpdate,O=ee.needsUpdate,K=ee.type;be(),qe.autoReset=E,ee.enabled=k,ee.autoUpdate=j,ee.needsUpdate=O,ee.type=K}function Qe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const k=E.target;k.removeEventListener("dispose",pt),D(k)}function D(E){$(E),xe.remove(E)}function $(E){const k=xe.get(E).programs;k!==void 0&&(k.forEach(function(j){dt.releaseProgram(j)}),E.isShaderMaterial&&dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,O,K,_e){k===null&&(k=ie);const Se=K.isMesh&&K.matrixWorld.determinant()<0,Ce=P1(E,k,j,O,K);we.setMaterial(O,Se);let Fe=j.index,Ue=1;O.wireframe===!0&&(Fe=bt.getWireframeAttribute(j),Ue=2);const Ne=j.drawRange,ze=j.attributes.position;let et=Ne.start*Ue,Kt=(Ne.start+Ne.count)*Ue;_e!==null&&(et=Math.max(et,_e.start*Ue),Kt=Math.min(Kt,(_e.start+_e.count)*Ue)),Fe!==null?(et=Math.max(et,0),Kt=Math.min(Kt,Fe.count)):ze!=null&&(et=Math.max(et,0),Kt=Math.min(Kt,ze.count));const Bi=Kt-et;if(Bi<0||Bi===1/0)return;me.setup(K,O,Ce,j,Fe);let Bs,yt=Te;if(Fe!==null&&(Bs=Ct.get(Fe),yt=de,yt.setIndex(Bs)),K.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*le()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(K.isLine){let Ge=O.linewidth;Ge===void 0&&(Ge=1),we.setLineWidth(Ge*le()),K.isLineSegments?yt.setMode(B.LINES):K.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else K.isPoints?yt.setMode(B.POINTS):K.isSprite&&yt.setMode(B.TRIANGLES);if(K.isInstancedMesh)yt.renderInstances(et,Bi,K.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bu=Math.min(j.instanceCount,Ge);yt.renderInstances(et,Bi,bu)}else yt.render(et,Bi)},this.compile=function(E,k){function j(O,K,_e){O.transparent===!0&&O.side===Gi&&O.forceSinglePass===!1?(O.side=Jt,O.needsUpdate=!0,Ul(O,K,_e),O.side=Ei,O.needsUpdate=!0,Ul(O,K,_e),O.side=Gi):Ul(O,K,_e)}m=A.get(E),m.init(),g.push(m),E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(p.useLegacyLights),E.traverse(function(O){const K=O.material;if(K)if(Array.isArray(K))for(let _e=0;_e<K.length;_e++){const Se=K[_e];j(Se,E,O)}else j(K,E,O)}),g.pop(),m=null};let Q=null;function he(E){Q&&Q(E)}function fe(){nt.stop()}function it(){nt.start()}const nt=new hp;nt.setAnimationLoop(he),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(E){Q=E,ue.setAnimationLoop(E),E===null?nt.stop():nt.start()},ue.addEventListener("sessionstart",fe),ue.addEventListener("sessionend",it),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,v),m=A.get(E,g.length),m.init(),g.push(m),G.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(G),oe=this.localClippingEnabled,Z=X.init(this.clippingPlanes,oe),f=R.get(E,x.length),f.init(),x.push(f),Xt(E,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(N,z),Z===!0&&X.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,E,k),Z===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,E),m.setupLights(p.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let K=0,_e=O.length;K<_e;K++){const Se=O[K];os(f,E,Se,Se.viewport)}}else os(f,E,k);v!==null&&(Be.updateMultisampleRenderTarget(v),Be.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(p,E,k),me.resetDefaultState(),M=-1,T=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,x.pop(),x.length>0?f=x[x.length-1]:f=null};function Xt(E,k,j,O){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){O&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Se=Ye.update(E),Ce=E.material;Ce.visible&&f.push(E,Se,Ce,j,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==qe.render.frame&&(E.skeleton.update(),E.skeleton.frame=qe.render.frame);const Se=Ye.update(E),Ce=E.material;if(O&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),J.copy(Se.boundingSphere.center).applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(Ce)){const Fe=Se.groups;for(let Ue=0,Ne=Fe.length;Ue<Ne;Ue++){const ze=Fe[Ue],et=Ce[ze.materialIndex];et&&et.visible&&f.push(E,Se,et,j,J.z,ze)}}else Ce.visible&&f.push(E,Se,Ce,j,J.z,null)}}const _e=E.children;for(let Se=0,Ce=_e.length;Se<Ce;Se++)Xt(_e[Se],k,j,O)}function os(E,k,j,O){const K=E.opaque,_e=E.transmissive,Se=E.transparent;m.setupLightsView(j),Z===!0&&X.setGlobalState(p.clippingPlanes,j),_e.length>0&&mt(K,_e,k,j),O&&we.viewport(C.copy(O)),K.length>0&&Mi(K,k,j),_e.length>0&&Mi(_e,k,j),Se.length>0&&Mi(Se,k,j),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function mt(E,k,j,O){if(re===null){const Ce=ae.isWebGL2;re=new An(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?ya:xs,minFilter:xa,samples:Ce&&o===!0?4:0})}const K=p.getRenderTarget();p.setRenderTarget(re),p.clear();const _e=p.toneMapping;p.toneMapping=mn,Mi(E,j,O),Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re);let Se=!1;for(let Ce=0,Fe=k.length;Ce<Fe;Ce++){const Ue=k[Ce],Ne=Ue.object,ze=Ue.geometry,et=Ue.material,Kt=Ue.group;if(et.side===Gi&&Ne.layers.test(O.layers)){const Bi=et.side;et.side=Jt,et.needsUpdate=!0,nn(Ne,j,O,ze,et,Kt),et.side=Bi,et.needsUpdate=!0,Se=!0}}Se===!0&&(Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re)),p.setRenderTarget(K),p.toneMapping=_e}function Mi(E,k,j){const O=k.isScene===!0?k.overrideMaterial:null;for(let K=0,_e=E.length;K<_e;K++){const Se=E[K],Ce=Se.object,Fe=Se.geometry,Ue=O===null?Se.material:O,Ne=Se.group;Ce.layers.test(j.layers)&&nn(Ce,k,j,Fe,Ue,Ne)}}function nn(E,k,j,O,K,_e){E.onBeforeRender(p,k,j,O,K,_e),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(p,k,j,O,E,_e),K.transparent===!0&&K.side===Gi&&K.forceSinglePass===!1?(K.side=Jt,K.needsUpdate=!0,p.renderBufferDirect(j,k,O,K,E,_e),K.side=Ei,K.needsUpdate=!0,p.renderBufferDirect(j,k,O,K,E,_e),K.side=Gi):p.renderBufferDirect(j,k,O,K,E,_e),E.onAfterRender(p,k,j,O,K,_e)}function Ul(E,k,j){k.isScene!==!0&&(k=ie);const O=xe.get(E),K=m.state.lights,_e=m.state.shadowsArray,Se=K.state.version,Ce=dt.getParameters(E,K.state,_e,k,j),Fe=dt.getProgramCacheKey(Ce);let Ue=O.programs;O.environment=E.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(E.isMeshStandardMaterial?Bt:Rt).get(E.envMap||O.environment),Ue===void 0&&(E.addEventListener("dispose",pt),Ue=new Map,O.programs=Ue);let Ne=Ue.get(Fe);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===Se)return tg(E,Ce),Ne}else Ce.uniforms=dt.getUniforms(E),E.onBuild(j,Ce,p),E.onBeforeCompile(Ce,p),Ne=dt.acquireProgram(Ce,Fe),Ue.set(Fe,Ne),O.uniforms=Ce.uniforms;const ze=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=X.uniform),tg(E,Ce),O.needsLights=I1(E),O.lightsStateVersion=Se,O.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const et=Ne.getUniforms(),Kt=il.seqWithValue(et.seq,ze);return O.currentProgram=Ne,O.uniformsList=Kt,Ne}function tg(E,k){const j=xe.get(E);j.outputColorSpace=k.outputColorSpace,j.instancing=k.instancing,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function P1(E,k,j,O,K){k.isScene!==!0&&(k=ie),Be.resetTextureUnits();const _e=k.fog,Se=O.isMeshStandardMaterial?k.environment:null,Ce=v===null?p.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Wi,Fe=(O.isMeshStandardMaterial?Bt:Rt).get(O.envMap||Se),Ue=O.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!O.normalMap&&!!j.attributes.tangent,ze=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,Kt=!!j.morphAttributes.color,Bi=O.toneMapped?p.toneMapping:mn,Bs=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=Bs!==void 0?Bs.length:0,Ge=xe.get(O),bu=m.state.lights;if(Z===!0&&(oe===!0||E!==T)){const di=E===T&&O.id===M;X.setState(O,E,di)}let Pt=!1;O.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bu.state.version||Ge.outputColorSpace!==Ce||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Fe||O.fog===!0&&Ge.fog!==_e||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==X.numPlanes||Ge.numIntersection!==X.numIntersection)||Ge.vertexAlphas!==Ue||Ge.vertexTangents!==Ne||Ge.morphTargets!==ze||Ge.morphNormals!==et||Ge.morphColors!==Kt||Ge.toneMapping!==Bi||ae.isWebGL2===!0&&Ge.morphTargetsCount!==yt)&&(Pt=!0):(Pt=!0,Ge.__version=O.version);let zs=Ge.currentProgram;Pt===!0&&(zs=Ul(O,k,K));let ig=!1,qa=!1,Su=!1;const Zt=zs.getUniforms(),Os=Ge.uniforms;if(we.useProgram(zs.program)&&(ig=!0,qa=!0,Su=!0),O.id!==M&&(M=O.id,qa=!0),ig||T!==E){if(Zt.setValue(B,"projectionMatrix",E.projectionMatrix),ae.logarithmicDepthBuffer&&Zt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,qa=!0,Su=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const di=Zt.map.cameraPosition;di!==void 0&&di.setValue(B,J.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Zt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||K.isSkinnedMesh)&&Zt.setValue(B,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){Zt.setOptional(B,K,"bindMatrix"),Zt.setOptional(B,K,"bindMatrixInverse");const di=K.skeleton;di&&(ae.floatVertexTextures?(di.boneTexture===null&&di.computeBoneTexture(),Zt.setValue(B,"boneTexture",di.boneTexture,Be),Zt.setValue(B,"boneTextureSize",di.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wu=j.morphAttributes;if((wu.position!==void 0||wu.normal!==void 0||wu.color!==void 0&&ae.isWebGL2===!0)&&ce.update(K,j,zs),(qa||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Zt.setValue(B,"receiveShadow",K.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Os.envMap.value=Fe,Os.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),qa&&(Zt.setValue(B,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&L1(Os,Su),_e&&O.fog===!0&&ii.refreshFogUniforms(Os,_e),ii.refreshMaterialUniforms(Os,O,P,U,re),il.upload(B,Ge.uniformsList,Os,Be)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(il.upload(B,Ge.uniformsList,Os,Be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Zt.setValue(B,"center",K.center),Zt.setValue(B,"modelViewMatrix",K.modelViewMatrix),Zt.setValue(B,"normalMatrix",K.normalMatrix),Zt.setValue(B,"modelMatrix",K.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const di=O.uniformsGroups;for(let Tu=0,D1=di.length;Tu<D1;Tu++)if(ae.isWebGL2){const ng=di[Tu];ye.update(ng,zs),ye.bind(ng,zs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zs}function L1(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function I1(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,k,j){xe.get(E.texture).__webglTexture=k,xe.get(E.depthTexture).__webglTexture=j;const O=xe.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=j===void 0,O.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const j=xe.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){v=E,y=k,S=j;let O=!0,K=null,_e=!1,Se=!1;if(E){const Fe=xe.get(E);Fe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(B.FRAMEBUFFER,null),O=!1):Fe.__webglFramebuffer===void 0?Be.setupRenderTarget(E):Fe.__hasExternalTextures&&Be.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Se=!0);const Ne=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Ne[k],_e=!0):ae.isWebGL2&&E.samples>0&&Be.useMultisampledRTT(E)===!1?K=xe.get(E).__webglMultisampledFramebuffer:K=Ne,C.copy(E.viewport),b.copy(E.scissor),w=E.scissorTest}else C.copy(q).multiplyScalar(P).floor(),b.copy(V).multiplyScalar(P).floor(),w=H;if(we.bindFramebuffer(B.FRAMEBUFFER,K)&&ae.drawBuffers&&O&&we.drawBuffers(E,K),we.viewport(C),we.scissor(b),we.setScissorTest(w),_e){const Fe=xe.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,j)}else if(Se){const Fe=xe.get(E.texture),Ue=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,Ue)}M=-1},this.readRenderTargetPixels=function(E,k,j,O,K,_e,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){we.bindFramebuffer(B.FRAMEBUFFER,Ce);try{const Fe=E.texture,Ue=Fe.format,Ne=Fe.type;if(Ue!==Qt&&Y.convert(Ue)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ne===ya&&(Re.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ne!==xs&&Y.convert(Ne)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===_s&&(ae.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-O&&j>=0&&j<=E.height-K&&B.readPixels(k,j,O,K,Y.convert(Ue),Y.convert(Ne),_e)}finally{const Fe=v!==null?xe.get(v).__webglFramebuffer:null;we.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(E,k,j=0){const O=Math.pow(2,-j),K=Math.floor(k.image.width*O),_e=Math.floor(k.image.height*O);Be.setTexture2D(k,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,E.x,E.y,K,_e),we.unbindTexture()},this.copyTextureToTexture=function(E,k,j,O=0){const K=k.image.width,_e=k.image.height,Se=Y.convert(j.format),Ce=Y.convert(j.type);Be.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,E.x,E.y,K,_e,Se,Ce,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Se,k.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,O,E.x,E.y,Se,Ce,k.image),O===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j,O,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Fe=Y.convert(O.format),Ue=Y.convert(O.type);let Ne;if(O.isData3DTexture)Be.setTexture3D(O,0),Ne=B.TEXTURE_3D;else if(O.isDataArrayTexture)Be.setTexture2DArray(O,0),Ne=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const ze=B.getParameter(B.UNPACK_ROW_LENGTH),et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kt=B.getParameter(B.UNPACK_SKIP_PIXELS),Bi=B.getParameter(B.UNPACK_SKIP_ROWS),Bs=B.getParameter(B.UNPACK_SKIP_IMAGES),yt=j.isCompressedTexture?j.mipmaps[0]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,yt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Ne,K,k.x,k.y,k.z,_e,Se,Ce,Fe,Ue,yt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ne,K,k.x,k.y,k.z,_e,Se,Ce,Fe,yt.data)):B.texSubImage3D(Ne,K,k.x,k.y,k.z,_e,Se,Ce,Fe,Ue,yt),B.pixelStorei(B.UNPACK_ROW_LENGTH,ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Bs),K===0&&O.generateMipmaps&&B.generateMipmap(Ne),we.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){y=0,S=0,v=null,we.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?Ss:vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ss?Le:Wi}}class _S extends Wf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Op{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kp(){return(typeof performance>"u"?Date:performance).now()}class vS extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vp extends Xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}var At=(r=>(r[r.BLACK=0]="BLACK",r[r.PORTAL=2236962]="PORTAL",r[r.BLUE=2980095]="BLUE",r[r.FOG=4737096]="FOG",r[r.RAIN=4934475]="RAIN",r[r.RED=9045767]="RED",r[r.MOON=11065767]="MOON",r[r.FIRE=16496449]="FIRE",r[r.WHITE=16777215]="WHITE",r))(At||{}),qi;(r=>{class e extends Vp{constructor(i={}){super(i),this.setValues(i)}async updateDefaultFragmentShader(i){const n=await $e.Loader.loadShader("ground/pars.frag"),s=await $e.Loader.loadShader("ground/main.frag");i.fragmentShader=`${n}
      ${i.fragmentShader.replace("#include <output_fragment>",`
        ${s}`)}`}async updateDefaultVertexShader(i){const n=await $e.Loader.loadShader("ground/pars.vert"),s=await $e.Loader.loadShader("ground/main.vert");i.vertexShader=`${n}
      ${i.vertexShader.replace("void main() {",`void main() {
          ${s}`)}`}onBeforeCompile(i){this.updateDefaultFragmentShader(i),this.updateDefaultVertexShader(i),this.needsUpdate=!0}}r.Ground=e,r.DynamicCollider=new Ar({color:At.RED,wireframe:!0,visible:!1,opacity:.33}),r.StaticCollider=new Ar({color:At.RAIN,transparent:!0,depthWrite:!1,visible:!1,opacity:.5}),r.Transparent=new Ar({color:At.BLACK,transparent:!0,depthWrite:!1,visible:!1,opacity:0}),r.HitBox=new Ar({transparent:!0,depthWrite:!1,color:At.RED,visible:!1,opacity:.75})})(qi||(qi={}));const Ia=new I;function vi(r,e,t,i,n,s){const a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;Ia.copy(e),Ia[i]=0,Ia.normalize();const c=.5*a/(a+o),h=1-Ia.angleTo(r)/l;return Math.sign(Ia[t])===1?h*c:o/(a+o)+c+c*(1-h)}class Hp extends p0{constructor(e=1,t=1,i=1,n=2,s=.1){if(n=n*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,n,n,n),n===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new I,x=.5/n;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*s,h[g+1]=c.y*Math.sign(o.y)+l.y*s,h[g+2]=c.z*Math.sign(o.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=vi(m,l,"z","y",s,i),d[p+1]=1-vi(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[p+0]=1-vi(m,l,"z","y",s,i),d[p+1]=1-vi(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[p+0]=1-vi(m,l,"x","z",s,e),d[p+1]=vi(m,l,"z","x",s,i);break;case 3:m.set(0,-1,0),d[p+0]=1-vi(m,l,"x","z",s,e),d[p+1]=1-vi(m,l,"z","x",s,i);break;case 4:m.set(0,0,1),d[p+0]=1-vi(m,l,"x","y",s,e),d[p+1]=1-vi(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[p+0]=vi(m,l,"x","y",s,e),d[p+1]=1-vi(m,l,"y","x",s,t);break}}}function MS(r){const e=new Map,t=new Map,i=r.clone();return Gp(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,a=e.get(n),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Gp(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Gp(r.children[i],e.children[i],t)}class Ih extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bS{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:dr,endingEnd:dr};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jx:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case jc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===$x;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===gi){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));i:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break i}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=fr,n.endingEnd=fr):(e?n.endingStart=this.zeroSlopeAtStart?fr:dr:n.endingStart=Co,t?n.endingEnd=this.zeroSlopeAtEnd?fr:dr:n.endingEnd=Co)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}class nl{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wp extends nl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}const Dh="\\[\\]\\.:\\/",SS=new RegExp("["+Dh+"]","g"),Fh="[^"+Dh+"]",wS="[^"+Dh.replace("\\.","")+"]",TS=/((?:WC+[\/:])*)/.source.replace("WC",Fh),AS=/(WCOD+)?/.source.replace("WCOD",wS),ES=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),RS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),CS=new RegExp("^"+TS+AS+ES+RS+"$"),PS=["material","materials","bones","map"];class LS{constructor(e,t,i){const n=i||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class je{constructor(e,t,i){this.path=t,this.parsedPath=i||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,i):new je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SS,"")}static parseTrackName(e){const t=CS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);PS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=LS,je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray],je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class IS{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){fi.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;fi.multiplyQuaternionsFlat(e,a,e,t,e,i),fi.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}function ts(r,e,t){return Xp(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function sl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Xp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function DS(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function $p(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function jp(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}class FS extends nl{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dr,endingEnd:dr}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fr:s=e,o=2*t-i;break;case Co:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fr:a=e,l=2*i-t;break;case Co:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,S=f*g-f*x;for(let v=0;v!==o;++v)s[v]=p*a[h+v]+_*a[c+v]+y*a[l+v]+S*a[u+v];return s}}class US extends nl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sl(t,this.TimeBufferType),this.values=sl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sl(e.times,Array),values:sl(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new US(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new FS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ts(i,s,a),this.values=ts(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Xp(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ts(this.times),t=ts(this.values),i=this.getValueSize(),n=this.getInterpolation()===$c,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ts(e,0,a),this.values=ts(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=ts(this.times,0),t=ts(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Yi.prototype.TimeBufferType=Float32Array,Yi.prototype.ValueBufferType=Float32Array,Yi.prototype.DefaultInterpolation=Ro;class Gr extends Yi{}Gr.prototype.ValueTypeName="bool",Gr.prototype.ValueBufferType=Array,Gr.prototype.DefaultInterpolation=Eo,Gr.prototype.InterpolantFactoryMethodLinear=void 0,Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class qp extends Yi{}qp.prototype.ValueTypeName="color";class rl extends Yi{}rl.prototype.ValueTypeName="number";class NS extends nl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)fi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Da extends Yi{InterpolantFactoryMethodLinear(e){return new NS(this.times,this.values,this.getValueSize(),e)}}Da.prototype.ValueTypeName="quaternion",Da.prototype.DefaultInterpolation=Ro,Da.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends Yi{}Wr.prototype.ValueTypeName="string",Wr.prototype.ValueBufferType=Array,Wr.prototype.DefaultInterpolation=Eo,Wr.prototype.InterpolantFactoryMethodLinear=void 0,Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends Yi{}al.prototype.ValueTypeName="vector";class Yp{constructor(e,t=-1,i,n=jc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ls(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(zS(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Yi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=DS(l);l=$p(l,1,h),c=$p(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new rl(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];jp(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}n.push(new rl(".morphTargetInfluence["+x+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(al,f+".position",d,"pos",n),i(Da,f+".quaternion",d,"rot",n),i(al,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function BS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rl;case"vector":case"vector2":case"vector3":case"vector4":return al;case"color":return qp;case"quaternion":return Da;case"bool":case"boolean":return Gr;case"string":return Wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=BS(r.type);if(r.times===void 0){const t=[],i=[];jp(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const OS=new Float32Array(1);class kS extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;m=new IS(je.create(i,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Wp(new Float32Array(2),new Float32Array(2),1,OS),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let a=typeof e=="string"?Yp.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=jc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new bS(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?Yp.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Kp=new L,ol=new L;class Zp{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Kp.subVectors(e,this.start),ol.subVectors(this.end,this.start);const i=ol.dot(ol);let s=ol.dot(Kp)/i;return t&&(s=Ot(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Jp=0,VS=1,HS=2,Qp=2,Uh=1.25,em=1,ll=6*4+4+4,Nh=65535,GS=Math.pow(2,-24);class cl{constructor(){}}function Ki(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function tm(r){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=r[i+3]-r[i];n>t&&(t=n,e=i)}return e}function im(r,e){e.set(r)}function nm(r,e,t){let i,n;for(let s=0;s<3;s++){const a=s+3;i=r[s],n=e[s],t[s]=i<n?i:n,i=r[a],n=e[a],t[a]=i>n?i:n}}function hl(r,e,t){for(let i=0;i<3;i++){const n=e[r+2*i],s=e[r+2*i+1],a=n-s,o=n+s;a<t[i]&&(t[i]=a),o>t[i+3]&&(t[i+3]=o)}}function Fa(r){const e=r[3]-r[0],t=r[4]-r[1],i=r[5]-r[2];return 2*(e*t+t*i+i*e)}function WS(r,e){if(!r.index){const t=r.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let n;t>65535?n=new Uint32Array(new i(4*t)):n=new Uint16Array(new i(2*t)),r.setIndex(new $t(n,1));for(let s=0;s<t;s++)n[s]=s}}function XS(r){if(!r.groups||!r.groups.length)return[{offset:0,count:r.index.count/3}];const e=[],t=new Set;for(const n of r.groups)t.add(n.start),t.add(n.start+n.count);const i=Array.from(t.values()).sort((n,s)=>n-s);for(let n=0;n<i.length-1;n++){const s=i[n],a=i[n+1];e.push({offset:s/3,count:(a-s)/3})}return e}function Bh(r,e,t,i,n=null){let s=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,m=-1/0,x=-1/0,g=-1/0;const p=n!==null;for(let _=e*6,y=(e+t)*6;_<y;_+=6){const S=r[_+0],v=r[_+1],M=S-v,T=S+v;M<s&&(s=M),T>l&&(l=T),p&&S<u&&(u=S),p&&S>m&&(m=S);const C=r[_+2],b=r[_+3],w=C-b,F=C+b;w<a&&(a=w),F>c&&(c=F),p&&C<d&&(d=C),p&&C>x&&(x=C);const U=r[_+4],P=r[_+5],N=U-P,z=U+P;N<o&&(o=N),z>h&&(h=z),p&&U<f&&(f=U),p&&U>g&&(g=U)}i[0]=s,i[1]=a,i[2]=o,i[3]=l,i[4]=c,i[5]=h,p&&(n[0]=u,n[1]=d,n[2]=f,n[3]=m,n[4]=x,n[5]=g)}function $S(r,e,t,i){let n=1/0,s=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=e*6,u=(e+t)*6;h<u;h+=6){const d=r[h+0];d<n&&(n=d),d>o&&(o=d);const f=r[h+2];f<s&&(s=f),f>l&&(l=f);const m=r[h+4];m<a&&(a=m),m>c&&(c=m)}i[0]=n,i[1]=s,i[2]=a,i[3]=o,i[4]=l,i[5]=c}function jS(r,e,t,i,n){let s=t,a=t+i-1;const o=n.pos,l=n.axis*2;for(;;){for(;s<=a&&e[s*6+l]<o;)s++;for(;s<=a&&e[a*6+l]>=o;)a--;if(s<a){for(let c=0;c<3;c++){let h=r[s*3+c];r[s*3+c]=r[a*3+c],r[a*3+c]=h;let u=e[s*6+c*2+0];e[s*6+c*2+0]=e[a*6+c*2+0],e[a*6+c*2+0]=u;let d=e[s*6+c*2+1];e[s*6+c*2+1]=e[a*6+c*2+1],e[a*6+c*2+1]=d}s++,a--}else return s}}const En=32,qS=(r,e)=>r.candidate-e.candidate,is=new Array(En).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ul=new Float32Array(6);function YS(r,e,t,i,n,s){let a=-1,o=0;if(s===Jp)a=tm(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(s===VS)a=tm(r),a!==-1&&(o=KS(t,i,n,a));else if(s===HS){const l=Fa(r);let c=Uh*n;const h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){const f=e[d],g=(e[d+3]-f)/En;if(n<En/4){const p=[...is];p.length=n;let _=0;for(let S=h;S<u;S+=6,_++){const v=p[_];v.candidate=t[S+2*d],v.count=0;const{bounds:M,leftCacheBounds:T,rightCacheBounds:C}=v;for(let b=0;b<3;b++)C[b]=1/0,C[b+3]=-1/0,T[b]=1/0,T[b+3]=-1/0,M[b]=1/0,M[b+3]=-1/0;hl(S,t,M)}p.sort(qS);let y=n;for(let S=0;S<y;S++){const v=p[S];for(;S+1<y&&p[S+1].candidate===v.candidate;)p.splice(S+1,1),y--}for(let S=h;S<u;S+=6){const v=t[S+2*d];for(let M=0;M<y;M++){const T=p[M];v>=T.candidate?hl(S,t,T.rightCacheBounds):(hl(S,t,T.leftCacheBounds),T.count++)}}for(let S=0;S<y;S++){const v=p[S],M=v.count,T=n-v.count,C=v.leftCacheBounds,b=v.rightCacheBounds;let w=0;M!==0&&(w=Fa(C)/l);let F=0;T!==0&&(F=Fa(b)/l);const U=em+Uh*(w*M+F*T);U<c&&(a=d,c=U,o=v.candidate)}}else{for(let y=0;y<En;y++){const S=is[y];S.count=0,S.candidate=f+g+y*g;const v=S.bounds;for(let M=0;M<3;M++)v[M]=1/0,v[M+3]=-1/0}for(let y=h;y<u;y+=6){let M=~~((t[y+2*d]-f)/g);M>=En&&(M=En-1);const T=is[M];T.count++,hl(y,t,T.bounds)}const p=is[En-1];im(p.bounds,p.rightCacheBounds);for(let y=En-2;y>=0;y--){const S=is[y],v=is[y+1];nm(S.bounds,v.rightCacheBounds,S.rightCacheBounds)}let _=0;for(let y=0;y<En-1;y++){const S=is[y],v=S.count,M=S.bounds,C=is[y+1].rightCacheBounds;v!==0&&(_===0?im(M,ul):nm(M,ul,ul)),_+=v;let b=0,w=0;_!==0&&(b=Fa(ul)/l);const F=n-_;F!==0&&(w=Fa(C)/l);const U=em+Uh*(b*_+w*F);U<c&&(a=d,c=U,o=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function KS(r,e,t,i){let n=0;for(let s=e,a=e+t;s<a;s++)n+=r[s*6+i*2];return n/t}function ZS(r,e){const t=r.attributes.position,i=r.index.array,n=i.length/3,s=new Float32Array(n*6),a=t.normalized,o=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const h=["getX","getY","getZ"];for(let u=0;u<n;u++){const d=u*3,f=u*6;let m,x,g;a?(m=i[d+0],x=i[d+1],g=i[d+2]):(m=i[d+0]*c+l,x=i[d+1]*c+l,g=i[d+2]*c+l);for(let p=0;p<3;p++){let _,y,S;a?(_=t[h[p]](m),y=t[h[p]](x),S=t[h[p]](g)):(_=o[m+p],y=o[x+p],S=o[g+p]);let v=_;y<v&&(v=y),S<v&&(v=S);let M=_;y>M&&(M=y),S>M&&(M=S);const T=(M-v)/2,C=p*2;s[f+C+0]=v+T,s[f+C+1]=T+(Math.abs(v)+T)*GS,v<e[p]&&(e[p]=v),M>e[p+3]&&(e[p+3]=M)}}return s}function JS(r,e){function t(p){d&&d(p/f)}function i(p,_,y,S=null,v=0){if(!m&&v>=l&&(m=!0,c&&(console.warn(`MeshBVH: Max depth of ${l} reached when generating BVH. Consider increasing maxDepth.`),console.warn(r))),y<=h||v>=l)return t(_+y),p.offset=_,p.count=y,p;const M=YS(p.boundingData,S,a,_,y,u);if(M.axis===-1)return t(_+y),p.offset=_,p.count=y,p;const T=jS(o,a,_,y,M);if(T===_||T===_+y)t(_+y),p.offset=_,p.count=y;else{p.splitAxis=M.axis;const C=new cl,b=_,w=T-_;p.left=C,C.boundingData=new Float32Array(6),Bh(a,b,w,C.boundingData,s),i(C,b,w,s,v+1);const F=new cl,U=T,P=y-w;p.right=F,F.boundingData=new Float32Array(6),Bh(a,U,P,F.boundingData,s),i(F,U,P,s,v+1)}return p}WS(r,e);const n=new Float32Array(6),s=new Float32Array(6),a=ZS(r,n),o=r.index.array,l=e.maxDepth,c=e.verbose,h=e.maxLeafTris,u=e.strategy,d=e.onProgress,f=r.index.count/3;let m=!1;const x=[],g=XS(r);if(g.length===1){const p=g[0],_=new cl;_.boundingData=n,$S(a,p.offset,p.count,s),i(_,p.offset,p.count,s),x.push(_)}else for(let p of g){const _=new cl;_.boundingData=new Float32Array(6),Bh(a,p.offset,p.count,_.boundingData,s),i(_,p.offset,p.count,s),x.push(_)}return x}function QS(r,e){const t=JS(r,e);let i,n,s;const a=[],o=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<t.length;h++){const u=t[h];let d=l(u);const f=new o(ll*d);i=new Float32Array(f),n=new Uint32Array(f),s=new Uint16Array(f),c(0,u),a.push(f)}return a;function l(h){return h.count?1:1+l(h.left)+l(h.right)}function c(h,u){const d=h/4,f=h/2,m=!!u.count,x=u.boundingData;for(let g=0;g<6;g++)i[d+g]=x[g];if(m){const g=u.offset,p=u.count;return n[d+6]=g,s[f+14]=p,s[f+15]=Nh,h+ll}else{const g=u.left,p=u.right,_=u.splitAxis;let y;if(y=c(h+ll,g),y/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return n[d+6]=y/4,y=c(y,p),n[d+7]=_,y}}}class Rn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let s=0,a=e.length;s<a;s++){const l=e[s][t];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let s=0,a=t.length;s<a;s++){const o=t[s],l=e.dot(o);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}Rn.prototype.setFromBox=function(){const r=new I;return function(t,i){const n=i.min,s=i.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=n.x*l+s.x*(1-l),r.y=n.y*c+s.y*(1-c),r.z=n.z*h+s.z*(1-h);const u=t.dot(r);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}}();const ew=function(){const r=new I,e=new I,t=new I;return function(n,s,a){const o=n.start,l=r,c=s.start,h=e;t.subVectors(o,c),r.subVectors(n.end,n.start),e.subVectors(s.end,s.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),m=t.dot(l),g=l.dot(l)*f-d*d;let p,_;g!==0?p=(u*d-m*f)/g:p=0,_=(u+p*d)/f,a.x=p,a.y=_}}(),zh=function(){const r=new rt,e=new I,t=new I;return function(n,s,a,o){ew(n,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,a),s.at(c,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),n.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?n.at(0,a):n.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=s.start:u=s.end;const d=e,f=t;if(n.closestPointToPoint(u,!0,e),s.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){a.copy(d),o.copy(u);return}else{a.copy(h),o.copy(f);return}}}}(),tw=function(){const r=new I,e=new I,t=new Vn,i=new fn;return function(s,a){const{radius:o,center:l}=s,{a:c,b:h,c:u}=a;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,r).distanceTo(l)<=o||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=o)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=o))return!0;const x=a.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=o){const p=x.projectPoint(l,e);if(a.containsPoint(p))return!0}return!1}}(),iw=1e-15;function Xr(r){return Math.abs(r)<iw}class Cn extends Oi{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Rn),this.points=[this.a,this.b,this.c],this.sphere=new zi,this.plane=new Vn,this.needsUpdate=!0}intersectsSphere(e){return tw(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,s=this.satAxes,a=this.satBounds,o=s[0],l=a[0];this.getNormal(o),l.setFromPoints(o,n);const c=s[1],h=a[1];c.subVectors(e,t),h.setFromPoints(c,n);const u=s[2],d=a[2];u.subVectors(t,i),d.setFromPoints(u,n);const f=s[3],m=a[3];f.subVectors(i,e),m.setFromPoints(f,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Cn.prototype.closestPointToSegment=function(){const r=new I,e=new I,t=new fn;return function(n,s=null,a=null){const{start:o,end:l}=n,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),zh(t,n,r,e),h=r.distanceToSquared(e),h<u&&(u=h,s&&s.copy(r),a&&a.copy(e))}return this.closestPointToPoint(o,r),h=o.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),a&&a.copy(o)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),a&&a.copy(l)),Math.sqrt(u)}}(),Cn.prototype.intersectsTriangle=function(){const r=new Cn,e=new Array(3),t=new Array(3),i=new Rn,n=new Rn,s=new I,a=new I,o=new I,l=new I,c=new fn,h=new fn,u=new fn;return function(f,m=null,x=!1){this.needsUpdate&&this.update(),f.isExtendedTriangle?f.needsUpdate&&f.update():(r.copy(f),r.update(),f=r);const g=this.plane,p=f.plane;if(Math.abs(g.normal.dot(p.normal))>1-1e-10){const _=this.satBounds,y=this.satAxes;t[0]=f.a,t[1]=f.b,t[2]=f.c;for(let M=0;M<4;M++){const T=_[M],C=y[M];if(i.setFromPoints(C,t),T.isSeparated(i))return!1}const S=f.satBounds,v=f.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){const T=S[M],C=v[M];if(i.setFromPoints(C,e),T.isSeparated(i))return!1}for(let M=0;M<4;M++){const T=y[M];for(let C=0;C<4;C++){const b=v[C];if(s.crossVectors(T,b),i.setFromPoints(s,e),n.setFromPoints(s,t),i.isSeparated(n))return!1}}return m&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const _=this.points;let y=!1,S=0;for(let N=0;N<3;N++){const z=_[N],q=_[(N+1)%3];c.start.copy(z),c.end.copy(q),c.delta(a);const V=y?h.start:h.end,H=Xr(p.distanceToPoint(z));if(Xr(p.normal.dot(a))&&H){h.copy(c),S=2;break}if((p.intersectLine(c,V)||H)&&!Xr(V.distanceTo(q))){if(S++,y)break;y=!0}}if(S===1&&f.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(S!==2)return!1;const v=f.points;let M=!1,T=0;for(let N=0;N<3;N++){const z=v[N],q=v[(N+1)%3];c.start.copy(z),c.end.copy(q),c.delta(o);const V=M?u.start:u.end,H=Xr(g.distanceToPoint(z));if(Xr(g.normal.dot(o))&&H){u.copy(c),T=2;break}if((g.intersectLine(c,V)||H)&&!Xr(V.distanceTo(q))){if(T++,M)break;M=!0}}if(T===1&&this.containsPoint(u.end))return m&&(m.start.copy(u.end),m.end.copy(u.end)),!0;if(T!==2)return!1;if(h.delta(a),u.delta(o),a.dot(o)<0){let N=u.start;u.start=u.end,u.end=N}const C=h.start.dot(a),b=h.end.dot(a),w=u.start.dot(a),F=u.end.dot(a),U=b<w,P=C<F;return C!==F&&w!==b&&U===P?!1:(m&&(l.subVectors(h.start,u.start),l.dot(a)>0?m.start.copy(h.start):m.start.copy(u.start),l.subVectors(h.end,u.end),l.dot(a)<0?m.end.copy(h.end):m.end.copy(u.end)),!0)}}}(),Cn.prototype.distanceToPoint=function(){const r=new I;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}(),Cn.prototype.distanceToTriangle=function(){const r=new I,e=new I,t=["a","b","c"],i=new fn,n=new fn;return function(a,o=null,l=null){const c=o||l?i:null;if(this.intersectsTriangle(a,c))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],m=a[f];this.closestPointToPoint(m,r),d=m.distanceToSquared(r),d<h&&(h=d,o&&o.copy(r),l&&l.copy(m));const x=this[f];a.closestPointToPoint(x,r),d=x.distanceToSquared(r),d<h&&(h=d,o&&o.copy(x),l&&l.copy(r))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];i.set(this[d],this[f]);for(let m=0;m<3;m++){const x=t[m],g=t[(m+1)%3];n.set(a[x],a[g]),zh(i,n,r,e);const p=r.distanceToSquared(e);p<h&&(h=p,o&&o.copy(r),l&&l.copy(e))}}return Math.sqrt(h)}}();class Zi{constructor(e,t,i){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Ae,this.invMatrix=new Ae,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Rn),this.alignedSatBounds=new Array(3).fill().map(()=>new Rn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Zi.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=n[d];f.x=c?i.x:t.x,f.y=h?i.y:t.y,f.z=u?i.z:t.z,f.applyMatrix4(e)}const s=this.satBounds,a=this.satAxes,o=n[0];for(let c=0;c<3;c++){const h=a[c],u=s[c],d=1<<c,f=n[d];h.subVectors(o,f),u.setFromPoints(h,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}(),Zi.prototype.intersectsBox=function(){const r=new Rn;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(r.min=i.x,r.max=n.x,o[0].isSeparated(r)||(r.min=i.y,r.max=n.y,o[1].isSeparated(r))||(r.min=i.z,r.max=n.z,o[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=a[l],h=s[l];if(r.setFromBox(c,t),h.isSeparated(r))return!1}return!0}}(),Zi.prototype.intersectsTriangle=function(){const r=new Cn,e=new Array(3),t=new Rn,i=new Rn,n=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(r.copy(a),r.update(),a=r);const o=this.satBounds,l=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const f=o[d],m=l[d];if(t.setFromPoints(m,e),f.isSeparated(t))return!1}const c=a.satBounds,h=a.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],m=h[d];if(t.setFromPoints(m,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let m=0;m<4;m++){const x=h[m];if(n.crossVectors(f,x),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}(),Zi.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}(),Zi.prototype.distanceToPoint=function(){const r=new I;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}(),Zi.prototype.distanceToBox=function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new fn),t=new Array(12).fill().map(()=>new fn),i=new I,n=new I;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(n),this.closestPointToPoint(n,i),a.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const h=o*o,u=a.min,d=a.max,f=this.points;let m=1/0;for(let g=0;g<8;g++){const p=f[g];n.copy(p).clamp(u,d);const _=p.distanceToSquared(n);if(_<m&&(m=_,l&&l.copy(p),c&&c.copy(n),_<h))return Math.sqrt(_)}let x=0;for(let g=0;g<3;g++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){const y=(g+1)%3,S=(g+2)%3,v=p<<y|_<<S,M=1<<g|p<<y|_<<S,T=f[v],C=f[M];e[x].set(T,C);const w=r[g],F=r[y],U=r[S],P=t[x],N=P.start,z=P.end;N[w]=u[w],N[F]=p?u[F]:d[F],N[U]=_?u[U]:d[F],z[w]=d[w],z[F]=p?u[F]:d[F],z[U]=_?u[U]:d[F],x++}for(let g=0;g<=1;g++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){n.x=g?d.x:u.x,n.y=p?d.y:u.y,n.z=_?d.z:u.z,this.closestPointToPoint(n,i);const y=n.distanceToSquared(i);if(y<m&&(m=y,l&&l.copy(i),c&&c.copy(n),y<h))return Math.sqrt(y)}for(let g=0;g<12;g++){const p=e[g];for(let _=0;_<12;_++){const y=t[_];zh(p,y,i,n);const S=i.distanceToSquared(n);if(S<m&&(m=S,l&&l.copy(i),c&&c.copy(n),S<h))return Math.sqrt(S)}}return Math.sqrt(m)}}();const $r=new I,jr=new I,qr=new I,dl=new rt,fl=new rt,pl=new rt,sm=new I,rm=new I,am=new I,ml=new I;function nw(r,e,t,i,n,s){let a;return s===Pu?a=r.intersectTriangle(i,t,e,!0,n):a=r.intersectTriangle(e,t,i,s!==Lu,n),a===null?null:{distance:r.origin.distanceTo(n),point:n.clone()}}function sw(r,e,t,i,n,s,a,o,l){$r.fromBufferAttribute(e,s),jr.fromBufferAttribute(e,a),qr.fromBufferAttribute(e,o);const c=nw(r,$r,jr,qr,ml,l);if(c){i&&(dl.fromBufferAttribute(i,s),fl.fromBufferAttribute(i,a),pl.fromBufferAttribute(i,o),c.uv=Oi.getInterpolation(ml,$r,jr,qr,dl,fl,pl,new rt)),n&&(dl.fromBufferAttribute(n,s),fl.fromBufferAttribute(n,a),pl.fromBufferAttribute(n,o),c.uv1=Oi.getInterpolation(ml,$r,jr,qr,dl,fl,pl,new rt)),t&&(sm.fromBufferAttribute(t,s),rm.fromBufferAttribute(t,a),am.fromBufferAttribute(t,o),c.normal=Oi.getInterpolation(ml,$r,jr,qr,sm,rm,am,new I),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const h={a:s,b:a,c:o,normal:new I,materialIndex:0};Oi.getNormal($r,jr,qr,h.normal),c.face=h,c.faceIndex=s}return c}function om(r,e,t,i,n){const s=i*3,a=r.index.getX(s),o=r.index.getX(s+1),l=r.index.getX(s+2),{position:c,normal:h,uv:u,uv1:d}=r.attributes,f=sw(t,c,h,u,d,a,o,l,e);return f?(f.faceIndex=i,n&&n.push(f),f):null}function rw(r,e,t,i,n,s){for(let a=i,o=i+n;a<o;a++)om(r,e,t,a,s)}function aw(r,e,t,i,n){let s=1/0,a=null;for(let o=i,l=i+n;o<l;o++){const c=om(r,e,t,o);c&&c.distance<s&&(a=c,s=c.distance)}return a}function Ji(r,e,t,i){const n=r.a,s=r.b,a=r.c;let o=e,l=e+1,c=e+2;t&&(o=t.getX(e),l=t.getX(e+1),c=t.getX(e+2)),n.x=i.getX(o),n.y=i.getY(o),n.z=i.getZ(o),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),a.x=i.getX(c),a.y=i.getY(c),a.z=i.getZ(c)}function lm(r,e,t,i,n,s,a){const o=t.index,l=t.attributes.position;for(let c=r,h=e+r;c<h;c++)if(Ji(a,c*3,o,l),a.needsUpdate=!0,i(a,c,n,s))return!0;return!1}class cm{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function ns(r,e){return e[r+15]===65535}function Yr(r,e){return e[r+6]}function Ua(r,e){return e[r+14]}function Na(r){return r+8}function Ba(r,e){return e[r+6]}function ow(r,e){return e[r+7]}function RA(r){return r}const Kr=new Vt,gl=new I,lw=["x","y","z"];function Oh(r,e,t,i,n){let s=r*2,a=Zr,o=ss,l=rs;if(ns(s,o)){const h=Yr(r,l),u=Ua(s,o);rw(e,t,i,h,u,n)}else{const h=Na(r);xl(h,a,i,gl)&&Oh(h,e,t,i,n);const u=Ba(r,l);xl(u,a,i,gl)&&Oh(u,e,t,i,n)}}function kh(r,e,t,i){let n=r*2,s=Zr,a=ss,o=rs;if(ns(n,a)){const c=Yr(r,o),h=Ua(n,a);return aw(e,t,i,c,h)}else{const c=ow(r,o),h=lw[c],d=i.direction[h]>=0;let f,m;d?(f=Na(r),m=Ba(r,o)):(f=Ba(r,o),m=Na(r));const g=xl(f,s,i,gl)?kh(f,e,t,i):null;if(g){const y=g.point[h];if(d?y<=s[m+c]:y>=s[m+c+3])return g}const _=xl(m,s,i,gl)?kh(m,e,t,i):null;return g&&_?g.distance<=_.distance?g:_:g||_||null}}const cw=function(){let r,e;const t=[],i=new cm(()=>new Vt);return function(...a){r=i.getPrimitive(),e=i.getPrimitive(),t.push(r,e);const o=n(...a);i.releasePrimitive(r),i.releasePrimitive(e),t.pop(),t.pop();const l=t.length;return l>0&&(e=t[l-1],r=t[l-2]),o};function n(s,a,o,l,c=null,h=0,u=0){function d(y){let S=y*2,v=ss,M=rs;for(;!ns(S,v);)y=Na(y),S=y*2;return Yr(y,M)}function f(y){let S=y*2,v=ss,M=rs;for(;!ns(S,v);)y=Ba(y,M),S=y*2;return Yr(y,M)+Ua(S,v)}let m=s*2,x=Zr,g=ss,p=rs;if(ns(m,g)){const y=Yr(s,p),S=Ua(m,g);return Ki(s,x,r),l(y,S,!1,u,h+s,r)}else{const y=Na(s),S=Ba(s,p);let v=y,M=S,T,C,b,w;if(c&&(b=r,w=e,Ki(v,x,b),Ki(M,x,w),T=c(b),C=c(w),C<T)){v=S,M=y;const V=T;T=C,C=V,b=w}b||(b=r,Ki(v,x,b));const F=ns(v*2,g),U=o(b,F,T,u+1,h+v);let P;if(U===Qp){const V=d(v),W=f(v)-V;P=l(V,W,!0,u+1,h+v,b)}else P=U&&n(v,a,o,l,c,h,u+1);if(P)return!0;w=e,Ki(M,x,w);const N=ns(M*2,g),z=o(w,N,C,u+1,h+M);let q;if(z===Qp){const V=d(M),W=f(M)-V;q=l(V,W,!0,u+1,h+M,w)}else q=z&&n(M,a,o,l,c,h,u+1);return!!q}}}(),hw=function(){const r=new Cn,e=new Cn,t=new Ae,i=new Zi,n=new Zi;return function s(a,o,l,c,h=null){let u=a*2,d=Zr,f=ss,m=rs;if(h===null&&(l.boundingBox||l.computeBoundingBox(),i.set(l.boundingBox.min,l.boundingBox.max,c),h=i),ns(u,f)){const g=o,p=g.index,_=g.attributes.position,y=l.index,S=l.attributes.position,v=Yr(a,m),M=Ua(u,f);if(t.copy(c).invert(),l.boundsTree)return Ki(a,d,n),n.matrix.copy(t),n.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:C=>n.intersectsBox(C),intersectsTriangle:C=>{C.a.applyMatrix4(c),C.b.applyMatrix4(c),C.c.applyMatrix4(c),C.needsUpdate=!0;for(let b=v*3,w=(M+v)*3;b<w;b+=3)if(Ji(e,b,p,_),e.needsUpdate=!0,C.intersectsTriangle(e))return!0;return!1}});for(let T=v*3,C=M+v*3;T<C;T+=3){Ji(r,T,p,_),r.a.applyMatrix4(t),r.b.applyMatrix4(t),r.c.applyMatrix4(t),r.needsUpdate=!0;for(let b=0,w=y.count;b<w;b+=3)if(Ji(e,b,y,S),e.needsUpdate=!0,r.intersectsTriangle(e))return!0}}else{const g=a+8,p=m[a+6];return Ki(g,d,Kr),!!(h.intersectsBox(Kr)&&s(g,o,l,c,h)||(Ki(p,d,Kr),h.intersectsBox(Kr)&&s(p,o,l,c,h)))}}}();function xl(r,e,t,i){return Ki(r,e,Kr),t.intersectBox(Kr,i)}const Vh=[];let yl,Zr,ss,rs;function za(r){yl&&Vh.push(yl),yl=r,Zr=new Float32Array(r),ss=new Uint16Array(r),rs=new Uint32Array(r)}function _l(){yl=null,Zr=null,ss=null,rs=null,Vh.length&&za(Vh.pop())}const Hh=Symbol("skip tree generation"),Gh=new Vt,Wh=new Vt,Jr=new Ae,Ls=new Zi,Oa=new Zi,ka=new I,vl=new I,uw=new I,dw=new I,fw=new I,hm=new Vt,Qi=new cm(()=>new Cn);class Va{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),Va.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,s=i.getIndex();let a;return t.cloneBuffers?a={roots:n.map(o=>o.slice()),index:s.array.slice()}:a={roots:n,index:s.array},a}static deserialize(e,t,i={}){if(typeof i=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),Va.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});i={setIndex:!0,...i};const{index:n,roots:s}=e,a=new Va(t,{...i,[Hh]:!0});if(a._roots=s,i.setIndex){const o=t.getIndex();if(o===null){const l=new $t(e.index,1,!1);t.setIndex(l)}else o.array!==n&&(o.array.set(n),o.needsUpdate=!0)}return a}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Jp,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Hh]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[Hh]||(this._roots=QS(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Vt))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,i=t.index.array,n=t.attributes.position;let s,a,o,l,c=0;const h=this._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,m=!1){const x=d*2;if(o[x+15]===Nh){const p=a[d+6],_=o[x+14];let y=1/0,S=1/0,v=1/0,M=-1/0,T=-1/0,C=-1/0;for(let b=3*p,w=3*(p+_);b<w;b++){const F=i[b],U=n.getX(F),P=n.getY(F),N=n.getZ(F);U<y&&(y=U),U>M&&(M=U),P<S&&(S=P),P>T&&(T=P),N<v&&(v=N),N>C&&(C=N)}return l[d+0]!==y||l[d+1]!==S||l[d+2]!==v||l[d+3]!==M||l[d+4]!==T||l[d+5]!==C?(l[d+0]=y,l[d+1]=S,l[d+2]=v,l[d+3]=M,l[d+4]=T,l[d+5]=C,!0):!1}else{const p=d+8,_=a[d+6],y=p+f,S=_+f;let v=m,M=!1,T=!1;e?v||(M=e.has(y),T=e.has(S),v=!M&&!T):(M=!0,T=!0);const C=v||M,b=v||T;let w=!1;C&&(w=u(p,f,v));let F=!1;b&&(F=u(_,f,v));const U=w||F;if(U)for(let P=0;P<3;P++){const N=p+P,z=_+P,q=l[N],V=l[N+3],H=l[z],W=l[z+3];l[d+P]=q<H?q:H,l[d+P+3]=V>W?V:W}return U}}}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),s=new Uint16Array(i);a(0);function a(o,l=0){const c=o*2,h=s[c+15]===Nh;if(h){const u=n[o+6],d=s[c+14];e(l,h,new Float32Array(i,o*4,6),u,d)}else{const u=o+ll/4,d=n[o+6],f=n[o+7];e(l,h,new Float32Array(i,o*4,6),f)||(a(u,l+1),a(d,l+1))}}}raycast(e,t=Vs){const i=this._roots,n=this.geometry,s=[],a=t.isMaterial,o=Array.isArray(t),l=n.groups,c=a?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=o?t[l[h].materialIndex].side:c,f=s.length;if(za(i[h]),Oh(0,n,d,e,s),_l(),o){const m=l[h].materialIndex;for(let x=f,g=s.length;x<g;x++)s[x].face.materialIndex=m}}return s}raycastFirst(e,t=Vs){const i=this._roots,n=this.geometry,s=t.isMaterial,a=Array.isArray(t);let o=null;const l=n.groups,c=s?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=a?t[l[h].materialIndex].side:c;za(i[h]);const f=kh(0,n,d,e);_l(),f!=null&&(o==null||f.distance<o.distance)&&(o=f,a&&(f.face.materialIndex=l[h].materialIndex))}return o}intersectsGeometry(e,t){const i=this.geometry;let n=!1;for(const s of this._roots)if(za(s),n=hw(0,i,e,t),_l(),n)break;return n}shapecast(e,t,i){const n=this.geometry;if(e instanceof Function){if(t){const d=t;t=(f,m,x,g)=>{const p=m*3;return d(f,p,p+1,p+2,x,g)}}e={boundsTraverseOrder:i,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const s=Qi.getPrimitive();let{boundsTraverseOrder:a,intersectsBounds:o,intersectsRange:l,intersectsTriangle:c}=e;if(l&&c){const d=l;l=(f,m,x,g,p)=>d(f,m,x,g,p)?!0:lm(f,m,n,c,x,g,s)}else l||(c?l=(d,f,m,x)=>lm(d,f,n,c,m,x,s):l=(d,f,m)=>m);let h=!1,u=0;for(const d of this._roots){if(za(d),h=cw(0,n,o,l,a,u),_l(),h)break;u+=d.byteLength}return Qi.releasePrimitive(s),h}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:s}=i;const a=this.geometry.index,o=this.geometry.attributes.position,l=e.geometry.index,c=e.geometry.attributes.position;Jr.copy(t).invert();const h=Qi.getPrimitive(),u=Qi.getPrimitive();if(s){let f=function(m,x,g,p,_,y,S,v){for(let M=g,T=g+p;M<T;M++){Ji(u,M*3,l,c),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let C=m,b=m+x;C<b;C++)if(Ji(h,C*3,a,o),h.needsUpdate=!0,s(h,u,C,M,_,y,S,v))return!0}return!1};if(n){const m=n;n=function(x,g,p,_,y,S,v,M){return m(x,g,p,_,y,S,v,M)?!0:f(x,g,p,_,y,S,v,M)}}else n=f}e.getBoundingBox(Wh),Wh.applyMatrix4(t);const d=this.shapecast({intersectsBounds:f=>Wh.intersectsBox(f),intersectsRange:(f,m,x,g,p,_)=>(Gh.copy(_),Gh.applyMatrix4(Jr),e.shapecast({intersectsBounds:y=>Gh.intersectsBox(y),intersectsRange:(y,S,v,M,T)=>n(f,m,y,S,g,p,M,T)}))});return Qi.releasePrimitive(h),Qi.releasePrimitive(u),d}intersectsBox(e,t){return Ls.set(e.min,e.max,t),Ls.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Ls.intersectsBox(i),intersectsTriangle:i=>Ls.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Ls.set(e.boundingBox.min,e.boundingBox.max,t),Ls.needsUpdate=!0;const o=this.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=Qi.getPrimitive(),f=Qi.getPrimitive();let m=vl,x=uw,g=null,p=null;n&&(g=dw,p=fw);let _=1/0,y=null,S=null;return Jr.copy(t).invert(),Oa.matrix.copy(Jr),this.shapecast({boundsTraverseOrder:v=>Ls.distanceToBox(v),intersectsBounds:(v,M,T)=>T<_&&T<a?(M&&(Oa.min.copy(v.min),Oa.max.copy(v.max),Oa.needsUpdate=!0),!0):!1,intersectsRange:(v,M)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:T=>Oa.distanceToBox(T),intersectsBounds:(T,C,b)=>b<_&&b<a,intersectsRange:(T,C)=>{for(let b=T*3,w=(T+C)*3;b<w;b+=3){Ji(f,b,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let F=v*3,U=(v+M)*3;F<U;F+=3){Ji(d,F,c,l),d.needsUpdate=!0;const P=d.distanceToTriangle(f,m,g);if(P<_&&(x.copy(m),p&&p.copy(g),_=P,y=F/3,S=b/3),P<s)return!0}}}});{const T=u?u.count:h.count;for(let C=0,b=T;C<b;C+=3){Ji(f,C,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let w=v*3,F=(v+M)*3;w<F;w+=3){Ji(d,w,c,l),d.needsUpdate=!0;const U=d.distanceToTriangle(f,m,g);if(U<_&&(x.copy(m),p&&p.copy(g),_=U,y=w/3,S=C/3),U<s)return!0}}}}}),Qi.releasePrimitive(d),Qi.releasePrimitive(f),_===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=_,i.faceIndex=y,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(Jr),x.applyMatrix4(Jr),n.distance=x.sub(n.point).length(),n.faceIndex=S),i)}closestPointToPoint(e,t={},i=0,n=1/0){const s=i*i,a=n*n;let o=1/0,l=null;if(this.shapecast({boundsTraverseOrder:h=>(ka.copy(e).clamp(h.min,h.max),ka.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<o&&d<a,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,ka);const d=e.distanceToSquared(ka);return d<o&&(vl.copy(ka),o=d,l=u),d<s}}),o===1/0)return null;const c=Math.sqrt(o);return t.point?t.point.copy(vl):t.point=vl.clone(),t.distance=c,t.faceIndex=l,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Ki(0,new Float32Array(i),hm),e.union(hm)}),e}}function pw(){this.boundsTree=null}const Is=new I,Ds=new I,Fs=new I,um=new ni,Ml=new I,Xh=new I,dm=new ni,fm=new ni,bl=new Ae,pm=new Ae;function Ha(r,e){if(!r&&!e)return;const t=r.count===e.count,i=r.normalized===e.normalized,n=r.array.constructor===e.array.constructor,s=r.itemSize===e.itemSize;if(!t||!i||!n||!s)throw new Error}function Ga(r,e=null){const t=r.array.constructor,i=r.normalized,n=r.itemSize,s=e===null?r.count:e;return new $t(new t(n*s),n,i)}function mm(r,e,t=0){if(r.isInterleavedBufferAttribute){const i=r.itemSize;for(let n=0,s=r.count;n<s;n++){const a=n+t;e.setX(a,r.getX(n)),i>=2&&e.setY(a,r.getY(n)),i>=3&&e.setZ(a,r.getZ(n)),i>=4&&e.setW(a,r.getW(n))}}else{const i=e.array,n=i.constructor,s=i.BYTES_PER_ELEMENT*r.itemSize*t;new n(i.buffer,s,r.array.length).set(r.array)}}function mw(r,e,t){const i=r.elements,n=e.elements;for(let s=0,a=n.length;s<a;s++)i[s]+=n[s]*t}function gm(r,e,t){const i=r.skeleton,n=r.geometry,s=i.bones,a=i.boneInverses;dm.fromBufferAttribute(n.attributes.skinIndex,e),fm.fromBufferAttribute(n.attributes.skinWeight,e),bl.elements.fill(0);for(let o=0;o<4;o++){const l=fm.getComponent(o);if(l!==0){const c=dm.getComponent(o);pm.multiplyMatrices(s[c].matrixWorld,a[c]),mw(bl,pm,l)}}return bl.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),t.transformDirection(bl),t}function $h(r,e,t,i,n){Ml.set(0,0,0);for(let s=0,a=r.length;s<a;s++){const o=e[s],l=r[s];o!==0&&(Xh.fromBufferAttribute(l,i),t?Ml.addScaledVector(Xh,o):Ml.addScaledVector(Xh.sub(n),o))}n.add(Ml)}function gw(r,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new ki){const i=r[0].index!==null,{useGroups:n=!1,updateIndex:s=!1,skipAttributes:a=[]}=e,o=new Set(Object.keys(r[0].attributes)),l={};let c=0;t.clearGroups();for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const f in u.attributes){if(!o.has(f))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.');l[f]===void 0&&(l[f]=[]),l[f].push(u.attributes[f]),d++}if(d!==o.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let f;if(i)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,f,h),c+=f}}if(i){let h=!1;if(!t.index){let u=0;for(let d=0;d<r.length;++d)u+=r[d].index.count;t.setIndex(new $t(new Uint32Array(u),1,!1)),h=!0}if(s||h){const u=t.index;let d=0,f=0;for(let m=0;m<r.length;++m){const x=r[m],g=x.index;if(a[m]!==!0)for(let p=0;p<g.count;++p)u.setX(d,g.getX(p)+f),d++;f+=x.attributes.position.count}}}for(const h in l){const u=l[h];if(!(h in t.attributes)){let m=0;for(const x in u)m+=u[x].count;t.setAttribute(h,Ga(l[h][0],m))}const d=t.attributes[h];let f=0;for(let m=0,x=u.length;m<x;m++){const g=u[m];a[m]!==!0&&mm(g,d,f),f+=g.count}}return t}function xw(r,e){if(r===null||e===null)return r===e;if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}class yw{constructor(e){this.matrixWorld=new Ae,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const s=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&xw(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class _w{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new ki),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new ki){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:s,_diffMap:a}=this;for(let o=0,l=i.length;o<l;o++){const c=i[o],h=s[o],u=a.get(c);!u||u.didChange(c)?(this._convertToStaticGeometry(c,h),t.push(!1),u?u.update():a.set(c,new yw(c))):t.push(!0)}gw(s,{useGroups:n,skipAttributes:t},e);for(const o in e.attributes)e.attributes[o].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new ki){const i=e.geometry,n=this.applyWorldTransforms,s=this.attributes.includes("normal"),a=this.attributes.includes("tangent"),o=i.attributes,l=t.attributes;t.index||(t.index=i.index),l.position||t.setAttribute("position",Ga(o.position)),s&&!l.normal&&o.normal&&t.setAttribute("normal",Ga(o.normal)),a&&!l.tangent&&o.tangent&&t.setAttribute("tangent",Ga(o.tangent)),Ha(i.index,t.index),Ha(o.position,l.position),s&&Ha(o.normal,l.normal),a&&Ha(o.tangent,l.tangent);const c=o.position,h=s?o.normal:null,u=a?o.tangent:null,d=i.morphAttributes.position,f=i.morphAttributes.normal,m=i.morphAttributes.tangent,x=i.morphTargetsRelative,g=e.morphTargetInfluences,p=new Un;p.getNormalMatrix(e.matrixWorld);for(let _=0,y=o.position.count;_<y;_++)Is.fromBufferAttribute(c,_),h&&Ds.fromBufferAttribute(h,_),u&&(um.fromBufferAttribute(u,_),Fs.fromBufferAttribute(u,_)),g&&(d&&$h(d,g,x,_,Is),f&&$h(f,g,x,_,Ds),m&&$h(m,g,x,_,Fs)),e.isSkinnedMesh&&(e.applyBoneTransform(_,Is),h&&gm(e,_,Ds),u&&gm(e,_,Fs)),n&&Is.applyMatrix4(e.matrixWorld),l.position.setXYZ(_,Is.x,Is.y,Is.z),h&&(n&&Ds.applyNormalMatrix(p),l.normal.setXYZ(_,Ds.x,Ds.y,Ds.z)),u&&(n&&Fs.transformDirection(e.matrixWorld),l.tangent.setXYZW(_,Fs.x,Fs.y,Fs.z,um.w));for(const _ in this.attributes){const y=this.attributes[_];y==="position"||y==="tangent"||y==="normal"||!(y in o)||(l[y]||t.setAttribute(y,Ga(o[y])),Ha(o[y],l[y]),mm(o[y],l[y]))}return t}}class vw{positionVector=new L;rotationVector=new Xi;sizeVector=new L;GRAVITY=-9.81;MIN_SIZE=.01;DISABLE=5;ENABLE=1;SPEED=5;createBound(e,t,i,n=0){this.rotationVector.set(0,0,0);const s=e[0],a=e[1],o=s-t[0],l=a-t[1],c=o/-2+s,h=l/-2+a;let u=Math.abs(o),d=Math.abs(l);if(u&&d){const f=d>u,m=Math.hypot(u,d);this.rotationVector.set(0,f?Ze.d2+Math.atan(d/u):Ze.d2-Math.atan(u/d),0),f?d=m:u=m}u=u<d?this.MIN_SIZE:u,d=d<u?this.MIN_SIZE:d,this.positionVector.set(c,n,h),this.sizeVector.set(u,i,d)}borderOverflow(e){const{x:t,z:i}=this.positionVector;return Math.abs(t)>Math.abs(e.x)&&Math.abs(i)>Math.abs(e.z)&&t-e.x<=1&&i-e.z<=1}createStaticCollider(e){const{x:t,y:i,z:n}=this.sizeVector,s=new ht(new Tn(t,i,n),e);s.position.copy(this.positionVector),s.rotation.copy(this.rotationVector),ne.dispatch("Level::AddObject",s),this.addStaticCollider(s)}createGround(e,t){this.sizeVector.set(Math.abs(e[0]-t[0]),this.MIN_SIZE,Math.abs(e[1]-t[1])),this.positionVector.set((e[0]+t[0])/2,0,(e[1]+t[1])/2),this.createStaticCollider(qi.Transparent)}createBounds(e,t){const i=new L,n=e.borders.concat([e.borders[0]]),s=t?.borders.concat([t?.borders[0]]);for(let a=0;a<e.borders.length;a++){if(this.createBound(n[a],n[a+1],e.height,e.y),this.createStaticCollider(qi.StaticCollider),i.copy(this.positionVector),s&&this.createBound(s[a],s[a+1],t?.height,t?.y),this.borderOverflow(i))continue;const o=this.rotationVector.y?1.1:1,l=this.positionVector.distanceTo(i)/2*.95;this.positionVector.x-=(this.positionVector.x-i.x)/2,this.positionVector.z-=(this.positionVector.z-i.z)/2,this.sizeVector.z===this.MIN_SIZE?this.sizeVector.setZ(l):this.sizeVector.setX(l),this.positionVector.x<0?this.sizeVector.z*=o:this.sizeVector.x*=o,this.createStaticCollider(qi.StaticCollider)}}}class Mw extends vw{characterVelocity=new Map;characters=new Map;linearVelocity=new L;environment=new La;capsule=new L;matrix=new Ke;segment=new Zp;environmentCollider;box=new $n;paused=!0;delta=0;updateCollisions(){const e=Array.from(this.characters.values());for(let t=e.length;t--;){const i=e[t];for(let n=t;n--;){const s=e[n];this.linearVelocity.subVectors(i.position,s.position);const a=this.linearVelocity.length()-(i.userData.radius+s.userData.radius);if(a>0)continue;this.linearVelocity.normalize();const o=this.characterVelocity.get(i.uuid),l=this.characterVelocity.get(s.uuid),c=o.dot(this.linearVelocity),h=l.dot(this.linearVelocity),u=Math.max(c,.2),d=Math.max(h,.2),f=u+d,m=u/f,x=d/f,{y:g}=i.position,{y:p}=s.position;i.position.addScaledVector(this.linearVelocity,-m*a),s.position.addScaledVector(this.linearVelocity,x*a),i.position.y=g,s.position.y=p}}}addPhysicsCollider(){this.environment.updateMatrixWorld(!0);const e=new _w(this.environment);e.attributes=["position"];const t=e.generate();t.boundsTree=new Va(t,{lazyGeneration:!1}),ne.dispatch("Level::AddObject",this.environment),this.environmentCollider=new ht(t)}addStaticCollider(e){this.environment.attach(e)}createBounds(e,t){super.createBounds(e,t),this.addPhysicsCollider()}setCharacter(e){this.characterVelocity.set(e.uuid,new L),this.characters.set(e.uuid,e);const{height:t,radius:i}=e.userData;e.geometry.translate(0,-i,0),e.children[0].translateY(-i);const{x:n,z:s}=e.position;e.position.set(n,t,s),this.move(e.uuid,ui.UP)}move(e,t){const i=this.characters.get(e),{segment:n,radius:s}=i.userData,a=this.characterVelocity.get(e),o=this.environmentCollider?.matrixWorld,l=this.environmentCollider?.geometry;a.y+=this.delta*this.GRAVITY,i.position.addScaledVector(a,this.delta),this.linearVelocity.set(t.x,t.y,t.z),i.position.addScaledVector(this.linearVelocity,this.SPEED*this.delta),i.updateMatrixWorld(),this.box.makeEmpty(),this.matrix.copy(o).invert(),this.segment.copy(n),this.segment.start.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.segment.end.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.box.expandByPoint(this.segment.start),this.box.expandByPoint(this.segment.end),this.box.min.addScalar(-s),this.box.max.addScalar(s),l.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(this.box),intersectsTriangle:u=>{const d=this.capsule,f=this.linearVelocity,m=u.closestPointToSegment(this.segment,f,d);if(m<s){const x=s-m,g=d.sub(f).normalize();this.segment.start.addScaledVector(g,x),this.segment.end.addScaledVector(g,x)}}});const c=this.linearVelocity;c.copy(this.segment.start).applyMatrix4(o),this.capsule.subVectors(c,i.position),i.position.copy(c),a.setScalar(0)}stop(e){this.characterVelocity.get(e)?.setScalar(0)}update(e){this.paused||(this.delta=e*.2,this.updateCollisions())}remove(e){this.characterVelocity.delete(e),this.characters.delete(e)}dispose(){const e=this.environmentCollider?.geometry,t=pw.bind(e);e.dispose(),t(),this.paused=!0,this.characters.clear(),this.environment.clear(),this.characterVelocity.clear(),delete this.environmentCollider}set pause(e){this.paused=e}}const ti=new Mw;ti.constructor.name.includes("Ammo");class xm{constructor(e){this.config=e;const{x:t,y:i}=this.config.collider;this.object=new ht(new Hp(t,i,t,2,.5),qi.DynamicCollider),this.object.userData={segment:new Zp(new L,ui.DOWN),height:i,radius:.5,mass:this.config.mass},this.step=this.config.moves.Idle,this.uuid=this.object.uuid}animations={};currentAnimation;direction=new L;position=new L;rotation=new L;animationUpdate=!1;uuid;mixer;lastAnimation="";step;hitting=!1;running=!1;moving=!1;object;dead=!1;still=!1;model;health=100;updateAnimation(e,t,i){return this.currentAnimation.crossFadeTo(this.animations[t],i,!0),this.animations[t].play(),this.animationUpdate=!0,setTimeout(()=>{this.lastAnimation=t,this.setAnimation(e),this.currentAnimation.stop(),this.animationUpdate=!1,this.currentAnimation=this.animations[t]},i*1e3)}async load(e){const t=await $e.Loader.loadGLTF(this.config.model);return this.mesh=t.scene,this.setTransform(t),this.setMaterial(e,1),t}playSound(e,t=!1){t&&this.stopSound(e),ne.dispatch("SFX::Character",{uuid:this.uuid,play:!0,sfx:e,matrix:this.object.matrixWorld},!0)}setMaterial(e,t=0){this.mesh.traverse(i=>{const n=i,s=n.material;n.isMesh&&(n.castShadow=!0,n.updateMorphTargets(),n.material=new Ih({envMap:e??null,transparent:!0,map:s.map,side:Ei,opacity:t}))})}getAnimationDuration(e){return this.animations[e].getClip().duration*1e3}setAnimation(e){this.step=this.config.moves[e]}setAnimations(e){const t=e.animations;this.mixer=new kS(this.mesh);for(let i=t.length;i--;){const{name:n}=t[i],s=n.charAt(0).toLowerCase()+n.slice(1);this.animations[s]=this.mixer.clipAction(t[i])}this.currentAnimation=this.animations.idle}setTransform(e){this.object.position.copy(this.config.position),this.mesh.position.set(0,this.config.collider.z,0),this.object.scale.copy(this.config.scale),this.rotation.setFromEuler(this.object.rotation),this.position.copy(this.object.position),this.object.add(this.mesh),this.setAnimations(e)}setMixerTimeScale(e){this.mixer&&(this.mixer.timeScale=e)}updateHealth(e){return this.dead?!0:(this.health=Math.max(this.health-e,0),!this.health&&this.die(),this.dead)}stopSound(e){ne.dispatch("SFX::Character",{uuid:this.uuid,play:!1,sfx:e,matrix:this.object.matrixWorld},!0)}setMixerTime(e){this.mixer?.setTime(e)}teleport(e){ti.pause=!0,this.object.position.copy(e),this.mesh.rotateOnWorldAxis(ui.UP,Math.PI),ti.teleportCollider?.(this.object.uuid),ti.pause=!1}update(e){this.mixer?.update(e),this.updateDirection(),this.moving?(this.still=!1,ti.move(this.uuid,this.direction)):this.still||(this.still=!0,ti.stop(this.uuid))}updateDirection(){const{speed:e,direction:t}=this.step;this.mesh.getWorldDirection(this.rotation),this.object.getWorldPosition(this.position);const i=this.rotation.x*e,n=this.rotation.z*e,{z0:s,x0:a,x1:o}=t,l=Math.min(a,o);this.direction.set(i*s+i*l+n*o,-1,n*s+n*l+i*a)}dispose(){this.object.userData={},this.object.geometry.dispose(),this.object.material.dispose();for(const e in this.animations)this.animations[e].stopFading(),this.animations[e].stop(),delete this.animations[e];this.model&&(this.object.remove(this.model),this.model.clear(),delete this.model),this.animations={},delete this.mixer,this.reset()}die(){this.playSound("death",!0),this.setAnimation("Idle"),ti.remove(this.uuid),this.hitting=!1,this.running=!1,this.moving=!1,this.still=!1,this.dead=!0}reset(){this.step=this.config.moves.Idle,this.direction.setScalar(0),this.position.setScalar(0),this.rotation.setScalar(0),this.hitting=!1,this.running=!1,this.moving=!1,this.health=100,this.still=!0,this.dead=!1}get blockingAnimation(){return this.dead||this.animationUpdate}set mesh(e){this.model=e}get mesh(){return this.model}get life(){return this.health}get collider(){return this.object}get alive(){return!this.dead}}var ym={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},jh={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},bw=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Sl={CSS:{},springs:{}};function en(r,e,t){return Math.min(Math.max(r,e),t)}function Wa(r,e){return r.indexOf(e)>-1}function qh(r,e){return r.apply(null,e)}var pe={arr:function(r){return Array.isArray(r)},obj:function(r){return Wa(Object.prototype.toString.call(r),"Object")},pth:function(r){return pe.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||pe.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return pe.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return pe.hex(r)||pe.rgb(r)||pe.hsl(r)},key:function(r){return!ym.hasOwnProperty(r)&&!jh.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function _m(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function vm(r,e){var t=_m(r),i=en(pe.und(t[0])?1:t[0],.1,100),n=en(pe.und(t[1])?100:t[1],.1,100),s=en(pe.und(t[2])?10:t[2],.1,100),a=en(pe.und(t[3])?0:t[3],.1,100),o=Math.sqrt(n/i),l=s/(2*Math.sqrt(n*i)),c=l<1?o*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*o+-a)/c:-a+o;function d(m){var x=e?e*m/1e3:m;return l<1?x=Math.exp(-x*l*o)*(h*Math.cos(c*x)+u*Math.sin(c*x)):x=(h+u*x)*Math.exp(-x*o),m===0||m===1?m:1-x}function f(){var m=Sl.springs[r];if(m)return m;for(var x=1/6,g=0,p=0;;)if(g+=x,d(g)===1){if(p++,p>=16)break}else p=0;var _=g*x*1e3;return Sl.springs[r]=_,_}return e?d:f}function Sw(r){return r===void 0&&(r=10),function(e){return Math.ceil(en(e,1e-6,1)*r)*(1/r)}}var ww=function(){var r=11,e=1/(r-1);function t(h,u){return 1-3*u+3*h}function i(h,u){return 3*u-6*h}function n(h){return 3*h}function s(h,u,d){return((t(u,d)*h+i(u,d))*h+n(u))*h}function a(h,u,d){return 3*t(u,d)*h*h+2*i(u,d)*h+n(u)}function o(h,u,d,f,m){var x,g,p=0;do g=u+(d-u)/2,x=s(g,f,m)-h,x>0?d=g:u=g;while(Math.abs(x)>1e-7&&++p<10);return g}function l(h,u,d,f){for(var m=0;m<4;++m){var x=a(u,d,f);if(x===0)return u;var g=s(u,d,f)-h;u-=g/x}return u}function c(h,u,d,f){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var m=new Float32Array(r);if(h!==u||d!==f)for(var x=0;x<r;++x)m[x]=s(x*e,h,d);function g(p){for(var _=0,y=1,S=r-1;y!==S&&m[y]<=p;++y)_+=e;--y;var v=(p-m[y])/(m[y+1]-m[y]),M=_+v*e,T=a(M,h,d);return T>=.001?l(p,M,h,d):T===0?M:o(p,_,_+e,h,d)}return function(p){return h===u&&d===f||p===0||p===1?p:s(g(p),u,f)}}return c}(),Mm=function(){var r={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var n,s=4;i<((n=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((n*3-2)/22-i,2)}},Elastic:function(i,n){i===void 0&&(i=1),n===void 0&&(n=.5);var s=en(i,1,10),a=en(n,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,n){e[i]=function(){return function(s){return Math.pow(s,n+2)}}}),Object.keys(e).forEach(function(i){var n=e[i];r["easeIn"+i]=n,r["easeOut"+i]=function(s,a){return function(o){return 1-n(s,a)(1-o)}},r["easeInOut"+i]=function(s,a){return function(o){return o<.5?n(s,a)(o*2)/2:1-n(s,a)(o*-2+2)/2}},r["easeOutIn"+i]=function(s,a){return function(o){return o<.5?(1-n(s,a)(1-o*2))/2:(n(s,a)(o*2-1)+1)/2}}}),r}();function Yh(r,e){if(pe.fnc(r))return r;var t=r.split("(")[0],i=Mm[t],n=_m(r);switch(t){case"spring":return vm(r,e);case"cubicBezier":return qh(ww,n);case"steps":return qh(Sw,n);default:return qh(i,n)}}function bm(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function wl(r,e){for(var t=r.length,i=arguments.length>=2?arguments[1]:void 0,n=[],s=0;s<t;s++)if(s in r){var a=r[s];e.call(i,a,s,r)&&n.push(a)}return n}function Tl(r){return r.reduce(function(e,t){return e.concat(pe.arr(t)?Tl(t):t)},[])}function Sm(r){return pe.arr(r)?r:(pe.str(r)&&(r=bm(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Kh(r,e){return r.some(function(t){return t===e})}function Zh(r){var e={};for(var t in r)e[t]=r[t];return e}function Jh(r,e){var t=Zh(r);for(var i in r)t[i]=e.hasOwnProperty(i)?e[i]:r[i];return t}function Al(r,e){var t=Zh(r);for(var i in e)t[i]=pe.und(r[i])?e[i]:r[i];return t}function Tw(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function Aw(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(o,l,c,h){return l+l+c+c+h+h}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),s=parseInt(i[2],16),a=parseInt(i[3],16);return"rgba("+n+","+s+","+a+",1)"}function Ew(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,s=e[4]||1;function a(d,f,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?d+(f-d)*6*m:m<1/2?f:m<2/3?d+(f-d)*(2/3-m)*6:d}var o,l,c;if(i==0)o=l=c=n;else{var h=n<.5?n*(1+i):n+i-n*i,u=2*n-h;o=a(u,h,t+1/3),l=a(u,h,t),c=a(u,h,t-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function Rw(r){if(pe.rgb(r))return Tw(r);if(pe.hex(r))return Aw(r);if(pe.hsl(r))return Ew(r)}function Pn(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function Cw(r){if(Wa(r,"translate")||r==="perspective")return"px";if(Wa(r,"rotate")||Wa(r,"skew"))return"deg"}function Qh(r,e){return pe.fnc(r)?r(e.target,e.id,e.total):r}function tn(r,e){return r.getAttribute(e)}function eu(r,e,t){var i=Pn(e);if(Kh([t,"deg","rad","turn"],i))return e;var n=Sl.CSS[e+t];if(!pe.und(n))return n;var s=100,a=document.createElement(r.tagName),o=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+t;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(e);return Sl.CSS[e+t]=c,c}function wm(r,e,t){if(e in r.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.style[e]||getComputedStyle(r).getPropertyValue(i)||"0";return t?eu(r,n,t):n}}function tu(r,e){if(pe.dom(r)&&!pe.inp(r)&&(!pe.nil(tn(r,e))||pe.svg(r)&&r[e]))return"attribute";if(pe.dom(r)&&Kh(bw,e))return"transform";if(pe.dom(r)&&e!=="transform"&&wm(r,e))return"css";if(r[e]!=null)return"object"}function Tm(r){if(pe.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,n;n=t.exec(e);)i.set(n[1],n[2]);return i}}function Pw(r,e,t,i){var n=Wa(e,"scale")?1:0+Cw(e),s=Tm(r).get(e)||n;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),i?eu(r,s,i):s}function iu(r,e,t,i){switch(tu(r,e)){case"transform":return Pw(r,e,i,t);case"css":return wm(r,e,t);case"attribute":return tn(r,e);default:return r[e]||0}}function nu(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var i=Pn(r)||0,n=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return n+s+i;case"-":return n-s+i;case"*":return n*s+i}}function Am(r,e){if(pe.col(r))return Rw(r);if(/\s/g.test(r))return r;var t=Pn(r),i=t?r.substr(0,r.length-t.length):r;return e?i+e:i}function su(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function Lw(r){return Math.PI*2*tn(r,"r")}function Iw(r){return tn(r,"width")*2+tn(r,"height")*2}function Dw(r){return su({x:tn(r,"x1"),y:tn(r,"y1")},{x:tn(r,"x2"),y:tn(r,"y2")})}function Em(r){for(var e=r.points,t=0,i,n=0;n<e.numberOfItems;n++){var s=e.getItem(n);n>0&&(t+=su(i,s)),i=s}return t}function Fw(r){var e=r.points;return Em(r)+su(e.getItem(e.numberOfItems-1),e.getItem(0))}function Rm(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return Lw(r);case"rect":return Iw(r);case"line":return Dw(r);case"polyline":return Em(r);case"polygon":return Fw(r)}}function Uw(r){var e=Rm(r);return r.setAttribute("stroke-dasharray",e),e}function Nw(r){for(var e=r.parentNode;pe.svg(e)&&pe.svg(e.parentNode);)e=e.parentNode;return e}function Cm(r,e){var t=e||{},i=t.el||Nw(r),n=i.getBoundingClientRect(),s=tn(i,"viewBox"),a=n.width,o=n.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function Bw(r,e){var t=pe.str(r)?bm(r)[0]:r,i=e||100;return function(n){return{property:n,el:t,svg:Cm(t),totalLength:Rm(t)*(i/100)}}}function zw(r,e,t){function i(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return r.el.getPointAtLength(u)}var n=Cm(r.el,r.svg),s=i(),a=i(-1),o=i(1),l=t?1:n.w/n.vW,c=t?1:n.h/n.vH;switch(r.property){case"x":return(s.x-n.x)*l;case"y":return(s.y-n.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function Pm(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Am(pe.pth(r)?r.totalLength:r,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:pe.str(r)||e?i.split(t):[]}}function ru(r){var e=r?Tl(pe.arr(r)?r.map(Sm):Sm(r)):[];return wl(e,function(t,i,n){return n.indexOf(t)===i})}function Lm(r){var e=ru(r);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:Tm(t)}}})}function Ow(r,e){var t=Zh(e);if(/^spring/.test(t.easing)&&(t.duration=vm(t.easing)),pe.arr(r)){var i=r.length,n=i===2&&!pe.obj(r[0]);n?r={value:r}:pe.fnc(e.duration)||(t.duration=e.duration/i)}var s=pe.arr(r)?r:[r];return s.map(function(a,o){var l=pe.obj(a)&&!pe.pth(a)?a:{value:a};return pe.und(l.delay)&&(l.delay=o?0:e.delay),pe.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return Al(a,t)})}function kw(r){for(var e=wl(Tl(r.map(function(s){return Object.keys(s)})),function(s){return pe.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},i=function(s){var a=e[s];t[a]=r.map(function(o){var l={};for(var c in o)pe.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},n=0;n<e.length;n++)i(n);return t}function Vw(r,e){var t=[],i=e.keyframes;i&&(e=Al(kw(i),e));for(var n in e)pe.key(n)&&t.push({name:n,tweens:Ow(e[n],r)});return t}function Hw(r,e){var t={};for(var i in r){var n=Qh(r[i],e);pe.arr(n)&&(n=n.map(function(s){return Qh(s,e)}),n.length===1&&(n=n[0])),t[i]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function Gw(r,e){var t;return r.tweens.map(function(i){var n=Hw(i,e),s=n.value,a=pe.arr(s)?s[1]:s,o=Pn(a),l=iu(e.target,r.name,o,e),c=t?t.to.original:l,h=pe.arr(s)?s[0]:c,u=Pn(h)||Pn(l),d=o||u;return pe.und(a)&&(a=c),n.from=Pm(h,d),n.to=Pm(nu(a,h),d),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=Yh(n.easing,n.duration),n.isPath=pe.pth(s),n.isPathTargetInsideSVG=n.isPath&&pe.svg(e.target),n.isColor=pe.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var Im={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,i,n){if(i.list.set(e,t),e===i.last||n){var s="";i.list.forEach(function(a,o){s+=o+"("+a+") "}),r.style.transform=s}}};function Dm(r,e){var t=Lm(r);t.forEach(function(i){for(var n in e){var s=Qh(e[n],i),a=i.target,o=Pn(s),l=iu(a,n,o,i),c=o||Pn(l),h=nu(Am(s,c),l),u=tu(a,n);Im[u](a,n,h,i.transforms,!0)}})}function Ww(r,e){var t=tu(r.target,e.name);if(t){var i=Gw(e,r),n=i[i.length-1];return{type:t,property:e.name,animatable:r,tweens:i,duration:n.end,delay:i[0].delay,endDelay:n.endDelay}}}function Xw(r,e){return wl(Tl(r.map(function(t){return e.map(function(i){return Ww(t,i)})})),function(t){return!pe.und(t)})}function Fm(r,e){var t=r.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,r.map(function(s){return i(s)+s.duration})):e.duration,n.delay=t?Math.min.apply(Math,r.map(function(s){return i(s)+s.delay})):e.delay,n.endDelay=t?n.duration-Math.max.apply(Math,r.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,n}var Um=0;function $w(r){var e=Jh(ym,r),t=Jh(jh,r),i=Vw(t,r),n=Lm(r.targets),s=Xw(n,i),a=Fm(s,t),o=Um;return Um++,Al(e,{id:o,children:[],animatables:n,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var Ui=[],Nm=function(){var r;function e(){!r&&(!Bm()||!Me.suspendWhenDocumentHidden)&&Ui.length>0&&(r=requestAnimationFrame(t))}function t(n){for(var s=Ui.length,a=0;a<s;){var o=Ui[a];o.paused?(Ui.splice(a,1),s--):(o.tick(n),a++)}r=a>0?requestAnimationFrame(t):void 0}function i(){Me.suspendWhenDocumentHidden&&(Bm()?r=cancelAnimationFrame(r):(Ui.forEach(function(n){return n._onDocumentVisibility()}),Nm()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function Bm(){return!!document&&document.hidden}function Me(r){r===void 0&&(r={});var e=0,t=0,i=0,n,s=0,a=null;function o(_){var y=window.Promise&&new Promise(function(S){return a=S});return _.finished=y,y}var l=$w(r);o(l);function c(){var _=l.direction;_!=="alternate"&&(l.direction=_!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,n.forEach(function(y){return y.reversed=l.reversed})}function h(_){return l.reversed?l.duration-_:_}function u(){e=0,t=h(l.currentTime)*(1/Me.speed)}function d(_,y){y&&y.seek(_-y.timelineOffset)}function f(_){if(l.reversePlayback)for(var S=s;S--;)d(_,n[S]);else for(var y=0;y<s;y++)d(_,n[y])}function m(_){for(var y=0,S=l.animations,v=S.length;y<v;){var M=S[y],T=M.animatable,C=M.tweens,b=C.length-1,w=C[b];b&&(w=wl(C,function(le){return _<le.end})[0]||w);for(var F=en(_-w.start-w.delay,0,w.duration)/w.duration,U=isNaN(F)?1:w.easing(F),P=w.to.strings,N=w.round,z=[],q=w.to.numbers.length,V=void 0,H=0;H<q;H++){var W=void 0,Z=w.to.numbers[H],oe=w.from.numbers[H]||0;w.isPath?W=zw(w.value,U*Z,w.isPathTargetInsideSVG):W=oe+U*(Z-oe),N&&(w.isColor&&H>2||(W=Math.round(W*N)/N)),z.push(W)}var re=P.length;if(!re)V=z[0];else{V=P[0];for(var G=0;G<re;G++){P[G];var J=P[G+1],ie=z[G];isNaN(ie)||(J?V+=ie+J:V+=ie+" ")}}Im[M.type](T.target,M.property,V,T.transforms),M.currentValue=V,y++}}function x(_){l[_]&&!l.passThrough&&l[_](l)}function g(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(_){var y=l.duration,S=l.delay,v=y-l.endDelay,M=h(_);l.progress=en(M/y*100,0,100),l.reversePlayback=M<l.currentTime,n&&f(M),!l.began&&l.currentTime>0&&(l.began=!0,x("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,x("loopBegin")),M<=S&&l.currentTime!==0&&m(0),(M>=v&&l.currentTime!==y||!y)&&m(y),M>S&&M<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,x("changeBegin")),x("change"),m(M)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,x("changeComplete")),l.currentTime=en(M,0,y),l.began&&x("update"),_>=y&&(t=0,g(),l.remaining?(e=i,x("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,x("loopComplete"),x("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var _=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=_==="reverse",l.remaining=l.loop,n=l.children,s=n.length;for(var y=s;y--;)l.children[y].reset();(l.reversed&&l.loop!==!0||_==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(_,y){return Dm(_,y),l},l.tick=function(_){i=_,e||(e=i),p((i+(t-e))*Me.speed)},l.seek=function(_){p(h(_))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Ui.push(l),u(),Nm())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(_){var y=ru(_);Om(y,l)},l.reset(),l.autoplay&&l.play(),l}function zm(r,e){for(var t=e.length;t--;)Kh(r,e[t].animatable.target)&&e.splice(t,1)}function Om(r,e){var t=e.animations,i=e.children;zm(r,t);for(var n=i.length;n--;){var s=i[n],a=s.animations;zm(r,a),!a.length&&!s.children.length&&i.splice(n,1)}!t.length&&!i.length&&e.pause()}function jw(r){for(var e=ru(r),t=Ui.length;t--;){var i=Ui[t];Om(e,i)}}function qw(r,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?Yh(e.easing):null,n=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",c=a==="last",h=pe.arr(r),u=parseFloat(h?r[0]:r),d=h?parseFloat(r[1]):0,f=Pn(h?r[1]:r)||0,m=e.start||0+(h?u:0),x=[],g=0;return function(p,_,y){if(o&&(a=0),l&&(a=(y-1)/2),c&&(a=y-1),!x.length){for(var S=0;S<y;S++){if(!n)x.push(Math.abs(a-S));else{var v=l?(n[0]-1)/2:a%n[0],M=l?(n[1]-1)/2:Math.floor(a/n[0]),T=S%n[0],C=Math.floor(S/n[0]),b=v-T,w=M-C,F=Math.sqrt(b*b+w*w);s==="x"&&(F=-b),s==="y"&&(F=-w),x.push(F)}g=Math.max.apply(Math,x)}i&&(x=x.map(function(P){return i(P/g)*g})),t==="reverse"&&(x=x.map(function(P){return s?P<0?P*-1:-P:Math.abs(g-P)}))}var U=h?(d-u)/g:u;return m+U*(Math.round(x[_]*100)/100)+f}}function Yw(r){r===void 0&&(r={});var e=Me(r);return e.duration=0,e.add=function(t,i){var n=Ui.indexOf(e),s=e.children;n>-1&&Ui.splice(n,1);function a(d){d.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=Al(t,Jh(jh,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=pe.und(i)?c:nu(i,c),a(e),e.seek(l.timelineOffset);var h=Me(l);a(h),s.push(h);var u=Fm(s,r);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Me.version="3.2.1",Me.speed=1,Me.suspendWhenDocumentHidden=!0,Me.running=Ui,Me.remove=jw,Me.get=iu,Me.set=Dm,Me.convertPx=eu,Me.path=Bw,Me.setDashoffset=Uw,Me.stagger=qw,Me.timeline=Yw,Me.easing=Yh,Me.penner=Mm,Me.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};class km extends xm{constructor(e,t,i=0){if(super(ve.Enemy),this.id=i,this.walkDistance=this.walkDistance<0?1/0:this.walkDistance,this.runDistance=this.runDistance<0?1/0:this.runDistance,e&&t){this.character=MS(e.scene),ne.dispatch("Level::AddObject",this.object),ne.dispatch("Enemy::Spawn",this.uuid,!0);const n=+!this.id;this.mesh=this.character,this.setMaterial(t,n),this.setTransform(e),this.setDefaultState(),this.toggleVisibility(!0)}}walkDistance=ve.Gameplay.enemy.walk;runDistance=ve.Gameplay.enemy.run;lose=ve.Gameplay.enemy.lose;animationUpdate=!0;lastAnimation="idle";crawlAnimation;hitBoxes=[];attackDistance=2.5;hittingTimeout;attackTimeout;crawlTimeout;animTimeout;runTimeout;hitTimeout;previousAnimation="idle";screamDuration;screamStart;hitDuration;distance=1/0;playerDead=!1;hitStart;character;attacking=!1;screaming=!1;screamed=!1;crawling=!1;falling=!1;visible=!1;crawlTime=0;fallTime=0;hitTime=0;updateAnimation(e,t,i=.5){return super.updateAnimation(e,t,i)}toggleVisibility(e,t){if(!this.hitBoxes.length)return;const i=1e3+ +!e*1500,n=e?"easeInQuad":"easeOutQuad",s=t&&this.getAnimationDuration(t)+500||0;if(e)this.visible=!0;else{this.cancelHit(),this.removeHitBoxes(),clearTimeout(this.crawlTimeout);const a=s+i,o=t==="crawlDeath";setTimeout(this.dispose.bind(this),a);const l=Date.now()-this.crawlTime<3e3;o&&l&&this.animations.crawling.stop(),this.animations.idle.stopFading(),this.animations.walk.stopFading(),this.animations.run.stopFading(),this.animations.idle.stop(),this.animations.walk.stop(),this.animations.run.stop()}setTimeout(()=>{ne.dispatch("Enemy::Active",e),this.animationUpdate=!1},+e*i),Me({changeBegin:this.disableShadow.bind(this),targets:this.material,opacity:+e,duration:i,easing:n,delay:s})}async loadCharacter(e){return this.load(e)}fallDeadAnimation(e){const t=Date.now()-this.fallTime<1500;this.falling&&t&&this.updateAnimation("Idle",e),this.toggleVisibility(!1,e)}headHit(e,t){if(!this.dead){if(this.stopSounds(),this.cancelAnimation(),this.hitting&&this.cancelHit(),!t&&this.life>e)return this.bodyHit(e);this.updateHitDamage(e)?this.falling&&this.fallDeadAnimation("headshot"):(this.toggleVisibility(!1,"headshot"),this.updateAnimation("Idle","headshot")),this.hitTime=Date.now(),this.running=!1}}bodyHit(e){if(this.dead)return;if(this.playHitSound(),this.cancelAnimation(),this.updateHitDamage(e)){this.dead&&this.fallDeadAnimation("death");return}if(this.dead){this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}else if(!this.hitting)this.previousAnimation=this.lastAnimation;else{this.cancelHit(),this.animations.idle.play(),this.currentAnimation=this.animations.idle;const i=this.previousAnimation==="run",n=this.lastAnimation==="run";if(this.running&&i&&n){if(this.updateHitDamage(this.life))return this.fallDeadAnimation("death");this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}}this.previousAnimation!=="hit"&&(this.animations.hit.time=this.hitStart,this.updateAnimation("Idle","hit",.1)),this.hitTimeout=setTimeout(()=>{if(this.dead||this.attacking)return;const i=this.previousAnimation==="hit",n=this.previousAnimation==="scream",s=this.previousAnimation.includes("Attack"),a=i||n||s;a||(this.animTimeout=this.updateAnimation(t,this.previousAnimation,.1)),this.hitTimeout=setTimeout(()=>{if(this.dead)return;this.hitting=!1;const o=this.distance<this.runDistance&&!this.running;this.distance<this.attackDistance?this.attack():o&&this.run()},+!a*100)},this.hitDuration-100);const t=this.animation;this.hitTime=Date.now(),this.hitting=!0}legHit(e){if(this.dead)return;this.playHitSound(),this.cancelAnimation();const t=Date.now(),i=t-this.hitTime,n=this.updateHitDamage(e);if(i<825&&i>600)return setTimeout(this.legHit.bind(this,e),825-i);if(this.hitting&&this.cancelHit(),n){this.dead&&this.falling&&this.toggleVisibility(!1,"crawlDeath");return}this.crawlTimeout=setTimeout(this.crawl.bind(this),2500),this.updateAnimation("Falling","falling",.1),this.hitTime=this.fallTime=t,this.running=!1,this.falling=!0,this.hitting=!0,this.moving=!1}crawl(e=3){this.dead||(this.crawlTime=Date.now(),this.crawlTimeout=this.updateAnimation("Crawling","crawling",e),this.crawling||(this.crawlAnimation=Me({z:this.rotation.z*(e*-.1),targets:this.character.position,duration:e*1e3,easing:"linear"})),this.attacking=!1,this.crawling=!0,this.falling=!1,this.hitting=!1,this.moving=!0)}cancelAnimation(){this.attacking&&(this.animations.softAttack.stopFading(),this.animations.hardAttack.stopFading(),this.animations.softAttack.stop(),this.animations.hardAttack.stop(),clearTimeout(this.hittingTimeout),clearTimeout(this.attackTimeout),clearTimeout(this.animTimeout),this.attacking=!1),this.screaming&&(this.animations.scream.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.runTimeout),this.animations.scream.stop(),this.screaming=!1)}playHitSound(){this.stopSounds(),!this.falling&&this.playSound("hit")}stopSounds(){this.screaming?this.stopSound("scream"):this.attacking&&(this.stopSound("hardAttack"),this.stopSound("softAttack"))}cancelHit(){this.animations.hit.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.hitTimeout),this.animations.hit.stop()}idle(){if(this.dead)return;const e=+!this.attacking*.4+.1;this.updateAnimation("Idle","idle",e),this.attacking=!1,this.hitting=!1,this.running=!1,this.moving=!1}walk(){this.dead||(this.updateAnimation("Walking","walk"),this.hitting=!1,this.running=!1,this.moving=!0)}scream(){this.dead||(this.cancelHit(),this.moving=!1,this.hitting=!1,this.screamed=!0,this.screaming=!0,this.attacking=!1,this.runTimeout=setTimeout(()=>{this.playSound("scream"),this.runTimeout=setTimeout(()=>this.distance<this.attackDistance?this.attack():this.run(),this.screamDuration-250)},this.screamStart*1e3),this.animTimeout=this.updateAnimation("Idle","scream",this.screamStart))}run(){if(this.dead||this.playerDead)return;const e=+(this.attacking||this.screaming)*.1;this.updateAnimation("Running","run",e+.1),this.attacking=!1,this.screaming=!1,this.hitting=!1,this.running=!0,this.moving=!0}attack(){if(this.dead)return;const e=this.life>50&&Math.random()<.5;let t="crawlAttack",i=.5,n=2200,s=250;this.crawling||(t=e?"hardAttack":"softAttack",s=e?1300:1e3,n=e?3e3:2500,setTimeout(this.playSound.bind(this,t,!0),+!e*350+400),i=.166),this.updateAnimation("Idle",t,i),this.hittingTimeout=setTimeout(()=>{const{strong:a,soft:o}=ve.Gameplay.damage.enemy;this.canAttack&&ne.dispatch("Enemy::Attack",{position:this.position,damage:e?a:o})},s),this.attackTimeout=setTimeout(()=>{if(this.dead||this.crawling&&this.playerDead)return;const a=this.distance<(this.crawling?1.5:this.attackDistance);this.crawling?this.crawl(+a+1):a?this.idle():this.run()},i*1e3+n),this.screaming=!1,this.attacking=!0,this.screamed=!0,this.hitting=!1,this.running=!1,this.moving=!1}update(e,t){const i=t;return this.visible?(super.update(e),this.dead?this.position:(this.distance=this.object.position.distanceToSquared(i),this.character.lookAt(i.x,0,i.z),this.toggleAnimation(),this.position)):this.position}updateHitDamage(e){const t=this.falling||this.crawling,i=this.updateHealth(e);if(t){if(i&&this.crawling){let n;this.crawlAnimation?.completed||(this.character.position.z=this.rotation.z,this.crawlAnimation?.pause(),this.animations.falling.setEffectiveTimeScale(1).setEffectiveWeight(1).stopWarping().stopFading(),n=0),this.toggleVisibility(!1,"crawlDeath"),this.updateAnimation("Idle","crawlDeath",n)}}else return!1;return!0}toggleAnimation(){if(this.blockingAnimation)return;if(this.canAttack)return this.attack();if(this.crawling||!this.lose&&this.running)return;const e=this.distance>this.walkDistance,t=this.distance<this.runDistance,i=!e&&!t,n=!this.screamed&&t;this.lose&&this.moving&&e?this.idle():!this.moving&&i?this.walk():!(this.lose&&this.running)&&n&&this.scream()}dispose(){super.dispose(),this.removeHitBoxes(),this.character?.clear(),ne.dispatch("Enemy::Death",this.id),ne.dispatch("Enemy::Dispose",this.uuid,!0),ne.dispatch("Level::RemoveObject",this.object)}setDefaultState(){const e=this.getAnimationDuration("scream");this.screamDuration=e-333.3332538604736|0,this.screamStart=(e-this.screamDuration)/1e3;const t=this.getAnimationDuration("hit");this.hitDuration=t-233.3333015441895|0,this.hitStart=(t-this.hitDuration)/1e3,this.animations.softAttack.clampWhenFinished=!0,this.animations.hardAttack.clampWhenFinished=!0,this.animations.crawlDeath.clampWhenFinished=!0,this.animations.headshot.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.falling.clampWhenFinished=!0,this.animations.scream.clampWhenFinished=!0,this.animations.hit.clampWhenFinished=!0,this.animations.softAttack.setLoop(gi,0),this.animations.hardAttack.setLoop(gi,0),this.animations.crawlDeath.setLoop(gi,0),this.animations.headshot.setLoop(gi,0),this.animations.death.setLoop(gi,0),this.animations.falling.setLoop(gi,0),this.animations.scream.setLoop(gi,0),this.animations.hit.setLoop(gi,0);const{idle:i}=this.animations;this.currentAnimation=i,this.createHitBoxes(),i.play()}createHitBoxes(){this.addHeadHitBox(),this.addBodyHitBox(),this.addLegsHitBox()}removeHitBoxes(){for(let e=this.hitBoxes.length;e--;)delete this.hitBoxes[e];this.hitBoxes.splice(0)}addHeadHitBox(){const e=this.character.getObjectByName("Head"),t=new ht(new Tn(15,10,22),qi.HitBox.clone());t.position.y+=9.5,t.position.z+=2,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addBodyHitBox(){const e=this.character.getObjectByName("Spine"),t=new ht(new Hp(38,95,40,2,25),qi.HitBox.clone());t.position.y+=15,t.position.z+=2.5,t.position.x-=1,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addLegsHitBox(){const e=this.character.getObjectByName("RightUpLeg"),t=this.character.getObjectByName("LeftUpLeg"),i=this.character.getObjectByName("RightLeg"),n=this.character.getObjectByName("LeftLeg"),s=new ht(new Tn(16,50,15),qi.HitBox.clone()),a=new ht(new Tn(10,50,10),qi.HitBox.clone());a.userData.enemy=this.id,s.userData.enemy=this.id,a.position.y-=22.5,a.position.z-=2.5,s.position.y-=20;const o=s.clone(),l=s.clone(),c=a.clone(),h=a.clone();o.position.x+=1,l.position.x-=1,this.hitBoxes.push(o),this.hitBoxes.push(l),this.hitBoxes.push(c),this.hitBoxes.push(h),e.add(o),t.add(l),i.add(c),n.add(h)}disableShadow(){this.dead&&this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!1)})}get blockingAnimation(){return this.attacking||this.falling||this.screaming||this.playerDead||super.blockingAnimation}get material(){return this.mesh.children[0].children[0].material}get animation(){const e=this.running?"Running":this.moving?"Walking":"Idle";return this.falling?"Falling":this.crawling?"Crawling":e}set playerDeath(e){(this.playerDead=e)&&this.moving&&this.idle()}get hitBox(){return this.hitBoxes}get canAttack(){return!this.playerDead&&this.distance<(this.crawling?1.5:this.attackDistance)}get index(){return this.id}}function Kw(r,e=r.length,t=0){for(;e;)t=qt(0,1)*e--|0,[r[e],r[t]]=[r[t],r[e]]}function Zw(r){return JSON.parse(JSON.stringify(r))}function Jw(r){return r[yh(0,r.length-1)]}function El(r){let e=r.length,t=1/0;for(;e--;)r[e]<t&&(t=r[e]);return t}function Rl(r){let e=r.length,t=-1/0;for(;e--;)r[e]>t&&(t=r[e]);return t}const Vm=r=>{const e=Zw(r.bounds),{boundOffset:t}=ve.RandomCoords;e.unshift(e.pop());const i=e.slice(0,e.length/2).slice(4),n=e.slice(e.length/2).slice(4),s=r.minCoords[1]+t,a=r.maxCoords[1]-t,o=[r.portals[2],r.portals[3],r.portals[4],r.portals[5]],l=[r.portals[6],r.portals[7],r.portals[0],r.portals[1]],c=qt(s,a);if(c>l[0][1]){const m=El(l.map(g=>g[0])),x=Rl(l.map(g=>g[0]));return[qt(m,x),c]}if(c<o[0][1]){const m=El(o.map(g=>g[0])),x=Rl(o.map(g=>g[0]));return[qt(m,x),c]}let h,u,d,f;for(let m=0,x=i.length-1;m<x;m++)if(i[m][1]>c&&i[m+1][1]<c){d=i[m][0]+t,u=n[x-m][0]-t,h=i[m+1][0]+t,f=n[x-m-1][0]-t;break}return[qt(Math.max(d,h),Math.min(f,u))|0,c|0]};class Et{static levelCoords=new Ee;static playerCoords=new Ee;static coords=[];static ammount=ve.RandomCoords.ammount;static distance=ve.RandomCoords.playerDistance**2;static getRandomLevelCoords(e,t,i){Et.playerCoords.set(e,t);do i=Et.setRandomCoords();while(i<Et.distance);return Kw(Et.coords),Et.levelCoords.toArray()}static addLevelCoords(e){return Et.coords.push(e)===Et.ammount}static setRandomCoords(){return Et.levelCoords.fromArray(Jw(Et.coords)),Et.levelCoords.distanceToSquared(Et.playerCoords)}static fillRandomLevelCoords(){for(let e=Et.ammount;e--;)Et.coords.push(Vm({minCoords:ke.minCoords,maxCoords:ke.maxCoords,portals:ke.portals,bounds:ke.bounds}))}}class Qw{constructor(e){this.envMap=e,new km().loadCharacter(e).then(t=>{this.enemyModel=t,this.spawnEnemy([0,0])}),this.addEvents()}onHeadHit=this.headHit.bind(this);onBodyHit=this.bodyHit.bind(this);onLegHit=this.legHit.bind(this);onDeath=this.death.bind(this);positions=[];enemyPosition=new L;enemies=[];spawnedEnemies=0;enemyModel;addEvents(){ne.add("Enemy::Death",this.onDeath),ne.add("Hit::Head",this.onHeadHit),ne.add("Hit::Body",this.onBodyHit),ne.add("Hit::Leg",this.onLegHit)}spawnEnemy(e){const t=new km(this.enemyModel,this.envMap,this.spawnedEnemies++);this.enemyPosition.set(e[0],t.collider.position.y,e[1]),t.teleport(this.enemyPosition),this.positions.push(new L().copy(this.enemyPosition)),ti.setCharacter(t.collider),this.enemies.push(t)}headHit(e){const{enemy:t,damage:i,headshot:n}=e.data,s=this.getEnemyIndex(t);this.enemies[s].headHit(i,n)}bodyHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].bodyHit(i)}legHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].legHit(i)}death(e){const t=this.getEnemyIndex(e.data);this.positions.splice(t,1),this.enemies.splice(t,1)}update(e,t){for(let i=this.enemies.length;i--;){const n=this.enemies[i].update(e,t);this.enemies[i].alive?this.positions[i].copy(n):this.positions[i].setScalar(NaN)}return this.positions}spawnMultiple(e,t,i=2){const n=this.enemies.length-1;i=Math.min(ve.Gameplay.maxEnemies-n,i);for(let s=i;s--;)this.spawnEnemy(Et.getRandomLevelCoords(e,t))}getHitDirection(e,t,i){let n=Math.atan2(e.z-t.z,e.x-t.x);const s=dg(i);let a="Front";return Math.abs(s)>Ze.m075?(n=Math.abs(n),a=n<Ze.d4?"Right":n>Ze.m075?"Left":"Front"):s<-Ze.d4&&s>-Ze.m075?(n*=-1,a=n<-Ze.d4&&n>-Ze.m075?"Right":n<Ze.m075&&n>Ze.d4?"Left":"Front"):Math.abs(s)<Ze.d4?(n=Math.abs(n),a=n>Ze.m075?"Right":n<Ze.d4?"Left":"Front"):s<Ze.m075&&s>Ze.d4&&(n*=-1,a=n<Ze.m075&&n>Ze.d4?"Right":n<-Ze.d4&&n>-Ze.m075?"Left":"Front"),a}getEnemy(e){return this.enemies.find(t=>t.collider.uuid===e)}getEnemyIndex(e){return this.enemies.findIndex(t=>t.index===e)}removeEvents(){ne.remove("Enemy::Death"),ne.remove("Hit::Head"),ne.remove("Hit::Body"),ne.remove("Hit::Leg")}dispose(){for(let e=this.enemies.length;e--;)this.enemies[e].dispose(),delete this.enemies[e];this.enemyModel.scene.clear(),this.positions.splice(0),this.enemies.splice(0),this.removeEvents()}get colliders(){const e=[];for(let t=this.enemies.length;t--;)e.push(...this.enemies[t].hitBox);return e}set playerDead(e){for(let t=this.enemies.length;t--;)this.enemies[t].playerDeath=e}}class e1 extends Wn{noop=()=>{};addEventListener(e,t,i){super.addEventListener(e,t)}dispatchEvent(e){e.stopPropagation=this.noop,e.preventDefault=this.noop,super.dispatchEvent(e)}removeEventListener(e,t,i){super.removeEventListener(e,t)}}var au=new e1;class at{constructor(e){this.player=e}static directions=[0,0,0,0];static running=!1;paused=!0;move=ou;static get moves(){return at.directions}static get moving(){return at.directions.includes(1)}static get idle(){return!at.moving}static get runs(){return at.running}static set runs(e){at.running=e}get disabled(){return this.paused||!this.player.alive}set pause(e){this.paused=e}get movement(){return at.moves.join("")}dispose(){this.paused=!0}}class Ln extends at{wheelTime=0;aimTime=0;aimTimeout;events=Object.entries({contextmenu:this.onContextMenu.bind(this),mousewheel:this.onMouseWheel.bind(this),mousedown:this.onMouseDown.bind(this),mousemove:this.onMouseMove.bind(this),mouseup:this.onMouseUp.bind(this),keydown:this.onKeyDown.bind(this),keyup:this.onKeyUp.bind(this)});constructor(e){super(e),this.addEventListeners()}addEventListeners(){const e=ve.worker?au:document;for(const[t,i]of this.events)e.addEventListener(t,i,!1)}onContextMenu(e){if(!this.paused)return e.stopPropagation(),e.preventDefault(),!1}onMouseWheel(e){const t=Date.now();e.stopPropagation(),!this.disabled&&t>this.wheelTime&&(this.wheelTime=t+450,this.player.changeWeapon())}onMouseDown(e){if(e.preventDefault(),e.stopPropagation(),!this.disabled){if(e.button===Xa.LEFT)this.player.startShooting();else if(e.button===Xa.RIGHT){const t=this.move!==ou;this.player.startAiming(t),this.aimTime=Date.now()}}}onMouseMove(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&this.player.rotate(e.movementX/-100,e.movementY/400,.15)}onMouseUp(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(e.button===Xa.LEFT?this.player.stopShooting():e.button===Xa.RIGHT&&(clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const t=!!at.moves[ft.UP],i=at.runs&&t;this.player.stopAiming(i),i?this.player.run(!0):this.player.move()},Math.max(450-(Date.now()-this.aimTime),0))))}onKeyDown(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;switch(this.onShift(e.code,!0),e.code){case"KeyW":at.moves[ft.UP]=1,at.moves[ft.DOWN]=0;break;case"KeyD":at.moves[ft.RIGHT]=1,at.moves[ft.LEFT]=0;break;case"KeyS":at.moves[ft.DOWN]=1,at.moves[ft.UP]=0;break;case"KeyA":at.moves[ft.RIGHT]=0,at.moves[ft.LEFT]=1;break;default:return}const t=this.movement;this.move!==t&&this.player.move(),this.move=t}onKeyUp(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;switch(this.onShift(e.code,!1),e.code){case"KeyW":at.moves[ft.UP]=0;break;case"KeyD":at.moves[ft.RIGHT]=0;break;case"KeyS":at.moves[ft.DOWN]=0;break;case"KeyA":at.moves[ft.LEFT]=0;break;case"KeyQ":case"KeyE":{const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());return}case"KeyC":return this.player.changeCamera(!0);case"KeyV":return this.player.changeCamera(!1);case"KeyR":return this.player.reload();default:return}const t=this.movement;t===ou?this.player.idle():this.move!==t&&this.player.move(),this.move=t}onShift(e,t){const i=t?!at.runs:at.runs;e==="ShiftLeft"&&i&&(this.player.run(t),at.runs=t)}removeEventListeners(){const e=ve.worker?au:document;for(const[t,i]of this.events)e.removeEventListener(t,i,!1)}dispose(){this.removeEventListeners(),super.dispose()}}var ft=(r=>(r[r.UP=0]="UP",r[r.RIGHT=1]="RIGHT",r[r.DOWN=2]="DOWN",r[r.LEFT=3]="LEFT",r))(ft||{}),Xa=(r=>(r[r.LEFT=0]="LEFT",r[r.WHEEL=1]="WHEEL",r[r.RIGHT=2]="RIGHT",r))(Xa||{});const ou="0000";var Us=(r=>(r.Pistol="pistol",r.Rifle="rifle",r))(Us||{});class t1 extends xm{modelRotation=new fi;lastAnimation="pistolIdle";reloadTimeout;animTimeout;aimTimeout;weapon;equipRifle=!1;hasRifle=!1;reloading=!1;shooting=!1;aiming=!1;hand;pistol;rifle;shootTime=0;idleTime=0;aimTime=0;constructor(){super(ve.Player)}async loadCharacter(e){const t=await this.load(e);this.hand=t.scene.getObjectByName("swatRightHand"),ne.dispatch("Level::AddObject",this.object),this.currentAnimation=this.animations.pistolIdle,this.animations.rifleReload.clampWhenFinished=!0,this.animations.rifleAim.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.rifleReload.setLoop(gi,1),this.animations.rifleAim.setLoop(gi,1),this.animations.death.setLoop(gi,1),We.setTo(t.scene),this.currentAnimation.play(),this.rotate(-Math.PI,0)}rotate(e,t,i=.25){const n=t>0,s=this.mesh,a=+We.isFPS,o=this.rotation.y;if(s.rotateOnWorldAxis(ui.UP,e),this.running)return;const l=a*-.2-.2;i=Math.min(i+a*i,.25),(n&&o>=l||!n&&o<=i)&&s.rotateOnAxis(ui.RIGHT,t)}idle(){const e=Date.now(),t=Math.max(350-(e-this.idleTime),0);if(this.blockingAnimation||t)return setTimeout(this.idle.bind(this),t);ne.dispatch("Player::Aim",!this.equipRifle,!0),ne.dispatch("Player::Run",!1,!0);const i=this.getWeaponAnimation("Idle");this.lastAnimation!==i&&(this.hasRifle&&this.rifle.updatePosition(0),this.running=this.moving=!1,We.runAnimation(!1),this.idleTime=e,setTimeout(this.updateAnimation.bind(this,"Idle",i),+(this.lastAnimation===i)*100))}move(){if(this.blockingAnimation){this.reloading&&(this.moving=Ln.moving);return}const e=this.movementAnimation,t=this.getWeaponAnimation(e);this.lastAnimation!==t&&(this.updateAnimation(e,t),this.running=!1,this.moving=e!=="Idle",this.moving&&We.runAnimation(!1),this.hasRifle&&this.rifle.updatePosition(1),ne.dispatch("Player::Run",!1,!0),ne.dispatch("Player::Aim",!1,!0))}run(e){if(this.blockingAnimation||this.running===e)return;const t=this.getWeaponAnimation("Run");if(!e||this.lastAnimation===t)return this.running=!1,Ln.moving?this.move():setTimeout(this.idle.bind(this),150);Ln.moves[ft.UP]&&(this.hasRifle&&this.rifle.updatePosition(1.5),ne.dispatch("Player::Run",!0,!0),this.running=this.moving=!0,this.updateAnimation("Run",t),We.runAnimation(!0),this.resetRotation(!0))}hit(e,t){if(this.dead||this.updateHealth(t)||this.hitting)return;this.aiming&&this.stopAiming(this.running);const i=this.getHitAnimation(e),n=+!this.equipRifle*100+1200;ne.dispatch("Player::Aim",!1,!0),this.updateAnimation("Idle",i),clearTimeout(this.reloadTimeout),We.isFPS&&(We.headAnimation(e,n*.5),this.equipRifle&&this.weapon.toggleVisibility(0,n+100,0)),this.playSound("hit",!0),this.weapon.stopReloading(),this.toggleMesh(!1),setTimeout(()=>{if(this.hitting=!1,this.dead)return this.toggleMesh(!0);Ln.runs?this.run(!0):this.move();const s=Ln.idle&&!this.equipRifle;ne.dispatch("Player::Aim",s,!0),setTimeout(this.toggleMesh.bind(this,!0),100)},n),this.reloading=!1,this.running=!1,this.hitting=!0,this.moving=!1}startAiming(e){if(this.blockingAnimation)return;this.weapon.aiming=this.aiming=!0,ne.dispatch("Player::Run",!1,!0),We.runAnimation(!1),We.aimAnimation(!0,this.equipRifle),We.updateNearPlane(!0,this.equipRifle);const t=this.equipRifle?"rifleAim":"pistolIdle";setTimeout(this.toggleMesh.bind(this,!0),300),this.aimTime=+this.equipRifle*Date.now(),clearTimeout(this.animTimeout),this.weapon.setAim(),this.lastAnimation!==t&&((this.equipRifle||e)&&(this.animTimeout=this.updateAnimation("Idle",t)),this.running=this.moving=!1),this.aimTimeout=setTimeout(()=>ne.dispatch("Player::Aim",!We.isFPS,!0),300+ +this.equipRifle*300),!this.equipRifle&&setTimeout(()=>{this.currentAnimation.paused=!0,this.setMixerTime(.5)},400)}stopAiming(e){if(this.reloading)return;this.equipRifle&&clearTimeout(this.aimTimeout);const t=Math.min(Date.now()-this.aimTime,400);ne.dispatch("Player::Aim",!this.equipRifle,!0),!e&&We.aimAnimation(!1,this.equipRifle,t),We.isFPS&&e?We.setNearPlane(+this.equipRifle*.185+.315,0):We.updateNearPlane(!1,this.equipRifle),setTimeout(()=>this.weapon.aiming=this.aiming=!1,100),this.weapon.aiming=this.aiming=!1,this.currentAnimation.paused=!1,this.weapon.cancelAim(t),clearTimeout(this.animTimeout),this.toggleMesh(!1)}startShooting(e=Date.now()){if(this.equipRifle&&!this.aiming||this.moving||this.hitting||this.reloading||e-this.aimTime<500||e-this.shootTime<165)return;this.shooting=!0,this.shootTime=e;const t=this.weapon.shoot();t&&this.rotate(t.x,t.y),!this.equipRifle&&this.stopShooting()}stopShooting(){this.shooting=!1}reload(){const e=this.moving;if(this.blockingAnimation||this.weapon.full||!this.weapon.inStock)return;ne.dispatch("Player::Run",!1,!0),this.updateAnimation("Idle","rifleReload");const t=+this.running*.02+.13;this.running=this.moving=!1,We.setNearPlane(t,400),this.weapon.startReloading(),We.runAnimation(!1),this.reloading=!0,this.toggleMesh(!0),this.reloadTimeout=setTimeout(()=>{Ln.idle&&(e||this.moving)&&this.weapon.stopReloading(),this.weapon.addAmmo(0),this.reloading=!1},2e3),this.animTimeout=setTimeout(()=>{this.dead||(this.toggleMesh(!1),this.weapon.stopReloading(),We.setNearPlane(.5,100),Ln.runs?this.run(!0):this.move())},2500)}setPistol(e=this.weapon.walls,t){if(this.setWeapon(!1),t)this.pistol=t,this.weapon=this.pistol,this.weapon.walls=e,this.weapon.visible=!0,this.hand?.add(this.weapon.object);else{const i=this.weapon.targets;this.weapon=this.pistol,this.updateRiflePosition(!0),this.weapon.visible=!0,this.weapon.walls=e,this.rifle.toggle=!1,this.setTargets(i)}}setRifle(){this.rifle.walls=this.weapon.walls;const e=this.weapon.targets;this.weapon.visible=!1,this.rifle.toggle=!0,this.weapon=this.rifle,this.setTargets(e),this.setWeapon(!0)}setWeapon(e){ne.dispatch("Weapon::Change",e);let t=e?this.lastAnimation.replace(Us.Pistol,Us.Rifle):this.lastAnimation.replace(Us.Rifle,Us.Pistol);!e&&!this.animations[t]&&(t=t.replace(/BackwardLeft|BackwardRight/gm,"Backward"),t=t.replace(/ForwardLeft|ForwardRight/gm,"Forward")),this.lastAnimation!==t&&this.updateAnimation(this.playerAnimation,t),this.equipRifle=e}setTargets(e){this.weapon.targets=e}changeCamera(e){if(!e)We.changeShoulder(this.aiming,this.equipRifle);else if(!this.hitting){const t=this.equipRifle&&!this.aiming||!We.isFPS&&this.aiming;We.changeView(this.running,this.aiming,this.equipRifle),!We.isFPS&&this.resetRotation(),this.toggleVisibility(),setTimeout(()=>{const i=!this.moving&&!t;ne.dispatch("Player::Aim",i,!0)},+t*300)}}resetRotation(e=!1){if(e){const t=this.mesh,i=new fi().setFromAxisAngle(ui.RIGHT,this.rotation.y);this.modelRotation.copy(t.quaternion),this.modelRotation.multiply(i),Me({targets:t.quaternion,easing:"easeInOutQuad",...this.modelRotation,duration:500})}else if(this.rotation.y<-.2){const t=this.rotation.y+.2;this.mesh.rotateOnAxis(ui.RIGHT,t)}}toggleMesh(e){We.isFPS&&this.equipRifle&&this.meshes.forEach(t=>t.material.opacity=+e)}toggleVisibility(){const e=+We.isFPS*250,t=+We.isFPS*150+250;this.weapon.toggleVisibility(e,t);const i=!(We.isFPS&&this.equipRifle&&!this.aiming);this.meshes.forEach(n=>{Me({targets:n.material,delay:e,easing:"linear",duration:100,opacity:0}),i&&setTimeout(()=>Me({targets:n.material,easing:"linear",duration:100,opacity:1}),t)})}changeWeapon(){if(!this.hasRifle||this.blockingAnimation)return;const e=!this.moving&&this.equipRifle;ne.dispatch("Player::Aim",e,!0),this.toggleMesh(!0),this.equipRifle?this.setPistol():this.setRifle(),We.updateNearPlane(this.aiming,this.equipRifle,this.running)}addRifle(e){this.rifle=e,this.rifle.toggle=!1,this.rifle.dummy.visible=!1,this.hand?.add(this.rifle.object),this.spine.add(this.rifle.dummy),this.updateRiflePosition(!0)}pickRifle(){this.rifle.dummy.visible=!this.equipRifle,this.updateRiflePosition(),this.rifle.addAmmo(),this.hasRifle||(this.rifle.addAmmo(0),this.hasRifle=!0)}updateRiflePosition(e=!1){const t=+this.running*.5+ +this.moving;e?this.rifle.append(t):this.rifle.updatePosition(t)}update(e){super.update(e),this.shooting&&this.startShooting()}updateAnimation(e,t,i=.1){return super.updateAnimation(e,t,i)}dispose(){clearTimeout(this.reloadTimeout),clearTimeout(this.animTimeout),clearTimeout(this.aimTimeout),this.pistol?.dispose(),this.weapon.dispose(),this.rifle.dispose(),delete this.pistol,delete this.hand,super.dispose()}die(){super.die();const e=+We.isFPS*500;We.isFPS&&this.changeCamera(!0),this.updateAnimation("Idle","death",.5),ne.dispatch("Player::Death",!0),ne.dispatch("Player::Aim",!1,!0),setTimeout(()=>ne.dispatch("Game::Quit",void 0,!0),e+5e3),clearTimeout(this.reloadTimeout),We.deathAnimation(e),this.weapon.stopReloading(),this.reloading=!1,this.shooting=!1,this.aiming=!1}getHitAnimation(e){return`${this.currentWeapon}${e}Hit`}getWeaponAnimation(e){return`${this.currentWeapon}${e}`}get blockingAnimation(){return this.aiming||this.hitting||this.reloading||super.blockingAnimation}get movementAnimation(){const e=Ln.moves;let t=e[ft.UP]?"Forward":e[ft.DOWN]?"Backward":"";return!this.equipRifle&&!t?t=e[ft.LEFT]?"Left":e[ft.RIGHT]?"Right":t:this.equipRifle&&(t+=e[ft.LEFT]?"Left":e[ft.RIGHT]?"Right":""),t||"Idle"}get playerAnimation(){return this.lastAnimation.replace(this.currentWeapon,"")}get meshes(){return this.mesh.children[0].children[0].children}get location(){return{position:this.position,rotation:fg(Math.atan2(-this.rotation.x,this.rotation.z))}}get currentWeapon(){return this.equipRifle?Us.Rifle:Us.Pistol}get spine(){return this.mesh.children[0].children[1].children[0]}}class i1{update=this.updateScreen.bind(this);callbacks=[];root;ratio=16/9;height=0;width=0;constructor(){typeof window<"u"&&(this.root=document.documentElement.style,this.root.setProperty("--ratio",`${this.ratio}`),window.addEventListener("resize",this.update,!1),this.updateScreen())}updateScreen(){this.width=window.innerWidth,this.height=window.innerHeight,this.width/this.height<this.ratio?this.height=this.width/this.ratio:this.width=this.height*this.ratio,this.root.setProperty("--height",`${this.height}px`),this.root.setProperty("--width",`${this.width}px`);for(let e=this.callbacks.length;e--;)this.callbacks[e](this.width,this.height)}addResizeCallback(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}removeResizeCallback(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){window.removeEventListener("resize",this.update,!1),this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}var n1=new i1;class s1{constructor(e,t,i=0,n=1/0){this.ray=new lh(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return lu(e,this,i,t),i.sort(Hm),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)lu(e[n],this,i,t);return i.sort(Hm),i}}function Hm(r,e){return r.distance-e.distance}function lu(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)lu(n[s],e,t,!0)}}class Cl extends ci{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=i/2;let p=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){const S=new L,v=new L;let M=0;const T=(t-e)/i;for(let C=0;C<=s;C++){const b=[],w=C/s,F=w*(t-e)+e;for(let U=0;U<=n;U++){const P=U/n,N=P*l+o,z=Math.sin(N),q=Math.cos(N);v.x=F*z,v.y=-w*i+g,v.z=F*q,u.push(v.x,v.y,v.z),S.set(z,T,q).normalize(),d.push(S.x,S.y,S.z),f.push(P,1-w),b.push(m++)}x.push(b)}for(let C=0;C<n;C++)for(let b=0;b<s;b++){const w=x[b][C],F=x[b+1][C],U=x[b+1][C+1],P=x[b][C+1];h.push(w,F,P),h.push(F,U,P),M+=6}c.addGroup(p,M,0),p+=M}function y(S){const v=m,M=new Ee,T=new L;let C=0;const b=S===!0?e:t,w=S===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const F=m;for(let U=0;U<=n;U++){const N=U/n*l+o,z=Math.cos(N),q=Math.sin(N);T.x=b*q,T.y=g*w,T.z=b*z,u.push(T.x,T.y,T.z),d.push(0,w,0),M.x=z*.5+.5,M.y=q*.5*w+.5,f.push(M.x,M.y),m++}for(let U=0;U<n;U++){const P=v+U,N=F+U;S===!0?h.push(N,N+1,P):h.push(N+1,N,P),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cu extends Cl{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new cu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}var hu=[{bullet:!0,bulletPath:!1,bulletHoles:!1,fog:!0,volumetricFog:!1,raining:!0,raindrops:!1,softParticles:!1,clouds:0,dynamicClouds:!1,lighting:!1,physicalLights:!1},{bullet:!0,bulletPath:!1,bulletHoles:!0,fog:!1,volumetricFog:!1,raining:!0,raindrops:!0,softParticles:!1,clouds:300,dynamicClouds:!0,lighting:!0,physicalLights:!1},{bullet:!0,bulletPath:!0,bulletHoles:!0,fog:!0,volumetricFog:!0,raining:!0,raindrops:!0,softParticles:!0,clouds:1,dynamicClouds:!1,lighting:!0,physicalLights:!0}];const Gm=0,Wm=hu[Gm],{length:r1}=Object.keys(Wm),uu=r1;var a1=(r=>(r[r.LOW=uu+0]="LOW",r[r.MEDIUM=uu+1]="MEDIUM",r[r.HIGH=uu+2]="HIGH",r))(a1||{});class Je{static visuals=Je.getDefaultVisualValues();constructor(){this.openDBConnection(this.getEnviromentSettings.bind(this))}updateVisualsStore(e,t=!0,i=Wm){const n=e.transaction("Visuals","readwrite"),s=n.objectStore("Visuals");for(const a in i){const o=a;Je.visuals.set(o,i[o]),s[t?"add":"put"](i[o],o).onerror=this.onQueryError.bind(this)}n.oncomplete=this.onTransactionComplete.bind(this,e,!1)}getEnviromentSettings(e,t=!1){const i=e.transaction("Visuals","readonly"),n=i.objectStore("Visuals");n.openCursor().onsuccess=s=>{const a=s.target.result;if(!a)return t?null:this.updateVisualsStore(e);const o=a.key;Je.visuals.set(o,a.value),a.continue(),t=!0},i.oncomplete=this.onTransactionComplete.bind(this,e,!0)}updateVisualValues(e){this.openDBConnection(t=>this.updateVisualsStore(t,!1,e))}onTransactionComplete(e,t){t&&ne.dispatch("Game::SettingsInit"),e.close()}onUpgradeNeeded(e){e.target.result.createObjectStore("Visuals")}openDBConnection(e){const t=indexedDB.open("YAZH");t.onerror=this.onRequestError.bind(this),t.onupgradeneeded=this.onUpgradeNeeded.bind(this),t.onsuccess=i=>{const n=i.target.result;e(n)}}resetVisualValues(e){this.updateVisualValues(hu[e])}onRequestError(e){console.error("Settings DB Request Error:",e)}onQueryError(e){console.error("Settings DB Query Error:",e)}static getDefaultVisualValues(e=Gm){return new Map(Object.entries(hu[e]))}static getVisualValue(e){return Je.visuals.get(e)}static getVisualValues(){return Je.visuals}}const o1=10;class l1{constructor(e){this.config=e,this.acceleration=e.speed*Kf,this.speed=1/this.acceleration,this.createBullet()}bullet;speed;width=1;height=.3;radius=.1;segments=8;acceleration;rotation=new fi;pivot=new Ke().makeTranslation(0,this.width*-.5,0);async createBullet(){const e=await $e.Loader.loadTexture("bullet.png");this.bullet=new ht(new cu(this.radius,this.height,this.segments),new Ih({map:e})),this.bullet.scale.setScalar(this.config.scale),Je.getVisualValue("bulletPath")&&this.bullet.add(await this.createPath())}async createPath(){const e=this.radius*1.2,t=await $e.Loader.loadShader("main.vert"),i=await $e.Loader.loadShader("shot/bullet.frag"),n=new ht(new Cl(e,e,this.width,this.segments,1,!0),new Fi({uniforms:{color:{value:new De(At.WHITE)},traces:{value:0},time:{value:0}},fragmentShader:i,vertexShader:t,glslVersion:pr,transparent:!0,depthWrite:!1,side:Gi}));return n.geometry.applyMatrix4(this.pivot),n.position.y-=this.height/2,n.scale.y=0,n}shoot(e,t){const i=this.config.position.z,{lifeTime:n}=this.config,s=this.bullet.clone(),a=+!t*.01+.01;return s.userData.direction=e.direction.clone(),s.userData.lifeTime=Date.now()+n,ne.dispatch("Level::AddObject",s),Nt.getWorldQuaternion(this.rotation),s.userData.direction.y+=a,s.quaternion.copy(this.rotation),s.position.copy(e.origin),s.rotateX(-1.56),s.translateY(i),s}update(e){const t=e.children[0];if(e.position.addScaledVector(e.userData.direction,this.acceleration),e.rotateY(.5),!t)return;const i=t.material;t.scale.y>=o1?i.uniforms.time.value+=.1:i.uniforms.traces.value=t.scale.y+=this.acceleration}dispose(){const e=this.bullet.material,t=this.bullet.children[0];t?.material?.dispose(),this.bullet.geometry.dispose(),e.map?.dispose(),t?.geometry.dispose(),e.dispose(),this.bullet.clear()}}class c1 extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xm=new Ke,du=new lh,Pl=new vr,Ll=new L;class $m extends Wt{constructor(e=new ci,t=new c1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(n),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;Xm.copy(n).invert(),du.copy(e.ray).applyMatrix4(Xm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Ll.fromBufferAttribute(u,g),jm(Ll,g,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Ll.fromBufferAttribute(u,m),jm(Ll,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jm(r,e,t,i,n,s,a){const o=du.distanceSqToPoint(r);if(o<t){const l=new L;du.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Il{constructor(e=by){this.lerp=e}length=0;points=[];addPoint(e,t){this.length=this.points.push([e,t])}getValue(e){let t=0;for(let n=0;n<this.length&&!(this.points[n][0]>=e);n++)t=n;const i=Math.min(this.length-1,t+1);return t===i?this.points[t][1]:this.lerp(this.points[t][1],this.points[i][1],(e-this.points[t][0])/(this.points[i][0]-this.points[t][0]))}dispose(){this.length=this.points.length=0}}const h1=Math.tan(Ze.d6)*2,u1=[0,0,0];class d1{constructor(e,t,i){this.config=e,this.geometry=new ci,this.createFireLight(t),this.createParticleGeometry(),this.createParticles(t,i)}smokeParticles=[];fireParticles=[];smokeAlpha=new Il;smokeSize=new Il;fireAlpha=new Il;material;light;geometry;lightPower=0;createFireLight(e){const{intensity:t,position:{x:i,y:n}}=this.config,s=+Je.getVisualValue("physicalLights")+1;this.light=new Yf(At.FIRE,t*(3-s),1,s),this.lightPower=this.light.power,this.light.position.set(i,n,0),this.light.castShadow=!0,this.light.power=0,e.add(this.light)}createParticleGeometry(){this.geometry.setAttribute("smokeAngle",new Xe([],1)),this.geometry.setAttribute("smokeAlpha",new Xe([],1)),this.geometry.setAttribute("smokeSize",new Xe([],1)),this.geometry.setAttribute("fireAngle",new Xe([],1)),this.geometry.setAttribute("fireSize",new Xe([],1)),this.geometry.setAttribute("position",new Xe([],3)),this.geometry.setAttribute("blend",new eh([],1)),this.fireAlpha.addPoint(0,0),this.fireAlpha.addPoint(.2,1),this.fireAlpha.addPoint(.5,1),this.fireAlpha.addPoint(1,0),this.smokeAlpha.addPoint(0,0),this.smokeAlpha.addPoint(.1,.1),this.smokeAlpha.addPoint(.5,.1),this.smokeAlpha.addPoint(1,0),this.smokeSize.addPoint(0,0),this.smokeSize.addPoint(.8,this.config.scale*.1),this.smokeSize.addPoint(1,this.config.scale*.12)}async createParticles(e,t){const i=await $e.Loader.loadTexture(`${t}/smoke.png`),n=await $e.Loader.loadTexture(`${t}/fire.png`),s=await $e.Loader.loadShader("shot/fire.vert"),a=await $e.Loader.loadShader("shot/fire.frag");this.material=new Fi({blendDst:Fc,blendEquation:gs,blending:Vd,fragmentShader:a,vertexShader:s,blendSrc:Wd,glslVersion:pr,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{smoke:{value:i},ratio:{value:null},fire:{value:n}}});const o=new $m(this.geometry,this.material);o.position.x=this.config.position.x,o.position.y=this.config.position.y,o.renderOrder=2,e.add(o)}addParticles(){this.addFireParticle(),this.addSmokeParticles()}addFireParticle(){const e=Math.random()*.1+.1,t=this.config.scale*(Math.random()*.1+.15);this.fireParticles.push({rotation:Math.random()*Ze.m2,currentSize:t,maxLife:e,life:e,size:t,blend:0,alpha:0})}addSmokeParticles(){const[e,t]=this.config.particles,i=yh(e,t);for(let n=i;n--;){const s=this.config.velocity*(i-n),a=Math.random()*.1+.4,o=this.config.scale*a;this.smokeParticles.push({rotation:Math.random()*Ze.m2,position:new L,currentSize:0,life:o,velocity:s,maxLife:o,blend:1,alpha:0})}}update(){this.updateParticles();const{length:e}=this.fireParticles;return this.light.power=e*this.lightPower,e?this.updateFireGeometry():this.updateSmokeGeometry(),!!(e||this.smokeParticles.length)}updateParticles(e=Kf){for(let t=this.fireParticles.length;t--;){const i=this.fireParticles[t];if((i.life-=.05)<=0)continue;const n=1-i.life/i.maxLife,s=this.fireAlpha.getValue(n);i.currentSize=i.size*s,i.alpha=s,i.rotation+=.025}this.fireParticles=this.fireParticles.filter(t=>t.life>0);for(let t=this.smokeParticles.length;t--;){const i=this.smokeParticles[t];if((i.life-=.01)<=0)continue;const n=1-i.life/i.maxLife;i.currentSize=this.smokeSize.getValue(n),i.alpha=this.smokeAlpha.getValue(n);const s=(t%2*2-1)*e,a=i.velocity*e;i.rotation+=s,i.position.y+=a,i.velocity-=a}this.smokeParticles=this.smokeParticles.filter(t=>t.life>0)}updateFireGeometry(){const e=[],t=[],i=[];for(let n=this.fireParticles.length;n--;){const s=this.fireParticles[n];e.push(s.rotation),i.push(s.currentSize),t.push(s.blend)}this.geometry.setAttribute("fireAngle",new Xe(e,1)),this.geometry.setAttribute("fireSize",new Xe(i,1)),this.geometry.setAttribute("position",new Xe(u1,3)),this.geometry.setAttribute("blend",new eh(t,1)),this.geometry.attributes.fireAngle.needsUpdate=!0,this.geometry.attributes.fireSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}updateSmokeGeometry(){const e=[],t=[],i=[],n=[],s=[];for(let a=this.smokeParticles.length;a--;){const o=this.smokeParticles[a],{x:l,y:c,z:h}=o.position;t.push(o.rotation),s.push(o.currentSize),i.push(o.alpha),n.push(o.blend),e.push(l,c,h)}this.geometry.setAttribute("smokeAngle",new Xe(t,1)),this.geometry.setAttribute("smokeAlpha",new Xe(i,1)),this.geometry.setAttribute("smokeSize",new Xe(s,1)),this.geometry.setAttribute("position",new Xe(e,3)),this.geometry.setAttribute("blend",new eh(n,1)),this.geometry.attributes.smokeAngle.needsUpdate=!0,this.geometry.attributes.smokeAlpha.needsUpdate=!0,this.geometry.attributes.smokeSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}resize(e){this.material.uniforms.ratio.value=e/h1}dispose(){this.material.uniforms.smoke.value.dispose(),this.material.uniforms.fire.value.dispose(),this.smokeParticles.splice(0),this.fireParticles.splice(0),this.smokeAlpha.dispose(),this.smokeSize.dispose(),this.fireAlpha.dispose(),this.geometry.dispose(),this.material.dispose(),this.light.dispose()}}class f1 extends ki{constructor(e,t,i,n){super();const s=[],a=[],o=[],l=new I,c=new Ae;c.makeRotationFromEuler(i),c.setPosition(t);const h=new Ae;h.copy(c).invert(),u(),this.setAttribute("position",new un(s,3)),this.setAttribute("normal",new un(a,3)),this.setAttribute("uv",new un(o,2));function u(){let x=[];const g=new I,p=new I,_=e.geometry,y=_.attributes.position,S=_.attributes.normal;if(_.index!==null){const v=_.index;for(let M=0;M<v.count;M++)g.fromBufferAttribute(y,v.getX(M)),p.fromBufferAttribute(S,v.getX(M)),d(x,g,p)}else for(let v=0;v<y.count;v++)g.fromBufferAttribute(y,v),p.fromBufferAttribute(S,v),d(x,g,p);x=f(x,l.set(1,0,0)),x=f(x,l.set(-1,0,0)),x=f(x,l.set(0,1,0)),x=f(x,l.set(0,-1,0)),x=f(x,l.set(0,0,1)),x=f(x,l.set(0,0,-1));for(let v=0;v<x.length;v++){const M=x[v];o.push(.5+M.position.x/n.x,.5+M.position.y/n.y),M.position.applyMatrix4(c),s.push(M.position.x,M.position.y,M.position.z),a.push(M.normal.x,M.normal.y,M.normal.z)}}function d(x,g,p){g.applyMatrix4(e.matrixWorld),g.applyMatrix4(h),p.transformDirection(e.matrixWorld),x.push(new qm(g.clone(),p.clone()))}function f(x,g){const p=[],_=.5*Math.abs(n.dot(g));for(let y=0;y<x.length;y+=3){let S=0,v,M,T,C;const b=x[y+0].position.dot(g)-_,w=x[y+1].position.dot(g)-_,F=x[y+2].position.dot(g)-_,U=b>0,P=w>0,N=F>0;switch(S=(U?1:0)+(P?1:0)+(N?1:0),S){case 0:{p.push(x[y]),p.push(x[y+1]),p.push(x[y+2]);break}case 1:{if(U&&(v=x[y+1],M=x[y+2],T=m(x[y],v,g,_),C=m(x[y],M,g,_)),P){v=x[y],M=x[y+2],T=m(x[y+1],v,g,_),C=m(x[y+1],M,g,_),p.push(T),p.push(M.clone()),p.push(v.clone()),p.push(M.clone()),p.push(T.clone()),p.push(C);break}N&&(v=x[y],M=x[y+1],T=m(x[y+2],v,g,_),C=m(x[y+2],M,g,_)),p.push(v.clone()),p.push(M.clone()),p.push(T),p.push(C),p.push(T.clone()),p.push(M.clone());break}case 2:{U||(v=x[y].clone(),M=m(v,x[y+1],g,_),T=m(v,x[y+2],g,_),p.push(v),p.push(M),p.push(T)),P||(v=x[y+1].clone(),M=m(v,x[y+2],g,_),T=m(v,x[y],g,_),p.push(v),p.push(M),p.push(T)),N||(v=x[y+2].clone(),M=m(v,x[y],g,_),T=m(v,x[y+1],g,_),p.push(v),p.push(M),p.push(T));break}}}return p}function m(x,g,p,_){const y=x.position.dot(p)-_,S=g.position.dot(p)-_,v=y/(y-S);return new qm(new I(x.position.x+v*(g.position.x-x.position.x),x.position.y+v*(g.position.y-x.position.y),x.position.z+v*(g.position.z-x.position.z)),new I(x.normal.x+v*(g.normal.x-x.normal.x),x.normal.y+v*(g.normal.y-x.normal.y),x.normal.z+v*(g.normal.z-x.normal.z)))}}}class qm{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class p1{orientation=new Xi;rotation=new Ke;position=new L;holes=[];origin=new L;scale=new L;material;surface=["defaultMaterial002_24","defaultMaterial002_39"];constructor(e,t){this.scale.setScalar(t*.5),$e.Loader.loadTexture(`${e}/hole.png`).then(i=>{this.material=new Vp({polygonOffsetFactor:-.1,polygonOffset:!0,transparent:!0,depthWrite:!1,depthTest:!0,map:i})})}show(e){if(this.surface.includes(e.object.name))return;this.position.copy(e.point),this.origin.copy(this.position),this.origin.add(e.face.normal),this.rotation.lookAt(this.origin,this.position,ui.UP),this.orientation.setFromRotationMatrix(this.rotation),this.orientation.z=Math.random()*Ze.m2;const t=new f1(e.object,e.point,this.orientation,this.scale);this.holes.push(new ht(t,this.material.clone()));const i=this.holes.length-1,n=this.holes[i];ne.dispatch("Level::AddObject",n),Me({complete:this.remove.bind(this,i),targets:n.material,easing:"linear",duration:1e3,opacity:0,delay:5e3})}remove(e){if(!this.holes[e])return;const t=this.holes[e];t.material.map?.dispose(),t.material.dispose(),t.geometry.dispose(),delete this.holes[e],ne.dispatch("Level::RemoveObject",t)}dispose(){for(let e=this.holes.length;e--;)this.remove(e);this.material.dispose(),this.holes.splice(0)}}class m1{raf;paused=!0;lastTime=0;callbacks=[];onUpdate=this.update.bind(this);add(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}update(e){this.raf=requestAnimationFrame(this.onUpdate);const t=e-(this.lastTime||0);for(let i=this.callbacks.length;i--;)this.callbacks[i](t,e);this.lastTime=e}remove(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){cancelAnimationFrame(this.raf),this.callbacks.length=0}set pause(e){this.paused!==e&&((this.paused=e)?cancelAnimationFrame(this.raf):this.raf=requestAnimationFrame(this.onUpdate))}}var Ni=new m1;class Ym{constructor(e){this.config=e,Je.getVisualValue("bullet")&&(this.bullet=new l1(e.bullet)),this.magazine=e.magazine,this.loadedAmmo=e.ammo,this.totalAmmo=e.ammo}onUpdate=this.updateAimSign.bind(this);onShoot=this.updateBullets.bind(this);bullets=new Map;hits=[];raycaster=new s1;camera=new L;offset=new L;origin=new L;targets=[];magazine;walls=[];bullet;loadedAmmo;totalAmmo;weapon;aimed=!1;aiming=!1;fire;hole;async load(e){const{emissive:t=At.BLACK,emissiveIntensity:i=1}=this.config;this.weapon=(await $e.Loader.loadGLTF(this.config.model)).scene,this.weapon.traverse(s=>{const a=s,o=a.material;a.isMesh&&(a.castShadow=a.receiveShadow=!0,a.material=new Ih({emissiveIntensity:i,transparent:!0,map:o.map,side:Ei,roughness:.75,metalness:.25,emissive:t,envMap:e}))}),this.weapon.position.copy(this.config.position),this.weapon.rotation.copy(this.config.rotation),this.weapon.scale.copy(this.config.scale);const n=this.weapon.clone();return this.fire=new d1(this.config.fire,this.weapon,this.config.textures),Je.getVisualValue("bulletHoles")&&(this.hole=new p1(this.config.textures,this.config.bullet.scale)),n}playSound(e,t){const{stop:i,pistol:n,delay:s}=t;i&&this.stopSound(e,n),ne.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!0,sfx:e,delay:s,pistol:n},!0)}stopSound(e,t){ne.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!1,sfx:e,pistol:t},!0)}updateRaycaster(e=!0,t=this.targets){this.camera.setFromMatrixPosition(Nt.matrixWorld),this.raycaster.ray.origin.copy(e?this.camera.clone().add(this.spread):this.camera),this.raycaster.ray.direction.copy(ui.FORWARD).unproject(Nt).sub(this.camera).normalize(),this.hits.splice(0)&&this.raycaster.intersectObjects(t,!1,this.hits)}toggleAimSign(e=!1){ne.dispatch("Weapon::Aim",e,!0),this.aimed=e}removeBullet(e){const t=this.bullets.get(e);t&&(t.clear(),this.bullets.delete(e),ne.dispatch("Level::RemoveObject",t))}getEvent(e){return e?e===1?"Hit::Body":"Hit::Leg":"Hit::Head"}updateAimSign(){if(!this.aiming)return this.aimed&&this.toggleAimSign(!1);this.updateRaycaster(!1);const e=!!this.hits.length;this.aimed!==e&&this.toggleAimSign(e)}startReloading(){}stopReloading(){}resize(e){this.fire?.resize(e)}addAmmo(){}animateRecoil(){const{x:e,y:t}=this.weapon.position,i=this.recoil;return Me({targets:this.weapon.rotation,easing:"easeInOutSine",direction:"alternate",z:i.y/5,duration:50}),Me({targets:this.weapon.position,easing:"easeInOutSine",direction:"alternate",y:t-i.y*7.5,x:e-i.y*15,duration:50}),i}updateBullets(){!this.fire.update()&&Ni.remove(this.onShoot),this.bullets.forEach((e,t)=>{Date.now()<e.userData.lifeTime?this.bullet.update(e):this.removeBullet(t)})}shoot(){if(this.empty)return this.playSound("empty",{stop:!1});const e=this.target,t=this.targets[e],i=this.animateRecoil();let n;if(!this.bullets.size&&Ni.add(this.onShoot),ne.dispatch("Player::Shoot",!0,!0),this.bullet){const{ray:h}=this.raycaster;n=this.bullet.shoot(h,this.aiming),this.bullets.set(n.uuid,n)}if(this.fire.addParticles(),this.loadedAmmo--,this.totalAmmo--,this.playSound("shoot",{stop:!0}),this.playSound("bullet",{stop:!1,delay:.5}),e<0)return this.updateRaycaster(!1,this.walls),this.hits.length&&this.hole?.show(this.hits[0]),i;const s=e%6,a=this.getEvent(s),o=!s&&Math.random()<this.config.headshot,l=o&&100||this.getDamage(s);n&&this.removeBullet(n.uuid);const{enemy:c}=t.userData;return ne.dispatch(a,{enemy:c,damage:l,headshot:o}),i}dispose(){this.bullets.forEach((e,t)=>{const i=e.children[0],n=e.material;i.material.dispose(),n.map?.dispose(),e.geometry.dispose(),n.dispose(),i.geometry.dispose(),this.removeBullet(t)}),Ni.remove(this.onUpdate),Ni.remove(this.onShoot),this.bullet?.dispose(),this.targets.splice(0),this.walls.splice(0),this.hole?.dispose(),this.weapon.clear(),this.fire.dispose()}set visible(e){Ni[e?"add":"remove"](this.onUpdate),this.weapon.children[0].visible=e}get originOffset(){const{x:e,y:t}=this.config.bullet.position;return this.aiming?t:e}get spread(){let{x:e,y:t}=this.config.spread;const i=+!this.aiming*.5+.5;return e=qt(-e,e)*i,t=qt(-t,t)*i,this.offset.set(e,t-.003,0)}get recoil(){const{x:e,y:t}=this.config.recoil,i=+!this.aiming*.5+.5;return{x:qt(-e,e)*i,y:t*i}}get target(){return this.updateRaycaster(),this.weapon.getWorldPosition(this.origin),this.origin.y+=this.originOffset,this.raycaster.ray.origin.copy(this.origin),this.hits.length?this.targets.indexOf(this.hits[0].object):-1}get inStock(){return this.totalAmmo-this.loadedAmmo}get empty(){return!this.loadedAmmo}get full(){return this.loadedAmmo===this.magazine}get object(){return this.weapon}}class g1 extends Ym{position=ve.Pistol.position;rotation=ve.Pistol.rotation;damage=ve.Gameplay.damage.pistol;constructor(e){super(ve.Pistol),this.load(e)}playSound(e,t){super.playSound(e,{...t,pistol:!0})}stopSound(e){super.stopSound(e,!0)}setAim(){Me({targets:this.object.rotation,y:this.rotation.y+.015,x:this.rotation.x,easing:"linear",duration:200,delay:200,z:-.06}),Me({targets:this.object.position,x:this.position.x,z:this.position.z,easing:"linear",duration:200,delay:200,y:-4.45})}cancelAim(e){Me({targets:this.object.rotation,x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,easing:"linear",duration:e}),Me({targets:this.object.position,x:this.position.x,y:this.position.y,z:this.position.z,easing:"linear",duration:e})}toggleVisibility(e,t,i=100){this.object.children[0].children.forEach(n=>{const{material:s}=n;Me({targets:s,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>Me({targets:s,easing:"linear",opacity:1,duration:i}),t)})}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}dispose(){super.dispose()}}class x1 extends Ym{spinePosition=ve.Rifle.spinePosition;spineRotation=ve.Rifle.spineRotation;position=ve.Rifle.position;rotation=ve.Rifle.rotation;damage=ve.Gameplay.damage.rifle;maxStock=ve.Rifle.maxStock;appended=!1;spawned=!1;clone;spine;constructor(e){super(ve.Rifle),this.load(e)}async load(e){const t=await super.load(e);return this.spine=t.clone(),t.scale.copy(ve.Rifle.worldScale),ne.dispatch("Level::AddObject",t),t.rotation.set(0,0,0),t.visible=!1,this.clone=t,t}setAim(){this.object.rotation.set(this.rotation.x-.1,Math.PI-.028,-.1),this.object.position.set(this.position.x,-1,-2)}cancelAim(){Me({targets:this.object.rotation,easing:"easeInOutSine",x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,duration:50,delay:50}),Me({targets:this.object.position,easing:"easeInOutSine",x:this.position.x,y:this.position.y,z:this.position.z,duration:50,delay:50})}toggleVisibility(e,t,i=100){const{material:n}=this.object.children[0];Me({targets:n,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>Me({targets:n,easing:"linear",opacity:1,duration:i}),t)}addAmmo(e=ve.Rifle.magazine){if(e){this.playSound("pick",{stop:!1});const t=Math.min(this.inStock+e,this.maxStock);this.totalAmmo=t+ +!this.empty*this.loadedAmmo}else{const t=Math.min(Math.min(this.magazine-this.loadedAmmo,this.magazine),this.totalAmmo);this.loadedAmmo+=t,ne.dispatch("Weapon::Reload",{loaded:this.loadedAmmo,inStock:this.inStock,ammo:this.totalAmmo})}}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}startReloading(){this.object.position.set(this.position.x,this.position.y,0),this.object.rotation.set(this.rotation.x,this.rotation.y,0),this.playSound("reload",{stop:!0})}stopReloading(){!this.aiming&&this.reset()}update(e){if(!this.spawned)return;this.clone.rotation.y-=.025;const t=this.clone.position.distanceToSquared(e);this.inStock<this.maxStock&&t<6.25&&(ne.dispatch("Player::PickRifle",this.clone),ne.dispatch("Rifle::Pick",null,!0),this.clone.visible=!1,this.spawned=!1)}spawn(e){this.clone.position.set(e[0],1.75,e[1]),ne.dispatch("Rifle::Spawn",e,!0),this.clone.visible=!0,this.spawned=!0}updatePosition(e){this.appended&&Me({targets:this.spine.position,duration:+!e*100,x:e*10-10,easing:"linear"})}append(e){this.spine.position.copy(this.spinePosition),this.spine.rotation.copy(this.spineRotation),this.appended=!0,this.updatePosition(e)}reset(){this.object.position.copy(this.position),this.object.rotation.copy(this.rotation),this.appended=!1}dispose(){this.clone.clear(),super.dispose()}set toggle(e){this.spine.visible=!e,this.visible=e}get onStage(){return this.spawned}get dummy(){return this.spine}}class Dl{fps=!1;runTimeout=0;runDelta;shakeDuration=0;rightShoulder=!0;position=new L;static state;shakePower=.025;clock=new Op;shakeAttenuation=1;camera;onRunning=this.run.bind(this);fpRifleAim=new L(-.1541,1.524,.5);constructor(){const e=n1.size.ratio;this.camera=new hi(45,e,+this.fps*.215+.1),this.camera.far=ve.Level.depth,this.setCamera(),this.updateState()}setCamera(){const e=this.getPosition(),t=+!this.fps*2.5+22.5;this.camera.rotation.set(0,Math.PI,0),this.camera.setFocalLength(t),this.camera.position.copy(e)}updateState(){const{aspect:e,near:t,far:i,fov:n}=this.camera;Dl.state={matrix:this.camera.matrixWorld,aspect:e,near:t,far:i,fov:n}}getPosition(e=!1,t=!1,i=!1){if(this.fps&&t&&i)return this.fpRifleAim;const{idle:n,run:s,aim:a}=ve.Camera[this.fps?"fps":"tps"];return this.position.copy(e?s:t?a:n),this.position.x-=+(!this.fps&&this.rightShoulder&&t&&i)*.125,this.position.x*=+(!this.fps&&!this.rightShoulder)*-2+1,this.position}changeView(e,t,i){this.fps=!this.fps,this.updateNearPlane(t,i);const{x:n,y:s,z:a}=this.getPosition(e,t,i);Me({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:n,y:s,z:a})}updateNearPlane(e,t,i){const s=+(this.camera.near===.5)*-300+400,a=e?.03:this.fps?t?.5:.315:.1;this.fps&&i&&t&&(this.camera.position.z=.2),this.camera.near!==a&&this.setNearPlane(a,s)}setNearPlane(e,t){Me({complete:()=>this.camera.updateProjectionMatrix(),update:()=>this.camera.updateProjectionMatrix(),targets:this.camera,easing:"linear",duration:t,near:e})}changeShoulder(e,t){if(this.fps)return;let{x:i}=this.camera.position;this.rightShoulder=!this.rightShoulder,e&&t&&(i=ve.Camera.tps.aim.x,i-=+this.rightShoulder*.125,i*=+this.rightShoulder*-2+1),Me({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:-i})}aimAnimation(e,t,i=400){const{x:n,y:s,z:a}=this.getPosition(!1,e,t);e&&Ni.remove(this.onRunning),e&&Me({targets:this.camera.rotation,easing:"linear",duration:250,y:Math.PI}),Me({targets:this.camera.position,easing:"easeInOutQuad",delay:+e*100,duration:i,x:n,y:s,z:a})}headAnimation(e,t){const{x:i,y:n,z:s}=this.camera.position,{x:a,y:o,z:l}=this.camera.rotation,c={x:0,y:0,z:0},h={x:0,y:0,z:0};switch(e){case"Front":c.y=.2,h.x=-.2;break;case"Left":c.x=-.5,c.y=.5,h.x=.5,h.y=-1;break;case"Right":c.x=.36,c.y=-.2,h.x=.5,h.y=.55;break}Me({targets:this.camera.position,direction:"alternate",easing:"easeOutSine",duration:t,x:i+c.x,y:n+c.y,z:s+c.z}),Me({targets:this.camera.rotation,direction:"alternate",easing:"easeOutSine",duration:t,x:a+h.x,y:o+h.y,z:l+h.z})}shakeAnimation(e){if(this.shakeDuration=Math.max(e,0),this.shakeDuration){const t=this.clock.getDelta(),i=ui.random().multiplyScalar(this.shakePower);setTimeout(()=>this.shakeAnimation(this.shakeDuration),t),this.shakeDuration-=t*this.shakeAttenuation,this.camera.position.add(i)}else this.camera.position.copy(this.getPosition())}runAnimation(e){if(e&&this.runTimeout)return;this.runTimeout=e?setTimeout(()=>Ni.add(this.onRunning),500):this.dispose();const t=this.getPosition(e),{x:i,y:n,z:s}=t;this.runDelta=0,!this.camera.position.equals(t)&&Me({targets:this.camera.position,easing:"easeOutQuad",duration:300,x:i,y:n,z:s})}run(){this.runDelta+=.25;const e=+this.fps+1,t=Math.sin(this.runDelta),i=Math.cos(this.runDelta/2);this.camera.position.y+=t*e/100,this.camera.rotation.y-=i*e/500}deathAnimation(e){const{x:t,z:i}=ve.Camera.tps.idle;Me({targets:this.camera.position,easing:"easeInOutQuad",duration:500,z:i-1,y:.75,delay:e,x:t})}setTo(e){e.add(this.camera)}resize(){this.camera.updateProjectionMatrix()}dispose(){return clearTimeout(this.runTimeout),Ni.remove(this.onRunning),0}static get config(){return Dl.state}get object(){return this.camera}get isFPS(){return this.fps}}const Km=new Dl,Nt=Km.object;var We=Km;const fu=new Ae;class Fl{constructor(e){e=e||{},this.vertices={near:[new I,new I,new I,new I],far:[new I,new I,new I,new I]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return fu.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(n){n.applyMatrix4(fu)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(n){n.applyMatrix4(fu);const s=Math.abs(n.z);i?n.z*=Math.min(t/s,1):n.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new Fl);t.length=e.length;for(let i=0;i<e.length;i++){const n=t[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const Zm=new Ae,pu=new Fl,In=new I,$a=new Vt,mu=[],gu=[],xu=new Ae,Jm=new Ae,y1=new I(0,1,0);class _1{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new I(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Fl,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new Fd(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const n=this.lights[t].shadow.camera,s=this.frustums[t],a=s.vertices.near,o=s.vertices.far,l=o[0];let c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),m=.25*Math.pow(f,2)*(d-u.near);h+=m}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":n(this.cascades,e.near,t,this.breaks);break;case"practical":s(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function n(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function s(a,o,l,c,h){mu.length=0,gu.length=0,n(a,o,l,gu),i(a,o,l,mu);for(let u=1;u<a;u++)h.push(Hu.lerp(mu[u-1],gu[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;xu.lookAt(new I,this.lightDirection,y1),Jm.copy(xu).invert();for(let i=0;i<t.length;i++){const n=this.lights[i],s=n.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,o=(s.top-s.bottom)/this.shadowMapSize;Zm.multiplyMatrices(Jm,e.matrixWorld),t[i].toSpace(Zm,pu);const l=pu.vertices.near,c=pu.vertices.far;$a.makeEmpty();for(let h=0;h<4;h++)$a.expandByPoint(l[h]),$a.expandByPoint(c[h]);$a.getCenter(In),In.z=$a.max.z+this.lightMargin,In.x=Math.floor(In.x/a)*a,In.y=Math.floor(In.y/o)*o,In.applyMatrix4(xu),n.position.copy(In),n.target.position.copy(In),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,n=this.shaders;e.onBeforeCompile=function(s){const a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},n.set(e,s)},n.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){const s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=e}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new rt);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],n=this.breaks[t-1]||0;e[t].x=n,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}class yu extends ci{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new L,h=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class v1{coords=ke.portals;position=new L;player=new L;offset=new Ee;triggers=this.coords.filter((e,t)=>!(t%2)).map((e,t,i)=>e[0]+(+(t<i.length/2)*-2+1)*-.1);material;constructor(){this.createPortals()}async createPortals(){await this.createMaterial();for(let e=0,t=0;t<this.triggers.length;e+=2,t++){const i=this.coords[e][1],n=this.coords[e+1][1],s=Math.abs(i-n)/2,a=+(t<2)*2-1,o=s+.52,l=new ht(new yu(o,32,0,Math.PI),this.material);l.renderOrder=1,l.position.x=this.triggers[t],l.rotation.y=Ze.d2*a,l.position.z=i+s*-a,l.position.z+=ve.Level.portalsOffset[t],ne.dispatch("Level::AddObject",l)}}async createMaterial(){const e=await $e.Loader.loadShader("portal/main.vert"),t=await $e.Loader.loadShader("portal/main.frag"),i=Je.getVisualValue("volumetricFog"),n=new De(At.PORTAL),s=new De(At.MOON),a=ve.Level.fogDensity*(+!i*4+1);return this.material=new Fi({uniforms:{fogColor:{value:new De(At.FOG)},backgroundColor:{value:n},spikesColor:{value:s},fogDensity:{value:a},deltaTime:{value:0}},fragmentShader:t,vertexShader:e,glslVersion:pr,transparent:!0}),this.material.defines={VOLUMETRIC_FOG:i},this.material.fog=Je.getVisualValue("fog"),this.material}topPortalArea(){if(this.player.z>this.coords[1][1]){if(this.player.x<=this.triggers[0])return this.offset.set(this.coords[0][0]-this.player.x,this.coords[0][1]-this.player.z),this.updatePosition(2,3),!0;if(this.player.x>=this.triggers[3])return this.offset.set(this.player.x-this.coords[6][0],this.coords[7][1]-this.player.z),this.updatePosition(4),!0}return!1}bottomPortalArea(){if(this.player.z<this.coords[2][1]){if(this.player.x<=this.triggers[1])return this.offset.set(-(this.coords[2][0]-this.player.x),this.coords[2][1]-this.player.z),this.updatePosition(0,1),!0;if(this.player.x>=this.triggers[2])return this.offset.set(this.player.x-this.coords[4][0],this.coords[5][1]-this.player.z),this.updatePosition(6),!0}return!1}updatePosition(e,t=e){const i=this.coords[e][0],n=Math.sign(i)*-.3;this.position.set(this.coords[e][0]-this.offset.x+n,this.player.y,this.coords[t][1]+this.offset.y)}update(e){this.material.uniforms.deltaTime.value+=e/10}portalPassed(e){return this.player.copy(e),this.topPortalArea()||this.bottomPortalArea()}setFogUniforms(e){this.material.onBeforeCompile=e}dispose(){this.material?.dispose(),this.triggers.splice(0)}get playerPosition(){return this.position}}const Qm=Math.tan(Ze.d3)*3;class M1{constructor(e,t,i){this.renderer=e,this.scene=t,this.worker=i,this.createRenderTargets(),this.createWorkerLoop(),this.createParticles()}minCoords=ke.minCoords.map(e=>e-5);maxCoords=ke.maxCoords.map(e=>e+5);geometry=new ci;renderTargets;material;drops;delta=0;createRenderTargets(){if(!Je.getVisualValue("softParticles"))return;const{width:e,height:t}=this.renderer.domElement,i=new zp(e,t,vs);this.renderTargets=[new An(e,t),new An(e,t)],i.format=bs,i.minFilter=_t,i.magFilter=_t,this.renderTargets.forEach(n=>{n.depthTexture=i.clone(),n.texture.minFilter=_t,n.texture.magFilter=_t,n.texture.generateMipmaps=!1,n.texture.format=Qt,n.stencilBuffer=!0,n.depthBuffer=!0})}async createParticles(){const{width:e,height:t}=this.renderer.domElement,i=await $e.Loader.loadShader("rain/main.vert"),n=await $e.Loader.loadShader("rain/main.frag");this.material=new Fi({uniforms:{soft:{value:Je.getVisualValue("softParticles")},screenSize:{value:new Ee(e,t)},color:{value:new De(At.RAIN)},ratio:{value:t/Qm},near:{value:Nt.near},far:{value:Nt.far},dropSize:{value:3},diffuse:{value:null},depth:{value:null}},blending:Dc,fragmentShader:n,vertexShader:i,glslVersion:pr,transparent:!0,depthWrite:!1});const s=this.material.uniforms;this.drops=new $m(this.geometry,this.material),this.renderTargets&&(s.depth.value=this.renderTargets[0].depthTexture),Promise.all(ve.Level.rain.map($e.Loader.loadTexture.bind($e.Loader))).then(a=>s.diffuse.value=a),this.drops.frustumCulled=!1,this.drops.renderOrder=2,this.scene.add(this.drops)}createWorkerLoop(){this.worker?.add("Rain::UpdateParticles",e=>this.updateParticleGeometry(e.data),{minCoords:this.minCoords,maxCoords:this.maxCoords}),this.worker?.post("Rain::UpdateParticles",{camera:Nt.position,delta:this.delta})}update(e){if(this.delta=e,!this.worker&&this.updateParticles(),this.renderTargets){const t=this.renderTargets[0];this.material.uniforms.depth.value=t.depthTexture,this.material.uniforms.near.value=Nt.near,this.material.uniforms.far.value=Nt.far,this.renderer.setRenderTarget(this.renderTargets[1]),this.renderer.render(this.scene,Nt),this.renderTargets[0]=this.renderTargets[1],this.renderTargets[1]=t,this.renderer.setRenderTarget(null)}}updateParticles(){const e=this.minCoords,t=this.maxCoords;this.updateParticleGeometry(eg({camera:Nt.position,minCoords:e,maxCoords:t,delta:this.delta}))}updateParticleGeometry(e){this.geometry.setAttribute("position",new Xe(e[0],3)),this.geometry.setAttribute("angle",new Xe(e[1],1)),this.geometry.setAttribute("alpha",new Xe(e[2],1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.worker?.post("Rain::UpdateParticles",{camera:Nt.position,delta:this.delta})}resize(e,t){this.material&&(this.material.uniforms.ratio.value=t/Qm,this.material.uniforms.screenSize.value.set(e,t)),this.renderTargets?.forEach(i=>{i.depthTexture.needsUpdate=!0,i.texture.needsUpdate=!0,i.setSize(e,t)})}dispose(){if(this.material){const e=this.material.uniforms.diffuse;this.material.uniforms.depth.value?.dispose(),e.value?.forEach(i=>i.dispose())}this.worker?.remove("Rain::UpdateParticles"),this.renderTargets?.forEach(e=>{e.depthTexture.dispose(),e.texture.dispose(),e.dispose()}),this.minCoords.splice(0),this.maxCoords.splice(0),this.material?.dispose(),this.geometry.dispose(),this.drops?.clear(),this.delta=0}}class _u{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new _u(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class b1 extends _u{constructor(e){super(At.FOG,ve.Level.fogDensity*(+!e*4+1)),this.volumetric=e,this.volumetric&&(this.loadShaders(),Je.getVisualValue("volumetricFog")&&$e.Loader.loadTexture(ve.Level.fog).then(t=>this.noise=t))}shaders=[];noise;materials=0;time=0;async loadShaders(){const e=await $e.Loader.loadShader("fog/pars.frag"),t=await $e.Loader.loadShader("fog/pars.vert"),i=await $e.Loader.loadShader("fog/main.frag"),n=await $e.Loader.loadShader("fog/main.vert");Pe.fog_pars_fragment=e,Pe.fog_pars_vertex=t,Pe.fog_fragment=i,Pe.fog_vertex=n}setShaderUniforms(e){e.uniforms.noise={value:this.noise},e.uniforms.fogTime={value:0},this.shaders.push(e),this.materials=this.shaders.length}update(e){if(this.volumetric){this.time+=e*.025;for(let t=0;t<this.materials;t++)this.shaders[t].uniforms.fogTime.value=this.time}}dispose(){this.volumetric&&(this.shaders.splice(0),this.noise?.dispose(),this.materials=0)}get setUniforms(){return this.setShaderUniforms.bind(this)}}class ke{objects=[];physicalLights;renderer;portals=new v1;clouds=new Dn;pmrem;scene=new vS;rain;csm;fog;constructor(e,t,i){this.physicalLights=Je.getVisualValue("physicalLights");const n=Je.getVisualValue("raindrops");this.renderer=new yS({powerPreference:"high-performance",preserveDrawingBuffer:n,antialias:!0,canvas:e}),ne.add("Level::RemoveObject",this.removeGameObject.bind(this)),ne.add("Level::AddObject",this.addGameObject.bind(this)),this.pmrem=new Eh(this.renderer),this.createColliders(),this.createEnvironment(i),this.createRenderer(t)}createColliders(){const{position:e,height:t,sidewalkHeight:i}=ve.Level;ti.createGround(ke.minCoords,ke.maxCoords),ti.createBounds({borders:ke.bounds,y:e.y,height:t},{borders:ve.Level.sidewalk,y:i*.5,height:i})}async createEnvironment(e){const t=Je.getVisualValue("fog"),i=Je.getVisualValue("raining"),n=Je.getVisualValue("lighting"),s=t&&Je.getVisualValue("volumetricFog"),a=await this.createSkybox(ve.Level.skybox),o=await this.loadLevel(ve.Level.model);o.position.copy(ve.Level.position),o.scale.copy(ve.Level.scale),n&&this.scene.add(this.clouds.flash),i&&(this.rain=new M1(this.renderer,this.scene,e)),t?(this.fog=new b1(s),this.scene.fog=this.fog,this.scene.background=new De(At.FOG),s&&this.portals.setFogUniforms(this.fog.setUniforms)):this.clouds.sky&&this.scene.add(this.clouds.sky),this.createLights(),o.traverse(c=>{const h=c,u=h.material;h.isMesh&&(u.opacity=1,u.alphaTest=1,u.side=Ei,u.envMap=a,h.renderOrder=1,this.objects.push(h),h.receiveShadow=!0,this.csm?.setupMaterial(u),this.fog&&s&&(u.onBeforeCompile=this.fog.setUniforms))});const l=this.getSceneEnvMap();ne.dispatch("Level::EnvMap",l)}async loadLevel(e){const t=await $e.Loader.loadGLTF(e);return this.scene.add(t.scene),t.scene}async createSkybox(e){const t=await $e.Loader.loadCubeTexture(e);return t.colorSpace=Le,Je.getVisualValue("fog")||(this.scene.background=t),this.pmrem.compileCubemapShader(),this.pmrem.fromCubemap(t).texture}createLights(){const t=.25+ +!this.physicalLights*.1,i=new L(.925,-1.875,-1).normalize();this.scene.add(new _S(At.WHITE,.2)),this.csm=new _1({mode:"logarithmic",maxFar:Nt.far*10,lightFar:Nt.far,lightDirection:i,lightIntensity:t,camera:Nt,parent:this.scene,cascades:4}),this.csm.lights.forEach(n=>n.color.set(At.MOON)),this.csm.fade=!0}getSceneEnvMap(){return this.pmrem.fromScene(this.scene,0,Nt.near,Nt.far).texture}createRenderer(e){const t=+!this.physicalLights*.25+.25;this.renderer.debug.checkShaderErrors=!1,this.renderer.useLegacyLights=this.physicalLights,this.renderer.toneMapping=$d,this.renderer.outputColorSpace=Le,this.renderer.shadowMap.type=zd,this.renderer.setClearColor(At.BLACK,0),this.renderer.toneMappingExposure=t,this.renderer.setPixelRatio(e),this.renderer.shadowMap.enabled=!0}removeGameObject(e){const t=e.data;this.scene.remove(t)}addGameObject(e){const t=e.data;this.scene.add(t)}render(e){this.renderer.render(this.scene,Nt),this.portals.update(e),this.rain?.update(e),this.fog?.update(e),this.clouds.update(),this.csm?.update()}resize(e,t){this.renderer.setSize(e,t,!1),this.rain?.resize(e,t),this.csm?.updateFrustums()}outOfBounds(e){return this.portals.portalPassed(e)&&this.portals.playerPosition||null}dispose(){for(this.fog?.dispose(),this.csm?.dispose(),this.rain?.dispose(),this.pmrem.dispose(),this.clouds.dispose(),this.portals.dispose(),this.renderer.dispose(),this.csm?.lights.forEach(e=>e.dispose()),ne.remove("Level::AddObject"),ne.remove("Level::RemoveObject");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.background instanceof Fr&&this.scene.background.dispose()}static get maxCoords(){return[Rl(ke.bounds.map(e=>e[0])),Rl(ke.bounds.map(e=>e[1]))]}static get minCoords(){return[El(ke.bounds.map(e=>e[0])),El(ke.bounds.map(e=>e[1]))]}static get portals(){return ve.Level.portals}static get bounds(){return ve.Level.bounds}static get center(){return new L((ke.maxCoords[0]+ke.minCoords[0])/2,0,(ke.maxCoords[1]+ke.minCoords[1])/2)}static get size(){return new Ee(ke.maxCoords[0]-ke.minCoords[0],ke.maxCoords[1]-ke.minCoords[1])}set pause(e){this.clouds.pause=e}get walls(){return this.objects}}class Dn{count=Je.getVisualValue("clouds");staticClouds=!Je.getVisualValue("dynamicClouds");isLighting=Je.getVisualValue("lighting");useFog=Je.getVisualValue("fog");onShowLighting=this.showLighting.bind(this);onHideLighting=this.hideLighting.bind(this);rotation=new Xi(Ze.d2,0,0);matrix=new Ke;timeout;clouds;lighting;paused=!0;constructor(){this.isLighting&&this.createLighting(),this.createClouds()}createLighting(){const e=+(!this.useFog&&Je.getVisualValue("physicalLights"))+1;this.lighting=new Yf(At.BLUE,10,Dn.height,e),this.lighting.position.set(0,Dn.height,0),this.lighting.castShadow=!0,this.lighting.power=0}startLighting(){this.timeout=setTimeout(this.onShowLighting,1e3*(Math.random()*15+15))}showLighting(){this.updateLightingPosition(),this.lighting.power=100+Math.random()*150,setTimeout(this.onHideLighting,Math.random()*400+100),ne.dispatch("SFX::Thunder",this.lighting.position,!0)}updateLightingPosition(){this.clouds?(this.clouds.getMatrixAt(yh(0,this.count-1),this.matrix),this.lighting.position.setFromMatrixPosition(this.matrix)):this.lighting.position.set(qt(ke.minCoords[0],ke.maxCoords[0]),Dn.height/ve.Level.height,qt(ke.minCoords[1],ke.maxCoords[1])),this.lighting.position.y-=Math.random()*(this.lighting.position.y/4)}hideLighting(){!this.paused&&this.startLighting(),this.lighting.power=0}async createClouds(){if(!this.count||!this.isLighting&&this.useFog)return;const e=new sh(Dn.height,16,16,0,Math.PI);e.rotateX(-Ze.d2);const t=new L,i=new Wt;this.clouds=new xy(new zo(Dn.height,Dn.height),new ry({transparent:!0,depthWrite:!1,opacity:.25}),this.count);const n=new ix(new ht(e.toNonIndexed())).build();for(let s=0;s<this.count;s++)n.sample(t),i.position.copy(t),i.lookAt(ui.DOWN),i.updateMatrix(),this.clouds.setMatrixAt(s,i.matrix);this.clouds.position.copy(ke.center),this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.material.map=await $e.Loader.loadTexture(ve.Level.cloud)}update(){if(!(this.staticClouds||!this.clouds)){for(let e=0;e<this.count;e++){const t=e%2*2-1;this.clouds.getMatrixAt(e,this.matrix);const i=this.matrix.clone();this.rotation.setFromRotationMatrix(i),this.rotation.z+=Math.random()*t*.002,this.matrix.makeRotationFromEuler(this.rotation),this.matrix.copyPosition(i),this.clouds.setMatrixAt(e,this.matrix)}this.clouds.instanceMatrix.needsUpdate=!0}}dispose(){const e=this.clouds?.material;clearTimeout(this.timeout),e?.map?.dispose(),this.lighting?.dispose(),this.clouds?.dispose(),e?.dispose()}static get height(){return Math.max(ke.size.x,ke.size.y)}set pause(e){(this.paused=e)?clearTimeout(this.timeout):this.isLighting&&this.startLighting()}get sky(){return this.clouds}get flash(){return this.lighting}}let as=[];const ja=new Il,vu=new L;let Mu=0;ja.addPoint(0,0),ja.addPoint(.5,0),ja.addPoint(.8,.5),ja.addPoint(1,.5);const eg=r=>{const{camera:e,delta:t}=r;return vu.copy(e),Mu+=t,S1(r),w1(t),T1()},S1=r=>{const{minCoords:e,maxCoords:t}=r,i=Mu*100|0;Mu-=i/100;const n=i*50;for(let s=0;s<n;s++){const a=Math.random(),o=5.25-a*1.5,l=Math.random()*.1,c=Math.random()*25+50,h=-1+ +(Math.random()<.5)*2;as.push({velocity:new L(0,-c,0),position:new L(qt(e[0],t[0]),Dn.height-a*50,qt(e[1],t[1])),rotation:h*l,maxLife:o,alpha:0,life:o})}},w1=r=>{for(let e=0;e<as.length;e++){const t=as[e];if((t.life-=r)<=0)continue;const i=1-t.life/t.maxLife,n=t.velocity.clone(),{x:s,y:a,z:o}=n;t.position.add(n.multiplyScalar(r)),t.alpha=ja.getValue(i),n.multiplyScalar(.1).set(Math.sign(s)*Math.min(Math.abs(n.x),Math.abs(s)),Math.sign(a)*Math.min(Math.abs(n.y),Math.abs(a)),Math.sign(o)*Math.min(Math.abs(n.z),Math.abs(o))),t.velocity.sub(n)}as=as.filter(e=>e.life>0).sort((e,t)=>{const i=vu.distanceToSquared(e.position),n=vu.distanceToSquared(t.position);return i>n?-1:i<n?1:0})},T1=()=>{const r=[],e=[],t=[];for(let i=0,n=as.length;i<n;i++){const{x:s,y:a,z:o}=as[i].position,{rotation:l,alpha:c}=as[i];r.push(s,a,o),t.push(l),e.push(c)}return[r,t,e]};class A1{constructor(e,t,i){this.worker=i,this.level=new ke(e,t,i),ne.dispatch("Game::LoopInit",null,!0),this.addEventListeners()}rifle;pistol;enemyKills=0;enemies;level;clock=new Op;player=new t1;loop=this.update.bind(this);controls=new Ln(this.player);onSceneLoad=this.onLoad.bind(this);onPlayerHit=this.playerHit.bind(this);addEventListeners(){ne.add("Level::EnvMap",this.onSceneLoad),ne.add("Enemy::Attack",this.onPlayerHit),this.worker?.add("Level::GetRandomCoord",e=>{Et.addLevelCoords(e.data)?ne.dispatch("Loading::Complete",null,!0):this.worker?.post("Level::GetRandomCoord")},{minCoords:ke.minCoords,maxCoords:ke.maxCoords,portals:ke.portals,bounds:ke.bounds}),ne.add("Enemy::Active",e=>{!e.data&&this.onEnemyKill(),this.player.setTargets(this.enemies.colliders)}),ne.add("Player::PickRifle",()=>this.player.pickRifle()),ne.add("Player::Death",e=>this.enemies.playerDead=e.data)}async onLoad(e){const t=e.data;this.player.loadCharacter(t).then(()=>{ti.setCharacter(this.player.collider),this.player.setPistol(this.level.walls,this.pistol),this.enemies=new Qw(t),this.player.addRifle(this.rifle),this.createRandomCoords(),Ni.add(this.loop)}),this.pistol=new g1(t),this.rifle=new x1(t)}start(){}playerHit(e){const{position:t,damage:i}=e.data,{position:n,rotation:s}=this.player.location,a=this.enemies.getHitDirection(t,n,s);this.player.hit(a,i)}createRandomCoords(){if(this.worker)return this.worker.post("Level::GetRandomCoord");Et.fillRandomLevelCoords(),ne.dispatch("Loading::Complete",null,!0)}onEnemyKill(){const{x:e,z:t}=this.player.location.position;this.enemies.spawnMultiple(e,t),!(++this.enemyKills%ve.Gameplay.rifleSpawn)&&this.spawnRifle(e,t)}spawnRifle(e,t){!this.rifle.onStage&&this.rifle.spawn(Et.getRandomLevelCoords(e,t))}update(){const e=Math.min(this.clock.getDelta(),.1),t=this.updateCharactersLocation(e);this.player.alive&&ti.update(e),this.rifle.update(t),this.level.render(e),We.updateState()}updateCharactersLocation(e){this.player.update(e);const{location:t}=this.player,i=this.level.outOfBounds(t.position),n=this.enemies.update(e,t.position);return i&&this.player.teleport(i),ne.dispatch("Characters::Location",{player:t,enemies:n},!0),i??t.position}resize(e,t){this.level.resize(e,t),this.pistol.resize(t),this.rifle.resize(t),We.resize()}removeEventListeners(){this.worker?.remove("Level::GetRandomCoord"),ne.remove("Player::PickRifle"),ne.remove("Player::Death"),ne.remove("Level::EnvMap"),ne.remove("Enemy::Active"),ne.remove("Enemy::Attack")}dispose(){this.removeEventListeners(),this.controls.dispose(),this.enemies.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.level.dispose(),ti.dispose(),We.dispose(),Ni.dispose()}set inputs(e){this.controls.pause=e}set pause(e){this.level.pause=e,ti.pause=e,Ni.pause=e}}class E1{loop;takeControl(e){const t=e.element;ne.add("Game::SettingsInit",()=>this.createMainLoop(t,e.pixelRatio)),this.resetDOMElements(),new Je}createMainLoop(e,t){this.loop=new A1(e,t),ne.remove("Game::SettingsInit")}resetDOMElements(){const e=self.DedicatedWorkerGlobalScope;self.HTMLCollection=e,self.SVGElement=e,self.NodeList=e,self.document=null,self.window=self}dispatch(e){au.dispatchEvent(e)}resize(e){const{width:t,height:i}=e;this.loop.resize(t,i)}dispose(){this.loop.dispose()}start(){this.loop.start()}set inputs(e){this.loop.inputs=e}set pause(e){this.loop.pause=e}}var Ns=new E1;const R1=(r,e)=>{switch(r){case"EventsTarget::Dispatch":return Ns.dispatch(e);case"Rain::UpdateParticles":return eg(e);case"Level::GetRandomCoord":return Vm(e);case"Offscreen::Transfer":return Ns.takeControl(e);case"Game::Resize":return Ns.resize(e);case"Game::Inputs":{const{disabled:t}=e;return Ns.inputs=t}case"Game::Pause":{const{paused:t}=e;return Ns.pause=t}case"Game::Dispose":return Ns.dispose();case"Game::Start":return Ns.start()}return e};self.onmessage=r=>{const{event:e,params:t}=r.data,i=R1(e,t);self.postMessage({name:e,response:i})},self.onerror=r=>console.error(r);var C1=self})();
