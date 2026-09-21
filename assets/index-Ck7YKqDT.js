(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ra="180",Pl=0,Ta=1,Ll=2,Lo=1,Dl=2,si=3,Si=0,Et=1,ai=2,Kt=0,on=1,Aa=2,Ra=3,Ca=4,Do=5,Ui=100,Il=101,Ul=102,Nl=103,Fl=104,Ol=200,Io=201,kl=202,Bl=203,hr=204,gs=205,zl=206,Hl=207,Vl=208,Gl=209,Wl=210,Xl=211,ql=212,$l=213,Yl=214,ur=0,fr=1,pr=2,dn=3,mr=4,gr=5,vr=6,xr=7,Uo=0,jl=1,Kl=2,bi=0,Zl=1,Jl=2,Ql=3,ed=4,td=5,id=6,nd=7,No=300,cn=301,hn=302,_r=303,yr=304,bs=306,br=1e3,Oi=1001,wr=1002,Pt=1003,sd=1004,Hn=1005,xt=1006,As=1007,ki=1008,Wt=1009,Fo=1010,Oo=1011,An=1012,aa=1013,zi=1014,li=1015,pn=1016,oa=1017,la=1018,Rn=1020,ko=35902,Bo=35899,zo=1021,Ho=1022,Ct=1023,Cn=1026,Pn=1027,Vo=1028,da=1029,Go=1030,ca=1031,ha=1033,cs=33776,hs=33777,us=33778,fs=33779,Sr=35840,Er=35841,Mr=35842,Tr=35843,Ar=36196,Rr=37492,Cr=37496,Pr=37808,Lr=37809,Dr=37810,Ir=37811,Ur=37812,Nr=37813,Fr=37814,Or=37815,kr=37816,Br=37817,zr=37818,Hr=37819,Vr=37820,Gr=37821,Wr=36492,Xr=36494,qr=36495,$r=36283,Yr=36284,jr=36285,Kr=36286,rd=3200,ad=3201,od=0,ld=1,yi="",Nt="srgb",un="srgb-linear",vs="linear",$e="srgb",Wi=7680,Pa=519,dd=512,cd=513,hd=514,Wo=515,ud=516,fd=517,pd=518,md=519,La=35044,Da="300 es",jt=2e3,xs=2001;class mn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,Zr=180/Math.PI;function Un(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Be(n,e,t){return Math.max(e,Math.min(t,n))}function gd(n,e){return(n%e+e)%e}function Cs(n,e,t){return(1-t)*n+t*e}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],d=i[s+1],c=i[s+2],h=i[s+3];const f=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==f||d!==m||c!==x){let p=1-o;const u=l*f+d*m+c*x+h*_,T=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const L=Math.sqrt(M),P=Math.atan2(L,u*T);p=Math.sin(p*P)/L,o=Math.sin(o*P)/L}const S=o*T;if(l=l*p+f*S,d=d*p+m*S,c=c*p+x*S,h=h*p+_*S,p===1-o){const L=1/Math.sqrt(l*l+d*d+c*c+h*h);l*=L,d*=L,c*=L,h*=L}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],d=i[s+2],c=i[s+3],h=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+c*h+l*m-d*f,e[t+1]=l*x+c*f+d*h-o*m,e[t+2]=d*x+c*m+o*f-l*h,e[t+3]=c*x-o*h-l*f-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,d=o(i/2),c=o(s/2),h=o(r/2),f=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*c*h+d*m*x,this._y=d*m*h-f*c*x,this._z=d*c*x+f*m*h,this._w=d*c*h-f*m*x;break;case"YXZ":this._x=f*c*h+d*m*x,this._y=d*m*h-f*c*x,this._z=d*c*x-f*m*h,this._w=d*c*h+f*m*x;break;case"ZXY":this._x=f*c*h-d*m*x,this._y=d*m*h+f*c*x,this._z=d*c*x+f*m*h,this._w=d*c*h-f*m*x;break;case"ZYX":this._x=f*c*h-d*m*x,this._y=d*m*h+f*c*x,this._z=d*c*x-f*m*h,this._w=d*c*h+f*m*x;break;case"YZX":this._x=f*c*h+d*m*x,this._y=d*m*h+f*c*x,this._z=d*c*x-f*m*h,this._w=d*c*h-f*m*x;break;case"XZY":this._x=f*c*h-d*m*x,this._y=d*m*h-f*c*x,this._z=d*c*x+f*m*h,this._w=d*c*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],d=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-d)*m,this._z=(a-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+d)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-d)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-s)/m,this._x=(r+d)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+a*o+s*d-r*l,this._y=s*c+a*l+r*o-i*d,this._z=r*c+a*d+i*l-s*o,this._w=a*c-i*o-s*l-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,o),h=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,d=2*(a*s-o*i),c=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*d+a*h-o*c,this.y=i+l*c+o*d-r*h,this.z=s+l*h+r*c-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new O,Ia=new Nn;class Ie{constructor(e,t,i,s,r,a,o,l,d){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,d)}set(e,t,i,s,r,a,o,l,d){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],d=i[1],c=i[4],h=i[7],f=i[2],m=i[5],x=i[8],_=s[0],p=s[3],u=s[6],T=s[1],M=s[4],S=s[7],L=s[2],P=s[5],R=s[8];return r[0]=a*_+o*T+l*L,r[3]=a*p+o*M+l*P,r[6]=a*u+o*S+l*R,r[1]=d*_+c*T+h*L,r[4]=d*p+c*M+h*P,r[7]=d*u+c*S+h*R,r[2]=f*_+m*T+x*L,r[5]=f*p+m*M+x*P,r[8]=f*u+m*S+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],c=e[8];return t*a*c-t*o*d-i*r*c+i*o*l+s*r*d-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],c=e[8],h=c*a-o*d,f=o*l-c*r,m=d*r-a*l,x=t*h+i*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(s*d-c*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*l-d*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),d=Math.sin(r);return this.set(i*l,i*d,-i*(l*a+d*o)+a+e,-s*d,s*l,-s*(-d*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ls.makeScale(e,t)),this}rotate(e){return this.premultiply(Ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Ie;function Xo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ln(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vd(){const n=Ln("canvas");return n.style.display="block",n}const Ua={};function Dn(n){n in Ua||(Ua[n]=!0,console.warn(n))}function xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Na=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _d(){const n={enabled:!0,workingColorSpace:un,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Dn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Dn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[un]:{primaries:e,whitePoint:i,transfer:vs,toXYZ:Na,fromXYZ:Fa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:$e,toXYZ:Na,fromXYZ:Fa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),n}const Ve=_d();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ln(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=Ln("canvas")),Xi.width=e.width,Xi.height=e.height;const s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ln("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bd=0;class ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ds(s[a].image)):r.push(Ds(s[a]))}else r=Ds(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ds(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;const Is=new O;class pt extends mn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,i=Oi,s=Oi,r=xt,a=ki,o=Ct,l=Wt,d=pt.DEFAULT_ANISOTROPY,c=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Un(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Is).x}get height(){return this.source.getSize(Is).y}get depth(){return this.source.getSize(Is).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==No)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=No;pt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,d=l[0],c=l[4],h=l[8],f=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(d+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(d+1)/2,S=(m+1)/2,L=(u+1)/2,P=(c+f)/4,R=(h+_)/4,N=(x+p)/4;return M>S&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=R/i):S>L?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=N/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(T)<.001&&(T=1),this.x=(p-x)/T,this.y=(h-_)/T,this.z=(f-c)/T,this.w=Math.acos((d+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends mn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new pt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qo extends pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kt):kt.fromBufferAttribute(r,a),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vn.copy(i.boundingBox)),Vn.applyMatrix4(e.matrixWorld),this.union(Vn)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_n),Gn.subVectors(this.max,_n),qi.subVectors(e.a,_n),$i.subVectors(e.b,_n),Yi.subVectors(e.c,_n),fi.subVectors($i,qi),pi.subVectors(Yi,$i),Ti.subVectors(qi,Yi);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ti.z,Ti.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ti.z,0,-Ti.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ti.y,Ti.x,0];return!Us(t,qi,$i,Yi,Gn)||(t=[1,0,0,0,1,0,0,0,1],!Us(t,qi,$i,Yi,Gn))?!1:(Wn.crossVectors(fi,pi),t=[Wn.x,Wn.y,Wn.z],Us(t,qi,$i,Yi,Gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qt=[new O,new O,new O,new O,new O,new O,new O,new O],kt=new O,Vn=new Fn,qi=new O,$i=new O,Yi=new O,fi=new O,pi=new O,Ti=new O,_n=new O,Gn=new O,Wn=new O,Ai=new O;function Us(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ai.fromArray(n,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=e.dot(Ai),d=t.dot(Ai),c=i.dot(Ai);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>o)return!1}return!0}const Md=new Fn,yn=new O,Ns=new O;class fa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Md.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yn.subVectors(e,this.center);const t=yn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yn.copy(e.center).add(Ns)),this.expandByPoint(yn.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new O,Fs=new O,Xn=new O,mi=new O,Os=new O,qn=new O,ks=new O;class Td{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fs.copy(e).add(t).multiplyScalar(.5),Xn.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Fs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xn),o=mi.dot(this.direction),l=-mi.dot(Xn),d=mi.lengthSq(),c=Math.abs(1-a*a);let h,f,m,x;if(c>0)if(h=a*l-o,f=a*o-l,x=r*c,h>=0)if(f>=-x)if(f<=x){const _=1/c;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+d}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+d;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+d;else f<=-x?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+d):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+d):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+d);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fs).addScaledVector(Xn,f),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const d=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,s=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,s=(e.min.x-f.x)*d),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){Os.subVectors(t,e),qn.subVectors(i,e),ks.crossVectors(Os,qn);let a=this.direction.dot(ks),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(qn.crossVectors(mi,qn));if(l<0)return null;const d=o*this.direction.dot(Os.cross(mi));if(d<0||l+d>a)return null;const c=-o*mi.dot(ks);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,a,o,l,d,c,h,f,m,x,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,d,c,h,f,m,x,_,p)}set(e,t,i,s,r,a,o,l,d,c,h,f,m,x,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=d,u[6]=c,u[10]=h,u[14]=f,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),d=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*c,m=a*h,x=o*c,_=o*h;t[0]=l*c,t[4]=-l*h,t[8]=d,t[1]=m+x*d,t[5]=f-_*d,t[9]=-o*l,t[2]=_-f*d,t[6]=x+m*d,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,x=d*c,_=d*h;t[0]=f+_*o,t[4]=x*o-m,t[8]=a*d,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=m*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,x=d*c,_=d*h;t[0]=f-_*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*c,t[9]=_-f*o,t[2]=-a*d,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,m=a*h,x=o*c,_=o*h;t[0]=l*c,t[4]=x*d-m,t[8]=f*d+_,t[1]=l*h,t[5]=_*d+f,t[9]=m*d-x,t[2]=-d,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*d,x=o*l,_=o*d;t[0]=l*c,t[4]=_-f*h,t[8]=x*h+m,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-d*c,t[6]=m*h+x,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,m=a*d,x=o*l,_=o*d;t[0]=l*c,t[4]=-h,t[8]=d*c,t[1]=f*h+_,t[5]=a*c,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Rd)}lookAt(e,t,i){const s=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),gi.crossVectors(i,At),gi.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),gi.crossVectors(i,At)),gi.normalize(),$n.crossVectors(At,gi),s[0]=gi.x,s[4]=$n.x,s[8]=At.x,s[1]=gi.y,s[5]=$n.y,s[9]=At.y,s[2]=gi.z,s[6]=$n.z,s[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],d=i[12],c=i[1],h=i[5],f=i[9],m=i[13],x=i[2],_=i[6],p=i[10],u=i[14],T=i[3],M=i[7],S=i[11],L=i[15],P=s[0],R=s[4],N=s[8],b=s[12],y=s[1],C=s[5],B=s[9],V=s[13],Y=s[2],W=s[6],q=s[10],K=s[14],z=s[3],re=s[7],de=s[11],we=s[15];return r[0]=a*P+o*y+l*Y+d*z,r[4]=a*R+o*C+l*W+d*re,r[8]=a*N+o*B+l*q+d*de,r[12]=a*b+o*V+l*K+d*we,r[1]=c*P+h*y+f*Y+m*z,r[5]=c*R+h*C+f*W+m*re,r[9]=c*N+h*B+f*q+m*de,r[13]=c*b+h*V+f*K+m*we,r[2]=x*P+_*y+p*Y+u*z,r[6]=x*R+_*C+p*W+u*re,r[10]=x*N+_*B+p*q+u*de,r[14]=x*b+_*V+p*K+u*we,r[3]=T*P+M*y+S*Y+L*z,r[7]=T*R+M*C+S*W+L*re,r[11]=T*N+M*B+S*q+L*de,r[15]=T*b+M*V+S*K+L*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],d=e[13],c=e[2],h=e[6],f=e[10],m=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+r*l*h-s*d*h-r*o*f+i*d*f+s*o*m-i*l*m)+_*(+t*l*m-t*d*f+r*a*f-s*a*m+s*d*c-r*l*c)+p*(+t*d*h-t*o*m-r*a*h+i*a*m+r*o*c-i*d*c)+u*(-s*o*c-t*l*h+t*o*f+s*a*h-i*a*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],c=e[8],h=e[9],f=e[10],m=e[11],x=e[12],_=e[13],p=e[14],u=e[15],T=h*p*d-_*f*d+_*l*m-o*p*m-h*l*u+o*f*u,M=x*f*d-c*p*d-x*l*m+a*p*m+c*l*u-a*f*u,S=c*_*d-x*h*d+x*o*m-a*_*m-c*o*u+a*h*u,L=x*h*l-c*_*l-x*o*f+a*_*f+c*o*p-a*h*p,P=t*T+i*M+s*S+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=T*R,e[1]=(_*f*r-h*p*r-_*s*m+i*p*m+h*s*u-i*f*u)*R,e[2]=(o*p*r-_*l*r+_*s*d-i*p*d-o*s*u+i*l*u)*R,e[3]=(h*l*r-o*f*r-h*s*d+i*f*d+o*s*m-i*l*m)*R,e[4]=M*R,e[5]=(c*p*r-x*f*r+x*s*m-t*p*m-c*s*u+t*f*u)*R,e[6]=(x*l*r-a*p*r-x*s*d+t*p*d+a*s*u-t*l*u)*R,e[7]=(a*f*r-c*l*r+c*s*d-t*f*d-a*s*m+t*l*m)*R,e[8]=S*R,e[9]=(x*h*r-c*_*r-x*i*m+t*_*m+c*i*u-t*h*u)*R,e[10]=(a*_*r-x*o*r+x*i*d-t*_*d-a*i*u+t*o*u)*R,e[11]=(c*o*r-a*h*r-c*i*d+t*h*d+a*i*m-t*o*m)*R,e[12]=L*R,e[13]=(c*_*s-x*h*s+x*i*f-t*_*f-c*i*p+t*h*p)*R,e[14]=(x*o*s-a*_*s-x*i*l+t*_*l+a*i*p-t*o*p)*R,e[15]=(a*h*s-c*o*s+c*i*l-t*h*l-a*i*f+t*o*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,d=r*a,c=r*o;return this.set(d*a+i,d*o-s*l,d*l+s*o,0,d*o+s*l,c*o+i,c*l-s*a,0,d*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,d=r+r,c=a+a,h=o+o,f=r*d,m=r*c,x=r*h,_=a*c,p=a*h,u=o*h,T=l*d,M=l*c,S=l*h,L=i.x,P=i.y,R=i.z;return s[0]=(1-(_+u))*L,s[1]=(m+S)*L,s[2]=(x-M)*L,s[3]=0,s[4]=(m-S)*P,s[5]=(1-(f+u))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(x+M)*R,s[9]=(p-T)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bt.copy(this);const d=1/r,c=1/a,h=1/o;return Bt.elements[0]*=d,Bt.elements[1]*=d,Bt.elements[2]*=d,Bt.elements[4]*=c,Bt.elements[5]*=c,Bt.elements[6]*=c,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=jt,l=!1){const d=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let x,_;if(l)x=r/(a-r),_=a*r/(a-r);else if(o===jt)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===xs)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=c,d[4]=0,d[8]=f,d[12]=0,d[1]=0,d[5]=h,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=_,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=jt,l=!1){const d=this.elements,c=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let x,_;if(l)x=1/(a-r),_=a/(a-r);else if(o===jt)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===xs)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=c,d[4]=0,d[8]=0,d[12]=f,d[1]=0,d[5]=h,d[9]=0,d[13]=m,d[2]=0,d[6]=0,d[10]=x,d[14]=_,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new O,Bt=new dt,Ad=new O(0,0,0),Rd=new O(1,1,1),gi=new O,$n=new O,At=new O,Oa=new dt,ka=new Nn;class hi{constructor(e=0,t=0,i=0,s=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],d=s[5],c=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cd=0;const Ba=new O,Ki=new Nn,ti=new dt,Yn=new O,bn=new O,Pd=new O,Ld=new Nn,za=new O(1,0,0),Ha=new O(0,1,0),Va=new O(0,0,1),Ga={type:"added"},Dd={type:"removed"},Zi={type:"childadded",child:null},Bs={type:"childremoved",child:null};class Lt extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new O,t=new hi,i=new Nn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ie}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(za,e)}rotateY(e){return this.rotateOnAxis(Ha,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return Ba.copy(e).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(za,e)}translateY(e){return this.translateOnAxis(Ha,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yn.copy(e):Yn.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(bn,Yn,this.up):ti.lookAt(Yn,bn,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(ti),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ga),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ga),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const h=l[d];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),d=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const d in o){const c=o[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new O(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new O,ii=new O,zs=new O,ni=new O,Ji=new O,Qi=new O,Wa=new O,Hs=new O,Vs=new O,Gs=new O,Ws=new ot,Xs=new ot,qs=new ot;class Gt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zt.subVectors(e,t),s.cross(zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zt.subVectors(s,t),ii.subVectors(i,t),zs.subVectors(e,t);const a=zt.dot(zt),o=zt.dot(ii),l=zt.dot(zs),d=ii.dot(ii),c=ii.dot(zs),h=a*d-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(d*l-o*c)*f,x=(a*c-o*l)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ws.setScalar(0),Xs.setScalar(0),qs.setScalar(0),Ws.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,i),qs.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ws,r.x),a.addScaledVector(Xs,r.y),a.addScaledVector(qs,r.z),a}static isFrontFacing(e,t,i,s){return zt.subVectors(i,t),ii.subVectors(e,t),zt.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),zt.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ji.subVectors(s,i),Qi.subVectors(r,i),Hs.subVectors(e,i);const l=Ji.dot(Hs),d=Qi.dot(Hs);if(l<=0&&d<=0)return t.copy(i);Vs.subVectors(e,s);const c=Ji.dot(Vs),h=Qi.dot(Vs);if(c>=0&&h<=c)return t.copy(s);const f=l*h-c*d;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Ji,a);Gs.subVectors(e,r);const m=Ji.dot(Gs),x=Qi.dot(Gs);if(x>=0&&m<=x)return t.copy(r);const _=m*d-l*x;if(_<=0&&d>=0&&x<=0)return o=d/(d-x),t.copy(i).addScaledVector(Qi,o);const p=c*x-m*h;if(p<=0&&h-c>=0&&m-x>=0)return Wa.subVectors(r,s),o=(h-c)/(h-c+(m-x)),t.copy(s).addScaledVector(Wa,o);const u=1/(p+_+f);return a=_*u,o=f*u,t.copy(i).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},jn={h:0,s:0,l:0};function $s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ve.workingColorSpace){if(e=gd(e,1),t=Be(t,0,1),i=Be(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=$s(a,r,e+1/3),this.g=$s(a,r,e),this.b=$s(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=Yo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ve.workingToColorSpace(vt.copy(this),e),Math.round(Be(vt.r*255,0,255))*65536+Math.round(Be(vt.g*255,0,255))*256+Math.round(Be(vt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(vt.copy(this),t);const i=vt.r,s=vt.g,r=vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,d;const c=(o+a)/2;if(o===a)l=0,d=0;else{const h=a-o;switch(d=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Nt){Ve.workingToColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,s=vt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(jn);const i=Cs(vi.h,jn.h,t),s=Cs(vi.s,jn.s,t),r=Cs(vi.l,jn.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ye;Ye.NAMES=Yo;let Id=0;class ws extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=on,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=gs,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=dn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hr&&(i.blendSrc=this.blendSrc),this.blendDst!==gs&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jo extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new O,Kn=new ke;let Ud=0;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=La,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXY(t,Kn.x,Kn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class Ko extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zo extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bi extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nd=0;const Ut=new dt,Ys=new Lt,en=new O,Rt=new Fn,wn=new Fn,ft=new O;class Vi extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xo(e)?Zo:Ko)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(en).negate(),this.translate(en.x,en.y,en.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Rt.min,wn.min),Rt.expandByPoint(ft),ft.addVectors(Rt.max,wn.max),Rt.expandByPoint(ft)):(Rt.expandByPoint(wn.min),Rt.expandByPoint(wn.max))}Rt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let d=0,c=o.count;d<c;d++)ft.fromBufferAttribute(o,d),l&&(en.fromBufferAttribute(e,d),ft.add(en)),s=Math.max(s,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new O,l[N]=new O;const d=new O,c=new O,h=new O,f=new ke,m=new ke,x=new ke,_=new O,p=new O;function u(N,b,y){d.fromBufferAttribute(i,N),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,y),c.sub(d),h.sub(d),m.sub(f),x.sub(f);const C=1/(m.x*x.y-x.x*m.y);isFinite(C)&&(_.copy(c).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-x.x).multiplyScalar(C),o[N].add(_),o[b].add(_),o[y].add(_),l[N].add(p),l[b].add(p),l[y].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,b=T.length;N<b;++N){const y=T[N],C=y.start,B=y.count;for(let V=C,Y=C+B;V<Y;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new O,S=new O,L=new O,P=new O;function R(N){L.fromBufferAttribute(s,N),P.copy(L);const b=o[N];M.copy(b),M.sub(L.multiplyScalar(L.dot(b))).normalize(),S.crossVectors(P,b);const C=S.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,C)}for(let N=0,b=T.length;N<b;++N){const y=T[N],C=y.start,B=y.count;for(let V=C,Y=C+B;V<Y;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,d=new O,c=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),d.fromBufferAttribute(i,p),o.add(c),l.add(c),d.add(c),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,d.x,d.y,d.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const d=o.array,c=o.itemSize,h=o.normalized,f=new d.constructor(l.length*c);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*c;for(let u=0;u<c;u++)f[x++]=d[m++]}return new Zt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vi,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],d=e(l,i);t.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const l=[],d=r[o];for(let c=0,h=d.length;c<h;c++){const f=d[c],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let h=0,f=d.length;h<f;h++){const m=d[h];c.push(m.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const c=s[d];this.setAttribute(d,c.clone(t))}const r=e.morphAttributes;for(const d in r){const c=[],h=r[d];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,c=a.length;d<c;d++){const h=a[d];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new dt,Ri=new Td,Zn=new fa,qa=new O,Jn=new O,Qn=new O,es=new O,js=new O,ts=new O,$a=new O,is=new O;class Ot extends Lt{constructor(e=new Vi,t=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let l=0,d=r.length;l<d;l++){const c=o[l],h=r[l];c!==0&&(js.fromBufferAttribute(h,e),a?ts.addScaledVector(js,c):ts.addScaledVector(js.sub(t),c))}t.add(ts)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zn.copy(i.boundingSphere),Zn.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Zn.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Zn,qa)===null||Ri.origin.distanceToSquared(qa)>(e.far-e.near)**2))&&(Xa.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Xa),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,d=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const p=f[x],u=a[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,L=M;S<L;S+=3){const P=o.getX(S),R=o.getX(S+1),N=o.getX(S+2);s=ns(this,u,e,i,d,c,h,P,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const T=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);s=ns(this,a,e,i,d,c,h,T,M,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const p=f[x],u=a[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,L=M;S<L;S+=3){const P=S,R=S+1,N=S+2;s=ns(this,u,e,i,d,c,h,P,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const T=p,M=p+1,S=p+2;s=ns(this,a,e,i,d,c,h,T,M,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Fd(n,e,t,i,s,r,a,o){let l;if(e.side===Et?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Si,o),l===null)return null;is.copy(o),is.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(is);return d<t.near||d>t.far?null:{distance:d,point:is.clone(),object:n}}function ns(n,e,t,i,s,r,a,o,l,d){n.getVertexPosition(o,Jn),n.getVertexPosition(l,Qn),n.getVertexPosition(d,es);const c=Fd(n,e,t,i,Jn,Qn,es,$a);if(c){const h=new O;Gt.getBarycoord($a,Jn,Qn,es,h),s&&(c.uv=Gt.getInterpolatedAttribute(s,o,l,d,h,new ke)),r&&(c.uv1=Gt.getInterpolatedAttribute(r,o,l,d,h,new ke)),a&&(c.normal=Gt.getInterpolatedAttribute(a,o,l,d,h,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:d,normal:new O,materialIndex:0};Gt.getNormal(Jn,Qn,es,f.normal),c.face=f,c.barycoord=h}return c}class On extends Vi{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],d=[],c=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bi(d,3)),this.setAttribute("normal",new Bi(c,3)),this.setAttribute("uv",new Bi(h,2));function x(_,p,u,T,M,S,L,P,R,N,b){const y=S/R,C=L/N,B=S/2,V=L/2,Y=P/2,W=R+1,q=N+1;let K=0,z=0;const re=new O;for(let de=0;de<q;de++){const we=de*C-V;for(let Fe=0;Fe<W;Fe++){const Ke=Fe*y-B;re[_]=Ke*T,re[p]=we*M,re[u]=Y,d.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[u]=P>0?1:-1,c.push(re.x,re.y,re.z),h.push(Fe/R),h.push(1-de/N),K+=1}}for(let de=0;de<N;de++)for(let we=0;we<R;we++){const Fe=f+we+W*de,Ke=f+we+W*(de+1),Qe=f+(we+1)+W*(de+1),Ge=f+(we+1)+W*de;l.push(Fe,Ke,Ge),l.push(Ke,Qe,Ge),z+=6}o.addGroup(m,z,b),m+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=fn(n[t]);for(const s in i)e[s]=i[s]}return e}function Od(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jo(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const kd={clone:fn,merge:yt};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fn(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qo extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new O,Ya=new ke,ja=new ke;class Vt extends Qo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Ya,ja),t.subVectors(ja,Ya)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/d,s*=a.width/l,i*=a.height/d}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tn=-90,nn=1;class Hd extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(tn,nn,e,t);s.layers=this.layers,this.add(s);const r=new Vt(tn,nn,e,t);r.layers=this.layers,this.add(r);const a=new Vt(tn,nn,e,t);a.layers=this.layers,this.add(a);const o=new Vt(tn,nn,e,t);o.layers=this.layers,this.add(o);const l=new Vt(tn,nn,e,t);l.layers=this.layers,this.add(l);const d=new Vt(tn,nn,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const d of t)this.remove(d);if(e===jt)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,d,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class el extends pt{constructor(e=[],t=cn,i,s,r,a,o,l,d,c){super(e,t,i,s,r,a,o,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vd extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new el(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:Kt});r.uniforms.tEquirect.value=t;const a=new Ot(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=xt),new Hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class ss extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gd={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(d,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const c=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,x=.005;d.inputState.pinching&&f>m+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=m-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jr extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tl extends pt{constructor(e=null,t=1,i=1,s,r,a,o,l,d=Pt,c=Pt,h,f){super(null,a,o,l,d,c,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zs=new O,Wd=new O,Xd=new Ie;class Di{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Zs.subVectors(i,t).cross(Wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zs),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xd.getNormalMatrix(e),s=this.coplanarPoint(Zs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new fa,qd=new ke(.5,.5),rs=new O;class il{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jt,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],d=r[3],c=r[4],h=r[5],f=r[6],m=r[7],x=r[8],_=r[9],p=r[10],u=r[11],T=r[12],M=r[13],S=r[14],L=r[15];if(s[0].setComponents(d-a,m-c,u-x,L-T).normalize(),s[1].setComponents(d+a,m+c,u+x,L+T).normalize(),s[2].setComponents(d+o,m+h,u+_,L+M).normalize(),s[3].setComponents(d-o,m-h,u-_,L-M).normalize(),i)s[4].setComponents(l,f,p,S).normalize(),s[5].setComponents(d-l,m-f,u-p,L-S).normalize();else if(s[4].setComponents(d-l,m-f,u-p,L-S).normalize(),t===jt)s[5].setComponents(d+l,m+f,u+p,L+S).normalize();else if(t===xs)s[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=qd.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(rs.x=s.normal.x>0?e.max.x:e.min.x,rs.y=s.normal.y>0?e.max.y:e.min.y,rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $d extends pt{constructor(e,t,i,s,r=xt,a=xt,o,l,d){super(e,t,i,s,r,a,o,l,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function h(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class nl extends pt{constructor(e,t,i=zi,s,r,a,o=Pt,l=Pt,d,c=Cn,h=1){if(c!==Cn&&c!==Pn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,c,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sl extends pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi extends Vi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),d=o+1,c=l+1,h=e/o,f=t/l,m=[],x=[],_=[],p=[];for(let u=0;u<c;u++){const T=u*f-a;for(let M=0;M<d;M++){const S=M*h-r;x.push(S,-T,0),_.push(0,0,1),p.push(M/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const M=T+d*u,S=T+d*(u+1),L=T+1+d*(u+1),P=T+1+d*u;m.push(M,S,P),m.push(S,L,P)}this.setIndex(m),this.setAttribute("position",new Bi(x,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yd extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jd extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kd{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return d.push(c,h),this},this.removeHandler=function(c){const h=d.indexOf(c);return h!==-1&&d.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=d.length;h<f;h+=2){const m=d[h],x=d[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Zd=new Kd;class pa{constructor(e){this.manager=e!==void 0?e:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pa.DEFAULT_MATERIAL_NAME="__DEFAULT";const sn=new WeakMap;class Jd extends pa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Js.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=sn.get(a);h===void 0&&(h=[],sn.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Ln("img");function l(){c(),t&&t(this);const h=sn.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onLoad&&m.onLoad(this)}sn.delete(this),r.manager.itemEnd(e)}function d(h){c(),s&&s(h),Js.remove(`image:${e}`);const f=sn.get(this)||[];for(let m=0;m<f.length;m++){const x=f[m];x.onError&&x.onError(h)}sn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Js.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Qd extends pa{constructor(e){super(e)}load(e,t,i,s){const r=new pt,a=new Jd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class _s extends Qo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ec extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ka(n,e,t,i){const s=tc(i);switch(t){case zo:return n*e;case Vo:return n*e/s.components*s.byteLength;case da:return n*e/s.components*s.byteLength;case Go:return n*e*2/s.components*s.byteLength;case ca:return n*e*2/s.components*s.byteLength;case Ho:return n*e*3/s.components*s.byteLength;case Ct:return n*e*4/s.components*s.byteLength;case ha:return n*e*4/s.components*s.byteLength;case cs:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Er:case Tr:return Math.max(n,16)*Math.max(e,8)/4;case Sr:case Mr:return Math.max(n,8)*Math.max(e,8)/2;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ur:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Or:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Br:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wr:case Xr:case qr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $r:case Yr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jr:case Kr:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tc(n){switch(n){case Wt:case Fo:return{byteLength:1,components:1};case An:case Oo:case pn:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case zi:case aa:case li:return{byteLength:4,components:1};case ko:case Bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);function rl(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ic(n){const e=new WeakMap;function t(o,l){const d=o.array,c=o.usage,h=d.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,d,c),o.onUploadCallback();let m;if(d instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)m=n.HALF_FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=n.SHORT;else if(d instanceof Uint32Array)m=n.UNSIGNED_INT;else if(d instanceof Int32Array)m=n.INT;else if(d instanceof Int8Array)m=n.BYTE;else if(d instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,d){const c=l.array,h=l.updateRanges;if(n.bindBuffer(d,o),h.length===0)n.bufferSubData(d,0,c);else{h.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<h.length;m++){const x=h[f],_=h[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,x=h.length;m<x;m++){const _=h[m];n.bufferSubData(d,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,l));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,o,l),d.version=o.version}}return{get:s,remove:r,update:a}}var nc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mc=`float G_BlinnPhong_Implicit( ) {
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
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
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
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ac=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
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
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
			mip = - 2.0 * log2( 1.16 * roughness );		}
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
#endif`,Rc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ic="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Fc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oc=`#ifdef USE_ENVMAP
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
#endif`,kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
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
#endif`,zc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$c=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
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
#endif`,jc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,th=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
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
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
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
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ih=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ah=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uh=`#if defined( USE_POINTS_UV )
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
#endif`,fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ph=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
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
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Th=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ah=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ch=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ih=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
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
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif
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
#endif`,Hh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xh=`#ifdef USE_SKINNING
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
#endif`,qh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$h=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kh=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zh=`#ifdef USE_TRANSMISSION
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
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
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
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,tu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,hu=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gu=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vu=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_u=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bu=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Su=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Mu=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Au=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cu=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Du=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Iu=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:nc,alphahash_pars_fragment:sc,alphamap_fragment:rc,alphamap_pars_fragment:ac,alphatest_fragment:oc,alphatest_pars_fragment:lc,aomap_fragment:dc,aomap_pars_fragment:cc,batching_pars_vertex:hc,batching_vertex:uc,begin_vertex:fc,beginnormal_vertex:pc,bsdfs:mc,iridescence_fragment:gc,bumpmap_pars_fragment:vc,clipping_planes_fragment:xc,clipping_planes_pars_fragment:_c,clipping_planes_pars_vertex:yc,clipping_planes_vertex:bc,color_fragment:wc,color_pars_fragment:Sc,color_pars_vertex:Ec,color_vertex:Mc,common:Tc,cube_uv_reflection_fragment:Ac,defaultnormal_vertex:Rc,displacementmap_pars_vertex:Cc,displacementmap_vertex:Pc,emissivemap_fragment:Lc,emissivemap_pars_fragment:Dc,colorspace_fragment:Ic,colorspace_pars_fragment:Uc,envmap_fragment:Nc,envmap_common_pars_fragment:Fc,envmap_pars_fragment:Oc,envmap_pars_vertex:kc,envmap_physical_pars_fragment:jc,envmap_vertex:Bc,fog_vertex:zc,fog_pars_vertex:Hc,fog_fragment:Vc,fog_pars_fragment:Gc,gradientmap_pars_fragment:Wc,lightmap_pars_fragment:Xc,lights_lambert_fragment:qc,lights_lambert_pars_fragment:$c,lights_pars_begin:Yc,lights_toon_fragment:Kc,lights_toon_pars_fragment:Zc,lights_phong_fragment:Jc,lights_phong_pars_fragment:Qc,lights_physical_fragment:eh,lights_physical_pars_fragment:th,lights_fragment_begin:ih,lights_fragment_maps:nh,lights_fragment_end:sh,logdepthbuf_fragment:rh,logdepthbuf_pars_fragment:ah,logdepthbuf_pars_vertex:oh,logdepthbuf_vertex:lh,map_fragment:dh,map_pars_fragment:ch,map_particle_fragment:hh,map_particle_pars_fragment:uh,metalnessmap_fragment:fh,metalnessmap_pars_fragment:ph,morphinstance_vertex:mh,morphcolor_vertex:gh,morphnormal_vertex:vh,morphtarget_pars_vertex:xh,morphtarget_vertex:_h,normal_fragment_begin:yh,normal_fragment_maps:bh,normal_pars_fragment:wh,normal_pars_vertex:Sh,normal_vertex:Eh,normalmap_pars_fragment:Mh,clearcoat_normal_fragment_begin:Th,clearcoat_normal_fragment_maps:Ah,clearcoat_pars_fragment:Rh,iridescence_pars_fragment:Ch,opaque_fragment:Ph,packing:Lh,premultiplied_alpha_fragment:Dh,project_vertex:Ih,dithering_fragment:Uh,dithering_pars_fragment:Nh,roughnessmap_fragment:Fh,roughnessmap_pars_fragment:Oh,shadowmap_pars_fragment:kh,shadowmap_pars_vertex:Bh,shadowmap_vertex:zh,shadowmask_pars_fragment:Hh,skinbase_vertex:Vh,skinning_pars_vertex:Gh,skinning_vertex:Wh,skinnormal_vertex:Xh,specularmap_fragment:qh,specularmap_pars_fragment:$h,tonemapping_fragment:Yh,tonemapping_pars_fragment:jh,transmission_fragment:Kh,transmission_pars_fragment:Zh,uv_pars_fragment:Jh,uv_pars_vertex:Qh,uv_vertex:eu,worldpos_vertex:tu,background_vert:iu,background_frag:nu,backgroundCube_vert:su,backgroundCube_frag:ru,cube_vert:au,cube_frag:ou,depth_vert:lu,depth_frag:du,distanceRGBA_vert:cu,distanceRGBA_frag:hu,equirect_vert:uu,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:gu,meshbasic_frag:vu,meshlambert_vert:xu,meshlambert_frag:_u,meshmatcap_vert:yu,meshmatcap_frag:bu,meshnormal_vert:wu,meshnormal_frag:Su,meshphong_vert:Eu,meshphong_frag:Mu,meshphysical_vert:Tu,meshphysical_frag:Au,meshtoon_vert:Ru,meshtoon_frag:Cu,points_vert:Pu,points_frag:Lu,shadow_vert:Du,shadow_frag:Iu,sprite_vert:Uu,sprite_frag:Nu},se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Yt={basic:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:yt([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:yt([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:yt([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:yt([se.common,se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:yt([se.lights,se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Yt.physical={uniforms:yt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const as={r:0,b:0,g:0},Pi=new hi,Fu=new dt;function Ou(n,e,t,i,s,r,a){const o=new Ye(0);let l=r===!0?0:1,d,c,h=null,f=0,m=null;function x(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function _(M){let S=!1;const L=x(M);L===null?u(o,l):L&&L.isColor&&(u(L,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,S){const L=x(S);L&&(L.isCubeTexture||L.mapping===bs)?(c===void 0&&(c=new Ot(new On(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:fn(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Pi.copy(S.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),c.material.uniforms.envMap.value=L,c.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fu.makeRotationFromEuler(Pi)),c.material.toneMapped=Ve.getTransfer(L.colorSpace)!==$e,(h!==L||f!==L.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=L,f=L.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new Ot(new Hi(2,2),new Xt({name:"BackgroundMaterial",uniforms:fn(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=Ve.getTransfer(L.colorSpace)!==$e,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=L,f=L.version,m=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function u(M,S){M.getRGB(as,Jo(n)),i.buffers.color.setClear(as.r,as.g,as.b,S,a)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:_,addToRenderList:p,dispose:T}}function ku(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(y,C,B,V,Y){let W=!1;const q=h(V,B,C);r!==q&&(r=q,d(r.object)),W=m(y,V,B,Y),W&&x(y,V,B,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(y,C,B,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function d(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function h(y,C,B){const V=B.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let W=Y[C.id];W===void 0&&(W={},Y[C.id]=W);let q=W[V];return q===void 0&&(q=f(l()),W[V]=q),q}function f(y){const C=[],B=[],V=[];for(let Y=0;Y<t;Y++)C[Y]=0,B[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:V,object:y,attributes:{},index:null}}function m(y,C,B,V){const Y=r.attributes,W=C.attributes;let q=0;const K=B.getAttributes();for(const z in K)if(K[z].location>=0){const de=Y[z];let we=W[z];if(we===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function x(y,C,B,V){const Y={},W=C.attributes;let q=0;const K=B.getAttributes();for(const z in K)if(K[z].location>=0){let de=W[z];de===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const we={};we.attribute=de,de&&de.data&&(we.data=de.data),Y[z]=we,q++}r.attributes=Y,r.attributesNum=q,r.index=V}function _(){const y=r.newAttributes;for(let C=0,B=y.length;C<B;C++)y[C]=0}function p(y){u(y,0)}function u(y,C){const B=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;B[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),Y[y]!==C&&(n.vertexAttribDivisor(y,C),Y[y]=C)}function T(){const y=r.newAttributes,C=r.enabledAttributes;for(let B=0,V=C.length;B<V;B++)C[B]!==y[B]&&(n.disableVertexAttribArray(B),C[B]=0)}function M(y,C,B,V,Y,W,q){q===!0?n.vertexAttribIPointer(y,C,B,Y,W):n.vertexAttribPointer(y,C,B,V,Y,W)}function S(y,C,B,V){_();const Y=V.attributes,W=B.getAttributes(),q=C.defaultAttributeValues;for(const K in W){const z=W[K];if(z.location>=0){let re=Y[K];if(re===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const de=re.normalized,we=re.itemSize,Fe=e.get(re);if(Fe===void 0)continue;const Ke=Fe.buffer,Qe=Fe.type,Ge=Fe.bytesPerElement,X=Qe===n.INT||Qe===n.UNSIGNED_INT||re.gpuType===aa;if(re.isInterleavedBufferAttribute){const Z=re.data,ue=Z.stride,Ce=re.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)u(z.location+be,Z.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<z.locationSize;be++)p(z.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let be=0;be<z.locationSize;be++)M(z.location+be,we/z.locationSize,Qe,de,ue*Ge,(Ce+we/z.locationSize*be)*Ge,X)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)u(z.location+Z,re.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Z=0;Z<z.locationSize;Z++)M(z.location+Z,we/z.locationSize,Qe,de,we*Ge,we/z.locationSize*Z*Ge,X)}}else if(q!==void 0){const de=q[K];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}T()}function L(){N();for(const y in i){const C=i[y];for(const B in C){const V=C[B];for(const Y in V)c(V[Y].object),delete V[Y];delete C[B]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const B in C){const V=C[B];for(const Y in V)c(V[Y].object),delete V[Y];delete C[B]}delete i[y.id]}function R(y){for(const C in i){const B=i[C];if(B[y.id]===void 0)continue;const V=B[y.id];for(const Y in V)c(V[Y].object),delete V[Y];delete B[y.id]}}function N(){b(),a=!0,r!==s&&(r=s,d(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Bu(n,e,t){let i;function s(d){i=d}function r(d,c){n.drawArrays(i,d,c),t.update(c,i,1)}function a(d,c,h){h!==0&&(n.drawArraysInstanced(i,d,c,h),t.update(c,i,h))}function o(d,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,c,0,h);let m=0;for(let x=0;x<h;x++)m+=c[x];t.update(m,i,1)}function l(d,c,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d.length;x++)a(d[x],c[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(i,d,0,c,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=c[_]*f[_];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zu(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ct&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==li&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const c=l(d);c!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",c,"instead."),d=c);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:L,maxSamples:P}}function Hu(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Di,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!s||x===null||x.length===0||r&&!p)r?c(null):d();else{const T=r?0:i,M=T*4;let S=u.clippingState||null;l.value=S,S=c(x,f,M,m);for(let L=0;L!==M;++L)S[L]=t[L];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,m,x){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=m+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,S=m;M!==_;++M,S+=4)a.copy(h[M]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Vu(n){let e=new WeakMap;function t(a,o){return o===_r?a.mapping=cn:o===yr&&(a.mapping=hn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_r||o===yr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=new Vd(l.height);return d.fromEquirectangularTexture(n,a),e.set(a,d),a.addEventListener("dispose",s),t(d.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const an=4,Za=[.125,.215,.35,.446,.526,.582],Ni=20,Qs=new _s,Ja=new Ye;let er=null,tr=0,ir=0,nr=!1;const Ii=(1+Math.sqrt(5))/2,rn=1/Ii,Qa=[new O(-Ii,rn,0),new O(Ii,rn,0),new O(-rn,0,Ii),new O(rn,0,Ii),new O(0,Ii,-rn),new O(0,Ii,rn),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Gu=new O;class eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Gu}=r;er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=no(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(er,tr,ir),this._renderer.xr.enabled=nr,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cn||e.mapping===hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:pn,format:Ct,colorSpace:un,depthBuffer:!1},s=to(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wu(r)),this._blurMaterial=Xu(r,e,t)}return s}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,i,s,r){const l=new Vt(90,1,t,i),d=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Ja),h.toneMapping=bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new jo({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),p=new Ot(new On,_);let u=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,u=!0):(_.color.copy(Ja),u=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,d[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[M],r.y,r.z)):S===1?(l.up.set(0,0,d[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[M],r.z)):(l.up.set(0,d[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[M]));const L=this._cubeSize;os(s,S*L,M>2?L:0,L,L),h.setRenderTarget(s),u&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===cn||e.mapping===hn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=no()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=io());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qa[(s-r-1)%Qa.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ot(this._lodPlanes[s],d),f=d.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),_=r/x,p=isFinite(r)?1+Math.floor(c*_):Ni;p>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const u=[];let T=0;for(let R=0;R<Ni;++R){const N=R/_,b=Math.exp(-N*N/2);u.push(b),R===0?T+=b:R<p&&(T+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-i;const S=this._sizeLods[s],L=3*S*(s>M-an?s-M+an:0),P=4*(this._cubeSize-S);os(t,L,P,3*S,2*S),l.setRenderTarget(t),l.render(h,Qs)}}function Wu(n){const e=[],t=[],i=[];let s=n;const r=n-an+1+Za.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-an?l=Za[a-n+an-1]:a===0&&(l=0),i.push(l);const d=1/(o-2),c=-d,h=1+d,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,x=6,_=3,p=2,u=1,T=new Float32Array(_*x*m),M=new Float32Array(p*x*m),S=new Float32Array(u*x*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,N=P>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(b,_*x*P),M.set(f,p*x*P);const y=[P,P,P,P,P,P];S.set(y,u*x*P)}const L=new Vi;L.setAttribute("position",new Zt(T,_)),L.setAttribute("uv",new Zt(M,p)),L.setAttribute("faceIndex",new Zt(S,u)),e.push(L),s>an&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function to(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Xu(n,e,t){const i=new Float32Array(Ni),s=new O(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function io(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function no(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function qu(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,d=l===_r||l===yr,c=l===cn||l===hn;if(d||c){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new eo(n)),h=d?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return d&&m&&m.height>0||c&&m&&s(m)?(t===null&&(t=new eo(n)),h=d?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const d=6;for(let c=0;c<d;c++)o[c]!==void 0&&l++;return l===d}function r(o){const l=o.target;l.removeEventListener("dispose",r);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $u(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Dn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yu(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function d(h){const f=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let M=0,S=T.length;M<S;M+=3){const L=T[M+0],P=T[M+1],R=T[M+2];f.push(L,P,P,R,R,L)}}else if(x!==void 0){const T=x.array;_=x.version;for(let M=0,S=T.length/3-1;M<S;M+=3){const L=M+0,P=M+1,R=M+2;f.push(L,P,P,R,R,L)}}else return;const p=new(Xo(f)?Zo:Ko)(f,1);p.version=_;const u=r.get(h);u&&e.remove(u),r.set(h,p)}function c(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&d(h)}else d(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function ju(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*a),t.update(m,i,1)}function d(f,m,x){x!==0&&(n.drawElementsInstanced(i,m,r,f*a,x),t.update(m,i,x))}function c(f,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];t.update(p,i,1)}function h(f,m,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)d(f[u]/a,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,x);let u=0;for(let T=0;T<x;T++)u+=m[T]*_[T];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Ku(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zu(n,e,t){const i=new WeakMap,s=new ot;function r(a,o,l){const d=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let L=o.attributes.position.count*S,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*P*4*h),N=new qo(R,L,P,h);N.type=li,N.needsUpdate=!0;const b=S*4;for(let C=0;C<h;C++){const B=u[C],V=T[C],Y=M[C],W=L*P*4*C;for(let q=0;q<B.count;q++){const K=q*b;x===!0&&(s.fromBufferAttribute(B,q),R[W+K+0]=s.x,R[W+K+1]=s.y,R[W+K+2]=s.z,R[W+K+3]=0),_===!0&&(s.fromBufferAttribute(V,q),R[W+K+4]=s.x,R[W+K+5]=s.y,R[W+K+6]=s.z,R[W+K+7]=0),p===!0&&(s.fromBufferAttribute(Y,q),R[W+K+8]=s.x,R[W+K+9]=s.y,R[W+K+10]=s.z,R[W+K+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:N,size:new ke(L,P)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<d.length;p++)x+=d[p];const _=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ju(n,e,t,i){let s=new WeakMap;function r(l){const d=i.render.frame,c=l.geometry,h=e.get(l,c);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:a}}const al=new pt,so=new nl(1,1),ol=new qo,ll=new Ed,dl=new el,ro=[],ao=[],oo=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function gn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ro[s];if(r===void 0&&(r=new Float32Array(s),ro[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ss(n,e){let t=ao[e];t===void 0&&(t=new Int32Array(e),ao[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function sf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;co.set(i),n.uniformMatrix2fv(this.addr,!1,co),ht(t,i)}}function rf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;lo.set(i),n.uniformMatrix3fv(this.addr,!1,lo),ht(t,i)}}function af(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;oo.set(i),n.uniformMatrix4fv(this.addr,!1,oo),ht(t,i)}}function of(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function hf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function mf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(so.compareFunction=Wo,r=so):r=al,t.setTexture2D(e||r,s)}function gf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ll,s)}function vf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dl,s)}function xf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ol,s)}function _f(n){switch(n){case 5126:return Qu;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return sf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return df;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}function yf(n,e){n.uniform1fv(this.addr,e)}function bf(n,e){const t=gn(e,this.size,2);n.uniform2fv(this.addr,t)}function wf(n,e){const t=gn(e,this.size,3);n.uniform3fv(this.addr,t)}function Sf(n,e){const t=gn(e,this.size,4);n.uniform4fv(this.addr,t)}function Ef(n,e){const t=gn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mf(n,e){const t=gn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Tf(n,e){const t=gn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Af(n,e){n.uniform1iv(this.addr,e)}function Rf(n,e){n.uniform2iv(this.addr,e)}function Cf(n,e){n.uniform3iv(this.addr,e)}function Pf(n,e){n.uniform4iv(this.addr,e)}function Lf(n,e){n.uniform1uiv(this.addr,e)}function Df(n,e){n.uniform2uiv(this.addr,e)}function If(n,e){n.uniform3uiv(this.addr,e)}function Uf(n,e){n.uniform4uiv(this.addr,e)}function Nf(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||al,r[a])}function Ff(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ll,r[a])}function Of(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dl,r[a])}function kf(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ol,r[a])}function Bf(n){switch(n){case 5126:return yf;case 35664:return bf;case 35665:return wf;case 35666:return Sf;case 35674:return Ef;case 35675:return Mf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Rf;case 35668:case 35672:return Cf;case 35669:case 35673:return Pf;case 5125:return Lf;case 36294:return Df;case 36295:return If;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return kf}}class zf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class Hf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}}class Vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function ho(n,e){n.seq.push(e),n.map[e.id]=e}function Gf(n,e,t){const i=n.name,s=i.length;for(sr.lastIndex=0;;){const r=sr.exec(i),a=sr.lastIndex;let o=r[1];const l=r[2]==="]",d=r[3];if(l&&(o=o|0),d===void 0||d==="["&&a+2===s){ho(t,d===void 0?new zf(o,n,e):new Hf(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Vf(o),ho(t,h)),t=h}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Gf(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function uo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Wf=37297;let Xf=0;function qf(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const fo=new Ie;function $f(n){Ve._getMatrix(fo,Ve.workingColorSpace,n);const e=`mat3( ${fo.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(n)){case vs:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function po(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qf(n.getShaderSource(e),o)}else return r}function Yf(n,e){const t=$f(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jf(n,e){let t;switch(e){case Zl:t="Linear";break;case Jl:t="Reinhard";break;case Ql:t="Cineon";break;case ed:t="ACESFilmic";break;case id:t="AgX";break;case nd:t="Neutral";break;case td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ls=new O;function Kf(){Ve.getLuminanceCoefficients(ls);const n=ls.x.toFixed(4),e=ls.y.toFixed(4),t=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sn).join(`
`)}function Jf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sn(n){return n!==""}function mo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function go(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(n){return n.replace(ep,ip)}const tp=new Map;function ip(n,e){let t=Ne[e];if(t===void 0){const i=tp.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qr(t)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(n){return n.replace(np,sp)}function sp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function ap(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cn:case hn:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function op(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hn&&(e="ENVMAP_MODE_REFRACTION"),e}function lp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uo:e="ENVMAP_BLENDING_MULTIPLY";break;case jl:e="ENVMAP_BLENDING_MIX";break;case Kl:e="ENVMAP_BLENDING_ADD";break}return e}function dp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cp(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=rp(t),d=ap(t),c=op(t),h=lp(t),f=dp(t),m=Zf(t),x=Jf(r),_=s.createProgram();let p,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Sn).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Sn).join(`
`),u.length>0&&(u+=`
`)):(p=[xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sn).join(`
`),u=[xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==bi?jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Yf("linearToOutputTexel",t.outputColorSpace),Kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sn).join(`
`)),a=Qr(a),a=mo(a,t),a=go(a,t),o=Qr(o),o=mo(o,t),o=go(o,t),a=vo(a),o=vo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=T+p+a,S=T+u+o,L=uo(s,s.VERTEX_SHADER,M),P=uo(s,s.FRAGMENT_SHADER,S);s.attachShader(_,L),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(L)||"",Y=s.getShaderInfoLog(P)||"",W=B.trim(),q=V.trim(),K=Y.trim();let z=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,P);else{const de=po(s,L,"vertex"),we=po(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+de+`
`+we)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||K==="")&&(re=!1);re&&(C.diagnostics={runnable:z,programLog:W,vertexShader:{log:q,prefix:p},fragmentShader:{log:K,prefix:u}})}s.deleteShader(L),s.deleteShader(P),N=new ps(s,_),b=Qf(s,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Wf)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let hp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fp(e),t.set(e,i)),i}}class fp{constructor(e){this.id=hp++,this.code=e,this.usedTimes=0}}function pp(n,e,t,i,s,r,a){const o=new $o,l=new up,d=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return d.add(b),b===0?"uv":`uv${b}`}function p(b,y,C,B,V){const Y=B.fog,W=V.geometry,q=b.isMeshStandardMaterial?B.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),z=K&&K.mapping===bs?K.image.height:null,re=x[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=de!==void 0?de.length:0;let Fe=0;W.morphAttributes.position!==void 0&&(Fe=1),W.morphAttributes.normal!==void 0&&(Fe=2),W.morphAttributes.color!==void 0&&(Fe=3);let Ke,Qe,Ge,X;if(re){const We=Yt[re];Ke=We.vertexShader,Qe=We.fragmentShader}else Ke=b.vertexShader,Qe=b.fragmentShader,l.update(b),Ge=l.getVertexShaderID(b),X=l.getFragmentShaderID(b);const Z=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Ce=V.isInstancedMesh===!0,be=V.isBatchedMesh===!0,ze=!!b.map,mt=!!b.matcap,E=!!K,et=!!b.aoMap,Le=!!b.lightMap,Ae=!!b.bumpMap,me=!!b.normalMap,tt=!!b.displacementMap,ge=!!b.emissiveMap,Ue=!!b.metalnessMap,ut=!!b.roughnessMap,at=b.anisotropy>0,w=b.clearcoat>0,g=b.dispersion>0,U=b.iridescence>0,G=b.sheen>0,j=b.transmission>0,H=at&&!!b.anisotropyMap,ye=w&&!!b.clearcoatMap,ie=w&&!!b.clearcoatNormalMap,ve=w&&!!b.clearcoatRoughnessMap,xe=U&&!!b.iridescenceMap,ee=U&&!!b.iridescenceThicknessMap,le=G&&!!b.sheenColorMap,Te=G&&!!b.sheenRoughnessMap,_e=!!b.specularMap,ae=!!b.specularColorMap,De=!!b.specularIntensityMap,A=j&&!!b.transmissionMap,te=j&&!!b.thicknessMap,ne=!!b.gradientMap,he=!!b.alphaMap,J=b.alphaTest>0,$=!!b.alphaHash,pe=!!b.extensions;let Pe=bi;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const Ze={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:Qe,defines:b.defines,customVertexShaderID:Ge,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:be,batchingColor:be&&V._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&V.instanceColor!==null,instancingMorph:Ce&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:un,alphaToCoverage:!!b.alphaToCoverage,map:ze,matcap:mt,envMap:E,envMapMode:E&&K.mapping,envMapCubeUVHeight:z,aoMap:et,lightMap:Le,bumpMap:Ae,normalMap:me,displacementMap:f&&tt,emissiveMap:ge,normalMapObjectSpace:me&&b.normalMapType===ld,normalMapTangentSpace:me&&b.normalMapType===od,metalnessMap:Ue,roughnessMap:ut,anisotropy:at,anisotropyMap:H,clearcoat:w,clearcoatMap:ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:g,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:ee,sheen:G,sheenColorMap:le,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:ae,specularIntensityMap:De,transmission:j,transmissionMap:A,thicknessMap:te,gradientMap:ne,opaque:b.transparent===!1&&b.blending===on&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:$,combine:b.combine,mapUv:ze&&_(b.map.channel),aoMapUv:et&&_(b.aoMap.channel),lightMapUv:Le&&_(b.lightMap.channel),bumpMapUv:Ae&&_(b.bumpMap.channel),normalMapUv:me&&_(b.normalMap.channel),displacementMapUv:tt&&_(b.displacementMap.channel),emissiveMapUv:ge&&_(b.emissiveMap.channel),metalnessMapUv:Ue&&_(b.metalnessMap.channel),roughnessMapUv:ut&&_(b.roughnessMap.channel),anisotropyMapUv:H&&_(b.anisotropyMap.channel),clearcoatMapUv:ye&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(b.sheenRoughnessMap.channel),specularMapUv:_e&&_(b.specularMap.channel),specularColorMapUv:ae&&_(b.specularColorMap.channel),specularIntensityMapUv:De&&_(b.specularIntensityMap.channel),transmissionMapUv:A&&_(b.transmissionMap.channel),thicknessMapUv:te&&_(b.thicknessMap.channel),alphaMapUv:he&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||at),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(ze||he),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===$e,decodeVideoTextureEmissive:ge&&b.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(b.emissiveMap.colorSpace)===$e,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ai,flipSided:b.side===Et,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&b.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ze.vertexUv1s=d.has(1),Ze.vertexUv2s=d.has(2),Ze.vertexUv3s=d.has(3),d.clear(),Ze}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(T(y,b),M(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function T(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const y=x[b.type];let C;if(y){const B=Yt[y];C=kd.clone(B.uniforms)}else C=b.uniforms;return C}function L(b,y){let C;for(let B=0,V=c.length;B<V;B++){const Y=c[B];if(Y.cacheKey===y){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new cp(n,y,b,r),c.push(C)),C}function P(b){if(--b.usedTimes===0){const y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:N}}function mp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _o(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yo(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,m,x,_,p){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:p},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function o(h,f,m,x,_,p){const u=a(h,f,m,x,_,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(h,f,m,x,_,p){const u=a(h,f,m,x,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function d(h,f){t.length>1&&t.sort(h||gp),i.length>1&&i.sort(f||_o),s.length>1&&s.sort(f||_o)}function c(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:c,sort:d}}function vp(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new yo,n.set(i,[a])):s>=r.length?(a=new yo,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function _p(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yp=0;function bp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wp(n){const e=new xp,t=_p(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new O);const s=new O,r=new dt,a=new dt;function o(d){let c=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,x=0,_=0,p=0,u=0,T=0,M=0,S=0,L=0,P=0,R=0;d.sort(bp);for(let b=0,y=d.length;b<y;b++){const C=d[b],B=C.color,V=C.intensity,Y=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=B.r*V,h+=B.g*V,f+=B.b*V;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],V);R++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,z=t.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=C.shadow.matrix,T++}i.directional[m]=q,m++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(B).multiplyScalar(V),q.distance=Y,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[_]=q;const K=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,K.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[_]=K.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=W,S++}_++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(B).multiplyScalar(V),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=q,p++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const K=C.shadow,z=t.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=W,i.pointShadowMatrix[x]=C.shadow.matrix,M++}i.point[x]=q,x++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(V),q.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[u]=q,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==x||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==T||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==L||N.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=m,N.pointLength=x,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=T,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=L,N.numLightProbes=R,i.version=yp++)}function l(d,c){let h=0,f=0,m=0,x=0,_=0;const p=c.matrixWorldInverse;for(let u=0,T=d.length;u<T;u++){const M=d[u];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function bo(n){const e=new wp(n),t=[],i=[];function s(c){d.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Sp(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bo(n),e.set(s,[o])):r>=a.length?(o=new bo(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
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
}`;function Tp(n,e,t){let i=new il;const s=new ke,r=new ke,a=new ot,o=new Yd({depthPacking:ad}),l=new jd,d={},c=t.maxTextureSize,h={[Si]:Et,[Et]:Si,[ai]:ai},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ep,fragmentShader:Mp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Vi;x.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ot(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let u=this.type;this.render=function(P,R,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Kt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=u!==si&&this.type===si,Y=u===si&&this.type!==si;for(let W=0,q=P.length;W<q;W++){const K=P[W],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const re=z.getFrameExtents();if(s.multiply(re),r.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/re.x),s.x=r.x*re.x,z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/re.y),s.y=r.y*re.y,z.mapSize.y=r.y)),z.map===null||V===!0||Y===!0){const we=this.type!==si?{minFilter:Pt,magFilter:Pt}:{};z.map!==null&&z.map.dispose(),z.map=new ci(s.x,s.y,we),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const de=z.getViewportCount();for(let we=0;we<de;we++){const Fe=z.getViewport(we);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),B.viewport(a),z.updateMatrices(K,we),i=z.getFrustum(),S(R,N,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===si&&T(z,N),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(b,y,C)};function T(P,R){const N=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,N,m,_,null)}function M(P,R,N,b){let y=null;const C=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)y=C;else if(y=N.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=y.uuid,V=R.uuid;let Y=d[B];Y===void 0&&(Y={},d[B]=Y);let W=Y[V];W===void 0&&(W=y.clone(),Y[V]=W,R.addEventListener("dispose",L)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,b===si?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=N}return y}function S(P,R,N,b,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===si)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),Y=P.material;if(Array.isArray(Y)){const W=V.groups;for(let q=0,K=W.length;q<K;q++){const z=W[q],re=Y[z.materialIndex];if(re&&re.visible){const de=M(P,re,b,y);P.onBeforeShadow(n,P,R,N,V,de,z),n.renderBufferDirect(N,null,V,de,P,z),P.onAfterShadow(n,P,R,N,V,de,z)}}}else if(Y.visible){const W=M(P,Y,b,y);P.onBeforeShadow(n,P,R,N,V,W,null),n.renderBufferDirect(N,null,V,W,P,null),P.onAfterShadow(n,P,R,N,V,W,null)}}const B=P.children;for(let V=0,Y=B.length;V<Y;V++)S(B[V],R,N,b,y)}function L(P){P.target.removeEventListener("dispose",L);for(const N in d){const b=d[N],y=P.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Ap={[ur]:fr,[pr]:vr,[mr]:xr,[dn]:gr,[fr]:ur,[vr]:pr,[xr]:mr,[gr]:dn};function Rp(n,e){function t(){let A=!1;const te=new ot;let ne=null;const he=new ot(0,0,0,0);return{setMask:function(J){ne!==J&&!A&&(n.colorMask(J,J,J,J),ne=J)},setLocked:function(J){A=J},setClear:function(J,$,pe,Pe,Ze){Ze===!0&&(J*=Pe,$*=Pe,pe*=Pe),te.set(J,$,pe,Pe),he.equals(te)===!1&&(n.clearColor(J,$,pe,Pe),he.copy(te))},reset:function(){A=!1,ne=null,he.set(-1,0,0,0)}}}function i(){let A=!1,te=!1,ne=null,he=null,J=null;return{setReversed:function($){if(te!==$){const pe=e.get("EXT_clip_control");$?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=$;const Pe=J;J=null,this.setClear(Pe)}},getReversed:function(){return te},setTest:function($){$?Z(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function($){ne!==$&&!A&&(n.depthMask($),ne=$)},setFunc:function($){if(te&&($=Ap[$]),he!==$){switch($){case ur:n.depthFunc(n.NEVER);break;case fr:n.depthFunc(n.ALWAYS);break;case pr:n.depthFunc(n.LESS);break;case dn:n.depthFunc(n.LEQUAL);break;case mr:n.depthFunc(n.EQUAL);break;case gr:n.depthFunc(n.GEQUAL);break;case vr:n.depthFunc(n.GREATER);break;case xr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=$}},setLocked:function($){A=$},setClear:function($){J!==$&&(te&&($=1-$),n.clearDepth($),J=$)},reset:function(){A=!1,ne=null,he=null,J=null,te=!1}}}function s(){let A=!1,te=null,ne=null,he=null,J=null,$=null,pe=null,Pe=null,Ze=null;return{setTest:function(We){A||(We?Z(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(We){te!==We&&!A&&(n.stencilMask(We),te=We)},setFunc:function(We,Jt,qt){(ne!==We||he!==Jt||J!==qt)&&(n.stencilFunc(We,Jt,qt),ne=We,he=Jt,J=qt)},setOp:function(We,Jt,qt){($!==We||pe!==Jt||Pe!==qt)&&(n.stencilOp(We,Jt,qt),$=We,pe=Jt,Pe=qt)},setLocked:function(We){A=We},setClear:function(We){Ze!==We&&(n.clearStencil(We),Ze=We)},reset:function(){A=!1,te=null,ne=null,he=null,J=null,$=null,pe=null,Pe=null,Ze=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,d=new WeakMap;let c={},h={},f=new WeakMap,m=[],x=null,_=!1,p=null,u=null,T=null,M=null,S=null,L=null,P=null,R=new Ye(0,0,0),N=0,b=!1,y=null,C=null,B=null,V=null,Y=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=K>=2);let re=null,de={};const we=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ke=new ot().fromArray(we),Qe=new ot().fromArray(Fe);function Ge(A,te,ne,he){const J=new Uint8Array(4),$=n.createTexture();n.bindTexture(A,$),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ne;pe++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return $}const X={};X[n.TEXTURE_2D]=Ge(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(dn),Ae(!1),me(Ta),Z(n.CULL_FACE),et(Kt);function Z(A){c[A]!==!0&&(n.enable(A),c[A]=!0)}function ue(A){c[A]!==!1&&(n.disable(A),c[A]=!1)}function Ce(A,te){return h[A]!==te?(n.bindFramebuffer(A,te),h[A]=te,A===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=te),A===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=te),!0):!1}function be(A,te){let ne=m,he=!1;if(A){ne=f.get(te),ne===void 0&&(ne=[],f.set(te,ne));const J=A.textures;if(ne.length!==J.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let $=0,pe=J.length;$<pe;$++)ne[$]=n.COLOR_ATTACHMENT0+$;ne.length=J.length,he=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,he=!0);he&&n.drawBuffers(ne)}function ze(A){return x!==A?(n.useProgram(A),x=A,!0):!1}const mt={[Ui]:n.FUNC_ADD,[Il]:n.FUNC_SUBTRACT,[Ul]:n.FUNC_REVERSE_SUBTRACT};mt[Nl]=n.MIN,mt[Fl]=n.MAX;const E={[Ol]:n.ZERO,[Io]:n.ONE,[kl]:n.SRC_COLOR,[hr]:n.SRC_ALPHA,[Wl]:n.SRC_ALPHA_SATURATE,[Vl]:n.DST_COLOR,[zl]:n.DST_ALPHA,[Bl]:n.ONE_MINUS_SRC_COLOR,[gs]:n.ONE_MINUS_SRC_ALPHA,[Gl]:n.ONE_MINUS_DST_COLOR,[Hl]:n.ONE_MINUS_DST_ALPHA,[Xl]:n.CONSTANT_COLOR,[ql]:n.ONE_MINUS_CONSTANT_COLOR,[$l]:n.CONSTANT_ALPHA,[Yl]:n.ONE_MINUS_CONSTANT_ALPHA};function et(A,te,ne,he,J,$,pe,Pe,Ze,We){if(A===Kt){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),A!==Do){if(A!==p||We!==b){if((u!==Ui||S!==Ui)&&(n.blendEquation(n.FUNC_ADD),u=Ui,S=Ui),We)switch(A){case on:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Aa:n.blendFunc(n.ONE,n.ONE);break;case Ra:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ca:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case on:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Aa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ra:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ca:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}T=null,M=null,L=null,P=null,R.set(0,0,0),N=0,p=A,b=We}return}J=J||te,$=$||ne,pe=pe||he,(te!==u||J!==S)&&(n.blendEquationSeparate(mt[te],mt[J]),u=te,S=J),(ne!==T||he!==M||$!==L||pe!==P)&&(n.blendFuncSeparate(E[ne],E[he],E[$],E[pe]),T=ne,M=he,L=$,P=pe),(Pe.equals(R)===!1||Ze!==N)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Ze),R.copy(Pe),N=Ze),p=A,b=!1}function Le(A,te){A.side===ai?ue(n.CULL_FACE):Z(n.CULL_FACE);let ne=A.side===Et;te&&(ne=!ne),Ae(ne),A.blending===on&&A.transparent===!1?et(Kt):et(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);const he=A.stencilWrite;o.setTest(he),he&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ge(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(A){y!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),y=A)}function me(A){A!==Pl?(Z(n.CULL_FACE),A!==C&&(A===Ta?n.cullFace(n.BACK):A===Ll?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),C=A}function tt(A){A!==B&&(q&&n.lineWidth(A),B=A)}function ge(A,te,ne){A?(Z(n.POLYGON_OFFSET_FILL),(V!==te||Y!==ne)&&(n.polygonOffset(te,ne),V=te,Y=ne)):ue(n.POLYGON_OFFSET_FILL)}function Ue(A){A?Z(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function ut(A){A===void 0&&(A=n.TEXTURE0+W-1),re!==A&&(n.activeTexture(A),re=A)}function at(A,te,ne){ne===void 0&&(re===null?ne=n.TEXTURE0+W-1:ne=re);let he=de[ne];he===void 0&&(he={type:void 0,texture:void 0},de[ne]=he),(he.type!==A||he.texture!==te)&&(re!==ne&&(n.activeTexture(ne),re=ne),n.bindTexture(A,te||X[A]),he.type=A,he.texture=te)}function w(){const A=de[re];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function G(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(A){Ke.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Ke.copy(A))}function Te(A){Qe.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),Qe.copy(A))}function _e(A,te){let ne=d.get(te);ne===void 0&&(ne=new WeakMap,d.set(te,ne));let he=ne.get(A);he===void 0&&(he=n.getUniformBlockIndex(te,A.name),ne.set(A,he))}function ae(A,te){const he=d.get(te).get(A);l.get(te)!==he&&(n.uniformBlockBinding(te,he,A.__bindingPointIndex),l.set(te,he))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},re=null,de={},h={},f=new WeakMap,m=[],x=null,_=!1,p=null,u=null,T=null,M=null,S=null,L=null,P=null,R=new Ye(0,0,0),N=0,b=!1,y=null,C=null,B=null,V=null,Y=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ue,bindFramebuffer:Ce,drawBuffers:be,useProgram:ze,setBlending:et,setMaterial:Le,setFlipSided:Ae,setCullFace:me,setLineWidth:tt,setPolygonOffset:ge,setScissorTest:Ue,activeTexture:ut,bindTexture:at,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:xe,texImage3D:ee,updateUBOMapping:_e,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:ve,texSubImage2D:G,texSubImage3D:j,compressedTexSubImage2D:H,compressedTexSubImage3D:ye,scissor:le,viewport:Te,reset:De}}function Cp(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ke,c=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,g){return m?new OffscreenCanvas(w,g):Ln("canvas")}function _(w,g,U){let G=1;const j=at(w);if((j.width>U||j.height>U)&&(G=U/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(G*j.width),ye=Math.floor(G*j.height);h===void 0&&(h=x(H,ye));const ie=g?x(H,ye):h;return ie.width=H,ie.height=ye,ie.getContext("2d").drawImage(w,0,0,H,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+H+"x"+ye+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,g,U,G,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=g;if(g===n.RED&&(U===n.FLOAT&&(H=n.R32F),U===n.HALF_FLOAT&&(H=n.R16F),U===n.UNSIGNED_BYTE&&(H=n.R8)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.R8UI),U===n.UNSIGNED_SHORT&&(H=n.R16UI),U===n.UNSIGNED_INT&&(H=n.R32UI),U===n.BYTE&&(H=n.R8I),U===n.SHORT&&(H=n.R16I),U===n.INT&&(H=n.R32I)),g===n.RG&&(U===n.FLOAT&&(H=n.RG32F),U===n.HALF_FLOAT&&(H=n.RG16F),U===n.UNSIGNED_BYTE&&(H=n.RG8)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RG8UI),U===n.UNSIGNED_SHORT&&(H=n.RG16UI),U===n.UNSIGNED_INT&&(H=n.RG32UI),U===n.BYTE&&(H=n.RG8I),U===n.SHORT&&(H=n.RG16I),U===n.INT&&(H=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RGB8UI),U===n.UNSIGNED_SHORT&&(H=n.RGB16UI),U===n.UNSIGNED_INT&&(H=n.RGB32UI),U===n.BYTE&&(H=n.RGB8I),U===n.SHORT&&(H=n.RGB16I),U===n.INT&&(H=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),U===n.UNSIGNED_INT&&(H=n.RGBA32UI),U===n.BYTE&&(H=n.RGBA8I),U===n.SHORT&&(H=n.RGBA16I),U===n.INT&&(H=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),g===n.RGBA){const ye=j?vs:Ve.getTransfer(G);U===n.FLOAT&&(H=n.RGBA32F),U===n.HALF_FLOAT&&(H=n.RGBA16F),U===n.UNSIGNED_BYTE&&(H=ye===$e?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function S(w,g){let U;return w?g===null||g===zi||g===Rn?U=n.DEPTH24_STENCIL8:g===li?U=n.DEPTH32F_STENCIL8:g===An&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zi||g===Rn?U=n.DEPTH_COMPONENT24:g===li?U=n.DEPTH_COMPONENT32F:g===An&&(U=n.DEPTH_COMPONENT16),U}function L(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==xt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){const g=w.target;g.removeEventListener("dispose",P),N(g),g.isVideoTexture&&c.delete(g)}function R(w){const g=w.target;g.removeEventListener("dispose",R),y(g)}function N(w){const g=i.get(w);if(g.__webglInit===void 0)return;const U=w.source,G=f.get(U);if(G){const j=G[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(w),Object.keys(G).length===0&&f.delete(U)}i.remove(w)}function b(w){const g=i.get(w);n.deleteTexture(g.__webglTexture);const U=w.source,G=f.get(U);delete G[g.__cacheKey],a.memory.textures--}function y(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let j=0;j<g.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[G][j]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=w.textures;for(let G=0,j=U.length;G<j;G++){const H=i.get(U[G]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(w)}let C=0;function B(){C=0}function V(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function Y(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function W(w,g){const U=i.get(w);if(w.isVideoTexture&&Ue(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(U,w,g);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function q(w,g){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){X(U,w,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function K(w,g){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){X(U,w,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function z(w,g){const U=i.get(w);if(w.version>0&&U.__version!==w.version){Z(U,w,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const re={[br]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[wr]:n.MIRRORED_REPEAT},de={[Pt]:n.NEAREST,[sd]:n.NEAREST_MIPMAP_NEAREST,[Hn]:n.NEAREST_MIPMAP_LINEAR,[xt]:n.LINEAR,[As]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},we={[dd]:n.NEVER,[md]:n.ALWAYS,[cd]:n.LESS,[Wo]:n.LEQUAL,[hd]:n.EQUAL,[pd]:n.GEQUAL,[ud]:n.GREATER,[fd]:n.NOTEQUAL};function Fe(w,g){if(g.type===li&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===xt||g.magFilter===As||g.magFilter===Hn||g.magFilter===ki||g.minFilter===xt||g.minFilter===As||g.minFilter===Hn||g.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,re[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,re[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,re[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,de[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,de[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==Hn&&g.minFilter!==ki||g.type===li&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(w,g){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));const G=g.source;let j=f.get(G);j===void 0&&(j={},f.set(G,j));const H=Y(g);if(H!==w.__cacheKey){j[H]===void 0&&(j[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[H].usedTimes++;const ye=j[w.__cacheKey];ye!==void 0&&(j[w.__cacheKey].usedTimes--,ye.usedTimes===0&&b(g)),w.__cacheKey=H,w.__webglTexture=j[H].texture}return U}function Qe(w,g,U){return Math.floor(Math.floor(w/U)/g)}function Ge(w,g,U,G){const H=w.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,G,g.data);else{H.sort((ee,le)=>ee.start-le.start);let ye=0;for(let ee=1;ee<H.length;ee++){const le=H[ye],Te=H[ee],_e=le.start+le.count,ae=Qe(Te.start,g.width,4),De=Qe(le.start,g.width,4);Te.start<=_e+1&&ae===De&&Qe(Te.start+Te.count-1,g.width,4)===ae?le.count=Math.max(le.count,Te.start+Te.count-le.start):(++ye,H[ye]=Te)}H.length=ye+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ee=0,le=H.length;ee<le;ee++){const Te=H[ee],_e=Math.floor(Te.start/4),ae=Math.ceil(Te.count/4),De=_e%g.width,A=Math.floor(_e/g.width),te=ae,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,A),t.texSubImage2D(n.TEXTURE_2D,0,De,A,te,ne,U,G,g.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function X(w,g,U){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const j=Ke(w,g),H=g.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+U);const ye=i.get(H);if(H.version!==ye.__version||j===!0){t.activeTexture(n.TEXTURE0+U);const ie=Ve.getPrimaries(Ve.workingColorSpace),ve=g.colorSpace===yi?null:Ve.getPrimaries(g.colorSpace),xe=g.colorSpace===yi||ie===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ee=_(g.image,!1,s.maxTextureSize);ee=ut(g,ee);const le=r.convert(g.format,g.colorSpace),Te=r.convert(g.type);let _e=M(g.internalFormat,le,Te,g.colorSpace,g.isVideoTexture);Fe(G,g);let ae;const De=g.mipmaps,A=g.isVideoTexture!==!0,te=ye.__version===void 0||j===!0,ne=H.dataReady,he=L(g,ee);if(g.isDepthTexture)_e=S(g.format===Pn,g.type),te&&(A?t.texStorage2D(n.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,le,Te,null));else if(g.isDataTexture)if(De.length>0){A&&te&&t.texStorage2D(n.TEXTURE_2D,he,_e,De[0].width,De[0].height);for(let J=0,$=De.length;J<$;J++)ae=De[J],A?ne&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Te,ae.data):t.texImage2D(n.TEXTURE_2D,J,_e,ae.width,ae.height,0,le,Te,ae.data);g.generateMipmaps=!1}else A?(te&&t.texStorage2D(n.TEXTURE_2D,he,_e,ee.width,ee.height),ne&&Ge(g,ee,le,Te)):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,le,Te,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){A&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,_e,De[0].width,De[0].height,ee.depth);for(let J=0,$=De.length;J<$;J++)if(ae=De[J],g.format!==Ct)if(le!==null)if(A){if(ne)if(g.layerUpdates.size>0){const pe=Ka(ae.width,ae.height,g.format,g.type);for(const Pe of g.layerUpdates){const Ze=ae.data.subarray(Pe*pe/ae.data.BYTES_PER_ELEMENT,(Pe+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Pe,ae.width,ae.height,1,le,Ze)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,_e,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,Te,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,_e,ae.width,ae.height,ee.depth,0,le,Te,ae.data)}else{A&&te&&t.texStorage2D(n.TEXTURE_2D,he,_e,De[0].width,De[0].height);for(let J=0,$=De.length;J<$;J++)ae=De[J],g.format!==Ct?le!==null?A?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,_e,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?ne&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Te,ae.data):t.texImage2D(n.TEXTURE_2D,J,_e,ae.width,ae.height,0,le,Te,ae.data)}else if(g.isDataArrayTexture)if(A){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,_e,ee.width,ee.height,ee.depth),ne)if(g.layerUpdates.size>0){const J=Ka(ee.width,ee.height,g.format,g.type);for(const $ of g.layerUpdates){const pe=ee.data.subarray($*J/ee.data.BYTES_PER_ELEMENT,($+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,le,Te,pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Te,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,le,Te,ee.data);else if(g.isData3DTexture)A?(te&&t.texStorage3D(n.TEXTURE_3D,he,_e,ee.width,ee.height,ee.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Te,ee.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,le,Te,ee.data);else if(g.isFramebufferTexture){if(te)if(A)t.texStorage2D(n.TEXTURE_2D,he,_e,ee.width,ee.height);else{let J=ee.width,$=ee.height;for(let pe=0;pe<he;pe++)t.texImage2D(n.TEXTURE_2D,pe,_e,J,$,0,le,Te,null),J>>=1,$>>=1}}else if(De.length>0){if(A&&te){const J=at(De[0]);t.texStorage2D(n.TEXTURE_2D,he,_e,J.width,J.height)}for(let J=0,$=De.length;J<$;J++)ae=De[J],A?ne&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,Te,ae):t.texImage2D(n.TEXTURE_2D,J,_e,le,Te,ae);g.generateMipmaps=!1}else if(A){if(te){const J=at(ee);t.texStorage2D(n.TEXTURE_2D,he,_e,J.width,J.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Te,ee)}else t.texImage2D(n.TEXTURE_2D,0,_e,le,Te,ee);p(g)&&u(G),ye.__version=H.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Z(w,g,U){if(g.image.length!==6)return;const G=Ke(w,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+U);const H=i.get(j);if(j.version!==H.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const ye=Ve.getPrimaries(Ve.workingColorSpace),ie=g.colorSpace===yi?null:Ve.getPrimaries(g.colorSpace),ve=g.colorSpace===yi||ye===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!xe&&!ee?le[$]=_(g.image[$],!0,s.maxCubemapSize):le[$]=ee?g.image[$].image:g.image[$],le[$]=ut(g,le[$]);const Te=le[0],_e=r.convert(g.format,g.colorSpace),ae=r.convert(g.type),De=M(g.internalFormat,_e,ae,g.colorSpace),A=g.isVideoTexture!==!0,te=H.__version===void 0||G===!0,ne=j.dataReady;let he=L(g,Te);Fe(n.TEXTURE_CUBE_MAP,g);let J;if(xe){A&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,De,Te.width,Te.height);for(let $=0;$<6;$++){J=le[$].mipmaps;for(let pe=0;pe<J.length;pe++){const Pe=J[pe];g.format!==Ct?_e!==null?A?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,Pe.width,Pe.height,_e,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,Pe.width,Pe.height,_e,ae,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,De,Pe.width,Pe.height,0,_e,ae,Pe.data)}}}else{if(J=g.mipmaps,A&&te){J.length>0&&he++;const $=at(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,De,$.width,$.height)}for(let $=0;$<6;$++)if(ee){A?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,_e,ae,le[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,le[$].width,le[$].height,0,_e,ae,le[$].data);for(let pe=0;pe<J.length;pe++){const Ze=J[pe].image[$].image;A?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,Ze.width,Ze.height,_e,ae,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,De,Ze.width,Ze.height,0,_e,ae,Ze.data)}}else{A?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e,ae,le[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,_e,ae,le[$]);for(let pe=0;pe<J.length;pe++){const Pe=J[pe];A?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,_e,ae,Pe.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,De,_e,ae,Pe.image[$])}}}p(g)&&u(n.TEXTURE_CUBE_MAP),H.__version=j.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ue(w,g,U,G,j,H){const ye=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),ve=M(U.internalFormat,ye,ie,U.colorSpace),xe=i.get(g),ee=i.get(U);if(ee.__renderTarget=g,!xe.__hasExternalTextures){const le=Math.max(1,g.width>>H),Te=Math.max(1,g.height>>H);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,H,ve,le,Te,g.depth,0,ye,ie,null):t.texImage2D(j,H,ve,le,Te,0,ye,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ge(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,ee.__webglTexture,0,tt(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,ee.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(w,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){const G=g.depthTexture,j=G&&G.isDepthTexture?G.type:null,H=S(g.stencilBuffer,j),ye=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=tt(g);ge(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,H,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,H,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,H,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,w)}else{const G=g.textures;for(let j=0;j<G.length;j++){const H=G[j],ye=r.convert(H.format,H.colorSpace),ie=r.convert(H.type),ve=M(H.internalFormat,ye,ie,H.colorSpace),xe=tt(g);U&&ge(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ve,g.width,g.height):ge(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ve,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ve,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const j=G.__webglTexture,H=tt(g);if(g.depthTexture.format===Cn)ge(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(g.depthTexture.format===Pn)ge(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ze(w){const g=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=G}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const G=w.texture.mipmaps;G&&G.length>0?be(g.__webglFramebuffer[0],w):be(g.__webglFramebuffer,w)}else if(U){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),Ce(g.__webglDepthbuffer[G],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,H)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ce(g.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(w,g,U){const G=i.get(w);g!==void 0&&ue(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ze(w)}function E(w){const g=w.texture,U=i.get(w),G=i.get(g);w.addEventListener("dispose",R);const j=w.textures,H=w.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++),H){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let ve=0;ve<g.mipmaps.length;ve++)U.__webglFramebuffer[ie][ve]=n.createFramebuffer()}else U.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)U.__webglFramebuffer[ie]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ie=0,ve=j.length;ie<ve;ie++){const xe=i.get(j[ie]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const ve=j[ie];U.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);const xe=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),le=M(ve.internalFormat,xe,ee,ve.colorSpace,w.isXRRenderTarget===!0),Te=tt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)ue(U.__webglFramebuffer[ie][ve],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else ue(U.__webglFramebuffer[ie],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(g)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,ve=j.length;ie<ve;ie++){const xe=j[ie],ee=i.get(xe);let le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),Fe(le,xe),ue(U.__webglFramebuffer,w,xe,n.COLOR_ATTACHMENT0+ie,le,0),p(xe)&&u(le)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),Fe(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)ue(U.__webglFramebuffer[ve],w,g,n.COLOR_ATTACHMENT0,ie,ve);else ue(U.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,ie,0);p(g)&&u(ie),t.unbindTexture()}w.depthBuffer&&ze(w)}function et(w){const g=w.textures;for(let U=0,G=g.length;U<G;U++){const j=g[U];if(p(j)){const H=T(w),ye=i.get(j).__webglTexture;t.bindTexture(H,ye),u(H),t.unbindTexture()}}}const Le=[],Ae=[];function me(w){if(w.samples>0){if(ge(w)===!1){const g=w.textures,U=w.width,G=w.height;let j=n.COLOR_BUFFER_BIT;const H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(w),ie=g.length>1;if(ie)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ve=w.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const ee=i.get(g[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,j,n.NEAREST),l===!0&&(Le.length=0,Ae.length=0,Le.push(n.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Le.push(H),Ae.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const ee=i.get(g[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function tt(w){return Math.min(s.maxSamples,w.samples)}function ge(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ue(w){const g=a.render.frame;c.get(w)!==g&&(c.set(w,g),w.update())}function ut(w,g){const U=w.colorSpace,G=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==un&&U!==yi&&(Ve.getTransfer(U)===$e?(G!==Ct||j!==Wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function at(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=mt,this.setupRenderTarget=E,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ge}function Pp(n,e){function t(i,s=yi){let r;const a=Ve.getTransfer(s);if(i===Wt)return n.UNSIGNED_BYTE;if(i===oa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===la)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ko)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fo)return n.BYTE;if(i===Oo)return n.SHORT;if(i===An)return n.UNSIGNED_SHORT;if(i===aa)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===pn)return n.HALF_FLOAT;if(i===zo)return n.ALPHA;if(i===Ho)return n.RGB;if(i===Ct)return n.RGBA;if(i===Cn)return n.DEPTH_COMPONENT;if(i===Pn)return n.DEPTH_STENCIL;if(i===Vo)return n.RED;if(i===da)return n.RED_INTEGER;if(i===Go)return n.RG;if(i===ca)return n.RG_INTEGER;if(i===ha)return n.RGBA_INTEGER;if(i===cs||i===hs||i===us||i===fs)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sr||i===Er||i===Mr||i===Tr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Er)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ar||i===Rr||i===Cr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ar||i===Rr)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pr||i===Lr||i===Dr||i===Ir||i===Ur||i===Nr||i===Fr||i===Or||i===kr||i===Br||i===zr||i===Hr||i===Vr||i===Gr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ir)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ur)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Or)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Br)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gr)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wr||i===Xr||i===qr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wr)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$r||i===Yr||i===jr||i===Kr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ip{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xt({vertexShader:Lp,fragmentShader:Dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Up extends mn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,d=null,c=null,h=null,f=null,m=null,x=null;const _=typeof XRWebGLBinding<"u",p=new Ip,u={},T=t.getContextAttributes();let M=null,S=null;const L=[],P=[],R=new ke;let N=null;const b=new Vt;b.viewport=new ot;const y=new Vt;y.viewport=new ot;const C=[b,y],B=new ec;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=L[X];return Z===void 0&&(Z=new Ks,L[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=L[X];return Z===void 0&&(Z=new Ks,L[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=L[X];return Z===void 0&&(Z=new Ks,L[X]=Z),Z.getHandSpace()};function W(X){const Z=P.indexOf(X.inputSource);if(Z===-1)return;const ue=L[Z];ue!==void 0&&(ue.update(X.inputSource,X.frame,d||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let X=0;X<L.length;X++){const Z=P[X];Z!==null&&(P[X]=null,L[X].disconnect(Z))}V=null,Y=null,p.reset();for(const X in u)delete u[X];e.setRenderTarget(M),m=null,f=null,h=null,s=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ce=null,be=null;T.depth&&(be=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=T.stencil?Pn:Cn,Ce=T.stencil?Rn:zi);const ze={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ci(f.textureWidth,f.textureHeight,{format:Ct,type:Wt,depthTexture:new nl(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ci(m.framebufferWidth,m.framebufferHeight,{format:Ct,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(X){for(let Z=0;Z<X.removed.length;Z++){const ue=X.removed[Z],Ce=P.indexOf(ue);Ce>=0&&(P[Ce]=null,L[Ce].disconnect(ue))}for(let Z=0;Z<X.added.length;Z++){const ue=X.added[Z];let Ce=P.indexOf(ue);if(Ce===-1){for(let ze=0;ze<L.length;ze++)if(ze>=P.length){P.push(ue),Ce=ze;break}else if(P[ze]===null){P[ze]=ue,Ce=ze;break}if(Ce===-1)break}const be=L[Ce];be&&be.connect(ue)}}const z=new O,re=new O;function de(X,Z,ue){z.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(ue.matrixWorld);const Ce=z.distanceTo(re),be=Z.projectionMatrix.elements,ze=ue.projectionMatrix.elements,mt=be[14]/(be[10]-1),E=be[14]/(be[10]+1),et=(be[9]+1)/be[5],Le=(be[9]-1)/be[5],Ae=(be[8]-1)/be[0],me=(ze[8]+1)/ze[0],tt=mt*Ae,ge=mt*me,Ue=Ce/(-Ae+me),ut=Ue*-Ae;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ut),X.translateZ(Ue),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const at=mt+Ue,w=E+Ue,g=tt-ut,U=ge+(Ce-ut),G=et*E/w*at,j=Le*E/w*at;X.projectionMatrix.makePerspective(g,U,G,j,at,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function we(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Z=X.near,ue=X.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),B.near=y.near=b.near=Z,B.far=y.far=b.far=ue,(V!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,Y=B.far),B.layers.mask=X.layers.mask|6,b.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;const Ce=X.parent,be=B.cameras;we(B,Ce);for(let ze=0;ze<be.length;ze++)we(be[ze],Ce);be.length===2?de(B,b,y):B.projectionMatrix.copy(b.projectionMatrix),Fe(X,B,Ce)};function Fe(X,Z,ue){ue===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(X){return u[X]};let Ke=null;function Qe(X,Z){if(c=Z.getViewerPose(d||a),x=Z,c!==null){const ue=c.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;ue.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let E=0;E<ue.length;E++){const et=ue[E];let Le=null;if(m!==null)Le=m.getViewport(et);else{const me=h.getViewSubImage(f,et);Le=me.viewport,E===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let Ae=C[E];Ae===void 0&&(Ae=new Vt,Ae.layers.enable(E),Ae.viewport=new ot,C[E]=Ae),Ae.matrix.fromArray(et.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(et.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),E===0&&(B.matrix.copy(Ae.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(Ae)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const E=h.getDepthInformation(ue[0]);E&&E.isValid&&E.texture&&p.init(E,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let E=0;E<ue.length;E++){const et=ue[E].camera;if(et){let Le=u[et];Le||(Le=new sl,u[et]=Le);const Ae=h.getCameraImage(et);Le.sourceTexture=Ae}}}}for(let ue=0;ue<L.length;ue++){const Ce=P[ue],be=L[ue];Ce!==null&&be!==void 0&&be.update(Ce,Z,d||a)}Ke&&Ke(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Ge=new rl;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(X){Ke=X},this.dispose=function(){}}}const Li=new hi,Np=new dt;function Fp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Jo(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,T,M,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),c(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(r(p,u),x(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,T,M):u.isSpriteMaterial?d(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Et&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Et&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u),M=T.envMap,S=T.envMapRotation;M&&(p.envMap.value=M,Li.copy(S),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(Np.makeRotationFromEuler(Li)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,T,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Et&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Op(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const S=M.program;i.uniformBlockBinding(T,S)}function d(T,M){let S=s[T.id];S===void 0&&(x(T),S=c(T),s[T.id]=S,T.addEventListener("dispose",p));const L=M.program;i.updateUBOMapping(T,L);const P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function c(T){const M=h();T.__bindingPointIndex=M;const S=n.createBuffer(),L=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=s[T.id],S=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=S.length;P<R;P++){const N=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,y=N.length;b<y;b++){const C=N[b];if(m(C,P,b,L)===!0){const B=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let W=0;W<V.length;W++){const q=V[W],K=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,M,S,L){const P=T.value,R=M+"_"+S;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const N=L[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return L[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function x(T){const M=T.uniforms;let S=0;const L=16;for(let R=0,N=M.length;R<N;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,C=b.length;y<C;y++){const B=b[y],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,W=V.length;Y<W;Y++){const q=V[Y],K=_(q),z=S%L,re=z%K.boundary,de=z+re;S+=re,de!==0&&L-de<K.storage&&(S+=L-de),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=K.storage}}}const P=S%L;return P>0&&(S+=L-P),T.__size=S,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:d,dispose:u}}class cl{constructor(e={}){const{canvas:t=vd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),_=new Int32Array(4);let p=null,u=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let L=!1;this._outputColorSpace=Nt;let P=0,R=0,N=null,b=-1,y=null;const C=new ot,B=new ot;let V=null;const Y=new Ye(0);let W=0,q=t.width,K=t.height,z=1,re=null,de=null;const we=new ot(0,0,q,K),Fe=new ot(0,0,q,K);let Ke=!1;const Qe=new il;let Ge=!1,X=!1;const Z=new dt,ue=new O,Ce=new ot,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function mt(){return N===null?z:1}let E=i;function et(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ra}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",J,!1),E===null){const D="webgl2";if(E=et(D,v),E===null)throw et(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Le,Ae,me,tt,ge,Ue,ut,at,w,g,U,G,j,H,ye,ie,ve,xe,ee,le,Te,_e,ae,De;function A(){Le=new $u(E),Le.init(),_e=new Pp(E,Le),Ae=new zu(E,Le,e,_e),me=new Rp(E,Le),Ae.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),tt=new Ku(E),ge=new mp,Ue=new Cp(E,Le,me,ge,Ae,_e,tt),ut=new Vu(S),at=new qu(S),w=new ic(E),ae=new ku(E,w),g=new Yu(E,w,tt,ae),U=new Ju(E,g,w,tt),ee=new Zu(E,Ae,Ue),ie=new Hu(ge),G=new pp(S,ut,at,Le,Ae,ae,ie),j=new Fp(S,ge),H=new vp,ye=new Sp(Le),xe=new Ou(S,ut,at,me,U,m,l),ve=new Tp(S,U,Ae),De=new Op(E,tt,Ae,me),le=new Bu(E,Le,tt),Te=new ju(E,Le,tt),tt.programs=G.programs,S.capabilities=Ae,S.extensions=Le,S.properties=ge,S.renderLists=H,S.shadowMap=ve,S.state=me,S.info=tt}A();const te=new Up(S,E);this.xr=te,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const v=Le.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Le.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(q,K,!1))},this.getSize=function(v){return v.set(q,K)},this.setSize=function(v,D,F=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,K=D,t.width=Math.floor(v*z),t.height=Math.floor(D*z),F===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(q*z,K*z).floor()},this.setDrawingBufferSize=function(v,D,F){q=v,K=D,z=F,t.width=Math.floor(v*F),t.height=Math.floor(D*F),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,D,F,k){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,D,F,k),me.viewport(C.copy(we).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(Fe)},this.setScissor=function(v,D,F,k){v.isVector4?Fe.set(v.x,v.y,v.z,v.w):Fe.set(v,D,F,k),me.scissor(B.copy(Fe).multiplyScalar(z).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(v){me.setScissorTest(Ke=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,F=!0){let k=0;if(v){let I=!1;if(N!==null){const Q=N.texture.format;I=Q===ha||Q===ca||Q===da}if(I){const Q=N.texture.type,oe=Q===Wt||Q===zi||Q===An||Q===Rn||Q===oa||Q===la,fe=xe.getClearColor(),ce=xe.getClearAlpha(),Me=fe.r,Re=fe.g,Se=fe.b;oe?(x[0]=Me,x[1]=Re,x[2]=Se,x[3]=ce,E.clearBufferuiv(E.COLOR,0,x)):(_[0]=Me,_[1]=Re,_[2]=Se,_[3]=ce,E.clearBufferiv(E.COLOR,0,_))}else k|=E.COLOR_BUFFER_BIT}D&&(k|=E.DEPTH_BUFFER_BIT),F&&(k|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",J,!1),xe.dispose(),H.dispose(),ye.dispose(),ge.dispose(),ut.dispose(),at.dispose(),U.dispose(),ae.dispose(),De.dispose(),G.dispose(),te.dispose(),te.removeEventListener("sessionstart",qt),te.removeEventListener("sessionend",ya),Ei.stop()};function ne(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const v=tt.autoReset,D=ve.enabled,F=ve.autoUpdate,k=ve.needsUpdate,I=ve.type;A(),tt.autoReset=v,ve.enabled=D,ve.autoUpdate=F,ve.needsUpdate=k,ve.type=I}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $(v){const D=v.target;D.removeEventListener("dispose",$),pe(D)}function pe(v){Pe(v),ge.remove(v)}function Pe(v){const D=ge.get(v).programs;D!==void 0&&(D.forEach(function(F){G.releaseProgram(F)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,F,k,I,Q){D===null&&(D=be);const oe=I.isMesh&&I.matrixWorld.determinant()<0,fe=El(v,D,F,k,I);me.setMaterial(k,oe);let ce=F.index,Me=1;if(k.wireframe===!0){if(ce=g.getWireframeAttribute(F),ce===void 0)return;Me=2}const Re=F.drawRange,Se=F.attributes.position;let Oe=Re.start*Me,qe=(Re.start+Re.count)*Me;Q!==null&&(Oe=Math.max(Oe,Q.start*Me),qe=Math.min(qe,(Q.start+Q.count)*Me)),ce!==null?(Oe=Math.max(Oe,0),qe=Math.min(qe,ce.count)):Se!=null&&(Oe=Math.max(Oe,0),qe=Math.min(qe,Se.count));const rt=qe-Oe;if(rt<0||rt===1/0)return;ae.setup(I,k,fe,F,ce);let Je,je=le;if(ce!==null&&(Je=w.get(ce),je=Te,je.setIndex(Je)),I.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*mt()),je.setMode(E.LINES)):je.setMode(E.TRIANGLES);else if(I.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),me.setLineWidth(Ee*mt()),I.isLineSegments?je.setMode(E.LINES):I.isLineLoop?je.setMode(E.LINE_LOOP):je.setMode(E.LINE_STRIP)}else I.isPoints?je.setMode(E.POINTS):I.isSprite&&je.setMode(E.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Dn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ee=I._multiDrawStarts,it=I._multiDrawCounts,He=I._multiDrawCount,Mt=ce?w.get(ce).bytesPerElement:1,Gi=ge.get(k).currentProgram.getUniforms();for(let Tt=0;Tt<He;Tt++)Gi.setValue(E,"_gl_DrawID",Tt),je.render(Ee[Tt]/Mt,it[Tt])}else if(I.isInstancedMesh)je.renderInstances(Oe,rt,I.count);else if(F.isInstancedBufferGeometry){const Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,it=Math.min(F.instanceCount,Ee);je.renderInstances(Oe,rt,it)}else je.render(Oe,rt)};function Ze(v,D,F){v.transparent===!0&&v.side===ai&&v.forceSinglePass===!1?(v.side=Et,v.needsUpdate=!0,zn(v,D,F),v.side=Si,v.needsUpdate=!0,zn(v,D,F),v.side=ai):zn(v,D,F)}this.compile=function(v,D,F=null){F===null&&(F=v),u=ye.get(F),u.init(D),M.push(u),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),v!==F&&v.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const k=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];Ze(fe,F,I),k.add(fe)}else Ze(Q,F,I),k.add(Q)}),u=M.pop(),k},this.compileAsync=function(v,D,F=null){const k=this.compile(v,D,F);return new Promise(I=>{function Q(){if(k.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){I(v);return}setTimeout(Q,10)}Le.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let We=null;function Jt(v){We&&We(v)}function qt(){Ei.stop()}function ya(){Ei.start()}const Ei=new rl;Ei.setAnimationLoop(Jt),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(v){We=v,te.setAnimationLoop(v),v===null?Ei.stop():Ei.start()},te.addEventListener("sessionstart",qt),te.addEventListener("sessionend",ya),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,N),u=ye.get(v,M.length),u.init(D),M.push(u),Z.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(Z,jt,D.reversedDepth),X=this.localClippingEnabled,Ge=ie.init(this.clippingPlanes,X),p=H.get(v,T.length),p.init(),T.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Ms(Q,D,-1/0,S.sortObjects)}Ms(v,D,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(re,de),ze=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ze&&xe.addToRenderList(p,v),this.info.render.frame++,Ge===!0&&ie.beginShadows();const F=u.state.shadowsArray;ve.render(F,v,D),Ge===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,I=p.transmissive;if(u.setupLights(),D.isArrayCamera){const Q=D.cameras;if(I.length>0)for(let oe=0,fe=Q.length;oe<fe;oe++){const ce=Q[oe];wa(k,I,v,ce)}ze&&xe.render(v);for(let oe=0,fe=Q.length;oe<fe;oe++){const ce=Q[oe];ba(p,v,ce,ce.viewport)}}else I.length>0&&wa(k,I,v,D),ze&&xe.render(v),ba(p,v,D);N!==null&&R===0&&(Ue.updateMultisampleRenderTarget(N),Ue.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(S,v,D),ae.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(u=M[M.length-1],Ge===!0&&ie.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Ms(v,D,F,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){k&&Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const oe=U.update(v),fe=v.material;fe.visible&&p.push(v,oe,fe,F,Ce.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){const oe=U.update(v),fe=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ce.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ce.copy(oe.boundingSphere.center)),Ce.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(fe)){const ce=oe.groups;for(let Me=0,Re=ce.length;Me<Re;Me++){const Se=ce[Me],Oe=fe[Se.materialIndex];Oe&&Oe.visible&&p.push(v,oe,Oe,F,Ce.z,Se)}}else fe.visible&&p.push(v,oe,fe,F,Ce.z,null)}}const Q=v.children;for(let oe=0,fe=Q.length;oe<fe;oe++)Ms(Q[oe],D,F,k)}function ba(v,D,F,k){const I=v.opaque,Q=v.transmissive,oe=v.transparent;u.setupLightsView(F),Ge===!0&&ie.setGlobalState(S.clippingPlanes,F),k&&me.viewport(C.copy(k)),I.length>0&&Bn(I,D,F),Q.length>0&&Bn(Q,D,F),oe.length>0&&Bn(oe,D,F),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function wa(v,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?pn:Wt,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const Q=u.state.transmissionRenderTarget[k.id],oe=k.viewport||C;Q.setSize(oe.z*S.transmissionResolutionScale,oe.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),ce=S.getActiveCubeFace(),Me=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(Y),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),ze&&xe.render(F);const Re=S.toneMapping;S.toneMapping=bi;const Se=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),Ge===!0&&ie.setGlobalState(S.clippingPlanes,k),Bn(v,F,k),Ue.updateMultisampleRenderTarget(Q),Ue.updateRenderTargetMipmap(Q),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let qe=0,rt=D.length;qe<rt;qe++){const Je=D[qe],je=Je.object,Ee=Je.geometry,it=Je.material,He=Je.group;if(it.side===ai&&je.layers.test(k.layers)){const Mt=it.side;it.side=Et,it.needsUpdate=!0,Sa(je,F,k,Ee,it,He),it.side=Mt,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ue.updateMultisampleRenderTarget(Q),Ue.updateRenderTargetMipmap(Q))}S.setRenderTarget(fe,ce,Me),S.setClearColor(Y,W),Se!==void 0&&(k.viewport=Se),S.toneMapping=Re}function Bn(v,D,F){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,Q=v.length;I<Q;I++){const oe=v[I],fe=oe.object,ce=oe.geometry,Me=oe.group;let Re=oe.material;Re.allowOverride===!0&&k!==null&&(Re=k),fe.layers.test(F.layers)&&Sa(fe,D,F,ce,Re,Me)}}function Sa(v,D,F,k,I,Q){v.onBeforeRender(S,D,F,k,I,Q),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,D,F,k,v,Q),I.transparent===!0&&I.side===ai&&I.forceSinglePass===!1?(I.side=Et,I.needsUpdate=!0,S.renderBufferDirect(F,D,k,I,v,Q),I.side=Si,I.needsUpdate=!0,S.renderBufferDirect(F,D,k,I,v,Q),I.side=ai):S.renderBufferDirect(F,D,k,I,v,Q),v.onAfterRender(S,D,F,k,I,Q)}function zn(v,D,F){D.isScene!==!0&&(D=be);const k=ge.get(v),I=u.state.lights,Q=u.state.shadowsArray,oe=I.state.version,fe=G.getParameters(v,I.state,Q,D,F),ce=G.getProgramCacheKey(fe);let Me=k.programs;k.environment=v.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(v.isMeshStandardMaterial?at:ut).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Me===void 0&&(v.addEventListener("dispose",$),Me=new Map,k.programs=Me);let Re=Me.get(ce);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===oe)return Ma(v,fe),Re}else fe.uniforms=G.getUniforms(v),v.onBeforeCompile(fe,S),Re=G.acquireProgram(fe,ce),Me.set(ce,Re),k.uniforms=fe.uniforms;const Se=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Ma(v,fe),k.needsLights=Tl(v),k.lightsStateVersion=oe,k.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function Ea(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=ps.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Ma(v,D){const F=ge.get(v);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function El(v,D,F,k,I){D.isScene!==!0&&(D=be),Ue.resetTextureUnits();const Q=D.fog,oe=k.isMeshStandardMaterial?D.environment:null,fe=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:un,ce=(k.isMeshStandardMaterial?at:ut).get(k.envMap||oe),Me=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!F.morphAttributes.position,Oe=!!F.morphAttributes.normal,qe=!!F.morphAttributes.color;let rt=bi;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(rt=S.toneMapping);const Je=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,je=Je!==void 0?Je.length:0,Ee=ge.get(k),it=u.state.lights;if(Ge===!0&&(X===!0||v!==y)){const _t=v===y&&k.id===b;ie.setState(k,v,_t)}let He=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==it.state.version||Ee.outputColorSpace!==fe||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==ce||k.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Me||Ee.vertexTangents!==Re||Ee.morphTargets!==Se||Ee.morphNormals!==Oe||Ee.morphColors!==qe||Ee.toneMapping!==rt||Ee.morphTargetsCount!==je)&&(He=!0):(He=!0,Ee.__version=k.version);let Mt=Ee.currentProgram;He===!0&&(Mt=zn(k,D,I));let Gi=!1,Tt=!1,vn=!1;const nt=Mt.getUniforms(),Dt=Ee.uniforms;if(me.useProgram(Mt.program)&&(Gi=!0,Tt=!0,vn=!0),k.id!==b&&(b=k.id,Tt=!0),Gi||y!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(E,"projectionMatrix",v.projectionMatrix),nt.setValue(E,"viewMatrix",v.matrixWorldInverse);const bt=nt.map.cameraPosition;bt!==void 0&&bt.setValue(E,ue.setFromMatrixPosition(v.matrixWorld)),Ae.logarithmicDepthBuffer&&nt.setValue(E,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&nt.setValue(E,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Tt=!0,vn=!0)}if(I.isSkinnedMesh){nt.setOptional(E,I,"bindMatrix"),nt.setOptional(E,I,"bindMatrixInverse");const _t=I.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),nt.setValue(E,"boneTexture",_t.boneTexture,Ue))}I.isBatchedMesh&&(nt.setOptional(E,I,"batchingTexture"),nt.setValue(E,"batchingTexture",I._matricesTexture,Ue),nt.setOptional(E,I,"batchingIdTexture"),nt.setValue(E,"batchingIdTexture",I._indirectTexture,Ue),nt.setOptional(E,I,"batchingColorTexture"),I._colorsTexture!==null&&nt.setValue(E,"batchingColorTexture",I._colorsTexture,Ue));const It=F.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&ee.update(I,F,Mt),(Tt||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,nt.setValue(E,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Dt.envMap.value=ce,Dt.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Dt.envMapIntensity.value=D.environmentIntensity),Tt&&(nt.setValue(E,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Ml(Dt,vn),Q&&k.fog===!0&&j.refreshFogUniforms(Dt,Q),j.refreshMaterialUniforms(Dt,k,z,K,u.state.transmissionRenderTarget[v.id]),ps.upload(E,Ea(Ee),Dt,Ue)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ps.upload(E,Ea(Ee),Dt,Ue),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&nt.setValue(E,"center",I.center),nt.setValue(E,"modelViewMatrix",I.modelViewMatrix),nt.setValue(E,"normalMatrix",I.normalMatrix),nt.setValue(E,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const _t=k.uniformsGroups;for(let bt=0,Ts=_t.length;bt<Ts;bt++){const Mi=_t[bt];De.update(Mi,Mt),De.bind(Mi,Mt)}}return Mt}function Ml(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Tl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,D,F){const k=ge.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ge.get(v.texture).__webglTexture=D,ge.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const F=ge.get(v);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const Al=E.createFramebuffer();this.setRenderTarget=function(v,D=0,F=0){N=v,P=D,R=F;let k=!0,I=null,Q=!1,oe=!1;if(v){const ce=ge.get(v);if(ce.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(E.FRAMEBUFFER,null),k=!1;else if(ce.__webglFramebuffer===void 0)Ue.setupRenderTarget(v);else if(ce.__hasExternalTextures)Ue.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Se=v.depthTexture;if(ce.__boundDepthTexture!==Se){if(Se!==null&&ge.has(Se)&&(v.width!==Se.image.width||v.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(oe=!0);const Re=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?I=Re[D][F]:I=Re[D],Q=!0):v.samples>0&&Ue.useMultisampledRTT(v)===!1?I=ge.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?I=Re[F]:I=Re,C.copy(v.viewport),B.copy(v.scissor),V=v.scissorTest}else C.copy(we).multiplyScalar(z).floor(),B.copy(Fe).multiplyScalar(z).floor(),V=Ke;if(F!==0&&(I=Al),me.bindFramebuffer(E.FRAMEBUFFER,I)&&k&&me.drawBuffers(v,I),me.viewport(C),me.scissor(B),me.setScissorTest(V),Q){const ce=ge.get(v.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+D,ce.__webglTexture,F)}else if(oe){const ce=D;for(let Me=0;Me<v.textures.length;Me++){const Re=ge.get(v.textures[Me]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Me,Re.__webglTexture,F,ce)}}else if(v!==null&&F!==0){const ce=ge.get(v.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ce.__webglTexture,F)}b=-1},this.readRenderTargetPixels=function(v,D,F,k,I,Q,oe,fe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ce=ce[oe]),ce){me.bindFramebuffer(E.FRAMEBUFFER,ce);try{const Me=v.textures[fe],Re=Me.format,Se=Me.type;if(!Ae.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&F>=0&&F<=v.height-I&&(v.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+fe),E.readPixels(D,F,k,I,_e.convert(Re),_e.convert(Se),Q))}finally{const Me=N!==null?ge.get(N).__webglFramebuffer:null;me.bindFramebuffer(E.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,D,F,k,I,Q,oe,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ce=ce[oe]),ce)if(D>=0&&D<=v.width-k&&F>=0&&F<=v.height-I){me.bindFramebuffer(E.FRAMEBUFFER,ce);const Me=v.textures[fe],Re=Me.format,Se=Me.type;if(!Ae.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Oe),E.bufferData(E.PIXEL_PACK_BUFFER,Q.byteLength,E.STREAM_READ),v.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+fe),E.readPixels(D,F,k,I,_e.convert(Re),_e.convert(Se),0);const qe=N!==null?ge.get(N).__webglFramebuffer:null;me.bindFramebuffer(E.FRAMEBUFFER,qe);const rt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await xd(E,rt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Oe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Q),E.deleteBuffer(Oe),E.deleteSync(rt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,F=0){const k=Math.pow(2,-F),I=Math.floor(v.image.width*k),Q=Math.floor(v.image.height*k),oe=D!==null?D.x:0,fe=D!==null?D.y:0;Ue.setTexture2D(v,0),E.copyTexSubImage2D(E.TEXTURE_2D,F,0,0,oe,fe,I,Q),me.unbindTexture()};const Rl=E.createFramebuffer(),Cl=E.createFramebuffer();this.copyTextureToTexture=function(v,D,F=null,k=null,I=0,Q=null){Q===null&&(I!==0?(Dn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let oe,fe,ce,Me,Re,Se,Oe,qe,rt;const Je=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(F!==null)oe=F.max.x-F.min.x,fe=F.max.y-F.min.y,ce=F.isBox3?F.max.z-F.min.z:1,Me=F.min.x,Re=F.min.y,Se=F.isBox3?F.min.z:0;else{const It=Math.pow(2,-I);oe=Math.floor(Je.width*It),fe=Math.floor(Je.height*It),v.isDataArrayTexture?ce=Je.depth:v.isData3DTexture?ce=Math.floor(Je.depth*It):ce=1,Me=0,Re=0,Se=0}k!==null?(Oe=k.x,qe=k.y,rt=k.z):(Oe=0,qe=0,rt=0);const je=_e.convert(D.format),Ee=_e.convert(D.type);let it;D.isData3DTexture?(Ue.setTexture3D(D,0),it=E.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ue.setTexture2DArray(D,0),it=E.TEXTURE_2D_ARRAY):(Ue.setTexture2D(D,0),it=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);const He=E.getParameter(E.UNPACK_ROW_LENGTH),Mt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Gi=E.getParameter(E.UNPACK_SKIP_PIXELS),Tt=E.getParameter(E.UNPACK_SKIP_ROWS),vn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Je.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Je.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Me),E.pixelStorei(E.UNPACK_SKIP_ROWS,Re),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Se);const nt=v.isDataArrayTexture||v.isData3DTexture,Dt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const It=ge.get(v),_t=ge.get(D),bt=ge.get(It.__renderTarget),Ts=ge.get(_t.__renderTarget);me.bindFramebuffer(E.READ_FRAMEBUFFER,bt.__webglFramebuffer),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Mi=0;Mi<ce;Mi++)nt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ge.get(v).__webglTexture,I,Se+Mi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,Q,rt+Mi)),E.blitFramebuffer(Me,Re,oe,fe,Oe,qe,oe,fe,E.DEPTH_BUFFER_BIT,E.NEAREST);me.bindFramebuffer(E.READ_FRAMEBUFFER,null),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||ge.has(v)){const It=ge.get(v),_t=ge.get(D);me.bindFramebuffer(E.READ_FRAMEBUFFER,Rl),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,Cl);for(let bt=0;bt<ce;bt++)nt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,It.__webglTexture,I,Se+bt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,It.__webglTexture,I),Dt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_t.__webglTexture,Q,rt+bt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,_t.__webglTexture,Q),I!==0?E.blitFramebuffer(Me,Re,oe,fe,Oe,qe,oe,fe,E.COLOR_BUFFER_BIT,E.NEAREST):Dt?E.copyTexSubImage3D(it,Q,Oe,qe,rt+bt,Me,Re,oe,fe):E.copyTexSubImage2D(it,Q,Oe,qe,Me,Re,oe,fe);me.bindFramebuffer(E.READ_FRAMEBUFFER,null),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Dt?v.isDataTexture||v.isData3DTexture?E.texSubImage3D(it,Q,Oe,qe,rt,oe,fe,ce,je,Ee,Je.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(it,Q,Oe,qe,rt,oe,fe,ce,je,Je.data):E.texSubImage3D(it,Q,Oe,qe,rt,oe,fe,ce,je,Ee,Je):v.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Q,Oe,qe,oe,fe,je,Ee,Je.data):v.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Q,Oe,qe,Je.width,Je.height,je,Je.data):E.texSubImage2D(E.TEXTURE_2D,Q,Oe,qe,oe,fe,je,Ee,Je);E.pixelStorei(E.UNPACK_ROW_LENGTH,He),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Gi),E.pixelStorei(E.UNPACK_SKIP_ROWS,Tt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,vn),Q===0&&D.generateMipmaps&&E.generateMipmap(it),me.unbindTexture()},this.initRenderTarget=function(v){ge.get(v).__webglFramebuffer===void 0&&Ue.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ue.setTextureCube(v,0):v.isData3DTexture?Ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ue.setTexture2DArray(v,0):Ue.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const Ft=1920,Ht=1080,kp=110,Bp=28,zp=50,Hp=100,Vp=3,Gp=124,Wp=391,Xp=134,rr={waveSpeed:.1,gradientStart:"#ff0000",gradientEnd:"#0000ff"};function ri(n,e,t){if(typeof n!="number"||!Number.isFinite(n))throw new TypeError("Expected a finite number.");return Math.min(t,Math.max(e,n))}function qp(n){if(typeof n!="string"||!/^#[\da-f]{6}$/i.test(n))throw new TypeError("Use a #RRGGBB color.");return n.toLowerCase()}function hl(n){if(!Array.isArray(n)||n.length<2)throw new TypeError("At least two gradient stops are required.");const e=new Set;return n.map(t=>{let i=t.id;return(typeof i!="string"||!/^[a-z\d_-]{1,80}$/i.test(i)||e.has(i))&&(i=crypto.randomUUID()),e.add(i),{id:i,color:qp(t.color),position:ri(t.position,0,1)}}).sort((t,i)=>t.position-i.position)}function wo(n){if(n===void 0)return!0;if(typeof n!="boolean")throw new TypeError("Expected a boolean switch.");return n}function oi(n={}){const e=ri(n.star?.outerRadius??kp,1,1e3),t=(i={})=>({enabled:wo(i.enabled),height:ri(i.height??Gp,0,500),width:ri(i.width??Wp,1,1920),direction:ri(i.direction??Xp,-360,360)});return{waveSpeed:ri(n.waveSpeed??rr.waveSpeed,-1,1),star:{outerRadius:e,innerRadius:ri(n.star?.innerRadius??Bp,0,e)},blur:{enabled:wo(n.blur?.enabled),radius:ri(n.blur?.radius??Hp,0,300)},waves:[t(n.waves?.[0]),t(n.waves?.[1])],gradientStops:hl(n.gradientStops??[{id:"start",position:0,color:n.gradientStart??rr.gradientStart},{id:"end",position:1,color:n.gradientEnd??rr.gradientEnd}])}}const $p=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Yp=`
  precision highp float;

  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform float uRotation;
  uniform vec2 uVertices[10];
  uniform float uOuterRadius;
  uniform sampler2D uGradient;
  uniform float uGradientSize;

  const float PI = 3.141592653589793;

  vec2 rotatePoint(vec2 point, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    // GLSL matrices are column-major: this rotates samples counterclockwise.
    return mat2(c, s, -s, c) * point;
  }

  float segmentDistance(vec2 point, vec2 a, vec2 b) {
    vec2 pa = point - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.000001), 0.0, 1.0);
    return length(pa - ba * h);
  }

  float starSignedDistance(vec2 point) {
    float distanceToEdge = 100000.0;
    bool inside = false;
    vec2 previous = uVertices[9];

    for (int i = 0; i < 10; i++) {
      vec2 current = uVertices[i];
      distanceToEdge = min(distanceToEdge, segmentDistance(point, previous, current));

      bool crosses = (current.y > point.y) != (previous.y > point.y);
      float crossingX = (previous.x - current.x) * (point.y - current.y)
        / (previous.y - current.y + 0.000001) + current.x;
      if (crosses && point.x < crossingX) {
        inside = !inside;
      }

      previous = current;
    }

    return inside ? -distanceToEdge : distanceToEdge;
  }

  void main() {
    vec2 canvasPoint = (vUv - 0.5) * uResolution;

    // All possible star orientations fit in this disc. Skip the SDF elsewhere.
    if (length(canvasPoint) > uOuterRadius + 3.0) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Inverse-transform the sample point so the rendered shape turns clockwise.
    // The gradient lives in the same shape-group coordinates and turns with it.
    vec2 localPoint = rotatePoint(canvasPoint, uRotation * PI / 180.0);
    float signedDistance = starSignedDistance(localPoint);
    float edgeWidth = max(fwidth(signedDistance), 1.0);
    float alpha = 1.0 - smoothstep(-edgeWidth, edgeWidth, signedDistance);
    float gradientMix = clamp(localPoint.x / (uOuterRadius * 2.0) + 0.5, 0.0, 1.0);
    float gradientU = (gradientMix * (uGradientSize - 1.0) + 0.5) / uGradientSize;
    vec3 color = texture2D(uGradient, vec2(gradientU, 0.5)).rgb;

    // Render targets store premultiplied color so blur never creates dark fringes.
    gl_FragColor = vec4(color * alpha, alpha);
  }
`,jp=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uSourceTexel;

  void main() {
    vec2 d = uSourceTexel;
    gl_FragColor = 0.25 * (
      texture2D(uTexture, vUv + vec2(-d.x, -d.y)) +
      texture2D(uTexture, vUv + vec2( d.x, -d.y)) +
      texture2D(uTexture, vUv + vec2(-d.x,  d.y)) +
      texture2D(uTexture, vUv + vec2( d.x,  d.y))
    );
  }
`,Kp=`
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main() {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`,Zp=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  void main() {
    // Premultiplied RGB composited over black: only the final alpha becomes opaque.
    gl_FragColor = vec4(texture2D(uTexture, vUv).rgb, 1.0);
  }
`,Jp=`
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uTexelSize;
  uniform vec2 uDirection;
  uniform float uRadius;

  void main() {
    vec4 total = vec4(0.0);
    float tapRadius = ceil(uRadius);

    // Quarter-size radius <= 75; full-resolution low blur radius < 8.
    for (int i = -75; i <= 75; i++) {
      if (abs(float(i)) > tapRadius) continue;
      float position = float(i) / max(tapRadius, 1.0);
      vec2 offset = uDirection * uTexelSize * uRadius * position;
      vec2 sampleUv = vUv + offset;
      if (all(greaterThanEqual(sampleUv, vec2(0.0))) && all(lessThanEqual(sampleUv, vec2(1.0)))) {
        total += texture2D(uTexture, sampleUv);
      }
    }

    gl_FragColor = total / (2.0 * tapRadius + 1.0);
  }
`,Qp=`
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uLogicalResolution;
  uniform float uWavePhase;
  uniform float uWaveHeight;
  uniform float uWaveWidth;
  uniform float uDirectionDegrees;
  uniform float uWaveType;

  const float PI = 3.141592653589793;

  float uncircle(float phase) {
    // Complementary circular arcs approximate AE's Uncircle waveform.
    // Adobe does not publish its exact curve; retain this isolated calibration point.
    float triangle = 2.0 / PI * asin(clamp(sin(phase), -1.0, 1.0));
    return sign(triangle) * (1.0 - sqrt(max(0.0, 1.0 - triangle * triangle)));
  }

  void main() {
    float angle = uDirectionDegrees * PI / 180.0;
    vec2 travel = vec2(cos(angle), sin(angle));
    vec2 displacementAxis = vec2(-travel.y, travel.x);
    vec2 point = (vUv - 0.5) * uLogicalResolution;
    float phase = 2.0 * PI * (
      dot(point, travel) / uWaveWidth - uWavePhase
    );
    float waveform = uWaveType < 0.5 ? uncircle(phase) : sin(phase);

    // Prototype convention: height is a peak-to-peak span (amplitude = height/2).
    // Match this scale and the phase origin against an AE reference when available.
    vec2 displacedPoint = point - displacementAxis * waveform * uWaveHeight * 0.5;
    vec2 displacedUv = displacedPoint / uLogicalResolution + 0.5;

    if (
      displacedUv.x < 0.0 || displacedUv.x > 1.0 ||
      displacedUv.y < 0.0 || displacedUv.y > 1.0
    ) {
      gl_FragColor = vec4(0.0);
      return;
    }

    gl_FragColor = texture2D(uTexture, displacedUv);
  }
`,So=(n,e)=>(n%e+e)%e;class em{origin;previousTime;phase=0;speed;constructor(e,t){this.origin=e,this.previousTime=e,this.speed=t}sample(e){const t=Math.max(e,this.previousTime);return this.phase=So(this.phase+(t-this.previousTime)/1e3*this.speed,1),this.previousTime=t,{rotation:So((t-this.origin)/1e3*zp,360),phase:this.phase}}setSpeed(e,t){this.sample(t),this.speed=e}}const ea=n=>[1,3,5].map(e=>parseInt(n.slice(e,e+2),16));function tm(n,e){let t=n[0],i=t;for(const l of n){if(l.position>e){i=l;break}t=l,i=l}const s=ea(t.color),r=ea(i.color),a=i.position-t.position,o=a>0?Math.min(1,Math.max(0,(e-t.position)/a)):0;return s.map((l,d)=>Math.round(l+(r[d]-l)*o))}function im(n,e){return"#"+tm(n,e).map(t=>t.toString(16).padStart(2,"0")).join("")}function nm(n,e){const t=e.length/4,i=n.map(r=>ea(r.color));let s=0;for(let r=0;r<t;r++){const a=r/(t-1);for(;s+1<n.length&&n[s+1].position<=a;)s++;const o=Math.min(s+1,n.length-1),l=n[o].position-n[s].position,d=l>0?Math.max(0,Math.min(1,(a-n[s].position)/l)):0;for(let c=0;c<3;c++)e[r*4+c]=Math.round(i[s][c]*(1-d)+i[o][c]*d);e[r*4+3]=255}}function sm(n){return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${e.position*100}%`).join(", ")})`}const ga=.25,ar=Ft*ga,or=Ht*ga,va="cover-settings-change";class ul{canvas;settings;renderer;scene=new Jr;camera=new _s(-1,1,1,-1,0,1);quad;baseTarget;pingTarget;pongTarget;waveOneTarget;waveTwoTarget;starMaterial;outputMaterial;downsampleMaterial;blurMaterial;waveMaterial;gradientTexture;gradientData;animationFrame=0;timeline;destroyed=!1;active=!0;constructor(e,t={}){if(t.outputMode!==void 0&&t.outputMode!=="black"&&t.outputMode!=="transparent")throw new TypeError("Output mode must be black or transparent.");this.settings=oi(t),this.canvas=e,this.renderer=new cl({canvas:e,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.setSize(Ft,Ht,!1),this.renderer.setClearColor(0,t.outputMode==="transparent"?0:1),this.renderer.autoClear=!1,this.baseTarget=this.createTarget(Ft,Ht),this.pingTarget=this.createTarget(ar,or),this.pongTarget=this.createTarget(ar,or),this.waveOneTarget=this.createTarget(Ft,Ht),this.waveTwoTarget=this.createTarget(Ft,Ht);const i=Math.min(4096,this.renderer.capabilities.maxTextureSize);this.gradientData=new Uint8Array(i*4),this.gradientTexture=new tl(this.gradientData,i,1,Ct,Wt),this.gradientTexture.minFilter=xt,this.gradientTexture.magFilter=xt,this.gradientTexture.generateMipmaps=!1,this.updateGradient(),this.starMaterial=this.createMaterial(Yp,{uResolution:{value:new ke(Ft,Ht)},uRotation:{value:0},uOuterRadius:{value:this.settings.star.outerRadius},uVertices:{value:Array.from({length:10},()=>new ke)},uGradient:{value:this.gradientTexture},uGradientSize:{value:i}}),this.updateVertices(),this.outputMaterial=this.createMaterial(t.outputMode==="transparent"?Kp:Zp,{uTexture:{value:this.baseTarget.texture}}),this.downsampleMaterial=this.createMaterial(jp,{uTexture:{value:this.baseTarget.texture},uSourceTexel:{value:new ke(1/Ft,1/Ht)}}),this.blurMaterial=this.createMaterial(Jp,{uTexture:{value:this.pingTarget.texture},uTexelSize:{value:new ke(1/ar,1/or)},uDirection:{value:new ke(1,0)},uRadius:{value:0}}),this.waveMaterial=this.createMaterial(Qp,{uTexture:{value:this.baseTarget.texture},uLogicalResolution:{value:new ke(Ft,Ht)},uWavePhase:{value:0},uWaveHeight:{value:124},uWaveWidth:{value:391},uDirectionDegrees:{value:134},uWaveType:{value:0}}),this.quad=new Ot(new Hi(2,2),this.starMaterial),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.timeline=new em(performance.now(),this.settings.waveSpeed),document.addEventListener("visibilitychange",this.handleVisibility),e.addEventListener("webglcontextlost",this.handleContextLost),e.addEventListener("webglcontextrestored",this.handleContextRestored),this.animationFrame=requestAnimationFrame(this.render)}getSettings(){return structuredClone(this.settings)}setActive(e){this.destroyed||this.active===e||(this.active=e,this.handleVisibility())}setWaveSpeed(e){this.commit({...this.settings,waveSpeed:ri(e,-1,1)})}setWaveSettings(e,t){if(e!==0&&e!==1)throw new RangeError("Wave index must be 0 or 1.");const i=this.getSettings().waves;i[e]={...i[e],...t},this.commit(oi({...this.settings,waves:i}))}setBlurSettings(e){this.commit(oi({...this.settings,blur:{...this.settings.blur,...e}}))}setStarRadii(e){this.commit(oi({...this.settings,star:{...this.settings.star,...e}}))}setGradientStops(e){this.commit({...this.settings,gradientStops:hl(e)})}setGradientColors(e,t){this.setGradientStops([{id:"start",position:0,color:e},{id:"end",position:1,color:t}])}reset(){this.commit(oi())}commit(e){if(this.destroyed)return;const t=this.settings;this.settings=e,t.waveSpeed!==e.waveSpeed&&this.timeline.setSpeed(e.waveSpeed,performance.now()),(t.star.outerRadius!==e.star.outerRadius||t.star.innerRadius!==e.star.innerRadius)&&this.updateVertices(),(t.gradientStops.length!==e.gradientStops.length||e.gradientStops.some((i,s)=>i.color!==t.gradientStops[s].color||i.position!==t.gradientStops[s].position))&&this.updateGradient(),this.canvas.dispatchEvent(new CustomEvent(va,{detail:this.getSettings()}))}updateVertices(){const{outerRadius:e,innerRadius:t}=this.settings.star;this.starMaterial.uniforms.uOuterRadius.value=e,this.starMaterial.uniforms.uVertices.value.forEach((i,s)=>{const r=Math.PI/2+s*Math.PI/5,a=s%2===0?e:t;i.set(Math.cos(r)*a,Math.sin(r)*a)})}updateGradient(){nm(this.settings.gradientStops,this.gradientData),this.gradientTexture.needsUpdate=!0}destroy(){this.destroyed||(this.destroyed=!0,cancelAnimationFrame(this.animationFrame),document.removeEventListener("visibilitychange",this.handleVisibility),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored),this.quad.geometry.dispose(),[this.starMaterial,this.outputMaterial,this.downsampleMaterial,this.blurMaterial,this.waveMaterial].forEach(e=>e.dispose()),[this.baseTarget,this.pingTarget,this.pongTarget,this.waveOneTarget,this.waveTwoTarget].forEach(e=>e.dispose()),this.gradientTexture.dispose(),this.renderer.dispose())}createTarget(e,t){const i=new ci(e,t,{minFilter:xt,magFilter:xt,format:Ct,type:this.renderer.extensions.has("EXT_color_buffer_float")?pn:Wt,depthBuffer:!1,stencilBuffer:!1});return i.texture.generateMipmaps=!1,i}createMaterial(e,t){return new Xt({vertexShader:$p,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,transparent:!1,blending:Kt,toneMapped:!1})}draw(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}handleVisibility=()=>{cancelAnimationFrame(this.animationFrame),!this.destroyed&&this.active&&!document.hidden&&!this.renderer.getContext().isContextLost()&&(this.animationFrame=requestAnimationFrame(this.render))};handleContextLost=e=>{e.preventDefault(),cancelAnimationFrame(this.animationFrame)};handleContextRestored=()=>{this.handleVisibility()};render=e=>{if(this.destroyed||!this.active)return;const{rotation:t,phase:i}=this.timeline.sample(e);this.starMaterial.uniforms.uRotation.value=t,this.waveMaterial.uniforms.uWavePhase.value=i,this.draw(this.starMaterial,this.baseTarget);let s=this.baseTarget;const{blur:r,waves:a}=this.settings;if(r.enabled&&r.radius>0){const o=r.radius<8?1:ga,l=o===1?[this.waveOneTarget,this.waveTwoTarget]:[this.pingTarget,this.pongTarget];o!==1&&(this.draw(this.downsampleMaterial,l[0]),s=l[0]),this.blurMaterial.uniforms.uTexelSize.value.set(1/l[0].width,1/l[0].height),this.blurMaterial.uniforms.uRadius.value=r.radius*o;for(let d=0;d<Vp;d++)for(let c=0;c<2;c++){const h=s===l[0]?l[1]:l[0];this.blurMaterial.uniforms.uTexture.value=s.texture,this.blurMaterial.uniforms.uDirection.value.set(c===0?1:0,c===1?1:0),this.draw(this.blurMaterial,h),s=h}}a.forEach((o,l)=>{if(!o.enabled||o.height===0)return;const d=s===this.waveOneTarget?this.waveTwoTarget:this.waveOneTarget;this.waveMaterial.uniforms.uTexture.value=s.texture,this.waveMaterial.uniforms.uWaveType.value=l,this.waveMaterial.uniforms.uWaveHeight.value=o.height,this.waveMaterial.uniforms.uWaveWidth.value=o.width,this.waveMaterial.uniforms.uDirectionDegrees.value=o.direction,this.draw(this.waveMaterial,d),s=d}),this.outputMaterial.uniforms.uTexture.value=s.texture,this.draw(this.outputMaterial,null),this.animationFrame=requestAnimationFrame(this.render)}}async function fl(n){n.classList.add("fonts-loading"),n.setAttribute("aria-busy","true");const e=document.createElement("span");e.className="deck-font-status",e.setAttribute("role","status"),e.textContent="正在加载演示字体…",n.append(e);try{await Promise.all([350,400,500,700].map(t=>document.fonts.load(`${t} 20px "Flyme Sans VF"`))),e.remove()}catch{e.textContent="演示字体加载失败，请刷新页面重试。"}finally{n.classList.remove("fonts-loading"),n.setAttribute("aria-busy","false")}}function xa(n){const e=n.startsWith("/assets/portfolio/")?".jpg":".png";return n.replace(/\.mp4$/,`-first-frame${e}`)}function ui(n){const{id:e,label:t,nodeId:i,x:s,y:r,width:a,height:o,steps:l,syncGroup:d,comparisonLabel:c,comparisonNode:h}=n,f=n.loop??!0,m=`/assets/videos/${n.asset??e}`,x=n.poster??xa(`${m}.mp4`),_=n.immersive?`--video-x:${s}px;--video-y:${r}px;--video-width:${a}px;--video-height:${o}px`:`position:absolute;left:${s}px;top:${r}px;width:${a}px;height:${o}px;border-radius:20px`;return`<div class="slide-video ${n.immersive?"lyrics-video":"slide-video--contain"} figma-frame-stroke${n.border===!1?"":" slide-video--bordered"}" data-media-id="${e}" data-play-steps="${l.join(",")}" ${d?`data-sync-group="${d}"`:""} ${n.codec?`data-codec="${n.codec}"`:""} data-node-id="${i}" style="${_}">
    <img class="video-poster" src="${x}" width="${a}" height="${o}" alt="${t}，静态预览" />
    <video data-src="${m}.mp4" data-loop="${f}" ${f&&!d?"loop":""} muted playsinline preload="none" poster="${x}" aria-label="${t}"></video>
    ${c?`<div class="comparison-reveal" aria-hidden="true"><p class="comparison-size" data-node-id="${h}">${c}</p></div>`:""}
    ${n.immersive?'<button type="button" class="video-expand" aria-label="放大歌词海报视频" title="点击放大 · 下一步"></button>':""}
    <div class="video-fallback" role="status" hidden><span>视频暂时无法播放，已保留预览</span><button type="button" data-video-retry>重试播放</button></div>
  </div>`}function In(n=""){return`./${n.replace(/^\/+/,"")}`}function rm(n){return n.replace(/(["'])\/assets\//g,(e,t)=>`${t}${In("assets/")}`)}const am=[[{id:"lyrics-poster",source:"歌词海报_进入-退出沉浸态 v1.0.mp4",label:"歌词海报",wide:!0,posterTime:0,fit:"cover"},{id:"aicy-intro",source:"0907版本.mp4",label:"0907版本",posterTime:0,fit:"cover"},{id:"digital-twin-3",source:"3.0 汇报_数字孪生 v1.3.mp4",label:"数字孪生 · 3.0",posterTime:0,fit:"cover"},{id:"task-robot",source:"任务机器人_小窗应用_深色模式.mp4",label:"任务机器人 · 小窗",posterTime:0,fit:"cover"},{id:"ai-rhythm",source:"手机版_美_AI律动 v1.5.mp4",label:"AI 律动",posterTime:0,fit:"cover"},{id:"light-trail-1-wide",source:"光轨1 30寸 20250704.mp4",label:"光轨1 · 30寸",wide:!0,posterTime:0,fit:"cover"},{id:"camping-day",source:"P177 露营模式_白天_RSD.mp4",label:"露营模式 · 白天",posterTime:0,fit:"cover"},{id:"website-player",source:"官网 音乐播放器_默认播放器 v1.5.mp4",label:"官网音乐播放器",posterTime:0,fit:"cover"},{id:"ripple-wave",source:"涟漪声波.mp4",label:"涟漪声波",posterTime:0,fit:"cover"},{id:"casting-light",source:"3.0 投屏助手_浅色模式 v1.2.mp4",label:"投屏助手 · 浅色",posterTime:0,fit:"cover"},{id:"forest",source:"Forest bat 60fps.mp4",label:"Forest",posterTime:0,fit:"cover"},{id:"bonfire",source:" Bonfire 60fps_2.mp4",label:"Bonfire",posterTime:0,fit:"cover"}],[{id:"p177-player",source:"P177 多媒体音乐 默认播放器 v1.3.mp4",label:"P177 多媒体音乐",wide:!0,posterTime:0,fit:"cover"},{id:"camping-night",source:"P177 露营模式_黑夜_RSD.mp4",label:"露营模式 · 黑夜",posterTime:0,fit:"cover"},{id:"mountain-recording",source:"20260919-143824.mp4",label:"20260919 录屏",posterTime:0,fit:"cover"},{id:"casting-dark",source:"3.0 投屏助手_深色模式 v1.2.mp4",label:"投屏助手 · 深色",posterTime:0,fit:"cover"},{id:"player-background",source:"音乐播放器背景动效 v2.4.mp4",label:"音乐播放器背景动效",posterTime:0,fit:"cover"},{id:"light-trail-2-wide",source:"光轨2 30寸 20250704.mp4",label:"光轨2 · 30寸",wide:!0,posterTime:0,fit:"cover"},{id:"volvo-player",source:"Volvo 音乐播放器 mini-player切换player v2.0.mp4",label:"Volvo 音乐播放器",posterTime:0,fit:"cover"},{id:"rhythmic-scales-3",source:"3.0 领克_律动光鳞 v1.1.mp4",label:"领克 · 律动光鳞",posterTime:0,fit:"cover"},{id:"meditation",source:"Meditaton 60fps.mp4",label:"Meditation",posterTime:0,fit:"cover"},{id:"light-trail-2-small",source:"光轨2 15寸 20250704.mp4",label:"光轨2 · 15寸",posterTime:0,fit:"cover"},{id:"lyrics-desktop-3",source:"3.0 汇报_歌词桌面 v1.1.mp4",label:"歌词桌面 · 3.0",posterTime:0,fit:"cover"}]],ms="portfolio-wall",st={wide:1456.96,small:728.48,height:464.47,gap:18.76,radius:15.64,stroke:.782,fade:500,speed:20,viewport:1920,halo:16},Fi=am.map((n,e)=>{let t=0;const i=n.map(r=>{const a=r.wide?st.wide:st.small,o={...r,width:a,offset:t};return t+=a+st.gap,o}),s=e===0?-574.96:591;return{cards:i,length:t,origin:s,reducedOrigin:Math.max(0,s),top:e===0?56:539.23,direction:e===0?-1:1}});function _a(n,e,t){const i=e+st.halo;return((n+i)%t+t)%t-i}function om(){return`<div class="portfolio-wall" style="--wall-height:${st.height}px;--wall-gap:${st.gap}px;--wall-radius:${st.radius}px;--wall-stroke:${st.stroke}px;--wall-fade:${st.fade}px;--wall-halo:${st.halo}px">${Fi.map((n,e)=>`
    <div class="portfolio-row" data-wall-row="${e}" style="top:${n.top-st.halo}px;--row-origin:${n.reducedOrigin}px" role="region" aria-label="作品展示${e===0?"上排":"下排"}" tabindex="-1">
      <div class="portfolio-track" role="list">${n.cards.map(t=>{const i=`/assets/portfolio/${t.id}`,s=xa(`${i}.mp4`),r=_a(n.origin+t.offset,t.width,n.length);return`<div class="portfolio-item" data-work-id="${t.id}" role="listitem" style="width:${t.width}px;--wall-x:${r}px">
          <div class="portfolio-card" style="--portfolio-fit:${t.fit}" aria-label="${t.label}">
            <img class="video-poster" src="${s}" width="${t.width}" height="${st.height}" alt="${t.label}，静态预览" loading="eager" decoding="sync" />
            <video data-src="${i}.mp4" poster="${s}" muted loop playsinline preload="none" aria-label="${t.label}"></video>
            <div class="video-fallback" role="status" hidden><span>视频暂时无法播放，已保留预览</span><button type="button" data-video-retry>重试播放</button></div>
          </div>
        </div>`}).join("")}</div>
    </div>`).join("")}</div>`}const lm={id:"figma-2017-121463",title:"Flyme Auto 2.0：歌词海报",nodeId:"2017:121463",header:"PROJECT PORTFOLIO",stepCount:3,background:"url('/assets/figma/1927-432-gradient-0.svg')",body:`<div class="case-markers lyrics-overview"><span>01</span><span class="is-muted">02</span></div>
    <div class="lyrics-overview lyrics-description" data-node-id="2017:121481">
      <h1 data-node-id="2017:121482">案例概述</h1>
      <p data-node-id="2017:121483">Flyme Auto 2.0 的多媒体音乐，其中的歌词海报是Auto 2.0 主打的强视效模块，通过运用电影镜头的运动和动态文字的排版效果，去演绎优雅，自然和沉浸的视觉体验。</p>
    </div>
    ${ui({id:"lyrics-poster-case",label:"Flyme Auto 2.0 歌词海报",nodeId:"2017:121484",x:141,y:199,width:1123,height:702,steps:[0,1,2],border:!1,immersive:!0,codec:"hevc"})}
    <div class="lyrics-shade" aria-hidden="true"></div>
    <div class="lyrics-principles" aria-hidden="true">
      <div class="lyrics-principle" style="left:399px" data-node-id="2022:121947"><h2><span data-node-id="2022:121939">优雅</span></h2><p data-node-id="2022:121945">利用歌词动效和流行的运动节奏，去传达优雅</p></div>
      <div class="lyrics-principle" style="left:857px" data-node-id="2022:121948"><h2><span data-node-id="2022:121941">沉浸</span></h2><p data-node-id="2022:121944">利用子弹的时间的动效表现，强化沉浸感</p></div>
      <div class="lyrics-principle" style="left:1315px" data-node-id="2022:121949"><h2><span data-node-id="2022:121943">空间</span></h2><p data-node-id="2022:121946">通过流动的星空和镜头的推拉，营造空间感</p></div>
    </div>`},dm={id:"figma-2007-18",title:"动效展示",nodeId:"2007:18",header:"PROJECT PORTFOLIO",background:"url('/assets/figma/1927-432-gradient-0.svg')",body:`<div class="case-markers"><span class="is-muted">01</span><span>02</span></div>
    ${ui({id:"task-robot-demo",label:"任务机器人 · 小窗应用 · 深色模式",nodeId:"2007:42",x:374,y:173,width:1173,height:733,steps:[0],border:!1})}`},cm={id:"figma-1938-736",title:"价值贡献",nodeId:"1938:736",header:"PROJECT PORTFOLIO",pageNumber:"07",stepCount:2,background:"url('/assets/figma/1938-736-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1938:749" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1938:750" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1938:751" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1938:752" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1938:753" >02</p></div></div>
<div class="figma-frame-stroke figma-gradient-card value-highlight" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;gap:10px;align-items:flex-start;left:181px;padding-left:80px;padding-right:80px;padding-top:90px;padding-bottom:90px;border-radius:20px;top:303px;background-image:url('/assets/figma/1938-736-gradient-1.svg')" data-node-id="1938:754" data-highlight="0"><div style="height:273px;position:relative;flex-shrink:0;width:558px" data-node-id="1938:756" ><div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1938:757" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:758" >文字脚本</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:212px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1938:759" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:760" >分镜脚本</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:420px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1938:761" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:762" >配音配乐</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:420px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:111px" data-node-id="1938:763" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:764" >视觉脚本</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:109px" data-node-id="1938:765" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:766" >动画制作</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:212px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:110px" data-node-id="1938:767" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:768" >动态脚本</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:219px" data-node-id="1938:769" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:770" >合成渲染</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:212px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:219px" data-node-id="1938:771" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:772" >调整输出</p></div>
<div style="position:absolute;height:0;left:154px;top:25px;width:42px" data-node-id="1938:773" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow1.svg" ></div></div>
<div style="position:absolute;height:0;left:362px;top:25px;width:42px" data-node-id="1938:774" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow1.svg" ></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:489px;top:61px;width:0" data-node-id="1938:775" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow3.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:364px;top:141px;width:42px" data-node-id="1938:776" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow4.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:154px;top:136px;width:42px" data-node-id="1938:777" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow4.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:70px;top:170px;width:0" data-node-id="1938:778" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow6.svg" ></div></div></div></div>
<div style="position:absolute;height:0;left:154px;top:249px;width:42px" data-node-id="1938:779" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow7.svg" ></div></div></div></div>
<p class="value-highlight" style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:435px;font-size:36px;color:#fff;top:797px;white-space:nowrap" data-node-id="1938:780" data-highlight="0">常规输出流程</p>
<p class="value-highlight" style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:1268px;font-size:36px;color:#fff;top:797px;white-space:nowrap" data-node-id="1938:781" data-highlight="1">紧急输出流程</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:181px;font-size:48px;color:#fff;top:185px;white-space:nowrap" data-node-id="1938:782" >价值贡献</p>
<div class="figma-frame-stroke figma-gradient-card value-highlight" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;gap:10px;height:455px;align-items:flex-start;left:1018px;padding-bottom:90px;padding-top:132px;padding-left:80px;padding-right:80px;border-radius:20px;box-shadow:0px 4px 100px 0px rgba(0,0,0,0.2);top:303px;background-image:url('/assets/figma/1938-736-gradient-2.svg')" data-node-id="1938:783" data-highlight="1"><div style="height:167px;position:relative;flex-shrink:0;width:555px" data-node-id="1938:785" ><div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1938:786" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:787" >文字脚本</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:420px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1938:788" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:789" >配音</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:206px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1938:790" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:791" >模块划分</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:206px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:113px" data-node-id="1938:792" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:793" >动画制作</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:417px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:113px" data-node-id="1938:794" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:795" >工程框架</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:113px" data-node-id="1938:796" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1938:797" >合成输出</p></div>
<div style="position:absolute;height:0;left:154px;top:25px;width:42px" data-node-id="1938:798" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow8.svg" ></div></div>
<div style="position:absolute;height:0;left:361px;top:25px;width:42px" data-node-id="1938:799" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow8.svg" ></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:465px;top:63px;width:0" data-node-id="1938:800" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow10.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:361px;top:142px;width:42px" data-node-id="1938:801" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow11.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:154px;top:142px;width:42px" data-node-id="1938:802" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1938-736-imgArrow11.svg" ></div></div></div></div></div></div>
<p class="value-highlight" style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:1192px;font-size:36px;color:#fff;top:856px;white-space:nowrap" data-node-id="1957:369" data-highlight="1">(比常规流程快3天左右)</p>`},hm={id:"figma-1938-826",title:"AI赋能：重构交付链路",nodeId:"1938:826",header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1938-826-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1938:839" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1938:840" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1938:841" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1938:842" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1938:843" >02</p></div></div>
<div style="overflow-wrap:break-word;position:absolute;font-weight:700;line-height:0;left:100px;font-size:128px;color:#fff;top:259px;white-space:nowrap" data-node-id="1938:844" ><p style="line-height:1.32;margin-bottom:0"  >AI赋能</p>
<p style="line-height:1.32"  >重构交付链路</p></div>
<p style="overflow-wrap:break-word;position:absolute;font-weight:400;line-height:1.32;left:100px;font-size:20px;color:#fff;top:649px;width:731px" data-node-id="1938:845" >交付物不同，就会有不同的交付链路，针对不同的交付场景，适配更高效的交付方式，解决传统交付方式的效率问题。</p>`},um={id:"figma-1943-1150",title:"AI交付方式总览",nodeId:"1943:1150",header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1943-1150-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1943:1163" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1943:1164" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1943:1165" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1943:1166" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1943:1167" >02</p></div></div>
<div class="figma-frame-stroke figma-frame-stroke--fade-out figma-gradient-card" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;align-items:flex-start;left:386px;overflow:clip;padding-bottom:100px;padding-top:33px;padding-left:50px;padding-right:50px;border-radius:20px;top:319px;background-image:url('/assets/figma/1943-1150-gradient-1.svg')" data-node-id="1943:1177" ><div style="align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;position:relative;flex-shrink:0" data-node-id="1943:1178" ><div style="align-content:stretch;display:flex;align-items:center;position:relative;flex-shrink:0" data-node-id="1943:1179" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:64px;color:#fff;white-space:nowrap" data-node-id="1943:1180" >01</p></div>
<div style="align-content:stretch;display:flex;flex-direction:column;gap:60px;align-items:flex-start;position:relative;flex-shrink:0" data-node-id="1943:1181" ><div style="align-content:stretch;display:flex;align-items:center;position:relative;flex-shrink:0" data-node-id="1943:1182" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:48px;color:#fff;white-space:nowrap" data-node-id="1943:1183" >自研工具</p></div>
<div style="align-content:stretch;display:flex;align-items:center;position:relative;flex-shrink:0;width:384px" data-node-id="1943:1184" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:20px;color:#fff;width:372px" data-node-id="1943:1185" >借助AI编程工具，自研了视频压缩工具和弹性曲线插件，让交付资源更符合交付标准，以及提升交付文档的输出效率。</p></div></div></div></div>
<div class="figma-frame-stroke figma-frame-stroke--fade-out figma-gradient-card" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;align-items:flex-start;left:971px;overflow:clip;padding-bottom:100px;padding-top:33px;padding-left:50px;padding-right:50px;border-radius:20px;top:316px;background-image:url('/assets/figma/1943-1150-gradient-2.svg')" data-node-id="1943:1186" ><div style="align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;position:relative;flex-shrink:0" data-node-id="1943:1187" ><div style="align-content:stretch;display:flex;align-items:center;position:relative;flex-shrink:0" data-node-id="1943:1188" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:64px;color:#fff;white-space:nowrap" data-node-id="1943:1189" >02</p></div>
<div style="align-content:stretch;display:flex;flex-direction:column;gap:60px;align-items:flex-start;position:relative;flex-shrink:0" data-node-id="1943:1190" ><div style="align-content:stretch;display:flex;align-items:center;position:relative;flex-shrink:0" data-node-id="1943:1191" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:48px;color:#fff;white-space:nowrap" data-node-id="1943:1192" >AI辅助动效落地</p></div>
<div style="align-content:stretch;display:flex;align-items:center;position:relative;flex-shrink:0;width:384px" data-node-id="1943:1193" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:20px;color:#fff;width:372px" data-node-id="1943:1194" >输出可调用的动效代码和可交互的安卓原型，为开发提供可直接复用或可借鉴的函数规则，也为项目组在评审时更准确地判断动效表现。</p></div></div></div></div>`},fm={id:"figma-1986-35",title:"视频清晰度与体积对比",nodeId:"1986:35",header:"PROJECT PORTFOLIO",pageNumber:"11",stepCount:2,background:"url('/assets/figma/1943-1150-gradient-0.svg')",body:`<div class="compression-tradeoff-markers" aria-label="项目分组：02"><span>01</span><span>02</span></div>
    ${ui({id:"compression-large-quality",asset:"compression-wave-3",codec:"hevc",label:"体积大，质量高",nodeId:"1986:67",x:157,y:293,width:738,height:461,steps:[0,1],syncGroup:"compression-tradeoff",comparisonLabel:"体积大，质量高",comparisonNode:"1986:71"})}
    ${ui({id:"compression-small-quality",asset:"compression-wave-4",codec:"hevc",label:"体积小，质量低",nodeId:"1986:69",x:983,y:293,width:738,height:461,steps:[0,1],syncGroup:"compression-tradeoff",comparisonLabel:"体积小，质量低",comparisonNode:"1986:72"})}
    <div class="comparison-parameters" style="left:226px" data-node-id="2006:10"><p data-node-id="2006:11">类型：H.265</p><span></span><p data-node-id="2006:13">分辨率大小：2560*1600</p><span></span><p data-node-id="2006:15">时长：20s</p><span></span><p data-node-id="2006:17">大小：2.6MB</p></div>
    <div class="comparison-parameters" style="left:1051px" data-node-id="2006:2"><p data-node-id="2006:3">类型：H.265</p><span></span><p data-node-id="2006:5">分辨率大小：2560*1600</p><span></span><p data-node-id="2006:7">时长：20s</p><span></span><p data-node-id="2006:9">大小：636KB</p></div>`},pm={id:"figma-1953-4",title:"自研工具一：视频压缩工具",nodeId:"1953:4",header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1953-4-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1953:17" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1953:18" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1953:19" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1953:20" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1953:21" >02</p></div></div>
<div style="overflow-wrap:break-word;position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:40px;align-items:flex-start;left:100px;color:#fff;top:220px;width:579px" data-node-id="1955:168" ><div style="font-weight:500;line-height:0;position:relative;flex-shrink:0;font-size:48px;white-space:nowrap" data-node-id="1953:22" ><p style="line-height:1.32;margin-bottom:0"  >自研工具一</p>
<p style="line-height:1.32"  >视频压缩工具</p></div>
<div style="align-content:stretch;display:flex;flex-direction:column;font-weight:400;gap:10px;align-items:flex-start;line-height:1.32;position:relative;flex-shrink:0;font-size:20px;width:100%" data-node-id="1955:167" ><p style="position:relative;flex-shrink:0;width:100%" data-node-id="1954:100" >解决痛点：</p>
<p style="position:relative;flex-shrink:0;width:583px" data-node-id="1954:99" >因为AE的编码策略，导致设计师在压缩视频的过程中需要不断地尝试比特率，需要多次输出视频来对比验证视频画质和体积大小。</p></div></div>
<p style="position:absolute;left:100px;top:818px;font-size:48px;font-weight:500;line-height:1.32;white-space:nowrap" data-node-id="2019:121902">输出效率提升约50%</p>
${ui({id:"compression-tool",label:"视频压缩工具演示",nodeId:"1955:177",x:795,y:220,width:885,height:728,steps:[0]})}`},mm={id:"figma-1953-54",title:"视频压缩原因分析",nodeId:"1953:54",header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1953-54-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1953:67" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1953:68" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1953:69" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1953:70" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1953:71" >02</p></div></div>
<div class="figma-frame-stroke figma-frame-stroke--reserved" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;height:598.554px;left:728px;overflow:clip;border-radius:14.15px;top:199px;width:476.155px" data-node-id="1953:78" ><div style="position:absolute;height:832.788px;left:-5.95px;top:-7.37px;width:481.08px" data-node-id="1953:80" data-name="image 3" ><img style="position:absolute;inset:0;max-width:none;object-fit:cover;pointer-events:none;width:100%;height:100%" alt="" src="/assets/figma/1953-54-imgImage3.png" ></div></div>
<div class="figma-frame-stroke figma-frame-stroke--reserved" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;height:598.554px;left:1262px;overflow:clip;border-radius:14.15px;top:199px;width:476.155px" data-node-id="1954:92" ><div style="position:absolute;height:832.788px;left:-5.95px;top:-7.37px;width:481.08px" data-node-id="1954:94" data-name="image 3" ><img style="position:absolute;inset:0;max-width:none;object-fit:cover;pointer-events:none;width:100%;height:100%" alt="" src="/assets/figma/1953-54-imgImage3.png" ></div>
<div style="position:absolute;height:616px;left:-15px;top:-1px;width:683px" data-node-id="1954:104" data-name="20260914-220314 1" ><img style="position:absolute;inset:0;max-width:none;object-fit:cover;pointer-events:none;width:100%;height:100%" alt="" src="/assets/figma/1953-54-img202609142203141.png" ></div></div>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:100px;font-size:48px;color:#fff;top:540px;white-space:nowrap" data-node-id="1954:88" >原因分析</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:833px;font-size:32px;color:#fff;top:818px;white-space:nowrap" data-node-id="1954:95" >AE导出设置有局限性</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:1358px;font-size:32px;color:#fff;top:818px;white-space:nowrap" data-node-id="1954:96" >FFmpeg参数更灵活</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:400;line-height:1.32;left:100px;font-size:20px;color:#fff;top:644px;width:506px" data-node-id="1954:97" >AE等设计软件所使用的压缩方式比较固定，解码方式不够灵活，用户可以调整的参数选择比较少，而反观ffmpeg命令行则会更灵活，压缩的方式和可调参数会更多，选择ffmpeg压缩可以最大程度地保证质量和清晰度以及保留更多色彩信息。</p>`},gm={id:"figma-1955-145",title:"自研工具二：ElasticCurve Panel",nodeId:"1955:145",header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1955-145-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1955:158" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1955:159" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1955:160" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1955:161" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1955:162" >02</p></div></div>
<div style="overflow-wrap:break-word;position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:40px;align-items:flex-start;left:100px;color:#fff;top:220px;width:428px" data-node-id="1955:172" ><div style="font-weight:500;line-height:0;position:relative;flex-shrink:0;font-size:48px;white-space:nowrap" data-node-id="1955:163" ><p style="line-height:1.32;margin-bottom:0"  >自研工具二</p>
<p style="line-height:1.32"  >ElasticCurve Panel</p></div>
<div style="align-content:stretch;display:flex;flex-direction:column;font-weight:400;gap:10px;align-items:flex-start;line-height:1.32;position:relative;flex-shrink:0;font-size:20px;width:100%" data-node-id="1955:169" ><p style="position:relative;flex-shrink:0;width:100%" data-node-id="1955:170" >解决痛点：</p>
<p style="position:relative;flex-shrink:0;width:100%" data-node-id="1955:171" >AE的弹性曲线转换成Android的弹性曲线需要经过第三方工具去转换，而且动画表现也不一定一致，需要反复验证和调整。这期间会浪费一些调试的时间和验收的时间。</p></div></div>
${ui({id:"curve-plugin",label:"ElasticCurve Panel 演示",nodeId:"1955:180",x:615,y:211,width:1123,height:634,steps:[0]})}`},vm={id:"figma-1955-182",title:"动效输出路径对比",nodeId:"1955:182",header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1955-182-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1955:195" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1955:196" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1955:197" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1955:198" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1955:199" >02</p></div></div>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:1236px;font-size:32px;color:#fff;top:302px;white-space:nowrap" data-node-id="1955:206" >现在输出路径</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:430px;font-size:32px;color:#fff;top:302px;white-space:nowrap" data-node-id="1955:228" >过往输出路径</p>
<div class="figma-frame-stroke figma-gradient-card" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;gap:10px;height:455px;align-items:flex-start;left:1018px;padding-bottom:90px;padding-top:125px;padding-left:80px;padding-right:80px;border-radius:20px;box-shadow:0px 4px 100px 0px rgba(0,0,0,0.2);top:368px;width:650px;background-image:url('/assets/figma/1955-182-gradient-1.svg')" data-node-id="1955:207" ><div style="height:264px;position:relative;flex-shrink:0;width:490px" data-node-id="1955:209" ><div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:53px" data-node-id="1955:210" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:211" >插件调试参数</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:305px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:-12px" data-node-id="1955:214" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:215" >AE表达式</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:305px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:117px" data-node-id="1955:216" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:217" >Android参数</p></div>
<div style="position:absolute;display:flex;height:36px;align-items:center;justify-content:center;left:192px;top:17px;width:105px" data-node-id="1955:222" ><div style="flex:none;transform:rotate(-18.92deg)"  ><div style="height:0;position:relative;width:111px"  ><div style="position:absolute;inset:-7.36px -0.9% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1955-182-imgArrow8.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:43.665px;align-items:center;justify-content:center;left:189px;top:107px;width:103.468px" data-node-id="1955:279" ><div style="flex:none;transform:rotate(22.88deg)"  ><div style="height:0;position:relative;width:112.304px"  ><div style="position:absolute;inset:-7.36px -0.89% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1955-182-imgArrow9.svg" ></div></div></div></div></div></div>
<div class="figma-frame-stroke figma-gradient-card" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;gap:10px;height:455px;align-items:flex-start;left:213px;padding-left:60px;padding-right:50px;padding-top:70px;padding-bottom:70px;border-radius:20px;box-shadow:0px 4px 100px 0px rgba(0,0,0,0.2);top:368px;width:650px;background-image:url('/assets/figma/1955-182-gradient-1.svg')" data-node-id="1955:255" ><div style="height:313px;position:relative;flex-shrink:0;width:100%" data-node-id="1955:257" ><div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:45px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1955:258" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:259" >AE表达式</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:283px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:-2px" data-node-id="1955:262" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:263" >曲线转换工具</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:45px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:114px" data-node-id="1955:264" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:265" >实机测试效果</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:290px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:115px" data-node-id="1955:268" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:269" >Android参数</p></div>
<div style="position:absolute;height:0;left:215px;top:27px;width:42px" data-node-id="1955:270" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1955-182-imgArrow10.svg" ></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:371px;top:63px;width:0" data-node-id="1955:272" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1955-182-imgArrow11.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:121px;top:177px;width:0" data-node-id="1955:278" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1955-182-imgArrow11.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:237px;top:142px;width:42px" data-node-id="1955:274" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1955-182-imgArrow15.svg" ></div></div></div></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:48px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:228px" data-node-id="1955:275" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1955:276" >调试效果</p></div></div></div>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;height:63px;line-height:1.32;left:calc(50% - 225px);font-size:48px;color:#fff;top:164px;width:451px" data-node-id="1957:367" >输出效率提高约80%</p>`},xm={id:"figma-1943-1243",title:"AI辅助动效落地：可复用代码",nodeId:"1943:1243",stepCount:1,header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1943-1243-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1943:1256" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1943:1257" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1943:1258" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1943:1259" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1943:1260" >02</p></div></div>
${ui({id:"ai-task-robot",label:"AI任务机器人演示",nodeId:"1957:280",x:667,y:220,width:1071,height:574,steps:[0]})}
<div style="overflow-wrap:break-word;position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:40px;align-items:flex-start;left:100px;color:#fff;top:220px;width:579px" data-node-id="1957:284" ><div style="font-weight:500;line-height:0;position:relative;flex-shrink:0;font-size:48px;width:100%" data-node-id="1943:1261" ><p style="line-height:1.32;margin-bottom:0"  >AI辅助动效落地</p>
<p style="line-height:1.32"  >输出可复用的动效代码</p></div>
<div style="align-content:stretch;display:flex;flex-direction:column;font-weight:400;gap:10px;align-items:flex-start;line-height:1.32;position:relative;flex-shrink:0;font-size:20px;width:468px" data-node-id="1957:281" ><p style="position:relative;flex-shrink:0;width:100%" data-node-id="1957:282" >解决痛点：</p>
<p style="position:relative;flex-shrink:0;width:100%" data-node-id="1957:283" >在一些复杂的动效实现上，动效设计师只能动效文档来给到开发去参考实现，有时候实现的效果和预期效果有很大出入，后续的调试和沟通需要投入大量的时间成本。</p></div></div>`},_m={id:"figma-1957-285",title:"AI辅助动效落地：Android原型",nodeId:"1957:285",stepCount:1,header:"PROJECT PORTFOLIO",pageNumber:"08",background:"url('/assets/figma/1957-285-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1957:298" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1957:299" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1957:300" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1957:301" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1957:302" >02</p></div></div>
${ui({id:"interaction-prototype",label:"Android交互原型演示",nodeId:"1957:303",x:670,y:219,width:1057,height:661,steps:[0]})}
<div style="overflow-wrap:break-word;position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:40px;align-items:flex-start;left:100px;color:#fff;top:220px;width:579px" data-node-id="1957:304" ><div style="font-weight:500;line-height:0;position:relative;flex-shrink:0;font-size:48px;width:100%" data-node-id="1957:305" ><p style="line-height:1.32;margin-bottom:0"  >AI辅助动效落地</p>
<p style="line-height:1.32"  >输出完整Android原型</p></div>
<div style="align-content:stretch;display:flex;flex-direction:column;font-weight:400;gap:10px;align-items:flex-start;line-height:1.32;position:relative;flex-shrink:0;font-size:20px;width:100%" data-node-id="1957:306" ><p style="min-width:100%;position:relative;flex-shrink:0;width:min-content" data-node-id="1957:307" >解决痛点：</p>
<p style="position:relative;flex-shrink:0;width:518px" data-node-id="1957:308" >针对复杂的交互逻辑和特殊的交互场景，动效设计师没办法完全用视频的方式去演绎，输出完整的动效原型用于项目组评审，能更好地查漏补缺，也能让项目组上手体验，观察动效表现。另外还能把一些复杂的函数规则给到开发，这样能节省他们很多时间，</p></div></div>`},ym={id:"figma-1962-395",title:"交付链路对比",nodeId:"1962:395",header:"PROJECT PORTFOLIO",stepCount:3,background:"url('/assets/figma/1962-395-gradient-0.svg')",body:`<div style="position:absolute;align-content:stretch;display:flex;flex-direction:column;gap:20px;align-items:flex-start;left:1796px;top:505px;width:34px" data-node-id="1962:408" ><div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;opacity:0.2;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1962:409" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1962:410" >01</p></div>
<div style="border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;overflow:clip;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;position:relative;border-radius:37px;flex-shrink:0;width:100%" data-node-id="1962:411" ><p style="overflow-wrap:break-word;font-weight:500;line-height:1.32;position:relative;flex-shrink:0;font-size:10px;color:#fff;white-space:nowrap" data-node-id="1962:412" >02</p></div></div>
<div class="figma-frame-stroke figma-gradient-card" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;gap:10px;height:455px;align-items:flex-start;left:242px;padding-left:82px;padding-right:50px;padding-top:50px;padding-bottom:50px;border-radius:20px;box-shadow:0px 4px 100px 0px rgba(0,0,0,0.2);top:382px;width:738px;background-image:url('/assets/figma/1962-395-gradient-1.svg')" data-node-id="1962:419" data-delivery="0" ><div style="flex:1 0 0;min-height:1px;position:relative;width:100%" data-node-id="1962:470" ><div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:0;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:2px" data-node-id="1962:422" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:423" >动效设计稿</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:220px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1962:424" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:425" >动效评审</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:220px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:116px" data-node-id="1962:426" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:427" >设计走查</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:12px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:116px" data-node-id="1962:463" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:464" >设计反馈</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:418px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:117px" data-node-id="1962:428" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:429" >排期实现</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:418px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:0" data-node-id="1962:459" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:460" >动效文档</p></div>
<div style="position:absolute;height:0;left:170px;top:29px;width:42px" data-node-id="1962:430" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow8.svg" ></div></div>
<div style="position:absolute;height:0;left:367px;top:29px;width:42px" data-node-id="1962:461" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow8.svg" ></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:482px;top:65px;width:0" data-node-id="1962:431" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow10.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:81px;top:179px;width:0" data-node-id="1962:432" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow10.svg" ></div></div></div></div>
<div style="position:absolute;height:0;left:169.99px;top:257px;width:42px" data-node-id="1962:467" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow19.svg" ></div></div>
<div style="position:absolute;height:0;left:376px;top:257px;width:42px" data-node-id="1962:468" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow19.svg" ></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:367px;top:144px;width:42px" data-node-id="1962:433" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow15.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:170px;top:144px;width:42px" data-node-id="1962:462" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow15.svg" ></div></div></div></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:12px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:230px" data-node-id="1962:434" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:435" >开发调整</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:220px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:230px" data-node-id="1962:465" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:466" >二轮走查</p></div>
<p style="overflow-wrap:break-word;position:absolute;font-weight:400;line-height:1.32;left:439px;font-size:24px;color:#fff;top:234px;white-space:nowrap" data-node-id="1962:469" >...</p></div></div>
<div class="figma-frame-stroke figma-gradient-card" style="position:absolute;border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;flex-direction:column;gap:10px;height:455px;align-items:flex-start;left:1075px;padding-left:60px;padding-right:50px;padding-top:50px;padding-bottom:50px;border-radius:20px;box-shadow:0px 4px 100px 0px rgba(0,0,0,0.2);top:378px;width:508px;background-image:url('/assets/figma/1962-395-gradient-2.svg')" data-node-id="1962:437" data-delivery="1" ><div style="flex:1 0 0;min-height:1px;position:relative;width:100%" data-node-id="1962:471" ><div style="position:absolute;display:contents;left:6px;top:47px" data-node-id="1962:472" ><div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:6px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:49px" data-node-id="1962:440" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:441" >动效设计稿</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:236px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:47px" data-node-id="1962:442" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:443" >输出源码</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:18px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:160px" data-node-id="1962:444" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:445" >设计走查</p></div>
<div style="position:absolute;background-image:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,0));border-width:1px;border-style:solid;border-color:#fff;align-content:stretch;display:flex;align-items:center;justify-content:center;left:236px;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;border-radius:10px;top:164px" data-node-id="1962:446" ><p style="overflow-wrap:break-word;font-weight:400;line-height:1.32;position:relative;flex-shrink:0;font-size:24px;color:#fff;white-space:nowrap" data-node-id="1962:447" >开发接入</p></div>
<div style="position:absolute;height:0;left:181px;top:76px;width:42px" data-node-id="1962:448" ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow8.svg" ></div></div>
<div style="position:absolute;display:flex;height:42px;align-items:center;justify-content:center;left:305px;top:112px;width:0" data-node-id="1962:449" ><div style="flex:none;transform:rotate(90deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow10.svg" ></div></div></div></div>
<div style="position:absolute;display:flex;height:0;align-items:center;justify-content:center;left:181px;top:191px;width:42px" data-node-id="1962:451" ><div style="flex:none;transform:rotate(180deg)"  ><div style="height:0;position:relative;width:42px"  ><div style="position:absolute;inset:-7.36px -2.38% -7.36px 0"  ><img style="display:block;max-width:none;width:100%;height:100%" alt="" src="/assets/figma/1962-395-imgArrow15.svg" ></div></div></div></div></div></div></div>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;height:63px;line-height:1.32;left:calc(50% - 217px);font-size:48px;color:#fff;top:166px;width:495px" data-node-id="1962:454" data-conclusion >整个周期缩短了约40%</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:1197px;font-size:32px;color:#fff;top:313px;white-space:nowrap" data-node-id="1962:456" data-delivery="1" >现在的交付链路</p>
<p style="overflow-wrap:break-word;position:absolute;font-weight:500;line-height:1.32;left:499px;font-size:32px;color:#fff;top:313px;white-space:nowrap" data-node-id="1962:457" data-delivery="0" >过往的交付链路</p>`},bm={id:"figma-1943-1065",title:"成长/收获",nodeId:"1943:1065",header:"PROJECT PORTFOLIO",pageNumber:"04",background:"url('/assets/figma/1943-1065-gradient-0.svg')",body:'<p style="overflow-wrap:break-word;position:absolute;font-weight:700;line-height:1.32;left:680px;font-size:128px;color:#fff;top:416px;white-space:nowrap" data-node-id="1943:1083" >成长/收获</p>'},wm={id:"figma-1943-1085",title:"未来规划",nodeId:"1943:1085",header:"PROJECT PORTFOLIO",pageNumber:"04",background:"url('/assets/figma/1943-1085-gradient-0.svg')",body:`<p style="overflow-wrap:break-word;position:absolute;font-weight:700;line-height:1.32;left:262px;font-size:96px;color:#fff;top:462px;white-space:nowrap" data-node-id="1943:1103">未来规划</p>
<div style="position:absolute;display:flex;flex-direction:column;align-items:flex-start;gap:60px;left:828px;top:310px;width:789px;font-size:40px;font-weight:400;line-height:1.32;overflow-wrap:break-word;color:#fff" data-node-id="2065:43638">
  <p style="width:100%" data-node-id="1957:372">01.夯实动效专业深度，沉淀体系化方法论，推动团队知识共享</p>
  <p style="width:100%" data-node-id="1957:374">02.搭建 AI 辅助动效工作流，优化现有设计流程，提升复杂项目交付效率</p>
  <p style="width:100%" data-node-id="1957:376">03.保持行业洞察与思辨，持续发现并解决设计链路中的专业问题</p>
</div>
<img style="position:absolute;left:729px;top:372px;width:314px;height:1px;transform:rotate(90deg);transform-origin:0 0" width="314" height="1" data-node-id="1957:379" alt="" src="/assets/figma/1943-1085-imgLine15.svg" />`},Sm={id:"figma-1957-346",title:"THS.",nodeId:"1957:346",header:"PROJECT PORTFOLIO",pageNumber:"04",background:"url('/assets/figma/1957-346-gradient-0.svg')",body:'<p style="overflow-wrap:break-word;position:absolute;font-weight:700;line-height:1.32;left:829px;font-size:128px;color:#fff;top:435px;white-space:nowrap" data-node-id="1957:364" >THS.</p>'},ys=(n,e)=>`/assets/figma/${n.replace(":","-")}-${e}.svg`,Eo=`<div class="case-markers" aria-label="项目分组：01">
  <span>01</span><span class="is-muted">02</span>
</div>`,Xe=[{id:"cover",title:"封面",nodeId:"1913:2",header:"ECARX",body:`<div class="cover-animation-layer" aria-hidden="true"></div>
      <div class="cover-copy slide-foreground">
        <h1 data-node-id="1913:5">Promotion Presentation</h1>
        <div class="cover-byline"><p>HMI 动效设计部</p><span aria-hidden="true"></span><p>简锦全</p></div>
      </div>`},{id:"contents",title:"目录",nodeId:"1923:38",header:"CONTENTS",pageNumber:"01",body:`<h1 class="contents-title" data-node-id="1923:52">CONTENTS</h1>
      <div class="contents-cards">
        <article class="contents-card figma-frame-stroke"><p class="card-number">01</p><h2>个人经历</h2><p class="card-english">PROFESSIONAL EXPERIENCE</p></article>
        <article class="contents-card figma-frame-stroke"><p class="card-number">02</p><h2>项目案例</h2><p class="card-english">PROJECT PORTFOLIO</p></article>
        <article class="contents-card figma-frame-stroke"><p class="card-number">03</p><h2>未来规划</h2><p class="card-english">FUTURE OUTLOOK</p></article>
      </div>`},{id:"experience",title:"个人经历时间轴",nodeId:"1923:72",header:"PROFESSIONAL EXPERIENCE",pageNumber:"02",body:`<p class="about-watermark" data-node-id="1923:87">ABOUT ME</p>
      <img class="timeline-line" src="${ys("1923:72","imgLine8")}" width="1920" height="1" alt="" />
      ${[{year:"2019",x:171,dot:229,width:131,textX:171,jobs:[["珠海格力电器股份有限公司","平面设计师"]]},{year:"2022",x:622,dot:677,width:135,textX:635,jobs:[["深圳绿米联创科技有限公司","视觉设计师"],["深圳复临科技有限公司","动效设计师"]]},{year:"2024",x:1069,dot:1130,width:137,textX:1083,jobs:[["星纪魅族科技有限公司","动效设计师"]]},{year:"2026",x:1510,dot:1570,width:135,textX:1519,jobs:[["湖北骐光科技有限公司","动效设计师"]]}].map(({year:n,x:e,dot:t,width:i,textX:s,jobs:r})=>`<div class="timeline-year" style="left:${e}px;width:${i}px">${n}</div>
        <img class="timeline-dot" style="left:${t}px" src="${ys("1923:72","imgEllipse2")}" width="15" height="15" alt="" />
        <div class="timeline-jobs" style="left:${s}px">${r.map(([a,o])=>`<p>公司：${a}<br />职位：${o}</p>`).join("")}</div>`).join("")}`},{id:"portfolio-wall",title:"作品展示",nodeId:"2022:121952",header:"PROJECT PORTFOLIO",pageNumber:"03",showChrome:!1,body:om()},{id:"projects",title:"项目案例总览",nodeId:"1923:191",header:"PROJECT PORTFOLIO",pageNumber:"03",body:`<h1 class="projects-title" data-node-id="1923:229">项目案例</h1>
      <article class="project-card project-card--first figma-frame-stroke">
        <p class="card-number">01</p><h2>独立交付<br />完成核心项目</h2>
        <p class="project-description">面对核心项目，能通过自己的方法论和流程优化，独当一面，完成项目交付。</p>
      </article>
      <article class="project-card project-card--second figma-frame-stroke">
        <p class="card-number">02</p><h2>AI赋能<br />重构交付链路</h2>
        <p class="project-description">通过AI辅助，将动效效果直接输出可调用的代码或可交互原型，形成新的协作方式。</p>
      </article>`},{id:"modular-design",title:"独立交付：完成核心项目",nodeId:"1927:387",header:"PROJECT PORTFOLIO",pageNumber:"04",body:`${Eo}<h1 class="modular-title" data-node-id="1927:429">独立交付<br />完成核心项目</h1>
      <p class="modular-description" data-node-id="1927:430">在自己负责的核心模块，能独立完成设计和交付的工作，结合Flyme的调性和动效设计原则，输出符合Flyme Auto的动效，并通过优化工作流，提高交付效率。</p>`},lm,{id:"case-overview",title:"案例概述",nodeId:"2019:121854",header:"PROJECT PORTFOLIO",pageNumber:"05",stepCount:1,body:`${Eo}${ui({id:"case-final",label:"超级Aicy案例成片",nodeId:"2019:121875",x:141,y:219,width:1099,height:622,steps:[0],loop:!1,border:!1})}
      <h1 class="case-title" data-node-id="2019:121873">案例概述</h1>
      <p class="case-description" data-node-id="2019:121874">2026年Q2，接到给梅赛德斯奔驰做一个关于超级Aicy演示短片的紧急需求，要求在2.5天内完成从设计稿到动画成片的交付。我负责影片重90%的动效设计以及整体的串联工作。通过规划合理的叙事节奏，模块化工程结构，在有限的时间内按期完成并高质量交付。</p>`},cm,hm,um,fm,mm,pm,gm,vm,dm,xm,_m,ym,wm,bm,Sm],ta=n=>n?String(n).padStart(2,"0"):"";function Em(){return Xe.map(pl).join("")}function pl(n,e){return rm(`<section class="slide slide--${n.id}" data-slide-id="${n.id}" data-slide-index="${e}" data-step="0" data-node-id="${n.nodeId}" ${n.background?`style="background-image:${n.background}"`:""} aria-label="第 ${e+1} 张：${n.title}" ${e?"hidden inert":""}>
    ${n.showChrome!==!1?`<header class="slide-header slide-foreground"><p>${n.header}</p><p>2026 CN</p>
      <img src="${ys(n.nodeId,"imgLine7")}" width="1720" height="1" alt="" />
    </header>`:""}
    ${n.body}
    ${n.showChrome!==!1?`<footer class="slide-footer slide-foreground">FLYME DESIGN CENTER</footer>
      ${ta(e)?`<div class="slide-page-number slide-foreground"><p>${ta(e)}</p><img src="${ys(n.nodeId,"imgLine9")}" width="28" height="1" alt="" /></div>`:""}`:""}
  </section>`)}function Es(n){return n.isComposing||n.keyCode===229||n.target instanceof HTMLElement&&!!n.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')}function ml(n){if(!(n.key===" "&&n.target instanceof HTMLElement&&n.target.closest("button, a")))switch(n.key){case"ArrowLeft":case"PageUp":return"previous";case"ArrowRight":case"PageDown":return"next";case" ":return n.shiftKey?"previous":"next";case"Home":return"first";case"End":return"last"}}const wi=n=>Xe[n]?.stepCount??1;function gl(n,e=0){const t=Number.isSafeInteger(n)?Math.max(0,Math.min(Xe.length-1,n)):0;return{index:t,step:Number.isSafeInteger(e)?Math.max(0,Math.min(wi(t)-1,e)):0}}function Mo(n,e){const{index:t,step:i}=n;if(e==="first")return{index:0,step:0};if(e==="last")return{index:Xe.length-1,step:wi(Xe.length-1)-1};if(e==="next"){if(i+1<wi(t))return{index:t,step:i+1};if(t<Xe.length-1)return{index:t+1,step:0}}else{if(i>0)return{index:t,step:i-1};if(t>0)return{index:t-1,step:wi(t-1)-1}}return{index:t,step:i}}function To({index:n,step:e}){return`#slide=${n+1}${e?`&step=${e+1}`:""}`}function Mm(n){const e=new URLSearchParams(n.replace(/^#/,""));return gl(Number(e.get("slide"))-1,e.has("step")?Number(e.get("step"))-1:0)}function vl({index:n,step:e}){return`第 ${n+1} 张 / ${Xe.length} 张${wi(n)>1?` · 步骤 ${e+1}/${wi(n)}`:""}`}class Tm{units=[];events=new AbortController;position={index:0,step:0};constructor(e){const t=new Map;for(const i of e.querySelectorAll(".slide-video")){const s=i.querySelector("video"),r=Number(i.closest("[data-slide-index]").dataset.slideIndex),a=new Set((i.dataset.playSteps??i.dataset.playStep??"0").split(",").map(Number)),o={slot:i,video:s,page:r,steps:a,loop:s.dataset.loop?s.dataset.loop==="true":s.loop},l=r+":"+(i.dataset.syncGroup??i.dataset.mediaId);let d=t.get(l);d||(d={items:[],wanted:!1,phase:"idle",operation:null,monitor:0},t.set(l,d),this.units.push(d)),d.items.push(o)}for(const i of this.units)for(const s of i.items){s.video.muted=!0,s.video.loop=i.items.length===1&&s.loop;const r={signal:this.events.signal};s.slot.querySelector("[data-video-retry]").addEventListener("click",()=>{i.wanted&&this.start(i,0,!0,!0)},r),s.video.addEventListener("error",()=>{i.wanted&&i.phase==="playing"&&this.fail(i,this.errorMessage(i))},r),s.video.addEventListener("playing",()=>{(!i.wanted||i.phase==="failed")&&s.video.pause()},r),s.video.addEventListener("waiting",()=>{i.items.length>1&&i.wanted&&i.phase==="playing"&&this.start(i,i.items[0].video.currentTime,!1)},r),s.video.addEventListener("ended",()=>{i.items.length>1&&i.wanted&&i.phase==="playing"&&s.loop&&this.start(i,0,!1)},r)}}update(e,t){this.position={...e};for(const i of this.units){const s=t&&i.items.every(r=>r.page===e.index&&r.steps.has(e.step));s!==i.wanted&&(i.wanted=s,s?this.start(i,0,!0):this.stop(i))}}setEnabled(e){this.update(this.position,e)}destroy(){this.update(this.position,!1),this.events.abort();for(const e of this.units)for(const{video:t}of e.items)t.removeAttribute("src"),t.load()}cancel(e){const t=e.operation;e.operation=null,t?.abort(new DOMException("Playback superseded","AbortError"))}stop(e){this.cancel(e),e.phase="idle",window.clearInterval(e.monitor),e.monitor=0;for(const t of e.items)t.video.pause(),t.video.preload="none",t.slot.classList.remove("is-playing"),this.fallback(t,!1)}fallback(e,t,i){const s=e.slot.querySelector(".video-fallback");s.hidden=!t,i&&(s.querySelector("span").textContent=i)}errorMessage(e,t){const i=e.items.map(s=>s.video.error).find(Boolean);return i?.code===MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED||i?.code===MediaError.MEDIA_ERR_DECODE||t instanceof DOMException&&t.name==="NotSupportedError"?e.items.some(s=>s.slot.dataset.codec==="hevc"||s.slot.dataset.mediaId==="space-wave-tool")?"无法解码视频，请使用支持 H.265 / HEVC 的浏览器；已保留原始预览":"浏览器无法解码此视频，已保留预览":t instanceof DOMException&&t.name==="NotAllowedError"?"浏览器未允许播放，请点击重试":"视频加载或播放失败，已保留预览"}fail(e,t){this.cancel(e),e.phase="failed",window.clearInterval(e.monitor),e.monitor=0;for(const i of e.items)i.video.pause(),i.slot.classList.remove("is-playing"),this.fallback(i,!0,t)}waitFor(e,t,i){return new Promise((s,r)=>{const a=["loadedmetadata","loadeddata","canplay","canplaythrough","seeked","error"],o=()=>{for(const d of a)e.removeEventListener(d,l);i.removeEventListener("abort",l)},l=()=>{i.aborted||e.error?(o(),r(i.reason??e.error)):t()&&(o(),s())};for(const d of a)e.addEventListener(d,l);i.addEventListener("abort",l,{once:!0}),l()})}async start(e,t,i,s=!1){if(this.cancel(e),!e.wanted)return;const r=new AbortController;e.operation=r,e.phase="preparing";const{signal:a}=r,o=window.setTimeout(()=>{if(!(e.operation!==r||!e.wanted))for(const l of e.items)this.fallback(l,!0,"视频加载较慢，已保留预览，就绪后自动播放")},1e4);try{for(const l of e.items)l.video.pause(),this.fallback(l,!1),i&&l.slot.classList.remove("is-playing"),l.video.preload="auto",l.video.hasAttribute("src")||(l.video.src=l.video.dataset.src),(s||i&&l.video.seeking)&&l.video.load();if(await Promise.all(e.items.map(({video:l})=>this.waitFor(l,()=>l.readyState>=1,a))),a.aborted||(await Promise.all(e.items.map(async({video:l})=>{const d=Math.min(t,Math.max(0,l.duration-.001));(Math.abs(l.currentTime-d)>.001||l.ended)&&(l.currentTime=d),await this.waitFor(l,()=>!l.seeking&&l.readyState>=3,a)})),a.aborted)||(await Promise.all(e.items.map(({video:l})=>l.play())),a.aborted||e.operation!==r||!e.wanted))return;e.phase="playing";for(const l of e.items)l.slot.classList.add("is-playing"),this.fallback(l,!1);e.items.length>1&&!e.monitor&&(e.monitor=window.setInterval(()=>this.synchronize(e),50))}catch(l){e.operation===r&&e.wanted&&this.fail(e,this.errorMessage(e,l))}finally{window.clearTimeout(o)}}synchronize(e){if(!e.wanted||e.phase!=="playing")return;const t=e.items[0].video;e.items.some(({video:i})=>i.ended)?this.start(e,0,!1):e.items.some(({video:i})=>i.readyState<3||i.paused||Math.abs(i.currentTime-t.currentTime)>.1)&&this.start(e,t.currentTime,!1)}}class Am{constructor(e,t,i){this.root=e,this.onSelect=t,this.open=i??this.wide.matches,this.userToggled=i!==void 0,this.panel.id="slide-sidebar",this.panel.className="slide-sidebar",this.panel.setAttribute("aria-label","页面导航"),this.panel.innerHTML='<header class="sidebar-header">页面导航</header><ol class="slide-list"></ol>',this.toggle.id="toggle-slide-sidebar",this.toggle.type="button",this.toggle.className="sidebar-toggle",this.toggle.setAttribute("aria-controls",this.panel.id);const s=this.panel.querySelector("ol");Xe.forEach((r,a)=>{const o=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="slide-thumb",l.dataset.index=String(a);const d=ta(a)||"封面";l.innerHTML='<div class="thumb-image" aria-hidden="true"></div><div class="thumb-caption"><span class="thumb-number"></span><span class="thumb-title"></span><span class="thumb-steps"></span></div>',l.querySelector(".thumb-number").textContent=d,l.querySelector(".thumb-title").textContent=a?r.title:"";const c=r.stepCount??1;l.querySelector(".thumb-steps").textContent=c>1?`${c} 步`:"",l.setAttribute("aria-label",`${a?`页码 ${d}，`:""}${r.title}，第 ${a+1} 张${c>1?`，共 ${c} 步`:""}`);const h=document.createElement("template");h.innerHTML=pl(r,a);const f=h.content.firstElementChild;f.classList.replace("slide","slide-preview-content"),f.hidden=!1,f.inert=!0,f.setAttribute("aria-hidden","true"),f.removeAttribute("aria-label"),f.querySelectorAll("video, canvas, .cover-animation-layer, .video-fallback, .video-expand").forEach(m=>m.remove());for(const m of[f,...f.querySelectorAll("*")])for(const x of["id","data-node-id","data-slide-id","data-slide-index","data-media-id","data-play-step","data-play-steps","data-sync-group"])m.removeAttribute(x);f.querySelectorAll("img").forEach(m=>{m.loading="lazy",m.decoding="async"}),l.querySelector(".thumb-image").append(f),l.addEventListener("click",()=>{this.enabled&&a!==this.position.index&&this.onSelect(a)},{signal:this.events.signal}),this.buttons.push(l),o.append(l),s.append(o)}),this.panel.addEventListener("keydown",this.onKeyDown,{signal:this.events.signal}),this.toggle.addEventListener("click",()=>{this.userToggled=!0,this.open=!this.open,this.syncVisibility()},{signal:this.events.signal}),this.wide.addEventListener("change",()=>{this.userToggled||(this.open=this.wide.matches,this.syncVisibility())},{signal:this.events.signal}),e.append(this.panel,this.toggle),this.resize=new ResizeObserver(()=>{const r=this.buttons[0].querySelector(".thumb-image").clientWidth;r&&this.panel.style.setProperty("--thumbnail-scale",String(r/Ft))}),this.resize.observe(this.buttons[0].querySelector(".thumb-image")),this.update(this.position),this.syncVisibility()}root;onSelect;panel=document.createElement("aside");toggle=document.createElement("button");buttons=[];events=new AbortController;wide=matchMedia("(min-width: 900px)");resize;open;userToggled=!1;enabled=!0;position={index:0,step:0};update(e){const t=this.position.index!==e.index;this.position={...e},this.buttons.forEach((i,s)=>{const r=s===e.index;i.classList.toggle("is-current",r),r?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"),i.tabIndex=r?0:-1;const a=Xe[s].stepCount??1;i.querySelector(".thumb-steps").textContent=a>1?r?`${e.step+1}/${a} 步`:`${a} 步`:""}),t&&this.enabled&&this.open&&this.revealCurrent()}setEnabled(e){this.enabled=e,this.syncVisibility()}destroy(){this.events.abort(),this.resize.disconnect(),this.panel.remove(),this.toggle.remove(),this.root.classList.remove("sidebar-open","sidebar-collapsed")}revealCurrent(){this.buttons[this.position.index].scrollIntoView({block:"nearest"})}syncVisibility(){const e=this.enabled&&this.open;!e&&this.panel.contains(document.activeElement)&&this.toggle.focus({preventScroll:!0}),this.panel.hidden=!e,this.panel.inert=!e,this.toggle.hidden=!this.enabled,this.toggle.inert=!this.enabled,this.toggle.textContent=e?"收起页面":"页面",this.toggle.setAttribute("aria-expanded",String(e)),this.root.classList.toggle("sidebar-open",e),this.root.classList.toggle("sidebar-collapsed",this.enabled&&!this.open),e&&this.revealCurrent()}onKeyDown=e=>{if(!this.enabled||Es(e)||e.altKey||e.ctrlKey||e.metaKey)return;const t=e.target.closest(".slide-thumb");if(!t)return;const i=this.buttons.indexOf(t),s=e.key==="ArrowDown"?i+1:e.key==="ArrowUp"?i-1:e.key==="Home"?0:e.key==="End"?this.buttons.length-1:null;if(s!==null){e.preventDefault(),e.stopPropagation();const r=this.buttons[Math.max(0,Math.min(this.buttons.length-1,s))];r.focus({preventScroll:!0}),r.scrollIntoView({block:"nearest"})}else(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation(),t.click())}}class Rm{constructor(e){this.stage=e;const t={signal:this.events.signal,passive:!0},i=[{slideId:"contents",selector:".slide--contents .contents-cards > .contents-card"},{slideId:"projects",selector:".slide--projects > .project-card"},{slideId:"portfolio-wall",selector:".portfolio-card",moving:!0},{slideId:"figma-2017-121463",selector:".lyrics-video"}];for(const{slideId:s,selector:r,moving:a}of i)for(const o of e.querySelectorAll(r)){const l=document.createElement("div");l.className="contents-glow",l.hidden=!0,l.setAttribute("aria-hidden","true"),l.innerHTML='<div class="contents-glow__halo"><div class="contents-glow__ring"></div></div><div class="contents-glow__ring contents-glow__core"></div>',o.parentElement.append(l);const d={card:o,layer:l,slideId:s,moving:a};this.entries.push(d);const c=h=>this.track(d,h);o.addEventListener("pointerenter",c,t),o.addEventListener("pointermove",c,t),o.addEventListener("pointerleave",()=>this.leave(d),t),o.addEventListener("pointercancel",()=>this.leave(d),t)}e.addEventListener("pointermove",s=>{s.pointerType==="mouse"&&this.enabled&&this.hover.matches&&(this.pointer={x:s.clientX,y:s.clientY})},t),e.addEventListener("pointerleave",()=>{this.pointer=void 0;for(const s of this.entries)this.leave(s)},t),window.addEventListener("blur",this.clear,t),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clear()},t),this.hover.addEventListener("change",this.clear,t)}stage;entries=[];events=new AbortController;hover=matchMedia("(hover: hover) and (pointer: fine)");enabled=!1;activeSlideId="";frame=0;pending;destroyed=!1;pointer;setEnabled(e,t,i=0){t==="figma-2017-121463"&&i!==0&&(e=!1),!(this.destroyed||this.enabled===e&&this.activeSlideId===t)&&(this.clear(),this.enabled=e,this.activeSlideId=t)}clear=()=>{this.frame&&cancelAnimationFrame(this.frame),this.frame=0,this.pending=void 0,this.pointer=void 0;for(const{layer:e}of this.entries)e.hidden=!0,e.classList.remove("is-active"),e.style.removeProperty("--glow-x"),e.style.removeProperty("--glow-y")};destroy(){this.destroyed=!0,this.enabled=!1,this.clear(),this.events.abort();for(const{layer:e}of this.entries)e.remove();this.entries.length=0}track(e,t){!this.enabled||this.activeSlideId!==e.slideId||!this.hover.matches||t.pointerType!=="mouse"||document.hidden||(this.pointer={x:t.clientX,y:t.clientY},this.pending={entry:e,...this.pointer},this.frame||(this.frame=requestAnimationFrame(this.draw)))}draw=()=>{this.frame=0;const e=this.pending;this.pending=void 0,!(!e||!this.enabled||this.activeSlideId!==e.entry.slideId||!this.hover.matches||document.hidden)&&this.paint(e)};refreshMovingCards(){if(!this.enabled||!this.pointer||!this.hover.matches||document.hidden||this.activeSlideId!=="portfolio-wall")return;const{x:e,y:t}=this.pointer,i=this.stage.getBoundingClientRect(),s=e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom;for(const r of this.entries){if(!r.moving)continue;const a=r.card.getBoundingClientRect();s&&r.card.parentElement.dataset.visible==="true"&&e>=a.left&&e<=a.right&&t>=a.top&&t<=a.bottom?this.paint({entry:r,x:e,y:t}):r.layer.classList.contains("is-active")&&this.leave(r)}}paint(e){const{entry:{card:t,layer:i},x:s,y:r}=e,a=t.getBoundingClientRect();if(!a.width||!a.height||s<a.left||s>a.right||r<a.top||r>a.bottom)return;const o=t.offsetWidth,l=t.offsetHeight;i.style.left=`${t.offsetLeft}px`,i.style.top=`${t.offsetTop}px`,i.style.width=`${o}px`,i.style.height=`${l}px`,i.style.borderRadius=getComputedStyle(t).borderRadius,i.style.setProperty("--glow-x",`${(s-a.left)*o/a.width}px`),i.style.setProperty("--glow-y",`${(r-a.top)*l/a.height}px`),i.hidden&&(i.hidden=!1,getComputedStyle(i).opacity),i.classList.add("is-active")}leave({layer:e}){this.pending?.entry.layer===e&&(this.pending=void 0,this.frame&&cancelAnimationFrame(this.frame),this.frame=0),e.classList.remove("is-active")}}class Cm{constructor(e,t){this.refreshGlow=t,this.wall=e.querySelector(".portfolio-wall");const i={signal:this.events.signal};this.rows=[...this.wall.querySelectorAll(".portfolio-row")].map((s,r)=>{const a=Fi[r],o=[...s.querySelectorAll(".portfolio-item")].map((l,d)=>{const c=l.querySelector(".portfolio-card"),h=c.querySelector("video"),f={wrapper:l,card:c,video:h,fallback:c.querySelector(".video-fallback"),width:a.cards[d].width,offset:a.cards[d].offset,x:0,visible:!1,pending:!1,failed:!1,token:0,timer:0};return h.muted=!0,h.addEventListener("playing",()=>{if(!this.running||!f.visible||f.failed){h.pause();return}f.pending=!1,clearTimeout(f.timer),f.timer=0,f.card.classList.add("is-playing"),f.fallback.hidden=!0},i),h.addEventListener("error",()=>{this.running&&h.hasAttribute("src")&&this.fail(f,"视频加载或解码失败，已保留预览，请重试")},i),c.querySelector("[data-video-retry]").addEventListener("click",()=>{!this.running||!f.visible||(this.pause(f),f.failed=!1,f.fallback.hidden=!0,h.removeAttribute("src"),h.load(),this.prepare(f),this.play(f))},i),f});return s.addEventListener("scroll",()=>{this.running&&this.reduced.matches&&(this.paint(),this.refreshGlow())},{...i,passive:!0}),s.addEventListener("keydown",l=>{!this.running||!this.reduced.matches||l.target!==s||(l.key==="ArrowLeft"||l.key==="ArrowRight")&&(l.preventDefault(),l.stopPropagation(),s.scrollLeft+=l.key==="ArrowLeft"?-400:400)},i),{element:s,layout:a,items:o}}),document.addEventListener("visibilitychange",this.syncRunning,i),this.reduced.addEventListener("change",()=>{this.previousTime=null,this.cancelFrame(),this.configureReduced(),this.paint(),this.schedule()},i),this.paint()}refreshGlow;wall;rows;events=new AbortController;reduced=matchMedia("(prefers-reduced-motion: reduce)");enabled=!1;running=!1;destroyed=!1;elapsed=0;previousTime=null;frame=0;update(e,t){const i=e&&t===ms&&!this.destroyed;if(i!==this.enabled){if(this.enabled=i,this.elapsed=0,this.previousTime=null,!i){this.running=!1,this.cancelFrame();for(const s of this.rows)for(const r of s.items)this.pause(r),r.visible=!1,r.failed=!1,r.fallback.hidden=!0,r.video.removeAttribute("src"),r.video.preload="none",r.video.load()}this.configureReduced(),this.syncRunning()}}destroy(){this.update(!1,""),this.destroyed=!0,this.events.abort(),this.cancelFrame()}configureReduced(){const e=this.enabled&&this.reduced.matches;this.wall.classList.toggle("is-reduced",e);for(const t of this.rows)t.element.tabIndex=e?0:-1,t.element.scrollLeft=0}syncRunning=()=>{if(this.running=this.enabled&&!document.hidden&&!this.destroyed,this.previousTime=null,this.cancelFrame(),!this.running)for(const e of this.rows)for(const t of e.items)this.pause(t);this.paint(),this.schedule()};cancelFrame(){this.frame&&cancelAnimationFrame(this.frame),this.frame=0}schedule(){this.running&&!this.reduced.matches&&!this.frame&&(this.frame=requestAnimationFrame(this.tick))}tick=e=>{this.frame=0,this.running&&(this.previousTime!==null&&(this.elapsed+=Math.min(100,Math.max(0,e-this.previousTime))/1e3),this.previousTime=e,this.paint(),this.refreshGlow(),this.schedule())};paint(){const e=this.enabled&&this.reduced.matches;for(const{element:t,layout:i,items:s}of this.rows)for(const r of s){const a=e?i.reducedOrigin+r.offset-t.scrollLeft:_a(i.origin+r.offset+i.direction*this.elapsed*st.speed,r.width,i.length);r.x=a,e||r.wrapper.style.setProperty("--wall-x",`${a}px`);const o=a<st.viewport&&a+r.width>0,l=a<st.viewport+160&&a+r.width>-160;r.wrapper.dataset.visible!==String(o)&&(r.wrapper.dataset.visible=String(o),r.wrapper.inert=!o),this.running&&l&&this.prepare(r),this.running&&o?(r.visible=!0,!r.pending&&!r.failed&&r.video.paused&&this.play(r)):((r.visible||r.pending||!r.video.paused)&&this.pause(r),r.visible=!1)}}prepare(e){e.failed||e.video.hasAttribute("src")||(e.video.preload="auto",e.video.src=e.video.dataset.src,e.video.load())}play(e){if(e.pending||e.failed||!this.running||!e.visible)return;this.prepare(e);const t=++e.token;e.pending=!0,e.timer=window.setTimeout(()=>{t!==e.token||!this.running||!e.visible||(e.fallback.querySelector("span").textContent="视频加载较慢，已保留预览，就绪后自动播放",e.fallback.hidden=!1)},1e4),e.video.play().catch(i=>{t!==e.token||!e.visible||!this.running||this.fail(e,i instanceof DOMException&&i.name==="NotAllowedError"?"浏览器未允许播放，请点击重试":"视频加载或播放失败，已保留预览，请重试")})}pause(e){++e.token,e.pending=!1,clearTimeout(e.timer),e.timer=0,e.video.pause(),e.card.classList.remove("is-playing")}fail(e,t){this.pause(e),e.failed=!0,e.fallback.querySelector("span").textContent=t,e.fallback.hidden=!1}}const ia={speed:20,size:85,concavity:40,showChrome:!0},En={speed:[0,100],size:[40,130],concavity:[0,100]},lr="promotion-deck:wall-lab:v1";function Mn(n){const e=n&&typeof n=="object"?n:{},t={...ia};for(const i of Object.keys(En)){const s=e[i],[r,a]=En[i];typeof s=="number"&&Number.isFinite(s)&&(t[i]=Math.min(a,Math.max(r,s)))}return typeof e.showChrome=="boolean"&&(t.showChrome=e.showChrome),t}function Ao(n){const e=960/(n/100),t=960-e,i=960+e,s=Math.floor(Math.min(0,t))-16,r=Math.ceil(Math.max(1920,i))+16;return{left:t,right:i,renderLeft:s,renderWidth:r-s}}function Pm(n,e){const t=(n-960)/960;return 1-.7*(e/100)*Math.max(0,1-t*t)}function Lm(n,e,t){if(n<0||n>1920||e<0||e>1080)return;const i=t.size/100,s=960+(n-960)/i,r=540+(e-540)/i/Pm(n,t.concavity);if(!(r<-1e-8||r>1080+1e-8))return{x:s,y:Math.min(1080,Math.max(0,r))}}const Ro=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Dm=`
  uniform sampler2D uMap;
  uniform vec2 uSize;
  uniform float uAspect;
  uniform float uRadius;
  uniform float uStroke;
  uniform vec2 uPointer;
  uniform float uHover;
  varying vec2 vUv;
  float roundedBox(vec2 p, vec2 halfSize, float radius) {
    vec2 q = abs(p) - halfSize + radius;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
  }
  void main() {
    vec2 point = vec2(vUv.x, 1.0 - vUv.y) * (uSize + 32.0) - 16.0;
    float distanceToEdge = roundedBox(point - uSize * .5, uSize * .5, uRadius);
    float aa = max(fwidth(distanceToEdge), .65);
    float fillAlpha = 1.0 - smoothstep(-aa * .5, aa * .5, distanceToEdge);
    float innerAlpha = 1.0 - smoothstep(-uStroke - aa * .5, -uStroke + aa * .5, distanceToEdge);
    float ring = max(0.0, fillAlpha - innerAlpha);
    vec2 crop = vec2(1.0);
    float cardAspect = uSize.x / uSize.y;
    if (uAspect > cardAspect) crop.x = cardAspect / uAspect;
    else crop.y = uAspect / cardAspect;
    vec2 mediaUv = (point / uSize - .5) * crop + .5;
    vec3 color = texture2D(uMap, vec2(mediaUv.x, 1.0 - mediaUv.y)).rgb;
    float strokeOpacity = mix(1.0, .2, clamp(point.y / uSize.y, 0.0, 1.0));
    vec3 rgb = color * fillAlpha;
    rgb = mix(rgb, vec3(fillAlpha), ring * strokeOpacity);
    float reach = length(point - uPointer) / 260.0;
    float light = exp(-reach * reach * 2.0) * uHover;
    float halo = exp(-pow(abs(distanceToEdge) / 8.0, 2.0)) * light * .55;
    float core = exp(-pow(distanceToEdge / 1.8, 2.0)) * light * .75;
    float glow = clamp(halo + core, 0.0, .9);
    vec3 coldWhite = vec3(.9294, .9647, 1.0);
    float alpha = fillAlpha + glow * (1.0 - fillAlpha);
    rgb = rgb * (1.0 - glow) + coldWhite * glow;
    gl_FragColor = vec4(rgb, alpha);
  }
`,Im=`
  uniform sampler2D uWall;
  uniform float uScale;
  uniform float uConcavity;
  uniform float uSourceLeft;
  uniform float uSourceWidth;
  varying vec2 vUv;
  void main() {
    vec2 point = (vUv - .5) / uScale + .5;
    // Anchor the curve at the output canvas edges, independently of card scale.
    float x = (vUv.x - .5) * 2.0;
    float factor = 1.0 - .7 * uConcavity * max(0.0, 1.0 - x * x);
    point.y = .5 + (point.y - .5) / factor;
    if (point.y < 0.0 || point.y > 1.0) { gl_FragColor = vec4(0.0); return; }
    // The source expands when shrinking cards; the mask stays in output space.
    point.x = (point.x * 1920.0 - uSourceLeft) / uSourceWidth;
    vec4 wall = texture2D(uWall, point);
    float edgeFade = clamp(min(vUv.x, 1.0 - vUv.x) * 1920.0 / 500.0, 0.0, 1.0);
    gl_FragColor = wall * edgeFade;
  }
`;class Um{constructor(e,t,i,s,r={}){this.canvas=e,this.errors=i,this.announce=s,this.renderOptions=r,this.settings=Mn(t),this.paused=this.reduceQuery.matches,this.placeholder.needsUpdate=!0,this.renderer=new cl({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.outputMaterial=new Xt({vertexShader:Ro,fragmentShader:Im,depthTest:!1,depthWrite:!1,blending:Kt,uniforms:{uWall:{value:this.target.texture},uScale:{value:this.settings.size/100},uConcavity:{value:this.settings.concavity/100},uSourceLeft:{value:0},uSourceWidth:{value:1920}}}),this.updateView(),this.outputScene.add(new Ot(this.outputGeometry,this.outputMaterial)),this.mediaRoot.hidden=!0,this.mediaRoot.className="wall-lab-media",e.parentElement.append(this.mediaRoot),Fi.forEach((o,l)=>o.cards.forEach(d=>this.addWork(l,d))),this.ready=Promise.all(this.posterLoads).then(()=>{});const a={signal:this.events.signal};e.addEventListener("pointermove",o=>{o.pointerType!=="mouse"||!this.hoverQuery.matches||(this.pointer={x:o.clientX,y:o.clientY})},a),e.addEventListener("pointerleave",()=>{this.pointer=void 0},a),e.addEventListener("pointercancel",()=>{this.pointer=void 0},a),window.addEventListener("blur",()=>{this.pointer=void 0},a),document.addEventListener("visibilitychange",()=>{this.previousTime=void 0,this.pointer=void 0,document.hidden?(this.cancelFrame(),this.works.forEach(o=>this.pauseWork(o))):this.schedule()},a),this.reduceQuery.addEventListener("change",()=>{this.setPaused(this.reduceQuery.matches),this.announce(this.paused?"已按“减少动态效果”暂停；可手动查看下一组。":"已恢复动态预览。")},a),e.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.contextLost=!0,this.cancelFrame(),this.works.forEach(l=>this.pauseWork(l)),this.announce("显卡绘制已中断，请刷新此调试页恢复；已保存的参数会保留。")},a),e.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.previousTime=void 0,this.schedule(),this.announce("绘制已恢复。")},a),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.schedule()}canvas;errors;announce;renderOptions;renderer;target=new ci(1920,1080,{depthBuffer:!1,stencilBuffer:!1});scene=new Jr;camera=new _s(0,1920,1080,0,-1,1);outputScene=new Jr;outputCamera=new _s(-1,1,1,-1,-1,1);outputMaterial;outputGeometry=new Hi(2,2);works=[];posterLoads=[];ready;distances=Fi.map(()=>0);events=new AbortController;resizeObserver;hoverQuery=matchMedia("(hover: hover) and (pointer: fine)");reduceQuery=matchMedia("(prefers-reduced-motion: reduce)");mediaRoot=document.createElement("div");placeholder=new tl(new Uint8Array([10,16,23,255]),1,1);pointer;previousTime;frame=0;destroyed=!1;contextLost=!1;paused=!1;settings;view=Ao(100);getSettings(){return{...this.settings}}setSettings(e){const t=this.settings.size;this.settings=Mn(e),t!==this.settings.size&&this.updateView()}isPaused(){return this.paused}setPaused(e){this.paused=e,this.previousTime=void 0,e&&this.works.forEach(t=>this.pauseWork(t))}nextGroup(){this.distances.forEach((e,t)=>{this.distances[t]+=st.small+st.gap})}captureStill(){if(this.destroyed||this.contextLost)return"";const e=this.works.map(i=>({map:i.mesh.material.uniforms.uMap.value,aspect:i.mesh.material.uniforms.uAspect.value}));this.draw(0,!0);const t=this.canvas.toDataURL("image/png");return this.works.forEach((i,s)=>{i.mesh.material.uniforms.uMap.value=e[s].map,i.mesh.material.uniforms.uAspect.value=e[s].aspect}),this.renderOptions.staticOnly||this.draw(0),t}getState(){return{settings:this.getSettings(),paused:this.paused,destroyed:this.destroyed,view:{...this.view},cards:this.works.map(e=>({id:e.id,row:e.row,x:e.x,visible:e.visible,playing:!e.video.paused,time:e.video.currentTime,failed:e.failed,hover:e.hover}))}}destroy(){if(!this.destroyed){this.destroyed=!0,this.cancelFrame(),this.events.abort(),this.resizeObserver.disconnect();for(const e of this.works)this.pauseWork(e),e.video.removeAttribute("src"),e.video.load(),e.texture?.dispose(),e.poster.dispose(),e.mesh.material.dispose(),e.mesh.geometry.dispose(),e.errorElement.remove();this.mediaRoot.remove(),this.placeholder.dispose(),this.target.dispose(),this.outputMaterial.dispose(),this.outputGeometry.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss()}}addWork(e,t){const i=new Xt({vertexShader:Ro,fragmentShader:Dm,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:Do,blendSrc:Io,blendDst:gs,uniforms:{uMap:{value:this.placeholder},uSize:{value:new ke(t.width,st.height)},uAspect:{value:t.wide?3.2:1.6},uRadius:{value:st.radius},uStroke:{value:st.stroke},uPointer:{value:new ke(-1e4,-1e4)},uHover:{value:0}}}),s=new Ot(new Hi(t.width+32,st.height+32),i);s.position.y=1080-Fi[e].top-st.height/2,s.frustumCulled=!1,this.scene.add(s);const r=document.createElement("video");r.dataset.workId=t.id,r.muted=!0,r.defaultMuted=!0,r.poster=In(xa(`/assets/portfolio/${t.id}.mp4`)),r.playsInline=!0,r.loop=!0,r.preload="none",this.mediaRoot.append(r);const a=document.createElement("li");a.hidden=!0;const o=document.createElement("span");o.textContent=`${t.label}：暂时无法播放，已保留封面`;const l=document.createElement("button");l.textContent="重试",l.type="button",a.append(o,l),this.errors.append(a);const d={id:t.id,label:t.label,row:e,width:t.width,offset:t.offset,x:0,mesh:s,video:r,poster:new pt,visible:!1,prepared:!1,pending:!1,failed:!1,token:0,hover:0,errorElement:a};this.works.push(d),d.poster.dispose();let c;this.posterLoads.push(new Promise(f=>{c=f})),d.poster=new Qd().load(r.poster,f=>{if(c(),this.destroyed){f.dispose();return}(!d.texture||r.readyState<2||d.failed)&&(i.uniforms.uMap.value=f,i.uniforms.uAspect.value=f.image.width/f.image.height)},void 0,()=>{c(),this.destroyed||this.announce(`${t.label}封面加载失败；视频就绪后仍可播放。`)});const h={signal:this.events.signal};l.addEventListener("click",()=>{this.pauseWork(d),d.failed=!1,d.errorElement.hidden=!0,r.load(),this.syncErrors(),this.prepare(d)},h),r.addEventListener("playing",()=>{if(this.destroyed||document.hidden||this.paused||!d.visible){r.pause();return}d.pending=!1,d.errorElement.hidden=!0,this.syncErrors(),i.uniforms.uMap.value=d.texture,i.uniforms.uAspect.value=r.videoWidth/r.videoHeight},h),r.addEventListener("error",()=>{d.prepared&&this.fail(d)},h)}prepare(e){e.prepared||e.failed||(e.prepared=!0,e.video.preload="auto",e.video.src=In(`assets/portfolio/${e.id}.mp4`),e.texture=new $d(e.video),e.video.load())}play(e){if(e.pending||e.failed||!e.video.paused)return;this.prepare(e);const t=++e.token;e.pending=!0,e.video.play().catch(i=>{if(!(this.destroyed||t!==e.token||!e.visible||this.paused||document.hidden)){if(i instanceof DOMException&&i.name==="AbortError"){e.pending=!1;return}this.fail(e)}})}pauseWork(e){++e.token,e.pending=!1,e.video.pause()}fail(e){this.pauseWork(e),e.failed=!0,e.mesh.material.uniforms.uMap.value=e.poster.image?e.poster:this.placeholder;const t=e.poster.image;t&&(e.mesh.material.uniforms.uAspect.value=t.width/t.height),e.errorElement.hidden=!1,this.syncErrors()}syncErrors(){this.errors.hidden=!this.works.some(e=>!e.errorElement.hidden)}updateView(){this.view=Ao(this.settings.size),this.target.setSize(this.view.renderWidth,1080),this.camera.left=this.view.renderLeft,this.camera.right=this.view.renderLeft+this.view.renderWidth,this.camera.updateProjectionMatrix(),this.outputMaterial.uniforms.uSourceLeft.value=this.view.renderLeft,this.outputMaterial.uniforms.uSourceWidth.value=this.view.renderWidth}resize(){const e=this.canvas.getBoundingClientRect();this.renderer.setSize(Math.max(1,Math.round(e.width)),Math.max(1,Math.round(e.height)),!1)}cancelFrame(){cancelAnimationFrame(this.frame),this.frame=0}schedule(){!this.renderOptions.staticOnly&&!this.destroyed&&!document.hidden&&!this.contextLost&&!this.frame&&(this.frame=requestAnimationFrame(this.tick))}tick=e=>{if(this.frame=0,this.destroyed||document.hidden||this.contextLost)return;const t=this.previousTime===void 0?0:Math.min(.1,(e-this.previousTime)/1e3);this.previousTime=e,this.draw(t),this.schedule()};draw(e,t=!1){!t&&!this.paused&&this.distances.forEach((r,a)=>{this.distances[a]=(this.distances[a]+this.settings.speed*e/(this.settings.size/100))%Fi[a].length});const i=this.canvas.getBoundingClientRect(),s=!t&&this.pointer&&Lm((this.pointer.x-i.left)*1920/i.width,(this.pointer.y-i.top)*1080/i.height,this.settings);for(const r of this.works){const a=Fi[r.row];r.x=this.view.left+_a(a.origin+r.offset+a.direction*(t?0:this.distances[r.row])-this.view.left,r.width,a.length),r.mesh.position.x=r.x+r.width/2,r.visible=r.x<this.view.right&&r.x+r.width>this.view.left,r.mesh.visible=r.x<this.view.right+16&&r.x+r.width>this.view.left-16;const o=r.x<this.view.right+160&&r.x+r.width>this.view.left-160;t?(r.mesh.material.uniforms.uMap.value=r.poster.image?r.poster:this.placeholder,r.poster.image&&(r.mesh.material.uniforms.uAspect.value=r.poster.image.width/r.poster.image.height)):(!this.paused&&o&&this.prepare(r),!this.paused&&r.visible?this.play(r):(r.pending||!r.video.paused)&&this.pauseWork(r));const l=!!s&&r.visible&&s.x>=r.x&&s.x<=r.x+r.width&&s.y>=a.top&&s.y<=a.top+st.height;l&&r.mesh.material.uniforms.uPointer.value.set(s.x-r.x,s.y-a.top);const d=l?1:0;t||(r.hover=this.reduceQuery.matches?d:r.hover+(d-r.hover)*Math.min(1,e/(l?.2:.3))),r.mesh.material.uniforms.uHover.value=t?0:r.hover}this.outputMaterial.uniforms.uScale.value=this.settings.size/100,this.outputMaterial.uniforms.uConcavity.value=this.settings.concavity/100,this.renderer.setRenderTarget(this.target),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.outputScene,this.outputCamera)}}class Nm{constructor(e,t,i,s){this.root=e,this.editable=s,this.page=t.querySelector(".slide--portfolio-wall"),this.original=this.page.querySelector(".portfolio-wall"),this.fallback=new Cm(t,i),this.layer.className="curved-portfolio-layer",this.layer.hidden=!0,this.canvas.className="curved-portfolio-canvas",this.canvas.setAttribute("aria-label","双向流动的内凹作品墙"),this.errors.className="curved-portfolio-errors",this.errors.hidden=!0,this.notice.className="curved-portfolio-notice",this.notice.setAttribute("role","status"),this.layer.append(this.canvas,this.errors,this.notice),this.page.append(this.layer),this.still.className="curved-portfolio-still",this.still.alt="内凹作品墙静态预览",this.still.hidden=!0,this.page.append(this.still);for(const a of e.querySelectorAll(".slide-preview-content.slide--portfolio-wall")){const o=this.still.cloneNode();a.append(o),this.previews.push(o)}const r={signal:this.events.signal};s&&(this.createControls(),this.launcher.addEventListener("click",()=>this.showPanel(!0),r),this.panel.querySelector("[data-wall-close]").addEventListener("click",()=>this.showPanel(!1),r),this.panel.querySelector("[data-wall-reset]").addEventListener("click",()=>{this.settings={...ia},this.changed()},r),this.panel.addEventListener("input",a=>{const o=a.target,l=o.dataset.wallRange??o.dataset.wallNumber;if(!l||!Number.isFinite(o.valueAsNumber))return;const d=l,[c,h]=En[d];o.type==="number"&&(o.valueAsNumber<c||o.valueAsNumber>h)||(this.settings=Mn({...this.settings,[l]:o.valueAsNumber}),this.changed())},r),this.panel.addEventListener("focusout",a=>{const o=a.target;o.dataset.wallNumber&&(Number.isFinite(o.valueAsNumber)?(this.settings=Mn({...this.settings,[o.dataset.wallNumber]:o.valueAsNumber}),this.changed()):this.syncControls())},r),window.addEventListener("keydown",a=>{!this.enabled||this.slideId!==ms||a.defaultPrevented||Es(a)||a.repeat||a.ctrlKey||a.metaKey||a.altKey||document.querySelector("dialog[open]")||(a.key.toLowerCase()==="h"||a.key==="Escape"&&!this.panel.hidden)&&(a.preventDefault(),a.stopImmediatePropagation(),this.showPanel(a.key==="Escape"?!1:this.panel.hidden))},{...r,capture:!0})),window.addEventListener("storage",a=>{a.key!==lr||this.dirty||(this.settings=this.load(),this.renderer?.setSettings(this.settings),this.syncControls(),this.queuePreview())},r),document.addEventListener("visibilitychange",()=>{document.hidden&&this.save()},r),this.reduced.addEventListener("change",()=>this.sync(),r),this.syncControls()}root;editable;page;original;layer=document.createElement("div");canvas=document.createElement("canvas");errors=document.createElement("ul");notice=document.createElement("p");still=document.createElement("img");panel=document.createElement("aside");launcher=document.createElement("button");events=new AbortController;reduced=matchMedia("(prefers-reduced-motion: reduce)");fallback;renderer;rendererLive=!1;settings=this.load();slideId="";enabled=!1;failed=!1;destroyed=!1;saveTimer=0;previewTimer=0;dirty=!1;preview="";previews=[];update(e,t){e===this.enabled&&t===this.slideId||(this.save(),this.enabled=e,this.slideId=t,this.sync())}destroy(){this.destroyed||(this.save(),this.destroyed=!0,this.events.abort(),clearTimeout(this.previewTimer),this.renderer?.destroy(),this.renderer=void 0,this.fallback.destroy(),this.layer.remove(),this.still.remove(),this.panel.remove(),this.launcher.remove(),this.previews.forEach(e=>e.remove()),this.original.hidden=!1,this.original.inert=!1)}sync(){if(this.destroyed)return;const e=this.slideId===ms,t=e&&this.enabled,i=this.failed||this.reduced.matches;if(this.fallback.update(t&&i,this.slideId),this.launcher.hidden=!this.editable||!t,t||this.showPanel(!1,!1),(!e||i||this.rendererLive!==t)&&this.renderer&&(this.renderer.destroy(),this.renderer=void 0,clearTimeout(this.previewTimer)),this.layer.hidden=!e||i,this.original.hidden=!i&&(t||!!this.preview),this.original.inert=this.original.hidden,this.still.hidden=!e||t||i||!this.preview,this.canvas.hidden=!t,e&&!i&&!this.renderer&&(t||!this.preview)){const s=this.canvas.cloneNode();this.canvas.replaceWith(s),this.canvas=s,this.canvas.hidden=!1;try{const r=new Um(this.canvas,this.settings,this.errors,a=>{this.notice.textContent=a},{staticOnly:!t});this.renderer=r,this.rendererLive=t,r.ready.then(()=>{this.renderer!==r||this.destroyed||(this.refreshPreview(),this.enabled||(r.destroy(),this.renderer=void 0,this.canvas.hidden=!0,this.still.hidden=!1,this.original.hidden=!0,this.original.inert=!0))})}catch{this.failed=!0,this.notice.textContent="此浏览器无法绘制内凹效果，已恢复原作品墙。",this.original.hidden=!1,this.original.inert=!1,this.layer.hidden=!0,this.fallback.update(t,this.slideId)}}this.reduced.matches?this.status("已按“减少动态效果”使用静态平面作品墙，可横向滚动查看。"):this.failed&&this.status("当前浏览器无法绘制内凹效果，已恢复原作品墙。")}refreshPreview(){if(!this.renderer||this.destroyed)return;const e=this.renderer.captureStill();if(e){this.preview=e,this.still.src=e;for(const t of this.previews){t.src=e,t.hidden=!1;const i=t.parentElement.querySelector(".portfolio-wall");i.hidden=!0}}}queuePreview(){clearTimeout(this.previewTimer),this.previewTimer=window.setTimeout(()=>this.refreshPreview(),250)}changed(){this.renderer?.setSettings(this.settings),this.syncControls(),this.queuePreview(),this.dirty=!0,this.status("正在保存参数…"),clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>this.save(),200)}save(){if(clearTimeout(this.saveTimer),!!this.dirty)try{localStorage.setItem(lr,JSON.stringify({version:1,settings:this.settings})),this.dirty=!1,this.status("已自动保存到此浏览器")}catch{this.status("参数已生效，但未能保存；请保持本页打开。")}}load(){try{const e=JSON.parse(localStorage.getItem(lr)??"null");if(e?.version===1)return Mn(e.settings)}catch{}return{...ia}}status(e){const t=this.panel.querySelector("[data-wall-status]");t&&(t.textContent=e)}showPanel(e,t=!0){if(!this.editable)return;const i=e&&this.enabled&&this.slideId===ms;this.panel.hidden=!i,this.launcher.setAttribute("aria-expanded",String(i)),t?(i?this.panel.querySelector("[data-wall-close]"):this.launcher).focus({preventScroll:!0}):this.panel.contains(document.activeElement)&&document.activeElement instanceof HTMLElement&&document.activeElement.blur()}syncControls(){for(const e of Object.keys(En))this.panel.querySelectorAll(`[data-wall-range="${e}"], [data-wall-number="${e}"]`).forEach(t=>{t.value=String(this.settings[e])})}createControls(){this.launcher.type="button",this.launcher.id="wall-debug-toggle",this.launcher.className="portfolio-debug-launcher",this.launcher.innerHTML="作品墙调试 <kbd>H</kbd>",this.launcher.hidden=!0,this.launcher.setAttribute("aria-controls","wall-debug-panel"),this.launcher.setAttribute("aria-expanded","false"),this.panel.id="wall-debug-panel",this.panel.className="controls portfolio-controls",this.panel.hidden=!0,this.panel.setAttribute("aria-label","作品墙调试"),this.panel.innerHTML=`<header class="controls__header"><div><p class="controls__eyebrow">PORTFOLIO WALL</p><h1>作品墙调试</h1></div>
      <button data-wall-close type="button" class="icon-button" aria-label="关闭作品墙调试">×</button></header>
      <div class="controls__scroll"><p class="portfolio-controls-help">参数实时生效，内凹强度为0时恢复平面。</p>
      ${[["speed","流动速度","px/秒"],["size","整体大小","%"],["concavity","内凹强度","%"]].map(([e,t,i])=>{const[s,r]=En[e];return`<div class="number-control portfolio-number"><label for="wall-${e}-range">${t}</label>
          <div class="number-value"><input id="wall-${e}-number" type="number" min="${s}" max="${r}" step="1" data-wall-number="${e}" aria-label="${t}数值"><span>${i}</span></div>
          <input id="wall-${e}-range" type="range" min="${s}" max="${r}" step="1" data-wall-range="${e}" aria-label="${t}滑杆"></div>`}).join("")}<p class="portfolio-controls-help">速度为0时只停止流动，视频继续播放。参数与逐字稿、封面动画分开保存。</p></div>
      <footer class="controls__footer"><span data-wall-status role="status">参数自动保存</span><button type="button" data-wall-reset>恢复默认值</button></footer>`,this.root.append(this.launcher,this.panel)}}class Fm{page;expand;text;events=new AbortController;enabled=!1;constructor(e,t){this.page=e.querySelector(".slide--figma-2017-121463"),this.expand=this.page.querySelector(".video-expand"),this.text=this.page.querySelector(".lyrics-principles"),this.expand.addEventListener("click",()=>{this.enabled&&this.page.dataset.step==="0"&&t()},{signal:this.events.signal}),this.expand.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&i.stopPropagation()},{signal:this.events.signal})}update(e,t,i){const s=t==="figma-2017-121463";this.enabled=e&&s;const r=this.enabled&&i===0;!r&&document.activeElement===this.expand&&this.expand.blur(),this.expand.disabled=!r,this.expand.tabIndex=r?0:-1,this.expand.setAttribute("aria-hidden",String(!r)),this.text.setAttribute("aria-hidden",String(!s||i!==2)),this.page.classList.toggle("lyrics-static",!e)}destroy(){this.events.abort()}}const kn="presentation-slide-change",xl="presentation-position-change";class _l{constructor(e,t={}){this.root=e,this.options=t,e.className="presentation-app",e.innerHTML=`<div class="deck-viewport"><div class="deck-stage">${Em()}</div></div>
      ${t.audience?"":`<nav class="deck-toolbar" aria-label="演示控制">
        <button id="previous-slide" type="button" aria-label="上一页" title="上一页 · ← / PageUp">上一页</button>
        <output id="slide-progress" role="status" aria-live="polite"></output>
        <button id="next-slide" type="button" aria-label="下一页" title="下一页 · → / 空格 / PageDown">下一页</button>
        <span class="toolbar-separator" aria-hidden="true"></span>
        <button id="deck-fullscreen" type="button" aria-label="进入全屏" title="全屏 · F">全屏</button>
        ${t.shared?"":`<button id="edit-notes" type="button" aria-controls="notes-editor" aria-expanded="false" title="编辑逐字稿 · B">编辑逐字稿 <kbd>B</kbd></button>
        <button id="start-presenting" type="button" title="演示模式 · Q">演示模式 <kbd>Q</kbd></button>
        <button id="presentation-settings" type="button" title="修改投屏方式">演示设置</button>
        <a href="${In()}?view=shader" title="打开独立动画调试页">动画调试</a>`}
      </nav>`}<span id="deck-notice" class="deck-notice" role="status"></span>`,this.stage=e.querySelector(".deck-stage"),this.viewport=e.querySelector(".deck-viewport"),this.pages=[...this.stage.querySelectorAll(":scope > .slide")],this.toolbar=e.querySelector(".deck-toolbar"),this.previous=e.querySelector("#previous-slide"),this.next=e.querySelector("#next-slide"),this.fullscreen=e.querySelector("#deck-fullscreen"),this.progress=e.querySelector("#slide-progress"),this.canvas=document.createElement("canvas"),this.canvas.className="cover-canvas",this.canvas.width=Ft,this.canvas.height=Ht,this.stage.querySelector(".cover-animation-layer").append(this.canvas),this.media=new Tm(this.stage),t.audience||(this.sidebar=new Am(e,s=>this.goTo(s,0),t.shared?!1:void 0)),this.contentsGlow=new Rm(this.stage),this.portfolioWall=new Nm(e,this.stage,()=>this.contentsGlow.refreshMovingCards(),!t.audience&&!t.shared),this.lyricsCase=new Fm(this.stage,()=>this.navigate("next"));const i={signal:this.events.signal};this.previous?.addEventListener("click",()=>this.navigate("previous"),i),this.next?.addEventListener("click",()=>this.navigate("next"),i),this.fullscreen?.addEventListener("click",()=>{this.toggleFullscreen()},i),this.options.audience||window.addEventListener("hashchange",()=>this.applyHash(),i),window.addEventListener("keydown",this.onKeyDown,i),document.addEventListener("fullscreenchange",()=>this.syncFullscreen(),i),this.resize=new ResizeObserver(this.fit),this.resize.observe(this.viewport),this.fit(),this.options.audience?this.show(0,0):this.applyHash()}root;options;canvas;stage;viewport;pages;toolbar;previous;next;fullscreen;progress;events=new AbortController;resize;currentIndex=0;currentStep=0;media;sidebar;contentsGlow;portfolioWall;lyricsCase;interactive=!0;getCurrentIndex(){return this.currentIndex}getPosition(){return{index:this.currentIndex,step:this.currentStep}}canNavigate(e){const t=Mo(this.getPosition(),e);return t.index!==this.currentIndex||t.step!==this.currentStep}navigate(e){if(this.options.onNavigate)this.options.onNavigate(e);else{const t=Mo(this.getPosition(),e);this.goTo(t.index,t.step)}}setInteraction(e){this.interactive=e,this.media.update(this.getPosition(),e),this.contentsGlow.setEnabled(e,Xe[this.currentIndex].id,this.currentStep),this.lyricsCase.update(e,Xe[this.currentIndex].id,this.currentStep),this.portfolioWall.update(e,Xe[this.currentIndex].id),this.sidebar?.setEnabled(e),this.toolbar&&(this.toolbar.hidden=!e,this.toolbar.inert=!e)}mountPreview(e){e?e.append(this.viewport):this.root.prepend(this.viewport),this.fit()}goTo(e,t=0){if(!Number.isFinite(e))return;const i=gl(Math.trunc(e),t);if(i.index===this.currentIndex&&i.step===this.currentStep)return;const s=To(i);this.options.audience?history.replaceState(null,"",`${location.pathname}${location.search}${s}`):location.hash=s,this.show(i.index,i.step)}destroy(){this.events.abort(),this.resize.disconnect(),this.media.destroy(),this.portfolioWall.destroy(),this.lyricsCase.destroy(),this.contentsGlow.destroy(),this.sidebar?.destroy(),this.toolbar?.remove()}fit=()=>{this.contentsGlow.clear();const e=Math.min(this.viewport.clientWidth/Ft,this.viewport.clientHeight/Ht);this.stage.style.transform=`translate(-50%, -50%) scale(${e})`,this.root.style.setProperty("--deck-scale",String(e))};applyHash(){const e=Mm(location.hash),t=To(e);location.hash!==t&&history.replaceState(null,"",`${location.pathname}${location.search}${t}`),this.show(e.index,e.step)}show(e,t){const i=this.currentIndex!==e,s=i||this.currentStep!==t,r=document.activeElement?.closest(".slide");r&&this.pages[e]!==r&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),this.currentIndex=e,this.currentStep=t,this.pages[e].dataset.step=String(t),this.pages.forEach((a,o)=>{a.hidden=o!==e,a.inert=o!==e,a.setAttribute("aria-hidden",String(o!==e))}),this.previous&&(this.previous.disabled=!this.canNavigate("previous")),this.next&&(this.next.disabled=!this.canNavigate("next")),this.progress&&(this.progress.textContent=vl(this.getPosition())),this.progress?.setAttribute("aria-label",`第 ${e+1} 张，共 ${Xe.length} 张：${Xe[e].title}，第 ${t+1} 步，共 ${wi(e)} 步`),this.media.update(this.getPosition(),this.interactive),this.contentsGlow.setEnabled(this.interactive,Xe[e].id,t),this.lyricsCase.update(this.interactive,Xe[e].id,t),this.portfolioWall.update(this.interactive,Xe[e].id),this.sidebar?.update(this.getPosition()),document.title=this.options.audience?"晋升答辩 · 观众窗口（仅共享此窗口）":`${this.root.dataset.presentationMode==="presenting"?"演讲者 · ":""}${Xe[e].title} · 晋升答辩`,i&&this.root.dispatchEvent(new CustomEvent(kn,{detail:{index:e}})),s&&this.root.dispatchEvent(new CustomEvent(xl,{detail:this.getPosition()}))}onKeyDown=e=>{const t=e.target instanceof HTMLElement?e.target:null;if(!this.interactive||e.defaultPrevented||e.repeat||e.ctrlKey||e.metaKey||e.altKey||Es(e)||t?.closest(".controls, dialog, .slide-sidebar"))return;const i=ml(e);i?(e.preventDefault(),this.navigate(i)):!this.options.audience&&e.key.toLowerCase()==="f"&&(e.preventDefault(),this.toggleFullscreen())};syncFullscreen(){const e=document.fullscreenElement===this.root;this.fullscreen&&(this.fullscreen.textContent=e?"退出全屏":"全屏"),this.fullscreen?.setAttribute("aria-label",e?"退出全屏":"进入全屏"),this.fullscreen?.setAttribute("aria-pressed",String(e)),this.fit()}async toggleFullscreen(){const e=this.root.querySelector("#deck-notice");try{if(document.fullscreenElement)await document.exitFullscreen();else if(this.root.requestFullscreen)await this.root.requestFullscreen();else throw new Error("Fullscreen unavailable");e.textContent=""}catch{e.textContent="此浏览器暂不支持全屏，仍可在窗口内演示。"}}}async function na(){const n=window;if(!n.getScreenDetails)throw new Error("此浏览器不支持自动选屏，请使用 Chrome / Edge，或选择窗口共享。");try{return await n.getScreenDetails()}catch{throw new Error("未获得窗口管理权限，请在浏览器中授权后重试，或选择窗口共享。")}}const yl="promotion-presentation-v1",bl="presentation-mode-change";function wl(n,e,t){return!!e&&n.source===e&&n.origin===location.origin&&!!n.data&&typeof n.data=="object"&&n.data.channel===yl&&n.data.session===t}function _i(n,e,t){n&&!n.closed&&n.postMessage({...t,channel:yl,session:e},location.origin)}const Om=n=>["previous","next","first","last"].includes(n);class km{constructor(e){this.root=e,this.deck=new _l(e,{audience:!0,onNavigate:i=>{this.started&&_i(this.owner,this.session,{type:"navigate",command:i})}}),e.classList.add("audience-app","audience-waiting"),this.deck.setInteraction(!1),this.overlay=document.createElement("section"),this.overlay.className="audience-overlay",this.overlay.innerHTML=`<h1>晋升答辩 · 观众窗口</h1><p id="audience-status" role="status">正在连接演讲者窗口…</p>
      <button id="audience-fullscreen" class="primary-button" type="button" hidden>开始全屏</button><button id="audience-close" type="button">关闭窗口</button>`,e.append(this.overlay),this.fonts=fl(e);const t={signal:this.events.signal};if(this.overlay.querySelector("#audience-fullscreen").addEventListener("click",()=>{this.requestFullscreen()},t),this.overlay.querySelector("#audience-close").addEventListener("click",()=>this.end(),t),window.addEventListener("message",this.onMessage,t),e.addEventListener(kn,()=>this.syncAnimation(),t),window.addEventListener("keydown",i=>{i.key==="Escape"&&!i.isComposing&&(i.preventDefault(),this.end())},t),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||window.setTimeout(()=>{this.leaving||this.end()},80)},t),window.addEventListener("pagehide",()=>{this.leaving=!0,this.destroy()},t),!this.owner||!/^[a-f\d-]{36}$/i.test(this.session)){this.status("请从演示稿中的“演示模式”按钮打开此窗口。");return}_i(this.owner,this.session,{type:"hello"}),this.heartbeat=window.setInterval(()=>{if(this.owner?.closed){this.end();return}performance.now()-this.lastOwnerReply>15e3&&(this.started=!1,this.deck.setInteraction(!1),this.syncAnimation(),this.root.classList.add("audience-waiting"),this.overlay.hidden=!1,this.status("与演讲者窗口的连接已中断。请返回演讲者窗口重新开始。")),_i(this.owner,this.session,{type:this.initialized?"ping":"hello"})},1e3)}root;deck;cover;session=new URLSearchParams(location.search).get("session")??"";owner=window.opener;overlay;fonts;events=new AbortController;state;revision=-1;initialized=!1;initializing=!1;started=!1;leaving=!1;heartbeat=0;lastOwnerReply=performance.now();getShader(){return this.cover}destroy(){this.leaving=!0,window.clearInterval(this.heartbeat),this.events.abort(),this.cover?.destroy(),this.deck.destroy()}status(e){this.overlay.querySelector("#audience-status").textContent=e}onMessage=e=>{if(!wl(e,this.owner,this.session))return;if(e.data.type==="end"){this.end(!1);return}if(e.data.type!=="state")return;const t=e.data.state,i=t&&{...t,step:t.step??0};!i||!Number.isSafeInteger(i.index)||i.index<0||i.index>=Xe.length||!Number.isSafeInteger(i.step)||i.step<0||i.step>=wi(i.index)||!Number.isSafeInteger(i.revision)||i.revision<=this.revision||i.projection!=="extended"&&i.projection!=="window"||(this.revision=i.revision,this.state=i,this.lastOwnerReply=performance.now(),this.deck.goTo(i.index,i.step),this.initialized?!this.started&&i.projection==="window"&&this.begin():this.initializing||this.initialize())};async initialize(){if(this.initializing=!0,await this.fonts,!(this.leaving||!this.state)){try{this.cover=new ul(this.deck.canvas,{...oi(this.state.settings),outputMode:"transparent"}),window.coverShader=this.cover}catch{this.deck.canvas.hidden=!0}this.initialized=!0,this.syncAnimation(),this.state.projection==="extended"?await this.requestFullscreen():this.begin()}}async requestFullscreen(){const e=this.overlay.querySelector("#audience-fullscreen");e.disabled=!0;try{if(!this.state||this.state.projection!=="extended")return;const t=await na();if(this.leaving)return;const i=this.state.target,s=t.screens.find(r=>i&&r.left===i.left&&r.top===i.top&&r.width===i.width&&r.height===i.height);if(!s)throw new Error("目标显示器已不可用，请返回演讲者窗口重新选择。");if(await this.root.requestFullscreen({screen:s}),this.leaving)return;this.begin()}catch(t){e.hidden=!1,this.status("请确认此窗口在观众屏幕上，再点击“开始全屏”。如仍无法全屏，请取消后选择窗口共享。"),_i(this.owner,this.session,{type:"waiting",reason:`观众窗口需要操作：请在目标屏幕点击“开始全屏”。${t.message.includes("目标")?"目标显示器可能已断开。":""}`})}finally{e.disabled=!1}}begin(){this.leaving||(this.started=!0,this.overlay.hidden=!0,this.root.classList.remove("audience-waiting"),this.deck.setInteraction(!0),this.syncAnimation(),_i(this.owner,this.session,{type:"started"}))}syncAnimation(){this.cover?.setActive(this.started&&this.deck.getCurrentIndex()===0)}end(e=!0){e&&_i(this.owner,this.session,{type:"end"}),this.destroy(),this.root.classList.add("audience-waiting"),this.overlay.hidden=!1,this.status("演示已结束，可以关闭此窗口。"),window.close()}}class Bm{constructor(e,t){this.change=t,e.innerHTML=`
      <p class="help">点击色带添加 · 拖动色标移动</p>
      <div class="gradient-rail" aria-label="渐变色带"><div class="gradient-track"></div></div>
      <div class="gradient-fields">
        <label class="gradient-color-label">颜色
          <input id="stop-color" type="color" aria-label="所选色标颜色" />
        </label>
        <label>HEX<input id="stop-hex" type="text" maxlength="7" spellcheck="false" aria-label="所选色标 HEX" /></label>
        <label>位置 %<input id="stop-position" type="number" min="0" max="100" step="0.1" aria-label="所选色标位置百分比" /></label>
      </div>
      <div class="gradient-actions">
        <span id="stop-count" class="help"></span>
        <button id="add-stop" type="button" class="subtle">添加色标</button>
        <button id="delete-stop" type="button" class="subtle">删除</button>
      </div>
      <p class="help help--small">色标支持 ← → 微调 · Delete 删除 · 至少保留 2 个</p>
    `;const i=a=>e.querySelector(a);this.rail=i(".gradient-rail"),this.color=i("#stop-color"),this.hex=i("#stop-hex"),this.position=i("#stop-position"),this.remove=i("#delete-stop"),this.count=i("#stop-count");const s={signal:this.events.signal};this.rail.addEventListener("pointerdown",a=>{if(a.button!==0||!a.isPrimary)return;const o=a.target.closest("[data-stop-id]");o?this.selectedId=o.dataset.stopId:this.add(this.pointerPosition(a)),this.dragId=this.selectedId,this.render(this.stops),this.buttons.get(this.selectedId)?.focus({preventScroll:!0}),this.rail.setPointerCapture(a.pointerId),a.preventDefault()},s),this.rail.addEventListener("pointermove",a=>{this.dragId&&this.edit({position:this.pointerPosition(a)})},s);const r=()=>{this.dragId=null};this.rail.addEventListener("pointerup",r,s),this.rail.addEventListener("pointercancel",r,s),this.rail.addEventListener("lostpointercapture",r,s),this.rail.addEventListener("focusin",a=>{const o=a.target.dataset.stopId;o&&o!==this.selectedId&&(this.selectedId=o,this.render(this.stops))},s),this.rail.addEventListener("keydown",a=>{const o=this.stops.find(l=>l.id===this.selectedId);if(o)if(a.key==="ArrowLeft"||a.key==="ArrowRight"){a.preventDefault();const l=(a.shiftKey?.01:.001)*(a.key==="ArrowLeft"?-1:1);this.edit({position:Math.max(0,Math.min(1,o.position+l))})}else(a.key==="Delete"||a.key==="Backspace")&&(a.preventDefault(),this.deleteSelected())},s),this.color.addEventListener("input",()=>this.edit({color:this.color.value}),s),this.hex.addEventListener("input",()=>{this.hex.setCustomValidity(/^#[\da-f]{6}$/i.test(this.hex.value)?"":"请输入 #RRGGBB 格式的颜色"),this.hex.validity.valid&&this.edit({color:this.hex.value})},s),this.hex.addEventListener("blur",()=>{this.hex.setCustomValidity(""),this.render(this.stops)},s),this.position.addEventListener("input",()=>{Number.isFinite(this.position.valueAsNumber)&&this.edit({position:Math.max(0,Math.min(1,this.position.valueAsNumber/100))})},s),this.position.addEventListener("blur",()=>this.render(this.stops),s),this.remove.addEventListener("click",()=>this.deleteSelected(),s),i("#add-stop").addEventListener("click",()=>{const a=[0,...this.stops.map(d=>d.position),1];let o=.5,l=-1;for(let d=1;d<a.length;d++)a[d]-a[d-1]>l&&(l=a[d]-a[d-1],o=(a[d]+a[d-1])/2);this.add(o),this.buttons.get(this.selectedId)?.focus({preventScroll:!0})},s)}change;stops=[];selectedId="";dragId=null;buttons=new Map;events=new AbortController;rail;color;hex;position;remove;count;render(e){this.stops=e,e.some(s=>s.id===this.selectedId)||(this.selectedId=e[0].id);const t=new Set(e.map(s=>s.id));for(const[s,r]of this.buttons)t.has(s)||(r.remove(),this.buttons.delete(s));this.rail.querySelector(".gradient-track").style.background=sm(e),e.forEach((s,r)=>{let a=this.buttons.get(s.id);a||(a=document.createElement("button"),a.type="button",a.className="gradient-stop",a.dataset.stopId=s.id,a.setAttribute("role","slider"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","100"),this.rail.append(a),this.buttons.set(s.id,a));const o=s.id===this.selectedId;a.style.left=`${s.position*100}%`,a.style.setProperty("--stop-color",s.color),a.style.zIndex=o?"3":"1",a.classList.toggle("is-selected",o),a.setAttribute("aria-label",`色标 ${r+1}，${s.color}`),a.setAttribute("aria-valuenow",String(Number((s.position*100).toFixed(1)))),a.setAttribute("aria-valuetext",`${(s.position*100).toFixed(1)}%，${s.color}`),a.title=`${s.color} · ${(s.position*100).toFixed(1)}%`});const i=e.find(s=>s.id===this.selectedId);this.color.value=i.color,document.activeElement!==this.hex&&(this.hex.value=i.color),document.activeElement!==this.position&&(this.position.value=String(Number((i.position*100).toFixed(1)))),this.remove.disabled=e.length<=2,this.count.textContent=`${e.length} 个色标`}destroy(){this.events.abort()}pointerPosition(e){const t=this.rail.getBoundingClientRect();return Math.max(0,Math.min(1,(e.clientX-t.left)/t.width))}add(e){const t={id:crypto.randomUUID(),position:e,color:im(this.stops,e)};this.selectedId=t.id,this.change([...this.stops,t])}edit(e){this.change(this.stops.map(t=>t.id===this.selectedId?{...t,...e}:t))}deleteSelected(){if(this.stops.length<=2)return;const e=this.stops.findIndex(i=>i.id===this.selectedId),t=this.stops.filter(i=>i.id!==this.selectedId);this.selectedId=t[Math.min(e,t.length-1)].id,this.change(t),this.buttons.get(this.selectedId)?.focus({preventScroll:!0})}}function $t(n,e,t,i,s,r=1){return`<div class="number-control" data-control="${n}">
    <label for="${n}-range">${e}</label>
    <div class="number-value"><input id="${n}-number" type="number" data-number="${n}" min="${t}" max="${i}" step="${r}" aria-label="${e}数值" /><span>${s}</span></div>
    <input id="${n}-range" type="range" data-range="${n}" min="${t}" max="${i}" step="${r}" aria-label="${e}滑块" />
  </div>`}function dr(n,e,t,i){return`<details class="control-group" open>
    <summary><span>${e}<small>${t}</small></span></summary>
    <div class="group-content">
      <label class="effect-toggle"><span>启用效果</span><input type="checkbox" role="switch" data-toggle="${n}" aria-label="启用${e}" /></label>
      <fieldset data-effect="${n}">${i}</fieldset>
    </div>
  </details>`}class zm{constructor(e,t){this.cover=t,this.launcher=document.createElement("button"),this.launcher.type="button",this.launcher.id="show-controls",this.launcher.className="debug-launcher",this.launcher.innerHTML="调试 <kbd>H</kbd>",this.launcher.setAttribute("aria-controls","debug-panel"),this.launcher.setAttribute("aria-expanded","false"),this.panel=document.createElement("aside"),this.panel.id="debug-panel",this.panel.className="controls",this.panel.hidden=!0,this.panel.setAttribute("aria-label","Shader 调试面板"),this.panel.innerHTML=`
      <header class="controls__header">
        <div><p class="controls__eyebrow">SHADER CONTROL</p><h1>背景动画调试</h1></div>
        <button id="hide-controls" type="button" class="icon-button" aria-label="隐藏调试面板">×</button>
      </header>
      <div class="controls__scroll">
        <div class="canvas-info"><span class="status-dot"></span>1920 × 1080 <span>黑色画布 · 实时预览</span></div>
        <details class="control-group" open><summary><span>五角星<small>顺时针 50° / 秒</small></span></summary><div class="group-content">
          ${$t("outerRadius","外半径",1,1e3,"px")}
          ${$t("innerRadius","内半径",0,110,"px")}
        </div></details>
        <details class="control-group" open><summary><span>渐变色带<small>随星形旋转</small></span></summary><div id="gradient-editor" class="group-content"></div></details>
        ${dr("blur","快速方框模糊","01",$t("blurRadius","模糊度",0,300,"px"))}
        ${dr("wave0","波形一 · 非圆形","02",$t("wave0Height","波形一高度",0,500,"px")+$t("wave0Width","波形一宽度",1,1920,"px")+$t("wave0Direction","波形一方向",-360,360,"°"))}
        ${dr("wave1","波形二 · 正弦","03",$t("wave1Height","波形二高度",0,500,"px")+$t("wave1Width","波形二宽度",1,1920,"px")+$t("wave1Direction","波形二方向",-360,360,"°"))}
        <details class="control-group" open><summary><span>波形速度<small>两层联动</small></span></summary><div class="group-content">
          ${$t("waveSpeed","传播速度",-1,1,"周/秒",.01)}
          <p class="help">负值反向，0 停止传播；星形继续旋转。</p>
        </div></details>
      </div>
      <footer class="controls__footer"><span id="save-status" role="status">参数自动保存</span><button id="reset" type="button">恢复默认值</button></footer>
    `,e.classList.contains("presentation-app")&&(this.panel.querySelector(".canvas-info > span:last-child").textContent="透明动画 · 封面预览"),e.append(this.launcher,this.panel),this.status=this.panel.querySelector("#save-status"),this.editor=new Bm(this.panel.querySelector("#gradient-editor"),s=>t.setGradientStops(s));const i={signal:this.events.signal};this.launcher.addEventListener("click",()=>this.show(!0),i),this.panel.querySelector("#hide-controls").addEventListener("click",()=>this.show(!1),i),this.panel.querySelector("#reset").addEventListener("click",()=>t.reset(),i),window.addEventListener("keydown",s=>{!this.enabled||s.defaultPrevented||s.isComposing||s.keyCode===229||document.querySelector("dialog[open]")||(s.target instanceof HTMLElement?s.target:null)?.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')||s.key.toLowerCase()!=="h"||s.repeat||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),this.show(this.panel.hidden))},i),this.panel.addEventListener("input",s=>{const r=s.target,a=r.dataset.number??r.dataset.range;a&&Number.isFinite(r.valueAsNumber)&&this.updateNumber(a,r.valueAsNumber);const o=r.dataset.toggle;o==="blur"&&t.setBlurSettings({enabled:r.checked}),(o==="wave0"||o==="wave1")&&t.setWaveSettings(o==="wave0"?0:1,{enabled:r.checked})},i),this.panel.addEventListener("focusout",()=>{queueMicrotask(()=>this.sync(t.getSettings()))},i),t.canvas.addEventListener(va,()=>this.sync(t.getSettings()),i),this.sync(t.getSettings())}cover;panel;launcher;editor;events=new AbortController;status;enabled=!0;setSaveStatus(e){this.status.textContent=e?"已自动保存到此浏览器":"本地保存不可用 · 仍可调试"}setEnabled(e){if(this.enabled=e,e)this.launcher.hidden=!this.panel.hidden;else{const t=this.panel.contains(document.activeElement)||document.activeElement===this.launcher;this.panel.hidden=!0,this.launcher.hidden=!0,this.launcher.setAttribute("aria-expanded","false"),t&&document.activeElement instanceof HTMLElement&&document.activeElement.blur()}}destroy(){this.events.abort(),this.editor.destroy(),this.panel.remove(),this.launcher.remove()}show(e){this.enabled&&(this.panel.hidden=!e,this.launcher.hidden=e,this.launcher.setAttribute("aria-expanded",String(e)),e?this.panel.querySelector("#hide-controls").focus({preventScroll:!0}):this.launcher.focus({preventScroll:!0}))}updateNumber(e,t){if(e==="outerRadius"||e==="innerRadius")this.cover.setStarRadii({[e]:t});else if(e==="blurRadius")this.cover.setBlurSettings({radius:t});else if(e==="waveSpeed")this.cover.setWaveSpeed(t);else{const i=/^wave([01])(Height|Width|Direction)$/.exec(e);i&&this.cover.setWaveSettings(Number(i[1]),{[i[2].toLowerCase()]:t})}}sync(e){const t={...e.star,blurRadius:e.blur.radius,waveSpeed:e.waveSpeed};e.waves.forEach((i,s)=>{t[`wave${s}Height`]=i.height,t[`wave${s}Width`]=i.width,t[`wave${s}Direction`]=i.direction}),this.panel.querySelectorAll("[data-number], [data-range]").forEach(i=>{const s=i.dataset.number??i.dataset.range;s==="innerRadius"&&(i.max=String(e.star.outerRadius)),(!i.dataset.number||document.activeElement!==i)&&(i.value=String(t[s]))});for(const[i,s]of[["blur",e.blur.enabled],["wave0",e.waves[0].enabled],["wave1",e.waves[1].enabled]])this.panel.querySelector(`[data-toggle="${i}"]`).checked=s,this.panel.querySelector(`[data-effect="${i}"]`).disabled=!s;this.editor.render(e.gradientStops)}}const Sl="promotion-cover:settings:v1";function Hm(n){if(!n||typeof n!="object")return!1;const e=n,t=i=>typeof i=="number"&&Number.isFinite(i);return t(e.waveSpeed)&&!!e.star&&t(e.star.innerRadius)&&t(e.star.outerRadius)&&!!e.blur&&typeof e.blur.enabled=="boolean"&&t(e.blur.radius)&&Array.isArray(e.waves)&&e.waves.length===2&&e.waves.every(i=>!!i&&typeof i.enabled=="boolean"&&t(i.height)&&t(i.width)&&t(i.direction))&&Array.isArray(e.gradientStops)&&e.gradientStops.length>=2&&e.gradientStops.every(i=>!!i&&typeof i.color=="string"&&t(i.position))}function Co(){try{const n=localStorage.getItem(Sl);if(n){const e=JSON.parse(n);if(e?.version===1&&Hm(e.settings))return oi(e.settings)}}catch{}return oi()}function Vm(n){try{return localStorage.setItem(Sl,JSON.stringify({version:1,settings:n})),!0}catch{return!1}}const ds="promotion-deck:notes:v1",sa=new Set([...Xe.map(n=>n.id),"figma-1927-455","figma-1942-981","figma-1938-805"]),Gm=()=>Object.fromEntries(Xe.map(n=>[n.id,""]));function Tn(n){const e=JSON.parse(n);if(!e||e.version!==1||e.kind!=="promotion-speaker-notes"||!e.notes||typeof e.notes!="object"||Array.isArray(e.notes))throw new Error("不兼容的逐字稿文件。");const t={};let i=0;for(const[s,r]of Object.entries(e.notes)){if(typeof r!="string")throw new Error("逐字稿内容必须为纯文本。");sa.has(s)?t[s]=r:i++}return{notes:t,skipped:i}}class Wm extends EventTarget{notes=Gm();timer=0;dirty=!1;token="";revision="";baseline;ownDraft;generation=0;inFlight;reporting=Promise.resolve();events;hadCache=!1;rawCache;destroyed=!1;connected=!1;client="";metaKey=`${ds}:project`;projectEnabled=!1;ready;detail="";recovery=[];status="saved";constructor(){super();try{const e=localStorage.getItem(ds);if(e)try{Object.assign(this.notes,Tn(e).notes),this.hadCache=!0}catch{this.status="damaged",this.rawCache=e}}catch{this.status="failed"}if(this.projectEnabled){try{this.client=sessionStorage.getItem(`${this.metaKey}:client`)??crypto.randomUUID(),sessionStorage.setItem(`${this.metaKey}:client`,this.client)}catch{this.client=crypto.randomUUID()}this.status="connecting",this.ready=this.connect()}else this.ready=Promise.resolve(),this.status="local"}get(e){return this.notes[e]??""}set(e,t){if(!sa.has(e))throw new Error("Unknown slide.");this.notes[e]!==t&&(this.notes[e]=t,this.generation++,this.dirty=!0,this.status!=="conflict"&&(this.status="pending"),this.cache(),this.projectEnabled&&this.connected&&this.report(this.status==="conflict"?"conflict":"pending"),window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>this.flush(),500),this.dispatchEvent(new Event("change")))}flush(){return window.clearTimeout(this.timer),this.cache(),this.projectEnabled?(this.flushProject(),this.status==="saved"):(this.dirty=!1,this.status="local",this.changed(),!0)}export(){return JSON.stringify({kind:"promotion-speaker-notes",version:1,notes:this.notes},null,2)}import(e){for(const[t,i]of Object.entries(e))sa.has(t)&&typeof i=="string"&&(this.notes[t]=i);this.dirty=!0,this.generation++,this.cache(),this.status!=="conflict"&&(this.status="pending"),this.connected&&this.report(this.status==="conflict"?"conflict":"pending"),this.flush()}destroy(){this.flush(),this.destroyed=!0,window.clearTimeout(this.timer),this.inFlight?.finally(()=>this.events?.close()),this.inFlight||this.events?.close()}changed(){this.dispatchEvent(new Event("change"))}document(){return{kind:"promotion-speaker-notes",version:1,notes:{...this.notes}}}same(e,t){return JSON.stringify(Object.entries(e).sort())===JSON.stringify(Object.entries(t).sort())}cache(){try{this.rawCache!==void 0&&(localStorage.setItem(`${ds}:damaged:${Date.now()}`,this.rawCache),this.rawCache=void 0),localStorage.setItem(ds,this.export())}catch{this.detail="浏览器恢复副本保存失败；项目保存状态如下。"}}markBaseline(){this.baseline={...this.notes};try{localStorage.setItem(this.metaKey,JSON.stringify({revision:this.revision,notes:this.baseline}))}catch{}}adopt(e){this.notes={...e.document.notes},this.revision=e.revision,this.dirty=!1,this.status="saved",this.detail="",this.cache(),this.markBaseline(),this.dispatchEvent(new Event("replace")),this.changed()}async request(e,t,i="POST"){const s=JSON.stringify({...t,client:this.client}),r=await fetch(`/__local/notes${e}`,{method:i,headers:{"Content-Type":"application/json","X-Notes-Token":this.token},body:s,signal:AbortSignal.timeout(8e3),keepalive:new Blob([s]).size<6e4}),a=await r.json();if(!r.ok)throw Object.assign(new Error(a.error??"项目保存失败"),{status:r.status});return a}report(e,t){const i=this.document(),s=this.reporting.catch(()=>{}).then(async()=>{if(e!=="saved")return this.request("/state",{state:e,document:i,requestId:t});for(let r=0;r<3;r++){const a=this.status==="conflict"?"conflict":this.dirty?"pending":"saved";try{return await this.request("/state",{state:a,document:this.document(),requestId:t})}catch(o){if(o.status!==409||a!=="saved"||this.dirty||r===2)throw o;const l=this.generation,d=await this.readProject();!this.dirty&&l===this.generation&&this.adopt(d)}}});return this.reporting=s,s.catch(()=>{this.status!=="conflict"&&(this.status="failed"),this.changed()}),s}async readProject(){const e=await fetch(`/__local/notes?client=${this.client}`,{cache:"no-store",signal:AbortSignal.timeout(5e3)}),t=await e.json();if(!e.ok)throw new Error(t.error??"项目存稿服务未连接");return this.token=t.token,this.ownDraft=t.ownDraft?Tn(JSON.stringify(t.ownDraft)).notes:void 0,this.recovery=(t.recovery??[]).filter(i=>i.id!==this.client),{...t.snapshot,document:{...t.snapshot.document,notes:Tn(JSON.stringify(t.snapshot.document)).notes}}}async connect(){this.events?.close(),this.connected=!1;try{const e=await this.readProject();if(this.destroyed)return;await new Promise((s,r)=>{const a=new EventSource(`/__local/notes/events?client=${this.client}&token=${this.token}`);this.events=a;const o=window.setTimeout(()=>{a.close(),r(new Error("项目连接超时"))},5e3);a.onmessage=l=>{const d=JSON.parse(l.data);d.type==="ready"?(window.clearTimeout(o),this.connected=!0,s()):d.type==="flush"?this.acknowledge(d.requestId):d.type==="revision"&&d.revision!==this.revision&&this.refresh()},a.onerror=()=>{this.connected=!1,this.destroyed||(this.status="failed",this.detail="项目连接断开，文字仍保留在此浏览器。请点击重试保存。",this.changed())}});let t=this.baseline;if(!t)try{t=JSON.parse(localStorage.getItem(this.metaKey)??"null")?.notes}catch{}const i=t&&this.same(this.notes,t)&&!this.dirty;if(this.ownDraft&&!this.same(this.ownDraft,e.document.notes)){!this.dirty&&(!this.hadCache||i||this.same(this.notes,e.document.notes))&&(this.notes={...this.ownDraft},this.cache(),this.dispatchEvent(new Event("replace"))),this.revision=e.revision,this.status="conflict",this.detail="恢复到上次未保存的稿件，两份内容均保留。请选择版本。",await this.report("conflict"),this.changed();return}!this.hadCache&&this.generation===0||i||this.same(this.notes,e.document.notes)?(this.adopt(e),await this.report("saved")):(this.revision=e.revision,this.status="conflict",this.detail="此浏览器稿件与项目稿不同。两份均已保留，请选择本次使用的版本。",await this.report("conflict"),this.changed())}catch(e){this.status="failed",this.detail=`${e.message}；当前输入未丢失。`,this.changed()}}async refresh(){try{const e=await this.readProject();if(e.revision===this.revision)return;!this.dirty&&this.status!=="conflict"?(this.adopt(e),await this.report("saved")):this.same(this.notes,e.document.notes)||(this.status="conflict",this.detail="其他标签页已更新项目稿。已保留当前输入，请选择版本。",await this.report("conflict"),this.changed())}catch(e){this.status="failed",this.detail=e.message,this.changed()}}async flushProject(){if(window.clearTimeout(this.timer),!this.connected||!this.revision||this.status==="conflict")return!1;if(this.inFlight)return this.inFlight;const e=async()=>{try{for(;this.dirty;){if(this.status==="conflict")return!1;const t=this.generation,i=this.document();await this.report("pending");const s=await this.request("",{document:i,revision:this.revision},"PUT");this.revision=s.revision,t===this.generation&&(this.dirty=!1,this.markBaseline())}return this.status="saved",await this.report("saved"),this.detail.startsWith("浏览器恢复副本")||(this.detail=""),this.changed(),!0}catch(t){return this.status=t.status===409?"conflict":"failed",this.detail=t.message,await this.report(this.status==="conflict"?"conflict":"failed").catch(()=>{}),this.changed(),!1}};return this.inFlight=e().finally(()=>{this.inFlight=void 0}),this.inFlight}async acknowledge(e){await this.ready,await this.flushProject()&&await this.refresh(),await this.report(this.status==="saved"?"saved":this.status==="conflict"?"conflict":"failed",e).catch(()=>{})}async retry(){this.connected?await this.flushProject():(this.status="connecting",this.changed(),await this.connect())}async resolveConflict(e){if(!(!this.connected&&(await this.retry(),!this.connected)))try{const t=await this.readProject();await this.request("/backup",{document:this.document()}),e==="project"?(this.adopt(t),await this.report("saved")):(this.revision=t.revision,this.dirty=!0,this.status="pending",this.changed(),await this.flushProject())}catch(t){this.status="failed",this.detail=t.message,this.changed()}}async recover(e,t){if(this.status==="saved")try{const i=await this.request("/recover",{id:e,choice:t,revision:this.revision});this.recovery=this.recovery.filter(s=>s.id!==e),this.adopt(i),await this.report("saved")}catch(i){this.status="failed",this.detail=i.message,this.changed()}}}class Xm{constructor(e,t){this.root=e,this.deck=t,this.slideId=Xe[t.getCurrentIndex()].id,this.toggle=e.querySelector("#edit-notes"),this.panel=document.createElement("section"),this.panel.id="notes-editor",this.panel.className="notes-editor",this.panel.hidden=!0,this.panel.setAttribute("aria-label","当前页逐字稿编辑"),this.panel.innerHTML=`<header class="notes-header"><div><span class="ui-eyebrow">SPEAKER NOTES</span><h2 id="notes-title"></h2></div>
      <span id="notes-save-status" role="status"></span><button id="retry-notes" type="button" hidden>重试保存</button><button id="export-notes" type="button">导出备份</button><button id="import-notes" type="button">导入备份</button>
      <input id="notes-file" type="file" accept=".json,application/json" hidden /><button id="close-notes" type="button" aria-label="关闭逐字稿编辑">关闭 <kbd>Esc</kbd></button></header>
      <div id="notes-conflict" hidden><span>浏览器稿与项目稿不同，选择前两份都保留。</span><button id="use-project-notes" type="button">使用项目稿</button><button id="use-browser-notes" type="button">使用此浏览器稿</button></div>
      <div id="notes-recovery" hidden><label>有关闭页面留下的恢复稿，处理后才能发布：<select id="recovery-choice" aria-label="选择恢复稿"></select></label><button id="restore-recovery" type="button">恢复这份稿件</button><button id="keep-project-recovery" type="button">保留项目稿</button></div>
      <textarea id="notes-text" aria-labelledby="notes-title" spellcheck="false" placeholder="写下这一页准备讲的话。本地修改将在下次部署时公开。"></textarea>
      <p id="notes-feedback" role="status">自动保存到项目 · 下次部署随网页公开 · 观众窗口不显示稿件</p>`,e.append(this.panel),this.textarea=this.panel.querySelector("#notes-text"),this.status=this.panel.querySelector("#notes-save-status");const i={signal:this.events.signal};this.toggle.addEventListener("click",()=>this.show(this.panel.hidden),i),this.panel.querySelector("#close-notes").addEventListener("click",()=>this.show(!1),i),this.textarea.addEventListener("input",()=>this.store.set(this.slideId,this.textarea.value),i),this.textarea.addEventListener("blur",()=>this.store.flush(),i),this.store.addEventListener("change",()=>this.syncStatus(),i),this.store.addEventListener("replace",()=>{this.textarea.value=this.store.get(this.slideId)},i),this.panel.querySelector("#retry-notes").addEventListener("click",()=>{this.store.retry()},i),this.panel.querySelector("#use-project-notes").addEventListener("click",()=>{this.store.resolveConflict("project")},i),this.panel.querySelector("#use-browser-notes").addEventListener("click",()=>{this.store.resolveConflict("browser")},i);for(const[r,a]of[["#restore-recovery","draft"],["#keep-project-recovery","project"]])this.panel.querySelector(r).addEventListener("click",()=>{const o=this.panel.querySelector("#recovery-choice").value;o&&window.confirm(`${a==="draft"?"使用这份恢复稿替换当前项目稿":"保留当前项目稿"}？被替换的内容会保留在本地恢复备份中。`)&&this.store.recover(o,a)},i);window.addEventListener("beforeunload",r=>{this.store.projectEnabled&&["pending","failed","conflict","connecting"].includes(this.store.status)&&(r.preventDefault(),r.returnValue="")},i),e.addEventListener(kn,()=>{this.store.flush(),this.syncPage()},i),document.addEventListener("visibilitychange",()=>{document.hidden&&this.store.flush()},i),this.panel.querySelector("#export-notes").addEventListener("click",()=>this.export(),i);const s=this.panel.querySelector("#notes-file");this.panel.querySelector("#import-notes").addEventListener("click",()=>s.click(),i),s.addEventListener("change",()=>{this.import(s)},i),this.syncPage(),this.syncStatus()}root;deck;store=new Wm;panel;textarea;toggle;status;events=new AbortController;slideId;enabled=!0;isOpen(){return!this.panel.hidden}show(e){e&&!this.enabled||(this.store.flush(),this.panel.hidden=!e,this.root.classList.toggle("notes-open",e),this.toggle.setAttribute("aria-expanded",String(e)),e?(this.syncPage(),this.textarea.focus({preventScroll:!0})):this.panel.contains(document.activeElement)&&this.toggle.focus({preventScroll:!0}))}setEnabled(e){e||this.show(!1),this.enabled=e}destroy(){this.store.destroy(),this.events.abort(),this.panel.remove(),this.root.classList.remove("notes-open")}syncPage(){const e=this.deck.getCurrentIndex();this.slideId=Xe[e].id,this.panel.querySelector("#notes-title").textContent=`第 ${e+1} 张 / ${Xe.length} 张　${Xe[e].title}`,this.textarea.value=this.store.get(this.slideId),this.textarea.scrollTop=0}syncStatus(){const e={saved:"已保存到项目 · 待发布",pending:"保存到项目中…",failed:"未保存到项目",damaged:"原保存数据不兼容 · 请导入备份",connecting:"正在连接项目…",conflict:"稿件冲突 · 发布已阻止",local:"仅保存在此浏览器"};this.status.textContent=e[this.store.status],this.status.dataset.status=this.store.status,this.panel.querySelector("#retry-notes").hidden=this.store.status!=="failed",this.panel.querySelector("#notes-conflict").hidden=this.store.status!=="conflict",this.panel.querySelector("#notes-recovery").hidden=!this.store.recovery.length;const t=this.panel.querySelector("#recovery-choice");[...t.options].map(i=>i.value).join()!==this.store.recovery.map(i=>i.id).join()&&t.replaceChildren(...this.store.recovery.map(i=>new Option(new Date(i.updatedAt).toLocaleString(),i.id))),this.panel.querySelectorAll("#notes-recovery button").forEach(i=>{i.disabled=this.store.status!=="saved"}),this.panel.querySelector("#notes-feedback").textContent=this.store.detail||(this.store.projectEnabled?"自动保存到项目 · 下次部署随网页公开 · 观众窗口不显示稿件":"此入口仅保存到浏览器；请用本机4173编辑以随部署同步。"),this.store.status==="conflict"?this.toggle.dataset.notesConflict="true":delete this.toggle.dataset.notesConflict}export(){this.store.flush();const e=URL.createObjectURL(new Blob([this.store.export()],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download=`晋升答辩-逐字稿-${new Date().toISOString().slice(0,10)}.json`,t.click(),window.setTimeout(()=>URL.revokeObjectURL(e),1e3)}async import(e){const t=e.files?.[0];if(e.value="",!t)return;const i=this.panel.querySelector("#notes-feedback");try{const s=Tn(await t.text());if(this.events.signal.aborted||!this.enabled)return;const r=Object.keys(s.notes).length;if(!r){i.textContent="文件中没有匹配的页面，未修改逐字稿。";return}if(!window.confirm(`导入将替换 ${r} 页的逐字稿${s.skipped?`，跳过 ${s.skipped} 个未知页面`:""}。建议先导出当前备份，是否继续？`))return;this.store.import(s.notes),this.syncPage(),i.textContent=`已导入 ${r} 页${s.skipped?`，已跳过 ${s.skipped} 个未知页面`:""}。`}catch{i.textContent="导入失败：文件损坏或格式不兼容。现有逐字稿未修改。"}}}const Po="promotion-deck:projection:v1";class qm{constructor(e,t,i){this.root=e,this.deck=t,this.getSettings=i,this.notes=new Xm(e,t);try{const r=localStorage.getItem(Po);(r==="extended"||r==="window")&&(this.projection=r,this.remembered=!0)}catch{}this.speaker=document.createElement("section"),this.speaker.className="speaker-view",this.speaker.hidden=!0,this.speaker.setAttribute("aria-label","演讲者界面，仅自己可见"),this.speaker.innerHTML=`<header class="speaker-header"><div><span class="ui-eyebrow">PRESENTER VIEW · 仅自己可见</span><h1>演讲者模式</h1></div><button id="end-presenting" type="button">结束演示 <kbd>Esc</kbd></button></header>
      <div class="speaker-layout"><aside class="speaker-context"><div id="speaker-preview" class="speaker-preview" aria-label="当前页静态预览"></div>
        <div class="speaker-page"><span id="speaker-progress"></span><h2 id="speaker-title"></h2></div>
        <nav class="speaker-navigation" aria-label="演讲者翻页"><button id="speaker-previous" type="button">上一页</button><button id="speaker-next" type="button">下一页</button></nav>
        <p id="speaker-guidance"></p><p class="speaker-hint">← → / 空格翻页<br />逐字稿只显示在此窗口</p></aside>
        <section class="speaker-script"><header><h2>本页逐字稿</h2><div class="script-size"><button id="notes-smaller" type="button" aria-label="缩小逐字稿字号">A−</button><output id="notes-font-size">28px</output><button id="notes-larger" type="button" aria-label="放大逐字稿字号">A＋</button></div></header>
          <div id="speaker-notes" tabindex="0" aria-label="当前页逐字稿，可滚动"></div></section></div>`,this.dialog=document.createElement("dialog"),this.dialog.className="presentation-dialog",this.dialog.setAttribute("aria-labelledby","presentation-dialog-title"),this.dialog.innerHTML=`<span class="ui-eyebrow">PRESENTATION</span><h2 id="presentation-dialog-title">选择演示方式</h2>
      <p>逐字稿留在本机。观众窗口只显示 PPT。</p>
      <fieldset class="projection-choices"><legend class="sr-only">演示方式</legend>
        <label><input type="radio" name="projection-mode" value="extended" /><span><strong>扩展屏演示</strong><small>外接屏全屏播放，本机看稿</small></span></label>
        <label><input type="radio" name="projection-mode" value="window" /><span><strong>窗口共享演示</strong><small>在投屏软件中仅共享独立观众窗口</small></span></label></fieldset>
      <div id="screen-options" hidden><button id="detect-screens" type="button">检测显示器 / 授权</button><label>观众屏幕<select id="audience-screen" aria-label="选择观众屏幕"></select></label></div>
      <p id="projection-status" role="status"></p><footer><button id="cancel-presentation" type="button">取消</button><button id="confirm-presentation" type="button" class="primary-button">开始演示</button></footer>`,e.append(this.speaker,this.dialog);const s={signal:this.events.signal};e.querySelector("#start-presenting").addEventListener("click",()=>this.startPresentation(),s),e.querySelector("#presentation-settings").addEventListener("click",()=>this.configure(),s),this.dialog.querySelector("#cancel-presentation").addEventListener("click",()=>{this.endPresentation(),this.dialog.close()},s),this.dialog.addEventListener("cancel",()=>this.endPresentation(),s),this.dialog.querySelector("#confirm-presentation").addEventListener("click",()=>this.launch(),s),this.dialog.querySelector("#detect-screens").addEventListener("click",()=>{this.detectScreens()},s),this.dialog.querySelector("#audience-screen").addEventListener("change",r=>{const a=r.target.value;this.target=a===""?void 0:this.candidates()[Number(a)],this.syncDialog()},s),this.dialog.querySelectorAll("[name=projection-mode]").forEach(r=>r.addEventListener("change",()=>{this.projection=r.value,this.setStatus(""),this.syncDialog()},s)),this.speaker.querySelector("#end-presenting").addEventListener("click",()=>this.endPresentation(),s),this.speaker.querySelector("#speaker-previous").addEventListener("click",()=>t.navigate("previous"),s),this.speaker.querySelector("#speaker-next").addEventListener("click",()=>t.navigate("next"),s),this.speaker.querySelector("#notes-smaller").addEventListener("click",()=>this.resizeText(-2),s),this.speaker.querySelector("#notes-larger").addEventListener("click",()=>this.resizeText(2),s),e.addEventListener(xl,()=>{this.syncSpeaker(),this.sendState()},s),this.notes.store.addEventListener("replace",()=>{const r=this.speaker.querySelector("#speaker-notes"),a=this.notes.store.get(Xe[this.deck.getCurrentIndex()].id);r.textContent=a||"本页尚未填写逐字稿",r.classList.toggle("is-empty",!a)},s),window.addEventListener("message",this.onMessage,s),window.addEventListener("keydown",this.onKeyDown,s),window.addEventListener("pagehide",()=>{this.notes.store.flush(),this.endPresentation()},s),this.warmScreens()}root;deck;getSettings;notes;mode="edit";projection="window";remembered=!1;audience=null;session="";revision=0;poll=0;launchTimeout=0;details;target;dialog;speaker;events=new AbortController;noteSize=28;shownNoteId="";getMode(){return this.mode}startPresentation(){this.mode!=="edit"||this.dialog.open||(!this.remembered||this.projection==="extended"&&!this.validTarget()?this.configure():this.launch())}endPresentation(){const e=this.mode!=="edit";window.clearInterval(this.poll),window.clearTimeout(this.launchTimeout);const t=this.audience;this.audience=null,_i(t,this.session,{type:"end"});try{t?.close()}catch{}this.session="",this.speaker.hidden=!0,this.root.classList.remove("is-presenting"),this.deck.mountPreview(),this.deck.setInteraction(!0),this.notes.setEnabled(!0),this.setMode("edit"),document.title=`${Xe[this.deck.getCurrentIndex()].title} · 晋升答辩`,this.dialog.open&&this.dialog.close(),e&&this.root.querySelector("#start-presenting")?.focus({preventScroll:!0}),this.syncDialog()}configure(){this.mode==="edit"&&(this.syncDialog(),this.setStatus(""),this.dialog.showModal())}destroy(){this.endPresentation(),this.events.abort(),this.details?.removeEventListener("screenschange",this.onScreensChange),this.notes.destroy(),this.dialog.remove(),this.speaker.remove()}setMode(e){this.mode!==e&&(this.mode=e,this.root.dataset.presentationMode=e,this.root.dispatchEvent(new CustomEvent(bl,{detail:{mode:e}})))}setStatus(e){this.dialog.querySelector("#projection-status").textContent=e}candidates(){return this.details?.screens.filter(e=>e!==this.details.currentScreen)??[]}validTarget(){return!!this.target&&this.candidates().includes(this.target)}useScreens(e){this.details?.removeEventListener("screenschange",this.onScreensChange),this.details=e,e.addEventListener("screenschange",this.onScreensChange);const t=this.candidates(),i=this.dialog.querySelector("#audience-screen");i.replaceChildren();for(const[s,r]of t.entries()){const a=new Option(`${r.label||`显示器 ${s+1}`} (${r.width}×${r.height})`,String(s));i.add(a)}this.target=t.length===1?t[0]:void 0,t.length>1&&(i.insertBefore(new Option("请选择观众屏幕",""),i.firstChild),i.value=""),this.syncDialog()}async warmScreens(){try{if((await navigator.permissions.query({name:"window-management"})).state==="granted"){const t=await na();!this.events.signal.aborted&&this.mode==="edit"&&this.useScreens(t)}}catch{}}async detectScreens(){const e=this.dialog.querySelector("#detect-screens");e.disabled=!0,this.setStatus("正在检测显示器…");try{const t=await na();if(this.events.signal.aborted||this.mode!=="edit")return;this.useScreens(t),this.setStatus(this.candidates().length?"请选择观众屏幕，然后开始演示。":"没有可用的扩展屏。请在系统中使用扩展显示，或切换窗口共享。")}catch(t){this.setStatus(t.message)}finally{e.disabled=!1}}onScreensChange=()=>{this.mode!=="edit"&&this.projection==="extended"&&(!this.target||!this.details?.screens.includes(this.target))?(this.endPresentation(),this.configure(),this.setStatus("观众屏幕已断开，已结束演示。")):this.mode==="edit"&&this.details&&this.useScreens(this.details)};syncDialog(){this.dialog.querySelectorAll("[name=projection-mode]").forEach(e=>{e.checked=e.value===this.projection,e.disabled=this.mode!=="edit"}),this.dialog.querySelector("#screen-options").hidden=this.projection!=="extended",this.dialog.querySelector("#detect-screens").disabled=this.mode!=="edit",this.dialog.querySelector("#audience-screen").disabled=this.mode!=="edit",this.dialog.querySelector("#confirm-presentation").disabled=this.mode!=="edit"||this.projection==="extended"&&!this.validTarget()}launch(){if(this.mode!=="edit")return;if(this.projection==="extended"&&!this.validTarget()){this.configure(),this.setStatus("请先授权并选择可用的观众屏幕。");return}this.notes.store.flush(),this.session=crypto.randomUUID(),this.revision=0;const e=new URL("./",location.href);e.searchParams.set("view","audience"),e.searchParams.set("session",this.session);const t=this.target,i=this.projection==="extended"&&t?`popup,left=${t.availLeft},top=${t.availTop},width=${t.availWidth},height=${t.availHeight}`:"popup,width=1280,height=720";if(this.audience=window.open(e.href,`promotion-audience-${this.session}`,i),!this.audience){this.session="",this.dialog.open||this.configure(),this.setStatus("观众窗口被浏览器拦截。请允许此站点弹出窗口，然后重试。");return}try{localStorage.setItem(Po,this.projection)}catch{}this.remembered=!0,document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),this.notes.setEnabled(!1),this.deck.setInteraction(!1),this.setMode("starting"),this.syncDialog(),this.dialog.open||this.dialog.showModal(),this.setStatus("正在连接观众窗口…"),this.poll=window.setInterval(()=>{this.audience?.closed&&this.endPresentation()},500),this.launchTimeout=window.setTimeout(()=>{this.mode==="starting"&&this.setStatus("观众窗口尚未就绪。请检查弹窗中的提示，或取消后重试。")},2e4)}sendState(){if(!this.audience||this.mode==="edit")return;const e=this.target;_i(this.audience,this.session,{type:"state",state:{...this.deck.getPosition(),revision:++this.revision,projection:this.projection,target:e?{left:e.left,top:e.top,width:e.width,height:e.height}:void 0,settings:this.getSettings()}})}onMessage=e=>{if(!(!wl(e,this.audience,this.session)||this.mode==="edit"))switch(e.data.type){case"hello":case"ping":this.sendState();break;case"started":this.mode==="starting"&&(window.clearTimeout(this.launchTimeout),this.dialog.close(),this.speaker.hidden=!1,this.root.classList.add("is-presenting"),this.deck.mountPreview(this.speaker.querySelector("#speaker-preview")),this.setMode("presenting"),this.shownNoteId="",this.syncSpeaker());break;case"waiting":{const t=typeof e.data.reason=="string"?e.data.reason:"请检查观众窗口。";this.setStatus(t),this.mode==="presenting"&&(this.speaker.querySelector("#speaker-guidance").textContent=t);break}case"end":this.endPresentation();break;case"navigate":Om(e.data.command)&&this.deck.navigate(e.data.command),this.sendState();break}};syncSpeaker(){const e=this.deck.getCurrentIndex(),t=Xe[e];if(this.speaker.querySelector("#speaker-progress").textContent=vl(this.deck.getPosition()),this.speaker.querySelector("#speaker-title").textContent=t.title,this.speaker.querySelector("#speaker-previous").disabled=!this.deck.canNavigate("previous"),this.speaker.querySelector("#speaker-next").disabled=!this.deck.canNavigate("next"),this.speaker.querySelector("#speaker-guidance").textContent=this.projection==="window"?"请在投屏软件中只共享“晋升答辩 · 观众窗口”，不要共享整个桌面。":"外接屏显示观众画面，本机显示逐字稿。",this.shownNoteId!==t.id){const i=this.speaker.querySelector("#speaker-notes"),s=this.notes.store.get(t.id);i.textContent=s||"本页尚未填写逐字稿",i.classList.toggle("is-empty",!s),i.scrollTop=0,this.shownNoteId=t.id}this.mode==="presenting"&&(document.title=`演讲者 · ${t.title} · 晋升答辩`)}resizeText(e){this.noteSize=Math.max(18,Math.min(48,this.noteSize+e)),this.speaker.querySelector("#speaker-notes").style.fontSize=`${this.noteSize}px`,this.speaker.querySelector("#notes-font-size").textContent=`${this.noteSize}px`,this.speaker.querySelector("#notes-smaller").disabled=this.noteSize===18,this.speaker.querySelector("#notes-larger").disabled=this.noteSize===48}onKeyDown=e=>{if(!(e.isComposing||e.keyCode===229||e.repeat||e.ctrlKey||e.metaKey||e.altKey)){if(e.key==="Escape"){this.mode!=="edit"?(e.preventDefault(),this.endPresentation()):!this.dialog.open&&this.notes.isOpen()&&(e.preventDefault(),this.notes.show(!1));return}if(!(e.defaultPrevented||Es(e)||this.dialog.open))if(this.mode==="presenting"){const t=ml(e);t&&(e.preventDefault(),this.deck.navigate(t))}else this.mode==="edit"&&(e.key.toLowerCase()==="b"&&(e.preventDefault(),this.notes.show(!this.notes.isOpen())),e.key.toLowerCase()==="q"&&(e.preventDefault(),this.startPresentation()))}}}class $m{constructor(e,t){this.root=e,this.deck=t,e.classList.add("shared-view"),this.panel=document.createElement("aside"),this.panel.className="shared-script",this.panel.setAttribute("aria-label","逐字稿"),this.panel.innerHTML=`<header class="shared-script-header"><div><span class="ui-eyebrow">SPEAKER NOTES</span><h2></h2></div>
      <button class="shared-script-toggle" type="button" aria-label="隐藏逐字稿" aria-expanded="true">收起</button></header>
      <div class="shared-script-body" tabindex="0"></div>`,e.append(this.panel),this.heading=this.panel.querySelector("h2"),this.script=this.panel.querySelector(".shared-script-body");const i=this.events.signal;e.addEventListener(kn,()=>this.sync(!0),{signal:i}),this.panel.querySelector("button").addEventListener("click",()=>this.toggle(),{signal:i}),this.sync(!1),this.load()}root;deck;events=new AbortController;panel;script;heading;notes={};status="正在载入逐字稿…";destroy(){this.events.abort(),this.panel.remove(),this.root.classList.remove("shared-view","shared-script-hidden")}async load(){try{const e="71acb4e95e9ccde0dc5a007a92829ab44004b2870f2ab79defc54ff0a64b7362",t=await fetch(`${In("shared-notes.json")}${e?`?v=${encodeURIComponent(e)}`:""}`,{cache:"no-cache"});if(!t.ok)throw new Error("Unavailable notes");this.notes=Tn(await t.text()).notes,this.status="本页尚未填写逐字稿"}catch{this.status="逐字稿加载失败，请刷新页面重试。"}this.events.signal.aborted||this.sync(!1)}sync(e){const t=this.deck.getCurrentIndex(),i=Xe[t];this.heading.textContent=`第 ${t+1} 张 / ${Xe.length} 张 · ${i.title}`;const s=this.notes[i.id];this.script.textContent=s?.trim()?s:this.status,this.script.classList.toggle("is-empty",!s?.trim()),e&&(this.script.scrollTop=0)}toggle(){const e=this.root.classList.toggle("shared-script-hidden"),t=this.panel.querySelector("button");t.textContent=e?"逐字稿":"收起",t.setAttribute("aria-expanded",String(!e)),t.setAttribute("aria-label",e?"显示逐字稿":"隐藏逐字稿"),window.dispatchEvent(new Event("resize"))}}const Ym=oi({waveSpeed:.03,star:{outerRadius:189,innerRadius:59},blur:{enabled:!0,radius:99},waves:[{enabled:!0,height:347,width:469,direction:138},{enabled:!0,height:124,width:391,direction:-24}],gradientStops:[{id:"start",position:0,color:"#f67200"},{id:"4ade6b4b-adeb-48f8-a6cc-9614faa772cb",position:.5,color:"#00b6ff"},{id:"end",position:1,color:"#ba00e2"}]}),St=document.querySelector("#app");if(!St)throw new Error("Missing #app mount point.");St.replaceChildren();const cr=new URLSearchParams(location.search).get("view")??"share";if(cr==="audience"){const n=new km(St);window.presentation=n.deck}else{let n=function(){a?.destroy(),r?.destroy(),l(),o.abort(),i?.destroy(),window.presentation===i&&delete window.presentation,window.presenterController===a&&delete window.presenterController};const e=cr==="shader",t=cr==="share";St.className=e?"shader-lab":"presentation-app",St.dataset.presentationMode="edit";const i=e?void 0:new _l(St,{shared:t});i?window.presentation=i:document.title="Shader 动画调试";const s=i?.canvas??document.createElement("canvas");e&&(s.className="cover-canvas",s.width=Ft,s.height=Ht,s.setAttribute("aria-label","黑色背景上旋转、模糊并经过双层波形变形的渐变五角星"),St.append(s)),i&&fl(St);const r=i&&t?new $m(St,i):void 0,a=i&&!t?new qm(St,i,()=>window.coverShader?.getSettings()??Co()):void 0;a&&(window.presenterController=a);const o=new AbortController;let l=()=>{},d=()=>{};try{const c=new ul(s,{...t?Ym:Co(),outputMode:e?"black":"transparent"});window.coverShader=c;const h=t?void 0:new zm(St,c),f=()=>{const p=!i||i.getCurrentIndex()===0&&(a?.getMode()??"edit")==="edit";c.setActive(p),h?.setEnabled(p)};f(),St.addEventListener(kn,f,{signal:o.signal}),St.addEventListener(bl,f,{signal:o.signal});let m=0,x=!1;const _=()=>{window.clearTimeout(m),x&&(h?.setSaveStatus(Vm(c.getSettings())),x=!1)};d=_,s.addEventListener(va,()=>{x=!0,window.clearTimeout(m),m=window.setTimeout(_,200)},{signal:o.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&_()},{signal:o.signal}),l=()=>{_(),h?.destroy(),c.destroy(),window.coverShader===c&&delete window.coverShader}}catch(c){s.hidden=!0;const h=document.createElement("p");h.className=e?"unsupported":"deck-notice",h.textContent=e?"当前浏览器无法运行 WebGL 动画，请尝试支持 WebGL 2 的桌面浏览器。":"此浏览器无法播放封面动画，仍可正常翻页。",St.append(h),console.error(c)}window.addEventListener("pagehide",c=>{d(),c.persisted||n()},{signal:o.signal})}
