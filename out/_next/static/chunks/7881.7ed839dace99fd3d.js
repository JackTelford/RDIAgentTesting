"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7881],
    {
        67881: function (e, a, n) {
            n.r(a),
                n.d(a, {
                    transcode: function () {
                        return r;
                    },
                });
            var i = n(1864),
                m = n(6484),
                t = n(48764).Buffer;
            let o = async (e) => (
                window.FFmpeg || (await (0, m.mb)(["/Program Files/ffmpeg/ffmpeg.min.js"])),
                window.FFmpeg &&
                (window.FFmpegInstance?.exit(),
                    (window.FFmpegInstance = window.FFmpeg.createFFmpeg({
                        corePath: `${window.location.origin}/Program Files/ffmpeg/ffmpeg-core.js`,
                        log: !0,
                        logger: ({ message: a }) => {
                            e?.(a);
                        },
                        mainName: "main",
                    })),
                    await window.FFmpegInstance.load()),
                window.FFmpegInstance
            ),
                r = async (e, a, n) => {
                    let m = await o(n),
                        r = [];
                    return (
                        await Promise.all(
                            e.map(async ([e, n]) => {
                                let o = (0, i.basename)(e),
                                    w = `${(0, i.basename)(e, (0, i.extname)(e))}.${a}`;
                                m.FS("writeFile", o, n), await m.run("-i", o, w), r.push([(0, i.join)((0, i.dirname)(e), w), t.from(m.FS("readFile", w))]);
                            })
                        ),
                        r
                    );
                };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7881],{67881:function(e,a,n){n.r(a),n.d(a,{transcode:function(){return r}});var i=n(1864),m=n(6484),t=n(48764).Buffer;let o=async e=>(window.FFmpeg||await (0,m.mb)(["/Program Files/ffmpeg/ffmpeg.min.js"]),window.FFmpeg&&(window.FFmpegInstance?.exit(),window.FFmpegInstance=window.FFmpeg.createFFmpeg({corePath:`${window.location.origin}/Program Files/ffmpeg/ffmpeg-core.js`,log:!0,logger:({message:a})=>{e?.(a)},mainName:"main"}),await window.FFmpegInstance.load()),window.FFmpegInstance),r=async(e,a,n)=>{let m=await o(n),r=[];return await Promise.all(e.map(async([e,n])=>{let o=(0,i.basename)(e),w=`${(0,i.basename)(e,(0,i.extname)(e))}.${a}`;m.FS("writeFile",o,n),await m.run("-i",o,w),r.push([(0,i.join)((0,i.dirname)(e),w),t.from(m.FS("readFile",w))])})),r}}}]);