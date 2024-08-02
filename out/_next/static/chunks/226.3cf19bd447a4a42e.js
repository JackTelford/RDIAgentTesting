"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [226],
    {
        80226: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return nm;
                    },
                    languages: function () {
                        return tX;
                    },
                    options: function () {
                        return tJ;
                    },
                    parsers: function () {
                        return tQ;
                    },
                    printers: function () {
                        return nd;
                    },
                });
            var n,
                a,
                i = Object.defineProperty,
                s = (e, t) => {
                    for (var r in t) i(e, r, { get: t[r], enumerable: !0 });
                },
                o = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r);
                },
                l = (e, t, r) => (o(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                c = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r);
                },
                u = (e, t, r, n) => (o(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
                p = {};
            s(p, { languages: () => tX, options: () => tJ, parsers: () => tQ, printers: () => nd });
            var h = (e, t, r, n) => {
                if (!(e && null == t)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
            },
                d = "string",
                m = "array",
                g = "cursor",
                f = "indent",
                v = "align",
                S = "trim",
                y = "group",
                b = "fill",
                _ = "if-break",
                w = "indent-if-break",
                k = "line-suffix",
                C = "line-suffix-boundary",
                T = "line",
                x = "label",
                E = "break-parent",
                L = new Set([g, f, v, S, y, b, _, w, k, C, T, x, E]),
                q = function (e) {
                    if ("string" == typeof e) return d;
                    if (Array.isArray(e)) return m;
                    if (!e) return;
                    let { type: t } = e;
                    if (L.has(t)) return t;
                },
                A = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e),
                N = class extends Error {
                    name = "InvalidDocError";
                    constructor(e) {
                        super(
                            (function (e) {
                                let t = null === e ? "null" : typeof e;
                                if ("string" !== t && "object" !== t)
                                    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
                                if (q(e)) throw Error("doc is valid.");
                                let r = Object.prototype.toString.call(e);
                                if ("[object Object]" !== r) return `Unexpected doc '${r}'.`;
                                let n = A([...L].map((e) => `'${e}'`));
                                return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
                            })(e)
                        ),
                            (this.doc = e);
                    }
                },
                D = () => { };
            function I(e) {
                return D(e), { type: f, contents: e };
            }
            function B(e, t) {
                return D(t), { type: v, contents: t, n: e };
            }
            function M(e, t = {}) {
                return D(e), D(t.expandedStates, !0), { type: y, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
            }
            function P(e) {
                return D(e), { type: b, parts: e };
            }
            function H(e, t = "", r = {}) {
                return D(e), "" !== t && D(t), { type: _, breakContents: e, flatContents: t, groupId: r.groupId };
            }
            var R = { type: E },
                F = { type: T },
                U = { type: T, soft: !0 },
                V = [{ type: T, hard: !0 }, R],
                O = [{ type: T, hard: !0, literal: !0 }, R];
            function W(e, t) {
                D(e), D(t);
                let r = [];
                for (let n = 0; n < t.length; n++) 0 !== n && r.push(e), r.push(t[n]);
                return r;
            }
            var $ = (e, t, r) => {
                if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[r < 0 ? t.length + r : r] : t.at(r);
            };
            function z(e, t) {
                if ("string" == typeof e) return t(e);
                let r = new Map();
                return (function e(n) {
                    if (r.has(n)) return r.get(n);
                    let a = (function (r) {
                        switch (q(r)) {
                            case m:
                                return t(r.map(e));
                            case b:
                                return t({ ...r, parts: r.parts.map(e) });
                            case _:
                                return t({ ...r, breakContents: e(r.breakContents), flatContents: e(r.flatContents) });
                            case y: {
                                let { expandedStates: n, contents: a } = r;
                                return (a = n ? (n = n.map(e))[0] : e(a)), t({ ...r, contents: a, expandedStates: n });
                            }
                            case v:
                            case f:
                            case w:
                            case x:
                            case k:
                                return t({ ...r, contents: e(r.contents) });
                            case d:
                            case g:
                            case S:
                            case C:
                            case T:
                            case E:
                                return t(r);
                            default:
                                throw new N(r);
                        }
                    })(n);
                    return r.set(n, a), a;
                })(e);
            }
            function j(e, t = O) {
                return z(e, (e) =>
                    "string" == typeof e
                        ? W(
                            t,
                            e.split(`
`)
                        )
                        : e
                );
            }
            var G,
                K = function (e, t) {
                    let r = !0 === t || "'" === t ? "'" : '"',
                        n = "'" === r ? '"' : "'",
                        a = 0,
                        i = 0;
                    for (let t of e) t === r ? a++ : t === n && i++;
                    return a > i ? n : r;
                },
                X = class {
                    constructor(e) {
                        c(this, G, void 0), u(this, G, new Set(e));
                    }
                    getLeadingWhitespaceCount(e) {
                        let t = l(this, G),
                            r = 0;
                        for (let n = 0; n < e.length && t.has(e.charAt(n)); n++) r++;
                        return r;
                    }
                    getTrailingWhitespaceCount(e) {
                        let t = l(this, G),
                            r = 0;
                        for (let n = e.length - 1; n >= 0 && t.has(e.charAt(n)); n--) r++;
                        return r;
                    }
                    getLeadingWhitespace(e) {
                        let t = this.getLeadingWhitespaceCount(e);
                        return e.slice(0, t);
                    }
                    getTrailingWhitespace(e) {
                        let t = this.getTrailingWhitespaceCount(e);
                        return e.slice(e.length - t);
                    }
                    hasLeadingWhitespace(e) {
                        return l(this, G).has(e.charAt(0));
                    }
                    hasTrailingWhitespace(e) {
                        return l(this, G).has($(!1, e, -1));
                    }
                    trimStart(e) {
                        let t = this.getLeadingWhitespaceCount(e);
                        return e.slice(t);
                    }
                    trimEnd(e) {
                        let t = this.getTrailingWhitespaceCount(e);
                        return e.slice(0, e.length - t);
                    }
                    trim(e) {
                        return this.trimEnd(this.trimStart(e));
                    }
                    split(e, t = !1) {
                        let r = `[${(function (e) {
                            if ("string" != typeof e) throw TypeError("Expected a string");
                            return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
                        })([...l(this, G)].join(""))}]+`,
                            n = new RegExp(t ? `(${r})` : r);
                        return e.split(n);
                    }
                    hasWhitespaceCharacter(e) {
                        let t = l(this, G);
                        return Array.prototype.some.call(e, (e) => t.has(e));
                    }
                    hasNonWhitespaceCharacter(e) {
                        let t = l(this, G);
                        return Array.prototype.some.call(e, (e) => !t.has(e));
                    }
                    isWhitespaceOnly(e) {
                        let t = l(this, G);
                        return Array.prototype.every.call(e, (e) => t.has(e));
                    }
                };
            G = new WeakMap();
            var Y = new X([
                "	",
                `
`,
                "\f",
                "\r",
                " ",
            ]),
                J = class extends Error {
                    name = "UnexpectedNodeError";
                    constructor(e, t, r = "type") {
                        super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`), (this.node = e);
                    }
                },
                Q = function (e) {
                    return (null == e ? void 0 : e.type) === "front-matter";
                },
                Z = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]),
                ee = new Set(["if", "else if", "for", "switch", "case"]);
            function et(e, t) {
                var r;
                if ("text" === e.type || "comment" === e.type || Q(e) || "yaml" === e.type || "toml" === e.type) return null;
                if (("attribute" === e.type && delete t.value, "docType" === e.type && delete t.value, "angularControlFlowBlock" === e.type && null != (r = t.parameters) && r.children))
                    for (let r of t.parameters.children) ee.has(e.name) ? delete r.expression : (r.expression = r.expression.trim());
                "angularIcuExpression" === e.type && (t.switchValue = e.switchValue.trim());
            }
            async function er(e, t) {
                if ("yaml" === e.lang) {
                    let r = e.value.trim(),
                        n = r ? await t(r, { parser: "yaml" }) : "";
                    return B({ type: "root" }, [e.startDelimiter, V, n, n ? V : "", e.endDelimiter]);
                }
            }
            function en(e, t = !0) {
                return [I([U, e]), t ? U : ""];
            }
            function ea(e, t) {
                let r =
                    "NGRoot" === e.type ? ("NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node) : "JsExpressionRoot" === e.type ? e.node : e;
                return r && ("ObjectExpression" === r.type || "ArrayExpression" === r.type || (("__vue_expression" === t.parser || "__vue_ts_expression" === t.parser) && ("TemplateLiteral" === r.type || "StringLiteral" === r.type)));
            }
            async function ei(e, t, r, n) {
                r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
                let a = !0;
                n &&
                    (r.__onHtmlBindingRoot = (e, t) => {
                        a = n(e, t);
                    });
                let i = await t(e, r, t);
                return a ? M(i) : en(i);
            }
            et.ignoredProperties = Z;
            var es = function (e, t, r, n) {
                let { node: a } = r,
                    i = n.originalText.slice(a.sourceSpan.start.offset, a.sourceSpan.end.offset);
                return /^\s*$/.test(i) ? "" : ei(i, e, { parser: "__ng_directive", __isInHtmlAttribute: !1, trailingComma: "none" }, ea);
            },
                eo = (e) => String(e).split(/[/\\]/).pop();
            function el(e, t) {
                if (!t) return;
                let r = eo(t).toLowerCase();
                return e.find(({ filenames: e }) => (null == e ? void 0 : e.some((e) => e.toLowerCase() === r))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.some((e) => r.endsWith(e))));
            }
            var ec = function (e, t) {
                let r = e.plugins.flatMap((e) => e.languages ?? []),
                    n =
                        (function (e, t) {
                            if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => (null == e ? void 0 : e.includes(t))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.includes(`.${t}`)));
                        })(r, t.language) ??
                        el(r, t.physicalFile) ??
                        el(r, t.file) ??
                        void t.physicalFile;
                return null == n ? void 0 : n.parsers[0];
            },
                eu = {
                    area: "none",
                    base: "none",
                    basefont: "none",
                    datalist: "none",
                    head: "none",
                    link: "none",
                    meta: "none",
                    noembed: "none",
                    noframes: "none",
                    param: "block",
                    rp: "none",
                    script: "block",
                    style: "none",
                    template: "inline",
                    title: "none",
                    html: "block",
                    body: "block",
                    address: "block",
                    blockquote: "block",
                    center: "block",
                    dialog: "block",
                    div: "block",
                    figure: "block",
                    figcaption: "block",
                    footer: "block",
                    form: "block",
                    header: "block",
                    hr: "block",
                    legend: "block",
                    listing: "block",
                    main: "block",
                    p: "block",
                    plaintext: "block",
                    pre: "block",
                    search: "block",
                    xmp: "block",
                    slot: "contents",
                    ruby: "ruby",
                    rt: "ruby-text",
                    article: "block",
                    aside: "block",
                    h1: "block",
                    h2: "block",
                    h3: "block",
                    h4: "block",
                    h5: "block",
                    h6: "block",
                    hgroup: "block",
                    nav: "block",
                    section: "block",
                    dir: "block",
                    dd: "block",
                    dl: "block",
                    dt: "block",
                    menu: "block",
                    ol: "block",
                    ul: "block",
                    li: "list-item",
                    table: "table",
                    caption: "table-caption",
                    colgroup: "table-column-group",
                    col: "table-column",
                    thead: "table-header-group",
                    tbody: "table-row-group",
                    tfoot: "table-footer-group",
                    tr: "table-row",
                    td: "table-cell",
                    th: "table-cell",
                    input: "inline-block",
                    button: "inline-block",
                    fieldset: "block",
                    marquee: "inline-block",
                    source: "block",
                    track: "block",
                    details: "block",
                    summary: "block",
                    meter: "inline-block",
                    progress: "inline-block",
                    object: "inline-block",
                    video: "inline-block",
                    audio: "inline-block",
                    select: "inline-block",
                    option: "block",
                    optgroup: "block",
                },
                ep = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" },
                eh = function (e) {
                    return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
                },
                ed = (e) => h(!1, e, /^[\t\f\r ]*\n/g, ""),
                em = (e) => ed(Y.trimEnd(e)),
                eg = (e) => {
                    let t = e,
                        r = Y.getLeadingWhitespace(t);
                    r && (t = t.slice(r.length));
                    let n = Y.getTrailingWhitespace(t);
                    return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
                };
            function ef(e, t) {
                return !!(
                    ("ieConditionalComment" === e.type && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan) ||
                    ("ieConditionalComment" === e.type && !e.complete) ||
                    (eN(e) && e.children.some((e) => "text" !== e.type && "interpolation" !== e.type)) ||
                    (eF(e, t) && !ey(e) && "interpolation" !== e.type)
                );
            }
            function ev(e) {
                var t;
                return "attribute" !== e.type && !!e.parent && !!e.prev && "comment" === (t = e.prev).type && "prettier-ignore" === t.value.trim();
            }
            function eS(e) {
                return "text" === e.type || "comment" === e.type;
            }
            function ey(e) {
                return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || "svg:script" === e.fullName || (eh(e) && ("script" === e.name || "style" === e.name)));
            }
            function eb(e) {
                return eD(e).startsWith("pre");
            }
            function e_(e) {
                return Q(e) || (e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line);
            }
            function ew(e) {
                return "element" === e.type && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || (e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay));
            }
            function ek(e) {
                var t, r;
                return ex(e) || (e.prev && (ex((t = e.prev)) || ("element" === t.type && "br" === t.fullName) || (eC((r = t)) && eT(r)))) || (eC(e) && eT(e));
            }
            function eC(e) {
                return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
            }
            function eT(e) {
                return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || (e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line));
            }
            function ex(e) {
                switch (e.type) {
                    case "ieConditionalComment":
                    case "comment":
                    case "directive":
                        return !0;
                    case "element":
                        return ["script", "select"].includes(e.name);
                }
                return !1;
            }
            function eE(e) {
                return e.lastChild ? eE(e.lastChild) : e;
            }
            function eL(e) {
                if (e)
                    switch (e) {
                        case "module":
                        case "text/javascript":
                        case "text/babel":
                        case "application/javascript":
                            return "babel";
                        case "application/x-typescript":
                            return "typescript";
                        case "text/markdown":
                            return "markdown";
                        case "text/html":
                            return "html";
                        case "text/x-handlebars-template":
                            return "glimmer";
                        default:
                            if (e.endsWith("json") || e.endsWith("importmap") || "speculationrules" === e) return "json";
                    }
            }
            function eq(e, t) {
                return (
                    (function (e, t) {
                        let { name: r, attrMap: n } = e;
                        if ("script" !== r || Object.prototype.hasOwnProperty.call(n, "src")) return;
                        let { type: a, lang: i } = e.attrMap;
                        return i || a ? ec(t, { language: i }) ?? eL(a) : "babel";
                    })(e, t) ??
                    (function (e, t) {
                        if ("style" !== e.name) return;
                        let { lang: r } = e.attrMap;
                        return r ? ec(t, { language: r }) : "css";
                    })(e, t) ??
                    (function (e, t) {
                        if (!eF(e, t)) return;
                        let { attrMap: r } = e;
                        if (Object.prototype.hasOwnProperty.call(r, "src")) return;
                        let { type: n, lang: a } = r;
                        return ec(t, { language: a }) ?? eL(n);
                    })(e, t)
                );
            }
            function eA(e) {
                return "block" === e || "list-item" === e || e.startsWith("table");
            }
            function eN(e) {
                return eD(e).startsWith("pre");
            }
            function eD(e) {
                return ("element" === e.type && (!e.namespace || eh(e)) && ep[e.name]) || "normal";
            }
            function eI(
                e,
                t = (function (e) {
                    let t = Number.POSITIVE_INFINITY;
                    for (let r of e.split(`
`)) {
                        if (0 === r.length) continue;
                        let e = Y.getLeadingWhitespaceCount(r);
                        if (0 === e) return 0;
                        r.length !== e && e < t && (t = e);
                    }
                    return t === Number.POSITIVE_INFINITY ? 0 : t;
                })(e)
            ) {
                return 0 === t
                    ? e
                    : e
                        .split(
                            `
`
                        )
                        .map((e) => e.slice(t)).join(`
`);
            }
            function eB(e) {
                return h(!1, h(!1, e, "&apos;", "'"), "&quot;", '"');
            }
            function eM(e) {
                return eB(e.value);
            }
            var eP = new Set(["template", "style", "script"]);
            function eH(e, t) {
                return eR(e, t) && !eP.has(e.fullName);
            }
            function eR(e, t) {
                return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
            }
            function eF(e, t) {
                return eR(e, t) && (eH(e, t) || (e.attrMap.lang && "html" !== e.attrMap.lang));
            }
            function eU(e, t = e.value) {
                return e.parent.isWhitespaceSensitive ? (e.parent.isIndentationSensitive ? j(t) : j(eI(em(t)), V)) : W(F, Y.split(t));
            }
            function eV(e, t) {
                return eR(e, t) && "script" === e.name;
            }
            var eO = /{{(.+?)}}/s;
            async function eW(e, t) {
                let r = [];
                for (let [n, a] of e.split(eO).entries())
                    if (n % 2 == 0) r.push(j(a));
                    else
                        try {
                            r.push(M(["{{", I([F, await ei(a, t, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0, trailingComma: "none" })]), F, "}}"]));
                        } catch {
                            r.push("{{", j(a), "}}");
                        }
                return r;
            }
            function e$({ parser: e }) {
                return (t, r, n) => ei(eM(n.node), t, { parser: e, trailingComma: "none" }, ea);
            }
            var ez = e$({ parser: "__ng_action" }),
                ej = e$({ parser: "__ng_binding" }),
                eG = e$({ parser: "__ng_directive" }),
                eK = function (e, t) {
                    if ("angular" !== t.parser) return;
                    let { node: r } = e,
                        n = r.fullName;
                    if ((n.startsWith("(") && n.endsWith(")")) || n.startsWith("on-")) return ez;
                    if ((n.startsWith("[") && n.endsWith("]")) || /^bind(?:on)?-/.test(n) || /^ng-(?:if|show|hide|class|style)$/.test(n)) return ej;
                    if (n.startsWith("*")) return eG;
                    let a = eM(r);
                    return /^i18n(?:-.+)?$/.test(n) ? () => en(P(eU(r, a.trim())), !a.includes("@@")) : eO.test(a) ? (e) => eW(a, e) : void 0;
                },
                eX = function (e, t) {
                    let { node: r } = e,
                        n = eM(r);
                    if ("class" === r.fullName && !t.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/).join(" ");
                };
            function eY(e) {
                return (
                    "	" === e ||
                    e ===
                    `
` ||
                    "\f" === e ||
                    "\r" === e ||
                    " " === e
                );
            }
            var eJ = /^[ \t\n\r\u000c]+/,
                eQ = /^[, \t\n\r\u000c]+/,
                eZ = /^[^ \t\n\r\u000c]+/,
                e0 = /[,]+$/,
                e1 = /^\d+$/,
                e2 = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                e3 = function (e) {
                    let t = e.length,
                        r,
                        n,
                        a,
                        i,
                        s,
                        o = 0,
                        l;
                    function c(t) {
                        let r,
                            n = t.exec(e.substring(o));
                        if (n) return ([r] = n), (o += r.length), r;
                    }
                    let u = [];
                    for (; ;) {
                        if ((c(eQ), o >= t)) {
                            if (0 === u.length) throw Error("Must contain one or more image candidate strings.");
                            return u;
                        }
                        (l = o),
                            (r = c(eZ)),
                            (n = []),
                            "," === r.slice(-1)
                                ? ((r = r.replace(e0, "")), p())
                                : (function () {
                                    for (c(eJ), a = "", i = "in descriptor"; ;) {
                                        if (((s = e.charAt(o)), "in descriptor" === i)) {
                                            if (eY(s)) a && (n.push(a), (a = ""), (i = "after descriptor"));
                                            else if ("," === s) {
                                                (o += 1), a && n.push(a), p();
                                                return;
                                            } else if ("(" === s) (a += s), (i = "in parens");
                                            else if ("" === s) {
                                                a && n.push(a), p();
                                                return;
                                            } else a += s;
                                        } else if ("in parens" === i) {
                                            if (")" === s) (a += s), (i = "in descriptor");
                                            else if ("" === s) {
                                                n.push(a), p();
                                                return;
                                            } else a += s;
                                        } else if ("after descriptor" === i && !eY(s)) {
                                            if ("" === s) {
                                                p();
                                                return;
                                            }
                                            (i = "in descriptor"), (o -= 1);
                                        }
                                        o += 1;
                                    }
                                })();
                    }
                    function p() {
                        let t = !1,
                            a,
                            i,
                            s,
                            o,
                            c = {},
                            p,
                            h,
                            d,
                            m,
                            g;
                        for (o = 0; o < n.length; o++)
                            (h = (p = n[o])[p.length - 1]),
                                (m = parseInt((d = p.substring(0, p.length - 1)), 10)),
                                (g = parseFloat(d)),
                                e1.test(d) && "w" === h
                                    ? ((a || i) && (t = !0), 0 === m ? (t = !0) : (a = m))
                                    : e2.test(d) && "x" === h
                                        ? ((a || i || s) && (t = !0), g < 0 ? (t = !0) : (i = g))
                                        : e1.test(d) && "h" === h
                                            ? ((s || i) && (t = !0), 0 === m ? (t = !0) : (s = m))
                                            : (t = !0);
                        if (t) throw Error(`Invalid srcset descriptor found in "${e}" at "${p}".`);
                        (c.source = { value: r, startOffset: l }), a && (c.width = { value: a }), i && (c.density = { value: i }), s && (c.height = { value: s }), u.push(c);
                    }
                },
                e4 = { width: "w", height: "h", density: "x" },
                e6 = Object.keys(e4),
                e5 = function (e) {
                    if ("srcset" === e.node.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName))
                        return () =>
                            (function (e) {
                                let t = e3(e),
                                    r = e6.filter((e) => t.some((t) => Object.prototype.hasOwnProperty.call(t, e)));
                                if (r.length > 1) throw Error("Mixed descriptor in srcset is not supported");
                                let [n] = r,
                                    a = e4[n],
                                    i = t.map((e) => e.source.value),
                                    s = Math.max(...i.map((e) => e.length)),
                                    o = t.map((e) => (e[n] ? String(e[n].value) : "")),
                                    l = o.map((e) => {
                                        let t = e.indexOf(".");
                                        return -1 === t ? e.length : t;
                                    }),
                                    c = Math.max(...l);
                                return en(
                                    W(
                                        [",", F],
                                        i.map((e, t) => {
                                            let r = [e],
                                                n = o[t];
                                            if (n) {
                                                let i = s - e.length + 1,
                                                    o = c - l[t],
                                                    u = " ".repeat(i + o);
                                                r.push(H(u, " "), n + a);
                                            }
                                            return r;
                                        })
                                    )
                                );
                            })(eM(e.node));
                };
            function e9(e, t) {
                let { node: r } = e,
                    n = eM(e.node).trim();
                if ("style" === r.fullName && !t.parentParser && !n.includes("{{")) return async (e) => en(await e(n, { parser: "css", __isHTMLStyleAttribute: !0 }));
            }
            var e8 = new WeakMap(),
                e7 = function (e, t) {
                    let { root: r } = e;
                    return (
                        e8.has(r) ||
                        e8.set(
                            r,
                            r.children.some((e) => eV(e, t) && ["ts", "typescript"].includes(e.attrMap.lang))
                        ),
                        e8.get(r)
                    );
                };
            function te(e, t, r) {
                let { node: n } = r,
                    a = eM(n);
                return ei(`type T<${a}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: !0 }, ea);
            }
            async function tt(e, t, r, n) {
                let { left: a, operator: i, right: s } = (function (e) {
                    let t = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
                        r = e.match(/(.*?)\s+(in|of)\s+(.*)/s);
                    if (!r) return;
                    let n = {};
                    if (((n.for = r[3].trim()), !n.for)) return;
                    let a = h(!1, r[1].trim(), /^\(|\)$/g, ""),
                        i = a.match(t);
                    i ? ((n.alias = a.replace(t, "")), (n.iterator1 = i[1].trim()), i[2] && (n.iterator2 = i[2].trim())) : (n.alias = a);
                    let s = [n.alias, n.iterator1, n.iterator2];
                    if (!s.some((e, t) => !e && (0 === t || s.slice(t + 1).some(Boolean)))) return { left: s.filter(Boolean).join(","), operator: r[2], right: n.for };
                })(eM(r.node)),
                    o = e7(r, n);
                return [M(await ei(`function _(${a}) {}`, e, { parser: o ? "babel-ts" : "babel", __isVueForBindingLeft: !0 })), " ", i, " ", await ei(s, e, { parser: o ? "__ts_expression" : "__js_expression" })];
            }
            function tr(e, t, { parseWithTs: r }) {
                return ei(e, t, { parser: r ? "__ts_expression" : "__js_expression" }, ea);
            }
            var tn = function (e, t) {
                let r;
                if ("vue" !== t.parser) return;
                let { node: n } = e,
                    a = n.fullName;
                if ("v-for" === a) return tt;
                if ("generic" === a && eV(n.parent, t)) return te;
                let i = eM(n),
                    s = e7(e, t);
                return "#" === (r = n.fullName).charAt(0) ||
                    "slot-scope" === r ||
                    "v-slot" === r ||
                    r.startsWith("v-slot:") ||
                    (function (e, t) {
                        let r = e.parent;
                        if (!eR(r, t)) return !1;
                        let n = r.fullName,
                            a = e.fullName;
                        return ("script" === n && "setup" === a) || ("style" === n && "vars" === a);
                    })(n, t)
                    ? (e) =>
                        (function (e, t, { parseWithTs: r }) {
                            return ei(`function _(${e}) {}`, t, { parser: r ? "babel-ts" : "babel", __isVueBindings: !0 });
                        })(i, e, { parseWithTs: s })
                    : a.startsWith("@") || a.startsWith("v-on:")
                        ? (e) =>
                            (function (e, t, { parseWithTs: r }) {
                                let n;
                                return ((n = e.trim()), /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/.test(n) || /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i.test(n))
                                    ? tr(e, t, { parseWithTs: r })
                                    : ei(e, t, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, ea);
                            })(i, e, { parseWithTs: s })
                        : a.startsWith(":") || a.startsWith("v-bind:")
                            ? (e) =>
                                (function (e, t, { parseWithTs: r }) {
                                    return ei(e, t, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, ea);
                                })(i, e, { parseWithTs: s })
                            : a.startsWith("v-")
                                ? (e) => tr(i, e, { parseWithTs: s })
                                : void 0;
            },
                ta = function (e, t) {
                    let { node: r } = e;
                    if (r.value) {
                        if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(t.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || ("lwc" === t.parser && r.value.startsWith("{") && r.value.endsWith("}")))
                            return [r.rawName, "=", r.value];
                        for (let r of [e5, e9, eX, tn, eK]) {
                            let n = r(e, t);
                            if (n)
                                return (function (e) {
                                    return async (t, r, n, a) => {
                                        let i = await e(t, r, n, a);
                                        if (i) return (i = z(i, (e) => ("string" == typeof e ? h(!1, e, '"', "&quot;") : e))), [n.node.rawName, '="', M(i), '"'];
                                    };
                                })(n);
                        }
                    }
                },
                ti = new Proxy(() => { }, { get: () => ti }),
                ts = function (e) {
                    return Array.isArray(e) && e.length > 0;
                };
            function to(e) {
                return e.sourceSpan.start.offset;
            }
            function tl(e) {
                return e.sourceSpan.end.offset;
            }
            function tc(e, t) {
                return [e.isSelfClosing ? "" : e.lastChild && tv(e.lastChild) ? "" : [tf(e) ? td(e.lastChild, t) : "", th(e, t)], tu(e, t)];
            }
            function tu(e, t) {
                return (e.next ? tg(e.next) : tf(e.parent)) ? "" : [td(e, t), tp(e, t)];
            }
            function tp(e, t) {
                return tv(e) ? th(e.parent, t) : tS(e) ? tk(e.next) : "";
            }
            function th(e, t) {
                if ((ti(!e.isSelfClosing), tm(e, t))) return "";
                switch (e.type) {
                    case "ieConditionalComment":
                        return "<!";
                    case "element":
                        if (e.hasHtmComponentClosingTag) return "<//";
                    default:
                        return `</${e.rawName}`;
                }
            }
            function td(e, t) {
                if (tm(e, t)) return "";
                switch (e.type) {
                    case "ieConditionalComment":
                    case "ieConditionalEndComment":
                        return "[endif]-->";
                    case "ieConditionalStartComment":
                        return "]><!-->";
                    case "interpolation":
                        return "}}";
                    case "angularIcuExpression":
                        return "}";
                    case "element":
                        if (e.isSelfClosing) return "/>";
                    default:
                        return ">";
                }
            }
            function tm(e, t) {
                return !e.isSelfClosing && !e.endSourceSpan && (ev(e) || ef(e.parent, t));
            }
            function tg(e) {
                return e.prev && "docType" !== e.prev.type && "angularControlFlowBlock" !== e.type && !eS(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
            }
            function tf(e) {
                var t;
                return (null == (t = e.lastChild) ? void 0 : t.isTrailingSpaceSensitive) && !e.lastChild.hasTrailingSpaces && !eS(eE(e.lastChild)) && !eN(e);
            }
            function tv(e) {
                return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && eS(eE(e));
            }
            function tS(e) {
                return e.next && !eS(e.next) && eS(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
            }
            function ty(e) {
                return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
            }
            function tb(e, t, r) {
                let { node: n } = e;
                return [
                    t_(n, t),
                    (function (e, t, r) {
                        var n;
                        let a;
                        let { node: i } = e;
                        if (!ts(i.attrs)) return i.isSelfClosing ? " " : "";
                        let s = (null == (n = i.prev) ? void 0 : n.type) === "comment" && !!(a = i.prev.value.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s)) && (!a[1] || a[1].split(/\s+/)),
                            o = "boolean" == typeof s ? () => s : Array.isArray(s) ? (e) => s.includes(e.rawName) : () => !1,
                            l = e.map(({ node: e }) => (o(e) ? j(t.originalText.slice(to(e), tl(e))) : r()), "attrs"),
                            c = "element" === i.type && "script" === i.fullName && 1 === i.attrs.length && "src" === i.attrs[0].fullName && 0 === i.children.length,
                            u = t.singleAttributePerLine && i.attrs.length > 1 && !eR(i, t) ? V : F,
                            p = [I([c ? " " : F, W(u, l)])];
                        return (i.firstChild && ty(i.firstChild)) || (i.isSelfClosing && tf(i.parent)) || c ? p.push(i.isSelfClosing ? " " : "") : p.push(t.bracketSameLine ? (i.isSelfClosing ? " " : "") : i.isSelfClosing ? F : U), p;
                    })(e, t, r),
                    n.isSelfClosing ? "" : n.firstChild && ty(n.firstChild) ? "" : tC(n),
                ];
            }
            function t_(e, t) {
                return e.prev && tS(e.prev) ? "" : [tw(e, t), tk(e)];
            }
            function tw(e, t) {
                return ty(e) ? tC(e.parent) : tg(e) ? td(e.prev, t) : "";
            }
            function tk(e) {
                switch (e.type) {
                    case "ieConditionalComment":
                    case "ieConditionalStartComment":
                        return `<!--[if ${e.condition}`;
                    case "ieConditionalEndComment":
                        return "<!--<!";
                    case "interpolation":
                        return "{{";
                    case "docType":
                        return "html" === e.value ? "<!doctype" : "<!DOCTYPE";
                    case "angularIcuExpression":
                        return "{";
                    case "element":
                        if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
                    default:
                        return `<${e.rawName}`;
                }
            }
            function tC(e) {
                switch ((ti(!e.isSelfClosing), e.type)) {
                    case "ieConditionalComment":
                        return "]>";
                    case "element":
                        if (e.condition) return "><!--<![endif]-->";
                    default:
                        return ">";
                }
            }
            var tT = function (e, t) {
                if (!e.endSourceSpan) return "";
                let r = e.startSourceSpan.end.offset;
                e.firstChild && ty(e.firstChild) && (r -= tC(e).length);
                let n = e.endSourceSpan.start.offset;
                return e.lastChild && tv(e.lastChild) ? (n += th(e, t).length) : tf(e) && (n -= td(e.lastChild, t).length), t.originalText.slice(r, n);
            },
                tx = new Set(["if", "else if", "for", "switch", "case"]),
                tE = null;
            function tL(e) {
                if (null !== tE && (tE.property, 1)) {
                    let e = tE;
                    return (tE = tL.prototype = null), e;
                }
                return (tE = tL.prototype = e ?? Object.create(null)), new tL();
            }
            for (let e = 0; e <= 10; e++) tL();
            var tq = (function (e, t = "type") {
                return (
                    tL(e),
                    function (r) {
                        let n = r[t],
                            a = e[n];
                        if (!Array.isArray(a)) throw Object.assign(Error(`Missing visitor keys for '${n}'.`), { node: r });
                        return a;
                    }
                );
            })({
                "front-matter": [],
                root: ["children"],
                element: ["attrs", "children"],
                ieConditionalComment: ["children"],
                ieConditionalStartComment: [],
                ieConditionalEndComment: [],
                interpolation: ["children"],
                text: ["children"],
                docType: [],
                comment: [],
                attribute: [],
                cdata: [],
                angularControlFlowBlock: ["children", "parameters"],
                angularControlFlowBlockParameters: ["children"],
                angularControlFlowBlockParameter: [],
                angularIcuExpression: ["cases"],
                angularIcuCase: ["expression"],
            });
            function tA(e) {
                return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e);
            }
            var tN = new Map([
                ["if", new Set(["else if", "else"])],
                ["else if", new Set(["else if", "else"])],
                ["for", new Set(["empty"])],
                ["defer", new Set(["placeholder", "error", "loading"])],
                ["placeholder", new Set(["placeholder", "error", "loading"])],
                ["error", new Set(["placeholder", "error", "loading"])],
                ["loading", new Set(["placeholder", "error", "loading"])],
            ]);
            function tD(e, t, r) {
                let n = e.node;
                if (ev(n)) {
                    let e = (function e(t) {
                        let r = tl(t);
                        return "element" === t.type && !t.endSourceSpan && ts(t.children) ? Math.max(r, e($(!1, t.children, -1))) : r;
                    })(n);
                    return [tw(n, t), j(Y.trimEnd(t.originalText.slice(to(n) + (n.prev && tS(n.prev) ? tk(n).length : 0), e - (n.next && tg(n.next) ? td(n, t).length : 0)))), tp(n, t)];
                }
                return r();
            }
            function tI(e, t) {
                return eS(e) && eS(t)
                    ? e.isTrailingSpaceSensitive
                        ? e.hasTrailingSpaces
                            ? ek(t)
                                ? V
                                : F
                            : ""
                        : ek(t)
                            ? V
                            : U
                    : (tS(e) && (ev(t) || t.firstChild || t.isSelfClosing || ("element" === t.type && t.attrs.length > 0))) || ("element" === e.type && e.isSelfClosing && tg(t))
                        ? ""
                        : !t.isLeadingSpaceSensitive || ek(t) || (tg(t) && e.lastChild && tv(e.lastChild) && e.lastChild.lastChild && tv(e.lastChild.lastChild))
                            ? V
                            : t.hasLeadingSpaces
                                ? F
                                : U;
            }
            function tB(e, t, r) {
                let { node: n } = e;
                if (ew(n))
                    return [
                        R,
                        ...e.map((e) => {
                            let n = e.node,
                                a = n.prev ? tI(n.prev, n) : "";
                            return [a ? [a, e_(n.prev) ? V : ""] : "", tD(e, t, r)];
                        }, "children"),
                    ];
                let a = n.children.map(() => Symbol(""));
                return e.map((e, n) => {
                    let i = e.node;
                    if (eS(i)) {
                        if (i.prev && eS(i.prev)) {
                            let n = tI(i.prev, i);
                            if (n) return e_(i.prev) ? [V, V, tD(e, t, r)] : [n, tD(e, t, r)];
                        }
                        return tD(e, t, r);
                    }
                    let s = [],
                        o = [],
                        l = [],
                        c = [],
                        u = i.prev ? tI(i.prev, i) : "",
                        p = i.next ? tI(i, i.next) : "";
                    return (
                        u && (e_(i.prev) ? s.push(V, V) : u === V ? s.push(V) : eS(i.prev) ? o.push(u) : o.push(H("", U, { groupId: a[n - 1] }))),
                        p && (e_(i) ? eS(i.next) && c.push(V, V) : p === V ? eS(i.next) && c.push(V) : l.push(p)),
                        [...s, M([...o, M([tD(e, t, r), ...l], { id: a[n] })]), ...c]
                    );
                }, "children");
            }
            function tM(e) {
                var t, r;
                return !((null == (t = e.next) ? void 0 : t.type) === "angularControlFlowBlock" && null != (r = tN.get(e.name)) && r.has(e.next.name));
            }
            function tP(e) {
                return (e >= 9 && e <= 32) || 160 == e;
            }
            function tH(e) {
                return 48 <= e && e <= 57;
            }
            function tR(e) {
                return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
            }
            function tF(e) {
                return 10 === e || 13 === e;
            }
            function tU(e) {
                return 48 <= e && e <= 55;
            }
            function tV(e) {
                return 39 === e || 34 === e || 96 === e;
            }
            var tO,
                tW = /-+([a-z0-9])/g,
                t$ = class e {
                    constructor(e, t, r, n) {
                        (this.file = e), (this.offset = t), (this.line = r), (this.col = n);
                    }
                    toString() {
                        return null != this.offset ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
                    }
                    moveBy(t) {
                        let r = this.file.content,
                            n = r.length,
                            a = this.offset,
                            i = this.line,
                            s = this.col;
                        for (; a > 0 && t < 0;)
                            if ((a--, t++, 10 == r.charCodeAt(a))) {
                                i--;
                                let e = r.substring(0, a - 1).lastIndexOf("\n");
                                s = e > 0 ? a - e : a;
                            } else s--;
                        for (; a < n && t > 0;) {
                            let e = r.charCodeAt(a);
                            a++, t--, 10 == e ? (i++, (s = 0)) : s++;
                        }
                        return new e(this.file, a, i, s);
                    }
                    getContext(e, t) {
                        let r = this.file.content,
                            n = this.offset;
                        if (null != n) {
                            n > r.length - 1 && (n = r.length - 1);
                            let a = n,
                                i = 0,
                                s = 0;
                            for (
                                ;
                                i < e &&
                                n > 0 &&
                                (n--,
                                    i++,
                                    !(
                                        r[n] ==
                                        `
` && ++s == t
                                    ));

                            );
                            for (
                                i = 0, s = 0;
                                i < e &&
                                a < r.length - 1 &&
                                (a++,
                                    i++,
                                    !(
                                        r[a] ==
                                        `
` && ++s == t
                                    ));

                            );
                            return { before: r.substring(n, this.offset), after: r.substring(this.offset, a + 1) };
                        }
                        return null;
                    }
                },
                tz = class {
                    constructor(e, t) {
                        (this.content = e), (this.url = t);
                    }
                },
                tj = class {
                    constructor(e, t, r = e, n = null) {
                        (this.start = e), (this.end = t), (this.fullStart = r), (this.details = n);
                    }
                    toString() {
                        return this.start.file.content.substring(this.start.offset, this.end.offset);
                    }
                };
            ((t8 = tO || (tO = {}))[(t8.WARNING = 0)] = "WARNING"), (t8[(t8.ERROR = 1)] = "ERROR");
            var tG = class {
                constructor(e, t, r = tO.ERROR) {
                    (this.span = e), (this.msg = t), (this.level = r);
                }
                contextualMessage() {
                    let e = this.span.start.getContext(100, 3);
                    return e ? `${this.msg} ("${e.before}[${tO[this.level]} ->]${e.after}")` : this.msg;
                }
                toString() {
                    let e = this.span.details ? `, ${this.span.details}` : "";
                    return `${this.contextualMessage()}: ${this.span.start}${e}`;
                }
            },
                tK = [
                    function (e) {
                        e.walk((e) => {
                            if (
                                "element" === e.type &&
                                e.tagDefinition.ignoreFirstLf &&
                                e.children.length > 0 &&
                                "text" === e.children[0].type &&
                                e.children[0].value[0] ===
                                `
`
                            ) {
                                let t = e.children[0];
                                1 === t.value.length ? e.removeChild(t) : (t.value = t.value.slice(1));
                            }
                        });
                    },
                    function (e) {
                        let t = (e) => {
                            var t, r;
                            return (
                                "element" === e.type &&
                                (null == (t = e.prev) ? void 0 : t.type) === "ieConditionalStartComment" &&
                                e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset &&
                                (null == (r = e.firstChild) ? void 0 : r.type) === "ieConditionalEndComment" &&
                                e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset
                            );
                        };
                        e.walk((e) => {
                            if (e.children)
                                for (let r = 0; r < e.children.length; r++) {
                                    let n = e.children[r];
                                    if (!t(n)) continue;
                                    let a = n.prev,
                                        i = n.firstChild;
                                    e.removeChild(a), r--;
                                    let s = new tj(a.sourceSpan.start, i.sourceSpan.end),
                                        o = new tj(s.start, n.sourceSpan.end);
                                    (n.condition = a.condition), (n.sourceSpan = o), (n.startSourceSpan = s), n.removeChild(i);
                                }
                        });
                    },
                    function (e) {
                        return (function (e, t, r) {
                            e.walk((e) => {
                                if (e.children)
                                    for (let n = 0; n < e.children.length; n++) {
                                        let a = e.children[n];
                                        if ("text" !== a.type && !t(a)) continue;
                                        "text" !== a.type && ((a.type = "text"), (a.value = r(a)));
                                        let i = a.prev;
                                        !i || "text" !== i.type || ((i.value += a.value), (i.sourceSpan = new tj(i.sourceSpan.start, a.sourceSpan.end)), e.removeChild(a), n--);
                                    }
                            });
                        })(
                            e,
                            (e) => "cdata" === e.type,
                            (e) => `<![CDATA[${e.value}]]>`
                        );
                    },
                    function (e, t) {
                        if ("html" === t.parser) return;
                        let r = /{{(.+?)}}/s;
                        e.walk((e) => {
                            if (e.children && !ey(e))
                                for (let t of e.children) {
                                    if ("text" !== t.type) continue;
                                    let n = t.sourceSpan.start,
                                        a = null,
                                        i = t.value.split(r);
                                    for (let r = 0; r < i.length; r++, n = a) {
                                        let s = i[r];
                                        if (r % 2 == 0) {
                                            (a = n.moveBy(s.length)), s.length > 0 && e.insertChildBefore(t, { type: "text", value: s, sourceSpan: new tj(n, a) });
                                            continue;
                                        }
                                        (a = n.moveBy(s.length + 4)),
                                            e.insertChildBefore(t, { type: "interpolation", sourceSpan: new tj(n, a), children: 0 === s.length ? [] : [{ type: "text", value: s, sourceSpan: new tj(n.moveBy(2), a.moveBy(-2)) }] });
                                    }
                                    e.removeChild(t);
                                }
                        });
                    },
                    function (e) {
                        e.walk((e) => {
                            if (!e.children) return;
                            if (0 === e.children.length || (1 === e.children.length && "text" === e.children[0].type && 0 === Y.trim(e.children[0].value).length)) {
                                (e.hasDanglingSpaces = e.children.length > 0), (e.children = []);
                                return;
                            }
                            let t = ey(e) || "interpolation" === e.type || eb(e),
                                r = eb(e);
                            if (!t)
                                for (let t = 0; t < e.children.length; t++) {
                                    let r = e.children[t];
                                    if ("text" !== r.type) continue;
                                    let { leadingWhitespace: n, text: a, trailingWhitespace: i } = eg(r.value),
                                        s = r.prev,
                                        o = r.next;
                                    a
                                        ? ((r.value = a),
                                            (r.sourceSpan = new tj(r.sourceSpan.start.moveBy(n.length), r.sourceSpan.end.moveBy(-i.length))),
                                            n && (s && (s.hasTrailingSpaces = !0), (r.hasLeadingSpaces = !0)),
                                            i && ((r.hasTrailingSpaces = !0), o && (o.hasLeadingSpaces = !0)))
                                        : (e.removeChild(r), t--, (n || i) && (s && (s.hasTrailingSpaces = !0), o && (o.hasLeadingSpaces = !0)));
                                }
                            (e.isWhitespaceSensitive = t), (e.isIndentationSensitive = r);
                        });
                    },
                    function (e, t) {
                        e.walk((e) => {
                            e.cssDisplay = (function (e, t) {
                                var r;
                                if (eR(e, t)) return "block";
                                if ((null == (r = e.prev) ? void 0 : r.type) === "comment") {
                                    let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
                                    if (t) return t[1];
                                }
                                let n = !1;
                                if ("element" === e.type && "svg" === e.namespace) {
                                    if (
                                        !(function (e, t) {
                                            let r = e;
                                            for (; r;) {
                                                if (t(r)) return !0;
                                                r = r.parent;
                                            }
                                            return !1;
                                        })(e, (e) => "svg:foreignObject" === e.fullName)
                                    )
                                        return "svg" === e.name ? "inline-block" : "block";
                                    n = !0;
                                }
                                switch (t.htmlWhitespaceSensitivity) {
                                    case "strict":
                                        return "inline";
                                    case "ignore":
                                        return "block";
                                    default:
                                        return ("element" === e.type && (!e.namespace || n || eh(e)) && eu[e.name]) || "inline";
                                }
                            })(e, t);
                        });
                    },
                    function (e) {
                        e.walk((e) => {
                            e.isSelfClosing = !e.children || ("element" === e.type && (e.tagDefinition.isVoid || (e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end)));
                        });
                    },
                    function (e, t) {
                        e.walk((e) => {
                            "element" === e.type && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)));
                        });
                    },
                    function (e, t) {
                        e.walk((e) => {
                            let { children: r } = e;
                            if (r) {
                                var n, a;
                                if (0 === r.length) {
                                    e.isDanglingSpaceSensitive = !eA((n = e.cssDisplay)) && "inline-block" !== n && !ey(e);
                                    return;
                                }
                                for (let e of r)
                                    (e.isLeadingSpaceSensitive = (function (e, t) {
                                        var r, n;
                                        let a = (function () {
                                            var r;
                                            return (
                                                !Q(e) &&
                                                "angularControlFlowBlock" !== e.type &&
                                                ((("text" === e.type || "interpolation" === e.type) && !!e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type)) ||
                                                    (!!e.parent &&
                                                        "none" !== e.parent.cssDisplay &&
                                                        (!!eN(e.parent) ||
                                                            !(
                                                                (!e.prev && ("root" === e.parent.type || (eN(e) && e.parent) || ey(e.parent) || eH(e.parent, t) || !(!eA((r = e.parent.cssDisplay)) && "inline-block" !== r))) ||
                                                                (e.prev && eA(e.prev.cssDisplay))
                                                            ))))
                                            );
                                        })();
                                        return a && !e.prev && null != (n = null == (r = e.parent) ? void 0 : r.tagDefinition) && n.ignoreFirstLf ? "interpolation" === e.type : a;
                                    })(e, t)),
                                        (e.isTrailingSpaceSensitive =
                                            !Q(e) &&
                                            "angularControlFlowBlock" !== e.type &&
                                            ((("text" === e.type || "interpolation" === e.type) && !!e.next && ("text" === e.next.type || "interpolation" === e.next.type)) ||
                                                (!!e.parent &&
                                                    "none" !== e.parent.cssDisplay &&
                                                    (!!eN(e.parent) ||
                                                        !(
                                                            (!e.next && ("root" === e.parent.type || (eN(e) && e.parent) || ey(e.parent) || eH(e.parent, t) || !(!eA((a = e.parent.cssDisplay)) && "inline-block" !== a))) ||
                                                            (e.next && eA(e.next.cssDisplay))
                                                        )))));
                                for (let e = 0; e < r.length; e++) {
                                    let t = r[e];
                                    (t.isLeadingSpaceSensitive = (0 === e || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive),
                                        (t.isTrailingSpaceSensitive = (e === r.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive);
                                }
                            }
                        });
                    },
                    function (e) {
                        let t = (e) => {
                            var t, r;
                            return (
                                "element" === e.type &&
                                0 === e.attrs.length &&
                                1 === e.children.length &&
                                "text" === e.firstChild.type &&
                                !Y.hasWhitespaceCharacter(e.children[0].value) &&
                                !e.firstChild.hasLeadingSpaces &&
                                !e.firstChild.hasTrailingSpaces &&
                                e.isLeadingSpaceSensitive &&
                                !e.hasLeadingSpaces &&
                                e.isTrailingSpaceSensitive &&
                                !e.hasTrailingSpaces &&
                                (null == (t = e.prev) ? void 0 : t.type) === "text" &&
                                (null == (r = e.next) ? void 0 : r.type) === "text"
                            );
                        };
                        e.walk((e) => {
                            if (e.children)
                                for (let r = 0; r < e.children.length; r++) {
                                    let n = e.children[r];
                                    if (!t(n)) continue;
                                    let a = n.prev,
                                        i = n.next;
                                    (a.value += `<${n.rawName}>` + n.firstChild.value + `</${n.rawName}>` + i.value),
                                        (a.sourceSpan = new tj(a.sourceSpan.start, i.sourceSpan.end)),
                                        (a.isTrailingSpaceSensitive = i.isTrailingSpaceSensitive),
                                        (a.hasTrailingSpaces = i.hasTrailingSpaces),
                                        e.removeChild(n),
                                        r--,
                                        e.removeChild(i);
                                }
                        });
                    },
                ],
                tX = [
                    {
                        linguistLanguageId: 146,
                        name: "Angular",
                        type: "markup",
                        tmScope: "text.html.basic",
                        aceMode: "html",
                        codemirrorMode: "htmlmixed",
                        codemirrorMimeType: "text/html",
                        color: "#e34c26",
                        aliases: ["xhtml"],
                        extensions: [".component.html"],
                        parsers: ["angular"],
                        vscodeLanguageIds: ["html"],
                        filenames: [],
                    },
                    {
                        linguistLanguageId: 146,
                        name: "HTML",
                        type: "markup",
                        tmScope: "text.html.basic",
                        aceMode: "html",
                        codemirrorMode: "htmlmixed",
                        codemirrorMimeType: "text/html",
                        color: "#e34c26",
                        aliases: ["xhtml"],
                        extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"],
                        parsers: ["html"],
                        vscodeLanguageIds: ["html"],
                    },
                    {
                        linguistLanguageId: 146,
                        name: "Lightning Web Components",
                        type: "markup",
                        tmScope: "text.html.basic",
                        aceMode: "html",
                        codemirrorMode: "htmlmixed",
                        codemirrorMimeType: "text/html",
                        color: "#e34c26",
                        aliases: ["xhtml"],
                        extensions: [],
                        parsers: ["lwc"],
                        vscodeLanguageIds: ["html"],
                        filenames: [],
                    },
                    { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] },
                ],
                tY = "HTML",
                tJ = {
                    bracketSameLine: { category: "Common", type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." },
                    htmlWhitespaceSensitivity: {
                        category: tY,
                        type: "choice",
                        default: "css",
                        description: "How to handle whitespaces in HTML.",
                        choices: [
                            { value: "css", description: "Respect the default value of CSS display property." },
                            { value: "strict", description: "Whitespaces are considered sensitive." },
                            { value: "ignore", description: "Whitespaces are considered insensitive." },
                        ],
                    },
                    singleAttributePerLine: { category: "Common", type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." },
                    vueIndentScriptAndStyle: { category: tY, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." },
                },
                tQ = {};
            s(tQ, { angular: () => nu, html: () => nc, lwc: () => nh, vue: () => np }),
                ((t7 = ra || (ra = {}))[(t7.Emulated = 0)] = "Emulated"),
                (t7[(t7.None = 2)] = "None"),
                (t7[(t7.ShadowDom = 3)] = "ShadowDom"),
                ((re = ri || (ri = {}))[(re.OnPush = 0)] = "OnPush"),
                (re[(re.Default = 1)] = "Default");
            var tZ = { name: "custom-elements" },
                t0 = "no-errors-schema";
            function t1(e) {
                if (":" != e[0]) return [null, e];
                let t = e.indexOf(":", 1);
                if (-1 === t) throw Error(`Unsupported format "${e}" expecting ":namespace:name"`);
                return [e.slice(1, t), e.slice(t + 1)];
            }
            function t2(e) {
                return "ng-container" === t1(e)[1];
            }
            function t3(e) {
                return "ng-content" === t1(e)[1];
            }
            function t4(e) {
                return null === e ? null : t1(e)[0];
            }
            function t6(e, t) {
                return e ? `:${e}:${t}` : t;
            }
            function t5() {
                return (
                    rc ||
                    ((rc = {}),
                        t9(rs.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]),
                        t9(rs.STYLE, ["*|style"]),
                        t9(rs.URL, [
                            "*|formAction",
                            "area|href",
                            "area|ping",
                            "audio|src",
                            "a|href",
                            "a|ping",
                            "blockquote|cite",
                            "body|background",
                            "del|cite",
                            "form|action",
                            "img|src",
                            "input|src",
                            "ins|cite",
                            "q|cite",
                            "source|src",
                            "track|src",
                            "video|poster",
                            "video|src",
                        ]),
                        t9(rs.RESOURCE_URL, [
                            "applet|code",
                            "applet|codebase",
                            "base|href",
                            "embed|src",
                            "frame|src",
                            "head|profile",
                            "html|manifest",
                            "iframe|src",
                            "link|href",
                            "media|src",
                            "object|codebase",
                            "object|data",
                            "script|src",
                        ])),
                    rc
                );
            }
            function t9(e, t) {
                for (let r of t) rc[r.toLowerCase()] = e;
            }
            ((rt = rs || (rs = {}))[(rt.NONE = 0)] = "NONE"),
                (rt[(rt.HTML = 1)] = "HTML"),
                (rt[(rt.STYLE = 2)] = "STYLE"),
                (rt[(rt.SCRIPT = 3)] = "SCRIPT"),
                (rt[(rt.URL = 4)] = "URL"),
                (rt[(rt.RESOURCE_URL = 5)] = "RESOURCE_URL"),
                ((rr = ro || (ro = {}))[(rr.Error = 0)] = "Error"),
                (rr[(rr.Warning = 1)] = "Warning"),
                (rr[(rr.Ignore = 2)] = "Ignore"),
                ((rn = rl || (rl = {}))[(rn.RAW_TEXT = 0)] = "RAW_TEXT"),
                (rn[(rn.ESCAPABLE_RAW_TEXT = 1)] = "ESCAPABLE_RAW_TEXT"),
                (rn[(rn.PARSABLE_DATA = 2)] = "PARSABLE_DATA");
            var t8,
                t7,
                re,
                rt,
                rr,
                rn,
                ra,
                ri,
                rs,
                ro,
                rl,
                rc,
                ru,
                rp,
                rh = class { },
                rd = [
                    "[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored",
                    "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
                    "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
                    "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",
                    ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
                    ":svg:graphics^:svg:|",
                    ":svg:animation^:svg:|*begin,*end,*repeat",
                    ":svg:geometry^:svg:|",
                    ":svg:componentTransferFunction^:svg:|",
                    ":svg:gradient^:svg:|",
                    ":svg:textContent^:svg:graphics|",
                    ":svg:textPositioning^:svg:textContent|",
                    "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username",
                    "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username",
                    "audio^media|",
                    "br^[HTMLElement]|clear",
                    "base^[HTMLElement]|href,target",
                    "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink",
                    "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value",
                    "canvas^[HTMLElement]|#height,#width",
                    "content^[HTMLElement]|select",
                    "dl^[HTMLElement]|!compact",
                    "data^[HTMLElement]|value",
                    "datalist^[HTMLElement]|",
                    "details^[HTMLElement]|!open",
                    "dialog^[HTMLElement]|!open,returnValue",
                    "dir^[HTMLElement]|!compact",
                    "div^[HTMLElement]|align",
                    "embed^[HTMLElement]|align,height,name,src,type,width",
                    "fieldset^[HTMLElement]|!disabled,name",
                    "font^[HTMLElement]|color,face,size",
                    "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target",
                    "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src",
                    "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows",
                    "hr^[HTMLElement]|align,color,!noShade,size,width",
                    "head^[HTMLElement]|",
                    "h1,h2,h3,h4,h5,h6^[HTMLElement]|align",
                    "html^[HTMLElement]|version",
                    "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width",
                    "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width",
                    "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width",
                    "li^[HTMLElement]|type,#value",
                    "label^[HTMLElement]|htmlFor",
                    "legend^[HTMLElement]|align",
                    "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type",
                    "map^[HTMLElement]|name",
                    "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width",
                    "menu^[HTMLElement]|!compact",
                    "meta^[HTMLElement]|content,httpEquiv,media,name,scheme",
                    "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value",
                    "ins,del^[HTMLElement]|cite,dateTime",
                    "ol^[HTMLElement]|!compact,!reversed,#start,type",
                    "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width",
                    "optgroup^[HTMLElement]|!disabled,label",
                    "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value",
                    "output^[HTMLElement]|defaultValue,%htmlFor,name,value",
                    "p^[HTMLElement]|align",
                    "param^[HTMLElement]|name,type,value,valueType",
                    "picture^[HTMLElement]|",
                    "pre^[HTMLElement]|#width",
                    "progress^[HTMLElement]|#max,#value",
                    "q,blockquote,cite^[HTMLElement]|",
                    "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type",
                    "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value",
                    "slot^[HTMLElement]|name",
                    "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width",
                    "span^[HTMLElement]|",
                    "style^[HTMLElement]|!disabled,media,type",
                    "caption^[HTMLElement]|align",
                    "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width",
                    "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width",
                    "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width",
                    "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign",
                    "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign",
                    "template^[HTMLElement]|",
                    "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap",
                    "time^[HTMLElement]|dateTime",
                    "title^[HTMLElement]|text",
                    "track^[HTMLElement]|!default,kind,label,src,srclang",
                    "ul^[HTMLElement]|!compact,type",
                    "unknown^[HTMLElement]|",
                    "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",
                    ":svg:a^:svg:graphics|",
                    ":svg:animate^:svg:animation|",
                    ":svg:animateMotion^:svg:animation|",
                    ":svg:animateTransform^:svg:animation|",
                    ":svg:circle^:svg:geometry|",
                    ":svg:clipPath^:svg:graphics|",
                    ":svg:defs^:svg:graphics|",
                    ":svg:desc^:svg:|",
                    ":svg:discard^:svg:|",
                    ":svg:ellipse^:svg:geometry|",
                    ":svg:feBlend^:svg:|",
                    ":svg:feColorMatrix^:svg:|",
                    ":svg:feComponentTransfer^:svg:|",
                    ":svg:feComposite^:svg:|",
                    ":svg:feConvolveMatrix^:svg:|",
                    ":svg:feDiffuseLighting^:svg:|",
                    ":svg:feDisplacementMap^:svg:|",
                    ":svg:feDistantLight^:svg:|",
                    ":svg:feDropShadow^:svg:|",
                    ":svg:feFlood^:svg:|",
                    ":svg:feFuncA^:svg:componentTransferFunction|",
                    ":svg:feFuncB^:svg:componentTransferFunction|",
                    ":svg:feFuncG^:svg:componentTransferFunction|",
                    ":svg:feFuncR^:svg:componentTransferFunction|",
                    ":svg:feGaussianBlur^:svg:|",
                    ":svg:feImage^:svg:|",
                    ":svg:feMerge^:svg:|",
                    ":svg:feMergeNode^:svg:|",
                    ":svg:feMorphology^:svg:|",
                    ":svg:feOffset^:svg:|",
                    ":svg:fePointLight^:svg:|",
                    ":svg:feSpecularLighting^:svg:|",
                    ":svg:feSpotLight^:svg:|",
                    ":svg:feTile^:svg:|",
                    ":svg:feTurbulence^:svg:|",
                    ":svg:filter^:svg:|",
                    ":svg:foreignObject^:svg:graphics|",
                    ":svg:g^:svg:graphics|",
                    ":svg:image^:svg:graphics|decoding",
                    ":svg:line^:svg:geometry|",
                    ":svg:linearGradient^:svg:gradient|",
                    ":svg:mpath^:svg:|",
                    ":svg:marker^:svg:|",
                    ":svg:mask^:svg:|",
                    ":svg:metadata^:svg:|",
                    ":svg:path^:svg:geometry|",
                    ":svg:pattern^:svg:|",
                    ":svg:polygon^:svg:geometry|",
                    ":svg:polyline^:svg:geometry|",
                    ":svg:radialGradient^:svg:gradient|",
                    ":svg:rect^:svg:geometry|",
                    ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",
                    ":svg:script^:svg:|type",
                    ":svg:set^:svg:animation|",
                    ":svg:stop^:svg:|",
                    ":svg:style^:svg:|!disabled,media,title,type",
                    ":svg:switch^:svg:graphics|",
                    ":svg:symbol^:svg:|",
                    ":svg:tspan^:svg:textPositioning|",
                    ":svg:text^:svg:textPositioning|",
                    ":svg:textPath^:svg:textContent|",
                    ":svg:title^:svg:|",
                    ":svg:use^:svg:graphics|",
                    ":svg:view^:svg:|#zoomAndPan",
                    "data^[HTMLElement]|value",
                    "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name",
                    "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default",
                    "summary^[HTMLElement]|",
                    "time^[HTMLElement]|dateTime",
                    ":svg:cursor^:svg:|",
                ],
                rm = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" })),
                rg = Array.from(rm).reduce((e, [t, r]) => (e.set(t, r), e), new Map()),
                rf = class extends rh {
                    constructor() {
                        super(),
                            (this._schema = new Map()),
                            (this._eventSchema = new Map()),
                            rd.forEach((e) => {
                                let t = new Map(),
                                    r = new Set(),
                                    [n, a] = e.split("|"),
                                    i = a.split(","),
                                    [s, o] = n.split("^");
                                s.split(",").forEach((e) => {
                                    this._schema.set(e.toLowerCase(), t), this._eventSchema.set(e.toLowerCase(), r);
                                });
                                let l = o && this._schema.get(o.toLowerCase());
                                if (l) {
                                    for (let [e, r] of l) t.set(e, r);
                                    for (let e of this._eventSchema.get(o.toLowerCase())) r.add(e);
                                }
                                i.forEach((e) => {
                                    if (e.length > 0)
                                        switch (e[0]) {
                                            case "*":
                                                r.add(e.substring(1));
                                                break;
                                            case "!":
                                                t.set(e.substring(1), "boolean");
                                                break;
                                            case "#":
                                                t.set(e.substring(1), "number");
                                                break;
                                            case "%":
                                                t.set(e.substring(1), "object");
                                                break;
                                            default:
                                                t.set(e, "string");
                                        }
                                });
                            });
                    }
                    hasProperty(e, t, r) {
                        if (r.some((e) => e.name === t0)) return !0;
                        if (e.indexOf("-") > -1) {
                            if (t2(e) || t3(e)) return !1;
                            if (r.some((e) => e.name === tZ.name)) return !0;
                        }
                        return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
                    }
                    hasElement(e, t) {
                        return !!(t.some((e) => e.name === t0) || (e.indexOf("-") > -1 && (t2(e) || t3(e) || t.some((e) => e.name === tZ.name)))) || this._schema.has(e.toLowerCase());
                    }
                    securityContext(e, t, r) {
                        r && (t = this.getMappedPropName(t)), (e = e.toLowerCase()), (t = t.toLowerCase());
                        let n = t5()[e + "|" + t];
                        return n || (n = t5()["*|" + t]) || rs.NONE;
                    }
                    getMappedPropName(e) {
                        return rm.get(e) ?? e;
                    }
                    getDefaultComponentElementName() {
                        return "ng-component";
                    }
                    validateProperty(e) {
                        return e.toLowerCase().startsWith("on")
                            ? {
                                error: !0,
                                msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`,
                            }
                            : { error: !1 };
                    }
                    validateAttribute(e) {
                        return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: !1 };
                    }
                    allKnownElementNames() {
                        return Array.from(this._schema.keys());
                    }
                    allKnownAttributesOfElement(e) {
                        return Array.from((this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).keys()).map((e) => rg.get(e) ?? e);
                    }
                    allKnownEventsOfElement(e) {
                        return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
                    }
                    normalizeAnimationStyleProperty(e) {
                        return e.replace(tW, (...e) => e[1].toUpperCase());
                    }
                    normalizeAnimationStyleValue(e, t, r) {
                        let n = "",
                            a = r.toString().trim(),
                            i = null;
                        if (
                            (function (e) {
                                switch (e) {
                                    case "width":
                                    case "height":
                                    case "minWidth":
                                    case "minHeight":
                                    case "maxWidth":
                                    case "maxHeight":
                                    case "left":
                                    case "top":
                                    case "bottom":
                                    case "right":
                                    case "fontSize":
                                    case "outlineWidth":
                                    case "outlineOffset":
                                    case "paddingTop":
                                    case "paddingLeft":
                                    case "paddingBottom":
                                    case "paddingRight":
                                    case "marginTop":
                                    case "marginLeft":
                                    case "marginBottom":
                                    case "marginRight":
                                    case "borderRadius":
                                    case "borderWidth":
                                    case "borderTopWidth":
                                    case "borderLeftWidth":
                                    case "borderRightWidth":
                                    case "borderBottomWidth":
                                    case "textIndent":
                                        return !0;
                                    default:
                                        return !1;
                                }
                            })(e) &&
                            0 !== r &&
                            "0" !== r
                        ) {
                            if ("number" == typeof r) n = "px";
                            else {
                                let e = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
                                e && 0 == e[1].length && (i = `Please provide a CSS unit value for ${t}:${r}`);
                            }
                        }
                        return { error: i, value: a + n };
                    }
                },
                rv = class {
                    constructor({
                        closedByChildren: e,
                        implicitNamespacePrefix: t,
                        contentType: r = rl.PARSABLE_DATA,
                        closedByParent: n = !1,
                        isVoid: a = !1,
                        ignoreFirstLf: i = !1,
                        preventNamespaceInheritance: s = !1,
                        canSelfClose: o = !1,
                    } = {}) {
                        (this.closedByChildren = {}),
                            (this.closedByParent = !1),
                            e && e.length > 0 && e.forEach((e) => (this.closedByChildren[e] = !0)),
                            (this.isVoid = a),
                            (this.closedByParent = n || a),
                            (this.implicitNamespacePrefix = t || null),
                            (this.contentType = r),
                            (this.ignoreFirstLf = i),
                            (this.preventNamespaceInheritance = s),
                            (this.canSelfClose = o ?? a);
                    }
                    isClosedByChild(e) {
                        return this.isVoid || e.toLowerCase() in this.closedByChildren;
                    }
                    getContentType(e) {
                        return "object" == typeof this.contentType ? (void 0 === e ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
                    }
                };
            function rS(e) {
                return (
                    rp ||
                    ((ru = new rv({ canSelfClose: !0 })),
                        (rp = Object.assign(Object.create(null), {
                            base: new rv({ isVoid: !0 }),
                            meta: new rv({ isVoid: !0 }),
                            area: new rv({ isVoid: !0 }),
                            embed: new rv({ isVoid: !0 }),
                            link: new rv({ isVoid: !0 }),
                            img: new rv({ isVoid: !0 }),
                            input: new rv({ isVoid: !0 }),
                            param: new rv({ isVoid: !0 }),
                            hr: new rv({ isVoid: !0 }),
                            br: new rv({ isVoid: !0 }),
                            source: new rv({ isVoid: !0 }),
                            track: new rv({ isVoid: !0 }),
                            wbr: new rv({ isVoid: !0 }),
                            p: new rv({
                                closedByChildren: [
                                    "address",
                                    "article",
                                    "aside",
                                    "blockquote",
                                    "div",
                                    "dl",
                                    "fieldset",
                                    "footer",
                                    "form",
                                    "h1",
                                    "h2",
                                    "h3",
                                    "h4",
                                    "h5",
                                    "h6",
                                    "header",
                                    "hgroup",
                                    "hr",
                                    "main",
                                    "nav",
                                    "ol",
                                    "p",
                                    "pre",
                                    "section",
                                    "table",
                                    "ul",
                                ],
                                closedByParent: !0,
                            }),
                            thead: new rv({ closedByChildren: ["tbody", "tfoot"] }),
                            tbody: new rv({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }),
                            tfoot: new rv({ closedByChildren: ["tbody"], closedByParent: !0 }),
                            tr: new rv({ closedByChildren: ["tr"], closedByParent: !0 }),
                            td: new rv({ closedByChildren: ["td", "th"], closedByParent: !0 }),
                            th: new rv({ closedByChildren: ["td", "th"], closedByParent: !0 }),
                            col: new rv({ isVoid: !0 }),
                            svg: new rv({ implicitNamespacePrefix: "svg" }),
                            foreignObject: new rv({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }),
                            math: new rv({ implicitNamespacePrefix: "math" }),
                            li: new rv({ closedByChildren: ["li"], closedByParent: !0 }),
                            dt: new rv({ closedByChildren: ["dt", "dd"] }),
                            dd: new rv({ closedByChildren: ["dt", "dd"], closedByParent: !0 }),
                            rb: new rv({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
                            rt: new rv({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
                            rtc: new rv({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }),
                            rp: new rv({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
                            optgroup: new rv({ closedByChildren: ["optgroup"], closedByParent: !0 }),
                            option: new rv({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }),
                            pre: new rv({ ignoreFirstLf: !0 }),
                            listing: new rv({ ignoreFirstLf: !0 }),
                            style: new rv({ contentType: rl.RAW_TEXT }),
                            script: new rv({ contentType: rl.RAW_TEXT }),
                            title: new rv({ contentType: { default: rl.ESCAPABLE_RAW_TEXT, svg: rl.PARSABLE_DATA } }),
                            textarea: new rv({ contentType: rl.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }),
                        })),
                        new rf().allKnownElementNames().forEach((e) => {
                            rp[e] || null !== t4(e) || (rp[e] = new rv({ canSelfClose: !1 }));
                        })),
                    rp[e] ?? ru
                );
            }
            var ry = class {
                constructor(e, t) {
                    (this.sourceSpan = e), (this.i18n = t);
                }
            },
                rb = class extends ry {
                    constructor(e, t, r, n) {
                        super(t, n), (this.value = e), (this.tokens = r), (this.type = "text");
                    }
                    visit(e, t) {
                        return e.visitText(this, t);
                    }
                },
                r_ = class extends ry {
                    constructor(e, t, r, n) {
                        super(t, n), (this.value = e), (this.tokens = r), (this.type = "cdata");
                    }
                    visit(e, t) {
                        return e.visitCdata(this, t);
                    }
                },
                rw = class extends ry {
                    constructor(e, t, r, n, a, i) {
                        super(n, i), (this.switchValue = e), (this.type = t), (this.cases = r), (this.switchValueSourceSpan = a);
                    }
                    visit(e, t) {
                        return e.visitExpansion(this, t);
                    }
                },
                rk = class {
                    constructor(e, t, r, n, a) {
                        (this.value = e), (this.expression = t), (this.sourceSpan = r), (this.valueSourceSpan = n), (this.expSourceSpan = a), (this.type = "expansionCase");
                    }
                    visit(e, t) {
                        return e.visitExpansionCase(this, t);
                    }
                },
                rC = class extends ry {
                    constructor(e, t, r, n, a, i, s) {
                        super(r, s), (this.name = e), (this.value = t), (this.keySpan = n), (this.valueSpan = a), (this.valueTokens = i), (this.type = "attribute");
                    }
                    visit(e, t) {
                        return e.visitAttribute(this, t);
                    }
                    get nameSpan() {
                        return this.keySpan;
                    }
                },
                rT = class extends ry {
                    constructor(e, t, r, n, a, i = null, s = null, o) {
                        super(n, o), (this.name = e), (this.attrs = t), (this.children = r), (this.startSourceSpan = a), (this.endSourceSpan = i), (this.nameSpan = s), (this.type = "element");
                    }
                    visit(e, t) {
                        return e.visitElement(this, t);
                    }
                },
                rx = class {
                    constructor(e, t) {
                        (this.value = e), (this.sourceSpan = t), (this.type = "comment");
                    }
                    visit(e, t) {
                        return e.visitComment(this, t);
                    }
                },
                rE = class {
                    constructor(e, t) {
                        (this.value = e), (this.sourceSpan = t), (this.type = "docType");
                    }
                    visit(e, t) {
                        return e.visitDocType(this, t);
                    }
                },
                rL = class {
                    constructor(e, t, r, n, a, i = null) {
                        (this.name = e), (this.parameters = t), (this.children = r), (this.sourceSpan = n), (this.startSourceSpan = a), (this.endSourceSpan = i), (this.type = "block");
                    }
                    visit(e, t) {
                        return e.visitBlock(this, t);
                    }
                },
                rq = class {
                    constructor(e, t) {
                        (this.expression = e), (this.sourceSpan = t), (this.type = "blockParameter"), (this.startSourceSpan = null), (this.endSourceSpan = null);
                    }
                    visit(e, t) {
                        return e.visitBlockParameter(this, t);
                    }
                };
            function rA(e, t, r = null) {
                let n = [],
                    a = e.visit ? (t) => e.visit(t, r) || t.visit(e, r) : (t) => t.visit(e, r);
                return (
                    t.forEach((e) => {
                        let t = a(e);
                        t && n.push(t);
                    }),
                    n
                );
            }
            var rN = class {
                constructor() { }
                visitElement(e, t) {
                    this.visitChildren(t, (t) => {
                        t(e.attrs), t(e.children);
                    });
                }
                visitAttribute(e, t) { }
                visitText(e, t) { }
                visitCdata(e, t) { }
                visitComment(e, t) { }
                visitDocType(e, t) { }
                visitExpansion(e, t) {
                    return this.visitChildren(t, (t) => {
                        t(e.cases);
                    });
                }
                visitExpansionCase(e, t) { }
                visitBlock(e, t) {
                    this.visitChildren(t, (t) => {
                        t(e.parameters), t(e.children);
                    });
                }
                visitBlockParameter(e, t) { }
                visitChildren(e, t) {
                    let r = [],
                        n = this;
                    return (
                        t(function (t) {
                            t && r.push(rA(n, t, e));
                        }),
                        Array.prototype.concat.apply([], r)
                    );
                }
            },
                rD = {
                    AElig: "\xc6",
                    AMP: "&",
                    amp: "&",
                    Aacute: "\xc1",
                    Abreve: "Ă",
                    Acirc: "\xc2",
                    Acy: "А",
                    Afr: "\uD835\uDD04",
                    Agrave: "\xc0",
                    Alpha: "Α",
                    Amacr: "Ā",
                    And: "⩓",
                    Aogon: "Ą",
                    Aopf: "\uD835\uDD38",
                    ApplyFunction: "⁡",
                    af: "⁡",
                    Aring: "\xc5",
                    angst: "\xc5",
                    Ascr: "\uD835\uDC9C",
                    Assign: "≔",
                    colone: "≔",
                    coloneq: "≔",
                    Atilde: "\xc3",
                    Auml: "\xc4",
                    Backslash: "∖",
                    setminus: "∖",
                    setmn: "∖",
                    smallsetminus: "∖",
                    ssetmn: "∖",
                    Barv: "⫧",
                    Barwed: "⌆",
                    doublebarwedge: "⌆",
                    Bcy: "Б",
                    Because: "∵",
                    becaus: "∵",
                    because: "∵",
                    Bernoullis: "ℬ",
                    Bscr: "ℬ",
                    bernou: "ℬ",
                    Beta: "Β",
                    Bfr: "\uD835\uDD05",
                    Bopf: "\uD835\uDD39",
                    Breve: "˘",
                    breve: "˘",
                    Bumpeq: "≎",
                    HumpDownHump: "≎",
                    bump: "≎",
                    CHcy: "Ч",
                    COPY: "\xa9",
                    copy: "\xa9",
                    Cacute: "Ć",
                    Cap: "⋒",
                    CapitalDifferentialD: "ⅅ",
                    DD: "ⅅ",
                    Cayleys: "ℭ",
                    Cfr: "ℭ",
                    Ccaron: "Č",
                    Ccedil: "\xc7",
                    Ccirc: "Ĉ",
                    Cconint: "∰",
                    Cdot: "Ċ",
                    Cedilla: "\xb8",
                    cedil: "\xb8",
                    CenterDot: "\xb7",
                    centerdot: "\xb7",
                    middot: "\xb7",
                    Chi: "Χ",
                    CircleDot: "⊙",
                    odot: "⊙",
                    CircleMinus: "⊖",
                    ominus: "⊖",
                    CirclePlus: "⊕",
                    oplus: "⊕",
                    CircleTimes: "⊗",
                    otimes: "⊗",
                    ClockwiseContourIntegral: "∲",
                    cwconint: "∲",
                    CloseCurlyDoubleQuote: "”",
                    rdquo: "”",
                    rdquor: "”",
                    CloseCurlyQuote: "’",
                    rsquo: "’",
                    rsquor: "’",
                    Colon: "∷",
                    Proportion: "∷",
                    Colone: "⩴",
                    Congruent: "≡",
                    equiv: "≡",
                    Conint: "∯",
                    DoubleContourIntegral: "∯",
                    ContourIntegral: "∮",
                    conint: "∮",
                    oint: "∮",
                    Copf: "ℂ",
                    complexes: "ℂ",
                    Coproduct: "∐",
                    coprod: "∐",
                    CounterClockwiseContourIntegral: "∳",
                    awconint: "∳",
                    Cross: "⨯",
                    Cscr: "\uD835\uDC9E",
                    Cup: "⋓",
                    CupCap: "≍",
                    asympeq: "≍",
                    DDotrahd: "⤑",
                    DJcy: "Ђ",
                    DScy: "Ѕ",
                    DZcy: "Џ",
                    Dagger: "‡",
                    ddagger: "‡",
                    Darr: "↡",
                    Dashv: "⫤",
                    DoubleLeftTee: "⫤",
                    Dcaron: "Ď",
                    Dcy: "Д",
                    Del: "∇",
                    nabla: "∇",
                    Delta: "Δ",
                    Dfr: "\uD835\uDD07",
                    DiacriticalAcute: "\xb4",
                    acute: "\xb4",
                    DiacriticalDot: "˙",
                    dot: "˙",
                    DiacriticalDoubleAcute: "˝",
                    dblac: "˝",
                    DiacriticalGrave: "`",
                    grave: "`",
                    DiacriticalTilde: "˜",
                    tilde: "˜",
                    Diamond: "⋄",
                    diam: "⋄",
                    diamond: "⋄",
                    DifferentialD: "ⅆ",
                    dd: "ⅆ",
                    Dopf: "\uD835\uDD3B",
                    Dot: "\xa8",
                    DoubleDot: "\xa8",
                    die: "\xa8",
                    uml: "\xa8",
                    DotDot: "⃜",
                    DotEqual: "≐",
                    doteq: "≐",
                    esdot: "≐",
                    DoubleDownArrow: "⇓",
                    Downarrow: "⇓",
                    dArr: "⇓",
                    DoubleLeftArrow: "⇐",
                    Leftarrow: "⇐",
                    lArr: "⇐",
                    DoubleLeftRightArrow: "⇔",
                    Leftrightarrow: "⇔",
                    hArr: "⇔",
                    iff: "⇔",
                    DoubleLongLeftArrow: "⟸",
                    Longleftarrow: "⟸",
                    xlArr: "⟸",
                    DoubleLongLeftRightArrow: "⟺",
                    Longleftrightarrow: "⟺",
                    xhArr: "⟺",
                    DoubleLongRightArrow: "⟹",
                    Longrightarrow: "⟹",
                    xrArr: "⟹",
                    DoubleRightArrow: "⇒",
                    Implies: "⇒",
                    Rightarrow: "⇒",
                    rArr: "⇒",
                    DoubleRightTee: "⊨",
                    vDash: "⊨",
                    DoubleUpArrow: "⇑",
                    Uparrow: "⇑",
                    uArr: "⇑",
                    DoubleUpDownArrow: "⇕",
                    Updownarrow: "⇕",
                    vArr: "⇕",
                    DoubleVerticalBar: "∥",
                    par: "∥",
                    parallel: "∥",
                    shortparallel: "∥",
                    spar: "∥",
                    DownArrow: "↓",
                    ShortDownArrow: "↓",
                    darr: "↓",
                    downarrow: "↓",
                    DownArrowBar: "⤓",
                    DownArrowUpArrow: "⇵",
                    duarr: "⇵",
                    DownBreve: "̑",
                    DownLeftRightVector: "⥐",
                    DownLeftTeeVector: "⥞",
                    DownLeftVector: "↽",
                    leftharpoondown: "↽",
                    lhard: "↽",
                    DownLeftVectorBar: "⥖",
                    DownRightTeeVector: "⥟",
                    DownRightVector: "⇁",
                    rhard: "⇁",
                    rightharpoondown: "⇁",
                    DownRightVectorBar: "⥗",
                    DownTee: "⊤",
                    top: "⊤",
                    DownTeeArrow: "↧",
                    mapstodown: "↧",
                    Dscr: "\uD835\uDC9F",
                    Dstrok: "Đ",
                    ENG: "Ŋ",
                    ETH: "\xd0",
                    Eacute: "\xc9",
                    Ecaron: "Ě",
                    Ecirc: "\xca",
                    Ecy: "Э",
                    Edot: "Ė",
                    Efr: "\uD835\uDD08",
                    Egrave: "\xc8",
                    Element: "∈",
                    in: "∈",
                    isin: "∈",
                    isinv: "∈",
                    Emacr: "Ē",
                    EmptySmallSquare: "◻",
                    EmptyVerySmallSquare: "▫",
                    Eogon: "Ę",
                    Eopf: "\uD835\uDD3C",
                    Epsilon: "Ε",
                    Equal: "⩵",
                    EqualTilde: "≂",
                    eqsim: "≂",
                    esim: "≂",
                    Equilibrium: "⇌",
                    rightleftharpoons: "⇌",
                    rlhar: "⇌",
                    Escr: "ℰ",
                    expectation: "ℰ",
                    Esim: "⩳",
                    Eta: "Η",
                    Euml: "\xcb",
                    Exists: "∃",
                    exist: "∃",
                    ExponentialE: "ⅇ",
                    ee: "ⅇ",
                    exponentiale: "ⅇ",
                    Fcy: "Ф",
                    Ffr: "\uD835\uDD09",
                    FilledSmallSquare: "◼",
                    FilledVerySmallSquare: "▪",
                    blacksquare: "▪",
                    squarf: "▪",
                    squf: "▪",
                    Fopf: "\uD835\uDD3D",
                    ForAll: "∀",
                    forall: "∀",
                    Fouriertrf: "ℱ",
                    Fscr: "ℱ",
                    GJcy: "Ѓ",
                    GT: ">",
                    gt: ">",
                    Gamma: "Γ",
                    Gammad: "Ϝ",
                    Gbreve: "Ğ",
                    Gcedil: "Ģ",
                    Gcirc: "Ĝ",
                    Gcy: "Г",
                    Gdot: "Ġ",
                    Gfr: "\uD835\uDD0A",
                    Gg: "⋙",
                    ggg: "⋙",
                    Gopf: "\uD835\uDD3E",
                    GreaterEqual: "≥",
                    ge: "≥",
                    geq: "≥",
                    GreaterEqualLess: "⋛",
                    gel: "⋛",
                    gtreqless: "⋛",
                    GreaterFullEqual: "≧",
                    gE: "≧",
                    geqq: "≧",
                    GreaterGreater: "⪢",
                    GreaterLess: "≷",
                    gl: "≷",
                    gtrless: "≷",
                    GreaterSlantEqual: "⩾",
                    geqslant: "⩾",
                    ges: "⩾",
                    GreaterTilde: "≳",
                    gsim: "≳",
                    gtrsim: "≳",
                    Gscr: "\uD835\uDCA2",
                    Gt: "≫",
                    NestedGreaterGreater: "≫",
                    gg: "≫",
                    HARDcy: "Ъ",
                    Hacek: "ˇ",
                    caron: "ˇ",
                    Hat: "^",
                    Hcirc: "Ĥ",
                    Hfr: "ℌ",
                    Poincareplane: "ℌ",
                    HilbertSpace: "ℋ",
                    Hscr: "ℋ",
                    hamilt: "ℋ",
                    Hopf: "ℍ",
                    quaternions: "ℍ",
                    HorizontalLine: "─",
                    boxh: "─",
                    Hstrok: "Ħ",
                    HumpEqual: "≏",
                    bumpe: "≏",
                    bumpeq: "≏",
                    IEcy: "Е",
                    IJlig: "Ĳ",
                    IOcy: "Ё",
                    Iacute: "\xcd",
                    Icirc: "\xce",
                    Icy: "И",
                    Idot: "İ",
                    Ifr: "ℑ",
                    Im: "ℑ",
                    image: "ℑ",
                    imagpart: "ℑ",
                    Igrave: "\xcc",
                    Imacr: "Ī",
                    ImaginaryI: "ⅈ",
                    ii: "ⅈ",
                    Int: "∬",
                    Integral: "∫",
                    int: "∫",
                    Intersection: "⋂",
                    bigcap: "⋂",
                    xcap: "⋂",
                    InvisibleComma: "⁣",
                    ic: "⁣",
                    InvisibleTimes: "⁢",
                    it: "⁢",
                    Iogon: "Į",
                    Iopf: "\uD835\uDD40",
                    Iota: "Ι",
                    Iscr: "ℐ",
                    imagline: "ℐ",
                    Itilde: "Ĩ",
                    Iukcy: "І",
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
                    LT: "<",
                    lt: "<",
                    Lacute: "Ĺ",
                    Lambda: "Λ",
                    Lang: "⟪",
                    Laplacetrf: "ℒ",
                    Lscr: "ℒ",
                    lagran: "ℒ",
                    Larr: "↞",
                    twoheadleftarrow: "↞",
                    Lcaron: "Ľ",
                    Lcedil: "Ļ",
                    Lcy: "Л",
                    LeftAngleBracket: "⟨",
                    lang: "⟨",
                    langle: "⟨",
                    LeftArrow: "←",
                    ShortLeftArrow: "←",
                    larr: "←",
                    leftarrow: "←",
                    slarr: "←",
                    LeftArrowBar: "⇤",
                    larrb: "⇤",
                    LeftArrowRightArrow: "⇆",
                    leftrightarrows: "⇆",
                    lrarr: "⇆",
                    LeftCeiling: "⌈",
                    lceil: "⌈",
                    LeftDoubleBracket: "⟦",
                    lobrk: "⟦",
                    LeftDownTeeVector: "⥡",
                    LeftDownVector: "⇃",
                    dharl: "⇃",
                    downharpoonleft: "⇃",
                    LeftDownVectorBar: "⥙",
                    LeftFloor: "⌊",
                    lfloor: "⌊",
                    LeftRightArrow: "↔",
                    harr: "↔",
                    leftrightarrow: "↔",
                    LeftRightVector: "⥎",
                    LeftTee: "⊣",
                    dashv: "⊣",
                    LeftTeeArrow: "↤",
                    mapstoleft: "↤",
                    LeftTeeVector: "⥚",
                    LeftTriangle: "⊲",
                    vartriangleleft: "⊲",
                    vltri: "⊲",
                    LeftTriangleBar: "⧏",
                    LeftTriangleEqual: "⊴",
                    ltrie: "⊴",
                    trianglelefteq: "⊴",
                    LeftUpDownVector: "⥑",
                    LeftUpTeeVector: "⥠",
                    LeftUpVector: "↿",
                    uharl: "↿",
                    upharpoonleft: "↿",
                    LeftUpVectorBar: "⥘",
                    LeftVector: "↼",
                    leftharpoonup: "↼",
                    lharu: "↼",
                    LeftVectorBar: "⥒",
                    LessEqualGreater: "⋚",
                    leg: "⋚",
                    lesseqgtr: "⋚",
                    LessFullEqual: "≦",
                    lE: "≦",
                    leqq: "≦",
                    LessGreater: "≶",
                    lessgtr: "≶",
                    lg: "≶",
                    LessLess: "⪡",
                    LessSlantEqual: "⩽",
                    leqslant: "⩽",
                    les: "⩽",
                    LessTilde: "≲",
                    lesssim: "≲",
                    lsim: "≲",
                    Lfr: "\uD835\uDD0F",
                    Ll: "⋘",
                    Lleftarrow: "⇚",
                    lAarr: "⇚",
                    Lmidot: "Ŀ",
                    LongLeftArrow: "⟵",
                    longleftarrow: "⟵",
                    xlarr: "⟵",
                    LongLeftRightArrow: "⟷",
                    longleftrightarrow: "⟷",
                    xharr: "⟷",
                    LongRightArrow: "⟶",
                    longrightarrow: "⟶",
                    xrarr: "⟶",
                    Lopf: "\uD835\uDD43",
                    LowerLeftArrow: "↙",
                    swarr: "↙",
                    swarrow: "↙",
                    LowerRightArrow: "↘",
                    searr: "↘",
                    searrow: "↘",
                    Lsh: "↰",
                    lsh: "↰",
                    Lstrok: "Ł",
                    Lt: "≪",
                    NestedLessLess: "≪",
                    ll: "≪",
                    Map: "⤅",
                    Mcy: "М",
                    MediumSpace: " ",
                    Mellintrf: "ℳ",
                    Mscr: "ℳ",
                    phmmat: "ℳ",
                    Mfr: "\uD835\uDD10",
                    MinusPlus: "∓",
                    mnplus: "∓",
                    mp: "∓",
                    Mopf: "\uD835\uDD44",
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
                    ZeroWidthSpace: "​",
                    NewLine: `
`,
                    Nfr: "\uD835\uDD11",
                    NoBreak: "⁠",
                    NonBreakingSpace: "\xa0",
                    nbsp: "\xa0",
                    Nopf: "ℕ",
                    naturals: "ℕ",
                    Not: "⫬",
                    NotCongruent: "≢",
                    nequiv: "≢",
                    NotCupCap: "≭",
                    NotDoubleVerticalBar: "∦",
                    npar: "∦",
                    nparallel: "∦",
                    nshortparallel: "∦",
                    nspar: "∦",
                    NotElement: "∉",
                    notin: "∉",
                    notinva: "∉",
                    NotEqual: "≠",
                    ne: "≠",
                    NotEqualTilde: "≂̸",
                    nesim: "≂̸",
                    NotExists: "∄",
                    nexist: "∄",
                    nexists: "∄",
                    NotGreater: "≯",
                    ngt: "≯",
                    ngtr: "≯",
                    NotGreaterEqual: "≱",
                    nge: "≱",
                    ngeq: "≱",
                    NotGreaterFullEqual: "≧̸",
                    ngE: "≧̸",
                    ngeqq: "≧̸",
                    NotGreaterGreater: "≫̸",
                    nGtv: "≫̸",
                    NotGreaterLess: "≹",
                    ntgl: "≹",
                    NotGreaterSlantEqual: "⩾̸",
                    ngeqslant: "⩾̸",
                    nges: "⩾̸",
                    NotGreaterTilde: "≵",
                    ngsim: "≵",
                    NotHumpDownHump: "≎̸",
                    nbump: "≎̸",
                    NotHumpEqual: "≏̸",
                    nbumpe: "≏̸",
                    NotLeftTriangle: "⋪",
                    nltri: "⋪",
                    ntriangleleft: "⋪",
                    NotLeftTriangleBar: "⧏̸",
                    NotLeftTriangleEqual: "⋬",
                    nltrie: "⋬",
                    ntrianglelefteq: "⋬",
                    NotLess: "≮",
                    nless: "≮",
                    nlt: "≮",
                    NotLessEqual: "≰",
                    nle: "≰",
                    nleq: "≰",
                    NotLessGreater: "≸",
                    ntlg: "≸",
                    NotLessLess: "≪̸",
                    nLtv: "≪̸",
                    NotLessSlantEqual: "⩽̸",
                    nleqslant: "⩽̸",
                    nles: "⩽̸",
                    NotLessTilde: "≴",
                    nlsim: "≴",
                    NotNestedGreaterGreater: "⪢̸",
                    NotNestedLessLess: "⪡̸",
                    NotPrecedes: "⊀",
                    npr: "⊀",
                    nprec: "⊀",
                    NotPrecedesEqual: "⪯̸",
                    npre: "⪯̸",
                    npreceq: "⪯̸",
                    NotPrecedesSlantEqual: "⋠",
                    nprcue: "⋠",
                    NotReverseElement: "∌",
                    notni: "∌",
                    notniva: "∌",
                    NotRightTriangle: "⋫",
                    nrtri: "⋫",
                    ntriangleright: "⋫",
                    NotRightTriangleBar: "⧐̸",
                    NotRightTriangleEqual: "⋭",
                    nrtrie: "⋭",
                    ntrianglerighteq: "⋭",
                    NotSquareSubset: "⊏̸",
                    NotSquareSubsetEqual: "⋢",
                    nsqsube: "⋢",
                    NotSquareSuperset: "⊐̸",
                    NotSquareSupersetEqual: "⋣",
                    nsqsupe: "⋣",
                    NotSubset: "⊂⃒",
                    nsubset: "⊂⃒",
                    vnsub: "⊂⃒",
                    NotSubsetEqual: "⊈",
                    nsube: "⊈",
                    nsubseteq: "⊈",
                    NotSucceeds: "⊁",
                    nsc: "⊁",
                    nsucc: "⊁",
                    NotSucceedsEqual: "⪰̸",
                    nsce: "⪰̸",
                    nsucceq: "⪰̸",
                    NotSucceedsSlantEqual: "⋡",
                    nsccue: "⋡",
                    NotSucceedsTilde: "≿̸",
                    NotSuperset: "⊃⃒",
                    nsupset: "⊃⃒",
                    vnsup: "⊃⃒",
                    NotSupersetEqual: "⊉",
                    nsupe: "⊉",
                    nsupseteq: "⊉",
                    NotTilde: "≁",
                    nsim: "≁",
                    NotTildeEqual: "≄",
                    nsime: "≄",
                    nsimeq: "≄",
                    NotTildeFullEqual: "≇",
                    ncong: "≇",
                    NotTildeTilde: "≉",
                    nap: "≉",
                    napprox: "≉",
                    NotVerticalBar: "∤",
                    nmid: "∤",
                    nshortmid: "∤",
                    nsmid: "∤",
                    Nscr: "\uD835\uDCA9",
                    Ntilde: "\xd1",
                    Nu: "Ν",
                    OElig: "Œ",
                    Oacute: "\xd3",
                    Ocirc: "\xd4",
                    Ocy: "О",
                    Odblac: "Ő",
                    Ofr: "\uD835\uDD12",
                    Ograve: "\xd2",
                    Omacr: "Ō",
                    Omega: "Ω",
                    ohm: "Ω",
                    Omicron: "Ο",
                    Oopf: "\uD835\uDD46",
                    OpenCurlyDoubleQuote: "“",
                    ldquo: "“",
                    OpenCurlyQuote: "‘",
                    lsquo: "‘",
                    Or: "⩔",
                    Oscr: "\uD835\uDCAA",
                    Oslash: "\xd8",
                    Otilde: "\xd5",
                    Otimes: "⨷",
                    Ouml: "\xd6",
                    OverBar: "‾",
                    oline: "‾",
                    OverBrace: "⏞",
                    OverBracket: "⎴",
                    tbrk: "⎴",
                    OverParenthesis: "⏜",
                    PartialD: "∂",
                    part: "∂",
                    Pcy: "П",
                    Pfr: "\uD835\uDD13",
                    Phi: "Φ",
                    Pi: "Π",
                    PlusMinus: "\xb1",
                    plusmn: "\xb1",
                    pm: "\xb1",
                    Popf: "ℙ",
                    primes: "ℙ",
                    Pr: "⪻",
                    Precedes: "≺",
                    pr: "≺",
                    prec: "≺",
                    PrecedesEqual: "⪯",
                    pre: "⪯",
                    preceq: "⪯",
                    PrecedesSlantEqual: "≼",
                    prcue: "≼",
                    preccurlyeq: "≼",
                    PrecedesTilde: "≾",
                    precsim: "≾",
                    prsim: "≾",
                    Prime: "″",
                    Product: "∏",
                    prod: "∏",
                    Proportional: "∝",
                    prop: "∝",
                    propto: "∝",
                    varpropto: "∝",
                    vprop: "∝",
                    Pscr: "\uD835\uDCAB",
                    Psi: "Ψ",
                    QUOT: '"',
                    quot: '"',
                    Qfr: "\uD835\uDD14",
                    Qopf: "ℚ",
                    rationals: "ℚ",
                    Qscr: "\uD835\uDCAC",
                    RBarr: "⤐",
                    drbkarow: "⤐",
                    REG: "\xae",
                    circledR: "\xae",
                    reg: "\xae",
                    Racute: "Ŕ",
                    Rang: "⟫",
                    Rarr: "↠",
                    twoheadrightarrow: "↠",
                    Rarrtl: "⤖",
                    Rcaron: "Ř",
                    Rcedil: "Ŗ",
                    Rcy: "Р",
                    Re: "ℜ",
                    Rfr: "ℜ",
                    real: "ℜ",
                    realpart: "ℜ",
                    ReverseElement: "∋",
                    SuchThat: "∋",
                    ni: "∋",
                    niv: "∋",
                    ReverseEquilibrium: "⇋",
                    leftrightharpoons: "⇋",
                    lrhar: "⇋",
                    ReverseUpEquilibrium: "⥯",
                    duhar: "⥯",
                    Rho: "Ρ",
                    RightAngleBracket: "⟩",
                    rang: "⟩",
                    rangle: "⟩",
                    RightArrow: "→",
                    ShortRightArrow: "→",
                    rarr: "→",
                    rightarrow: "→",
                    srarr: "→",
                    RightArrowBar: "⇥",
                    rarrb: "⇥",
                    RightArrowLeftArrow: "⇄",
                    rightleftarrows: "⇄",
                    rlarr: "⇄",
                    RightCeiling: "⌉",
                    rceil: "⌉",
                    RightDoubleBracket: "⟧",
                    robrk: "⟧",
                    RightDownTeeVector: "⥝",
                    RightDownVector: "⇂",
                    dharr: "⇂",
                    downharpoonright: "⇂",
                    RightDownVectorBar: "⥕",
                    RightFloor: "⌋",
                    rfloor: "⌋",
                    RightTee: "⊢",
                    vdash: "⊢",
                    RightTeeArrow: "↦",
                    map: "↦",
                    mapsto: "↦",
                    RightTeeVector: "⥛",
                    RightTriangle: "⊳",
                    vartriangleright: "⊳",
                    vrtri: "⊳",
                    RightTriangleBar: "⧐",
                    RightTriangleEqual: "⊵",
                    rtrie: "⊵",
                    trianglerighteq: "⊵",
                    RightUpDownVector: "⥏",
                    RightUpTeeVector: "⥜",
                    RightUpVector: "↾",
                    uharr: "↾",
                    upharpoonright: "↾",
                    RightUpVectorBar: "⥔",
                    RightVector: "⇀",
                    rharu: "⇀",
                    rightharpoonup: "⇀",
                    RightVectorBar: "⥓",
                    Ropf: "ℝ",
                    reals: "ℝ",
                    RoundImplies: "⥰",
                    Rrightarrow: "⇛",
                    rAarr: "⇛",
                    Rscr: "ℛ",
                    realine: "ℛ",
                    Rsh: "↱",
                    rsh: "↱",
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
                    ShortUpArrow: "↑",
                    UpArrow: "↑",
                    uarr: "↑",
                    uparrow: "↑",
                    Sigma: "Σ",
                    SmallCircle: "∘",
                    compfn: "∘",
                    Sopf: "\uD835\uDD4A",
                    Sqrt: "√",
                    radic: "√",
                    Square: "□",
                    squ: "□",
                    square: "□",
                    SquareIntersection: "⊓",
                    sqcap: "⊓",
                    SquareSubset: "⊏",
                    sqsub: "⊏",
                    sqsubset: "⊏",
                    SquareSubsetEqual: "⊑",
                    sqsube: "⊑",
                    sqsubseteq: "⊑",
                    SquareSuperset: "⊐",
                    sqsup: "⊐",
                    sqsupset: "⊐",
                    SquareSupersetEqual: "⊒",
                    sqsupe: "⊒",
                    sqsupseteq: "⊒",
                    SquareUnion: "⊔",
                    sqcup: "⊔",
                    Sscr: "\uD835\uDCAE",
                    Star: "⋆",
                    sstarf: "⋆",
                    Sub: "⋐",
                    Subset: "⋐",
                    SubsetEqual: "⊆",
                    sube: "⊆",
                    subseteq: "⊆",
                    Succeeds: "≻",
                    sc: "≻",
                    succ: "≻",
                    SucceedsEqual: "⪰",
                    sce: "⪰",
                    succeq: "⪰",
                    SucceedsSlantEqual: "≽",
                    sccue: "≽",
                    succcurlyeq: "≽",
                    SucceedsTilde: "≿",
                    scsim: "≿",
                    succsim: "≿",
                    Sum: "∑",
                    sum: "∑",
                    Sup: "⋑",
                    Supset: "⋑",
                    Superset: "⊃",
                    sup: "⊃",
                    supset: "⊃",
                    SupersetEqual: "⊇",
                    supe: "⊇",
                    supseteq: "⊇",
                    THORN: "\xde",
                    TRADE: "™",
                    trade: "™",
                    TSHcy: "Ћ",
                    TScy: "Ц",
                    Tab: "	",
                    Tau: "Τ",
                    Tcaron: "Ť",
                    Tcedil: "Ţ",
                    Tcy: "Т",
                    Tfr: "\uD835\uDD17",
                    Therefore: "∴",
                    there4: "∴",
                    therefore: "∴",
                    Theta: "Θ",
                    ThickSpace: "  ",
                    ThinSpace: " ",
                    thinsp: " ",
                    Tilde: "∼",
                    sim: "∼",
                    thicksim: "∼",
                    thksim: "∼",
                    TildeEqual: "≃",
                    sime: "≃",
                    simeq: "≃",
                    TildeFullEqual: "≅",
                    cong: "≅",
                    TildeTilde: "≈",
                    ap: "≈",
                    approx: "≈",
                    asymp: "≈",
                    thickapprox: "≈",
                    thkap: "≈",
                    Topf: "\uD835\uDD4B",
                    TripleDot: "⃛",
                    tdot: "⃛",
                    Tscr: "\uD835\uDCAF",
                    Tstrok: "Ŧ",
                    Uacute: "\xda",
                    Uarr: "↟",
                    Uarrocir: "⥉",
                    Ubrcy: "Ў",
                    Ubreve: "Ŭ",
                    Ucirc: "\xdb",
                    Ucy: "У",
                    Udblac: "Ű",
                    Ufr: "\uD835\uDD18",
                    Ugrave: "\xd9",
                    Umacr: "Ū",
                    UnderBar: "_",
                    lowbar: "_",
                    UnderBrace: "⏟",
                    UnderBracket: "⎵",
                    bbrk: "⎵",
                    UnderParenthesis: "⏝",
                    Union: "⋃",
                    bigcup: "⋃",
                    xcup: "⋃",
                    UnionPlus: "⊎",
                    uplus: "⊎",
                    Uogon: "Ų",
                    Uopf: "\uD835\uDD4C",
                    UpArrowBar: "⤒",
                    UpArrowDownArrow: "⇅",
                    udarr: "⇅",
                    UpDownArrow: "↕",
                    updownarrow: "↕",
                    varr: "↕",
                    UpEquilibrium: "⥮",
                    udhar: "⥮",
                    UpTee: "⊥",
                    bot: "⊥",
                    bottom: "⊥",
                    perp: "⊥",
                    UpTeeArrow: "↥",
                    mapstoup: "↥",
                    UpperLeftArrow: "↖",
                    nwarr: "↖",
                    nwarrow: "↖",
                    UpperRightArrow: "↗",
                    nearr: "↗",
                    nearrow: "↗",
                    Upsi: "ϒ",
                    upsih: "ϒ",
                    Upsilon: "Υ",
                    Uring: "Ů",
                    Uscr: "\uD835\uDCB0",
                    Utilde: "Ũ",
                    Uuml: "\xdc",
                    VDash: "⊫",
                    Vbar: "⫫",
                    Vcy: "В",
                    Vdash: "⊩",
                    Vdashl: "⫦",
                    Vee: "⋁",
                    bigvee: "⋁",
                    xvee: "⋁",
                    Verbar: "‖",
                    Vert: "‖",
                    VerticalBar: "∣",
                    mid: "∣",
                    shortmid: "∣",
                    smid: "∣",
                    VerticalLine: "|",
                    verbar: "|",
                    vert: "|",
                    VerticalSeparator: "❘",
                    VerticalTilde: "≀",
                    wr: "≀",
                    wreath: "≀",
                    VeryThinSpace: " ",
                    hairsp: " ",
                    Vfr: "\uD835\uDD19",
                    Vopf: "\uD835\uDD4D",
                    Vscr: "\uD835\uDCB1",
                    Vvdash: "⊪",
                    Wcirc: "Ŵ",
                    Wedge: "⋀",
                    bigwedge: "⋀",
                    xwedge: "⋀",
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
                    Zeta: "Ζ",
                    Zfr: "ℨ",
                    zeetrf: "ℨ",
                    Zopf: "ℤ",
                    integers: "ℤ",
                    Zscr: "\uD835\uDCB5",
                    aacute: "\xe1",
                    abreve: "ă",
                    ac: "∾",
                    mstpos: "∾",
                    acE: "∾̳",
                    acd: "∿",
                    acirc: "\xe2",
                    acy: "а",
                    aelig: "\xe6",
                    afr: "\uD835\uDD1E",
                    agrave: "\xe0",
                    alefsym: "ℵ",
                    aleph: "ℵ",
                    alpha: "α",
                    amacr: "ā",
                    amalg: "⨿",
                    and: "∧",
                    wedge: "∧",
                    andand: "⩕",
                    andd: "⩜",
                    andslope: "⩘",
                    andv: "⩚",
                    ang: "∠",
                    angle: "∠",
                    ange: "⦤",
                    angmsd: "∡",
                    measuredangle: "∡",
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
                    angzarr: "⍼",
                    aogon: "ą",
                    aopf: "\uD835\uDD52",
                    apE: "⩰",
                    apacir: "⩯",
                    ape: "≊",
                    approxeq: "≊",
                    apid: "≋",
                    apos: "'",
                    aring: "\xe5",
                    ascr: "\uD835\uDCB6",
                    ast: "*",
                    midast: "*",
                    atilde: "\xe3",
                    auml: "\xe4",
                    awint: "⨑",
                    bNot: "⫭",
                    backcong: "≌",
                    bcong: "≌",
                    backepsilon: "϶",
                    bepsi: "϶",
                    backprime: "‵",
                    bprime: "‵",
                    backsim: "∽",
                    bsim: "∽",
                    backsimeq: "⋍",
                    bsime: "⋍",
                    barvee: "⊽",
                    barwed: "⌅",
                    barwedge: "⌅",
                    bbrktbrk: "⎶",
                    bcy: "б",
                    bdquo: "„",
                    ldquor: "„",
                    bemptyv: "⦰",
                    beta: "β",
                    beth: "ℶ",
                    between: "≬",
                    twixt: "≬",
                    bfr: "\uD835\uDD1F",
                    bigcirc: "◯",
                    xcirc: "◯",
                    bigodot: "⨀",
                    xodot: "⨀",
                    bigoplus: "⨁",
                    xoplus: "⨁",
                    bigotimes: "⨂",
                    xotime: "⨂",
                    bigsqcup: "⨆",
                    xsqcup: "⨆",
                    bigstar: "★",
                    starf: "★",
                    bigtriangledown: "▽",
                    xdtri: "▽",
                    bigtriangleup: "△",
                    xutri: "△",
                    biguplus: "⨄",
                    xuplus: "⨄",
                    bkarow: "⤍",
                    rbarr: "⤍",
                    blacklozenge: "⧫",
                    lozf: "⧫",
                    blacktriangle: "▴",
                    utrif: "▴",
                    blacktriangledown: "▾",
                    dtrif: "▾",
                    blacktriangleleft: "◂",
                    ltrif: "◂",
                    blacktriangleright: "▸",
                    rtrif: "▸",
                    blank: "␣",
                    blk12: "▒",
                    blk14: "░",
                    blk34: "▓",
                    block: "█",
                    bne: "=⃥",
                    bnequiv: "≡⃥",
                    bnot: "⌐",
                    bopf: "\uD835\uDD53",
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
                    boxhD: "╥",
                    boxhU: "╨",
                    boxhd: "┬",
                    boxhu: "┴",
                    boxminus: "⊟",
                    minusb: "⊟",
                    boxplus: "⊞",
                    plusb: "⊞",
                    boxtimes: "⊠",
                    timesb: "⊠",
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
                    brvbar: "\xa6",
                    bscr: "\uD835\uDCB7",
                    bsemi: "⁏",
                    bsol: "\\",
                    bsolb: "⧅",
                    bsolhsub: "⟈",
                    bull: "•",
                    bullet: "•",
                    bumpE: "⪮",
                    cacute: "ć",
                    cap: "∩",
                    capand: "⩄",
                    capbrcup: "⩉",
                    capcap: "⩋",
                    capcup: "⩇",
                    capdot: "⩀",
                    caps: "∩︀",
                    caret: "⁁",
                    ccaps: "⩍",
                    ccaron: "č",
                    ccedil: "\xe7",
                    ccirc: "ĉ",
                    ccups: "⩌",
                    ccupssm: "⩐",
                    cdot: "ċ",
                    cemptyv: "⦲",
                    cent: "\xa2",
                    cfr: "\uD835\uDD20",
                    chcy: "ч",
                    check: "✓",
                    checkmark: "✓",
                    chi: "χ",
                    cir: "○",
                    cirE: "⧃",
                    circ: "ˆ",
                    circeq: "≗",
                    cire: "≗",
                    circlearrowleft: "↺",
                    olarr: "↺",
                    circlearrowright: "↻",
                    orarr: "↻",
                    circledS: "Ⓢ",
                    oS: "Ⓢ",
                    circledast: "⊛",
                    oast: "⊛",
                    circledcirc: "⊚",
                    ocir: "⊚",
                    circleddash: "⊝",
                    odash: "⊝",
                    cirfnint: "⨐",
                    cirmid: "⫯",
                    cirscir: "⧂",
                    clubs: "♣",
                    clubsuit: "♣",
                    colon: ":",
                    comma: ",",
                    commat: "@",
                    comp: "∁",
                    complement: "∁",
                    congdot: "⩭",
                    copf: "\uD835\uDD54",
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
                    curlyeqprec: "⋞",
                    cuesc: "⋟",
                    curlyeqsucc: "⋟",
                    cularr: "↶",
                    curvearrowleft: "↶",
                    cularrp: "⤽",
                    cup: "∪",
                    cupbrcap: "⩈",
                    cupcap: "⩆",
                    cupcup: "⩊",
                    cupdot: "⊍",
                    cupor: "⩅",
                    cups: "∪︀",
                    curarr: "↷",
                    curvearrowright: "↷",
                    curarrm: "⤼",
                    curlyvee: "⋎",
                    cuvee: "⋎",
                    curlywedge: "⋏",
                    cuwed: "⋏",
                    curren: "\xa4",
                    cwint: "∱",
                    cylcty: "⌭",
                    dHar: "⥥",
                    dagger: "†",
                    daleth: "ℸ",
                    dash: "‐",
                    hyphen: "‐",
                    dbkarow: "⤏",
                    rBarr: "⤏",
                    dcaron: "ď",
                    dcy: "д",
                    ddarr: "⇊",
                    downdownarrows: "⇊",
                    ddotseq: "⩷",
                    eDDot: "⩷",
                    deg: "\xb0",
                    delta: "δ",
                    demptyv: "⦱",
                    dfisht: "⥿",
                    dfr: "\uD835\uDD21",
                    diamondsuit: "♦",
                    diams: "♦",
                    digamma: "ϝ",
                    gammad: "ϝ",
                    disin: "⋲",
                    div: "\xf7",
                    divide: "\xf7",
                    divideontimes: "⋇",
                    divonx: "⋇",
                    djcy: "ђ",
                    dlcorn: "⌞",
                    llcorner: "⌞",
                    dlcrop: "⌍",
                    dollar: "$",
                    dopf: "\uD835\uDD55",
                    doteqdot: "≑",
                    eDot: "≑",
                    dotminus: "∸",
                    minusd: "∸",
                    dotplus: "∔",
                    plusdo: "∔",
                    dotsquare: "⊡",
                    sdotb: "⊡",
                    drcorn: "⌟",
                    lrcorner: "⌟",
                    drcrop: "⌌",
                    dscr: "\uD835\uDCB9",
                    dscy: "ѕ",
                    dsol: "⧶",
                    dstrok: "đ",
                    dtdot: "⋱",
                    dtri: "▿",
                    triangledown: "▿",
                    dwangle: "⦦",
                    dzcy: "џ",
                    dzigrarr: "⟿",
                    eacute: "\xe9",
                    easter: "⩮",
                    ecaron: "ě",
                    ecir: "≖",
                    eqcirc: "≖",
                    ecirc: "\xea",
                    ecolon: "≕",
                    eqcolon: "≕",
                    ecy: "э",
                    edot: "ė",
                    efDot: "≒",
                    fallingdotseq: "≒",
                    efr: "\uD835\uDD22",
                    eg: "⪚",
                    egrave: "\xe8",
                    egs: "⪖",
                    eqslantgtr: "⪖",
                    egsdot: "⪘",
                    el: "⪙",
                    elinters: "⏧",
                    ell: "ℓ",
                    els: "⪕",
                    eqslantless: "⪕",
                    elsdot: "⪗",
                    emacr: "ē",
                    empty: "∅",
                    emptyset: "∅",
                    emptyv: "∅",
                    varnothing: "∅",
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
                    straightepsilon: "ϵ",
                    varepsilon: "ϵ",
                    equals: "=",
                    equest: "≟",
                    questeq: "≟",
                    equivDD: "⩸",
                    eqvparsl: "⧥",
                    erDot: "≓",
                    risingdotseq: "≓",
                    erarr: "⥱",
                    escr: "ℯ",
                    eta: "η",
                    eth: "\xf0",
                    euml: "\xeb",
                    euro: "€",
                    excl: "!",
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
                    fork: "⋔",
                    pitchfork: "⋔",
                    forkv: "⫙",
                    fpartint: "⨍",
                    frac12: "\xbd",
                    half: "\xbd",
                    frac13: "⅓",
                    frac14: "\xbc",
                    frac15: "⅕",
                    frac16: "⅙",
                    frac18: "⅛",
                    frac23: "⅔",
                    frac25: "⅖",
                    frac34: "\xbe",
                    frac35: "⅗",
                    frac38: "⅜",
                    frac45: "⅘",
                    frac56: "⅚",
                    frac58: "⅝",
                    frac78: "⅞",
                    frasl: "⁄",
                    frown: "⌢",
                    sfrown: "⌢",
                    fscr: "\uD835\uDCBB",
                    gEl: "⪌",
                    gtreqqless: "⪌",
                    gacute: "ǵ",
                    gamma: "γ",
                    gap: "⪆",
                    gtrapprox: "⪆",
                    gbreve: "ğ",
                    gcirc: "ĝ",
                    gcy: "г",
                    gdot: "ġ",
                    gescc: "⪩",
                    gesdot: "⪀",
                    gesdoto: "⪂",
                    gesdotol: "⪄",
                    gesl: "⋛︀",
                    gesles: "⪔",
                    gfr: "\uD835\uDD24",
                    gimel: "ℷ",
                    gjcy: "ѓ",
                    glE: "⪒",
                    gla: "⪥",
                    glj: "⪤",
                    gnE: "≩",
                    gneqq: "≩",
                    gnap: "⪊",
                    gnapprox: "⪊",
                    gne: "⪈",
                    gneq: "⪈",
                    gnsim: "⋧",
                    gopf: "\uD835\uDD58",
                    gscr: "ℊ",
                    gsime: "⪎",
                    gsiml: "⪐",
                    gtcc: "⪧",
                    gtcir: "⩺",
                    gtdot: "⋗",
                    gtrdot: "⋗",
                    gtlPar: "⦕",
                    gtquest: "⩼",
                    gtrarr: "⥸",
                    gvertneqq: "≩︀",
                    gvnE: "≩︀",
                    hardcy: "ъ",
                    harrcir: "⥈",
                    harrw: "↭",
                    leftrightsquigarrow: "↭",
                    hbar: "ℏ",
                    hslash: "ℏ",
                    planck: "ℏ",
                    plankv: "ℏ",
                    hcirc: "ĥ",
                    hearts: "♥",
                    heartsuit: "♥",
                    hellip: "…",
                    mldr: "…",
                    hercon: "⊹",
                    hfr: "\uD835\uDD25",
                    hksearow: "⤥",
                    searhk: "⤥",
                    hkswarow: "⤦",
                    swarhk: "⤦",
                    hoarr: "⇿",
                    homtht: "∻",
                    hookleftarrow: "↩",
                    larrhk: "↩",
                    hookrightarrow: "↪",
                    rarrhk: "↪",
                    hopf: "\uD835\uDD59",
                    horbar: "―",
                    hscr: "\uD835\uDCBD",
                    hstrok: "ħ",
                    hybull: "⁃",
                    iacute: "\xed",
                    icirc: "\xee",
                    icy: "и",
                    iecy: "е",
                    iexcl: "\xa1",
                    ifr: "\uD835\uDD26",
                    igrave: "\xec",
                    iiiint: "⨌",
                    qint: "⨌",
                    iiint: "∭",
                    tint: "∭",
                    iinfin: "⧜",
                    iiota: "℩",
                    ijlig: "ĳ",
                    imacr: "ī",
                    imath: "ı",
                    inodot: "ı",
                    imof: "⊷",
                    imped: "Ƶ",
                    incare: "℅",
                    infin: "∞",
                    infintie: "⧝",
                    intcal: "⊺",
                    intercal: "⊺",
                    intlarhk: "⨗",
                    intprod: "⨼",
                    iprod: "⨼",
                    iocy: "ё",
                    iogon: "į",
                    iopf: "\uD835\uDD5A",
                    iota: "ι",
                    iquest: "\xbf",
                    iscr: "\uD835\uDCBE",
                    isinE: "⋹",
                    isindot: "⋵",
                    isins: "⋴",
                    isinsv: "⋳",
                    itilde: "ĩ",
                    iukcy: "і",
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
                    varkappa: "ϰ",
                    kcedil: "ķ",
                    kcy: "к",
                    kfr: "\uD835\uDD28",
                    kgreen: "ĸ",
                    khcy: "х",
                    kjcy: "ќ",
                    kopf: "\uD835\uDD5C",
                    kscr: "\uD835\uDCC0",
                    lAtail: "⤛",
                    lBarr: "⤎",
                    lEg: "⪋",
                    lesseqqgtr: "⪋",
                    lHar: "⥢",
                    lacute: "ĺ",
                    laemptyv: "⦴",
                    lambda: "λ",
                    langd: "⦑",
                    lap: "⪅",
                    lessapprox: "⪅",
                    laquo: "\xab",
                    larrbfs: "⤟",
                    larrfs: "⤝",
                    larrlp: "↫",
                    looparrowleft: "↫",
                    larrpl: "⤹",
                    larrsim: "⥳",
                    larrtl: "↢",
                    leftarrowtail: "↢",
                    lat: "⪫",
                    latail: "⤙",
                    late: "⪭",
                    lates: "⪭︀",
                    lbarr: "⤌",
                    lbbrk: "❲",
                    lbrace: "{",
                    lcub: "{",
                    lbrack: "[",
                    lsqb: "[",
                    lbrke: "⦋",
                    lbrksld: "⦏",
                    lbrkslu: "⦍",
                    lcaron: "ľ",
                    lcedil: "ļ",
                    lcy: "л",
                    ldca: "⤶",
                    ldrdhar: "⥧",
                    ldrushar: "⥋",
                    ldsh: "↲",
                    le: "≤",
                    leq: "≤",
                    leftleftarrows: "⇇",
                    llarr: "⇇",
                    leftthreetimes: "⋋",
                    lthree: "⋋",
                    lescc: "⪨",
                    lesdot: "⩿",
                    lesdoto: "⪁",
                    lesdotor: "⪃",
                    lesg: "⋚︀",
                    lesges: "⪓",
                    lessdot: "⋖",
                    ltdot: "⋖",
                    lfisht: "⥼",
                    lfr: "\uD835\uDD29",
                    lgE: "⪑",
                    lharul: "⥪",
                    lhblk: "▄",
                    ljcy: "љ",
                    llhard: "⥫",
                    lltri: "◺",
                    lmidot: "ŀ",
                    lmoust: "⎰",
                    lmoustache: "⎰",
                    lnE: "≨",
                    lneqq: "≨",
                    lnap: "⪉",
                    lnapprox: "⪉",
                    lne: "⪇",
                    lneq: "⪇",
                    lnsim: "⋦",
                    loang: "⟬",
                    loarr: "⇽",
                    longmapsto: "⟼",
                    xmap: "⟼",
                    looparrowright: "↬",
                    rarrlp: "↬",
                    lopar: "⦅",
                    lopf: "\uD835\uDD5D",
                    loplus: "⨭",
                    lotimes: "⨴",
                    lowast: "∗",
                    loz: "◊",
                    lozenge: "◊",
                    lpar: "(",
                    lparlt: "⦓",
                    lrhard: "⥭",
                    lrm: "‎",
                    lrtri: "⊿",
                    lsaquo: "‹",
                    lscr: "\uD835\uDCC1",
                    lsime: "⪍",
                    lsimg: "⪏",
                    lsquor: "‚",
                    sbquo: "‚",
                    lstrok: "ł",
                    ltcc: "⪦",
                    ltcir: "⩹",
                    ltimes: "⋉",
                    ltlarr: "⥶",
                    ltquest: "⩻",
                    ltrPar: "⦖",
                    ltri: "◃",
                    triangleleft: "◃",
                    lurdshar: "⥊",
                    luruhar: "⥦",
                    lvertneqq: "≨︀",
                    lvnE: "≨︀",
                    mDDot: "∺",
                    macr: "\xaf",
                    strns: "\xaf",
                    male: "♂",
                    malt: "✠",
                    maltese: "✠",
                    marker: "▮",
                    mcomma: "⨩",
                    mcy: "м",
                    mdash: "—",
                    mfr: "\uD835\uDD2A",
                    mho: "℧",
                    micro: "\xb5",
                    midcir: "⫰",
                    minus: "−",
                    minusdu: "⨪",
                    mlcp: "⫛",
                    models: "⊧",
                    mopf: "\uD835\uDD5E",
                    mscr: "\uD835\uDCC2",
                    mu: "μ",
                    multimap: "⊸",
                    mumap: "⊸",
                    nGg: "⋙̸",
                    nGt: "≫⃒",
                    nLeftarrow: "⇍",
                    nlArr: "⇍",
                    nLeftrightarrow: "⇎",
                    nhArr: "⇎",
                    nLl: "⋘̸",
                    nLt: "≪⃒",
                    nRightarrow: "⇏",
                    nrArr: "⇏",
                    nVDash: "⊯",
                    nVdash: "⊮",
                    nacute: "ń",
                    nang: "∠⃒",
                    napE: "⩰̸",
                    napid: "≋̸",
                    napos: "ŉ",
                    natur: "♮",
                    natural: "♮",
                    ncap: "⩃",
                    ncaron: "ň",
                    ncedil: "ņ",
                    ncongdot: "⩭̸",
                    ncup: "⩂",
                    ncy: "н",
                    ndash: "–",
                    neArr: "⇗",
                    nearhk: "⤤",
                    nedot: "≐̸",
                    nesear: "⤨",
                    toea: "⤨",
                    nfr: "\uD835\uDD2B",
                    nharr: "↮",
                    nleftrightarrow: "↮",
                    nhpar: "⫲",
                    nis: "⋼",
                    nisd: "⋺",
                    njcy: "њ",
                    nlE: "≦̸",
                    nleqq: "≦̸",
                    nlarr: "↚",
                    nleftarrow: "↚",
                    nldr: "‥",
                    nopf: "\uD835\uDD5F",
                    not: "\xac",
                    notinE: "⋹̸",
                    notindot: "⋵̸",
                    notinvb: "⋷",
                    notinvc: "⋶",
                    notnivb: "⋾",
                    notnivc: "⋽",
                    nparsl: "⫽⃥",
                    npart: "∂̸",
                    npolint: "⨔",
                    nrarr: "↛",
                    nrightarrow: "↛",
                    nrarrc: "⤳̸",
                    nrarrw: "↝̸",
                    nscr: "\uD835\uDCC3",
                    nsub: "⊄",
                    nsubE: "⫅̸",
                    nsubseteqq: "⫅̸",
                    nsup: "⊅",
                    nsupE: "⫆̸",
                    nsupseteqq: "⫆̸",
                    ntilde: "\xf1",
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
                    nwnear: "⤧",
                    oacute: "\xf3",
                    ocirc: "\xf4",
                    ocy: "о",
                    odblac: "ő",
                    odiv: "⨸",
                    odsold: "⦼",
                    oelig: "œ",
                    ofcir: "⦿",
                    ofr: "\uD835\uDD2C",
                    ogon: "˛",
                    ograve: "\xf2",
                    ogt: "⧁",
                    ohbar: "⦵",
                    olcir: "⦾",
                    olcross: "⦻",
                    olt: "⧀",
                    omacr: "ō",
                    omega: "ω",
                    omicron: "ο",
                    omid: "⦶",
                    oopf: "\uD835\uDD60",
                    opar: "⦷",
                    operp: "⦹",
                    or: "∨",
                    vee: "∨",
                    ord: "⩝",
                    order: "ℴ",
                    orderof: "ℴ",
                    oscr: "ℴ",
                    ordf: "\xaa",
                    ordm: "\xba",
                    origof: "⊶",
                    oror: "⩖",
                    orslope: "⩗",
                    orv: "⩛",
                    oslash: "\xf8",
                    osol: "⊘",
                    otilde: "\xf5",
                    otimesas: "⨶",
                    ouml: "\xf6",
                    ovbar: "⌽",
                    para: "\xb6",
                    parsim: "⫳",
                    parsl: "⫽",
                    pcy: "п",
                    percnt: "%",
                    period: ".",
                    permil: "‰",
                    pertenk: "‱",
                    pfr: "\uD835\uDD2D",
                    phi: "φ",
                    phiv: "ϕ",
                    straightphi: "ϕ",
                    varphi: "ϕ",
                    phone: "☎",
                    pi: "π",
                    piv: "ϖ",
                    varpi: "ϖ",
                    planckh: "ℎ",
                    plus: "+",
                    plusacir: "⨣",
                    pluscir: "⨢",
                    plusdu: "⨥",
                    pluse: "⩲",
                    plussim: "⨦",
                    plustwo: "⨧",
                    pointint: "⨕",
                    popf: "\uD835\uDD61",
                    pound: "\xa3",
                    prE: "⪳",
                    prap: "⪷",
                    precapprox: "⪷",
                    precnapprox: "⪹",
                    prnap: "⪹",
                    precneqq: "⪵",
                    prnE: "⪵",
                    precnsim: "⋨",
                    prnsim: "⋨",
                    prime: "′",
                    profalar: "⌮",
                    profline: "⌒",
                    profsurf: "⌓",
                    prurel: "⊰",
                    pscr: "\uD835\uDCC5",
                    psi: "ψ",
                    puncsp: " ",
                    qfr: "\uD835\uDD2E",
                    qopf: "\uD835\uDD62",
                    qprime: "⁗",
                    qscr: "\uD835\uDCC6",
                    quatint: "⨖",
                    quest: "?",
                    rAtail: "⤜",
                    rHar: "⥤",
                    race: "∽̱",
                    racute: "ŕ",
                    raemptyv: "⦳",
                    rangd: "⦒",
                    range: "⦥",
                    raquo: "\xbb",
                    rarrap: "⥵",
                    rarrbfs: "⤠",
                    rarrc: "⤳",
                    rarrfs: "⤞",
                    rarrpl: "⥅",
                    rarrsim: "⥴",
                    rarrtl: "↣",
                    rightarrowtail: "↣",
                    rarrw: "↝",
                    rightsquigarrow: "↝",
                    ratail: "⤚",
                    ratio: "∶",
                    rbbrk: "❳",
                    rbrace: "}",
                    rcub: "}",
                    rbrack: "]",
                    rsqb: "]",
                    rbrke: "⦌",
                    rbrksld: "⦎",
                    rbrkslu: "⦐",
                    rcaron: "ř",
                    rcedil: "ŗ",
                    rcy: "р",
                    rdca: "⤷",
                    rdldhar: "⥩",
                    rdsh: "↳",
                    rect: "▭",
                    rfisht: "⥽",
                    rfr: "\uD835\uDD2F",
                    rharul: "⥬",
                    rho: "ρ",
                    rhov: "ϱ",
                    varrho: "ϱ",
                    rightrightarrows: "⇉",
                    rrarr: "⇉",
                    rightthreetimes: "⋌",
                    rthree: "⋌",
                    ring: "˚",
                    rlm: "‏",
                    rmoust: "⎱",
                    rmoustache: "⎱",
                    rnmid: "⫮",
                    roang: "⟭",
                    roarr: "⇾",
                    ropar: "⦆",
                    ropf: "\uD835\uDD63",
                    roplus: "⨮",
                    rotimes: "⨵",
                    rpar: ")",
                    rpargt: "⦔",
                    rppolint: "⨒",
                    rsaquo: "›",
                    rscr: "\uD835\uDCC7",
                    rtimes: "⋊",
                    rtri: "▹",
                    triangleright: "▹",
                    rtriltri: "⧎",
                    ruluhar: "⥨",
                    rx: "℞",
                    sacute: "ś",
                    scE: "⪴",
                    scap: "⪸",
                    succapprox: "⪸",
                    scaron: "š",
                    scedil: "ş",
                    scirc: "ŝ",
                    scnE: "⪶",
                    succneqq: "⪶",
                    scnap: "⪺",
                    succnapprox: "⪺",
                    scnsim: "⋩",
                    succnsim: "⋩",
                    scpolint: "⨓",
                    scy: "с",
                    sdot: "⋅",
                    sdote: "⩦",
                    seArr: "⇘",
                    sect: "\xa7",
                    semi: ";",
                    seswar: "⤩",
                    tosa: "⤩",
                    sext: "✶",
                    sfr: "\uD835\uDD30",
                    sharp: "♯",
                    shchcy: "щ",
                    shcy: "ш",
                    shy: "\xad",
                    sigma: "σ",
                    sigmaf: "ς",
                    sigmav: "ς",
                    varsigma: "ς",
                    simdot: "⩪",
                    simg: "⪞",
                    simgE: "⪠",
                    siml: "⪝",
                    simlE: "⪟",
                    simne: "≆",
                    simplus: "⨤",
                    simrarr: "⥲",
                    smashp: "⨳",
                    smeparsl: "⧤",
                    smile: "⌣",
                    ssmile: "⌣",
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
                    sqcaps: "⊓︀",
                    sqcups: "⊔︀",
                    sscr: "\uD835\uDCC8",
                    star: "☆",
                    sub: "⊂",
                    subset: "⊂",
                    subE: "⫅",
                    subseteqq: "⫅",
                    subdot: "⪽",
                    subedot: "⫃",
                    submult: "⫁",
                    subnE: "⫋",
                    subsetneqq: "⫋",
                    subne: "⊊",
                    subsetneq: "⊊",
                    subplus: "⪿",
                    subrarr: "⥹",
                    subsim: "⫇",
                    subsub: "⫕",
                    subsup: "⫓",
                    sung: "♪",
                    sup1: "\xb9",
                    sup2: "\xb2",
                    sup3: "\xb3",
                    supE: "⫆",
                    supseteqq: "⫆",
                    supdot: "⪾",
                    supdsub: "⫘",
                    supedot: "⫄",
                    suphsol: "⟉",
                    suphsub: "⫗",
                    suplarr: "⥻",
                    supmult: "⫂",
                    supnE: "⫌",
                    supsetneqq: "⫌",
                    supne: "⊋",
                    supsetneq: "⊋",
                    supplus: "⫀",
                    supsim: "⫈",
                    supsub: "⫔",
                    supsup: "⫖",
                    swArr: "⇙",
                    swnwar: "⤪",
                    szlig: "\xdf",
                    target: "⌖",
                    tau: "τ",
                    tcaron: "ť",
                    tcedil: "ţ",
                    tcy: "т",
                    telrec: "⌕",
                    tfr: "\uD835\uDD31",
                    theta: "θ",
                    thetasym: "ϑ",
                    thetav: "ϑ",
                    vartheta: "ϑ",
                    thorn: "\xfe",
                    times: "\xd7",
                    timesbar: "⨱",
                    timesd: "⨰",
                    topbot: "⌶",
                    topcir: "⫱",
                    topf: "\uD835\uDD65",
                    topfork: "⫚",
                    tprime: "‴",
                    triangle: "▵",
                    utri: "▵",
                    triangleq: "≜",
                    trie: "≜",
                    tridot: "◬",
                    triminus: "⨺",
                    triplus: "⨹",
                    trisb: "⧍",
                    tritime: "⨻",
                    trpezium: "⏢",
                    tscr: "\uD835\uDCC9",
                    tscy: "ц",
                    tshcy: "ћ",
                    tstrok: "ŧ",
                    uHar: "⥣",
                    uacute: "\xfa",
                    ubrcy: "ў",
                    ubreve: "ŭ",
                    ucirc: "\xfb",
                    ucy: "у",
                    udblac: "ű",
                    ufisht: "⥾",
                    ufr: "\uD835\uDD32",
                    ugrave: "\xf9",
                    uhblk: "▀",
                    ulcorn: "⌜",
                    ulcorner: "⌜",
                    ulcrop: "⌏",
                    ultri: "◸",
                    umacr: "ū",
                    uogon: "ų",
                    uopf: "\uD835\uDD66",
                    upsi: "υ",
                    upsilon: "υ",
                    upuparrows: "⇈",
                    uuarr: "⇈",
                    urcorn: "⌝",
                    urcorner: "⌝",
                    urcrop: "⌎",
                    uring: "ů",
                    urtri: "◹",
                    uscr: "\uD835\uDCCA",
                    utdot: "⋰",
                    utilde: "ũ",
                    uuml: "\xfc",
                    uwangle: "⦧",
                    vBar: "⫨",
                    vBarv: "⫩",
                    vangrt: "⦜",
                    varsubsetneq: "⊊︀",
                    vsubne: "⊊︀",
                    varsubsetneqq: "⫋︀",
                    vsubnE: "⫋︀",
                    varsupsetneq: "⊋︀",
                    vsupne: "⊋︀",
                    varsupsetneqq: "⫌︀",
                    vsupnE: "⫌︀",
                    vcy: "в",
                    veebar: "⊻",
                    veeeq: "≚",
                    vellip: "⋮",
                    vfr: "\uD835\uDD33",
                    vopf: "\uD835\uDD67",
                    vscr: "\uD835\uDCCB",
                    vzigzag: "⦚",
                    wcirc: "ŵ",
                    wedbar: "⩟",
                    wedgeq: "≙",
                    weierp: "℘",
                    wp: "℘",
                    wfr: "\uD835\uDD34",
                    wopf: "\uD835\uDD68",
                    wscr: "\uD835\uDCCC",
                    xfr: "\uD835\uDD35",
                    xi: "ξ",
                    xnis: "⋻",
                    xopf: "\uD835\uDD69",
                    xscr: "\uD835\uDCCD",
                    yacute: "\xfd",
                    yacy: "я",
                    ycirc: "ŷ",
                    ycy: "ы",
                    yen: "\xa5",
                    yfr: "\uD835\uDD36",
                    yicy: "ї",
                    yopf: "\uD835\uDD6A",
                    yscr: "\uD835\uDCCE",
                    yucy: "ю",
                    yuml: "\xff",
                    zacute: "ź",
                    zcaron: "ž",
                    zcy: "з",
                    zdot: "ż",
                    zeta: "ζ",
                    zfr: "\uD835\uDD37",
                    zhcy: "ж",
                    zigrarr: "⇝",
                    zopf: "\uD835\uDD6B",
                    zscr: "\uD835\uDCCF",
                    zwj: "‍",
                    zwnj: "‌",
                };
            rD.ngsp = "";
            var rI = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//],
                rB = new (class e {
                    static fromArray(t) {
                        return t
                            ? ((function (e, t) {
                                if (null != t && !(Array.isArray(t) && 2 == t.length)) throw Error(`Expected '${e}' to be an array, [start, end].`);
                                if (null != t) {
                                    let e = t[0],
                                        r = t[1];
                                    rI.forEach((t) => {
                                        if (t.test(e) || t.test(r)) throw Error(`['${e}', '${r}'] contains unusable interpolation symbol.`);
                                    });
                                }
                            })("interpolation", t),
                                new e(t[0], t[1]))
                            : rB;
                    }
                    constructor(e, t) {
                        (this.start = e), (this.end = t);
                    }
                })("{{", "}}"),
                rM = class extends tG {
                    constructor(e, t, r) {
                        super(r, e), (this.tokenType = t);
                    }
                },
                rP = class {
                    constructor(e, t, r) {
                        (this.tokens = e), (this.errors = t), (this.nonNormalizedIcuExpressions = r);
                    }
                },
                rH = /\r\n?/g;
            function rR(e) {
                return `Unexpected character "${0 === e ? "EOF" : String.fromCharCode(e)}"`;
            }
            function rF(e) {
                return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
            }
            ((n = a || (a = {})).HEX = "hexadecimal"), (n.DEC = "decimal");
            var rU = class {
                constructor(e) {
                    this.error = e;
                }
            },
                rV = class {
                    constructor(e, t, r) {
                        (this._getTagContentType = t),
                            (this._currentTokenStart = null),
                            (this._currentTokenType = null),
                            (this._expansionCaseStack = []),
                            (this._inInterpolation = !1),
                            (this._fullNameStack = []),
                            (this.tokens = []),
                            (this.errors = []),
                            (this.nonNormalizedIcuExpressions = []),
                            (this._tokenizeIcu = r.tokenizeExpansionForms || !1),
                            (this._interpolationConfig = r.interpolationConfig || rB),
                            (this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((e) => e.codePointAt(0) || 0)),
                            (this._canSelfClose = r.canSelfClose || !1),
                            (this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || !1);
                        let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
                        (this._cursor = r.escapedString ? new rY(e, n) : new rX(e, n)),
                            (this._preserveLineEndings = r.preserveLineEndings || !1),
                            (this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || !1),
                            (this._tokenizeBlocks = r.tokenizeBlocks ?? !0);
                        try {
                            this._cursor.init();
                        } catch (e) {
                            this.handleError(e);
                        }
                    }
                    _processCarriageReturns(e) {
                        return this._preserveLineEndings
                            ? e
                            : e.replace(
                                rH,
                                `
`
                            );
                    }
                    tokenize() {
                        for (; 0 !== this._cursor.peek();) {
                            let e = this._cursor.clone();
                            try {
                                if (this._attemptCharCode(60)) {
                                    if (this._attemptCharCode(33))
                                        this._attemptStr("[CDATA[")
                                            ? this._consumeCdata(e)
                                            : this._attemptStr("--")
                                                ? this._consumeComment(e)
                                                : this._attemptStrCaseInsensitive("doctype")
                                                    ? this._consumeDocType(e)
                                                    : this._consumeBogusComment(e);
                                    else if (this._attemptCharCode(47)) this._consumeTagClose(e);
                                    else {
                                        let t = this._cursor.clone();
                                        this._attemptCharCode(63) ? ((this._cursor = t), this._consumeBogusComment(e)) : this._consumeTagOpen(e);
                                    }
                                } else
                                    this._tokenizeBlocks && this._attemptCharCode(64)
                                        ? this._consumeBlockStart(e)
                                        : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125)
                                            ? this._consumeBlockEnd(e)
                                            : (this._tokenizeIcu && this._tokenizeExpansionForm()) ||
                                            this._consumeWithInterpolation(
                                                5,
                                                8,
                                                () => this._isTextEnd(),
                                                () => this._isTagStart()
                                            );
                            } catch (e) {
                                this.handleError(e);
                            }
                        }
                        this._beginToken(30), this._endToken([]);
                    }
                    _getBlockName() {
                        let e = !1,
                            t = this._cursor.clone();
                        return this._attemptCharCodeUntilFn((t) => (tP(t) ? !e : !rG(t) || ((e = !0), !1))), this._cursor.getChars(t).trim();
                    }
                    _consumeBlockStart(e) {
                        this._beginToken(25, e);
                        let t = this._endToken([this._getBlockName()]);
                        if (40 === this._cursor.peek()) {
                            if ((this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(rO), this._attemptCharCode(41))) this._attemptCharCodeUntilFn(rO);
                            else {
                                t.type = 29;
                                return;
                            }
                        }
                        this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : (t.type = 29);
                    }
                    _consumeBlockEnd(e) {
                        this._beginToken(27, e), this._endToken([]);
                    }
                    _consumeBlockParameters() {
                        for (this._attemptCharCodeUntilFn(rK); 41 !== this._cursor.peek() && 0 !== this._cursor.peek();) {
                            this._beginToken(28);
                            let e = this._cursor.clone(),
                                t = null,
                                r = 0;
                            for (; (59 !== this._cursor.peek() && 0 !== this._cursor.peek()) || null !== t;) {
                                let e = this._cursor.peek();
                                if (92 === e) this._cursor.advance();
                                else if (e === t) t = null;
                                else if (null === t && tV(e)) t = e;
                                else if (40 === e && null === t) r++;
                                else if (41 === e && null === t) {
                                    if (0 === r) break;
                                    r > 0 && r--;
                                }
                                this._cursor.advance();
                            }
                            this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(rK);
                        }
                    }
                    _tokenizeExpansionForm() {
                        if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), !0;
                        if (125 !== this._cursor.peek() && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), !0;
                        if (125 === this._cursor.peek()) {
                            if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
                            if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0;
                        }
                        return !1;
                    }
                    _beginToken(e, t = this._cursor.clone()) {
                        (this._currentTokenStart = t), (this._currentTokenType = e);
                    }
                    _endToken(e, t) {
                        if (null === this._currentTokenStart) throw new rM("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(t));
                        if (null === this._currentTokenType) throw new rM("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
                        let r = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
                        return this.tokens.push(r), (this._currentTokenStart = null), (this._currentTokenType = null), r;
                    }
                    _createError(e, t) {
                        this._isInExpansionForm() && (e += ' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');
                        let r = new rM(e, this._currentTokenType, t);
                        return (this._currentTokenStart = null), (this._currentTokenType = null), new rU(r);
                    }
                    handleError(e) {
                        if ((e instanceof rJ && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof rU)) this.errors.push(e.error);
                        else throw e;
                    }
                    _attemptCharCode(e) {
                        return this._cursor.peek() === e && (this._cursor.advance(), !0);
                    }
                    _attemptCharCodeCaseInsensitive(e) {
                        return rj(this._cursor.peek()) === rj(e) && (this._cursor.advance(), !0);
                    }
                    _requireCharCode(e) {
                        let t = this._cursor.clone();
                        if (!this._attemptCharCode(e)) throw this._createError(rR(this._cursor.peek()), this._cursor.getSpan(t));
                    }
                    _attemptStr(e) {
                        let t = e.length;
                        if (this._cursor.charsLeft() < t) return !1;
                        let r = this._cursor.clone();
                        for (let n = 0; n < t; n++) if (!this._attemptCharCode(e.charCodeAt(n))) return (this._cursor = r), !1;
                        return !0;
                    }
                    _attemptStrCaseInsensitive(e) {
                        for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
                        return !0;
                    }
                    _requireStr(e) {
                        let t = this._cursor.clone();
                        if (!this._attemptStr(e)) throw this._createError(rR(this._cursor.peek()), this._cursor.getSpan(t));
                    }
                    _requireStrCaseInsensitive(e) {
                        let t = this._cursor.clone();
                        if (!this._attemptStrCaseInsensitive(e)) throw this._createError(rR(this._cursor.peek()), this._cursor.getSpan(t));
                    }
                    _attemptCharCodeUntilFn(e) {
                        for (; !e(this._cursor.peek());) this._cursor.advance();
                    }
                    _requireCharCodeUntilFn(e, t) {
                        let r = this._cursor.clone();
                        if ((this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t)) throw this._createError(rR(this._cursor.peek()), this._cursor.getSpan(r));
                    }
                    _attemptUntilChar(e) {
                        for (; this._cursor.peek() !== e;) this._cursor.advance();
                    }
                    _readChar() {
                        let e = String.fromCodePoint(this._cursor.peek());
                        return this._cursor.advance(), e;
                    }
                    _consumeEntity(e) {
                        this._beginToken(9);
                        let t = this._cursor.clone();
                        if ((this._cursor.advance(), this._attemptCharCode(35))) {
                            let e = this._attemptCharCode(120) || this._attemptCharCode(88),
                                n = this._cursor.clone();
                            if ((this._attemptCharCodeUntilFn(r$), 59 != this._cursor.peek())) {
                                var r;
                                this._cursor.advance();
                                let n = e ? a.HEX : a.DEC;
                                throw this._createError(((r = this._cursor.getChars(t)), `Unable to parse entity "${r}" - ${n} character reference entities must end with ";"`), this._cursor.getSpan());
                            }
                            let i = this._cursor.getChars(n);
                            this._cursor.advance();
                            try {
                                let r = parseInt(i, e ? 16 : 10);
                                this._endToken([String.fromCharCode(r), this._cursor.getChars(t)]);
                            } catch {
                                throw this._createError(rF(this._cursor.getChars(t)), this._cursor.getSpan());
                            }
                        } else {
                            let r = this._cursor.clone();
                            if ((this._attemptCharCodeUntilFn(rz), 59 != this._cursor.peek())) this._beginToken(e, t), (this._cursor = r), this._endToken(["&"]);
                            else {
                                let e = this._cursor.getChars(r);
                                this._cursor.advance();
                                let n = rD[e];
                                if (!n) throw this._createError(rF(e), this._cursor.getSpan(t));
                                this._endToken([n, `&${e};`]);
                            }
                        }
                    }
                    _consumeRawText(e, t) {
                        this._beginToken(e ? 6 : 7);
                        let r = [];
                        for (; ;) {
                            let n = this._cursor.clone(),
                                a = t();
                            if (((this._cursor = n), a)) break;
                            e && 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(r.join(""))]), (r.length = 0), this._consumeEntity(6), this._beginToken(6)) : r.push(this._readChar());
                        }
                        this._endToken([this._processCarriageReturns(r.join(""))]);
                    }
                    _consumeComment(e) {
                        this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
                    }
                    _consumeBogusComment(e) {
                        this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => 62 === this._cursor.peek()), this._beginToken(11), this._cursor.advance(), this._endToken([]);
                    }
                    _consumeCdata(e) {
                        this._beginToken(12, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
                    }
                    _consumeDocType(e) {
                        this._beginToken(18, e), this._endToken([]), this._consumeRawText(!1, () => 62 === this._cursor.peek()), this._beginToken(19), this._cursor.advance(), this._endToken([]);
                    }
                    _consumePrefixAndName() {
                        var e;
                        let t,
                            r = this._cursor.clone(),
                            n = "";
                        for (; 58 !== this._cursor.peek() && !(((e = this._cursor.peek()) < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57));) this._cursor.advance();
                        return 58 === this._cursor.peek() ? ((n = this._cursor.getChars(r)), this._cursor.advance(), (t = this._cursor.clone())) : (t = r), this._requireCharCodeUntilFn(rW, "" === n ? 0 : 1), [n, this._cursor.getChars(t)];
                    }
                    _consumeTagOpen(e) {
                        let t,
                            r,
                            n,
                            a = [];
                        try {
                            if (!tR(this._cursor.peek())) throw this._createError(rR(this._cursor.peek()), this._cursor.getSpan(e));
                            for (
                                r = (n = this._consumeTagOpenStart(e)).parts[0], t = n.parts[1], this._attemptCharCodeUntilFn(rO);
                                47 !== this._cursor.peek() && 62 !== this._cursor.peek() && 60 !== this._cursor.peek() && 0 !== this._cursor.peek();

                            ) {
                                let [e, t] = this._consumeAttributeName();
                                if ((this._attemptCharCodeUntilFn(rO), this._attemptCharCode(61))) {
                                    this._attemptCharCodeUntilFn(rO);
                                    let r = this._consumeAttributeValue();
                                    a.push({ prefix: e, name: t, value: r });
                                } else a.push({ prefix: e, name: t });
                                this._attemptCharCodeUntilFn(rO);
                            }
                            this._consumeTagOpenEnd();
                        } catch (t) {
                            if (t instanceof rU) {
                                n ? (n.type = 4) : (this._beginToken(5, e), this._endToken(["<"]));
                                return;
                            }
                            throw t;
                        }
                        if (this._canSelfClose && 2 === this.tokens[this.tokens.length - 1].type) return;
                        let i = this._getTagContentType(t, r, this._fullNameStack.length > 0, a);
                        this._handleFullNameStackForTagOpen(r, t), i === rl.RAW_TEXT ? this._consumeRawTextWithTagClose(r, t, !1) : i === rl.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, t, !0);
                    }
                    _consumeRawTextWithTagClose(e, t, r) {
                        this._consumeRawText(
                            r,
                            () =>
                                !!(this._attemptCharCode(60) && this._attemptCharCode(47) && (this._attemptCharCodeUntilFn(rO), this._attemptStrCaseInsensitive(e ? `${e}:${t}` : t))) &&
                                (this._attemptCharCodeUntilFn(rO), this._attemptCharCode(62))
                        ),
                            this._beginToken(3),
                            this._requireCharCodeUntilFn((e) => 62 === e, 3),
                            this._cursor.advance(),
                            this._endToken([e, t]),
                            this._handleFullNameStackForTagClose(e, t);
                    }
                    _consumeTagOpenStart(e) {
                        this._beginToken(0, e);
                        let t = this._consumePrefixAndName();
                        return this._endToken(t);
                    }
                    _consumeAttributeName() {
                        let e = this._cursor.peek();
                        if (39 === e || 34 === e) throw this._createError(rR(e), this._cursor.getSpan());
                        this._beginToken(14);
                        let t = this._consumePrefixAndName();
                        return this._endToken(t), t;
                    }
                    _consumeAttributeValue() {
                        let e;
                        if (39 === this._cursor.peek() || 34 === this._cursor.peek()) {
                            let t = this._cursor.peek();
                            this._consumeQuote(t);
                            let r = () => this._cursor.peek() === t;
                            (e = this._consumeWithInterpolation(16, 17, r, r)), this._consumeQuote(t);
                        } else {
                            let t = () => rW(this._cursor.peek());
                            e = this._consumeWithInterpolation(16, 17, t, t);
                        }
                        return e;
                    }
                    _consumeQuote(e) {
                        this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
                    }
                    _consumeTagOpenEnd() {
                        let e = this._attemptCharCode(47) ? 2 : 1;
                        this._beginToken(e), this._requireCharCode(62), this._endToken([]);
                    }
                    _consumeTagClose(e) {
                        if ((this._beginToken(3, e), this._attemptCharCodeUntilFn(rO), this._allowHtmComponentClosingTags && this._attemptCharCode(47))) this._attemptCharCodeUntilFn(rO), this._requireCharCode(62), this._endToken([]);
                        else {
                            let [e, t] = this._consumePrefixAndName();
                            this._attemptCharCodeUntilFn(rO), this._requireCharCode(62), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t);
                        }
                    }
                    _consumeExpansionFormStart() {
                        this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
                        let e = this._readUntil(44),
                            t = this._processCarriageReturns(e);
                        if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
                        else {
                            let r = this._endToken([e]);
                            t !== e && this.nonNormalizedIcuExpressions.push(r);
                        }
                        this._requireCharCode(44), this._attemptCharCodeUntilFn(rO), this._beginToken(7);
                        let r = this._readUntil(44);
                        this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(rO);
                    }
                    _consumeExpansionCaseStart() {
                        this._beginToken(21);
                        let e = this._readUntil(123).trim();
                        this._endToken([e]), this._attemptCharCodeUntilFn(rO), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(rO), this._expansionCaseStack.push(22);
                    }
                    _consumeExpansionCaseEnd() {
                        this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(rO), this._expansionCaseStack.pop();
                    }
                    _consumeExpansionFormEnd() {
                        this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
                    }
                    _consumeWithInterpolation(e, t, r, n) {
                        this._beginToken(e);
                        let a = [];
                        for (; !r();) {
                            let r = this._cursor.clone();
                            this._interpolationConfig && this._attemptStr(this._interpolationConfig.start)
                                ? (this._endToken([this._processCarriageReturns(a.join(""))], r), (a.length = 0), this._consumeInterpolation(t, r, n), this._beginToken(e))
                                : 38 === this._cursor.peek()
                                    ? (this._endToken([this._processCarriageReturns(a.join(""))]), (a.length = 0), this._consumeEntity(e), this._beginToken(e))
                                    : a.push(this._readChar());
                        }
                        this._inInterpolation = !1;
                        let i = this._processCarriageReturns(a.join(""));
                        return this._endToken([i]), i;
                    }
                    _consumeInterpolation(e, t, r) {
                        let n = [];
                        this._beginToken(e, t), n.push(this._interpolationConfig.start);
                        let a = this._cursor.clone(),
                            i = null,
                            s = !1;
                        for (; 0 !== this._cursor.peek() && (null === r || !r());) {
                            let e = this._cursor.clone();
                            if (this._isTagStart()) {
                                (this._cursor = e), n.push(this._getProcessedChars(a, e)), this._endToken(n);
                                return;
                            }
                            if (null === i) {
                                if (this._attemptStr(this._interpolationConfig.end)) {
                                    n.push(this._getProcessedChars(a, e)), n.push(this._interpolationConfig.end), this._endToken(n);
                                    return;
                                }
                                this._attemptStr("//") && (s = !0);
                            }
                            let t = this._cursor.peek();
                            this._cursor.advance(), 92 === t ? this._cursor.advance() : t === i ? (i = null) : !s && null === i && tV(t) && (i = t);
                        }
                        n.push(this._getProcessedChars(a, this._cursor)), this._endToken(n);
                    }
                    _getProcessedChars(e, t) {
                        return this._processCarriageReturns(t.getChars(e));
                    }
                    _isTextEnd() {
                        return !!(
                            this._isTagStart() ||
                            0 === this._cursor.peek() ||
                            (this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || (125 === this._cursor.peek() && this._isInExpansionCase()))) ||
                            (this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || 125 === this._cursor.peek()))
                        );
                    }
                    _isTagStart() {
                        if (60 === this._cursor.peek()) {
                            let e = this._cursor.clone();
                            e.advance();
                            let t = e.peek();
                            if ((97 <= t && t <= 122) || (65 <= t && t <= 90) || 47 === t || 33 === t) return !0;
                        }
                        return !1;
                    }
                    _isBlockStart() {
                        if (this._tokenizeBlocks && 64 === this._cursor.peek()) {
                            let e = this._cursor.clone();
                            if ((e.advance(), rG(e.peek()))) return !0;
                        }
                        return !1;
                    }
                    _readUntil(e) {
                        let t = this._cursor.clone();
                        return this._attemptUntilChar(e), this._cursor.getChars(t);
                    }
                    _isInExpansion() {
                        return this._isInExpansionCase() || this._isInExpansionForm();
                    }
                    _isInExpansionCase() {
                        return this._expansionCaseStack.length > 0 && 22 === this._expansionCaseStack[this._expansionCaseStack.length - 1];
                    }
                    _isInExpansionForm() {
                        return this._expansionCaseStack.length > 0 && 20 === this._expansionCaseStack[this._expansionCaseStack.length - 1];
                    }
                    isExpansionFormStart() {
                        if (123 !== this._cursor.peek()) return !1;
                        if (this._interpolationConfig) {
                            let e = this._cursor.clone(),
                                t = this._attemptStr(this._interpolationConfig.start);
                            return (this._cursor = e), !t;
                        }
                        return !0;
                    }
                    _handleFullNameStackForTagOpen(e, t) {
                        let r = t6(e, t);
                        (0 === this._fullNameStack.length || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
                    }
                    _handleFullNameStackForTagClose(e, t) {
                        let r = t6(e, t);
                        0 !== this._fullNameStack.length && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
                    }
                };
            function rO(e) {
                return !tP(e) || 0 === e;
            }
            function rW(e) {
                return tP(e) || 62 === e || 60 === e || 47 === e || 39 === e || 34 === e || 61 === e || 0 === e;
            }
            function r$(e) {
                return 59 === e || 0 === e || !((e >= 97 && e <= 102) || (e >= 65 && e <= 70) || tH(e));
            }
            function rz(e) {
                return 59 === e || 0 === e || !tR(e);
            }
            function rj(e) {
                return e >= 97 && e <= 122 ? e - 97 + 65 : e;
            }
            function rG(e) {
                return tR(e) || tH(e) || 95 === e;
            }
            function rK(e) {
                return 59 !== e && rO(e);
            }
            var rX = class e {
                constructor(t, r) {
                    if (t instanceof e) {
                        (this.file = t.file), (this.input = t.input), (this.end = t.end);
                        let e = t.state;
                        this.state = { peek: e.peek, offset: e.offset, line: e.line, column: e.column };
                    } else {
                        if (!r) throw Error("Programming error: the range argument must be provided with a file argument.");
                        (this.file = t), (this.input = t.content), (this.end = r.endPos), (this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol });
                    }
                }
                clone() {
                    return new e(this);
                }
                peek() {
                    return this.state.peek;
                }
                charsLeft() {
                    return this.end - this.state.offset;
                }
                diff(e) {
                    return this.state.offset - e.state.offset;
                }
                advance() {
                    this.advanceState(this.state);
                }
                init() {
                    this.updatePeek(this.state);
                }
                getSpan(e, t) {
                    let r = (e = e || this);
                    if (t) for (; this.diff(e) > 0 && -1 !== t.indexOf(e.peek());) r === e && (e = e.clone()), e.advance();
                    let n = this.locationFromCursor(e),
                        a = this.locationFromCursor(this),
                        i = r !== e ? this.locationFromCursor(r) : n;
                    return new tj(n, a, i);
                }
                getChars(e) {
                    return this.input.substring(e.state.offset, this.state.offset);
                }
                charAt(e) {
                    return this.input.charCodeAt(e);
                }
                advanceState(e) {
                    if (e.offset >= this.end) throw ((this.state = e), new rJ('Unexpected character "EOF"', this));
                    let t = this.charAt(e.offset);
                    10 === t ? (e.line++, (e.column = 0)) : tF(t) || e.column++, e.offset++, this.updatePeek(e);
                }
                updatePeek(e) {
                    e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
                }
                locationFromCursor(e) {
                    return new t$(e.file, e.state.offset, e.state.line, e.state.column);
                }
            },
                rY = class e extends rX {
                    constructor(t, r) {
                        t instanceof e ? (super(t), (this.internalState = { ...t.internalState })) : (super(t, r), (this.internalState = this.state));
                    }
                    advance() {
                        (this.state = this.internalState), super.advance(), this.processEscapeSequence();
                    }
                    init() {
                        super.init(), this.processEscapeSequence();
                    }
                    clone() {
                        return new e(this);
                    }
                    getChars(e) {
                        let t = e.clone(),
                            r = "";
                        for (; t.internalState.offset < this.internalState.offset;) (r += String.fromCodePoint(t.peek())), t.advance();
                        return r;
                    }
                    processEscapeSequence() {
                        let e = () => this.internalState.peek;
                        if (92 === e()) {
                            if (((this.internalState = { ...this.state }), this.advanceState(this.internalState), 110 === e())) this.state.peek = 10;
                            else if (114 === e()) this.state.peek = 13;
                            else if (118 === e()) this.state.peek = 11;
                            else if (116 === e()) this.state.peek = 9;
                            else if (98 === e()) this.state.peek = 8;
                            else if (102 === e()) this.state.peek = 12;
                            else if (117 === e()) {
                                if ((this.advanceState(this.internalState), 123 === e())) {
                                    this.advanceState(this.internalState);
                                    let t = this.clone(),
                                        r = 0;
                                    for (; 125 !== e();) this.advanceState(this.internalState), r++;
                                    this.state.peek = this.decodeHexDigits(t, r);
                                } else {
                                    let e = this.clone();
                                    this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(e, 4));
                                }
                            } else if (120 === e()) {
                                this.advanceState(this.internalState);
                                let e = this.clone();
                                this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(e, 2));
                            } else if (tU(e())) {
                                let t = "",
                                    r = 0,
                                    n = this.clone();
                                for (; tU(e()) && r < 3;) (n = this.clone()), (t += String.fromCodePoint(e())), this.advanceState(this.internalState), r++;
                                (this.state.peek = parseInt(t, 8)), (this.internalState = n.internalState);
                            } else tF(this.internalState.peek) ? (this.advanceState(this.internalState), (this.state = this.internalState)) : (this.state.peek = this.internalState.peek);
                        }
                    }
                    decodeHexDigits(e, t) {
                        let r = parseInt(this.input.slice(e.internalState.offset, e.internalState.offset + t), 16);
                        if (isNaN(r)) throw ((e.state = e.internalState), new rJ("Invalid hexadecimal escape sequence", e));
                        return r;
                    }
                },
                rJ = class {
                    constructor(e, t) {
                        (this.msg = e), (this.cursor = t);
                    }
                },
                rQ = class e extends tG {
                    static create(t, r, n) {
                        return new e(t, r, n);
                    }
                    constructor(e, t, r) {
                        super(t, r), (this.elementName = e);
                    }
                },
                rZ = class {
                    constructor(e, t) {
                        (this.rootNodes = e), (this.errors = t);
                    }
                },
                r0 = class {
                    constructor(e) {
                        this.getTagDefinition = e;
                    }
                    parse(e, t, r, n = !1, a) {
                        let i = (e) => (t, ...r) => e(t.toLowerCase(), ...r),
                            s = n ? this.getTagDefinition : i(this.getTagDefinition),
                            o = (e) => s(e).getContentType(),
                            l = n ? a : i(a),
                            c = (function (e, t, r, n = {}) {
                                let a = new rV(new tz(e, t), r, n);
                                return (
                                    a.tokenize(),
                                    new rP(
                                        (function (e) {
                                            let t = [],
                                                r;
                                            for (let n = 0; n < e.length; n++) {
                                                let a = e[n];
                                                (r && 5 === r.type && 5 === a.type) || (r && 16 === r.type && 16 === a.type) ? ((r.parts[0] += a.parts[0]), (r.sourceSpan.end = a.sourceSpan.end)) : ((r = a), t.push(r));
                                            }
                                            return t;
                                        })(a.tokens),
                                        a.errors,
                                        a.nonNormalizedIcuExpressions
                                    )
                                );
                            })(
                                e,
                                t,
                                a
                                    ? (e, t, r, n) => {
                                        let a = l(e, t, r, n);
                                        return void 0 !== a ? a : o(e);
                                    }
                                    : o,
                                r
                            ),
                            u = (r && r.canSelfClose) || !1,
                            p = (r && r.allowHtmComponentClosingTags) || !1,
                            h = new r1(c.tokens, s, u, p, n);
                        return h.build(), new rZ(h.rootNodes, c.errors.concat(h.errors));
                    }
                },
                r1 = class e {
                    constructor(e, t, r, n, a) {
                        (this.tokens = e),
                            (this.getTagDefinition = t),
                            (this.canSelfClose = r),
                            (this.allowHtmComponentClosingTags = n),
                            (this.isTagNameCaseSensitive = a),
                            (this._index = -1),
                            (this._containerStack = []),
                            (this.rootNodes = []),
                            (this.errors = []),
                            this._advance();
                    }
                    build() {
                        for (; 30 !== this._peek.type;)
                            0 === this._peek.type || 4 === this._peek.type
                                ? this._consumeStartTag(this._advance())
                                : 3 === this._peek.type
                                    ? (this._closeVoidElement(), this._consumeEndTag(this._advance()))
                                    : 12 === this._peek.type
                                        ? (this._closeVoidElement(), this._consumeCdata(this._advance()))
                                        : 10 === this._peek.type
                                            ? (this._closeVoidElement(), this._consumeComment(this._advance()))
                                            : 5 === this._peek.type || 7 === this._peek.type || 6 === this._peek.type
                                                ? (this._closeVoidElement(), this._consumeText(this._advance()))
                                                : 20 === this._peek.type
                                                    ? this._consumeExpansion(this._advance())
                                                    : 25 === this._peek.type
                                                        ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance()))
                                                        : 27 === this._peek.type
                                                            ? (this._closeVoidElement(), this._consumeBlockClose(this._advance()))
                                                            : 29 === this._peek.type
                                                                ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance()))
                                                                : 18 === this._peek.type
                                                                    ? this._consumeDocType(this._advance())
                                                                    : this._advance();
                        for (let e of this._containerStack) e instanceof rL && this.errors.push(rQ.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
                    }
                    _advance() {
                        let e = this._peek;
                        return this._index < this.tokens.length - 1 && this._index++, (this._peek = this.tokens[this._index]), e;
                    }
                    _advanceIf(e) {
                        return this._peek.type === e ? this._advance() : null;
                    }
                    _consumeCdata(e) {
                        let t = this._advance(),
                            r = this._getText(t),
                            n = this._advanceIf(13);
                        this._addToParent(new r_(r, new tj(e.sourceSpan.start, (n || t).sourceSpan.end), [t]));
                    }
                    _consumeComment(e) {
                        let t = this._advanceIf(7),
                            r = this._advanceIf(11),
                            n = null != t ? t.parts[0].trim() : null,
                            a = new tj(e.sourceSpan.start, (r || t || e).sourceSpan.end);
                        this._addToParent(new rx(n, a));
                    }
                    _consumeDocType(e) {
                        let t = this._advanceIf(7),
                            r = this._advanceIf(19),
                            n = null != t ? t.parts[0].trim() : null,
                            a = new tj(e.sourceSpan.start, (r || t || e).sourceSpan.end);
                        this._addToParent(new rE(n, a));
                    }
                    _consumeExpansion(e) {
                        let t = this._advance(),
                            r = this._advance(),
                            n = [];
                        for (; 21 === this._peek.type;) {
                            let e = this._parseExpansionCase();
                            if (!e) return;
                            n.push(e);
                        }
                        if (24 !== this._peek.type) {
                            this.errors.push(rQ.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
                            return;
                        }
                        let a = new tj(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
                        this._addToParent(new rw(t.parts[0], r.parts[0], n, a, t.sourceSpan)), this._advance();
                    }
                    _parseExpansionCase() {
                        let t = this._advance();
                        if (22 !== this._peek.type) return this.errors.push(rQ.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
                        let r = this._advance(),
                            n = this._collectExpansionExpTokens(r);
                        if (!n) return null;
                        let a = this._advance();
                        n.push({ type: 30, parts: [], sourceSpan: a.sourceSpan });
                        let i = new e(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
                        if ((i.build(), i.errors.length > 0)) return (this.errors = this.errors.concat(i.errors)), null;
                        let s = new tj(t.sourceSpan.start, a.sourceSpan.end, t.sourceSpan.fullStart),
                            o = new tj(r.sourceSpan.start, a.sourceSpan.end, r.sourceSpan.fullStart);
                        return new rk(t.parts[0], i.rootNodes, s, t.sourceSpan, o);
                    }
                    _collectExpansionExpTokens(e) {
                        let t = [],
                            r = [22];
                        for (; ;) {
                            if (((20 === this._peek.type || 22 === this._peek.type) && r.push(this._peek.type), 23 === this._peek.type)) {
                                if (!r2(r, 22)) return this.errors.push(rQ.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                                if ((r.pop(), 0 === r.length)) return t;
                            }
                            if (24 === this._peek.type) {
                                if (!r2(r, 20)) return this.errors.push(rQ.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                                r.pop();
                            }
                            if (30 === this._peek.type) return this.errors.push(rQ.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                            t.push(this._advance());
                        }
                    }
                    _getText(e) {
                        let t = e.parts[0];
                        if (
                            t.length > 0 &&
                            t[0] ==
                            `
`
                        ) {
                            let e = this._getClosestParentElement();
                            null != e && 0 == e.children.length && this.getTagDefinition(e.name).ignoreFirstLf && (t = t.substring(1));
                        }
                        return t;
                    }
                    _consumeText(e) {
                        let t = [e],
                            r = e.sourceSpan,
                            n = e.parts[0];
                        if (
                            n.length > 0 &&
                            n[0] ===
                            `
`
                        ) {
                            let r = this._getContainer();
                            null != r && 0 === r.children.length && this.getTagDefinition(r.name).ignoreFirstLf && ((n = n.substring(1)), (t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [n] }));
                        }
                        for (; 8 === this._peek.type || 5 === this._peek.type || 9 === this._peek.type;)
                            (e = this._advance()), t.push(e), 8 === e.type ? (n += e.parts.join("").replace(/&([^;]+);/g, r3)) : 9 === e.type ? (n += e.parts[0]) : (n += e.parts.join(""));
                        if (n.length > 0) {
                            let a = e.sourceSpan;
                            this._addToParent(new rb(n, new tj(r.start, a.end, r.fullStart, r.details), t));
                        }
                    }
                    _closeVoidElement() {
                        let e = this._getContainer();
                        e instanceof rT && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
                    }
                    _consumeStartTag(e) {
                        let [t, r] = e.parts,
                            n = [];
                        for (; 14 === this._peek.type;) n.push(this._consumeAttr(this._advance()));
                        let a = this._getElementFullName(t, r, this._getClosestParentElement()),
                            i = !1;
                        if (2 === this._peek.type) {
                            this._advance(), (i = !0);
                            let t = this.getTagDefinition(a);
                            this.canSelfClose || t.canSelfClose || null !== t4(a) || t.isVoid || this.errors.push(rQ.create(a, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
                        } else 1 === this._peek.type && (this._advance(), (i = !1));
                        let s = this._peek.sourceSpan.fullStart,
                            o = new tj(e.sourceSpan.start, s, e.sourceSpan.fullStart),
                            l = new rT(a, n, [], o, new tj(e.sourceSpan.start, s, e.sourceSpan.fullStart), void 0, new tj(e.sourceSpan.start.moveBy(1), e.sourceSpan.end)),
                            c = this._getContainer();
                        this._pushContainer(l, c instanceof rT && this.getTagDefinition(c.name).isClosedByChild(l.name)),
                            i ? this._popContainer(a, rT, o) : 4 === e.type && (this._popContainer(a, rT, null), this.errors.push(rQ.create(a, o, `Opening tag "${a}" not terminated.`)));
                    }
                    _pushContainer(e, t) {
                        t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
                    }
                    _consumeEndTag(e) {
                        let t = this.allowHtmComponentClosingTags && 0 === e.parts.length ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
                        if (t && this.getTagDefinition(t).isVoid) this.errors.push(rQ.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
                        else if (!this._popContainer(t, rT, e.sourceSpan)) {
                            let r = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
                            this.errors.push(rQ.create(t, e.sourceSpan, r));
                        }
                    }
                    _popContainer(e, t, r) {
                        let n = !1;
                        for (let a = this._containerStack.length - 1; a >= 0; a--) {
                            let i = this._containerStack[a];
                            if (t4(i.name) ? i.name === e : (null == e || i.name.toLowerCase() === e.toLowerCase()) && i instanceof t)
                                return (i.endSourceSpan = r), (i.sourceSpan.end = null !== r ? r.end : i.sourceSpan.end), this._containerStack.splice(a, this._containerStack.length - a), !n;
                            (i instanceof rL || (i instanceof rT && !this.getTagDefinition(i.name).closedByParent)) && (n = !0);
                        }
                        return !1;
                    }
                    _consumeAttr(e) {
                        let t = t6(e.parts[0], e.parts[1]),
                            r = e.sourceSpan.end,
                            n;
                        15 === this._peek.type && (n = this._advance());
                        let a = "",
                            i = [],
                            s,
                            o;
                        if (16 === this._peek.type)
                            for (s = this._peek.sourceSpan, o = this._peek.sourceSpan.end; 16 === this._peek.type || 17 === this._peek.type || 9 === this._peek.type;) {
                                let e = this._advance();
                                i.push(e), 17 === e.type ? (a += e.parts.join("").replace(/&([^;]+);/g, r3)) : 9 === e.type ? (a += e.parts[0]) : (a += e.parts.join("")), (o = r = e.sourceSpan.end);
                            }
                        15 === this._peek.type && (o = r = this._advance().sourceSpan.end);
                        let l = s && o && new tj((null == n ? void 0 : n.sourceSpan.start) ?? s.start, o, (null == n ? void 0 : n.sourceSpan.fullStart) ?? s.fullStart);
                        return new rC(t, a, new tj(e.sourceSpan.start, r, e.sourceSpan.fullStart), e.sourceSpan, l, i.length > 0 ? i : void 0, void 0);
                    }
                    _consumeBlockOpen(e) {
                        let t = [];
                        for (; 28 === this._peek.type;) {
                            let e = this._advance();
                            t.push(new rq(e.parts[0], e.sourceSpan));
                        }
                        26 === this._peek.type && this._advance();
                        let r = this._peek.sourceSpan.fullStart,
                            n = new tj(e.sourceSpan.start, r, e.sourceSpan.fullStart),
                            a = new tj(e.sourceSpan.start, r, e.sourceSpan.fullStart),
                            i = new rL(e.parts[0], t, [], n, a);
                        this._pushContainer(i, !1);
                    }
                    _consumeBlockClose(e) {
                        this._popContainer(null, rL, e.sourceSpan) ||
                            this.errors.push(rQ.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
                    }
                    _consumeIncompleteBlock(e) {
                        let t = [];
                        for (; 28 === this._peek.type;) {
                            let e = this._advance();
                            t.push(new rq(e.parts[0], e.sourceSpan));
                        }
                        let r = this._peek.sourceSpan.fullStart,
                            n = new tj(e.sourceSpan.start, r, e.sourceSpan.fullStart),
                            a = new tj(e.sourceSpan.start, r, e.sourceSpan.fullStart),
                            i = new rL(e.parts[0], t, [], n, a);
                        this._pushContainer(i, !1),
                            this._popContainer(null, rL, null),
                            this.errors.push(rQ.create(e.parts[0], n, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
                    }
                    _getContainer() {
                        return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
                    }
                    _getClosestParentElement() {
                        for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof rT) return this._containerStack[e];
                        return null;
                    }
                    _addToParent(e) {
                        let t = this._getContainer();
                        null === t ? this.rootNodes.push(e) : t.children.push(e);
                    }
                    _getElementFullName(e, t, r) {
                        if ("" === e && "" === (e = this.getTagDefinition(t).implicitNamespacePrefix || "") && null != r) {
                            let t = t1(r.name)[1];
                            this.getTagDefinition(t).preventNamespaceInheritance || (e = t4(r.name));
                        }
                        return t6(e, t);
                    }
                };
            function r2(e, t) {
                return e.length > 0 && e[e.length - 1] === t;
            }
            function r3(e, t) {
                return void 0 !== rD[t] ? rD[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
            }
            var r4 = class extends r0 {
                constructor() {
                    super(rS);
                }
                parse(e, t, r, n = !1, a) {
                    return super.parse(e, t, r, n, a);
                }
            },
                r6 = null,
                r5 = () => (r6 || (r6 = new r4()), r6);
            function r9(e, t = {}) {
                let { canSelfClose: r = !1, allowHtmComponentClosingTags: n = !1, isTagNameCaseSensitive: a = !1, getTagContentType: i, tokenizeAngularBlocks: s = !1 } = t;
                return r5().parse(e, "angular-html-parser", { tokenizeExpansionForms: s, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: s }, a, i);
            }
            var r8 = RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s"),
                r7 = function (e) {
                    let t = e.match(r8);
                    if (!t) return { content: e };
                    let { startDelimiter: r, language: n, value: a = "", endDelimiter: i } = t.groups,
                        s = n.trim() || "yaml";
                    if (("+++" === r && (s = "toml"), "yaml" !== s && r !== i)) return { content: e };
                    let [o] = t;
                    return { frontMatter: { type: "front-matter", lang: s, value: a, startDelimiter: r, endDelimiter: i, raw: o.replace(/\n$/, "") }, content: h(!1, o, /[^\n]/g, " ") + e.slice(o.length) };
                },
                ne = { attrs: !0, children: !0, cases: !0, expression: !0 },
                nt = new Set(["parent"]),
                nr = class e {
                    constructor(e = {}) {
                        for (let t of new Set([...nt, ...Object.keys(e)])) this.setProperty(t, e[t]);
                    }
                    setProperty(e, t) {
                        if (this[e] !== t) {
                            if ((e in ne && (t = t.map((e) => this.createChild(e))), !nt.has(e))) {
                                this[e] = t;
                                return;
                            }
                            Object.defineProperty(this, e, { value: t, enumerable: !1, configurable: !0 });
                        }
                    }
                    map(t) {
                        let r;
                        for (let n in ne) {
                            let a = this[n];
                            if (a) {
                                let i = (function (e, t) {
                                    let r = e.map(t);
                                    return r.some((t, r) => t !== e[r]) ? r : e;
                                })(a, (e) => e.map(t));
                                r !== a && (r || (r = new e({ parent: this.parent })), r.setProperty(n, i));
                            }
                        }
                        if (r) for (let e in this) e in ne || (r[e] = this[e]);
                        return t(r || this);
                    }
                    walk(e) {
                        for (let t in ne) {
                            let r = this[t];
                            if (r) for (let t = 0; t < r.length; t++) r[t].walk(e);
                        }
                        e(this);
                    }
                    createChild(t) {
                        let r = t instanceof e ? t.clone() : new e(t);
                        return r.setProperty("parent", this), r;
                    }
                    insertChildBefore(e, t) {
                        this.children.splice(this.children.indexOf(e), 0, this.createChild(t));
                    }
                    removeChild(e) {
                        this.children.splice(this.children.indexOf(e), 1);
                    }
                    replaceChild(e, t) {
                        this.children[this.children.indexOf(e)] = this.createChild(t);
                    }
                    clone() {
                        return new e(this);
                    }
                    get firstChild() {
                        var e;
                        return null == (e = this.children) ? void 0 : e[0];
                    }
                    get lastChild() {
                        var e;
                        return null == (e = this.children) ? void 0 : e[this.children.length - 1];
                    }
                    get prev() {
                        var e, t;
                        return null == (t = null == (e = this.parent) ? void 0 : e.children) ? void 0 : t[this.parent.children.indexOf(this) - 1];
                    }
                    get next() {
                        var e, t;
                        return null == (t = null == (e = this.parent) ? void 0 : e.children) ? void 0 : t[this.parent.children.indexOf(this) + 1];
                    }
                    get rawName() {
                        return this.hasExplicitNamespace ? this.fullName : this.name;
                    }
                    get fullName() {
                        return this.namespace ? this.namespace + ":" + this.name : this.name;
                    }
                    get attrMap() {
                        return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
                    }
                },
                nn = [
                    {
                        regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s,
                        parse: function (e, t, r) {
                            let [, n, a, i] = r,
                                s = 4 + n.length,
                                o = e.sourceSpan.start.moveBy(s),
                                l = o.moveBy(i.length),
                                [c, u] = (() => {
                                    try {
                                        return [!0, t(i, o).children];
                                    } catch {
                                        return [!1, [{ type: "text", value: i, sourceSpan: new tj(o, l) }]];
                                    }
                                })();
                            return {
                                type: "ieConditionalComment",
                                complete: c,
                                children: u,
                                condition: h(!1, a.trim(), /\s+/g, " "),
                                sourceSpan: e.sourceSpan,
                                startSourceSpan: new tj(e.sourceSpan.start, o),
                                endSourceSpan: new tj(l, e.sourceSpan.end),
                            };
                        },
                    },
                    {
                        regex: /^\[if([^\]]*)]><!$/,
                        parse: function (e, t, r) {
                            let [, n] = r;
                            return { type: "ieConditionalStartComment", condition: h(!1, n.trim(), /\s+/g, " "), sourceSpan: e.sourceSpan };
                        },
                    },
                    {
                        regex: /^<!\s*\[endif]$/,
                        parse: function (e) {
                            return { type: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
                        },
                    },
                ],
                na = new Map([
                    [
                        "*",
                        new Set([
                            "accesskey",
                            "autocapitalize",
                            "autofocus",
                            "class",
                            "contenteditable",
                            "dir",
                            "draggable",
                            "enterkeyhint",
                            "hidden",
                            "id",
                            "inert",
                            "inputmode",
                            "is",
                            "itemid",
                            "itemprop",
                            "itemref",
                            "itemscope",
                            "itemtype",
                            "lang",
                            "nonce",
                            "popover",
                            "slot",
                            "spellcheck",
                            "style",
                            "tabindex",
                            "title",
                            "translate",
                        ]),
                    ],
                    ["a", new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])],
                    ["applet", new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])],
                    ["area", new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])],
                    ["audio", new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])],
                    ["base", new Set(["href", "target"])],
                    ["basefont", new Set(["color", "face", "size"])],
                    ["blockquote", new Set(["cite"])],
                    ["body", new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])],
                    ["br", new Set(["clear"])],
                    ["button", new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])],
                    ["canvas", new Set(["height", "width"])],
                    ["caption", new Set(["align"])],
                    ["col", new Set(["align", "char", "charoff", "span", "valign", "width"])],
                    ["colgroup", new Set(["align", "char", "charoff", "span", "valign", "width"])],
                    ["data", new Set(["value"])],
                    ["del", new Set(["cite", "datetime"])],
                    ["details", new Set(["name", "open"])],
                    ["dialog", new Set(["open"])],
                    ["dir", new Set(["compact"])],
                    ["div", new Set(["align"])],
                    ["dl", new Set(["compact"])],
                    ["embed", new Set(["height", "src", "type", "width"])],
                    ["fieldset", new Set(["disabled", "form", "name"])],
                    ["font", new Set(["color", "face", "size"])],
                    ["form", new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])],
                    ["frame", new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])],
                    ["frameset", new Set(["cols", "rows"])],
                    ["h1", new Set(["align"])],
                    ["h2", new Set(["align"])],
                    ["h3", new Set(["align"])],
                    ["h4", new Set(["align"])],
                    ["h5", new Set(["align"])],
                    ["h6", new Set(["align"])],
                    ["head", new Set(["profile"])],
                    ["hr", new Set(["align", "noshade", "size", "width"])],
                    ["html", new Set(["manifest", "version"])],
                    [
                        "iframe",
                        new Set([
                            "align",
                            "allow",
                            "allowfullscreen",
                            "allowpaymentrequest",
                            "allowusermedia",
                            "frameborder",
                            "height",
                            "loading",
                            "longdesc",
                            "marginheight",
                            "marginwidth",
                            "name",
                            "referrerpolicy",
                            "sandbox",
                            "scrolling",
                            "src",
                            "srcdoc",
                            "width",
                        ]),
                    ],
                    [
                        "img",
                        new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"]),
                    ],
                    [
                        "input",
                        new Set([
                            "accept",
                            "align",
                            "alt",
                            "autocomplete",
                            "checked",
                            "dirname",
                            "disabled",
                            "form",
                            "formaction",
                            "formenctype",
                            "formmethod",
                            "formnovalidate",
                            "formtarget",
                            "height",
                            "ismap",
                            "list",
                            "max",
                            "maxlength",
                            "min",
                            "minlength",
                            "multiple",
                            "name",
                            "pattern",
                            "placeholder",
                            "popovertarget",
                            "popovertargetaction",
                            "readonly",
                            "required",
                            "size",
                            "src",
                            "step",
                            "type",
                            "usemap",
                            "value",
                            "width",
                        ]),
                    ],
                    ["ins", new Set(["cite", "datetime"])],
                    ["isindex", new Set(["prompt"])],
                    ["label", new Set(["for", "form"])],
                    ["legend", new Set(["align"])],
                    ["li", new Set(["type", "value"])],
                    [
                        "link",
                        new Set([
                            "as",
                            "blocking",
                            "charset",
                            "color",
                            "crossorigin",
                            "disabled",
                            "fetchpriority",
                            "href",
                            "hreflang",
                            "imagesizes",
                            "imagesrcset",
                            "integrity",
                            "media",
                            "referrerpolicy",
                            "rel",
                            "rev",
                            "sizes",
                            "target",
                            "type",
                        ]),
                    ],
                    ["map", new Set(["name"])],
                    ["menu", new Set(["compact"])],
                    ["meta", new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])],
                    ["meter", new Set(["high", "low", "max", "min", "optimum", "value"])],
                    ["object", new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])],
                    ["ol", new Set(["compact", "reversed", "start", "type"])],
                    ["optgroup", new Set(["disabled", "label"])],
                    ["option", new Set(["disabled", "label", "selected", "value"])],
                    ["output", new Set(["for", "form", "name"])],
                    ["p", new Set(["align"])],
                    ["param", new Set(["name", "type", "value", "valuetype"])],
                    ["pre", new Set(["width"])],
                    ["progress", new Set(["max", "value"])],
                    ["q", new Set(["cite"])],
                    ["script", new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])],
                    ["select", new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])],
                    ["slot", new Set(["name"])],
                    ["source", new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])],
                    ["style", new Set(["blocking", "media", "type"])],
                    ["table", new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])],
                    ["tbody", new Set(["align", "char", "charoff", "valign"])],
                    ["td", new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])],
                    ["template", new Set(["shadowrootdelegatesfocus", "shadowrootmode"])],
                    ["textarea", new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])],
                    ["tfoot", new Set(["align", "char", "charoff", "valign"])],
                    ["th", new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])],
                    ["thead", new Set(["align", "char", "charoff", "valign"])],
                    ["time", new Set(["datetime"])],
                    ["tr", new Set(["align", "bgcolor", "char", "charoff", "valign"])],
                    ["track", new Set(["default", "kind", "label", "src", "srclang"])],
                    ["ul", new Set(["compact", "type"])],
                    ["video", new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])],
                ]),
                ni = new Set([
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "applet",
                    "area",
                    "article",
                    "aside",
                    "audio",
                    "b",
                    "base",
                    "basefont",
                    "bdi",
                    "bdo",
                    "bgsound",
                    "big",
                    "blink",
                    "blockquote",
                    "body",
                    "br",
                    "button",
                    "canvas",
                    "caption",
                    "center",
                    "cite",
                    "code",
                    "col",
                    "colgroup",
                    "command",
                    "content",
                    "data",
                    "datalist",
                    "dd",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "dir",
                    "div",
                    "dl",
                    "dt",
                    "element",
                    "em",
                    "embed",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "font",
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
                    "i",
                    "iframe",
                    "image",
                    "img",
                    "input",
                    "ins",
                    "isindex",
                    "kbd",
                    "keygen",
                    "label",
                    "legend",
                    "li",
                    "link",
                    "listing",
                    "main",
                    "map",
                    "mark",
                    "marquee",
                    "math",
                    "menu",
                    "menuitem",
                    "meta",
                    "meter",
                    "multicol",
                    "nav",
                    "nextid",
                    "nobr",
                    "noembed",
                    "noframes",
                    "noscript",
                    "object",
                    "ol",
                    "optgroup",
                    "option",
                    "output",
                    "p",
                    "param",
                    "picture",
                    "plaintext",
                    "pre",
                    "progress",
                    "q",
                    "rb",
                    "rbc",
                    "rp",
                    "rt",
                    "rtc",
                    "ruby",
                    "s",
                    "samp",
                    "script",
                    "search",
                    "section",
                    "select",
                    "shadow",
                    "slot",
                    "small",
                    "source",
                    "spacer",
                    "span",
                    "strike",
                    "strong",
                    "style",
                    "sub",
                    "summary",
                    "sup",
                    "svg",
                    "table",
                    "tbody",
                    "td",
                    "template",
                    "textarea",
                    "tfoot",
                    "th",
                    "thead",
                    "time",
                    "title",
                    "tr",
                    "track",
                    "tt",
                    "u",
                    "ul",
                    "var",
                    "video",
                    "wbr",
                    "xmp",
                ]);
            function ns(e) {
                var t;
                let {
                    msg: r,
                    span: { start: n, end: a },
                } = e;
                throw Object.assign(SyntaxError(r + " (" + (t = { loc: { start: { line: n.line + 1, column: n.col + 1 }, end: { line: a.line + 1, column: a.col + 1 } }, cause: e }).loc.start.line + ":" + t.loc.start.column + ")"), t);
            }
            function no(e) {
                return {
                    parse: (t, r) =>
                        (function e(t, r, n = {}, a = !0) {
                            let { frontMatter: i, content: s } = a ? r7(t) : { frontMatter: null, content: t },
                                o = new tz(t, n.filepath),
                                l = new t$(o, 0, 0, 0),
                                c = l.moveBy(t.length),
                                u = {
                                    type: "root",
                                    sourceSpan: new tj(l, c),
                                    children: (function e(t, r, n) {
                                        let { name: a, canSelfClose: i = !0, normalizeTagName: s = !1, normalizeAttributeName: o = !1, allowHtmComponentClosingTags: l = !1, isTagNameCaseSensitive: c = !1, shouldParseAsRawText: u } = r,
                                            { rootNodes: p, errors: h } = r9(t, {
                                                canSelfClose: i,
                                                allowHtmComponentClosingTags: l,
                                                isTagNameCaseSensitive: c,
                                                getTagContentType: u ? (...e) => (u(...e) ? rl.RAW_TEXT : void 0) : void 0,
                                                tokenizeAngularBlocks: "angular" === a || void 0,
                                            });
                                        if ("vue" === a) {
                                            if (p.some((e) => ("docType" === e.type && "html" === e.value) || ("element" === e.type && "html" === e.name.toLowerCase()))) return e(t, nl, n);
                                            let r,
                                                a = () => r ?? (r = r9(t, { canSelfClose: i, allowHtmComponentClosingTags: l, isTagNameCaseSensitive: c })),
                                                s = (e) => a().rootNodes.find(({ startSourceSpan: t }) => t && t.start.offset === e.startSourceSpan.start.offset) ?? e;
                                            for (let [e, t] of p.entries()) {
                                                let { endSourceSpan: r, startSourceSpan: i } = t;
                                                if (null === r) (h = a().errors), (p[e] = s(t));
                                                else if (
                                                    (function (e, t) {
                                                        var r;
                                                        if ("element" !== e.type || "template" !== e.name) return !1;
                                                        let n = null == (r = e.attrs.find((e) => "lang" === e.name)) ? void 0 : r.value;
                                                        return !n || "html" === ec(t, { language: n });
                                                    })(t, n)
                                                ) {
                                                    let n = a().errors.find((e) => e.span.start.offset > i.start.offset && e.span.start.offset < r.end.offset);
                                                    n && ns(n), (p[e] = s(t));
                                                }
                                            }
                                        }
                                        h.length > 0 && ns(h[0]);
                                        let d = (e) => {
                                            let t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null,
                                                r = e.nameSpan.toString(),
                                                n = null !== t && r.startsWith(`${t}:`),
                                                a = n ? r.slice(t.length + 1) : r;
                                            (e.name = a), (e.namespace = t), (e.hasExplicitNamespace = n);
                                        },
                                            m = (e) => {
                                                switch (e.type) {
                                                    case "element":
                                                        for (let t of (d(e), e.attrs)) d(t), t.valueSpan ? ((t.value = t.valueSpan.toString()), /["']/.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : (t.value = null);
                                                        break;
                                                    case "comment":
                                                        e.value = e.sourceSpan.toString().slice(4, -3);
                                                        break;
                                                    case "text":
                                                        e.value = e.sourceSpan.toString();
                                                }
                                            },
                                            g = (e, t) => {
                                                let r = e.toLowerCase();
                                                return t(r) ? r : e;
                                            },
                                            f = (e) => {
                                                if ("element" === e.type && (s && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || eh(e)) && (e.name = g(e.name, (e) => ni.has(e))), o))
                                                    for (let t of e.attrs) t.namespace || (t.name = g(t.name, (t) => na.has(e.name) && (na.get("*").has(t) || na.get(e.name).has(t))));
                                            },
                                            v = (e) => {
                                                e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new tj(e.sourceSpan.start, e.endSourceSpan.end));
                                            },
                                            S = (e) => {
                                                if ("element" === e.type) {
                                                    let t = rS(c ? e.name : e.name.toLowerCase());
                                                    !e.namespace || e.namespace === t.implicitNamespacePrefix || eh(e) ? (e.tagDefinition = t) : (e.tagDefinition = rS(""));
                                                }
                                            };
                                        return (
                                            rA(
                                                new (class extends rN {
                                                    visitExpansionCase(e, t) {
                                                        "angular" === a &&
                                                            this.visitChildren(t, (t) => {
                                                                t(e.expression);
                                                            });
                                                    }
                                                    visit(e) {
                                                        m(e), S(e), f(e), v(e);
                                                    }
                                                })(),
                                                p
                                            ),
                                            p
                                        );
                                    })(s, r, n),
                                };
                            if (i) {
                                let e = new t$(o, 0, 0, 0),
                                    t = e.moveBy(i.raw.length);
                                (i.sourceSpan = new tj(e, t)), u.children.unshift(i);
                            }
                            let p = new nr(u),
                                d = (a, i) => {
                                    let { offset: s } = i,
                                        o = e(h(!1, t.slice(0, s), /[^\n\r]/g, " ") + a, r, n, !1);
                                    o.sourceSpan = new tj(i, $(!1, o.children, -1).sourceSpan.end);
                                    let l = o.children[0];
                                    return l.length === s ? o.children.shift() : ((l.sourceSpan = new tj(l.sourceSpan.start.moveBy(s), l.sourceSpan.end)), (l.value = l.value.slice(s))), o;
                                };
                            return (
                                p.walk((e) => {
                                    if ("comment" === e.type) {
                                        let t = (function (e, t) {
                                            if (e.value)
                                                for (let { regex: r, parse: n } of nn) {
                                                    let a = e.value.match(r);
                                                    if (a) return n(e, t, a);
                                                }
                                            return null;
                                        })(e, d);
                                        t && e.parent.replaceChild(e, t);
                                    }
                                    (function (e) {
                                        if ("block" === e.type) {
                                            if (((e.name = h(!1, e.name.toLowerCase(), /\s+/g, " ").trim()), (e.type = "angularControlFlowBlock"), !ts(e.parameters))) {
                                                delete e.parameters;
                                                return;
                                            }
                                            for (let t of e.parameters) t.type = "angularControlFlowBlockParameter";
                                            e.parameters = { type: "angularControlFlowBlockParameters", children: e.parameters, sourceSpan: new tj(e.parameters[0].sourceSpan.start, $(!1, e.parameters, -1).sourceSpan.end) };
                                        }
                                    })(e),
                                        ("plural" === e.type || "select" === e.type) && ((e.clause = e.type), (e.type = "angularIcuExpression")),
                                        "expansionCase" === e.type && (e.type = "angularIcuCase");
                                }),
                                p
                            );
                        })(t, e, r),
                    hasPragma: tA,
                    astFormat: "html",
                    locStart: to,
                    locEnd: tl,
                };
            }
            var nl = { name: "html", normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 },
                nc = no(nl),
                nu = no({ name: "angular" }),
                np = no({
                    name: "vue",
                    isTagNameCaseSensitive: !0,
                    shouldParseAsRawText: (e, t, r, n) => "html" !== e.toLowerCase() && !r && ("template" !== e || n.some(({ name: e, value: t }) => "lang" === e && "html" !== t && "" !== t && void 0 !== t)),
                }),
                nh = no({ name: "lwc", canSelfClose: !1 }),
                nd = {
                    html: {
                        preprocess: function (e, t) {
                            for (let r of tK) r(e, t);
                            return e;
                        },
                        print: function (e, t, r) {
                            let { node: n } = e;
                            switch (n.type) {
                                case "front-matter":
                                    return j(n.raw);
                                case "root":
                                    return t.__onHtmlRoot && t.__onHtmlRoot(n), [M(tB(e, t, r)), V];
                                case "element":
                                case "ieConditionalComment":
                                    return (function (e, t, r) {
                                        var n, a;
                                        let i;
                                        let { node: s } = e;
                                        if (ef(s, t)) return [tw(s, t), M(tb(e, t, r)), j(tT(s, t)), ...tc(s, t), tp(s, t)];
                                        let o =
                                            1 === s.children.length &&
                                            ("interpolation" === s.firstChild.type || "angularIcuExpression" === s.firstChild.type) &&
                                            s.firstChild.isLeadingSpaceSensitive &&
                                            !s.firstChild.hasLeadingSpaces &&
                                            s.lastChild.isTrailingSpaceSensitive &&
                                            !s.lastChild.hasTrailingSpaces,
                                            l = Symbol("element-attr-group-id");
                                        return (
                                            (i =
                                                0 === s.children.length
                                                    ? s.hasDanglingSpaces && s.isDanglingSpaceSensitive
                                                        ? F
                                                        : ""
                                                    : [
                                                        ew(s) ||
                                                            ("element" === s.type &&
                                                                s.children.length > 0 &&
                                                                (["body", "script", "style"].includes(s.name) ||
                                                                    s.children.some((e) => {
                                                                        var t;
                                                                        return null == (t = e.children) ? void 0 : t.some((e) => "text" !== e.type);
                                                                    }))) ||
                                                            (s.firstChild && s.firstChild === s.lastChild && "text" !== s.firstChild.type && eC(s.firstChild) && (!s.lastChild.isTrailingSpaceSensitive || eT(s.lastChild)))
                                                            ? R
                                                            : "",
                                                        ((n = [
                                                            o
                                                                ? H(U, "", { groupId: l })
                                                                : s.firstChild.hasLeadingSpaces && s.firstChild.isLeadingSpaceSensitive
                                                                    ? F
                                                                    : "text" === s.firstChild.type && s.isWhitespaceSensitive && s.isIndentationSensitive
                                                                        ? B(Number.NEGATIVE_INFINITY, U)
                                                                        : U,
                                                            tB(e, t, r),
                                                        ]),
                                                            o
                                                                ? ((a = { groupId: l }), D(n), { type: w, contents: n, groupId: a.groupId, negate: a.negate })
                                                                : (ey(s) || eH(s, t)) && "root" === s.parent.type && "vue" === t.parser && !t.vueIndentScriptAndStyle
                                                                    ? n
                                                                    : I(n)),
                                                        (s.next ? tg(s.next) : tf(s.parent))
                                                            ? s.lastChild.hasTrailingSpaces && s.lastChild.isTrailingSpaceSensitive
                                                                ? " "
                                                                : ""
                                                            : o
                                                                ? H(U, "", { groupId: l })
                                                                : s.lastChild.hasTrailingSpaces && s.lastChild.isTrailingSpaceSensitive
                                                                    ? F
                                                                    : ("comment" === s.lastChild.type || ("text" === s.lastChild.type && s.isWhitespaceSensitive && s.isIndentationSensitive)) &&
                                                                        RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`).test(s.lastChild.value)
                                                                        ? ""
                                                                        : U,
                                                    ]),
                                            M([M(tb(e, t, r), { id: l }), i, tc(s, t)])
                                        );
                                    })(e, t, r);
                                case "angularControlFlowBlock":
                                    return (function (e, t, r) {
                                        let { node: n } = e,
                                            a = [];
                                        (function (e) {
                                            let { previous: t } = e;
                                            return (null == t ? void 0 : t.type) === "angularControlFlowBlock" && !ev(t) && !tM(t);
                                        })(e) && a.push("} "),
                                            a.push("@", n.name),
                                            n.parameters && a.push(" (", M(r("parameters")), ")"),
                                            a.push(" {");
                                        let i = tM(n);
                                        return (
                                            n.children.length > 0 ? ((n.firstChild.hasLeadingSpaces = !0), (n.lastChild.hasTrailingSpaces = !0), a.push(I([V, tB(e, t, r)])), i && a.push(V, "}")) : i && a.push("}"), M(a, { shouldBreak: !0 })
                                        );
                                    })(e, t, r);
                                case "angularControlFlowBlockParameters":
                                    return [I([U, W([";", F], e.map(r, "children"))]), U];
                                case "angularControlFlowBlockParameter":
                                    return Y.trim(n.expression);
                                case "angularIcuExpression":
                                    return (function (e, t, r) {
                                        let { node: n } = e;
                                        return [t_(n, t), M([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", I([F, W(F, e.map(r, "cases"))])] : "", U]), tu(n, t)];
                                    })(e, t, r);
                                case "angularIcuCase":
                                    return (function (e, t, r) {
                                        let { node: n } = e;
                                        return [n.value, " {", M([I([U, e.map(({ node: e }) => ("text" !== e.type || Y.trim(e.value) ? r() : ""), "expression")]), U]), "}"];
                                    })(e, 0, r);
                                case "ieConditionalStartComment":
                                case "ieConditionalEndComment":
                                    return [t_(n), tu(n)];
                                case "interpolation":
                                    return [t_(n, t), ...e.map(r, "children"), tu(n, t)];
                                case "text": {
                                    if ("interpolation" === n.parent.type) {
                                        let e = /\n[^\S\n]*$/,
                                            t = e.test(n.value);
                                        return [j(t ? n.value.replace(e, "") : n.value), t ? V : ""];
                                    }
                                    let e = z([tw(n, t), ...eU(n), tp(n, t)], (e) =>
                                        (function (e) {
                                            switch (q(e)) {
                                                case b:
                                                    if (e.parts.every((e) => "" === e)) return "";
                                                    break;
                                                case y:
                                                    if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
                                                    if (e.contents.type === y && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
                                                    break;
                                                case v:
                                                case f:
                                                case w:
                                                case k:
                                                    if (!e.contents) return "";
                                                    break;
                                                case _:
                                                    if (!e.flatContents && !e.breakContents) return "";
                                                    break;
                                                case m: {
                                                    let t = [];
                                                    for (let r of e) {
                                                        if (!r) continue;
                                                        let [e, ...n] = Array.isArray(r) ? r : [r];
                                                        "string" == typeof e && "string" == typeof $(!1, t, -1) ? (t[t.length - 1] += e) : t.push(e), t.push(...n);
                                                    }
                                                    return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
                                                }
                                                case d:
                                                case g:
                                                case S:
                                                case C:
                                                case T:
                                                case x:
                                                case E:
                                                    break;
                                                default:
                                                    throw new N(e);
                                            }
                                            return e;
                                        })(e)
                                    );
                                    return Array.isArray(e) ? P(e) : e;
                                }
                                case "docType":
                                    return [M([t_(n, t), " ", h(!1, n.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), tu(n, t)];
                                case "comment":
                                    return [tw(n, t), j(t.originalText.slice(to(n), tl(n))), tp(n, t)];
                                case "attribute": {
                                    if (null === n.value) return n.rawName;
                                    let e = eB(n.value),
                                        t = K(e, '"');
                                    return [n.rawName, "=", t, j('"' === t ? h(!1, e, '"', "&quot;") : h(!1, e, "'", "&apos;")), t];
                                }
                                default:
                                    throw new J(n, "HTML");
                            }
                        },
                        insertPragma: function (e) {
                            return (
                                `<!-- @format -->

` + e
                            );
                        },
                        massageAstNode: et,
                        embed: function (e, t) {
                            let { node: r } = e;
                            switch (r.type) {
                                case "element":
                                    if (ey(r) || "interpolation" === r.type) return;
                                    if (!r.isSelfClosing && eF(r, t)) {
                                        let n = eq(r, t);
                                        return n
                                            ? async (a, i) => {
                                                let s = tT(r, t),
                                                    o = /^\s*$/.test(s),
                                                    l = "";
                                                return o || (o = "" === (l = await a(em(s), { parser: n, __embeddedInHtml: !0 }))), [tw(r, t), M(tb(e, t, i)), o ? "" : V, l, o ? "" : V, tc(r, t), tp(r, t)];
                                            }
                                            : void 0;
                                    }
                                    break;
                                case "text":
                                    if (ey(r.parent)) {
                                        let e = eq(r.parent, t);
                                        if (e)
                                            return async (n) => {
                                                let a = "markdown" === e ? eI(r.value.replace(/^[^\S\n]*\n/, "")) : r.value,
                                                    i = { parser: e, __embeddedInHtml: !0 };
                                                if ("html" === t.parser && "babel" === e) {
                                                    let e = "script",
                                                        { attrMap: t } = r.parent;
                                                    t && ("module" === t.type || ("text/babel" === t.type && "module" === t["data-type"])) && (e = "module"), (i.__babelSourceType = e);
                                                }
                                                return [R, tw(r, t), await n(a, i), tp(r, t)];
                                            };
                                    } else if ("interpolation" === r.parent.type)
                                        return async (n) => {
                                            let a = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
                                            return (
                                                "angular" === t.parser
                                                    ? ((a.parser = "__ng_interpolation"), (a.trailingComma = "none"))
                                                    : "vue" === t.parser
                                                        ? (a.parser = e7(e, t) ? "__vue_ts_expression" : "__vue_expression")
                                                        : (a.parser = "__js_expression"),
                                                [I([F, await n(r.value, a)]), r.parent.next && tg(r.parent.next) ? " " : F]
                                            );
                                        };
                                    break;
                                case "attribute":
                                    return ta(e, t);
                                case "front-matter":
                                    return (e) => er(r, e);
                                case "angularControlFlowBlockParameters":
                                    return tx.has(e.parent.name) ? es : void 0;
                            }
                        },
                        getVisitorKeys: tq,
                    },
                },
                nm = p;
        },
    },
]);






// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{80226:function(e,t,r){r.r(t),r.d(t,{default:function(){return nm},languages:function(){return tX},options:function(){return tJ},parsers:function(){return tQ},printers:function(){return nd}});var n,a,i=Object.defineProperty,s=(e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})},o=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(o(e,t,"read from private field"),r?r.call(e):t.get(e)),c=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},u=(e,t,r,n)=>(o(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),p={};s(p,{languages:()=>tX,options:()=>tJ,parsers:()=>tQ,printers:()=>nd});var h=(e,t,r,n)=>{if(!(e&&null==t))return t.replaceAll?t.replaceAll(r,n):r.global?t.replace(r,n):t.split(r).join(n)},d="string",m="array",g="cursor",f="indent",v="align",S="trim",y="group",b="fill",_="if-break",w="indent-if-break",k="line-suffix",C="line-suffix-boundary",T="line",x="label",E="break-parent",L=new Set([g,f,v,S,y,b,_,w,k,C,T,x,E]),q=function(e){if("string"==typeof e)return d;if(Array.isArray(e))return m;if(!e)return;let{type:t}=e;if(L.has(t))return t},A=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e),N=class extends Error{name="InvalidDocError";constructor(e){super(function(e){let t=null===e?"null":typeof e;if("string"!==t&&"object"!==t)return`Unexpected doc '${t}', 
// Expected it to be 'string' or 'object'.`;if(q(e))throw Error("doc is valid.");let r=Object.prototype.toString.call(e);if("[object Object]"!==r)return`Unexpected doc '${r}'.`;let n=A([...L].map(e=>`'${e}'`));return`Unexpected doc.type '${e.type}'.
// Expected it to be ${n}.`}(e)),this.doc=e}},D=()=>{};function I(e){return D(e),{type:f,contents:e}}function B(e,t){return D(t),{type:v,contents:t,n:e}}function M(e,t={}){return D(e),D(t.expandedStates,!0),{type:y,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function P(e){return D(e),{type:b,parts:e}}function H(e,t="",r={}){return D(e),""!==t&&D(t),{type:_,breakContents:e,flatContents:t,groupId:r.groupId}}var R={type:E},F={type:T},U={type:T,soft:!0},V=[{type:T,hard:!0},R],O=[{type:T,hard:!0,literal:!0},R];function W(e,t){D(e),D(t);let r=[];for(let n=0;n<t.length;n++)0!==n&&r.push(e),r.push(t[n]);return r}var $=(e,t,r)=>{if(!(e&&null==t))return Array.isArray(t)||"string"==typeof t?t[r<0?t.length+r:r]:t.at(r)};function z(e,t){if("string"==typeof e)return t(e);let r=new Map;return function e(n){if(r.has(n))return r.get(n);let a=function(r){switch(q(r)){case m:return t(r.map(e));case b:return t({...r,parts:r.parts.map(e)});case _:return t({...r,breakContents:e(r.breakContents),flatContents:e(r.flatContents)});case y:{let{expandedStates:n,contents:a}=r;return a=n?(n=n.map(e))[0]:e(a),t({...r,contents:a,expandedStates:n})}case v:case f:case w:case x:case k:return t({...r,contents:e(r.contents)});case d:case g:case S:case C:case T:case E:return t(r);default:throw new N(r)}}(n);return r.set(n,a),a}(e)}function j(e,t=O){return z(e,e=>"string"==typeof e?W(t,e.split(`
// `)):e)}var G,K=function(e,t){let r=!0===t||"'"===t?"'":'"',n="'"===r?'"':"'",a=0,i=0;for(let t of e)t===r?a++:t===n&&i++;return a>i?n:r},X=class{constructor(e){c(this,G,void 0),u(this,G,new Set(e))}getLeadingWhitespaceCount(e){let t=l(this,G),r=0;for(let n=0;n<e.length&&t.has(e.charAt(n));n++)r++;return r}getTrailingWhitespaceCount(e){let t=l(this,G),r=0;for(let n=e.length-1;n>=0&&t.has(e.charAt(n));n--)r++;return r}getLeadingWhitespace(e){let t=this.getLeadingWhitespaceCount(e);return e.slice(0,t)}getTrailingWhitespace(e){let t=this.getTrailingWhitespaceCount(e);return e.slice(e.length-t)}hasLeadingWhitespace(e){return l(this,G).has(e.charAt(0))}hasTrailingWhitespace(e){return l(this,G).has($(!1,e,-1))}trimStart(e){let t=this.getLeadingWhitespaceCount(e);return e.slice(t)}trimEnd(e){let t=this.getTrailingWhitespaceCount(e);return e.slice(0,e.length-t)}trim(e){return this.trimEnd(this.trimStart(e))}split(e,t=!1){let r=`[${function(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}([...l(this,G)].join(""))}]+`,n=new RegExp(t?`(${r})`:r);return e.split(n)}hasWhitespaceCharacter(e){let t=l(this,G);return Array.prototype.some.call(e,e=>t.has(e))}hasNonWhitespaceCharacter(e){let t=l(this,G);return Array.prototype.some.call(e,e=>!t.has(e))}isWhitespaceOnly(e){let t=l(this,G);return Array.prototype.every.call(e,e=>t.has(e))}};G=new WeakMap;var Y=new X(["	",`
// `,"\f","\r"," "]),J=class extends Error{name="UnexpectedNodeError";constructor(e,t,r="type"){super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`),this.node=e}},Q=function(e){return(null==e?void 0:e.type)==="front-matter"},Z=new Set(["sourceSpan","startSourceSpan","endSourceSpan","nameSpan","valueSpan","keySpan","tagDefinition","tokens","valueTokens","switchValueSourceSpan","expSourceSpan","valueSourceSpan"]),ee=new Set(["if","else if","for","switch","case"]);function et(e,t){var r;if("text"===e.type||"comment"===e.type||Q(e)||"yaml"===e.type||"toml"===e.type)return null;if("attribute"===e.type&&delete t.value,"docType"===e.type&&delete t.value,"angularControlFlowBlock"===e.type&&null!=(r=t.parameters)&&r.children)for(let r of t.parameters.children)ee.has(e.name)?delete r.expression:r.expression=r.expression.trim();"angularIcuExpression"===e.type&&(t.switchValue=e.switchValue.trim())}async function er(e,t){if("yaml"===e.lang){let r=e.value.trim(),n=r?await t(r,{parser:"yaml"}):"";return B({type:"root"},[e.startDelimiter,V,n,n?V:"",e.endDelimiter])}}function en(e,t=!0){return[I([U,e]),t?U:""]}function ea(e,t){let r="NGRoot"===e.type?"NGMicrosyntax"===e.node.type&&1===e.node.body.length&&"NGMicrosyntaxExpression"===e.node.body[0].type?e.node.body[0].expression:e.node:"JsExpressionRoot"===e.type?e.node:e;return r&&("ObjectExpression"===r.type||"ArrayExpression"===r.type||("__vue_expression"===t.parser||"__vue_ts_expression"===t.parser)&&("TemplateLiteral"===r.type||"StringLiteral"===r.type))}async function ei(e,t,r,n){r={__isInHtmlAttribute:!0,__embeddedInHtml:!0,...r};let a=!0;n&&(r.__onHtmlBindingRoot=(e,t)=>{a=n(e,t)});let i=await t(e,r,t);return a?M(i):en(i)}et.ignoredProperties=Z;var es=function(e,t,r,n){let{node:a}=r,i=n.originalText.slice(a.sourceSpan.start.offset,a.sourceSpan.end.offset);return/^\s*$/.test(i)?"":ei(i,e,{parser:"__ng_directive",__isInHtmlAttribute:!1,trailingComma:"none"},ea)},eo=e=>String(e).split(/[/\\]/).pop();function el(e,t){if(!t)return;let r=eo(t).toLowerCase();return e.find(({filenames:e})=>null==e?void 0:e.some(e=>e.toLowerCase()===r))??e.find(({extensions:e})=>null==e?void 0:e.some(e=>r.endsWith(e)))}var ec=function(e,t){let r=e.plugins.flatMap(e=>e.languages??[]),n=function(e,t){if(t)return e.find(({name:e})=>e.toLowerCase()===t)??e.find(({aliases:e})=>null==e?void 0:e.includes(t))??e.find(({extensions:e})=>null==e?void 0:e.includes(`.${t}`))}(r,t.language)??el(r,t.physicalFile)??el(r,t.file)??void t.physicalFile;return null==n?void 0:n.parsers[0]},eu={area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",style:"none",template:"inline",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",dialog:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",search:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",menu:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",input:"inline-block",button:"inline-block",fieldset:"block",marquee:"inline-block",source:"block",track:"block",details:"block",summary:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",select:"inline-block",option:"block",optgroup:"block"},ep={listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"},eh=function(e){return"element"===e.type&&!e.hasExplicitNamespace&&!["html","svg"].includes(e.namespace)},ed=e=>h(!1,e,/^[\t\f\r ]*\n/g,""),em=e=>ed(Y.trimEnd(e)),eg=e=>{let t=e,r=Y.getLeadingWhitespace(t);r&&(t=t.slice(r.length));let n=Y.getTrailingWhitespace(t);return n&&(t=t.slice(0,-n.length)),{leadingWhitespace:r,trailingWhitespace:n,text:t}};function ef(e,t){return!!("ieConditionalComment"===e.type&&e.lastChild&&!e.lastChild.isSelfClosing&&!e.lastChild.endSourceSpan||"ieConditionalComment"===e.type&&!e.complete||eN(e)&&e.children.some(e=>"text"!==e.type&&"interpolation"!==e.type)||eF(e,t)&&!ey(e)&&"interpolation"!==e.type)}function ev(e){var t;return"attribute"!==e.type&&!!e.parent&&!!e.prev&&"comment"===(t=e.prev).type&&"prettier-ignore"===t.value.trim()}function eS(e){return"text"===e.type||"comment"===e.type}function ey(e){return"element"===e.type&&("script"===e.fullName||"style"===e.fullName||"svg:style"===e.fullName||"svg:script"===e.fullName||eh(e)&&("script"===e.name||"style"===e.name))}function eb(e){return eD(e).startsWith("pre")}function e_(e){return Q(e)||e.next&&e.sourceSpan.end&&e.sourceSpan.end.line+1<e.next.sourceSpan.start.line}function ew(e){return"element"===e.type&&e.children.length>0&&(["html","head","ul","ol","select"].includes(e.name)||e.cssDisplay.startsWith("table")&&"table-cell"!==e.cssDisplay)}function ek(e){var t,r;return ex(e)||e.prev&&(ex(t=e.prev)||"element"===t.type&&"br"===t.fullName||eC(r=t)&&eT(r))||eC(e)&&eT(e)}function eC(e){return e.hasLeadingSpaces&&(e.prev?e.prev.sourceSpan.end.line<e.sourceSpan.start.line:"root"===e.parent.type||e.parent.startSourceSpan.end.line<e.sourceSpan.start.line)}function eT(e){return e.hasTrailingSpaces&&(e.next?e.next.sourceSpan.start.line>e.sourceSpan.end.line:"root"===e.parent.type||e.parent.endSourceSpan&&e.parent.endSourceSpan.start.line>e.sourceSpan.end.line)}function ex(e){switch(e.type){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(e.name)}return!1}function eE(e){return e.lastChild?eE(e.lastChild):e}function eL(e){if(e)switch(e){case"module":case"text/javascript":case"text/babel":case"application/javascript":return"babel";case"application/x-typescript":return"typescript";case"text/markdown":return"markdown";case"text/html":return"html";case"text/x-handlebars-template":return"glimmer";default:if(e.endsWith("json")||e.endsWith("importmap")||"speculationrules"===e)return"json"}}function eq(e,t){return function(e,t){let{name:r,attrMap:n}=e;if("script"!==r||Object.prototype.hasOwnProperty.call(n,"src"))return;let{type:a,lang:i}=e.attrMap;return i||a?ec(t,{language:i})??eL(a):"babel"}(e,t)??function(e,t){if("style"!==e.name)return;let{lang:r}=e.attrMap;return r?ec(t,{language:r}):"css"}(e,t)??function(e,t){if(!eF(e,t))return;let{attrMap:r}=e;if(Object.prototype.hasOwnProperty.call(r,"src"))return;let{type:n,lang:a}=r;return ec(t,{language:a})??eL(n)}(e,t)}function eA(e){return"block"===e||"list-item"===e||e.startsWith("table")}function eN(e){return eD(e).startsWith("pre")}function eD(e){return"element"===e.type&&(!e.namespace||eh(e))&&ep[e.name]||"normal"}function eI(e,t=function(e){let t=Number.POSITIVE_INFINITY;for(let r of e.split(`
// `)){if(0===r.length)continue;let e=Y.getLeadingWhitespaceCount(r);if(0===e)return 0;r.length!==e&&e<t&&(t=e)}return t===Number.POSITIVE_INFINITY?0:t}(e)){return 0===t?e:e.split(`
// `).map(e=>e.slice(t)).join(`
// `)}function eB(e){return h(!1,h(!1,e,"&apos;","'"),"&quot;",'"')}function eM(e){return eB(e.value)}var eP=new Set(["template","style","script"]);function eH(e,t){return eR(e,t)&&!eP.has(e.fullName)}function eR(e,t){return"vue"===t.parser&&"element"===e.type&&"root"===e.parent.type&&"html"!==e.fullName.toLowerCase()}function eF(e,t){return eR(e,t)&&(eH(e,t)||e.attrMap.lang&&"html"!==e.attrMap.lang)}function eU(e,t=e.value){return e.parent.isWhitespaceSensitive?e.parent.isIndentationSensitive?j(t):j(eI(em(t)),V):W(F,Y.split(t))}function eV(e,t){return eR(e,t)&&"script"===e.name}var eO=/{{(.+?)}}/s;async function eW(e,t){let r=[];for(let[n,a]of e.split(eO).entries())if(n%2==0)r.push(j(a));else try{r.push(M(["{{",I([F,await ei(a,t,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0,trailingComma:"none"})]),F,"}}"]))}catch{r.push("{{",j(a),"}}")}return r}function e$({parser:e}){return(t,r,n)=>ei(eM(n.node),t,{parser:e,trailingComma:"none"},ea)}var ez=e$({parser:"__ng_action"}),ej=e$({parser:"__ng_binding"}),eG=e$({parser:"__ng_directive"}),eK=function(e,t){if("angular"!==t.parser)return;let{node:r}=e,n=r.fullName;if(n.startsWith("(")&&n.endsWith(")")||n.startsWith("on-"))return ez;if(n.startsWith("[")&&n.endsWith("]")||/^bind(?:on)?-/.test(n)||/^ng-(?:if|show|hide|class|style)$/.test(n))return ej;if(n.startsWith("*"))return eG;let a=eM(r);return/^i18n(?:-.+)?$/.test(n)?()=>en(P(eU(r,a.trim())),!a.includes("@@")):eO.test(a)?e=>eW(a,e):void 0},eX=function(e,t){let{node:r}=e,n=eM(r);if("class"===r.fullName&&!t.parentParser&&!n.includes("{{"))return()=>n.trim().split(/\s+/).join(" ")};function eY(e){return"	"===e||e===`
// `||"\f"===e||"\r"===e||" "===e}var eJ=/^[ \t\n\r\u000c]+/,eQ=/^[, \t\n\r\u000c]+/,eZ=/^[^ \t\n\r\u000c]+/,e0=/[,]+$/,e1=/^\d+$/,e2=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,e3=function(e){let t=e.length,r,n,a,i,s,o=0,l;function c(t){let r,n=t.exec(e.substring(o));if(n)return[r]=n,o+=r.length,r}let u=[];for(;;){if(c(eQ),o>=t){if(0===u.length)throw Error("Must contain one or more image candidate strings.");return u}l=o,r=c(eZ),n=[],","===r.slice(-1)?(r=r.replace(e0,""),p()):function(){for(c(eJ),a="",i="in descriptor";;){if(s=e.charAt(o),"in descriptor"===i){if(eY(s))a&&(n.push(a),a="",i="after descriptor");else if(","===s){o+=1,a&&n.push(a),p();return}else if("("===s)a+=s,i="in parens";else if(""===s){a&&n.push(a),p();return}else a+=s}else if("in parens"===i){if(")"===s)a+=s,i="in descriptor";else if(""===s){n.push(a),p();return}else a+=s}else if("after descriptor"===i&&!eY(s)){if(""===s){p();return}i="in descriptor",o-=1}o+=1}}()}function p(){let t=!1,a,i,s,o,c={},p,h,d,m,g;for(o=0;o<n.length;o++)h=(p=n[o])[p.length-1],m=parseInt(d=p.substring(0,p.length-1),10),g=parseFloat(d),e1.test(d)&&"w"===h?((a||i)&&(t=!0),0===m?t=!0:a=m):e2.test(d)&&"x"===h?((a||i||s)&&(t=!0),g<0?t=!0:i=g):e1.test(d)&&"h"===h?((s||i)&&(t=!0),0===m?t=!0:s=m):t=!0;if(t)throw Error(`Invalid srcset descriptor found in "${e}" at "${p}".`);c.source={value:r,startOffset:l},a&&(c.width={value:a}),i&&(c.density={value:i}),s&&(c.height={value:s}),u.push(c)}},e4={width:"w",height:"h",density:"x"},e6=Object.keys(e4),e5=function(e){if("srcset"===e.node.fullName&&("img"===e.parent.fullName||"source"===e.parent.fullName))return()=>(function(e){let t=e3(e),r=e6.filter(e=>t.some(t=>Object.prototype.hasOwnProperty.call(t,e)));if(r.length>1)throw Error("Mixed descriptor in srcset is not supported");let[n]=r,a=e4[n],i=t.map(e=>e.source.value),s=Math.max(...i.map(e=>e.length)),o=t.map(e=>e[n]?String(e[n].value):""),l=o.map(e=>{let t=e.indexOf(".");return -1===t?e.length:t}),c=Math.max(...l);return en(W([",",F],i.map((e,t)=>{let r=[e],n=o[t];if(n){let i=s-e.length+1,o=c-l[t],u=" ".repeat(i+o);r.push(H(u," "),n+a)}return r})))})(eM(e.node))};function e9(e,t){let{node:r}=e,n=eM(e.node).trim();if("style"===r.fullName&&!t.parentParser&&!n.includes("{{"))return async e=>en(await e(n,{parser:"css",__isHTMLStyleAttribute:!0}))}var e8=new WeakMap,e7=function(e,t){let{root:r}=e;return e8.has(r)||e8.set(r,r.children.some(e=>eV(e,t)&&["ts","typescript"].includes(e.attrMap.lang))),e8.get(r)};function te(e,t,r){let{node:n}=r,a=eM(n);return ei(`type T<${a}> = any`,e,{parser:"babel-ts",__isEmbeddedTypescriptGenericParameters:!0},ea)}async function tt(e,t,r,n){let{left:a,operator:i,right:s}=function(e){let t=/,([^,\]}]*)(?:,([^,\]}]*))?$/,r=e.match(/(.*?)\s+(in|of)\s+(.*)/s);if(!r)return;let n={};if(n.for=r[3].trim(),!n.for)return;let a=h(!1,r[1].trim(),/^\(|\)$/g,""),i=a.match(t);i?(n.alias=a.replace(t,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=a;let s=[n.alias,n.iterator1,n.iterator2];if(!s.some((e,t)=>!e&&(0===t||s.slice(t+1).some(Boolean))))return{left:s.filter(Boolean).join(","),operator:r[2],right:n.for}}(eM(r.node)),o=e7(r,n);return[M(await ei(`function _(${a}) {}`,e,{parser:o?"babel-ts":"babel",__isVueForBindingLeft:!0}))," ",i," ",await ei(s,e,{parser:o?"__ts_expression":"__js_expression"})]}function tr(e,t,{parseWithTs:r}){return ei(e,t,{parser:r?"__ts_expression":"__js_expression"},ea)}var tn=function(e,t){let r;if("vue"!==t.parser)return;let{node:n}=e,a=n.fullName;if("v-for"===a)return tt;if("generic"===a&&eV(n.parent,t))return te;let i=eM(n),s=e7(e,t);return"#"===(r=n.fullName).charAt(0)||"slot-scope"===r||"v-slot"===r||r.startsWith("v-slot:")||function(e,t){let r=e.parent;if(!eR(r,t))return!1;let n=r.fullName,a=e.fullName;return"script"===n&&"setup"===a||"style"===n&&"vars"===a}(n,t)?e=>(function(e,t,{parseWithTs:r}){return ei(`function _(${e}) {}`,t,{parser:r?"babel-ts":"babel",__isVueBindings:!0})})(i,e,{parseWithTs:s}):a.startsWith("@")||a.startsWith("v-on:")?e=>(function(e,t,{parseWithTs:r}){let n;return(n=e.trim(),/^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/.test(n)||/^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i.test(n))?tr(e,t,{parseWithTs:r}):ei(e,t,{parser:r?"__vue_ts_event_binding":"__vue_event_binding"},ea)})(i,e,{parseWithTs:s}):a.startsWith(":")||a.startsWith("v-bind:")?e=>(function(e,t,{parseWithTs:r}){return ei(e,t,{parser:r?"__vue_ts_expression":"__vue_expression"},ea)})(i,e,{parseWithTs:s}):a.startsWith("v-")?e=>tr(i,e,{parseWithTs:s}):void 0},ta=function(e,t){let{node:r}=e;if(r.value){if(/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(t.originalText.slice(r.valueSpan.start.offset,r.valueSpan.end.offset))||"lwc"===t.parser&&r.value.startsWith("{")&&r.value.endsWith("}"))return[r.rawName,"=",r.value];for(let r of[e5,e9,eX,tn,eK]){let n=r(e,t);if(n)return function(e){return async(t,r,n,a)=>{let i=await e(t,r,n,a);if(i)return i=z(i,e=>"string"==typeof e?h(!1,e,'"',"&quot;"):e),[n.node.rawName,'="',M(i),'"']}}(n)}}},ti=new Proxy(()=>{},{get:()=>ti}),ts=function(e){return Array.isArray(e)&&e.length>0};function to(e){return e.sourceSpan.start.offset}function tl(e){return e.sourceSpan.end.offset}function tc(e,t){return[e.isSelfClosing?"":e.lastChild&&tv(e.lastChild)?"":[tf(e)?td(e.lastChild,t):"",th(e,t)],tu(e,t)]}function tu(e,t){return(e.next?tg(e.next):tf(e.parent))?"":[td(e,t),tp(e,t)]}function tp(e,t){return tv(e)?th(e.parent,t):tS(e)?tk(e.next):""}function th(e,t){if(ti(!e.isSelfClosing),tm(e,t))return"";switch(e.type){case"ieConditionalComment":return"<!";case"element":if(e.hasHtmComponentClosingTag)return"<//";default:return`</${e.rawName}`}}function td(e,t){if(tm(e,t))return"";switch(e.type){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]-->";case"ieConditionalStartComment":return"]><!-->";case"interpolation":return"}}";case"angularIcuExpression":return"}";case"element":if(e.isSelfClosing)return"/>";default:return">"}}function tm(e,t){return!e.isSelfClosing&&!e.endSourceSpan&&(ev(e)||ef(e.parent,t))}function tg(e){return e.prev&&"docType"!==e.prev.type&&"angularControlFlowBlock"!==e.type&&!eS(e.prev)&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces}function tf(e){var t;return(null==(t=e.lastChild)?void 0:t.isTrailingSpaceSensitive)&&!e.lastChild.hasTrailingSpaces&&!eS(eE(e.lastChild))&&!eN(e)}function tv(e){return!e.next&&!e.hasTrailingSpaces&&e.isTrailingSpaceSensitive&&eS(eE(e))}function tS(e){return e.next&&!eS(e.next)&&eS(e)&&e.isTrailingSpaceSensitive&&!e.hasTrailingSpaces}function ty(e){return!e.prev&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces}function tb(e,t,r){let{node:n}=e;return[t_(n,t),function(e,t,r){var n;let a;let{node:i}=e;if(!ts(i.attrs))return i.isSelfClosing?" ":"";let s=(null==(n=i.prev)?void 0:n.type)==="comment"&&!!(a=i.prev.value.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s))&&(!a[1]||a[1].split(/\s+/)),o="boolean"==typeof s?()=>s:Array.isArray(s)?e=>s.includes(e.rawName):()=>!1,l=e.map(({node:e})=>o(e)?j(t.originalText.slice(to(e),tl(e))):r(),"attrs"),c="element"===i.type&&"script"===i.fullName&&1===i.attrs.length&&"src"===i.attrs[0].fullName&&0===i.children.length,u=t.singleAttributePerLine&&i.attrs.length>1&&!eR(i,t)?V:F,p=[I([c?" ":F,W(u,l)])];return i.firstChild&&ty(i.firstChild)||i.isSelfClosing&&tf(i.parent)||c?p.push(i.isSelfClosing?" ":""):p.push(t.bracketSameLine?i.isSelfClosing?" ":"":i.isSelfClosing?F:U),p}(e,t,r),n.isSelfClosing?"":n.firstChild&&ty(n.firstChild)?"":tC(n)]}function t_(e,t){return e.prev&&tS(e.prev)?"":[tw(e,t),tk(e)]}function tw(e,t){return ty(e)?tC(e.parent):tg(e)?td(e.prev,t):""}function tk(e){switch(e.type){case"ieConditionalComment":case"ieConditionalStartComment":return`<!--[if ${e.condition}`;case"ieConditionalEndComment":return"<!--<!";case"interpolation":return"{{";case"docType":return"html"===e.value?"<!doctype":"<!DOCTYPE";case"angularIcuExpression":return"{";case"element":if(e.condition)return`<!--[if ${e.condition}]><!--><${e.rawName}`;default:return`<${e.rawName}`}}function tC(e){switch(ti(!e.isSelfClosing),e.type){case"ieConditionalComment":return"]>";case"element":if(e.condition)return"><!--<![endif]-->";default:return">"}}var tT=function(e,t){if(!e.endSourceSpan)return"";let r=e.startSourceSpan.end.offset;e.firstChild&&ty(e.firstChild)&&(r-=tC(e).length);let n=e.endSourceSpan.start.offset;return e.lastChild&&tv(e.lastChild)?n+=th(e,t).length:tf(e)&&(n-=td(e.lastChild,t).length),t.originalText.slice(r,n)},tx=new Set(["if","else if","for","switch","case"]),tE=null;function tL(e){if(null!==tE&&(tE.property,1)){let e=tE;return tE=tL.prototype=null,e}return tE=tL.prototype=e??Object.create(null),new tL}for(let e=0;e<=10;e++)tL();var tq=function(e,t="type"){return tL(e),function(r){let n=r[t],a=e[n];if(!Array.isArray(a))throw Object.assign(Error(`Missing visitor keys for '${n}'.`),{node:r});return a}}({"front-matter":[],root:["children"],element:["attrs","children"],ieConditionalComment:["children"],ieConditionalStartComment:[],ieConditionalEndComment:[],interpolation:["children"],text:["children"],docType:[],comment:[],attribute:[],cdata:[],angularControlFlowBlock:["children","parameters"],angularControlFlowBlockParameters:["children"],angularControlFlowBlockParameter:[],angularIcuExpression:["cases"],angularIcuCase:["expression"]});function tA(e){return/^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e)}var tN=new Map([["if",new Set(["else if","else"])],["else if",new Set(["else if","else"])],["for",new Set(["empty"])],["defer",new Set(["placeholder","error","loading"])],["placeholder",new Set(["placeholder","error","loading"])],["error",new Set(["placeholder","error","loading"])],["loading",new Set(["placeholder","error","loading"])]]);function tD(e,t,r){let n=e.node;if(ev(n)){let e=function e(t){let r=tl(t);return"element"===t.type&&!t.endSourceSpan&&ts(t.children)?Math.max(r,e($(!1,t.children,-1))):r}(n);return[tw(n,t),j(Y.trimEnd(t.originalText.slice(to(n)+(n.prev&&tS(n.prev)?tk(n).length:0),e-(n.next&&tg(n.next)?td(n,t).length:0)))),tp(n,t)]}return r()}function tI(e,t){return eS(e)&&eS(t)?e.isTrailingSpaceSensitive?e.hasTrailingSpaces?ek(t)?V:F:"":ek(t)?V:U:tS(e)&&(ev(t)||t.firstChild||t.isSelfClosing||"element"===t.type&&t.attrs.length>0)||"element"===e.type&&e.isSelfClosing&&tg(t)?"":!t.isLeadingSpaceSensitive||ek(t)||tg(t)&&e.lastChild&&tv(e.lastChild)&&e.lastChild.lastChild&&tv(e.lastChild.lastChild)?V:t.hasLeadingSpaces?F:U}function tB(e,t,r){let{node:n}=e;if(ew(n))return[R,...e.map(e=>{let n=e.node,a=n.prev?tI(n.prev,n):"";return[a?[a,e_(n.prev)?V:""]:"",tD(e,t,r)]},"children")];let a=n.children.map(()=>Symbol(""));return e.map((e,n)=>{let i=e.node;if(eS(i)){if(i.prev&&eS(i.prev)){let n=tI(i.prev,i);if(n)return e_(i.prev)?[V,V,tD(e,t,r)]:[n,tD(e,t,r)]}return tD(e,t,r)}let s=[],o=[],l=[],c=[],u=i.prev?tI(i.prev,i):"",p=i.next?tI(i,i.next):"";return u&&(e_(i.prev)?s.push(V,V):u===V?s.push(V):eS(i.prev)?o.push(u):o.push(H("",U,{groupId:a[n-1]}))),p&&(e_(i)?eS(i.next)&&c.push(V,V):p===V?eS(i.next)&&c.push(V):l.push(p)),[...s,M([...o,M([tD(e,t,r),...l],{id:a[n]})]),...c]},"children")}function tM(e){var t,r;return!((null==(t=e.next)?void 0:t.type)==="angularControlFlowBlock"&&null!=(r=tN.get(e.name))&&r.has(e.next.name))}function tP(e){return e>=9&&e<=32||160==e}function tH(e){return 48<=e&&e<=57}function tR(e){return e>=97&&e<=122||e>=65&&e<=90}function tF(e){return 10===e||13===e}function tU(e){return 48<=e&&e<=55}function tV(e){return 39===e||34===e||96===e}var tO,tW=/-+([a-z0-9])/g,t$=class e{constructor(e,t,r,n){this.file=e,this.offset=t,this.line=r,this.col=n}toString(){return null!=this.offset?`${this.file.url}@${this.line}:${this.col}`:this.file.url}moveBy(t){let r=this.file.content,n=r.length,a=this.offset,i=this.line,s=this.col;for(;a>0&&t<0;)if(a--,t++,10==r.charCodeAt(a)){i--;let e=r.substring(0,a-1).lastIndexOf("\n");s=e>0?a-e:a}else s--;for(;a<n&&t>0;){let e=r.charCodeAt(a);a++,t--,10==e?(i++,s=0):s++}return new e(this.file,a,i,s)}getContext(e,t){let r=this.file.content,n=this.offset;if(null!=n){n>r.length-1&&(n=r.length-1);let a=n,i=0,s=0;for(;i<e&&n>0&&(n--,i++,!(r[n]==`
// `&&++s==t)););for(i=0,s=0;i<e&&a<r.length-1&&(a++,i++,!(r[a]==`
// `&&++s==t)););return{before:r.substring(n,this.offset),after:r.substring(this.offset,a+1)}}return null}},tz=class{constructor(e,t){this.content=e,this.url=t}},tj=class{constructor(e,t,r=e,n=null){this.start=e,this.end=t,this.fullStart=r,this.details=n}toString(){return this.start.file.content.substring(this.start.offset,this.end.offset)}};(t8=tO||(tO={}))[t8.WARNING=0]="WARNING",t8[t8.ERROR=1]="ERROR";var tG=class{constructor(e,t,r=tO.ERROR){this.span=e,this.msg=t,this.level=r}contextualMessage(){let e=this.span.start.getContext(100,3);return e?`${this.msg} ("${e.before}[${tO[this.level]} ->]${e.after}")`:this.msg}toString(){let e=this.span.details?`, ${this.span.details}`:"";return`${this.contextualMessage()}: ${this.span.start}${e}`}},tK=[function(e){e.walk(e=>{if("element"===e.type&&e.tagDefinition.ignoreFirstLf&&e.children.length>0&&"text"===e.children[0].type&&e.children[0].value[0]===`
// `){let t=e.children[0];1===t.value.length?e.removeChild(t):t.value=t.value.slice(1)}})},function(e){let t=e=>{var t,r;return"element"===e.type&&(null==(t=e.prev)?void 0:t.type)==="ieConditionalStartComment"&&e.prev.sourceSpan.end.offset===e.startSourceSpan.start.offset&&(null==(r=e.firstChild)?void 0:r.type)==="ieConditionalEndComment"&&e.firstChild.sourceSpan.start.offset===e.startSourceSpan.end.offset};e.walk(e=>{if(e.children)for(let r=0;r<e.children.length;r++){let n=e.children[r];if(!t(n))continue;let a=n.prev,i=n.firstChild;e.removeChild(a),r--;let s=new tj(a.sourceSpan.start,i.sourceSpan.end),o=new tj(s.start,n.sourceSpan.end);n.condition=a.condition,n.sourceSpan=o,n.startSourceSpan=s,n.removeChild(i)}})},function(e){return function(e,t,r){e.walk(e=>{if(e.children)for(let n=0;n<e.children.length;n++){let a=e.children[n];if("text"!==a.type&&!t(a))continue;"text"!==a.type&&(a.type="text",a.value=r(a));let i=a.prev;!i||"text"!==i.type||(i.value+=a.value,i.sourceSpan=new tj(i.sourceSpan.start,a.sourceSpan.end),e.removeChild(a),n--)}})}(e,e=>"cdata"===e.type,e=>`<![CDATA[${e.value}]]>`)},function(e,t){if("html"===t.parser)return;let r=/{{(.+?)}}/s;e.walk(e=>{if(e.children&&!ey(e))for(let t of e.children){if("text"!==t.type)continue;let n=t.sourceSpan.start,a=null,i=t.value.split(r);for(let r=0;r<i.length;r++,n=a){let s=i[r];if(r%2==0){a=n.moveBy(s.length),s.length>0&&e.insertChildBefore(t,{type:"text",value:s,sourceSpan:new tj(n,a)});continue}a=n.moveBy(s.length+4),e.insertChildBefore(t,{type:"interpolation",sourceSpan:new tj(n,a),children:0===s.length?[]:[{type:"text",value:s,sourceSpan:new tj(n.moveBy(2),a.moveBy(-2))}]})}e.removeChild(t)}})},function(e){e.walk(e=>{if(!e.children)return;if(0===e.children.length||1===e.children.length&&"text"===e.children[0].type&&0===Y.trim(e.children[0].value).length){e.hasDanglingSpaces=e.children.length>0,e.children=[];return}let t=ey(e)||"interpolation"===e.type||eb(e),r=eb(e);if(!t)for(let t=0;t<e.children.length;t++){let r=e.children[t];if("text"!==r.type)continue;let{leadingWhitespace:n,text:a,trailingWhitespace:i}=eg(r.value),s=r.prev,o=r.next;a?(r.value=a,r.sourceSpan=new tj(r.sourceSpan.start.moveBy(n.length),r.sourceSpan.end.moveBy(-i.length)),n&&(s&&(s.hasTrailingSpaces=!0),r.hasLeadingSpaces=!0),i&&(r.hasTrailingSpaces=!0,o&&(o.hasLeadingSpaces=!0))):(e.removeChild(r),t--,(n||i)&&(s&&(s.hasTrailingSpaces=!0),o&&(o.hasLeadingSpaces=!0)))}e.isWhitespaceSensitive=t,e.isIndentationSensitive=r})},function(e,t){e.walk(e=>{e.cssDisplay=function(e,t){var r;if(eR(e,t))return"block";if((null==(r=e.prev)?void 0:r.type)==="comment"){let t=e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);if(t)return t[1]}let n=!1;if("element"===e.type&&"svg"===e.namespace){if(!function(e,t){let r=e;for(;r;){if(t(r))return!0;r=r.parent}return!1}(e,e=>"svg:foreignObject"===e.fullName))return"svg"===e.name?"inline-block":"block";n=!0}switch(t.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:return"element"===e.type&&(!e.namespace||n||eh(e))&&eu[e.name]||"inline"}}(e,t)})},function(e){e.walk(e=>{e.isSelfClosing=!e.children||"element"===e.type&&(e.tagDefinition.isVoid||e.endSourceSpan&&e.startSourceSpan.start===e.endSourceSpan.start&&e.startSourceSpan.end===e.endSourceSpan.end)})},function(e,t){e.walk(e=>{"element"===e.type&&(e.hasHtmComponentClosingTag=e.endSourceSpan&&/^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset,e.endSourceSpan.end.offset)))})},function(e,t){e.walk(e=>{let{children:r}=e;if(r){var n,a;if(0===r.length){e.isDanglingSpaceSensitive=!eA(n=e.cssDisplay)&&"inline-block"!==n&&!ey(e);return}for(let e of r)e.isLeadingSpaceSensitive=function(e,t){var r,n;let a=function(){var r;return!Q(e)&&"angularControlFlowBlock"!==e.type&&(("text"===e.type||"interpolation"===e.type)&&!!e.prev&&("text"===e.prev.type||"interpolation"===e.prev.type)||!!e.parent&&"none"!==e.parent.cssDisplay&&(!!eN(e.parent)||!(!e.prev&&("root"===e.parent.type||eN(e)&&e.parent||ey(e.parent)||eH(e.parent,t)||!(!eA(r=e.parent.cssDisplay)&&"inline-block"!==r))||e.prev&&eA(e.prev.cssDisplay))))}();return a&&!e.prev&&null!=(n=null==(r=e.parent)?void 0:r.tagDefinition)&&n.ignoreFirstLf?"interpolation"===e.type:a}(e,t),e.isTrailingSpaceSensitive=!Q(e)&&"angularControlFlowBlock"!==e.type&&(("text"===e.type||"interpolation"===e.type)&&!!e.next&&("text"===e.next.type||"interpolation"===e.next.type)||!!e.parent&&"none"!==e.parent.cssDisplay&&(!!eN(e.parent)||!(!e.next&&("root"===e.parent.type||eN(e)&&e.parent||ey(e.parent)||eH(e.parent,t)||!(!eA(a=e.parent.cssDisplay)&&"inline-block"!==a))||e.next&&eA(e.next.cssDisplay))));for(let e=0;e<r.length;e++){let t=r[e];t.isLeadingSpaceSensitive=(0===e||t.prev.isTrailingSpaceSensitive)&&t.isLeadingSpaceSensitive,t.isTrailingSpaceSensitive=(e===r.length-1||t.next.isLeadingSpaceSensitive)&&t.isTrailingSpaceSensitive}}})},function(e){let t=e=>{var t,r;return"element"===e.type&&0===e.attrs.length&&1===e.children.length&&"text"===e.firstChild.type&&!Y.hasWhitespaceCharacter(e.children[0].value)&&!e.firstChild.hasLeadingSpaces&&!e.firstChild.hasTrailingSpaces&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces&&e.isTrailingSpaceSensitive&&!e.hasTrailingSpaces&&(null==(t=e.prev)?void 0:t.type)==="text"&&(null==(r=e.next)?void 0:r.type)==="text"};e.walk(e=>{if(e.children)for(let r=0;r<e.children.length;r++){let n=e.children[r];if(!t(n))continue;let a=n.prev,i=n.next;a.value+=`<${n.rawName}>`+n.firstChild.value+`</${n.rawName}>`+i.value,a.sourceSpan=new tj(a.sourceSpan.start,i.sourceSpan.end),a.isTrailingSpaceSensitive=i.isTrailingSpaceSensitive,a.hasTrailingSpaces=i.hasTrailingSpaces,e.removeChild(n),r--,e.removeChild(i)}})}],tX=[{linguistLanguageId:146,name:"Angular",type:"markup",tmScope:"text.html.basic",aceMode:"html",codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",color:"#e34c26",aliases:["xhtml"],extensions:[".component.html"],parsers:["angular"],vscodeLanguageIds:["html"],filenames:[]},{linguistLanguageId:146,name:"HTML",type:"markup",tmScope:"text.html.basic",aceMode:"html",codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",color:"#e34c26",aliases:["xhtml"],extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml",".mjml"],parsers:["html"],vscodeLanguageIds:["html"]},{linguistLanguageId:146,name:"Lightning Web Components",type:"markup",tmScope:"text.html.basic",aceMode:"html",codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",color:"#e34c26",aliases:["xhtml"],extensions:[],parsers:["lwc"],vscodeLanguageIds:["html"],filenames:[]},{linguistLanguageId:391,name:"Vue",type:"markup",color:"#41b883",extensions:[".vue"],tmScope:"text.html.vue",aceMode:"html",parsers:["vue"],vscodeLanguageIds:["vue"]}],tY="HTML",tJ={bracketSameLine:{category:"Common",type:"boolean",default:!1,description:"Put > of opening tags on the last line instead of on a new line."},htmlWhitespaceSensitivity:{category:tY,type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},singleAttributePerLine:{category:"Common",type:"boolean",default:!1,description:"Enforce single attribute per line in HTML, Vue and JSX."},vueIndentScriptAndStyle:{category:tY,type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},tQ={};s(tQ,{angular:()=>nu,html:()=>nc,lwc:()=>nh,vue:()=>np}),(t7=ra||(ra={}))[t7.Emulated=0]="Emulated",t7[t7.None=2]="None",t7[t7.ShadowDom=3]="ShadowDom",(re=ri||(ri={}))[re.OnPush=0]="OnPush",re[re.Default=1]="Default";var tZ={name:"custom-elements"},t0="no-errors-schema";function t1(e){if(":"!=e[0])return[null,e];let t=e.indexOf(":",1);if(-1===t)throw Error(`Unsupported format "${e}" expecting ":namespace:name"`);return[e.slice(1,t),e.slice(t+1)]}function t2(e){return"ng-container"===t1(e)[1]}function t3(e){return"ng-content"===t1(e)[1]}function t4(e){return null===e?null:t1(e)[0]}function t6(e,t){return e?`:${e}:${t}`:t}function t5(){return rc||(rc={},t9(rs.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),t9(rs.STYLE,["*|style"]),t9(rs.URL,["*|formAction","area|href","area|ping","audio|src","a|href","a|ping","blockquote|cite","body|background","del|cite","form|action","img|src","input|src","ins|cite","q|cite","source|src","track|src","video|poster","video|src"]),t9(rs.RESOURCE_URL,["applet|code","applet|codebase","base|href","embed|src","frame|src","head|profile","html|manifest","iframe|src","link|href","media|src","object|codebase","object|data","script|src"])),rc}function t9(e,t){for(let r of t)rc[r.toLowerCase()]=e}(rt=rs||(rs={}))[rt.NONE=0]="NONE",rt[rt.HTML=1]="HTML",rt[rt.STYLE=2]="STYLE",rt[rt.SCRIPT=3]="SCRIPT",rt[rt.URL=4]="URL",rt[rt.RESOURCE_URL=5]="RESOURCE_URL",(rr=ro||(ro={}))[rr.Error=0]="Error",rr[rr.Warning=1]="Warning",rr[rr.Ignore=2]="Ignore",(rn=rl||(rl={}))[rn.RAW_TEXT=0]="RAW_TEXT",rn[rn.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",rn[rn.PARSABLE_DATA=2]="PARSABLE_DATA";var t8,t7,re,rt,rr,rn,ra,ri,rs,ro,rl,rc,ru,rp,rh=class{},rd=["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","data^[HTMLElement]|value","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,media,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type","select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","slot^[HTMLElement]|name","source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","time^[HTMLElement]|dateTime","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|decoding",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|"],rm=new Map(Object.entries({class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"})),rg=Array.from(rm).reduce((e,[t,r])=>(e.set(t,r),e),new Map),rf=class extends rh{constructor(){super(),this._schema=new Map,this._eventSchema=new Map,rd.forEach(e=>{let t=new Map,r=new Set,[n,a]=e.split("|"),i=a.split(","),[s,o]=n.split("^");s.split(",").forEach(e=>{this._schema.set(e.toLowerCase(),t),this._eventSchema.set(e.toLowerCase(),r)});let l=o&&this._schema.get(o.toLowerCase());if(l){for(let[e,r]of l)t.set(e,r);for(let e of this._eventSchema.get(o.toLowerCase()))r.add(e)}i.forEach(e=>{if(e.length>0)switch(e[0]){case"*":r.add(e.substring(1));break;case"!":t.set(e.substring(1),"boolean");break;case"#":t.set(e.substring(1),"number");break;case"%":t.set(e.substring(1),"object");break;default:t.set(e,"string")}})})}hasProperty(e,t,r){if(r.some(e=>e.name===t0))return!0;if(e.indexOf("-")>-1){if(t2(e)||t3(e))return!1;if(r.some(e=>e.name===tZ.name))return!0}return(this._schema.get(e.toLowerCase())||this._schema.get("unknown")).has(t)}hasElement(e,t){return!!(t.some(e=>e.name===t0)||e.indexOf("-")>-1&&(t2(e)||t3(e)||t.some(e=>e.name===tZ.name)))||this._schema.has(e.toLowerCase())}securityContext(e,t,r){r&&(t=this.getMappedPropName(t)),e=e.toLowerCase(),t=t.toLowerCase();let n=t5()[e+"|"+t];return n||(n=t5()["*|"+t])||rs.NONE}getMappedPropName(e){return rm.get(e)??e}getDefaultComponentElementName(){return"ng-component"}validateProperty(e){return e.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
// If '${e}' is a directive input, make sure the directive is imported by the current module.`}:{error:!1}}validateAttribute(e){return e.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`}:{error:!1}}allKnownElementNames(){return Array.from(this._schema.keys())}allKnownAttributesOfElement(e){return Array.from((this._schema.get(e.toLowerCase())||this._schema.get("unknown")).keys()).map(e=>rg.get(e)??e)}allKnownEventsOfElement(e){return Array.from(this._eventSchema.get(e.toLowerCase())??[])}normalizeAnimationStyleProperty(e){return e.replace(tW,(...e)=>e[1].toUpperCase())}normalizeAnimationStyleValue(e,t,r){let n="",a=r.toString().trim(),i=null;if(function(e){switch(e){case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":case"left":case"top":case"bottom":case"right":case"fontSize":case"outlineWidth":case"outlineOffset":case"paddingTop":case"paddingLeft":case"paddingBottom":case"paddingRight":case"marginTop":case"marginLeft":case"marginBottom":case"marginRight":case"borderRadius":case"borderWidth":case"borderTopWidth":case"borderLeftWidth":case"borderRightWidth":case"borderBottomWidth":case"textIndent":return!0;default:return!1}}(e)&&0!==r&&"0"!==r){if("number"==typeof r)n="px";else{let e=r.match(/^[+-]?[\d\.]+([a-z]*)$/);e&&0==e[1].length&&(i=`Please provide a CSS unit value for ${t}:${r}`)}}return{error:i,value:a+n}}},rv=class{constructor({closedByChildren:e,implicitNamespacePrefix:t,contentType:r=rl.PARSABLE_DATA,closedByParent:n=!1,isVoid:a=!1,ignoreFirstLf:i=!1,preventNamespaceInheritance:s=!1,canSelfClose:o=!1}={}){this.closedByChildren={},this.closedByParent=!1,e&&e.length>0&&e.forEach(e=>this.closedByChildren[e]=!0),this.isVoid=a,this.closedByParent=n||a,this.implicitNamespacePrefix=t||null,this.contentType=r,this.ignoreFirstLf=i,this.preventNamespaceInheritance=s,this.canSelfClose=o??a}isClosedByChild(e){return this.isVoid||e.toLowerCase() in this.closedByChildren}getContentType(e){return"object"==typeof this.contentType?(void 0===e?void 0:this.contentType[e])??this.contentType.default:this.contentType}};function rS(e){return rp||(ru=new rv({canSelfClose:!0}),rp=Object.assign(Object.create(null),{base:new rv({isVoid:!0}),meta:new rv({isVoid:!0}),area:new rv({isVoid:!0}),embed:new rv({isVoid:!0}),link:new rv({isVoid:!0}),img:new rv({isVoid:!0}),input:new rv({isVoid:!0}),param:new rv({isVoid:!0}),hr:new rv({isVoid:!0}),br:new rv({isVoid:!0}),source:new rv({isVoid:!0}),track:new rv({isVoid:!0}),wbr:new rv({isVoid:!0}),p:new rv({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new rv({closedByChildren:["tbody","tfoot"]}),tbody:new rv({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new rv({closedByChildren:["tbody"],closedByParent:!0}),tr:new rv({closedByChildren:["tr"],closedByParent:!0}),td:new rv({closedByChildren:["td","th"],closedByParent:!0}),th:new rv({closedByChildren:["td","th"],closedByParent:!0}),col:new rv({isVoid:!0}),svg:new rv({implicitNamespacePrefix:"svg"}),foreignObject:new rv({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new rv({implicitNamespacePrefix:"math"}),li:new rv({closedByChildren:["li"],closedByParent:!0}),dt:new rv({closedByChildren:["dt","dd"]}),dd:new rv({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new rv({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new rv({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new rv({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new rv({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new rv({closedByChildren:["optgroup"],closedByParent:!0}),option:new rv({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new rv({ignoreFirstLf:!0}),listing:new rv({ignoreFirstLf:!0}),style:new rv({contentType:rl.RAW_TEXT}),script:new rv({contentType:rl.RAW_TEXT}),title:new rv({contentType:{default:rl.ESCAPABLE_RAW_TEXT,svg:rl.PARSABLE_DATA}}),textarea:new rv({contentType:rl.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),new rf().allKnownElementNames().forEach(e=>{rp[e]||null!==t4(e)||(rp[e]=new rv({canSelfClose:!1}))})),rp[e]??ru}var ry=class{constructor(e,t){this.sourceSpan=e,this.i18n=t}},rb=class extends ry{constructor(e,t,r,n){super(t,n),this.value=e,this.tokens=r,this.type="text"}visit(e,t){return e.visitText(this,t)}},r_=class extends ry{constructor(e,t,r,n){super(t,n),this.value=e,this.tokens=r,this.type="cdata"}visit(e,t){return e.visitCdata(this,t)}},rw=class extends ry{constructor(e,t,r,n,a,i){super(n,i),this.switchValue=e,this.type=t,this.cases=r,this.switchValueSourceSpan=a}visit(e,t){return e.visitExpansion(this,t)}},rk=class{constructor(e,t,r,n,a){this.value=e,this.expression=t,this.sourceSpan=r,this.valueSourceSpan=n,this.expSourceSpan=a,this.type="expansionCase"}visit(e,t){return e.visitExpansionCase(this,t)}},rC=class extends ry{constructor(e,t,r,n,a,i,s){super(r,s),this.name=e,this.value=t,this.keySpan=n,this.valueSpan=a,this.valueTokens=i,this.type="attribute"}visit(e,t){return e.visitAttribute(this,t)}get nameSpan(){return this.keySpan}},rT=class extends ry{constructor(e,t,r,n,a,i=null,s=null,o){super(n,o),this.name=e,this.attrs=t,this.children=r,this.startSourceSpan=a,this.endSourceSpan=i,this.nameSpan=s,this.type="element"}visit(e,t){return e.visitElement(this,t)}},rx=class{constructor(e,t){this.value=e,this.sourceSpan=t,this.type="comment"}visit(e,t){return e.visitComment(this,t)}},rE=class{constructor(e,t){this.value=e,this.sourceSpan=t,this.type="docType"}visit(e,t){return e.visitDocType(this,t)}},rL=class{constructor(e,t,r,n,a,i=null){this.name=e,this.parameters=t,this.children=r,this.sourceSpan=n,this.startSourceSpan=a,this.endSourceSpan=i,this.type="block"}visit(e,t){return e.visitBlock(this,t)}},rq=class{constructor(e,t){this.expression=e,this.sourceSpan=t,this.type="blockParameter",this.startSourceSpan=null,this.endSourceSpan=null}visit(e,t){return e.visitBlockParameter(this,t)}};function rA(e,t,r=null){let n=[],a=e.visit?t=>e.visit(t,r)||t.visit(e,r):t=>t.visit(e,r);return t.forEach(e=>{let t=a(e);t&&n.push(t)}),n}var rN=class{constructor(){}visitElement(e,t){this.visitChildren(t,t=>{t(e.attrs),t(e.children)})}visitAttribute(e,t){}visitText(e,t){}visitCdata(e,t){}visitComment(e,t){}visitDocType(e,t){}visitExpansion(e,t){return this.visitChildren(t,t=>{t(e.cases)})}visitExpansionCase(e,t){}visitBlock(e,t){this.visitChildren(t,t=>{t(e.parameters),t(e.children)})}visitBlockParameter(e,t){}visitChildren(e,t){let r=[],n=this;return t(function(t){t&&r.push(rA(n,t,e))}),Array.prototype.concat.apply([],r)}},rD={AElig:"\xc6",AMP:"&",amp:"&",Aacute:"\xc1",Abreve:"Ă",Acirc:"\xc2",Acy:"А",Afr:"\uD835\uDD04",Agrave:"\xc0",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"\uD835\uDD38",ApplyFunction:"⁡",af:"⁡",Aring:"\xc5",angst:"\xc5",Ascr:"\uD835\uDC9C",Assign:"≔",colone:"≔",coloneq:"≔",Atilde:"\xc3",Auml:"\xc4",Backslash:"∖",setminus:"∖",setmn:"∖",smallsetminus:"∖",ssetmn:"∖",Barv:"⫧",Barwed:"⌆",doublebarwedge:"⌆",Bcy:"Б",Because:"∵",becaus:"∵",because:"∵",Bernoullis:"ℬ",Bscr:"ℬ",bernou:"ℬ",Beta:"Β",Bfr:"\uD835\uDD05",Bopf:"\uD835\uDD39",Breve:"˘",breve:"˘",Bumpeq:"≎",HumpDownHump:"≎",bump:"≎",CHcy:"Ч",COPY:"\xa9",copy:"\xa9",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",DD:"ⅅ",Cayleys:"ℭ",Cfr:"ℭ",Ccaron:"Č",Ccedil:"\xc7",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"\xb8",cedil:"\xb8",CenterDot:"\xb7",centerdot:"\xb7",middot:"\xb7",Chi:"Χ",CircleDot:"⊙",odot:"⊙",CircleMinus:"⊖",ominus:"⊖",CirclePlus:"⊕",oplus:"⊕",CircleTimes:"⊗",otimes:"⊗",ClockwiseContourIntegral:"∲",cwconint:"∲",CloseCurlyDoubleQuote:"”",rdquo:"”",rdquor:"”",CloseCurlyQuote:"’",rsquo:"’",rsquor:"’",Colon:"∷",Proportion:"∷",Colone:"⩴",Congruent:"≡",equiv:"≡",Conint:"∯",DoubleContourIntegral:"∯",ContourIntegral:"∮",conint:"∮",oint:"∮",Copf:"ℂ",complexes:"ℂ",Coproduct:"∐",coprod:"∐",CounterClockwiseContourIntegral:"∳",awconint:"∳",Cross:"⨯",Cscr:"\uD835\uDC9E",Cup:"⋓",CupCap:"≍",asympeq:"≍",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",ddagger:"‡",Darr:"↡",Dashv:"⫤",DoubleLeftTee:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",nabla:"∇",Delta:"Δ",Dfr:"\uD835\uDD07",DiacriticalAcute:"\xb4",acute:"\xb4",DiacriticalDot:"˙",dot:"˙",DiacriticalDoubleAcute:"˝",dblac:"˝",DiacriticalGrave:"`",grave:"`",DiacriticalTilde:"˜",tilde:"˜",Diamond:"⋄",diam:"⋄",diamond:"⋄",DifferentialD:"ⅆ",dd:"ⅆ",Dopf:"\uD835\uDD3B",Dot:"\xa8",DoubleDot:"\xa8",die:"\xa8",uml:"\xa8",DotDot:"⃜",DotEqual:"≐",doteq:"≐",esdot:"≐",DoubleDownArrow:"⇓",Downarrow:"⇓",dArr:"⇓",DoubleLeftArrow:"⇐",Leftarrow:"⇐",lArr:"⇐",DoubleLeftRightArrow:"⇔",Leftrightarrow:"⇔",hArr:"⇔",iff:"⇔",DoubleLongLeftArrow:"⟸",Longleftarrow:"⟸",xlArr:"⟸",DoubleLongLeftRightArrow:"⟺",Longleftrightarrow:"⟺",xhArr:"⟺",DoubleLongRightArrow:"⟹",Longrightarrow:"⟹",xrArr:"⟹",DoubleRightArrow:"⇒",Implies:"⇒",Rightarrow:"⇒",rArr:"⇒",DoubleRightTee:"⊨",vDash:"⊨",DoubleUpArrow:"⇑",Uparrow:"⇑",uArr:"⇑",DoubleUpDownArrow:"⇕",Updownarrow:"⇕",vArr:"⇕",DoubleVerticalBar:"∥",par:"∥",parallel:"∥",shortparallel:"∥",spar:"∥",DownArrow:"↓",ShortDownArrow:"↓",darr:"↓",downarrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",duarr:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",leftharpoondown:"↽",lhard:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",rhard:"⇁",rightharpoondown:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",top:"⊤",DownTeeArrow:"↧",mapstodown:"↧",Dscr:"\uD835\uDC9F",Dstrok:"Đ",ENG:"Ŋ",ETH:"\xd0",Eacute:"\xc9",Ecaron:"Ě",Ecirc:"\xca",Ecy:"Э",Edot:"Ė",Efr:"\uD835\uDD08",Egrave:"\xc8",Element:"∈",in:"∈",isin:"∈",isinv:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"\uD835\uDD3C",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",eqsim:"≂",esim:"≂",Equilibrium:"⇌",rightleftharpoons:"⇌",rlhar:"⇌",Escr:"ℰ",expectation:"ℰ",Esim:"⩳",Eta:"Η",Euml:"\xcb",Exists:"∃",exist:"∃",ExponentialE:"ⅇ",ee:"ⅇ",exponentiale:"ⅇ",Fcy:"Ф",Ffr:"\uD835\uDD09",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",blacksquare:"▪",squarf:"▪",squf:"▪",Fopf:"\uD835\uDD3D",ForAll:"∀",forall:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",gt:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"\uD835\uDD0A",Gg:"⋙",ggg:"⋙",Gopf:"\uD835\uDD3E",GreaterEqual:"≥",ge:"≥",geq:"≥",GreaterEqualLess:"⋛",gel:"⋛",gtreqless:"⋛",GreaterFullEqual:"≧",gE:"≧",geqq:"≧",GreaterGreater:"⪢",GreaterLess:"≷",gl:"≷",gtrless:"≷",GreaterSlantEqual:"⩾",geqslant:"⩾",ges:"⩾",GreaterTilde:"≳",gsim:"≳",gtrsim:"≳",Gscr:"\uD835\uDCA2",Gt:"≫",NestedGreaterGreater:"≫",gg:"≫",HARDcy:"Ъ",Hacek:"ˇ",caron:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",Poincareplane:"ℌ",HilbertSpace:"ℋ",Hscr:"ℋ",hamilt:"ℋ",Hopf:"ℍ",quaternions:"ℍ",HorizontalLine:"─",boxh:"─",Hstrok:"Ħ",HumpEqual:"≏",bumpe:"≏",bumpeq:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"\xcd",Icirc:"\xce",Icy:"И",Idot:"İ",Ifr:"ℑ",Im:"ℑ",image:"ℑ",imagpart:"ℑ",Igrave:"\xcc",Imacr:"Ī",ImaginaryI:"ⅈ",ii:"ⅈ",Int:"∬",Integral:"∫",int:"∫",Intersection:"⋂",bigcap:"⋂",xcap:"⋂",InvisibleComma:"⁣",ic:"⁣",InvisibleTimes:"⁢",it:"⁢",Iogon:"Į",Iopf:"\uD835\uDD40",Iota:"Ι",Iscr:"ℐ",imagline:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"\xcf",Jcirc:"Ĵ",Jcy:"Й",Jfr:"\uD835\uDD0D",Jopf:"\uD835\uDD41",Jscr:"\uD835\uDCA5",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"\uD835\uDD0E",Kopf:"\uD835\uDD42",Kscr:"\uD835\uDCA6",LJcy:"Љ",LT:"<",lt:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Lscr:"ℒ",lagran:"ℒ",Larr:"↞",twoheadleftarrow:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",lang:"⟨",langle:"⟨",LeftArrow:"←",ShortLeftArrow:"←",larr:"←",leftarrow:"←",slarr:"←",LeftArrowBar:"⇤",larrb:"⇤",LeftArrowRightArrow:"⇆",leftrightarrows:"⇆",lrarr:"⇆",LeftCeiling:"⌈",lceil:"⌈",LeftDoubleBracket:"⟦",lobrk:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",dharl:"⇃",downharpoonleft:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",lfloor:"⌊",LeftRightArrow:"↔",harr:"↔",leftrightarrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",dashv:"⊣",LeftTeeArrow:"↤",mapstoleft:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",vartriangleleft:"⊲",vltri:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",ltrie:"⊴",trianglelefteq:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",uharl:"↿",upharpoonleft:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",leftharpoonup:"↼",lharu:"↼",LeftVectorBar:"⥒",LessEqualGreater:"⋚",leg:"⋚",lesseqgtr:"⋚",LessFullEqual:"≦",lE:"≦",leqq:"≦",LessGreater:"≶",lessgtr:"≶",lg:"≶",LessLess:"⪡",LessSlantEqual:"⩽",leqslant:"⩽",les:"⩽",LessTilde:"≲",lesssim:"≲",lsim:"≲",Lfr:"\uD835\uDD0F",Ll:"⋘",Lleftarrow:"⇚",lAarr:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",longleftarrow:"⟵",xlarr:"⟵",LongLeftRightArrow:"⟷",longleftrightarrow:"⟷",xharr:"⟷",LongRightArrow:"⟶",longrightarrow:"⟶",xrarr:"⟶",Lopf:"\uD835\uDD43",LowerLeftArrow:"↙",swarr:"↙",swarrow:"↙",LowerRightArrow:"↘",searr:"↘",searrow:"↘",Lsh:"↰",lsh:"↰",Lstrok:"Ł",Lt:"≪",NestedLessLess:"≪",ll:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mscr:"ℳ",phmmat:"ℳ",Mfr:"\uD835\uDD10",MinusPlus:"∓",mnplus:"∓",mp:"∓",Mopf:"\uD835\uDD44",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",ZeroWidthSpace:"​",NewLine:`
// `,Nfr:"\uD835\uDD11",NoBreak:"⁠",NonBreakingSpace:"\xa0",nbsp:"\xa0",Nopf:"ℕ",naturals:"ℕ",Not:"⫬",NotCongruent:"≢",nequiv:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",npar:"∦",nparallel:"∦",nshortparallel:"∦",nspar:"∦",NotElement:"∉",notin:"∉",notinva:"∉",NotEqual:"≠",ne:"≠",NotEqualTilde:"≂̸",nesim:"≂̸",NotExists:"∄",nexist:"∄",nexists:"∄",NotGreater:"≯",ngt:"≯",ngtr:"≯",NotGreaterEqual:"≱",nge:"≱",ngeq:"≱",NotGreaterFullEqual:"≧̸",ngE:"≧̸",ngeqq:"≧̸",NotGreaterGreater:"≫̸",nGtv:"≫̸",NotGreaterLess:"≹",ntgl:"≹",NotGreaterSlantEqual:"⩾̸",ngeqslant:"⩾̸",nges:"⩾̸",NotGreaterTilde:"≵",ngsim:"≵",NotHumpDownHump:"≎̸",nbump:"≎̸",NotHumpEqual:"≏̸",nbumpe:"≏̸",NotLeftTriangle:"⋪",nltri:"⋪",ntriangleleft:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",nltrie:"⋬",ntrianglelefteq:"⋬",NotLess:"≮",nless:"≮",nlt:"≮",NotLessEqual:"≰",nle:"≰",nleq:"≰",NotLessGreater:"≸",ntlg:"≸",NotLessLess:"≪̸",nLtv:"≪̸",NotLessSlantEqual:"⩽̸",nleqslant:"⩽̸",nles:"⩽̸",NotLessTilde:"≴",nlsim:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",npr:"⊀",nprec:"⊀",NotPrecedesEqual:"⪯̸",npre:"⪯̸",npreceq:"⪯̸",NotPrecedesSlantEqual:"⋠",nprcue:"⋠",NotReverseElement:"∌",notni:"∌",notniva:"∌",NotRightTriangle:"⋫",nrtri:"⋫",ntriangleright:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",nrtrie:"⋭",ntrianglerighteq:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",nsqsube:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",nsqsupe:"⋣",NotSubset:"⊂⃒",nsubset:"⊂⃒",vnsub:"⊂⃒",NotSubsetEqual:"⊈",nsube:"⊈",nsubseteq:"⊈",NotSucceeds:"⊁",nsc:"⊁",nsucc:"⊁",NotSucceedsEqual:"⪰̸",nsce:"⪰̸",nsucceq:"⪰̸",NotSucceedsSlantEqual:"⋡",nsccue:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",nsupset:"⊃⃒",vnsup:"⊃⃒",NotSupersetEqual:"⊉",nsupe:"⊉",nsupseteq:"⊉",NotTilde:"≁",nsim:"≁",NotTildeEqual:"≄",nsime:"≄",nsimeq:"≄",NotTildeFullEqual:"≇",ncong:"≇",NotTildeTilde:"≉",nap:"≉",napprox:"≉",NotVerticalBar:"∤",nmid:"∤",nshortmid:"∤",nsmid:"∤",Nscr:"\uD835\uDCA9",Ntilde:"\xd1",Nu:"Ν",OElig:"Œ",Oacute:"\xd3",Ocirc:"\xd4",Ocy:"О",Odblac:"Ő",Ofr:"\uD835\uDD12",Ograve:"\xd2",Omacr:"Ō",Omega:"Ω",ohm:"Ω",Omicron:"Ο",Oopf:"\uD835\uDD46",OpenCurlyDoubleQuote:"“",ldquo:"“",OpenCurlyQuote:"‘",lsquo:"‘",Or:"⩔",Oscr:"\uD835\uDCAA",Oslash:"\xd8",Otilde:"\xd5",Otimes:"⨷",Ouml:"\xd6",OverBar:"‾",oline:"‾",OverBrace:"⏞",OverBracket:"⎴",tbrk:"⎴",OverParenthesis:"⏜",PartialD:"∂",part:"∂",Pcy:"П",Pfr:"\uD835\uDD13",Phi:"Φ",Pi:"Π",PlusMinus:"\xb1",plusmn:"\xb1",pm:"\xb1",Popf:"ℙ",primes:"ℙ",Pr:"⪻",Precedes:"≺",pr:"≺",prec:"≺",PrecedesEqual:"⪯",pre:"⪯",preceq:"⪯",PrecedesSlantEqual:"≼",prcue:"≼",preccurlyeq:"≼",PrecedesTilde:"≾",precsim:"≾",prsim:"≾",Prime:"″",Product:"∏",prod:"∏",Proportional:"∝",prop:"∝",propto:"∝",varpropto:"∝",vprop:"∝",Pscr:"\uD835\uDCAB",Psi:"Ψ",QUOT:'"',quot:'"',Qfr:"\uD835\uDD14",Qopf:"ℚ",rationals:"ℚ",Qscr:"\uD835\uDCAC",RBarr:"⤐",drbkarow:"⤐",REG:"\xae",circledR:"\xae",reg:"\xae",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",twoheadrightarrow:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",Rfr:"ℜ",real:"ℜ",realpart:"ℜ",ReverseElement:"∋",SuchThat:"∋",ni:"∋",niv:"∋",ReverseEquilibrium:"⇋",leftrightharpoons:"⇋",lrhar:"⇋",ReverseUpEquilibrium:"⥯",duhar:"⥯",Rho:"Ρ",RightAngleBracket:"⟩",rang:"⟩",rangle:"⟩",RightArrow:"→",ShortRightArrow:"→",rarr:"→",rightarrow:"→",srarr:"→",RightArrowBar:"⇥",rarrb:"⇥",RightArrowLeftArrow:"⇄",rightleftarrows:"⇄",rlarr:"⇄",RightCeiling:"⌉",rceil:"⌉",RightDoubleBracket:"⟧",robrk:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",dharr:"⇂",downharpoonright:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rfloor:"⌋",RightTee:"⊢",vdash:"⊢",RightTeeArrow:"↦",map:"↦",mapsto:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",vartriangleright:"⊳",vrtri:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",rtrie:"⊵",trianglerighteq:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",uharr:"↾",upharpoonright:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",rharu:"⇀",rightharpoonup:"⇀",RightVectorBar:"⥓",Ropf:"ℝ",reals:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",rAarr:"⇛",Rscr:"ℛ",realine:"ℛ",Rsh:"↱",rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"\uD835\uDD16",ShortUpArrow:"↑",UpArrow:"↑",uarr:"↑",uparrow:"↑",Sigma:"Σ",SmallCircle:"∘",compfn:"∘",Sopf:"\uD835\uDD4A",Sqrt:"√",radic:"√",Square:"□",squ:"□",square:"□",SquareIntersection:"⊓",sqcap:"⊓",SquareSubset:"⊏",sqsub:"⊏",sqsubset:"⊏",SquareSubsetEqual:"⊑",sqsube:"⊑",sqsubseteq:"⊑",SquareSuperset:"⊐",sqsup:"⊐",sqsupset:"⊐",SquareSupersetEqual:"⊒",sqsupe:"⊒",sqsupseteq:"⊒",SquareUnion:"⊔",sqcup:"⊔",Sscr:"\uD835\uDCAE",Star:"⋆",sstarf:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",sube:"⊆",subseteq:"⊆",Succeeds:"≻",sc:"≻",succ:"≻",SucceedsEqual:"⪰",sce:"⪰",succeq:"⪰",SucceedsSlantEqual:"≽",sccue:"≽",succcurlyeq:"≽",SucceedsTilde:"≿",scsim:"≿",succsim:"≿",Sum:"∑",sum:"∑",Sup:"⋑",Supset:"⋑",Superset:"⊃",sup:"⊃",supset:"⊃",SupersetEqual:"⊇",supe:"⊇",supseteq:"⊇",THORN:"\xde",TRADE:"™",trade:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"\uD835\uDD17",Therefore:"∴",there4:"∴",therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",Tilde:"∼",sim:"∼",thicksim:"∼",thksim:"∼",TildeEqual:"≃",sime:"≃",simeq:"≃",TildeFullEqual:"≅",cong:"≅",TildeTilde:"≈",ap:"≈",approx:"≈",asymp:"≈",thickapprox:"≈",thkap:"≈",Topf:"\uD835\uDD4B",TripleDot:"⃛",tdot:"⃛",Tscr:"\uD835\uDCAF",Tstrok:"Ŧ",Uacute:"\xda",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"\xdb",Ucy:"У",Udblac:"Ű",Ufr:"\uD835\uDD18",Ugrave:"\xd9",Umacr:"Ū",UnderBar:"_",lowbar:"_",UnderBrace:"⏟",UnderBracket:"⎵",bbrk:"⎵",UnderParenthesis:"⏝",Union:"⋃",bigcup:"⋃",xcup:"⋃",UnionPlus:"⊎",uplus:"⊎",Uogon:"Ų",Uopf:"\uD835\uDD4C",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",udarr:"⇅",UpDownArrow:"↕",updownarrow:"↕",varr:"↕",UpEquilibrium:"⥮",udhar:"⥮",UpTee:"⊥",bot:"⊥",bottom:"⊥",perp:"⊥",UpTeeArrow:"↥",mapstoup:"↥",UpperLeftArrow:"↖",nwarr:"↖",nwarrow:"↖",UpperRightArrow:"↗",nearr:"↗",nearrow:"↗",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"\uD835\uDCB0",Utilde:"Ũ",Uuml:"\xdc",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",bigvee:"⋁",xvee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",mid:"∣",shortmid:"∣",smid:"∣",VerticalLine:"|",verbar:"|",vert:"|",VerticalSeparator:"❘",VerticalTilde:"≀",wr:"≀",wreath:"≀",VeryThinSpace:" ",hairsp:" ",Vfr:"\uD835\uDD19",Vopf:"\uD835\uDD4D",Vscr:"\uD835\uDCB1",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",bigwedge:"⋀",xwedge:"⋀",Wfr:"\uD835\uDD1A",Wopf:"\uD835\uDD4E",Wscr:"\uD835\uDCB2",Xfr:"\uD835\uDD1B",Xi:"Ξ",Xopf:"\uD835\uDD4F",Xscr:"\uD835\uDCB3",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"\xdd",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"\uD835\uDD1C",Yopf:"\uD835\uDD50",Yscr:"\uD835\uDCB4",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",Zeta:"Ζ",Zfr:"ℨ",zeetrf:"ℨ",Zopf:"ℤ",integers:"ℤ",Zscr:"\uD835\uDCB5",aacute:"\xe1",abreve:"ă",ac:"∾",mstpos:"∾",acE:"∾̳",acd:"∿",acirc:"\xe2",acy:"а",aelig:"\xe6",afr:"\uD835\uDD1E",agrave:"\xe0",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",and:"∧",wedge:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",angle:"∠",ange:"⦤",angmsd:"∡",measuredangle:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angzarr:"⍼",aogon:"ą",aopf:"\uD835\uDD52",apE:"⩰",apacir:"⩯",ape:"≊",approxeq:"≊",apid:"≋",apos:"'",aring:"\xe5",ascr:"\uD835\uDCB6",ast:"*",midast:"*",atilde:"\xe3",auml:"\xe4",awint:"⨑",bNot:"⫭",backcong:"≌",bcong:"≌",backepsilon:"϶",bepsi:"϶",backprime:"‵",bprime:"‵",backsim:"∽",bsim:"∽",backsimeq:"⋍",bsime:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrktbrk:"⎶",bcy:"б",bdquo:"„",ldquor:"„",bemptyv:"⦰",beta:"β",beth:"ℶ",between:"≬",twixt:"≬",bfr:"\uD835\uDD1F",bigcirc:"◯",xcirc:"◯",bigodot:"⨀",xodot:"⨀",bigoplus:"⨁",xoplus:"⨁",bigotimes:"⨂",xotime:"⨂",bigsqcup:"⨆",xsqcup:"⨆",bigstar:"★",starf:"★",bigtriangledown:"▽",xdtri:"▽",bigtriangleup:"△",xutri:"△",biguplus:"⨄",xuplus:"⨄",bkarow:"⤍",rbarr:"⤍",blacklozenge:"⧫",lozf:"⧫",blacktriangle:"▴",utrif:"▴",blacktriangledown:"▾",dtrif:"▾",blacktriangleleft:"◂",ltrif:"◂",blacktriangleright:"▸",rtrif:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"\uD835\uDD53",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",minusb:"⊟",boxplus:"⊞",plusb:"⊞",boxtimes:"⊠",timesb:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",brvbar:"\xa6",bscr:"\uD835\uDCB7",bsemi:"⁏",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bumpE:"⪮",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",ccaps:"⩍",ccaron:"č",ccedil:"\xe7",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cemptyv:"⦲",cent:"\xa2",cfr:"\uD835\uDD20",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",cire:"≗",circlearrowleft:"↺",olarr:"↺",circlearrowright:"↻",orarr:"↻",circledS:"Ⓢ",oS:"Ⓢ",circledast:"⊛",oast:"⊛",circledcirc:"⊚",ocir:"⊚",circleddash:"⊝",odash:"⊝",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",comma:",",commat:"@",comp:"∁",complement:"∁",congdot:"⩭",copf:"\uD835\uDD54",copysr:"℗",crarr:"↵",cross:"✗",cscr:"\uD835\uDCB8",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",curlyeqprec:"⋞",cuesc:"⋟",curlyeqsucc:"⋟",cularr:"↶",curvearrowleft:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curvearrowright:"↷",curarrm:"⤼",curlyvee:"⋎",cuvee:"⋎",curlywedge:"⋏",cuwed:"⋏",curren:"\xa4",cwint:"∱",cylcty:"⌭",dHar:"⥥",dagger:"†",daleth:"ℸ",dash:"‐",hyphen:"‐",dbkarow:"⤏",rBarr:"⤏",dcaron:"ď",dcy:"д",ddarr:"⇊",downdownarrows:"⇊",ddotseq:"⩷",eDDot:"⩷",deg:"\xb0",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"\uD835\uDD21",diamondsuit:"♦",diams:"♦",digamma:"ϝ",gammad:"ϝ",disin:"⋲",div:"\xf7",divide:"\xf7",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",llcorner:"⌞",dlcrop:"⌍",dollar:"$",dopf:"\uD835\uDD55",doteqdot:"≑",eDot:"≑",dotminus:"∸",minusd:"∸",dotplus:"∔",plusdo:"∔",dotsquare:"⊡",sdotb:"⊡",drcorn:"⌟",lrcorner:"⌟",drcrop:"⌌",dscr:"\uD835\uDCB9",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",triangledown:"▿",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eacute:"\xe9",easter:"⩮",ecaron:"ě",ecir:"≖",eqcirc:"≖",ecirc:"\xea",ecolon:"≕",eqcolon:"≕",ecy:"э",edot:"ė",efDot:"≒",fallingdotseq:"≒",efr:"\uD835\uDD22",eg:"⪚",egrave:"\xe8",egs:"⪖",eqslantgtr:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",eqslantless:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",varnothing:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"\uD835\uDD56",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",straightepsilon:"ϵ",varepsilon:"ϵ",equals:"=",equest:"≟",questeq:"≟",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",risingdotseq:"≓",erarr:"⥱",escr:"ℯ",eta:"η",eth:"\xf0",euml:"\xeb",euro:"€",excl:"!",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"\uD835\uDD23",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"\uD835\uDD57",fork:"⋔",pitchfork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"\xbd",half:"\xbd",frac13:"⅓",frac14:"\xbc",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"\xbe",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",sfrown:"⌢",fscr:"\uD835\uDCBB",gEl:"⪌",gtreqqless:"⪌",gacute:"ǵ",gamma:"γ",gap:"⪆",gtrapprox:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"\uD835\uDD24",gimel:"ℷ",gjcy:"ѓ",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gneqq:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gnsim:"⋧",gopf:"\uD835\uDD58",gscr:"ℊ",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtrdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrarr:"⥸",gvertneqq:"≩︀",gvnE:"≩︀",hardcy:"ъ",harrcir:"⥈",harrw:"↭",leftrightsquigarrow:"↭",hbar:"ℏ",hslash:"ℏ",planck:"ℏ",plankv:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",mldr:"…",hercon:"⊹",hfr:"\uD835\uDD25",hksearow:"⤥",searhk:"⤥",hkswarow:"⤦",swarhk:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",larrhk:"↩",hookrightarrow:"↪",rarrhk:"↪",hopf:"\uD835\uDD59",horbar:"―",hscr:"\uD835\uDCBD",hstrok:"ħ",hybull:"⁃",iacute:"\xed",icirc:"\xee",icy:"и",iecy:"е",iexcl:"\xa1",ifr:"\uD835\uDD26",igrave:"\xec",iiiint:"⨌",qint:"⨌",iiint:"∭",tint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",imath:"ı",inodot:"ı",imof:"⊷",imped:"Ƶ",incare:"℅",infin:"∞",infintie:"⧝",intcal:"⊺",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iprod:"⨼",iocy:"ё",iogon:"į",iopf:"\uD835\uDD5A",iota:"ι",iquest:"\xbf",iscr:"\uD835\uDCBE",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",itilde:"ĩ",iukcy:"і",iuml:"\xef",jcirc:"ĵ",jcy:"й",jfr:"\uD835\uDD27",jmath:"ȷ",jopf:"\uD835\uDD5B",jscr:"\uD835\uDCBF",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",varkappa:"ϰ",kcedil:"ķ",kcy:"к",kfr:"\uD835\uDD28",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"\uD835\uDD5C",kscr:"\uD835\uDCC0",lAtail:"⤛",lBarr:"⤎",lEg:"⪋",lesseqqgtr:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lambda:"λ",langd:"⦑",lap:"⪅",lessapprox:"⪅",laquo:"\xab",larrbfs:"⤟",larrfs:"⤝",larrlp:"↫",looparrowleft:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",leftarrowtail:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lcub:"{",lbrack:"[",lsqb:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lcy:"л",ldca:"⤶",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leq:"≤",leftleftarrows:"⇇",llarr:"⇇",leftthreetimes:"⋋",lthree:"⋋",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessdot:"⋖",ltdot:"⋖",lfisht:"⥼",lfr:"\uD835\uDD29",lgE:"⪑",lharul:"⥪",lhblk:"▄",ljcy:"љ",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lneqq:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lnsim:"⋦",loang:"⟬",loarr:"⇽",longmapsto:"⟼",xmap:"⟼",looparrowright:"↬",rarrlp:"↬",lopar:"⦅",lopf:"\uD835\uDD5D",loplus:"⨭",lotimes:"⨴",lowast:"∗",loz:"◊",lozenge:"◊",lpar:"(",lparlt:"⦓",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"\uD835\uDCC1",lsime:"⪍",lsimg:"⪏",lsquor:"‚",sbquo:"‚",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",triangleleft:"◃",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"\xaf",strns:"\xaf",male:"♂",malt:"✠",maltese:"✠",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",mfr:"\uD835\uDD2A",mho:"℧",micro:"\xb5",midcir:"⫰",minus:"−",minusdu:"⨪",mlcp:"⫛",models:"⊧",mopf:"\uD835\uDD5E",mscr:"\uD835\uDCC2",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nLeftarrow:"⇍",nlArr:"⇍",nLeftrightarrow:"⇎",nhArr:"⇎",nLl:"⋘̸",nLt:"≪⃒",nRightarrow:"⇏",nrArr:"⇏",nVDash:"⊯",nVdash:"⊮",nacute:"ń",nang:"∠⃒",napE:"⩰̸",napid:"≋̸",napos:"ŉ",natur:"♮",natural:"♮",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",neArr:"⇗",nearhk:"⤤",nedot:"≐̸",nesear:"⤨",toea:"⤨",nfr:"\uD835\uDD2B",nharr:"↮",nleftrightarrow:"↮",nhpar:"⫲",nis:"⋼",nisd:"⋺",njcy:"њ",nlE:"≦̸",nleqq:"≦̸",nlarr:"↚",nleftarrow:"↚",nldr:"‥",nopf:"\uD835\uDD5F",not:"\xac",notinE:"⋹̸",notindot:"⋵̸",notinvb:"⋷",notinvc:"⋶",notnivb:"⋾",notnivc:"⋽",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",nrarr:"↛",nrightarrow:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nscr:"\uD835\uDCC3",nsub:"⊄",nsubE:"⫅̸",nsubseteqq:"⫅̸",nsup:"⊅",nsupE:"⫆̸",nsupseteqq:"⫆̸",ntilde:"\xf1",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwnear:"⤧",oacute:"\xf3",ocirc:"\xf4",ocy:"о",odblac:"ő",odiv:"⨸",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"\uD835\uDD2C",ogon:"˛",ograve:"\xf2",ogt:"⧁",ohbar:"⦵",olcir:"⦾",olcross:"⦻",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",oopf:"\uD835\uDD60",opar:"⦷",operp:"⦹",or:"∨",vee:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",oscr:"ℴ",ordf:"\xaa",ordm:"\xba",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oslash:"\xf8",osol:"⊘",otilde:"\xf5",otimesas:"⨶",ouml:"\xf6",ovbar:"⌽",para:"\xb6",parsim:"⫳",parsl:"⫽",pcy:"п",percnt:"%",period:".",permil:"‰",pertenk:"‱",pfr:"\uD835\uDD2D",phi:"φ",phiv:"ϕ",straightphi:"ϕ",varphi:"ϕ",phone:"☎",pi:"π",piv:"ϖ",varpi:"ϖ",planckh:"ℎ",plus:"+",plusacir:"⨣",pluscir:"⨢",plusdu:"⨥",pluse:"⩲",plussim:"⨦",plustwo:"⨧",pointint:"⨕",popf:"\uD835\uDD61",pound:"\xa3",prE:"⪳",prap:"⪷",precapprox:"⪷",precnapprox:"⪹",prnap:"⪹",precneqq:"⪵",prnE:"⪵",precnsim:"⋨",prnsim:"⋨",prime:"′",profalar:"⌮",profline:"⌒",profsurf:"⌓",prurel:"⊰",pscr:"\uD835\uDCC5",psi:"ψ",puncsp:" ",qfr:"\uD835\uDD2E",qopf:"\uD835\uDD62",qprime:"⁗",qscr:"\uD835\uDCC6",quatint:"⨖",quest:"?",rAtail:"⤜",rHar:"⥤",race:"∽̱",racute:"ŕ",raemptyv:"⦳",rangd:"⦒",range:"⦥",raquo:"\xbb",rarrap:"⥵",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rightarrowtail:"↣",rarrw:"↝",rightsquigarrow:"↝",ratail:"⤚",ratio:"∶",rbbrk:"❳",rbrace:"}",rcub:"}",rbrack:"]",rsqb:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdsh:"↳",rect:"▭",rfisht:"⥽",rfr:"\uD835\uDD2F",rharul:"⥬",rho:"ρ",rhov:"ϱ",varrho:"ϱ",rightrightarrows:"⇉",rrarr:"⇉",rightthreetimes:"⋌",rthree:"⋌",ring:"˚",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",ropar:"⦆",ropf:"\uD835\uDD63",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rsaquo:"›",rscr:"\uD835\uDCC7",rtimes:"⋊",rtri:"▹",triangleright:"▹",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",scE:"⪴",scap:"⪸",succapprox:"⪸",scaron:"š",scedil:"ş",scirc:"ŝ",scnE:"⪶",succneqq:"⪶",scnap:"⪺",succnapprox:"⪺",scnsim:"⋩",succnsim:"⋩",scpolint:"⨓",scy:"с",sdot:"⋅",sdote:"⩦",seArr:"⇘",sect:"\xa7",semi:";",seswar:"⤩",tosa:"⤩",sext:"✶",sfr:"\uD835\uDD30",sharp:"♯",shchcy:"щ",shcy:"ш",shy:"\xad",sigma:"σ",sigmaf:"ς",sigmav:"ς",varsigma:"ς",simdot:"⩪",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",smashp:"⨳",smeparsl:"⧤",smile:"⌣",ssmile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"\uD835\uDD64",spades:"♠",spadesuit:"♠",sqcaps:"⊓︀",sqcups:"⊔︀",sscr:"\uD835\uDCC8",star:"☆",sub:"⊂",subset:"⊂",subE:"⫅",subseteqq:"⫅",subdot:"⪽",subedot:"⫃",submult:"⫁",subnE:"⫋",subsetneqq:"⫋",subne:"⊊",subsetneq:"⊊",subplus:"⪿",subrarr:"⥹",subsim:"⫇",subsub:"⫕",subsup:"⫓",sung:"♪",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",supE:"⫆",supseteqq:"⫆",supdot:"⪾",supdsub:"⫘",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supsetneqq:"⫌",supne:"⊋",supsetneq:"⊋",supplus:"⫀",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swnwar:"⤪",szlig:"\xdf",target:"⌖",tau:"τ",tcaron:"ť",tcedil:"ţ",tcy:"т",telrec:"⌕",tfr:"\uD835\uDD31",theta:"θ",thetasym:"ϑ",thetav:"ϑ",vartheta:"ϑ",thorn:"\xfe",times:"\xd7",timesbar:"⨱",timesd:"⨰",topbot:"⌶",topcir:"⫱",topf:"\uD835\uDD65",topfork:"⫚",tprime:"‴",triangle:"▵",utri:"▵",triangleq:"≜",trie:"≜",tridot:"◬",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"\uD835\uDCC9",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",uHar:"⥣",uacute:"\xfa",ubrcy:"ў",ubreve:"ŭ",ucirc:"\xfb",ucy:"у",udblac:"ű",ufisht:"⥾",ufr:"\uD835\uDD32",ugrave:"\xf9",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uogon:"ų",uopf:"\uD835\uDD66",upsi:"υ",upsilon:"υ",upuparrows:"⇈",uuarr:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"\uD835\uDCCA",utdot:"⋰",utilde:"ũ",uuml:"\xfc",uwangle:"⦧",vBar:"⫨",vBarv:"⫩",vangrt:"⦜",varsubsetneq:"⊊︀",vsubne:"⊊︀",varsubsetneqq:"⫋︀",vsubnE:"⫋︀",varsupsetneq:"⊋︀",vsupne:"⊋︀",varsupsetneqq:"⫌︀",vsupnE:"⫌︀",vcy:"в",veebar:"⊻",veeeq:"≚",vellip:"⋮",vfr:"\uD835\uDD33",vopf:"\uD835\uDD67",vscr:"\uD835\uDCCB",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedgeq:"≙",weierp:"℘",wp:"℘",wfr:"\uD835\uDD34",wopf:"\uD835\uDD68",wscr:"\uD835\uDCCC",xfr:"\uD835\uDD35",xi:"ξ",xnis:"⋻",xopf:"\uD835\uDD69",xscr:"\uD835\uDCCD",yacute:"\xfd",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"\xa5",yfr:"\uD835\uDD36",yicy:"ї",yopf:"\uD835\uDD6A",yscr:"\uD835\uDCCE",yucy:"ю",yuml:"\xff",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeta:"ζ",zfr:"\uD835\uDD37",zhcy:"ж",zigrarr:"⇝",zopf:"\uD835\uDD6B",zscr:"\uD835\uDCCF",zwj:"‍",zwnj:"‌"};rD.ngsp="";var rI=[/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//],rB=new class e{static fromArray(t){return t?(function(e,t){if(null!=t&&!(Array.isArray(t)&&2==t.length))throw Error(`Expected '${e}' to be an array, [start, end].`);if(null!=t){let e=t[0],r=t[1];rI.forEach(t=>{if(t.test(e)||t.test(r))throw Error(`['${e}', '${r}'] contains unusable interpolation symbol.`)})}}("interpolation",t),new e(t[0],t[1])):rB}constructor(e,t){this.start=e,this.end=t}}("{{","}}"),rM=class extends tG{constructor(e,t,r){super(r,e),this.tokenType=t}},rP=class{constructor(e,t,r){this.tokens=e,this.errors=t,this.nonNormalizedIcuExpressions=r}},rH=/\r\n?/g;function rR(e){return`Unexpected character "${0===e?"EOF":String.fromCharCode(e)}"`}function rF(e){return`Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}(n=a||(a={})).HEX="hexadecimal",n.DEC="decimal";var rU=class{constructor(e){this.error=e}},rV=class{constructor(e,t,r){this._getTagContentType=t,this._currentTokenStart=null,this._currentTokenType=null,this._expansionCaseStack=[],this._inInterpolation=!1,this._fullNameStack=[],this.tokens=[],this.errors=[],this.nonNormalizedIcuExpressions=[],this._tokenizeIcu=r.tokenizeExpansionForms||!1,this._interpolationConfig=r.interpolationConfig||rB,this._leadingTriviaCodePoints=r.leadingTriviaChars&&r.leadingTriviaChars.map(e=>e.codePointAt(0)||0),this._canSelfClose=r.canSelfClose||!1,this._allowHtmComponentClosingTags=r.allowHtmComponentClosingTags||!1;let n=r.range||{endPos:e.content.length,startPos:0,startLine:0,startCol:0};this._cursor=r.escapedString?new rY(e,n):new rX(e,n),this._preserveLineEndings=r.preserveLineEndings||!1,this._i18nNormalizeLineEndingsInICUs=r.i18nNormalizeLineEndingsInICUs||!1,this._tokenizeBlocks=r.tokenizeBlocks??!0;try{this._cursor.init()}catch(e){this.handleError(e)}}_processCarriageReturns(e){return this._preserveLineEndings?e:e.replace(rH,`
// `)}tokenize(){for(;0!==this._cursor.peek();){let e=this._cursor.clone();try{if(this._attemptCharCode(60)){if(this._attemptCharCode(33))this._attemptStr("[CDATA[")?this._consumeCdata(e):this._attemptStr("--")?this._consumeComment(e):this._attemptStrCaseInsensitive("doctype")?this._consumeDocType(e):this._consumeBogusComment(e);else if(this._attemptCharCode(47))this._consumeTagClose(e);else{let t=this._cursor.clone();this._attemptCharCode(63)?(this._cursor=t,this._consumeBogusComment(e)):this._consumeTagOpen(e)}}else this._tokenizeBlocks&&this._attemptCharCode(64)?this._consumeBlockStart(e):this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansionCase()&&!this._isInExpansionForm()&&this._attemptCharCode(125)?this._consumeBlockEnd(e):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeWithInterpolation(5,8,()=>this._isTextEnd(),()=>this._isTagStart())}catch(e){this.handleError(e)}}this._beginToken(30),this._endToken([])}_getBlockName(){let e=!1,t=this._cursor.clone();return this._attemptCharCodeUntilFn(t=>tP(t)?!e:!rG(t)||(e=!0,!1)),this._cursor.getChars(t).trim()}_consumeBlockStart(e){this._beginToken(25,e);let t=this._endToken([this._getBlockName()]);if(40===this._cursor.peek()){if(this._cursor.advance(),this._consumeBlockParameters(),this._attemptCharCodeUntilFn(rO),this._attemptCharCode(41))this._attemptCharCodeUntilFn(rO);else{t.type=29;return}}this._attemptCharCode(123)?(this._beginToken(26),this._endToken([])):t.type=29}_consumeBlockEnd(e){this._beginToken(27,e),this._endToken([])}_consumeBlockParameters(){for(this._attemptCharCodeUntilFn(rK);41!==this._cursor.peek()&&0!==this._cursor.peek();){this._beginToken(28);let e=this._cursor.clone(),t=null,r=0;for(;59!==this._cursor.peek()&&0!==this._cursor.peek()||null!==t;){let e=this._cursor.peek();if(92===e)this._cursor.advance();else if(e===t)t=null;else if(null===t&&tV(e))t=e;else if(40===e&&null===t)r++;else if(41===e&&null===t){if(0===r)break;r>0&&r--}this._cursor.advance()}this._endToken([this._cursor.getChars(e)]),this._attemptCharCodeUntilFn(rK)}}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(125!==this._cursor.peek()&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(125===this._cursor.peek()){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}_beginToken(e,t=this._cursor.clone()){this._currentTokenStart=t,this._currentTokenType=e}_endToken(e,t){if(null===this._currentTokenStart)throw new rM("Programming error - attempted to end a token when there was no start to the token",this._currentTokenType,this._cursor.getSpan(t));if(null===this._currentTokenType)throw new rM("Programming error - attempted to end a token which has no token type",null,this._cursor.getSpan(this._currentTokenStart));let r={type:this._currentTokenType,parts:e,sourceSpan:(t??this._cursor).getSpan(this._currentTokenStart,this._leadingTriviaCodePoints)};return this.tokens.push(r),this._currentTokenStart=null,this._currentTokenType=null,r}_createError(e,t){this._isInExpansionForm()&&(e+=' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');let r=new rM(e,this._currentTokenType,t);return this._currentTokenStart=null,this._currentTokenType=null,new rU(r)}handleError(e){if(e instanceof rJ&&(e=this._createError(e.msg,this._cursor.getSpan(e.cursor))),e instanceof rU)this.errors.push(e.error);else throw e}_attemptCharCode(e){return this._cursor.peek()===e&&(this._cursor.advance(),!0)}_attemptCharCodeCaseInsensitive(e){return rj(this._cursor.peek())===rj(e)&&(this._cursor.advance(),!0)}_requireCharCode(e){let t=this._cursor.clone();if(!this._attemptCharCode(e))throw this._createError(rR(this._cursor.peek()),this._cursor.getSpan(t))}_attemptStr(e){let t=e.length;if(this._cursor.charsLeft()<t)return!1;let r=this._cursor.clone();for(let n=0;n<t;n++)if(!this._attemptCharCode(e.charCodeAt(n)))return this._cursor=r,!1;return!0}_attemptStrCaseInsensitive(e){for(let t=0;t<e.length;t++)if(!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t)))return!1;return!0}_requireStr(e){let t=this._cursor.clone();if(!this._attemptStr(e))throw this._createError(rR(this._cursor.peek()),this._cursor.getSpan(t))}_requireStrCaseInsensitive(e){let t=this._cursor.clone();if(!this._attemptStrCaseInsensitive(e))throw this._createError(rR(this._cursor.peek()),this._cursor.getSpan(t))}_attemptCharCodeUntilFn(e){for(;!e(this._cursor.peek());)this._cursor.advance()}_requireCharCodeUntilFn(e,t){let r=this._cursor.clone();if(this._attemptCharCodeUntilFn(e),this._cursor.diff(r)<t)throw this._createError(rR(this._cursor.peek()),this._cursor.getSpan(r))}_attemptUntilChar(e){for(;this._cursor.peek()!==e;)this._cursor.advance()}_readChar(){let e=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),e}_consumeEntity(e){this._beginToken(9);let t=this._cursor.clone();if(this._cursor.advance(),this._attemptCharCode(35)){let e=this._attemptCharCode(120)||this._attemptCharCode(88),n=this._cursor.clone();if(this._attemptCharCodeUntilFn(r$),59!=this._cursor.peek()){var r;this._cursor.advance();let n=e?a.HEX:a.DEC;throw this._createError((r=this._cursor.getChars(t),`Unable to parse entity "${r}" - ${n} character reference entities must end with ";"`),this._cursor.getSpan())}let i=this._cursor.getChars(n);this._cursor.advance();try{let r=parseInt(i,e?16:10);this._endToken([String.fromCharCode(r),this._cursor.getChars(t)])}catch{throw this._createError(rF(this._cursor.getChars(t)),this._cursor.getSpan())}}else{let r=this._cursor.clone();if(this._attemptCharCodeUntilFn(rz),59!=this._cursor.peek())this._beginToken(e,t),this._cursor=r,this._endToken(["&"]);else{let e=this._cursor.getChars(r);this._cursor.advance();let n=rD[e];if(!n)throw this._createError(rF(e),this._cursor.getSpan(t));this._endToken([n,`&${e};`])}}}_consumeRawText(e,t){this._beginToken(e?6:7);let r=[];for(;;){let n=this._cursor.clone(),a=t();if(this._cursor=n,a)break;e&&38===this._cursor.peek()?(this._endToken([this._processCarriageReturns(r.join(""))]),r.length=0,this._consumeEntity(6),this._beginToken(6)):r.push(this._readChar())}this._endToken([this._processCarriageReturns(r.join(""))])}_consumeComment(e){this._beginToken(10,e),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("-->")),this._beginToken(11),this._requireStr("-->"),this._endToken([])}_consumeBogusComment(e){this._beginToken(10,e),this._endToken([]),this._consumeRawText(!1,()=>62===this._cursor.peek()),this._beginToken(11),this._cursor.advance(),this._endToken([])}_consumeCdata(e){this._beginToken(12,e),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("]]>")),this._beginToken(13),this._requireStr("]]>"),this._endToken([])}_consumeDocType(e){this._beginToken(18,e),this._endToken([]),this._consumeRawText(!1,()=>62===this._cursor.peek()),this._beginToken(19),this._cursor.advance(),this._endToken([])}_consumePrefixAndName(){var e;let t,r=this._cursor.clone(),n="";for(;58!==this._cursor.peek()&&!(((e=this._cursor.peek())<97||122<e)&&(e<65||90<e)&&(e<48||e>57));)this._cursor.advance();return 58===this._cursor.peek()?(n=this._cursor.getChars(r),this._cursor.advance(),t=this._cursor.clone()):t=r,this._requireCharCodeUntilFn(rW,""===n?0:1),[n,this._cursor.getChars(t)]}_consumeTagOpen(e){let t,r,n,a=[];try{if(!tR(this._cursor.peek()))throw this._createError(rR(this._cursor.peek()),this._cursor.getSpan(e));for(r=(n=this._consumeTagOpenStart(e)).parts[0],t=n.parts[1],this._attemptCharCodeUntilFn(rO);47!==this._cursor.peek()&&62!==this._cursor.peek()&&60!==this._cursor.peek()&&0!==this._cursor.peek();){let[e,t]=this._consumeAttributeName();if(this._attemptCharCodeUntilFn(rO),this._attemptCharCode(61)){this._attemptCharCodeUntilFn(rO);let r=this._consumeAttributeValue();a.push({prefix:e,name:t,value:r})}else a.push({prefix:e,name:t});this._attemptCharCodeUntilFn(rO)}this._consumeTagOpenEnd()}catch(t){if(t instanceof rU){n?n.type=4:(this._beginToken(5,e),this._endToken(["<"]));return}throw t}if(this._canSelfClose&&2===this.tokens[this.tokens.length-1].type)return;let i=this._getTagContentType(t,r,this._fullNameStack.length>0,a);this._handleFullNameStackForTagOpen(r,t),i===rl.RAW_TEXT?this._consumeRawTextWithTagClose(r,t,!1):i===rl.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(r,t,!0)}_consumeRawTextWithTagClose(e,t,r){this._consumeRawText(r,()=>!!(this._attemptCharCode(60)&&this._attemptCharCode(47)&&(this._attemptCharCodeUntilFn(rO),this._attemptStrCaseInsensitive(e?`${e}:${t}`:t)))&&(this._attemptCharCodeUntilFn(rO),this._attemptCharCode(62))),this._beginToken(3),this._requireCharCodeUntilFn(e=>62===e,3),this._cursor.advance(),this._endToken([e,t]),this._handleFullNameStackForTagClose(e,t)}_consumeTagOpenStart(e){this._beginToken(0,e);let t=this._consumePrefixAndName();return this._endToken(t)}_consumeAttributeName(){let e=this._cursor.peek();if(39===e||34===e)throw this._createError(rR(e),this._cursor.getSpan());this._beginToken(14);let t=this._consumePrefixAndName();return this._endToken(t),t}_consumeAttributeValue(){let e;if(39===this._cursor.peek()||34===this._cursor.peek()){let t=this._cursor.peek();this._consumeQuote(t);let r=()=>this._cursor.peek()===t;e=this._consumeWithInterpolation(16,17,r,r),this._consumeQuote(t)}else{let t=()=>rW(this._cursor.peek());e=this._consumeWithInterpolation(16,17,t,t)}return e}_consumeQuote(e){this._beginToken(15),this._requireCharCode(e),this._endToken([String.fromCodePoint(e)])}_consumeTagOpenEnd(){let e=this._attemptCharCode(47)?2:1;this._beginToken(e),this._requireCharCode(62),this._endToken([])}_consumeTagClose(e){if(this._beginToken(3,e),this._attemptCharCodeUntilFn(rO),this._allowHtmComponentClosingTags&&this._attemptCharCode(47))this._attemptCharCodeUntilFn(rO),this._requireCharCode(62),this._endToken([]);else{let[e,t]=this._consumePrefixAndName();this._attemptCharCodeUntilFn(rO),this._requireCharCode(62),this._endToken([e,t]),this._handleFullNameStackForTagClose(e,t)}}_consumeExpansionFormStart(){this._beginToken(20),this._requireCharCode(123),this._endToken([]),this._expansionCaseStack.push(20),this._beginToken(7);let e=this._readUntil(44),t=this._processCarriageReturns(e);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([t]);else{let r=this._endToken([e]);t!==e&&this.nonNormalizedIcuExpressions.push(r)}this._requireCharCode(44),this._attemptCharCodeUntilFn(rO),this._beginToken(7);let r=this._readUntil(44);this._endToken([r]),this._requireCharCode(44),this._attemptCharCodeUntilFn(rO)}_consumeExpansionCaseStart(){this._beginToken(21);let e=this._readUntil(123).trim();this._endToken([e]),this._attemptCharCodeUntilFn(rO),this._beginToken(22),this._requireCharCode(123),this._endToken([]),this._attemptCharCodeUntilFn(rO),this._expansionCaseStack.push(22)}_consumeExpansionCaseEnd(){this._beginToken(23),this._requireCharCode(125),this._endToken([]),this._attemptCharCodeUntilFn(rO),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(24),this._requireCharCode(125),this._endToken([]),this._expansionCaseStack.pop()}_consumeWithInterpolation(e,t,r,n){this._beginToken(e);let a=[];for(;!r();){let r=this._cursor.clone();this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)?(this._endToken([this._processCarriageReturns(a.join(""))],r),a.length=0,this._consumeInterpolation(t,r,n),this._beginToken(e)):38===this._cursor.peek()?(this._endToken([this._processCarriageReturns(a.join(""))]),a.length=0,this._consumeEntity(e),this._beginToken(e)):a.push(this._readChar())}this._inInterpolation=!1;let i=this._processCarriageReturns(a.join(""));return this._endToken([i]),i}_consumeInterpolation(e,t,r){let n=[];this._beginToken(e,t),n.push(this._interpolationConfig.start);let a=this._cursor.clone(),i=null,s=!1;for(;0!==this._cursor.peek()&&(null===r||!r());){let e=this._cursor.clone();if(this._isTagStart()){this._cursor=e,n.push(this._getProcessedChars(a,e)),this._endToken(n);return}if(null===i){if(this._attemptStr(this._interpolationConfig.end)){n.push(this._getProcessedChars(a,e)),n.push(this._interpolationConfig.end),this._endToken(n);return}this._attemptStr("//")&&(s=!0)}let t=this._cursor.peek();this._cursor.advance(),92===t?this._cursor.advance():t===i?i=null:!s&&null===i&&tV(t)&&(i=t)}n.push(this._getProcessedChars(a,this._cursor)),this._endToken(n)}_getProcessedChars(e,t){return this._processCarriageReturns(t.getChars(e))}_isTextEnd(){return!!(this._isTagStart()||0===this._cursor.peek()||this._tokenizeIcu&&!this._inInterpolation&&(this.isExpansionFormStart()||125===this._cursor.peek()&&this._isInExpansionCase())||this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansion()&&(this._isBlockStart()||125===this._cursor.peek()))}_isTagStart(){if(60===this._cursor.peek()){let e=this._cursor.clone();e.advance();let t=e.peek();if(97<=t&&t<=122||65<=t&&t<=90||47===t||33===t)return!0}return!1}_isBlockStart(){if(this._tokenizeBlocks&&64===this._cursor.peek()){let e=this._cursor.clone();if(e.advance(),rG(e.peek()))return!0}return!1}_readUntil(e){let t=this._cursor.clone();return this._attemptUntilChar(e),this._cursor.getChars(t)}_isInExpansion(){return this._isInExpansionCase()||this._isInExpansionForm()}_isInExpansionCase(){return this._expansionCaseStack.length>0&&22===this._expansionCaseStack[this._expansionCaseStack.length-1]}_isInExpansionForm(){return this._expansionCaseStack.length>0&&20===this._expansionCaseStack[this._expansionCaseStack.length-1]}isExpansionFormStart(){if(123!==this._cursor.peek())return!1;if(this._interpolationConfig){let e=this._cursor.clone(),t=this._attemptStr(this._interpolationConfig.start);return this._cursor=e,!t}return!0}_handleFullNameStackForTagOpen(e,t){let r=t6(e,t);(0===this._fullNameStack.length||this._fullNameStack[this._fullNameStack.length-1]===r)&&this._fullNameStack.push(r)}_handleFullNameStackForTagClose(e,t){let r=t6(e,t);0!==this._fullNameStack.length&&this._fullNameStack[this._fullNameStack.length-1]===r&&this._fullNameStack.pop()}};function rO(e){return!tP(e)||0===e}function rW(e){return tP(e)||62===e||60===e||47===e||39===e||34===e||61===e||0===e}function r$(e){return 59===e||0===e||!(e>=97&&e<=102||e>=65&&e<=70||tH(e))}function rz(e){return 59===e||0===e||!tR(e)}function rj(e){return e>=97&&e<=122?e-97+65:e}function rG(e){return tR(e)||tH(e)||95===e}function rK(e){return 59!==e&&rO(e)}var rX=class e{constructor(t,r){if(t instanceof e){this.file=t.file,this.input=t.input,this.end=t.end;let e=t.state;this.state={peek:e.peek,offset:e.offset,line:e.line,column:e.column}}else{if(!r)throw Error("Programming error: the range argument must be provided with a file argument.");this.file=t,this.input=t.content,this.end=r.endPos,this.state={peek:-1,offset:r.startPos,line:r.startLine,column:r.startCol}}}clone(){return new e(this)}peek(){return this.state.peek}charsLeft(){return this.end-this.state.offset}diff(e){return this.state.offset-e.state.offset}advance(){this.advanceState(this.state)}init(){this.updatePeek(this.state)}getSpan(e,t){let r=e=e||this;if(t)for(;this.diff(e)>0&&-1!==t.indexOf(e.peek());)r===e&&(e=e.clone()),e.advance();let n=this.locationFromCursor(e),a=this.locationFromCursor(this),i=r!==e?this.locationFromCursor(r):n;return new tj(n,a,i)}getChars(e){return this.input.substring(e.state.offset,this.state.offset)}charAt(e){return this.input.charCodeAt(e)}advanceState(e){if(e.offset>=this.end)throw this.state=e,new rJ('Unexpected character "EOF"',this);let t=this.charAt(e.offset);10===t?(e.line++,e.column=0):tF(t)||e.column++,e.offset++,this.updatePeek(e)}updatePeek(e){e.peek=e.offset>=this.end?0:this.charAt(e.offset)}locationFromCursor(e){return new t$(e.file,e.state.offset,e.state.line,e.state.column)}},rY=class e extends rX{constructor(t,r){t instanceof e?(super(t),this.internalState={...t.internalState}):(super(t,r),this.internalState=this.state)}advance(){this.state=this.internalState,super.advance(),this.processEscapeSequence()}init(){super.init(),this.processEscapeSequence()}clone(){return new e(this)}getChars(e){let t=e.clone(),r="";for(;t.internalState.offset<this.internalState.offset;)r+=String.fromCodePoint(t.peek()),t.advance();return r}processEscapeSequence(){let e=()=>this.internalState.peek;if(92===e()){if(this.internalState={...this.state},this.advanceState(this.internalState),110===e())this.state.peek=10;else if(114===e())this.state.peek=13;else if(118===e())this.state.peek=11;else if(116===e())this.state.peek=9;else if(98===e())this.state.peek=8;else if(102===e())this.state.peek=12;else if(117===e()){if(this.advanceState(this.internalState),123===e()){this.advanceState(this.internalState);let t=this.clone(),r=0;for(;125!==e();)this.advanceState(this.internalState),r++;this.state.peek=this.decodeHexDigits(t,r)}else{let e=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(e,4)}}else if(120===e()){this.advanceState(this.internalState);let e=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(e,2)}else if(tU(e())){let t="",r=0,n=this.clone();for(;tU(e())&&r<3;)n=this.clone(),t+=String.fromCodePoint(e()),this.advanceState(this.internalState),r++;this.state.peek=parseInt(t,8),this.internalState=n.internalState}else tF(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}}decodeHexDigits(e,t){let r=parseInt(this.input.slice(e.internalState.offset,e.internalState.offset+t),16);if(isNaN(r))throw e.state=e.internalState,new rJ("Invalid hexadecimal escape sequence",e);return r}},rJ=class{constructor(e,t){this.msg=e,this.cursor=t}},rQ=class e extends tG{static create(t,r,n){return new e(t,r,n)}constructor(e,t,r){super(t,r),this.elementName=e}},rZ=class{constructor(e,t){this.rootNodes=e,this.errors=t}},r0=class{constructor(e){this.getTagDefinition=e}parse(e,t,r,n=!1,a){let i=e=>(t,...r)=>e(t.toLowerCase(),...r),s=n?this.getTagDefinition:i(this.getTagDefinition),o=e=>s(e).getContentType(),l=n?a:i(a),c=function(e,t,r,n={}){let a=new rV(new tz(e,t),r,n);return a.tokenize(),new rP(function(e){let t=[],r;for(let n=0;n<e.length;n++){let a=e[n];r&&5===r.type&&5===a.type||r&&16===r.type&&16===a.type?(r.parts[0]+=a.parts[0],r.sourceSpan.end=a.sourceSpan.end):(r=a,t.push(r))}return t}(a.tokens),a.errors,a.nonNormalizedIcuExpressions)}(e,t,a?(e,t,r,n)=>{let a=l(e,t,r,n);return void 0!==a?a:o(e)}:o,r),u=r&&r.canSelfClose||!1,p=r&&r.allowHtmComponentClosingTags||!1,h=new r1(c.tokens,s,u,p,n);return h.build(),new rZ(h.rootNodes,c.errors.concat(h.errors))}},r1=class e{constructor(e,t,r,n,a){this.tokens=e,this.getTagDefinition=t,this.canSelfClose=r,this.allowHtmComponentClosingTags=n,this.isTagNameCaseSensitive=a,this._index=-1,this._containerStack=[],this.rootNodes=[],this.errors=[],this._advance()}build(){for(;30!==this._peek.type;)0===this._peek.type||4===this._peek.type?this._consumeStartTag(this._advance()):3===this._peek.type?(this._closeVoidElement(),this._consumeEndTag(this._advance())):12===this._peek.type?(this._closeVoidElement(),this._consumeCdata(this._advance())):10===this._peek.type?(this._closeVoidElement(),this._consumeComment(this._advance())):5===this._peek.type||7===this._peek.type||6===this._peek.type?(this._closeVoidElement(),this._consumeText(this._advance())):20===this._peek.type?this._consumeExpansion(this._advance()):25===this._peek.type?(this._closeVoidElement(),this._consumeBlockOpen(this._advance())):27===this._peek.type?(this._closeVoidElement(),this._consumeBlockClose(this._advance())):29===this._peek.type?(this._closeVoidElement(),this._consumeIncompleteBlock(this._advance())):18===this._peek.type?this._consumeDocType(this._advance()):this._advance();for(let e of this._containerStack)e instanceof rL&&this.errors.push(rQ.create(e.name,e.sourceSpan,`Unclosed block "${e.name}"`))}_advance(){let e=this._peek;return this._index<this.tokens.length-1&&this._index++,this._peek=this.tokens[this._index],e}_advanceIf(e){return this._peek.type===e?this._advance():null}_consumeCdata(e){let t=this._advance(),r=this._getText(t),n=this._advanceIf(13);this._addToParent(new r_(r,new tj(e.sourceSpan.start,(n||t).sourceSpan.end),[t]))}_consumeComment(e){let t=this._advanceIf(7),r=this._advanceIf(11),n=null!=t?t.parts[0].trim():null,a=new tj(e.sourceSpan.start,(r||t||e).sourceSpan.end);this._addToParent(new rx(n,a))}_consumeDocType(e){let t=this._advanceIf(7),r=this._advanceIf(19),n=null!=t?t.parts[0].trim():null,a=new tj(e.sourceSpan.start,(r||t||e).sourceSpan.end);this._addToParent(new rE(n,a))}_consumeExpansion(e){let t=this._advance(),r=this._advance(),n=[];for(;21===this._peek.type;){let e=this._parseExpansionCase();if(!e)return;n.push(e)}if(24!==this._peek.type){this.errors.push(rQ.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));return}let a=new tj(e.sourceSpan.start,this._peek.sourceSpan.end,e.sourceSpan.fullStart);this._addToParent(new rw(t.parts[0],r.parts[0],n,a,t.sourceSpan)),this._advance()}_parseExpansionCase(){let t=this._advance();if(22!==this._peek.type)return this.errors.push(rQ.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;let r=this._advance(),n=this._collectExpansionExpTokens(r);if(!n)return null;let a=this._advance();n.push({type:30,parts:[],sourceSpan:a.sourceSpan});let i=new e(n,this.getTagDefinition,this.canSelfClose,this.allowHtmComponentClosingTags,this.isTagNameCaseSensitive);if(i.build(),i.errors.length>0)return this.errors=this.errors.concat(i.errors),null;let s=new tj(t.sourceSpan.start,a.sourceSpan.end,t.sourceSpan.fullStart),o=new tj(r.sourceSpan.start,a.sourceSpan.end,r.sourceSpan.fullStart);return new rk(t.parts[0],i.rootNodes,s,t.sourceSpan,o)}_collectExpansionExpTokens(e){let t=[],r=[22];for(;;){if((20===this._peek.type||22===this._peek.type)&&r.push(this._peek.type),23===this._peek.type){if(!r2(r,22))return this.errors.push(rQ.create(null,e.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(r.pop(),0===r.length)return t}if(24===this._peek.type){if(!r2(r,20))return this.errors.push(rQ.create(null,e.sourceSpan,"Invalid ICU message. Missing '}'.")),null;r.pop()}if(30===this._peek.type)return this.errors.push(rQ.create(null,e.sourceSpan,"Invalid ICU message. Missing '}'.")),null;t.push(this._advance())}}_getText(e){let t=e.parts[0];if(t.length>0&&t[0]==`
// `){let e=this._getClosestParentElement();null!=e&&0==e.children.length&&this.getTagDefinition(e.name).ignoreFirstLf&&(t=t.substring(1))}return t}_consumeText(e){let t=[e],r=e.sourceSpan,n=e.parts[0];if(n.length>0&&n[0]===`
// `){let r=this._getContainer();null!=r&&0===r.children.length&&this.getTagDefinition(r.name).ignoreFirstLf&&(n=n.substring(1),t[0]={type:e.type,sourceSpan:e.sourceSpan,parts:[n]})}for(;8===this._peek.type||5===this._peek.type||9===this._peek.type;)e=this._advance(),t.push(e),8===e.type?n+=e.parts.join("").replace(/&([^;]+);/g,r3):9===e.type?n+=e.parts[0]:n+=e.parts.join("");if(n.length>0){let a=e.sourceSpan;this._addToParent(new rb(n,new tj(r.start,a.end,r.fullStart,r.details),t))}}_closeVoidElement(){let e=this._getContainer();e instanceof rT&&this.getTagDefinition(e.name).isVoid&&this._containerStack.pop()}_consumeStartTag(e){let[t,r]=e.parts,n=[];for(;14===this._peek.type;)n.push(this._consumeAttr(this._advance()));let a=this._getElementFullName(t,r,this._getClosestParentElement()),i=!1;if(2===this._peek.type){this._advance(),i=!0;let t=this.getTagDefinition(a);this.canSelfClose||t.canSelfClose||null!==t4(a)||t.isVoid||this.errors.push(rQ.create(a,e.sourceSpan,`Only void, custom and foreign elements can be self closed "${e.parts[1]}"`))}else 1===this._peek.type&&(this._advance(),i=!1);let s=this._peek.sourceSpan.fullStart,o=new tj(e.sourceSpan.start,s,e.sourceSpan.fullStart),l=new rT(a,n,[],o,new tj(e.sourceSpan.start,s,e.sourceSpan.fullStart),void 0,new tj(e.sourceSpan.start.moveBy(1),e.sourceSpan.end)),c=this._getContainer();this._pushContainer(l,c instanceof rT&&this.getTagDefinition(c.name).isClosedByChild(l.name)),i?this._popContainer(a,rT,o):4===e.type&&(this._popContainer(a,rT,null),this.errors.push(rQ.create(a,o,`Opening tag "${a}" not terminated.`)))}_pushContainer(e,t){t&&this._containerStack.pop(),this._addToParent(e),this._containerStack.push(e)}_consumeEndTag(e){let t=this.allowHtmComponentClosingTags&&0===e.parts.length?null:this._getElementFullName(e.parts[0],e.parts[1],this._getClosestParentElement());if(t&&this.getTagDefinition(t).isVoid)this.errors.push(rQ.create(t,e.sourceSpan,`Void elements do not have end tags "${e.parts[1]}"`));else if(!this._popContainer(t,rT,e.sourceSpan)){let r=`Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;this.errors.push(rQ.create(t,e.sourceSpan,r))}}_popContainer(e,t,r){let n=!1;for(let a=this._containerStack.length-1;a>=0;a--){let i=this._containerStack[a];if(t4(i.name)?i.name===e:(null==e||i.name.toLowerCase()===e.toLowerCase())&&i instanceof t)return i.endSourceSpan=r,i.sourceSpan.end=null!==r?r.end:i.sourceSpan.end,this._containerStack.splice(a,this._containerStack.length-a),!n;(i instanceof rL||i instanceof rT&&!this.getTagDefinition(i.name).closedByParent)&&(n=!0)}return!1}_consumeAttr(e){let t=t6(e.parts[0],e.parts[1]),r=e.sourceSpan.end,n;15===this._peek.type&&(n=this._advance());let a="",i=[],s,o;if(16===this._peek.type)for(s=this._peek.sourceSpan,o=this._peek.sourceSpan.end;16===this._peek.type||17===this._peek.type||9===this._peek.type;){let e=this._advance();i.push(e),17===e.type?a+=e.parts.join("").replace(/&([^;]+);/g,r3):9===e.type?a+=e.parts[0]:a+=e.parts.join(""),o=r=e.sourceSpan.end}15===this._peek.type&&(o=r=this._advance().sourceSpan.end);let l=s&&o&&new tj((null==n?void 0:n.sourceSpan.start)??s.start,o,(null==n?void 0:n.sourceSpan.fullStart)??s.fullStart);return new rC(t,a,new tj(e.sourceSpan.start,r,e.sourceSpan.fullStart),e.sourceSpan,l,i.length>0?i:void 0,void 0)}_consumeBlockOpen(e){let t=[];for(;28===this._peek.type;){let e=this._advance();t.push(new rq(e.parts[0],e.sourceSpan))}26===this._peek.type&&this._advance();let r=this._peek.sourceSpan.fullStart,n=new tj(e.sourceSpan.start,r,e.sourceSpan.fullStart),a=new tj(e.sourceSpan.start,r,e.sourceSpan.fullStart),i=new rL(e.parts[0],t,[],n,a);this._pushContainer(i,!1)}_consumeBlockClose(e){this._popContainer(null,rL,e.sourceSpan)||this.errors.push(rQ.create(null,e.sourceSpan,'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'))}_consumeIncompleteBlock(e){let t=[];for(;28===this._peek.type;){let e=this._advance();t.push(new rq(e.parts[0],e.sourceSpan))}let r=this._peek.sourceSpan.fullStart,n=new tj(e.sourceSpan.start,r,e.sourceSpan.fullStart),a=new tj(e.sourceSpan.start,r,e.sourceSpan.fullStart),i=new rL(e.parts[0],t,[],n,a);this._pushContainer(i,!1),this._popContainer(null,rL,null),this.errors.push(rQ.create(e.parts[0],n,`Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`))}_getContainer(){return this._containerStack.length>0?this._containerStack[this._containerStack.length-1]:null}_getClosestParentElement(){for(let e=this._containerStack.length-1;e>-1;e--)if(this._containerStack[e]instanceof rT)return this._containerStack[e];return null}_addToParent(e){let t=this._getContainer();null===t?this.rootNodes.push(e):t.children.push(e)}_getElementFullName(e,t,r){if(""===e&&""===(e=this.getTagDefinition(t).implicitNamespacePrefix||"")&&null!=r){let t=t1(r.name)[1];this.getTagDefinition(t).preventNamespaceInheritance||(e=t4(r.name))}return t6(e,t)}};function r2(e,t){return e.length>0&&e[e.length-1]===t}function r3(e,t){return void 0!==rD[t]?rD[t]||e:/^#x[a-f0-9]+$/i.test(t)?String.fromCodePoint(parseInt(t.slice(2),16)):/^#\d+$/.test(t)?String.fromCodePoint(parseInt(t.slice(1),10)):e}var r4=class extends r0{constructor(){super(rS)}parse(e,t,r,n=!1,a){return super.parse(e,t,r,n,a)}},r6=null,r5=()=>(r6||(r6=new r4),r6);function r9(e,t={}){let{canSelfClose:r=!1,allowHtmComponentClosingTags:n=!1,isTagNameCaseSensitive:a=!1,getTagContentType:i,tokenizeAngularBlocks:s=!1}=t;return r5().parse(e,"angular-html-parser",{tokenizeExpansionForms:s,interpolationConfig:void 0,canSelfClose:r,allowHtmComponentClosingTags:n,tokenizeBlocks:s},a,i)}var r8=RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)","s"),r7=function(e){let t=e.match(r8);if(!t)return{content:e};let{startDelimiter:r,language:n,value:a="",endDelimiter:i}=t.groups,s=n.trim()||"yaml";if("+++"===r&&(s="toml"),"yaml"!==s&&r!==i)return{content:e};let[o]=t;return{frontMatter:{type:"front-matter",lang:s,value:a,startDelimiter:r,endDelimiter:i,raw:o.replace(/\n$/,"")},content:h(!1,o,/[^\n]/g," ")+e.slice(o.length)}},ne={attrs:!0,children:!0,cases:!0,expression:!0},nt=new Set(["parent"]),nr=class e{constructor(e={}){for(let t of new Set([...nt,...Object.keys(e)]))this.setProperty(t,e[t])}setProperty(e,t){if(this[e]!==t){if(e in ne&&(t=t.map(e=>this.createChild(e))),!nt.has(e)){this[e]=t;return}Object.defineProperty(this,e,{value:t,enumerable:!1,configurable:!0})}}map(t){let r;for(let n in ne){let a=this[n];if(a){let i=function(e,t){let r=e.map(t);return r.some((t,r)=>t!==e[r])?r:e}(a,e=>e.map(t));r!==a&&(r||(r=new e({parent:this.parent})),r.setProperty(n,i))}}if(r)for(let e in this)e in ne||(r[e]=this[e]);return t(r||this)}walk(e){for(let t in ne){let r=this[t];if(r)for(let t=0;t<r.length;t++)r[t].walk(e)}e(this)}createChild(t){let r=t instanceof e?t.clone():new e(t);return r.setProperty("parent",this),r}insertChildBefore(e,t){this.children.splice(this.children.indexOf(e),0,this.createChild(t))}removeChild(e){this.children.splice(this.children.indexOf(e),1)}replaceChild(e,t){this.children[this.children.indexOf(e)]=this.createChild(t)}clone(){return new e(this)}get firstChild(){var e;return null==(e=this.children)?void 0:e[0]}get lastChild(){var e;return null==(e=this.children)?void 0:e[this.children.length-1]}get prev(){var e,t;return null==(t=null==(e=this.parent)?void 0:e.children)?void 0:t[this.parent.children.indexOf(this)-1]}get next(){var e,t;return null==(t=null==(e=this.parent)?void 0:e.children)?void 0:t[this.parent.children.indexOf(this)+1]}get rawName(){return this.hasExplicitNamespace?this.fullName:this.name}get fullName(){return this.namespace?this.namespace+":"+this.name:this.name}get attrMap(){return Object.fromEntries(this.attrs.map(e=>[e.fullName,e.value]))}},nn=[{regex:/^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s,parse:function(e,t,r){let[,n,a,i]=r,s=4+n.length,o=e.sourceSpan.start.moveBy(s),l=o.moveBy(i.length),[c,u]=(()=>{try{return[!0,t(i,o).children]}catch{return[!1,[{type:"text",value:i,sourceSpan:new tj(o,l)}]]}})();return{type:"ieConditionalComment",complete:c,children:u,condition:h(!1,a.trim(),/\s+/g," "),sourceSpan:e.sourceSpan,startSourceSpan:new tj(e.sourceSpan.start,o),endSourceSpan:new tj(l,e.sourceSpan.end)}}},{regex:/^\[if([^\]]*)]><!$/,parse:function(e,t,r){let[,n]=r;return{type:"ieConditionalStartComment",condition:h(!1,n.trim(),/\s+/g," "),sourceSpan:e.sourceSpan}}},{regex:/^<!\s*\[endif]$/,parse:function(e){return{type:"ieConditionalEndComment",sourceSpan:e.sourceSpan}}}],na=new Map([["*",new Set(["accesskey","autocapitalize","autofocus","class","contenteditable","dir","draggable","enterkeyhint","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","popover","slot","spellcheck","style","tabindex","title","translate"])],["a",new Set(["charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","target","type"])],["applet",new Set(["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"])],["area",new Set(["alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","target","type"])],["audio",new Set(["autoplay","controls","crossorigin","loop","muted","preload","src"])],["base",new Set(["href","target"])],["basefont",new Set(["color","face","size"])],["blockquote",new Set(["cite"])],["body",new Set(["alink","background","bgcolor","link","text","vlink"])],["br",new Set(["clear"])],["button",new Set(["disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"])],["canvas",new Set(["height","width"])],["caption",new Set(["align"])],["col",new Set(["align","char","charoff","span","valign","width"])],["colgroup",new Set(["align","char","charoff","span","valign","width"])],["data",new Set(["value"])],["del",new Set(["cite","datetime"])],["details",new Set(["name","open"])],["dialog",new Set(["open"])],["dir",new Set(["compact"])],["div",new Set(["align"])],["dl",new Set(["compact"])],["embed",new Set(["height","src","type","width"])],["fieldset",new Set(["disabled","form","name"])],["font",new Set(["color","face","size"])],["form",new Set(["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"])],["frame",new Set(["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"])],["frameset",new Set(["cols","rows"])],["h1",new Set(["align"])],["h2",new Set(["align"])],["h3",new Set(["align"])],["h4",new Set(["align"])],["h5",new Set(["align"])],["h6",new Set(["align"])],["head",new Set(["profile"])],["hr",new Set(["align","noshade","size","width"])],["html",new Set(["manifest","version"])],["iframe",new Set(["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","loading","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"])],["img",new Set(["align","alt","border","crossorigin","decoding","fetchpriority","height","hspace","ismap","loading","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"])],["input",new Set(["accept","align","alt","autocomplete","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","popovertarget","popovertargetaction","readonly","required","size","src","step","type","usemap","value","width"])],["ins",new Set(["cite","datetime"])],["isindex",new Set(["prompt"])],["label",new Set(["for","form"])],["legend",new Set(["align"])],["li",new Set(["type","value"])],["link",new Set(["as","blocking","charset","color","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","rev","sizes","target","type"])],["map",new Set(["name"])],["menu",new Set(["compact"])],["meta",new Set(["charset","content","http-equiv","media","name","scheme"])],["meter",new Set(["high","low","max","min","optimum","value"])],["object",new Set(["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","type","typemustmatch","usemap","vspace","width"])],["ol",new Set(["compact","reversed","start","type"])],["optgroup",new Set(["disabled","label"])],["option",new Set(["disabled","label","selected","value"])],["output",new Set(["for","form","name"])],["p",new Set(["align"])],["param",new Set(["name","type","value","valuetype"])],["pre",new Set(["width"])],["progress",new Set(["max","value"])],["q",new Set(["cite"])],["script",new Set(["async","blocking","charset","crossorigin","defer","fetchpriority","integrity","language","nomodule","referrerpolicy","src","type"])],["select",new Set(["autocomplete","disabled","form","multiple","name","required","size"])],["slot",new Set(["name"])],["source",new Set(["height","media","sizes","src","srcset","type","width"])],["style",new Set(["blocking","media","type"])],["table",new Set(["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"])],["tbody",new Set(["align","char","charoff","valign"])],["td",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["template",new Set(["shadowrootdelegatesfocus","shadowrootmode"])],["textarea",new Set(["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"])],["tfoot",new Set(["align","char","charoff","valign"])],["th",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["thead",new Set(["align","char","charoff","valign"])],["time",new Set(["datetime"])],["tr",new Set(["align","bgcolor","char","charoff","valign"])],["track",new Set(["default","kind","label","src","srclang"])],["ul",new Set(["compact","type"])],["video",new Set(["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"])]]),ni=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]);function ns(e){var t;let{msg:r,span:{start:n,end:a}}=e;throw Object.assign(SyntaxError(r+" ("+(t={loc:{start:{line:n.line+1,column:n.col+1},end:{line:a.line+1,column:a.col+1}},cause:e}).loc.start.line+":"+t.loc.start.column+")"),t)}function no(e){return{parse:(t,r)=>(function e(t,r,n={},a=!0){let{frontMatter:i,content:s}=a?r7(t):{frontMatter:null,content:t},o=new tz(t,n.filepath),l=new t$(o,0,0,0),c=l.moveBy(t.length),u={type:"root",sourceSpan:new tj(l,c),children:function e(t,r,n){let{name:a,canSelfClose:i=!0,normalizeTagName:s=!1,normalizeAttributeName:o=!1,allowHtmComponentClosingTags:l=!1,isTagNameCaseSensitive:c=!1,shouldParseAsRawText:u}=r,{rootNodes:p,errors:h}=r9(t,{canSelfClose:i,allowHtmComponentClosingTags:l,isTagNameCaseSensitive:c,getTagContentType:u?(...e)=>u(...e)?rl.RAW_TEXT:void 0:void 0,tokenizeAngularBlocks:"angular"===a||void 0});if("vue"===a){if(p.some(e=>"docType"===e.type&&"html"===e.value||"element"===e.type&&"html"===e.name.toLowerCase()))return e(t,nl,n);let r,a=()=>r??(r=r9(t,{canSelfClose:i,allowHtmComponentClosingTags:l,isTagNameCaseSensitive:c})),s=e=>a().rootNodes.find(({startSourceSpan:t})=>t&&t.start.offset===e.startSourceSpan.start.offset)??e;for(let[e,t]of p.entries()){let{endSourceSpan:r,startSourceSpan:i}=t;if(null===r)h=a().errors,p[e]=s(t);else if(function(e,t){var r;if("element"!==e.type||"template"!==e.name)return!1;let n=null==(r=e.attrs.find(e=>"lang"===e.name))?void 0:r.value;return!n||"html"===ec(t,{language:n})}(t,n)){let n=a().errors.find(e=>e.span.start.offset>i.start.offset&&e.span.start.offset<r.end.offset);n&&ns(n),p[e]=s(t)}}}h.length>0&&ns(h[0]);let d=e=>{let t=e.name.startsWith(":")?e.name.slice(1).split(":")[0]:null,r=e.nameSpan.toString(),n=null!==t&&r.startsWith(`${t}:`),a=n?r.slice(t.length+1):r;e.name=a,e.namespace=t,e.hasExplicitNamespace=n},m=e=>{switch(e.type){case"element":for(let t of(d(e),e.attrs))d(t),t.valueSpan?(t.value=t.valueSpan.toString(),/["']/.test(t.value[0])&&(t.value=t.value.slice(1,-1))):t.value=null;break;case"comment":e.value=e.sourceSpan.toString().slice(4,-3);break;case"text":e.value=e.sourceSpan.toString()}},g=(e,t)=>{let r=e.toLowerCase();return t(r)?r:e},f=e=>{if("element"===e.type&&(s&&(!e.namespace||e.namespace===e.tagDefinition.implicitNamespacePrefix||eh(e))&&(e.name=g(e.name,e=>ni.has(e))),o))for(let t of e.attrs)t.namespace||(t.name=g(t.name,t=>na.has(e.name)&&(na.get("*").has(t)||na.get(e.name).has(t))))},v=e=>{e.sourceSpan&&e.endSourceSpan&&(e.sourceSpan=new tj(e.sourceSpan.start,e.endSourceSpan.end))},S=e=>{if("element"===e.type){let t=rS(c?e.name:e.name.toLowerCase());!e.namespace||e.namespace===t.implicitNamespacePrefix||eh(e)?e.tagDefinition=t:e.tagDefinition=rS("")}};return rA(new class extends rN{visitExpansionCase(e,t){"angular"===a&&this.visitChildren(t,t=>{t(e.expression)})}visit(e){m(e),S(e),f(e),v(e)}},p),p}(s,r,n)};if(i){let e=new t$(o,0,0,0),t=e.moveBy(i.raw.length);i.sourceSpan=new tj(e,t),u.children.unshift(i)}let p=new nr(u),d=(a,i)=>{let{offset:s}=i,o=e(h(!1,t.slice(0,s),/[^\n\r]/g," ")+a,r,n,!1);o.sourceSpan=new tj(i,$(!1,o.children,-1).sourceSpan.end);let l=o.children[0];return l.length===s?o.children.shift():(l.sourceSpan=new tj(l.sourceSpan.start.moveBy(s),l.sourceSpan.end),l.value=l.value.slice(s)),o};return p.walk(e=>{if("comment"===e.type){let t=function(e,t){if(e.value)for(let{regex:r,parse:n}of nn){let a=e.value.match(r);if(a)return n(e,t,a)}return null}(e,d);t&&e.parent.replaceChild(e,t)}(function(e){if("block"===e.type){if(e.name=h(!1,e.name.toLowerCase(),/\s+/g," ").trim(),e.type="angularControlFlowBlock",!ts(e.parameters)){delete e.parameters;return}for(let t of e.parameters)t.type="angularControlFlowBlockParameter";e.parameters={type:"angularControlFlowBlockParameters",children:e.parameters,sourceSpan:new tj(e.parameters[0].sourceSpan.start,$(!1,e.parameters,-1).sourceSpan.end)}}})(e),("plural"===e.type||"select"===e.type)&&(e.clause=e.type,e.type="angularIcuExpression"),"expansionCase"===e.type&&(e.type="angularIcuCase")}),p})(t,e,r),hasPragma:tA,astFormat:"html",locStart:to,locEnd:tl}}var nl={name:"html",normalizeTagName:!0,normalizeAttributeName:!0,allowHtmComponentClosingTags:!0},nc=no(nl),nu=no({name:"angular"}),np=no({name:"vue",isTagNameCaseSensitive:!0,shouldParseAsRawText:(e,t,r,n)=>"html"!==e.toLowerCase()&&!r&&("template"!==e||n.some(({name:e,value:t})=>"lang"===e&&"html"!==t&&""!==t&&void 0!==t))}),nh=no({name:"lwc",canSelfClose:!1}),nd={html:{preprocess:function(e,t){for(let r of tK)r(e,t);return e},print:function(e,t,r){let{node:n}=e;switch(n.type){case"front-matter":return j(n.raw);case"root":return t.__onHtmlRoot&&t.__onHtmlRoot(n),[M(tB(e,t,r)),V];case"element":case"ieConditionalComment":return function(e,t,r){var n,a;let i;let{node:s}=e;if(ef(s,t))return[tw(s,t),M(tb(e,t,r)),j(tT(s,t)),...tc(s,t),tp(s,t)];let o=1===s.children.length&&("interpolation"===s.firstChild.type||"angularIcuExpression"===s.firstChild.type)&&s.firstChild.isLeadingSpaceSensitive&&!s.firstChild.hasLeadingSpaces&&s.lastChild.isTrailingSpaceSensitive&&!s.lastChild.hasTrailingSpaces,l=Symbol("element-attr-group-id");return i=0===s.children.length?s.hasDanglingSpaces&&s.isDanglingSpaceSensitive?F:"":[ew(s)||"element"===s.type&&s.children.length>0&&(["body","script","style"].includes(s.name)||s.children.some(e=>{var t;return null==(t=e.children)?void 0:t.some(e=>"text"!==e.type)}))||s.firstChild&&s.firstChild===s.lastChild&&"text"!==s.firstChild.type&&eC(s.firstChild)&&(!s.lastChild.isTrailingSpaceSensitive||eT(s.lastChild))?R:"",(n=[o?H(U,"",{groupId:l}):s.firstChild.hasLeadingSpaces&&s.firstChild.isLeadingSpaceSensitive?F:"text"===s.firstChild.type&&s.isWhitespaceSensitive&&s.isIndentationSensitive?B(Number.NEGATIVE_INFINITY,U):U,tB(e,t,r)],o?(a={groupId:l},D(n),{type:w,contents:n,groupId:a.groupId,negate:a.negate}):(ey(s)||eH(s,t))&&"root"===s.parent.type&&"vue"===t.parser&&!t.vueIndentScriptAndStyle?n:I(n)),(s.next?tg(s.next):tf(s.parent))?s.lastChild.hasTrailingSpaces&&s.lastChild.isTrailingSpaceSensitive?" ":"":o?H(U,"",{groupId:l}):s.lastChild.hasTrailingSpaces&&s.lastChild.isTrailingSpaceSensitive?F:("comment"===s.lastChild.type||"text"===s.lastChild.type&&s.isWhitespaceSensitive&&s.isIndentationSensitive)&&RegExp(`\\n[\\t ]{${t.tabWidth*(e.ancestors.length-1)}}$`).test(s.lastChild.value)?"":U],M([M(tb(e,t,r),{id:l}),i,tc(s,t)])}(e,t,r);case"angularControlFlowBlock":return function(e,t,r){let{node:n}=e,a=[];(function(e){let{previous:t}=e;return(null==t?void 0:t.type)==="angularControlFlowBlock"&&!ev(t)&&!tM(t)})(e)&&a.push("} "),a.push("@",n.name),n.parameters&&a.push(" (",M(r("parameters")),")"),a.push(" {");let i=tM(n);return n.children.length>0?(n.firstChild.hasLeadingSpaces=!0,n.lastChild.hasTrailingSpaces=!0,a.push(I([V,tB(e,t,r)])),i&&a.push(V,"}")):i&&a.push("}"),M(a,{shouldBreak:!0})}(e,t,r);case"angularControlFlowBlockParameters":return[I([U,W([";",F],e.map(r,"children"))]),U];case"angularControlFlowBlockParameter":return Y.trim(n.expression);case"angularIcuExpression":return function(e,t,r){let{node:n}=e;return[t_(n,t),M([n.switchValue.trim(),", ",n.clause,n.cases.length>0?[",",I([F,W(F,e.map(r,"cases"))])]:"",U]),tu(n,t)]}(e,t,r);case"angularIcuCase":return function(e,t,r){let{node:n}=e;return[n.value," {",M([I([U,e.map(({node:e})=>"text"!==e.type||Y.trim(e.value)?r():"","expression")]),U]),"}"]}(e,0,r);case"ieConditionalStartComment":case"ieConditionalEndComment":return[t_(n),tu(n)];case"interpolation":return[t_(n,t),...e.map(r,"children"),tu(n,t)];case"text":{if("interpolation"===n.parent.type){let e=/\n[^\S\n]*$/,t=e.test(n.value);return[j(t?n.value.replace(e,""):n.value),t?V:""]}let e=z([tw(n,t),...eU(n),tp(n,t)],e=>(function(e){switch(q(e)){case b:if(e.parts.every(e=>""===e))return"";break;case y:if(!e.contents&&!e.id&&!e.break&&!e.expandedStates)return"";if(e.contents.type===y&&e.contents.id===e.id&&e.contents.break===e.break&&e.contents.expandedStates===e.expandedStates)return e.contents;break;case v:case f:case w:case k:if(!e.contents)return"";break;case _:if(!e.flatContents&&!e.breakContents)return"";break;case m:{let t=[];for(let r of e){if(!r)continue;let[e,...n]=Array.isArray(r)?r:[r];"string"==typeof e&&"string"==typeof $(!1,t,-1)?t[t.length-1]+=e:t.push(e),t.push(...n)}return 0===t.length?"":1===t.length?t[0]:t}case d:case g:case S:case C:case T:case x:case E:break;default:throw new N(e)}return e})(e));return Array.isArray(e)?P(e):e}case"docType":return[M([t_(n,t)," ",h(!1,n.value.replace(/^html\b/i,"html"),/\s+/g," ")]),tu(n,t)];case"comment":return[tw(n,t),j(t.originalText.slice(to(n),tl(n))),tp(n,t)];case"attribute":{if(null===n.value)return n.rawName;let e=eB(n.value),t=K(e,'"');return[n.rawName,"=",t,j('"'===t?h(!1,e,'"',"&quot;"):h(!1,e,"'","&apos;")),t]}default:throw new J(n,"HTML")}},insertPragma:function(e){return`<!-- @format -->

// `+e},massageAstNode:et,embed:function(e,t){let{node:r}=e;switch(r.type){case"element":if(ey(r)||"interpolation"===r.type)return;if(!r.isSelfClosing&&eF(r,t)){let n=eq(r,t);return n?async(a,i)=>{let s=tT(r,t),o=/^\s*$/.test(s),l="";return o||(o=""===(l=await a(em(s),{parser:n,__embeddedInHtml:!0}))),[tw(r,t),M(tb(e,t,i)),o?"":V,l,o?"":V,tc(r,t),tp(r,t)]}:void 0}break;case"text":if(ey(r.parent)){let e=eq(r.parent,t);if(e)return async n=>{let a="markdown"===e?eI(r.value.replace(/^[^\S\n]*\n/,"")):r.value,i={parser:e,__embeddedInHtml:!0};if("html"===t.parser&&"babel"===e){let e="script",{attrMap:t}=r.parent;t&&("module"===t.type||"text/babel"===t.type&&"module"===t["data-type"])&&(e="module"),i.__babelSourceType=e}return[R,tw(r,t),await n(a,i),tp(r,t)]}}else if("interpolation"===r.parent.type)return async n=>{let a={__isInHtmlInterpolation:!0,__embeddedInHtml:!0};return"angular"===t.parser?(a.parser="__ng_interpolation",a.trailingComma="none"):"vue"===t.parser?a.parser=e7(e,t)?"__vue_ts_expression":"__vue_expression":a.parser="__js_expression",[I([F,await n(r.value,a)]),r.parent.next&&tg(r.parent.next)?" ":F]};break;case"attribute":return ta(e,t);case"front-matter":return e=>er(r,e);case"angularControlFlowBlockParameters":return tx.has(e.parent.name)?es:void 0}},getVisitorKeys:tq}},nm=p}}]);