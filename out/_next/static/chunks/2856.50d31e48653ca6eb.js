"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2856],{72856:function(e,r,t){function n(e){if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")}t.d(r,{CID:function(){return A}}),new Uint8Array(0);var i=function(e,r){if(e.length>=255)throw TypeError("Alphabet too long");for(var t=new Uint8Array(256),n=0;n<t.length;n++)t[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(255!==t[s])throw TypeError(o+" is ambiguous");t[s]=i}var a=e.length,c=e.charAt(0),h=Math.log(a)/Math.log(256),f=Math.log(256)/Math.log(a);function u(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var r=0;if(" "!==e[0]){for(var n=0,i=0;e[r]===c;)n++,r++;for(var o=(e.length-r)*h+1>>>0,s=new Uint8Array(o);e[r];){var f=t[e.charCodeAt(r)];if(255===f)return;for(var u=0,d=o-1;(0!==f||u<i)&&-1!==d;d--,u++)f+=a*s[d]>>>0,s[d]=f%256>>>0,f=f/256>>>0;if(0!==f)throw Error("Non-zero carry");i=u,r++}if(" "!==e[r]){for(var l=o-i;l!==o&&0===s[l];)l++;for(var b=new Uint8Array(n+(o-l)),p=n;l!==o;)b[p++]=s[l++];return b}}}return{encode:function(r){if(r instanceof Uint8Array||(ArrayBuffer.isView(r)?r=new Uint8Array(r.buffer,r.byteOffset,r.byteLength):Array.isArray(r)&&(r=Uint8Array.from(r))),!(r instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===r.length)return"";for(var t=0,n=0,i=0,o=r.length;i!==o&&0===r[i];)i++,t++;for(var s=(o-i)*f+1>>>0,h=new Uint8Array(s);i!==o;){for(var u=r[i],d=0,l=s-1;(0!==u||d<n)&&-1!==l;l--,d++)u+=256*h[l]>>>0,h[l]=u%a>>>0,u=u/a>>>0;if(0!==u)throw Error("Non-zero carry");n=d,i++}for(var b=s-n;b!==s&&0===h[b];)b++;for(var p=c.repeat(t);b<s;++b)p+=e.charAt(h[b]);return p},decodeUnsafe:u,decode:function(e){var t=u(e);if(t)return t;throw Error(`Non-${r} character`)}}};class o{name;prefix;baseEncode;constructor(e,r,t){this.name=e,this.prefix=r,this.baseEncode=t}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class s{name;prefix;baseDecode;prefixCodePoint;constructor(e,r,t){if(this.name=e,this.prefix=r,void 0===r.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=r.codePointAt(0),this.baseDecode=t}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return c(this,e)}}class a{decoders;constructor(e){this.decoders=e}or(e){return c(this,e)}decode(e){let r=e[0],t=this.decoders[r];if(null!=t)return t.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}function c(e,r){return new a({...e.decoders??{[e.prefix]:e},...r.decoders??{[r.prefix]:r}})}class h{name;prefix;baseEncode;baseDecode;encoder;decoder;constructor(e,r,t,n){this.name=e,this.prefix=r,this.baseEncode=t,this.baseDecode=n,this.encoder=new o(e,r,t),this.decoder=new s(e,r,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}function f({name:e,prefix:r,encode:t,decode:n}){return new h(e,r,t,n)}function u({name:e,prefix:r,alphabet:t}){let{encode:o,decode:s}=i(t,e);return f({prefix:r,name:e,encode:o,decode:e=>n(s(e))})}function d({name:e,prefix:r,bitsPerChar:t,alphabet:n}){return f({prefix:r,name:e,encode:e=>(function(e,r,t){let n="="===r[r.length-1],i=(1<<t)-1,o="",s=0,a=0;for(let n=0;n<e.length;++n)for(a=a<<8|e[n],s+=8;s>t;)s-=t,o+=r[i&a>>s];if(0!==s&&(o+=r[i&a<<t-s]),n)for(;(o.length*t&7)!=0;)o+="=";return o})(e,n,t),decode:r=>(function(e,r,t,n){let i={};for(let e=0;e<r.length;++e)i[r[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;let s=new Uint8Array(o*t/8|0),a=0,c=0,h=0;for(let r=0;r<o;++r){let o=i[e[r]];if(void 0===o)throw SyntaxError(`Non-${n} character`);c=c<<t|o,(a+=t)>=8&&(a-=8,s[h++]=255&c>>a)}if(a>=t||(255&c<<8-a)!=0)throw SyntaxError("Unexpected end of data");return s})(r,n,t,e)})}let l=d({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5});d({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),d({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),d({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),d({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),d({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),d({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),d({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),d({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});let b=u({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"});u({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var p=function e(r,t,n){t=t||[];for(var i=n=n||0;r>=2147483648;)t[n++]=255&r|128,r/=128;for(;-128&r;)t[n++]=255&r|128,r>>>=7;return t[n]=0|r,e.bytes=n-i+1,t},y=function e(r,t){var n,i=0,t=t||0,o=0,s=t,a=r.length;do{if(s>=a)throw e.bytes=0,RangeError("Could not decode varint");n=r[s++],i+=o<28?(127&n)<<o:(127&n)*Math.pow(2,o),o+=7}while(n>=128);return e.bytes=s-t,i},g=function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10};function w(e,r=0){return[y(e,r),y.bytes]}function v(e,r,t=0){return p(e,r,t),r}class m{code;size;digest;bytes;constructor(e,r,t,n){this.code=e,this.size=r,this.digest=t,this.bytes=n}}function x(e,r){let{bytes:t,version:n}=e;return 0===n?function(e,r,t){let{prefix:n}=t;if(n!==b.prefix)throw Error(`Cannot string encode V0 in ${t.name} encoding`);let i=r.get(n);if(null!=i)return i;{let i=t.encode(e).slice(1);return r.set(n,i),i}}(t,E(e),r??b.encoder):function(e,r,t){let{prefix:n}=t,i=r.get(n);if(null!=i)return i;{let i=t.encode(e);return r.set(n,i),i}}(t,E(e),r??l.encoder)}let C=new WeakMap;function E(e){let r=C.get(e);if(null==r){let r=new Map;return C.set(e,r),r}return r}class A{code;version;multihash;bytes;"/";constructor(e,r,t,n){this.code=r,this.version=e,this.multihash=t,this.bytes=n,this["/"]=n}get asCID(){return this}get byteOffset(){return this.bytes.byteOffset}get byteLength(){return this.bytes.byteLength}toV0(){switch(this.version){case 0:return this;case 1:{let{code:e,multihash:r}=this;if(e!==U)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(r.code!==D)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return A.createV0(r)}default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}toV1(){switch(this.version){case 0:{let{code:e,digest:r}=this.multihash,t=function(e,r){let t=r.byteLength,n=g(e),i=n+g(t),o=new Uint8Array(i+t);return v(e,o,0),v(t,o,n),o.set(r,i),new m(e,t,r,o)}(e,r);return A.createV1(this.code,t)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`)}}equals(e){return A.equals(this,e)}static equals(e,r){var t,n;return null!=r&&e.code===r.code&&e.version===r.version&&((t=e.multihash)===(n=r.multihash)||t.code===n.code&&t.size===n.size&&n.bytes instanceof Uint8Array&&function(e,r){if(e===r)return!0;if(e.byteLength!==r.byteLength)return!1;for(let t=0;t<e.byteLength;t++)if(e[t]!==r[t])return!1;return!0}(t.bytes,n.bytes))}toString(e){return x(this,e)}toJSON(){return{"/":x(this)}}link(){return this}[Symbol.toStringTag]="CID";[Symbol.for("nodejs.util.inspect.custom")](){return`CID(${this.toString()})`}static asCID(e){if(null==e)return null;if(e instanceof A)return e;if(null!=e["/"]&&e["/"]===e.bytes||e.asCID===e){let{version:r,code:t,multihash:n,bytes:i}=e;return new A(r,t,n,i??I(r,t,n.bytes))}if(!0!==e[S])return null;{let{version:r,multihash:t,code:i}=e,o=function(e){let r=n(e),[t,i]=w(r),[o,s]=w(r.subarray(i)),a=r.subarray(i+s);if(a.byteLength!==o)throw Error("Incorrect length");return new m(t,o,a,r)}(t);return A.create(r,i,o)}}static create(e,r,t){if("number"!=typeof r)throw Error("String codecs are no longer supported");if(!(t.bytes instanceof Uint8Array))throw Error("Invalid digest");switch(e){case 0:if(r===U)return new A(e,r,t,t.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${U}) block encoding`);case 1:{let n=I(e,r,t.bytes);return new A(e,r,t,n)}default:throw Error("Invalid version")}}static createV0(e){return A.create(0,U,e)}static createV1(e,r){return A.create(1,e,r)}static decode(e){let[r,t]=A.decodeFirst(e);if(0!==t.length)throw Error("Incorrect length");return r}static decodeFirst(e){let r=A.inspectBytes(e),t=r.size-r.multihashSize,i=n(e.subarray(t,t+r.multihashSize));if(i.byteLength!==r.multihashSize)throw Error("Incorrect length");let o=i.subarray(r.multihashSize-r.digestSize),s=new m(r.multihashCode,r.digestSize,o,i);return[0===r.version?A.createV0(s):A.createV1(r.codec,s),e.subarray(r.size)]}static inspectBytes(e){let r=0,t=()=>{let[t,n]=w(e.subarray(r));return r+=n,t},n=t(),i=U;if(18===n?(n=0,r=0):i=t(),0!==n&&1!==n)throw RangeError(`Invalid CID version ${n}`);let o=r,s=t(),a=t(),c=r+a;return{version:n,codec:i,multihashCode:s,digestSize:a,multihashSize:c-o,size:c}}static parse(e,r){let[t,n]=function(e,r){switch(e[0]){case"Q":return[b.prefix,(r??b).decode(`${b.prefix}${e}`)];case b.prefix:return[b.prefix,(r??b).decode(e)];case l.prefix:return[l.prefix,(r??l).decode(e)];default:if(null==r)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],r.decode(e)]}}(e,r),i=A.decode(n);if(0===i.version&&"Q"!==e[0])throw Error("Version 0 CID string must not include multibase prefix");return E(i).set(t,e),i}}let U=112,D=18;function I(e,r,t){let n=g(e),i=n+g(r),o=new Uint8Array(i+t.byteLength);return v(e,o,0),v(r,o,n),o.set(t,i),o}let S=Symbol.for("@ipld/js-cid/CID")}}]);