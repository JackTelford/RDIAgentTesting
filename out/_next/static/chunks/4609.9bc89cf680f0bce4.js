"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4609],
    {
        14609: function (e, t, r) {
            r.d(t, {
                decodeImageToBuffer: function () {
                    return p;
                },
                getFirstAniImage: function () {
                    return d;
                },
                getLargestIcon: function () {
                    return m;
                },
            });
            var n = r(97836),
                a = r(48764).Buffer;
            function s(e, t = []) {
                let { length: r } = t,
                    n = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)].concat(t);
                return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, 255 & r].concat(
                    n,
                    (function (e) {
                        let t = [],
                            r = 0;
                        for (let e = 0; e < 256; ++e)
                            (r =
                                1 &
                                    (r =
                                        1 &
                                            (r =
                                                1 &
                                                    (r =
                                                        1 & (r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = e) ? 3988292384 ^ (r >>> 1) : r >>> 1) ? 3988292384 ^ (r >>> 1) : r >>> 1) ? 3988292384 ^ (r >>> 1) : r >>> 1) ? 3988292384 ^ (r >>> 1) : r >>> 1)
                                                            ? 3988292384 ^ (r >>> 1)
                                                            : r >>> 1)
                                                    ? 3988292384 ^ (r >>> 1)
                                                    : r >>> 1)
                                            ? 3988292384 ^ (r >>> 1)
                                            : r >>> 1)
                                    ? 3988292384 ^ (r >>> 1)
                                    : r >>> 1),
                                (t[e] = r);
                        for (let n of ((r = -1), e)) r = (r >>> 8) ^ t[(r ^ n) & 255];
                        return [((r ^= -1) >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, 255 & r];
                    })(n)
                );
            }
            let i = (e) =>
                a.from(
                    new Uint8Array(
                        (function (e) {
                            if (e.length < 22 || 113 !== e[0] || 111 !== e[1] || 105 !== e[2] || 102 !== e[3]) return;
                            let t = (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
                                r = e[12],
                                n = e[13];
                            if (3 !== r && 4 !== r && 1 !== n) return;
                            let a = e.length - 8,
                                i = [],
                                u = Array.from({ length: 64 }).fill(0),
                                c = 255,
                                l = 14;
                            for (; l < a;) {
                                let t = e[l],
                                    r = t >> 6;
                                if (255 === t) {
                                    let t = e[l + 1],
                                        r = e[l + 2],
                                        n = e[l + 3],
                                        a = e[l + 4];
                                    (l += 5), (c = (t << 24) | (r << 16) | (n << 8) | a), (u[(3 * t + 5 * r + 7 * n + 11 * a) % 64] = c), i.push(c);
                                } else if (254 === t) {
                                    let t = e[l + 1],
                                        r = e[l + 2],
                                        n = e[l + 3],
                                        a = 255 & c;
                                    (l += 4), (c = (t << 24) | (r << 16) | (n << 8) | a), (u[(3 * t + 5 * r + 7 * n + 11 * a) % 64] = c), i.push(c);
                                } else if (0 === r) {
                                    if (0 === e[l] && 0 === e[l + 1] && 0 === e[l + 2] && 0 === e[l + 3] && 0 === e[l + 4] && 0 === e[l + 5] && 0 === e[l + 6] && 1 === e[l + 7]) break;
                                    (l += 1), (c = u[t]), i.push(c);
                                } else if (1 === r) {
                                    let e = (((c >> 24) & 255) + (((t >> 4) & 3) - 2)) & 255,
                                        r = (((c >> 16) & 255) + (((t >> 2) & 3) - 2)) & 255,
                                        n = (((c >> 8) & 255) + ((3 & t) - 2)) & 255,
                                        a = 255 & c;
                                    (l += 1), (c = (e << 24) | (r << 16) | (n << 8) | a), (u[(3 * e + 5 * r + 7 * n + 11 * a) % 64] = c), i.push(c);
                                } else if (2 === r) {
                                    let r = e[l + 1],
                                        n = ((63 & t) - 32) & 255,
                                        a = (((r >> 4) & 15) - 8 + n) & 255,
                                        s = ((15 & r) - 8 + n) & 255,
                                        o = (((c >> 24) & 255) + a) & 255,
                                        h = (((c >> 16) & 255) + n) & 255,
                                        f = (((c >> 8) & 255) + s) & 255,
                                        d = 255 & c;
                                    (l += 2), (c = (o << 24) | (h << 16) | (f << 8) | d), (u[(3 * o + 5 * h + 7 * f + 11 * d) % 64] = c), i.push(c);
                                } else {
                                    for (let e = (63 & t) + 1; e > 0; --e) i.push(c);
                                    l += 1;
                                }
                            }
                            return (function (e, t, r) {
                                let n = [],
                                    a = [120, 1],
                                    i = 1 + t * r,
                                    u = 65535 ^ i;
                                for (let s = 0; e.length != s; s += t) {
                                    let c = s + t;
                                    a.push(c === e.length ? 1 : 0, 255 & i, (i >> 8) & 255, 255 & u, (u >> 8) & 255), n.push(1), a.push(0);
                                    for (let t = s; c !== t; ++t) {
                                        let s = e[t];
                                        n.push((s >> 24) & 255), a.push((s >> 24) & 255), n.push((s >> 16) & 255), a.push((s >> 16) & 255), n.push((s >> 8) & 255), a.push((s >> 8) & 255), 4 === r && (n.push(255 & s), a.push(255 & s));
                                    }
                                }
                                let c = e.length / t;
                                return [137, 80, 78, 71, 13, 10, 26, 10].concat(
                                    s("IHDR", [(t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, 255 & t, (c >> 24) & 255, (c >> 16) & 255, (c >> 8) & 255, 255 & c, 8, 3 === r ? 2 : 6, 0, 0, 0]),
                                    s(
                                        "IDAT",
                                        a.concat(
                                            (function (e) {
                                                let t = 0,
                                                    r = 0;
                                                for (let n of e) r = (r + (t = (t + n) % 65521)) % 65521;
                                                return [r >> 8, 255 & r, t >> 8, 255 & t];
                                            })(n)
                                        )
                                    ),
                                    s("IEND")
                                );
                            })(i, t, r);
                        })(new Uint8Array(e))
                    )
                );
            var u = r(6484),
                c = r(48764).Buffer;
            let l = async (e) => {
                let t = document.createElement("img");
                return (
                    document.createElement("picture").append(Object.assign(document.createElement("source"), { srcset: "data:,x", type: e }), t),
                    await new Promise((e) => {
                        requestAnimationFrame(e);
                    }),
                    "string" == typeof t.currentSrc && t.currentSrc.length > 0
                );
            },
                o = async (e) =>
                    (await l("image/jxl"))
                        ? e
                        : new Promise((t) => {
                            let r = new Worker("System/JXL.js/jxl_dec.js");
                            r.postMessage({ image: e, jxlSrc: "image.jxl" }), r.addEventListener("message", (e) => t((0, u.fv)(e?.data?.imgData)));
                        }),
                h = async (e) =>
                    (await l("image/heic"))
                        ? e
                        : new Promise((t) => {
                            let n = new Worker(r.tu(new URL(r.p + r.u(1337), r.b)), { name: "libheif" });
                            n.postMessage(e), n.addEventListener("message", ({ data: e }) => t((0, u.fv)(e)));
                        }),
                f = async (e) => {
                    let t = await (0, u.iQ)(),
                        { parseAni: a } = await r.e(396, "high").then(r.bind(r, 70396)),
                        s = [];
                    try {
                        ({ images: s } = a(e));
                    } catch {
                        return e;
                    }
                    return (
                        await Promise.all(
                            s.map(
                                (e) =>
                                    new Promise((r) => {
                                        let a = new Image(),
                                            s = (0, u.YS)(c.from(e));
                                        t.setOptions({ transparent: "" }),
                                            a.addEventListener(
                                                "load",
                                                () => {
                                                    t.addFrame(a), (0, u.EK)(s), r();
                                                },
                                                n.K7
                                            ),
                                            (a.src = s);
                                    })
                            )
                        ),
                        new Promise((e) => {
                            t.on("finished", (t) => t.arrayBuffer().then((t) => e(c.from(t)))).render();
                        })
                    );
                },
                d = async (e) => {
                    let t;
                    let { parseAni: n } = await r.e(396, "high").then(r.bind(r, 70396));
                    try {
                        return (
                            ({
                                images: [t],
                            } = n(e)),
                            c.from(t)
                        );
                    } catch { }
                },
                m = async (e, t) => {
                    try {
                        let { default: n } = await r.e(5704, "high").then(r.t.bind(r, 95704, 23)),
                            [a] = n(e)
                                .filter(({ width: e }) => e <= t)
                                .sort((e, t) => t.width - e.width),
                            s = document.createElement("canvas"),
                            i = s.getContext("2d", { desynchronized: !0 });
                        return (s.width = a.width), (s.height = a.height), i?.putImageData(a, 0, 0), s.toDataURL();
                    } catch {
                        return "";
                    }
                },
                g = async (e, t) =>
                    new Promise((r) => {
                        let a = new Image();
                        a.addEventListener("load", () => r(!0), n.K7), a.addEventListener("error", () => r(!1), n.K7), (a.src = (0, u.wB)(e, t));
                    }),
                p = async (e, t) => {
                    switch (e) {
                        case ".jxl":
                            return o(t);
                        case ".qoi":
                            return i(t);
                        case ".ani":
                            try {
                                return f(t);
                            } catch {
                                return d(t);
                            }
                        case ".cur":
                            return (await g(e, t)) ? t : d(t);
                        default:
                            if (n.Wr.has(e)) return h(t);
                            if (n.M0.has(e)) return c.from((await r.e(6173, "high").then(r.t.bind(r, 66173, 23))).bufferToURI(t).replace("data:image/png;base64,", ""), "base64");
                    }
                    return t;
                };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4609],{14609:function(e,t,r){r.d(t,{decodeImageToBuffer:function(){return p},getFirstAniImage:function(){return d},getLargestIcon:function(){return m}});var n=r(97836),a=r(48764).Buffer;function s(e,t=[]){let{length:r}=t,n=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)].concat(t);return[r>>24&255,r>>16&255,r>>8&255,255&r].concat(n,function(e){let t=[],r=0;for(let e=0;e<256;++e)r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=e)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1,t[e]=r;for(let n of(r=-1,e))r=r>>>8^t[(r^n)&255];return[(r^=-1)>>24&255,r>>16&255,r>>8&255,255&r]}(n))}let i=e=>a.from(new Uint8Array(function(e){if(e.length<22||113!==e[0]||111!==e[1]||105!==e[2]||102!==e[3])return;let t=e[4]<<24|e[5]<<16|e[6]<<8|e[7],r=e[12],n=e[13];if(3!==r&&4!==r&&1!==n)return;let a=e.length-8,i=[],u=Array.from({length:64}).fill(0),c=255,l=14;for(;l<a;){let t=e[l],r=t>>6;if(255===t){let t=e[l+1],r=e[l+2],n=e[l+3],a=e[l+4];l+=5,c=t<<24|r<<16|n<<8|a,u[(3*t+5*r+7*n+11*a)%64]=c,i.push(c)}else if(254===t){let t=e[l+1],r=e[l+2],n=e[l+3],a=255&c;l+=4,c=t<<24|r<<16|n<<8|a,u[(3*t+5*r+7*n+11*a)%64]=c,i.push(c)}else if(0===r){if(0===e[l]&&0===e[l+1]&&0===e[l+2]&&0===e[l+3]&&0===e[l+4]&&0===e[l+5]&&0===e[l+6]&&1===e[l+7])break;l+=1,c=u[t],i.push(c)}else if(1===r){let e=(c>>24&255)+((t>>4&3)-2)&255,r=(c>>16&255)+((t>>2&3)-2)&255,n=(c>>8&255)+((3&t)-2)&255,a=255&c;l+=1,c=e<<24|r<<16|n<<8|a,u[(3*e+5*r+7*n+11*a)%64]=c,i.push(c)}else if(2===r){let r=e[l+1],n=(63&t)-32&255,a=(r>>4&15)-8+n&255,s=(15&r)-8+n&255,o=(c>>24&255)+a&255,h=(c>>16&255)+n&255,f=(c>>8&255)+s&255,d=255&c;l+=2,c=o<<24|h<<16|f<<8|d,u[(3*o+5*h+7*f+11*d)%64]=c,i.push(c)}else{for(let e=(63&t)+1;e>0;--e)i.push(c);l+=1}}return function(e,t,r){let n=[],a=[120,1],i=1+t*r,u=65535^i;for(let s=0;e.length!=s;s+=t){let c=s+t;a.push(c===e.length?1:0,255&i,i>>8&255,255&u,u>>8&255),n.push(1),a.push(0);for(let t=s;c!==t;++t){let s=e[t];n.push(s>>24&255),a.push(s>>24&255),n.push(s>>16&255),a.push(s>>16&255),n.push(s>>8&255),a.push(s>>8&255),4===r&&(n.push(255&s),a.push(255&s))}}let c=e.length/t;return[137,80,78,71,13,10,26,10].concat(s("IHDR",[t>>24&255,t>>16&255,t>>8&255,255&t,c>>24&255,c>>16&255,c>>8&255,255&c,8,3===r?2:6,0,0,0]),s("IDAT",a.concat(function(e){let t=0,r=0;for(let n of e)r=(r+(t=(t+n)%65521))%65521;return[r>>8,255&r,t>>8,255&t]}(n))),s("IEND"))}(i,t,r)}(new Uint8Array(e))));var u=r(6484),c=r(48764).Buffer;let l=async e=>{let t=document.createElement("img");return document.createElement("picture").append(Object.assign(document.createElement("source"),{srcset:"data:,x",type:e}),t),await new Promise(e=>{requestAnimationFrame(e)}),"string"==typeof t.currentSrc&&t.currentSrc.length>0},o=async e=>await l("image/jxl")?e:new Promise(t=>{let r=new Worker("System/JXL.js/jxl_dec.js");r.postMessage({image:e,jxlSrc:"image.jxl"}),r.addEventListener("message",e=>t((0,u.fv)(e?.data?.imgData)))}),h=async e=>await l("image/heic")?e:new Promise(t=>{let n=new Worker(r.tu(new URL(r.p+r.u(1337),r.b)),{name:"libheif"});n.postMessage(e),n.addEventListener("message",({data:e})=>t((0,u.fv)(e)))}),f=async e=>{let t=await (0,u.iQ)(),{parseAni:a}=await r.e(396,"high").then(r.bind(r,70396)),s=[];try{({images:s}=a(e))}catch{return e}return await Promise.all(s.map(e=>new Promise(r=>{let a=new Image,s=(0,u.YS)(c.from(e));t.setOptions({transparent:""}),a.addEventListener("load",()=>{t.addFrame(a),(0,u.EK)(s),r()},n.K7),a.src=s}))),new Promise(e=>{t.on("finished",t=>t.arrayBuffer().then(t=>e(c.from(t)))).render()})},d=async e=>{let t;let{parseAni:n}=await r.e(396,"high").then(r.bind(r,70396));try{return{images:[t]}=n(e),c.from(t)}catch{}},m=async(e,t)=>{try{let{default:n}=await r.e(5704,"high").then(r.t.bind(r,95704,23)),[a]=n(e).filter(({width:e})=>e<=t).sort((e,t)=>t.width-e.width),s=document.createElement("canvas"),i=s.getContext("2d",{desynchronized:!0});return s.width=a.width,s.height=a.height,i?.putImageData(a,0,0),s.toDataURL()}catch{return""}},g=async(e,t)=>new Promise(r=>{let a=new Image;a.addEventListener("load",()=>r(!0),n.K7),a.addEventListener("error",()=>r(!1),n.K7),a.src=(0,u.wB)(e,t)}),p=async(e,t)=>{switch(e){case".jxl":return o(t);case".qoi":return i(t);case".ani":try{return f(t)}catch{return d(t)}case".cur":return await g(e,t)?t:d(t);default:if(n.Wr.has(e))return h(t);if(n.M0.has(e))return c.from((await r.e(6173,"high").then(r.t.bind(r,66173,23))).bufferToURI(t).replace("data:image/png;base64,",""),"base64")}return t}}}]);