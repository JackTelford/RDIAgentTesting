(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5704],
    {
        19346: function (t) {
            t.exports = ImageData;
        },
        66297: function (t, e, r) {
            let n = r(90489),
                i = r(19346);
            class f {
                constructor(t, e, { width: r, height: n, colorDepth: i, format: f }) {
                    if (
                        ((this.format = f),
                            (this.offset = e),
                            (this.depth = i),
                            (this.stride = (function (t) {
                                let e = t % 4;
                                return e ? t + 4 - e : t;
                            })((r * this.depth) / 8)),
                            (this.size = this.stride * n),
                            (this.data = t.slice(this.offset, this.offset + this.size)),
                            this.size !== this.data.byteLength)
                    )
                        throw Error("Truncated bitmap data");
                }
                get(t, e, r) {
                    let n = this.format.indexOf(r);
                    return 1 === this.depth
                        ? (this.data[e * this.stride + ((t / 8) | 0)] & (1 << (7 - (t % 8) * 1))) >> (7 - (t % 8) * 1)
                        : 2 === this.depth
                            ? (this.data[e * this.stride + ((t / 4) | 0)] & (3 << (6 - (t % 4) * 2))) >>> (6 - (t % 4) * 2)
                            : 4 === this.depth
                                ? (this.data[e * this.stride + ((t / 2) | 0)] & (15 << (4 - (t % 2) * 4))) >>> (4 - (t % 2) * 4)
                                : this.data[e * this.stride + (this.depth / 8) * t + n];
                }
            }
            t.exports = function (t, { width: e = 0, height: r = 0, icon: o = !1 } = {}) {
                let a, s, h, g, u;
                let l = n(t);
                o
                    ? ((a = l.getUint32(0, !0)), (s = (l.getUint32(4, !0) / 1) | 0), (h = (l.getUint32(8, !0) / 2) | 0), (g = l.getUint16(14, !0)), (u = l.getUint32(32, !0)))
                    : ((function (t) {
                        if (19778 !== t) throw Error(`Invalid magic byte 0x${t.toString(16)}`);
                    })(l.getUint16(0, !0)),
                        (a = 14 + l.getUint32(14, !0)),
                        (s = l.getUint32(18, !0)),
                        (h = l.getUint32(22, !0)),
                        (g = l.getUint16(28, !0)),
                        (u = l.getUint32(46, !0))),
                    0 === u && g <= 8 && (u = 1 << g);
                let d = 0 === s ? e : s,
                    p = 0 === h ? r : h,
                    c = new Uint8Array(l.buffer, l.byteOffset + a, l.byteLength - a);
                return Object.assign(
                    new i(
                        u
                            ? (function (t, { width: e, height: r, colorDepth: n, colorCount: i, icon: o }) {
                                if (8 !== n && 4 !== n && 2 !== n && 1 !== n) throw Error(`A color depth of ${n} is not supported`);
                                let a = new f(t, 0, { width: i, height: 1, colorDepth: 32, format: "BGRA" }),
                                    s = new f(t, a.offset + a.size, { width: e, height: r, colorDepth: n, format: "C" }),
                                    h = o ? new f(t, s.offset + s.size, { width: e, height: r, colorDepth: 1, format: "A" }) : null,
                                    g = new Uint8Array(e * r * 4),
                                    u = 0;
                                for (let t = 0; t < r; t++)
                                    for (let n = 0; n < e; n++) {
                                        let e = s.get(n, r - t - 1, "C");
                                        (g[u++] = a.get(e, 0, "R")), (g[u++] = a.get(e, 0, "G")), (g[u++] = a.get(e, 0, "B")), (g[u++] = h && h.get(n, r - t - 1, "A") ? 0 : 255);
                                    }
                                return new Uint8ClampedArray(g.buffer, g.byteOffset, g.byteLength);
                            })(c, { width: d, height: p, colorDepth: g, colorCount: u, icon: o })
                            : (function (t, { width: e, height: r, colorDepth: n, icon: i }) {
                                if (32 !== n && 24 !== n) throw Error(`A color depth of ${n} is not supported`);
                                let o = new f(t, 0, { width: e, height: r, colorDepth: n, format: "BGRA" }),
                                    a = 24 === n && i ? new f(t, o.offset + o.size, { width: e, height: r, colorDepth: 1, format: "A" }) : null,
                                    s = new Uint8Array(e * r * 4),
                                    h = 0;
                                for (let t = 0; t < r; t++)
                                    for (let i = 0; i < e; i++)
                                        (s[h++] = o.get(i, r - t - 1, "R")),
                                            (s[h++] = o.get(i, r - t - 1, "G")),
                                            (s[h++] = o.get(i, r - t - 1, "B")),
                                            32 === n ? (s[h++] = o.get(i, r - t - 1, "A")) : (s[h++] = a && a.get(i, r - t - 1, "A") ? 0 : 255);
                                return new Uint8ClampedArray(s.buffer, s.byteOffset, s.byteLength);
                            })(c, { width: d, height: p, colorDepth: g, icon: o }),
                        d,
                        p
                    ),
                    { colorDepth: g }
                );
            };
        },
        95704: function (t, e, r) {
            let n = r(90489),
                i = r(66297),
                f = r(19346);
            function o(t, e) {
                return 2303741511 === t.getUint32(e + 0) && 218765834 === t.getUint32(e + 4);
            }
            function a(t, e) {
                let r = t.getUint8(e + 24),
                    n = t.getUint8(e + 25);
                if (0 === n) return 1 * r;
                if (2 === n) return 3 * r;
                if (3 === n) return 1 * r;
                if (4 === n) return 2 * r;
                if (6 === n) return 4 * r;
                throw Error("Invalid PNG colorType");
            }
            function s(t, e) {
                return t.getUint32(e + 16, !1);
            }
            function h(t, e) {
                return t.getUint32(e + 20, !1);
            }
            t.exports = function (t) {
                let e = n(t);
                if (e.byteLength < 6) throw Error("Truncated header");
                if (o(e, 0)) return [{ bpp: a(e, 0), data: new Uint8Array(e.buffer, e.byteOffset, e.byteLength), height: h(e, 0), hotspot: null, type: "png", width: s(e, 0) }];
                if (0 !== e.getUint16(0, !0)) throw Error("Invalid magic bytes");
                let r = e.getUint16(2, !0);
                if (1 !== r && 2 !== r) throw Error("Invalid image type");
                let g = e.getUint16(4, !0);
                if (e.byteLength < 6 + 16 * g) throw Error("Truncated image list");
                return Array.from({ length: g }, (t, n) => {
                    let g = e.getUint8(6 + 16 * n + 0),
                        u = e.getUint8(6 + 16 * n + 1),
                        l = e.getUint32(6 + 16 * n + 8, !0),
                        d = e.getUint32(6 + 16 * n + 12, !0),
                        p = 2 !== r ? null : { x: e.getUint16(6 + 16 * n + 4, !0), y: e.getUint16(6 + 16 * n + 6, !0) };
                    if (o(e, d)) return { bpp: a(e, d), data: new Uint8Array(e.buffer, e.byteOffset + d, l), height: h(e, d), hotspot: p, type: "png", width: s(e, d) };
                    let c = i(new Uint8Array(e.buffer, e.byteOffset + d, l), { width: g, height: u, icon: !0 }),
                        y = { bpp: c.colorDepth, hotspot: p, type: "bmp" };
                    return Object.assign(new f(c.data, c.width, c.height), y);
                });
            };
        },
        90489: function (t) {
            t.exports = function (t) {
                if (t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray) return new DataView(t.buffer, t.byteOffset, t.byteLength);
                if (t instanceof ArrayBuffer) return new DataView(t);
                throw TypeError("Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray");
            };
        },
    },
]);



// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5704],{19346:function(t){t.exports=ImageData},66297:function(t,e,r){let n=r(90489),i=r(19346);class f{constructor(t,e,{width:r,height:n,colorDepth:i,format:f}){if(this.format=f,this.offset=e,this.depth=i,this.stride=function(t){let e=t%4;return e?t+4-e:t}(r*this.depth/8),this.size=this.stride*n,this.data=t.slice(this.offset,this.offset+this.size),this.size!==this.data.byteLength)throw Error("Truncated bitmap data")}get(t,e,r){let n=this.format.indexOf(r);return 1===this.depth?(this.data[e*this.stride+(t/8|0)]&1<<7-t%8*1)>>7-t%8*1:2===this.depth?(this.data[e*this.stride+(t/4|0)]&3<<6-t%4*2)>>>6-t%4*2:4===this.depth?(this.data[e*this.stride+(t/2|0)]&15<<4-t%2*4)>>>4-t%2*4:this.data[e*this.stride+this.depth/8*t+n]}}t.exports=function(t,{width:e=0,height:r=0,icon:o=!1}={}){let a,s,h,g,u;let l=n(t);o?(a=l.getUint32(0,!0),s=l.getUint32(4,!0)/1|0,h=l.getUint32(8,!0)/2|0,g=l.getUint16(14,!0),u=l.getUint32(32,!0)):(function(t){if(19778!==t)throw Error(`Invalid magic byte 0x${t.toString(16)}`)}(l.getUint16(0,!0)),a=14+l.getUint32(14,!0),s=l.getUint32(18,!0),h=l.getUint32(22,!0),g=l.getUint16(28,!0),u=l.getUint32(46,!0)),0===u&&g<=8&&(u=1<<g);let d=0===s?e:s,p=0===h?r:h,c=new Uint8Array(l.buffer,l.byteOffset+a,l.byteLength-a);return Object.assign(new i(u?function(t,{width:e,height:r,colorDepth:n,colorCount:i,icon:o}){if(8!==n&&4!==n&&2!==n&&1!==n)throw Error(`A color depth of ${n} is not supported`);let a=new f(t,0,{width:i,height:1,colorDepth:32,format:"BGRA"}),s=new f(t,a.offset+a.size,{width:e,height:r,colorDepth:n,format:"C"}),h=o?new f(t,s.offset+s.size,{width:e,height:r,colorDepth:1,format:"A"}):null,g=new Uint8Array(e*r*4),u=0;for(let t=0;t<r;t++)for(let n=0;n<e;n++){let e=s.get(n,r-t-1,"C");g[u++]=a.get(e,0,"R"),g[u++]=a.get(e,0,"G"),g[u++]=a.get(e,0,"B"),g[u++]=h&&h.get(n,r-t-1,"A")?0:255}return new Uint8ClampedArray(g.buffer,g.byteOffset,g.byteLength)}(c,{width:d,height:p,colorDepth:g,colorCount:u,icon:o}):function(t,{width:e,height:r,colorDepth:n,icon:i}){if(32!==n&&24!==n)throw Error(`A color depth of ${n} is not supported`);let o=new f(t,0,{width:e,height:r,colorDepth:n,format:"BGRA"}),a=24===n&&i?new f(t,o.offset+o.size,{width:e,height:r,colorDepth:1,format:"A"}):null,s=new Uint8Array(e*r*4),h=0;for(let t=0;t<r;t++)for(let i=0;i<e;i++)s[h++]=o.get(i,r-t-1,"R"),s[h++]=o.get(i,r-t-1,"G"),s[h++]=o.get(i,r-t-1,"B"),32===n?s[h++]=o.get(i,r-t-1,"A"):s[h++]=a&&a.get(i,r-t-1,"A")?0:255;return new Uint8ClampedArray(s.buffer,s.byteOffset,s.byteLength)}(c,{width:d,height:p,colorDepth:g,icon:o}),d,p),{colorDepth:g})}},95704:function(t,e,r){let n=r(90489),i=r(66297),f=r(19346);function o(t,e){return 2303741511===t.getUint32(e+0)&&218765834===t.getUint32(e+4)}function a(t,e){let r=t.getUint8(e+24),n=t.getUint8(e+25);if(0===n)return 1*r;if(2===n)return 3*r;if(3===n)return 1*r;if(4===n)return 2*r;if(6===n)return 4*r;throw Error("Invalid PNG colorType")}function s(t,e){return t.getUint32(e+16,!1)}function h(t,e){return t.getUint32(e+20,!1)}t.exports=function(t){let e=n(t);if(e.byteLength<6)throw Error("Truncated header");if(o(e,0))return[{bpp:a(e,0),data:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),height:h(e,0),hotspot:null,type:"png",width:s(e,0)}];if(0!==e.getUint16(0,!0))throw Error("Invalid magic bytes");let r=e.getUint16(2,!0);if(1!==r&&2!==r)throw Error("Invalid image type");let g=e.getUint16(4,!0);if(e.byteLength<6+16*g)throw Error("Truncated image list");return Array.from({length:g},(t,n)=>{let g=e.getUint8(6+16*n+0),u=e.getUint8(6+16*n+1),l=e.getUint32(6+16*n+8,!0),d=e.getUint32(6+16*n+12,!0),p=2!==r?null:{x:e.getUint16(6+16*n+4,!0),y:e.getUint16(6+16*n+6,!0)};if(o(e,d))return{bpp:a(e,d),data:new Uint8Array(e.buffer,e.byteOffset+d,l),height:h(e,d),hotspot:p,type:"png",width:s(e,d)};let c=i(new Uint8Array(e.buffer,e.byteOffset+d,l),{width:g,height:u,icon:!0}),y={bpp:c.colorDepth,hotspot:p,type:"bmp"};return Object.assign(new f(c.data,c.width,c.height),y)})}},90489:function(t){t.exports=function(t){if(t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray)return new DataView(t.buffer,t.byteOffset,t.byteLength);if(t instanceof ArrayBuffer)return new DataView(t);throw TypeError("Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray")}}}]);