"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3257],
    {
        44422: function (e, t, r) {
            var n,
                a,
                o,
                s,
                i,
                u,
                p,
                l = r(48764).Buffer;
            function c() {
                (this.table = new Uint16Array(16)), (this.trans = new Uint16Array(288));
            }
            function h(e, t) {
                (this.source = e), (this.sourceIndex = 0), (this.tag = 0), (this.bitcount = 0), (this.dest = t), (this.destLen = 0), (this.ltree = new c()), (this.dtree = new c());
            }
            String.prototype.codePointAt ||
                ((n = (function () {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            r = t(e, e, e) && t;
                    } catch (e) { }
                    return r;
                })()),
                    (a = function (e) {
                        if (this == null) throw TypeError();
                        var t,
                            r = String(this),
                            n = r.length,
                            a = e ? Number(e) : 0;
                        if ((a != a && (a = 0), !(a < 0) && !(a >= n))) {
                            var o = r.charCodeAt(a);
                            return o >= 55296 && o <= 56319 && n > a + 1 && (t = r.charCodeAt(a + 1)) >= 56320 && t <= 57343 ? (o - 55296) * 1024 + t - 56320 + 65536 : o;
                        }
                    }),
                    n ? n(String.prototype, "codePointAt", { value: a, configurable: !0, writable: !0 }) : (String.prototype.codePointAt = a));
            var f = new c(),
                d = new c(),
                g = new Uint8Array(30),
                v = new Uint16Array(30),
                m = new Uint8Array(30),
                y = new Uint16Array(30),
                b = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                x = new c(),
                S = new Uint8Array(320);
            function T(e, t, r, n) {
                var a, o;
                for (a = 0; a < r; ++a) e[a] = 0;
                for (a = 0; a < 30 - r; ++a) e[a + r] = (a / r) | 0;
                for (o = n, a = 0; a < 30; ++a) (t[a] = o), (o += 1 << e[a]);
            }
            var k = new Uint16Array(16);
            function U(e, t, r, n) {
                var a, o;
                for (a = 0; a < 16; ++a) e.table[a] = 0;
                for (a = 0; a < n; ++a) e.table[t[r + a]]++;
                for (o = 0, e.table[0] = 0, a = 0; a < 16; ++a) (k[a] = o), (o += e.table[a]);
                for (a = 0; a < n; ++a) t[r + a] && (e.trans[k[t[r + a]]++] = a);
            }
            function O(e, t, r) {
                if (!t) return r;
                for (; e.bitcount < 24;) (e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
                var n = e.tag & (65535 >>> (16 - t));
                return (e.tag >>>= t), (e.bitcount -= t), n + r;
            }
            function E(e, t) {
                for (; e.bitcount < 24;) (e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
                var r = 0,
                    n = 0,
                    a = 0,
                    o = e.tag;
                do (n = 2 * n + (1 & o)), (o >>>= 1), ++a, (r += t.table[a]), (n -= t.table[a]);
                while (n >= 0);
                return (e.tag = o), (e.bitcount -= a), t.trans[r + n];
            }
            function R(e, t, r) {
                for (; ;) {
                    var n,
                        a,
                        o,
                        s,
                        i = E(e, t);
                    if (256 === i) return 0;
                    if (i < 256) e.dest[e.destLen++] = i;
                    else for (i -= 257, n = O(e, g[i], v[i]), a = E(e, r), s = o = e.destLen - O(e, m[a], y[a]); s < o + n; ++s) e.dest[e.destLen++] = e.dest[s];
                }
            }
            !(function (e, t) {
                var r;
                for (r = 0; r < 7; ++r) e.table[r] = 0;
                for (r = 0, e.table[7] = 24, e.table[8] = 152, e.table[9] = 112; r < 24; ++r) e.trans[r] = 256 + r;
                for (r = 0; r < 144; ++r) e.trans[24 + r] = r;
                for (r = 0; r < 8; ++r) e.trans[168 + r] = 280 + r;
                for (r = 0; r < 112; ++r) e.trans[176 + r] = 144 + r;
                for (r = 0; r < 5; ++r) t.table[r] = 0;
                for (r = 0, t.table[5] = 32; r < 32; ++r) t.trans[r] = r;
            })(f, d),
                T(g, v, 4, 3),
                T(m, y, 2, 1),
                (g[28] = 0),
                (v[28] = 258);
            var C = function (e, t) {
                var r,
                    n,
                    a = new h(e, t);
                do {
                    switch (
                    ((r = (function (e) {
                        e.bitcount-- || ((e.tag = e.source[e.sourceIndex++]), (e.bitcount = 7));
                        var t = 1 & e.tag;
                        return (e.tag >>>= 1), t;
                    })(a)),
                        O(a, 2, 0))
                    ) {
                        case 0:
                            n = (function (e) {
                                for (var t, r; e.bitcount > 8;) e.sourceIndex--, (e.bitcount -= 8);
                                if ((t = 256 * (t = e.source[e.sourceIndex + 1]) + e.source[e.sourceIndex]) !== (65535 & ~(256 * e.source[e.sourceIndex + 3] + e.source[e.sourceIndex + 2]))) return -3;
                                for (e.sourceIndex += 4, r = t; r; --r) e.dest[e.destLen++] = e.source[e.sourceIndex++];
                                return (e.bitcount = 0), 0;
                            })(a);
                            break;
                        case 1:
                            n = R(a, f, d);
                            break;
                        case 2:
                            !(function (e, t, r) {
                                for (s = 0, n = O(e, 5, 257), a = O(e, 5, 1), o = O(e, 4, 4); s < 19; ++s) S[s] = 0;
                                for (s = 0; s < o; ++s) {
                                    var n,
                                        a,
                                        o,
                                        s,
                                        i,
                                        u,
                                        p = O(e, 3, 0);
                                    S[b[s]] = p;
                                }
                                for (U(x, S, 0, 19), i = 0; i < n + a;) {
                                    var l = E(e, x);
                                    switch (l) {
                                        case 16:
                                            var c = S[i - 1];
                                            for (u = O(e, 2, 3); u; --u) S[i++] = c;
                                            break;
                                        case 17:
                                            for (u = O(e, 3, 3); u; --u) S[i++] = 0;
                                            break;
                                        case 18:
                                            for (u = O(e, 7, 11); u; --u) S[i++] = 0;
                                            break;
                                        default:
                                            S[i++] = l;
                                    }
                                }
                                U(t, S, 0, n), U(r, S, n, a);
                            })(a, a.ltree, a.dtree),
                                (n = R(a, a.ltree, a.dtree));
                            break;
                        default:
                            n = -3;
                    }
                    if (0 !== n) throw Error("Data error");
                } while (!r);
                return a.destLen < a.dest.length ? ("function" == typeof a.dest.slice ? a.dest.slice(0, a.destLen) : a.dest.subarray(0, a.destLen)) : a.dest;
            };
            function L(e, t, r, n, a) {
                return Math.pow(1 - a, 3) * e + 3 * Math.pow(1 - a, 2) * a * t + 3 * (1 - a) * Math.pow(a, 2) * r + Math.pow(a, 3) * n;
            }
            function D() {
                (this.x1 = Number.NaN), (this.y1 = Number.NaN), (this.x2 = Number.NaN), (this.y2 = Number.NaN);
            }
            function w() {
                (this.commands = []), (this.fill = "black"), (this.stroke = null), (this.strokeWidth = 1);
            }
            function I(e, t) {
                e ||
                    (function (e) {
                        throw Error(e);
                    })(t);
            }
            (D.prototype.isEmpty = function () {
                return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
            }),
                (D.prototype.addPoint = function (e, t) {
                    "number" == typeof e && ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = e), (this.x2 = e)), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)),
                        "number" == typeof t && ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = t), (this.y2 = t)), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
                }),
                (D.prototype.addX = function (e) {
                    this.addPoint(e, null);
                }),
                (D.prototype.addY = function (e) {
                    this.addPoint(null, e);
                }),
                (D.prototype.addBezier = function (e, t, r, n, a, o, s, i) {
                    var u = [e, t],
                        p = [r, n],
                        l = [a, o],
                        c = [s, i];
                    this.addPoint(e, t), this.addPoint(s, i);
                    for (var h = 0; h <= 1; h++) {
                        var f = 6 * u[h] - 12 * p[h] + 6 * l[h],
                            d = -3 * u[h] + 9 * p[h] - 9 * l[h] + 3 * c[h],
                            g = 3 * p[h] - 3 * u[h];
                        if (0 === d) {
                            if (0 === f) continue;
                            var v = -g / f;
                            0 < v && v < 1 && (0 === h && this.addX(L(u[h], p[h], l[h], c[h], v)), 1 === h && this.addY(L(u[h], p[h], l[h], c[h], v)));
                            continue;
                        }
                        var m = Math.pow(f, 2) - 4 * g * d;
                        if (!(m < 0)) {
                            var y = (-f + Math.sqrt(m)) / (2 * d);
                            0 < y && y < 1 && (0 === h && this.addX(L(u[h], p[h], l[h], c[h], y)), 1 === h && this.addY(L(u[h], p[h], l[h], c[h], y)));
                            var b = (-f - Math.sqrt(m)) / (2 * d);
                            0 < b && b < 1 && (0 === h && this.addX(L(u[h], p[h], l[h], c[h], b)), 1 === h && this.addY(L(u[h], p[h], l[h], c[h], b)));
                        }
                    }
                }),
                (D.prototype.addQuad = function (e, t, r, n, a, o) {
                    var s = e + (2 / 3) * (r - e),
                        i = t + (2 / 3) * (n - t);
                    this.addBezier(e, t, s, i, s + (1 / 3) * (a - e), i + (1 / 3) * (o - t), a, o);
                }),
                (w.prototype.moveTo = function (e, t) {
                    this.commands.push({ type: "M", x: e, y: t });
                }),
                (w.prototype.lineTo = function (e, t) {
                    this.commands.push({ type: "L", x: e, y: t });
                }),
                (w.prototype.curveTo = w.prototype.bezierCurveTo = function (e, t, r, n, a, o) {
                    this.commands.push({ type: "C", x1: e, y1: t, x2: r, y2: n, x: a, y: o });
                }),
                (w.prototype.quadTo = w.prototype.quadraticCurveTo = function (e, t, r, n) {
                    this.commands.push({ type: "Q", x1: e, y1: t, x: r, y: n });
                }),
                (w.prototype.close = w.prototype.closePath = function () {
                    this.commands.push({ type: "Z" });
                }),
                (w.prototype.extend = function (e) {
                    if (e.commands) e = e.commands;
                    else if (e instanceof D) {
                        var t = e;
                        this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), this.close();
                        return;
                    }
                    Array.prototype.push.apply(this.commands, e);
                }),
                (w.prototype.getBoundingBox = function () {
                    for (var e = new D(), t = 0, r = 0, n = 0, a = 0, o = 0; o < this.commands.length; o++) {
                        var s = this.commands[o];
                        switch (s.type) {
                            case "M":
                                e.addPoint(s.x, s.y), (t = n = s.x), (r = a = s.y);
                                break;
                            case "L":
                                e.addPoint(s.x, s.y), (n = s.x), (a = s.y);
                                break;
                            case "Q":
                                e.addQuad(n, a, s.x1, s.y1, s.x, s.y), (n = s.x), (a = s.y);
                                break;
                            case "C":
                                e.addBezier(n, a, s.x1, s.y1, s.x2, s.y2, s.x, s.y), (n = s.x), (a = s.y);
                                break;
                            case "Z":
                                (n = t), (a = r);
                                break;
                            default:
                                throw Error("Unexpected path command " + s.type);
                        }
                    }
                    return e.isEmpty() && e.addPoint(0, 0), e;
                }),
                (w.prototype.draw = function (e) {
                    e.beginPath();
                    for (var t = 0; t < this.commands.length; t += 1) {
                        var r = this.commands[t];
                        "M" === r.type
                            ? e.moveTo(r.x, r.y)
                            : "L" === r.type
                                ? e.lineTo(r.x, r.y)
                                : "C" === r.type
                                    ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y)
                                    : "Q" === r.type
                                        ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y)
                                        : "Z" === r.type && e.closePath();
                    }
                    this.fill && ((e.fillStyle = this.fill), e.fill()), this.stroke && ((e.strokeStyle = this.stroke), (e.lineWidth = this.strokeWidth), e.stroke());
                }),
                (w.prototype.toPathData = function (e) {
                    function t() {
                        for (var t = arguments, r = "", n = 0; n < arguments.length; n += 1) {
                            var a = t[n];
                            a >= 0 && n > 0 && (r += " "), (r += Math.round(a) === a ? "" + Math.round(a) : a.toFixed(e));
                        }
                        return r;
                    }
                    e = void 0 !== e ? e : 2;
                    for (var r = "", n = 0; n < this.commands.length; n += 1) {
                        var a = this.commands[n];
                        "M" === a.type
                            ? (r += "M" + t(a.x, a.y))
                            : "L" === a.type
                                ? (r += "L" + t(a.x, a.y))
                                : "C" === a.type
                                    ? (r += "C" + t(a.x1, a.y1, a.x2, a.y2, a.x, a.y))
                                    : "Q" === a.type
                                        ? (r += "Q" + t(a.x1, a.y1, a.x, a.y))
                                        : "Z" === a.type && (r += "Z");
                    }
                    return r;
                }),
                (w.prototype.toSVG = function (e) {
                    var t = '<path d="';
                    return (
                        (t += this.toPathData(e) + '"'),
                        this.fill && "black" !== this.fill && (null === this.fill ? (t += ' fill="none"') : (t += ' fill="' + this.fill + '"')),
                        this.stroke && (t += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'),
                        (t += "/>")
                    );
                }),
                (w.prototype.toDOMElement = function (e) {
                    var t = this.toPathData(e),
                        r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return r.setAttribute("d", t), r;
                });
            var M = { argument: I, assert: I },
                G = {},
                B = {},
                F = {};
            function A(e) {
                return function () {
                    return e;
                };
            }
            (B.BYTE = function (e) {
                return M.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."), [e];
            }),
                (F.BYTE = A(1)),
                (B.CHAR = function (e) {
                    return [e.charCodeAt(0)];
                }),
                (F.CHAR = A(1)),
                (B.CHARARRAY = function (e) {
                    void 0 === e && ((e = ""), console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));
                    for (var t = [], r = 0; r < e.length; r += 1) t[r] = e.charCodeAt(r);
                    return t;
                }),
                (F.CHARARRAY = function (e) {
                    return void 0 === e ? 0 : e.length;
                }),
                (B.USHORT = function (e) {
                    return [(e >> 8) & 255, 255 & e];
                }),
                (F.USHORT = A(2)),
                (B.SHORT = function (e) {
                    return e >= 32768 && (e = -(65536 - e)), [(e >> 8) & 255, 255 & e];
                }),
                (F.SHORT = A(2)),
                (B.UINT24 = function (e) {
                    return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
                }),
                (F.UINT24 = A(3)),
                (B.ULONG = function (e) {
                    return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
                }),
                (F.ULONG = A(4)),
                (B.LONG = function (e) {
                    return e >= 2147483648 && (e = -(4294967296 - e)), [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
                }),
                (F.LONG = A(4)),
                (B.FIXED = B.ULONG),
                (F.FIXED = F.ULONG),
                (B.FWORD = B.SHORT),
                (F.FWORD = F.SHORT),
                (B.UFWORD = B.USHORT),
                (F.UFWORD = F.USHORT),
                (B.LONGDATETIME = function (e) {
                    return [0, 0, 0, 0, (e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
                }),
                (F.LONGDATETIME = A(8)),
                (B.TAG = function (e) {
                    return M.argument(4 === e.length, "Tag should be exactly 4 ASCII characters."), [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)];
                }),
                (F.TAG = A(4)),
                (B.Card8 = B.BYTE),
                (F.Card8 = F.BYTE),
                (B.Card16 = B.USHORT),
                (F.Card16 = F.USHORT),
                (B.OffSize = B.BYTE),
                (F.OffSize = F.BYTE),
                (B.SID = B.USHORT),
                (F.SID = F.USHORT),
                (B.NUMBER = function (e) {
                    return e >= -107 && e <= 107
                        ? [e + 139]
                        : e >= 108 && e <= 1131
                            ? [((e -= 108) >> 8) + 247, 255 & e]
                            : e >= -1131 && e <= -108
                                ? [((e = -e - 108) >> 8) + 251, 255 & e]
                                : e >= -32768 && e <= 32767
                                    ? B.NUMBER16(e)
                                    : B.NUMBER32(e);
                }),
                (F.NUMBER = function (e) {
                    return B.NUMBER(e).length;
                }),
                (B.NUMBER16 = function (e) {
                    return [28, (e >> 8) & 255, 255 & e];
                }),
                (F.NUMBER16 = A(3)),
                (B.NUMBER32 = function (e) {
                    return [29, (e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
                }),
                (F.NUMBER32 = A(5)),
                (B.REAL = function (e) {
                    var t = e.toString(),
                        r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
                    if (r) {
                        var n = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
                        t = (Math.round(e * n) / n).toString();
                    }
                    for (var a = "", o = 0, s = t.length; o < s; o += 1) {
                        var i = t[o];
                        "e" === i ? (a += "-" === t[++o] ? "c" : "b") : "." === i ? (a += "a") : "-" === i ? (a += "e") : (a += i);
                    }
                    a += 1 & a.length ? "f" : "ff";
                    for (var u = [30], p = 0, l = a.length; p < l; p += 2) u.push(parseInt(a.substr(p, 2), 16));
                    return u;
                }),
                (F.REAL = function (e) {
                    return B.REAL(e).length;
                }),
                (B.NAME = B.CHARARRAY),
                (F.NAME = F.CHARARRAY),
                (B.STRING = B.CHARARRAY),
                (F.STRING = F.CHARARRAY),
                (G.UTF8 = function (e, t, r) {
                    for (var n = [], a = 0; a < r; a++, t += 1) n[a] = e.getUint8(t);
                    return String.fromCharCode.apply(null, n);
                }),
                (G.UTF16 = function (e, t, r) {
                    for (var n = [], a = r / 2, o = 0; o < a; o++, t += 2) n[o] = e.getUint16(t);
                    return String.fromCharCode.apply(null, n);
                }),
                (B.UTF16 = function (e) {
                    for (var t = [], r = 0; r < e.length; r += 1) {
                        var n = e.charCodeAt(r);
                        (t[t.length] = (n >> 8) & 255), (t[t.length] = 255 & n);
                    }
                    return t;
                }),
                (F.UTF16 = function (e) {
                    return 2 * e.length;
                });
            var P = {
                "x-mac-croatian":
                    "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ…\xa0\xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊\xa9⁄€‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ",
                "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0Ґ\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5ґЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
                "x-mac-gaelic":
                    "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8Ḃ\xb1≤≥ḃĊċḊḋḞḟĠġṀ\xe6\xf8ṁṖṗɼƒſṠ\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’ṡẛ\xffŸṪ€‹›Ŷŷṫ\xb7Ỳỳ⁊\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4♣\xd2\xda\xdb\xd9ı\xdd\xfdŴŵẄẅẀẁẂẃ",
                "x-mac-greek":
                    "\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6€\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0\xb7Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb…\xa0ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xad",
                "x-mac-icelandic":
                    "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
                "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xb0ᒡᒥᒦ•\xb6ᒧ\xae\xa9™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xa0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
                "x-mac-ce":
                    "\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb…\xa0ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ",
                macintosh:
                    "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
                "x-mac-romanian":
                    "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂȘ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăș\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›Țț‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
                "x-mac-turkish":
                    "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ˆ˜\xaf˘˙˚\xb8˝˛ˇ",
            };
            G.MACSTRING = function (e, t, r, n) {
                var a = P[n];
                if (void 0 !== a) {
                    for (var o = "", s = 0; s < r; s++) {
                        var i = e.getUint8(t + s);
                        i <= 127 ? (o += String.fromCharCode(i)) : (o += a[127 & i]);
                    }
                    return o;
                }
            };
            var N = "function" == typeof WeakMap && new WeakMap(),
                H = function (e) {
                    if (!o) for (var t in ((o = {}), P)) o[t] = new String(t);
                    var r = o[e];
                    if (void 0 !== r) {
                        if (N) {
                            var n = N.get(r);
                            if (void 0 !== n) return n;
                        }
                        var a = P[e];
                        if (void 0 !== a) {
                            for (var s = {}, i = 0; i < a.length; i++) s[a.charCodeAt(i)] = i + 128;
                            return N && N.set(r, s), s;
                        }
                    }
                };
            function z(e) {
                return e >= -128 && e <= 127;
            }
            (B.MACSTRING = function (e, t) {
                var r = H(t);
                if (void 0 !== r) {
                    for (var n = [], a = 0; a < e.length; a++) {
                        var o = e.charCodeAt(a);
                        if (o >= 128 && void 0 === (o = r[o])) return;
                        n[a] = o;
                    }
                    return n;
                }
            }),
                (F.MACSTRING = function (e, t) {
                    var r = B.MACSTRING(e, t);
                    return void 0 !== r ? r.length : 0;
                }),
                (B.VARDELTAS = function (e) {
                    for (var t = 0, r = []; t < e.length;) {
                        var n = e[t];
                        t =
                            0 === n
                                ? (function (e, t, r) {
                                    for (var n = 0, a = e.length; t < a && n < 64 && 0 === e[t];) ++t, ++n;
                                    return r.push(128 | (n - 1)), t;
                                })(e, t, r)
                                : n >= -128 && n <= 127
                                    ? (function (e, t, r) {
                                        for (var n = 0, a = e.length, o = t; o < a && n < 64;) {
                                            var s = e[o];
                                            if (!z(s) || (0 === s && o + 1 < a && 0 === e[o + 1])) break;
                                            ++o, ++n;
                                        }
                                        r.push(n - 1);
                                        for (var i = t; i < o; ++i) r.push((e[i] + 256) & 255);
                                        return o;
                                    })(e, t, r)
                                    : (function (e, t, r) {
                                        for (var n = 0, a = e.length, o = t; o < a && n < 64;) {
                                            var s = e[o];
                                            if (0 === s || (z(s) && o + 1 < a && z(e[o + 1]))) break;
                                            ++o, ++n;
                                        }
                                        r.push(64 | (n - 1));
                                        for (var i = t; i < o; ++i) {
                                            var u = e[i];
                                            r.push(((u + 65536) >> 8) & 255, (u + 256) & 255);
                                        }
                                        return o;
                                    })(e, t, r);
                    }
                    return r;
                }),
                (B.INDEX = function (e) {
                    for (var t = 1, r = [1], n = [], a = 0; a < e.length; a += 1) {
                        var o = B.OBJECT(e[a]);
                        Array.prototype.push.apply(n, o), (t += o.length), r.push(t);
                    }
                    if (0 === n.length) return [0, 0];
                    for (var s = [], i = (1 + Math.floor(Math.log(t) / Math.log(2)) / 8) | 0, u = [void 0, B.BYTE, B.USHORT, B.UINT24, B.ULONG][i], p = 0; p < r.length; p += 1) {
                        var l = u(r[p]);
                        Array.prototype.push.apply(s, l);
                    }
                    return Array.prototype.concat(B.Card16(e.length), B.OffSize(i), s, n);
                }),
                (F.INDEX = function (e) {
                    return B.INDEX(e).length;
                }),
                (B.DICT = function (e) {
                    for (var t = [], r = Object.keys(e), n = r.length, a = 0; a < n; a += 1) {
                        var o = parseInt(r[a], 0),
                            s = e[o];
                        t = (t = t.concat(B.OPERAND(s.value, s.type))).concat(B.OPERATOR(o));
                    }
                    return t;
                }),
                (F.DICT = function (e) {
                    return B.DICT(e).length;
                }),
                (B.OPERATOR = function (e) {
                    return e < 1200 ? [e] : [12, e - 1200];
                }),
                (B.OPERAND = function (e, t) {
                    var r = [];
                    if (Array.isArray(t)) for (var n = 0; n < t.length; n += 1) M.argument(e.length === t.length, "Not enough arguments given for type" + t), (r = r.concat(B.OPERAND(e[n], t[n])));
                    else if ("SID" === t) r = r.concat(B.NUMBER(e));
                    else if ("offset" === t) r = r.concat(B.NUMBER32(e));
                    else if ("number" === t) r = r.concat(B.NUMBER(e));
                    else if ("real" === t) r = r.concat(B.REAL(e));
                    else throw Error("Unknown operand type " + t);
                    return r;
                }),
                (B.OP = B.BYTE),
                (F.OP = F.BYTE);
            var W = "function" == typeof WeakMap && new WeakMap();
            function q(e, t, r) {
                if (t.length && ("coverageFormat" !== t[0].name || 1 === t[0].value))
                    for (var n = 0; n < t.length; n += 1) {
                        var a = t[n];
                        this[a.name] = a.value;
                    }
                if (((this.tableName = e), (this.fields = t), r))
                    for (var o = Object.keys(r), s = 0; s < o.length; s += 1) {
                        var i = o[s],
                            u = r[i];
                        void 0 !== this[i] && (this[i] = u);
                    }
            }
            function _(e, t, r) {
                void 0 === r && (r = t.length);
                var n = Array(t.length + 1);
                n[0] = { name: e + "Count", type: "USHORT", value: r };
                for (var a = 0; a < t.length; a++) n[a + 1] = { name: e + a, type: "USHORT", value: t[a] };
                return n;
            }
            function X(e, t, r) {
                var n = t.length,
                    a = Array(n + 1);
                a[0] = { name: e + "Count", type: "USHORT", value: n };
                for (var o = 0; o < n; o++) a[o + 1] = { name: e + o, type: "TABLE", value: r(t[o], o) };
                return a;
            }
            function V(e, t, r) {
                var n = t.length,
                    a = [];
                a[0] = { name: e + "Count", type: "USHORT", value: n };
                for (var o = 0; o < n; o++) a = a.concat(r(t[o], o));
                return a;
            }
            function Y(e) {
                1 === e.format
                    ? q.call(this, "coverageTable", [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(_("glyph", e.glyphs)))
                    : 2 === e.format
                        ? q.call(
                            this,
                            "coverageTable",
                            [{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(
                                V("rangeRecord", e.ranges, function (e) {
                                    return [
                                        { name: "startGlyphID", type: "USHORT", value: e.start },
                                        { name: "endGlyphID", type: "USHORT", value: e.end },
                                        { name: "startCoverageIndex", type: "USHORT", value: e.index },
                                    ];
                                })
                            )
                        )
                        : M.assert(!1, "Coverage format must be 1 or 2.");
            }
            function j(e) {
                q.call(
                    this,
                    "scriptListTable",
                    V("scriptRecord", e, function (e, t) {
                        var r = e.script,
                            n = r.defaultLangSys;
                        return (
                            M.assert(!!n, "Unable to write GSUB: script " + e.tag + " has no default language system."),
                            [
                                { name: "scriptTag" + t, type: "TAG", value: e.tag },
                                {
                                    name: "script" + t,
                                    type: "TABLE",
                                    value: new q(
                                        "scriptTable",
                                        [
                                            {
                                                name: "defaultLangSys",
                                                type: "TABLE",
                                                value: new q(
                                                    "defaultLangSys",
                                                    [
                                                        { name: "lookupOrder", type: "USHORT", value: 0 },
                                                        { name: "reqFeatureIndex", type: "USHORT", value: n.reqFeatureIndex },
                                                    ].concat(_("featureIndex", n.featureIndexes))
                                                ),
                                            },
                                        ].concat(
                                            V("langSys", r.langSysRecords, function (e, t) {
                                                var r = e.langSys;
                                                return [
                                                    { name: "langSysTag" + t, type: "TAG", value: e.tag },
                                                    {
                                                        name: "langSys" + t,
                                                        type: "TABLE",
                                                        value: new q(
                                                            "langSys",
                                                            [
                                                                { name: "lookupOrder", type: "USHORT", value: 0 },
                                                                { name: "reqFeatureIndex", type: "USHORT", value: r.reqFeatureIndex },
                                                            ].concat(_("featureIndex", r.featureIndexes))
                                                        ),
                                                    },
                                                ];
                                            })
                                        )
                                    ),
                                },
                            ]
                        );
                    })
                );
            }
            function Z(e) {
                q.call(
                    this,
                    "featureListTable",
                    V("featureRecord", e, function (e, t) {
                        var r = e.feature;
                        return [
                            { name: "featureTag" + t, type: "TAG", value: e.tag },
                            { name: "feature" + t, type: "TABLE", value: new q("featureTable", [{ name: "featureParams", type: "USHORT", value: r.featureParams }].concat(_("lookupListIndex", r.lookupListIndexes))) },
                        ];
                    })
                );
            }
            function Q(e, t) {
                q.call(
                    this,
                    "lookupListTable",
                    X("lookup", e, function (e) {
                        var r = t[e.lookupType];
                        return (
                            M.assert(!!r, "Unable to write GSUB lookup type " + e.lookupType + " tables."),
                            new q(
                                "lookupTable",
                                [
                                    { name: "lookupType", type: "USHORT", value: e.lookupType },
                                    { name: "lookupFlag", type: "USHORT", value: e.lookupFlag },
                                ].concat(X("subtable", e.subtables, r))
                            )
                        );
                    })
                );
            }
            (B.CHARSTRING = function (e) {
                if (W) {
                    var t = W.get(e);
                    if (void 0 !== t) return t;
                }
                for (var r = [], n = e.length, a = 0; a < n; a += 1) {
                    var o = e[a];
                    r = r.concat(B[o.type](o.value));
                }
                return W && W.set(e, r), r;
            }),
                (F.CHARSTRING = function (e) {
                    return B.CHARSTRING(e).length;
                }),
                (B.OBJECT = function (e) {
                    var t = B[e.type];
                    return M.argument(void 0 !== t, "No encoding function for type " + e.type), t(e.value);
                }),
                (F.OBJECT = function (e) {
                    var t = F[e.type];
                    return M.argument(void 0 !== t, "No sizeOf function for type " + e.type), t(e.value);
                }),
                (B.TABLE = function (e) {
                    for (var t = [], r = e.fields.length, n = [], a = [], o = 0; o < r; o += 1) {
                        var s = e.fields[o],
                            i = B[s.type];
                        M.argument(void 0 !== i, "No encoding function for field type " + s.type + " (" + s.name + ")");
                        var u = e[s.name];
                        void 0 === u && (u = s.value);
                        var p = i(u);
                        "TABLE" === s.type ? (a.push(t.length), (t = t.concat([0, 0])), n.push(p)) : (t = t.concat(p));
                    }
                    for (var l = 0; l < n.length; l += 1) {
                        var c = a[l],
                            h = t.length;
                        M.argument(h < 65536, "Table " + e.tableName + " too big."), (t[c] = h >> 8), (t[c + 1] = 255 & h), (t = t.concat(n[l]));
                    }
                    return t;
                }),
                (F.TABLE = function (e) {
                    for (var t = 0, r = e.fields.length, n = 0; n < r; n += 1) {
                        var a = e.fields[n],
                            o = F[a.type];
                        M.argument(void 0 !== o, "No sizeOf function for field type " + a.type + " (" + a.name + ")");
                        var s = e[a.name];
                        void 0 === s && (s = a.value), (t += o(s)), "TABLE" === a.type && (t += 2);
                    }
                    return t;
                }),
                (B.RECORD = B.TABLE),
                (F.RECORD = F.TABLE),
                (B.LITERAL = function (e) {
                    return e;
                }),
                (F.LITERAL = function (e) {
                    return e.length;
                }),
                (q.prototype.encode = function () {
                    return B.TABLE(this);
                }),
                (q.prototype.sizeOf = function () {
                    return F.TABLE(this);
                }),
                (Y.prototype = Object.create(q.prototype)),
                (Y.prototype.constructor = Y),
                (j.prototype = Object.create(q.prototype)),
                (j.prototype.constructor = j),
                (Z.prototype = Object.create(q.prototype)),
                (Z.prototype.constructor = Z),
                (Q.prototype = Object.create(q.prototype)),
                (Q.prototype.constructor = Q);
            var K = { Table: q, Record: q, Coverage: Y, ScriptList: j, FeatureList: Z, LookupList: Q, ushortList: _, tableList: X };
            function J(e, t) {
                return e.getUint8(t);
            }
            function $(e, t) {
                return e.getUint16(t, !1);
            }
            function ee(e, t) {
                return e.getUint32(t, !1);
            }
            function et(e, t) {
                return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
            }
            var er = { byte: 1, uShort: 2, short: 2, uLong: 4, fixed: 4, longDateTime: 8, tag: 4 };
            function en(e, t) {
                (this.data = e), (this.offset = t), (this.relativeOffset = 0);
            }
            (en.prototype.parseByte = function () {
                var e = this.data.getUint8(this.offset + this.relativeOffset);
                return (this.relativeOffset += 1), e;
            }),
                (en.prototype.parseChar = function () {
                    var e = this.data.getInt8(this.offset + this.relativeOffset);
                    return (this.relativeOffset += 1), e;
                }),
                (en.prototype.parseCard8 = en.prototype.parseByte),
                (en.prototype.parseUShort = function () {
                    var e = this.data.getUint16(this.offset + this.relativeOffset);
                    return (this.relativeOffset += 2), e;
                }),
                (en.prototype.parseCard16 = en.prototype.parseUShort),
                (en.prototype.parseSID = en.prototype.parseUShort),
                (en.prototype.parseOffset16 = en.prototype.parseUShort),
                (en.prototype.parseShort = function () {
                    var e = this.data.getInt16(this.offset + this.relativeOffset);
                    return (this.relativeOffset += 2), e;
                }),
                (en.prototype.parseF2Dot14 = function () {
                    var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
                    return (this.relativeOffset += 2), e;
                }),
                (en.prototype.parseULong = function () {
                    var e = ee(this.data, this.offset + this.relativeOffset);
                    return (this.relativeOffset += 4), e;
                }),
                (en.prototype.parseOffset32 = en.prototype.parseULong),
                (en.prototype.parseFixed = function () {
                    var e = et(this.data, this.offset + this.relativeOffset);
                    return (this.relativeOffset += 4), e;
                }),
                (en.prototype.parseString = function (e) {
                    var t = this.data,
                        r = this.offset + this.relativeOffset,
                        n = "";
                    this.relativeOffset += e;
                    for (var a = 0; a < e; a++) n += String.fromCharCode(t.getUint8(r + a));
                    return n;
                }),
                (en.prototype.parseTag = function () {
                    return this.parseString(4);
                }),
                (en.prototype.parseLongDateTime = function () {
                    var e = ee(this.data, this.offset + this.relativeOffset + 4);
                    return (e -= 2082844800), (this.relativeOffset += 8), e;
                }),
                (en.prototype.parseVersion = function (e) {
                    var t = $(this.data, this.offset + this.relativeOffset),
                        r = $(this.data, this.offset + this.relativeOffset + 2);
                    return (this.relativeOffset += 4), void 0 === e && (e = 4096), t + r / e / 10;
                }),
                (en.prototype.skip = function (e, t) {
                    void 0 === t && (t = 1), (this.relativeOffset += er[e] * t);
                }),
                (en.prototype.parseULongList = function (e) {
                    void 0 === e && (e = this.parseULong());
                    for (var t = Array(e), r = this.data, n = this.offset + this.relativeOffset, a = 0; a < e; a++) (t[a] = r.getUint32(n)), (n += 4);
                    return (this.relativeOffset += 4 * e), t;
                }),
                (en.prototype.parseOffset16List = en.prototype.parseUShortList = function (e) {
                    void 0 === e && (e = this.parseUShort());
                    for (var t = Array(e), r = this.data, n = this.offset + this.relativeOffset, a = 0; a < e; a++) (t[a] = r.getUint16(n)), (n += 2);
                    return (this.relativeOffset += 2 * e), t;
                }),
                (en.prototype.parseShortList = function (e) {
                    for (var t = Array(e), r = this.data, n = this.offset + this.relativeOffset, a = 0; a < e; a++) (t[a] = r.getInt16(n)), (n += 2);
                    return (this.relativeOffset += 2 * e), t;
                }),
                (en.prototype.parseByteList = function (e) {
                    for (var t = Array(e), r = this.data, n = this.offset + this.relativeOffset, a = 0; a < e; a++) t[a] = r.getUint8(n++);
                    return (this.relativeOffset += e), t;
                }),
                (en.prototype.parseList = function (e, t) {
                    t || ((t = e), (e = this.parseUShort()));
                    for (var r = Array(e), n = 0; n < e; n++) r[n] = t.call(this);
                    return r;
                }),
                (en.prototype.parseList32 = function (e, t) {
                    t || ((t = e), (e = this.parseULong()));
                    for (var r = Array(e), n = 0; n < e; n++) r[n] = t.call(this);
                    return r;
                }),
                (en.prototype.parseRecordList = function (e, t) {
                    t || ((t = e), (e = this.parseUShort()));
                    for (var r = Array(e), n = Object.keys(t), a = 0; a < e; a++) {
                        for (var o = {}, s = 0; s < n.length; s++) {
                            var i = n[s],
                                u = t[i];
                            o[i] = u.call(this);
                        }
                        r[a] = o;
                    }
                    return r;
                }),
                (en.prototype.parseRecordList32 = function (e, t) {
                    t || ((t = e), (e = this.parseULong()));
                    for (var r = Array(e), n = Object.keys(t), a = 0; a < e; a++) {
                        for (var o = {}, s = 0; s < n.length; s++) {
                            var i = n[s],
                                u = t[i];
                            o[i] = u.call(this);
                        }
                        r[a] = o;
                    }
                    return r;
                }),
                (en.prototype.parseStruct = function (e) {
                    if ("function" == typeof e) return e.call(this);
                    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                        var a = t[n],
                            o = e[a];
                        r[a] = o.call(this);
                    }
                    return r;
                }),
                (en.prototype.parseValueRecord = function (e) {
                    if ((void 0 === e && (e = this.parseUShort()), 0 !== e)) {
                        var t = {};
                        return (
                            1 & e && (t.xPlacement = this.parseShort()),
                            2 & e && (t.yPlacement = this.parseShort()),
                            4 & e && (t.xAdvance = this.parseShort()),
                            8 & e && (t.yAdvance = this.parseShort()),
                            16 & e && ((t.xPlaDevice = void 0), this.parseShort()),
                            32 & e && ((t.yPlaDevice = void 0), this.parseShort()),
                            64 & e && ((t.xAdvDevice = void 0), this.parseShort()),
                            128 & e && ((t.yAdvDevice = void 0), this.parseShort()),
                            t
                        );
                    }
                }),
                (en.prototype.parseValueRecordList = function () {
                    for (var e = this.parseUShort(), t = this.parseUShort(), r = Array(t), n = 0; n < t; n++) r[n] = this.parseValueRecord(e);
                    return r;
                }),
                (en.prototype.parsePointer = function (e) {
                    var t = this.parseOffset16();
                    if (t > 0) return new en(this.data, this.offset + t).parseStruct(e);
                }),
                (en.prototype.parsePointer32 = function (e) {
                    var t = this.parseOffset32();
                    if (t > 0) return new en(this.data, this.offset + t).parseStruct(e);
                }),
                (en.prototype.parseListOfLists = function (e) {
                    for (var t = this.parseOffset16List(), r = t.length, n = this.relativeOffset, a = Array(r), o = 0; o < r; o++) {
                        var s = t[o];
                        if (0 === s) {
                            a[o] = void 0;
                            continue;
                        }
                        if (((this.relativeOffset = s), e)) {
                            for (var i = this.parseOffset16List(), u = Array(i.length), p = 0; p < i.length; p++) (this.relativeOffset = s + i[p]), (u[p] = e.call(this));
                            a[o] = u;
                        } else a[o] = this.parseUShortList();
                    }
                    return (this.relativeOffset = n), a;
                }),
                (en.prototype.parseCoverage = function () {
                    var e = this.offset + this.relativeOffset,
                        t = this.parseUShort(),
                        r = this.parseUShort();
                    if (1 === t) return { format: 1, glyphs: this.parseUShortList(r) };
                    if (2 === t) {
                        for (var n = Array(r), a = 0; a < r; a++) n[a] = { start: this.parseUShort(), end: this.parseUShort(), index: this.parseUShort() };
                        return { format: 2, ranges: n };
                    }
                    throw Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");
                }),
                (en.prototype.parseClassDef = function () {
                    var e = this.offset + this.relativeOffset,
                        t = this.parseUShort();
                    if (1 === t) return { format: 1, startGlyph: this.parseUShort(), classes: this.parseUShortList() };
                    if (2 === t) return { format: 2, ranges: this.parseRecordList({ start: en.uShort, end: en.uShort, classId: en.uShort }) };
                    throw Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.");
                }),
                (en.list = function (e, t) {
                    return function () {
                        return this.parseList(e, t);
                    };
                }),
                (en.list32 = function (e, t) {
                    return function () {
                        return this.parseList32(e, t);
                    };
                }),
                (en.recordList = function (e, t) {
                    return function () {
                        return this.parseRecordList(e, t);
                    };
                }),
                (en.recordList32 = function (e, t) {
                    return function () {
                        return this.parseRecordList32(e, t);
                    };
                }),
                (en.pointer = function (e) {
                    return function () {
                        return this.parsePointer(e);
                    };
                }),
                (en.pointer32 = function (e) {
                    return function () {
                        return this.parsePointer32(e);
                    };
                }),
                (en.tag = en.prototype.parseTag),
                (en.byte = en.prototype.parseByte),
                (en.uShort = en.offset16 = en.prototype.parseUShort),
                (en.uShortList = en.prototype.parseUShortList),
                (en.uLong = en.offset32 = en.prototype.parseULong),
                (en.uLongList = en.prototype.parseULongList),
                (en.struct = en.prototype.parseStruct),
                (en.coverage = en.prototype.parseCoverage),
                (en.classDef = en.prototype.parseClassDef);
            var ea = { reserved: en.uShort, reqFeatureIndex: en.uShort, featureIndexes: en.uShortList };
            (en.prototype.parseScriptList = function () {
                return this.parsePointer(en.recordList({ tag: en.tag, script: en.pointer({ defaultLangSys: en.pointer(ea), langSysRecords: en.recordList({ tag: en.tag, langSys: en.pointer(ea) }) }) })) || [];
            }),
                (en.prototype.parseFeatureList = function () {
                    return this.parsePointer(en.recordList({ tag: en.tag, feature: en.pointer({ featureParams: en.offset16, lookupListIndexes: en.uShortList }) })) || [];
                }),
                (en.prototype.parseLookupList = function (e) {
                    return (
                        this.parsePointer(
                            en.list(
                                en.pointer(function () {
                                    var t = this.parseUShort();
                                    M.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
                                    var r = this.parseUShort();
                                    return { lookupType: t, lookupFlag: r, subtables: this.parseList(en.pointer(e[t])), markFilteringSet: 16 & r ? this.parseUShort() : void 0 };
                                })
                            )
                        ) || []
                    );
                }),
                (en.prototype.parseFeatureVariationsList = function () {
                    return (
                        this.parsePointer32(function () {
                            var e = this.parseUShort(),
                                t = this.parseUShort();
                            return M.argument(1 === e && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({ conditionSetOffset: en.offset32, featureTableSubstitutionOffset: en.offset32 });
                        }) || []
                    );
                });
            var eo = {
                getByte: J,
                getCard8: J,
                getUShort: $,
                getCard16: $,
                getShort: function (e, t) {
                    return e.getInt16(t, !1);
                },
                getULong: ee,
                getFixed: et,
                getTag: function (e, t) {
                    for (var r = "", n = t; n < t + 4; n += 1) r += String.fromCharCode(e.getInt8(n));
                    return r;
                },
                getOffset: function (e, t, r) {
                    for (var n = 0, a = 0; a < r; a += 1) (n <<= 8), (n += e.getUint8(t + a));
                    return n;
                },
                getBytes: function (e, t, r) {
                    for (var n = [], a = t; a < r; a += 1) n.push(e.getUint8(a));
                    return n;
                },
                bytesToString: function (e) {
                    for (var t = "", r = 0; r < e.length; r += 1) t += String.fromCharCode(e[r]);
                    return t;
                },
                Parser: en,
            },
                es = {
                    parse: function (e, t) {
                        var r = {};
                        (r.version = eo.getUShort(e, t)), M.argument(0 === r.version, "cmap table version should be 0."), (r.numTables = eo.getUShort(e, t + 2));
                        for (var n = -1, a = r.numTables - 1; a >= 0; a -= 1) {
                            var o = eo.getUShort(e, t + 4 + 8 * a),
                                s = eo.getUShort(e, t + 4 + 8 * a + 2);
                            if ((3 === o && (0 === s || 1 === s || 10 === s)) || (0 === o && (0 === s || 1 === s || 2 === s || 3 === s || 4 === s))) {
                                n = eo.getULong(e, t + 4 + 8 * a + 4);
                                break;
                            }
                        }
                        if (-1 === n) throw Error("No valid cmap sub-tables found.");
                        var i = new eo.Parser(e, t + n);
                        if (((r.format = i.parseUShort()), 12 === r.format))
                            !(function (e, t) {
                                t.parseUShort(), (e.length = t.parseULong()), (e.language = t.parseULong()), (e.groupCount = r = t.parseULong()), (e.glyphIndexMap = {});
                                for (var r, n = 0; n < r; n += 1) for (var a = t.parseULong(), o = t.parseULong(), s = t.parseULong(), i = a; i <= o; i += 1) (e.glyphIndexMap[i] = s), s++;
                            })(r, i);
                        else if (4 === r.format)
                            !(function (e, t, r, n, a) {
                                (e.length = t.parseUShort()), (e.language = t.parseUShort()), (e.segCount = o = t.parseUShort() >> 1), t.skip("uShort", 3), (e.glyphIndexMap = {});
                                for (
                                    var o, s = new eo.Parser(r, n + a + 14), i = new eo.Parser(r, n + a + 16 + 2 * o), u = new eo.Parser(r, n + a + 16 + 4 * o), p = new eo.Parser(r, n + a + 16 + 6 * o), l = n + a + 16 + 8 * o, c = 0;
                                    c < o - 1;
                                    c += 1
                                )
                                    for (var h = void 0, f = s.parseUShort(), d = i.parseUShort(), g = u.parseShort(), v = p.parseUShort(), m = d; m <= f; m += 1)
                                        0 !== v ? ((l = p.offset + p.relativeOffset - 2 + v + (m - d) * 2), 0 !== (h = eo.getUShort(r, l)) && (h = (h + g) & 65535)) : (h = (m + g) & 65535), (e.glyphIndexMap[m] = h);
                            })(r, i, e, t, n);
                        else throw Error("Only format 4 and 12 cmap tables are supported (found format " + r.format + ").");
                        return r;
                    },
                    make: function (e) {
                        var t,
                            r = !0;
                        for (t = e.length - 1; t > 0; t -= 1)
                            if (e.get(t).unicode > 65535) {
                                console.log("Adding CMAP format 12 (needed!)"), (r = !1);
                                break;
                            }
                        var n = [
                            { name: "version", type: "USHORT", value: 0 },
                            { name: "numTables", type: "USHORT", value: r ? 1 : 2 },
                            { name: "platformID", type: "USHORT", value: 3 },
                            { name: "encodingID", type: "USHORT", value: 1 },
                            { name: "offset", type: "ULONG", value: r ? 12 : 20 },
                        ];
                        r ||
                            (n = n.concat([
                                { name: "cmap12PlatformID", type: "USHORT", value: 3 },
                                { name: "cmap12EncodingID", type: "USHORT", value: 10 },
                                { name: "cmap12Offset", type: "ULONG", value: 0 },
                            ])),
                            (n = n.concat([
                                { name: "format", type: "USHORT", value: 4 },
                                { name: "cmap4Length", type: "USHORT", value: 0 },
                                { name: "language", type: "USHORT", value: 0 },
                                { name: "segCountX2", type: "USHORT", value: 0 },
                                { name: "searchRange", type: "USHORT", value: 0 },
                                { name: "entrySelector", type: "USHORT", value: 0 },
                                { name: "rangeShift", type: "USHORT", value: 0 },
                            ]));
                        var a = new K.Table("cmap", n);
                        for (t = 0, a.segments = []; t < e.length; t += 1) {
                            for (var o = e.get(t), s = 0; s < o.unicodes.length; s += 1)
                                !(function (e, t, r) {
                                    e.segments.push({ end: t, start: t, delta: -(t - r), offset: 0, glyphIndex: r });
                                })(a, o.unicodes[s], t);
                            a.segments = a.segments.sort(function (e, t) {
                                return e.start - t.start;
                            });
                        }
                        !(function (e) {
                            e.segments.push({ end: 65535, start: 65535, delta: 1, offset: 0 });
                        })(a);
                        var i = a.segments.length,
                            u = 0,
                            p = [],
                            l = [],
                            c = [],
                            h = [],
                            f = [],
                            d = [];
                        for (t = 0; t < i; t += 1) {
                            var g = a.segments[t];
                            g.end <= 65535 && g.start <= 65535
                                ? ((p = p.concat({ name: "end_" + t, type: "USHORT", value: g.end })),
                                    (l = l.concat({ name: "start_" + t, type: "USHORT", value: g.start })),
                                    (c = c.concat({ name: "idDelta_" + t, type: "SHORT", value: g.delta })),
                                    (h = h.concat({ name: "idRangeOffset_" + t, type: "USHORT", value: g.offset })),
                                    void 0 !== g.glyphId && (f = f.concat({ name: "glyph_" + t, type: "USHORT", value: g.glyphId })))
                                : (u += 1),
                                r ||
                                void 0 === g.glyphIndex ||
                                (d = (d = (d = d.concat({ name: "cmap12Start_" + t, type: "ULONG", value: g.start })).concat({ name: "cmap12End_" + t, type: "ULONG", value: g.end })).concat({
                                    name: "cmap12Glyph_" + t,
                                    type: "ULONG",
                                    value: g.glyphIndex,
                                }));
                        }
                        if (
                            ((a.segCountX2 = (i - u) * 2),
                                (a.searchRange = 2 * Math.pow(2, Math.floor(Math.log(i - u) / Math.log(2)))),
                                (a.entrySelector = Math.log(a.searchRange / 2) / Math.log(2)),
                                (a.rangeShift = a.segCountX2 - a.searchRange),
                                (a.fields = a.fields.concat(p)),
                                a.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }),
                                (a.fields = a.fields.concat(l)),
                                (a.fields = a.fields.concat(c)),
                                (a.fields = a.fields.concat(h)),
                                (a.fields = a.fields.concat(f)),
                                (a.cmap4Length = 14 + 2 * p.length + 2 + 2 * l.length + 2 * c.length + 2 * h.length + 2 * f.length),
                                !r)
                        ) {
                            var v = 16 + 4 * d.length;
                            (a.cmap12Offset = 20 + a.cmap4Length),
                                (a.fields = a.fields.concat([
                                    { name: "cmap12Format", type: "USHORT", value: 12 },
                                    { name: "cmap12Reserved", type: "USHORT", value: 0 },
                                    { name: "cmap12Length", type: "ULONG", value: v },
                                    { name: "cmap12Language", type: "ULONG", value: 0 },
                                    { name: "cmap12nGroups", type: "ULONG", value: d.length / 3 },
                                ])),
                                (a.fields = a.fields.concat(d));
                        }
                        return a;
                    },
                },
                ei = [
                    ".notdef",
                    "space",
                    "exclam",
                    "quotedbl",
                    "numbersign",
                    "dollar",
                    "percent",
                    "ampersand",
                    "quoteright",
                    "parenleft",
                    "parenright",
                    "asterisk",
                    "plus",
                    "comma",
                    "hyphen",
                    "period",
                    "slash",
                    "zero",
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                    "colon",
                    "semicolon",
                    "less",
                    "equal",
                    "greater",
                    "question",
                    "at",
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P",
                    "Q",
                    "R",
                    "S",
                    "T",
                    "U",
                    "V",
                    "W",
                    "X",
                    "Y",
                    "Z",
                    "bracketleft",
                    "backslash",
                    "bracketright",
                    "asciicircum",
                    "underscore",
                    "quoteleft",
                    "a",
                    "b",
                    "c",
                    "d",
                    "e",
                    "f",
                    "g",
                    "h",
                    "i",
                    "j",
                    "k",
                    "l",
                    "m",
                    "n",
                    "o",
                    "p",
                    "q",
                    "r",
                    "s",
                    "t",
                    "u",
                    "v",
                    "w",
                    "x",
                    "y",
                    "z",
                    "braceleft",
                    "bar",
                    "braceright",
                    "asciitilde",
                    "exclamdown",
                    "cent",
                    "sterling",
                    "fraction",
                    "yen",
                    "florin",
                    "section",
                    "currency",
                    "quotesingle",
                    "quotedblleft",
                    "guillemotleft",
                    "guilsinglleft",
                    "guilsinglright",
                    "fi",
                    "fl",
                    "endash",
                    "dagger",
                    "daggerdbl",
                    "periodcentered",
                    "paragraph",
                    "bullet",
                    "quotesinglbase",
                    "quotedblbase",
                    "quotedblright",
                    "guillemotright",
                    "ellipsis",
                    "perthousand",
                    "questiondown",
                    "grave",
                    "acute",
                    "circumflex",
                    "tilde",
                    "macron",
                    "breve",
                    "dotaccent",
                    "dieresis",
                    "ring",
                    "cedilla",
                    "hungarumlaut",
                    "ogonek",
                    "caron",
                    "emdash",
                    "AE",
                    "ordfeminine",
                    "Lslash",
                    "Oslash",
                    "OE",
                    "ordmasculine",
                    "ae",
                    "dotlessi",
                    "lslash",
                    "oslash",
                    "oe",
                    "germandbls",
                    "onesuperior",
                    "logicalnot",
                    "mu",
                    "trademark",
                    "Eth",
                    "onehalf",
                    "plusminus",
                    "Thorn",
                    "onequarter",
                    "divide",
                    "brokenbar",
                    "degree",
                    "thorn",
                    "threequarters",
                    "twosuperior",
                    "registered",
                    "minus",
                    "eth",
                    "multiply",
                    "threesuperior",
                    "copyright",
                    "Aacute",
                    "Acircumflex",
                    "Adieresis",
                    "Agrave",
                    "Aring",
                    "Atilde",
                    "Ccedilla",
                    "Eacute",
                    "Ecircumflex",
                    "Edieresis",
                    "Egrave",
                    "Iacute",
                    "Icircumflex",
                    "Idieresis",
                    "Igrave",
                    "Ntilde",
                    "Oacute",
                    "Ocircumflex",
                    "Odieresis",
                    "Ograve",
                    "Otilde",
                    "Scaron",
                    "Uacute",
                    "Ucircumflex",
                    "Udieresis",
                    "Ugrave",
                    "Yacute",
                    "Ydieresis",
                    "Zcaron",
                    "aacute",
                    "acircumflex",
                    "adieresis",
                    "agrave",
                    "aring",
                    "atilde",
                    "ccedilla",
                    "eacute",
                    "ecircumflex",
                    "edieresis",
                    "egrave",
                    "iacute",
                    "icircumflex",
                    "idieresis",
                    "igrave",
                    "ntilde",
                    "oacute",
                    "ocircumflex",
                    "odieresis",
                    "ograve",
                    "otilde",
                    "scaron",
                    "uacute",
                    "ucircumflex",
                    "udieresis",
                    "ugrave",
                    "yacute",
                    "ydieresis",
                    "zcaron",
                    "exclamsmall",
                    "Hungarumlautsmall",
                    "dollaroldstyle",
                    "dollarsuperior",
                    "ampersandsmall",
                    "Acutesmall",
                    "parenleftsuperior",
                    "parenrightsuperior",
                    "266 ff",
                    "onedotenleader",
                    "zerooldstyle",
                    "oneoldstyle",
                    "twooldstyle",
                    "threeoldstyle",
                    "fouroldstyle",
                    "fiveoldstyle",
                    "sixoldstyle",
                    "sevenoldstyle",
                    "eightoldstyle",
                    "nineoldstyle",
                    "commasuperior",
                    "threequartersemdash",
                    "periodsuperior",
                    "questionsmall",
                    "asuperior",
                    "bsuperior",
                    "centsuperior",
                    "dsuperior",
                    "esuperior",
                    "isuperior",
                    "lsuperior",
                    "msuperior",
                    "nsuperior",
                    "osuperior",
                    "rsuperior",
                    "ssuperior",
                    "tsuperior",
                    "ff",
                    "ffi",
                    "ffl",
                    "parenleftinferior",
                    "parenrightinferior",
                    "Circumflexsmall",
                    "hyphensuperior",
                    "Gravesmall",
                    "Asmall",
                    "Bsmall",
                    "Csmall",
                    "Dsmall",
                    "Esmall",
                    "Fsmall",
                    "Gsmall",
                    "Hsmall",
                    "Ismall",
                    "Jsmall",
                    "Ksmall",
                    "Lsmall",
                    "Msmall",
                    "Nsmall",
                    "Osmall",
                    "Psmall",
                    "Qsmall",
                    "Rsmall",
                    "Ssmall",
                    "Tsmall",
                    "Usmall",
                    "Vsmall",
                    "Wsmall",
                    "Xsmall",
                    "Ysmall",
                    "Zsmall",
                    "colonmonetary",
                    "onefitted",
                    "rupiah",
                    "Tildesmall",
                    "exclamdownsmall",
                    "centoldstyle",
                    "Lslashsmall",
                    "Scaronsmall",
                    "Zcaronsmall",
                    "Dieresissmall",
                    "Brevesmall",
                    "Caronsmall",
                    "Dotaccentsmall",
                    "Macronsmall",
                    "figuredash",
                    "hypheninferior",
                    "Ogoneksmall",
                    "Ringsmall",
                    "Cedillasmall",
                    "questiondownsmall",
                    "oneeighth",
                    "threeeighths",
                    "fiveeighths",
                    "seveneighths",
                    "onethird",
                    "twothirds",
                    "zerosuperior",
                    "foursuperior",
                    "fivesuperior",
                    "sixsuperior",
                    "sevensuperior",
                    "eightsuperior",
                    "ninesuperior",
                    "zeroinferior",
                    "oneinferior",
                    "twoinferior",
                    "threeinferior",
                    "fourinferior",
                    "fiveinferior",
                    "sixinferior",
                    "seveninferior",
                    "eightinferior",
                    "nineinferior",
                    "centinferior",
                    "dollarinferior",
                    "periodinferior",
                    "commainferior",
                    "Agravesmall",
                    "Aacutesmall",
                    "Acircumflexsmall",
                    "Atildesmall",
                    "Adieresissmall",
                    "Aringsmall",
                    "AEsmall",
                    "Ccedillasmall",
                    "Egravesmall",
                    "Eacutesmall",
                    "Ecircumflexsmall",
                    "Edieresissmall",
                    "Igravesmall",
                    "Iacutesmall",
                    "Icircumflexsmall",
                    "Idieresissmall",
                    "Ethsmall",
                    "Ntildesmall",
                    "Ogravesmall",
                    "Oacutesmall",
                    "Ocircumflexsmall",
                    "Otildesmall",
                    "Odieresissmall",
                    "OEsmall",
                    "Oslashsmall",
                    "Ugravesmall",
                    "Uacutesmall",
                    "Ucircumflexsmall",
                    "Udieresissmall",
                    "Yacutesmall",
                    "Thornsmall",
                    "Ydieresissmall",
                    "001.000",
                    "001.001",
                    "001.002",
                    "001.003",
                    "Black",
                    "Bold",
                    "Book",
                    "Light",
                    "Medium",
                    "Regular",
                    "Roman",
                    "Semibold",
                ],
                eu = [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "space",
                    "exclam",
                    "quotedbl",
                    "numbersign",
                    "dollar",
                    "percent",
                    "ampersand",
                    "quoteright",
                    "parenleft",
                    "parenright",
                    "asterisk",
                    "plus",
                    "comma",
                    "hyphen",
                    "period",
                    "slash",
                    "zero",
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                    "colon",
                    "semicolon",
                    "less",
                    "equal",
                    "greater",
                    "question",
                    "at",
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P",
                    "Q",
                    "R",
                    "S",
                    "T",
                    "U",
                    "V",
                    "W",
                    "X",
                    "Y",
                    "Z",
                    "bracketleft",
                    "backslash",
                    "bracketright",
                    "asciicircum",
                    "underscore",
                    "quoteleft",
                    "a",
                    "b",
                    "c",
                    "d",
                    "e",
                    "f",
                    "g",
                    "h",
                    "i",
                    "j",
                    "k",
                    "l",
                    "m",
                    "n",
                    "o",
                    "p",
                    "q",
                    "r",
                    "s",
                    "t",
                    "u",
                    "v",
                    "w",
                    "x",
                    "y",
                    "z",
                    "braceleft",
                    "bar",
                    "braceright",
                    "asciitilde",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "exclamdown",
                    "cent",
                    "sterling",
                    "fraction",
                    "yen",
                    "florin",
                    "section",
                    "currency",
                    "quotesingle",
                    "quotedblleft",
                    "guillemotleft",
                    "guilsinglleft",
                    "guilsinglright",
                    "fi",
                    "fl",
                    "",
                    "endash",
                    "dagger",
                    "daggerdbl",
                    "periodcentered",
                    "",
                    "paragraph",
                    "bullet",
                    "quotesinglbase",
                    "quotedblbase",
                    "quotedblright",
                    "guillemotright",
                    "ellipsis",
                    "perthousand",
                    "",
                    "questiondown",
                    "",
                    "grave",
                    "acute",
                    "circumflex",
                    "tilde",
                    "macron",
                    "breve",
                    "dotaccent",
                    "dieresis",
                    "",
                    "ring",
                    "cedilla",
                    "",
                    "hungarumlaut",
                    "ogonek",
                    "caron",
                    "emdash",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "AE",
                    "",
                    "ordfeminine",
                    "",
                    "",
                    "",
                    "",
                    "Lslash",
                    "Oslash",
                    "OE",
                    "ordmasculine",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "ae",
                    "",
                    "",
                    "",
                    "dotlessi",
                    "",
                    "",
                    "lslash",
                    "oslash",
                    "oe",
                    "germandbls",
                ],
                ep = [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "space",
                    "exclamsmall",
                    "Hungarumlautsmall",
                    "",
                    "dollaroldstyle",
                    "dollarsuperior",
                    "ampersandsmall",
                    "Acutesmall",
                    "parenleftsuperior",
                    "parenrightsuperior",
                    "twodotenleader",
                    "onedotenleader",
                    "comma",
                    "hyphen",
                    "period",
                    "fraction",
                    "zerooldstyle",
                    "oneoldstyle",
                    "twooldstyle",
                    "threeoldstyle",
                    "fouroldstyle",
                    "fiveoldstyle",
                    "sixoldstyle",
                    "sevenoldstyle",
                    "eightoldstyle",
                    "nineoldstyle",
                    "colon",
                    "semicolon",
                    "commasuperior",
                    "threequartersemdash",
                    "periodsuperior",
                    "questionsmall",
                    "",
                    "asuperior",
                    "bsuperior",
                    "centsuperior",
                    "dsuperior",
                    "esuperior",
                    "",
                    "",
                    "isuperior",
                    "",
                    "",
                    "lsuperior",
                    "msuperior",
                    "nsuperior",
                    "osuperior",
                    "",
                    "",
                    "rsuperior",
                    "ssuperior",
                    "tsuperior",
                    "",
                    "ff",
                    "fi",
                    "fl",
                    "ffi",
                    "ffl",
                    "parenleftinferior",
                    "",
                    "parenrightinferior",
                    "Circumflexsmall",
                    "hyphensuperior",
                    "Gravesmall",
                    "Asmall",
                    "Bsmall",
                    "Csmall",
                    "Dsmall",
                    "Esmall",
                    "Fsmall",
                    "Gsmall",
                    "Hsmall",
                    "Ismall",
                    "Jsmall",
                    "Ksmall",
                    "Lsmall",
                    "Msmall",
                    "Nsmall",
                    "Osmall",
                    "Psmall",
                    "Qsmall",
                    "Rsmall",
                    "Ssmall",
                    "Tsmall",
                    "Usmall",
                    "Vsmall",
                    "Wsmall",
                    "Xsmall",
                    "Ysmall",
                    "Zsmall",
                    "colonmonetary",
                    "onefitted",
                    "rupiah",
                    "Tildesmall",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "exclamdownsmall",
                    "centoldstyle",
                    "Lslashsmall",
                    "",
                    "",
                    "Scaronsmall",
                    "Zcaronsmall",
                    "Dieresissmall",
                    "Brevesmall",
                    "Caronsmall",
                    "",
                    "Dotaccentsmall",
                    "",
                    "",
                    "Macronsmall",
                    "",
                    "",
                    "figuredash",
                    "hypheninferior",
                    "",
                    "",
                    "Ogoneksmall",
                    "Ringsmall",
                    "Cedillasmall",
                    "",
                    "",
                    "",
                    "onequarter",
                    "onehalf",
                    "threequarters",
                    "questiondownsmall",
                    "oneeighth",
                    "threeeighths",
                    "fiveeighths",
                    "seveneighths",
                    "onethird",
                    "twothirds",
                    "",
                    "",
                    "zerosuperior",
                    "onesuperior",
                    "twosuperior",
                    "threesuperior",
                    "foursuperior",
                    "fivesuperior",
                    "sixsuperior",
                    "sevensuperior",
                    "eightsuperior",
                    "ninesuperior",
                    "zeroinferior",
                    "oneinferior",
                    "twoinferior",
                    "threeinferior",
                    "fourinferior",
                    "fiveinferior",
                    "sixinferior",
                    "seveninferior",
                    "eightinferior",
                    "nineinferior",
                    "centinferior",
                    "dollarinferior",
                    "periodinferior",
                    "commainferior",
                    "Agravesmall",
                    "Aacutesmall",
                    "Acircumflexsmall",
                    "Atildesmall",
                    "Adieresissmall",
                    "Aringsmall",
                    "AEsmall",
                    "Ccedillasmall",
                    "Egravesmall",
                    "Eacutesmall",
                    "Ecircumflexsmall",
                    "Edieresissmall",
                    "Igravesmall",
                    "Iacutesmall",
                    "Icircumflexsmall",
                    "Idieresissmall",
                    "Ethsmall",
                    "Ntildesmall",
                    "Ogravesmall",
                    "Oacutesmall",
                    "Ocircumflexsmall",
                    "Otildesmall",
                    "Odieresissmall",
                    "OEsmall",
                    "Oslashsmall",
                    "Ugravesmall",
                    "Uacutesmall",
                    "Ucircumflexsmall",
                    "Udieresissmall",
                    "Yacutesmall",
                    "Thornsmall",
                    "Ydieresissmall",
                ],
                el = [
                    ".notdef",
                    ".null",
                    "nonmarkingreturn",
                    "space",
                    "exclam",
                    "quotedbl",
                    "numbersign",
                    "dollar",
                    "percent",
                    "ampersand",
                    "quotesingle",
                    "parenleft",
                    "parenright",
                    "asterisk",
                    "plus",
                    "comma",
                    "hyphen",
                    "period",
                    "slash",
                    "zero",
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                    "colon",
                    "semicolon",
                    "less",
                    "equal",
                    "greater",
                    "question",
                    "at",
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P",
                    "Q",
                    "R",
                    "S",
                    "T",
                    "U",
                    "V",
                    "W",
                    "X",
                    "Y",
                    "Z",
                    "bracketleft",
                    "backslash",
                    "bracketright",
                    "asciicircum",
                    "underscore",
                    "grave",
                    "a",
                    "b",
                    "c",
                    "d",
                    "e",
                    "f",
                    "g",
                    "h",
                    "i",
                    "j",
                    "k",
                    "l",
                    "m",
                    "n",
                    "o",
                    "p",
                    "q",
                    "r",
                    "s",
                    "t",
                    "u",
                    "v",
                    "w",
                    "x",
                    "y",
                    "z",
                    "braceleft",
                    "bar",
                    "braceright",
                    "asciitilde",
                    "Adieresis",
                    "Aring",
                    "Ccedilla",
                    "Eacute",
                    "Ntilde",
                    "Odieresis",
                    "Udieresis",
                    "aacute",
                    "agrave",
                    "acircumflex",
                    "adieresis",
                    "atilde",
                    "aring",
                    "ccedilla",
                    "eacute",
                    "egrave",
                    "ecircumflex",
                    "edieresis",
                    "iacute",
                    "igrave",
                    "icircumflex",
                    "idieresis",
                    "ntilde",
                    "oacute",
                    "ograve",
                    "ocircumflex",
                    "odieresis",
                    "otilde",
                    "uacute",
                    "ugrave",
                    "ucircumflex",
                    "udieresis",
                    "dagger",
                    "degree",
                    "cent",
                    "sterling",
                    "section",
                    "bullet",
                    "paragraph",
                    "germandbls",
                    "registered",
                    "copyright",
                    "trademark",
                    "acute",
                    "dieresis",
                    "notequal",
                    "AE",
                    "Oslash",
                    "infinity",
                    "plusminus",
                    "lessequal",
                    "greaterequal",
                    "yen",
                    "mu",
                    "partialdiff",
                    "summation",
                    "product",
                    "pi",
                    "integral",
                    "ordfeminine",
                    "ordmasculine",
                    "Omega",
                    "ae",
                    "oslash",
                    "questiondown",
                    "exclamdown",
                    "logicalnot",
                    "radical",
                    "florin",
                    "approxequal",
                    "Delta",
                    "guillemotleft",
                    "guillemotright",
                    "ellipsis",
                    "nonbreakingspace",
                    "Agrave",
                    "Atilde",
                    "Otilde",
                    "OE",
                    "oe",
                    "endash",
                    "emdash",
                    "quotedblleft",
                    "quotedblright",
                    "quoteleft",
                    "quoteright",
                    "divide",
                    "lozenge",
                    "ydieresis",
                    "Ydieresis",
                    "fraction",
                    "currency",
                    "guilsinglleft",
                    "guilsinglright",
                    "fi",
                    "fl",
                    "daggerdbl",
                    "periodcentered",
                    "quotesinglbase",
                    "quotedblbase",
                    "perthousand",
                    "Acircumflex",
                    "Ecircumflex",
                    "Aacute",
                    "Edieresis",
                    "Egrave",
                    "Iacute",
                    "Icircumflex",
                    "Idieresis",
                    "Igrave",
                    "Oacute",
                    "Ocircumflex",
                    "apple",
                    "Ograve",
                    "Uacute",
                    "Ucircumflex",
                    "Ugrave",
                    "dotlessi",
                    "circumflex",
                    "tilde",
                    "macron",
                    "breve",
                    "dotaccent",
                    "ring",
                    "cedilla",
                    "hungarumlaut",
                    "ogonek",
                    "caron",
                    "Lslash",
                    "lslash",
                    "Scaron",
                    "scaron",
                    "Zcaron",
                    "zcaron",
                    "brokenbar",
                    "Eth",
                    "eth",
                    "Yacute",
                    "yacute",
                    "Thorn",
                    "thorn",
                    "minus",
                    "multiply",
                    "onesuperior",
                    "twosuperior",
                    "threesuperior",
                    "onehalf",
                    "onequarter",
                    "threequarters",
                    "franc",
                    "Gbreve",
                    "gbreve",
                    "Idotaccent",
                    "Scedilla",
                    "scedilla",
                    "Cacute",
                    "cacute",
                    "Ccaron",
                    "ccaron",
                    "dcroat",
                ];
            function ec(e) {
                this.font = e;
            }
            function eh(e) {
                this.cmap = e;
            }
            function ef(e, t) {
                (this.encoding = e), (this.charset = t);
            }
            function ed(e) {
                switch (e.version) {
                    case 1:
                        this.names = el.slice();
                        break;
                    case 2:
                        this.names = Array(e.numberOfGlyphs);
                        for (var t = 0; t < e.numberOfGlyphs; t++) e.glyphNameIndex[t] < el.length ? (this.names[t] = el[e.glyphNameIndex[t]]) : (this.names[t] = e.names[e.glyphNameIndex[t] - el.length]);
                        break;
                    case 2.5:
                        this.names = Array(e.numberOfGlyphs);
                        for (var r = 0; r < e.numberOfGlyphs; r++) this.names[r] = el[r + e.glyphNameIndex[r]];
                        break;
                    default:
                        this.names = [];
                }
            }
            (ec.prototype.charToGlyphIndex = function (e) {
                var t = e.codePointAt(0),
                    r = this.font.glyphs;
                if (r) {
                    for (var n = 0; n < r.length; n += 1) for (var a = r.get(n), o = 0; o < a.unicodes.length; o += 1) if (a.unicodes[o] === t) return n;
                }
                return null;
            }),
                (eh.prototype.charToGlyphIndex = function (e) {
                    return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
                }),
                (ef.prototype.charToGlyphIndex = function (e) {
                    var t = e.codePointAt(0),
                        r = this.encoding[t];
                    return this.charset.indexOf(r);
                }),
                (ed.prototype.nameToGlyphIndex = function (e) {
                    return this.names.indexOf(e);
                }),
                (ed.prototype.glyphIndexToName = function (e) {
                    return this.names[e];
                });
            var eg = function (e, t, r, n, a) {
                e.beginPath(), e.moveTo(t, r), e.lineTo(n, a), e.stroke();
            };
            function ev(e) {
                this.bindConstructorValues(e);
            }
            function em(e, t, r) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return e.path, e[r];
                    },
                    set: function (t) {
                        e[r] = t;
                    },
                    enumerable: !0,
                    configurable: !0,
                });
            }
            function ey(e, t) {
                if (((this.font = e), (this.glyphs = {}), Array.isArray(t)))
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.path.unitsPerEm = e.unitsPerEm), (this.glyphs[r] = n);
                    }
                this.length = (t && t.length) || 0;
            }
            (ev.prototype.bindConstructorValues = function (e) {
                var t;
                (this.index = e.index || 0),
                    (this.name = e.name || null),
                    (this.unicode = e.unicode || void 0),
                    (this.unicodes = e.unicodes || void 0 !== e.unicode ? [e.unicode] : []),
                    "xMin" in e && (this.xMin = e.xMin),
                    "yMin" in e && (this.yMin = e.yMin),
                    "xMax" in e && (this.xMax = e.xMax),
                    "yMax" in e && (this.yMax = e.yMax),
                    "advanceWidth" in e && (this.advanceWidth = e.advanceWidth),
                    Object.defineProperty(
                        this,
                        "path",
                        ((t = e.path || new w()),
                        {
                            configurable: !0,
                            get: function () {
                                return "function" == typeof t && (t = t()), t;
                            },
                            set: function (e) {
                                t = e;
                            },
                        })
                    );
            }),
                (ev.prototype.addUnicode = function (e) {
                    0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e);
                }),
                (ev.prototype.getBoundingBox = function () {
                    return this.path.getBoundingBox();
                }),
                (ev.prototype.getPath = function (e, t, r, n, a) {
                    (e = void 0 !== e ? e : 0), (t = void 0 !== t ? t : 0), (r = void 0 !== r ? r : 72), n || (n = {});
                    var o,
                        s,
                        i = n.xScale,
                        u = n.yScale;
                    if ((n.hinting && a && a.hinting && (s = this.path && a.hinting.exec(this, r)), s)) (o = a.hinting.getCommands(s)), (e = Math.round(e)), (t = Math.round(t)), (i = u = 1);
                    else {
                        o = this.path.commands;
                        var p = (1 / (this.path.unitsPerEm || 1e3)) * r;
                        void 0 === i && (i = p), void 0 === u && (u = p);
                    }
                    for (var l = new w(), c = 0; c < o.length; c += 1) {
                        var h = o[c];
                        "M" === h.type
                            ? l.moveTo(e + h.x * i, t + -h.y * u)
                            : "L" === h.type
                                ? l.lineTo(e + h.x * i, t + -h.y * u)
                                : "Q" === h.type
                                    ? l.quadraticCurveTo(e + h.x1 * i, t + -h.y1 * u, e + h.x * i, t + -h.y * u)
                                    : "C" === h.type
                                        ? l.curveTo(e + h.x1 * i, t + -h.y1 * u, e + h.x2 * i, t + -h.y2 * u, e + h.x * i, t + -h.y * u)
                                        : "Z" === h.type && l.closePath();
                    }
                    return l;
                }),
                (ev.prototype.getContours = function () {
                    if (void 0 === this.points) return [];
                    for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
                        var n = this.points[r];
                        t.push(n), n.lastPointOfContour && (e.push(t), (t = []));
                    }
                    return M.argument(0 === t.length, "There are still points left in the current contour."), e;
                }),
                (ev.prototype.getMetrics = function () {
                    for (var e = this.path.commands, t = [], r = [], n = 0; n < e.length; n += 1) {
                        var a = e[n];
                        "Z" !== a.type && (t.push(a.x), r.push(a.y)), ("Q" === a.type || "C" === a.type) && (t.push(a.x1), r.push(a.y1)), "C" === a.type && (t.push(a.x2), r.push(a.y2));
                    }
                    var o = { xMin: Math.min.apply(null, t), yMin: Math.min.apply(null, r), xMax: Math.max.apply(null, t), yMax: Math.max.apply(null, r), leftSideBearing: this.leftSideBearing };
                    return (
                        isFinite(o.xMin) || (o.xMin = 0),
                        isFinite(o.xMax) || (o.xMax = this.advanceWidth),
                        isFinite(o.yMin) || (o.yMin = 0),
                        isFinite(o.yMax) || (o.yMax = 0),
                        (o.rightSideBearing = this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin)),
                        o
                    );
                }),
                (ev.prototype.draw = function (e, t, r, n, a) {
                    this.getPath(t, r, n, a).draw(e);
                }),
                (ev.prototype.drawPoints = function (e, t, r, n) {
                    function a(t, r, n, a) {
                        e.beginPath();
                        for (var o = 0; o < t.length; o += 1) e.moveTo(r + t[o].x * a, n + t[o].y * a), e.arc(r + t[o].x * a, n + t[o].y * a, 2, 0, 2 * Math.PI, !1);
                        e.closePath(), e.fill();
                    }
                    (t = void 0 !== t ? t : 0), (r = void 0 !== r ? r : 0), (n = void 0 !== n ? n : 24);
                    for (var o = (1 / this.path.unitsPerEm) * n, s = [], i = [], u = this.path, p = 0; p < u.commands.length; p += 1) {
                        var l = u.commands[p];
                        void 0 !== l.x && s.push({ x: l.x, y: -l.y }), void 0 !== l.x1 && i.push({ x: l.x1, y: -l.y1 }), void 0 !== l.x2 && i.push({ x: l.x2, y: -l.y2 });
                    }
                    (e.fillStyle = "blue"), a(s, t, r, o), (e.fillStyle = "red"), a(i, t, r, o);
                }),
                (ev.prototype.drawMetrics = function (e, t, r, n) {
                    (t = void 0 !== t ? t : 0), (r = void 0 !== r ? r : 0), (n = void 0 !== n ? n : 24), (a = (1 / this.path.unitsPerEm) * n), (e.lineWidth = 1), (e.strokeStyle = "black"), eg(e, t, -1e4, t, 1e4), eg(e, -1e4, r, 1e4, r);
                    var a,
                        o = this.xMin || 0,
                        s = this.yMin || 0,
                        i = this.xMax || 0,
                        u = this.yMax || 0,
                        p = this.advanceWidth || 0;
                    (e.strokeStyle = "blue"),
                        eg(e, t + o * a, -1e4, t + o * a, 1e4),
                        eg(e, t + i * a, -1e4, t + i * a, 1e4),
                        eg(e, -1e4, r + -s * a, 1e4, r + -s * a),
                        eg(e, -1e4, r + -u * a, 1e4, r + -u * a),
                        (e.strokeStyle = "green"),
                        eg(e, t + p * a, -1e4, t + p * a, 1e4);
                }),
                (ey.prototype.get = function (e) {
                    if (void 0 === this.glyphs[e]) {
                        this.font._push(e), "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]());
                        var t = this.glyphs[e],
                            r = this.font._IndexToUnicodeMap[e];
                        if (r) for (var n = 0; n < r.unicodes.length; n++) t.addUnicode(r.unicodes[n]);
                        this.font.cffEncoding ? (this.font.isCIDFont ? (t.name = "gid" + e) : (t.name = this.font.cffEncoding.charset[e])) : this.font.glyphNames.names && (t.name = this.font.glyphNames.glyphIndexToName(e)),
                            (this.glyphs[e].advanceWidth = this.font._hmtxTableData[e].advanceWidth),
                            (this.glyphs[e].leftSideBearing = this.font._hmtxTableData[e].leftSideBearing);
                    } else "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]());
                    return this.glyphs[e];
                }),
                (ey.prototype.push = function (e, t) {
                    (this.glyphs[e] = t), this.length++;
                });
            var eb = {
                GlyphSet: ey,
                glyphLoader: function (e, t) {
                    return new ev({ index: t, font: e });
                },
                ttfGlyphLoader: function (e, t, r, n, a, o) {
                    return function () {
                        var s = new ev({ index: t, font: e });
                        return (
                            (s.path = function () {
                                r(s, n, a);
                                var t = o(e.glyphs, s);
                                return (t.unitsPerEm = e.unitsPerEm), t;
                            }),
                            em(s, "xMin", "_xMin"),
                            em(s, "xMax", "_xMax"),
                            em(s, "yMin", "_yMin"),
                            em(s, "yMax", "_yMax"),
                            s
                        );
                    };
                },
                cffGlyphLoader: function (e, t, r, n) {
                    return function () {
                        var a = new ev({ index: t, font: e });
                        return (
                            (a.path = function () {
                                var t = r(e, a, n);
                                return (t.unitsPerEm = e.unitsPerEm), t;
                            }),
                            a
                        );
                    };
                },
            };
            function ex(e) {
                return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
            }
            function eS(e, t, r) {
                var n,
                    a,
                    o = [],
                    s = [],
                    i = eo.getCard16(e, t);
                if (0 !== i) {
                    var u = eo.getByte(e, t + 2);
                    n = t + (i + 1) * u + 2;
                    for (var p = t + 3, l = 0; l < i + 1; l += 1) o.push(eo.getOffset(e, p, u)), (p += u);
                    a = n + o[i];
                } else a = t + 2;
                for (var c = 0; c < o.length - 1; c += 1) {
                    var h = eo.getBytes(e, n + o[c], n + o[c + 1]);
                    r && (h = r(h)), s.push(h);
                }
                return { objects: s, startOffset: t, endOffset: a };
            }
            function eT(e, t, r) {
                t = void 0 !== t ? t : 0;
                var n = new eo.Parser(e, t),
                    a = [],
                    o = [];
                for (r = void 0 !== r ? r : e.length; n.relativeOffset < r;) {
                    var s = n.parseByte();
                    s <= 21
                        ? (12 === s && (s = 1200 + n.parseByte()), a.push([s, o]), (o = []))
                        : o.push(
                            (function (e, t) {
                                var r, n;
                                if (28 === t) return ((r = e.parseByte()) << 8) | (n = e.parseByte());
                                if (29 === t) return (r = e.parseByte()), (r << 24) | ((n = e.parseByte()) << 16) | (e.parseByte() << 8) | e.parseByte();
                                if (30 === t)
                                    return (function (e) {
                                        for (var t = "", r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"]; ;) {
                                            var n = e.parseByte(),
                                                a = n >> 4,
                                                o = 15 & n;
                                            if (15 === a || ((t += r[a]), 15 === o)) break;
                                            t += r[o];
                                        }
                                        return parseFloat(t);
                                    })(e);
                                if (t >= 32 && t <= 246) return t - 139;
                                if (t >= 247 && t <= 250) return (t - 247) * 256 + (r = e.parseByte()) + 108;
                                if (t >= 251 && t <= 254) return -(256 * (t - 251)) - (r = e.parseByte()) - 108;
                                throw Error("Invalid b0 " + t);
                            })(n, s)
                        );
                }
                return (function (e) {
                    for (var t = {}, r = 0; r < e.length; r += 1) {
                        var n = e[r][0],
                            a = e[r][1],
                            o = void 0;
                        if (((o = 1 === a.length ? a[0] : a), t.hasOwnProperty(n) && !isNaN(t[n]))) throw Error("Object " + t + " already has key " + n);
                        t[n] = o;
                    }
                    return t;
                })(a);
            }
            function ek(e, t) {
                return (t = t <= 390 ? ei[t] : e[t - 391]);
            }
            function eU(e, t, r) {
                for (var n, a = {}, o = 0; o < t.length; o += 1) {
                    var s = t[o];
                    if (Array.isArray(s.type)) {
                        var i = [];
                        i.length = s.type.length;
                        for (var u = 0; u < s.type.length; u++)
                            void 0 === (n = void 0 !== e[s.op] ? e[s.op][u] : void 0) && (n = void 0 !== s.value && void 0 !== s.value[u] ? s.value[u] : null), "SID" === s.type[u] && (n = ek(r, n)), (i[u] = n);
                        a[s.name] = i;
                    } else void 0 === (n = e[s.op]) && (n = void 0 !== s.value ? s.value : null), "SID" === s.type && (n = ek(r, n)), (a[s.name] = n);
                }
                return a;
            }
            var eO = [
                { name: "version", op: 0, type: "SID" },
                { name: "notice", op: 1, type: "SID" },
                { name: "copyright", op: 1200, type: "SID" },
                { name: "fullName", op: 2, type: "SID" },
                { name: "familyName", op: 3, type: "SID" },
                { name: "weight", op: 4, type: "SID" },
                { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
                { name: "italicAngle", op: 1202, type: "number", value: 0 },
                { name: "underlinePosition", op: 1203, type: "number", value: -100 },
                { name: "underlineThickness", op: 1204, type: "number", value: 50 },
                { name: "paintType", op: 1205, type: "number", value: 0 },
                { name: "charstringType", op: 1206, type: "number", value: 2 },
                { name: "fontMatrix", op: 1207, type: ["real", "real", "real", "real", "real", "real"], value: [0.001, 0, 0, 0.001, 0, 0] },
                { name: "uniqueId", op: 13, type: "number" },
                { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] },
                { name: "strokeWidth", op: 1208, type: "number", value: 0 },
                { name: "xuid", op: 14, type: [], value: null },
                { name: "charset", op: 15, type: "offset", value: 0 },
                { name: "encoding", op: 16, type: "offset", value: 0 },
                { name: "charStrings", op: 17, type: "offset", value: 0 },
                { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
                { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
                { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
                { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
                { name: "cidFontType", op: 1233, type: "number", value: 0 },
                { name: "cidCount", op: 1234, type: "number", value: 8720 },
                { name: "uidBase", op: 1235, type: "number" },
                { name: "fdArray", op: 1236, type: "offset" },
                { name: "fdSelect", op: 1237, type: "offset" },
                { name: "fontName", op: 1238, type: "SID" },
            ],
                eE = [
                    { name: "subrs", op: 19, type: "offset", value: 0 },
                    { name: "defaultWidthX", op: 20, type: "number", value: 0 },
                    { name: "nominalWidthX", op: 21, type: "number", value: 0 },
                ];
            function eR(e, t, r, n) {
                for (var a = [], o = 0; o < r.length; o += 1) {
                    var s = eU(eT((p = new DataView(new Uint8Array(r[o]).buffer)), 0, p.byteLength), eO, n);
                    (s._subrs = []), (s._subrsBias = 0), (s._defaultWidthX = 0), (s._nominalWidthX = 0);
                    var i = s.private[0],
                        u = s.private[1];
                    if (0 !== i && 0 !== u) {
                        var p,
                            l = eU(eT(e, u + t, i), eE, n);
                        if (((s._defaultWidthX = l.defaultWidthX), (s._nominalWidthX = l.nominalWidthX), 0 !== l.subrs)) {
                            var c = eS(e, u + l.subrs + t);
                            (s._subrs = c.objects), (s._subrsBias = ex(s._subrs));
                        }
                        s._privateDict = l;
                    }
                    a.push(s);
                }
                return a;
            }
            function eC(e, t, r) {
                var n,
                    a,
                    o,
                    s,
                    i,
                    u,
                    p,
                    l,
                    c = new w(),
                    h = [],
                    f = 0,
                    d = !1,
                    g = !1,
                    v = 0,
                    m = 0;
                if (e.isCIDFont) {
                    var y = e.tables.cff.topDict._fdSelect[t.index],
                        b = e.tables.cff.topDict._fdArray[y];
                    (i = b._subrs), (u = b._subrsBias), (p = b._defaultWidthX), (l = b._nominalWidthX);
                } else (i = e.tables.cff.topDict._subrs), (u = e.tables.cff.topDict._subrsBias), (p = e.tables.cff.topDict._defaultWidthX), (l = e.tables.cff.topDict._nominalWidthX);
                var x = p;
                function S(e, t) {
                    g && c.closePath(), c.moveTo(e, t), (g = !0);
                }
                function T() {
                    h.length % 2 == 0 || d || (x = h.shift() + l), (f += h.length >> 1), (h.length = 0), (d = !0);
                }
                return (
                    !(function r(p) {
                        for (var y, b, k, U, O, E, R, C, L, D, w, I, M = 0; M < p.length;) {
                            var G = p[M];
                            switch (((M += 1), G)) {
                                case 1:
                                case 3:
                                case 18:
                                case 23:
                                    T();
                                    break;
                                case 4:
                                    h.length > 1 && !d && ((x = h.shift() + l), (d = !0)), (m += h.pop()), S(v, m);
                                    break;
                                case 5:
                                    for (; h.length > 0;) (v += h.shift()), (m += h.shift()), c.lineTo(v, m);
                                    break;
                                case 6:
                                    for (; h.length > 0 && ((v += h.shift()), c.lineTo(v, m), 0 !== h.length);) (m += h.shift()), c.lineTo(v, m);
                                    break;
                                case 7:
                                    for (; h.length > 0 && ((m += h.shift()), c.lineTo(v, m), 0 !== h.length);) (v += h.shift()), c.lineTo(v, m);
                                    break;
                                case 8:
                                    for (; h.length > 0;) (n = v + h.shift()), (a = m + h.shift()), (o = n + h.shift()), (s = a + h.shift()), (v = o + h.shift()), (m = s + h.shift()), c.curveTo(n, a, o, s, v, m);
                                    break;
                                case 10:
                                    (E = i[(O = h.pop() + u)]) && r(E);
                                    break;
                                case 11:
                                    return;
                                case 12:
                                    switch (((G = p[M]), (M += 1), G)) {
                                        case 35:
                                            (n = v + h.shift()),
                                                (a = m + h.shift()),
                                                (o = n + h.shift()),
                                                (s = a + h.shift()),
                                                (R = o + h.shift()),
                                                (C = s + h.shift()),
                                                (L = R + h.shift()),
                                                (D = C + h.shift()),
                                                (w = L + h.shift()),
                                                (I = D + h.shift()),
                                                (v = w + h.shift()),
                                                (m = I + h.shift()),
                                                h.shift(),
                                                c.curveTo(n, a, o, s, R, C),
                                                c.curveTo(L, D, w, I, v, m);
                                            break;
                                        case 34:
                                            (n = v + h.shift()),
                                                (a = m),
                                                (o = n + h.shift()),
                                                (s = a + h.shift()),
                                                (R = o + h.shift()),
                                                (C = s),
                                                (L = R + h.shift()),
                                                (D = s),
                                                (w = L + h.shift()),
                                                (I = m),
                                                (v = w + h.shift()),
                                                c.curveTo(n, a, o, s, R, C),
                                                c.curveTo(L, D, w, I, v, m);
                                            break;
                                        case 36:
                                            (n = v + h.shift()),
                                                (a = m + h.shift()),
                                                (o = n + h.shift()),
                                                (s = a + h.shift()),
                                                (R = o + h.shift()),
                                                (C = s),
                                                (L = R + h.shift()),
                                                (D = s),
                                                (w = L + h.shift()),
                                                (I = D + h.shift()),
                                                (v = w + h.shift()),
                                                c.curveTo(n, a, o, s, R, C),
                                                c.curveTo(L, D, w, I, v, m);
                                            break;
                                        case 37:
                                            (n = v + h.shift()),
                                                (a = m + h.shift()),
                                                (o = n + h.shift()),
                                                (s = a + h.shift()),
                                                (R = o + h.shift()),
                                                (C = s + h.shift()),
                                                (L = R + h.shift()),
                                                (D = C + h.shift()),
                                                (w = L + h.shift()),
                                                (I = D + h.shift()),
                                                Math.abs(w - v) > Math.abs(I - m) ? (v = w + h.shift()) : (m = I + h.shift()),
                                                c.curveTo(n, a, o, s, R, C),
                                                c.curveTo(L, D, w, I, v, m);
                                            break;
                                        default:
                                            console.log("Glyph " + t.index + ": unknown operator 1200" + G), (h.length = 0);
                                    }
                                    break;
                                case 14:
                                    h.length > 0 && !d && ((x = h.shift() + l), (d = !0)), g && (c.closePath(), (g = !1));
                                    break;
                                case 19:
                                case 20:
                                    T(), (M += (f + 7) >> 3);
                                    break;
                                case 21:
                                    h.length > 2 && !d && ((x = h.shift() + l), (d = !0)), (m += h.pop()), S((v += h.pop()), m);
                                    break;
                                case 22:
                                    h.length > 1 && !d && ((x = h.shift() + l), (d = !0)), S((v += h.pop()), m);
                                    break;
                                case 24:
                                    for (; h.length > 2;) (n = v + h.shift()), (a = m + h.shift()), (o = n + h.shift()), (s = a + h.shift()), (v = o + h.shift()), (m = s + h.shift()), c.curveTo(n, a, o, s, v, m);
                                    (v += h.shift()), (m += h.shift()), c.lineTo(v, m);
                                    break;
                                case 25:
                                    for (; h.length > 6;) (v += h.shift()), (m += h.shift()), c.lineTo(v, m);
                                    (n = v + h.shift()), (a = m + h.shift()), (o = n + h.shift()), (s = a + h.shift()), (v = o + h.shift()), (m = s + h.shift()), c.curveTo(n, a, o, s, v, m);
                                    break;
                                case 26:
                                    for (h.length % 2 && (v += h.shift()); h.length > 0;) (n = v), (a = m + h.shift()), (o = n + h.shift()), (s = a + h.shift()), (v = o), (m = s + h.shift()), c.curveTo(n, a, o, s, v, m);
                                    break;
                                case 27:
                                    for (h.length % 2 && (m += h.shift()); h.length > 0;) (n = v + h.shift()), (a = m), (o = n + h.shift()), (s = a + h.shift()), (v = o + h.shift()), (m = s), c.curveTo(n, a, o, s, v, m);
                                    break;
                                case 28:
                                    (y = p[M]), (b = p[M + 1]), h.push(((y << 24) | (b << 16)) >> 16), (M += 2);
                                    break;
                                case 29:
                                    (O = h.pop() + e.gsubrsBias), (E = e.gsubrs[O]) && r(E);
                                    break;
                                case 30:
                                    for (
                                        ;
                                        h.length > 0 && ((n = v), (a = m + h.shift()), (o = n + h.shift()), (s = a + h.shift()), (v = o + h.shift()), (m = s + (1 === h.length ? h.shift() : 0)), c.curveTo(n, a, o, s, v, m), 0 !== h.length);

                                    )
                                        (n = v + h.shift()), (a = m), (o = n + h.shift()), (m = (s = a + h.shift()) + h.shift()), (v = o + (1 === h.length ? h.shift() : 0)), c.curveTo(n, a, o, s, v, m);
                                    break;
                                case 31:
                                    for (
                                        ;
                                        h.length > 0 && ((n = v + h.shift()), (a = m), (o = n + h.shift()), (m = (s = a + h.shift()) + h.shift()), (v = o + (1 === h.length ? h.shift() : 0)), c.curveTo(n, a, o, s, v, m), 0 !== h.length);

                                    )
                                        (n = v), (a = m + h.shift()), (o = n + h.shift()), (s = a + h.shift()), (v = o + h.shift()), (m = s + (1 === h.length ? h.shift() : 0)), c.curveTo(n, a, o, s, v, m);
                                    break;
                                default:
                                    G < 32
                                        ? console.log("Glyph " + t.index + ": unknown operator " + G)
                                        : G < 247
                                            ? h.push(G - 139)
                                            : G < 251
                                                ? ((y = p[M]), (M += 1), h.push((G - 247) * 256 + y + 108))
                                                : G < 255
                                                    ? ((y = p[M]), (M += 1), h.push(-(256 * (G - 251)) - y - 108))
                                                    : ((y = p[M]), (b = p[M + 1]), (k = p[M + 2]), (U = p[M + 3]), (M += 4), h.push(((y << 24) | (b << 16) | (k << 8) | U) / 65536));
                            }
                        }
                    })(r),
                    (t.advanceWidth = x),
                    c
                );
            }
            function eL(e, t) {
                var r,
                    n = ei.indexOf(e);
                return n >= 0 && (r = n), (n = t.indexOf(e)) >= 0 ? (r = n + ei.length) : ((r = ei.length + t.length), t.push(e)), r;
            }
            function eD(e, t, r) {
                for (var n = {}, a = 0; a < e.length; a += 1) {
                    var o = e[a],
                        s = t[o.name];
                    void 0 !== s &&
                        !(function e(t, r) {
                            if (t === r) return !0;
                            if (!(Array.isArray(t) && Array.isArray(r)) || t.length !== r.length) return !1;
                            for (var n = 0; n < t.length; n += 1) if (!e(t[n], r[n])) return !1;
                            return !0;
                        })(s, o.value) &&
                        ("SID" === o.type && (s = eL(s, r)), (n[o.op] = { name: o.name, type: o.type, value: s }));
                }
                return n;
            }
            function ew(e, t) {
                var r = new K.Record("Top DICT", [{ name: "dict", type: "DICT", value: {} }]);
                return (r.dict = eD(eO, e, t)), r;
            }
            function eI(e) {
                var t = new K.Record("Top DICT INDEX", [{ name: "topDicts", type: "INDEX", value: [] }]);
                return (t.topDicts = [{ name: "topDict_0", type: "TABLE", value: e }]), t;
            }
            var eM = {
                parse: function (e, t, r, n) {
                    r.tables.cff = {};
                    var a,
                        o,
                        s,
                        i,
                        u = (((s = {}).formatMajor = eo.getCard8(e, t)), (s.formatMinor = eo.getCard8(e, t + 1)), (s.size = eo.getCard8(e, t + 2)), (s.offsetSize = eo.getCard8(e, t + 3)), (s.startOffset = t), (s.endOffset = t + 4), s),
                        p = eS(e, u.endOffset, eo.bytesToString),
                        l = eS(e, p.endOffset),
                        c = eS(e, l.endOffset, eo.bytesToString),
                        h = eS(e, c.endOffset);
                    (r.gsubrs = h.objects), (r.gsubrsBias = ex(r.gsubrs));
                    var f = eR(e, t, l.objects, c.objects);
                    if (1 !== f.length) throw Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + f.length);
                    var d = f[0];
                    if (
                        ((r.tables.cff.topDict = d),
                            d._privateDict && ((r.defaultWidthX = d._privateDict.defaultWidthX), (r.nominalWidthX = d._privateDict.nominalWidthX)),
                            void 0 !== d.ros[0] && void 0 !== d.ros[1] && (r.isCIDFont = !0),
                            r.isCIDFont)
                    ) {
                        var g = d.fdArray,
                            v = d.fdSelect;
                        if (0 === g || 0 === v) throw Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
                        var m = eS(e, (g += t)),
                            y = eR(e, t, m.objects, c.objects);
                        (d._fdArray = y),
                            (v += t),
                            (d._fdSelect = (function (e, t, r, n) {
                                var a = [],
                                    o = new eo.Parser(e, t),
                                    s = o.parseCard8();
                                if (0 === s)
                                    for (var i = 0; i < r; i++) {
                                        if ((u = o.parseCard8()) >= n) throw Error("CFF table CID Font FDSelect has bad FD index value " + u + " (FD count " + n + ")");
                                        a.push(u);
                                    }
                                else if (3 === s) {
                                    var u,
                                        p,
                                        l = o.parseCard16(),
                                        c = o.parseCard16();
                                    if (0 !== c) throw Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + c);
                                    for (var h = 0; h < l; h++) {
                                        if (((u = o.parseCard8()), (p = o.parseCard16()), u >= n)) throw Error("CFF table CID Font FDSelect has bad FD index value " + u + " (FD count " + n + ")");
                                        if (p > r) throw Error("CFF Table CID Font FDSelect format 3 range has bad GID " + p);
                                        for (; c < p; c++) a.push(u);
                                        c = p;
                                    }
                                    if (p !== r) throw Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + p);
                                } else throw Error("CFF Table CID Font FDSelect table has unsupported format " + s);
                                return a;
                            })(e, v, r.numGlyphs, y.length));
                    }
                    var b = t + d.private[1],
                        x = ((a = d.private[0]), (o = c.objects), eU(eT(e, b, a), eE, o));
                    if (((r.defaultWidthX = x.defaultWidthX), (r.nominalWidthX = x.nominalWidthX), 0 !== x.subrs)) {
                        var S = eS(e, b + x.subrs);
                        (r.subrs = S.objects), (r.subrsBias = ex(r.subrs));
                    } else (r.subrs = []), (r.subrsBias = 0);
                    n.lowMemory
                        ? ((i = (function (e, t) {
                            var r,
                                n,
                                a = [],
                                o = eo.getCard16(e, t);
                            if (0 !== o) {
                                var s = eo.getByte(e, t + 2);
                                r = t + (o + 1) * s + 2;
                                for (var i = t + 3, u = 0; u < o + 1; u += 1) a.push(eo.getOffset(e, i, s)), (i += s);
                                n = r + a[o];
                            } else n = t + 2;
                            return { offsets: a, startOffset: t, endOffset: n };
                        })(e, t + d.charStrings)),
                            (r.nGlyphs = i.offsets.length))
                        : ((i = eS(e, t + d.charStrings)), (r.nGlyphs = i.objects.length));
                    var T = (function (e, t, r, n) {
                        var a,
                            o,
                            s = new eo.Parser(e, t);
                        r -= 1;
                        var i = [".notdef"],
                            u = s.parseCard8();
                        if (0 === u) for (var p = 0; p < r; p += 1) (a = s.parseSID()), i.push(ek(n, a));
                        else if (1 === u)
                            for (; i.length <= r;) {
                                (a = s.parseSID()), (o = s.parseCard8());
                                for (var l = 0; l <= o; l += 1) i.push(ek(n, a)), (a += 1);
                            }
                        else if (2 === u)
                            for (; i.length <= r;) {
                                (a = s.parseSID()), (o = s.parseCard16());
                                for (var c = 0; c <= o; c += 1) i.push(ek(n, a)), (a += 1);
                            }
                        else throw Error("Unknown charset format " + u);
                        return i;
                    })(e, t + d.charset, r.nGlyphs, c.objects);
                    if (
                        (0 === d.encoding
                            ? (r.cffEncoding = new ef(eu, T))
                            : 1 === d.encoding
                                ? (r.cffEncoding = new ef(ep, T))
                                : (r.cffEncoding = (function (e, t, r) {
                                    var n,
                                        a = {},
                                        o = new eo.Parser(e, t),
                                        s = o.parseCard8();
                                    if (0 === s) for (var i = o.parseCard8(), u = 0; u < i; u += 1) a[(n = o.parseCard8())] = u;
                                    else if (1 === s) {
                                        var p = o.parseCard8();
                                        n = 1;
                                        for (var l = 0; l < p; l += 1) for (var c = o.parseCard8(), h = o.parseCard8(), f = c; f <= c + h; f += 1) (a[f] = n), (n += 1);
                                    } else throw Error("Unknown encoding format " + s);
                                    return new ef(a, r);
                                })(e, t + d.encoding, T)),
                            (r.encoding = r.encoding || r.cffEncoding),
                            (r.glyphs = new eb.GlyphSet(r)),
                            n.lowMemory)
                    )
                        r._push = function (n) {
                            var a = (function (e, t, r, n, a) {
                                var o = eo.getCard16(r, n),
                                    s = 0;
                                if (0 !== o) {
                                    var i = eo.getByte(r, n + 2);
                                    s = n + (o + 1) * i + 2;
                                }
                                return eo.getBytes(r, s + t[e], s + t[e + 1]);
                            })(n, i.offsets, e, t + d.charStrings);
                            r.glyphs.push(n, eb.cffGlyphLoader(r, n, eC, a));
                        };
                    else
                        for (var k = 0; k < r.nGlyphs; k += 1) {
                            var U = i.objects[k];
                            r.glyphs.push(k, eb.cffGlyphLoader(r, k, eC, U));
                        }
                },
                make: function (e, t) {
                    for (
                        var r,
                        n,
                        a,
                        o = new K.Table("CFF ", [
                            { name: "header", type: "RECORD" },
                            { name: "nameIndex", type: "RECORD" },
                            { name: "topDictIndex", type: "RECORD" },
                            { name: "stringIndex", type: "RECORD" },
                            { name: "globalSubrIndex", type: "RECORD" },
                            { name: "charsets", type: "RECORD" },
                            { name: "charStringsIndex", type: "RECORD" },
                            { name: "privateDict", type: "RECORD" },
                        ]),
                        s = 1 / t.unitsPerEm,
                        i = {
                            version: t.version,
                            fullName: t.fullName,
                            familyName: t.familyName,
                            weight: t.weightName,
                            fontBBox: t.fontBBox || [0, 0, 0, 0],
                            fontMatrix: [s, 0, 0, s, 0, 0],
                            charset: 999,
                            encoding: 0,
                            charStrings: 999,
                            private: [0, 999],
                        },
                        u = [],
                        p = 1;
                        p < e.length;
                        p += 1
                    )
                        (a = e.get(p)), u.push(a.name);
                    var l = [];
                    (o.header = new K.Record("Header", [
                        { name: "major", type: "Card8", value: 1 },
                        { name: "minor", type: "Card8", value: 0 },
                        { name: "hdrSize", type: "Card8", value: 4 },
                        { name: "major", type: "Card8", value: 1 },
                    ])),
                        (o.nameIndex = (function (e) {
                            var t = new K.Record("Name INDEX", [{ name: "names", type: "INDEX", value: [] }]);
                            t.names = [];
                            for (var r = 0; r < e.length; r += 1) t.names.push({ name: "name_" + r, type: "NAME", value: e[r] });
                            return t;
                        })([t.postScriptName]));
                    var c = ew(i, l);
                    (o.topDictIndex = eI(c)),
                        (o.globalSubrIndex = new K.Record("Global Subr INDEX", [{ name: "subrs", type: "INDEX", value: [] }])),
                        (o.charsets = (function (e, t) {
                            for (var r = new K.Record("Charsets", [{ name: "format", type: "Card8", value: 0 }]), n = 0; n < e.length; n += 1) {
                                var a = eL(e[n], t);
                                r.fields.push({ name: "glyph_" + n, type: "SID", value: a });
                            }
                            return r;
                        })(u, l)),
                        (o.charStringsIndex = (function (e) {
                            for (var t = new K.Record("CharStrings INDEX", [{ name: "charStrings", type: "INDEX", value: [] }]), r = 0; r < e.length; r += 1) {
                                var n = e.get(r),
                                    a = (function (e) {
                                        var t = [],
                                            r = e.path;
                                        t.push({ name: "width", type: "NUMBER", value: e.advanceWidth });
                                        for (var n = 0, a = 0, o = 0; o < r.commands.length; o += 1) {
                                            var s = void 0,
                                                i = void 0,
                                                u = r.commands[o];
                                            if ("Q" === u.type) {
                                                var p = 1 / 3,
                                                    l = 2 / 3;
                                                u = { type: "C", x: u.x, y: u.y, x1: Math.round(p * n + l * u.x1), y1: Math.round(p * a + l * u.y1), x2: Math.round(p * u.x + l * u.x1), y2: Math.round(p * u.y + l * u.y1) };
                                            }
                                            if ("M" === u.type)
                                                (s = Math.round(u.x - n)),
                                                    (i = Math.round(u.y - a)),
                                                    t.push({ name: "dx", type: "NUMBER", value: s }),
                                                    t.push({ name: "dy", type: "NUMBER", value: i }),
                                                    t.push({ name: "rmoveto", type: "OP", value: 21 }),
                                                    (n = Math.round(u.x)),
                                                    (a = Math.round(u.y));
                                            else if ("L" === u.type)
                                                (s = Math.round(u.x - n)),
                                                    (i = Math.round(u.y - a)),
                                                    t.push({ name: "dx", type: "NUMBER", value: s }),
                                                    t.push({ name: "dy", type: "NUMBER", value: i }),
                                                    t.push({ name: "rlineto", type: "OP", value: 5 }),
                                                    (n = Math.round(u.x)),
                                                    (a = Math.round(u.y));
                                            else if ("C" === u.type) {
                                                var c = Math.round(u.x1 - n),
                                                    h = Math.round(u.y1 - a),
                                                    f = Math.round(u.x2 - u.x1),
                                                    d = Math.round(u.y2 - u.y1);
                                                (s = Math.round(u.x - u.x2)),
                                                    (i = Math.round(u.y - u.y2)),
                                                    t.push({ name: "dx1", type: "NUMBER", value: c }),
                                                    t.push({ name: "dy1", type: "NUMBER", value: h }),
                                                    t.push({ name: "dx2", type: "NUMBER", value: f }),
                                                    t.push({ name: "dy2", type: "NUMBER", value: d }),
                                                    t.push({ name: "dx", type: "NUMBER", value: s }),
                                                    t.push({ name: "dy", type: "NUMBER", value: i }),
                                                    t.push({ name: "rrcurveto", type: "OP", value: 8 }),
                                                    (n = Math.round(u.x)),
                                                    (a = Math.round(u.y));
                                            }
                                        }
                                        return t.push({ name: "endchar", type: "OP", value: 14 }), t;
                                    })(n);
                                t.charStrings.push({ name: n.name, type: "CHARSTRING", value: a });
                            }
                            return t;
                        })(e)),
                        (o.privateDict = ((r = {}), ((n = new K.Record("Private DICT", [{ name: "dict", type: "DICT", value: {} }])).dict = eD(eE, r, l)), n)),
                        (o.stringIndex = (function (e) {
                            var t = new K.Record("String INDEX", [{ name: "strings", type: "INDEX", value: [] }]);
                            t.strings = [];
                            for (var r = 0; r < e.length; r += 1) t.strings.push({ name: "string_" + r, type: "STRING", value: e[r] });
                            return t;
                        })(l));
                    var h = o.header.sizeOf() + o.nameIndex.sizeOf() + o.topDictIndex.sizeOf() + o.stringIndex.sizeOf() + o.globalSubrIndex.sizeOf();
                    return (i.charset = h), (i.encoding = 0), (i.charStrings = i.charset + o.charsets.sizeOf()), (i.private[1] = i.charStrings + o.charStringsIndex.sizeOf()), (c = ew(i, l)), (o.topDictIndex = eI(c)), o;
                },
            },
                eG = {
                    parse: function (e, t) {
                        var r = {},
                            n = new eo.Parser(e, t);
                        return (
                            (r.version = n.parseVersion()),
                            (r.fontRevision = Math.round(1e3 * n.parseFixed()) / 1e3),
                            (r.checkSumAdjustment = n.parseULong()),
                            (r.magicNumber = n.parseULong()),
                            M.argument(1594834165 === r.magicNumber, "Font header has wrong magic number."),
                            (r.flags = n.parseUShort()),
                            (r.unitsPerEm = n.parseUShort()),
                            (r.created = n.parseLongDateTime()),
                            (r.modified = n.parseLongDateTime()),
                            (r.xMin = n.parseShort()),
                            (r.yMin = n.parseShort()),
                            (r.xMax = n.parseShort()),
                            (r.yMax = n.parseShort()),
                            (r.macStyle = n.parseUShort()),
                            (r.lowestRecPPEM = n.parseUShort()),
                            (r.fontDirectionHint = n.parseShort()),
                            (r.indexToLocFormat = n.parseShort()),
                            (r.glyphDataFormat = n.parseShort()),
                            r
                        );
                    },
                    make: function (e) {
                        var t = Math.round(new Date().getTime() / 1e3) + 2082844800,
                            r = t;
                        return (
                            e.createdTimestamp && (r = e.createdTimestamp + 2082844800),
                            new K.Table(
                                "head",
                                [
                                    { name: "version", type: "FIXED", value: 65536 },
                                    { name: "fontRevision", type: "FIXED", value: 65536 },
                                    { name: "checkSumAdjustment", type: "ULONG", value: 0 },
                                    { name: "magicNumber", type: "ULONG", value: 1594834165 },
                                    { name: "flags", type: "USHORT", value: 0 },
                                    { name: "unitsPerEm", type: "USHORT", value: 1e3 },
                                    { name: "created", type: "LONGDATETIME", value: r },
                                    { name: "modified", type: "LONGDATETIME", value: t },
                                    { name: "xMin", type: "SHORT", value: 0 },
                                    { name: "yMin", type: "SHORT", value: 0 },
                                    { name: "xMax", type: "SHORT", value: 0 },
                                    { name: "yMax", type: "SHORT", value: 0 },
                                    { name: "macStyle", type: "USHORT", value: 0 },
                                    { name: "lowestRecPPEM", type: "USHORT", value: 0 },
                                    { name: "fontDirectionHint", type: "SHORT", value: 2 },
                                    { name: "indexToLocFormat", type: "SHORT", value: 0 },
                                    { name: "glyphDataFormat", type: "SHORT", value: 0 },
                                ],
                                e
                            )
                        );
                    },
                },
                eB = {
                    parse: function (e, t) {
                        var r = {},
                            n = new eo.Parser(e, t);
                        return (
                            (r.version = n.parseVersion()),
                            (r.ascender = n.parseShort()),
                            (r.descender = n.parseShort()),
                            (r.lineGap = n.parseShort()),
                            (r.advanceWidthMax = n.parseUShort()),
                            (r.minLeftSideBearing = n.parseShort()),
                            (r.minRightSideBearing = n.parseShort()),
                            (r.xMaxExtent = n.parseShort()),
                            (r.caretSlopeRise = n.parseShort()),
                            (r.caretSlopeRun = n.parseShort()),
                            (r.caretOffset = n.parseShort()),
                            (n.relativeOffset += 8),
                            (r.metricDataFormat = n.parseShort()),
                            (r.numberOfHMetrics = n.parseUShort()),
                            r
                        );
                    },
                    make: function (e) {
                        return new K.Table(
                            "hhea",
                            [
                                { name: "version", type: "FIXED", value: 65536 },
                                { name: "ascender", type: "FWORD", value: 0 },
                                { name: "descender", type: "FWORD", value: 0 },
                                { name: "lineGap", type: "FWORD", value: 0 },
                                { name: "advanceWidthMax", type: "UFWORD", value: 0 },
                                { name: "minLeftSideBearing", type: "FWORD", value: 0 },
                                { name: "minRightSideBearing", type: "FWORD", value: 0 },
                                { name: "xMaxExtent", type: "FWORD", value: 0 },
                                { name: "caretSlopeRise", type: "SHORT", value: 1 },
                                { name: "caretSlopeRun", type: "SHORT", value: 0 },
                                { name: "caretOffset", type: "SHORT", value: 0 },
                                { name: "reserved1", type: "SHORT", value: 0 },
                                { name: "reserved2", type: "SHORT", value: 0 },
                                { name: "reserved3", type: "SHORT", value: 0 },
                                { name: "reserved4", type: "SHORT", value: 0 },
                                { name: "metricDataFormat", type: "SHORT", value: 0 },
                                { name: "numberOfHMetrics", type: "USHORT", value: 0 },
                            ],
                            e
                        );
                    },
                },
                eF = function (e, t, r, n, a, o, s) {
                    s.lowMemory
                        ? (function (e, t, r, n, a) {
                            e._hmtxTableData = {};
                            for (var o, s, i = new eo.Parser(t, r), u = 0; u < a; u += 1) u < n && ((o = i.parseUShort()), (s = i.parseShort())), (e._hmtxTableData[u] = { advanceWidth: o, leftSideBearing: s });
                        })(e, t, r, n, a)
                        : (function (e, t, r, n, a) {
                            for (var o, s, i = new eo.Parser(e, t), u = 0; u < n; u += 1) {
                                u < r && ((o = i.parseUShort()), (s = i.parseShort()));
                                var p = a.get(u);
                                (p.advanceWidth = o), (p.leftSideBearing = s);
                            }
                        })(t, r, n, a, o);
                },
                eA = function (e) {
                    for (var t = new K.Table("hmtx", []), r = 0; r < e.length; r += 1) {
                        var n = e.get(r),
                            a = n.advanceWidth || 0,
                            o = n.leftSideBearing || 0;
                        t.fields.push({ name: "advanceWidth_" + r, type: "USHORT", value: a }), t.fields.push({ name: "leftSideBearing_" + r, type: "SHORT", value: o });
                    }
                    return t;
                },
                eP = {
                    make: function (e) {
                        for (
                            var t = new K.Table("ltag", [
                                { name: "version", type: "ULONG", value: 1 },
                                { name: "flags", type: "ULONG", value: 0 },
                                { name: "numTags", type: "ULONG", value: e.length },
                            ]),
                            r = "",
                            n = 12 + 4 * e.length,
                            a = 0;
                            a < e.length;
                            ++a
                        ) {
                            var o = r.indexOf(e[a]);
                            o < 0 && ((o = r.length), (r += e[a])), t.fields.push({ name: "offset " + a, type: "USHORT", value: n + o }), t.fields.push({ name: "length " + a, type: "USHORT", value: e[a].length });
                        }
                        return t.fields.push({ name: "stringPool", type: "CHARARRAY", value: r }), t;
                    },
                    parse: function (e, t) {
                        var r = new eo.Parser(e, t),
                            n = r.parseULong();
                        M.argument(1 === n, "Unsupported ltag table version."), r.skip("uLong", 1);
                        for (var a = r.parseULong(), o = [], s = 0; s < a; s++) {
                            for (var i = "", u = t + r.parseUShort(), p = r.parseUShort(), l = u; l < u + p; ++l) i += String.fromCharCode(e.getInt8(l));
                            o.push(i);
                        }
                        return o;
                    },
                },
                eN = {
                    parse: function (e, t) {
                        var r = {},
                            n = new eo.Parser(e, t);
                        return (
                            (r.version = n.parseVersion()),
                            (r.numGlyphs = n.parseUShort()),
                            1 === r.version &&
                            ((r.maxPoints = n.parseUShort()),
                                (r.maxContours = n.parseUShort()),
                                (r.maxCompositePoints = n.parseUShort()),
                                (r.maxCompositeContours = n.parseUShort()),
                                (r.maxZones = n.parseUShort()),
                                (r.maxTwilightPoints = n.parseUShort()),
                                (r.maxStorage = n.parseUShort()),
                                (r.maxFunctionDefs = n.parseUShort()),
                                (r.maxInstructionDefs = n.parseUShort()),
                                (r.maxStackElements = n.parseUShort()),
                                (r.maxSizeOfInstructions = n.parseUShort()),
                                (r.maxComponentElements = n.parseUShort()),
                                (r.maxComponentDepth = n.parseUShort())),
                            r
                        );
                    },
                    make: function (e) {
                        return new K.Table("maxp", [
                            { name: "version", type: "FIXED", value: 20480 },
                            { name: "numGlyphs", type: "USHORT", value: e },
                        ]);
                    },
                },
                eH = [
                    "copyright",
                    "fontFamily",
                    "fontSubfamily",
                    "uniqueID",
                    "fullName",
                    "version",
                    "postScriptName",
                    "trademark",
                    "manufacturer",
                    "designer",
                    "description",
                    "manufacturerURL",
                    "designerURL",
                    "license",
                    "licenseURL",
                    "reserved",
                    "preferredFamily",
                    "preferredSubfamily",
                    "compatibleFullName",
                    "sampleText",
                    "postScriptFindFontName",
                    "wwsFamily",
                    "wwsSubfamily",
                ],
                ez = {
                    0: "en",
                    1: "fr",
                    2: "de",
                    3: "it",
                    4: "nl",
                    5: "sv",
                    6: "es",
                    7: "da",
                    8: "pt",
                    9: "no",
                    10: "he",
                    11: "ja",
                    12: "ar",
                    13: "fi",
                    14: "el",
                    15: "is",
                    16: "mt",
                    17: "tr",
                    18: "hr",
                    19: "zh-Hant",
                    20: "ur",
                    21: "hi",
                    22: "th",
                    23: "ko",
                    24: "lt",
                    25: "pl",
                    26: "hu",
                    27: "es",
                    28: "lv",
                    29: "se",
                    30: "fo",
                    31: "fa",
                    32: "ru",
                    33: "zh",
                    34: "nl-BE",
                    35: "ga",
                    36: "sq",
                    37: "ro",
                    38: "cz",
                    39: "sk",
                    40: "si",
                    41: "yi",
                    42: "sr",
                    43: "mk",
                    44: "bg",
                    45: "uk",
                    46: "be",
                    47: "uz",
                    48: "kk",
                    49: "az-Cyrl",
                    50: "az-Arab",
                    51: "hy",
                    52: "ka",
                    53: "mo",
                    54: "ky",
                    55: "tg",
                    56: "tk",
                    57: "mn-CN",
                    58: "mn",
                    59: "ps",
                    60: "ks",
                    61: "ku",
                    62: "sd",
                    63: "bo",
                    64: "ne",
                    65: "sa",
                    66: "mr",
                    67: "bn",
                    68: "as",
                    69: "gu",
                    70: "pa",
                    71: "or",
                    72: "ml",
                    73: "kn",
                    74: "ta",
                    75: "te",
                    76: "si",
                    77: "my",
                    78: "km",
                    79: "lo",
                    80: "vi",
                    81: "id",
                    82: "tl",
                    83: "ms",
                    84: "ms-Arab",
                    85: "am",
                    86: "ti",
                    87: "om",
                    88: "so",
                    89: "sw",
                    90: "rw",
                    91: "rn",
                    92: "ny",
                    93: "mg",
                    94: "eo",
                    128: "cy",
                    129: "eu",
                    130: "ca",
                    131: "la",
                    132: "qu",
                    133: "gn",
                    134: "ay",
                    135: "tt",
                    136: "ug",
                    137: "dz",
                    138: "jv",
                    139: "su",
                    140: "gl",
                    141: "af",
                    142: "br",
                    143: "iu",
                    144: "gd",
                    145: "gv",
                    146: "ga",
                    147: "to",
                    148: "el-polyton",
                    149: "kl",
                    150: "az",
                    151: "nn",
                },
                eW = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 5,
                    11: 1,
                    12: 4,
                    13: 0,
                    14: 6,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 2,
                    20: 4,
                    21: 9,
                    22: 21,
                    23: 3,
                    24: 29,
                    25: 29,
                    26: 29,
                    27: 29,
                    28: 29,
                    29: 0,
                    30: 0,
                    31: 4,
                    32: 7,
                    33: 25,
                    34: 0,
                    35: 0,
                    36: 0,
                    37: 0,
                    38: 29,
                    39: 29,
                    40: 0,
                    41: 5,
                    42: 7,
                    43: 7,
                    44: 7,
                    45: 7,
                    46: 7,
                    47: 7,
                    48: 7,
                    49: 7,
                    50: 4,
                    51: 24,
                    52: 23,
                    53: 7,
                    54: 7,
                    55: 7,
                    56: 7,
                    57: 27,
                    58: 7,
                    59: 4,
                    60: 4,
                    61: 4,
                    62: 4,
                    63: 26,
                    64: 9,
                    65: 9,
                    66: 9,
                    67: 13,
                    68: 13,
                    69: 11,
                    70: 10,
                    71: 12,
                    72: 17,
                    73: 16,
                    74: 14,
                    75: 15,
                    76: 18,
                    77: 19,
                    78: 20,
                    79: 22,
                    80: 30,
                    81: 0,
                    82: 0,
                    83: 0,
                    84: 4,
                    85: 28,
                    86: 28,
                    87: 28,
                    88: 0,
                    89: 0,
                    90: 0,
                    91: 0,
                    92: 0,
                    93: 0,
                    94: 0,
                    128: 0,
                    129: 0,
                    130: 0,
                    131: 0,
                    132: 0,
                    133: 0,
                    134: 0,
                    135: 7,
                    136: 4,
                    137: 26,
                    138: 0,
                    139: 0,
                    140: 0,
                    141: 0,
                    142: 0,
                    143: 28,
                    144: 0,
                    145: 0,
                    146: 0,
                    147: 0,
                    148: 6,
                    149: 0,
                    150: 0,
                    151: 0,
                },
                eq = {
                    1078: "af",
                    1052: "sq",
                    1156: "gsw",
                    1118: "am",
                    5121: "ar-DZ",
                    15361: "ar-BH",
                    3073: "ar",
                    2049: "ar-IQ",
                    11265: "ar-JO",
                    13313: "ar-KW",
                    12289: "ar-LB",
                    4097: "ar-LY",
                    6145: "ary",
                    8193: "ar-OM",
                    16385: "ar-QA",
                    1025: "ar-SA",
                    10241: "ar-SY",
                    7169: "aeb",
                    14337: "ar-AE",
                    9217: "ar-YE",
                    1067: "hy",
                    1101: "as",
                    2092: "az-Cyrl",
                    1068: "az",
                    1133: "ba",
                    1069: "eu",
                    1059: "be",
                    2117: "bn",
                    1093: "bn-IN",
                    8218: "bs-Cyrl",
                    5146: "bs",
                    1150: "br",
                    1026: "bg",
                    1027: "ca",
                    3076: "zh-HK",
                    5124: "zh-MO",
                    2052: "zh",
                    4100: "zh-SG",
                    1028: "zh-TW",
                    1155: "co",
                    1050: "hr",
                    4122: "hr-BA",
                    1029: "cs",
                    1030: "da",
                    1164: "prs",
                    1125: "dv",
                    2067: "nl-BE",
                    1043: "nl",
                    3081: "en-AU",
                    10249: "en-BZ",
                    4105: "en-CA",
                    9225: "en-029",
                    16393: "en-IN",
                    6153: "en-IE",
                    8201: "en-JM",
                    17417: "en-MY",
                    5129: "en-NZ",
                    13321: "en-PH",
                    18441: "en-SG",
                    7177: "en-ZA",
                    11273: "en-TT",
                    2057: "en-GB",
                    1033: "en",
                    12297: "en-ZW",
                    1061: "et",
                    1080: "fo",
                    1124: "fil",
                    1035: "fi",
                    2060: "fr-BE",
                    3084: "fr-CA",
                    1036: "fr",
                    5132: "fr-LU",
                    6156: "fr-MC",
                    4108: "fr-CH",
                    1122: "fy",
                    1110: "gl",
                    1079: "ka",
                    3079: "de-AT",
                    1031: "de",
                    5127: "de-LI",
                    4103: "de-LU",
                    2055: "de-CH",
                    1032: "el",
                    1135: "kl",
                    1095: "gu",
                    1128: "ha",
                    1037: "he",
                    1081: "hi",
                    1038: "hu",
                    1039: "is",
                    1136: "ig",
                    1057: "id",
                    1117: "iu",
                    2141: "iu-Latn",
                    2108: "ga",
                    1076: "xh",
                    1077: "zu",
                    1040: "it",
                    2064: "it-CH",
                    1041: "ja",
                    1099: "kn",
                    1087: "kk",
                    1107: "km",
                    1158: "quc",
                    1159: "rw",
                    1089: "sw",
                    1111: "kok",
                    1042: "ko",
                    1088: "ky",
                    1108: "lo",
                    1062: "lv",
                    1063: "lt",
                    2094: "dsb",
                    1134: "lb",
                    1071: "mk",
                    2110: "ms-BN",
                    1086: "ms",
                    1100: "ml",
                    1082: "mt",
                    1153: "mi",
                    1146: "arn",
                    1102: "mr",
                    1148: "moh",
                    1104: "mn",
                    2128: "mn-CN",
                    1121: "ne",
                    1044: "nb",
                    2068: "nn",
                    1154: "oc",
                    1096: "or",
                    1123: "ps",
                    1045: "pl",
                    1046: "pt",
                    2070: "pt-PT",
                    1094: "pa",
                    1131: "qu-BO",
                    2155: "qu-EC",
                    3179: "qu",
                    1048: "ro",
                    1047: "rm",
                    1049: "ru",
                    9275: "smn",
                    4155: "smj-NO",
                    5179: "smj",
                    3131: "se-FI",
                    1083: "se",
                    2107: "se-SE",
                    8251: "sms",
                    6203: "sma-NO",
                    7227: "sms",
                    1103: "sa",
                    7194: "sr-Cyrl-BA",
                    3098: "sr",
                    6170: "sr-Latn-BA",
                    2074: "sr-Latn",
                    1132: "nso",
                    1074: "tn",
                    1115: "si",
                    1051: "sk",
                    1060: "sl",
                    11274: "es-AR",
                    16394: "es-BO",
                    13322: "es-CL",
                    9226: "es-CO",
                    5130: "es-CR",
                    7178: "es-DO",
                    12298: "es-EC",
                    17418: "es-SV",
                    4106: "es-GT",
                    18442: "es-HN",
                    2058: "es-MX",
                    19466: "es-NI",
                    6154: "es-PA",
                    15370: "es-PY",
                    10250: "es-PE",
                    20490: "es-PR",
                    3082: "es",
                    1034: "es",
                    21514: "es-US",
                    14346: "es-UY",
                    8202: "es-VE",
                    2077: "sv-FI",
                    1053: "sv",
                    1114: "syr",
                    1064: "tg",
                    2143: "tzm",
                    1097: "ta",
                    1092: "tt",
                    1098: "te",
                    1054: "th",
                    1105: "bo",
                    1055: "tr",
                    1090: "tk",
                    1152: "ug",
                    1058: "uk",
                    1070: "hsb",
                    1056: "ur",
                    2115: "uz-Cyrl",
                    1091: "uz",
                    1066: "vi",
                    1106: "cy",
                    1160: "wo",
                    1157: "sah",
                    1144: "ii",
                    1130: "yo",
                },
                e_ = "utf-16",
                eX = {
                    0: "macintosh",
                    1: "x-mac-japanese",
                    2: "x-mac-chinesetrad",
                    3: "x-mac-korean",
                    6: "x-mac-greek",
                    7: "x-mac-cyrillic",
                    9: "x-mac-devanagai",
                    10: "x-mac-gurmukhi",
                    11: "x-mac-gujarati",
                    12: "x-mac-oriya",
                    13: "x-mac-bengali",
                    14: "x-mac-tamil",
                    15: "x-mac-telugu",
                    16: "x-mac-kannada",
                    17: "x-mac-malayalam",
                    18: "x-mac-sinhalese",
                    19: "x-mac-burmese",
                    20: "x-mac-khmer",
                    21: "x-mac-thai",
                    22: "x-mac-lao",
                    23: "x-mac-georgian",
                    24: "x-mac-armenian",
                    25: "x-mac-chinesesimp",
                    26: "x-mac-tibetan",
                    27: "x-mac-mongolian",
                    28: "x-mac-ethiopic",
                    29: "x-mac-ce",
                    30: "x-mac-vietnamese",
                    31: "x-mac-extarabic",
                },
                eV = {
                    15: "x-mac-icelandic",
                    17: "x-mac-turkish",
                    18: "x-mac-croatian",
                    24: "x-mac-ce",
                    25: "x-mac-ce",
                    26: "x-mac-ce",
                    27: "x-mac-ce",
                    28: "x-mac-ce",
                    30: "x-mac-icelandic",
                    37: "x-mac-romanian",
                    38: "x-mac-ce",
                    39: "x-mac-ce",
                    40: "x-mac-ce",
                    143: "x-mac-inuit",
                    146: "x-mac-gaelic",
                };
            function eY(e, t, r) {
                switch (e) {
                    case 0:
                        return e_;
                    case 1:
                        return eV[r] || eX[t];
                    case 3:
                        if (1 === t || 10 === t) return e_;
                }
            }
            function ej(e) {
                var t = {};
                for (var r in e) t[e[r]] = parseInt(r);
                return t;
            }
            function eZ(e, t, r, n, a, o) {
                return new K.Record("NameRecord", [
                    { name: "platformID", type: "USHORT", value: e },
                    { name: "encodingID", type: "USHORT", value: t },
                    { name: "languageID", type: "USHORT", value: r },
                    { name: "nameID", type: "USHORT", value: n },
                    { name: "length", type: "USHORT", value: a },
                    { name: "offset", type: "USHORT", value: o },
                ]);
            }
            function eQ(e, t) {
                var r = (function (e, t) {
                    var r = e.length,
                        n = t.length - r + 1;
                    e: for (var a = 0; a < n; a++)
                        for (; a < n; a++) {
                            for (var o = 0; o < r; o++) if (t[a + o] !== e[o]) continue e;
                            return a;
                        }
                    return -1;
                })(e, t);
                if (r < 0) {
                    r = t.length;
                    for (var n = 0, a = e.length; n < a; ++n) t.push(e[n]);
                }
                return r;
            }
            var eK = function (e, t, r) {
                for (var n = {}, a = new eo.Parser(e, t), o = a.parseUShort(), s = a.parseUShort(), i = a.offset + a.parseUShort(), u = 0; u < s; u++) {
                    var p = a.parseUShort(),
                        l = a.parseUShort(),
                        c = a.parseUShort(),
                        h = a.parseUShort(),
                        f = eH[h] || h,
                        d = a.parseUShort(),
                        g = a.parseUShort(),
                        v = (function (e, t, r) {
                            switch (e) {
                                case 0:
                                    if (65535 === t) return "und";
                                    if (r) return r[t];
                                    break;
                                case 1:
                                    return ez[t];
                                case 3:
                                    return eq[t];
                            }
                        })(p, c, r),
                        m = eY(p, l, c);
                    if (void 0 !== m && void 0 !== v) {
                        var y = void 0;
                        if ((y = m === e_ ? G.UTF16(e, i + g, d) : G.MACSTRING(e, i + g, d, m))) {
                            var b = n[f];
                            void 0 === b && (b = n[f] = {}), (b[v] = y);
                        }
                    }
                }
                return 1 === o && a.parseUShort(), n;
            },
                eJ = function (e, t) {
                    var r,
                        n = [],
                        a = {},
                        o = ej(eH);
                    for (var s in e) {
                        var i = o[s];
                        if ((void 0 === i && (i = s), isNaN((r = parseInt(i))))) throw Error('Name table entry "' + s + '" does not exist, see nameTableNames for complete list.');
                        (a[r] = e[s]), n.push(r);
                    }
                    for (var u = ej(ez), p = ej(eq), l = [], c = [], h = 0; h < n.length; h++) {
                        var f = a[(r = n[h])];
                        for (var d in f) {
                            var g = f[d],
                                v = 1,
                                m = u[d],
                                y = eW[m],
                                b = eY(v, y, m),
                                x = B.MACSTRING(g, b);
                            void 0 === x && ((v = 0), (m = t.indexOf(d)) < 0 && ((m = t.length), t.push(d)), (y = 4), (x = B.UTF16(g)));
                            var S = eQ(x, c);
                            l.push(eZ(v, y, m, r, x.length, S));
                            var T = p[d];
                            if (void 0 !== T) {
                                var k = B.UTF16(g),
                                    U = eQ(k, c);
                                l.push(eZ(3, 1, T, r, k.length, U));
                            }
                        }
                    }
                    l.sort(function (e, t) {
                        return e.platformID - t.platformID || e.encodingID - t.encodingID || e.languageID - t.languageID || e.nameID - t.nameID;
                    });
                    for (
                        var O = new K.Table("name", [
                            { name: "format", type: "USHORT", value: 0 },
                            { name: "count", type: "USHORT", value: l.length },
                            { name: "stringOffset", type: "USHORT", value: 6 + 12 * l.length },
                        ]),
                        E = 0;
                        E < l.length;
                        E++
                    )
                        O.fields.push({ name: "record_" + E, type: "RECORD", value: l[E] });
                    return O.fields.push({ name: "strings", type: "LITERAL", value: c }), O;
                },
                e$ = [
                    { begin: 0, end: 127 },
                    { begin: 128, end: 255 },
                    { begin: 256, end: 383 },
                    { begin: 384, end: 591 },
                    { begin: 592, end: 687 },
                    { begin: 688, end: 767 },
                    { begin: 768, end: 879 },
                    { begin: 880, end: 1023 },
                    { begin: 11392, end: 11519 },
                    { begin: 1024, end: 1279 },
                    { begin: 1328, end: 1423 },
                    { begin: 1424, end: 1535 },
                    { begin: 42240, end: 42559 },
                    { begin: 1536, end: 1791 },
                    { begin: 1984, end: 2047 },
                    { begin: 2304, end: 2431 },
                    { begin: 2432, end: 2559 },
                    { begin: 2560, end: 2687 },
                    { begin: 2688, end: 2815 },
                    { begin: 2816, end: 2943 },
                    { begin: 2944, end: 3071 },
                    { begin: 3072, end: 3199 },
                    { begin: 3200, end: 3327 },
                    { begin: 3328, end: 3455 },
                    { begin: 3584, end: 3711 },
                    { begin: 3712, end: 3839 },
                    { begin: 4256, end: 4351 },
                    { begin: 6912, end: 7039 },
                    { begin: 4352, end: 4607 },
                    { begin: 7680, end: 7935 },
                    { begin: 7936, end: 8191 },
                    { begin: 8192, end: 8303 },
                    { begin: 8304, end: 8351 },
                    { begin: 8352, end: 8399 },
                    { begin: 8400, end: 8447 },
                    { begin: 8448, end: 8527 },
                    { begin: 8528, end: 8591 },
                    { begin: 8592, end: 8703 },
                    { begin: 8704, end: 8959 },
                    { begin: 8960, end: 9215 },
                    { begin: 9216, end: 9279 },
                    { begin: 9280, end: 9311 },
                    { begin: 9312, end: 9471 },
                    { begin: 9472, end: 9599 },
                    { begin: 9600, end: 9631 },
                    { begin: 9632, end: 9727 },
                    { begin: 9728, end: 9983 },
                    { begin: 9984, end: 10175 },
                    { begin: 12288, end: 12351 },
                    { begin: 12352, end: 12447 },
                    { begin: 12448, end: 12543 },
                    { begin: 12544, end: 12591 },
                    { begin: 12592, end: 12687 },
                    { begin: 43072, end: 43135 },
                    { begin: 12800, end: 13055 },
                    { begin: 13056, end: 13311 },
                    { begin: 44032, end: 55215 },
                    { begin: 55296, end: 57343 },
                    { begin: 67840, end: 67871 },
                    { begin: 19968, end: 40959 },
                    { begin: 57344, end: 63743 },
                    { begin: 12736, end: 12783 },
                    { begin: 64256, end: 64335 },
                    { begin: 64336, end: 65023 },
                    { begin: 65056, end: 65071 },
                    { begin: 65040, end: 65055 },
                    { begin: 65104, end: 65135 },
                    { begin: 65136, end: 65279 },
                    { begin: 65280, end: 65519 },
                    { begin: 65520, end: 65535 },
                    { begin: 3840, end: 4095 },
                    { begin: 1792, end: 1871 },
                    { begin: 1920, end: 1983 },
                    { begin: 3456, end: 3583 },
                    { begin: 4096, end: 4255 },
                    { begin: 4608, end: 4991 },
                    { begin: 5024, end: 5119 },
                    { begin: 5120, end: 5759 },
                    { begin: 5760, end: 5791 },
                    { begin: 5792, end: 5887 },
                    { begin: 6016, end: 6143 },
                    { begin: 6144, end: 6319 },
                    { begin: 10240, end: 10495 },
                    { begin: 40960, end: 42127 },
                    { begin: 5888, end: 5919 },
                    { begin: 66304, end: 66351 },
                    { begin: 66352, end: 66383 },
                    { begin: 66560, end: 66639 },
                    { begin: 118784, end: 119039 },
                    { begin: 119808, end: 120831 },
                    { begin: 1044480, end: 1048573 },
                    { begin: 65024, end: 65039 },
                    { begin: 917504, end: 917631 },
                    { begin: 6400, end: 6479 },
                    { begin: 6480, end: 6527 },
                    { begin: 6528, end: 6623 },
                    { begin: 6656, end: 6687 },
                    { begin: 11264, end: 11359 },
                    { begin: 11568, end: 11647 },
                    { begin: 19904, end: 19967 },
                    { begin: 43008, end: 43055 },
                    { begin: 65536, end: 65663 },
                    { begin: 65856, end: 65935 },
                    { begin: 66432, end: 66463 },
                    { begin: 66464, end: 66527 },
                    { begin: 66640, end: 66687 },
                    { begin: 66688, end: 66735 },
                    { begin: 67584, end: 67647 },
                    { begin: 68096, end: 68191 },
                    { begin: 119552, end: 119647 },
                    { begin: 73728, end: 74751 },
                    { begin: 119648, end: 119679 },
                    { begin: 7040, end: 7103 },
                    { begin: 7168, end: 7247 },
                    { begin: 7248, end: 7295 },
                    { begin: 43136, end: 43231 },
                    { begin: 43264, end: 43311 },
                    { begin: 43312, end: 43359 },
                    { begin: 43520, end: 43615 },
                    { begin: 65936, end: 65999 },
                    { begin: 66e3, end: 66047 },
                    { begin: 66208, end: 66271 },
                    { begin: 127024, end: 127135 },
                ],
                e0 = {
                    parse: function (e, t) {
                        var r = {},
                            n = new eo.Parser(e, t);
                        (r.version = n.parseUShort()),
                            (r.xAvgCharWidth = n.parseShort()),
                            (r.usWeightClass = n.parseUShort()),
                            (r.usWidthClass = n.parseUShort()),
                            (r.fsType = n.parseUShort()),
                            (r.ySubscriptXSize = n.parseShort()),
                            (r.ySubscriptYSize = n.parseShort()),
                            (r.ySubscriptXOffset = n.parseShort()),
                            (r.ySubscriptYOffset = n.parseShort()),
                            (r.ySuperscriptXSize = n.parseShort()),
                            (r.ySuperscriptYSize = n.parseShort()),
                            (r.ySuperscriptXOffset = n.parseShort()),
                            (r.ySuperscriptYOffset = n.parseShort()),
                            (r.yStrikeoutSize = n.parseShort()),
                            (r.yStrikeoutPosition = n.parseShort()),
                            (r.sFamilyClass = n.parseShort()),
                            (r.panose = []);
                        for (var a = 0; a < 10; a++) r.panose[a] = n.parseByte();
                        return (
                            (r.ulUnicodeRange1 = n.parseULong()),
                            (r.ulUnicodeRange2 = n.parseULong()),
                            (r.ulUnicodeRange3 = n.parseULong()),
                            (r.ulUnicodeRange4 = n.parseULong()),
                            (r.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte())),
                            (r.fsSelection = n.parseUShort()),
                            (r.usFirstCharIndex = n.parseUShort()),
                            (r.usLastCharIndex = n.parseUShort()),
                            (r.sTypoAscender = n.parseShort()),
                            (r.sTypoDescender = n.parseShort()),
                            (r.sTypoLineGap = n.parseShort()),
                            (r.usWinAscent = n.parseUShort()),
                            (r.usWinDescent = n.parseUShort()),
                            r.version >= 1 && ((r.ulCodePageRange1 = n.parseULong()), (r.ulCodePageRange2 = n.parseULong())),
                            r.version >= 2 && ((r.sxHeight = n.parseShort()), (r.sCapHeight = n.parseShort()), (r.usDefaultChar = n.parseUShort()), (r.usBreakChar = n.parseUShort()), (r.usMaxContent = n.parseUShort())),
                            r
                        );
                    },
                    make: function (e) {
                        return new K.Table(
                            "OS/2",
                            [
                                { name: "version", type: "USHORT", value: 3 },
                                { name: "xAvgCharWidth", type: "SHORT", value: 0 },
                                { name: "usWeightClass", type: "USHORT", value: 0 },
                                { name: "usWidthClass", type: "USHORT", value: 0 },
                                { name: "fsType", type: "USHORT", value: 0 },
                                { name: "ySubscriptXSize", type: "SHORT", value: 650 },
                                { name: "ySubscriptYSize", type: "SHORT", value: 699 },
                                { name: "ySubscriptXOffset", type: "SHORT", value: 0 },
                                { name: "ySubscriptYOffset", type: "SHORT", value: 140 },
                                { name: "ySuperscriptXSize", type: "SHORT", value: 650 },
                                { name: "ySuperscriptYSize", type: "SHORT", value: 699 },
                                { name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
                                { name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
                                { name: "yStrikeoutSize", type: "SHORT", value: 49 },
                                { name: "yStrikeoutPosition", type: "SHORT", value: 258 },
                                { name: "sFamilyClass", type: "SHORT", value: 0 },
                                { name: "bFamilyType", type: "BYTE", value: 0 },
                                { name: "bSerifStyle", type: "BYTE", value: 0 },
                                { name: "bWeight", type: "BYTE", value: 0 },
                                { name: "bProportion", type: "BYTE", value: 0 },
                                { name: "bContrast", type: "BYTE", value: 0 },
                                { name: "bStrokeVariation", type: "BYTE", value: 0 },
                                { name: "bArmStyle", type: "BYTE", value: 0 },
                                { name: "bLetterform", type: "BYTE", value: 0 },
                                { name: "bMidline", type: "BYTE", value: 0 },
                                { name: "bXHeight", type: "BYTE", value: 0 },
                                { name: "ulUnicodeRange1", type: "ULONG", value: 0 },
                                { name: "ulUnicodeRange2", type: "ULONG", value: 0 },
                                { name: "ulUnicodeRange3", type: "ULONG", value: 0 },
                                { name: "ulUnicodeRange4", type: "ULONG", value: 0 },
                                { name: "achVendID", type: "CHARARRAY", value: "XXXX" },
                                { name: "fsSelection", type: "USHORT", value: 0 },
                                { name: "usFirstCharIndex", type: "USHORT", value: 0 },
                                { name: "usLastCharIndex", type: "USHORT", value: 0 },
                                { name: "sTypoAscender", type: "SHORT", value: 0 },
                                { name: "sTypoDescender", type: "SHORT", value: 0 },
                                { name: "sTypoLineGap", type: "SHORT", value: 0 },
                                { name: "usWinAscent", type: "USHORT", value: 0 },
                                { name: "usWinDescent", type: "USHORT", value: 0 },
                                { name: "ulCodePageRange1", type: "ULONG", value: 0 },
                                { name: "ulCodePageRange2", type: "ULONG", value: 0 },
                                { name: "sxHeight", type: "SHORT", value: 0 },
                                { name: "sCapHeight", type: "SHORT", value: 0 },
                                { name: "usDefaultChar", type: "USHORT", value: 0 },
                                { name: "usBreakChar", type: "USHORT", value: 0 },
                                { name: "usMaxContext", type: "USHORT", value: 0 },
                            ],
                            e
                        );
                    },
                    getUnicodeRange: function (e) {
                        for (var t = 0; t < e$.length; t += 1) {
                            var r = e$[t];
                            if (e >= r.begin && e < r.end) return t;
                        }
                        return -1;
                    },
                },
                e1 = {
                    parse: function (e, t) {
                        var r = {},
                            n = new eo.Parser(e, t);
                        switch (
                        ((r.version = n.parseVersion()),
                            (r.italicAngle = n.parseFixed()),
                            (r.underlinePosition = n.parseShort()),
                            (r.underlineThickness = n.parseShort()),
                            (r.isFixedPitch = n.parseULong()),
                            (r.minMemType42 = n.parseULong()),
                            (r.maxMemType42 = n.parseULong()),
                            (r.minMemType1 = n.parseULong()),
                            (r.maxMemType1 = n.parseULong()),
                            r.version)
                        ) {
                            case 1:
                                r.names = el.slice();
                                break;
                            case 2:
                                (r.numberOfGlyphs = n.parseUShort()), (r.glyphNameIndex = Array(r.numberOfGlyphs));
                                for (var a = 0; a < r.numberOfGlyphs; a++) r.glyphNameIndex[a] = n.parseUShort();
                                r.names = [];
                                for (var o = 0; o < r.numberOfGlyphs; o++)
                                    if (r.glyphNameIndex[o] >= el.length) {
                                        var s = n.parseChar();
                                        r.names.push(n.parseString(s));
                                    }
                                break;
                            case 2.5:
                                (r.numberOfGlyphs = n.parseUShort()), (r.offset = Array(r.numberOfGlyphs));
                                for (var i = 0; i < r.numberOfGlyphs; i++) r.offset[i] = n.parseChar();
                        }
                        return r;
                    },
                    make: function () {
                        return new K.Table("post", [
                            { name: "version", type: "FIXED", value: 196608 },
                            { name: "italicAngle", type: "FIXED", value: 0 },
                            { name: "underlinePosition", type: "FWORD", value: 0 },
                            { name: "underlineThickness", type: "FWORD", value: 0 },
                            { name: "isFixedPitch", type: "ULONG", value: 0 },
                            { name: "minMemType42", type: "ULONG", value: 0 },
                            { name: "maxMemType42", type: "ULONG", value: 0 },
                            { name: "minMemType1", type: "ULONG", value: 0 },
                            { name: "maxMemType1", type: "ULONG", value: 0 },
                        ]);
                    },
                },
                e2 = Array(9);
            (e2[1] = function () {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                return 1 === t
                    ? { substFormat: 1, coverage: this.parsePointer(en.coverage), deltaGlyphId: this.parseUShort() }
                    : 2 === t
                        ? { substFormat: 2, coverage: this.parsePointer(en.coverage), substitute: this.parseOffset16List() }
                        : void M.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.");
            }),
                (e2[2] = function () {
                    var e = this.parseUShort();
                    return M.argument(1 === e, "GSUB Multiple Substitution Subtable identifier-format must be 1"), { substFormat: e, coverage: this.parsePointer(en.coverage), sequences: this.parseListOfLists() };
                }),
                (e2[3] = function () {
                    var e = this.parseUShort();
                    return M.argument(1 === e, "GSUB Alternate Substitution Subtable identifier-format must be 1"), { substFormat: e, coverage: this.parsePointer(en.coverage), alternateSets: this.parseListOfLists() };
                }),
                (e2[4] = function () {
                    var e = this.parseUShort();
                    return (
                        M.argument(1 === e, "GSUB ligature table identifier-format must be 1"),
                        {
                            substFormat: e,
                            coverage: this.parsePointer(en.coverage),
                            ligatureSets: this.parseListOfLists(function () {
                                return { ligGlyph: this.parseUShort(), components: this.parseUShortList(this.parseUShort() - 1) };
                            }),
                        }
                    );
                });
            var e6 = { sequenceIndex: en.uShort, lookupListIndex: en.uShort };
            (e2[5] = function () {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                if (1 === t)
                    return {
                        substFormat: t,
                        coverage: this.parsePointer(en.coverage),
                        ruleSets: this.parseListOfLists(function () {
                            var e = this.parseUShort(),
                                t = this.parseUShort();
                            return { input: this.parseUShortList(e - 1), lookupRecords: this.parseRecordList(t, e6) };
                        }),
                    };
                if (2 === t)
                    return {
                        substFormat: t,
                        coverage: this.parsePointer(en.coverage),
                        classDef: this.parsePointer(en.classDef),
                        classSets: this.parseListOfLists(function () {
                            var e = this.parseUShort(),
                                t = this.parseUShort();
                            return { classes: this.parseUShortList(e - 1), lookupRecords: this.parseRecordList(t, e6) };
                        }),
                    };
                if (3 === t) {
                    var r = this.parseUShort(),
                        n = this.parseUShort();
                    return { substFormat: t, coverages: this.parseList(r, en.pointer(en.coverage)), lookupRecords: this.parseRecordList(n, e6) };
                }
                M.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
            }),
                (e2[6] = function () {
                    var e = this.offset + this.relativeOffset,
                        t = this.parseUShort();
                    return 1 === t
                        ? {
                            substFormat: 1,
                            coverage: this.parsePointer(en.coverage),
                            chainRuleSets: this.parseListOfLists(function () {
                                return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(e6) };
                            }),
                        }
                        : 2 === t
                            ? {
                                substFormat: 2,
                                coverage: this.parsePointer(en.coverage),
                                backtrackClassDef: this.parsePointer(en.classDef),
                                inputClassDef: this.parsePointer(en.classDef),
                                lookaheadClassDef: this.parsePointer(en.classDef),
                                chainClassSet: this.parseListOfLists(function () {
                                    return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(e6) };
                                }),
                            }
                            : 3 === t
                                ? {
                                    substFormat: 3,
                                    backtrackCoverage: this.parseList(en.pointer(en.coverage)),
                                    inputCoverage: this.parseList(en.pointer(en.coverage)),
                                    lookaheadCoverage: this.parseList(en.pointer(en.coverage)),
                                    lookupRecords: this.parseRecordList(e6),
                                }
                                : void M.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
                }),
                (e2[7] = function () {
                    var e = this.parseUShort();
                    M.argument(1 === e, "GSUB Extension Substitution subtable identifier-format must be 1");
                    var t = this.parseUShort(),
                        r = new en(this.data, this.offset + this.parseULong());
                    return { substFormat: 1, lookupType: t, extension: e2[t].call(r) };
                }),
                (e2[8] = function () {
                    var e = this.parseUShort();
                    return (
                        M.argument(1 === e, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),
                        {
                            substFormat: e,
                            coverage: this.parsePointer(en.coverage),
                            backtrackCoverage: this.parseList(en.pointer(en.coverage)),
                            lookaheadCoverage: this.parseList(en.pointer(en.coverage)),
                            substitutes: this.parseUShortList(),
                        }
                    );
                });
            var e3 = Array(9);
            (e3[1] = function (e) {
                return 1 === e.substFormat
                    ? new K.Table("substitutionTable", [
                        { name: "substFormat", type: "USHORT", value: 1 },
                        { name: "coverage", type: "TABLE", value: new K.Coverage(e.coverage) },
                        { name: "deltaGlyphID", type: "USHORT", value: e.deltaGlyphId },
                    ])
                    : new K.Table(
                        "substitutionTable",
                        [
                            { name: "substFormat", type: "USHORT", value: 2 },
                            { name: "coverage", type: "TABLE", value: new K.Coverage(e.coverage) },
                        ].concat(K.ushortList("substitute", e.substitute))
                    );
            }),
                (e3[2] = function (e) {
                    return (
                        M.assert(1 === e.substFormat, "Lookup type 2 substFormat must be 1."),
                        new K.Table(
                            "substitutionTable",
                            [
                                { name: "substFormat", type: "USHORT", value: 1 },
                                { name: "coverage", type: "TABLE", value: new K.Coverage(e.coverage) },
                            ].concat(
                                K.tableList("seqSet", e.sequences, function (e) {
                                    return new K.Table("sequenceSetTable", K.ushortList("sequence", e));
                                })
                            )
                        )
                    );
                }),
                (e3[3] = function (e) {
                    return (
                        M.assert(1 === e.substFormat, "Lookup type 3 substFormat must be 1."),
                        new K.Table(
                            "substitutionTable",
                            [
                                { name: "substFormat", type: "USHORT", value: 1 },
                                { name: "coverage", type: "TABLE", value: new K.Coverage(e.coverage) },
                            ].concat(
                                K.tableList("altSet", e.alternateSets, function (e) {
                                    return new K.Table("alternateSetTable", K.ushortList("alternate", e));
                                })
                            )
                        )
                    );
                }),
                (e3[4] = function (e) {
                    return (
                        M.assert(1 === e.substFormat, "Lookup type 4 substFormat must be 1."),
                        new K.Table(
                            "substitutionTable",
                            [
                                { name: "substFormat", type: "USHORT", value: 1 },
                                { name: "coverage", type: "TABLE", value: new K.Coverage(e.coverage) },
                            ].concat(
                                K.tableList("ligSet", e.ligatureSets, function (e) {
                                    return new K.Table(
                                        "ligatureSetTable",
                                        K.tableList("ligature", e, function (e) {
                                            return new K.Table("ligatureTable", [{ name: "ligGlyph", type: "USHORT", value: e.ligGlyph }].concat(K.ushortList("component", e.components, e.components.length + 1)));
                                        })
                                    );
                                })
                            )
                        )
                    );
                }),
                (e3[6] = function (e) {
                    if (1 === e.substFormat)
                        return new K.Table(
                            "chainContextTable",
                            [
                                { name: "substFormat", type: "USHORT", value: e.substFormat },
                                { name: "coverage", type: "TABLE", value: new K.Coverage(e.coverage) },
                            ].concat(
                                K.tableList("chainRuleSet", e.chainRuleSets, function (e) {
                                    return new K.Table(
                                        "chainRuleSetTable",
                                        K.tableList("chainRule", e, function (e) {
                                            var t = K.ushortList("backtrackGlyph", e.backtrack, e.backtrack.length)
                                                .concat(K.ushortList("inputGlyph", e.input, e.input.length + 1))
                                                .concat(K.ushortList("lookaheadGlyph", e.lookahead, e.lookahead.length))
                                                .concat(K.ushortList("substitution", [], e.lookupRecords.length));
                                            return (
                                                e.lookupRecords.forEach(function (e, r) {
                                                    t = t.concat({ name: "sequenceIndex" + r, type: "USHORT", value: e.sequenceIndex }).concat({ name: "lookupListIndex" + r, type: "USHORT", value: e.lookupListIndex });
                                                }),
                                                new K.Table("chainRuleTable", t)
                                            );
                                        })
                                    );
                                })
                            )
                        );
                    if (2 === e.substFormat) M.assert(!1, "lookup type 6 format 2 is not yet supported.");
                    else if (3 === e.substFormat) {
                        var t = [{ name: "substFormat", type: "USHORT", value: e.substFormat }];
                        return (
                            t.push({ name: "backtrackGlyphCount", type: "USHORT", value: e.backtrackCoverage.length }),
                            e.backtrackCoverage.forEach(function (e, r) {
                                t.push({ name: "backtrackCoverage" + r, type: "TABLE", value: new K.Coverage(e) });
                            }),
                            t.push({ name: "inputGlyphCount", type: "USHORT", value: e.inputCoverage.length }),
                            e.inputCoverage.forEach(function (e, r) {
                                t.push({ name: "inputCoverage" + r, type: "TABLE", value: new K.Coverage(e) });
                            }),
                            t.push({ name: "lookaheadGlyphCount", type: "USHORT", value: e.lookaheadCoverage.length }),
                            e.lookaheadCoverage.forEach(function (e, r) {
                                t.push({ name: "lookaheadCoverage" + r, type: "TABLE", value: new K.Coverage(e) });
                            }),
                            t.push({ name: "substitutionCount", type: "USHORT", value: e.lookupRecords.length }),
                            e.lookupRecords.forEach(function (e, r) {
                                t = t.concat({ name: "sequenceIndex" + r, type: "USHORT", value: e.sequenceIndex }).concat({ name: "lookupListIndex" + r, type: "USHORT", value: e.lookupListIndex });
                            }),
                            new K.Table("chainContextTable", t)
                        );
                    }
                    M.assert(!1, "lookup type 6 format must be 1, 2 or 3.");
                });
            var e5 = {
                parse: function (e, t) {
                    var r = new en(e, (t = t || 0)),
                        n = r.parseVersion(1);
                    return (M.argument(1 === n || 1.1 === n, "Unsupported GSUB table version."), 1 === n)
                        ? { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(e2) }
                        : { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(e2), variations: r.parseFeatureVariationsList() };
                },
                make: function (e) {
                    return new K.Table("GSUB", [
                        { name: "version", type: "ULONG", value: 65536 },
                        { name: "scripts", type: "TABLE", value: new K.ScriptList(e.scripts) },
                        { name: "features", type: "TABLE", value: new K.FeatureList(e.features) },
                        { name: "lookups", type: "TABLE", value: new K.LookupList(e.lookups, e3) },
                    ]);
                },
            },
                e4 = {
                    parse: function (e, t) {
                        var r = new eo.Parser(e, t),
                            n = r.parseULong();
                        M.argument(1 === n, "Unsupported META table version."), r.parseULong(), r.parseULong();
                        for (var a = r.parseULong(), o = {}, s = 0; s < a; s++) {
                            var i = r.parseTag(),
                                u = r.parseULong(),
                                p = r.parseULong(),
                                l = G.UTF8(e, t + u, p);
                            o[i] = l;
                        }
                        return o;
                    },
                    make: function (e) {
                        var t = Object.keys(e).length,
                            r = "",
                            n = 16 + 12 * t,
                            a = new K.Table("meta", [
                                { name: "version", type: "ULONG", value: 1 },
                                { name: "flags", type: "ULONG", value: 0 },
                                { name: "offset", type: "ULONG", value: n },
                                { name: "numTags", type: "ULONG", value: t },
                            ]);
                        for (var o in e) {
                            var s = r.length;
                            (r += e[o]),
                                a.fields.push({ name: "tag " + o, type: "TAG", value: o }),
                                a.fields.push({ name: "offset " + o, type: "ULONG", value: n + s }),
                                a.fields.push({ name: "length " + o, type: "ULONG", value: e[o].length });
                        }
                        return a.fields.push({ name: "stringPool", type: "CHARARRAY", value: r }), a;
                    },
                };
            function e8(e) {
                return (Math.log(e) / Math.log(2)) | 0;
            }
            function e7(e) {
                for (; e.length % 4 != 0;) e.push(0);
                for (var t = 0, r = 0; r < e.length; r += 4) t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
                return t % 4294967296;
            }
            function e9(e, t, r, n) {
                return new K.Record("Table Record", [
                    { name: "tag", type: "TAG", value: void 0 !== e ? e : "" },
                    { name: "checkSum", type: "ULONG", value: void 0 !== t ? t : 0 },
                    { name: "offset", type: "ULONG", value: void 0 !== r ? r : 0 },
                    { name: "length", type: "ULONG", value: void 0 !== n ? n : 0 },
                ]);
            }
            function te(e, t, r) {
                for (var n = 0; n < t.length; n += 1) {
                    var a = e.charToGlyphIndex(t[n]);
                    if (a > 0) return e.glyphs.get(a).getMetrics();
                }
                return r;
            }
            var tt = function (e) {
                for (var t, r = [], n = [], a = [], o = [], s = [], i = [], u = [], p = 0, l = 0, c = 0, h = 0, f = 0, d = 0; d < e.glyphs.length; d += 1) {
                    var g = e.glyphs.get(d),
                        v = 0 | g.unicode;
                    if (isNaN(g.advanceWidth)) throw Error("Glyph " + g.name + " (" + d + "): advanceWidth is not a number.");
                    (t > v || void 0 === t) && v > 0 && (t = v), p < v && (p = v);
                    var m = e0.getUnicodeRange(v);
                    if (m < 32) l |= 1 << m;
                    else if (m < 64) c |= 1 << (m - 32);
                    else if (m < 96) h |= 1 << (m - 64);
                    else if (m < 123) f |= 1 << (m - 96);
                    else throw Error("Unicode ranges bits > 123 are reserved for internal usage");
                    if (".notdef" !== g.name) {
                        var y = g.getMetrics();
                        r.push(y.xMin), n.push(y.yMin), a.push(y.xMax), o.push(y.yMax), i.push(y.leftSideBearing), u.push(y.rightSideBearing), s.push(g.advanceWidth);
                    }
                }
                var b = {
                    xMin: Math.min.apply(null, r),
                    yMin: Math.min.apply(null, n),
                    xMax: Math.max.apply(null, a),
                    yMax: Math.max.apply(null, o),
                    advanceWidthMax: Math.max.apply(null, s),
                    advanceWidthAvg: (function (e) {
                        for (var t = 0, r = 0; r < e.length; r += 1) t += e[r];
                        return t / e.length;
                    })(s),
                    minLeftSideBearing: Math.min.apply(null, i),
                    maxLeftSideBearing: Math.max.apply(null, i),
                    minRightSideBearing: Math.min.apply(null, u),
                };
                (b.ascender = e.ascender), (b.descender = e.descender);
                var x = eG.make({ flags: 3, unitsPerEm: e.unitsPerEm, xMin: b.xMin, yMin: b.yMin, xMax: b.xMax, yMax: b.yMax, lowestRecPPEM: 3, createdTimestamp: e.createdTimestamp }),
                    S = eB.make({
                        ascender: b.ascender,
                        descender: b.descender,
                        advanceWidthMax: b.advanceWidthMax,
                        minLeftSideBearing: b.minLeftSideBearing,
                        minRightSideBearing: b.minRightSideBearing,
                        xMaxExtent: b.maxLeftSideBearing + (b.xMax - b.xMin),
                        numberOfHMetrics: e.glyphs.length,
                    }),
                    T = eN.make(e.glyphs.length),
                    k = e0.make(
                        Object.assign(
                            {
                                xAvgCharWidth: Math.round(b.advanceWidthAvg),
                                usFirstCharIndex: t,
                                usLastCharIndex: p,
                                ulUnicodeRange1: l,
                                ulUnicodeRange2: c,
                                ulUnicodeRange3: h,
                                ulUnicodeRange4: f,
                                sTypoAscender: b.ascender,
                                sTypoDescender: b.descender,
                                sTypoLineGap: 0,
                                usWinAscent: b.yMax,
                                usWinDescent: Math.abs(b.yMin),
                                ulCodePageRange1: 1,
                                sxHeight: te(e, "xyvw", { yMax: Math.round(b.ascender / 2) }).yMax,
                                sCapHeight: te(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", b).yMax,
                                usDefaultChar: e.hasChar(" ") ? 32 : 0,
                                usBreakChar: e.hasChar(" ") ? 32 : 0,
                            },
                            e.tables.os2
                        )
                    ),
                    U = eA(e.glyphs),
                    O = es.make(e.glyphs),
                    E = e.getEnglishName("fontFamily"),
                    R = e.getEnglishName("fontSubfamily"),
                    C = E + " " + R,
                    L = e.getEnglishName("postScriptName");
                L || (L = E.replace(/\s/g, "") + "-" + R);
                var D = {};
                for (var w in e.names) D[w] = e.names[w];
                D.uniqueID || (D.uniqueID = { en: e.getEnglishName("manufacturer") + ":" + C }),
                    D.postScriptName || (D.postScriptName = { en: L }),
                    D.preferredFamily || (D.preferredFamily = e.names.fontFamily),
                    D.preferredSubfamily || (D.preferredSubfamily = e.names.fontSubfamily);
                var I = [],
                    G = eJ(D, I),
                    B = I.length > 0 ? eP.make(I) : void 0,
                    F = e1.make(),
                    A = eM.make(e.glyphs, { version: e.getEnglishName("version"), fullName: C, familyName: E, weightName: R, postScriptName: L, unitsPerEm: e.unitsPerEm, fontBBox: [0, b.yMin, b.ascender, b.advanceWidthMax] }),
                    P = e.metas && Object.keys(e.metas).length > 0 ? e4.make(e.metas) : void 0,
                    N = [x, S, T, k, G, O, F, A, U];
                B && N.push(B), e.tables.gsub && N.push(e5.make(e.tables.gsub)), P && N.push(P);
                for (
                    var H = (function (e) {
                        var t = new K.Table("sfnt", [
                            { name: "version", type: "TAG", value: "OTTO" },
                            { name: "numTables", type: "USHORT", value: 0 },
                            { name: "searchRange", type: "USHORT", value: 0 },
                            { name: "entrySelector", type: "USHORT", value: 0 },
                            { name: "rangeShift", type: "USHORT", value: 0 },
                        ]);
                        (t.tables = e), (t.numTables = e.length);
                        var r = Math.pow(2, e8(t.numTables));
                        (t.searchRange = 16 * r), (t.entrySelector = e8(r)), (t.rangeShift = 16 * t.numTables - t.searchRange);
                        for (var n = [], a = [], o = t.sizeOf() + e9().sizeOf() * t.numTables; o % 4 != 0;) (o += 1), a.push({ name: "padding", type: "BYTE", value: 0 });
                        for (var s = 0; s < e.length; s += 1) {
                            var i = e[s];
                            M.argument(4 === i.tableName.length, "Table name" + i.tableName + " is invalid.");
                            var u = i.sizeOf(),
                                p = e9(i.tableName, e7(i.encode()), o, u);
                            for (
                                n.push({ name: p.tag + " Table Record", type: "RECORD", value: p }),
                                a.push({ name: i.tableName + " table", type: "RECORD", value: i }),
                                o += u,
                                M.argument(!isNaN(o), "Something went wrong calculating the offset.");
                                o % 4 != 0;

                            )
                                (o += 1), a.push({ name: "padding", type: "BYTE", value: 0 });
                        }
                        return (
                            n.sort(function (e, t) {
                                return e.value.tag > t.value.tag ? 1 : -1;
                            }),
                            (t.fields = t.fields.concat(n)),
                            (t.fields = t.fields.concat(a)),
                            t
                        );
                    })(N),
                    z = e7(H.encode()),
                    W = H.fields,
                    q = !1,
                    _ = 0;
                    _ < W.length;
                    _ += 1
                )
                    if ("head table" === W[_].name) {
                        (W[_].value.checkSumAdjustment = 2981146554 - z), (q = !0);
                        break;
                    }
                if (!q) throw Error("Could not find head table with checkSum to adjust.");
                return H;
            };
            function tr(e, t) {
                for (var r = 0, n = e.length - 1; r <= n;) {
                    var a = (r + n) >>> 1,
                        o = e[a].tag;
                    if (o === t) return a;
                    o < t ? (r = a + 1) : (n = a - 1);
                }
                return -r - 1;
            }
            function tn(e, t) {
                for (var r = 0, n = e.length - 1; r <= n;) {
                    var a = (r + n) >>> 1,
                        o = e[a];
                    if (o === t) return a;
                    o < t ? (r = a + 1) : (n = a - 1);
                }
                return -r - 1;
            }
            function ta(e, t) {
                for (var r, n = 0, a = e.length - 1; n <= a;) {
                    var o = (n + a) >>> 1,
                        s = (r = e[o]).start;
                    if (s === t) return r;
                    s < t ? (n = o + 1) : (a = o - 1);
                }
                if (n > 0) return t > (r = e[n - 1]).end ? 0 : r;
            }
            function to(e, t) {
                (this.font = e), (this.tableName = t);
            }
            function ts(e) {
                to.call(this, e, "gpos");
            }
            function ti(e) {
                to.call(this, e, "gsub");
            }
            function tu(e, t, r) {
                for (var n = e.subtables, a = 0; a < n.length; a++) {
                    var o = n[a];
                    if (o.substFormat === t) return o;
                }
                if (r) return n.push(r), r;
            }
            function tp(e) {
                for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; ++n) r[n] = e[n];
                return t;
            }
            function tl(e, t) {
                if (!e) throw t;
            }
            function tc(e, t, r, n, a) {
                var o;
                return (t & n) > 0 ? ((o = e.parseByte()), (t & a) == 0 && (o = -o), (o = r + o)) : (o = (t & a) > 0 ? r : r + e.parseShort()), o;
            }
            function th(e, t, r) {
                var n = new eo.Parser(t, r);
                if (((e.numberOfContours = n.parseShort()), (e._xMin = n.parseShort()), (e._yMin = n.parseShort()), (e._xMax = n.parseShort()), (e._yMax = n.parseShort()), e.numberOfContours > 0)) {
                    for (var a = (e.endPointIndices = []), o = 0; o < e.numberOfContours; o += 1) a.push(n.parseUShort());
                    (e.instructionLength = n.parseUShort()), (e.instructions = []);
                    for (var s = 0; s < e.instructionLength; s += 1) e.instructions.push(n.parseByte());
                    var i = a[a.length - 1] + 1;
                    c = [];
                    for (var u = 0; u < i; u += 1) if (((h = n.parseByte()), c.push(h), (8 & h) > 0)) for (var p = n.parseByte(), l = 0; l < p; l += 1) c.push(h), (u += 1);
                    if ((M.argument(c.length === i, "Bad flags."), a.length > 0)) {
                        var c,
                            h,
                            f,
                            d = [];
                        if (i > 0) {
                            for (var g = 0; g < i; g += 1) (h = c[g]), ((f = {}).onCurve = !!(1 & h)), (f.lastPointOfContour = a.indexOf(g) >= 0), d.push(f);
                            for (var v = 0, m = 0; m < i; m += 1) (h = c[m]), ((f = d[m]).x = tc(n, h, v, 2, 16)), (v = f.x);
                            for (var y = 0, b = 0; b < i; b += 1) (h = c[b]), ((f = d[b]).y = tc(n, h, y, 4, 32)), (y = f.y);
                        }
                        e.points = d;
                    } else e.points = [];
                } else if (0 === e.numberOfContours) e.points = [];
                else {
                    (e.isComposite = !0), (e.points = []), (e.components = []);
                    for (var x = !0; x;) {
                        c = n.parseUShort();
                        var S = { glyphIndex: n.parseUShort(), xScale: 1, scale01: 0, scale10: 0, yScale: 1, dx: 0, dy: 0 };
                        (1 & c) > 0
                            ? (2 & c) > 0
                                ? ((S.dx = n.parseShort()), (S.dy = n.parseShort()))
                                : (S.matchedPoints = [n.parseUShort(), n.parseUShort()])
                            : (2 & c) > 0
                                ? ((S.dx = n.parseChar()), (S.dy = n.parseChar()))
                                : (S.matchedPoints = [n.parseByte(), n.parseByte()]),
                            (8 & c) > 0
                                ? (S.xScale = S.yScale = n.parseF2Dot14())
                                : (64 & c) > 0
                                    ? ((S.xScale = n.parseF2Dot14()), (S.yScale = n.parseF2Dot14()))
                                    : (128 & c) > 0 && ((S.xScale = n.parseF2Dot14()), (S.scale01 = n.parseF2Dot14()), (S.scale10 = n.parseF2Dot14()), (S.yScale = n.parseF2Dot14())),
                            e.components.push(S),
                            (x = !!(32 & c));
                    }
                    if (256 & c) {
                        (e.instructionLength = n.parseUShort()), (e.instructions = []);
                        for (var T = 0; T < e.instructionLength; T += 1) e.instructions.push(n.parseByte());
                    }
                }
            }
            function tf(e, t) {
                for (var r = [], n = 0; n < e.length; n += 1) {
                    var a = e[n],
                        o = { x: t.xScale * a.x + t.scale01 * a.y + t.dx, y: t.scale10 * a.x + t.yScale * a.y + t.dy, onCurve: a.onCurve, lastPointOfContour: a.lastPointOfContour };
                    r.push(o);
                }
                return r;
            }
            function td(e) {
                var t = new w();
                if (!e) return t;
                for (
                    var r = (function (e) {
                        for (var t = [], r = [], n = 0; n < e.length; n += 1) {
                            var a = e[n];
                            r.push(a), a.lastPointOfContour && (t.push(r), (r = []));
                        }
                        return M.argument(0 === r.length, "There are still points left in the current contour."), t;
                    })(e),
                    n = 0;
                    n < r.length;
                    ++n
                ) {
                    var a = r[n],
                        o = null,
                        s = a[a.length - 1],
                        i = a[0];
                    if (s.onCurve) t.moveTo(s.x, s.y);
                    else if (i.onCurve) t.moveTo(i.x, i.y);
                    else {
                        var u = { x: (s.x + i.x) * 0.5, y: (s.y + i.y) * 0.5 };
                        t.moveTo(u.x, u.y);
                    }
                    for (var p = 0; p < a.length; ++p)
                        if (((o = s), (s = i), (i = a[(p + 1) % a.length]), s.onCurve)) t.lineTo(s.x, s.y);
                        else {
                            var l = i;
                            o.onCurve || (s.x, o.x, s.y, o.y), i.onCurve || (l = { x: (s.x + i.x) * 0.5, y: (s.y + i.y) * 0.5 }), t.quadraticCurveTo(s.x, s.y, l.x, l.y);
                        }
                    t.closePath();
                }
                return t;
            }
            function tg(e, t) {
                if (t.isComposite)
                    for (var r = 0; r < t.components.length; r += 1) {
                        var n = t.components[r],
                            a = e.get(n.glyphIndex);
                        if ((a.getPath(), a.points)) {
                            var o = void 0;
                            if (void 0 === n.matchedPoints) o = tf(a.points, n);
                            else {
                                if (n.matchedPoints[0] > t.points.length - 1 || n.matchedPoints[1] > a.points.length - 1) throw Error("Matched points out of range in " + t.name);
                                var s = t.points[n.matchedPoints[0]],
                                    i = a.points[n.matchedPoints[1]],
                                    u = { xScale: n.xScale, scale01: n.scale01, scale10: n.scale10, yScale: n.yScale, dx: 0, dy: 0 };
                                (i = tf([i], u)[0]), (u.dx = s.x - i.x), (u.dy = s.y - i.y), (o = tf(a.points, u));
                            }
                            t.points = t.points.concat(o);
                        }
                    }
                return td(t.points);
            }
            (to.prototype = {
                searchTag: tr,
                binSearch: tn,
                getTable: function (e) {
                    var t = this.font.tables[this.tableName];
                    return !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
                },
                getScriptNames: function () {
                    var e = this.getTable();
                    return e
                        ? e.scripts.map(function (e) {
                            return e.tag;
                        })
                        : [];
                },
                getDefaultScriptName: function () {
                    var e = this.getTable();
                    if (e) {
                        for (var t = !1, r = 0; r < e.scripts.length; r++) {
                            var n = e.scripts[r].tag;
                            if ("DFLT" === n) return n;
                            "latn" === n && (t = !0);
                        }
                        if (t) return "latn";
                    }
                },
                getScriptTable: function (e, t) {
                    var r = this.getTable(t);
                    if (r) {
                        e = e || "DFLT";
                        var n = r.scripts,
                            a = tr(r.scripts, e);
                        if (a >= 0) return n[a].script;
                        if (t) {
                            var o = { tag: e, script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } };
                            return n.splice(-1 - a, 0, o), o.script;
                        }
                    }
                },
                getLangSysTable: function (e, t, r) {
                    var n = this.getScriptTable(e, r);
                    if (n) {
                        if (!t || "dflt" === t || "DFLT" === t) return n.defaultLangSys;
                        var a = tr(n.langSysRecords, t);
                        if (a >= 0) return n.langSysRecords[a].langSys;
                        if (r) {
                            var o = { tag: t, langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] } };
                            return n.langSysRecords.splice(-1 - a, 0, o), o.langSys;
                        }
                    }
                },
                getFeatureTable: function (e, t, r, n) {
                    var a = this.getLangSysTable(e, t, n);
                    if (a) {
                        for (var o, s = a.featureIndexes, i = this.font.tables[this.tableName].features, u = 0; u < s.length; u++) if ((o = i[s[u]]).tag === r) return o.feature;
                        if (n) {
                            var p = i.length;
                            return M.assert(0 === p || r >= i[p - 1].tag, "Features must be added in alphabetical order."), (o = { tag: r, feature: { params: 0, lookupListIndexes: [] } }), i.push(o), s.push(p), o.feature;
                        }
                    }
                },
                getLookupTables: function (e, t, r, n, a) {
                    var o = this.getFeatureTable(e, t, r, a),
                        s = [];
                    if (o) {
                        for (var i, u = o.lookupListIndexes, p = this.font.tables[this.tableName].lookups, l = 0; l < u.length; l++) (i = p[u[l]]).lookupType === n && s.push(i);
                        if (0 === s.length && a) {
                            i = { lookupType: n, lookupFlag: 0, subtables: [], markFilteringSet: void 0 };
                            var c = p.length;
                            return p.push(i), u.push(c), [i];
                        }
                    }
                    return s;
                },
                getGlyphClass: function (e, t) {
                    switch (e.format) {
                        case 1:
                            if (e.startGlyph <= t && t < e.startGlyph + e.classes.length) return e.classes[t - e.startGlyph];
                            return 0;
                        case 2:
                            var r = ta(e.ranges, t);
                            return r ? r.classId : 0;
                    }
                },
                getCoverageIndex: function (e, t) {
                    switch (e.format) {
                        case 1:
                            var r = tn(e.glyphs, t);
                            return r >= 0 ? r : -1;
                        case 2:
                            var n = ta(e.ranges, t);
                            return n ? n.index + t - n.start : -1;
                    }
                },
                expandCoverage: function (e) {
                    if (1 === e.format) return e.glyphs;
                    for (var t = [], r = e.ranges, n = 0; n < r.length; n++) for (var a = r[n], o = a.start, s = a.end, i = o; i <= s; i++) t.push(i);
                    return t;
                },
            }),
                (ts.prototype = to.prototype),
                (ts.prototype.init = function () {
                    var e = this.getDefaultScriptName();
                    this.defaultKerningTables = this.getKerningTables(e);
                }),
                (ts.prototype.getKerningValue = function (e, t, r) {
                    for (var n = 0; n < e.length; n++)
                        for (var a = e[n].subtables, o = 0; o < a.length; o++) {
                            var s = a[o],
                                i = this.getCoverageIndex(s.coverage, t);
                            if (!(i < 0))
                                switch (s.posFormat) {
                                    case 1:
                                        for (var u = s.pairSets[i], p = 0; p < u.length; p++) {
                                            var l = u[p];
                                            if (l.secondGlyph === r) return (l.value1 && l.value1.xAdvance) || 0;
                                        }
                                        break;
                                    case 2:
                                        var c = this.getGlyphClass(s.classDef1, t),
                                            h = this.getGlyphClass(s.classDef2, r),
                                            f = s.classRecords[c][h];
                                        return (f.value1 && f.value1.xAdvance) || 0;
                                }
                        }
                    return 0;
                }),
                (ts.prototype.getKerningTables = function (e, t) {
                    if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2);
                }),
                (ti.prototype = to.prototype),
                (ti.prototype.createDefaultTable = function () {
                    return { version: 1, scripts: [{ tag: "DFLT", script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } }], features: [], lookups: [] };
                }),
                (ti.prototype.getSingle = function (e, t, r) {
                    for (var n = [], a = this.getLookupTables(t, r, e, 1), o = 0; o < a.length; o++)
                        for (var s = a[o].subtables, i = 0; i < s.length; i++) {
                            var u = s[i],
                                p = this.expandCoverage(u.coverage),
                                l = void 0;
                            if (1 === u.substFormat) {
                                var c = u.deltaGlyphId;
                                for (l = 0; l < p.length; l++) {
                                    var h = p[l];
                                    n.push({ sub: h, by: h + c });
                                }
                            } else {
                                var f = u.substitute;
                                for (l = 0; l < p.length; l++) n.push({ sub: p[l], by: f[l] });
                            }
                        }
                    return n;
                }),
                (ti.prototype.getMultiple = function (e, t, r) {
                    for (var n = [], a = this.getLookupTables(t, r, e, 2), o = 0; o < a.length; o++)
                        for (var s = a[o].subtables, i = 0; i < s.length; i++) {
                            var u = s[i],
                                p = this.expandCoverage(u.coverage),
                                l = void 0;
                            for (l = 0; l < p.length; l++) {
                                var c = p[l],
                                    h = u.sequences[l];
                                n.push({ sub: c, by: h });
                            }
                        }
                    return n;
                }),
                (ti.prototype.getAlternates = function (e, t, r) {
                    for (var n = [], a = this.getLookupTables(t, r, e, 3), o = 0; o < a.length; o++)
                        for (var s = a[o].subtables, i = 0; i < s.length; i++) for (var u = s[i], p = this.expandCoverage(u.coverage), l = u.alternateSets, c = 0; c < p.length; c++) n.push({ sub: p[c], by: l[c] });
                    return n;
                }),
                (ti.prototype.getLigatures = function (e, t, r) {
                    for (var n = [], a = this.getLookupTables(t, r, e, 4), o = 0; o < a.length; o++)
                        for (var s = a[o].subtables, i = 0; i < s.length; i++)
                            for (var u = s[i], p = this.expandCoverage(u.coverage), l = u.ligatureSets, c = 0; c < p.length; c++)
                                for (var h = p[c], f = l[c], d = 0; d < f.length; d++) {
                                    var g = f[d];
                                    n.push({ sub: [h].concat(g.components), by: g.ligGlyph });
                                }
                    return n;
                }),
                (ti.prototype.addSingle = function (e, t, r, n) {
                    var a = tu(this.getLookupTables(r, n, e, 1, !0)[0], 2, { substFormat: 2, coverage: { format: 1, glyphs: [] }, substitute: [] });
                    M.assert(1 === a.coverage.format, "Single: unable to modify coverage table format " + a.coverage.format);
                    var o = t.sub,
                        s = this.binSearch(a.coverage.glyphs, o);
                    s < 0 && ((s = -1 - s), a.coverage.glyphs.splice(s, 0, o), a.substitute.splice(s, 0, 0)), (a.substitute[s] = t.by);
                }),
                (ti.prototype.addMultiple = function (e, t, r, n) {
                    M.assert(t.by instanceof Array && t.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
                    var a = tu(this.getLookupTables(r, n, e, 2, !0)[0], 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, sequences: [] });
                    M.assert(1 === a.coverage.format, "Multiple: unable to modify coverage table format " + a.coverage.format);
                    var o = t.sub,
                        s = this.binSearch(a.coverage.glyphs, o);
                    s < 0 && ((s = -1 - s), a.coverage.glyphs.splice(s, 0, o), a.sequences.splice(s, 0, 0)), (a.sequences[s] = t.by);
                }),
                (ti.prototype.addAlternate = function (e, t, r, n) {
                    var a = tu(this.getLookupTables(r, n, e, 3, !0)[0], 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, alternateSets: [] });
                    M.assert(1 === a.coverage.format, "Alternate: unable to modify coverage table format " + a.coverage.format);
                    var o = t.sub,
                        s = this.binSearch(a.coverage.glyphs, o);
                    s < 0 && ((s = -1 - s), a.coverage.glyphs.splice(s, 0, o), a.alternateSets.splice(s, 0, 0)), (a.alternateSets[s] = t.by);
                }),
                (ti.prototype.addLigature = function (e, t, r, n) {
                    var a = this.getLookupTables(r, n, e, 4, !0)[0],
                        o = a.subtables[0];
                    o || ((o = { substFormat: 1, coverage: { format: 1, glyphs: [] }, ligatureSets: [] }), (a.subtables[0] = o)), M.assert(1 === o.coverage.format, "Ligature: unable to modify coverage table format " + o.coverage.format);
                    var s = t.sub[0],
                        i = t.sub.slice(1),
                        u = { ligGlyph: t.by, components: i },
                        p = this.binSearch(o.coverage.glyphs, s);
                    if (p >= 0) {
                        for (var l = o.ligatureSets[p], c = 0; c < l.length; c++)
                            if (
                                (function (e, t) {
                                    var r = e.length;
                                    if (r !== t.length) return !1;
                                    for (var n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
                                    return !0;
                                })(l[c].components, i)
                            )
                                return;
                        l.push(u);
                    } else (p = -1 - p), o.coverage.glyphs.splice(p, 0, s), o.ligatureSets.splice(p, 0, [u]);
                }),
                (ti.prototype.getFeature = function (e, t, r) {
                    if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);
                    switch (e) {
                        case "aalt":
                        case "salt":
                            return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));
                        case "dlig":
                        case "liga":
                        case "rlig":
                            return this.getLigatures(e, t, r);
                        case "ccmp":
                            return this.getMultiple(e, t, r).concat(this.getLigatures(e, t, r));
                        case "stch":
                            return this.getMultiple(e, t, r);
                    }
                }),
                (ti.prototype.add = function (e, t, r, n) {
                    if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, n);
                    switch (e) {
                        case "aalt":
                        case "salt":
                            if ("number" == typeof t.by) return this.addSingle(e, t, r, n);
                            return this.addAlternate(e, t, r, n);
                        case "dlig":
                        case "liga":
                        case "rlig":
                            return this.addLigature(e, t, r, n);
                        case "ccmp":
                            if (t.by instanceof Array) return this.addMultiple(e, t, r, n);
                            return this.addLigature(e, t, r, n);
                    }
                });
            var tv = {
                getPath: td,
                parse: function (e, t, r, n, a) {
                    var o;
                    return a.lowMemory
                        ? ((o = new eb.GlyphSet(n)),
                            (n._push = function (a) {
                                var s = r[a];
                                s !== r[a + 1] ? o.push(a, eb.ttfGlyphLoader(n, a, th, e, t + s, tg)) : o.push(a, eb.glyphLoader(n, a));
                            }),
                            o)
                        : (function (e, t, r, n) {
                            for (var a = new eb.GlyphSet(n), o = 0; o < r.length - 1; o += 1) {
                                var s = r[o];
                                s !== r[o + 1] ? a.push(o, eb.ttfGlyphLoader(n, o, th, e, t + s, tg)) : a.push(o, eb.glyphLoader(n, o));
                            }
                            return a;
                        })(e, t, r, n);
                },
            };
            function tm(e) {
                (this.font = e),
                    (this.getCommands = function (e) {
                        return tv.getPath(e).commands;
                    }),
                    (this._fpgmState = this._prepState = void 0),
                    (this._errorState = 0);
            }
            function ty(e) {
                return e;
            }
            function tb(e) {
                return Math.sign(e) * Math.round(Math.abs(e));
            }
            function tx(e) {
                return (Math.sign(e) * Math.round(Math.abs(2 * e))) / 2;
            }
            function tS(e) {
                return Math.sign(e) * (Math.round(Math.abs(e) + 0.5) - 0.5);
            }
            function tT(e) {
                return Math.sign(e) * Math.ceil(Math.abs(e));
            }
            function tk(e) {
                return Math.sign(e) * Math.floor(Math.abs(e));
            }
            var tU = function (e) {
                var t = this.srPeriod,
                    r = this.srPhase,
                    n = this.srThreshold,
                    a = 1;
                return (e < 0 && ((e = -e), (a = -1)), (e += n - r), (e = Math.trunc(e / t) * t + r) < 0) ? r * a : e * a;
            },
                tO = {
                    x: 1,
                    y: 0,
                    axis: "x",
                    distance: function (e, t, r, n) {
                        return (r ? e.xo : e.x) - (n ? t.xo : t.x);
                    },
                    interpolate: function (e, t, r, n) {
                        var a, o, s, i, u, p, l;
                        if (!n || n === this) {
                            if (((a = e.xo - t.xo), (o = e.xo - r.xo), (u = t.x - t.xo), (p = r.x - r.xo), 0 === (l = (s = Math.abs(a)) + (i = Math.abs(o))))) {
                                e.x = e.xo + (u + p) / 2;
                                return;
                            }
                            e.x = e.xo + (u * i + p * s) / l;
                            return;
                        }
                        if (((a = n.distance(e, t, !0, !0)), (o = n.distance(e, r, !0, !0)), (u = n.distance(t, t, !1, !0)), (p = n.distance(r, r, !1, !0)), 0 === (l = (s = Math.abs(a)) + (i = Math.abs(o))))) {
                            tO.setRelative(e, e, (u + p) / 2, n, !0);
                            return;
                        }
                        tO.setRelative(e, e, (u * i + p * s) / l, n, !0);
                    },
                    normalSlope: Number.NEGATIVE_INFINITY,
                    setRelative: function (e, t, r, n, a) {
                        if (!n || n === this) {
                            e.x = (a ? t.xo : t.x) + r;
                            return;
                        }
                        var o = a ? t.xo : t.x,
                            s = a ? t.yo : t.y,
                            i = o + r * n.x,
                            u = s + r * n.y;
                        e.x = i + (e.y - u) / n.normalSlope;
                    },
                    slope: 0,
                    touch: function (e) {
                        e.xTouched = !0;
                    },
                    touched: function (e) {
                        return e.xTouched;
                    },
                    untouch: function (e) {
                        e.xTouched = !1;
                    },
                },
                tE = {
                    x: 0,
                    y: 1,
                    axis: "y",
                    distance: function (e, t, r, n) {
                        return (r ? e.yo : e.y) - (n ? t.yo : t.y);
                    },
                    interpolate: function (e, t, r, n) {
                        var a, o, s, i, u, p, l;
                        if (!n || n === this) {
                            if (((a = e.yo - t.yo), (o = e.yo - r.yo), (u = t.y - t.yo), (p = r.y - r.yo), 0 === (l = (s = Math.abs(a)) + (i = Math.abs(o))))) {
                                e.y = e.yo + (u + p) / 2;
                                return;
                            }
                            e.y = e.yo + (u * i + p * s) / l;
                            return;
                        }
                        if (((a = n.distance(e, t, !0, !0)), (o = n.distance(e, r, !0, !0)), (u = n.distance(t, t, !1, !0)), (p = n.distance(r, r, !1, !0)), 0 === (l = (s = Math.abs(a)) + (i = Math.abs(o))))) {
                            tE.setRelative(e, e, (u + p) / 2, n, !0);
                            return;
                        }
                        tE.setRelative(e, e, (u * i + p * s) / l, n, !0);
                    },
                    normalSlope: 0,
                    setRelative: function (e, t, r, n, a) {
                        if (!n || n === this) {
                            e.y = (a ? t.yo : t.y) + r;
                            return;
                        }
                        var o = a ? t.xo : t.x,
                            s = a ? t.yo : t.y,
                            i = o + r * n.x,
                            u = s + r * n.y;
                        e.y = u + n.normalSlope * (e.x - i);
                    },
                    slope: Number.POSITIVE_INFINITY,
                    touch: function (e) {
                        e.yTouched = !0;
                    },
                    touched: function (e) {
                        return e.yTouched;
                    },
                    untouch: function (e) {
                        e.yTouched = !1;
                    },
                };
            function tR(e, t) {
                (this.x = e), (this.y = t), (this.axis = void 0), (this.slope = t / e), (this.normalSlope = -e / t), Object.freeze(this);
            }
            function tC(e, t) {
                var r = Math.sqrt(e * e + t * t);
                return ((e /= r), (t /= r), 1 === e && 0 === t) ? tO : 0 === e && 1 === t ? tE : new tR(e, t);
            }
            function tL(e, t, r, n) {
                (this.x = this.xo = Math.round(64 * e) / 64),
                    (this.y = this.yo = Math.round(64 * t) / 64),
                    (this.lastPointOfContour = r),
                    (this.onCurve = n),
                    (this.prevPointOnContour = void 0),
                    (this.nextPointOnContour = void 0),
                    (this.xTouched = !1),
                    (this.yTouched = !1),
                    Object.preventExtensions(this);
            }
            Object.freeze(tO),
                Object.freeze(tE),
                (tR.prototype.distance = function (e, t, r, n) {
                    return this.x * tO.distance(e, t, r, n) + this.y * tE.distance(e, t, r, n);
                }),
                (tR.prototype.interpolate = function (e, t, r, n) {
                    var a, o, s, i, u, p, l;
                    if (((s = n.distance(e, t, !0, !0)), (i = n.distance(e, r, !0, !0)), (a = n.distance(t, t, !1, !0)), (o = n.distance(r, r, !1, !0)), 0 === (l = (u = Math.abs(s)) + (p = Math.abs(i))))) {
                        this.setRelative(e, e, (a + o) / 2, n, !0);
                        return;
                    }
                    this.setRelative(e, e, (a * p + o * u) / l, n, !0);
                }),
                (tR.prototype.setRelative = function (e, t, r, n, a) {
                    n = n || this;
                    var o = a ? t.xo : t.x,
                        s = a ? t.yo : t.y,
                        i = o + r * n.x,
                        u = s + r * n.y,
                        p = n.normalSlope,
                        l = this.slope,
                        c = e.x,
                        h = e.y;
                    (e.x = (l * c - p * i + u - h) / (l - p)), (e.y = l * (e.x - c) + h);
                }),
                (tR.prototype.touch = function (e) {
                    (e.xTouched = !0), (e.yTouched = !0);
                }),
                (tL.prototype.nextTouched = function (e) {
                    for (var t = this.nextPointOnContour; !e.touched(t) && t !== this;) t = t.nextPointOnContour;
                    return t;
                }),
                (tL.prototype.prevTouched = function (e) {
                    for (var t = this.prevPointOnContour; !e.touched(t) && t !== this;) t = t.prevPointOnContour;
                    return t;
                });
            var tD = Object.freeze(new tL(0, 0)),
                tw = { cvCutIn: 17 / 16, deltaBase: 9, deltaShift: 0.125, loop: 1, minDis: 1, autoFlip: !0 };
            function tI(e, t) {
                switch (((this.env = e), (this.stack = []), (this.prog = t), e)) {
                    case "glyf":
                        (this.zp0 = this.zp1 = this.zp2 = 1), (this.rp0 = this.rp1 = this.rp2 = 0);
                    case "prep":
                        (this.fv = this.pv = this.dpv = tO), (this.round = tb);
                }
            }
            function tM(e) {
                for (var t = (e.tZone = Array(e.gZone.length)), r = 0; r < t.length; r++) t[r] = new tL(0, 0);
            }
            function tG(e, t) {
                var r,
                    n = e.prog,
                    a = e.ip,
                    o = 1;
                do
                    if (88 === (r = n[++a])) o++;
                    else if (89 === r) o--;
                    else if (64 === r) a += n[a + 1] + 1;
                    else if (65 === r) a += 2 * n[a + 1] + 1;
                    else if (r >= 176 && r <= 183) a += r - 176 + 1;
                    else if (r >= 184 && r <= 191) a += (r - 184 + 1) * 2;
                    else if (t && 1 === o && 27 === r) break;
                while (o > 0);
                e.ip = a;
            }
            function tB(e, t) {
                exports.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"), (t.fv = t.pv = t.dpv = e);
            }
            function tF(e, t) {
                exports.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"), (t.pv = t.dpv = e);
            }
            function tA(e, t) {
                exports.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), (t.fv = e);
            }
            function tP(e, t) {
                var r,
                    n,
                    a = t.stack,
                    o = a.pop(),
                    s = a.pop(),
                    i = t.z2[o],
                    u = t.z1[s];
                exports.DEBUG && console.log("SPVTL[" + e + "]", o, s), e ? ((r = i.y - u.y), (n = u.x - i.x)) : ((r = u.x - i.x), (n = u.y - i.y)), (t.pv = t.dpv = tC(r, n));
            }
            function tN(e, t) {
                var r,
                    n,
                    a = t.stack,
                    o = a.pop(),
                    s = a.pop(),
                    i = t.z2[o],
                    u = t.z1[s];
                exports.DEBUG && console.log("SFVTL[" + e + "]", o, s), e ? ((r = i.y - u.y), (n = u.x - i.x)) : ((r = u.x - i.x), (n = u.y - i.y)), (t.fv = tC(r, n));
            }
            function tH(e) {
                exports.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
            }
            function tz(e, t) {
                var r = t.stack.pop(),
                    n = t.z0[r],
                    a = t.fv,
                    o = t.pv;
                exports.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
                var s = o.distance(n, tD);
                e && (s = t.round(s)), a.setRelative(n, tD, s, o), a.touch(n), (t.rp0 = t.rp1 = r);
            }
            function tW(e, t) {
                var r,
                    n,
                    a,
                    o = t.z2,
                    s = o.length - 2;
                exports.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");
                for (var i = 0; i < s; i++) (r = o[i]), e.touched(r) || (n = r.prevTouched(e)) === r || (n === (a = r.nextTouched(e)) && e.setRelative(r, r, e.distance(n, n, !1, !0), e, !0), e.interpolate(r, n, a, e));
            }
            function tq(e, t) {
                for (var r = t.stack, n = e ? t.rp1 : t.rp2, a = (e ? t.z0 : t.z1)[n], o = t.fv, s = t.pv, i = t.loop, u = t.z2; i--;) {
                    var p = r.pop(),
                        l = u[p],
                        c = s.distance(a, a, !1, !0);
                    o.setRelative(l, l, c, s), o.touch(l), exports.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - i) + ": " : "") + "SHP[" + (e ? "rp1" : "rp2") + "]", p);
                }
                t.loop = 1;
            }
            function t_(e, t) {
                var r = t.stack,
                    n = e ? t.rp1 : t.rp2,
                    a = (e ? t.z0 : t.z1)[n],
                    o = t.fv,
                    s = t.pv,
                    i = r.pop(),
                    u = t.z2[t.contours[i]],
                    p = u;
                exports.DEBUG && console.log(t.step, "SHC[" + e + "]", i);
                var l = s.distance(a, a, !1, !0);
                do p !== a && o.setRelative(p, p, l, s), (p = p.nextPointOnContour);
                while (p !== u);
            }
            function tX(e, t) {
                var r,
                    n,
                    a = t.stack,
                    o = e ? t.rp1 : t.rp2,
                    s = (e ? t.z0 : t.z1)[o],
                    i = t.fv,
                    u = t.pv,
                    p = a.pop();
                switch ((exports.DEBUG && console.log(t.step, "SHZ[" + e + "]", p), p)) {
                    case 0:
                        r = t.tZone;
                        break;
                    case 1:
                        r = t.gZone;
                        break;
                    default:
                        throw Error("Invalid zone");
                }
                for (var l = u.distance(s, s, !1, !0), c = r.length - 2, h = 0; h < c; h++) (n = r[h]), i.setRelative(n, n, l, u);
            }
            function tV(e, t) {
                var r = t.stack,
                    n = r.pop() / 64,
                    a = r.pop(),
                    o = t.z1[a],
                    s = t.z0[t.rp0],
                    i = t.fv,
                    u = t.pv;
                i.setRelative(o, s, n, u), i.touch(o), exports.DEBUG && console.log(t.step, "MSIRP[" + e + "]", n, a), (t.rp1 = t.rp0), (t.rp2 = a), e && (t.rp0 = a);
            }
            function tY(e, t) {
                var r = t.stack,
                    n = r.pop(),
                    a = r.pop(),
                    o = t.z0[a],
                    s = t.fv,
                    i = t.pv,
                    u = t.cvt[n];
                exports.DEBUG && console.log(t.step, "MIAP[" + e + "]", n, "(", u, ")", a);
                var p = i.distance(o, tD);
                e && (Math.abs(p - u) < t.cvCutIn && (p = u), (p = t.round(p))), s.setRelative(o, tD, p, i), 0 === t.zp0 && ((o.xo = o.x), (o.yo = o.y)), s.touch(o), (t.rp0 = t.rp1 = a);
            }
            function tj(e, t) {
                var r = t.stack,
                    n = r.pop(),
                    a = t.z2[n];
                exports.DEBUG && console.log(t.step, "GC[" + e + "]", n), r.push(64 * t.dpv.distance(a, tD, e, !1));
            }
            function tZ(e, t) {
                var r = t.stack,
                    n = r.pop(),
                    a = r.pop(),
                    o = t.z1[n],
                    s = t.z0[a],
                    i = t.dpv.distance(s, o, e, e);
                exports.DEBUG && console.log(t.step, "MD[" + e + "]", n, a, "->", i), t.stack.push(Math.round(64 * i));
            }
            function tQ(e, t) {
                var r = t.stack,
                    n = r.pop(),
                    a = t.fv,
                    o = t.pv,
                    s = t.ppem,
                    i = t.deltaBase + (e - 1) * 16,
                    u = t.deltaShift,
                    p = t.z0;
                exports.DEBUG && console.log(t.step, "DELTAP[" + e + "]", n, r);
                for (var l = 0; l < n; l++) {
                    var c = r.pop(),
                        h = r.pop();
                    if (i + ((240 & h) >> 4) === s) {
                        var f = (15 & h) - 8;
                        f >= 0 && f++, exports.DEBUG && console.log(t.step, "DELTAPFIX", c, "by", f * u);
                        var d = p[c];
                        a.setRelative(d, d, f * u, o);
                    }
                }
            }
            function tK(e, t) {
                var r = t.stack,
                    n = r.pop();
                exports.DEBUG && console.log(t.step, "ROUND[]"), r.push(64 * t.round(n / 64));
            }
            function tJ(e, t) {
                var r = t.stack,
                    n = r.pop(),
                    a = t.ppem,
                    o = t.deltaBase + (e - 1) * 16,
                    s = t.deltaShift;
                exports.DEBUG && console.log(t.step, "DELTAC[" + e + "]", n, r);
                for (var i = 0; i < n; i++) {
                    var u = r.pop(),
                        p = r.pop();
                    if (o + ((240 & p) >> 4) === a) {
                        var l = (15 & p) - 8;
                        l >= 0 && l++;
                        var c = l * s;
                        exports.DEBUG && console.log(t.step, "DELTACFIX", u, "by", c), (t.cvt[u] += c);
                    }
                }
            }
            function t$(e, t) {
                var r,
                    n,
                    a = t.stack,
                    o = a.pop(),
                    s = a.pop(),
                    i = t.z2[o],
                    u = t.z1[s];
                exports.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", o, s), e ? ((r = i.y - u.y), (n = u.x - i.x)) : ((r = u.x - i.x), (n = u.y - i.y)), (t.dpv = tC(r, n));
            }
            function t0(e, t) {
                var r = t.stack,
                    n = t.prog,
                    a = t.ip;
                exports.DEBUG && console.log(t.step, "PUSHB[" + e + "]");
                for (var o = 0; o < e; o++) r.push(n[++a]);
                t.ip = a;
            }
            function t1(e, t) {
                var r = t.ip,
                    n = t.prog,
                    a = t.stack;
                exports.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");
                for (var o = 0; o < e; o++) {
                    var s = (n[++r] << 8) | n[++r];
                    32768 & s && (s = -((65535 ^ s) + 1)), a.push(s);
                }
                t.ip = r;
            }
            function t2(e, t, r, n, a, o) {
                var s,
                    i,
                    u,
                    p,
                    l = o.stack,
                    c = e && l.pop(),
                    h = l.pop(),
                    f = o.rp0,
                    d = o.z0[f],
                    g = o.z1[h],
                    v = o.minDis,
                    m = o.fv,
                    y = o.dpv;
                (u = (i = s = y.distance(g, d, !0, !0)) >= 0 ? 1 : -1),
                    (i = Math.abs(i)),
                    e && ((p = o.cvt[c]), n && Math.abs(i - p) < o.cvCutIn && (i = p)),
                    r && i < v && (i = v),
                    n && (i = o.round(i)),
                    m.setRelative(g, d, u * i, y),
                    m.touch(g),
                    exports.DEBUG &&
                    console.log(
                        o.step,
                        (e ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (r ? ">" : "_") + (n ? "R" : "_") + (0 === a ? "Gr" : 1 === a ? "Bl" : 2 === a ? "Wh" : "") + "]",
                        e ? c + "(" + o.cvt[c] + "," + p + ")" : "",
                        h,
                        "(d =",
                        s,
                        "->",
                        u * i,
                        ")"
                    ),
                    (o.rp1 = o.rp0),
                    (o.rp2 = h),
                    t && (o.rp0 = h);
            }
            function t6(e) {
                (this.char = e), (this.state = {}), (this.activeState = null);
            }
            function t3(e, t, r) {
                (this.contextName = r), (this.startIndex = e), (this.endOffset = t);
            }
            function t5(e, t, r) {
                (this.contextName = e), (this.openRange = null), (this.ranges = []), (this.checkStart = t), (this.checkEnd = r);
            }
            function t4(e, t) {
                (this.context = e), (this.index = t), (this.length = e.length), (this.current = e[t]), (this.backtrack = e.slice(0, t)), (this.lookahead = e.slice(t + 1));
            }
            function t8(e) {
                (this.eventId = e), (this.subscribers = []);
            }
            function t7(e) {
                var t = this,
                    r = ["start", "end", "next", "newToken", "contextStart", "contextEnd", "insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD", "updateContextsRanges"];
                r.forEach(function (e) {
                    Object.defineProperty(t.events, e, { value: new t8(e) });
                }),
                    e &&
                    r.forEach(function (r) {
                        var n = e[r];
                        "function" == typeof n && t.events[r].subscribe(n);
                    }),
                    ["insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD"].forEach(function (e) {
                        t.events[e].subscribe(t.updateContextsRanges);
                    });
            }
            function t9(e) {
                (this.tokens = []), (this.registeredContexts = {}), (this.contextCheckers = []), (this.events = {}), (this.registeredModifiers = []), t7.call(this, e);
            }
            function re(e) {
                return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e);
            }
            function rt(e) {
                return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(
                    e
                );
            }
            function rr(e) {
                return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e);
            }
            function rn(e) {
                return /[A-z]/.test(e);
            }
            function ra(e) {
                (this.font = e), (this.features = {});
            }
            function ro(e) {
                (this.id = e.id), (this.tag = e.tag), (this.substitution = e.substitution);
            }
            function rs(e, t) {
                if (!e) return -1;
                switch (t.format) {
                    case 1:
                        return t.glyphs.indexOf(e);
                    case 2:
                        for (var r = t.ranges, n = 0; n < r.length; n++) {
                            var a = r[n];
                            if (e >= a.start && e <= a.end) {
                                var o = e - a.start;
                                return a.index + o;
                            }
                        }
                }
                return -1;
            }
            function ri(e, t) {
                return -1 === rs(e, t.coverage) ? null : e + t.deltaGlyphId;
            }
            function ru(e, t) {
                var r = rs(e, t.coverage);
                return -1 === r ? null : t.substitute[r];
            }
            function rp(e, t) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var a = e[n],
                        o = t.current,
                        s = rs((o = Array.isArray(o) ? o[0] : o), a);
                    -1 !== s && r.push(s);
                }
                return r.length !== e.length ? -1 : r;
            }
            function rl(e, t) {
                var r = t.inputCoverage.length + t.lookaheadCoverage.length + t.backtrackCoverage.length;
                if (e.context.length < r) return [];
                var n = rp(t.inputCoverage, e);
                if (-1 === n) return [];
                var a = t.inputCoverage.length - 1;
                if (e.lookahead.length < t.lookaheadCoverage.length) return [];
                for (var o = e.lookahead.slice(a); o.length && rr(o[0].char);) o.shift();
                var s = new t4(o, 0),
                    i = rp(t.lookaheadCoverage, s),
                    u = [].concat(e.backtrack);
                for (u.reverse(); u.length && rr(u[0].char);) u.shift();
                if (u.length < t.backtrackCoverage.length) return [];
                var p = new t4(u, 0),
                    l = rp(t.backtrackCoverage, p),
                    c = n.length === t.inputCoverage.length && i.length === t.lookaheadCoverage.length && l.length === t.backtrackCoverage.length,
                    h = [];
                if (c)
                    for (var f = 0; f < t.lookupRecords.length; f++)
                        for (var d = t.lookupRecords[f].lookupListIndex, g = this.getLookupByIndex(d), v = 0; v < g.subtables.length; v++) {
                            var m = g.subtables[v],
                                y = this.getLookupMethod(g, m);
                            if ("12" === this.getSubstitutionType(g, m))
                                for (var b = 0; b < n.length; b++) {
                                    var x = y(e.get(b));
                                    x && h.push(x);
                                }
                        }
                return h;
            }
            function rc(e, t) {
                var r,
                    n = rs(e.current, t.coverage);
                if (-1 === n) return null;
                for (var a = t.ligatureSets[n], o = 0; o < a.length; o++) {
                    r = a[o];
                    for (var s = 0; s < r.components.length && e.lookahead[s] === r.components[s]; s++) if (s === r.components.length - 1) return r;
                }
                return null;
            }
            function rh(e, t) {
                var r = rs(e, t.coverage);
                return -1 === r ? null : t.sequences[r];
            }
            (tm.prototype.exec = function (e, t) {
                if ("number" != typeof t) throw Error("Point size is not a number!");
                if (!(this._errorState > 2)) {
                    var r = this.font,
                        n = this._prepState;
                    if (!n || n.ppem !== t) {
                        var a = this._fpgmState;
                        if (!a) {
                            (tI.prototype = tw), ((a = this._fpgmState = new tI("fpgm", r.tables.fpgm)).funcs = []), (a.font = r), exports.DEBUG && (console.log("---EXEC FPGM---"), (a.step = -1));
                            try {
                                i(a);
                            } catch (e) {
                                console.log("Hinting error in FPGM:" + e), (this._errorState = 3);
                                return;
                            }
                        }
                        (tI.prototype = a), ((n = this._prepState = new tI("prep", r.tables.prep)).ppem = t);
                        var o = r.tables.cvt;
                        if (o) for (var s = (n.cvt = Array(o.length)), p = t / r.unitsPerEm, l = 0; l < o.length; l++) s[l] = o[l] * p;
                        else n.cvt = [];
                        exports.DEBUG && (console.log("---EXEC PREP---"), (n.step = -1));
                        try {
                            i(n);
                        } catch (e) {
                            this._errorState < 2 && console.log("Hinting error in PREP:" + e), (this._errorState = 2);
                        }
                    }
                    if (!(this._errorState > 1))
                        try {
                            return u(e, n);
                        } catch (e) {
                            this._errorState < 1 && (console.log("Hinting error:" + e), console.log("Note: further hinting errors are silenced")), (this._errorState = 1);
                            return;
                        }
                }
            }),
                (u = function (e, t) {
                    var r,
                        n,
                        a,
                        o = t.ppem / t.font.unitsPerEm,
                        s = e.components;
                    if (((tI.prototype = t), s)) {
                        var u = t.font;
                        (n = []), (r = []);
                        for (var l = 0; l < s.length; l++) {
                            var c = s[l],
                                h = u.glyphs.get(c.glyphIndex);
                            (a = new tI("glyf", h.instructions)), exports.DEBUG && (console.log("---EXEC COMP " + l + "---"), (a.step = -1)), p(h, a, o, o);
                            for (var f = Math.round(c.dx * o), d = Math.round(c.dy * o), g = a.gZone, v = a.contours, m = 0; m < g.length; m++) {
                                var y = g[m];
                                (y.xTouched = y.yTouched = !1), (y.xo = y.x = y.x + f), (y.yo = y.y = y.y + d);
                            }
                            var b = n.length;
                            n.push.apply(n, g);
                            for (var x = 0; x < v.length; x++) r.push(v[x] + b);
                        }
                        e.instructions &&
                            !a.inhibitGridFit &&
                            (((a = new tI("glyf", e.instructions)).gZone = a.z0 = a.z1 = a.z2 = n),
                                (a.contours = r),
                                n.push(new tL(0, 0), new tL(Math.round(e.advanceWidth * o), 0)),
                                exports.DEBUG && (console.log("---EXEC COMPOSITE---"), (a.step = -1)),
                                i(a),
                                (n.length -= 2));
                    } else (a = new tI("glyf", e.instructions)), exports.DEBUG && (console.log("---EXEC GLYPH---"), (a.step = -1)), p(e, a, o, o), (n = a.gZone);
                    return n;
                }),
                (p = function (e, t, r, n) {
                    for (var a, o, s, u = e.points || [], p = u.length, l = (t.gZone = t.z0 = t.z1 = t.z2 = []), c = (t.contours = []), h = 0; h < p; h++) (a = u[h]), (l[h] = new tL(a.x * r, a.y * n, a.lastPointOfContour, a.onCurve));
                    for (var f = 0; f < p; f++)
                        (a = l[f]), o || ((o = a), c.push(f)), a.lastPointOfContour ? ((a.nextPointOnContour = o), (o.prevPointOnContour = a), (o = void 0)) : ((s = l[f + 1]), (a.nextPointOnContour = s), (s.prevPointOnContour = a));
                    if (!t.inhibitGridFit) {
                        if (exports.DEBUG) {
                            console.log("PROCESSING GLYPH", t.stack);
                            for (var d = 0; d < p; d++) console.log(d, l[d].x, l[d].y);
                        }
                        if ((l.push(new tL(0, 0), new tL(Math.round(e.advanceWidth * r), 0)), i(t), (l.length -= 2), exports.DEBUG)) {
                            console.log("FINISHED GLYPH", t.stack);
                            for (var g = 0; g < p; g++) console.log(g, l[g].x, l[g].y);
                        }
                    }
                }),
                (i = function (e) {
                    var t,
                        r = e.prog;
                    if (r) {
                        var n = r.length;
                        for (e.ip = 0; e.ip < n; e.ip++) {
                            if ((exports.DEBUG && e.step++, !(t = s[r[e.ip]]))) throw Error("unknown instruction: 0x" + Number(r[e.ip]).toString(16));
                            t(e);
                        }
                    }
                }),
                (s = [
                    tB.bind(void 0, tE),
                    tB.bind(void 0, tO),
                    tF.bind(void 0, tE),
                    tF.bind(void 0, tO),
                    tA.bind(void 0, tE),
                    tA.bind(void 0, tO),
                    tP.bind(void 0, 0),
                    tP.bind(void 0, 1),
                    tN.bind(void 0, 0),
                    tN.bind(void 0, 1),
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "SPVFS[]", r, n), (e.pv = e.dpv = tC(n, r));
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "SPVFS[]", r, n), (e.fv = tC(n, r));
                    },
                    function (e) {
                        var t = e.stack,
                            r = e.pv;
                        exports.DEBUG && console.log(e.step, "GPV[]"), t.push(16384 * r.x), t.push(16384 * r.y);
                    },
                    function (e) {
                        var t = e.stack,
                            r = e.fv;
                        exports.DEBUG && console.log(e.step, "GFV[]"), t.push(16384 * r.x), t.push(16384 * r.y);
                    },
                    function (e) {
                        (e.fv = e.pv), exports.DEBUG && console.log(e.step, "SFVTPV[]");
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop(),
                            a = t.pop(),
                            o = t.pop(),
                            s = t.pop(),
                            i = e.z0,
                            u = e.z1,
                            p = i[r],
                            l = i[n],
                            c = u[a],
                            h = u[o],
                            f = e.z2[s];
                        exports.DEBUG && console.log("ISECT[], ", r, n, a, o, s);
                        var d = p.x,
                            g = p.y,
                            v = l.x,
                            m = l.y,
                            y = c.x,
                            b = c.y,
                            x = h.x,
                            S = h.y,
                            T = (d - v) * (b - S) - (g - m) * (y - x),
                            k = d * m - g * v,
                            U = y * S - b * x;
                        (f.x = (k * (y - x) - U * (d - v)) / T), (f.y = (k * (b - S) - U * (g - m)) / T);
                    },
                    function (e) {
                        (e.rp0 = e.stack.pop()), exports.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
                    },
                    function (e) {
                        (e.rp1 = e.stack.pop()), exports.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
                    },
                    function (e) {
                        (e.rp2 = e.stack.pop()), exports.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "SZP0[]", t), (e.zp0 = t), t)) {
                            case 0:
                                e.tZone || tM(e), (e.z0 = e.tZone);
                                break;
                            case 1:
                                e.z0 = e.gZone;
                                break;
                            default:
                                throw Error("Invalid zone pointer");
                        }
                    },
                    function (e) {
                        var t = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "SZP1[]", t), (e.zp1 = t), t)) {
                            case 0:
                                e.tZone || tM(e), (e.z1 = e.tZone);
                                break;
                            case 1:
                                e.z1 = e.gZone;
                                break;
                            default:
                                throw Error("Invalid zone pointer");
                        }
                    },
                    function (e) {
                        var t = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "SZP2[]", t), (e.zp2 = t), t)) {
                            case 0:
                                e.tZone || tM(e), (e.z2 = e.tZone);
                                break;
                            case 1:
                                e.z2 = e.gZone;
                                break;
                            default:
                                throw Error("Invalid zone pointer");
                        }
                    },
                    function (e) {
                        var t = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "SZPS[]", t), (e.zp0 = e.zp1 = e.zp2 = t), t)) {
                            case 0:
                                e.tZone || tM(e), (e.z0 = e.z1 = e.z2 = e.tZone);
                                break;
                            case 1:
                                e.z0 = e.z1 = e.z2 = e.gZone;
                                break;
                            default:
                                throw Error("Invalid zone pointer");
                        }
                    },
                    function (e) {
                        (e.loop = e.stack.pop()), exports.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
                    },
                    function (e) {
                        exports.DEBUG && console.log(e.step, "RTG[]"), (e.round = tb);
                    },
                    function (e) {
                        exports.DEBUG && console.log(e.step, "RTHG[]"), (e.round = tS);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "SMD[]", t), (e.minDis = t / 64);
                    },
                    function (e) {
                        exports.DEBUG && console.log(e.step, "ELSE[]"), tG(e, !1);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "JMPR[]", t), (e.ip += t - 1);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "SCVTCI[]", t), (e.cvCutIn = t / 64);
                    },
                    void 0,
                    void 0,
                    function (e) {
                        var t = e.stack;
                        exports.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1]);
                    },
                    tH,
                    function (e) {
                        exports.DEBUG && console.log(e.step, "CLEAR[]"), (e.stack.length = 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(n);
                    },
                    function (e) {
                        var t = e.stack;
                        exports.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r]);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "MINDEX[]", r), t.push(t.splice(t.length - r, 1)[0]);
                    },
                    void 0,
                    void 0,
                    void 0,
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "LOOPCALL[]", r, n);
                        var a = e.ip,
                            o = e.prog;
                        e.prog = e.funcs[r];
                        for (var s = 0; s < n; s++) i(e), exports.DEBUG && console.log(++e.step, s + 1 < n ? "next loopcall" : "done loopcall", s);
                        (e.ip = a), (e.prog = o);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "CALL[]", t);
                        var r = e.ip,
                            n = e.prog;
                        (e.prog = e.funcs[t]), i(e), (e.ip = r), (e.prog = n), exports.DEBUG && console.log(++e.step, "returning from", t);
                    },
                    function (e) {
                        if ("fpgm" !== e.env) throw Error("FDEF not allowed here");
                        var t = e.stack,
                            r = e.prog,
                            n = e.ip,
                            a = t.pop(),
                            o = n;
                        for (exports.DEBUG && console.log(e.step, "FDEF[]", a); 45 !== r[++n];);
                        (e.ip = n), (e.funcs[a] = r.slice(o + 1, n));
                    },
                    void 0,
                    tz.bind(void 0, 0),
                    tz.bind(void 0, 1),
                    tW.bind(void 0, tE),
                    tW.bind(void 0, tO),
                    tq.bind(void 0, 0),
                    tq.bind(void 0, 1),
                    t_.bind(void 0, 0),
                    t_.bind(void 0, 1),
                    tX.bind(void 0, 0),
                    tX.bind(void 0, 1),
                    function (e) {
                        for (var t = e.stack, r = e.loop, n = e.fv, a = t.pop() / 64, o = e.z2; r--;) {
                            var s = t.pop(),
                                i = o[s];
                            exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]", s, a), n.setRelative(i, i, a), n.touch(i);
                        }
                        e.loop = 1;
                    },
                    function (e) {
                        for (var t = e.stack, r = e.rp1, n = e.rp2, a = e.loop, o = e.z0[r], s = e.z1[n], i = e.fv, u = e.dpv, p = e.z2; a--;) {
                            var l = t.pop(),
                                c = p[l];
                            exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - a) + ": " : "") + "IP[]", l, r, "<->", n), i.interpolate(c, o, s, u), i.touch(c);
                        }
                        e.loop = 1;
                    },
                    tV.bind(void 0, 0),
                    tV.bind(void 0, 1),
                    function (e) {
                        for (var t = e.stack, r = e.rp0, n = e.z0[r], a = e.loop, o = e.fv, s = e.pv, i = e.z1; a--;) {
                            var u = t.pop(),
                                p = i[u];
                            exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - a) + ": " : "") + "ALIGNRP[]", u), o.setRelative(p, n, 0, s), o.touch(p);
                        }
                        e.loop = 1;
                    },
                    function (e) {
                        exports.DEBUG && console.log(e.step, "RTDG[]"), (e.round = tx);
                    },
                    tY.bind(void 0, 0),
                    tY.bind(void 0, 1),
                    function (e) {
                        var t = e.prog,
                            r = e.ip,
                            n = e.stack,
                            a = t[++r];
                        exports.DEBUG && console.log(e.step, "NPUSHB[]", a);
                        for (var o = 0; o < a; o++) n.push(t[++r]);
                        e.ip = r;
                    },
                    function (e) {
                        var t = e.ip,
                            r = e.prog,
                            n = e.stack,
                            a = r[++t];
                        exports.DEBUG && console.log(e.step, "NPUSHW[]", a);
                        for (var o = 0; o < a; o++) {
                            var s = (r[++t] << 8) | r[++t];
                            32768 & s && (s = -((65535 ^ s) + 1)), n.push(s);
                        }
                        e.ip = t;
                    },
                    function (e) {
                        var t = e.stack,
                            r = e.store;
                        r || (r = e.store = []);
                        var n = t.pop(),
                            a = t.pop();
                        exports.DEBUG && console.log(e.step, "WS", n, a), (r[a] = n);
                    },
                    function (e) {
                        var t = e.stack,
                            r = e.store,
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "RS", n);
                        var a = (r && r[n]) || 0;
                        t.push(a);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "WCVTP", r, n), (e.cvt[n] = r / 64);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "RCVT", r), t.push(64 * e.cvt[r]);
                    },
                    tj.bind(void 0, 0),
                    tj.bind(void 0, 1),
                    void 0,
                    tZ.bind(void 0, 0),
                    tZ.bind(void 0, 1),
                    function (e) {
                        exports.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
                    },
                    void 0,
                    function (e) {
                        exports.DEBUG && console.log(e.step, "FLIPON[]"), (e.autoFlip = !0);
                    },
                    void 0,
                    void 0,
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "LT[]", r, n), t.push(n < r ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "LTEQ[]", r, n), t.push(n <= r ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "GT[]", r, n), t.push(n > r ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "GTEQ[]", r, n), t.push(n >= r ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "EQ[]", r, n), t.push(r === n ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "NEQ[]", r, n), t.push(r !== n ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "ODD[]", r), t.push(Math.trunc(r) % 2 ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "EVEN[]", r), t.push(Math.trunc(r) % 2 ? 0 : 1);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "IF[]", t), !t && (tG(e, !0), exports.DEBUG && console.log(e.step, "EIF[]"));
                    },
                    function (e) {
                        exports.DEBUG && console.log(e.step, "EIF[]");
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "AND[]", r, n), t.push(r && n ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "OR[]", r, n), t.push(r || n ? 1 : 0);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
                    },
                    tQ.bind(void 0, 1),
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "SDB[]", t), (e.deltaBase = t);
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "SDS[]", t), (e.deltaShift = Math.pow(0.5, t));
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "ADD[]", r, n), t.push(n + r);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "SUB[]", r, n), t.push(n - r);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "DIV[]", r, n), t.push((64 * n) / r);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "MUL[]", r, n), t.push((n * r) / 64);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r));
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "FLOOR[]", r), t.push(64 * Math.floor(r / 64));
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop();
                        exports.DEBUG && console.log(e.step, "CEILING[]", r), t.push(64 * Math.ceil(r / 64));
                    },
                    tK.bind(void 0, 0),
                    tK.bind(void 0, 1),
                    tK.bind(void 0, 2),
                    tK.bind(void 0, 3),
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "WCVTF[]", r, n), (e.cvt[n] = (r * e.ppem) / e.font.unitsPerEm);
                    },
                    tQ.bind(void 0, 2),
                    tQ.bind(void 0, 3),
                    tJ.bind(void 0, 1),
                    tJ.bind(void 0, 2),
                    tJ.bind(void 0, 3),
                    function (e) {
                        var t,
                            r = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "SROUND[]", r), (e.round = tU), 192 & r)) {
                            case 0:
                                t = 0.5;
                                break;
                            case 64:
                                t = 1;
                                break;
                            case 128:
                                t = 2;
                                break;
                            default:
                                throw Error("invalid SROUND value");
                        }
                        switch (((e.srPeriod = t), 48 & r)) {
                            case 0:
                                e.srPhase = 0;
                                break;
                            case 16:
                                e.srPhase = 0.25 * t;
                                break;
                            case 32:
                                e.srPhase = 0.5 * t;
                                break;
                            case 48:
                                e.srPhase = 0.75 * t;
                                break;
                            default:
                                throw Error("invalid SROUND value");
                        }
                        0 == (r &= 15) ? (e.srThreshold = 0) : (e.srThreshold = (r / 8 - 0.5) * t);
                    },
                    function (e) {
                        var t,
                            r = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "S45ROUND[]", r), (e.round = tU), 192 & r)) {
                            case 0:
                                t = Math.sqrt(2) / 2;
                                break;
                            case 64:
                                t = Math.sqrt(2);
                                break;
                            case 128:
                                t = 2 * Math.sqrt(2);
                                break;
                            default:
                                throw Error("invalid S45ROUND value");
                        }
                        switch (((e.srPeriod = t), 48 & r)) {
                            case 0:
                                e.srPhase = 0;
                                break;
                            case 16:
                                e.srPhase = 0.25 * t;
                                break;
                            case 32:
                                e.srPhase = 0.5 * t;
                                break;
                            case 48:
                                e.srPhase = 0.75 * t;
                                break;
                            default:
                                throw Error("invalid S45ROUND value");
                        }
                        0 == (r &= 15) ? (e.srThreshold = 0) : (e.srThreshold = (r / 8 - 0.5) * t);
                    },
                    void 0,
                    void 0,
                    function (e) {
                        exports.DEBUG && console.log(e.step, "ROFF[]"), (e.round = ty);
                    },
                    void 0,
                    function (e) {
                        exports.DEBUG && console.log(e.step, "RUTG[]"), (e.round = tT);
                    },
                    function (e) {
                        exports.DEBUG && console.log(e.step, "RDTG[]"), (e.round = tk);
                    },
                    tH,
                    tH,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "SCANCTRL[]", t);
                    },
                    t$.bind(void 0, 0),
                    t$.bind(void 0, 1),
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = 0;
                        exports.DEBUG && console.log(e.step, "GETINFO[]", r), 1 & r && (n = 35), 32 & r && (n |= 4096), t.push(n);
                    },
                    void 0,
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop(),
                            a = t.pop();
                        exports.DEBUG && console.log(e.step, "ROLL[]"), t.push(n), t.push(r), t.push(a);
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "MAX[]", r, n), t.push(Math.max(n, r));
                    },
                    function (e) {
                        var t = e.stack,
                            r = t.pop(),
                            n = t.pop();
                        exports.DEBUG && console.log(e.step, "MIN[]", r, n), t.push(Math.min(n, r));
                    },
                    function (e) {
                        var t = e.stack.pop();
                        exports.DEBUG && console.log(e.step, "SCANTYPE[]", t);
                    },
                    function (e) {
                        var t = e.stack.pop(),
                            r = e.stack.pop();
                        switch ((exports.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t)) {
                            case 1:
                                e.inhibitGridFit = !!r;
                                return;
                            case 2:
                                e.ignoreCvt = !!r;
                                return;
                            default:
                                throw Error("invalid INSTCTRL[] selector");
                        }
                    },
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    t0.bind(void 0, 1),
                    t0.bind(void 0, 2),
                    t0.bind(void 0, 3),
                    t0.bind(void 0, 4),
                    t0.bind(void 0, 5),
                    t0.bind(void 0, 6),
                    t0.bind(void 0, 7),
                    t0.bind(void 0, 8),
                    t1.bind(void 0, 1),
                    t1.bind(void 0, 2),
                    t1.bind(void 0, 3),
                    t1.bind(void 0, 4),
                    t1.bind(void 0, 5),
                    t1.bind(void 0, 6),
                    t1.bind(void 0, 7),
                    t1.bind(void 0, 8),
                    t2.bind(void 0, 0, 0, 0, 0, 0),
                    t2.bind(void 0, 0, 0, 0, 0, 1),
                    t2.bind(void 0, 0, 0, 0, 0, 2),
                    t2.bind(void 0, 0, 0, 0, 0, 3),
                    t2.bind(void 0, 0, 0, 0, 1, 0),
                    t2.bind(void 0, 0, 0, 0, 1, 1),
                    t2.bind(void 0, 0, 0, 0, 1, 2),
                    t2.bind(void 0, 0, 0, 0, 1, 3),
                    t2.bind(void 0, 0, 0, 1, 0, 0),
                    t2.bind(void 0, 0, 0, 1, 0, 1),
                    t2.bind(void 0, 0, 0, 1, 0, 2),
                    t2.bind(void 0, 0, 0, 1, 0, 3),
                    t2.bind(void 0, 0, 0, 1, 1, 0),
                    t2.bind(void 0, 0, 0, 1, 1, 1),
                    t2.bind(void 0, 0, 0, 1, 1, 2),
                    t2.bind(void 0, 0, 0, 1, 1, 3),
                    t2.bind(void 0, 0, 1, 0, 0, 0),
                    t2.bind(void 0, 0, 1, 0, 0, 1),
                    t2.bind(void 0, 0, 1, 0, 0, 2),
                    t2.bind(void 0, 0, 1, 0, 0, 3),
                    t2.bind(void 0, 0, 1, 0, 1, 0),
                    t2.bind(void 0, 0, 1, 0, 1, 1),
                    t2.bind(void 0, 0, 1, 0, 1, 2),
                    t2.bind(void 0, 0, 1, 0, 1, 3),
                    t2.bind(void 0, 0, 1, 1, 0, 0),
                    t2.bind(void 0, 0, 1, 1, 0, 1),
                    t2.bind(void 0, 0, 1, 1, 0, 2),
                    t2.bind(void 0, 0, 1, 1, 0, 3),
                    t2.bind(void 0, 0, 1, 1, 1, 0),
                    t2.bind(void 0, 0, 1, 1, 1, 1),
                    t2.bind(void 0, 0, 1, 1, 1, 2),
                    t2.bind(void 0, 0, 1, 1, 1, 3),
                    t2.bind(void 0, 1, 0, 0, 0, 0),
                    t2.bind(void 0, 1, 0, 0, 0, 1),
                    t2.bind(void 0, 1, 0, 0, 0, 2),
                    t2.bind(void 0, 1, 0, 0, 0, 3),
                    t2.bind(void 0, 1, 0, 0, 1, 0),
                    t2.bind(void 0, 1, 0, 0, 1, 1),
                    t2.bind(void 0, 1, 0, 0, 1, 2),
                    t2.bind(void 0, 1, 0, 0, 1, 3),
                    t2.bind(void 0, 1, 0, 1, 0, 0),
                    t2.bind(void 0, 1, 0, 1, 0, 1),
                    t2.bind(void 0, 1, 0, 1, 0, 2),
                    t2.bind(void 0, 1, 0, 1, 0, 3),
                    t2.bind(void 0, 1, 0, 1, 1, 0),
                    t2.bind(void 0, 1, 0, 1, 1, 1),
                    t2.bind(void 0, 1, 0, 1, 1, 2),
                    t2.bind(void 0, 1, 0, 1, 1, 3),
                    t2.bind(void 0, 1, 1, 0, 0, 0),
                    t2.bind(void 0, 1, 1, 0, 0, 1),
                    t2.bind(void 0, 1, 1, 0, 0, 2),
                    t2.bind(void 0, 1, 1, 0, 0, 3),
                    t2.bind(void 0, 1, 1, 0, 1, 0),
                    t2.bind(void 0, 1, 1, 0, 1, 1),
                    t2.bind(void 0, 1, 1, 0, 1, 2),
                    t2.bind(void 0, 1, 1, 0, 1, 3),
                    t2.bind(void 0, 1, 1, 1, 0, 0),
                    t2.bind(void 0, 1, 1, 1, 0, 1),
                    t2.bind(void 0, 1, 1, 1, 0, 2),
                    t2.bind(void 0, 1, 1, 1, 0, 3),
                    t2.bind(void 0, 1, 1, 1, 1, 0),
                    t2.bind(void 0, 1, 1, 1, 1, 1),
                    t2.bind(void 0, 1, 1, 1, 1, 2),
                    t2.bind(void 0, 1, 1, 1, 1, 3),
                ]),
                (t6.prototype.setState = function (e, t) {
                    return (this.state[e] = t), (this.activeState = { key: e, value: this.state[e] }), this.activeState;
                }),
                (t6.prototype.getState = function (e) {
                    return this.state[e] || null;
                }),
                (t9.prototype.inboundIndex = function (e) {
                    return e >= 0 && e < this.tokens.length;
                }),
                (t9.prototype.composeRUD = function (e) {
                    var t = this,
                        r = e.map(function (e) {
                            return t[e[0]].apply(t, e.slice(1).concat(!0));
                        }),
                        n = function (e) {
                            return "object" == typeof e && e.hasOwnProperty("FAIL");
                        };
                    if (r.every(n)) return { FAIL: "composeRUD: one or more operations hasn't completed successfully", report: r.filter(n) };
                    this.dispatch("composeRUD", [
                        r.filter(function (e) {
                            return !n(e);
                        }),
                    ]);
                }),
                (t9.prototype.replaceRange = function (e, t, r, n) {
                    t = null !== t ? t : this.tokens.length;
                    var a = r.every(function (e) {
                        return e instanceof t6;
                    });
                    if (!(!isNaN(e) && this.inboundIndex(e)) || !a) return { FAIL: "replaceRange: invalid tokens or startIndex." };
                    var o = this.tokens.splice.apply(this.tokens, [e, t].concat(r));
                    return n || this.dispatch("replaceToken", [e, t, r]), [o, r];
                }),
                (t9.prototype.replaceToken = function (e, t, r) {
                    if (!(!isNaN(e) && this.inboundIndex(e)) || !(t instanceof t6)) return { FAIL: "replaceToken: invalid token or index." };
                    var n = this.tokens.splice(e, 1, t);
                    return r || this.dispatch("replaceToken", [e, t]), [n[0], t];
                }),
                (t9.prototype.removeRange = function (e, t, r) {
                    t = isNaN(t) ? this.tokens.length : t;
                    var n = this.tokens.splice(e, t);
                    return r || this.dispatch("removeRange", [n, e, t]), n;
                }),
                (t9.prototype.removeToken = function (e, t) {
                    if (!(!isNaN(e) && this.inboundIndex(e))) return { FAIL: "removeToken: invalid token index." };
                    var r = this.tokens.splice(e, 1);
                    return t || this.dispatch("removeToken", [r, e]), r;
                }),
                (t9.prototype.insertToken = function (e, t, r) {
                    return e.every(function (e) {
                        return e instanceof t6;
                    })
                        ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)), r || this.dispatch("insertToken", [e, t]), e)
                        : { FAIL: "insertToken: invalid token(s)." };
                }),
                (t9.prototype.registerModifier = function (e, t, r) {
                    this.events.newToken.subscribe(function (n, a) {
                        if (null === t || !0 === t.apply(this, [n, a])) {
                            var o = r.apply(this, [n, a]);
                            n.setState(e, o);
                        }
                    }),
                        this.registeredModifiers.push(e);
                }),
                (t8.prototype.subscribe = function (e) {
                    return "function" == typeof e ? this.subscribers.push(e) - 1 : { FAIL: "invalid '" + this.eventId + "' event handler" };
                }),
                (t8.prototype.unsubscribe = function (e) {
                    this.subscribers.splice(e, 1);
                }),
                (t4.prototype.setCurrentIndex = function (e) {
                    (this.index = e), (this.current = this.context[e]), (this.backtrack = this.context.slice(0, e)), (this.lookahead = this.context.slice(e + 1));
                }),
                (t4.prototype.get = function (e) {
                    switch (!0) {
                        case 0 === e:
                            return this.current;
                        case e < 0 && Math.abs(e) <= this.backtrack.length:
                            return this.backtrack.slice(e)[0];
                        case e > 0 && e <= this.lookahead.length:
                            return this.lookahead[e - 1];
                        default:
                            return null;
                    }
                }),
                (t9.prototype.rangeToText = function (e) {
                    if (e instanceof t3)
                        return this.getRangeTokens(e)
                            .map(function (e) {
                                return e.char;
                            })
                            .join("");
                }),
                (t9.prototype.getText = function () {
                    return this.tokens
                        .map(function (e) {
                            return e.char;
                        })
                        .join("");
                }),
                (t9.prototype.getContext = function (e) {
                    return this.registeredContexts[e] || null;
                }),
                (t9.prototype.on = function (e, t) {
                    var r = this.events[e];
                    return r ? r.subscribe(t) : null;
                }),
                (t9.prototype.dispatch = function (e, t) {
                    var r = this,
                        n = this.events[e];
                    n instanceof t8 &&
                        n.subscribers.forEach(function (e) {
                            e.apply(r, t || []);
                        });
                }),
                (t9.prototype.registerContextChecker = function (e, t, r) {
                    if (this.getContext(e)) return { FAIL: "context name '" + e + "' is already registered." };
                    if ("function" != typeof t) return { FAIL: "missing context start check." };
                    if ("function" != typeof r) return { FAIL: "missing context end check." };
                    var n = new t5(e, t, r);
                    return (this.registeredContexts[e] = n), this.contextCheckers.push(n), n;
                }),
                (t9.prototype.getRangeTokens = function (e) {
                    var t = e.startIndex + e.endOffset;
                    return [].concat(this.tokens.slice(e.startIndex, t));
                }),
                (t9.prototype.getContextRanges = function (e) {
                    var t = this.getContext(e);
                    return t ? t.ranges : { FAIL: "context checker '" + e + "' is not registered." };
                }),
                (t9.prototype.resetContextsRanges = function () {
                    var e = this.registeredContexts;
                    for (var t in e) e.hasOwnProperty(t) && (e[t].ranges = []);
                }),
                (t9.prototype.updateContextsRanges = function () {
                    this.resetContextsRanges();
                    for (
                        var e = this.tokens.map(function (e) {
                            return e.char;
                        }),
                        t = 0;
                        t < e.length;
                        t++
                    ) {
                        var r = new t4(e, t);
                        this.runContextCheck(r);
                    }
                    this.dispatch("updateContextsRanges", [this.registeredContexts]);
                }),
                (t9.prototype.setEndOffset = function (e, t) {
                    var r = new t3(this.getContext(t).openRange.startIndex, e, t),
                        n = this.getContext(t).ranges;
                    return (r.rangeId = t + "." + n.length), n.push(r), (this.getContext(t).openRange = null), r;
                }),
                (t9.prototype.runContextCheck = function (e) {
                    var t = this,
                        r = e.index;
                    this.contextCheckers.forEach(function (n) {
                        var a = n.contextName,
                            o = t.getContext(a).openRange;
                        if ((!o && n.checkStart(e) && ((o = new t3(r, null, a)), (t.getContext(a).openRange = o), t.dispatch("contextStart", [a, r])), o && n.checkEnd(e))) {
                            var s = r - o.startIndex + 1,
                                i = t.setEndOffset(s, a);
                            t.dispatch("contextEnd", [a, i]);
                        }
                    });
                }),
                (t9.prototype.tokenize = function (e) {
                    (this.tokens = []), this.resetContextsRanges();
                    var t = Array.from(e);
                    this.dispatch("start");
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                            a = new t4(t, r);
                        this.dispatch("next", [a]), this.runContextCheck(a);
                        var o = new t6(n);
                        this.tokens.push(o), this.dispatch("newToken", [o, a]);
                    }
                    return this.dispatch("end", [this.tokens]), this.tokens;
                }),
                (ra.prototype.getDefaultScriptFeaturesIndexes = function () {
                    for (var e = this.font.tables.gsub.scripts, t = 0; t < e.length; t++) {
                        var r = e[t];
                        if ("DFLT" === r.tag) return r.script.defaultLangSys.featureIndexes;
                    }
                    return [];
                }),
                (ra.prototype.getScriptFeaturesIndexes = function (e) {
                    if (!this.font.tables.gsub) return [];
                    if (!e) return this.getDefaultScriptFeaturesIndexes();
                    for (var t = this.font.tables.gsub.scripts, r = 0; r < t.length; r++) {
                        var n = t[r];
                        if (n.tag === e && n.script.defaultLangSys) return n.script.defaultLangSys.featureIndexes;
                        var a = n.langSysRecords;
                        if (a)
                            for (var o = 0; o < a.length; o++) {
                                var s = a[o];
                                if (s.tag === e) return s.langSys.featureIndexes;
                            }
                    }
                    return this.getDefaultScriptFeaturesIndexes();
                }),
                (ra.prototype.mapTagsToFeatures = function (e, t) {
                    for (var r = {}, n = 0; n < e.length; n++) {
                        var a = e[n].tag,
                            o = e[n].feature;
                        r[a] = o;
                    }
                    this.features[t].tags = r;
                }),
                (ra.prototype.getScriptFeatures = function (e) {
                    var t = this.features[e];
                    if (this.features.hasOwnProperty(e)) return t;
                    var r = this.getScriptFeaturesIndexes(e);
                    if (!r) return null;
                    var n = this.font.tables.gsub;
                    return (
                        (t = r.map(function (e) {
                            return n.features[e];
                        })),
                        (this.features[e] = t),
                        this.mapTagsToFeatures(t, e),
                        t
                    );
                }),
                (ra.prototype.getSubstitutionType = function (e, t) {
                    return e.lookupType.toString() + t.substFormat.toString();
                }),
                (ra.prototype.getLookupMethod = function (e, t) {
                    var r = this;
                    switch (this.getSubstitutionType(e, t)) {
                        case "11":
                            return function (e) {
                                return ri.apply(r, [e, t]);
                            };
                        case "12":
                            return function (e) {
                                return ru.apply(r, [e, t]);
                            };
                        case "63":
                            return function (e) {
                                return rl.apply(r, [e, t]);
                            };
                        case "41":
                            return function (e) {
                                return rc.apply(r, [e, t]);
                            };
                        case "21":
                            return function (e) {
                                return rh.apply(r, [e, t]);
                            };
                        default:
                            throw Error("lookupType: " + e.lookupType + " - substFormat: " + t.substFormat + " is not yet supported");
                    }
                }),
                (ra.prototype.lookupFeature = function (e) {
                    var t = e.contextParams,
                        r = t.index,
                        n = this.getFeature({ tag: e.tag, script: e.script });
                    if (!n) return Error("font '" + this.font.names.fullName.en + "' doesn't support feature '" + e.tag + "' for script '" + e.script + "'.");
                    for (var a = this.getFeatureLookups(n), o = [].concat(t.context), s = 0; s < a.length; s++)
                        for (var i = a[s], u = this.getLookupSubtables(i), p = 0; p < u.length; p++) {
                            var l = u[p],
                                c = this.getSubstitutionType(i, l),
                                h = this.getLookupMethod(i, l),
                                f = void 0;
                            switch (c) {
                                case "11":
                                    (f = h(t.current)) && o.splice(r, 1, new ro({ id: 11, tag: e.tag, substitution: f }));
                                    break;
                                case "12":
                                    (f = h(t.current)) && o.splice(r, 1, new ro({ id: 12, tag: e.tag, substitution: f }));
                                    break;
                                case "63":
                                    Array.isArray((f = h(t))) && f.length && o.splice(r, 1, new ro({ id: 63, tag: e.tag, substitution: f }));
                                    break;
                                case "41":
                                    (f = h(t)) && o.splice(r, 1, new ro({ id: 41, tag: e.tag, substitution: f }));
                                    break;
                                case "21":
                                    (f = h(t.current)) && o.splice(r, 1, new ro({ id: 21, tag: e.tag, substitution: f }));
                            }
                            (t = new t4(o, r)), (!Array.isArray(f) || f.length) && (f = null);
                        }
                    return o.length ? o : null;
                }),
                (ra.prototype.supports = function (e) {
                    if (!e.script) return !1;
                    this.getScriptFeatures(e.script);
                    var t = this.features.hasOwnProperty(e.script);
                    if (!e.tag) return t;
                    var r = this.features[e.script].some(function (t) {
                        return t.tag === e.tag;
                    });
                    return t && r;
                }),
                (ra.prototype.getLookupSubtables = function (e) {
                    return e.subtables || null;
                }),
                (ra.prototype.getLookupByIndex = function (e) {
                    return this.font.tables.gsub.lookups[e] || null;
                }),
                (ra.prototype.getFeatureLookups = function (e) {
                    return e.lookupListIndexes.map(this.getLookupByIndex.bind(this));
                }),
                (ra.prototype.getFeature = function (e) {
                    if (!this.font) return { FAIL: "No font was found" };
                    this.features.hasOwnProperty(e.script) || this.getScriptFeatures(e.script);
                    var t = this.features[e.script];
                    return t ? (t.tags[e.tag] ? this.features[e.script].tags[e.tag] : null) : { FAIL: "No feature for script " + e.script };
                });
            var rf = {
                11: function (e, t, r) {
                    t[r].setState(e.tag, e.substitution);
                },
                12: function (e, t, r) {
                    t[r].setState(e.tag, e.substitution);
                },
                63: function (e, t, r) {
                    e.substitution.forEach(function (n, a) {
                        t[r + a].setState(e.tag, n);
                    });
                },
                41: function (e, t, r) {
                    var n = t[r];
                    n.setState(e.tag, e.substitution.ligGlyph);
                    for (var a = e.substitution.components.length, o = 0; o < a; o++) (n = t[r + o + 1]).setState("deleted", !0);
                },
            };
            function rd(e, t, r) {
                e instanceof ro && rf[e.id] && rf[e.id](e, t, r);
            }
            function rg(e) {
                var t = this,
                    r = "arab",
                    n = this.featuresTags[r],
                    a = this.tokenizer.getRangeTokens(e);
                if (1 !== a.length) {
                    var o = new t4(
                        a.map(function (e) {
                            return e.getState("glyphIndex");
                        }),
                        0
                    ),
                        s = new t4(
                            a.map(function (e) {
                                return e.char;
                            }),
                            0
                        );
                    a.forEach(function (e, i) {
                        if (!rr(e.char)) {
                            o.setCurrentIndex(i), s.setCurrentIndex(i);
                            var u,
                                p = 0;
                            switch (
                            ((function (e) {
                                for (var t = [].concat(e.backtrack), r = t.length - 1; r >= 0; r--) {
                                    var n = t[r],
                                        a = rt(n),
                                        o = rr(n);
                                    if (!a && !o) return !0;
                                    if (a) break;
                                }
                                return !1;
                            })(s) && (p |= 1),
                                (function (e) {
                                    if (rt(e.current)) return !1;
                                    for (var t = 0; t < e.lookahead.length; t++) if (!rr(e.lookahead[t])) return !0;
                                    return !1;
                                })(s) && (p |= 2),
                                p)
                            ) {
                                case 1:
                                    u = "fina";
                                    break;
                                case 2:
                                    u = "init";
                                    break;
                                case 3:
                                    u = "medi";
                            }
                            if (-1 !== n.indexOf(u)) {
                                var l = t.query.lookupFeature({ tag: u, script: r, contextParams: o });
                                if (l instanceof Error) return console.info(l.message);
                                l.forEach(function (e, t) {
                                    e instanceof ro && (rd(e, a, t), (o.context[t] = e.substitution));
                                });
                            }
                        }
                    });
                }
            }
            function rv(e, t) {
                return new t4(
                    e.map(function (e) {
                        return e.activeState.value;
                    }),
                    t || 0
                );
            }
            function rm(e) {
                var t = this,
                    r = this.tokenizer.getRangeTokens(e),
                    n = rv(r);
                n.context.forEach(function (e, a) {
                    n.setCurrentIndex(a);
                    var o = t.query.lookupFeature({ tag: "rlig", script: "arab", contextParams: n });
                    o.length &&
                        (o.forEach(function (e) {
                            return rd(e, r, a);
                        }),
                            (n = rv(r)));
                });
            }
            function ry(e, t) {
                return new t4(
                    e.map(function (e) {
                        return e.activeState.value;
                    }),
                    t || 0
                );
            }
            function rb(e) {
                var t = this,
                    r = this.tokenizer.getRangeTokens(e),
                    n = ry(r);
                n.context.forEach(function (e, a) {
                    n.setCurrentIndex(a);
                    var o = t.query.lookupFeature({ tag: "liga", script: "latn", contextParams: n });
                    o.length &&
                        (o.forEach(function (e) {
                            return rd(e, r, a);
                        }),
                            (n = ry(r)));
                });
            }
            function rx(e) {
                (this.baseDir = e || "ltr"), (this.tokenizer = new t9()), (this.featuresTags = {});
            }
            function rS(e) {
                var t = this.contextChecks[e + "Check"];
                return this.tokenizer.registerContextChecker(e, t.startCheck, t.endCheck);
            }
            function rT() {
                return rS.call(this, "latinWord"), rS.call(this, "arabicWord"), rS.call(this, "arabicSentence"), this.tokenizer.tokenize(this.text);
            }
            function rk() {
                var e = this;
                this.tokenizer.getContextRanges("arabicSentence").forEach(function (t) {
                    var r = e.tokenizer.getRangeTokens(t);
                    e.tokenizer.replaceRange(t.startIndex, t.endOffset, r.reverse());
                });
            }
            function rU() {
                if (-1 === this.tokenizer.registeredModifiers.indexOf("glyphIndex")) throw Error("glyphIndex modifier is required to apply arabic presentation features.");
            }
            function rO() {
                var e = this;
                this.featuresTags.hasOwnProperty("arab") &&
                    (rU.call(this),
                        this.tokenizer.getContextRanges("arabicWord").forEach(function (t) {
                            rg.call(e, t);
                        }));
            }
            function rE() {
                var e = this,
                    t = "arab";
                this.featuresTags.hasOwnProperty(t) &&
                    -1 !== this.featuresTags[t].indexOf("rlig") &&
                    (rU.call(this),
                        this.tokenizer.getContextRanges("arabicWord").forEach(function (t) {
                            rm.call(e, t);
                        }));
            }
            function rR() {
                var e = this,
                    t = "latn";
                this.featuresTags.hasOwnProperty(t) &&
                    -1 !== this.featuresTags[t].indexOf("liga") &&
                    (rU.call(this),
                        this.tokenizer.getContextRanges("latinWord").forEach(function (t) {
                            rb.call(e, t);
                        }));
            }
            function rC(e) {
                ((e = e || {}).tables = e.tables || {}),
                    e.empty ||
                    (tl(e.familyName, "When creating a new Font object, familyName is required."),
                        tl(e.styleName, "When creating a new Font object, styleName is required."),
                        tl(e.unitsPerEm, "When creating a new Font object, unitsPerEm is required."),
                        tl(e.ascender, "When creating a new Font object, ascender is required."),
                        tl(e.descender <= 0, "When creating a new Font object, negative descender value is required."),
                        (this.names = {
                            fontFamily: { en: e.familyName || " " },
                            fontSubfamily: { en: e.styleName || " " },
                            fullName: { en: e.fullName || e.familyName + " " + e.styleName },
                            postScriptName: { en: e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, "") },
                            designer: { en: e.designer || " " },
                            designerURL: { en: e.designerURL || " " },
                            manufacturer: { en: e.manufacturer || " " },
                            manufacturerURL: { en: e.manufacturerURL || " " },
                            license: { en: e.license || " " },
                            licenseURL: { en: e.licenseURL || " " },
                            version: { en: e.version || "Version 0.1" },
                            description: { en: e.description || " " },
                            copyright: { en: e.copyright || " " },
                            trademark: { en: e.trademark || " " },
                        }),
                        (this.unitsPerEm = e.unitsPerEm || 1e3),
                        (this.ascender = e.ascender),
                        (this.descender = e.descender),
                        (this.createdTimestamp = e.createdTimestamp),
                        (this.tables = Object.assign(e.tables, {
                            os2: Object.assign(
                                { usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM, usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM, fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR },
                                e.tables.os2
                            ),
                        }))),
                    (this.supported = !0),
                    (this.glyphs = new eb.GlyphSet(this, e.glyphs || [])),
                    (this.encoding = new ec(this)),
                    (this.position = new ts(this)),
                    (this.substitution = new ti(this)),
                    (this.tables = this.tables || {}),
                    (this._push = null),
                    (this._hmtxTableData = {}),
                    Object.defineProperty(this, "hinting", {
                        get: function () {
                            return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? (this._hinting = new tm(this)) : void 0;
                        },
                    });
            }
            (rx.prototype.setText = function (e) {
                this.text = e;
            }),
                (rx.prototype.contextChecks = {
                    latinWordCheck: {
                        startCheck: function (e) {
                            var t = e.current,
                                r = e.get(-1);
                            return (null === r && rn(t)) || (!rn(r) && rn(t));
                        },
                        endCheck: function (e) {
                            var t = e.get(1);
                            return null === t || !rn(t);
                        },
                    },
                    arabicWordCheck: {
                        startCheck: function (e) {
                            var t = e.current,
                                r = e.get(-1);
                            return (null === r && re(t)) || (!re(r) && re(t));
                        },
                        endCheck: function (e) {
                            var t = e.get(1);
                            return null === t || !re(t);
                        },
                    },
                    arabicSentenceCheck: {
                        startCheck: function (e) {
                            var t = e.current,
                                r = e.get(-1);
                            return (re(t) || rr(t)) && !re(r);
                        },
                        endCheck: function (e) {
                            var t = e.get(1);
                            switch (!0) {
                                case null === t:
                                    return !0;
                                case !re(t) && !rr(t):
                                    var r = /\s/.test(t);
                                    if (
                                        !r ||
                                        (r &&
                                            !e.lookahead.some(function (e) {
                                                return re(e) || rr(e);
                                            }))
                                    )
                                        return !0;
                                    break;
                                default:
                                    return !1;
                            }
                        },
                    },
                }),
                (rx.prototype.registerFeatures = function (e, t) {
                    var r = this,
                        n = t.filter(function (t) {
                            return r.query.supports({ script: e, tag: t });
                        });
                    this.featuresTags.hasOwnProperty(e) ? (this.featuresTags[e] = this.featuresTags[e].concat(n)) : (this.featuresTags[e] = n);
                }),
                (rx.prototype.applyFeatures = function (e, t) {
                    if (!e) throw Error("No valid font was provided to apply features");
                    this.query || (this.query = new ra(e));
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        this.query.supports({ script: n.script }) && this.registerFeatures(n.script, n.tags);
                    }
                }),
                (rx.prototype.registerModifier = function (e, t, r) {
                    this.tokenizer.registerModifier(e, t, r);
                }),
                (rx.prototype.checkContextReady = function (e) {
                    return !!this.tokenizer.getContext(e);
                }),
                (rx.prototype.applyFeaturesToContexts = function () {
                    this.checkContextReady("arabicWord") && (rO.call(this), rE.call(this)), this.checkContextReady("latinWord") && rR.call(this), this.checkContextReady("arabicSentence") && rk.call(this);
                }),
                (rx.prototype.processText = function (e) {
                    (this.text && this.text === e) || (this.setText(e), rT.call(this), this.applyFeaturesToContexts());
                }),
                (rx.prototype.getBidiText = function (e) {
                    return this.processText(e), this.tokenizer.getText();
                }),
                (rx.prototype.getTextGlyphs = function (e) {
                    this.processText(e);
                    for (var t = [], r = 0; r < this.tokenizer.tokens.length; r++) {
                        var n = this.tokenizer.tokens[r];
                        if (!n.state.deleted) {
                            var a = n.activeState.value;
                            t.push(Array.isArray(a) ? a[0] : a);
                        }
                    }
                    return t;
                }),
                (rC.prototype.hasChar = function (e) {
                    return null !== this.encoding.charToGlyphIndex(e);
                }),
                (rC.prototype.charToGlyphIndex = function (e) {
                    return this.encoding.charToGlyphIndex(e);
                }),
                (rC.prototype.charToGlyph = function (e) {
                    var t = this.charToGlyphIndex(e),
                        r = this.glyphs.get(t);
                    return r || (r = this.glyphs.get(0)), r;
                }),
                (rC.prototype.updateFeatures = function (e) {
                    return this.defaultRenderOptions.features.map(function (t) {
                        return "latn" === t.script
                            ? {
                                script: "latn",
                                tags: t.tags.filter(function (t) {
                                    return e[t];
                                }),
                            }
                            : t;
                    });
                }),
                (rC.prototype.stringToGlyphs = function (e, t) {
                    var r = this,
                        n = new rx();
                    n.registerModifier("glyphIndex", null, function (e) {
                        return r.charToGlyphIndex(e.char);
                    });
                    var a = t ? this.updateFeatures(t.features) : this.defaultRenderOptions.features;
                    n.applyFeatures(this, a);
                    for (var o = n.getTextGlyphs(e), s = o.length, i = Array(s), u = this.glyphs.get(0), p = 0; p < s; p += 1) i[p] = this.glyphs.get(o[p]) || u;
                    return i;
                }),
                (rC.prototype.nameToGlyphIndex = function (e) {
                    return this.glyphNames.nameToGlyphIndex(e);
                }),
                (rC.prototype.nameToGlyph = function (e) {
                    var t = this.nameToGlyphIndex(e),
                        r = this.glyphs.get(t);
                    return r || (r = this.glyphs.get(0)), r;
                }),
                (rC.prototype.glyphIndexToName = function (e) {
                    return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e) : "";
                }),
                (rC.prototype.getKerningValue = function (e, t) {
                    (e = e.index || e), (t = t.index || t);
                    var r = this.position.defaultKerningTables;
                    return r ? this.position.getKerningValue(r, e, t) : this.kerningPairs[e + "," + t] || 0;
                }),
                (rC.prototype.defaultRenderOptions = {
                    kerning: !0,
                    features: [
                        { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
                        { script: "latn", tags: ["liga", "rlig"] },
                    ],
                }),
                (rC.prototype.forEachGlyph = function (e, t, r, n, a, o) {
                    (t = void 0 !== t ? t : 0), (r = void 0 !== r ? r : 0), (n = void 0 !== n ? n : 72), (a = Object.assign({}, this.defaultRenderOptions, a));
                    var s,
                        i = (1 / this.unitsPerEm) * n,
                        u = this.stringToGlyphs(e, a);
                    if (a.kerning) {
                        var p = a.script || this.position.getDefaultScriptName();
                        s = this.position.getKerningTables(p, a.language);
                    }
                    for (var l = 0; l < u.length; l += 1) {
                        var c = u[l];
                        o.call(this, c, t, r, n, a),
                            c.advanceWidth && (t += c.advanceWidth * i),
                            a.kerning && l < u.length - 1 && (t += (s ? this.position.getKerningValue(s, c.index, u[l + 1].index) : this.getKerningValue(c, u[l + 1])) * i),
                            a.letterSpacing ? (t += a.letterSpacing * n) : a.tracking && (t += (a.tracking / 1e3) * n);
                    }
                    return t;
                }),
                (rC.prototype.getPath = function (e, t, r, n, a) {
                    var o = new w();
                    return (
                        this.forEachGlyph(e, t, r, n, a, function (e, t, r, n) {
                            var s = e.getPath(t, r, n, a, this);
                            o.extend(s);
                        }),
                        o
                    );
                }),
                (rC.prototype.getPaths = function (e, t, r, n, a) {
                    var o = [];
                    return (
                        this.forEachGlyph(e, t, r, n, a, function (e, t, r, n) {
                            var s = e.getPath(t, r, n, a, this);
                            o.push(s);
                        }),
                        o
                    );
                }),
                (rC.prototype.getAdvanceWidth = function (e, t, r) {
                    return this.forEachGlyph(e, 0, 0, t, r, function () { });
                }),
                (rC.prototype.draw = function (e, t, r, n, a, o) {
                    this.getPath(t, r, n, a, o).draw(e);
                }),
                (rC.prototype.drawPoints = function (e, t, r, n, a, o) {
                    this.forEachGlyph(t, r, n, a, o, function (t, r, n, a) {
                        t.drawPoints(e, r, n, a);
                    });
                }),
                (rC.prototype.drawMetrics = function (e, t, r, n, a, o) {
                    this.forEachGlyph(t, r, n, a, o, function (t, r, n, a) {
                        t.drawMetrics(e, r, n, a);
                    });
                }),
                (rC.prototype.getEnglishName = function (e) {
                    var t = this.names[e];
                    if (t) return t.en;
                }),
                (rC.prototype.validate = function () {
                    var e = this;
                    function t(t) {
                        var r = e.getEnglishName(t);
                        r && r.trim().length;
                    }
                    t("fontFamily"), t("weightName"), t("manufacturer"), t("copyright"), t("version"), this.unitsPerEm;
                }),
                (rC.prototype.toTables = function () {
                    return tt(this);
                }),
                (rC.prototype.toBuffer = function () {
                    return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
                }),
                (rC.prototype.toArrayBuffer = function () {
                    for (var e = this.toTables().encode(), t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; n++) r[n] = e[n];
                    return t;
                }),
                (rC.prototype.download = function (e) {
                    var t = this.getEnglishName("fontFamily"),
                        n = this.getEnglishName("fontSubfamily");
                    e = e || t.replace(/\s/g, "") + "-" + n + ".otf";
                    var a = this.toArrayBuffer();
                    if ("undefined" != typeof window) {
                        if (((window.URL = window.URL || window.webkitURL), window.URL)) {
                            var o = new Blob([new DataView(a)], { type: "font/opentype" }),
                                s = document.createElement("a");
                            (s.href = window.URL.createObjectURL(o)), (s.download = e);
                            var i = document.createEvent("MouseEvents");
                            i.initEvent("click", !0, !1), s.dispatchEvent(i);
                        } else console.warn("Font file could not be downloaded. Try using a different browser.");
                    } else {
                        var u = r(46102),
                            p = (function (e) {
                                for (var t = new l(e.byteLength), r = new Uint8Array(e), n = 0; n < t.length; ++n) t[n] = r[n];
                                return t;
                            })(a);
                        u.writeFileSync(e, p);
                    }
                }),
                (rC.prototype.fsSelectionValues = { ITALIC: 1, UNDERSCORE: 2, NEGATIVE: 4, OUTLINED: 8, STRIKEOUT: 16, BOLD: 32, REGULAR: 64, USER_TYPO_METRICS: 128, WWS: 256, OBLIQUE: 512 }),
                (rC.prototype.usWidthClasses = { ULTRA_CONDENSED: 1, EXTRA_CONDENSED: 2, CONDENSED: 3, SEMI_CONDENSED: 4, MEDIUM: 5, SEMI_EXPANDED: 6, EXPANDED: 7, EXTRA_EXPANDED: 8, ULTRA_EXPANDED: 9 }),
                (rC.prototype.usWeightClasses = { THIN: 100, EXTRA_LIGHT: 200, LIGHT: 300, NORMAL: 400, MEDIUM: 500, SEMI_BOLD: 600, BOLD: 700, EXTRA_BOLD: 800, BLACK: 900 });
            var rL = {
                parse: function (e, t, r) {
                    var n = new eo.Parser(e, t),
                        a = n.parseULong();
                    M.argument(65536 === a, "Unsupported fvar table version.");
                    var o = n.parseOffset16();
                    n.skip("uShort", 1);
                    for (var s = n.parseUShort(), i = n.parseUShort(), u = n.parseUShort(), p = n.parseUShort(), l = [], c = 0; c < s; c++)
                        l.push(
                            (function (e, t, r) {
                                var n = {},
                                    a = new eo.Parser(e, t);
                                return (n.tag = a.parseTag()), (n.minValue = a.parseFixed()), (n.defaultValue = a.parseFixed()), (n.maxValue = a.parseFixed()), a.skip("uShort", 1), (n.name = r[a.parseUShort()] || {}), n;
                            })(e, t + o + c * i, r)
                        );
                    for (var h = [], f = t + o + s * i, d = 0; d < u; d++)
                        h.push(
                            (function (e, t, r, n) {
                                var a = {},
                                    o = new eo.Parser(e, t);
                                (a.name = n[o.parseUShort()] || {}), o.skip("uShort", 1), (a.coordinates = {});
                                for (var s = 0; s < r.length; ++s) a.coordinates[r[s].tag] = o.parseFixed();
                                return a;
                            })(e, f + d * p, l, r)
                        );
                    return { axes: l, instances: h };
                },
            },
                rD = function () {
                    return { coverage: this.parsePointer(en.coverage), attachPoints: this.parseList(en.pointer(en.uShortList)) };
                },
                rw = function () {
                    var e = this.parseUShort();
                    return (M.argument(1 === e || 2 === e || 3 === e, "Unsupported CaretValue table version."), 1 === e)
                        ? { coordinate: this.parseShort() }
                        : 2 === e
                            ? { pointindex: this.parseShort() }
                            : 3 === e
                                ? { coordinate: this.parseShort() }
                                : void 0;
                },
                rI = function () {
                    return this.parseList(en.pointer(rw));
                },
                rM = function () {
                    return { coverage: this.parsePointer(en.coverage), ligGlyphs: this.parseList(en.pointer(rI)) };
                },
                rG = function () {
                    return this.parseUShort(), this.parseList(en.pointer(en.coverage));
                },
                rB = {
                    parse: function (e, t) {
                        var r = new en(e, (t = t || 0)),
                            n = r.parseVersion(1);
                        M.argument(1 === n || 1.2 === n || 1.3 === n, "Unsupported GDEF table version.");
                        var a = { version: n, classDef: r.parsePointer(en.classDef), attachList: r.parsePointer(rD), ligCaretList: r.parsePointer(rM), markAttachClassDef: r.parsePointer(en.classDef) };
                        return n >= 1.2 && (a.markGlyphSets = r.parsePointer(rG)), a;
                    },
                },
                rF = Array(10);
            (rF[1] = function () {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                return 1 === t
                    ? { posFormat: 1, coverage: this.parsePointer(en.coverage), value: this.parseValueRecord() }
                    : 2 === t
                        ? { posFormat: 2, coverage: this.parsePointer(en.coverage), values: this.parseValueRecordList() }
                        : void M.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
            }),
                (rF[2] = function () {
                    var e = this.offset + this.relativeOffset,
                        t = this.parseUShort();
                    M.assert(1 === t || 2 === t, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
                    var r = this.parsePointer(en.coverage),
                        n = this.parseUShort(),
                        a = this.parseUShort();
                    if (1 === t)
                        return {
                            posFormat: t,
                            coverage: r,
                            valueFormat1: n,
                            valueFormat2: a,
                            pairSets: this.parseList(
                                en.pointer(
                                    en.list(function () {
                                        return { secondGlyph: this.parseUShort(), value1: this.parseValueRecord(n), value2: this.parseValueRecord(a) };
                                    })
                                )
                            ),
                        };
                    if (2 === t) {
                        var o = this.parsePointer(en.classDef),
                            s = this.parsePointer(en.classDef),
                            i = this.parseUShort(),
                            u = this.parseUShort();
                        return {
                            posFormat: t,
                            coverage: r,
                            valueFormat1: n,
                            valueFormat2: a,
                            classDef1: o,
                            classDef2: s,
                            class1Count: i,
                            class2Count: u,
                            classRecords: this.parseList(
                                i,
                                en.list(u, function () {
                                    return { value1: this.parseValueRecord(n), value2: this.parseValueRecord(a) };
                                })
                            ),
                        };
                    }
                }),
                (rF[3] = function () {
                    return { error: "GPOS Lookup 3 not supported" };
                }),
                (rF[4] = function () {
                    return { error: "GPOS Lookup 4 not supported" };
                }),
                (rF[5] = function () {
                    return { error: "GPOS Lookup 5 not supported" };
                }),
                (rF[6] = function () {
                    return { error: "GPOS Lookup 6 not supported" };
                }),
                (rF[7] = function () {
                    return { error: "GPOS Lookup 7 not supported" };
                }),
                (rF[8] = function () {
                    return { error: "GPOS Lookup 8 not supported" };
                }),
                (rF[9] = function () {
                    return { error: "GPOS Lookup 9 not supported" };
                });
            var rA = {
                parse: function (e, t) {
                    var r = new en(e, (t = t || 0)),
                        n = r.parseVersion(1);
                    return (M.argument(1 === n || 1.1 === n, "Unsupported GPOS table version " + n), 1 === n)
                        ? { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(rF) }
                        : { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(rF), variations: r.parseFeatureVariationsList() };
                },
            },
                rP = {
                    parse: function (e, t) {
                        var r = new eo.Parser(e, t),
                            n = r.parseUShort();
                        if (0 === n)
                            return (function (e) {
                                var t = {};
                                e.skip("uShort");
                                var r = e.parseUShort();
                                M.argument(0 === r, "Unsupported kern sub-table version."), e.skip("uShort", 2);
                                var n = e.parseUShort();
                                e.skip("uShort", 3);
                                for (var a = 0; a < n; a += 1) {
                                    var o = e.parseUShort(),
                                        s = e.parseUShort(),
                                        i = e.parseShort();
                                    t[o + "," + s] = i;
                                }
                                return t;
                            })(r);
                        if (1 === n)
                            return (function (e) {
                                var t = {};
                                e.skip("uShort"), e.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
                                var r = e.parseUShort();
                                if ((e.skip("uShort"), 0 == (255 & r))) {
                                    var n = e.parseUShort();
                                    e.skip("uShort", 3);
                                    for (var a = 0; a < n; a += 1) {
                                        var o = e.parseUShort(),
                                            s = e.parseUShort(),
                                            i = e.parseShort();
                                        t[o + "," + s] = i;
                                    }
                                }
                                return t;
                            })(r);
                        throw Error("Unsupported kern table version (" + n + ").");
                    },
                },
                rN = {
                    parse: function (e, t, r, n) {
                        for (var a = new eo.Parser(e, t), o = n ? a.parseUShort : a.parseULong, s = [], i = 0; i < r + 1; i += 1) {
                            var u = o.call(a);
                            n && (u *= 2), s.push(u);
                        }
                        return s;
                    },
                };
            function rH(e, t) {
                r(46102).readFile(e, function (e, r) {
                    if (e) return t(e.message);
                    t(null, tp(r));
                });
            }
            function rz(e, t) {
                var r = new XMLHttpRequest();
                r.open("get", e, !0),
                    (r.responseType = "arraybuffer"),
                    (r.onload = function () {
                        return r.response ? t(null, r.response) : t("Font could not be loaded: " + r.statusText);
                    }),
                    (r.onerror = function () {
                        t("Font could not be loaded");
                    }),
                    r.send();
            }
            function rW(e, t) {
                for (var r = [], n = 12, a = 0; a < t; a += 1) {
                    var o = eo.getTag(e, n),
                        s = eo.getULong(e, n + 4),
                        i = eo.getULong(e, n + 8),
                        u = eo.getULong(e, n + 12);
                    r.push({ tag: o, checksum: s, offset: i, length: u, compression: !1 }), (n += 16);
                }
                return r;
            }
            function rq(e, t) {
                if ("WOFF" !== t.compression) return { data: e, offset: t.offset };
                var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
                    n = new Uint8Array(t.length);
                if ((C(r, n), n.byteLength !== t.length)) throw Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
                return { data: new DataView(n.buffer, 0), offset: 0 };
            }
            function r_(e, t) {
                t = null == t ? {} : t;
                var r,
                    n,
                    a,
                    o,
                    s,
                    i,
                    u,
                    p,
                    l,
                    c,
                    h,
                    f,
                    d,
                    g,
                    v,
                    m = new rC({ empty: !0 }),
                    y = new DataView(e, 0),
                    b = [],
                    x = eo.getTag(y, 0);
                if (x === String.fromCharCode(0, 1, 0, 0) || "true" === x || "typ1" === x) (m.outlinesFormat = "truetype"), (a = eo.getUShort(y, 4)), (b = rW(y, a));
                else if ("OTTO" === x) (m.outlinesFormat = "cff"), (a = eo.getUShort(y, 4)), (b = rW(y, a));
                else if ("wOFF" === x) {
                    var S = eo.getTag(y, 4);
                    if (S === String.fromCharCode(0, 1, 0, 0)) m.outlinesFormat = "truetype";
                    else if ("OTTO" === S) m.outlinesFormat = "cff";
                    else throw Error("Unsupported OpenType flavor " + x);
                    (a = eo.getUShort(y, 12)),
                        (b = (function (e, t) {
                            for (var r = [], n = 44, a = 0; a < t; a += 1) {
                                var o = eo.getTag(e, n),
                                    s = eo.getULong(e, n + 4),
                                    i = eo.getULong(e, n + 8),
                                    u = eo.getULong(e, n + 12),
                                    p = void 0;
                                (p = i < u && "WOFF"), r.push({ tag: o, offset: s, compression: p, compressedLength: i, length: u }), (n += 20);
                            }
                            return r;
                        })(y, a));
                } else throw Error("Unsupported OpenType signature " + x);
                for (var T = 0; T < a; T += 1) {
                    var k = b[T],
                        U = void 0;
                    switch (k.tag) {
                        case "cmap":
                            (U = rq(y, k)), (m.tables.cmap = es.parse(U.data, U.offset)), (m.encoding = new eh(m.tables.cmap));
                            break;
                        case "cvt ":
                            (U = rq(y, k)), (v = new eo.Parser(U.data, U.offset)), (m.tables.cvt = v.parseShortList(k.length / 2));
                            break;
                        case "fvar":
                            s = k;
                            break;
                        case "fpgm":
                            (U = rq(y, k)), (v = new eo.Parser(U.data, U.offset)), (m.tables.fpgm = v.parseByteList(k.length));
                            break;
                        case "head":
                            (U = rq(y, k)), (m.tables.head = eG.parse(U.data, U.offset)), (m.unitsPerEm = m.tables.head.unitsPerEm), (r = m.tables.head.indexToLocFormat);
                            break;
                        case "hhea":
                            (U = rq(y, k)), (m.tables.hhea = eB.parse(U.data, U.offset)), (m.ascender = m.tables.hhea.ascender), (m.descender = m.tables.hhea.descender), (m.numberOfHMetrics = m.tables.hhea.numberOfHMetrics);
                            break;
                        case "hmtx":
                            c = k;
                            break;
                        case "ltag":
                            (U = rq(y, k)), (n = eP.parse(U.data, U.offset));
                            break;
                        case "maxp":
                            (U = rq(y, k)), (m.tables.maxp = eN.parse(U.data, U.offset)), (m.numGlyphs = m.tables.maxp.numGlyphs);
                            break;
                        case "name":
                            d = k;
                            break;
                        case "OS/2":
                            (U = rq(y, k)), (m.tables.os2 = e0.parse(U.data, U.offset));
                            break;
                        case "post":
                            (U = rq(y, k)), (m.tables.post = e1.parse(U.data, U.offset)), (m.glyphNames = new ed(m.tables.post));
                            break;
                        case "prep":
                            (U = rq(y, k)), (v = new eo.Parser(U.data, U.offset)), (m.tables.prep = v.parseByteList(k.length));
                            break;
                        case "glyf":
                            i = k;
                            break;
                        case "loca":
                            f = k;
                            break;
                        case "CFF ":
                            o = k;
                            break;
                        case "kern":
                            h = k;
                            break;
                        case "GDEF":
                            u = k;
                            break;
                        case "GPOS":
                            p = k;
                            break;
                        case "GSUB":
                            l = k;
                            break;
                        case "meta":
                            g = k;
                    }
                }
                var O = rq(y, d);
                if (((m.tables.name = eK(O.data, O.offset, n)), (m.names = m.tables.name), i && f)) {
                    var E = 0 === r,
                        R = rq(y, f),
                        C = rN.parse(R.data, R.offset, m.numGlyphs, E),
                        L = rq(y, i);
                    m.glyphs = tv.parse(L.data, L.offset, C, m, t);
                } else if (o) {
                    var D = rq(y, o);
                    eM.parse(D.data, D.offset, m, t);
                } else throw Error("Font doesn't contain TrueType or CFF outlines.");
                var w = rq(y, c);
                if (
                    (eF(m, w.data, w.offset, m.numberOfHMetrics, m.numGlyphs, m.glyphs, t),
                        t.lowMemory
                            ? (function (e) {
                                e._IndexToUnicodeMap = {};
                                for (var t = e.tables.cmap.glyphIndexMap, r = Object.keys(t), n = 0; n < r.length; n += 1) {
                                    var a = r[n],
                                        o = t[a];
                                    void 0 === e._IndexToUnicodeMap[o] ? (e._IndexToUnicodeMap[o] = { unicodes: [parseInt(a)] }) : e._IndexToUnicodeMap[o].unicodes.push(parseInt(a));
                                }
                            })(m)
                            : (function (e) {
                                for (var t, r = e.tables.cmap.glyphIndexMap, n = Object.keys(r), a = 0; a < n.length; a += 1) {
                                    var o = n[a],
                                        s = r[o];
                                    (t = e.glyphs.get(s)).addUnicode(parseInt(o));
                                }
                                for (var i = 0; i < e.glyphs.length; i += 1)
                                    (t = e.glyphs.get(i)), e.cffEncoding ? (e.isCIDFont ? (t.name = "gid" + i) : (t.name = e.cffEncoding.charset[i])) : e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(i));
                            })(m),
                        h)
                ) {
                    var I = rq(y, h);
                    m.kerningPairs = rP.parse(I.data, I.offset);
                } else m.kerningPairs = {};
                if (u) {
                    var M = rq(y, u);
                    m.tables.gdef = rB.parse(M.data, M.offset);
                }
                if (p) {
                    var G = rq(y, p);
                    (m.tables.gpos = rA.parse(G.data, G.offset)), m.position.init();
                }
                if (l) {
                    var B = rq(y, l);
                    m.tables.gsub = e5.parse(B.data, B.offset);
                }
                if (s) {
                    var F = rq(y, s);
                    m.tables.fvar = rL.parse(F.data, F.offset, m.names);
                }
                if (g) {
                    var A = rq(y, g);
                    (m.tables.meta = e4.parse(A.data, A.offset)), (m.metas = m.tables.meta);
                }
                return m;
            }
            var rX = Object.freeze({
                __proto__: null,
                Font: rC,
                Glyph: ev,
                Path: w,
                BoundingBox: D,
                _parse: eo,
                parse: r_,
                load: function (e, t, r) {
                    r = null == r ? {} : r;
                    var n = "undefined" != typeof window || r.isUrl ? rz : rH;
                    return new Promise(function (a, o) {
                        n(e, function (e, n) {
                            var s;
                            if (e) {
                                if (t) return t(e);
                                o(e);
                            }
                            try {
                                s = r_(n, r);
                            } catch (e) {
                                if (t) return t(e, null);
                                o(e);
                            }
                            if (t) return t(null, s);
                            a(s);
                        });
                    });
                },
                loadSync: function (e, t) {
                    return r_(tp(r(46102).readFileSync(e)), t);
                },
            });
            t.default = rX;
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3257],{44422:function(e,t,r){var n,a,o,s,i,u,p,l=r(48764).Buffer;function c(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function h(e,t){this.source=e,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=t,this.destLen=0,this.ltree=new c,this.dtree=new c}String.prototype.codePointAt||(n=function(){try{var e={},t=Object.defineProperty,r=t(e,e,e)&&t}catch(e){}return r}(),a=function(e){if(this==null)throw TypeError();var t,r=String(this),n=r.length,a=e?Number(e):0;if(a!=a&&(a=0),!(a<0)&&!(a>=n)){var o=r.charCodeAt(a);return o>=55296&&o<=56319&&n>a+1&&(t=r.charCodeAt(a+1))>=56320&&t<=57343?(o-55296)*1024+t-56320+65536:o}},n?n(String.prototype,"codePointAt",{value:a,configurable:!0,writable:!0}):String.prototype.codePointAt=a);var f=new c,d=new c,g=new Uint8Array(30),v=new Uint16Array(30),m=new Uint8Array(30),y=new Uint16Array(30),b=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x=new c,S=new Uint8Array(320);function T(e,t,r,n){var a,o;for(a=0;a<r;++a)e[a]=0;for(a=0;a<30-r;++a)e[a+r]=a/r|0;for(o=n,a=0;a<30;++a)t[a]=o,o+=1<<e[a]}var k=new Uint16Array(16);function U(e,t,r,n){var a,o;for(a=0;a<16;++a)e.table[a]=0;for(a=0;a<n;++a)e.table[t[r+a]]++;for(o=0,e.table[0]=0,a=0;a<16;++a)k[a]=o,o+=e.table[a];for(a=0;a<n;++a)t[r+a]&&(e.trans[k[t[r+a]]++]=a)}function O(e,t,r){if(!t)return r;for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var n=e.tag&65535>>>16-t;return e.tag>>>=t,e.bitcount-=t,n+r}function E(e,t){for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var r=0,n=0,a=0,o=e.tag;do n=2*n+(1&o),o>>>=1,++a,r+=t.table[a],n-=t.table[a];while(n>=0);return e.tag=o,e.bitcount-=a,t.trans[r+n]}function R(e,t,r){for(;;){var n,a,o,s,i=E(e,t);if(256===i)return 0;if(i<256)e.dest[e.destLen++]=i;else for(i-=257,n=O(e,g[i],v[i]),a=E(e,r),s=o=e.destLen-O(e,m[a],y[a]);s<o+n;++s)e.dest[e.destLen++]=e.dest[s]}}!function(e,t){var r;for(r=0;r<7;++r)e.table[r]=0;for(r=0,e.table[7]=24,e.table[8]=152,e.table[9]=112;r<24;++r)e.trans[r]=256+r;for(r=0;r<144;++r)e.trans[24+r]=r;for(r=0;r<8;++r)e.trans[168+r]=280+r;for(r=0;r<112;++r)e.trans[176+r]=144+r;for(r=0;r<5;++r)t.table[r]=0;for(r=0,t.table[5]=32;r<32;++r)t.trans[r]=r}(f,d),T(g,v,4,3),T(m,y,2,1),g[28]=0,v[28]=258;var C=function(e,t){var r,n,a=new h(e,t);do{switch(r=function(e){e.bitcount--||(e.tag=e.source[e.sourceIndex++],e.bitcount=7);var t=1&e.tag;return e.tag>>>=1,t}(a),O(a,2,0)){case 0:n=function(e){for(var t,r;e.bitcount>8;)e.sourceIndex--,e.bitcount-=8;if((t=256*(t=e.source[e.sourceIndex+1])+e.source[e.sourceIndex])!==(65535&~(256*e.source[e.sourceIndex+3]+e.source[e.sourceIndex+2])))return -3;for(e.sourceIndex+=4,r=t;r;--r)e.dest[e.destLen++]=e.source[e.sourceIndex++];return e.bitcount=0,0}(a);break;case 1:n=R(a,f,d);break;case 2:!function(e,t,r){for(s=0,n=O(e,5,257),a=O(e,5,1),o=O(e,4,4);s<19;++s)S[s]=0;for(s=0;s<o;++s){var n,a,o,s,i,u,p=O(e,3,0);S[b[s]]=p}for(U(x,S,0,19),i=0;i<n+a;){var l=E(e,x);switch(l){case 16:var c=S[i-1];for(u=O(e,2,3);u;--u)S[i++]=c;break;case 17:for(u=O(e,3,3);u;--u)S[i++]=0;break;case 18:for(u=O(e,7,11);u;--u)S[i++]=0;break;default:S[i++]=l}}U(t,S,0,n),U(r,S,n,a)}(a,a.ltree,a.dtree),n=R(a,a.ltree,a.dtree);break;default:n=-3}if(0!==n)throw Error("Data error")}while(!r);return a.destLen<a.dest.length?"function"==typeof a.dest.slice?a.dest.slice(0,a.destLen):a.dest.subarray(0,a.destLen):a.dest};function L(e,t,r,n,a){return Math.pow(1-a,3)*e+3*Math.pow(1-a,2)*a*t+3*(1-a)*Math.pow(a,2)*r+Math.pow(a,3)*n}function D(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}function w(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}function I(e,t){e||function(e){throw Error(e)}(t)}D.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},D.prototype.addPoint=function(e,t){"number"==typeof e&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=e,this.x2=e),e<this.x1&&(this.x1=e),e>this.x2&&(this.x2=e)),"number"==typeof t&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=t,this.y2=t),t<this.y1&&(this.y1=t),t>this.y2&&(this.y2=t))},D.prototype.addX=function(e){this.addPoint(e,null)},D.prototype.addY=function(e){this.addPoint(null,e)},D.prototype.addBezier=function(e,t,r,n,a,o,s,i){var u=[e,t],p=[r,n],l=[a,o],c=[s,i];this.addPoint(e,t),this.addPoint(s,i);for(var h=0;h<=1;h++){var f=6*u[h]-12*p[h]+6*l[h],d=-3*u[h]+9*p[h]-9*l[h]+3*c[h],g=3*p[h]-3*u[h];if(0===d){if(0===f)continue;var v=-g/f;0<v&&v<1&&(0===h&&this.addX(L(u[h],p[h],l[h],c[h],v)),1===h&&this.addY(L(u[h],p[h],l[h],c[h],v)));continue}var m=Math.pow(f,2)-4*g*d;if(!(m<0)){var y=(-f+Math.sqrt(m))/(2*d);0<y&&y<1&&(0===h&&this.addX(L(u[h],p[h],l[h],c[h],y)),1===h&&this.addY(L(u[h],p[h],l[h],c[h],y)));var b=(-f-Math.sqrt(m))/(2*d);0<b&&b<1&&(0===h&&this.addX(L(u[h],p[h],l[h],c[h],b)),1===h&&this.addY(L(u[h],p[h],l[h],c[h],b)))}}},D.prototype.addQuad=function(e,t,r,n,a,o){var s=e+2/3*(r-e),i=t+2/3*(n-t);this.addBezier(e,t,s,i,s+1/3*(a-e),i+1/3*(o-t),a,o)},w.prototype.moveTo=function(e,t){this.commands.push({type:"M",x:e,y:t})},w.prototype.lineTo=function(e,t){this.commands.push({type:"L",x:e,y:t})},w.prototype.curveTo=w.prototype.bezierCurveTo=function(e,t,r,n,a,o){this.commands.push({type:"C",x1:e,y1:t,x2:r,y2:n,x:a,y:o})},w.prototype.quadTo=w.prototype.quadraticCurveTo=function(e,t,r,n){this.commands.push({type:"Q",x1:e,y1:t,x:r,y:n})},w.prototype.close=w.prototype.closePath=function(){this.commands.push({type:"Z"})},w.prototype.extend=function(e){if(e.commands)e=e.commands;else if(e instanceof D){var t=e;this.moveTo(t.x1,t.y1),this.lineTo(t.x2,t.y1),this.lineTo(t.x2,t.y2),this.lineTo(t.x1,t.y2),this.close();return}Array.prototype.push.apply(this.commands,e)},w.prototype.getBoundingBox=function(){for(var e=new D,t=0,r=0,n=0,a=0,o=0;o<this.commands.length;o++){var s=this.commands[o];switch(s.type){case"M":e.addPoint(s.x,s.y),t=n=s.x,r=a=s.y;break;case"L":e.addPoint(s.x,s.y),n=s.x,a=s.y;break;case"Q":e.addQuad(n,a,s.x1,s.y1,s.x,s.y),n=s.x,a=s.y;break;case"C":e.addBezier(n,a,s.x1,s.y1,s.x2,s.y2,s.x,s.y),n=s.x,a=s.y;break;case"Z":n=t,a=r;break;default:throw Error("Unexpected path command "+s.type)}}return e.isEmpty()&&e.addPoint(0,0),e},w.prototype.draw=function(e){e.beginPath();for(var t=0;t<this.commands.length;t+=1){var r=this.commands[t];"M"===r.type?e.moveTo(r.x,r.y):"L"===r.type?e.lineTo(r.x,r.y):"C"===r.type?e.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):"Q"===r.type?e.quadraticCurveTo(r.x1,r.y1,r.x,r.y):"Z"===r.type&&e.closePath()}this.fill&&(e.fillStyle=this.fill,e.fill()),this.stroke&&(e.strokeStyle=this.stroke,e.lineWidth=this.strokeWidth,e.stroke())},w.prototype.toPathData=function(e){function t(){for(var t=arguments,r="",n=0;n<arguments.length;n+=1){var a=t[n];a>=0&&n>0&&(r+=" "),r+=Math.round(a)===a?""+Math.round(a):a.toFixed(e)}return r}e=void 0!==e?e:2;for(var r="",n=0;n<this.commands.length;n+=1){var a=this.commands[n];"M"===a.type?r+="M"+t(a.x,a.y):"L"===a.type?r+="L"+t(a.x,a.y):"C"===a.type?r+="C"+t(a.x1,a.y1,a.x2,a.y2,a.x,a.y):"Q"===a.type?r+="Q"+t(a.x1,a.y1,a.x,a.y):"Z"===a.type&&(r+="Z")}return r},w.prototype.toSVG=function(e){var t='<path d="';return t+=this.toPathData(e)+'"',this.fill&&"black"!==this.fill&&(null===this.fill?t+=' fill="none"':t+=' fill="'+this.fill+'"'),this.stroke&&(t+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),t+="/>"},w.prototype.toDOMElement=function(e){var t=this.toPathData(e),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",t),r};var M={argument:I,assert:I},G={},B={},F={};function A(e){return function(){return e}}B.BYTE=function(e){return M.argument(e>=0&&e<=255,"Byte value should be between 0 and 255."),[e]},F.BYTE=A(1),B.CHAR=function(e){return[e.charCodeAt(0)]},F.CHAR=A(1),B.CHARARRAY=function(e){void 0===e&&(e="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var t=[],r=0;r<e.length;r+=1)t[r]=e.charCodeAt(r);return t},F.CHARARRAY=function(e){return void 0===e?0:e.length},B.USHORT=function(e){return[e>>8&255,255&e]},F.USHORT=A(2),B.SHORT=function(e){return e>=32768&&(e=-(65536-e)),[e>>8&255,255&e]},F.SHORT=A(2),B.UINT24=function(e){return[e>>16&255,e>>8&255,255&e]},F.UINT24=A(3),B.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]},F.ULONG=A(4),B.LONG=function(e){return e>=2147483648&&(e=-(4294967296-e)),[e>>24&255,e>>16&255,e>>8&255,255&e]},F.LONG=A(4),B.FIXED=B.ULONG,F.FIXED=F.ULONG,B.FWORD=B.SHORT,F.FWORD=F.SHORT,B.UFWORD=B.USHORT,F.UFWORD=F.USHORT,B.LONGDATETIME=function(e){return[0,0,0,0,e>>24&255,e>>16&255,e>>8&255,255&e]},F.LONGDATETIME=A(8),B.TAG=function(e){return M.argument(4===e.length,"Tag should be exactly 4 ASCII characters."),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]},F.TAG=A(4),B.Card8=B.BYTE,F.Card8=F.BYTE,B.Card16=B.USHORT,F.Card16=F.USHORT,B.OffSize=B.BYTE,F.OffSize=F.BYTE,B.SID=B.USHORT,F.SID=F.USHORT,B.NUMBER=function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?[((e-=108)>>8)+247,255&e]:e>=-1131&&e<=-108?[((e=-e-108)>>8)+251,255&e]:e>=-32768&&e<=32767?B.NUMBER16(e):B.NUMBER32(e)},F.NUMBER=function(e){return B.NUMBER(e).length},B.NUMBER16=function(e){return[28,e>>8&255,255&e]},F.NUMBER16=A(3),B.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,255&e]},F.NUMBER32=A(5),B.REAL=function(e){var t=e.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);if(r){var n=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));t=(Math.round(e*n)/n).toString()}for(var a="",o=0,s=t.length;o<s;o+=1){var i=t[o];"e"===i?a+="-"===t[++o]?"c":"b":"."===i?a+="a":"-"===i?a+="e":a+=i}a+=1&a.length?"f":"ff";for(var u=[30],p=0,l=a.length;p<l;p+=2)u.push(parseInt(a.substr(p,2),16));return u},F.REAL=function(e){return B.REAL(e).length},B.NAME=B.CHARARRAY,F.NAME=F.CHARARRAY,B.STRING=B.CHARARRAY,F.STRING=F.CHARARRAY,G.UTF8=function(e,t,r){for(var n=[],a=0;a<r;a++,t+=1)n[a]=e.getUint8(t);return String.fromCharCode.apply(null,n)},G.UTF16=function(e,t,r){for(var n=[],a=r/2,o=0;o<a;o++,t+=2)n[o]=e.getUint16(t);return String.fromCharCode.apply(null,n)},B.UTF16=function(e){for(var t=[],r=0;r<e.length;r+=1){var n=e.charCodeAt(r);t[t.length]=n>>8&255,t[t.length]=255&n}return t},F.UTF16=function(e){return 2*e.length};var P={"x-mac-croatian":"\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ…\xa0\xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊\xa9⁄€‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0Ґ\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5ґЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8Ḃ\xb1≤≥ḃĊċḊḋḞḟĠġṀ\xe6\xf8ṁṖṗɼƒſṠ\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’ṡẛ\xffŸṪ€‹›Ŷŷṫ\xb7Ỳỳ⁊\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4♣\xd2\xda\xdb\xd9ı\xdd\xfdŴŵẄẅẀẁẂẃ","x-mac-greek":"\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6€\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0\xb7Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb…\xa0ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xad","x-mac-icelandic":"\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xb0ᒡᒥᒦ•\xb6ᒧ\xae\xa9™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xa0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb…\xa0ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ",macintosh:"\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ","x-mac-romanian":"\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂȘ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăș\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›Țț‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ","x-mac-turkish":"\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ˆ˜\xaf˘˙˚\xb8˝˛ˇ"};G.MACSTRING=function(e,t,r,n){var a=P[n];if(void 0!==a){for(var o="",s=0;s<r;s++){var i=e.getUint8(t+s);i<=127?o+=String.fromCharCode(i):o+=a[127&i]}return o}};var N="function"==typeof WeakMap&&new WeakMap,H=function(e){if(!o)for(var t in o={},P)o[t]=new String(t);var r=o[e];if(void 0!==r){if(N){var n=N.get(r);if(void 0!==n)return n}var a=P[e];if(void 0!==a){for(var s={},i=0;i<a.length;i++)s[a.charCodeAt(i)]=i+128;return N&&N.set(r,s),s}}};function z(e){return e>=-128&&e<=127}B.MACSTRING=function(e,t){var r=H(t);if(void 0!==r){for(var n=[],a=0;a<e.length;a++){var o=e.charCodeAt(a);if(o>=128&&void 0===(o=r[o]))return;n[a]=o}return n}},F.MACSTRING=function(e,t){var r=B.MACSTRING(e,t);return void 0!==r?r.length:0},B.VARDELTAS=function(e){for(var t=0,r=[];t<e.length;){var n=e[t];t=0===n?function(e,t,r){for(var n=0,a=e.length;t<a&&n<64&&0===e[t];)++t,++n;return r.push(128|n-1),t}(e,t,r):n>=-128&&n<=127?function(e,t,r){for(var n=0,a=e.length,o=t;o<a&&n<64;){var s=e[o];if(!z(s)||0===s&&o+1<a&&0===e[o+1])break;++o,++n}r.push(n-1);for(var i=t;i<o;++i)r.push(e[i]+256&255);return o}(e,t,r):function(e,t,r){for(var n=0,a=e.length,o=t;o<a&&n<64;){var s=e[o];if(0===s||z(s)&&o+1<a&&z(e[o+1]))break;++o,++n}r.push(64|n-1);for(var i=t;i<o;++i){var u=e[i];r.push(u+65536>>8&255,u+256&255)}return o}(e,t,r)}return r},B.INDEX=function(e){for(var t=1,r=[1],n=[],a=0;a<e.length;a+=1){var o=B.OBJECT(e[a]);Array.prototype.push.apply(n,o),t+=o.length,r.push(t)}if(0===n.length)return[0,0];for(var s=[],i=1+Math.floor(Math.log(t)/Math.log(2))/8|0,u=[void 0,B.BYTE,B.USHORT,B.UINT24,B.ULONG][i],p=0;p<r.length;p+=1){var l=u(r[p]);Array.prototype.push.apply(s,l)}return Array.prototype.concat(B.Card16(e.length),B.OffSize(i),s,n)},F.INDEX=function(e){return B.INDEX(e).length},B.DICT=function(e){for(var t=[],r=Object.keys(e),n=r.length,a=0;a<n;a+=1){var o=parseInt(r[a],0),s=e[o];t=(t=t.concat(B.OPERAND(s.value,s.type))).concat(B.OPERATOR(o))}return t},F.DICT=function(e){return B.DICT(e).length},B.OPERATOR=function(e){return e<1200?[e]:[12,e-1200]},B.OPERAND=function(e,t){var r=[];if(Array.isArray(t))for(var n=0;n<t.length;n+=1)M.argument(e.length===t.length,"Not enough arguments given for type"+t),r=r.concat(B.OPERAND(e[n],t[n]));else if("SID"===t)r=r.concat(B.NUMBER(e));else if("offset"===t)r=r.concat(B.NUMBER32(e));else if("number"===t)r=r.concat(B.NUMBER(e));else if("real"===t)r=r.concat(B.REAL(e));else throw Error("Unknown operand type "+t);return r},B.OP=B.BYTE,F.OP=F.BYTE;var W="function"==typeof WeakMap&&new WeakMap;function q(e,t,r){if(t.length&&("coverageFormat"!==t[0].name||1===t[0].value))for(var n=0;n<t.length;n+=1){var a=t[n];this[a.name]=a.value}if(this.tableName=e,this.fields=t,r)for(var o=Object.keys(r),s=0;s<o.length;s+=1){var i=o[s],u=r[i];void 0!==this[i]&&(this[i]=u)}}function _(e,t,r){void 0===r&&(r=t.length);var n=Array(t.length+1);n[0]={name:e+"Count",type:"USHORT",value:r};for(var a=0;a<t.length;a++)n[a+1]={name:e+a,type:"USHORT",value:t[a]};return n}function X(e,t,r){var n=t.length,a=Array(n+1);a[0]={name:e+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a[o+1]={name:e+o,type:"TABLE",value:r(t[o],o)};return a}function V(e,t,r){var n=t.length,a=[];a[0]={name:e+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a=a.concat(r(t[o],o));return a}function Y(e){1===e.format?q.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(_("glyph",e.glyphs))):2===e.format?q.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(V("rangeRecord",e.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):M.assert(!1,"Coverage format must be 1 or 2.")}function j(e){q.call(this,"scriptListTable",V("scriptRecord",e,function(e,t){var r=e.script,n=r.defaultLangSys;return M.assert(!!n,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new q("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new q("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:n.reqFeatureIndex}].concat(_("featureIndex",n.featureIndexes)))}].concat(V("langSys",r.langSysRecords,function(e,t){var r=e.langSys;return[{name:"langSysTag"+t,type:"TAG",value:e.tag},{name:"langSys"+t,type:"TABLE",value:new q("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:r.reqFeatureIndex}].concat(_("featureIndex",r.featureIndexes)))}]})))}]}))}function Z(e){q.call(this,"featureListTable",V("featureRecord",e,function(e,t){var r=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new q("featureTable",[{name:"featureParams",type:"USHORT",value:r.featureParams}].concat(_("lookupListIndex",r.lookupListIndexes)))}]}))}function Q(e,t){q.call(this,"lookupListTable",X("lookup",e,function(e){var r=t[e.lookupType];return M.assert(!!r,"Unable to write GSUB lookup type "+e.lookupType+" tables."),new q("lookupTable",[{name:"lookupType",type:"USHORT",value:e.lookupType},{name:"lookupFlag",type:"USHORT",value:e.lookupFlag}].concat(X("subtable",e.subtables,r)))}))}B.CHARSTRING=function(e){if(W){var t=W.get(e);if(void 0!==t)return t}for(var r=[],n=e.length,a=0;a<n;a+=1){var o=e[a];r=r.concat(B[o.type](o.value))}return W&&W.set(e,r),r},F.CHARSTRING=function(e){return B.CHARSTRING(e).length},B.OBJECT=function(e){var t=B[e.type];return M.argument(void 0!==t,"No encoding function for type "+e.type),t(e.value)},F.OBJECT=function(e){var t=F[e.type];return M.argument(void 0!==t,"No sizeOf function for type "+e.type),t(e.value)},B.TABLE=function(e){for(var t=[],r=e.fields.length,n=[],a=[],o=0;o<r;o+=1){var s=e.fields[o],i=B[s.type];M.argument(void 0!==i,"No encoding function for field type "+s.type+" ("+s.name+")");var u=e[s.name];void 0===u&&(u=s.value);var p=i(u);"TABLE"===s.type?(a.push(t.length),t=t.concat([0,0]),n.push(p)):t=t.concat(p)}for(var l=0;l<n.length;l+=1){var c=a[l],h=t.length;M.argument(h<65536,"Table "+e.tableName+" too big."),t[c]=h>>8,t[c+1]=255&h,t=t.concat(n[l])}return t},F.TABLE=function(e){for(var t=0,r=e.fields.length,n=0;n<r;n+=1){var a=e.fields[n],o=F[a.type];M.argument(void 0!==o,"No sizeOf function for field type "+a.type+" ("+a.name+")");var s=e[a.name];void 0===s&&(s=a.value),t+=o(s),"TABLE"===a.type&&(t+=2)}return t},B.RECORD=B.TABLE,F.RECORD=F.TABLE,B.LITERAL=function(e){return e},F.LITERAL=function(e){return e.length},q.prototype.encode=function(){return B.TABLE(this)},q.prototype.sizeOf=function(){return F.TABLE(this)},Y.prototype=Object.create(q.prototype),Y.prototype.constructor=Y,j.prototype=Object.create(q.prototype),j.prototype.constructor=j,Z.prototype=Object.create(q.prototype),Z.prototype.constructor=Z,Q.prototype=Object.create(q.prototype),Q.prototype.constructor=Q;var K={Table:q,Record:q,Coverage:Y,ScriptList:j,FeatureList:Z,LookupList:Q,ushortList:_,tableList:X};function J(e,t){return e.getUint8(t)}function $(e,t){return e.getUint16(t,!1)}function ee(e,t){return e.getUint32(t,!1)}function et(e,t){return e.getInt16(t,!1)+e.getUint16(t+2,!1)/65535}var er={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function en(e,t){this.data=e,this.offset=t,this.relativeOffset=0}en.prototype.parseByte=function(){var e=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},en.prototype.parseChar=function(){var e=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},en.prototype.parseCard8=en.prototype.parseByte,en.prototype.parseUShort=function(){var e=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},en.prototype.parseCard16=en.prototype.parseUShort,en.prototype.parseSID=en.prototype.parseUShort,en.prototype.parseOffset16=en.prototype.parseUShort,en.prototype.parseShort=function(){var e=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},en.prototype.parseF2Dot14=function(){var e=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,e},en.prototype.parseULong=function(){var e=ee(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},en.prototype.parseOffset32=en.prototype.parseULong,en.prototype.parseFixed=function(){var e=et(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},en.prototype.parseString=function(e){var t=this.data,r=this.offset+this.relativeOffset,n="";this.relativeOffset+=e;for(var a=0;a<e;a++)n+=String.fromCharCode(t.getUint8(r+a));return n},en.prototype.parseTag=function(){return this.parseString(4)},en.prototype.parseLongDateTime=function(){var e=ee(this.data,this.offset+this.relativeOffset+4);return e-=2082844800,this.relativeOffset+=8,e},en.prototype.parseVersion=function(e){var t=$(this.data,this.offset+this.relativeOffset),r=$(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,void 0===e&&(e=4096),t+r/e/10},en.prototype.skip=function(e,t){void 0===t&&(t=1),this.relativeOffset+=er[e]*t},en.prototype.parseULongList=function(e){void 0===e&&(e=this.parseULong());for(var t=Array(e),r=this.data,n=this.offset+this.relativeOffset,a=0;a<e;a++)t[a]=r.getUint32(n),n+=4;return this.relativeOffset+=4*e,t},en.prototype.parseOffset16List=en.prototype.parseUShortList=function(e){void 0===e&&(e=this.parseUShort());for(var t=Array(e),r=this.data,n=this.offset+this.relativeOffset,a=0;a<e;a++)t[a]=r.getUint16(n),n+=2;return this.relativeOffset+=2*e,t},en.prototype.parseShortList=function(e){for(var t=Array(e),r=this.data,n=this.offset+this.relativeOffset,a=0;a<e;a++)t[a]=r.getInt16(n),n+=2;return this.relativeOffset+=2*e,t},en.prototype.parseByteList=function(e){for(var t=Array(e),r=this.data,n=this.offset+this.relativeOffset,a=0;a<e;a++)t[a]=r.getUint8(n++);return this.relativeOffset+=e,t},en.prototype.parseList=function(e,t){t||(t=e,e=this.parseUShort());for(var r=Array(e),n=0;n<e;n++)r[n]=t.call(this);return r},en.prototype.parseList32=function(e,t){t||(t=e,e=this.parseULong());for(var r=Array(e),n=0;n<e;n++)r[n]=t.call(this);return r},en.prototype.parseRecordList=function(e,t){t||(t=e,e=this.parseUShort());for(var r=Array(e),n=Object.keys(t),a=0;a<e;a++){for(var o={},s=0;s<n.length;s++){var i=n[s],u=t[i];o[i]=u.call(this)}r[a]=o}return r},en.prototype.parseRecordList32=function(e,t){t||(t=e,e=this.parseULong());for(var r=Array(e),n=Object.keys(t),a=0;a<e;a++){for(var o={},s=0;s<n.length;s++){var i=n[s],u=t[i];o[i]=u.call(this)}r[a]=o}return r},en.prototype.parseStruct=function(e){if("function"==typeof e)return e.call(this);for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var a=t[n],o=e[a];r[a]=o.call(this)}return r},en.prototype.parseValueRecord=function(e){if(void 0===e&&(e=this.parseUShort()),0!==e){var t={};return 1&e&&(t.xPlacement=this.parseShort()),2&e&&(t.yPlacement=this.parseShort()),4&e&&(t.xAdvance=this.parseShort()),8&e&&(t.yAdvance=this.parseShort()),16&e&&(t.xPlaDevice=void 0,this.parseShort()),32&e&&(t.yPlaDevice=void 0,this.parseShort()),64&e&&(t.xAdvDevice=void 0,this.parseShort()),128&e&&(t.yAdvDevice=void 0,this.parseShort()),t}},en.prototype.parseValueRecordList=function(){for(var e=this.parseUShort(),t=this.parseUShort(),r=Array(t),n=0;n<t;n++)r[n]=this.parseValueRecord(e);return r},en.prototype.parsePointer=function(e){var t=this.parseOffset16();if(t>0)return new en(this.data,this.offset+t).parseStruct(e)},en.prototype.parsePointer32=function(e){var t=this.parseOffset32();if(t>0)return new en(this.data,this.offset+t).parseStruct(e)},en.prototype.parseListOfLists=function(e){for(var t=this.parseOffset16List(),r=t.length,n=this.relativeOffset,a=Array(r),o=0;o<r;o++){var s=t[o];if(0===s){a[o]=void 0;continue}if(this.relativeOffset=s,e){for(var i=this.parseOffset16List(),u=Array(i.length),p=0;p<i.length;p++)this.relativeOffset=s+i[p],u[p]=e.call(this);a[o]=u}else a[o]=this.parseUShortList()}return this.relativeOffset=n,a},en.prototype.parseCoverage=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort(),r=this.parseUShort();if(1===t)return{format:1,glyphs:this.parseUShortList(r)};if(2===t){for(var n=Array(r),a=0;a<r;a++)n[a]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:n}}throw Error("0x"+e.toString(16)+": Coverage format must be 1 or 2.")},en.prototype.parseClassDef=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(1===t)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(2===t)return{format:2,ranges:this.parseRecordList({start:en.uShort,end:en.uShort,classId:en.uShort})};throw Error("0x"+e.toString(16)+": ClassDef format must be 1 or 2.")},en.list=function(e,t){return function(){return this.parseList(e,t)}},en.list32=function(e,t){return function(){return this.parseList32(e,t)}},en.recordList=function(e,t){return function(){return this.parseRecordList(e,t)}},en.recordList32=function(e,t){return function(){return this.parseRecordList32(e,t)}},en.pointer=function(e){return function(){return this.parsePointer(e)}},en.pointer32=function(e){return function(){return this.parsePointer32(e)}},en.tag=en.prototype.parseTag,en.byte=en.prototype.parseByte,en.uShort=en.offset16=en.prototype.parseUShort,en.uShortList=en.prototype.parseUShortList,en.uLong=en.offset32=en.prototype.parseULong,en.uLongList=en.prototype.parseULongList,en.struct=en.prototype.parseStruct,en.coverage=en.prototype.parseCoverage,en.classDef=en.prototype.parseClassDef;var ea={reserved:en.uShort,reqFeatureIndex:en.uShort,featureIndexes:en.uShortList};en.prototype.parseScriptList=function(){return this.parsePointer(en.recordList({tag:en.tag,script:en.pointer({defaultLangSys:en.pointer(ea),langSysRecords:en.recordList({tag:en.tag,langSys:en.pointer(ea)})})}))||[]},en.prototype.parseFeatureList=function(){return this.parsePointer(en.recordList({tag:en.tag,feature:en.pointer({featureParams:en.offset16,lookupListIndexes:en.uShortList})}))||[]},en.prototype.parseLookupList=function(e){return this.parsePointer(en.list(en.pointer(function(){var t=this.parseUShort();M.argument(1<=t&&t<=9,"GPOS/GSUB lookup type "+t+" unknown.");var r=this.parseUShort();return{lookupType:t,lookupFlag:r,subtables:this.parseList(en.pointer(e[t])),markFilteringSet:16&r?this.parseUShort():void 0}})))||[]},en.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var e=this.parseUShort(),t=this.parseUShort();return M.argument(1===e&&t<1,"GPOS/GSUB feature variations table unknown."),this.parseRecordList32({conditionSetOffset:en.offset32,featureTableSubstitutionOffset:en.offset32})})||[]};var eo={getByte:J,getCard8:J,getUShort:$,getCard16:$,getShort:function(e,t){return e.getInt16(t,!1)},getULong:ee,getFixed:et,getTag:function(e,t){for(var r="",n=t;n<t+4;n+=1)r+=String.fromCharCode(e.getInt8(n));return r},getOffset:function(e,t,r){for(var n=0,a=0;a<r;a+=1)n<<=8,n+=e.getUint8(t+a);return n},getBytes:function(e,t,r){for(var n=[],a=t;a<r;a+=1)n.push(e.getUint8(a));return n},bytesToString:function(e){for(var t="",r=0;r<e.length;r+=1)t+=String.fromCharCode(e[r]);return t},Parser:en},es={parse:function(e,t){var r={};r.version=eo.getUShort(e,t),M.argument(0===r.version,"cmap table version should be 0."),r.numTables=eo.getUShort(e,t+2);for(var n=-1,a=r.numTables-1;a>=0;a-=1){var o=eo.getUShort(e,t+4+8*a),s=eo.getUShort(e,t+4+8*a+2);if(3===o&&(0===s||1===s||10===s)||0===o&&(0===s||1===s||2===s||3===s||4===s)){n=eo.getULong(e,t+4+8*a+4);break}}if(-1===n)throw Error("No valid cmap sub-tables found.");var i=new eo.Parser(e,t+n);if(r.format=i.parseUShort(),12===r.format)!function(e,t){t.parseUShort(),e.length=t.parseULong(),e.language=t.parseULong(),e.groupCount=r=t.parseULong(),e.glyphIndexMap={};for(var r,n=0;n<r;n+=1)for(var a=t.parseULong(),o=t.parseULong(),s=t.parseULong(),i=a;i<=o;i+=1)e.glyphIndexMap[i]=s,s++}(r,i);else if(4===r.format)!function(e,t,r,n,a){e.length=t.parseUShort(),e.language=t.parseUShort(),e.segCount=o=t.parseUShort()>>1,t.skip("uShort",3),e.glyphIndexMap={};for(var o,s=new eo.Parser(r,n+a+14),i=new eo.Parser(r,n+a+16+2*o),u=new eo.Parser(r,n+a+16+4*o),p=new eo.Parser(r,n+a+16+6*o),l=n+a+16+8*o,c=0;c<o-1;c+=1)for(var h=void 0,f=s.parseUShort(),d=i.parseUShort(),g=u.parseShort(),v=p.parseUShort(),m=d;m<=f;m+=1)0!==v?(l=p.offset+p.relativeOffset-2+v+(m-d)*2,0!==(h=eo.getUShort(r,l))&&(h=h+g&65535)):h=m+g&65535,e.glyphIndexMap[m]=h}(r,i,e,t,n);else throw Error("Only format 4 and 12 cmap tables are supported (found format "+r.format+").");return r},make:function(e){var t,r=!0;for(t=e.length-1;t>0;t-=1)if(e.get(t).unicode>65535){console.log("Adding CMAP format 12 (needed!)"),r=!1;break}var n=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:r?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:r?12:20}];r||(n=n.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),n=n.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var a=new K.Table("cmap",n);for(t=0,a.segments=[];t<e.length;t+=1){for(var o=e.get(t),s=0;s<o.unicodes.length;s+=1)!function(e,t,r){e.segments.push({end:t,start:t,delta:-(t-r),offset:0,glyphIndex:r})}(a,o.unicodes[s],t);a.segments=a.segments.sort(function(e,t){return e.start-t.start})}!function(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}(a);var i=a.segments.length,u=0,p=[],l=[],c=[],h=[],f=[],d=[];for(t=0;t<i;t+=1){var g=a.segments[t];g.end<=65535&&g.start<=65535?(p=p.concat({name:"end_"+t,type:"USHORT",value:g.end}),l=l.concat({name:"start_"+t,type:"USHORT",value:g.start}),c=c.concat({name:"idDelta_"+t,type:"SHORT",value:g.delta}),h=h.concat({name:"idRangeOffset_"+t,type:"USHORT",value:g.offset}),void 0!==g.glyphId&&(f=f.concat({name:"glyph_"+t,type:"USHORT",value:g.glyphId}))):u+=1,r||void 0===g.glyphIndex||(d=(d=(d=d.concat({name:"cmap12Start_"+t,type:"ULONG",value:g.start})).concat({name:"cmap12End_"+t,type:"ULONG",value:g.end})).concat({name:"cmap12Glyph_"+t,type:"ULONG",value:g.glyphIndex}))}if(a.segCountX2=(i-u)*2,a.searchRange=2*Math.pow(2,Math.floor(Math.log(i-u)/Math.log(2))),a.entrySelector=Math.log(a.searchRange/2)/Math.log(2),a.rangeShift=a.segCountX2-a.searchRange,a.fields=a.fields.concat(p),a.fields.push({name:"reservedPad",type:"USHORT",value:0}),a.fields=a.fields.concat(l),a.fields=a.fields.concat(c),a.fields=a.fields.concat(h),a.fields=a.fields.concat(f),a.cmap4Length=14+2*p.length+2+2*l.length+2*c.length+2*h.length+2*f.length,!r){var v=16+4*d.length;a.cmap12Offset=20+a.cmap4Length,a.fields=a.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:v},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:d.length/3}]),a.fields=a.fields.concat(d)}return a}},ei=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],eu=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],ep=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],el=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function ec(e){this.font=e}function eh(e){this.cmap=e}function ef(e,t){this.encoding=e,this.charset=t}function ed(e){switch(e.version){case 1:this.names=el.slice();break;case 2:this.names=Array(e.numberOfGlyphs);for(var t=0;t<e.numberOfGlyphs;t++)e.glyphNameIndex[t]<el.length?this.names[t]=el[e.glyphNameIndex[t]]:this.names[t]=e.names[e.glyphNameIndex[t]-el.length];break;case 2.5:this.names=Array(e.numberOfGlyphs);for(var r=0;r<e.numberOfGlyphs;r++)this.names[r]=el[r+e.glyphNameIndex[r]];break;default:this.names=[]}}ec.prototype.charToGlyphIndex=function(e){var t=e.codePointAt(0),r=this.font.glyphs;if(r){for(var n=0;n<r.length;n+=1)for(var a=r.get(n),o=0;o<a.unicodes.length;o+=1)if(a.unicodes[o]===t)return n}return null},eh.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.codePointAt(0)]||0},ef.prototype.charToGlyphIndex=function(e){var t=e.codePointAt(0),r=this.encoding[t];return this.charset.indexOf(r)},ed.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)},ed.prototype.glyphIndexToName=function(e){return this.names[e]};var eg=function(e,t,r,n,a){e.beginPath(),e.moveTo(t,r),e.lineTo(n,a),e.stroke()};function ev(e){this.bindConstructorValues(e)}function em(e,t,r){Object.defineProperty(e,t,{get:function(){return e.path,e[r]},set:function(t){e[r]=t},enumerable:!0,configurable:!0})}function ey(e,t){if(this.font=e,this.glyphs={},Array.isArray(t))for(var r=0;r<t.length;r++){var n=t[r];n.path.unitsPerEm=e.unitsPerEm,this.glyphs[r]=n}this.length=t&&t.length||0}ev.prototype.bindConstructorValues=function(e){var t;this.index=e.index||0,this.name=e.name||null,this.unicode=e.unicode||void 0,this.unicodes=e.unicodes||void 0!==e.unicode?[e.unicode]:[],"xMin"in e&&(this.xMin=e.xMin),"yMin"in e&&(this.yMin=e.yMin),"xMax"in e&&(this.xMax=e.xMax),"yMax"in e&&(this.yMax=e.yMax),"advanceWidth"in e&&(this.advanceWidth=e.advanceWidth),Object.defineProperty(this,"path",(t=e.path||new w,{configurable:!0,get:function(){return"function"==typeof t&&(t=t()),t},set:function(e){t=e}}))},ev.prototype.addUnicode=function(e){0===this.unicodes.length&&(this.unicode=e),this.unicodes.push(e)},ev.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},ev.prototype.getPath=function(e,t,r,n,a){e=void 0!==e?e:0,t=void 0!==t?t:0,r=void 0!==r?r:72,n||(n={});var o,s,i=n.xScale,u=n.yScale;if(n.hinting&&a&&a.hinting&&(s=this.path&&a.hinting.exec(this,r)),s)o=a.hinting.getCommands(s),e=Math.round(e),t=Math.round(t),i=u=1;else{o=this.path.commands;var p=1/(this.path.unitsPerEm||1e3)*r;void 0===i&&(i=p),void 0===u&&(u=p)}for(var l=new w,c=0;c<o.length;c+=1){var h=o[c];"M"===h.type?l.moveTo(e+h.x*i,t+-h.y*u):"L"===h.type?l.lineTo(e+h.x*i,t+-h.y*u):"Q"===h.type?l.quadraticCurveTo(e+h.x1*i,t+-h.y1*u,e+h.x*i,t+-h.y*u):"C"===h.type?l.curveTo(e+h.x1*i,t+-h.y1*u,e+h.x2*i,t+-h.y2*u,e+h.x*i,t+-h.y*u):"Z"===h.type&&l.closePath()}return l},ev.prototype.getContours=function(){if(void 0===this.points)return[];for(var e=[],t=[],r=0;r<this.points.length;r+=1){var n=this.points[r];t.push(n),n.lastPointOfContour&&(e.push(t),t=[])}return M.argument(0===t.length,"There are still points left in the current contour."),e},ev.prototype.getMetrics=function(){for(var e=this.path.commands,t=[],r=[],n=0;n<e.length;n+=1){var a=e[n];"Z"!==a.type&&(t.push(a.x),r.push(a.y)),("Q"===a.type||"C"===a.type)&&(t.push(a.x1),r.push(a.y1)),"C"===a.type&&(t.push(a.x2),r.push(a.y2))}var o={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,t),yMax:Math.max.apply(null,r),leftSideBearing:this.leftSideBearing};return isFinite(o.xMin)||(o.xMin=0),isFinite(o.xMax)||(o.xMax=this.advanceWidth),isFinite(o.yMin)||(o.yMin=0),isFinite(o.yMax)||(o.yMax=0),o.rightSideBearing=this.advanceWidth-o.leftSideBearing-(o.xMax-o.xMin),o},ev.prototype.draw=function(e,t,r,n,a){this.getPath(t,r,n,a).draw(e)},ev.prototype.drawPoints=function(e,t,r,n){function a(t,r,n,a){e.beginPath();for(var o=0;o<t.length;o+=1)e.moveTo(r+t[o].x*a,n+t[o].y*a),e.arc(r+t[o].x*a,n+t[o].y*a,2,0,2*Math.PI,!1);e.closePath(),e.fill()}t=void 0!==t?t:0,r=void 0!==r?r:0,n=void 0!==n?n:24;for(var o=1/this.path.unitsPerEm*n,s=[],i=[],u=this.path,p=0;p<u.commands.length;p+=1){var l=u.commands[p];void 0!==l.x&&s.push({x:l.x,y:-l.y}),void 0!==l.x1&&i.push({x:l.x1,y:-l.y1}),void 0!==l.x2&&i.push({x:l.x2,y:-l.y2})}e.fillStyle="blue",a(s,t,r,o),e.fillStyle="red",a(i,t,r,o)},ev.prototype.drawMetrics=function(e,t,r,n){t=void 0!==t?t:0,r=void 0!==r?r:0,n=void 0!==n?n:24,a=1/this.path.unitsPerEm*n,e.lineWidth=1,e.strokeStyle="black",eg(e,t,-1e4,t,1e4),eg(e,-1e4,r,1e4,r);var a,o=this.xMin||0,s=this.yMin||0,i=this.xMax||0,u=this.yMax||0,p=this.advanceWidth||0;e.strokeStyle="blue",eg(e,t+o*a,-1e4,t+o*a,1e4),eg(e,t+i*a,-1e4,t+i*a,1e4),eg(e,-1e4,r+-s*a,1e4,r+-s*a),eg(e,-1e4,r+-u*a,1e4,r+-u*a),e.strokeStyle="green",eg(e,t+p*a,-1e4,t+p*a,1e4)},ey.prototype.get=function(e){if(void 0===this.glyphs[e]){this.font._push(e),"function"==typeof this.glyphs[e]&&(this.glyphs[e]=this.glyphs[e]());var t=this.glyphs[e],r=this.font._IndexToUnicodeMap[e];if(r)for(var n=0;n<r.unicodes.length;n++)t.addUnicode(r.unicodes[n]);this.font.cffEncoding?this.font.isCIDFont?t.name="gid"+e:t.name=this.font.cffEncoding.charset[e]:this.font.glyphNames.names&&(t.name=this.font.glyphNames.glyphIndexToName(e)),this.glyphs[e].advanceWidth=this.font._hmtxTableData[e].advanceWidth,this.glyphs[e].leftSideBearing=this.font._hmtxTableData[e].leftSideBearing}else"function"==typeof this.glyphs[e]&&(this.glyphs[e]=this.glyphs[e]());return this.glyphs[e]},ey.prototype.push=function(e,t){this.glyphs[e]=t,this.length++};var eb={GlyphSet:ey,glyphLoader:function(e,t){return new ev({index:t,font:e})},ttfGlyphLoader:function(e,t,r,n,a,o){return function(){var s=new ev({index:t,font:e});return s.path=function(){r(s,n,a);var t=o(e.glyphs,s);return t.unitsPerEm=e.unitsPerEm,t},em(s,"xMin","_xMin"),em(s,"xMax","_xMax"),em(s,"yMin","_yMin"),em(s,"yMax","_yMax"),s}},cffGlyphLoader:function(e,t,r,n){return function(){var a=new ev({index:t,font:e});return a.path=function(){var t=r(e,a,n);return t.unitsPerEm=e.unitsPerEm,t},a}}};function ex(e){return e.length<1240?107:e.length<33900?1131:32768}function eS(e,t,r){var n,a,o=[],s=[],i=eo.getCard16(e,t);if(0!==i){var u=eo.getByte(e,t+2);n=t+(i+1)*u+2;for(var p=t+3,l=0;l<i+1;l+=1)o.push(eo.getOffset(e,p,u)),p+=u;a=n+o[i]}else a=t+2;for(var c=0;c<o.length-1;c+=1){var h=eo.getBytes(e,n+o[c],n+o[c+1]);r&&(h=r(h)),s.push(h)}return{objects:s,startOffset:t,endOffset:a}}function eT(e,t,r){t=void 0!==t?t:0;var n=new eo.Parser(e,t),a=[],o=[];for(r=void 0!==r?r:e.length;n.relativeOffset<r;){var s=n.parseByte();s<=21?(12===s&&(s=1200+n.parseByte()),a.push([s,o]),o=[]):o.push(function(e,t){var r,n;if(28===t)return(r=e.parseByte())<<8|(n=e.parseByte());if(29===t)return r=e.parseByte(),r<<24|(n=e.parseByte())<<16|e.parseByte()<<8|e.parseByte();if(30===t)return function(e){for(var t="",r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var n=e.parseByte(),a=n>>4,o=15&n;if(15===a||(t+=r[a],15===o))break;t+=r[o]}return parseFloat(t)}(e);if(t>=32&&t<=246)return t-139;if(t>=247&&t<=250)return(t-247)*256+(r=e.parseByte())+108;if(t>=251&&t<=254)return-(256*(t-251))-(r=e.parseByte())-108;throw Error("Invalid b0 "+t)}(n,s))}return function(e){for(var t={},r=0;r<e.length;r+=1){var n=e[r][0],a=e[r][1],o=void 0;if(o=1===a.length?a[0]:a,t.hasOwnProperty(n)&&!isNaN(t[n]))throw Error("Object "+t+" already has key "+n);t[n]=o}return t}(a)}function ek(e,t){return t=t<=390?ei[t]:e[t-391]}function eU(e,t,r){for(var n,a={},o=0;o<t.length;o+=1){var s=t[o];if(Array.isArray(s.type)){var i=[];i.length=s.type.length;for(var u=0;u<s.type.length;u++)void 0===(n=void 0!==e[s.op]?e[s.op][u]:void 0)&&(n=void 0!==s.value&&void 0!==s.value[u]?s.value[u]:null),"SID"===s.type[u]&&(n=ek(r,n)),i[u]=n;a[s.name]=i}else void 0===(n=e[s.op])&&(n=void 0!==s.value?s.value:null),"SID"===s.type&&(n=ek(r,n)),a[s.name]=n}return a}var eO=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],eE=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function eR(e,t,r,n){for(var a=[],o=0;o<r.length;o+=1){var s=eU(eT(p=new DataView(new Uint8Array(r[o]).buffer),0,p.byteLength),eO,n);s._subrs=[],s._subrsBias=0,s._defaultWidthX=0,s._nominalWidthX=0;var i=s.private[0],u=s.private[1];if(0!==i&&0!==u){var p,l=eU(eT(e,u+t,i),eE,n);if(s._defaultWidthX=l.defaultWidthX,s._nominalWidthX=l.nominalWidthX,0!==l.subrs){var c=eS(e,u+l.subrs+t);s._subrs=c.objects,s._subrsBias=ex(s._subrs)}s._privateDict=l}a.push(s)}return a}function eC(e,t,r){var n,a,o,s,i,u,p,l,c=new w,h=[],f=0,d=!1,g=!1,v=0,m=0;if(e.isCIDFont){var y=e.tables.cff.topDict._fdSelect[t.index],b=e.tables.cff.topDict._fdArray[y];i=b._subrs,u=b._subrsBias,p=b._defaultWidthX,l=b._nominalWidthX}else i=e.tables.cff.topDict._subrs,u=e.tables.cff.topDict._subrsBias,p=e.tables.cff.topDict._defaultWidthX,l=e.tables.cff.topDict._nominalWidthX;var x=p;function S(e,t){g&&c.closePath(),c.moveTo(e,t),g=!0}function T(){h.length%2==0||d||(x=h.shift()+l),f+=h.length>>1,h.length=0,d=!0}return!function r(p){for(var y,b,k,U,O,E,R,C,L,D,w,I,M=0;M<p.length;){var G=p[M];switch(M+=1,G){case 1:case 3:case 18:case 23:T();break;case 4:h.length>1&&!d&&(x=h.shift()+l,d=!0),m+=h.pop(),S(v,m);break;case 5:for(;h.length>0;)v+=h.shift(),m+=h.shift(),c.lineTo(v,m);break;case 6:for(;h.length>0&&(v+=h.shift(),c.lineTo(v,m),0!==h.length);)m+=h.shift(),c.lineTo(v,m);break;case 7:for(;h.length>0&&(m+=h.shift(),c.lineTo(v,m),0!==h.length);)v+=h.shift(),c.lineTo(v,m);break;case 8:for(;h.length>0;)n=v+h.shift(),a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),v=o+h.shift(),m=s+h.shift(),c.curveTo(n,a,o,s,v,m);break;case 10:(E=i[O=h.pop()+u])&&r(E);break;case 11:return;case 12:switch(G=p[M],M+=1,G){case 35:n=v+h.shift(),a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),R=o+h.shift(),C=s+h.shift(),L=R+h.shift(),D=C+h.shift(),w=L+h.shift(),I=D+h.shift(),v=w+h.shift(),m=I+h.shift(),h.shift(),c.curveTo(n,a,o,s,R,C),c.curveTo(L,D,w,I,v,m);break;case 34:n=v+h.shift(),a=m,o=n+h.shift(),s=a+h.shift(),R=o+h.shift(),C=s,L=R+h.shift(),D=s,w=L+h.shift(),I=m,v=w+h.shift(),c.curveTo(n,a,o,s,R,C),c.curveTo(L,D,w,I,v,m);break;case 36:n=v+h.shift(),a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),R=o+h.shift(),C=s,L=R+h.shift(),D=s,w=L+h.shift(),I=D+h.shift(),v=w+h.shift(),c.curveTo(n,a,o,s,R,C),c.curveTo(L,D,w,I,v,m);break;case 37:n=v+h.shift(),a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),R=o+h.shift(),C=s+h.shift(),L=R+h.shift(),D=C+h.shift(),w=L+h.shift(),I=D+h.shift(),Math.abs(w-v)>Math.abs(I-m)?v=w+h.shift():m=I+h.shift(),c.curveTo(n,a,o,s,R,C),c.curveTo(L,D,w,I,v,m);break;default:console.log("Glyph "+t.index+": unknown operator 1200"+G),h.length=0}break;case 14:h.length>0&&!d&&(x=h.shift()+l,d=!0),g&&(c.closePath(),g=!1);break;case 19:case 20:T(),M+=f+7>>3;break;case 21:h.length>2&&!d&&(x=h.shift()+l,d=!0),m+=h.pop(),S(v+=h.pop(),m);break;case 22:h.length>1&&!d&&(x=h.shift()+l,d=!0),S(v+=h.pop(),m);break;case 24:for(;h.length>2;)n=v+h.shift(),a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),v=o+h.shift(),m=s+h.shift(),c.curveTo(n,a,o,s,v,m);v+=h.shift(),m+=h.shift(),c.lineTo(v,m);break;case 25:for(;h.length>6;)v+=h.shift(),m+=h.shift(),c.lineTo(v,m);n=v+h.shift(),a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),v=o+h.shift(),m=s+h.shift(),c.curveTo(n,a,o,s,v,m);break;case 26:for(h.length%2&&(v+=h.shift());h.length>0;)n=v,a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),v=o,m=s+h.shift(),c.curveTo(n,a,o,s,v,m);break;case 27:for(h.length%2&&(m+=h.shift());h.length>0;)n=v+h.shift(),a=m,o=n+h.shift(),s=a+h.shift(),v=o+h.shift(),m=s,c.curveTo(n,a,o,s,v,m);break;case 28:y=p[M],b=p[M+1],h.push((y<<24|b<<16)>>16),M+=2;break;case 29:O=h.pop()+e.gsubrsBias,(E=e.gsubrs[O])&&r(E);break;case 30:for(;h.length>0&&(n=v,a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),v=o+h.shift(),m=s+(1===h.length?h.shift():0),c.curveTo(n,a,o,s,v,m),0!==h.length);)n=v+h.shift(),a=m,o=n+h.shift(),m=(s=a+h.shift())+h.shift(),v=o+(1===h.length?h.shift():0),c.curveTo(n,a,o,s,v,m);break;case 31:for(;h.length>0&&(n=v+h.shift(),a=m,o=n+h.shift(),m=(s=a+h.shift())+h.shift(),v=o+(1===h.length?h.shift():0),c.curveTo(n,a,o,s,v,m),0!==h.length);)n=v,a=m+h.shift(),o=n+h.shift(),s=a+h.shift(),v=o+h.shift(),m=s+(1===h.length?h.shift():0),c.curveTo(n,a,o,s,v,m);break;default:G<32?console.log("Glyph "+t.index+": unknown operator "+G):G<247?h.push(G-139):G<251?(y=p[M],M+=1,h.push((G-247)*256+y+108)):G<255?(y=p[M],M+=1,h.push(-(256*(G-251))-y-108)):(y=p[M],b=p[M+1],k=p[M+2],U=p[M+3],M+=4,h.push((y<<24|b<<16|k<<8|U)/65536))}}}(r),t.advanceWidth=x,c}function eL(e,t){var r,n=ei.indexOf(e);return n>=0&&(r=n),(n=t.indexOf(e))>=0?r=n+ei.length:(r=ei.length+t.length,t.push(e)),r}function eD(e,t,r){for(var n={},a=0;a<e.length;a+=1){var o=e[a],s=t[o.name];void 0!==s&&!function e(t,r){if(t===r)return!0;if(!(Array.isArray(t)&&Array.isArray(r))||t.length!==r.length)return!1;for(var n=0;n<t.length;n+=1)if(!e(t[n],r[n]))return!1;return!0}(s,o.value)&&("SID"===o.type&&(s=eL(s,r)),n[o.op]={name:o.name,type:o.type,value:s})}return n}function ew(e,t){var r=new K.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=eD(eO,e,t),r}function eI(e){var t=new K.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return t.topDicts=[{name:"topDict_0",type:"TABLE",value:e}],t}var eM={parse:function(e,t,r,n){r.tables.cff={};var a,o,s,i,u=((s={}).formatMajor=eo.getCard8(e,t),s.formatMinor=eo.getCard8(e,t+1),s.size=eo.getCard8(e,t+2),s.offsetSize=eo.getCard8(e,t+3),s.startOffset=t,s.endOffset=t+4,s),p=eS(e,u.endOffset,eo.bytesToString),l=eS(e,p.endOffset),c=eS(e,l.endOffset,eo.bytesToString),h=eS(e,c.endOffset);r.gsubrs=h.objects,r.gsubrsBias=ex(r.gsubrs);var f=eR(e,t,l.objects,c.objects);if(1!==f.length)throw Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+f.length);var d=f[0];if(r.tables.cff.topDict=d,d._privateDict&&(r.defaultWidthX=d._privateDict.defaultWidthX,r.nominalWidthX=d._privateDict.nominalWidthX),void 0!==d.ros[0]&&void 0!==d.ros[1]&&(r.isCIDFont=!0),r.isCIDFont){var g=d.fdArray,v=d.fdSelect;if(0===g||0===v)throw Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");var m=eS(e,g+=t),y=eR(e,t,m.objects,c.objects);d._fdArray=y,v+=t,d._fdSelect=function(e,t,r,n){var a=[],o=new eo.Parser(e,t),s=o.parseCard8();if(0===s)for(var i=0;i<r;i++){if((u=o.parseCard8())>=n)throw Error("CFF table CID Font FDSelect has bad FD index value "+u+" (FD count "+n+")");a.push(u)}else if(3===s){var u,p,l=o.parseCard16(),c=o.parseCard16();if(0!==c)throw Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+c);for(var h=0;h<l;h++){if(u=o.parseCard8(),p=o.parseCard16(),u>=n)throw Error("CFF table CID Font FDSelect has bad FD index value "+u+" (FD count "+n+")");if(p>r)throw Error("CFF Table CID Font FDSelect format 3 range has bad GID "+p);for(;c<p;c++)a.push(u);c=p}if(p!==r)throw Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+p)}else throw Error("CFF Table CID Font FDSelect table has unsupported format "+s);return a}(e,v,r.numGlyphs,y.length)}var b=t+d.private[1],x=(a=d.private[0],o=c.objects,eU(eT(e,b,a),eE,o));if(r.defaultWidthX=x.defaultWidthX,r.nominalWidthX=x.nominalWidthX,0!==x.subrs){var S=eS(e,b+x.subrs);r.subrs=S.objects,r.subrsBias=ex(r.subrs)}else r.subrs=[],r.subrsBias=0;n.lowMemory?(i=function(e,t){var r,n,a=[],o=eo.getCard16(e,t);if(0!==o){var s=eo.getByte(e,t+2);r=t+(o+1)*s+2;for(var i=t+3,u=0;u<o+1;u+=1)a.push(eo.getOffset(e,i,s)),i+=s;n=r+a[o]}else n=t+2;return{offsets:a,startOffset:t,endOffset:n}}(e,t+d.charStrings),r.nGlyphs=i.offsets.length):(i=eS(e,t+d.charStrings),r.nGlyphs=i.objects.length);var T=function(e,t,r,n){var a,o,s=new eo.Parser(e,t);r-=1;var i=[".notdef"],u=s.parseCard8();if(0===u)for(var p=0;p<r;p+=1)a=s.parseSID(),i.push(ek(n,a));else if(1===u)for(;i.length<=r;){a=s.parseSID(),o=s.parseCard8();for(var l=0;l<=o;l+=1)i.push(ek(n,a)),a+=1}else if(2===u)for(;i.length<=r;){a=s.parseSID(),o=s.parseCard16();for(var c=0;c<=o;c+=1)i.push(ek(n,a)),a+=1}else throw Error("Unknown charset format "+u);return i}(e,t+d.charset,r.nGlyphs,c.objects);if(0===d.encoding?r.cffEncoding=new ef(eu,T):1===d.encoding?r.cffEncoding=new ef(ep,T):r.cffEncoding=function(e,t,r){var n,a={},o=new eo.Parser(e,t),s=o.parseCard8();if(0===s)for(var i=o.parseCard8(),u=0;u<i;u+=1)a[n=o.parseCard8()]=u;else if(1===s){var p=o.parseCard8();n=1;for(var l=0;l<p;l+=1)for(var c=o.parseCard8(),h=o.parseCard8(),f=c;f<=c+h;f+=1)a[f]=n,n+=1}else throw Error("Unknown encoding format "+s);return new ef(a,r)}(e,t+d.encoding,T),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new eb.GlyphSet(r),n.lowMemory)r._push=function(n){var a=function(e,t,r,n,a){var o=eo.getCard16(r,n),s=0;if(0!==o){var i=eo.getByte(r,n+2);s=n+(o+1)*i+2}return eo.getBytes(r,s+t[e],s+t[e+1])}(n,i.offsets,e,t+d.charStrings);r.glyphs.push(n,eb.cffGlyphLoader(r,n,eC,a))};else for(var k=0;k<r.nGlyphs;k+=1){var U=i.objects[k];r.glyphs.push(k,eb.cffGlyphLoader(r,k,eC,U))}},make:function(e,t){for(var r,n,a,o=new K.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),s=1/t.unitsPerEm,i={version:t.version,fullName:t.fullName,familyName:t.familyName,weight:t.weightName,fontBBox:t.fontBBox||[0,0,0,0],fontMatrix:[s,0,0,s,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},u=[],p=1;p<e.length;p+=1)a=e.get(p),u.push(a.name);var l=[];o.header=new K.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}]),o.nameIndex=function(e){var t=new K.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);t.names=[];for(var r=0;r<e.length;r+=1)t.names.push({name:"name_"+r,type:"NAME",value:e[r]});return t}([t.postScriptName]);var c=ew(i,l);o.topDictIndex=eI(c),o.globalSubrIndex=new K.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}]),o.charsets=function(e,t){for(var r=new K.Record("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<e.length;n+=1){var a=eL(e[n],t);r.fields.push({name:"glyph_"+n,type:"SID",value:a})}return r}(u,l),o.charStringsIndex=function(e){for(var t=new K.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<e.length;r+=1){var n=e.get(r),a=function(e){var t=[],r=e.path;t.push({name:"width",type:"NUMBER",value:e.advanceWidth});for(var n=0,a=0,o=0;o<r.commands.length;o+=1){var s=void 0,i=void 0,u=r.commands[o];if("Q"===u.type){var p=1/3,l=2/3;u={type:"C",x:u.x,y:u.y,x1:Math.round(p*n+l*u.x1),y1:Math.round(p*a+l*u.y1),x2:Math.round(p*u.x+l*u.x1),y2:Math.round(p*u.y+l*u.y1)}}if("M"===u.type)s=Math.round(u.x-n),i=Math.round(u.y-a),t.push({name:"dx",type:"NUMBER",value:s}),t.push({name:"dy",type:"NUMBER",value:i}),t.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(u.x),a=Math.round(u.y);else if("L"===u.type)s=Math.round(u.x-n),i=Math.round(u.y-a),t.push({name:"dx",type:"NUMBER",value:s}),t.push({name:"dy",type:"NUMBER",value:i}),t.push({name:"rlineto",type:"OP",value:5}),n=Math.round(u.x),a=Math.round(u.y);else if("C"===u.type){var c=Math.round(u.x1-n),h=Math.round(u.y1-a),f=Math.round(u.x2-u.x1),d=Math.round(u.y2-u.y1);s=Math.round(u.x-u.x2),i=Math.round(u.y-u.y2),t.push({name:"dx1",type:"NUMBER",value:c}),t.push({name:"dy1",type:"NUMBER",value:h}),t.push({name:"dx2",type:"NUMBER",value:f}),t.push({name:"dy2",type:"NUMBER",value:d}),t.push({name:"dx",type:"NUMBER",value:s}),t.push({name:"dy",type:"NUMBER",value:i}),t.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(u.x),a=Math.round(u.y)}}return t.push({name:"endchar",type:"OP",value:14}),t}(n);t.charStrings.push({name:n.name,type:"CHARSTRING",value:a})}return t}(e),o.privateDict=(r={},(n=new K.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}])).dict=eD(eE,r,l),n),o.stringIndex=function(e){var t=new K.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);t.strings=[];for(var r=0;r<e.length;r+=1)t.strings.push({name:"string_"+r,type:"STRING",value:e[r]});return t}(l);var h=o.header.sizeOf()+o.nameIndex.sizeOf()+o.topDictIndex.sizeOf()+o.stringIndex.sizeOf()+o.globalSubrIndex.sizeOf();return i.charset=h,i.encoding=0,i.charStrings=i.charset+o.charsets.sizeOf(),i.private[1]=i.charStrings+o.charStringsIndex.sizeOf(),c=ew(i,l),o.topDictIndex=eI(c),o}},eG={parse:function(e,t){var r={},n=new eo.Parser(e,t);return r.version=n.parseVersion(),r.fontRevision=Math.round(1e3*n.parseFixed())/1e3,r.checkSumAdjustment=n.parseULong(),r.magicNumber=n.parseULong(),M.argument(1594834165===r.magicNumber,"Font header has wrong magic number."),r.flags=n.parseUShort(),r.unitsPerEm=n.parseUShort(),r.created=n.parseLongDateTime(),r.modified=n.parseLongDateTime(),r.xMin=n.parseShort(),r.yMin=n.parseShort(),r.xMax=n.parseShort(),r.yMax=n.parseShort(),r.macStyle=n.parseUShort(),r.lowestRecPPEM=n.parseUShort(),r.fontDirectionHint=n.parseShort(),r.indexToLocFormat=n.parseShort(),r.glyphDataFormat=n.parseShort(),r},make:function(e){var t=Math.round(new Date().getTime()/1e3)+2082844800,r=t;return e.createdTimestamp&&(r=e.createdTimestamp+2082844800),new K.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:r},{name:"modified",type:"LONGDATETIME",value:t},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],e)}},eB={parse:function(e,t){var r={},n=new eo.Parser(e,t);return r.version=n.parseVersion(),r.ascender=n.parseShort(),r.descender=n.parseShort(),r.lineGap=n.parseShort(),r.advanceWidthMax=n.parseUShort(),r.minLeftSideBearing=n.parseShort(),r.minRightSideBearing=n.parseShort(),r.xMaxExtent=n.parseShort(),r.caretSlopeRise=n.parseShort(),r.caretSlopeRun=n.parseShort(),r.caretOffset=n.parseShort(),n.relativeOffset+=8,r.metricDataFormat=n.parseShort(),r.numberOfHMetrics=n.parseUShort(),r},make:function(e){return new K.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],e)}},eF=function(e,t,r,n,a,o,s){s.lowMemory?function(e,t,r,n,a){e._hmtxTableData={};for(var o,s,i=new eo.Parser(t,r),u=0;u<a;u+=1)u<n&&(o=i.parseUShort(),s=i.parseShort()),e._hmtxTableData[u]={advanceWidth:o,leftSideBearing:s}}(e,t,r,n,a):function(e,t,r,n,a){for(var o,s,i=new eo.Parser(e,t),u=0;u<n;u+=1){u<r&&(o=i.parseUShort(),s=i.parseShort());var p=a.get(u);p.advanceWidth=o,p.leftSideBearing=s}}(t,r,n,a,o)},eA=function(e){for(var t=new K.Table("hmtx",[]),r=0;r<e.length;r+=1){var n=e.get(r),a=n.advanceWidth||0,o=n.leftSideBearing||0;t.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:a}),t.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:o})}return t},eP={make:function(e){for(var t=new K.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:e.length}]),r="",n=12+4*e.length,a=0;a<e.length;++a){var o=r.indexOf(e[a]);o<0&&(o=r.length,r+=e[a]),t.fields.push({name:"offset "+a,type:"USHORT",value:n+o}),t.fields.push({name:"length "+a,type:"USHORT",value:e[a].length})}return t.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),t},parse:function(e,t){var r=new eo.Parser(e,t),n=r.parseULong();M.argument(1===n,"Unsupported ltag table version."),r.skip("uLong",1);for(var a=r.parseULong(),o=[],s=0;s<a;s++){for(var i="",u=t+r.parseUShort(),p=r.parseUShort(),l=u;l<u+p;++l)i+=String.fromCharCode(e.getInt8(l));o.push(i)}return o}},eN={parse:function(e,t){var r={},n=new eo.Parser(e,t);return r.version=n.parseVersion(),r.numGlyphs=n.parseUShort(),1===r.version&&(r.maxPoints=n.parseUShort(),r.maxContours=n.parseUShort(),r.maxCompositePoints=n.parseUShort(),r.maxCompositeContours=n.parseUShort(),r.maxZones=n.parseUShort(),r.maxTwilightPoints=n.parseUShort(),r.maxStorage=n.parseUShort(),r.maxFunctionDefs=n.parseUShort(),r.maxInstructionDefs=n.parseUShort(),r.maxStackElements=n.parseUShort(),r.maxSizeOfInstructions=n.parseUShort(),r.maxComponentElements=n.parseUShort(),r.maxComponentDepth=n.parseUShort()),r},make:function(e){return new K.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:e}])}},eH=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],ez={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},eW={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},eq={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"},e_="utf-16",eX={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},eV={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function eY(e,t,r){switch(e){case 0:return e_;case 1:return eV[r]||eX[t];case 3:if(1===t||10===t)return e_}}function ej(e){var t={};for(var r in e)t[e[r]]=parseInt(r);return t}function eZ(e,t,r,n,a,o){return new K.Record("NameRecord",[{name:"platformID",type:"USHORT",value:e},{name:"encodingID",type:"USHORT",value:t},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:a},{name:"offset",type:"USHORT",value:o}])}function eQ(e,t){var r=function(e,t){var r=e.length,n=t.length-r+1;e:for(var a=0;a<n;a++)for(;a<n;a++){for(var o=0;o<r;o++)if(t[a+o]!==e[o])continue e;return a}return -1}(e,t);if(r<0){r=t.length;for(var n=0,a=e.length;n<a;++n)t.push(e[n])}return r}var eK=function(e,t,r){for(var n={},a=new eo.Parser(e,t),o=a.parseUShort(),s=a.parseUShort(),i=a.offset+a.parseUShort(),u=0;u<s;u++){var p=a.parseUShort(),l=a.parseUShort(),c=a.parseUShort(),h=a.parseUShort(),f=eH[h]||h,d=a.parseUShort(),g=a.parseUShort(),v=function(e,t,r){switch(e){case 0:if(65535===t)return"und";if(r)return r[t];break;case 1:return ez[t];case 3:return eq[t]}}(p,c,r),m=eY(p,l,c);if(void 0!==m&&void 0!==v){var y=void 0;if(y=m===e_?G.UTF16(e,i+g,d):G.MACSTRING(e,i+g,d,m)){var b=n[f];void 0===b&&(b=n[f]={}),b[v]=y}}}return 1===o&&a.parseUShort(),n},eJ=function(e,t){var r,n=[],a={},o=ej(eH);for(var s in e){var i=o[s];if(void 0===i&&(i=s),isNaN(r=parseInt(i)))throw Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');a[r]=e[s],n.push(r)}for(var u=ej(ez),p=ej(eq),l=[],c=[],h=0;h<n.length;h++){var f=a[r=n[h]];for(var d in f){var g=f[d],v=1,m=u[d],y=eW[m],b=eY(v,y,m),x=B.MACSTRING(g,b);void 0===x&&(v=0,(m=t.indexOf(d))<0&&(m=t.length,t.push(d)),y=4,x=B.UTF16(g));var S=eQ(x,c);l.push(eZ(v,y,m,r,x.length,S));var T=p[d];if(void 0!==T){var k=B.UTF16(g),U=eQ(k,c);l.push(eZ(3,1,T,r,k.length,U))}}}l.sort(function(e,t){return e.platformID-t.platformID||e.encodingID-t.encodingID||e.languageID-t.languageID||e.nameID-t.nameID});for(var O=new K.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:l.length},{name:"stringOffset",type:"USHORT",value:6+12*l.length}]),E=0;E<l.length;E++)O.fields.push({name:"record_"+E,type:"RECORD",value:l[E]});return O.fields.push({name:"strings",type:"LITERAL",value:c}),O},e$=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}],e0={parse:function(e,t){var r={},n=new eo.Parser(e,t);r.version=n.parseUShort(),r.xAvgCharWidth=n.parseShort(),r.usWeightClass=n.parseUShort(),r.usWidthClass=n.parseUShort(),r.fsType=n.parseUShort(),r.ySubscriptXSize=n.parseShort(),r.ySubscriptYSize=n.parseShort(),r.ySubscriptXOffset=n.parseShort(),r.ySubscriptYOffset=n.parseShort(),r.ySuperscriptXSize=n.parseShort(),r.ySuperscriptYSize=n.parseShort(),r.ySuperscriptXOffset=n.parseShort(),r.ySuperscriptYOffset=n.parseShort(),r.yStrikeoutSize=n.parseShort(),r.yStrikeoutPosition=n.parseShort(),r.sFamilyClass=n.parseShort(),r.panose=[];for(var a=0;a<10;a++)r.panose[a]=n.parseByte();return r.ulUnicodeRange1=n.parseULong(),r.ulUnicodeRange2=n.parseULong(),r.ulUnicodeRange3=n.parseULong(),r.ulUnicodeRange4=n.parseULong(),r.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),r.fsSelection=n.parseUShort(),r.usFirstCharIndex=n.parseUShort(),r.usLastCharIndex=n.parseUShort(),r.sTypoAscender=n.parseShort(),r.sTypoDescender=n.parseShort(),r.sTypoLineGap=n.parseShort(),r.usWinAscent=n.parseUShort(),r.usWinDescent=n.parseUShort(),r.version>=1&&(r.ulCodePageRange1=n.parseULong(),r.ulCodePageRange2=n.parseULong()),r.version>=2&&(r.sxHeight=n.parseShort(),r.sCapHeight=n.parseShort(),r.usDefaultChar=n.parseUShort(),r.usBreakChar=n.parseUShort(),r.usMaxContent=n.parseUShort()),r},make:function(e){return new K.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],e)},getUnicodeRange:function(e){for(var t=0;t<e$.length;t+=1){var r=e$[t];if(e>=r.begin&&e<r.end)return t}return -1}},e1={parse:function(e,t){var r={},n=new eo.Parser(e,t);switch(r.version=n.parseVersion(),r.italicAngle=n.parseFixed(),r.underlinePosition=n.parseShort(),r.underlineThickness=n.parseShort(),r.isFixedPitch=n.parseULong(),r.minMemType42=n.parseULong(),r.maxMemType42=n.parseULong(),r.minMemType1=n.parseULong(),r.maxMemType1=n.parseULong(),r.version){case 1:r.names=el.slice();break;case 2:r.numberOfGlyphs=n.parseUShort(),r.glyphNameIndex=Array(r.numberOfGlyphs);for(var a=0;a<r.numberOfGlyphs;a++)r.glyphNameIndex[a]=n.parseUShort();r.names=[];for(var o=0;o<r.numberOfGlyphs;o++)if(r.glyphNameIndex[o]>=el.length){var s=n.parseChar();r.names.push(n.parseString(s))}break;case 2.5:r.numberOfGlyphs=n.parseUShort(),r.offset=Array(r.numberOfGlyphs);for(var i=0;i<r.numberOfGlyphs;i++)r.offset[i]=n.parseChar()}return r},make:function(){return new K.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}},e2=Array(9);e2[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();return 1===t?{substFormat:1,coverage:this.parsePointer(en.coverage),deltaGlyphId:this.parseUShort()}:2===t?{substFormat:2,coverage:this.parsePointer(en.coverage),substitute:this.parseOffset16List()}:void M.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")},e2[2]=function(){var e=this.parseUShort();return M.argument(1===e,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(en.coverage),sequences:this.parseListOfLists()}},e2[3]=function(){var e=this.parseUShort();return M.argument(1===e,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(en.coverage),alternateSets:this.parseListOfLists()}},e2[4]=function(){var e=this.parseUShort();return M.argument(1===e,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(en.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var e6={sequenceIndex:en.uShort,lookupListIndex:en.uShort};e2[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(1===t)return{substFormat:t,coverage:this.parsePointer(en.coverage),ruleSets:this.parseListOfLists(function(){var e=this.parseUShort(),t=this.parseUShort();return{input:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,e6)}})};if(2===t)return{substFormat:t,coverage:this.parsePointer(en.coverage),classDef:this.parsePointer(en.classDef),classSets:this.parseListOfLists(function(){var e=this.parseUShort(),t=this.parseUShort();return{classes:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,e6)}})};if(3===t){var r=this.parseUShort(),n=this.parseUShort();return{substFormat:t,coverages:this.parseList(r,en.pointer(en.coverage)),lookupRecords:this.parseRecordList(n,e6)}}M.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")},e2[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();return 1===t?{substFormat:1,coverage:this.parsePointer(en.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(e6)}})}:2===t?{substFormat:2,coverage:this.parsePointer(en.coverage),backtrackClassDef:this.parsePointer(en.classDef),inputClassDef:this.parsePointer(en.classDef),lookaheadClassDef:this.parsePointer(en.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(e6)}})}:3===t?{substFormat:3,backtrackCoverage:this.parseList(en.pointer(en.coverage)),inputCoverage:this.parseList(en.pointer(en.coverage)),lookaheadCoverage:this.parseList(en.pointer(en.coverage)),lookupRecords:this.parseRecordList(e6)}:void M.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")},e2[7]=function(){var e=this.parseUShort();M.argument(1===e,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),r=new en(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:e2[t].call(r)}},e2[8]=function(){var e=this.parseUShort();return M.argument(1===e,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(en.coverage),backtrackCoverage:this.parseList(en.pointer(en.coverage)),lookaheadCoverage:this.parseList(en.pointer(en.coverage)),substitutes:this.parseUShortList()}};var e3=Array(9);e3[1]=function(e){return 1===e.substFormat?new K.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new K.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new K.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new K.Coverage(e.coverage)}].concat(K.ushortList("substitute",e.substitute)))},e3[2]=function(e){return M.assert(1===e.substFormat,"Lookup type 2 substFormat must be 1."),new K.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new K.Coverage(e.coverage)}].concat(K.tableList("seqSet",e.sequences,function(e){return new K.Table("sequenceSetTable",K.ushortList("sequence",e))})))},e3[3]=function(e){return M.assert(1===e.substFormat,"Lookup type 3 substFormat must be 1."),new K.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new K.Coverage(e.coverage)}].concat(K.tableList("altSet",e.alternateSets,function(e){return new K.Table("alternateSetTable",K.ushortList("alternate",e))})))},e3[4]=function(e){return M.assert(1===e.substFormat,"Lookup type 4 substFormat must be 1."),new K.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new K.Coverage(e.coverage)}].concat(K.tableList("ligSet",e.ligatureSets,function(e){return new K.Table("ligatureSetTable",K.tableList("ligature",e,function(e){return new K.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:e.ligGlyph}].concat(K.ushortList("component",e.components,e.components.length+1)))}))})))},e3[6]=function(e){if(1===e.substFormat)return new K.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new K.Coverage(e.coverage)}].concat(K.tableList("chainRuleSet",e.chainRuleSets,function(e){return new K.Table("chainRuleSetTable",K.tableList("chainRule",e,function(e){var t=K.ushortList("backtrackGlyph",e.backtrack,e.backtrack.length).concat(K.ushortList("inputGlyph",e.input,e.input.length+1)).concat(K.ushortList("lookaheadGlyph",e.lookahead,e.lookahead.length)).concat(K.ushortList("substitution",[],e.lookupRecords.length));return e.lookupRecords.forEach(function(e,r){t=t.concat({name:"sequenceIndex"+r,type:"USHORT",value:e.sequenceIndex}).concat({name:"lookupListIndex"+r,type:"USHORT",value:e.lookupListIndex})}),new K.Table("chainRuleTable",t)}))})));if(2===e.substFormat)M.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(3===e.substFormat){var t=[{name:"substFormat",type:"USHORT",value:e.substFormat}];return t.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(e,r){t.push({name:"backtrackCoverage"+r,type:"TABLE",value:new K.Coverage(e)})}),t.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(e,r){t.push({name:"inputCoverage"+r,type:"TABLE",value:new K.Coverage(e)})}),t.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(e,r){t.push({name:"lookaheadCoverage"+r,type:"TABLE",value:new K.Coverage(e)})}),t.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(e,r){t=t.concat({name:"sequenceIndex"+r,type:"USHORT",value:e.sequenceIndex}).concat({name:"lookupListIndex"+r,type:"USHORT",value:e.lookupListIndex})}),new K.Table("chainContextTable",t)}M.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};var e5={parse:function(e,t){var r=new en(e,t=t||0),n=r.parseVersion(1);return(M.argument(1===n||1.1===n,"Unsupported GSUB table version."),1===n)?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(e2)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(e2),variations:r.parseFeatureVariationsList()}},make:function(e){return new K.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new K.ScriptList(e.scripts)},{name:"features",type:"TABLE",value:new K.FeatureList(e.features)},{name:"lookups",type:"TABLE",value:new K.LookupList(e.lookups,e3)}])}},e4={parse:function(e,t){var r=new eo.Parser(e,t),n=r.parseULong();M.argument(1===n,"Unsupported META table version."),r.parseULong(),r.parseULong();for(var a=r.parseULong(),o={},s=0;s<a;s++){var i=r.parseTag(),u=r.parseULong(),p=r.parseULong(),l=G.UTF8(e,t+u,p);o[i]=l}return o},make:function(e){var t=Object.keys(e).length,r="",n=16+12*t,a=new K.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:n},{name:"numTags",type:"ULONG",value:t}]);for(var o in e){var s=r.length;r+=e[o],a.fields.push({name:"tag "+o,type:"TAG",value:o}),a.fields.push({name:"offset "+o,type:"ULONG",value:n+s}),a.fields.push({name:"length "+o,type:"ULONG",value:e[o].length})}return a.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),a}};function e8(e){return Math.log(e)/Math.log(2)|0}function e7(e){for(;e.length%4!=0;)e.push(0);for(var t=0,r=0;r<e.length;r+=4)t+=(e[r]<<24)+(e[r+1]<<16)+(e[r+2]<<8)+e[r+3];return t%4294967296}function e9(e,t,r,n){return new K.Record("Table Record",[{name:"tag",type:"TAG",value:void 0!==e?e:""},{name:"checkSum",type:"ULONG",value:void 0!==t?t:0},{name:"offset",type:"ULONG",value:void 0!==r?r:0},{name:"length",type:"ULONG",value:void 0!==n?n:0}])}function te(e,t,r){for(var n=0;n<t.length;n+=1){var a=e.charToGlyphIndex(t[n]);if(a>0)return e.glyphs.get(a).getMetrics()}return r}var tt=function(e){for(var t,r=[],n=[],a=[],o=[],s=[],i=[],u=[],p=0,l=0,c=0,h=0,f=0,d=0;d<e.glyphs.length;d+=1){var g=e.glyphs.get(d),v=0|g.unicode;if(isNaN(g.advanceWidth))throw Error("Glyph "+g.name+" ("+d+"): advanceWidth is not a number.");(t>v||void 0===t)&&v>0&&(t=v),p<v&&(p=v);var m=e0.getUnicodeRange(v);if(m<32)l|=1<<m;else if(m<64)c|=1<<m-32;else if(m<96)h|=1<<m-64;else if(m<123)f|=1<<m-96;else throw Error("Unicode ranges bits > 123 are reserved for internal usage");if(".notdef"!==g.name){var y=g.getMetrics();r.push(y.xMin),n.push(y.yMin),a.push(y.xMax),o.push(y.yMax),i.push(y.leftSideBearing),u.push(y.rightSideBearing),s.push(g.advanceWidth)}}var b={xMin:Math.min.apply(null,r),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,a),yMax:Math.max.apply(null,o),advanceWidthMax:Math.max.apply(null,s),advanceWidthAvg:function(e){for(var t=0,r=0;r<e.length;r+=1)t+=e[r];return t/e.length}(s),minLeftSideBearing:Math.min.apply(null,i),maxLeftSideBearing:Math.max.apply(null,i),minRightSideBearing:Math.min.apply(null,u)};b.ascender=e.ascender,b.descender=e.descender;var x=eG.make({flags:3,unitsPerEm:e.unitsPerEm,xMin:b.xMin,yMin:b.yMin,xMax:b.xMax,yMax:b.yMax,lowestRecPPEM:3,createdTimestamp:e.createdTimestamp}),S=eB.make({ascender:b.ascender,descender:b.descender,advanceWidthMax:b.advanceWidthMax,minLeftSideBearing:b.minLeftSideBearing,minRightSideBearing:b.minRightSideBearing,xMaxExtent:b.maxLeftSideBearing+(b.xMax-b.xMin),numberOfHMetrics:e.glyphs.length}),T=eN.make(e.glyphs.length),k=e0.make(Object.assign({xAvgCharWidth:Math.round(b.advanceWidthAvg),usFirstCharIndex:t,usLastCharIndex:p,ulUnicodeRange1:l,ulUnicodeRange2:c,ulUnicodeRange3:h,ulUnicodeRange4:f,sTypoAscender:b.ascender,sTypoDescender:b.descender,sTypoLineGap:0,usWinAscent:b.yMax,usWinDescent:Math.abs(b.yMin),ulCodePageRange1:1,sxHeight:te(e,"xyvw",{yMax:Math.round(b.ascender/2)}).yMax,sCapHeight:te(e,"HIKLEFJMNTZBDPRAGOQSUVWXY",b).yMax,usDefaultChar:e.hasChar(" ")?32:0,usBreakChar:e.hasChar(" ")?32:0},e.tables.os2)),U=eA(e.glyphs),O=es.make(e.glyphs),E=e.getEnglishName("fontFamily"),R=e.getEnglishName("fontSubfamily"),C=E+" "+R,L=e.getEnglishName("postScriptName");L||(L=E.replace(/\s/g,"")+"-"+R);var D={};for(var w in e.names)D[w]=e.names[w];D.uniqueID||(D.uniqueID={en:e.getEnglishName("manufacturer")+":"+C}),D.postScriptName||(D.postScriptName={en:L}),D.preferredFamily||(D.preferredFamily=e.names.fontFamily),D.preferredSubfamily||(D.preferredSubfamily=e.names.fontSubfamily);var I=[],G=eJ(D,I),B=I.length>0?eP.make(I):void 0,F=e1.make(),A=eM.make(e.glyphs,{version:e.getEnglishName("version"),fullName:C,familyName:E,weightName:R,postScriptName:L,unitsPerEm:e.unitsPerEm,fontBBox:[0,b.yMin,b.ascender,b.advanceWidthMax]}),P=e.metas&&Object.keys(e.metas).length>0?e4.make(e.metas):void 0,N=[x,S,T,k,G,O,F,A,U];B&&N.push(B),e.tables.gsub&&N.push(e5.make(e.tables.gsub)),P&&N.push(P);for(var H=function(e){var t=new K.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);t.tables=e,t.numTables=e.length;var r=Math.pow(2,e8(t.numTables));t.searchRange=16*r,t.entrySelector=e8(r),t.rangeShift=16*t.numTables-t.searchRange;for(var n=[],a=[],o=t.sizeOf()+e9().sizeOf()*t.numTables;o%4!=0;)o+=1,a.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<e.length;s+=1){var i=e[s];M.argument(4===i.tableName.length,"Table name"+i.tableName+" is invalid.");var u=i.sizeOf(),p=e9(i.tableName,e7(i.encode()),o,u);for(n.push({name:p.tag+" Table Record",type:"RECORD",value:p}),a.push({name:i.tableName+" table",type:"RECORD",value:i}),o+=u,M.argument(!isNaN(o),"Something went wrong calculating the offset.");o%4!=0;)o+=1,a.push({name:"padding",type:"BYTE",value:0})}return n.sort(function(e,t){return e.value.tag>t.value.tag?1:-1}),t.fields=t.fields.concat(n),t.fields=t.fields.concat(a),t}(N),z=e7(H.encode()),W=H.fields,q=!1,_=0;_<W.length;_+=1)if("head table"===W[_].name){W[_].value.checkSumAdjustment=2981146554-z,q=!0;break}if(!q)throw Error("Could not find head table with checkSum to adjust.");return H};function tr(e,t){for(var r=0,n=e.length-1;r<=n;){var a=r+n>>>1,o=e[a].tag;if(o===t)return a;o<t?r=a+1:n=a-1}return-r-1}function tn(e,t){for(var r=0,n=e.length-1;r<=n;){var a=r+n>>>1,o=e[a];if(o===t)return a;o<t?r=a+1:n=a-1}return-r-1}function ta(e,t){for(var r,n=0,a=e.length-1;n<=a;){var o=n+a>>>1,s=(r=e[o]).start;if(s===t)return r;s<t?n=o+1:a=o-1}if(n>0)return t>(r=e[n-1]).end?0:r}function to(e,t){this.font=e,this.tableName=t}function ts(e){to.call(this,e,"gpos")}function ti(e){to.call(this,e,"gsub")}function tu(e,t,r){for(var n=e.subtables,a=0;a<n.length;a++){var o=n[a];if(o.substFormat===t)return o}if(r)return n.push(r),r}function tp(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n<e.length;++n)r[n]=e[n];return t}function tl(e,t){if(!e)throw t}function tc(e,t,r,n,a){var o;return(t&n)>0?(o=e.parseByte(),(t&a)==0&&(o=-o),o=r+o):o=(t&a)>0?r:r+e.parseShort(),o}function th(e,t,r){var n=new eo.Parser(t,r);if(e.numberOfContours=n.parseShort(),e._xMin=n.parseShort(),e._yMin=n.parseShort(),e._xMax=n.parseShort(),e._yMax=n.parseShort(),e.numberOfContours>0){for(var a=e.endPointIndices=[],o=0;o<e.numberOfContours;o+=1)a.push(n.parseUShort());e.instructionLength=n.parseUShort(),e.instructions=[];for(var s=0;s<e.instructionLength;s+=1)e.instructions.push(n.parseByte());var i=a[a.length-1]+1;c=[];for(var u=0;u<i;u+=1)if(h=n.parseByte(),c.push(h),(8&h)>0)for(var p=n.parseByte(),l=0;l<p;l+=1)c.push(h),u+=1;if(M.argument(c.length===i,"Bad flags."),a.length>0){var c,h,f,d=[];if(i>0){for(var g=0;g<i;g+=1)h=c[g],(f={}).onCurve=!!(1&h),f.lastPointOfContour=a.indexOf(g)>=0,d.push(f);for(var v=0,m=0;m<i;m+=1)h=c[m],(f=d[m]).x=tc(n,h,v,2,16),v=f.x;for(var y=0,b=0;b<i;b+=1)h=c[b],(f=d[b]).y=tc(n,h,y,4,32),y=f.y}e.points=d}else e.points=[]}else if(0===e.numberOfContours)e.points=[];else{e.isComposite=!0,e.points=[],e.components=[];for(var x=!0;x;){c=n.parseUShort();var S={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(1&c)>0?(2&c)>0?(S.dx=n.parseShort(),S.dy=n.parseShort()):S.matchedPoints=[n.parseUShort(),n.parseUShort()]:(2&c)>0?(S.dx=n.parseChar(),S.dy=n.parseChar()):S.matchedPoints=[n.parseByte(),n.parseByte()],(8&c)>0?S.xScale=S.yScale=n.parseF2Dot14():(64&c)>0?(S.xScale=n.parseF2Dot14(),S.yScale=n.parseF2Dot14()):(128&c)>0&&(S.xScale=n.parseF2Dot14(),S.scale01=n.parseF2Dot14(),S.scale10=n.parseF2Dot14(),S.yScale=n.parseF2Dot14()),e.components.push(S),x=!!(32&c)}if(256&c){e.instructionLength=n.parseUShort(),e.instructions=[];for(var T=0;T<e.instructionLength;T+=1)e.instructions.push(n.parseByte())}}}function tf(e,t){for(var r=[],n=0;n<e.length;n+=1){var a=e[n],o={x:t.xScale*a.x+t.scale01*a.y+t.dx,y:t.scale10*a.x+t.yScale*a.y+t.dy,onCurve:a.onCurve,lastPointOfContour:a.lastPointOfContour};r.push(o)}return r}function td(e){var t=new w;if(!e)return t;for(var r=function(e){for(var t=[],r=[],n=0;n<e.length;n+=1){var a=e[n];r.push(a),a.lastPointOfContour&&(t.push(r),r=[])}return M.argument(0===r.length,"There are still points left in the current contour."),t}(e),n=0;n<r.length;++n){var a=r[n],o=null,s=a[a.length-1],i=a[0];if(s.onCurve)t.moveTo(s.x,s.y);else if(i.onCurve)t.moveTo(i.x,i.y);else{var u={x:(s.x+i.x)*.5,y:(s.y+i.y)*.5};t.moveTo(u.x,u.y)}for(var p=0;p<a.length;++p)if(o=s,s=i,i=a[(p+1)%a.length],s.onCurve)t.lineTo(s.x,s.y);else{var l=i;o.onCurve||(s.x,o.x,s.y,o.y),i.onCurve||(l={x:(s.x+i.x)*.5,y:(s.y+i.y)*.5}),t.quadraticCurveTo(s.x,s.y,l.x,l.y)}t.closePath()}return t}function tg(e,t){if(t.isComposite)for(var r=0;r<t.components.length;r+=1){var n=t.components[r],a=e.get(n.glyphIndex);if(a.getPath(),a.points){var o=void 0;if(void 0===n.matchedPoints)o=tf(a.points,n);else{if(n.matchedPoints[0]>t.points.length-1||n.matchedPoints[1]>a.points.length-1)throw Error("Matched points out of range in "+t.name);var s=t.points[n.matchedPoints[0]],i=a.points[n.matchedPoints[1]],u={xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:0,dy:0};i=tf([i],u)[0],u.dx=s.x-i.x,u.dy=s.y-i.y,o=tf(a.points,u)}t.points=t.points.concat(o)}}return td(t.points)}to.prototype={searchTag:tr,binSearch:tn,getTable:function(e){var t=this.font.tables[this.tableName];return!t&&e&&(t=this.font.tables[this.tableName]=this.createDefaultTable()),t},getScriptNames:function(){var e=this.getTable();return e?e.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var e=this.getTable();if(e){for(var t=!1,r=0;r<e.scripts.length;r++){var n=e.scripts[r].tag;if("DFLT"===n)return n;"latn"===n&&(t=!0)}if(t)return"latn"}},getScriptTable:function(e,t){var r=this.getTable(t);if(r){e=e||"DFLT";var n=r.scripts,a=tr(r.scripts,e);if(a>=0)return n[a].script;if(t){var o={tag:e,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return n.splice(-1-a,0,o),o.script}}},getLangSysTable:function(e,t,r){var n=this.getScriptTable(e,r);if(n){if(!t||"dflt"===t||"DFLT"===t)return n.defaultLangSys;var a=tr(n.langSysRecords,t);if(a>=0)return n.langSysRecords[a].langSys;if(r){var o={tag:t,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return n.langSysRecords.splice(-1-a,0,o),o.langSys}}},getFeatureTable:function(e,t,r,n){var a=this.getLangSysTable(e,t,n);if(a){for(var o,s=a.featureIndexes,i=this.font.tables[this.tableName].features,u=0;u<s.length;u++)if((o=i[s[u]]).tag===r)return o.feature;if(n){var p=i.length;return M.assert(0===p||r>=i[p-1].tag,"Features must be added in alphabetical order."),o={tag:r,feature:{params:0,lookupListIndexes:[]}},i.push(o),s.push(p),o.feature}}},getLookupTables:function(e,t,r,n,a){var o=this.getFeatureTable(e,t,r,a),s=[];if(o){for(var i,u=o.lookupListIndexes,p=this.font.tables[this.tableName].lookups,l=0;l<u.length;l++)(i=p[u[l]]).lookupType===n&&s.push(i);if(0===s.length&&a){i={lookupType:n,lookupFlag:0,subtables:[],markFilteringSet:void 0};var c=p.length;return p.push(i),u.push(c),[i]}}return s},getGlyphClass:function(e,t){switch(e.format){case 1:if(e.startGlyph<=t&&t<e.startGlyph+e.classes.length)return e.classes[t-e.startGlyph];return 0;case 2:var r=ta(e.ranges,t);return r?r.classId:0}},getCoverageIndex:function(e,t){switch(e.format){case 1:var r=tn(e.glyphs,t);return r>=0?r:-1;case 2:var n=ta(e.ranges,t);return n?n.index+t-n.start:-1}},expandCoverage:function(e){if(1===e.format)return e.glyphs;for(var t=[],r=e.ranges,n=0;n<r.length;n++)for(var a=r[n],o=a.start,s=a.end,i=o;i<=s;i++)t.push(i);return t}},ts.prototype=to.prototype,ts.prototype.init=function(){var e=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(e)},ts.prototype.getKerningValue=function(e,t,r){for(var n=0;n<e.length;n++)for(var a=e[n].subtables,o=0;o<a.length;o++){var s=a[o],i=this.getCoverageIndex(s.coverage,t);if(!(i<0))switch(s.posFormat){case 1:for(var u=s.pairSets[i],p=0;p<u.length;p++){var l=u[p];if(l.secondGlyph===r)return l.value1&&l.value1.xAdvance||0}break;case 2:var c=this.getGlyphClass(s.classDef1,t),h=this.getGlyphClass(s.classDef2,r),f=s.classRecords[c][h];return f.value1&&f.value1.xAdvance||0}}return 0},ts.prototype.getKerningTables=function(e,t){if(this.font.tables.gpos)return this.getLookupTables(e,t,"kern",2)},ti.prototype=to.prototype,ti.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},ti.prototype.getSingle=function(e,t,r){for(var n=[],a=this.getLookupTables(t,r,e,1),o=0;o<a.length;o++)for(var s=a[o].subtables,i=0;i<s.length;i++){var u=s[i],p=this.expandCoverage(u.coverage),l=void 0;if(1===u.substFormat){var c=u.deltaGlyphId;for(l=0;l<p.length;l++){var h=p[l];n.push({sub:h,by:h+c})}}else{var f=u.substitute;for(l=0;l<p.length;l++)n.push({sub:p[l],by:f[l]})}}return n},ti.prototype.getMultiple=function(e,t,r){for(var n=[],a=this.getLookupTables(t,r,e,2),o=0;o<a.length;o++)for(var s=a[o].subtables,i=0;i<s.length;i++){var u=s[i],p=this.expandCoverage(u.coverage),l=void 0;for(l=0;l<p.length;l++){var c=p[l],h=u.sequences[l];n.push({sub:c,by:h})}}return n},ti.prototype.getAlternates=function(e,t,r){for(var n=[],a=this.getLookupTables(t,r,e,3),o=0;o<a.length;o++)for(var s=a[o].subtables,i=0;i<s.length;i++)for(var u=s[i],p=this.expandCoverage(u.coverage),l=u.alternateSets,c=0;c<p.length;c++)n.push({sub:p[c],by:l[c]});return n},ti.prototype.getLigatures=function(e,t,r){for(var n=[],a=this.getLookupTables(t,r,e,4),o=0;o<a.length;o++)for(var s=a[o].subtables,i=0;i<s.length;i++)for(var u=s[i],p=this.expandCoverage(u.coverage),l=u.ligatureSets,c=0;c<p.length;c++)for(var h=p[c],f=l[c],d=0;d<f.length;d++){var g=f[d];n.push({sub:[h].concat(g.components),by:g.ligGlyph})}return n},ti.prototype.addSingle=function(e,t,r,n){var a=tu(this.getLookupTables(r,n,e,1,!0)[0],2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});M.assert(1===a.coverage.format,"Single: unable to modify coverage table format "+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.substitute.splice(s,0,0)),a.substitute[s]=t.by},ti.prototype.addMultiple=function(e,t,r,n){M.assert(t.by instanceof Array&&t.by.length>1,'Multiple: "by" must be an array of two or more ids');var a=tu(this.getLookupTables(r,n,e,2,!0)[0],1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});M.assert(1===a.coverage.format,"Multiple: unable to modify coverage table format "+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.sequences.splice(s,0,0)),a.sequences[s]=t.by},ti.prototype.addAlternate=function(e,t,r,n){var a=tu(this.getLookupTables(r,n,e,3,!0)[0],1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});M.assert(1===a.coverage.format,"Alternate: unable to modify coverage table format "+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.alternateSets.splice(s,0,0)),a.alternateSets[s]=t.by},ti.prototype.addLigature=function(e,t,r,n){var a=this.getLookupTables(r,n,e,4,!0)[0],o=a.subtables[0];o||(o={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},a.subtables[0]=o),M.assert(1===o.coverage.format,"Ligature: unable to modify coverage table format "+o.coverage.format);var s=t.sub[0],i=t.sub.slice(1),u={ligGlyph:t.by,components:i},p=this.binSearch(o.coverage.glyphs,s);if(p>=0){for(var l=o.ligatureSets[p],c=0;c<l.length;c++)if(function(e,t){var r=e.length;if(r!==t.length)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}(l[c].components,i))return;l.push(u)}else p=-1-p,o.coverage.glyphs.splice(p,0,s),o.ligatureSets.splice(p,0,[u])},ti.prototype.getFeature=function(e,t,r){if(/ss\d\d/.test(e))return this.getSingle(e,t,r);switch(e){case"aalt":case"salt":return this.getSingle(e,t,r).concat(this.getAlternates(e,t,r));case"dlig":case"liga":case"rlig":return this.getLigatures(e,t,r);case"ccmp":return this.getMultiple(e,t,r).concat(this.getLigatures(e,t,r));case"stch":return this.getMultiple(e,t,r)}},ti.prototype.add=function(e,t,r,n){if(/ss\d\d/.test(e))return this.addSingle(e,t,r,n);switch(e){case"aalt":case"salt":if("number"==typeof t.by)return this.addSingle(e,t,r,n);return this.addAlternate(e,t,r,n);case"dlig":case"liga":case"rlig":return this.addLigature(e,t,r,n);case"ccmp":if(t.by instanceof Array)return this.addMultiple(e,t,r,n);return this.addLigature(e,t,r,n)}};var tv={getPath:td,parse:function(e,t,r,n,a){var o;return a.lowMemory?(o=new eb.GlyphSet(n),n._push=function(a){var s=r[a];s!==r[a+1]?o.push(a,eb.ttfGlyphLoader(n,a,th,e,t+s,tg)):o.push(a,eb.glyphLoader(n,a))},o):function(e,t,r,n){for(var a=new eb.GlyphSet(n),o=0;o<r.length-1;o+=1){var s=r[o];s!==r[o+1]?a.push(o,eb.ttfGlyphLoader(n,o,th,e,t+s,tg)):a.push(o,eb.glyphLoader(n,o))}return a}(e,t,r,n)}};function tm(e){this.font=e,this.getCommands=function(e){return tv.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function ty(e){return e}function tb(e){return Math.sign(e)*Math.round(Math.abs(e))}function tx(e){return Math.sign(e)*Math.round(Math.abs(2*e))/2}function tS(e){return Math.sign(e)*(Math.round(Math.abs(e)+.5)-.5)}function tT(e){return Math.sign(e)*Math.ceil(Math.abs(e))}function tk(e){return Math.sign(e)*Math.floor(Math.abs(e))}var tU=function(e){var t=this.srPeriod,r=this.srPhase,n=this.srThreshold,a=1;return(e<0&&(e=-e,a=-1),e+=n-r,(e=Math.trunc(e/t)*t+r)<0)?r*a:e*a},tO={x:1,y:0,axis:"x",distance:function(e,t,r,n){return(r?e.xo:e.x)-(n?t.xo:t.x)},interpolate:function(e,t,r,n){var a,o,s,i,u,p,l;if(!n||n===this){if(a=e.xo-t.xo,o=e.xo-r.xo,u=t.x-t.xo,p=r.x-r.xo,0===(l=(s=Math.abs(a))+(i=Math.abs(o)))){e.x=e.xo+(u+p)/2;return}e.x=e.xo+(u*i+p*s)/l;return}if(a=n.distance(e,t,!0,!0),o=n.distance(e,r,!0,!0),u=n.distance(t,t,!1,!0),p=n.distance(r,r,!1,!0),0===(l=(s=Math.abs(a))+(i=Math.abs(o)))){tO.setRelative(e,e,(u+p)/2,n,!0);return}tO.setRelative(e,e,(u*i+p*s)/l,n,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(e,t,r,n,a){if(!n||n===this){e.x=(a?t.xo:t.x)+r;return}var o=a?t.xo:t.x,s=a?t.yo:t.y,i=o+r*n.x,u=s+r*n.y;e.x=i+(e.y-u)/n.normalSlope},slope:0,touch:function(e){e.xTouched=!0},touched:function(e){return e.xTouched},untouch:function(e){e.xTouched=!1}},tE={x:0,y:1,axis:"y",distance:function(e,t,r,n){return(r?e.yo:e.y)-(n?t.yo:t.y)},interpolate:function(e,t,r,n){var a,o,s,i,u,p,l;if(!n||n===this){if(a=e.yo-t.yo,o=e.yo-r.yo,u=t.y-t.yo,p=r.y-r.yo,0===(l=(s=Math.abs(a))+(i=Math.abs(o)))){e.y=e.yo+(u+p)/2;return}e.y=e.yo+(u*i+p*s)/l;return}if(a=n.distance(e,t,!0,!0),o=n.distance(e,r,!0,!0),u=n.distance(t,t,!1,!0),p=n.distance(r,r,!1,!0),0===(l=(s=Math.abs(a))+(i=Math.abs(o)))){tE.setRelative(e,e,(u+p)/2,n,!0);return}tE.setRelative(e,e,(u*i+p*s)/l,n,!0)},normalSlope:0,setRelative:function(e,t,r,n,a){if(!n||n===this){e.y=(a?t.yo:t.y)+r;return}var o=a?t.xo:t.x,s=a?t.yo:t.y,i=o+r*n.x,u=s+r*n.y;e.y=u+n.normalSlope*(e.x-i)},slope:Number.POSITIVE_INFINITY,touch:function(e){e.yTouched=!0},touched:function(e){return e.yTouched},untouch:function(e){e.yTouched=!1}};function tR(e,t){this.x=e,this.y=t,this.axis=void 0,this.slope=t/e,this.normalSlope=-e/t,Object.freeze(this)}function tC(e,t){var r=Math.sqrt(e*e+t*t);return(e/=r,t/=r,1===e&&0===t)?tO:0===e&&1===t?tE:new tR(e,t)}function tL(e,t,r,n){this.x=this.xo=Math.round(64*e)/64,this.y=this.yo=Math.round(64*t)/64,this.lastPointOfContour=r,this.onCurve=n,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Object.freeze(tO),Object.freeze(tE),tR.prototype.distance=function(e,t,r,n){return this.x*tO.distance(e,t,r,n)+this.y*tE.distance(e,t,r,n)},tR.prototype.interpolate=function(e,t,r,n){var a,o,s,i,u,p,l;if(s=n.distance(e,t,!0,!0),i=n.distance(e,r,!0,!0),a=n.distance(t,t,!1,!0),o=n.distance(r,r,!1,!0),0===(l=(u=Math.abs(s))+(p=Math.abs(i)))){this.setRelative(e,e,(a+o)/2,n,!0);return}this.setRelative(e,e,(a*p+o*u)/l,n,!0)},tR.prototype.setRelative=function(e,t,r,n,a){n=n||this;var o=a?t.xo:t.x,s=a?t.yo:t.y,i=o+r*n.x,u=s+r*n.y,p=n.normalSlope,l=this.slope,c=e.x,h=e.y;e.x=(l*c-p*i+u-h)/(l-p),e.y=l*(e.x-c)+h},tR.prototype.touch=function(e){e.xTouched=!0,e.yTouched=!0},tL.prototype.nextTouched=function(e){for(var t=this.nextPointOnContour;!e.touched(t)&&t!==this;)t=t.nextPointOnContour;return t},tL.prototype.prevTouched=function(e){for(var t=this.prevPointOnContour;!e.touched(t)&&t!==this;)t=t.prevPointOnContour;return t};var tD=Object.freeze(new tL(0,0)),tw={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function tI(e,t){switch(this.env=e,this.stack=[],this.prog=t,e){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=tO,this.round=tb}}function tM(e){for(var t=e.tZone=Array(e.gZone.length),r=0;r<t.length;r++)t[r]=new tL(0,0)}function tG(e,t){var r,n=e.prog,a=e.ip,o=1;do if(88===(r=n[++a]))o++;else if(89===r)o--;else if(64===r)a+=n[a+1]+1;else if(65===r)a+=2*n[a+1]+1;else if(r>=176&&r<=183)a+=r-176+1;else if(r>=184&&r<=191)a+=(r-184+1)*2;else if(t&&1===o&&27===r)break;while(o>0);e.ip=a}function tB(e,t){exports.DEBUG&&console.log(t.step,"SVTCA["+e.axis+"]"),t.fv=t.pv=t.dpv=e}function tF(e,t){exports.DEBUG&&console.log(t.step,"SPVTCA["+e.axis+"]"),t.pv=t.dpv=e}function tA(e,t){exports.DEBUG&&console.log(t.step,"SFVTCA["+e.axis+"]"),t.fv=e}function tP(e,t){var r,n,a=t.stack,o=a.pop(),s=a.pop(),i=t.z2[o],u=t.z1[s];exports.DEBUG&&console.log("SPVTL["+e+"]",o,s),e?(r=i.y-u.y,n=u.x-i.x):(r=u.x-i.x,n=u.y-i.y),t.pv=t.dpv=tC(r,n)}function tN(e,t){var r,n,a=t.stack,o=a.pop(),s=a.pop(),i=t.z2[o],u=t.z1[s];exports.DEBUG&&console.log("SFVTL["+e+"]",o,s),e?(r=i.y-u.y,n=u.x-i.x):(r=u.x-i.x,n=u.y-i.y),t.fv=tC(r,n)}function tH(e){exports.DEBUG&&console.log(e.step,"POP[]"),e.stack.pop()}function tz(e,t){var r=t.stack.pop(),n=t.z0[r],a=t.fv,o=t.pv;exports.DEBUG&&console.log(t.step,"MDAP["+e+"]",r);var s=o.distance(n,tD);e&&(s=t.round(s)),a.setRelative(n,tD,s,o),a.touch(n),t.rp0=t.rp1=r}function tW(e,t){var r,n,a,o=t.z2,s=o.length-2;exports.DEBUG&&console.log(t.step,"IUP["+e.axis+"]");for(var i=0;i<s;i++)r=o[i],e.touched(r)||(n=r.prevTouched(e))===r||(n===(a=r.nextTouched(e))&&e.setRelative(r,r,e.distance(n,n,!1,!0),e,!0),e.interpolate(r,n,a,e))}function tq(e,t){for(var r=t.stack,n=e?t.rp1:t.rp2,a=(e?t.z0:t.z1)[n],o=t.fv,s=t.pv,i=t.loop,u=t.z2;i--;){var p=r.pop(),l=u[p],c=s.distance(a,a,!1,!0);o.setRelative(l,l,c,s),o.touch(l),exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-i)+": ":"")+"SHP["+(e?"rp1":"rp2")+"]",p)}t.loop=1}function t_(e,t){var r=t.stack,n=e?t.rp1:t.rp2,a=(e?t.z0:t.z1)[n],o=t.fv,s=t.pv,i=r.pop(),u=t.z2[t.contours[i]],p=u;exports.DEBUG&&console.log(t.step,"SHC["+e+"]",i);var l=s.distance(a,a,!1,!0);do p!==a&&o.setRelative(p,p,l,s),p=p.nextPointOnContour;while(p!==u)}function tX(e,t){var r,n,a=t.stack,o=e?t.rp1:t.rp2,s=(e?t.z0:t.z1)[o],i=t.fv,u=t.pv,p=a.pop();switch(exports.DEBUG&&console.log(t.step,"SHZ["+e+"]",p),p){case 0:r=t.tZone;break;case 1:r=t.gZone;break;default:throw Error("Invalid zone")}for(var l=u.distance(s,s,!1,!0),c=r.length-2,h=0;h<c;h++)n=r[h],i.setRelative(n,n,l,u)}function tV(e,t){var r=t.stack,n=r.pop()/64,a=r.pop(),o=t.z1[a],s=t.z0[t.rp0],i=t.fv,u=t.pv;i.setRelative(o,s,n,u),i.touch(o),exports.DEBUG&&console.log(t.step,"MSIRP["+e+"]",n,a),t.rp1=t.rp0,t.rp2=a,e&&(t.rp0=a)}function tY(e,t){var r=t.stack,n=r.pop(),a=r.pop(),o=t.z0[a],s=t.fv,i=t.pv,u=t.cvt[n];exports.DEBUG&&console.log(t.step,"MIAP["+e+"]",n,"(",u,")",a);var p=i.distance(o,tD);e&&(Math.abs(p-u)<t.cvCutIn&&(p=u),p=t.round(p)),s.setRelative(o,tD,p,i),0===t.zp0&&(o.xo=o.x,o.yo=o.y),s.touch(o),t.rp0=t.rp1=a}function tj(e,t){var r=t.stack,n=r.pop(),a=t.z2[n];exports.DEBUG&&console.log(t.step,"GC["+e+"]",n),r.push(64*t.dpv.distance(a,tD,e,!1))}function tZ(e,t){var r=t.stack,n=r.pop(),a=r.pop(),o=t.z1[n],s=t.z0[a],i=t.dpv.distance(s,o,e,e);exports.DEBUG&&console.log(t.step,"MD["+e+"]",n,a,"->",i),t.stack.push(Math.round(64*i))}function tQ(e,t){var r=t.stack,n=r.pop(),a=t.fv,o=t.pv,s=t.ppem,i=t.deltaBase+(e-1)*16,u=t.deltaShift,p=t.z0;exports.DEBUG&&console.log(t.step,"DELTAP["+e+"]",n,r);for(var l=0;l<n;l++){var c=r.pop(),h=r.pop();if(i+((240&h)>>4)===s){var f=(15&h)-8;f>=0&&f++,exports.DEBUG&&console.log(t.step,"DELTAPFIX",c,"by",f*u);var d=p[c];a.setRelative(d,d,f*u,o)}}}function tK(e,t){var r=t.stack,n=r.pop();exports.DEBUG&&console.log(t.step,"ROUND[]"),r.push(64*t.round(n/64))}function tJ(e,t){var r=t.stack,n=r.pop(),a=t.ppem,o=t.deltaBase+(e-1)*16,s=t.deltaShift;exports.DEBUG&&console.log(t.step,"DELTAC["+e+"]",n,r);for(var i=0;i<n;i++){var u=r.pop(),p=r.pop();if(o+((240&p)>>4)===a){var l=(15&p)-8;l>=0&&l++;var c=l*s;exports.DEBUG&&console.log(t.step,"DELTACFIX",u,"by",c),t.cvt[u]+=c}}}function t$(e,t){var r,n,a=t.stack,o=a.pop(),s=a.pop(),i=t.z2[o],u=t.z1[s];exports.DEBUG&&console.log(t.step,"SDPVTL["+e+"]",o,s),e?(r=i.y-u.y,n=u.x-i.x):(r=u.x-i.x,n=u.y-i.y),t.dpv=tC(r,n)}function t0(e,t){var r=t.stack,n=t.prog,a=t.ip;exports.DEBUG&&console.log(t.step,"PUSHB["+e+"]");for(var o=0;o<e;o++)r.push(n[++a]);t.ip=a}function t1(e,t){var r=t.ip,n=t.prog,a=t.stack;exports.DEBUG&&console.log(t.ip,"PUSHW["+e+"]");for(var o=0;o<e;o++){var s=n[++r]<<8|n[++r];32768&s&&(s=-((65535^s)+1)),a.push(s)}t.ip=r}function t2(e,t,r,n,a,o){var s,i,u,p,l=o.stack,c=e&&l.pop(),h=l.pop(),f=o.rp0,d=o.z0[f],g=o.z1[h],v=o.minDis,m=o.fv,y=o.dpv;u=(i=s=y.distance(g,d,!0,!0))>=0?1:-1,i=Math.abs(i),e&&(p=o.cvt[c],n&&Math.abs(i-p)<o.cvCutIn&&(i=p)),r&&i<v&&(i=v),n&&(i=o.round(i)),m.setRelative(g,d,u*i,y),m.touch(g),exports.DEBUG&&console.log(o.step,(e?"MIRP[":"MDRP[")+(t?"M":"m")+(r?">":"_")+(n?"R":"_")+(0===a?"Gr":1===a?"Bl":2===a?"Wh":"")+"]",e?c+"("+o.cvt[c]+","+p+")":"",h,"(d =",s,"->",u*i,")"),o.rp1=o.rp0,o.rp2=h,t&&(o.rp0=h)}function t6(e){this.char=e,this.state={},this.activeState=null}function t3(e,t,r){this.contextName=r,this.startIndex=e,this.endOffset=t}function t5(e,t,r){this.contextName=e,this.openRange=null,this.ranges=[],this.checkStart=t,this.checkEnd=r}function t4(e,t){this.context=e,this.index=t,this.length=e.length,this.current=e[t],this.backtrack=e.slice(0,t),this.lookahead=e.slice(t+1)}function t8(e){this.eventId=e,this.subscribers=[]}function t7(e){var t=this,r=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];r.forEach(function(e){Object.defineProperty(t.events,e,{value:new t8(e)})}),e&&r.forEach(function(r){var n=e[r];"function"==typeof n&&t.events[r].subscribe(n)}),["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"].forEach(function(e){t.events[e].subscribe(t.updateContextsRanges)})}function t9(e){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],t7.call(this,e)}function re(e){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e)}function rt(e){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e)}function rr(e){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e)}function rn(e){return/[A-z]/.test(e)}function ra(e){this.font=e,this.features={}}function ro(e){this.id=e.id,this.tag=e.tag,this.substitution=e.substitution}function rs(e,t){if(!e)return -1;switch(t.format){case 1:return t.glyphs.indexOf(e);case 2:for(var r=t.ranges,n=0;n<r.length;n++){var a=r[n];if(e>=a.start&&e<=a.end){var o=e-a.start;return a.index+o}}}return -1}function ri(e,t){return -1===rs(e,t.coverage)?null:e+t.deltaGlyphId}function ru(e,t){var r=rs(e,t.coverage);return -1===r?null:t.substitute[r]}function rp(e,t){for(var r=[],n=0;n<e.length;n++){var a=e[n],o=t.current,s=rs(o=Array.isArray(o)?o[0]:o,a);-1!==s&&r.push(s)}return r.length!==e.length?-1:r}function rl(e,t){var r=t.inputCoverage.length+t.lookaheadCoverage.length+t.backtrackCoverage.length;if(e.context.length<r)return[];var n=rp(t.inputCoverage,e);if(-1===n)return[];var a=t.inputCoverage.length-1;if(e.lookahead.length<t.lookaheadCoverage.length)return[];for(var o=e.lookahead.slice(a);o.length&&rr(o[0].char);)o.shift();var s=new t4(o,0),i=rp(t.lookaheadCoverage,s),u=[].concat(e.backtrack);for(u.reverse();u.length&&rr(u[0].char);)u.shift();if(u.length<t.backtrackCoverage.length)return[];var p=new t4(u,0),l=rp(t.backtrackCoverage,p),c=n.length===t.inputCoverage.length&&i.length===t.lookaheadCoverage.length&&l.length===t.backtrackCoverage.length,h=[];if(c)for(var f=0;f<t.lookupRecords.length;f++)for(var d=t.lookupRecords[f].lookupListIndex,g=this.getLookupByIndex(d),v=0;v<g.subtables.length;v++){var m=g.subtables[v],y=this.getLookupMethod(g,m);if("12"===this.getSubstitutionType(g,m))for(var b=0;b<n.length;b++){var x=y(e.get(b));x&&h.push(x)}}return h}function rc(e,t){var r,n=rs(e.current,t.coverage);if(-1===n)return null;for(var a=t.ligatureSets[n],o=0;o<a.length;o++){r=a[o];for(var s=0;s<r.components.length&&e.lookahead[s]===r.components[s];s++)if(s===r.components.length-1)return r}return null}function rh(e,t){var r=rs(e,t.coverage);return -1===r?null:t.sequences[r]}tm.prototype.exec=function(e,t){if("number"!=typeof t)throw Error("Point size is not a number!");if(!(this._errorState>2)){var r=this.font,n=this._prepState;if(!n||n.ppem!==t){var a=this._fpgmState;if(!a){tI.prototype=tw,(a=this._fpgmState=new tI("fpgm",r.tables.fpgm)).funcs=[],a.font=r,exports.DEBUG&&(console.log("---EXEC FPGM---"),a.step=-1);try{i(a)}catch(e){console.log("Hinting error in FPGM:"+e),this._errorState=3;return}}tI.prototype=a,(n=this._prepState=new tI("prep",r.tables.prep)).ppem=t;var o=r.tables.cvt;if(o)for(var s=n.cvt=Array(o.length),p=t/r.unitsPerEm,l=0;l<o.length;l++)s[l]=o[l]*p;else n.cvt=[];exports.DEBUG&&(console.log("---EXEC PREP---"),n.step=-1);try{i(n)}catch(e){this._errorState<2&&console.log("Hinting error in PREP:"+e),this._errorState=2}}if(!(this._errorState>1))try{return u(e,n)}catch(e){this._errorState<1&&(console.log("Hinting error:"+e),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}},u=function(e,t){var r,n,a,o=t.ppem/t.font.unitsPerEm,s=e.components;if(tI.prototype=t,s){var u=t.font;n=[],r=[];for(var l=0;l<s.length;l++){var c=s[l],h=u.glyphs.get(c.glyphIndex);a=new tI("glyf",h.instructions),exports.DEBUG&&(console.log("---EXEC COMP "+l+"---"),a.step=-1),p(h,a,o,o);for(var f=Math.round(c.dx*o),d=Math.round(c.dy*o),g=a.gZone,v=a.contours,m=0;m<g.length;m++){var y=g[m];y.xTouched=y.yTouched=!1,y.xo=y.x=y.x+f,y.yo=y.y=y.y+d}var b=n.length;n.push.apply(n,g);for(var x=0;x<v.length;x++)r.push(v[x]+b)}e.instructions&&!a.inhibitGridFit&&((a=new tI("glyf",e.instructions)).gZone=a.z0=a.z1=a.z2=n,a.contours=r,n.push(new tL(0,0),new tL(Math.round(e.advanceWidth*o),0)),exports.DEBUG&&(console.log("---EXEC COMPOSITE---"),a.step=-1),i(a),n.length-=2)}else a=new tI("glyf",e.instructions),exports.DEBUG&&(console.log("---EXEC GLYPH---"),a.step=-1),p(e,a,o,o),n=a.gZone;return n},p=function(e,t,r,n){for(var a,o,s,u=e.points||[],p=u.length,l=t.gZone=t.z0=t.z1=t.z2=[],c=t.contours=[],h=0;h<p;h++)a=u[h],l[h]=new tL(a.x*r,a.y*n,a.lastPointOfContour,a.onCurve);for(var f=0;f<p;f++)a=l[f],o||(o=a,c.push(f)),a.lastPointOfContour?(a.nextPointOnContour=o,o.prevPointOnContour=a,o=void 0):(s=l[f+1],a.nextPointOnContour=s,s.prevPointOnContour=a);if(!t.inhibitGridFit){if(exports.DEBUG){console.log("PROCESSING GLYPH",t.stack);for(var d=0;d<p;d++)console.log(d,l[d].x,l[d].y)}if(l.push(new tL(0,0),new tL(Math.round(e.advanceWidth*r),0)),i(t),l.length-=2,exports.DEBUG){console.log("FINISHED GLYPH",t.stack);for(var g=0;g<p;g++)console.log(g,l[g].x,l[g].y)}}},i=function(e){var t,r=e.prog;if(r){var n=r.length;for(e.ip=0;e.ip<n;e.ip++){if(exports.DEBUG&&e.step++,!(t=s[r[e.ip]]))throw Error("unknown instruction: 0x"+Number(r[e.ip]).toString(16));t(e)}}},s=[tB.bind(void 0,tE),tB.bind(void 0,tO),tF.bind(void 0,tE),tF.bind(void 0,tO),tA.bind(void 0,tE),tA.bind(void 0,tO),tP.bind(void 0,0),tP.bind(void 0,1),tN.bind(void 0,0),tN.bind(void 0,1),function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"SPVFS[]",r,n),e.pv=e.dpv=tC(n,r)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"SPVFS[]",r,n),e.fv=tC(n,r)},function(e){var t=e.stack,r=e.pv;exports.DEBUG&&console.log(e.step,"GPV[]"),t.push(16384*r.x),t.push(16384*r.y)},function(e){var t=e.stack,r=e.fv;exports.DEBUG&&console.log(e.step,"GFV[]"),t.push(16384*r.x),t.push(16384*r.y)},function(e){e.fv=e.pv,exports.DEBUG&&console.log(e.step,"SFVTPV[]")},function(e){var t=e.stack,r=t.pop(),n=t.pop(),a=t.pop(),o=t.pop(),s=t.pop(),i=e.z0,u=e.z1,p=i[r],l=i[n],c=u[a],h=u[o],f=e.z2[s];exports.DEBUG&&console.log("ISECT[], ",r,n,a,o,s);var d=p.x,g=p.y,v=l.x,m=l.y,y=c.x,b=c.y,x=h.x,S=h.y,T=(d-v)*(b-S)-(g-m)*(y-x),k=d*m-g*v,U=y*S-b*x;f.x=(k*(y-x)-U*(d-v))/T,f.y=(k*(b-S)-U*(g-m))/T},function(e){e.rp0=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SRP0[]",e.rp0)},function(e){e.rp1=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SRP1[]",e.rp1)},function(e){e.rp2=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SRP2[]",e.rp2)},function(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZP0[]",t),e.zp0=t,t){case 0:e.tZone||tM(e),e.z0=e.tZone;break;case 1:e.z0=e.gZone;break;default:throw Error("Invalid zone pointer")}},function(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZP1[]",t),e.zp1=t,t){case 0:e.tZone||tM(e),e.z1=e.tZone;break;case 1:e.z1=e.gZone;break;default:throw Error("Invalid zone pointer")}},function(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZP2[]",t),e.zp2=t,t){case 0:e.tZone||tM(e),e.z2=e.tZone;break;case 1:e.z2=e.gZone;break;default:throw Error("Invalid zone pointer")}},function(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZPS[]",t),e.zp0=e.zp1=e.zp2=t,t){case 0:e.tZone||tM(e),e.z0=e.z1=e.z2=e.tZone;break;case 1:e.z0=e.z1=e.z2=e.gZone;break;default:throw Error("Invalid zone pointer")}},function(e){e.loop=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SLOOP[]",e.loop)},function(e){exports.DEBUG&&console.log(e.step,"RTG[]"),e.round=tb},function(e){exports.DEBUG&&console.log(e.step,"RTHG[]"),e.round=tS},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"SMD[]",t),e.minDis=t/64},function(e){exports.DEBUG&&console.log(e.step,"ELSE[]"),tG(e,!1)},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"JMPR[]",t),e.ip+=t-1},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"SCVTCI[]",t),e.cvCutIn=t/64},void 0,void 0,function(e){var t=e.stack;exports.DEBUG&&console.log(e.step,"DUP[]"),t.push(t[t.length-1])},tH,function(e){exports.DEBUG&&console.log(e.step,"CLEAR[]"),e.stack.length=0},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"SWAP[]"),t.push(r),t.push(n)},function(e){var t=e.stack;exports.DEBUG&&console.log(e.step,"DEPTH[]"),t.push(t.length)},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"CINDEX[]",r),t.push(t[t.length-r])},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"MINDEX[]",r),t.push(t.splice(t.length-r,1)[0])},void 0,void 0,void 0,function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"LOOPCALL[]",r,n);var a=e.ip,o=e.prog;e.prog=e.funcs[r];for(var s=0;s<n;s++)i(e),exports.DEBUG&&console.log(++e.step,s+1<n?"next loopcall":"done loopcall",s);e.ip=a,e.prog=o},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"CALL[]",t);var r=e.ip,n=e.prog;e.prog=e.funcs[t],i(e),e.ip=r,e.prog=n,exports.DEBUG&&console.log(++e.step,"returning from",t)},function(e){if("fpgm"!==e.env)throw Error("FDEF not allowed here");var t=e.stack,r=e.prog,n=e.ip,a=t.pop(),o=n;for(exports.DEBUG&&console.log(e.step,"FDEF[]",a);45!==r[++n];);e.ip=n,e.funcs[a]=r.slice(o+1,n)},void 0,tz.bind(void 0,0),tz.bind(void 0,1),tW.bind(void 0,tE),tW.bind(void 0,tO),tq.bind(void 0,0),tq.bind(void 0,1),t_.bind(void 0,0),t_.bind(void 0,1),tX.bind(void 0,0),tX.bind(void 0,1),function(e){for(var t=e.stack,r=e.loop,n=e.fv,a=t.pop()/64,o=e.z2;r--;){var s=t.pop(),i=o[s];exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-r)+": ":"")+"SHPIX[]",s,a),n.setRelative(i,i,a),n.touch(i)}e.loop=1},function(e){for(var t=e.stack,r=e.rp1,n=e.rp2,a=e.loop,o=e.z0[r],s=e.z1[n],i=e.fv,u=e.dpv,p=e.z2;a--;){var l=t.pop(),c=p[l];exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-a)+": ":"")+"IP[]",l,r,"<->",n),i.interpolate(c,o,s,u),i.touch(c)}e.loop=1},tV.bind(void 0,0),tV.bind(void 0,1),function(e){for(var t=e.stack,r=e.rp0,n=e.z0[r],a=e.loop,o=e.fv,s=e.pv,i=e.z1;a--;){var u=t.pop(),p=i[u];exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-a)+": ":"")+"ALIGNRP[]",u),o.setRelative(p,n,0,s),o.touch(p)}e.loop=1},function(e){exports.DEBUG&&console.log(e.step,"RTDG[]"),e.round=tx},tY.bind(void 0,0),tY.bind(void 0,1),function(e){var t=e.prog,r=e.ip,n=e.stack,a=t[++r];exports.DEBUG&&console.log(e.step,"NPUSHB[]",a);for(var o=0;o<a;o++)n.push(t[++r]);e.ip=r},function(e){var t=e.ip,r=e.prog,n=e.stack,a=r[++t];exports.DEBUG&&console.log(e.step,"NPUSHW[]",a);for(var o=0;o<a;o++){var s=r[++t]<<8|r[++t];32768&s&&(s=-((65535^s)+1)),n.push(s)}e.ip=t},function(e){var t=e.stack,r=e.store;r||(r=e.store=[]);var n=t.pop(),a=t.pop();exports.DEBUG&&console.log(e.step,"WS",n,a),r[a]=n},function(e){var t=e.stack,r=e.store,n=t.pop();exports.DEBUG&&console.log(e.step,"RS",n);var a=r&&r[n]||0;t.push(a)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"WCVTP",r,n),e.cvt[n]=r/64},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"RCVT",r),t.push(64*e.cvt[r])},tj.bind(void 0,0),tj.bind(void 0,1),void 0,tZ.bind(void 0,0),tZ.bind(void 0,1),function(e){exports.DEBUG&&console.log(e.step,"MPPEM[]"),e.stack.push(e.ppem)},void 0,function(e){exports.DEBUG&&console.log(e.step,"FLIPON[]"),e.autoFlip=!0},void 0,void 0,function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"LT[]",r,n),t.push(n<r?1:0)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"LTEQ[]",r,n),t.push(n<=r?1:0)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"GT[]",r,n),t.push(n>r?1:0)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"GTEQ[]",r,n),t.push(n>=r?1:0)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"EQ[]",r,n),t.push(r===n?1:0)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"NEQ[]",r,n),t.push(r!==n?1:0)},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"ODD[]",r),t.push(Math.trunc(r)%2?1:0)},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"EVEN[]",r),t.push(Math.trunc(r)%2?0:1)},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"IF[]",t),!t&&(tG(e,!0),exports.DEBUG&&console.log(e.step,"EIF[]"))},function(e){exports.DEBUG&&console.log(e.step,"EIF[]")},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"AND[]",r,n),t.push(r&&n?1:0)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"OR[]",r,n),t.push(r||n?1:0)},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"NOT[]",r),t.push(r?0:1)},tQ.bind(void 0,1),function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"SDB[]",t),e.deltaBase=t},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"SDS[]",t),e.deltaShift=Math.pow(.5,t)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"ADD[]",r,n),t.push(n+r)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"SUB[]",r,n),t.push(n-r)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"DIV[]",r,n),t.push(64*n/r)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"MUL[]",r,n),t.push(n*r/64)},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"ABS[]",r),t.push(Math.abs(r))},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"NEG[]",r),t.push(-r)},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"FLOOR[]",r),t.push(64*Math.floor(r/64))},function(e){var t=e.stack,r=t.pop();exports.DEBUG&&console.log(e.step,"CEILING[]",r),t.push(64*Math.ceil(r/64))},tK.bind(void 0,0),tK.bind(void 0,1),tK.bind(void 0,2),tK.bind(void 0,3),void 0,void 0,void 0,void 0,function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"WCVTF[]",r,n),e.cvt[n]=r*e.ppem/e.font.unitsPerEm},tQ.bind(void 0,2),tQ.bind(void 0,3),tJ.bind(void 0,1),tJ.bind(void 0,2),tJ.bind(void 0,3),function(e){var t,r=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SROUND[]",r),e.round=tU,192&r){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw Error("invalid SROUND value")}switch(e.srPeriod=t,48&r){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*t;break;case 32:e.srPhase=.5*t;break;case 48:e.srPhase=.75*t;break;default:throw Error("invalid SROUND value")}0==(r&=15)?e.srThreshold=0:e.srThreshold=(r/8-.5)*t},function(e){var t,r=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"S45ROUND[]",r),e.round=tU,192&r){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw Error("invalid S45ROUND value")}switch(e.srPeriod=t,48&r){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*t;break;case 32:e.srPhase=.5*t;break;case 48:e.srPhase=.75*t;break;default:throw Error("invalid S45ROUND value")}0==(r&=15)?e.srThreshold=0:e.srThreshold=(r/8-.5)*t},void 0,void 0,function(e){exports.DEBUG&&console.log(e.step,"ROFF[]"),e.round=ty},void 0,function(e){exports.DEBUG&&console.log(e.step,"RUTG[]"),e.round=tT},function(e){exports.DEBUG&&console.log(e.step,"RDTG[]"),e.round=tk},tH,tH,void 0,void 0,void 0,void 0,void 0,function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"SCANCTRL[]",t)},t$.bind(void 0,0),t$.bind(void 0,1),function(e){var t=e.stack,r=t.pop(),n=0;exports.DEBUG&&console.log(e.step,"GETINFO[]",r),1&r&&(n=35),32&r&&(n|=4096),t.push(n)},void 0,function(e){var t=e.stack,r=t.pop(),n=t.pop(),a=t.pop();exports.DEBUG&&console.log(e.step,"ROLL[]"),t.push(n),t.push(r),t.push(a)},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"MAX[]",r,n),t.push(Math.max(n,r))},function(e){var t=e.stack,r=t.pop(),n=t.pop();exports.DEBUG&&console.log(e.step,"MIN[]",r,n),t.push(Math.min(n,r))},function(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,"SCANTYPE[]",t)},function(e){var t=e.stack.pop(),r=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"INSTCTRL[]",t,r),t){case 1:e.inhibitGridFit=!!r;return;case 2:e.ignoreCvt=!!r;return;default:throw Error("invalid INSTCTRL[] selector")}},void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,t0.bind(void 0,1),t0.bind(void 0,2),t0.bind(void 0,3),t0.bind(void 0,4),t0.bind(void 0,5),t0.bind(void 0,6),t0.bind(void 0,7),t0.bind(void 0,8),t1.bind(void 0,1),t1.bind(void 0,2),t1.bind(void 0,3),t1.bind(void 0,4),t1.bind(void 0,5),t1.bind(void 0,6),t1.bind(void 0,7),t1.bind(void 0,8),t2.bind(void 0,0,0,0,0,0),t2.bind(void 0,0,0,0,0,1),t2.bind(void 0,0,0,0,0,2),t2.bind(void 0,0,0,0,0,3),t2.bind(void 0,0,0,0,1,0),t2.bind(void 0,0,0,0,1,1),t2.bind(void 0,0,0,0,1,2),t2.bind(void 0,0,0,0,1,3),t2.bind(void 0,0,0,1,0,0),t2.bind(void 0,0,0,1,0,1),t2.bind(void 0,0,0,1,0,2),t2.bind(void 0,0,0,1,0,3),t2.bind(void 0,0,0,1,1,0),t2.bind(void 0,0,0,1,1,1),t2.bind(void 0,0,0,1,1,2),t2.bind(void 0,0,0,1,1,3),t2.bind(void 0,0,1,0,0,0),t2.bind(void 0,0,1,0,0,1),t2.bind(void 0,0,1,0,0,2),t2.bind(void 0,0,1,0,0,3),t2.bind(void 0,0,1,0,1,0),t2.bind(void 0,0,1,0,1,1),t2.bind(void 0,0,1,0,1,2),t2.bind(void 0,0,1,0,1,3),t2.bind(void 0,0,1,1,0,0),t2.bind(void 0,0,1,1,0,1),t2.bind(void 0,0,1,1,0,2),t2.bind(void 0,0,1,1,0,3),t2.bind(void 0,0,1,1,1,0),t2.bind(void 0,0,1,1,1,1),t2.bind(void 0,0,1,1,1,2),t2.bind(void 0,0,1,1,1,3),t2.bind(void 0,1,0,0,0,0),t2.bind(void 0,1,0,0,0,1),t2.bind(void 0,1,0,0,0,2),t2.bind(void 0,1,0,0,0,3),t2.bind(void 0,1,0,0,1,0),t2.bind(void 0,1,0,0,1,1),t2.bind(void 0,1,0,0,1,2),t2.bind(void 0,1,0,0,1,3),t2.bind(void 0,1,0,1,0,0),t2.bind(void 0,1,0,1,0,1),t2.bind(void 0,1,0,1,0,2),t2.bind(void 0,1,0,1,0,3),t2.bind(void 0,1,0,1,1,0),t2.bind(void 0,1,0,1,1,1),t2.bind(void 0,1,0,1,1,2),t2.bind(void 0,1,0,1,1,3),t2.bind(void 0,1,1,0,0,0),t2.bind(void 0,1,1,0,0,1),t2.bind(void 0,1,1,0,0,2),t2.bind(void 0,1,1,0,0,3),t2.bind(void 0,1,1,0,1,0),t2.bind(void 0,1,1,0,1,1),t2.bind(void 0,1,1,0,1,2),t2.bind(void 0,1,1,0,1,3),t2.bind(void 0,1,1,1,0,0),t2.bind(void 0,1,1,1,0,1),t2.bind(void 0,1,1,1,0,2),t2.bind(void 0,1,1,1,0,3),t2.bind(void 0,1,1,1,1,0),t2.bind(void 0,1,1,1,1,1),t2.bind(void 0,1,1,1,1,2),t2.bind(void 0,1,1,1,1,3)],t6.prototype.setState=function(e,t){return this.state[e]=t,this.activeState={key:e,value:this.state[e]},this.activeState},t6.prototype.getState=function(e){return this.state[e]||null},t9.prototype.inboundIndex=function(e){return e>=0&&e<this.tokens.length},t9.prototype.composeRUD=function(e){var t=this,r=e.map(function(e){return t[e[0]].apply(t,e.slice(1).concat(!0))}),n=function(e){return"object"==typeof e&&e.hasOwnProperty("FAIL")};if(r.every(n))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:r.filter(n)};this.dispatch("composeRUD",[r.filter(function(e){return!n(e)})])},t9.prototype.replaceRange=function(e,t,r,n){t=null!==t?t:this.tokens.length;var a=r.every(function(e){return e instanceof t6});if(!(!isNaN(e)&&this.inboundIndex(e))||!a)return{FAIL:"replaceRange: invalid tokens or startIndex."};var o=this.tokens.splice.apply(this.tokens,[e,t].concat(r));return n||this.dispatch("replaceToken",[e,t,r]),[o,r]},t9.prototype.replaceToken=function(e,t,r){if(!(!isNaN(e)&&this.inboundIndex(e))||!(t instanceof t6))return{FAIL:"replaceToken: invalid token or index."};var n=this.tokens.splice(e,1,t);return r||this.dispatch("replaceToken",[e,t]),[n[0],t]},t9.prototype.removeRange=function(e,t,r){t=isNaN(t)?this.tokens.length:t;var n=this.tokens.splice(e,t);return r||this.dispatch("removeRange",[n,e,t]),n},t9.prototype.removeToken=function(e,t){if(!(!isNaN(e)&&this.inboundIndex(e)))return{FAIL:"removeToken: invalid token index."};var r=this.tokens.splice(e,1);return t||this.dispatch("removeToken",[r,e]),r},t9.prototype.insertToken=function(e,t,r){return e.every(function(e){return e instanceof t6})?(this.tokens.splice.apply(this.tokens,[t,0].concat(e)),r||this.dispatch("insertToken",[e,t]),e):{FAIL:"insertToken: invalid token(s)."}},t9.prototype.registerModifier=function(e,t,r){this.events.newToken.subscribe(function(n,a){if(null===t||!0===t.apply(this,[n,a])){var o=r.apply(this,[n,a]);n.setState(e,o)}}),this.registeredModifiers.push(e)},t8.prototype.subscribe=function(e){return"function"==typeof e?this.subscribers.push(e)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}},t8.prototype.unsubscribe=function(e){this.subscribers.splice(e,1)},t4.prototype.setCurrentIndex=function(e){this.index=e,this.current=this.context[e],this.backtrack=this.context.slice(0,e),this.lookahead=this.context.slice(e+1)},t4.prototype.get=function(e){switch(!0){case 0===e:return this.current;case e<0&&Math.abs(e)<=this.backtrack.length:return this.backtrack.slice(e)[0];case e>0&&e<=this.lookahead.length:return this.lookahead[e-1];default:return null}},t9.prototype.rangeToText=function(e){if(e instanceof t3)return this.getRangeTokens(e).map(function(e){return e.char}).join("")},t9.prototype.getText=function(){return this.tokens.map(function(e){return e.char}).join("")},t9.prototype.getContext=function(e){return this.registeredContexts[e]||null},t9.prototype.on=function(e,t){var r=this.events[e];return r?r.subscribe(t):null},t9.prototype.dispatch=function(e,t){var r=this,n=this.events[e];n instanceof t8&&n.subscribers.forEach(function(e){e.apply(r,t||[])})},t9.prototype.registerContextChecker=function(e,t,r){if(this.getContext(e))return{FAIL:"context name '"+e+"' is already registered."};if("function"!=typeof t)return{FAIL:"missing context start check."};if("function"!=typeof r)return{FAIL:"missing context end check."};var n=new t5(e,t,r);return this.registeredContexts[e]=n,this.contextCheckers.push(n),n},t9.prototype.getRangeTokens=function(e){var t=e.startIndex+e.endOffset;return[].concat(this.tokens.slice(e.startIndex,t))},t9.prototype.getContextRanges=function(e){var t=this.getContext(e);return t?t.ranges:{FAIL:"context checker '"+e+"' is not registered."}},t9.prototype.resetContextsRanges=function(){var e=this.registeredContexts;for(var t in e)e.hasOwnProperty(t)&&(e[t].ranges=[])},t9.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var e=this.tokens.map(function(e){return e.char}),t=0;t<e.length;t++){var r=new t4(e,t);this.runContextCheck(r)}this.dispatch("updateContextsRanges",[this.registeredContexts])},t9.prototype.setEndOffset=function(e,t){var r=new t3(this.getContext(t).openRange.startIndex,e,t),n=this.getContext(t).ranges;return r.rangeId=t+"."+n.length,n.push(r),this.getContext(t).openRange=null,r},t9.prototype.runContextCheck=function(e){var t=this,r=e.index;this.contextCheckers.forEach(function(n){var a=n.contextName,o=t.getContext(a).openRange;if(!o&&n.checkStart(e)&&(o=new t3(r,null,a),t.getContext(a).openRange=o,t.dispatch("contextStart",[a,r])),o&&n.checkEnd(e)){var s=r-o.startIndex+1,i=t.setEndOffset(s,a);t.dispatch("contextEnd",[a,i])}})},t9.prototype.tokenize=function(e){this.tokens=[],this.resetContextsRanges();var t=Array.from(e);this.dispatch("start");for(var r=0;r<t.length;r++){var n=t[r],a=new t4(t,r);this.dispatch("next",[a]),this.runContextCheck(a);var o=new t6(n);this.tokens.push(o),this.dispatch("newToken",[o,a])}return this.dispatch("end",[this.tokens]),this.tokens},ra.prototype.getDefaultScriptFeaturesIndexes=function(){for(var e=this.font.tables.gsub.scripts,t=0;t<e.length;t++){var r=e[t];if("DFLT"===r.tag)return r.script.defaultLangSys.featureIndexes}return[]},ra.prototype.getScriptFeaturesIndexes=function(e){if(!this.font.tables.gsub)return[];if(!e)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,r=0;r<t.length;r++){var n=t[r];if(n.tag===e&&n.script.defaultLangSys)return n.script.defaultLangSys.featureIndexes;var a=n.langSysRecords;if(a)for(var o=0;o<a.length;o++){var s=a[o];if(s.tag===e)return s.langSys.featureIndexes}}return this.getDefaultScriptFeaturesIndexes()},ra.prototype.mapTagsToFeatures=function(e,t){for(var r={},n=0;n<e.length;n++){var a=e[n].tag,o=e[n].feature;r[a]=o}this.features[t].tags=r},ra.prototype.getScriptFeatures=function(e){var t=this.features[e];if(this.features.hasOwnProperty(e))return t;var r=this.getScriptFeaturesIndexes(e);if(!r)return null;var n=this.font.tables.gsub;return t=r.map(function(e){return n.features[e]}),this.features[e]=t,this.mapTagsToFeatures(t,e),t},ra.prototype.getSubstitutionType=function(e,t){return e.lookupType.toString()+t.substFormat.toString()},ra.prototype.getLookupMethod=function(e,t){var r=this;switch(this.getSubstitutionType(e,t)){case"11":return function(e){return ri.apply(r,[e,t])};case"12":return function(e){return ru.apply(r,[e,t])};case"63":return function(e){return rl.apply(r,[e,t])};case"41":return function(e){return rc.apply(r,[e,t])};case"21":return function(e){return rh.apply(r,[e,t])};default:throw Error("lookupType: "+e.lookupType+" - substFormat: "+t.substFormat+" is not yet supported")}},ra.prototype.lookupFeature=function(e){var t=e.contextParams,r=t.index,n=this.getFeature({tag:e.tag,script:e.script});if(!n)return Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+e.tag+"' for script '"+e.script+"'.");for(var a=this.getFeatureLookups(n),o=[].concat(t.context),s=0;s<a.length;s++)for(var i=a[s],u=this.getLookupSubtables(i),p=0;p<u.length;p++){var l=u[p],c=this.getSubstitutionType(i,l),h=this.getLookupMethod(i,l),f=void 0;switch(c){case"11":(f=h(t.current))&&o.splice(r,1,new ro({id:11,tag:e.tag,substitution:f}));break;case"12":(f=h(t.current))&&o.splice(r,1,new ro({id:12,tag:e.tag,substitution:f}));break;case"63":Array.isArray(f=h(t))&&f.length&&o.splice(r,1,new ro({id:63,tag:e.tag,substitution:f}));break;case"41":(f=h(t))&&o.splice(r,1,new ro({id:41,tag:e.tag,substitution:f}));break;case"21":(f=h(t.current))&&o.splice(r,1,new ro({id:21,tag:e.tag,substitution:f}))}t=new t4(o,r),(!Array.isArray(f)||f.length)&&(f=null)}return o.length?o:null},ra.prototype.supports=function(e){if(!e.script)return!1;this.getScriptFeatures(e.script);var t=this.features.hasOwnProperty(e.script);if(!e.tag)return t;var r=this.features[e.script].some(function(t){return t.tag===e.tag});return t&&r},ra.prototype.getLookupSubtables=function(e){return e.subtables||null},ra.prototype.getLookupByIndex=function(e){return this.font.tables.gsub.lookups[e]||null},ra.prototype.getFeatureLookups=function(e){return e.lookupListIndexes.map(this.getLookupByIndex.bind(this))},ra.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};var rf={11:function(e,t,r){t[r].setState(e.tag,e.substitution)},12:function(e,t,r){t[r].setState(e.tag,e.substitution)},63:function(e,t,r){e.substitution.forEach(function(n,a){t[r+a].setState(e.tag,n)})},41:function(e,t,r){var n=t[r];n.setState(e.tag,e.substitution.ligGlyph);for(var a=e.substitution.components.length,o=0;o<a;o++)(n=t[r+o+1]).setState("deleted",!0)}};function rd(e,t,r){e instanceof ro&&rf[e.id]&&rf[e.id](e,t,r)}function rg(e){var t=this,r="arab",n=this.featuresTags[r],a=this.tokenizer.getRangeTokens(e);if(1!==a.length){var o=new t4(a.map(function(e){return e.getState("glyphIndex")}),0),s=new t4(a.map(function(e){return e.char}),0);a.forEach(function(e,i){if(!rr(e.char)){o.setCurrentIndex(i),s.setCurrentIndex(i);var u,p=0;switch(function(e){for(var t=[].concat(e.backtrack),r=t.length-1;r>=0;r--){var n=t[r],a=rt(n),o=rr(n);if(!a&&!o)return!0;if(a)break}return!1}(s)&&(p|=1),function(e){if(rt(e.current))return!1;for(var t=0;t<e.lookahead.length;t++)if(!rr(e.lookahead[t]))return!0;return!1}(s)&&(p|=2),p){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi"}if(-1!==n.indexOf(u)){var l=t.query.lookupFeature({tag:u,script:r,contextParams:o});if(l instanceof Error)return console.info(l.message);l.forEach(function(e,t){e instanceof ro&&(rd(e,a,t),o.context[t]=e.substitution)})}}})}}function rv(e,t){return new t4(e.map(function(e){return e.activeState.value}),t||0)}function rm(e){var t=this,r=this.tokenizer.getRangeTokens(e),n=rv(r);n.context.forEach(function(e,a){n.setCurrentIndex(a);var o=t.query.lookupFeature({tag:"rlig",script:"arab",contextParams:n});o.length&&(o.forEach(function(e){return rd(e,r,a)}),n=rv(r))})}function ry(e,t){return new t4(e.map(function(e){return e.activeState.value}),t||0)}function rb(e){var t=this,r=this.tokenizer.getRangeTokens(e),n=ry(r);n.context.forEach(function(e,a){n.setCurrentIndex(a);var o=t.query.lookupFeature({tag:"liga",script:"latn",contextParams:n});o.length&&(o.forEach(function(e){return rd(e,r,a)}),n=ry(r))})}function rx(e){this.baseDir=e||"ltr",this.tokenizer=new t9,this.featuresTags={}}function rS(e){var t=this.contextChecks[e+"Check"];return this.tokenizer.registerContextChecker(e,t.startCheck,t.endCheck)}function rT(){return rS.call(this,"latinWord"),rS.call(this,"arabicWord"),rS.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function rk(){var e=this;this.tokenizer.getContextRanges("arabicSentence").forEach(function(t){var r=e.tokenizer.getRangeTokens(t);e.tokenizer.replaceRange(t.startIndex,t.endOffset,r.reverse())})}function rU(){if(-1===this.tokenizer.registeredModifiers.indexOf("glyphIndex"))throw Error("glyphIndex modifier is required to apply arabic presentation features.")}function rO(){var e=this;this.featuresTags.hasOwnProperty("arab")&&(rU.call(this),this.tokenizer.getContextRanges("arabicWord").forEach(function(t){rg.call(e,t)}))}function rE(){var e=this,t="arab";this.featuresTags.hasOwnProperty(t)&&-1!==this.featuresTags[t].indexOf("rlig")&&(rU.call(this),this.tokenizer.getContextRanges("arabicWord").forEach(function(t){rm.call(e,t)}))}function rR(){var e=this,t="latn";this.featuresTags.hasOwnProperty(t)&&-1!==this.featuresTags[t].indexOf("liga")&&(rU.call(this),this.tokenizer.getContextRanges("latinWord").forEach(function(t){rb.call(e,t)}))}function rC(e){(e=e||{}).tables=e.tables||{},e.empty||(tl(e.familyName,"When creating a new Font object, familyName is required."),tl(e.styleName,"When creating a new Font object, styleName is required."),tl(e.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),tl(e.ascender,"When creating a new Font object, ascender is required."),tl(e.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:e.familyName||" "},fontSubfamily:{en:e.styleName||" "},fullName:{en:e.fullName||e.familyName+" "+e.styleName},postScriptName:{en:e.postScriptName||(e.familyName+e.styleName).replace(/\s/g,"")},designer:{en:e.designer||" "},designerURL:{en:e.designerURL||" "},manufacturer:{en:e.manufacturer||" "},manufacturerURL:{en:e.manufacturerURL||" "},license:{en:e.license||" "},licenseURL:{en:e.licenseURL||" "},version:{en:e.version||"Version 0.1"},description:{en:e.description||" "},copyright:{en:e.copyright||" "},trademark:{en:e.trademark||" "}},this.unitsPerEm=e.unitsPerEm||1e3,this.ascender=e.ascender,this.descender=e.descender,this.createdTimestamp=e.createdTimestamp,this.tables=Object.assign(e.tables,{os2:Object.assign({usWeightClass:e.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:e.widthClass||this.usWidthClasses.MEDIUM,fsSelection:e.fsSelection||this.fsSelectionValues.REGULAR},e.tables.os2)})),this.supported=!0,this.glyphs=new eb.GlyphSet(this,e.glyphs||[]),this.encoding=new ec(this),this.position=new ts(this),this.substitution=new ti(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){return this._hinting?this._hinting:"truetype"===this.outlinesFormat?this._hinting=new tm(this):void 0}})}rx.prototype.setText=function(e){this.text=e},rx.prototype.contextChecks={latinWordCheck:{startCheck:function(e){var t=e.current,r=e.get(-1);return null===r&&rn(t)||!rn(r)&&rn(t)},endCheck:function(e){var t=e.get(1);return null===t||!rn(t)}},arabicWordCheck:{startCheck:function(e){var t=e.current,r=e.get(-1);return null===r&&re(t)||!re(r)&&re(t)},endCheck:function(e){var t=e.get(1);return null===t||!re(t)}},arabicSentenceCheck:{startCheck:function(e){var t=e.current,r=e.get(-1);return(re(t)||rr(t))&&!re(r)},endCheck:function(e){var t=e.get(1);switch(!0){case null===t:return!0;case!re(t)&&!rr(t):var r=/\s/.test(t);if(!r||r&&!e.lookahead.some(function(e){return re(e)||rr(e)}))return!0;break;default:return!1}}}},rx.prototype.registerFeatures=function(e,t){var r=this,n=t.filter(function(t){return r.query.supports({script:e,tag:t})});this.featuresTags.hasOwnProperty(e)?this.featuresTags[e]=this.featuresTags[e].concat(n):this.featuresTags[e]=n},rx.prototype.applyFeatures=function(e,t){if(!e)throw Error("No valid font was provided to apply features");this.query||(this.query=new ra(e));for(var r=0;r<t.length;r++){var n=t[r];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}},rx.prototype.registerModifier=function(e,t,r){this.tokenizer.registerModifier(e,t,r)},rx.prototype.checkContextReady=function(e){return!!this.tokenizer.getContext(e)},rx.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(rO.call(this),rE.call(this)),this.checkContextReady("latinWord")&&rR.call(this),this.checkContextReady("arabicSentence")&&rk.call(this)},rx.prototype.processText=function(e){this.text&&this.text===e||(this.setText(e),rT.call(this),this.applyFeaturesToContexts())},rx.prototype.getBidiText=function(e){return this.processText(e),this.tokenizer.getText()},rx.prototype.getTextGlyphs=function(e){this.processText(e);for(var t=[],r=0;r<this.tokenizer.tokens.length;r++){var n=this.tokenizer.tokens[r];if(!n.state.deleted){var a=n.activeState.value;t.push(Array.isArray(a)?a[0]:a)}}return t},rC.prototype.hasChar=function(e){return null!==this.encoding.charToGlyphIndex(e)},rC.prototype.charToGlyphIndex=function(e){return this.encoding.charToGlyphIndex(e)},rC.prototype.charToGlyph=function(e){var t=this.charToGlyphIndex(e),r=this.glyphs.get(t);return r||(r=this.glyphs.get(0)),r},rC.prototype.updateFeatures=function(e){return this.defaultRenderOptions.features.map(function(t){return"latn"===t.script?{script:"latn",tags:t.tags.filter(function(t){return e[t]})}:t})},rC.prototype.stringToGlyphs=function(e,t){var r=this,n=new rx;n.registerModifier("glyphIndex",null,function(e){return r.charToGlyphIndex(e.char)});var a=t?this.updateFeatures(t.features):this.defaultRenderOptions.features;n.applyFeatures(this,a);for(var o=n.getTextGlyphs(e),s=o.length,i=Array(s),u=this.glyphs.get(0),p=0;p<s;p+=1)i[p]=this.glyphs.get(o[p])||u;return i},rC.prototype.nameToGlyphIndex=function(e){return this.glyphNames.nameToGlyphIndex(e)},rC.prototype.nameToGlyph=function(e){var t=this.nameToGlyphIndex(e),r=this.glyphs.get(t);return r||(r=this.glyphs.get(0)),r},rC.prototype.glyphIndexToName=function(e){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(e):""},rC.prototype.getKerningValue=function(e,t){e=e.index||e,t=t.index||t;var r=this.position.defaultKerningTables;return r?this.position.getKerningValue(r,e,t):this.kerningPairs[e+","+t]||0},rC.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]},rC.prototype.forEachGlyph=function(e,t,r,n,a,o){t=void 0!==t?t:0,r=void 0!==r?r:0,n=void 0!==n?n:72,a=Object.assign({},this.defaultRenderOptions,a);var s,i=1/this.unitsPerEm*n,u=this.stringToGlyphs(e,a);if(a.kerning){var p=a.script||this.position.getDefaultScriptName();s=this.position.getKerningTables(p,a.language)}for(var l=0;l<u.length;l+=1){var c=u[l];o.call(this,c,t,r,n,a),c.advanceWidth&&(t+=c.advanceWidth*i),a.kerning&&l<u.length-1&&(t+=(s?this.position.getKerningValue(s,c.index,u[l+1].index):this.getKerningValue(c,u[l+1]))*i),a.letterSpacing?t+=a.letterSpacing*n:a.tracking&&(t+=a.tracking/1e3*n)}return t},rC.prototype.getPath=function(e,t,r,n,a){var o=new w;return this.forEachGlyph(e,t,r,n,a,function(e,t,r,n){var s=e.getPath(t,r,n,a,this);o.extend(s)}),o},rC.prototype.getPaths=function(e,t,r,n,a){var o=[];return this.forEachGlyph(e,t,r,n,a,function(e,t,r,n){var s=e.getPath(t,r,n,a,this);o.push(s)}),o},rC.prototype.getAdvanceWidth=function(e,t,r){return this.forEachGlyph(e,0,0,t,r,function(){})},rC.prototype.draw=function(e,t,r,n,a,o){this.getPath(t,r,n,a,o).draw(e)},rC.prototype.drawPoints=function(e,t,r,n,a,o){this.forEachGlyph(t,r,n,a,o,function(t,r,n,a){t.drawPoints(e,r,n,a)})},rC.prototype.drawMetrics=function(e,t,r,n,a,o){this.forEachGlyph(t,r,n,a,o,function(t,r,n,a){t.drawMetrics(e,r,n,a)})},rC.prototype.getEnglishName=function(e){var t=this.names[e];if(t)return t.en},rC.prototype.validate=function(){var e=this;function t(t){var r=e.getEnglishName(t);r&&r.trim().length}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm},rC.prototype.toTables=function(){return tt(this)},rC.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()},rC.prototype.toArrayBuffer=function(){for(var e=this.toTables().encode(),t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n<e.length;n++)r[n]=e[n];return t},rC.prototype.download=function(e){var t=this.getEnglishName("fontFamily"),n=this.getEnglishName("fontSubfamily");e=e||t.replace(/\s/g,"")+"-"+n+".otf";var a=this.toArrayBuffer();if("undefined"!=typeof window){if(window.URL=window.URL||window.webkitURL,window.URL){var o=new Blob([new DataView(a)],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(o),s.download=e;var i=document.createEvent("MouseEvents");i.initEvent("click",!0,!1),s.dispatchEvent(i)}else console.warn("Font file could not be downloaded. Try using a different browser.")}else{var u=r(46102),p=function(e){for(var t=new l(e.byteLength),r=new Uint8Array(e),n=0;n<t.length;++n)t[n]=r[n];return t}(a);u.writeFileSync(e,p)}},rC.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},rC.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},rC.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};var rL={parse:function(e,t,r){var n=new eo.Parser(e,t),a=n.parseULong();M.argument(65536===a,"Unsupported fvar table version.");var o=n.parseOffset16();n.skip("uShort",1);for(var s=n.parseUShort(),i=n.parseUShort(),u=n.parseUShort(),p=n.parseUShort(),l=[],c=0;c<s;c++)l.push(function(e,t,r){var n={},a=new eo.Parser(e,t);return n.tag=a.parseTag(),n.minValue=a.parseFixed(),n.defaultValue=a.parseFixed(),n.maxValue=a.parseFixed(),a.skip("uShort",1),n.name=r[a.parseUShort()]||{},n}(e,t+o+c*i,r));for(var h=[],f=t+o+s*i,d=0;d<u;d++)h.push(function(e,t,r,n){var a={},o=new eo.Parser(e,t);a.name=n[o.parseUShort()]||{},o.skip("uShort",1),a.coordinates={};for(var s=0;s<r.length;++s)a.coordinates[r[s].tag]=o.parseFixed();return a}(e,f+d*p,l,r));return{axes:l,instances:h}}},rD=function(){return{coverage:this.parsePointer(en.coverage),attachPoints:this.parseList(en.pointer(en.uShortList))}},rw=function(){var e=this.parseUShort();return(M.argument(1===e||2===e||3===e,"Unsupported CaretValue table version."),1===e)?{coordinate:this.parseShort()}:2===e?{pointindex:this.parseShort()}:3===e?{coordinate:this.parseShort()}:void 0},rI=function(){return this.parseList(en.pointer(rw))},rM=function(){return{coverage:this.parsePointer(en.coverage),ligGlyphs:this.parseList(en.pointer(rI))}},rG=function(){return this.parseUShort(),this.parseList(en.pointer(en.coverage))},rB={parse:function(e,t){var r=new en(e,t=t||0),n=r.parseVersion(1);M.argument(1===n||1.2===n||1.3===n,"Unsupported GDEF table version.");var a={version:n,classDef:r.parsePointer(en.classDef),attachList:r.parsePointer(rD),ligCaretList:r.parsePointer(rM),markAttachClassDef:r.parsePointer(en.classDef)};return n>=1.2&&(a.markGlyphSets=r.parsePointer(rG)),a}},rF=Array(10);rF[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();return 1===t?{posFormat:1,coverage:this.parsePointer(en.coverage),value:this.parseValueRecord()}:2===t?{posFormat:2,coverage:this.parsePointer(en.coverage),values:this.parseValueRecordList()}:void M.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")},rF[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();M.assert(1===t||2===t,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var r=this.parsePointer(en.coverage),n=this.parseUShort(),a=this.parseUShort();if(1===t)return{posFormat:t,coverage:r,valueFormat1:n,valueFormat2:a,pairSets:this.parseList(en.pointer(en.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(n),value2:this.parseValueRecord(a)}})))};if(2===t){var o=this.parsePointer(en.classDef),s=this.parsePointer(en.classDef),i=this.parseUShort(),u=this.parseUShort();return{posFormat:t,coverage:r,valueFormat1:n,valueFormat2:a,classDef1:o,classDef2:s,class1Count:i,class2Count:u,classRecords:this.parseList(i,en.list(u,function(){return{value1:this.parseValueRecord(n),value2:this.parseValueRecord(a)}}))}}},rF[3]=function(){return{error:"GPOS Lookup 3 not supported"}},rF[4]=function(){return{error:"GPOS Lookup 4 not supported"}},rF[5]=function(){return{error:"GPOS Lookup 5 not supported"}},rF[6]=function(){return{error:"GPOS Lookup 6 not supported"}},rF[7]=function(){return{error:"GPOS Lookup 7 not supported"}},rF[8]=function(){return{error:"GPOS Lookup 8 not supported"}},rF[9]=function(){return{error:"GPOS Lookup 9 not supported"}};var rA={parse:function(e,t){var r=new en(e,t=t||0),n=r.parseVersion(1);return(M.argument(1===n||1.1===n,"Unsupported GPOS table version "+n),1===n)?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(rF)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(rF),variations:r.parseFeatureVariationsList()}}},rP={parse:function(e,t){var r=new eo.Parser(e,t),n=r.parseUShort();if(0===n)return function(e){var t={};e.skip("uShort");var r=e.parseUShort();M.argument(0===r,"Unsupported kern sub-table version."),e.skip("uShort",2);var n=e.parseUShort();e.skip("uShort",3);for(var a=0;a<n;a+=1){var o=e.parseUShort(),s=e.parseUShort(),i=e.parseShort();t[o+","+s]=i}return t}(r);if(1===n)return function(e){var t={};e.skip("uShort"),e.parseULong()>1&&console.warn("Only the first kern subtable is supported."),e.skip("uLong");var r=e.parseUShort();if(e.skip("uShort"),0==(255&r)){var n=e.parseUShort();e.skip("uShort",3);for(var a=0;a<n;a+=1){var o=e.parseUShort(),s=e.parseUShort(),i=e.parseShort();t[o+","+s]=i}}return t}(r);throw Error("Unsupported kern table version ("+n+").")}},rN={parse:function(e,t,r,n){for(var a=new eo.Parser(e,t),o=n?a.parseUShort:a.parseULong,s=[],i=0;i<r+1;i+=1){var u=o.call(a);n&&(u*=2),s.push(u)}return s}};function rH(e,t){r(46102).readFile(e,function(e,r){if(e)return t(e.message);t(null,tp(r))})}function rz(e,t){var r=new XMLHttpRequest;r.open("get",e,!0),r.responseType="arraybuffer",r.onload=function(){return r.response?t(null,r.response):t("Font could not be loaded: "+r.statusText)},r.onerror=function(){t("Font could not be loaded")},r.send()}function rW(e,t){for(var r=[],n=12,a=0;a<t;a+=1){var o=eo.getTag(e,n),s=eo.getULong(e,n+4),i=eo.getULong(e,n+8),u=eo.getULong(e,n+12);r.push({tag:o,checksum:s,offset:i,length:u,compression:!1}),n+=16}return r}function rq(e,t){if("WOFF"!==t.compression)return{data:e,offset:t.offset};var r=new Uint8Array(e.buffer,t.offset+2,t.compressedLength-2),n=new Uint8Array(t.length);if(C(r,n),n.byteLength!==t.length)throw Error("Decompression error: "+t.tag+" decompressed length doesn't match recorded length");return{data:new DataView(n.buffer,0),offset:0}}function r_(e,t){t=null==t?{}:t;var r,n,a,o,s,i,u,p,l,c,h,f,d,g,v,m=new rC({empty:!0}),y=new DataView(e,0),b=[],x=eo.getTag(y,0);if(x===String.fromCharCode(0,1,0,0)||"true"===x||"typ1"===x)m.outlinesFormat="truetype",a=eo.getUShort(y,4),b=rW(y,a);else if("OTTO"===x)m.outlinesFormat="cff",a=eo.getUShort(y,4),b=rW(y,a);else if("wOFF"===x){var S=eo.getTag(y,4);if(S===String.fromCharCode(0,1,0,0))m.outlinesFormat="truetype";else if("OTTO"===S)m.outlinesFormat="cff";else throw Error("Unsupported OpenType flavor "+x);a=eo.getUShort(y,12),b=function(e,t){for(var r=[],n=44,a=0;a<t;a+=1){var o=eo.getTag(e,n),s=eo.getULong(e,n+4),i=eo.getULong(e,n+8),u=eo.getULong(e,n+12),p=void 0;p=i<u&&"WOFF",r.push({tag:o,offset:s,compression:p,compressedLength:i,length:u}),n+=20}return r}(y,a)}else throw Error("Unsupported OpenType signature "+x);for(var T=0;T<a;T+=1){var k=b[T],U=void 0;switch(k.tag){case"cmap":U=rq(y,k),m.tables.cmap=es.parse(U.data,U.offset),m.encoding=new eh(m.tables.cmap);break;case"cvt ":U=rq(y,k),v=new eo.Parser(U.data,U.offset),m.tables.cvt=v.parseShortList(k.length/2);break;case"fvar":s=k;break;case"fpgm":U=rq(y,k),v=new eo.Parser(U.data,U.offset),m.tables.fpgm=v.parseByteList(k.length);break;case"head":U=rq(y,k),m.tables.head=eG.parse(U.data,U.offset),m.unitsPerEm=m.tables.head.unitsPerEm,r=m.tables.head.indexToLocFormat;break;case"hhea":U=rq(y,k),m.tables.hhea=eB.parse(U.data,U.offset),m.ascender=m.tables.hhea.ascender,m.descender=m.tables.hhea.descender,m.numberOfHMetrics=m.tables.hhea.numberOfHMetrics;break;case"hmtx":c=k;break;case"ltag":U=rq(y,k),n=eP.parse(U.data,U.offset);break;case"maxp":U=rq(y,k),m.tables.maxp=eN.parse(U.data,U.offset),m.numGlyphs=m.tables.maxp.numGlyphs;break;case"name":d=k;break;case"OS/2":U=rq(y,k),m.tables.os2=e0.parse(U.data,U.offset);break;case"post":U=rq(y,k),m.tables.post=e1.parse(U.data,U.offset),m.glyphNames=new ed(m.tables.post);break;case"prep":U=rq(y,k),v=new eo.Parser(U.data,U.offset),m.tables.prep=v.parseByteList(k.length);break;case"glyf":i=k;break;case"loca":f=k;break;case"CFF ":o=k;break;case"kern":h=k;break;case"GDEF":u=k;break;case"GPOS":p=k;break;case"GSUB":l=k;break;case"meta":g=k}}var O=rq(y,d);if(m.tables.name=eK(O.data,O.offset,n),m.names=m.tables.name,i&&f){var E=0===r,R=rq(y,f),C=rN.parse(R.data,R.offset,m.numGlyphs,E),L=rq(y,i);m.glyphs=tv.parse(L.data,L.offset,C,m,t)}else if(o){var D=rq(y,o);eM.parse(D.data,D.offset,m,t)}else throw Error("Font doesn't contain TrueType or CFF outlines.");var w=rq(y,c);if(eF(m,w.data,w.offset,m.numberOfHMetrics,m.numGlyphs,m.glyphs,t),t.lowMemory?function(e){e._IndexToUnicodeMap={};for(var t=e.tables.cmap.glyphIndexMap,r=Object.keys(t),n=0;n<r.length;n+=1){var a=r[n],o=t[a];void 0===e._IndexToUnicodeMap[o]?e._IndexToUnicodeMap[o]={unicodes:[parseInt(a)]}:e._IndexToUnicodeMap[o].unicodes.push(parseInt(a))}}(m):function(e){for(var t,r=e.tables.cmap.glyphIndexMap,n=Object.keys(r),a=0;a<n.length;a+=1){var o=n[a],s=r[o];(t=e.glyphs.get(s)).addUnicode(parseInt(o))}for(var i=0;i<e.glyphs.length;i+=1)t=e.glyphs.get(i),e.cffEncoding?e.isCIDFont?t.name="gid"+i:t.name=e.cffEncoding.charset[i]:e.glyphNames.names&&(t.name=e.glyphNames.glyphIndexToName(i))}(m),h){var I=rq(y,h);m.kerningPairs=rP.parse(I.data,I.offset)}else m.kerningPairs={};if(u){var M=rq(y,u);m.tables.gdef=rB.parse(M.data,M.offset)}if(p){var G=rq(y,p);m.tables.gpos=rA.parse(G.data,G.offset),m.position.init()}if(l){var B=rq(y,l);m.tables.gsub=e5.parse(B.data,B.offset)}if(s){var F=rq(y,s);m.tables.fvar=rL.parse(F.data,F.offset,m.names)}if(g){var A=rq(y,g);m.tables.meta=e4.parse(A.data,A.offset),m.metas=m.tables.meta}return m}var rX=Object.freeze({__proto__:null,Font:rC,Glyph:ev,Path:w,BoundingBox:D,_parse:eo,parse:r_,load:function(e,t,r){r=null==r?{}:r;var n="undefined"!=typeof window||r.isUrl?rz:rH;return new Promise(function(a,o){n(e,function(e,n){var s;if(e){if(t)return t(e);o(e)}try{s=r_(n,r)}catch(e){if(t)return t(e,null);o(e)}if(t)return t(null,s);a(s)})})},loadSync:function(e,t){return r_(tp(r(46102).readFileSync(e)),t)}});t.default=rX}}]);