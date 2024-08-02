"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [396],
    {
        70396: function (t, n, i) {
            n.parseAni = void 0;
            var r = i(38855),
                e = i(72058),
                s = { bits: 32, be: !1, signed: !1, fp: !1 };
            n.parseAni = function (t) {
                var n = new r.RIFFFile();
                n.setSignature(t);
                var i = n.signature;
                if ("ACON" !== i.format) throw Error('Expected format. Expected "ACON", got "' + i.format + '"');
                function h(t, i) {
                    var r = n.findChunk(t);
                    return null == r ? null : i(r);
                }
                function a(n, i) {
                    return n.subChunks.slice(0, i).map(function (n) {
                        if ("icon" !== n.chunkId) throw Error("Unexpected chunk type in fram: " + n.chunkId);
                        return t.slice(n.chunkData.start, n.chunkData.end);
                    });
                }
                var u = h("anih", function (n) {
                    var i = e.unpackArray(t, s, n.chunkData.start, n.chunkData.end);
                    return { cbSize: i[0], nFrames: i[1], nSteps: i[2], iWidth: i[3], iHeight: i[4], iBitCount: i[5], nPlanes: i[6], iDispRate: i[7], bfAttributes: i[8] };
                });
                if (null == u) throw Error("Did not find anih");
                var o = h("rate", function (n) {
                    return e.unpackArray(t, s, n.chunkData.start, n.chunkData.end);
                }),
                    c = h("seq ", function (n) {
                        return e.unpackArray(t, s, n.chunkData.start, n.chunkData.end);
                    }),
                    f = n.findChunk("LIST", !0),
                    l =
                        null == f
                            ? void 0
                            : f.find(function (t) {
                                return "fram" === t.format;
                            });
                if (null == l) throw Error("Did not find fram LIST");
                var k = a(l, u.nFrames),
                    p = null,
                    b = null,
                    d =
                        null == f
                            ? void 0
                            : f.find(function (t) {
                                return "INFO" === t.format;
                            });
                return (
                    null != d &&
                    d.subChunks.forEach(function (n) {
                        switch (n.chunkId) {
                            case "INAM":
                                p = e.unpackString(t, n.chunkData.start, n.chunkData.end);
                                break;
                            case "IART":
                                b = e.unpackString(t, n.chunkData.start, n.chunkData.end);
                                break;
                            case "LIST":
                                "fram" === n.format && (k = a(n, u.nFrames));
                        }
                    }),
                    { images: k, rate: o, seq: c, metadata: u, artist: b, title: p }
                );
            };
        },
        72058: function (t, n, i) {
            function r(t, n, i = 0, r = t.length) {
                if (r % n) throw Error("Bad buffer length.");
                for (let e = i; e < r; e += n)
                    !(function (t, n, i) {
                        n--;
                        for (let r = 0; r < n; r++) {
                            let e = t[i + r];
                            (t[i + r] = t[i + n]), (t[i + n] = e), n--;
                        }
                    })(t, n, e);
            }
            function e(t, n, i = 0) {
                for (let r = 0, e = t.length; r < e; r++) {
                    let e = t.codePointAt(r);
                    if (e < 128) (n[i] = e), i++;
                    else {
                        let t = 0,
                            s = 0;
                        for (e <= 2047 ? ((t = 1), (s = 192)) : e <= 65535 ? ((t = 2), (s = 224)) : e <= 1114111 && ((t = 3), (s = 240), r++), n[i] = (e >> (6 * t)) + s, i++; t > 0;) (n[i] = 128 | ((e >> (6 * (t - 1))) & 63)), i++, t--;
                    }
                }
                return i;
            }
            i.r(n),
                i.d(n, {
                    pack: function () {
                        return p;
                    },
                    packArray: function () {
                        return b;
                    },
                    packArrayTo: function () {
                        return f;
                    },
                    packString: function () {
                        return o;
                    },
                    packStringTo: function () {
                        return c;
                    },
                    packTo: function () {
                        return k;
                    },
                    unpack: function () {
                        return g;
                    },
                    unpackArray: function () {
                        return d;
                    },
                    unpackArrayTo: function () {
                        return l;
                    },
                    unpackString: function () {
                        return u;
                    },
                });
            class s {
                constructor(t, n = !1, i = !1) {
                    (this.bits = t), (this.bytes = t < 8 ? 1 : Math.ceil(t / 8)), (this.max = Math.pow(2, t) - 1), (this.min = 0);
                    let r = 8 - (((t - 1) | 7) + 1 - t);
                    (this.lastByteMask_ = Math.pow(2, r > 0 ? r : 8) - 1),
                        (this.unpack = this.unpackUnsigned_),
                        n && ((this.max = Math.pow(2, t) / 2 - 1), (this.min = -this.max - 1), (this.unpack = this.unpackSigned_)),
                        i && (this.overflow_ = this.overflowClamp_);
                }
                pack(t, n, i = 0) {
                    if (n != n || n.constructor != Number) throw TypeError();
                    (n = this.overflow_(n)), (t[i] = (n < 0 ? n + Math.pow(2, this.bits) : n) & 255), i++;
                    for (let r = 2, e = this.bytes; r < e; r++) (t[i] = 255 & Math.floor(n / Math.pow(2, (r - 1) * 8))), i++;
                    return this.bits > 8 && ((t[i] = Math.floor(n / Math.pow(2, (this.bytes - 1) * 8)) & this.lastByteMask_), i++), i;
                }
                unpack_(t, n = 0) {
                    let i = 0;
                    for (let r = 0; r < this.bytes; r++) i += t[n + r] * Math.pow(256, r);
                    return i;
                }
                unpackUnsigned_(t, n = 0) {
                    return this.overflow_(this.unpack_(t, n));
                }
                unpackSigned_(t, n = 0) {
                    return this.overflow_(this.sign_(this.unpack_(t, n)));
                }
                overflow_(t) {
                    if (t > this.max || t < this.min) throw RangeError();
                    return t;
                }
                overflowClamp_(t) {
                    return t > this.max ? this.max : t < this.min ? this.min : t;
                }
                sign_(t) {
                    return t > this.max && (t -= 2 * this.max + 2), t;
                }
            }
            class h {
                constructor(t, n) {
                    (this.ebits = t),
                        (this.fbits = n),
                        (this.bias = (1 << (t - 1)) - 1),
                        (this.numBytes = Math.ceil((t + n) / 8)),
                        (this.biasP2 = Math.pow(2, this.bias + 1)),
                        (this.ebitsFbits = t + n),
                        (this.fbias = Math.pow(2, -(8 * this.numBytes - 1 - t)));
                }
                pack(t, n, i) {
                    if ("number" != typeof n) throw TypeError();
                    Math.abs(n) > this.biasP2 - 2 * this.ebitsFbits && (n = n < 0 ? -1 / 0 : 1 / 0);
                    let r = 0 > ((n = +n) || 1 / n) ? 1 : n < 0 ? 1 : 0,
                        e = Math.min(Math.floor(Math.log((n = Math.abs(n))) / Math.LN2), 1023),
                        s = a((n / Math.pow(2, e)) * Math.pow(2, this.fbits));
                    return (
                        n != n
                            ? ((s = Math.pow(2, this.fbits - 1)), (e = (1 << this.ebits) - 1))
                            : 0 !== n &&
                            (n >= Math.pow(2, 1 - this.bias)
                                ? (s / Math.pow(2, this.fbits) >= 2 && ((e += 1), (s = 1)), e > this.bias ? ((e = (1 << this.ebits) - 1), (s = 0)) : ((e += this.bias), (s = a(s) - Math.pow(2, this.fbits))))
                                : ((s = a(n / Math.pow(2, 1 - this.bias - this.fbits))), (e = 0))),
                        this.packFloatBits_(t, i, r, e, s)
                    );
                }
                unpack(t, n) {
                    let i,
                        r = (1 << this.ebits) - 1,
                        e = "";
                    for (let i = this.numBytes - 1; i >= 0; i--) {
                        let r = t[i + n].toString(2);
                        e += "00000000".substring(r.length) + r;
                    }
                    let s = "1" == e.charAt(0) ? -1 : 1,
                        h = parseInt((e = e.substring(1)).substring(0, this.ebits), 2);
                    return ((e = e.substring(this.ebits)), h == r) ? (0 !== parseInt(e, 2) ? NaN : (1 / 0) * s) : (0 === h ? ((h += 1), (i = parseInt(e, 2))) : (i = parseInt("1" + e, 2)), s * i * this.fbias * Math.pow(2, h - this.bias));
                }
                packFloatBits_(t, n, i, r, e) {
                    let s = [];
                    s.push(i);
                    for (let t = this.ebits; t > 0; t -= 1) (s[t] = r % 2 ? 1 : 0), (r = Math.floor(r / 2));
                    let h = s.length;
                    for (let t = this.fbits; t > 0; t -= 1) (s[h + t] = e % 2 ? 1 : 0), (e = Math.floor(e / 2));
                    let a = s.join(""),
                        u = this.numBytes + n - 1,
                        o = n;
                    for (; u >= n;) (t[u] = parseInt(a.substring(0, 8), 2)), (a = a.substring(8)), u--, o++;
                    return o;
                }
            }
            function a(t) {
                let n = Math.floor(t),
                    i = t - n;
                return i < 0.5 ? n : i > 0.5 ? n + 1 : n % 2 ? n + 1 : n;
            }
            function u(t, n = 0, i = t.length) {
                return (function (t, n = 0, i = t.length) {
                    let r = "";
                    for (let e = n; e < i;) {
                        let n = 128,
                            i = 191,
                            s = !1,
                            h = t[e++];
                        if (h >= 0 && h <= 127) r += String.fromCharCode(h);
                        else {
                            let a = 0;
                            h >= 194 && h <= 223
                                ? (a = 1)
                                : h >= 224 && h <= 239
                                    ? ((a = 2), 224 === t[e] && (n = 160), 237 === t[e] && (i = 159))
                                    : h >= 240 && h <= 244
                                        ? ((a = 3), 240 === t[e] && (n = 144), 244 === t[e] && (i = 143))
                                        : (s = !0),
                                (h &= (1 << (8 - a - 1)) - 1);
                            for (let r = 0; r < a; r++) (t[e] < n || t[e] > i) && (s = !0), (h = (h << 6) | (63 & t[e])), e++;
                            s ? (r += String.fromCharCode(65533)) : h <= 65535 ? (r += String.fromCharCode(h)) : ((h -= 65536), (r += String.fromCharCode(((h >> 10) & 1023) + 55296, (1023 & h) + 56320)));
                        }
                    }
                    return r;
                })(t, n, i);
            }
            function o(t) {
                let n = [];
                return e(t, n, 0), n;
            }
            function c(t, n, i = 0) {
                return e(t, n, i);
            }
            function f(t, n, i, e = 0, s = !1) {
                let h = w((n = n || {}).bits, n.fp, n.signed, s),
                    a = Math.ceil(n.bits / 8),
                    u = 0,
                    o = e;
                try {
                    for (let n = t.length; u < n; u++) e = h.pack(i, t[u], e);
                    n.be && r(i, a, o, e);
                } catch (n) {
                    m(n, t[u], u);
                }
                return e;
            }
            function l(t, n, i, e = 0, s = t.length, h = !1, a = !1) {
                let u = w((n = n || {}).bits, n.fp, n.signed, a),
                    o = Math.ceil(n.bits / 8);
                s = (function (t, n, i, r, e) {
                    let s = (i - n) % r;
                    if (e && (s || t.length < r)) throw Error("Bad buffer length");
                    return i - s;
                })(t, e, s, o, h);
                let c = 0,
                    f = e;
                try {
                    for (n.be && r(t, o, e, s); f < s; f += o, c++) i[c] = u.unpack(t, f);
                    n.be && r(t, o, e, s);
                } catch (n) {
                    m(n, t.slice(f, f + o), f);
                }
            }
            function k(t, n, i, r = 0, e = !1) {
                return f([t], n, i, r, e);
            }
            function p(t, n, i = !1) {
                let r = [];
                return k(t, n, r, 0, i), r;
            }
            function b(t, n, i = !1) {
                let r = [];
                return f(t, n, r, 0, i), r;
            }
            function d(t, n, i = 0, r = t.length, e = !1, s = !1) {
                let h = [];
                return l(t, n, h, i, r, e, s), h;
            }
            function g(t, n, i = 0, r = !1) {
                return d(t, n, i, i + Math.ceil(n.bits / 8), !0, r)[0];
            }
            function m(t, n, i) {
                throw ((t.message = t.constructor.name + " at index " + i + ": " + n), t);
            }
            function w(t, n, i, r) {
                return (n
                    ? (function (t) {
                        if (!t || (16 !== t && 32 !== t && 64 !== t)) throw Error(S + ": float, bits: " + t);
                    })(t)
                    : (function (t) {
                        if (!t || t < 1 || t > 53) throw Error(S + ": int, bits: " + t);
                    })(t),
                    n && 16 === t)
                    ? new h(5, 11)
                    : n && 32 == t
                        ? new h(8, 23)
                        : n && 64 == t
                            ? new h(11, 52)
                            : new s(t, i, r);
            }
            let S = "Unsupported type";
        },
        38855: function (t, n, i) {
            i.r(n),
                i.d(n, {
                    RIFFFile: function () {
                        return e;
                    },
                });
            var r = i(72058);
            class e {
                constructor() {
                    (this.container = ""), (this.chunkSize = 0), (this.format = ""), (this.signature = null), (this.head = 0), (this.uInt32 = { bits: 32, be: !1, signed: !1, fp: !1 }), (this.supported_containers = ["RIFF", "RIFX"]);
                }
                setSignature(t) {
                    if (((this.head = 0), (this.container = this.readString(t, 4)), -1 === this.supported_containers.indexOf(this.container))) throw Error("Not a supported format.");
                    (this.uInt32.be = "RIFX" === this.container),
                        (this.chunkSize = this.readUInt32(t)),
                        (this.format = this.readString(t, 4)),
                        (this.signature = { chunkId: this.container, chunkSize: this.chunkSize, format: this.format, subChunks: this.getSubChunksIndex_(t), chunkData: { start: 0, end: this.chunkSize } });
                }
                findChunk(t, n = !1) {
                    let i = this.signature.subChunks,
                        r = [];
                    for (let e = 0; e < i.length; e++)
                        if (i[e].chunkId == t) {
                            if (!n) return i[e];
                            r.push(i[e]);
                        }
                    return "LIST" == t && r.length ? r : null;
                }
                readString(t, n) {
                    let i = "";
                    return (i = (0, r.unpackString)(t, this.head, this.head + n)), (this.head += n), i;
                }
                readUInt32(t) {
                    let n = (0, r.unpack)(t, this.uInt32, this.head);
                    return (this.head += 4), n;
                }
                getSubChunksIndex_(t) {
                    let n = [],
                        i = this.head;
                    for (; i <= t.length - 8;) n.push(this.getSubChunkIndex_(t, i)), (i += 8 + n[n.length - 1].chunkSize), (i = i % 2 ? i + 1 : i);
                    return n;
                }
                getSubChunkIndex_(t, n) {
                    let i = { chunkId: this.getChunkId_(t, n), chunkSize: this.getChunkSize_(t, n) };
                    if ("LIST" == i.chunkId) (i.format = (0, r.unpackString)(t, n + 8, n + 12)), (this.head += 4), (i.subChunks = this.getSubChunksIndex_(t));
                    else {
                        let t = i.chunkSize % 2 ? i.chunkSize + 1 : i.chunkSize;
                        (this.head = n + 8 + t), (i.chunkData = { start: n + 8, end: this.head });
                    }
                    return i;
                }
                getChunkId_(t, n) {
                    return (this.head += 4), (0, r.unpackString)(t, n, n + 4);
                }
                getChunkSize_(t, n) {
                    return (this.head += 4), (0, r.unpack)(t, this.uInt32, n + 4);
                }
            }
        },
    },
]);







// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{70396:function(t,n,i){n.parseAni=void 0;var r=i(38855),e=i(72058),s={bits:32,be:!1,signed:!1,fp:!1};n.parseAni=function(t){var n=new r.RIFFFile;n.setSignature(t);var i=n.signature;if("ACON"!==i.format)throw Error('Expected format. Expected "ACON", got "'+i.format+'"');function h(t,i){var r=n.findChunk(t);return null==r?null:i(r)}function a(n,i){return n.subChunks.slice(0,i).map(function(n){if("icon"!==n.chunkId)throw Error("Unexpected chunk type in fram: "+n.chunkId);return t.slice(n.chunkData.start,n.chunkData.end)})}var u=h("anih",function(n){var i=e.unpackArray(t,s,n.chunkData.start,n.chunkData.end);return{cbSize:i[0],nFrames:i[1],nSteps:i[2],iWidth:i[3],iHeight:i[4],iBitCount:i[5],nPlanes:i[6],iDispRate:i[7],bfAttributes:i[8]}});if(null==u)throw Error("Did not find anih");var o=h("rate",function(n){return e.unpackArray(t,s,n.chunkData.start,n.chunkData.end)}),c=h("seq ",function(n){return e.unpackArray(t,s,n.chunkData.start,n.chunkData.end)}),f=n.findChunk("LIST",!0),l=null==f?void 0:f.find(function(t){return"fram"===t.format});if(null==l)throw Error("Did not find fram LIST");var k=a(l,u.nFrames),p=null,b=null,d=null==f?void 0:f.find(function(t){return"INFO"===t.format});return null!=d&&d.subChunks.forEach(function(n){switch(n.chunkId){case"INAM":p=e.unpackString(t,n.chunkData.start,n.chunkData.end);break;case"IART":b=e.unpackString(t,n.chunkData.start,n.chunkData.end);break;case"LIST":"fram"===n.format&&(k=a(n,u.nFrames))}}),{images:k,rate:o,seq:c,metadata:u,artist:b,title:p}}},72058:function(t,n,i){function r(t,n,i=0,r=t.length){if(r%n)throw Error("Bad buffer length.");for(let e=i;e<r;e+=n)!function(t,n,i){n--;for(let r=0;r<n;r++){let e=t[i+r];t[i+r]=t[i+n],t[i+n]=e,n--}}(t,n,e)}function e(t,n,i=0){for(let r=0,e=t.length;r<e;r++){let e=t.codePointAt(r);if(e<128)n[i]=e,i++;else{let t=0,s=0;for(e<=2047?(t=1,s=192):e<=65535?(t=2,s=224):e<=1114111&&(t=3,s=240,r++),n[i]=(e>>6*t)+s,i++;t>0;)n[i]=128|e>>6*(t-1)&63,i++,t--}}return i}i.r(n),i.d(n,{pack:function(){return p},packArray:function(){return b},packArrayTo:function(){return f},packString:function(){return o},packStringTo:function(){return c},packTo:function(){return k},unpack:function(){return g},unpackArray:function(){return d},unpackArrayTo:function(){return l},unpackString:function(){return u}});class s{constructor(t,n=!1,i=!1){this.bits=t,this.bytes=t<8?1:Math.ceil(t/8),this.max=Math.pow(2,t)-1,this.min=0;let r=8-((t-1|7)+1-t);this.lastByteMask_=Math.pow(2,r>0?r:8)-1,this.unpack=this.unpackUnsigned_,n&&(this.max=Math.pow(2,t)/2-1,this.min=-this.max-1,this.unpack=this.unpackSigned_),i&&(this.overflow_=this.overflowClamp_)}pack(t,n,i=0){if(n!=n||n.constructor!=Number)throw TypeError();n=this.overflow_(n),t[i]=(n<0?n+Math.pow(2,this.bits):n)&255,i++;for(let r=2,e=this.bytes;r<e;r++)t[i]=255&Math.floor(n/Math.pow(2,(r-1)*8)),i++;return this.bits>8&&(t[i]=Math.floor(n/Math.pow(2,(this.bytes-1)*8))&this.lastByteMask_,i++),i}unpack_(t,n=0){let i=0;for(let r=0;r<this.bytes;r++)i+=t[n+r]*Math.pow(256,r);return i}unpackUnsigned_(t,n=0){return this.overflow_(this.unpack_(t,n))}unpackSigned_(t,n=0){return this.overflow_(this.sign_(this.unpack_(t,n)))}overflow_(t){if(t>this.max||t<this.min)throw RangeError();return t}overflowClamp_(t){return t>this.max?this.max:t<this.min?this.min:t}sign_(t){return t>this.max&&(t-=2*this.max+2),t}}class h{constructor(t,n){this.ebits=t,this.fbits=n,this.bias=(1<<t-1)-1,this.numBytes=Math.ceil((t+n)/8),this.biasP2=Math.pow(2,this.bias+1),this.ebitsFbits=t+n,this.fbias=Math.pow(2,-(8*this.numBytes-1-t))}pack(t,n,i){if("number"!=typeof n)throw TypeError();Math.abs(n)>this.biasP2-2*this.ebitsFbits&&(n=n<0?-1/0:1/0);let r=0>((n=+n)||1/n)?1:n<0?1:0,e=Math.min(Math.floor(Math.log(n=Math.abs(n))/Math.LN2),1023),s=a(n/Math.pow(2,e)*Math.pow(2,this.fbits));return n!=n?(s=Math.pow(2,this.fbits-1),e=(1<<this.ebits)-1):0!==n&&(n>=Math.pow(2,1-this.bias)?(s/Math.pow(2,this.fbits)>=2&&(e+=1,s=1),e>this.bias?(e=(1<<this.ebits)-1,s=0):(e+=this.bias,s=a(s)-Math.pow(2,this.fbits))):(s=a(n/Math.pow(2,1-this.bias-this.fbits)),e=0)),this.packFloatBits_(t,i,r,e,s)}unpack(t,n){let i,r=(1<<this.ebits)-1,e="";for(let i=this.numBytes-1;i>=0;i--){let r=t[i+n].toString(2);e+="00000000".substring(r.length)+r}let s="1"==e.charAt(0)?-1:1,h=parseInt((e=e.substring(1)).substring(0,this.ebits),2);return(e=e.substring(this.ebits),h==r)?0!==parseInt(e,2)?NaN:1/0*s:(0===h?(h+=1,i=parseInt(e,2)):i=parseInt("1"+e,2),s*i*this.fbias*Math.pow(2,h-this.bias))}packFloatBits_(t,n,i,r,e){let s=[];s.push(i);for(let t=this.ebits;t>0;t-=1)s[t]=r%2?1:0,r=Math.floor(r/2);let h=s.length;for(let t=this.fbits;t>0;t-=1)s[h+t]=e%2?1:0,e=Math.floor(e/2);let a=s.join(""),u=this.numBytes+n-1,o=n;for(;u>=n;)t[u]=parseInt(a.substring(0,8),2),a=a.substring(8),u--,o++;return o}}function a(t){let n=Math.floor(t),i=t-n;return i<.5?n:i>.5?n+1:n%2?n+1:n}function u(t,n=0,i=t.length){return function(t,n=0,i=t.length){let r="";for(let e=n;e<i;){let n=128,i=191,s=!1,h=t[e++];if(h>=0&&h<=127)r+=String.fromCharCode(h);else{let a=0;h>=194&&h<=223?a=1:h>=224&&h<=239?(a=2,224===t[e]&&(n=160),237===t[e]&&(i=159)):h>=240&&h<=244?(a=3,240===t[e]&&(n=144),244===t[e]&&(i=143)):s=!0,h&=(1<<8-a-1)-1;for(let r=0;r<a;r++)(t[e]<n||t[e]>i)&&(s=!0),h=h<<6|63&t[e],e++;s?r+=String.fromCharCode(65533):h<=65535?r+=String.fromCharCode(h):(h-=65536,r+=String.fromCharCode((h>>10&1023)+55296,(1023&h)+56320))}}return r}(t,n,i)}function o(t){let n=[];return e(t,n,0),n}function c(t,n,i=0){return e(t,n,i)}function f(t,n,i,e=0,s=!1){let h=w((n=n||{}).bits,n.fp,n.signed,s),a=Math.ceil(n.bits/8),u=0,o=e;try{for(let n=t.length;u<n;u++)e=h.pack(i,t[u],e);n.be&&r(i,a,o,e)}catch(n){m(n,t[u],u)}return e}function l(t,n,i,e=0,s=t.length,h=!1,a=!1){let u=w((n=n||{}).bits,n.fp,n.signed,a),o=Math.ceil(n.bits/8);s=function(t,n,i,r,e){let s=(i-n)%r;if(e&&(s||t.length<r))throw Error("Bad buffer length");return i-s}(t,e,s,o,h);let c=0,f=e;try{for(n.be&&r(t,o,e,s);f<s;f+=o,c++)i[c]=u.unpack(t,f);n.be&&r(t,o,e,s)}catch(n){m(n,t.slice(f,f+o),f)}}function k(t,n,i,r=0,e=!1){return f([t],n,i,r,e)}function p(t,n,i=!1){let r=[];return k(t,n,r,0,i),r}function b(t,n,i=!1){let r=[];return f(t,n,r,0,i),r}function d(t,n,i=0,r=t.length,e=!1,s=!1){let h=[];return l(t,n,h,i,r,e,s),h}function g(t,n,i=0,r=!1){return d(t,n,i,i+Math.ceil(n.bits/8),!0,r)[0]}function m(t,n,i){throw t.message=t.constructor.name+" at index "+i+": "+n,t}function w(t,n,i,r){return(n?function(t){if(!t||16!==t&&32!==t&&64!==t)throw Error(S+": float, bits: "+t)}(t):function(t){if(!t||t<1||t>53)throw Error(S+": int, bits: "+t)}(t),n&&16===t)?new h(5,11):n&&32==t?new h(8,23):n&&64==t?new h(11,52):new s(t,i,r)}let S="Unsupported type"},38855:function(t,n,i){i.r(n),i.d(n,{RIFFFile:function(){return e}});var r=i(72058);class e{constructor(){this.container="",this.chunkSize=0,this.format="",this.signature=null,this.head=0,this.uInt32={bits:32,be:!1,signed:!1,fp:!1},this.supported_containers=["RIFF","RIFX"]}setSignature(t){if(this.head=0,this.container=this.readString(t,4),-1===this.supported_containers.indexOf(this.container))throw Error("Not a supported format.");this.uInt32.be="RIFX"===this.container,this.chunkSize=this.readUInt32(t),this.format=this.readString(t,4),this.signature={chunkId:this.container,chunkSize:this.chunkSize,format:this.format,subChunks:this.getSubChunksIndex_(t),chunkData:{start:0,end:this.chunkSize}}}findChunk(t,n=!1){let i=this.signature.subChunks,r=[];for(let e=0;e<i.length;e++)if(i[e].chunkId==t){if(!n)return i[e];r.push(i[e])}return"LIST"==t&&r.length?r:null}readString(t,n){let i="";return i=(0,r.unpackString)(t,this.head,this.head+n),this.head+=n,i}readUInt32(t){let n=(0,r.unpack)(t,this.uInt32,this.head);return this.head+=4,n}getSubChunksIndex_(t){let n=[],i=this.head;for(;i<=t.length-8;)n.push(this.getSubChunkIndex_(t,i)),i+=8+n[n.length-1].chunkSize,i=i%2?i+1:i;return n}getSubChunkIndex_(t,n){let i={chunkId:this.getChunkId_(t,n),chunkSize:this.getChunkSize_(t,n)};if("LIST"==i.chunkId)i.format=(0,r.unpackString)(t,n+8,n+12),this.head+=4,i.subChunks=this.getSubChunksIndex_(t);else{let t=i.chunkSize%2?i.chunkSize+1:i.chunkSize;this.head=n+8+t,i.chunkData={start:n+8,end:this.head}}return i}getChunkId_(t,n){return this.head+=4,(0,r.unpackString)(t,n,n+4)}getChunkSize_(t,n){return this.head+=4,(0,r.unpack)(t,this.uInt32,n+4)}}}}]);