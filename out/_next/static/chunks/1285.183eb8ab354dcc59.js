"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1285],
    {
        71285: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return rK;
                    },
                    languages: function () {
                        return rO;
                    },
                    options: function () {
                        return rT;
                    },
                    parsers: function () {
                        return rS;
                    },
                    printers: function () {
                        return rQ;
                    },
                });
            var s = Object.create,
                n = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                i = Object.getOwnPropertyNames,
                a = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
                c = (e, t) => {
                    for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
                },
                p = (e, t, r, s) => {
                    if ((t && "object" == typeof t) || "function" == typeof t) for (let a of i(t)) l.call(e, a) || a === r || n(e, a, { get: () => t[a], enumerable: !(s = o(t, a)) || s.enumerable });
                    return e;
                },
                h = (e, t, r) => ((r = null != e ? s(a(e)) : {}), p(!t && e && e.__esModule ? r : n(r, "default", { value: e, enumerable: !0 }), e)),
                f = u((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.extract = function (e) {
                            let t = e.match(s);
                            return t ? t[0].trimLeft() : "";
                        }),
                        (e.parse = function (e) {
                            return c(e).pragmas;
                        }),
                        (e.parseWithComments = c),
                        (e.print = function ({ comments: e = "", pragmas: t = {} }) {
                            let r = `
`,
                                s = Object.keys(t),
                                n = s
                                    .flatMap((e) => p(e, t[e]))
                                    .map((e) => ` * ${e}${r}`)
                                    .join("");
                            if (!e) {
                                if (0 === s.length) return "";
                                if (1 === s.length && !Array.isArray(t[s[0]])) {
                                    let e = t[s[0]];
                                    return `/** ${p(s[0], e)[0]} */`;
                                }
                            }
                            let o =
                                e
                                    .split(r)
                                    .map((e) => ` * ${e}`)
                                    .join(r) + r;
                            return "/**" + r + (e ? o : "") + (e && s.length ? " *" + r : "") + n + " */";
                        }),
                        (e.strip = function (e) {
                            let t = e.match(s);
                            return t && t[0] ? e.substring(t[0].length) : e;
                        });
                    var t = /\*\/$/,
                        r = /^\/\*\*?/,
                        s = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
                        n = /(^|\s+)\/\/([^\r\n]*)/g,
                        o = /^(\r?\n)+/,
                        i = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
                        a = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
                        l = /(\r?\n|^) *\* ?/g,
                        u = [];
                    function c(e) {
                        let s = `
`;
                        e = e.replace(r, "").replace(t, "").replace(l, "$1");
                        let c = "";
                        for (; c !== e;) (c = e), (e = e.replace(i, `${s}$1 $2${s}`));
                        e = e.replace(o, "").trimRight();
                        let p = Object.create(null),
                            h = e.replace(a, "").replace(o, "").trimRight(),
                            f;
                        for (; (f = a.exec(e));) {
                            let e = f[2].replace(n, "");
                            "string" == typeof p[f[1]] || Array.isArray(p[f[1]]) ? (p[f[1]] = u.concat(p[f[1]], e)) : (p[f[1]] = e);
                        }
                        return { comments: h, pragmas: p };
                    }
                    function p(e, t) {
                        return u.concat(t).map((t) => `@${e} ${t}`.trim());
                    }
                }),
                d = u((e, t) => {
                    (t.exports.isClean = Symbol("isClean")), (t.exports.my = Symbol("my"));
                }),
                m = u((e, t) => {
                    var r = String,
                        s = function () {
                            return {
                                isColorSupported: !1,
                                reset: r,
                                bold: r,
                                dim: r,
                                italic: r,
                                underline: r,
                                inverse: r,
                                hidden: r,
                                strikethrough: r,
                                black: r,
                                red: r,
                                green: r,
                                yellow: r,
                                blue: r,
                                magenta: r,
                                cyan: r,
                                white: r,
                                gray: r,
                                bgBlack: r,
                                bgRed: r,
                                bgGreen: r,
                                bgYellow: r,
                                bgBlue: r,
                                bgMagenta: r,
                                bgCyan: r,
                                bgWhite: r,
                            };
                        };
                    (t.exports = s()), (t.exports.createColors = s);
                }),
                y = u(() => { }),
                g = u((e, t) => {
                    var r = m(),
                        s = y(),
                        n = class e extends Error {
                            constructor(t, r, s, n, o, i) {
                                super(t),
                                    (this.name = "CssSyntaxError"),
                                    (this.reason = t),
                                    o && (this.file = o),
                                    n && (this.source = n),
                                    i && (this.plugin = i),
                                    "u" > typeof r && "u" > typeof s && ("number" == typeof r ? ((this.line = r), (this.column = s)) : ((this.line = r.line), (this.column = r.column), (this.endLine = s.line), (this.endColumn = s.column))),
                                    this.setMessage(),
                                    Error.captureStackTrace && Error.captureStackTrace(this, e);
                            }
                            setMessage() {
                                (this.message = this.plugin ? this.plugin + ": " : ""),
                                    (this.message += this.file ? this.file : "<css input>"),
                                    "u" > typeof this.line && (this.message += ":" + this.line + ":" + this.column),
                                    (this.message += ": " + this.reason);
                            }
                            showSourceCode(e) {
                                if (!this.source) return "";
                                let t = this.source;
                                null == e && (e = r.isColorSupported), s && e && (t = s(t));
                                let n = t.split(/\r?\n/),
                                    o = Math.max(this.line - 3, 0),
                                    i = Math.min(this.line + 2, n.length),
                                    a = String(i).length,
                                    l,
                                    u;
                                if (e) {
                                    let { bold: e, gray: t, red: s } = r.createColors(!0);
                                    (l = (t) => e(s(t))), (u = (e) => t(e));
                                } else l = u = (e) => e;
                                return n.slice(o, i).map((e, t) => {
                                    let r = o + 1 + t,
                                        s = " " + (" " + r).slice(-a) + " | ";
                                    if (r === this.line) {
                                        let t = u(s.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                                        return (
                                            l(">") +
                                            u(s) +
                                            e +
                                            `
 ` +
                                            t +
                                            l("^")
                                        );
                                    }
                                    return " " + u(s) + e;
                                }).join(`
`);
                            }
                            toString() {
                                let e = this.showSourceCode();
                                return (
                                    e &&
                                    (e =
                                        `

` +
                                        e +
                                        `
`),
                                    this.name + ": " + this.message + e
                                );
                            }
                        };
                    (t.exports = n), (n.default = n);
                }),
                v = u((e, t) => {
                    var r = {
                        after: `
`,
                        beforeClose: `
`,
                        beforeComment: `
`,
                        beforeDecl: `
`,
                        beforeOpen: " ",
                        beforeRule: `
`,
                        colon: ": ",
                        commentLeft: " ",
                        commentRight: " ",
                        emptyBody: "",
                        indent: "    ",
                        semicolon: !1,
                    },
                        s = class {
                            constructor(e) {
                                this.builder = e;
                            }
                            atrule(e, t) {
                                let r = "@" + e.name,
                                    s = e.params ? this.rawValue(e, "params") : "";
                                if (("u" > typeof e.raws.afterName ? (r += e.raws.afterName) : s && (r += " "), e.nodes)) this.block(e, r + s);
                                else {
                                    let n = (e.raws.between || "") + (t ? ";" : "");
                                    this.builder(r + s + n, e);
                                }
                            }
                            beforeAfter(e, t) {
                                let r;
                                r = "decl" === e.type ? this.raw(e, null, "beforeDecl") : "comment" === e.type ? this.raw(e, null, "beforeComment") : "before" === t ? this.raw(e, null, "beforeRule") : this.raw(e, null, "beforeClose");
                                let s = e.parent,
                                    n = 0;
                                for (; s && "root" !== s.type;) (n += 1), (s = s.parent);
                                if (
                                    r.includes(`
`)
                                ) {
                                    let t = this.raw(e, null, "indent");
                                    if (t.length) for (let e = 0; e < n; e++) r += t;
                                }
                                return r;
                            }
                            block(e, t) {
                                let r,
                                    s = this.raw(e, "between", "beforeOpen");
                                this.builder(t + s + "{", e, "start"), e.nodes && e.nodes.length ? (this.body(e), (r = this.raw(e, "after"))) : (r = this.raw(e, "after", "emptyBody")), r && this.builder(r), this.builder("}", e, "end");
                            }
                            body(e) {
                                let t = e.nodes.length - 1;
                                for (; t > 0 && "comment" === e.nodes[t].type;) t -= 1;
                                let r = this.raw(e, "semicolon");
                                for (let s = 0; s < e.nodes.length; s++) {
                                    let n = e.nodes[s],
                                        o = this.raw(n, "before");
                                    o && this.builder(o), this.stringify(n, t !== s || r);
                                }
                            }
                            comment(e) {
                                let t = this.raw(e, "left", "commentLeft"),
                                    r = this.raw(e, "right", "commentRight");
                                this.builder("/*" + t + e.text + r + "*/", e);
                            }
                            decl(e, t) {
                                let r = this.raw(e, "between", "colon"),
                                    s = e.prop + r + this.rawValue(e, "value");
                                e.important && (s += e.raws.important || " !important"), t && (s += ";"), this.builder(s, e);
                            }
                            document(e) {
                                this.body(e);
                            }
                            raw(e, t, s) {
                                let n;
                                if ((s || (s = t), t && "u" > typeof (n = e.raws[t]))) return n;
                                let o = e.parent;
                                if ("before" === s && (!o || ("root" === o.type && o.first === e) || (o && "document" === o.type))) return "";
                                if (!o) return r[s];
                                let i = e.root();
                                if ((i.rawCache || (i.rawCache = {}), "u" > typeof i.rawCache[s])) return i.rawCache[s];
                                if ("before" === s || "after" === s) return this.beforeAfter(e, s);
                                {
                                    var a;
                                    let r = "raw" + ((a = s)[0].toUpperCase() + a.slice(1));
                                    this[r]
                                        ? (n = this[r](i, e))
                                        : i.walk((e) => {
                                            if ("u" > typeof (n = e.raws[t])) return !1;
                                        });
                                }
                                return typeof n > "u" && (n = r[s]), (i.rawCache[s] = n), n;
                            }
                            rawBeforeClose(e) {
                                let t;
                                return (
                                    e.walk((e) => {
                                        if (e.nodes && e.nodes.length > 0 && "u" > typeof e.raws.after)
                                            return (
                                                (t = e.raws.after).includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
                                                !1
                                            );
                                    }),
                                    t && (t = t.replace(/\S/g, "")),
                                    t
                                );
                            }
                            rawBeforeComment(e, t) {
                                let r;
                                return (
                                    e.walkComments((e) => {
                                        if ("u" > typeof e.raws.before)
                                            return (
                                                (r = e.raws.before).includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
                                                !1
                                            );
                                    }),
                                    typeof r > "u" ? (r = this.raw(t, null, "beforeDecl")) : r && (r = r.replace(/\S/g, "")),
                                    r
                                );
                            }
                            rawBeforeDecl(e, t) {
                                let r;
                                return (
                                    e.walkDecls((e) => {
                                        if ("u" > typeof e.raws.before)
                                            return (
                                                (r = e.raws.before).includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
                                                !1
                                            );
                                    }),
                                    typeof r > "u" ? (r = this.raw(t, null, "beforeRule")) : r && (r = r.replace(/\S/g, "")),
                                    r
                                );
                            }
                            rawBeforeOpen(e) {
                                let t;
                                return (
                                    e.walk((e) => {
                                        if ("decl" !== e.type && "u" > typeof (t = e.raws.between)) return !1;
                                    }),
                                    t
                                );
                            }
                            rawBeforeRule(e) {
                                let t;
                                return (
                                    e.walk((r) => {
                                        if (r.nodes && (r.parent !== e || e.first !== r) && "u" > typeof r.raws.before)
                                            return (
                                                (t = r.raws.before).includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
                                                !1
                                            );
                                    }),
                                    t && (t = t.replace(/\S/g, "")),
                                    t
                                );
                            }
                            rawColon(e) {
                                let t;
                                return (
                                    e.walkDecls((e) => {
                                        if ("u" > typeof e.raws.between) return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
                                    }),
                                    t
                                );
                            }
                            rawEmptyBody(e) {
                                let t;
                                return (
                                    e.walk((e) => {
                                        if (e.nodes && 0 === e.nodes.length && "u" > typeof (t = e.raws.after)) return !1;
                                    }),
                                    t
                                );
                            }
                            rawIndent(e) {
                                let t;
                                return e.raws.indent
                                    ? e.raws.indent
                                    : (e.walk((r) => {
                                        let s = r.parent;
                                        if (s && s !== e && s.parent && s.parent === e && "u" > typeof r.raws.before) {
                                            let e = r.raws.before.split(`
`);
                                            return (t = (t = e[e.length - 1]).replace(/\S/g, "")), !1;
                                        }
                                    }),
                                        t);
                            }
                            rawSemicolon(e) {
                                let t;
                                return (
                                    e.walk((e) => {
                                        if (e.nodes && e.nodes.length && "decl" === e.last.type && "u" > typeof (t = e.raws.semicolon)) return !1;
                                    }),
                                    t
                                );
                            }
                            rawValue(e, t) {
                                let r = e[t],
                                    s = e.raws[t];
                                return s && s.value === r ? s.raw : r;
                            }
                            root(e) {
                                this.body(e), e.raws.after && this.builder(e.raws.after);
                            }
                            rule(e) {
                                this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
                            }
                            stringify(e, t) {
                                if (!this[e.type]) throw Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
                                this[e.type](e, t);
                            }
                        };
                    (t.exports = s), (s.default = s);
                }),
                w = u((e, t) => {
                    var r = v();
                    function s(e, t) {
                        new r(t).stringify(e);
                    }
                    (t.exports = s), (s.default = s);
                }),
                b = u((e, t) => {
                    var { isClean: r, my: s } = d(),
                        n = g(),
                        o = v(),
                        i = w(),
                        a = class {
                            constructor(e = {}) {
                                for (let t in ((this.raws = {}), (this[r] = !1), (this[s] = !0), e))
                                    if ("nodes" === t) for (let r of ((this.nodes = []), e[t])) "function" == typeof r.clone ? this.append(r.clone()) : this.append(r);
                                    else this[t] = e[t];
                            }
                            addToError(e) {
                                if (((e.postcssNode = this), e.stack && this.source && /\n\s{4}at /.test(e.stack))) {
                                    let t = this.source;
                                    e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`);
                                }
                                return e;
                            }
                            after(e) {
                                return this.parent.insertAfter(this, e), this;
                            }
                            assign(e = {}) {
                                for (let t in e) this[t] = e[t];
                                return this;
                            }
                            before(e) {
                                return this.parent.insertBefore(this, e), this;
                            }
                            cleanRaws(e) {
                                delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
                            }
                            clone(e = {}) {
                                let t = (function e(t, r) {
                                    let s = new t.constructor();
                                    for (let n in t) {
                                        if (!Object.prototype.hasOwnProperty.call(t, n) || "proxyCache" === n) continue;
                                        let o = t[n],
                                            i = typeof o;
                                        "parent" === n && "object" === i ? r && (s[n] = r) : "source" === n ? (s[n] = o) : Array.isArray(o) ? (s[n] = o.map((t) => e(t, s))) : ("object" === i && null !== o && (o = e(o)), (s[n] = o));
                                    }
                                    return s;
                                })(this);
                                for (let r in e) t[r] = e[r];
                                return t;
                            }
                            cloneAfter(e = {}) {
                                let t = this.clone(e);
                                return this.parent.insertAfter(this, t), t;
                            }
                            cloneBefore(e = {}) {
                                let t = this.clone(e);
                                return this.parent.insertBefore(this, t), t;
                            }
                            error(e, t = {}) {
                                if (this.source) {
                                    let { end: r, start: s } = this.rangeBy(t);
                                    return this.source.input.error(e, { column: s.column, line: s.line }, { column: r.column, line: r.line }, t);
                                }
                                return new n(e);
                            }
                            getProxyProcessor() {
                                return {
                                    get: (e, t) => ("proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t]),
                                    set: (e, t, r) => (e[t] === r || ((e[t] = r), ("prop" === t || "value" === t || "name" === t || "params" === t || "important" === t || "text" === t) && e.markDirty()), !0),
                                };
                            }
                            markDirty() {
                                if (this[r]) {
                                    this[r] = !1;
                                    let e = this;
                                    for (; (e = e.parent);) e[r] = !1;
                                }
                            }
                            next() {
                                if (!this.parent) return;
                                let e = this.parent.index(this);
                                return this.parent.nodes[e + 1];
                            }
                            positionBy(e, t) {
                                let r = this.source.start;
                                if (e.index) r = this.positionInside(e.index, t);
                                else if (e.word) {
                                    let s = (t = this.toString()).indexOf(e.word);
                                    -1 !== s && (r = this.positionInside(s, t));
                                }
                                return r;
                            }
                            positionInside(e, t) {
                                let r = t || this.toString(),
                                    s = this.source.start.column,
                                    n = this.source.start.line;
                                for (let t = 0; t < e; t++)
                                    r[t] ===
                                        `
`
                                        ? ((s = 1), (n += 1))
                                        : (s += 1);
                                return { column: s, line: n };
                            }
                            prev() {
                                if (!this.parent) return;
                                let e = this.parent.index(this);
                                return this.parent.nodes[e - 1];
                            }
                            rangeBy(e) {
                                let t = { column: this.source.start.column, line: this.source.start.line },
                                    r = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: t.column + 1, line: t.line };
                                if (e.word) {
                                    let s = this.toString(),
                                        n = s.indexOf(e.word);
                                    -1 !== n && ((t = this.positionInside(n, s)), (r = this.positionInside(n + e.word.length, s)));
                                } else
                                    e.start ? (t = { column: e.start.column, line: e.start.line }) : e.index && (t = this.positionInside(e.index)),
                                        e.end ? (r = { column: e.end.column, line: e.end.line }) : e.endIndex ? (r = this.positionInside(e.endIndex)) : e.index && (r = this.positionInside(e.index + 1));
                                return (r.line < t.line || (r.line === t.line && r.column <= t.column)) && (r = { column: t.column + 1, line: t.line }), { end: r, start: t };
                            }
                            raw(e, t) {
                                return new o().raw(this, e, t);
                            }
                            remove() {
                                return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
                            }
                            replaceWith(...e) {
                                if (this.parent) {
                                    let t = this,
                                        r = !1;
                                    for (let s of e) s === this ? (r = !0) : r ? (this.parent.insertAfter(t, s), (t = s)) : this.parent.insertBefore(t, s);
                                    r || this.remove();
                                }
                                return this;
                            }
                            root() {
                                let e = this;
                                for (; e.parent && "document" !== e.parent.type;) e = e.parent;
                                return e;
                            }
                            toJSON(e, t) {
                                let r = {},
                                    s = null == t;
                                t = t || new Map();
                                let n = 0;
                                for (let e in this) {
                                    if (!Object.prototype.hasOwnProperty.call(this, e) || "parent" === e || "proxyCache" === e) continue;
                                    let s = this[e];
                                    if (Array.isArray(s)) r[e] = s.map((e) => ("object" == typeof e && e.toJSON ? e.toJSON(null, t) : e));
                                    else if ("object" == typeof s && s.toJSON) r[e] = s.toJSON(null, t);
                                    else if ("source" === e) {
                                        let o = t.get(s.input);
                                        null == o && ((o = n), t.set(s.input, n), n++), (r[e] = { end: s.end, inputId: o, start: s.start });
                                    } else r[e] = s;
                                }
                                return s && (r.inputs = [...t.keys()].map((e) => e.toJSON())), r;
                            }
                            toProxy() {
                                return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
                            }
                            toString(e = i) {
                                e.stringify && (e = e.stringify);
                                let t = "";
                                return (
                                    e(this, (e) => {
                                        t += e;
                                    }),
                                    t
                                );
                            }
                            warn(e, t, r) {
                                let s = { node: this };
                                for (let e in r) s[e] = r[e];
                                return e.warn(t, s);
                            }
                            get proxyOf() {
                                return this;
                            }
                        };
                    (t.exports = a), (a.default = a);
                }),
                x = u((e, t) => {
                    var r = b(),
                        s = class extends r {
                            constructor(e) {
                                e && "u" > typeof e.value && "string" != typeof e.value && (e = { ...e, value: String(e.value) }), super(e), (this.type = "decl");
                            }
                            get variable() {
                                return this.prop.startsWith("--") || "$" === this.prop[0];
                            }
                        };
                    (t.exports = s), (s.default = s);
                }),
                k = u((e, t) => {
                    var r = b(),
                        s = class extends r {
                            constructor(e) {
                                super(e), (this.type = "comment");
                            }
                        };
                    (t.exports = s), (s.default = s);
                }),
                O = u((e, t) => {
                    var r,
                        s,
                        n,
                        o,
                        { isClean: i, my: a } = d(),
                        l = x(),
                        u = k(),
                        c = b(),
                        p = class e extends c {
                            append(...e) {
                                for (let t of e) for (let e of this.normalize(t, this.last)) this.proxyOf.nodes.push(e);
                                return this.markDirty(), this;
                            }
                            cleanRaws(e) {
                                if ((super.cleanRaws(e), this.nodes)) for (let t of this.nodes) t.cleanRaws(e);
                            }
                            each(e) {
                                if (!this.proxyOf.nodes) return;
                                let t = this.getIterator(),
                                    r,
                                    s;
                                for (; this.indexes[t] < this.proxyOf.nodes.length && ((r = this.indexes[t]), !1 !== (s = e(this.proxyOf.nodes[r], r)));) this.indexes[t] += 1;
                                return delete this.indexes[t], s;
                            }
                            every(e) {
                                return this.nodes.every(e);
                            }
                            getIterator() {
                                this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), (this.lastEach += 1);
                                let e = this.lastEach;
                                return (this.indexes[e] = 0), e;
                            }
                            getProxyProcessor() {
                                return {
                                    get: (e, t) =>
                                        "proxyOf" === t
                                            ? e
                                            : e[t]
                                                ? "each" === t || ("string" == typeof t && t.startsWith("walk"))
                                                    ? (...r) => e[t](...r.map((e) => ("function" == typeof e ? (t, r) => e(t.toProxy(), r) : e)))
                                                    : "every" === t || "some" === t
                                                        ? (r) => e[t]((e, ...t) => r(e.toProxy(), ...t))
                                                        : "root" === t
                                                            ? () => e.root().toProxy()
                                                            : "nodes" === t
                                                                ? e.nodes.map((e) => e.toProxy())
                                                                : "first" === t || "last" === t
                                                                    ? e[t].toProxy()
                                                                    : e[t]
                                                : e[t],
                                    set: (e, t, r) => (e[t] === r || ((e[t] = r), ("name" === t || "params" === t || "selector" === t) && e.markDirty()), !0),
                                };
                            }
                            index(e) {
                                return "number" == typeof e ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
                            }
                            insertAfter(e, t) {
                                let r,
                                    s = this.index(e),
                                    n = this.normalize(t, this.proxyOf.nodes[s]).reverse();
                                for (let t of ((s = this.index(e)), n)) this.proxyOf.nodes.splice(s + 1, 0, t);
                                for (let e in this.indexes) s < (r = this.indexes[e]) && (this.indexes[e] = r + n.length);
                                return this.markDirty(), this;
                            }
                            insertBefore(e, t) {
                                let r,
                                    s = this.index(e),
                                    n = 0 === s && "prepend",
                                    o = this.normalize(t, this.proxyOf.nodes[s], n).reverse();
                                for (let t of ((s = this.index(e)), o)) this.proxyOf.nodes.splice(s, 0, t);
                                for (let e in this.indexes) s <= (r = this.indexes[e]) && (this.indexes[e] = r + o.length);
                                return this.markDirty(), this;
                            }
                            normalize(t, o) {
                                if ("string" == typeof t)
                                    t = (function e(t) {
                                        return t.map((t) => (t.nodes && (t.nodes = e(t.nodes)), delete t.source, t));
                                    })(r(t).nodes);
                                else if (Array.isArray(t)) for (let e of (t = t.slice(0))) e.parent && e.parent.removeChild(e, "ignore");
                                else if ("root" === t.type && "document" !== this.type) for (let e of (t = t.nodes.slice(0))) e.parent && e.parent.removeChild(e, "ignore");
                                else if (t.type) t = [t];
                                else if (t.prop) {
                                    if (typeof t.value > "u") throw Error("Value field is missed in node creation");
                                    "string" != typeof t.value && (t.value = String(t.value)), (t = [new l(t)]);
                                } else if (t.selector) t = [new s(t)];
                                else if (t.name) t = [new n(t)];
                                else if (t.text) t = [new u(t)];
                                else throw Error("Unknown node type in node creation");
                                return t.map(
                                    (t) => (
                                        t[a] || e.rebuild(t),
                                        (t = t.proxyOf).parent && t.parent.removeChild(t),
                                        t[i] &&
                                        (function e(t) {
                                            if (((t[i] = !1), t.proxyOf.nodes)) for (let r of t.proxyOf.nodes) e(r);
                                        })(t),
                                        typeof t.raws.before > "u" && o && "u" > typeof o.raws.before && (t.raws.before = o.raws.before.replace(/\S/g, "")),
                                        (t.parent = this.proxyOf),
                                        t
                                    )
                                );
                            }
                            prepend(...e) {
                                for (let t of (e = e.reverse())) {
                                    let e = this.normalize(t, this.first, "prepend").reverse();
                                    for (let t of e) this.proxyOf.nodes.unshift(t);
                                    for (let t in this.indexes) this.indexes[t] = this.indexes[t] + e.length;
                                }
                                return this.markDirty(), this;
                            }
                            push(e) {
                                return (e.parent = this), this.proxyOf.nodes.push(e), this;
                            }
                            removeAll() {
                                for (let e of this.proxyOf.nodes) e.parent = void 0;
                                return (this.proxyOf.nodes = []), this.markDirty(), this;
                            }
                            removeChild(e) {
                                let t;
                                for (let r in ((e = this.index(e)), (this.proxyOf.nodes[e].parent = void 0), this.proxyOf.nodes.splice(e, 1), this.indexes)) (t = this.indexes[r]) >= e && (this.indexes[r] = t - 1);
                                return this.markDirty(), this;
                            }
                            replaceValues(e, t, r) {
                                return (
                                    r || ((r = t), (t = {})),
                                    this.walkDecls((s) => {
                                        (t.props && !t.props.includes(s.prop)) || (t.fast && !s.value.includes(t.fast)) || (s.value = s.value.replace(e, r));
                                    }),
                                    this.markDirty(),
                                    this
                                );
                            }
                            some(e) {
                                return this.nodes.some(e);
                            }
                            walk(e) {
                                return this.each((t, r) => {
                                    let s;
                                    try {
                                        s = e(t, r);
                                    } catch (e) {
                                        throw t.addToError(e);
                                    }
                                    return !1 !== s && t.walk && (s = t.walk(e)), s;
                                });
                            }
                            walkAtRules(e, t) {
                                return t
                                    ? e instanceof RegExp
                                        ? this.walk((r, s) => {
                                            if ("atrule" === r.type && e.test(r.name)) return t(r, s);
                                        })
                                        : this.walk((r, s) => {
                                            if ("atrule" === r.type && r.name === e) return t(r, s);
                                        })
                                    : ((t = e),
                                        this.walk((e, r) => {
                                            if ("atrule" === e.type) return t(e, r);
                                        }));
                            }
                            walkComments(e) {
                                return this.walk((t, r) => {
                                    if ("comment" === t.type) return e(t, r);
                                });
                            }
                            walkDecls(e, t) {
                                return t
                                    ? e instanceof RegExp
                                        ? this.walk((r, s) => {
                                            if ("decl" === r.type && e.test(r.prop)) return t(r, s);
                                        })
                                        : this.walk((r, s) => {
                                            if ("decl" === r.type && r.prop === e) return t(r, s);
                                        })
                                    : ((t = e),
                                        this.walk((e, r) => {
                                            if ("decl" === e.type) return t(e, r);
                                        }));
                            }
                            walkRules(e, t) {
                                return t
                                    ? e instanceof RegExp
                                        ? this.walk((r, s) => {
                                            if ("rule" === r.type && e.test(r.selector)) return t(r, s);
                                        })
                                        : this.walk((r, s) => {
                                            if ("rule" === r.type && r.selector === e) return t(r, s);
                                        })
                                    : ((t = e),
                                        this.walk((e, r) => {
                                            if ("rule" === e.type) return t(e, r);
                                        }));
                            }
                            get first() {
                                if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
                            }
                            get last() {
                                if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
                            }
                        };
                    (p.registerParse = (e) => {
                        r = e;
                    }),
                        (p.registerRule = (e) => {
                            s = e;
                        }),
                        (p.registerAtRule = (e) => {
                            n = e;
                        }),
                        (p.registerRoot = (e) => {
                            o = e;
                        }),
                        (t.exports = p),
                        (p.default = p),
                        (p.rebuild = (e) => {
                            "atrule" === e.type
                                ? Object.setPrototypeOf(e, n.prototype)
                                : "rule" === e.type
                                    ? Object.setPrototypeOf(e, s.prototype)
                                    : "decl" === e.type
                                        ? Object.setPrototypeOf(e, l.prototype)
                                        : "comment" === e.type
                                            ? Object.setPrototypeOf(e, u.prototype)
                                            : "root" === e.type && Object.setPrototypeOf(e, o.prototype),
                                (e[a] = !0),
                                e.nodes &&
                                e.nodes.forEach((e) => {
                                    p.rebuild(e);
                                });
                        });
                }),
                T = u((e, t) => {
                    var r = /[\t\n\f\r "#'()/;[\\\]{}]/g,
                        s = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
                        n = /.[\r\n"'(/\\]/,
                        o = /[\da-f]/i;
                    t.exports = function (e, t = {}) {
                        let i = e.css.valueOf(),
                            a = t.ignoreErrors,
                            l,
                            u,
                            c,
                            p,
                            h,
                            f,
                            d,
                            m,
                            y,
                            g,
                            v = i.length,
                            w = 0,
                            b = [],
                            x = [];
                        function k(t) {
                            throw e.error("Unclosed " + t, w);
                        }
                        return {
                            back: function (e) {
                                x.push(e);
                            },
                            endOfFile: function () {
                                return 0 === x.length && w >= v;
                            },
                            nextToken: function (e) {
                                if (x.length) return x.pop();
                                if (w >= v) return;
                                let t = !!e && e.ignoreUnclosed;
                                switch ((l = i.charCodeAt(w))) {
                                    case 10:
                                    case 32:
                                    case 9:
                                    case 13:
                                    case 12:
                                        u = w;
                                        do (u += 1), (l = i.charCodeAt(u));
                                        while (32 === l || 10 === l || 9 === l || 13 === l || 12 === l);
                                        (g = ["space", i.slice(w, u)]), (w = u - 1);
                                        break;
                                    case 91:
                                    case 93:
                                    case 123:
                                    case 125:
                                    case 58:
                                    case 59:
                                    case 41: {
                                        let e = String.fromCharCode(l);
                                        g = [e, e, w];
                                        break;
                                    }
                                    case 40:
                                        if (((m = b.length ? b.pop()[1] : ""), (y = i.charCodeAt(w + 1)), "url" === m && 39 !== y && 34 !== y && 32 !== y && 10 !== y && 9 !== y && 12 !== y && 13 !== y)) {
                                            u = w;
                                            do {
                                                if (((f = !1), -1 === (u = i.indexOf(")", u + 1)))) {
                                                    if (a || t) {
                                                        u = w;
                                                        break;
                                                    }
                                                    k("bracket");
                                                }
                                                for (d = u; 92 === i.charCodeAt(d - 1);) (d -= 1), (f = !f);
                                            } while (f);
                                            (g = ["brackets", i.slice(w, u + 1), w, u]), (w = u);
                                        } else (u = i.indexOf(")", w + 1)), (p = i.slice(w, u + 1)), -1 === u || n.test(p) ? (g = ["(", "(", w]) : ((g = ["brackets", p, w, u]), (w = u));
                                        break;
                                    case 39:
                                    case 34:
                                        (c = 39 === l ? "'" : '"'), (u = w);
                                        do {
                                            if (((f = !1), -1 === (u = i.indexOf(c, u + 1)))) {
                                                if (a || t) {
                                                    u = w + 1;
                                                    break;
                                                }
                                                k("string");
                                            }
                                            for (d = u; 92 === i.charCodeAt(d - 1);) (d -= 1), (f = !f);
                                        } while (f);
                                        (g = ["string", i.slice(w, u + 1), w, u]), (w = u);
                                        break;
                                    case 64:
                                        (r.lastIndex = w + 1), r.test(i), (u = 0 === r.lastIndex ? i.length - 1 : r.lastIndex - 2), (g = ["at-word", i.slice(w, u + 1), w, u]), (w = u);
                                        break;
                                    case 92:
                                        for (u = w, h = !0; 92 === i.charCodeAt(u + 1);) (u += 1), (h = !h);
                                        if (((l = i.charCodeAt(u + 1)), h && 47 !== l && 32 !== l && 10 !== l && 9 !== l && 13 !== l && 12 !== l && ((u += 1), o.test(i.charAt(u))))) {
                                            for (; o.test(i.charAt(u + 1));) u += 1;
                                            32 === i.charCodeAt(u + 1) && (u += 1);
                                        }
                                        (g = ["word", i.slice(w, u + 1), w, u]), (w = u);
                                        break;
                                    default:
                                        47 === l && 42 === i.charCodeAt(w + 1)
                                            ? (0 === (u = i.indexOf("*/", w + 2) + 1) && (a || t ? (u = i.length) : k("comment")), (g = ["comment", i.slice(w, u + 1), w, u]))
                                            : ((s.lastIndex = w + 1), s.test(i), (u = 0 === s.lastIndex ? i.length - 1 : s.lastIndex - 2), (g = ["word", i.slice(w, u + 1), w, u]), b.push(g)),
                                            (w = u);
                                }
                                return w++, g;
                            },
                            position: function () {
                                return w;
                            },
                        };
                    };
                }),
                S = u((e, t) => {
                    var r = O(),
                        s = class extends r {
                            constructor(e) {
                                super(e), (this.type = "atrule");
                            }
                            append(...e) {
                                return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
                            }
                            prepend(...e) {
                                return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
                            }
                        };
                    (t.exports = s), (s.default = s), r.registerAtRule(s);
                }),
                C = u((e, t) => {
                    var r,
                        s,
                        n = O(),
                        o = class extends n {
                            constructor(e) {
                                super(e), (this.type = "root"), this.nodes || (this.nodes = []);
                            }
                            normalize(e, t, r) {
                                let s = super.normalize(e);
                                if (t) {
                                    if ("prepend" === r) this.nodes.length > 1 ? (t.raws.before = this.nodes[1].raws.before) : delete t.raws.before;
                                    else if (this.first !== t) for (let e of s) e.raws.before = t.raws.before;
                                }
                                return s;
                            }
                            removeChild(e, t) {
                                let r = this.index(e);
                                return !t && 0 === r && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
                            }
                            toResult(e = {}) {
                                return new r(new s(), this, e).stringify();
                            }
                        };
                    (o.registerLazyResult = (e) => {
                        r = e;
                    }),
                        (o.registerProcessor = (e) => {
                            s = e;
                        }),
                        (t.exports = o),
                        (o.default = o),
                        n.registerRoot(o);
                }),
                _ = u((e, t) => {
                    var r = {
                        comma: (e) => r.split(e, [","], !0),
                        space(e) {
                            let t = [
                                " ",
                                `
`,
                                "	",
                            ];
                            return r.split(e, t);
                        },
                        split(e, t, r) {
                            let s = [],
                                n = "",
                                o = !1,
                                i = 0,
                                a = !1,
                                l = "",
                                u = !1;
                            for (let r of e)
                                u ? (u = !1) : "\\" === r ? (u = !0) : a ? r === l && (a = !1) : '"' === r || "'" === r ? ((a = !0), (l = r)) : "(" === r ? (i += 1) : ")" === r ? i > 0 && (i -= 1) : 0 === i && t.includes(r) && (o = !0),
                                    o ? ("" !== n && s.push(n.trim()), (n = ""), (o = !1)) : (n += r);
                            return (r || "" !== n) && s.push(n.trim()), s;
                        },
                    };
                    (t.exports = r), (r.default = r);
                }),
                E = u((e, t) => {
                    var r = O(),
                        s = _(),
                        n = class extends r {
                            constructor(e) {
                                super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
                            }
                            get selectors() {
                                return s.comma(this.selector);
                            }
                            set selectors(e) {
                                let t = this.selector ? this.selector.match(/,\s*/) : null,
                                    r = t ? t[0] : "," + this.raw("between", "beforeOpen");
                                this.selector = e.join(r);
                            }
                        };
                    (t.exports = n), (n.default = n), r.registerRule(n);
                }),
                A = u((e, t) => {
                    var r = x(),
                        s = T(),
                        n = k(),
                        o = S(),
                        i = C(),
                        a = E(),
                        l = { empty: !0, space: !0 },
                        u = class {
                            constructor(e) {
                                (this.input = e),
                                    (this.root = new i()),
                                    (this.current = this.root),
                                    (this.spaces = ""),
                                    (this.semicolon = !1),
                                    (this.customProperty = !1),
                                    this.createTokenizer(),
                                    (this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } });
                            }
                            atrule(e) {
                                let t = new o();
                                (t.name = e[1].slice(1)), "" === t.name && this.unnamedAtrule(t, e), this.init(t, e[2]);
                                let r,
                                    s,
                                    n,
                                    i = !1,
                                    a = !1,
                                    l = [],
                                    u = [];
                                for (; !this.tokenizer.endOfFile();) {
                                    if (("(" === (r = (e = this.tokenizer.nextToken())[0]) || "[" === r ? u.push("(" === r ? ")" : "]") : "{" === r && u.length > 0 ? u.push("}") : r === u[u.length - 1] && u.pop(), 0 === u.length)) {
                                        if (";" === r) {
                                            (t.source.end = this.getPosition(e[2])), t.source.end.offset++, (this.semicolon = !0);
                                            break;
                                        }
                                        if ("{" === r) {
                                            a = !0;
                                            break;
                                        }
                                        if ("}" === r) {
                                            if (l.length > 0) {
                                                for (n = l.length - 1, s = l[n]; s && "space" === s[0];) s = l[--n];
                                                s && ((t.source.end = this.getPosition(s[3] || s[2])), t.source.end.offset++);
                                            }
                                            this.end(e);
                                            break;
                                        } else l.push(e);
                                    } else l.push(e);
                                    if (this.tokenizer.endOfFile()) {
                                        i = !0;
                                        break;
                                    }
                                }
                                (t.raws.between = this.spacesAndCommentsFromEnd(l)),
                                    l.length
                                        ? ((t.raws.afterName = this.spacesAndCommentsFromStart(l)),
                                            this.raw(t, "params", l),
                                            i && ((e = l[l.length - 1]), (t.source.end = this.getPosition(e[3] || e[2])), t.source.end.offset++, (this.spaces = t.raws.between), (t.raws.between = "")))
                                        : ((t.raws.afterName = ""), (t.params = "")),
                                    a && ((t.nodes = []), (this.current = t));
                            }
                            checkMissedSemicolon(e) {
                                let t = this.colon(e);
                                if (!1 === t) return;
                                let r = 0,
                                    s;
                                for (let n = t - 1; n >= 0 && !("space" !== (s = e[n])[0] && 2 === (r += 1)); n--);
                                throw this.input.error("Missed semicolon", "word" === s[0] ? s[3] + 1 : s[2]);
                            }
                            colon(e) {
                                let t = 0,
                                    r,
                                    s;
                                for (let [n, o] of e.entries()) {
                                    if (("(" === (r = o[0]) && (t += 1), ")" === r && (t -= 1), 0 === t && ":" === r)) {
                                        if (s) {
                                            if ("word" === s[0] && "progid" === s[1]) continue;
                                            return n;
                                        }
                                        this.doubleColon(o);
                                    }
                                    s = o;
                                }
                                return !1;
                            }
                            comment(e) {
                                let t = new n();
                                this.init(t, e[2]), (t.source.end = this.getPosition(e[3] || e[2])), t.source.end.offset++;
                                let r = e[1].slice(2, -2);
                                if (/^\s*$/.test(r)) (t.text = ""), (t.raws.left = r), (t.raws.right = "");
                                else {
                                    let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
                                    (t.text = e[2]), (t.raws.left = e[1]), (t.raws.right = e[3]);
                                }
                            }
                            createTokenizer() {
                                this.tokenizer = s(this.input);
                            }
                            decl(e, t) {
                                let s,
                                    n = new r();
                                this.init(n, e[0][2]);
                                let o = e[e.length - 1];
                                for (
                                    ";" === o[0] && ((this.semicolon = !0), e.pop()),
                                    n.source.end = this.getPosition(
                                        o[3] ||
                                        o[2] ||
                                        (function (e) {
                                            for (let t = e.length - 1; t >= 0; t--) {
                                                let r = e[t],
                                                    s = r[3] || r[2];
                                                if (s) return s;
                                            }
                                        })(e)
                                    ),
                                    n.source.end.offset++;
                                    "word" !== e[0][0];

                                )
                                    1 === e.length && this.unknownWord(e), (n.raws.before += e.shift()[1]);
                                for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length;) {
                                    let t = e[0][0];
                                    if (":" === t || "space" === t || "comment" === t) break;
                                    n.prop += e.shift()[1];
                                }
                                for (n.raws.between = ""; e.length;)
                                    if (":" === (s = e.shift())[0]) {
                                        n.raws.between += s[1];
                                        break;
                                    } else "word" === s[0] && /\w/.test(s[1]) && this.unknownWord([s]), (n.raws.between += s[1]);
                                ("_" === n.prop[0] || "*" === n.prop[0]) && ((n.raws.before += n.prop[0]), (n.prop = n.prop.slice(1)));
                                let i = [],
                                    a;
                                for (; e.length && !("space" !== (a = e[0][0]) && "comment" !== a);) i.push(e.shift());
                                this.precheckMissedSemicolon(e);
                                for (let t = e.length - 1; t >= 0; t--) {
                                    if ("!important" === (s = e[t])[1].toLowerCase()) {
                                        n.important = !0;
                                        let r = this.stringFrom(e, t);
                                        " !important" !== (r = this.spacesFromEnd(e) + r) && (n.raws.important = r);
                                        break;
                                    }
                                    if ("important" === s[1].toLowerCase()) {
                                        let r = e.slice(0),
                                            s = "";
                                        for (let e = t; e > 0; e--) {
                                            let t = r[e][0];
                                            if (0 === s.trim().indexOf("!") && "space" !== t) break;
                                            s = r.pop()[1] + s;
                                        }
                                        0 === s.trim().indexOf("!") && ((n.important = !0), (n.raws.important = s), (e = r));
                                    }
                                    if ("space" !== s[0] && "comment" !== s[0]) break;
                                }
                                e.some((e) => "space" !== e[0] && "comment" !== e[0]) && ((n.raws.between += i.map((e) => e[1]).join("")), (i = [])),
                                    this.raw(n, "value", i.concat(e), t),
                                    n.value.includes(":") && !t && this.checkMissedSemicolon(e);
                            }
                            doubleColon(e) {
                                throw this.input.error("Double colon", { offset: e[2] }, { offset: e[2] + e[1].length });
                            }
                            emptyRule(e) {
                                let t = new a();
                                this.init(t, e[2]), (t.selector = ""), (t.raws.between = ""), (this.current = t);
                            }
                            end(e) {
                                this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon),
                                    (this.semicolon = !1),
                                    (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
                                    (this.spaces = ""),
                                    this.current.parent ? ((this.current.source.end = this.getPosition(e[2])), this.current.source.end.offset++, (this.current = this.current.parent)) : this.unexpectedClose(e);
                            }
                            endFile() {
                                this.current.parent && this.unclosedBlock(),
                                    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon),
                                    (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
                                    (this.root.source.end = this.getPosition(this.tokenizer.position()));
                            }
                            freeSemicolon(e) {
                                if (((this.spaces += e[1]), this.current.nodes)) {
                                    let e = this.current.nodes[this.current.nodes.length - 1];
                                    e && "rule" === e.type && !e.raws.ownSemicolon && ((e.raws.ownSemicolon = this.spaces), (this.spaces = ""));
                                }
                            }
                            getPosition(e) {
                                let t = this.input.fromOffset(e);
                                return { column: t.col, line: t.line, offset: e };
                            }
                            init(e, t) {
                                this.current.push(e), (e.source = { input: this.input, start: this.getPosition(t) }), (e.raws.before = this.spaces), (this.spaces = ""), "comment" !== e.type && (this.semicolon = !1);
                            }
                            other(e) {
                                let t = !1,
                                    r = null,
                                    s = !1,
                                    n = null,
                                    o = [],
                                    i = e[1].startsWith("--"),
                                    a = [],
                                    l = e;
                                for (; l;) {
                                    if (((r = l[0]), a.push(l), "(" === r || "[" === r)) n || (n = l), o.push("(" === r ? ")" : "]");
                                    else if (i && s && "{" === r) n || (n = l), o.push("}");
                                    else if (0 === o.length) {
                                        if (";" === r) {
                                            if (s) {
                                                this.decl(a, i);
                                                return;
                                            }
                                            break;
                                        }
                                        if ("{" === r) {
                                            this.rule(a);
                                            return;
                                        }
                                        if ("}" === r) {
                                            this.tokenizer.back(a.pop()), (t = !0);
                                            break;
                                        } else ":" === r && (s = !0);
                                    } else r === o[o.length - 1] && (o.pop(), 0 === o.length && (n = null));
                                    l = this.tokenizer.nextToken();
                                }
                                if ((this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(n), t && s)) {
                                    if (!i) for (; a.length && !("space" !== (l = a[a.length - 1][0]) && "comment" !== l);) this.tokenizer.back(a.pop());
                                    this.decl(a, i);
                                } else this.unknownWord(a);
                            }
                            parse() {
                                let e;
                                for (; !this.tokenizer.endOfFile();)
                                    switch ((e = this.tokenizer.nextToken())[0]) {
                                        case "space":
                                            this.spaces += e[1];
                                            break;
                                        case ";":
                                            this.freeSemicolon(e);
                                            break;
                                        case "}":
                                            this.end(e);
                                            break;
                                        case "comment":
                                            this.comment(e);
                                            break;
                                        case "at-word":
                                            this.atrule(e);
                                            break;
                                        case "{":
                                            this.emptyRule(e);
                                            break;
                                        default:
                                            this.other(e);
                                    }
                                this.endFile();
                            }
                            precheckMissedSemicolon() { }
                            raw(e, t, r, s) {
                                let n,
                                    o,
                                    i = r.length,
                                    a = "",
                                    u = !0,
                                    c,
                                    p;
                                for (let e = 0; e < i; e += 1)
                                    "space" !== (o = (n = r[e])[0]) || e !== i - 1 || s
                                        ? "comment" === o
                                            ? ((p = r[e - 1] ? r[e - 1][0] : "empty"), (c = r[e + 1] ? r[e + 1][0] : "empty"), l[p] || l[c] ? (u = !1) : "," === a.slice(-1) ? (u = !1) : (a += n[1]))
                                            : (a += n[1])
                                        : (u = !1);
                                if (!u) {
                                    let s = r.reduce((e, t) => e + t[1], "");
                                    e.raws[t] = { raw: s, value: a };
                                }
                                e[t] = a;
                            }
                            rule(e) {
                                e.pop();
                                let t = new a();
                                this.init(t, e[0][2]), (t.raws.between = this.spacesAndCommentsFromEnd(e)), this.raw(t, "selector", e), (this.current = t);
                            }
                            spacesAndCommentsFromEnd(e) {
                                let t,
                                    r = "";
                                for (; e.length && !("space" !== (t = e[e.length - 1][0]) && "comment" !== t);) r = e.pop()[1] + r;
                                return r;
                            }
                            spacesAndCommentsFromStart(e) {
                                let t,
                                    r = "";
                                for (; e.length && !("space" !== (t = e[0][0]) && "comment" !== t);) r += e.shift()[1];
                                return r;
                            }
                            spacesFromEnd(e) {
                                let t = "";
                                for (; e.length && "space" === e[e.length - 1][0];) t = e.pop()[1] + t;
                                return t;
                            }
                            stringFrom(e, t) {
                                let r = "";
                                for (let s = t; s < e.length; s++) r += e[s][1];
                                return e.splice(t, e.length - t), r;
                            }
                            unclosedBlock() {
                                let e = this.current.source.start;
                                throw this.input.error("Unclosed block", e.line, e.column);
                            }
                            unclosedBracket(e) {
                                throw this.input.error("Unclosed bracket", { offset: e[2] }, { offset: e[2] + 1 });
                            }
                            unexpectedClose(e) {
                                throw this.input.error("Unexpected }", { offset: e[2] }, { offset: e[2] + 1 });
                            }
                            unknownWord(e) {
                                throw this.input.error("Unknown word", { offset: e[0][2] }, { offset: e[0][2] + e[0][1].length });
                            }
                            unnamedAtrule(e, t) {
                                throw this.input.error("At-rule without name", { offset: t[2] }, { offset: t[2] + t[1].length });
                            }
                        };
                    t.exports = u;
                }),
                j = u(() => { }),
                I = u((e, t) => {
                    t.exports = {
                        nanoid: (e = 21) => {
                            let t = "",
                                r = e;
                            for (; r--;) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[(64 * Math.random()) | 0];
                            return t;
                        },
                        customAlphabet: (e, t = 21) => (r = t) => {
                            let s = "",
                                n = r;
                            for (; n--;) s += e[(Math.random() * e.length) | 0];
                            return s;
                        },
                    };
                }),
                P = u((e, t) => {
                    t.exports = class { };
                }),
                M = u((e, t) => {
                    var { SourceMapConsumer: r, SourceMapGenerator: s } = j(),
                        { fileURLToPath: n, pathToFileURL: o } = {},
                        { isAbsolute: i, resolve: a } = {},
                        { nanoid: l } = I(),
                        u = y(),
                        c = g(),
                        p = P(),
                        h = Symbol("fromOffsetCache"),
                        f = !!(r && s),
                        d = !!(a && i),
                        m = class {
                            constructor(e, t = {}) {
                                if (null === e || typeof e > "u" || ("object" == typeof e && !e.toString)) throw Error(`PostCSS received ${e} instead of CSS string`);
                                if (
                                    ((this.css = e.toString()),
                                        "\uFEFF" === this.css[0] || "￾" === this.css[0] ? ((this.hasBOM = !0), (this.css = this.css.slice(1))) : (this.hasBOM = !1),
                                        t.from && (!d || /^\w+:\/\//.test(t.from) || i(t.from) ? (this.file = t.from) : (this.file = a(t.from))),
                                        d && f)
                                ) {
                                    let e = new p(this.css, t);
                                    if (e.text) {
                                        this.map = e;
                                        let t = e.consumer().file;
                                        !this.file && t && (this.file = this.mapResolve(t));
                                    }
                                }
                                this.file || (this.id = "<input css " + l(6) + ">"), this.map && (this.map.file = this.from);
                            }
                            error(e, t, r, s = {}) {
                                let n, i, a;
                                if (t && "object" == typeof t) {
                                    let e = t,
                                        s = r;
                                    if ("number" == typeof e.offset) {
                                        let s = this.fromOffset(e.offset);
                                        (t = s.line), (r = s.col);
                                    } else (t = e.line), (r = e.column);
                                    if ("number" == typeof s.offset) {
                                        let e = this.fromOffset(s.offset);
                                        (i = e.line), (a = e.col);
                                    } else (i = s.line), (a = s.column);
                                } else if (!r) {
                                    let e = this.fromOffset(t);
                                    (t = e.line), (r = e.col);
                                }
                                let l = this.origin(t, r, i, a);
                                return (
                                    ((n = l
                                        ? new c(e, void 0 === l.endLine ? l.line : { column: l.column, line: l.line }, void 0 === l.endLine ? l.column : { column: l.endColumn, line: l.endLine }, l.source, l.file, s.plugin)
                                        : new c(e, void 0 === i ? t : { column: r, line: t }, void 0 === i ? r : { column: a, line: i }, this.css, this.file, s.plugin)).input = {
                                        column: r,
                                        endColumn: a,
                                        endLine: i,
                                        line: t,
                                        source: this.css,
                                    }),
                                    this.file && (o && (n.input.url = o(this.file).toString()), (n.input.file = this.file)),
                                    n
                                );
                            }
                            fromOffset(e) {
                                let t, r;
                                if (this[h]) r = this[h];
                                else {
                                    let e = this.css.split(`
`);
                                    r = Array(e.length);
                                    let t = 0;
                                    for (let s = 0, n = e.length; s < n; s++) (r[s] = t), (t += e[s].length + 1);
                                    this[h] = r;
                                }
                                t = r[r.length - 1];
                                let s = 0;
                                if (e >= t) s = r.length - 1;
                                else {
                                    let t = r.length - 2,
                                        n;
                                    for (; s < t;)
                                        if (e < r[(n = s + ((t - s) >> 1))]) t = n - 1;
                                        else if (e >= r[n + 1]) s = n + 1;
                                        else {
                                            s = n;
                                            break;
                                        }
                                }
                                return { col: e - r[s] + 1, line: s + 1 };
                            }
                            mapResolve(e) {
                                return /^\w+:\/\//.test(e) ? e : a(this.map.consumer().sourceRoot || this.map.root || ".", e);
                            }
                            origin(e, t, r, s) {
                                let a, l;
                                if (!this.map) return !1;
                                let u = this.map.consumer(),
                                    c = u.originalPositionFor({ column: t, line: e });
                                if (!c.source) return !1;
                                "number" == typeof r && (a = u.originalPositionFor({ column: s, line: r })), (l = i(c.source) ? o(c.source) : new URL(c.source, this.map.consumer().sourceRoot || o(this.map.mapFile)));
                                let p = { column: c.column, endColumn: a && a.column, endLine: a && a.line, line: c.line, url: l.toString() };
                                if ("file:" === l.protocol) {
                                    if (n) p.file = n(l);
                                    else throw Error("file: protocol is not available in this PostCSS build");
                                }
                                let h = u.sourceContentFor(c.source);
                                return h && (p.source = h), p;
                            }
                            toJSON() {
                                let e = {};
                                for (let t of ["hasBOM", "css", "file", "id"]) null != this[t] && (e[t] = this[t]);
                                return this.map && ((e.map = { ...this.map }), e.map.consumerCache && (e.map.consumerCache = void 0)), e;
                            }
                            get from() {
                                return this.file || this.id;
                            }
                        };
                    (t.exports = m), (m.default = m), u && u.registerInput && u.registerInput(m);
                }),
                $ = u((e, t) => {
                    var r = O(),
                        s = A(),
                        n = M();
                    function o(e, t) {
                        let r = new s(new n(e, t));
                        try {
                            r.parse();
                        } catch (e) {
                            throw e;
                        }
                        return r.root;
                    }
                    (t.exports = o), (o.default = o), r.registerParse(o);
                }),
                R = u((e, t) => {
                    var r = T(),
                        s = M();
                    t.exports = {
                        isInlineComment(e) {
                            if ("word" === e[0] && "//" === e[1].slice(0, 2)) {
                                let t = e,
                                    n = [],
                                    o,
                                    i;
                                for (; e;) {
                                    if (/\r?\n/.test(e[1])) {
                                        if (/['"].*\r?\n/.test(e[1])) {
                                            n.push(
                                                e[1].substring(
                                                    0,
                                                    e[1].indexOf(`
`)
                                                )
                                            ),
                                                (i = e[1].substring(
                                                    e[1].indexOf(`
`)
                                                ));
                                            let t = this.input.css.valueOf().substring(this.tokenizer.position());
                                            (i += t), (o = e[3] + t.length - i.length);
                                        } else this.tokenizer.back(e);
                                        break;
                                    }
                                    n.push(e[1]), (o = e[2]), (e = this.tokenizer.nextToken({ ignoreUnclosed: !0 }));
                                }
                                let a = ["comment", n.join(""), t[2], o];
                                return this.inlineComment(a), i && ((this.input = new s(i)), (this.tokenizer = r(this.input))), !0;
                            }
                            if ("/" === e[1]) {
                                let r = this.tokenizer.nextToken({ ignoreUnclosed: !0 });
                                if ("comment" === r[0] && /^\/\*/.test(r[1])) return (r[0] = "word"), (r[1] = r[1].slice(1)), (e[1] = "//"), this.tokenizer.back(r), t.exports.isInlineComment.bind(this)(e);
                            }
                            return !1;
                        },
                    };
                }),
                N = u((e, t) => {
                    t.exports = {
                        interpolation(e) {
                            let t = [e, this.tokenizer.nextToken()],
                                r = ["word", "}"];
                            if (t[0][1].length > 1 || "{" !== t[1][0]) return this.tokenizer.back(t[1]), !1;
                            for (e = this.tokenizer.nextToken(); e && r.includes(e[0]);) t.push(e), (e = this.tokenizer.nextToken());
                            let s = t.map((e) => e[1]),
                                [n] = t,
                                o = t.pop(),
                                i = ["word", s.join(""), n[2], o[2]];
                            return this.tokenizer.back(e), this.tokenizer.back(i), !0;
                        },
                    };
                }),
                L = u((e, t) => {
                    var r = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/,
                        s = /\.[0-9]/;
                    t.exports = {
                        isMixinToken: (e) => {
                            let [, t] = e,
                                [n] = t;
                            return ("." === n || "#" === n) && !1 === r.test(t) && !1 === s.test(t);
                        },
                    };
                }),
                W = u((e, t) => {
                    var r = T(),
                        s = /^url\((.+)\)/;
                    t.exports = (e) => {
                        let { name: t, params: n = "" } = e;
                        if ("import" === t && n.length) {
                            e.import = !0;
                            let t = r({ css: n });
                            for (e.filename = n.replace(s, "$1"); !t.endOfFile();) {
                                let [r, s] = t.nextToken();
                                if ("word" === r && "url" === s) return;
                                if ("brackets" === r) {
                                    (e.options = s), (e.filename = n.replace(s, "").trim());
                                    break;
                                }
                            }
                        }
                    };
                }),
                z = u((e, t) => {
                    var r = /:$/,
                        s = /^:(\s+)?/;
                    t.exports = (e) => {
                        let { name: t, params: n = "" } = e;
                        if (":" === e.name.slice(-1)) {
                            if (r.test(t)) {
                                let [s] = t.match(r);
                                (e.name = t.replace(s, "")), (e.raws.afterName = s + (e.raws.afterName || "")), (e.variable = !0), (e.value = e.params);
                            }
                            if (s.test(n)) {
                                let [t] = n.match(s);
                                (e.value = n.replace(t, "")), (e.raws.afterName = (e.raws.afterName || "") + t), (e.variable = !0);
                            }
                        }
                    };
                }),
                q = u((e, t) => {
                    var r = k(),
                        s = A(),
                        { isInlineComment: n } = R(),
                        { interpolation: o } = N(),
                        { isMixinToken: i } = L(),
                        a = W(),
                        l = z(),
                        u = /(!\s*important)$/i;
                    t.exports = class extends s {
                        constructor(...e) {
                            super(...e), (this.lastNode = null);
                        }
                        atrule(e) {
                            o.bind(this)(e) || (super.atrule(e), a(this.lastNode), l(this.lastNode));
                        }
                        decl(...e) {
                            super.decl(...e), /extend\(.+\)/i.test(this.lastNode.value) && (this.lastNode.extend = !0);
                        }
                        each(e) {
                            e[0][1] = ` ${e[0][1]}`;
                            let t = e.findIndex((e) => "(" === e[0]),
                                r = e.reverse().find((e) => ")" === e[0]),
                                s = e.reverse().indexOf(r),
                                n = e
                                    .splice(t, s)
                                    .map((e) => e[1])
                                    .join("");
                            for (let t of e.reverse()) this.tokenizer.back(t);
                            this.atrule(this.tokenizer.nextToken()), (this.lastNode.function = !0), (this.lastNode.params = n);
                        }
                        init(e, t, r) {
                            super.init(e, t, r), (this.lastNode = e);
                        }
                        inlineComment(e) {
                            let t = new r(),
                                s = e[1].slice(2);
                            if ((this.init(t, e[2]), (t.source.end = this.getPosition(e[3] || e[2])), (t.inline = !0), (t.raws.begin = "//"), /^\s*$/.test(s))) (t.text = ""), (t.raws.left = s), (t.raws.right = "");
                            else {
                                let e = s.match(/^(\s*)([^]*[^\s])(\s*)$/);
                                [, t.raws.left, t.text, t.raws.right] = e;
                            }
                        }
                        mixin(e) {
                            let [t] = e,
                                r = t[1].slice(0, 1),
                                s = e.findIndex((e) => "brackets" === e[0]),
                                n = e.findIndex((e) => "(" === e[0]),
                                o = "";
                            if ((s < 0 || s > 3) && n > 0) {
                                let t = e.reduce((e, t, r) => (")" === t[0] ? r : e)),
                                    r = e
                                        .slice(n, t + n)
                                        .map((e) => e[1])
                                        .join(""),
                                    [s] = e.slice(n),
                                    o = [s[2], s[3]],
                                    [i] = e.slice(t, t + 1),
                                    a = ["brackets", r].concat(o, [i[2], i[3]]),
                                    l = e.slice(0, n),
                                    u = e.slice(t + 1);
                                (e = l).push(a), (e = e.concat(u));
                            }
                            let i = [];
                            for (let t of e) if ((("!" === t[1] || i.length) && i.push(t), "important" === t[1])) break;
                            if (i.length) {
                                let [t] = i,
                                    r = e.indexOf(t),
                                    s = i[i.length - 1],
                                    n = [t[2], t[3]],
                                    o = [s[4], s[5]],
                                    a = ["word", i.map((e) => e[1]).join("")].concat(n, o);
                                e.splice(r, i.length, a);
                            }
                            let a = e.findIndex((e) => u.test(e[1]));
                            for (let t of (a > 0 && (([, o] = e[a]), e.splice(a, 1)), e.reverse())) this.tokenizer.back(t);
                            this.atrule(this.tokenizer.nextToken()), (this.lastNode.mixin = !0), (this.lastNode.raws.identifier = r), o && ((this.lastNode.important = !0), (this.lastNode.raws.important = o));
                        }
                        other(e) {
                            n.bind(this)(e) || super.other(e);
                        }
                        rule(e) {
                            let t = e[e.length - 1],
                                r = e[e.length - 2];
                            if ("at-word" === r[0] && "{" === t[0] && (this.tokenizer.back(t), o.bind(this)(r))) {
                                let t = this.tokenizer.nextToken();
                                for (let r of (e = e.slice(0, e.length - 2).concat([t])).reverse()) this.tokenizer.back(r);
                                return;
                            }
                            super.rule(e), /:extend\(.+\)/i.test(this.lastNode.selector) && (this.lastNode.extend = !0);
                        }
                        unknownWord(e) {
                            let [t] = e;
                            if ("each" === e[0][1] && "(" === e[1][0]) {
                                this.each(e);
                                return;
                            }
                            if (i(t)) {
                                this.mixin(e);
                                return;
                            }
                            super.unknownWord(e);
                        }
                    };
                }),
                D = u((e, t) => {
                    var r = v();
                    t.exports = class extends r {
                        atrule(e, t) {
                            if (!e.mixin && !e.variable && !e.function) {
                                super.atrule(e, t);
                                return;
                            }
                            let r = `${e.function ? "" : e.raws.identifier || "@"}${e.name}`,
                                s = e.params ? this.rawValue(e, "params") : "",
                                n = e.raws.important || "";
                            if ((e.variable && (s = e.value), "u" > typeof e.raws.afterName ? (r += e.raws.afterName) : s && (r += " "), e.nodes)) this.block(e, r + s + n);
                            else {
                                let o = (e.raws.between || "") + n + (t ? ";" : "");
                                this.builder(r + s + o, e);
                            }
                        }
                        comment(e) {
                            if (e.inline) {
                                let t = this.raw(e, "left", "commentLeft"),
                                    r = this.raw(e, "right", "commentRight");
                                this.builder(`//${t}${e.text}${r}`, e);
                            } else super.comment(e);
                        }
                    };
                }),
                B = u((e, t) => {
                    var r = M(),
                        s = q(),
                        n = D();
                    t.exports = {
                        parse(e, t) {
                            let n = new r(e, t),
                                o = new s(n);
                            return (
                                o.parse(),
                                o.root.walk((e) => {
                                    let t = n.css.lastIndexOf(e.source.input.css);
                                    if (0 === t) return;
                                    if (t + e.source.input.css.length !== n.css.length) throw Error("Invalid state detected in postcss-less");
                                    let r = t + e.source.start.offset,
                                        s = n.fromOffset(t + e.source.start.offset);
                                    if (((e.source.start = { offset: r, line: s.line, column: s.col }), e.source.end)) {
                                        let r = t + e.source.end.offset,
                                            s = n.fromOffset(t + e.source.end.offset);
                                        e.source.end = { offset: r, line: s.line, column: s.col };
                                    }
                                }),
                                o.root
                            );
                        },
                        stringify(e, t) {
                            new n(t).stringify(e);
                        },
                        nodeToString(e) {
                            let r = "";
                            return (
                                t.exports.stringify(e, (e) => {
                                    r += e;
                                }),
                                r
                            );
                        },
                    };
                }),
                F = u((e, t) => {
                    t.exports = class {
                        generate() { }
                    };
                }),
                U = u((e, t) => {
                    var r,
                        s,
                        n = O(),
                        o = class extends n {
                            constructor(e) {
                                super({ type: "document", ...e }), this.nodes || (this.nodes = []);
                            }
                            toResult(e = {}) {
                                return new r(new s(), this, e).stringify();
                            }
                        };
                    (o.registerLazyResult = (e) => {
                        r = e;
                    }),
                        (o.registerProcessor = (e) => {
                            s = e;
                        }),
                        (t.exports = o),
                        (o.default = o);
                }),
                V = u((e, t) => {
                    var r = {};
                    t.exports = function (e) {
                        r[e] || ((r[e] = !0), "u" > typeof console && console.warn && console.warn(e));
                    };
                }),
                G = u((e, t) => {
                    var r = class {
                        constructor(e, t = {}) {
                            if (((this.type = "warning"), (this.text = e), t.node && t.node.source)) {
                                let e = t.node.rangeBy(t);
                                (this.line = e.start.line), (this.column = e.start.column), (this.endLine = e.end.line), (this.endColumn = e.end.column);
                            }
                            for (let e in t) this[e] = t[e];
                        }
                        toString() {
                            return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
                        }
                    };
                    (t.exports = r), (r.default = r);
                }),
                J = u((e, t) => {
                    var r = G(),
                        s = class {
                            constructor(e, t, r) {
                                (this.processor = e), (this.messages = []), (this.root = t), (this.opts = r), (this.css = void 0), (this.map = void 0);
                            }
                            toString() {
                                return this.css;
                            }
                            warn(e, t = {}) {
                                t.plugin || (this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin));
                                let s = new r(e, t);
                                return this.messages.push(s), s;
                            }
                            warnings() {
                                return this.messages.filter((e) => "warning" === e.type);
                            }
                            get content() {
                                return this.css;
                            }
                        };
                    (t.exports = s), (s.default = s);
                }),
                H = u((e, t) => {
                    var { isClean: r, my: s } = d(),
                        n = F(),
                        o = w(),
                        i = O(),
                        a = U(),
                        l = (V(), J()),
                        u = $(),
                        c = C(),
                        p = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" },
                        h = {
                            AtRule: !0,
                            AtRuleExit: !0,
                            Comment: !0,
                            CommentExit: !0,
                            Declaration: !0,
                            DeclarationExit: !0,
                            Document: !0,
                            DocumentExit: !0,
                            Once: !0,
                            OnceExit: !0,
                            postcssPlugin: !0,
                            prepare: !0,
                            Root: !0,
                            RootExit: !0,
                            Rule: !0,
                            RuleExit: !0,
                        },
                        f = { Once: !0, postcssPlugin: !0, prepare: !0 };
                    function m(e) {
                        return "object" == typeof e && "function" == typeof e.then;
                    }
                    function y(e) {
                        let t = !1,
                            r = p[e.type];
                        return (
                            "decl" === e.type ? (t = e.prop.toLowerCase()) : "atrule" === e.type && (t = e.name.toLowerCase()),
                            t && e.append ? [r, r + "-" + t, 0, r + "Exit", r + "Exit-" + t] : t ? [r, r + "-" + t, r + "Exit", r + "Exit-" + t] : e.append ? [r, 0, r + "Exit"] : [r, r + "Exit"]
                        );
                    }
                    function g(e) {
                        return { eventIndex: 0, events: "document" === e.type ? ["Document", 0, "DocumentExit"] : "root" === e.type ? ["Root", 0, "RootExit"] : y(e), iterator: 0, node: e, visitorIndex: 0, visitors: [] };
                    }
                    function v(e) {
                        return (e[r] = !1), e.nodes && e.nodes.forEach((e) => v(e)), e;
                    }
                    var b = {},
                        x = class e {
                            constructor(t, r, n) {
                                let o;
                                if (((this.stringified = !1), (this.processed = !1), "object" == typeof r && null !== r && ("root" === r.type || "document" === r.type))) o = v(r);
                                else if (r instanceof e || r instanceof l) (o = v(r.root)), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), (n.map.prev = r.map));
                                else {
                                    let e = u;
                                    n.syntax && (e = n.syntax.parse), n.parser && (e = n.parser), e.parse && (e = e.parse);
                                    try {
                                        o = e(r, n);
                                    } catch (e) {
                                        (this.processed = !0), (this.error = e);
                                    }
                                    o && !o[s] && i.rebuild(o);
                                }
                                (this.result = new l(t, o, n)),
                                    (this.helpers = { ...b, postcss: b, result: this.result }),
                                    (this.plugins = this.processor.plugins.map((e) => ("object" == typeof e && e.prepare ? { ...e, ...e.prepare(this.result) } : e)));
                            }
                            async() {
                                return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
                            }
                            catch(e) {
                                return this.async().catch(e);
                            }
                            finally(e) {
                                return this.async().then(e, e);
                            }
                            getAsyncError() {
                                throw Error("Use process(css).then(cb) to work with async plugins");
                            }
                            handleError(e, t) {
                                let r = this.result.lastPlugin;
                                try {
                                    t && t.addToError(e), (this.error = e), "CssSyntaxError" !== e.name || e.plugin ? r.postcssVersion : ((e.plugin = r.postcssPlugin), e.setMessage());
                                } catch (e) {
                                    console && console.error && console.error(e);
                                }
                                return e;
                            }
                            prepareVisitors() {
                                this.listeners = {};
                                let e = (e, t, r) => {
                                    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push([e, r]);
                                };
                                for (let t of this.plugins)
                                    if ("object" == typeof t)
                                        for (let r in t) {
                                            if (!h[r] && /^[A-Z]/.test(r)) throw Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                                            if (!f[r]) {
                                                if ("object" == typeof t[r]) for (let s in t[r]) e(t, "*" === s ? r : r + "-" + s.toLowerCase(), t[r][s]);
                                                else "function" == typeof t[r] && e(t, r, t[r]);
                                            }
                                        }
                                this.hasListener = Object.keys(this.listeners).length > 0;
                            }
                            async runAsync() {
                                this.plugin = 0;
                                for (let e = 0; e < this.plugins.length; e++) {
                                    let t = this.plugins[e],
                                        r = this.runOnRoot(t);
                                    if (m(r))
                                        try {
                                            await r;
                                        } catch (e) {
                                            throw this.handleError(e);
                                        }
                                }
                                if ((this.prepareVisitors(), this.hasListener)) {
                                    let e = this.result.root;
                                    for (; !e[r];) {
                                        e[r] = !0;
                                        let t = [g(e)];
                                        for (; t.length > 0;) {
                                            let e = this.visitTick(t);
                                            if (m(e))
                                                try {
                                                    await e;
                                                } catch (r) {
                                                    let e = t[t.length - 1].node;
                                                    throw this.handleError(r, e);
                                                }
                                        }
                                    }
                                    if (this.listeners.OnceExit)
                                        for (let [t, r] of this.listeners.OnceExit) {
                                            this.result.lastPlugin = t;
                                            try {
                                                if ("document" === e.type) {
                                                    let t = e.nodes.map((e) => r(e, this.helpers));
                                                    await Promise.all(t);
                                                } else await r(e, this.helpers);
                                            } catch (e) {
                                                throw this.handleError(e);
                                            }
                                        }
                                }
                                return (this.processed = !0), this.stringify();
                            }
                            runOnRoot(e) {
                                this.result.lastPlugin = e;
                                try {
                                    if ("object" == typeof e && e.Once) {
                                        if ("document" === this.result.root.type) {
                                            let t = this.result.root.nodes.map((t) => e.Once(t, this.helpers));
                                            return m(t[0]) ? Promise.all(t) : t;
                                        }
                                        return e.Once(this.result.root, this.helpers);
                                    }
                                    if ("function" == typeof e) return e(this.result.root, this.result);
                                } catch (e) {
                                    throw this.handleError(e);
                                }
                            }
                            stringify() {
                                if (this.error) throw this.error;
                                if (this.stringified) return this.result;
                                (this.stringified = !0), this.sync();
                                let e = this.result.opts,
                                    t = o;
                                e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
                                let r = new n(t, this.result.root, this.result.opts).generate();
                                return (this.result.css = r[0]), (this.result.map = r[1]), this.result;
                            }
                            sync() {
                                if (this.error) throw this.error;
                                if (this.processed) return this.result;
                                if (((this.processed = !0), this.processing)) throw this.getAsyncError();
                                for (let e of this.plugins) if (m(this.runOnRoot(e))) throw this.getAsyncError();
                                if ((this.prepareVisitors(), this.hasListener)) {
                                    let e = this.result.root;
                                    for (; !e[r];) (e[r] = !0), this.walkSync(e);
                                    if (this.listeners.OnceExit) {
                                        if ("document" === e.type) for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
                                        else this.visitSync(this.listeners.OnceExit, e);
                                    }
                                }
                                return this.result;
                            }
                            then(e, t) {
                                return this.async().then(e, t);
                            }
                            toString() {
                                return this.css;
                            }
                            visitSync(e, t) {
                                for (let [r, s] of e) {
                                    let e;
                                    this.result.lastPlugin = r;
                                    try {
                                        e = s(t, this.helpers);
                                    } catch (e) {
                                        throw this.handleError(e, t.proxyOf);
                                    }
                                    if ("root" !== t.type && "document" !== t.type && !t.parent) return !0;
                                    if (m(e)) throw this.getAsyncError();
                                }
                            }
                            visitTick(e) {
                                let t = e[e.length - 1],
                                    { node: s, visitors: n } = t;
                                if ("root" !== s.type && "document" !== s.type && !s.parent) {
                                    e.pop();
                                    return;
                                }
                                if (n.length > 0 && t.visitorIndex < n.length) {
                                    let [e, r] = n[t.visitorIndex];
                                    (t.visitorIndex += 1), t.visitorIndex === n.length && ((t.visitors = []), (t.visitorIndex = 0)), (this.result.lastPlugin = e);
                                    try {
                                        return r(s.toProxy(), this.helpers);
                                    } catch (e) {
                                        throw this.handleError(e, s);
                                    }
                                }
                                if (0 !== t.iterator) {
                                    let n = t.iterator,
                                        o;
                                    for (; (o = s.nodes[s.indexes[n]]);)
                                        if (((s.indexes[n] += 1), !o[r])) {
                                            (o[r] = !0), e.push(g(o));
                                            return;
                                        }
                                    (t.iterator = 0), delete s.indexes[n];
                                }
                                let o = t.events;
                                for (; t.eventIndex < o.length;) {
                                    let e = o[t.eventIndex];
                                    if (((t.eventIndex += 1), 0 === e)) {
                                        s.nodes && s.nodes.length && ((s[r] = !0), (t.iterator = s.getIterator()));
                                        return;
                                    }
                                    if (this.listeners[e]) {
                                        t.visitors = this.listeners[e];
                                        return;
                                    }
                                }
                                e.pop();
                            }
                            walkSync(e) {
                                for (let t of ((e[r] = !0), y(e)))
                                    if (0 === t)
                                        e.nodes &&
                                            e.each((e) => {
                                                e[r] || this.walkSync(e);
                                            });
                                    else {
                                        let r = this.listeners[t];
                                        if (r && this.visitSync(r, e.toProxy())) return;
                                    }
                            }
                            warnings() {
                                return this.sync().warnings();
                            }
                            get content() {
                                return this.stringify().content;
                            }
                            get css() {
                                return this.stringify().css;
                            }
                            get map() {
                                return this.stringify().map;
                            }
                            get messages() {
                                return this.sync().messages;
                            }
                            get opts() {
                                return this.result.opts;
                            }
                            get processor() {
                                return this.result.processor;
                            }
                            get root() {
                                return this.sync().root;
                            }
                            get [Symbol.toStringTag]() {
                                return "LazyResult";
                            }
                        };
                    (x.registerPostcss = (e) => {
                        b = e;
                    }),
                        (t.exports = x),
                        (x.default = x),
                        c.registerLazyResult(x),
                        a.registerLazyResult(x);
                }),
                Q = u((e, t) => {
                    var r = F(),
                        s = w(),
                        n = (V(), $()),
                        o = J(),
                        i = class {
                            constructor(e, t, n) {
                                let i;
                                (t = t.toString()), (this.stringified = !1), (this._processor = e), (this._css = t), (this._opts = n), (this._map = void 0), (this.result = new o(this._processor, i, this._opts)), (this.result.css = t);
                                let a = this;
                                Object.defineProperty(this.result, "root", { get: () => a.root });
                                let l = new r(s, i, this._opts, t);
                                if (l.isMap()) {
                                    let [e, t] = l.generate();
                                    e && (this.result.css = e), t && (this.result.map = t);
                                } else l.clearAnnotation(), (this.result.css = l.css);
                            }
                            async() {
                                return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
                            }
                            catch(e) {
                                return this.async().catch(e);
                            }
                            finally(e) {
                                return this.async().then(e, e);
                            }
                            sync() {
                                if (this.error) throw this.error;
                                return this.result;
                            }
                            then(e, t) {
                                return this.async().then(e, t);
                            }
                            toString() {
                                return this._css;
                            }
                            warnings() {
                                return [];
                            }
                            get content() {
                                return this.result.css;
                            }
                            get css() {
                                return this.result.css;
                            }
                            get map() {
                                return this.result.map;
                            }
                            get messages() {
                                return [];
                            }
                            get opts() {
                                return this.result.opts;
                            }
                            get processor() {
                                return this.result.processor;
                            }
                            get root() {
                                let e;
                                if (this._root) return this._root;
                                try {
                                    e = n(this._css, this._opts);
                                } catch (e) {
                                    this.error = e;
                                }
                                if (this.error) throw this.error;
                                return (this._root = e), e;
                            }
                            get [Symbol.toStringTag]() {
                                return "NoWorkResult";
                            }
                        };
                    (t.exports = i), (i.default = i);
                }),
                K = u((e, t) => {
                    var r = Q(),
                        s = H(),
                        n = U(),
                        o = C(),
                        i = class {
                            constructor(e = []) {
                                (this.version = "8.4.33"), (this.plugins = this.normalize(e));
                            }
                            normalize(e) {
                                let t = [];
                                for (let r of e)
                                    if ((!0 === r.postcss ? (r = r()) : r.postcss && (r = r.postcss), "object" == typeof r && Array.isArray(r.plugins))) t = t.concat(r.plugins);
                                    else if ("object" == typeof r && r.postcssPlugin) t.push(r);
                                    else if ("function" == typeof r) t.push(r);
                                    else if (!("object" == typeof r && (r.parse || r.stringify))) throw Error(r + " is not a PostCSS plugin");
                                return t;
                            }
                            process(e, t = {}) {
                                return this.plugins.length || t.parser || t.stringifier || t.syntax ? new s(this, e, t) : new r(this, e, t);
                            }
                            use(e) {
                                return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
                            }
                        };
                    (t.exports = i), (i.default = i), o.registerProcessor(i), n.registerProcessor(i);
                }),
                Z = u((e, t) => {
                    var r = x(),
                        s = P(),
                        n = k(),
                        o = S(),
                        i = M(),
                        a = C(),
                        l = E();
                    function u(e, t) {
                        if (Array.isArray(e)) return e.map((e) => u(e));
                        let { inputs: c, ...p } = e;
                        if (c)
                            for (let e of ((t = []), c)) {
                                let r = { ...e, __proto__: i.prototype };
                                r.map && (r.map = { ...r.map, __proto__: s.prototype }), t.push(r);
                            }
                        if ((p.nodes && (p.nodes = e.nodes.map((e) => u(e, t))), p.source)) {
                            let { inputId: e, ...r } = p.source;
                            (p.source = r), null != e && (p.source.input = t[e]);
                        }
                        if ("root" === p.type) return new a(p);
                        if ("decl" === p.type) return new r(p);
                        if ("rule" === p.type) return new l(p);
                        if ("comment" === p.type) return new n(p);
                        if ("atrule" === p.type) return new o(p);
                        throw Error("Unknown node type: " + e.type);
                    }
                    (t.exports = u), (u.default = u);
                }),
                Y = u((e, t) => {
                    var r = g(),
                        s = x(),
                        n = H(),
                        o = O(),
                        i = K(),
                        a = w(),
                        l = Z(),
                        u = U(),
                        c = G(),
                        p = k(),
                        h = S(),
                        f = J(),
                        d = M(),
                        m = $(),
                        y = _(),
                        v = E(),
                        T = C(),
                        A = b();
                    function j(...e) {
                        return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new i(e);
                    }
                    (j.plugin = function (e, t) {
                        let r,
                            s = !1;
                        function n(...r) {
                            console &&
                                console.warn &&
                                !s &&
                                ((s = !0),
                                    console.warn(
                                        e +
                                        `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
                                    ));
                            let o = t(...r);
                            return (o.postcssPlugin = e), (o.postcssVersion = new i().version), o;
                        }
                        return (
                            Object.defineProperty(n, "postcss", { get: () => (r || (r = n()), r) }),
                            (n.process = function (e, t, r) {
                                return j([n(r)]).process(e, t);
                            }),
                            n
                        );
                    }),
                        (j.stringify = a),
                        (j.parse = m),
                        (j.fromJSON = l),
                        (j.list = y),
                        (j.comment = (e) => new p(e)),
                        (j.atRule = (e) => new h(e)),
                        (j.decl = (e) => new s(e)),
                        (j.rule = (e) => new v(e)),
                        (j.root = (e) => new T(e)),
                        (j.document = (e) => new u(e)),
                        (j.CssSyntaxError = r),
                        (j.Declaration = s),
                        (j.Container = o),
                        (j.Processor = i),
                        (j.Document = u),
                        (j.Comment = p),
                        (j.Warning = c),
                        (j.AtRule = h),
                        (j.Result = f),
                        (j.Input = d),
                        (j.Rule = v),
                        (j.Root = T),
                        (j.Node = A),
                        n.registerPostcss(j),
                        (t.exports = j),
                        (j.default = j);
                }),
                X = u((e, t) => {
                    var { Container: r } = Y(),
                        s = class extends r {
                            constructor(e) {
                                super(e), (this.type = "decl"), (this.isNested = !0), this.nodes || (this.nodes = []);
                            }
                        };
                    t.exports = s;
                }),
                ee = u((e, t) => {
                    var r = /[\t\n\f\r "#'()/;[\\\]{}]/g,
                        s = /[,\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
                        n = /.[\r\n"'(/\\]/,
                        o = /[\da-f]/i,
                        i = /[\n\f\r]/g;
                    t.exports = function (e, t = {}) {
                        let a = e.css.valueOf(),
                            l = t.ignoreErrors,
                            u,
                            c,
                            p,
                            h,
                            f,
                            d,
                            m,
                            y,
                            g,
                            v = a.length,
                            w = 0,
                            b = [],
                            x = [],
                            k;
                        function O(t) {
                            throw e.error("Unclosed " + t, w);
                        }
                        function T() {
                            let e = 1,
                                t = !1,
                                r = !1;
                            for (; e > 0;)
                                (c += 1),
                                    a.length <= c && O("interpolation"),
                                    (u = a.charCodeAt(c)),
                                    (y = a.charCodeAt(c + 1)),
                                    t ? (r || u !== t ? (92 === u ? (r = !r) : r && (r = !1)) : ((t = !1), (r = !1))) : 39 === u || 34 === u ? (t = u) : 125 === u ? (e -= 1) : 35 === u && 123 === y && (e += 1);
                        }
                        return {
                            back: function (e) {
                                x.push(e);
                            },
                            endOfFile: function () {
                                return 0 === x.length && w >= v;
                            },
                            nextToken: function (e) {
                                if (x.length) return x.pop();
                                if (w >= v) return;
                                let t = !!e && e.ignoreUnclosed;
                                switch ((u = a.charCodeAt(w))) {
                                    case 10:
                                    case 32:
                                    case 9:
                                    case 13:
                                    case 12:
                                        c = w;
                                        do (c += 1), (u = a.charCodeAt(c));
                                        while (32 === u || 10 === u || 9 === u || 13 === u || 12 === u);
                                        (g = ["space", a.slice(w, c)]), (w = c - 1);
                                        break;
                                    case 91:
                                    case 93:
                                    case 123:
                                    case 125:
                                    case 58:
                                    case 59:
                                    case 41: {
                                        let e = String.fromCharCode(u);
                                        g = [e, e, w];
                                        break;
                                    }
                                    case 44:
                                        g = ["word", ",", w, w + 1];
                                        break;
                                    case 40:
                                        if (((m = b.length ? b.pop()[1] : ""), (y = a.charCodeAt(w + 1)), "url" === m && 39 !== y && 34 !== y)) {
                                            for (k = 1, d = !1, c = w + 1; c <= a.length - 1;) {
                                                if (92 === (y = a.charCodeAt(c))) d = !d;
                                                else if (40 === y) k += 1;
                                                else if (41 === y && 0 == (k -= 1)) break;
                                                c += 1;
                                            }
                                            (g = ["brackets", (h = a.slice(w, c + 1)), w, c]), (w = c);
                                        } else (c = a.indexOf(")", w + 1)), (h = a.slice(w, c + 1)), -1 === c || n.test(h) ? (g = ["(", "(", w]) : ((g = ["brackets", h, w, c]), (w = c));
                                        break;
                                    case 39:
                                    case 34:
                                        for (p = u, c = w, d = !1; c < v && (++c === v && O("string"), (u = a.charCodeAt(c)), (y = a.charCodeAt(c + 1)), !(!d && u === p));) 92 === u ? (d = !d) : d ? (d = !1) : 35 === u && 123 === y && T();
                                        (g = ["string", a.slice(w, c + 1), w, c]), (w = c);
                                        break;
                                    case 64:
                                        (r.lastIndex = w + 1), r.test(a), (c = 0 === r.lastIndex ? a.length - 1 : r.lastIndex - 2), (g = ["at-word", a.slice(w, c + 1), w, c]), (w = c);
                                        break;
                                    case 92:
                                        for (c = w, f = !0; 92 === a.charCodeAt(c + 1);) (c += 1), (f = !f);
                                        if (((u = a.charCodeAt(c + 1)), f && 47 !== u && 32 !== u && 10 !== u && 9 !== u && 13 !== u && 12 !== u && ((c += 1), o.test(a.charAt(c))))) {
                                            for (; o.test(a.charAt(c + 1));) c += 1;
                                            32 === a.charCodeAt(c + 1) && (c += 1);
                                        }
                                        (g = ["word", a.slice(w, c + 1), w, c]), (w = c);
                                        break;
                                    default:
                                        (y = a.charCodeAt(w + 1)),
                                            35 === u && 123 === y
                                                ? ((c = w), T(), (g = ["word", (h = a.slice(w, c + 1)), w, c]))
                                                : 47 === u && 42 === y
                                                    ? (0 === (c = a.indexOf("*/", w + 2) + 1) && (l || t ? (c = a.length) : O("comment")), (g = ["comment", a.slice(w, c + 1), w, c]))
                                                    : 47 === u && 47 === y
                                                        ? ((i.lastIndex = w + 1), i.test(a), (c = 0 === i.lastIndex ? a.length - 1 : i.lastIndex - 2), (g = ["comment", (h = a.slice(w, c + 1)), w, c, "inline"]))
                                                        : ((s.lastIndex = w + 1), s.test(a), (c = 0 === s.lastIndex ? a.length - 1 : s.lastIndex - 2), (g = ["word", a.slice(w, c + 1), w, c]), b.push(g)),
                                            (w = c);
                                }
                                return w++, g;
                            },
                            position: function () {
                                return w;
                            },
                        };
                    };
                }),
                et = u((e, t) => {
                    var { Comment: r } = Y(),
                        s = A(),
                        n = X(),
                        o = ee(),
                        i = class extends s {
                            atrule(e) {
                                let t = e[1],
                                    r = e;
                                for (; !this.tokenizer.endOfFile();) {
                                    let e = this.tokenizer.nextToken();
                                    if ("word" === e[0] && e[2] === r[3] + 1) (t += e[1]), (r = e);
                                    else {
                                        this.tokenizer.back(e);
                                        break;
                                    }
                                }
                                super.atrule(["at-word", t, e[2], r[3]]);
                            }
                            comment(e) {
                                if ("inline" === e[4]) {
                                    let t = new r();
                                    this.init(t, e[2]), (t.raws.inline = !0);
                                    let s = this.input.fromOffset(e[3]);
                                    t.source.end = { column: s.col, line: s.line, offset: e[3] + 1 };
                                    let n = e[1].slice(2);
                                    if (/^\s*$/.test(n)) (t.text = ""), (t.raws.left = n), (t.raws.right = "");
                                    else {
                                        let e = n.match(/^(\s*)([^]*\S)(\s*)$/),
                                            r = e[2].replace(/(\*\/|\/\*)/g, "*//*");
                                        (t.text = r), (t.raws.left = e[1]), (t.raws.right = e[3]), (t.raws.text = e[2]);
                                    }
                                } else super.comment(e);
                            }
                            createTokenizer() {
                                this.tokenizer = o(this.input);
                            }
                            raw(e, t, r, s) {
                                if ((super.raw(e, t, r, s), e.raws[t])) {
                                    let s = e.raws[t].raw;
                                    (e.raws[t].raw = r.reduce((e, t) => ("comment" === t[0] && "inline" === t[4] ? e + "/*" + t[1].slice(2).replace(/(\*\/|\/\*)/g, "*//*") + "*/" : e + t[1]), "")),
                                        s !== e.raws[t].raw && (e.raws[t].scss = s);
                                }
                            }
                            rule(e) {
                                let t = !1,
                                    r = 0,
                                    s = "";
                                for (let n of e)
                                    if (t) "comment" !== n[0] && "{" !== n[0] && (s += n[1]);
                                    else {
                                        if (
                                            "space" === n[0] &&
                                            n[1].includes(`
`)
                                        )
                                            break;
                                        "(" === n[0] ? (r += 1) : ")" === n[0] ? (r -= 1) : 0 === r && ":" === n[0] && (t = !0);
                                    }
                                if (!t || "" === s.trim() || /^[#:A-Za-z-]/.test(s)) super.rule(e);
                                else {
                                    let t, r;
                                    e.pop();
                                    let s = new n();
                                    this.init(s, e[0][2]);
                                    for (let r = e.length - 1; r >= 0; r--)
                                        if ("space" !== e[r][0]) {
                                            t = e[r];
                                            break;
                                        }
                                    if (t[3]) {
                                        let e = this.input.fromOffset(t[3]);
                                        s.source.end = { column: e.col, line: e.line, offset: t[3] + 1 };
                                    } else {
                                        let e = this.input.fromOffset(t[2]);
                                        s.source.end = { column: e.col, line: e.line, offset: t[2] + 1 };
                                    }
                                    for (; "word" !== e[0][0];) s.raws.before += e.shift()[1];
                                    if (e[0][2]) {
                                        let t = this.input.fromOffset(e[0][2]);
                                        s.source.start = { column: t.col, line: t.line, offset: e[0][2] };
                                    }
                                    for (s.prop = ""; e.length;) {
                                        let t = e[0][0];
                                        if (":" === t || "space" === t || "comment" === t) break;
                                        s.prop += e.shift()[1];
                                    }
                                    for (s.raws.between = ""; e.length;)
                                        if (":" === (r = e.shift())[0]) {
                                            s.raws.between += r[1];
                                            break;
                                        } else s.raws.between += r[1];
                                    ("_" === s.prop[0] || "*" === s.prop[0]) && ((s.raws.before += s.prop[0]), (s.prop = s.prop.slice(1))), (s.raws.between += this.spacesAndCommentsFromStart(e)), this.precheckMissedSemicolon(e);
                                    for (let t = e.length - 1; t > 0; t--) {
                                        if ("!important" === (r = e[t])[1]) {
                                            s.important = !0;
                                            let r = this.stringFrom(e, t);
                                            " !important" !== (r = this.spacesFromEnd(e) + r) && (s.raws.important = r);
                                            break;
                                        }
                                        if ("important" === r[1]) {
                                            let r = e.slice(0),
                                                n = "";
                                            for (let e = t; e > 0; e--) {
                                                let t = r[e][0];
                                                if (0 === n.trim().indexOf("!") && "space" !== t) break;
                                                n = r.pop()[1] + n;
                                            }
                                            0 === n.trim().indexOf("!") && ((s.important = !0), (s.raws.important = n), (e = r));
                                        }
                                        if ("space" !== r[0] && "comment" !== r[0]) break;
                                    }
                                    this.raw(s, "value", e), s.value.includes(":") && this.checkMissedSemicolon(e), (this.current = s);
                                }
                            }
                        };
                    t.exports = i;
                }),
                er = u((e, t) => {
                    var { Input: r } = Y(),
                        s = et();
                    t.exports = function (e, t) {
                        let n = new s(new r(e, t));
                        return n.parse(), n.root;
                    };
                }),
                es = u((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = function (e) {
                            (this.after = e.after), (this.before = e.before), (this.type = e.type), (this.value = e.value), (this.sourceIndex = e.sourceIndex);
                        });
                }),
                en = u((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var t,
                        r = (t = es()) && t.__esModule ? t : { default: t };
                    function s(e) {
                        var t = this;
                        this.constructor(e),
                            (this.nodes = e.nodes),
                            void 0 === this.after && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ""),
                            void 0 === this.before && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ""),
                            void 0 === this.sourceIndex && (this.sourceIndex = this.before.length),
                            this.nodes.forEach(function (e) {
                                e.parent = t;
                            });
                    }
                    (s.prototype = Object.create(r.default.prototype)),
                        (s.constructor = r.default),
                        (s.prototype.walk = function (e, t) {
                            for (var r = "string" == typeof e || e instanceof RegExp, s = r ? t : e, n = "string" == typeof e ? new RegExp(e) : e, o = 0; o < this.nodes.length; o++) {
                                var i = this.nodes[o];
                                if (((!r || n.test(i.type)) && s && !1 === s(i, o, this.nodes)) || (i.nodes && !1 === i.walk(e, t))) return !1;
                            }
                            return !0;
                        }),
                        (s.prototype.each = function () {
                            for (var e = arguments.length <= 0 || void 0 === arguments[0] ? function () { } : arguments[0], t = 0; t < this.nodes.length; t++) if (!1 === e(this.nodes[t], t, this.nodes)) return !1;
                            return !0;
                        }),
                        (e.default = s);
                }),
                eo = u((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.parseMediaFeature = n),
                        (e.parseMediaQuery = o),
                        (e.parseMediaList = function (e) {
                            var s = [],
                                n = 0,
                                i = 0,
                                a = /^(\s*)url\s*\(/.exec(e);
                            if (null !== a) {
                                for (var l = a[0].length, u = 1; u > 0;) {
                                    var c = e[l];
                                    "(" === c && u++, ")" === c && u--, l++;
                                }
                                s.unshift(new t.default({ type: "url", value: e.substring(0, l).trim(), sourceIndex: a[1].length, before: a[1], after: /^(\s*)/.exec(e.substring(l))[1] })), (n = l);
                            }
                            for (var p = n; p < e.length; p++) {
                                var h = e[p];
                                if (("(" === h && i++, ")" === h && i--, 0 === i && "," === h)) {
                                    var f = e.substring(n, p),
                                        d = /^(\s*)/.exec(f)[1];
                                    s.push(new r.default({ type: "media-query", value: f.trim(), sourceIndex: n + d.length, nodes: o(f, n), before: d, after: /(\s*)$/.exec(f)[1] })), (n = p + 1);
                                }
                            }
                            var m = e.substring(n),
                                y = /^(\s*)/.exec(m)[1];
                            return s.push(new r.default({ type: "media-query", value: m.trim(), sourceIndex: n + y.length, nodes: o(m, n), before: y, after: /(\s*)$/.exec(m)[1] })), s;
                        });
                    var t = s(es()),
                        r = s(en());
                    function s(e) {
                        return e && e.__esModule ? e : { default: e };
                    }
                    function n(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            r = [{ mode: "normal", character: null }],
                            s = [],
                            n = 0,
                            o = "",
                            i = null,
                            a = null,
                            l = t,
                            u = e;
                        "(" === e[0] && ")" === e[e.length - 1] && ((u = e.substring(1, e.length - 1)), l++);
                        for (var c = 0; c < u.length; c++) {
                            var p = u[c];
                            if (
                                (("'" === p || '"' === p) &&
                                    (!0 === r[n].isCalculationEnabled ? (r.push({ mode: "string", isCalculationEnabled: !1, character: p }), n++) : "string" === r[n].mode && r[n].character === p && "\\" !== u[c - 1] && (r.pop(), n--)),
                                    "{" === p ? (r.push({ mode: "interpolation", isCalculationEnabled: !0 }), n++) : "}" === p && (r.pop(), n--),
                                    "normal" === r[n].mode && ":" === p)
                            ) {
                                var h = u.substring(c + 1);
                                ((a = { type: "value", before: /^(\s*)/.exec(h)[1], after: /(\s*)$/.exec(h)[1], value: h.trim() }).sourceIndex = a.before.length + c + 1 + l),
                                    (i = { type: "colon", sourceIndex: c + l, after: a.before, value: ":" });
                                break;
                            }
                            o += p;
                        }
                        return (
                            ((o = { type: "media-feature", before: /^(\s*)/.exec(o)[1], after: /(\s*)$/.exec(o)[1], value: o.trim() }).sourceIndex = o.before.length + l),
                            s.push(o),
                            null !== i && ((i.before = o.after), s.push(i)),
                            null !== a && s.push(a),
                            s
                        );
                    }
                    function o(e) {
                        var s = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            o = [],
                            i = 0,
                            a = !1,
                            l = void 0;
                        function u() {
                            return { before: "", after: "", value: "" };
                        }
                        l = u();
                        for (var c = 0; c < e.length; c++) {
                            var p = e[c];
                            a
                                ? ((l.value += p), ("{" === p || "(" === p) && i++, (")" === p || "}" === p) && i--)
                                : -1 !== p.search(/\s/)
                                    ? (l.before += p)
                                    : ("(" === p && ((l.type = "media-feature-expression"), i++), (l.value = p), (l.sourceIndex = s + c), (a = !0)),
                                a &&
                                0 === i &&
                                (")" === p || c === e.length - 1 || -1 !== e[c + 1].search(/\s/)) &&
                                (-1 !== ["not", "only", "and"].indexOf(l.value) && (l.type = "keyword"),
                                    "media-feature-expression" === l.type && (l.nodes = n(l.value, l.sourceIndex)),
                                    o.push(Array.isArray(l.nodes) ? new r.default(l) : new t.default(l)),
                                    (l = u()),
                                    (a = !1));
                        }
                        for (var h = 0; h < o.length; h++)
                            if (((l = o[h]), h > 0 && (o[h - 1].after = l.before), void 0 === l.type)) {
                                if (h > 0) {
                                    if ("media-feature-expression" === o[h - 1].type) {
                                        l.type = "keyword";
                                        continue;
                                    }
                                    if ("not" === o[h - 1].value || "only" === o[h - 1].value) {
                                        l.type = "media-type";
                                        continue;
                                    }
                                    if ("and" === o[h - 1].value) {
                                        l.type = "media-feature-expression";
                                        continue;
                                    }
                                    "media-type" === o[h - 1].type && (o[h + 1] ? (l.type = "media-feature-expression" === o[h + 1].type ? "keyword" : "media-feature-expression") : (l.type = "media-feature-expression"));
                                }
                                if (0 === h) {
                                    if (!o[h + 1] || (o[h + 1] && ("media-feature-expression" === o[h + 1].type || "keyword" === o[h + 1].type))) {
                                        l.type = "media-type";
                                        continue;
                                    }
                                    if (o[h + 2]) {
                                        if ("media-feature-expression" === o[h + 2].type) {
                                            (l.type = "media-type"), (o[h + 1].type = "keyword");
                                            continue;
                                        }
                                        if ("keyword" === o[h + 2].type) {
                                            (l.type = "keyword"), (o[h + 1].type = "media-type");
                                            continue;
                                        }
                                    }
                                    if (o[h + 3] && "media-feature-expression" === o[h + 3].type) {
                                        (l.type = "keyword"), (o[h + 1].type = "media-type"), (o[h + 2].type = "keyword");
                                        continue;
                                    }
                                }
                            }
                        return o;
                    }
                }),
                ei = u((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = function (e) {
                            return new r.default({ nodes: (0, s.parseMediaList)(e), type: "media-query-list", value: e.trim() });
                        });
                    var t,
                        r = (t = en()) && t.__esModule ? t : { default: t },
                        s = eo();
                }),
                ea = u((e, t) => {
                    t.exports = function (e, t) {
                        return (t = "number" == typeof t ? t : 1 / 0)
                            ? (function e(r, s) {
                                return r.reduce(function (r, n) {
                                    return Array.isArray(n) && s < t ? r.concat(e(n, s + 1)) : r.concat(n);
                                }, []);
                            })(e, 1)
                            : Array.isArray(e)
                                ? e.map(function (e) {
                                    return e;
                                })
                                : e;
                    };
                }),
                el = u((e, t) => {
                    t.exports = function (e, t) {
                        for (var r = -1, s = []; -1 !== (r = e.indexOf(t, r + 1));) s.push(r);
                        return s;
                    };
                }),
                eu = u((e, t) => {
                    t.exports = function (e, t, r) {
                        return 0 === e.length
                            ? e
                            : t
                                ? (r || e.sort(t),
                                    (function (e, t) {
                                        for (var r = 1, s = e.length, n = e[0], o = e[0], i = 1; i < s; ++i)
                                            if (((o = n), t((n = e[i]), o))) {
                                                if (i === r) {
                                                    r++;
                                                    continue;
                                                }
                                                e[r++] = n;
                                            }
                                        return (e.length = r), e;
                                    })(e, t))
                                : (r || e.sort(),
                                    (function (e) {
                                        for (var t = 1, r = e.length, s = e[0], n = e[0], o = 1; o < r; ++o, n = s)
                                            if (((n = s), (s = e[o]) !== n)) {
                                                if (o === t) {
                                                    t++;
                                                    continue;
                                                }
                                                e[t++] = s;
                                            }
                                        return (e.length = t), e;
                                    })(e));
                    };
                }),
                ec = u((e, t) => {
                    e.__esModule = !0;
                    var r =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            },
                        s = function e(t, s) {
                            if ((typeof t > "u" ? "undefined" : r(t)) !== "object") return t;
                            var n = new t.constructor();
                            for (var o in t)
                                if (t.hasOwnProperty(o)) {
                                    var i = t[o],
                                        a = typeof i > "u" ? "undefined" : r(i);
                                    "parent" === o && "object" === a
                                        ? s && (n[o] = s)
                                        : i instanceof Array
                                            ? (n[o] = i.map(function (t) {
                                                return e(t, n);
                                            }))
                                            : (n[o] = e(i, n));
                                }
                            return n;
                        },
                        n = (function () {
                            function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                for (var r in (!(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, e),
                                    t))
                                    this[r] = t[r];
                                var s = t.spaces,
                                    n = (s = void 0 === s ? {} : s).before,
                                    o = s.after;
                                this.spaces = { before: void 0 === n ? "" : n, after: void 0 === o ? "" : o };
                            }
                            return (
                                (e.prototype.remove = function () {
                                    return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
                                }),
                                (e.prototype.replaceWith = function () {
                                    if (this.parent) {
                                        for (var e in arguments) this.parent.insertBefore(this, arguments[e]);
                                        this.remove();
                                    }
                                    return this;
                                }),
                                (e.prototype.next = function () {
                                    return this.parent.at(this.parent.index(this) + 1);
                                }),
                                (e.prototype.prev = function () {
                                    return this.parent.at(this.parent.index(this) - 1);
                                }),
                                (e.prototype.clone = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = s(this);
                                    for (var r in e) t[r] = e[r];
                                    return t;
                                }),
                                (e.prototype.toString = function () {
                                    return [this.spaces.before, String(this.value), this.spaces.after].join("");
                                }),
                                e
                            );
                        })();
                    (e.default = n), (t.exports = e.default);
                }),
                ep = u((e) => {
                    (e.__esModule = !0),
                        (e.TAG = "tag"),
                        (e.STRING = "string"),
                        (e.SELECTOR = "selector"),
                        (e.ROOT = "root"),
                        (e.PSEUDO = "pseudo"),
                        (e.NESTING = "nesting"),
                        (e.ID = "id"),
                        (e.COMMENT = "comment"),
                        (e.COMBINATOR = "combinator"),
                        (e.CLASS = "class"),
                        (e.ATTRIBUTE = "attribute"),
                        (e.UNIVERSAL = "universal");
                }),
                eh = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (function () {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var s = t[r];
                                    (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                                }
                            }
                            return function (t, r, s) {
                                return r && e(t.prototype, r), s && e(t, s), t;
                            };
                        })(),
                        n = (r = ec()) && r.__esModule ? r : { default: r },
                        o = (function (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return (t.default = e), t;
                        })(ep()),
                        i = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return s.nodes || (s.nodes = []), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.append = function (e) {
                                    return (e.parent = this), this.nodes.push(e), this;
                                }),
                                (t.prototype.prepend = function (e) {
                                    return (e.parent = this), this.nodes.unshift(e), this;
                                }),
                                (t.prototype.at = function (e) {
                                    return this.nodes[e];
                                }),
                                (t.prototype.index = function (e) {
                                    return "number" == typeof e ? e : this.nodes.indexOf(e);
                                }),
                                (t.prototype.removeChild = function (e) {
                                    (e = this.index(e)), (this.at(e).parent = void 0), this.nodes.splice(e, 1);
                                    var t = void 0;
                                    for (var r in this.indexes) (t = this.indexes[r]) >= e && (this.indexes[r] = t - 1);
                                    return this;
                                }),
                                (t.prototype.removeAll = function () {
                                    for (var e, t = this.nodes, r = Array.isArray(t), s = 0, t = r ? t : t[Symbol.iterator](); ;) {
                                        if (r) {
                                            if (s >= t.length) break;
                                            e = t[s++];
                                        } else {
                                            if ((s = t.next()).done) break;
                                            e = s.value;
                                        }
                                        e.parent = void 0;
                                    }
                                    return (this.nodes = []), this;
                                }),
                                (t.prototype.empty = function () {
                                    return this.removeAll();
                                }),
                                (t.prototype.insertAfter = function (e, t) {
                                    var r = this.index(e);
                                    this.nodes.splice(r + 1, 0, t);
                                    var s = void 0;
                                    for (var n in this.indexes) r <= (s = this.indexes[n]) && (this.indexes[n] = s + this.nodes.length);
                                    return this;
                                }),
                                (t.prototype.insertBefore = function (e, t) {
                                    var r = this.index(e);
                                    this.nodes.splice(r, 0, t);
                                    var s = void 0;
                                    for (var n in this.indexes) r <= (s = this.indexes[n]) && (this.indexes[n] = s + this.nodes.length);
                                    return this;
                                }),
                                (t.prototype.each = function (e) {
                                    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
                                    var t = this.lastEach;
                                    if (((this.indexes[t] = 0), this.length)) {
                                        for (var r = void 0, s = void 0; this.indexes[t] < this.length && ((r = this.indexes[t]), !1 !== (s = e(this.at(r), r)));) this.indexes[t] += 1;
                                        if ((delete this.indexes[t], !1 === s)) return !1;
                                    }
                                }),
                                (t.prototype.walk = function (e) {
                                    return this.each(function (t, r) {
                                        var s = e(t, r);
                                        if ((!1 !== s && t.length && (s = t.walk(e)), !1 === s)) return !1;
                                    });
                                }),
                                (t.prototype.walkAttributes = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.ATTRIBUTE) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkClasses = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.CLASS) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkCombinators = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.COMBINATOR) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkComments = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.COMMENT) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkIds = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.ID) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkNesting = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.NESTING) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkPseudos = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.PSEUDO) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkTags = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.TAG) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.walkUniversals = function (e) {
                                    var t = this;
                                    return this.walk(function (r) {
                                        if (r.type === o.UNIVERSAL) return e.call(t, r);
                                    });
                                }),
                                (t.prototype.split = function (e) {
                                    var t = this,
                                        r = [];
                                    return this.reduce(function (s, n, o) {
                                        var i = e.call(t, n);
                                        return r.push(n), i ? (s.push(r), (r = [])) : o === t.length - 1 && s.push(r), s;
                                    }, []);
                                }),
                                (t.prototype.map = function (e) {
                                    return this.nodes.map(e);
                                }),
                                (t.prototype.reduce = function (e, t) {
                                    return this.nodes.reduce(e, t);
                                }),
                                (t.prototype.every = function (e) {
                                    return this.nodes.every(e);
                                }),
                                (t.prototype.some = function (e) {
                                    return this.nodes.some(e);
                                }),
                                (t.prototype.filter = function (e) {
                                    return this.nodes.filter(e);
                                }),
                                (t.prototype.sort = function (e) {
                                    return this.nodes.sort(e);
                                }),
                                (t.prototype.toString = function () {
                                    return this.map(String).join("");
                                }),
                                s(t, [
                                    {
                                        key: "first",
                                        get: function () {
                                            return this.at(0);
                                        },
                                    },
                                    {
                                        key: "last",
                                        get: function () {
                                            return this.at(this.length - 1);
                                        },
                                    },
                                    {
                                        key: "length",
                                        get: function () {
                                            return this.nodes.length;
                                        },
                                    },
                                ]),
                                t
                            );
                        })(n.default);
                    (e.default = i), (t.exports = e.default);
                }),
                ef = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = eh()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.ROOT), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.toString = function () {
                                    var e = this.reduce(function (e, t) {
                                        var r = String(t);
                                        return r ? e + r + "," : "";
                                    }, "").slice(0, -1);
                                    return this.trailingComma ? e + "," : e;
                                }),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                ed = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = eh()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.SELECTOR), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                em = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (function () {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var s = t[r];
                                    (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                                }
                            }
                            return function (t, r, s) {
                                return r && e(t.prototype, r), s && e(t, s), t;
                            };
                        })(),
                        n = (function (e) {
                            function t() {
                                return (
                                    (function (e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                    })(this, t),
                                    (function (e, t) {
                                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                    })(this, e.apply(this, arguments))
                                );
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.toString = function () {
                                    return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join("");
                                }),
                                s(t, [
                                    {
                                        key: "ns",
                                        get: function () {
                                            var e = this.namespace;
                                            return e ? ("string" == typeof e ? e : "") + "|" : "";
                                        },
                                    },
                                ]),
                                t
                            );
                        })(((r = ec()) && r.__esModule ? r : { default: r }).default);
                    (e.default = n), (t.exports = e.default);
                }),
                ey = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = em()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.CLASS), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.toString = function () {
                                    return [this.spaces.before, this.ns, "." + this.value, this.spaces.after].join("");
                                }),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                eg = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = ec()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.COMMENT), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                ev = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = em()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.ID), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.toString = function () {
                                    return [this.spaces.before, this.ns, "#" + this.value, this.spaces.after].join("");
                                }),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                ew = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = em()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.TAG), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                eb = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = ec()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.STRING), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                ex = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = eh()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.PSEUDO), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.toString = function () {
                                    var e = this.length ? "(" + this.map(String).join(",") + ")" : "";
                                    return [this.spaces.before, String(this.value), e, this.spaces.after].join("");
                                }),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                ek = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = em()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.ATTRIBUTE), (s.raws = {}), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                (t.prototype.toString = function () {
                                    var e = [this.spaces.before, "[", this.ns, this.attribute];
                                    return (
                                        this.operator && e.push(this.operator),
                                        this.value && e.push(this.value),
                                        this.raws.insensitive ? e.push(this.raws.insensitive) : this.insensitive && e.push(" i"),
                                        e.push("]"),
                                        e.concat(this.spaces.after).join("")
                                    );
                                }),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                eO = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = em()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.UNIVERSAL), (s.value = "*"), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                eT = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = ec()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.COMBINATOR), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                eS = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (r = ec()) && r.__esModule ? r : { default: r },
                        n = ep(),
                        o = (function (e) {
                            function t(r) {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t);
                                var s = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, e.call(this, r));
                                return (s.type = n.NESTING), (s.value = "&"), s;
                            }
                            return (
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                t
                            );
                        })(s.default);
                    (e.default = o), (t.exports = e.default);
                }),
                eC = u((e, t) => {
                    (e.__esModule = !0),
                        (e.default = function (e) {
                            return e.sort(function (e, t) {
                                return e - t;
                            });
                        }),
                        (t.exports = e.default);
                }),
                e_ = u((e, t) => {
                    (e.__esModule = !0),
                        (e.default = function (e) {
                            for (
                                var t = [],
                                n = e.css.valueOf(),
                                o = void 0,
                                i = void 0,
                                a = void 0,
                                l = void 0,
                                u = void 0,
                                c = void 0,
                                p = void 0,
                                h = void 0,
                                f = void 0,
                                d = void 0,
                                m = void 0,
                                y = n.length,
                                g = -1,
                                v = 1,
                                w = 0,
                                b = function (t, r) {
                                    if (e.safe) (n += r), (i = n.length - 1);
                                    else throw e.error("Unclosed " + t, v, w - g, w);
                                };
                                w < y;

                            ) {
                                switch ((10 === (o = n.charCodeAt(w)) && ((g = w), (v += 1)), o)) {
                                    case 10:
                                    case 32:
                                    case 9:
                                    case 13:
                                    case 12:
                                        i = w;
                                        do (i += 1), 10 === (o = n.charCodeAt(i)) && ((g = i), (v += 1));
                                        while (32 === o || 10 === o || 9 === o || 13 === o || 12 === o);
                                        t.push(["space", n.slice(w, i), v, w - g, w]), (w = i - 1);
                                        break;
                                    case 43:
                                    case 62:
                                    case 126:
                                    case 124:
                                        i = w;
                                        do (i += 1), (o = n.charCodeAt(i));
                                        while (43 === o || 62 === o || 126 === o || 124 === o);
                                        t.push(["combinator", n.slice(w, i), v, w - g, w]), (w = i - 1);
                                        break;
                                    case 42:
                                        t.push(["*", "*", v, w - g, w]);
                                        break;
                                    case 38:
                                        t.push(["&", "&", v, w - g, w]);
                                        break;
                                    case 44:
                                        t.push([",", ",", v, w - g, w]);
                                        break;
                                    case 91:
                                        t.push(["[", "[", v, w - g, w]);
                                        break;
                                    case 93:
                                        t.push(["]", "]", v, w - g, w]);
                                        break;
                                    case 58:
                                        t.push([":", ":", v, w - g, w]);
                                        break;
                                    case 59:
                                        t.push([";", ";", v, w - g, w]);
                                        break;
                                    case 40:
                                        t.push(["(", "(", v, w - g, w]);
                                        break;
                                    case 41:
                                        t.push([")", ")", v, w - g, w]);
                                        break;
                                    case 39:
                                    case 34:
                                        (a = 39 === o ? "'" : '"'), (i = w);
                                        do for (d = !1, -1 === (i = n.indexOf(a, i + 1)) && b("quote", a), m = i; 92 === n.charCodeAt(m - 1);) (m -= 1), (d = !d);
                                        while (d);
                                        t.push(["string", n.slice(w, i + 1), v, w - g, v, i - g, w]), (w = i);
                                        break;
                                    case 64:
                                        (r.lastIndex = w + 1), r.test(n), (i = 0 === r.lastIndex ? n.length - 1 : r.lastIndex - 2), t.push(["at-word", n.slice(w, i + 1), v, w - g, v, i - g, w]), (w = i);
                                        break;
                                    case 92:
                                        for (i = w, p = !0; 92 === n.charCodeAt(i + 1);) (i += 1), (p = !p);
                                        (o = n.charCodeAt(i + 1)), p && 47 !== o && 32 !== o && 10 !== o && 9 !== o && 13 !== o && 12 !== o && (i += 1), t.push(["word", n.slice(w, i + 1), v, w - g, v, i - g, w]), (w = i);
                                        break;
                                    default:
                                        47 === o && 42 === n.charCodeAt(w + 1)
                                            ? (0 === (i = n.indexOf("*/", w + 2) + 1) && b("comment", "*/"),
                                                (u =
                                                    (l = (c = n.slice(w, i + 1)).split(`
`)).length - 1) > 0
                                                    ? ((h = v + u), (f = i - l[u].length))
                                                    : ((h = v), (f = g)),
                                                t.push(["comment", c, v, w - g, h, i - f, w]),
                                                (g = f),
                                                (v = h))
                                            : ((s.lastIndex = w + 1), s.test(n), (i = 0 === s.lastIndex ? n.length - 1 : s.lastIndex - 2), t.push(["word", n.slice(w, i + 1), v, w - g, v, i - g, w])),
                                            (w = i);
                                }
                                w++;
                            }
                            return t;
                        });
                    var r = /[ \n\t\r\{\(\)'"\\;/]/g,
                        s = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
                    t.exports = e.default;
                }),
                eE = u((e, t) => {
                    e.__esModule = !0;
                    var r = (function () {
                        function e(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var s = t[r];
                                (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                            }
                        }
                        return function (t, r, s) {
                            return r && e(t.prototype, r), s && e(t, s), t;
                        };
                    })(),
                        s = x(ea()),
                        n = x(el()),
                        o = x(eu()),
                        i = x(ef()),
                        a = x(ed()),
                        l = x(ey()),
                        u = x(eg()),
                        c = x(ev()),
                        p = x(ew()),
                        h = x(eb()),
                        f = x(ex()),
                        d = x(ek()),
                        m = x(eO()),
                        y = x(eT()),
                        g = x(eS()),
                        v = x(eC()),
                        w = x(e_()),
                        b = (function (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return (t.default = e), t;
                        })(ep());
                    function x(e) {
                        return e && e.__esModule ? e : { default: e };
                    }
                    var k = (function () {
                        function e(t) {
                            (function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.input = t),
                                (this.lossy = !1 === t.options.lossless),
                                (this.position = 0),
                                (this.root = new i.default());
                            var r = new a.default();
                            return this.root.append(r), (this.current = r), this.lossy ? (this.tokens = (0, w.default)({ safe: t.safe, css: t.css.trim() })) : (this.tokens = (0, w.default)(t)), this.loop();
                        }
                        return (
                            (e.prototype.attribute = function () {
                                var e = "",
                                    t = void 0,
                                    r = this.currToken;
                                for (this.position++; this.position < this.tokens.length && "]" !== this.currToken[0];) (e += this.tokens[this.position][1]), this.position++;
                                this.position !== this.tokens.length || ~e.indexOf("]") || this.error("Expected a closing square bracket.");
                                var s = e.split(/((?:[*~^$|]?=))([^]*)/),
                                    n = s[0].split(/(\|)/g),
                                    o = { operator: s[1], value: s[2], source: { start: { line: r[2], column: r[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: r[4] };
                                if ((n.length > 1 ? ("" === n[0] && (n[0] = !0), (o.attribute = this.parseValue(n[2])), (o.namespace = this.parseNamespace(n[0]))) : (o.attribute = this.parseValue(s[0])), (t = new d.default(o)), s[2])) {
                                    var i = s[2].split(/(\s+i\s*?)$/),
                                        a = i[0].trim();
                                    (t.value = this.lossy ? a : i[0]), i[1] && ((t.insensitive = !0), this.lossy || (t.raws.insensitive = i[1])), (t.quoted = "'" === a[0] || '"' === a[0]), (t.raws.unquoted = t.quoted ? a.slice(1, -1) : a);
                                }
                                this.newNode(t), this.position++;
                            }),
                            (e.prototype.combinator = function () {
                                if ("|" === this.currToken[1]) return this.namespace();
                                for (
                                    var e = new y.default({
                                        value: "",
                                        source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } },
                                        sourceIndex: this.currToken[4],
                                    });
                                    this.position < this.tokens.length && this.currToken && ("space" === this.currToken[0] || "combinator" === this.currToken[0]);

                                )
                                    this.nextToken && "combinator" === this.nextToken[0]
                                        ? ((e.spaces.before = this.parseSpace(this.currToken[1])),
                                            (e.source.start.line = this.nextToken[2]),
                                            (e.source.start.column = this.nextToken[3]),
                                            (e.source.end.column = this.nextToken[3]),
                                            (e.source.end.line = this.nextToken[2]),
                                            (e.sourceIndex = this.nextToken[4]))
                                        : this.prevToken && "combinator" === this.prevToken[0]
                                            ? (e.spaces.after = this.parseSpace(this.currToken[1]))
                                            : "combinator" === this.currToken[0]
                                                ? (e.value = this.currToken[1])
                                                : "space" === this.currToken[0] && (e.value = this.parseSpace(this.currToken[1], " ")),
                                        this.position++;
                                return this.newNode(e);
                            }),
                            (e.prototype.comma = function () {
                                if (this.position === this.tokens.length - 1) {
                                    (this.root.trailingComma = !0), this.position++;
                                    return;
                                }
                                var e = new a.default();
                                this.current.parent.append(e), (this.current = e), this.position++;
                            }),
                            (e.prototype.comment = function () {
                                var e = new u.default({
                                    value: this.currToken[1],
                                    source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[4], column: this.currToken[5] } },
                                    sourceIndex: this.currToken[6],
                                });
                                this.newNode(e), this.position++;
                            }),
                            (e.prototype.error = function (e) {
                                throw new this.input.error(e);
                            }),
                            (e.prototype.missingBackslash = function () {
                                return this.error("Expected a backslash preceding the semicolon.");
                            }),
                            (e.prototype.missingParenthesis = function () {
                                return this.error("Expected opening parenthesis.");
                            }),
                            (e.prototype.missingSquareBracket = function () {
                                return this.error("Expected opening square bracket.");
                            }),
                            (e.prototype.namespace = function () {
                                var e = (this.prevToken && this.prevToken[1]) || !0;
                                return "word" === this.nextToken[0] ? (this.position++, this.word(e)) : "*" === this.nextToken[0] ? (this.position++, this.universal(e)) : void 0;
                            }),
                            (e.prototype.nesting = function () {
                                this.newNode(
                                    new g.default({
                                        value: this.currToken[1],
                                        source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } },
                                        sourceIndex: this.currToken[4],
                                    })
                                ),
                                    this.position++;
                            }),
                            (e.prototype.parentheses = function () {
                                var e = this.current.last;
                                if (e && e.type === b.PSEUDO) {
                                    var t = new a.default(),
                                        r = this.current;
                                    e.append(t), (this.current = t);
                                    var s = 1;
                                    for (this.position++; this.position < this.tokens.length && s;)
                                        "(" === this.currToken[0] && s++,
                                            ")" === this.currToken[0] && s--,
                                            s ? this.parse() : ((t.parent.source.end.line = this.currToken[2]), (t.parent.source.end.column = this.currToken[3]), this.position++);
                                    s && this.error("Expected closing parenthesis."), (this.current = r);
                                } else {
                                    var n = 1;
                                    for (this.position++, e.value += "("; this.position < this.tokens.length && n;)
                                        "(" === this.currToken[0] && n++, ")" === this.currToken[0] && n--, (e.value += this.parseParenthesisToken(this.currToken)), this.position++;
                                    n && this.error("Expected closing parenthesis.");
                                }
                            }),
                            (e.prototype.pseudo = function () {
                                for (var e = this, t = "", r = this.currToken; this.currToken && ":" === this.currToken[0];) (t += this.currToken[1]), this.position++;
                                if (!this.currToken) return this.error("Expected pseudo-class or pseudo-element");
                                if ("word" === this.currToken[0]) {
                                    var s = void 0;
                                    this.splitWord(!1, function (n, o) {
                                        (t += n),
                                            (s = new f.default({ value: t, source: { start: { line: r[2], column: r[3] }, end: { line: e.currToken[4], column: e.currToken[5] } }, sourceIndex: r[4] })),
                                            e.newNode(s),
                                            o > 1 && e.nextToken && "(" === e.nextToken[0] && e.error("Misplaced parenthesis.");
                                    });
                                } else this.error('Unexpected "' + this.currToken[0] + '" found.');
                            }),
                            (e.prototype.space = function () {
                                var e = this.currToken;
                                0 === this.position || "," === this.prevToken[0] || "(" === this.prevToken[0]
                                    ? ((this.spaces = this.parseSpace(e[1])), this.position++)
                                    : this.position === this.tokens.length - 1 || "," === this.nextToken[0] || ")" === this.nextToken[0]
                                        ? ((this.current.last.spaces.after = this.parseSpace(e[1])), this.position++)
                                        : this.combinator();
                            }),
                            (e.prototype.string = function () {
                                var e = this.currToken;
                                this.newNode(new h.default({ value: this.currToken[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
                            }),
                            (e.prototype.universal = function (e) {
                                var t = this.nextToken;
                                if (t && "|" === t[1]) return this.position++, this.namespace();
                                this.newNode(
                                    new m.default({
                                        value: this.currToken[1],
                                        source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } },
                                        sourceIndex: this.currToken[4],
                                    }),
                                    e
                                ),
                                    this.position++;
                            }),
                            (e.prototype.splitWord = function (e, t) {
                                for (var r = this, i = this.nextToken, a = this.currToken[1]; i && "word" === i[0];) {
                                    this.position++;
                                    var u = this.currToken[1];
                                    if (((a += u), u.lastIndexOf("\\") === u.length - 1)) {
                                        var h = this.nextToken;
                                        h && "space" === h[0] && ((a += this.parseSpace(h[1], " ")), this.position++);
                                    }
                                    i = this.nextToken;
                                }
                                var f = (0, n.default)(a, "."),
                                    d = (0, n.default)(a, "#"),
                                    m = (0, n.default)(a, "#{");
                                m.length &&
                                    (d = d.filter(function (e) {
                                        return !~m.indexOf(e);
                                    }));
                                var y = (0, v.default)((0, o.default)((0, s.default)([[0], f, d])));
                                y.forEach(function (s, n) {
                                    var o = y[n + 1] || a.length,
                                        i = a.slice(s, o);
                                    if (0 === n && t) return t.call(r, i, y.length);
                                    var u = void 0;
                                    (u = ~f.indexOf(s)
                                        ? new l.default({
                                            value: i.slice(1),
                                            source: { start: { line: r.currToken[2], column: r.currToken[3] + s }, end: { line: r.currToken[4], column: r.currToken[3] + (o - 1) } },
                                            sourceIndex: r.currToken[6] + y[n],
                                        })
                                        : ~d.indexOf(s)
                                            ? new c.default({
                                                value: i.slice(1),
                                                source: { start: { line: r.currToken[2], column: r.currToken[3] + s }, end: { line: r.currToken[4], column: r.currToken[3] + (o - 1) } },
                                                sourceIndex: r.currToken[6] + y[n],
                                            })
                                            : new p.default({
                                                value: i,
                                                source: { start: { line: r.currToken[2], column: r.currToken[3] + s }, end: { line: r.currToken[4], column: r.currToken[3] + (o - 1) } },
                                                sourceIndex: r.currToken[6] + y[n],
                                            })),
                                        r.newNode(u, e);
                                }),
                                    this.position++;
                            }),
                            (e.prototype.word = function (e) {
                                var t = this.nextToken;
                                return t && "|" === t[1] ? (this.position++, this.namespace()) : this.splitWord(e);
                            }),
                            (e.prototype.loop = function () {
                                for (; this.position < this.tokens.length;) this.parse(!0);
                                return this.root;
                            }),
                            (e.prototype.parse = function (e) {
                                switch (this.currToken[0]) {
                                    case "space":
                                        this.space();
                                        break;
                                    case "comment":
                                        this.comment();
                                        break;
                                    case "(":
                                        this.parentheses();
                                        break;
                                    case ")":
                                        e && this.missingParenthesis();
                                        break;
                                    case "[":
                                        this.attribute();
                                        break;
                                    case "]":
                                        this.missingSquareBracket();
                                        break;
                                    case "at-word":
                                    case "word":
                                        this.word();
                                        break;
                                    case ":":
                                        this.pseudo();
                                        break;
                                    case ";":
                                        this.missingBackslash();
                                        break;
                                    case ",":
                                        this.comma();
                                        break;
                                    case "*":
                                        this.universal();
                                        break;
                                    case "&":
                                        this.nesting();
                                        break;
                                    case "combinator":
                                        this.combinator();
                                        break;
                                    case "string":
                                        this.string();
                                }
                            }),
                            (e.prototype.parseNamespace = function (e) {
                                if (this.lossy && "string" == typeof e) {
                                    var t = e.trim();
                                    return !t.length || t;
                                }
                                return e;
                            }),
                            (e.prototype.parseSpace = function (e, t) {
                                return this.lossy ? t || "" : e;
                            }),
                            (e.prototype.parseValue = function (e) {
                                return this.lossy && e && "string" == typeof e ? e.trim() : e;
                            }),
                            (e.prototype.parseParenthesisToken = function (e) {
                                return this.lossy ? ("space" === e[0] ? this.parseSpace(e[1], " ") : this.parseValue(e[1])) : e[1];
                            }),
                            (e.prototype.newNode = function (e, t) {
                                return t && (e.namespace = this.parseNamespace(t)), this.spaces && ((e.spaces.before = this.spaces), (this.spaces = "")), this.current.append(e);
                            }),
                            r(e, [
                                {
                                    key: "currToken",
                                    get: function () {
                                        return this.tokens[this.position];
                                    },
                                },
                                {
                                    key: "nextToken",
                                    get: function () {
                                        return this.tokens[this.position + 1];
                                    },
                                },
                                {
                                    key: "prevToken",
                                    get: function () {
                                        return this.tokens[this.position - 1];
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                    (e.default = k), (t.exports = e.default);
                }),
                eA = u((e, t) => {
                    e.__esModule = !0;
                    var r,
                        s = (function () {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var s = t[r];
                                    (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                                }
                            }
                            return function (t, r, s) {
                                return r && e(t.prototype, r), s && e(t, s), t;
                            };
                        })(),
                        n = (r = eE()) && r.__esModule ? r : { default: r },
                        o = (function () {
                            function e(t) {
                                return (
                                    (function (e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                    })(this, e),
                                    (this.func = t || function () { }),
                                    this
                                );
                            }
                            return (
                                (e.prototype.process = function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = new n.default({
                                            css: e,
                                            error: function (e) {
                                                throw Error(e);
                                            },
                                            options: t,
                                        });
                                    return (this.res = r), this.func(r), this;
                                }),
                                s(e, [
                                    {
                                        key: "result",
                                        get: function () {
                                            return String(this.res);
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    (e.default = o), (t.exports = e.default);
                }),
                ej = u((e, t) => {
                    var r = function (e, t) {
                        let s = new e.constructor();
                        for (let n in e) {
                            if (!e.hasOwnProperty(n)) continue;
                            let o = e[n],
                                i = typeof o;
                            "parent" === n && "object" === i
                                ? t && (s[n] = t)
                                : "source" === n
                                    ? (s[n] = o)
                                    : o instanceof Array
                                        ? (s[n] = o.map((e) => r(e, s)))
                                        : "before" !== n && "after" !== n && "between" !== n && "semicolon" !== n && ("object" === i && null !== o && (o = r(o)), (s[n] = o));
                        }
                        return s;
                    };
                    t.exports = class {
                        constructor(e) {
                            for (let t in ((e = e || {}), (this.raws = { before: "", after: "" }), e)) this[t] = e[t];
                        }
                        remove() {
                            return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
                        }
                        toString() {
                            return [this.raws.before, String(this.value), this.raws.after].join("");
                        }
                        clone(e) {
                            e = e || {};
                            let t = r(this);
                            for (let r in e) t[r] = e[r];
                            return t;
                        }
                        cloneBefore(e) {
                            e = e || {};
                            let t = this.clone(e);
                            return this.parent.insertBefore(this, t), t;
                        }
                        cloneAfter(e) {
                            e = e || {};
                            let t = this.clone(e);
                            return this.parent.insertAfter(this, t), t;
                        }
                        replaceWith() {
                            let e = Array.prototype.slice.call(arguments);
                            if (this.parent) {
                                for (let t of e) this.parent.insertBefore(this, t);
                                this.remove();
                            }
                            return this;
                        }
                        moveTo(e) {
                            return this.cleanRaws(this.root() === e.root()), this.remove(), e.append(this), this;
                        }
                        moveBefore(e) {
                            return this.cleanRaws(this.root() === e.root()), this.remove(), e.parent.insertBefore(e, this), this;
                        }
                        moveAfter(e) {
                            return this.cleanRaws(this.root() === e.root()), this.remove(), e.parent.insertAfter(e, this), this;
                        }
                        next() {
                            let e = this.parent.index(this);
                            return this.parent.nodes[e + 1];
                        }
                        prev() {
                            let e = this.parent.index(this);
                            return this.parent.nodes[e - 1];
                        }
                        toJSON() {
                            let e = {};
                            for (let t in this) {
                                if (!this.hasOwnProperty(t) || "parent" === t) continue;
                                let r = this[t];
                                r instanceof Array ? (e[t] = r.map((e) => ("object" == typeof e && e.toJSON ? e.toJSON() : e))) : "object" == typeof r && r.toJSON ? (e[t] = r.toJSON()) : (e[t] = r);
                            }
                            return e;
                        }
                        root() {
                            let e = this;
                            for (; e.parent;) e = e.parent;
                            return e;
                        }
                        cleanRaws(e) {
                            delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
                        }
                        positionInside(e) {
                            let t = this.toString(),
                                r = this.source.start.column,
                                s = this.source.start.line;
                            for (let n = 0; n < e; n++)
                                t[n] ===
                                    `
`
                                    ? ((r = 1), (s += 1))
                                    : (r += 1);
                            return { line: s, column: r };
                        }
                        positionBy(e) {
                            let t = this.source.start;
                            if (Object(e).index) t = this.positionInside(e.index);
                            else if (Object(e).word) {
                                let r = this.toString().indexOf(e.word);
                                -1 !== r && (t = this.positionInside(r));
                            }
                            return t;
                        }
                    };
                }),
                eI = u((e, t) => {
                    var r = ej(),
                        s = class extends r {
                            constructor(e) {
                                super(e), this.nodes || (this.nodes = []);
                            }
                            push(e) {
                                return (e.parent = this), this.nodes.push(e), this;
                            }
                            each(e) {
                                this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), (this.lastEach += 1);
                                let t = this.lastEach,
                                    r,
                                    s;
                                if (((this.indexes[t] = 0), this.nodes)) {
                                    for (; this.indexes[t] < this.nodes.length && ((r = this.indexes[t]), !1 !== (s = e(this.nodes[r], r)));) this.indexes[t] += 1;
                                    return delete this.indexes[t], s;
                                }
                            }
                            walk(e) {
                                return this.each((t, r) => {
                                    let s = e(t, r);
                                    return !1 !== s && t.walk && (s = t.walk(e)), s;
                                });
                            }
                            walkType(e, t) {
                                if (!e || !t) throw Error("Parameters {type} and {callback} are required.");
                                let r = "function" == typeof e;
                                return this.walk((s, n) => {
                                    if ((r && s instanceof e) || (!r && s.type === e)) return t.call(this, s, n);
                                });
                            }
                            append(e) {
                                return (e.parent = this), this.nodes.push(e), this;
                            }
                            prepend(e) {
                                return (e.parent = this), this.nodes.unshift(e), this;
                            }
                            cleanRaws(e) {
                                if ((super.cleanRaws(e), this.nodes)) for (let t of this.nodes) t.cleanRaws(e);
                            }
                            insertAfter(e, t) {
                                let r = this.index(e),
                                    s;
                                for (let e in (this.nodes.splice(r + 1, 0, t), this.indexes)) r <= (s = this.indexes[e]) && (this.indexes[e] = s + this.nodes.length);
                                return this;
                            }
                            insertBefore(e, t) {
                                let r = this.index(e),
                                    s;
                                for (let e in (this.nodes.splice(r, 0, t), this.indexes)) r <= (s = this.indexes[e]) && (this.indexes[e] = s + this.nodes.length);
                                return this;
                            }
                            removeChild(e) {
                                let t;
                                for (let r in ((e = this.index(e)), (this.nodes[e].parent = void 0), this.nodes.splice(e, 1), this.indexes)) (t = this.indexes[r]) >= e && (this.indexes[r] = t - 1);
                                return this;
                            }
                            removeAll() {
                                for (let e of this.nodes) e.parent = void 0;
                                return (this.nodes = []), this;
                            }
                            every(e) {
                                return this.nodes.every(e);
                            }
                            some(e) {
                                return this.nodes.some(e);
                            }
                            index(e) {
                                return "number" == typeof e ? e : this.nodes.indexOf(e);
                            }
                            get first() {
                                if (this.nodes) return this.nodes[0];
                            }
                            get last() {
                                if (this.nodes) return this.nodes[this.nodes.length - 1];
                            }
                            toString() {
                                let e = this.nodes.map(String).join("");
                                return this.value && (e = this.value + e), this.raws.before && (e = this.raws.before + e), this.raws.after && (e += this.raws.after), e;
                            }
                        };
                    (s.registerWalker = (e) => {
                        let t = "walk" + e.name;
                        t.lastIndexOf("s") !== t.length - 1 && (t += "s"),
                            s.prototype[t] ||
                            (s.prototype[t] = function (t) {
                                return this.walkType(e, t);
                            });
                    }),
                        (t.exports = s);
                }),
                eP = u((e, t) => {
                    var r = eI();
                    t.exports = class extends r {
                        constructor(e) {
                            super(e), (this.type = "root");
                        }
                    };
                }),
                eM = u((e, t) => {
                    var r = eI();
                    t.exports = class extends r {
                        constructor(e) {
                            super(e), (this.type = "value"), (this.unbalanced = 0);
                        }
                    };
                }),
                e$ = u((e, t) => {
                    var r = eI(),
                        s = class extends r {
                            constructor(e) {
                                super(e), (this.type = "atword");
                            }
                            toString() {
                                return this.quoted && this.raws.quote, [this.raws.before, "@", String.prototype.toString.call(this.value), this.raws.after].join("");
                            }
                        };
                    r.registerWalker(s), (t.exports = s);
                }),
                eR = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "colon");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eN = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "comma");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eL = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "comment"), (this.inline = Object(e).inline || !1);
                            }
                            toString() {
                                return [this.raws.before, this.inline ? "//" : "/*", String(this.value), this.inline ? "" : "*/", this.raws.after].join("");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eW = u((e, t) => {
                    var r = eI(),
                        s = class extends r {
                            constructor(e) {
                                super(e), (this.type = "func"), (this.unbalanced = -1);
                            }
                        };
                    r.registerWalker(s), (t.exports = s);
                }),
                ez = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "number"), (this.unit = Object(e).unit || "");
                            }
                            toString() {
                                return [this.raws.before, String(this.value), this.unit, this.raws.after].join("");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eq = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "operator");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eD = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "paren"), (this.parenType = "");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eB = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "string");
                            }
                            toString() {
                                let e = this.quoted ? this.raws.quote : "";
                                return [this.raws.before, e, this.value + "", e, this.raws.after].join("");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eF = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "word");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eU = u((e, t) => {
                    var r = eI(),
                        s = ej(),
                        n = class extends s {
                            constructor(e) {
                                super(e), (this.type = "unicode-range");
                            }
                        };
                    r.registerWalker(n), (t.exports = n);
                }),
                eV = u((e, t) => {
                    var r = class extends Error {
                        constructor(e) {
                            super(e),
                                (this.name = this.constructor.name),
                                (this.message = e || "An error ocurred while tokzenizing."),
                                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = Error(e).stack);
                        }
                    };
                    t.exports = r;
                }),
                eG = u((e, t) => {
                    var r = /[ \n\t\r\{\(\)'"\\;,/]/g,
                        s = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g,
                        n = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g,
                        o = /^[a-z0-9]/i,
                        i = /^[a-f0-9?\-]/i,
                        a = eV();
                    t.exports = function (e, t) {
                        t = t || {};
                        let l = [],
                            u = e.valueOf(),
                            c = u.length,
                            p = -1,
                            h = 1,
                            f = 0,
                            d = 0,
                            m = null,
                            y,
                            g,
                            v,
                            w,
                            b,
                            x,
                            k,
                            O,
                            T,
                            S,
                            C,
                            _;
                        function E(e) {
                            throw new a(`Unclosed ${e} at line: ${h}, column: ${f - p}, token: ${f}`);
                        }
                        for (; f < c;) {
                            switch ((10 === (y = u.charCodeAt(f)) && ((p = f), (h += 1)), y)) {
                                case 10:
                                case 32:
                                case 9:
                                case 13:
                                case 12:
                                    g = f;
                                    do (g += 1), 10 === (y = u.charCodeAt(g)) && ((p = g), (h += 1));
                                    while (32 === y || 10 === y || 9 === y || 13 === y || 12 === y);
                                    l.push(["space", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                    break;
                                case 58:
                                    (g = f + 1), l.push(["colon", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                    break;
                                case 44:
                                    (g = f + 1), l.push(["comma", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                    break;
                                case 123:
                                    l.push(["{", "{", h, f - p, h, g - p, f]);
                                    break;
                                case 125:
                                    l.push(["}", "}", h, f - p, h, g - p, f]);
                                    break;
                                case 40:
                                    d++, (m = !m && 1 === d && l.length > 0 && "word" === l[l.length - 1][0] && "url" === l[l.length - 1][1]), l.push(["(", "(", h, f - p, h, g - p, f]);
                                    break;
                                case 41:
                                    d--, (m = m && d > 0), l.push([")", ")", h, f - p, h, g - p, f]);
                                    break;
                                case 39:
                                case 34:
                                    (v = 39 === y ? "'" : '"'), (g = f);
                                    do for (S = !1, -1 === (g = u.indexOf(v, g + 1)) && E("quote", v), C = g; 92 === u.charCodeAt(C - 1);) (C -= 1), (S = !S);
                                    while (S);
                                    l.push(["string", u.slice(f, g + 1), h, f - p, h, g - p, f]), (f = g);
                                    break;
                                case 64:
                                    (r.lastIndex = f + 1), r.test(u), (g = 0 === r.lastIndex ? u.length - 1 : r.lastIndex - 2), l.push(["atword", u.slice(f, g + 1), h, f - p, h, g - p, f]), (f = g);
                                    break;
                                case 92:
                                    (g = f), (y = u.charCodeAt(g + 1)), k && 47 !== y && 32 !== y && 10 !== y && 9 !== y && 13 !== y && 12 !== y && (g += 1), l.push(["word", u.slice(f, g + 1), h, f - p, h, g - p, f]), (f = g);
                                    break;
                                case 43:
                                case 45:
                                case 42:
                                    if (((g = f + 1), (_ = u.slice(f + 1, g + 1)), u.slice(f - 1, f), 45 === y && 45 === _.charCodeAt(0))) {
                                        g++, l.push(["word", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                        break;
                                    }
                                    l.push(["operator", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                    break;
                                default:
                                    if (47 === y && (42 === u.charCodeAt(f + 1) || (t.loose && !m && 47 === u.charCodeAt(f + 1)))) {
                                        if (42 === u.charCodeAt(f + 1)) 0 === (g = u.indexOf("*/", f + 2) + 1) && E("comment", "*/");
                                        else {
                                            let e = u.indexOf(
                                                `
`,
                                                f + 2
                                            );
                                            g = -1 !== e ? e - 1 : c;
                                        }
                                        (b =
                                            (w = (x = u.slice(f, g + 1)).split(`
`)).length - 1) > 0
                                            ? ((O = h + b), (T = g - w[b].length))
                                            : ((O = h), (T = p)),
                                            l.push(["comment", x, h, f - p, O, g - T, f]),
                                            (p = T),
                                            (h = O),
                                            (f = g);
                                    } else if (35 !== y || o.test(u.slice(f + 1, f + 2))) {
                                        if ((117 === y || 85 === y) && 43 === u.charCodeAt(f + 1)) {
                                            g = f + 2;
                                            do (g += 1), (y = u.charCodeAt(g));
                                            while (g < c && i.test(u.slice(g, g + 1)));
                                            l.push(["unicoderange", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                        } else if (47 === y) (g = f + 1), l.push(["operator", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                                        else {
                                            let e = s;
                                            if ((y >= 48 && y <= 57 && (e = n), (e.lastIndex = f + 1), e.test(u), (g = 0 === e.lastIndex ? u.length - 1 : e.lastIndex - 2), e === n || 46 === y)) {
                                                let e = u.charCodeAt(g),
                                                    t = u.charCodeAt(g + 1),
                                                    r = u.charCodeAt(g + 2);
                                                (101 === e || 69 === e) && (45 === t || 43 === t) && r >= 48 && r <= 57 && ((n.lastIndex = g + 2), n.test(u), (g = 0 === n.lastIndex ? u.length - 1 : n.lastIndex - 2));
                                            }
                                            l.push(["word", u.slice(f, g + 1), h, f - p, h, g - p, f]), (f = g);
                                        }
                                    } else (g = f + 1), l.push(["#", u.slice(f, g), h, f - p, h, g - p, f]), (f = g - 1);
                            }
                            f++;
                        }
                        return l;
                    };
                }),
                eJ = u((e, t) => {
                    var r = class extends Error {
                        constructor(e) {
                            super(e),
                                (this.name = this.constructor.name),
                                (this.message = e || "An error ocurred while parsing."),
                                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = Error(e).stack);
                        }
                    };
                    t.exports = r;
                }),
                eH = u((e, t) => {
                    var r = eP(),
                        s = eM(),
                        n = e$(),
                        o = eR(),
                        i = eN(),
                        a = eL(),
                        l = eW(),
                        u = ez(),
                        c = eq(),
                        p = eD(),
                        h = eB(),
                        f = eF(),
                        d = eU(),
                        m = eG(),
                        y = ea(),
                        g = el(),
                        v = eu(),
                        w = eJ();
                    t.exports = class {
                        constructor(e, t) {
                            (this.cache = []), (this.input = e), (this.options = Object.assign({}, { loose: !1 }, t)), (this.position = 0), (this.unbalanced = 0), (this.root = new r());
                            let n = new s();
                            this.root.append(n), (this.current = n), (this.tokens = m(e, this.options));
                        }
                        parse() {
                            return this.loop();
                        }
                        colon() {
                            let e = this.currToken;
                            this.newNode(new o({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
                        }
                        comma() {
                            let e = this.currToken;
                            this.newNode(new i({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
                        }
                        comment() {
                            let e = !1,
                                t = this.currToken[1].replace(/\/\*|\*\//g, ""),
                                r;
                            this.options.loose && t.startsWith("//") && ((t = t.substring(2)), (e = !0)),
                                (r = new a({ value: t, inline: e, source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] })),
                                this.newNode(r),
                                this.position++;
                        }
                        error(e, t) {
                            throw new w(e + ` at line: ${t[2]}, column ${t[3]}`);
                        }
                        loop() {
                            for (; this.position < this.tokens.length;) this.parseTokens();
                            return !this.current.last && this.spaces ? (this.current.raws.before += this.spaces) : this.spaces && (this.current.last.raws.after += this.spaces), (this.spaces = ""), this.root;
                        }
                        operator() {
                            let e = this.currToken[1],
                                t;
                            if ("+" === e || "-" === e) {
                                if (
                                    (this.options.loose ||
                                        (this.position > 0 &&
                                            ("func" === this.current.type && "calc" === this.current.value
                                                ? "space" !== this.prevToken[0] && "(" !== this.prevToken[0]
                                                    ? this.error("Syntax Error", this.currToken)
                                                    : "space" !== this.nextToken[0] && "word" !== this.nextToken[0]
                                                        ? this.error("Syntax Error", this.currToken)
                                                        : "word" === this.nextToken[0] && "operator" !== this.current.last.type && "(" !== this.current.last.value && this.error("Syntax Error", this.currToken)
                                                : ("space" === this.nextToken[0] || "operator" === this.nextToken[0] || "operator" === this.prevToken[0]) && this.error("Syntax Error", this.currToken))),
                                        this.options.loose)
                                ) {
                                    if ((!this.current.nodes.length || (this.current.last && "operator" === this.current.last.type)) && "word" === this.nextToken[0]) return this.word();
                                } else if ("word" === this.nextToken[0]) return this.word();
                            }
                            return (
                                (t = new c({
                                    value: this.currToken[1],
                                    source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } },
                                    sourceIndex: this.currToken[4],
                                })),
                                this.position++,
                                this.newNode(t)
                            );
                        }
                        parseTokens() {
                            switch (this.currToken[0]) {
                                case "space":
                                    this.space();
                                    break;
                                case "colon":
                                    this.colon();
                                    break;
                                case "comma":
                                    this.comma();
                                    break;
                                case "comment":
                                    this.comment();
                                    break;
                                case "(":
                                    this.parenOpen();
                                    break;
                                case ")":
                                    this.parenClose();
                                    break;
                                case "atword":
                                case "word":
                                default:
                                    this.word();
                                    break;
                                case "operator":
                                    this.operator();
                                    break;
                                case "string":
                                    this.string();
                                    break;
                                case "unicoderange":
                                    this.unicodeRange();
                            }
                        }
                        parenOpen() {
                            let e = 1,
                                t = this.position + 1,
                                r = this.currToken,
                                s;
                            for (; t < this.tokens.length && e;) {
                                let r = this.tokens[t];
                                "(" === r[0] && e++, ")" === r[0] && e--, t++;
                            }
                            if (
                                (e && this.error("Expected closing parenthesis", r),
                                    (s = this.current.last) && "func" === s.type && s.unbalanced < 0 && ((s.unbalanced = 0), (this.current = s)),
                                    this.current.unbalanced++,
                                    this.newNode(new p({ value: r[1], source: { start: { line: r[2], column: r[3] }, end: { line: r[4], column: r[5] } }, sourceIndex: r[6] })),
                                    this.position++,
                                    "func" === this.current.type && this.current.unbalanced && "url" === this.current.value && "string" !== this.currToken[0] && ")" !== this.currToken[0] && !this.options.loose)
                            ) {
                                let e = this.nextToken,
                                    t = this.currToken[1],
                                    r = { line: this.currToken[2], column: this.currToken[3] };
                                for (; e && ")" !== e[0] && this.current.unbalanced;) this.position++, (t += this.currToken[1]), (e = this.nextToken);
                                this.position !== this.tokens.length - 1 &&
                                    (this.position++, this.newNode(new f({ value: t, source: { start: r, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] })));
                            }
                        }
                        parenClose() {
                            let e = this.currToken;
                            this.newNode(new p({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })),
                                this.position++,
                                (this.position >= this.tokens.length - 1 && !this.current.unbalanced) ||
                                (this.current.unbalanced--, this.current.unbalanced < 0 && this.error("Expected opening parenthesis", e), !this.current.unbalanced && this.cache.length && (this.current = this.cache.pop()));
                        }
                        space() {
                            let e = this.currToken;
                            this.position === this.tokens.length - 1 || "," === this.nextToken[0] || ")" === this.nextToken[0] ? (this.current.last.raws.after += e[1]) : (this.spaces = e[1]), this.position++;
                        }
                        unicodeRange() {
                            let e = this.currToken;
                            this.newNode(new d({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
                        }
                        splitWord() {
                            let e = this.nextToken,
                                t = this.currToken[1],
                                r = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/,
                                s,
                                o;
                            if (!/^(?!\#([a-z0-9]+))[\#\{\}]/gi.test(t))
                                for (; e && "word" === e[0];) {
                                    this.position++;
                                    let r = this.currToken[1];
                                    (t += r), (e = this.nextToken);
                                }
                            (o = v(y([[0], (s = g(t, "@"))])).sort((e, t) => e - t)).forEach((i, a) => {
                                let c = o[a + 1] || t.length,
                                    p = t.slice(i, c),
                                    h;
                                if (~s.indexOf(i))
                                    h = new n({
                                        value: p.slice(1),
                                        source: { start: { line: this.currToken[2], column: this.currToken[3] + i }, end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) } },
                                        sourceIndex: this.currToken[6] + o[a],
                                    });
                                else if (r.test(this.currToken[1])) {
                                    let e = p.replace(r, "");
                                    h = new u({
                                        value: p.replace(e, ""),
                                        source: { start: { line: this.currToken[2], column: this.currToken[3] + i }, end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) } },
                                        sourceIndex: this.currToken[6] + o[a],
                                        unit: e,
                                    });
                                } else
                                    "word" ===
                                        (h = new (e && "(" === e[0] ? l : f)({
                                            value: p,
                                            source: { start: { line: this.currToken[2], column: this.currToken[3] + i }, end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) } },
                                            sourceIndex: this.currToken[6] + o[a],
                                        })).type
                                        ? ((h.isHex = /^#(.+)/.test(p)), (h.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(p)))
                                        : this.cache.push(this.current);
                                this.newNode(h);
                            }),
                                this.position++;
                        }
                        string() {
                            let e = this.currToken,
                                t = this.currToken[1],
                                r = /^(\"|\')/,
                                s = r.test(t),
                                n = "",
                                o;
                            s && ((n = t.match(r)[0]), (t = t.slice(1, t.length - 1))),
                                ((o = new h({ value: t, source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6], quoted: s })).raws.quote = n),
                                this.newNode(o),
                                this.position++;
                        }
                        word() {
                            return this.splitWord();
                        }
                        newNode(e) {
                            return this.spaces && ((e.raws.before += this.spaces), (this.spaces = "")), this.current.append(e);
                        }
                        get currToken() {
                            return this.tokens[this.position];
                        }
                        get nextToken() {
                            return this.tokens[this.position + 1];
                        }
                        get prevToken() {
                            return this.tokens[this.position - 1];
                        }
                    };
                }),
                eQ = {};
            c(eQ, { languages: () => rO, options: () => rT, parsers: () => rS, printers: () => rQ });
            var eK = (e, t, r, s) => {
                if (!(e && null == t)) return t.replaceAll ? t.replaceAll(r, s) : r.global ? t.replace(r, s) : t.split(r).join(s);
            },
                eZ = "string",
                eY = "array",
                eX = "cursor",
                e1 = "indent",
                e0 = "align",
                e2 = "trim",
                e3 = "group",
                e4 = "fill",
                e9 = "if-break",
                e5 = "indent-if-break",
                e6 = "line-suffix",
                e7 = "line-suffix-boundary",
                e8 = "line",
                te = "label",
                tt = "break-parent",
                tr = new Set([eX, e1, e0, e2, e3, e4, e9, e5, e6, e7, e8, te, tt]),
                ts = function (e) {
                    if ("string" == typeof e) return eZ;
                    if (Array.isArray(e)) return eY;
                    if (!e) return;
                    let { type: t } = e;
                    if (tr.has(t)) return t;
                },
                tn = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e),
                to = class extends Error {
                    name = "InvalidDocError";
                    constructor(e) {
                        super(
                            (function (e) {
                                let t = null === e ? "null" : typeof e;
                                if ("string" !== t && "object" !== t)
                                    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
                                if (ts(e)) throw Error("doc is valid.");
                                let r = Object.prototype.toString.call(e);
                                if ("[object Object]" !== r) return `Unexpected doc '${r}'.`;
                                let s = tn([...tr].map((e) => `'${e}'`));
                                return `Unexpected doc.type '${e.type}'.
Expected it to be ${s}.`;
                            })(e)
                        ),
                            (this.doc = e);
                    }
                },
                ti = () => { };
            function ta(e) {
                return ti(e), { type: e1, contents: e };
            }
            function tl(e, t) {
                return ti(t), { type: e0, contents: t, n: e };
            }
            function tu(e, t = {}) {
                return ti(e), ti(t.expandedStates, !0), { type: e3, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
            }
            function tc(e) {
                return ti(e), { type: e4, parts: e };
            }
            function tp(e, t = "", r = {}) {
                return ti(e), "" !== t && ti(t), { type: e9, breakContents: e, flatContents: t, groupId: r.groupId };
            }
            var th = { type: tt },
                tf = { type: e8 },
                td = { type: e8, soft: !0 },
                tm = [{ type: e8, hard: !0 }, th];
            function ty(e, t) {
                ti(e), ti(t);
                let r = [];
                for (let s = 0; s < t.length; s++) 0 !== s && r.push(e), r.push(t[s]);
                return r;
            }
            var tg = (e, t, r) => {
                if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[r < 0 ? t.length + r : r] : t.at(r);
            },
                tv = (e) => {
                    if (Array.isArray(e)) return e;
                    if (e.type !== e4) throw Error(`Expect doc to be 'array' or '${e4}'.`);
                    return e.parts;
                };
            function tw(e) {
                return e.type !== e8 || e.hard ? (e.type === e9 ? e.flatContents : e) : e.soft ? "" : " ";
            }
            var tb = function (e) {
                return Array.isArray(e) && e.length > 0;
            },
                tx = function (e, t) {
                    let r = !0 === t || "'" === t ? "'" : '"',
                        s = "'" === r ? '"' : "'",
                        n = 0,
                        o = 0;
                    for (let t of e) t === r ? n++ : t === s && o++;
                    return n > o ? s : r;
                },
                tk = function (e, t, r) {
                    let s = '"' === t ? "'" : '"',
                        n = eK(!1, e, /\\(.)|(["'])/gs, (e, n, o) => (n === s ? n : o === t ? "\\" + o : o || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(n) ? n : "\\" + n)));
                    return t + n + t;
                },
                tO = function (e, t) {
                    let r = e.slice(1, -1),
                        s = "json" !== t.parser && "jsonc" !== t.parser && ("json5" !== t.parser || "preserve" !== t.quoteProps || t.singleQuote) ? (t.__isInHtmlAttribute ? "'" : tx(r, t.singleQuote)) : '"';
                    return tk(r, s, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.__embeddedInHtml));
                },
                tT = class extends Error {
                    name = "UnexpectedNodeError";
                    constructor(e, t, r = "type") {
                        super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`), (this.node = e);
                    }
                },
                tS = function (e) {
                    return (null == e ? void 0 : e.type) === "front-matter";
                },
                tC = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma", "spaces"]);
            function t_(e, t, r) {
                if (
                    (tS(e) && "yaml" === e.lang && delete t.value,
                        "css-comment" === e.type &&
                        "css-root" === r.type &&
                        r.nodes.length > 0 &&
                        (((r.nodes[0] === e || (tS(r.nodes[0]) && r.nodes[1] === e)) && (delete t.text, /^\*\s*@(?:format|prettier)\s*$/.test(e.text))) || ("css-root" === r.type && tg(!1, r.nodes, -1) === e)))
                )
                    return null;
                if (
                    ("value-root" === e.type && delete t.text,
                        ("media-query" === e.type || "media-query-list" === e.type || "media-feature-expression" === e.type) && delete t.value,
                        "css-rule" === e.type && delete t.params,
                        "selector-combinator" === e.type && (t.value = eK(!1, t.value, /\s+/g, " ")),
                        "media-feature" === e.type && (t.value = eK(!1, t.value, " ", "")),
                        (("value-word" === e.type && ((e.isColor && e.isHex) || ["initial", "inherit", "unset", "revert"].includes(t.value.toLowerCase()))) ||
                            "media-feature" === e.type ||
                            "selector-root-invalid" === e.type ||
                            "selector-pseudo" === e.type) &&
                        (t.value = t.value.toLowerCase()),
                        "css-decl" === e.type && (t.prop = t.prop.toLowerCase()),
                        ("css-atrule" === e.type || "css-import" === e.type) && (t.name = t.name.toLowerCase()),
                        "value-number" === e.type && (t.unit = t.unit.toLowerCase()),
                        "value-unknown" === e.type && (t.value = eK(!1, t.value, /;$/g, "")),
                        ("media-feature" === e.type ||
                            "media-keyword" === e.type ||
                            "media-type" === e.type ||
                            "media-unknown" === e.type ||
                            "media-url" === e.type ||
                            "media-value" === e.type ||
                            "selector-attribute" === e.type ||
                            "selector-string" === e.type ||
                            "selector-class" === e.type ||
                            "selector-combinator" === e.type ||
                            "value-string" === e.type) &&
                        t.value &&
                        (t.value = eK(!1, eK(!1, t.value, "'", '"'), /\\([^\da-f])/gi, "$1")),
                        "selector-attribute" === e.type &&
                        ((t.attribute = t.attribute.trim()),
                            t.namespace && "string" == typeof t.namespace && ((t.namespace = t.namespace.trim()), 0 === t.namespace.length && (t.namespace = !0)),
                            t.value && ((t.value = eK(!1, t.value.trim(), /^["']|["']$/g, "")), delete t.quoted)),
                        ("media-value" === e.type || "media-type" === e.type || "value-number" === e.type || "selector-root-invalid" === e.type || "selector-class" === e.type || "selector-combinator" === e.type || "selector-tag" === e.type) &&
                        t.value &&
                        (t.value = eK(!1, t.value, /([\d+.e-]+)([a-z]*)/gi, (e, t, r) => {
                            let s = Number(t);
                            return Number.isNaN(s) ? e : s + r.toLowerCase();
                        })),
                        "selector-tag" === e.type)
                ) {
                    let r = e.value.toLowerCase();
                    ["from", "to"].includes(r) && (t.value = r);
                }
                if (("css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value, "value-comma_group" === e.type)) {
                    let r = e.groups.findIndex((e) => "value-number" === e.type && "..." === e.unit);
                    -1 !== r && ((t.groups[r].unit = ""), t.groups.splice(r + 1, 0, { type: "value-word", value: "...", isColor: !1, isHex: !1 }));
                }
                if ("value-comma_group" === e.type && e.groups.some((e) => ("value-atword" === e.type && e.value.endsWith("[")) || ("value-word" === e.type && e.value.startsWith("]"))))
                    return { type: "value-atword", value: e.groups.map((e) => e.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
            }
            async function tE(e, t) {
                if ("yaml" === e.lang) {
                    let r = e.value.trim(),
                        s = r ? await t(r, { parser: "yaml" }) : "";
                    return tl({ type: "root" }, [e.startDelimiter, tm, s, s ? tm : "", e.endDelimiter]);
                }
            }
            function tA(e) {
                let { node: t } = e;
                if ("front-matter" === t.type)
                    return async (e) => {
                        let r = await tE(t, e);
                        return r ? [r, tm] : void 0;
                    };
            }
            (t_.ignoredProperties = tC), (tA.getVisitorKeys = (e) => ("css-root" === e.type ? ["frontMatter"] : []));
            var tj = null;
            function tI(e) {
                if (null !== tj && (tj.property, 1)) {
                    let e = tj;
                    return (tj = tI.prototype = null), e;
                }
                return (tj = tI.prototype = e ?? Object.create(null)), new tI();
            }
            for (let e = 0; e <= 10; e++) tI();
            var tP = (function (e, t = "type") {
                return (
                    tI(e),
                    function (r) {
                        let s = r[t],
                            n = e[s];
                        if (!Array.isArray(n)) throw Object.assign(Error(`Missing visitor keys for '${s}'.`), { node: r });
                        return n;
                    }
                );
            })({
                "front-matter": [],
                "css-root": ["frontMatter", "nodes"],
                "css-comment": [],
                "css-rule": ["selector", "nodes"],
                "css-decl": ["value", "selector", "nodes"],
                "css-atrule": ["selector", "params", "value", "nodes"],
                "media-query-list": ["nodes"],
                "media-query": ["nodes"],
                "media-type": [],
                "media-feature-expression": ["nodes"],
                "media-feature": [],
                "media-colon": [],
                "media-value": [],
                "media-keyword": [],
                "media-url": [],
                "media-unknown": [],
                "selector-root": ["nodes"],
                "selector-selector": ["nodes"],
                "selector-comment": [],
                "selector-string": [],
                "selector-tag": [],
                "selector-id": [],
                "selector-class": [],
                "selector-attribute": [],
                "selector-combinator": ["nodes"],
                "selector-universal": [],
                "selector-pseudo": ["nodes"],
                "selector-nesting": [],
                "selector-unknown": [],
                "value-value": ["group"],
                "value-root": ["group"],
                "value-comment": [],
                "value-comma_group": ["groups"],
                "value-paren_group": ["open", "groups", "close"],
                "value-func": ["group"],
                "value-paren": [],
                "value-number": [],
                "value-operator": [],
                "value-word": [],
                "value-colon": [],
                "value-comma": [],
                "value-string": [],
                "value-atword": [],
                "value-unicode-range": [],
                "value-unknown": [],
            }),
                tM = function (e, t) {
                    let r = 0;
                    for (let s = 0; s < e.line - 1; ++s)
                        r =
                            t.indexOf(
                                `
`,
                                r
                            ) + 1;
                    return r + e.column;
                };
            function t$(e) {
                return (t, r, s) => {
                    let n = !!(null != s && s.backwards);
                    if (!1 === r) return !1;
                    let { length: o } = t,
                        i = r;
                    for (; i >= 0 && i < o;) {
                        let r = t.charAt(i);
                        if (e instanceof RegExp) {
                            if (!e.test(r)) return i;
                        } else if (!e.includes(r)) return i;
                        n ? i-- : i++;
                    }
                    return (-1 === i || i === o) && i;
                };
            }
            t$(/\s/);
            var tR = t$(" 	"),
                tN = t$(",; 	"),
                tL = t$(/[^\n\r]/);
            function tW(e, t) {
                var r, s, n;
                if ("number" == typeof (null == (s = null == (r = e.source) ? void 0 : r.start) ? void 0 : s.offset)) return e.source.start.offset;
                if ("number" == typeof e.sourceIndex) return e.sourceIndex;
                if (null != (n = e.source) && n.start) return tM(e.source.start, t);
                throw Object.assign(Error("Can not locate node."), { node: e });
            }
            function tz(e, t) {
                var r, s;
                if ("css-comment" === e.type && e.inline) return tL(t, e.source.startOffset);
                if ("number" == typeof (null == (s = null == (r = e.source) ? void 0 : r.end) ? void 0 : s.offset)) return e.source.end.offset;
                if (e.source) {
                    if (e.source.end) return tM(e.source.end, t);
                    if (tb(e.nodes)) return tz(tg(!1, e.nodes, -1), t);
                }
                return null;
            }
            function tq(e) {
                var t;
                return null == (t = e.source) ? void 0 : t.startOffset;
            }
            function tD(e) {
                var t;
                return null == (t = e.source) ? void 0 : t.endOffset;
            }
            var tB = h(f(), 1),
                tF = function (e) {
                    if (!e.startsWith("#!")) return "";
                    let t = e.indexOf(`
`);
                    return -1 === t ? e : e.slice(0, t);
                };
            function tU(e) {
                let t = tF(e);
                t && (e = e.slice(t.length + 1));
                let r = (0, tB.extract)(e),
                    { pragmas: s, comments: n } = (0, tB.parseWithComments)(r);
                return { shebang: t, text: e, pragmas: s, comments: n };
            }
            var tV = RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s"),
                tG = function (e) {
                    let t = e.match(tV);
                    if (!t) return { content: e };
                    let { startDelimiter: r, language: s, value: n = "", endDelimiter: o } = t.groups,
                        i = s.trim() || "yaml";
                    if (("+++" === r && (i = "toml"), "yaml" !== i && r !== o)) return { content: e };
                    let [a] = t;
                    return { frontMatter: { type: "front-matter", lang: i, value: n, startDelimiter: r, endDelimiter: o, raw: a.replace(/\n$/, "") }, content: eK(!1, a, /[^\n]/g, " ") + e.slice(a.length) };
                },
                tJ = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]),
                tH = new Set(["initial", "inherit", "unset", "revert"]);
            function tQ(e) {
                return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || (e.includes("(") && e.includes(")")) ? e : e.toLowerCase();
            }
            function tK(e, t) {
                var r;
                let s = e.findAncestor((e) => "value-func" === e.type);
                return (null == (r = null == s ? void 0 : s.value) ? void 0 : r.toLowerCase()) === t;
            }
            function tZ(e, t) {
                let r = Array.isArray(t) ? t : [t],
                    s = e.findAncestor((e) => "css-atrule" === e.type);
                return s && r.includes(s.name.toLowerCase());
            }
            function tY(e, t) {
                var r;
                let s = null == (r = e.parent) ? void 0 : r.nodes;
                return s && s.indexOf(t) === s.length - 1;
            }
            function tX(e) {
                return "value-operator" === e.type && "*" === e.value;
            }
            function t1(e) {
                return "value-operator" === e.type && "/" === e.value;
            }
            function t0(e) {
                return "value-operator" === e.type && "+" === e.value;
            }
            function t2(e) {
                return "value-operator" === e.type && "-" === e.value;
            }
            function t3(e) {
                return tX(e) || t1(e) || t0(e) || t2(e) || ("value-operator" === e.type && "%" === e.value);
            }
            function t4(e, t) {
                return "scss" === t.parser && "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name);
            }
            function t9(e) {
                var t;
                return (null == (t = e.raws) ? void 0 : t.params) && /^\(\s*\)$/.test(e.raws.params);
            }
            function t5(e) {
                return e.name.startsWith("prettier-placeholder");
            }
            function t6(e) {
                var t;
                return (null == (t = e.raws) ? void 0 : t.before) === "";
            }
            function t7(e) {
                var t, r;
                return "value-comma_group" === e.type && (null == (r = null == (t = e.groups) ? void 0 : t[1]) ? void 0 : r.type) === "value-colon";
            }
            function t8(e) {
                var t;
                return "value-paren_group" === e.type && (null == (t = e.groups) ? void 0 : t[0]) && t7(e.groups[0]);
            }
            function re(e, t) {
                var r;
                if ("scss" !== t.parser) return !1;
                let { node: s } = e;
                if (0 === s.groups.length) return !1;
                let n = e.grandparent;
                if (!t8(s) && !(n && t8(n))) return !1;
                let o = e.findAncestor((e) => "css-decl" === e.type);
                return !!((null != (r = null == o ? void 0 : o.prop) && r.startsWith("$")) || t8(n) || "value-func" === n.type);
            }
            function rt(e) {
                return "value-comment" === e.type && e.inline;
            }
            function rr(e) {
                return "value-word" === e.type && "#" === e.value;
            }
            function rs(e) {
                return "value-word" === e.type && "{" === e.value;
            }
            function rn(e) {
                return "value-word" === e.type && "}" === e.value;
            }
            function ro(e) {
                return ["value-word", "value-atword"].includes(e.type);
            }
            function ri(e) {
                return (null == e ? void 0 : e.type) === "value-colon";
            }
            function ra(e) {
                return /\/\//.test(e.split(/[\n\r]/).pop());
            }
            function rl(e) {
                return (null == e ? void 0 : e.type) === "value-atword" && e.value.startsWith("prettier-placeholder-");
            }
            function ru(e) {
                var t, r;
                return "value-paren_group" === e.type && (null == (t = e.open) ? void 0 : t.value) === "(" && (null == (r = e.close) ? void 0 : r.value) === ")";
            }
            var rc = function (e, t, r) {
                var s, n, o, i;
                let { node: a } = e,
                    l = e.parent,
                    u = e.grandparent,
                    c = null == (o = null == (n = e.findAncestor((e) => "css-decl" === e.type)) ? void 0 : n.prop) ? void 0 : o.toLowerCase(),
                    p = c && "value-value" === l.type && ("grid" === c || c.startsWith("grid-template")),
                    h = e.findAncestor((e) => "css-atrule" === e.type),
                    f = h && t4(h, t),
                    d = a.groups.some((e) => rt(e)),
                    m = e.map(r, "groups"),
                    y = [],
                    g = tK(e, "url"),
                    v = !1,
                    w = !1;
                for (let r = 0; r < a.groups.length; ++r) {
                    y.push(m[r]);
                    let n = a.groups[r - 1],
                        o = a.groups[r],
                        c = a.groups[r + 1],
                        d = a.groups[r + 2];
                    if (g) {
                        ((c && t0(c)) || t0(o)) && y.push(" ");
                        continue;
                    }
                    if (
                        (tZ(e, "forward") && "value-word" === o.type && o.value && void 0 !== n && "value-word" === n.type && "as" === n.value && "value-operator" === c.type && "*" === c.value) ||
                        !c ||
                        ("value-word" === o.type && o.value.endsWith("-") && rl(c))
                    )
                        continue;
                    if ("value-string" === o.type && o.quoted) {
                        let e = o.value.lastIndexOf("#{"),
                            t = o.value.lastIndexOf("}");
                        -1 !== e && -1 !== t ? (v = e > t) : -1 !== e ? (v = !0) : -1 !== t && (v = !1);
                    }
                    if (
                        v ||
                        ri(o) ||
                        ri(c) ||
                        ("value-atword" === o.type && ("" === o.value || o.value.endsWith("["))) ||
                        ("value-word" === c.type && c.value.startsWith("]")) ||
                        "~" === o.value ||
                        ("value-string" !== o.type && o.value && o.value.includes("\\") && c && "value-comment" !== c.type) ||
                        (null != n && n.value && n.value.indexOf("\\") === n.value.length - 1 && "value-operator" === o.type && "/" === o.value) ||
                        "\\" === o.value ||
                        ("$$" === o.value && "value-func" === o.type && (null == c ? void 0 : c.type) === "value-word" && !c.raws.before) ||
                        rr(o) ||
                        rs(o) ||
                        rn(c) ||
                        (rs(c) && t6(c)) ||
                        (rn(o) && t6(c)) ||
                        ("--" === o.value && rr(c))
                    )
                        continue;
                    let b = t3(o),
                        x = t3(c);
                    if ((((b && rr(c)) || (x && rn(o))) && t6(c)) || (!n && t1(o)) || (tK(e, "calc") && (t0(o) || t0(c) || t2(o) || t2(c)) && t6(c))) continue;
                    let k = (t0(o) || t2(o)) && 0 === r && ("value-number" === c.type || c.isHex) && u && "value-func" === (i = u).type && tJ.has(i.value.toLowerCase()) && !t6(c),
                        O = (null == d ? void 0 : d.type) === "value-func" || (d && ro(d)) || "value-func" === o.type || ro(o),
                        T = "value-func" === c.type || ro(c) || (null == n ? void 0 : n.type) === "value-func" || (n && ro(n));
                    if ("scss" === t.parser && b && "-" === o.value && "value-func" === c.type && tD(o) !== tq(c)) {
                        y.push(" ");
                        continue;
                    }
                    if (
                        !(!(tX(c) || tX(o)) && !tK(e, "calc") && !k && ((t1(c) && !O) || (t1(o) && !T) || (t0(c) && !O) || (t0(o) && !T) || t2(c) || t2(o)) && (t6(c) || (b && (!n || (n && t3(n)))))) &&
                        !(("scss" === t.parser || "less" === t.parser) && b && "-" === o.value && ru(c) && tD(o) === tq(c.open) && "(" === c.open.value)
                    ) {
                        if (rt(o)) {
                            if ("value-paren_group" === l.type) {
                                y.push(tl(-1, tm));
                                continue;
                            }
                            y.push(tm);
                            continue;
                        }
                        if (
                            (f &&
                                (("value-word" === c.type && ["==", "!="].includes(c.value)) ||
                                    ("value-word" === c.type && ["<", ">", "<=", ">="].includes(c.value)) ||
                                    ("value-word" === c.type && ["and", "or", "not"].includes(c.value)) ||
                                    ("value-word" === o.type && "in" === o.value) ||
                                    ("value-word" === o.type && ["from", "through", "end"].includes(o.value)))) ||
                            (h && "namespace" === h.name.toLowerCase())
                        ) {
                            y.push(" ");
                            continue;
                        }
                        if (p) {
                            o.source && c.source && o.source.start.line !== c.source.start.line ? (y.push(tm), (w = !0)) : y.push(" ");
                            continue;
                        }
                        if (x) {
                            y.push(" ");
                            continue;
                        }
                        if ((null == c ? void 0 : c.value) !== "..." && !(rl(o) && rl(c) && tD(o) === tq(c))) {
                            if (rl(o) && ru(c) && tD(o) === tq(c.open)) {
                                y.push(td);
                                continue;
                            }
                            if ("with" === o.value && ru(c)) {
                                y.push(" ");
                                continue;
                            }
                            (null != (s = o.value) && s.endsWith("#") && "{" === c.value && ru(c.group)) || y.push(tf);
                        }
                    }
                }
                return (
                    d && y.push(th),
                    w && y.unshift(tm),
                    f
                        ? tu(ta(y))
                        : !(function (e) {
                            var t;
                            let { node: r } = e;
                            return "url" === r.groups[0].value && 2 === r.groups.length && (null == (t = e.findAncestor((e) => "css-atrule" === e.type)) ? void 0 : t.name) === "import";
                        })(e)
                            ? tu(ta(tc(y)))
                            : tu(tc(y))
                );
            },
                rp = new Map([
                    ["em", "em"],
                    ["rem", "rem"],
                    ["ex", "ex"],
                    ["rex", "rex"],
                    ["cap", "cap"],
                    ["rcap", "rcap"],
                    ["ch", "ch"],
                    ["rch", "rch"],
                    ["ic", "ic"],
                    ["ric", "ric"],
                    ["lh", "lh"],
                    ["rlh", "rlh"],
                    ["vw", "vw"],
                    ["svw", "svw"],
                    ["lvw", "lvw"],
                    ["dvw", "dvw"],
                    ["vh", "vh"],
                    ["svh", "svh"],
                    ["lvh", "lvh"],
                    ["dvh", "dvh"],
                    ["vi", "vi"],
                    ["svi", "svi"],
                    ["lvi", "lvi"],
                    ["dvi", "dvi"],
                    ["vb", "vb"],
                    ["svb", "svb"],
                    ["lvb", "lvb"],
                    ["dvb", "dvb"],
                    ["vmin", "vmin"],
                    ["svmin", "svmin"],
                    ["lvmin", "lvmin"],
                    ["dvmin", "dvmin"],
                    ["vmax", "vmax"],
                    ["svmax", "svmax"],
                    ["lvmax", "lvmax"],
                    ["dvmax", "dvmax"],
                    ["cm", "cm"],
                    ["mm", "mm"],
                    ["q", "Q"],
                    ["in", "in"],
                    ["pt", "pt"],
                    ["pc", "pc"],
                    ["px", "px"],
                    ["deg", "deg"],
                    ["grad", "grad"],
                    ["rad", "rad"],
                    ["turn", "turn"],
                    ["s", "s"],
                    ["ms", "ms"],
                    ["hz", "Hz"],
                    ["khz", "kHz"],
                    ["dpi", "dpi"],
                    ["dpcm", "dpcm"],
                    ["dppx", "dppx"],
                    ["x", "x"],
                    ["cqw", "cqw"],
                    ["cqh", "cqh"],
                    ["cqi", "cqi"],
                    ["cqb", "cqb"],
                    ["cqmin", "cqmin"],
                    ["cqmax", "cqmax"],
                ]),
                rh = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs,
                rf = RegExp(rh.source + `|(${/[$@]?[_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/gi.source})?(${/(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/gi.source})(${/[a-z]+/gi.source})?`, "gi");
            function rd(e, t) {
                return eK(!1, e, rh, (e) => tO(e, t));
            }
            function rm(e) {
                return eK(!1, e, rf, (e, t, r, s, n) => (!r && s ? ry(s) + tQ(n || "") : e));
            }
            function ry(e) {
                return e
                    .toLowerCase()
                    .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/, "$1$2")
                    .replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1")
                    .replace(/^([+-])?\./, "$10.")
                    .replace(/(\.\d+?)0+(?=e|$)/, "$1")
                    .replace(/\.(?=e|$)/, "")
                    .replace(/\.0(?=$|e)/, "");
            }
            var rg = function (e, t, r) {
                let s = !!(null != r && r.backwards);
                if (!1 === t) return !1;
                let n = e.charAt(t);
                if (s) {
                    if (
                        "\r" === e.charAt(t - 1) &&
                        n ===
                        `
`
                    )
                        return t - 2;
                    if (
                        n ===
                        `
` ||
                        "\r" === n ||
                        "\u2028" === n ||
                        "\u2029" === n
                    )
                        return t - 1;
                } else {
                    if (
                        "\r" === n &&
                        e.charAt(t + 1) ===
                        `
`
                    )
                        return t + 2;
                    if (
                        n ===
                        `
` ||
                        "\r" === n ||
                        "\u2028" === n ||
                        "\u2029" === n
                    )
                        return t + 1;
                }
                return t;
            },
                rv = function (e, t, r = {}) {
                    let s = tR(e, r.backwards ? t - 1 : t, r),
                        n = rg(e, s, r);
                    return s !== n;
                },
                rw = function (e, t) {
                    if (!1 === t) return !1;
                    if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
                        for (let r = t + 2; r < e.length; ++r) if ("*" === e.charAt(r) && "/" === e.charAt(r + 1)) return r + 2;
                    }
                    return t;
                },
                rb = function (e, t) {
                    var r;
                    let s = null,
                        n = t;
                    for (; n !== s;) (s = n), (n = tN(e, n)), (n = rw(e, n)), (n = tR(e, n));
                    return !1 !== (n = rg(e, (n = !1 !== (r = n) && ("/" === e.charAt(r) && "/" === e.charAt(r + 1) ? tL(e, r) : r)))) && rv(e, n);
                };
            function rx(e) {
                return e.match(
                    (e) => "value-paren_group" === e.type && !e.open && e.groups.some((e) => "value-comma_group" === e.type),
                    (e, t) => "group" === t && "value-value" === e.type,
                    (e, t) => "group" === t && "value-root" === e.type,
                    (e, t) => "value" === t && (("css-decl" === e.type && !e.prop.startsWith("--")) || ("css-atrule" === e.type && e.variable))
                );
            }
            var rk = function (e, t, r) {
                let s = [];
                return (
                    e.each(() => {
                        let { node: n, previous: o } = e;
                        if (((null == o ? void 0 : o.type) === "css-comment" && "prettier-ignore" === o.text.trim() ? s.push(t.originalText.slice(tq(n), tD(n))) : s.push(r()), e.isLast)) return;
                        let { next: i } = e;
                        ("css-comment" !== i.type || rv(t.originalText, tq(i), { backwards: !0 }) || tS(n)) && ("css-atrule" !== i.type || "else" !== i.name || "css-comment" === n.type)
                            ? (s.push(t.__isHTMLStyleAttribute ? tf : tm), rb(t.originalText, tD(n)) && !tS(n) && s.push(tm))
                            : s.push(" ");
                    }, "nodes"),
                    s
                );
            },
                rO = [
                    {
                        linguistLanguageId: 50,
                        name: "CSS",
                        type: "markup",
                        tmScope: "source.css",
                        aceMode: "css",
                        codemirrorMode: "css",
                        codemirrorMimeType: "text/css",
                        color: "#563d7c",
                        extensions: [".css", ".wxss"],
                        parsers: ["css"],
                        vscodeLanguageIds: ["css"],
                    },
                    {
                        linguistLanguageId: 262764437,
                        name: "PostCSS",
                        type: "markup",
                        color: "#dc3a0c",
                        tmScope: "source.postcss",
                        group: "CSS",
                        extensions: [".pcss", ".postcss"],
                        aceMode: "text",
                        parsers: ["css"],
                        vscodeLanguageIds: ["postcss"],
                    },
                    {
                        linguistLanguageId: 198,
                        name: "Less",
                        type: "markup",
                        color: "#1d365d",
                        aliases: ["less-css"],
                        extensions: [".less"],
                        tmScope: "source.css.less",
                        aceMode: "less",
                        codemirrorMode: "css",
                        codemirrorMimeType: "text/css",
                        parsers: ["less"],
                        vscodeLanguageIds: ["less"],
                    },
                    {
                        linguistLanguageId: 329,
                        name: "SCSS",
                        type: "markup",
                        color: "#c6538c",
                        tmScope: "source.css.scss",
                        aceMode: "scss",
                        codemirrorMode: "css",
                        codemirrorMimeType: "text/x-scss",
                        extensions: [".scss"],
                        parsers: ["scss"],
                        vscodeLanguageIds: ["scss"],
                    },
                ],
                rT = { singleQuote: { category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." } },
                rS = {};
            c(rS, { css: () => rG, less: () => rJ, scss: () => rH });
            var rC = h($(), 1),
                r_ = h(B(), 1),
                rE = h(er(), 1);
            function rA(e, t, r) {
                if (e && "object" == typeof e) for (let s in (delete e.parent, e)) rA(e[s], t, r), "type" !== s || "string" != typeof e[s] || e[s].startsWith(t) || (r && r.test(e[s])) || (e[s] = t + e[s]);
                return e;
            }
            var rj = h(ei(), 1).default.default,
                rI = function (e) {
                    let t;
                    try {
                        t = rj(e);
                    } catch {
                        return { type: "selector-unknown", value: e };
                    }
                    return rA(
                        (function e(t) {
                            if (t && "object" == typeof t) {
                                for (let r in (delete t.parent, t)) e(t[r]);
                                Array.isArray(t) || !t.value || t.type || (t.type = "unknown");
                            }
                            return t;
                        })(t),
                        "media-"
                    );
                },
                rP = h(eA(), 1),
                rM = function (e) {
                    let t;
                    if (/\/\/|\/\*/.test(e)) return { type: "selector-unknown", value: e.trim() };
                    try {
                        new rP.default((e) => {
                            t = e;
                        }).process(e);
                    } catch {
                        return { type: "selector-unknown", value: e };
                    }
                    return rA(t, "selector-");
                },
                r$ = h(eH(), 1),
                rR = (e) => {
                    for (; e.parent;) e = e.parent;
                    return e;
                },
                rN = function (e) {
                    if (tb(e)) {
                        for (let t = e.length - 1; t > 0; t--) if ("word" === e[t].type && "{" === e[t].value && "word" === e[t - 1].type && e[t - 1].value.endsWith("#")) return !0;
                    }
                    return !1;
                },
                rL = function (e, t) {
                    if ("less" === t.parser && e.startsWith("~`")) return { type: "value-unknown", value: e };
                    let r = null;
                    try {
                        r = new r$.default(e, { loose: !0 }).parse();
                    } catch {
                        return { type: "value-unknown", value: e };
                    }
                    return (
                        (r.text = e),
                        rA(
                            (function e(t, r) {
                                if (t && "object" == typeof t)
                                    for (let s in t)
                                        "parent" !== s &&
                                            (e(t[s], r),
                                                "nodes" === s &&
                                                ((t.group = (function e(t) {
                                                    return ("paren_group" !== t.type || t.open || t.close || 1 !== t.groups.length) && ("comma_group" !== t.type || 1 !== t.groups.length)
                                                        ? "paren_group" === t.type || "comma_group" === t.type
                                                            ? { ...t, groups: t.groups.map(e) }
                                                            : t
                                                        : e(t.groups[0]);
                                                })(
                                                    (function (e, t) {
                                                        var r, s;
                                                        let { nodes: n } = e,
                                                            o = { open: null, close: null, groups: [], type: "paren_group" },
                                                            i = [o],
                                                            a = o,
                                                            l = { groups: [], type: "comma_group" },
                                                            u = [l];
                                                        for (let a = 0; a < n.length; ++a) {
                                                            let c = n[a];
                                                            if (
                                                                ("scss" === t.parser && "number" === c.type && ".." === c.unit && c.value.endsWith(".") && ((c.value = c.value.slice(0, -1)), (c.unit = "...")),
                                                                    "func" === c.type && "selector" === c.value && (c.group.groups = [rM(rR(e).text.slice(c.group.open.sourceIndex + 1, c.group.close.sourceIndex))]),
                                                                    "func" === c.type && "url" === c.value)
                                                            ) {
                                                                let e = (null == (r = c.group) ? void 0 : r.groups) ?? [],
                                                                    n = [];
                                                                for (let t = 0; t < e.length; t++) {
                                                                    let r = e[t];
                                                                    "comma_group" === r.type ? (n = [...n, ...r.groups]) : n.push(r);
                                                                }
                                                                (!rN(n) &&
                                                                    (n.some((e) => "string" === e.type || ("func" === e.type && !e.value.endsWith("\\"))) ||
                                                                        ((s = n[0]), "scss" === t.parser && (null == s ? void 0 : s.type) === "word" && s.value.startsWith("$")))) ||
                                                                    (c.group.groups = [
                                                                        rR(c)
                                                                            .text.slice(c.group.open.sourceIndex + 1, c.group.close.sourceIndex)
                                                                            .trim(),
                                                                    ]);
                                                            }
                                                            if ("paren" === c.type && "(" === c.value) (o = { open: c, close: null, groups: [], type: "paren_group" }), i.push(o), (l = { groups: [], type: "comma_group" }), u.push(l);
                                                            else if ("paren" === c.type && ")" === c.value) {
                                                                if ((l.groups.length > 0 && o.groups.push(l), (o.close = c), 1 === u.length)) throw Error("Unbalanced parenthesis");
                                                                u.pop(), (l = tg(!1, u, -1)).groups.push(o), i.pop(), (o = tg(!1, i, -1));
                                                            } else "comma" === c.type ? (o.groups.push(l), (l = { groups: [], type: "comma_group" }), (u[u.length - 1] = l)) : l.groups.push(c);
                                                        }
                                                        return l.groups.length > 0 && o.groups.push(l), a;
                                                    })(t, r)
                                                )),
                                                    delete t[s]));
                                return t;
                            })(r, t),
                            "value-",
                            /^selector-/
                        )
                    );
                },
                rW = new Set(["import", "use", "forward"]),
                rz = /(\s*)(!default).*$/,
                rq = /(\s*)(!global).*$/;
            function rD(e, t, r) {
                let s,
                    n = tG(t),
                    { frontMatter: o } = n;
                t = n.content;
                try {
                    s = e(t, { map: !1 });
                } catch (n) {
                    var i;
                    let { name: e, reason: t, line: r, column: s } = n;
                    throw "number" != typeof r ? n : Object.assign(SyntaxError(`${e}: ${t} (` + (i = { loc: { start: { line: r, column: s } }, cause: n }).loc.start.line + ":" + i.loc.start.column + ")"), i);
                }
                return (
                    (r.originalText = t),
                    (function e(t, r) {
                        for (let s in (t.source && ((t.source.startOffset = tW(t, r)), (t.source.endOffset = tz(t, r))), t)) {
                            let n = t[s];
                            "source" !== s &&
                                n &&
                                "object" == typeof n &&
                                ("value-root" === n.type || "value-unknown" === n.type
                                    ? (function e(t, r, s) {
                                        for (let n in (t.source && ((t.source.startOffset = tW(t, s) + r), (t.source.endOffset = tz(t, s) + r)), t)) {
                                            let o = t[n];
                                            "source" !== n && o && "object" == typeof o && e(o, r, s);
                                        }
                                    })(
                                        n,
                                        (function (e) {
                                            var t;
                                            let r = e.source.startOffset;
                                            return (
                                                "string" == typeof e.prop && (r += e.prop.length),
                                                "css-atrule" === e.type && "string" == typeof e.name && (r += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length),
                                                "css-atrule" !== e.type && "string" == typeof (null == (t = e.raws) ? void 0 : t.between) && (r += e.raws.between.length),
                                                r
                                            );
                                        })(t),
                                        n.text || n.value
                                    )
                                    : e(n, r));
                        }
                    })(
                        (s = (function e(t, r) {
                            var s, n;
                            if (t && "object" == typeof t) {
                                for (let s in (delete t.parent, t)) e(t[s], r);
                                if (!t.type) return t;
                                if ((t.raws ?? (t.raws = {}), "css-decl" === t.type && "string" == typeof t.prop && t.prop.startsWith("--") && "string" == typeof t.value && t.value.startsWith("{"))) {
                                    let e;
                                    if (t.value.trimEnd().endsWith("}")) {
                                        let n,
                                            o = r.originalText.slice(0, t.source.start.offset),
                                            i = "a".repeat(t.prop.length) + r.originalText.slice(t.source.start.offset + t.prop.length, t.source.end.offset),
                                            a = eK(!1, o, /[^\n]/g, " ") + i,
                                            l;
                                        l = "scss" === r.parser ? rU : "less" === r.parser ? rF : rB;
                                        try {
                                            n = l(a, { ...r });
                                        } catch { }
                                        (null == (s = null == n ? void 0 : n.nodes) ? void 0 : s.length) === 1 && "css-rule" === n.nodes[0].type && (e = n.nodes[0].nodes);
                                    }
                                    return e ? (t.value = { type: "css-rule", nodes: e }) : (t.value = { type: "value-unknown", value: t.raws.value.raw }), t;
                                }
                                let o = "";
                                "string" == typeof t.selector &&
                                    ((o = t.raws.selector ? t.raws.selector.scss ?? t.raws.selector.raw : t.selector), t.raws.between && t.raws.between.trim().length > 0 && (o += t.raws.between), (t.raws.selector = o));
                                let i = "";
                                "string" == typeof t.value && ((i = (i = t.raws.value ? t.raws.value.scss ?? t.raws.value.raw : t.value).trim()), (t.raws.value = i));
                                let a = "";
                                if (
                                    ("string" == typeof t.params &&
                                        ((a = t.raws.params ? t.raws.params.scss ?? t.raws.params.raw : t.params),
                                            t.raws.afterName && t.raws.afterName.trim().length > 0 && (a = t.raws.afterName + a),
                                            t.raws.between && t.raws.between.trim().length > 0 && (a += t.raws.between),
                                            (a = a.trim()),
                                            (t.raws.params = a)),
                                        o.trim().length > 0)
                                )
                                    return (
                                        (o.startsWith("@") && o.endsWith(":")) ||
                                        (t.mixin
                                            ? (t.selector = rL(o, r))
                                            : ("scss" === r.parser &&
                                                t.selector &&
                                                t.selector
                                                    .replace(/\/\*.*?\*\//, "")
                                                    .replace(/\/\/.*\n/, "")
                                                    .trim()
                                                    .endsWith(":") &&
                                                (t.isSCSSNesterProperty = !0),
                                                (t.selector = rM(o)))),
                                        t
                                    );
                                if (i.length > 0) {
                                    let e = i.match(rz);
                                    e && ((i = i.slice(0, e.index)), (t.scssDefault = !0), "!default" !== e[0].trim() && (t.raws.scssDefault = e[0]));
                                    let s = i.match(rq);
                                    if ((s && ((i = i.slice(0, s.index)), (t.scssGlobal = !0), "!global" !== s[0].trim() && (t.raws.scssGlobal = s[0])), i.startsWith("progid:"))) return { type: "value-unknown", value: i };
                                    t.value = rL(i, r);
                                }
                                if (
                                    ("less" === r.parser &&
                                        "css-decl" === t.type &&
                                        i.startsWith("extend(") &&
                                        (t.extend || (t.extend = ":" === t.raws.between), t.extend && !t.selector && (delete t.value, (t.selector = rM(i.slice(7, -1))))),
                                        "css-atrule" === t.type)
                                ) {
                                    if ("less" === r.parser) {
                                        if (t.mixin) {
                                            let e = t.raws.identifier + t.name + t.raws.afterName + t.raws.params;
                                            return (t.selector = rM(e)), delete t.params, t;
                                        }
                                        if (t.function) return t;
                                    }
                                    if ("css" === r.parser && "custom-selector" === t.name) {
                                        let e = t.params.match(/:--\S+\s+/)[0].trim();
                                        return (t.customSelector = e), (t.selector = rM(t.params.slice(e.length).trim())), delete t.params, t;
                                    }
                                    if ("less" === r.parser) {
                                        if (t.name.includes(":") && !t.params) {
                                            t.variable = !0;
                                            let e = t.name.split(":");
                                            (t.name = e[0]), (t.value = rL(e.slice(1).join(":"), r));
                                        }
                                        if (!["page", "nest", "keyframes"].includes(t.name) && (null == (n = t.params) ? void 0 : n[0]) === ":") {
                                            t.variable = !0;
                                            let e = t.params.slice(1);
                                            e && (t.value = rL(e, r)), (t.raws.afterName += ":");
                                        }
                                        if (t.variable) return delete t.params, t.value || delete t.value, t;
                                    }
                                }
                                if ("css-atrule" === t.type && a.length > 0) {
                                    let { name: e } = t,
                                        s = t.name.toLowerCase();
                                    return "warn" === e || "error" === e
                                        ? ((t.params = { type: "media-unknown", value: a }), t)
                                        : "extend" === e || "nest" === e
                                            ? ((t.selector = rM(a)), delete t.params, t)
                                            : "at-root" === e
                                                ? (/^\(\s*(?:without|with)\s*:.+\)$/s.test(a) ? (t.params = rL(a, r)) : ((t.selector = rM(a)), delete t.params), t)
                                                : rW.has(s)
                                                    ? ((t.import = !0), delete t.filename, (t.params = rL(a, r)), t)
                                                    : ["namespace", "supports", "if", "else", "for", "each", "while", "debug", "mixin", "include", "function", "return", "define-mixin", "add-mixin"].includes(e)
                                                        ? ((a = (a = a.replace(/(\$\S+?)(\s+)?\.{3}/, "$1...$2")).replace(/^(?!if)(\S+)(\s+)\(/, "$1($2")), (t.value = rL(a, r)), delete t.params, t)
                                                        : ["media", "custom-media"].includes(s)
                                                            ? a.includes("#{")
                                                                ? { type: "media-unknown", value: a }
                                                                : ((t.params = rI(a)), t)
                                                            : ((t.params = a), t);
                                }
                            }
                            return t;
                        })(rA(s, "css-"), r)),
                        t
                    ),
                    o && ((o.source = { startOffset: 0, endOffset: o.raw.length }), (s.frontMatter = o)),
                    s
                );
            }
            function rB(e, t = {}) {
                return rD(rC.default.default, e, t);
            }
            function rF(e, t = {}) {
                return rD(
                    (e) =>
                        r_.default.parse(
                            (function (e) {
                                let t = "initial",
                                    r = "initial",
                                    s,
                                    n = !1,
                                    o = [];
                                for (let i = 0; i < e.length; i++) {
                                    let a = e[i];
                                    switch (t) {
                                        case "initial":
                                            if ("'" === a) {
                                                t = "single-quotes";
                                                continue;
                                            }
                                            if ('"' === a) {
                                                t = "double-quotes";
                                                continue;
                                            }
                                            if (("u" === a || "U" === a) && "url(" === e.slice(i, i + 4).toLowerCase()) {
                                                (t = "url"), (i += 3);
                                                continue;
                                            }
                                            if ("*" === a && "/" === e[i - 1]) {
                                                t = "comment-block";
                                                continue;
                                            }
                                            "/" === a && "/" === e[i - 1] && ((t = "comment-inline"), (s = i - 1));
                                            continue;
                                        case "single-quotes":
                                            if (
                                                ("'" === a && "\\" !== e[i - 1] && ((t = r), (r = "initial")),
                                                    a ===
                                                    `
` || "\r" === a)
                                            )
                                                return e;
                                            continue;
                                        case "double-quotes":
                                            if (
                                                ('"' === a && "\\" !== e[i - 1] && ((t = r), (r = "initial")),
                                                    a ===
                                                    `
` || "\r" === a)
                                            )
                                                return e;
                                            continue;
                                        case "url":
                                            if (
                                                (")" === a && (t = "initial"),
                                                    a ===
                                                    `
` || "\r" === a)
                                            )
                                                return e;
                                            if ("'" === a) {
                                                (t = "single-quotes"), (r = "url");
                                                continue;
                                            }
                                            '"' === a && ((t = "double-quotes"), (r = "url"));
                                            continue;
                                        case "comment-block":
                                            "/" === a && "*" === e[i - 1] && (t = "initial");
                                            continue;
                                        case "comment-inline":
                                            ('"' === a || "'" === a || "*" === a) && (n = !0),
                                                (a ===
                                                    `
` ||
                                                    "\r" === a) &&
                                                (n && o.push([s, i]), (t = "initial"), (n = !1));
                                            continue;
                                    }
                                }
                                for (let [t, r] of o) e = e.slice(0, t) + eK(!1, e.slice(t, r), /["'*]/g, " ") + e.slice(r);
                                return e;
                            })(e)
                        ),
                    e,
                    t
                );
            }
            function rU(e, t = {}) {
                return rD(rE.default, e, t);
            }
            var rV = {
                astFormat: "postcss",
                hasPragma: function (e) {
                    return (function (e) {
                        let { pragmas: t } = tU(e);
                        return Object.prototype.hasOwnProperty.call(t, "prettier") || Object.prototype.hasOwnProperty.call(t, "format");
                    })(tG(e).content);
                },
                locStart: tq,
                locEnd: tD,
            },
                rG = { ...rV, parse: rB },
                rJ = { ...rV, parse: rF },
                rH = { ...rV, parse: rU },
                rQ = {
                    postcss: {
                        print: function (e, t, r) {
                            var s, n, o, i, a, l, u, c, p, h, f, d, m, y, g, v, w, b;
                            let { node: x } = e;
                            switch (x.type) {
                                case "front-matter":
                                    return [x.raw, tm];
                                case "css-root": {
                                    let s = rk(e, t, r),
                                        n = x.raws.after.trim();
                                    return n.startsWith(";") && (n = n.slice(1).trim()), [x.frontMatter ? [r("frontMatter"), tm] : "", s, n ? ` ${n}` : "", x.nodes.length > 0 ? tm : ""];
                                }
                                case "css-comment": {
                                    let e = x.inline || x.raws.inline,
                                        r = t.originalText.slice(tq(x), tD(x));
                                    return e ? r.trimEnd() : r;
                                }
                                case "css-rule":
                                    return [
                                        r("selector"),
                                        x.important ? " !important" : "",
                                        x.nodes
                                            ? [
                                                (null == (s = x.selector) ? void 0 : s.type) === "selector-unknown" && ra(x.selector.value) ? tf : x.selector ? " " : "",
                                                "{",
                                                x.nodes.length > 0 ? ta([tm, rk(e, t, r)]) : "",
                                                tm,
                                                "}",
                                                !(function (e) {
                                                    let { selector: t } = e;
                                                    return !!t && (("string" == typeof t && /^@.+:.*$/.test(t)) || (t.value && /^@.+:.*$/.test(t.value)));
                                                })(x)
                                                    ? ""
                                                    : ";",
                                            ]
                                            : ";",
                                    ];
                                case "css-decl": {
                                    let s,
                                        i,
                                        a = e.parent,
                                        { between: l } = x.raws,
                                        h = l.trim(),
                                        f = ":" === h,
                                        d = "string" == typeof x.value && /^ *$/.test(x.value),
                                        m = "string" == typeof x.value ? x.value : r("value");
                                    return (
                                        (m =
                                            (null == (u = x.value) ? void 0 : u.type) === "value-root" && (null == (c = x.value.group) ? void 0 : c.type) === "value-value" && "composes" === x.prop.toLowerCase()
                                                ? (function (e, t) {
                                                    if ("string" == typeof e) return t(e);
                                                    let r = new Map();
                                                    return (function e(s) {
                                                        if (r.has(s)) return r.get(s);
                                                        let n = (function (r) {
                                                            switch (ts(r)) {
                                                                case eY:
                                                                    return t(r.map(e));
                                                                case e4:
                                                                    return t({ ...r, parts: r.parts.map(e) });
                                                                case e9:
                                                                    return t({ ...r, breakContents: e(r.breakContents), flatContents: e(r.flatContents) });
                                                                case e3: {
                                                                    let { expandedStates: s, contents: n } = r;
                                                                    return (n = s ? (s = s.map(e))[0] : e(n)), t({ ...r, contents: n, expandedStates: s });
                                                                }
                                                                case e0:
                                                                case e1:
                                                                case e5:
                                                                case te:
                                                                case e6:
                                                                    return t({ ...r, contents: e(r.contents) });
                                                                case eZ:
                                                                case eX:
                                                                case e2:
                                                                case e7:
                                                                case e8:
                                                                case tt:
                                                                    return t(r);
                                                                default:
                                                                    throw new to(r);
                                                            }
                                                        })(s);
                                                        return r.set(s, n), n;
                                                    })(e);
                                                })(m, tw)
                                                : m),
                                        !f && ra(h) && !(null != (o = null == (n = x.value) ? void 0 : n.group) && o.group && e.call(() => rx(e), "value", "group", "group")) && (m = ta([tm, tl(-1, m)])),
                                        [
                                            eK(!1, x.raws.before, /[\s;]/g, ""),
                                            ("css-atrule" === a.type && a.variable) ||
                                                ((i = null == (p = null == (s = e.findAncestor((e) => "css-rule" === e.type)) ? void 0 : s.raws) ? void 0 : p.selector) && (i.startsWith(":import") || i.startsWith(":export")))
                                                ? x.prop
                                                : tQ(x.prop),
                                            h.startsWith("//") ? " " : "",
                                            h,
                                            x.extend || d ? "" : " ",
                                            "less" === t.parser && x.extend && x.selector ? ["extend(", r("selector"), ")"] : "",
                                            m,
                                            x.raws.important ? x.raws.important.replace(/\s*!\s*important/i, " !important") : x.important ? " !important" : "",
                                            x.raws.scssDefault ? x.raws.scssDefault.replace(/\s*!default/i, " !default") : x.scssDefault ? " !default" : "",
                                            x.raws.scssGlobal ? x.raws.scssGlobal.replace(/\s*!global/i, " !global") : x.scssGlobal ? " !global" : "",
                                            x.nodes
                                                ? [" {", ta([td, rk(e, t, r)]), td, "}"]
                                                : x.prop.startsWith("@prettier-placeholder") && !a.raws.semicolon && ";" !== t.originalText[tD(x) - 1]
                                                    ? ""
                                                    : t.__isHTMLStyleAttribute && tY(e, x)
                                                        ? tp(";")
                                                        : ";",
                                        ]
                                    );
                                }
                                case "css-atrule": {
                                    let s = e.parent,
                                        n = t5(x) && !s.raws.semicolon && ";" !== t.originalText[tD(x) - 1];
                                    if ("less" === t.parser) {
                                        if (x.mixin) return [r("selector"), x.important ? " !important" : "", n ? "" : ";"];
                                        if (x.function) return [x.name, "string" == typeof x.params ? x.params : r("params"), n ? "" : ";"];
                                        if (x.variable)
                                            return [
                                                "@",
                                                x.name,
                                                ": ",
                                                x.value ? r("value") : "",
                                                x.raws.between.trim() ? x.raws.between.trim() + " " : "",
                                                x.nodes ? ["{", ta([x.nodes.length > 0 ? td : "", rk(e, t, r)]), td, "}"] : "",
                                                n ? "" : ";",
                                            ];
                                    }
                                    let o = "import" === x.name && (null == (i = x.params) ? void 0 : i.type) === "value-unknown" && x.params.value.endsWith(";");
                                    return [
                                        "@",
                                        t9(x) || x.name.endsWith(":") || t5(x) ? x.name : tQ(x.name),
                                        x.params
                                            ? [
                                                t9(x) ? "" : t5(x) ? ("" === x.raws.afterName ? "" : x.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(x.raws.afterName) ? [tm, tm] : /^\s*\n/.test(x.raws.afterName) ? tm : " ") : " ",
                                                "string" == typeof x.params ? x.params : r("params"),
                                            ]
                                            : "",
                                        x.selector ? ta([" ", r("selector")]) : "",
                                        x.value
                                            ? tu([
                                                " ",
                                                r("value"),
                                                t4(x, t)
                                                    ? (null == (d = null == (f = null == (h = x.value) ? void 0 : h.group) ? void 0 : f.group) ? void 0 : d.type) === "value-paren_group" &&
                                                        null !== x.value.group.group.open &&
                                                        null !== x.value.group.group.close
                                                        ? " "
                                                        : tf
                                                    : "",
                                            ])
                                            : "else" === x.name
                                                ? " "
                                                : "",
                                        x.nodes
                                            ? [
                                                t4(x, t) ? "" : (x.selector && !x.selector.nodes && "string" == typeof x.selector.value && ra(x.selector.value)) || (!x.selector && "string" == typeof x.params && ra(x.params)) ? tf : " ",
                                                "{",
                                                ta([x.nodes.length > 0 ? td : "", rk(e, t, r)]),
                                                td,
                                                "}",
                                            ]
                                            : n || o
                                                ? ""
                                                : ";",
                                    ];
                                }
                                case "media-query-list": {
                                    let t = [];
                                    return (
                                        e.each(({ node: e }) => {
                                            ("media-query" === e.type && "" === e.value) || t.push(r());
                                        }, "nodes"),
                                        tu(ta(ty(tf, t)))
                                    );
                                }
                                case "media-query":
                                    return [ty(" ", e.map(r, "nodes")), tY(e, x) ? "" : ","];
                                case "media-type":
                                case "media-value":
                                    return rm(rd(x.value, t));
                                case "media-feature-expression":
                                    return x.nodes ? ["(", ...e.map(r, "nodes"), ")"] : x.value;
                                case "media-feature":
                                    return tQ(rd(eK(!1, x.value, / +/g, " "), t));
                                case "media-colon":
                                    return [x.value, " "];
                                case "media-keyword":
                                case "selector-string":
                                    return rd(x.value, t);
                                case "media-url":
                                    return rd(eK(!1, eK(!1, x.value, /^url\(\s+/gi, "url("), /\s+\)$/g, ")"), t);
                                case "media-unknown":
                                case "selector-comment":
                                case "selector-nesting":
                                case "value-paren":
                                case "value-operator":
                                case "value-unicode-range":
                                case "value-unknown":
                                    return x.value;
                                case "selector-root":
                                    return tu([tZ(e, "custom-selector") ? [e.findAncestor((e) => "css-atrule" === e.type).customSelector, tf] : "", ty([",", tZ(e, ["extend", "custom-selector", "nest"]) ? tf : tm], e.map(r, "nodes"))]);
                                case "selector-selector":
                                    return tu(ta(e.map(r, "nodes")));
                                case "selector-tag":
                                    let k;
                                    return [
                                        x.namespace ? [!0 === x.namespace ? "" : x.namespace.trim(), "|"] : "",
                                        (null == (a = e.previous) ? void 0 : a.type) === "selector-nesting"
                                            ? x.value
                                            : rm(
                                                ((m = x.value),
                                                    (null == (y = null == (k = e.findAncestor((e) => "css-atrule" === e.type)) ? void 0 : k.name) ? void 0 : y.toLowerCase().endsWith("keyframes")) && ["from", "to"].includes(m.toLowerCase()))
                                                    ? x.value.toLowerCase()
                                                    : x.value
                                            ),
                                    ];
                                case "selector-id":
                                    return ["#", x.value];
                                case "selector-class":
                                    return [".", rm(rd(x.value, t))];
                                case "selector-attribute":
                                    let O;
                                    return [
                                        "[",
                                        x.namespace ? [!0 === x.namespace ? "" : x.namespace.trim(), "|"] : "",
                                        x.attribute.trim(),
                                        x.operator ?? "",
                                        x.value ? ((g = rd(x.value.trim(), t)), (O = t.singleQuote ? "'" : '"'), g.includes('"') || g.includes("'") ? g : O + g + O) : "",
                                        x.insensitive ? " i" : "",
                                        "]",
                                    ];
                                case "selector-combinator":
                                    if ("+" === x.value || ">" === x.value || "~" === x.value || ">>>" === x.value) {
                                        let t = e.parent;
                                        return ["selector-selector" === t.type && t.nodes[0] === x ? "" : tf, x.value, tY(e, x) ? "" : " "];
                                    }
                                    return [x.value.trim().startsWith("(") ? tf : "", rm(rd(x.value.trim(), t)) || tf];
                                case "selector-universal":
                                    return [x.namespace ? [!0 === x.namespace ? "" : x.namespace.trim(), "|"] : "", x.value];
                                case "selector-pseudo":
                                    return [tQ(x.value), tb(x.nodes) ? tu(["(", ta([td, ty([",", tf], e.map(r, "nodes"))]), td, ")"]) : ""];
                                case "selector-unknown": {
                                    let r = e.findAncestor((e) => "css-rule" === e.type);
                                    if (null != r && r.isSCSSNesterProperty) return rm(rd(tQ(x.value), t));
                                    let s = e.parent;
                                    if (null != (l = s.raws) && l.selector) {
                                        let e = tq(s),
                                            r = e + s.raws.selector.length;
                                        return t.originalText.slice(e, r).trim();
                                    }
                                    let n = e.grandparent;
                                    if ("value-paren_group" === s.type && (null == n ? void 0 : n.type) === "value-func" && "selector" === n.value) {
                                        let e = tD(s.open) + 1,
                                            r = tq(s.close),
                                            n = t.originalText.slice(e, r).trim();
                                        return ra(n) ? [th, n] : n;
                                    }
                                    return x.value;
                                }
                                case "value-value":
                                case "value-root":
                                    return r("group");
                                case "value-comment":
                                    return t.originalText.slice(tq(x), tD(x));
                                case "value-comma_group":
                                    return rc(e, t, r);
                                case "value-paren_group":
                                    return (function (e, t, r) {
                                        var s;
                                        let { node: n, parent: o } = e,
                                            i = e.map(({ node: e }) => ("string" == typeof e ? e : r()), "groups");
                                        if (
                                            o &&
                                            "value-func" === (s = o).type &&
                                            "url" === s.value.toLowerCase() &&
                                            (1 === n.groups.length ||
                                                (n.groups.length > 0 &&
                                                    "value-comma_group" === n.groups[0].type &&
                                                    n.groups[0].groups.length > 0 &&
                                                    "value-word" === n.groups[0].groups[0].type &&
                                                    n.groups[0].groups[0].value.startsWith("data:")))
                                        )
                                            return [n.open ? r("open") : "", ty(",", i), n.close ? r("close") : ""];
                                        if (!n.open) {
                                            let t = rx(e),
                                                r = ty([",", t ? tm : tf], i);
                                            return ta(t ? [tm, r] : tu(tc(r)));
                                        }
                                        let a = e.map(({ node: r, isLast: s, index: n }) => {
                                            var o, a;
                                            let l = i[n];
                                            if (t7(r) && "value-comma_group" === r.type && r.groups && "value-paren_group" !== r.groups[0].type && (null == (o = r.groups[2]) ? void 0 : o.type) === "value-paren_group") {
                                                let e = tv(l.contents.contents);
                                                (e[1] = tu(e[1])), (l = tu(tl(-1, l)));
                                            }
                                            let u = [
                                                l,
                                                s
                                                    ? "value-func" === (a = e.grandparent).type &&
                                                        "var" === a.value.toLowerCase() &&
                                                        (function ({ node: e, parent: t }, r) {
                                                            return !!(e.source && r.originalText.slice(tq(e), tq(t.close)).trimEnd().endsWith(","));
                                                        })(e, t)
                                                        ? ","
                                                        : "value-comment" !== e.node.type &&
                                                            !("value-comma_group" === e.node.type && e.node.groups.every((e) => "value-comment" === e.type)) &&
                                                            ("es5" === t.trailingComma || "all" === t.trailingComma) &&
                                                            e.callParent(() => re(e, t))
                                                            ? tp(",")
                                                            : ""
                                                    : ",",
                                            ];
                                            if (!s && "value-comma_group" === r.type && tb(r.groups)) {
                                                let e = tg(!1, r.groups, -1);
                                                !e.source && e.close && (e = e.close), e.source && rb(t.originalText, tD(e)) && u.push(tm);
                                            }
                                            return u;
                                        }, "groups"),
                                            l = (function (e, t) {
                                                if (!t7(t)) return !1;
                                                let { groups: r } = t,
                                                    s = r.indexOf(e);
                                                return -1 !== s && ri(r[s + 1]);
                                            })(n, o),
                                            u = (function (e, t) {
                                                var r, s;
                                                if ((null == (r = e.open) ? void 0 : r.value) !== "(" || (null == (s = e.close) ? void 0 : s.value) !== ")" || e.groups.some((e) => "value-comma_group" !== e.type)) return !1;
                                                if ("value-comma_group" === t.type) {
                                                    let r = t.groups.indexOf(e) - 1,
                                                        s = t.groups[r];
                                                    if ((null == s ? void 0 : s.type) === "value-word" && "with" === s.value) return !0;
                                                }
                                                return !1;
                                            })(n, o),
                                            c = re(e, t),
                                            p = tu([n.open ? r("open") : "", ta([td, ty(tf, a)]), td, n.close ? r("close") : ""], { shouldBreak: u || (c && !l) });
                                        return u || l ? tl(-1, p) : p;
                                    })(e, t, r);
                                case "value-func":
                                    return [x.value, tZ(e, "supports") && (v = x).value && ["not", "and", "or"].includes(v.value.toLowerCase()) ? " " : "", r("group")];
                                case "value-number":
                                    let T;
                                    return [ry(x.value), ((T = (w = x.unit).toLowerCase()), rp.has(T) ? rp.get(T) : w)];
                                case "value-word":
                                    return (x.isColor && x.isHex) || ((b = x.value), tH.has(b.toLowerCase())) ? x.value.toLowerCase() : x.value;
                                case "value-colon": {
                                    let { previous: t } = e;
                                    return [x.value, ("string" == typeof (null == t ? void 0 : t.value) && t.value.endsWith("\\")) || tK(e, "url") ? "" : tf];
                                }
                                case "value-string":
                                    return tO(x.raws.quote + x.value + x.raws.quote, t);
                                case "value-atword":
                                    return ["@", x.value];
                                default:
                                    throw new tT(x, "PostCSS");
                            }
                        },
                        embed: tA,
                        insertPragma: function (e) {
                            let { frontMatter: t, content: r } = tG(e);
                            return (
                                (t
                                    ? t.raw +
                                    `

`
                                    : "") +
                                (function (e) {
                                    let { shebang: t, text: r, pragmas: s, comments: n } = tU(e),
                                        o = (0, tB.strip)(r);
                                    return (
                                        (t
                                            ? `${t}
`
                                            : "") +
                                        (0, tB.print)({ pragmas: { format: "", ...s }, comments: n.trimStart() }) +
                                        (o.startsWith(`
`)
                                            ? `
`
                                            : `

`) +
                                        o
                                    );
                                })(r)
                            );
                        },
                        massageAstNode: t_,
                        getVisitorKeys: tP,
                    },
                },
                rK = eQ;
        },
    },
]);







// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1285],{71285:function(e,t,r){r.r(t),r.d(t,{default:function(){return rK},languages:function(){return rO},options:function(){return rT},parsers:function(){return rS},printers:function(){return rQ}});var s=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},p=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))l.call(e,a)||a===r||n(e,a,{get:()=>t[a],enumerable:!(s=o(t,a))||s.enumerable});return e},h=(e,t,r)=>(r=null!=e?s(a(e)):{},p(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)),f=u(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.extract=function(e){let t=e.match(s);return t?t[0].trimLeft():""},e.parse=function(e){return c(e).pragmas},e.parseWithComments=c,e.print=function({comments:e="",pragmas:t={}}){let r=`
// `,s=Object.keys(t),n=s.flatMap(e=>p(e,t[e])).map(e=>` * ${e}${r}`).join("");if(!e){if(0===s.length)return"";if(1===s.length&&!Array.isArray(t[s[0]])){let e=t[s[0]];return`/** ${p(s[0],e)[0]} */`}}let o=e.split(r).map(e=>` * ${e}`).join(r)+r;return"/**"+r+(e?o:"")+(e&&s.length?" *"+r:"")+n+" */"},e.strip=function(e){let t=e.match(s);return t&&t[0]?e.substring(t[0].length):e};var t=/\*\/$/,r=/^\/\*\*?/,s=/^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,n=/(^|\s+)\/\/([^\r\n]*)/g,o=/^(\r?\n)+/,i=/(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,a=/(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,l=/(\r?\n|^) *\* ?/g,u=[];function c(e){let s=`
// `;e=e.replace(r,"").replace(t,"").replace(l,"$1");let c="";for(;c!==e;)c=e,e=e.replace(i,`${s}$1 $2${s}`);e=e.replace(o,"").trimRight();let p=Object.create(null),h=e.replace(a,"").replace(o,"").trimRight(),f;for(;f=a.exec(e);){let e=f[2].replace(n,"");"string"==typeof p[f[1]]||Array.isArray(p[f[1]])?p[f[1]]=u.concat(p[f[1]],e):p[f[1]]=e}return{comments:h,pragmas:p}}function p(e,t){return u.concat(t).map(t=>`@${e} ${t}`.trim())}}),d=u((e,t)=>{t.exports.isClean=Symbol("isClean"),t.exports.my=Symbol("my")}),m=u((e,t)=>{var r=String,s=function(){return{isColorSupported:!1,reset:r,bold:r,dim:r,italic:r,underline:r,inverse:r,hidden:r,strikethrough:r,black:r,red:r,green:r,yellow:r,blue:r,magenta:r,cyan:r,white:r,gray:r,bgBlack:r,bgRed:r,bgGreen:r,bgYellow:r,bgBlue:r,bgMagenta:r,bgCyan:r,bgWhite:r}};t.exports=s(),t.exports.createColors=s}),y=u(()=>{}),g=u((e,t)=>{var r=m(),s=y(),n=class e extends Error{constructor(t,r,s,n,o,i){super(t),this.name="CssSyntaxError",this.reason=t,o&&(this.file=o),n&&(this.source=n),i&&(this.plugin=i),"u">typeof r&&"u">typeof s&&("number"==typeof r?(this.line=r,this.column=s):(this.line=r.line,this.column=r.column,this.endLine=s.line,this.endColumn=s.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,e)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>","u">typeof this.line&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let t=this.source;null==e&&(e=r.isColorSupported),s&&e&&(t=s(t));let n=t.split(/\r?\n/),o=Math.max(this.line-3,0),i=Math.min(this.line+2,n.length),a=String(i).length,l,u;if(e){let{bold:e,gray:t,red:s}=r.createColors(!0);l=t=>e(s(t)),u=e=>t(e)}else l=u=e=>e;return n.slice(o,i).map((e,t)=>{let r=o+1+t,s=" "+(" "+r).slice(-a)+" | ";if(r===this.line){let t=u(s.replace(/\d/g," "))+e.slice(0,this.column-1).replace(/[^\t]/g," ");return l(">")+u(s)+e+`
//  `+t+l("^")}return" "+u(s)+e}).join(`
// `)}toString(){let e=this.showSourceCode();return e&&(e=`

// `+e+`
// `),this.name+": "+this.message+e}};t.exports=n,n.default=n}),v=u((e,t)=>{var r={after:`
// `,beforeClose:`
// `,beforeComment:`
// `,beforeDecl:`
// `,beforeOpen:" ",beforeRule:`
// `,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1},s=class{constructor(e){this.builder=e}atrule(e,t){let r="@"+e.name,s=e.params?this.rawValue(e,"params"):"";if("u">typeof e.raws.afterName?r+=e.raws.afterName:s&&(r+=" "),e.nodes)this.block(e,r+s);else{let n=(e.raws.between||"")+(t?";":"");this.builder(r+s+n,e)}}beforeAfter(e,t){let r;r="decl"===e.type?this.raw(e,null,"beforeDecl"):"comment"===e.type?this.raw(e,null,"beforeComment"):"before"===t?this.raw(e,null,"beforeRule"):this.raw(e,null,"beforeClose");let s=e.parent,n=0;for(;s&&"root"!==s.type;)n+=1,s=s.parent;if(r.includes(`
// `)){let t=this.raw(e,null,"indent");if(t.length)for(let e=0;e<n;e++)r+=t}return r}block(e,t){let r,s=this.raw(e,"between","beforeOpen");this.builder(t+s+"{",e,"start"),e.nodes&&e.nodes.length?(this.body(e),r=this.raw(e,"after")):r=this.raw(e,"after","emptyBody"),r&&this.builder(r),this.builder("}",e,"end")}body(e){let t=e.nodes.length-1;for(;t>0&&"comment"===e.nodes[t].type;)t-=1;let r=this.raw(e,"semicolon");for(let s=0;s<e.nodes.length;s++){let n=e.nodes[s],o=this.raw(n,"before");o&&this.builder(o),this.stringify(n,t!==s||r)}}comment(e){let t=this.raw(e,"left","commentLeft"),r=this.raw(e,"right","commentRight");this.builder("/*"+t+e.text+r+"*/",e)}decl(e,t){let r=this.raw(e,"between","colon"),s=e.prop+r+this.rawValue(e,"value");e.important&&(s+=e.raws.important||" !important"),t&&(s+=";"),this.builder(s,e)}document(e){this.body(e)}raw(e,t,s){let n;if(s||(s=t),t&&"u">typeof(n=e.raws[t]))return n;let o=e.parent;if("before"===s&&(!o||"root"===o.type&&o.first===e||o&&"document"===o.type))return"";if(!o)return r[s];let i=e.root();if(i.rawCache||(i.rawCache={}),"u">typeof i.rawCache[s])return i.rawCache[s];if("before"===s||"after"===s)return this.beforeAfter(e,s);{var a;let r="raw"+((a=s)[0].toUpperCase()+a.slice(1));this[r]?n=this[r](i,e):i.walk(e=>{if("u">typeof(n=e.raws[t]))return!1})}return typeof n>"u"&&(n=r[s]),i.rawCache[s]=n,n}rawBeforeClose(e){let t;return e.walk(e=>{if(e.nodes&&e.nodes.length>0&&"u">typeof e.raws.after)return(t=e.raws.after).includes(`
// `)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeComment(e,t){let r;return e.walkComments(e=>{if("u">typeof e.raws.before)return(r=e.raws.before).includes(`
// `)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(t,null,"beforeDecl"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeDecl(e,t){let r;return e.walkDecls(e=>{if("u">typeof e.raws.before)return(r=e.raws.before).includes(`
// `)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(t,null,"beforeRule"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeOpen(e){let t;return e.walk(e=>{if("decl"!==e.type&&"u">typeof(t=e.raws.between))return!1}),t}rawBeforeRule(e){let t;return e.walk(r=>{if(r.nodes&&(r.parent!==e||e.first!==r)&&"u">typeof r.raws.before)return(t=r.raws.before).includes(`
// `)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawColon(e){let t;return e.walkDecls(e=>{if("u">typeof e.raws.between)return t=e.raws.between.replace(/[^\s:]/g,""),!1}),t}rawEmptyBody(e){let t;return e.walk(e=>{if(e.nodes&&0===e.nodes.length&&"u">typeof(t=e.raws.after))return!1}),t}rawIndent(e){let t;return e.raws.indent?e.raws.indent:(e.walk(r=>{let s=r.parent;if(s&&s!==e&&s.parent&&s.parent===e&&"u">typeof r.raws.before){let e=r.raws.before.split(`
// `);return t=(t=e[e.length-1]).replace(/\S/g,""),!1}}),t)}rawSemicolon(e){let t;return e.walk(e=>{if(e.nodes&&e.nodes.length&&"decl"===e.last.type&&"u">typeof(t=e.raws.semicolon))return!1}),t}rawValue(e,t){let r=e[t],s=e.raws[t];return s&&s.value===r?s.raw:r}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,t){if(!this[e.type])throw Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,t)}};t.exports=s,s.default=s}),w=u((e,t)=>{var r=v();function s(e,t){new r(t).stringify(e)}t.exports=s,s.default=s}),b=u((e,t)=>{var{isClean:r,my:s}=d(),n=g(),o=v(),i=w(),a=class{constructor(e={}){for(let t in this.raws={},this[r]=!1,this[s]=!0,e)if("nodes"===t)for(let r of(this.nodes=[],e[t]))"function"==typeof r.clone?this.append(r.clone()):this.append(r);else this[t]=e[t]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let t=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${t.input.from}:${t.start.line}:${t.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let t in e)this[t]=e[t];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let t=function e(t,r){let s=new t.constructor;for(let n in t){if(!Object.prototype.hasOwnProperty.call(t,n)||"proxyCache"===n)continue;let o=t[n],i=typeof o;"parent"===n&&"object"===i?r&&(s[n]=r):"source"===n?s[n]=o:Array.isArray(o)?s[n]=o.map(t=>e(t,s)):("object"===i&&null!==o&&(o=e(o)),s[n]=o)}return s}(this);for(let r in e)t[r]=e[r];return t}cloneAfter(e={}){let t=this.clone(e);return this.parent.insertAfter(this,t),t}cloneBefore(e={}){let t=this.clone(e);return this.parent.insertBefore(this,t),t}error(e,t={}){if(this.source){let{end:r,start:s}=this.rangeBy(t);return this.source.input.error(e,{column:s.column,line:s.line},{column:r.column,line:r.line},t)}return new n(e)}getProxyProcessor(){return{get:(e,t)=>"proxyOf"===t?e:"root"===t?()=>e.root().toProxy():e[t],set:(e,t,r)=>(e[t]===r||(e[t]=r,("prop"===t||"value"===t||"name"===t||"params"===t||"important"===t||"text"===t)&&e.markDirty()),!0)}}markDirty(){if(this[r]){this[r]=!1;let e=this;for(;e=e.parent;)e[r]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e,t){let r=this.source.start;if(e.index)r=this.positionInside(e.index,t);else if(e.word){let s=(t=this.toString()).indexOf(e.word);-1!==s&&(r=this.positionInside(s,t))}return r}positionInside(e,t){let r=t||this.toString(),s=this.source.start.column,n=this.source.start.line;for(let t=0;t<e;t++)r[t]===`
// `?(s=1,n+=1):s+=1;return{column:s,line:n}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let t={column:this.source.start.column,line:this.source.start.line},r=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:t.column+1,line:t.line};if(e.word){let s=this.toString(),n=s.indexOf(e.word);-1!==n&&(t=this.positionInside(n,s),r=this.positionInside(n+e.word.length,s))}else e.start?t={column:e.start.column,line:e.start.line}:e.index&&(t=this.positionInside(e.index)),e.end?r={column:e.end.column,line:e.end.line}:e.endIndex?r=this.positionInside(e.endIndex):e.index&&(r=this.positionInside(e.index+1));return(r.line<t.line||r.line===t.line&&r.column<=t.column)&&(r={column:t.column+1,line:t.line}),{end:r,start:t}}raw(e,t){return new o().raw(this,e,t)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let t=this,r=!1;for(let s of e)s===this?r=!0:r?(this.parent.insertAfter(t,s),t=s):this.parent.insertBefore(t,s);r||this.remove()}return this}root(){let e=this;for(;e.parent&&"document"!==e.parent.type;)e=e.parent;return e}toJSON(e,t){let r={},s=null==t;t=t||new Map;let n=0;for(let e in this){if(!Object.prototype.hasOwnProperty.call(this,e)||"parent"===e||"proxyCache"===e)continue;let s=this[e];if(Array.isArray(s))r[e]=s.map(e=>"object"==typeof e&&e.toJSON?e.toJSON(null,t):e);else if("object"==typeof s&&s.toJSON)r[e]=s.toJSON(null,t);else if("source"===e){let o=t.get(s.input);null==o&&(o=n,t.set(s.input,n),n++),r[e]={end:s.end,inputId:o,start:s.start}}else r[e]=s}return s&&(r.inputs=[...t.keys()].map(e=>e.toJSON())),r}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=i){e.stringify&&(e=e.stringify);let t="";return e(this,e=>{t+=e}),t}warn(e,t,r){let s={node:this};for(let e in r)s[e]=r[e];return e.warn(t,s)}get proxyOf(){return this}};t.exports=a,a.default=a}),x=u((e,t)=>{var r=b(),s=class extends r{constructor(e){e&&"u">typeof e.value&&"string"!=typeof e.value&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||"$"===this.prop[0]}};t.exports=s,s.default=s}),k=u((e,t)=>{var r=b(),s=class extends r{constructor(e){super(e),this.type="comment"}};t.exports=s,s.default=s}),O=u((e,t)=>{var r,s,n,o,{isClean:i,my:a}=d(),l=x(),u=k(),c=b(),p=class e extends c{append(...e){for(let t of e)for(let e of this.normalize(t,this.last))this.proxyOf.nodes.push(e);return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let t of this.nodes)t.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let t=this.getIterator(),r,s;for(;this.indexes[t]<this.proxyOf.nodes.length&&(r=this.indexes[t],!1!==(s=e(this.proxyOf.nodes[r],r)));)this.indexes[t]+=1;return delete this.indexes[t],s}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get:(e,t)=>"proxyOf"===t?e:e[t]?"each"===t||"string"==typeof t&&t.startsWith("walk")?(...r)=>e[t](...r.map(e=>"function"==typeof e?(t,r)=>e(t.toProxy(),r):e)):"every"===t||"some"===t?r=>e[t]((e,...t)=>r(e.toProxy(),...t)):"root"===t?()=>e.root().toProxy():"nodes"===t?e.nodes.map(e=>e.toProxy()):"first"===t||"last"===t?e[t].toProxy():e[t]:e[t],set:(e,t,r)=>(e[t]===r||(e[t]=r,("name"===t||"params"===t||"selector"===t)&&e.markDirty()),!0)}}index(e){return"number"==typeof e?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,t){let r,s=this.index(e),n=this.normalize(t,this.proxyOf.nodes[s]).reverse();for(let t of(s=this.index(e),n))this.proxyOf.nodes.splice(s+1,0,t);for(let e in this.indexes)s<(r=this.indexes[e])&&(this.indexes[e]=r+n.length);return this.markDirty(),this}insertBefore(e,t){let r,s=this.index(e),n=0===s&&"prepend",o=this.normalize(t,this.proxyOf.nodes[s],n).reverse();for(let t of(s=this.index(e),o))this.proxyOf.nodes.splice(s,0,t);for(let e in this.indexes)s<=(r=this.indexes[e])&&(this.indexes[e]=r+o.length);return this.markDirty(),this}normalize(t,o){if("string"==typeof t)t=function e(t){return t.map(t=>(t.nodes&&(t.nodes=e(t.nodes)),delete t.source,t))}(r(t).nodes);else if(Array.isArray(t))for(let e of t=t.slice(0))e.parent&&e.parent.removeChild(e,"ignore");else if("root"===t.type&&"document"!==this.type)for(let e of t=t.nodes.slice(0))e.parent&&e.parent.removeChild(e,"ignore");else if(t.type)t=[t];else if(t.prop){if(typeof t.value>"u")throw Error("Value field is missed in node creation");"string"!=typeof t.value&&(t.value=String(t.value)),t=[new l(t)]}else if(t.selector)t=[new s(t)];else if(t.name)t=[new n(t)];else if(t.text)t=[new u(t)];else throw Error("Unknown node type in node creation");return t.map(t=>(t[a]||e.rebuild(t),(t=t.proxyOf).parent&&t.parent.removeChild(t),t[i]&&function e(t){if(t[i]=!1,t.proxyOf.nodes)for(let r of t.proxyOf.nodes)e(r)}(t),typeof t.raws.before>"u"&&o&&"u">typeof o.raws.before&&(t.raws.before=o.raws.before.replace(/\S/g,"")),t.parent=this.proxyOf,t))}prepend(...e){for(let t of e=e.reverse()){let e=this.normalize(t,this.first,"prepend").reverse();for(let t of e)this.proxyOf.nodes.unshift(t);for(let t in this.indexes)this.indexes[t]=this.indexes[t]+e.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){let t;for(let r in e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1),this.indexes)(t=this.indexes[r])>=e&&(this.indexes[r]=t-1);return this.markDirty(),this}replaceValues(e,t,r){return r||(r=t,t={}),this.walkDecls(s=>{t.props&&!t.props.includes(s.prop)||t.fast&&!s.value.includes(t.fast)||(s.value=s.value.replace(e,r))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((t,r)=>{let s;try{s=e(t,r)}catch(e){throw t.addToError(e)}return!1!==s&&t.walk&&(s=t.walk(e)),s})}walkAtRules(e,t){return t?e instanceof RegExp?this.walk((r,s)=>{if("atrule"===r.type&&e.test(r.name))return t(r,s)}):this.walk((r,s)=>{if("atrule"===r.type&&r.name===e)return t(r,s)}):(t=e,this.walk((e,r)=>{if("atrule"===e.type)return t(e,r)}))}walkComments(e){return this.walk((t,r)=>{if("comment"===t.type)return e(t,r)})}walkDecls(e,t){return t?e instanceof RegExp?this.walk((r,s)=>{if("decl"===r.type&&e.test(r.prop))return t(r,s)}):this.walk((r,s)=>{if("decl"===r.type&&r.prop===e)return t(r,s)}):(t=e,this.walk((e,r)=>{if("decl"===e.type)return t(e,r)}))}walkRules(e,t){return t?e instanceof RegExp?this.walk((r,s)=>{if("rule"===r.type&&e.test(r.selector))return t(r,s)}):this.walk((r,s)=>{if("rule"===r.type&&r.selector===e)return t(r,s)}):(t=e,this.walk((e,r)=>{if("rule"===e.type)return t(e,r)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};p.registerParse=e=>{r=e},p.registerRule=e=>{s=e},p.registerAtRule=e=>{n=e},p.registerRoot=e=>{o=e},t.exports=p,p.default=p,p.rebuild=e=>{"atrule"===e.type?Object.setPrototypeOf(e,n.prototype):"rule"===e.type?Object.setPrototypeOf(e,s.prototype):"decl"===e.type?Object.setPrototypeOf(e,l.prototype):"comment"===e.type?Object.setPrototypeOf(e,u.prototype):"root"===e.type&&Object.setPrototypeOf(e,o.prototype),e[a]=!0,e.nodes&&e.nodes.forEach(e=>{p.rebuild(e)})}}),T=u((e,t)=>{var r=/[\t\n\f\r "#'()/;[\\\]{}]/g,s=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,n=/.[\r\n"'(/\\]/,o=/[\da-f]/i;t.exports=function(e,t={}){let i=e.css.valueOf(),a=t.ignoreErrors,l,u,c,p,h,f,d,m,y,g,v=i.length,w=0,b=[],x=[];function k(t){throw e.error("Unclosed "+t,w)}return{back:function(e){x.push(e)},endOfFile:function(){return 0===x.length&&w>=v},nextToken:function(e){if(x.length)return x.pop();if(w>=v)return;let t=!!e&&e.ignoreUnclosed;switch(l=i.charCodeAt(w)){case 10:case 32:case 9:case 13:case 12:u=w;do u+=1,l=i.charCodeAt(u);while(32===l||10===l||9===l||13===l||12===l);g=["space",i.slice(w,u)],w=u-1;break;case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let e=String.fromCharCode(l);g=[e,e,w];break}case 40:if(m=b.length?b.pop()[1]:"",y=i.charCodeAt(w+1),"url"===m&&39!==y&&34!==y&&32!==y&&10!==y&&9!==y&&12!==y&&13!==y){u=w;do{if(f=!1,-1===(u=i.indexOf(")",u+1))){if(a||t){u=w;break}k("bracket")}for(d=u;92===i.charCodeAt(d-1);)d-=1,f=!f}while(f);g=["brackets",i.slice(w,u+1),w,u],w=u}else u=i.indexOf(")",w+1),p=i.slice(w,u+1),-1===u||n.test(p)?g=["(","(",w]:(g=["brackets",p,w,u],w=u);break;case 39:case 34:c=39===l?"'":'"',u=w;do{if(f=!1,-1===(u=i.indexOf(c,u+1))){if(a||t){u=w+1;break}k("string")}for(d=u;92===i.charCodeAt(d-1);)d-=1,f=!f}while(f);g=["string",i.slice(w,u+1),w,u],w=u;break;case 64:r.lastIndex=w+1,r.test(i),u=0===r.lastIndex?i.length-1:r.lastIndex-2,g=["at-word",i.slice(w,u+1),w,u],w=u;break;case 92:for(u=w,h=!0;92===i.charCodeAt(u+1);)u+=1,h=!h;if(l=i.charCodeAt(u+1),h&&47!==l&&32!==l&&10!==l&&9!==l&&13!==l&&12!==l&&(u+=1,o.test(i.charAt(u)))){for(;o.test(i.charAt(u+1));)u+=1;32===i.charCodeAt(u+1)&&(u+=1)}g=["word",i.slice(w,u+1),w,u],w=u;break;default:47===l&&42===i.charCodeAt(w+1)?(0===(u=i.indexOf("*/",w+2)+1)&&(a||t?u=i.length:k("comment")),g=["comment",i.slice(w,u+1),w,u]):(s.lastIndex=w+1,s.test(i),u=0===s.lastIndex?i.length-1:s.lastIndex-2,g=["word",i.slice(w,u+1),w,u],b.push(g)),w=u}return w++,g},position:function(){return w}}}}),S=u((e,t)=>{var r=O(),s=class extends r{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};t.exports=s,s.default=s,r.registerAtRule(s)}),C=u((e,t)=>{var r,s,n=O(),o=class extends n{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,t,r){let s=super.normalize(e);if(t){if("prepend"===r)this.nodes.length>1?t.raws.before=this.nodes[1].raws.before:delete t.raws.before;else if(this.first!==t)for(let e of s)e.raws.before=t.raws.before}return s}removeChild(e,t){let r=this.index(e);return!t&&0===r&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[r].raws.before),super.removeChild(e)}toResult(e={}){return new r(new s,this,e).stringify()}};o.registerLazyResult=e=>{r=e},o.registerProcessor=e=>{s=e},t.exports=o,o.default=o,n.registerRoot(o)}),_=u((e,t)=>{var r={comma:e=>r.split(e,[","],!0),space(e){let t=[" ",`
// `,"	"];return r.split(e,t)},split(e,t,r){let s=[],n="",o=!1,i=0,a=!1,l="",u=!1;for(let r of e)u?u=!1:"\\"===r?u=!0:a?r===l&&(a=!1):'"'===r||"'"===r?(a=!0,l=r):"("===r?i+=1:")"===r?i>0&&(i-=1):0===i&&t.includes(r)&&(o=!0),o?(""!==n&&s.push(n.trim()),n="",o=!1):n+=r;return(r||""!==n)&&s.push(n.trim()),s}};t.exports=r,r.default=r}),E=u((e,t)=>{var r=O(),s=_(),n=class extends r{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return s.comma(this.selector)}set selectors(e){let t=this.selector?this.selector.match(/,\s*/):null,r=t?t[0]:","+this.raw("between","beforeOpen");this.selector=e.join(r)}};t.exports=n,n.default=n,r.registerRule(n)}),A=u((e,t)=>{var r=x(),s=T(),n=k(),o=S(),i=C(),a=E(),l={empty:!0,space:!0},u=class{constructor(e){this.input=e,this.root=new i,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let t=new o;t.name=e[1].slice(1),""===t.name&&this.unnamedAtrule(t,e),this.init(t,e[2]);let r,s,n,i=!1,a=!1,l=[],u=[];for(;!this.tokenizer.endOfFile();){if("("===(r=(e=this.tokenizer.nextToken())[0])||"["===r?u.push("("===r?")":"]"):"{"===r&&u.length>0?u.push("}"):r===u[u.length-1]&&u.pop(),0===u.length){if(";"===r){t.source.end=this.getPosition(e[2]),t.source.end.offset++,this.semicolon=!0;break}if("{"===r){a=!0;break}if("}"===r){if(l.length>0){for(n=l.length-1,s=l[n];s&&"space"===s[0];)s=l[--n];s&&(t.source.end=this.getPosition(s[3]||s[2]),t.source.end.offset++)}this.end(e);break}else l.push(e)}else l.push(e);if(this.tokenizer.endOfFile()){i=!0;break}}t.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(t.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(t,"params",l),i&&(e=l[l.length-1],t.source.end=this.getPosition(e[3]||e[2]),t.source.end.offset++,this.spaces=t.raws.between,t.raws.between="")):(t.raws.afterName="",t.params=""),a&&(t.nodes=[],this.current=t)}checkMissedSemicolon(e){let t=this.colon(e);if(!1===t)return;let r=0,s;for(let n=t-1;n>=0&&!("space"!==(s=e[n])[0]&&2===(r+=1));n--);throw this.input.error("Missed semicolon","word"===s[0]?s[3]+1:s[2])}colon(e){let t=0,r,s;for(let[n,o]of e.entries()){if("("===(r=o[0])&&(t+=1),")"===r&&(t-=1),0===t&&":"===r){if(s){if("word"===s[0]&&"progid"===s[1])continue;return n}this.doubleColon(o)}s=o}return!1}comment(e){let t=new n;this.init(t,e[2]),t.source.end=this.getPosition(e[3]||e[2]),t.source.end.offset++;let r=e[1].slice(2,-2);if(/^\s*$/.test(r))t.text="",t.raws.left=r,t.raws.right="";else{let e=r.match(/^(\s*)([^]*\S)(\s*)$/);t.text=e[2],t.raws.left=e[1],t.raws.right=e[3]}}createTokenizer(){this.tokenizer=s(this.input)}decl(e,t){let s,n=new r;this.init(n,e[0][2]);let o=e[e.length-1];for(";"===o[0]&&(this.semicolon=!0,e.pop()),n.source.end=this.getPosition(o[3]||o[2]||function(e){for(let t=e.length-1;t>=0;t--){let r=e[t],s=r[3]||r[2];if(s)return s}}(e)),n.source.end.offset++;"word"!==e[0][0];)1===e.length&&this.unknownWord(e),n.raws.before+=e.shift()[1];for(n.source.start=this.getPosition(e[0][2]),n.prop="";e.length;){let t=e[0][0];if(":"===t||"space"===t||"comment"===t)break;n.prop+=e.shift()[1]}for(n.raws.between="";e.length;)if(":"===(s=e.shift())[0]){n.raws.between+=s[1];break}else"word"===s[0]&&/\w/.test(s[1])&&this.unknownWord([s]),n.raws.between+=s[1];("_"===n.prop[0]||"*"===n.prop[0])&&(n.raws.before+=n.prop[0],n.prop=n.prop.slice(1));let i=[],a;for(;e.length&&!("space"!==(a=e[0][0])&&"comment"!==a);)i.push(e.shift());this.precheckMissedSemicolon(e);for(let t=e.length-1;t>=0;t--){if("!important"===(s=e[t])[1].toLowerCase()){n.important=!0;let r=this.stringFrom(e,t);" !important"!==(r=this.spacesFromEnd(e)+r)&&(n.raws.important=r);break}if("important"===s[1].toLowerCase()){let r=e.slice(0),s="";for(let e=t;e>0;e--){let t=r[e][0];if(0===s.trim().indexOf("!")&&"space"!==t)break;s=r.pop()[1]+s}0===s.trim().indexOf("!")&&(n.important=!0,n.raws.important=s,e=r)}if("space"!==s[0]&&"comment"!==s[0])break}e.some(e=>"space"!==e[0]&&"comment"!==e[0])&&(n.raws.between+=i.map(e=>e[1]).join(""),i=[]),this.raw(n,"value",i.concat(e),t),n.value.includes(":")&&!t&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let t=new a;this.init(t,e[2]),t.selector="",t.raws.between="",this.current=t}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let e=this.current.nodes[this.current.nodes.length-1];e&&"rule"===e.type&&!e.raws.ownSemicolon&&(e.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let t=this.input.fromOffset(e);return{column:t.col,line:t.line,offset:e}}init(e,t){this.current.push(e),e.source={input:this.input,start:this.getPosition(t)},e.raws.before=this.spaces,this.spaces="","comment"!==e.type&&(this.semicolon=!1)}other(e){let t=!1,r=null,s=!1,n=null,o=[],i=e[1].startsWith("--"),a=[],l=e;for(;l;){if(r=l[0],a.push(l),"("===r||"["===r)n||(n=l),o.push("("===r?")":"]");else if(i&&s&&"{"===r)n||(n=l),o.push("}");else if(0===o.length){if(";"===r){if(s){this.decl(a,i);return}break}if("{"===r){this.rule(a);return}if("}"===r){this.tokenizer.back(a.pop()),t=!0;break}else":"===r&&(s=!0)}else r===o[o.length-1]&&(o.pop(),0===o.length&&(n=null));l=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(t=!0),o.length>0&&this.unclosedBracket(n),t&&s){if(!i)for(;a.length&&!("space"!==(l=a[a.length-1][0])&&"comment"!==l);)this.tokenizer.back(a.pop());this.decl(a,i)}else this.unknownWord(a)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch((e=this.tokenizer.nextToken())[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e)}this.endFile()}precheckMissedSemicolon(){}raw(e,t,r,s){let n,o,i=r.length,a="",u=!0,c,p;for(let e=0;e<i;e+=1)"space"!==(o=(n=r[e])[0])||e!==i-1||s?"comment"===o?(p=r[e-1]?r[e-1][0]:"empty",c=r[e+1]?r[e+1][0]:"empty",l[p]||l[c]?u=!1:","===a.slice(-1)?u=!1:a+=n[1]):a+=n[1]:u=!1;if(!u){let s=r.reduce((e,t)=>e+t[1],"");e.raws[t]={raw:s,value:a}}e[t]=a}rule(e){e.pop();let t=new a;this.init(t,e[0][2]),t.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(t,"selector",e),this.current=t}spacesAndCommentsFromEnd(e){let t,r="";for(;e.length&&!("space"!==(t=e[e.length-1][0])&&"comment"!==t);)r=e.pop()[1]+r;return r}spacesAndCommentsFromStart(e){let t,r="";for(;e.length&&!("space"!==(t=e[0][0])&&"comment"!==t);)r+=e.shift()[1];return r}spacesFromEnd(e){let t="";for(;e.length&&"space"===e[e.length-1][0];)t=e.pop()[1]+t;return t}stringFrom(e,t){let r="";for(let s=t;s<e.length;s++)r+=e[s][1];return e.splice(t,e.length-t),r}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,t){throw this.input.error("At-rule without name",{offset:t[2]},{offset:t[2]+t[1].length})}};t.exports=u}),j=u(()=>{}),I=u((e,t)=>{t.exports={nanoid:(e=21)=>{let t="",r=e;for(;r--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return t},customAlphabet:(e,t=21)=>(r=t)=>{let s="",n=r;for(;n--;)s+=e[Math.random()*e.length|0];return s}}}),P=u((e,t)=>{t.exports=class{}}),M=u((e,t)=>{var{SourceMapConsumer:r,SourceMapGenerator:s}=j(),{fileURLToPath:n,pathToFileURL:o}={},{isAbsolute:i,resolve:a}={},{nanoid:l}=I(),u=y(),c=g(),p=P(),h=Symbol("fromOffsetCache"),f=!!(r&&s),d=!!(a&&i),m=class{constructor(e,t={}){if(null===e||typeof e>"u"||"object"==typeof e&&!e.toString)throw Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),"\uFEFF"===this.css[0]||"￾"===this.css[0]?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,t.from&&(!d||/^\w+:\/\//.test(t.from)||i(t.from)?this.file=t.from:this.file=a(t.from)),d&&f){let e=new p(this.css,t);if(e.text){this.map=e;let t=e.consumer().file;!this.file&&t&&(this.file=this.mapResolve(t))}}this.file||(this.id="<input css "+l(6)+">"),this.map&&(this.map.file=this.from)}error(e,t,r,s={}){let n,i,a;if(t&&"object"==typeof t){let e=t,s=r;if("number"==typeof e.offset){let s=this.fromOffset(e.offset);t=s.line,r=s.col}else t=e.line,r=e.column;if("number"==typeof s.offset){let e=this.fromOffset(s.offset);i=e.line,a=e.col}else i=s.line,a=s.column}else if(!r){let e=this.fromOffset(t);t=e.line,r=e.col}let l=this.origin(t,r,i,a);return(n=l?new c(e,void 0===l.endLine?l.line:{column:l.column,line:l.line},void 0===l.endLine?l.column:{column:l.endColumn,line:l.endLine},l.source,l.file,s.plugin):new c(e,void 0===i?t:{column:r,line:t},void 0===i?r:{column:a,line:i},this.css,this.file,s.plugin)).input={column:r,endColumn:a,endLine:i,line:t,source:this.css},this.file&&(o&&(n.input.url=o(this.file).toString()),n.input.file=this.file),n}fromOffset(e){let t,r;if(this[h])r=this[h];else{let e=this.css.split(`
// `);r=Array(e.length);let t=0;for(let s=0,n=e.length;s<n;s++)r[s]=t,t+=e[s].length+1;this[h]=r}t=r[r.length-1];let s=0;if(e>=t)s=r.length-1;else{let t=r.length-2,n;for(;s<t;)if(e<r[n=s+(t-s>>1)])t=n-1;else if(e>=r[n+1])s=n+1;else{s=n;break}}return{col:e-r[s]+1,line:s+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:a(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,t,r,s){let a,l;if(!this.map)return!1;let u=this.map.consumer(),c=u.originalPositionFor({column:t,line:e});if(!c.source)return!1;"number"==typeof r&&(a=u.originalPositionFor({column:s,line:r})),l=i(c.source)?o(c.source):new URL(c.source,this.map.consumer().sourceRoot||o(this.map.mapFile));let p={column:c.column,endColumn:a&&a.column,endLine:a&&a.line,line:c.line,url:l.toString()};if("file:"===l.protocol){if(n)p.file=n(l);else throw Error("file: protocol is not available in this PostCSS build")}let h=u.sourceContentFor(c.source);return h&&(p.source=h),p}toJSON(){let e={};for(let t of["hasBOM","css","file","id"])null!=this[t]&&(e[t]=this[t]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};t.exports=m,m.default=m,u&&u.registerInput&&u.registerInput(m)}),$=u((e,t)=>{var r=O(),s=A(),n=M();function o(e,t){let r=new s(new n(e,t));try{r.parse()}catch(e){throw e}return r.root}t.exports=o,o.default=o,r.registerParse(o)}),R=u((e,t)=>{var r=T(),s=M();t.exports={isInlineComment(e){if("word"===e[0]&&"//"===e[1].slice(0,2)){let t=e,n=[],o,i;for(;e;){if(/\r?\n/.test(e[1])){if(/['"].*\r?\n/.test(e[1])){n.push(e[1].substring(0,e[1].indexOf(`
// `))),i=e[1].substring(e[1].indexOf(`
// `));let t=this.input.css.valueOf().substring(this.tokenizer.position());i+=t,o=e[3]+t.length-i.length}else this.tokenizer.back(e);break}n.push(e[1]),o=e[2],e=this.tokenizer.nextToken({ignoreUnclosed:!0})}let a=["comment",n.join(""),t[2],o];return this.inlineComment(a),i&&(this.input=new s(i),this.tokenizer=r(this.input)),!0}if("/"===e[1]){let r=this.tokenizer.nextToken({ignoreUnclosed:!0});if("comment"===r[0]&&/^\/\*/.test(r[1]))return r[0]="word",r[1]=r[1].slice(1),e[1]="//",this.tokenizer.back(r),t.exports.isInlineComment.bind(this)(e)}return!1}}}),N=u((e,t)=>{t.exports={interpolation(e){let t=[e,this.tokenizer.nextToken()],r=["word","}"];if(t[0][1].length>1||"{"!==t[1][0])return this.tokenizer.back(t[1]),!1;for(e=this.tokenizer.nextToken();e&&r.includes(e[0]);)t.push(e),e=this.tokenizer.nextToken();let s=t.map(e=>e[1]),[n]=t,o=t.pop(),i=["word",s.join(""),n[2],o[2]];return this.tokenizer.back(e),this.tokenizer.back(i),!0}}}),L=u((e,t)=>{var r=/^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/,s=/\.[0-9]/;t.exports={isMixinToken:e=>{let[,t]=e,[n]=t;return("."===n||"#"===n)&&!1===r.test(t)&&!1===s.test(t)}}}),W=u((e,t)=>{var r=T(),s=/^url\((.+)\)/;t.exports=e=>{let{name:t,params:n=""}=e;if("import"===t&&n.length){e.import=!0;let t=r({css:n});for(e.filename=n.replace(s,"$1");!t.endOfFile();){let[r,s]=t.nextToken();if("word"===r&&"url"===s)return;if("brackets"===r){e.options=s,e.filename=n.replace(s,"").trim();break}}}}}),z=u((e,t)=>{var r=/:$/,s=/^:(\s+)?/;t.exports=e=>{let{name:t,params:n=""}=e;if(":"===e.name.slice(-1)){if(r.test(t)){let[s]=t.match(r);e.name=t.replace(s,""),e.raws.afterName=s+(e.raws.afterName||""),e.variable=!0,e.value=e.params}if(s.test(n)){let[t]=n.match(s);e.value=n.replace(t,""),e.raws.afterName=(e.raws.afterName||"")+t,e.variable=!0}}}}),q=u((e,t)=>{var r=k(),s=A(),{isInlineComment:n}=R(),{interpolation:o}=N(),{isMixinToken:i}=L(),a=W(),l=z(),u=/(!\s*important)$/i;t.exports=class extends s{constructor(...e){super(...e),this.lastNode=null}atrule(e){o.bind(this)(e)||(super.atrule(e),a(this.lastNode),l(this.lastNode))}decl(...e){super.decl(...e),/extend\(.+\)/i.test(this.lastNode.value)&&(this.lastNode.extend=!0)}each(e){e[0][1]=` ${e[0][1]}`;let t=e.findIndex(e=>"("===e[0]),r=e.reverse().find(e=>")"===e[0]),s=e.reverse().indexOf(r),n=e.splice(t,s).map(e=>e[1]).join("");for(let t of e.reverse())this.tokenizer.back(t);this.atrule(this.tokenizer.nextToken()),this.lastNode.function=!0,this.lastNode.params=n}init(e,t,r){super.init(e,t,r),this.lastNode=e}inlineComment(e){let t=new r,s=e[1].slice(2);if(this.init(t,e[2]),t.source.end=this.getPosition(e[3]||e[2]),t.inline=!0,t.raws.begin="//",/^\s*$/.test(s))t.text="",t.raws.left=s,t.raws.right="";else{let e=s.match(/^(\s*)([^]*[^\s])(\s*)$/);[,t.raws.left,t.text,t.raws.right]=e}}mixin(e){let[t]=e,r=t[1].slice(0,1),s=e.findIndex(e=>"brackets"===e[0]),n=e.findIndex(e=>"("===e[0]),o="";if((s<0||s>3)&&n>0){let t=e.reduce((e,t,r)=>")"===t[0]?r:e),r=e.slice(n,t+n).map(e=>e[1]).join(""),[s]=e.slice(n),o=[s[2],s[3]],[i]=e.slice(t,t+1),a=["brackets",r].concat(o,[i[2],i[3]]),l=e.slice(0,n),u=e.slice(t+1);(e=l).push(a),e=e.concat(u)}let i=[];for(let t of e)if(("!"===t[1]||i.length)&&i.push(t),"important"===t[1])break;if(i.length){let[t]=i,r=e.indexOf(t),s=i[i.length-1],n=[t[2],t[3]],o=[s[4],s[5]],a=["word",i.map(e=>e[1]).join("")].concat(n,o);e.splice(r,i.length,a)}let a=e.findIndex(e=>u.test(e[1]));for(let t of(a>0&&([,o]=e[a],e.splice(a,1)),e.reverse()))this.tokenizer.back(t);this.atrule(this.tokenizer.nextToken()),this.lastNode.mixin=!0,this.lastNode.raws.identifier=r,o&&(this.lastNode.important=!0,this.lastNode.raws.important=o)}other(e){n.bind(this)(e)||super.other(e)}rule(e){let t=e[e.length-1],r=e[e.length-2];if("at-word"===r[0]&&"{"===t[0]&&(this.tokenizer.back(t),o.bind(this)(r))){let t=this.tokenizer.nextToken();for(let r of(e=e.slice(0,e.length-2).concat([t])).reverse())this.tokenizer.back(r);return}super.rule(e),/:extend\(.+\)/i.test(this.lastNode.selector)&&(this.lastNode.extend=!0)}unknownWord(e){let[t]=e;if("each"===e[0][1]&&"("===e[1][0]){this.each(e);return}if(i(t)){this.mixin(e);return}super.unknownWord(e)}}}),D=u((e,t)=>{var r=v();t.exports=class extends r{atrule(e,t){if(!e.mixin&&!e.variable&&!e.function){super.atrule(e,t);return}let r=`${e.function?"":e.raws.identifier||"@"}${e.name}`,s=e.params?this.rawValue(e,"params"):"",n=e.raws.important||"";if(e.variable&&(s=e.value),"u">typeof e.raws.afterName?r+=e.raws.afterName:s&&(r+=" "),e.nodes)this.block(e,r+s+n);else{let o=(e.raws.between||"")+n+(t?";":"");this.builder(r+s+o,e)}}comment(e){if(e.inline){let t=this.raw(e,"left","commentLeft"),r=this.raw(e,"right","commentRight");this.builder(`//${t}${e.text}${r}`,e)}else super.comment(e)}}}),B=u((e,t)=>{var r=M(),s=q(),n=D();t.exports={parse(e,t){let n=new r(e,t),o=new s(n);return o.parse(),o.root.walk(e=>{let t=n.css.lastIndexOf(e.source.input.css);if(0===t)return;if(t+e.source.input.css.length!==n.css.length)throw Error("Invalid state detected in postcss-less");let r=t+e.source.start.offset,s=n.fromOffset(t+e.source.start.offset);if(e.source.start={offset:r,line:s.line,column:s.col},e.source.end){let r=t+e.source.end.offset,s=n.fromOffset(t+e.source.end.offset);e.source.end={offset:r,line:s.line,column:s.col}}}),o.root},stringify(e,t){new n(t).stringify(e)},nodeToString(e){let r="";return t.exports.stringify(e,e=>{r+=e}),r}}}),F=u((e,t)=>{t.exports=class{generate(){}}}),U=u((e,t)=>{var r,s,n=O(),o=class extends n{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new r(new s,this,e).stringify()}};o.registerLazyResult=e=>{r=e},o.registerProcessor=e=>{s=e},t.exports=o,o.default=o}),V=u((e,t)=>{var r={};t.exports=function(e){r[e]||(r[e]=!0,"u">typeof console&&console.warn&&console.warn(e))}}),G=u((e,t)=>{var r=class{constructor(e,t={}){if(this.type="warning",this.text=e,t.node&&t.node.source){let e=t.node.rangeBy(t);this.line=e.start.line,this.column=e.start.column,this.endLine=e.end.line,this.endColumn=e.end.column}for(let e in t)this[e]=t[e]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};t.exports=r,r.default=r}),J=u((e,t)=>{var r=G(),s=class{constructor(e,t,r){this.processor=e,this.messages=[],this.root=t,this.opts=r,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,t={}){t.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(t.plugin=this.lastPlugin.postcssPlugin);let s=new r(e,t);return this.messages.push(s),s}warnings(){return this.messages.filter(e=>"warning"===e.type)}get content(){return this.css}};t.exports=s,s.default=s}),H=u((e,t)=>{var{isClean:r,my:s}=d(),n=F(),o=w(),i=O(),a=U(),l=(V(),J()),u=$(),c=C(),p={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},h={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},f={Once:!0,postcssPlugin:!0,prepare:!0};function m(e){return"object"==typeof e&&"function"==typeof e.then}function y(e){let t=!1,r=p[e.type];return"decl"===e.type?t=e.prop.toLowerCase():"atrule"===e.type&&(t=e.name.toLowerCase()),t&&e.append?[r,r+"-"+t,0,r+"Exit",r+"Exit-"+t]:t?[r,r+"-"+t,r+"Exit",r+"Exit-"+t]:e.append?[r,0,r+"Exit"]:[r,r+"Exit"]}function g(e){return{eventIndex:0,events:"document"===e.type?["Document",0,"DocumentExit"]:"root"===e.type?["Root",0,"RootExit"]:y(e),iterator:0,node:e,visitorIndex:0,visitors:[]}}function v(e){return e[r]=!1,e.nodes&&e.nodes.forEach(e=>v(e)),e}var b={},x=class e{constructor(t,r,n){let o;if(this.stringified=!1,this.processed=!1,"object"==typeof r&&null!==r&&("root"===r.type||"document"===r.type))o=v(r);else if(r instanceof e||r instanceof l)o=v(r.root),r.map&&(typeof n.map>"u"&&(n.map={}),n.map.inline||(n.map.inline=!1),n.map.prev=r.map);else{let e=u;n.syntax&&(e=n.syntax.parse),n.parser&&(e=n.parser),e.parse&&(e=e.parse);try{o=e(r,n)}catch(e){this.processed=!0,this.error=e}o&&!o[s]&&i.rebuild(o)}this.result=new l(t,o,n),this.helpers={...b,postcss:b,result:this.result},this.plugins=this.processor.plugins.map(e=>"object"==typeof e&&e.prepare?{...e,...e.prepare(this.result)}:e)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw Error("Use process(css).then(cb) to work with async plugins")}handleError(e,t){let r=this.result.lastPlugin;try{t&&t.addToError(e),this.error=e,"CssSyntaxError"!==e.name||e.plugin?r.postcssVersion:(e.plugin=r.postcssPlugin,e.setMessage())}catch(e){console&&console.error&&console.error(e)}return e}prepareVisitors(){this.listeners={};let e=(e,t,r)=>{this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push([e,r])};for(let t of this.plugins)if("object"==typeof t)for(let r in t){if(!h[r]&&/^[A-Z]/.test(r))throw Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!f[r]){if("object"==typeof t[r])for(let s in t[r])e(t,"*"===s?r:r+"-"+s.toLowerCase(),t[r][s]);else"function"==typeof t[r]&&e(t,r,t[r])}}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let t=this.plugins[e],r=this.runOnRoot(t);if(m(r))try{await r}catch(e){throw this.handleError(e)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[r];){e[r]=!0;let t=[g(e)];for(;t.length>0;){let e=this.visitTick(t);if(m(e))try{await e}catch(r){let e=t[t.length-1].node;throw this.handleError(r,e)}}}if(this.listeners.OnceExit)for(let[t,r]of this.listeners.OnceExit){this.result.lastPlugin=t;try{if("document"===e.type){let t=e.nodes.map(e=>r(e,this.helpers));await Promise.all(t)}else await r(e,this.helpers)}catch(e){throw this.handleError(e)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if("object"==typeof e&&e.Once){if("document"===this.result.root.type){let t=this.result.root.nodes.map(t=>e.Once(t,this.helpers));return m(t[0])?Promise.all(t):t}return e.Once(this.result.root,this.helpers)}if("function"==typeof e)return e(this.result.root,this.result)}catch(e){throw this.handleError(e)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,t=o;e.syntax&&(t=e.syntax.stringify),e.stringifier&&(t=e.stringifier),t.stringify&&(t=t.stringify);let r=new n(t,this.result.root,this.result.opts).generate();return this.result.css=r[0],this.result.map=r[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins)if(m(this.runOnRoot(e)))throw this.getAsyncError();if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[r];)e[r]=!0,this.walkSync(e);if(this.listeners.OnceExit){if("document"===e.type)for(let t of e.nodes)this.visitSync(this.listeners.OnceExit,t);else this.visitSync(this.listeners.OnceExit,e)}}return this.result}then(e,t){return this.async().then(e,t)}toString(){return this.css}visitSync(e,t){for(let[r,s]of e){let e;this.result.lastPlugin=r;try{e=s(t,this.helpers)}catch(e){throw this.handleError(e,t.proxyOf)}if("root"!==t.type&&"document"!==t.type&&!t.parent)return!0;if(m(e))throw this.getAsyncError()}}visitTick(e){let t=e[e.length-1],{node:s,visitors:n}=t;if("root"!==s.type&&"document"!==s.type&&!s.parent){e.pop();return}if(n.length>0&&t.visitorIndex<n.length){let[e,r]=n[t.visitorIndex];t.visitorIndex+=1,t.visitorIndex===n.length&&(t.visitors=[],t.visitorIndex=0),this.result.lastPlugin=e;try{return r(s.toProxy(),this.helpers)}catch(e){throw this.handleError(e,s)}}if(0!==t.iterator){let n=t.iterator,o;for(;o=s.nodes[s.indexes[n]];)if(s.indexes[n]+=1,!o[r]){o[r]=!0,e.push(g(o));return}t.iterator=0,delete s.indexes[n]}let o=t.events;for(;t.eventIndex<o.length;){let e=o[t.eventIndex];if(t.eventIndex+=1,0===e){s.nodes&&s.nodes.length&&(s[r]=!0,t.iterator=s.getIterator());return}if(this.listeners[e]){t.visitors=this.listeners[e];return}}e.pop()}walkSync(e){for(let t of(e[r]=!0,y(e)))if(0===t)e.nodes&&e.each(e=>{e[r]||this.walkSync(e)});else{let r=this.listeners[t];if(r&&this.visitSync(r,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};x.registerPostcss=e=>{b=e},t.exports=x,x.default=x,c.registerLazyResult(x),a.registerLazyResult(x)}),Q=u((e,t)=>{var r=F(),s=w(),n=(V(),$()),o=J(),i=class{constructor(e,t,n){let i;t=t.toString(),this.stringified=!1,this._processor=e,this._css=t,this._opts=n,this._map=void 0,this.result=new o(this._processor,i,this._opts),this.result.css=t;let a=this;Object.defineProperty(this.result,"root",{get:()=>a.root});let l=new r(s,i,this._opts,t);if(l.isMap()){let[e,t]=l.generate();e&&(this.result.css=e),t&&(this.result.map=t)}else l.clearAnnotation(),this.result.css=l.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,t){return this.async().then(e,t)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){let e;if(this._root)return this._root;try{e=n(this._css,this._opts)}catch(e){this.error=e}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};t.exports=i,i.default=i}),K=u((e,t)=>{var r=Q(),s=H(),n=U(),o=C(),i=class{constructor(e=[]){this.version="8.4.33",this.plugins=this.normalize(e)}normalize(e){let t=[];for(let r of e)if(!0===r.postcss?r=r():r.postcss&&(r=r.postcss),"object"==typeof r&&Array.isArray(r.plugins))t=t.concat(r.plugins);else if("object"==typeof r&&r.postcssPlugin)t.push(r);else if("function"==typeof r)t.push(r);else if(!("object"==typeof r&&(r.parse||r.stringify)))throw Error(r+" is not a PostCSS plugin");return t}process(e,t={}){return this.plugins.length||t.parser||t.stringifier||t.syntax?new s(this,e,t):new r(this,e,t)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};t.exports=i,i.default=i,o.registerProcessor(i),n.registerProcessor(i)}),Z=u((e,t)=>{var r=x(),s=P(),n=k(),o=S(),i=M(),a=C(),l=E();function u(e,t){if(Array.isArray(e))return e.map(e=>u(e));let{inputs:c,...p}=e;if(c)for(let e of(t=[],c)){let r={...e,__proto__:i.prototype};r.map&&(r.map={...r.map,__proto__:s.prototype}),t.push(r)}if(p.nodes&&(p.nodes=e.nodes.map(e=>u(e,t))),p.source){let{inputId:e,...r}=p.source;p.source=r,null!=e&&(p.source.input=t[e])}if("root"===p.type)return new a(p);if("decl"===p.type)return new r(p);if("rule"===p.type)return new l(p);if("comment"===p.type)return new n(p);if("atrule"===p.type)return new o(p);throw Error("Unknown node type: "+e.type)}t.exports=u,u.default=u}),Y=u((e,t)=>{var r=g(),s=x(),n=H(),o=O(),i=K(),a=w(),l=Z(),u=U(),c=G(),p=k(),h=S(),f=J(),d=M(),m=$(),y=_(),v=E(),T=C(),A=b();function j(...e){return 1===e.length&&Array.isArray(e[0])&&(e=e[0]),new i(e)}j.plugin=function(e,t){let r,s=!1;function n(...r){console&&console.warn&&!s&&(s=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
// https://evilmartians.com/chronicles/postcss-8-plugin-migration`));let o=t(...r);return o.postcssPlugin=e,o.postcssVersion=new i().version,o}return Object.defineProperty(n,"postcss",{get:()=>(r||(r=n()),r)}),n.process=function(e,t,r){return j([n(r)]).process(e,t)},n},j.stringify=a,j.parse=m,j.fromJSON=l,j.list=y,j.comment=e=>new p(e),j.atRule=e=>new h(e),j.decl=e=>new s(e),j.rule=e=>new v(e),j.root=e=>new T(e),j.document=e=>new u(e),j.CssSyntaxError=r,j.Declaration=s,j.Container=o,j.Processor=i,j.Document=u,j.Comment=p,j.Warning=c,j.AtRule=h,j.Result=f,j.Input=d,j.Rule=v,j.Root=T,j.Node=A,n.registerPostcss(j),t.exports=j,j.default=j}),X=u((e,t)=>{var{Container:r}=Y(),s=class extends r{constructor(e){super(e),this.type="decl",this.isNested=!0,this.nodes||(this.nodes=[])}};t.exports=s}),ee=u((e,t)=>{var r=/[\t\n\f\r "#'()/;[\\\]{}]/g,s=/[,\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,n=/.[\r\n"'(/\\]/,o=/[\da-f]/i,i=/[\n\f\r]/g;t.exports=function(e,t={}){let a=e.css.valueOf(),l=t.ignoreErrors,u,c,p,h,f,d,m,y,g,v=a.length,w=0,b=[],x=[],k;function O(t){throw e.error("Unclosed "+t,w)}function T(){let e=1,t=!1,r=!1;for(;e>0;)c+=1,a.length<=c&&O("interpolation"),u=a.charCodeAt(c),y=a.charCodeAt(c+1),t?r||u!==t?92===u?r=!r:r&&(r=!1):(t=!1,r=!1):39===u||34===u?t=u:125===u?e-=1:35===u&&123===y&&(e+=1)}return{back:function(e){x.push(e)},endOfFile:function(){return 0===x.length&&w>=v},nextToken:function(e){if(x.length)return x.pop();if(w>=v)return;let t=!!e&&e.ignoreUnclosed;switch(u=a.charCodeAt(w)){case 10:case 32:case 9:case 13:case 12:c=w;do c+=1,u=a.charCodeAt(c);while(32===u||10===u||9===u||13===u||12===u);g=["space",a.slice(w,c)],w=c-1;break;case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let e=String.fromCharCode(u);g=[e,e,w];break}case 44:g=["word",",",w,w+1];break;case 40:if(m=b.length?b.pop()[1]:"",y=a.charCodeAt(w+1),"url"===m&&39!==y&&34!==y){for(k=1,d=!1,c=w+1;c<=a.length-1;){if(92===(y=a.charCodeAt(c)))d=!d;else if(40===y)k+=1;else if(41===y&&0==(k-=1))break;c+=1}g=["brackets",h=a.slice(w,c+1),w,c],w=c}else c=a.indexOf(")",w+1),h=a.slice(w,c+1),-1===c||n.test(h)?g=["(","(",w]:(g=["brackets",h,w,c],w=c);break;case 39:case 34:for(p=u,c=w,d=!1;c<v&&(++c===v&&O("string"),u=a.charCodeAt(c),y=a.charCodeAt(c+1),!(!d&&u===p));)92===u?d=!d:d?d=!1:35===u&&123===y&&T();g=["string",a.slice(w,c+1),w,c],w=c;break;case 64:r.lastIndex=w+1,r.test(a),c=0===r.lastIndex?a.length-1:r.lastIndex-2,g=["at-word",a.slice(w,c+1),w,c],w=c;break;case 92:for(c=w,f=!0;92===a.charCodeAt(c+1);)c+=1,f=!f;if(u=a.charCodeAt(c+1),f&&47!==u&&32!==u&&10!==u&&9!==u&&13!==u&&12!==u&&(c+=1,o.test(a.charAt(c)))){for(;o.test(a.charAt(c+1));)c+=1;32===a.charCodeAt(c+1)&&(c+=1)}g=["word",a.slice(w,c+1),w,c],w=c;break;default:y=a.charCodeAt(w+1),35===u&&123===y?(c=w,T(),g=["word",h=a.slice(w,c+1),w,c]):47===u&&42===y?(0===(c=a.indexOf("*/",w+2)+1)&&(l||t?c=a.length:O("comment")),g=["comment",a.slice(w,c+1),w,c]):47===u&&47===y?(i.lastIndex=w+1,i.test(a),c=0===i.lastIndex?a.length-1:i.lastIndex-2,g=["comment",h=a.slice(w,c+1),w,c,"inline"]):(s.lastIndex=w+1,s.test(a),c=0===s.lastIndex?a.length-1:s.lastIndex-2,g=["word",a.slice(w,c+1),w,c],b.push(g)),w=c}return w++,g},position:function(){return w}}}}),et=u((e,t)=>{var{Comment:r}=Y(),s=A(),n=X(),o=ee(),i=class extends s{atrule(e){let t=e[1],r=e;for(;!this.tokenizer.endOfFile();){let e=this.tokenizer.nextToken();if("word"===e[0]&&e[2]===r[3]+1)t+=e[1],r=e;else{this.tokenizer.back(e);break}}super.atrule(["at-word",t,e[2],r[3]])}comment(e){if("inline"===e[4]){let t=new r;this.init(t,e[2]),t.raws.inline=!0;let s=this.input.fromOffset(e[3]);t.source.end={column:s.col,line:s.line,offset:e[3]+1};let n=e[1].slice(2);if(/^\s*$/.test(n))t.text="",t.raws.left=n,t.raws.right="";else{let e=n.match(/^(\s*)([^]*\S)(\s*)$/),r=e[2].replace(/(\*\/|\/\*)/g,"*//*");t.text=r,t.raws.left=e[1],t.raws.right=e[3],t.raws.text=e[2]}}else super.comment(e)}createTokenizer(){this.tokenizer=o(this.input)}raw(e,t,r,s){if(super.raw(e,t,r,s),e.raws[t]){let s=e.raws[t].raw;e.raws[t].raw=r.reduce((e,t)=>"comment"===t[0]&&"inline"===t[4]?e+"/*"+t[1].slice(2).replace(/(\*\/|\/\*)/g,"*//*")+"*/":e+t[1],""),s!==e.raws[t].raw&&(e.raws[t].scss=s)}}rule(e){let t=!1,r=0,s="";for(let n of e)if(t)"comment"!==n[0]&&"{"!==n[0]&&(s+=n[1]);else{if("space"===n[0]&&n[1].includes(`
// `))break;"("===n[0]?r+=1:")"===n[0]?r-=1:0===r&&":"===n[0]&&(t=!0)}if(!t||""===s.trim()||/^[#:A-Za-z-]/.test(s))super.rule(e);else{let t,r;e.pop();let s=new n;this.init(s,e[0][2]);for(let r=e.length-1;r>=0;r--)if("space"!==e[r][0]){t=e[r];break}if(t[3]){let e=this.input.fromOffset(t[3]);s.source.end={column:e.col,line:e.line,offset:t[3]+1}}else{let e=this.input.fromOffset(t[2]);s.source.end={column:e.col,line:e.line,offset:t[2]+1}}for(;"word"!==e[0][0];)s.raws.before+=e.shift()[1];if(e[0][2]){let t=this.input.fromOffset(e[0][2]);s.source.start={column:t.col,line:t.line,offset:e[0][2]}}for(s.prop="";e.length;){let t=e[0][0];if(":"===t||"space"===t||"comment"===t)break;s.prop+=e.shift()[1]}for(s.raws.between="";e.length;)if(":"===(r=e.shift())[0]){s.raws.between+=r[1];break}else s.raws.between+=r[1];("_"===s.prop[0]||"*"===s.prop[0])&&(s.raws.before+=s.prop[0],s.prop=s.prop.slice(1)),s.raws.between+=this.spacesAndCommentsFromStart(e),this.precheckMissedSemicolon(e);for(let t=e.length-1;t>0;t--){if("!important"===(r=e[t])[1]){s.important=!0;let r=this.stringFrom(e,t);" !important"!==(r=this.spacesFromEnd(e)+r)&&(s.raws.important=r);break}if("important"===r[1]){let r=e.slice(0),n="";for(let e=t;e>0;e--){let t=r[e][0];if(0===n.trim().indexOf("!")&&"space"!==t)break;n=r.pop()[1]+n}0===n.trim().indexOf("!")&&(s.important=!0,s.raws.important=n,e=r)}if("space"!==r[0]&&"comment"!==r[0])break}this.raw(s,"value",e),s.value.includes(":")&&this.checkMissedSemicolon(e),this.current=s}}};t.exports=i}),er=u((e,t)=>{var{Input:r}=Y(),s=et();t.exports=function(e,t){let n=new s(new r(e,t));return n.parse(),n.root}}),es=u(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){this.after=e.after,this.before=e.before,this.type=e.type,this.value=e.value,this.sourceIndex=e.sourceIndex}}),en=u(e=>{Object.defineProperty(e,"__esModule",{value:!0});var t,r=(t=es())&&t.__esModule?t:{default:t};function s(e){var t=this;this.constructor(e),this.nodes=e.nodes,void 0===this.after&&(this.after=this.nodes.length>0?this.nodes[this.nodes.length-1].after:""),void 0===this.before&&(this.before=this.nodes.length>0?this.nodes[0].before:""),void 0===this.sourceIndex&&(this.sourceIndex=this.before.length),this.nodes.forEach(function(e){e.parent=t})}s.prototype=Object.create(r.default.prototype),s.constructor=r.default,s.prototype.walk=function(e,t){for(var r="string"==typeof e||e instanceof RegExp,s=r?t:e,n="string"==typeof e?new RegExp(e):e,o=0;o<this.nodes.length;o++){var i=this.nodes[o];if((!r||n.test(i.type))&&s&&!1===s(i,o,this.nodes)||i.nodes&&!1===i.walk(e,t))return!1}return!0},s.prototype.each=function(){for(var e=arguments.length<=0||void 0===arguments[0]?function(){}:arguments[0],t=0;t<this.nodes.length;t++)if(!1===e(this.nodes[t],t,this.nodes))return!1;return!0},e.default=s}),eo=u(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseMediaFeature=n,e.parseMediaQuery=o,e.parseMediaList=function(e){var s=[],n=0,i=0,a=/^(\s*)url\s*\(/.exec(e);if(null!==a){for(var l=a[0].length,u=1;u>0;){var c=e[l];"("===c&&u++,")"===c&&u--,l++}s.unshift(new t.default({type:"url",value:e.substring(0,l).trim(),sourceIndex:a[1].length,before:a[1],after:/^(\s*)/.exec(e.substring(l))[1]})),n=l}for(var p=n;p<e.length;p++){var h=e[p];if("("===h&&i++,")"===h&&i--,0===i&&","===h){var f=e.substring(n,p),d=/^(\s*)/.exec(f)[1];s.push(new r.default({type:"media-query",value:f.trim(),sourceIndex:n+d.length,nodes:o(f,n),before:d,after:/(\s*)$/.exec(f)[1]})),n=p+1}}var m=e.substring(n),y=/^(\s*)/.exec(m)[1];return s.push(new r.default({type:"media-query",value:m.trim(),sourceIndex:n+y.length,nodes:o(m,n),before:y,after:/(\s*)$/.exec(m)[1]})),s};var t=s(es()),r=s(en());function s(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=[{mode:"normal",character:null}],s=[],n=0,o="",i=null,a=null,l=t,u=e;"("===e[0]&&")"===e[e.length-1]&&(u=e.substring(1,e.length-1),l++);for(var c=0;c<u.length;c++){var p=u[c];if(("'"===p||'"'===p)&&(!0===r[n].isCalculationEnabled?(r.push({mode:"string",isCalculationEnabled:!1,character:p}),n++):"string"===r[n].mode&&r[n].character===p&&"\\"!==u[c-1]&&(r.pop(),n--)),"{"===p?(r.push({mode:"interpolation",isCalculationEnabled:!0}),n++):"}"===p&&(r.pop(),n--),"normal"===r[n].mode&&":"===p){var h=u.substring(c+1);(a={type:"value",before:/^(\s*)/.exec(h)[1],after:/(\s*)$/.exec(h)[1],value:h.trim()}).sourceIndex=a.before.length+c+1+l,i={type:"colon",sourceIndex:c+l,after:a.before,value:":"};break}o+=p}return(o={type:"media-feature",before:/^(\s*)/.exec(o)[1],after:/(\s*)$/.exec(o)[1],value:o.trim()}).sourceIndex=o.before.length+l,s.push(o),null!==i&&(i.before=o.after,s.push(i)),null!==a&&s.push(a),s}function o(e){var s=arguments.length<=1||void 0===arguments[1]?0:arguments[1],o=[],i=0,a=!1,l=void 0;function u(){return{before:"",after:"",value:""}}l=u();for(var c=0;c<e.length;c++){var p=e[c];a?(l.value+=p,("{"===p||"("===p)&&i++,(")"===p||"}"===p)&&i--):-1!==p.search(/\s/)?l.before+=p:("("===p&&(l.type="media-feature-expression",i++),l.value=p,l.sourceIndex=s+c,a=!0),a&&0===i&&(")"===p||c===e.length-1||-1!==e[c+1].search(/\s/))&&(-1!==["not","only","and"].indexOf(l.value)&&(l.type="keyword"),"media-feature-expression"===l.type&&(l.nodes=n(l.value,l.sourceIndex)),o.push(Array.isArray(l.nodes)?new r.default(l):new t.default(l)),l=u(),a=!1)}for(var h=0;h<o.length;h++)if(l=o[h],h>0&&(o[h-1].after=l.before),void 0===l.type){if(h>0){if("media-feature-expression"===o[h-1].type){l.type="keyword";continue}if("not"===o[h-1].value||"only"===o[h-1].value){l.type="media-type";continue}if("and"===o[h-1].value){l.type="media-feature-expression";continue}"media-type"===o[h-1].type&&(o[h+1]?l.type="media-feature-expression"===o[h+1].type?"keyword":"media-feature-expression":l.type="media-feature-expression")}if(0===h){if(!o[h+1]||o[h+1]&&("media-feature-expression"===o[h+1].type||"keyword"===o[h+1].type)){l.type="media-type";continue}if(o[h+2]){if("media-feature-expression"===o[h+2].type){l.type="media-type",o[h+1].type="keyword";continue}if("keyword"===o[h+2].type){l.type="keyword",o[h+1].type="media-type";continue}}if(o[h+3]&&"media-feature-expression"===o[h+3].type){l.type="keyword",o[h+1].type="media-type",o[h+2].type="keyword";continue}}}return o}}),ei=u(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return new r.default({nodes:(0,s.parseMediaList)(e),type:"media-query-list",value:e.trim()})};var t,r=(t=en())&&t.__esModule?t:{default:t},s=eo()}),ea=u((e,t)=>{t.exports=function(e,t){return(t="number"==typeof t?t:1/0)?function e(r,s){return r.reduce(function(r,n){return Array.isArray(n)&&s<t?r.concat(e(n,s+1)):r.concat(n)},[])}(e,1):Array.isArray(e)?e.map(function(e){return e}):e}}),el=u((e,t)=>{t.exports=function(e,t){for(var r=-1,s=[];-1!==(r=e.indexOf(t,r+1));)s.push(r);return s}}),eu=u((e,t)=>{t.exports=function(e,t,r){return 0===e.length?e:t?(r||e.sort(t),function(e,t){for(var r=1,s=e.length,n=e[0],o=e[0],i=1;i<s;++i)if(o=n,t(n=e[i],o)){if(i===r){r++;continue}e[r++]=n}return e.length=r,e}(e,t)):(r||e.sort(),function(e){for(var t=1,r=e.length,s=e[0],n=e[0],o=1;o<r;++o,n=s)if(n=s,(s=e[o])!==n){if(o===t){t++;continue}e[t++]=s}return e.length=t,e}(e))}}),ec=u((e,t)=>{e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function e(t,s){if((typeof t>"u"?"undefined":r(t))!=="object")return t;var n=new t.constructor;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o],a=typeof i>"u"?"undefined":r(i);"parent"===o&&"object"===a?s&&(n[o]=s):i instanceof Array?n[o]=i.map(function(t){return e(t,n)}):n[o]=e(i,n)}return n},n=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var r in!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),t)this[r]=t[r];var s=t.spaces,n=(s=void 0===s?{}:s).before,o=s.after;this.spaces={before:void 0===n?"":n,after:void 0===o?"":o}}return e.prototype.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.prototype.replaceWith=function(){if(this.parent){for(var e in arguments)this.parent.insertBefore(this,arguments[e]);this.remove()}return this},e.prototype.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prototype.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.prototype.clone=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(this);for(var r in e)t[r]=e[r];return t},e.prototype.toString=function(){return[this.spaces.before,String(this.value),this.spaces.after].join("")},e}();e.default=n,t.exports=e.default}),ep=u(e=>{e.__esModule=!0,e.TAG="tag",e.STRING="string",e.SELECTOR="selector",e.ROOT="root",e.PSEUDO="pseudo",e.NESTING="nesting",e.ID="id",e.COMMENT="comment",e.COMBINATOR="combinator",e.CLASS="class",e.ATTRIBUTE="attribute",e.UNIVERSAL="universal"}),eh=u((e,t)=>{e.__esModule=!0;var r,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),n=(r=ec())&&r.__esModule?r:{default:r},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(ep()),i=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.nodes||(s.nodes=[]),s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.append=function(e){return e.parent=this,this.nodes.push(e),this},t.prototype.prepend=function(e){return e.parent=this,this.nodes.unshift(e),this},t.prototype.at=function(e){return this.nodes[e]},t.prototype.index=function(e){return"number"==typeof e?e:this.nodes.indexOf(e)},t.prototype.removeChild=function(e){e=this.index(e),this.at(e).parent=void 0,this.nodes.splice(e,1);var t=void 0;for(var r in this.indexes)(t=this.indexes[r])>=e&&(this.indexes[r]=t-1);return this},t.prototype.removeAll=function(){for(var e,t=this.nodes,r=Array.isArray(t),s=0,t=r?t:t[Symbol.iterator]();;){if(r){if(s>=t.length)break;e=t[s++]}else{if((s=t.next()).done)break;e=s.value}e.parent=void 0}return this.nodes=[],this},t.prototype.empty=function(){return this.removeAll()},t.prototype.insertAfter=function(e,t){var r=this.index(e);this.nodes.splice(r+1,0,t);var s=void 0;for(var n in this.indexes)r<=(s=this.indexes[n])&&(this.indexes[n]=s+this.nodes.length);return this},t.prototype.insertBefore=function(e,t){var r=this.index(e);this.nodes.splice(r,0,t);var s=void 0;for(var n in this.indexes)r<=(s=this.indexes[n])&&(this.indexes[n]=s+this.nodes.length);return this},t.prototype.each=function(e){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var t=this.lastEach;if(this.indexes[t]=0,this.length){for(var r=void 0,s=void 0;this.indexes[t]<this.length&&(r=this.indexes[t],!1!==(s=e(this.at(r),r)));)this.indexes[t]+=1;if(delete this.indexes[t],!1===s)return!1}},t.prototype.walk=function(e){return this.each(function(t,r){var s=e(t,r);if(!1!==s&&t.length&&(s=t.walk(e)),!1===s)return!1})},t.prototype.walkAttributes=function(e){var t=this;return this.walk(function(r){if(r.type===o.ATTRIBUTE)return e.call(t,r)})},t.prototype.walkClasses=function(e){var t=this;return this.walk(function(r){if(r.type===o.CLASS)return e.call(t,r)})},t.prototype.walkCombinators=function(e){var t=this;return this.walk(function(r){if(r.type===o.COMBINATOR)return e.call(t,r)})},t.prototype.walkComments=function(e){var t=this;return this.walk(function(r){if(r.type===o.COMMENT)return e.call(t,r)})},t.prototype.walkIds=function(e){var t=this;return this.walk(function(r){if(r.type===o.ID)return e.call(t,r)})},t.prototype.walkNesting=function(e){var t=this;return this.walk(function(r){if(r.type===o.NESTING)return e.call(t,r)})},t.prototype.walkPseudos=function(e){var t=this;return this.walk(function(r){if(r.type===o.PSEUDO)return e.call(t,r)})},t.prototype.walkTags=function(e){var t=this;return this.walk(function(r){if(r.type===o.TAG)return e.call(t,r)})},t.prototype.walkUniversals=function(e){var t=this;return this.walk(function(r){if(r.type===o.UNIVERSAL)return e.call(t,r)})},t.prototype.split=function(e){var t=this,r=[];return this.reduce(function(s,n,o){var i=e.call(t,n);return r.push(n),i?(s.push(r),r=[]):o===t.length-1&&s.push(r),s},[])},t.prototype.map=function(e){return this.nodes.map(e)},t.prototype.reduce=function(e,t){return this.nodes.reduce(e,t)},t.prototype.every=function(e){return this.nodes.every(e)},t.prototype.some=function(e){return this.nodes.some(e)},t.prototype.filter=function(e){return this.nodes.filter(e)},t.prototype.sort=function(e){return this.nodes.sort(e)},t.prototype.toString=function(){return this.map(String).join("")},s(t,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),t}(n.default);e.default=i,t.exports=e.default}),ef=u((e,t)=>{e.__esModule=!0;var r,s=(r=eh())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.ROOT,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toString=function(){var e=this.reduce(function(e,t){var r=String(t);return r?e+r+",":""},"").slice(0,-1);return this.trailingComma?e+",":e},t}(s.default);e.default=o,t.exports=e.default}),ed=u((e,t)=>{e.__esModule=!0;var r,s=(r=eh())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.SELECTOR,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),em=u((e,t)=>{e.__esModule=!0;var r,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),n=function(e){function t(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toString=function(){return[this.spaces.before,this.ns,String(this.value),this.spaces.after].join("")},s(t,[{key:"ns",get:function(){var e=this.namespace;return e?("string"==typeof e?e:"")+"|":""}}]),t}(((r=ec())&&r.__esModule?r:{default:r}).default);e.default=n,t.exports=e.default}),ey=u((e,t)=>{e.__esModule=!0;var r,s=(r=em())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.CLASS,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toString=function(){return[this.spaces.before,this.ns,"."+this.value,this.spaces.after].join("")},t}(s.default);e.default=o,t.exports=e.default}),eg=u((e,t)=>{e.__esModule=!0;var r,s=(r=ec())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.COMMENT,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),ev=u((e,t)=>{e.__esModule=!0;var r,s=(r=em())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.ID,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toString=function(){return[this.spaces.before,this.ns,"#"+this.value,this.spaces.after].join("")},t}(s.default);e.default=o,t.exports=e.default}),ew=u((e,t)=>{e.__esModule=!0;var r,s=(r=em())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.TAG,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),eb=u((e,t)=>{e.__esModule=!0;var r,s=(r=ec())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.STRING,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),ex=u((e,t)=>{e.__esModule=!0;var r,s=(r=eh())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.PSEUDO,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toString=function(){var e=this.length?"("+this.map(String).join(",")+")":"";return[this.spaces.before,String(this.value),e,this.spaces.after].join("")},t}(s.default);e.default=o,t.exports=e.default}),ek=u((e,t)=>{e.__esModule=!0;var r,s=(r=em())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.ATTRIBUTE,s.raws={},s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toString=function(){var e=[this.spaces.before,"[",this.ns,this.attribute];return this.operator&&e.push(this.operator),this.value&&e.push(this.value),this.raws.insensitive?e.push(this.raws.insensitive):this.insensitive&&e.push(" i"),e.push("]"),e.concat(this.spaces.after).join("")},t}(s.default);e.default=o,t.exports=e.default}),eO=u((e,t)=>{e.__esModule=!0;var r,s=(r=em())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.UNIVERSAL,s.value="*",s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),eT=u((e,t)=>{e.__esModule=!0;var r,s=(r=ec())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.COMBINATOR,s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),eS=u((e,t)=>{e.__esModule=!0;var r,s=(r=ec())&&r.__esModule?r:{default:r},n=ep(),o=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,r));return s.type=n.NESTING,s.value="&",s}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(s.default);e.default=o,t.exports=e.default}),eC=u((e,t)=>{e.__esModule=!0,e.default=function(e){return e.sort(function(e,t){return e-t})},t.exports=e.default}),e_=u((e,t)=>{e.__esModule=!0,e.default=function(e){for(var t=[],n=e.css.valueOf(),o=void 0,i=void 0,a=void 0,l=void 0,u=void 0,c=void 0,p=void 0,h=void 0,f=void 0,d=void 0,m=void 0,y=n.length,g=-1,v=1,w=0,b=function(t,r){if(e.safe)n+=r,i=n.length-1;else throw e.error("Unclosed "+t,v,w-g,w)};w<y;){switch(10===(o=n.charCodeAt(w))&&(g=w,v+=1),o){case 10:case 32:case 9:case 13:case 12:i=w;do i+=1,10===(o=n.charCodeAt(i))&&(g=i,v+=1);while(32===o||10===o||9===o||13===o||12===o);t.push(["space",n.slice(w,i),v,w-g,w]),w=i-1;break;case 43:case 62:case 126:case 124:i=w;do i+=1,o=n.charCodeAt(i);while(43===o||62===o||126===o||124===o);t.push(["combinator",n.slice(w,i),v,w-g,w]),w=i-1;break;case 42:t.push(["*","*",v,w-g,w]);break;case 38:t.push(["&","&",v,w-g,w]);break;case 44:t.push([",",",",v,w-g,w]);break;case 91:t.push(["[","[",v,w-g,w]);break;case 93:t.push(["]","]",v,w-g,w]);break;case 58:t.push([":",":",v,w-g,w]);break;case 59:t.push([";",";",v,w-g,w]);break;case 40:t.push(["(","(",v,w-g,w]);break;case 41:t.push([")",")",v,w-g,w]);break;case 39:case 34:a=39===o?"'":'"',i=w;do for(d=!1,-1===(i=n.indexOf(a,i+1))&&b("quote",a),m=i;92===n.charCodeAt(m-1);)m-=1,d=!d;while(d);t.push(["string",n.slice(w,i+1),v,w-g,v,i-g,w]),w=i;break;case 64:r.lastIndex=w+1,r.test(n),i=0===r.lastIndex?n.length-1:r.lastIndex-2,t.push(["at-word",n.slice(w,i+1),v,w-g,v,i-g,w]),w=i;break;case 92:for(i=w,p=!0;92===n.charCodeAt(i+1);)i+=1,p=!p;o=n.charCodeAt(i+1),p&&47!==o&&32!==o&&10!==o&&9!==o&&13!==o&&12!==o&&(i+=1),t.push(["word",n.slice(w,i+1),v,w-g,v,i-g,w]),w=i;break;default:47===o&&42===n.charCodeAt(w+1)?(0===(i=n.indexOf("*/",w+2)+1)&&b("comment","*/"),(u=(l=(c=n.slice(w,i+1)).split(`
// `)).length-1)>0?(h=v+u,f=i-l[u].length):(h=v,f=g),t.push(["comment",c,v,w-g,h,i-f,w]),g=f,v=h):(s.lastIndex=w+1,s.test(n),i=0===s.lastIndex?n.length-1:s.lastIndex-2,t.push(["word",n.slice(w,i+1),v,w-g,v,i-g,w])),w=i}w++}return t};var r=/[ \n\t\r\{\(\)'"\\;/]/g,s=/[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;t.exports=e.default}),eE=u((e,t)=>{e.__esModule=!0;var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),s=x(ea()),n=x(el()),o=x(eu()),i=x(ef()),a=x(ed()),l=x(ey()),u=x(eg()),c=x(ev()),p=x(ew()),h=x(eb()),f=x(ex()),d=x(ek()),m=x(eO()),y=x(eT()),g=x(eS()),v=x(eC()),w=x(e_()),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(ep());function x(e){return e&&e.__esModule?e:{default:e}}var k=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.input=t,this.lossy=!1===t.options.lossless,this.position=0,this.root=new i.default;var r=new a.default;return this.root.append(r),this.current=r,this.lossy?this.tokens=(0,w.default)({safe:t.safe,css:t.css.trim()}):this.tokens=(0,w.default)(t),this.loop()}return e.prototype.attribute=function(){var e="",t=void 0,r=this.currToken;for(this.position++;this.position<this.tokens.length&&"]"!==this.currToken[0];)e+=this.tokens[this.position][1],this.position++;this.position!==this.tokens.length||~e.indexOf("]")||this.error("Expected a closing square bracket.");var s=e.split(/((?:[*~^$|]?=))([^]*)/),n=s[0].split(/(\|)/g),o={operator:s[1],value:s[2],source:{start:{line:r[2],column:r[3]},end:{line:this.currToken[2],column:this.currToken[3]}},sourceIndex:r[4]};if(n.length>1?(""===n[0]&&(n[0]=!0),o.attribute=this.parseValue(n[2]),o.namespace=this.parseNamespace(n[0])):o.attribute=this.parseValue(s[0]),t=new d.default(o),s[2]){var i=s[2].split(/(\s+i\s*?)$/),a=i[0].trim();t.value=this.lossy?a:i[0],i[1]&&(t.insensitive=!0,this.lossy||(t.raws.insensitive=i[1])),t.quoted="'"===a[0]||'"'===a[0],t.raws.unquoted=t.quoted?a.slice(1,-1):a}this.newNode(t),this.position++},e.prototype.combinator=function(){if("|"===this.currToken[1])return this.namespace();for(var e=new y.default({value:"",source:{start:{line:this.currToken[2],column:this.currToken[3]},end:{line:this.currToken[2],column:this.currToken[3]}},sourceIndex:this.currToken[4]});this.position<this.tokens.length&&this.currToken&&("space"===this.currToken[0]||"combinator"===this.currToken[0]);)this.nextToken&&"combinator"===this.nextToken[0]?(e.spaces.before=this.parseSpace(this.currToken[1]),e.source.start.line=this.nextToken[2],e.source.start.column=this.nextToken[3],e.source.end.column=this.nextToken[3],e.source.end.line=this.nextToken[2],e.sourceIndex=this.nextToken[4]):this.prevToken&&"combinator"===this.prevToken[0]?e.spaces.after=this.parseSpace(this.currToken[1]):"combinator"===this.currToken[0]?e.value=this.currToken[1]:"space"===this.currToken[0]&&(e.value=this.parseSpace(this.currToken[1]," ")),this.position++;return this.newNode(e)},e.prototype.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}var e=new a.default;this.current.parent.append(e),this.current=e,this.position++},e.prototype.comment=function(){var e=new u.default({value:this.currToken[1],source:{start:{line:this.currToken[2],column:this.currToken[3]},end:{line:this.currToken[4],column:this.currToken[5]}},sourceIndex:this.currToken[6]});this.newNode(e),this.position++},e.prototype.error=function(e){throw new this.input.error(e)},e.prototype.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.")},e.prototype.missingParenthesis=function(){return this.error("Expected opening parenthesis.")},e.prototype.missingSquareBracket=function(){return this.error("Expected opening square bracket.")},e.prototype.namespace=function(){var e=this.prevToken&&this.prevToken[1]||!0;return"word"===this.nextToken[0]?(this.position++,this.word(e)):"*"===this.nextToken[0]?(this.position++,this.universal(e)):void 0},e.prototype.nesting=function(){this.newNode(new g.default({value:this.currToken[1],source:{start:{line:this.currToken[2],column:this.currToken[3]},end:{line:this.currToken[2],column:this.currToken[3]}},sourceIndex:this.currToken[4]})),this.position++},e.prototype.parentheses=function(){var e=this.current.last;if(e&&e.type===b.PSEUDO){var t=new a.default,r=this.current;e.append(t),this.current=t;var s=1;for(this.position++;this.position<this.tokens.length&&s;)"("===this.currToken[0]&&s++,")"===this.currToken[0]&&s--,s?this.parse():(t.parent.source.end.line=this.currToken[2],t.parent.source.end.column=this.currToken[3],this.position++);s&&this.error("Expected closing parenthesis."),this.current=r}else{var n=1;for(this.position++,e.value+="(";this.position<this.tokens.length&&n;)"("===this.currToken[0]&&n++,")"===this.currToken[0]&&n--,e.value+=this.parseParenthesisToken(this.currToken),this.position++;n&&this.error("Expected closing parenthesis.")}},e.prototype.pseudo=function(){for(var e=this,t="",r=this.currToken;this.currToken&&":"===this.currToken[0];)t+=this.currToken[1],this.position++;if(!this.currToken)return this.error("Expected pseudo-class or pseudo-element");if("word"===this.currToken[0]){var s=void 0;this.splitWord(!1,function(n,o){t+=n,s=new f.default({value:t,source:{start:{line:r[2],column:r[3]},end:{line:e.currToken[4],column:e.currToken[5]}},sourceIndex:r[4]}),e.newNode(s),o>1&&e.nextToken&&"("===e.nextToken[0]&&e.error("Misplaced parenthesis.")})}else this.error('Unexpected "'+this.currToken[0]+'" found.')},e.prototype.space=function(){var e=this.currToken;0===this.position||","===this.prevToken[0]||"("===this.prevToken[0]?(this.spaces=this.parseSpace(e[1]),this.position++):this.position===this.tokens.length-1||","===this.nextToken[0]||")"===this.nextToken[0]?(this.current.last.spaces.after=this.parseSpace(e[1]),this.position++):this.combinator()},e.prototype.string=function(){var e=this.currToken;this.newNode(new h.default({value:this.currToken[1],source:{start:{line:e[2],column:e[3]},end:{line:e[4],column:e[5]}},sourceIndex:e[6]})),this.position++},e.prototype.universal=function(e){var t=this.nextToken;if(t&&"|"===t[1])return this.position++,this.namespace();this.newNode(new m.default({value:this.currToken[1],source:{start:{line:this.currToken[2],column:this.currToken[3]},end:{line:this.currToken[2],column:this.currToken[3]}},sourceIndex:this.currToken[4]}),e),this.position++},e.prototype.splitWord=function(e,t){for(var r=this,i=this.nextToken,a=this.currToken[1];i&&"word"===i[0];){this.position++;var u=this.currToken[1];if(a+=u,u.lastIndexOf("\\")===u.length-1){var h=this.nextToken;h&&"space"===h[0]&&(a+=this.parseSpace(h[1]," "),this.position++)}i=this.nextToken}var f=(0,n.default)(a,"."),d=(0,n.default)(a,"#"),m=(0,n.default)(a,"#{");m.length&&(d=d.filter(function(e){return!~m.indexOf(e)}));var y=(0,v.default)((0,o.default)((0,s.default)([[0],f,d])));y.forEach(function(s,n){var o=y[n+1]||a.length,i=a.slice(s,o);if(0===n&&t)return t.call(r,i,y.length);var u=void 0;u=~f.indexOf(s)?new l.default({value:i.slice(1),source:{start:{line:r.currToken[2],column:r.currToken[3]+s},end:{line:r.currToken[4],column:r.currToken[3]+(o-1)}},sourceIndex:r.currToken[6]+y[n]}):~d.indexOf(s)?new c.default({value:i.slice(1),source:{start:{line:r.currToken[2],column:r.currToken[3]+s},end:{line:r.currToken[4],column:r.currToken[3]+(o-1)}},sourceIndex:r.currToken[6]+y[n]}):new p.default({value:i,source:{start:{line:r.currToken[2],column:r.currToken[3]+s},end:{line:r.currToken[4],column:r.currToken[3]+(o-1)}},sourceIndex:r.currToken[6]+y[n]}),r.newNode(u,e)}),this.position++},e.prototype.word=function(e){var t=this.nextToken;return t&&"|"===t[1]?(this.position++,this.namespace()):this.splitWord(e)},e.prototype.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.root},e.prototype.parse=function(e){switch(this.currToken[0]){case"space":this.space();break;case"comment":this.comment();break;case"(":this.parentheses();break;case")":e&&this.missingParenthesis();break;case"[":this.attribute();break;case"]":this.missingSquareBracket();break;case"at-word":case"word":this.word();break;case":":this.pseudo();break;case";":this.missingBackslash();break;case",":this.comma();break;case"*":this.universal();break;case"&":this.nesting();break;case"combinator":this.combinator();break;case"string":this.string()}},e.prototype.parseNamespace=function(e){if(this.lossy&&"string"==typeof e){var t=e.trim();return!t.length||t}return e},e.prototype.parseSpace=function(e,t){return this.lossy?t||"":e},e.prototype.parseValue=function(e){return this.lossy&&e&&"string"==typeof e?e.trim():e},e.prototype.parseParenthesisToken=function(e){return this.lossy?"space"===e[0]?this.parseSpace(e[1]," "):this.parseValue(e[1]):e[1]},e.prototype.newNode=function(e,t){return t&&(e.namespace=this.parseNamespace(t)),this.spaces&&(e.spaces.before=this.spaces,this.spaces=""),this.current.append(e)},r(e,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),e}();e.default=k,t.exports=e.default}),eA=u((e,t)=>{e.__esModule=!0;var r,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),n=(r=eE())&&r.__esModule?r:{default:r},o=function(){function e(t){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.func=t||function(){},this}return e.prototype.process=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new n.default({css:e,error:function(e){throw Error(e)},options:t});return this.res=r,this.func(r),this},s(e,[{key:"result",get:function(){return String(this.res)}}]),e}();e.default=o,t.exports=e.default}),ej=u((e,t)=>{var r=function(e,t){let s=new e.constructor;for(let n in e){if(!e.hasOwnProperty(n))continue;let o=e[n],i=typeof o;"parent"===n&&"object"===i?t&&(s[n]=t):"source"===n?s[n]=o:o instanceof Array?s[n]=o.map(e=>r(e,s)):"before"!==n&&"after"!==n&&"between"!==n&&"semicolon"!==n&&("object"===i&&null!==o&&(o=r(o)),s[n]=o)}return s};t.exports=class{constructor(e){for(let t in e=e||{},this.raws={before:"",after:""},e)this[t]=e[t]}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(){return[this.raws.before,String(this.value),this.raws.after].join("")}clone(e){e=e||{};let t=r(this);for(let r in e)t[r]=e[r];return t}cloneBefore(e){e=e||{};let t=this.clone(e);return this.parent.insertBefore(this,t),t}cloneAfter(e){e=e||{};let t=this.clone(e);return this.parent.insertAfter(this,t),t}replaceWith(){let e=Array.prototype.slice.call(arguments);if(this.parent){for(let t of e)this.parent.insertBefore(this,t);this.remove()}return this}moveTo(e){return this.cleanRaws(this.root()===e.root()),this.remove(),e.append(this),this}moveBefore(e){return this.cleanRaws(this.root()===e.root()),this.remove(),e.parent.insertBefore(e,this),this}moveAfter(e){return this.cleanRaws(this.root()===e.root()),this.remove(),e.parent.insertAfter(e,this),this}next(){let e=this.parent.index(this);return this.parent.nodes[e+1]}prev(){let e=this.parent.index(this);return this.parent.nodes[e-1]}toJSON(){let e={};for(let t in this){if(!this.hasOwnProperty(t)||"parent"===t)continue;let r=this[t];r instanceof Array?e[t]=r.map(e=>"object"==typeof e&&e.toJSON?e.toJSON():e):"object"==typeof r&&r.toJSON?e[t]=r.toJSON():e[t]=r}return e}root(){let e=this;for(;e.parent;)e=e.parent;return e}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}positionInside(e){let t=this.toString(),r=this.source.start.column,s=this.source.start.line;for(let n=0;n<e;n++)t[n]===`
// `?(r=1,s+=1):r+=1;return{line:s,column:r}}positionBy(e){let t=this.source.start;if(Object(e).index)t=this.positionInside(e.index);else if(Object(e).word){let r=this.toString().indexOf(e.word);-1!==r&&(t=this.positionInside(r))}return t}}}),eI=u((e,t)=>{var r=ej(),s=class extends r{constructor(e){super(e),this.nodes||(this.nodes=[])}push(e){return e.parent=this,this.nodes.push(e),this}each(e){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let t=this.lastEach,r,s;if(this.indexes[t]=0,this.nodes){for(;this.indexes[t]<this.nodes.length&&(r=this.indexes[t],!1!==(s=e(this.nodes[r],r)));)this.indexes[t]+=1;return delete this.indexes[t],s}}walk(e){return this.each((t,r)=>{let s=e(t,r);return!1!==s&&t.walk&&(s=t.walk(e)),s})}walkType(e,t){if(!e||!t)throw Error("Parameters {type} and {callback} are required.");let r="function"==typeof e;return this.walk((s,n)=>{if(r&&s instanceof e||!r&&s.type===e)return t.call(this,s,n)})}append(e){return e.parent=this,this.nodes.push(e),this}prepend(e){return e.parent=this,this.nodes.unshift(e),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let t of this.nodes)t.cleanRaws(e)}insertAfter(e,t){let r=this.index(e),s;for(let e in this.nodes.splice(r+1,0,t),this.indexes)r<=(s=this.indexes[e])&&(this.indexes[e]=s+this.nodes.length);return this}insertBefore(e,t){let r=this.index(e),s;for(let e in this.nodes.splice(r,0,t),this.indexes)r<=(s=this.indexes[e])&&(this.indexes[e]=s+this.nodes.length);return this}removeChild(e){let t;for(let r in e=this.index(e),this.nodes[e].parent=void 0,this.nodes.splice(e,1),this.indexes)(t=this.indexes[r])>=e&&(this.indexes[r]=t-1);return this}removeAll(){for(let e of this.nodes)e.parent=void 0;return this.nodes=[],this}every(e){return this.nodes.every(e)}some(e){return this.nodes.some(e)}index(e){return"number"==typeof e?e:this.nodes.indexOf(e)}get first(){if(this.nodes)return this.nodes[0]}get last(){if(this.nodes)return this.nodes[this.nodes.length-1]}toString(){let e=this.nodes.map(String).join("");return this.value&&(e=this.value+e),this.raws.before&&(e=this.raws.before+e),this.raws.after&&(e+=this.raws.after),e}};s.registerWalker=e=>{let t="walk"+e.name;t.lastIndexOf("s")!==t.length-1&&(t+="s"),s.prototype[t]||(s.prototype[t]=function(t){return this.walkType(e,t)})},t.exports=s}),eP=u((e,t)=>{var r=eI();t.exports=class extends r{constructor(e){super(e),this.type="root"}}}),eM=u((e,t)=>{var r=eI();t.exports=class extends r{constructor(e){super(e),this.type="value",this.unbalanced=0}}}),e$=u((e,t)=>{var r=eI(),s=class extends r{constructor(e){super(e),this.type="atword"}toString(){return this.quoted&&this.raws.quote,[this.raws.before,"@",String.prototype.toString.call(this.value),this.raws.after].join("")}};r.registerWalker(s),t.exports=s}),eR=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="colon"}};r.registerWalker(n),t.exports=n}),eN=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="comma"}};r.registerWalker(n),t.exports=n}),eL=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="comment",this.inline=Object(e).inline||!1}toString(){return[this.raws.before,this.inline?"//":"/*",String(this.value),this.inline?"":"*/",this.raws.after].join("")}};r.registerWalker(n),t.exports=n}),eW=u((e,t)=>{var r=eI(),s=class extends r{constructor(e){super(e),this.type="func",this.unbalanced=-1}};r.registerWalker(s),t.exports=s}),ez=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="number",this.unit=Object(e).unit||""}toString(){return[this.raws.before,String(this.value),this.unit,this.raws.after].join("")}};r.registerWalker(n),t.exports=n}),eq=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="operator"}};r.registerWalker(n),t.exports=n}),eD=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="paren",this.parenType=""}};r.registerWalker(n),t.exports=n}),eB=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="string"}toString(){let e=this.quoted?this.raws.quote:"";return[this.raws.before,e,this.value+"",e,this.raws.after].join("")}};r.registerWalker(n),t.exports=n}),eF=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="word"}};r.registerWalker(n),t.exports=n}),eU=u((e,t)=>{var r=eI(),s=ej(),n=class extends s{constructor(e){super(e),this.type="unicode-range"}};r.registerWalker(n),t.exports=n}),eV=u((e,t)=>{var r=class extends Error{constructor(e){super(e),this.name=this.constructor.name,this.message=e||"An error ocurred while tokzenizing.","function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error(e).stack}};t.exports=r}),eG=u((e,t)=>{var r=/[ \n\t\r\{\(\)'"\\;,/]/g,s=/[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g,n=/[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g,o=/^[a-z0-9]/i,i=/^[a-f0-9?\-]/i,a=eV();t.exports=function(e,t){t=t||{};let l=[],u=e.valueOf(),c=u.length,p=-1,h=1,f=0,d=0,m=null,y,g,v,w,b,x,k,O,T,S,C,_;function E(e){throw new a(`Unclosed ${e} at line: ${h}, column: ${f-p}, token: ${f}`)}for(;f<c;){switch(10===(y=u.charCodeAt(f))&&(p=f,h+=1),y){case 10:case 32:case 9:case 13:case 12:g=f;do g+=1,10===(y=u.charCodeAt(g))&&(p=g,h+=1);while(32===y||10===y||9===y||13===y||12===y);l.push(["space",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1;break;case 58:g=f+1,l.push(["colon",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1;break;case 44:g=f+1,l.push(["comma",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1;break;case 123:l.push(["{","{",h,f-p,h,g-p,f]);break;case 125:l.push(["}","}",h,f-p,h,g-p,f]);break;case 40:d++,m=!m&&1===d&&l.length>0&&"word"===l[l.length-1][0]&&"url"===l[l.length-1][1],l.push(["(","(",h,f-p,h,g-p,f]);break;case 41:d--,m=m&&d>0,l.push([")",")",h,f-p,h,g-p,f]);break;case 39:case 34:v=39===y?"'":'"',g=f;do for(S=!1,-1===(g=u.indexOf(v,g+1))&&E("quote",v),C=g;92===u.charCodeAt(C-1);)C-=1,S=!S;while(S);l.push(["string",u.slice(f,g+1),h,f-p,h,g-p,f]),f=g;break;case 64:r.lastIndex=f+1,r.test(u),g=0===r.lastIndex?u.length-1:r.lastIndex-2,l.push(["atword",u.slice(f,g+1),h,f-p,h,g-p,f]),f=g;break;case 92:g=f,y=u.charCodeAt(g+1),k&&47!==y&&32!==y&&10!==y&&9!==y&&13!==y&&12!==y&&(g+=1),l.push(["word",u.slice(f,g+1),h,f-p,h,g-p,f]),f=g;break;case 43:case 45:case 42:if(g=f+1,_=u.slice(f+1,g+1),u.slice(f-1,f),45===y&&45===_.charCodeAt(0)){g++,l.push(["word",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1;break}l.push(["operator",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1;break;default:if(47===y&&(42===u.charCodeAt(f+1)||t.loose&&!m&&47===u.charCodeAt(f+1))){if(42===u.charCodeAt(f+1))0===(g=u.indexOf("*/",f+2)+1)&&E("comment","*/");else{let e=u.indexOf(`
// `,f+2);g=-1!==e?e-1:c}(b=(w=(x=u.slice(f,g+1)).split(`
// `)).length-1)>0?(O=h+b,T=g-w[b].length):(O=h,T=p),l.push(["comment",x,h,f-p,O,g-T,f]),p=T,h=O,f=g}else if(35!==y||o.test(u.slice(f+1,f+2))){if((117===y||85===y)&&43===u.charCodeAt(f+1)){g=f+2;do g+=1,y=u.charCodeAt(g);while(g<c&&i.test(u.slice(g,g+1)));l.push(["unicoderange",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1}else if(47===y)g=f+1,l.push(["operator",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1;else{let e=s;if(y>=48&&y<=57&&(e=n),e.lastIndex=f+1,e.test(u),g=0===e.lastIndex?u.length-1:e.lastIndex-2,e===n||46===y){let e=u.charCodeAt(g),t=u.charCodeAt(g+1),r=u.charCodeAt(g+2);(101===e||69===e)&&(45===t||43===t)&&r>=48&&r<=57&&(n.lastIndex=g+2,n.test(u),g=0===n.lastIndex?u.length-1:n.lastIndex-2)}l.push(["word",u.slice(f,g+1),h,f-p,h,g-p,f]),f=g}}else g=f+1,l.push(["#",u.slice(f,g),h,f-p,h,g-p,f]),f=g-1}f++}return l}}),eJ=u((e,t)=>{var r=class extends Error{constructor(e){super(e),this.name=this.constructor.name,this.message=e||"An error ocurred while parsing.","function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error(e).stack}};t.exports=r}),eH=u((e,t)=>{var r=eP(),s=eM(),n=e$(),o=eR(),i=eN(),a=eL(),l=eW(),u=ez(),c=eq(),p=eD(),h=eB(),f=eF(),d=eU(),m=eG(),y=ea(),g=el(),v=eu(),w=eJ();t.exports=class{constructor(e,t){this.cache=[],this.input=e,this.options=Object.assign({},{loose:!1},t),this.position=0,this.unbalanced=0,this.root=new r;let n=new s;this.root.append(n),this.current=n,this.tokens=m(e,this.options)}parse(){return this.loop()}colon(){let e=this.currToken;this.newNode(new o({value:e[1],source:{start:{line:e[2],column:e[3]},end:{line:e[4],column:e[5]}},sourceIndex:e[6]})),this.position++}comma(){let e=this.currToken;this.newNode(new i({value:e[1],source:{start:{line:e[2],column:e[3]},end:{line:e[4],column:e[5]}},sourceIndex:e[6]})),this.position++}comment(){let e=!1,t=this.currToken[1].replace(/\/\*|\*\//g,""),r;this.options.loose&&t.startsWith("//")&&(t=t.substring(2),e=!0),r=new a({value:t,inline:e,source:{start:{line:this.currToken[2],column:this.currToken[3]},end:{line:this.currToken[4],column:this.currToken[5]}},sourceIndex:this.currToken[6]}),this.newNode(r),this.position++}error(e,t){throw new w(e+` at line: ${t[2]}, column ${t[3]}`)}loop(){for(;this.position<this.tokens.length;)this.parseTokens();return!this.current.last&&this.spaces?this.current.raws.before+=this.spaces:this.spaces&&(this.current.last.raws.after+=this.spaces),this.spaces="",this.root}operator(){let e=this.currToken[1],t;if("+"===e||"-"===e){if(this.options.loose||this.position>0&&("func"===this.current.type&&"calc"===this.current.value?"space"!==this.prevToken[0]&&"("!==this.prevToken[0]?this.error("Syntax Error",this.currToken):"space"!==this.nextToken[0]&&"word"!==this.nextToken[0]?this.error("Syntax Error",this.currToken):"word"===this.nextToken[0]&&"operator"!==this.current.last.type&&"("!==this.current.last.value&&this.error("Syntax Error",this.currToken):("space"===this.nextToken[0]||"operator"===this.nextToken[0]||"operator"===this.prevToken[0])&&this.error("Syntax Error",this.currToken)),this.options.loose){if((!this.current.nodes.length||this.current.last&&"operator"===this.current.last.type)&&"word"===this.nextToken[0])return this.word()}else if("word"===this.nextToken[0])return this.word()}return t=new c({value:this.currToken[1],source:{start:{line:this.currToken[2],column:this.currToken[3]},end:{line:this.currToken[2],column:this.currToken[3]}},sourceIndex:this.currToken[4]}),this.position++,this.newNode(t)}parseTokens(){switch(this.currToken[0]){case"space":this.space();break;case"colon":this.colon();break;case"comma":this.comma();break;case"comment":this.comment();break;case"(":this.parenOpen();break;case")":this.parenClose();break;case"atword":case"word":default:this.word();break;case"operator":this.operator();break;case"string":this.string();break;case"unicoderange":this.unicodeRange()}}parenOpen(){let e=1,t=this.position+1,r=this.currToken,s;for(;t<this.tokens.length&&e;){let r=this.tokens[t];"("===r[0]&&e++,")"===r[0]&&e--,t++}if(e&&this.error("Expected closing parenthesis",r),(s=this.current.last)&&"func"===s.type&&s.unbalanced<0&&(s.unbalanced=0,this.current=s),this.current.unbalanced++,this.newNode(new p({value:r[1],source:{start:{line:r[2],column:r[3]},end:{line:r[4],column:r[5]}},sourceIndex:r[6]})),this.position++,"func"===this.current.type&&this.current.unbalanced&&"url"===this.current.value&&"string"!==this.currToken[0]&&")"!==this.currToken[0]&&!this.options.loose){let e=this.nextToken,t=this.currToken[1],r={line:this.currToken[2],column:this.currToken[3]};for(;e&&")"!==e[0]&&this.current.unbalanced;)this.position++,t+=this.currToken[1],e=this.nextToken;this.position!==this.tokens.length-1&&(this.position++,this.newNode(new f({value:t,source:{start:r,end:{line:this.currToken[4],column:this.currToken[5]}},sourceIndex:this.currToken[6]})))}}parenClose(){let e=this.currToken;this.newNode(new p({value:e[1],source:{start:{line:e[2],column:e[3]},end:{line:e[4],column:e[5]}},sourceIndex:e[6]})),this.position++,this.position>=this.tokens.length-1&&!this.current.unbalanced||(this.current.unbalanced--,this.current.unbalanced<0&&this.error("Expected opening parenthesis",e),!this.current.unbalanced&&this.cache.length&&(this.current=this.cache.pop()))}space(){let e=this.currToken;this.position===this.tokens.length-1||","===this.nextToken[0]||")"===this.nextToken[0]?this.current.last.raws.after+=e[1]:this.spaces=e[1],this.position++}unicodeRange(){let e=this.currToken;this.newNode(new d({value:e[1],source:{start:{line:e[2],column:e[3]},end:{line:e[4],column:e[5]}},sourceIndex:e[6]})),this.position++}splitWord(){let e=this.nextToken,t=this.currToken[1],r=/^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/,s,o;if(!/^(?!\#([a-z0-9]+))[\#\{\}]/gi.test(t))for(;e&&"word"===e[0];){this.position++;let r=this.currToken[1];t+=r,e=this.nextToken}(o=v(y([[0],s=g(t,"@")])).sort((e,t)=>e-t)).forEach((i,a)=>{let c=o[a+1]||t.length,p=t.slice(i,c),h;if(~s.indexOf(i))h=new n({value:p.slice(1),source:{start:{line:this.currToken[2],column:this.currToken[3]+i},end:{line:this.currToken[4],column:this.currToken[3]+(c-1)}},sourceIndex:this.currToken[6]+o[a]});else if(r.test(this.currToken[1])){let e=p.replace(r,"");h=new u({value:p.replace(e,""),source:{start:{line:this.currToken[2],column:this.currToken[3]+i},end:{line:this.currToken[4],column:this.currToken[3]+(c-1)}},sourceIndex:this.currToken[6]+o[a],unit:e})}else"word"===(h=new(e&&"("===e[0]?l:f)({value:p,source:{start:{line:this.currToken[2],column:this.currToken[3]+i},end:{line:this.currToken[4],column:this.currToken[3]+(c-1)}},sourceIndex:this.currToken[6]+o[a]})).type?(h.isHex=/^#(.+)/.test(p),h.isColor=/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(p)):this.cache.push(this.current);this.newNode(h)}),this.position++}string(){let e=this.currToken,t=this.currToken[1],r=/^(\"|\')/,s=r.test(t),n="",o;s&&(n=t.match(r)[0],t=t.slice(1,t.length-1)),(o=new h({value:t,source:{start:{line:e[2],column:e[3]},end:{line:e[4],column:e[5]}},sourceIndex:e[6],quoted:s})).raws.quote=n,this.newNode(o),this.position++}word(){return this.splitWord()}newNode(e){return this.spaces&&(e.raws.before+=this.spaces,this.spaces=""),this.current.append(e)}get currToken(){return this.tokens[this.position]}get nextToken(){return this.tokens[this.position+1]}get prevToken(){return this.tokens[this.position-1]}}}),eQ={};c(eQ,{languages:()=>rO,options:()=>rT,parsers:()=>rS,printers:()=>rQ});var eK=(e,t,r,s)=>{if(!(e&&null==t))return t.replaceAll?t.replaceAll(r,s):r.global?t.replace(r,s):t.split(r).join(s)},eZ="string",eY="array",eX="cursor",e1="indent",e0="align",e2="trim",e3="group",e4="fill",e9="if-break",e5="indent-if-break",e6="line-suffix",e7="line-suffix-boundary",e8="line",te="label",tt="break-parent",tr=new Set([eX,e1,e0,e2,e3,e4,e9,e5,e6,e7,e8,te,tt]),ts=function(e){if("string"==typeof e)return eZ;if(Array.isArray(e))return eY;if(!e)return;let{type:t}=e;if(tr.has(t))return t},tn=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e),to=class extends Error{name="InvalidDocError";constructor(e){super(function(e){let t=null===e?"null":typeof e;if("string"!==t&&"object"!==t)return`Unexpected doc '${t}', 
// Expected it to be 'string' or 'object'.`;if(ts(e))throw Error("doc is valid.");let r=Object.prototype.toString.call(e);if("[object Object]"!==r)return`Unexpected doc '${r}'.`;let s=tn([...tr].map(e=>`'${e}'`));return`Unexpected doc.type '${e.type}'.
// Expected it to be ${s}.`}(e)),this.doc=e}},ti=()=>{};function ta(e){return ti(e),{type:e1,contents:e}}function tl(e,t){return ti(t),{type:e0,contents:t,n:e}}function tu(e,t={}){return ti(e),ti(t.expandedStates,!0),{type:e3,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function tc(e){return ti(e),{type:e4,parts:e}}function tp(e,t="",r={}){return ti(e),""!==t&&ti(t),{type:e9,breakContents:e,flatContents:t,groupId:r.groupId}}var th={type:tt},tf={type:e8},td={type:e8,soft:!0},tm=[{type:e8,hard:!0},th];function ty(e,t){ti(e),ti(t);let r=[];for(let s=0;s<t.length;s++)0!==s&&r.push(e),r.push(t[s]);return r}var tg=(e,t,r)=>{if(!(e&&null==t))return Array.isArray(t)||"string"==typeof t?t[r<0?t.length+r:r]:t.at(r)},tv=e=>{if(Array.isArray(e))return e;if(e.type!==e4)throw Error(`Expect doc to be 'array' or '${e4}'.`);return e.parts};function tw(e){return e.type!==e8||e.hard?e.type===e9?e.flatContents:e:e.soft?"":" "}var tb=function(e){return Array.isArray(e)&&e.length>0},tx=function(e,t){let r=!0===t||"'"===t?"'":'"',s="'"===r?'"':"'",n=0,o=0;for(let t of e)t===r?n++:t===s&&o++;return n>o?s:r},tk=function(e,t,r){let s='"'===t?"'":'"',n=eK(!1,e,/\\(.)|(["'])/gs,(e,n,o)=>n===s?n:o===t?"\\"+o:o||(r&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(n)?n:"\\"+n));return t+n+t},tO=function(e,t){let r=e.slice(1,-1),s="json"!==t.parser&&"jsonc"!==t.parser&&("json5"!==t.parser||"preserve"!==t.quoteProps||t.singleQuote)?t.__isInHtmlAttribute?"'":tx(r,t.singleQuote):'"';return tk(r,s,!("css"===t.parser||"less"===t.parser||"scss"===t.parser||t.__embeddedInHtml))},tT=class extends Error{name="UnexpectedNodeError";constructor(e,t,r="type"){super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`),this.node=e}},tS=function(e){return(null==e?void 0:e.type)==="front-matter"},tC=new Set(["raw","raws","sourceIndex","source","before","after","trailingComma","spaces"]);function t_(e,t,r){if(tS(e)&&"yaml"===e.lang&&delete t.value,"css-comment"===e.type&&"css-root"===r.type&&r.nodes.length>0&&((r.nodes[0]===e||tS(r.nodes[0])&&r.nodes[1]===e)&&(delete t.text,/^\*\s*@(?:format|prettier)\s*$/.test(e.text))||"css-root"===r.type&&tg(!1,r.nodes,-1)===e))return null;if("value-root"===e.type&&delete t.text,("media-query"===e.type||"media-query-list"===e.type||"media-feature-expression"===e.type)&&delete t.value,"css-rule"===e.type&&delete t.params,"selector-combinator"===e.type&&(t.value=eK(!1,t.value,/\s+/g," ")),"media-feature"===e.type&&(t.value=eK(!1,t.value," ","")),("value-word"===e.type&&(e.isColor&&e.isHex||["initial","inherit","unset","revert"].includes(t.value.toLowerCase()))||"media-feature"===e.type||"selector-root-invalid"===e.type||"selector-pseudo"===e.type)&&(t.value=t.value.toLowerCase()),"css-decl"===e.type&&(t.prop=t.prop.toLowerCase()),("css-atrule"===e.type||"css-import"===e.type)&&(t.name=t.name.toLowerCase()),"value-number"===e.type&&(t.unit=t.unit.toLowerCase()),"value-unknown"===e.type&&(t.value=eK(!1,t.value,/;$/g,"")),("media-feature"===e.type||"media-keyword"===e.type||"media-type"===e.type||"media-unknown"===e.type||"media-url"===e.type||"media-value"===e.type||"selector-attribute"===e.type||"selector-string"===e.type||"selector-class"===e.type||"selector-combinator"===e.type||"value-string"===e.type)&&t.value&&(t.value=eK(!1,eK(!1,t.value,"'",'"'),/\\([^\da-f])/gi,"$1")),"selector-attribute"===e.type&&(t.attribute=t.attribute.trim(),t.namespace&&"string"==typeof t.namespace&&(t.namespace=t.namespace.trim(),0===t.namespace.length&&(t.namespace=!0)),t.value&&(t.value=eK(!1,t.value.trim(),/^["']|["']$/g,""),delete t.quoted)),("media-value"===e.type||"media-type"===e.type||"value-number"===e.type||"selector-root-invalid"===e.type||"selector-class"===e.type||"selector-combinator"===e.type||"selector-tag"===e.type)&&t.value&&(t.value=eK(!1,t.value,/([\d+.e-]+)([a-z]*)/gi,(e,t,r)=>{let s=Number(t);return Number.isNaN(s)?e:s+r.toLowerCase()})),"selector-tag"===e.type){let r=e.value.toLowerCase();["from","to"].includes(r)&&(t.value=r)}if("css-atrule"===e.type&&"supports"===e.name.toLowerCase()&&delete t.value,"selector-unknown"===e.type&&delete t.value,"value-comma_group"===e.type){let r=e.groups.findIndex(e=>"value-number"===e.type&&"..."===e.unit);-1!==r&&(t.groups[r].unit="",t.groups.splice(r+1,0,{type:"value-word",value:"...",isColor:!1,isHex:!1}))}if("value-comma_group"===e.type&&e.groups.some(e=>"value-atword"===e.type&&e.value.endsWith("[")||"value-word"===e.type&&e.value.startsWith("]")))return{type:"value-atword",value:e.groups.map(e=>e.value).join(""),group:{open:null,close:null,groups:[],type:"value-paren_group"}}}async function tE(e,t){if("yaml"===e.lang){let r=e.value.trim(),s=r?await t(r,{parser:"yaml"}):"";return tl({type:"root"},[e.startDelimiter,tm,s,s?tm:"",e.endDelimiter])}}function tA(e){let{node:t}=e;if("front-matter"===t.type)return async e=>{let r=await tE(t,e);return r?[r,tm]:void 0}}t_.ignoredProperties=tC,tA.getVisitorKeys=e=>"css-root"===e.type?["frontMatter"]:[];var tj=null;function tI(e){if(null!==tj&&(tj.property,1)){let e=tj;return tj=tI.prototype=null,e}return tj=tI.prototype=e??Object.create(null),new tI}for(let e=0;e<=10;e++)tI();var tP=function(e,t="type"){return tI(e),function(r){let s=r[t],n=e[s];if(!Array.isArray(n))throw Object.assign(Error(`Missing visitor keys for '${s}'.`),{node:r});return n}}({"front-matter":[],"css-root":["frontMatter","nodes"],"css-comment":[],"css-rule":["selector","nodes"],"css-decl":["value","selector","nodes"],"css-atrule":["selector","params","value","nodes"],"media-query-list":["nodes"],"media-query":["nodes"],"media-type":[],"media-feature-expression":["nodes"],"media-feature":[],"media-colon":[],"media-value":[],"media-keyword":[],"media-url":[],"media-unknown":[],"selector-root":["nodes"],"selector-selector":["nodes"],"selector-comment":[],"selector-string":[],"selector-tag":[],"selector-id":[],"selector-class":[],"selector-attribute":[],"selector-combinator":["nodes"],"selector-universal":[],"selector-pseudo":["nodes"],"selector-nesting":[],"selector-unknown":[],"value-value":["group"],"value-root":["group"],"value-comment":[],"value-comma_group":["groups"],"value-paren_group":["open","groups","close"],"value-func":["group"],"value-paren":[],"value-number":[],"value-operator":[],"value-word":[],"value-colon":[],"value-comma":[],"value-string":[],"value-atword":[],"value-unicode-range":[],"value-unknown":[]}),tM=function(e,t){let r=0;for(let s=0;s<e.line-1;++s)r=t.indexOf(`
// `,r)+1;return r+e.column};function t$(e){return(t,r,s)=>{let n=!!(null!=s&&s.backwards);if(!1===r)return!1;let{length:o}=t,i=r;for(;i>=0&&i<o;){let r=t.charAt(i);if(e instanceof RegExp){if(!e.test(r))return i}else if(!e.includes(r))return i;n?i--:i++}return(-1===i||i===o)&&i}}t$(/\s/);var tR=t$(" 	"),tN=t$(",; 	"),tL=t$(/[^\n\r]/);function tW(e,t){var r,s,n;if("number"==typeof(null==(s=null==(r=e.source)?void 0:r.start)?void 0:s.offset))return e.source.start.offset;if("number"==typeof e.sourceIndex)return e.sourceIndex;if(null!=(n=e.source)&&n.start)return tM(e.source.start,t);throw Object.assign(Error("Can not locate node."),{node:e})}function tz(e,t){var r,s;if("css-comment"===e.type&&e.inline)return tL(t,e.source.startOffset);if("number"==typeof(null==(s=null==(r=e.source)?void 0:r.end)?void 0:s.offset))return e.source.end.offset;if(e.source){if(e.source.end)return tM(e.source.end,t);if(tb(e.nodes))return tz(tg(!1,e.nodes,-1),t)}return null}function tq(e){var t;return null==(t=e.source)?void 0:t.startOffset}function tD(e){var t;return null==(t=e.source)?void 0:t.endOffset}var tB=h(f(),1),tF=function(e){if(!e.startsWith("#!"))return"";let t=e.indexOf(`
// `);return -1===t?e:e.slice(0,t)};function tU(e){let t=tF(e);t&&(e=e.slice(t.length+1));let r=(0,tB.extract)(e),{pragmas:s,comments:n}=(0,tB.parseWithComments)(r);return{shebang:t,text:e,pragmas:s,comments:n}}var tV=RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)","s"),tG=function(e){let t=e.match(tV);if(!t)return{content:e};let{startDelimiter:r,language:s,value:n="",endDelimiter:o}=t.groups,i=s.trim()||"yaml";if("+++"===r&&(i="toml"),"yaml"!==i&&r!==o)return{content:e};let[a]=t;return{frontMatter:{type:"front-matter",lang:i,value:n,startDelimiter:r,endDelimiter:o,raw:a.replace(/\n$/,"")},content:eK(!1,a,/[^\n]/g," ")+e.slice(a.length)}},tJ=new Set(["red","green","blue","alpha","a","rgb","hue","h","saturation","s","lightness","l","whiteness","w","blackness","b","tint","shade","blend","blenda","contrast","hsl","hsla","hwb","hwba"]),tH=new Set(["initial","inherit","unset","revert"]);function tQ(e){return e.includes("$")||e.includes("@")||e.includes("#")||e.startsWith("%")||e.startsWith("--")||e.startsWith(":--")||e.includes("(")&&e.includes(")")?e:e.toLowerCase()}function tK(e,t){var r;let s=e.findAncestor(e=>"value-func"===e.type);return(null==(r=null==s?void 0:s.value)?void 0:r.toLowerCase())===t}function tZ(e,t){let r=Array.isArray(t)?t:[t],s=e.findAncestor(e=>"css-atrule"===e.type);return s&&r.includes(s.name.toLowerCase())}function tY(e,t){var r;let s=null==(r=e.parent)?void 0:r.nodes;return s&&s.indexOf(t)===s.length-1}function tX(e){return"value-operator"===e.type&&"*"===e.value}function t1(e){return"value-operator"===e.type&&"/"===e.value}function t0(e){return"value-operator"===e.type&&"+"===e.value}function t2(e){return"value-operator"===e.type&&"-"===e.value}function t3(e){return tX(e)||t1(e)||t0(e)||t2(e)||"value-operator"===e.type&&"%"===e.value}function t4(e,t){return"scss"===t.parser&&"css-atrule"===e.type&&["if","else","for","each","while"].includes(e.name)}function t9(e){var t;return(null==(t=e.raws)?void 0:t.params)&&/^\(\s*\)$/.test(e.raws.params)}function t5(e){return e.name.startsWith("prettier-placeholder")}function t6(e){var t;return(null==(t=e.raws)?void 0:t.before)===""}function t7(e){var t,r;return"value-comma_group"===e.type&&(null==(r=null==(t=e.groups)?void 0:t[1])?void 0:r.type)==="value-colon"}function t8(e){var t;return"value-paren_group"===e.type&&(null==(t=e.groups)?void 0:t[0])&&t7(e.groups[0])}function re(e,t){var r;if("scss"!==t.parser)return!1;let{node:s}=e;if(0===s.groups.length)return!1;let n=e.grandparent;if(!t8(s)&&!(n&&t8(n)))return!1;let o=e.findAncestor(e=>"css-decl"===e.type);return!!(null!=(r=null==o?void 0:o.prop)&&r.startsWith("$")||t8(n)||"value-func"===n.type)}function rt(e){return"value-comment"===e.type&&e.inline}function rr(e){return"value-word"===e.type&&"#"===e.value}function rs(e){return"value-word"===e.type&&"{"===e.value}function rn(e){return"value-word"===e.type&&"}"===e.value}function ro(e){return["value-word","value-atword"].includes(e.type)}function ri(e){return(null==e?void 0:e.type)==="value-colon"}function ra(e){return/\/\//.test(e.split(/[\n\r]/).pop())}function rl(e){return(null==e?void 0:e.type)==="value-atword"&&e.value.startsWith("prettier-placeholder-")}function ru(e){var t,r;return"value-paren_group"===e.type&&(null==(t=e.open)?void 0:t.value)==="("&&(null==(r=e.close)?void 0:r.value)===")"}var rc=function(e,t,r){var s,n,o,i;let{node:a}=e,l=e.parent,u=e.grandparent,c=null==(o=null==(n=e.findAncestor(e=>"css-decl"===e.type))?void 0:n.prop)?void 0:o.toLowerCase(),p=c&&"value-value"===l.type&&("grid"===c||c.startsWith("grid-template")),h=e.findAncestor(e=>"css-atrule"===e.type),f=h&&t4(h,t),d=a.groups.some(e=>rt(e)),m=e.map(r,"groups"),y=[],g=tK(e,"url"),v=!1,w=!1;for(let r=0;r<a.groups.length;++r){y.push(m[r]);let n=a.groups[r-1],o=a.groups[r],c=a.groups[r+1],d=a.groups[r+2];if(g){(c&&t0(c)||t0(o))&&y.push(" ");continue}if(tZ(e,"forward")&&"value-word"===o.type&&o.value&&void 0!==n&&"value-word"===n.type&&"as"===n.value&&"value-operator"===c.type&&"*"===c.value||!c||"value-word"===o.type&&o.value.endsWith("-")&&rl(c))continue;if("value-string"===o.type&&o.quoted){let e=o.value.lastIndexOf("#{"),t=o.value.lastIndexOf("}");-1!==e&&-1!==t?v=e>t:-1!==e?v=!0:-1!==t&&(v=!1)}if(v||ri(o)||ri(c)||"value-atword"===o.type&&(""===o.value||o.value.endsWith("["))||"value-word"===c.type&&c.value.startsWith("]")||"~"===o.value||"value-string"!==o.type&&o.value&&o.value.includes("\\")&&c&&"value-comment"!==c.type||null!=n&&n.value&&n.value.indexOf("\\")===n.value.length-1&&"value-operator"===o.type&&"/"===o.value||"\\"===o.value||"$$"===o.value&&"value-func"===o.type&&(null==c?void 0:c.type)==="value-word"&&!c.raws.before||rr(o)||rs(o)||rn(c)||rs(c)&&t6(c)||rn(o)&&t6(c)||"--"===o.value&&rr(c))continue;let b=t3(o),x=t3(c);if((b&&rr(c)||x&&rn(o))&&t6(c)||!n&&t1(o)||tK(e,"calc")&&(t0(o)||t0(c)||t2(o)||t2(c))&&t6(c))continue;let k=(t0(o)||t2(o))&&0===r&&("value-number"===c.type||c.isHex)&&u&&"value-func"===(i=u).type&&tJ.has(i.value.toLowerCase())&&!t6(c),O=(null==d?void 0:d.type)==="value-func"||d&&ro(d)||"value-func"===o.type||ro(o),T="value-func"===c.type||ro(c)||(null==n?void 0:n.type)==="value-func"||n&&ro(n);if("scss"===t.parser&&b&&"-"===o.value&&"value-func"===c.type&&tD(o)!==tq(c)){y.push(" ");continue}if(!(!(tX(c)||tX(o))&&!tK(e,"calc")&&!k&&(t1(c)&&!O||t1(o)&&!T||t0(c)&&!O||t0(o)&&!T||t2(c)||t2(o))&&(t6(c)||b&&(!n||n&&t3(n))))&&!(("scss"===t.parser||"less"===t.parser)&&b&&"-"===o.value&&ru(c)&&tD(o)===tq(c.open)&&"("===c.open.value)){if(rt(o)){if("value-paren_group"===l.type){y.push(tl(-1,tm));continue}y.push(tm);continue}if(f&&("value-word"===c.type&&["==","!="].includes(c.value)||"value-word"===c.type&&["<",">","<=",">="].includes(c.value)||"value-word"===c.type&&["and","or","not"].includes(c.value)||"value-word"===o.type&&"in"===o.value||"value-word"===o.type&&["from","through","end"].includes(o.value))||h&&"namespace"===h.name.toLowerCase()){y.push(" ");continue}if(p){o.source&&c.source&&o.source.start.line!==c.source.start.line?(y.push(tm),w=!0):y.push(" ");continue}if(x){y.push(" ");continue}if((null==c?void 0:c.value)!=="..."&&!(rl(o)&&rl(c)&&tD(o)===tq(c))){if(rl(o)&&ru(c)&&tD(o)===tq(c.open)){y.push(td);continue}if("with"===o.value&&ru(c)){y.push(" ");continue}null!=(s=o.value)&&s.endsWith("#")&&"{"===c.value&&ru(c.group)||y.push(tf)}}}return d&&y.push(th),w&&y.unshift(tm),f?tu(ta(y)):!function(e){var t;let{node:r}=e;return"url"===r.groups[0].value&&2===r.groups.length&&(null==(t=e.findAncestor(e=>"css-atrule"===e.type))?void 0:t.name)==="import"}(e)?tu(ta(tc(y))):tu(tc(y))},rp=new Map([["em","em"],["rem","rem"],["ex","ex"],["rex","rex"],["cap","cap"],["rcap","rcap"],["ch","ch"],["rch","rch"],["ic","ic"],["ric","ric"],["lh","lh"],["rlh","rlh"],["vw","vw"],["svw","svw"],["lvw","lvw"],["dvw","dvw"],["vh","vh"],["svh","svh"],["lvh","lvh"],["dvh","dvh"],["vi","vi"],["svi","svi"],["lvi","lvi"],["dvi","dvi"],["vb","vb"],["svb","svb"],["lvb","lvb"],["dvb","dvb"],["vmin","vmin"],["svmin","svmin"],["lvmin","lvmin"],["dvmin","dvmin"],["vmax","vmax"],["svmax","svmax"],["lvmax","lvmax"],["dvmax","dvmax"],["cm","cm"],["mm","mm"],["q","Q"],["in","in"],["pt","pt"],["pc","pc"],["px","px"],["deg","deg"],["grad","grad"],["rad","rad"],["turn","turn"],["s","s"],["ms","ms"],["hz","Hz"],["khz","kHz"],["dpi","dpi"],["dpcm","dpcm"],["dppx","dppx"],["x","x"],["cqw","cqw"],["cqh","cqh"],["cqi","cqi"],["cqb","cqb"],["cqmin","cqmin"],["cqmax","cqmax"]]),rh=/(["'])(?:(?!\1)[^\\]|\\.)*\1/gs,rf=RegExp(rh.source+`|(${/[$@]?[_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/gi.source})?(${/(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/gi.source})(${/[a-z]+/gi.source})?`,"gi");function rd(e,t){return eK(!1,e,rh,e=>tO(e,t))}function rm(e){return eK(!1,e,rf,(e,t,r,s,n)=>!r&&s?ry(s)+tQ(n||""):e)}function ry(e){return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/,"$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/,"$1").replace(/^([+-])?\./,"$10.").replace(/(\.\d+?)0+(?=e|$)/,"$1").replace(/\.(?=e|$)/,"").replace(/\.0(?=$|e)/,"")}var rg=function(e,t,r){let s=!!(null!=r&&r.backwards);if(!1===t)return!1;let n=e.charAt(t);if(s){if("\r"===e.charAt(t-1)&&n===`
// `)return t-2;if(n===`
// `||"\r"===n||"\u2028"===n||"\u2029"===n)return t-1}else{if("\r"===n&&e.charAt(t+1)===`
// `)return t+2;if(n===`
// `||"\r"===n||"\u2028"===n||"\u2029"===n)return t+1}return t},rv=function(e,t,r={}){let s=tR(e,r.backwards?t-1:t,r),n=rg(e,s,r);return s!==n},rw=function(e,t){if(!1===t)return!1;if("/"===e.charAt(t)&&"*"===e.charAt(t+1)){for(let r=t+2;r<e.length;++r)if("*"===e.charAt(r)&&"/"===e.charAt(r+1))return r+2}return t},rb=function(e,t){var r;let s=null,n=t;for(;n!==s;)s=n,n=tN(e,n),n=rw(e,n),n=tR(e,n);return!1!==(n=rg(e,n=!1!==(r=n)&&("/"===e.charAt(r)&&"/"===e.charAt(r+1)?tL(e,r):r)))&&rv(e,n)};function rx(e){return e.match(e=>"value-paren_group"===e.type&&!e.open&&e.groups.some(e=>"value-comma_group"===e.type),(e,t)=>"group"===t&&"value-value"===e.type,(e,t)=>"group"===t&&"value-root"===e.type,(e,t)=>"value"===t&&("css-decl"===e.type&&!e.prop.startsWith("--")||"css-atrule"===e.type&&e.variable))}var rk=function(e,t,r){let s=[];return e.each(()=>{let{node:n,previous:o}=e;if((null==o?void 0:o.type)==="css-comment"&&"prettier-ignore"===o.text.trim()?s.push(t.originalText.slice(tq(n),tD(n))):s.push(r()),e.isLast)return;let{next:i}=e;("css-comment"!==i.type||rv(t.originalText,tq(i),{backwards:!0})||tS(n))&&("css-atrule"!==i.type||"else"!==i.name||"css-comment"===n.type)?(s.push(t.__isHTMLStyleAttribute?tf:tm),rb(t.originalText,tD(n))&&!tS(n)&&s.push(tm)):s.push(" ")},"nodes"),s},rO=[{linguistLanguageId:50,name:"CSS",type:"markup",tmScope:"source.css",aceMode:"css",codemirrorMode:"css",codemirrorMimeType:"text/css",color:"#563d7c",extensions:[".css",".wxss"],parsers:["css"],vscodeLanguageIds:["css"]},{linguistLanguageId:262764437,name:"PostCSS",type:"markup",color:"#dc3a0c",tmScope:"source.postcss",group:"CSS",extensions:[".pcss",".postcss"],aceMode:"text",parsers:["css"],vscodeLanguageIds:["postcss"]},{linguistLanguageId:198,name:"Less",type:"markup",color:"#1d365d",aliases:["less-css"],extensions:[".less"],tmScope:"source.css.less",aceMode:"less",codemirrorMode:"css",codemirrorMimeType:"text/css",parsers:["less"],vscodeLanguageIds:["less"]},{linguistLanguageId:329,name:"SCSS",type:"markup",color:"#c6538c",tmScope:"source.css.scss",aceMode:"scss",codemirrorMode:"css",codemirrorMimeType:"text/x-scss",extensions:[".scss"],parsers:["scss"],vscodeLanguageIds:["scss"]}],rT={singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."}},rS={};c(rS,{css:()=>rG,less:()=>rJ,scss:()=>rH});var rC=h($(),1),r_=h(B(),1),rE=h(er(),1);function rA(e,t,r){if(e&&"object"==typeof e)for(let s in delete e.parent,e)rA(e[s],t,r),"type"!==s||"string"!=typeof e[s]||e[s].startsWith(t)||r&&r.test(e[s])||(e[s]=t+e[s]);return e}var rj=h(ei(),1).default.default,rI=function(e){let t;try{t=rj(e)}catch{return{type:"selector-unknown",value:e}}return rA(function e(t){if(t&&"object"==typeof t){for(let r in delete t.parent,t)e(t[r]);Array.isArray(t)||!t.value||t.type||(t.type="unknown")}return t}(t),"media-")},rP=h(eA(),1),rM=function(e){let t;if(/\/\/|\/\*/.test(e))return{type:"selector-unknown",value:e.trim()};try{new rP.default(e=>{t=e}).process(e)}catch{return{type:"selector-unknown",value:e}}return rA(t,"selector-")},r$=h(eH(),1),rR=e=>{for(;e.parent;)e=e.parent;return e},rN=function(e){if(tb(e)){for(let t=e.length-1;t>0;t--)if("word"===e[t].type&&"{"===e[t].value&&"word"===e[t-1].type&&e[t-1].value.endsWith("#"))return!0}return!1},rL=function(e,t){if("less"===t.parser&&e.startsWith("~`"))return{type:"value-unknown",value:e};let r=null;try{r=new r$.default(e,{loose:!0}).parse()}catch{return{type:"value-unknown",value:e}}return r.text=e,rA(function e(t,r){if(t&&"object"==typeof t)for(let s in t)"parent"!==s&&(e(t[s],r),"nodes"===s&&(t.group=function e(t){return("paren_group"!==t.type||t.open||t.close||1!==t.groups.length)&&("comma_group"!==t.type||1!==t.groups.length)?"paren_group"===t.type||"comma_group"===t.type?{...t,groups:t.groups.map(e)}:t:e(t.groups[0])}(function(e,t){var r,s;let{nodes:n}=e,o={open:null,close:null,groups:[],type:"paren_group"},i=[o],a=o,l={groups:[],type:"comma_group"},u=[l];for(let a=0;a<n.length;++a){let c=n[a];if("scss"===t.parser&&"number"===c.type&&".."===c.unit&&c.value.endsWith(".")&&(c.value=c.value.slice(0,-1),c.unit="..."),"func"===c.type&&"selector"===c.value&&(c.group.groups=[rM(rR(e).text.slice(c.group.open.sourceIndex+1,c.group.close.sourceIndex))]),"func"===c.type&&"url"===c.value){let e=(null==(r=c.group)?void 0:r.groups)??[],n=[];for(let t=0;t<e.length;t++){let r=e[t];"comma_group"===r.type?n=[...n,...r.groups]:n.push(r)}!rN(n)&&(n.some(e=>"string"===e.type||"func"===e.type&&!e.value.endsWith("\\"))||(s=n[0],"scss"===t.parser&&(null==s?void 0:s.type)==="word"&&s.value.startsWith("$")))||(c.group.groups=[rR(c).text.slice(c.group.open.sourceIndex+1,c.group.close.sourceIndex).trim()])}if("paren"===c.type&&"("===c.value)o={open:c,close:null,groups:[],type:"paren_group"},i.push(o),l={groups:[],type:"comma_group"},u.push(l);else if("paren"===c.type&&")"===c.value){if(l.groups.length>0&&o.groups.push(l),o.close=c,1===u.length)throw Error("Unbalanced parenthesis");u.pop(),(l=tg(!1,u,-1)).groups.push(o),i.pop(),o=tg(!1,i,-1)}else"comma"===c.type?(o.groups.push(l),l={groups:[],type:"comma_group"},u[u.length-1]=l):l.groups.push(c)}return l.groups.length>0&&o.groups.push(l),a}(t,r)),delete t[s]));return t}(r,t),"value-",/^selector-/)},rW=new Set(["import","use","forward"]),rz=/(\s*)(!default).*$/,rq=/(\s*)(!global).*$/;function rD(e,t,r){let s,n=tG(t),{frontMatter:o}=n;t=n.content;try{s=e(t,{map:!1})}catch(n){var i;let{name:e,reason:t,line:r,column:s}=n;throw"number"!=typeof r?n:Object.assign(SyntaxError(`${e}: ${t} (`+(i={loc:{start:{line:r,column:s}},cause:n}).loc.start.line+":"+i.loc.start.column+")"),i)}return r.originalText=t,function e(t,r){for(let s in t.source&&(t.source.startOffset=tW(t,r),t.source.endOffset=tz(t,r)),t){let n=t[s];"source"!==s&&n&&"object"==typeof n&&("value-root"===n.type||"value-unknown"===n.type?function e(t,r,s){for(let n in t.source&&(t.source.startOffset=tW(t,s)+r,t.source.endOffset=tz(t,s)+r),t){let o=t[n];"source"!==n&&o&&"object"==typeof o&&e(o,r,s)}}(n,function(e){var t;let r=e.source.startOffset;return"string"==typeof e.prop&&(r+=e.prop.length),"css-atrule"===e.type&&"string"==typeof e.name&&(r+=1+e.name.length+e.raws.afterName.match(/^\s*:?\s*/)[0].length),"css-atrule"!==e.type&&"string"==typeof(null==(t=e.raws)?void 0:t.between)&&(r+=e.raws.between.length),r}(t),n.text||n.value):e(n,r))}}(s=function e(t,r){var s,n;if(t&&"object"==typeof t){for(let s in delete t.parent,t)e(t[s],r);if(!t.type)return t;if(t.raws??(t.raws={}),"css-decl"===t.type&&"string"==typeof t.prop&&t.prop.startsWith("--")&&"string"==typeof t.value&&t.value.startsWith("{")){let e;if(t.value.trimEnd().endsWith("}")){let n,o=r.originalText.slice(0,t.source.start.offset),i="a".repeat(t.prop.length)+r.originalText.slice(t.source.start.offset+t.prop.length,t.source.end.offset),a=eK(!1,o,/[^\n]/g," ")+i,l;l="scss"===r.parser?rU:"less"===r.parser?rF:rB;try{n=l(a,{...r})}catch{}(null==(s=null==n?void 0:n.nodes)?void 0:s.length)===1&&"css-rule"===n.nodes[0].type&&(e=n.nodes[0].nodes)}return e?t.value={type:"css-rule",nodes:e}:t.value={type:"value-unknown",value:t.raws.value.raw},t}let o="";"string"==typeof t.selector&&(o=t.raws.selector?t.raws.selector.scss??t.raws.selector.raw:t.selector,t.raws.between&&t.raws.between.trim().length>0&&(o+=t.raws.between),t.raws.selector=o);let i="";"string"==typeof t.value&&(i=(i=t.raws.value?t.raws.value.scss??t.raws.value.raw:t.value).trim(),t.raws.value=i);let a="";if("string"==typeof t.params&&(a=t.raws.params?t.raws.params.scss??t.raws.params.raw:t.params,t.raws.afterName&&t.raws.afterName.trim().length>0&&(a=t.raws.afterName+a),t.raws.between&&t.raws.between.trim().length>0&&(a+=t.raws.between),a=a.trim(),t.raws.params=a),o.trim().length>0)return o.startsWith("@")&&o.endsWith(":")||(t.mixin?t.selector=rL(o,r):("scss"===r.parser&&t.selector&&t.selector.replace(/\/\*.*?\*\//,"").replace(/\/\/.*\n/,"").trim().endsWith(":")&&(t.isSCSSNesterProperty=!0),t.selector=rM(o))),t;if(i.length>0){let e=i.match(rz);e&&(i=i.slice(0,e.index),t.scssDefault=!0,"!default"!==e[0].trim()&&(t.raws.scssDefault=e[0]));let s=i.match(rq);if(s&&(i=i.slice(0,s.index),t.scssGlobal=!0,"!global"!==s[0].trim()&&(t.raws.scssGlobal=s[0])),i.startsWith("progid:"))return{type:"value-unknown",value:i};t.value=rL(i,r)}if("less"===r.parser&&"css-decl"===t.type&&i.startsWith("extend(")&&(t.extend||(t.extend=":"===t.raws.between),t.extend&&!t.selector&&(delete t.value,t.selector=rM(i.slice(7,-1)))),"css-atrule"===t.type){if("less"===r.parser){if(t.mixin){let e=t.raws.identifier+t.name+t.raws.afterName+t.raws.params;return t.selector=rM(e),delete t.params,t}if(t.function)return t}if("css"===r.parser&&"custom-selector"===t.name){let e=t.params.match(/:--\S+\s+/)[0].trim();return t.customSelector=e,t.selector=rM(t.params.slice(e.length).trim()),delete t.params,t}if("less"===r.parser){if(t.name.includes(":")&&!t.params){t.variable=!0;let e=t.name.split(":");t.name=e[0],t.value=rL(e.slice(1).join(":"),r)}if(!["page","nest","keyframes"].includes(t.name)&&(null==(n=t.params)?void 0:n[0])===":"){t.variable=!0;let e=t.params.slice(1);e&&(t.value=rL(e,r)),t.raws.afterName+=":"}if(t.variable)return delete t.params,t.value||delete t.value,t}}if("css-atrule"===t.type&&a.length>0){let{name:e}=t,s=t.name.toLowerCase();return"warn"===e||"error"===e?(t.params={type:"media-unknown",value:a},t):"extend"===e||"nest"===e?(t.selector=rM(a),delete t.params,t):"at-root"===e?(/^\(\s*(?:without|with)\s*:.+\)$/s.test(a)?t.params=rL(a,r):(t.selector=rM(a),delete t.params),t):rW.has(s)?(t.import=!0,delete t.filename,t.params=rL(a,r),t):["namespace","supports","if","else","for","each","while","debug","mixin","include","function","return","define-mixin","add-mixin"].includes(e)?(a=(a=a.replace(/(\$\S+?)(\s+)?\.{3}/,"$1...$2")).replace(/^(?!if)(\S+)(\s+)\(/,"$1($2"),t.value=rL(a,r),delete t.params,t):["media","custom-media"].includes(s)?a.includes("#{")?{type:"media-unknown",value:a}:(t.params=rI(a),t):(t.params=a,t)}}return t}(rA(s,"css-"),r),t),o&&(o.source={startOffset:0,endOffset:o.raw.length},s.frontMatter=o),s}function rB(e,t={}){return rD(rC.default.default,e,t)}function rF(e,t={}){return rD(e=>r_.default.parse(function(e){let t="initial",r="initial",s,n=!1,o=[];for(let i=0;i<e.length;i++){let a=e[i];switch(t){case"initial":if("'"===a){t="single-quotes";continue}if('"'===a){t="double-quotes";continue}if(("u"===a||"U"===a)&&"url("===e.slice(i,i+4).toLowerCase()){t="url",i+=3;continue}if("*"===a&&"/"===e[i-1]){t="comment-block";continue}"/"===a&&"/"===e[i-1]&&(t="comment-inline",s=i-1);continue;case"single-quotes":if("'"===a&&"\\"!==e[i-1]&&(t=r,r="initial"),a===`
// `||"\r"===a)return e;continue;case"double-quotes":if('"'===a&&"\\"!==e[i-1]&&(t=r,r="initial"),a===`
// `||"\r"===a)return e;continue;case"url":if(")"===a&&(t="initial"),a===`
// `||"\r"===a)return e;if("'"===a){t="single-quotes",r="url";continue}'"'===a&&(t="double-quotes",r="url");continue;case"comment-block":"/"===a&&"*"===e[i-1]&&(t="initial");continue;case"comment-inline":('"'===a||"'"===a||"*"===a)&&(n=!0),(a===`
// `||"\r"===a)&&(n&&o.push([s,i]),t="initial",n=!1);continue}}for(let[t,r]of o)e=e.slice(0,t)+eK(!1,e.slice(t,r),/["'*]/g," ")+e.slice(r);return e}(e)),e,t)}function rU(e,t={}){return rD(rE.default,e,t)}var rV={astFormat:"postcss",hasPragma:function(e){return function(e){let{pragmas:t}=tU(e);return Object.prototype.hasOwnProperty.call(t,"prettier")||Object.prototype.hasOwnProperty.call(t,"format")}(tG(e).content)},locStart:tq,locEnd:tD},rG={...rV,parse:rB},rJ={...rV,parse:rF},rH={...rV,parse:rU},rQ={postcss:{print:function(e,t,r){var s,n,o,i,a,l,u,c,p,h,f,d,m,y,g,v,w,b;let{node:x}=e;switch(x.type){case"front-matter":return[x.raw,tm];case"css-root":{let s=rk(e,t,r),n=x.raws.after.trim();return n.startsWith(";")&&(n=n.slice(1).trim()),[x.frontMatter?[r("frontMatter"),tm]:"",s,n?` ${n}`:"",x.nodes.length>0?tm:""]}case"css-comment":{let e=x.inline||x.raws.inline,r=t.originalText.slice(tq(x),tD(x));return e?r.trimEnd():r}case"css-rule":return[r("selector"),x.important?" !important":"",x.nodes?[(null==(s=x.selector)?void 0:s.type)==="selector-unknown"&&ra(x.selector.value)?tf:x.selector?" ":"","{",x.nodes.length>0?ta([tm,rk(e,t,r)]):"",tm,"}",!function(e){let{selector:t}=e;return!!t&&("string"==typeof t&&/^@.+:.*$/.test(t)||t.value&&/^@.+:.*$/.test(t.value))}(x)?"":";"]:";"];case"css-decl":{let s,i,a=e.parent,{between:l}=x.raws,h=l.trim(),f=":"===h,d="string"==typeof x.value&&/^ *$/.test(x.value),m="string"==typeof x.value?x.value:r("value");return m=(null==(u=x.value)?void 0:u.type)==="value-root"&&(null==(c=x.value.group)?void 0:c.type)==="value-value"&&"composes"===x.prop.toLowerCase()?function(e,t){if("string"==typeof e)return t(e);let r=new Map;return function e(s){if(r.has(s))return r.get(s);let n=function(r){switch(ts(r)){case eY:return t(r.map(e));case e4:return t({...r,parts:r.parts.map(e)});case e9:return t({...r,breakContents:e(r.breakContents),flatContents:e(r.flatContents)});case e3:{let{expandedStates:s,contents:n}=r;return n=s?(s=s.map(e))[0]:e(n),t({...r,contents:n,expandedStates:s})}case e0:case e1:case e5:case te:case e6:return t({...r,contents:e(r.contents)});case eZ:case eX:case e2:case e7:case e8:case tt:return t(r);default:throw new to(r)}}(s);return r.set(s,n),n}(e)}(m,tw):m,!f&&ra(h)&&!(null!=(o=null==(n=x.value)?void 0:n.group)&&o.group&&e.call(()=>rx(e),"value","group","group"))&&(m=ta([tm,tl(-1,m)])),[eK(!1,x.raws.before,/[\s;]/g,""),"css-atrule"===a.type&&a.variable||(i=null==(p=null==(s=e.findAncestor(e=>"css-rule"===e.type))?void 0:s.raws)?void 0:p.selector)&&(i.startsWith(":import")||i.startsWith(":export"))?x.prop:tQ(x.prop),h.startsWith("//")?" ":"",h,x.extend||d?"":" ","less"===t.parser&&x.extend&&x.selector?["extend(",r("selector"),")"]:"",m,x.raws.important?x.raws.important.replace(/\s*!\s*important/i," !important"):x.important?" !important":"",x.raws.scssDefault?x.raws.scssDefault.replace(/\s*!default/i," !default"):x.scssDefault?" !default":"",x.raws.scssGlobal?x.raws.scssGlobal.replace(/\s*!global/i," !global"):x.scssGlobal?" !global":"",x.nodes?[" {",ta([td,rk(e,t,r)]),td,"}"]:x.prop.startsWith("@prettier-placeholder")&&!a.raws.semicolon&&";"!==t.originalText[tD(x)-1]?"":t.__isHTMLStyleAttribute&&tY(e,x)?tp(";"):";"]}case"css-atrule":{let s=e.parent,n=t5(x)&&!s.raws.semicolon&&";"!==t.originalText[tD(x)-1];if("less"===t.parser){if(x.mixin)return[r("selector"),x.important?" !important":"",n?"":";"];if(x.function)return[x.name,"string"==typeof x.params?x.params:r("params"),n?"":";"];if(x.variable)return["@",x.name,": ",x.value?r("value"):"",x.raws.between.trim()?x.raws.between.trim()+" ":"",x.nodes?["{",ta([x.nodes.length>0?td:"",rk(e,t,r)]),td,"}"]:"",n?"":";"]}let o="import"===x.name&&(null==(i=x.params)?void 0:i.type)==="value-unknown"&&x.params.value.endsWith(";");return["@",t9(x)||x.name.endsWith(":")||t5(x)?x.name:tQ(x.name),x.params?[t9(x)?"":t5(x)?""===x.raws.afterName?"":x.name.endsWith(":")?" ":/^\s*\n\s*\n/.test(x.raws.afterName)?[tm,tm]:/^\s*\n/.test(x.raws.afterName)?tm:" ":" ","string"==typeof x.params?x.params:r("params")]:"",x.selector?ta([" ",r("selector")]):"",x.value?tu([" ",r("value"),t4(x,t)?(null==(d=null==(f=null==(h=x.value)?void 0:h.group)?void 0:f.group)?void 0:d.type)==="value-paren_group"&&null!==x.value.group.group.open&&null!==x.value.group.group.close?" ":tf:""]):"else"===x.name?" ":"",x.nodes?[t4(x,t)?"":x.selector&&!x.selector.nodes&&"string"==typeof x.selector.value&&ra(x.selector.value)||!x.selector&&"string"==typeof x.params&&ra(x.params)?tf:" ","{",ta([x.nodes.length>0?td:"",rk(e,t,r)]),td,"}"]:n||o?"":";"]}case"media-query-list":{let t=[];return e.each(({node:e})=>{"media-query"===e.type&&""===e.value||t.push(r())},"nodes"),tu(ta(ty(tf,t)))}case"media-query":return[ty(" ",e.map(r,"nodes")),tY(e,x)?"":","];case"media-type":case"media-value":return rm(rd(x.value,t));case"media-feature-expression":return x.nodes?["(",...e.map(r,"nodes"),")"]:x.value;case"media-feature":return tQ(rd(eK(!1,x.value,/ +/g," "),t));case"media-colon":return[x.value," "];case"media-keyword":case"selector-string":return rd(x.value,t);case"media-url":return rd(eK(!1,eK(!1,x.value,/^url\(\s+/gi,"url("),/\s+\)$/g,")"),t);case"media-unknown":case"selector-comment":case"selector-nesting":case"value-paren":case"value-operator":case"value-unicode-range":case"value-unknown":return x.value;case"selector-root":return tu([tZ(e,"custom-selector")?[e.findAncestor(e=>"css-atrule"===e.type).customSelector,tf]:"",ty([",",tZ(e,["extend","custom-selector","nest"])?tf:tm],e.map(r,"nodes"))]);case"selector-selector":return tu(ta(e.map(r,"nodes")));case"selector-tag":let k;return[x.namespace?[!0===x.namespace?"":x.namespace.trim(),"|"]:"",(null==(a=e.previous)?void 0:a.type)==="selector-nesting"?x.value:rm((m=x.value,(null==(y=null==(k=e.findAncestor(e=>"css-atrule"===e.type))?void 0:k.name)?void 0:y.toLowerCase().endsWith("keyframes"))&&["from","to"].includes(m.toLowerCase()))?x.value.toLowerCase():x.value)];case"selector-id":return["#",x.value];case"selector-class":return[".",rm(rd(x.value,t))];case"selector-attribute":let O;return["[",x.namespace?[!0===x.namespace?"":x.namespace.trim(),"|"]:"",x.attribute.trim(),x.operator??"",x.value?(g=rd(x.value.trim(),t),O=t.singleQuote?"'":'"',g.includes('"')||g.includes("'")?g:O+g+O):"",x.insensitive?" i":"","]"];case"selector-combinator":if("+"===x.value||">"===x.value||"~"===x.value||">>>"===x.value){let t=e.parent;return["selector-selector"===t.type&&t.nodes[0]===x?"":tf,x.value,tY(e,x)?"":" "]}return[x.value.trim().startsWith("(")?tf:"",rm(rd(x.value.trim(),t))||tf];case"selector-universal":return[x.namespace?[!0===x.namespace?"":x.namespace.trim(),"|"]:"",x.value];case"selector-pseudo":return[tQ(x.value),tb(x.nodes)?tu(["(",ta([td,ty([",",tf],e.map(r,"nodes"))]),td,")"]):""];case"selector-unknown":{let r=e.findAncestor(e=>"css-rule"===e.type);if(null!=r&&r.isSCSSNesterProperty)return rm(rd(tQ(x.value),t));let s=e.parent;if(null!=(l=s.raws)&&l.selector){let e=tq(s),r=e+s.raws.selector.length;return t.originalText.slice(e,r).trim()}let n=e.grandparent;if("value-paren_group"===s.type&&(null==n?void 0:n.type)==="value-func"&&"selector"===n.value){let e=tD(s.open)+1,r=tq(s.close),n=t.originalText.slice(e,r).trim();return ra(n)?[th,n]:n}return x.value}case"value-value":case"value-root":return r("group");case"value-comment":return t.originalText.slice(tq(x),tD(x));case"value-comma_group":return rc(e,t,r);case"value-paren_group":return function(e,t,r){var s;let{node:n,parent:o}=e,i=e.map(({node:e})=>"string"==typeof e?e:r(),"groups");if(o&&"value-func"===(s=o).type&&"url"===s.value.toLowerCase()&&(1===n.groups.length||n.groups.length>0&&"value-comma_group"===n.groups[0].type&&n.groups[0].groups.length>0&&"value-word"===n.groups[0].groups[0].type&&n.groups[0].groups[0].value.startsWith("data:")))return[n.open?r("open"):"",ty(",",i),n.close?r("close"):""];if(!n.open){let t=rx(e),r=ty([",",t?tm:tf],i);return ta(t?[tm,r]:tu(tc(r)))}let a=e.map(({node:r,isLast:s,index:n})=>{var o,a;let l=i[n];if(t7(r)&&"value-comma_group"===r.type&&r.groups&&"value-paren_group"!==r.groups[0].type&&(null==(o=r.groups[2])?void 0:o.type)==="value-paren_group"){let e=tv(l.contents.contents);e[1]=tu(e[1]),l=tu(tl(-1,l))}let u=[l,s?"value-func"===(a=e.grandparent).type&&"var"===a.value.toLowerCase()&&function({node:e,parent:t},r){return!!(e.source&&r.originalText.slice(tq(e),tq(t.close)).trimEnd().endsWith(","))}(e,t)?",":"value-comment"!==e.node.type&&!("value-comma_group"===e.node.type&&e.node.groups.every(e=>"value-comment"===e.type))&&("es5"===t.trailingComma||"all"===t.trailingComma)&&e.callParent(()=>re(e,t))?tp(","):"":","];if(!s&&"value-comma_group"===r.type&&tb(r.groups)){let e=tg(!1,r.groups,-1);!e.source&&e.close&&(e=e.close),e.source&&rb(t.originalText,tD(e))&&u.push(tm)}return u},"groups"),l=function(e,t){if(!t7(t))return!1;let{groups:r}=t,s=r.indexOf(e);return -1!==s&&ri(r[s+1])}(n,o),u=function(e,t){var r,s;if((null==(r=e.open)?void 0:r.value)!=="("||(null==(s=e.close)?void 0:s.value)!==")"||e.groups.some(e=>"value-comma_group"!==e.type))return!1;if("value-comma_group"===t.type){let r=t.groups.indexOf(e)-1,s=t.groups[r];if((null==s?void 0:s.type)==="value-word"&&"with"===s.value)return!0}return!1}(n,o),c=re(e,t),p=tu([n.open?r("open"):"",ta([td,ty(tf,a)]),td,n.close?r("close"):""],{shouldBreak:u||c&&!l});return u||l?tl(-1,p):p}(e,t,r);case"value-func":return[x.value,tZ(e,"supports")&&(v=x).value&&["not","and","or"].includes(v.value.toLowerCase())?" ":"",r("group")];case"value-number":let T;return[ry(x.value),(T=(w=x.unit).toLowerCase(),rp.has(T)?rp.get(T):w)];case"value-word":return x.isColor&&x.isHex||(b=x.value,tH.has(b.toLowerCase()))?x.value.toLowerCase():x.value;case"value-colon":{let{previous:t}=e;return[x.value,"string"==typeof(null==t?void 0:t.value)&&t.value.endsWith("\\")||tK(e,"url")?"":tf]}case"value-string":return tO(x.raws.quote+x.value+x.raws.quote,t);case"value-atword":return["@",x.value];default:throw new tT(x,"PostCSS")}},embed:tA,insertPragma:function(e){let{frontMatter:t,content:r}=tG(e);return(t?t.raw+`

// `:"")+function(e){let{shebang:t,text:r,pragmas:s,comments:n}=tU(e),o=(0,tB.strip)(r);return(t?`${t}
// `:"")+(0,tB.print)({pragmas:{format:"",...s},comments:n.trimStart()})+(o.startsWith(`
// `)?`
// `:`

// `)+o}(r)},massageAstNode:t_,getVisitorKeys:tP}},rK=eQ}}]);