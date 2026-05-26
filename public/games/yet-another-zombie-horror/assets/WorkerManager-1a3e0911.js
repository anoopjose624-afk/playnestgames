(function(){"use strict";const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lo=Math.PI/180,co=180/Math.PI;function ms(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function He(r,t,e){return Math.max(t,Math.min(e,r))}function Kg(r,t){return(r%t+t)%t}function rc(r,t,e){return(1-e)*r+e*t}function Zg(r){return r*lo}function Jg(r){return r*co}function rd(r){return(r&r-1)===0&&r!==0}function Qg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}let _i=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],m=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const v=Math.sqrt(x),S=Math.atan2(v,p*_);g=Math.sin(g*S)/v,o=Math.sin(o*S)/v}const M=o*_;if(l=l*g+d*M,c=c*g+f*M,h=h*g+m*M,u=u*g+y*M,g===1-o){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class Gg{constructor(t=0,e=0,i=0){Gg.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ad.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*n-o*i,h=l*i+o*e-s*n,u=l*n+s*i-a*e,d=-s*e-a*i-o*n;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ac=new D,ad=new _i;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="152",qs=0,ld=1,cd=2,hd=1,t0=100,e0=204,i0=205,n0=3,s0=0,ud=300,da=1e3,fa=1001,oc=1002,lc=1003,r0=1004,a0=1005,cc=1006,o0=1007,hc=1008,l0=1009,c0=1015,dd=1023,pa=2300,Ys=2301,uc=2302,fd=2400,pd=2401,md=2402,h0=2500,u0=0,gd=1,dc=2,d0=3e3,fc=3001,f0=0,pc="",Fe="srgb",mc="srgb-linear",yd="display-p3",gc=7680,p0=519,yc=35044;let ho=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}};const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xd=1234567;const ma=Math.PI/180,ga=180/Math.PI;function Ii(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Ue(r,t,e){return Math.max(t,Math.min(e,r))}function xc(r,t){return(r%t+t)%t}function m0(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function g0(r,t,e){return r!==t?(e-r)/(t-r):0}function ya(r,t,e){return(1-e)*r+e*t}function y0(r,t,e,i){return ya(r,t,1-Math.exp(-e*i))}function x0(r,t=1){return t-Math.abs(xc(r,t*2)-t)}function _0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function v0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function M0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function b0(r,t){return r+Math.random()*(t-r)}function S0(r){return r*(.5-Math.random())}function w0(r){r!==void 0&&(xd=r);let t=xd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function T0(r){return r*ma}function A0(r){return r*ga}function E0(r){return(r&r-1)===0&&r!==0}function _d(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function R0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function C0(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vd={DEG2RAD:ma,RAD2DEG:ga,generateUUID:Ii,clamp:Ue,euclideanModulo:xc,mapLinear:m0,inverseLerp:g0,lerp:ya,damp:y0,pingpong:x0,smoothstep:_0,smootherstep:v0,randInt:M0,randFloat:b0,randFloatSpread:S0,seededRandom:w0,degToRad:T0,radToDeg:A0,isPowerOfTwo:E0,ceilPowerOfTwo:_d,floorPowerOfTwo:R0,setQuaternionFromProperEuler:C0,normalize:ie,denormalize:dn};let ae=class Wg{constructor(t=0,e=0){Wg.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hn=class Xg{constructor(){Xg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],y=n[0],g=n[3],p=n[6],_=n[1],x=n[4],M=n[7],v=n[2],S=n[5],T=n[8];return s[0]=a*y+o*_+l*v,s[3]=a*g+o*x+l*S,s[6]=a*p+o*M+l*T,s[1]=c*y+h*_+u*v,s[4]=c*g+h*x+u*S,s[7]=c*p+h*M+u*T,s[2]=d*y+f*_+m*v,s[5]=d*g+f*x+m*S,s[8]=d*p+f*M+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_c.makeScale(t,e)),this}rotate(t){return this.premultiply(_c.makeRotation(-t)),this}translate(t,e){return this.premultiply(_c.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const _c=new Hn;function P0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Md={};function Mc(r){r in Md||(Md[r]=!0,console.warn(r))}function Ks(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const L0=new Hn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),I0=new Hn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function D0(r){return r.convertSRGBToLinear().applyMatrix3(I0)}function F0(r){return r.applyMatrix3(L0).convertLinearToSRGB()}const U0={[mc]:r=>r,[Fe]:r=>r.convertSRGBToLinear(),[yd]:D0},N0={[mc]:r=>r,[Fe]:r=>r.convertLinearToSRGB(),[yd]:F0},Di={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return mc},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=U0[t],n=N0[e];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Zs,B0=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=vc("canvas")),Zs.width=t.width,Zs.height=t.height;const i=Zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ks(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ks(e[i]/255)*255):e[i]=Ks(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},z0=class{constructor(t=null){this.isSource=!0,this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Sc(n[a].image)):s.push(Sc(n[a]))}else s=Sc(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Sc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?B0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O0=0,gs=class nc extends ho{constructor(t=nc.DEFAULT_IMAGE,e=nc.DEFAULT_MAPPING,i=fa,n=fa,s=cc,a=hc,o=dd,l=l0,c=nc.DEFAULT_ANISOTROPY,h=pc){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ii(),this.name="",this.source=new z0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fc?Fe:pc),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?fc:d0}set encoding(t){Mc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fc?Fe:pc}};gs.DEFAULT_IMAGE=null,gs.DEFAULT_MAPPING=ud,gs.DEFAULT_ANISOTROPY=1;let oi=class $g{constructor(t=0,e=0,i=0,n=1){$g.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,v=(p+1)/2,S=(h+d)/4,T=(u+y)/4,R=(m+g)/4;return x>M&&x>v?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=S/i,s=T/i):M>v?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=S/n,s=R/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=T/s,n=R/s),this.set(i,n,s,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class Gn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],m=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const v=Math.sqrt(x),S=Math.atan2(v,p*_);g=Math.sin(g*S)/v,o=Math.sin(o*S)/v}const M=o*_;if(l=l*g+d*M,c=c*g+f*M,h=h*g+m*M,u=u*g+y*M,g===1-o){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*n-o*i,h=l*i+o*e-s*n,u=l*n+s*i-a*e,d=-s*e-a*i-o*n;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new I,bd=new Gn;let ge=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox),Js.applyMatrix4(t.matrixWorld),this.union(Js);else{const n=t.geometry;if(n!==void 0)if(e&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)pn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(pn)}else n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox),Js.applyMatrix4(t.matrixWorld),this.union(Js)}const i=t.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xa),uo.subVectors(this.max,xa),Qs.subVectors(t.a,xa),tr.subVectors(t.b,xa),er.subVectors(t.c,xa),Wn.subVectors(tr,Qs),Xn.subVectors(er,tr),ys.subVectors(Qs,er);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ys.z,ys.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ys.z,0,-ys.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ys.y,ys.x,0];return!Tc(e,Qs,tr,er,uo)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,Qs,tr,er,uo))?!1:(fo.crossVectors(Wn,Xn),e=[fo.x,fo.y,fo.z],Tc(e,Qs,tr,er,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const fn=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,Js=new ge,Qs=new I,tr=new I,er=new I,Wn=new I,Xn=new I,ys=new I,xa=new I,uo=new I,fo=new I,xs=new I;function Tc(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){xs.fromArray(r,s);const o=n.x*Math.abs(xs.x)+n.y*Math.abs(xs.y)+n.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const k0=new ge,_a=new I,Ac=new I;let Ki=class{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):k0.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_a.subVectors(t,this.center);const e=_a.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(_a,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_a.copy(t.center).add(Ac)),this.expandByPoint(_a.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const mn=new I,Ec=new I,po=new I,$n=new I,Rc=new I,mo=new I,Cc=new I;let Pc=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ec.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Ec);const s=t.distanceTo(e)*.5,a=-this.direction.dot(po),o=$n.dot(this.direction),l=-$n.dot(po),c=$n.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ec).addScaledVector(po,d),f}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const i=mn.dot(this.direction),n=mn.dot(mn)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,n,s){Rc.subVectors(e,t),mo.subVectors(i,t),Cc.crossVectors(Rc,mo);let a=this.direction.dot(Cc),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(mo.crossVectors($n,mo));if(l<0)return null;const c=o*this.direction.dot(Rc.cross($n));if(c<0||l+c>a)return null;const h=-o*$n.dot(Cc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class sd{constructor(){sd.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,s,a,o,l,c,h,u,d,f,m,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sd().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/ir.setFromMatrixColumn(t,0).length(),s=1/ir.setFromMatrixColumn(t,1).length(),a=1/ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,y=c*u;e[0]=d+y*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,y=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V0,t,H0)}lookAt(t,e,i){const n=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),jn.crossVectors(i,li),jn.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),jn.crossVectors(i,li)),jn.normalize(),go.crossVectors(li,jn),n[0]=jn.x,n[4]=go.x,n[8]=li.x,n[1]=jn.y,n[5]=go.y,n[9]=li.y,n[2]=jn.z,n[6]=go.z,n[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],_=i[3],x=i[7],M=i[11],v=i[15],S=n[0],T=n[4],R=n[8],b=n[12],w=n[1],F=n[5],L=n[9],C=n[13],U=n[2],N=n[6],G=n[10],W=n[14],H=n[3],X=n[7],Z=n[11],ot=n[15];return s[0]=a*S+o*w+l*U+c*H,s[4]=a*T+o*F+l*N+c*X,s[8]=a*R+o*L+l*G+c*Z,s[12]=a*b+o*C+l*W+c*ot,s[1]=h*S+u*w+d*U+f*H,s[5]=h*T+u*F+d*N+f*X,s[9]=h*R+u*L+d*G+f*Z,s[13]=h*b+u*C+d*W+f*ot,s[2]=m*S+y*w+g*U+p*H,s[6]=m*T+y*F+g*N+p*X,s[10]=m*R+y*L+g*G+p*Z,s[14]=m*b+y*C+g*W+p*ot,s[3]=_*S+x*w+M*U+v*H,s[7]=_*T+x*F+M*N+v*X,s[11]=_*R+x*L+M*G+v*Z,s[15]=_*b+x*C+M*W+v*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+y*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],_=u*g*c-y*d*c+y*l*f-o*g*f-u*l*p+o*d*p,x=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,M=h*y*c-m*u*c+m*o*f-a*y*f-h*o*p+a*u*p,v=m*u*l-h*y*l-m*o*d+a*y*d+h*o*g-a*u*g,S=e*_+i*x+n*M+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=_*T,t[1]=(y*d*s-u*g*s-y*n*f+i*g*f+u*n*p-i*d*p)*T,t[2]=(o*g*s-y*l*s+y*n*c-i*g*c-o*n*p+i*l*p)*T,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*T,t[4]=x*T,t[5]=(h*g*s-m*d*s+m*n*f-e*g*f-h*n*p+e*d*p)*T,t[6]=(m*l*s-a*g*s-m*n*c+e*g*c+a*n*p-e*l*p)*T,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*T,t[8]=M*T,t[9]=(m*u*s-h*y*s-m*i*f+e*y*f+h*i*p-e*u*p)*T,t[10]=(a*y*s-m*o*s+m*i*c-e*y*c-a*i*p+e*o*p)*T,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*T,t[12]=v*T,t[13]=(h*y*n-m*u*n+m*i*d-e*y*d-h*i*g+e*u*g)*T,t[14]=(m*o*n-a*y*n-m*i*l+e*y*l+a*i*g-e*o*g)*T,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*T,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,y=a*h,g=a*u,p=o*u,_=l*c,x=l*h,M=l*u,v=i.x,S=i.y,T=i.z;return n[0]=(1-(y+p))*v,n[1]=(f+M)*v,n[2]=(m-x)*v,n[3]=0,n[4]=(f-M)*S,n[5]=(1-(d+p))*S,n[6]=(g+_)*S,n[7]=0,n[8]=(m+x)*T,n[9]=(g-_)*T,n[10]=(1-(d+y))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=ir.set(n[0],n[1],n[2]).length();const a=ir.set(n[4],n[5],n[6]).length(),o=ir.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Fi.copy(this);const c=1/s,h=1/a,u=1/o;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,e.setFromRotationMatrix(Fi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a){const o=this.elements,l=2*s/(e-t),c=2*s/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,n,s,a){const o=this.elements,l=1/(e-t),c=1/(i-n),h=1/(a-s),u=(e+t)*l,d=(i+n)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};const ir=new I,Fi=new wt,V0=new I(0,0,0),H0=new I(1,1,1),jn=new I,go=new I,li=new I,Sd=new wt,wd=new Gn;let Td=class jg{constructor(t=0,e=0,i=0,n=jg.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wd.setFromEuler(this),this.setFromQuaternion(wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Td.DEFAULT_ORDER="XYZ";let G0=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},W0=0;const Ad=new I,nr=new Gn,gn=new wt,yo=new I,va=new I,X0=new I,$0=new Gn,Ed=new I(1,0,0),Rd=new I(0,1,0),Cd=new I(0,0,1),j0={type:"added"},Pd={type:"removed"};let Ne=class sc extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sc.DEFAULT_UP.clone();const t=new I,e=new Td,i=new Gn,n=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new wt},normalMatrix:{value:new Hn}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=sc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Ed,t)}rotateY(t){return this.rotateOnAxis(Rd,t)}rotateZ(t){return this.rotateOnAxis(Cd,t)}translateOnAxis(t,e){return Ad.copy(t).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ed,t)}translateY(t){return this.translateOnAxis(Rd,t)}translateZ(t){return this.translateOnAxis(Cd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yo.copy(t):yo.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(va,yo,this.up):gn.lookAt(yo,va,this.up),this.quaternion.setFromRotationMatrix(gn),n&&(gn.extractRotation(n.matrixWorld),nr.setFromRotationMatrix(gn),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(j0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Pd)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,X0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,$0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}};Ne.DEFAULT_UP=new I(0,1,0),Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new I,yn=new I,Lc=new I,xn=new I,sr=new I,rr=new I,Ld=new I,Ic=new I,Dc=new I,Fc=new I;let xo=!1,Zi=class $s{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ui.subVectors(t,e),n.cross(Ui);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ui.subVectors(n,e),yn.subVectors(i,e),Lc.subVectors(t,e);const a=Ui.dot(Ui),o=Ui.dot(yn),l=Ui.dot(Lc),c=yn.dot(yn),h=yn.dot(Lc),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,i,n,s,a,o,l){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(t,e,i,n,s,a,o,l)}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,xn),l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l}static isFrontFacing(t,e,i,n){return Ui.subVectors(i,e),yn.subVectors(t,e),Ui.cross(yn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Ui.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),$s.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return $s.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return $s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;sr.subVectors(n,i),rr.subVectors(s,i),Ic.subVectors(t,i);const l=sr.dot(Ic),c=rr.dot(Ic);if(l<=0&&c<=0)return e.copy(i);Dc.subVectors(t,n);const h=sr.dot(Dc),u=rr.dot(Dc);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(sr,a);Fc.subVectors(t,s);const f=sr.dot(Fc),m=rr.dot(Fc);if(m>=0&&f<=m)return e.copy(s);const y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(rr,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ld.subVectors(s,n),o=(u-h)/(u-h+(f-m)),e.copy(n).addScaledVector(Ld,o);const p=1/(g+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},q0=0,_s=class extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=hd,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=e0,this.blendDst=i0,this.blendEquation=t0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=n0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hd&&(i.blending=this.blending),this.side!==qs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Uc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}let Ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Di.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Di.workingColorSpace){return this.r=t,this.g=e,this.b=i,Di.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Di.workingColorSpace){if(t=xc(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Uc(a,s,t+1/3),this.g=Uc(a,s,t),this.b=Uc(a,s,t-1/3)}return Di.toWorkingColorSpace(this,n),this}setStyle(t,e=Fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=Id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}copyLinearToSRGB(t){return this.r=bc(t.r),this.g=bc(t.g),this.b=bc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Di.fromWorkingColorSpace(We.copy(this),t),Math.round(Ue(We.r*255,0,255))*65536+Math.round(Ue(We.g*255,0,255))*256+Math.round(Ue(We.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Di.workingColorSpace){Di.fromWorkingColorSpace(We.copy(this),e);const i=We.r,n=We.g,s=We.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Di.workingColorSpace){return Di.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Fe){Di.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,n=We.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),Ni.h+=t,Ni.s+=e,Ni.l+=i,this.setHSL(Ni.h,Ni.s,Ni.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(_o);const i=ya(Ni.h,_o.h,e),n=ya(Ni.s,_o.s,e),s=ya(Ni.l,_o.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const We=new Ee;Ee.NAMES=Id;let ar=class extends _s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const _e=new I,vo=new ae;let qe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},Y0=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}},K0=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}},_n=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Z0=0;const vi=new wt,Nc=new Ne,or=new I,ci=new ge,Ma=new ge,Re=new I;let Ji=class qg extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P0(t)?K0:Y0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Hn().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,i){return vi.makeTranslation(t,e,i),this.applyMatrix4(vi),this}scale(t,e,i){return vi.makeScale(t,e,i),this.applyMatrix4(vi),this}lookAt(t){return Nc.lookAt(t),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ge);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(ci.min,Ma.min),ci.expandByPoint(Re),Re.addVectors(ci.max,Ma.max),ci.expandByPoint(Re)):(ci.expandByPoint(Ma.min),ci.expandByPoint(Ma.max))}ci.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Re.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(t,c),Re.add(or)),n=Math.max(n,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new I,h[w]=new I;const u=new I,d=new I,f=new I,m=new ae,y=new ae,g=new ae,p=new I,_=new I;function x(w,F,L){u.fromArray(n,w*3),d.fromArray(n,F*3),f.fromArray(n,L*3),m.fromArray(a,w*2),y.fromArray(a,F*2),g.fromArray(a,L*2),d.sub(u),f.sub(u),y.sub(m),g.sub(m);const C=1/(y.x*g.y-g.x*y.y);isFinite(C)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-y.y).multiplyScalar(C),_.copy(f).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(C),c[w].add(p),c[F].add(p),c[L].add(p),h[w].add(_),h[F].add(_),h[L].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,F=M.length;w<F;++w){const L=M[w],C=L.start,U=L.count;for(let N=C,G=C+U;N<G;N+=3)x(i[N+0],i[N+1],i[N+2])}const v=new I,S=new I,T=new I,R=new I;function b(w){T.fromArray(s,w*3),R.copy(T);const F=c[w];v.copy(F),v.sub(T.multiplyScalar(T.dot(F))).normalize(),S.crossVectors(R,F);const C=S.dot(h[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=C}for(let w=0,F=M.length;w<F;++w){const L=M[w],C=L.start,U=L.count;for(let N=C,G=C+U;N<G;N+=3)b(i[N+0]),b(i[N+1]),b(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qg,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Dd=new wt,Qi=new Pc,Mo=new Ki,Fd=new I,lr=new I,cr=new I,hr=new I,Bc=new I,bo=new I,So=new ae,wo=new ae,To=new ae,Ud=new I,Nd=new I,Bd=new I,Ao=new I,Eo=new I;let Ro=class extends Ne{constructor(t=new Ji,e=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Bc.fromBufferAttribute(u,t),a?bo.addScaledVector(Bc,h):bo.addScaledVector(Bc.sub(e),h))}e.add(bo)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Qi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Mo,Fd)===null||Qi.origin.distanceToSquared(Fd)>(t.far-t.near)**2))&&(Dd.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(Dd),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let i;const n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=a.getX(x),S=a.getX(x+1),T=a.getX(x+2);i=Co(this,g,t,Qi,l,c,h,v,S,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,e.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=a.getX(y),_=a.getX(y+1),x=a.getX(y+2);i=Co(this,s,t,Qi,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=x,S=x+1,T=x+2;i=Co(this,g,t,Qi,l,c,h,v,S,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,e.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=y,_=y+1,x=y+2;i=Co(this,s,t,Qi,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),e.push(i))}}}};function J0(r,t,e,i,n,s,a,o){let l;if(t.side===ld?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===qs,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:r}}function Co(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,lr),r.getVertexPosition(l,cr),r.getVertexPosition(c,hr);const h=J0(r,t,e,i,lr,cr,hr,Ao);if(h){n&&(So.fromBufferAttribute(n,o),wo.fromBufferAttribute(n,l),To.fromBufferAttribute(n,c),h.uv=Zi.getInterpolation(Ao,lr,cr,hr,So,wo,To,new ae)),s&&(So.fromBufferAttribute(s,o),wo.fromBufferAttribute(s,l),To.fromBufferAttribute(s,c),h.uv1=Zi.getInterpolation(Ao,lr,cr,hr,So,wo,To,new ae),h.uv2=h.uv1),a&&(Ud.fromBufferAttribute(a,o),Nd.fromBufferAttribute(a,l),Bd.fromBufferAttribute(a,c),h.normal=Zi.getInterpolation(Ao,lr,cr,hr,Ud,Nd,Bd,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};Zi.getNormal(lr,cr,hr,u.normal),h.face=u}return h}let Q0=class Yg extends Ji{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(u,2));function m(y,g,p,_,x,M,v,S,T,R,b){const w=M/T,F=v/R,L=M/2,C=v/2,U=S/2,N=T+1,G=R+1;let W=0,H=0;const X=new I;for(let Z=0;Z<G;Z++){const ot=Z*F-C;for(let rt=0;rt<N;rt++){const V=rt*w-L;X[y]=V*_,X[g]=ot*x,X[p]=U,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(rt/T),u.push(1-Z/R),W+=1}}for(let Z=0;Z<R;Z++)for(let ot=0;ot<T;ot++){const rt=d+ot+N*Z,V=d+ot+N*(Z+1),J=d+(ot+1)+N*(Z+1),it=d+(ot+1)+N*Z;l.push(rt,V,it),l.push(V,J,it),H+=6}o.addGroup(f,H,b),f+=H,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yg(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zd=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zc=class extends zd{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ma*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};const Oc=new I,ty=new I,ey=new Hn;let qn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Oc.subVectors(i,e).cross(ty.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ey.getNormalMatrix(t),n=this.coplanarPoint(Oc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const vs=new Ki,Po=new I;let iy=class{constructor(t=new qn,e=new qn,i=new qn,n=new qn,s=new qn,a=new qn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],y=i[11],g=i[12],p=i[13],_=i[14],x=i[15];return e[0].setComponents(o-n,u-l,y-d,x-g).normalize(),e[1].setComponents(o+n,u+l,y+d,x+g).normalize(),e[2].setComponents(o+s,u+c,y+f,x+p).normalize(),e[3].setComponents(o-s,u-c,y-f,x-p).normalize(),e[4].setComponents(o-a,u-h,y-m,x-_).normalize(),e[5].setComponents(o+a,u+h,y+m,x+_).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Po.x=n.normal.x>0?t.max.x:t.min.x,Po.y=n.normal.y>0?t.max.y:t.min.y,Po.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Od=class extends zd{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kc=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}};class ny{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new I;class Vc{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kd=new I,Vd=new oi,Hd=new oi,sy=new I,Gd=new wt,ur=new I;class ry extends Ro{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ge),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)ur.fromBufferAttribute(e,i),this.applyBoneTransform(i,ur),this.boundingBox.expandByPoint(ur)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)ur.fromBufferAttribute(e,i),this.applyBoneTransform(i,ur),this.boundingSphere.expandByPoint(ur)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new oi,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Vd.fromBufferAttribute(n.attributes.skinIndex,t),Hd.fromBufferAttribute(n.attributes.skinWeight,t),kd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Hd.getComponent(s);if(a!==0){const o=Vd.getComponent(s);Gd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(sy.copy(kd).applyMatrix4(Gd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Wd extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ay extends gs{constructor(t=null,e=1,i=1,n,s,a,o,l,c=lc,h=lc,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xd=new wt,oy=new wt;class Hc{constructor(t=[],e=[]){this.uuid=Ii(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new wt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:oy;Xd.multiplyMatrices(o,e[s]),Xd.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Hc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=_d(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new ay(e,t,t,dd,c0);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Wd),this.bones.push(a),this.boneInverses.push(new wt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}let $d=class extends qe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};const dr=new wt,jd=new wt,Lo=[],qd=new ge,ly=new wt,ba=new Ro,Sa=new Ki;let cy=class extends Ro{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $d(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ly)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ge),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,dr),qd.copy(t.boundingBox).applyMatrix4(dr),this.boundingBox.union(qd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,dr),Sa.copy(t.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(Sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,n=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),t.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,dr),jd.multiplyMatrices(i,dr),ba.matrixWorld=jd,ba.raycast(t,Lo);for(let a=0,o=Lo.length;a<o;a++){const l=Lo[a];l.instanceId=s,l.object=this,e.push(l)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $d(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class Yd extends _s{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kd=new I,Zd=new I,Jd=new wt,Gc=new Pc,Io=new Ki;class Wc extends Ne{constructor(t=new Ji,e=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Kd.fromBufferAttribute(e,n-1),Zd.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Kd.distanceTo(Zd);t.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(n),Io.radius+=s,t.ray.intersectsSphere(Io)===!1)return;Jd.copy(n).invert(),Gc.copy(t.ray).applyMatrix4(Jd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=p,M=_-1;x<M;x+=f){const v=m.getX(x),S=m.getX(x+1);if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,S),Gc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let x=p,M=_-1;x<M;x+=f){if(c.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),Gc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Qd=new I,tf=new I;class hy extends Wc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Qd.fromBufferAttribute(e,n),tf.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Qd.distanceTo(tf);t.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uy extends Wc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}let ef=class extends _s{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};const nf=new wt,Xc=new Pc,Do=new Ki,Fo=new I;let dy=class extends Ne{constructor(t=new Ji,e=new ef){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(n),Do.radius+=s,t.ray.intersectsSphere(Do)===!1)return;nf.copy(n).invert(),Xc.copy(t.ray).applyMatrix4(nf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,y=f;m<y;m++){const g=c.getX(m);Fo.fromBufferAttribute(u,g),sf(Fo,g,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,y=f;m<y;m++)Fo.fromBufferAttribute(u,m),sf(Fo,m,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function sf(r,t,e,i,n,s,a){const o=Xc.distanceSqToPoint(r);if(o<e){const l=new I;Xc.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}let $c=class extends _s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};class Ms extends $c{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Yn(r,t,e){return rf(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)}function Uo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function rf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function fy(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function af(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let l=0;l!==t;++l)n[a++]=r[o+l]}return n}function of(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}let wa=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},py=class extends wa{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case pd:s=t,o=2*e-i;break;case md:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:a=t,l=2*i-e;break;case md:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let v=0;v!==o;++v)s[v]=p*a[h+v]+_*a[c+v]+x*a[l+v]+M*a[u+v];return s}},my=class extends wa{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},gy=class extends wa{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Uo(e,this.TimeBufferType),this.values=Uo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Uo(t.times,Array),values:Uo(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new my(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new py(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pa:e=this.InterpolantFactoryMethodDiscrete;break;case Ys:e=this.InterpolantFactoryMethodLinear;break;case uc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Yn(i,s,a),this.values=Yn(this.values,s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&rf(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=Yn(this.times),e=Yn(this.values),i=this.getValueSize(),n=this.getInterpolation()===uc,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=Yn(t,0,a),this.values=Yn(e,0,a*i)):(this.times=t,this.values=e),this}clone(){const t=Yn(this.times,0),e=Yn(this.values,0),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};tn.prototype.TimeBufferType=Float32Array,tn.prototype.ValueBufferType=Float32Array,tn.prototype.DefaultInterpolation=Ys;let fr=class extends tn{};fr.prototype.ValueTypeName="bool",fr.prototype.ValueBufferType=Array,fr.prototype.DefaultInterpolation=pa,fr.prototype.InterpolantFactoryMethodLinear=void 0,fr.prototype.InterpolantFactoryMethodSmooth=void 0;let lf=class extends tn{};lf.prototype.ValueTypeName="color";let Ta=class extends tn{};Ta.prototype.ValueTypeName="number";let yy=class extends wa{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let c=t*o;for(let h=c+o;c!==h;c+=4)Gn.slerpFlat(s,0,a,c-o,a,c,l);return s}},bs=class extends tn{InterpolantFactoryMethodLinear(t){return new yy(this.times,this.values,this.getValueSize(),t)}};bs.prototype.ValueTypeName="quaternion",bs.prototype.DefaultInterpolation=Ys,bs.prototype.InterpolantFactoryMethodSmooth=void 0;let pr=class extends tn{};pr.prototype.ValueTypeName="string",pr.prototype.ValueBufferType=Array,pr.prototype.DefaultInterpolation=pa,pr.prototype.InterpolantFactoryMethodLinear=void 0,pr.prototype.InterpolantFactoryMethodSmooth=void 0;let Aa=class extends tn{};Aa.prototype.ValueTypeName="vector";let xy=class{constructor(t,e=-1,i,n=h0){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Ii(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(vy(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(tn.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=fy(l);l=af(l,1,h),c=af(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ta(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,y){if(f.length!==0){const g=[],p=[];of(f,g,p,m),g.length!==0&&y.push(new u(d,g,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(const y in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const x=d[m];g.push(x.time),p.push(x.morphTarget===y?1:0)}n.push(new Ta(".morphTargetInfluence["+y+"]",g,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";i(Aa,f+".position",d,"pos",n),i(bs,f+".quaternion",d,"rot",n),i(Aa,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _y(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ta;case"vector":case"vector2":case"vector3":case"vector4":return Aa;case"color":return lf;case"quaternion":return bs;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function vy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=_y(r.type);if(r.times===void 0){const e=[],i=[];of(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const mr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};let My=class{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}};const by=new My;let Ea=class{constructor(t){this.manager=t!==void 0?t:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};const vn={};let Sy=class extends Error{constructor(t,e){super(t),this.response=e}},cf=class extends Ea{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=mr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(vn[t]!==void 0){vn[t].push({onLoad:e,onProgress:i,onError:n});return}vn[t]=[],vn[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=vn[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let y=0;const g=new ReadableStream({start(p){_();function _(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{y+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let S=0,T=h.length;S<T;S++){const R=h[S];R.onProgress&&R.onProgress(v)}p.enqueue(M),_()}})}}});return new Response(g)}else throw new Sy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{mr.add(t,c);const h=vn[t];delete vn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=vn[t];if(h===void 0)throw this.manager.itemError(t),c;delete vn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},wy=class extends Ea{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=mr.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=vc("img");function l(){h(),mr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}},Ty=class extends Ea{constructor(t){super(t)}load(t,e,i,n){const s=new gs,a=new wy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},jc=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};const qc=new wt,hf=new I,uf=new I;let Yc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iy,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new oi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(hf),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};class Ay extends Yc{constructor(){super(new zc(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ga*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ey extends jc{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Ay}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const df=new wt,Ra=new I,Kc=new I;let Ry=class extends Yc{constructor(){super(new zc(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new oi(2,1,1,1),new oi(0,1,1,1),new oi(3,1,1,1),new oi(1,1,1,1),new oi(3,0,1,1),new oi(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ra.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ra),Kc.copy(i.position),Kc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Kc),i.updateMatrixWorld(),n.makeTranslation(-Ra.x,-Ra.y,-Ra.z),df.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}},Cy=class extends jc{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ry}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};class Py extends Yc{constructor(){super(new Od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ff extends jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zc{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}let Ly=class extends Ea{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=mr.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){mr.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){n&&n(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}};const Jc="\\[\\]\\.:\\/",Iy=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",Dy="[^"+Jc.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Uy=/(WCOD+)?/.source.replace("WCOD",Dy),Ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),zy=new RegExp("^"+Fy+Uy+Ny+By+"$"),Oy=["material","materials","bones","map"];let ky=class{constructor(t,e,i){const n=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class ua{constructor(t,e,i){this.path=e,this.parsedPath=i||ua.parseTrackName(e),this.node=ua.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ua.Composite(t,e,i):new ua(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iy,"")}static parseTrackName(t){const e=zy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Oy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=ua.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=ky,he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray],he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const pf=new I,No=new I;let Mn=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){pf.subVectors(t,this.start),No.subVectors(this.end,this.start);const i=No.dot(No);let s=No.dot(pf)/i;return e&&(s=Ue(s,0,1)),s}closestPointToPoint(t,e,i){const n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);const Be=new Zi,Bo=new I;class Vy{constructor(t){let e=t.geometry;e.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),e=e.toNonIndexed()),this.geometry=e,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){const t=this.positionAttribute,e=this.weightAttribute,i=new Float32Array(t.count/3);for(let s=0;s<t.count;s+=3){let a=1;e&&(a=e.getX(s)+e.getX(s+1)+e.getX(s+2)),Be.a.fromBufferAttribute(t,s),Be.b.fromBufferAttribute(t,s+1),Be.c.fromBufferAttribute(t,s+2),a*=Be.getArea(),i[s/3]=a}this.distribution=new Float32Array(t.count/3);let n=0;for(let s=0;s<i.length;s++)n+=i[s],this.distribution[s]=n;return this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,i){const n=this.distribution[this.distribution.length-1],s=this.binarySearch(this.randomFunction()*n);return this.sampleFace(s,t,e,i)}binarySearch(t){const e=this.distribution;let i=0,n=e.length-1,s=-1;for(;i<=n;){const a=Math.ceil((i+n)/2);if(a===0||e[a-1]<=t&&e[a]>t){s=a;break}else t<e[a]?n=a-1:i=a+1}return s}sampleFace(t,e,i,n){let s=this.randomFunction(),a=this.randomFunction();return s+a>1&&(s=1-s,a=1-a),Be.a.fromBufferAttribute(this.positionAttribute,t*3),Be.b.fromBufferAttribute(this.positionAttribute,t*3+1),Be.c.fromBufferAttribute(this.positionAttribute,t*3+2),e.set(0,0,0).addScaledVector(Be.a,s).addScaledVector(Be.b,a).addScaledVector(Be.c,1-(s+a)),i!==void 0&&Be.getNormal(i),n!==void 0&&this.colorAttribute!==void 0&&(Be.a.fromBufferAttribute(this.colorAttribute,t*3),Be.b.fromBufferAttribute(this.colorAttribute,t*3+1),Be.c.fromBufferAttribute(this.colorAttribute,t*3+2),Bo.set(0,0,0).addScaledVector(Be.a,s).addScaledVector(Be.b,a).addScaledVector(Be.c,1-(s+a)),n.r=Bo.x,n.g=Bo.y,n.b=Bo.z),this}}const Hy="152",Gy=0,mf=1,Wy=2,gf=1,yf=2,bn=3,Bi=0,ei=1,en=2,Kn=0,gr=1,th=2,xf=3,_f=4,vf=5,Ss=100,Xy=101,$y=102,Mf=103,bf=104,jy=200,Sf=201,qy=202,Yy=203,wf=204,eh=205,Ky=206,Zy=207,Jy=208,Qy=209,tx=210,ex=0,ix=1,nx=2,ih=3,sx=4,rx=5,ax=6,ox=7,zo=0,lx=1,cx=2,Sn=0,hx=1,ux=2,dx=3,Tf=4,fx=5,Af=300,yr=301,xr=302,nh=303,sh=304,Oo=306,rh=1e3,zi=1001,ah=1002,Se=1003,Ef=1004,oh=1005,Mi=1006,px=1007,Ca=1008,ws=1009,mx=1010,gx=1011,Rf=1012,yx=1013,Ts=1014,As=1015,Pa=1016,xx=1017,_x=1018,Es=1020,vx=1021,ii=1023,Mx=1024,bx=1025,Rs=1026,Cs=1027,Sx=1028,wx=1029,Tx=1030,Ax=1031,Ex=1033,lh=33776,ch=33777,hh=33778,uh=33779,Cf=35840,Pf=35841,Lf=35842,If=35843,Rx=36196,Df=37492,Ff=37496,Uf=37808,Nf=37809,Bf=37810,zf=37811,Of=37812,kf=37813,Vf=37814,Hf=37815,Gf=37816,Wf=37817,Xf=37818,$f=37819,jf=37820,qf=37821,dh=36492,Cx=36283,Yf=36284,Kf=36285,Zf=36286,bi=2200,Px=2201,Lx=2202,ko=2300,Vo=2301,fh=2302,_r=2400,vr=2401,Ho=2402,ph=2500,Ix=2501,Jf=3e3,Ps=3001,Dx=3200,Fx=3201,Go=0,Ux=1,Ls="",Lt="srgb",nn="srgb-linear",Qf="display-p3",mh=7680,Nx=519,tp=35044,Mr="300 es",gh=1035;class Zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}let Bx=0,Jn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=gr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wf,this.blendDst=eh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mh,this.stencilZFail=mh,this.stencilZPass=mh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],y=n[0],g=n[3],p=n[6],_=n[1],x=n[4],M=n[7],v=n[2],S=n[5],T=n[8];return s[0]=a*y+o*_+l*v,s[3]=a*g+o*x+l*S,s[6]=a*p+o*M+l*T,s[1]=c*y+h*_+u*v,s[4]=c*g+h*x+u*S,s[7]=c*p+h*M+u*T,s[2]=d*y+f*_+m*v,s[5]=d*g+f*x+m*S,s[8]=d*p+f*M+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yh.makeScale(t,e)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,e){return this.premultiply(yh.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new Ot;function br(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const zx=new Ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ox=new Ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kx(r){return r.convertSRGBToLinear().applyMatrix3(Ox)}function Vx(r){return r.applyMatrix3(zx).convertLinearToSRGB()}const Hx={[nn]:r=>r,[Lt]:r=>r.convertSRGBToLinear(),[Qf]:kx},Gx={[nn]:r=>r,[Lt]:r=>r.convertLinearToSRGB(),[Qf]:Vx},Oi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return nn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=Hx[t],n=Gx[e];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function _h(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Dt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Lt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oi.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Oi.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oi.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Oi.workingColorSpace){if(t=Kg(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=_h(a,s,t+1/3),this.g=_h(a,s,t),this.b=_h(a,s,t-1/3)}return Oi.toWorkingColorSpace(this,n),this}setStyle(t,e=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Lt){const i=ep[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=xh(t.r),this.g=xh(t.g),this.b=xh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Lt){return Oi.fromWorkingColorSpace(Xe.copy(this),t),Math.round(He(Xe.r*255,0,255))*65536+Math.round(He(Xe.g*255,0,255))*256+Math.round(He(Xe.b*255,0,255))}getHexString(t=Lt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oi.workingColorSpace){Oi.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,n=Xe.g,s=Xe.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Oi.workingColorSpace){return Oi.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Lt){Oi.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,n=Xe.b;return t!==Lt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),ki.h+=t,ki.s+=e,ki.l+=i,this.setHSL(ki.h,ki.s,ki.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Wo);const i=rc(ki.h,Wo.h,e),n=rc(ki.s,Wo.s,e),s=rc(ki.l,Wo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Dt;Dt.NAMES=ep;class Wx extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox),Sr.applyMatrix4(t.matrixWorld),this.union(Sr);else{const n=t.geometry;if(n!==void 0)if(e&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Tn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Tn)}else n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const i=t.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(La),Xo.subVectors(this.max,La),wr.subVectors(t.a,La),Tr.subVectors(t.b,La),Ar.subVectors(t.c,La),ts.subVectors(Tr,wr),es.subVectors(Ar,Tr),Is.subVectors(wr,Ar);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Is.z,Is.y,ts.z,0,-ts.x,es.z,0,-es.x,Is.z,0,-Is.x,-ts.y,ts.x,0,-es.y,es.x,0,-Is.y,Is.x,0];return!vh(e,wr,Tr,Ar,Xo)||(e=[1,0,0,0,1,0,0,0,1],!vh(e,wr,Tr,Ar,Xo))?!1:($o.crossVectors(ts,es),e=[$o.x,$o.y,$o.z],vh(e,wr,Tr,Ar,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new D,new D,new D,new D,new D,new D,new D,new D],Tn=new D,Sr=new Qn,wr=new D,Tr=new D,Ar=new D,ts=new D,es=new D,Is=new D,La=new D,Xo=new D,$o=new D,Ds=new D;function vh(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ds.fromArray(r,s);const o=n.x*Math.abs(Ds.x)+n.y*Math.abs(Ds.y)+n.z*Math.abs(Ds.z),l=t.dot(Ds),c=e.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const An=Xx();function Xx(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function hi(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=He(r,-65504,65504),An.floatView[0]=r;const t=An.uint32View[0],e=t>>23&511;return An.baseTable[e]+((t&8388607)>>An.shiftTable[e])}function jo(r){const t=r>>10;return An.uint32View[0]=An.mantissaTable[An.offsetTable[t]+(r&1023)]+An.exponentTable[t],An.floatView[0]}const ve=new D,qo=new Et;class Si{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tp&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ip extends Si{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class np extends Si{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Mh extends Si{constructor(t,e,i){super(new Uint16Array(t),e,i),this.isFloat16BufferAttribute=!0}getX(t){let e=jo(this.array[t*this.itemSize]);return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=hi(e),this}getY(t){let e=jo(this.array[t*this.itemSize+1]);return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=hi(e),this}getZ(t){let e=jo(this.array[t*this.itemSize+2]);return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=hi(e),this}getW(t){let e=jo(this.array[t*this.itemSize+3]);return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=hi(e),this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=hi(e),this.array[t+1]=hi(i),this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.array[t+0]=hi(e),this.array[t+1]=hi(i),this.array[t+2]=hi(n),this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=hi(e),this.array[t+1]=hi(i),this.array[t+2]=hi(n),this.array[t+3]=hi(s),this}}class $t extends Si{constructor(t,e,i){super(new Float32Array(t),e,i)}}const $x=new Qn,Ia=new D,bh=new D;class Er{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$x.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ia.subVectors(t,this.center);const e=Ia.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ia,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ia.copy(t.center).add(bh)),this.expandByPoint(Ia.copy(t.center).sub(bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}class Jt{constructor(){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,s,a,o,l,c,h,u,d,f,m,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Rr.setFromMatrixColumn(t,0).length(),s=1/Rr.setFromMatrixColumn(t,1).length(),a=1/Rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,y=c*u;e[0]=d+y*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,y=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jx,t,qx)}lookAt(t,e,i){const n=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(i,ui),is.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(i,ui)),is.normalize(),Yo.crossVectors(ui,is),n[0]=is.x,n[4]=Yo.x,n[8]=ui.x,n[1]=is.y,n[5]=Yo.y,n[9]=ui.y,n[2]=is.z,n[6]=Yo.z,n[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],_=i[3],x=i[7],M=i[11],v=i[15],S=n[0],T=n[4],R=n[8],b=n[12],w=n[1],F=n[5],L=n[9],C=n[13],U=n[2],N=n[6],G=n[10],W=n[14],H=n[3],X=n[7],Z=n[11],ot=n[15];return s[0]=a*S+o*w+l*U+c*H,s[4]=a*T+o*F+l*N+c*X,s[8]=a*R+o*L+l*G+c*Z,s[12]=a*b+o*C+l*W+c*ot,s[1]=h*S+u*w+d*U+f*H,s[5]=h*T+u*F+d*N+f*X,s[9]=h*R+u*L+d*G+f*Z,s[13]=h*b+u*C+d*W+f*ot,s[2]=m*S+y*w+g*U+p*H,s[6]=m*T+y*F+g*N+p*X,s[10]=m*R+y*L+g*G+p*Z,s[14]=m*b+y*C+g*W+p*ot,s[3]=_*S+x*w+M*U+v*H,s[7]=_*T+x*F+M*N+v*X,s[11]=_*R+x*L+M*G+v*Z,s[15]=_*b+x*C+M*W+v*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+y*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],_=u*g*c-y*d*c+y*l*f-o*g*f-u*l*p+o*d*p,x=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,M=h*y*c-m*u*c+m*o*f-a*y*f-h*o*p+a*u*p,v=m*u*l-h*y*l-m*o*d+a*y*d+h*o*g-a*u*g,S=e*_+i*x+n*M+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=_*T,t[1]=(y*d*s-u*g*s-y*n*f+i*g*f+u*n*p-i*d*p)*T,t[2]=(o*g*s-y*l*s+y*n*c-i*g*c-o*n*p+i*l*p)*T,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*T,t[4]=x*T,t[5]=(h*g*s-m*d*s+m*n*f-e*g*f-h*n*p+e*d*p)*T,t[6]=(m*l*s-a*g*s-m*n*c+e*g*c+a*n*p-e*l*p)*T,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*T,t[8]=M*T,t[9]=(m*u*s-h*y*s-m*i*f+e*y*f+h*i*p-e*u*p)*T,t[10]=(a*y*s-m*o*s+m*i*c-e*y*c-a*i*p+e*o*p)*T,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*T,t[12]=v*T,t[13]=(h*y*n-m*u*n+m*i*d-e*y*d-h*i*g+e*u*g)*T,t[14]=(m*o*n-a*y*n-m*i*l+e*y*l+a*i*g-e*o*g)*T,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*T,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,y=a*h,g=a*u,p=o*u,_=l*c,x=l*h,M=l*u,v=i.x,S=i.y,T=i.z;return n[0]=(1-(y+p))*v,n[1]=(f+M)*v,n[2]=(m-x)*v,n[3]=0,n[4]=(f-M)*S,n[5]=(1-(d+p))*S,n[6]=(g+_)*S,n[7]=0,n[8]=(m+x)*T,n[9]=(g-_)*T,n[10]=(1-(d+y))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=Rr.set(n[0],n[1],n[2]).length();const a=Rr.set(n[4],n[5],n[6]).length(),o=Rr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Vi.copy(this);const c=1/s,h=1/a,u=1/o;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=u,Vi.elements[9]*=u,Vi.elements[10]*=u,e.setFromRotationMatrix(Vi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a){const o=this.elements,l=2*s/(e-t),c=2*s/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,n,s,a){const o=this.elements,l=1/(e-t),c=1/(i-n),h=1/(a-s),u=(e+t)*l,d=(i+n)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rr=new D,Vi=new Jt,jx=new D(0,0,0),qx=new D(1,1,1),is=new D,Yo=new D,ui=new D,sp=new Jt,rp=new _i;class sn{constructor(t=0,e=0,i=0,n=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rp.setFromEuler(this),this.setFromQuaternion(rp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yx=0;const ap=new D,Cr=new _i,En=new Jt,Ko=new D,Da=new D,Kx=new D,Zx=new _i,op=new D(1,0,0),lp=new D(0,1,0),cp=new D(0,0,1),Jx={type:"added"},hp={type:"removed"};class $e extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new D,e=new sn,i=new _i,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ot}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(op,t)}rotateY(t){return this.rotateOnAxis(lp,t)}rotateZ(t){return this.rotateOnAxis(cp,t)}translateOnAxis(t,e){return ap.copy(t).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(op,t)}translateY(t){return this.translateOnAxis(lp,t)}translateZ(t){return this.translateOnAxis(cp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Da,Ko,this.up):En.lookAt(Ko,Da,this.up),this.quaternion.setFromRotationMatrix(En),n&&(En.extractRotation(n.matrixWorld),Cr.setFromRotationMatrix(En),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(hp)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,t,Kx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Zx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}$e.DEFAULT_UP=new D(0,1,0),$e.DEFAULT_MATRIX_AUTO_UPDATE=!0,$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function up(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const dp={};function Ua(r){r in dp||(dp[r]=!0,console.warn(r))}let Qx=0;const wi=new Jt,wh=new $e,Pr=new D,di=new Qn,Na=new Qn,Ce=new D;class fi extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?np:ip)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,i){return wi.makeTranslation(t,e,i),this.applyMatrix4(wi),this}scale(t,e,i){return wi.makeScale(t,e,i),this.applyMatrix4(wi),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(di.min,Na.min),di.expandByPoint(Ce),Ce.addVectors(di.max,Na.max),di.expandByPoint(Ce)):(di.expandByPoint(Na.min),di.expandByPoint(Na.max))}di.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ce.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ce));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(t,c),Ce.add(Pr)),n=Math.max(n,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new D,h[w]=new D;const u=new D,d=new D,f=new D,m=new Et,y=new Et,g=new Et,p=new D,_=new D;function x(w,F,L){u.fromArray(n,w*3),d.fromArray(n,F*3),f.fromArray(n,L*3),m.fromArray(a,w*2),y.fromArray(a,F*2),g.fromArray(a,L*2),d.sub(u),f.sub(u),y.sub(m),g.sub(m);const C=1/(y.x*g.y-g.x*y.y);isFinite(C)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-y.y).multiplyScalar(C),_.copy(f).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(C),c[w].add(p),c[F].add(p),c[L].add(p),h[w].add(_),h[F].add(_),h[L].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,F=M.length;w<F;++w){const L=M[w],C=L.start,U=L.count;for(let N=C,G=C+U;N<G;N+=3)x(i[N+0],i[N+1],i[N+2])}const v=new D,S=new D,T=new D,R=new D;function b(w){T.fromArray(s,w*3),R.copy(T);const F=c[w];v.copy(F),v.sub(T.multiplyScalar(T.dot(F))).normalize(),S.crossVectors(R,F);const C=S.dot(h[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=C}for(let w=0,F=M.length;w<F;++w){const L=M[w],C=L.start,U=L.count;for(let N=C,G=C+U;N<G;N+=3)b(i[N+0]),b(i[N+1]),b(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Si(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Th extends fi{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){const _=[],x=p/i;let M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let v=0;v<=e;v++){const S=v/e;u.x=-t*Math.cos(n+S*s)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(n+S*s)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(S+M,1-x),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const x=h[p][_+1],M=h[p][_],v=h[p+1][_],S=h[p+1][_+1];(p!==0||a>0)&&f.push(x,M,S),(p!==i-1||l<Math.PI)&&f.push(M,v,S)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Th(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zo extends fi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){const _=p*d-a;for(let x=0;x<c;x++){const M=x*u-s;m.push(M,-_,0),y.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const x=_+c*p,M=_+c*(p+1),v=_+1+c*(p+1),S=_+1+c*p;f.push(x,M,S),f.push(M,v,S)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.widthSegments,t.heightSegments)}}class fp extends Si{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rn=new D,Ah=new D,Jo=new D,ns=new D,Eh=new D,Qo=new D,Rh=new D;class Ch{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ah.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),ns.copy(this.origin).sub(Ah);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Jo),o=ns.dot(this.direction),l=-ns.dot(Jo),c=ns.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ah).addScaledVector(Jo,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const i=Rn.dot(this.direction),n=Rn.dot(Rn)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,n,s){Eh.subVectors(e,t),Qo.subVectors(i,t),Rh.crossVectors(Eh,Qo);let a=this.direction.dot(Rh),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,t);const l=o*this.direction.dot(Qo.crossVectors(ns,Qo));if(l<0)return null;const c=o*this.direction.dot(Eh.cross(ns));if(c<0||l+c>a)return null;const h=-o*ns.dot(Rh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const Hi=new D,Cn=new D,Ph=new D,Pn=new D,Lr=new D,Ir=new D,pp=new D,Lh=new D,Ih=new D,Dh=new D;let tl=!1;class Gi{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Hi.subVectors(t,e),n.cross(Hi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Hi.subVectors(n,e),Cn.subVectors(i,e),Ph.subVectors(t,e);const a=Hi.dot(Hi),o=Hi.dot(Cn),l=Hi.dot(Ph),c=Cn.dot(Cn),h=Cn.dot(Ph),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(t,e,i,n,s,a,o,l){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),this.getInterpolation(t,e,i,n,s,a,o,l)}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Pn),l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(t,e,i,n){return Hi.subVectors(i,e),Cn.subVectors(t,e),Hi.cross(Cn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Hi.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),Gi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return Gi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;Lr.subVectors(n,i),Ir.subVectors(s,i),Lh.subVectors(t,i);const l=Lr.dot(Lh),c=Ir.dot(Lh);if(l<=0&&c<=0)return e.copy(i);Ih.subVectors(t,n);const h=Lr.dot(Ih),u=Ir.dot(Ih);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Lr,a);Dh.subVectors(t,s);const f=Lr.dot(Dh),m=Ir.dot(Dh);if(m>=0&&f<=m)return e.copy(s);const y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Ir,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return pp.subVectors(s,n),o=(u-h)/(u-h+(f-m)),e.copy(n).addScaledVector(pp,o);const p=1/(g+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(Lr,a).addScaledVector(Ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Dr extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mp=new Jt,rn=new Ch,el=new Er,gp=new D,Fr=new D,Ur=new D,Nr=new D,Fh=new D,il=new D,nl=new Et,sl=new Et,rl=new Et,yp=new D,xp=new D,_p=new D,al=new D,ol=new D;class de extends $e{constructor(t=new fi,e=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Fh.fromBufferAttribute(u,t),a?il.addScaledVector(Fh,h):il.addScaledVector(Fh.sub(e),h))}e.add(il)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),rn.copy(t.ray).recast(t.near),!(el.containsPoint(rn.origin)===!1&&(rn.intersectSphere(el,gp)===null||rn.origin.distanceToSquared(gp)>(t.far-t.near)**2))&&(mp.copy(s).invert(),rn.copy(t.ray).applyMatrix4(mp),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let i;const n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=a.getX(x),S=a.getX(x+1),T=a.getX(x+2);i=ll(this,g,t,rn,l,c,h,v,S,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,e.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=a.getX(y),_=a.getX(y+1),x=a.getX(y+2);i=ll(this,s,t,rn,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=x,S=x+1,T=x+2;i=ll(this,g,t,rn,l,c,h,v,S,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,e.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=y,_=y+1,x=y+2;i=ll(this,s,t,rn,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),e.push(i))}}}}function t_(r,t,e,i,n,s,a,o){let l;if(t.side===ei?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Bi,o),l===null)return null;ol.copy(o),ol.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ol);return c<e.near||c>e.far?null:{distance:c,point:ol.clone(),object:r}}function ll(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Fr),r.getVertexPosition(l,Ur),r.getVertexPosition(c,Nr);const h=t_(r,t,e,i,Fr,Ur,Nr,al);if(h){n&&(nl.fromBufferAttribute(n,o),sl.fromBufferAttribute(n,l),rl.fromBufferAttribute(n,c),h.uv=Gi.getInterpolation(al,Fr,Ur,Nr,nl,sl,rl,new Et)),s&&(nl.fromBufferAttribute(s,o),sl.fromBufferAttribute(s,l),rl.fromBufferAttribute(s,c),h.uv1=Gi.getInterpolation(al,Fr,Ur,Nr,nl,sl,rl,new Et),h.uv2=h.uv1),a&&(yp.fromBufferAttribute(a,o),xp.fromBufferAttribute(a,l),_p.fromBufferAttribute(a,c),h.normal=Gi.getInterpolation(al,Fr,Ur,Nr,yp,xp,_p,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};Gi.getNormal(Fr,Ur,Nr,u.normal),h.face=u}return h}const Br=new Jt,vp=new Jt,cl=[],Mp=new Qn,e_=new Jt,Ba=new de,za=new Er;class i_ extends de{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,e_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Br),Mp.copy(t.boundingBox).applyMatrix4(Br),this.boundingBox.union(Mp)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Br),za.copy(t.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(za)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Ba.geometry=this.geometry,Ba.material=this.material,Ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(i),t.ray.intersectsSphere(za)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Br),vp.multiplyMatrices(i,Br),Ba.matrixWorld=vp,Ba.raycast(t,cl);for(let a=0,o=cl.length;a<o;a++){const l=cl[a];l.instanceId=s,l.object=this,e.push(l)}cl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fp(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class bp extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class le{constructor(t=0,e=0,i=0,n=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,v=(p+1)/2,S=(h+d)/4,T=(u+y)/4,R=(m+g)/4;return x>M&&x>v?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=S/i,s=T/i):M>v?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=S/n,s=R/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=T/s,n=R/s),this.set(i,n,s,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}const Uh=new D,n_=new D,s_=new Ot;class Fs{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Uh.subVectors(i,e).cross(n_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Uh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||s_.getNormalMatrix(t),n=this.coplanarPoint(Uh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Er,hl=new D;class Nh{constructor(t=new Fs,e=new Fs,i=new Fs,n=new Fs,s=new Fs,a=new Fs){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],y=i[11],g=i[12],p=i[13],_=i[14],x=i[15];return e[0].setComponents(o-n,u-l,y-d,x-g).normalize(),e[1].setComponents(o+n,u+l,y+d,x+g).normalize(),e[2].setComponents(o+s,u+c,y+f,x+p).normalize(),e[3].setComponents(o-s,u-c,y-f,x-p).normalize(),e[4].setComponents(o-a,u-h,y-m,x-_).normalize(),e[5].setComponents(o+a,u+h,y+m,x+_).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(hl.x=n.normal.x>0?t.max.x:t.min.x,hl.y=n.normal.y>0?t.max.y:t.min.y,hl.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(hl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Bh=new Jt,Sp=new D,wp=new D;class r_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sp),wp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wp),e.updateMatrixWorld(),Bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}let Tp=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class pi extends Tp{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ap=new Jt,Oa=new D,zh=new D;class a_ extends r_{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Oa.setFromMatrixPosition(t.matrixWorld),i.position.copy(Oa),zh.copy(i.position),zh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(zh),i.updateMatrixWorld(),n.makeTranslation(-Oa.x,-Oa.y,-Oa.z),Ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ap)}}class Ep extends bp{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new a_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}const Oh=(r,t)=>(Math.random()*(t-r+1)|0)+r,Ke=(r,t)=>Math.random()*(t-r)+r,o_=(r,t,e)=>r+e*(t-r),Rp=1/60,Qt=Object.freeze({m075:Math.PI*.75,m2:Math.PI*2,d2:Math.PI/2,d3:Math.PI/3,d4:Math.PI/4,d6:Math.PI/6});class l_{constructor(){this.target=new EventTarget,this.events=new Map,this.callbacks=new Map}add(t,e){this.callbacks.set(t,e),this.events.set(t,new h_(t)),this.target.addEventListener(t,e,!1)}dispatch(t,e=null){const i=this.events.get(t);i&&(i.data=e,this.target.dispatchEvent(i))}remove(t){const e=this.callbacks.get(t);this.target.removeEventListener(t,e,!1),this.callbacks.delete(t),this.events.delete(t)}dispose(){for(const[t]of this.events)this.remove(t);this.callbacks.clear(),this.events.clear()}}class Cp{constructor(t){this.worker=t}add(t,e){this.worker.add(t,e)}static dispatch(t,e=null){WT.postMessage({name:t,response:e})}remove(t){this.worker.remove(t)}dispose(){this.worker.clear()}}var c_={easy:{maxEnemies:10,rifleSpawn:3,enemy:{immune:!1,lose:!0,walk:500,run:250},damage:{enemy:{strong:10,soft:5},pistol:{head:90,body:25,leg:10},rifle:{head:100,body:50,leg:20}}},normal:{maxEnemies:25,rifleSpawn:5,enemy:{immune:!1,lose:!1,walk:1e3,run:500},damage:{enemy:{strong:25,soft:10},pistol:{head:75,body:10,leg:5},rifle:{head:80,body:20,leg:10}}},hard:{maxEnemies:50,rifleSpawn:8,enemy:{immune:!0,lose:!1,walk:-1,run:1e4},damage:{enemy:{strong:50,soft:25},pistol:{head:50,body:5,leg:1},rifle:{head:75,body:10,leg:5}}}},ss={position:[0,1.25,25],collider:[.6,1.7,-.85],scale:[1.5,1.5,1.5],model:"player.glb",mass:90,sounds:{death:"player/death.mp3",hit:"player/hit.mp3"},animations:{Idle:[0,0,0,0],Run:[8.75,1,0,0],Left:[3.5,1,-1,1],Right:[4.5,1,1,-1],Backward:[3,-1,0,0],BackwardLeft:[2,-1,-.5,.5],BackwardRight:[2,-1,.5,-.5],ForwardRight:[4,1,.5,-.5],ForwardLeft:[4,1,-.5,.5],Forward:[5,1,0,0]}},fe={rotation:[1.5707963267948966,3.3415926535897933,-.075],position:[-10,-4,.25],scale:[13,13,13],emissiveIntensity:.025,spread:[.001,.001],recoil:[0,-.01],emissive:12632256,model:"1911.glb",textures:"1911",headshot:.9,magazine:-1,ammo:-1,sounds:{bullet:"weapons/shell.mp3",shoot:"weapons/1911.mp3"},bullet:{position:[.1,.1,.35],lifeTime:500,speed:253,scale:.4},fire:{position:[1.5,.53],particles:[3,5],intensity:2,velocity:.25,scale:1}},zr={fps:{idle:[0,1.6,.075],aim:[-.05,1.525,.25]},tps:{idle:[-.525,1.5375,-1.5],aim:[-.3,1.535,-.5],run:[-1.1,1.2,-3]}},ze={ambient:"environment/rain.mp3",position:[0,4.98,13.5],sidewalkHeight:.216,scale:[75,75,75],model:"level.glb",cloud:"cloud.png",fogDensity:.01,fog:"fog.png",skybox:"sky",height:10,depth:250,portalsOffset:[-.025,.225,-.275,-.025],lighting:["environment/lightning0.mp3","environment/lightning1.mp3","environment/lightning2.mp3","environment/lightning3.mp3","environment/lightning4.mp3"],rain:["rain/drop0.png","rain/drop1.png","rain/drop2.png","rain/drop3.png","rain/drop4.png"],portals:[[-39.5,53],[-39.5,37],[-29.5,-128],[-29.5,-144],[74,-144],[74,-128],[64,37],[64,53]],bounds:[[84,53],[-59.5,53],[-59.5,37],[-10,37],[-10,-30],[-6.5,-39],[.2,-46.8],[9.2,-52.5],[19.5,-53.5],[25,-59.8],[25,-128],[-49.5,-128],[-49.5,-144],[94,-144],[94,-128],[44.5,-128],[44.5,-61],[41,-52],[34.3,-44.2],[25.3,-38.5],[15,-37.5],[9.5,-31.2],[9.5,37],[84,37]],sidewalk:[[85,50.35],[-60,50.35],[-60,39.75],[-7.2,39.75],[-7.2,-31],[-4.2,-38.1],[2.25,-45],[10.15,-49.8],[19.75,-51],[27.85,-59.25],[27.75,-130.75],[-50.5,-130.75],[-50.5,-141.35],[94.5,-141.35],[94.5,-130.75],[41.7,-130.75],[41.7,-59.75],[38.7,-52.25],[32.8,-46.25],[24.5,-41.25],[14.4,-39.9],[6.75,-31.75],[6.75,39.75],[85,39.75]]},rs={collider:[.75,1.8,-.895],position:[0,1.18,-10],scale:[1.33,1.33,1.33],model:"enemy.glb",mass:75,sounds:{hardAttack:"enemy/hardAttack.mp3",softAttack:"enemy/softAttack.mp3",scream:"enemy/scream.mp3",death:"enemy/death.mp3",hit:"enemy/hit.mp3"},animations:{Idle:[0,0,0,0],Walking:[.5,1,0,0],Running:[3.5,1,0,0],Falling:[.75,1,0,0],Crawling:[.5,1,0,0]}},ce={rotation:[1.7707963267948965,3.061592653589793,-.41],spinePosition:[-10,22.5,-20],worldScale:[.005,.005,.005],spineRotation:[0,0,-1],position:[-26,1,-5.75],scale:[.29,.29,.29],spread:[.0025,.0025],recoil:[.02,-.025],model:"AK47.glb",textures:"AK47",headshot:.8,maxStock:150,magazine:30,ammo:0,sounds:{reload:"weapons/reload.mp3",bullet:"weapons/case.mp3",empty:"weapons/empty.mp3",shoot:"weapons/AK47.mp3",pick:"weapons/pick.mp3"},bullet:{position:[.065,.13,.75],lifeTime:200,speed:670,scale:.6},fire:{position:[160,30],particles:[5,8],intensity:3,velocity:11.2,scale:2.5}};const Ln=r=>{Object.freeze(r);const t=Object.getOwnPropertyNames(r);for(const e in t){const i=r[t[e]];i&&(typeof i=="object"||typeof i=="function")&&!Object.isFrozen(i)&&Ln(i)}return r};var kh;(r=>{const t=()=>r.offscreen||r.worker?`${window.location.pathname.slice(0,window.location.pathname.lastIndexOf("/"))}/assets`:`${window.location.pathname.replace(/\/[^/]*$/,"")}/assets`,e=a=>Object.assign({},...Object.keys(a).map(o=>({[o]:{speed:a[o][0],direction:{z0:a[o][1],x0:a[o][2],x1:a[o][3]}}}))),i=ss.animations,n=rs.animations;r.APP=navigator.userAgent.toLowerCase().includes("electron");const s=a=>a<0?1/0:a;r.offscreen=typeof HTMLCanvasElement<"u"&&!!HTMLCanvasElement.prototype.transferControlToOffscreen,r.worker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,r.basePath=(a=!1)=>r.APP?r.offscreen||!r.worker?a?"./":"./assets":"./":a?"":t(),r.RandomCoords=Ln({playerDistance:5,boundOffset:.5,ammount:50}),r.Gameplay=Ln(c_.normal),r.Level=Ln({position:new D(...ze.position),sidewalkHeight:ze.sidewalkHeight,portalsOffset:ze.portalsOffset,scale:new D(...ze.scale),fogDensity:ze.fogDensity,lighting:ze.lighting,sidewalk:ze.sidewalk,ambient:ze.ambient,portals:ze.portals,skybox:ze.skybox,bounds:ze.bounds,height:ze.height,depth:ze.depth,model:ze.model,cloud:ze.cloud,rain:ze.rain,fog:ze.fog}),r.Camera=Ln({fps:{idle:new D(...zr.fps.idle),run:new D(...zr.fps.idle),aim:new D(...zr.fps.aim)},tps:{idle:new D(...zr.tps.idle),run:new D(...zr.tps.run),aim:new D(...zr.tps.aim)}}),r.Player=Ln({position:new D(...ss.position),collider:new D(...ss.collider),scale:new D(...ss.scale),moves:e(i),animations:ss.animations,sounds:ss.sounds,model:ss.model,mass:ss.mass}),r.Enemy=Ln({position:new D(...rs.position),collider:new D(...rs.collider),scale:new D(...rs.scale),moves:e(n),animations:rs.animations,sounds:rs.sounds,model:rs.model,mass:rs.mass}),r.Pistol=Ln({emissiveIntensity:fe.emissiveIntensity,position:new D(...fe.position),rotation:new sn(...fe.rotation),spread:new Et(...fe.spread),recoil:new Et(...fe.recoil),scale:new D(...fe.scale),magazine:s(fe.magazine),ammo:s(fe.ammo),headshot:fe.headshot,textures:fe.textures,emissive:fe.emissive,sounds:fe.sounds,model:fe.model,bullet:{position:new D(...fe.bullet.position),lifeTime:fe.bullet.lifeTime,speed:fe.bullet.speed,scale:fe.bullet.scale},fire:{position:new Et(...fe.fire.position),particles:fe.fire.particles,intensity:fe.fire.intensity,velocity:fe.fire.velocity,scale:fe.fire.scale}}),r.Rifle=Ln({spinePosition:new D(...ce.spinePosition),spineRotation:new sn(...ce.spineRotation),worldScale:new D(...ce.worldScale),position:new D(...ce.position),rotation:new sn(...ce.rotation),spread:new Et(...ce.spread),recoil:new Et(...ce.recoil),scale:new D(...ce.scale),magazine:s(ce.magazine),ammo:s(ce.ammo),headshot:ce.headshot,textures:ce.textures,maxStock:ce.maxStock,sounds:ce.sounds,model:ce.model,bullet:{position:new D(...ce.bullet.position),lifeTime:ce.bullet.lifeTime,speed:ce.bullet.speed,scale:ce.bullet.scale},fire:{position:new Et(...ce.fire.position),particles:ce.fire.particles,intensity:ce.fire.intensity,velocity:ce.fire.velocity,scale:ce.fire.scale}})})(kh||(kh={}));var vt=kh;class h_ extends CustomEvent{constructor(){super(...arguments),this.data=null}}class u_ extends l_{createWorkerEvents(t){this.workerEvents=new Cp(t)}add(t,e,i=!1){vt.offscreen&&i?this.workerEvents?.add(t,e):super.add(t,e)}dispatch(t,e=null,i=!1){vt.worker&&i?Cp.dispatch(t,e):super.dispatch(t,e)}remove(t,e=!1){vt.offscreen&&e?this.workerEvents?.remove(t):super.remove(t)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const nt=new u_;function Pp(r,t){if(t===u0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===dc||t===gd){let e=r.getIndex();if(e===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=e.count-2,n=[];if(t===dc)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class d_ extends Ea{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new y_(e)}),this.register(function(e){return new w_(e)}),this.register(function(e){return new T_(e)}),this.register(function(e){return new A_(e)}),this.register(function(e){return new __(e)}),this.register(function(e){return new v_(e)}),this.register(function(e){return new M_(e)}),this.register(function(e){return new b_(e)}),this.register(function(e){return new g_(e)}),this.register(function(e){return new S_(e)}),this.register(function(e){return new x_(e)}),this.register(function(e){return new p_(e)}),this.register(function(e){return new E_(e)}),this.register(function(e){return new R_(e)})}load(t,e,i,n){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Zc.extractUrlBase(t),this.manager.itemStart(t);const o=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new cf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Lp){try{a[Vt.KHR_BINARY_GLTF]=new C_(t)}catch(u){n&&n(u);return}s=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new H_(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Vt.KHR_MATERIALS_UNLIT:a[u]=new m_;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new P_(s,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[u]=new L_;break;case Vt.KHR_MESH_QUANTIZATION:a[u]=new I_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}}function f_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class p_{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new Ee(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ff(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cy(h),c.distance=u;break;case"spot":c=new Ey(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,os(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(e.cache,o,l)})}}class m_{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return ar}extendParams(t,e,i){const n=[];t.color=new Ee(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;t.color.fromArray(a),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,Fe))}return Promise.all(n)}}class g_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class y_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ae(o,o)}return Promise.all(s)}}class x_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class __{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Ee(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=n.extensions[this.name];return a.sheenColorFactor!==void 0&&e.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Fe)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class v_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class M_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Ee(o[0],o[1],o[2]),Promise.all(s)}}class b_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class S_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ms}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Ee(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,Fe)),Promise.all(s)}}class w_{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}}class T_{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class A_{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class E_{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class R_{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Ti.TRIANGLES&&c.mode!==Ti.TRIANGLE_STRIP&&c.mode!==Ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const y=new wt,g=new I,p=new Gn,_=new I(1,1,1),x=new cy(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,y.compose(g,p,_));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Ne.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Lp="glTF",ka=12,Ip={JSON:1313821514,BIN:5130562};class C_{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ka),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Lp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ka,s=new DataView(t,ka);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ip.JSON){const c=new Uint8Array(t,ka+a,o);this.content=i.decode(c)}else if(l===Ip.BIN){const c=ka+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class P_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Hh[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=Hh[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[t.attributes[h]],f=Or[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],y=l[f];y!==void 0&&(m.normalized=y)}u(d)},o,c)})})}}class L_{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class I_{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Dp extends wa{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-e,u=(i-e)/h,d=u*u,f=d*u,m=t*c,y=m-c,g=-2*f+3*d,p=f-d,_=1-g,x=p-d+u;for(let M=0;M!==o;M++){const v=a[y+M+o],S=a[y+M+l]*h,T=a[m+M+o],R=a[m+M]*h;s[M]=_*v+x*S+g*T+p*R}return s}}const D_=new Gn;class F_ extends Dp{interpolate_(t,e,i,n){const s=super.interpolate_(t,e,i,n);return D_.fromArray(s).normalize().toArray(s),s}}const Ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fp={9728:lc,9729:cc,9984:r0,9985:o0,9986:a0,9987:hc},Up={33071:fa,33648:oc,10497:da},Vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U_={CUBICSPLINE:void 0,LINEAR:Ys,STEP:pa},Gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new $c({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qs})),r.DefaultMaterial}function Va(r,t,e){for(const i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function os(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function B_(r,t,e){let i=!1,n=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(i){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function z_(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function O_(r){const t=r.extensions&&r.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];let e;return t?e="draco:"+t.bufferView+":"+t.indices+":"+Np(t.attributes):e=r.indices+":"+Np(r.attributes)+":"+r.mode,e}function Np(r){let t="";const e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Wh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const V_=new wt;class H_{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new f_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new Ty(this.options.manager):this.textureLoader=new Ly(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};Va(s,o,n),os(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){const a=e[n].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){const a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(Zc.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const a=Vh[n.type],o=Or[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new qe(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Vh[n.type],c=Or[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let y,g;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let x=e.cache.get(_);x||(y=new c(o,p*f,n.count*f/h),x=new ny(y,f/h),e.cache.add(_,x)),g=new Vc(x,l,d%f/h,m)}else o===null?y=new c(n.count*l):y=new c(o,d,n.count*l),g=new qe(y,l,m);if(n.sparse!==void 0){const p=Vh.SCALAR,_=Or[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,v=new _(a[1],x,n.sparse.count*p),S=new c(a[2],M,n.sparse.count*l);o!==null&&(g=new qe(g.array.slice(),g.itemSize,g.normalized));for(let T=0,R=v.length;T<R;T++){const b=v[T];if(g.setX(b,S[T*l]),l>=2&&g.setY(b,S[T*l+1]),l>=3&&g.setZ(b,S[T*l+2]),l>=4&&g.setW(b,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){const e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){const n=this,s=this.json,a=s.textures[t],o=s.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Fp[d.magFilter]||cc,h.minFilter=Fp[d.minFilter]||hc,h.wrapS=Up[d.wrapS]||da,h.wrapT=Up[d.wrapT]||da,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=n.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(y){const g=new gs(y);g.needsUpdate=!0,d(g)}),e.load(Zc.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||k_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ef,_s.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(t.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Yd,_s.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return $c}loadMaterial(t){const e=this,i=this.json,n=this.extensions,s=i.materials[t];let a;const o={},l=s.extensions||{},c=[];if(l[Vt.KHR_MATERIALS_UNLIT]){const u=n[Vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,e))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,Fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=cd);const h=s.alphaMode||Gh.OPAQUE;if(h===Gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Gh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ar&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ae(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==ar&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ar&&(o.emissive=new Ee().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==ar&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,Fe)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),os(u,s),e.associations.set(u,{materials:t}),s.extensions&&Va(n,u,s),u})}createUniqueName(t){const e=he.sanitizeNodeName(t||"");let i=e;for(let n=1;this.nodeNamesUsed[i];++n)i=e+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Bp(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=O_(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Bp(new Ji,c,e),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?N_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const y=h[f],g=a[f];let p;const _=c[f];if(g.mode===Ti.TRIANGLES||g.mode===Ti.TRIANGLE_STRIP||g.mode===Ti.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new ry(y,_):new Ro(y,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Ti.TRIANGLE_STRIP?p.geometry=Pp(p.geometry,gd):g.mode===Ti.TRIANGLE_FAN&&(p.geometry=Pp(p.geometry,dc));else if(g.mode===Ti.LINES)p=new hy(y,_);else if(g.mode===Ti.LINE_STRIP)p=new Wc(y,_);else if(g.mode===Ti.LINE_LOOP)p=new uy(y,_);else if(g.mode===Ti.POINTS)p=new dy(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&z_(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),os(p,s),g.extensions&&Va(n,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return u[0];const d=new kc;e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new zc(vd.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new Od(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),os(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new wt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Hc(o,l)})}loadAnimation(t){const i=this.json.animations[t],n=i.name?i.name:"animation_"+t,s=[],a=[],o=[],l=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const d=i.channels[h],f=i.samplers[d.sampler],m=d.target,y=m.node,g=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;m.node!==void 0&&(s.push(this.getDependency("node",y)),a.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",p)),l.push(f),c.push(m))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],m=h[3],y=h[4],g=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],M=d[p],v=f[p],S=m[p],T=y[p];if(x===void 0)continue;x.updateMatrix();let R;switch(as[T.path]){case as.weights:R=Ta;break;case as.rotation:R=bs;break;case as.position:case as.scale:default:R=Aa;break}const b=x.name?x.name:x.uuid,w=S.interpolation!==void 0?U_[S.interpolation]:Ys,F=[];as[T.path]===as.weights?x.traverse(function(C){C.morphTargetInfluences&&F.push(C.name?C.name:C.uuid)}):F.push(b);let L=v.array;if(v.normalized){const C=Wh(L.constructor),U=new Float32Array(L.length);for(let N=0,G=L.length;N<G;N++)U[N]=L[N]*C;L=U}for(let C=0,U=F.length;C<U;C++){const N=new R(F[C]+"."+as[T.path],M.array,L,w);S.interpolation==="CUBICSPLINE"&&(N.createInterpolant=function(W){const H=this instanceof bs?F_:Dp;return new H(this.times,this.values,this.getValueSize()/3,W)},N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(N)}}return new xy(n,void 0,g)})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,V_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Wd:c.length>1?h=new kc:c.length===1?h=c[0]:h=new Ne,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),os(h,s),s.extensions&&Va(i,h,s),s.matrix!==void 0){const u=new wt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,s=new kc;i.name&&(s.name=n.createUniqueName(i.name)),os(s,i),i.extensions&&Va(e,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof _s||d instanceof gs)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}}function G_(r,t,e){const i=t.attributes,n=new ge;if(i.POSITION!==void 0){const o=e.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Wh(Or[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const y=Wh(Or[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new Ki;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Bp(r,t,e){const i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=Hh[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){const a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return os(r,t),G_(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?B_(r,t.targets,e):r})}class zp{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const W_=new zp;let kr;class Op{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kr===void 0&&(kr=Fa("canvas")),kr.width=t.width,kr.height=t.height;const i=kr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=br(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(br(e[i]/255)*255):e[i]=br(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class kp{constructor(t=null){this.isSource=!0,this.uuid=ms(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Xh(n[a].image)):s.push(Xh(n[a]))}else s=Xh(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Op.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class ni extends Zn{constructor(t=ni.DEFAULT_IMAGE,e=ni.DEFAULT_MAPPING,i=zi,n=zi,s=Mi,a=Ca,o=ii,l=ws,c=ni.DEFAULT_ANISOTROPY,h=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ms(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ps?Lt:Ls),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rh:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rh:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?Ps:Jf}set encoding(t){Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ps?Lt:Ls}}ni.DEFAULT_IMAGE=null,ni.DEFAULT_MAPPING=Af,ni.DEFAULT_ANISOTROPY=1;class Vr extends ni{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}let ul;class $_{static getContext(){return ul===void 0&&(ul=new(window.AudioContext||window.webkitAudioContext)),ul}static setContext(t){ul=t}}const Hr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Gr{constructor(t){this.manager=t!==void 0?t:W_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const In={};class j_ extends Error{constructor(t,e){super(t),this.response=e}}class q_ extends Gr{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Hr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(In[t]!==void 0){In[t].push({onLoad:e,onProgress:i,onError:n});return}In[t]=[],In[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=In[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let y=0;const g=new ReadableStream({start(p){_();function _(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{y+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let S=0,T=h.length;S<T;S++){const R=h[S];R.onProgress&&R.onProgress(v)}p.enqueue(M),_()}})}}});return new Response(g)}else throw new j_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Hr.add(t,c);const h=In[t];delete In[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=In[t];if(h===void 0)throw this.manager.itemError(t),c;delete In[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Y_ extends Gr{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new q_(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);$_.getContext().decodeAudioData(c,function(u){e(u)},o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),s.manager.itemError(t)}}}class K_ extends Gr{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Hr.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Fa("img");function l(){h(),Hr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}let Z_=class extends Gr{constructor(t){super(t)}load(t,e,i,n){const s=new Vr,a=new K_(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,n)}for(let c=0;c<t.length;++c)l(c);return s}};class Vp extends Gr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Hr.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Hr.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){n&&n(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}class J_ extends Z_{load(t,e,i,n){const s=new Vp(this.manager),a=new Vr;s.setPath(this.path);let o=0;function l(c){s.load(t[c],h=>{a.images[c]=h,++o===6&&(a.needsUpdate=!0,e?.(a))},i,n)}for(let c=0;c<t.length;c++)l(c);return a}}class Q_ extends ni{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tv extends Gr{load(t,e,i,n){const s=new Vp(this.manager);return s.setOptions({imageOrientation:"flipY"}),s.setPath(this.path),s.load(t,a=>{const o=new Q_(a);return o.image=a,o.format=ii,o.needsUpdate=!0,e?.(o),o},i,n)}}var qt;(r=>{class t extends zp{constructor(){super(...arguments),this.imageBasePath=`${e}/images/`,this.modelBasePath=`${e}/models/`,this.soundBasePath=`${e}/sounds/`,this.shaderBasePath=`${e}/shaders/`,this.cubeTexture=new J_(this),this.texture=new tv(this),this.audio=new Y_(this),this.gltf=new d_(this),this.uuid=ms(),this.cubeTextures=["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],this.onProgress=(n,s,a)=>{nt.dispatch("Loading::Progress",{progress:s*100/a,uuid:this.uuid},!0)},this.onError=n=>{console.error(`Error occurred loading ${n}.`)},this.onStart=()=>{nt.dispatch("Loading::Start",this.uuid,!0)},this.onLoad=()=>{nt.dispatch("Loading::Complete",this.uuid,!0)}}getPromiseCallbacks(n,s){return{onLoad:a=>{a instanceof Vr&&(a.format=ii),n(a)},onProgress:a=>this.onProgress(a.target?.responseURL,a.loaded,a.total),onError:a=>s(a)}}async loadCubeTexture(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.cubeTexture.setPath(`${this.imageBasePath+n}/`),this.cubeTexture.load(this.cubeTextures,o.onLoad,o.onProgress,o.onError)})}async loadTexture(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.texture.setPath(this.imageBasePath),this.texture.load(n,o.onLoad,o.onProgress,o.onError)})}async loadAudio(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.audio.setPath(this.soundBasePath),this.audio.load(n,o.onLoad,o.onProgress,o.onError)})}async loadShader(n){return await(await fetch(`${this.shaderBasePath+n}`)).text()}async loadGLTF(n){return await new Promise((s,a)=>{const o=this.getPromiseCallbacks(s,a);this.gltf.setPath(this.modelBasePath),this.gltf.load(n,o.onLoad,o.onProgress,o.onError)})}}const e=vt.basePath();r.Loader=new t,(i=>{i.Complete="Loading::Complete",i.Progress="Loading::Progress",i.Start="Loading::Start"})(r.Loading||(r.Loading={}))})(qt||(qt={}));var mi;(r=>{r.UP=new D(0,1,0),r.RIGHT=new D(1,0,0),r.FORWARD=new D(0,0,1),r.BACKWARD=new D(0,0,-1),r.LEFT=new D(-1,0,0),r.DOWN=new D(0,-1,0),r.random=()=>new D(Ke(-1,1),Ke(-1,1),Ke(-1,1))})(mi||(mi={}));function Hp(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ev(r,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Dn extends fi{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function m(y,g,p,_,x,M,v,S,T,R,b){const w=M/T,F=v/R,L=M/2,C=v/2,U=S/2,N=T+1,G=R+1;let W=0,H=0;const X=new D;for(let Z=0;Z<G;Z++){const ot=Z*F-C;for(let rt=0;rt<N;rt++){const V=rt*w-L;X[y]=V*_,X[g]=ot*x,X[p]=U,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(rt/T),u.push(1-Z/R),W+=1}}for(let Z=0;Z<R;Z++)for(let ot=0;ot<T;ot++){const rt=d+ot+N*Z,V=d+ot+N*(Z+1),J=d+(ot+1)+N*(Z+1),it=d+(ot+1)+N*Z;l.push(rt,V,it),l.push(V,J,it),H+=6}o.addGroup(f,H,b),f+=H,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ze(r){const t={};for(let e=0;e<r.length;e++){const i=Wr(r[e]);for(const n in i)t[n]=i[n]}return t}function iv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Gp(r){return r.getRenderTarget()===null?r.outputColorSpace:nn}const nv={clone:Wr,merge:Ze};var sv=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,rv=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Wi extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}var av=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,ov=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,lv=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,cv=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,hv=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,uv=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,dv=`
vec3 transformed = vec3( position );
`,fv=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,pv=`

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

`,mv=`

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

`,gv=`
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
`,yv=`
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
`,xv=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,_v=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,vv=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Mv=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,bv=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Sv=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,wv=`
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
`,Tv=`
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
`,Av=`
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
`,Ev=`
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
`,Rv=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Cv=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,Pv=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Lv=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Iv=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Dv=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Fv=`
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
`,Uv=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Nv=`
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
`,Bv=`
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
`,zv=`
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
`,Ov=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,kv=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Vv=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Hv=`
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
`,Gv=`

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
`,Wv=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,Xv=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,$v=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,jv=`
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
`,qv=`
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
`,Yv=`
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
`,Kv=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Zv=`
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
`,Jv=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Qv=`
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
`,tM=`
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
`,eM=`

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
`,iM=`
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
`,nM=`
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
`,sM=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,rM=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,aM=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,oM=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,lM=`
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
`,cM=`
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`,hM=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,uM=`
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
`,dM=`
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
`,fM=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,pM=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,mM=`
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
`,gM=`
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
`,yM=`
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
`,xM=`
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
`,_M=`
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

`,vM=`

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
`,MM=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,bM=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,SM=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,wM=`
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
`,TM=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,AM=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,EM=`

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
`,RM=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,CM=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,PM=`
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
`,LM=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,IM=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,DM=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,FM=`
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
`,UM=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,NM=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,BM=`
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
`,zM=`

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
`,OM=`

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


`,kM=`
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
`,VM=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,HM=`
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
`,GM=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,WM=`
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
`,XM=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,$M=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,jM=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,qM=`
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
`,YM=`
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
`,KM=`
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
`,ZM=`
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
`,JM=`
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
`,QM=`
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
`,tb=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const Pt={alphamap_fragment:av,alphamap_pars_fragment:ov,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:hv,aomap_pars_fragment:uv,begin_vertex:dv,beginnormal_vertex:fv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:xv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:vv,color_fragment:Mv,color_pars_fragment:bv,color_pars_vertex:Sv,color_vertex:wv,common:Tv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Rv,displacementmap_vertex:Cv,emissivemap_fragment:Pv,emissivemap_pars_fragment:Lv,encodings_fragment:Iv,encodings_pars_fragment:Dv,envmap_fragment:Fv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Nv,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:Yv,envmap_vertex:zv,fog_vertex:Ov,fog_pars_vertex:kv,fog_fragment:Vv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Gv,lightmap_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:jv,lights_pars_begin:qv,lights_toon_fragment:Kv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Qv,lights_physical_fragment:tM,lights_physical_pars_fragment:eM,lights_fragment_begin:iM,lights_fragment_maps:nM,lights_fragment_end:sM,logdepthbuf_fragment:rM,logdepthbuf_pars_fragment:aM,logdepthbuf_pars_vertex:oM,logdepthbuf_vertex:lM,map_fragment:cM,map_pars_fragment:hM,map_particle_fragment:uM,map_particle_pars_fragment:dM,metalnessmap_fragment:fM,metalnessmap_pars_fragment:pM,morphcolor_vertex:mM,morphnormal_vertex:gM,morphtarget_pars_vertex:yM,morphtarget_vertex:xM,normal_fragment_begin:_M,normal_fragment_maps:vM,normal_pars_fragment:MM,normal_pars_vertex:bM,normal_vertex:SM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:TM,clearcoat_normal_fragment_maps:AM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:RM,output_fragment:CM,packing:PM,premultiplied_alpha_fragment:LM,project_vertex:IM,dithering_fragment:DM,dithering_pars_fragment:FM,roughnessmap_fragment:UM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:zM,shadowmap_vertex:OM,shadowmask_pars_fragment:kM,skinbase_vertex:VM,skinning_pars_vertex:HM,skinning_vertex:GM,skinnormal_vertex:WM,specularmap_fragment:XM,specularmap_pars_fragment:$M,tonemapping_fragment:jM,tonemapping_pars_fragment:qM,transmission_fragment:YM,transmission_pars_fragment:KM,uv_pars_fragment:ZM,uv_pars_vertex:JM,uv_vertex:QM,worldpos_vertex:tb,background_vert:`
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
`},st={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaTest:{value:0}}},an={basic:{uniforms:Ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Ze([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Ze([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Ze([st.points,st.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Ze([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Ze([st.common,st.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Ze([st.sprite,st.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Ze([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Ze([st.lights,st.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};an.physical={uniforms:Ze([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const dl={r:0,b:0,g:0};function eb(r,t,e,i,n,s,a){const o=new Dt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(g,p){let _=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),_=!0),r.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),_=!0;break}(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Oo)?(h===void 0&&(h=new de(new Dn(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Wr(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Lt,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Zo(2,2),new Wi({name:"BackgroundMaterial",uniforms:Wr(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,p){g.getRGB(dl,Gp(r)),i.buffers.color.setClear(dl.r,dl.g,dl.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(o,l)},render:m}}function ib(r,t,e,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function u(U,N,G,W,H){let X=!1;if(a){const Z=y(W,G,N);c!==Z&&(c=Z,f(c.object)),X=p(U,W,G,H),X&&_(U,W,G,H)}else{const Z=N.wireframe===!0;(c.geometry!==W.id||c.program!==G.id||c.wireframe!==Z)&&(c.geometry=W.id,c.program=G.id,c.wireframe=Z,X=!0)}H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,R(U,N,G,W),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(U){return i.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function m(U){return i.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,N,G){const W=G.wireframe===!0;let H=o[U.id];H===void 0&&(H={},o[U.id]=H);let X=H[N.id];X===void 0&&(X={},H[N.id]=X);let Z=X[W];return Z===void 0&&(Z=g(d()),X[W]=Z),Z}function g(U){const N=[],G=[],W=[];for(let H=0;H<n;H++)N[H]=0,G[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:W,object:U,attributes:{},index:null}}function p(U,N,G,W){const H=c.attributes,X=N.attributes;let Z=0;const ot=G.getAttributes();for(const rt in ot)if(ot[rt].location>=0){const J=H[rt];let it=X[rt];if(it===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(it=U.instanceColor)),J===void 0||J.attribute!==it||it&&J.data!==it.data)return!0;Z++}return c.attributesNum!==Z||c.index!==W}function _(U,N,G,W){const H={},X=N.attributes;let Z=0;const ot=G.getAttributes();for(const rt in ot)if(ot[rt].location>=0){let J=X[rt];J===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const it={};it.attribute=J,J&&J.data&&(it.data=J.data),H[rt]=it,Z++}c.attributes=H,c.attributesNum=Z,c.index=W}function x(){const U=c.newAttributes;for(let N=0,G=U.length;N<G;N++)U[N]=0}function M(U){v(U,0)}function v(U,N){const G=c.newAttributes,W=c.enabledAttributes,H=c.attributeDivisors;G[U]=1,W[U]===0&&(r.enableVertexAttribArray(U),W[U]=1),H[U]!==N&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,N),H[U]=N)}function S(){const U=c.newAttributes,N=c.enabledAttributes;for(let G=0,W=N.length;G<W;G++)N[G]!==U[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function T(U,N,G,W,H,X){i.isWebGL2===!0&&(G===r.INT||G===r.UNSIGNED_INT)?r.vertexAttribIPointer(U,N,G,H,X):r.vertexAttribPointer(U,N,G,W,H,X)}function R(U,N,G,W){if(i.isWebGL2===!1&&(U.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=W.attributes,X=G.getAttributes(),Z=N.defaultAttributeValues;for(const ot in X){const rt=X[ot];if(rt.location>=0){let V=H[ot];if(V===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){const J=V.normalized,it=V.itemSize,lt=e.get(V);if(lt===void 0)continue;const z=lt.buffer,It=lt.type,Rt=lt.bytesPerElement;if(V.isInterleavedBufferAttribute){const at=V.data,Tt=at.stride,Kt=V.offset;if(at.isInstancedInterleavedBuffer){for(let yt=0;yt<rt.locationSize;yt++)v(rt.location+yt,at.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let yt=0;yt<rt.locationSize;yt++)M(rt.location+yt);r.bindBuffer(r.ARRAY_BUFFER,z);for(let yt=0;yt<rt.locationSize;yt++)T(rt.location+yt,it/rt.locationSize,It,J,Tt*Rt,(Kt+it/rt.locationSize*yt)*Rt)}else{if(V.isInstancedBufferAttribute){for(let at=0;at<rt.locationSize;at++)v(rt.location+at,V.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let at=0;at<rt.locationSize;at++)M(rt.location+at);r.bindBuffer(r.ARRAY_BUFFER,z);for(let at=0;at<rt.locationSize;at++)T(rt.location+at,it/rt.locationSize,It,J,it*Rt,it/rt.locationSize*at*Rt)}}else if(Z!==void 0){const J=Z[ot];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(rt.location,J);break;case 3:r.vertexAttrib3fv(rt.location,J);break;case 4:r.vertexAttrib4fv(rt.location,J);break;default:r.vertexAttrib1fv(rt.location,J)}}}}S()}function b(){L();for(const U in o){const N=o[U];for(const G in N){const W=N[G];for(const H in W)m(W[H].object),delete W[H];delete N[G]}delete o[U]}}function w(U){if(o[U.id]===void 0)return;const N=o[U.id];for(const G in N){const W=N[G];for(const H in W)m(W[H].object),delete W[H];delete N[G]}delete o[U.id]}function F(U){for(const N in o){const G=o[N];if(G[U.id]===void 0)continue;const W=G[U.id];for(const H in W)m(W[H].object),delete W[H];delete G[U.id]}}function L(){C(),h=!0,c!==l&&(c=l,f(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:S}}function nb(r,t,e,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),e.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function sb(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),v=x&&M,S=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:y,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:S}}function rb(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Fs,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,x=_*4;let M=p.clippingState||null;l.value=M,M=h(m,d,x,f);for(let v=0;v!==x;++v)M[v]=e[v];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){const y=u!==null?u.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const p=f+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,M=f;x!==y;++x,M+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}class Fn extends Zn{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(Ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ps?Lt:Ls),this.texture=new ni(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xr=-90,$r=1;class ab extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new pi(Xr,$r,t,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new pi(Xr,$r,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new pi(Xr,$r,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new pi(Xr,$r,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new pi(Xr,$r,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new pi(Xr,$r,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Sn,t.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,o),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=f,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ob extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ps?Lt:Ls),this.texture=new Vr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Dn(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Kn});s.uniforms.tEquirect.value=e;const a=new de(n,s),o=e.minFilter;return e.minFilter===Ca&&(e.minFilter=Mi),new ab(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}function lb(r){let t=new WeakMap;function e(a,o){return o===nh?a.mapping=yr:o===sh&&(a.mapping=xr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===nh||o===sh)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ob(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class cb extends Tp{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jr=4,Wp=[.125,.215,.35,.446,.526,.582],Ns=20,$h=new cb,Xp=new Dt;let jh=null;const Bs=(1+Math.sqrt(5))/2,qr=1/Bs,$p=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Bs,qr),new D(0,Bs,-qr),new D(qr,0,Bs),new D(-qr,0,Bs),new D(Bs,qr,0),new D(-Bs,qr,0)];class qh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){jh=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jh),t.scissorTest=!1,fl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Pa,format:ii,colorSpace:nn,depthBuffer:!1},n=jp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hb(s)),this._blurMaterial=ub(s,t,e)}return n}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,$h)}_sceneToCubeUV(t,e,i,n){const o=new pi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xp),h.toneMapping=Sn,h.autoClear=!1;const f=new Dr({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),m=new de(new Dn,f);let y=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(Xp),y=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;fl(n,_*x,p>2?x:0,x,x),h.setRenderTarget(n),y&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===yr||t.mapping===xr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;fl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$h)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=$p[(n-1)%$p.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new de(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),y=s/m,g=isFinite(s)?1+Math.floor(h*y):Ns;g>Ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ns}`);const p=[];let _=0;for(let T=0;T<Ns;++T){const R=T/y,b=Math.exp(-R*R/2);p.push(b),T===0?_+=b:T<g&&(_+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const M=this._sizeLods[n],v=3*M*(n>x-jr?n-x+jr:0),S=4*(this._cubeSize-M);fl(e,v,S,3*M,2*M),l.setRenderTarget(e),l.render(u,$h)}}function hb(r){const t=[],e=[],i=[];let n=r;const s=r-jr+1+Wp.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-jr?l=Wp[a-r+jr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,y=3,g=2,p=1,_=new Float32Array(y*m*f),x=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let S=0;S<f;S++){const T=S%3*2/3-1,R=S>2?0:-1,b=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(b,y*m*S),x.set(d,g*m*S);const w=[S,S,S,S,S,S];M.set(w,p*m*S)}const v=new fi;v.setAttribute("position",new Si(_,y)),v.setAttribute("uv",new Si(x,g)),v.setAttribute("faceIndex",new Si(M,p)),t.push(v),n>jr&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jp(r,t,e){const i=new Fn(r,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function ub(r,t,e){const i=new Float32Array(Ns),n=new D(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function qp(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Yp(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Yh(){return`

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
	`}function db(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===nh||l===sh,h=l===yr||l===xr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new qh(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new qh(r));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function fb(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function pb(r,t,e,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const y=f[m];for(let g=0,p=y.length;g<p;g++)t.update(y[g],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let y=0;if(f!==null){const _=f.array;y=f.version;for(let x=0,M=_.length;x<M;x+=3){const v=_[x+0],S=_[x+1],T=_[x+2];d.push(v,S,S,T,T,v)}}else{const _=m.array;y=m.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const v=x+0,S=x+1,T=x+2;d.push(v,S,S,T,T,v)}}const g=new(up(d)?np:ip)(d,1);g.version=y;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mb(r,t,e,i){const n=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,o,d*l),e.update(f,s,1)}function u(d,f,m){if(m===0)return;let y,g;if(n)y=r,g="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,f,o,d*l,m),e.update(f,s,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function gb(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}class Kp extends ni{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function yb(r,t){return r[0]-t[0]}function xb(r,t){return Math.abs(t[1])-Math.abs(r[1])}function _b(r,t,e){const i={},n=new Float32Array(8),s=new WeakMap,a=new le,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let y=s.get(h);if(y===void 0||y.count!==m){let U=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",U)};y!==void 0&&y.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let R=0;_===!0&&(R=1),x===!0&&(R=2),M===!0&&(R=3);let b=h.attributes.position.count*R,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const F=new Float32Array(b*w*4*m),L=new Kp(F,b,w,m);L.type=As,L.needsUpdate=!0;const C=R*4;for(let N=0;N<m;N++){const G=v[N],W=S[N],H=T[N],X=b*w*4*N;for(let Z=0;Z<G.count;Z++){const ot=Z*C;_===!0&&(a.fromBufferAttribute(G,Z),F[X+ot+0]=a.x,F[X+ot+1]=a.y,F[X+ot+2]=a.z,F[X+ot+3]=0),x===!0&&(a.fromBufferAttribute(W,Z),F[X+ot+4]=a.x,F[X+ot+5]=a.y,F[X+ot+6]=a.z,F[X+ot+7]=0),M===!0&&(a.fromBufferAttribute(H,Z),F[X+ot+8]=a.x,F[X+ot+9]=a.y,F[X+ot+10]=a.z,F[X+ot+11]=H.itemSize===4?a.w:1)}}y={count:m,texture:L,size:new Et(b,w)},s.set(h,y),h.addEventListener("dispose",U)}let g=0;for(let _=0;_<d.length;_++)g+=d[_];const p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const f=d===void 0?0:d.length;let m=i[h.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];i[h.id]=m}for(let x=0;x<f;x++){const M=m[x];M[0]=x,M[1]=d[x]}m.sort(xb);for(let x=0;x<8;x++)x<f&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(yb);const y=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=o[x],v=M[0],S=M[1];v!==Number.MAX_SAFE_INTEGER&&S?(y&&h.getAttribute("morphTarget"+x)!==y[v]&&h.setAttribute("morphTarget"+x,y[v]),g&&h.getAttribute("morphNormal"+x)!==g[v]&&h.setAttribute("morphNormal"+x,g[v]),n[x]=S,p+=S):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function vb(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);return n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER)),u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Mb extends ni{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zp=new ni,Jp=new Kp,Qp=new Mb,tm=new Vr,em=[],im=[],nm=new Float32Array(16),sm=new Float32Array(9),rm=new Float32Array(4);function Yr(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=em[n];if(s===void 0&&(s=new Float32Array(n),em[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Te(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function pl(r,t){let e=im[t];e===void 0&&(e=new Int32Array(t),im[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function bb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Sb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Te(e,t)}}function wb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Te(e,t)}}function Tb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Te(e,t)}}function Ab(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;rm.set(i),r.uniformMatrix2fv(this.addr,!1,rm),Te(e,i)}}function Eb(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;sm.set(i),r.uniformMatrix3fv(this.addr,!1,sm),Te(e,i)}}function Rb(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;nm.set(i),r.uniformMatrix4fv(this.addr,!1,nm),Te(e,i)}}function Cb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Pb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Te(e,t)}}function Lb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Te(e,t)}}function Ib(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Te(e,t)}}function Db(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Fb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Te(e,t)}}function Ub(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Te(e,t)}}function Nb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Te(e,t)}}function Bb(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||Zp,n)}function zb(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Qp,n)}function Ob(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||tm,n)}function kb(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Jp,n)}function Vb(r){switch(r){case 5126:return bb;case 35664:return Sb;case 35665:return wb;case 35666:return Tb;case 35674:return Ab;case 35675:return Eb;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Lb;case 35669:case 35673:return Ib;case 5125:return Db;case 36294:return Fb;case 36295:return Ub;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return kb}}function Hb(r,t){r.uniform1fv(this.addr,t)}function Gb(r,t){const e=Yr(t,this.size,2);r.uniform2fv(this.addr,e)}function Wb(r,t){const e=Yr(t,this.size,3);r.uniform3fv(this.addr,e)}function Xb(r,t){const e=Yr(t,this.size,4);r.uniform4fv(this.addr,e)}function $b(r,t){const e=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function jb(r,t){const e=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function qb(r,t){const e=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Yb(r,t){r.uniform1iv(this.addr,t)}function Kb(r,t){r.uniform2iv(this.addr,t)}function Zb(r,t){r.uniform3iv(this.addr,t)}function Jb(r,t){r.uniform4iv(this.addr,t)}function Qb(r,t){r.uniform1uiv(this.addr,t)}function tS(r,t){r.uniform2uiv(this.addr,t)}function eS(r,t){r.uniform3uiv(this.addr,t)}function iS(r,t){r.uniform4uiv(this.addr,t)}function nS(r,t,e){const i=this.cache,n=t.length,s=pl(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Zp,s[a])}function sS(r,t,e){const i=this.cache,n=t.length,s=pl(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Qp,s[a])}function rS(r,t,e){const i=this.cache,n=t.length,s=pl(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||tm,s[a])}function aS(r,t,e){const i=this.cache,n=t.length,s=pl(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Jp,s[a])}function oS(r){switch(r){case 5126:return Hb;case 35664:return Gb;case 35665:return Wb;case 35666:return Xb;case 35674:return $b;case 35675:return jb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return Kb;case 35668:case 35672:return Zb;case 35669:case 35673:return Jb;case 5125:return Qb;case 36294:return tS;case 36295:return eS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return aS}}class lS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Vb(e.type)}}class cS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=oS(e.type)}}class hS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function am(r,t){r.seq.push(t),r.map[t.id]=t}function uS(r,t,e){const i=r.name,n=i.length;for(Kh.lastIndex=0;;){const s=Kh.exec(i),a=Kh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){am(e,c===void 0?new lS(o,r,t):new cS(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new hS(o),am(e,u)),e=u}}}class ml{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);uS(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function om(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}let dS=0;function fS(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function pS(r){switch(r){case nn:return["Linear","( value )"];case Lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function lm(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+fS(r.getShaderSource(t),a)}else return n}function mS(r,t){const e=pS(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function gS(r,t){let e;switch(t){case hx:e="Linear";break;case ux:e="Reinhard";break;case dx:e="OptimizedCineon";break;case Tf:e="ACESFilmic";break;case fx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yS(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ha).join(`
`)}function xS(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _S(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ha(r){return r!==""}function cm(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(r){return r.replace(vS,MS)}function MS(r,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Zh(e)}const bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(r){return r.replace(bS,SS)}function SS(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function dm(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===yf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function TS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yr:case xr:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function ES(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case lx:t="ENVMAP_BLENDING_MIX";break;case cx:t="ENVMAP_BLENDING_ADD";break}return t}function RS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function CS(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=wS(e),c=TS(e),h=AS(e),u=ES(e),d=RS(e),f=e.isWebGL2?"":yS(e),m=xS(s),y=n.createProgram();let g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[m].filter(Ha).join(`
`),g.length>0&&(g+=`
`),p=[f,m].filter(Ha).join(`
`),p.length>0&&(p+=`
`)):(g=[dm(e),"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),p=[f,dm(e),"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?gS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.encodings_pars_fragment,mS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Zh(a),a=cm(a,e),a=hm(a,e),o=Zh(o),o=cm(o,e),o=hm(o,e),a=um(a),o=um(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+g+a,M=_+p+o,v=om(n,n.VERTEX_SHADER,x),S=om(n,n.FRAGMENT_SHADER,M);if(n.attachShader(y,v),n.attachShader(y,S),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y),r.debug.checkShaderErrors){const b=n.getProgramInfoLog(y).trim(),w=n.getShaderInfoLog(v).trim(),F=n.getShaderInfoLog(S).trim();let L=!0,C=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(L=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,v,S);else{const U=lm(n,v,"vertex"),N=lm(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+U+`
`+N)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(w===""||F==="")&&(C=!1);C&&(this.diagnostics={runnable:L,programLog:b,vertexShader:{log:w,prefix:g},fragmentShader:{log:F,prefix:p}})}n.deleteShader(v),n.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new ml(n,y)),T};let R;return this.getAttributes=function(){return R===void 0&&(R=_S(n,y)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.name=e.shaderName,this.id=dS++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=S,this}let PS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new IS(t),e.set(t,i)),i}}class IS{constructor(t){this.id=PS++,this.code=t,this.usedTimes=0}}function DS(r,t,e,i,n,s,a){const o=new Sh,l=new LS,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function g(b,w,F,L,C){const U=L.fog,N=C.geometry,G=b.isMeshStandardMaterial?L.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),H=W&&W.mapping===Oo?W.image.height:null,X=m[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ot=Z!==void 0?Z.length:0;let rt=0;N.morphAttributes.position!==void 0&&(rt=1),N.morphAttributes.normal!==void 0&&(rt=2),N.morphAttributes.color!==void 0&&(rt=3);let V,J,it,lt;if(X){const ne=an[X];V=ne.vertexShader,J=ne.fragmentShader}else V=b.vertexShader,J=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),lt=l.getFragmentShaderID(b);const z=r.getRenderTarget(),It=C.isInstancedMesh===!0,Rt=!!b.map,at=!!b.matcap,Tt=!!W,Kt=!!b.aoMap,yt=!!b.lightMap,Bt=!!b.bumpMap,Le=!!b.normalMap,ke=!!b.displacementMap,Ie=!!b.emissiveMap,Ae=!!b.metalnessMap,Zt=!!b.roughnessMap,me=b.clearcoat>0,ri=b.iridescence>0,P=b.sheen>0,A=b.transmission>0,$=me&&!!b.clearcoatMap,tt=me&&!!b.clearcoatNormalMap,et=me&&!!b.clearcoatRoughnessMap,ct=ri&&!!b.iridescenceMap,At=ri&&!!b.iridescenceThicknessMap,dt=P&&!!b.sheenColorMap,Y=P&&!!b.sheenRoughnessMap,mt=!!b.specularMap,xt=!!b.specularColorMap,bt=!!b.specularIntensityMap,ut=A&&!!b.transmissionMap,gt=A&&!!b.thicknessMap,Ht=!!b.gradientMap,te=!!b.alphaMap,ye=b.alphaTest>0,B=!!b.extensions,j=!!N.attributes.uv1,Q=!!N.attributes.uv2,ht=!!N.attributes.uv3;return{isWebGL2:h,shaderID:X,shaderName:b.type,vertexShader:V,fragmentShader:J,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:It,instancingColor:It&&C.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:z===null?r.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:nn,map:Rt,matcap:at,envMap:Tt,envMapMode:Tt&&W.mapping,envMapCubeUVHeight:H,aoMap:Kt,lightMap:yt,bumpMap:Bt,normalMap:Le,displacementMap:d&&ke,emissiveMap:Ie,normalMapObjectSpace:Le&&b.normalMapType===Ux,normalMapTangentSpace:Le&&b.normalMapType===Go,metalnessMap:Ae,roughnessMap:Zt,clearcoat:me,clearcoatMap:$,clearcoatNormalMap:tt,clearcoatRoughnessMap:et,iridescence:ri,iridescenceMap:ct,iridescenceThicknessMap:At,sheen:P,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:mt,specularColorMap:xt,specularIntensityMap:bt,transmission:A,transmissionMap:ut,thicknessMap:gt,gradientMap:Ht,opaque:b.transparent===!1&&b.blending===gr,alphaMap:te,alphaTest:ye,combine:b.combine,mapUv:Rt&&y(b.map.channel),aoMapUv:Kt&&y(b.aoMap.channel),lightMapUv:yt&&y(b.lightMap.channel),bumpMapUv:Bt&&y(b.bumpMap.channel),normalMapUv:Le&&y(b.normalMap.channel),displacementMapUv:ke&&y(b.displacementMap.channel),emissiveMapUv:Ie&&y(b.emissiveMap.channel),metalnessMapUv:Ae&&y(b.metalnessMap.channel),roughnessMapUv:Zt&&y(b.roughnessMap.channel),clearcoatMapUv:$&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Y&&y(b.sheenRoughnessMap.channel),specularMapUv:mt&&y(b.specularMap.channel),specularColorMapUv:xt&&y(b.specularColorMap.channel),specularIntensityMapUv:bt&&y(b.specularIntensityMap.channel),transmissionMapUv:ut&&y(b.transmissionMap.channel),thicknessMapUv:gt&&y(b.thicknessMap.channel),alphaMapUv:te&&y(b.alphaMap.channel),vertexTangents:Le&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:Q,vertexUv3s:ht,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Rt||te),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Sn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===en,flipSided:b.side===ei,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:B&&b.extensions.derivatives===!0,extensionFragDepth:B&&b.extensions.fragDepth===!0,extensionDrawBuffers:B&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)w.push(F),w.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(_(w,b),x(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function _(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),b.push(o.mask)}function M(b){const w=m[b.type];let F;if(w){const L=an[w];F=nv.clone(L.uniforms)}else F=b.uniforms;return F}function v(b,w){let F;for(let L=0,C=c.length;L<C;L++){const U=c[L];if(U.cacheKey===w){F=U,++F.usedTimes;break}}return F===void 0&&(F=new CS(r,w,b,s),c.push(F)),F}function S(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:R}}function FS(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function US(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pm(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,m,y,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function o(u,d,f,m,y,g){const p=a(u,d,f,m,y,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,m,y,g){const p=a(u,d,f,m,y,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||US),i.length>1&&i.sort(d||fm),n.length>1&&n.sort(d||fm)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function NS(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new pm,r.set(i,[a])):n>=s.length?(a=new pm,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function BS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function zS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let OS=0;function kS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function VS(r,t){const e=new BS,i=zS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,a=new Jt,o=new Jt;function l(h,u){let d=0,f=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let y=0,g=0,p=0,_=0,x=0,M=0,v=0,S=0,T=0,R=0;h.sort(kS);const b=u===!0?Math.PI:1;for(let F=0,L=h.length;F<L;F++){const C=h[F],U=C.color,N=C.intensity,G=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=U.r*N*b,f+=U.g*N*b,m+=U.b*N*b;else if(C.isLightProbe)for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],N);else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*b),C.castShadow){const X=C.shadow,Z=i.get(C);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.directionalShadow[y]=Z,n.directionalShadowMap[y]=W,n.directionalShadowMatrix[y]=C.shadow.matrix,M++}n.directional[y]=H,y++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(N*b),H.distance=G,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[p]=H;const X=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,X.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[p]=X.matrix,C.castShadow){const Z=i.get(C);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.spotShadow[p]=Z,n.spotShadowMap[p]=W,S++}p++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(U).multiplyScalar(N),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=H,_++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*b),H.distance=C.distance,H.decay=C.decay,C.castShadow){const X=C.shadow,Z=i.get(C);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(N*b),H.groundColor.copy(C.groundColor).multiplyScalar(N*b),n.hemi[x]=H,x++}}_>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const w=n.hash;(w.directionalLength!==y||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==_||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==v||w.numSpotShadows!==S||w.numSpotMaps!==T)&&(n.directional.length=y,n.spot.length=p,n.rectArea.length=_,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,w.directionalLength=y,w.pointLength=g,w.spotLength=p,w.rectAreaLength=_,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=v,w.numSpotShadows=S,w.numSpotMaps=T,n.version=OS++)}function c(h,u){let d=0,f=0,m=0,y=0,g=0;const p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const M=h[_];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(M.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const v=n.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:n}}function mm(r,t){const e=new VS(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function HS(r,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new mm(r,t),e.set(s,[l])):a>=o.length?(l=new mm(r,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class GS extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WS extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,$S=`
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
`;function jS(r,t,e){let i=new Nh;const n=new Et,s=new Et,a=new le,o=new GS({depthPacking:Fx}),l=new WS,c={},h=e.maxTextureSize,u={[Bi]:ei,[ei]:Bi,[en]:en},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:XS,fragmentShader:$S}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new fi;m.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new de(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let p=this.type;this.render=function(v,S,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=p!==bn&&this.type===bn,C=p===bn&&this.type!==bn;for(let U=0,N=v.length;U<N;U++){const G=v[U],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const H=W.getFrameExtents();if(n.multiply(H),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/H.x),n.x=s.x*H.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/H.y),n.y=s.y*H.y,W.mapSize.y=s.y)),W.map===null||L===!0||C===!0){const Z=this.type!==bn?{minFilter:Se,magFilter:Se}:{};W.map!==null&&W.map.dispose(),W.map=new Fn(n.x,n.y,Z),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const X=W.getViewportCount();for(let Z=0;Z<X;Z++){const ot=W.getViewport(Z);a.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),F.viewport(a),W.updateMatrices(G,Z),i=W.getFrustum(),M(S,T,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===bn&&_(W,T),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(R,b,w)};function _(v,S){const T=t.update(y);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Fn(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(S,null,T,d,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(S,null,T,f,y,null)}function x(v,S,T,R){let b=null;const w=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)b=w;else if(b=T.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=b.uuid,L=S.uuid;let C=c[F];C===void 0&&(C={},c[F]=C);let U=C[L];U===void 0&&(U=b.clone(),C[L]=U),b=U}if(b.visible=S.visible,b.wireframe=S.wireframe,R===bn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=r.properties.get(b);F.light=T}return b}function M(v,S,T,R,b){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===bn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const L=t.update(v),C=v.material;if(Array.isArray(C)){const U=L.groups;for(let N=0,G=U.length;N<G;N++){const W=U[N],H=C[W.materialIndex];if(H&&H.visible){const X=x(v,H,R,b);r.renderBufferDirect(T,null,L,X,v,W)}}}else if(C.visible){const U=x(v,C,R,b);r.renderBufferDirect(T,null,L,U,v,null)}}const F=v.children;for(let L=0,C=F.length;L<C;L++)M(F[L],S,T,R,b)}}function qS(r,t,e){const i=e.isWebGL2;function n(){let B=!1;const j=new le;let Q=null;const ht=new le(0,0,0,0);return{setMask:function(ft){Q!==ft&&!B&&(r.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){B=ft},setClear:function(ft,ne,se,je,ps){ps===!0&&(ft*=je,ne*=je,se*=je),j.set(ft,ne,se,je),ht.equals(j)===!1&&(r.clearColor(ft,ne,se,je),ht.copy(j))},reset:function(){B=!1,Q=null,ht.set(-1,0,0,0)}}}function s(){let B=!1,j=null,Q=null,ht=null;return{setTest:function(ft){ft?z(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(ft){j!==ft&&!B&&(r.depthMask(ft),j=ft)},setFunc:function(ft){if(Q!==ft){switch(ft){case ex:r.depthFunc(r.NEVER);break;case ix:r.depthFunc(r.ALWAYS);break;case nx:r.depthFunc(r.LESS);break;case ih:r.depthFunc(r.LEQUAL);break;case sx:r.depthFunc(r.EQUAL);break;case rx:r.depthFunc(r.GEQUAL);break;case ax:r.depthFunc(r.GREATER);break;case ox:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=ft}},setLocked:function(ft){B=ft},setClear:function(ft){ht!==ft&&(r.clearDepth(ft),ht=ft)},reset:function(){B=!1,j=null,Q=null,ht=null}}}function a(){let B=!1,j=null,Q=null,ht=null,ft=null,ne=null,se=null,je=null,ps=null;return{setTest:function(xe){B||(xe?z(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(xe){j!==xe&&!B&&(r.stencilMask(xe),j=xe)},setFunc:function(xe,Li,un){(Q!==xe||ht!==Li||ft!==un)&&(r.stencilFunc(xe,Li,un),Q=xe,ht=Li,ft=un)},setOp:function(xe,Li,un){(ne!==xe||se!==Li||je!==un)&&(r.stencilOp(xe,Li,un),ne=xe,se=Li,je=un)},setLocked:function(xe){B=xe},setClear:function(xe){ps!==xe&&(r.clearStencil(xe),ps=xe)},reset:function(){B=!1,j=null,Q=null,ht=null,ft=null,ne=null,se=null,je=null,ps=null}}}const o=new n,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,y=[],g=null,p=!1,_=null,x=null,M=null,v=null,S=null,T=null,R=null,b=!1,w=null,F=null,L=null,C=null,U=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=W>=2);let X=null,Z={};const ot=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),V=new le().fromArray(ot),J=new le().fromArray(rt);function it(B,j,Q,ht){const ft=new Uint8Array(4),ne=r.createTexture();r.bindTexture(B,ne),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<Q;se++)i&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(j,0,r.RGBA,1,1,ht,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(j+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ne}const lt={};lt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),lt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(lt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),lt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),z(r.DEPTH_TEST),l.setFunc(ih),ke(!1),Ie(mf),z(r.CULL_FACE),Bt(Kn);function z(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function It(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function Rt(B,j){return f[B]!==j?(r.bindFramebuffer(B,j),f[B]=j,i&&(B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=j),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=j)),!0):!1}function at(B,j){let Q=y,ht=!1;if(B)if(Q=m.get(j),Q===void 0&&(Q=[],m.set(j,Q)),B.isWebGLMultipleRenderTargets){const ft=B.texture;if(Q.length!==ft.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,se=ft.length;ne<se;ne++)Q[ne]=r.COLOR_ATTACHMENT0+ne;Q.length=ft.length,ht=!0}}else Q[0]!==r.COLOR_ATTACHMENT0&&(Q[0]=r.COLOR_ATTACHMENT0,ht=!0);else Q[0]!==r.BACK&&(Q[0]=r.BACK,ht=!0);ht&&(e.isWebGL2?r.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Tt(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Kt={[Ss]:r.FUNC_ADD,[Xy]:r.FUNC_SUBTRACT,[$y]:r.FUNC_REVERSE_SUBTRACT};if(i)Kt[Mf]=r.MIN,Kt[bf]=r.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(Kt[Mf]=B.MIN_EXT,Kt[bf]=B.MAX_EXT)}const yt={[jy]:r.ZERO,[Sf]:r.ONE,[qy]:r.SRC_COLOR,[wf]:r.SRC_ALPHA,[tx]:r.SRC_ALPHA_SATURATE,[Jy]:r.DST_COLOR,[Ky]:r.DST_ALPHA,[Yy]:r.ONE_MINUS_SRC_COLOR,[eh]:r.ONE_MINUS_SRC_ALPHA,[Qy]:r.ONE_MINUS_DST_COLOR,[Zy]:r.ONE_MINUS_DST_ALPHA};function Bt(B,j,Q,ht,ft,ne,se,je){if(B===Kn){p===!0&&(It(r.BLEND),p=!1);return}if(p===!1&&(z(r.BLEND),p=!0),B!==vf){if(B!==_||je!==b){if((x!==Ss||S!==Ss)&&(r.blendEquation(r.FUNC_ADD),x=Ss,S=Ss),je)switch(B){case gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case th:r.blendFunc(r.ONE,r.ONE);break;case xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case th:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,v=null,T=null,R=null,_=B,b=je}return}ft=ft||j,ne=ne||Q,se=se||ht,(j!==x||ft!==S)&&(r.blendEquationSeparate(Kt[j],Kt[ft]),x=j,S=ft),(Q!==M||ht!==v||ne!==T||se!==R)&&(r.blendFuncSeparate(yt[Q],yt[ht],yt[ne],yt[se]),M=Q,v=ht,T=ne,R=se),_=B,b=!1}function Le(B,j){B.side===en?It(r.CULL_FACE):z(r.CULL_FACE);let Q=B.side===ei;j&&(Q=!Q),ke(Q),B.blending===gr&&B.transparent===!1?Bt(Kn):Bt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const ht=B.stencilWrite;c.setTest(ht),ht&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?z(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(B){w!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),w=B)}function Ie(B){B!==Gy?(z(r.CULL_FACE),B!==F&&(B===mf?r.cullFace(r.BACK):B===Wy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),F=B}function Ae(B){B!==L&&(G&&r.lineWidth(B),L=B)}function Zt(B,j,Q){B?(z(r.POLYGON_OFFSET_FILL),(C!==j||U!==Q)&&(r.polygonOffset(j,Q),C=j,U=Q)):It(r.POLYGON_OFFSET_FILL)}function me(B){B?z(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function ri(B){B===void 0&&(B=r.TEXTURE0+N-1),X!==B&&(r.activeTexture(B),X=B)}function P(B,j,Q){Q===void 0&&(X===null?Q=r.TEXTURE0+N-1:Q=X);let ht=Z[Q];ht===void 0&&(ht={type:void 0,texture:void 0},Z[Q]=ht),(ht.type!==B||ht.texture!==j)&&(X!==Q&&(r.activeTexture(Q),X=Q),r.bindTexture(B,j||lt[B]),ht.type=B,ht.texture=j)}function A(){const B=Z[X];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(B){V.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),V.copy(B))}function gt(B){J.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Ht(B,j){let Q=u.get(j);Q===void 0&&(Q=new WeakMap,u.set(j,Q));let ht=Q.get(B);ht===void 0&&(ht=r.getUniformBlockIndex(j,B.name),Q.set(B,ht))}function te(B,j){const ht=u.get(j).get(B);h.get(j)!==ht&&(r.uniformBlockBinding(j,ht,B.__bindingPointIndex),h.set(j,ht))}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},X=null,Z={},f={},m=new WeakMap,y=[],g=null,p=!1,_=null,x=null,M=null,v=null,S=null,T=null,R=null,b=!1,w=null,F=null,L=null,C=null,U=null,V.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:z,disable:It,bindFramebuffer:Rt,drawBuffers:at,useProgram:Tt,setBlending:Bt,setMaterial:Le,setFlipSided:ke,setCullFace:Ie,setLineWidth:Ae,setPolygonOffset:Zt,setScissorTest:me,activeTexture:ri,bindTexture:P,unbindTexture:A,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:xt,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:te,texStorage2D:Y,texStorage3D:mt,texSubImage2D:et,texSubImage3D:ct,compressedTexSubImage2D:At,compressedTexSubImage3D:dt,scissor:ut,viewport:gt,reset:ye}}function YS(r,t,e,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let y;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,A){return p?new OffscreenCanvas(P,A):Fa("canvas")}function x(P,A,$,tt){let et=1;if((P.width>tt||P.height>tt)&&(et=tt/Math.max(P.width,P.height)),et<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ct=A?Qg:Math.floor,At=ct(et*P.width),dt=ct(et*P.height);y===void 0&&(y=_(At,dt));const Y=$?_(At,dt):y;return Y.width=At,Y.height=dt,Y.getContext("2d").drawImage(P,0,0,At,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+At+"x"+dt+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return rd(P.width)&&rd(P.height)}function v(P){return o?!1:P.wrapS!==zi||P.wrapT!==zi||P.minFilter!==Se&&P.minFilter!==Mi}function S(P,A){return P.generateMipmaps&&A&&P.minFilter!==Se&&P.minFilter!==Mi}function T(P){r.generateMipmap(P)}function R(P,A,$,tt,et=!1){if(o===!1)return A;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=A;return A===r.RED&&($===r.FLOAT&&(ct=r.R32F),$===r.HALF_FLOAT&&(ct=r.R16F),$===r.UNSIGNED_BYTE&&(ct=r.R8)),A===r.RG&&($===r.FLOAT&&(ct=r.RG32F),$===r.HALF_FLOAT&&(ct=r.RG16F),$===r.UNSIGNED_BYTE&&(ct=r.RG8)),A===r.RGBA&&($===r.FLOAT&&(ct=r.RGBA32F),$===r.HALF_FLOAT&&(ct=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ct=tt===Lt&&et===!1?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)),(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function b(P,A,$){return S(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==Se&&P.minFilter!==Mi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===Se||P===Ef||P===oh?r.NEAREST:r.LINEAR}function F(P){const A=P.target;A.removeEventListener("dispose",F),C(A),A.isVideoTexture&&m.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),N(A)}function C(P){const A=i.get(P);if(A.__webglInit===void 0)return;const $=P.source,tt=g.get($);if(tt){const et=tt[A.__cacheKey];et.usedTimes--,et.usedTimes===0&&U(P),Object.keys(tt).length===0&&g.delete($)}i.remove(P)}function U(P){const A=i.get(P);r.deleteTexture(A.__webglTexture);const $=P.source,tt=g.get($);delete tt[A.__cacheKey],a.memory.textures--}function N(P){const A=P.texture,$=i.get(P),tt=i.get(A);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)r.deleteFramebuffer($.__webglFramebuffer[et]),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[et]);else{if(r.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let et=0;et<$.__webglColorRenderbuffer.length;et++)$.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[et]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let et=0,ct=A.length;et<ct;et++){const At=i.get(A[et]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(A[et])}i.remove(A),i.remove(P)}let G=0;function W(){G=0}function H(){const P=G;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),G+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Z(P,A){const $=i.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It($,P,A);return}}e.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+A)}function ot(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){It($,P,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+A)}function rt(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){It($,P,A);return}e.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+A)}function V(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Rt($,P,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+A)}const J={[rh]:r.REPEAT,[zi]:r.CLAMP_TO_EDGE,[ah]:r.MIRRORED_REPEAT},it={[Se]:r.NEAREST,[Ef]:r.NEAREST_MIPMAP_NEAREST,[oh]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[px]:r.LINEAR_MIPMAP_NEAREST,[Ca]:r.LINEAR_MIPMAP_LINEAR};function lt(P,A,$){if($?(r.texParameteri(P,r.TEXTURE_WRAP_S,J[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,J[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,J[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,it[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,it[A.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==zi||A.wrapT!==zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,w(A.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Se&&A.minFilter!==Mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Se||A.minFilter!==oh&&A.minFilter!==Ca||A.type===As&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===Pa&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(r.texParameterf(P,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function z(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",F));const tt=A.source;let et=g.get(tt);et===void 0&&(et={},g.set(tt,et));const ct=X(A);if(ct!==P.__cacheKey){et[ct]===void 0&&(et[ct]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,$=!0),et[ct].usedTimes++;const At=et[P.__cacheKey];At!==void 0&&(et[P.__cacheKey].usedTimes--,At.usedTimes===0&&U(A)),P.__cacheKey=ct,P.__webglTexture=et[ct].texture}return $}function It(P,A,$){let tt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(tt=r.TEXTURE_3D);const et=z(P,A),ct=A.source;e.bindTexture(tt,P.__webglTexture,r.TEXTURE0+$);const At=i.get(ct);if(ct.version!==At.__version||et===!0){e.activeTexture(r.TEXTURE0+$),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const dt=v(A)&&M(A.image)===!1;let Y=x(A.image,dt,!1,h);Y=ri(A,Y);const mt=M(Y)||o,xt=s.convert(A.format,A.colorSpace);let bt=s.convert(A.type),ut=R(A.internalFormat,xt,bt,A.colorSpace);lt(tt,A,mt);let gt;const Ht=A.mipmaps,te=o&&A.isVideoTexture!==!0,ye=At.__version===void 0||et===!0,B=b(A,Y,mt);if(A.isDepthTexture)ut=r.DEPTH_COMPONENT,o?A.type===As?ut=r.DEPTH_COMPONENT32F:A.type===Ts?ut=r.DEPTH_COMPONENT24:A.type===Es?ut=r.DEPTH24_STENCIL8:ut=r.DEPTH_COMPONENT16:A.type===As&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Rs&&ut===r.DEPTH_COMPONENT&&A.type!==Rf&&A.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ts,bt=s.convert(A.type)),A.format===Cs&&ut===r.DEPTH_COMPONENT&&(ut=r.DEPTH_STENCIL,A.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Es,bt=s.convert(A.type))),ye&&(te?e.texStorage2D(r.TEXTURE_2D,1,ut,Y.width,Y.height):e.texImage2D(r.TEXTURE_2D,0,ut,Y.width,Y.height,0,xt,bt,null));else if(A.isDataTexture)if(Ht.length>0&&mt){te&&ye&&e.texStorage2D(r.TEXTURE_2D,B,ut,Ht[0].width,Ht[0].height);for(let j=0,Q=Ht.length;j<Q;j++)gt=Ht[j],te?e.texSubImage2D(r.TEXTURE_2D,j,0,0,gt.width,gt.height,xt,bt,gt.data):e.texImage2D(r.TEXTURE_2D,j,ut,gt.width,gt.height,0,xt,bt,gt.data);A.generateMipmaps=!1}else te?(ye&&e.texStorage2D(r.TEXTURE_2D,B,ut,Y.width,Y.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,xt,bt,Y.data)):e.texImage2D(r.TEXTURE_2D,0,ut,Y.width,Y.height,0,xt,bt,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){te&&ye&&e.texStorage3D(r.TEXTURE_2D_ARRAY,B,ut,Ht[0].width,Ht[0].height,Y.depth);for(let j=0,Q=Ht.length;j<Q;j++)gt=Ht[j],A.format!==ii?xt!==null?te?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,Y.depth,xt,gt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,ut,gt.width,gt.height,Y.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,Y.depth,xt,bt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,ut,gt.width,gt.height,Y.depth,0,xt,bt,gt.data)}else{te&&ye&&e.texStorage2D(r.TEXTURE_2D,B,ut,Ht[0].width,Ht[0].height);for(let j=0,Q=Ht.length;j<Q;j++)gt=Ht[j],A.format!==ii?xt!==null?te?e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,ut,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(r.TEXTURE_2D,j,0,0,gt.width,gt.height,xt,bt,gt.data):e.texImage2D(r.TEXTURE_2D,j,ut,gt.width,gt.height,0,xt,bt,gt.data)}else if(A.isDataArrayTexture)te?(ye&&e.texStorage3D(r.TEXTURE_2D_ARRAY,B,ut,Y.width,Y.height,Y.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,xt,bt,Y.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,ut,Y.width,Y.height,Y.depth,0,xt,bt,Y.data);else if(A.isData3DTexture)te?(ye&&e.texStorage3D(r.TEXTURE_3D,B,ut,Y.width,Y.height,Y.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,xt,bt,Y.data)):e.texImage3D(r.TEXTURE_3D,0,ut,Y.width,Y.height,Y.depth,0,xt,bt,Y.data);else if(A.isFramebufferTexture){if(ye)if(te)e.texStorage2D(r.TEXTURE_2D,B,ut,Y.width,Y.height);else{let j=Y.width,Q=Y.height;for(let ht=0;ht<B;ht++)e.texImage2D(r.TEXTURE_2D,ht,ut,j,Q,0,xt,bt,null),j>>=1,Q>>=1}}else if(Ht.length>0&&mt){te&&ye&&e.texStorage2D(r.TEXTURE_2D,B,ut,Ht[0].width,Ht[0].height);for(let j=0,Q=Ht.length;j<Q;j++)gt=Ht[j],te?e.texSubImage2D(r.TEXTURE_2D,j,0,0,xt,bt,gt):e.texImage2D(r.TEXTURE_2D,j,ut,xt,bt,gt);A.generateMipmaps=!1}else te?(ye&&e.texStorage2D(r.TEXTURE_2D,B,ut,Y.width,Y.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,bt,Y)):e.texImage2D(r.TEXTURE_2D,0,ut,xt,bt,Y);S(A,mt)&&T(tt),At.__version=ct.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Rt(P,A,$){if(A.image.length!==6)return;const tt=z(P,A),et=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const ct=i.get(et);if(et.version!==ct.__version||tt===!0){e.activeTexture(r.TEXTURE0+$),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const At=A.isCompressedTexture||A.image[0].isCompressedTexture,dt=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!At&&!dt?Y[j]=x(A.image[j],!1,!0,c):Y[j]=dt?A.image[j].image:A.image[j],Y[j]=ri(A,Y[j]);const mt=Y[0],xt=M(mt)||o,bt=s.convert(A.format,A.colorSpace),ut=s.convert(A.type),gt=R(A.internalFormat,bt,ut,A.colorSpace),Ht=o&&A.isVideoTexture!==!0,te=ct.__version===void 0||tt===!0;let ye=b(A,mt,xt);lt(r.TEXTURE_CUBE_MAP,A,xt);let B;if(At){Ht&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ye,gt,mt.width,mt.height);for(let j=0;j<6;j++){B=Y[j].mipmaps;for(let Q=0;Q<B.length;Q++){const ht=B[Q];A.format!==ii?bt!==null?Ht?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,0,0,ht.width,ht.height,bt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,0,0,ht.width,ht.height,bt,ut,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,gt,ht.width,ht.height,0,bt,ut,ht.data)}}}else{B=A.mipmaps,Ht&&te&&(B.length>0&&ye++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ye,gt,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(dt){Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Y[j].width,Y[j].height,bt,ut,Y[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,gt,Y[j].width,Y[j].height,0,bt,ut,Y[j].data);for(let Q=0;Q<B.length;Q++){const ft=B[Q].image[j].image;Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,0,0,ft.width,ft.height,bt,ut,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,gt,ft.width,ft.height,0,bt,ut,ft.data)}}else{Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt,ut,Y[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,gt,bt,ut,Y[j]);for(let Q=0;Q<B.length;Q++){const ht=B[Q];Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,0,0,bt,ut,ht.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,gt,bt,ut,ht.image[j])}}}S(A,xt)&&T(r.TEXTURE_CUBE_MAP),ct.__version=et.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function at(P,A,$,tt,et){const ct=s.convert($.format,$.colorSpace),At=s.convert($.type),dt=R($.internalFormat,ct,At,$.colorSpace);i.get(A).__hasExternalTextures||(et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,0,dt,A.width,A.height,A.depth,0,ct,At,null):e.texImage2D(et,0,dt,A.width,A.height,0,ct,At,null)),e.bindFramebuffer(r.FRAMEBUFFER,P),Zt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,et,i.get($).__webglTexture,0,Ae(A)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,et,i.get($).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(P,A,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let tt=r.DEPTH_COMPONENT16;if($||Zt(A)){const et=A.depthTexture;et&&et.isDepthTexture&&(et.type===As?tt=r.DEPTH_COMPONENT32F:et.type===Ts&&(tt=r.DEPTH_COMPONENT24));const ct=Ae(A);Zt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,tt,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,tt,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,tt,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const tt=Ae(A);$&&Zt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,r.DEPTH24_STENCIL8,A.width,A.height):Zt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const tt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let et=0;et<tt.length;et++){const ct=tt[et],At=s.convert(ct.format,ct.colorSpace),dt=s.convert(ct.type),Y=R(ct.internalFormat,At,dt,ct.colorSpace),mt=Ae(A);$&&Zt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,Y,A.width,A.height):Zt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,Y,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Y,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z(A.depthTexture,0);const tt=i.get(A.depthTexture).__webglTexture,et=Ae(A);if(A.depthTexture.format===Rs)Zt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(A.depthTexture.format===Cs)Zt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function yt(P){const A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Kt(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[tt]),A.__webglDepthbuffer[tt]=r.createRenderbuffer(),Tt(A.__webglDepthbuffer[tt],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Tt(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(P,A,$){const tt=i.get(P);A!==void 0&&at(tt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),$!==void 0&&yt(P)}function Le(P){const A=P.texture,$=i.get(P),tt=i.get(A);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=A.version,a.memory.textures++);const et=P.isWebGLCubeRenderTarget===!0,ct=P.isWebGLMultipleRenderTargets===!0,At=M(P)||o;if(et){$.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)$.__webglFramebuffer[dt]=r.createFramebuffer()}else{if($.__webglFramebuffer=r.createFramebuffer(),ct)if(n.drawBuffers){const dt=P.texture;for(let Y=0,mt=dt.length;Y<mt;Y++){const xt=i.get(dt[Y]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Zt(P)===!1){const dt=ct?A:[A];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Y=0;Y<dt.length;Y++){const mt=dt[Y];$.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Y]);const xt=s.convert(mt.format,mt.colorSpace),bt=s.convert(mt.type),ut=R(mt.internalFormat,xt,bt,mt.colorSpace,P.isXRRenderTarget===!0),gt=Ae(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,ut,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,$.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),lt(r.TEXTURE_CUBE_MAP,A,At);for(let dt=0;dt<6;dt++)at($.__webglFramebuffer[dt],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt);S(A,At)&&T(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const dt=P.texture;for(let Y=0,mt=dt.length;Y<mt;Y++){const xt=dt[Y],bt=i.get(xt);e.bindTexture(r.TEXTURE_2D,bt.__webglTexture),lt(r.TEXTURE_2D,xt,At),at($.__webglFramebuffer,P,xt,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D),S(xt,At)&&T(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,tt.__webglTexture),lt(dt,A,At),at($.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,dt),S(A,At)&&T(dt),e.unbindTexture()}P.depthBuffer&&yt(P)}function ke(P){const A=M(P)||o,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let tt=0,et=$.length;tt<et;tt++){const ct=$[tt];if(S(ct,A)){const At=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,dt=i.get(ct).__webglTexture;e.bindTexture(At,dt),T(At),e.unbindTexture()}}}function Ie(P){if(o&&P.samples>0&&Zt(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,tt=P.height;let et=r.COLOR_BUFFER_BIT;const ct=[],At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let mt=0;mt<A.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<A.length;mt++){ct.push(r.COLOR_ATTACHMENT0+mt),P.depthBuffer&&ct.push(At);const xt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(xt===!1&&(P.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),Y&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]),xt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[At]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[At])),Y){const bt=i.get(A[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,$,tt,0,0,$,tt,et,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let mt=0;mt<A.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const xt=i.get(A[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function Ae(P){return Math.min(u,P.samples)}function Zt(P){const A=i.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function me(P){const A=a.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function ri(P,A){const $=P.colorSpace,tt=P.format,et=P.type;return P.isCompressedTexture===!0||P.format===gh||$!==nn&&$!==Ls&&($===Lt?o===!1?t.has("EXT_sRGB")===!0&&tt===ii?(P.format=gh,P.minFilter=Mi,P.generateMipmaps=!1):A=Op.sRGBToLinear(A):(tt!==ii||et!==ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=ot,this.setTexture3D=rt,this.setTextureCube=V,this.rebindTextures=Bt,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Zt}function KS(r,t,e){const i=e.isWebGL2;function n(s,a=Ls){let o;if(s===ws)return r.UNSIGNED_BYTE;if(s===xx)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_x)return r.UNSIGNED_SHORT_5_5_5_1;if(s===mx)return r.BYTE;if(s===gx)return r.SHORT;if(s===Rf)return r.UNSIGNED_SHORT;if(s===yx)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===As)return r.FLOAT;if(s===Pa)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===vx)return r.ALPHA;if(s===ii)return r.RGBA;if(s===Mx)return r.LUMINANCE;if(s===bx)return r.LUMINANCE_ALPHA;if(s===Rs)return r.DEPTH_COMPONENT;if(s===Cs)return r.DEPTH_STENCIL;if(s===gh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Sx)return r.RED;if(s===wx)return r.RED_INTEGER;if(s===Tx)return r.RG;if(s===Ax)return r.RG_INTEGER;if(s===Ex)return r.RGBA_INTEGER;if(s===lh||s===ch||s===hh||s===uh)if(a===Lt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===lh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ch)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===lh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ch)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cf||s===Pf||s===Lf||s===If)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===If)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rx)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Df||s===Ff)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Df)return a===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ff)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Uf||s===Nf||s===Bf||s===zf||s===Of||s===kf||s===Vf||s===Hf||s===Gf||s===Wf||s===Xf||s===$f||s===jf||s===qf)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Uf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Of)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$f)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qf)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===dh)return a===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Cx||s===Yf||s===Kf||s===Zf)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===dh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Yf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Es?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class ZS extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ga extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class gm extends ni{constructor(t,e,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:Rs,h!==Rs&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rs&&(i=Ts),i===void 0&&h===Cs&&(i=Es),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1}}class QS extends Zn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const y=e.getContextAttributes();let g=null,p=null;const _=[],x=[],M=new Set,v=new Map,S=new pi;S.layers.enable(1),S.viewport=new le;const T=new pi;T.layers.enable(2),T.viewport=new le;const R=[S,T],b=new ZS;b.layers.enable(1),b.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=_[V];return J===void 0&&(J=new Jh,_[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=_[V];return J===void 0&&(J=new Jh,_[V]=J),J.getGripSpace()},this.getHand=function(V){let J=_[V];return J===void 0&&(J=new Jh,_[V]=J),J.getHandSpace()};function L(V){const J=x.indexOf(V.inputSource);if(J===-1)return;const it=_[J];it!==void 0&&(it.update(V.inputSource,V.frame,c||a),it.dispatchEvent({type:V.type,data:V.inputSource}))}function C(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",C),n.removeEventListener("inputsourceschange",U);for(let V=0;V<_.length;V++){const J=x[V];J!==null&&(x[V]=null,_[V].disconnect(J))}w=null,F=null,t.setRenderTarget(g),f=null,d=null,u=null,n=null,p=null,rt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",C),n.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:n.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,J),n.updateRenderState({baseLayer:f}),p=new Fn(f.framebufferWidth,f.framebufferHeight,{format:ii,type:ws,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let J=null,it=null,lt=null;y.depth&&(lt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=y.stencil?Cs:Rs,it=y.stencil?Es:Ts);const z={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(z),n.updateRenderState({layers:[d]}),p=new Fn(d.textureWidth,d.textureHeight,{format:ii,type:ws,depthTexture:new gm(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const It=t.properties.get(p);It.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(V){for(let J=0;J<V.removed.length;J++){const it=V.removed[J],lt=x.indexOf(it);lt>=0&&(x[lt]=null,_[lt].disconnect(it))}for(let J=0;J<V.added.length;J++){const it=V.added[J];let lt=x.indexOf(it);if(lt===-1){for(let It=0;It<_.length;It++)if(It>=x.length){x.push(it),lt=It;break}else if(x[It]===null){x[It]=it,lt=It;break}if(lt===-1)break}const z=_[lt];z&&z.connect(it)}}const N=new D,G=new D;function W(V,J,it){N.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(it.matrixWorld);const lt=N.distanceTo(G),z=J.projectionMatrix.elements,It=it.projectionMatrix.elements,Rt=z[14]/(z[10]-1),at=z[14]/(z[10]+1),Tt=(z[9]+1)/z[5],Kt=(z[9]-1)/z[5],yt=(z[8]-1)/z[0],Bt=(It[8]+1)/It[0],Le=Rt*yt,ke=Rt*Bt,Ie=lt/(-yt+Bt),Ae=Ie*-yt;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ae),V.translateZ(Ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Zt=Rt+Ie,me=at+Ie,ri=Le-Ae,P=ke+(lt-Ae),A=Tt*at/me*Zt,$=Kt*at/me*Zt;V.projectionMatrix.makePerspective(ri,P,A,$,Zt,me),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function H(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;b.near=T.near=S.near=V.near,b.far=T.far=S.far=V.far,(w!==b.near||F!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,F=b.far);const J=V.parent,it=b.cameras;H(b,J);for(let lt=0;lt<it.length;lt++)H(it[lt],J);it.length===2?W(b,S,T):b.projectionMatrix.copy(S.projectionMatrix),X(V,b,J)};function X(V,J,it){it===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(it.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const lt=V.children;for(let z=0,It=lt.length;z<It;z++)lt[z].updateMatrixWorld(!0);V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=co*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.getPlanes=function(){return M};let Z=null;function ot(V,J){if(h=J.getViewerPose(c||a),m=J,h!==null){const it=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let lt=!1;it.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let z=0;z<it.length;z++){const It=it[z];let Rt=null;if(f!==null)Rt=f.getViewport(It);else{const Tt=u.getViewSubImage(d,It);Rt=Tt.viewport,z===0&&(t.setRenderTargetTextures(p,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(p))}let at=R[z];at===void 0&&(at=new pi,at.layers.enable(z),at.viewport=new le,R[z]=at),at.matrix.fromArray(It.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(It.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),z===0&&(b.matrix.copy(at.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(at)}}for(let it=0;it<_.length;it++){const lt=x[it],z=_[it];lt!==null&&z!==void 0&&z.update(lt,J,c||a)}if(Z&&Z(V,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let it=null;for(const lt of M)J.detectedPlanes.has(lt)||(it===null&&(it=[]),it.push(lt));if(it!==null)for(const lt of it)M.delete(lt),v.delete(lt),i.dispatchEvent({type:"planeremoved",data:lt});for(const lt of J.detectedPlanes)if(!M.has(lt))M.add(lt),v.set(lt,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:lt});else{const z=v.get(lt);lt.lastChangedTime>z&&(v.set(lt,lt.lastChangedTime),i.dispatchEvent({type:"planechanged",data:lt}))}}m=null}const rt=new Hp;rt.setAnimationLoop(ot),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}}function tw(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Gp(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,_,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ei&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ei&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ei&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ew(r,t,e,i){let n={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=n[_.id];M===void 0&&(m(_),M=h(_),n[_.id]=M,_.addEventListener("dispose",g));const v=x.program;i.updateUBOMapping(_,v);const S=t.render.frame;s[_.id]!==S&&(d(_),s[_.id]=S)}function h(_){const x=u();_.__bindingPointIndex=x;const M=r.createBuffer(),v=_.__size,S=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=n[_.id],M=_.uniforms,v=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let S=0,T=M.length;S<T;S++){const R=M[S];if(f(R,S,v)===!0){const b=R.__offset,w=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let L=0;L<w.length;L++){const C=w[L],U=y(C);typeof C=="number"?(R.__data[0]=C,r.bufferSubData(r.UNIFORM_BUFFER,b+F,R.__data)):C.isMatrix3?(R.__data[0]=C.elements[0],R.__data[1]=C.elements[1],R.__data[2]=C.elements[2],R.__data[3]=C.elements[0],R.__data[4]=C.elements[3],R.__data[5]=C.elements[4],R.__data[6]=C.elements[5],R.__data[7]=C.elements[0],R.__data[8]=C.elements[6],R.__data[9]=C.elements[7],R.__data[10]=C.elements[8],R.__data[11]=C.elements[0]):(C.toArray(R.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,R.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,x,M){const v=_.value;if(M[x]===void 0){if(typeof v=="number")M[x]=v;else{const S=Array.isArray(v)?v:[v],T=[];for(let R=0;R<S.length;R++)T.push(S[R].clone());M[x]=T}return!0}else if(typeof v=="number"){if(M[x]!==v)return M[x]=v,!0}else{const S=Array.isArray(M[x])?M[x]:[M[x]],T=Array.isArray(v)?v:[v];for(let R=0;R<S.length;R++){const b=S[R];if(b.equals(T[R])===!1)return b.copy(T[R]),!0}}return!1}function m(_){const x=_.uniforms;let M=0;const v=16;let S=0;for(let T=0,R=x.length;T<R;T++){const b=x[T],w={boundary:0,storage:0},F=Array.isArray(b.value)?b.value:[b.value];for(let L=0,C=F.length;L<C;L++){const U=F[L],N=y(U);w.boundary+=N.boundary,w.storage+=N.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,T>0){S=M%v;const L=v-S;S!==0&&L-w.boundary<0&&(M+=v-S,b.__offset=M)}M+=w.storage}return S=M%v,S>0&&(M+=v-S),_.__size=M,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(const _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}function iw(){const r=Fa("canvas");return r.style.display="block",r}class nw{constructor(t={}){const{canvas:e=iw(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=null,m=null;const y=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Lt,this.useLegacyLights=!0,this.toneMapping=Sn,this.toneMappingExposure=1;const p=this;let _=!1,x=0,M=0,v=null,S=-1,T=null;const R=new le,b=new le;let w=null,F=e.width,L=e.height,C=1,U=null,N=null;const G=new le(0,0,F,L),W=new le(0,0,F,L);let H=!1;const X=new Nh;let Z=!1,ot=!1,rt=null;const V=new Jt,J=new D,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return v===null?C:1}let z=i;function It(E,k){for(let q=0;q<E.length;q++){const O=E[q],K=e.getContext(O,k);if(K!==null)return K}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hy}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",te,!1),z===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),z=It(k,E),z===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Rt,at,Tt,Kt,yt,Bt,Le,ke,Ie,Ae,Zt,me,ri,P,A,$,tt,et,ct,At,dt,Y,mt,xt;function bt(){Rt=new fb(z),at=new sb(z,Rt,t),Rt.init(at),Y=new KS(z,Rt,at),Tt=new qS(z,Rt,at),Kt=new gb(z),yt=new FS,Bt=new YS(z,Rt,Tt,yt,at,Y,Kt),Le=new lb(p),ke=new db(p),Ie=new ev(z,at),mt=new ib(z,Rt,Ie,at),Ae=new pb(z,Ie,Kt,mt),Zt=new vb(z,Ae,Ie,Kt),ct=new _b(z,at,Bt),$=new rb(yt),me=new DS(p,Le,ke,Rt,at,mt,$),ri=new tw(p,yt),P=new NS,A=new HS(Rt,at),et=new eb(p,Le,ke,Tt,Zt,d,l),tt=new jS(p,Zt,at),xt=new ew(z,Kt,at,Tt),At=new nb(z,Rt,Kt,at),dt=new mb(z,Rt,Kt,at),Kt.programs=me.programs,p.capabilities=at,p.extensions=Rt,p.properties=yt,p.renderLists=P,p.shadowMap=tt,p.state=Tt,p.info=Kt}bt();const ut=new QS(p,z);this.xr=ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(E){E!==void 0&&(C=E,this.setSize(F,L,!1))},this.getSize=function(E){return E.set(F,L)},this.setSize=function(E,k,q=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,L=k,e.width=Math.floor(E*C),e.height=Math.floor(k*C),q===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(F*C,L*C).floor()},this.setDrawingBufferSize=function(E,k,q){F=E,L=k,C=q,e.width=Math.floor(E*q),e.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(G)},this.setViewport=function(E,k,q,O){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,k,q,O),Tt.viewport(R.copy(G).multiplyScalar(C).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,k,q,O){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,k,q,O),Tt.scissor(b.copy(W).multiplyScalar(C).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){Tt.setScissorTest(H=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(E=!0,k=!0,q=!0){let O=0;E&&(O|=z.COLOR_BUFFER_BIT),k&&(O|=z.DEPTH_BUFFER_BIT),q&&(O|=z.STENCIL_BUFFER_BIT),z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",te,!1),P.dispose(),A.dispose(),yt.dispose(),Le.dispose(),ke.dispose(),Zt.dispose(),mt.dispose(),xt.dispose(),me.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ft),ut.removeEventListener("sessionend",ne),rt&&(rt.dispose(),rt=null),se.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const E=Kt.autoReset,k=tt.enabled,q=tt.autoUpdate,O=tt.needsUpdate,K=tt.type;bt(),Kt.autoReset=E,tt.enabled=k,tt.autoUpdate=q,tt.needsUpdate=O,tt.type=K}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ye(E){const k=E.target;k.removeEventListener("dispose",ye),B(k)}function B(E){j(E),yt.remove(E)}function j(E){const k=yt.get(E).programs;k!==void 0&&(k.forEach(function(q){me.releaseProgram(q)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,O,K,_t){k===null&&(k=it);const St=K.isMesh&&K.matrixWorld.determinant()<0,Ct=XT(E,k,q,O,K);Tt.setMaterial(O,St);let Ft=q.index,Ut=1;O.wireframe===!0&&(Ft=Ae.getWireframeAttribute(q),Ut=2);const Nt=q.drawRange,zt=q.attributes.position;let ee=Nt.start*Ut,Qe=(Nt.start+Nt.count)*Ut;_t!==null&&(ee=Math.max(ee,_t.start*Ut),Qe=Math.min(Qe,(_t.start+_t.count)*Ut)),Ft!==null?(ee=Math.max(ee,0),Qe=Math.min(Qe,Ft.count)):zt!=null&&(ee=Math.max(ee,0),Qe=Math.min(Qe,zt.count));const Yi=Qe-ee;if(Yi<0||Yi===1/0)return;mt.setup(K,O,Ct,q,Ft);let Gs,be=At;if(Ft!==null&&(Gs=Ie.get(Ft),be=dt,be.setIndex(Gs)),K.isMesh)O.wireframe===!0?(Tt.setLineWidth(O.wireframeLinewidth*lt()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(K.isLine){let Gt=O.linewidth;Gt===void 0&&(Gt=1),Tt.setLineWidth(Gt*lt()),K.isLineSegments?be.setMode(z.LINES):K.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else K.isPoints?be.setMode(z.POINTS):K.isSprite&&be.setMode(z.TRIANGLES);if(K.isInstancedMesh)be.renderInstances(ee,Yi,K.count);else if(q.isInstancedBufferGeometry){const Gt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,td=Math.min(q.instanceCount,Gt);be.renderInstances(ee,Yi,td)}else be.render(ee,Yi)},this.compile=function(E,k){function q(O,K,_t){O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=ei,O.needsUpdate=!0,ic(O,K,_t),O.side=Bi,O.needsUpdate=!0,ic(O,K,_t),O.side=en):ic(O,K,_t)}m=A.get(E),m.init(),g.push(m),E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(p.useLegacyLights),E.traverse(function(O){const K=O.material;if(K)if(Array.isArray(K))for(let _t=0;_t<K.length;_t++){const St=K[_t];q(St,E,O)}else q(K,E,O)}),g.pop(),m=null};let Q=null;function ht(E){Q&&Q(E)}function ft(){se.stop()}function ne(){se.start()}const se=new Hp;se.setAnimationLoop(ht),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(E){Q=E,ut.setAnimationLoop(E),E===null?se.stop():se.start()},ut.addEventListener("sessionstart",ft),ut.addEventListener("sessionend",ne),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,v),m=A.get(E,g.length),m.init(),g.push(m),V.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(V),ot=this.localClippingEnabled,Z=$.init(this.clippingPlanes,ot),f=P.get(E,y.length),f.init(),y.push(f),je(E,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(U,N),Z===!0&&$.beginShadows();const q=m.state.shadowsArray;if(tt.render(q,E,k),Z===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(f,E),m.setupLights(p.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let K=0,_t=O.length;K<_t;K++){const St=O[K];ps(f,E,St,St.viewport)}}else ps(f,E,k);v!==null&&(Bt.updateMultisampleRenderTarget(v),Bt.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(p,E,k),mt.resetDefaultState(),S=-1,T=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,y.pop(),y.length>0?f=y[y.length-1]:f=null};function je(E,k,q,O){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){O&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const St=Zt.update(E),Ct=E.material;Ct.visible&&f.push(E,St,Ct,q,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==Kt.render.frame&&(E.skeleton.update(),E.skeleton.frame=Kt.render.frame);const St=Zt.update(E),Ct=E.material;if(O&&(St.boundingSphere===null&&St.computeBoundingSphere(),J.copy(St.boundingSphere.center).applyMatrix4(E.matrixWorld).applyMatrix4(V)),Array.isArray(Ct)){const Ft=St.groups;for(let Ut=0,Nt=Ft.length;Ut<Nt;Ut++){const zt=Ft[Ut],ee=Ct[zt.materialIndex];ee&&ee.visible&&f.push(E,St,ee,q,J.z,zt)}}else Ct.visible&&f.push(E,St,Ct,q,J.z,null)}}const _t=E.children;for(let St=0,Ct=_t.length;St<Ct;St++)je(_t[St],k,q,O)}function ps(E,k,q,O){const K=E.opaque,_t=E.transmissive,St=E.transparent;m.setupLightsView(q),Z===!0&&$.setGlobalState(p.clippingPlanes,q),_t.length>0&&xe(K,_t,k,q),O&&Tt.viewport(R.copy(O)),K.length>0&&Li(K,k,q),_t.length>0&&Li(_t,k,q),St.length>0&&Li(St,k,q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function xe(E,k,q,O){if(rt===null){const Ct=at.isWebGL2;rt=new Fn(1024,1024,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?Pa:ws,minFilter:Ca,samples:Ct&&o===!0?4:0})}const K=p.getRenderTarget();p.setRenderTarget(rt),p.clear();const _t=p.toneMapping;p.toneMapping=Sn,Li(E,q,O),Bt.updateMultisampleRenderTarget(rt),Bt.updateRenderTargetMipmap(rt);let St=!1;for(let Ct=0,Ft=k.length;Ct<Ft;Ct++){const Ut=k[Ct],Nt=Ut.object,zt=Ut.geometry,ee=Ut.material,Qe=Ut.group;if(ee.side===en&&Nt.layers.test(O.layers)){const Yi=ee.side;ee.side=ei,ee.needsUpdate=!0,un(Nt,q,O,zt,ee,Qe),ee.side=Yi,ee.needsUpdate=!0,St=!0}}St===!0&&(Bt.updateMultisampleRenderTarget(rt),Bt.updateRenderTargetMipmap(rt)),p.setRenderTarget(K),p.toneMapping=_t}function Li(E,k,q){const O=k.isScene===!0?k.overrideMaterial:null;for(let K=0,_t=E.length;K<_t;K++){const St=E[K],Ct=St.object,Ft=St.geometry,Ut=O===null?St.material:O,Nt=St.group;Ct.layers.test(q.layers)&&un(Ct,k,q,Ft,Ut,Nt)}}function un(E,k,q,O,K,_t){E.onBeforeRender(p,k,q,O,K,_t),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(p,k,q,O,E,_t),K.transparent===!0&&K.side===en&&K.forceSinglePass===!1?(K.side=ei,K.needsUpdate=!0,p.renderBufferDirect(q,k,O,K,E,_t),K.side=Bi,K.needsUpdate=!0,p.renderBufferDirect(q,k,O,K,E,_t),K.side=en):p.renderBufferDirect(q,k,O,K,E,_t),E.onAfterRender(p,k,q,O,K,_t)}function ic(E,k,q){k.isScene!==!0&&(k=it);const O=yt.get(E),K=m.state.lights,_t=m.state.shadowsArray,St=K.state.version,Ct=me.getParameters(E,K.state,_t,k,q),Ft=me.getProgramCacheKey(Ct);let Ut=O.programs;O.environment=E.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(E.isMeshStandardMaterial?ke:Le).get(E.envMap||O.environment),Ut===void 0&&(E.addEventListener("dispose",ye),Ut=new Map,O.programs=Ut);let Nt=Ut.get(Ft);if(Nt!==void 0){if(O.currentProgram===Nt&&O.lightsStateVersion===St)return kg(E,Ct),Nt}else Ct.uniforms=me.getUniforms(E),E.onBuild(q,Ct,p),E.onBeforeCompile(Ct,p),Nt=me.acquireProgram(Ct,Ft),Ut.set(Ft,Nt),O.uniforms=Ct.uniforms;const zt=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=$.uniform),kg(E,Ct),O.needsLights=jT(E),O.lightsStateVersion=St,O.needsLights&&(zt.ambientLightColor.value=K.state.ambient,zt.lightProbe.value=K.state.probe,zt.directionalLights.value=K.state.directional,zt.directionalLightShadows.value=K.state.directionalShadow,zt.spotLights.value=K.state.spot,zt.spotLightShadows.value=K.state.spotShadow,zt.rectAreaLights.value=K.state.rectArea,zt.ltc_1.value=K.state.rectAreaLTC1,zt.ltc_2.value=K.state.rectAreaLTC2,zt.pointLights.value=K.state.point,zt.pointLightShadows.value=K.state.pointShadow,zt.hemisphereLights.value=K.state.hemi,zt.directionalShadowMap.value=K.state.directionalShadowMap,zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,zt.spotShadowMap.value=K.state.spotShadowMap,zt.spotLightMatrix.value=K.state.spotLightMatrix,zt.spotLightMap.value=K.state.spotLightMap,zt.pointShadowMap.value=K.state.pointShadowMap,zt.pointShadowMatrix.value=K.state.pointShadowMatrix);const ee=Nt.getUniforms(),Qe=ml.seqWithValue(ee.seq,zt);return O.currentProgram=Nt,O.uniformsList=Qe,Nt}function kg(E,k){const q=yt.get(E);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function XT(E,k,q,O,K){k.isScene!==!0&&(k=it),Bt.resetTextureUnits();const _t=k.fog,St=O.isMeshStandardMaterial?k.environment:null,Ct=v===null?p.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:nn,Ft=(O.isMeshStandardMaterial?ke:Le).get(O.envMap||St),Ut=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Nt=!!O.normalMap&&!!q.attributes.tangent,zt=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,Qe=!!q.morphAttributes.color,Yi=O.toneMapped?p.toneMapping:Sn,Gs=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,be=Gs!==void 0?Gs.length:0,Gt=yt.get(O),td=m.state.lights;if(Z===!0&&(ot===!0||E!==T)){const xi=E===T&&O.id===S;$.setState(O,E,xi)}let De=!1;O.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==td.state.version||Gt.outputColorSpace!==Ct||K.isInstancedMesh&&Gt.instancing===!1||!K.isInstancedMesh&&Gt.instancing===!0||K.isSkinnedMesh&&Gt.skinning===!1||!K.isSkinnedMesh&&Gt.skinning===!0||Gt.envMap!==Ft||O.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==$.numPlanes||Gt.numIntersection!==$.numIntersection)||Gt.vertexAlphas!==Ut||Gt.vertexTangents!==Nt||Gt.morphTargets!==zt||Gt.morphNormals!==ee||Gt.morphColors!==Qe||Gt.toneMapping!==Yi||at.isWebGL2===!0&&Gt.morphTargetsCount!==be)&&(De=!0):(De=!0,Gt.__version=O.version);let Ws=Gt.currentProgram;De===!0&&(Ws=ic(O,k,K));let Vg=!1,ao=!1,ed=!1;const ti=Ws.getUniforms(),Xs=Gt.uniforms;if(Tt.useProgram(Ws.program)&&(Vg=!0,ao=!0,ed=!0),O.id!==S&&(S=O.id,ao=!0),Vg||T!==E){if(ti.setValue(z,"projectionMatrix",E.projectionMatrix),at.logarithmicDepthBuffer&&ti.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,ao=!0,ed=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const xi=ti.map.cameraPosition;xi!==void 0&&xi.setValue(z,J.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ti.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||K.isSkinnedMesh)&&ti.setValue(z,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){ti.setOptional(z,K,"bindMatrix"),ti.setOptional(z,K,"bindMatrixInverse");const xi=K.skeleton;xi&&(at.floatVertexTextures?(xi.boneTexture===null&&xi.computeBoneTexture(),ti.setValue(z,"boneTexture",xi.boneTexture,Bt),ti.setValue(z,"boneTextureSize",xi.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const id=q.morphAttributes;if((id.position!==void 0||id.normal!==void 0||id.color!==void 0&&at.isWebGL2===!0)&&ct.update(K,q,Ws),(ao||Gt.receiveShadow!==K.receiveShadow)&&(Gt.receiveShadow=K.receiveShadow,ti.setValue(z,"receiveShadow",K.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Xs.envMap.value=Ft,Xs.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ao&&(ti.setValue(z,"toneMappingExposure",p.toneMappingExposure),Gt.needsLights&&$T(Xs,ed),_t&&O.fog===!0&&ri.refreshFogUniforms(Xs,_t),ri.refreshMaterialUniforms(Xs,O,C,L,rt),ml.upload(z,Gt.uniformsList,Xs,Bt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ml.upload(z,Gt.uniformsList,Xs,Bt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ti.setValue(z,"center",K.center),ti.setValue(z,"modelViewMatrix",K.modelViewMatrix),ti.setValue(z,"normalMatrix",K.normalMatrix),ti.setValue(z,"modelMatrix",K.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const xi=O.uniformsGroups;for(let nd=0,qT=xi.length;nd<qT;nd++)if(at.isWebGL2){const Hg=xi[nd];xt.update(Hg,Ws),xt.bind(Hg,Ws)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ws}function $T(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function jT(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,k,q){yt.get(E.texture).__webglTexture=k,yt.get(E.depthTexture).__webglTexture=q;const O=yt.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const q=yt.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,q=0){v=E,x=k,M=q;let O=!0,K=null,_t=!1,St=!1;if(E){const Ft=yt.get(E);Ft.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(z.FRAMEBUFFER,null),O=!1):Ft.__webglFramebuffer===void 0?Bt.setupRenderTarget(E):Ft.__hasExternalTextures&&Bt.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(St=!0);const Nt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Nt[k],_t=!0):at.isWebGL2&&E.samples>0&&Bt.useMultisampledRTT(E)===!1?K=yt.get(E).__webglMultisampledFramebuffer:K=Nt,R.copy(E.viewport),b.copy(E.scissor),w=E.scissorTest}else R.copy(G).multiplyScalar(C).floor(),b.copy(W).multiplyScalar(C).floor(),w=H;if(Tt.bindFramebuffer(z.FRAMEBUFFER,K)&&at.drawBuffers&&O&&Tt.drawBuffers(E,K),Tt.viewport(R),Tt.scissor(b),Tt.setScissorTest(w),_t){const Ft=yt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,q)}else if(St){const Ft=yt.get(E.texture),Ut=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.__webglTexture,q||0,Ut)}S=-1},this.readRenderTargetPixels=function(E,k,q,O,K,_t,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){Tt.bindFramebuffer(z.FRAMEBUFFER,Ct);try{const Ft=E.texture,Ut=Ft.format,Nt=Ft.type;if(Ut!==ii&&Y.convert(Ut)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Nt===Pa&&(Rt.has("EXT_color_buffer_half_float")||at.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Nt!==ws&&Y.convert(Nt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===As&&(at.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-O&&q>=0&&q<=E.height-K&&z.readPixels(k,q,O,K,Y.convert(Ut),Y.convert(Nt),_t)}finally{const Ft=v!==null?yt.get(v).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(E,k,q=0){const O=Math.pow(2,-q),K=Math.floor(k.image.width*O),_t=Math.floor(k.image.height*O);Bt.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,E.x,E.y,K,_t),Tt.unbindTexture()},this.copyTextureToTexture=function(E,k,q,O=0){const K=k.image.width,_t=k.image.height,St=Y.convert(q.format),Ct=Y.convert(q.type);Bt.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,E.x,E.y,K,_t,St,Ct,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,St,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,O,E.x,E.y,St,Ct,k.image),O===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q,O,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=E.max.x-E.min.x+1,St=E.max.y-E.min.y+1,Ct=E.max.z-E.min.z+1,Ft=Y.convert(O.format),Ut=Y.convert(O.type);let Nt;if(O.isData3DTexture)Bt.setTexture3D(O,0),Nt=z.TEXTURE_3D;else if(O.isDataArrayTexture)Bt.setTexture2DArray(O,0),Nt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const zt=z.getParameter(z.UNPACK_ROW_LENGTH),ee=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qe=z.getParameter(z.UNPACK_SKIP_PIXELS),Yi=z.getParameter(z.UNPACK_SKIP_ROWS),Gs=z.getParameter(z.UNPACK_SKIP_IMAGES),be=q.isCompressedTexture?q.mipmaps[0]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(Nt,K,k.x,k.y,k.z,_t,St,Ct,Ft,Ut,be.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Nt,K,k.x,k.y,k.z,_t,St,Ct,Ft,be.data)):z.texSubImage3D(Nt,K,k.x,k.y,k.z,_t,St,Ct,Ft,Ut,be),z.pixelStorei(z.UNPACK_ROW_LENGTH,zt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Yi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Gs),K===0&&O.generateMipmaps&&z.generateMipmap(Nt),Tt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Bt.setTextureCube(E,0):E.isData3DTexture?Bt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Bt.setTexture2DArray(E,0):Bt.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){x=0,M=0,v=null,Tt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?Ps:Jf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ps?Lt:nn}}class sw extends bp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ym{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xm(){return(typeof performance>"u"?Date:performance).now()}class rw extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class _m extends Jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Dt(16777215),this.specular=new Dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}var Pe=(r=>(r[r.BLACK=0]="BLACK",r[r.PORTAL=2236962]="PORTAL",r[r.BLUE=2980095]="BLUE",r[r.FOG=4737096]="FOG",r[r.RAIN=4934475]="RAIN",r[r.RED=9045767]="RED",r[r.MOON=11065767]="MOON",r[r.FIRE=16496449]="FIRE",r[r.WHITE=16777215]="WHITE",r))(Pe||{}),on;(r=>{class t extends _m{constructor(i={}){super(i),this.setValues(i)}async updateDefaultFragmentShader(i){const n=await qt.Loader.loadShader("ground/pars.frag"),s=await qt.Loader.loadShader("ground/main.frag");i.fragmentShader=`${n}
      ${i.fragmentShader.replace("#include <output_fragment>",`
        ${s}`)}`}async updateDefaultVertexShader(i){const n=await qt.Loader.loadShader("ground/pars.vert"),s=await qt.Loader.loadShader("ground/main.vert");i.vertexShader=`${n}
      ${i.vertexShader.replace("void main() {",`void main() {
          ${s}`)}`}onBeforeCompile(i){this.updateDefaultFragmentShader(i),this.updateDefaultVertexShader(i),this.needsUpdate=!0}}r.Ground=t,r.DynamicCollider=new Dr({color:Pe.RED,wireframe:!0,visible:!1,opacity:.33}),r.StaticCollider=new Dr({color:Pe.RAIN,transparent:!0,depthWrite:!1,visible:!1,opacity:.5}),r.Transparent=new Dr({color:Pe.BLACK,transparent:!0,depthWrite:!1,visible:!1,opacity:0}),r.HitBox=new Dr({transparent:!0,depthWrite:!1,color:Pe.RED,visible:!1,opacity:.75})})(on||(on={}));const Wa=new I;function Ai(r,t,e,i,n,s){const a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;Wa.copy(t),Wa[i]=0,Wa.normalize();const c=.5*a/(a+o),h=1-Wa.angleTo(r)/l;return Math.sign(Wa[e])===1?h*c:o/(a+o)+c+c*(1-h)}class vm extends Q0{constructor(t=1,e=1,i=1,n=2,s=.1){if(n=n*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,n,n,n),n===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new I,y=.5/n;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*s,h[g+1]=c.y*Math.sign(o.y)+l.y*s,h[g+2]=c.z*Math.sign(o.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=Ai(m,l,"z","y",s,i),d[p+1]=1-Ai(m,l,"y","z",s,e);break;case 1:m.set(-1,0,0),d[p+0]=1-Ai(m,l,"z","y",s,i),d[p+1]=1-Ai(m,l,"y","z",s,e);break;case 2:m.set(0,1,0),d[p+0]=1-Ai(m,l,"x","z",s,t),d[p+1]=Ai(m,l,"z","x",s,i);break;case 3:m.set(0,-1,0),d[p+0]=1-Ai(m,l,"x","z",s,t),d[p+1]=1-Ai(m,l,"z","x",s,i);break;case 4:m.set(0,0,1),d[p+0]=1-Ai(m,l,"x","y",s,t),d[p+1]=1-Ai(m,l,"y","x",s,e);break;case 5:m.set(0,0,-1),d[p+0]=Ai(m,l,"x","y",s,t),d[p+1]=1-Ai(m,l,"y","x",s,e);break}}}function aw(r){const t=new Map,e=new Map,i=r.clone();return Mm(r,i,function(n,s){t.set(s,n),e.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,a=t.get(n),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Mm(r,t,e){e(r,t);for(let i=0;i<r.children.length;i++)Mm(r.children[i],t.children[i],e)}class Qh extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ow{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:_r,endingEnd:_r};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Px,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const n=this._clip.duration,s=t._clip.duration,a=s/n,o=n/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ix:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ph:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===Lx;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===bi){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));i:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break i}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const o=Math.floor(n/e);n-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=vr,n.endingEnd=vr):(t?n.endingStart=this.zeroSlopeAtStart?vr:_r:n.endingStart=Ho,e?n.endingEnd=this.zeroSlopeAtEnd?vr:_r:n.endingEnd=Ho)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=i,this}}class gl{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bm extends gl{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}const tu="\\[\\]\\.:\\/",lw=new RegExp("["+tu+"]","g"),eu="[^"+tu+"]",cw="[^"+tu.replace("\\.","")+"]",hw=/((?:WC+[\/:])*)/.source.replace("WC",eu),uw=/(WCOD+)?/.source.replace("WCOD",cw),dw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),fw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),pw=new RegExp("^"+hw+uw+dw+fw+"$"),mw=["material","materials","bones","map"];class gw{constructor(t,e,i){const n=i||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Yt{constructor(t,e,i){this.path=e,this.parsedPath=i||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Yt.Composite(t,e,i):new Yt(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lw,"")}static parseTrackName(t){const e=pw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);mw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=Yt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=gw,Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray],Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yw{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){o.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){_i.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;_i.multiplyQuaternionsFlat(t,a,t,e,t,i),_i.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[i+o]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[i+a]*n}}}function ls(r,t,e){return Sm(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)}function yl(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Sm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xw(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function wm(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let l=0;l!==t;++l)n[a++]=r[o+l]}return n}function Tm(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}class _w extends gl{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_r,endingEnd:_r}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case vr:s=t,o=2*e-i;break;case Ho:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vr:a=t,l=2*i-e;break;case Ho:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let v=0;v!==o;++v)s[v]=p*a[h+v]+_*a[c+v]+x*a[l+v]+M*a[u+v];return s}}class vw extends gl{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class ln{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yl(e,this.TimeBufferType),this.values=yl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yl(t.times,Array),values:yl(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new vw(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _w(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ko:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case fh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ls(i,s,a),this.values=ls(this.values,s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Sm(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=ls(this.times),e=ls(this.values),i=this.getValueSize(),n=this.getInterpolation()===fh,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=ls(t,0,a),this.values=ls(e,0,a*i)):(this.times=t,this.values=e),this}clone(){const t=ls(this.times,0),e=ls(this.values,0),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}ln.prototype.TimeBufferType=Float32Array,ln.prototype.ValueBufferType=Float32Array,ln.prototype.DefaultInterpolation=Vo;class Kr extends ln{}Kr.prototype.ValueTypeName="bool",Kr.prototype.ValueBufferType=Array,Kr.prototype.DefaultInterpolation=ko,Kr.prototype.InterpolantFactoryMethodLinear=void 0,Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Am extends ln{}Am.prototype.ValueTypeName="color";class xl extends ln{}xl.prototype.ValueTypeName="number";class Mw extends gl{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let c=t*o;for(let h=c+o;c!==h;c+=4)_i.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Xa extends ln{InterpolantFactoryMethodLinear(t){return new Mw(this.times,this.values,this.getValueSize(),t)}}Xa.prototype.ValueTypeName="quaternion",Xa.prototype.DefaultInterpolation=Vo,Xa.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends ln{}Zr.prototype.ValueTypeName="string",Zr.prototype.ValueBufferType=Array,Zr.prototype.DefaultInterpolation=ko,Zr.prototype.InterpolantFactoryMethodLinear=void 0,Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class _l extends ln{}_l.prototype.ValueTypeName="vector";class Em{constructor(t,e=-1,i,n=ph){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=ms(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(Sw(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(ln.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=xw(l);l=wm(l,1,h),c=wm(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new xl(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,y){if(f.length!==0){const g=[],p=[];Tm(f,g,p,m),g.length!==0&&y.push(new u(d,g,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(const y in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const x=d[m];g.push(x.time),p.push(x.morphTarget===y?1:0)}n.push(new xl(".morphTargetInfluence["+y+"]",g,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";i(_l,f+".position",d,"pos",n),i(Xa,f+".quaternion",d,"rot",n),i(_l,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bw(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xl;case"vector":case"vector2":case"vector3":case"vector4":return _l;case"color":return Am;case"quaternion":return Xa;case"bool":case"boolean":return Kr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Sw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=bw(r.type);if(r.times===void 0){const e=[],i=[];Tm(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ww=new Float32Array(1);class Tw extends Zn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,o=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const y=e&&e._propertyBindings[u].binding.parsedPath;m=new yw(Yt.create(i,f,y),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new bm(new Float32Array(2),new Float32Array(2),1,ww),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?Em.findByName(n,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=ph),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new ow(this,a,e,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?Em.findByName(i,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Rm=new D,vl=new D;class Cm{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Rm.subVectors(t,this.start),vl.subVectors(this.end,this.start);const i=vl.dot(vl);let s=vl.dot(Rm)/i;return e&&(s=He(s,0,1)),s}closestPointToPoint(t,e,i){const n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Pm=0,Aw=1,Ew=2,Lm=2,iu=1.25,Im=1,Ml=6*4+4+4,bl=65535,Rw=Math.pow(2,-24),nu=Symbol("SKIP_GENERATION");function Cw(r){return r.index?r.index.count:r.attributes.position.count}function Jr(r){return Cw(r)/3}function Pw(r,t=ArrayBuffer){return r>65535?new Uint32Array(new t(4*r)):new Uint16Array(new t(2*r))}function Lw(r,t){if(!r.index){const e=r.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=Pw(e,i);r.setIndex(new qe(n,1));for(let s=0;s<e;s++)n[s]=s}}function Dm(r){const t=Jr(r),e=r.drawRange,i=e.start/3,n=(e.start+e.count)/3,s=Math.max(0,i),a=Math.min(t,n)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function Fm(r){if(!r.groups||!r.groups.length)return Dm(r);const t=[],e=new Set,i=r.drawRange,n=i.start/3,s=(i.start+i.count)/3;for(const o of r.groups){const l=o.start/3,c=(o.start+o.count)/3;e.add(Math.max(n,l)),e.add(Math.min(s,c))}const a=Array.from(e.values()).sort((o,l)=>o-l);for(let o=0;o<a.length-1;o++){const l=a[o],c=a[o+1];t.push({offset:Math.floor(l),count:Math.floor(c-l)})}return t}function Iw(r){if(r.groups.length===0)return!1;const t=Jr(r),e=Fm(r).sort((s,a)=>s.offset-a.offset),i=e[e.length-1];i.count=Math.min(t-i.offset,i.count);let n=0;return e.forEach(({count:s})=>n+=s),t!==n}function ue(r,t,e){return e.min.x=t[r],e.min.y=t[r+1],e.min.z=t[r+2],e.max.x=t[r+3],e.max.y=t[r+4],e.max.z=t[r+5],e}function Dw(r){r[0]=r[1]=r[2]=1/0,r[3]=r[4]=r[5]=-1/0}function Um(r){let t=-1,e=-1/0;for(let i=0;i<3;i++){const n=r[i+3]-r[i];n>e&&(e=n,t=i)}return t}function Nm(r,t){t.set(r)}function Bm(r,t,e){let i,n;for(let s=0;s<3;s++){const a=s+3;i=r[s],n=t[s],e[s]=i<n?i:n,i=r[a],n=t[a],e[a]=i>n?i:n}}function Sl(r,t,e){for(let i=0;i<3;i++){const n=t[r+2*i],s=t[r+2*i+1],a=n-s,o=n+s;a<e[i]&&(e[i]=a),o>e[i+3]&&(e[i+3]=o)}}function $a(r){const t=r[3]-r[0],e=r[4]-r[1],i=r[5]-r[2];return 2*(t*e+e*i+i*t)}function su(r,t,e,i,n=null){let s=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,m=-1/0,y=-1/0,g=-1/0;const p=n!==null;for(let _=t*6,x=(t+e)*6;_<x;_+=6){const M=r[_+0],v=r[_+1],S=M-v,T=M+v;S<s&&(s=S),T>l&&(l=T),p&&M<u&&(u=M),p&&M>m&&(m=M);const R=r[_+2],b=r[_+3],w=R-b,F=R+b;w<a&&(a=w),F>c&&(c=F),p&&R<d&&(d=R),p&&R>y&&(y=R);const L=r[_+4],C=r[_+5],U=L-C,N=L+C;U<o&&(o=U),N>h&&(h=N),p&&L<f&&(f=L),p&&L>g&&(g=L)}i[0]=s,i[1]=a,i[2]=o,i[3]=l,i[4]=c,i[5]=h,p&&(n[0]=u,n[1]=d,n[2]=f,n[3]=m,n[4]=y,n[5]=g)}function Fw(r,t,e,i){let n=1/0,s=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=t*6,u=(t+e)*6;h<u;h+=6){const d=r[h+0];d<n&&(n=d),d>o&&(o=d);const f=r[h+2];f<s&&(s=f),f>l&&(l=f);const m=r[h+4];m<a&&(a=m),m>c&&(c=m)}i[0]=n,i[1]=s,i[2]=a,i[3]=o,i[4]=l,i[5]=c}function Uw(r,t){Dw(t);const e=r.attributes.position,i=r.index?r.index.array:null,n=Jr(r),s=new Float32Array(n*6),a=e.normalized,o=e.array,l=e.offset||0;let c=3;e.isInterleavedBufferAttribute&&(c=e.data.stride);const h=["getX","getY","getZ"];for(let u=0;u<n;u++){const d=u*3,f=u*6;let m=d+0,y=d+1,g=d+2;i&&(m=i[m],y=i[y],g=i[g]),a||(m=m*c+l,y=y*c+l,g=g*c+l);for(let p=0;p<3;p++){let _,x,M;a?(_=e[h[p]](m),x=e[h[p]](y),M=e[h[p]](g)):(_=o[m+p],x=o[y+p],M=o[g+p]);let v=_;x<v&&(v=x),M<v&&(v=M);let S=_;x>S&&(S=x),M>S&&(S=M);const T=(S-v)/2,R=p*2;s[f+R+0]=v+T,s[f+R+1]=T+(Math.abs(v)+T)*Rw,v<t[p]&&(t[p]=v),S>t[p+3]&&(t[p+3]=S)}}return s}const Un=32,Nw=(r,t)=>r.candidate-t.candidate,cs=new Array(Un).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),wl=new Float32Array(6);function Bw(r,t,e,i,n,s){let a=-1,o=0;if(s===Pm)a=Um(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(s===Aw)a=Um(r),a!==-1&&(o=zw(e,i,n,a));else if(s===Ew){const l=$a(r);let c=iu*n;const h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){const f=t[d],g=(t[d+3]-f)/Un;if(n<Un/4){const p=[...cs];p.length=n;let _=0;for(let M=h;M<u;M+=6,_++){const v=p[_];v.candidate=e[M+2*d],v.count=0;const{bounds:S,leftCacheBounds:T,rightCacheBounds:R}=v;for(let b=0;b<3;b++)R[b]=1/0,R[b+3]=-1/0,T[b]=1/0,T[b+3]=-1/0,S[b]=1/0,S[b+3]=-1/0;Sl(M,e,S)}p.sort(Nw);let x=n;for(let M=0;M<x;M++){const v=p[M];for(;M+1<x&&p[M+1].candidate===v.candidate;)p.splice(M+1,1),x--}for(let M=h;M<u;M+=6){const v=e[M+2*d];for(let S=0;S<x;S++){const T=p[S];v>=T.candidate?Sl(M,e,T.rightCacheBounds):(Sl(M,e,T.leftCacheBounds),T.count++)}}for(let M=0;M<x;M++){const v=p[M],S=v.count,T=n-v.count,R=v.leftCacheBounds,b=v.rightCacheBounds;let w=0;S!==0&&(w=$a(R)/l);let F=0;T!==0&&(F=$a(b)/l);const L=Im+iu*(w*S+F*T);L<c&&(a=d,c=L,o=v.candidate)}}else{for(let x=0;x<Un;x++){const M=cs[x];M.count=0,M.candidate=f+g+x*g;const v=M.bounds;for(let S=0;S<3;S++)v[S]=1/0,v[S+3]=-1/0}for(let x=h;x<u;x+=6){let S=~~((e[x+2*d]-f)/g);S>=Un&&(S=Un-1);const T=cs[S];T.count++,Sl(x,e,T.bounds)}const p=cs[Un-1];Nm(p.bounds,p.rightCacheBounds);for(let x=Un-2;x>=0;x--){const M=cs[x],v=cs[x+1];Bm(M.bounds,v.rightCacheBounds,M.rightCacheBounds)}let _=0;for(let x=0;x<Un-1;x++){const M=cs[x],v=M.count,S=M.bounds,R=cs[x+1].rightCacheBounds;v!==0&&(_===0?Nm(S,wl):Bm(S,wl,wl)),_+=v;let b=0,w=0;_!==0&&(b=$a(wl)/l);const F=n-_;F!==0&&(w=$a(R)/l);const L=Im+iu*(b*_+w*F);L<c&&(a=d,c=L,o=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function zw(r,t,e,i){let n=0;for(let s=t,a=t+e;s<a;s++)n+=r[s*6+i*2];return n/e}class Tl{constructor(){}}function Ow(r,t,e,i,n,s){let a=i,o=i+n-1;const l=s.pos,c=s.axis*2;for(;;){for(;a<=o&&e[a*6+c]<l;)a++;for(;a<=o&&e[o*6+c]>=l;)o--;if(a<o){for(let h=0;h<3;h++){let u=t[a*3+h];t[a*3+h]=t[o*3+h],t[o*3+h]=u}for(let h=0;h<6;h++){let u=e[a*6+h];e[a*6+h]=e[o*6+h],e[o*6+h]=u}a++,o--}else return a}}function kw(r,t,e,i,n,s){let a=i,o=i+n-1;const l=s.pos,c=s.axis*2;for(;;){for(;a<=o&&e[a*6+c]<l;)a++;for(;a<=o&&e[o*6+c]>=l;)o--;if(a<o){let h=r[a];r[a]=r[o],r[o]=h;for(let u=0;u<6;u++){let d=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=d}a++,o--}else return a}}function Vw(r,t){const e=(r.index?r.index.count:r.attributes.position.count)/3,i=e>2**16,n=i?4:2,s=t?new SharedArrayBuffer(e*n):new ArrayBuffer(e*n),a=i?new Uint32Array(s):new Uint16Array(s);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function Hw(r,t){const e=r.geometry,i=e.index?e.index.array:null,n=t.maxDepth,s=t.verbose,a=t.maxLeafTris,o=t.strategy,l=t.onProgress,c=Jr(e),h=r._indirectBuffer;let u=!1;const d=new Float32Array(6),f=new Float32Array(6),m=Uw(e,d),y=t.indirect?kw:Ow,g=[],p=t.indirect?Dm(e):Fm(e);if(p.length===1){const M=p[0],v=new Tl;v.boundingData=d,Fw(m,M.offset,M.count,f),x(v,M.offset,M.count,f),g.push(v)}else for(let M of p){const v=new Tl;v.boundingData=new Float32Array(6),su(m,M.offset,M.count,v.boundingData,f),x(v,M.offset,M.count,f),g.push(v)}return g;function _(M){l&&l(M/c)}function x(M,v,S,T=null,R=0){if(!u&&R>=n&&(u=!0,s&&(console.warn(`MeshBVH: Max depth of ${n} reached when generating BVH. Consider increasing maxDepth.`),console.warn(e))),S<=a||R>=n)return _(v+S),M.offset=v,M.count=S,M;const b=Bw(M.boundingData,T,m,v,S,o);if(b.axis===-1)return _(v+S),M.offset=v,M.count=S,M;const w=y(h,i,m,v,S,b);if(w===v||w===v+S)_(v+S),M.offset=v,M.count=S;else{M.splitAxis=b.axis;const F=new Tl,L=v,C=w-v;M.left=F,F.boundingData=new Float32Array(6),su(m,L,C,F.boundingData,f),x(F,L,C,f,R+1);const U=new Tl,N=w,G=S-C;M.right=U,U.boundingData=new Float32Array(6),su(m,N,G,U.boundingData,f),x(U,N,G,f,R+1)}return M}}function Gw(r,t){const e=r.geometry;t.indirect&&(r._indirectBuffer=Vw(e,t.useSharedArrayBuffer),Iw(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||Lw(e,t);const i=Hw(r,t);let n,s,a;const o=[],l=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<i.length;u++){const d=i[u];let f=c(d);const m=new l(Ml*f);n=new Float32Array(m),s=new Uint32Array(m),a=new Uint16Array(m),h(0,d),o.push(m)}r._roots=o;return;function c(u){return u.count?1:1+c(u.left)+c(u.right)}function h(u,d){const f=u/4,m=u/2,y=!!d.count,g=d.boundingData;for(let p=0;p<6;p++)n[f+p]=g[p];if(y){const p=d.offset,_=d.count;return s[f+6]=p,a[m+14]=_,a[m+15]=bl,u+Ml}else{const p=d.left,_=d.right,x=d.splitAxis;let M;if(M=h(u+Ml,p),M/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[f+6]=M/4,M=h(M,_),s[f+7]=x,M}}}class Nn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,n=-1/0;for(let s=0,a=t.length;s<a;s++){const l=t[s][e];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(t,e){let i=1/0,n=-1/0;for(let s=0,a=e.length;s<a;s++){const o=e[s],l=t.dot(o);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(t){return this.min>t.max||t.min>this.max}}Nn.prototype.setFromBox=function(){const r=new I;return function(e,i){const n=i.min,s=i.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=n.x*l+s.x*(1-l),r.y=n.y*c+s.y*(1-c),r.z=n.z*h+s.z*(1-h);const u=e.dot(r);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}}();const Ww=function(){const r=new I,t=new I,e=new I;return function(n,s,a){const o=n.start,l=r,c=s.start,h=t;e.subVectors(o,c),r.subVectors(n.end,n.start),t.subVectors(s.end,s.start);const u=e.dot(h),d=h.dot(l),f=h.dot(h),m=e.dot(l),g=l.dot(l)*f-d*d;let p,_;g!==0?p=(u*d-m*f)/g:p=0,_=(u+p*d)/f,a.x=p,a.y=_}}(),ru=function(){const r=new ae,t=new I,e=new I;return function(n,s,a,o){Ww(n,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,a),s.at(c,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),n.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?n.at(0,a):n.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=s.start:u=s.end;const d=t,f=e;if(n.closestPointToPoint(u,!0,t),s.closestPointToPoint(h,!0,e),d.distanceToSquared(u)<=f.distanceToSquared(h)){a.copy(d),o.copy(u);return}else{a.copy(h),o.copy(f);return}}}}(),Xw=function(){const r=new I,t=new I,e=new qn,i=new Mn;return function(s,a){const{radius:o,center:l}=s,{a:c,b:h,c:u}=a;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,r).distanceTo(l)<=o||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=o)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=o))return!0;const y=a.getPlane(e);if(Math.abs(y.distanceToPoint(l))<=o){const p=y.projectPoint(l,t);if(a.containsPoint(p))return!0}return!1}}(),$w=1e-15;function au(r){return Math.abs(r)<$w}class Xi extends Zi{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Nn),this.points=[this.a,this.b,this.c],this.sphere=new Ki,this.plane=new qn,this.needsUpdate=!0}intersectsSphere(t){return Xw(t,this)}update(){const t=this.a,e=this.b,i=this.c,n=this.points,s=this.satAxes,a=this.satBounds,o=s[0],l=a[0];this.getNormal(o),l.setFromPoints(o,n);const c=s[1],h=a[1];c.subVectors(t,e),h.setFromPoints(c,n);const u=s[2],d=a[2];u.subVectors(e,i),d.setFromPoints(u,n);const f=s[3],m=a[3];f.subVectors(i,t),m.setFromPoints(f,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}Xi.prototype.closestPointToSegment=function(){const r=new I,t=new I,e=new Mn;return function(n,s=null,a=null){const{start:o,end:l}=n,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;e.start.copy(c[d]),e.end.copy(c[f]),ru(e,n,r,t),h=r.distanceToSquared(t),h<u&&(u=h,s&&s.copy(r),a&&a.copy(t))}return this.closestPointToPoint(o,r),h=o.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),a&&a.copy(o)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),a&&a.copy(l)),Math.sqrt(u)}}(),Xi.prototype.intersectsTriangle=function(){const r=new Xi,t=new Array(3),e=new Array(3),i=new Nn,n=new Nn,s=new I,a=new I,o=new I,l=new I,c=new I,h=new Mn,u=new Mn,d=new Mn,f=new I;function m(y,g,p){const _=y.points;let x=0,M=-1;for(let v=0;v<3;v++){const{start:S,end:T}=h;S.copy(_[v]),T.copy(_[(v+1)%3]),h.delta(a);const R=au(g.distanceToPoint(S));if(au(g.normal.dot(a))&&R){p.copy(h),x=2;break}const b=g.intersectLine(h,f);if(!b&&R&&f.copy(S),(b||R)&&!au(f.distanceTo(T))){if(x<=1)(x===1?p.start:p.end).copy(f),R&&(M=x);else if(x>=2){(M===1?p.start:p.end).copy(f),x=2;break}if(x++,x===2&&M===-1)break}}return x}return function(g,p=null,_=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(r.copy(g),r.update(),g=r);const x=this.plane,M=g.plane;if(Math.abs(x.normal.dot(M.normal))>1-1e-10){const v=this.satBounds,S=this.satAxes;e[0]=g.a,e[1]=g.b,e[2]=g.c;for(let b=0;b<4;b++){const w=v[b],F=S[b];if(i.setFromPoints(F,e),w.isSeparated(i))return!1}const T=g.satBounds,R=g.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let b=0;b<4;b++){const w=T[b],F=R[b];if(i.setFromPoints(F,t),w.isSeparated(i))return!1}for(let b=0;b<4;b++){const w=S[b];for(let F=0;F<4;F++){const L=R[F];if(s.crossVectors(w,L),i.setFromPoints(s,t),n.setFromPoints(s,e),i.isSeparated(n))return!1}}return p&&(_||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const v=m(this,M,u);if(v===1&&g.containsPoint(u.end))return p&&(p.start.copy(u.end),p.end.copy(u.end)),!0;if(v!==2)return!1;const S=m(g,x,d);if(S===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(S!==2)return!1;if(u.delta(o),d.delta(l),o.dot(l)<0){let C=d.start;d.start=d.end,d.end=C}const T=u.start.dot(o),R=u.end.dot(o),b=d.start.dot(o),w=d.end.dot(o),F=R<b,L=T<w;return T!==w&&b!==R&&F===L?!1:(p&&(c.subVectors(u.start,d.start),c.dot(o)>0?p.start.copy(u.start):p.start.copy(d.start),c.subVectors(u.end,d.end),c.dot(o)<0?p.end.copy(u.end):p.end.copy(d.end)),!0)}}}(),Xi.prototype.distanceToPoint=function(){const r=new I;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}}(),Xi.prototype.distanceToTriangle=function(){const r=new I,t=new I,e=["a","b","c"],i=new Mn,n=new Mn;return function(a,o=null,l=null){const c=o||l?i:null;if(this.intersectsTriangle(a,c))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=e[u],m=a[f];this.closestPointToPoint(m,r),d=m.distanceToSquared(r),d<h&&(h=d,o&&o.copy(r),l&&l.copy(m));const y=this[f];a.closestPointToPoint(y,r),d=y.distanceToSquared(r),d<h&&(h=d,o&&o.copy(y),l&&l.copy(r))}for(let u=0;u<3;u++){const d=e[u],f=e[(u+1)%3];i.set(this[d],this[f]);for(let m=0;m<3;m++){const y=e[m],g=e[(m+1)%3];n.set(a[y],a[g]),ru(i,n,r,t);const p=r.distanceToSquared(t);p<h&&(h=p,o&&o.copy(r),l&&l.copy(t))}}return Math.sqrt(h)}}();class Je{constructor(t,e,i){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new wt,this.invMatrix=new wt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Nn),this.alignedSatBounds=new Array(3).fill().map(()=>new Nn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Je.prototype.update=function(){return function(){const t=this.matrix,e=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=n[d];f.x=c?i.x:e.x,f.y=h?i.y:e.y,f.z=u?i.z:e.z,f.applyMatrix4(t)}const s=this.satBounds,a=this.satAxes,o=n[0];for(let c=0;c<3;c++){const h=a[c],u=s[c],d=1<<c,f=n[d];h.subVectors(o,f),u.setFromPoints(h,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}(),Je.prototype.intersectsBox=function(){const r=new Nn;return function(e){this.needsUpdate&&this.update();const i=e.min,n=e.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(r.min=i.x,r.max=n.x,o[0].isSeparated(r)||(r.min=i.y,r.max=n.y,o[1].isSeparated(r))||(r.min=i.z,r.max=n.z,o[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=a[l],h=s[l];if(r.setFromBox(c,e),h.isSeparated(r))return!1}return!0}}(),Je.prototype.intersectsTriangle=function(){const r=new Xi,t=new Array(3),e=new Nn,i=new Nn,n=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(r.copy(a),r.update(),a=r);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let d=0;d<3;d++){const f=o[d],m=l[d];if(e.setFromPoints(m,t),f.isSeparated(e))return!1}const c=a.satBounds,h=a.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],m=h[d];if(e.setFromPoints(m,u),f.isSeparated(e))return!1}for(let d=0;d<3;d++){const f=l[d];for(let m=0;m<4;m++){const y=h[m];if(n.crossVectors(f,y),e.setFromPoints(n,t),i.setFromPoints(n,u),e.isSeparated(i))return!1}}return!0}}(),Je.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}(),Je.prototype.distanceToPoint=function(){const r=new I;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}}(),Je.prototype.distanceToBox=function(){const r=["x","y","z"],t=new Array(12).fill().map(()=>new Mn),e=new Array(12).fill().map(()=>new Mn),i=new I,n=new I;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(n),this.closestPointToPoint(n,i),a.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const h=o*o,u=a.min,d=a.max,f=this.points;let m=1/0;for(let g=0;g<8;g++){const p=f[g];n.copy(p).clamp(u,d);const _=p.distanceToSquared(n);if(_<m&&(m=_,l&&l.copy(p),c&&c.copy(n),_<h))return Math.sqrt(_)}let y=0;for(let g=0;g<3;g++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){const x=(g+1)%3,M=(g+2)%3,v=p<<x|_<<M,S=1<<g|p<<x|_<<M,T=f[v],R=f[S];t[y].set(T,R);const w=r[g],F=r[x],L=r[M],C=e[y],U=C.start,N=C.end;U[w]=u[w],U[F]=p?u[F]:d[F],U[L]=_?u[L]:d[F],N[w]=d[w],N[F]=p?u[F]:d[F],N[L]=_?u[L]:d[F],y++}for(let g=0;g<=1;g++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){n.x=g?d.x:u.x,n.y=p?d.y:u.y,n.z=_?d.z:u.z,this.closestPointToPoint(n,i);const x=n.distanceToSquared(i);if(x<m&&(m=x,l&&l.copy(i),c&&c.copy(n),x<h))return Math.sqrt(x)}for(let g=0;g<12;g++){const p=t[g];for(let _=0;_<12;_++){const x=e[_];ru(p,x,i,n);const M=i.distanceToSquared(n);if(M<m&&(m=M,l&&l.copy(i),c&&c.copy(n),M<h))return Math.sqrt(M)}}return Math.sqrt(m)}}();class ou{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class jw extends ou{constructor(){super(()=>new Xi)}}const Ei=new jw;function gi(r,t){return t[r+15]===65535}function yi(r,t){return t[r+6]}function Ri(r,t){return t[r+14]}function Ci(r){return r+8}function Pi(r,t){return t[r+6]}function zm(r,t){return t[r+7]}function GE(r){return r}class qw{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const oe=new qw;let hs,Qr;const ta=[],Al=new ou(()=>new ge);function Yw(r,t,e,i,n,s){hs=Al.getPrimitive(),Qr=Al.getPrimitive(),ta.push(hs,Qr),oe.setBuffer(r._roots[t]);const a=lu(0,r.geometry,e,i,n,s);oe.clearBuffer(),Al.releasePrimitive(hs),Al.releasePrimitive(Qr),ta.pop(),ta.pop();const o=ta.length;return o>0&&(Qr=ta[o-1],hs=ta[o-2]),a}function lu(r,t,e,i,n=null,s=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:c}=oe;let h=r*2;if(gi(h,l)){const d=yi(r,c),f=Ri(h,l);return ue(r,o,hs),i(d,f,!1,a,s+r,hs)}else{let w=function(L){const{uint16Array:C,uint32Array:U}=oe;let N=L*2;for(;!gi(N,C);)L=Ci(L),N=L*2;return yi(L,U)},F=function(L){const{uint16Array:C,uint32Array:U}=oe;let N=L*2;for(;!gi(N,C);)L=Pi(L,U),N=L*2;return yi(L,U)+Ri(N,C)};const d=Ci(r),f=Pi(r,c);let m=d,y=f,g,p,_,x;if(n&&(_=hs,x=Qr,ue(m,o,_),ue(y,o,x),g=n(_),p=n(x),p<g)){m=f,y=d;const L=g;g=p,p=L,_=x}_||(_=hs,ue(m,o,_));const M=gi(m*2,l),v=e(_,M,g,a+1,s+m);let S;if(v===Lm){const L=w(m),U=F(m)-L;S=i(L,U,!0,a+1,s+m,_)}else S=v&&lu(m,t,e,i,n,s,a+1);if(S)return!0;x=Qr,ue(y,o,x);const T=gi(y*2,l),R=e(x,T,p,a+1,s+y);let b;if(R===Lm){const L=w(y),U=F(y)-L;b=i(L,U,!0,a+1,s+y,x)}else b=R&&lu(y,t,e,i,n,s,a+1);return!!b}}const ja=new I,cu=new I;function Kw(r,t,e={},i=0,n=1/0){const s=i*i,a=n*n;let o=1/0,l=null;if(r.shapecast({boundsTraverseOrder:h=>(ja.copy(t).clamp(h.min,h.max),ja.distanceToSquared(t)),intersectsBounds:(h,u,d)=>d<o&&d<a,intersectsTriangle:(h,u)=>{h.closestPointToPoint(t,ja);const d=t.distanceToSquared(ja);return d<o&&(cu.copy(ja),o=d,l=u),d<s}}),o===1/0)return null;const c=Math.sqrt(o);return e.point?e.point.copy(cu):e.point=cu.clone(),e.distance=c,e.faceIndex=l,e}const ea=new I,ia=new I,na=new I,El=new ae,Rl=new ae,Cl=new ae,Om=new I,km=new I,Vm=new I,Pl=new I;function Zw(r,t,e,i,n,s){let a;return s===ld?a=r.intersectTriangle(i,e,t,!0,n):a=r.intersectTriangle(t,e,i,s!==cd,n),a===null?null:{distance:r.origin.distanceTo(n),point:n.clone()}}function Jw(r,t,e,i,n,s,a,o,l){ea.fromBufferAttribute(t,s),ia.fromBufferAttribute(t,a),na.fromBufferAttribute(t,o);const c=Zw(r,ea,ia,na,Pl,l);if(c){i&&(El.fromBufferAttribute(i,s),Rl.fromBufferAttribute(i,a),Cl.fromBufferAttribute(i,o),c.uv=Zi.getInterpolation(Pl,ea,ia,na,El,Rl,Cl,new ae)),n&&(El.fromBufferAttribute(n,s),Rl.fromBufferAttribute(n,a),Cl.fromBufferAttribute(n,o),c.uv1=Zi.getInterpolation(Pl,ea,ia,na,El,Rl,Cl,new ae)),e&&(Om.fromBufferAttribute(e,s),km.fromBufferAttribute(e,a),Vm.fromBufferAttribute(e,o),c.normal=Zi.getInterpolation(Pl,ea,ia,na,Om,km,Vm,new I),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const h={a:s,b:a,c:o,normal:new I,materialIndex:0};Zi.getNormal(ea,ia,na,h.normal),c.face=h,c.faceIndex=s}return c}function Ll(r,t,e,i,n){const s=i*3;let a=s+0,o=s+1,l=s+2;const c=r.index;r.index&&(a=c.getX(a),o=c.getX(o),l=c.getX(l));const{position:h,normal:u,uv:d,uv1:f}=r.attributes,m=Jw(e,h,u,d,f,a,o,l,t);return m?(m.faceIndex=i,n&&n.push(m),m):null}function Me(r,t,e,i){const n=r.a,s=r.b,a=r.c;let o=t,l=t+1,c=t+2;e&&(o=e.getX(o),l=e.getX(l),c=e.getX(c)),n.x=i.getX(o),n.y=i.getY(o),n.z=i.getZ(o),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),a.x=i.getX(c),a.y=i.getY(c),a.z=i.getZ(c)}function Qw(r,t,e,i,n,s){const{geometry:a,_indirectBuffer:o}=r;for(let l=i,c=i+n;l<c;l++)Ll(a,t,e,l,s)}function t1(r,t,e,i,n){const{geometry:s,_indirectBuffer:a}=r;let o=1/0,l=null;for(let c=i,h=i+n;c<h;c++){let u;u=Ll(s,t,e,c),u&&u.distance<o&&(l=u,o=u.distance)}return l}function e1(r,t,e,i,n,s,a){const{geometry:o}=e,{index:l}=o,c=o.attributes.position;for(let h=r,u=t+r;h<u;h++){let d;if(d=h,Me(a,d*3,l,c),a.needsUpdate=!0,i(a,d,n,s))return!0}return!1}function i1(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=r.geometry,i=e.index?e.index.array:null,n=e.attributes.position;let s,a,o,l,c=0;const h=r._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,m=!1){const y=d*2;if(o[y+15]===bl){const p=a[d+6],_=o[y+14];let x=1/0,M=1/0,v=1/0,S=-1/0,T=-1/0,R=-1/0;for(let b=3*p,w=3*(p+_);b<w;b++){let F=i[b];const L=n.getX(F),C=n.getY(F),U=n.getZ(F);L<x&&(x=L),L>S&&(S=L),C<M&&(M=C),C>T&&(T=C),U<v&&(v=U),U>R&&(R=U)}return l[d+0]!==x||l[d+1]!==M||l[d+2]!==v||l[d+3]!==S||l[d+4]!==T||l[d+5]!==R?(l[d+0]=x,l[d+1]=M,l[d+2]=v,l[d+3]=S,l[d+4]=T,l[d+5]=R,!0):!1}else{const p=d+8,_=a[d+6],x=p+f,M=_+f;let v=m,S=!1,T=!1;t?v||(S=t.has(x),T=t.has(M),v=!S&&!T):(S=!0,T=!0);const R=v||S,b=v||T;let w=!1;R&&(w=u(p,f,v));let F=!1;b&&(F=u(_,f,v));const L=w||F;if(L)for(let C=0;C<3;C++){const U=p+C,N=_+C,G=l[U],W=l[U+3],H=l[N],X=l[N+3];l[d+C]=G<H?G:H,l[d+C+3]=W>X?W:X}return L}}}const Hm=new ge;function us(r,t,e,i){return ue(r,t,Hm),e.intersectBox(Hm,i)}function n1(r,t,e,i,n,s){const{geometry:a,_indirectBuffer:o}=r;for(let l=i,c=i+n;l<c;l++){let h=o?o[l]:l;Ll(a,t,e,h,s)}}function s1(r,t,e,i,n){const{geometry:s,_indirectBuffer:a}=r;let o=1/0,l=null;for(let c=i,h=i+n;c<h;c++){let u;u=Ll(s,t,e,a?a[c]:c),u&&u.distance<o&&(l=u,o=u.distance)}return l}function r1(r,t,e,i,n,s,a){const{geometry:o}=e,{index:l}=o,c=o.attributes.position;for(let h=r,u=t+r;h<u;h++){let d;if(d=e.resolveTriangleIndex(h),Me(a,d*3,l,c),a.needsUpdate=!0,i(a,d,n,s))return!0}return!1}const Gm=new I;function a1(r,t,e,i,n){oe.setBuffer(r._roots[t]),hu(0,r,e,i,n),oe.clearBuffer()}function hu(r,t,e,i,n){const{float32Array:s,uint16Array:a,uint32Array:o}=oe,l=r*2;if(gi(l,a)){const h=yi(r,o),u=Ri(l,a);Qw(t,e,i,h,u,n)}else{const h=Ci(r);us(h,s,i,Gm)&&hu(h,t,e,i,n);const u=Pi(r,o);us(u,s,i,Gm)&&hu(u,t,e,i,n)}}const Wm=new I,o1=["x","y","z"];function l1(r,t,e,i){oe.setBuffer(r._roots[t]);const n=uu(0,r,e,i);return oe.clearBuffer(),n}function uu(r,t,e,i){const{float32Array:n,uint16Array:s,uint32Array:a}=oe;let o=r*2;if(gi(o,s)){const c=yi(r,a),h=Ri(o,s);return t1(t,e,i,c,h)}else{const c=zm(r,a),h=o1[c],d=i.direction[h]>=0;let f,m;d?(f=Ci(r),m=Pi(r,a)):(f=Pi(r,a),m=Ci(r));const g=us(f,n,i,Wm)?uu(f,t,e,i):null;if(g){const x=g.point[h];if(d?x<=n[m+c]:x>=n[m+c+3])return g}const _=us(m,n,i,Wm)?uu(m,t,e,i):null;return g&&_?g.distance<=_.distance?g:_:g||_||null}}const Il=new ge,sa=new Xi,ra=new Xi,qa=new wt,Xm=new Je,Dl=new Je;function c1(r,t,e,i){oe.setBuffer(r._roots[t]);const n=du(0,r,e,i);return oe.clearBuffer(),n}function du(r,t,e,i,n=null){const{float32Array:s,uint16Array:a,uint32Array:o}=oe;let l=r*2;if(n===null&&(e.boundingBox||e.computeBoundingBox(),Xm.set(e.boundingBox.min,e.boundingBox.max,i),n=Xm),gi(l,a)){const h=t.geometry,u=h.index,d=h.attributes.position,f=e.index,m=e.attributes.position,y=yi(r,o),g=Ri(l,a);if(qa.copy(i).invert(),e.boundsTree)return ue(r,s,Dl),Dl.matrix.copy(qa),Dl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Dl.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let x=y*3,M=(g+y)*3;x<M;x+=3)if(Me(ra,x,u,d),ra.needsUpdate=!0,_.intersectsTriangle(ra))return!0;return!1}});for(let p=y*3,_=(g+y)*3;p<_;p+=3){Me(sa,p,u,d),sa.a.applyMatrix4(qa),sa.b.applyMatrix4(qa),sa.c.applyMatrix4(qa),sa.needsUpdate=!0;for(let x=0,M=f.count;x<M;x+=3)if(Me(ra,x,f,m),ra.needsUpdate=!0,sa.intersectsTriangle(ra))return!0}}else{const h=r+8,u=o[r+6];return ue(h,s,Il),!!(n.intersectsBox(Il)&&du(h,t,e,i,n)||(ue(u,s,Il),n.intersectsBox(Il)&&du(u,t,e,i,n)))}}const Fl=new wt,fu=new Je,Ya=new Je,h1=new I,u1=new I,d1=new I,f1=new I;function p1(r,t,e,i={},n={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),fu.set(t.boundingBox.min,t.boundingBox.max,e),fu.needsUpdate=!0;const o=r.geometry,l=o.attributes.position,c=o.index,h=t.attributes.position,u=t.index,d=Ei.getPrimitive(),f=Ei.getPrimitive();let m=h1,y=u1,g=null,p=null;n&&(g=d1,p=f1);let _=1/0,x=null,M=null;return Fl.copy(e).invert(),Ya.matrix.copy(Fl),r.shapecast({boundsTraverseOrder:v=>fu.distanceToBox(v),intersectsBounds:(v,S,T)=>T<_&&T<a?(S&&(Ya.min.copy(v.min),Ya.max.copy(v.max),Ya.needsUpdate=!0),!0):!1,intersectsRange:(v,S)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:R=>Ya.distanceToBox(R),intersectsBounds:(R,b,w)=>w<_&&w<a,intersectsRange:(R,b)=>{for(let w=R,F=R+b;w<F;w++){Me(f,3*w,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let L=v,C=v+S;L<C;L++){Me(d,3*L,c,l),d.needsUpdate=!0;const U=d.distanceToTriangle(f,m,g);if(U<_&&(y.copy(m),p&&p.copy(g),_=U,x=L,M=w),U<s)return!0}}}});{const T=Jr(t);for(let R=0,b=T;R<b;R++){Me(f,3*R,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let w=v,F=v+S;w<F;w++){Me(d,3*w,c,l),d.needsUpdate=!0;const L=d.distanceToTriangle(f,m,g);if(L<_&&(y.copy(m),p&&p.copy(g),_=L,x=w,M=R),L<s)return!0}}}}}),Ei.releasePrimitive(d),Ei.releasePrimitive(f),_===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=_,i.faceIndex=x,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(Fl),y.applyMatrix4(Fl),n.distance=y.sub(n.point).length(),n.faceIndex=M),i)}function m1(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=r.geometry,i=e.index?e.index.array:null,n=e.attributes.position;let s,a,o,l,c=0;const h=r._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,m=!1){const y=d*2;if(o[y+15]===bl){const p=a[d+6],_=o[y+14];let x=1/0,M=1/0,v=1/0,S=-1/0,T=-1/0,R=-1/0;for(let b=p,w=p+_;b<w;b++){const F=3*r.resolveTriangleIndex(b);for(let L=0;L<3;L++){let C=F+L;C=i?i[C]:C;const U=n.getX(C),N=n.getY(C),G=n.getZ(C);U<x&&(x=U),U>S&&(S=U),N<M&&(M=N),N>T&&(T=N),G<v&&(v=G),G>R&&(R=G)}}return l[d+0]!==x||l[d+1]!==M||l[d+2]!==v||l[d+3]!==S||l[d+4]!==T||l[d+5]!==R?(l[d+0]=x,l[d+1]=M,l[d+2]=v,l[d+3]=S,l[d+4]=T,l[d+5]=R,!0):!1}else{const p=d+8,_=a[d+6],x=p+f,M=_+f;let v=m,S=!1,T=!1;t?v||(S=t.has(x),T=t.has(M),v=!S&&!T):(S=!0,T=!0);const R=v||S,b=v||T;let w=!1;R&&(w=u(p,f,v));let F=!1;b&&(F=u(_,f,v));const L=w||F;if(L)for(let C=0;C<3;C++){const U=p+C,N=_+C,G=l[U],W=l[U+3],H=l[N],X=l[N+3];l[d+C]=G<H?G:H,l[d+C+3]=W>X?W:X}return L}}}const $m=new I;function g1(r,t,e,i,n){oe.setBuffer(r._roots[t]),pu(0,r,e,i,n),oe.clearBuffer()}function pu(r,t,e,i,n){const{float32Array:s,uint16Array:a,uint32Array:o}=oe,l=r*2;if(gi(l,a)){const h=yi(r,o),u=Ri(l,a);n1(t,e,i,h,u,n)}else{const h=Ci(r);us(h,s,i,$m)&&pu(h,t,e,i,n);const u=Pi(r,o);us(u,s,i,$m)&&pu(u,t,e,i,n)}}const jm=new I,y1=["x","y","z"];function x1(r,t,e,i){oe.setBuffer(r._roots[t]);const n=mu(0,r,e,i);return oe.clearBuffer(),n}function mu(r,t,e,i){const{float32Array:n,uint16Array:s,uint32Array:a}=oe;let o=r*2;if(gi(o,s)){const c=yi(r,a),h=Ri(o,s);return s1(t,e,i,c,h)}else{const c=zm(r,a),h=y1[c],d=i.direction[h]>=0;let f,m;d?(f=Ci(r),m=Pi(r,a)):(f=Pi(r,a),m=Ci(r));const g=us(f,n,i,jm)?mu(f,t,e,i):null;if(g){const x=g.point[h];if(d?x<=n[m+c]:x>=n[m+c+3])return g}const _=us(m,n,i,jm)?mu(m,t,e,i):null;return g&&_?g.distance<=_.distance?g:_:g||_||null}}const Ul=new ge,aa=new Xi,oa=new Xi,Ka=new wt,qm=new Je,Nl=new Je;function _1(r,t,e,i){oe.setBuffer(r._roots[t]);const n=gu(0,r,e,i);return oe.clearBuffer(),n}function gu(r,t,e,i,n=null){const{float32Array:s,uint16Array:a,uint32Array:o}=oe;let l=r*2;if(n===null&&(e.boundingBox||e.computeBoundingBox(),qm.set(e.boundingBox.min,e.boundingBox.max,i),n=qm),gi(l,a)){const h=t.geometry,u=h.index,d=h.attributes.position,f=e.index,m=e.attributes.position,y=yi(r,o),g=Ri(l,a);if(Ka.copy(i).invert(),e.boundsTree)return ue(r,s,Nl),Nl.matrix.copy(Ka),Nl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Nl.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let x=y,M=g+y;x<M;x++)if(Me(oa,3*t.resolveTriangleIndex(x),u,d),oa.needsUpdate=!0,_.intersectsTriangle(oa))return!0;return!1}});for(let p=y,_=g+y;p<_;p++){const x=t.resolveTriangleIndex(p);Me(aa,3*x,u,d),aa.a.applyMatrix4(Ka),aa.b.applyMatrix4(Ka),aa.c.applyMatrix4(Ka),aa.needsUpdate=!0;for(let M=0,v=f.count;M<v;M+=3)if(Me(oa,M,f,m),oa.needsUpdate=!0,aa.intersectsTriangle(oa))return!0}}else{const h=r+8,u=o[r+6];return ue(h,s,Ul),!!(n.intersectsBox(Ul)&&gu(h,t,e,i,n)||(ue(u,s,Ul),n.intersectsBox(Ul)&&gu(u,t,e,i,n)))}}const Bl=new wt,yu=new Je,Za=new Je,v1=new I,M1=new I,b1=new I,S1=new I;function w1(r,t,e,i={},n={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),yu.set(t.boundingBox.min,t.boundingBox.max,e),yu.needsUpdate=!0;const o=r.geometry,l=o.attributes.position,c=o.index,h=t.attributes.position,u=t.index,d=Ei.getPrimitive(),f=Ei.getPrimitive();let m=v1,y=M1,g=null,p=null;n&&(g=b1,p=S1);let _=1/0,x=null,M=null;return Bl.copy(e).invert(),Za.matrix.copy(Bl),r.shapecast({boundsTraverseOrder:v=>yu.distanceToBox(v),intersectsBounds:(v,S,T)=>T<_&&T<a?(S&&(Za.min.copy(v.min),Za.max.copy(v.max),Za.needsUpdate=!0),!0):!1,intersectsRange:(v,S)=>{if(t.boundsTree){const T=t.boundsTree;return T.shapecast({boundsTraverseOrder:R=>Za.distanceToBox(R),intersectsBounds:(R,b,w)=>w<_&&w<a,intersectsRange:(R,b)=>{for(let w=R,F=R+b;w<F;w++){const L=T.resolveTriangleIndex(w);Me(f,3*L,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let C=v,U=v+S;C<U;C++){const N=r.resolveTriangleIndex(C);Me(d,3*N,c,l),d.needsUpdate=!0;const G=d.distanceToTriangle(f,m,g);if(G<_&&(y.copy(m),p&&p.copy(g),_=G,x=C,M=w),G<s)return!0}}}})}else{const T=Jr(t);for(let R=0,b=T;R<b;R++){Me(f,3*R,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let w=v,F=v+S;w<F;w++){const L=r.resolveTriangleIndex(w);Me(d,3*L,c,l),d.needsUpdate=!0;const C=d.distanceToTriangle(f,m,g);if(C<_&&(y.copy(m),p&&p.copy(g),_=C,x=w,M=R),C<s)return!0}}}}}),Ei.releasePrimitive(d),Ei.releasePrimitive(f),_===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=_,i.faceIndex=x,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(Bl),y.applyMatrix4(Bl),n.distance=y.sub(n.point).length(),n.faceIndex=M),i)}function T1(){return typeof SharedArrayBuffer<"u"}const Ja=new oe.constructor,zl=new oe.constructor,ds=new ou(()=>new ge),la=new ge,ca=new ge,xu=new ge,_u=new ge;let vu=!1;function A1(r,t,e,i){if(vu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");vu=!0;const n=r._roots,s=t._roots;let a,o=0,l=0;const c=new wt().copy(e).invert();for(let h=0,u=n.length;h<u;h++){Ja.setBuffer(n[h]),l=0;const d=ds.getPrimitive();ue(0,Ja.float32Array,d),d.applyMatrix4(c);for(let f=0,m=s.length;f<m&&(zl.setBuffer(s[h]),a=$i(0,0,e,c,i,o,l,0,0,d),zl.clearBuffer(),l+=s[f].length,!a);f++);if(ds.releasePrimitive(d),Ja.clearBuffer(),o+=n[h].length,a)break}return vu=!1,a}function $i(r,t,e,i,n,s=0,a=0,o=0,l=0,c=null,h=!1){let u,d;h?(u=zl,d=Ja):(u=Ja,d=zl);const f=u.float32Array,m=u.uint32Array,y=u.uint16Array,g=d.float32Array,p=d.uint32Array,_=d.uint16Array,x=r*2,M=t*2,v=gi(x,y),S=gi(M,_);let T=!1;if(S&&v)h?T=n(yi(t,p),Ri(t*2,_),yi(r,m),Ri(r*2,y),l,a+t,o,s+r):T=n(yi(r,m),Ri(r*2,y),yi(t,p),Ri(t*2,_),o,s+r,l,a+t);else if(S){const R=ds.getPrimitive();ue(t,g,R),R.applyMatrix4(e);const b=Ci(r),w=Pi(r,m);ue(b,f,la),ue(w,f,ca);const F=R.intersectsBox(la),L=R.intersectsBox(ca);T=F&&$i(t,b,i,e,n,a,s,l,o+1,R,!h)||L&&$i(t,w,i,e,n,a,s,l,o+1,R,!h),ds.releasePrimitive(R)}else{const R=Ci(t),b=Pi(t,p);ue(R,g,xu),ue(b,g,_u);const w=c.intersectsBox(xu),F=c.intersectsBox(_u);if(w&&F)T=$i(r,R,e,i,n,s,a,o,l+1,c,h)||$i(r,b,e,i,n,s,a,o,l+1,c,h);else if(w)if(v)T=$i(r,R,e,i,n,s,a,o,l+1,c,h);else{const L=ds.getPrimitive();L.copy(xu).applyMatrix4(e);const C=Ci(r),U=Pi(r,m);ue(C,f,la),ue(U,f,ca);const N=L.intersectsBox(la),G=L.intersectsBox(ca);T=N&&$i(R,C,i,e,n,a,s,l,o+1,L,!h)||G&&$i(R,U,i,e,n,a,s,l,o+1,L,!h),ds.releasePrimitive(L)}else if(F)if(v)T=$i(r,b,e,i,n,s,a,o,l+1,c,h);else{const L=ds.getPrimitive();L.copy(_u).applyMatrix4(e);const C=Ci(r),U=Pi(r,m);ue(C,f,la),ue(U,f,ca);const N=L.intersectsBox(la),G=L.intersectsBox(ca);T=N&&$i(b,C,i,e,n,a,s,l,o+1,L,!h)||G&&$i(b,U,i,e,n,a,s,l,o+1,L,!h),ds.releasePrimitive(L)}}return T}const Ol=new Je,Ym=new ge;class Mu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,n=t._roots,s=t._indirectBuffer,a=i.getIndex();let o;return e.cloneBuffers?o={roots:n.map(l=>l.slice()),index:a.array.slice(),indirectBuffer:s?s.slice():null}:o={roots:n,index:a.array,indirectBuffer:s},o}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:n,roots:s,indirectBuffer:a}=t,o=new Mu(e,{...i,[nu]:!0});if(o._roots=s,o._indirectBuffer=a||null,i.setIndex){const l=e.getIndex();if(l===null){const c=new qe(t.index,1,!1);e.setIndex(c)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({strategy:Pm,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[nu]:!1},e),e.useSharedArrayBuffer&&!T1())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[nu]||(Gw(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ge)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=e.indirect?n=>i[n]:n=>n}refit(t=null){return(this.indirect?m1:i1)(this,t)}traverse(t,e=0){const i=this._roots[e],n=new Uint32Array(i),s=new Uint16Array(i);a(0);function a(o,l=0){const c=o*2,h=s[c+15]===bl;if(h){const u=n[o+6],d=s[c+14];t(l,h,new Float32Array(i,o*4,6),u,d)}else{const u=o+Ml/4,d=n[o+6],f=n[o+7];t(l,h,new Float32Array(i,o*4,6),f)||(a(u,l+1),a(d,l+1))}}}raycast(t,e=qs){const i=this._roots,n=this.geometry,s=[],a=e.isMaterial,o=Array.isArray(e),l=n.groups,c=a?e.side:e,h=this.indirect?g1:a1;for(let u=0,d=i.length;u<d;u++){const f=o?e[l[u].materialIndex].side:c,m=s.length;if(h(this,u,f,t,s),o){const y=l[u].materialIndex;for(let g=m,p=s.length;g<p;g++)s[g].face.materialIndex=y}}return s}raycastFirst(t,e=qs){const i=this._roots,n=this.geometry,s=e.isMaterial,a=Array.isArray(e);let o=null;const l=n.groups,c=s?e.side:e,h=this.indirect?x1:l1;for(let u=0,d=i.length;u<d;u++){const f=a?e[l[u].materialIndex].side:c,m=h(this,u,f,t);m!=null&&(o==null||m.distance<o.distance)&&(o=m,a&&(m.face.materialIndex=l[u].materialIndex))}return o}intersectsGeometry(t,e){let i=!1;const n=this._roots,s=this.indirect?_1:c1;for(let a=0,o=n.length;a<o&&(i=s(this,a,t,e),!i);a++);return i}shapecast(t){const e=Ei.getPrimitive(),i=this.indirect?r1:e1;let{boundsTraverseOrder:n,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const u=a;a=(d,f,m,y,g)=>u(d,f,m,y,g)?!0:i(d,f,this,o,m,y,e)}else a||(o?a=(u,d,f,m)=>i(u,d,this,o,f,m,e):a=(u,d,f)=>f);let l=!1,c=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(l=Yw(this,u,s,a,n,c),l)break;c+=f.byteLength}return Ei.releasePrimitive(e),l}bvhcast(t,e,i){let{intersectsRanges:n,intersectsTriangles:s}=i;const a=Ei.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{const y=this.resolveTriangleIndex(m);Me(a,y*3,o,l)}:m=>{Me(a,m*3,o,l)},h=Ei.getPrimitive(),u=t.geometry.index,d=t.geometry.attributes.position,f=t.indirect?m=>{const y=t.resolveTriangleIndex(m);Me(h,y*3,u,d)}:m=>{Me(h,m*3,u,d)};if(s){const m=(y,g,p,_,x,M,v,S)=>{for(let T=p,R=p+_;T<R;T++){f(T),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let b=y,w=y+g;b<w;b++)if(c(b),a.needsUpdate=!0,s(a,h,b,T,x,M,v,S))return!0}return!1};if(n){const y=n;n=function(g,p,_,x,M,v,S,T){return y(g,p,_,x,M,v,S,T)?!0:m(g,p,_,x,M,v,S,T)}}else n=m}return A1(this,t,e,n)}intersectsBox(t,e){return Ol.set(t.min,t.max,e),Ol.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Ol.intersectsBox(i),intersectsTriangle:i=>Ol.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},n={},s=0,a=1/0){return(this.indirect?w1:p1)(this,t,e,i,n,s,a)}closestPointToPoint(t,e={},i=0,n=1/0){return Kw(this,t,e,i,n)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{ue(0,new Float32Array(i),Ym),t.union(Ym)}),t}}function E1(){this.boundsTree=null}const zs=new I,Os=new I,ks=new I,Km=new oi,kl=new I,bu=new I,Zm=new oi,Jm=new oi,Vl=new wt,Qm=new wt;function Qa(r,t){if(!r&&!t)return;const e=r.count===t.count,i=r.normalized===t.normalized,n=r.array.constructor===t.array.constructor,s=r.itemSize===t.itemSize;if(!e||!i||!n||!s)throw new Error}function to(r,t=null){const e=r.array.constructor,i=r.normalized,n=r.itemSize,s=t===null?r.count:t;return new qe(new e(n*s),n,i)}function tg(r,t,e=0){if(r.isInterleavedBufferAttribute){const i=r.itemSize;for(let n=0,s=r.count;n<s;n++){const a=n+e;t.setX(a,r.getX(n)),i>=2&&t.setY(a,r.getY(n)),i>=3&&t.setZ(a,r.getZ(n)),i>=4&&t.setW(a,r.getW(n))}}else{const i=t.array,n=i.constructor,s=i.BYTES_PER_ELEMENT*r.itemSize*e;new n(i.buffer,s,r.array.length).set(r.array)}}function R1(r,t,e){const i=r.elements,n=t.elements;for(let s=0,a=n.length;s<a;s++)i[s]+=n[s]*e}function eg(r,t,e){const i=r.skeleton,n=r.geometry,s=i.bones,a=i.boneInverses;Zm.fromBufferAttribute(n.attributes.skinIndex,t),Jm.fromBufferAttribute(n.attributes.skinWeight,t),Vl.elements.fill(0);for(let o=0;o<4;o++){const l=Jm.getComponent(o);if(l!==0){const c=Zm.getComponent(o);Qm.multiplyMatrices(s[c].matrixWorld,a[c]),R1(Vl,Qm,l)}}return Vl.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),e.transformDirection(Vl),e}function Su(r,t,e,i,n){kl.set(0,0,0);for(let s=0,a=r.length;s<a;s++){const o=t[s],l=r[s];o!==0&&(bu.fromBufferAttribute(l,i),e?kl.addScaledVector(bu,o):kl.addScaledVector(bu.sub(n),o))}n.add(kl)}function C1(r,t={useGroups:!1,updateIndex:!1,skipAttributes:[]},e=new Ji){const i=r[0].index!==null,{useGroups:n=!1,updateIndex:s=!1,skipAttributes:a=[]}=t,o=new Set(Object.keys(r[0].attributes)),l={};let c=0;e.clearGroups();for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const f in u.attributes){if(!o.has(f))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.');l[f]===void 0&&(l[f]=[]),l[f].push(u.attributes[f]),d++}if(d!==o.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let f;if(i)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");e.addGroup(c,f,h),c+=f}}if(i){let h=!1;if(!e.index){let u=0;for(let d=0;d<r.length;++d)u+=r[d].index.count;e.setIndex(new qe(new Uint32Array(u),1,!1)),h=!0}if(s||h){const u=e.index;let d=0,f=0;for(let m=0;m<r.length;++m){const y=r[m],g=y.index;if(a[m]!==!0)for(let p=0;p<g.count;++p)u.setX(d,g.getX(p)+f),d++;f+=y.attributes.position.count}}}for(const h in l){const u=l[h];if(!(h in e.attributes)){let m=0;for(const y in u)m+=u[y].count;e.setAttribute(h,to(l[h][0],m))}const d=e.attributes[h];let f=0;for(let m=0,y=u.length;m<y;m++){const g=u[m];a[m]!==!0&&tg(g,d,f),f+=g.count}}return e}function P1(r,t){if(r===null||t===null)return r===t;if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}class L1{constructor(t){this.matrixWorld=new wt,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=t,this.update()}update(){const t=this.mesh,e=t.geometry,i=t.skeleton,n=(e.index?e.index.count:e.attributes.position.count)/3;if(this.matrixWorld.copy(t.matrixWorld),this.geometryHash=e.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const s=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const t=this.mesh,e=t.geometry,i=(e.index?e.index.count:e.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===e.attributes.position.version&&P1(t.skeleton&&t.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class I1{constructor(t){Array.isArray(t)||(t=[t]);const e=[];t.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&e.push(n)})}),this.meshes=e,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(e.length).fill().map(()=>new Ji),this._diffMap=new WeakMap}getMaterials(){const t=[];return this.meshes.forEach(e=>{Array.isArray(e.material)?t.push(...e.material):t.push(e.material)}),t}generate(t=new Ji){let e=[];const{meshes:i,useGroups:n,_intermediateGeometry:s,_diffMap:a}=this;for(let o=0,l=i.length;o<l;o++){const c=i[o],h=s[o],u=a.get(c);!u||u.didChange(c)?(this._convertToStaticGeometry(c,h),e.push(!1),u?u.update():a.set(c,new L1(c))):e.push(!0)}C1(s,{useGroups:n,skipAttributes:e},t);for(const o in t.attributes)t.attributes[o].needsUpdate=!0;return t}_convertToStaticGeometry(t,e=new Ji){const i=t.geometry,n=this.applyWorldTransforms,s=this.attributes.includes("normal"),a=this.attributes.includes("tangent"),o=i.attributes,l=e.attributes;e.index||(e.index=i.index),l.position||e.setAttribute("position",to(o.position)),s&&!l.normal&&o.normal&&e.setAttribute("normal",to(o.normal)),a&&!l.tangent&&o.tangent&&e.setAttribute("tangent",to(o.tangent)),Qa(i.index,e.index),Qa(o.position,l.position),s&&Qa(o.normal,l.normal),a&&Qa(o.tangent,l.tangent);const c=o.position,h=s?o.normal:null,u=a?o.tangent:null,d=i.morphAttributes.position,f=i.morphAttributes.normal,m=i.morphAttributes.tangent,y=i.morphTargetsRelative,g=t.morphTargetInfluences,p=new Hn;p.getNormalMatrix(t.matrixWorld);for(let _=0,x=o.position.count;_<x;_++)zs.fromBufferAttribute(c,_),h&&Os.fromBufferAttribute(h,_),u&&(Km.fromBufferAttribute(u,_),ks.fromBufferAttribute(u,_)),g&&(d&&Su(d,g,y,_,zs),f&&Su(f,g,y,_,Os),m&&Su(m,g,y,_,ks)),t.isSkinnedMesh&&(t.applyBoneTransform(_,zs),h&&eg(t,_,Os),u&&eg(t,_,ks)),n&&zs.applyMatrix4(t.matrixWorld),l.position.setXYZ(_,zs.x,zs.y,zs.z),h&&(n&&Os.applyNormalMatrix(p),l.normal.setXYZ(_,Os.x,Os.y,Os.z)),u&&(n&&ks.transformDirection(t.matrixWorld),l.tangent.setXYZW(_,ks.x,ks.y,ks.z,Km.w));for(const _ in this.attributes){const x=this.attributes[_];x==="position"||x==="tangent"||x==="normal"||!(x in o)||(l[x]||e.setAttribute(x,to(o[x])),Qa(o[x],l[x]),tg(o[x],l[x]))}return e}}class D1{constructor(){this.positionVector=new D,this.rotationVector=new sn,this.sizeVector=new D,this.GRAVITY=-9.81,this.MIN_SIZE=.01,this.DISABLE=5,this.ENABLE=1,this.SPEED=5}createBound(t,e,i,n=0){this.rotationVector.set(0,0,0);const s=t[0],a=t[1],o=s-e[0],l=a-e[1],c=o/-2+s,h=l/-2+a;let u=Math.abs(o),d=Math.abs(l);if(u&&d){const f=d>u,m=Math.hypot(u,d);this.rotationVector.set(0,f?Qt.d2+Math.atan(d/u):Qt.d2-Math.atan(u/d),0),f?d=m:u=m}u=u<d?this.MIN_SIZE:u,d=d<u?this.MIN_SIZE:d,this.positionVector.set(c,n,h),this.sizeVector.set(u,i,d)}borderOverflow(t){const{x:e,z:i}=this.positionVector;return Math.abs(e)>Math.abs(t.x)&&Math.abs(i)>Math.abs(t.z)&&e-t.x<=1&&i-t.z<=1}createStaticCollider(t){const{x:e,y:i,z:n}=this.sizeVector,s=new de(new Dn(e,i,n),t);s.position.copy(this.positionVector),s.rotation.copy(this.rotationVector),nt.dispatch("Level::AddObject",s),this.addStaticCollider(s)}createGround(t,e){this.sizeVector.set(Math.abs(t[0]-e[0]),this.MIN_SIZE,Math.abs(t[1]-e[1])),this.positionVector.set((t[0]+e[0])/2,0,(t[1]+e[1])/2),this.createStaticCollider(on.Transparent)}createBounds(t,e){const i=new D,n=t.borders.concat([t.borders[0]]),s=e?.borders.concat([e?.borders[0]]);for(let a=0;a<t.borders.length;a++){if(this.createBound(n[a],n[a+1],t.height,t.y),this.createStaticCollider(on.StaticCollider),i.copy(this.positionVector),s&&this.createBound(s[a],s[a+1],e?.height,e?.y),this.borderOverflow(i))continue;const o=this.rotationVector.y?1.1:1,l=this.positionVector.distanceTo(i)/2*.95;this.positionVector.x-=(this.positionVector.x-i.x)/2,this.positionVector.z-=(this.positionVector.z-i.z)/2,this.sizeVector.z===this.MIN_SIZE?this.sizeVector.setZ(l):this.sizeVector.setX(l),this.positionVector.x<0?this.sizeVector.z*=o:this.sizeVector.x*=o,this.createStaticCollider(on.StaticCollider)}}}class F1 extends D1{constructor(){super(...arguments),this.characterVelocity=new Map,this.characters=new Map,this.linearVelocity=new D,this.environment=new Ga,this.capsule=new D,this.matrix=new Jt,this.segment=new Cm,this.box=new Qn,this.paused=!0,this.delta=0}updateCollisions(){const t=Array.from(this.characters.values());for(let e=t.length;e--;){const i=t[e];for(let n=e;n--;){const s=t[n];this.linearVelocity.subVectors(i.position,s.position);const a=this.linearVelocity.length()-(i.userData.radius+s.userData.radius);if(a>0)continue;this.linearVelocity.normalize();const o=this.characterVelocity.get(i.uuid),l=this.characterVelocity.get(s.uuid),c=o.dot(this.linearVelocity),h=l.dot(this.linearVelocity),u=Math.max(c,.2),d=Math.max(h,.2),f=u+d,m=u/f,y=d/f,{y:g}=i.position,{y:p}=s.position;i.position.addScaledVector(this.linearVelocity,-m*a),s.position.addScaledVector(this.linearVelocity,y*a),i.position.y=g,s.position.y=p}}}addPhysicsCollider(){this.environment.updateMatrixWorld(!0);const t=new I1(this.environment);t.attributes=["position"];const e=t.generate();e.boundsTree=new Mu(e,{lazyGeneration:!1}),nt.dispatch("Level::AddObject",this.environment),this.environmentCollider=new de(e)}addStaticCollider(t){this.environment.attach(t)}createBounds(t,e){super.createBounds(t,e),this.addPhysicsCollider()}setCharacter(t){this.characterVelocity.set(t.uuid,new D),this.characters.set(t.uuid,t);const{height:e,radius:i}=t.userData;t.geometry.translate(0,-i,0),t.children[0].translateY(-i);const{x:n,z:s}=t.position;t.position.set(n,e,s),this.move(t.uuid,mi.UP)}move(t,e){const i=this.characters.get(t),{segment:n,radius:s}=i.userData,a=this.characterVelocity.get(t),o=this.environmentCollider?.matrixWorld,l=this.environmentCollider?.geometry;a.y+=this.delta*this.GRAVITY,i.position.addScaledVector(a,this.delta),this.linearVelocity.set(e.x,e.y,e.z),i.position.addScaledVector(this.linearVelocity,this.SPEED*this.delta),i.updateMatrixWorld(),this.box.makeEmpty(),this.matrix.copy(o).invert(),this.segment.copy(n),this.segment.start.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.segment.end.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.box.expandByPoint(this.segment.start),this.box.expandByPoint(this.segment.end),this.box.min.addScalar(-s),this.box.max.addScalar(s),l.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(this.box),intersectsTriangle:u=>{const d=this.capsule,f=this.linearVelocity,m=u.closestPointToSegment(this.segment,f,d);if(m<s){const y=s-m,g=d.sub(f).normalize();this.segment.start.addScaledVector(g,y),this.segment.end.addScaledVector(g,y)}}});const c=this.linearVelocity;c.copy(this.segment.start).applyMatrix4(o),this.capsule.subVectors(c,i.position),i.position.copy(c),a.setScalar(0)}stop(t){this.characterVelocity.get(t)?.setScalar(0)}update(t){this.paused||(this.delta=t*.2,this.updateCollisions())}remove(t){this.characterVelocity.delete(t),this.characters.delete(t)}dispose(){const t=this.environmentCollider?.geometry,e=E1.bind(t);t.dispose(),e(),this.paused=!0,this.characters.clear(),this.environment.clear(),this.characterVelocity.clear(),delete this.environmentCollider}set pause(t){this.paused=t}}const si=new F1;si.constructor.name.includes("Ammo");class ig{constructor(t){this.config=t,this.animations={},this.direction=new D,this.position=new D,this.rotation=new D,this.animationUpdate=!1,this.lastAnimation="",this.hitting=!1,this.running=!1,this.moving=!1,this.dead=!1,this.still=!1,this.health=100;const{x:e,y:i}=this.config.collider;this.object=new de(new vm(e,i,e,2,.5),on.DynamicCollider),this.object.userData={segment:new Cm(new D,mi.DOWN),height:i,radius:.5,mass:this.config.mass},this.step=this.config.moves.Idle,this.uuid=this.object.uuid}updateAnimation(t,e,i){return this.currentAnimation.crossFadeTo(this.animations[e],i,!0),this.animations[e].play(),this.animationUpdate=!0,setTimeout(()=>{this.lastAnimation=e,this.setAnimation(t),this.currentAnimation.stop(),this.animationUpdate=!1,this.currentAnimation=this.animations[e]},i*1e3)}async load(t){const e=await qt.Loader.loadGLTF(this.config.model);return this.mesh=e.scene,this.setTransform(e),this.setMaterial(t,1),e}playSound(t,e=!1){e&&this.stopSound(t),nt.dispatch("SFX::Character",{uuid:this.uuid,play:!0,sfx:t,matrix:this.object.matrixWorld},!0)}setMaterial(t,e=0){this.mesh.traverse(i=>{const n=i,s=n.material;n.isMesh&&(n.castShadow=!0,n.updateMorphTargets(),n.material=new Qh({envMap:t??null,transparent:!0,map:s.map,side:Bi,opacity:e}))})}getAnimationDuration(t){return this.animations[t].getClip().duration*1e3}setAnimation(t){this.step=this.config.moves[t]}setAnimations(t){const e=t.animations;this.mixer=new Tw(this.mesh);for(let i=e.length;i--;){const{name:n}=e[i],s=n.charAt(0).toLowerCase()+n.slice(1);this.animations[s]=this.mixer.clipAction(e[i])}this.currentAnimation=this.animations.idle}setTransform(t){this.object.position.copy(this.config.position),this.mesh.position.set(0,this.config.collider.z,0),this.object.scale.copy(this.config.scale),this.rotation.setFromEuler(this.object.rotation),this.position.copy(this.object.position),this.object.add(this.mesh),this.setAnimations(t)}setMixerTimeScale(t){this.mixer&&(this.mixer.timeScale=t)}updateHealth(t){return this.dead?!0:(this.health=Math.max(this.health-t,0),!this.health&&this.die(),this.dead)}stopSound(t){nt.dispatch("SFX::Character",{uuid:this.uuid,play:!1,sfx:t,matrix:this.object.matrixWorld},!0)}setMixerTime(t){this.mixer?.setTime(t)}teleport(t){si.pause=!0,this.object.position.copy(t),this.mesh.rotateOnWorldAxis(mi.UP,Math.PI),si.teleportCollider?.(this.object.uuid),si.pause=!1}update(t){this.mixer?.update(t),this.updateDirection(),this.moving?(this.still=!1,si.move(this.uuid,this.direction)):this.still||(this.still=!0,si.stop(this.uuid))}updateDirection(){const{speed:t,direction:e}=this.step;this.mesh.getWorldDirection(this.rotation),this.object.getWorldPosition(this.position);const i=this.rotation.x*t,n=this.rotation.z*t,{z0:s,x0:a,x1:o}=e,l=Math.min(a,o);this.direction.set(i*s+i*l+n*o,-1,n*s+n*l+i*a)}dispose(){this.object.userData={},this.object.geometry.dispose(),this.object.material.dispose();for(const t in this.animations)this.animations[t].stopFading(),this.animations[t].stop(),delete this.animations[t];this.model&&(this.object.remove(this.model),this.model.clear(),delete this.model),this.animations={},delete this.mixer,this.reset()}die(){this.playSound("death",!0),this.setAnimation("Idle"),si.remove(this.uuid),this.hitting=!1,this.running=!1,this.moving=!1,this.still=!1,this.dead=!0}reset(){this.step=this.config.moves.Idle,this.direction.setScalar(0),this.position.setScalar(0),this.rotation.setScalar(0),this.hitting=!1,this.running=!1,this.moving=!1,this.health=100,this.still=!0,this.dead=!1}get blockingAnimation(){return this.dead||this.animationUpdate}set mesh(t){this.model=t}get mesh(){return this.model}get life(){return this.health}get collider(){return this.object}get alive(){return!this.dead}}var ng={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},wu={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},U1=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Hl={CSS:{},springs:{}};function cn(r,t,e){return Math.min(Math.max(r,t),e)}function eo(r,t){return r.indexOf(t)>-1}function Tu(r,t){return r.apply(null,t)}var pt={arr:function(r){return Array.isArray(r)},obj:function(r){return eo(Object.prototype.toString.call(r),"Object")},pth:function(r){return pt.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||pt.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return pt.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return pt.hex(r)||pt.rgb(r)||pt.hsl(r)},key:function(r){return!ng.hasOwnProperty(r)&&!wu.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function sg(r){var t=/\(([^)]+)\)/.exec(r);return t?t[1].split(",").map(function(e){return parseFloat(e)}):[]}function rg(r,t){var e=sg(r),i=cn(pt.und(e[0])?1:e[0],.1,100),n=cn(pt.und(e[1])?100:e[1],.1,100),s=cn(pt.und(e[2])?10:e[2],.1,100),a=cn(pt.und(e[3])?0:e[3],.1,100),o=Math.sqrt(n/i),l=s/(2*Math.sqrt(n*i)),c=l<1?o*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*o+-a)/c:-a+o;function d(m){var y=t?t*m/1e3:m;return l<1?y=Math.exp(-y*l*o)*(h*Math.cos(c*y)+u*Math.sin(c*y)):y=(h+u*y)*Math.exp(-y*o),m===0||m===1?m:1-y}function f(){var m=Hl.springs[r];if(m)return m;for(var y=1/6,g=0,p=0;;)if(g+=y,d(g)===1){if(p++,p>=16)break}else p=0;var _=g*y*1e3;return Hl.springs[r]=_,_}return t?d:f}function N1(r){return r===void 0&&(r=10),function(t){return Math.ceil(cn(t,1e-6,1)*r)*(1/r)}}var B1=function(){var r=11,t=1/(r-1);function e(h,u){return 1-3*u+3*h}function i(h,u){return 3*u-6*h}function n(h){return 3*h}function s(h,u,d){return((e(u,d)*h+i(u,d))*h+n(u))*h}function a(h,u,d){return 3*e(u,d)*h*h+2*i(u,d)*h+n(u)}function o(h,u,d,f,m){var y,g,p=0;do g=u+(d-u)/2,y=s(g,f,m)-h,y>0?d=g:u=g;while(Math.abs(y)>1e-7&&++p<10);return g}function l(h,u,d,f){for(var m=0;m<4;++m){var y=a(u,d,f);if(y===0)return u;var g=s(u,d,f)-h;u-=g/y}return u}function c(h,u,d,f){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var m=new Float32Array(r);if(h!==u||d!==f)for(var y=0;y<r;++y)m[y]=s(y*t,h,d);function g(p){for(var _=0,x=1,M=r-1;x!==M&&m[x]<=p;++x)_+=t;--x;var v=(p-m[x])/(m[x+1]-m[x]),S=_+v*t,T=a(S,h,d);return T>=.001?l(p,S,h,d):T===0?S:o(p,_,_+t,h,d)}return function(p){return h===u&&d===f||p===0||p===1?p:s(g(p),u,f)}}return c}(),ag=function(){var r={linear:function(){return function(i){return i}}},t={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Expo:function(){return function(i){return i?Math.pow(2,10*i-10):0}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var n,s=4;i<((n=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((n*3-2)/22-i,2)}},Elastic:function(i,n){i===void 0&&(i=1),n===void 0&&(n=.5);var s=cn(i,1,10),a=cn(n,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},e=["Quad","Cubic","Quart","Quint"];return e.forEach(function(i,n){t[i]=function(){return function(s){return Math.pow(s,n+2)}}}),Object.keys(t).forEach(function(i){var n=t[i];r["easeIn"+i]=n,r["easeOut"+i]=function(s,a){return function(o){return 1-n(s,a)(1-o)}},r["easeInOut"+i]=function(s,a){return function(o){return o<.5?n(s,a)(o*2)/2:1-n(s,a)(o*-2+2)/2}},r["easeOutIn"+i]=function(s,a){return function(o){return o<.5?(1-n(s,a)(1-o*2))/2:(n(s,a)(o*2-1)+1)/2}}}),r}();function Au(r,t){if(pt.fnc(r))return r;var e=r.split("(")[0],i=ag[e],n=sg(r);switch(e){case"spring":return rg(r,t);case"cubicBezier":return Tu(B1,n);case"steps":return Tu(N1,n);default:return Tu(i,n)}}function og(r){try{var t=document.querySelectorAll(r);return t}catch{return}}function Gl(r,t){for(var e=r.length,i=arguments.length>=2?arguments[1]:void 0,n=[],s=0;s<e;s++)if(s in r){var a=r[s];t.call(i,a,s,r)&&n.push(a)}return n}function Wl(r){return r.reduce(function(t,e){return t.concat(pt.arr(e)?Wl(e):e)},[])}function lg(r){return pt.arr(r)?r:(pt.str(r)&&(r=og(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Eu(r,t){return r.some(function(e){return e===t})}function Ru(r){var t={};for(var e in r)t[e]=r[e];return t}function Cu(r,t){var e=Ru(r);for(var i in r)e[i]=t.hasOwnProperty(i)?t[i]:r[i];return e}function Xl(r,t){var e=Ru(r);for(var i in t)e[i]=pt.und(r[i])?t[i]:r[i];return e}function z1(r){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return t?"rgba("+t[1]+",1)":r}function O1(r){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=r.replace(t,function(o,l,c,h){return l+l+c+c+h+h}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),n=parseInt(i[1],16),s=parseInt(i[2],16),a=parseInt(i[3],16);return"rgba("+n+","+s+","+a+",1)"}function k1(r){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),e=parseInt(t[1],10)/360,i=parseInt(t[2],10)/100,n=parseInt(t[3],10)/100,s=t[4]||1;function a(d,f,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?d+(f-d)*6*m:m<1/2?f:m<2/3?d+(f-d)*(2/3-m)*6:d}var o,l,c;if(i==0)o=l=c=n;else{var h=n<.5?n*(1+i):n+i-n*i,u=2*n-h;o=a(u,h,e+1/3),l=a(u,h,e),c=a(u,h,e-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function V1(r){if(pt.rgb(r))return z1(r);if(pt.hex(r))return O1(r);if(pt.hsl(r))return k1(r)}function Bn(r){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(t)return t[1]}function H1(r){if(eo(r,"translate")||r==="perspective")return"px";if(eo(r,"rotate")||eo(r,"skew"))return"deg"}function Pu(r,t){return pt.fnc(r)?r(t.target,t.id,t.total):r}function hn(r,t){return r.getAttribute(t)}function Lu(r,t,e){var i=Bn(t);if(Eu([e,"deg","rad","turn"],i))return t;var n=Hl.CSS[t+e];if(!pt.und(n))return n;var s=100,a=document.createElement(r.tagName),o=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+e;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(t);return Hl.CSS[t+e]=c,c}function cg(r,t,e){if(t in r.style){var i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.style[t]||getComputedStyle(r).getPropertyValue(i)||"0";return e?Lu(r,n,e):n}}function Iu(r,t){if(pt.dom(r)&&!pt.inp(r)&&(!pt.nil(hn(r,t))||pt.svg(r)&&r[t]))return"attribute";if(pt.dom(r)&&Eu(U1,t))return"transform";if(pt.dom(r)&&t!=="transform"&&cg(r,t))return"css";if(r[t]!=null)return"object"}function hg(r){if(pt.dom(r)){for(var t=r.style.transform||"",e=/(\w+)\(([^)]*)\)/g,i=new Map,n;n=e.exec(t);)i.set(n[1],n[2]);return i}}function G1(r,t,e,i){var n=eo(t,"scale")?1:0+H1(t),s=hg(r).get(t)||n;return e&&(e.transforms.list.set(t,s),e.transforms.last=t),i?Lu(r,s,i):s}function Du(r,t,e,i){switch(Iu(r,t)){case"transform":return G1(r,t,i,e);case"css":return cg(r,t,e);case"attribute":return hn(r,t);default:return r[t]||0}}function Fu(r,t){var e=/^(\*=|\+=|-=)/.exec(r);if(!e)return r;var i=Bn(r)||0,n=parseFloat(t),s=parseFloat(r.replace(e[0],""));switch(e[0][0]){case"+":return n+s+i;case"-":return n-s+i;case"*":return n*s+i}}function ug(r,t){if(pt.col(r))return V1(r);if(/\s/g.test(r))return r;var e=Bn(r),i=e?r.substr(0,r.length-e.length):r;return t?i+t:i}function Uu(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function W1(r){return Math.PI*2*hn(r,"r")}function X1(r){return hn(r,"width")*2+hn(r,"height")*2}function $1(r){return Uu({x:hn(r,"x1"),y:hn(r,"y1")},{x:hn(r,"x2"),y:hn(r,"y2")})}function dg(r){for(var t=r.points,e=0,i,n=0;n<t.numberOfItems;n++){var s=t.getItem(n);n>0&&(e+=Uu(i,s)),i=s}return e}function j1(r){var t=r.points;return dg(r)+Uu(t.getItem(t.numberOfItems-1),t.getItem(0))}function fg(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return W1(r);case"rect":return X1(r);case"line":return $1(r);case"polyline":return dg(r);case"polygon":return j1(r)}}function q1(r){var t=fg(r);return r.setAttribute("stroke-dasharray",t),t}function Y1(r){for(var t=r.parentNode;pt.svg(t)&&pt.svg(t.parentNode);)t=t.parentNode;return t}function pg(r,t){var e=t||{},i=e.el||Y1(r),n=i.getBoundingClientRect(),s=hn(i,"viewBox"),a=n.width,o=n.height,l=e.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function K1(r,t){var e=pt.str(r)?og(r)[0]:r,i=t||100;return function(n){return{property:n,el:e,svg:pg(e),totalLength:fg(e)*(i/100)}}}function Z1(r,t,e){function i(h){h===void 0&&(h=0);var u=t+h>=1?t+h:0;return r.el.getPointAtLength(u)}var n=pg(r.el,r.svg),s=i(),a=i(-1),o=i(1),l=e?1:n.w/n.vW,c=e?1:n.h/n.vH;switch(r.property){case"x":return(s.x-n.x)*l;case"y":return(s.y-n.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function mg(r,t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=ug(pt.pth(r)?r.totalLength:r,t)+"";return{original:i,numbers:i.match(e)?i.match(e).map(Number):[0],strings:pt.str(r)||t?i.split(e):[]}}function Nu(r){var t=r?Wl(pt.arr(r)?r.map(lg):lg(r)):[];return Gl(t,function(e,i,n){return n.indexOf(e)===i})}function gg(r){var t=Nu(r);return t.map(function(e,i){return{target:e,id:i,total:t.length,transforms:{list:hg(e)}}})}function J1(r,t){var e=Ru(t);if(/^spring/.test(e.easing)&&(e.duration=rg(e.easing)),pt.arr(r)){var i=r.length,n=i===2&&!pt.obj(r[0]);n?r={value:r}:pt.fnc(t.duration)||(e.duration=t.duration/i)}var s=pt.arr(r)?r:[r];return s.map(function(a,o){var l=pt.obj(a)&&!pt.pth(a)?a:{value:a};return pt.und(l.delay)&&(l.delay=o?0:t.delay),pt.und(l.endDelay)&&(l.endDelay=o===s.length-1?t.endDelay:0),l}).map(function(a){return Xl(a,e)})}function Q1(r){for(var t=Gl(Wl(r.map(function(s){return Object.keys(s)})),function(s){return pt.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),e={},i=function(s){var a=t[s];e[a]=r.map(function(o){var l={};for(var c in o)pt.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},n=0;n<t.length;n++)i(n);return e}function tT(r,t){var e=[],i=t.keyframes;i&&(t=Xl(Q1(i),t));for(var n in t)pt.key(n)&&e.push({name:n,tweens:J1(t[n],r)});return e}function eT(r,t){var e={};for(var i in r){var n=Pu(r[i],t);pt.arr(n)&&(n=n.map(function(s){return Pu(s,t)}),n.length===1&&(n=n[0])),e[i]=n}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}function iT(r,t){var e;return r.tweens.map(function(i){var n=eT(i,t),s=n.value,a=pt.arr(s)?s[1]:s,o=Bn(a),l=Du(t.target,r.name,o,t),c=e?e.to.original:l,h=pt.arr(s)?s[0]:c,u=Bn(h)||Bn(l),d=o||u;return pt.und(a)&&(a=c),n.from=mg(h,d),n.to=mg(Fu(a,h),d),n.start=e?e.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=Au(n.easing,n.duration),n.isPath=pt.pth(s),n.isPathTargetInsideSVG=n.isPath&&pt.svg(t.target),n.isColor=pt.col(n.from.original),n.isColor&&(n.round=1),e=n,n})}var yg={css:function(r,t,e){return r.style[t]=e},attribute:function(r,t,e){return r.setAttribute(t,e)},object:function(r,t,e){return r[t]=e},transform:function(r,t,e,i,n){if(i.list.set(t,e),t===i.last||n){var s="";i.list.forEach(function(a,o){s+=o+"("+a+") "}),r.style.transform=s}}};function xg(r,t){var e=gg(r);e.forEach(function(i){for(var n in t){var s=Pu(t[n],i),a=i.target,o=Bn(s),l=Du(a,n,o,i),c=o||Bn(l),h=Fu(ug(s,c),l),u=Iu(a,n);yg[u](a,n,h,i.transforms,!0)}})}function nT(r,t){var e=Iu(r.target,t.name);if(e){var i=iT(t,r),n=i[i.length-1];return{type:e,property:t.name,animatable:r,tweens:i,duration:n.end,delay:i[0].delay,endDelay:n.endDelay}}}function sT(r,t){return Gl(Wl(r.map(function(e){return t.map(function(i){return nT(e,i)})})),function(e){return!pt.und(e)})}function _g(r,t){var e=r.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},n={};return n.duration=e?Math.max.apply(Math,r.map(function(s){return i(s)+s.duration})):t.duration,n.delay=e?Math.min.apply(Math,r.map(function(s){return i(s)+s.delay})):t.delay,n.endDelay=e?n.duration-Math.max.apply(Math,r.map(function(s){return i(s)+s.duration-s.endDelay})):t.endDelay,n}var vg=0;function rT(r){var t=Cu(ng,r),e=Cu(wu,r),i=tT(e,r),n=gg(r.targets),s=sT(n,i),a=_g(s,e),o=vg;return vg++,Xl(t,{id:o,children:[],animatables:n,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var ji=[],Mg=function(){var r;function t(){!r&&(!bg()||!Mt.suspendWhenDocumentHidden)&&ji.length>0&&(r=requestAnimationFrame(e))}function e(n){for(var s=ji.length,a=0;a<s;){var o=ji[a];o.paused?(ji.splice(a,1),s--):(o.tick(n),a++)}r=a>0?requestAnimationFrame(e):void 0}function i(){Mt.suspendWhenDocumentHidden&&(bg()?r=cancelAnimationFrame(r):(ji.forEach(function(n){return n._onDocumentVisibility()}),Mg()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),t}();function bg(){return!!document&&document.hidden}function Mt(r){r===void 0&&(r={});var t=0,e=0,i=0,n,s=0,a=null;function o(_){var x=window.Promise&&new Promise(function(M){return a=M});return _.finished=x,x}var l=rT(r);o(l);function c(){var _=l.direction;_!=="alternate"&&(l.direction=_!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,n.forEach(function(x){return x.reversed=l.reversed})}function h(_){return l.reversed?l.duration-_:_}function u(){t=0,e=h(l.currentTime)*(1/Mt.speed)}function d(_,x){x&&x.seek(_-x.timelineOffset)}function f(_){if(l.reversePlayback)for(var M=s;M--;)d(_,n[M]);else for(var x=0;x<s;x++)d(_,n[x])}function m(_){for(var x=0,M=l.animations,v=M.length;x<v;){var S=M[x],T=S.animatable,R=S.tweens,b=R.length-1,w=R[b];b&&(w=Gl(R,function(lt){return _<lt.end})[0]||w);for(var F=cn(_-w.start-w.delay,0,w.duration)/w.duration,L=isNaN(F)?1:w.easing(F),C=w.to.strings,U=w.round,N=[],G=w.to.numbers.length,W=void 0,H=0;H<G;H++){var X=void 0,Z=w.to.numbers[H],ot=w.from.numbers[H]||0;w.isPath?X=Z1(w.value,L*Z,w.isPathTargetInsideSVG):X=ot+L*(Z-ot),U&&(w.isColor&&H>2||(X=Math.round(X*U)/U)),N.push(X)}var rt=C.length;if(!rt)W=N[0];else{W=C[0];for(var V=0;V<rt;V++){C[V];var J=C[V+1],it=N[V];isNaN(it)||(J?W+=it+J:W+=it+" ")}}yg[S.type](T.target,S.property,W,T.transforms),S.currentValue=W,x++}}function y(_){l[_]&&!l.passThrough&&l[_](l)}function g(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(_){var x=l.duration,M=l.delay,v=x-l.endDelay,S=h(_);l.progress=cn(S/x*100,0,100),l.reversePlayback=S<l.currentTime,n&&f(S),!l.began&&l.currentTime>0&&(l.began=!0,y("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,y("loopBegin")),S<=M&&l.currentTime!==0&&m(0),(S>=v&&l.currentTime!==x||!x)&&m(x),S>M&&S<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,y("changeBegin")),y("change"),m(S)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,y("changeComplete")),l.currentTime=cn(S,0,x),l.began&&y("update"),_>=x&&(e=0,g(),l.remaining?(t=i,y("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,y("loopComplete"),y("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var _=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=_==="reverse",l.remaining=l.loop,n=l.children,s=n.length;for(var x=s;x--;)l.children[x].reset();(l.reversed&&l.loop!==!0||_==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(_,x){return xg(_,x),l},l.tick=function(_){i=_,t||(t=i),p((i+(e-t))*Mt.speed)},l.seek=function(_){p(h(_))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,ji.push(l),u(),Mg())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(_){var x=Nu(_);wg(x,l)},l.reset(),l.autoplay&&l.play(),l}function Sg(r,t){for(var e=t.length;e--;)Eu(r,t[e].animatable.target)&&t.splice(e,1)}function wg(r,t){var e=t.animations,i=t.children;Sg(r,e);for(var n=i.length;n--;){var s=i[n],a=s.animations;Sg(r,a),!a.length&&!s.children.length&&i.splice(n,1)}!e.length&&!i.length&&t.pause()}function aT(r){for(var t=Nu(r),e=ji.length;e--;){var i=ji[e];wg(t,i)}}function oT(r,t){t===void 0&&(t={});var e=t.direction||"normal",i=t.easing?Au(t.easing):null,n=t.grid,s=t.axis,a=t.from||0,o=a==="first",l=a==="center",c=a==="last",h=pt.arr(r),u=parseFloat(h?r[0]:r),d=h?parseFloat(r[1]):0,f=Bn(h?r[1]:r)||0,m=t.start||0+(h?u:0),y=[],g=0;return function(p,_,x){if(o&&(a=0),l&&(a=(x-1)/2),c&&(a=x-1),!y.length){for(var M=0;M<x;M++){if(!n)y.push(Math.abs(a-M));else{var v=l?(n[0]-1)/2:a%n[0],S=l?(n[1]-1)/2:Math.floor(a/n[0]),T=M%n[0],R=Math.floor(M/n[0]),b=v-T,w=S-R,F=Math.sqrt(b*b+w*w);s==="x"&&(F=-b),s==="y"&&(F=-w),y.push(F)}g=Math.max.apply(Math,y)}i&&(y=y.map(function(C){return i(C/g)*g})),e==="reverse"&&(y=y.map(function(C){return s?C<0?C*-1:-C:Math.abs(g-C)}))}var L=h?(d-u)/g:u;return m+L*(Math.round(y[_]*100)/100)+f}}function lT(r){r===void 0&&(r={});var t=Mt(r);return t.duration=0,t.add=function(e,i){var n=ji.indexOf(t),s=t.children;n>-1&&ji.splice(n,1);function a(d){d.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=Xl(e,Cu(wu,r));l.targets=l.targets||r.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=pt.und(i)?c:Fu(i,c),a(t),t.seek(l.timelineOffset);var h=Mt(l);a(h),s.push(h);var u=_g(s,r);return t.delay=u.delay,t.endDelay=u.endDelay,t.duration=u.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}Mt.version="3.2.1",Mt.speed=1,Mt.suspendWhenDocumentHidden=!0,Mt.running=ji,Mt.remove=aT,Mt.get=Du,Mt.set=xg,Mt.convertPx=Lu,Mt.path=K1,Mt.setDashoffset=q1,Mt.stagger=oT,Mt.timeline=lT,Mt.easing=Au,Mt.penner=ag,Mt.random=function(r,t){return Math.floor(Math.random()*(t-r+1))+r};class Tg extends ig{constructor(t,e,i=0){if(super(vt.Enemy),this.id=i,this.walkDistance=vt.Gameplay.enemy.walk,this.runDistance=vt.Gameplay.enemy.run,this.lose=vt.Gameplay.enemy.lose,this.animationUpdate=!0,this.lastAnimation="idle",this.hitBoxes=[],this.attackDistance=2.5,this.previousAnimation="idle",this.distance=1/0,this.playerDead=!1,this.attacking=!1,this.screaming=!1,this.screamed=!1,this.crawling=!1,this.falling=!1,this.visible=!1,this.crawlTime=0,this.fallTime=0,this.hitTime=0,this.walkDistance=this.walkDistance<0?1/0:this.walkDistance,this.runDistance=this.runDistance<0?1/0:this.runDistance,t&&e){this.character=aw(t.scene),nt.dispatch("Level::AddObject",this.object),nt.dispatch("Enemy::Spawn",this.uuid,!0);const n=+!this.id;this.mesh=this.character,this.setMaterial(e,n),this.setTransform(t),this.setDefaultState(),this.toggleVisibility(!0)}}updateAnimation(t,e,i=.5){return super.updateAnimation(t,e,i)}toggleVisibility(t,e){if(!this.hitBoxes.length)return;const i=1e3+ +!t*1500,n=t?"easeInQuad":"easeOutQuad",s=e&&this.getAnimationDuration(e)+500||0;if(t)this.visible=!0;else{this.cancelHit(),this.removeHitBoxes(),clearTimeout(this.crawlTimeout);const a=s+i,o=e==="crawlDeath";setTimeout(this.dispose.bind(this),a);const l=Date.now()-this.crawlTime<3e3;o&&l&&this.animations.crawling.stop(),this.animations.idle.stopFading(),this.animations.walk.stopFading(),this.animations.run.stopFading(),this.animations.idle.stop(),this.animations.walk.stop(),this.animations.run.stop()}setTimeout(()=>{nt.dispatch("Enemy::Active",t),this.animationUpdate=!1},+t*i),Mt({changeBegin:this.disableShadow.bind(this),targets:this.material,opacity:+t,duration:i,easing:n,delay:s})}async loadCharacter(t){return this.load(t)}fallDeadAnimation(t){const e=Date.now()-this.fallTime<1500;this.falling&&e&&this.updateAnimation("Idle",t),this.toggleVisibility(!1,t)}headHit(t,e){if(!this.dead){if(this.stopSounds(),this.cancelAnimation(),this.hitting&&this.cancelHit(),!e&&this.life>t)return this.bodyHit(t);this.updateHitDamage(t)?this.falling&&this.fallDeadAnimation("headshot"):(this.toggleVisibility(!1,"headshot"),this.updateAnimation("Idle","headshot")),this.hitTime=Date.now(),this.running=!1}}bodyHit(t){if(this.dead)return;if(this.playHitSound(),this.cancelAnimation(),this.updateHitDamage(t)){this.dead&&this.fallDeadAnimation("death");return}if(this.dead){this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}else if(!this.hitting)this.previousAnimation=this.lastAnimation;else{this.cancelHit(),this.animations.idle.play(),this.currentAnimation=this.animations.idle;const i=this.previousAnimation==="run",n=this.lastAnimation==="run";if(this.running&&i&&n){if(this.updateHitDamage(this.life))return this.fallDeadAnimation("death");this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}}this.previousAnimation!=="hit"&&(this.animations.hit.time=this.hitStart,this.updateAnimation("Idle","hit",.1)),this.hitTimeout=setTimeout(()=>{if(this.dead||this.attacking)return;const i=this.previousAnimation==="hit",n=this.previousAnimation==="scream",s=this.previousAnimation.includes("Attack"),a=i||n||s;a||(this.animTimeout=this.updateAnimation(e,this.previousAnimation,.1)),this.hitTimeout=setTimeout(()=>{if(this.dead)return;this.hitting=!1;const o=this.distance<this.runDistance&&!this.running;this.distance<this.attackDistance?this.attack():o&&this.run()},+!a*100)},this.hitDuration-100);const e=this.animation;this.hitTime=Date.now(),this.hitting=!0}legHit(t){if(this.dead)return;this.playHitSound(),this.cancelAnimation();const e=Date.now(),i=e-this.hitTime,n=this.updateHitDamage(t);if(i<825&&i>600)return setTimeout(this.legHit.bind(this,t),825-i);if(this.hitting&&this.cancelHit(),n){this.dead&&this.falling&&this.toggleVisibility(!1,"crawlDeath");return}this.crawlTimeout=setTimeout(this.crawl.bind(this),2500),this.updateAnimation("Falling","falling",.1),this.hitTime=this.fallTime=e,this.running=!1,this.falling=!0,this.hitting=!0,this.moving=!1}crawl(t=3){this.dead||(this.crawlTime=Date.now(),this.crawlTimeout=this.updateAnimation("Crawling","crawling",t),this.crawling||(this.crawlAnimation=Mt({z:this.rotation.z*(t*-.1),targets:this.character.position,duration:t*1e3,easing:"linear"})),this.attacking=!1,this.crawling=!0,this.falling=!1,this.hitting=!1,this.moving=!0)}cancelAnimation(){this.attacking&&(this.animations.softAttack.stopFading(),this.animations.hardAttack.stopFading(),this.animations.softAttack.stop(),this.animations.hardAttack.stop(),clearTimeout(this.hittingTimeout),clearTimeout(this.attackTimeout),clearTimeout(this.animTimeout),this.attacking=!1),this.screaming&&(this.animations.scream.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.runTimeout),this.animations.scream.stop(),this.screaming=!1)}playHitSound(){this.stopSounds(),!this.falling&&this.playSound("hit")}stopSounds(){this.screaming?this.stopSound("scream"):this.attacking&&(this.stopSound("hardAttack"),this.stopSound("softAttack"))}cancelHit(){this.animations.hit.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.hitTimeout),this.animations.hit.stop()}idle(){if(this.dead)return;const t=+!this.attacking*.4+.1;this.updateAnimation("Idle","idle",t),this.attacking=!1,this.hitting=!1,this.running=!1,this.moving=!1}walk(){this.dead||(this.updateAnimation("Walking","walk"),this.hitting=!1,this.running=!1,this.moving=!0)}scream(){this.dead||(this.cancelHit(),this.moving=!1,this.hitting=!1,this.screamed=!0,this.screaming=!0,this.attacking=!1,this.runTimeout=setTimeout(()=>{this.playSound("scream"),this.runTimeout=setTimeout(()=>this.distance<this.attackDistance?this.attack():this.run(),this.screamDuration-250)},this.screamStart*1e3),this.animTimeout=this.updateAnimation("Idle","scream",this.screamStart))}run(){if(this.dead||this.playerDead)return;const t=+(this.attacking||this.screaming)*.1;this.updateAnimation("Running","run",t+.1),this.attacking=!1,this.screaming=!1,this.hitting=!1,this.running=!0,this.moving=!0}attack(){if(this.dead)return;const t=this.life>50&&Math.random()<.5;let e="crawlAttack",i=.5,n=2200,s=250;this.crawling||(e=t?"hardAttack":"softAttack",s=t?1300:1e3,n=t?3e3:2500,setTimeout(this.playSound.bind(this,e,!0),+!t*350+400),i=.166),this.updateAnimation("Idle",e,i),this.hittingTimeout=setTimeout(()=>{const{strong:a,soft:o}=vt.Gameplay.damage.enemy;this.canAttack&&nt.dispatch("Enemy::Attack",{position:this.position,damage:t?a:o})},s),this.attackTimeout=setTimeout(()=>{if(this.dead||this.crawling&&this.playerDead)return;const a=this.distance<(this.crawling?1.5:this.attackDistance);this.crawling?this.crawl(+a+1):a?this.idle():this.run()},i*1e3+n),this.screaming=!1,this.attacking=!0,this.screamed=!0,this.hitting=!1,this.running=!1,this.moving=!1}update(t,e){const i=e;return this.visible?(super.update(t),this.dead?this.position:(this.distance=this.object.position.distanceToSquared(i),this.character.lookAt(i.x,0,i.z),this.toggleAnimation(),this.position)):this.position}updateHitDamage(t){const e=this.falling||this.crawling,i=this.updateHealth(t);if(e){if(i&&this.crawling){let n;this.crawlAnimation?.completed||(this.character.position.z=this.rotation.z,this.crawlAnimation?.pause(),this.animations.falling.setEffectiveTimeScale(1).setEffectiveWeight(1).stopWarping().stopFading(),n=0),this.toggleVisibility(!1,"crawlDeath"),this.updateAnimation("Idle","crawlDeath",n)}}else return!1;return!0}toggleAnimation(){if(this.blockingAnimation)return;if(this.canAttack)return this.attack();if(this.crawling||!this.lose&&this.running)return;const t=this.distance>this.walkDistance,e=this.distance<this.runDistance,i=!t&&!e,n=!this.screamed&&e;this.lose&&this.moving&&t?this.idle():!this.moving&&i?this.walk():!(this.lose&&this.running)&&n&&this.scream()}dispose(){super.dispose(),this.removeHitBoxes(),this.character?.clear(),nt.dispatch("Enemy::Death",this.id),nt.dispatch("Enemy::Dispose",this.uuid,!0),nt.dispatch("Level::RemoveObject",this.object)}setDefaultState(){const t=this.getAnimationDuration("scream");this.screamDuration=t-333.3332538604736|0,this.screamStart=(t-this.screamDuration)/1e3;const e=this.getAnimationDuration("hit");this.hitDuration=e-233.3333015441895|0,this.hitStart=(e-this.hitDuration)/1e3,this.animations.softAttack.clampWhenFinished=!0,this.animations.hardAttack.clampWhenFinished=!0,this.animations.crawlDeath.clampWhenFinished=!0,this.animations.headshot.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.falling.clampWhenFinished=!0,this.animations.scream.clampWhenFinished=!0,this.animations.hit.clampWhenFinished=!0,this.animations.softAttack.setLoop(bi,0),this.animations.hardAttack.setLoop(bi,0),this.animations.crawlDeath.setLoop(bi,0),this.animations.headshot.setLoop(bi,0),this.animations.death.setLoop(bi,0),this.animations.falling.setLoop(bi,0),this.animations.scream.setLoop(bi,0),this.animations.hit.setLoop(bi,0);const{idle:i}=this.animations;this.currentAnimation=i,this.createHitBoxes(),i.play()}createHitBoxes(){this.addHeadHitBox(),this.addBodyHitBox(),this.addLegsHitBox()}removeHitBoxes(){for(let t=this.hitBoxes.length;t--;)delete this.hitBoxes[t];this.hitBoxes.splice(0)}addHeadHitBox(){const t=this.character.getObjectByName("Head"),e=new de(new Dn(15,10,22),on.HitBox.clone());e.position.y+=9.5,e.position.z+=2,e.userData.enemy=this.id,this.hitBoxes.push(e),t.add(e)}addBodyHitBox(){const t=this.character.getObjectByName("Spine"),e=new de(new vm(38,95,40,2,25),on.HitBox.clone());e.position.y+=15,e.position.z+=2.5,e.position.x-=1,e.userData.enemy=this.id,this.hitBoxes.push(e),t.add(e)}addLegsHitBox(){const t=this.character.getObjectByName("RightUpLeg"),e=this.character.getObjectByName("LeftUpLeg"),i=this.character.getObjectByName("RightLeg"),n=this.character.getObjectByName("LeftLeg"),s=new de(new Dn(16,50,15),on.HitBox.clone()),a=new de(new Dn(10,50,10),on.HitBox.clone());a.userData.enemy=this.id,s.userData.enemy=this.id,a.position.y-=22.5,a.position.z-=2.5,s.position.y-=20;const o=s.clone(),l=s.clone(),c=a.clone(),h=a.clone();o.position.x+=1,l.position.x-=1,this.hitBoxes.push(o),this.hitBoxes.push(l),this.hitBoxes.push(c),this.hitBoxes.push(h),t.add(o),e.add(l),i.add(c),n.add(h)}disableShadow(){this.dead&&this.mesh.traverse(t=>{const e=t;e.isMesh&&(e.castShadow=!1)})}get blockingAnimation(){return this.attacking||this.falling||this.screaming||this.playerDead||super.blockingAnimation}get material(){return this.mesh.children[0].children[0].material}get animation(){const t=this.running?"Running":this.moving?"Walking":"Idle";return this.falling?"Falling":this.crawling?"Crawling":t}set playerDeath(t){(this.playerDead=t)&&this.moving&&this.idle()}get hitBox(){return this.hitBoxes}get canAttack(){return!this.playerDead&&this.distance<(this.crawling?1.5:this.attackDistance)}get index(){return this.id}}function cT(r,t=r.length,e=0){for(;t;)e=Ke(0,1)*t--|0,[r[t],r[e]]=[r[e],r[t]]}function hT(r){return JSON.parse(JSON.stringify(r))}function uT(r){return r[Oh(0,r.length-1)]}function $l(r){let t=r.length,e=1/0;for(;t--;)r[t]<e&&(e=r[t]);return e}function jl(r){let t=r.length,e=-1/0;for(;t--;)r[t]>e&&(e=r[t]);return e}const Ag=r=>{const t=hT(r.bounds),{boundOffset:e}=vt.RandomCoords;t.unshift(t.pop());const i=t.slice(0,t.length/2).slice(4),n=t.slice(t.length/2).slice(4),s=r.minCoords[1]+e,a=r.maxCoords[1]-e,o=[r.portals[2],r.portals[3],r.portals[4],r.portals[5]],l=[r.portals[6],r.portals[7],r.portals[0],r.portals[1]],c=Ke(s,a);if(c>l[0][1]){const m=$l(l.map(g=>g[0])),y=jl(l.map(g=>g[0]));return[Ke(m,y),c]}if(c<o[0][1]){const m=$l(o.map(g=>g[0])),y=jl(o.map(g=>g[0]));return[Ke(m,y),c]}let h,u,d,f;for(let m=0,y=i.length-1;m<y;m++)if(i[m][1]>c&&i[m+1][1]<c){d=i[m][0]+e,u=n[y-m][0]-e,h=i[m+1][0]+e,f=n[y-m-1][0]-e;break}return[Ke(Math.max(d,h),Math.min(f,u))|0,c|0]},ha=class ai{static getRandomLevelCoords(t,e,i){ai.playerCoords.set(t,e);do i=ai.setRandomCoords();while(i<ai.distance);return cT(ai.coords),ai.levelCoords.toArray()}static addLevelCoords(t){return ai.coords.push(t)===ai.ammount}static setRandomCoords(){return ai.levelCoords.fromArray(uT(ai.coords)),ai.levelCoords.distanceToSquared(ai.playerCoords)}static fillRandomLevelCoords(){for(let t=ai.ammount;t--;)ai.coords.push(Ag({minCoords:kt.minCoords,maxCoords:kt.maxCoords,portals:kt.portals,bounds:kt.bounds}))}};ha.levelCoords=new Et,ha.playerCoords=new Et,ha.coords=[],ha.ammount=vt.RandomCoords.ammount,ha.distance=vt.RandomCoords.playerDistance**2;let ql=ha;class dT{constructor(t){this.envMap=t,this.onHeadHit=this.headHit.bind(this),this.onBodyHit=this.bodyHit.bind(this),this.onLegHit=this.legHit.bind(this),this.onDeath=this.death.bind(this),this.positions=[],this.enemyPosition=new D,this.enemies=[],this.spawnedEnemies=0,new Tg().loadCharacter(t).then(e=>{this.enemyModel=e,this.spawnEnemy([0,0])}),this.addEvents()}addEvents(){nt.add("Enemy::Death",this.onDeath),nt.add("Hit::Head",this.onHeadHit),nt.add("Hit::Body",this.onBodyHit),nt.add("Hit::Leg",this.onLegHit)}spawnEnemy(t){const e=new Tg(this.enemyModel,this.envMap,this.spawnedEnemies++);this.enemyPosition.set(t[0],e.collider.position.y,t[1]),e.teleport(this.enemyPosition),this.positions.push(new D().copy(this.enemyPosition)),si.setCharacter(e.collider),this.enemies.push(e)}headHit(t){const{enemy:e,damage:i,headshot:n}=t.data,s=this.getEnemyIndex(e);this.enemies[s].headHit(i,n)}bodyHit(t){const{enemy:e,damage:i}=t.data,n=this.getEnemyIndex(e);this.enemies[n].bodyHit(i)}legHit(t){const{enemy:e,damage:i}=t.data,n=this.getEnemyIndex(e);this.enemies[n].legHit(i)}death(t){const e=this.getEnemyIndex(t.data);this.positions.splice(e,1),this.enemies.splice(e,1)}update(t,e){for(let i=this.enemies.length;i--;){const n=this.enemies[i].update(t,e);this.enemies[i].alive?this.positions[i].copy(n):this.positions[i].setScalar(NaN)}return this.positions}spawnMultiple(t,e,i=2){const n=this.enemies.length-1;i=Math.min(vt.Gameplay.maxEnemies-n,i);for(let s=i;s--;)this.spawnEnemy(ql.getRandomLevelCoords(t,e))}getHitDirection(t,e,i){let n=Math.atan2(t.z-e.z,t.x-e.x);const s=Zg(i);let a="Front";return Math.abs(s)>Qt.m075?(n=Math.abs(n),a=n<Qt.d4?"Right":n>Qt.m075?"Left":"Front"):s<-Qt.d4&&s>-Qt.m075?(n*=-1,a=n<-Qt.d4&&n>-Qt.m075?"Right":n<Qt.m075&&n>Qt.d4?"Left":"Front"):Math.abs(s)<Qt.d4?(n=Math.abs(n),a=n>Qt.m075?"Right":n<Qt.d4?"Left":"Front"):s<Qt.m075&&s>Qt.d4&&(n*=-1,a=n<Qt.m075&&n>Qt.d4?"Right":n<-Qt.d4&&n>-Qt.m075?"Left":"Front"),a}getEnemy(t){return this.enemies.find(e=>e.collider.uuid===t)}getEnemyIndex(t){return this.enemies.findIndex(e=>e.index===t)}removeEvents(){nt.remove("Enemy::Death"),nt.remove("Hit::Head"),nt.remove("Hit::Body"),nt.remove("Hit::Leg")}dispose(){for(let t=this.enemies.length;t--;)this.enemies[t].dispose(),delete this.enemies[t];this.enemyModel.scene.clear(),this.positions.splice(0),this.enemies.splice(0),this.removeEvents()}get colliders(){const t=[];for(let e=this.enemies.length;e--;)t.push(...this.enemies[e].hitBox);return t}set playerDead(t){for(let e=this.enemies.length;e--;)this.enemies[e].playerDeath=t}}const Bu=class js{constructor(t){this.player=t,this.paused=!0,this.move=no}static get moves(){return js.directions}static get moving(){return js.directions.includes(1)}static get idle(){return!js.moving}static get runs(){return js.running}static set runs(t){js.running=t}get disabled(){return this.paused||!this.player.alive}set pause(t){this.paused=t}get movement(){return js.moves.join("")}dispose(){this.paused=!0}};Bu.directions=[0,0,0,0],Bu.running=!1;let Wt=Bu;const Yl=14;function fT(){return typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)}class pT extends Wt{constructor(t){super(t),this.player=t,this.moveTouchId=null,this.lookTouchId=null,this.joyOrigin={x:0,y:0},this.lookLast={x:0,y:0},this.aimActive=!1,this.wheelTime=0,this.aimTime=0,this.move=no,this.root=document.createElement("div"),this.root.className="yazh-mobile-controls pn-allow-scroll",this.root.innerHTML=`
      <div class="yazh-joy-zone" data-zone="move"><div class="yazh-joy-knob"></div></div>
      <div class="yazh-look-zone" data-zone="look"></div>
      <div class="yazh-actions">
        <button type="button" data-action="run" aria-label="Run">RUN</button>
        <button type="button" data-action="reload" aria-label="Reload">R</button>
        <button type="button" data-action="weapon" aria-label="Switch weapon">W</button>
        <button type="button" data-action="aim" aria-label="Aim">AIM</button>
        <button type="button" data-action="shoot" aria-label="Shoot">FIRE</button>
      </div>`,document.body.appendChild(this.root),this.bindControls()}bindControls(){const t=this.root.querySelector('[data-zone="move"]'),e=this.root.querySelector('[data-zone="look"]'),i=this.root.querySelector(".yazh-joy-knob");t.addEventListener("touchstart",n=>this.onMoveStart(n,i),{passive:!1}),t.addEventListener("touchmove",n=>this.onMoveMove(n,i),{passive:!1}),t.addEventListener("touchend",n=>this.onMoveEnd(n,i),{passive:!1}),t.addEventListener("touchcancel",n=>this.onMoveEnd(n,i),{passive:!1}),e.addEventListener("touchstart",n=>this.onLookStart(n),{passive:!1}),e.addEventListener("touchmove",n=>this.onLookMove(n),{passive:!1}),e.addEventListener("touchend",n=>this.onLookEnd(n),{passive:!1}),e.addEventListener("touchcancel",n=>this.onLookEnd(n),{passive:!1}),this.root.querySelectorAll("[data-action]").forEach(n=>{const s=n.dataset.action;n.addEventListener("touchstart",a=>{a.preventDefault(),this.onAction(s,!0)},{passive:!1}),n.addEventListener("touchend",a=>{a.preventDefault(),this.onAction(s,!1)},{passive:!1})})}onMoveStart(t,e){if(this.disabled||this.moveTouchId!==null)return;const i=t.changedTouches[0];this.moveTouchId=i.identifier;const n=t.currentTarget.getBoundingClientRect();this.joyOrigin={x:n.left+n.width/2,y:n.top+n.height/2},this.updateMove(i.clientX,i.clientY,e),t.preventDefault()}onMoveMove(t,e){const i=[...t.changedTouches,...t.touches].find(n=>n.identifier===this.moveTouchId);i&&(this.updateMove(i.clientX,i.clientY,e),t.preventDefault())}onMoveEnd(t,e){[...t.changedTouches].some(i=>i.identifier===this.moveTouchId)&&(this.moveTouchId=null,Wt.moves[jt.UP]=0,Wt.moves[jt.DOWN]=0,Wt.moves[jt.LEFT]=0,Wt.moves[jt.RIGHT]=0,e.style.transform="translate(-50%, -50%)",this.player.idle(),this.move=no,t.preventDefault())}updateMove(t,e,i){if(this.disabled)return;let n=t-this.joyOrigin.x,s=e-this.joyOrigin.y;const a=Math.hypot(n,s)||1,o=52;a>o&&(n=n/a*o,s=s/a*o),i.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${s}px))`,Wt.moves[jt.UP]=s<-Yl?1:0,Wt.moves[jt.DOWN]=s>Yl?1:0,Wt.moves[jt.LEFT]=n<-Yl?1:0,Wt.moves[jt.RIGHT]=n>Yl?1:0;const l=this.movement;this.move!==l&&(Wt.runs&&Wt.moves[jt.UP]?this.player.run(!0):this.player.move()),this.move=l}onLookStart(t){if(this.disabled||this.lookTouchId!==null)return;const e=t.changedTouches[0];this.lookTouchId=e.identifier,this.lookLast={x:e.clientX,y:e.clientY},t.preventDefault()}onLookMove(t){const e=[...t.changedTouches,...t.touches].find(s=>s.identifier===this.lookTouchId);if(!e||this.disabled)return;const i=e.clientX-this.lookLast.x,n=e.clientY-this.lookLast.y;this.lookLast={x:e.clientX,y:e.clientY},this.player.rotate(i/-80,n/320,.12),t.preventDefault()}onLookEnd(t){[...t.changedTouches].some(e=>e.identifier===this.lookTouchId)&&(this.lookTouchId=null,t.preventDefault())}onAction(t,e){if(!this.disabled)switch(t){case"shoot":e?this.player.startShooting():this.player.stopShooting();break;case"aim":e?(this.aimActive=!0,this.aimTime=Date.now(),this.player.startAiming(!1)):this.aimActive&&(this.aimActive=!1,clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const i=!!Wt.moves[jt.UP];this.player.stopAiming(Wt.runs&&i),i&&Wt.runs?this.player.run(!0):this.player.move()},120));break;case"reload":e&&this.player.reload();break;case"weapon":{if(!e)return;const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());break}case"run":Wt.runs=e,e?this.player.run(!0):this.player.move();break}}dispose(){this.root.remove(),super.dispose()}}class mT extends Zn{constructor(){super(...arguments),this.noop=()=>{}}addEventListener(t,e,i){super.addEventListener(t,e)}dispatchEvent(t){t.stopPropagation=this.noop,t.preventDefault=this.noop,super.dispatchEvent(t)}removeEventListener(t,e,i){super.removeEventListener(t,e)}}var zu=new mT;class zn extends Wt{constructor(t){super(t),this.wheelTime=0,this.aimTime=0,this.events=Object.entries({contextmenu:this.onContextMenu.bind(this),mousewheel:this.onMouseWheel.bind(this),mousedown:this.onMouseDown.bind(this),mousemove:this.onMouseMove.bind(this),mouseup:this.onMouseUp.bind(this),keydown:this.onKeyDown.bind(this),keyup:this.onKeyUp.bind(this)}),this.addEventListeners()}addEventListeners(){const t=vt.worker?zu:document;for(const[e,i]of this.events)t.addEventListener(e,i,!1)}onContextMenu(t){if(!this.paused)return t.stopPropagation(),t.preventDefault(),!1}onMouseWheel(t){const e=Date.now();t.stopPropagation(),!this.disabled&&e>this.wheelTime&&(this.wheelTime=e+450,this.player.changeWeapon())}onMouseDown(t){if(t.preventDefault(),t.stopPropagation(),!this.disabled){if(t.button===io.LEFT)this.player.startShooting();else if(t.button===io.RIGHT){const e=this.move!==no;this.player.startAiming(e),this.aimTime=Date.now()}}}onMouseMove(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&this.player.rotate(t.movementX/-100,t.movementY/400,.15)}onMouseUp(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(t.button===io.LEFT?this.player.stopShooting():t.button===io.RIGHT&&(clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const e=!!Wt.moves[jt.UP],i=Wt.runs&&e;this.player.stopAiming(i),i?this.player.run(!0):this.player.move()},Math.max(450-(Date.now()-this.aimTime),0))))}onKeyDown(t){if(t.preventDefault(),t.stopPropagation(),this.disabled)return;switch(this.onShift(t.code,!0),t.code){case"KeyW":Wt.moves[jt.UP]=1,Wt.moves[jt.DOWN]=0;break;case"KeyD":Wt.moves[jt.RIGHT]=1,Wt.moves[jt.LEFT]=0;break;case"KeyS":Wt.moves[jt.DOWN]=1,Wt.moves[jt.UP]=0;break;case"KeyA":Wt.moves[jt.RIGHT]=0,Wt.moves[jt.LEFT]=1;break;default:return}const e=this.movement;this.move!==e&&this.player.move(),this.move=e}onKeyUp(t){if(t.preventDefault(),t.stopPropagation(),this.disabled)return;switch(this.onShift(t.code,!1),t.code){case"KeyW":Wt.moves[jt.UP]=0;break;case"KeyD":Wt.moves[jt.RIGHT]=0;break;case"KeyS":Wt.moves[jt.DOWN]=0;break;case"KeyA":Wt.moves[jt.LEFT]=0;break;case"KeyQ":case"KeyE":{const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());return}case"KeyC":return this.player.changeCamera(!0);case"KeyV":return this.player.changeCamera(!1);case"KeyR":return this.player.reload();default:return}const e=this.movement;e===no?this.player.idle():this.move!==e&&this.player.move(),this.move=e}onShift(t,e){const i=e?!Wt.runs:Wt.runs;t==="ShiftLeft"&&i&&(this.player.run(e),Wt.runs=e)}removeEventListeners(){const t=vt.worker?zu:document;for(const[e,i]of this.events)t.removeEventListener(e,i,!1)}dispose(){this.removeEventListeners(),super.dispose()}}var jt=(r=>(r[r.UP=0]="UP",r[r.RIGHT=1]="RIGHT",r[r.DOWN=2]="DOWN",r[r.LEFT=3]="LEFT",r))(jt||{}),io=(r=>(r[r.LEFT=0]="LEFT",r[r.WHEEL=1]="WHEEL",r[r.RIGHT=2]="RIGHT",r))(io||{});const no="0000";var Vs=(r=>(r.Pistol="pistol",r.Rifle="rifle",r))(Vs||{});class gT extends ig{constructor(){super(vt.Player),this.modelRotation=new _i,this.lastAnimation="pistolIdle",this.equipRifle=!1,this.hasRifle=!1,this.reloading=!1,this.shooting=!1,this.aiming=!1,this.shootTime=0,this.idleTime=0,this.aimTime=0}async loadCharacter(t){const e=await this.load(t);this.hand=e.scene.getObjectByName("swatRightHand"),nt.dispatch("Level::AddObject",this.object),this.currentAnimation=this.animations.pistolIdle,this.animations.rifleReload.clampWhenFinished=!0,this.animations.rifleAim.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.rifleReload.setLoop(bi,1),this.animations.rifleAim.setLoop(bi,1),this.animations.death.setLoop(bi,1),Xt.setTo(e.scene),this.currentAnimation.play(),this.rotate(-Math.PI,0)}rotate(t,e,i=.25){const n=e>0,s=this.mesh,a=+Xt.isFPS,o=this.rotation.y;if(s.rotateOnWorldAxis(mi.UP,t),this.running)return;const l=a*-.2-.2;i=Math.min(i+a*i,.25),(n&&o>=l||!n&&o<=i)&&s.rotateOnAxis(mi.RIGHT,e)}idle(){const t=Date.now(),e=Math.max(350-(t-this.idleTime),0);if(this.blockingAnimation||e)return setTimeout(this.idle.bind(this),e);nt.dispatch("Player::Aim",!this.equipRifle,!0),nt.dispatch("Player::Run",!1,!0);const i=this.getWeaponAnimation("Idle");this.lastAnimation!==i&&(this.hasRifle&&this.rifle.updatePosition(0),this.running=this.moving=!1,Xt.runAnimation(!1),this.idleTime=t,setTimeout(this.updateAnimation.bind(this,"Idle",i),+(this.lastAnimation===i)*100))}move(){if(this.blockingAnimation){this.reloading&&(this.moving=zn.moving);return}const t=this.movementAnimation,e=this.getWeaponAnimation(t);this.lastAnimation!==e&&(this.updateAnimation(t,e),this.running=!1,this.moving=t!=="Idle",this.moving&&Xt.runAnimation(!1),this.hasRifle&&this.rifle.updatePosition(1),nt.dispatch("Player::Run",!1,!0),nt.dispatch("Player::Aim",!1,!0))}run(t){if(this.blockingAnimation||this.running===t)return;const e=this.getWeaponAnimation("Run");if(!t||this.lastAnimation===e)return this.running=!1,zn.moving?this.move():setTimeout(this.idle.bind(this),150);zn.moves[jt.UP]&&(this.hasRifle&&this.rifle.updatePosition(1.5),nt.dispatch("Player::Run",!0,!0),this.running=this.moving=!0,this.updateAnimation("Run",e),Xt.runAnimation(!0),this.resetRotation(!0))}hit(t,e){if(this.dead||this.updateHealth(e)||this.hitting)return;this.aiming&&this.stopAiming(this.running);const i=this.getHitAnimation(t),n=+!this.equipRifle*100+1200;nt.dispatch("Player::Aim",!1,!0),this.updateAnimation("Idle",i),clearTimeout(this.reloadTimeout),Xt.isFPS&&(Xt.headAnimation(t,n*.5),this.equipRifle&&this.weapon.toggleVisibility(0,n+100,0)),this.playSound("hit",!0),this.weapon.stopReloading(),this.toggleMesh(!1),setTimeout(()=>{if(this.hitting=!1,this.dead)return this.toggleMesh(!0);zn.runs?this.run(!0):this.move();const s=zn.idle&&!this.equipRifle;nt.dispatch("Player::Aim",s,!0),setTimeout(this.toggleMesh.bind(this,!0),100)},n),this.reloading=!1,this.running=!1,this.hitting=!0,this.moving=!1}startAiming(t){if(this.blockingAnimation)return;this.weapon.aiming=this.aiming=!0,nt.dispatch("Player::Run",!1,!0),Xt.runAnimation(!1),Xt.aimAnimation(!0,this.equipRifle),Xt.updateNearPlane(!0,this.equipRifle);const e=this.equipRifle?"rifleAim":"pistolIdle";setTimeout(this.toggleMesh.bind(this,!0),300),this.aimTime=+this.equipRifle*Date.now(),clearTimeout(this.animTimeout),this.weapon.setAim(),this.lastAnimation!==e&&((this.equipRifle||t)&&(this.animTimeout=this.updateAnimation("Idle",e)),this.running=this.moving=!1),this.aimTimeout=setTimeout(()=>nt.dispatch("Player::Aim",!Xt.isFPS,!0),300+ +this.equipRifle*300),!this.equipRifle&&setTimeout(()=>{this.currentAnimation.paused=!0,this.setMixerTime(.5)},400)}stopAiming(t){if(this.reloading)return;this.equipRifle&&clearTimeout(this.aimTimeout);const e=Math.min(Date.now()-this.aimTime,400);nt.dispatch("Player::Aim",!this.equipRifle,!0),!t&&Xt.aimAnimation(!1,this.equipRifle,e),Xt.isFPS&&t?Xt.setNearPlane(+this.equipRifle*.185+.315,0):Xt.updateNearPlane(!1,this.equipRifle),setTimeout(()=>this.weapon.aiming=this.aiming=!1,100),this.weapon.aiming=this.aiming=!1,this.currentAnimation.paused=!1,this.weapon.cancelAim(e),clearTimeout(this.animTimeout),this.toggleMesh(!1)}startShooting(t=Date.now()){if(this.equipRifle&&!this.aiming||this.moving||this.hitting||this.reloading||t-this.aimTime<500||t-this.shootTime<165)return;this.shooting=!0,this.shootTime=t;const e=this.weapon.shoot();e&&this.rotate(e.x,e.y),!this.equipRifle&&this.stopShooting()}stopShooting(){this.shooting=!1}reload(){const t=this.moving;if(this.blockingAnimation||this.weapon.full||!this.weapon.inStock)return;nt.dispatch("Player::Run",!1,!0),this.updateAnimation("Idle","rifleReload");const e=+this.running*.02+.13;this.running=this.moving=!1,Xt.setNearPlane(e,400),this.weapon.startReloading(),Xt.runAnimation(!1),this.reloading=!0,this.toggleMesh(!0),this.reloadTimeout=setTimeout(()=>{zn.idle&&(t||this.moving)&&this.weapon.stopReloading(),this.weapon.addAmmo(0),this.reloading=!1},2e3),this.animTimeout=setTimeout(()=>{this.dead||(this.toggleMesh(!1),this.weapon.stopReloading(),Xt.setNearPlane(.5,100),zn.runs?this.run(!0):this.move())},2500)}setPistol(t=this.weapon.walls,e){if(this.setWeapon(!1),e)this.pistol=e,this.weapon=this.pistol,this.weapon.walls=t,this.weapon.visible=!0,this.hand?.add(this.weapon.object);else{const i=this.weapon.targets;this.weapon=this.pistol,this.updateRiflePosition(!0),this.weapon.visible=!0,this.weapon.walls=t,this.rifle.toggle=!1,this.setTargets(i)}}setRifle(){this.rifle.walls=this.weapon.walls;const t=this.weapon.targets;this.weapon.visible=!1,this.rifle.toggle=!0,this.weapon=this.rifle,this.setTargets(t),this.setWeapon(!0)}setWeapon(t){nt.dispatch("Weapon::Change",t);let e=t?this.lastAnimation.replace(Vs.Pistol,Vs.Rifle):this.lastAnimation.replace(Vs.Rifle,Vs.Pistol);!t&&!this.animations[e]&&(e=e.replace(/BackwardLeft|BackwardRight/gm,"Backward"),e=e.replace(/ForwardLeft|ForwardRight/gm,"Forward")),this.lastAnimation!==e&&this.updateAnimation(this.playerAnimation,e),this.equipRifle=t}setTargets(t){this.weapon.targets=t}changeCamera(t){if(!t)Xt.changeShoulder(this.aiming,this.equipRifle);else if(!this.hitting){const e=this.equipRifle&&!this.aiming||!Xt.isFPS&&this.aiming;Xt.changeView(this.running,this.aiming,this.equipRifle),!Xt.isFPS&&this.resetRotation(),this.toggleVisibility(),setTimeout(()=>{const i=!this.moving&&!e;nt.dispatch("Player::Aim",i,!0)},+e*300)}}resetRotation(t=!1){if(t){const e=this.mesh,i=new _i().setFromAxisAngle(mi.RIGHT,this.rotation.y);this.modelRotation.copy(e.quaternion),this.modelRotation.multiply(i),Mt({targets:e.quaternion,easing:"easeInOutQuad",...this.modelRotation,duration:500})}else if(this.rotation.y<-.2){const e=this.rotation.y+.2;this.mesh.rotateOnAxis(mi.RIGHT,e)}}toggleMesh(t){Xt.isFPS&&this.equipRifle&&this.meshes.forEach(e=>e.material.opacity=+t)}toggleVisibility(){const t=+Xt.isFPS*250,e=+Xt.isFPS*150+250;this.weapon.toggleVisibility(t,e);const i=!(Xt.isFPS&&this.equipRifle&&!this.aiming);this.meshes.forEach(n=>{Mt({targets:n.material,delay:t,easing:"linear",duration:100,opacity:0}),i&&setTimeout(()=>Mt({targets:n.material,easing:"linear",duration:100,opacity:1}),e)})}changeWeapon(){if(!this.hasRifle||this.blockingAnimation)return;const t=!this.moving&&this.equipRifle;nt.dispatch("Player::Aim",t,!0),this.toggleMesh(!0),this.equipRifle?this.setPistol():this.setRifle(),Xt.updateNearPlane(this.aiming,this.equipRifle,this.running)}addRifle(t){this.rifle=t,this.rifle.toggle=!1,this.rifle.dummy.visible=!1,this.hand?.add(this.rifle.object),this.spine.add(this.rifle.dummy),this.updateRiflePosition(!0)}pickRifle(){this.rifle.dummy.visible=!this.equipRifle,this.updateRiflePosition(),this.rifle.addAmmo(),this.hasRifle||(this.rifle.addAmmo(0),this.hasRifle=!0)}updateRiflePosition(t=!1){const e=+this.running*.5+ +this.moving;t?this.rifle.append(e):this.rifle.updatePosition(e)}update(t){super.update(t),this.shooting&&this.startShooting()}updateAnimation(t,e,i=.1){return super.updateAnimation(t,e,i)}dispose(){clearTimeout(this.reloadTimeout),clearTimeout(this.animTimeout),clearTimeout(this.aimTimeout),this.pistol?.dispose(),this.weapon.dispose(),this.rifle.dispose(),delete this.pistol,delete this.hand,super.dispose()}die(){super.die();const t=+Xt.isFPS*500;Xt.isFPS&&this.changeCamera(!0),this.updateAnimation("Idle","death",.5),nt.dispatch("Player::Death",!0),nt.dispatch("Player::Aim",!1,!0),setTimeout(()=>nt.dispatch("Game::Quit",void 0,!0),t+5e3),clearTimeout(this.reloadTimeout),Xt.deathAnimation(t),this.weapon.stopReloading(),this.reloading=!1,this.shooting=!1,this.aiming=!1}getHitAnimation(t){return`${this.currentWeapon}${t}Hit`}getWeaponAnimation(t){return`${this.currentWeapon}${t}`}get blockingAnimation(){return this.aiming||this.hitting||this.reloading||super.blockingAnimation}get movementAnimation(){const t=zn.moves;let e=t[jt.UP]?"Forward":t[jt.DOWN]?"Backward":"";return!this.equipRifle&&!e?e=t[jt.LEFT]?"Left":t[jt.RIGHT]?"Right":e:this.equipRifle&&(e+=t[jt.LEFT]?"Left":t[jt.RIGHT]?"Right":""),e||"Idle"}get playerAnimation(){return this.lastAnimation.replace(this.currentWeapon,"")}get meshes(){return this.mesh.children[0].children[0].children}get location(){return{position:this.position,rotation:Jg(Math.atan2(-this.rotation.x,this.rotation.z))}}get currentWeapon(){return this.equipRifle?Vs.Rifle:Vs.Pistol}get spine(){return this.mesh.children[0].children[1].children[0]}}class yT{constructor(){this.update=this.updateScreen.bind(this),this.callbacks=[],this.ratio=16/9,this.height=0,this.width=0,typeof window<"u"&&(this.root=document.documentElement.style,this.root.setProperty("--ratio",`${this.ratio}`),window.addEventListener("resize",this.update,!1),this.updateScreen())}updateScreen(){this.width=window.innerWidth,this.height=window.innerHeight,this.width/this.height<this.ratio?this.height=this.width/this.ratio:this.width=this.height*this.ratio,this.root.setProperty("--height",`${this.height}px`),this.root.setProperty("--width",`${this.width}px`);for(let t=this.callbacks.length;t--;)this.callbacks[t](this.width,this.height)}addResizeCallback(t){this.callbacks.indexOf(t)===-1&&this.callbacks.push(t)}removeResizeCallback(t){const e=this.callbacks.indexOf(t);e!==-1&&this.callbacks.splice(e,1)}dispose(){window.removeEventListener("resize",this.update,!1),this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}var xT=new yT;class _T{constructor(t,e,i=0,n=1/0){this.ray=new Ch(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ou(t,this,i,e),i.sort(Eg),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Ou(t[n],this,i,e);return i.sort(Eg),i}}function Eg(r,t){return r.distance-t.distance}function Ou(r,t,e,i){if(r.layers.test(t.layers)&&r.raycast(t,e),i===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)Ou(n[s],t,e,!0)}}class Kl extends fi{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const y=[],g=i/2;let p=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function _(){const M=new D,v=new D;let S=0;const T=(e-t)/i;for(let R=0;R<=s;R++){const b=[],w=R/s,F=w*(e-t)+t;for(let L=0;L<=n;L++){const C=L/n,U=C*l+o,N=Math.sin(U),G=Math.cos(U);v.x=F*N,v.y=-w*i+g,v.z=F*G,u.push(v.x,v.y,v.z),M.set(N,T,G).normalize(),d.push(M.x,M.y,M.z),f.push(C,1-w),b.push(m++)}y.push(b)}for(let R=0;R<n;R++)for(let b=0;b<s;b++){const w=y[b][R],F=y[b+1][R],L=y[b+1][R+1],C=y[b][R+1];h.push(w,F,C),h.push(F,L,C),S+=6}c.addGroup(p,S,0),p+=S}function x(M){const v=m,S=new Et,T=new D;let R=0;const b=M===!0?t:e,w=M===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const F=m;for(let L=0;L<=n;L++){const U=L/n*l+o,N=Math.cos(U),G=Math.sin(U);T.x=b*G,T.y=g*w,T.z=b*N,u.push(T.x,T.y,T.z),d.push(0,w,0),S.x=N*.5+.5,S.y=G*.5*w+.5,f.push(S.x,S.y),m++}for(let L=0;L<n;L++){const C=v+L,U=F+L;M===!0?h.push(U,U+1,C):h.push(U+1,U,C),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ku extends Kl{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ku(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}var Vu=[{bullet:!0,bulletPath:!1,bulletHoles:!1,fog:!0,volumetricFog:!1,raining:!0,raindrops:!1,softParticles:!1,clouds:0,dynamicClouds:!1,lighting:!1,physicalLights:!1},{bullet:!0,bulletPath:!1,bulletHoles:!0,fog:!1,volumetricFog:!1,raining:!0,raindrops:!0,softParticles:!1,clouds:300,dynamicClouds:!0,lighting:!0,physicalLights:!1},{bullet:!0,bulletPath:!0,bulletHoles:!0,fog:!0,volumetricFog:!0,raining:!0,raindrops:!0,softParticles:!0,clouds:1,dynamicClouds:!1,lighting:!0,physicalLights:!0}];const Rg=0,Cg=Vu[Rg],{length:vT}=Object.keys(Cg),Hu=vT;var MT=(r=>(r[r.LOW=Hu+0]="LOW",r[r.MEDIUM=Hu+1]="MEDIUM",r[r.HIGH=Hu+2]="HIGH",r))(MT||{});const Gu=class oo{constructor(){this.openDBConnection(this.getEnviromentSettings.bind(this))}updateVisualsStore(t,e=!0,i=Cg){const n=t.transaction("Visuals","readwrite"),s=n.objectStore("Visuals");for(const a in i){const o=a;oo.visuals.set(o,i[o]),s[e?"add":"put"](i[o],o).onerror=this.onQueryError.bind(this)}n.oncomplete=this.onTransactionComplete.bind(this,t,!1)}getEnviromentSettings(t,e=!1){const i=t.transaction("Visuals","readonly"),n=i.objectStore("Visuals");n.openCursor().onsuccess=s=>{const a=s.target.result;if(!a)return e?null:this.updateVisualsStore(t);const o=a.key;oo.visuals.set(o,a.value),a.continue(),e=!0},i.oncomplete=this.onTransactionComplete.bind(this,t,!0)}updateVisualValues(t){this.openDBConnection(e=>this.updateVisualsStore(e,!1,t))}onTransactionComplete(t,e){e&&nt.dispatch("Game::SettingsInit"),t.close()}onUpgradeNeeded(t){t.target.result.createObjectStore("Visuals")}openDBConnection(t){const e=indexedDB.open("YAZH");e.onerror=this.onRequestError.bind(this),e.onupgradeneeded=this.onUpgradeNeeded.bind(this),e.onsuccess=i=>{const n=i.target.result;t(n)}}resetVisualValues(t){this.updateVisualValues(Vu[t])}onRequestError(t){console.error("Settings DB Request Error:",t)}onQueryError(t){console.error("Settings DB Query Error:",t)}static getDefaultVisualValues(t=Rg){return new Map(Object.entries(Vu[t]))}static getVisualValue(t){return oo.visuals.get(t)}static getVisualValues(){return oo.visuals}};Gu.visuals=Gu.getDefaultVisualValues();let pe=Gu;const bT=10;class ST{constructor(t){this.config=t,this.width=1,this.height=.3,this.radius=.1,this.segments=8,this.rotation=new _i,this.pivot=new Jt().makeTranslation(0,this.width*-.5,0),this.acceleration=t.speed*Rp,this.speed=1/this.acceleration,this.createBullet()}async createBullet(){const t=await qt.Loader.loadTexture("bullet.png");this.bullet=new de(new ku(this.radius,this.height,this.segments),new Qh({map:t})),this.bullet.scale.setScalar(this.config.scale),pe.getVisualValue("bulletPath")&&this.bullet.add(await this.createPath())}async createPath(){const t=this.radius*1.2,e=await qt.Loader.loadShader("main.vert"),i=await qt.Loader.loadShader("shot/bullet.frag"),n=new de(new Kl(t,t,this.width,this.segments,1,!0),new Wi({uniforms:{color:{value:new Dt(Pe.WHITE)},traces:{value:0},time:{value:0}},fragmentShader:i,vertexShader:e,glslVersion:Mr,transparent:!0,depthWrite:!1,side:en}));return n.geometry.applyMatrix4(this.pivot),n.position.y-=this.height/2,n.scale.y=0,n}shoot(t,e){const i=this.config.position.z,{lifeTime:n}=this.config,s=this.bullet.clone(),a=+!e*.01+.01;return s.userData.direction=t.direction.clone(),s.userData.lifeTime=Date.now()+n,nt.dispatch("Level::AddObject",s),Oe.getWorldQuaternion(this.rotation),s.userData.direction.y+=a,s.quaternion.copy(this.rotation),s.position.copy(t.origin),s.rotateX(-1.56),s.translateY(i),s}update(t){const e=t.children[0];if(t.position.addScaledVector(t.userData.direction,this.acceleration),t.rotateY(.5),!e)return;const i=e.material;e.scale.y>=bT?i.uniforms.time.value+=.1:i.uniforms.traces.value=e.scale.y+=this.acceleration}dispose(){const t=this.bullet.material,e=this.bullet.children[0];e?.material?.dispose(),this.bullet.geometry.dispose(),t.map?.dispose(),e?.geometry.dispose(),t.dispose(),this.bullet.clear()}}class wT extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pg=new Jt,Wu=new Ch,Zl=new Er,Jl=new D;class Lg extends $e{constructor(t=new fi,e=new wT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(n),Zl.radius+=s,t.ray.intersectsSphere(Zl)===!1)return;Pg.copy(n).invert(),Wu.copy(t.ray).applyMatrix4(Pg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,y=f;m<y;m++){const g=c.getX(m);Jl.fromBufferAttribute(u,g),Ig(Jl,g,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,y=f;m<y;m++)Jl.fromBufferAttribute(u,m),Ig(Jl,m,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ig(r,t,e,i,n,s,a){const o=Wu.distanceSqToPoint(r);if(o<e){const l=new D;Wu.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Ql{constructor(t=o_){this.lerp=t,this.length=0,this.points=[]}addPoint(t,e){this.length=this.points.push([t,e])}getValue(t){let e=0;for(let n=0;n<this.length&&!(this.points[n][0]>=t);n++)e=n;const i=Math.min(this.length-1,e+1);return e===i?this.points[e][1]:this.lerp(this.points[e][1],this.points[i][1],(t-this.points[e][0])/(this.points[i][0]-this.points[e][0]))}dispose(){this.length=this.points.length=0}}const TT=Math.tan(Qt.d6)*2,AT=[0,0,0];class ET{constructor(t,e,i){this.config=t,this.smokeParticles=[],this.fireParticles=[],this.smokeAlpha=new Ql,this.smokeSize=new Ql,this.fireAlpha=new Ql,this.lightPower=0,this.geometry=new fi,this.createFireLight(e),this.createParticleGeometry(),this.createParticles(e,i)}createFireLight(t){const{intensity:e,position:{x:i,y:n}}=this.config,s=+pe.getVisualValue("physicalLights")+1;this.light=new Ep(Pe.FIRE,e*(3-s),1,s),this.lightPower=this.light.power,this.light.position.set(i,n,0),this.light.castShadow=!0,this.light.power=0,t.add(this.light)}createParticleGeometry(){this.geometry.setAttribute("smokeAngle",new $t([],1)),this.geometry.setAttribute("smokeAlpha",new $t([],1)),this.geometry.setAttribute("smokeSize",new $t([],1)),this.geometry.setAttribute("fireAngle",new $t([],1)),this.geometry.setAttribute("fireSize",new $t([],1)),this.geometry.setAttribute("position",new $t([],3)),this.geometry.setAttribute("blend",new Mh([],1)),this.fireAlpha.addPoint(0,0),this.fireAlpha.addPoint(.2,1),this.fireAlpha.addPoint(.5,1),this.fireAlpha.addPoint(1,0),this.smokeAlpha.addPoint(0,0),this.smokeAlpha.addPoint(.1,.1),this.smokeAlpha.addPoint(.5,.1),this.smokeAlpha.addPoint(1,0),this.smokeSize.addPoint(0,0),this.smokeSize.addPoint(.8,this.config.scale*.1),this.smokeSize.addPoint(1,this.config.scale*.12)}async createParticles(t,e){const i=await qt.Loader.loadTexture(`${e}/smoke.png`),n=await qt.Loader.loadTexture(`${e}/fire.png`),s=await qt.Loader.loadShader("shot/fire.vert"),a=await qt.Loader.loadShader("shot/fire.frag");this.material=new Wi({blendDst:eh,blendEquation:Ss,blending:vf,fragmentShader:a,vertexShader:s,blendSrc:Sf,glslVersion:Mr,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{smoke:{value:i},ratio:{value:null},fire:{value:n}}});const o=new Lg(this.geometry,this.material);o.position.x=this.config.position.x,o.position.y=this.config.position.y,o.renderOrder=2,t.add(o)}addParticles(){this.addFireParticle(),this.addSmokeParticles()}addFireParticle(){const t=Math.random()*.1+.1,e=this.config.scale*(Math.random()*.1+.15);this.fireParticles.push({rotation:Math.random()*Qt.m2,currentSize:e,maxLife:t,life:t,size:e,blend:0,alpha:0})}addSmokeParticles(){const[t,e]=this.config.particles,i=Oh(t,e);for(let n=i;n--;){const s=this.config.velocity*(i-n),a=Math.random()*.1+.4,o=this.config.scale*a;this.smokeParticles.push({rotation:Math.random()*Qt.m2,position:new D,currentSize:0,life:o,velocity:s,maxLife:o,blend:1,alpha:0})}}update(){this.updateParticles();const{length:t}=this.fireParticles;return this.light.power=t*this.lightPower,t?this.updateFireGeometry():this.updateSmokeGeometry(),!!(t||this.smokeParticles.length)}updateParticles(t=Rp){for(let e=this.fireParticles.length;e--;){const i=this.fireParticles[e];if((i.life-=.05)<=0)continue;const n=1-i.life/i.maxLife,s=this.fireAlpha.getValue(n);i.currentSize=i.size*s,i.alpha=s,i.rotation+=.025}this.fireParticles=this.fireParticles.filter(e=>e.life>0);for(let e=this.smokeParticles.length;e--;){const i=this.smokeParticles[e];if((i.life-=.01)<=0)continue;const n=1-i.life/i.maxLife;i.currentSize=this.smokeSize.getValue(n),i.alpha=this.smokeAlpha.getValue(n);const s=(e%2*2-1)*t,a=i.velocity*t;i.rotation+=s,i.position.y+=a,i.velocity-=a}this.smokeParticles=this.smokeParticles.filter(e=>e.life>0)}updateFireGeometry(){const t=[],e=[],i=[];for(let n=this.fireParticles.length;n--;){const s=this.fireParticles[n];t.push(s.rotation),i.push(s.currentSize),e.push(s.blend)}this.geometry.setAttribute("fireAngle",new $t(t,1)),this.geometry.setAttribute("fireSize",new $t(i,1)),this.geometry.setAttribute("position",new $t(AT,3)),this.geometry.setAttribute("blend",new Mh(e,1)),this.geometry.attributes.fireAngle.needsUpdate=!0,this.geometry.attributes.fireSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}updateSmokeGeometry(){const t=[],e=[],i=[],n=[],s=[];for(let a=this.smokeParticles.length;a--;){const o=this.smokeParticles[a],{x:l,y:c,z:h}=o.position;e.push(o.rotation),s.push(o.currentSize),i.push(o.alpha),n.push(o.blend),t.push(l,c,h)}this.geometry.setAttribute("smokeAngle",new $t(e,1)),this.geometry.setAttribute("smokeAlpha",new $t(i,1)),this.geometry.setAttribute("smokeSize",new $t(s,1)),this.geometry.setAttribute("position",new $t(t,3)),this.geometry.setAttribute("blend",new Mh(n,1)),this.geometry.attributes.smokeAngle.needsUpdate=!0,this.geometry.attributes.smokeAlpha.needsUpdate=!0,this.geometry.attributes.smokeSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}resize(t){this.material.uniforms.ratio.value=t/TT}dispose(){this.material.uniforms.smoke.value.dispose(),this.material.uniforms.fire.value.dispose(),this.smokeParticles.splice(0),this.fireParticles.splice(0),this.smokeAlpha.dispose(),this.smokeSize.dispose(),this.fireAlpha.dispose(),this.geometry.dispose(),this.material.dispose(),this.light.dispose()}}class RT extends Ji{constructor(t,e,i,n){super();const s=[],a=[],o=[],l=new I,c=new wt;c.makeRotationFromEuler(i),c.setPosition(e);const h=new wt;h.copy(c).invert(),u(),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(a,3)),this.setAttribute("uv",new _n(o,2));function u(){let y=[];const g=new I,p=new I,_=t.geometry,x=_.attributes.position,M=_.attributes.normal;if(_.index!==null){const v=_.index;for(let S=0;S<v.count;S++)g.fromBufferAttribute(x,v.getX(S)),p.fromBufferAttribute(M,v.getX(S)),d(y,g,p)}else for(let v=0;v<x.count;v++)g.fromBufferAttribute(x,v),p.fromBufferAttribute(M,v),d(y,g,p);y=f(y,l.set(1,0,0)),y=f(y,l.set(-1,0,0)),y=f(y,l.set(0,1,0)),y=f(y,l.set(0,-1,0)),y=f(y,l.set(0,0,1)),y=f(y,l.set(0,0,-1));for(let v=0;v<y.length;v++){const S=y[v];o.push(.5+S.position.x/n.x,.5+S.position.y/n.y),S.position.applyMatrix4(c),s.push(S.position.x,S.position.y,S.position.z),a.push(S.normal.x,S.normal.y,S.normal.z)}}function d(y,g,p){g.applyMatrix4(t.matrixWorld),g.applyMatrix4(h),p.transformDirection(t.matrixWorld),y.push(new Dg(g.clone(),p.clone()))}function f(y,g){const p=[],_=.5*Math.abs(n.dot(g));for(let x=0;x<y.length;x+=3){let M=0,v,S,T,R;const b=y[x+0].position.dot(g)-_,w=y[x+1].position.dot(g)-_,F=y[x+2].position.dot(g)-_,L=b>0,C=w>0,U=F>0;switch(M=(L?1:0)+(C?1:0)+(U?1:0),M){case 0:{p.push(y[x]),p.push(y[x+1]),p.push(y[x+2]);break}case 1:{if(L&&(v=y[x+1],S=y[x+2],T=m(y[x],v,g,_),R=m(y[x],S,g,_)),C){v=y[x],S=y[x+2],T=m(y[x+1],v,g,_),R=m(y[x+1],S,g,_),p.push(T),p.push(S.clone()),p.push(v.clone()),p.push(S.clone()),p.push(T.clone()),p.push(R);break}U&&(v=y[x],S=y[x+1],T=m(y[x+2],v,g,_),R=m(y[x+2],S,g,_)),p.push(v.clone()),p.push(S.clone()),p.push(T),p.push(R),p.push(T.clone()),p.push(S.clone());break}case 2:{L||(v=y[x].clone(),S=m(v,y[x+1],g,_),T=m(v,y[x+2],g,_),p.push(v),p.push(S),p.push(T)),C||(v=y[x+1].clone(),S=m(v,y[x+2],g,_),T=m(v,y[x],g,_),p.push(v),p.push(S),p.push(T)),U||(v=y[x+2].clone(),S=m(v,y[x],g,_),T=m(v,y[x+1],g,_),p.push(v),p.push(S),p.push(T));break}}}return p}function m(y,g,p,_){const x=y.position.dot(p)-_,M=g.position.dot(p)-_,v=x/(x-M);return new Dg(new I(y.position.x+v*(g.position.x-y.position.x),y.position.y+v*(g.position.y-y.position.y),y.position.z+v*(g.position.z-y.position.z)),new I(y.normal.x+v*(g.normal.x-y.normal.x),y.normal.y+v*(g.normal.y-y.normal.y),y.normal.z+v*(g.normal.z-y.normal.z)))}}}class Dg{constructor(t,e){this.position=t,this.normal=e}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class CT{constructor(t,e){this.orientation=new sn,this.rotation=new Jt,this.position=new D,this.holes=[],this.origin=new D,this.scale=new D,this.surface=["defaultMaterial002_24","defaultMaterial002_39"],this.scale.setScalar(e*.5),qt.Loader.loadTexture(`${t}/hole.png`).then(i=>{this.material=new _m({polygonOffsetFactor:-.1,polygonOffset:!0,transparent:!0,depthWrite:!1,depthTest:!0,map:i})})}show(t){if(this.surface.includes(t.object.name))return;this.position.copy(t.point),this.origin.copy(this.position),this.origin.add(t.face.normal),this.rotation.lookAt(this.origin,this.position,mi.UP),this.orientation.setFromRotationMatrix(this.rotation),this.orientation.z=Math.random()*Qt.m2;const e=new RT(t.object,t.point,this.orientation,this.scale);this.holes.push(new de(e,this.material.clone()));const i=this.holes.length-1,n=this.holes[i];nt.dispatch("Level::AddObject",n),Mt({complete:this.remove.bind(this,i),targets:n.material,easing:"linear",duration:1e3,opacity:0,delay:5e3})}remove(t){if(!this.holes[t])return;const e=this.holes[t];e.material.map?.dispose(),e.material.dispose(),e.geometry.dispose(),delete this.holes[t],nt.dispatch("Level::RemoveObject",e)}dispose(){for(let t=this.holes.length;t--;)this.remove(t);this.material.dispose(),this.holes.splice(0)}}class PT{constructor(){this.paused=!0,this.lastTime=0,this.callbacks=[],this.onUpdate=this.update.bind(this)}add(t){this.callbacks.indexOf(t)===-1&&this.callbacks.push(t)}update(t){this.raf=requestAnimationFrame(this.onUpdate);const e=t-(this.lastTime||0);for(let i=this.callbacks.length;i--;)this.callbacks[i](e,t);this.lastTime=t}remove(t){const e=this.callbacks.indexOf(t);e!==-1&&this.callbacks.splice(e,1)}dispose(){cancelAnimationFrame(this.raf),this.callbacks.length=0}set pause(t){this.paused!==t&&((this.paused=t)?cancelAnimationFrame(this.raf):this.raf=requestAnimationFrame(this.onUpdate))}}var qi=new PT;class Fg{constructor(t){this.config=t,this.onUpdate=this.updateAimSign.bind(this),this.onShoot=this.updateBullets.bind(this),this.bullets=new Map,this.hits=[],this.raycaster=new _T,this.camera=new D,this.offset=new D,this.origin=new D,this.targets=[],this.walls=[],this.aimed=!1,this.aiming=!1,pe.getVisualValue("bullet")&&(this.bullet=new ST(t.bullet)),this.magazine=t.magazine,this.loadedAmmo=t.ammo,this.totalAmmo=t.ammo}async load(t){const{emissive:e=Pe.BLACK,emissiveIntensity:i=1}=this.config;this.weapon=(await qt.Loader.loadGLTF(this.config.model)).scene,this.weapon.traverse(s=>{const a=s,o=a.material;a.isMesh&&(a.castShadow=a.receiveShadow=!0,a.material=new Qh({emissiveIntensity:i,transparent:!0,map:o.map,side:Bi,roughness:.75,metalness:.25,emissive:e,envMap:t}))}),this.weapon.position.copy(this.config.position),this.weapon.rotation.copy(this.config.rotation),this.weapon.scale.copy(this.config.scale);const n=this.weapon.clone();return this.fire=new ET(this.config.fire,this.weapon,this.config.textures),pe.getVisualValue("bulletHoles")&&(this.hole=new CT(this.config.textures,this.config.bullet.scale)),n}playSound(t,e){const{stop:i,pistol:n,delay:s}=e;i&&this.stopSound(t,n),nt.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!0,sfx:t,delay:s,pistol:n},!0)}stopSound(t,e){nt.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!1,sfx:t,pistol:e},!0)}updateRaycaster(t=!0,e=this.targets){this.camera.setFromMatrixPosition(Oe.matrixWorld),this.raycaster.ray.origin.copy(t?this.camera.clone().add(this.spread):this.camera),this.raycaster.ray.direction.copy(mi.FORWARD).unproject(Oe).sub(this.camera).normalize(),this.hits.splice(0)&&this.raycaster.intersectObjects(e,!1,this.hits)}toggleAimSign(t=!1){nt.dispatch("Weapon::Aim",t,!0),this.aimed=t}removeBullet(t){const e=this.bullets.get(t);e&&(e.clear(),this.bullets.delete(t),nt.dispatch("Level::RemoveObject",e))}getEvent(t){return t?t===1?"Hit::Body":"Hit::Leg":"Hit::Head"}updateAimSign(){if(!this.aiming)return this.aimed&&this.toggleAimSign(!1);this.updateRaycaster(!1);const t=!!this.hits.length;this.aimed!==t&&this.toggleAimSign(t)}startReloading(){}stopReloading(){}resize(t){this.fire?.resize(t)}addAmmo(){}animateRecoil(){const{x:t,y:e}=this.weapon.position,i=this.recoil;return Mt({targets:this.weapon.rotation,easing:"easeInOutSine",direction:"alternate",z:i.y/5,duration:50}),Mt({targets:this.weapon.position,easing:"easeInOutSine",direction:"alternate",y:e-i.y*7.5,x:t-i.y*15,duration:50}),i}updateBullets(){!this.fire.update()&&qi.remove(this.onShoot),this.bullets.forEach((t,e)=>{Date.now()<t.userData.lifeTime?this.bullet.update(t):this.removeBullet(e)})}shoot(){if(this.empty)return this.playSound("empty",{stop:!1});const t=this.target,e=this.targets[t],i=this.animateRecoil();let n;if(!this.bullets.size&&qi.add(this.onShoot),nt.dispatch("Player::Shoot",!0,!0),this.bullet){const{ray:h}=this.raycaster;n=this.bullet.shoot(h,this.aiming),this.bullets.set(n.uuid,n)}if(this.fire.addParticles(),this.loadedAmmo--,this.totalAmmo--,this.playSound("shoot",{stop:!0}),this.playSound("bullet",{stop:!1,delay:.5}),t<0)return this.updateRaycaster(!1,this.walls),this.hits.length&&this.hole?.show(this.hits[0]),i;const s=t%6,a=this.getEvent(s),o=!s&&Math.random()<this.config.headshot,l=o&&100||this.getDamage(s);n&&this.removeBullet(n.uuid);const{enemy:c}=e.userData;return nt.dispatch(a,{enemy:c,damage:l,headshot:o}),i}dispose(){this.bullets.forEach((t,e)=>{const i=t.children[0],n=t.material;i.material.dispose(),n.map?.dispose(),t.geometry.dispose(),n.dispose(),i.geometry.dispose(),this.removeBullet(e)}),qi.remove(this.onUpdate),qi.remove(this.onShoot),this.bullet?.dispose(),this.targets.splice(0),this.walls.splice(0),this.hole?.dispose(),this.weapon.clear(),this.fire.dispose()}set visible(t){qi[t?"add":"remove"](this.onUpdate),this.weapon.children[0].visible=t}get originOffset(){const{x:t,y:e}=this.config.bullet.position;return this.aiming?e:t}get spread(){let{x:t,y:e}=this.config.spread;const i=+!this.aiming*.5+.5;return t=Ke(-t,t)*i,e=Ke(-e,e)*i,this.offset.set(t,e-.003,0)}get recoil(){const{x:t,y:e}=this.config.recoil,i=+!this.aiming*.5+.5;return{x:Ke(-t,t)*i,y:e*i}}get target(){return this.updateRaycaster(),this.weapon.getWorldPosition(this.origin),this.origin.y+=this.originOffset,this.raycaster.ray.origin.copy(this.origin),this.hits.length?this.targets.indexOf(this.hits[0].object):-1}get inStock(){return this.totalAmmo-this.loadedAmmo}get empty(){return!this.loadedAmmo}get full(){return this.loadedAmmo===this.magazine}get object(){return this.weapon}}class LT extends Fg{constructor(t){super(vt.Pistol),this.position=vt.Pistol.position,this.rotation=vt.Pistol.rotation,this.damage=vt.Gameplay.damage.pistol,this.load(t)}playSound(t,e){super.playSound(t,{...e,pistol:!0})}stopSound(t){super.stopSound(t,!0)}setAim(){Mt({targets:this.object.rotation,y:this.rotation.y+.015,x:this.rotation.x,easing:"linear",duration:200,delay:200,z:-.06}),Mt({targets:this.object.position,x:this.position.x,z:this.position.z,easing:"linear",duration:200,delay:200,y:-4.45})}cancelAim(t){Mt({targets:this.object.rotation,x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,easing:"linear",duration:t}),Mt({targets:this.object.position,x:this.position.x,y:this.position.y,z:this.position.z,easing:"linear",duration:t})}toggleVisibility(t,e,i=100){this.object.children[0].children.forEach(n=>{const{material:s}=n;Mt({targets:s,easing:"linear",opacity:0,delay:t,duration:i}),setTimeout(()=>Mt({targets:s,easing:"linear",opacity:1,duration:i}),e)})}getDamage(t){const{head:e,body:i,leg:n}=this.damage;return t?t===1?i:n:e}dispose(){super.dispose()}}class IT extends Fg{constructor(t){super(vt.Rifle),this.spinePosition=vt.Rifle.spinePosition,this.spineRotation=vt.Rifle.spineRotation,this.position=vt.Rifle.position,this.rotation=vt.Rifle.rotation,this.damage=vt.Gameplay.damage.rifle,this.maxStock=vt.Rifle.maxStock,this.appended=!1,this.spawned=!1,this.load(t)}async load(t){const e=await super.load(t);return this.spine=e.clone(),e.scale.copy(vt.Rifle.worldScale),nt.dispatch("Level::AddObject",e),e.rotation.set(0,0,0),e.visible=!1,this.clone=e,e}setAim(){this.object.rotation.set(this.rotation.x-.1,Math.PI-.028,-.1),this.object.position.set(this.position.x,-1,-2)}cancelAim(){Mt({targets:this.object.rotation,easing:"easeInOutSine",x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,duration:50,delay:50}),Mt({targets:this.object.position,easing:"easeInOutSine",x:this.position.x,y:this.position.y,z:this.position.z,duration:50,delay:50})}toggleVisibility(t,e,i=100){const{material:n}=this.object.children[0];Mt({targets:n,easing:"linear",opacity:0,delay:t,duration:i}),setTimeout(()=>Mt({targets:n,easing:"linear",opacity:1,duration:i}),e)}addAmmo(t=vt.Rifle.magazine){if(t){this.playSound("pick",{stop:!1});const e=Math.min(this.inStock+t,this.maxStock);this.totalAmmo=e+ +!this.empty*this.loadedAmmo}else{const e=Math.min(Math.min(this.magazine-this.loadedAmmo,this.magazine),this.totalAmmo);this.loadedAmmo+=e,nt.dispatch("Weapon::Reload",{loaded:this.loadedAmmo,inStock:this.inStock,ammo:this.totalAmmo})}}getDamage(t){const{head:e,body:i,leg:n}=this.damage;return t?t===1?i:n:e}startReloading(){this.object.position.set(this.position.x,this.position.y,0),this.object.rotation.set(this.rotation.x,this.rotation.y,0),this.playSound("reload",{stop:!0})}stopReloading(){!this.aiming&&this.reset()}update(t){if(!this.spawned)return;this.clone.rotation.y-=.025;const e=this.clone.position.distanceToSquared(t);this.inStock<this.maxStock&&e<6.25&&(nt.dispatch("Player::PickRifle",this.clone),nt.dispatch("Rifle::Pick",null,!0),this.clone.visible=!1,this.spawned=!1)}spawn(t){this.clone.position.set(t[0],1.75,t[1]),nt.dispatch("Rifle::Spawn",t,!0),this.clone.visible=!0,this.spawned=!0}updatePosition(t){this.appended&&Mt({targets:this.spine.position,duration:+!t*100,x:t*10-10,easing:"linear"})}append(t){this.spine.position.copy(this.spinePosition),this.spine.rotation.copy(this.spineRotation),this.appended=!0,this.updatePosition(t)}reset(){this.object.position.copy(this.position),this.object.rotation.copy(this.rotation),this.appended=!1}dispose(){this.clone.clear(),super.dispose()}set toggle(t){this.spine.visible=!t,this.visible=t}get onStage(){return this.spawned}get dummy(){return this.spine}}class tc{constructor(){this.fps=!1,this.runTimeout=0,this.shakeDuration=0,this.rightShoulder=!0,this.position=new D,this.shakePower=.025,this.clock=new ym,this.shakeAttenuation=1,this.onRunning=this.run.bind(this),this.fpRifleAim=new D(-.1541,1.524,.5);const t=xT.size.ratio;this.camera=new pi(45,t,+this.fps*.215+.1),this.camera.far=vt.Level.depth,this.setCamera(),this.updateState()}setCamera(){const t=this.getPosition(),e=+!this.fps*2.5+22.5;this.camera.rotation.set(0,Math.PI,0),this.camera.setFocalLength(e),this.camera.position.copy(t)}updateState(){const{aspect:t,near:e,far:i,fov:n}=this.camera;tc.state={matrix:this.camera.matrixWorld,aspect:t,near:e,far:i,fov:n}}getPosition(t=!1,e=!1,i=!1){if(this.fps&&e&&i)return this.fpRifleAim;const{idle:n,run:s,aim:a}=vt.Camera[this.fps?"fps":"tps"];return this.position.copy(t?s:e?a:n),this.position.x-=+(!this.fps&&this.rightShoulder&&e&&i)*.125,this.position.x*=+(!this.fps&&!this.rightShoulder)*-2+1,this.position}changeView(t,e,i){this.fps=!this.fps,this.updateNearPlane(e,i);const{x:n,y:s,z:a}=this.getPosition(t,e,i);Mt({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:n,y:s,z:a})}updateNearPlane(t,e,i){const s=+(this.camera.near===.5)*-300+400,a=t?.03:this.fps?e?.5:.315:.1;this.fps&&i&&e&&(this.camera.position.z=.2),this.camera.near!==a&&this.setNearPlane(a,s)}setNearPlane(t,e){Mt({complete:()=>this.camera.updateProjectionMatrix(),update:()=>this.camera.updateProjectionMatrix(),targets:this.camera,easing:"linear",duration:e,near:t})}changeShoulder(t,e){if(this.fps)return;let{x:i}=this.camera.position;this.rightShoulder=!this.rightShoulder,t&&e&&(i=vt.Camera.tps.aim.x,i-=+this.rightShoulder*.125,i*=+this.rightShoulder*-2+1),Mt({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:-i})}aimAnimation(t,e,i=400){const{x:n,y:s,z:a}=this.getPosition(!1,t,e);t&&qi.remove(this.onRunning),t&&Mt({targets:this.camera.rotation,easing:"linear",duration:250,y:Math.PI}),Mt({targets:this.camera.position,easing:"easeInOutQuad",delay:+t*100,duration:i,x:n,y:s,z:a})}headAnimation(t,e){const{x:i,y:n,z:s}=this.camera.position,{x:a,y:o,z:l}=this.camera.rotation,c={x:0,y:0,z:0},h={x:0,y:0,z:0};switch(t){case"Front":c.y=.2,h.x=-.2;break;case"Left":c.x=-.5,c.y=.5,h.x=.5,h.y=-1;break;case"Right":c.x=.36,c.y=-.2,h.x=.5,h.y=.55;break}Mt({targets:this.camera.position,direction:"alternate",easing:"easeOutSine",duration:e,x:i+c.x,y:n+c.y,z:s+c.z}),Mt({targets:this.camera.rotation,direction:"alternate",easing:"easeOutSine",duration:e,x:a+h.x,y:o+h.y,z:l+h.z})}shakeAnimation(t){if(this.shakeDuration=Math.max(t,0),this.shakeDuration){const e=this.clock.getDelta(),i=mi.random().multiplyScalar(this.shakePower);setTimeout(()=>this.shakeAnimation(this.shakeDuration),e),this.shakeDuration-=e*this.shakeAttenuation,this.camera.position.add(i)}else this.camera.position.copy(this.getPosition())}runAnimation(t){if(t&&this.runTimeout)return;this.runTimeout=t?setTimeout(()=>qi.add(this.onRunning),500):this.dispose();const e=this.getPosition(t),{x:i,y:n,z:s}=e;this.runDelta=0,!this.camera.position.equals(e)&&Mt({targets:this.camera.position,easing:"easeOutQuad",duration:300,x:i,y:n,z:s})}run(){this.runDelta+=.25;const t=+this.fps+1,e=Math.sin(this.runDelta),i=Math.cos(this.runDelta/2);this.camera.position.y+=e*t/100,this.camera.rotation.y-=i*t/500}deathAnimation(t){const{x:e,z:i}=vt.Camera.tps.idle;Mt({targets:this.camera.position,easing:"easeInOutQuad",duration:500,z:i-1,y:.75,delay:t,x:e})}setTo(t){t.add(this.camera)}resize(){this.camera.updateProjectionMatrix()}dispose(){return clearTimeout(this.runTimeout),qi.remove(this.onRunning),0}static get config(){return tc.state}get object(){return this.camera}get isFPS(){return this.fps}}const Ug=new tc,Oe=Ug.object;var Xt=Ug;const Xu=new wt;class ec{constructor(t){t=t||{},this.vertices={near:[new I,new I,new I,new I],far:[new I,new I,new I,new I]},t.projectionMatrix!==void 0&&this.setFromProjectionMatrix(t.projectionMatrix,t.maxFar||1e4)}setFromProjectionMatrix(t,e){const i=t.elements[11]===0;return Xu.copy(t).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(n){n.applyMatrix4(Xu)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(n){n.applyMatrix4(Xu);const s=Math.abs(n.z);i?n.z*=Math.min(e/s,1):n.multiplyScalar(Math.min(e/s,1))}),this.vertices}split(t,e){for(;t.length>e.length;)e.push(new ec);e.length=t.length;for(let i=0;i<t.length;i++){const n=e[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i-1]);if(i===t.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i])}}toSpace(t,e){for(let i=0;i<4;i++)e.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(t),e.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(t)}}const Ng=new wt,$u=new ec,On=new I,so=new ge,ju=[],qu=[],Yu=new wt,Bg=new wt,DT=new I(0,1,0);class FT{constructor(t){t=t||{},this.camera=t.camera,this.parent=t.parent,this.cascades=t.cascades||3,this.maxFar=t.maxFar||1e5,this.mode=t.mode||"practical",this.shadowMapSize=t.shadowMapSize||2048,this.shadowBias=t.shadowBias||1e-6,this.lightDirection=t.lightDirection||new I(1,-1,1).normalize(),this.lightIntensity=t.lightIntensity||1,this.lightNear=t.lightNear||1,this.lightFar=t.lightFar||2e3,this.lightMargin=t.lightMargin||200,this.customSplitsCallback=t.customSplitsCallback,this.fade=!1,this.mainFrustum=new ec,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let t=0;t<this.cascades;t++){const e=new ff(16777215,this.lightIntensity);e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,e.shadow.camera.near=this.lightNear,e.shadow.camera.far=this.lightFar,e.shadow.bias=this.shadowBias,this.parent.add(e),this.parent.add(e.target),this.lights.push(e)}}initCascades(){const t=this.camera;t.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const t=this.frustums;for(let e=0;e<t.length;e++){const n=this.lights[e].shadow.camera,s=this.frustums[e],a=s.vertices.near,o=s.vertices.far,l=o[0];let c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),m=.25*Math.pow(f,2)*(d-u.near);h+=m}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){const t=this.camera,e=Math.min(t.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,t.near,e,this.breaks);break;case"logarithmic":n(this.cascades,t.near,e,this.breaks);break;case"practical":s(this.cascades,t.near,e,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,t.near,e,this.breaks);break}function i(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function n(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function s(a,o,l,c,h){ju.length=0,qu.length=0,n(a,o,l,qu),i(a,o,l,ju);for(let u=1;u<a;u++)h.push(vd.lerp(ju[u-1],qu[u-1],c));h.push(1)}}update(){const t=this.camera,e=this.frustums;Yu.lookAt(new I,this.lightDirection,DT),Bg.copy(Yu).invert();for(let i=0;i<e.length;i++){const n=this.lights[i],s=n.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,o=(s.top-s.bottom)/this.shadowMapSize;Ng.multiplyMatrices(Bg,t.matrixWorld),e[i].toSpace(Ng,$u);const l=$u.vertices.near,c=$u.vertices.far;so.makeEmpty();for(let h=0;h<4;h++)so.expandByPoint(l[h]),so.expandByPoint(c[h]);so.getCenter(On),On.z=so.max.z+this.lightMargin,On.x=Math.floor(On.x/a)*a,On.y=Math.floor(On.y/o)*o,On.applyMatrix4(Yu),n.position.copy(On),n.target.position.copy(On),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){}setupMaterial(t){t.defines=t.defines||{},t.defines.USE_CSM=1,t.defines.CSM_CASCADES=this.cascades,this.fade&&(t.defines.CSM_FADE="");const e=[],i=this,n=this.shaders;t.onBeforeCompile=function(s){const a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(e),s.uniforms.CSM_cascades={value:e},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},n.set(t,s)},n.set(t,null)}updateUniforms(){const t=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){const s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=t}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(t){for(;t.length<this.breaks.length;)t.push(new ae);t.length=this.breaks.length;for(let e=0;e<this.cascades;e++){const i=this.breaks[e],n=this.breaks[e-1]||0;t[e].x=n,t[e].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let t=0;t<this.lights.length;t++)this.parent.remove(this.lights[t].target),this.parent.remove(this.lights[t])}dispose(){const t=this.shaders;t.forEach(function(e,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),i.needsUpdate=!0}),t.clear()}}class Ku extends fi{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new D,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class UT{constructor(){this.coords=kt.portals,this.position=new D,this.player=new D,this.offset=new Et,this.triggers=this.coords.filter((t,e)=>!(e%2)).map((t,e,i)=>t[0]+(+(e<i.length/2)*-2+1)*-.1),this.createPortals()}async createPortals(){await this.createMaterial();for(let t=0,e=0;e<this.triggers.length;t+=2,e++){const i=this.coords[t][1],n=this.coords[t+1][1],s=Math.abs(i-n)/2,a=+(e<2)*2-1,o=s+.52,l=new de(new Ku(o,32,0,Math.PI),this.material);l.renderOrder=1,l.position.x=this.triggers[e],l.rotation.y=Qt.d2*a,l.position.z=i+s*-a,l.position.z+=vt.Level.portalsOffset[e],nt.dispatch("Level::AddObject",l)}}async createMaterial(){const t=await qt.Loader.loadShader("portal/main.vert"),e=await qt.Loader.loadShader("portal/main.frag"),i=pe.getVisualValue("volumetricFog"),n=new Dt(Pe.PORTAL),s=new Dt(Pe.MOON),a=vt.Level.fogDensity*(+!i*4+1);return this.material=new Wi({uniforms:{fogColor:{value:new Dt(Pe.FOG)},backgroundColor:{value:n},spikesColor:{value:s},fogDensity:{value:a},deltaTime:{value:0}},fragmentShader:e,vertexShader:t,glslVersion:Mr,transparent:!0}),this.material.defines={VOLUMETRIC_FOG:i},this.material.fog=pe.getVisualValue("fog"),this.material}topPortalArea(){if(this.player.z>this.coords[1][1]){if(this.player.x<=this.triggers[0])return this.offset.set(this.coords[0][0]-this.player.x,this.coords[0][1]-this.player.z),this.updatePosition(2,3),!0;if(this.player.x>=this.triggers[3])return this.offset.set(this.player.x-this.coords[6][0],this.coords[7][1]-this.player.z),this.updatePosition(4),!0}return!1}bottomPortalArea(){if(this.player.z<this.coords[2][1]){if(this.player.x<=this.triggers[1])return this.offset.set(-(this.coords[2][0]-this.player.x),this.coords[2][1]-this.player.z),this.updatePosition(0,1),!0;if(this.player.x>=this.triggers[2])return this.offset.set(this.player.x-this.coords[4][0],this.coords[5][1]-this.player.z),this.updatePosition(6),!0}return!1}updatePosition(t,e=t){const i=this.coords[t][0],n=Math.sign(i)*-.3;this.position.set(this.coords[t][0]-this.offset.x+n,this.player.y,this.coords[e][1]+this.offset.y)}update(t){this.material.uniforms.deltaTime.value+=t/10}portalPassed(t){return this.player.copy(t),this.topPortalArea()||this.bottomPortalArea()}setFogUniforms(t){this.material.onBeforeCompile=t}dispose(){this.material?.dispose(),this.triggers.splice(0)}get playerPosition(){return this.position}}const zg=Math.tan(Qt.d3)*3;class NT{constructor(t,e,i){this.renderer=t,this.scene=e,this.worker=i,this.minCoords=kt.minCoords.map(n=>n-5),this.maxCoords=kt.maxCoords.map(n=>n+5),this.geometry=new fi,this.delta=0,this.createRenderTargets(),this.createWorkerLoop(),this.createParticles()}createRenderTargets(){if(!pe.getVisualValue("softParticles"))return;const{width:t,height:e}=this.renderer.domElement,i=new gm(t,e,Es);this.renderTargets=[new Fn(t,e),new Fn(t,e)],i.format=Cs,i.minFilter=Se,i.magFilter=Se,this.renderTargets.forEach(n=>{n.depthTexture=i.clone(),n.texture.minFilter=Se,n.texture.magFilter=Se,n.texture.generateMipmaps=!1,n.texture.format=ii,n.stencilBuffer=!0,n.depthBuffer=!0})}async createParticles(){const{width:t,height:e}=this.renderer.domElement,i=await qt.Loader.loadShader("rain/main.vert"),n=await qt.Loader.loadShader("rain/main.frag");this.material=new Wi({uniforms:{soft:{value:pe.getVisualValue("softParticles")},screenSize:{value:new Et(t,e)},color:{value:new Dt(Pe.RAIN)},ratio:{value:e/zg},near:{value:Oe.near},far:{value:Oe.far},dropSize:{value:3},diffuse:{value:null},depth:{value:null}},blending:th,fragmentShader:n,vertexShader:i,glslVersion:Mr,transparent:!0,depthWrite:!1});const s=this.material.uniforms;this.drops=new Lg(this.geometry,this.material),this.renderTargets&&(s.depth.value=this.renderTargets[0].depthTexture),Promise.all(vt.Level.rain.map(qt.Loader.loadTexture.bind(qt.Loader))).then(a=>s.diffuse.value=a),this.drops.frustumCulled=!1,this.drops.renderOrder=2,this.scene.add(this.drops)}createWorkerLoop(){this.worker?.add("Rain::UpdateParticles",t=>this.updateParticleGeometry(t.data),{minCoords:this.minCoords,maxCoords:this.maxCoords}),this.worker?.post("Rain::UpdateParticles",{camera:Oe.position,delta:this.delta})}update(t){if(this.delta=t,!this.worker&&this.updateParticles(),this.renderTargets){const e=this.renderTargets[0];this.material.uniforms.depth.value=e.depthTexture,this.material.uniforms.near.value=Oe.near,this.material.uniforms.far.value=Oe.far,this.renderer.setRenderTarget(this.renderTargets[1]),this.renderer.render(this.scene,Oe),this.renderTargets[0]=this.renderTargets[1],this.renderTargets[1]=e,this.renderer.setRenderTarget(null)}}updateParticles(){const t=this.minCoords,e=this.maxCoords;this.updateParticleGeometry(Og({camera:Oe.position,minCoords:t,maxCoords:e,delta:this.delta}))}updateParticleGeometry(t){this.geometry.setAttribute("position",new $t(t[0],3)),this.geometry.setAttribute("angle",new $t(t[1],1)),this.geometry.setAttribute("alpha",new $t(t[2],1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.worker?.post("Rain::UpdateParticles",{camera:Oe.position,delta:this.delta})}resize(t,e){this.material&&(this.material.uniforms.ratio.value=e/zg,this.material.uniforms.screenSize.value.set(t,e)),this.renderTargets?.forEach(i=>{i.depthTexture.needsUpdate=!0,i.texture.needsUpdate=!0,i.setSize(t,e)})}dispose(){if(this.material){const t=this.material.uniforms.diffuse;this.material.uniforms.depth.value?.dispose(),t.value?.forEach(i=>i.dispose())}this.worker?.remove("Rain::UpdateParticles"),this.renderTargets?.forEach(t=>{t.depthTexture.dispose(),t.texture.dispose(),t.dispose()}),this.minCoords.splice(0),this.maxCoords.splice(0),this.material?.dispose(),this.geometry.dispose(),this.drops?.clear(),this.delta=0}}class Zu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new Zu(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class BT extends Zu{constructor(t){super(Pe.FOG,vt.Level.fogDensity*(+!t*4+1)),this.volumetric=t,this.shaders=[],this.materials=0,this.time=0,this.volumetric&&(this.loadShaders(),pe.getVisualValue("volumetricFog")&&qt.Loader.loadTexture(vt.Level.fog).then(e=>this.noise=e))}async loadShaders(){const t=await qt.Loader.loadShader("fog/pars.frag"),e=await qt.Loader.loadShader("fog/pars.vert"),i=await qt.Loader.loadShader("fog/main.frag"),n=await qt.Loader.loadShader("fog/main.vert");Pt.fog_pars_fragment=t,Pt.fog_pars_vertex=e,Pt.fog_fragment=i,Pt.fog_vertex=n}setShaderUniforms(t){t.uniforms.noise={value:this.noise},t.uniforms.fogTime={value:0},this.shaders.push(t),this.materials=this.shaders.length}update(t){if(this.volumetric){this.time+=t*.025;for(let e=0;e<this.materials;e++)this.shaders[e].uniforms.fogTime.value=this.time}}dispose(){this.volumetric&&(this.shaders.splice(0),this.noise?.dispose(),this.materials=0)}get setUniforms(){return this.setShaderUniforms.bind(this)}}class kt{constructor(t,e,i){this.objects=[],this.portals=new UT,this.clouds=new kn,this.scene=new rw,this.physicalLights=pe.getVisualValue("physicalLights");const n=pe.getVisualValue("raindrops");this.renderer=new nw({powerPreference:"high-performance",preserveDrawingBuffer:n,antialias:!0,canvas:t}),nt.add("Level::RemoveObject",this.removeGameObject.bind(this)),nt.add("Level::AddObject",this.addGameObject.bind(this)),this.pmrem=new qh(this.renderer),this.createColliders(),this.createEnvironment(i),this.createRenderer(e)}createColliders(){const{position:t,height:e,sidewalkHeight:i}=vt.Level;si.createGround(kt.minCoords,kt.maxCoords),si.createBounds({borders:kt.bounds,y:t.y,height:e},{borders:vt.Level.sidewalk,y:i*.5,height:i})}async createEnvironment(t){const e=pe.getVisualValue("fog"),i=pe.getVisualValue("raining"),n=pe.getVisualValue("lighting"),s=e&&pe.getVisualValue("volumetricFog"),a=await this.createSkybox(vt.Level.skybox),o=await this.loadLevel(vt.Level.model);o.position.copy(vt.Level.position),o.scale.copy(vt.Level.scale),n&&this.scene.add(this.clouds.flash),i&&(this.rain=new NT(this.renderer,this.scene,t)),e?(this.fog=new BT(s),this.scene.fog=this.fog,this.scene.background=new Dt(Pe.FOG),s&&this.portals.setFogUniforms(this.fog.setUniforms)):this.clouds.sky&&this.scene.add(this.clouds.sky),this.createLights(),o.traverse(c=>{const h=c,u=h.material;h.isMesh&&(u.opacity=1,u.alphaTest=1,u.side=Bi,u.envMap=a,h.renderOrder=1,this.objects.push(h),h.receiveShadow=!0,this.csm?.setupMaterial(u),this.fog&&s&&(u.onBeforeCompile=this.fog.setUniforms))});const l=this.getSceneEnvMap();nt.dispatch("Level::EnvMap",l)}async loadLevel(t){const e=await qt.Loader.loadGLTF(t);return this.scene.add(e.scene),e.scene}async createSkybox(t){const e=await qt.Loader.loadCubeTexture(t);return e.colorSpace=Lt,pe.getVisualValue("fog")||(this.scene.background=e),this.pmrem.compileCubemapShader(),this.pmrem.fromCubemap(e).texture}createLights(){const e=.25+ +!this.physicalLights*.1,i=new D(.925,-1.875,-1).normalize();this.scene.add(new sw(Pe.WHITE,.2)),this.csm=new FT({mode:"logarithmic",maxFar:Oe.far*10,lightFar:Oe.far,lightDirection:i,lightIntensity:e,camera:Oe,parent:this.scene,cascades:4}),this.csm.lights.forEach(n=>n.color.set(Pe.MOON)),this.csm.fade=!0}getSceneEnvMap(){return this.pmrem.fromScene(this.scene,0,Oe.near,Oe.far).texture}createRenderer(t){const e=+!this.physicalLights*.25+.25;this.renderer.debug.checkShaderErrors=!1,this.renderer.useLegacyLights=this.physicalLights,this.renderer.toneMapping=Tf,this.renderer.outputColorSpace=Lt,this.renderer.shadowMap.type=yf,this.renderer.setClearColor(Pe.BLACK,0),this.renderer.toneMappingExposure=e,this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0}removeGameObject(t){const e=t.data;this.scene.remove(e)}addGameObject(t){const e=t.data;this.scene.add(e)}render(t){this.renderer.render(this.scene,Oe),this.portals.update(t),this.rain?.update(t),this.fog?.update(t),this.clouds.update(),this.csm?.update()}resize(t,e){this.renderer.setSize(t,e,!1),this.rain?.resize(t,e),this.csm?.updateFrustums()}outOfBounds(t){return this.portals.portalPassed(t)&&this.portals.playerPosition||null}dispose(){for(this.fog?.dispose(),this.csm?.dispose(),this.rain?.dispose(),this.pmrem.dispose(),this.clouds.dispose(),this.portals.dispose(),this.renderer.dispose(),this.csm?.lights.forEach(t=>t.dispose()),nt.remove("Level::AddObject"),nt.remove("Level::RemoveObject");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.background instanceof Vr&&this.scene.background.dispose()}static get maxCoords(){return[jl(kt.bounds.map(t=>t[0])),jl(kt.bounds.map(t=>t[1]))]}static get minCoords(){return[$l(kt.bounds.map(t=>t[0])),$l(kt.bounds.map(t=>t[1]))]}static get portals(){return vt.Level.portals}static get bounds(){return vt.Level.bounds}static get center(){return new D((kt.maxCoords[0]+kt.minCoords[0])/2,0,(kt.maxCoords[1]+kt.minCoords[1])/2)}static get size(){return new Et(kt.maxCoords[0]-kt.minCoords[0],kt.maxCoords[1]-kt.minCoords[1])}set pause(t){this.clouds.pause=t}get walls(){return this.objects}}class kn{constructor(){this.count=pe.getVisualValue("clouds"),this.staticClouds=!pe.getVisualValue("dynamicClouds"),this.isLighting=pe.getVisualValue("lighting"),this.useFog=pe.getVisualValue("fog"),this.onShowLighting=this.showLighting.bind(this),this.onHideLighting=this.hideLighting.bind(this),this.rotation=new sn(Qt.d2,0,0),this.matrix=new Jt,this.paused=!0,this.isLighting&&this.createLighting(),this.createClouds()}createLighting(){const t=+(!this.useFog&&pe.getVisualValue("physicalLights"))+1;this.lighting=new Ep(Pe.BLUE,10,kn.height,t),this.lighting.position.set(0,kn.height,0),this.lighting.castShadow=!0,this.lighting.power=0}startLighting(){this.timeout=setTimeout(this.onShowLighting,1e3*(Math.random()*15+15))}showLighting(){this.updateLightingPosition(),this.lighting.power=100+Math.random()*150,setTimeout(this.onHideLighting,Math.random()*400+100),nt.dispatch("SFX::Thunder",this.lighting.position,!0)}updateLightingPosition(){this.clouds?(this.clouds.getMatrixAt(Oh(0,this.count-1),this.matrix),this.lighting.position.setFromMatrixPosition(this.matrix)):this.lighting.position.set(Ke(kt.minCoords[0],kt.maxCoords[0]),kn.height/vt.Level.height,Ke(kt.minCoords[1],kt.maxCoords[1])),this.lighting.position.y-=Math.random()*(this.lighting.position.y/4)}hideLighting(){!this.paused&&this.startLighting(),this.lighting.power=0}async createClouds(){if(!this.count||!this.isLighting&&this.useFog)return;const t=new Th(kn.height,16,16,0,Math.PI);t.rotateX(-Qt.d2);const e=new D,i=new $e;this.clouds=new i_(new Zo(kn.height,kn.height),new Wx({transparent:!0,depthWrite:!1,opacity:.25}),this.count);const n=new Vy(new de(t.toNonIndexed())).build();for(let s=0;s<this.count;s++)n.sample(e),i.position.copy(e),i.lookAt(mi.DOWN),i.updateMatrix(),this.clouds.setMatrixAt(s,i.matrix);this.clouds.position.copy(kt.center),this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.material.map=await qt.Loader.loadTexture(vt.Level.cloud)}update(){if(!(this.staticClouds||!this.clouds)){for(let t=0;t<this.count;t++){const e=t%2*2-1;this.clouds.getMatrixAt(t,this.matrix);const i=this.matrix.clone();this.rotation.setFromRotationMatrix(i),this.rotation.z+=Math.random()*e*.002,this.matrix.makeRotationFromEuler(this.rotation),this.matrix.copyPosition(i),this.clouds.setMatrixAt(t,this.matrix)}this.clouds.instanceMatrix.needsUpdate=!0}}dispose(){const t=this.clouds?.material;clearTimeout(this.timeout),t?.map?.dispose(),this.lighting?.dispose(),this.clouds?.dispose(),t?.dispose()}static get height(){return Math.max(kt.size.x,kt.size.y)}set pause(t){(this.paused=t)?clearTimeout(this.timeout):this.isLighting&&this.startLighting()}get sky(){return this.clouds}get flash(){return this.lighting}}let fs=[];const ro=new Ql,Ju=new D;let Qu=0;ro.addPoint(0,0),ro.addPoint(.5,0),ro.addPoint(.8,.5),ro.addPoint(1,.5);const Og=r=>{const{camera:t,delta:e}=r;return Ju.copy(t),Qu+=e,zT(r),OT(e),kT()},zT=r=>{const{minCoords:t,maxCoords:e}=r,i=Qu*100|0;Qu-=i/100;const n=i*50;for(let s=0;s<n;s++){const a=Math.random(),o=5.25-a*1.5,l=Math.random()*.1,c=Math.random()*25+50,h=-1+ +(Math.random()<.5)*2;fs.push({velocity:new D(0,-c,0),position:new D(Ke(t[0],e[0]),kn.height-a*50,Ke(t[1],e[1])),rotation:h*l,maxLife:o,alpha:0,life:o})}},OT=r=>{for(let t=0;t<fs.length;t++){const e=fs[t];if((e.life-=r)<=0)continue;const i=1-e.life/e.maxLife,n=e.velocity.clone(),{x:s,y:a,z:o}=n;e.position.add(n.multiplyScalar(r)),e.alpha=ro.getValue(i),n.multiplyScalar(.1).set(Math.sign(s)*Math.min(Math.abs(n.x),Math.abs(s)),Math.sign(a)*Math.min(Math.abs(n.y),Math.abs(a)),Math.sign(o)*Math.min(Math.abs(n.z),Math.abs(o))),e.velocity.sub(n)}fs=fs.filter(t=>t.life>0).sort((t,e)=>{const i=Ju.distanceToSquared(t.position),n=Ju.distanceToSquared(e.position);return i>n?-1:i<n?1:0})},kT=()=>{const r=[],t=[],e=[];for(let i=0,n=fs.length;i<n;i++){const{x:s,y:a,z:o}=fs[i].position,{rotation:l,alpha:c}=fs[i];r.push(s,a,o),e.push(l),t.push(c)}return[r,e,t]};class VT{constructor(t,e,i){this.worker=i,this.enemyKills=0,this.clock=new ym,this.player=new gT,this.loop=this.update.bind(this),this.controls=fT()?new pT(this.player):new zn(this.player),this.onSceneLoad=this.onLoad.bind(this),this.onPlayerHit=this.playerHit.bind(this),this.level=new kt(t,e,i),nt.dispatch("Game::LoopInit",null,!0),this.addEventListeners()}addEventListeners(){nt.add("Level::EnvMap",this.onSceneLoad),nt.add("Enemy::Attack",this.onPlayerHit),this.worker?.add("Level::GetRandomCoord",t=>{ql.addLevelCoords(t.data)?nt.dispatch("Loading::Complete",null,!0):this.worker?.post("Level::GetRandomCoord")},{minCoords:kt.minCoords,maxCoords:kt.maxCoords,portals:kt.portals,bounds:kt.bounds}),nt.add("Enemy::Active",t=>{!t.data&&this.onEnemyKill(),this.player.setTargets(this.enemies.colliders)}),nt.add("Player::PickRifle",()=>this.player.pickRifle()),nt.add("Player::Death",t=>this.enemies.playerDead=t.data)}async onLoad(t){const e=t.data;this.player.loadCharacter(e).then(()=>{si.setCharacter(this.player.collider),this.player.setPistol(this.level.walls,this.pistol),this.enemies=new dT(e),this.player.addRifle(this.rifle),this.createRandomCoords(),qi.add(this.loop)}),this.pistol=new LT(e),this.rifle=new IT(e)}start(){}playerHit(t){const{position:e,damage:i}=t.data,{position:n,rotation:s}=this.player.location,a=this.enemies.getHitDirection(e,n,s);this.player.hit(a,i)}createRandomCoords(){if(this.worker)return this.worker.post("Level::GetRandomCoord");ql.fillRandomLevelCoords(),nt.dispatch("Loading::Complete",null,!0)}onEnemyKill(){const{x:t,z:e}=this.player.location.position;this.enemies.spawnMultiple(t,e),!(++this.enemyKills%vt.Gameplay.rifleSpawn)&&this.spawnRifle(t,e)}spawnRifle(t,e){!this.rifle.onStage&&this.rifle.spawn(ql.getRandomLevelCoords(t,e))}update(){const t=Math.min(this.clock.getDelta(),.1),e=this.updateCharactersLocation(t);this.player.alive&&si.update(t),this.rifle.update(e),this.level.render(t),Xt.updateState()}updateCharactersLocation(t){this.player.update(t);const{location:e}=this.player,i=this.level.outOfBounds(e.position),n=this.enemies.update(t,e.position);return i&&this.player.teleport(i),nt.dispatch("Characters::Location",{player:e,enemies:n},!0),i??e.position}resize(t,e){this.level.resize(t,e),this.pistol.resize(e),this.rifle.resize(e),Xt.resize()}removeEventListeners(){this.worker?.remove("Level::GetRandomCoord"),nt.remove("Player::PickRifle"),nt.remove("Player::Death"),nt.remove("Level::EnvMap"),nt.remove("Enemy::Active"),nt.remove("Enemy::Attack")}dispose(){this.removeEventListeners(),this.controls.dispose(),this.enemies.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.level.dispose(),si.dispose(),Xt.dispose(),qi.dispose()}set inputs(t){this.controls.pause=t}set pause(t){this.level.pause=t,si.pause=t,qi.pause=t}}class HT{takeControl(t){const e=t.element;nt.add("Game::SettingsInit",()=>this.createMainLoop(e,t.pixelRatio)),this.resetDOMElements(),new pe}createMainLoop(t,e){this.loop=new VT(t,e),nt.remove("Game::SettingsInit")}resetDOMElements(){const t=self.DedicatedWorkerGlobalScope;self.HTMLCollection=t,self.SVGElement=t,self.NodeList=t,self.document=null,self.window=self}dispatch(t){zu.dispatchEvent(t)}resize(t){const{width:e,height:i}=t;this.loop.resize(e,i)}dispose(){this.loop.dispose()}start(){this.loop.start()}set inputs(t){this.loop.inputs=t}set pause(t){this.loop.pause=t}}var Hs=new HT;const GT=(r,t)=>{switch(r){case"EventsTarget::Dispatch":return Hs.dispatch(t);case"Rain::UpdateParticles":return Og(t);case"Level::GetRandomCoord":return Ag(t);case"Offscreen::Transfer":return Hs.takeControl(t);case"Game::Resize":return Hs.resize(t);case"Game::Inputs":{const{disabled:e}=t;return Hs.inputs=e}case"Game::Pause":{const{paused:e}=t;return Hs.pause=e}case"Game::Dispose":return Hs.dispose();case"Game::Start":return Hs.start()}return t};self.onmessage=r=>{const{event:t,params:e}=r.data,i=GT(t,e);self.postMessage({name:t,response:i})},self.onerror=r=>console.error(r);var WT=self})();
