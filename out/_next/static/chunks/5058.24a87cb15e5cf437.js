"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5058, 8019],
  {
    8019: function (e, t, n) {
      n.d(t, {
        $z: function () {
          return I;
        },
        AY: function () {
          return y;
        },
        CC: function () {
          return p;
        },
        Iu: function () {
          return S;
        },
        NN: function () {
          return d;
        },
        RO: function () {
          return k;
        },
        WZ: function () {
          return C;
        },
        Z3: function () {
          return w;
        },
        createM3uPlaylist: function () {
          return N;
        },
        g: function () {
          return m;
        },
        mW: function () {
          return _;
        },
        ns: function () {
          return f;
        },
        om: function () {
          return v;
        },
        r$: function () {
          return W;
        },
        tracksFromPlaylist: function () {
          return R;
        },
        uG: function () {
          return L;
        },
        vy: function () {
          return c;
        },
      });
      var r = n(38365),
        i = n(97836),
        a = n(6484);
      let o = new Set(["Flexi - alien fish pond", "Geiss - Spiral Artifact"]),
        s = `${i.Sd}/Documents/Winamp Skins`,
        l = ["localhost", i.PACKAGE_DATA.author.url.replace("https://", "")].includes(window.location.hostname),
        u = (e) => `
  query {
    skins(filter: APPROVED, first: 1, offset: ${e}) {
      nodes {
        download_url
      }
    }
  }
`,
        c = {
          availableSkins: [
            { name: "Aqua X", url: `${s}/Aqua_X.wsz` },
            { name: "Nucleo NLog v2G", url: `${s}/Nucleo_NLog_v102.wsz` },
            ...(l
              ? [
                {
                  defaultName: "Random (Winamp Skin Museum)",
                  loading: !1,
                  get name() {
                    if (this.loading) return this.defaultName;
                    return (
                      (this.loading = !0),
                      fetch("https://api.webamp.org/graphql", { body: JSON.stringify({ query: u(Math.floor(1e3 * Math.random())) }), headers: { "Content-Type": "application/json" }, method: "POST" }).then(
                        async (e) => {
                          let { data: t } = (await e.json()) || {};
                          (this.skinUrl = t?.skins?.nodes?.[0]?.download_url), (this.loading = !1);
                        }
                      ),
                      this.defaultName
                    );
                  },
                  skinUrl: "",
                  get url() {
                    return this.skinUrl || `${s}/base-2.91.wsz`;
                  },
                },
              ]
              : []),
            { name: "SpyAMP Professional Edition v5", url: `${s}/SpyAMP_Professional_Edition_v5.wsz` },
          ],
        },
        h = { height: 116, width: 275 },
        d = "#main-window",
        p = "#playlist-window",
        m = (e, t = "") =>
          e.skinIsLoaded().then(() => {
            t && (0, a.EK)(t);
          }),
        f = (e) => e.store.dispatch({ type: "CLOSE_WINDOW", windowId: "equalizer" }),
        w = (e) => e.store.dispatch({ open: !1, type: "ENABLE_MILKDROP" }),
        y = (e, t) => e.store.dispatch({ data: t, type: "SET_SKIN_DATA" }),
        g = (e, t) => e.store.dispatch({ butterchurn: t, type: "GOT_BUTTERCHURN" }),
        b = (e, t) => e.store.dispatch({ presets: t, type: "GOT_BUTTERCHURN_PRESETS" }),
        E = (e) => {
          let { presetHistory: t = [], presets: n = [] } = e.store.getState()?.milkdrop || {},
            r = Math.floor(Math.random() * n.length),
            i = n[r];
          return !i.name || o.has(i.name) || t.slice(-5).includes(r) ? E(e) : r;
        },
        S = (e) => {
          let t = E(e);
          e.store.dispatch({ addToHistory: !0, index: t, type: "PRESET_REQUESTED" }), e.store.dispatch({ index: t, type: "SELECT_PRESET_AT_INDEX" });
        },
        T = 0,
        x = (e) => {
          window.clearInterval(T),
            (T = window.setInterval(() => {
              e || window.clearInterval(T), S(e);
            }, 2e4));
        },
        v = (e) => {
          let t = e.store.subscribe(() => {
            let { milkdrop: r, windows: i } = e.store.getState();
            i?.genWindows?.milkdrop?.open &&
              !r?.butterchurn &&
              (0, a.mb)(["/Program Files/Webamp/butterchurn.min.js"]).then(() => {
                if (!window.butterchurn?.default) return;
                g(e, window.butterchurn.default);
                let { playlist: r, main: a } = i.genWindows || {},
                  { x: o = 0, y: s = 0 } = (r?.open ? r?.position : a?.position) || {};
                e.store.dispatch({ positions: { milkdrop: { x: o, y: s + h.height } }, type: "UPDATE_WINDOW_POSITIONS" }),
                  t(),
                  e.store.subscribe(() => {
                    let e = [...document.body.children].find((e) => e.classList?.contains("webamp-desktop"));
                    if (e) {
                      let t = document.querySelector("main");
                      t &&
                        ([...t.children].forEach((e) => {
                          e.classList?.contains("webamp-desktop") && e.remove();
                        }),
                          t.append(e));
                    }
                  }),
                  n
                    .e(9986, "high")
                    .then(n.t.bind(n, 36607, 23))
                    .then(({ default: t }) => {
                      b(
                        e,
                        Object.entries(t).map(([e, t]) => ({ name: e, preset: t }))
                      ),
                        S(e),
                        x(e);
                    });
              });
          });
        },
        k = () => document.querySelector("#webamp"),
        C = (e, t) => {
          let { height: n, width: i } = h,
            { x: a, y: o } = t || (0, r.Rf)({ height: 2 * n, width: i });
          e.store.dispatch({ positions: { main: { x: a, y: o }, milkdrop: { x: 0 - i, y: 0 - n }, playlist: { x: a, y: n + o } }, type: "UPDATE_WINDOW_POSITIONS" });
        },
        L = (e, t) => e.store.dispatch({ type: "SET_FOCUSED_WINDOW", window: t }),
        _ = (e) => e.store.dispatch({ type: "SET_FOCUSED_WINDOW", window: "" }),
        I = async (e, t) => {
          let { parseBuffer: r } = await Promise.all([n.e(8090, "high"), n.e(2463, "high"), n.e(4726, "high")]).then(n.bind(n, 52463)),
            {
              common: { album: o = "", artist: s = "", title: l = t },
              format: { duration: u = 0 },
            } = await r(e, { mimeType: i.BD, size: e.length }, { duration: !0, skipCovers: !0, skipPostHeaders: !0 });
          return { blob: (0, a.V4)(e, "audio/mpeg"), duration: Math.floor(u), metaData: { album: o, artist: s, title: l } };
        },
        N = (e) => {
          let t = e.map((e) => {
            let t = e.url
              ? `
${e.url.toString()}`
              : "",
              n = e.defaultName;
            return (
              e.metaData?.artist ? (e.metaData?.title ? (n = `${e.metaData.artist} - ${e.metaData.title}`) : n && (n = `${e.metaData.artist} - ${n}`)) : e.metaData?.title && (n = e.metaData.title),
              t ? `#EXTINF:${e.duration ?? -1},${n || ""}${t}` : ""
            );
          });
          return `${["#EXTM3U", ...t.filter(Boolean)].join("\n")}
`;
        },
        R = async (e, t, r) => {
          let { ASX: i, M3U: a, PLS: o } = await n.e(3454, "high").then(n.t.bind(n, 63454, 23));
          return ({ ".asx": i, ".m3u": a, ".pls": o }[t]?.parse(e).filter(Boolean).slice(0, 1e3) ?? []).map(({ artist: e = "", file: t = "", length: n = 0, title: i = "" }) => {
            let [a, o] = [e.trim(), i.trim()];
            return { duration: n > 0 ? n : 0, metaData: { album: o || r, artist: a, title: o }, url: t };
          });
        },
        D = (e = "") => e.replace(/<!\[CDATA\[|\]\]>/g, ""),
        O = {
          "somafm.com": (e) => async () => {
            let { pathname: t } = new URL(e),
              [n] = t.replace("/", "").split("-"),
              r = await (await fetch(`https://somafm.com/songs/${n}.xml`, { cache: "no-cache", credentials: "omit", keepalive: !1, mode: "cors", referrerPolicy: "no-referrer", window: null })).text(),
              i = new DOMParser().parseFromString(r, "application/xml").querySelector("song"),
              a = i?.querySelector("artist")?.innerHTML,
              o = i?.querySelector("title")?.innerHTML;
            return { artist: D(a), title: D(o) };
          },
        },
        W = (e) => {
          let { host: t } = new URL(e),
            [, n, r] = t.split(".");
          return O[`${n}.${r}`]?.(e);
        };
    },
    65058: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var r = n(85893),
        i = n(1864),
        a = n(67294),
        o = n(8897);
      let s = (0, n(10508).ZP)(o.m.div)(
        ["inset:0;pointer-events:none;position:absolute;z-index:", ";div:first-child{pointer-events:", ";}"],
        ({ $zIndex: e }) => e,
        ({ $minimized: e }) => (e ? "none" : "auto")
      );
      var l = n(8019),
        u = n(45279),
        c = n(23561),
        h = n(20063),
        d = n(58437),
        p = n(37176),
        m = n(76488),
        f = n(97836),
        w = n(6484),
        y = n(48764).Buffer;
      let g = `${f.Tl}/webampSkinData.json`;
      var b = (e) => {
        let { onClose: t, onMinimize: n } = (0, c.Z)(e),
          { setWindowStates: r, windowStates: { [e]: o } = {} } = (0, m.k)(),
          { position: s } = o || {},
          {
            linkElement: b,
            processes: { [e]: E },
            title: S,
          } = (0, d.z)(),
          { closing: T, componentWindow: x } = E || {},
          v = (0, a.useRef)(),
          { createPath: k, deletePath: C, exists: L, readFile: _, mkdirRecursive: I, updateFolder: N, writeFile: R } = (0, h.o)(),
          { onDrop: D } = (0, u.Z)({ id: e }),
          O = (0, a.useRef)(),
          W = (0, a.useRef)(),
          $ = (0, a.useRef)([]),
          P = (0, a.useCallback)(
            (e) => {
              e?.(),
                t(),
                window.setTimeout(() => {
                  $.current.forEach((e) => e()), v.current?.close();
                }, f.jx.WINDOW),
                window.clearInterval(O.current),
                window.clearInterval(W.current);
            },
            [t]
          ),
          z = (0, a.useCallback)(
            (t, { initialSkin: a, initialTracks: o }) => {
              let u = async () => {
                let e = prompt("Enter an Internet location to open here:\nFor example: https://server.com/playlist.m3u");
                if (e) {
                  let t = (0, w.RT)(e);
                  return f.uH.has(t) ? (0, l.tracksFromPlaylist)(await (await fetch(e, f.P8)).text(), t) : [{ duration: 0, url: e }];
                }
                return [];
              },
                c = new window.Webamp({
                  ...l.vy,
                  handleAddUrlEvent: u,
                  handleLoadListEvent: u,
                  handleSaveListEvent: (e) => {
                    k("playlist.m3u", f.Ll, y.from((0, l.createM3uPlaylist)(e))).then((e) => N(f.Ll, e));
                  },
                  initialSkin: a,
                  initialTracks: o,
                }),
                h = () => {
                  let n = (0, l.RO)();
                  if (n) {
                    let r = n.querySelector(l.NN);
                    [r, n.querySelector(l.CC)].forEach((e) => {
                      e?.addEventListener("drop", D), e?.addEventListener("dragover", w.nK);
                    }),
                      E && !x && r && (b(e, "componentWindow", t), b(e, "peekElement", r)),
                      a ||
                      E.url?.endsWith(".wsz") ||
                      L(g).then(async (e) => {
                        e && (0, l.AY)(c, JSON.parse((await _(g)).toString()));
                      }),
                      t.append(n);
                  }
                };
              $.current.push(
                c.onWillClose(P),
                c.onMinimize(() => n()),
                c.onTrackDidChange((t) => {
                  let { milkdrop: n, windows: r } = c.store.getState();
                  if ((r?.genWindows?.milkdrop?.open && n?.butterchurn && (0, l.Iu)(c), window.clearInterval(O.current), t?.url)) {
                    let n = (0, l.r$)(t.url);
                    if (n) {
                      let t = async () => {
                        let { display: { closed: t = !1 } = {}, playlist: { currentTrack: r = -1 } = {}, tracks: i } = c.store.getState() || {};
                        if (t) window.clearInterval(O.current);
                        else if (i[r]) {
                          let t = await n?.();
                          t && (c.store.dispatch({ type: "SET_MEDIA_TAGS", ...i[r], ...t }), S(e, `${t.artist} - ${t.title}`));
                        }
                      };
                      t(), (O.current = window.setInterval(t, 30 * f.i2));
                    } else {
                      let { playlist: { currentTrack: t = -1 } = {}, tracks: n } = c.store.getState() || {},
                        { artist: r = "", title: i = "" } = n?.[t] || {};
                      (i || r) && S(e, i && r ? `${r} - ${i}` : i || r);
                    }
                  } else S(e, p.Z.Webamp.title);
                }),
                c._actionEmitter.on("SET_SKIN_DATA", async ({ data: e }) => {
                  (await L(f.Tl)) || (await I(f.Tl), N((0, i.dirname)(f.Tl))), R(g, JSON.stringify(e), !0), N(f.Tl, (0, i.basename)(g));
                }),
                c._actionEmitter.on("LOAD_DEFAULT_SKIN", () => {
                  C(g);
                }),
                c._actionEmitter.on("UPDATE_WINDOW_POSITIONS", () => {
                  window.clearInterval(W.current),
                    (W.current = window.setTimeout(() => {
                      let t = l.RO()?.querySelector(l.NN),
                        { x: n = 0, y: i = 0 } = t?.getBoundingClientRect() || {};
                      r((t) => ({ ...t, [e]: { position: { x: n, y: i } } }));
                    }, f.jx.WINDOW));
                })
              ),
                a && (0, l.g)(c, a.url),
                c.renderWhenReady(t).then(() => {
                  (0, l.ns)(c), (0, l.Z3)(c), (0, l.om)(c), (0, l.WZ)(c, s), h(), o && c.play();
                }),
                (window.WebampGlobal = c),
                (v.current = c);
            },
            [x, k, C, L, e, b, I, D, n, P, s, E, _, r, S, N, R]
          );
        return (
          (0, a.useEffect)(() => {
            T && P();
          }, [T, P]),
          { initWebamp: z, webampCI: v.current }
        );
      },
        E = n(45032),
        S = n(85738),
        T = ({ id: e }) => {
          let t = (0, a.useRef)(null),
            { readFile: n } = (0, h.o)(),
            { processes: { [e]: { libs: o = [], minimized: u = !1, url: c = "" } = {} } = {}, url: p } = (0, d.z)(),
            [m, y] = (0, a.useState)(c),
            { initWebamp: g, webampCI: T } = b(e),
            x = (0, S.Z)(e, !0),
            v = (0, a.useMemo)(() => ({ onBlurCapture: () => T && (0, l.mW)(T), onFocusCapture: () => T && (0, l.uG)(T, "main") }), [T]),
            { zIndex: k, ...C } = (0, E.Z)(e, v),
            L = (0, a.useCallback)(async () => {
              if (c) {
                let e = (0, w.RT)(c);
                if (f.uH.has(e)) {
                  let t = await (0, l.tracksFromPlaylist)((await n(c)).toString(), e, (0, i.basename)(c, (0, i.extname)(c)));
                  return t.length > 0 ? { initialTracks: t } : {};
                }
                if (".mp3" === e) return { initialTracks: [await (0, l.$z)(await n(c), (0, i.basename)(c))] };
                if (".wsz" === e) return { initialSkin: { url: (0, w.YS)(await n(c)) } };
              }
              return {};
            }, [n, c]),
            _ = (0, a.useCallback)(async () => {
              if (T) {
                let { initialTracks: e, initialSkin: t } = await L();
                e ? T.setTracksToPlay(e) : t && ((0, l.g)(T, t.url), T.setSkinFromUrl(t.url));
              }
            }, [L, T]),
            I = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              t.current &&
                !T &&
                (0, w.mb)(o).then(async () => {
                  window.Webamp && !I.current && ((I.current = !0), g(t.current, await L()));
                });
            }, [L, g, o, T]),
            (0, a.useEffect)(() => {
              c !== m ? (_(), y(c)) : c && (p(e, ""), y(""));
            }, [e, _, m, p, c]),
            (0, r.jsx)(s, { ref: t, $minimized: u, $zIndex: k, ...C, ...x })
          );
        };
    },
    45279: function (e, t, n) {
      var r = n(1864),
        i = n(67294),
        a = n(59746),
        o = n(23736),
        s = n(89670),
        l = n(20063),
        u = n(58437),
        c = n(76488),
        h = n(97836),
        d = n(6484);
      t.Z = ({ callback: e, directory: t = h.Ll, id: n, onDragLeave: p, onDragOver: m, updatePositions: f }) => {
        let { url: w } = (0, u.z)(),
          { iconPositions: y, sortOrders: g, setIconPositions: b } = (0, c.k)(),
          { exists: E, mkdirRecursive: S, updateFolder: T, writeFile: x } = (0, l.o)(),
          v = (0, i.useCallback)(
            async (e, t, i) => {
              if (n) {
                if (t) {
                  let a = (0, r.join)(h.Ll, e);
                  if ((await S(h.Ll), await x(a, t, !0))) return i === s.v.UPDATE_URL && w(n, a), await T(h.Ll, e), (0, r.basename)(a);
                } else i === s.v.UPDATE_URL && w(n, e);
              }
              return "";
            },
            [n, S, T, w, x]
          ),
          { openTransferDialog: k } = (0, a.Z)();
        return {
          onDragLeave: p,
          onDragOver: (e) => {
            m?.(e), (0, d.nK)(e);
          },
          onDrop: (i) => {
            if (!h.my.has((0, d.RT)(t))) {
              if (f && i.target instanceof HTMLElement) {
                let { files: e, text: n } = (0, o.p4)(i);
                if (0 === e.length && "" === n) return;
                let a = { x: i.clientX, y: i.clientY },
                  s = [];
                if (n) {
                  try {
                    s = JSON.parse(n);
                  } catch { }
                  if (!Array.isArray(s)) return;
                  let [e] = s;
                  if (!e || (e.startsWith(t) && (0, r.basename)(e) === (0, r.relative)(t, e))) return;
                  s = s.map((e) => (0, r.basename)(e));
                } else e instanceof FileList ? (s = [...e].map((e) => e.name)) : (s = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                (s = s.map((e) => {
                  if (!y[`${t}/${e}`]) return e;
                  let n = 0,
                    i = "";
                  do (n += 1), (i = `${t}/${(0, r.basename)(e, (0, r.extname)(e))} (${n})${(0, r.extname)(e)}`);
                  while (y[i]);
                  return (0, r.basename)(i);
                })),
                  (0, d.vi)(t, i.target, y, g, a, s, b, E);
              }
              (0, o.WG)(i, e || v, t, k, !!n);
            }
          },
        };
      };
    },
    918: function (e, t, n) {
      n.d(t, {
        BS: function () {
          return o;
        },
        FC: function () {
          return i;
        },
        F_: function () {
          return r;
        },
        wV: function () {
          return a;
        },
      });
      let r = { bottom: !1, bottomLeft: !1, bottomRight: !1, left: !1, right: !1, top: !1, topLeft: !1, topRight: !1 },
        i = { bottom: !0, bottomLeft: !0, bottomRight: !0, left: !0, right: !0, top: !0, topLeft: !0, topRight: !0 },
        a = 30,
        o = 166,
        s = {
          cancel: ".cancel",
          dragHandleClassName: "handle",
          enableUserSelectHack: !1,
          minHeight: `${a}px`,
          minWidth: `${o}px`,
          resizeHandleStyles: {
            bottom: { bottom: "-3px", cursor: "ns-resize", height: "6px" },
            bottomLeft: { bottom: "-3px", cursor: "nesw-resize", height: "12px", left: "-3px", width: "12px" },
            bottomRight: { bottom: "-3px", cursor: "nwse-resize", height: "12px", right: "-3px", width: "12px" },
            left: { cursor: "ew-resize", left: "-3px", width: "6px" },
            right: { cursor: "ew-resize", right: "-3px", width: "6px" },
            top: { cursor: "ns-resize", height: "6px", top: "-3px" },
            topLeft: { cursor: "nwse-resize", height: "12px", left: "-3px", top: "-3px", width: "12px" },
            topRight: { cursor: "nesw-resize", height: "12px", right: "-3px", top: "-3px", width: "12px" },
          },
        };
      t.ZP = s;
    },
    23561: function (e, t, n) {
      var r = n(67294),
        i = n(67318),
        a = n(58437),
        o = n(76488),
        s = n(86178),
        l = n(97836);
      t.Z = (e) => {
        let t = (0, i.Z)(e),
          { setForegroundId: n, removeFromStack: u } = (0, o.k)(),
          { closeWithTransition: c, maximize: h, minimize: d } = (0, a.z)(),
          p = (0, s.R)(),
          m = (0, r.useCallback)(() => {
            d(e), n(t);
          }, [e, d, t, n]),
          f = (0, r.useCallback)(() => {
            h(e), p.current[e]?.componentWindow?.focus(l.eS);
          }, [e, h, p]);
        return {
          onClose: (0, r.useCallback)(() => {
            u(e), c(e), n(t);
          }, [c, e, t, u, n]),
          onMaximize: f,
          onMinimize: m,
        };
      };
    },
    38365: function (e, t, n) {
      n.d(t, {
        Rf: function () {
          return s;
        },
        b$: function () {
          return c;
        },
        hu: function () {
          return o;
        },
        ix: function () {
          return u;
        },
        mZ: function () {
          return l;
        },
      });
      var r = n(918),
        i = n(97836),
        a = n(6484);
      let o = (e, t, n = [], r = 0) => {
        let [o] = e.split(i.CC),
          s = `${o}${i.CC}`,
          l = n.find((e) => e.startsWith(s)) || "",
          { componentWindow: u } = t?.[l] || {},
          { x: c = 0, y: h = 0, width: d = 0, height: p = 0 } = u?.getBoundingClientRect() || {};
        return !(c + r + d > (0, a.E9)() || h + r + p > (0, a.sI)()) && (c || h) ? { x: c + r, y: h + r } : void 0;
      },
        s = ({ height: e, width: t }) => {
          let [n, r] = [(0, a.sI)(), (0, a.E9)()];
          return { x: Math.floor(r / 2 - (0, a.Vy)(t) / 2), y: Math.floor((n - i.bK) / 2 - (0, a.Vy)(e) / 2) };
        },
        l = { BOTTOM: 15, LEFT: 150, RIGHT: 50, TOP: 15 },
        u = (e, t, n = !1) => {
          let { position: r, size: i } = e || {},
            { x: o = 0, y: s = 0 } = r || {},
            { height: u = 0, width: c = 0 } = i || {};
          return n ? o + l.RIGHT > t.x || o + (0, a.Vy)(c) - l.LEFT < 0 || s + l.BOTTOM > t.y || s + l.TOP < 0 : o < 0 || s < 0 || o + (0, a.Vy)(c) > t.x || s + (0, a.Vy)(u) > t.y;
        },
        c = (e, t) => {
          let n = Number(e.height),
            o = Number(e.width),
            [s, l] = [(0, a.sI)(), (0, a.E9)()],
            u = s - i.bK,
            c = Math.max(r.wV, Math.min(n, u)),
            h = Math.max(r.BS, Math.min(o, l));
          if (!t) return { height: c, width: h };
          let d = n === c,
            p = o === h;
          return d || p
            ? d
              ? p
                ? { height: c, width: h }
                : { height: Math.round(c / (o / h)), width: h }
              : { height: c, width: Math.round(h / (n / c)) }
            : n > o
              ? { height: c, width: Math.round(h / (u / c)) }
              : { height: Math.round(c / (l / h)), width: h };
        };
    },
    45032: function (e, t, n) {
      var r = n(67294),
        i = n(58437),
        a = n(76488),
        o = n(97836);
      t.Z = (e, t) => {
        let { foregroundId: n, prependToStack: s, setForegroundId: l, stackOrder: u = [] } = (0, a.k)(),
          {
            processes: { [e]: c },
          } = (0, i.z)(),
          { closing: h, componentWindow: d, minimized: p, taskbarEntry: m, url: f } = c || {},
          w = (0, r.useMemo)(() => u.length + (p ? 1 : -u.indexOf(e)) + 1, [e, p, u]),
          y = (0, r.useCallback)(
            (n) => {
              let { relatedTarget: r } = n,
                i = r === m,
                a = r && m?.previousSibling?.contains(r),
                s = r && d?.contains(r);
              l((r) => (r !== e || i || s ? r : (a ? d?.focus(o.eS) : t?.onBlurCapture?.(n), a ? r : "")));
            },
            [t, d, e, l, m]
          ),
          g = (0, r.useCallback)(
            (n) => {
              let { relatedTarget: r } = n || {};
              d?.contains(document.activeElement) ? (s(e), l(e)) : (r && document.activeElement !== m) || (d?.focus(o.eS), t?.onFocusCapture?.(n));
            },
            [t, d, e, s, l, m]
          );
        return (
          (0, r.useLayoutEffect)(() => {
            e === n && g();
          }, [n, e, g]),
          (0, r.useLayoutEffect)(() => {
            !d || h || p || l(e);
          }, [h, d, e, p, l, f]),
          (0, r.useMemo)(() => ({ onBlurCapture: y, onClickCapture: g, onFocusCapture: g, zIndex: w, ...o.LL }), [g, y, w])
        );
      };
    },
    67318: function (e, t, n) {
      var r = n(58437),
        i = n(76488);
      t.Z = (e) => {
        let { stackOrder: t = [] } = (0, i.k)(),
          { processes: n } = (0, r.z)();
        return t.find((t) => t !== e && !n?.[t]?.minimized) || "";
      };
    },
    85738: function (e, t, n) {
      var r = n(67294),
        i = n(58437),
        a = n(97836),
        o = n(6484);
      let s = { height: "inherit", opacity: 1, scale: 1, width: "inherit" },
        l = { opacity: 0, scale: 0.95 },
        u = { ...l, height: "inherit", width: "inherit" },
        c = { ...u, scale: 1 },
        h = { opacity: 1, scale: 1 },
        d = { opacity: 0, scale: 0.7 },
        p = () => ({ height: (0, o.sI)() - a.bK, width: (0, o.E9)() });
      t.Z = (e, t = !1) => {
        let { processes: { [e]: n } = {} } = (0, i.z)(),
          { closing: o, componentWindow: m, maximized: f, minimized: w, taskbarEntry: y } = n || {},
          [g, b] = (0, r.useState)(Object.create(null)),
          [E, S] = (0, r.useState)(Object.create(null));
        return (
          (0, r.useLayoutEffect)(() => {
            if (!m || o) return;
            let { x: e = 0, y: t = 0 } = m.getBoundingClientRect();
            b({ ...h, ...p(), x: 0 - e, y: 0 - t });
          }, [o, m, f]),
          (0, r.useLayoutEffect)(() => {
            if (!y || !m || o) return;
            let { height: e = 0, width: t = 0, x: n = 0, y: r = 0 } = y.getBoundingClientRect(),
              { height: i = 0, width: a = 0, x: s = 0, y: l = 0 } = m.getBoundingClientRect(),
              u = Math.round(n - s - a / 2 + t / 2),
              c = Math.round(r - l - i / 2 + e / 2);
            (0 === u && 0 === c) || S({ ...d, x: u, y: c });
          }, [o, m, w, y]),
          (0, r.useEffect)(() => {
            let e = () => {
              f && b((e) => ({ ...e, ...p() }));
            };
            return window.addEventListener("resize", e, { passive: !0 }), () => window.removeEventListener("resize", e);
          }, [f]),
          {
            animate: (w ? "minimize" : "") || (!o && f ? "maximize" : "") || "active",
            exit: "exit",
            initial: "initial",
            transition: { duration: a.Nb.WINDOW },
            variants: { active: s, exit: l, initial: t ? c : u, maximize: g, minimize: E },
          }
        );
      };
    },
  },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5058,8019],{8019:function(e,t,n){n.d(t,{$z:function(){return I},AY:function(){return y},CC:function(){return p},Iu:function(){return S},NN:function(){return d},RO:function(){return k},WZ:function(){return C},Z3:function(){return w},createM3uPlaylist:function(){return N},g:function(){return m},mW:function(){return _},ns:function(){return f},om:function(){return v},r$:function(){return W},tracksFromPlaylist:function(){return R},uG:function(){return L},vy:function(){return c}});var r=n(38365),i=n(97836),a=n(6484);let o=new Set(["Flexi - alien fish pond","Geiss - Spiral Artifact"]),s=`${i.Sd}/Documents/Winamp Skins`,l=["localhost",i.PACKAGE_DATA.author.url.replace("https://","")].includes(window.location.hostname),u=e=>`
//   query {
//     skins(filter: APPROVED, first: 1, offset: ${e}) {
//       nodes {
//         download_url
//       }
//     }
//   }
// `,c={availableSkins:[{name:"Aqua X",url:`${s}/Aqua_X.wsz`},{name:"Nucleo NLog v2G",url:`${s}/Nucleo_NLog_v102.wsz`},...l?[{defaultName:"Random (Winamp Skin Museum)",loading:!1,get name(){if(this.loading)return this.defaultName;return this.loading=!0,fetch("https://api.webamp.org/graphql",{body:JSON.stringify({query:u(Math.floor(1e3*Math.random()))}),headers:{"Content-Type":"application/json"},method:"POST"}).then(async e=>{let{data:t}=await e.json()||{};this.skinUrl=t?.skins?.nodes?.[0]?.download_url,this.loading=!1}),this.defaultName},skinUrl:"",get url(){return this.skinUrl||`${s}/base-2.91.wsz`}}]:[],{name:"SpyAMP Professional Edition v5",url:`${s}/SpyAMP_Professional_Edition_v5.wsz`}]},h={height:116,width:275},d="#main-window",p="#playlist-window",m=(e,t="")=>e.skinIsLoaded().then(()=>{t&&(0,a.EK)(t)}),f=e=>e.store.dispatch({type:"CLOSE_WINDOW",windowId:"equalizer"}),w=e=>e.store.dispatch({open:!1,type:"ENABLE_MILKDROP"}),y=(e,t)=>e.store.dispatch({data:t,type:"SET_SKIN_DATA"}),g=(e,t)=>e.store.dispatch({butterchurn:t,type:"GOT_BUTTERCHURN"}),b=(e,t)=>e.store.dispatch({presets:t,type:"GOT_BUTTERCHURN_PRESETS"}),E=e=>{let{presetHistory:t=[],presets:n=[]}=e.store.getState()?.milkdrop||{},r=Math.floor(Math.random()*n.length),i=n[r];return!i.name||o.has(i.name)||t.slice(-5).includes(r)?E(e):r},S=e=>{let t=E(e);e.store.dispatch({addToHistory:!0,index:t,type:"PRESET_REQUESTED"}),e.store.dispatch({index:t,type:"SELECT_PRESET_AT_INDEX"})},T=0,x=e=>{window.clearInterval(T),T=window.setInterval(()=>{e||window.clearInterval(T),S(e)},2e4)},v=e=>{let t=e.store.subscribe(()=>{let{milkdrop:r,windows:i}=e.store.getState();i?.genWindows?.milkdrop?.open&&!r?.butterchurn&&(0,a.mb)(["/Program Files/Webamp/butterchurn.min.js"]).then(()=>{if(!window.butterchurn?.default)return;g(e,window.butterchurn.default);let{playlist:r,main:a}=i.genWindows||{},{x:o=0,y:s=0}=(r?.open?r?.position:a?.position)||{};e.store.dispatch({positions:{milkdrop:{x:o,y:s+h.height}},type:"UPDATE_WINDOW_POSITIONS"}),t(),e.store.subscribe(()=>{let e=[...document.body.children].find(e=>e.classList?.contains("webamp-desktop"));if(e){let t=document.querySelector("main");t&&([...t.children].forEach(e=>{e.classList?.contains("webamp-desktop")&&e.remove()}),t.append(e))}}),n.e(9986,"high").then(n.t.bind(n,36607,23)).then(({default:t})=>{b(e,Object.entries(t).map(([e,t])=>({name:e,preset:t}))),S(e),x(e)})})})},k=()=>document.querySelector("#webamp"),C=(e,t)=>{let{height:n,width:i}=h,{x:a,y:o}=t||(0,r.Rf)({height:2*n,width:i});e.store.dispatch({positions:{main:{x:a,y:o},milkdrop:{x:0-i,y:0-n},playlist:{x:a,y:n+o}},type:"UPDATE_WINDOW_POSITIONS"})},L=(e,t)=>e.store.dispatch({type:"SET_FOCUSED_WINDOW",window:t}),_=e=>e.store.dispatch({type:"SET_FOCUSED_WINDOW",window:""}),I=async(e,t)=>{let{parseBuffer:r}=await Promise.all([n.e(8090,"high"),n.e(2463,"high"),n.e(4726,"high")]).then(n.bind(n,52463)),{common:{album:o="",artist:s="",title:l=t},format:{duration:u=0}}=await r(e,{mimeType:i.BD,size:e.length},{duration:!0,skipCovers:!0,skipPostHeaders:!0});return{blob:(0,a.V4)(e,"audio/mpeg"),duration:Math.floor(u),metaData:{album:o,artist:s,title:l}}},N=e=>{let t=e.map(e=>{let t=e.url?`
// ${e.url.toString()}`:"",n=e.defaultName;return e.metaData?.artist?e.metaData?.title?n=`${e.metaData.artist} - ${e.metaData.title}`:n&&(n=`${e.metaData.artist} - ${n}`):e.metaData?.title&&(n=e.metaData.title),t?`#EXTINF:${e.duration??-1},${n||""}${t}`:""});return`${["#EXTM3U",...t.filter(Boolean)].join("\n")}
// `},R=async(e,t,r)=>{let{ASX:i,M3U:a,PLS:o}=await n.e(3454,"high").then(n.t.bind(n,63454,23));return(({".asx":i,".m3u":a,".pls":o})[t]?.parse(e).filter(Boolean).slice(0,1e3)??[]).map(({artist:e="",file:t="",length:n=0,title:i=""})=>{let[a,o]=[e.trim(),i.trim()];return{duration:n>0?n:0,metaData:{album:o||r,artist:a,title:o},url:t}})},D=(e="")=>e.replace(/<!\[CDATA\[|\]\]>/g,""),O={"somafm.com":e=>async()=>{let{pathname:t}=new URL(e),[n]=t.replace("/","").split("-"),r=await (await fetch(`https://somafm.com/songs/${n}.xml`,{cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null})).text(),i=new DOMParser().parseFromString(r,"application/xml").querySelector("song"),a=i?.querySelector("artist")?.innerHTML,o=i?.querySelector("title")?.innerHTML;return{artist:D(a),title:D(o)}}},W=e=>{let{host:t}=new URL(e),[,n,r]=t.split(".");return O[`${n}.${r}`]?.(e)}},65058:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(85893),i=n(1864),a=n(67294),o=n(8897);let s=(0,n(10508).ZP)(o.m.div)(["inset:0;pointer-events:none;position:absolute;z-index:",";div:first-child{pointer-events:",";}"],({$zIndex:e})=>e,({$minimized:e})=>e?"none":"auto");var l=n(8019),u=n(45279),c=n(23561),h=n(20063),d=n(58437),p=n(37176),m=n(76488),f=n(97836),w=n(6484),y=n(48764).Buffer;let g=`${f.Tl}/webampSkinData.json`;var b=e=>{let{onClose:t,onMinimize:n}=(0,c.Z)(e),{setWindowStates:r,windowStates:{[e]:o}={}}=(0,m.k)(),{position:s}=o||{},{linkElement:b,processes:{[e]:E},title:S}=(0,d.z)(),{closing:T,componentWindow:x}=E||{},v=(0,a.useRef)(),{createPath:k,deletePath:C,exists:L,readFile:_,mkdirRecursive:I,updateFolder:N,writeFile:R}=(0,h.o)(),{onDrop:D}=(0,u.Z)({id:e}),O=(0,a.useRef)(),W=(0,a.useRef)(),$=(0,a.useRef)([]),P=(0,a.useCallback)(e=>{e?.(),t(),window.setTimeout(()=>{$.current.forEach(e=>e()),v.current?.close()},f.jx.WINDOW),window.clearInterval(O.current),window.clearInterval(W.current)},[t]),z=(0,a.useCallback)((t,{initialSkin:a,initialTracks:o})=>{let u=async()=>{let e=prompt("Enter an Internet location to open here:\nFor example: https://server.com/playlist.m3u");if(e){let t=(0,w.RT)(e);return f.uH.has(t)?(0,l.tracksFromPlaylist)(await (await fetch(e,f.P8)).text(),t):[{duration:0,url:e}]}return[]},c=new window.Webamp({...l.vy,handleAddUrlEvent:u,handleLoadListEvent:u,handleSaveListEvent:e=>{k("playlist.m3u",f.Ll,y.from((0,l.createM3uPlaylist)(e))).then(e=>N(f.Ll,e))},initialSkin:a,initialTracks:o}),h=()=>{let n=(0,l.RO)();if(n){let r=n.querySelector(l.NN);[r,n.querySelector(l.CC)].forEach(e=>{e?.addEventListener("drop",D),e?.addEventListener("dragover",w.nK)}),E&&!x&&r&&(b(e,"componentWindow",t),b(e,"peekElement",r)),a||E.url?.endsWith(".wsz")||L(g).then(async e=>{e&&(0,l.AY)(c,JSON.parse((await _(g)).toString()))}),t.append(n)}};$.current.push(c.onWillClose(P),c.onMinimize(()=>n()),c.onTrackDidChange(t=>{let{milkdrop:n,windows:r}=c.store.getState();if(r?.genWindows?.milkdrop?.open&&n?.butterchurn&&(0,l.Iu)(c),window.clearInterval(O.current),t?.url){let n=(0,l.r$)(t.url);if(n){let t=async()=>{let{display:{closed:t=!1}={},playlist:{currentTrack:r=-1}={},tracks:i}=c.store.getState()||{};if(t)window.clearInterval(O.current);else if(i[r]){let t=await n?.();t&&(c.store.dispatch({type:"SET_MEDIA_TAGS",...i[r],...t}),S(e,`${t.artist} - ${t.title}`))}};t(),O.current=window.setInterval(t,30*f.i2)}else{let{playlist:{currentTrack:t=-1}={},tracks:n}=c.store.getState()||{},{artist:r="",title:i=""}=n?.[t]||{};(i||r)&&S(e,i&&r?`${r} - ${i}`:i||r)}}else S(e,p.Z.Webamp.title)}),c._actionEmitter.on("SET_SKIN_DATA",async({data:e})=>{await L(f.Tl)||(await I(f.Tl),N((0,i.dirname)(f.Tl))),R(g,JSON.stringify(e),!0),N(f.Tl,(0,i.basename)(g))}),c._actionEmitter.on("LOAD_DEFAULT_SKIN",()=>{C(g)}),c._actionEmitter.on("UPDATE_WINDOW_POSITIONS",()=>{window.clearInterval(W.current),W.current=window.setTimeout(()=>{let t=l.RO()?.querySelector(l.NN),{x:n=0,y:i=0}=t?.getBoundingClientRect()||{};r(t=>({...t,[e]:{position:{x:n,y:i}}}))},f.jx.WINDOW)})),a&&(0,l.g)(c,a.url),c.renderWhenReady(t).then(()=>{(0,l.ns)(c),(0,l.Z3)(c),(0,l.om)(c),(0,l.WZ)(c,s),h(),o&&c.play()}),window.WebampGlobal=c,v.current=c},[x,k,C,L,e,b,I,D,n,P,s,E,_,r,S,N,R]);return(0,a.useEffect)(()=>{T&&P()},[T,P]),{initWebamp:z,webampCI:v.current}},E=n(45032),S=n(85738),T=({id:e})=>{let t=(0,a.useRef)(null),{readFile:n}=(0,h.o)(),{processes:{[e]:{libs:o=[],minimized:u=!1,url:c=""}={}}={},url:p}=(0,d.z)(),[m,y]=(0,a.useState)(c),{initWebamp:g,webampCI:T}=b(e),x=(0,S.Z)(e,!0),v=(0,a.useMemo)(()=>({onBlurCapture:()=>T&&(0,l.mW)(T),onFocusCapture:()=>T&&(0,l.uG)(T,"main")}),[T]),{zIndex:k,...C}=(0,E.Z)(e,v),L=(0,a.useCallback)(async()=>{if(c){let e=(0,w.RT)(c);if(f.uH.has(e)){let t=await (0,l.tracksFromPlaylist)((await n(c)).toString(),e,(0,i.basename)(c,(0,i.extname)(c)));return t.length>0?{initialTracks:t}:{}}if(".mp3"===e)return{initialTracks:[await (0,l.$z)(await n(c),(0,i.basename)(c))]};if(".wsz"===e)return{initialSkin:{url:(0,w.YS)(await n(c))}}}return{}},[n,c]),_=(0,a.useCallback)(async()=>{if(T){let{initialTracks:e,initialSkin:t}=await L();e?T.setTracksToPlay(e):t&&((0,l.g)(T,t.url),T.setSkinFromUrl(t.url))}},[L,T]),I=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{t.current&&!T&&(0,w.mb)(o).then(async()=>{window.Webamp&&!I.current&&(I.current=!0,g(t.current,await L()))})},[L,g,o,T]),(0,a.useEffect)(()=>{c!==m?(_(),y(c)):c&&(p(e,""),y(""))},[e,_,m,p,c]),(0,r.jsx)(s,{ref:t,$minimized:u,$zIndex:k,...C,...x})}},45279:function(e,t,n){var r=n(1864),i=n(67294),a=n(59746),o=n(23736),s=n(89670),l=n(20063),u=n(58437),c=n(76488),h=n(97836),d=n(6484);t.Z=({callback:e,directory:t=h.Ll,id:n,onDragLeave:p,onDragOver:m,updatePositions:f})=>{let{url:w}=(0,u.z)(),{iconPositions:y,sortOrders:g,setIconPositions:b}=(0,c.k)(),{exists:E,mkdirRecursive:S,updateFolder:T,writeFile:x}=(0,l.o)(),v=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let a=(0,r.join)(h.Ll,e);if(await S(h.Ll),await x(a,t,!0))return i===s.v.UPDATE_URL&&w(n,a),await T(h.Ll,e),(0,r.basename)(a)}else i===s.v.UPDATE_URL&&w(n,e)}return""},[n,S,T,w,x]),{openTransferDialog:k}=(0,a.Z)();return{onDragLeave:p,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:i=>{if(!h.my.has((0,d.RT)(t))){if(f&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,o.p4)(i);if(0===e.length&&""===n)return;let a={x:i.clientX,y:i.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;s=s.map(e=>(0,r.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=s.map(e=>{if(!y[`${t}/${e}`])return e;let n=0,i="";do n+=1,i=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${n})${(0,r.extname)(e)}`;while(y[i]);return(0,r.basename)(i)}),(0,d.vi)(t,i.target,y,g,a,s,b,E)}(0,o.WG)(i,e||v,t,k,!!n)}}}}},918:function(e,t,n){n.d(t,{BS:function(){return o},FC:function(){return i},F_:function(){return r},wV:function(){return a}});let r={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},a=30,o=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${a}px`,minWidth:`${o}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},23561:function(e,t,n){var r=n(67294),i=n(67318),a=n(58437),o=n(76488),s=n(86178),l=n(97836);t.Z=e=>{let t=(0,i.Z)(e),{setForegroundId:n,removeFromStack:u}=(0,o.k)(),{closeWithTransition:c,maximize:h,minimize:d}=(0,a.z)(),p=(0,s.R)(),m=(0,r.useCallback)(()=>{d(e),n(t)},[e,d,t,n]),f=(0,r.useCallback)(()=>{h(e),p.current[e]?.componentWindow?.focus(l.eS)},[e,h,p]);return{onClose:(0,r.useCallback)(()=>{u(e),c(e),n(t)},[c,e,t,u,n]),onMaximize:f,onMinimize:m}}},38365:function(e,t,n){n.d(t,{Rf:function(){return s},b$:function(){return c},hu:function(){return o},ix:function(){return u},mZ:function(){return l}});var r=n(918),i=n(97836),a=n(6484);let o=(e,t,n=[],r=0)=>{let[o]=e.split(i.CC),s=`${o}${i.CC}`,l=n.find(e=>e.startsWith(s))||"",{componentWindow:u}=t?.[l]||{},{x:c=0,y:h=0,width:d=0,height:p=0}=u?.getBoundingClientRect()||{};return!(c+r+d>(0,a.E9)()||h+r+p>(0,a.sI)())&&(c||h)?{x:c+r,y:h+r}:void 0},s=({height:e,width:t})=>{let[n,r]=[(0,a.sI)(),(0,a.E9)()];return{x:Math.floor(r/2-(0,a.Vy)(t)/2),y:Math.floor((n-i.bK)/2-(0,a.Vy)(e)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},u=(e,t,n=!1)=>{let{position:r,size:i}=e||{},{x:o=0,y:s=0}=r||{},{height:u=0,width:c=0}=i||{};return n?o+l.RIGHT>t.x||o+(0,a.Vy)(c)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:o<0||s<0||o+(0,a.Vy)(c)>t.x||s+(0,a.Vy)(u)>t.y},c=(e,t)=>{let n=Number(e.height),o=Number(e.width),[s,l]=[(0,a.sI)(),(0,a.E9)()],u=s-i.bK,c=Math.max(r.wV,Math.min(n,u)),h=Math.max(r.BS,Math.min(o,l));if(!t)return{height:c,width:h};let d=n===c,p=o===h;return d||p?d?p?{height:c,width:h}:{height:Math.round(c/(o/h)),width:h}:{height:c,width:Math.round(h/(n/c))}:n>o?{height:c,width:Math.round(h/(u/c))}:{height:Math.round(c/(l/h)),width:h}}},45032:function(e,t,n){var r=n(67294),i=n(58437),a=n(76488),o=n(97836);t.Z=(e,t)=>{let{foregroundId:n,prependToStack:s,setForegroundId:l,stackOrder:u=[]}=(0,a.k)(),{processes:{[e]:c}}=(0,i.z)(),{closing:h,componentWindow:d,minimized:p,taskbarEntry:m,url:f}=c||{},w=(0,r.useMemo)(()=>u.length+(p?1:-u.indexOf(e))+1,[e,p,u]),y=(0,r.useCallback)(n=>{let{relatedTarget:r}=n,i=r===m,a=r&&m?.previousSibling?.contains(r),s=r&&d?.contains(r);l(r=>r!==e||i||s?r:(a?d?.focus(o.eS):t?.onBlurCapture?.(n),a?r:""))},[t,d,e,l,m]),g=(0,r.useCallback)(n=>{let{relatedTarget:r}=n||{};d?.contains(document.activeElement)?(s(e),l(e)):r&&document.activeElement!==m||(d?.focus(o.eS),t?.onFocusCapture?.(n))},[t,d,e,s,l,m]);return(0,r.useLayoutEffect)(()=>{e===n&&g()},[n,e,g]),(0,r.useLayoutEffect)(()=>{!d||h||p||l(e)},[h,d,e,p,l,f]),(0,r.useMemo)(()=>({onBlurCapture:y,onClickCapture:g,onFocusCapture:g,zIndex:w,...o.LL}),[g,y,w])}},67318:function(e,t,n){var r=n(58437),i=n(76488);t.Z=e=>{let{stackOrder:t=[]}=(0,i.k)(),{processes:n}=(0,r.z)();return t.find(t=>t!==e&&!n?.[t]?.minimized)||""}},85738:function(e,t,n){var r=n(67294),i=n(58437),a=n(97836),o=n(6484);let s={height:"inherit",opacity:1,scale:1,width:"inherit"},l={opacity:0,scale:.95},u={...l,height:"inherit",width:"inherit"},c={...u,scale:1},h={opacity:1,scale:1},d={opacity:0,scale:.7},p=()=>({height:(0,o.sI)()-a.bK,width:(0,o.E9)()});t.Z=(e,t=!1)=>{let{processes:{[e]:n}={}}=(0,i.z)(),{closing:o,componentWindow:m,maximized:f,minimized:w,taskbarEntry:y}=n||{},[g,b]=(0,r.useState)(Object.create(null)),[E,S]=(0,r.useState)(Object.create(null));return(0,r.useLayoutEffect)(()=>{if(!m||o)return;let{x:e=0,y:t=0}=m.getBoundingClientRect();b({...h,...p(),x:0-e,y:0-t})},[o,m,f]),(0,r.useLayoutEffect)(()=>{if(!y||!m||o)return;let{height:e=0,width:t=0,x:n=0,y:r=0}=y.getBoundingClientRect(),{height:i=0,width:a=0,x:s=0,y:l=0}=m.getBoundingClientRect(),u=Math.round(n-s-a/2+t/2),c=Math.round(r-l-i/2+e/2);0===u&&0===c||S({...d,x:u,y:c})},[o,m,w,y]),(0,r.useEffect)(()=>{let e=()=>{f&&b(e=>({...e,...p()}))};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[f]),{animate:(w?"minimize":"")||(!o&&f?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:a.Nb.WINDOW},variants:{active:s,exit:l,initial:t?c:u,maximize:g,minimize:E}}}}}]);