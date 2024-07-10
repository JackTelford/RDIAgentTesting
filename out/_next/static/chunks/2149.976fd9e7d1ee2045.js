"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2149],
    {
        22149: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return ue;
                    },
                    languages: function () {
                        return rj;
                    },
                    options: function () {
                        return rP;
                    },
                    parsers: function () {
                        return rz;
                    },
                    printers: function () {
                        return r5;
                    },
                });
            var u = Object.create,
                n = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                a = Object.getPrototypeOf,
                s = Object.prototype.hasOwnProperty,
                l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
                c = (e, t) => {
                    for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
                },
                D = (e, t, r, u) => {
                    if ((t && "object" == typeof t) || "function" == typeof t) for (let a of o(t)) s.call(e, a) || a === r || n(e, a, { get: () => t[a], enumerable: !(u = i(t, a)) || u.enumerable });
                    return e;
                },
                f = (e, t, r) => ((r = null != e ? u(a(e)) : {}), D(!t && e && e.__esModule ? r : n(r, "default", { value: e, enumerable: !0 }), e)),
                p = l((e, t) => {
                    t.exports = function (e) {
                        return String(e).replace(/\s+/g, " ");
                    };
                }),
                d = l((e, t) => {
                    t.exports = function (e) {
                        var t,
                            u = this.Parser,
                            n = this.Compiler;
                        u &&
                            u.prototype &&
                            u.prototype.blockTokenizers &&
                            (function (e, t) {
                                for (var u, n = e.prototype, i = n.blockTokenizers, o = n.inlineTokenizers, a = n.blockMethods, s = n.inlineMethods, l = i.definition, c = o.reference, D = [], f = -1, p = a.length; ++f < p;)
                                    "newline" === (u = a[f]) || "indentedCode" === u || "paragraph" === u || "footnoteDefinition" === u || D.push([u]);
                                function d(e, t, r) {
                                    var u,
                                        n,
                                        i,
                                        o,
                                        a = t.length + 1,
                                        s = 0;
                                    if (91 === t.charCodeAt(s++) && 94 === t.charCodeAt(s++)) {
                                        for (n = s; s < a;) {
                                            if ((o = t.charCodeAt(s)) != o || 10 === o || 9 === o || 32 === o) return;
                                            if (93 === o) {
                                                (i = s), s++;
                                                break;
                                            }
                                            s++;
                                        }
                                        if (!(void 0 === i || n === i)) return !!r || ((u = t.slice(n, i)), e(t.slice(0, s))({ type: "footnoteReference", identifier: u.toLowerCase(), label: u }));
                                    }
                                }
                                function h(e, t, r) {
                                    var u,
                                        n,
                                        i,
                                        o,
                                        a,
                                        s,
                                        l,
                                        c = t.length + 1,
                                        D = 0,
                                        f = 0;
                                    if (94 === t.charCodeAt(D++) && 91 === t.charCodeAt(D++)) {
                                        for (i = D; D < c;) {
                                            if ((n = t.charCodeAt(D)) != n) return;
                                            if (void 0 === s) {
                                                if (92 === n) D += 2;
                                                else if (91 === n) f++, D++;
                                                else if (93 === n) {
                                                    if (0 === f) {
                                                        (o = D), D++;
                                                        break;
                                                    }
                                                    f--, D++;
                                                } else if (96 === n) {
                                                    for (a = D, s = 1; 96 === t.charCodeAt(a + s);) s++;
                                                    D += s;
                                                } else D++;
                                            } else if (96 === n) {
                                                for (a = D, l = 1; 96 === t.charCodeAt(a + l);) l++;
                                                (D += l), s === l && (s = void 0), (l = void 0);
                                            } else D++;
                                        }
                                        if (void 0 !== o) return !!r || ((u = e.now()), (u.column += 2), (u.offset += 2), e(t.slice(0, D))({ type: "footnote", children: this.tokenizeInline(t.slice(i, o), u) }));
                                    }
                                }
                                function F(e, t, r) {
                                    var u = 0;
                                    if ((33 === t.charCodeAt(u) && u++, 91 === t.charCodeAt(u) && 94 !== t.charCodeAt(u + 1))) return c.call(this, e, t, r);
                                }
                                D.push(["footnoteDefinition"]),
                                    (t || {}).inlineNotes && (r(s, "reference", "inlineNote"), (o.inlineNote = h)),
                                    r(a, "definition", "footnoteDefinition"),
                                    r(s, "reference", "footnoteCall"),
                                    (i.definition = function (e, t, r) {
                                        for (var u = 0, n = t.charCodeAt(u); 32 === n || 9 === n;) n = t.charCodeAt(++u);
                                        if (91 === n && 94 !== t.charCodeAt(u + 1)) return l.call(this, e, t, r);
                                    }),
                                    (i.footnoteDefinition = function (e, t, r) {
                                        for (var u, n, o, a, s, l, c, D, f, p, d, h, F, g = this.interruptFootnoteDefinition, m = this.offset, C = t.length + 1, E = 0, b = []; E < C && !(9 !== (a = t.charCodeAt(E)) && 32 !== a);) E++;
                                        if (91 === t.charCodeAt(E++) && 94 === t.charCodeAt(E++)) {
                                            for (n = E; E < C;) {
                                                if ((a = t.charCodeAt(E)) != a || 10 === a || 9 === a || 32 === a) return;
                                                if (93 === a) {
                                                    (o = E), E++;
                                                    break;
                                                }
                                                E++;
                                            }
                                            if (!(void 0 === o || n === o || 58 !== t.charCodeAt(E++))) {
                                                if (r) return !0;
                                                for (u = t.slice(n, o), s = e.now(), f = 0, p = 0, d = E, h = []; E < C;) {
                                                    if ((a = t.charCodeAt(E)) != a || 10 === a) (F = { start: f, contentStart: d || E, contentEnd: E, end: E }), h.push(F), 10 === a && ((f = E + 1), (p = 0), (d = void 0), (F.end = f));
                                                    else if (void 0 !== p) {
                                                        if (32 === a || 9 === a) (p += 32 === a ? 1 : 4 - (p % 4)) > 4 && ((p = void 0), (d = E));
                                                        else {
                                                            if (
                                                                p < 4 &&
                                                                F &&
                                                                (F.contentStart === F.contentEnd ||
                                                                    (function (e, t, r, u) {
                                                                        for (var n = e.length, i = -1; ++i < n;) if (t[e[i][0]].apply(r, u)) return !0;
                                                                        return !1;
                                                                    })(g, i, this, [e, t.slice(E, 1024), !0]))
                                                            )
                                                                break;
                                                            (p = void 0), (d = E);
                                                        }
                                                    }
                                                    E++;
                                                }
                                                for (E = -1, C = h.length; C > 0 && (F = h[C - 1]).contentStart === F.contentEnd;) C--;
                                                for (l = e(t.slice(0, F.contentEnd)); ++E < C;) (F = h[E]), (m[s.line + E] = (m[s.line + E] || 0) + (F.contentStart - F.start)), b.push(t.slice(F.contentStart, F.end));
                                                return (c = this.enterBlock()), (D = this.tokenizeBlock(b.join(""), s)), c(), l({ type: "footnoteDefinition", identifier: u.toLowerCase(), label: u, children: D });
                                            }
                                        }
                                    }),
                                    (o.footnoteCall = d),
                                    (o.reference = F),
                                    (n.interruptFootnoteDefinition = D),
                                    (F.locator = c.locator),
                                    (d.locator = function (e, t) {
                                        return e.indexOf("[", t);
                                    }),
                                    (h.locator = function (e, t) {
                                        return e.indexOf("^[", t);
                                    });
                            })(u, e),
                            n &&
                            n.prototype &&
                            n.prototype.visitors &&
                            (((t = n.prototype.visitors).footnote = function (e) {
                                return "^[" + this.all(e).join("") + "]";
                            }),
                                (t.footnoteReference = function (e) {
                                    return "[^" + (e.label || e.identifier) + "]";
                                }),
                                (t.footnoteDefinition = function (e) {
                                    for (
                                        var t,
                                        r = this.all(e).join(`

`).split(`
`),
                                        u = 0,
                                        n = r.length;
                                        ++u < n;

                                    )
                                        "" !== (t = r[u]) && (r[u] = "    " + t);
                                    return (
                                        "[^" +
                                        (e.label || e.identifier) +
                                        "]: " +
                                        r.join(`
`)
                                    );
                                }));
                    };
                    function r(e, t, r) {
                        e.splice(e.indexOf(t), 0, r);
                    }
                }),
                h = l((e) => {
                    (e.isRemarkParser = function (e) {
                        return !!(e && e.prototype && e.prototype.blockTokenizers);
                    }),
                        (e.isRemarkCompiler = function (e) {
                            return !!(e && e.prototype && e.prototype.visitors);
                        });
                }),
                F = l((e, t) => {
                    var r = h();
                    t.exports = function (e) {
                        let t = this.Parser,
                            i = this.Compiler;
                        r.isRemarkParser(t) &&
                            (function (e, t) {
                                let r = e.prototype,
                                    i = r.inlineMethods;
                                function o(e, r, i) {
                                    let o = r.length,
                                        a = !1,
                                        s = !1,
                                        l = 0,
                                        c,
                                        D,
                                        f,
                                        p,
                                        d,
                                        h,
                                        F;
                                    if ((92 === r.charCodeAt(l) && ((s = !0), l++), 36 === r.charCodeAt(l))) {
                                        if ((l++, s)) return !!i || e(r.slice(0, l))({ type: "text", value: "$" });
                                        if ((36 === r.charCodeAt(l) && ((a = !0), l++), !(32 === (f = r.charCodeAt(l)) || 9 === f))) {
                                            for (p = l; l < o;) {
                                                if (((D = f), (f = r.charCodeAt(l + 1)), 36 === D)) {
                                                    if (32 !== (c = r.charCodeAt(l - 1)) && 9 !== c && (f != f || f < 48 || f > 57) && (!a || 36 === f)) {
                                                        (d = l - 1), l++, a && l++, (h = l);
                                                        break;
                                                    }
                                                } else 92 === D && (l++, (f = r.charCodeAt(l + 1)));
                                                l++;
                                            }
                                            if (void 0 !== h)
                                                return (
                                                    !!i ||
                                                    ((F = r.slice(p, d + 1)),
                                                        e(r.slice(0, h))({
                                                            type: "inlineMath",
                                                            value: F,
                                                            data: { hName: "span", hProperties: { className: u.concat(a && t.inlineMathDouble ? [n] : []) }, hChildren: [{ type: "text", value: F }] },
                                                        }))
                                                );
                                        }
                                    }
                                }
                                (o.locator = function (e, t) {
                                    return e.indexOf("$", t);
                                }),
                                    (r.inlineTokenizers.math = o),
                                    i.splice(i.indexOf("text"), 0, "math");
                            })(t, e),
                            r.isRemarkCompiler(i) &&
                            (i.prototype.visitors.inlineMath = function (e) {
                                let t = "$";
                                return ((e.data && e.data.hProperties && e.data.hProperties.className) || []).includes(n) && (t = "$$"), t + e.value + t;
                            });
                    };
                    var u = ["math", "math-inline"],
                        n = "math-display";
                }),
                g = l((e, t) => {
                    var r = h();
                    t.exports = function () {
                        let e,
                            t,
                            i,
                            o,
                            a,
                            s = this.Parser,
                            l = this.Compiler;
                        r.isRemarkParser(s) &&
                            ((t = (e = s.prototype).blockMethods),
                                (i = e.interruptParagraph),
                                (o = e.interruptList),
                                (a = e.interruptBlockquote),
                                (e.blockTokenizers.math = function (e, t, r) {
                                    let i, o, a, s, l, c, D, f, p, d, h;
                                    for (var F = t.length, g = 0; g < F && 32 === t.charCodeAt(g);) g++;
                                    for (l = g; g < F && 36 === t.charCodeAt(g);) g++;
                                    if (!((c = g - l) < 2)) {
                                        for (; g < F && 32 === t.charCodeAt(g);) g++;
                                        for (D = g; g < F;) {
                                            if (36 === (i = t.charCodeAt(g))) return;
                                            if (10 === i) break;
                                            g++;
                                        }
                                        if (10 === t.charCodeAt(g)) {
                                            if (r) return !0;
                                            for (o = [], D !== g && o.push(t.slice(D, g)), g++, a = -1 === (a = t.indexOf(u, g + 1)) ? F : a; g < F;) {
                                                for (f = !1, d = g, h = a, s = a, p = 0; s > d && 32 === t.charCodeAt(s - 1);) s--;
                                                for (; s > d && 36 === t.charCodeAt(s - 1);) p++, s--;
                                                for (c <= p && t.indexOf("$", d) === s && ((f = !0), (h = s)); d <= h && d - g < l && 32 === t.charCodeAt(d);) d++;
                                                if (f) for (; h > d && 32 === t.charCodeAt(h - 1);) h--;
                                                if (((f && d === h) || o.push(t.slice(d, h)), f)) break;
                                                (g = a + 1), (a = -1 === (a = t.indexOf(u, g + 1)) ? F : a);
                                            }
                                            return (
                                                (o = o.join(`
`)),
                                                e(t.slice(0, a))({ type: "math", value: o, data: { hName: "div", hProperties: { className: n.concat() }, hChildren: [{ type: "text", value: o }] } })
                                            );
                                        }
                                    }
                                }),
                                t.splice(t.indexOf("fencedCode") + 1, 0, "math"),
                                i.splice(i.indexOf("fencedCode") + 1, 0, ["math"]),
                                o.splice(o.indexOf("fencedCode") + 1, 0, ["math"]),
                                a.splice(a.indexOf("fencedCode") + 1, 0, ["math"])),
                            r.isRemarkCompiler(l) &&
                            (l.prototype.visitors.math = function (e) {
                                return (
                                    `$$
` +
                                    e.value +
                                    `
$$`
                                );
                            });
                    };
                    var u = `
`,
                        n = ["math", "math-display"];
                }),
                m = l((e, t) => {
                    var r = F(),
                        u = g();
                    t.exports = function (e) {
                        var t = e || {};
                        u.call(this, t), r.call(this, t);
                    };
                }),
                C = l((e, t) => {
                    t.exports = function () {
                        for (var e = {}, t = 0; t < arguments.length; t++) {
                            var u = arguments[t];
                            for (var n in u) r.call(u, n) && (e[n] = u[n]);
                        }
                        return e;
                    };
                    var r = Object.prototype.hasOwnProperty;
                }),
                E = l((e, t) => {
                    "function" == typeof Object.create
                        ? (t.exports = function (e, t) {
                            t && ((e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })));
                        })
                        : (t.exports = function (e, t) {
                            if (t) {
                                e.super_ = t;
                                var r = function () { };
                                (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
                            }
                        });
                }),
                b = l((e, t) => {
                    var r = C(),
                        u = E();
                    t.exports = function (e) {
                        var t, n, i;
                        for (n in (u(a, e), u(o, a), (t = a.prototype))) (i = t[n]) && "object" == typeof i && (t[n] = "concat" in i ? i.concat() : r(i));
                        return a;
                        function o(t) {
                            return e.apply(this, t);
                        }
                        function a() {
                            return this instanceof a ? e.apply(this, arguments) : new o(arguments);
                        }
                    };
                }),
                v = l((e, t) => {
                    t.exports = function (e, t, r) {
                        return function () {
                            var u = r || this,
                                n = u[e];
                            return (
                                (u[e] = !t),
                                function () {
                                    u[e] = n;
                                }
                            );
                        };
                    };
                }),
                y = l((e, t) => {
                    t.exports = function (e) {
                        for (var t = String(e), r = [], u = /\r?\n|\r/g; u.exec(t);) r.push(u.lastIndex);
                        return (
                            r.push(t.length + 1),
                            {
                                toPoint: n,
                                toPosition: n,
                                toOffset: function (e) {
                                    var t,
                                        u = e && e.line,
                                        n = e && e.column;
                                    return !isNaN(u) && !isNaN(n) && u - 1 in r && (t = (r[u - 2] || 0) + n - 1 || 0), t > -1 && t < r[r.length - 1] ? t : -1;
                                },
                            }
                        );
                        function n(e) {
                            var t = -1;
                            if (e > -1 && e < r[r.length - 1]) {
                                for (; ++t < r.length;) if (r[t] > e) return { line: t + 1, column: e - (r[t - 1] || 0) + 1, offset: e };
                            }
                            return {};
                        }
                    };
                }),
                A = l((e, t) => {
                    t.exports = function (e, t) {
                        return function (r) {
                            for (var u, n = 0, i = r.indexOf("\\"), o = e[t], a = []; -1 !== i;) a.push(r.slice(n, i)), (n = i + 1), ((u = r.charAt(n)) && -1 !== o.indexOf(u)) || a.push("\\"), (i = r.indexOf("\\", n + 1));
                            return a.push(r.slice(n)), a.join("");
                        };
                    };
                }),
                x = l((e, t) => {
                    t.exports = {
                        AElig: "\xc6",
                        AMP: "&",
                        Aacute: "\xc1",
                        Acirc: "\xc2",
                        Agrave: "\xc0",
                        Aring: "\xc5",
                        Atilde: "\xc3",
                        Auml: "\xc4",
                        COPY: "\xa9",
                        Ccedil: "\xc7",
                        ETH: "\xd0",
                        Eacute: "\xc9",
                        Ecirc: "\xca",
                        Egrave: "\xc8",
                        Euml: "\xcb",
                        GT: ">",
                        Iacute: "\xcd",
                        Icirc: "\xce",
                        Igrave: "\xcc",
                        Iuml: "\xcf",
                        LT: "<",
                        Ntilde: "\xd1",
                        Oacute: "\xd3",
                        Ocirc: "\xd4",
                        Ograve: "\xd2",
                        Oslash: "\xd8",
                        Otilde: "\xd5",
                        Ouml: "\xd6",
                        QUOT: '"',
                        REG: "\xae",
                        THORN: "\xde",
                        Uacute: "\xda",
                        Ucirc: "\xdb",
                        Ugrave: "\xd9",
                        Uuml: "\xdc",
                        Yacute: "\xdd",
                        aacute: "\xe1",
                        acirc: "\xe2",
                        acute: "\xb4",
                        aelig: "\xe6",
                        agrave: "\xe0",
                        amp: "&",
                        aring: "\xe5",
                        atilde: "\xe3",
                        auml: "\xe4",
                        brvbar: "\xa6",
                        ccedil: "\xe7",
                        cedil: "\xb8",
                        cent: "\xa2",
                        copy: "\xa9",
                        curren: "\xa4",
                        deg: "\xb0",
                        divide: "\xf7",
                        eacute: "\xe9",
                        ecirc: "\xea",
                        egrave: "\xe8",
                        eth: "\xf0",
                        euml: "\xeb",
                        frac12: "\xbd",
                        frac14: "\xbc",
                        frac34: "\xbe",
                        gt: ">",
                        iacute: "\xed",
                        icirc: "\xee",
                        iexcl: "\xa1",
                        igrave: "\xec",
                        iquest: "\xbf",
                        iuml: "\xef",
                        laquo: "\xab",
                        lt: "<",
                        macr: "\xaf",
                        micro: "\xb5",
                        middot: "\xb7",
                        nbsp: "\xa0",
                        not: "\xac",
                        ntilde: "\xf1",
                        oacute: "\xf3",
                        ocirc: "\xf4",
                        ograve: "\xf2",
                        ordf: "\xaa",
                        ordm: "\xba",
                        oslash: "\xf8",
                        otilde: "\xf5",
                        ouml: "\xf6",
                        para: "\xb6",
                        plusmn: "\xb1",
                        pound: "\xa3",
                        quot: '"',
                        raquo: "\xbb",
                        reg: "\xae",
                        sect: "\xa7",
                        shy: "\xad",
                        sup1: "\xb9",
                        sup2: "\xb2",
                        sup3: "\xb3",
                        szlig: "\xdf",
                        thorn: "\xfe",
                        times: "\xd7",
                        uacute: "\xfa",
                        ucirc: "\xfb",
                        ugrave: "\xf9",
                        uml: "\xa8",
                        uuml: "\xfc",
                        yacute: "\xfd",
                        yen: "\xa5",
                        yuml: "\xff",
                    };
                }),
                k = l((e, t) => {
                    t.exports = {
                        0: "�",
                        128: "€",
                        130: "‚",
                        131: "ƒ",
                        132: "„",
                        133: "…",
                        134: "†",
                        135: "‡",
                        136: "ˆ",
                        137: "‰",
                        138: "Š",
                        139: "‹",
                        140: "Œ",
                        142: "Ž",
                        145: "‘",
                        146: "’",
                        147: "“",
                        148: "”",
                        149: "•",
                        150: "–",
                        151: "—",
                        152: "˜",
                        153: "™",
                        154: "š",
                        155: "›",
                        156: "œ",
                        158: "ž",
                        159: "Ÿ",
                    };
                }),
                w = l((e, t) => {
                    t.exports = function (e) {
                        var t = "string" == typeof e ? e.charCodeAt(0) : e;
                        return t >= 48 && t <= 57;
                    };
                }),
                B = l((e, t) => {
                    t.exports = function (e) {
                        var t = "string" == typeof e ? e.charCodeAt(0) : e;
                        return (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57);
                    };
                }),
                q = l((e, t) => {
                    t.exports = function (e) {
                        var t = "string" == typeof e ? e.charCodeAt(0) : e;
                        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
                    };
                }),
                S = l((e, t) => {
                    var r = q(),
                        u = w();
                    t.exports = function (e) {
                        return r(e) || u(e);
                    };
                }),
                T = l((e, t) => {
                    t.exports = {
                        AEli: "\xc6",
                        AElig: "\xc6",
                        AM: "&",
                        AMP: "&",
                        Aacut: "\xc1",
                        Aacute: "\xc1",
                        Abreve: "Ă",
                        Acir: "\xc2",
                        Acirc: "\xc2",
                        Acy: "А",
                        Afr: "\uD835\uDD04",
                        Agrav: "\xc0",
                        Agrave: "\xc0",
                        Alpha: "Α",
                        Amacr: "Ā",
                        And: "⩓",
                        Aogon: "Ą",
                        Aopf: "\uD835\uDD38",
                        ApplyFunction: "⁡",
                        Arin: "\xc5",
                        Aring: "\xc5",
                        Ascr: "\uD835\uDC9C",
                        Assign: "≔",
                        Atild: "\xc3",
                        Atilde: "\xc3",
                        Aum: "\xc4",
                        Auml: "\xc4",
                        Backslash: "∖",
                        Barv: "⫧",
                        Barwed: "⌆",
                        Bcy: "Б",
                        Because: "∵",
                        Bernoullis: "ℬ",
                        Beta: "Β",
                        Bfr: "\uD835\uDD05",
                        Bopf: "\uD835\uDD39",
                        Breve: "˘",
                        Bscr: "ℬ",
                        Bumpeq: "≎",
                        CHcy: "Ч",
                        COP: "\xa9",
                        COPY: "\xa9",
                        Cacute: "Ć",
                        Cap: "⋒",
                        CapitalDifferentialD: "ⅅ",
                        Cayleys: "ℭ",
                        Ccaron: "Č",
                        Ccedi: "\xc7",
                        Ccedil: "\xc7",
                        Ccirc: "Ĉ",
                        Cconint: "∰",
                        Cdot: "Ċ",
                        Cedilla: "\xb8",
                        CenterDot: "\xb7",
                        Cfr: "ℭ",
                        Chi: "Χ",
                        CircleDot: "⊙",
                        CircleMinus: "⊖",
                        CirclePlus: "⊕",
                        CircleTimes: "⊗",
                        ClockwiseContourIntegral: "∲",
                        CloseCurlyDoubleQuote: "”",
                        CloseCurlyQuote: "’",
                        Colon: "∷",
                        Colone: "⩴",
                        Congruent: "≡",
                        Conint: "∯",
                        ContourIntegral: "∮",
                        Copf: "ℂ",
                        Coproduct: "∐",
                        CounterClockwiseContourIntegral: "∳",
                        Cross: "⨯",
                        Cscr: "\uD835\uDC9E",
                        Cup: "⋓",
                        CupCap: "≍",
                        DD: "ⅅ",
                        DDotrahd: "⤑",
                        DJcy: "Ђ",
                        DScy: "Ѕ",
                        DZcy: "Џ",
                        Dagger: "‡",
                        Darr: "↡",
                        Dashv: "⫤",
                        Dcaron: "Ď",
                        Dcy: "Д",
                        Del: "∇",
                        Delta: "Δ",
                        Dfr: "\uD835\uDD07",
                        DiacriticalAcute: "\xb4",
                        DiacriticalDot: "˙",
                        DiacriticalDoubleAcute: "˝",
                        DiacriticalGrave: "`",
                        DiacriticalTilde: "˜",
                        Diamond: "⋄",
                        DifferentialD: "ⅆ",
                        Dopf: "\uD835\uDD3B",
                        Dot: "\xa8",
                        DotDot: "⃜",
                        DotEqual: "≐",
                        DoubleContourIntegral: "∯",
                        DoubleDot: "\xa8",
                        DoubleDownArrow: "⇓",
                        DoubleLeftArrow: "⇐",
                        DoubleLeftRightArrow: "⇔",
                        DoubleLeftTee: "⫤",
                        DoubleLongLeftArrow: "⟸",
                        DoubleLongLeftRightArrow: "⟺",
                        DoubleLongRightArrow: "⟹",
                        DoubleRightArrow: "⇒",
                        DoubleRightTee: "⊨",
                        DoubleUpArrow: "⇑",
                        DoubleUpDownArrow: "⇕",
                        DoubleVerticalBar: "∥",
                        DownArrow: "↓",
                        DownArrowBar: "⤓",
                        DownArrowUpArrow: "⇵",
                        DownBreve: "̑",
                        DownLeftRightVector: "⥐",
                        DownLeftTeeVector: "⥞",
                        DownLeftVector: "↽",
                        DownLeftVectorBar: "⥖",
                        DownRightTeeVector: "⥟",
                        DownRightVector: "⇁",
                        DownRightVectorBar: "⥗",
                        DownTee: "⊤",
                        DownTeeArrow: "↧",
                        Downarrow: "⇓",
                        Dscr: "\uD835\uDC9F",
                        Dstrok: "Đ",
                        ENG: "Ŋ",
                        ET: "\xd0",
                        ETH: "\xd0",
                        Eacut: "\xc9",
                        Eacute: "\xc9",
                        Ecaron: "Ě",
                        Ecir: "\xca",
                        Ecirc: "\xca",
                        Ecy: "Э",
                        Edot: "Ė",
                        Efr: "\uD835\uDD08",
                        Egrav: "\xc8",
                        Egrave: "\xc8",
                        Element: "∈",
                        Emacr: "Ē",
                        EmptySmallSquare: "◻",
                        EmptyVerySmallSquare: "▫",
                        Eogon: "Ę",
                        Eopf: "\uD835\uDD3C",
                        Epsilon: "Ε",
                        Equal: "⩵",
                        EqualTilde: "≂",
                        Equilibrium: "⇌",
                        Escr: "ℰ",
                        Esim: "⩳",
                        Eta: "Η",
                        Eum: "\xcb",
                        Euml: "\xcb",
                        Exists: "∃",
                        ExponentialE: "ⅇ",
                        Fcy: "Ф",
                        Ffr: "\uD835\uDD09",
                        FilledSmallSquare: "◼",
                        FilledVerySmallSquare: "▪",
                        Fopf: "\uD835\uDD3D",
                        ForAll: "∀",
                        Fouriertrf: "ℱ",
                        Fscr: "ℱ",
                        GJcy: "Ѓ",
                        G: ">",
                        GT: ">",
                        Gamma: "Γ",
                        Gammad: "Ϝ",
                        Gbreve: "Ğ",
                        Gcedil: "Ģ",
                        Gcirc: "Ĝ",
                        Gcy: "Г",
                        Gdot: "Ġ",
                        Gfr: "\uD835\uDD0A",
                        Gg: "⋙",
                        Gopf: "\uD835\uDD3E",
                        GreaterEqual: "≥",
                        GreaterEqualLess: "⋛",
                        GreaterFullEqual: "≧",
                        GreaterGreater: "⪢",
                        GreaterLess: "≷",
                        GreaterSlantEqual: "⩾",
                        GreaterTilde: "≳",
                        Gscr: "\uD835\uDCA2",
                        Gt: "≫",
                        HARDcy: "Ъ",
                        Hacek: "ˇ",
                        Hat: "^",
                        Hcirc: "Ĥ",
                        Hfr: "ℌ",
                        HilbertSpace: "ℋ",
                        Hopf: "ℍ",
                        HorizontalLine: "─",
                        Hscr: "ℋ",
                        Hstrok: "Ħ",
                        HumpDownHump: "≎",
                        HumpEqual: "≏",
                        IEcy: "Е",
                        IJlig: "Ĳ",
                        IOcy: "Ё",
                        Iacut: "\xcd",
                        Iacute: "\xcd",
                        Icir: "\xce",
                        Icirc: "\xce",
                        Icy: "И",
                        Idot: "İ",
                        Ifr: "ℑ",
                        Igrav: "\xcc",
                        Igrave: "\xcc",
                        Im: "ℑ",
                        Imacr: "Ī",
                        ImaginaryI: "ⅈ",
                        Implies: "⇒",
                        Int: "∬",
                        Integral: "∫",
                        Intersection: "⋂",
                        InvisibleComma: "⁣",
                        InvisibleTimes: "⁢",
                        Iogon: "Į",
                        Iopf: "\uD835\uDD40",
                        Iota: "Ι",
                        Iscr: "ℐ",
                        Itilde: "Ĩ",
                        Iukcy: "І",
                        Ium: "\xcf",
                        Iuml: "\xcf",
                        Jcirc: "Ĵ",
                        Jcy: "Й",
                        Jfr: "\uD835\uDD0D",
                        Jopf: "\uD835\uDD41",
                        Jscr: "\uD835\uDCA5",
                        Jsercy: "Ј",
                        Jukcy: "Є",
                        KHcy: "Х",
                        KJcy: "Ќ",
                        Kappa: "Κ",
                        Kcedil: "Ķ",
                        Kcy: "К",
                        Kfr: "\uD835\uDD0E",
                        Kopf: "\uD835\uDD42",
                        Kscr: "\uD835\uDCA6",
                        LJcy: "Љ",
                        L: "<",
                        LT: "<",
                        Lacute: "Ĺ",
                        Lambda: "Λ",
                        Lang: "⟪",
                        Laplacetrf: "ℒ",
                        Larr: "↞",
                        Lcaron: "Ľ",
                        Lcedil: "Ļ",
                        Lcy: "Л",
                        LeftAngleBracket: "⟨",
                        LeftArrow: "←",
                        LeftArrowBar: "⇤",
                        LeftArrowRightArrow: "⇆",
                        LeftCeiling: "⌈",
                        LeftDoubleBracket: "⟦",
                        LeftDownTeeVector: "⥡",
                        LeftDownVector: "⇃",
                        LeftDownVectorBar: "⥙",
                        LeftFloor: "⌊",
                        LeftRightArrow: "↔",
                        LeftRightVector: "⥎",
                        LeftTee: "⊣",
                        LeftTeeArrow: "↤",
                        LeftTeeVector: "⥚",
                        LeftTriangle: "⊲",
                        LeftTriangleBar: "⧏",
                        LeftTriangleEqual: "⊴",
                        LeftUpDownVector: "⥑",
                        LeftUpTeeVector: "⥠",
                        LeftUpVector: "↿",
                        LeftUpVectorBar: "⥘",
                        LeftVector: "↼",
                        LeftVectorBar: "⥒",
                        Leftarrow: "⇐",
                        Leftrightarrow: "⇔",
                        LessEqualGreater: "⋚",
                        LessFullEqual: "≦",
                        LessGreater: "≶",
                        LessLess: "⪡",
                        LessSlantEqual: "⩽",
                        LessTilde: "≲",
                        Lfr: "\uD835\uDD0F",
                        Ll: "⋘",
                        Lleftarrow: "⇚",
                        Lmidot: "Ŀ",
                        LongLeftArrow: "⟵",
                        LongLeftRightArrow: "⟷",
                        LongRightArrow: "⟶",
                        Longleftarrow: "⟸",
                        Longleftrightarrow: "⟺",
                        Longrightarrow: "⟹",
                        Lopf: "\uD835\uDD43",
                        LowerLeftArrow: "↙",
                        LowerRightArrow: "↘",
                        Lscr: "ℒ",
                        Lsh: "↰",
                        Lstrok: "Ł",
                        Lt: "≪",
                        Map: "⤅",
                        Mcy: "М",
                        MediumSpace: " ",
                        Mellintrf: "ℳ",
                        Mfr: "\uD835\uDD10",
                        MinusPlus: "∓",
                        Mopf: "\uD835\uDD44",
                        Mscr: "ℳ",
                        Mu: "Μ",
                        NJcy: "Њ",
                        Nacute: "Ń",
                        Ncaron: "Ň",
                        Ncedil: "Ņ",
                        Ncy: "Н",
                        NegativeMediumSpace: "​",
                        NegativeThickSpace: "​",
                        NegativeThinSpace: "​",
                        NegativeVeryThinSpace: "​",
                        NestedGreaterGreater: "≫",
                        NestedLessLess: "≪",
                        NewLine: `
`,
                        Nfr: "\uD835\uDD11",
                        NoBreak: "⁠",
                        NonBreakingSpace: "\xa0",
                        Nopf: "ℕ",
                        Not: "⫬",
                        NotCongruent: "≢",
                        NotCupCap: "≭",
                        NotDoubleVerticalBar: "∦",
                        NotElement: "∉",
                        NotEqual: "≠",
                        NotEqualTilde: "≂̸",
                        NotExists: "∄",
                        NotGreater: "≯",
                        NotGreaterEqual: "≱",
                        NotGreaterFullEqual: "≧̸",
                        NotGreaterGreater: "≫̸",
                        NotGreaterLess: "≹",
                        NotGreaterSlantEqual: "⩾̸",
                        NotGreaterTilde: "≵",
                        NotHumpDownHump: "≎̸",
                        NotHumpEqual: "≏̸",
                        NotLeftTriangle: "⋪",
                        NotLeftTriangleBar: "⧏̸",
                        NotLeftTriangleEqual: "⋬",
                        NotLess: "≮",
                        NotLessEqual: "≰",
                        NotLessGreater: "≸",
                        NotLessLess: "≪̸",
                        NotLessSlantEqual: "⩽̸",
                        NotLessTilde: "≴",
                        NotNestedGreaterGreater: "⪢̸",
                        NotNestedLessLess: "⪡̸",
                        NotPrecedes: "⊀",
                        NotPrecedesEqual: "⪯̸",
                        NotPrecedesSlantEqual: "⋠",
                        NotReverseElement: "∌",
                        NotRightTriangle: "⋫",
                        NotRightTriangleBar: "⧐̸",
                        NotRightTriangleEqual: "⋭",
                        NotSquareSubset: "⊏̸",
                        NotSquareSubsetEqual: "⋢",
                        NotSquareSuperset: "⊐̸",
                        NotSquareSupersetEqual: "⋣",
                        NotSubset: "⊂⃒",
                        NotSubsetEqual: "⊈",
                        NotSucceeds: "⊁",
                        NotSucceedsEqual: "⪰̸",
                        NotSucceedsSlantEqual: "⋡",
                        NotSucceedsTilde: "≿̸",
                        NotSuperset: "⊃⃒",
                        NotSupersetEqual: "⊉",
                        NotTilde: "≁",
                        NotTildeEqual: "≄",
                        NotTildeFullEqual: "≇",
                        NotTildeTilde: "≉",
                        NotVerticalBar: "∤",
                        Nscr: "\uD835\uDCA9",
                        Ntild: "\xd1",
                        Ntilde: "\xd1",
                        Nu: "Ν",
                        OElig: "Œ",
                        Oacut: "\xd3",
                        Oacute: "\xd3",
                        Ocir: "\xd4",
                        Ocirc: "\xd4",
                        Ocy: "О",
                        Odblac: "Ő",
                        Ofr: "\uD835\uDD12",
                        Ograv: "\xd2",
                        Ograve: "\xd2",
                        Omacr: "Ō",
                        Omega: "Ω",
                        Omicron: "Ο",
                        Oopf: "\uD835\uDD46",
                        OpenCurlyDoubleQuote: "“",
                        OpenCurlyQuote: "‘",
                        Or: "⩔",
                        Oscr: "\uD835\uDCAA",
                        Oslas: "\xd8",
                        Oslash: "\xd8",
                        Otild: "\xd5",
                        Otilde: "\xd5",
                        Otimes: "⨷",
                        Oum: "\xd6",
                        Ouml: "\xd6",
                        OverBar: "‾",
                        OverBrace: "⏞",
                        OverBracket: "⎴",
                        OverParenthesis: "⏜",
                        PartialD: "∂",
                        Pcy: "П",
                        Pfr: "\uD835\uDD13",
                        Phi: "Φ",
                        Pi: "Π",
                        PlusMinus: "\xb1",
                        Poincareplane: "ℌ",
                        Popf: "ℙ",
                        Pr: "⪻",
                        Precedes: "≺",
                        PrecedesEqual: "⪯",
                        PrecedesSlantEqual: "≼",
                        PrecedesTilde: "≾",
                        Prime: "″",
                        Product: "∏",
                        Proportion: "∷",
                        Proportional: "∝",
                        Pscr: "\uD835\uDCAB",
                        Psi: "Ψ",
                        QUO: '"',
                        QUOT: '"',
                        Qfr: "\uD835\uDD14",
                        Qopf: "ℚ",
                        Qscr: "\uD835\uDCAC",
                        RBarr: "⤐",
                        RE: "\xae",
                        REG: "\xae",
                        Racute: "Ŕ",
                        Rang: "⟫",
                        Rarr: "↠",
                        Rarrtl: "⤖",
                        Rcaron: "Ř",
                        Rcedil: "Ŗ",
                        Rcy: "Р",
                        Re: "ℜ",
                        ReverseElement: "∋",
                        ReverseEquilibrium: "⇋",
                        ReverseUpEquilibrium: "⥯",
                        Rfr: "ℜ",
                        Rho: "Ρ",
                        RightAngleBracket: "⟩",
                        RightArrow: "→",
                        RightArrowBar: "⇥",
                        RightArrowLeftArrow: "⇄",
                        RightCeiling: "⌉",
                        RightDoubleBracket: "⟧",
                        RightDownTeeVector: "⥝",
                        RightDownVector: "⇂",
                        RightDownVectorBar: "⥕",
                        RightFloor: "⌋",
                        RightTee: "⊢",
                        RightTeeArrow: "↦",
                        RightTeeVector: "⥛",
                        RightTriangle: "⊳",
                        RightTriangleBar: "⧐",
                        RightTriangleEqual: "⊵",
                        RightUpDownVector: "⥏",
                        RightUpTeeVector: "⥜",
                        RightUpVector: "↾",
                        RightUpVectorBar: "⥔",
                        RightVector: "⇀",
                        RightVectorBar: "⥓",
                        Rightarrow: "⇒",
                        Ropf: "ℝ",
                        RoundImplies: "⥰",
                        Rrightarrow: "⇛",
                        Rscr: "ℛ",
                        Rsh: "↱",
                        RuleDelayed: "⧴",
                        SHCHcy: "Щ",
                        SHcy: "Ш",
                        SOFTcy: "Ь",
                        Sacute: "Ś",
                        Sc: "⪼",
                        Scaron: "Š",
                        Scedil: "Ş",
                        Scirc: "Ŝ",
                        Scy: "С",
                        Sfr: "\uD835\uDD16",
                        ShortDownArrow: "↓",
                        ShortLeftArrow: "←",
                        ShortRightArrow: "→",
                        ShortUpArrow: "↑",
                        Sigma: "Σ",
                        SmallCircle: "∘",
                        Sopf: "\uD835\uDD4A",
                        Sqrt: "√",
                        Square: "□",
                        SquareIntersection: "⊓",
                        SquareSubset: "⊏",
                        SquareSubsetEqual: "⊑",
                        SquareSuperset: "⊐",
                        SquareSupersetEqual: "⊒",
                        SquareUnion: "⊔",
                        Sscr: "\uD835\uDCAE",
                        Star: "⋆",
                        Sub: "⋐",
                        Subset: "⋐",
                        SubsetEqual: "⊆",
                        Succeeds: "≻",
                        SucceedsEqual: "⪰",
                        SucceedsSlantEqual: "≽",
                        SucceedsTilde: "≿",
                        SuchThat: "∋",
                        Sum: "∑",
                        Sup: "⋑",
                        Superset: "⊃",
                        SupersetEqual: "⊇",
                        Supset: "⋑",
                        THOR: "\xde",
                        THORN: "\xde",
                        TRADE: "™",
                        TSHcy: "Ћ",
                        TScy: "Ц",
                        Tab: "	",
                        Tau: "Τ",
                        Tcaron: "Ť",
                        Tcedil: "Ţ",
                        Tcy: "Т",
                        Tfr: "\uD835\uDD17",
                        Therefore: "∴",
                        Theta: "Θ",
                        ThickSpace: "  ",
                        ThinSpace: " ",
                        Tilde: "∼",
                        TildeEqual: "≃",
                        TildeFullEqual: "≅",
                        TildeTilde: "≈",
                        Topf: "\uD835\uDD4B",
                        TripleDot: "⃛",
                        Tscr: "\uD835\uDCAF",
                        Tstrok: "Ŧ",
                        Uacut: "\xda",
                        Uacute: "\xda",
                        Uarr: "↟",
                        Uarrocir: "⥉",
                        Ubrcy: "Ў",
                        Ubreve: "Ŭ",
                        Ucir: "\xdb",
                        Ucirc: "\xdb",
                        Ucy: "У",
                        Udblac: "Ű",
                        Ufr: "\uD835\uDD18",
                        Ugrav: "\xd9",
                        Ugrave: "\xd9",
                        Umacr: "Ū",
                        UnderBar: "_",
                        UnderBrace: "⏟",
                        UnderBracket: "⎵",
                        UnderParenthesis: "⏝",
                        Union: "⋃",
                        UnionPlus: "⊎",
                        Uogon: "Ų",
                        Uopf: "\uD835\uDD4C",
                        UpArrow: "↑",
                        UpArrowBar: "⤒",
                        UpArrowDownArrow: "⇅",
                        UpDownArrow: "↕",
                        UpEquilibrium: "⥮",
                        UpTee: "⊥",
                        UpTeeArrow: "↥",
                        Uparrow: "⇑",
                        Updownarrow: "⇕",
                        UpperLeftArrow: "↖",
                        UpperRightArrow: "↗",
                        Upsi: "ϒ",
                        Upsilon: "Υ",
                        Uring: "Ů",
                        Uscr: "\uD835\uDCB0",
                        Utilde: "Ũ",
                        Uum: "\xdc",
                        Uuml: "\xdc",
                        VDash: "⊫",
                        Vbar: "⫫",
                        Vcy: "В",
                        Vdash: "⊩",
                        Vdashl: "⫦",
                        Vee: "⋁",
                        Verbar: "‖",
                        Vert: "‖",
                        VerticalBar: "∣",
                        VerticalLine: "|",
                        VerticalSeparator: "❘",
                        VerticalTilde: "≀",
                        VeryThinSpace: " ",
                        Vfr: "\uD835\uDD19",
                        Vopf: "\uD835\uDD4D",
                        Vscr: "\uD835\uDCB1",
                        Vvdash: "⊪",
                        Wcirc: "Ŵ",
                        Wedge: "⋀",
                        Wfr: "\uD835\uDD1A",
                        Wopf: "\uD835\uDD4E",
                        Wscr: "\uD835\uDCB2",
                        Xfr: "\uD835\uDD1B",
                        Xi: "Ξ",
                        Xopf: "\uD835\uDD4F",
                        Xscr: "\uD835\uDCB3",
                        YAcy: "Я",
                        YIcy: "Ї",
                        YUcy: "Ю",
                        Yacut: "\xdd",
                        Yacute: "\xdd",
                        Ycirc: "Ŷ",
                        Ycy: "Ы",
                        Yfr: "\uD835\uDD1C",
                        Yopf: "\uD835\uDD50",
                        Yscr: "\uD835\uDCB4",
                        Yuml: "Ÿ",
                        ZHcy: "Ж",
                        Zacute: "Ź",
                        Zcaron: "Ž",
                        Zcy: "З",
                        Zdot: "Ż",
                        ZeroWidthSpace: "​",
                        Zeta: "Ζ",
                        Zfr: "ℨ",
                        Zopf: "ℤ",
                        Zscr: "\uD835\uDCB5",
                        aacut: "\xe1",
                        aacute: "\xe1",
                        abreve: "ă",
                        ac: "∾",
                        acE: "∾̳",
                        acd: "∿",
                        acir: "\xe2",
                        acirc: "\xe2",
                        acut: "\xb4",
                        acute: "\xb4",
                        acy: "а",
                        aeli: "\xe6",
                        aelig: "\xe6",
                        af: "⁡",
                        afr: "\uD835\uDD1E",
                        agrav: "\xe0",
                        agrave: "\xe0",
                        alefsym: "ℵ",
                        aleph: "ℵ",
                        alpha: "α",
                        amacr: "ā",
                        amalg: "⨿",
                        am: "&",
                        amp: "&",
                        and: "∧",
                        andand: "⩕",
                        andd: "⩜",
                        andslope: "⩘",
                        andv: "⩚",
                        ang: "∠",
                        ange: "⦤",
                        angle: "∠",
                        angmsd: "∡",
                        angmsdaa: "⦨",
                        angmsdab: "⦩",
                        angmsdac: "⦪",
                        angmsdad: "⦫",
                        angmsdae: "⦬",
                        angmsdaf: "⦭",
                        angmsdag: "⦮",
                        angmsdah: "⦯",
                        angrt: "∟",
                        angrtvb: "⊾",
                        angrtvbd: "⦝",
                        angsph: "∢",
                        angst: "\xc5",
                        angzarr: "⍼",
                        aogon: "ą",
                        aopf: "\uD835\uDD52",
                        ap: "≈",
                        apE: "⩰",
                        apacir: "⩯",
                        ape: "≊",
                        apid: "≋",
                        apos: "'",
                        approx: "≈",
                        approxeq: "≊",
                        arin: "\xe5",
                        aring: "\xe5",
                        ascr: "\uD835\uDCB6",
                        ast: "*",
                        asymp: "≈",
                        asympeq: "≍",
                        atild: "\xe3",
                        atilde: "\xe3",
                        aum: "\xe4",
                        auml: "\xe4",
                        awconint: "∳",
                        awint: "⨑",
                        bNot: "⫭",
                        backcong: "≌",
                        backepsilon: "϶",
                        backprime: "‵",
                        backsim: "∽",
                        backsimeq: "⋍",
                        barvee: "⊽",
                        barwed: "⌅",
                        barwedge: "⌅",
                        bbrk: "⎵",
                        bbrktbrk: "⎶",
                        bcong: "≌",
                        bcy: "б",
                        bdquo: "„",
                        becaus: "∵",
                        because: "∵",
                        bemptyv: "⦰",
                        bepsi: "϶",
                        bernou: "ℬ",
                        beta: "β",
                        beth: "ℶ",
                        between: "≬",
                        bfr: "\uD835\uDD1F",
                        bigcap: "⋂",
                        bigcirc: "◯",
                        bigcup: "⋃",
                        bigodot: "⨀",
                        bigoplus: "⨁",
                        bigotimes: "⨂",
                        bigsqcup: "⨆",
                        bigstar: "★",
                        bigtriangledown: "▽",
                        bigtriangleup: "△",
                        biguplus: "⨄",
                        bigvee: "⋁",
                        bigwedge: "⋀",
                        bkarow: "⤍",
                        blacklozenge: "⧫",
                        blacksquare: "▪",
                        blacktriangle: "▴",
                        blacktriangledown: "▾",
                        blacktriangleleft: "◂",
                        blacktriangleright: "▸",
                        blank: "␣",
                        blk12: "▒",
                        blk14: "░",
                        blk34: "▓",
                        block: "█",
                        bne: "=⃥",
                        bnequiv: "≡⃥",
                        bnot: "⌐",
                        bopf: "\uD835\uDD53",
                        bot: "⊥",
                        bottom: "⊥",
                        bowtie: "⋈",
                        boxDL: "╗",
                        boxDR: "╔",
                        boxDl: "╖",
                        boxDr: "╓",
                        boxH: "═",
                        boxHD: "╦",
                        boxHU: "╩",
                        boxHd: "╤",
                        boxHu: "╧",
                        boxUL: "╝",
                        boxUR: "╚",
                        boxUl: "╜",
                        boxUr: "╙",
                        boxV: "║",
                        boxVH: "╬",
                        boxVL: "╣",
                        boxVR: "╠",
                        boxVh: "╫",
                        boxVl: "╢",
                        boxVr: "╟",
                        boxbox: "⧉",
                        boxdL: "╕",
                        boxdR: "╒",
                        boxdl: "┐",
                        boxdr: "┌",
                        boxh: "─",
                        boxhD: "╥",
                        boxhU: "╨",
                        boxhd: "┬",
                        boxhu: "┴",
                        boxminus: "⊟",
                        boxplus: "⊞",
                        boxtimes: "⊠",
                        boxuL: "╛",
                        boxuR: "╘",
                        boxul: "┘",
                        boxur: "└",
                        boxv: "│",
                        boxvH: "╪",
                        boxvL: "╡",
                        boxvR: "╞",
                        boxvh: "┼",
                        boxvl: "┤",
                        boxvr: "├",
                        bprime: "‵",
                        breve: "˘",
                        brvba: "\xa6",
                        brvbar: "\xa6",
                        bscr: "\uD835\uDCB7",
                        bsemi: "⁏",
                        bsim: "∽",
                        bsime: "⋍",
                        bsol: "\\",
                        bsolb: "⧅",
                        bsolhsub: "⟈",
                        bull: "•",
                        bullet: "•",
                        bump: "≎",
                        bumpE: "⪮",
                        bumpe: "≏",
                        bumpeq: "≏",
                        cacute: "ć",
                        cap: "∩",
                        capand: "⩄",
                        capbrcup: "⩉",
                        capcap: "⩋",
                        capcup: "⩇",
                        capdot: "⩀",
                        caps: "∩︀",
                        caret: "⁁",
                        caron: "ˇ",
                        ccaps: "⩍",
                        ccaron: "č",
                        ccedi: "\xe7",
                        ccedil: "\xe7",
                        ccirc: "ĉ",
                        ccups: "⩌",
                        ccupssm: "⩐",
                        cdot: "ċ",
                        cedi: "\xb8",
                        cedil: "\xb8",
                        cemptyv: "⦲",
                        cen: "\xa2",
                        cent: "\xa2",
                        centerdot: "\xb7",
                        cfr: "\uD835\uDD20",
                        chcy: "ч",
                        check: "✓",
                        checkmark: "✓",
                        chi: "χ",
                        cir: "○",
                        cirE: "⧃",
                        circ: "ˆ",
                        circeq: "≗",
                        circlearrowleft: "↺",
                        circlearrowright: "↻",
                        circledR: "\xae",
                        circledS: "Ⓢ",
                        circledast: "⊛",
                        circledcirc: "⊚",
                        circleddash: "⊝",
                        cire: "≗",
                        cirfnint: "⨐",
                        cirmid: "⫯",
                        cirscir: "⧂",
                        clubs: "♣",
                        clubsuit: "♣",
                        colon: ":",
                        colone: "≔",
                        coloneq: "≔",
                        comma: ",",
                        commat: "@",
                        comp: "∁",
                        compfn: "∘",
                        complement: "∁",
                        complexes: "ℂ",
                        cong: "≅",
                        congdot: "⩭",
                        conint: "∮",
                        copf: "\uD835\uDD54",
                        coprod: "∐",
                        cop: "\xa9",
                        copy: "\xa9",
                        copysr: "℗",
                        crarr: "↵",
                        cross: "✗",
                        cscr: "\uD835\uDCB8",
                        csub: "⫏",
                        csube: "⫑",
                        csup: "⫐",
                        csupe: "⫒",
                        ctdot: "⋯",
                        cudarrl: "⤸",
                        cudarrr: "⤵",
                        cuepr: "⋞",
                        cuesc: "⋟",
                        cularr: "↶",
                        cularrp: "⤽",
                        cup: "∪",
                        cupbrcap: "⩈",
                        cupcap: "⩆",
                        cupcup: "⩊",
                        cupdot: "⊍",
                        cupor: "⩅",
                        cups: "∪︀",
                        curarr: "↷",
                        curarrm: "⤼",
                        curlyeqprec: "⋞",
                        curlyeqsucc: "⋟",
                        curlyvee: "⋎",
                        curlywedge: "⋏",
                        curre: "\xa4",
                        curren: "\xa4",
                        curvearrowleft: "↶",
                        curvearrowright: "↷",
                        cuvee: "⋎",
                        cuwed: "⋏",
                        cwconint: "∲",
                        cwint: "∱",
                        cylcty: "⌭",
                        dArr: "⇓",
                        dHar: "⥥",
                        dagger: "†",
                        daleth: "ℸ",
                        darr: "↓",
                        dash: "‐",
                        dashv: "⊣",
                        dbkarow: "⤏",
                        dblac: "˝",
                        dcaron: "ď",
                        dcy: "д",
                        dd: "ⅆ",
                        ddagger: "‡",
                        ddarr: "⇊",
                        ddotseq: "⩷",
                        de: "\xb0",
                        deg: "\xb0",
                        delta: "δ",
                        demptyv: "⦱",
                        dfisht: "⥿",
                        dfr: "\uD835\uDD21",
                        dharl: "⇃",
                        dharr: "⇂",
                        diam: "⋄",
                        diamond: "⋄",
                        diamondsuit: "♦",
                        diams: "♦",
                        die: "\xa8",
                        digamma: "ϝ",
                        disin: "⋲",
                        div: "\xf7",
                        divid: "\xf7",
                        divide: "\xf7",
                        divideontimes: "⋇",
                        divonx: "⋇",
                        djcy: "ђ",
                        dlcorn: "⌞",
                        dlcrop: "⌍",
                        dollar: "$",
                        dopf: "\uD835\uDD55",
                        dot: "˙",
                        doteq: "≐",
                        doteqdot: "≑",
                        dotminus: "∸",
                        dotplus: "∔",
                        dotsquare: "⊡",
                        doublebarwedge: "⌆",
                        downarrow: "↓",
                        downdownarrows: "⇊",
                        downharpoonleft: "⇃",
                        downharpoonright: "⇂",
                        drbkarow: "⤐",
                        drcorn: "⌟",
                        drcrop: "⌌",
                        dscr: "\uD835\uDCB9",
                        dscy: "ѕ",
                        dsol: "⧶",
                        dstrok: "đ",
                        dtdot: "⋱",
                        dtri: "▿",
                        dtrif: "▾",
                        duarr: "⇵",
                        duhar: "⥯",
                        dwangle: "⦦",
                        dzcy: "џ",
                        dzigrarr: "⟿",
                        eDDot: "⩷",
                        eDot: "≑",
                        eacut: "\xe9",
                        eacute: "\xe9",
                        easter: "⩮",
                        ecaron: "ě",
                        ecir: "\xea",
                        ecirc: "\xea",
                        ecolon: "≕",
                        ecy: "э",
                        edot: "ė",
                        ee: "ⅇ",
                        efDot: "≒",
                        efr: "\uD835\uDD22",
                        eg: "⪚",
                        egrav: "\xe8",
                        egrave: "\xe8",
                        egs: "⪖",
                        egsdot: "⪘",
                        el: "⪙",
                        elinters: "⏧",
                        ell: "ℓ",
                        els: "⪕",
                        elsdot: "⪗",
                        emacr: "ē",
                        empty: "∅",
                        emptyset: "∅",
                        emptyv: "∅",
                        emsp13: " ",
                        emsp14: " ",
                        emsp: " ",
                        eng: "ŋ",
                        ensp: " ",
                        eogon: "ę",
                        eopf: "\uD835\uDD56",
                        epar: "⋕",
                        eparsl: "⧣",
                        eplus: "⩱",
                        epsi: "ε",
                        epsilon: "ε",
                        epsiv: "ϵ",
                        eqcirc: "≖",
                        eqcolon: "≕",
                        eqsim: "≂",
                        eqslantgtr: "⪖",
                        eqslantless: "⪕",
                        equals: "=",
                        equest: "≟",
                        equiv: "≡",
                        equivDD: "⩸",
                        eqvparsl: "⧥",
                        erDot: "≓",
                        erarr: "⥱",
                        escr: "ℯ",
                        esdot: "≐",
                        esim: "≂",
                        eta: "η",
                        et: "\xf0",
                        eth: "\xf0",
                        eum: "\xeb",
                        euml: "\xeb",
                        euro: "€",
                        excl: "!",
                        exist: "∃",
                        expectation: "ℰ",
                        exponentiale: "ⅇ",
                        fallingdotseq: "≒",
                        fcy: "ф",
                        female: "♀",
                        ffilig: "ﬃ",
                        fflig: "ﬀ",
                        ffllig: "ﬄ",
                        ffr: "\uD835\uDD23",
                        filig: "ﬁ",
                        fjlig: "fj",
                        flat: "♭",
                        fllig: "ﬂ",
                        fltns: "▱",
                        fnof: "ƒ",
                        fopf: "\uD835\uDD57",
                        forall: "∀",
                        fork: "⋔",
                        forkv: "⫙",
                        fpartint: "⨍",
                        frac1: "\xbc",
                        frac12: "\xbd",
                        frac13: "⅓",
                        frac14: "\xbc",
                        frac15: "⅕",
                        frac16: "⅙",
                        frac18: "⅛",
                        frac23: "⅔",
                        frac25: "⅖",
                        frac3: "\xbe",
                        frac34: "\xbe",
                        frac35: "⅗",
                        frac38: "⅜",
                        frac45: "⅘",
                        frac56: "⅚",
                        frac58: "⅝",
                        frac78: "⅞",
                        frasl: "⁄",
                        frown: "⌢",
                        fscr: "\uD835\uDCBB",
                        gE: "≧",
                        gEl: "⪌",
                        gacute: "ǵ",
                        gamma: "γ",
                        gammad: "ϝ",
                        gap: "⪆",
                        gbreve: "ğ",
                        gcirc: "ĝ",
                        gcy: "г",
                        gdot: "ġ",
                        ge: "≥",
                        gel: "⋛",
                        geq: "≥",
                        geqq: "≧",
                        geqslant: "⩾",
                        ges: "⩾",
                        gescc: "⪩",
                        gesdot: "⪀",
                        gesdoto: "⪂",
                        gesdotol: "⪄",
                        gesl: "⋛︀",
                        gesles: "⪔",
                        gfr: "\uD835\uDD24",
                        gg: "≫",
                        ggg: "⋙",
                        gimel: "ℷ",
                        gjcy: "ѓ",
                        gl: "≷",
                        glE: "⪒",
                        gla: "⪥",
                        glj: "⪤",
                        gnE: "≩",
                        gnap: "⪊",
                        gnapprox: "⪊",
                        gne: "⪈",
                        gneq: "⪈",
                        gneqq: "≩",
                        gnsim: "⋧",
                        gopf: "\uD835\uDD58",
                        grave: "`",
                        gscr: "ℊ",
                        gsim: "≳",
                        gsime: "⪎",
                        gsiml: "⪐",
                        g: ">",
                        gt: ">",
                        gtcc: "⪧",
                        gtcir: "⩺",
                        gtdot: "⋗",
                        gtlPar: "⦕",
                        gtquest: "⩼",
                        gtrapprox: "⪆",
                        gtrarr: "⥸",
                        gtrdot: "⋗",
                        gtreqless: "⋛",
                        gtreqqless: "⪌",
                        gtrless: "≷",
                        gtrsim: "≳",
                        gvertneqq: "≩︀",
                        gvnE: "≩︀",
                        hArr: "⇔",
                        hairsp: " ",
                        half: "\xbd",
                        hamilt: "ℋ",
                        hardcy: "ъ",
                        harr: "↔",
                        harrcir: "⥈",
                        harrw: "↭",
                        hbar: "ℏ",
                        hcirc: "ĥ",
                        hearts: "♥",
                        heartsuit: "♥",
                        hellip: "…",
                        hercon: "⊹",
                        hfr: "\uD835\uDD25",
                        hksearow: "⤥",
                        hkswarow: "⤦",
                        hoarr: "⇿",
                        homtht: "∻",
                        hookleftarrow: "↩",
                        hookrightarrow: "↪",
                        hopf: "\uD835\uDD59",
                        horbar: "―",
                        hscr: "\uD835\uDCBD",
                        hslash: "ℏ",
                        hstrok: "ħ",
                        hybull: "⁃",
                        hyphen: "‐",
                        iacut: "\xed",
                        iacute: "\xed",
                        ic: "⁣",
                        icir: "\xee",
                        icirc: "\xee",
                        icy: "и",
                        iecy: "е",
                        iexc: "\xa1",
                        iexcl: "\xa1",
                        iff: "⇔",
                        ifr: "\uD835\uDD26",
                        igrav: "\xec",
                        igrave: "\xec",
                        ii: "ⅈ",
                        iiiint: "⨌",
                        iiint: "∭",
                        iinfin: "⧜",
                        iiota: "℩",
                        ijlig: "ĳ",
                        imacr: "ī",
                        image: "ℑ",
                        imagline: "ℐ",
                        imagpart: "ℑ",
                        imath: "ı",
                        imof: "⊷",
                        imped: "Ƶ",
                        in: "∈",
                        incare: "℅",
                        infin: "∞",
                        infintie: "⧝",
                        inodot: "ı",
                        int: "∫",
                        intcal: "⊺",
                        integers: "ℤ",
                        intercal: "⊺",
                        intlarhk: "⨗",
                        intprod: "⨼",
                        iocy: "ё",
                        iogon: "į",
                        iopf: "\uD835\uDD5A",
                        iota: "ι",
                        iprod: "⨼",
                        iques: "\xbf",
                        iquest: "\xbf",
                        iscr: "\uD835\uDCBE",
                        isin: "∈",
                        isinE: "⋹",
                        isindot: "⋵",
                        isins: "⋴",
                        isinsv: "⋳",
                        isinv: "∈",
                        it: "⁢",
                        itilde: "ĩ",
                        iukcy: "і",
                        ium: "\xef",
                        iuml: "\xef",
                        jcirc: "ĵ",
                        jcy: "й",
                        jfr: "\uD835\uDD27",
                        jmath: "ȷ",
                        jopf: "\uD835\uDD5B",
                        jscr: "\uD835\uDCBF",
                        jsercy: "ј",
                        jukcy: "є",
                        kappa: "κ",
                        kappav: "ϰ",
                        kcedil: "ķ",
                        kcy: "к",
                        kfr: "\uD835\uDD28",
                        kgreen: "ĸ",
                        khcy: "х",
                        kjcy: "ќ",
                        kopf: "\uD835\uDD5C",
                        kscr: "\uD835\uDCC0",
                        lAarr: "⇚",
                        lArr: "⇐",
                        lAtail: "⤛",
                        lBarr: "⤎",
                        lE: "≦",
                        lEg: "⪋",
                        lHar: "⥢",
                        lacute: "ĺ",
                        laemptyv: "⦴",
                        lagran: "ℒ",
                        lambda: "λ",
                        lang: "⟨",
                        langd: "⦑",
                        langle: "⟨",
                        lap: "⪅",
                        laqu: "\xab",
                        laquo: "\xab",
                        larr: "←",
                        larrb: "⇤",
                        larrbfs: "⤟",
                        larrfs: "⤝",
                        larrhk: "↩",
                        larrlp: "↫",
                        larrpl: "⤹",
                        larrsim: "⥳",
                        larrtl: "↢",
                        lat: "⪫",
                        latail: "⤙",
                        late: "⪭",
                        lates: "⪭︀",
                        lbarr: "⤌",
                        lbbrk: "❲",
                        lbrace: "{",
                        lbrack: "[",
                        lbrke: "⦋",
                        lbrksld: "⦏",
                        lbrkslu: "⦍",
                        lcaron: "ľ",
                        lcedil: "ļ",
                        lceil: "⌈",
                        lcub: "{",
                        lcy: "л",
                        ldca: "⤶",
                        ldquo: "“",
                        ldquor: "„",
                        ldrdhar: "⥧",
                        ldrushar: "⥋",
                        ldsh: "↲",
                        le: "≤",
                        leftarrow: "←",
                        leftarrowtail: "↢",
                        leftharpoondown: "↽",
                        leftharpoonup: "↼",
                        leftleftarrows: "⇇",
                        leftrightarrow: "↔",
                        leftrightarrows: "⇆",
                        leftrightharpoons: "⇋",
                        leftrightsquigarrow: "↭",
                        leftthreetimes: "⋋",
                        leg: "⋚",
                        leq: "≤",
                        leqq: "≦",
                        leqslant: "⩽",
                        les: "⩽",
                        lescc: "⪨",
                        lesdot: "⩿",
                        lesdoto: "⪁",
                        lesdotor: "⪃",
                        lesg: "⋚︀",
                        lesges: "⪓",
                        lessapprox: "⪅",
                        lessdot: "⋖",
                        lesseqgtr: "⋚",
                        lesseqqgtr: "⪋",
                        lessgtr: "≶",
                        lesssim: "≲",
                        lfisht: "⥼",
                        lfloor: "⌊",
                        lfr: "\uD835\uDD29",
                        lg: "≶",
                        lgE: "⪑",
                        lhard: "↽",
                        lharu: "↼",
                        lharul: "⥪",
                        lhblk: "▄",
                        ljcy: "љ",
                        ll: "≪",
                        llarr: "⇇",
                        llcorner: "⌞",
                        llhard: "⥫",
                        lltri: "◺",
                        lmidot: "ŀ",
                        lmoust: "⎰",
                        lmoustache: "⎰",
                        lnE: "≨",
                        lnap: "⪉",
                        lnapprox: "⪉",
                        lne: "⪇",
                        lneq: "⪇",
                        lneqq: "≨",
                        lnsim: "⋦",
                        loang: "⟬",
                        loarr: "⇽",
                        lobrk: "⟦",
                        longleftarrow: "⟵",
                        longleftrightarrow: "⟷",
                        longmapsto: "⟼",
                        longrightarrow: "⟶",
                        looparrowleft: "↫",
                        looparrowright: "↬",
                        lopar: "⦅",
                        lopf: "\uD835\uDD5D",
                        loplus: "⨭",
                        lotimes: "⨴",
                        lowast: "∗",
                        lowbar: "_",
                        loz: "◊",
                        lozenge: "◊",
                        lozf: "⧫",
                        lpar: "(",
                        lparlt: "⦓",
                        lrarr: "⇆",
                        lrcorner: "⌟",
                        lrhar: "⇋",
                        lrhard: "⥭",
                        lrm: "‎",
                        lrtri: "⊿",
                        lsaquo: "‹",
                        lscr: "\uD835\uDCC1",
                        lsh: "↰",
                        lsim: "≲",
                        lsime: "⪍",
                        lsimg: "⪏",
                        lsqb: "[",
                        lsquo: "‘",
                        lsquor: "‚",
                        lstrok: "ł",
                        l: "<",
                        lt: "<",
                        ltcc: "⪦",
                        ltcir: "⩹",
                        ltdot: "⋖",
                        lthree: "⋋",
                        ltimes: "⋉",
                        ltlarr: "⥶",
                        ltquest: "⩻",
                        ltrPar: "⦖",
                        ltri: "◃",
                        ltrie: "⊴",
                        ltrif: "◂",
                        lurdshar: "⥊",
                        luruhar: "⥦",
                        lvertneqq: "≨︀",
                        lvnE: "≨︀",
                        mDDot: "∺",
                        mac: "\xaf",
                        macr: "\xaf",
                        male: "♂",
                        malt: "✠",
                        maltese: "✠",
                        map: "↦",
                        mapsto: "↦",
                        mapstodown: "↧",
                        mapstoleft: "↤",
                        mapstoup: "↥",
                        marker: "▮",
                        mcomma: "⨩",
                        mcy: "м",
                        mdash: "—",
                        measuredangle: "∡",
                        mfr: "\uD835\uDD2A",
                        mho: "℧",
                        micr: "\xb5",
                        micro: "\xb5",
                        mid: "∣",
                        midast: "*",
                        midcir: "⫰",
                        middo: "\xb7",
                        middot: "\xb7",
                        minus: "−",
                        minusb: "⊟",
                        minusd: "∸",
                        minusdu: "⨪",
                        mlcp: "⫛",
                        mldr: "…",
                        mnplus: "∓",
                        models: "⊧",
                        mopf: "\uD835\uDD5E",
                        mp: "∓",
                        mscr: "\uD835\uDCC2",
                        mstpos: "∾",
                        mu: "μ",
                        multimap: "⊸",
                        mumap: "⊸",
                        nGg: "⋙̸",
                        nGt: "≫⃒",
                        nGtv: "≫̸",
                        nLeftarrow: "⇍",
                        nLeftrightarrow: "⇎",
                        nLl: "⋘̸",
                        nLt: "≪⃒",
                        nLtv: "≪̸",
                        nRightarrow: "⇏",
                        nVDash: "⊯",
                        nVdash: "⊮",
                        nabla: "∇",
                        nacute: "ń",
                        nang: "∠⃒",
                        nap: "≉",
                        napE: "⩰̸",
                        napid: "≋̸",
                        napos: "ŉ",
                        napprox: "≉",
                        natur: "♮",
                        natural: "♮",
                        naturals: "ℕ",
                        nbs: "\xa0",
                        nbsp: "\xa0",
                        nbump: "≎̸",
                        nbumpe: "≏̸",
                        ncap: "⩃",
                        ncaron: "ň",
                        ncedil: "ņ",
                        ncong: "≇",
                        ncongdot: "⩭̸",
                        ncup: "⩂",
                        ncy: "н",
                        ndash: "–",
                        ne: "≠",
                        neArr: "⇗",
                        nearhk: "⤤",
                        nearr: "↗",
                        nearrow: "↗",
                        nedot: "≐̸",
                        nequiv: "≢",
                        nesear: "⤨",
                        nesim: "≂̸",
                        nexist: "∄",
                        nexists: "∄",
                        nfr: "\uD835\uDD2B",
                        ngE: "≧̸",
                        nge: "≱",
                        ngeq: "≱",
                        ngeqq: "≧̸",
                        ngeqslant: "⩾̸",
                        nges: "⩾̸",
                        ngsim: "≵",
                        ngt: "≯",
                        ngtr: "≯",
                        nhArr: "⇎",
                        nharr: "↮",
                        nhpar: "⫲",
                        ni: "∋",
                        nis: "⋼",
                        nisd: "⋺",
                        niv: "∋",
                        njcy: "њ",
                        nlArr: "⇍",
                        nlE: "≦̸",
                        nlarr: "↚",
                        nldr: "‥",
                        nle: "≰",
                        nleftarrow: "↚",
                        nleftrightarrow: "↮",
                        nleq: "≰",
                        nleqq: "≦̸",
                        nleqslant: "⩽̸",
                        nles: "⩽̸",
                        nless: "≮",
                        nlsim: "≴",
                        nlt: "≮",
                        nltri: "⋪",
                        nltrie: "⋬",
                        nmid: "∤",
                        nopf: "\uD835\uDD5F",
                        no: "\xac",
                        not: "\xac",
                        notin: "∉",
                        notinE: "⋹̸",
                        notindot: "⋵̸",
                        notinva: "∉",
                        notinvb: "⋷",
                        notinvc: "⋶",
                        notni: "∌",
                        notniva: "∌",
                        notnivb: "⋾",
                        notnivc: "⋽",
                        npar: "∦",
                        nparallel: "∦",
                        nparsl: "⫽⃥",
                        npart: "∂̸",
                        npolint: "⨔",
                        npr: "⊀",
                        nprcue: "⋠",
                        npre: "⪯̸",
                        nprec: "⊀",
                        npreceq: "⪯̸",
                        nrArr: "⇏",
                        nrarr: "↛",
                        nrarrc: "⤳̸",
                        nrarrw: "↝̸",
                        nrightarrow: "↛",
                        nrtri: "⋫",
                        nrtrie: "⋭",
                        nsc: "⊁",
                        nsccue: "⋡",
                        nsce: "⪰̸",
                        nscr: "\uD835\uDCC3",
                        nshortmid: "∤",
                        nshortparallel: "∦",
                        nsim: "≁",
                        nsime: "≄",
                        nsimeq: "≄",
                        nsmid: "∤",
                        nspar: "∦",
                        nsqsube: "⋢",
                        nsqsupe: "⋣",
                        nsub: "⊄",
                        nsubE: "⫅̸",
                        nsube: "⊈",
                        nsubset: "⊂⃒",
                        nsubseteq: "⊈",
                        nsubseteqq: "⫅̸",
                        nsucc: "⊁",
                        nsucceq: "⪰̸",
                        nsup: "⊅",
                        nsupE: "⫆̸",
                        nsupe: "⊉",
                        nsupset: "⊃⃒",
                        nsupseteq: "⊉",
                        nsupseteqq: "⫆̸",
                        ntgl: "≹",
                        ntild: "\xf1",
                        ntilde: "\xf1",
                        ntlg: "≸",
                        ntriangleleft: "⋪",
                        ntrianglelefteq: "⋬",
                        ntriangleright: "⋫",
                        ntrianglerighteq: "⋭",
                        nu: "ν",
                        num: "#",
                        numero: "№",
                        numsp: " ",
                        nvDash: "⊭",
                        nvHarr: "⤄",
                        nvap: "≍⃒",
                        nvdash: "⊬",
                        nvge: "≥⃒",
                        nvgt: ">⃒",
                        nvinfin: "⧞",
                        nvlArr: "⤂",
                        nvle: "≤⃒",
                        nvlt: "<⃒",
                        nvltrie: "⊴⃒",
                        nvrArr: "⤃",
                        nvrtrie: "⊵⃒",
                        nvsim: "∼⃒",
                        nwArr: "⇖",
                        nwarhk: "⤣",
                        nwarr: "↖",
                        nwarrow: "↖",
                        nwnear: "⤧",
                        oS: "Ⓢ",
                        oacut: "\xf3",
                        oacute: "\xf3",
                        oast: "⊛",
                        ocir: "\xf4",
                        ocirc: "\xf4",
                        ocy: "о",
                        odash: "⊝",
                        odblac: "ő",
                        odiv: "⨸",
                        odot: "⊙",
                        odsold: "⦼",
                        oelig: "œ",
                        ofcir: "⦿",
                        ofr: "\uD835\uDD2C",
                        ogon: "˛",
                        ograv: "\xf2",
                        ograve: "\xf2",
                        ogt: "⧁",
                        ohbar: "⦵",
                        ohm: "Ω",
                        oint: "∮",
                        olarr: "↺",
                        olcir: "⦾",
                        olcross: "⦻",
                        oline: "‾",
                        olt: "⧀",
                        omacr: "ō",
                        omega: "ω",
                        omicron: "ο",
                        omid: "⦶",
                        ominus: "⊖",
                        oopf: "\uD835\uDD60",
                        opar: "⦷",
                        operp: "⦹",
                        oplus: "⊕",
                        or: "∨",
                        orarr: "↻",
                        ord: "\xba",
                        order: "ℴ",
                        orderof: "ℴ",
                        ordf: "\xaa",
                        ordm: "\xba",
                        origof: "⊶",
                        oror: "⩖",
                        orslope: "⩗",
                        orv: "⩛",
                        oscr: "ℴ",
                        oslas: "\xf8",
                        oslash: "\xf8",
                        osol: "⊘",
                        otild: "\xf5",
                        otilde: "\xf5",
                        otimes: "⊗",
                        otimesas: "⨶",
                        oum: "\xf6",
                        ouml: "\xf6",
                        ovbar: "⌽",
                        par: "\xb6",
                        para: "\xb6",
                        parallel: "∥",
                        parsim: "⫳",
                        parsl: "⫽",
                        part: "∂",
                        pcy: "п",
                        percnt: "%",
                        period: ".",
                        permil: "‰",
                        perp: "⊥",
                        pertenk: "‱",
                        pfr: "\uD835\uDD2D",
                        phi: "φ",
                        phiv: "ϕ",
                        phmmat: "ℳ",
                        phone: "☎",
                        pi: "π",
                        pitchfork: "⋔",
                        piv: "ϖ",
                        planck: "ℏ",
                        planckh: "ℎ",
                        plankv: "ℏ",
                        plus: "+",
                        plusacir: "⨣",
                        plusb: "⊞",
                        pluscir: "⨢",
                        plusdo: "∔",
                        plusdu: "⨥",
                        pluse: "⩲",
                        plusm: "\xb1",
                        plusmn: "\xb1",
                        plussim: "⨦",
                        plustwo: "⨧",
                        pm: "\xb1",
                        pointint: "⨕",
                        popf: "\uD835\uDD61",
                        poun: "\xa3",
                        pound: "\xa3",
                        pr: "≺",
                        prE: "⪳",
                        prap: "⪷",
                        prcue: "≼",
                        pre: "⪯",
                        prec: "≺",
                        precapprox: "⪷",
                        preccurlyeq: "≼",
                        preceq: "⪯",
                        precnapprox: "⪹",
                        precneqq: "⪵",
                        precnsim: "⋨",
                        precsim: "≾",
                        prime: "′",
                        primes: "ℙ",
                        prnE: "⪵",
                        prnap: "⪹",
                        prnsim: "⋨",
                        prod: "∏",
                        profalar: "⌮",
                        profline: "⌒",
                        profsurf: "⌓",
                        prop: "∝",
                        propto: "∝",
                        prsim: "≾",
                        prurel: "⊰",
                        pscr: "\uD835\uDCC5",
                        psi: "ψ",
                        puncsp: " ",
                        qfr: "\uD835\uDD2E",
                        qint: "⨌",
                        qopf: "\uD835\uDD62",
                        qprime: "⁗",
                        qscr: "\uD835\uDCC6",
                        quaternions: "ℍ",
                        quatint: "⨖",
                        quest: "?",
                        questeq: "≟",
                        quo: '"',
                        quot: '"',
                        rAarr: "⇛",
                        rArr: "⇒",
                        rAtail: "⤜",
                        rBarr: "⤏",
                        rHar: "⥤",
                        race: "∽̱",
                        racute: "ŕ",
                        radic: "√",
                        raemptyv: "⦳",
                        rang: "⟩",
                        rangd: "⦒",
                        range: "⦥",
                        rangle: "⟩",
                        raqu: "\xbb",
                        raquo: "\xbb",
                        rarr: "→",
                        rarrap: "⥵",
                        rarrb: "⇥",
                        rarrbfs: "⤠",
                        rarrc: "⤳",
                        rarrfs: "⤞",
                        rarrhk: "↪",
                        rarrlp: "↬",
                        rarrpl: "⥅",
                        rarrsim: "⥴",
                        rarrtl: "↣",
                        rarrw: "↝",
                        ratail: "⤚",
                        ratio: "∶",
                        rationals: "ℚ",
                        rbarr: "⤍",
                        rbbrk: "❳",
                        rbrace: "}",
                        rbrack: "]",
                        rbrke: "⦌",
                        rbrksld: "⦎",
                        rbrkslu: "⦐",
                        rcaron: "ř",
                        rcedil: "ŗ",
                        rceil: "⌉",
                        rcub: "}",
                        rcy: "р",
                        rdca: "⤷",
                        rdldhar: "⥩",
                        rdquo: "”",
                        rdquor: "”",
                        rdsh: "↳",
                        real: "ℜ",
                        realine: "ℛ",
                        realpart: "ℜ",
                        reals: "ℝ",
                        rect: "▭",
                        re: "\xae",
                        reg: "\xae",
                        rfisht: "⥽",
                        rfloor: "⌋",
                        rfr: "\uD835\uDD2F",
                        rhard: "⇁",
                        rharu: "⇀",
                        rharul: "⥬",
                        rho: "ρ",
                        rhov: "ϱ",
                        rightarrow: "→",
                        rightarrowtail: "↣",
                        rightharpoondown: "⇁",
                        rightharpoonup: "⇀",
                        rightleftarrows: "⇄",
                        rightleftharpoons: "⇌",
                        rightrightarrows: "⇉",
                        rightsquigarrow: "↝",
                        rightthreetimes: "⋌",
                        ring: "˚",
                        risingdotseq: "≓",
                        rlarr: "⇄",
                        rlhar: "⇌",
                        rlm: "‏",
                        rmoust: "⎱",
                        rmoustache: "⎱",
                        rnmid: "⫮",
                        roang: "⟭",
                        roarr: "⇾",
                        robrk: "⟧",
                        ropar: "⦆",
                        ropf: "\uD835\uDD63",
                        roplus: "⨮",
                        rotimes: "⨵",
                        rpar: ")",
                        rpargt: "⦔",
                        rppolint: "⨒",
                        rrarr: "⇉",
                        rsaquo: "›",
                        rscr: "\uD835\uDCC7",
                        rsh: "↱",
                        rsqb: "]",
                        rsquo: "’",
                        rsquor: "’",
                        rthree: "⋌",
                        rtimes: "⋊",
                        rtri: "▹",
                        rtrie: "⊵",
                        rtrif: "▸",
                        rtriltri: "⧎",
                        ruluhar: "⥨",
                        rx: "℞",
                        sacute: "ś",
                        sbquo: "‚",
                        sc: "≻",
                        scE: "⪴",
                        scap: "⪸",
                        scaron: "š",
                        sccue: "≽",
                        sce: "⪰",
                        scedil: "ş",
                        scirc: "ŝ",
                        scnE: "⪶",
                        scnap: "⪺",
                        scnsim: "⋩",
                        scpolint: "⨓",
                        scsim: "≿",
                        scy: "с",
                        sdot: "⋅",
                        sdotb: "⊡",
                        sdote: "⩦",
                        seArr: "⇘",
                        searhk: "⤥",
                        searr: "↘",
                        searrow: "↘",
                        sec: "\xa7",
                        sect: "\xa7",
                        semi: ";",
                        seswar: "⤩",
                        setminus: "∖",
                        setmn: "∖",
                        sext: "✶",
                        sfr: "\uD835\uDD30",
                        sfrown: "⌢",
                        sharp: "♯",
                        shchcy: "щ",
                        shcy: "ш",
                        shortmid: "∣",
                        shortparallel: "∥",
                        sh: "\xad",
                        shy: "\xad",
                        sigma: "σ",
                        sigmaf: "ς",
                        sigmav: "ς",
                        sim: "∼",
                        simdot: "⩪",
                        sime: "≃",
                        simeq: "≃",
                        simg: "⪞",
                        simgE: "⪠",
                        siml: "⪝",
                        simlE: "⪟",
                        simne: "≆",
                        simplus: "⨤",
                        simrarr: "⥲",
                        slarr: "←",
                        smallsetminus: "∖",
                        smashp: "⨳",
                        smeparsl: "⧤",
                        smid: "∣",
                        smile: "⌣",
                        smt: "⪪",
                        smte: "⪬",
                        smtes: "⪬︀",
                        softcy: "ь",
                        sol: "/",
                        solb: "⧄",
                        solbar: "⌿",
                        sopf: "\uD835\uDD64",
                        spades: "♠",
                        spadesuit: "♠",
                        spar: "∥",
                        sqcap: "⊓",
                        sqcaps: "⊓︀",
                        sqcup: "⊔",
                        sqcups: "⊔︀",
                        sqsub: "⊏",
                        sqsube: "⊑",
                        sqsubset: "⊏",
                        sqsubseteq: "⊑",
                        sqsup: "⊐",
                        sqsupe: "⊒",
                        sqsupset: "⊐",
                        sqsupseteq: "⊒",
                        squ: "□",
                        square: "□",
                        squarf: "▪",
                        squf: "▪",
                        srarr: "→",
                        sscr: "\uD835\uDCC8",
                        ssetmn: "∖",
                        ssmile: "⌣",
                        sstarf: "⋆",
                        star: "☆",
                        starf: "★",
                        straightepsilon: "ϵ",
                        straightphi: "ϕ",
                        strns: "\xaf",
                        sub: "⊂",
                        subE: "⫅",
                        subdot: "⪽",
                        sube: "⊆",
                        subedot: "⫃",
                        submult: "⫁",
                        subnE: "⫋",
                        subne: "⊊",
                        subplus: "⪿",
                        subrarr: "⥹",
                        subset: "⊂",
                        subseteq: "⊆",
                        subseteqq: "⫅",
                        subsetneq: "⊊",
                        subsetneqq: "⫋",
                        subsim: "⫇",
                        subsub: "⫕",
                        subsup: "⫓",
                        succ: "≻",
                        succapprox: "⪸",
                        succcurlyeq: "≽",
                        succeq: "⪰",
                        succnapprox: "⪺",
                        succneqq: "⪶",
                        succnsim: "⋩",
                        succsim: "≿",
                        sum: "∑",
                        sung: "♪",
                        sup: "⊃",
                        sup1: "\xb9",
                        sup2: "\xb2",
                        sup3: "\xb3",
                        supE: "⫆",
                        supdot: "⪾",
                        supdsub: "⫘",
                        supe: "⊇",
                        supedot: "⫄",
                        suphsol: "⟉",
                        suphsub: "⫗",
                        suplarr: "⥻",
                        supmult: "⫂",
                        supnE: "⫌",
                        supne: "⊋",
                        supplus: "⫀",
                        supset: "⊃",
                        supseteq: "⊇",
                        supseteqq: "⫆",
                        supsetneq: "⊋",
                        supsetneqq: "⫌",
                        supsim: "⫈",
                        supsub: "⫔",
                        supsup: "⫖",
                        swArr: "⇙",
                        swarhk: "⤦",
                        swarr: "↙",
                        swarrow: "↙",
                        swnwar: "⤪",
                        szli: "\xdf",
                        szlig: "\xdf",
                        target: "⌖",
                        tau: "τ",
                        tbrk: "⎴",
                        tcaron: "ť",
                        tcedil: "ţ",
                        tcy: "т",
                        tdot: "⃛",
                        telrec: "⌕",
                        tfr: "\uD835\uDD31",
                        there4: "∴",
                        therefore: "∴",
                        theta: "θ",
                        thetasym: "ϑ",
                        thetav: "ϑ",
                        thickapprox: "≈",
                        thicksim: "∼",
                        thinsp: " ",
                        thkap: "≈",
                        thksim: "∼",
                        thor: "\xfe",
                        thorn: "\xfe",
                        tilde: "˜",
                        time: "\xd7",
                        times: "\xd7",
                        timesb: "⊠",
                        timesbar: "⨱",
                        timesd: "⨰",
                        tint: "∭",
                        toea: "⤨",
                        top: "⊤",
                        topbot: "⌶",
                        topcir: "⫱",
                        topf: "\uD835\uDD65",
                        topfork: "⫚",
                        tosa: "⤩",
                        tprime: "‴",
                        trade: "™",
                        triangle: "▵",
                        triangledown: "▿",
                        triangleleft: "◃",
                        trianglelefteq: "⊴",
                        triangleq: "≜",
                        triangleright: "▹",
                        trianglerighteq: "⊵",
                        tridot: "◬",
                        trie: "≜",
                        triminus: "⨺",
                        triplus: "⨹",
                        trisb: "⧍",
                        tritime: "⨻",
                        trpezium: "⏢",
                        tscr: "\uD835\uDCC9",
                        tscy: "ц",
                        tshcy: "ћ",
                        tstrok: "ŧ",
                        twixt: "≬",
                        twoheadleftarrow: "↞",
                        twoheadrightarrow: "↠",
                        uArr: "⇑",
                        uHar: "⥣",
                        uacut: "\xfa",
                        uacute: "\xfa",
                        uarr: "↑",
                        ubrcy: "ў",
                        ubreve: "ŭ",
                        ucir: "\xfb",
                        ucirc: "\xfb",
                        ucy: "у",
                        udarr: "⇅",
                        udblac: "ű",
                        udhar: "⥮",
                        ufisht: "⥾",
                        ufr: "\uD835\uDD32",
                        ugrav: "\xf9",
                        ugrave: "\xf9",
                        uharl: "↿",
                        uharr: "↾",
                        uhblk: "▀",
                        ulcorn: "⌜",
                        ulcorner: "⌜",
                        ulcrop: "⌏",
                        ultri: "◸",
                        umacr: "ū",
                        um: "\xa8",
                        uml: "\xa8",
                        uogon: "ų",
                        uopf: "\uD835\uDD66",
                        uparrow: "↑",
                        updownarrow: "↕",
                        upharpoonleft: "↿",
                        upharpoonright: "↾",
                        uplus: "⊎",
                        upsi: "υ",
                        upsih: "ϒ",
                        upsilon: "υ",
                        upuparrows: "⇈",
                        urcorn: "⌝",
                        urcorner: "⌝",
                        urcrop: "⌎",
                        uring: "ů",
                        urtri: "◹",
                        uscr: "\uD835\uDCCA",
                        utdot: "⋰",
                        utilde: "ũ",
                        utri: "▵",
                        utrif: "▴",
                        uuarr: "⇈",
                        uum: "\xfc",
                        uuml: "\xfc",
                        uwangle: "⦧",
                        vArr: "⇕",
                        vBar: "⫨",
                        vBarv: "⫩",
                        vDash: "⊨",
                        vangrt: "⦜",
                        varepsilon: "ϵ",
                        varkappa: "ϰ",
                        varnothing: "∅",
                        varphi: "ϕ",
                        varpi: "ϖ",
                        varpropto: "∝",
                        varr: "↕",
                        varrho: "ϱ",
                        varsigma: "ς",
                        varsubsetneq: "⊊︀",
                        varsubsetneqq: "⫋︀",
                        varsupsetneq: "⊋︀",
                        varsupsetneqq: "⫌︀",
                        vartheta: "ϑ",
                        vartriangleleft: "⊲",
                        vartriangleright: "⊳",
                        vcy: "в",
                        vdash: "⊢",
                        vee: "∨",
                        veebar: "⊻",
                        veeeq: "≚",
                        vellip: "⋮",
                        verbar: "|",
                        vert: "|",
                        vfr: "\uD835\uDD33",
                        vltri: "⊲",
                        vnsub: "⊂⃒",
                        vnsup: "⊃⃒",
                        vopf: "\uD835\uDD67",
                        vprop: "∝",
                        vrtri: "⊳",
                        vscr: "\uD835\uDCCB",
                        vsubnE: "⫋︀",
                        vsubne: "⊊︀",
                        vsupnE: "⫌︀",
                        vsupne: "⊋︀",
                        vzigzag: "⦚",
                        wcirc: "ŵ",
                        wedbar: "⩟",
                        wedge: "∧",
                        wedgeq: "≙",
                        weierp: "℘",
                        wfr: "\uD835\uDD34",
                        wopf: "\uD835\uDD68",
                        wp: "℘",
                        wr: "≀",
                        wreath: "≀",
                        wscr: "\uD835\uDCCC",
                        xcap: "⋂",
                        xcirc: "◯",
                        xcup: "⋃",
                        xdtri: "▽",
                        xfr: "\uD835\uDD35",
                        xhArr: "⟺",
                        xharr: "⟷",
                        xi: "ξ",
                        xlArr: "⟸",
                        xlarr: "⟵",
                        xmap: "⟼",
                        xnis: "⋻",
                        xodot: "⨀",
                        xopf: "\uD835\uDD69",
                        xoplus: "⨁",
                        xotime: "⨂",
                        xrArr: "⟹",
                        xrarr: "⟶",
                        xscr: "\uD835\uDCCD",
                        xsqcup: "⨆",
                        xuplus: "⨄",
                        xutri: "△",
                        xvee: "⋁",
                        xwedge: "⋀",
                        yacut: "\xfd",
                        yacute: "\xfd",
                        yacy: "я",
                        ycirc: "ŷ",
                        ycy: "ы",
                        ye: "\xa5",
                        yen: "\xa5",
                        yfr: "\uD835\uDD36",
                        yicy: "ї",
                        yopf: "\uD835\uDD6A",
                        yscr: "\uD835\uDCCE",
                        yucy: "ю",
                        yum: "\xff",
                        yuml: "\xff",
                        zacute: "ź",
                        zcaron: "ž",
                        zcy: "з",
                        zdot: "ż",
                        zeetrf: "ℨ",
                        zeta: "ζ",
                        zfr: "\uD835\uDD37",
                        zhcy: "ж",
                        zigrarr: "⇝",
                        zopf: "\uD835\uDD6B",
                        zscr: "\uD835\uDCCF",
                        zwj: "‍",
                        zwnj: "‌",
                    };
                }),
                L = l((e, t) => {
                    var r = T();
                    t.exports = function (e) {
                        return !!u.call(r, e) && r[e];
                    };
                    var u = {}.hasOwnProperty;
                }),
                O = l((e, t) => {
                    var r = x(),
                        u = k(),
                        n = w(),
                        i = B(),
                        o = S(),
                        a = L();
                    t.exports = function (e, t) {
                        var n,
                            i,
                            m = {};
                        for (i in (t || (t = {}), D)) (n = t[i]), (m[i] = n ?? D[i]);
                        return (
                            (m.position.indent || m.position.start) && ((m.indent = m.position.indent || []), (m.position = m.position.start)),
                            (function (e, t) {
                                var n,
                                    i,
                                    D,
                                    m,
                                    C,
                                    E,
                                    b,
                                    v,
                                    y,
                                    A,
                                    x,
                                    k,
                                    w,
                                    B,
                                    q,
                                    S,
                                    T,
                                    L,
                                    O,
                                    N,
                                    R,
                                    I = t.additional,
                                    j = t.nonTerminated,
                                    P = t.text,
                                    z = t.reference,
                                    $ = t.warning,
                                    U = t.textContext,
                                    M = t.referenceContext,
                                    V = t.warningContext,
                                    _ = t.position,
                                    H = t.indent || [],
                                    G = e.length,
                                    W = 0,
                                    J = -1,
                                    Z = _.column || 1,
                                    Y = _.line || 1,
                                    K = "",
                                    Q = [];
                                for (
                                    "string" == typeof I && (I = I.charCodeAt(0)),
                                    L = X(),
                                    A = $
                                        ? function (e, t) {
                                            var r = X();
                                            (r.column += t), (r.offset += t), $.call(V, g[e], r, e);
                                        }
                                        : c,
                                    W--,
                                    G++;
                                    ++W < G;

                                )
                                    if ((10 === b && (Z = H[J] || 1), 38 === (b = e.charCodeAt(W)))) {
                                        if (9 === (y = e.charCodeAt(W + 1)) || 10 === y || 12 === y || 32 === y || 38 === y || 60 === y || y != y || (I && y === I)) {
                                            (K += l(b)), Z++;
                                            continue;
                                        }
                                        for (
                                            B = q = W + 1, R = q, 35 === y ? ((R = ++B), 88 === (y = e.charCodeAt(R)) || 120 === y ? ((S = p), (R = ++B)) : (S = d)) : (S = f), D = "", w = "", E = "", T = F[S], R--;
                                            ++R < G && T((y = e.charCodeAt(R)));

                                        )
                                            (E += l(y)), S === f && s.call(r, E) && ((D = E), (w = r[E]));
                                        (C = 59 === e.charCodeAt(R)) && (R++, (m = S === f && a(E)) && ((D = E), (w = m))),
                                            (N = 1 + R - q),
                                            (C || j) &&
                                            (E
                                                ? S === f
                                                    ? (C && !w
                                                        ? A(5, 1)
                                                        : (D !== E && ((N = 1 + (R = B + D.length) - B), (C = !1)),
                                                            C || ((x = D ? 1 : 3), t.attribute ? (61 === (y = e.charCodeAt(R)) ? (A(x, N), (w = null)) : o(y) ? (w = null) : A(x, N)) : A(x, N))),
                                                        (v = w))
                                                    : (C || A(2, N),
                                                        ((n = v = parseInt(E, h[S])) >= 55296 && n <= 57343) || n > 1114111
                                                            ? (A(7, N), (v = l(65533)))
                                                            : v in u
                                                                ? (A(6, N), (v = u[v]))
                                                                : ((k = ""),
                                                                    (((i = v) >= 1 && i <= 8) || 11 === i || (i >= 13 && i <= 31) || (i >= 127 && i <= 159) || (i >= 64976 && i <= 65007) || (65535 & i) == 65535 || (65535 & i) == 65534) &&
                                                                    A(6, N),
                                                                    v > 65535 && ((v -= 65536), (k += l((v >>> 10) | 55296)), (v = 56320 | (1023 & v))),
                                                                    (v = k + l(v))))
                                                : S !== f && A(4, N)),
                                            v
                                                ? (ee(), (L = X()), (W = R - 1), (Z += R - q + 1), Q.push(v), (O = X()), O.offset++, z && z.call(M, v, { start: L, end: O }, e.slice(q - 1, R)), (L = O))
                                                : ((E = e.slice(q - 1, R)), (K += E), (Z += E.length), (W = R - 1));
                                    } else 10 === b && (Y++, J++, (Z = 0)), b == b ? ((K += l(b)), Z++) : ee();
                                return Q.join("");
                                function X() {
                                    return { line: Y, column: Z, offset: W + (_.offset || 0) };
                                }
                                function ee() {
                                    K && (Q.push(K), P && P.call(U, K, { start: L, end: X() }), (K = ""));
                                }
                            })(e, m)
                        );
                    };
                    var s = {}.hasOwnProperty,
                        l = String.fromCharCode,
                        c = Function.prototype,
                        D = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 },
                        f = "named",
                        p = "hexadecimal",
                        d = "decimal",
                        h = {};
                    (h[p] = 16), (h[d] = 10);
                    var F = {};
                    (F[f] = o), (F[d] = n), (F[p] = i);
                    var g = {};
                    (g[1] = "Named character references must be terminated by a semicolon"),
                        (g[2] = "Numeric character references must be terminated by a semicolon"),
                        (g[3] = "Named character references cannot be empty"),
                        (g[4] = "Numeric character references cannot be empty"),
                        (g[5] = "Named character references must be known"),
                        (g[6] = "Numeric character references cannot be disallowed"),
                        (g[7] = "Numeric character references cannot be outside the permissible Unicode range");
                }),
                N = l((e, t) => {
                    var r = C(),
                        u = O();
                    t.exports = function (e) {
                        return (
                            (n.raw = function (e, n, o) {
                                return u(e, r(o, { position: t(n), warning: i }));
                            }),
                            n
                        );
                        function t(t) {
                            for (var r = e.offset, u = t.line, n = []; ++u && u in r;) n.push((r[u] || 0) + 1);
                            return { start: t, indent: n };
                        }
                        function n(r, n, o) {
                            u(r, { position: t(n), warning: i, text: o, reference: o, textContext: e, referenceContext: e });
                        }
                        function i(t, r, u) {
                            3 !== u && e.file.message(t, r);
                        }
                    };
                }),
                R = l((e, t) => {
                    function r(e) {
                        var t, r;
                        return "text" !== e.type || !e.position || ((t = e.position.start), (r = e.position.end), t.line !== r.line || r.column - t.column === e.value.length);
                    }
                    function u(e, t) {
                        return (e.value += t.value), e;
                    }
                    function n(e, t) {
                        return this.options.commonmark || this.options.gfm ? t : ((e.children = e.children.concat(t.children)), e);
                    }
                    t.exports = function (e) {
                        return function (t, i) {
                            var o,
                                a,
                                s,
                                l,
                                c,
                                D = this,
                                f = D.offset,
                                p = [],
                                d = D[e + "Methods"],
                                h = D[e + "Tokenizers"],
                                F = i.line,
                                g = i.column;
                            if (!t) return p;
                            for (b.now = C, b.file = D.file, m(""); t;) {
                                for (
                                    o = -1, a = d.length, l = !1;
                                    ++o < a &&
                                    !(
                                        (s = h[d[o]]) &&
                                        (!s.onlyAtStart || D.atStart) &&
                                        (!s.notInList || !D.inList) &&
                                        (!s.notInBlock || !D.inBlock) &&
                                        (!s.notInLink || !D.inLink) &&
                                        ((c = t.length), s.apply(D, [b, t]), (l = c !== t.length))
                                    );

                                );
                                l || D.file.fail(Error("Infinite loop"), b.now());
                            }
                            return (D.eof = C()), p;
                            function m(e) {
                                for (
                                    var t = -1,
                                    r = e.indexOf(`
`);
                                    -1 !== r;

                                )
                                    F++,
                                        (t = r),
                                        (r = e.indexOf(
                                            `
`,
                                            r + 1
                                        ));
                                -1 === t ? (g += e.length) : (g = e.length - t), F in f && (-1 !== t ? (g += f[F]) : g <= f[F] && (g = f[F] + 1));
                            }
                            function C() {
                                var e = { line: F, column: g };
                                return (e.offset = D.toOffset(e)), e;
                            }
                            function E(e) {
                                (this.start = e), (this.end = C());
                            }
                            function b(e) {
                                var i,
                                    o,
                                    a,
                                    s =
                                        ((i = []),
                                            (o = F + 1),
                                            function () {
                                                for (var e = F + 1; o < e;) i.push((f[o] || 0) + 1), o++;
                                                return i;
                                            }),
                                    l =
                                        ((a = C()),
                                            function (e, t) {
                                                var r = e.position,
                                                    u = r ? r.start : a,
                                                    n = [],
                                                    i = r && r.end.line,
                                                    o = a.line;
                                                if (((e.position = new E(u)), r && t && r.indent)) {
                                                    if (((n = r.indent), i < o)) {
                                                        for (; ++i < o;) n.push((f[i] || 0) + 1);
                                                        n.push(a.column);
                                                    }
                                                    t = n.concat(t);
                                                }
                                                return (e.position.indent = t || []), e;
                                            }),
                                    c = C();
                                return (
                                    t.slice(0, e.length) !== e && D.file.fail(Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"), C()),
                                    (d.reset = h),
                                    (h.test = b),
                                    (d.test = b),
                                    (t = t.slice(e.length)),
                                    m(e),
                                    (s = s()),
                                    d
                                );
                                function d(e, t) {
                                    var i, o, a;
                                    return l(
                                        ((i = l(e)),
                                            (a = (o = t ? t.children : p)[o.length - 1]) && i.type === a.type && ("text" === i.type || "blockquote" === i.type) && r(a) && r(i) && (i = ("text" === i.type ? u : n).call(D, a, i)),
                                            i !== a && o.push(i),
                                            D.atStart && 0 !== p.length && D.exitStart(),
                                            i),
                                        s
                                    );
                                }
                                function h() {
                                    var r = d.apply(null, arguments);
                                    return (F = c.line), (g = c.column), (t = e + t), r;
                                }
                                function b() {
                                    var r = l({});
                                    return (F = c.line), (g = c.column), (t = e + t), r.position;
                                }
                            }
                        };
                    };
                }),
                I = l((e, t) => {
                    t.exports = i;
                    var r = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"],
                        u = r.concat(["~", "|"]),
                        n = u.concat([
                            `
`,
                            '"',
                            "$",
                            "%",
                            "&",
                            "'",
                            ",",
                            "/",
                            ":",
                            ";",
                            "<",
                            "=",
                            "?",
                            "@",
                            "^",
                        ]);
                    function i(e) {
                        var t = e || {};
                        return t.commonmark ? n : t.gfm ? u : r;
                    }
                    (i.default = r), (i.gfm = u), (i.commonmark = n);
                }),
                j = l((e, t) => {
                    t.exports = [
                        "address",
                        "article",
                        "aside",
                        "base",
                        "basefont",
                        "blockquote",
                        "body",
                        "caption",
                        "center",
                        "col",
                        "colgroup",
                        "dd",
                        "details",
                        "dialog",
                        "dir",
                        "div",
                        "dl",
                        "dt",
                        "fieldset",
                        "figcaption",
                        "figure",
                        "footer",
                        "form",
                        "frame",
                        "frameset",
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "head",
                        "header",
                        "hgroup",
                        "hr",
                        "html",
                        "iframe",
                        "legend",
                        "li",
                        "link",
                        "main",
                        "menu",
                        "menuitem",
                        "meta",
                        "nav",
                        "noframes",
                        "ol",
                        "optgroup",
                        "option",
                        "p",
                        "param",
                        "pre",
                        "section",
                        "source",
                        "title",
                        "summary",
                        "table",
                        "tbody",
                        "td",
                        "tfoot",
                        "th",
                        "thead",
                        "title",
                        "tr",
                        "track",
                        "ul",
                    ];
                }),
                P = l((e, t) => {
                    t.exports = { position: !0, gfm: !0, commonmark: !1, pedantic: !1, blocks: j() };
                }),
                z = l((e, t) => {
                    var r = C(),
                        u = I(),
                        n = P();
                    t.exports = function (e) {
                        var t,
                            i,
                            o = this.options;
                        if (null == e) e = {};
                        else if ("object" == typeof e) e = r(e);
                        else throw Error("Invalid value `" + e + "` for setting `options`");
                        for (t in n) {
                            if ((null == (i = e[t]) && (i = o[t]), ("blocks" !== t && "boolean" != typeof i) || ("blocks" === t && "object" != typeof i))) throw Error("Invalid value `" + i + "` for setting `options." + t + "`");
                            e[t] = i;
                        }
                        return (this.options = e), (this.escape = u(e)), this;
                    };
                }),
                $ = l((e, t) => {
                    function r() {
                        return !0;
                    }
                    t.exports = function e(t) {
                        if (null == t) return r;
                        if ("string" == typeof t)
                            return function (e) {
                                return !!(e && e.type === t);
                            };
                        if ("object" == typeof t)
                            return "length" in t
                                ? (function (t) {
                                    for (var r = [], u = -1; ++u < t.length;) r[u] = e(t[u]);
                                    return function () {
                                        for (var e = -1; ++e < r.length;) if (r[e].apply(this, arguments)) return !0;
                                        return !1;
                                    };
                                })(t)
                                : function (e) {
                                    var r;
                                    for (r in t) if (e[r] !== t[r]) return !1;
                                    return !0;
                                };
                        if ("function" == typeof t) return t;
                        throw Error("Expected function, string, or object as test");
                    };
                }),
                U = l((e, t) => {
                    t.exports = function (e) {
                        return e;
                    };
                }),
                M = l((e, t) => {
                    t.exports = i;
                    var r = $(),
                        u = U(),
                        n = "skip";
                    function i(e, t, i, o) {
                        var a, s;
                        "function" == typeof t && "function" != typeof i && ((o = i), (i = t), (t = null)),
                            (s = r(t)),
                            (a = o ? -1 : 1),
                            (function e(r, l, c) {
                                var D,
                                    f = "object" == typeof r && null !== r ? r : {};
                                return "string" == typeof f.type && ((D = "string" == typeof f.tagName ? f.tagName : "string" == typeof f.name ? f.name : void 0), (p.displayName = "node (" + u(f.type + (D ? "<" + D + ">" : "")) + ")")), p;
                                function p() {
                                    var u,
                                        D,
                                        f,
                                        p = c.concat(r),
                                        d = [];
                                    if ((!t || s(r, l, c[c.length - 1] || null)) && !1 === (d = null !== (u = i(r, c)) && "object" == typeof u && "length" in u ? u : "number" == typeof u ? [!0, u] : [u])[0]) return d;
                                    if (r.children && d[0] !== n)
                                        for (f = (o ? r.children.length : -1) + a; f > -1 && f < r.children.length;) {
                                            if (!1 === (D = e(r.children[f], f, p)())[0]) return D;
                                            f = "number" == typeof D[1] ? D[1] : f + a;
                                        }
                                    return d;
                                }
                            })(e, null, [])();
                    }
                    (i.CONTINUE = !0), (i.SKIP = n), (i.EXIT = !1);
                }),
                V = l((e, t) => {
                    t.exports = o;
                    var r = M(),
                        u = r.CONTINUE,
                        n = r.SKIP,
                        i = r.EXIT;
                    function o(e, t, u, n) {
                        "function" == typeof t && "function" != typeof u && ((n = u), (u = t), (t = null)),
                            r(
                                e,
                                t,
                                function (e, t) {
                                    var r = t[t.length - 1],
                                        n = r ? r.children.indexOf(e) : null;
                                    return u(e, n, r);
                                },
                                n
                            );
                    }
                    (o.CONTINUE = u), (o.SKIP = n), (o.EXIT = i);
                }),
                _ = l((e, t) => {
                    var r = V();
                    function u(e) {
                        delete e.position;
                    }
                    function n(e) {
                        e.position = void 0;
                    }
                    t.exports = function (e, t) {
                        return r(e, t ? u : n), e;
                    };
                }),
                H = l((e, t) => {
                    var r = C(),
                        u = _();
                    t.exports = function () {
                        var e,
                            t = String(this.file),
                            o = { line: 1, column: 1, offset: 0 },
                            a = r(o);
                        return (
                            65279 === (t = t.replace(i, n)).charCodeAt(0) && ((t = t.slice(1)), a.column++, a.offset++),
                            (e = { type: "root", children: this.tokenizeBlock(t, a), position: { start: o, end: this.eof || r(o) } }),
                            this.options.position || u(e, !0),
                            e
                        );
                    };
                    var n = `
`,
                        i = /\r\n|\r/g;
                }),
                G = l((e, t) => {
                    var r = /^[ \t]*(\n|$)/;
                    t.exports = function (e, t, u) {
                        for (var n, i = "", o = 0, a = t.length; o < a && null != (n = r.exec(t.slice(o)));) (o += n[0].length), (i += n[0]);
                        if ("" !== i) {
                            if (u) return !0;
                            e(i);
                        }
                    };
                }),
                W = l((e, t) => {
                    var r,
                        u = "";
                    t.exports = function (e, t) {
                        if ("string" != typeof e) throw TypeError("expected a string");
                        if (1 === t) return e;
                        if (2 === t) return e + e;
                        var n = e.length * t;
                        if (r !== e || typeof r > "u") (r = e), (u = "");
                        else if (u.length >= n) return u.substr(0, n);
                        for (; n > u.length && t > 1;) 1 & t && (u += e), (t >>= 1), (e += e);
                        return (u += e), (u = u.substr(0, n));
                    };
                }),
                J = l((e, t) => {
                    t.exports = function (e) {
                        return String(e).replace(/\n+$/, "");
                    };
                }),
                Z = l((e, t) => {
                    var r = W(),
                        u = J();
                    t.exports = function (e, t, r) {
                        for (var o, a, s, l = -1, c = t.length, D = "", f = "", p = "", d = ""; ++l < c;)
                            if (((o = t.charAt(l)), s)) {
                                if (((s = !1), (D += p), (f += d), (p = ""), (d = ""), o === n)) (p = o), (d = o);
                                else
                                    for (D += o, f += o; ++l < c;) {
                                        if (!(o = t.charAt(l)) || o === n) {
                                            (d = o), (p = o);
                                            break;
                                        }
                                        (D += o), (f += o);
                                    }
                            } else if (" " === o && t.charAt(l + 1) === o && t.charAt(l + 2) === o && t.charAt(l + 3) === o) (p += i), (l += 3), (s = !0);
                            else if ("	" === o) (p += o), (s = !0);
                            else {
                                for (a = ""; "	" === o || " " === o;) (a += o), (o = t.charAt(++l));
                                if (o !== n) break;
                                (p += a + o), (d += o);
                            }
                        if (f) return !!r || e(D)({ type: "code", lang: null, meta: null, value: u(f) });
                    };
                    var n = `
`,
                        i = r(" ", 4);
                }),
                Y = l((e, t) => {
                    t.exports = function (e, t, u) {
                        var n,
                            i,
                            o,
                            a,
                            s,
                            l,
                            c,
                            D,
                            f,
                            p,
                            d,
                            h,
                            F,
                            g = this.options.gfm,
                            m = t.length + 1,
                            C = 0,
                            E = "";
                        if (g) {
                            for (; C < m && !(" " !== (o = t.charAt(C)) && "	" !== o);) (E += o), C++;
                            if (((h = C), !("~" !== (o = t.charAt(C)) && "`" !== o))) {
                                for (C++, i = o, n = 1, E += o; C < m && (o = t.charAt(C)) === i;) (E += o), n++, C++;
                                if (!(n < 3)) {
                                    for (; C < m && !(" " !== (o = t.charAt(C)) && "	" !== o);) (E += o), C++;
                                    for (a = "", c = ""; C < m && !((o = t.charAt(C)) === r || ("`" === i && o === i));) " " === o || "	" === o ? (c += o) : ((a += c + o), (c = "")), C++;
                                    if (!((o = t.charAt(C)) && o !== r)) {
                                        if (u) return !0;
                                        (F = e.now()), (F.column += E.length), (F.offset += E.length), (E += a), (a = this.decode.raw(this.unescape(a), F)), c && (E += c), (c = ""), (p = ""), (d = ""), (D = ""), (f = "");
                                        for (var b = !0; C < m;) {
                                            if (((o = t.charAt(C)), (D += p), (f += d), (p = ""), (d = ""), o !== r)) {
                                                (D += o), (d += o), C++;
                                                continue;
                                            }
                                            for (b ? ((E += o), (b = !1)) : ((p += o), (d += o)), c = "", C++; C < m && " " === (o = t.charAt(C));) (c += o), C++;
                                            if (((p += c), (d += c.slice(h)), !(c.length >= 4))) {
                                                for (c = ""; C < m && (o = t.charAt(C)) === i;) (c += o), C++;
                                                if (((p += c), (d += c), !(c.length < n))) {
                                                    for (c = ""; C < m && !(" " !== (o = t.charAt(C)) && "	" !== o);) (p += o), (d += o), C++;
                                                    if (!o || o === r) break;
                                                }
                                            }
                                        }
                                        for (E += D + p, C = -1, m = a.length; ++C < m;)
                                            if (" " === (o = a.charAt(C)) || "	" === o) s || (s = a.slice(0, C));
                                            else if (s) {
                                                l = a.slice(C);
                                                break;
                                            }
                                        return e(E)({ type: "code", lang: s || a || null, meta: l || null, value: f });
                                    }
                                }
                            }
                        }
                    };
                    var r = `
`;
                }),
                K = l((e, t) => {
                    ((e = t.exports = function (t) {
                        return t.trim ? t.trim() : e.right(e.left(t));
                    }).left = function (e) {
                        return e.trimLeft ? e.trimLeft() : e.replace(/^\s\s*/, "");
                    }),
                        (e.right = function (e) {
                            if (e.trimRight) return e.trimRight();
                            for (var t = /\s/, r = e.length; t.test(e.charAt(--r)););
                            return e.slice(0, r + 1);
                        });
                }),
                Q = l((e, t) => {
                    t.exports = function (e, t, r, u) {
                        for (var n, i, o = e.length, a = -1; ++a < o;)
                            if (!(void 0 !== (i = (n = e[a])[1] || {}).pedantic && i.pedantic !== r.options.pedantic) && !(void 0 !== i.commonmark && i.commonmark !== r.options.commonmark) && t[n[0]].apply(r, u)) return !0;
                        return !1;
                    };
                }),
                X = l((e, t) => {
                    var r = K(),
                        u = Q();
                    t.exports = function (e, t, i) {
                        for (
                            var o, a, s, l, c, D, f, p, d = this.offset, h = this.blockTokenizers, F = this.interruptBlockquote, g = e.now(), m = g.line, C = t.length, E = [], b = [], v = [], y = 0;
                            y < C && !(" " !== (a = t.charAt(y)) && "	" !== a);

                        )
                            y++;
                        if (">" === t.charAt(y)) {
                            if (i) return !0;
                            for (y = 0; y < C;) {
                                for (s = t.indexOf(n, y), D = y, f = !1, -1 === s && (s = C); y < C && !(" " !== (a = t.charAt(y)) && "	" !== a);) y++;
                                if ((">" === t.charAt(y) ? (y++, (f = !0), " " === t.charAt(y) && y++) : (y = D), (l = t.slice(y, s)), !f && !r(l))) {
                                    y = D;
                                    break;
                                }
                                if (!f && u(F, h, this, [e, t.slice(y), !0])) break;
                                (c = D === y ? l : t.slice(D, s)), v.push(y - D), E.push(c), b.push(l), (y = s + 1);
                            }
                            for (y = -1, C = v.length, o = e(E.join(n)); ++y < C;) (d[m] = (d[m] || 0) + v[y]), m++;
                            return (p = this.enterBlock()), (b = this.tokenizeBlock(b.join(n), g)), p(), o({ type: "blockquote", children: b });
                        }
                    };
                    var n = `
`;
                }),
                ee = l((e, t) => {
                    t.exports = function (e, t, u) {
                        for (var n, i, o, a = this.options.pedantic, s = t.length + 1, l = -1, c = e.now(), D = "", f = ""; ++l < s;) {
                            if (" " !== (n = t.charAt(l)) && "	" !== n) {
                                l--;
                                break;
                            }
                            D += n;
                        }
                        for (o = 0; ++l <= s;) {
                            if ("#" !== (n = t.charAt(l))) {
                                l--;
                                break;
                            }
                            (D += n), o++;
                        }
                        if (!(o > 6) && !(!o || (!a && "#" === t.charAt(l + 1)))) {
                            for (s = t.length + 1, i = ""; ++l < s;) {
                                if (" " !== (n = t.charAt(l)) && "	" !== n) {
                                    l--;
                                    break;
                                }
                                i += n;
                            }
                            if (!(!a && 0 === i.length && n && n !== r)) {
                                if (u) return !0;
                                for (D += i, i = "", f = ""; ++l < s && !(!(n = t.charAt(l)) || n === r);) {
                                    if (" " !== n && "	" !== n && "#" !== n) {
                                        (f += i + n), (i = "");
                                        continue;
                                    }
                                    for (; " " === n || "	" === n;) (i += n), (n = t.charAt(++l));
                                    if (!a && f && !i && "#" === n) {
                                        f += n;
                                        continue;
                                    }
                                    for (; "#" === n;) (i += n), (n = t.charAt(++l));
                                    for (; " " === n || "	" === n;) (i += n), (n = t.charAt(++l));
                                    l--;
                                }
                                return (c.column += D.length), (c.offset += D.length), e((D += f + i))({ type: "heading", depth: o, children: this.tokenizeInline(f, c) });
                            }
                        }
                    };
                    var r = `
`;
                }),
                et = l((e, t) => {
                    t.exports = function (e, t, u) {
                        for (var n, i, o, a, s = -1, l = t.length + 1, c = ""; ++s < l && !("	" !== (n = t.charAt(s)) && " " !== n);) c += n;
                        if (!("*" !== n && "-" !== n && "_" !== n))
                            for (i = n, c += n, o = 1, a = ""; ++s < l;)
                                if ((n = t.charAt(s)) === i) o++, (c += a + i), (a = "");
                                else {
                                    if (" " !== n) return o >= 3 && (!n || n === r) ? ((c += a), !!u || e(c)({ type: "thematicBreak" })) : void 0;
                                    a += n;
                                }
                    };
                    var r = `
`;
                }),
                er = l((e, t) => {
                    t.exports = function (e) {
                        for (var t, r = 0, u = 0, n = e.charAt(r), i = {}, o = 0; "	" === n || " " === n;) {
                            for (u += t = "	" === n ? 4 : 1, t > 1 && (u = Math.floor(u / t) * t); o < u;) i[++o] = r;
                            n = e.charAt(++r);
                        }
                        return { indent: u, stops: i };
                    };
                }),
                eu = l((e, t) => {
                    var r = K(),
                        u = W(),
                        n = er();
                    t.exports = function (e, t) {
                        var o,
                            a,
                            s,
                            l = e.split(i),
                            c = l.length + 1,
                            D = 1 / 0,
                            f = [];
                        for (l.unshift(u(" ", t) + "!"); c--;)
                            if (((a = n(l[c])), (f[c] = a.stops), 0 !== r(l[c]).length)) {
                                if (a.indent) a.indent > 0 && a.indent < D && (D = a.indent);
                                else {
                                    D = 1 / 0;
                                    break;
                                }
                            }
                        if (D !== 1 / 0)
                            for (c = l.length; c--;) {
                                for (s = f[c], o = D; o && !(o in s);) o--;
                                l[c] = l[c].slice(s[o] + 1);
                            }
                        return l.shift(), l.join(i);
                    };
                    var i = `
`;
                }),
                en = l((e, t) => {
                    var r = K(),
                        u = W(),
                        n = w(),
                        i = er(),
                        o = eu(),
                        a = Q();
                    t.exports = function (e, t, u) {
                        for (
                            var i,
                            o,
                            D,
                            f,
                            p,
                            F,
                            g,
                            m,
                            C,
                            E,
                            b,
                            v,
                            y,
                            A,
                            x,
                            k,
                            w,
                            B,
                            q,
                            S,
                            T,
                            L,
                            O,
                            N = this.options.commonmark,
                            R = this.options.pedantic,
                            I = this.blockTokenizers,
                            j = this.interruptList,
                            P = 0,
                            z = t.length,
                            $ = null,
                            U = !1;
                            P < z && !("	" !== (f = t.charAt(P)) && " " !== f);

                        )
                            P++;
                        if ("*" === (f = t.charAt(P)) || "+" === f || "-" === f) (p = f), (D = !1);
                        else {
                            for (D = !0, o = ""; P < z && n((f = t.charAt(P)));) (o += f), P++;
                            if (((f = t.charAt(P)), !o || !("." === f || (N && ")" === f)) || (u && "1" !== o))) return;
                            ($ = parseInt(o, 10)), (p = f);
                        }
                        if (!(" " !== (f = t.charAt(++P)) && "	" !== f && (R || (f !== s && "" !== f)))) {
                            if (u) return !0;
                            for (P = 0, A = [], x = [], k = []; P < z;) {
                                for (F = t.indexOf(s, P), g = P, m = !1, O = !1, -1 === F && (F = z), i = 0; P < z;) {
                                    if ("	" === (f = t.charAt(P))) i += 4 - (i % 4);
                                    else if (" " === f) i++;
                                    else break;
                                    P++;
                                }
                                if ((w && i >= w.indent && (O = !0), (f = t.charAt(P)), (C = null), !O)) {
                                    if ("*" === f || "+" === f || "-" === f) (C = f), P++, i++;
                                    else {
                                        for (o = ""; P < z && n((f = t.charAt(P)));) (o += f), P++;
                                        (f = t.charAt(P)), P++, o && ("." === f || (N && ")" === f)) && ((C = f), (i += o.length + 1));
                                    }
                                    if (C) {
                                        if ("	" === (f = t.charAt(P))) (i += 4 - (i % 4)), P++;
                                        else if (" " === f) {
                                            for (L = P + 4; P < L && " " === t.charAt(P);) P++, i++;
                                            P === L && " " === t.charAt(P) && ((P -= 3), (i -= 3));
                                        } else f !== s && "" !== f && (C = null);
                                    }
                                }
                                if (C) {
                                    if (!R && p !== C) break;
                                    m = !0;
                                } else N || O || " " !== t.charAt(g) ? N && w && (O = i >= w.indent || i > 4) : (O = !0), (m = !1), (P = g);
                                if (((b = t.slice(g, F)), (E = g === P ? b : t.slice(P, F)), ("*" === C || "_" === C || "-" === C) && I.thematicBreak.call(this, e, b, !0))) break;
                                if (((v = y), (y = !m && !r(E).length), O && w)) (w.value = w.value.concat(k, b)), (x = x.concat(k, b)), (k = []);
                                else if (m) 0 !== k.length && ((U = !0), w.value.push(""), (w.trail = k.concat())), (w = { value: [b], indent: i, trail: [] }), A.push(w), (x = x.concat(k, b)), (k = []);
                                else if (y) {
                                    if (v && !N) break;
                                    k.push(b);
                                } else {
                                    if (v || a(j, I, this, [e, b, !0])) break;
                                    (w.value = w.value.concat(k, b)), (x = x.concat(k, b)), (k = []);
                                }
                                P = F + 1;
                            }
                            for (S = e(x.join(s)).reset({ type: "list", ordered: D, start: $, spread: U, children: [] }), B = this.enterList(), q = this.enterBlock(), P = -1, z = A.length; ++P < z;)
                                (w = A[P].value.join(s)),
                                    (T = e.now()),
                                    e(w)(
                                        (function (e, t, r) {
                                            var u,
                                                n,
                                                i = e.offset,
                                                o = e.options.pedantic ? d : h,
                                                a = null;
                                            return (
                                                (t = o.apply(null, arguments)),
                                                e.options.gfm && (u = t.match(c)) && ((n = u[0].length), (a = "x" === u[1].toLowerCase()), (i[r.line] += n), (t = t.slice(n))),
                                                { type: "listItem", spread: l.test(t), checked: a, children: e.tokenizeBlock(t, r) }
                                            );
                                        })(this, w, T),
                                        S
                                    ),
                                    (w = A[P].trail.join(s)),
                                    P !== z - 1 && (w += s),
                                    e(w);
                            return B(), q(), S;
                        }
                    };
                    var s = `
`,
                        l = /\n\n(?!\s*$)/,
                        c = /^\[([ X\tx])][ \t]/,
                        D = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
                        f = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
                        p = /^( {1,4}|\t)?/gm;
                    function d(e, t, r) {
                        var u = e.offset,
                            n = r.line;
                        return (t = t.replace(f, i)), (n = r.line), t.replace(p, i);
                        function i(e) {
                            return (u[n] = (u[n] || 0) + e.length), n++, "";
                        }
                    }
                    function h(e, t, r) {
                        var n,
                            a,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h = e.offset,
                            F = r.line;
                        for (
                            c = (t = t.replace(D, function (e, t, r, i, o) {
                                return (a = t + r + i), (l = o), 10 > Number(r) && a.length % 2 == 1 && (r = " " + r), (n = t + u(" ", r.length) + i) + l;
                            })).split(s),
                            (f = o(t, i(n).indent).split(s))[0] = l,
                            h[F] = (h[F] || 0) + a.length,
                            F++,
                            p = 0,
                            d = c.length;
                            ++p < d;

                        )
                            (h[F] = (h[F] || 0) + c[p].length - f[p].length), F++;
                        return f.join(s);
                    }
                }),
                ei = l((e, t) => {
                    t.exports = function (e, t, u) {
                        for (var n, i, o, a, s, l = e.now(), c = t.length, D = -1, f = ""; ++D < c;) {
                            if (" " !== (o = t.charAt(D)) || D >= 3) {
                                D--;
                                break;
                            }
                            f += o;
                        }
                        for (n = "", i = ""; ++D < c;) {
                            if ((o = t.charAt(D)) === r) {
                                D--;
                                break;
                            }
                            " " === o || "	" === o ? (i += o) : ((n += i + o), (i = ""));
                        }
                        if (((l.column += f.length), (l.offset += f.length), (f += n + i), (o = t.charAt(++D)), (a = t.charAt(++D)), !(o !== r || ("=" !== a && "-" !== a)))) {
                            for (f += o, i = a, s = "=" === a ? 1 : 2; ++D < c;) {
                                if ((o = t.charAt(D)) !== a) {
                                    if (o !== r) return;
                                    D--;
                                    break;
                                }
                                i += o;
                            }
                            return !!u || e(f + i)({ type: "heading", depth: s, children: this.tokenizeInline(n, l) });
                        }
                    };
                    var r = `
`;
                }),
                eo = l((e) => {
                    var t = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
                        r = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
                    (e.openCloseTag = RegExp("^(?:" + t + "|" + r + ")")), (e.tag = RegExp("^(?:" + t + "|" + r + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"));
                }),
                ea = l((e, t) => {
                    var r = eo().openCloseTag;
                    t.exports = function (e, t, r) {
                        for (
                            var F,
                            g,
                            m,
                            C,
                            E,
                            b,
                            v,
                            y = this.options.blocks.join("|"),
                            A = RegExp("^</?(" + y + ")(?=(\\s|/?>|$))", "i"),
                            x = t.length,
                            k = 0,
                            w = [
                                [n, i, !0],
                                [o, a, !0],
                                [s, l, !0],
                                [c, D, !0],
                                [f, p, !0],
                                [A, d, !0],
                                [h, d, !1],
                            ];
                            k < x && !("	" !== (C = t.charAt(k)) && " " !== C);

                        )
                            k++;
                        if ("<" === t.charAt(k)) {
                            for (F = -1 === (F = t.indexOf(u, k + 1)) ? x : F, g = t.slice(k, F), m = -1, E = w.length; ++m < E;)
                                if (w[m][0].test(g)) {
                                    b = w[m];
                                    break;
                                }
                            if (b) {
                                if (r) return b[2];
                                if (((k = F), !b[1].test(g)))
                                    for (; k < x;) {
                                        if (((F = -1 === (F = t.indexOf(u, k + 1)) ? x : F), (g = t.slice(k + 1, F)), b[1].test(g))) {
                                            g && (k = F);
                                            break;
                                        }
                                        k = F;
                                    }
                                return e((v = t.slice(0, k)))({ type: "html", value: v });
                            }
                        }
                    };
                    var u = `
`,
                        n = /^<(script|pre|style)(?=(\s|>|$))/i,
                        i = /<\/(script|pre|style)>/i,
                        o = /^<!--/,
                        a = /-->/,
                        s = /^<\?/,
                        l = /\?>/,
                        c = /^<![A-Za-z]/,
                        D = />/,
                        f = /^<!\[CDATA\[/,
                        p = /]]>/,
                        d = /^$/,
                        h = RegExp(r.source + "\\s*$");
                }),
                es = l((e, t) => {
                    t.exports = function (e) {
                        return u.test("number" == typeof e ? r(e) : e.charAt(0));
                    };
                    var r = String.fromCharCode,
                        u = /\s/;
                }),
                el = l((e, t) => {
                    var r = p();
                    t.exports = function (e) {
                        return r(e).toLowerCase();
                    };
                }),
                ec = l((e, t) => {
                    var r = es(),
                        u = el();
                    t.exports = function (e, t, o) {
                        for (var a, s, l, c, D, f, p, d, h, F = this.options.commonmark, g = 0, m = t.length, C = ""; g < m && !(" " !== (D = t.charAt(g)) && "	" !== D);) (C += D), g++;
                        if ("[" === (D = t.charAt(g))) {
                            for (g++, C += D, c = ""; g < m && "]" !== (D = t.charAt(g));) "\\" === D && ((c += D), g++, (D = t.charAt(g))), (c += D), g++;
                            if (!(!c || "]" !== t.charAt(g) || ":" !== t.charAt(g + 1))) {
                                for (p = c, C += c + "]:", g = C.length, c = ""; g < m && !("	" !== (D = t.charAt(g)) && " " !== D && D !== n);) (C += D), g++;
                                if (((D = t.charAt(g)), (c = ""), (s = C), "<" === D)) {
                                    for (g++; g < m && i((D = t.charAt(g)));) (c += D), g++;
                                    if ((D = t.charAt(g)) === i.delimiter) (C += "<" + c + D), g++;
                                    else {
                                        if (F) return;
                                        (g -= c.length + 1), (c = "");
                                    }
                                }
                                if (!c) {
                                    for (; g < m && "[" !== (a = D = t.charAt(g)) && "]" !== a && !r(a);) (c += D), g++;
                                    C += c;
                                }
                                if (c) {
                                    for (d = c, c = ""; g < m && !("	" !== (D = t.charAt(g)) && " " !== D && D !== n);) (c += D), g++;
                                    if (((D = t.charAt(g)), (f = null), '"' === D ? (f = '"') : "'" === D ? (f = "'") : "(" === D && (f = ")"), f)) {
                                        if (!c) return;
                                        for (C += c + D, g = C.length, c = ""; g < m && (D = t.charAt(g)) !== f;) {
                                            if (D === n) {
                                                if ((g++, (D = t.charAt(g)) === n || D === f)) return;
                                                c += n;
                                            }
                                            (c += D), g++;
                                        }
                                        if ((D = t.charAt(g)) !== f) return;
                                        (l = C), (C += c + D), g++, (h = c), (c = "");
                                    } else (c = ""), (g = C.length);
                                    for (; g < m && !("	" !== (D = t.charAt(g)) && " " !== D);) (C += D), g++;
                                    if (!(D = t.charAt(g)) || D === n)
                                        return (
                                            !!o ||
                                            ((s = e(s).test().end),
                                                (d = this.decode.raw(this.unescape(d), s, { nonTerminated: !1 })),
                                                h && ((l = e(l).test().end), (h = this.decode.raw(this.unescape(h), l))),
                                                e(C)({ type: "definition", identifier: u(p), label: p, title: h || null, url: d }))
                                        );
                                }
                            }
                        }
                    };
                    var n = `
`;
                    function i(e) {
                        return ">" !== e && "[" !== e && "]" !== e;
                    }
                    i.delimiter = ">";
                }),
                eD = l((e, t) => {
                    var r = es();
                    t.exports = function (e, t, i) {
                        var o, a, s, l, c, D, f, p, d, h, F, g, m, C, E, b, v, y, A, x, k, w;
                        if (this.options.gfm) {
                            for (o = 0, b = 0, D = t.length + 1, f = []; o < D;) {
                                if (((x = t.indexOf(u, o)), (k = t.indexOf("|", o + 1)), -1 === x && (x = t.length), -1 === k || k > x)) {
                                    if (b < 2) return;
                                    break;
                                }
                                f.push(t.slice(o, x)), b++, (o = x + 1);
                            }
                            for (l = f.join(u), a = f.splice(1, 1)[0] || [], o = 0, D = a.length, b--, s = !1, F = []; o < D;) {
                                if ("|" === (d = a.charAt(o))) {
                                    if (((h = null), !1 === s)) {
                                        if (!1 === w) return;
                                    } else F.push(s), (s = !1);
                                    w = !1;
                                } else if ("-" === d) (h = !0), (s = s || null);
                                else if (":" === d) s = s === n ? "center" : h && null === s ? "right" : n;
                                else if (!r(d)) return;
                                o++;
                            }
                            if ((!1 !== s && F.push(s), !(F.length < 1))) {
                                if (i) return !0;
                                for (E = -1, y = [], A = e(l).reset({ type: "table", align: F, children: y }); ++E < b;) {
                                    for (v = f[E], c = { type: "tableRow", children: [] }, E && e(u), e(v).reset(c, A), D = v.length + 1, o = 0, p = "", g = "", m = !0; o < D;) {
                                        if ("	" === (d = v.charAt(o)) || " " === d) {
                                            g ? (p += d) : e(d), o++;
                                            continue;
                                        }
                                        "" === d || "|" === d
                                            ? m
                                                ? e(d)
                                                : ((g || d) &&
                                                    !m &&
                                                    ((l = g),
                                                        p.length > 1 && (d ? ((l += p.slice(0, -1)), (p = p.charAt(p.length - 1))) : ((l += p), (p = ""))),
                                                        (C = e.now()),
                                                        e(l)({ type: "tableCell", children: this.tokenizeInline(g, C) }, c)),
                                                    e(p + d),
                                                    (p = ""),
                                                    (g = ""))
                                            : (p && ((g += p), (p = "")), (g += d), "\\" === d && o !== D - 2 && ((g += v.charAt(o + 1)), o++)),
                                            (m = !1),
                                            o++;
                                    }
                                    E || e(u + a);
                                }
                                return A;
                            }
                        }
                    };
                    var u = `
`,
                        n = "left";
                }),
                ef = l((e, t) => {
                    var r = K(),
                        u = J(),
                        n = Q();
                    t.exports = function (e, t, o) {
                        for (var a, s, l, c, D, f = this.options, p = f.commonmark, d = this.blockTokenizers, h = this.interruptParagraph, F = t.indexOf(i), g = t.length; F < g;) {
                            if (-1 === F) {
                                F = g;
                                break;
                            }
                            if (t.charAt(F + 1) === i) break;
                            if (p) {
                                for (c = 0, a = F + 1; a < g;) {
                                    if ("	" === (l = t.charAt(a))) {
                                        c = 4;
                                        break;
                                    }
                                    if (" " === l) c++;
                                    else break;
                                    a++;
                                }
                                if (c >= 4 && l !== i) {
                                    F = t.indexOf(i, F + 1);
                                    continue;
                                }
                            }
                            if (n(h, d, this, [e, (s = t.slice(F + 1)), !0])) break;
                            if (((a = F), -1 !== (F = t.indexOf(i, F + 1)) && "" === r(t.slice(a, F)))) {
                                F = a;
                                break;
                            }
                        }
                        return (s = t.slice(0, F)), !!o || ((D = e.now()), e((s = u(s)))({ type: "paragraph", children: this.tokenizeInline(s, D) }));
                    };
                    var i = `
`;
                }),
                ep = l((e, t) => {
                    t.exports = function (e, t) {
                        return e.indexOf("\\", t);
                    };
                }),
                ed = l((e, t) => {
                    var r = ep();
                    (t.exports = n), (n.locator = r);
                    var u = `
`;
                    function n(e, t, r) {
                        var n, i;
                        if ("\\" === t.charAt(0) && ((n = t.charAt(1)), -1 !== this.escape.indexOf(n))) return !!r || ((i = n === u ? { type: "break" } : { type: "text", value: n }), e("\\" + n)(i));
                    }
                }),
                eh = l((e, t) => {
                    t.exports = function (e, t) {
                        return e.indexOf("<", t);
                    };
                }),
                eF = l((e, t) => {
                    var r = es(),
                        u = O(),
                        n = eh();
                    (t.exports = a), (a.locator = n), (a.notInLink = !0);
                    var i = "mailto:",
                        o = i.length;
                    function a(e, t, n) {
                        var a,
                            s,
                            l,
                            c,
                            D,
                            f = "",
                            p = t.length,
                            d = 0,
                            h = "",
                            F = !1,
                            g = "";
                        if ("<" === t.charAt(0)) {
                            for (d++, f = "<"; d < p && !(r((a = t.charAt(d))) || ">" === a || "@" === a || (":" === a && "/" === t.charAt(d + 1)));) (h += a), d++;
                            if (h) {
                                if (((g += h), (h = ""), (g += a = t.charAt(d)), d++, "@" === a)) F = !0;
                                else {
                                    if (":" !== a || "/" !== t.charAt(d + 1)) return;
                                    (g += "/"), d++;
                                }
                                for (; d < p && !(r((a = t.charAt(d))) || ">" === a);) (h += a), d++;
                                if (((a = t.charAt(d)), !(!h || ">" !== a)))
                                    return (
                                        !!n ||
                                        ((g += h),
                                            (l = g),
                                            (f += g + a),
                                            (s = e.now()),
                                            s.column++,
                                            s.offset++,
                                            F && (g.slice(0, o).toLowerCase() === i ? ((l = l.slice(o)), (s.column += o), (s.offset += o)) : (g = i + g)),
                                            (c = this.inlineTokenizers),
                                            (this.inlineTokenizers = { text: c.text }),
                                            (D = this.enterLink()),
                                            (l = this.tokenizeInline(l, s)),
                                            (this.inlineTokenizers = c),
                                            D(),
                                            e(f)({ type: "link", title: null, url: u(g, { nonTerminated: !1 }), children: l }))
                                    );
                            }
                        }
                    }
                }),
                eg = l((e, t) => {
                    t.exports = function (e, t) {
                        var r,
                            u = String(e),
                            n = 0;
                        if ("string" != typeof t) throw Error("Expected character");
                        for (r = u.indexOf(t); -1 !== r;) n++, (r = u.indexOf(t, r + t.length));
                        return n;
                    };
                }),
                em = l((e, t) => {
                    t.exports = function (e, t) {
                        var u,
                            n,
                            i,
                            o = -1;
                        if (!this.options.gfm) return o;
                        for (n = r.length, u = -1; ++u < n;) -1 !== (i = e.indexOf(r[u], t)) && (-1 === o || i < o) && (o = i);
                        return o;
                    };
                    var r = ["www.", "http://", "https://"];
                }),
                eC = l((e, t) => {
                    var r = eg(),
                        u = O(),
                        n = w(),
                        i = q(),
                        o = es(),
                        a = em();
                    function s(e, t, a) {
                        var s,
                            l,
                            c,
                            D,
                            f,
                            p,
                            d,
                            h,
                            F,
                            g,
                            m,
                            C,
                            E,
                            b,
                            v = this.options.gfm,
                            y = this.inlineTokenizers,
                            A = t.length,
                            x = -1,
                            k = !1;
                        if (v) {
                            if ("www." === t.slice(0, 4)) (k = !0), (D = 4);
                            else if ("http://" === t.slice(0, 7).toLowerCase()) D = 7;
                            else {
                                if ("https://" !== t.slice(0, 8).toLowerCase()) return;
                                D = 8;
                            }
                            for (x = D - 1, c = D, s = []; D < A;) {
                                if (46 === (d = t.charCodeAt(D))) {
                                    if (x === D - 1) break;
                                    s.push(D), (x = D), D++;
                                    continue;
                                }
                                if (n(d) || i(d) || 45 === d || 95 === d) {
                                    D++;
                                    continue;
                                }
                                break;
                            }
                            if ((46 === d && (s.pop(), D--), void 0 !== s[0] && ((l = s.length < 2 ? c : s[s.length - 2] + 1), -1 === t.slice(l, D).indexOf("_")))) {
                                if (a) return !0;
                                for (h = D, f = D; D < A && !(o((d = t.charCodeAt(D))) || 60 === d);) D++, 33 === d || 42 === d || 44 === d || 46 === d || 58 === d || 63 === d || 95 === d || 126 === d || (h = D);
                                if (((D = h), 41 === t.charCodeAt(D - 1))) for (F = r((p = t.slice(f, D)), "("), g = r(p, ")"); g > F;) (D = f + p.lastIndexOf(")")), (p = t.slice(f, D)), g--;
                                if (59 === t.charCodeAt(D - 1) && (D--, i(t.charCodeAt(D - 1)))) {
                                    for (h = D - 2; i(t.charCodeAt(h));) h--;
                                    38 === t.charCodeAt(h) && (D = h);
                                }
                                return (
                                    (E = u((m = t.slice(0, D)), { nonTerminated: !1 })),
                                    k && (E = "http://" + E),
                                    (b = this.enterLink()),
                                    (this.inlineTokenizers = { text: y.text }),
                                    (C = this.tokenizeInline(m, e.now())),
                                    (this.inlineTokenizers = y),
                                    b(),
                                    e(m)({ type: "link", title: null, url: E, children: C })
                                );
                            }
                        }
                    }
                    (t.exports = s), (s.locator = a), (s.notInLink = !0);
                }),
                eE = l((e, t) => {
                    var r = w(),
                        u = q();
                    function n(e) {
                        return r(e) || u(e) || 43 === e || 45 === e || 46 === e || 95 === e;
                    }
                    t.exports = function e(t, r) {
                        var u, i;
                        if (!this.options.gfm || -1 === (u = t.indexOf("@", r))) return -1;
                        if ((i = u) === r || !n(t.charCodeAt(i - 1))) return e.call(this, t, u + 1);
                        for (; i > r && n(t.charCodeAt(i - 1));) i--;
                        return i;
                    };
                }),
                eb = l((e, t) => {
                    var r = O(),
                        u = w(),
                        n = q(),
                        i = eE();
                    function o(e, t, i) {
                        var o,
                            a,
                            s,
                            l,
                            c = this.options.gfm,
                            D = this.inlineTokenizers,
                            f = 0,
                            p = t.length,
                            d = -1;
                        if (c) {
                            for (o = t.charCodeAt(f); u(o) || n(o) || 43 === o || 45 === o || 46 === o || 95 === o;) o = t.charCodeAt(++f);
                            if (0 !== f && 64 === o) {
                                for (f++; f < p;) {
                                    if (u((o = t.charCodeAt(f))) || n(o) || 45 === o || 46 === o || 95 === o) {
                                        f++, -1 === d && 46 === o && (d = f);
                                        continue;
                                    }
                                    break;
                                }
                                if (!(-1 === d || d === f || 45 === o || 95 === o))
                                    return (
                                        46 === o && f--,
                                        (a = t.slice(0, f)),
                                        !!i ||
                                        ((l = this.enterLink()),
                                            (this.inlineTokenizers = { text: D.text }),
                                            (s = this.tokenizeInline(a, e.now())),
                                            (this.inlineTokenizers = D),
                                            l(),
                                            e(a)({ type: "link", title: null, url: "mailto:" + r(a, { nonTerminated: !1 }), children: s }))
                                    );
                            }
                        }
                    }
                    (t.exports = o), (o.locator = i), (o.notInLink = !0);
                }),
                ev = l((e, t) => {
                    var r = q(),
                        u = eh(),
                        n = eo().tag;
                    (t.exports = a), (a.locator = u);
                    var i = /^<a /i,
                        o = /^<\/a>/i;
                    function a(e, t, u) {
                        var a,
                            s,
                            l = t.length;
                        if (!("<" !== t.charAt(0) || l < 3) && !(!r((a = t.charAt(1))) && "?" !== a && "!" !== a && "/" !== a) && (s = t.match(n)))
                            return !!u || ((s = s[0]), !this.inLink && i.test(s) ? (this.inLink = !0) : this.inLink && o.test(s) && (this.inLink = !1), e(s)({ type: "html", value: s }));
                    }
                }),
                ey = l((e, t) => {
                    t.exports = function (e, t) {
                        var r = e.indexOf("[", t),
                            u = e.indexOf("![", t);
                        return -1 === u || r < u ? r : u;
                    };
                }),
                eA = l((e, t) => {
                    var r = es(),
                        u = ey();
                    (t.exports = i), (i.locator = u);
                    var n = `
`;
                    function i(e, t, u) {
                        var i,
                            o,
                            a,
                            s,
                            l,
                            c,
                            D,
                            f,
                            p,
                            d,
                            h,
                            F,
                            g,
                            m,
                            C,
                            E,
                            b,
                            v,
                            y = "",
                            A = 0,
                            x = t.charAt(0),
                            k = this.options.pedantic,
                            w = this.options.commonmark,
                            B = this.options.gfm;
                        if (("!" === x && ((f = !0), (y = x), (x = t.charAt(++A))), "[" === x && !(!f && this.inLink))) {
                            for (y += x, m = "", A++, h = t.length, E = e.now(), g = 0, E.column += A, E.offset += A; A < h;) {
                                if (((c = x = t.charAt(A)), "`" === x)) {
                                    for (o = 1; "`" === t.charAt(A + 1);) (c += x), A++, o++;
                                    a ? o >= a && (a = 0) : (a = o);
                                } else if ("\\" === x) A++, (c += t.charAt(A));
                                else if ((!a || B) && "[" === x) g++;
                                else if ((!a || B) && "]" === x) {
                                    if (g) g--;
                                    else {
                                        if ("(" !== t.charAt(A + 1)) return;
                                        (c += "("), (i = !0), A++;
                                        break;
                                    }
                                }
                                (m += c), (c = ""), A++;
                            }
                            if (i) {
                                for (p = m, y += m + c, A++; A < h && r((x = t.charAt(A)));) (y += x), A++;
                                if (((x = t.charAt(A)), (m = ""), (s = y), "<" === x)) {
                                    for (A++, s += "<"; A < h && ">" !== (x = t.charAt(A));) {
                                        if (w && x === n) return;
                                        (m += x), A++;
                                    }
                                    if (">" !== t.charAt(A)) return;
                                    (y += "<" + m + ">"), (C = m), A++;
                                } else {
                                    for (x = null, c = ""; A < h && ((x = t.charAt(A)), !(c && ('"' === x || "'" === x || (w && "(" === x))));) {
                                        if (r(x)) {
                                            if (!k) break;
                                            c += x;
                                        } else {
                                            if ("(" === x) g++;
                                            else if (")" === x) {
                                                if (0 === g) break;
                                                g--;
                                            }
                                            (m += c), (c = ""), "\\" === x && ((m += "\\"), (x = t.charAt(++A))), (m += x);
                                        }
                                        A++;
                                    }
                                    (y += m), (C = m), (A = y.length);
                                }
                                for (m = ""; A < h && r((x = t.charAt(A)));) (m += x), A++;
                                if (((x = t.charAt(A)), (y += m), m && ('"' === x || "'" === x || (w && "(" === x)))) {
                                    if ((A++, (y += x), (m = ""), (d = "(" === x ? ")" : x), (l = y), w)) {
                                        for (; A < h && (x = t.charAt(A)) !== d;) "\\" === x && ((m += "\\"), (x = t.charAt(++A))), A++, (m += x);
                                        if ((x = t.charAt(A)) !== d) return;
                                        for (F = m, y += m + x, A++; A < h && r((x = t.charAt(A)));) (y += x), A++;
                                    } else
                                        for (c = ""; A < h;) {
                                            if ((x = t.charAt(A)) === d) D && ((m += d + c), (c = "")), (D = !0);
                                            else if (D) {
                                                if (")" === x) {
                                                    (y += m + d + c), (F = m);
                                                    break;
                                                }
                                                r(x) ? (c += x) : ((m += d + c + x), (c = ""), (D = !1));
                                            } else m += x;
                                            A++;
                                        }
                                }
                                if (")" === t.charAt(A))
                                    return (
                                        !!u ||
                                        ((y += ")"),
                                            (C = this.decode.raw(this.unescape(C), e(s).test().end, { nonTerminated: !1 })),
                                            F && ((l = e(l).test().end), (F = this.decode.raw(this.unescape(F), l))),
                                            (v = { type: f ? "image" : "link", title: F || null, url: C }),
                                            f ? (v.alt = this.decode.raw(this.unescape(p), E) || null) : ((b = this.enterLink()), (v.children = this.tokenizeInline(p, E)), b()),
                                            e(y)(v))
                                    );
                            }
                        }
                    }
                }),
                ex = l((e, t) => {
                    var r = es(),
                        u = ey(),
                        n = el();
                    (t.exports = a), (a.locator = u);
                    var i = "link",
                        o = "full";
                    function a(e, t, u) {
                        var a,
                            s,
                            l,
                            c,
                            D,
                            f,
                            p,
                            d,
                            h = this.options.commonmark,
                            F = t.charAt(0),
                            g = 0,
                            m = t.length,
                            C = "",
                            E = "",
                            b = i,
                            v = "shortcut";
                        if (("!" === F && ((b = "image"), (E = F), (F = t.charAt(++g))), "[" === F)) {
                            for (g++, E += F, f = "", d = 0; g < m;) {
                                if ("[" === (F = t.charAt(g))) (p = !0), d++;
                                else if ("]" === F) {
                                    if (!d) break;
                                    d--;
                                }
                                "\\" === F && ((f += "\\"), (F = t.charAt(++g))), (f += F), g++;
                            }
                            if (((C = f), (a = f), "]" === (F = t.charAt(g)))) {
                                if ((g++, (C += F), (f = ""), !h)) for (; g < m && r((F = t.charAt(g)));) (f += F), g++;
                                if ("[" === (F = t.charAt(g))) {
                                    for (s = "", f += F, g++; g < m && !("[" === (F = t.charAt(g)) || "]" === F);) "\\" === F && ((s += "\\"), (F = t.charAt(++g))), (s += F), g++;
                                    "]" === (F = t.charAt(g)) ? ((v = s ? o : "collapsed"), (f += s + F), g++) : (s = ""), (C += f), (f = "");
                                } else {
                                    if (!a) return;
                                    s = a;
                                }
                                if (!(v !== o && p))
                                    return (
                                        (C = E + C),
                                        b === i && this.inLink
                                            ? null
                                            : !!u ||
                                            ((l = e.now()),
                                                (l.column += E.length),
                                                (l.offset += E.length),
                                                (c = { type: b + "Reference", identifier: n((s = v === o ? s : a)), label: s, referenceType: v }),
                                                b === i ? ((D = this.enterLink()), (c.children = this.tokenizeInline(a, l)), D()) : (c.alt = this.decode.raw(this.unescape(a), l) || null),
                                                e(C)(c))
                                    );
                            }
                        }
                    }
                }),
                ek = l((e, t) => {
                    t.exports = function (e, t) {
                        var r = e.indexOf("**", t),
                            u = e.indexOf("__", t);
                        return -1 === u ? r : -1 === r || u < r ? u : r;
                    };
                }),
                ew = l((e, t) => {
                    var r = K(),
                        u = es(),
                        n = ek();
                    function i(e, t, n) {
                        var i,
                            o,
                            a,
                            s,
                            l,
                            c,
                            D,
                            f = 0,
                            p = t.charAt(f);
                        if (!(("*" !== p && "_" !== p) || t.charAt(++f) !== p) && ((o = this.options.pedantic), (l = (a = p) + a), (c = t.length), f++, (s = ""), (p = ""), !(o && u(t.charAt(f)))))
                            for (; f < c;) {
                                if (((D = p), (p = t.charAt(f)) === a && t.charAt(f + 1) === a && (!o || !u(D)) && (p = t.charAt(f + 2)) !== a))
                                    return r(s) ? !!n || ((i = e.now()), (i.column += 2), (i.offset += 2), e(l + s + l)({ type: "strong", children: this.tokenizeInline(s, i) })) : void 0;
                                o || "\\" !== p || ((s += p), (p = t.charAt(++f))), (s += p), f++;
                            }
                    }
                    (t.exports = i), (i.locator = n);
                }),
                eB = l((e, t) => {
                    t.exports = function (e) {
                        return u.test("number" == typeof e ? r(e) : e.charAt(0));
                    };
                    var r = String.fromCharCode,
                        u = /\w/;
                }),
                eq = l((e, t) => {
                    t.exports = function (e, t) {
                        var r = e.indexOf("*", t),
                            u = e.indexOf("_", t);
                        return -1 === u ? r : -1 === r || u < r ? u : r;
                    };
                }),
                eS = l((e, t) => {
                    var r = K(),
                        u = eB(),
                        n = es(),
                        i = eq();
                    function o(e, t, i) {
                        var o,
                            a,
                            s,
                            l,
                            c,
                            D,
                            f,
                            p = 0,
                            d = t.charAt(p);
                        if (!("*" !== d && "_" !== d) && ((a = this.options.pedantic), (c = d), (s = d), (D = t.length), p++, (l = ""), (d = ""), !(a && n(t.charAt(p)))))
                            for (; p < D;) {
                                if (((f = d), (d = t.charAt(p)) === s && (!a || !n(f)))) {
                                    if ((d = t.charAt(++p)) !== s) {
                                        if (!r(l) || f === s) return;
                                        if (!a && "_" === s && u(d)) {
                                            l += s;
                                            continue;
                                        }
                                        return !!i || ((o = e.now()), o.column++, o.offset++, e(c + l + s)({ type: "emphasis", children: this.tokenizeInline(l, o) }));
                                    }
                                    l += s;
                                }
                                a || "\\" !== d || ((l += d), (d = t.charAt(++p))), (l += d), p++;
                            }
                    }
                    (t.exports = o), (o.locator = i);
                }),
                eT = l((e, t) => {
                    t.exports = function (e, t) {
                        return e.indexOf("~~", t);
                    };
                }),
                eL = l((e, t) => {
                    var r = es(),
                        u = eT();
                    function n(e, t, u) {
                        var n,
                            i,
                            o,
                            a = "",
                            s = "",
                            l = "",
                            c = "";
                        if (!(!this.options.gfm || "~" !== t.charAt(0) || "~" !== t.charAt(1) || r(t.charAt(2))))
                            for (n = 1, i = t.length, o = e.now(), o.column += 2, o.offset += 2; ++n < i;) {
                                if ("~" === (a = t.charAt(n)) && "~" === s && (!l || !r(l))) return !!u || e("~~" + c + "~~")({ type: "delete", children: this.tokenizeInline(c, o) });
                                (c += s), (l = s), (s = a);
                            }
                    }
                    (t.exports = n), (n.locator = u);
                }),
                eO = l((e, t) => {
                    t.exports = function (e, t) {
                        return e.indexOf("`", t);
                    };
                }),
                eN = l((e, t) => {
                    var r = eO();
                    function u(e, t, r) {
                        for (var u, n, i, o, a, s, l = t.length, c = 0; c < l && 96 === t.charCodeAt(c);) c++;
                        if (!(0 === c || c === l)) {
                            for (u = c, a = t.charCodeAt(c); c < l;) {
                                if (((o = a), (a = t.charCodeAt(c + 1)), 96 === o)) {
                                    if ((void 0 === n && (n = c), (i = c + 1), 96 !== a && i - n === u)) {
                                        s = !0;
                                        break;
                                    }
                                } else void 0 !== n && ((n = void 0), (i = void 0));
                                c++;
                            }
                            if (s) {
                                if (r) return !0;
                                if (((c = u), (l = n), (o = t.charCodeAt(c)), (a = t.charCodeAt(l - 1)), (s = !1), l - c > 2 && (32 === o || 10 === o) && (32 === a || 10 === a))) {
                                    for (c++, l--; c < l;) {
                                        if (32 !== (o = t.charCodeAt(c)) && 10 !== o) {
                                            s = !0;
                                            break;
                                        }
                                        c++;
                                    }
                                    !0 === s && (u++, n--);
                                }
                                return e(t.slice(0, i))({ type: "inlineCode", value: t.slice(u, n) });
                            }
                        }
                    }
                    (t.exports = u), (u.locator = r);
                }),
                eR = l((e, t) => {
                    t.exports = function (e, t) {
                        for (
                            var r = e.indexOf(
                                `
`,
                                t
                            );
                            r > t && " " === e.charAt(r - 1);

                        )
                            r--;
                        return r;
                    };
                }),
                eI = l((e, t) => {
                    var r = eR();
                    (t.exports = n), (n.locator = r);
                    var u = `
`;
                    function n(e, t, r) {
                        for (var n, i = t.length, o = -1, a = ""; ++o < i;) {
                            if ((n = t.charAt(o)) === u) return o < 2 ? void 0 : !!r || e((a += n))({ type: "break" });
                            if (" " !== n) return;
                            a += n;
                        }
                    }
                }),
                ej = l((e, t) => {
                    t.exports = function (e, t, r) {
                        var u, n, i, o, a, s, l, c, D, f;
                        if (r) return !0;
                        for (o = (u = this.inlineMethods).length, n = this.inlineTokenizers, i = -1, D = t.length; ++i < o;)
                            !("text" === (c = u[i]) || !n[c]) && ((l = n[c].locator) || e.file.fail("Missing locator: `" + c + "`"), -1 !== (s = l.call(this, t, 1)) && s < D && (D = s));
                        (a = t.slice(0, D)),
                            (f = e.now()),
                            this.decode(a, f, function (t, r, u) {
                                e(u || t)({ type: "text", value: t });
                            });
                    };
                }),
                eP = l((e, t) => {
                    var r = C(),
                        u = v(),
                        n = y(),
                        i = A(),
                        o = N(),
                        a = R();
                    function s(e, t) {
                        (this.file = t),
                            (this.offset = {}),
                            (this.options = r(this.options)),
                            this.setOptions({}),
                            (this.inList = !1),
                            (this.inBlock = !1),
                            (this.inLink = !1),
                            (this.atStart = !0),
                            (this.toOffset = n(t).toOffset),
                            (this.unescape = i(this, "escape")),
                            (this.decode = o(this));
                    }
                    t.exports = s;
                    var l = s.prototype;
                    function c(e) {
                        var t,
                            r = [];
                        for (t in e) r.push(t);
                        return r;
                    }
                    (l.setOptions = z()),
                        (l.parse = H()),
                        (l.options = P()),
                        (l.exitStart = u("atStart", !0)),
                        (l.enterList = u("inList", !1)),
                        (l.enterLink = u("inLink", !1)),
                        (l.enterBlock = u("inBlock", !1)),
                        (l.interruptParagraph = [["thematicBreak"], ["list"], ["atxHeading"], ["fencedCode"], ["blockquote"], ["html"], ["setextHeading", { commonmark: !1 }], ["definition", { commonmark: !1 }]]),
                        (l.interruptList = [
                            ["atxHeading", { pedantic: !1 }],
                            ["fencedCode", { pedantic: !1 }],
                            ["thematicBreak", { pedantic: !1 }],
                            ["definition", { commonmark: !1 }],
                        ]),
                        (l.interruptBlockquote = [
                            ["indentedCode", { commonmark: !0 }],
                            ["fencedCode", { commonmark: !0 }],
                            ["atxHeading", { commonmark: !0 }],
                            ["setextHeading", { commonmark: !0 }],
                            ["thematicBreak", { commonmark: !0 }],
                            ["html", { commonmark: !0 }],
                            ["list", { commonmark: !0 }],
                            ["definition", { commonmark: !1 }],
                        ]),
                        (l.blockTokenizers = {
                            blankLine: G(),
                            indentedCode: Z(),
                            fencedCode: Y(),
                            blockquote: X(),
                            atxHeading: ee(),
                            thematicBreak: et(),
                            list: en(),
                            setextHeading: ei(),
                            html: ea(),
                            definition: ec(),
                            table: eD(),
                            paragraph: ef(),
                        }),
                        (l.inlineTokenizers = { escape: ed(), autoLink: eF(), url: eC(), email: eb(), html: ev(), link: eA(), reference: ex(), strong: ew(), emphasis: eS(), deletion: eL(), code: eN(), break: eI(), text: ej() }),
                        (l.blockMethods = c(l.blockTokenizers)),
                        (l.inlineMethods = c(l.inlineTokenizers)),
                        (l.tokenizeBlock = a("block")),
                        (l.tokenizeInline = a("inline")),
                        (l.tokenizeFactory = a);
                }),
                ez = l((e, t) => {
                    var r = b(),
                        u = C(),
                        n = eP();
                    function i(e) {
                        var t = this.data("settings"),
                            i = r(n);
                        (i.prototype.options = u(i.prototype.options, t, e)), (this.Parser = i);
                    }
                    (t.exports = i), (i.Parser = n);
                }),
                e$ = l((e, t) => {
                    t.exports = function (e) {
                        if (e) throw e;
                    };
                }),
                eU = l((e, t) => {
                    t.exports = function (e) {
                        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                    };
                }),
                eM = l((e, t) => {
                    var r = Object.prototype.hasOwnProperty,
                        u = Object.prototype.toString,
                        n = Object.defineProperty,
                        i = Object.getOwnPropertyDescriptor,
                        o = function (e) {
                            return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === u.call(e);
                        },
                        a = function (e) {
                            if (!e || "[object Object]" !== u.call(e)) return !1;
                            var t,
                                n = r.call(e, "constructor"),
                                i = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
                            if (e.constructor && !n && !i) return !1;
                            for (t in e);
                            return typeof t > "u" || r.call(e, t);
                        },
                        s = function (e, t) {
                            n && "__proto__" === t.name ? n(e, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 }) : (e[t.name] = t.newValue);
                        },
                        l = function (e, t) {
                            if ("__proto__" === t) {
                                if (!r.call(e, t)) return;
                                if (i) return i(e, t).value;
                            }
                            return e[t];
                        };
                    t.exports = function e() {
                        var t,
                            r,
                            u,
                            n,
                            i,
                            c,
                            D = arguments[0],
                            f = 1,
                            p = arguments.length,
                            d = !1;
                        for ("boolean" == typeof D && ((d = D), (D = arguments[1] || {}), (f = 2)), (null == D || ("object" != typeof D && "function" != typeof D)) && (D = {}); f < p; ++f)
                            if (((t = arguments[f]), null != t))
                                for (r in t)
                                    (u = l(D, r)),
                                        D !== (n = l(t, r)) &&
                                        (d && n && (a(n) || (i = o(n)))
                                            ? (i ? ((i = !1), (c = u && o(u) ? u : [])) : (c = u && a(u) ? u : {}), s(D, { name: r, newValue: e(d, c, n) }))
                                            : "u" > typeof n && s(D, { name: r, newValue: n }));
                        return D;
                    };
                }),
                eV = l((e, t) => {
                    t.exports = (e) => {
                        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                        let t = Object.getPrototypeOf(e);
                        return null === t || t === Object.prototype;
                    };
                }),
                e_ = l((e, t) => {
                    var r = [].slice;
                    t.exports = function (e, t) {
                        var u;
                        return function () {
                            var t,
                                o = r.call(arguments, 0),
                                a = e.length > o.length;
                            a && o.push(n);
                            try {
                                t = e.apply(null, o);
                            } catch (e) {
                                if (a && u) throw e;
                                return n(e);
                            }
                            a || (t && "function" == typeof t.then ? t.then(i, n) : t instanceof Error ? n(t) : i(t));
                        };
                        function n() {
                            u || ((u = !0), t.apply(null, arguments));
                        }
                        function i(e) {
                            n(null, e);
                        }
                    };
                }),
                eH = l((e, t) => {
                    var r = e_();
                    (t.exports = n), (n.wrap = r);
                    var u = [].slice;
                    function n() {
                        var e = [],
                            t = {};
                        return (
                            (t.run = function () {
                                var t = -1,
                                    n = u.call(arguments, 0, -1),
                                    i = arguments[arguments.length - 1];
                                if ("function" != typeof i) throw Error("Expected function as last argument, not " + i);
                                (function o(a) {
                                    var s = e[++t],
                                        l = u.call(arguments, 0),
                                        c = l.slice(1),
                                        D = n.length,
                                        f = -1;
                                    if (a) {
                                        i(a);
                                        return;
                                    }
                                    for (; ++f < D;) (null === c[f] || void 0 === c[f]) && (c[f] = n[f]);
                                    (n = c), s ? r(s, o).apply(null, n) : i.apply(null, [null].concat(n));
                                }.apply(null, [null].concat(n)));
                            }),
                            (t.use = function (r) {
                                if ("function" != typeof r) throw Error("Expected `fn` to be a function, not " + r);
                                return e.push(r), t;
                            }),
                            t
                        );
                    }
                }),
                eG = l((e, t) => {
                    var r = {}.hasOwnProperty;
                    function u(e) {
                        return (e && "object" == typeof e) || (e = {}), i(e.line) + ":" + i(e.column);
                    }
                    function n(e) {
                        return (e && "object" == typeof e) || (e = {}), u(e.start) + "-" + u(e.end);
                    }
                    function i(e) {
                        return e && "number" == typeof e ? e : 1;
                    }
                    t.exports = function (e) {
                        return e && "object" == typeof e ? (r.call(e, "position") || r.call(e, "type") ? n(e.position) : r.call(e, "start") || r.call(e, "end") ? n(e) : r.call(e, "line") || r.call(e, "column") ? u(e) : "") : "";
                    };
                }),
                eW = l((e, t) => {
                    var r = eG();
                    function u() { }
                    (t.exports = i), (u.prototype = Error.prototype), (i.prototype = new u());
                    var n = i.prototype;
                    function i(e, t, u) {
                        var n, i, o, a, s;
                        "string" == typeof t && ((u = t), (t = null)),
                            (s = [null, null]),
                            "string" == typeof (o = u) && (-1 === (a = o.indexOf(":")) ? (s[1] = o) : ((s[0] = o.slice(0, a)), (s[1] = o.slice(a + 1)))),
                            (n = r(t) || "1:1"),
                            (i = { start: { line: null, column: null }, end: { line: null, column: null } }),
                            t && t.position && (t = t.position),
                            t && (t.start ? ((i = t), (t = t.start)) : (i.start = t)),
                            e.stack && ((this.stack = e.stack), (e = e.message)),
                            (this.message = e),
                            (this.name = n),
                            (this.reason = e),
                            (this.line = t ? t.line : null),
                            (this.column = t ? t.column : null),
                            (this.location = i),
                            (this.source = s[0]),
                            (this.ruleId = s[1]);
                    }
                    (n.file = ""), (n.name = ""), (n.reason = ""), (n.message = ""), (n.stack = ""), (n.fatal = null), (n.column = null), (n.line = null);
                }),
                eJ = l((e) => {
                    (e.basename = function (e, r) {
                        var u,
                            n,
                            i,
                            o,
                            a = 0,
                            s = -1;
                        if (void 0 !== r && "string" != typeof r) throw TypeError('"ext" argument must be a string');
                        if ((t(e), (u = e.length), void 0 === r || !r.length || r.length > e.length)) {
                            for (; u--;)
                                if (47 === e.charCodeAt(u)) {
                                    if (i) {
                                        a = u + 1;
                                        break;
                                    }
                                } else s < 0 && ((i = !0), (s = u + 1));
                            return s < 0 ? "" : e.slice(a, s);
                        }
                        if (r === e) return "";
                        for (n = -1, o = r.length - 1; u--;)
                            if (47 === e.charCodeAt(u)) {
                                if (i) {
                                    a = u + 1;
                                    break;
                                }
                            } else n < 0 && ((i = !0), (n = u + 1)), o > -1 && (e.charCodeAt(u) === r.charCodeAt(o--) ? o < 0 && (s = u) : ((o = -1), (s = n)));
                        return a === s ? (s = n) : s < 0 && (s = e.length), e.slice(a, s);
                    }),
                        (e.dirname = function (e) {
                            var r, u, n;
                            if ((t(e), !e.length)) return ".";
                            for (r = -1, n = e.length; --n;)
                                if (47 === e.charCodeAt(n)) {
                                    if (u) {
                                        r = n;
                                        break;
                                    }
                                } else u || (u = !0);
                            return r < 0 ? (47 === e.charCodeAt(0) ? "/" : ".") : 1 === r && 47 === e.charCodeAt(0) ? "//" : e.slice(0, r);
                        }),
                        (e.extname = function (e) {
                            var r,
                                u,
                                n,
                                i = -1,
                                o = 0,
                                a = -1,
                                s = 0;
                            for (t(e), n = e.length; n--;) {
                                if (47 === (u = e.charCodeAt(n))) {
                                    if (r) {
                                        o = n + 1;
                                        break;
                                    }
                                    continue;
                                }
                                a < 0 && ((r = !0), (a = n + 1)), 46 === u ? (i < 0 ? (i = n) : 1 !== s && (s = 1)) : i > -1 && (s = -1);
                            }
                            return i < 0 || a < 0 || 0 === s || (1 === s && i === a - 1 && i === o + 1) ? "" : e.slice(i, a);
                        }),
                        (e.join = function () {
                            for (var e, r, u, n, i = -1; ++i < arguments.length;) t(arguments[i]), arguments[i] && (n = void 0 === n ? arguments[i] : n + "/" + arguments[i]);
                            return void 0 === n
                                ? "."
                                : (t((e = n)),
                                    (r = 47 === e.charCodeAt(0)),
                                    (u = (function (e, t) {
                                        for (var r, u, n = "", i = 0, o = -1, a = 0, s = -1; ++s <= e.length;) {
                                            if (s < e.length) r = e.charCodeAt(s);
                                            else {
                                                if (47 === r) break;
                                                r = 47;
                                            }
                                            if (47 === r) {
                                                if (!(o === s - 1 || 1 === a)) {
                                                    if (o !== s - 1 && 2 === a) {
                                                        if (n.length < 2 || 2 !== i || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
                                                            if (n.length > 2) {
                                                                if ((u = n.lastIndexOf("/")) !== n.length - 1) {
                                                                    u < 0 ? ((n = ""), (i = 0)) : (i = (n = n.slice(0, u)).length - 1 - n.lastIndexOf("/")), (o = s), (a = 0);
                                                                    continue;
                                                                }
                                                            } else if (n.length) {
                                                                (n = ""), (i = 0), (o = s), (a = 0);
                                                                continue;
                                                            }
                                                        }
                                                        t && ((n = n.length ? n + "/.." : ".."), (i = 2));
                                                    } else n.length ? (n += "/" + e.slice(o + 1, s)) : (n = e.slice(o + 1, s)), (i = s - o - 1);
                                                }
                                                (o = s), (a = 0);
                                            } else 46 === r && a > -1 ? a++ : (a = -1);
                                        }
                                        return n;
                                    })(e, !r)).length ||
                                    r ||
                                    (u = "."),
                                    u.length && 47 === e.charCodeAt(e.length - 1) && (u += "/"),
                                    r ? "/" + u : u);
                        }),
                        (e.sep = "/");
                    function t(e) {
                        if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e));
                    }
                }),
                eZ = l((e) => {
                    e.cwd = function () {
                        return "/";
                    };
                }),
                eY = l((e, t) => {
                    var r = eJ(),
                        u = eZ(),
                        n = eU();
                    t.exports = a;
                    var i = {}.hasOwnProperty,
                        o = ["history", "path", "basename", "stem", "extname", "dirname"];
                    function a(e) {
                        var t, r;
                        if (e) {
                            if ("string" == typeof e || n(e)) e = { contents: e };
                            else if ("message" in e && "messages" in e) return e;
                        } else e = {};
                        if (!(this instanceof a)) return new a(e);
                        for (this.data = {}, this.messages = [], this.history = [], this.cwd = u.cwd(), r = -1; ++r < o.length;) (t = o[r]), i.call(e, t) && (this[t] = e[t]);
                        for (t in e) 0 > o.indexOf(t) && (this[t] = e[t]);
                    }
                    function s(e, t) {
                        if (e && e.indexOf(r.sep) > -1) throw Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`");
                    }
                    function l(e, t) {
                        if (!e) throw Error("`" + t + "` cannot be empty");
                    }
                    function c(e, t) {
                        if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
                    }
                    (a.prototype.toString = function (e) {
                        return (this.contents || "").toString(e);
                    }),
                        Object.defineProperty(a.prototype, "path", {
                            get: function () {
                                return this.history[this.history.length - 1];
                            },
                            set: function (e) {
                                l(e, "path"), this.path !== e && this.history.push(e);
                            },
                        }),
                        Object.defineProperty(a.prototype, "dirname", {
                            get: function () {
                                return "string" == typeof this.path ? r.dirname(this.path) : void 0;
                            },
                            set: function (e) {
                                c(this.path, "dirname"), (this.path = r.join(e || "", this.basename));
                            },
                        }),
                        Object.defineProperty(a.prototype, "basename", {
                            get: function () {
                                return "string" == typeof this.path ? r.basename(this.path) : void 0;
                            },
                            set: function (e) {
                                l(e, "basename"), s(e, "basename"), (this.path = r.join(this.dirname || "", e));
                            },
                        }),
                        Object.defineProperty(a.prototype, "extname", {
                            get: function () {
                                return "string" == typeof this.path ? r.extname(this.path) : void 0;
                            },
                            set: function (e) {
                                if ((s(e, "extname"), c(this.path, "extname"), e)) {
                                    if (46 !== e.charCodeAt(0)) throw Error("`extname` must start with `.`");
                                    if (e.indexOf(".", 1) > -1) throw Error("`extname` cannot contain multiple dots");
                                }
                                this.path = r.join(this.dirname, this.stem + (e || ""));
                            },
                        }),
                        Object.defineProperty(a.prototype, "stem", {
                            get: function () {
                                return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0;
                            },
                            set: function (e) {
                                l(e, "stem"), s(e, "stem"), (this.path = r.join(this.dirname || "", e + (this.extname || "")));
                            },
                        });
                }),
                eK = l((e, t) => {
                    var r = eW(),
                        u = eY();
                    (t.exports = u),
                        (u.prototype.message = function (e, t, u) {
                            var n = new r(e, t, u);
                            return this.path && ((n.name = this.path + ":" + n.name), (n.file = this.path)), (n.fatal = !1), this.messages.push(n), n;
                        }),
                        (u.prototype.info = function () {
                            var e = this.message.apply(this, arguments);
                            return (e.fatal = null), e;
                        }),
                        (u.prototype.fail = function () {
                            var e = this.message.apply(this, arguments);
                            throw ((e.fatal = !0), e);
                        });
                }),
                eQ = l((e, t) => {
                    t.exports = eK();
                }),
                eX = l((e, t) => {
                    var r = e$(),
                        u = eU(),
                        n = eM(),
                        i = eV(),
                        o = eH(),
                        a = eQ();
                    t.exports = (function e() {
                        var t,
                            u = [],
                            g = o(),
                            m = {},
                            C = -1;
                        return (
                            (E.data = function (e, r) {
                                return "string" == typeof e ? (2 == arguments.length ? (d("data", t), (m[e] = r), E) : (l.call(m, e) && m[e]) || null) : e ? (d("data", t), (m = e), E) : m;
                            }),
                            (E.freeze = b),
                            (E.attachers = u),
                            (E.use = function (e) {
                                var r;
                                if ((d("use", t), null != e)) {
                                    if ("function" == typeof e) l.apply(null, arguments);
                                    else if ("object" == typeof e) "length" in e ? a(e) : o(e);
                                    else throw Error("Expected usable value, not `" + e + "`");
                                }
                                return r && (m.settings = n(m.settings || {}, r)), E;
                                function o(e) {
                                    a(e.plugins), e.settings && (r = n(r || {}, e.settings));
                                }
                                function a(e) {
                                    var t = -1;
                                    if (null != e) {
                                        if ("object" == typeof e && "length" in e)
                                            for (; ++t < e.length;)
                                                !(function (e) {
                                                    if ("function" == typeof e) l(e);
                                                    else if ("object" == typeof e) "length" in e ? l.apply(null, e) : o(e);
                                                    else throw Error("Expected usable value, not `" + e + "`");
                                                })(e[t]);
                                        else throw Error("Expected a list of plugins, not `" + e + "`");
                                    }
                                }
                                function l(e, t) {
                                    var r = (function (e) {
                                        for (var t = -1; ++t < u.length;) if (u[t][0] === e) return u[t];
                                    })(e);
                                    r ? (i(r[1]) && i(t) && (t = n(!0, r[1], t)), (r[1] = t)) : u.push(s.call(arguments));
                                }
                            }),
                            (E.parse = function (e) {
                                var t,
                                    r = a(e);
                                return b(), f("parse", (t = E.Parser)), D(t, "parse") ? new t(String(r), r).parse() : t(String(r), r);
                            }),
                            (E.stringify = function (e, t) {
                                var r,
                                    u = a(t);
                                return b(), p("stringify", (r = E.Compiler)), h(e), D(r, "compile") ? new r(e, u).compile() : r(e, u);
                            }),
                            (E.run = v),
                            (E.runSync = function (e, t) {
                                var u, n;
                                return (
                                    v(e, t, function (e, t) {
                                        (n = !0), (u = t), r(e);
                                    }),
                                    F("runSync", "run", n),
                                    u
                                );
                            }),
                            (E.process = y),
                            (E.processSync = function (e) {
                                var t, u;
                                return (
                                    b(),
                                    f("processSync", E.Parser),
                                    p("processSync", E.Compiler),
                                    y((t = a(e)), function (e) {
                                        (u = !0), r(e);
                                    }),
                                    F("processSync", "process", u),
                                    t
                                );
                            }),
                            E
                        );
                        function E() {
                            for (var t = e(), r = -1; ++r < u.length;) t.use.apply(null, u[r]);
                            return t.data(n(!0, {}, m)), t;
                        }
                        function b() {
                            var e, r;
                            if (t) return E;
                            for (; ++C < u.length;) !1 !== (e = u[C])[1] && (!0 === e[1] && (e[1] = void 0), "function" == typeof (r = e[0].apply(E, e.slice(1))) && g.use(r));
                            return (t = !0), (C = 1 / 0), E;
                        }
                        function v(e, t, r) {
                            if ((h(e), b(), r || "function" != typeof t || ((r = t), (t = null)), !r)) return new Promise(u);
                            function u(u, n) {
                                g.run(e, a(t), function (t, i, o) {
                                    (i = i || e), t ? n(t) : u ? u(i) : r(null, i, o);
                                });
                            }
                            u(null, r);
                        }
                        function y(e, t) {
                            if ((b(), f("process", E.Parser), p("process", E.Compiler), !t)) return new Promise(r);
                            function r(r, u) {
                                var n = a(e);
                                c.run(E, { file: n }, function (e) {
                                    e ? u(e) : r ? r(n) : t(null, n);
                                });
                            }
                            r(null, t);
                        }
                    })().freeze();
                    var s = [].slice,
                        l = {}.hasOwnProperty,
                        c = o()
                            .use(function (e, t) {
                                t.tree = e.parse(t.file);
                            })
                            .use(function (e, t, r) {
                                e.run(t.tree, t.file, function (e, u, n) {
                                    e ? r(e) : ((t.tree = u), (t.file = n), r());
                                });
                            })
                            .use(function (e, t) {
                                var r = e.stringify(t.tree, t.file);
                                null == r || ("string" == typeof r || u(r) ? ("value" in t.file && (t.file.value = r), (t.file.contents = r)) : (t.file.result = r));
                            });
                    function D(e, t) {
                        return (
                            "function" == typeof e &&
                            e.prototype &&
                            ((function (e) {
                                var t;
                                for (t in e) return !0;
                                return !1;
                            })(e.prototype) ||
                                t in e.prototype)
                        );
                    }
                    function f(e, t) {
                        if ("function" != typeof t) throw Error("Cannot `" + e + "` without `Parser`");
                    }
                    function p(e, t) {
                        if ("function" != typeof t) throw Error("Cannot `" + e + "` without `Compiler`");
                    }
                    function d(e, t) {
                        if (t) throw Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
                    }
                    function h(e) {
                        if (!e || "string" != typeof e.type) throw Error("Expected node, got `" + e + "`");
                    }
                    function F(e, t, r) {
                        if (!r) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
                    }
                }),
                e0 = {};
            c(e0, { languages: () => rj, options: () => rP, parsers: () => rz, printers: () => r5 });
            var e1 = (e, t, r, u) => {
                if (!(e && null == t)) return t.replaceAll ? t.replaceAll(r, u) : r.global ? t.replace(r, u) : t.split(r).join(u);
            },
                e2 = (e, t, r) => {
                    if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[r < 0 ? t.length + r : r] : t.at(r);
                },
                e3 = f(p(), 1),
                e8 = "string",
                e6 = "array",
                e7 = "cursor",
                e9 = "indent",
                e4 = "align",
                e5 = "trim",
                te = "group",
                tt = "fill",
                tr = "if-break",
                tu = "indent-if-break",
                tn = "line-suffix",
                ti = "line-suffix-boundary",
                to = "line",
                ta = "label",
                ts = "break-parent",
                tl = new Set([e7, e9, e4, e5, te, tt, tr, tu, tn, ti, to, ta, ts]),
                tc = function (e) {
                    if ("string" == typeof e) return e8;
                    if (Array.isArray(e)) return e6;
                    if (!e) return;
                    let { type: t } = e;
                    if (tl.has(t)) return t;
                },
                tD = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e),
                tf = class extends Error {
                    name = "InvalidDocError";
                    constructor(e) {
                        super(
                            (function (e) {
                                let t = null === e ? "null" : typeof e;
                                if ("string" !== t && "object" !== t)
                                    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
                                if (tc(e)) throw Error("doc is valid.");
                                let r = Object.prototype.toString.call(e);
                                if ("[object Object]" !== r) return `Unexpected doc '${r}'.`;
                                let u = tD([...tl].map((e) => `'${e}'`));
                                return `Unexpected doc.type '${e.type}'.
Expected it to be ${u}.`;
                            })(e)
                        ),
                            (this.doc = e);
                    }
                },
                tp = {},
                td = function (e, t, r, u) {
                    let n = [e];
                    for (; n.length > 0;) {
                        let e = n.pop();
                        if (e === tp) {
                            r(n.pop());
                            continue;
                        }
                        r && n.push(e, tp);
                        let i = tc(e);
                        if (!i) throw new tf(e);
                        if ((null == t ? void 0 : t(e)) !== !1)
                            switch (i) {
                                case e6:
                                case tt: {
                                    let t = i === e6 ? e : e.parts;
                                    for (let e = t.length, r = e - 1; r >= 0; --r) n.push(t[r]);
                                    break;
                                }
                                case tr:
                                    n.push(e.flatContents, e.breakContents);
                                    break;
                                case te:
                                    if (u && e.expandedStates) for (let t = e.expandedStates.length, r = t - 1; r >= 0; --r) n.push(e.expandedStates[r]);
                                    else n.push(e.contents);
                                    break;
                                case e4:
                                case e9:
                                case tu:
                                case ta:
                                case tn:
                                    n.push(e.contents);
                                    break;
                                case e8:
                                case e7:
                                case e5:
                                case ti:
                                case to:
                                case ts:
                                    break;
                                default:
                                    throw new tf(e);
                            }
                    }
                },
                th = () => { };
            function tF(e) {
                return th(e), { type: e9, contents: e };
            }
            function tg(e, t) {
                return th(t), { type: e4, contents: t, n: e };
            }
            function tm(e, t = {}) {
                return th(e), th(t.expandedStates, !0), { type: te, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
            }
            function tC(e) {
                return tg({ type: "root" }, e);
            }
            function tE(e) {
                return th(e), { type: tt, parts: e };
            }
            var tb = { type: ts },
                tv = { type: to, hard: !0 },
                ty = { type: to },
                tA = { type: to, soft: !0 },
                tx = [tv, tb],
                tk = [{ type: to, hard: !0, literal: !0 }, tb];
            function tw(e, t) {
                th(e), th(t);
                let r = [];
                for (let u = 0; u < t.length; u++) 0 !== u && r.push(e), r.push(t[u]);
                return r;
            }
            var tB = () =>
                /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,
                tq = (e) => {
                    var t;
                    return !(
                        12288 === e ||
                        (e >= 65281 && e <= 65376) ||
                        (e >= 65504 && e <= 65510) ||
                        ((t = e) >= 4352 && t <= 4447) ||
                        8986 === t ||
                        8987 === t ||
                        9001 === t ||
                        9002 === t ||
                        (t >= 9193 && t <= 9196) ||
                        9200 === t ||
                        9203 === t ||
                        9725 === t ||
                        9726 === t ||
                        9748 === t ||
                        9749 === t ||
                        (t >= 9800 && t <= 9811) ||
                        9855 === t ||
                        9875 === t ||
                        9889 === t ||
                        9898 === t ||
                        9899 === t ||
                        9917 === t ||
                        9918 === t ||
                        9924 === t ||
                        9925 === t ||
                        9934 === t ||
                        9940 === t ||
                        9962 === t ||
                        9970 === t ||
                        9971 === t ||
                        9973 === t ||
                        9978 === t ||
                        9981 === t ||
                        9989 === t ||
                        9994 === t ||
                        9995 === t ||
                        10024 === t ||
                        10060 === t ||
                        10062 === t ||
                        (t >= 10067 && t <= 10069) ||
                        10071 === t ||
                        (t >= 10133 && t <= 10135) ||
                        10160 === t ||
                        10175 === t ||
                        11035 === t ||
                        11036 === t ||
                        11088 === t ||
                        11093 === t ||
                        (t >= 11904 && t <= 11929) ||
                        (t >= 11931 && t <= 12019) ||
                        (t >= 12032 && t <= 12245) ||
                        (t >= 12272 && t <= 12287) ||
                        (t >= 12289 && t <= 12350) ||
                        (t >= 12353 && t <= 12438) ||
                        (t >= 12441 && t <= 12543) ||
                        (t >= 12549 && t <= 12591) ||
                        (t >= 12593 && t <= 12686) ||
                        (t >= 12688 && t <= 12771) ||
                        (t >= 12783 && t <= 12830) ||
                        (t >= 12832 && t <= 12871) ||
                        (t >= 12880 && t <= 19903) ||
                        (t >= 19968 && t <= 42124) ||
                        (t >= 42128 && t <= 42182) ||
                        (t >= 43360 && t <= 43388) ||
                        (t >= 44032 && t <= 55203) ||
                        (t >= 63744 && t <= 64255) ||
                        (t >= 65040 && t <= 65049) ||
                        (t >= 65072 && t <= 65106) ||
                        (t >= 65108 && t <= 65126) ||
                        (t >= 65128 && t <= 65131) ||
                        (t >= 94176 && t <= 94180) ||
                        94192 === t ||
                        94193 === t ||
                        (t >= 94208 && t <= 100343) ||
                        (t >= 100352 && t <= 101589) ||
                        (t >= 101632 && t <= 101640) ||
                        (t >= 110576 && t <= 110579) ||
                        (t >= 110581 && t <= 110587) ||
                        110589 === t ||
                        110590 === t ||
                        (t >= 110592 && t <= 110882) ||
                        110898 === t ||
                        (t >= 110928 && t <= 110930) ||
                        110933 === t ||
                        (t >= 110948 && t <= 110951) ||
                        (t >= 110960 && t <= 111355) ||
                        126980 === t ||
                        127183 === t ||
                        127374 === t ||
                        (t >= 127377 && t <= 127386) ||
                        (t >= 127488 && t <= 127490) ||
                        (t >= 127504 && t <= 127547) ||
                        (t >= 127552 && t <= 127560) ||
                        127568 === t ||
                        127569 === t ||
                        (t >= 127584 && t <= 127589) ||
                        (t >= 127744 && t <= 127776) ||
                        (t >= 127789 && t <= 127797) ||
                        (t >= 127799 && t <= 127868) ||
                        (t >= 127870 && t <= 127891) ||
                        (t >= 127904 && t <= 127946) ||
                        (t >= 127951 && t <= 127955) ||
                        (t >= 127968 && t <= 127984) ||
                        127988 === t ||
                        (t >= 127992 && t <= 128062) ||
                        128064 === t ||
                        (t >= 128066 && t <= 128252) ||
                        (t >= 128255 && t <= 128317) ||
                        (t >= 128331 && t <= 128334) ||
                        (t >= 128336 && t <= 128359) ||
                        128378 === t ||
                        128405 === t ||
                        128406 === t ||
                        128420 === t ||
                        (t >= 128507 && t <= 128591) ||
                        (t >= 128640 && t <= 128709) ||
                        128716 === t ||
                        (t >= 128720 && t <= 128722) ||
                        (t >= 128725 && t <= 128727) ||
                        (t >= 128732 && t <= 128735) ||
                        128747 === t ||
                        128748 === t ||
                        (t >= 128756 && t <= 128764) ||
                        (t >= 128992 && t <= 129003) ||
                        129008 === t ||
                        (t >= 129292 && t <= 129338) ||
                        (t >= 129340 && t <= 129349) ||
                        (t >= 129351 && t <= 129535) ||
                        (t >= 129648 && t <= 129660) ||
                        (t >= 129664 && t <= 129672) ||
                        (t >= 129680 && t <= 129725) ||
                        (t >= 129727 && t <= 129733) ||
                        (t >= 129742 && t <= 129755) ||
                        (t >= 129760 && t <= 129768) ||
                        (t >= 129776 && t <= 129784) ||
                        (t >= 131072 && t <= 196605) ||
                        (t >= 196608 && t <= 262141)
                    );
                },
                tS = /[^\x20-\x7F]/,
                tT = function (e) {
                    if (!e) return 0;
                    if (!tS.test(e)) return e.length;
                    e = e.replace(tB(), "  ");
                    let t = 0;
                    for (let r of e) {
                        let e = r.codePointAt(0);
                        e <= 31 || (e >= 127 && e <= 159) || (e >= 768 && e <= 879) || (t += tq(e) ? 1 : 2);
                    }
                    return t;
                },
                tL = (e) => {
                    if (Array.isArray(e)) return e;
                    if (e.type !== tt) throw Error(`Expect doc to be 'array' or '${tt}'.`);
                    return e.parts;
                };
            function tO(e, t) {
                if ("string" == typeof e) return t(e);
                let r = new Map();
                return (function e(u) {
                    if (r.has(u)) return r.get(u);
                    let n = (function (r) {
                        switch (tc(r)) {
                            case e6:
                                return t(r.map(e));
                            case tt:
                                return t({ ...r, parts: r.parts.map(e) });
                            case tr:
                                return t({ ...r, breakContents: e(r.breakContents), flatContents: e(r.flatContents) });
                            case te: {
                                let { expandedStates: u, contents: n } = r;
                                return (n = u ? (u = u.map(e))[0] : e(n)), t({ ...r, contents: n, expandedStates: u });
                            }
                            case e4:
                            case e9:
                            case tu:
                            case ta:
                            case tn:
                                return t({ ...r, contents: e(r.contents) });
                            case e8:
                            case e7:
                            case e5:
                            case ti:
                            case to:
                            case ts:
                                return t(r);
                            default:
                                throw new tf(r);
                        }
                    })(u);
                    return r.set(u, n), n;
                })(e);
            }
            function tN(e) {
                if (e.length > 0) {
                    let t = e2(!1, e, -1);
                    t.expandedStates || t.break || (t.break = "propagated");
                }
                return null;
            }
            function tR(e) {
                let t = [],
                    r = e.filter(Boolean);
                for (; r.length > 0;) {
                    let e = r.shift();
                    if (e) {
                        if (Array.isArray(e)) {
                            r.unshift(...e);
                            continue;
                        }
                        if (t.length > 0 && "string" == typeof e2(!1, t, -1) && "string" == typeof e) {
                            t[t.length - 1] += e;
                            continue;
                        }
                        t.push(e);
                    }
                }
                return t;
            }
            function tI(e, t = tk) {
                return tO(e, (e) =>
                    "string" == typeof e
                        ? tw(
                            t,
                            e.split(`
`)
                        )
                        : e
                );
            }
            var tj = Symbol("MODE_BREAK"),
                tP = Symbol("MODE_FLAT"),
                tz = Symbol("cursor");
            function t$() {
                return { value: "", length: 0, queue: [] };
            }
            function tU(e, t, r) {
                let u = "dedent" === t.type ? e.queue.slice(0, -1) : [...e.queue, t],
                    n = "",
                    i = 0,
                    o = 0,
                    a = 0;
                for (let e of u)
                    switch (e.type) {
                        case "indent":
                            c(), r.useTabs ? s(1) : l(r.tabWidth);
                            break;
                        case "stringAlign":
                            c(), (n += e.n), (i += e.n.length);
                            break;
                        case "numberAlign":
                            (o += 1), (a += e.n);
                            break;
                        default:
                            throw Error(`Unexpected type '${e.type}'`);
                    }
                return D(), { ...e, value: n, length: i, queue: u };
                function s(e) {
                    (n += "	".repeat(e)), (i += r.tabWidth * e);
                }
                function l(e) {
                    (n += " ".repeat(e)), (i += e);
                }
                function c() {
                    r.useTabs ? (o > 0 && s(o), (o = 0), (a = 0)) : D();
                }
                function D() {
                    a > 0 && l(a), (o = 0), (a = 0);
                }
            }
            function tM(e) {
                let t = 0,
                    r = 0,
                    u = e.length;
                e: for (; u--;) {
                    let n = e[u];
                    if (n === tz) {
                        r++;
                        continue;
                    }
                    for (let r = n.length - 1; r >= 0; r--) {
                        let i = n[r];
                        if (" " === i || "	" === i) t++;
                        else {
                            e[u] = n.slice(0, r + 1);
                            break e;
                        }
                    }
                }
                if (t > 0 || r > 0) for (e.length = u + 1; r-- > 0;) e.push(tz);
                return t;
            }
            function tV(e, t, r, u, n, i) {
                if (r === Number.POSITIVE_INFINITY) return !0;
                let o = t.length,
                    a = [e],
                    s = [];
                for (; r >= 0;) {
                    if (0 === a.length) {
                        if (0 === o) return !0;
                        a.push(t[--o]);
                        continue;
                    }
                    let { mode: e, doc: l } = a.pop();
                    switch (tc(l)) {
                        case e8:
                            s.push(l), (r -= tT(l));
                            break;
                        case e6:
                        case tt: {
                            let t = tL(l);
                            for (let r = t.length - 1; r >= 0; r--) a.push({ mode: e, doc: t[r] });
                            break;
                        }
                        case e9:
                        case e4:
                        case tu:
                        case ta:
                            a.push({ mode: e, doc: l.contents });
                            break;
                        case e5:
                            r += tM(s);
                            break;
                        case te: {
                            if (i && l.break) return !1;
                            let t = l.break ? tj : e,
                                r = l.expandedStates && t === tj ? e2(!1, l.expandedStates, -1) : l.contents;
                            a.push({ mode: t, doc: r });
                            break;
                        }
                        case tr: {
                            let t = (l.groupId ? n[l.groupId] || tP : e) === tj ? l.breakContents : l.flatContents;
                            t && a.push({ mode: e, doc: t });
                            break;
                        }
                        case to:
                            if (e === tj || l.hard) return !0;
                            l.soft || (s.push(" "), r--);
                            break;
                        case tn:
                            u = !0;
                            break;
                        case ti:
                            if (u) return !1;
                    }
                }
                return !1;
            }
            function t_(e) {
                if ("string" != typeof e) throw TypeError("Expected a string");
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
            }
            var tH = function (e, t) {
                let r = e.match(RegExp(`(${t_(t)})+`, "g"));
                return null === r ? 0 : r.reduce((e, r) => Math.max(e, r.length / t.length), 0);
            },
                tG = function (e, t) {
                    let r = e.match(RegExp(`(${t_(t)})+`, "g"));
                    if (null === r) return 0;
                    let u = new Map(),
                        n = 0;
                    for (let e of r) {
                        let r = e.length / t.length;
                        u.set(r, !0), r > n && (n = r);
                    }
                    for (let e = 1; e < n; e++) if (!u.get(e)) return e;
                    return n + 1;
                },
                tW = function (e, t) {
                    let r = !0 === t || "'" === t ? "'" : '"',
                        u = "'" === r ? '"' : "'",
                        n = 0,
                        i = 0;
                    for (let t of e) t === r ? n++ : t === u && i++;
                    return n > i ? u : r;
                },
                tJ = class extends Error {
                    name = "UnexpectedNodeError";
                    constructor(e, t, r = "type") {
                        super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`), (this.node = e);
                    }
                },
                tZ = f(p(), 1),
                tY = RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s"),
                tK = function (e) {
                    let t = e.match(tY);
                    if (!t) return { content: e };
                    let { startDelimiter: r, language: u, value: n = "", endDelimiter: i } = t.groups,
                        o = u.trim() || "yaml";
                    if (("+++" === r && (o = "toml"), "yaml" !== o && r !== i)) return { content: e };
                    let [a] = t;
                    return { frontMatter: { type: "front-matter", lang: o, value: n, startDelimiter: r, endDelimiter: i, raw: a.replace(/\n$/, "") }, content: e1(!1, a, /[^\n]/g, " ") + e.slice(a.length) };
                },
                tQ = ["format", "prettier"];
            function tX(e) {
                let t = `@(${tQ.join("|")})`,
                    r = RegExp(
                        `<!--\\s*${t}\\s*-->|{\\s*\\/\\*\\s*${t}\\s*\\*\\/\\s*}|<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${t}[^\\S
]*($|
)[\\s\\S]*
.*-->`,
                        "m"
                    ),
                    u = e.match(r);
                return (null == u ? void 0 : u.index) === 0;
            }
            var t0 = new Set(["position", "raw"]);
            function t1(e, t, r) {
                var u;
                if (
                    (("front-matter" === e.type || "code" === e.type || "yaml" === e.type || "import" === e.type || "export" === e.type || "jsx" === e.type) && delete t.value,
                        "list" === e.type && delete t.isAligned,
                        ("list" === e.type || "listItem" === e.type) && delete t.spread,
                        "text" === e.type)
                )
                    return null;
                if (
                    ("inlineCode" === e.type &&
                        (t.value = e1(
                            !1,
                            e.value,
                            `
`,
                            " "
                        )),
                        "wikiLink" === e.type && (t.value = e1(!1, e.value.trim(), /[\t\n]+/g, " ")),
                        ("definition" === e.type || "linkReference" === e.type || "imageReference" === e.type) && (t.label = (0, tZ.default)(e.label)),
                        ("link" === e.type || "image" === e.type) && e.url && e.url.includes("("))
                )
                    for (let r of "<>") t.url = e1(!1, e.url, r, encodeURIComponent(r));
                if (
                    (("definition" === e.type || "link" === e.type || "image" === e.type) && e.title && (t.title = e1(!1, e.title, /\\(?=["')])/g, "")),
                        (null == r ? void 0 : r.type) === "root" &&
                        r.children.length > 0 &&
                        (r.children[0] === e || ((null == (u = r.children[0]) ? void 0 : u.type) === "front-matter" && r.children[1] === e)) &&
                        "html" === e.type &&
                        tX(e.value))
                )
                    return null;
            }
            t1.ignoredProperties = t0;
            var t2 = /(?:[\u02ea-\u02eb\u1100-\u11ff\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u303f\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u3190-\u4dbf\u4e00-\u9fff\ua700-\ua707\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufe10-\ufe1f\ufe30-\ufe6f\uff00-\uffef]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883\ud885-\ud887][\udc00-\udfff]|\ud81b[\udfe3]|\ud82b[\udff0-\udff3\udff5-\udffb\udffd-\udffe]|\ud82c[\udc00-\udd22\udd32\udd50-\udd52\udd55\udd64-\udd67]|\ud83c[\ude00\ude50-\ude51]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf39\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a\udf50-\udfff]|\ud888[\udc00-\udfaf])(?:[\ufe00-\ufe0f]|\udb40[\udd00-\uddef])?/,
                t3 = /[\u1100-\u11ff\u3001-\u3003\u3008-\u3011\u3013-\u301f\u302e-\u3030\u3037\u30fb\u3131-\u318e\u3200-\u321e\u3260-\u327e\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ufe45-\ufe46\uff61-\uff65\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/,
                t8 = /[\u0021-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e\u00a1\u00a7\u00ab\u00b6-\u00b7\u00bb\u00bf\u037e\u0387\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061d-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964-\u0965\u0970\u09fd\u0a76\u0af0\u0c77\u0c84\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9-\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u1a1e-\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1b7d-\u1b7e\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e-\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d-\u207e\u208d-\u208e\u2308-\u230b\u2329-\u232a\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e4f\u2e52-\u2e5d\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe-\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce-\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e-\ua92f\ua95f\ua9c1-\ua9cd\ua9de-\ua9df\uaa5c-\uaa5f\uaade-\uaadf\uaaf0-\uaaf1\uabeb\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud801[\udd6f]|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udead\udf55-\udf59\udf86-\udf89]|\ud804[\udc47-\udc4d\udcbb-\udcbc\udcbe-\udcc1\udd40-\udd43\udd74-\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5a-\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udeb9\udf3c-\udf3e]|\ud806[\udc3b\udd44-\udd46\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2\udf00-\udf09]|\ud807[\udc41-\udc45\udc70-\udc71\udef7-\udef8\udf43-\udf4f\udfff]|\ud809[\udc70-\udc74]|\ud80b[\udff1-\udff2]|\ud81a[\ude6e-\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|\ud82f[\udc9f]|\ud836[\ude87-\ude8b]|\ud83a[\udd5e-\udd5f]/;
            async function t6(e, t) {
                if ("yaml" === e.lang) {
                    let r = e.value.trim(),
                        u = r ? await t(r, { parser: "yaml" }) : "";
                    return tC([e.startDelimiter, tx, u, u ? tx : "", e.endDelimiter]);
                }
            }
            var t7 = (e) => String(e).split(/[/\\]/).pop();
            function t9(e, t) {
                if (!t) return;
                let r = t7(t).toLowerCase();
                return e.find(({ filenames: e }) => (null == e ? void 0 : e.some((e) => e.toLowerCase() === r))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.some((e) => r.endsWith(e))));
            }
            var t4 = function (e, t) {
                let r = e.plugins.flatMap((e) => e.languages ?? []),
                    u =
                        (function (e, t) {
                            if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => (null == e ? void 0 : e.includes(t))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.includes(`.${t}`)));
                        })(r, t.language) ??
                        t9(r, t.physicalFile) ??
                        t9(r, t.file) ??
                        void t.physicalFile;
                return null == u ? void 0 : u.parsers[0];
            },
                t5 = new Proxy(() => { }, { get: () => t5 });
            function re(e) {
                return e.position.start.offset;
            }
            function rt(e) {
                return e.position.end.offset;
            }
            var rr = new Set([
                "liquidNode",
                "inlineCode",
                "emphasis",
                "esComment",
                "strong",
                "delete",
                "wikiLink",
                "link",
                "linkReference",
                "image",
                "imageReference",
                "footnote",
                "footnoteReference",
                "sentence",
                "whitespace",
                "word",
                "break",
                "inlineMath",
            ]),
                ru = new Set([...rr, "tableCell", "paragraph", "heading"]),
                rn = "non-cjk",
                ri = "cj-letter",
                ro = "k-letter",
                ra = "cjk-punctuation";
            function rs(e) {
                let t = [],
                    r = e.split(/([\t\n ]+)/);
                for (let [e, n] of r.entries()) {
                    if (e % 2 == 1) {
                        t.push({
                            type: "whitespace",
                            value: /\n/.test(n)
                                ? `
`
                                : " ",
                        });
                        continue;
                    }
                    if ((0 === e || e === r.length - 1) && "" === n) continue;
                    let i = n.split(RegExp(`(${t2.source})`));
                    for (let [e, t] of i.entries())
                        if (!((0 === e || e === i.length - 1) && "" === t)) {
                            if (e % 2 == 0) {
                                "" !== t && u({ type: "word", value: t, kind: rn, hasLeadingPunctuation: t8.test(t[0]), hasTrailingPunctuation: t8.test(e2(!1, t, -1)) });
                                continue;
                            }
                            u(
                                t8.test(t)
                                    ? { type: "word", value: t, kind: ra, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 }
                                    : { type: "word", value: t, kind: t3.test(t) ? ro : ri, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 }
                            );
                        }
                }
                return t;
                function u(e) {
                    let r = e2(!1, t, -1);
                    (null == r ? void 0 : r.type) !== "word" || (r.kind === rn && e.kind === ra) || (r.kind === ra && e.kind === rn) || [r.value, e.value].some((e) => /\u3000/.test(e)) || t.push({ type: "whitespace", value: "" }),
                        t.push(e);
                }
            }
            function rl(e, t) {
                let [, r, u, n] = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
                return { numberText: r, marker: u, leadingSpaces: n };
            }
            function rc(e, t) {
                let { value: r } = e;
                return e.position.end.offset === t.length &&
                    r.endsWith(`
`) &&
                    t.endsWith(`
`)
                    ? r.slice(0, -1)
                    : r;
            }
            function rD(e, t) {
                return (function e(r, u, n) {
                    let i = { ...t(r, u, n) };
                    return i.children && (i.children = i.children.map((t, r) => e(t, r, [i, ...n]))), i;
                })(e, null, []);
            }
            function rf(e) {
                if ((null == e ? void 0 : e.type) !== "link" || 1 !== e.children.length) return !1;
                let [t] = e.children;
                return re(e) === re(t) && rt(e) === rt(t);
            }
            var rp = null;
            function rd(e) {
                if (null !== rp && (rp.property, 1)) {
                    let e = rp;
                    return (rp = rd.prototype = null), e;
                }
                return (rp = rd.prototype = e ?? Object.create(null)), new rd();
            }
            for (let e = 0; e <= 10; e++) rd();
            var rh = (function (e, t = "type") {
                return (
                    rd(e),
                    function (r) {
                        let u = r[t],
                            n = e[u];
                        if (!Array.isArray(n)) throw Object.assign(Error(`Missing visitor keys for '${u}'.`), { node: r });
                        return n;
                    }
                );
            })({
                "front-matter": [],
                root: ["children"],
                paragraph: ["children"],
                sentence: ["children"],
                word: [],
                whitespace: [],
                emphasis: ["children"],
                strong: ["children"],
                delete: ["children"],
                inlineCode: [],
                wikiLink: [],
                link: ["children"],
                image: [],
                blockquote: ["children"],
                heading: ["children"],
                code: [],
                html: [],
                list: ["children"],
                thematicBreak: [],
                linkReference: ["children"],
                imageReference: [],
                definition: [],
                footnote: ["children"],
                footnoteReference: [],
                footnoteDefinition: ["children"],
                table: ["children"],
                tableCell: ["children"],
                break: [],
                liquidNode: [],
                import: [],
                export: [],
                esComment: [],
                jsx: [],
                math: [],
                inlineMath: [],
                tableRow: ["children"],
                listItem: ["children"],
                text: [],
            }),
                rF = /^.$/su,
                rg = new Set(["heading", "tableCell", "link", "wikiLink"]),
                rm = new Set(`$(\xa3\xA5\xb7'"\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u301D\uFE59\uFE5B\uFF04\uFF08\uFF3B\uFF5B\uFFE1\uFFE5[{\u2035\uFE34\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE4F\u3018\uFF5F\xab`),
                rC = new Set(
                    `!%),.:;?]}\xa2\xB0\xb7'"\u2020\u2021\u203A\u2103\u2236\u3001\u3002\u3003\u3006\u3015\u3017\u301E\uFE5A\uFE5C\uFF01\uFF02\uFF05\uFF07\uFF09\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF3D\uFF5D\uFF5E\u2013\u2014\u2022\u3009\u300B\u300D\uFE30\uFE31\uFE32\uFE33\uFE50\uFE51\uFE52\uFE53\uFE54\uFE55\uFE56\uFE58\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE57\uFF5C\uFF64\u300F\u3011\u3019\u301F\uFF60\xbb\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\u2010\u30A0\u301C\uFF5E\u203C\u2047\u2048\u2049\u30FB\u3099\u309A`
                ),
                rE = new Set("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
            function rb(e) {
                return e === rn || e === ri || e === ro;
            }
            function rv(e) {
                return e === rn || e === ro;
            }
            function ry(e, t, r, u) {
                if (
                    "preserve" === r &&
                    t ===
                    `
`
                )
                    return tx;
                let n =
                    " " === t ||
                    (t ===
                        `
` &&
                        (function (e, t) {
                            if (t) return !0;
                            let { previous: r, next: u } = e;
                            if (!r || !u) return !0;
                            let n = r.kind,
                                i = u.kind;
                            return (
                                !!(rv(n) && rv(i)) ||
                                (n === ro && i === ri) ||
                                (i === ro && n === ri) ||
                                (n !== ra &&
                                    i !== ra &&
                                    (n !== ri || i !== ri) &&
                                    (!!(rE.has(u.value[0]) || rE.has(e2(!1, r.value, -1))) ||
                                        (!r.hasTrailingPunctuation &&
                                            !u.hasLeadingPunctuation &&
                                            (function ({ parent: e }) {
                                                if (void 0 === e.usesCJSpaces) {
                                                    let t = { " ": 0, "": 0 },
                                                        { children: r } = e;
                                                    for (let e = 1; e < r.length - 1; ++e) {
                                                        let u = r[e];
                                                        if ("whitespace" === u.type && (" " === u.value || "" === u.value)) {
                                                            let n = r[e - 1].kind,
                                                                i = r[e + 1].kind;
                                                            ((n === ri && i === rn) || (n === rn && i === ri)) && ++t[u.value];
                                                        }
                                                    }
                                                    e.usesCJSpaces = t[" "] > t[""];
                                                }
                                                return e.usesCJSpaces;
                                            })(e))))
                            );
                        })(e, u));
                return !(function (e, t, r, u, n) {
                    if ("always" !== r || e.hasAncestor((e) => rg.has(e.type))) return !1;
                    if (u) return "" !== t;
                    if (" " === t) return !0;
                    let { previous: i, next: o } = e;
                    return !(
                        ("" === t && (((null == i ? void 0 : i.kind) === ro && rb(null == o ? void 0 : o.kind)) || ((null == o ? void 0 : o.kind) === ro && rb(null == i ? void 0 : i.kind)))) ||
                        (!n && ((o && rC.has(o.value[0])) || (i && rm.has(e2(!1, i.value, -1)))))
                    );
                })(e, t, r, u, n)
                    ? n
                        ? " "
                        : ""
                    : n
                        ? ty
                        : tA;
            }
            var rA = new Set(["listItem", "definition", "footnoteDefinition"]);
            function rx(e, t, r, u) {
                let { node: n } = e,
                    i = null === n.checked ? "" : n.checked ? "[x] " : "[ ] ";
                return [
                    i,
                    rw(e, t, r, {
                        processor({ node: e, isFirst: n }) {
                            var o;
                            if (n && "list" !== e.type) return tg(" ".repeat(i.length), r());
                            let a = " ".repeat((o = t.tabWidth - u.length) < 0 ? 0 : o > 3 ? 3 : o);
                            return [a, tg(a, r())];
                        },
                    }),
                ];
            }
            function rk(e, t) {
                return (function (e, t, r) {
                    let u = -1;
                    for (let n of t.children) if ((n.type === e.type && r(n) ? u++ : (u = -1), n === e)) return u;
                })(e, t, (t) => t.ordered === e.ordered);
            }
            function rw(e, t, r, u = {}) {
                let { postprocessor: n = (e) => e, processor: i = () => r() } = u,
                    o = [];
                return (
                    e.each(() => {
                        let r = i(e);
                        !1 !== r &&
                            (o.length > 0 &&
                                (function ({ node: e, parent: t }) {
                                    let r = rr.has(e.type),
                                        u = "html" === e.type && ru.has(t.type);
                                    return !r && !u;
                                })(e) &&
                                (o.push(tx),
                                    ((function ({ node: e, previous: t, parent: r }, u) {
                                        if (rS(t, u)) return !0;
                                        let n = t.type === e.type && rA.has(e.type),
                                            i = "listItem" === r.type && !rS(r, u),
                                            o = "next" === rq(t),
                                            a = "html" === e.type && "html" === t.type && t.position.end.line + 1 === e.position.start.line,
                                            s = "html" === e.type && "listItem" === r.type && "paragraph" === t.type && t.position.end.line + 1 === e.position.start.line;
                                        return !(n || i || o || a || s);
                                    })(e, t) ||
                                        rT(e)) &&
                                    o.push(tx),
                                    rT(e) && o.push(tx)),
                                o.push(r));
                    }, "children"),
                    n(o)
                );
            }
            function rB(e) {
                return "html" === e.type ? e.value : "paragraph" === e.type && Array.isArray(e.children) && 1 === e.children.length && "esComment" === e.children[0].type ? ["{/* ", e.children[0].value, " */}"] : void 0;
            }
            function rq(e) {
                let t;
                if ("html" === e.type) t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
                else {
                    let r;
                    "esComment" === e.type ? (r = e) : "paragraph" === e.type && 1 === e.children.length && "esComment" === e.children[0].type && (r = e.children[0]), r && (t = r.value.match(/^prettier-ignore(?:-(start|end))?$/));
                }
                return !!t && (t[1] || "next");
            }
            function rS(e, t) {
                return (
                    "listItem" === e.type &&
                    (e.spread ||
                        t.originalText.charAt(e.position.end.offset - 1) ===
                        `
`)
                );
            }
            function rT({ node: e, previous: t }) {
                let r = "list" === t.type,
                    u = "code" === e.type && e.isIndented;
                return r && u;
            }
            var rL = (e, t) => {
                for (let r of t) e = e1(!1, e, r, encodeURIComponent(r));
                return e;
            };
            function rO(e, t = []) {
                return new RegExp([" ", ...(Array.isArray(t) ? t : [t])].map((e) => `\\${e}`).join("|")).test(e) ? `<${rL(e, "<>")}>` : e;
            }
            function rN(e, t, r = !0) {
                if (!e) return "";
                if (r) return " " + rN(e, t, !1);
                if ((e = e1(!1, e, /\\(?=["')])/g, "")).includes('"') && e.includes("'") && !e.includes(")")) return `(${e})`;
                let u = tW(e, t.singleQuote);
                return (e = e1(!1, e, "\\", "\\\\")), (e = e1(!1, e, u, `\\${u}`)), `${u}${e}${u}`;
            }
            function rR(e) {
                return `[${(0, e3.default)(e.label)}]`;
            }
            function rI(e) {
                return `[^${e.label}]`;
            }
            var rj = [
                {
                    linguistLanguageId: 222,
                    name: "Markdown",
                    type: "prose",
                    color: "#083fa1",
                    aliases: ["md", "pandoc"],
                    aceMode: "markdown",
                    codemirrorMode: "gfm",
                    codemirrorMimeType: "text/x-gfm",
                    wrap: !0,
                    extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"],
                    filenames: ["contents.lr", "README"],
                    tmScope: "text.md",
                    parsers: ["markdown"],
                    vscodeLanguageIds: ["markdown"],
                },
                {
                    linguistLanguageId: 222,
                    name: "MDX",
                    type: "prose",
                    color: "#083fa1",
                    aliases: ["md", "pandoc"],
                    aceMode: "markdown",
                    codemirrorMode: "gfm",
                    codemirrorMimeType: "text/x-gfm",
                    wrap: !0,
                    extensions: [".mdx"],
                    filenames: [],
                    tmScope: "text.md",
                    parsers: ["mdx"],
                    vscodeLanguageIds: ["mdx"],
                },
            ],
                rP = {
                    proseWrap: {
                        category: "Common",
                        type: "choice",
                        default: "preserve",
                        description: "How to wrap prose.",
                        choices: [
                            { value: "always", description: "Wrap prose if it exceeds the print width." },
                            { value: "never", description: "Do not wrap prose." },
                            { value: "preserve", description: "Wrap prose as-is." },
                        ],
                    },
                    singleQuote: { category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." },
                },
                rz = {};
            c(rz, { markdown: () => r9, mdx: () => r4, remark: () => r9 });
            var r$ = f(d(), 1),
                rU = f(m(), 1),
                rM = f(ez(), 1),
                rV = f(eX(), 1),
                r_ = /^import\s/,
                rH = /^export\s/,
                rG = /<!---->|<!---?[^>-](?:-?[^-])*-->/,
                rW = /^{\s*\/\*(.*)\*\/\s*}/,
                rJ = `

`,
                rZ = (e) => r_.test(e),
                rY = (e) => rH.test(e),
                rK = (e, t) => {
                    let r = t.indexOf(rJ),
                        u = t.slice(0, r);
                    if (rY(u) || rZ(u)) return e(u)({ type: rY(u) ? "export" : "import", value: u });
                },
                rQ = (e, t) => {
                    let r = rW.exec(t);
                    if (r) return e(r[0])({ type: "esComment", value: r[1].trim() });
                };
            (rK.locator = (e) => (rY(e) || rZ(e) ? -1 : 1)), (rQ.locator = (e, t) => e.indexOf("{", t));
            var rX = function () {
                let { Parser: e } = this,
                    { blockTokenizers: t, blockMethods: r, inlineTokenizers: u, inlineMethods: n } = e.prototype;
                (t.esSyntax = rK), (u.esComment = rQ), r.splice(r.indexOf("paragraph"), 0, "esSyntax"), n.splice(n.indexOf("text"), 0, "esComment");
            },
                r0 = function () {
                    let e = this.Parser.prototype;
                    function t(e, t) {
                        let r = tK(t);
                        if (r.frontMatter) return e(r.frontMatter.raw)(r.frontMatter);
                    }
                    (e.blockMethods = ["frontMatter", ...e.blockMethods]), (e.blockTokenizers.frontMatter = t), (t.onlyAtStart = !0);
                },
                r1 = function () {
                    return (e) => rD(e, (e, t, [r]) => ("html" !== e.type || rG.test(e.value) || ru.has(r.type) ? e : { ...e, type: "jsx" }));
                },
                r2 = function () {
                    let e = this.Parser.prototype,
                        t = e.inlineMethods;
                    function r(e, t) {
                        let r = t.match(/^({%.*?%}|{{.*?}})/s);
                        if (r) return e(r[0])({ type: "liquidNode", value: r[0] });
                    }
                    t.splice(t.indexOf("text"), 0, "liquid"),
                        (e.inlineTokenizers.liquid = r),
                        (r.locator = function (e, t) {
                            return e.indexOf("{", t);
                        });
                },
                r3 = function () {
                    let e = "wikiLink",
                        t = /^\[\[(?<linkContents>.+?)]]/s,
                        r = this.Parser.prototype,
                        u = r.inlineMethods;
                    function n(r, u) {
                        let n = t.exec(u);
                        if (n) {
                            let t = n.groups.linkContents.trim();
                            return r(n[0])({ type: e, value: t });
                        }
                    }
                    u.splice(u.indexOf("link"), 0, e),
                        (r.inlineTokenizers.wikiLink = n),
                        (n.locator = function (e, t) {
                            return e.indexOf("[", t);
                        });
                };
            function r8({ isMDX: e }) {
                return (t) => {
                    let r = (0, rV.default)()
                        .use(rM.default, { commonmark: !0, ...(e && { blocks: ["[a-z][a-z0-9]*(\\.[a-z][a-z0-9]*)*|"] }) })
                        .use(r$.default)
                        .use(r0)
                        .use(rU.default)
                        .use(e ? rX : r6)
                        .use(r2)
                        .use(e ? r1 : r6)
                        .use(r3);
                    return r.run(r.parse(t));
                };
            }
            function r6() { }
            var r7 = { astFormat: "mdast", hasPragma: (e) => tX(tK(e).content.trimStart()), locStart: re, locEnd: rt },
                r9 = { ...r7, parse: r8({ isMDX: !1 }) },
                r4 = { ...r7, parse: r8({ isMDX: !0 }) },
                r5 = {
                    mdast: {
                        preprocess: function (e, t) {
                            var r, u, n, i, o;
                            return (
                                (u = e = (function (e, t) {
                                    return rD(e, (e, u, n) => {
                                        if ("list" === e.type && e.children.length > 0) {
                                            for (let t = 0; t < n.length; t++) {
                                                let r = n[t];
                                                if ("list" === r.type && !r.isAligned) return (e.isAligned = !1), e;
                                            }
                                            e.isAligned = (function (e) {
                                                if (!e.ordered) return !0;
                                                let [u, n] = e.children;
                                                if (rl(u, t.originalText).leadingSpaces.length > 1) return !0;
                                                let i = r(u);
                                                return -1 !== i && (1 === e.children.length ? i % t.tabWidth == 0 : i === r(n) && (i % t.tabWidth == 0 || rl(n, t.originalText).leadingSpaces.length > 1));
                                            })(e);
                                        }
                                        return e;
                                    });
                                    function r(e) {
                                        return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1;
                                    }
                                })(
                                    ((n = e = rD(e, (e) =>
                                        "text" === e.type && "*" !== e.value && "_" !== e.value && rF.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length
                                            ? { ...e, value: t.originalText.slice(e.position.start.offset, e.position.end.offset) }
                                            : e
                                    )),
                                        (i = (e, t) => "text" === e.type && "text" === t.type),
                                        (o = (e, t) => ({ type: "text", value: e.value + t.value, position: { start: e.position.start, end: t.position.end } })),
                                        (r = e = rD(n, (e) => {
                                            if (!e.children) return e;
                                            let t = e.children.reduce((e, t) => {
                                                let r = e2(!1, e, -1);
                                                return r && i(r, t) ? e.splice(-1, 1, o(r, t)) : e.push(t), e;
                                            }, []);
                                            return { ...e, children: t };
                                        })),
                                        (e = rD(r, (e, r, u) => {
                                            if ("code" === e.type) {
                                                let r = /^\n?(?: {4,}|\t)/.test(t.originalText.slice(e.position.start.offset, e.position.end.offset));
                                                if (((e.isIndented = r), r))
                                                    for (let e = 0; e < u.length; e++) {
                                                        let t = u[e];
                                                        if (t.hasIndentedCodeblock) break;
                                                        "list" === t.type && (t.hasIndentedCodeblock = !0);
                                                    }
                                            }
                                            return e;
                                        }))),
                                    t
                                )),
                                (e = rD(u, (e, t, [r]) => {
                                    if ("text" !== e.type) return e;
                                    let { value: u } = e;
                                    return "paragraph" === r.type && (0 === t && (u = u.trimStart()), t === r.children.length - 1 && (u = u.trimEnd())), { type: "sentence", position: e.position, children: rs(u) };
                                }))
                            );
                        },
                        print: function (e, t, r) {
                            var u, n, i;
                            let o;
                            let { node: a } = e;
                            if ((o = e.findAncestor((e) => "linkReference" === e.type || "imageReference" === e.type)) && ("linkReference" !== o.type || "full" !== o.referenceType))
                                return rs(t.originalText.slice(a.position.start.offset, a.position.end.offset)).map((r) => ("word" === r.type ? r.value : ry(e, r.value, t.proseWrap, !0)));
                            switch (a.type) {
                                case "front-matter":
                                    return t.originalText.slice(a.position.start.offset, a.position.end.offset);
                                case "root":
                                    return 0 === a.children.length
                                        ? ""
                                        : [
                                            tO(
                                                (function (e, t, r) {
                                                    let u = [],
                                                        n = null,
                                                        { children: i } = e.node;
                                                    for (let [e, t] of i.entries())
                                                        switch (rq(t)) {
                                                            case "start":
                                                                null === n && (n = { index: e, offset: t.position.end.offset });
                                                                break;
                                                            case "end":
                                                                null !== n && (u.push({ start: n, end: { index: e, offset: t.position.start.offset } }), (n = null));
                                                        }
                                                    return rw(e, t, r, {
                                                        processor({ index: e }) {
                                                            if (u.length > 0) {
                                                                let r = u[0];
                                                                if (e === r.start.index) return [rB(i[r.start.index]), t.originalText.slice(r.start.offset, r.end.offset), rB(i[r.end.index])];
                                                                if (r.start.index < e && e < r.end.index) return !1;
                                                                if (e === r.end.index) return u.shift(), !1;
                                                            }
                                                            return r();
                                                        },
                                                    });
                                                })(e, t, r),
                                                (e) => (Array.isArray(e) ? tR(e) : e.parts ? { ...e, parts: tR(e.parts) } : e)
                                            ),
                                            tx,
                                        ];
                                case "paragraph":
                                    return rw(e, t, r, { postprocessor: tE });
                                case "sentence":
                                    return rw(e, t, r);
                                case "word": {
                                    let t = e1(!1, e1(!1, a.value, "*", "\\*"), RegExp(`(^|${t8.source})(_+)|(_+)(${t8.source}|$)`, "g"), (e, t, r, u, n) => e1(!1, r ? `${t}${r}` : `${u}${n}`, "_", "\\_")),
                                        r = (e, t, r) => "sentence" === e.type && 0 === r,
                                        u = (e, t, r) => rf(e.children[r - 1]);
                                    return t !== a.value && (e.match(void 0, r, u) || e.match(void 0, r, (e, t, r) => "emphasis" === e.type && 0 === r, u)) && (t = t.replace(/^(\\?[*_])+/, (e) => e1(!1, e, "\\", ""))), t;
                                }
                                case "whitespace": {
                                    let { next: r } = e,
                                        u = r && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(r.value) ? "never" : t.proseWrap;
                                    return ry(e, a.value, u);
                                }
                                case "emphasis": {
                                    let i;
                                    if (rf(a.children[0])) i = t.originalText[a.position.start.offset];
                                    else {
                                        let { previous: t, next: r } = e;
                                        i =
                                            ((null == t ? void 0 : t.type) === "sentence" && (null == (u = e2(!1, t.children, -1)) ? void 0 : u.type) === "word" && !e2(!1, t.children, -1).hasTrailingPunctuation) ||
                                                ((null == r ? void 0 : r.type) === "sentence" && (null == (n = r.children[0]) ? void 0 : n.type) === "word" && !r.children[0].hasLeadingPunctuation) ||
                                                e.hasAncestor((e) => "emphasis" === e.type)
                                                ? "*"
                                                : "_";
                                    }
                                    return [i, rw(e, t, r), i];
                                }
                                case "strong":
                                    return ["**", rw(e, t, r), "**"];
                                case "delete":
                                    return ["~~", rw(e, t, r), "~~"];
                                case "inlineCode": {
                                    let e =
                                        "preserve" === t.proseWrap
                                            ? a.value
                                            : e1(
                                                !1,
                                                a.value,
                                                `
`,
                                                " "
                                            ),
                                        r = tG(e, "`"),
                                        u = "`".repeat(r || 1),
                                        n = e.startsWith("`") || e.endsWith("`") || (/^[\n ]/.test(e) && /[\n ]$/.test(e) && /[^\n ]/.test(e)) ? " " : "";
                                    return [u, n, e, n, u];
                                }
                                case "wikiLink":
                                    return ["[[", "preserve" === t.proseWrap ? a.value : e1(!1, a.value, /[\t\n]+/g, " "), "]]"];
                                case "link":
                                    switch (t.originalText[a.position.start.offset]) {
                                        case "<": {
                                            let e = "mailto:";
                                            return ["<", a.url.startsWith(e) && t.originalText.slice(a.position.start.offset + 1, a.position.start.offset + 1 + e.length) !== e ? a.url.slice(e.length) : a.url, ">"];
                                        }
                                        case "[":
                                            return ["[", rw(e, t, r), "](", rO(a.url, ")"), rN(a.title, t), ")"];
                                        default:
                                            return t.originalText.slice(a.position.start.offset, a.position.end.offset);
                                    }
                                case "image":
                                    return ["![", a.alt || "", "](", rO(a.url, ")"), rN(a.title, t), ")"];
                                case "blockquote":
                                    return ["> ", tg("> ", rw(e, t, r))];
                                case "heading":
                                    return ["#".repeat(a.depth) + " ", rw(e, t, r)];
                                case "code": {
                                    if (a.isIndented) {
                                        let e = " ".repeat(4);
                                        return tg(e, [e, tI(a.value, tx)]);
                                    }
                                    let e = t.__inJsTemplate ? "~" : "`",
                                        r = e.repeat(Math.max(3, tH(a.value, e) + 1));
                                    return [r, a.lang || "", a.meta ? " " + a.meta : "", tx, tI(rc(a, t.originalText), tx), tx, r];
                                }
                                case "html": {
                                    let { parent: t, isLast: r } = e,
                                        u = "root" === t.type && r ? a.value.trimEnd() : a.value,
                                        n = /^<!--.*-->$/s.test(u);
                                    return tI(u, n ? tx : tC(tk));
                                }
                                case "list": {
                                    let u = rk(a, e.parent),
                                        n = (function (e, t) {
                                            if (!e.ordered || e.children.length < 2) return !1;
                                            let r = Number(rl(e.children[0], t.originalText).numberText),
                                                u = Number(rl(e.children[1], t.originalText).numberText);
                                            if (0 === r && e.children.length > 2) {
                                                let r = Number(rl(e.children[2], t.originalText).numberText);
                                                return 1 === u && 1 === r;
                                            }
                                            return 1 === u;
                                        })(a, t);
                                    return rw(e, t, r, {
                                        processor(e) {
                                            let i, o, s;
                                            let l =
                                                ((i = a.ordered ? (e.isFirst ? a.start : n ? 1 : a.start + e.index) + (u % 2 == 0 ? ". " : ") ") : u % 2 == 0 ? "- " : "* "),
                                                    a.isAligned || a.hasIndentedCodeblock ? ((s = 0 == (o = i.length % t.tabWidth) ? 0 : t.tabWidth - o), i + " ".repeat(s >= 4 ? 0 : s)) : i),
                                                c = e.node;
                                            return 2 === c.children.length && "html" === c.children[1].type && c.children[0].position.start.column !== c.children[1].position.start.column
                                                ? [l, rx(e, t, r, l)]
                                                : [l, tg(" ".repeat(l.length), rx(e, t, r, l))];
                                        },
                                    });
                                }
                                case "thematicBreak": {
                                    let { ancestors: t } = e,
                                        r = t.findIndex((e) => "list" === e.type);
                                    return -1 === r ? "---" : rk(t[r], t[r + 1]) % 2 == 0 ? "***" : "---";
                                }
                                case "linkReference":
                                    return ["[", rw(e, t, r), "]", "full" === a.referenceType ? rR(a) : "collapsed" === a.referenceType ? "[]" : ""];
                                case "imageReference":
                                    if ("full" === a.referenceType) return ["![", a.alt || "", "]", rR(a)];
                                    return ["![", a.alt, "]", "collapsed" === a.referenceType ? "[]" : ""];
                                case "definition": {
                                    let e = "always" === t.proseWrap ? ty : " ";
                                    return tm([rR(a), ":", tF([e, rO(a.url), null === a.title ? "" : [e, rN(a.title, t, !1)]])]);
                                }
                                case "footnote":
                                    return ["[^", rw(e, t, r), "]"];
                                case "footnoteReference":
                                    return rI(a);
                                case "footnoteDefinition": {
                                    let u = 1 === a.children.length && "paragraph" === a.children[0].type && ("never" === t.proseWrap || ("preserve" === t.proseWrap && a.children[0].position.start.line === a.children[0].position.end.line));
                                    return [
                                        rI(a),
                                        ": ",
                                        u ? rw(e, t, r) : tm([tg(" ".repeat(4), rw(e, t, r, { processor: ({ isFirst: e }) => (e ? tm([tA, r()]) : r()) })), (null == (i = e.next) ? void 0 : i.type) === "footnoteDefinition" ? tA : ""]),
                                    ];
                                }
                                case "table":
                                    return (function (e, t, r) {
                                        let { node: u } = e,
                                            n = [],
                                            i = e.map(
                                                () =>
                                                    e.map(({ index: e }) => {
                                                        let u = (function (e, t) {
                                                            var r;
                                                            let u,
                                                                n,
                                                                i = {},
                                                                o = t.printWidth,
                                                                a = (function (e) {
                                                                    switch (e) {
                                                                        case "cr":
                                                                            return "\r";
                                                                        case "crlf":
                                                                            return `\r
`;
                                                                        default:
                                                                            return `
`;
                                                                    }
                                                                })(t.endOfLine),
                                                                s = 0,
                                                                l = [{ ind: t$(), mode: tj, doc: e }],
                                                                c = [],
                                                                D = !1,
                                                                f = [],
                                                                p = 0;
                                                            for (
                                                                u = new Set(),
                                                                n = [],
                                                                td(
                                                                    e,
                                                                    function (e) {
                                                                        if ((e.type === ts && tN(n), e.type === te)) {
                                                                            if ((n.push(e), u.has(e))) return !1;
                                                                            u.add(e);
                                                                        }
                                                                    },
                                                                    function (e) {
                                                                        e.type === te && n.pop().break && tN(n);
                                                                    },
                                                                    !0
                                                                );
                                                                l.length > 0;

                                                            ) {
                                                                let { ind: e, mode: u, doc: n } = l.pop();
                                                                switch (tc(n)) {
                                                                    case e8: {
                                                                        let e =
                                                                            a !==
                                                                                `
`
                                                                                ? e1(
                                                                                    !1,
                                                                                    n,
                                                                                    `
`,
                                                                                    a
                                                                                )
                                                                                : n;
                                                                        c.push(e), l.length > 0 && (s += tT(e));
                                                                        break;
                                                                    }
                                                                    case e6:
                                                                        for (let t = n.length - 1; t >= 0; t--) l.push({ ind: e, mode: u, doc: n[t] });
                                                                        break;
                                                                    case e7:
                                                                        if (p >= 2) throw Error("There are too many 'cursor' in doc.");
                                                                        c.push(tz), p++;
                                                                        break;
                                                                    case e9:
                                                                        l.push({ ind: tU(e, { type: "indent" }, t), mode: u, doc: n.contents });
                                                                        break;
                                                                    case e4:
                                                                        l.push({
                                                                            ind:
                                                                                (r = n.n) === Number.NEGATIVE_INFINITY
                                                                                    ? e.root || t$()
                                                                                    : r < 0
                                                                                        ? tU(e, { type: "dedent" }, t)
                                                                                        : r
                                                                                            ? "root" === r.type
                                                                                                ? { ...e, root: e }
                                                                                                : tU(e, { type: "string" == typeof r ? "stringAlign" : "numberAlign", n: r }, t)
                                                                                            : e,
                                                                            mode: u,
                                                                            doc: n.contents,
                                                                        });
                                                                        break;
                                                                    case e5:
                                                                        s -= tM(c);
                                                                        break;
                                                                    case te:
                                                                        switch (u) {
                                                                            case tP:
                                                                                if (!D) {
                                                                                    l.push({ ind: e, mode: n.break ? tj : tP, doc: n.contents });
                                                                                    break;
                                                                                }
                                                                            case tj: {
                                                                                D = !1;
                                                                                let t = { ind: e, mode: tP, doc: n.contents },
                                                                                    r = o - s,
                                                                                    u = f.length > 0;
                                                                                if (!n.break && tV(t, l, r, u, i)) l.push(t);
                                                                                else if (n.expandedStates) {
                                                                                    let t = e2(!1, n.expandedStates, -1);
                                                                                    if (n.break) l.push({ ind: e, mode: tj, doc: t });
                                                                                    else
                                                                                        for (let o = 1; o < n.expandedStates.length + 1; o++)
                                                                                            if (o >= n.expandedStates.length) {
                                                                                                l.push({ ind: e, mode: tj, doc: t });
                                                                                                break;
                                                                                            } else {
                                                                                                let t = { ind: e, mode: tP, doc: n.expandedStates[o] };
                                                                                                if (tV(t, l, r, u, i)) {
                                                                                                    l.push(t);
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                } else l.push({ ind: e, mode: tj, doc: n.contents });
                                                                            }
                                                                        }
                                                                        n.id && (i[n.id] = e2(!1, l, -1).mode);
                                                                        break;
                                                                    case tt: {
                                                                        let t = o - s,
                                                                            { parts: r } = n;
                                                                        if (0 === r.length) break;
                                                                        let [a, c] = r,
                                                                            D = { ind: e, mode: tP, doc: a },
                                                                            p = { ind: e, mode: tj, doc: a },
                                                                            d = tV(D, [], t, f.length > 0, i, !0);
                                                                        if (1 === r.length) {
                                                                            d ? l.push(D) : l.push(p);
                                                                            break;
                                                                        }
                                                                        let h = { ind: e, mode: tP, doc: c },
                                                                            F = { ind: e, mode: tj, doc: c };
                                                                        if (2 === r.length) {
                                                                            d ? l.push(h, D) : l.push(F, p);
                                                                            break;
                                                                        }
                                                                        r.splice(0, 2);
                                                                        let g = { ind: e, mode: u, doc: tE(r) };
                                                                        tV({ ind: e, mode: tP, doc: [a, c, r[0]] }, [], t, f.length > 0, i, !0) ? l.push(g, h, D) : d ? l.push(g, F, D) : l.push(g, F, p);
                                                                        break;
                                                                    }
                                                                    case tr:
                                                                    case tu: {
                                                                        let t = n.groupId ? i[n.groupId] : u;
                                                                        if (t === tj) {
                                                                            let t = n.type === tr ? n.breakContents : n.negate ? n.contents : tF(n.contents);
                                                                            t && l.push({ ind: e, mode: u, doc: t });
                                                                        }
                                                                        if (t === tP) {
                                                                            let t = n.type === tr ? n.flatContents : n.negate ? tF(n.contents) : n.contents;
                                                                            t && l.push({ ind: e, mode: u, doc: t });
                                                                        }
                                                                        break;
                                                                    }
                                                                    case tn:
                                                                        f.push({ ind: e, mode: u, doc: n.contents });
                                                                        break;
                                                                    case ti:
                                                                        f.length > 0 && l.push({ ind: e, mode: u, doc: tv });
                                                                        break;
                                                                    case to:
                                                                        switch (u) {
                                                                            case tP:
                                                                                if (n.hard) D = !0;
                                                                                else {
                                                                                    n.soft || (c.push(" "), (s += 1));
                                                                                    break;
                                                                                }
                                                                            case tj:
                                                                                if (f.length > 0) {
                                                                                    l.push({ ind: e, mode: u, doc: n }, ...f.reverse()), (f.length = 0);
                                                                                    break;
                                                                                }
                                                                                n.literal ? (e.root ? (c.push(a, e.root.value), (s = e.root.length)) : (c.push(a), (s = 0))) : ((s -= tM(c)), c.push(a + e.value), (s = e.length));
                                                                        }
                                                                        break;
                                                                    case ta:
                                                                        l.push({ ind: e, mode: u, doc: n.contents });
                                                                        break;
                                                                    case ts:
                                                                        break;
                                                                    default:
                                                                        throw new tf(n);
                                                                }
                                                                0 === l.length && f.length > 0 && (l.push(...f.reverse()), (f.length = 0));
                                                            }
                                                            let d = c.indexOf(tz);
                                                            if (-1 !== d) {
                                                                let e = c.indexOf(tz, d + 1),
                                                                    t = c.slice(0, d).join(""),
                                                                    r = c.slice(d + 1, e).join("");
                                                                return { formatted: t + r + c.slice(e + 1).join(""), cursorNodeStart: t.length, cursorNodeText: r };
                                                            }
                                                            return { formatted: c.join("") };
                                                        })(r(), t).formatted,
                                                            i = tT(u);
                                                        return (n[e] = Math.max(n[e] || 3, i)), { text: u, width: i };
                                                    }, "children"),
                                                "children"
                                            ),
                                            o = a(!1);
                                        if ("never" !== t.proseWrap) return [tb, o];
                                        return [
                                            tb,
                                            tm(
                                                (function (e, t = "", r = {}) {
                                                    return th(e), "" !== t && th(t), { type: tr, breakContents: e, flatContents: t, groupId: r.groupId };
                                                })(a(!0), o)
                                            ),
                                        ];
                                        function a(e) {
                                            let t = [
                                                s(i[0], e),
                                                `| ${n
                                                    .map((t, r) => {
                                                        let n = u.align[r],
                                                            i = e ? "-" : "-".repeat(t - 2);
                                                        return `${"center" === n || "left" === n ? ":" : "-"}${i}${"center" === n || "right" === n ? ":" : "-"}`;
                                                    })
                                                    .join(" | ")} |`,
                                            ];
                                            return (
                                                i.length > 1 &&
                                                t.push(
                                                    tw(
                                                        tv,
                                                        i.slice(1).map((t) => s(t, e))
                                                    )
                                                ),
                                                tw(tv, t)
                                            );
                                        }
                                        function s(e, t) {
                                            return `| ${e
                                                .map(({ text: e, width: r }, i) => {
                                                    if (t) return e;
                                                    let o = n[i] - r,
                                                        a = u.align[i],
                                                        s = 0;
                                                    "right" === a ? (s = o) : "center" === a && (s = Math.floor(o / 2));
                                                    let l = o - s;
                                                    return `${" ".repeat(s)}${e}${" ".repeat(l)}`;
                                                })
                                                .join(" | ")} |`;
                                        }
                                    })(e, t, r);
                                case "tableCell":
                                    return rw(e, t, r);
                                case "break":
                                    return /\s/.test(t.originalText[a.position.start.offset]) ? ["  ", tC(tk)] : ["\\", tx];
                                case "liquidNode":
                                    return tI(a.value, tx);
                                case "import":
                                case "export":
                                case "jsx":
                                    return a.value;
                                case "esComment":
                                    return ["{/* ", a.value, " */}"];
                                case "math":
                                    return ["$$", tx, a.value ? [tI(a.value, tx), tx] : "", "$$"];
                                case "inlineMath":
                                    return t.originalText.slice(re(a), rt(a));
                                default:
                                    throw new tJ(a, "Markdown");
                            }
                        },
                        embed: function (e, t) {
                            let { node: r } = e;
                            if ("code" === r.type && null !== r.lang) {
                                let e = t4(t, { language: r.lang });
                                if (e)
                                    return async (u) => {
                                        let n = t.__inJsTemplate ? "~" : "`",
                                            i = n.repeat(Math.max(3, tH(r.value, n) + 1)),
                                            o = { parser: e };
                                        "ts" === r.lang || "typescript" === r.lang ? (o.filepath = "dummy.ts") : "tsx" === r.lang && (o.filepath = "dummy.tsx");
                                        let a = await u(rc(r, t.originalText), o);
                                        return tC([i, r.lang, r.meta ? " " + r.meta : "", tx, tI(a), tx, i]);
                                    };
                            }
                            switch (r.type) {
                                case "front-matter":
                                    return (e) => t6(r, e);
                                case "import":
                                case "export":
                                    return (e) => e(r.value, { parser: "babel" });
                                case "jsx":
                                    return (e) => e(`<$>${r.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" });
                            }
                            return null;
                        },
                        massageAstNode: t1,
                        hasPrettierIgnore: function (e) {
                            return e.index > 0 && "next" === rq(e.previous);
                        },
                        insertPragma: (e) => {
                            let t = tK(e),
                                r = `<!-- @${tQ[0]} -->`;
                            return t.frontMatter
                                ? `${t.frontMatter.raw}

${r}

${t.content}`
                                : `${r}

${t.content}`;
                        },
                        getVisitorKeys: rh,
                    },
                },
                ue = e0;
        },
    },
]);





// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2149],{22149:function(e,t,r){r.r(t),r.d(t,{default:function(){return ue},languages:function(){return rj},options:function(){return rP},parsers:function(){return rz},printers:function(){return r5}});var u=Object.create,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},D=(e,t,r,u)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of o(t))s.call(e,a)||a===r||n(e,a,{get:()=>t[a],enumerable:!(u=i(t,a))||u.enumerable});return e},f=(e,t,r)=>(r=null!=e?u(a(e)):{},D(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)),p=l((e,t)=>{t.exports=function(e){return String(e).replace(/\s+/g," ")}}),d=l((e,t)=>{t.exports=function(e){var t,u=this.Parser,n=this.Compiler;u&&u.prototype&&u.prototype.blockTokenizers&&function(e,t){for(var u,n=e.prototype,i=n.blockTokenizers,o=n.inlineTokenizers,a=n.blockMethods,s=n.inlineMethods,l=i.definition,c=o.reference,D=[],f=-1,p=a.length;++f<p;)"newline"===(u=a[f])||"indentedCode"===u||"paragraph"===u||"footnoteDefinition"===u||D.push([u]);function d(e,t,r){var u,n,i,o,a=t.length+1,s=0;if(91===t.charCodeAt(s++)&&94===t.charCodeAt(s++)){for(n=s;s<a;){if((o=t.charCodeAt(s))!=o||10===o||9===o||32===o)return;if(93===o){i=s,s++;break}s++}if(!(void 0===i||n===i))return!!r||(u=t.slice(n,i),e(t.slice(0,s))({type:"footnoteReference",identifier:u.toLowerCase(),label:u}))}}function h(e,t,r){var u,n,i,o,a,s,l,c=t.length+1,D=0,f=0;if(94===t.charCodeAt(D++)&&91===t.charCodeAt(D++)){for(i=D;D<c;){if((n=t.charCodeAt(D))!=n)return;if(void 0===s){if(92===n)D+=2;else if(91===n)f++,D++;else if(93===n){if(0===f){o=D,D++;break}f--,D++}else if(96===n){for(a=D,s=1;96===t.charCodeAt(a+s);)s++;D+=s}else D++}else if(96===n){for(a=D,l=1;96===t.charCodeAt(a+l);)l++;D+=l,s===l&&(s=void 0),l=void 0}else D++}if(void 0!==o)return!!r||(u=e.now(),u.column+=2,u.offset+=2,e(t.slice(0,D))({type:"footnote",children:this.tokenizeInline(t.slice(i,o),u)}))}}function F(e,t,r){var u=0;if(33===t.charCodeAt(u)&&u++,91===t.charCodeAt(u)&&94!==t.charCodeAt(u+1))return c.call(this,e,t,r)}D.push(["footnoteDefinition"]),(t||{}).inlineNotes&&(r(s,"reference","inlineNote"),o.inlineNote=h),r(a,"definition","footnoteDefinition"),r(s,"reference","footnoteCall"),i.definition=function(e,t,r){for(var u=0,n=t.charCodeAt(u);32===n||9===n;)n=t.charCodeAt(++u);if(91===n&&94!==t.charCodeAt(u+1))return l.call(this,e,t,r)},i.footnoteDefinition=function(e,t,r){for(var u,n,o,a,s,l,c,D,f,p,d,h,F,g=this.interruptFootnoteDefinition,m=this.offset,C=t.length+1,E=0,b=[];E<C&&!(9!==(a=t.charCodeAt(E))&&32!==a);)E++;if(91===t.charCodeAt(E++)&&94===t.charCodeAt(E++)){for(n=E;E<C;){if((a=t.charCodeAt(E))!=a||10===a||9===a||32===a)return;if(93===a){o=E,E++;break}E++}if(!(void 0===o||n===o||58!==t.charCodeAt(E++))){if(r)return!0;for(u=t.slice(n,o),s=e.now(),f=0,p=0,d=E,h=[];E<C;){if((a=t.charCodeAt(E))!=a||10===a)F={start:f,contentStart:d||E,contentEnd:E,end:E},h.push(F),10===a&&(f=E+1,p=0,d=void 0,F.end=f);else if(void 0!==p){if(32===a||9===a)(p+=32===a?1:4-p%4)>4&&(p=void 0,d=E);else{if(p<4&&F&&(F.contentStart===F.contentEnd||function(e,t,r,u){for(var n=e.length,i=-1;++i<n;)if(t[e[i][0]].apply(r,u))return!0;return!1}(g,i,this,[e,t.slice(E,1024),!0])))break;p=void 0,d=E}}E++}for(E=-1,C=h.length;C>0&&(F=h[C-1]).contentStart===F.contentEnd;)C--;for(l=e(t.slice(0,F.contentEnd));++E<C;)F=h[E],m[s.line+E]=(m[s.line+E]||0)+(F.contentStart-F.start),b.push(t.slice(F.contentStart,F.end));return c=this.enterBlock(),D=this.tokenizeBlock(b.join(""),s),c(),l({type:"footnoteDefinition",identifier:u.toLowerCase(),label:u,children:D})}}},o.footnoteCall=d,o.reference=F,n.interruptFootnoteDefinition=D,F.locator=c.locator,d.locator=function(e,t){return e.indexOf("[",t)},h.locator=function(e,t){return e.indexOf("^[",t)}}(u,e),n&&n.prototype&&n.prototype.visitors&&((t=n.prototype.visitors).footnote=function(e){return"^["+this.all(e).join("")+"]"},t.footnoteReference=function(e){return"[^"+(e.label||e.identifier)+"]"},t.footnoteDefinition=function(e){for(var t,r=this.all(e).join(`

// `).split(`
// `),u=0,n=r.length;++u<n;)""!==(t=r[u])&&(r[u]="    "+t);return"[^"+(e.label||e.identifier)+"]: "+r.join(`
// `)})};function r(e,t,r){e.splice(e.indexOf(t),0,r)}}),h=l(e=>{e.isRemarkParser=function(e){return!!(e&&e.prototype&&e.prototype.blockTokenizers)},e.isRemarkCompiler=function(e){return!!(e&&e.prototype&&e.prototype.visitors)}}),F=l((e,t)=>{var r=h();t.exports=function(e){let t=this.Parser,i=this.Compiler;r.isRemarkParser(t)&&function(e,t){let r=e.prototype,i=r.inlineMethods;function o(e,r,i){let o=r.length,a=!1,s=!1,l=0,c,D,f,p,d,h,F;if(92===r.charCodeAt(l)&&(s=!0,l++),36===r.charCodeAt(l)){if(l++,s)return!!i||e(r.slice(0,l))({type:"text",value:"$"});if(36===r.charCodeAt(l)&&(a=!0,l++),!(32===(f=r.charCodeAt(l))||9===f)){for(p=l;l<o;){if(D=f,f=r.charCodeAt(l+1),36===D){if(32!==(c=r.charCodeAt(l-1))&&9!==c&&(f!=f||f<48||f>57)&&(!a||36===f)){d=l-1,l++,a&&l++,h=l;break}}else 92===D&&(l++,f=r.charCodeAt(l+1));l++}if(void 0!==h)return!!i||(F=r.slice(p,d+1),e(r.slice(0,h))({type:"inlineMath",value:F,data:{hName:"span",hProperties:{className:u.concat(a&&t.inlineMathDouble?[n]:[])},hChildren:[{type:"text",value:F}]}}))}}}o.locator=function(e,t){return e.indexOf("$",t)},r.inlineTokenizers.math=o,i.splice(i.indexOf("text"),0,"math")}(t,e),r.isRemarkCompiler(i)&&(i.prototype.visitors.inlineMath=function(e){let t="$";return(e.data&&e.data.hProperties&&e.data.hProperties.className||[]).includes(n)&&(t="$$"),t+e.value+t})};var u=["math","math-inline"],n="math-display"}),g=l((e,t)=>{var r=h();t.exports=function(){let e,t,i,o,a,s=this.Parser,l=this.Compiler;r.isRemarkParser(s)&&(t=(e=s.prototype).blockMethods,i=e.interruptParagraph,o=e.interruptList,a=e.interruptBlockquote,e.blockTokenizers.math=function(e,t,r){let i,o,a,s,l,c,D,f,p,d,h;for(var F=t.length,g=0;g<F&&32===t.charCodeAt(g);)g++;for(l=g;g<F&&36===t.charCodeAt(g);)g++;if(!((c=g-l)<2)){for(;g<F&&32===t.charCodeAt(g);)g++;for(D=g;g<F;){if(36===(i=t.charCodeAt(g)))return;if(10===i)break;g++}if(10===t.charCodeAt(g)){if(r)return!0;for(o=[],D!==g&&o.push(t.slice(D,g)),g++,a=-1===(a=t.indexOf(u,g+1))?F:a;g<F;){for(f=!1,d=g,h=a,s=a,p=0;s>d&&32===t.charCodeAt(s-1);)s--;for(;s>d&&36===t.charCodeAt(s-1);)p++,s--;for(c<=p&&t.indexOf("$",d)===s&&(f=!0,h=s);d<=h&&d-g<l&&32===t.charCodeAt(d);)d++;if(f)for(;h>d&&32===t.charCodeAt(h-1);)h--;if(f&&d===h||o.push(t.slice(d,h)),f)break;g=a+1,a=-1===(a=t.indexOf(u,g+1))?F:a}return o=o.join(`
// `),e(t.slice(0,a))({type:"math",value:o,data:{hName:"div",hProperties:{className:n.concat()},hChildren:[{type:"text",value:o}]}})}}},t.splice(t.indexOf("fencedCode")+1,0,"math"),i.splice(i.indexOf("fencedCode")+1,0,["math"]),o.splice(o.indexOf("fencedCode")+1,0,["math"]),a.splice(a.indexOf("fencedCode")+1,0,["math"])),r.isRemarkCompiler(l)&&(l.prototype.visitors.math=function(e){return`$$
// `+e.value+`
// $$`})};var u=`
// `,n=["math","math-display"]}),m=l((e,t)=>{var r=F(),u=g();t.exports=function(e){var t=e||{};u.call(this,t),r.call(this,t)}}),C=l((e,t)=>{t.exports=function(){for(var e={},t=0;t<arguments.length;t++){var u=arguments[t];for(var n in u)r.call(u,n)&&(e[n]=u[n])}return e};var r=Object.prototype.hasOwnProperty}),E=l((e,t)=>{"function"==typeof Object.create?t.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}}),b=l((e,t)=>{var r=C(),u=E();t.exports=function(e){var t,n,i;for(n in u(a,e),u(o,a),t=a.prototype)(i=t[n])&&"object"==typeof i&&(t[n]="concat"in i?i.concat():r(i));return a;function o(t){return e.apply(this,t)}function a(){return this instanceof a?e.apply(this,arguments):new o(arguments)}}}),v=l((e,t)=>{t.exports=function(e,t,r){return function(){var u=r||this,n=u[e];return u[e]=!t,function(){u[e]=n}}}}),y=l((e,t)=>{t.exports=function(e){for(var t=String(e),r=[],u=/\r?\n|\r/g;u.exec(t);)r.push(u.lastIndex);return r.push(t.length+1),{toPoint:n,toPosition:n,toOffset:function(e){var t,u=e&&e.line,n=e&&e.column;return!isNaN(u)&&!isNaN(n)&&u-1 in r&&(t=(r[u-2]||0)+n-1||0),t>-1&&t<r[r.length-1]?t:-1}};function n(e){var t=-1;if(e>-1&&e<r[r.length-1]){for(;++t<r.length;)if(r[t]>e)return{line:t+1,column:e-(r[t-1]||0)+1,offset:e}}return{}}}}),A=l((e,t)=>{t.exports=function(e,t){return function(r){for(var u,n=0,i=r.indexOf("\\"),o=e[t],a=[];-1!==i;)a.push(r.slice(n,i)),n=i+1,(u=r.charAt(n))&&-1!==o.indexOf(u)||a.push("\\"),i=r.indexOf("\\",n+1);return a.push(r.slice(n)),a.join("")}}}),x=l((e,t)=>{t.exports={AElig:"\xc6",AMP:"&",Aacute:"\xc1",Acirc:"\xc2",Agrave:"\xc0",Aring:"\xc5",Atilde:"\xc3",Auml:"\xc4",COPY:"\xa9",Ccedil:"\xc7",ETH:"\xd0",Eacute:"\xc9",Ecirc:"\xca",Egrave:"\xc8",Euml:"\xcb",GT:">",Iacute:"\xcd",Icirc:"\xce",Igrave:"\xcc",Iuml:"\xcf",LT:"<",Ntilde:"\xd1",Oacute:"\xd3",Ocirc:"\xd4",Ograve:"\xd2",Oslash:"\xd8",Otilde:"\xd5",Ouml:"\xd6",QUOT:'"',REG:"\xae",THORN:"\xde",Uacute:"\xda",Ucirc:"\xdb",Ugrave:"\xd9",Uuml:"\xdc",Yacute:"\xdd",aacute:"\xe1",acirc:"\xe2",acute:"\xb4",aelig:"\xe6",agrave:"\xe0",amp:"&",aring:"\xe5",atilde:"\xe3",auml:"\xe4",brvbar:"\xa6",ccedil:"\xe7",cedil:"\xb8",cent:"\xa2",copy:"\xa9",curren:"\xa4",deg:"\xb0",divide:"\xf7",eacute:"\xe9",ecirc:"\xea",egrave:"\xe8",eth:"\xf0",euml:"\xeb",frac12:"\xbd",frac14:"\xbc",frac34:"\xbe",gt:">",iacute:"\xed",icirc:"\xee",iexcl:"\xa1",igrave:"\xec",iquest:"\xbf",iuml:"\xef",laquo:"\xab",lt:"<",macr:"\xaf",micro:"\xb5",middot:"\xb7",nbsp:"\xa0",not:"\xac",ntilde:"\xf1",oacute:"\xf3",ocirc:"\xf4",ograve:"\xf2",ordf:"\xaa",ordm:"\xba",oslash:"\xf8",otilde:"\xf5",ouml:"\xf6",para:"\xb6",plusmn:"\xb1",pound:"\xa3",quot:'"',raquo:"\xbb",reg:"\xae",sect:"\xa7",shy:"\xad",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",szlig:"\xdf",thorn:"\xfe",times:"\xd7",uacute:"\xfa",ucirc:"\xfb",ugrave:"\xf9",uml:"\xa8",uuml:"\xfc",yacute:"\xfd",yen:"\xa5",yuml:"\xff"}}),k=l((e,t)=>{t.exports={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"}}),w=l((e,t)=>{t.exports=function(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=48&&t<=57}}),B=l((e,t)=>{t.exports=function(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}}),q=l((e,t)=>{t.exports=function(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}}),S=l((e,t)=>{var r=q(),u=w();t.exports=function(e){return r(e)||u(e)}}),T=l((e,t)=>{t.exports={AEli:"\xc6",AElig:"\xc6",AM:"&",AMP:"&",Aacut:"\xc1",Aacute:"\xc1",Abreve:"Ă",Acir:"\xc2",Acirc:"\xc2",Acy:"А",Afr:"\uD835\uDD04",Agrav:"\xc0",Agrave:"\xc0",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"\uD835\uDD38",ApplyFunction:"⁡",Arin:"\xc5",Aring:"\xc5",Ascr:"\uD835\uDC9C",Assign:"≔",Atild:"\xc3",Atilde:"\xc3",Aum:"\xc4",Auml:"\xc4",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"\uD835\uDD05",Bopf:"\uD835\uDD39",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COP:"\xa9",COPY:"\xa9",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedi:"\xc7",Ccedil:"\xc7",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"\xb8",CenterDot:"\xb7",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"\uD835\uDC9E",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"\uD835\uDD07",DiacriticalAcute:"\xb4",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"\uD835\uDD3B",Dot:"\xa8",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"\xa8",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"\uD835\uDC9F",Dstrok:"Đ",ENG:"Ŋ",ET:"\xd0",ETH:"\xd0",Eacut:"\xc9",Eacute:"\xc9",Ecaron:"Ě",Ecir:"\xca",Ecirc:"\xca",Ecy:"Э",Edot:"Ė",Efr:"\uD835\uDD08",Egrav:"\xc8",Egrave:"\xc8",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"\uD835\uDD3C",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Eum:"\xcb",Euml:"\xcb",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"\uD835\uDD09",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"\uD835\uDD3D",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",G:">",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"\uD835\uDD0A",Gg:"⋙",Gopf:"\uD835\uDD3E",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"\uD835\uDCA2",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacut:"\xcd",Iacute:"\xcd",Icir:"\xce",Icirc:"\xce",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrav:"\xcc",Igrave:"\xcc",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"\uD835\uDD40",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Ium:"\xcf",Iuml:"\xcf",Jcirc:"Ĵ",Jcy:"Й",Jfr:"\uD835\uDD0D",Jopf:"\uD835\uDD41",Jscr:"\uD835\uDCA5",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"\uD835\uDD0E",Kopf:"\uD835\uDD42",Kscr:"\uD835\uDCA6",LJcy:"Љ",L:"<",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"\uD835\uDD0F",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"\uD835\uDD43",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"\uD835\uDD10",MinusPlus:"∓",Mopf:"\uD835\uDD44",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
// `,Nfr:"\uD835\uDD11",NoBreak:"⁠",NonBreakingSpace:"\xa0",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"\uD835\uDCA9",Ntild:"\xd1",Ntilde:"\xd1",Nu:"Ν",OElig:"Œ",Oacut:"\xd3",Oacute:"\xd3",Ocir:"\xd4",Ocirc:"\xd4",Ocy:"О",Odblac:"Ő",Ofr:"\uD835\uDD12",Ograv:"\xd2",Ograve:"\xd2",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"\uD835\uDD46",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"\uD835\uDCAA",Oslas:"\xd8",Oslash:"\xd8",Otild:"\xd5",Otilde:"\xd5",Otimes:"⨷",Oum:"\xd6",Ouml:"\xd6",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"\uD835\uDD13",Phi:"Φ",Pi:"Π",PlusMinus:"\xb1",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"\uD835\uDCAB",Psi:"Ψ",QUO:'"',QUOT:'"',Qfr:"\uD835\uDD14",Qopf:"ℚ",Qscr:"\uD835\uDCAC",RBarr:"⤐",RE:"\xae",REG:"\xae",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"\uD835\uDD16",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"\uD835\uDD4A",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"\uD835\uDCAE",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THOR:"\xde",THORN:"\xde",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"\uD835\uDD17",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"\uD835\uDD4B",TripleDot:"⃛",Tscr:"\uD835\uDCAF",Tstrok:"Ŧ",Uacut:"\xda",Uacute:"\xda",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucir:"\xdb",Ucirc:"\xdb",Ucy:"У",Udblac:"Ű",Ufr:"\uD835\uDD18",Ugrav:"\xd9",Ugrave:"\xd9",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"\uD835\uDD4C",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"\uD835\uDCB0",Utilde:"Ũ",Uum:"\xdc",Uuml:"\xdc",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"\uD835\uDD19",Vopf:"\uD835\uDD4D",Vscr:"\uD835\uDCB1",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"\uD835\uDD1A",Wopf:"\uD835\uDD4E",Wscr:"\uD835\uDCB2",Xfr:"\uD835\uDD1B",Xi:"Ξ",Xopf:"\uD835\uDD4F",Xscr:"\uD835\uDCB3",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacut:"\xdd",Yacute:"\xdd",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"\uD835\uDD1C",Yopf:"\uD835\uDD50",Yscr:"\uD835\uDCB4",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"\uD835\uDCB5",aacut:"\xe1",aacute:"\xe1",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acir:"\xe2",acirc:"\xe2",acut:"\xb4",acute:"\xb4",acy:"а",aeli:"\xe6",aelig:"\xe6",af:"⁡",afr:"\uD835\uDD1E",agrav:"\xe0",agrave:"\xe0",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",am:"&",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"\xc5",angzarr:"⍼",aogon:"ą",aopf:"\uD835\uDD52",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",arin:"\xe5",aring:"\xe5",ascr:"\uD835\uDCB6",ast:"*",asymp:"≈",asympeq:"≍",atild:"\xe3",atilde:"\xe3",aum:"\xe4",auml:"\xe4",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"\uD835\uDD1F",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"\uD835\uDD53",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvba:"\xa6",brvbar:"\xa6",bscr:"\uD835\uDCB7",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedi:"\xe7",ccedil:"\xe7",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedi:"\xb8",cedil:"\xb8",cemptyv:"⦲",cen:"\xa2",cent:"\xa2",centerdot:"\xb7",cfr:"\uD835\uDD20",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"\xae",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"\uD835\uDD54",coprod:"∐",cop:"\xa9",copy:"\xa9",copysr:"℗",crarr:"↵",cross:"✗",cscr:"\uD835\uDCB8",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curre:"\xa4",curren:"\xa4",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",de:"\xb0",deg:"\xb0",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"\uD835\uDD21",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"\xa8",digamma:"ϝ",disin:"⋲",div:"\xf7",divid:"\xf7",divide:"\xf7",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"\uD835\uDD55",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"\uD835\uDCB9",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacut:"\xe9",eacute:"\xe9",easter:"⩮",ecaron:"ě",ecir:"\xea",ecirc:"\xea",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"\uD835\uDD22",eg:"⪚",egrav:"\xe8",egrave:"\xe8",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"\uD835\uDD56",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",et:"\xf0",eth:"\xf0",eum:"\xeb",euml:"\xeb",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"\uD835\uDD23",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"\uD835\uDD57",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac1:"\xbc",frac12:"\xbd",frac13:"⅓",frac14:"\xbc",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac3:"\xbe",frac34:"\xbe",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"\uD835\uDCBB",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"\uD835\uDD24",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"\uD835\uDD58",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",g:">",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"\xbd",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"\uD835\uDD25",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"\uD835\uDD59",horbar:"―",hscr:"\uD835\uDCBD",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacut:"\xed",iacute:"\xed",ic:"⁣",icir:"\xee",icirc:"\xee",icy:"и",iecy:"е",iexc:"\xa1",iexcl:"\xa1",iff:"⇔",ifr:"\uD835\uDD26",igrav:"\xec",igrave:"\xec",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"\uD835\uDD5A",iota:"ι",iprod:"⨼",iques:"\xbf",iquest:"\xbf",iscr:"\uD835\uDCBE",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",ium:"\xef",iuml:"\xef",jcirc:"ĵ",jcy:"й",jfr:"\uD835\uDD27",jmath:"ȷ",jopf:"\uD835\uDD5B",jscr:"\uD835\uDCBF",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"\uD835\uDD28",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"\uD835\uDD5C",kscr:"\uD835\uDCC0",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laqu:"\xab",laquo:"\xab",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"\uD835\uDD29",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"\uD835\uDD5D",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"\uD835\uDCC1",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",l:"<",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",mac:"\xaf",macr:"\xaf",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"\uD835\uDD2A",mho:"℧",micr:"\xb5",micro:"\xb5",mid:"∣",midast:"*",midcir:"⫰",middo:"\xb7",middot:"\xb7",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"\uD835\uDD5E",mp:"∓",mscr:"\uD835\uDCC2",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbs:"\xa0",nbsp:"\xa0",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"\uD835\uDD2B",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"\uD835\uDD5F",no:"\xac",not:"\xac",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"\uD835\uDCC3",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntild:"\xf1",ntilde:"\xf1",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacut:"\xf3",oacute:"\xf3",oast:"⊛",ocir:"\xf4",ocirc:"\xf4",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"\uD835\uDD2C",ogon:"˛",ograv:"\xf2",ograve:"\xf2",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"\uD835\uDD60",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"\xba",order:"ℴ",orderof:"ℴ",ordf:"\xaa",ordm:"\xba",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslas:"\xf8",oslash:"\xf8",osol:"⊘",otild:"\xf5",otilde:"\xf5",otimes:"⊗",otimesas:"⨶",oum:"\xf6",ouml:"\xf6",ovbar:"⌽",par:"\xb6",para:"\xb6",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"\uD835\uDD2D",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusm:"\xb1",plusmn:"\xb1",plussim:"⨦",plustwo:"⨧",pm:"\xb1",pointint:"⨕",popf:"\uD835\uDD61",poun:"\xa3",pound:"\xa3",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"\uD835\uDCC5",psi:"ψ",puncsp:" ",qfr:"\uD835\uDD2E",qint:"⨌",qopf:"\uD835\uDD62",qprime:"⁗",qscr:"\uD835\uDCC6",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quo:'"',quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raqu:"\xbb",raquo:"\xbb",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",re:"\xae",reg:"\xae",rfisht:"⥽",rfloor:"⌋",rfr:"\uD835\uDD2F",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"\uD835\uDD63",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"\uD835\uDCC7",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sec:"\xa7",sect:"\xa7",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"\uD835\uDD30",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",sh:"\xad",shy:"\xad",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"\uD835\uDD64",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"\uD835\uDCC8",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"\xaf",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup:"⊃",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szli:"\xdf",szlig:"\xdf",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"\uD835\uDD31",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thor:"\xfe",thorn:"\xfe",tilde:"˜",time:"\xd7",times:"\xd7",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"\uD835\uDD65",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"\uD835\uDCC9",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacut:"\xfa",uacute:"\xfa",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucir:"\xfb",ucirc:"\xfb",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"\uD835\uDD32",ugrav:"\xf9",ugrave:"\xf9",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",um:"\xa8",uml:"\xa8",uogon:"ų",uopf:"\uD835\uDD66",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"\uD835\uDCCA",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uum:"\xfc",uuml:"\xfc",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"\uD835\uDD33",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"\uD835\uDD67",vprop:"∝",vrtri:"⊳",vscr:"\uD835\uDCCB",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"\uD835\uDD34",wopf:"\uD835\uDD68",wp:"℘",wr:"≀",wreath:"≀",wscr:"\uD835\uDCCC",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"\uD835\uDD35",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"\uD835\uDD69",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"\uD835\uDCCD",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacut:"\xfd",yacute:"\xfd",yacy:"я",ycirc:"ŷ",ycy:"ы",ye:"\xa5",yen:"\xa5",yfr:"\uD835\uDD36",yicy:"ї",yopf:"\uD835\uDD6A",yscr:"\uD835\uDCCE",yucy:"ю",yum:"\xff",yuml:"\xff",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"\uD835\uDD37",zhcy:"ж",zigrarr:"⇝",zopf:"\uD835\uDD6B",zscr:"\uD835\uDCCF",zwj:"‍",zwnj:"‌"}}),L=l((e,t)=>{var r=T();t.exports=function(e){return!!u.call(r,e)&&r[e]};var u={}.hasOwnProperty}),O=l((e,t)=>{var r=x(),u=k(),n=w(),i=B(),o=S(),a=L();t.exports=function(e,t){var n,i,m={};for(i in t||(t={}),D)n=t[i],m[i]=n??D[i];return(m.position.indent||m.position.start)&&(m.indent=m.position.indent||[],m.position=m.position.start),function(e,t){var n,i,D,m,C,E,b,v,y,A,x,k,w,B,q,S,T,L,O,N,R,I=t.additional,j=t.nonTerminated,P=t.text,z=t.reference,$=t.warning,U=t.textContext,M=t.referenceContext,V=t.warningContext,_=t.position,H=t.indent||[],G=e.length,W=0,J=-1,Z=_.column||1,Y=_.line||1,K="",Q=[];for("string"==typeof I&&(I=I.charCodeAt(0)),L=X(),A=$?function(e,t){var r=X();r.column+=t,r.offset+=t,$.call(V,g[e],r,e)}:c,W--,G++;++W<G;)if(10===b&&(Z=H[J]||1),38===(b=e.charCodeAt(W))){if(9===(y=e.charCodeAt(W+1))||10===y||12===y||32===y||38===y||60===y||y!=y||I&&y===I){K+=l(b),Z++;continue}for(B=q=W+1,R=q,35===y?(R=++B,88===(y=e.charCodeAt(R))||120===y?(S=p,R=++B):S=d):S=f,D="",w="",E="",T=F[S],R--;++R<G&&T(y=e.charCodeAt(R));)E+=l(y),S===f&&s.call(r,E)&&(D=E,w=r[E]);(C=59===e.charCodeAt(R))&&(R++,(m=S===f&&a(E))&&(D=E,w=m)),N=1+R-q,(C||j)&&(E?S===f?(C&&!w?A(5,1):(D!==E&&(N=1+(R=B+D.length)-B,C=!1),C||(x=D?1:3,t.attribute?61===(y=e.charCodeAt(R))?(A(x,N),w=null):o(y)?w=null:A(x,N):A(x,N))),v=w):(C||A(2,N),(n=v=parseInt(E,h[S]))>=55296&&n<=57343||n>1114111?(A(7,N),v=l(65533)):v in u?(A(6,N),v=u[v]):(k="",((i=v)>=1&&i<=8||11===i||i>=13&&i<=31||i>=127&&i<=159||i>=64976&&i<=65007||(65535&i)==65535||(65535&i)==65534)&&A(6,N),v>65535&&(v-=65536,k+=l(v>>>10|55296),v=56320|1023&v),v=k+l(v))):S!==f&&A(4,N)),v?(ee(),L=X(),W=R-1,Z+=R-q+1,Q.push(v),O=X(),O.offset++,z&&z.call(M,v,{start:L,end:O},e.slice(q-1,R)),L=O):(E=e.slice(q-1,R),K+=E,Z+=E.length,W=R-1)}else 10===b&&(Y++,J++,Z=0),b==b?(K+=l(b),Z++):ee();return Q.join("");function X(){return{line:Y,column:Z,offset:W+(_.offset||0)}}function ee(){K&&(Q.push(K),P&&P.call(U,K,{start:L,end:X()}),K="")}}(e,m)};var s={}.hasOwnProperty,l=String.fromCharCode,c=Function.prototype,D={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},f="named",p="hexadecimal",d="decimal",h={};h[p]=16,h[d]=10;var F={};F[f]=o,F[d]=n,F[p]=i;var g={};g[1]="Named character references must be terminated by a semicolon",g[2]="Numeric character references must be terminated by a semicolon",g[3]="Named character references cannot be empty",g[4]="Numeric character references cannot be empty",g[5]="Named character references must be known",g[6]="Numeric character references cannot be disallowed",g[7]="Numeric character references cannot be outside the permissible Unicode range"}),N=l((e,t)=>{var r=C(),u=O();t.exports=function(e){return n.raw=function(e,n,o){return u(e,r(o,{position:t(n),warning:i}))},n;function t(t){for(var r=e.offset,u=t.line,n=[];++u&&(u in r);)n.push((r[u]||0)+1);return{start:t,indent:n}}function n(r,n,o){u(r,{position:t(n),warning:i,text:o,reference:o,textContext:e,referenceContext:e})}function i(t,r,u){3!==u&&e.file.message(t,r)}}}),R=l((e,t)=>{function r(e){var t,r;return"text"!==e.type||!e.position||(t=e.position.start,r=e.position.end,t.line!==r.line||r.column-t.column===e.value.length)}function u(e,t){return e.value+=t.value,e}function n(e,t){return this.options.commonmark||this.options.gfm?t:(e.children=e.children.concat(t.children),e)}t.exports=function(e){return function(t,i){var o,a,s,l,c,D=this,f=D.offset,p=[],d=D[e+"Methods"],h=D[e+"Tokenizers"],F=i.line,g=i.column;if(!t)return p;for(b.now=C,b.file=D.file,m("");t;){for(o=-1,a=d.length,l=!1;++o<a&&!((s=h[d[o]])&&(!s.onlyAtStart||D.atStart)&&(!s.notInList||!D.inList)&&(!s.notInBlock||!D.inBlock)&&(!s.notInLink||!D.inLink)&&(c=t.length,s.apply(D,[b,t]),l=c!==t.length)););l||D.file.fail(Error("Infinite loop"),b.now())}return D.eof=C(),p;function m(e){for(var t=-1,r=e.indexOf(`
// `);-1!==r;)F++,t=r,r=e.indexOf(`
// `,r+1);-1===t?g+=e.length:g=e.length-t,F in f&&(-1!==t?g+=f[F]:g<=f[F]&&(g=f[F]+1))}function C(){var e={line:F,column:g};return e.offset=D.toOffset(e),e}function E(e){this.start=e,this.end=C()}function b(e){var i,o,a,s=(i=[],o=F+1,function(){for(var e=F+1;o<e;)i.push((f[o]||0)+1),o++;return i}),l=(a=C(),function(e,t){var r=e.position,u=r?r.start:a,n=[],i=r&&r.end.line,o=a.line;if(e.position=new E(u),r&&t&&r.indent){if(n=r.indent,i<o){for(;++i<o;)n.push((f[i]||0)+1);n.push(a.column)}t=n.concat(t)}return e.position.indent=t||[],e}),c=C();return t.slice(0,e.length)!==e&&D.file.fail(Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"),C()),d.reset=h,h.test=b,d.test=b,t=t.slice(e.length),m(e),s=s(),d;function d(e,t){var i,o,a;return l((i=l(e),(a=(o=t?t.children:p)[o.length-1])&&i.type===a.type&&("text"===i.type||"blockquote"===i.type)&&r(a)&&r(i)&&(i=("text"===i.type?u:n).call(D,a,i)),i!==a&&o.push(i),D.atStart&&0!==p.length&&D.exitStart(),i),s)}function h(){var r=d.apply(null,arguments);return F=c.line,g=c.column,t=e+t,r}function b(){var r=l({});return F=c.line,g=c.column,t=e+t,r.position}}}}}),I=l((e,t)=>{t.exports=i;var r=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],u=r.concat(["~","|"]),n=u.concat([`
// `,'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);function i(e){var t=e||{};return t.commonmark?n:t.gfm?u:r}i.default=r,i.gfm=u,i.commonmark=n}),j=l((e,t)=>{t.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]}),P=l((e,t)=>{t.exports={position:!0,gfm:!0,commonmark:!1,pedantic:!1,blocks:j()}}),z=l((e,t)=>{var r=C(),u=I(),n=P();t.exports=function(e){var t,i,o=this.options;if(null==e)e={};else if("object"==typeof e)e=r(e);else throw Error("Invalid value `"+e+"` for setting `options`");for(t in n){if(null==(i=e[t])&&(i=o[t]),"blocks"!==t&&"boolean"!=typeof i||"blocks"===t&&"object"!=typeof i)throw Error("Invalid value `"+i+"` for setting `options."+t+"`");e[t]=i}return this.options=e,this.escape=u(e),this}}),$=l((e,t)=>{function r(){return!0}t.exports=function e(t){if(null==t)return r;if("string"==typeof t)return function(e){return!!(e&&e.type===t)};if("object"==typeof t)return"length"in t?function(t){for(var r=[],u=-1;++u<t.length;)r[u]=e(t[u]);return function(){for(var e=-1;++e<r.length;)if(r[e].apply(this,arguments))return!0;return!1}}(t):function(e){var r;for(r in t)if(e[r]!==t[r])return!1;return!0};if("function"==typeof t)return t;throw Error("Expected function, string, or object as test")}}),U=l((e,t)=>{t.exports=function(e){return e}}),M=l((e,t)=>{t.exports=i;var r=$(),u=U(),n="skip";function i(e,t,i,o){var a,s;"function"==typeof t&&"function"!=typeof i&&(o=i,i=t,t=null),s=r(t),a=o?-1:1,(function e(r,l,c){var D,f="object"==typeof r&&null!==r?r:{};return"string"==typeof f.type&&(D="string"==typeof f.tagName?f.tagName:"string"==typeof f.name?f.name:void 0,p.displayName="node ("+u(f.type+(D?"<"+D+">":""))+")"),p;function p(){var u,D,f,p=c.concat(r),d=[];if((!t||s(r,l,c[c.length-1]||null))&&!1===(d=null!==(u=i(r,c))&&"object"==typeof u&&"length"in u?u:"number"==typeof u?[!0,u]:[u])[0])return d;if(r.children&&d[0]!==n)for(f=(o?r.children.length:-1)+a;f>-1&&f<r.children.length;){if(!1===(D=e(r.children[f],f,p)())[0])return D;f="number"==typeof D[1]?D[1]:f+a}return d}})(e,null,[])()}i.CONTINUE=!0,i.SKIP=n,i.EXIT=!1}),V=l((e,t)=>{t.exports=o;var r=M(),u=r.CONTINUE,n=r.SKIP,i=r.EXIT;function o(e,t,u,n){"function"==typeof t&&"function"!=typeof u&&(n=u,u=t,t=null),r(e,t,function(e,t){var r=t[t.length-1],n=r?r.children.indexOf(e):null;return u(e,n,r)},n)}o.CONTINUE=u,o.SKIP=n,o.EXIT=i}),_=l((e,t)=>{var r=V();function u(e){delete e.position}function n(e){e.position=void 0}t.exports=function(e,t){return r(e,t?u:n),e}}),H=l((e,t)=>{var r=C(),u=_();t.exports=function(){var e,t=String(this.file),o={line:1,column:1,offset:0},a=r(o);return 65279===(t=t.replace(i,n)).charCodeAt(0)&&(t=t.slice(1),a.column++,a.offset++),e={type:"root",children:this.tokenizeBlock(t,a),position:{start:o,end:this.eof||r(o)}},this.options.position||u(e,!0),e};var n=`
// `,i=/\r\n|\r/g}),G=l((e,t)=>{var r=/^[ \t]*(\n|$)/;t.exports=function(e,t,u){for(var n,i="",o=0,a=t.length;o<a&&null!=(n=r.exec(t.slice(o)));)o+=n[0].length,i+=n[0];if(""!==i){if(u)return!0;e(i)}}}),W=l((e,t)=>{var r,u="";t.exports=function(e,t){if("string"!=typeof e)throw TypeError("expected a string");if(1===t)return e;if(2===t)return e+e;var n=e.length*t;if(r!==e||typeof r>"u")r=e,u="";else if(u.length>=n)return u.substr(0,n);for(;n>u.length&&t>1;)1&t&&(u+=e),t>>=1,e+=e;return u+=e,u=u.substr(0,n)}}),J=l((e,t)=>{t.exports=function(e){return String(e).replace(/\n+$/,"")}}),Z=l((e,t)=>{var r=W(),u=J();t.exports=function(e,t,r){for(var o,a,s,l=-1,c=t.length,D="",f="",p="",d="";++l<c;)if(o=t.charAt(l),s){if(s=!1,D+=p,f+=d,p="",d="",o===n)p=o,d=o;else for(D+=o,f+=o;++l<c;){if(!(o=t.charAt(l))||o===n){d=o,p=o;break}D+=o,f+=o}}else if(" "===o&&t.charAt(l+1)===o&&t.charAt(l+2)===o&&t.charAt(l+3)===o)p+=i,l+=3,s=!0;else if("	"===o)p+=o,s=!0;else{for(a="";"	"===o||" "===o;)a+=o,o=t.charAt(++l);if(o!==n)break;p+=a+o,d+=o}if(f)return!!r||e(D)({type:"code",lang:null,meta:null,value:u(f)})};var n=`
// `,i=r(" ",4)}),Y=l((e,t)=>{t.exports=function(e,t,u){var n,i,o,a,s,l,c,D,f,p,d,h,F,g=this.options.gfm,m=t.length+1,C=0,E="";if(g){for(;C<m&&!(" "!==(o=t.charAt(C))&&"	"!==o);)E+=o,C++;if(h=C,!("~"!==(o=t.charAt(C))&&"`"!==o)){for(C++,i=o,n=1,E+=o;C<m&&(o=t.charAt(C))===i;)E+=o,n++,C++;if(!(n<3)){for(;C<m&&!(" "!==(o=t.charAt(C))&&"	"!==o);)E+=o,C++;for(a="",c="";C<m&&!((o=t.charAt(C))===r||"`"===i&&o===i);)" "===o||"	"===o?c+=o:(a+=c+o,c=""),C++;if(!((o=t.charAt(C))&&o!==r)){if(u)return!0;F=e.now(),F.column+=E.length,F.offset+=E.length,E+=a,a=this.decode.raw(this.unescape(a),F),c&&(E+=c),c="",p="",d="",D="",f="";for(var b=!0;C<m;){if(o=t.charAt(C),D+=p,f+=d,p="",d="",o!==r){D+=o,d+=o,C++;continue}for(b?(E+=o,b=!1):(p+=o,d+=o),c="",C++;C<m&&" "===(o=t.charAt(C));)c+=o,C++;if(p+=c,d+=c.slice(h),!(c.length>=4)){for(c="";C<m&&(o=t.charAt(C))===i;)c+=o,C++;if(p+=c,d+=c,!(c.length<n)){for(c="";C<m&&!(" "!==(o=t.charAt(C))&&"	"!==o);)p+=o,d+=o,C++;if(!o||o===r)break}}}for(E+=D+p,C=-1,m=a.length;++C<m;)if(" "===(o=a.charAt(C))||"	"===o)s||(s=a.slice(0,C));else if(s){l=a.slice(C);break}return e(E)({type:"code",lang:s||a||null,meta:l||null,value:f})}}}}};var r=`
// `}),K=l((e,t)=>{(e=t.exports=function(t){return t.trim?t.trim():e.right(e.left(t))}).left=function(e){return e.trimLeft?e.trimLeft():e.replace(/^\s\s*/,"")},e.right=function(e){if(e.trimRight)return e.trimRight();for(var t=/\s/,r=e.length;t.test(e.charAt(--r)););return e.slice(0,r+1)}}),Q=l((e,t)=>{t.exports=function(e,t,r,u){for(var n,i,o=e.length,a=-1;++a<o;)if(!(void 0!==(i=(n=e[a])[1]||{}).pedantic&&i.pedantic!==r.options.pedantic)&&!(void 0!==i.commonmark&&i.commonmark!==r.options.commonmark)&&t[n[0]].apply(r,u))return!0;return!1}}),X=l((e,t)=>{var r=K(),u=Q();t.exports=function(e,t,i){for(var o,a,s,l,c,D,f,p,d=this.offset,h=this.blockTokenizers,F=this.interruptBlockquote,g=e.now(),m=g.line,C=t.length,E=[],b=[],v=[],y=0;y<C&&!(" "!==(a=t.charAt(y))&&"	"!==a);)y++;if(">"===t.charAt(y)){if(i)return!0;for(y=0;y<C;){for(s=t.indexOf(n,y),D=y,f=!1,-1===s&&(s=C);y<C&&!(" "!==(a=t.charAt(y))&&"	"!==a);)y++;if(">"===t.charAt(y)?(y++,f=!0," "===t.charAt(y)&&y++):y=D,l=t.slice(y,s),!f&&!r(l)){y=D;break}if(!f&&u(F,h,this,[e,t.slice(y),!0]))break;c=D===y?l:t.slice(D,s),v.push(y-D),E.push(c),b.push(l),y=s+1}for(y=-1,C=v.length,o=e(E.join(n));++y<C;)d[m]=(d[m]||0)+v[y],m++;return p=this.enterBlock(),b=this.tokenizeBlock(b.join(n),g),p(),o({type:"blockquote",children:b})}};var n=`
// `}),ee=l((e,t)=>{t.exports=function(e,t,u){for(var n,i,o,a=this.options.pedantic,s=t.length+1,l=-1,c=e.now(),D="",f="";++l<s;){if(" "!==(n=t.charAt(l))&&"	"!==n){l--;break}D+=n}for(o=0;++l<=s;){if("#"!==(n=t.charAt(l))){l--;break}D+=n,o++}if(!(o>6)&&!(!o||!a&&"#"===t.charAt(l+1))){for(s=t.length+1,i="";++l<s;){if(" "!==(n=t.charAt(l))&&"	"!==n){l--;break}i+=n}if(!(!a&&0===i.length&&n&&n!==r)){if(u)return!0;for(D+=i,i="",f="";++l<s&&!(!(n=t.charAt(l))||n===r);){if(" "!==n&&"	"!==n&&"#"!==n){f+=i+n,i="";continue}for(;" "===n||"	"===n;)i+=n,n=t.charAt(++l);if(!a&&f&&!i&&"#"===n){f+=n;continue}for(;"#"===n;)i+=n,n=t.charAt(++l);for(;" "===n||"	"===n;)i+=n,n=t.charAt(++l);l--}return c.column+=D.length,c.offset+=D.length,e(D+=f+i)({type:"heading",depth:o,children:this.tokenizeInline(f,c)})}}};var r=`
// `}),et=l((e,t)=>{t.exports=function(e,t,u){for(var n,i,o,a,s=-1,l=t.length+1,c="";++s<l&&!("	"!==(n=t.charAt(s))&&" "!==n);)c+=n;if(!("*"!==n&&"-"!==n&&"_"!==n))for(i=n,c+=n,o=1,a="";++s<l;)if((n=t.charAt(s))===i)o++,c+=a+i,a="";else{if(" "!==n)return o>=3&&(!n||n===r)?(c+=a,!!u||e(c)({type:"thematicBreak"})):void 0;a+=n}};var r=`
// `}),er=l((e,t)=>{t.exports=function(e){for(var t,r=0,u=0,n=e.charAt(r),i={},o=0;"	"===n||" "===n;){for(u+=t="	"===n?4:1,t>1&&(u=Math.floor(u/t)*t);o<u;)i[++o]=r;n=e.charAt(++r)}return{indent:u,stops:i}}}),eu=l((e,t)=>{var r=K(),u=W(),n=er();t.exports=function(e,t){var o,a,s,l=e.split(i),c=l.length+1,D=1/0,f=[];for(l.unshift(u(" ",t)+"!");c--;)if(a=n(l[c]),f[c]=a.stops,0!==r(l[c]).length){if(a.indent)a.indent>0&&a.indent<D&&(D=a.indent);else{D=1/0;break}}if(D!==1/0)for(c=l.length;c--;){for(s=f[c],o=D;o&&!(o in s);)o--;l[c]=l[c].slice(s[o]+1)}return l.shift(),l.join(i)};var i=`
// `}),en=l((e,t)=>{var r=K(),u=W(),n=w(),i=er(),o=eu(),a=Q();t.exports=function(e,t,u){for(var i,o,D,f,p,F,g,m,C,E,b,v,y,A,x,k,w,B,q,S,T,L,O,N=this.options.commonmark,R=this.options.pedantic,I=this.blockTokenizers,j=this.interruptList,P=0,z=t.length,$=null,U=!1;P<z&&!("	"!==(f=t.charAt(P))&&" "!==f);)P++;if("*"===(f=t.charAt(P))||"+"===f||"-"===f)p=f,D=!1;else{for(D=!0,o="";P<z&&n(f=t.charAt(P));)o+=f,P++;if(f=t.charAt(P),!o||!("."===f||N&&")"===f)||u&&"1"!==o)return;$=parseInt(o,10),p=f}if(!(" "!==(f=t.charAt(++P))&&"	"!==f&&(R||f!==s&&""!==f))){if(u)return!0;for(P=0,A=[],x=[],k=[];P<z;){for(F=t.indexOf(s,P),g=P,m=!1,O=!1,-1===F&&(F=z),i=0;P<z;){if("	"===(f=t.charAt(P)))i+=4-i%4;else if(" "===f)i++;else break;P++}if(w&&i>=w.indent&&(O=!0),f=t.charAt(P),C=null,!O){if("*"===f||"+"===f||"-"===f)C=f,P++,i++;else{for(o="";P<z&&n(f=t.charAt(P));)o+=f,P++;f=t.charAt(P),P++,o&&("."===f||N&&")"===f)&&(C=f,i+=o.length+1)}if(C){if("	"===(f=t.charAt(P)))i+=4-i%4,P++;else if(" "===f){for(L=P+4;P<L&&" "===t.charAt(P);)P++,i++;P===L&&" "===t.charAt(P)&&(P-=3,i-=3)}else f!==s&&""!==f&&(C=null)}}if(C){if(!R&&p!==C)break;m=!0}else N||O||" "!==t.charAt(g)?N&&w&&(O=i>=w.indent||i>4):O=!0,m=!1,P=g;if(b=t.slice(g,F),E=g===P?b:t.slice(P,F),("*"===C||"_"===C||"-"===C)&&I.thematicBreak.call(this,e,b,!0))break;if(v=y,y=!m&&!r(E).length,O&&w)w.value=w.value.concat(k,b),x=x.concat(k,b),k=[];else if(m)0!==k.length&&(U=!0,w.value.push(""),w.trail=k.concat()),w={value:[b],indent:i,trail:[]},A.push(w),x=x.concat(k,b),k=[];else if(y){if(v&&!N)break;k.push(b)}else{if(v||a(j,I,this,[e,b,!0]))break;w.value=w.value.concat(k,b),x=x.concat(k,b),k=[]}P=F+1}for(S=e(x.join(s)).reset({type:"list",ordered:D,start:$,spread:U,children:[]}),B=this.enterList(),q=this.enterBlock(),P=-1,z=A.length;++P<z;)w=A[P].value.join(s),T=e.now(),e(w)(function(e,t,r){var u,n,i=e.offset,o=e.options.pedantic?d:h,a=null;return t=o.apply(null,arguments),e.options.gfm&&(u=t.match(c))&&(n=u[0].length,a="x"===u[1].toLowerCase(),i[r.line]+=n,t=t.slice(n)),{type:"listItem",spread:l.test(t),checked:a,children:e.tokenizeBlock(t,r)}}(this,w,T),S),w=A[P].trail.join(s),P!==z-1&&(w+=s),e(w);return B(),q(),S}};var s=`
// `,l=/\n\n(?!\s*$)/,c=/^\[([ X\tx])][ \t]/,D=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,f=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,p=/^( {1,4}|\t)?/gm;function d(e,t,r){var u=e.offset,n=r.line;return t=t.replace(f,i),n=r.line,t.replace(p,i);function i(e){return u[n]=(u[n]||0)+e.length,n++,""}}function h(e,t,r){var n,a,l,c,f,p,d,h=e.offset,F=r.line;for(c=(t=t.replace(D,function(e,t,r,i,o){return a=t+r+i,l=o,10>Number(r)&&a.length%2==1&&(r=" "+r),(n=t+u(" ",r.length)+i)+l})).split(s),(f=o(t,i(n).indent).split(s))[0]=l,h[F]=(h[F]||0)+a.length,F++,p=0,d=c.length;++p<d;)h[F]=(h[F]||0)+c[p].length-f[p].length,F++;return f.join(s)}}),ei=l((e,t)=>{t.exports=function(e,t,u){for(var n,i,o,a,s,l=e.now(),c=t.length,D=-1,f="";++D<c;){if(" "!==(o=t.charAt(D))||D>=3){D--;break}f+=o}for(n="",i="";++D<c;){if((o=t.charAt(D))===r){D--;break}" "===o||"	"===o?i+=o:(n+=i+o,i="")}if(l.column+=f.length,l.offset+=f.length,f+=n+i,o=t.charAt(++D),a=t.charAt(++D),!(o!==r||"="!==a&&"-"!==a)){for(f+=o,i=a,s="="===a?1:2;++D<c;){if((o=t.charAt(D))!==a){if(o!==r)return;D--;break}i+=o}return!!u||e(f+i)({type:"heading",depth:s,children:this.tokenizeInline(n,l)})}};var r=`
// `}),eo=l(e=>{var t="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",r="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";e.openCloseTag=RegExp("^(?:"+t+"|"+r+")"),e.tag=RegExp("^(?:"+t+"|"+r+"|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")}),ea=l((e,t)=>{var r=eo().openCloseTag;t.exports=function(e,t,r){for(var F,g,m,C,E,b,v,y=this.options.blocks.join("|"),A=RegExp("^</?("+y+")(?=(\\s|/?>|$))","i"),x=t.length,k=0,w=[[n,i,!0],[o,a,!0],[s,l,!0],[c,D,!0],[f,p,!0],[A,d,!0],[h,d,!1]];k<x&&!("	"!==(C=t.charAt(k))&&" "!==C);)k++;if("<"===t.charAt(k)){for(F=-1===(F=t.indexOf(u,k+1))?x:F,g=t.slice(k,F),m=-1,E=w.length;++m<E;)if(w[m][0].test(g)){b=w[m];break}if(b){if(r)return b[2];if(k=F,!b[1].test(g))for(;k<x;){if(F=-1===(F=t.indexOf(u,k+1))?x:F,g=t.slice(k+1,F),b[1].test(g)){g&&(k=F);break}k=F}return e(v=t.slice(0,k))({type:"html",value:v})}}};var u=`
// `,n=/^<(script|pre|style)(?=(\s|>|$))/i,i=/<\/(script|pre|style)>/i,o=/^<!--/,a=/-->/,s=/^<\?/,l=/\?>/,c=/^<![A-Za-z]/,D=/>/,f=/^<!\[CDATA\[/,p=/]]>/,d=/^$/,h=RegExp(r.source+"\\s*$")}),es=l((e,t)=>{t.exports=function(e){return u.test("number"==typeof e?r(e):e.charAt(0))};var r=String.fromCharCode,u=/\s/}),el=l((e,t)=>{var r=p();t.exports=function(e){return r(e).toLowerCase()}}),ec=l((e,t)=>{var r=es(),u=el();t.exports=function(e,t,o){for(var a,s,l,c,D,f,p,d,h,F=this.options.commonmark,g=0,m=t.length,C="";g<m&&!(" "!==(D=t.charAt(g))&&"	"!==D);)C+=D,g++;if("["===(D=t.charAt(g))){for(g++,C+=D,c="";g<m&&"]"!==(D=t.charAt(g));)"\\"===D&&(c+=D,g++,D=t.charAt(g)),c+=D,g++;if(!(!c||"]"!==t.charAt(g)||":"!==t.charAt(g+1))){for(p=c,C+=c+"]:",g=C.length,c="";g<m&&!("	"!==(D=t.charAt(g))&&" "!==D&&D!==n);)C+=D,g++;if(D=t.charAt(g),c="",s=C,"<"===D){for(g++;g<m&&i(D=t.charAt(g));)c+=D,g++;if((D=t.charAt(g))===i.delimiter)C+="<"+c+D,g++;else{if(F)return;g-=c.length+1,c=""}}if(!c){for(;g<m&&"["!==(a=D=t.charAt(g))&&"]"!==a&&!r(a);)c+=D,g++;C+=c}if(c){for(d=c,c="";g<m&&!("	"!==(D=t.charAt(g))&&" "!==D&&D!==n);)c+=D,g++;if(D=t.charAt(g),f=null,'"'===D?f='"':"'"===D?f="'":"("===D&&(f=")"),f){if(!c)return;for(C+=c+D,g=C.length,c="";g<m&&(D=t.charAt(g))!==f;){if(D===n){if(g++,(D=t.charAt(g))===n||D===f)return;c+=n}c+=D,g++}if((D=t.charAt(g))!==f)return;l=C,C+=c+D,g++,h=c,c=""}else c="",g=C.length;for(;g<m&&!("	"!==(D=t.charAt(g))&&" "!==D);)C+=D,g++;if(!(D=t.charAt(g))||D===n)return!!o||(s=e(s).test().end,d=this.decode.raw(this.unescape(d),s,{nonTerminated:!1}),h&&(l=e(l).test().end,h=this.decode.raw(this.unescape(h),l)),e(C)({type:"definition",identifier:u(p),label:p,title:h||null,url:d}))}}}};var n=`
// `;function i(e){return">"!==e&&"["!==e&&"]"!==e}i.delimiter=">"}),eD=l((e,t)=>{var r=es();t.exports=function(e,t,i){var o,a,s,l,c,D,f,p,d,h,F,g,m,C,E,b,v,y,A,x,k,w;if(this.options.gfm){for(o=0,b=0,D=t.length+1,f=[];o<D;){if(x=t.indexOf(u,o),k=t.indexOf("|",o+1),-1===x&&(x=t.length),-1===k||k>x){if(b<2)return;break}f.push(t.slice(o,x)),b++,o=x+1}for(l=f.join(u),a=f.splice(1,1)[0]||[],o=0,D=a.length,b--,s=!1,F=[];o<D;){if("|"===(d=a.charAt(o))){if(h=null,!1===s){if(!1===w)return}else F.push(s),s=!1;w=!1}else if("-"===d)h=!0,s=s||null;else if(":"===d)s=s===n?"center":h&&null===s?"right":n;else if(!r(d))return;o++}if(!1!==s&&F.push(s),!(F.length<1)){if(i)return!0;for(E=-1,y=[],A=e(l).reset({type:"table",align:F,children:y});++E<b;){for(v=f[E],c={type:"tableRow",children:[]},E&&e(u),e(v).reset(c,A),D=v.length+1,o=0,p="",g="",m=!0;o<D;){if("	"===(d=v.charAt(o))||" "===d){g?p+=d:e(d),o++;continue}""===d||"|"===d?m?e(d):((g||d)&&!m&&(l=g,p.length>1&&(d?(l+=p.slice(0,-1),p=p.charAt(p.length-1)):(l+=p,p="")),C=e.now(),e(l)({type:"tableCell",children:this.tokenizeInline(g,C)},c)),e(p+d),p="",g=""):(p&&(g+=p,p=""),g+=d,"\\"===d&&o!==D-2&&(g+=v.charAt(o+1),o++)),m=!1,o++}E||e(u+a)}return A}}};var u=`
// `,n="left"}),ef=l((e,t)=>{var r=K(),u=J(),n=Q();t.exports=function(e,t,o){for(var a,s,l,c,D,f=this.options,p=f.commonmark,d=this.blockTokenizers,h=this.interruptParagraph,F=t.indexOf(i),g=t.length;F<g;){if(-1===F){F=g;break}if(t.charAt(F+1)===i)break;if(p){for(c=0,a=F+1;a<g;){if("	"===(l=t.charAt(a))){c=4;break}if(" "===l)c++;else break;a++}if(c>=4&&l!==i){F=t.indexOf(i,F+1);continue}}if(n(h,d,this,[e,s=t.slice(F+1),!0]))break;if(a=F,-1!==(F=t.indexOf(i,F+1))&&""===r(t.slice(a,F))){F=a;break}}return s=t.slice(0,F),!!o||(D=e.now(),e(s=u(s))({type:"paragraph",children:this.tokenizeInline(s,D)}))};var i=`
// `}),ep=l((e,t)=>{t.exports=function(e,t){return e.indexOf("\\",t)}}),ed=l((e,t)=>{var r=ep();t.exports=n,n.locator=r;var u=`
// `;function n(e,t,r){var n,i;if("\\"===t.charAt(0)&&(n=t.charAt(1),-1!==this.escape.indexOf(n)))return!!r||(i=n===u?{type:"break"}:{type:"text",value:n},e("\\"+n)(i))}}),eh=l((e,t)=>{t.exports=function(e,t){return e.indexOf("<",t)}}),eF=l((e,t)=>{var r=es(),u=O(),n=eh();t.exports=a,a.locator=n,a.notInLink=!0;var i="mailto:",o=i.length;function a(e,t,n){var a,s,l,c,D,f="",p=t.length,d=0,h="",F=!1,g="";if("<"===t.charAt(0)){for(d++,f="<";d<p&&!(r(a=t.charAt(d))||">"===a||"@"===a||":"===a&&"/"===t.charAt(d+1));)h+=a,d++;if(h){if(g+=h,h="",g+=a=t.charAt(d),d++,"@"===a)F=!0;else{if(":"!==a||"/"!==t.charAt(d+1))return;g+="/",d++}for(;d<p&&!(r(a=t.charAt(d))||">"===a);)h+=a,d++;if(a=t.charAt(d),!(!h||">"!==a))return!!n||(g+=h,l=g,f+=g+a,s=e.now(),s.column++,s.offset++,F&&(g.slice(0,o).toLowerCase()===i?(l=l.slice(o),s.column+=o,s.offset+=o):g=i+g),c=this.inlineTokenizers,this.inlineTokenizers={text:c.text},D=this.enterLink(),l=this.tokenizeInline(l,s),this.inlineTokenizers=c,D(),e(f)({type:"link",title:null,url:u(g,{nonTerminated:!1}),children:l}))}}}}),eg=l((e,t)=>{t.exports=function(e,t){var r,u=String(e),n=0;if("string"!=typeof t)throw Error("Expected character");for(r=u.indexOf(t);-1!==r;)n++,r=u.indexOf(t,r+t.length);return n}}),em=l((e,t)=>{t.exports=function(e,t){var u,n,i,o=-1;if(!this.options.gfm)return o;for(n=r.length,u=-1;++u<n;)-1!==(i=e.indexOf(r[u],t))&&(-1===o||i<o)&&(o=i);return o};var r=["www.","http://","https://"]}),eC=l((e,t)=>{var r=eg(),u=O(),n=w(),i=q(),o=es(),a=em();function s(e,t,a){var s,l,c,D,f,p,d,h,F,g,m,C,E,b,v=this.options.gfm,y=this.inlineTokenizers,A=t.length,x=-1,k=!1;if(v){if("www."===t.slice(0,4))k=!0,D=4;else if("http://"===t.slice(0,7).toLowerCase())D=7;else{if("https://"!==t.slice(0,8).toLowerCase())return;D=8}for(x=D-1,c=D,s=[];D<A;){if(46===(d=t.charCodeAt(D))){if(x===D-1)break;s.push(D),x=D,D++;continue}if(n(d)||i(d)||45===d||95===d){D++;continue}break}if(46===d&&(s.pop(),D--),void 0!==s[0]&&(l=s.length<2?c:s[s.length-2]+1,-1===t.slice(l,D).indexOf("_"))){if(a)return!0;for(h=D,f=D;D<A&&!(o(d=t.charCodeAt(D))||60===d);)D++,33===d||42===d||44===d||46===d||58===d||63===d||95===d||126===d||(h=D);if(D=h,41===t.charCodeAt(D-1))for(F=r(p=t.slice(f,D),"("),g=r(p,")");g>F;)D=f+p.lastIndexOf(")"),p=t.slice(f,D),g--;if(59===t.charCodeAt(D-1)&&(D--,i(t.charCodeAt(D-1)))){for(h=D-2;i(t.charCodeAt(h));)h--;38===t.charCodeAt(h)&&(D=h)}return E=u(m=t.slice(0,D),{nonTerminated:!1}),k&&(E="http://"+E),b=this.enterLink(),this.inlineTokenizers={text:y.text},C=this.tokenizeInline(m,e.now()),this.inlineTokenizers=y,b(),e(m)({type:"link",title:null,url:E,children:C})}}}t.exports=s,s.locator=a,s.notInLink=!0}),eE=l((e,t)=>{var r=w(),u=q();function n(e){return r(e)||u(e)||43===e||45===e||46===e||95===e}t.exports=function e(t,r){var u,i;if(!this.options.gfm||-1===(u=t.indexOf("@",r)))return -1;if((i=u)===r||!n(t.charCodeAt(i-1)))return e.call(this,t,u+1);for(;i>r&&n(t.charCodeAt(i-1));)i--;return i}}),eb=l((e,t)=>{var r=O(),u=w(),n=q(),i=eE();function o(e,t,i){var o,a,s,l,c=this.options.gfm,D=this.inlineTokenizers,f=0,p=t.length,d=-1;if(c){for(o=t.charCodeAt(f);u(o)||n(o)||43===o||45===o||46===o||95===o;)o=t.charCodeAt(++f);if(0!==f&&64===o){for(f++;f<p;){if(u(o=t.charCodeAt(f))||n(o)||45===o||46===o||95===o){f++,-1===d&&46===o&&(d=f);continue}break}if(!(-1===d||d===f||45===o||95===o))return 46===o&&f--,a=t.slice(0,f),!!i||(l=this.enterLink(),this.inlineTokenizers={text:D.text},s=this.tokenizeInline(a,e.now()),this.inlineTokenizers=D,l(),e(a)({type:"link",title:null,url:"mailto:"+r(a,{nonTerminated:!1}),children:s}))}}}t.exports=o,o.locator=i,o.notInLink=!0}),ev=l((e,t)=>{var r=q(),u=eh(),n=eo().tag;t.exports=a,a.locator=u;var i=/^<a /i,o=/^<\/a>/i;function a(e,t,u){var a,s,l=t.length;if(!("<"!==t.charAt(0)||l<3)&&!(!r(a=t.charAt(1))&&"?"!==a&&"!"!==a&&"/"!==a)&&(s=t.match(n)))return!!u||(s=s[0],!this.inLink&&i.test(s)?this.inLink=!0:this.inLink&&o.test(s)&&(this.inLink=!1),e(s)({type:"html",value:s}))}}),ey=l((e,t)=>{t.exports=function(e,t){var r=e.indexOf("[",t),u=e.indexOf("![",t);return -1===u||r<u?r:u}}),eA=l((e,t)=>{var r=es(),u=ey();t.exports=i,i.locator=u;var n=`
// `;function i(e,t,u){var i,o,a,s,l,c,D,f,p,d,h,F,g,m,C,E,b,v,y="",A=0,x=t.charAt(0),k=this.options.pedantic,w=this.options.commonmark,B=this.options.gfm;if("!"===x&&(f=!0,y=x,x=t.charAt(++A)),"["===x&&!(!f&&this.inLink)){for(y+=x,m="",A++,h=t.length,E=e.now(),g=0,E.column+=A,E.offset+=A;A<h;){if(c=x=t.charAt(A),"`"===x){for(o=1;"`"===t.charAt(A+1);)c+=x,A++,o++;a?o>=a&&(a=0):a=o}else if("\\"===x)A++,c+=t.charAt(A);else if((!a||B)&&"["===x)g++;else if((!a||B)&&"]"===x){if(g)g--;else{if("("!==t.charAt(A+1))return;c+="(",i=!0,A++;break}}m+=c,c="",A++}if(i){for(p=m,y+=m+c,A++;A<h&&r(x=t.charAt(A));)y+=x,A++;if(x=t.charAt(A),m="",s=y,"<"===x){for(A++,s+="<";A<h&&">"!==(x=t.charAt(A));){if(w&&x===n)return;m+=x,A++}if(">"!==t.charAt(A))return;y+="<"+m+">",C=m,A++}else{for(x=null,c="";A<h&&(x=t.charAt(A),!(c&&('"'===x||"'"===x||w&&"("===x)));){if(r(x)){if(!k)break;c+=x}else{if("("===x)g++;else if(")"===x){if(0===g)break;g--}m+=c,c="","\\"===x&&(m+="\\",x=t.charAt(++A)),m+=x}A++}y+=m,C=m,A=y.length}for(m="";A<h&&r(x=t.charAt(A));)m+=x,A++;if(x=t.charAt(A),y+=m,m&&('"'===x||"'"===x||w&&"("===x)){if(A++,y+=x,m="",d="("===x?")":x,l=y,w){for(;A<h&&(x=t.charAt(A))!==d;)"\\"===x&&(m+="\\",x=t.charAt(++A)),A++,m+=x;if((x=t.charAt(A))!==d)return;for(F=m,y+=m+x,A++;A<h&&r(x=t.charAt(A));)y+=x,A++}else for(c="";A<h;){if((x=t.charAt(A))===d)D&&(m+=d+c,c=""),D=!0;else if(D){if(")"===x){y+=m+d+c,F=m;break}r(x)?c+=x:(m+=d+c+x,c="",D=!1)}else m+=x;A++}}if(")"===t.charAt(A))return!!u||(y+=")",C=this.decode.raw(this.unescape(C),e(s).test().end,{nonTerminated:!1}),F&&(l=e(l).test().end,F=this.decode.raw(this.unescape(F),l)),v={type:f?"image":"link",title:F||null,url:C},f?v.alt=this.decode.raw(this.unescape(p),E)||null:(b=this.enterLink(),v.children=this.tokenizeInline(p,E),b()),e(y)(v))}}}}),ex=l((e,t)=>{var r=es(),u=ey(),n=el();t.exports=a,a.locator=u;var i="link",o="full";function a(e,t,u){var a,s,l,c,D,f,p,d,h=this.options.commonmark,F=t.charAt(0),g=0,m=t.length,C="",E="",b=i,v="shortcut";if("!"===F&&(b="image",E=F,F=t.charAt(++g)),"["===F){for(g++,E+=F,f="",d=0;g<m;){if("["===(F=t.charAt(g)))p=!0,d++;else if("]"===F){if(!d)break;d--}"\\"===F&&(f+="\\",F=t.charAt(++g)),f+=F,g++}if(C=f,a=f,"]"===(F=t.charAt(g))){if(g++,C+=F,f="",!h)for(;g<m&&r(F=t.charAt(g));)f+=F,g++;if("["===(F=t.charAt(g))){for(s="",f+=F,g++;g<m&&!("["===(F=t.charAt(g))||"]"===F);)"\\"===F&&(s+="\\",F=t.charAt(++g)),s+=F,g++;"]"===(F=t.charAt(g))?(v=s?o:"collapsed",f+=s+F,g++):s="",C+=f,f=""}else{if(!a)return;s=a}if(!(v!==o&&p))return C=E+C,b===i&&this.inLink?null:!!u||(l=e.now(),l.column+=E.length,l.offset+=E.length,c={type:b+"Reference",identifier:n(s=v===o?s:a),label:s,referenceType:v},b===i?(D=this.enterLink(),c.children=this.tokenizeInline(a,l),D()):c.alt=this.decode.raw(this.unescape(a),l)||null,e(C)(c))}}}}),ek=l((e,t)=>{t.exports=function(e,t){var r=e.indexOf("**",t),u=e.indexOf("__",t);return -1===u?r:-1===r||u<r?u:r}}),ew=l((e,t)=>{var r=K(),u=es(),n=ek();function i(e,t,n){var i,o,a,s,l,c,D,f=0,p=t.charAt(f);if(!("*"!==p&&"_"!==p||t.charAt(++f)!==p)&&(o=this.options.pedantic,l=(a=p)+a,c=t.length,f++,s="",p="",!(o&&u(t.charAt(f)))))for(;f<c;){if(D=p,(p=t.charAt(f))===a&&t.charAt(f+1)===a&&(!o||!u(D))&&(p=t.charAt(f+2))!==a)return r(s)?!!n||(i=e.now(),i.column+=2,i.offset+=2,e(l+s+l)({type:"strong",children:this.tokenizeInline(s,i)})):void 0;o||"\\"!==p||(s+=p,p=t.charAt(++f)),s+=p,f++}}t.exports=i,i.locator=n}),eB=l((e,t)=>{t.exports=function(e){return u.test("number"==typeof e?r(e):e.charAt(0))};var r=String.fromCharCode,u=/\w/}),eq=l((e,t)=>{t.exports=function(e,t){var r=e.indexOf("*",t),u=e.indexOf("_",t);return -1===u?r:-1===r||u<r?u:r}}),eS=l((e,t)=>{var r=K(),u=eB(),n=es(),i=eq();function o(e,t,i){var o,a,s,l,c,D,f,p=0,d=t.charAt(p);if(!("*"!==d&&"_"!==d)&&(a=this.options.pedantic,c=d,s=d,D=t.length,p++,l="",d="",!(a&&n(t.charAt(p)))))for(;p<D;){if(f=d,(d=t.charAt(p))===s&&(!a||!n(f))){if((d=t.charAt(++p))!==s){if(!r(l)||f===s)return;if(!a&&"_"===s&&u(d)){l+=s;continue}return!!i||(o=e.now(),o.column++,o.offset++,e(c+l+s)({type:"emphasis",children:this.tokenizeInline(l,o)}))}l+=s}a||"\\"!==d||(l+=d,d=t.charAt(++p)),l+=d,p++}}t.exports=o,o.locator=i}),eT=l((e,t)=>{t.exports=function(e,t){return e.indexOf("~~",t)}}),eL=l((e,t)=>{var r=es(),u=eT();function n(e,t,u){var n,i,o,a="",s="",l="",c="";if(!(!this.options.gfm||"~"!==t.charAt(0)||"~"!==t.charAt(1)||r(t.charAt(2))))for(n=1,i=t.length,o=e.now(),o.column+=2,o.offset+=2;++n<i;){if("~"===(a=t.charAt(n))&&"~"===s&&(!l||!r(l)))return!!u||e("~~"+c+"~~")({type:"delete",children:this.tokenizeInline(c,o)});c+=s,l=s,s=a}}t.exports=n,n.locator=u}),eO=l((e,t)=>{t.exports=function(e,t){return e.indexOf("`",t)}}),eN=l((e,t)=>{var r=eO();function u(e,t,r){for(var u,n,i,o,a,s,l=t.length,c=0;c<l&&96===t.charCodeAt(c);)c++;if(!(0===c||c===l)){for(u=c,a=t.charCodeAt(c);c<l;){if(o=a,a=t.charCodeAt(c+1),96===o){if(void 0===n&&(n=c),i=c+1,96!==a&&i-n===u){s=!0;break}}else void 0!==n&&(n=void 0,i=void 0);c++}if(s){if(r)return!0;if(c=u,l=n,o=t.charCodeAt(c),a=t.charCodeAt(l-1),s=!1,l-c>2&&(32===o||10===o)&&(32===a||10===a)){for(c++,l--;c<l;){if(32!==(o=t.charCodeAt(c))&&10!==o){s=!0;break}c++}!0===s&&(u++,n--)}return e(t.slice(0,i))({type:"inlineCode",value:t.slice(u,n)})}}}t.exports=u,u.locator=r}),eR=l((e,t)=>{t.exports=function(e,t){for(var r=e.indexOf(`
// `,t);r>t&&" "===e.charAt(r-1);)r--;return r}}),eI=l((e,t)=>{var r=eR();t.exports=n,n.locator=r;var u=`
// `;function n(e,t,r){for(var n,i=t.length,o=-1,a="";++o<i;){if((n=t.charAt(o))===u)return o<2?void 0:!!r||e(a+=n)({type:"break"});if(" "!==n)return;a+=n}}}),ej=l((e,t)=>{t.exports=function(e,t,r){var u,n,i,o,a,s,l,c,D,f;if(r)return!0;for(o=(u=this.inlineMethods).length,n=this.inlineTokenizers,i=-1,D=t.length;++i<o;)!("text"===(c=u[i])||!n[c])&&((l=n[c].locator)||e.file.fail("Missing locator: `"+c+"`"),-1!==(s=l.call(this,t,1))&&s<D&&(D=s));a=t.slice(0,D),f=e.now(),this.decode(a,f,function(t,r,u){e(u||t)({type:"text",value:t})})}}),eP=l((e,t)=>{var r=C(),u=v(),n=y(),i=A(),o=N(),a=R();function s(e,t){this.file=t,this.offset={},this.options=r(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=n(t).toOffset,this.unescape=i(this,"escape"),this.decode=o(this)}t.exports=s;var l=s.prototype;function c(e){var t,r=[];for(t in e)r.push(t);return r}l.setOptions=z(),l.parse=H(),l.options=P(),l.exitStart=u("atStart",!0),l.enterList=u("inList",!1),l.enterLink=u("inLink",!1),l.enterBlock=u("inBlock",!1),l.interruptParagraph=[["thematicBreak"],["list"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}]],l.interruptList=[["atxHeading",{pedantic:!1}],["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}]],l.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}]],l.blockTokenizers={blankLine:G(),indentedCode:Z(),fencedCode:Y(),blockquote:X(),atxHeading:ee(),thematicBreak:et(),list:en(),setextHeading:ei(),html:ea(),definition:ec(),table:eD(),paragraph:ef()},l.inlineTokenizers={escape:ed(),autoLink:eF(),url:eC(),email:eb(),html:ev(),link:eA(),reference:ex(),strong:ew(),emphasis:eS(),deletion:eL(),code:eN(),break:eI(),text:ej()},l.blockMethods=c(l.blockTokenizers),l.inlineMethods=c(l.inlineTokenizers),l.tokenizeBlock=a("block"),l.tokenizeInline=a("inline"),l.tokenizeFactory=a}),ez=l((e,t)=>{var r=b(),u=C(),n=eP();function i(e){var t=this.data("settings"),i=r(n);i.prototype.options=u(i.prototype.options,t,e),this.Parser=i}t.exports=i,i.Parser=n}),e$=l((e,t)=>{t.exports=function(e){if(e)throw e}}),eU=l((e,t)=>{t.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}}),eM=l((e,t)=>{var r=Object.prototype.hasOwnProperty,u=Object.prototype.toString,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===u.call(e)},a=function(e){if(!e||"[object Object]"!==u.call(e))return!1;var t,n=r.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;for(t in e);return typeof t>"u"||r.call(e,t)},s=function(e,t){n&&"__proto__"===t.name?n(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if("__proto__"===t){if(!r.call(e,t))return;if(i)return i(e,t).value}return e[t]};t.exports=function e(){var t,r,u,n,i,c,D=arguments[0],f=1,p=arguments.length,d=!1;for("boolean"==typeof D&&(d=D,D=arguments[1]||{},f=2),(null==D||"object"!=typeof D&&"function"!=typeof D)&&(D={});f<p;++f)if(t=arguments[f],null!=t)for(r in t)u=l(D,r),D!==(n=l(t,r))&&(d&&n&&(a(n)||(i=o(n)))?(i?(i=!1,c=u&&o(u)?u:[]):c=u&&a(u)?u:{},s(D,{name:r,newValue:e(d,c,n)})):"u">typeof n&&s(D,{name:r,newValue:n}));return D}}),eV=l((e,t)=>{t.exports=e=>{if("[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}}),e_=l((e,t)=>{var r=[].slice;t.exports=function(e,t){var u;return function(){var t,o=r.call(arguments,0),a=e.length>o.length;a&&o.push(n);try{t=e.apply(null,o)}catch(e){if(a&&u)throw e;return n(e)}a||(t&&"function"==typeof t.then?t.then(i,n):t instanceof Error?n(t):i(t))};function n(){u||(u=!0,t.apply(null,arguments))}function i(e){n(null,e)}}}),eH=l((e,t)=>{var r=e_();t.exports=n,n.wrap=r;var u=[].slice;function n(){var e=[],t={};return t.run=function(){var t=-1,n=u.call(arguments,0,-1),i=arguments[arguments.length-1];if("function"!=typeof i)throw Error("Expected function as last argument, not "+i);(function o(a){var s=e[++t],l=u.call(arguments,0),c=l.slice(1),D=n.length,f=-1;if(a){i(a);return}for(;++f<D;)(null===c[f]||void 0===c[f])&&(c[f]=n[f]);n=c,s?r(s,o).apply(null,n):i.apply(null,[null].concat(n))}).apply(null,[null].concat(n))},t.use=function(r){if("function"!=typeof r)throw Error("Expected `fn` to be a function, not "+r);return e.push(r),t},t}}),eG=l((e,t)=>{var r={}.hasOwnProperty;function u(e){return e&&"object"==typeof e||(e={}),i(e.line)+":"+i(e.column)}function n(e){return e&&"object"==typeof e||(e={}),u(e.start)+"-"+u(e.end)}function i(e){return e&&"number"==typeof e?e:1}t.exports=function(e){return e&&"object"==typeof e?r.call(e,"position")||r.call(e,"type")?n(e.position):r.call(e,"start")||r.call(e,"end")?n(e):r.call(e,"line")||r.call(e,"column")?u(e):"":""}}),eW=l((e,t)=>{var r=eG();function u(){}t.exports=i,u.prototype=Error.prototype,i.prototype=new u;var n=i.prototype;function i(e,t,u){var n,i,o,a,s;"string"==typeof t&&(u=t,t=null),s=[null,null],"string"==typeof(o=u)&&(-1===(a=o.indexOf(":"))?s[1]=o:(s[0]=o.slice(0,a),s[1]=o.slice(a+1))),n=r(t)||"1:1",i={start:{line:null,column:null},end:{line:null,column:null}},t&&t.position&&(t=t.position),t&&(t.start?(i=t,t=t.start):i.start=t),e.stack&&(this.stack=e.stack,e=e.message),this.message=e,this.name=n,this.reason=e,this.line=t?t.line:null,this.column=t?t.column:null,this.location=i,this.source=s[0],this.ruleId=s[1]}n.file="",n.name="",n.reason="",n.message="",n.stack="",n.fatal=null,n.column=null,n.line=null}),eJ=l(e=>{e.basename=function(e,r){var u,n,i,o,a=0,s=-1;if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');if(t(e),u=e.length,void 0===r||!r.length||r.length>e.length){for(;u--;)if(47===e.charCodeAt(u)){if(i){a=u+1;break}}else s<0&&(i=!0,s=u+1);return s<0?"":e.slice(a,s)}if(r===e)return"";for(n=-1,o=r.length-1;u--;)if(47===e.charCodeAt(u)){if(i){a=u+1;break}}else n<0&&(i=!0,n=u+1),o>-1&&(e.charCodeAt(u)===r.charCodeAt(o--)?o<0&&(s=u):(o=-1,s=n));return a===s?s=n:s<0&&(s=e.length),e.slice(a,s)},e.dirname=function(e){var r,u,n;if(t(e),!e.length)return".";for(r=-1,n=e.length;--n;)if(47===e.charCodeAt(n)){if(u){r=n;break}}else u||(u=!0);return r<0?47===e.charCodeAt(0)?"/":".":1===r&&47===e.charCodeAt(0)?"//":e.slice(0,r)},e.extname=function(e){var r,u,n,i=-1,o=0,a=-1,s=0;for(t(e),n=e.length;n--;){if(47===(u=e.charCodeAt(n))){if(r){o=n+1;break}continue}a<0&&(r=!0,a=n+1),46===u?i<0?i=n:1!==s&&(s=1):i>-1&&(s=-1)}return i<0||a<0||0===s||1===s&&i===a-1&&i===o+1?"":e.slice(i,a)},e.join=function(){for(var e,r,u,n,i=-1;++i<arguments.length;)t(arguments[i]),arguments[i]&&(n=void 0===n?arguments[i]:n+"/"+arguments[i]);return void 0===n?".":(t(e=n),r=47===e.charCodeAt(0),(u=function(e,t){for(var r,u,n="",i=0,o=-1,a=0,s=-1;++s<=e.length;){if(s<e.length)r=e.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(!(o===s-1||1===a)){if(o!==s-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){if((u=n.lastIndexOf("/"))!==n.length-1){u<0?(n="",i=0):i=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),o=s,a=0;continue}}else if(n.length){n="",i=0,o=s,a=0;continue}}t&&(n=n.length?n+"/..":"..",i=2)}else n.length?n+="/"+e.slice(o+1,s):n=e.slice(o+1,s),i=s-o-1}o=s,a=0}else 46===r&&a>-1?a++:a=-1}return n}(e,!r)).length||r||(u="."),u.length&&47===e.charCodeAt(e.length-1)&&(u+="/"),r?"/"+u:u)},e.sep="/";function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}}),eZ=l(e=>{e.cwd=function(){return"/"}}),eY=l((e,t)=>{var r=eJ(),u=eZ(),n=eU();t.exports=a;var i={}.hasOwnProperty,o=["history","path","basename","stem","extname","dirname"];function a(e){var t,r;if(e){if("string"==typeof e||n(e))e={contents:e};else if("message"in e&&"messages"in e)return e}else e={};if(!(this instanceof a))return new a(e);for(this.data={},this.messages=[],this.history=[],this.cwd=u.cwd(),r=-1;++r<o.length;)t=o[r],i.call(e,t)&&(this[t]=e[t]);for(t in e)0>o.indexOf(t)&&(this[t]=e[t])}function s(e,t){if(e&&e.indexOf(r.sep)>-1)throw Error("`"+t+"` cannot be a path: did not expect `"+r.sep+"`")}function l(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function c(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}a.prototype.toString=function(e){return(this.contents||"").toString(e)},Object.defineProperty(a.prototype,"path",{get:function(){return this.history[this.history.length-1]},set:function(e){l(e,"path"),this.path!==e&&this.history.push(e)}}),Object.defineProperty(a.prototype,"dirname",{get:function(){return"string"==typeof this.path?r.dirname(this.path):void 0},set:function(e){c(this.path,"dirname"),this.path=r.join(e||"",this.basename)}}),Object.defineProperty(a.prototype,"basename",{get:function(){return"string"==typeof this.path?r.basename(this.path):void 0},set:function(e){l(e,"basename"),s(e,"basename"),this.path=r.join(this.dirname||"",e)}}),Object.defineProperty(a.prototype,"extname",{get:function(){return"string"==typeof this.path?r.extname(this.path):void 0},set:function(e){if(s(e,"extname"),c(this.path,"extname"),e){if(46!==e.charCodeAt(0))throw Error("`extname` must start with `.`");if(e.indexOf(".",1)>-1)throw Error("`extname` cannot contain multiple dots")}this.path=r.join(this.dirname,this.stem+(e||""))}}),Object.defineProperty(a.prototype,"stem",{get:function(){return"string"==typeof this.path?r.basename(this.path,this.extname):void 0},set:function(e){l(e,"stem"),s(e,"stem"),this.path=r.join(this.dirname||"",e+(this.extname||""))}})}),eK=l((e,t)=>{var r=eW(),u=eY();t.exports=u,u.prototype.message=function(e,t,u){var n=new r(e,t,u);return this.path&&(n.name=this.path+":"+n.name,n.file=this.path),n.fatal=!1,this.messages.push(n),n},u.prototype.info=function(){var e=this.message.apply(this,arguments);return e.fatal=null,e},u.prototype.fail=function(){var e=this.message.apply(this,arguments);throw e.fatal=!0,e}}),eQ=l((e,t)=>{t.exports=eK()}),eX=l((e,t)=>{var r=e$(),u=eU(),n=eM(),i=eV(),o=eH(),a=eQ();t.exports=(function e(){var t,u=[],g=o(),m={},C=-1;return E.data=function(e,r){return"string"==typeof e?2==arguments.length?(d("data",t),m[e]=r,E):l.call(m,e)&&m[e]||null:e?(d("data",t),m=e,E):m},E.freeze=b,E.attachers=u,E.use=function(e){var r;if(d("use",t),null!=e){if("function"==typeof e)l.apply(null,arguments);else if("object"==typeof e)"length"in e?a(e):o(e);else throw Error("Expected usable value, not `"+e+"`")}return r&&(m.settings=n(m.settings||{},r)),E;function o(e){a(e.plugins),e.settings&&(r=n(r||{},e.settings))}function a(e){var t=-1;if(null!=e){if("object"==typeof e&&"length"in e)for(;++t<e.length;)!function(e){if("function"==typeof e)l(e);else if("object"==typeof e)"length"in e?l.apply(null,e):o(e);else throw Error("Expected usable value, not `"+e+"`")}(e[t]);else throw Error("Expected a list of plugins, not `"+e+"`")}}function l(e,t){var r=function(e){for(var t=-1;++t<u.length;)if(u[t][0]===e)return u[t]}(e);r?(i(r[1])&&i(t)&&(t=n(!0,r[1],t)),r[1]=t):u.push(s.call(arguments))}},E.parse=function(e){var t,r=a(e);return b(),f("parse",t=E.Parser),D(t,"parse")?new t(String(r),r).parse():t(String(r),r)},E.stringify=function(e,t){var r,u=a(t);return b(),p("stringify",r=E.Compiler),h(e),D(r,"compile")?new r(e,u).compile():r(e,u)},E.run=v,E.runSync=function(e,t){var u,n;return v(e,t,function(e,t){n=!0,u=t,r(e)}),F("runSync","run",n),u},E.process=y,E.processSync=function(e){var t,u;return b(),f("processSync",E.Parser),p("processSync",E.Compiler),y(t=a(e),function(e){u=!0,r(e)}),F("processSync","process",u),t},E;function E(){for(var t=e(),r=-1;++r<u.length;)t.use.apply(null,u[r]);return t.data(n(!0,{},m)),t}function b(){var e,r;if(t)return E;for(;++C<u.length;)!1!==(e=u[C])[1]&&(!0===e[1]&&(e[1]=void 0),"function"==typeof(r=e[0].apply(E,e.slice(1)))&&g.use(r));return t=!0,C=1/0,E}function v(e,t,r){if(h(e),b(),r||"function"!=typeof t||(r=t,t=null),!r)return new Promise(u);function u(u,n){g.run(e,a(t),function(t,i,o){i=i||e,t?n(t):u?u(i):r(null,i,o)})}u(null,r)}function y(e,t){if(b(),f("process",E.Parser),p("process",E.Compiler),!t)return new Promise(r);function r(r,u){var n=a(e);c.run(E,{file:n},function(e){e?u(e):r?r(n):t(null,n)})}r(null,t)}})().freeze();var s=[].slice,l={}.hasOwnProperty,c=o().use(function(e,t){t.tree=e.parse(t.file)}).use(function(e,t,r){e.run(t.tree,t.file,function(e,u,n){e?r(e):(t.tree=u,t.file=n,r())})}).use(function(e,t){var r=e.stringify(t.tree,t.file);null==r||("string"==typeof r||u(r)?("value"in t.file&&(t.file.value=r),t.file.contents=r):t.file.result=r)});function D(e,t){return"function"==typeof e&&e.prototype&&(function(e){var t;for(t in e)return!0;return!1}(e.prototype)||t in e.prototype)}function f(e,t){if("function"!=typeof t)throw Error("Cannot `"+e+"` without `Parser`")}function p(e,t){if("function"!=typeof t)throw Error("Cannot `"+e+"` without `Compiler`")}function d(e,t){if(t)throw Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function h(e){if(!e||"string"!=typeof e.type)throw Error("Expected node, got `"+e+"`")}function F(e,t,r){if(!r)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}}),e0={};c(e0,{languages:()=>rj,options:()=>rP,parsers:()=>rz,printers:()=>r5});var e1=(e,t,r,u)=>{if(!(e&&null==t))return t.replaceAll?t.replaceAll(r,u):r.global?t.replace(r,u):t.split(r).join(u)},e2=(e,t,r)=>{if(!(e&&null==t))return Array.isArray(t)||"string"==typeof t?t[r<0?t.length+r:r]:t.at(r)},e3=f(p(),1),e8="string",e6="array",e7="cursor",e9="indent",e4="align",e5="trim",te="group",tt="fill",tr="if-break",tu="indent-if-break",tn="line-suffix",ti="line-suffix-boundary",to="line",ta="label",ts="break-parent",tl=new Set([e7,e9,e4,e5,te,tt,tr,tu,tn,ti,to,ta,ts]),tc=function(e){if("string"==typeof e)return e8;if(Array.isArray(e))return e6;if(!e)return;let{type:t}=e;if(tl.has(t))return t},tD=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e),tf=class extends Error{name="InvalidDocError";constructor(e){super(function(e){let t=null===e?"null":typeof e;if("string"!==t&&"object"!==t)return`Unexpected doc '${t}', 
// Expected it to be 'string' or 'object'.`;if(tc(e))throw Error("doc is valid.");let r=Object.prototype.toString.call(e);if("[object Object]"!==r)return`Unexpected doc '${r}'.`;let u=tD([...tl].map(e=>`'${e}'`));return`Unexpected doc.type '${e.type}'.
// Expected it to be ${u}.`}(e)),this.doc=e}},tp={},td=function(e,t,r,u){let n=[e];for(;n.length>0;){let e=n.pop();if(e===tp){r(n.pop());continue}r&&n.push(e,tp);let i=tc(e);if(!i)throw new tf(e);if((null==t?void 0:t(e))!==!1)switch(i){case e6:case tt:{let t=i===e6?e:e.parts;for(let e=t.length,r=e-1;r>=0;--r)n.push(t[r]);break}case tr:n.push(e.flatContents,e.breakContents);break;case te:if(u&&e.expandedStates)for(let t=e.expandedStates.length,r=t-1;r>=0;--r)n.push(e.expandedStates[r]);else n.push(e.contents);break;case e4:case e9:case tu:case ta:case tn:n.push(e.contents);break;case e8:case e7:case e5:case ti:case to:case ts:break;default:throw new tf(e)}}},th=()=>{};function tF(e){return th(e),{type:e9,contents:e}}function tg(e,t){return th(t),{type:e4,contents:t,n:e}}function tm(e,t={}){return th(e),th(t.expandedStates,!0),{type:te,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function tC(e){return tg({type:"root"},e)}function tE(e){return th(e),{type:tt,parts:e}}var tb={type:ts},tv={type:to,hard:!0},ty={type:to},tA={type:to,soft:!0},tx=[tv,tb],tk=[{type:to,hard:!0,literal:!0},tb];function tw(e,t){th(e),th(t);let r=[];for(let u=0;u<t.length;u++)0!==u&&r.push(e),r.push(t[u]);return r}var tB=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,tq=e=>{var t;return!(12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510||(t=e)>=4352&&t<=4447||8986===t||8987===t||9001===t||9002===t||t>=9193&&t<=9196||9200===t||9203===t||9725===t||9726===t||9748===t||9749===t||t>=9800&&t<=9811||9855===t||9875===t||9889===t||9898===t||9899===t||9917===t||9918===t||9924===t||9925===t||9934===t||9940===t||9962===t||9970===t||9971===t||9973===t||9978===t||9981===t||9989===t||9994===t||9995===t||10024===t||10060===t||10062===t||t>=10067&&t<=10069||10071===t||t>=10133&&t<=10135||10160===t||10175===t||11035===t||11036===t||11088===t||11093===t||t>=11904&&t<=11929||t>=11931&&t<=12019||t>=12032&&t<=12245||t>=12272&&t<=12287||t>=12289&&t<=12350||t>=12353&&t<=12438||t>=12441&&t<=12543||t>=12549&&t<=12591||t>=12593&&t<=12686||t>=12688&&t<=12771||t>=12783&&t<=12830||t>=12832&&t<=12871||t>=12880&&t<=19903||t>=19968&&t<=42124||t>=42128&&t<=42182||t>=43360&&t<=43388||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65040&&t<=65049||t>=65072&&t<=65106||t>=65108&&t<=65126||t>=65128&&t<=65131||t>=94176&&t<=94180||94192===t||94193===t||t>=94208&&t<=100343||t>=100352&&t<=101589||t>=101632&&t<=101640||t>=110576&&t<=110579||t>=110581&&t<=110587||110589===t||110590===t||t>=110592&&t<=110882||110898===t||t>=110928&&t<=110930||110933===t||t>=110948&&t<=110951||t>=110960&&t<=111355||126980===t||127183===t||127374===t||t>=127377&&t<=127386||t>=127488&&t<=127490||t>=127504&&t<=127547||t>=127552&&t<=127560||127568===t||127569===t||t>=127584&&t<=127589||t>=127744&&t<=127776||t>=127789&&t<=127797||t>=127799&&t<=127868||t>=127870&&t<=127891||t>=127904&&t<=127946||t>=127951&&t<=127955||t>=127968&&t<=127984||127988===t||t>=127992&&t<=128062||128064===t||t>=128066&&t<=128252||t>=128255&&t<=128317||t>=128331&&t<=128334||t>=128336&&t<=128359||128378===t||128405===t||128406===t||128420===t||t>=128507&&t<=128591||t>=128640&&t<=128709||128716===t||t>=128720&&t<=128722||t>=128725&&t<=128727||t>=128732&&t<=128735||128747===t||128748===t||t>=128756&&t<=128764||t>=128992&&t<=129003||129008===t||t>=129292&&t<=129338||t>=129340&&t<=129349||t>=129351&&t<=129535||t>=129648&&t<=129660||t>=129664&&t<=129672||t>=129680&&t<=129725||t>=129727&&t<=129733||t>=129742&&t<=129755||t>=129760&&t<=129768||t>=129776&&t<=129784||t>=131072&&t<=196605||t>=196608&&t<=262141)},tS=/[^\x20-\x7F]/,tT=function(e){if(!e)return 0;if(!tS.test(e))return e.length;e=e.replace(tB(),"  ");let t=0;for(let r of e){let e=r.codePointAt(0);e<=31||e>=127&&e<=159||e>=768&&e<=879||(t+=tq(e)?1:2)}return t},tL=e=>{if(Array.isArray(e))return e;if(e.type!==tt)throw Error(`Expect doc to be 'array' or '${tt}'.`);return e.parts};function tO(e,t){if("string"==typeof e)return t(e);let r=new Map;return function e(u){if(r.has(u))return r.get(u);let n=function(r){switch(tc(r)){case e6:return t(r.map(e));case tt:return t({...r,parts:r.parts.map(e)});case tr:return t({...r,breakContents:e(r.breakContents),flatContents:e(r.flatContents)});case te:{let{expandedStates:u,contents:n}=r;return n=u?(u=u.map(e))[0]:e(n),t({...r,contents:n,expandedStates:u})}case e4:case e9:case tu:case ta:case tn:return t({...r,contents:e(r.contents)});case e8:case e7:case e5:case ti:case to:case ts:return t(r);default:throw new tf(r)}}(u);return r.set(u,n),n}(e)}function tN(e){if(e.length>0){let t=e2(!1,e,-1);t.expandedStates||t.break||(t.break="propagated")}return null}function tR(e){let t=[],r=e.filter(Boolean);for(;r.length>0;){let e=r.shift();if(e){if(Array.isArray(e)){r.unshift(...e);continue}if(t.length>0&&"string"==typeof e2(!1,t,-1)&&"string"==typeof e){t[t.length-1]+=e;continue}t.push(e)}}return t}function tI(e,t=tk){return tO(e,e=>"string"==typeof e?tw(t,e.split(`
// `)):e)}var tj=Symbol("MODE_BREAK"),tP=Symbol("MODE_FLAT"),tz=Symbol("cursor");function t$(){return{value:"",length:0,queue:[]}}function tU(e,t,r){let u="dedent"===t.type?e.queue.slice(0,-1):[...e.queue,t],n="",i=0,o=0,a=0;for(let e of u)switch(e.type){case"indent":c(),r.useTabs?s(1):l(r.tabWidth);break;case"stringAlign":c(),n+=e.n,i+=e.n.length;break;case"numberAlign":o+=1,a+=e.n;break;default:throw Error(`Unexpected type '${e.type}'`)}return D(),{...e,value:n,length:i,queue:u};function s(e){n+="	".repeat(e),i+=r.tabWidth*e}function l(e){n+=" ".repeat(e),i+=e}function c(){r.useTabs?(o>0&&s(o),o=0,a=0):D()}function D(){a>0&&l(a),o=0,a=0}}function tM(e){let t=0,r=0,u=e.length;e:for(;u--;){let n=e[u];if(n===tz){r++;continue}for(let r=n.length-1;r>=0;r--){let i=n[r];if(" "===i||"	"===i)t++;else{e[u]=n.slice(0,r+1);break e}}}if(t>0||r>0)for(e.length=u+1;r-- >0;)e.push(tz);return t}function tV(e,t,r,u,n,i){if(r===Number.POSITIVE_INFINITY)return!0;let o=t.length,a=[e],s=[];for(;r>=0;){if(0===a.length){if(0===o)return!0;a.push(t[--o]);continue}let{mode:e,doc:l}=a.pop();switch(tc(l)){case e8:s.push(l),r-=tT(l);break;case e6:case tt:{let t=tL(l);for(let r=t.length-1;r>=0;r--)a.push({mode:e,doc:t[r]});break}case e9:case e4:case tu:case ta:a.push({mode:e,doc:l.contents});break;case e5:r+=tM(s);break;case te:{if(i&&l.break)return!1;let t=l.break?tj:e,r=l.expandedStates&&t===tj?e2(!1,l.expandedStates,-1):l.contents;a.push({mode:t,doc:r});break}case tr:{let t=(l.groupId?n[l.groupId]||tP:e)===tj?l.breakContents:l.flatContents;t&&a.push({mode:e,doc:t});break}case to:if(e===tj||l.hard)return!0;l.soft||(s.push(" "),r--);break;case tn:u=!0;break;case ti:if(u)return!1}}return!1}function t_(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var tH=function(e,t){let r=e.match(RegExp(`(${t_(t)})+`,"g"));return null===r?0:r.reduce((e,r)=>Math.max(e,r.length/t.length),0)},tG=function(e,t){let r=e.match(RegExp(`(${t_(t)})+`,"g"));if(null===r)return 0;let u=new Map,n=0;for(let e of r){let r=e.length/t.length;u.set(r,!0),r>n&&(n=r)}for(let e=1;e<n;e++)if(!u.get(e))return e;return n+1},tW=function(e,t){let r=!0===t||"'"===t?"'":'"',u="'"===r?'"':"'",n=0,i=0;for(let t of e)t===r?n++:t===u&&i++;return n>i?u:r},tJ=class extends Error{name="UnexpectedNodeError";constructor(e,t,r="type"){super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`),this.node=e}},tZ=f(p(),1),tY=RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)","s"),tK=function(e){let t=e.match(tY);if(!t)return{content:e};let{startDelimiter:r,language:u,value:n="",endDelimiter:i}=t.groups,o=u.trim()||"yaml";if("+++"===r&&(o="toml"),"yaml"!==o&&r!==i)return{content:e};let[a]=t;return{frontMatter:{type:"front-matter",lang:o,value:n,startDelimiter:r,endDelimiter:i,raw:a.replace(/\n$/,"")},content:e1(!1,a,/[^\n]/g," ")+e.slice(a.length)}},tQ=["format","prettier"];function tX(e){let t=`@(${tQ.join("|")})`,r=RegExp(`<!--\\s*${t}\\s*-->|{\\s*\\/\\*\\s*${t}\\s*\\*\\/\\s*}|<!--.*\r?
// [\\s\\S]*(^|
// )[^\\S
// ]*${t}[^\\S
// ]*($|
// )[\\s\\S]*
// .*-->`,"m"),u=e.match(r);return(null==u?void 0:u.index)===0}var t0=new Set(["position","raw"]);function t1(e,t,r){var u;if(("front-matter"===e.type||"code"===e.type||"yaml"===e.type||"import"===e.type||"export"===e.type||"jsx"===e.type)&&delete t.value,"list"===e.type&&delete t.isAligned,("list"===e.type||"listItem"===e.type)&&delete t.spread,"text"===e.type)return null;if("inlineCode"===e.type&&(t.value=e1(!1,e.value,`
// `," ")),"wikiLink"===e.type&&(t.value=e1(!1,e.value.trim(),/[\t\n]+/g," ")),("definition"===e.type||"linkReference"===e.type||"imageReference"===e.type)&&(t.label=(0,tZ.default)(e.label)),("link"===e.type||"image"===e.type)&&e.url&&e.url.includes("("))for(let r of"<>")t.url=e1(!1,e.url,r,encodeURIComponent(r));if(("definition"===e.type||"link"===e.type||"image"===e.type)&&e.title&&(t.title=e1(!1,e.title,/\\(?=["')])/g,"")),(null==r?void 0:r.type)==="root"&&r.children.length>0&&(r.children[0]===e||(null==(u=r.children[0])?void 0:u.type)==="front-matter"&&r.children[1]===e)&&"html"===e.type&&tX(e.value))return null}t1.ignoredProperties=t0;var t2=/(?:[\u02ea-\u02eb\u1100-\u11ff\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u303f\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u3190-\u4dbf\u4e00-\u9fff\ua700-\ua707\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufe10-\ufe1f\ufe30-\ufe6f\uff00-\uffef]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883\ud885-\ud887][\udc00-\udfff]|\ud81b[\udfe3]|\ud82b[\udff0-\udff3\udff5-\udffb\udffd-\udffe]|\ud82c[\udc00-\udd22\udd32\udd50-\udd52\udd55\udd64-\udd67]|\ud83c[\ude00\ude50-\ude51]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf39\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a\udf50-\udfff]|\ud888[\udc00-\udfaf])(?:[\ufe00-\ufe0f]|\udb40[\udd00-\uddef])?/,t3=/[\u1100-\u11ff\u3001-\u3003\u3008-\u3011\u3013-\u301f\u302e-\u3030\u3037\u30fb\u3131-\u318e\u3200-\u321e\u3260-\u327e\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ufe45-\ufe46\uff61-\uff65\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/,t8=/[\u0021-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e\u00a1\u00a7\u00ab\u00b6-\u00b7\u00bb\u00bf\u037e\u0387\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061d-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964-\u0965\u0970\u09fd\u0a76\u0af0\u0c77\u0c84\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9-\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u1a1e-\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1b7d-\u1b7e\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e-\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d-\u207e\u208d-\u208e\u2308-\u230b\u2329-\u232a\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e4f\u2e52-\u2e5d\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe-\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce-\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e-\ua92f\ua95f\ua9c1-\ua9cd\ua9de-\ua9df\uaa5c-\uaa5f\uaade-\uaadf\uaaf0-\uaaf1\uabeb\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud801[\udd6f]|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udead\udf55-\udf59\udf86-\udf89]|\ud804[\udc47-\udc4d\udcbb-\udcbc\udcbe-\udcc1\udd40-\udd43\udd74-\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5a-\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udeb9\udf3c-\udf3e]|\ud806[\udc3b\udd44-\udd46\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2\udf00-\udf09]|\ud807[\udc41-\udc45\udc70-\udc71\udef7-\udef8\udf43-\udf4f\udfff]|\ud809[\udc70-\udc74]|\ud80b[\udff1-\udff2]|\ud81a[\ude6e-\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|\ud82f[\udc9f]|\ud836[\ude87-\ude8b]|\ud83a[\udd5e-\udd5f]/;async function t6(e,t){if("yaml"===e.lang){let r=e.value.trim(),u=r?await t(r,{parser:"yaml"}):"";return tC([e.startDelimiter,tx,u,u?tx:"",e.endDelimiter])}}var t7=e=>String(e).split(/[/\\]/).pop();function t9(e,t){if(!t)return;let r=t7(t).toLowerCase();return e.find(({filenames:e})=>null==e?void 0:e.some(e=>e.toLowerCase()===r))??e.find(({extensions:e})=>null==e?void 0:e.some(e=>r.endsWith(e)))}var t4=function(e,t){let r=e.plugins.flatMap(e=>e.languages??[]),u=function(e,t){if(t)return e.find(({name:e})=>e.toLowerCase()===t)??e.find(({aliases:e})=>null==e?void 0:e.includes(t))??e.find(({extensions:e})=>null==e?void 0:e.includes(`.${t}`))}(r,t.language)??t9(r,t.physicalFile)??t9(r,t.file)??void t.physicalFile;return null==u?void 0:u.parsers[0]},t5=new Proxy(()=>{},{get:()=>t5});function re(e){return e.position.start.offset}function rt(e){return e.position.end.offset}var rr=new Set(["liquidNode","inlineCode","emphasis","esComment","strong","delete","wikiLink","link","linkReference","image","imageReference","footnote","footnoteReference","sentence","whitespace","word","break","inlineMath"]),ru=new Set([...rr,"tableCell","paragraph","heading"]),rn="non-cjk",ri="cj-letter",ro="k-letter",ra="cjk-punctuation";function rs(e){let t=[],r=e.split(/([\t\n ]+)/);for(let[e,n]of r.entries()){if(e%2==1){t.push({type:"whitespace",value:/\n/.test(n)?`
// `:" "});continue}if((0===e||e===r.length-1)&&""===n)continue;let i=n.split(RegExp(`(${t2.source})`));for(let[e,t]of i.entries())if(!((0===e||e===i.length-1)&&""===t)){if(e%2==0){""!==t&&u({type:"word",value:t,kind:rn,hasLeadingPunctuation:t8.test(t[0]),hasTrailingPunctuation:t8.test(e2(!1,t,-1))});continue}u(t8.test(t)?{type:"word",value:t,kind:ra,hasLeadingPunctuation:!0,hasTrailingPunctuation:!0}:{type:"word",value:t,kind:t3.test(t)?ro:ri,hasLeadingPunctuation:!1,hasTrailingPunctuation:!1})}}return t;function u(e){let r=e2(!1,t,-1);(null==r?void 0:r.type)!=="word"||r.kind===rn&&e.kind===ra||r.kind===ra&&e.kind===rn||[r.value,e.value].some(e=>/\u3000/.test(e))||t.push({type:"whitespace",value:""}),t.push(e)}}function rl(e,t){let[,r,u,n]=t.slice(e.position.start.offset,e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);return{numberText:r,marker:u,leadingSpaces:n}}function rc(e,t){let{value:r}=e;return e.position.end.offset===t.length&&r.endsWith(`
// `)&&t.endsWith(`
// `)?r.slice(0,-1):r}function rD(e,t){return function e(r,u,n){let i={...t(r,u,n)};return i.children&&(i.children=i.children.map((t,r)=>e(t,r,[i,...n]))),i}(e,null,[])}function rf(e){if((null==e?void 0:e.type)!=="link"||1!==e.children.length)return!1;let[t]=e.children;return re(e)===re(t)&&rt(e)===rt(t)}var rp=null;function rd(e){if(null!==rp&&(rp.property,1)){let e=rp;return rp=rd.prototype=null,e}return rp=rd.prototype=e??Object.create(null),new rd}for(let e=0;e<=10;e++)rd();var rh=function(e,t="type"){return rd(e),function(r){let u=r[t],n=e[u];if(!Array.isArray(n))throw Object.assign(Error(`Missing visitor keys for '${u}'.`),{node:r});return n}}({"front-matter":[],root:["children"],paragraph:["children"],sentence:["children"],word:[],whitespace:[],emphasis:["children"],strong:["children"],delete:["children"],inlineCode:[],wikiLink:[],link:["children"],image:[],blockquote:["children"],heading:["children"],code:[],html:[],list:["children"],thematicBreak:[],linkReference:["children"],imageReference:[],definition:[],footnote:["children"],footnoteReference:[],footnoteDefinition:["children"],table:["children"],tableCell:["children"],break:[],liquidNode:[],import:[],export:[],esComment:[],jsx:[],math:[],inlineMath:[],tableRow:["children"],listItem:["children"],text:[]}),rF=/^.$/su,rg=new Set(["heading","tableCell","link","wikiLink"]),rm=new Set(`$(\xa3\xA5\xb7'"\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u301D\uFE59\uFE5B\uFF04\uFF08\uFF3B\uFF5B\uFFE1\uFFE5[{\u2035\uFE34\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE4F\u3018\uFF5F\xab`),rC=new Set(`!%),.:;?]}\xa2\xB0\xb7'"\u2020\u2021\u203A\u2103\u2236\u3001\u3002\u3003\u3006\u3015\u3017\u301E\uFE5A\uFE5C\uFF01\uFF02\uFF05\uFF07\uFF09\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF3D\uFF5D\uFF5E\u2013\u2014\u2022\u3009\u300B\u300D\uFE30\uFE31\uFE32\uFE33\uFE50\uFE51\uFE52\uFE53\uFE54\uFE55\uFE56\uFE58\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE57\uFF5C\uFF64\u300F\u3011\u3019\u301F\uFF60\xbb\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\u2010\u30A0\u301C\uFF5E\u203C\u2047\u2048\u2049\u30FB\u3099\u309A`),rE=new Set("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");function rb(e){return e===rn||e===ri||e===ro}function rv(e){return e===rn||e===ro}function ry(e,t,r,u){if("preserve"===r&&t===`
// `)return tx;let n=" "===t||t===`
// `&&function(e,t){if(t)return!0;let{previous:r,next:u}=e;if(!r||!u)return!0;let n=r.kind,i=u.kind;return!!(rv(n)&&rv(i))||n===ro&&i===ri||i===ro&&n===ri||n!==ra&&i!==ra&&(n!==ri||i!==ri)&&(!!(rE.has(u.value[0])||rE.has(e2(!1,r.value,-1)))||!r.hasTrailingPunctuation&&!u.hasLeadingPunctuation&&function({parent:e}){if(void 0===e.usesCJSpaces){let t={" ":0,"":0},{children:r}=e;for(let e=1;e<r.length-1;++e){let u=r[e];if("whitespace"===u.type&&(" "===u.value||""===u.value)){let n=r[e-1].kind,i=r[e+1].kind;(n===ri&&i===rn||n===rn&&i===ri)&&++t[u.value]}}e.usesCJSpaces=t[" "]>t[""]}return e.usesCJSpaces}(e))}(e,u);return!function(e,t,r,u,n){if("always"!==r||e.hasAncestor(e=>rg.has(e.type)))return!1;if(u)return""!==t;if(" "===t)return!0;let{previous:i,next:o}=e;return!(""===t&&((null==i?void 0:i.kind)===ro&&rb(null==o?void 0:o.kind)||(null==o?void 0:o.kind)===ro&&rb(null==i?void 0:i.kind))||!n&&(o&&rC.has(o.value[0])||i&&rm.has(e2(!1,i.value,-1))))}(e,t,r,u,n)?n?" ":"":n?ty:tA}var rA=new Set(["listItem","definition","footnoteDefinition"]);function rx(e,t,r,u){let{node:n}=e,i=null===n.checked?"":n.checked?"[x] ":"[ ] ";return[i,rw(e,t,r,{processor({node:e,isFirst:n}){var o;if(n&&"list"!==e.type)return tg(" ".repeat(i.length),r());let a=" ".repeat((o=t.tabWidth-u.length)<0?0:o>3?3:o);return[a,tg(a,r())]}})]}function rk(e,t){return function(e,t,r){let u=-1;for(let n of t.children)if(n.type===e.type&&r(n)?u++:u=-1,n===e)return u}(e,t,t=>t.ordered===e.ordered)}function rw(e,t,r,u={}){let{postprocessor:n=e=>e,processor:i=()=>r()}=u,o=[];return e.each(()=>{let r=i(e);!1!==r&&(o.length>0&&function({node:e,parent:t}){let r=rr.has(e.type),u="html"===e.type&&ru.has(t.type);return!r&&!u}(e)&&(o.push(tx),(function({node:e,previous:t,parent:r},u){if(rS(t,u))return!0;let n=t.type===e.type&&rA.has(e.type),i="listItem"===r.type&&!rS(r,u),o="next"===rq(t),a="html"===e.type&&"html"===t.type&&t.position.end.line+1===e.position.start.line,s="html"===e.type&&"listItem"===r.type&&"paragraph"===t.type&&t.position.end.line+1===e.position.start.line;return!(n||i||o||a||s)}(e,t)||rT(e))&&o.push(tx),rT(e)&&o.push(tx)),o.push(r))},"children"),n(o)}function rB(e){return"html"===e.type?e.value:"paragraph"===e.type&&Array.isArray(e.children)&&1===e.children.length&&"esComment"===e.children[0].type?["{/* ",e.children[0].value," */}"]:void 0}function rq(e){let t;if("html"===e.type)t=e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);else{let r;"esComment"===e.type?r=e:"paragraph"===e.type&&1===e.children.length&&"esComment"===e.children[0].type&&(r=e.children[0]),r&&(t=r.value.match(/^prettier-ignore(?:-(start|end))?$/))}return!!t&&(t[1]||"next")}function rS(e,t){return"listItem"===e.type&&(e.spread||t.originalText.charAt(e.position.end.offset-1)===`
// `)}function rT({node:e,previous:t}){let r="list"===t.type,u="code"===e.type&&e.isIndented;return r&&u}var rL=(e,t)=>{for(let r of t)e=e1(!1,e,r,encodeURIComponent(r));return e};function rO(e,t=[]){return new RegExp([" ",...Array.isArray(t)?t:[t]].map(e=>`\\${e}`).join("|")).test(e)?`<${rL(e,"<>")}>`:e}function rN(e,t,r=!0){if(!e)return"";if(r)return" "+rN(e,t,!1);if((e=e1(!1,e,/\\(?=["')])/g,"")).includes('"')&&e.includes("'")&&!e.includes(")"))return`(${e})`;let u=tW(e,t.singleQuote);return e=e1(!1,e,"\\","\\\\"),e=e1(!1,e,u,`\\${u}`),`${u}${e}${u}`}function rR(e){return`[${(0,e3.default)(e.label)}]`}function rI(e){return`[^${e.label}]`}var rj=[{linguistLanguageId:222,name:"Markdown",type:"prose",color:"#083fa1",aliases:["md","pandoc"],aceMode:"markdown",codemirrorMode:"gfm",codemirrorMimeType:"text/x-gfm",wrap:!0,extensions:[".md",".livemd",".markdown",".mdown",".mdwn",".mkd",".mkdn",".mkdown",".ronn",".scd",".workbook"],filenames:["contents.lr","README"],tmScope:"text.md",parsers:["markdown"],vscodeLanguageIds:["markdown"]},{linguistLanguageId:222,name:"MDX",type:"prose",color:"#083fa1",aliases:["md","pandoc"],aceMode:"markdown",codemirrorMode:"gfm",codemirrorMimeType:"text/x-gfm",wrap:!0,extensions:[".mdx"],filenames:[],tmScope:"text.md",parsers:["mdx"],vscodeLanguageIds:["mdx"]}],rP={proseWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap prose.",choices:[{value:"always",description:"Wrap prose if it exceeds the print width."},{value:"never",description:"Do not wrap prose."},{value:"preserve",description:"Wrap prose as-is."}]},singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."}},rz={};c(rz,{markdown:()=>r9,mdx:()=>r4,remark:()=>r9});var r$=f(d(),1),rU=f(m(),1),rM=f(ez(),1),rV=f(eX(),1),r_=/^import\s/,rH=/^export\s/,rG=/<!---->|<!---?[^>-](?:-?[^-])*-->/,rW=/^{\s*\/\*(.*)\*\/\s*}/,rJ=`

// `,rZ=e=>r_.test(e),rY=e=>rH.test(e),rK=(e,t)=>{let r=t.indexOf(rJ),u=t.slice(0,r);if(rY(u)||rZ(u))return e(u)({type:rY(u)?"export":"import",value:u})},rQ=(e,t)=>{let r=rW.exec(t);if(r)return e(r[0])({type:"esComment",value:r[1].trim()})};rK.locator=e=>rY(e)||rZ(e)?-1:1,rQ.locator=(e,t)=>e.indexOf("{",t);var rX=function(){let{Parser:e}=this,{blockTokenizers:t,blockMethods:r,inlineTokenizers:u,inlineMethods:n}=e.prototype;t.esSyntax=rK,u.esComment=rQ,r.splice(r.indexOf("paragraph"),0,"esSyntax"),n.splice(n.indexOf("text"),0,"esComment")},r0=function(){let e=this.Parser.prototype;function t(e,t){let r=tK(t);if(r.frontMatter)return e(r.frontMatter.raw)(r.frontMatter)}e.blockMethods=["frontMatter",...e.blockMethods],e.blockTokenizers.frontMatter=t,t.onlyAtStart=!0},r1=function(){return e=>rD(e,(e,t,[r])=>"html"!==e.type||rG.test(e.value)||ru.has(r.type)?e:{...e,type:"jsx"})},r2=function(){let e=this.Parser.prototype,t=e.inlineMethods;function r(e,t){let r=t.match(/^({%.*?%}|{{.*?}})/s);if(r)return e(r[0])({type:"liquidNode",value:r[0]})}t.splice(t.indexOf("text"),0,"liquid"),e.inlineTokenizers.liquid=r,r.locator=function(e,t){return e.indexOf("{",t)}},r3=function(){let e="wikiLink",t=/^\[\[(?<linkContents>.+?)]]/s,r=this.Parser.prototype,u=r.inlineMethods;function n(r,u){let n=t.exec(u);if(n){let t=n.groups.linkContents.trim();return r(n[0])({type:e,value:t})}}u.splice(u.indexOf("link"),0,e),r.inlineTokenizers.wikiLink=n,n.locator=function(e,t){return e.indexOf("[",t)}};function r8({isMDX:e}){return t=>{let r=(0,rV.default)().use(rM.default,{commonmark:!0,...e&&{blocks:["[a-z][a-z0-9]*(\\.[a-z][a-z0-9]*)*|"]}}).use(r$.default).use(r0).use(rU.default).use(e?rX:r6).use(r2).use(e?r1:r6).use(r3);return r.run(r.parse(t))}}function r6(){}var r7={astFormat:"mdast",hasPragma:e=>tX(tK(e).content.trimStart()),locStart:re,locEnd:rt},r9={...r7,parse:r8({isMDX:!1})},r4={...r7,parse:r8({isMDX:!0})},r5={mdast:{preprocess:function(e,t){var r,u,n,i,o;return u=e=function(e,t){return rD(e,(e,u,n)=>{if("list"===e.type&&e.children.length>0){for(let t=0;t<n.length;t++){let r=n[t];if("list"===r.type&&!r.isAligned)return e.isAligned=!1,e}e.isAligned=function(e){if(!e.ordered)return!0;let[u,n]=e.children;if(rl(u,t.originalText).leadingSpaces.length>1)return!0;let i=r(u);return -1!==i&&(1===e.children.length?i%t.tabWidth==0:i===r(n)&&(i%t.tabWidth==0||rl(n,t.originalText).leadingSpaces.length>1))}(e)}return e});function r(e){return 0===e.children.length?-1:e.children[0].position.start.column-1}}((n=e=rD(e,e=>"text"===e.type&&"*"!==e.value&&"_"!==e.value&&rF.test(e.value)&&e.position.end.offset-e.position.start.offset!==e.value.length?{...e,value:t.originalText.slice(e.position.start.offset,e.position.end.offset)}:e),i=(e,t)=>"text"===e.type&&"text"===t.type,o=(e,t)=>({type:"text",value:e.value+t.value,position:{start:e.position.start,end:t.position.end}}),r=e=rD(n,e=>{if(!e.children)return e;let t=e.children.reduce((e,t)=>{let r=e2(!1,e,-1);return r&&i(r,t)?e.splice(-1,1,o(r,t)):e.push(t),e},[]);return{...e,children:t}}),e=rD(r,(e,r,u)=>{if("code"===e.type){let r=/^\n?(?: {4,}|\t)/.test(t.originalText.slice(e.position.start.offset,e.position.end.offset));if(e.isIndented=r,r)for(let e=0;e<u.length;e++){let t=u[e];if(t.hasIndentedCodeblock)break;"list"===t.type&&(t.hasIndentedCodeblock=!0)}}return e})),t),e=rD(u,(e,t,[r])=>{if("text"!==e.type)return e;let{value:u}=e;return"paragraph"===r.type&&(0===t&&(u=u.trimStart()),t===r.children.length-1&&(u=u.trimEnd())),{type:"sentence",position:e.position,children:rs(u)}})},print:function(e,t,r){var u,n,i;let o;let{node:a}=e;if((o=e.findAncestor(e=>"linkReference"===e.type||"imageReference"===e.type))&&("linkReference"!==o.type||"full"!==o.referenceType))return rs(t.originalText.slice(a.position.start.offset,a.position.end.offset)).map(r=>"word"===r.type?r.value:ry(e,r.value,t.proseWrap,!0));switch(a.type){case"front-matter":return t.originalText.slice(a.position.start.offset,a.position.end.offset);case"root":return 0===a.children.length?"":[tO(function(e,t,r){let u=[],n=null,{children:i}=e.node;for(let[e,t]of i.entries())switch(rq(t)){case"start":null===n&&(n={index:e,offset:t.position.end.offset});break;case"end":null!==n&&(u.push({start:n,end:{index:e,offset:t.position.start.offset}}),n=null)}return rw(e,t,r,{processor({index:e}){if(u.length>0){let r=u[0];if(e===r.start.index)return[rB(i[r.start.index]),t.originalText.slice(r.start.offset,r.end.offset),rB(i[r.end.index])];if(r.start.index<e&&e<r.end.index)return!1;if(e===r.end.index)return u.shift(),!1}return r()}})}(e,t,r),e=>Array.isArray(e)?tR(e):e.parts?{...e,parts:tR(e.parts)}:e),tx];case"paragraph":return rw(e,t,r,{postprocessor:tE});case"sentence":return rw(e,t,r);case"word":{let t=e1(!1,e1(!1,a.value,"*","\\*"),RegExp(`(^|${t8.source})(_+)|(_+)(${t8.source}|$)`,"g"),(e,t,r,u,n)=>e1(!1,r?`${t}${r}`:`${u}${n}`,"_","\\_")),r=(e,t,r)=>"sentence"===e.type&&0===r,u=(e,t,r)=>rf(e.children[r-1]);return t!==a.value&&(e.match(void 0,r,u)||e.match(void 0,r,(e,t,r)=>"emphasis"===e.type&&0===r,u))&&(t=t.replace(/^(\\?[*_])+/,e=>e1(!1,e,"\\",""))),t}case"whitespace":{let{next:r}=e,u=r&&/^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(r.value)?"never":t.proseWrap;return ry(e,a.value,u)}case"emphasis":{let i;if(rf(a.children[0]))i=t.originalText[a.position.start.offset];else{let{previous:t,next:r}=e;i=(null==t?void 0:t.type)==="sentence"&&(null==(u=e2(!1,t.children,-1))?void 0:u.type)==="word"&&!e2(!1,t.children,-1).hasTrailingPunctuation||(null==r?void 0:r.type)==="sentence"&&(null==(n=r.children[0])?void 0:n.type)==="word"&&!r.children[0].hasLeadingPunctuation||e.hasAncestor(e=>"emphasis"===e.type)?"*":"_"}return[i,rw(e,t,r),i]}case"strong":return["**",rw(e,t,r),"**"];case"delete":return["~~",rw(e,t,r),"~~"];case"inlineCode":{let e="preserve"===t.proseWrap?a.value:e1(!1,a.value,`
// `," "),r=tG(e,"`"),u="`".repeat(r||1),n=e.startsWith("`")||e.endsWith("`")||/^[\n ]/.test(e)&&/[\n ]$/.test(e)&&/[^\n ]/.test(e)?" ":"";return[u,n,e,n,u]}case"wikiLink":return["[[","preserve"===t.proseWrap?a.value:e1(!1,a.value,/[\t\n]+/g," "),"]]"];case"link":switch(t.originalText[a.position.start.offset]){case"<":{let e="mailto:";return["<",a.url.startsWith(e)&&t.originalText.slice(a.position.start.offset+1,a.position.start.offset+1+e.length)!==e?a.url.slice(e.length):a.url,">"]}case"[":return["[",rw(e,t,r),"](",rO(a.url,")"),rN(a.title,t),")"];default:return t.originalText.slice(a.position.start.offset,a.position.end.offset)}case"image":return["![",a.alt||"","](",rO(a.url,")"),rN(a.title,t),")"];case"blockquote":return["> ",tg("> ",rw(e,t,r))];case"heading":return["#".repeat(a.depth)+" ",rw(e,t,r)];case"code":{if(a.isIndented){let e=" ".repeat(4);return tg(e,[e,tI(a.value,tx)])}let e=t.__inJsTemplate?"~":"`",r=e.repeat(Math.max(3,tH(a.value,e)+1));return[r,a.lang||"",a.meta?" "+a.meta:"",tx,tI(rc(a,t.originalText),tx),tx,r]}case"html":{let{parent:t,isLast:r}=e,u="root"===t.type&&r?a.value.trimEnd():a.value,n=/^<!--.*-->$/s.test(u);return tI(u,n?tx:tC(tk))}case"list":{let u=rk(a,e.parent),n=function(e,t){if(!e.ordered||e.children.length<2)return!1;let r=Number(rl(e.children[0],t.originalText).numberText),u=Number(rl(e.children[1],t.originalText).numberText);if(0===r&&e.children.length>2){let r=Number(rl(e.children[2],t.originalText).numberText);return 1===u&&1===r}return 1===u}(a,t);return rw(e,t,r,{processor(e){let i,o,s;let l=(i=a.ordered?(e.isFirst?a.start:n?1:a.start+e.index)+(u%2==0?". ":") "):u%2==0?"- ":"* ",a.isAligned||a.hasIndentedCodeblock?(s=0==(o=i.length%t.tabWidth)?0:t.tabWidth-o,i+" ".repeat(s>=4?0:s)):i),c=e.node;return 2===c.children.length&&"html"===c.children[1].type&&c.children[0].position.start.column!==c.children[1].position.start.column?[l,rx(e,t,r,l)]:[l,tg(" ".repeat(l.length),rx(e,t,r,l))]}})}case"thematicBreak":{let{ancestors:t}=e,r=t.findIndex(e=>"list"===e.type);return -1===r?"---":rk(t[r],t[r+1])%2==0?"***":"---"}case"linkReference":return["[",rw(e,t,r),"]","full"===a.referenceType?rR(a):"collapsed"===a.referenceType?"[]":""];case"imageReference":if("full"===a.referenceType)return["![",a.alt||"","]",rR(a)];return["![",a.alt,"]","collapsed"===a.referenceType?"[]":""];case"definition":{let e="always"===t.proseWrap?ty:" ";return tm([rR(a),":",tF([e,rO(a.url),null===a.title?"":[e,rN(a.title,t,!1)]])])}case"footnote":return["[^",rw(e,t,r),"]"];case"footnoteReference":return rI(a);case"footnoteDefinition":{let u=1===a.children.length&&"paragraph"===a.children[0].type&&("never"===t.proseWrap||"preserve"===t.proseWrap&&a.children[0].position.start.line===a.children[0].position.end.line);return[rI(a),": ",u?rw(e,t,r):tm([tg(" ".repeat(4),rw(e,t,r,{processor:({isFirst:e})=>e?tm([tA,r()]):r()})),(null==(i=e.next)?void 0:i.type)==="footnoteDefinition"?tA:""])]}case"table":return function(e,t,r){let{node:u}=e,n=[],i=e.map(()=>e.map(({index:e})=>{let u=function(e,t){var r;let u,n,i={},o=t.printWidth,a=function(e){switch(e){case"cr":return"\r";case"crlf":return`\r
// `;default:return`
// `}}(t.endOfLine),s=0,l=[{ind:t$(),mode:tj,doc:e}],c=[],D=!1,f=[],p=0;for(u=new Set,n=[],td(e,function(e){if(e.type===ts&&tN(n),e.type===te){if(n.push(e),u.has(e))return!1;u.add(e)}},function(e){e.type===te&&n.pop().break&&tN(n)},!0);l.length>0;){let{ind:e,mode:u,doc:n}=l.pop();switch(tc(n)){case e8:{let e=a!==`
// `?e1(!1,n,`
// `,a):n;c.push(e),l.length>0&&(s+=tT(e));break}case e6:for(let t=n.length-1;t>=0;t--)l.push({ind:e,mode:u,doc:n[t]});break;case e7:if(p>=2)throw Error("There are too many 'cursor' in doc.");c.push(tz),p++;break;case e9:l.push({ind:tU(e,{type:"indent"},t),mode:u,doc:n.contents});break;case e4:l.push({ind:(r=n.n)===Number.NEGATIVE_INFINITY?e.root||t$():r<0?tU(e,{type:"dedent"},t):r?"root"===r.type?{...e,root:e}:tU(e,{type:"string"==typeof r?"stringAlign":"numberAlign",n:r},t):e,mode:u,doc:n.contents});break;case e5:s-=tM(c);break;case te:switch(u){case tP:if(!D){l.push({ind:e,mode:n.break?tj:tP,doc:n.contents});break}case tj:{D=!1;let t={ind:e,mode:tP,doc:n.contents},r=o-s,u=f.length>0;if(!n.break&&tV(t,l,r,u,i))l.push(t);else if(n.expandedStates){let t=e2(!1,n.expandedStates,-1);if(n.break)l.push({ind:e,mode:tj,doc:t});else for(let o=1;o<n.expandedStates.length+1;o++)if(o>=n.expandedStates.length){l.push({ind:e,mode:tj,doc:t});break}else{let t={ind:e,mode:tP,doc:n.expandedStates[o]};if(tV(t,l,r,u,i)){l.push(t);break}}}else l.push({ind:e,mode:tj,doc:n.contents})}}n.id&&(i[n.id]=e2(!1,l,-1).mode);break;case tt:{let t=o-s,{parts:r}=n;if(0===r.length)break;let[a,c]=r,D={ind:e,mode:tP,doc:a},p={ind:e,mode:tj,doc:a},d=tV(D,[],t,f.length>0,i,!0);if(1===r.length){d?l.push(D):l.push(p);break}let h={ind:e,mode:tP,doc:c},F={ind:e,mode:tj,doc:c};if(2===r.length){d?l.push(h,D):l.push(F,p);break}r.splice(0,2);let g={ind:e,mode:u,doc:tE(r)};tV({ind:e,mode:tP,doc:[a,c,r[0]]},[],t,f.length>0,i,!0)?l.push(g,h,D):d?l.push(g,F,D):l.push(g,F,p);break}case tr:case tu:{let t=n.groupId?i[n.groupId]:u;if(t===tj){let t=n.type===tr?n.breakContents:n.negate?n.contents:tF(n.contents);t&&l.push({ind:e,mode:u,doc:t})}if(t===tP){let t=n.type===tr?n.flatContents:n.negate?tF(n.contents):n.contents;t&&l.push({ind:e,mode:u,doc:t})}break}case tn:f.push({ind:e,mode:u,doc:n.contents});break;case ti:f.length>0&&l.push({ind:e,mode:u,doc:tv});break;case to:switch(u){case tP:if(n.hard)D=!0;else{n.soft||(c.push(" "),s+=1);break}case tj:if(f.length>0){l.push({ind:e,mode:u,doc:n},...f.reverse()),f.length=0;break}n.literal?e.root?(c.push(a,e.root.value),s=e.root.length):(c.push(a),s=0):(s-=tM(c),c.push(a+e.value),s=e.length)}break;case ta:l.push({ind:e,mode:u,doc:n.contents});break;case ts:break;default:throw new tf(n)}0===l.length&&f.length>0&&(l.push(...f.reverse()),f.length=0)}let d=c.indexOf(tz);if(-1!==d){let e=c.indexOf(tz,d+1),t=c.slice(0,d).join(""),r=c.slice(d+1,e).join("");return{formatted:t+r+c.slice(e+1).join(""),cursorNodeStart:t.length,cursorNodeText:r}}return{formatted:c.join("")}}(r(),t).formatted,i=tT(u);return n[e]=Math.max(n[e]||3,i),{text:u,width:i}},"children"),"children"),o=a(!1);if("never"!==t.proseWrap)return[tb,o];return[tb,tm(function(e,t="",r={}){return th(e),""!==t&&th(t),{type:tr,breakContents:e,flatContents:t,groupId:r.groupId}}(a(!0),o))];function a(e){let t=[s(i[0],e),`| ${n.map((t,r)=>{let n=u.align[r],i=e?"-":"-".repeat(t-2);return`${"center"===n||"left"===n?":":"-"}${i}${"center"===n||"right"===n?":":"-"}`}).join(" | ")} |`];return i.length>1&&t.push(tw(tv,i.slice(1).map(t=>s(t,e)))),tw(tv,t)}function s(e,t){return`| ${e.map(({text:e,width:r},i)=>{if(t)return e;let o=n[i]-r,a=u.align[i],s=0;"right"===a?s=o:"center"===a&&(s=Math.floor(o/2));let l=o-s;return`${" ".repeat(s)}${e}${" ".repeat(l)}`}).join(" | ")} |`}}(e,t,r);case"tableCell":return rw(e,t,r);case"break":return/\s/.test(t.originalText[a.position.start.offset])?["  ",tC(tk)]:["\\",tx];case"liquidNode":return tI(a.value,tx);case"import":case"export":case"jsx":return a.value;case"esComment":return["{/* ",a.value," */}"];case"math":return["$$",tx,a.value?[tI(a.value,tx),tx]:"","$$"];case"inlineMath":return t.originalText.slice(re(a),rt(a));default:throw new tJ(a,"Markdown")}},embed:function(e,t){let{node:r}=e;if("code"===r.type&&null!==r.lang){let e=t4(t,{language:r.lang});if(e)return async u=>{let n=t.__inJsTemplate?"~":"`",i=n.repeat(Math.max(3,tH(r.value,n)+1)),o={parser:e};"ts"===r.lang||"typescript"===r.lang?o.filepath="dummy.ts":"tsx"===r.lang&&(o.filepath="dummy.tsx");let a=await u(rc(r,t.originalText),o);return tC([i,r.lang,r.meta?" "+r.meta:"",tx,tI(a),tx,i])}}switch(r.type){case"front-matter":return e=>t6(r,e);case"import":case"export":return e=>e(r.value,{parser:"babel"});case"jsx":return e=>e(`<$>${r.value}</$>`,{parser:"__js_expression",rootMarker:"mdx"})}return null},massageAstNode:t1,hasPrettierIgnore:function(e){return e.index>0&&"next"===rq(e.previous)},insertPragma:e=>{let t=tK(e),r=`<!-- @${tQ[0]} -->`;return t.frontMatter?`${t.frontMatter.raw}

// ${r}

// ${t.content}`:`${r}

// ${t.content}`},getVisitorKeys:rh}},ue=e0}}]);