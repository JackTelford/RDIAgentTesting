"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5642, 3333, 7881, 8673, 3751],
  {
    85642: function (e, t, a) {
      let r;
      a.r(t),
        a.d(t, {
          default: function () {
            return eu;
          },
        });
      var i = a(85893),
        n = a(10508),
        o = a(18680);
      let s = n.ZP.div(
        [
          "height:100%;width:100%;.terminal{backdrop-filter:blur(8px);height:100% !important;}.xterm-viewport{",
          ";width:100% !important;}.xterm-cursor-underline{border-bottom-color:#f3f3f3 !important;border-bottom-width:4px !important;font-size:15px !important;}.xterm-cursor-blink{animation-duration:1.067s !important;}",
        ],
        (0, o.Z)()
      );
      var l = a(1864),
        c = a(67294),
        d = a(37176);
      let u = {
        allowTransparency: !0,
        cols: 70,
        cursorBlink: !0,
        cursorInactiveStyle: "none",
        cursorStyle: "underline",
        cursorWidth: 8,
        fontFamily: "Consolas, Lucida Console, Courier New, monospace",
        fontSize: 14,
        fontWeight: "100",
        rows: 20,
        theme: { background: d.Z.Terminal.backgroundColor, foreground: "rgb(204, 204, 204)" },
      },
        m = ["lolcat"],
        w = ["--help", "-h", "--version", "-V"],
        b = [
          "     ':lodxkkkOOOOOOOOOOOOkkkkkl",
          "  .ckKNWMMMMMMMMMMMMMMMMMMMMMMMO",
          " .kWNK0OOKWMX0OOOOO0NMMMN000000d",
          ".dKo,.   cNWo      .xMMWo       ",
          ":x'      cWN:      .kMMWc       ",
          "..       dMK,      '0MMX;       ",
          "        .OMO.      ;XMM0,       ",
          "        cNMx.      cNMMk.       ",
          "       .OMMd       oMMMx.       ",
          "      .xWMWc      .xMMMd        ",
          "     .xWMMX;      .kMMMd        ",
          "    'OWMMMO.      '0MMMO.     :o",
          "   cKMMMMWo       '0MMMWk;..'l0c",
          "  ;XMMMMM0,        oWMMMMWXXNNd.",
          "  .kWMMW0;         .l0WMMMMNO:  ",
          "   .lkkl.            .cxkkd:.   ",
        ],
        f = ["https://cloudflare-dns.com/dns-query", "1.1.1.1"],
        h = ["https://dns.google/resolve", "8.8.8.8"];
      var p = a(2347);
      let g = (e, t) => {
        let a = e.newFunction("log", (...a) => a.map(e.dump).forEach(t)),
          r = e.newObject();
        e.setProp(r, "error", a), e.setProp(r, "log", a), e.setProp(r, "warn", a), e.setProp(e.global, "console", r), r.dispose(), a.dispose();
      },
        k = (e) => {
          e.setProp(e.global, "window", e.global);
        },
        y = async (e, t) => {
          let { getQuickJS: r } = await a.e(2177, "high").then(a.bind(a, 62177)),
            i = (await r()).newContext(),
            n = (e) => {
              "string" == typeof e || "number" == typeof e ? t(e.toString()) : "object" == typeof e && t(JSON.stringify(e));
            };
          if (!e) return;
          g(i, n), k(i);
          let o = i.evalCode(e);
          if (o.error) {
            let { message: e, name: t, stack: a } = i.dump(o.error);
            n(`${t}: ${e}
${a}`),
              o.error.dispose();
          } else n(i.dump(o.value)), o.value.dispose();
        };
      var A = a(71558),
        $ = a(6484),
        v = a(48764).Buffer;
      let M = [0, 97, 115, 109],
        x = [4, 37, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 97, 116, 111, 109],
        S = "https://registry.wapm.io/graphql",
        j = (e) => `{
  getPackage(name: "${e}") {
    versions {
      distribution {
        piritaDownloadUrl
      }
    }
  }
}`,
        F = (e) => ({
          operationName: "shellGetCommandQuery",
          query: `
    query shellGetCommandQuery($command: String!) {
      command: getCommand(name: $command) {
        module {
          publicUrl
        }
      }
    }
  `,
          variables: { command: e },
        }),
        O = (e, t, a = !1) => {
          let r = [...e],
            i = [...t],
            n = r.map((e, t) => r.slice(t, t + i.length)),
            o = (e) => e.every((e, t) => e === i[t]),
            s = a ? n.findLastIndex((e) => o(e)) : n.findIndex((e) => o(e));
          return -1 === s ? (a ? e.length : 0) : s;
        },
        P = async ({ args: [e] }) => {
          let t = "";
          try {
            let a = await (await fetch(S, { body: JSON.stringify({ query: j(e) }), headers: { "content-type": "application/json" }, method: "POST" })).json();
            if (!(t = a?.data?.getPackage?.versions[0]?.distribution?.piritaDownloadUrl)) {
              let a = await (await fetch(S, { body: JSON.stringify(F(e)), headers: { "content-type": "application/json" }, method: "POST" })).json();
              t = a?.data?.command?.module?.publicUrl;
            }
          } catch { }
          let a = new Uint8Array();
          if (!t) return a;
          try {
            a = new Uint8Array(await (await fetch(t)).arrayBuffer());
          } catch { }
          return 0 === a.length ? new Uint8Array() : a.subarray(O(a, new Uint8Array(M)), O(a, new Uint8Array(x), !0));
        },
        N = async (e, t, i, n, o) => {
          let s = "run" === e[0] ? e.slice(1) : e,
            { lowerI64Imports: c } = await a.e(4512, "high").then(a.bind(a, 24359)),
            { default: d } = await a.e(7545, "high").then(a.t.bind(a, 67545, 23));
          try {
            let e = n || (await P({ args: s }));
            if (0 === e.length || (e.length < 1024 && new TextDecoder().decode(e).includes("NoSuchKey"))) throw Error(`command not found ${s[0]}`);
            let i = await c(e);
            if (void 0 !== i && i instanceof Uint8Array) {
              r ||= (await a.e(8778, "high").then(a.t.bind(a, 88778, 23))).default;
              let c = await WebAssembly.compile(i),
                b = (m.includes(s[0]) || (".wasm" === (0, $.RT)(s[0]) && m.includes((0, l.basename)(s[0], (0, l.extname)(s[0]))))) && (void 0 !== s[2] || !w.includes(s[1])),
                f = !1,
                h = !1,
                g = b ? (o ? (0, p.$4)(o).slice(1) : []) : s,
                k = new d({
                  args: g,
                  bindings: r,
                  env: { COLUMNS: u.cols?.toString(), LINES: u.rows?.toString() },
                  ...(b
                    ? {
                      getStdin() {
                        h && (this.getStdin = null);
                        let e = v.from(s.slice(g.length).join(" "), "utf8");
                        return Object.assign(e, { copy: () => (f ? 0 : ((f = !0), e.length)) });
                      },
                    }
                    : {}),
                  sendStderr: (e) => t(e.toString()),
                  sendStdout: (e) => {
                    b && (h = !0), t(e.toString());
                  },
                }),
                y = await WebAssembly.instantiate(c, k.getImports(c));
              try {
                k.start(y);
              } catch { }
              if (!n) return [s[0].split("/").slice(-1)[0], e];
            }
          } catch (a) {
            let { code: e, message: t } = a;
            0 === e || /^WASI Exit error: \d$/.test(t) || i(t);
          }
          return [];
        };
      var E = a(42576);
      let C = { fullStdLib: !1, indexURL: "/Program Files/Pyodide/" },
        R = async (e, t) => {
          if ((await (0, $.mb)(["/Program Files/Pyodide/pyodide.js"]), !window.pyodide && window.loadPyodide && (window.pyodide = await window.loadPyodide(C)), window.pyodide))
            try {
              let a = await window.pyodide.runPythonAsync("ver" === e || "version" === e ? "import sys\r\nsys.version\r\n" : "import sys\r\nimport io\r\nsys.stdout = io.StringIO()\r\n" + e);
              a || (a = await window.pyodide.runPythonAsync("sys.stdout.getvalue()")), a && t(a.toString());
            } catch (a) {
              let { message: e } = a;
              e && t(e);
            }
        };
      var T = a(40591),
        L = a(43950),
        U = a(6155),
        W = a(20063),
        z = a(18575),
        D = a(58437),
        B = a(76488),
        I = a(86178),
        K = a(97836),
        Z = a(67881),
        _ = a(68673),
        Q = a(31746),
        G = a(82883),
        X = a(73751),
        J = a(50569),
        H = a(48764).Buffer;
      let V = "The system cannot find the file specified.",
        q = "The system cannot find the path specified.",
        Y = "The syntax of the command is incorrect.",
        { alias: ee } = K.PACKAGE_DATA;
      var et = (e, t, r, i) => {
        let { createPath: o, deletePath: s, exists: m, fs: w, lstat: g, mapFs: k, mkdirRecursive: v, readdir: M, readFile: x, rename: S, rootFs: j, stat: F, updateFolder: O, writeFile: P } = (0, W.o)(),
          { closeWithTransition: C, open: et, title: ea } = (0, D.z)(),
          { updateRecentFiles: er } = (0, B.k)(),
          ei = (0, I.R)(),
          { name: en } = (0, n.Fg)(),
          eo = (0, c.useCallback)(
            async (e, a) => {
              if (!e) return "";
              if (e.startsWith("ipfs://")) {
                let t = await (0, Q.getIpfsResource)(e),
                  r = (0, l.join)(K.Ll, await o(await (0, Q.getIpfsFileName)(e, t), a || K.Ll, t));
                return O(a || K.Ll, (0, l.basename)(r)), r;
              }
              return (0, l.isAbsolute)(e) ? e : (0, l.join)(t.current, e);
            },
            [t, o, O]
          ),
          ec = (0, c.useRef)([]),
          ed = (0, c.useCallback)(
            (e, t = !1) => {
              let a = (0, l.dirname)(e);
              t ? O(a, void 0, (0, l.basename)(e)) : O(a, (0, l.basename)(e));
            },
            [O]
          ),
          eu = (0, c.useCallback)(async (e) => (await M(K.xL)).find((t) => [".exe", ".wasm"].includes((0, $.RT)(t)) && (0, l.basename)(t, (0, l.extname)(t)).toLowerCase() === e.toLowerCase()), [M]),
          em = (0, c.useCallback)(
            async (n = "", c = i?.println.bind(i) || console.info, W = i?.print.bind(i) || console.info, D = "") => {
              let B = n.split("|");
              if (!D && B.length > 1) {
                let e = [],
                  t = (t) => {
                    e.push(t);
                  };
                return B.reduce(async (a, r, i) => {
                  await a;
                  let n = e.join("").replace(/\n$/, ""),
                    o = i === B.length - 1,
                    s = r.trim();
                  return (
                    (e.length = 0),
                    em(
                      `${s}${n ? ` ${n}` : ""}`,
                      o
                        ? void 0
                        : (e) =>
                          t(`${e}
`),
                      o ? void 0 : t,
                      s
                    )
                  );
                }, Promise.resolve(""));
              }
              let [I = "", ...Q] = (0, p.$4)(n, D),
                ew = I.toLowerCase();
              switch (ew) {
                case "cat":
                case "type": {
                  let [e] = Q;
                  if (e) {
                    let t = await eo(e);
                    (await m(t)) ? ((await g(t)).isDirectory() ? c("Access is denied.") : c((await x(t)).toString())) : c(q);
                  } else c(Y);
                  break;
                }
                case "cd":
                case "cd/":
                case "cd.":
                case "cd..":
                case "chdir":
                case "pwd": {
                  let [e] = ew.startsWith("cd") && ew.length > 2 ? [ew.slice(2)] : Q;
                  if (e && "pwd" !== ew) {
                    let a = await eo(e),
                      r = async (e) => {
                        (await g(e)).isDirectory() ? t.current !== e && (t.current = e) : c("The directory name is invalid.");
                      };
                    if (await m(a)) await r(a);
                    else {
                      let e = (await M(t.current)).find((e) => e.toLowerCase() === (0, l.basename)(a).toLowerCase());
                      e ? await r((0, l.join)(t.current, e)) : c(q);
                    }
                  } else c(t.current);
                  break;
                }
                case "color": {
                  let [e, t, a] = Q;
                  if (void 0 !== e && void 0 !== t && void 0 !== a) W((0, A.P)(Number(e), Number(t), Number(a)));
                  else {
                    let [[e, t] = []] = Q,
                      { rgb: a, name: r } = A.w[e?.toUpperCase()] || {},
                      { rgb: i, name: n } = A.w[t?.toUpperCase()] || {};
                    if (a) {
                      let e = !!i,
                        t = (0, A.P)(...a, e);
                      W(t), c(`${e ? "Background" : "Foreground"}: ${r}`), (ec.current[0] = t);
                    }
                    if (i) {
                      let e = (0, A.P)(...i);
                      W(e), c(`Foreground: ${n}`), (ec.current[1] = e);
                    }
                    i || a || (W("\x1b[0m"), (ec.current = []));
                  }
                  break;
                }
                case "copy":
                case "cp": {
                  let [e, t] = Q,
                    a = await eo(e);
                  if (await m(a)) {
                    if (t) {
                      let e = await eo(t),
                        r = (0, l.dirname)(e);
                      ed((0, l.join)(r, await o((0, l.basename)(e), r, await x(a)))), c("	1 file(s) copied.");
                    } else c("The file cannot be copied onto itself."), c("	0 file(s) copied.");
                  } else c(V);
                  break;
                }
                case "clear":
                case "cls":
                  r?.reset(), r?.write(`\u001Bc${ec.current.join("")}`);
                  break;
                case "date":
                  c(`The current date is: ${(0, $.BU)().slice(0, 10)}`);
                  break;
                case "del":
                case "erase":
                case "rd":
                case "rm":
                case "rmdir": {
                  let [e] = Q;
                  if (e) {
                    let t = await eo(e);
                    (await m(t)) && (await s(t)) && ed(t, !0);
                  }
                  break;
                }
                case "dir":
                case "ls": {
                  let [e = ""] = Q,
                    a = async (t) => {
                      let a = 0,
                        n = 0,
                        o = 0,
                        s = await M(t);
                      0 === s.length && j?.mntMap[t]?.getName() === "FileSystemAccess" && (await (0, z.requestPermission)(t), (s = await M(t)));
                      let d = new Intl.DateTimeFormat(K.ZW, { timeStyle: "short" }),
                        u = await Promise.all(
                          s
                            .filter((t) => (!e.startsWith("*") || t.endsWith(e.slice(1))) && (!e.endsWith("*") || t.startsWith(e.slice(0, -1))))
                            .map(async (e) => {
                              let r = (0, l.join)(t, e),
                                i = await F(r),
                                s = new Date((0, U.GA)(r, i)),
                                c = s.toISOString().slice(0, 10),
                                u = d.format(s).padStart(8, "0"),
                                m = i.isDirectory();
                              return (a += m ? 0 : i.size), m ? (o += 1) : (n += 1), [`${c}  ${u}`, m ? "<DIR>        " : i.size.toLocaleString(), e];
                            })
                        );
                      c(` Directory of ${t}`), c("");
                      let m = !i?._termSize?.cols || i?._termSize?.cols > 52;
                      (0, p.j5)(
                        [
                          ["Date", m ? 22 : 20],
                          ["Type/Size", m ? 15 : 13, !0, (e) => ("-1" === e ? "" : e)],
                          ["Name", r?.cols ? r.cols - 40 : 30],
                        ],
                        u,
                        c,
                        !0
                      ),
                        c(`		${n} File(s)	${a.toLocaleString()} bytes`),
                        c(`		${o} Dir(s)${await (0, p.lO)()}`);
                    };
                  if (!e || e.startsWith("*") || e.endsWith("*")) await a(t.current);
                  else {
                    let t = await eo(e);
                    (await m(t)) ? ((await g(t)).isDirectory() ? await a(t) : c((0, l.basename)(t))) : c("File Not Found");
                  }
                  break;
                }
                case "echo":
                  c(n.slice(n.indexOf(" ") + 1));
                  break;
                case "exit":
                case "quit":
                  C(e);
                  break;
                case "file": {
                  let [e] = Q;
                  if (e) {
                    let t = await eo(e);
                    if (await m(t)) {
                      let { fileTypeFromBuffer: r } = await Promise.all([a.e(8090, "high"), a.e(3545, "high"), a.e(9320, "high")]).then(a.bind(a, 53545)),
                        { mime: i = "Unknown" } = (await r(await x(t))) || {};
                      c(`${e}: ${i}`);
                    }
                  }
                  break;
                }
                case "find":
                case "search": {
                  if (0 === Q.length) {
                    c("FIND: Parameter format not correct");
                    break;
                  }
                  let e = await (0, G.Kk)(Q.join(" "), x, j);
                  e?.forEach(({ ref: e }) => c(e));
                  break;
                }
                case "ffmpeg":
                case "imagemagick": {
                  let [e, t] = Q;
                  if (e && t) {
                    let a = await eo(e);
                    if ((await m(a)) && !(await g(a)).isDirectory()) {
                      let e = "ffmpeg" === ew ? Z.transcode : _.convert,
                        [[r, i]] = await e([[(0, l.basename)(a), await x(a)]], t, c);
                      if (r && i) {
                        let e = (0, l.dirname)(a);
                        ed((0, l.join)(e, await o(r, e, i)));
                      }
                    } else c(V);
                  } else c(Y);
                  break;
                }
                case "git":
                case "isogit":
                  w && (await (0, E.Z)(Q, t.current, c, w, O));
                  break;
                case "help": {
                  let [e] = Q,
                    t = "-a" === e;
                  if (e && !t) {
                    let t = p.CN[e] ? e : Object.entries(p.j3).find(([, [t]]) => t === e)?.[0];
                    t && p.CN[t] ? c(p.CN[t]) : c("This command is not supported by the help utility.");
                  } else (0, p.R_)(c, p.CN, t ? p.j3 : void 0);
                  break;
                }
                case "history":
                  i?.history.entries.forEach((e, t) => c(`${(t + 1).toString().padStart(4)} ${e}`));
                  break;
                case "ipfs": {
                  let [e, a] = Q;
                  "get" === e && a && (await eo(`ipfs://${a}`, t.current));
                  break;
                }
                case "ifconfig":
                case "ipconfig":
                case "whatsmyip": {
                  let { ip: e = "" } = Object.fromEntries(
                    ((await (await fetch("https://cloudflare.com/cdn-cgi/trace")).text()) || "")
                      .trim()
                      .split("\n")
                      .map((e) => e.split("=")) || []
                  );
                  c("IP Configuration"),
                    c(""),
                    c(
                      `   IPv4 Address. . . . . . . . . . . : ${((e) => {
                        let t = e.split(".");
                        return 4 === t.length && t.map(Number).every((e) => e > 0 && e < 256);
                      })(e)
                        ? e
                        : "Unknown"
                      }`
                    );
                  break;
                }
                case "kill":
                case "taskkill": {
                  let [e] = Q,
                    t = Number.isNaN(e) || ei.current[e] ? e : Object.keys(ei.current)[Number(e)];
                  ei.current[t] ? (C(t), c(`SUCCESS: Sent termination signal to the process "${t}".`)) : c(`ERROR: The process "${t}" not found.`);
                  break;
                }
                case "license":
                  c(es);
                  break;
                case "md":
                case "mkdir": {
                  let [e] = Q;
                  if (e) {
                    let t = await eo(e);
                    await v(t), ed(t);
                  }
                  break;
                }
                case "mediainfo":
                  {
                    let [e] = Q;
                    if (e) {
                      let t = await eo(e);
                      if (await m(t))
                        try {
                          c(await (0, J.u)(await x(t)));
                        } catch {
                          c("Failed to parse media file");
                        }
                    }
                  }
                  break;
                case "mount":
                  if ((0, $.df)())
                    try {
                      let e = await k(t.current);
                      if (e) {
                        let a = (0, l.join)(t.current, e);
                        O(t.current, e), (t.current = a);
                      }
                    } catch { }
                  else c("The system does not support the command.");
                  break;
                case "move":
                case "mv":
                case "ren":
                case "rename": {
                  let [e, t] = Q,
                    a = await eo(e);
                  if (await m(a)) {
                    if (t) {
                      let e = await eo(t);
                      ["move", "mv"].includes(ew) && (await m(e)) && (await g(e)).isDirectory() && (e = (0, l.join)(e, (0, l.basename)(a))), (await S(a, e)) && (ed(a, !0), ed(e));
                    } else c(Y);
                  } else c(V);
                  break;
                }
                case "neofetch":
                case "systeminfo": {
                  await (0, $.mb)(["/Program Files/Xterm.js/ua-parser.js"]);
                  let { browser: e, cpu: t, engine: a, gpu: i, os: n } = new window.UAParser().getResult() || {},
                    { cols: o, options: s } = r || {},
                    l = `public@${window.location.hostname}`,
                    m = (s?.fontFamily || u.fontFamily)?.split(", ").find((e) => document.fonts.check(`${s?.fontSize || u.fontSize || 12}px ${e}`)),
                    { quota: w = 0, usage: f = 0 } = (await navigator.storage?.estimate?.()) || {},
                    h = (e) => `${(0, A.P)(...A.w[3].rgb)}${e}${ec.current?.[0] || (0, A.P)(...A.w[7].rgb)}`,
                    g = [l, Array.from({ length: l.length }).fill("-").join(""), `OS: ${ee} ${el()}`];
                  n?.name && g.push(`Host: ${n.name}${n?.version ? ` ${n.version}` : ""}${t?.architecture ? ` ${t?.architecture}` : ""}`),
                    e?.name && g.push(`Kernel: ${e.name}${e?.version ? ` ${e.version}` : ""}${a?.name ? ` (${a.name})` : ""}`),
                    g.push(`Uptime: ${(0, p.hR)(!0)}`, `Packages: ${Object.keys(d.Z).length}`),
                    window.screen?.width && window.screen?.height && g.push(`Resolution: ${window.screen.width}x${window.screen.height}`),
                    g.push(`Theme: ${en}`),
                    m && g.push(`Terminal Font: ${m}`),
                    i?.vendor ? g.push(`GPU: ${i.vendor}${i?.model ? ` ${i.model}` : ""}`) : i?.model && g.push(`GPU: ${i.model}`),
                    window.performance &&
                    "memory" in window.performance &&
                    g.push(`Memory: ${(window.performance.memory.totalJSHeapSize / 1024 / 1024).toFixed(0)}MB / ${(window.performance.memory.jsHeapSizeLimit / 1024 / 1024).toFixed(0)}MB`),
                    w && g.push(`Disk (/): ${(f / 1024 / 1024 / 1024).toFixed(0)}G / ${(w / 1024 / 1024 / 1024).toFixed(0)}G (${((f / w) * 100).toFixed(2)}%)`);
                  let k = g.reduce((e, t) => Math.max(e, t.length), 0),
                    y = Math.max(Math.min((o || u.cols || 70) - (b[0].length + k), 3), 1);
                  g.push("\n", [0, 4, 2, 6, 1, 5, 3, 7].map((e) => (0, p.vR)(e, ec.current)).join(""), [8, "C", "A", "E", 9, "D", "B", "F"].map((e) => (0, p.vR)(e, ec.current)).join("")),
                    b.forEach((e, t) => {
                      let a = g[t] || "";
                      if (0 === t) {
                        let [e, t] = a.split("@");
                        a = `${h(e)}@${h(t)}`;
                      } else {
                        let [e, t] = a.split(":");
                        t && (a = `${h(e)}:${t}`);
                      }
                      c(`${h(e)}${a.padStart(a.length + y, " ") || ""}`);
                    });
                  break;
                }
                case "nslookup": {
                  let [e] = Q;
                  if (e) {
                    let t;
                    let a = async (e, t = f[0]) => {
                      let { Answer: a = [] } = await (await fetch(`${t}?name=${e}`, { headers: { Accept: "application/dns-json" } })).json();
                      return a;
                    },
                      r = !1;
                    try {
                      t = await a(e);
                    } catch {
                      try {
                        (r = !0), (t = await a(e, h[0]));
                      } catch { }
                    }
                    if (t) {
                      let [a, i] = r ? h : f,
                        { host: n } = new URL(a);
                      c(`Server:  ${n}`), c(`Address:  ${i}`), c(""), c("Non-authoritative answer:"), c(`Name:    ${e}`), c(`Addresses:  ${t.map(({ data: e }) => e).join("\n          ")}`), c("");
                    } else c("Failed to contact name servers.");
                  }
                  break;
                }
                case "sheep":
                case "esheep": {
                  let { default: e } = await Promise.resolve().then(a.bind(a, 82163)),
                    [t = 1, r = 0] = Q;
                  if (!Number.isNaN(t) && !Number.isNaN(r)) {
                    (t = Number(t)), (r = Number(r)), t > 1 && (await e(), (t -= 1));
                    let a = (r || (t > 1 ? 1 : 0)) * K.i2;
                    Array.from({ length: t })
                      .fill(0)
                      .map(() => Math.floor(Math.random() * a))
                      .forEach((t) => setTimeout(e, t));
                  }
                  break;
                }
                case "ps":
                case "tasklist":
                  (0, p.j5)(
                    [
                      ["Image Name", 25],
                      ["PID", 8],
                      ["Title", 16],
                    ],
                    Object.entries(ei.current).map(([e, { title: t }], a) => [e, a.toString(), t]),
                    c
                  );
                  break;
                case "py":
                case "python":
                case "python3":
                  {
                    let [e] = Q,
                      t = await eo(e);
                    if (await m(t)) {
                      let e = await x(t);
                      e.length > 0 && (await R(e.toString(), c));
                    } else {
                      let [, e = "version"] = n.split(" ");
                      await R(e, c);
                    }
                  }
                  break;
                case "qjs":
                case "quickjs":
                case "node":
                  {
                    let [e] = Q,
                      t = await eo(e);
                    if (await m(t)) {
                      let e = await x(t);
                      e.length > 0 && (await y(e.toString(), c));
                    } else {
                      let [, e] = n.split(" ");
                      await y(e, c);
                    }
                  }
                  break;
                case "logout":
                case "restart":
                case "shutdown":
                  (0, z.resetStorage)(j).finally(() => window.location.reload());
                  break;
                case "time":
                  c(`The current time is: ${(0, $.BU)().slice(11, 22)}`);
                  break;
                case "title":
                  ea(e, n.slice(n.indexOf(" ") + 1));
                  break;
                case "touch": {
                  let [e] = Q;
                  if (e) {
                    let t = await eo(e),
                      a = (0, l.dirname)(t);
                    ed((0, l.join)(a, await o((0, l.basename)(t), a, H.from(""))));
                  }
                  break;
                }
                case "uptime":
                  c(`Uptime: ${(0, p.hR)()}`);
                  break;
                case "ver":
                case "version":
                  c(el());
                  break;
                case "wapm":
                case "wasmer":
                case "wax": {
                  let [e] = Q,
                    t = await eo(e),
                    [a, r] = await N(Q, W, c, t.endsWith(".wasm") && (await m(t)) ? await x(t) : void 0, D);
                  a && r && P((0, l.join)(K.xL, `${a}.wasm`), H.from(r), !0);
                  break;
                }
                case "weather":
                case "wttr": {
                  let e = await fetch("https://wttr.in/?1nAF", K.P8);
                  c(await e.text());
                  let [t, a] = ec.current;
                  t && W(t), a && W(a);
                  break;
                }
                case "whoami":
                  c(`${window.location.hostname}\\public`);
                  break;
                case "wsl":
                case "linux":
                  et("V86", { url: "/System/linux.bin" });
                  break;
                case "xlsx": {
                  let [e, t = "xlsx"] = Q;
                  if (e && t) {
                    let a = await eo(e);
                    if ((await m(a)) && !(await g(a)).isDirectory()) {
                      let r = await (0, X.convertSheet)(await x(a), t),
                        i = (0, l.dirname)(a);
                      ed((0, l.join)(i, await o(`${(0, l.basename)(e, (0, l.extname)(e))}.${t}`, i, H.from(r))));
                    } else c(V);
                  } else c(Y);
                  break;
                }
                default:
                  if (I) {
                    let e = Object.keys(d.Z).find((e) => e.toLowerCase() === ew) || T.resourceAliasMap[ew];
                    if (e) {
                      let [t] = Q,
                        a = await eo(t),
                        r = t && a && (await m(a)) ? a : "";
                      et(e, { url: r }), r && er(r, e);
                    } else {
                      let e = await m(I);
                      if (e || (await m((0, l.join)(t.current, I)))) {
                        let a = (0, $.RT)(I),
                          { command: r = "" } = L.Z[a] || {};
                        if (r) {
                          let e = `${r} ${I.includes(" ") ? `"${I}"` : I}`;
                          await em(`${e}${Q.length > 0 ? ` ${Q.join(" ")}` : ""}`, c, W, D ? e.replace(I, D) : void 0);
                        } else {
                          let r = e ? I : (0, l.join)(t.current, I),
                            i = "",
                            n = r;
                          a === K.zm ? ({ pid: i, url: n } = (0, U.OE)(await x(r))) : (i = (0, U.Wd)(a)), i && (et(i, { url: n }), n && er(n, i));
                        }
                      } else {
                        let e = await eu(I);
                        if (e) {
                          let t = `${K.xL}/${e}`;
                          await em(`${t}${Q.length > 0 ? ` ${Q.join(" ")}` : ""}`, c, W, D?.replace(I, t));
                        } else c((0, p.xy)(I));
                      }
                    }
                  }
              }
              return i && M(t.current).then((e) => (0, p.JF)(e, i)), t.current;
            },
            [t, ea, C, o, s, m, eu, w, eo, e, i, g, k, v, et, ei, x, M, S, j, F, r, en, ed, O, er, P]
          ),
          ew = (0, c.useRef)(em);
        return (
          (0, c.useEffect)(() => {
            ew.current = em;
          }, [em]),
          ew
        );
      },
        ea = a(72490);
      let { alias: er, author: ei, license: en, version: eo } = K.PACKAGE_DATA,
        es = `${en} License`,
        el = () => {
          let { __NEXT_DATA__: { buildId: e } = {} } = window;
          return `${eo}${e ? `-${e}` : ""}`;
        };
      var ec = ({ containerRef: e, id: t, loading: a, setLoading: r, url: i }) => {
        let {
          url: n,
          processes: { [t]: { closing: o = !1, libs: s = [] } = {} },
        } = (0, D.z)(),
          { readdir: d } = (0, W.o)(),
          [m, w] = (0, c.useState)(),
          [b, f] = (0, c.useState)(),
          [h, g] = (0, c.useState)(),
          k = (0, c.useRef)((h || !i || (0, l.extname)(i) ? "" : i) || K.Sd),
          [y, A] = (0, c.useState)(""),
          [v, M] = (0, c.useState)(!1),
          x = et(t, k, m, h),
          S = (0, c.useCallback)(() => b?.fit(), [b]),
          { foregroundId: j } = (0, B.k)();
        (0, c.useEffect)(() => {
          if (i) {
            if (h) h.handleCursorInsert(i.includes(" ") ? `"${i}"` : i);
            else {
              let e = (0, $.RT)(i),
                { command: t = "" } = L.Z[e] || {};
              t && A(`${t} ${i.includes(" ") ? `"${i}"` : i}`);
            }
            n(t, "");
          }
        }, [t, h, n, i]),
          (0, c.useEffect)(() => {
            (0, $.mb)(s).then(() => {
              window.Terminal && w(new window.Terminal(u));
            });
          }, [s]),
          (0, c.useEffect)(() => {
            if (m && a && e.current && window.FitAddon && window.LocalEchoController) {
              let t = new window.FitAddon.FitAddon(),
                a = new window.LocalEchoController(void 0, { historySize: 1e3 });
              m.loadAddon(a),
                m.loadAddon(t),
                m.open(e.current),
                t.fit(),
                f(t),
                g(a),
                e.current.addEventListener("contextmenu", (e) => {
                  (0, $.nK)(e);
                  let t = m.getSelection();
                  t ? (navigator.clipboard?.writeText(t), m.clearSelection()) : (0, p.P)(a);
                }),
                e.current?.closest("section")?.addEventListener("focus", () => m?.textarea?.focus(K.eS), { passive: !0 }),
                r(!1);
            }
            return () => {
              m && o && m.dispose();
            };
          }, [o, e, a, r, m]),
          (0, c.useEffect)(() => {
            let e;
            return (
              m &&
              h &&
              (m.textarea?.setAttribute("enterkeyhint", "send"),
                (e = m.onKey(({ domEvent: { ctrlKey: e, code: t } }) => {
                  e && "KeyV" === t && (0, p.P)(h);
                }))),
              () => e?.dispose()
            );
          }, [h, m]),
          (0, c.useEffect)(() => {
            if (h && m && !v) {
              let e = () =>
                h
                  .read(
                    `\r
${k.current}>`
                  )
                  .then((t) => x.current?.(t).then(e));
              h.println(`${er} [Version ${el()}]`),
                h.println(`By ${ei.name}. ${es}.`),
                y
                  ? (h.println(`\r
${k.current}>${y}\r
`),
                    (h.history.entries = [y]),
                    x.current(y).then(e))
                  : e(),
                M(!0),
                m.focus(),
                S(),
                d(k.current).then((e) => (0, p.JF)(e, h));
            }
          }, [S, y, h, x, v, d, m]),
          (0, c.useLayoutEffect)(() => {
            t !== j || a || m?.textarea?.focus(K.eS);
          }, [j, t, a, m]),
          (0, ea.Z)(e.current, S);
      },
        ed = a(7443),
        eu = ({ id: e }) => (0, i.jsx)(ed.Z, { StyledComponent: s, id: e, useHook: ec });
    },
    7443: function (e, t, a) {
      var r = a(85893),
        i = a(67294),
        n = a(33333),
        o = a(45279),
        s = a(58437);
      t.Z = (0, i.memo)(({ id: e, useHook: t, StyledComponent: a, children: l }) => {
        let {
          processes: { [e]: { url: c = "" } = {} },
        } = (0, s.z)(),
          d = (0, i.useRef)(null),
          [u, m] = (0, i.useState)(!0),
          w = (0, i.useMemo)(() => ({ contain: "strict", visibility: u ? "hidden" : "visible" }), [u]);
        return t({ containerRef: d, id: e, loading: u, setLoading: m, url: c }), (0, r.jsxs)(r.Fragment, { children: [u && (0, r.jsx)(n.default, {}), (0, r.jsx)(a, { ref: d, style: w, ...(0, o.Z)({ id: e }), children: l })] });
      });
    },
    33333: function (e, t, a) {
      a.r(t);
      let r = a(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
      t.default = r;
    },
    72490: function (e, t, a) {
      var r = a(67294);
      t.Z = (e, t) => {
        let [a, i] = (0, r.useState)();
        (0, r.useEffect)(() => {
          t && i(new ResizeObserver(t));
        }, [t]),
          (0, r.useEffect)(
            () => (
              e instanceof HTMLElement && a?.observe(e),
              () => {
                e instanceof HTMLElement && a?.unobserve(e);
              }
            ),
            [e, a]
          );
      };
    },
    18680: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = a(10508),
        i = a(97836);
      let n = {
        dark: { active: "rgb(166, 166, 166)", blendMode: "color-burn", buttonHover: "rgb(55, 55, 55)", thumb: "rgb(77, 77, 77)", thumbHover: "rgb(122, 122, 122)", track: "rgb(23, 23, 23)" },
        light: { active: "rgb(96, 96, 96)", blendMode: "color-dodge", buttonHover: "rgb(218, 218, 218)", thumb: "rgb(205, 205, 205)", thumbHover: "rgb(166, 166, 166)", track: "rgb(240, 240, 240)" },
      };
      var o = (e = i.BQ, t = 0, a = 0, o = "dark") =>
        (0, r.iv)(
          [
            "overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:",
            " ",
            ";}&::-webkit-scrollbar{height:",
            "px;width:",
            "px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",
            ";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",
            ";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",
            ";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",
            ";}&::-webkit-scrollbar-thumb:active{background-color:",
            ";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",
            ";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",
            ";display:block;height:",
            ";&:hover{background-color:",
            ";}&:active{background-color:",
            ";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",
            ";background-position-y:",
            ";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",
            ");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",
            ");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",
            ");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",
            ");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",
            ";}",
          ],
          n[o].thumb,
          n[o].track,
          e,
          e,
          n[o].track,
          n[o].thumb,
          n[o].thumb,
          n[o].thumbHover,
          n[o].active,
          n[o].track,
          n[o].track,
          e ? `${e}px` : "initial",
          n[o].buttonHover,
          n[o].active,
          0 === t ? "center" : `${t}px`,
          0 === a ? "center" : `${a}px`,
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",
          n[o].blendMode
        );
    },
    67881: function (e, t, a) {
      a.r(t),
        a.d(t, {
          transcode: function () {
            return s;
          },
        });
      var r = a(1864),
        i = a(6484),
        n = a(48764).Buffer;
      let o = async (e) => (
        window.FFmpeg || (await (0, i.mb)(["/Program Files/ffmpeg/ffmpeg.min.js"])),
        window.FFmpeg &&
        (window.FFmpegInstance?.exit(),
          (window.FFmpegInstance = window.FFmpeg.createFFmpeg({
            corePath: `${window.location.origin}/Program Files/ffmpeg/ffmpeg-core.js`,
            log: !0,
            logger: ({ message: t }) => {
              e?.(t);
            },
            mainName: "main",
          })),
          await window.FFmpegInstance.load()),
        window.FFmpegInstance
      ),
        s = async (e, t, a) => {
          let i = await o(a),
            s = [];
          return (
            await Promise.all(
              e.map(async ([e, a]) => {
                let o = (0, r.basename)(e),
                  l = `${(0, r.basename)(e, (0, r.extname)(e))}.${t}`;
                i.FS("writeFile", o, a), await i.run("-i", o, l), s.push([(0, r.join)((0, r.dirname)(e), l), n.from(i.FS("readFile", l))]);
              })
            ),
            s
          );
        };
    },
    68673: function (e, t, a) {
      a.r(t),
        a.d(t, {
          convert: function () {
            return o;
          },
        });
      var r = a(1864),
        i = a(6484),
        n = a(48764).Buffer;
      let o = async (e, t, a) => {
        let o = [];
        await (0, i.mb)(["/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js"]);
        let { call: s } = window["wasm-imagemagick"];
        return (
          await Promise.all(
            e.map(async ([e, i]) => {
              let l = (0, r.basename)(e),
                c = `${(0, r.basename)(e, (0, r.extname)(e))}.${t}`,
                { outputFiles: [d] = [], stderr: u, stdout: m } = await s([{ content: i, name: l }], ["convert", l, "-verbose", c]),
                w = [...m, ...u].join("\n");
              w && a?.(w), o.push([(0, r.join)((0, r.dirname)(e), c), d?.blob ? n.from(await d.blob.arrayBuffer()) : n.from("")]);
            })
          ),
          o
        );
      };
    },
    50569: function (e, t, a) {
      a.d(t, {
        u: function () {
          return i;
        },
        w: function () {
          return n;
        },
      });
      let r = async (e) => {
        let { default: t } = await a.e(1855, "high").then(a.bind(a, 21855));
        return t({ format: e, locateFile: (e) => `System/mediainfo.js/${e}` });
      },
        i = async (e) =>
          (await r("text")).analyzeData(
            () => e.length,
            () => e
          ),
        n = async (e) =>
          (
            await (await r("object")).analyzeData(
              () => e.length,
              () => e
            )
          ).media;
    },
    82883: function (e, t, a) {
      a.d(t, {
        cM: function () {
          return c;
        },
        hZ: function () {
          return u;
        },
        VU: function () {
          return d;
        },
        Kk: function () {
          return h;
        },
        Rx: function () {
          return p;
        },
      });
      var r = a(1864),
        i = a(67294),
        n = a(20063),
        o = JSON.parse('{"I":[".cache",".json"],"K":[".md",".txt",".whtml"]}'),
        s = a(97836),
        l = a(6484);
      let c = "/.index/search.lunr.json",
        d = "/System/lunr/lunr.min.js",
        u = { enterKeyHint: "search", inputMode: "search", type: "search", ...s.AA },
        m = Object.create(null),
        w = [],
        b = async (e, t) => {
          if ((window.lunr || (await (0, l.mb)([d])), !t && !m?.search)) {
            let e = await fetch(c, s.P8);
            try {
              let { paths: t, ...a } = JSON.parse(await e.text());
              (m = window.lunr?.Index.load(a)), (w = t);
            } catch { }
          }
          let a = t ?? m,
            r = [],
            i = e
              .trim()
              .replace(/\./g, " ")
              .replace(/\*~\^-\+/g, "");
          try {
            (r = a.search?.(i)), r?.length === 0 && (r = a.search?.(`${i.split(" ").join("* ")}*`));
          } catch { }
          return r ? r.map((e) => ({ ...e, ref: (Object.prototype.hasOwnProperty.call(w, e.ref) ? w[e.ref] : e.ref) || "" })) : [];
        },
        f = async (e, t) => {
          let a = t?._getFs("/")?.fs,
            i = a?.getOverlayedFileSystems(),
            n = i?.writable,
            s = (("function" == typeof n?._cache?.map?.keys && [...n._cache.map.keys()]) || Object.keys(n?._cache?.map || {}) || []).filter((e) => {
              let t = (0, l.RT)(e);
              return !!t && !o.I.includes(t);
            }),
            c = await Promise.all(
              s.map(async (t) => {
                let a = (0, r.basename)(t, (0, r.extname)(t));
                return { name: a, path: t, text: o.K.includes((0, l.RT)(t)) ? `${a} ${(await e(t)).toString()}` : a };
              })
            ),
            d = window.lunr?.(function () {
              this.ref("path"), this.field("name"), this.field("text"), c.forEach((e) => this.add(e));
            });
          return window.lunr?.Index.load(d.toJSON());
        },
        h = async (e, t, a) => {
          let r = await b(e),
            i = await f(t, a);
          return [...r, ...(await b(e, i))].sort((e, t) => t.score - e.score);
        },
        p = (e) => {
          let [t, a] = (0, i.useState)([]),
            { readFile: r, rootFs: o } = (0, n.o)();
          return (
            (0, i.useEffect)(() => {
              (async () => {
                e.length > 0 ? (window.lunr || (await (0, l.mb)([d])), b(e).then(a), f(r, o).then((t) => b(e, t).then((e) => a((t) => [...t, ...e].sort((e, t) => t.score - e.score))))) : a([]);
              })();
            }, [r, o, e]),
            t
          );
        };
    },
    73751: function (e, t, a) {
      a.d(t, {
        convertSheet: function () {
          return o;
        },
      });
      var r = a(6484),
        i = a(48764).Buffer;
      let n = async () => (window.XLSX || (await (0, r.mb)(["/Program Files/SheetJS/xlsx.full.min.js"])), window.XLSX),
        o = async (e, t) => {
          let a;
          let o = await n();
          if ("numbers" === t) {
            if ((await (0, r.mb)(["/Program Files/SheetJS/xlsx.zahl.js"]), !window.XLSX_ZAHL_PAYLOAD)) return i.from("");
            a = window.XLSX_ZAHL_PAYLOAD;
          }
          return o.write(o.read(e), { bookType: t, numbers: a, type: "buffer" });
        };
    },
  },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5642,3333,7881,8673,3751],{85642:function(e,t,a){let r;a.r(t),a.d(t,{default:function(){return eu}});var i=a(85893),n=a(10508),o=a(18680);let s=n.ZP.div(["height:100%;width:100%;.terminal{backdrop-filter:blur(8px);height:100% !important;}.xterm-viewport{",";width:100% !important;}.xterm-cursor-underline{border-bottom-color:#f3f3f3 !important;border-bottom-width:4px !important;font-size:15px !important;}.xterm-cursor-blink{animation-duration:1.067s !important;}"],(0,o.Z)());var l=a(1864),c=a(67294),d=a(37176);let u={allowTransparency:!0,cols:70,cursorBlink:!0,cursorInactiveStyle:"none",cursorStyle:"underline",cursorWidth:8,fontFamily:"Consolas, Lucida Console, Courier New, monospace",fontSize:14,fontWeight:"100",rows:20,theme:{background:d.Z.Terminal.backgroundColor,foreground:"rgb(204, 204, 204)"}},m=["lolcat"],w=["--help","-h","--version","-V"],b=["     ':lodxkkkOOOOOOOOOOOOkkkkkl","  .ckKNWMMMMMMMMMMMMMMMMMMMMMMMO"," .kWNK0OOKWMX0OOOOO0NMMMN000000d",".dKo,.   cNWo      .xMMWo       ",":x'      cWN:      .kMMWc       ","..       dMK,      '0MMX;       ","        .OMO.      ;XMM0,       ","        cNMx.      cNMMk.       ","       .OMMd       oMMMx.       ","      .xWMWc      .xMMMd        ","     .xWMMX;      .kMMMd        ","    'OWMMMO.      '0MMMO.     :o","   cKMMMMWo       '0MMMWk;..'l0c","  ;XMMMMM0,        oWMMMMWXXNNd.","  .kWMMW0;         .l0WMMMMNO:  ","   .lkkl.            .cxkkd:.   "],f=["https://cloudflare-dns.com/dns-query","1.1.1.1"],h=["https://dns.google/resolve","8.8.8.8"];var p=a(2347);let g=(e,t)=>{let a=e.newFunction("log",(...a)=>a.map(e.dump).forEach(t)),r=e.newObject();e.setProp(r,"error",a),e.setProp(r,"log",a),e.setProp(r,"warn",a),e.setProp(e.global,"console",r),r.dispose(),a.dispose()},k=e=>{e.setProp(e.global,"window",e.global)},y=async(e,t)=>{let{getQuickJS:r}=await a.e(2177,"high").then(a.bind(a,62177)),i=(await r()).newContext(),n=e=>{"string"==typeof e||"number"==typeof e?t(e.toString()):"object"==typeof e&&t(JSON.stringify(e))};if(!e)return;g(i,n),k(i);let o=i.evalCode(e);if(o.error){let{message:e,name:t,stack:a}=i.dump(o.error);n(`${t}: ${e}
// ${a}`),o.error.dispose()}else n(i.dump(o.value)),o.value.dispose()};var A=a(71558),$=a(6484),v=a(48764).Buffer;let M=[0,97,115,109],x=[4,37,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,97,116,111,109],S="https://registry.wapm.io/graphql",j=e=>`{
//   getPackage(name: "${e}") {
//     versions {
//       distribution {
//         piritaDownloadUrl
//       }
//     }
//   }
// }`,F=e=>({operationName:"shellGetCommandQuery",query:`
//     query shellGetCommandQuery($command: String!) {
//       command: getCommand(name: $command) {
//         module {
//           publicUrl
//         }
//       }
//     }
//   `,variables:{command:e}}),O=(e,t,a=!1)=>{let r=[...e],i=[...t],n=r.map((e,t)=>r.slice(t,t+i.length)),o=e=>e.every((e,t)=>e===i[t]),s=a?n.findLastIndex(e=>o(e)):n.findIndex(e=>o(e));return -1===s?a?e.length:0:s},P=async({args:[e]})=>{let t="";try{let a=await (await fetch(S,{body:JSON.stringify({query:j(e)}),headers:{"content-type":"application/json"},method:"POST"})).json();if(!(t=a?.data?.getPackage?.versions[0]?.distribution?.piritaDownloadUrl)){let a=await (await fetch(S,{body:JSON.stringify(F(e)),headers:{"content-type":"application/json"},method:"POST"})).json();t=a?.data?.command?.module?.publicUrl}}catch{}let a=new Uint8Array;if(!t)return a;try{a=new Uint8Array(await (await fetch(t)).arrayBuffer())}catch{}return 0===a.length?new Uint8Array:a.subarray(O(a,new Uint8Array(M)),O(a,new Uint8Array(x),!0))},N=async(e,t,i,n,o)=>{let s="run"===e[0]?e.slice(1):e,{lowerI64Imports:c}=await a.e(4512,"high").then(a.bind(a,24359)),{default:d}=await a.e(7545,"high").then(a.t.bind(a,67545,23));try{let e=n||await P({args:s});if(0===e.length||e.length<1024&&new TextDecoder().decode(e).includes("NoSuchKey"))throw Error(`command not found ${s[0]}`);let i=await c(e);if(void 0!==i&&i instanceof Uint8Array){r||=(await a.e(8778,"high").then(a.t.bind(a,88778,23))).default;let c=await WebAssembly.compile(i),b=(m.includes(s[0])||".wasm"===(0,$.RT)(s[0])&&m.includes((0,l.basename)(s[0],(0,l.extname)(s[0]))))&&(void 0!==s[2]||!w.includes(s[1])),f=!1,h=!1,g=b?o?(0,p.$4)(o).slice(1):[]:s,k=new d({args:g,bindings:r,env:{COLUMNS:u.cols?.toString(),LINES:u.rows?.toString()},...b?{getStdin(){h&&(this.getStdin=null);let e=v.from(s.slice(g.length).join(" "),"utf8");return Object.assign(e,{copy:()=>f?0:(f=!0,e.length)})}}:{},sendStderr:e=>t(e.toString()),sendStdout:e=>{b&&(h=!0),t(e.toString())}}),y=await WebAssembly.instantiate(c,k.getImports(c));try{k.start(y)}catch{}if(!n)return[s[0].split("/").slice(-1)[0],e]}}catch(a){let{code:e,message:t}=a;0===e||/^WASI Exit error: \d$/.test(t)||i(t)}return[]};var E=a(42576);let C={fullStdLib:!1,indexURL:"/Program Files/Pyodide/"},R=async(e,t)=>{if(await (0,$.mb)(["/Program Files/Pyodide/pyodide.js"]),!window.pyodide&&window.loadPyodide&&(window.pyodide=await window.loadPyodide(C)),window.pyodide)try{let a=await window.pyodide.runPythonAsync("ver"===e||"version"===e?"import sys\r\nsys.version\r\n":"import sys\r\nimport io\r\nsys.stdout = io.StringIO()\r\n"+e);a||(a=await window.pyodide.runPythonAsync("sys.stdout.getvalue()")),a&&t(a.toString())}catch(a){let{message:e}=a;e&&t(e)}};var T=a(40591),L=a(43950),U=a(6155),W=a(20063),z=a(18575),D=a(58437),B=a(76488),I=a(86178),K=a(97836),Z=a(67881),_=a(68673),Q=a(31746),G=a(82883),X=a(73751),J=a(50569),H=a(48764).Buffer;let V="The system cannot find the file specified.",q="The system cannot find the path specified.",Y="The syntax of the command is incorrect.",{alias:ee}=K.PACKAGE_DATA;var et=(e,t,r,i)=>{let{createPath:o,deletePath:s,exists:m,fs:w,lstat:g,mapFs:k,mkdirRecursive:v,readdir:M,readFile:x,rename:S,rootFs:j,stat:F,updateFolder:O,writeFile:P}=(0,W.o)(),{closeWithTransition:C,open:et,title:ea}=(0,D.z)(),{updateRecentFiles:er}=(0,B.k)(),ei=(0,I.R)(),{name:en}=(0,n.Fg)(),eo=(0,c.useCallback)(async(e,a)=>{if(!e)return"";if(e.startsWith("ipfs://")){let t=await (0,Q.getIpfsResource)(e),r=(0,l.join)(K.Ll,await o(await (0,Q.getIpfsFileName)(e,t),a||K.Ll,t));return O(a||K.Ll,(0,l.basename)(r)),r}return(0,l.isAbsolute)(e)?e:(0,l.join)(t.current,e)},[t,o,O]),ec=(0,c.useRef)([]),ed=(0,c.useCallback)((e,t=!1)=>{let a=(0,l.dirname)(e);t?O(a,void 0,(0,l.basename)(e)):O(a,(0,l.basename)(e))},[O]),eu=(0,c.useCallback)(async e=>(await M(K.xL)).find(t=>[".exe",".wasm"].includes((0,$.RT)(t))&&(0,l.basename)(t,(0,l.extname)(t)).toLowerCase()===e.toLowerCase()),[M]),em=(0,c.useCallback)(async(n="",c=i?.println.bind(i)||console.info,W=i?.print.bind(i)||console.info,D="")=>{let B=n.split("|");if(!D&&B.length>1){let e=[],t=t=>{e.push(t)};return B.reduce(async(a,r,i)=>{await a;let n=e.join("").replace(/\n$/,""),o=i===B.length-1,s=r.trim();return e.length=0,em(`${s}${n?` ${n}`:""}`,o?void 0:e=>t(`${e}
// `),o?void 0:t,s)},Promise.resolve(""))}let[I="",...Q]=(0,p.$4)(n,D),ew=I.toLowerCase();switch(ew){case"cat":case"type":{let[e]=Q;if(e){let t=await eo(e);await m(t)?(await g(t)).isDirectory()?c("Access is denied."):c((await x(t)).toString()):c(q)}else c(Y);break}case"cd":case"cd/":case"cd.":case"cd..":case"chdir":case"pwd":{let[e]=ew.startsWith("cd")&&ew.length>2?[ew.slice(2)]:Q;if(e&&"pwd"!==ew){let a=await eo(e),r=async e=>{(await g(e)).isDirectory()?t.current!==e&&(t.current=e):c("The directory name is invalid.")};if(await m(a))await r(a);else{let e=(await M(t.current)).find(e=>e.toLowerCase()===(0,l.basename)(a).toLowerCase());e?await r((0,l.join)(t.current,e)):c(q)}}else c(t.current);break}case"color":{let[e,t,a]=Q;if(void 0!==e&&void 0!==t&&void 0!==a)W((0,A.P)(Number(e),Number(t),Number(a)));else{let[[e,t]=[]]=Q,{rgb:a,name:r}=A.w[e?.toUpperCase()]||{},{rgb:i,name:n}=A.w[t?.toUpperCase()]||{};if(a){let e=!!i,t=(0,A.P)(...a,e);W(t),c(`${e?"Background":"Foreground"}: ${r}`),ec.current[0]=t}if(i){let e=(0,A.P)(...i);W(e),c(`Foreground: ${n}`),ec.current[1]=e}i||a||(W("\x1b[0m"),ec.current=[])}break}case"copy":case"cp":{let[e,t]=Q,a=await eo(e);if(await m(a)){if(t){let e=await eo(t),r=(0,l.dirname)(e);ed((0,l.join)(r,await o((0,l.basename)(e),r,await x(a)))),c("	1 file(s) copied.")}else c("The file cannot be copied onto itself."),c("	0 file(s) copied.")}else c(V);break}case"clear":case"cls":r?.reset(),r?.write(`\u001Bc${ec.current.join("")}`);break;case"date":c(`The current date is: ${(0,$.BU)().slice(0,10)}`);break;case"del":case"erase":case"rd":case"rm":case"rmdir":{let[e]=Q;if(e){let t=await eo(e);await m(t)&&await s(t)&&ed(t,!0)}break}case"dir":case"ls":{let[e=""]=Q,a=async t=>{let a=0,n=0,o=0,s=await M(t);0===s.length&&j?.mntMap[t]?.getName()==="FileSystemAccess"&&(await (0,z.requestPermission)(t),s=await M(t));let d=new Intl.DateTimeFormat(K.ZW,{timeStyle:"short"}),u=await Promise.all(s.filter(t=>(!e.startsWith("*")||t.endsWith(e.slice(1)))&&(!e.endsWith("*")||t.startsWith(e.slice(0,-1)))).map(async e=>{let r=(0,l.join)(t,e),i=await F(r),s=new Date((0,U.GA)(r,i)),c=s.toISOString().slice(0,10),u=d.format(s).padStart(8,"0"),m=i.isDirectory();return a+=m?0:i.size,m?o+=1:n+=1,[`${c}  ${u}`,m?"<DIR>        ":i.size.toLocaleString(),e]}));c(` Directory of ${t}`),c("");let m=!i?._termSize?.cols||i?._termSize?.cols>52;(0,p.j5)([["Date",m?22:20],["Type/Size",m?15:13,!0,e=>"-1"===e?"":e],["Name",r?.cols?r.cols-40:30]],u,c,!0),c(`		${n} File(s)	${a.toLocaleString()} bytes`),c(`		${o} Dir(s)${await (0,p.lO)()}`)};if(!e||e.startsWith("*")||e.endsWith("*"))await a(t.current);else{let t=await eo(e);await m(t)?(await g(t)).isDirectory()?await a(t):c((0,l.basename)(t)):c("File Not Found")}break}case"echo":c(n.slice(n.indexOf(" ")+1));break;case"exit":case"quit":C(e);break;case"file":{let[e]=Q;if(e){let t=await eo(e);if(await m(t)){let{fileTypeFromBuffer:r}=await Promise.all([a.e(8090,"high"),a.e(3545,"high"),a.e(9320,"high")]).then(a.bind(a,53545)),{mime:i="Unknown"}=await r(await x(t))||{};c(`${e}: ${i}`)}}break}case"find":case"search":{if(0===Q.length){c("FIND: Parameter format not correct");break}let e=await (0,G.Kk)(Q.join(" "),x,j);e?.forEach(({ref:e})=>c(e));break}case"ffmpeg":case"imagemagick":{let[e,t]=Q;if(e&&t){let a=await eo(e);if(await m(a)&&!(await g(a)).isDirectory()){let e="ffmpeg"===ew?Z.transcode:_.convert,[[r,i]]=await e([[(0,l.basename)(a),await x(a)]],t,c);if(r&&i){let e=(0,l.dirname)(a);ed((0,l.join)(e,await o(r,e,i)))}}else c(V)}else c(Y);break}case"git":case"isogit":w&&await (0,E.Z)(Q,t.current,c,w,O);break;case"help":{let[e]=Q,t="-a"===e;if(e&&!t){let t=p.CN[e]?e:Object.entries(p.j3).find(([,[t]])=>t===e)?.[0];t&&p.CN[t]?c(p.CN[t]):c("This command is not supported by the help utility.")}else(0,p.R_)(c,p.CN,t?p.j3:void 0);break}case"history":i?.history.entries.forEach((e,t)=>c(`${(t+1).toString().padStart(4)} ${e}`));break;case"ipfs":{let[e,a]=Q;"get"===e&&a&&await eo(`ipfs://${a}`,t.current);break}case"ifconfig":case"ipconfig":case"whatsmyip":{let{ip:e=""}=Object.fromEntries((await (await fetch("https://cloudflare.com/cdn-cgi/trace")).text()||"").trim().split("\n").map(e=>e.split("="))||[]);c("IP Configuration"),c(""),c(`   IPv4 Address. . . . . . . . . . . : ${(e=>{let t=e.split(".");return 4===t.length&&t.map(Number).every(e=>e>0&&e<256)})(e)?e:"Unknown"}`);break}case"kill":case"taskkill":{let[e]=Q,t=Number.isNaN(e)||ei.current[e]?e:Object.keys(ei.current)[Number(e)];ei.current[t]?(C(t),c(`SUCCESS: Sent termination signal to the process "${t}".`)):c(`ERROR: The process "${t}" not found.`);break}case"license":c(es);break;case"md":case"mkdir":{let[e]=Q;if(e){let t=await eo(e);await v(t),ed(t)}break}case"mediainfo":{let[e]=Q;if(e){let t=await eo(e);if(await m(t))try{c(await (0,J.u)(await x(t)))}catch{c("Failed to parse media file")}}}break;case"mount":if((0,$.df)())try{let e=await k(t.current);if(e){let a=(0,l.join)(t.current,e);O(t.current,e),t.current=a}}catch{}else c("The system does not support the command.");break;case"move":case"mv":case"ren":case"rename":{let[e,t]=Q,a=await eo(e);if(await m(a)){if(t){let e=await eo(t);["move","mv"].includes(ew)&&await m(e)&&(await g(e)).isDirectory()&&(e=(0,l.join)(e,(0,l.basename)(a))),await S(a,e)&&(ed(a,!0),ed(e))}else c(Y)}else c(V);break}case"neofetch":case"systeminfo":{await (0,$.mb)(["/Program Files/Xterm.js/ua-parser.js"]);let{browser:e,cpu:t,engine:a,gpu:i,os:n}=new window.UAParser().getResult()||{},{cols:o,options:s}=r||{},l=`public@${window.location.hostname}`,m=(s?.fontFamily||u.fontFamily)?.split(", ").find(e=>document.fonts.check(`${s?.fontSize||u.fontSize||12}px ${e}`)),{quota:w=0,usage:f=0}=await navigator.storage?.estimate?.()||{},h=e=>`${(0,A.P)(...A.w[3].rgb)}${e}${ec.current?.[0]||(0,A.P)(...A.w[7].rgb)}`,g=[l,Array.from({length:l.length}).fill("-").join(""),`OS: ${ee} ${el()}`];n?.name&&g.push(`Host: ${n.name}${n?.version?` ${n.version}`:""}${t?.architecture?` ${t?.architecture}`:""}`),e?.name&&g.push(`Kernel: ${e.name}${e?.version?` ${e.version}`:""}${a?.name?` (${a.name})`:""}`),g.push(`Uptime: ${(0,p.hR)(!0)}`,`Packages: ${Object.keys(d.Z).length}`),window.screen?.width&&window.screen?.height&&g.push(`Resolution: ${window.screen.width}x${window.screen.height}`),g.push(`Theme: ${en}`),m&&g.push(`Terminal Font: ${m}`),i?.vendor?g.push(`GPU: ${i.vendor}${i?.model?` ${i.model}`:""}`):i?.model&&g.push(`GPU: ${i.model}`),window.performance&&"memory"in window.performance&&g.push(`Memory: ${(window.performance.memory.totalJSHeapSize/1024/1024).toFixed(0)}MB / ${(window.performance.memory.jsHeapSizeLimit/1024/1024).toFixed(0)}MB`),w&&g.push(`Disk (/): ${(f/1024/1024/1024).toFixed(0)}G / ${(w/1024/1024/1024).toFixed(0)}G (${(f/w*100).toFixed(2)}%)`);let k=g.reduce((e,t)=>Math.max(e,t.length),0),y=Math.max(Math.min((o||u.cols||70)-(b[0].length+k),3),1);g.push("\n",[0,4,2,6,1,5,3,7].map(e=>(0,p.vR)(e,ec.current)).join(""),[8,"C","A","E",9,"D","B","F"].map(e=>(0,p.vR)(e,ec.current)).join("")),b.forEach((e,t)=>{let a=g[t]||"";if(0===t){let[e,t]=a.split("@");a=`${h(e)}@${h(t)}`}else{let[e,t]=a.split(":");t&&(a=`${h(e)}:${t}`)}c(`${h(e)}${a.padStart(a.length+y," ")||""}`)});break}case"nslookup":{let[e]=Q;if(e){let t;let a=async(e,t=f[0])=>{let{Answer:a=[]}=await (await fetch(`${t}?name=${e}`,{headers:{Accept:"application/dns-json"}})).json();return a},r=!1;try{t=await a(e)}catch{try{r=!0,t=await a(e,h[0])}catch{}}if(t){let[a,i]=r?h:f,{host:n}=new URL(a);c(`Server:  ${n}`),c(`Address:  ${i}`),c(""),c("Non-authoritative answer:"),c(`Name:    ${e}`),c(`Addresses:  ${t.map(({data:e})=>e).join("\n          ")}`),c("")}else c("Failed to contact name servers.")}break}case"sheep":case"esheep":{let{default:e}=await Promise.resolve().then(a.bind(a,82163)),[t=1,r=0]=Q;if(!Number.isNaN(t)&&!Number.isNaN(r)){t=Number(t),r=Number(r),t>1&&(await e(),t-=1);let a=(r||(t>1?1:0))*K.i2;Array.from({length:t}).fill(0).map(()=>Math.floor(Math.random()*a)).forEach(t=>setTimeout(e,t))}break}case"ps":case"tasklist":(0,p.j5)([["Image Name",25],["PID",8],["Title",16]],Object.entries(ei.current).map(([e,{title:t}],a)=>[e,a.toString(),t]),c);break;case"py":case"python":case"python3":{let[e]=Q,t=await eo(e);if(await m(t)){let e=await x(t);e.length>0&&await R(e.toString(),c)}else{let[,e="version"]=n.split(" ");await R(e,c)}}break;case"qjs":case"quickjs":case"node":{let[e]=Q,t=await eo(e);if(await m(t)){let e=await x(t);e.length>0&&await y(e.toString(),c)}else{let[,e]=n.split(" ");await y(e,c)}}break;case"logout":case"restart":case"shutdown":(0,z.resetStorage)(j).finally(()=>window.location.reload());break;case"time":c(`The current time is: ${(0,$.BU)().slice(11,22)}`);break;case"title":ea(e,n.slice(n.indexOf(" ")+1));break;case"touch":{let[e]=Q;if(e){let t=await eo(e),a=(0,l.dirname)(t);ed((0,l.join)(a,await o((0,l.basename)(t),a,H.from(""))))}break}case"uptime":c(`Uptime: ${(0,p.hR)()}`);break;case"ver":case"version":c(el());break;case"wapm":case"wasmer":case"wax":{let[e]=Q,t=await eo(e),[a,r]=await N(Q,W,c,t.endsWith(".wasm")&&await m(t)?await x(t):void 0,D);a&&r&&P((0,l.join)(K.xL,`${a}.wasm`),H.from(r),!0);break}case"weather":case"wttr":{let e=await fetch("https://wttr.in/?1nAF",K.P8);c(await e.text());let[t,a]=ec.current;t&&W(t),a&&W(a);break}case"whoami":c(`${window.location.hostname}\\public`);break;case"wsl":case"linux":et("V86",{url:"/System/linux.bin"});break;case"xlsx":{let[e,t="xlsx"]=Q;if(e&&t){let a=await eo(e);if(await m(a)&&!(await g(a)).isDirectory()){let r=await (0,X.convertSheet)(await x(a),t),i=(0,l.dirname)(a);ed((0,l.join)(i,await o(`${(0,l.basename)(e,(0,l.extname)(e))}.${t}`,i,H.from(r))))}else c(V)}else c(Y);break}default:if(I){let e=Object.keys(d.Z).find(e=>e.toLowerCase()===ew)||T.resourceAliasMap[ew];if(e){let[t]=Q,a=await eo(t),r=t&&a&&await m(a)?a:"";et(e,{url:r}),r&&er(r,e)}else{let e=await m(I);if(e||await m((0,l.join)(t.current,I))){let a=(0,$.RT)(I),{command:r=""}=L.Z[a]||{};if(r){let e=`${r} ${I.includes(" ")?`"${I}"`:I}`;await em(`${e}${Q.length>0?` ${Q.join(" ")}`:""}`,c,W,D?e.replace(I,D):void 0)}else{let r=e?I:(0,l.join)(t.current,I),i="",n=r;a===K.zm?{pid:i,url:n}=(0,U.OE)(await x(r)):i=(0,U.Wd)(a),i&&(et(i,{url:n}),n&&er(n,i))}}else{let e=await eu(I);if(e){let t=`${K.xL}/${e}`;await em(`${t}${Q.length>0?` ${Q.join(" ")}`:""}`,c,W,D?.replace(I,t))}else c((0,p.xy)(I))}}}}return i&&M(t.current).then(e=>(0,p.JF)(e,i)),t.current},[t,ea,C,o,s,m,eu,w,eo,e,i,g,k,v,et,ei,x,M,S,j,F,r,en,ed,O,er,P]),ew=(0,c.useRef)(em);return(0,c.useEffect)(()=>{ew.current=em},[em]),ew},ea=a(72490);let{alias:er,author:ei,license:en,version:eo}=K.PACKAGE_DATA,es=`${en} License`,el=()=>{let{__NEXT_DATA__:{buildId:e}={}}=window;return`${eo}${e?`-${e}`:""}`};var ec=({containerRef:e,id:t,loading:a,setLoading:r,url:i})=>{let{url:n,processes:{[t]:{closing:o=!1,libs:s=[]}={}}}=(0,D.z)(),{readdir:d}=(0,W.o)(),[m,w]=(0,c.useState)(),[b,f]=(0,c.useState)(),[h,g]=(0,c.useState)(),k=(0,c.useRef)((h||!i||(0,l.extname)(i)?"":i)||K.Sd),[y,A]=(0,c.useState)(""),[v,M]=(0,c.useState)(!1),x=et(t,k,m,h),S=(0,c.useCallback)(()=>b?.fit(),[b]),{foregroundId:j}=(0,B.k)();(0,c.useEffect)(()=>{if(i){if(h)h.handleCursorInsert(i.includes(" ")?`"${i}"`:i);else{let e=(0,$.RT)(i),{command:t=""}=L.Z[e]||{};t&&A(`${t} ${i.includes(" ")?`"${i}"`:i}`)}n(t,"")}},[t,h,n,i]),(0,c.useEffect)(()=>{(0,$.mb)(s).then(()=>{window.Terminal&&w(new window.Terminal(u))})},[s]),(0,c.useEffect)(()=>{if(m&&a&&e.current&&window.FitAddon&&window.LocalEchoController){let t=new window.FitAddon.FitAddon,a=new window.LocalEchoController(void 0,{historySize:1e3});m.loadAddon(a),m.loadAddon(t),m.open(e.current),t.fit(),f(t),g(a),e.current.addEventListener("contextmenu",e=>{(0,$.nK)(e);let t=m.getSelection();t?(navigator.clipboard?.writeText(t),m.clearSelection()):(0,p.P)(a)}),e.current?.closest("section")?.addEventListener("focus",()=>m?.textarea?.focus(K.eS),{passive:!0}),r(!1)}return()=>{m&&o&&m.dispose()}},[o,e,a,r,m]),(0,c.useEffect)(()=>{let e;return m&&h&&(m.textarea?.setAttribute("enterkeyhint","send"),e=m.onKey(({domEvent:{ctrlKey:e,code:t}})=>{e&&"KeyV"===t&&(0,p.P)(h)})),()=>e?.dispose()},[h,m]),(0,c.useEffect)(()=>{if(h&&m&&!v){let e=()=>h.read(`\r
// ${k.current}>`).then(t=>x.current?.(t).then(e));h.println(`${er} [Version ${el()}]`),h.println(`By ${ei.name}. ${es}.`),y?(h.println(`\r
// ${k.current}>${y}\r
// `),h.history.entries=[y],x.current(y).then(e)):e(),M(!0),m.focus(),S(),d(k.current).then(e=>(0,p.JF)(e,h))}},[S,y,h,x,v,d,m]),(0,c.useLayoutEffect)(()=>{t!==j||a||m?.textarea?.focus(K.eS)},[j,t,a,m]),(0,ea.Z)(e.current,S)},ed=a(7443),eu=({id:e})=>(0,i.jsx)(ed.Z,{StyledComponent:s,id:e,useHook:ec})},7443:function(e,t,a){var r=a(85893),i=a(67294),n=a(33333),o=a(45279),s=a(58437);t.Z=(0,i.memo)(({id:e,useHook:t,StyledComponent:a,children:l})=>{let{processes:{[e]:{url:c=""}={}}}=(0,s.z)(),d=(0,i.useRef)(null),[u,m]=(0,i.useState)(!0),w=(0,i.useMemo)(()=>({contain:"strict",visibility:u?"hidden":"visible"}),[u]);return t({containerRef:d,id:e,loading:u,setLoading:m,url:c}),(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsx)(n.default,{}),(0,r.jsx)(a,{ref:d,style:w,...(0,o.Z)({id:e}),children:l})]})})},33333:function(e,t,a){a.r(t);let r=a(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=r},72490:function(e,t,a){var r=a(67294);t.Z=(e,t)=>{let[a,i]=(0,r.useState)();(0,r.useEffect)(()=>{t&&i(new ResizeObserver(t))},[t]),(0,r.useEffect)(()=>(e instanceof HTMLElement&&a?.observe(e),()=>{e instanceof HTMLElement&&a?.unobserve(e)}),[e,a])}},18680:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(10508),i=a(97836);let n={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=(e=i.BQ,t=0,a=0,o="dark")=>(0,r.iv)(["overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:"," ",";}&::-webkit-scrollbar{height:","px;width:","px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",";}&::-webkit-scrollbar-thumb:active{background-color:",";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",";display:block;height:",";&:hover{background-color:",";}&:active{background-color:",";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",";background-position-y:",";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",";}"],n[o].thumb,n[o].track,e,e,n[o].track,n[o].thumb,n[o].thumb,n[o].thumbHover,n[o].active,n[o].track,n[o].track,e?`${e}px`:"initial",n[o].buttonHover,n[o].active,0===t?"center":`${t}px`,0===a?"center":`${a}px`,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",n[o].blendMode)},67881:function(e,t,a){a.r(t),a.d(t,{transcode:function(){return s}});var r=a(1864),i=a(6484),n=a(48764).Buffer;let o=async e=>(window.FFmpeg||await (0,i.mb)(["/Program Files/ffmpeg/ffmpeg.min.js"]),window.FFmpeg&&(window.FFmpegInstance?.exit(),window.FFmpegInstance=window.FFmpeg.createFFmpeg({corePath:`${window.location.origin}/Program Files/ffmpeg/ffmpeg-core.js`,log:!0,logger:({message:t})=>{e?.(t)},mainName:"main"}),await window.FFmpegInstance.load()),window.FFmpegInstance),s=async(e,t,a)=>{let i=await o(a),s=[];return await Promise.all(e.map(async([e,a])=>{let o=(0,r.basename)(e),l=`${(0,r.basename)(e,(0,r.extname)(e))}.${t}`;i.FS("writeFile",o,a),await i.run("-i",o,l),s.push([(0,r.join)((0,r.dirname)(e),l),n.from(i.FS("readFile",l))])})),s}},68673:function(e,t,a){a.r(t),a.d(t,{convert:function(){return o}});var r=a(1864),i=a(6484),n=a(48764).Buffer;let o=async(e,t,a)=>{let o=[];await (0,i.mb)(["/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js"]);let{call:s}=window["wasm-imagemagick"];return await Promise.all(e.map(async([e,i])=>{let l=(0,r.basename)(e),c=`${(0,r.basename)(e,(0,r.extname)(e))}.${t}`,{outputFiles:[d]=[],stderr:u,stdout:m}=await s([{content:i,name:l}],["convert",l,"-verbose",c]),w=[...m,...u].join("\n");w&&a?.(w),o.push([(0,r.join)((0,r.dirname)(e),c),d?.blob?n.from(await d.blob.arrayBuffer()):n.from("")])})),o}},50569:function(e,t,a){a.d(t,{u:function(){return i},w:function(){return n}});let r=async e=>{let{default:t}=await a.e(1855,"high").then(a.bind(a,21855));return t({format:e,locateFile:e=>`System/mediainfo.js/${e}`})},i=async e=>(await r("text")).analyzeData(()=>e.length,()=>e),n=async e=>(await (await r("object")).analyzeData(()=>e.length,()=>e)).media},82883:function(e,t,a){a.d(t,{cM:function(){return c},hZ:function(){return u},VU:function(){return d},Kk:function(){return h},Rx:function(){return p}});var r=a(1864),i=a(67294),n=a(20063),o=JSON.parse('{"I":[".cache",".json"],"K":[".md",".txt",".whtml"]}'),s=a(97836),l=a(6484);let c="/.index/search.lunr.json",d="/System/lunr/lunr.min.js",u={enterKeyHint:"search",inputMode:"search",type:"search",...s.AA},m=Object.create(null),w=[],b=async(e,t)=>{if(window.lunr||await (0,l.mb)([d]),!t&&!m?.search){let e=await fetch(c,s.P8);try{let{paths:t,...a}=JSON.parse(await e.text());m=window.lunr?.Index.load(a),w=t}catch{}}let a=t??m,r=[],i=e.trim().replace(/\./g," ").replace(/\*~\^-\+/g,"");try{r=a.search?.(i),r?.length===0&&(r=a.search?.(`${i.split(" ").join("* ")}*`))}catch{}return r?r.map(e=>({...e,ref:(Object.prototype.hasOwnProperty.call(w,e.ref)?w[e.ref]:e.ref)||""})):[]},f=async(e,t)=>{let a=t?._getFs("/")?.fs,i=a?.getOverlayedFileSystems(),n=i?.writable,s=("function"==typeof n?._cache?.map?.keys&&[...n._cache.map.keys()]||Object.keys(n?._cache?.map||{})||[]).filter(e=>{let t=(0,l.RT)(e);return!!t&&!o.I.includes(t)}),c=await Promise.all(s.map(async t=>{let a=(0,r.basename)(t,(0,r.extname)(t));return{name:a,path:t,text:o.K.includes((0,l.RT)(t))?`${a} ${(await e(t)).toString()}`:a}})),d=window.lunr?.(function(){this.ref("path"),this.field("name"),this.field("text"),c.forEach(e=>this.add(e))});return window.lunr?.Index.load(d.toJSON())},h=async(e,t,a)=>{let r=await b(e),i=await f(t,a);return[...r,...await b(e,i)].sort((e,t)=>t.score-e.score)},p=e=>{let[t,a]=(0,i.useState)([]),{readFile:r,rootFs:o}=(0,n.o)();return(0,i.useEffect)(()=>{(async()=>{e.length>0?(window.lunr||await (0,l.mb)([d]),b(e).then(a),f(r,o).then(t=>b(e,t).then(e=>a(t=>[...t,...e].sort((e,t)=>t.score-e.score))))):a([])})()},[r,o,e]),t}},73751:function(e,t,a){a.d(t,{convertSheet:function(){return o}});var r=a(6484),i=a(48764).Buffer;let n=async()=>(window.XLSX||await (0,r.mb)(["/Program Files/SheetJS/xlsx.full.min.js"]),window.XLSX),o=async(e,t)=>{let a;let o=await n();if("numbers"===t){if(await (0,r.mb)(["/Program Files/SheetJS/xlsx.zahl.js"]),!window.XLSX_ZAHL_PAYLOAD)return i.from("");a=window.XLSX_ZAHL_PAYLOAD}return o.write(o.read(e),{bookType:t,numbers:a,type:"buffer"})}}}]);