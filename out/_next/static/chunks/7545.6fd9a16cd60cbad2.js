(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7545],
    {
        92764: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Dirent = void 0);
            let n = r(17994),
                i = r(78988),
                { S_IFMT: s, S_IFDIR: o, S_IFREG: a, S_IFBLK: l, S_IFCHR: u, S_IFLNK: c, S_IFIFO: f, S_IFSOCK: h } = n.constants;
            class d {
                constructor() {
                    (this.name = ""), (this.mode = 0);
                }
                static build(e, t) {
                    let r = new d(),
                        { mode: n } = e.getNode();
                    return (r.name = (0, i.strToEncoding)(e.getName(), t)), (r.mode = n), r;
                }
                _checkModeProperty(e) {
                    return (this.mode & s) === e;
                }
                isDirectory() {
                    return this._checkModeProperty(o);
                }
                isFile() {
                    return this._checkModeProperty(a);
                }
                isBlockDevice() {
                    return this._checkModeProperty(l);
                }
                isCharacterDevice() {
                    return this._checkModeProperty(u);
                }
                isSymbolicLink() {
                    return this._checkModeProperty(c);
                }
                isFIFO() {
                    return this._checkModeProperty(f);
                }
                isSocket() {
                    return this._checkModeProperty(h);
                }
            }
            (t.Dirent = d), (t.default = d);
        },
        65844: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Stats = void 0);
            let n = r(17994),
                i = r(62874),
                { S_IFMT: s, S_IFDIR: o, S_IFREG: a, S_IFBLK: l, S_IFCHR: u, S_IFLNK: c, S_IFIFO: f, S_IFSOCK: h } = n.constants;
            class d {
                static build(e, t = !1) {
                    let r = new d(),
                        { uid: n, gid: s, atime: o, mtime: a, ctime: l } = e,
                        u = t ? i.default : (e) => e;
                    (r.uid = u(n)),
                        (r.gid = u(s)),
                        (r.rdev = u(0)),
                        (r.blksize = u(4096)),
                        (r.ino = u(e.ino)),
                        (r.size = u(e.getSize())),
                        (r.blocks = u(1)),
                        (r.atime = o),
                        (r.mtime = a),
                        (r.ctime = l),
                        (r.birthtime = l),
                        (r.atimeMs = u(o.getTime())),
                        (r.mtimeMs = u(a.getTime()));
                    let c = u(l.getTime());
                    return (r.ctimeMs = c), (r.birthtimeMs = c), (r.dev = u(0)), (r.mode = u(e.mode)), (r.nlink = u(e.nlink)), r;
                }
                _checkModeProperty(e) {
                    return (Number(this.mode) & s) === e;
                }
                isDirectory() {
                    return this._checkModeProperty(o);
                }
                isFile() {
                    return this._checkModeProperty(a);
                }
                isBlockDevice() {
                    return this._checkModeProperty(l);
                }
                isCharacterDevice() {
                    return this._checkModeProperty(u);
                }
                isSymbolicLink() {
                    return this._checkModeProperty(c);
                }
                isFIFO() {
                    return this._checkModeProperty(f);
                }
                isSocket() {
                    return this._checkModeProperty(h);
                }
            }
            (t.Stats = d), (t.default = d);
        },
        17994: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.constants = void 0),
                (t.constants = {
                    O_RDONLY: 0,
                    O_WRONLY: 1,
                    O_RDWR: 2,
                    S_IFMT: 61440,
                    S_IFREG: 32768,
                    S_IFDIR: 16384,
                    S_IFCHR: 8192,
                    S_IFBLK: 24576,
                    S_IFIFO: 4096,
                    S_IFLNK: 40960,
                    S_IFSOCK: 49152,
                    O_CREAT: 64,
                    O_EXCL: 128,
                    O_NOCTTY: 256,
                    O_TRUNC: 512,
                    O_APPEND: 1024,
                    O_DIRECTORY: 65536,
                    O_NOATIME: 262144,
                    O_NOFOLLOW: 131072,
                    O_SYNC: 1052672,
                    O_DIRECT: 16384,
                    O_NONBLOCK: 2048,
                    S_IRWXU: 448,
                    S_IRUSR: 256,
                    S_IWUSR: 128,
                    S_IXUSR: 64,
                    S_IRWXG: 56,
                    S_IRGRP: 32,
                    S_IWGRP: 16,
                    S_IXGRP: 8,
                    S_IRWXO: 7,
                    S_IROTH: 4,
                    S_IWOTH: 2,
                    S_IXOTH: 1,
                    F_OK: 0,
                    R_OK: 4,
                    W_OK: 2,
                    X_OK: 1,
                    UV_FS_SYMLINK_DIR: 1,
                    UV_FS_SYMLINK_JUNCTION: 2,
                    UV_FS_COPYFILE_EXCL: 1,
                    UV_FS_COPYFILE_FICLONE: 2,
                    UV_FS_COPYFILE_FICLONE_FORCE: 4,
                    COPYFILE_EXCL: 1,
                    COPYFILE_FICLONE: 2,
                    COPYFILE_FICLONE_FORCE: 4,
                });
        },
        78988: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.strToEncoding = t.assertEncoding = t.ENCODING_UTF8 = void 0);
            let n = r(1526),
                i = r(2324);
            (t.ENCODING_UTF8 = "utf8"),
                (t.assertEncoding = function (e) {
                    if (e && !n.Buffer.isEncoding(e)) throw new i.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", e);
                }),
                (t.strToEncoding = function (e, r) {
                    return r && r !== t.ENCODING_UTF8 ? ("buffer" === r ? new n.Buffer(e) : new n.Buffer(e).toString(r)) : e;
                });
        },
        62874: function (e, t) {
            "function" == typeof BigInt
                ? (t.default = BigInt)
                : (t.default = function () {
                    throw Error("BigInt is not supported in this environment.");
                });
        },
        55370: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.fs = t.createFsFromVolume = t.vol = t.Volume = void 0);
            let n = r(65844),
                i = r(92764),
                s = r(61299),
                { fsSyncMethods: o, fsAsyncMethods: a } = r(35659),
                l = r(17994),
                { F_OK: u, R_OK: c, W_OK: f, X_OK: h } = l.constants;
            function d(e) {
                let t = { F_OK: u, R_OK: c, W_OK: f, X_OK: h, constants: l.constants, Stats: n.default, Dirent: i.default };
                for (let r of o) "function" == typeof e[r] && (t[r] = e[r].bind(e));
                for (let r of a) "function" == typeof e[r] && (t[r] = e[r].bind(e));
                return (t.StatWatcher = e.StatWatcher), (t.FSWatcher = e.FSWatcher), (t.WriteStream = e.WriteStream), (t.ReadStream = e.ReadStream), (t.promises = e.promises), (t._toUnixTimestamp = s.toUnixTimestamp), t;
            }
            (t.Volume = s.Volume), (t.vol = new s.Volume()), (t.createFsFromVolume = d), (t.fs = d(t.vol)), (e.exports = { ...e.exports, ...t.fs }), (e.exports.semantic = !0);
        },
        1526: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.bufferFrom = t.bufferAllocUnsafe = t.Buffer = void 0);
            let n = r(48764);
            function i(e, ...t) {
                return new n.Buffer(e, ...t);
            }
            Object.defineProperty(t, "Buffer", {
                enumerable: !0,
                get: function () {
                    return n.Buffer;
                },
            });
            let s = n.Buffer.allocUnsafe || i;
            t.bufferAllocUnsafe = s;
            let o = n.Buffer.from || i;
            t.bufferFrom = o;
        },
        2324: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.E = t.AssertionError = t.message = t.RangeError = t.TypeError = t.Error = void 0);
            let n = r(48583),
                i = r(89539),
                s = "undefined" == typeof Symbol ? "_kCode" : Symbol("code"),
                o = {};
            function a(e) {
                return class extends e {
                    constructor(e, ...t) {
                        super(c(e, t)), (this.code = e), (this[s] = e), (this.name = `${super.name} [${this[s]}]`);
                    }
                };
            }
            let l = "undefined" != typeof globalThis ? globalThis : r.g;
            class u extends l.Error {
                constructor(e) {
                    if ("object" != typeof e || null === e) throw new t.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
                    e.message ? super(e.message) : super(`${i.inspect(e.actual).slice(0, 128)} ${e.operator} ${i.inspect(e.expected).slice(0, 128)}`),
                        (this.generatedMessage = !e.message),
                        (this.name = "AssertionError [ERR_ASSERTION]"),
                        (this.code = "ERR_ASSERTION"),
                        (this.actual = e.actual),
                        (this.expected = e.expected),
                        (this.operator = e.operator),
                        t.Error.captureStackTrace(this, e.stackStartFunction);
                }
            }
            function c(e, t) {
                let r;
                n.strictEqual(typeof e, "string");
                let s = o[e];
                if ((n(s, `An invalid error message key was used: ${e}.`), "function" == typeof s)) r = s;
                else {
                    if (((r = i.format), void 0 === t || 0 === t.length)) return s;
                    t.unshift(s);
                }
                return String(r.apply(null, t));
            }
            function f(e, t) {
                o[e] = "function" == typeof t ? t : String(t);
            }
            function h(e, t) {
                if ((n(e, "expected is required"), n("string" == typeof t, "thing is required"), !Array.isArray(e))) return `of ${t} ${String(e)}`;
                {
                    let r = e.length;
                    return (n(r > 0, "At least one expected value needs to be specified"), (e = e.map((e) => String(e))), r > 2)
                        ? `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ` + e[r - 1]
                        : 2 === r
                            ? `one of ${t} ${e[0]} or ${e[1]}`
                            : `of ${t} ${e[0]}`;
                }
            }
            (t.AssertionError = u),
                (t.message = c),
                (t.E = f),
                (t.Error = a(l.Error)),
                (t.TypeError = a(l.TypeError)),
                (t.RangeError = a(l.RangeError)),
                f("ERR_ARG_NOT_ITERABLE", "%s must be iterable"),
                f("ERR_ASSERTION", "%s"),
                f("ERR_BUFFER_OUT_OF_BOUNDS", function (e, t) {
                    return t ? "Attempt to write outside buffer bounds" : `"${e}" is outside of buffer bounds`;
                }),
                f("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received"),
                f("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s"),
                f("ERR_CPU_USAGE", "Unable to obtain cpu usage %s"),
                f("ERR_DNS_SET_SERVERS_FAILED", (e, t) => `c-ares failed to set servers: "${e}" [${t}]`),
                f("ERR_FALSY_VALUE_REJECTION", "Promise was rejected with falsy value"),
                f("ERR_ENCODING_NOT_SUPPORTED", (e) => `The "${e}" encoding is not supported`),
                f("ERR_ENCODING_INVALID_ENCODED_DATA", (e) => `The encoded data was not valid for encoding ${e}`),
                f("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client"),
                f("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s"),
                f("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding"),
                f("ERR_INDEX_OUT_OF_RANGE", "Index out of range"),
                f("ERR_INVALID_ARG_TYPE", function (e, t, r) {
                    let i, s;
                    if ((n(e, "name is required"), t.includes("not ") ? ((i = "must not be"), (t = t.split("not ")[1])) : (i = "must be"), Array.isArray(e))) {
                        let r = e.map((e) => `"${e}"`).join(", ");
                        s = `The ${r} arguments ${i} ${h(t, "type")}`;
                    } else if (e.includes(" argument")) s = `The ${e} ${i} ${h(t, "type")}`;
                    else {
                        let r = e.includes(".") ? "property" : "argument";
                        s = `The "${e}" ${r} ${i} ${h(t, "type")}`;
                    }
                    return arguments.length >= 3 && (s += `. Received type ${null !== r ? typeof r : "null"}`), s;
                }),
                f("ERR_INVALID_ARRAY_LENGTH", (e, t, r) => (n.strictEqual(typeof r, "number"), `The array "${e}" (length ${r}) must be of length ${t}.`)),
                f("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s"),
                f("ERR_INVALID_CALLBACK", "Callback must be a function"),
                f("ERR_INVALID_CHAR", "Invalid character in %s"),
                f("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column"),
                f("ERR_INVALID_FD", '"fd" must be a positive integer: %s'),
                f("ERR_INVALID_FILE_URL_HOST", 'File URL host must be "localhost" or empty on %s'),
                f("ERR_INVALID_FILE_URL_PATH", "File URL path %s"),
                f("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent"),
                f("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s"),
                f("ERR_INVALID_OPT_VALUE", (e, t) => `The value "${String(t)}" is invalid for option "${e}"`),
                f("ERR_INVALID_OPT_VALUE_ENCODING", (e) => `The value "${String(e)}" is invalid for option "encoding"`),
                f("ERR_INVALID_REPL_EVAL_CONFIG", 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL'),
                f("ERR_INVALID_SYNC_FORK_INPUT", "Asynchronous forks do not support Buffer, Uint8Array or string input: %s"),
                f("ERR_INVALID_THIS", 'Value of "this" must be of type %s'),
                f("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple"),
                f("ERR_INVALID_URL", "Invalid URL: %s"),
                f("ERR_INVALID_URL_SCHEME", (e) => `The URL must be ${h(e, "scheme")}`),
                f("ERR_IPC_CHANNEL_CLOSED", "Channel closed"),
                f("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected"),
                f("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe"),
                f("ERR_IPC_SYNC_FORK", "IPC cannot be used with synchronous forks"),
                f("ERR_MISSING_ARGS", function (...e) {
                    n(e.length > 0, "At least one arg needs to be specified");
                    let t = "The ",
                        r = e.length;
                    switch (((e = e.map((e) => `"${e}"`)), r)) {
                        case 1:
                            t += `${e[0]} argument`;
                            break;
                        case 2:
                            t += `${e[0]} and ${e[1]} arguments`;
                            break;
                        default:
                            t += e.slice(0, r - 1).join(", ") + `, and ${e[r - 1]} arguments`;
                    }
                    return `${t} must be specified`;
                }),
                f("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
                f("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function"),
                f("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object"),
                f("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support"),
                f("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported"),
                f("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s"),
                f("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound"),
                f("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536"),
                f("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6"),
                f("ERR_SOCKET_CANNOT_SEND", "Unable to send data"),
                f("ERR_SOCKET_CLOSED", "Socket is closed"),
                f("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running"),
                f("ERR_STDERR_CLOSE", "process.stderr cannot be closed"),
                f("ERR_STDOUT_CLOSE", "process.stdout cannot be closed"),
                f("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode"),
                f("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s"),
                f("ERR_TLS_DH_PARAM_SIZE", (e) => `DH parameter size ${e} is less than 2048`),
                f("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout"),
                f("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate"),
                f("ERR_TLS_REQUIRED_SERVER_NAME", '"servername" is required parameter for Server.addContext'),
                f("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected"),
                f("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming"),
                f("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0"),
                f("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s"),
                f("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s"),
                f("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type"),
                f("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type"),
                f("ERR_V8BREAKITERATOR", "Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl");
        },
        57718: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.File = t.Link = t.Node = t.SEP = void 0);
            let n = r(44596),
                i = r(1526),
                s = r(17994),
                o = r(17187),
                a = r(65844),
                { S_IFMT: l, S_IFDIR: u, S_IFREG: c, S_IFLNK: f, O_APPEND: h } = s.constants,
                d = () => n.default.getuid?.() ?? 0,
                _ = () => n.default.getgid?.() ?? 0;
            t.SEP = "/";
            class S extends o.EventEmitter {
                constructor(e, t = 438) {
                    super(),
                        (this.uid = d()),
                        (this.gid = _()),
                        (this.atime = new Date()),
                        (this.mtime = new Date()),
                        (this.ctime = new Date()),
                        (this.perm = 438),
                        (this.mode = c),
                        (this.nlink = 1),
                        (this.perm = t),
                        (this.mode |= t),
                        (this.ino = e);
                }
                getString(e = "utf8") {
                    return this.getBuffer().toString(e);
                }
                setString(e) {
                    (this.buf = (0, i.bufferFrom)(e, "utf8")), this.touch();
                }
                getBuffer() {
                    return this.buf || this.setBuffer((0, i.bufferAllocUnsafe)(0)), (0, i.bufferFrom)(this.buf);
                }
                setBuffer(e) {
                    (this.buf = (0, i.bufferFrom)(e)), this.touch();
                }
                getSize() {
                    return this.buf ? this.buf.length : 0;
                }
                setModeProperty(e) {
                    this.mode = (this.mode & ~l) | e;
                }
                setIsFile() {
                    this.setModeProperty(c);
                }
                setIsDirectory() {
                    this.setModeProperty(u);
                }
                setIsSymlink() {
                    this.setModeProperty(f);
                }
                isFile() {
                    return (this.mode & l) === c;
                }
                isDirectory() {
                    return (this.mode & l) === u;
                }
                isSymlink() {
                    return (this.mode & l) === f;
                }
                makeSymlink(e) {
                    (this.symlink = e), this.setIsSymlink();
                }
                write(e, t = 0, r = e.length, n = 0) {
                    if ((this.buf || (this.buf = (0, i.bufferAllocUnsafe)(0)), n + r > this.buf.length)) {
                        let e = (0, i.bufferAllocUnsafe)(n + r);
                        this.buf.copy(e, 0, 0, this.buf.length), (this.buf = e);
                    }
                    return e.copy(this.buf, n, t, t + r), this.touch(), r;
                }
                read(e, t = 0, r = e.byteLength, n = 0) {
                    this.buf || (this.buf = (0, i.bufferAllocUnsafe)(0));
                    let s = r;
                    return s > e.byteLength && (s = e.byteLength), s + n > this.buf.length && (s = this.buf.length - n), this.buf.copy(e, t, n, n + s), s;
                }
                truncate(e = 0) {
                    if (e) {
                        if ((this.buf || (this.buf = (0, i.bufferAllocUnsafe)(0)), e <= this.buf.length)) this.buf = this.buf.slice(0, e);
                        else {
                            let t = (0, i.bufferAllocUnsafe)(0);
                            this.buf.copy(t), t.fill(0, e);
                        }
                    } else this.buf = (0, i.bufferAllocUnsafe)(0);
                    this.touch();
                }
                chmod(e) {
                    (this.perm = e), (this.mode = (-512 & this.mode) | e), this.touch();
                }
                chown(e, t) {
                    (this.uid = e), (this.gid = t), this.touch();
                }
                touch() {
                    (this.mtime = new Date()), this.emit("change", this);
                }
                canRead(e = d(), t = _()) {
                    return !!(4 & this.perm) || (t === this.gid && !!(32 & this.perm)) || (e === this.uid && !!(256 & this.perm));
                }
                canWrite(e = d(), t = _()) {
                    return !!(2 & this.perm) || (t === this.gid && !!(16 & this.perm)) || (e === this.uid && !!(128 & this.perm));
                }
                del() {
                    this.emit("delete", this);
                }
                toJSON() {
                    return {
                        ino: this.ino,
                        uid: this.uid,
                        gid: this.gid,
                        atime: this.atime.getTime(),
                        mtime: this.mtime.getTime(),
                        ctime: this.ctime.getTime(),
                        perm: this.perm,
                        mode: this.mode,
                        nlink: this.nlink,
                        symlink: this.symlink,
                        data: this.getString(),
                    };
                }
            }
            t.Node = S;
            class p extends o.EventEmitter {
                constructor(e, t, r) {
                    super(), (this.children = {}), (this._steps = []), (this.ino = 0), (this.length = 0), (this.vol = e), (this.parent = t), (this.name = r), this.syncSteps();
                }
                get steps() {
                    return this._steps;
                }
                set steps(e) {
                    for (let t of ((this._steps = e), Object.values(this.children))) t?.syncSteps();
                }
                setNode(e) {
                    (this.node = e), (this.ino = e.ino);
                }
                getNode() {
                    return this.node;
                }
                createChild(e, t = this.vol.createNode()) {
                    let r = new p(this.vol, this, e);
                    return r.setNode(t), t.isDirectory(), this.setChild(e, r), r;
                }
                childrenChanged() {
                    this.node.mtime = this.node.ctime = new Date();
                }
                setChild(e, t = new p(this.vol, this, e)) {
                    return (this.children[e] = t), this.childrenChanged(), (t.parent = this), this.length++, this.emit("child:add", t, this), t;
                }
                deleteChild(e) {
                    delete this.children[e.getName()], this.childrenChanged(), this.length--, this.emit("child:delete", e, this);
                }
                getChild(e) {
                    if (Object.hasOwnProperty.call(this.children, e)) return this.children[e];
                }
                getPath() {
                    return this.steps.join(t.SEP);
                }
                getName() {
                    return this.steps[this.steps.length - 1];
                }
                walk(e, t = e.length, r = 0) {
                    if (r >= e.length || r >= t) return this;
                    let n = e[r],
                        i = this.getChild(n);
                    return i ? i.walk(e, t, r + 1) : null;
                }
                toJSON() {
                    return { steps: this.steps, ino: this.ino, children: Object.keys(this.children) };
                }
                syncSteps() {
                    this.steps = this.parent ? this.parent.steps.concat([this.name]) : [this.name];
                }
            }
            t.Link = p;
            class I {
                constructor(e, t, r, n) {
                    (this.position = 0), (this.link = e), (this.node = t), (this.flags = r), (this.fd = n);
                }
                getString(e = "utf8") {
                    return this.node.getString();
                }
                setString(e) {
                    this.node.setString(e);
                }
                getBuffer() {
                    return this.node.getBuffer();
                }
                setBuffer(e) {
                    this.node.setBuffer(e);
                }
                getSize() {
                    return this.node.getSize();
                }
                truncate(e) {
                    this.node.truncate(e);
                }
                seekTo(e) {
                    this.position = e;
                }
                stats() {
                    return a.default.build(this.node);
                }
                write(e, t = 0, r = e.length, n) {
                    "number" != typeof n && (n = this.position), this.flags & h && (n = this.getSize());
                    let i = this.node.write(e, t, r, n);
                    return (this.position = n + i), i;
                }
                read(e, t = 0, r = e.byteLength, n) {
                    "number" != typeof n && (n = this.position);
                    let i = this.node.read(e, t, r, n);
                    return (this.position = n + i), i;
                }
                chmod(e) {
                    this.node.chmod(e);
                }
                chown(e, t) {
                    this.node.chown(e, t);
                }
            }
            t.File = I;
        },
        44596: function (e, t, r) {
            "use strict";
            var n = r(34155);
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.createProcess = void 0);
            let i = () => {
                if (void 0 !== n) return n;
                try {
                    return r(34155);
                } catch {
                    return;
                }
            };
            function s() {
                let e = i() || {};
                return (
                    e.cwd || (e.cwd = () => "/"),
                    e.nextTick || (e.nextTick = r(26913).default),
                    e.emitWarning ||
                    (e.emitWarning = (e, t) => {
                        console.warn(`${t}${t ? ": " : ""}${e}`);
                    }),
                    e.env || (e.env = {}),
                    e
                );
            }
            (t.createProcess = s), (t.default = s());
        },
        71390: function (e, t) {
            "use strict";
            function r(e, t, r = (e) => e) {
                return (...n) =>
                    new Promise((i, s) => {
                        e[t].bind(e)(...n, (e, t) => (e ? s(e) : i(r(t))));
                    });
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.FileHandle = void 0);
            class n {
                constructor(e, t) {
                    (this.vol = e), (this.fd = t);
                }
                appendFile(e, t) {
                    return r(this.vol, "appendFile")(this.fd, e, t);
                }
                chmod(e) {
                    return r(this.vol, "fchmod")(this.fd, e);
                }
                chown(e, t) {
                    return r(this.vol, "fchown")(this.fd, e, t);
                }
                close() {
                    return r(this.vol, "close")(this.fd);
                }
                datasync() {
                    return r(this.vol, "fdatasync")(this.fd);
                }
                read(e, t, n, i) {
                    return r(this.vol, "read", (t) => ({ bytesRead: t, buffer: e }))(this.fd, e, t, n, i);
                }
                readFile(e) {
                    return r(this.vol, "readFile")(this.fd, e);
                }
                stat(e) {
                    return r(this.vol, "fstat")(this.fd, e);
                }
                sync() {
                    return r(this.vol, "fsync")(this.fd);
                }
                truncate(e) {
                    return r(this.vol, "ftruncate")(this.fd, e);
                }
                utimes(e, t) {
                    return r(this.vol, "futimes")(this.fd, e, t);
                }
                write(e, t, n, i) {
                    return r(this.vol, "write", (t) => ({ bytesWritten: t, buffer: e }))(this.fd, e, t, n, i);
                }
                writeFile(e, t) {
                    return r(this.vol, "writeFile")(this.fd, e, t);
                }
            }
            (t.FileHandle = n),
                (t.default = function (e) {
                    return "undefined" == typeof Promise
                        ? null
                        : {
                            FileHandle: n,
                            access: (t, n) => r(e, "access")(t, n),
                            appendFile: (t, i, s) => r(e, "appendFile")(t instanceof n ? t.fd : t, i, s),
                            chmod: (t, n) => r(e, "chmod")(t, n),
                            chown: (t, n, i) => r(e, "chown")(t, n, i),
                            copyFile: (t, n, i) => r(e, "copyFile")(t, n, i),
                            lchmod: (t, n) => r(e, "lchmod")(t, n),
                            lchown: (t, n, i) => r(e, "lchown")(t, n, i),
                            link: (t, n) => r(e, "link")(t, n),
                            lstat: (t, n) => r(e, "lstat")(t, n),
                            mkdir: (t, n) => r(e, "mkdir")(t, n),
                            mkdtemp: (t, n) => r(e, "mkdtemp")(t, n),
                            open: (t, i, s) => r(e, "open", (t) => new n(e, t))(t, i, s),
                            readdir: (t, n) => r(e, "readdir")(t, n),
                            readFile: (t, i) => r(e, "readFile")(t instanceof n ? t.fd : t, i),
                            readlink: (t, n) => r(e, "readlink")(t, n),
                            realpath: (t, n) => r(e, "realpath")(t, n),
                            rename: (t, n) => r(e, "rename")(t, n),
                            rmdir: (t) => r(e, "rmdir")(t),
                            rm: (t, n) => r(e, "rm")(t, n),
                            stat: (t, n) => r(e, "stat")(t, n),
                            symlink: (t, n, i) => r(e, "symlink")(t, n, i),
                            truncate: (t, n) => r(e, "truncate")(t, n),
                            unlink: (t) => r(e, "unlink")(t),
                            utimes: (t, n, i) => r(e, "utimes")(t, n, i),
                            writeFile: (t, i, s) => r(e, "writeFile")(t instanceof n ? t.fd : t, i, s),
                        };
                });
        },
        26913: function (e, t, r) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (n = "function" == typeof setImmediate ? setImmediate.bind("undefined" != typeof globalThis ? globalThis : r.g) : setTimeout.bind("undefined" != typeof globalThis ? globalThis : r.g)),
                (t.default = n);
        },
        98919: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e, t, n) {
                    let i = setTimeout.apply("undefined" != typeof globalThis ? globalThis : r.g, arguments);
                    return i && "object" == typeof i && "function" == typeof i.unref && i.unref(), i;
                });
        },
        61299: function (e, t, r) {
            "use strict";
            var n, i, s;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.FSWatcher = t.StatWatcher = t.Volume = t.toUnixTimestamp = t.bufferToEncoding = t.dataToBuffer = t.dataToStr = t.pathToSteps = t.filenameToSteps = t.pathToFilename = t.flagsToNumber = t.FLAGS = void 0);
            let o = r(1864),
                a = r(57718),
                l = r(65844),
                u = r(92764),
                c = r(1526),
                f = r(26913),
                h = r(44596),
                d = r(98919),
                _ = r(79681),
                S = r(17994),
                p = r(17187),
                I = r(78988),
                E = r(2324),
                A = r(89539),
                y = r(71390),
                g = o.resolve,
                { O_RDONLY: T, O_WRONLY: m, O_RDWR: v, O_CREAT: R, O_EXCL: b, O_TRUNC: w, O_APPEND: O, O_SYNC: W, O_DIRECTORY: C, F_OK: N, COPYFILE_EXCL: L, COPYFILE_FICLONE_FORCE: F } = S.constants,
                { sep: D, relative: P, join: G, dirname: M } = o.posix ? o.posix : o,
                k = "win32" === h.default.platform,
                B = {
                    PATH_STR: "path must be a string or Buffer",
                    FD: "fd must be a file descriptor",
                    MODE_INT: "mode must be an int",
                    CB: "callback must be a function",
                    UID: "uid must be an unsigned int",
                    GID: "gid must be an unsigned int",
                },
                H = (e) => `Expected options to be either an object or a string, but got ${e} instead`,
                U = "ENOENT",
                x = "EBADF",
                j = "EINVAL",
                Y = "EEXIST",
                V = "ENOTDIR",
                K = "EMFILE",
                $ = "EACCES",
                z = "EISDIR",
                q = "ENOTEMPTY",
                X = "ENOSYS",
                Z = "ERR_FS_EISDIR";
            function J(e, t = "", r = "", n = "", i = Error) {
                let s = new i(
                    (function (e, t = "", r = "", n = "") {
                        let i = "";
                        switch ((r && (i = ` '${r}'`), n && (i += ` -> '${n}'`), e)) {
                            case U:
                                return `ENOENT: no such file or directory, ${t}${i}`;
                            case x:
                                return `EBADF: bad file descriptor, ${t}${i}`;
                            case j:
                                return `EINVAL: invalid argument, ${t}${i}`;
                            case "EPERM":
                                return `EPERM: operation not permitted, ${t}${i}`;
                            case "EPROTO":
                                return `EPROTO: protocol error, ${t}${i}`;
                            case Y:
                                return `EEXIST: file already exists, ${t}${i}`;
                            case V:
                                return `ENOTDIR: not a directory, ${t}${i}`;
                            case z:
                                return `EISDIR: illegal operation on a directory, ${t}${i}`;
                            case $:
                                return `EACCES: permission denied, ${t}${i}`;
                            case q:
                                return `ENOTEMPTY: directory not empty, ${t}${i}`;
                            case K:
                                return `EMFILE: too many open files, ${t}${i}`;
                            case X:
                                return `ENOSYS: function not implemented, ${t}${i}`;
                            case Z:
                                return `[ERR_FS_EISDIR]: Path is a directory: ${t} returned EISDIR (is a directory) ${r}`;
                            default:
                                return `${e}: error occurred, ${t}${i}`;
                        }
                    })(e, t, r, n)
                );
                return (s.code = e), s;
            }
            function Q(e) {
                if ("number" == typeof e) return e;
                if ("string" == typeof e) {
                    let t = n[e];
                    if (void 0 !== t) return t;
                }
                throw new E.TypeError("ERR_INVALID_OPT_VALUE", "flags", e);
            }
            function ee(e, t) {
                let r;
                if (!t) return e;
                {
                    let n = typeof t;
                    switch (n) {
                        case "string":
                            r = Object.assign({}, e, { encoding: t });
                            break;
                        case "object":
                            r = Object.assign({}, e, t);
                            break;
                        default:
                            throw TypeError(H(n));
                    }
                }
                return "buffer" !== r.encoding && (0, I.assertEncoding)(r.encoding), r;
            }
            function et(e) {
                return (t) => ee(e, t);
            }
            function er(e) {
                if ("function" != typeof e) throw TypeError(B.CB);
                return e;
            }
            function en(e) {
                return (t, r) => ("function" == typeof t ? [e(), t] : [e(t), er(r)]);
            }
            ((s = n = t.FLAGS || (t.FLAGS = {}))[(s.r = T)] = "r"),
                (s[(s["r+"] = v)] = "r+"),
                (s[(s.rs = T | W)] = "rs"),
                (s[(s.sr = s.rs)] = "sr"),
                (s[(s["rs+"] = v | W)] = "rs+"),
                (s[(s["sr+"] = s["rs+"])] = "sr+"),
                (s[(s.w = m | R | w)] = "w"),
                (s[(s.wx = m | R | w | b)] = "wx"),
                (s[(s.xw = s.wx)] = "xw"),
                (s[(s["w+"] = v | R | w)] = "w+"),
                (s[(s["wx+"] = v | R | w | b)] = "wx+"),
                (s[(s["xw+"] = s["wx+"])] = "xw+"),
                (s[(s.a = m | O | R)] = "a"),
                (s[(s.ax = m | O | R | b)] = "ax"),
                (s[(s.xa = s.ax)] = "xa"),
                (s[(s["a+"] = v | O | R)] = "a+"),
                (s[(s["ax+"] = v | O | R | b)] = "ax+"),
                (s[(s["xa+"] = s["ax+"])] = "xa+"),
                (t.flagsToNumber = Q);
            let ei = { encoding: "utf8" },
                es = et(ei),
                eo = en(es),
                ea = et({ flag: "r" }),
                el = { encoding: "utf8", mode: 438, flag: n[n.w] },
                eu = et(el),
                ec = { encoding: "utf8", mode: 438, flag: n[n.a] },
                ef = et(ec),
                eh = en(ef),
                ed = et(ei),
                e_ = en(ed),
                eS = { mode: 511, recursive: !1 },
                ep = (e) => ("number" == typeof e ? Object.assign({}, eS, { mode: e }) : Object.assign({}, eS, e)),
                eI = { recursive: !1 },
                eE = (e) => Object.assign({}, eI, e),
                eA = en(et(ei)),
                ey = et({ encoding: "utf8", withFileTypes: !1 }),
                eg = en(ey),
                eT = { bigint: !1 },
                em = (e = {}) => Object.assign({}, eT, e),
                ev = (e, t) => ("function" == typeof e ? [em(), e] : [em(e), er(t)]);
            function eR(e) {
                if ("string" != typeof e && !c.Buffer.isBuffer(e)) {
                    try {
                        if (!(e instanceof r(11987).URL)) throw TypeError(B.PATH_STR);
                    } catch (e) {
                        throw TypeError(B.PATH_STR);
                    }
                    e = (function (e) {
                        if ("" !== e.hostname) throw new E.TypeError("ERR_INVALID_FILE_URL_HOST", h.default.platform);
                        let t = e.pathname;
                        for (let e = 0; e < t.length; e++)
                            if ("%" === t[e]) {
                                let r = 32 | t.codePointAt(e + 2);
                                if ("2" === t[e + 1] && 102 === r) throw new E.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
                            }
                        return decodeURIComponent(t);
                    })(e);
                }
                let t = String(e);
                return eC(t), t;
            }
            t.pathToFilename = eR;
            let eb = (e, t = h.default.cwd()) => g(t, e);
            if (k) {
                let e = eb,
                    { unixify: t } = r(24290);
                eb = (r, n) => t(e(r, n));
            }
            function ew(e, t) {
                let r = eb(e, t).substr(1);
                return r ? r.split(D) : [];
            }
            function eO(e, t = I.ENCODING_UTF8) {
                return c.Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? (0, c.bufferFrom)(e) : (0, c.bufferFrom)(String(e), t);
            }
            function eW(e, t) {
                return t && "buffer" !== t ? e.toString(t) : e;
            }
            function eC(e, t) {
                if (-1 !== ("" + e).indexOf("\0")) {
                    let e = Error("Path must be a string without null bytes");
                    if (((e.code = U), "function" != typeof t)) throw e;
                    return h.default.nextTick(t, e), !1;
                }
                return !0;
            }
            function eN(e, t) {
                let r = "number" == typeof e ? e : "string" == typeof e ? parseInt(e, 8) : t ? eN(t) : void 0;
                if ("number" != typeof r || isNaN(r)) throw TypeError(B.MODE_INT);
                return r;
            }
            function eL(e) {
                return e >>> 0 === e;
            }
            function eF(e) {
                if (!eL(e)) throw TypeError(B.FD);
            }
            function eD(e) {
                if ("string" == typeof e && +e == e) return +e;
                if (e instanceof Date) return e.getTime() / 1e3;
                if (isFinite(e)) return e < 0 ? Date.now() / 1e3 : e;
                throw Error("Cannot parse time: " + e);
            }
            function eP(e) {
                if ("number" != typeof e) throw TypeError(B.UID);
            }
            function eG(e) {
                if ("number" != typeof e) throw TypeError(B.GID);
            }
            (t.filenameToSteps = ew),
                (t.pathToSteps = function (e) {
                    return ew(eR(e));
                }),
                (t.dataToStr = function (e, t = I.ENCODING_UTF8) {
                    return c.Buffer.isBuffer(e) ? e.toString(t) : e instanceof Uint8Array ? (0, c.bufferFrom)(e).toString(t) : String(e);
                }),
                (t.dataToBuffer = eO),
                (t.bufferToEncoding = eW),
                (t.toUnixTimestamp = eD);
            class eM {
                constructor(e = {}) {
                    (this.ino = 0),
                        (this.inodes = {}),
                        (this.releasedInos = []),
                        (this.fds = {}),
                        (this.releasedFds = []),
                        (this.maxFiles = 1e4),
                        (this.openFiles = 0),
                        (this.promisesApi = (0, y.default)(this)),
                        (this.statWatchers = {}),
                        (this.props = Object.assign({ Node: a.Node, Link: a.Link, File: a.File }, e));
                    let t = this.createLink();
                    t.setNode(this.createNode(!0));
                    let r = this;
                    this.StatWatcher = class extends eB {
                        constructor() {
                            super(r);
                        }
                    };
                    let n = eH;
                    this.ReadStream = class extends n {
                        constructor(...e) {
                            super(r, ...e);
                        }
                    };
                    let i = ex;
                    (this.WriteStream = class extends i {
                        constructor(...e) {
                            super(r, ...e);
                        }
                    }),
                        (this.FSWatcher = class extends ej {
                            constructor() {
                                super(r);
                            }
                        }),
                        (this.root = t);
                }
                static fromJSON(e, t) {
                    let r = new eM();
                    return r.fromJSON(e, t), r;
                }
                static fromNestedJSON(e, t) {
                    let r = new eM();
                    return r.fromNestedJSON(e, t), r;
                }
                get promises() {
                    if (null === this.promisesApi) throw Error("Promise is not supported in this environment.");
                    return this.promisesApi;
                }
                createLink(e, t, r = !1, n) {
                    if (!e) return new this.props.Link(this, null, "");
                    if (!t) throw Error("createLink: name cannot be empty");
                    return e.createChild(t, this.createNode(r, n));
                }
                deleteLink(e) {
                    let t = e.parent;
                    return !!t && (t.deleteChild(e), !0);
                }
                newInoNumber() {
                    return this.releasedInos.pop() || ((this.ino = (this.ino + 1) % 4294967295), this.ino);
                }
                newFdNumber() {
                    let e = this.releasedFds.pop();
                    return "number" == typeof e ? e : eM.fd--;
                }
                createNode(e = !1, t) {
                    let r = new this.props.Node(this.newInoNumber(), t);
                    return e && r.setIsDirectory(), (this.inodes[r.ino] = r), r;
                }
                getNode(e) {
                    return this.inodes[e];
                }
                deleteNode(e) {
                    e.del(), delete this.inodes[e.ino], this.releasedInos.push(e.ino);
                }
                genRndStr() {
                    let e = (Math.random() + 1).toString(36).substr(2, 6);
                    return 6 === e.length ? e : this.genRndStr();
                }
                getLink(e) {
                    return this.root.walk(e);
                }
                getLinkOrThrow(e, t) {
                    let r = ew(e),
                        n = this.getLink(r);
                    if (!n) throw J(U, t, e);
                    return n;
                }
                getResolvedLink(e) {
                    let t = "string" == typeof e ? ew(e) : e,
                        r = this.root,
                        n = 0;
                    for (; n < t.length;) {
                        let e = t[n];
                        if (!(r = r.getChild(e))) return null;
                        let i = r.getNode();
                        if (i.isSymlink()) {
                            (t = i.symlink.concat(t.slice(n + 1))), (r = this.root), (n = 0);
                            continue;
                        }
                        n++;
                    }
                    return r;
                }
                getResolvedLinkOrThrow(e, t) {
                    let r = this.getResolvedLink(e);
                    if (!r) throw J(U, t, e);
                    return r;
                }
                resolveSymlinks(e) {
                    return this.getResolvedLink(e.steps.slice(1));
                }
                getLinkAsDirOrThrow(e, t) {
                    let r = this.getLinkOrThrow(e, t);
                    if (!r.getNode().isDirectory()) throw J(V, t, e);
                    return r;
                }
                getLinkParent(e) {
                    return this.root.walk(e, e.length - 1);
                }
                getLinkParentAsDirOrThrow(e, t) {
                    let r = e instanceof Array ? e : ew(e),
                        n = this.getLinkParent(r);
                    if (!n) throw J(U, t, D + r.join(D));
                    if (!n.getNode().isDirectory()) throw J(V, t, D + r.join(D));
                    return n;
                }
                getFileByFd(e) {
                    return this.fds[String(e)];
                }
                getFileByFdOrThrow(e, t) {
                    if (!eL(e)) throw TypeError(B.FD);
                    let r = this.getFileByFd(e);
                    if (!r) throw J(x, t);
                    return r;
                }
                wrapAsync(e, t, r) {
                    er(r),
                        (0, f.default)(() => {
                            let n;
                            try {
                                n = e.apply(this, t);
                            } catch (e) {
                                r(e);
                                return;
                            }
                            r(null, n);
                        });
                }
                _toJSON(e = this.root, t = {}, r) {
                    let n = !0,
                        i = e.children;
                    for (let s in (e.getNode().isFile() && ((i = { [e.getName()]: e.parent.getChild(e.getName()) }), (e = e.parent)), i)) {
                        n = !1;
                        let i = e.getChild(s);
                        if (!i) throw Error("_toJSON: unexpected undefined");
                        let o = i.getNode();
                        if (o.isFile()) {
                            let e = i.getPath();
                            r && (e = P(r, e)), (t[e] = o.getString());
                        } else o.isDirectory() && this._toJSON(i, t, r);
                    }
                    let s = e.getPath();
                    return r && (s = P(r, s)), s && n && (t[s] = null), t;
                }
                toJSON(e, t = {}, r = !1) {
                    let n = [];
                    if (e)
                        for (let t of (e instanceof Array || (e = [e]), e)) {
                            let e = eR(t),
                                r = this.getResolvedLink(e);
                            r && n.push(r);
                        }
                    else n.push(this.root);
                    if (!n.length) return t;
                    for (let e of n) this._toJSON(e, t, r ? e.getPath() : "");
                    return t;
                }
                fromJSON(e, t = h.default.cwd()) {
                    for (let r in e) {
                        let n = e[r];
                        if (((r = eb(r, t)), "string" == typeof n)) {
                            let e = M(r);
                            this.mkdirpBase(e, 511), this.writeFileSync(r, n);
                        } else this.mkdirpBase(r, 511);
                    }
                }
                fromNestedJSON(e, t) {
                    this.fromJSON(
                        (function (e) {
                            let t = {};
                            return (
                                !(function e(r, n) {
                                    for (let i in n) {
                                        let s = n[i],
                                            o = G(r, i);
                                        "string" == typeof s ? (t[o] = s) : "object" == typeof s && null !== s && Object.keys(s).length > 0 ? e(o, s) : (t[o] = null);
                                    }
                                })("", e),
                                t
                            );
                        })(e),
                        t
                    );
                }
                reset() {
                    (this.ino = 0), (this.inodes = {}), (this.releasedInos = []), (this.fds = {}), (this.releasedFds = []), (this.openFiles = 0), (this.root = this.createLink()), this.root.setNode(this.createNode(!0));
                }
                mountSync(e, t) {
                    this.fromJSON(t, e);
                }
                openLink(e, t, r = !0) {
                    if (this.openFiles >= this.maxFiles) throw J(K, "open", e.getPath());
                    let n = e;
                    if ((r && (n = this.resolveSymlinks(e)), !n)) throw J(U, "open", e.getPath());
                    let i = n.getNode();
                    if (i.isDirectory()) {
                        if ((t & (T | v | m)) !== T) throw J(z, "open", e.getPath());
                    } else if (t & C) throw J(V, "open", e.getPath());
                    if (!(t & m) && !i.canRead()) throw J($, "open", e.getPath());
                    let s = new this.props.File(e, i, t, this.newFdNumber());
                    return (this.fds[s.fd] = s), this.openFiles++, t & w && s.truncate(), s;
                }
                openFile(e, t, r, n = !0) {
                    let i = ew(e),
                        s = n ? this.getResolvedLink(i) : this.getLink(i);
                    if (s && t & b) throw J(Y, "open", e);
                    if (!s && t & R) {
                        let e = this.getResolvedLink(i.slice(0, i.length - 1));
                        if (!e) throw J(U, "open", D + i.join(D));
                        t & R && "number" == typeof r && (s = this.createLink(e, i[i.length - 1], !1, r));
                    }
                    if (s) return this.openLink(s, t, n);
                    throw J(U, "open", e);
                }
                openBase(e, t, r, n = !0) {
                    let i = this.openFile(e, t, r, n);
                    if (!i) throw J(U, "open", e);
                    return i.fd;
                }
                openSync(e, t, r = 438) {
                    let n = eN(r),
                        i = eR(e),
                        s = Q(t);
                    return this.openBase(i, s, n);
                }
                open(e, t, r, n) {
                    let i = r,
                        s = n;
                    "function" == typeof r && ((i = 438), (s = r));
                    let o = eN((i = i || 438)),
                        a = eR(e),
                        l = Q(t);
                    this.wrapAsync(this.openBase, [a, l, o], s);
                }
                closeFile(e) {
                    this.fds[e.fd] && (this.openFiles--, delete this.fds[e.fd], this.releasedFds.push(e.fd));
                }
                closeSync(e) {
                    eF(e);
                    let t = this.getFileByFdOrThrow(e, "close");
                    this.closeFile(t);
                }
                close(e, t) {
                    eF(e), this.wrapAsync(this.closeSync, [e], t);
                }
                openFileOrGetById(e, t, r) {
                    if ("number" != typeof e) return this.openFile(eR(e), t, r);
                    {
                        let t = this.fds[e];
                        if (!t) throw J(U);
                        return t;
                    }
                }
                readBase(e, t, r, n, i) {
                    return this.getFileByFdOrThrow(e).read(t, Number(r), Number(n), i);
                }
                readSync(e, t, r, n, i) {
                    return eF(e), this.readBase(e, t, r, n, i);
                }
                read(e, t, r, n, i, s) {
                    if ((er(s), 0 === n))
                        return h.default.nextTick(() => {
                            s && s(null, 0, t);
                        });
                    (0, f.default)(() => {
                        try {
                            let o = this.readBase(e, t, r, n, i);
                            s(null, o, t);
                        } catch (e) {
                            s(e);
                        }
                    });
                }
                readFileBase(e, t, r) {
                    let n, i;
                    let s = "number" == typeof e && eL(e);
                    if (s) i = e;
                    else {
                        let r = ew(eR(e)),
                            n = this.getResolvedLink(r);
                        if (n && n.getNode().isDirectory()) throw J(z, "open", n.getPath());
                        i = this.openSync(e, t);
                    }
                    try {
                        n = eW(this.getFileByFdOrThrow(i).getBuffer(), r);
                    } finally {
                        s || this.closeSync(i);
                    }
                    return n;
                }
                readFileSync(e, t) {
                    let r = ea(t),
                        n = Q(r.flag);
                    return this.readFileBase(e, n, r.encoding);
                }
                readFile(e, t, r) {
                    let [n, i] = en(ea)(t, r),
                        s = Q(n.flag);
                    this.wrapAsync(this.readFileBase, [e, s, n.encoding], i);
                }
                writeBase(e, t, r, n, i) {
                    return this.getFileByFdOrThrow(e, "write").write(t, r, n, i);
                }
                writeSync(e, t, r, n, i) {
                    let s, o, a, l;
                    eF(e);
                    let u = "string" != typeof t;
                    u ? ((o = 0 | (r || 0)), (a = n), (l = i)) : ((l = r), (s = n));
                    let c = eO(t, s);
                    return u ? void 0 === a && (a = c.length) : ((o = 0), (a = c.length)), this.writeBase(e, c, o, a, l);
                }
                write(e, t, r, n, i, s) {
                    let o, a, l, u, c;
                    eF(e);
                    let h = typeof t,
                        d = typeof r,
                        _ = typeof n,
                        S = typeof i;
                    "string" !== h
                        ? "function" === d
                            ? (c = r)
                            : "function" === _
                                ? ((o = 0 | r), (c = n))
                                : "function" === S
                                    ? ((o = 0 | r), (a = n), (c = i))
                                    : ((o = 0 | r), (a = n), (l = i), (c = s))
                        : "function" === d
                            ? (c = r)
                            : "function" === _
                                ? ((l = r), (c = n))
                                : "function" === S && ((l = r), (u = n), (c = i));
                    let p = eO(t, u);
                    "string" !== h ? void 0 === a && (a = p.length) : ((o = 0), (a = p.length));
                    let I = er(c);
                    (0, f.default)(() => {
                        try {
                            let r = this.writeBase(e, p, o, a, l);
                            "string" !== h ? I(null, r, p) : I(null, r, t);
                        } catch (e) {
                            I(e);
                        }
                    });
                }
                writeFileBase(e, t, r, n) {
                    let i;
                    let s = "number" == typeof e;
                    i = s ? e : this.openBase(eR(e), r, n);
                    let o = 0,
                        a = t.length,
                        l = r & O ? void 0 : 0;
                    try {
                        for (; a > 0;) {
                            let e = this.writeSync(i, t, o, a, l);
                            (o += e), (a -= e), void 0 !== l && (l += e);
                        }
                    } finally {
                        s || this.closeSync(i);
                    }
                }
                writeFileSync(e, t, r) {
                    let n = eu(r),
                        i = Q(n.flag),
                        s = eN(n.mode),
                        o = eO(t, n.encoding);
                    this.writeFileBase(e, o, i, s);
                }
                writeFile(e, t, r, n) {
                    let i = r,
                        s = n;
                    "function" == typeof r && ((i = el), (s = r));
                    let o = er(s),
                        a = eu(i),
                        l = Q(a.flag),
                        u = eN(a.mode),
                        c = eO(t, a.encoding);
                    this.wrapAsync(this.writeFileBase, [e, c, l, u], o);
                }
                linkBase(e, t) {
                    let r = ew(e),
                        n = this.getLink(r);
                    if (!n) throw J(U, "link", e, t);
                    let i = ew(t),
                        s = this.getLinkParent(i);
                    if (!s) throw J(U, "link", e, t);
                    let o = i[i.length - 1];
                    if (s.getChild(o)) throw J(Y, "link", e, t);
                    let a = n.getNode();
                    a.nlink++, s.createChild(o, a);
                }
                copyFileBase(e, t, r) {
                    let i = this.readFileSync(e);
                    if (r & L && this.existsSync(t)) throw J(Y, "copyFile", e, t);
                    if (r & F) throw J(X, "copyFile", e, t);
                    this.writeFileBase(t, i, n.w, 438);
                }
                copyFileSync(e, t, r) {
                    let n = eR(e),
                        i = eR(t);
                    return this.copyFileBase(n, i, 0 | (r || 0));
                }
                copyFile(e, t, r, n) {
                    let i, s;
                    let o = eR(e),
                        a = eR(t);
                    "function" == typeof r ? ((i = 0), (s = r)) : ((i = r), (s = n)), er(s), this.wrapAsync(this.copyFileBase, [o, a, i], s);
                }
                linkSync(e, t) {
                    let r = eR(e),
                        n = eR(t);
                    this.linkBase(r, n);
                }
                link(e, t, r) {
                    let n = eR(e),
                        i = eR(t);
                    this.wrapAsync(this.linkBase, [n, i], r);
                }
                unlinkBase(e) {
                    let t = ew(e),
                        r = this.getLink(t);
                    if (!r) throw J(U, "unlink", e);
                    if (r.length) throw Error("Dir not empty...");
                    this.deleteLink(r);
                    let n = r.getNode();
                    n.nlink--, n.nlink <= 0 && this.deleteNode(n);
                }
                unlinkSync(e) {
                    let t = eR(e);
                    this.unlinkBase(t);
                }
                unlink(e, t) {
                    let r = eR(e);
                    this.wrapAsync(this.unlinkBase, [r], t);
                }
                symlinkBase(e, t) {
                    let r = ew(t),
                        n = this.getLinkParent(r);
                    if (!n) throw J(U, "symlink", e, t);
                    let i = r[r.length - 1];
                    if (n.getChild(i)) throw J(Y, "symlink", e, t);
                    let s = n.createChild(i);
                    return s.getNode().makeSymlink(ew(e)), s;
                }
                symlinkSync(e, t, r) {
                    let n = eR(e),
                        i = eR(t);
                    this.symlinkBase(n, i);
                }
                symlink(e, t, r, n) {
                    let i = er("function" == typeof r ? r : n),
                        s = eR(e),
                        o = eR(t);
                    this.wrapAsync(this.symlinkBase, [s, o], i);
                }
                realpathBase(e, t) {
                    let r = ew(e),
                        n = this.getResolvedLink(r);
                    if (!n) throw J(U, "realpath", e);
                    let i = n.getPath();
                    return (0, I.strToEncoding)(i || "/", t);
                }
                realpathSync(e, t) {
                    return this.realpathBase(eR(e), ed(t).encoding);
                }
                realpath(e, t, r) {
                    let [n, i] = e_(t, r),
                        s = eR(e);
                    this.wrapAsync(this.realpathBase, [s, n.encoding], i);
                }
                lstatBase(e, t = !1, r = !1) {
                    let n = this.getLink(ew(e));
                    if (n) return l.default.build(n.getNode(), t);
                    if (r) throw J(U, "lstat", e);
                }
                lstatSync(e, t) {
                    let { throwIfNoEntry: r = !0, bigint: n = !1 } = em(t);
                    return this.lstatBase(eR(e), n, r);
                }
                lstat(e, t, r) {
                    let [{ throwIfNoEntry: n = !0, bigint: i = !1 }, s] = ev(t, r);
                    this.wrapAsync(this.lstatBase, [eR(e), i, n], s);
                }
                statBase(e, t = !1, r = !0) {
                    let n = this.getResolvedLink(ew(e));
                    if (n) return l.default.build(n.getNode(), t);
                    if (r) throw J(U, "stat", e);
                }
                statSync(e, t) {
                    let { bigint: r = !0, throwIfNoEntry: n = !0 } = em(t);
                    return this.statBase(eR(e), r, n);
                }
                stat(e, t, r) {
                    let [{ bigint: n = !1, throwIfNoEntry: i = !0 }, s] = ev(t, r);
                    this.wrapAsync(this.statBase, [eR(e), n, i], s);
                }
                fstatBase(e, t = !1) {
                    let r = this.getFileByFd(e);
                    if (!r) throw J(x, "fstat");
                    return l.default.build(r.node, t);
                }
                fstatSync(e, t) {
                    return this.fstatBase(e, em(t).bigint);
                }
                fstat(e, t, r) {
                    let [n, i] = ev(t, r);
                    this.wrapAsync(this.fstatBase, [e, n.bigint], i);
                }
                renameBase(e, t) {
                    let r = this.getLink(ew(e));
                    if (!r) throw J(U, "rename", e, t);
                    let n = ew(t),
                        i = this.getLinkParent(n);
                    if (!i) throw J(U, "rename", e, t);
                    let s = r.parent;
                    s && s.deleteChild(r);
                    let o = n[n.length - 1];
                    (r.name = o), (r.steps = [...i.steps, o]), i.setChild(r.getName(), r);
                }
                renameSync(e, t) {
                    let r = eR(e),
                        n = eR(t);
                    this.renameBase(r, n);
                }
                rename(e, t, r) {
                    let n = eR(e),
                        i = eR(t);
                    this.wrapAsync(this.renameBase, [n, i], r);
                }
                existsBase(e) {
                    return !!this.statBase(e);
                }
                existsSync(e) {
                    try {
                        return this.existsBase(eR(e));
                    } catch (e) {
                        return !1;
                    }
                }
                exists(e, t) {
                    let r = eR(e);
                    if ("function" != typeof t) throw Error(B.CB);
                    (0, f.default)(() => {
                        try {
                            t(this.existsBase(r));
                        } catch (e) {
                            t(!1);
                        }
                    });
                }
                accessBase(e, t) {
                    this.getLinkOrThrow(e, "access");
                }
                accessSync(e, t = N) {
                    let r = eR(e);
                    (t |= 0), this.accessBase(r, t);
                }
                access(e, t, r) {
                    let n,
                        i = N;
                    "function" != typeof t ? ((i = 0 | t), (n = er(r))) : (n = t);
                    let s = eR(e);
                    this.wrapAsync(this.accessBase, [s, i], n);
                }
                appendFileSync(e, t, r = ec) {
                    let n = ef(r);
                    (!n.flag || eL(e)) && (n.flag = "a"), this.writeFileSync(e, t, n);
                }
                appendFile(e, t, r, n) {
                    let [i, s] = eh(r, n);
                    (!i.flag || eL(e)) && (i.flag = "a"), this.writeFile(e, t, i, s);
                }
                readdirBase(e, t) {
                    let r = ew(e),
                        n = this.getResolvedLink(r);
                    if (!n) throw J(U, "readdir", e);
                    if (!n.getNode().isDirectory()) throw J(V, "scandir", e);
                    if (t.withFileTypes) {
                        let e = [];
                        for (let r in n.children) {
                            let i = n.getChild(r);
                            i && e.push(u.default.build(i, t.encoding));
                        }
                        return k || "buffer" === t.encoding || e.sort((e, t) => (e.name < t.name ? -1 : e.name > t.name ? 1 : 0)), e;
                    }
                    let i = [];
                    for (let e in n.children) i.push((0, I.strToEncoding)(e, t.encoding));
                    return k || "buffer" === t.encoding || i.sort(), i;
                }
                readdirSync(e, t) {
                    let r = ey(t),
                        n = eR(e);
                    return this.readdirBase(n, r);
                }
                readdir(e, t, r) {
                    let [n, i] = eg(t, r),
                        s = eR(e);
                    this.wrapAsync(this.readdirBase, [s, n], i);
                }
                readlinkBase(e, t) {
                    let r = this.getLinkOrThrow(e, "readlink").getNode();
                    if (!r.isSymlink()) throw J(j, "readlink", e);
                    let n = D + r.symlink.join(D);
                    return (0, I.strToEncoding)(n, t);
                }
                readlinkSync(e, t) {
                    let r = es(t),
                        n = eR(e);
                    return this.readlinkBase(n, r.encoding);
                }
                readlink(e, t, r) {
                    let [n, i] = eo(t, r),
                        s = eR(e);
                    this.wrapAsync(this.readlinkBase, [s, n.encoding], i);
                }
                fsyncBase(e) {
                    this.getFileByFdOrThrow(e, "fsync");
                }
                fsyncSync(e) {
                    this.fsyncBase(e);
                }
                fsync(e, t) {
                    this.wrapAsync(this.fsyncBase, [e], t);
                }
                fdatasyncBase(e) {
                    this.getFileByFdOrThrow(e, "fdatasync");
                }
                fdatasyncSync(e) {
                    this.fdatasyncBase(e);
                }
                fdatasync(e, t) {
                    this.wrapAsync(this.fdatasyncBase, [e], t);
                }
                ftruncateBase(e, t) {
                    this.getFileByFdOrThrow(e, "ftruncate").truncate(t);
                }
                ftruncateSync(e, t) {
                    this.ftruncateBase(e, t);
                }
                ftruncate(e, t, r) {
                    let n = "number" == typeof t ? t : 0,
                        i = er("number" == typeof t ? r : t);
                    this.wrapAsync(this.ftruncateBase, [e, n], i);
                }
                truncateBase(e, t) {
                    let r = this.openSync(e, "r+");
                    try {
                        this.ftruncateSync(r, t);
                    } finally {
                        this.closeSync(r);
                    }
                }
                truncateSync(e, t) {
                    if (eL(e)) return this.ftruncateSync(e, t);
                    this.truncateBase(e, t);
                }
                truncate(e, t, r) {
                    let n = "number" == typeof t ? t : 0,
                        i = er("number" == typeof t ? r : t);
                    if (eL(e)) return this.ftruncate(e, n, i);
                    this.wrapAsync(this.truncateBase, [e, n], i);
                }
                futimesBase(e, t, r) {
                    let n = this.getFileByFdOrThrow(e, "futimes").node;
                    (n.atime = new Date(1e3 * t)), (n.mtime = new Date(1e3 * r));
                }
                futimesSync(e, t, r) {
                    this.futimesBase(e, eD(t), eD(r));
                }
                futimes(e, t, r, n) {
                    this.wrapAsync(this.futimesBase, [e, eD(t), eD(r)], n);
                }
                utimesBase(e, t, r) {
                    let n = this.openSync(e, "r");
                    try {
                        this.futimesBase(n, t, r);
                    } finally {
                        this.closeSync(n);
                    }
                }
                utimesSync(e, t, r) {
                    this.utimesBase(eR(e), eD(t), eD(r));
                }
                utimes(e, t, r, n) {
                    this.wrapAsync(this.utimesBase, [eR(e), eD(t), eD(r)], n);
                }
                mkdirBase(e, t) {
                    let r = ew(e);
                    if (!r.length) throw J(Y, "mkdir", e);
                    let n = this.getLinkParentAsDirOrThrow(e, "mkdir"),
                        i = r[r.length - 1];
                    if (n.getChild(i)) throw J(Y, "mkdir", e);
                    n.createChild(i, this.createNode(!0, t));
                }
                mkdirpBase(e, t) {
                    let r = ew(e),
                        n = this.root;
                    for (let e = 0; e < r.length; e++) {
                        let i = r[e];
                        if (!n.getNode().isDirectory()) throw J(V, "mkdir", n.getPath());
                        let s = n.getChild(i);
                        if (s) {
                            if (s.getNode().isDirectory()) n = s;
                            else throw J(V, "mkdir", s.getPath());
                        } else n = n.createChild(i, this.createNode(!0, t));
                    }
                }
                mkdirSync(e, t) {
                    let r = ep(t),
                        n = eN(r.mode, 511),
                        i = eR(e);
                    r.recursive ? this.mkdirpBase(i, n) : this.mkdirBase(i, n);
                }
                mkdir(e, t, r) {
                    let n = ep(t),
                        i = er("function" == typeof t ? t : r),
                        s = eN(n.mode, 511),
                        o = eR(e);
                    n.recursive ? this.wrapAsync(this.mkdirpBase, [o, s], i) : this.wrapAsync(this.mkdirBase, [o, s], i);
                }
                mkdirpSync(e, t) {
                    this.mkdirSync(e, { mode: t, recursive: !0 });
                }
                mkdirp(e, t, r) {
                    let n = "function" == typeof t ? void 0 : t,
                        i = er("function" == typeof t ? t : r);
                    this.mkdir(e, { mode: n, recursive: !0 }, i);
                }
                mkdtempBase(e, t, r = 5) {
                    let n = e + this.genRndStr();
                    try {
                        return this.mkdirBase(n, 511), (0, I.strToEncoding)(n, t);
                    } catch (n) {
                        if (n.code === Y) {
                            if (r > 1) return this.mkdtempBase(e, t, r - 1);
                            throw Error("Could not create temp dir.");
                        }
                        throw n;
                    }
                }
                mkdtempSync(e, t) {
                    let { encoding: r } = es(t);
                    if (!e || "string" != typeof e) throw TypeError("filename prefix is required");
                    return eC(e), this.mkdtempBase(e, r);
                }
                mkdtemp(e, t, r) {
                    let [{ encoding: n }, i] = eo(t, r);
                    if (!e || "string" != typeof e) throw TypeError("filename prefix is required");
                    eC(e) && this.wrapAsync(this.mkdtempBase, [e, n], i);
                }
                rmdirBase(e, t) {
                    let r = eE(t),
                        n = this.getLinkAsDirOrThrow(e, "rmdir");
                    if (n.length && !r.recursive) throw J(q, "rmdir", e);
                    this.deleteLink(n);
                }
                rmdirSync(e, t) {
                    this.rmdirBase(eR(e), t);
                }
                rmdir(e, t, r) {
                    let n = eE(t),
                        i = er("function" == typeof t ? t : r);
                    this.wrapAsync(this.rmdirBase, [eR(e), n], i);
                }
                rmBase(e, t = {}) {
                    let r = this.getResolvedLink(e);
                    if (!r) {
                        if (!t.force) throw J(U, "stat", e);
                        return;
                    }
                    if (r.getNode().isDirectory() && !t.recursive) throw J(Z, "rm", e);
                    this.deleteLink(r);
                }
                rmSync(e, t) {
                    this.rmBase(eR(e), t);
                }
                rm(e, t, r) {
                    let [n, i] = eA(t, r);
                    this.wrapAsync(this.rmBase, [eR(e), n], i);
                }
                fchmodBase(e, t) {
                    this.getFileByFdOrThrow(e, "fchmod").chmod(t);
                }
                fchmodSync(e, t) {
                    this.fchmodBase(e, eN(t));
                }
                fchmod(e, t, r) {
                    this.wrapAsync(this.fchmodBase, [e, eN(t)], r);
                }
                chmodBase(e, t) {
                    let r = this.openSync(e, "r");
                    try {
                        this.fchmodBase(r, t);
                    } finally {
                        this.closeSync(r);
                    }
                }
                chmodSync(e, t) {
                    let r = eN(t),
                        n = eR(e);
                    this.chmodBase(n, r);
                }
                chmod(e, t, r) {
                    let n = eN(t),
                        i = eR(e);
                    this.wrapAsync(this.chmodBase, [i, n], r);
                }
                lchmodBase(e, t) {
                    let r = this.openBase(e, v, 0, !1);
                    try {
                        this.fchmodBase(r, t);
                    } finally {
                        this.closeSync(r);
                    }
                }
                lchmodSync(e, t) {
                    let r = eN(t),
                        n = eR(e);
                    this.lchmodBase(n, r);
                }
                lchmod(e, t, r) {
                    let n = eN(t),
                        i = eR(e);
                    this.wrapAsync(this.lchmodBase, [i, n], r);
                }
                fchownBase(e, t, r) {
                    this.getFileByFdOrThrow(e, "fchown").chown(t, r);
                }
                fchownSync(e, t, r) {
                    eP(t), eG(r), this.fchownBase(e, t, r);
                }
                fchown(e, t, r, n) {
                    eP(t), eG(r), this.wrapAsync(this.fchownBase, [e, t, r], n);
                }
                chownBase(e, t, r) {
                    this.getResolvedLinkOrThrow(e, "chown").getNode().chown(t, r);
                }
                chownSync(e, t, r) {
                    eP(t), eG(r), this.chownBase(eR(e), t, r);
                }
                chown(e, t, r, n) {
                    eP(t), eG(r), this.wrapAsync(this.chownBase, [eR(e), t, r], n);
                }
                lchownBase(e, t, r) {
                    this.getLinkOrThrow(e, "lchown").getNode().chown(t, r);
                }
                lchownSync(e, t, r) {
                    eP(t), eG(r), this.lchownBase(eR(e), t, r);
                }
                lchown(e, t, r, n) {
                    eP(t), eG(r), this.wrapAsync(this.lchownBase, [eR(e), t, r], n);
                }
                watchFile(e, t, r) {
                    let n = eR(e),
                        i = t,
                        s = r;
                    if (("function" == typeof i && ((s = t), (i = null)), "function" != typeof s)) throw Error('"watchFile()" requires a listener function');
                    let o = 5007,
                        a = !0;
                    i && "object" == typeof i && ("number" == typeof i.interval && (o = i.interval), "boolean" == typeof i.persistent && (a = i.persistent));
                    let l = this.statWatchers[n];
                    return l || ((l = new this.StatWatcher()).start(n, a, o), (this.statWatchers[n] = l)), l.addListener("change", s), l;
                }
                unwatchFile(e, t) {
                    let r = eR(e),
                        n = this.statWatchers[r];
                    n && ("function" == typeof t ? n.removeListener("change", t) : n.removeAllListeners("change"), 0 === n.listenerCount("change") && (n.stop(), delete this.statWatchers[r]));
                }
                createReadStream(e, t) {
                    return new this.ReadStream(e, t);
                }
                createWriteStream(e, t) {
                    return new this.WriteStream(e, t);
                }
                watch(e, t, r) {
                    let n = eR(e),
                        i = t;
                    "function" == typeof t && ((r = t), (i = null));
                    let { persistent: s, recursive: o, encoding: a } = es(i);
                    void 0 === s && (s = !0), void 0 === o && (o = !1);
                    let l = new this.FSWatcher();
                    return l.start(n, s, o, a), r && l.addListener("change", r), l;
                }
            }
            function ek(e) {
                e.emit("stop");
            }
            (t.Volume = eM), (eM.fd = 2147483647);
            class eB extends p.EventEmitter {
                constructor(e) {
                    super(),
                        (this.onInterval = () => {
                            try {
                                let e = this.vol.statSync(this.filename);
                                this.hasChanged(e) && (this.emit("change", e, this.prev), (this.prev = e));
                            } finally {
                                this.loop();
                            }
                        }),
                        (this.vol = e);
                }
                loop() {
                    this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
                }
                hasChanged(e) {
                    return e.mtimeMs > this.prev.mtimeMs || e.nlink !== this.prev.nlink;
                }
                start(e, t = !0, n = 5007) {
                    (this.filename = eR(e)), (this.setTimeout = t ? setTimeout.bind("undefined" != typeof globalThis ? globalThis : r.g) : d.default), (this.interval = n), (this.prev = this.vol.statSync(this.filename)), this.loop();
                }
                stop() {
                    clearTimeout(this.timeoutRef), h.default.nextTick(ek, this);
                }
            }
            function eH(e, t, r) {
                if (!(this instanceof eH)) return new eH(e, t, r);
                if (
                    ((this._vol = e),
                        void 0 === (r = Object.assign({}, ee(r, {}))).highWaterMark && (r.highWaterMark = 65536),
                        _.Readable.call(this, r),
                        (this.path = eR(t)),
                        (this.fd = void 0 === r.fd ? null : r.fd),
                        (this.flags = void 0 === r.flags ? "r" : r.flags),
                        (this.mode = void 0 === r.mode ? 438 : r.mode),
                        (this.start = r.start),
                        (this.end = r.end),
                        (this.autoClose = void 0 === r.autoClose || r.autoClose),
                        (this.pos = void 0),
                        (this.bytesRead = 0),
                        void 0 !== this.start)
                ) {
                    if ("number" != typeof this.start) throw TypeError('"start" option must be a Number');
                    if (void 0 === this.end) this.end = 1 / 0;
                    else if ("number" != typeof this.end) throw TypeError('"end" option must be a Number');
                    if (this.start > this.end) throw Error('"start" option must be <= "end" option');
                    this.pos = this.start;
                }
                "number" != typeof this.fd && this.open(),
                    this.on("end", function () {
                        this.autoClose && this.destroy && this.destroy();
                    });
            }
            function eU(e) {
                this.close();
            }
            function ex(e, t, r) {
                if (!(this instanceof ex)) return new ex(e, t, r);
                if (
                    ((this._vol = e),
                        (r = Object.assign({}, ee(r, {}))),
                        _.Writable.call(this, r),
                        (this.path = eR(t)),
                        (this.fd = void 0 === r.fd ? null : r.fd),
                        (this.flags = void 0 === r.flags ? "w" : r.flags),
                        (this.mode = void 0 === r.mode ? 438 : r.mode),
                        (this.start = r.start),
                        (this.autoClose = void 0 === r.autoClose || !!r.autoClose),
                        (this.pos = void 0),
                        (this.bytesWritten = 0),
                        void 0 !== this.start)
                ) {
                    if ("number" != typeof this.start) throw TypeError('"start" option must be a Number');
                    if (this.start < 0) throw Error('"start" must be >= zero');
                    this.pos = this.start;
                }
                r.encoding && this.setDefaultEncoding(r.encoding),
                    "number" != typeof this.fd && this.open(),
                    this.once("finish", function () {
                        this.autoClose && this.close();
                    });
            }
            (t.StatWatcher = eB),
                A.inherits(eH, _.Readable),
                (t.ReadStream = eH),
                (eH.prototype.open = function () {
                    var e = this;
                    this._vol.open(this.path, this.flags, this.mode, (t, r) => {
                        if (t) {
                            e.autoClose && e.destroy && e.destroy(), e.emit("error", t);
                            return;
                        }
                        (e.fd = r), e.emit("open", r), e.read();
                    });
                }),
                (eH.prototype._read = function (e) {
                    if ("number" != typeof this.fd)
                        return this.once("open", function () {
                            this._read(e);
                        });
                    if (!this.destroyed) {
                        if (!i || i.length - i.used < 128) {
                            var t;
                            (t = this._readableState.highWaterMark), ((i = (0, c.bufferAllocUnsafe)(t)).used = 0);
                        }
                        var r = i,
                            n = Math.min(i.length - i.used, e),
                            s = i.used;
                        if ((void 0 !== this.pos && (n = Math.min(this.end - this.pos + 1, n)), n <= 0)) return this.push(null);
                        var o = this;
                        this._vol.read(this.fd, i, i.used, n, this.pos, function (e, t) {
                            if (e) o.autoClose && o.destroy && o.destroy(), o.emit("error", e);
                            else {
                                var n = null;
                                t > 0 && ((o.bytesRead += t), (n = r.slice(s, s + t))), o.push(n);
                            }
                        }),
                            void 0 !== this.pos && (this.pos += n),
                            (i.used += n);
                    }
                }),
                (eH.prototype._destroy = function (e, t) {
                    this.close((r) => {
                        t(e || r);
                    });
                }),
                (eH.prototype.close = function (e) {
                    if ((e && this.once("close", e), this.closed || "number" != typeof this.fd)) {
                        if ("number" != typeof this.fd) {
                            this.once("open", eU);
                            return;
                        }
                        return h.default.nextTick(() => this.emit("close"));
                    }
                    "boolean" == typeof this._readableState?.closed ? (this._readableState.closed = !0) : (this.closed = !0),
                        this._vol.close(this.fd, (e) => {
                            e ? this.emit("error", e) : this.emit("close");
                        }),
                        (this.fd = null);
                }),
                A.inherits(ex, _.Writable),
                (t.WriteStream = ex),
                (ex.prototype.open = function () {
                    this._vol.open(
                        this.path,
                        this.flags,
                        this.mode,
                        function (e, t) {
                            if (e) {
                                this.autoClose && this.destroy && this.destroy(), this.emit("error", e);
                                return;
                            }
                            (this.fd = t), this.emit("open", t);
                        }.bind(this)
                    );
                }),
                (ex.prototype._write = function (e, t, r) {
                    if (!(e instanceof c.Buffer || e instanceof Uint8Array)) return this.emit("error", Error("Invalid data"));
                    if ("number" != typeof this.fd)
                        return this.once("open", function () {
                            this._write(e, t, r);
                        });
                    var n = this;
                    this._vol.write(this.fd, e, 0, e.length, this.pos, (e, t) => {
                        if (e) return n.autoClose && n.destroy && n.destroy(), r(e);
                        (n.bytesWritten += t), r();
                    }),
                        void 0 !== this.pos && (this.pos += e.length);
                }),
                (ex.prototype._writev = function (e, t) {
                    if ("number" != typeof this.fd)
                        return this.once("open", function () {
                            this._writev(e, t);
                        });
                    let r = this,
                        n = e.length,
                        i = Array(n);
                    for (var s = 0, o = 0; o < n; o++) {
                        var a = e[o].chunk;
                        (i[o] = a), (s += a.length);
                    }
                    let l = c.Buffer.concat(i);
                    this._vol.write(this.fd, l, 0, l.length, this.pos, (e, n) => {
                        if (e) return r.destroy && r.destroy(), t(e);
                        (r.bytesWritten += n), t();
                    }),
                        void 0 !== this.pos && (this.pos += s);
                }),
                (ex.prototype.close = function (e) {
                    if ((e && this.once("close", e), this.closed || "number" != typeof this.fd)) {
                        if ("number" != typeof this.fd) {
                            this.once("open", eU);
                            return;
                        }
                        return h.default.nextTick(() => this.emit("close"));
                    }
                    "boolean" == typeof this._writableState?.closed ? (this._writableState.closed = !0) : (this.closed = !0),
                        this._vol.close(this.fd, (e) => {
                            e ? this.emit("error", e) : this.emit("close");
                        }),
                        (this.fd = null);
                }),
                (ex.prototype._destroy = eH.prototype._destroy),
                (ex.prototype.destroySoon = ex.prototype.end);
            class ej extends p.EventEmitter {
                constructor(e) {
                    super(),
                        (this._filename = ""),
                        (this._filenameEncoded = ""),
                        (this._recursive = !1),
                        (this._encoding = I.ENCODING_UTF8),
                        (this._onNodeChange = () => {
                            this._emit("change");
                        }),
                        (this._onParentChild = (e) => {
                            e.getName() === this._getName() && this._emit("rename");
                        }),
                        (this._emit = (e) => {
                            this.emit("change", e, this._filenameEncoded);
                        }),
                        (this._persist = () => {
                            this._timer = setTimeout(this._persist, 1e6);
                        }),
                        (this._vol = e);
                }
                _getName() {
                    return this._steps[this._steps.length - 1];
                }
                start(e, t = !0, r = !1, n = I.ENCODING_UTF8) {
                    (this._filename = eR(e)), (this._steps = ew(this._filename)), (this._filenameEncoded = (0, I.strToEncoding)(this._filename)), (this._recursive = r), (this._encoding = n);
                    try {
                        this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
                    } catch (t) {
                        let e = Error(`watch ${this._filename} ${t.code}`);
                        throw ((e.code = t.code), (e.errno = t.code), e);
                    }
                    this._link.getNode().on("change", this._onNodeChange), this._link.on("child:add", this._onNodeChange), this._link.on("child:delete", this._onNodeChange);
                    let i = this._link.parent;
                    i && (i.setMaxListeners(i.getMaxListeners() + 1), i.on("child:delete", this._onParentChild)), t && this._persist();
                }
                close() {
                    clearTimeout(this._timer), this._link.getNode().removeListener("change", this._onNodeChange);
                    let e = this._link.parent;
                    e && e.removeListener("child:delete", this._onParentChild);
                }
            }
            t.FSWatcher = ej;
        },
        14539: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ufs = t.Union = void 0);
            var n = r(9806);
            (t.Union = n.Union), (t.ufs = new n.Union()), (t.default = t.ufs);
        },
        9806: function (e, t, r) {
            "use strict";
            var n = r(48764).Buffer,
                i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                        return new (r || (r = Promise))(function (i, s) {
                            function o(e) {
                                try {
                                    l(n.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function a(e) {
                                try {
                                    l(n.throw(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? i(e.value)
                                    : ((t = e.value) instanceof r
                                        ? t
                                        : new r(function (e) {
                                            e(t);
                                        })
                                    ).then(o, a);
                            }
                            l((n = n.apply(e, t || [])).next());
                        });
                    },
                s =
                    (this && this.__generator) ||
                    function (e, t) {
                        var r,
                            n,
                            i,
                            s,
                            o = {
                                label: 0,
                                sent: function () {
                                    if (1 & i[0]) throw i[1];
                                    return i[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (s = { next: a(0), throw: a(1), return: a(2) }),
                            "function" == typeof Symbol &&
                            (s[Symbol.iterator] = function () {
                                return this;
                            }),
                            s
                        );
                        function a(s) {
                            return function (a) {
                                return (function (s) {
                                    if (r) throw TypeError("Generator is already executing.");
                                    for (; o;)
                                        try {
                                            if (((r = 1), n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done)) return i;
                                            switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                                case 0:
                                                case 1:
                                                    i = s;
                                                    break;
                                                case 4:
                                                    return o.label++, { value: s[1], done: !1 };
                                                case 5:
                                                    o.label++, (n = s[1]), (s = [0]);
                                                    continue;
                                                case 7:
                                                    (s = o.ops.pop()), o.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                        o = 0;
                                                        continue;
                                                    }
                                                    if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                                        o.label = s[1];
                                                        break;
                                                    }
                                                    if (6 === s[0] && o.label < i[1]) {
                                                        (o.label = i[1]), (i = s);
                                                        break;
                                                    }
                                                    if (i && o.label < i[2]) {
                                                        (o.label = i[2]), o.ops.push(s);
                                                        break;
                                                    }
                                                    i[2] && o.ops.pop(), o.trys.pop();
                                                    continue;
                                            }
                                            s = t.call(e, o);
                                        } catch (e) {
                                            (s = [6, e]), (n = 0);
                                        } finally {
                                            r = i = 0;
                                        }
                                    if (5 & s[0]) throw s[1];
                                    return { value: s[0] ? s[1] : void 0, done: !0 };
                                })([s, a]);
                            };
                        }
                    },
                o =
                    (this && this.__values) ||
                    function (e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            r = t && e[t],
                            n = 0;
                        if (r) return r.call(e);
                        if (e && "number" == typeof e.length)
                            return {
                                next: function () {
                                    return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                                },
                            };
                        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                    },
                a =
                    (this && this.__read) ||
                    function (e, t) {
                        var r = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!r) return e;
                        var n,
                            i,
                            s = r.call(e),
                            o = [];
                        try {
                            for (; (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value);
                        } catch (e) {
                            i = { error: e };
                        } finally {
                            try {
                                n && !n.done && (r = s.return) && r.call(s);
                            } finally {
                                if (i) throw i.error;
                            }
                        }
                        return o;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Union = void 0);
            var l = r(79681),
                u = r(35659),
                c = u.fsAsyncMethods,
                f = u.fsSyncMethods,
                h = new Set(["existsSync", "readdir", "readdirSync", "createReadStream", "createWriteStream", "watch", "watchFile", "unwatchFile"]),
                d = new Set(["ENOTDIR", "EEXIST"]),
                _ = [
                    "access",
                    "copyFile",
                    "open",
                    "opendir",
                    "rename",
                    "truncate",
                    "rmdir",
                    "mkdir",
                    "readdir",
                    "readlink",
                    "symlink",
                    "lstat",
                    "stat",
                    "link",
                    "unlink",
                    "chmod",
                    "lchmod",
                    "lchown",
                    "chown",
                    "utimes",
                    "realpath",
                    "mkdtemp",
                    "writeFile",
                    "appendFile",
                    "readFile",
                ],
                S = (function () {
                    function e() {
                        var e,
                            t,
                            r,
                            u,
                            S,
                            p,
                            I,
                            E,
                            A = this;
                        (this.fss = []),
                            (this.ReadStream = l.Readable),
                            (this.WriteStream = l.Writable),
                            (this.promises = {}),
                            (this.unwatchFile = function () {
                                for (var e, t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                                try {
                                    for (var i = o(A.fss), s = i.next(); !s.done; s = i.next()) {
                                        var a = s.value;
                                        try {
                                            a.unwatchFile.apply(a, r);
                                        } catch (e) { }
                                    }
                                } catch (t) {
                                    e = { error: t };
                                } finally {
                                    try {
                                        s && !s.done && (t = i.return) && t.call(i);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                            }),
                            (this.watch = function () {
                                for (var e, t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                                var i = [];
                                try {
                                    for (var s = o(A.fss), l = s.next(); !l.done; l = s.next()) {
                                        var u = l.value;
                                        try {
                                            var c = u.watch.apply(u, r);
                                            i.push(c);
                                        } catch (e) { }
                                    }
                                } catch (t) {
                                    e = { error: t };
                                } finally {
                                    try {
                                        l && !l.done && (t = s.return) && t.call(s);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                                return new Proxy(
                                    {},
                                    {
                                        get: function (e, t) {
                                            var r,
                                                n,
                                                s,
                                                l = [];
                                            try {
                                                for (var u = o(i), c = u.next(); !c.done; c = u.next()) {
                                                    var f = c.value;
                                                    (s = f[t]), "function" == typeof s && l.push([f, s]);
                                                }
                                            } catch (e) {
                                                r = { error: e };
                                            } finally {
                                                try {
                                                    c && !c.done && (n = u.return) && n.call(u);
                                                } finally {
                                                    if (r) throw r.error;
                                                }
                                            }
                                            return l.length
                                                ? function () {
                                                    for (var e, t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                                                    try {
                                                        for (var i = o(l), s = i.next(); !s.done; s = i.next()) {
                                                            var u = a(s.value, 2),
                                                                c = u[0];
                                                            u[1].apply(c, r);
                                                        }
                                                    } catch (t) {
                                                        e = { error: t };
                                                    } finally {
                                                        try {
                                                            s && !s.done && (t = i.return) && t.call(i);
                                                        } finally {
                                                            if (e) throw e.error;
                                                        }
                                                    }
                                                }
                                                : s;
                                        },
                                    }
                                );
                            }),
                            (this.watchFile = function () {
                                for (var e, t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                                try {
                                    for (var i = o(A.fss), s = i.next(); !s.done; s = i.next()) {
                                        var a = s.value;
                                        try {
                                            a.watchFile.apply(a, r);
                                        } catch (e) { }
                                    }
                                } catch (t) {
                                    e = { error: t };
                                } finally {
                                    try {
                                        s && !s.done && (t = i.return) && t.call(i);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                            }),
                            (this.existsSync = function (e) {
                                var t, r;
                                try {
                                    for (var n = o(A.fss), i = n.next(); !i.done; i = n.next()) {
                                        var s = i.value;
                                        try {
                                            if (s.existsSync(e)) return !0;
                                        } catch (e) { }
                                    }
                                } catch (e) {
                                    t = { error: e };
                                } finally {
                                    try {
                                        i && !i.done && (r = n.return) && r.call(n);
                                    } finally {
                                        if (t) throw t.error;
                                    }
                                }
                                return !1;
                            }),
                            (this.readdir = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                var r = e.length - 1,
                                    n = e[r];
                                "function" != typeof n && ((n = null), r++);
                                var i = null,
                                    s = new Map(),
                                    a = !1,
                                    l = function (t, u) {
                                        if ((void 0 === t && (t = 0), u)) {
                                            if (d.has(u.code)) {
                                                n && n(u);
                                                return;
                                            }
                                            (u.prev = i), (i = u);
                                        }
                                        if (t >= A.fss.length) {
                                            n && (a ? n(null, A.sortedArrayFromReaddirResult(s)) : n(u || Error("No file systems attached.")));
                                            return;
                                        }
                                        e[r] = function (e, r) {
                                            var i, c;
                                            if ((e || (a = !0), 0 === s.size && e)) return l(t + 1, e);
                                            if (r)
                                                try {
                                                    for (var f = o(r), h = f.next(); !h.done; h = f.next()) {
                                                        var d = h.value;
                                                        s.set(A.pathFromReaddirEntry(d), d);
                                                    }
                                                } catch (e) {
                                                    i = { error: e };
                                                } finally {
                                                    try {
                                                        h && !h.done && (c = f.return) && c.call(f);
                                                    } finally {
                                                        if (i) throw i.error;
                                                    }
                                                }
                                            return t === A.fss.length - 1 ? n(null, A.sortedArrayFromReaddirResult(s)) : l(t + 1, u);
                                        };
                                        var c = A.fss.length - t - 1,
                                            f = A.fss[c],
                                            h = f.readdir;
                                        h ? h.apply(f, e) : l(t + 1, Error("Method not supported: readdir"));
                                    };
                                l();
                            }),
                            (this.readdirSync = function () {
                                for (var e, t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                                for (var i = null, s = new Map(), a = !1, l = A.fss.length - 1; l >= 0; l--) {
                                    var u = A.fss[l];
                                    try {
                                        if (!u.readdirSync) throw Error('Method not supported: "readdirSync" with args "'.concat(r, '"'));
                                        try {
                                            for (var c = ((e = void 0), o(u.readdirSync.apply(u, r))), f = c.next(); !f.done; f = c.next()) {
                                                var h = f.value;
                                                s.set(A.pathFromReaddirEntry(h), h);
                                            }
                                        } catch (t) {
                                            e = { error: t };
                                        } finally {
                                            try {
                                                f && !f.done && (t = c.return) && t.call(c);
                                            } finally {
                                                if (e) throw e.error;
                                            }
                                        }
                                        a = !0;
                                    } catch (e) {
                                        if (d.has(e.code) || ((e.prev = i), (i = e), !l && !a)) throw e;
                                    }
                                }
                                return A.sortedArrayFromReaddirResult(s);
                            }),
                            (this.readdirPromise = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return i(A, void 0, void 0, function () {
                                    var t, r, n, i, a, l, u, c, f, h;
                                    return s(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                (t = null), (r = new Map()), (n = this.fss.length - 1), (s.label = 1);
                                            case 1:
                                                if (!(n >= 0)) return [3, 13];
                                                (i = this.fss[n]), (s.label = 2);
                                            case 2:
                                                if ((s.trys.push([2, 11, , 12]), !i.promises || !i.promises.readdir)) throw Error('Method not supported: "readdirSync" with args "'.concat(e, '"'));
                                                s.label = 3;
                                            case 3:
                                                return s.trys.push([3, 8, 9, 10]), (f = void 0), [4, i.promises.readdir.apply(i, e)];
                                            case 4:
                                                (l = (a = o.apply(void 0, [s.sent()])).next()), (s.label = 5);
                                            case 5:
                                                if (l.done) return [3, 7];
                                                (u = l.value), r.set(this.pathFromReaddirEntry(u), u), (s.label = 6);
                                            case 6:
                                                return (l = a.next()), [3, 5];
                                            case 7:
                                                return [3, 10];
                                            case 8:
                                                return (f = { error: s.sent() }), [3, 10];
                                            case 9:
                                                try {
                                                    l && !l.done && (h = a.return) && h.call(a);
                                                } finally {
                                                    if (f) throw f.error;
                                                }
                                                return [7];
                                            case 10:
                                                return [3, 12];
                                            case 11:
                                                if ((((c = s.sent()).prev = t), (t = c), 0 === r.size && !n)) throw c;
                                                return [3, 12];
                                            case 12:
                                                return n--, [3, 1];
                                            case 13:
                                                return [2, this.sortedArrayFromReaddirResult(r)];
                                        }
                                    });
                                });
                            }),
                            (this.pathFromReaddirEntry = function (e) {
                                return e instanceof n || "string" == typeof e ? String(e) : e.name;
                            }),
                            (this.sortedArrayFromReaddirResult = function (e) {
                                var t,
                                    r,
                                    n = [];
                                try {
                                    for (var i = o(Array.from(e.keys()).sort()), s = i.next(); !s.done; s = i.next()) {
                                        var a = s.value,
                                            l = e.get(a);
                                        void 0 !== l && n.push(l);
                                    }
                                } catch (e) {
                                    t = { error: e };
                                } finally {
                                    try {
                                        s && !s.done && (r = i.return) && r.call(i);
                                    } finally {
                                        if (t) throw t.error;
                                    }
                                }
                                return n;
                            }),
                            (this.createReadStream = function (e) {
                                var t,
                                    r,
                                    n = null;
                                try {
                                    for (var i = o(A.fss), s = i.next(); !s.done; s = i.next()) {
                                        var a = s.value;
                                        try {
                                            if (!a.createReadStream) throw Error('Method not supported: "createReadStream"');
                                            if (a.existsSync && !a.existsSync(e)) throw Error('file "'.concat(e, '" does not exists'));
                                            var l = a.createReadStream(e);
                                            if (!l) throw Error("no valid stream");
                                            return (A.ReadStream = a.ReadStream), l;
                                        } catch (e) {
                                            n = e;
                                        }
                                    }
                                } catch (e) {
                                    t = { error: e };
                                } finally {
                                    try {
                                        s && !s.done && (r = i.return) && r.call(i);
                                    } finally {
                                        if (t) throw t.error;
                                    }
                                }
                                throw n;
                            }),
                            (this.createWriteStream = function (e) {
                                var t,
                                    r,
                                    n = null;
                                try {
                                    for (var i = o(A.fss), s = i.next(); !s.done; s = i.next()) {
                                        var a = s.value;
                                        try {
                                            if (!a.createWriteStream) throw Error('Method not supported: "createWriteStream"');
                                            a.statSync(e);
                                            var l = a.createWriteStream(e);
                                            if (!l) throw Error("no valid stream");
                                            return (A.WriteStream = a.WriteStream), l;
                                        } catch (e) {
                                            n = e;
                                        }
                                    }
                                } catch (e) {
                                    t = { error: e };
                                } finally {
                                    try {
                                        s && !s.done && (r = i.return) && r.call(i);
                                    } finally {
                                        if (t) throw t.error;
                                    }
                                }
                                throw n;
                            });
                        var y = function (e) {
                            h.has(e) ||
                                (g[e] = function () {
                                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                    return A.syncMethod(e, t);
                                });
                        },
                            g = this;
                        try {
                            for (var T = o(f), m = T.next(); !m.done; m = T.next()) {
                                var v = m.value;
                                y(v);
                            }
                        } catch (t) {
                            e = { error: t };
                        } finally {
                            try {
                                m && !m.done && (t = T.return) && t.call(T);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                        var R = function (e) {
                            h.has(e) ||
                                (b[e] = function () {
                                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                    return A.asyncMethod(e, t);
                                });
                        },
                            b = this;
                        try {
                            for (var w = o(c), O = w.next(); !O.done; O = w.next()) {
                                var v = O.value;
                                R(v);
                            }
                        } catch (e) {
                            r = { error: e };
                        } finally {
                            try {
                                O && !O.done && (u = w.return) && u.call(w);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                        var W = function (e) {
                            if ("readdir" === e) return (C.promises[e] = C.readdirPromise), "continue";
                            C.promises[e] = function () {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return A.promiseMethod(e, t);
                            };
                        },
                            C = this;
                        try {
                            for (var N = o(_), L = N.next(); !L.done; L = N.next()) {
                                var v = L.value;
                                W(v);
                            }
                        } catch (e) {
                            S = { error: e };
                        } finally {
                            try {
                                L && !L.done && (p = N.return) && p.call(N);
                            } finally {
                                if (S) throw S.error;
                            }
                        }
                        try {
                            for (var F = o(h.values()), D = F.next(); !D.done; D = F.next()) {
                                var v = D.value;
                                this[v] = this[v].bind(this);
                            }
                        } catch (e) {
                            I = { error: e };
                        } finally {
                            try {
                                D && !D.done && (E = F.return) && E.call(F);
                            } finally {
                                if (I) throw I.error;
                            }
                        }
                    }
                    return (
                        (e.prototype.use = function (e) {
                            return this.fss.push(e), this;
                        }),
                        (e.prototype.syncMethod = function (e, t) {
                            for (var r = null, n = this.fss.length - 1; n >= 0; n--) {
                                var i = this.fss[n];
                                try {
                                    if (!i[e]) throw Error('Method not supported: "'.concat(e, '" with args "').concat(t, '"'));
                                    return i[e].apply(i, t);
                                } catch (e) {
                                    if (d.has(e.code) || ((e.prev = r), (r = e), !n)) throw e;
                                }
                            }
                        }),
                        (e.prototype.asyncMethod = function (e, t) {
                            var r = this,
                                n = t.length - 1,
                                i = t[n];
                            "function" != typeof i && ((i = null), n++);
                            var s = null,
                                o = function (a, l) {
                                    if ((void 0 === a && (a = 0), null != l && d.has(null == l ? void 0 : l.code))) {
                                        i && i(l);
                                        return;
                                    }
                                    if ((l && ((l.prev = s), (s = l)), a >= r.fss.length)) {
                                        i && i(l || Error("No file systems attached."));
                                        return;
                                    }
                                    t[n] = function (e) {
                                        if (e) return o(a + 1, e);
                                        i && i.apply(i, arguments);
                                    };
                                    var u = r.fss.length - a - 1,
                                        c = r.fss[u],
                                        f = c[e];
                                    f ? f.apply(c, t) : o(a + 1, Error("Method not supported: " + e));
                                };
                            o();
                        }),
                        (e.prototype.promiseMethod = function (e, t) {
                            return i(this, void 0, void 0, function () {
                                var r, n, i, o;
                                return s(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            (r = null), (n = this.fss.length - 1), (s.label = 1);
                                        case 1:
                                            if (!(n >= 0)) return [3, 6];
                                            (i = this.fss[n].promises), (s.label = 2);
                                        case 2:
                                            if ((s.trys.push([2, 4, , 5]), !i || !i[e])) throw Error('Promise of method not supported: "'.concat(String(e), '" with args "').concat(t, '"'));
                                            return [4, i[e].apply(i, t)];
                                        case 3:
                                            return [2, s.sent()];
                                        case 4:
                                            if ((((o = s.sent()).prev = r), (r = o), !n)) throw o;
                                            return [3, 5];
                                        case 5:
                                            return n--, [3, 1];
                                        case 6:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        e
                    );
                })();
            t.Union = S;
        },
        48583: function (e, t, r) {
            "use strict";
            var n = r(38399)();
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */ function i(e, t) {
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                    if (e[i] !== t[i]) {
                        (r = e[i]), (n = t[i]);
                        break;
                    }
                return r < n ? -1 : n < r ? 1 : 0;
            }
            function s(e) {
                return r.g.Buffer && "function" == typeof r.g.Buffer.isBuffer ? r.g.Buffer.isBuffer(e) : !!(null != e && e._isBuffer);
            }
            var o = r(89539),
                a = Object.prototype.hasOwnProperty,
                l = Array.prototype.slice,
                u = "foo" === function () { }.name;
            function c(e) {
                return Object.prototype.toString.call(e);
            }
            function f(e) {
                return !s(e) && "function" == typeof r.g.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && !!(e instanceof DataView || (e.buffer && e.buffer instanceof ArrayBuffer)));
            }
            var h = (e.exports = E),
                d = /\s*function\s+([^\(\s]*)\s*/;
            function _(e) {
                if (o.isFunction(e)) {
                    if (u) return e.name;
                    var t = e.toString().match(d);
                    return t && t[1];
                }
            }
            function S(e, t) {
                return "string" == typeof e ? (e.length < t ? e : e.slice(0, t)) : e;
            }
            function p(e) {
                if (u || !o.isFunction(e)) return o.inspect(e);
                var t = _(e);
                return "[Function" + (t ? ": " + t : "") + "]";
            }
            function I(e, t, r, n, i) {
                throw new h.AssertionError({ message: r, actual: e, expected: t, operator: n, stackStartFunction: i });
            }
            function E(e, t) {
                e || I(e, !0, t, "==", h.ok);
            }
            function A(e, t, r, n) {
                if (e === t) return !0;
                if (s(e) && s(t)) return 0 === i(e, t);
                if (o.isDate(e) && o.isDate(t)) return e.getTime() === t.getTime();
                if (o.isRegExp(e) && o.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if ((null === e || "object" != typeof e) && (null === t || "object" != typeof t)) return r ? e === t : e == t;
                if (f(e) && f(t) && c(e) === c(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                if (s(e) !== s(t)) return !1;
                var a = (n = n || { actual: [], expected: [] }).actual.indexOf(e);
                return (
                    (-1 !== a && a === n.expected.indexOf(t)) ||
                    (n.actual.push(e),
                        n.expected.push(t),
                        (function (e, t, r, n) {
                            if (null == e || null == t) return !1;
                            if (o.isPrimitive(e) || o.isPrimitive(t)) return e === t;
                            if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                            var i,
                                s,
                                a = y(e),
                                u = y(t);
                            if ((a && !u) || (!a && u)) return !1;
                            if (a) return A((e = l.call(e)), (t = l.call(t)), r);
                            var c = m(e),
                                f = m(t);
                            if (c.length !== f.length) return !1;
                            for (c.sort(), f.sort(), s = c.length - 1; s >= 0; s--) if (c[s] !== f[s]) return !1;
                            for (s = c.length - 1; s >= 0; s--) if (!A(e[(i = c[s])], t[i], r, n)) return !1;
                            return !0;
                        })(e, t, r, n))
                );
            }
            function y(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e);
            }
            function g(e, t) {
                if (!e || !t) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                try {
                    if (e instanceof t) return !0;
                } catch (e) { }
                return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
            }
            function T(e, t, r, n) {
                if ("function" != typeof t) throw TypeError('"block" argument must be a function');
                "string" == typeof r && ((n = r), (r = null)),
                    (i = (function (e) {
                        var t;
                        try {
                            e();
                        } catch (e) {
                            t = e;
                        }
                        return t;
                    })(t)),
                    (n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : ".")),
                    e && !i && I(i, r, "Missing expected exception" + n);
                var i,
                    s = "string" == typeof n,
                    a = !e && o.isError(i),
                    l = !e && i && !r;
                if ((((a && s && g(i, r)) || l) && I(i, r, "Got unwanted exception" + n), (e && i && r && !g(i, r)) || (!e && i))) throw i;
            }
            (h.AssertionError = function (e) {
                (this.name = "AssertionError"),
                    (this.actual = e.actual),
                    (this.expected = e.expected),
                    (this.operator = e.operator),
                    e.message ? ((this.message = e.message), (this.generatedMessage = !1)) : ((this.message = S(p(this.actual), 128) + " " + this.operator + " " + S(p(this.expected), 128)), (this.generatedMessage = !0));
                var t = e.stackStartFunction || I;
                if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                else {
                    var r = Error();
                    if (r.stack) {
                        var n = r.stack,
                            i = _(t),
                            s = n.indexOf("\n" + i);
                        if (s >= 0) {
                            var o = n.indexOf("\n", s + 1);
                            n = n.substring(o + 1);
                        }
                        this.stack = n;
                    }
                }
            }),
                o.inherits(h.AssertionError, Error),
                (h.fail = I),
                (h.ok = E),
                (h.equal = function (e, t, r) {
                    e != t && I(e, t, r, "==", h.equal);
                }),
                (h.notEqual = function (e, t, r) {
                    e == t && I(e, t, r, "!=", h.notEqual);
                }),
                (h.deepEqual = function (e, t, r) {
                    A(e, t, !1) || I(e, t, r, "deepEqual", h.deepEqual);
                }),
                (h.deepStrictEqual = function (e, t, r) {
                    A(e, t, !0) || I(e, t, r, "deepStrictEqual", h.deepStrictEqual);
                }),
                (h.notDeepEqual = function (e, t, r) {
                    A(e, t, !1) && I(e, t, r, "notDeepEqual", h.notDeepEqual);
                }),
                (h.notDeepStrictEqual = function e(t, r, n) {
                    A(t, r, !0) && I(t, r, n, "notDeepStrictEqual", e);
                }),
                (h.strictEqual = function (e, t, r) {
                    e !== t && I(e, t, r, "===", h.strictEqual);
                }),
                (h.notStrictEqual = function (e, t, r) {
                    e === t && I(e, t, r, "!==", h.notStrictEqual);
                }),
                (h.throws = function (e, t, r) {
                    T(!0, e, t, r);
                }),
                (h.doesNotThrow = function (e, t, r) {
                    T(!1, e, t, r);
                }),
                (h.ifError = function (e) {
                    if (e) throw e;
                }),
                (h.strict = n(
                    function e(t, r) {
                        t || I(t, !0, r, "==", e);
                    },
                    h,
                    { equal: h.strictEqual, deepEqual: h.deepStrictEqual, notEqual: h.notStrictEqual, notDeepEqual: h.notDeepStrictEqual }
                )),
                (h.strict.strict = h.strict);
            var m =
                Object.keys ||
                function (e) {
                    var t = [];
                    for (var r in e) a.call(e, r) && t.push(r);
                    return t;
                };
        },
        11227: function (e, t, r) {
            let n;
            var i = r(34155);
            (t.formatArgs = function (t) {
                if (((t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff)), !this.useColors)) return;
                let r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                let n = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, (e) => {
                    "%%" !== e && (n++, "%c" === e && (i = n));
                }),
                    t.splice(i, 0, r);
            }),
                (t.save = function (e) {
                    try {
                        e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
                    } catch (e) { }
                }),
                (t.load = function () {
                    let e;
                    try {
                        e = t.storage.getItem("debug");
                    } catch (e) { }
                    return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e;
                }),
                (t.useColors = function () {
                    return (
                        ("undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs)) ||
                        (!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                            (("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                                ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                                ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                                ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
                    );
                }),
                (t.storage = (function () {
                    try {
                        return localStorage;
                    } catch (e) { }
                })()),
                (t.destroy =
                    ((n = !1),
                        () => {
                            n || ((n = !0), console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                        })),
                (t.colors = [
                    "#0000CC",
                    "#0000FF",
                    "#0033CC",
                    "#0033FF",
                    "#0066CC",
                    "#0066FF",
                    "#0099CC",
                    "#0099FF",
                    "#00CC00",
                    "#00CC33",
                    "#00CC66",
                    "#00CC99",
                    "#00CCCC",
                    "#00CCFF",
                    "#3300CC",
                    "#3300FF",
                    "#3333CC",
                    "#3333FF",
                    "#3366CC",
                    "#3366FF",
                    "#3399CC",
                    "#3399FF",
                    "#33CC00",
                    "#33CC33",
                    "#33CC66",
                    "#33CC99",
                    "#33CCCC",
                    "#33CCFF",
                    "#6600CC",
                    "#6600FF",
                    "#6633CC",
                    "#6633FF",
                    "#66CC00",
                    "#66CC33",
                    "#9900CC",
                    "#9900FF",
                    "#9933CC",
                    "#9933FF",
                    "#99CC00",
                    "#99CC33",
                    "#CC0000",
                    "#CC0033",
                    "#CC0066",
                    "#CC0099",
                    "#CC00CC",
                    "#CC00FF",
                    "#CC3300",
                    "#CC3333",
                    "#CC3366",
                    "#CC3399",
                    "#CC33CC",
                    "#CC33FF",
                    "#CC6600",
                    "#CC6633",
                    "#CC9900",
                    "#CC9933",
                    "#CCCC00",
                    "#CCCC33",
                    "#FF0000",
                    "#FF0033",
                    "#FF0066",
                    "#FF0099",
                    "#FF00CC",
                    "#FF00FF",
                    "#FF3300",
                    "#FF3333",
                    "#FF3366",
                    "#FF3399",
                    "#FF33CC",
                    "#FF33FF",
                    "#FF6600",
                    "#FF6633",
                    "#FF9900",
                    "#FF9933",
                    "#FFCC00",
                    "#FFCC33",
                ]),
                (t.log = console.debug || console.log || (() => { })),
                (e.exports = r(82447)(t));
            let { formatters: s } = e.exports;
            s.j = function (e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                }
            };
        },
        82447: function (e, t, r) {
            e.exports = function (e) {
                function t(e) {
                    let r, i, s;
                    let o = null;
                    function a(...e) {
                        if (!a.enabled) return;
                        let n = Number(new Date()),
                            i = n - (r || n);
                        (a.diff = i), (a.prev = r), (a.curr = n), (r = n), (e[0] = t.coerce(e[0])), "string" != typeof e[0] && e.unshift("%O");
                        let s = 0;
                        (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
                            if ("%%" === r) return "%";
                            s++;
                            let i = t.formatters[n];
                            if ("function" == typeof i) {
                                let t = e[s];
                                (r = i.call(a, t)), e.splice(s, 1), s--;
                            }
                            return r;
                        })),
                            t.formatArgs.call(a, e),
                            (a.log || t.log).apply(a, e);
                    }
                    return (
                        (a.namespace = e),
                        (a.useColors = t.useColors()),
                        (a.color = t.selectColor(e)),
                        (a.extend = n),
                        (a.destroy = t.destroy),
                        Object.defineProperty(a, "enabled", {
                            enumerable: !0,
                            configurable: !1,
                            get: () => (null !== o ? o : (i !== t.namespaces && ((i = t.namespaces), (s = t.enabled(e))), s)),
                            set: (e) => {
                                o = e;
                            },
                        }),
                        "function" == typeof t.init && t.init(a),
                        a
                    );
                }
                function n(e, r) {
                    let n = t(this.namespace + (void 0 === r ? ":" : r) + e);
                    return (n.log = this.log), n;
                }
                function i(e) {
                    return e
                        .toString()
                        .substring(2, e.toString().length - 2)
                        .replace(/\.\*\?$/, "*");
                }
                return (
                    (t.debug = t),
                    (t.default = t),
                    (t.coerce = function (e) {
                        return e instanceof Error ? e.stack || e.message : e;
                    }),
                    (t.disable = function () {
                        let e = [...t.names.map(i), ...t.skips.map(i).map((e) => "-" + e)].join(",");
                        return t.enable(""), e;
                    }),
                    (t.enable = function (e) {
                        let r;
                        t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
                        let n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                            i = n.length;
                        for (r = 0; r < i; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(RegExp("^" + e.slice(1) + "$")) : t.names.push(RegExp("^" + e + "$")));
                    }),
                    (t.enabled = function (e) {
                        let r, n;
                        if ("*" === e[e.length - 1]) return !0;
                        for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
                        for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
                        return !1;
                    }),
                    (t.humanize = r(57824)),
                    (t.destroy = function () {
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                    }),
                    Object.keys(e).forEach((r) => {
                        t[r] = e[r];
                    }),
                    (t.names = []),
                    (t.skips = []),
                    (t.formatters = {}),
                    (t.selectColor = function (e) {
                        let r = 0;
                        for (let t = 0; t < e.length; t++) r = ((r << 5) - r + e.charCodeAt(t)) | 0;
                        return t.colors[Math.abs(r) % t.colors.length];
                    }),
                    t.enable(t.load()),
                    t
                );
            };
        },
        17187: function (e) {
            "use strict";
            var t,
                r = "object" == typeof Reflect ? Reflect : null,
                n =
                    r && "function" == typeof r.apply
                        ? r.apply
                        : function (e, t, r) {
                            return Function.prototype.apply.call(e, t, r);
                        };
            t =
                r && "function" == typeof r.ownKeys
                    ? r.ownKeys
                    : Object.getOwnPropertySymbols
                        ? function (e) {
                            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                        }
                        : function (e) {
                            return Object.getOwnPropertyNames(e);
                        };
            var i =
                Number.isNaN ||
                function (e) {
                    return e != e;
                };
            function s() {
                s.init.call(this);
            }
            (e.exports = s),
                (e.exports.once = function (e, t) {
                    return new Promise(function (r, n) {
                        var i;
                        function s(r) {
                            e.removeListener(t, o), n(r);
                        }
                        function o() {
                            "function" == typeof e.removeListener && e.removeListener("error", s), r([].slice.call(arguments));
                        }
                        S(e, t, o, { once: !0 }), "error" !== t && ((i = { once: !0 }), "function" == typeof e.on && S(e, "error", s, i));
                    });
                }),
                (s.EventEmitter = s),
                (s.prototype._events = void 0),
                (s.prototype._eventsCount = 0),
                (s.prototype._maxListeners = void 0);
            var o = 10;
            function a(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
            }
            function l(e) {
                return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
            }
            function u(e, t, r, n) {
                if (
                    (a(r),
                        void 0 === (s = e._events) ? ((s = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), (s = e._events)), (o = s[t])),
                        void 0 === o)
                )
                    (o = s[t] = r), ++e._eventsCount;
                else if (("function" == typeof o ? (o = s[t] = n ? [r, o] : [o, r]) : n ? o.unshift(r) : o.push(r), (i = l(e)) > 0 && o.length > i && !o.warned)) {
                    o.warned = !0;
                    var i,
                        s,
                        o,
                        u = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    (u.name = "MaxListenersExceededWarning"), (u.emitter = e), (u.type = t), (u.count = o.length), console && console.warn && console.warn(u);
                }
                return e;
            }
            function c() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
            }
            function f(e, t, r) {
                var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
                    i = c.bind(n);
                return (i.listener = r), (n.wrapFn = i), i;
            }
            function h(e, t, r) {
                var n = e._events;
                if (void 0 === n) return [];
                var i = n[t];
                return void 0 === i
                    ? []
                    : "function" == typeof i
                        ? r
                            ? [i.listener || i]
                            : [i]
                        : r
                            ? (function (e) {
                                for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                                return t;
                            })(i)
                            : _(i, i.length);
            }
            function d(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length;
                }
                return 0;
            }
            function _(e, t) {
                for (var r = Array(t), n = 0; n < t; ++n) r[n] = e[n];
                return r;
            }
            function S(e, t, r, n) {
                if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
                else if ("function" == typeof e.addEventListener)
                    e.addEventListener(t, function i(s) {
                        n.once && e.removeEventListener(t, i), r(s);
                    });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                    return o;
                },
                set: function (e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    o = e;
                },
            }),
                (s.init = function () {
                    (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
                }),
                (s.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return (this._maxListeners = e), this;
                }),
                (s.prototype.getMaxListeners = function () {
                    return l(this);
                }),
                (s.prototype.emit = function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                    var i = "error" === e,
                        s = this._events;
                    if (void 0 !== s) i = i && void 0 === s.error;
                    else if (!i) return !1;
                    if (i) {
                        if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                        var o,
                            a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                        throw ((a.context = o), a);
                    }
                    var l = s[e];
                    if (void 0 === l) return !1;
                    if ("function" == typeof l) n(l, this, t);
                    else for (var u = l.length, c = _(l, u), r = 0; r < u; ++r) n(c[r], this, t);
                    return !0;
                }),
                (s.prototype.addListener = function (e, t) {
                    return u(this, e, t, !1);
                }),
                (s.prototype.on = s.prototype.addListener),
                (s.prototype.prependListener = function (e, t) {
                    return u(this, e, t, !0);
                }),
                (s.prototype.once = function (e, t) {
                    return a(t), this.on(e, f(this, e, t)), this;
                }),
                (s.prototype.prependOnceListener = function (e, t) {
                    return a(t), this.prependListener(e, f(this, e, t)), this;
                }),
                (s.prototype.removeListener = function (e, t) {
                    var r, n, i, s, o;
                    if ((a(t), void 0 === (n = this._events) || void 0 === (r = n[e]))) return this;
                    if (r === t || r.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                    else if ("function" != typeof r) {
                        for (i = -1, s = r.length - 1; s >= 0; s--)
                            if (r[s] === t || r[s].listener === t) {
                                (o = r[s].listener), (i = s);
                                break;
                            }
                        if (i < 0) return this;
                        0 === i
                            ? r.shift()
                            : (function (e, t) {
                                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                e.pop();
                            })(r, i),
                            1 === r.length && (n[e] = r[0]),
                            void 0 !== n.removeListener && this.emit("removeListener", e, o || t);
                    }
                    return this;
                }),
                (s.prototype.off = s.prototype.removeListener),
                (s.prototype.removeAllListeners = function (e) {
                    var t, r, n;
                    if (void 0 === (r = this._events)) return this;
                    if (void 0 === r.removeListener)
                        return 0 == arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== r[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]), this;
                    if (0 == arguments.length) {
                        var i,
                            s = Object.keys(r);
                        for (n = 0; n < s.length; ++n) "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
                        return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                    }
                    if ("function" == typeof (t = r[e])) this.removeListener(e, t);
                    else if (void 0 !== t) for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
                    return this;
                }),
                (s.prototype.listeners = function (e) {
                    return h(this, e, !0);
                }),
                (s.prototype.rawListeners = function (e) {
                    return h(this, e, !1);
                }),
                (s.listenerCount = function (e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t);
                }),
                (s.prototype.listenerCount = d),
                (s.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? t(this._events) : [];
                });
        },
        24290: function (e, t, r) {
            "use strict";
            var n = r(34155);
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.correctPath = function (e) {
                    return s(e.replace(/^\\\\\?\\.:\\/, "\\"));
                }),
                (t.unixify = s);
            var i = "win32" === n.platform;
            function s(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i
                    ? (e = (function (e, t) {
                        if ("string" != typeof e) throw TypeError("expected a string");
                        return (
                            (e = e.replace(/[\\\/]+/g, "/")),
                            !1 !== t &&
                            (e = (function (e) {
                                var t,
                                    r,
                                    n = e.length - 1;
                                if (n < 2) return e;
                                for (; (r = e[(t = n)]), t > 0 && ("/" === r || (i && "\\" === r));) n--;
                                return e.substr(0, n + 1);
                            })(e)),
                            e
                        );
                    })(e, t)).replace(/^([a-zA-Z]+:|\.\/)/, "")
                    : e;
            }
        },
        35659: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.fsSyncMethods = t.fsProps = t.fsAsyncMethods = void 0),
                (t.fsProps = ["constants", "F_OK", "R_OK", "W_OK", "X_OK", "Stats"]),
                (t.fsSyncMethods = [
                    "renameSync",
                    "ftruncateSync",
                    "truncateSync",
                    "chownSync",
                    "fchownSync",
                    "lchownSync",
                    "chmodSync",
                    "fchmodSync",
                    "lchmodSync",
                    "statSync",
                    "lstatSync",
                    "fstatSync",
                    "linkSync",
                    "symlinkSync",
                    "readlinkSync",
                    "realpathSync",
                    "unlinkSync",
                    "rmdirSync",
                    "mkdirSync",
                    "mkdirpSync",
                    "readdirSync",
                    "closeSync",
                    "openSync",
                    "utimesSync",
                    "futimesSync",
                    "fsyncSync",
                    "writeSync",
                    "readSync",
                    "readFileSync",
                    "writeFileSync",
                    "appendFileSync",
                    "existsSync",
                    "accessSync",
                    "fdatasyncSync",
                    "mkdtempSync",
                    "copyFileSync",
                    "rmSync",
                    "createReadStream",
                    "createWriteStream",
                ]),
                (t.fsAsyncMethods = [
                    "rename",
                    "ftruncate",
                    "truncate",
                    "chown",
                    "fchown",
                    "lchown",
                    "chmod",
                    "fchmod",
                    "lchmod",
                    "stat",
                    "lstat",
                    "fstat",
                    "link",
                    "symlink",
                    "readlink",
                    "realpath",
                    "unlink",
                    "rmdir",
                    "mkdir",
                    "mkdirp",
                    "readdir",
                    "close",
                    "open",
                    "utimes",
                    "futimes",
                    "fsync",
                    "write",
                    "read",
                    "readFile",
                    "writeFile",
                    "appendFile",
                    "exists",
                    "access",
                    "fdatasync",
                    "mkdtemp",
                    "copyFile",
                    "rm",
                    "watchFile",
                    "unwatchFile",
                    "watch",
                ]);
        },
        57824: function (e) {
            function t(e, t, r, n) {
                return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "");
            }
            e.exports = function (e, r) {
                r = r || {};
                var n,
                    i,
                    s = typeof e;
                if ("string" === s && e.length > 0)
                    return (function (e) {
                        if (!((e = String(e)).length > 100)) {
                            var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (t) {
                                var r = parseFloat(t[1]);
                                switch ((t[2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * r;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return 6048e5 * r;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return 864e5 * r;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return 36e5 * r;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return 6e4 * r;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return 1e3 * r;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return r;
                                    default:
                                        return;
                                }
                            }
                        }
                    })(e);
                if ("number" === s && isFinite(e))
                    return r.long
                        ? (n = Math.abs(e)) >= 864e5
                            ? t(e, n, 864e5, "day")
                            : n >= 36e5
                                ? t(e, n, 36e5, "hour")
                                : n >= 6e4
                                    ? t(e, n, 6e4, "minute")
                                    : n >= 1e3
                                        ? t(e, n, 1e3, "second")
                                        : e + " ms"
                        : (i = Math.abs(e)) >= 864e5
                            ? Math.round(e / 864e5) + "d"
                            : i >= 36e5
                                ? Math.round(e / 36e5) + "h"
                                : i >= 6e4
                                    ? Math.round(e / 6e4) + "m"
                                    : i >= 1e3
                                        ? Math.round(e / 1e3) + "s"
                                        : e + "ms";
                throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
            };
        },
        38399: function (e) {
            "use strict";
            e.exports = function () {
                return Object.assign;
            };
        },
        11987: function (e, t, r) {
            !(function () {
                var t = {
                    452: function (e) {
                        "use strict";
                        e.exports = r(97334);
                    },
                },
                    n = {};
                function i(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var s = (n[e] = { exports: {} }),
                        o = !0;
                    try {
                        t[e](s, s.exports, i), (o = !1);
                    } finally {
                        o && delete n[e];
                    }
                    return s.exports;
                }
                i.ab = "//";
                var s = {};
                !(function () {
                    var e,
                        t = (e = i(452)) && "object" == typeof e && "default" in e ? e.default : e,
                        r = /https?|ftp|gopher|file/;
                    function n(e) {
                        "string" == typeof e && (e = I(e));
                        var n,
                            i,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c,
                            f,
                            h =
                                ((i = (n = e).auth),
                                    (s = n.hostname),
                                    (o = n.protocol || ""),
                                    (a = n.pathname || ""),
                                    (l = n.hash || ""),
                                    (u = n.query || ""),
                                    (c = !1),
                                    (i = i ? encodeURIComponent(i).replace(/%3A/i, ":") + "@" : ""),
                                    n.host ? (c = i + n.host) : s && ((c = i + (~s.indexOf(":") ? "[" + s + "]" : s)), n.port && (c += ":" + n.port)),
                                    u && "object" == typeof u && (u = t.encode(u)),
                                    (f = n.search || (u && "?" + u) || ""),
                                    o && ":" !== o.substr(-1) && (o += ":"),
                                    n.slashes || ((!o || r.test(o)) && !1 !== c) ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a)) : c || (c = ""),
                                    l && "#" !== l[0] && (l = "#" + l),
                                    f && "?" !== f[0] && (f = "?" + f),
                                    { protocol: o, host: c, pathname: (a = a.replace(/[?#]/g, encodeURIComponent)), search: (f = f.replace("#", "%23")), hash: l });
                        return "" + h.protocol + h.host + h.pathname + h.search + h.hash;
                    }
                    var o = "http://",
                        a = o + "w.w",
                        l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        u = /https?|ftp|gopher|file/;
                    function c(e, t) {
                        var r = "string" == typeof e ? I(e) : e;
                        e = "object" == typeof e ? n(e) : e;
                        var i = I(t),
                            s = "";
                        r.protocol && !r.slashes && ((s = r.protocol), (e = e.replace(r.protocol, "")), (s += "/" === t[0] || "/" === e[0] ? "/" : "")),
                            s && i.protocol && ((s = ""), i.slashes || ((s = i.protocol), (t = t.replace(i.protocol, ""))));
                        var c = e.match(l);
                        c && !i.protocol && ((e = e.substr((s = c[1] + (c[2] || "")).length)), /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
                        var f = new URL(e, a + "/"),
                            h = new URL(t, f).toString().replace(a, ""),
                            d = i.protocol || r.protocol;
                        return (
                            (d += r.slashes || i.slashes ? "//" : ""),
                            !s && d ? (h = h.replace(o, d)) : s && (h = h.replace(o, "")),
                            u.test(h) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== h.slice(-1) || (h = h.slice(0, -1)),
                            s && (h = s + ("/" === h[0] ? h.substr(1) : h)),
                            h
                        );
                    }
                    function f() { }
                    (f.prototype.parse = I), (f.prototype.format = n), (f.prototype.resolve = c), (f.prototype.resolveObject = c);
                    var h = /^https?|ftp|gopher|file/,
                        d = /^(.*?)([#?].*)/,
                        _ = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        S = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        p = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
                    function I(e, r, i) {
                        if ((void 0 === r && (r = !1), void 0 === i && (i = !1), e && "object" == typeof e && e instanceof f)) return e;
                        var s = (e = e.trim()).match(d);
                        (e = s ? s[1].replace(/\\/g, "/") + s[2] : e.replace(/\\/g, "/")), p.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var o = !/(^javascript)/.test(e) && e.match(_),
                            l = S.test(e),
                            u = "";
                        o &&
                            (h.test(o[1]) || ((u = o[1].toLowerCase()), (e = "" + o[2] + o[3])),
                                o[2] || ((l = !1), h.test(o[1]) ? ((u = o[1]), (e = "" + o[3])) : (e = "//" + o[3])),
                                (3 !== o[2].length && 1 !== o[2].length) || ((u = o[1]), (e = "/" + o[3])));
                        var c,
                            I = (s ? s[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            E = I && I[1],
                            A = new f(),
                            y = "",
                            g = "";
                        try {
                            c = new URL(e);
                        } catch (t) {
                            (y = t), u || i || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || ((g = "/"), (e = e.substr(1)));
                            try {
                                c = new URL(e, a);
                            } catch (e) {
                                return (A.protocol = u), (A.href = u), A;
                            }
                        }
                        (A.slashes = l && !g),
                            (A.host = "w.w" === c.host ? "" : c.host),
                            (A.hostname = "w.w" === c.hostname ? "" : c.hostname.replace(/(\[|\])/g, "")),
                            (A.protocol = y ? u || null : c.protocol),
                            (A.search = c.search.replace(/\\/g, "%5C")),
                            (A.hash = c.hash.replace(/\\/g, "%5C"));
                        var T = e.split("#");
                        !A.search && ~T[0].indexOf("?") && (A.search = "?"),
                            A.hash || "" !== T[1] || (A.hash = "#"),
                            (A.query = r ? t.decode(c.search.substr(1)) : A.search.substr(1)),
                            (A.pathname =
                                g +
                                (o
                                    ? c.pathname
                                        .replace(/['^|`]/g, function (e) {
                                            return "%" + e.charCodeAt().toString(16).toUpperCase();
                                        })
                                        .replace(/((?:%[0-9A-F]{2})+)/g, function (e, t) {
                                            try {
                                                return decodeURIComponent(t)
                                                    .split("")
                                                    .map(function (e) {
                                                        var t = e.charCodeAt();
                                                        return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase();
                                                    })
                                                    .join("");
                                            } catch (e) {
                                                return t;
                                            }
                                        })
                                    : c.pathname)),
                            "about:" === A.protocol && "blank" === A.pathname && ((A.protocol = ""), (A.pathname = "")),
                            y && "/" !== e[0] && (A.pathname = A.pathname.substr(1)),
                            u && !h.test(u) && "/" !== e.slice(-1) && "/" === A.pathname && (A.pathname = ""),
                            (A.path = A.pathname + A.search),
                            (A.auth = [c.username, c.password].map(decodeURIComponent).filter(Boolean).join(":")),
                            (A.port = c.port),
                            E && !A.host.endsWith(E) && ((A.host += E), (A.port = E.slice(1))),
                            (A.href = g ? "" + A.pathname + A.search + A.hash : n(A));
                        var m = /^(file)/.test(A.href) ? ["host", "hostname"] : [];
                        return (
                            Object.keys(A).forEach(function (e) {
                                ~m.indexOf(e) || (A[e] = A[e] || null);
                            }),
                            A
                        );
                    }
                    (s.parse = I),
                        (s.format = n),
                        (s.resolve = c),
                        (s.resolveObject = function (e, t) {
                            return I(c(e, t));
                        }),
                        (s.Url = f);
                })(),
                    (e.exports = s);
            })();
        },
        97334: function (e) {
            !(function () {
                "use strict";
                var t = {
                    815: function (e) {
                        e.exports = function (e, r, n, i) {
                            (r = r || "&"), (n = n || "=");
                            var s = {};
                            if ("string" != typeof e || 0 === e.length) return s;
                            var o = /\+/g;
                            e = e.split(r);
                            var a = 1e3;
                            i && "number" == typeof i.maxKeys && (a = i.maxKeys);
                            var l = e.length;
                            a > 0 && l > a && (l = a);
                            for (var u = 0; u < l; ++u) {
                                var c,
                                    f,
                                    h,
                                    d,
                                    _ = e[u].replace(o, "%20"),
                                    S = _.indexOf(n);
                                (S >= 0 ? ((c = _.substr(0, S)), (f = _.substr(S + 1))) : ((c = _), (f = "")), (h = decodeURIComponent(c)), (d = decodeURIComponent(f)), Object.prototype.hasOwnProperty.call(s, h))
                                    ? t(s[h])
                                        ? s[h].push(d)
                                        : (s[h] = [s[h], d])
                                    : (s[h] = d);
                            }
                            return s;
                        };
                        var t =
                            Array.isArray ||
                            function (e) {
                                return "[object Array]" === Object.prototype.toString.call(e);
                            };
                    },
                    577: function (e) {
                        var t = function (e) {
                            switch (typeof e) {
                                case "string":
                                    return e;
                                case "boolean":
                                    return e ? "true" : "false";
                                case "number":
                                    return isFinite(e) ? e : "";
                                default:
                                    return "";
                            }
                        };
                        e.exports = function (e, s, o, a) {
                            return ((s = s || "&"), (o = o || "="), null === e && (e = void 0), "object" == typeof e)
                                ? n(i(e), function (i) {
                                    var a = encodeURIComponent(t(i)) + o;
                                    return r(e[i])
                                        ? n(e[i], function (e) {
                                            return a + encodeURIComponent(t(e));
                                        }).join(s)
                                        : a + encodeURIComponent(t(e[i]));
                                }).join(s)
                                : a
                                    ? encodeURIComponent(t(a)) + o + encodeURIComponent(t(e))
                                    : "";
                        };
                        var r =
                            Array.isArray ||
                            function (e) {
                                return "[object Array]" === Object.prototype.toString.call(e);
                            };
                        function n(e, t) {
                            if (e.map) return e.map(t);
                            for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                            return r;
                        }
                        var i =
                            Object.keys ||
                            function (e) {
                                var t = [];
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                                return t;
                            };
                    },
                },
                    r = {};
                function n(e) {
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var s = (r[e] = { exports: {} }),
                        o = !0;
                    try {
                        t[e](s, s.exports, n), (o = !1);
                    } finally {
                        o && delete r[e];
                    }
                    return s.exports;
                }
                n.ab = "//";
                var i = {};
                (i.decode = i.parse = n(815)), (i.encode = i.stringify = n(577)), (e.exports = i);
            })();
        },
        79681: function (e, t, r) {
            var n = r(34155);
            !(function () {
                var t = {
                    782: function (e) {
                        "function" == typeof Object.create
                            ? (e.exports = function (e, t) {
                                t && ((e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })));
                            })
                            : (e.exports = function (e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var r = function () { };
                                    (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
                                }
                            });
                    },
                    646: function (e) {
                        "use strict";
                        let t = {};
                        function r(e, r, n) {
                            n || (n = Error);
                            class i extends n {
                                constructor(e, t, n) {
                                    super("string" == typeof r ? r : r(e, t, n));
                                }
                            }
                            (i.prototype.name = n.name), (i.prototype.code = e), (t[e] = i);
                        }
                        function n(e, t) {
                            if (!Array.isArray(e)) return `of ${t} ${String(e)}`;
                            {
                                let r = e.length;
                                return ((e = e.map((e) => String(e))), r > 2) ? `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ` + e[r - 1] : 2 === r ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`;
                            }
                        }
                        r(
                            "ERR_INVALID_OPT_VALUE",
                            function (e, t) {
                                return 'The value "' + t + '" is invalid for option "' + e + '"';
                            },
                            TypeError
                        ),
                            r(
                                "ERR_INVALID_ARG_TYPE",
                                function (e, t, r) {
                                    var i, s, o, a;
                                    let l, u;
                                    if (
                                        ("string" == typeof t && ((i = "not "), t.substr(0, i.length) === i) ? ((l = "must not be"), (t = t.replace(/^not /, ""))) : (l = "must be"),
                                            (s = " argument"),
                                            (void 0 === o || o > e.length) && (o = e.length),
                                            e.substring(o - s.length, o) === s)
                                    )
                                        u = `The ${e} ${l} ${n(t, "type")}`;
                                    else {
                                        let r = ("number" != typeof a && (a = 0), a + 1 > e.length || -1 === e.indexOf(".", a)) ? "argument" : "property";
                                        u = `The "${e}" ${r} ${l} ${n(t, "type")}`;
                                    }
                                    return u + `. Received type ${typeof r}`;
                                },
                                TypeError
                            ),
                            r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
                            r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
                                return "The " + e + " method is not implemented";
                            }),
                            r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
                            r("ERR_STREAM_DESTROYED", function (e) {
                                return "Cannot call " + e + " after a stream was destroyed";
                            }),
                            r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
                            r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
                            r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
                            r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
                            r(
                                "ERR_UNKNOWN_ENCODING",
                                function (e) {
                                    return "Unknown encoding: " + e;
                                },
                                TypeError
                            ),
                            r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
                            (e.exports.q = t);
                    },
                    403: function (e, t, r) {
                        "use strict";
                        var i =
                            Object.keys ||
                            function (e) {
                                var t = [];
                                for (var r in e) t.push(r);
                                return t;
                            };
                        e.exports = c;
                        var s = r(709),
                            o = r(337);
                        r(782)(c, s);
                        for (var a = i(o.prototype), l = 0; l < a.length; l++) {
                            var u = a[l];
                            c.prototype[u] || (c.prototype[u] = o.prototype[u]);
                        }
                        function c(e) {
                            if (!(this instanceof c)) return new c(e);
                            s.call(this, e),
                                o.call(this, e),
                                (this.allowHalfOpen = !0),
                                e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && ((this.allowHalfOpen = !1), this.once("end", f)));
                        }
                        function f() {
                            this._writableState.ended || n.nextTick(h, this);
                        }
                        function h(e) {
                            e.end();
                        }
                        Object.defineProperty(c.prototype, "writableHighWaterMark", {
                            enumerable: !1,
                            get: function () {
                                return this._writableState.highWaterMark;
                            },
                        }),
                            Object.defineProperty(c.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function () {
                                    return this._writableState && this._writableState.getBuffer();
                                },
                            }),
                            Object.defineProperty(c.prototype, "writableLength", {
                                enumerable: !1,
                                get: function () {
                                    return this._writableState.length;
                                },
                            }),
                            Object.defineProperty(c.prototype, "destroyed", {
                                enumerable: !1,
                                get: function () {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
                                },
                                set: function (e) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && ((this._readableState.destroyed = e), (this._writableState.destroyed = e));
                                },
                            });
                    },
                    889: function (e, t, r) {
                        "use strict";
                        e.exports = i;
                        var n = r(170);
                        function i(e) {
                            if (!(this instanceof i)) return new i(e);
                            n.call(this, e);
                        }
                        r(782)(i, n),
                            (i.prototype._transform = function (e, t, r) {
                                r(null, e);
                            });
                    },
                    709: function (e, t, i) {
                        "use strict";
                        (e.exports = b), (b.ReadableState = R), i(361).EventEmitter;
                        var s,
                            o,
                            a,
                            l,
                            u,
                            c = function (e, t) {
                                return e.listeners(t).length;
                            },
                            f = i(678),
                            h = i(300).Buffer,
                            d = r.g.Uint8Array || function () { },
                            _ = i(837);
                        o = _ && _.debuglog ? _.debuglog("stream") : function () { };
                        var S = i(379),
                            p = i(25),
                            I = i(776).getHighWaterMark,
                            E = i(646).q,
                            A = E.ERR_INVALID_ARG_TYPE,
                            y = E.ERR_STREAM_PUSH_AFTER_EOF,
                            g = E.ERR_METHOD_NOT_IMPLEMENTED,
                            T = E.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                        i(782)(b, f);
                        var m = p.errorOrDestroy,
                            v = ["error", "close", "destroy", "pause", "resume"];
                        function R(e, t, r) {
                            (s = s || i(403)),
                                (e = e || {}),
                                "boolean" != typeof r && (r = t instanceof s),
                                (this.objectMode = !!e.objectMode),
                                r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
                                (this.highWaterMark = I(this, e, "readableHighWaterMark", r)),
                                (this.buffer = new S()),
                                (this.length = 0),
                                (this.pipes = null),
                                (this.pipesCount = 0),
                                (this.flowing = null),
                                (this.ended = !1),
                                (this.endEmitted = !1),
                                (this.reading = !1),
                                (this.sync = !0),
                                (this.needReadable = !1),
                                (this.emittedReadable = !1),
                                (this.readableListening = !1),
                                (this.resumeScheduled = !1),
                                (this.paused = !0),
                                (this.emitClose = !1 !== e.emitClose),
                                (this.autoDestroy = !!e.autoDestroy),
                                (this.destroyed = !1),
                                (this.defaultEncoding = e.defaultEncoding || "utf8"),
                                (this.awaitDrain = 0),
                                (this.readingMore = !1),
                                (this.decoder = null),
                                (this.encoding = null),
                                e.encoding && (a || (a = i(704).s), (this.decoder = new a(e.encoding)), (this.encoding = e.encoding));
                        }
                        function b(e) {
                            if (((s = s || i(403)), !(this instanceof b))) return new b(e);
                            var t = this instanceof s;
                            (this._readableState = new R(e, this, t)), (this.readable = !0), e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), f.call(this);
                        }
                        function w(e, t, r, n, i) {
                            o("readableAddChunk", t);
                            var s,
                                a,
                                l,
                                u,
                                c,
                                f = e._readableState;
                            if (null === t)
                                (f.reading = !1),
                                    (function (e, t) {
                                        if ((o("onEofChunk"), !t.ended)) {
                                            if (t.decoder) {
                                                var r = t.decoder.end();
                                                r && r.length && (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
                                            }
                                            (t.ended = !0), t.sync ? C(e) : ((t.needReadable = !1), t.emittedReadable || ((t.emittedReadable = !0), N(e)));
                                        }
                                    })(e, f);
                            else {
                                if ((i || ((s = f), (a = t), h.isBuffer(a) || a instanceof d || "string" == typeof a || void 0 === a || s.objectMode || (l = new A("chunk", ["string", "Buffer", "Uint8Array"], a)), (c = l)), c)) m(e, c);
                                else if (f.objectMode || (t && t.length > 0)) {
                                    if (("string" == typeof t || f.objectMode || Object.getPrototypeOf(t) === h.prototype || ((u = t), (t = h.from(u))), n)) f.endEmitted ? m(e, new T()) : O(e, f, t, !0);
                                    else if (f.ended) m(e, new y());
                                    else {
                                        if (f.destroyed) return !1;
                                        (f.reading = !1), f.decoder && !r ? ((t = f.decoder.write(t)), f.objectMode || 0 !== t.length ? O(e, f, t, !1) : L(e, f)) : O(e, f, t, !1);
                                    }
                                } else n || ((f.reading = !1), L(e, f));
                            }
                            return !f.ended && (f.length < f.highWaterMark || 0 === f.length);
                        }
                        function O(e, t, r, n) {
                            t.flowing && 0 === t.length && !t.sync ? ((t.awaitDrain = 0), e.emit("data", r)) : ((t.length += t.objectMode ? 1 : r.length), n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && C(e)), L(e, t);
                        }
                        function W(e, t) {
                            if (e <= 0 || (0 === t.length && t.ended)) return 0;
                            if (t.objectMode) return 1;
                            if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                            if (e > t.highWaterMark) {
                                var r;
                                t.highWaterMark = ((r = e) >= 1073741824 ? (r = 1073741824) : (r--, (r |= r >>> 1), (r |= r >>> 2), (r |= r >>> 4), (r |= r >>> 8), (r |= r >>> 16), r++), r);
                            }
                            return e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0);
                        }
                        function C(e) {
                            var t = e._readableState;
                            o("emitReadable", t.needReadable, t.emittedReadable), (t.needReadable = !1), t.emittedReadable || (o("emitReadable", t.flowing), (t.emittedReadable = !0), n.nextTick(N, e));
                        }
                        function N(e) {
                            var t = e._readableState;
                            o("emitReadable_", t.destroyed, t.length, t.ended),
                                !t.destroyed && (t.length || t.ended) && (e.emit("readable"), (t.emittedReadable = !1)),
                                (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark),
                                M(e);
                        }
                        function L(e, t) {
                            t.readingMore || ((t.readingMore = !0), n.nextTick(F, e, t));
                        }
                        function F(e, t) {
                            for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && 0 === t.length));) {
                                var r = t.length;
                                if ((o("maybeReadMore read 0"), e.read(0), r === t.length)) break;
                            }
                            t.readingMore = !1;
                        }
                        function D(e) {
                            var t = e._readableState;
                            (t.readableListening = e.listenerCount("readable") > 0), t.resumeScheduled && !t.paused ? (t.flowing = !0) : e.listenerCount("data") > 0 && e.resume();
                        }
                        function P(e) {
                            o("readable nexttick read 0"), e.read(0);
                        }
                        function G(e, t) {
                            o("resume", t.reading), t.reading || e.read(0), (t.resumeScheduled = !1), e.emit("resume"), M(e), t.flowing && !t.reading && e.read(0);
                        }
                        function M(e) {
                            var t = e._readableState;
                            for (o("flow", t.flowing); t.flowing && null !== e.read(););
                        }
                        function k(e, t) {
                            var r;
                            return 0 === t.length
                                ? null
                                : (t.objectMode
                                    ? (r = t.buffer.shift())
                                    : !e || e >= t.length
                                        ? ((r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length)), t.buffer.clear())
                                        : (r = t.buffer.consume(e, t.decoder)),
                                    r);
                        }
                        function B(e) {
                            var t = e._readableState;
                            o("endReadable", t.endEmitted), t.endEmitted || ((t.ended = !0), n.nextTick(H, t, e));
                        }
                        function H(e, t) {
                            if ((o("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (t.readable = !1), t.emit("end"), e.autoDestroy))) {
                                var r = t._writableState;
                                (!r || (r.autoDestroy && r.finished)) && t.destroy();
                            }
                        }
                        function U(e, t) {
                            for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
                            return -1;
                        }
                        Object.defineProperty(b.prototype, "destroyed", {
                            enumerable: !1,
                            get: function () {
                                return void 0 !== this._readableState && this._readableState.destroyed;
                            },
                            set: function (e) {
                                this._readableState && (this._readableState.destroyed = e);
                            },
                        }),
                            (b.prototype.destroy = p.destroy),
                            (b.prototype._undestroy = p.undestroy),
                            (b.prototype._destroy = function (e, t) {
                                t(e);
                            }),
                            (b.prototype.push = function (e, t) {
                                var r,
                                    n = this._readableState;
                                return n.objectMode ? (r = !0) : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && ((e = h.from(e, t)), (t = "")), (r = !0)), w(this, e, t, !1, r);
                            }),
                            (b.prototype.unshift = function (e) {
                                return w(this, e, null, !0, !1);
                            }),
                            (b.prototype.isPaused = function () {
                                return !1 === this._readableState.flowing;
                            }),
                            (b.prototype.setEncoding = function (e) {
                                a || (a = i(704).s);
                                var t = new a(e);
                                (this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding);
                                for (var r = this._readableState.buffer.head, n = ""; null !== r;) (n += t.write(r.data)), (r = r.next);
                                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), (this._readableState.length = n.length), this;
                            }),
                            (b.prototype.read = function (e) {
                                o("read", e), (e = parseInt(e, 10));
                                var t,
                                    r = this._readableState,
                                    n = e;
                                if ((0 !== e && (r.emittedReadable = !1), 0 === e && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)))
                                    return o("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? B(this) : C(this), null;
                                if (0 === (e = W(e, r)) && r.ended) return 0 === r.length && B(this), null;
                                var i = r.needReadable;
                                return (
                                    o("need readable", i),
                                    (0 === r.length || r.length - e < r.highWaterMark) && o("length less than watermark", (i = !0)),
                                    r.ended || r.reading
                                        ? o("reading or ended", (i = !1))
                                        : i && (o("do read"), (r.reading = !0), (r.sync = !0), 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), (r.sync = !1), r.reading || (e = W(n, r))),
                                    null === (t = e > 0 ? k(e, r) : null) ? ((r.needReadable = r.length <= r.highWaterMark), (e = 0)) : ((r.length -= e), (r.awaitDrain = 0)),
                                    0 === r.length && (r.ended || (r.needReadable = !0), n !== e && r.ended && B(this)),
                                    null !== t && this.emit("data", t),
                                    t
                                );
                            }),
                            (b.prototype._read = function (e) {
                                m(this, new g("_read()"));
                            }),
                            (b.prototype.pipe = function (e, t) {
                                var r = this,
                                    i = this._readableState;
                                switch (i.pipesCount) {
                                    case 0:
                                        i.pipes = e;
                                        break;
                                    case 1:
                                        i.pipes = [i.pipes, e];
                                        break;
                                    default:
                                        i.pipes.push(e);
                                }
                                (i.pipesCount += 1), o("pipe count=%d opts=%j", i.pipesCount, t);
                                var s = (t && !1 === t.end) || e === n.stdout || e === n.stderr ? S : a;
                                function a() {
                                    o("onend"), e.end();
                                }
                                i.endEmitted ? n.nextTick(s) : r.once("end", s),
                                    e.on("unpipe", function t(n, s) {
                                        o("onunpipe"),
                                            n === r &&
                                            s &&
                                            !1 === s.hasUnpiped &&
                                            ((s.hasUnpiped = !0),
                                                o("cleanup"),
                                                e.removeListener("close", d),
                                                e.removeListener("finish", _),
                                                e.removeListener("drain", l),
                                                e.removeListener("error", h),
                                                e.removeListener("unpipe", t),
                                                r.removeListener("end", a),
                                                r.removeListener("end", S),
                                                r.removeListener("data", f),
                                                (u = !0),
                                                i.awaitDrain && (!e._writableState || e._writableState.needDrain) && l());
                                    });
                                var l = function () {
                                    var e = r._readableState;
                                    o("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && c(r, "data") && ((e.flowing = !0), M(r));
                                };
                                e.on("drain", l);
                                var u = !1;
                                function f(t) {
                                    o("ondata");
                                    var n = e.write(t);
                                    o("dest.write", n),
                                        !1 === n && (((1 === i.pipesCount && i.pipes === e) || (i.pipesCount > 1 && -1 !== U(i.pipes, e))) && !u && (o("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause());
                                }
                                function h(t) {
                                    o("onerror", t), S(), e.removeListener("error", h), 0 === c(e, "error") && m(e, t);
                                }
                                function d() {
                                    e.removeListener("finish", _), S();
                                }
                                function _() {
                                    o("onfinish"), e.removeListener("close", d), S();
                                }
                                function S() {
                                    o("unpipe"), r.unpipe(e);
                                }
                                return (
                                    r.on("data", f),
                                    (function (e, t, r) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                                        e._events && e._events[t] ? (Array.isArray(e._events[t]) ? e._events[t].unshift(r) : (e._events[t] = [r, e._events[t]])) : e.on(t, r);
                                    })(e, "error", h),
                                    e.once("close", d),
                                    e.once("finish", _),
                                    e.emit("pipe", r),
                                    i.flowing || (o("pipe resume"), r.resume()),
                                    e
                                );
                            }),
                            (b.prototype.unpipe = function (e) {
                                var t = this._readableState,
                                    r = { hasUnpiped: !1 };
                                if (0 === t.pipesCount) return this;
                                if (1 === t.pipesCount) return (e && e !== t.pipes) || (e || (e = t.pipes), (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1), e && e.emit("unpipe", this, r)), this;
                                if (!e) {
                                    var n = t.pipes,
                                        i = t.pipesCount;
                                    (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                                    for (var s = 0; s < i; s++) n[s].emit("unpipe", this, { hasUnpiped: !1 });
                                    return this;
                                }
                                var o = U(t.pipes, e);
                                return -1 === o || (t.pipes.splice(o, 1), (t.pipesCount -= 1), 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this;
                            }),
                            (b.prototype.on = function (e, t) {
                                var r = f.prototype.on.call(this, e, t),
                                    i = this._readableState;
                                return (
                                    "data" === e
                                        ? ((i.readableListening = this.listenerCount("readable") > 0), !1 !== i.flowing && this.resume())
                                        : "readable" !== e ||
                                        i.endEmitted ||
                                        i.readableListening ||
                                        ((i.readableListening = i.needReadable = !0), (i.flowing = !1), (i.emittedReadable = !1), o("on readable", i.length, i.reading), i.length ? C(this) : i.reading || n.nextTick(P, this)),
                                    r
                                );
                            }),
                            (b.prototype.addListener = b.prototype.on),
                            (b.prototype.removeListener = function (e, t) {
                                var r = f.prototype.removeListener.call(this, e, t);
                                return "readable" === e && n.nextTick(D, this), r;
                            }),
                            (b.prototype.removeAllListeners = function (e) {
                                var t = f.prototype.removeAllListeners.apply(this, arguments);
                                return ("readable" === e || void 0 === e) && n.nextTick(D, this), t;
                            }),
                            (b.prototype.resume = function () {
                                var e = this._readableState;
                                return e.flowing || (o("resume"), (e.flowing = !e.readableListening), e.resumeScheduled || ((e.resumeScheduled = !0), n.nextTick(G, this, e))), (e.paused = !1), this;
                            }),
                            (b.prototype.pause = function () {
                                return (
                                    o("call pause flowing=%j", this._readableState.flowing),
                                    !1 !== this._readableState.flowing && (o("pause"), (this._readableState.flowing = !1), this.emit("pause")),
                                    (this._readableState.paused = !0),
                                    this
                                );
                            }),
                            (b.prototype.wrap = function (e) {
                                var t = this,
                                    r = this._readableState,
                                    n = !1;
                                for (var i in (e.on("end", function () {
                                    if ((o("wrapped end"), r.decoder && !r.ended)) {
                                        var e = r.decoder.end();
                                        e && e.length && t.push(e);
                                    }
                                    t.push(null);
                                }),
                                    e.on("data", function (i) {
                                        o("wrapped data"), r.decoder && (i = r.decoder.write(i)), (!r.objectMode || null != i) && (r.objectMode || (i && i.length)) && (t.push(i) || ((n = !0), e.pause()));
                                    }),
                                    e))
                                    void 0 === this[i] &&
                                        "function" == typeof e[i] &&
                                        (this[i] = (function (t) {
                                            return function () {
                                                return e[t].apply(e, arguments);
                                            };
                                        })(i));
                                for (var s = 0; s < v.length; s++) e.on(v[s], this.emit.bind(this, v[s]));
                                return (
                                    (this._read = function (t) {
                                        o("wrapped _read", t), n && ((n = !1), e.resume());
                                    }),
                                    this
                                );
                            }),
                            "function" == typeof Symbol &&
                            (b.prototype[Symbol.asyncIterator] = function () {
                                return void 0 === l && (l = i(871)), l(this);
                            }),
                            Object.defineProperty(b.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function () {
                                    return this._readableState.highWaterMark;
                                },
                            }),
                            Object.defineProperty(b.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function () {
                                    return this._readableState && this._readableState.buffer;
                                },
                            }),
                            Object.defineProperty(b.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function () {
                                    return this._readableState.flowing;
                                },
                                set: function (e) {
                                    this._readableState && (this._readableState.flowing = e);
                                },
                            }),
                            (b._fromList = k),
                            Object.defineProperty(b.prototype, "readableLength", {
                                enumerable: !1,
                                get: function () {
                                    return this._readableState.length;
                                },
                            }),
                            "function" == typeof Symbol &&
                            (b.from = function (e, t) {
                                return void 0 === u && (u = i(727)), u(b, e, t);
                            });
                    },
                    170: function (e, t, r) {
                        "use strict";
                        e.exports = c;
                        var n = r(646).q,
                            i = n.ERR_METHOD_NOT_IMPLEMENTED,
                            s = n.ERR_MULTIPLE_CALLBACK,
                            o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                            a = n.ERR_TRANSFORM_WITH_LENGTH_0,
                            l = r(403);
                        function u(e, t) {
                            var r = this._transformState;
                            r.transforming = !1;
                            var n = r.writecb;
                            if (null === n) return this.emit("error", new s());
                            (r.writechunk = null), (r.writecb = null), null != t && this.push(t), n(e);
                            var i = this._readableState;
                            (i.reading = !1), (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
                        }
                        function c(e) {
                            if (!(this instanceof c)) return new c(e);
                            l.call(this, e),
                                (this._transformState = { afterTransform: u.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }),
                                (this._readableState.needReadable = !0),
                                (this._readableState.sync = !1),
                                e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)),
                                this.on("prefinish", f);
                        }
                        function f() {
                            var e = this;
                            "function" != typeof this._flush || this._readableState.destroyed
                                ? h(this, null, null)
                                : this._flush(function (t, r) {
                                    h(e, t, r);
                                });
                        }
                        function h(e, t, r) {
                            if (t) return e.emit("error", t);
                            if ((null != r && e.push(r), e._writableState.length)) throw new a();
                            if (e._transformState.transforming) throw new o();
                            return e.push(null);
                        }
                        r(782)(c, l),
                            (c.prototype.push = function (e, t) {
                                return (this._transformState.needTransform = !1), l.prototype.push.call(this, e, t);
                            }),
                            (c.prototype._transform = function (e, t, r) {
                                r(new i("_transform()"));
                            }),
                            (c.prototype._write = function (e, t, r) {
                                var n = this._transformState;
                                if (((n.writecb = r), (n.writechunk = e), (n.writeencoding = t), !n.transforming)) {
                                    var i = this._readableState;
                                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
                                }
                            }),
                            (c.prototype._read = function (e) {
                                var t = this._transformState;
                                null === t.writechunk || t.transforming ? (t.needTransform = !0) : ((t.transforming = !0), this._transform(t.writechunk, t.writeencoding, t.afterTransform));
                            }),
                            (c.prototype._destroy = function (e, t) {
                                l.prototype._destroy.call(this, e, function (e) {
                                    t(e);
                                });
                            });
                    },
                    337: function (e, t, i) {
                        "use strict";
                        function s(e) {
                            var t = this;
                            (this.next = null),
                                (this.entry = null),
                                (this.finish = function () {
                                    (function (e, t, r) {
                                        var n = e.entry;
                                        for (e.entry = null; n;) {
                                            var i = n.callback;
                                            t.pendingcb--, i(void 0), (n = n.next);
                                        }
                                        t.corkedRequestsFree.next = e;
                                    })(t, e);
                                });
                        }
                        (e.exports = b), (b.WritableState = R);
                        var o,
                            a,
                            l = { deprecate: i(769) },
                            u = i(678),
                            c = i(300).Buffer,
                            f = r.g.Uint8Array || function () { },
                            h = i(25),
                            d = i(776).getHighWaterMark,
                            _ = i(646).q,
                            S = _.ERR_INVALID_ARG_TYPE,
                            p = _.ERR_METHOD_NOT_IMPLEMENTED,
                            I = _.ERR_MULTIPLE_CALLBACK,
                            E = _.ERR_STREAM_CANNOT_PIPE,
                            A = _.ERR_STREAM_DESTROYED,
                            y = _.ERR_STREAM_NULL_VALUES,
                            g = _.ERR_STREAM_WRITE_AFTER_END,
                            T = _.ERR_UNKNOWN_ENCODING,
                            m = h.errorOrDestroy;
                        function v() { }
                        function R(e, t, r) {
                            (o = o || i(403)),
                                (e = e || {}),
                                "boolean" != typeof r && (r = t instanceof o),
                                (this.objectMode = !!e.objectMode),
                                r && (this.objectMode = this.objectMode || !!e.writableObjectMode),
                                (this.highWaterMark = d(this, e, "writableHighWaterMark", r)),
                                (this.finalCalled = !1),
                                (this.needDrain = !1),
                                (this.ending = !1),
                                (this.ended = !1),
                                (this.finished = !1),
                                (this.destroyed = !1);
                            var a = !1 === e.decodeStrings;
                            (this.decodeStrings = !a),
                                (this.defaultEncoding = e.defaultEncoding || "utf8"),
                                (this.length = 0),
                                (this.writing = !1),
                                (this.corked = 0),
                                (this.sync = !0),
                                (this.bufferProcessing = !1),
                                (this.onwrite = function (e) {
                                    (function (e, t) {
                                        var r = e._writableState,
                                            i = r.sync,
                                            s = r.writecb;
                                        if ("function" != typeof s) throw new I();
                                        if (((r.writing = !1), (r.writecb = null), (r.length -= r.writelen), (r.writelen = 0), t))
                                            --r.pendingcb, i ? (n.nextTick(s, t), n.nextTick(L, e, r), (e._writableState.errorEmitted = !0), m(e, t)) : (s(t), (e._writableState.errorEmitted = !0), m(e, t), L(e, r));
                                        else {
                                            var o = C(r) || e.destroyed;
                                            o || r.corked || r.bufferProcessing || !r.bufferedRequest || W(e, r), i ? n.nextTick(O, e, r, o, s) : O(e, r, o, s);
                                        }
                                    })(t, e);
                                }),
                                (this.writecb = null),
                                (this.writelen = 0),
                                (this.bufferedRequest = null),
                                (this.lastBufferedRequest = null),
                                (this.pendingcb = 0),
                                (this.prefinished = !1),
                                (this.errorEmitted = !1),
                                (this.emitClose = !1 !== e.emitClose),
                                (this.autoDestroy = !!e.autoDestroy),
                                (this.bufferedRequestCount = 0),
                                (this.corkedRequestsFree = new s(this));
                        }
                        function b(e) {
                            var t = this instanceof (o = o || i(403));
                            if (!t && !a.call(b, this)) return new b(e);
                            (this._writableState = new R(e, this, t)),
                                (this.writable = !0),
                                e &&
                                ("function" == typeof e.write && (this._write = e.write),
                                    "function" == typeof e.writev && (this._writev = e.writev),
                                    "function" == typeof e.destroy && (this._destroy = e.destroy),
                                    "function" == typeof e.final && (this._final = e.final)),
                                u.call(this);
                        }
                        function w(e, t, r, n, i, s, o) {
                            (t.writelen = n), (t.writecb = o), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new A("write")) : r ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite), (t.sync = !1);
                        }
                        function O(e, t, r, n) {
                            r || (0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit("drain"))), t.pendingcb--, n(), L(e, t);
                        }
                        function W(e, t) {
                            t.bufferProcessing = !0;
                            var r = t.bufferedRequest;
                            if (e._writev && r && r.next) {
                                var n = Array(t.bufferedRequestCount),
                                    i = t.corkedRequestsFree;
                                i.entry = r;
                                for (var o = 0, a = !0; r;) (n[o] = r), r.isBuf || (a = !1), (r = r.next), (o += 1);
                                (n.allBuffers = a),
                                    w(e, t, !0, t.length, n, "", i.finish),
                                    t.pendingcb++,
                                    (t.lastBufferedRequest = null),
                                    i.next ? ((t.corkedRequestsFree = i.next), (i.next = null)) : (t.corkedRequestsFree = new s(t)),
                                    (t.bufferedRequestCount = 0);
                            } else {
                                for (; r;) {
                                    var l = r.chunk,
                                        u = r.encoding,
                                        c = r.callback,
                                        f = t.objectMode ? 1 : l.length;
                                    if ((w(e, t, !1, f, l, u, c), (r = r.next), t.bufferedRequestCount--, t.writing)) break;
                                }
                                null === r && (t.lastBufferedRequest = null);
                            }
                            (t.bufferedRequest = r), (t.bufferProcessing = !1);
                        }
                        function C(e) {
                            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
                        }
                        function N(e, t) {
                            e._final(function (r) {
                                t.pendingcb--, r && m(e, r), (t.prefinished = !0), e.emit("prefinish"), L(e, t);
                            });
                        }
                        function L(e, t) {
                            var r = C(t);
                            if (
                                r &&
                                (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? ((t.prefinished = !0), e.emit("prefinish")) : (t.pendingcb++, (t.finalCalled = !0), n.nextTick(N, e, t))),
                                    0 === t.pendingcb && ((t.finished = !0), e.emit("finish"), t.autoDestroy))
                            ) {
                                var i = e._readableState;
                                (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
                            }
                            return r;
                        }
                        i(782)(b, u),
                            (R.prototype.getBuffer = function () {
                                for (var e = this.bufferedRequest, t = []; e;) t.push(e), (e = e.next);
                                return t;
                            }),
                            (function () {
                                try {
                                    Object.defineProperty(R.prototype, "buffer", {
                                        get: l.deprecate(
                                            function () {
                                                return this.getBuffer();
                                            },
                                            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                                            "DEP0003"
                                        ),
                                    });
                                } catch (e) { }
                            })(),
                            "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance]
                                ? ((a = Function.prototype[Symbol.hasInstance]),
                                    Object.defineProperty(b, Symbol.hasInstance, {
                                        value: function (e) {
                                            return !!a.call(this, e) || (this === b && e && e._writableState instanceof R);
                                        },
                                    }))
                                : (a = function (e) {
                                    return e instanceof this;
                                }),
                            (b.prototype.pipe = function () {
                                m(this, new E());
                            }),
                            (b.prototype.write = function (e, t, r) {
                                var i,
                                    s,
                                    o,
                                    a,
                                    l,
                                    u,
                                    h,
                                    d = this._writableState,
                                    _ = !1,
                                    p = !d.objectMode && ((i = e), c.isBuffer(i) || i instanceof f);
                                return (
                                    p && !c.isBuffer(e) && ((s = e), (e = c.from(s))),
                                    ("function" == typeof t && ((r = t), (t = null)), p ? (t = "buffer") : t || (t = d.defaultEncoding), "function" != typeof r && (r = v), d.ending)
                                        ? ((o = r), m(this, (a = new g())), n.nextTick(o, a))
                                        : (p || ((l = e), (u = r), null === l ? (h = new y()) : "string" == typeof l || d.objectMode || (h = new S("chunk", ["string", "Buffer"], l)), !h || (m(this, h), n.nextTick(u, h), 0))) &&
                                        (d.pendingcb++,
                                            (_ = (function (e, t, r, n, i, s) {
                                                if (!r) {
                                                    var o,
                                                        a,
                                                        l = ((o = n), (a = i), t.objectMode || !1 === t.decodeStrings || "string" != typeof o || (o = c.from(o, a)), o);
                                                    n !== l && ((r = !0), (i = "buffer"), (n = l));
                                                }
                                                var u = t.objectMode ? 1 : n.length;
                                                t.length += u;
                                                var f = t.length < t.highWaterMark;
                                                if ((f || (t.needDrain = !0), t.writing || t.corked)) {
                                                    var h = t.lastBufferedRequest;
                                                    (t.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: s, next: null }),
                                                        h ? (h.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
                                                        (t.bufferedRequestCount += 1);
                                                } else w(e, t, !1, u, n, i, s);
                                                return f;
                                            })(this, d, p, e, t, r))),
                                    _
                                );
                            }),
                            (b.prototype.cork = function () {
                                this._writableState.corked++;
                            }),
                            (b.prototype.uncork = function () {
                                var e = this._writableState;
                                !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || W(this, e));
                            }),
                            (b.prototype.setDefaultEncoding = function (e) {
                                if (("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)))
                                    throw new T(e);
                                return (this._writableState.defaultEncoding = e), this;
                            }),
                            Object.defineProperty(b.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function () {
                                    return this._writableState && this._writableState.getBuffer();
                                },
                            }),
                            Object.defineProperty(b.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function () {
                                    return this._writableState.highWaterMark;
                                },
                            }),
                            (b.prototype._write = function (e, t, r) {
                                r(new p("_write()"));
                            }),
                            (b.prototype._writev = null),
                            (b.prototype.end = function (e, t, r) {
                                var i,
                                    s = this._writableState;
                                return (
                                    "function" == typeof e ? ((r = e), (e = null), (t = null)) : "function" == typeof t && ((r = t), (t = null)),
                                    null != e && this.write(e, t),
                                    s.corked && ((s.corked = 1), this.uncork()),
                                    s.ending || ((i = r), (s.ending = !0), L(this, s), i && (s.finished ? n.nextTick(i) : this.once("finish", i)), (s.ended = !0), (this.writable = !1)),
                                    this
                                );
                            }),
                            Object.defineProperty(b.prototype, "writableLength", {
                                enumerable: !1,
                                get: function () {
                                    return this._writableState.length;
                                },
                            }),
                            Object.defineProperty(b.prototype, "destroyed", {
                                enumerable: !1,
                                get: function () {
                                    return void 0 !== this._writableState && this._writableState.destroyed;
                                },
                                set: function (e) {
                                    this._writableState && (this._writableState.destroyed = e);
                                },
                            }),
                            (b.prototype.destroy = h.destroy),
                            (b.prototype._undestroy = h.undestroy),
                            (b.prototype._destroy = function (e, t) {
                                t(e);
                            });
                    },
                    871: function (e, t, r) {
                        "use strict";
                        function i(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                        }
                        var s,
                            o = r(698),
                            a = Symbol("lastResolve"),
                            l = Symbol("lastReject"),
                            u = Symbol("error"),
                            c = Symbol("ended"),
                            f = Symbol("lastPromise"),
                            h = Symbol("handlePromise"),
                            d = Symbol("stream");
                        function _(e, t) {
                            return { value: e, done: t };
                        }
                        function S(e) {
                            var t = e[a];
                            if (null !== t) {
                                var r = e[d].read();
                                null !== r && ((e[f] = null), (e[a] = null), (e[l] = null), t(_(r, !1)));
                            }
                        }
                        function p(e) {
                            n.nextTick(S, e);
                        }
                        var I = Object.getPrototypeOf(function () { }),
                            E = Object.setPrototypeOf(
                                (i(
                                    (s = {
                                        get stream() {
                                            return this[d];
                                        },
                                        next: function () {
                                            var e,
                                                t,
                                                r = this,
                                                i = this[u];
                                            if (null !== i) return Promise.reject(i);
                                            if (this[c]) return Promise.resolve(_(void 0, !0));
                                            if (this[d].destroyed)
                                                return new Promise(function (e, t) {
                                                    n.nextTick(function () {
                                                        r[u] ? t(r[u]) : e(_(void 0, !0));
                                                    });
                                                });
                                            var s = this[f];
                                            if (s)
                                                t = new Promise(
                                                    ((e = this),
                                                        function (t, r) {
                                                            s.then(function () {
                                                                if (e[c]) {
                                                                    t(_(void 0, !0));
                                                                    return;
                                                                }
                                                                e[h](t, r);
                                                            }, r);
                                                        })
                                                );
                                            else {
                                                var o = this[d].read();
                                                if (null !== o) return Promise.resolve(_(o, !1));
                                                t = new Promise(this[h]);
                                            }
                                            return (this[f] = t), t;
                                        },
                                    }),
                                    Symbol.asyncIterator,
                                    function () {
                                        return this;
                                    }
                                ),
                                    i(s, "return", function () {
                                        var e = this;
                                        return new Promise(function (t, r) {
                                            e[d].destroy(null, function (e) {
                                                if (e) {
                                                    r(e);
                                                    return;
                                                }
                                                t(_(void 0, !0));
                                            });
                                        });
                                    }),
                                    s),
                                I
                            );
                        e.exports = function (e) {
                            var t,
                                r = Object.create(
                                    E,
                                    (i((t = {}), d, { value: e, writable: !0 }),
                                        i(t, a, { value: null, writable: !0 }),
                                        i(t, l, { value: null, writable: !0 }),
                                        i(t, u, { value: null, writable: !0 }),
                                        i(t, c, { value: e._readableState.endEmitted, writable: !0 }),
                                        i(t, h, {
                                            value: function (e, t) {
                                                var n = r[d].read();
                                                n ? ((r[f] = null), (r[a] = null), (r[l] = null), e(_(n, !1))) : ((r[a] = e), (r[l] = t));
                                            },
                                            writable: !0,
                                        }),
                                        t)
                                );
                            return (
                                (r[f] = null),
                                o(e, function (e) {
                                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                        var t = r[l];
                                        null !== t && ((r[f] = null), (r[a] = null), (r[l] = null), t(e)), (r[u] = e);
                                        return;
                                    }
                                    var n = r[a];
                                    null !== n && ((r[f] = null), (r[a] = null), (r[l] = null), n(_(void 0, !0))), (r[c] = !0);
                                }),
                                e.on("readable", p.bind(null, r)),
                                r
                            );
                        };
                    },
                    379: function (e, t, r) {
                        "use strict";
                        function n(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t &&
                                    (n = n.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                    })),
                                    r.push.apply(r, n);
                            }
                            return r;
                        }
                        var i = r(300).Buffer,
                            s = r(837).inspect,
                            o = (s && s.custom) || "inspect";
                        e.exports = (function () {
                            var e;
                            function t() {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t),
                                    (this.head = null),
                                    (this.tail = null),
                                    (this.length = 0);
                            }
                            return (
                                (e = [
                                    {
                                        key: "push",
                                        value: function (e) {
                                            var t = { data: e, next: null };
                                            this.length > 0 ? (this.tail.next = t) : (this.head = t), (this.tail = t), ++this.length;
                                        },
                                    },
                                    {
                                        key: "unshift",
                                        value: function (e) {
                                            var t = { data: e, next: this.head };
                                            0 === this.length && (this.tail = t), (this.head = t), ++this.length;
                                        },
                                    },
                                    {
                                        key: "shift",
                                        value: function () {
                                            if (0 !== this.length) {
                                                var e = this.head.data;
                                                return 1 === this.length ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, e;
                                            }
                                        },
                                    },
                                    {
                                        key: "clear",
                                        value: function () {
                                            (this.head = this.tail = null), (this.length = 0);
                                        },
                                    },
                                    {
                                        key: "join",
                                        value: function (e) {
                                            if (0 === this.length) return "";
                                            for (var t = this.head, r = "" + t.data; (t = t.next);) r += e + t.data;
                                            return r;
                                        },
                                    },
                                    {
                                        key: "concat",
                                        value: function (e) {
                                            if (0 === this.length) return i.alloc(0);
                                            for (var t, r, n = i.allocUnsafe(e >>> 0), s = this.head, o = 0; s;) (t = s.data), (r = o), i.prototype.copy.call(t, n, r), (o += s.data.length), (s = s.next);
                                            return n;
                                        },
                                    },
                                    {
                                        key: "consume",
                                        value: function (e, t) {
                                            var r;
                                            return (
                                                e < this.head.data.length
                                                    ? ((r = this.head.data.slice(0, e)), (this.head.data = this.head.data.slice(e)))
                                                    : (r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e)),
                                                r
                                            );
                                        },
                                    },
                                    {
                                        key: "first",
                                        value: function () {
                                            return this.head.data;
                                        },
                                    },
                                    {
                                        key: "_getString",
                                        value: function (e) {
                                            var t = this.head,
                                                r = 1,
                                                n = t.data;
                                            for (e -= n.length; (t = t.next);) {
                                                var i = t.data,
                                                    s = e > i.length ? i.length : e;
                                                if ((s === i.length ? (n += i) : (n += i.slice(0, e)), 0 == (e -= s))) {
                                                    s === i.length ? (++r, t.next ? (this.head = t.next) : (this.head = this.tail = null)) : ((this.head = t), (t.data = i.slice(s)));
                                                    break;
                                                }
                                                ++r;
                                            }
                                            return (this.length -= r), n;
                                        },
                                    },
                                    {
                                        key: "_getBuffer",
                                        value: function (e) {
                                            var t = i.allocUnsafe(e),
                                                r = this.head,
                                                n = 1;
                                            for (r.data.copy(t), e -= r.data.length; (r = r.next);) {
                                                var s = r.data,
                                                    o = e > s.length ? s.length : e;
                                                if ((s.copy(t, t.length - e, 0, o), 0 == (e -= o))) {
                                                    o === s.length ? (++n, r.next ? (this.head = r.next) : (this.head = this.tail = null)) : ((this.head = r), (r.data = s.slice(o)));
                                                    break;
                                                }
                                                ++n;
                                            }
                                            return (this.length -= n), t;
                                        },
                                    },
                                    {
                                        key: o,
                                        value: function (e, t) {
                                            return s(
                                                this,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {};
                                                        t % 2
                                                            ? n(Object(r), !0).forEach(function (t) {
                                                                var n;
                                                                (n = r[t]), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                                            })
                                                            : Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                                : n(Object(r)).forEach(function (t) {
                                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                                });
                                                    }
                                                    return e;
                                                })({}, t, { depth: 0, customInspect: !1 })
                                            );
                                        },
                                    },
                                ]),
                                (function (e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                                    }
                                })(t.prototype, e),
                                t
                            );
                        })();
                    },
                    25: function (e) {
                        "use strict";
                        function t(e, t) {
                            i(e, t), r(e);
                        }
                        function r(e) {
                            (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close");
                        }
                        function i(e, t) {
                            e.emit("error", t);
                        }
                        e.exports = {
                            destroy: function (e, s) {
                                var o = this,
                                    a = this._readableState && this._readableState.destroyed,
                                    l = this._writableState && this._writableState.destroyed;
                                return (
                                    a || l
                                        ? s
                                            ? s(e)
                                            : e && (this._writableState ? this._writableState.errorEmitted || ((this._writableState.errorEmitted = !0), n.nextTick(i, this, e)) : n.nextTick(i, this, e))
                                        : (this._readableState && (this._readableState.destroyed = !0),
                                            this._writableState && (this._writableState.destroyed = !0),
                                            this._destroy(e || null, function (e) {
                                                !s && e
                                                    ? o._writableState
                                                        ? o._writableState.errorEmitted
                                                            ? n.nextTick(r, o)
                                                            : ((o._writableState.errorEmitted = !0), n.nextTick(t, o, e))
                                                        : n.nextTick(t, o, e)
                                                    : s
                                                        ? (n.nextTick(r, o), s(e))
                                                        : n.nextTick(r, o);
                                            })),
                                    this
                                );
                            },
                            undestroy: function () {
                                this._readableState && ((this._readableState.destroyed = !1), (this._readableState.reading = !1), (this._readableState.ended = !1), (this._readableState.endEmitted = !1)),
                                    this._writableState &&
                                    ((this._writableState.destroyed = !1),
                                        (this._writableState.ended = !1),
                                        (this._writableState.ending = !1),
                                        (this._writableState.finalCalled = !1),
                                        (this._writableState.prefinished = !1),
                                        (this._writableState.finished = !1),
                                        (this._writableState.errorEmitted = !1));
                            },
                            errorOrDestroy: function (e, t) {
                                var r = e._readableState,
                                    n = e._writableState;
                                (r && r.autoDestroy) || (n && n.autoDestroy) ? e.destroy(t) : e.emit("error", t);
                            },
                        };
                    },
                    698: function (e, t, r) {
                        "use strict";
                        var n = r(646).q.ERR_STREAM_PREMATURE_CLOSE;
                        function i() { }
                        e.exports = function e(t, r, s) {
                            if ("function" == typeof r) return e(t, null, r);
                            r || (r = {}),
                                (o = s || i),
                                (a = !1),
                                (s = function () {
                                    if (!a) {
                                        a = !0;
                                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                        o.apply(this, t);
                                    }
                                });
                            var o,
                                a,
                                l = r.readable || (!1 !== r.readable && t.readable),
                                u = r.writable || (!1 !== r.writable && t.writable),
                                c = function () {
                                    t.writable || h();
                                },
                                f = t._writableState && t._writableState.finished,
                                h = function () {
                                    (u = !1), (f = !0), l || s.call(t);
                                },
                                d = t._readableState && t._readableState.endEmitted,
                                _ = function () {
                                    (l = !1), (d = !0), u || s.call(t);
                                },
                                S = function (e) {
                                    s.call(t, e);
                                },
                                p = function () {
                                    var e;
                                    return l && !d ? ((t._readableState && t._readableState.ended) || (e = new n()), s.call(t, e)) : u && !f ? ((t._writableState && t._writableState.ended) || (e = new n()), s.call(t, e)) : void 0;
                                },
                                I = function () {
                                    t.req.on("finish", h);
                                };
                            return (
                                t.setHeader && "function" == typeof t.abort ? (t.on("complete", h), t.on("abort", p), t.req ? I() : t.on("request", I)) : u && !t._writableState && (t.on("end", c), t.on("close", c)),
                                t.on("end", _),
                                t.on("finish", h),
                                !1 !== r.error && t.on("error", S),
                                t.on("close", p),
                                function () {
                                    t.removeListener("complete", h),
                                        t.removeListener("abort", p),
                                        t.removeListener("request", I),
                                        t.req && t.req.removeListener("finish", h),
                                        t.removeListener("end", c),
                                        t.removeListener("close", c),
                                        t.removeListener("finish", h),
                                        t.removeListener("end", _),
                                        t.removeListener("error", S),
                                        t.removeListener("close", p);
                                }
                            );
                        };
                    },
                    727: function (e, t, r) {
                        "use strict";
                        function n(e, t, r, n, i, s, o) {
                            try {
                                var a = e[s](o),
                                    l = a.value;
                            } catch (e) {
                                r(e);
                                return;
                            }
                            a.done ? t(l) : Promise.resolve(l).then(n, i);
                        }
                        function i(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t &&
                                    (n = n.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                    })),
                                    r.push.apply(r, n);
                            }
                            return r;
                        }
                        var s = r(646).q.ERR_INVALID_ARG_TYPE;
                        e.exports = function (e, t, r) {
                            if (t && "function" == typeof t.next) o = t;
                            else if (t && t[Symbol.asyncIterator]) o = t[Symbol.asyncIterator]();
                            else if (t && t[Symbol.iterator]) o = t[Symbol.iterator]();
                            else throw new s("iterable", ["Iterable"], t);
                            var o,
                                a = new e(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2
                                                ? i(Object(r), !0).forEach(function (t) {
                                                    var n;
                                                    (n = r[t]), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                                })
                                                : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                    : i(Object(r)).forEach(function (t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                    });
                                        }
                                        return e;
                                    })({ objectMode: !0 }, r)
                                ),
                                l = !1;
                            function u() {
                                return c.apply(this, arguments);
                            }
                            function c() {
                                var e;
                                return (
                                    (e = function* () {
                                        try {
                                            var e = yield o.next(),
                                                t = e.value;
                                            e.done ? a.push(null) : a.push(yield t) ? u() : (l = !1);
                                        } catch (e) {
                                            a.destroy(e);
                                        }
                                    }),
                                    (c = function () {
                                        var t = this,
                                            r = arguments;
                                        return new Promise(function (i, s) {
                                            var o = e.apply(t, r);
                                            function a(e) {
                                                n(o, i, s, a, l, "next", e);
                                            }
                                            function l(e) {
                                                n(o, i, s, a, l, "throw", e);
                                            }
                                            a(void 0);
                                        });
                                    }).apply(this, arguments)
                                );
                            }
                            return (
                                (a._read = function () {
                                    l || ((l = !0), u());
                                }),
                                a
                            );
                        };
                    },
                    442: function (e, t, r) {
                        "use strict";
                        var n,
                            i = r(646).q,
                            s = i.ERR_MISSING_ARGS,
                            o = i.ERR_STREAM_DESTROYED;
                        function a(e) {
                            if (e) throw e;
                        }
                        function l(e) {
                            e();
                        }
                        function u(e, t) {
                            return e.pipe(t);
                        }
                        e.exports = function () {
                            for (var e, t, i = arguments.length, c = Array(i), f = 0; f < i; f++) c[f] = arguments[f];
                            var h = (e = c).length && "function" == typeof e[e.length - 1] ? e.pop() : a;
                            if ((Array.isArray(c[0]) && (c = c[0]), c.length < 2)) throw new s("streams");
                            var d = c.map(function (e, i) {
                                var s,
                                    a,
                                    u,
                                    f,
                                    _,
                                    S,
                                    p = i < c.length - 1;
                                return (
                                    (s = i > 0),
                                    (u = a = function (e) {
                                        t || (t = e), e && d.forEach(l), p || (d.forEach(l), h(t));
                                    }),
                                    (f = !1),
                                    (a = function () {
                                        f || ((f = !0), u.apply(void 0, arguments));
                                    }),
                                    (_ = !1),
                                    e.on("close", function () {
                                        _ = !0;
                                    }),
                                    void 0 === n && (n = r(698)),
                                    n(e, { readable: p, writable: s }, function (e) {
                                        if (e) return a(e);
                                        (_ = !0), a();
                                    }),
                                    (S = !1),
                                    function (t) {
                                        if (!_ && !S) {
                                            if (((S = !0), e.setHeader && "function" == typeof e.abort)) return e.abort();
                                            if ("function" == typeof e.destroy) return e.destroy();
                                            a(t || new o("pipe"));
                                        }
                                    }
                                );
                            });
                            return c.reduce(u);
                        };
                    },
                    776: function (e, t, r) {
                        "use strict";
                        var n = r(646).q.ERR_INVALID_OPT_VALUE;
                        e.exports = {
                            getHighWaterMark: function (e, t, r, i) {
                                var s = null != t.highWaterMark ? t.highWaterMark : i ? t[r] : null;
                                if (null != s) {
                                    if (!(isFinite(s) && Math.floor(s) === s) || s < 0) throw new n(i ? r : "highWaterMark", s);
                                    return Math.floor(s);
                                }
                                return e.objectMode ? 16 : 16384;
                            },
                        };
                    },
                    678: function (e, t, r) {
                        e.exports = r(781);
                    },
                    55: function (e, t, r) {
                        var n = r(300),
                            i = n.Buffer;
                        function s(e, t) {
                            for (var r in e) t[r] = e[r];
                        }
                        function o(e, t, r) {
                            return i(e, t, r);
                        }
                        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? (e.exports = n) : (s(n, t), (t.Buffer = o)),
                            (o.prototype = Object.create(i.prototype)),
                            s(i, o),
                            (o.from = function (e, t, r) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return i(e, t, r);
                            }),
                            (o.alloc = function (e, t, r) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var n = i(e);
                                return void 0 !== t ? ("string" == typeof r ? n.fill(t, r) : n.fill(t)) : n.fill(0), n;
                            }),
                            (o.allocUnsafe = function (e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return i(e);
                            }),
                            (o.allocUnsafeSlow = function (e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return n.SlowBuffer(e);
                            });
                    },
                    173: function (e, t, r) {
                        e.exports = i;
                        var n = r(361).EventEmitter;
                        function i() {
                            n.call(this);
                        }
                        r(782)(i, n),
                            (i.Readable = r(709)),
                            (i.Writable = r(337)),
                            (i.Duplex = r(403)),
                            (i.Transform = r(170)),
                            (i.PassThrough = r(889)),
                            (i.finished = r(698)),
                            (i.pipeline = r(442)),
                            (i.Stream = i),
                            (i.prototype.pipe = function (e, t) {
                                var r = this;
                                function i(t) {
                                    e.writable && !1 === e.write(t) && r.pause && r.pause();
                                }
                                function s() {
                                    r.readable && r.resume && r.resume();
                                }
                                r.on("data", i), e.on("drain", s), e._isStdio || (t && !1 === t.end) || (r.on("end", a), r.on("close", l));
                                var o = !1;
                                function a() {
                                    o || ((o = !0), e.end());
                                }
                                function l() {
                                    o || ((o = !0), "function" == typeof e.destroy && e.destroy());
                                }
                                function u(e) {
                                    if ((c(), 0 === n.listenerCount(this, "error"))) throw e;
                                }
                                function c() {
                                    r.removeListener("data", i),
                                        e.removeListener("drain", s),
                                        r.removeListener("end", a),
                                        r.removeListener("close", l),
                                        r.removeListener("error", u),
                                        e.removeListener("error", u),
                                        r.removeListener("end", c),
                                        r.removeListener("close", c),
                                        e.removeListener("close", c);
                                }
                                return r.on("error", u), e.on("error", u), r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e;
                            });
                    },
                    704: function (e, t, r) {
                        "use strict";
                        var n = r(55).Buffer,
                            i =
                                n.isEncoding ||
                                function (e) {
                                    switch ((e = "" + e) && e.toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                        case "raw":
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                };
                        function s(e) {
                            var t;
                            switch (
                            ((this.encoding = (function (e) {
                                var t = (function (e) {
                                    var t;
                                    if (!e) return "utf8";
                                    for (; ;)
                                        switch (e) {
                                            case "utf8":
                                            case "utf-8":
                                                return "utf8";
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return "utf16le";
                                            case "latin1":
                                            case "binary":
                                                return "latin1";
                                            case "base64":
                                            case "ascii":
                                            case "hex":
                                                return e;
                                            default:
                                                if (t) return;
                                                (e = ("" + e).toLowerCase()), (t = !0);
                                        }
                                })(e);
                                if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw Error("Unknown encoding: " + e);
                                return t || e;
                            })(e)),
                                this.encoding)
                            ) {
                                case "utf16le":
                                    (this.text = l), (this.end = u), (t = 4);
                                    break;
                                case "utf8":
                                    (this.fillLast = a), (t = 4);
                                    break;
                                case "base64":
                                    (this.text = c), (this.end = f), (t = 3);
                                    break;
                                default:
                                    (this.write = h), (this.end = d);
                                    return;
                            }
                            (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = n.allocUnsafe(t));
                        }
                        function o(e) {
                            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
                        }
                        function a(e) {
                            var t = this.lastTotal - this.lastNeed,
                                r = (function (e, t, r) {
                                    if ((192 & t[0]) != 128) return (e.lastNeed = 0), "�";
                                    if (e.lastNeed > 1 && t.length > 1) {
                                        if ((192 & t[1]) != 128) return (e.lastNeed = 1), "�";
                                        if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return (e.lastNeed = 2), "�";
                                    }
                                })(this, e, 0);
                            return void 0 !== r
                                ? r
                                : this.lastNeed <= e.length
                                    ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
                                    : void (e.copy(this.lastChar, t, 0, e.length), (this.lastNeed -= e.length));
                        }
                        function l(e, t) {
                            if ((e.length - t) % 2 == 0) {
                                var r = e.toString("utf16le", t);
                                if (r) {
                                    var n = r.charCodeAt(r.length - 1);
                                    if (n >= 55296 && n <= 56319) return (this.lastNeed = 2), (this.lastTotal = 4), (this.lastChar[0] = e[e.length - 2]), (this.lastChar[1] = e[e.length - 1]), r.slice(0, -1);
                                }
                                return r;
                            }
                            return (this.lastNeed = 1), (this.lastTotal = 2), (this.lastChar[0] = e[e.length - 1]), e.toString("utf16le", t, e.length - 1);
                        }
                        function u(e) {
                            var t = e && e.length ? this.write(e) : "";
                            if (this.lastNeed) {
                                var r = this.lastTotal - this.lastNeed;
                                return t + this.lastChar.toString("utf16le", 0, r);
                            }
                            return t;
                        }
                        function c(e, t) {
                            var r = (e.length - t) % 3;
                            return 0 === r
                                ? e.toString("base64", t)
                                : ((this.lastNeed = 3 - r),
                                    (this.lastTotal = 3),
                                    1 === r ? (this.lastChar[0] = e[e.length - 1]) : ((this.lastChar[0] = e[e.length - 2]), (this.lastChar[1] = e[e.length - 1])),
                                    e.toString("base64", t, e.length - r));
                        }
                        function f(e) {
                            var t = e && e.length ? this.write(e) : "";
                            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
                        }
                        function h(e) {
                            return e.toString(this.encoding);
                        }
                        function d(e) {
                            return e && e.length ? this.write(e) : "";
                        }
                        (t.s = s),
                            (s.prototype.write = function (e) {
                                var t, r;
                                if (0 === e.length) return "";
                                if (this.lastNeed) {
                                    if (void 0 === (t = this.fillLast(e))) return "";
                                    (r = this.lastNeed), (this.lastNeed = 0);
                                } else r = 0;
                                return r < e.length ? (t ? t + this.text(e, r) : this.text(e, r)) : t || "";
                            }),
                            (s.prototype.end = function (e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + "�" : t;
                            }),
                            (s.prototype.text = function (e, t) {
                                var r = (function (e, t, r) {
                                    var n = t.length - 1;
                                    if (n < r) return 0;
                                    var i = o(t[n]);
                                    return i >= 0
                                        ? (i > 0 && (e.lastNeed = i - 1), i)
                                        : --n < r || -2 === i
                                            ? 0
                                            : (i = o(t[n])) >= 0
                                                ? (i > 0 && (e.lastNeed = i - 2), i)
                                                : --n < r || -2 === i
                                                    ? 0
                                                    : (i = o(t[n])) >= 0
                                                        ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                                                        : 0;
                                })(this, e, t);
                                if (!this.lastNeed) return e.toString("utf8", t);
                                this.lastTotal = r;
                                var n = e.length - (r - this.lastNeed);
                                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
                            }),
                            (s.prototype.fillLast = function (e) {
                                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), (this.lastNeed -= e.length);
                            });
                    },
                    769: function (e) {
                        e.exports = function (e, r) {
                            if (t("noDeprecation")) return e;
                            var n = !1;
                            return function () {
                                if (!n) {
                                    if (t("throwDeprecation")) throw Error(r);
                                    t("traceDeprecation") ? console.trace(r) : console.warn(r), (n = !0);
                                }
                                return e.apply(this, arguments);
                            };
                        };
                        function t(e) {
                            try {
                                if (!r.g.localStorage) return !1;
                            } catch (e) {
                                return !1;
                            }
                            var t = r.g.localStorage[e];
                            return null != t && "true" === String(t).toLowerCase();
                        }
                    },
                    300: function (e) {
                        "use strict";
                        e.exports = r(48764);
                    },
                    361: function (e) {
                        "use strict";
                        e.exports = r(17187);
                    },
                    781: function (e) {
                        "use strict";
                        e.exports = r(17187).EventEmitter;
                    },
                    837: function (e) {
                        "use strict";
                        e.exports = r(89539);
                    },
                },
                    i = {};
                function s(e) {
                    var r = i[e];
                    if (void 0 !== r) return r.exports;
                    var n = (i[e] = { exports: {} }),
                        o = !0;
                    try {
                        t[e](n, n.exports, s), (o = !1);
                    } finally {
                        o && delete i[e];
                    }
                    return n.exports;
                }
                s.ab = "//";
                var o = s(173);
                e.exports = o;
            })();
        },
        65054: function (e, t, r) {
            var n = r(48764).Buffer;
            /*! typedarray-to-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports = function (e) {
                return ArrayBuffer.isView(e) ? n.from(e.buffer, e.byteOffset, e.byteLength) : n.from(e);
            };
        },
        91496: function (e) {
            "function" == typeof Object.create
                ? (e.exports = function (e, t) {
                    (e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
                })
                : (e.exports = function (e, t) {
                    e.super_ = t;
                    var r = function () { };
                    (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
                });
        },
        20384: function (e) {
            e.exports = function (e) {
                return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
            };
        },
        89539: function (e, t, r) {
            var n,
                i = r(34155),
                s = /%[sdj%]/g;
            (t.format = function (e) {
                if (!I(e)) {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(a(arguments[r]));
                    return t.join(" ");
                }
                for (
                    var r = 1,
                    n = arguments,
                    i = n.length,
                    o = String(e).replace(s, function (e) {
                        if ("%%" === e) return "%";
                        if (r >= i) return e;
                        switch (e) {
                            case "%s":
                                return String(n[r++]);
                            case "%d":
                                return Number(n[r++]);
                            case "%j":
                                try {
                                    return JSON.stringify(n[r++]);
                                } catch (e) {
                                    return "[Circular]";
                                }
                            default:
                                return e;
                        }
                    }),
                    l = n[r];
                    r < i;
                    l = n[++r]
                )
                    S(l) || !y(l) ? (o += " " + l) : (o += " " + a(l));
                return o;
            }),
                (t.deprecate = function (e, n) {
                    if (E(r.g.process))
                        return function () {
                            return t.deprecate(e, n).apply(this, arguments);
                        };
                    if (!0 === i.noDeprecation) return e;
                    var s = !1;
                    return function () {
                        if (!s) {
                            if (i.throwDeprecation) throw Error(n);
                            i.traceDeprecation ? console.trace(n) : console.error(n), (s = !0);
                        }
                        return e.apply(this, arguments);
                    };
                });
            var o = {};
            function a(e, r) {
                var n = { seen: [], stylize: u };
                return (
                    arguments.length >= 3 && (n.depth = arguments[2]),
                    arguments.length >= 4 && (n.colors = arguments[3]),
                    _(r) ? (n.showHidden = r) : r && t._extend(n, r),
                    E(n.showHidden) && (n.showHidden = !1),
                    E(n.depth) && (n.depth = 2),
                    E(n.colors) && (n.colors = !1),
                    E(n.customInspect) && (n.customInspect = !0),
                    n.colors && (n.stylize = l),
                    c(n, e, n.depth)
                );
            }
            function l(e, t) {
                var r = a.styles[t];
                return r ? "\x1b[" + a.colors[r][0] + "m" + e + "\x1b[" + a.colors[r][1] + "m" : e;
            }
            function u(e, t) {
                return e;
            }
            function c(e, r, n) {
                if (e.customInspect && r && m(r.inspect) && r.inspect !== t.inspect && !(r.constructor && r.constructor.prototype === r)) {
                    var i,
                        s,
                        o,
                        a,
                        l,
                        u = r.inspect(n, e);
                    return I(u) || (u = c(e, u, n)), u;
                }
                var y = (function (e, t) {
                    if (E(t)) return e.stylize("undefined", "undefined");
                    if (I(t)) {
                        var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(r, "string");
                    }
                    return p(t) ? e.stylize("" + t, "number") : _(t) ? e.stylize("" + t, "boolean") : S(t) ? e.stylize("null", "null") : void 0;
                })(e, r);
                if (y) return y;
                var v = Object.keys(r),
                    R =
                        ((a = {}),
                            v.forEach(function (e, t) {
                                a[e] = !0;
                            }),
                            a);
                if ((e.showHidden && (v = Object.getOwnPropertyNames(r)), T(r) && (v.indexOf("message") >= 0 || v.indexOf("description") >= 0))) return f(r);
                if (0 === v.length) {
                    if (m(r)) {
                        var b = r.name ? ": " + r.name : "";
                        return e.stylize("[Function" + b + "]", "special");
                    }
                    if (A(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                    if (g(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                    if (T(r)) return f(r);
                }
                var O = "",
                    W = !1,
                    C = ["{", "}"];
                return (d(r) && ((W = !0), (C = ["[", "]"])),
                    m(r) && (O = " [Function" + (r.name ? ": " + r.name : "") + "]"),
                    A(r) && (O = " " + RegExp.prototype.toString.call(r)),
                    g(r) && (O = " " + Date.prototype.toUTCString.call(r)),
                    T(r) && (O = " " + f(r)),
                    0 !== v.length || (W && 0 != r.length))
                    ? n < 0
                        ? A(r)
                            ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
                            : e.stylize("[Object]", "special")
                        : (e.seen.push(r),
                            (l = W
                                ? (function (e, t, r, n, i) {
                                    for (var s = [], o = 0, a = t.length; o < a; ++o) w(t, String(o)) ? s.push(h(e, t, r, n, String(o), !0)) : s.push("");
                                    return (
                                        i.forEach(function (i) {
                                            i.match(/^\d+$/) || s.push(h(e, t, r, n, i, !0));
                                        }),
                                        s
                                    );
                                })(e, r, n, R, v)
                                : v.map(function (t) {
                                    return h(e, r, n, R, t, W);
                                })),
                            e.seen.pop(),
                            (i = O),
                            (s = C),
                            (o = 0),
                            l.reduce(function (e, t) {
                                return o++, t.indexOf("\n") >= 0 && o++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                            }, 0) > 60
                                ? s[0] + ("" === i ? "" : i + "\n ") + " " + l.join(",\n  ") + " " + s[1]
                                : s[0] + i + " " + l.join(", ") + " " + s[1])
                    : C[0] + O + C[1];
            }
            function f(e) {
                return "[" + Error.prototype.toString.call(e) + "]";
            }
            function h(e, t, r, n, i, s) {
                var o, a, l;
                if (
                    ((l = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get ? (a = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special")) : l.set && (a = e.stylize("[Setter]", "special")),
                        w(n, i) || (o = "[" + i + "]"),
                        !a &&
                        (0 > e.seen.indexOf(l.value)
                            ? (a = S(r) ? c(e, l.value, null) : c(e, l.value, r - 1)).indexOf("\n") > -1 &&
                            (a = s
                                ? a
                                    .split("\n")
                                    .map(function (e) {
                                        return "  " + e;
                                    })
                                    .join("\n")
                                    .substr(2)
                                : "\n" +
                                a
                                    .split("\n")
                                    .map(function (e) {
                                        return "   " + e;
                                    })
                                    .join("\n"))
                            : (a = e.stylize("[Circular]", "special"))),
                        E(o))
                ) {
                    if (s && i.match(/^\d+$/)) return a;
                    (o = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                        ? ((o = o.substr(1, o.length - 2)), (o = e.stylize(o, "name")))
                        : ((o = o
                            .replace(/'/g, "\\'")
                            .replace(/\\"/g, '"')
                            .replace(/(^"|"$)/g, "'")),
                            (o = e.stylize(o, "string")));
                }
                return o + ": " + a;
            }
            function d(e) {
                return Array.isArray(e);
            }
            function _(e) {
                return "boolean" == typeof e;
            }
            function S(e) {
                return null === e;
            }
            function p(e) {
                return "number" == typeof e;
            }
            function I(e) {
                return "string" == typeof e;
            }
            function E(e) {
                return void 0 === e;
            }
            function A(e) {
                return y(e) && "[object RegExp]" === v(e);
            }
            function y(e) {
                return "object" == typeof e && null !== e;
            }
            function g(e) {
                return y(e) && "[object Date]" === v(e);
            }
            function T(e) {
                return y(e) && ("[object Error]" === v(e) || e instanceof Error);
            }
            function m(e) {
                return "function" == typeof e;
            }
            function v(e) {
                return Object.prototype.toString.call(e);
            }
            function R(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10);
            }
            (t.debuglog = function (e) {
                if ((E(n) && (n = i.env.NODE_DEBUG || ""), !o[(e = e.toUpperCase())])) {
                    if (RegExp("\\b" + e + "\\b", "i").test(n)) {
                        var r = i.pid;
                        o[e] = function () {
                            var n = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, r, n);
                        };
                    } else o[e] = function () { };
                }
                return o[e];
            }),
                (t.inspect = a),
                (a.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39],
                }),
                (a.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }),
                (t.isArray = d),
                (t.isBoolean = _),
                (t.isNull = S),
                (t.isNullOrUndefined = function (e) {
                    return null == e;
                }),
                (t.isNumber = p),
                (t.isString = I),
                (t.isSymbol = function (e) {
                    return "symbol" == typeof e;
                }),
                (t.isUndefined = E),
                (t.isRegExp = A),
                (t.isObject = y),
                (t.isDate = g),
                (t.isError = T),
                (t.isFunction = m),
                (t.isPrimitive = function (e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
                }),
                (t.isBuffer = r(20384));
            var b = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function w(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            (t.log = function () {
                var e, r;
                console.log("%s - %s", ((r = [R((e = new Date()).getHours()), R(e.getMinutes()), R(e.getSeconds())].join(":")), [e.getDate(), b[e.getMonth()], r].join(" ")), t.format.apply(t, arguments));
            }),
                (t.inherits = r(91496)),
                (t._extend = function (e, t) {
                    if (!t || !y(t)) return e;
                    for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                    return e;
                });
        },
        8732: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.WASI_ENOMSG = t.WASI_ENOMEM = t.WASI_ENOLINK = t.WASI_ENOLCK = t.WASI_ENOEXEC = t.WASI_ENOENT = t.WASI_ENODEV = t.WASI_ENOBUFS = t.WASI_ENFILE = t.WASI_ENETUNREACH = t.WASI_ENETRESET = t.WASI_ENETDOWN = t.WASI_ENAMETOOLONG = t.WASI_EMULTIHOP = t.WASI_EMSGSIZE = t.WASI_EMLINK = t.WASI_EMFILE = t.WASI_ELOOP = t.WASI_EISDIR = t.WASI_EISCONN = t.WASI_EIO = t.WASI_EINVAL = t.WASI_EINTR = t.WASI_EINPROGRESS = t.WASI_EILSEQ = t.WASI_EIDRM = t.WASI_EHOSTUNREACH = t.WASI_EFBIG = t.WASI_EFAULT = t.WASI_EEXIST = t.WASI_EDQUOT = t.WASI_EDOM = t.WASI_EDESTADDRREQ = t.WASI_EDEADLK = t.WASI_ECONNRESET = t.WASI_ECONNREFUSED = t.WASI_ECONNABORTED = t.WASI_ECHILD = t.WASI_ECANCELED = t.WASI_EBUSY = t.WASI_EBADMSG = t.WASI_EBADF = t.WASI_EALREADY = t.WASI_EAGAIN = t.WASI_EAFNOSUPPORT = t.WASI_EADDRNOTAVAIL = t.WASI_EADDRINUSE = t.WASI_EACCES = t.WASI_E2BIG = t.WASI_ESUCCESS = void 0),
                (t.WASI_SIGVTALRM = t.WASI_SIGUSR2 = t.WASI_SIGUSR1 = t.WASI_SIGURG = t.WASI_SIGTTOU = t.WASI_SIGTTIN = t.WASI_SIGTSTP = t.WASI_SIGTRAP = t.WASI_SIGTERM = t.WASI_SIGSTOP = t.WASI_SIGSEGV = t.WASI_SIGQUIT = t.WASI_SIGPIPE = t.WASI_SIGKILL = t.WASI_SIGINT = t.WASI_SIGILL = t.WASI_SIGHUP = t.WASI_SIGFPE = t.WASI_SIGCONT = t.WASI_SIGCHLD = t.WASI_SIGBUS = t.WASI_SIGALRM = t.WASI_SIGABRT = t.WASI_ENOTCAPABLE = t.WASI_EXDEV = t.WASI_ETXTBSY = t.WASI_ETIMEDOUT = t.WASI_ESTALE = t.WASI_ESRCH = t.WASI_ESPIPE = t.WASI_EROFS = t.WASI_ERANGE = t.WASI_EPROTOTYPE = t.WASI_EPROTONOSUPPORT = t.WASI_EPROTO = t.WASI_EPIPE = t.WASI_EPERM = t.WASI_EOWNERDEAD = t.WASI_EOVERFLOW = t.WASI_ENXIO = t.WASI_ENOTTY = t.WASI_ENOTSUP = t.WASI_ENOTSOCK = t.WASI_ENOTRECOVERABLE = t.WASI_ENOTEMPTY = t.WASI_ENOTDIR = t.WASI_ENOTCONN = t.WASI_ENOSYS = t.WASI_ENOSPC = t.WASI_ENOPROTOOPT = void 0),
                (t.RIGHTS_REGULAR_FILE_BASE = t.RIGHTS_CHARACTER_DEVICE_INHERITING = t.RIGHTS_CHARACTER_DEVICE_BASE = t.RIGHTS_BLOCK_DEVICE_INHERITING = t.RIGHTS_BLOCK_DEVICE_BASE = t.RIGHTS_ALL = t.WASI_RIGHT_SOCK_SHUTDOWN = t.WASI_RIGHT_POLL_FD_READWRITE = t.WASI_RIGHT_PATH_UNLINK_FILE = t.WASI_RIGHT_PATH_REMOVE_DIRECTORY = t.WASI_RIGHT_PATH_SYMLINK = t.WASI_RIGHT_FD_FILESTAT_SET_TIMES = t.WASI_RIGHT_FD_FILESTAT_SET_SIZE = t.WASI_RIGHT_FD_FILESTAT_GET = t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES = t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE = t.WASI_RIGHT_PATH_FILESTAT_GET = t.WASI_RIGHT_PATH_RENAME_TARGET = t.WASI_RIGHT_PATH_RENAME_SOURCE = t.WASI_RIGHT_PATH_READLINK = t.WASI_RIGHT_FD_READDIR = t.WASI_RIGHT_PATH_OPEN = t.WASI_RIGHT_PATH_LINK_TARGET = t.WASI_RIGHT_PATH_LINK_SOURCE = t.WASI_RIGHT_PATH_CREATE_FILE = t.WASI_RIGHT_PATH_CREATE_DIRECTORY = t.WASI_RIGHT_FD_ALLOCATE = t.WASI_RIGHT_FD_ADVISE = t.WASI_RIGHT_FD_WRITE = t.WASI_RIGHT_FD_TELL = t.WASI_RIGHT_FD_SYNC = t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS = t.WASI_RIGHT_FD_SEEK = t.WASI_RIGHT_FD_READ = t.WASI_RIGHT_FD_DATASYNC = t.WASI_FDFLAG_SYNC = t.WASI_FDFLAG_RSYNC = t.WASI_FDFLAG_NONBLOCK = t.WASI_FDFLAG_DSYNC = t.WASI_FDFLAG_APPEND = t.WASI_FILETYPE_SYMBOLIC_LINK = t.WASI_FILETYPE_SOCKET_STREAM = t.WASI_FILETYPE_SOCKET_DGRAM = t.WASI_FILETYPE_REGULAR_FILE = t.WASI_FILETYPE_DIRECTORY = t.WASI_FILETYPE_CHARACTER_DEVICE = t.WASI_FILETYPE_BLOCK_DEVICE = t.WASI_FILETYPE_UNKNOWN = t.WASI_SIGXFSZ = t.WASI_SIGXCPU = void 0),
                (t.SIGNAL_MAP = t.ERROR_MAP = t.WASI_WHENCE_END = t.WASI_WHENCE_CUR = t.WASI_WHENCE_SET = t.WASI_STDERR_FILENO = t.WASI_STDOUT_FILENO = t.WASI_STDIN_FILENO = t.WASI_DIRCOOKIE_START = t.WASI_PREOPENTYPE_DIR = t.WASI_O_TRUNC = t.WASI_O_EXCL = t.WASI_O_DIRECTORY = t.WASI_O_CREAT = t.WASI_FILESTAT_SET_MTIM_NOW = t.WASI_FILESTAT_SET_MTIM = t.WASI_FILESTAT_SET_ATIM_NOW = t.WASI_FILESTAT_SET_ATIM = t.WASI_EVENTTYPE_FD_WRITE = t.WASI_EVENTTYPE_FD_READ = t.WASI_EVENTTYPE_CLOCK = t.WASI_CLOCK_THREAD_CPUTIME_ID = t.WASI_CLOCK_PROCESS_CPUTIME_ID = t.WASI_CLOCK_MONOTONIC = t.WASI_CLOCK_REALTIME = t.RIGHTS_TTY_INHERITING = t.RIGHTS_TTY_BASE = t.RIGHTS_SOCKET_INHERITING = t.RIGHTS_SOCKET_BASE = t.RIGHTS_DIRECTORY_INHERITING = t.RIGHTS_DIRECTORY_BASE = t.RIGHTS_REGULAR_FILE_INHERITING = void 0),
                (t.WASI_ESUCCESS = 0),
                (t.WASI_E2BIG = 1),
                (t.WASI_EACCES = 2),
                (t.WASI_EADDRINUSE = 3),
                (t.WASI_EADDRNOTAVAIL = 4),
                (t.WASI_EAFNOSUPPORT = 5),
                (t.WASI_EAGAIN = 6),
                (t.WASI_EALREADY = 7),
                (t.WASI_EBADF = 8),
                (t.WASI_EBADMSG = 9),
                (t.WASI_EBUSY = 10),
                (t.WASI_ECANCELED = 11),
                (t.WASI_ECHILD = 12),
                (t.WASI_ECONNABORTED = 13),
                (t.WASI_ECONNREFUSED = 14),
                (t.WASI_ECONNRESET = 15),
                (t.WASI_EDEADLK = 16),
                (t.WASI_EDESTADDRREQ = 17),
                (t.WASI_EDOM = 18),
                (t.WASI_EDQUOT = 19),
                (t.WASI_EEXIST = 20),
                (t.WASI_EFAULT = 21),
                (t.WASI_EFBIG = 22),
                (t.WASI_EHOSTUNREACH = 23),
                (t.WASI_EIDRM = 24),
                (t.WASI_EILSEQ = 25),
                (t.WASI_EINPROGRESS = 26),
                (t.WASI_EINTR = 27),
                (t.WASI_EINVAL = 28),
                (t.WASI_EIO = 29),
                (t.WASI_EISCONN = 30),
                (t.WASI_EISDIR = 31),
                (t.WASI_ELOOP = 32),
                (t.WASI_EMFILE = 33),
                (t.WASI_EMLINK = 34),
                (t.WASI_EMSGSIZE = 35),
                (t.WASI_EMULTIHOP = 36),
                (t.WASI_ENAMETOOLONG = 37),
                (t.WASI_ENETDOWN = 38),
                (t.WASI_ENETRESET = 39),
                (t.WASI_ENETUNREACH = 40),
                (t.WASI_ENFILE = 41),
                (t.WASI_ENOBUFS = 42),
                (t.WASI_ENODEV = 43),
                (t.WASI_ENOENT = 44),
                (t.WASI_ENOEXEC = 45),
                (t.WASI_ENOLCK = 46),
                (t.WASI_ENOLINK = 47),
                (t.WASI_ENOMEM = 48),
                (t.WASI_ENOMSG = 49),
                (t.WASI_ENOPROTOOPT = 50),
                (t.WASI_ENOSPC = 51),
                (t.WASI_ENOSYS = 52),
                (t.WASI_ENOTCONN = 53),
                (t.WASI_ENOTDIR = 54),
                (t.WASI_ENOTEMPTY = 55),
                (t.WASI_ENOTRECOVERABLE = 56),
                (t.WASI_ENOTSOCK = 57),
                (t.WASI_ENOTSUP = 58),
                (t.WASI_ENOTTY = 59),
                (t.WASI_ENXIO = 60),
                (t.WASI_EOVERFLOW = 61),
                (t.WASI_EOWNERDEAD = 62),
                (t.WASI_EPERM = 63),
                (t.WASI_EPIPE = 64),
                (t.WASI_EPROTO = 65),
                (t.WASI_EPROTONOSUPPORT = 66),
                (t.WASI_EPROTOTYPE = 67),
                (t.WASI_ERANGE = 68),
                (t.WASI_EROFS = 69),
                (t.WASI_ESPIPE = 70),
                (t.WASI_ESRCH = 71),
                (t.WASI_ESTALE = 72),
                (t.WASI_ETIMEDOUT = 73),
                (t.WASI_ETXTBSY = 74),
                (t.WASI_EXDEV = 75),
                (t.WASI_ENOTCAPABLE = 76),
                (t.WASI_SIGABRT = 0),
                (t.WASI_SIGALRM = 1),
                (t.WASI_SIGBUS = 2),
                (t.WASI_SIGCHLD = 3),
                (t.WASI_SIGCONT = 4),
                (t.WASI_SIGFPE = 5),
                (t.WASI_SIGHUP = 6),
                (t.WASI_SIGILL = 7),
                (t.WASI_SIGINT = 8),
                (t.WASI_SIGKILL = 9),
                (t.WASI_SIGPIPE = 10),
                (t.WASI_SIGQUIT = 11),
                (t.WASI_SIGSEGV = 12),
                (t.WASI_SIGSTOP = 13),
                (t.WASI_SIGTERM = 14),
                (t.WASI_SIGTRAP = 15),
                (t.WASI_SIGTSTP = 16),
                (t.WASI_SIGTTIN = 17),
                (t.WASI_SIGTTOU = 18),
                (t.WASI_SIGURG = 19),
                (t.WASI_SIGUSR1 = 20),
                (t.WASI_SIGUSR2 = 21),
                (t.WASI_SIGVTALRM = 22),
                (t.WASI_SIGXCPU = 23),
                (t.WASI_SIGXFSZ = 24),
                (t.WASI_FILETYPE_UNKNOWN = 0),
                (t.WASI_FILETYPE_BLOCK_DEVICE = 1),
                (t.WASI_FILETYPE_CHARACTER_DEVICE = 2),
                (t.WASI_FILETYPE_DIRECTORY = 3),
                (t.WASI_FILETYPE_REGULAR_FILE = 4),
                (t.WASI_FILETYPE_SOCKET_DGRAM = 5),
                (t.WASI_FILETYPE_SOCKET_STREAM = 6),
                (t.WASI_FILETYPE_SYMBOLIC_LINK = 7),
                (t.WASI_FDFLAG_APPEND = 1),
                (t.WASI_FDFLAG_DSYNC = 2),
                (t.WASI_FDFLAG_NONBLOCK = 4),
                (t.WASI_FDFLAG_RSYNC = 8),
                (t.WASI_FDFLAG_SYNC = 16),
                (t.WASI_RIGHT_FD_DATASYNC = BigInt(1)),
                (t.WASI_RIGHT_FD_READ = BigInt(2)),
                (t.WASI_RIGHT_FD_SEEK = BigInt(4)),
                (t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS = BigInt(8)),
                (t.WASI_RIGHT_FD_SYNC = BigInt(16)),
                (t.WASI_RIGHT_FD_TELL = BigInt(32)),
                (t.WASI_RIGHT_FD_WRITE = BigInt(64)),
                (t.WASI_RIGHT_FD_ADVISE = BigInt(128)),
                (t.WASI_RIGHT_FD_ALLOCATE = BigInt(256)),
                (t.WASI_RIGHT_PATH_CREATE_DIRECTORY = BigInt(512)),
                (t.WASI_RIGHT_PATH_CREATE_FILE = BigInt(1024)),
                (t.WASI_RIGHT_PATH_LINK_SOURCE = BigInt(2048)),
                (t.WASI_RIGHT_PATH_LINK_TARGET = BigInt(4096)),
                (t.WASI_RIGHT_PATH_OPEN = BigInt(8192)),
                (t.WASI_RIGHT_FD_READDIR = BigInt(16384)),
                (t.WASI_RIGHT_PATH_READLINK = BigInt(32768)),
                (t.WASI_RIGHT_PATH_RENAME_SOURCE = BigInt(65536)),
                (t.WASI_RIGHT_PATH_RENAME_TARGET = BigInt(131072)),
                (t.WASI_RIGHT_PATH_FILESTAT_GET = BigInt(262144)),
                (t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE = BigInt(524288)),
                (t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES = BigInt(1048576)),
                (t.WASI_RIGHT_FD_FILESTAT_GET = BigInt(2097152)),
                (t.WASI_RIGHT_FD_FILESTAT_SET_SIZE = BigInt(4194304)),
                (t.WASI_RIGHT_FD_FILESTAT_SET_TIMES = BigInt(8388608)),
                (t.WASI_RIGHT_PATH_SYMLINK = BigInt(16777216)),
                (t.WASI_RIGHT_PATH_REMOVE_DIRECTORY = BigInt(33554432)),
                (t.WASI_RIGHT_PATH_UNLINK_FILE = BigInt(67108864)),
                (t.WASI_RIGHT_POLL_FD_READWRITE = BigInt(134217728)),
                (t.WASI_RIGHT_SOCK_SHUTDOWN = BigInt(268435456)),
                (t.RIGHTS_ALL =
                    t.WASI_RIGHT_FD_DATASYNC |
                    t.WASI_RIGHT_FD_READ |
                    t.WASI_RIGHT_FD_SEEK |
                    t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
                    t.WASI_RIGHT_FD_SYNC |
                    t.WASI_RIGHT_FD_TELL |
                    t.WASI_RIGHT_FD_WRITE |
                    t.WASI_RIGHT_FD_ADVISE |
                    t.WASI_RIGHT_FD_ALLOCATE |
                    t.WASI_RIGHT_PATH_CREATE_DIRECTORY |
                    t.WASI_RIGHT_PATH_CREATE_FILE |
                    t.WASI_RIGHT_PATH_LINK_SOURCE |
                    t.WASI_RIGHT_PATH_LINK_TARGET |
                    t.WASI_RIGHT_PATH_OPEN |
                    t.WASI_RIGHT_FD_READDIR |
                    t.WASI_RIGHT_PATH_READLINK |
                    t.WASI_RIGHT_PATH_RENAME_SOURCE |
                    t.WASI_RIGHT_PATH_RENAME_TARGET |
                    t.WASI_RIGHT_PATH_FILESTAT_GET |
                    t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE |
                    t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES |
                    t.WASI_RIGHT_FD_FILESTAT_GET |
                    t.WASI_RIGHT_FD_FILESTAT_SET_TIMES |
                    t.WASI_RIGHT_FD_FILESTAT_SET_SIZE |
                    t.WASI_RIGHT_PATH_SYMLINK |
                    t.WASI_RIGHT_PATH_UNLINK_FILE |
                    t.WASI_RIGHT_PATH_REMOVE_DIRECTORY |
                    t.WASI_RIGHT_POLL_FD_READWRITE |
                    t.WASI_RIGHT_SOCK_SHUTDOWN),
                (t.RIGHTS_BLOCK_DEVICE_BASE = t.RIGHTS_ALL),
                (t.RIGHTS_BLOCK_DEVICE_INHERITING = t.RIGHTS_ALL),
                (t.RIGHTS_CHARACTER_DEVICE_BASE = t.RIGHTS_ALL),
                (t.RIGHTS_CHARACTER_DEVICE_INHERITING = t.RIGHTS_ALL),
                (t.RIGHTS_REGULAR_FILE_BASE =
                    t.WASI_RIGHT_FD_DATASYNC |
                    t.WASI_RIGHT_FD_READ |
                    t.WASI_RIGHT_FD_SEEK |
                    t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
                    t.WASI_RIGHT_FD_SYNC |
                    t.WASI_RIGHT_FD_TELL |
                    t.WASI_RIGHT_FD_WRITE |
                    t.WASI_RIGHT_FD_ADVISE |
                    t.WASI_RIGHT_FD_ALLOCATE |
                    t.WASI_RIGHT_FD_FILESTAT_GET |
                    t.WASI_RIGHT_FD_FILESTAT_SET_SIZE |
                    t.WASI_RIGHT_FD_FILESTAT_SET_TIMES |
                    t.WASI_RIGHT_POLL_FD_READWRITE),
                (t.RIGHTS_REGULAR_FILE_INHERITING = BigInt(0)),
                (t.RIGHTS_DIRECTORY_BASE =
                    t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
                    t.WASI_RIGHT_FD_SYNC |
                    t.WASI_RIGHT_FD_ADVISE |
                    t.WASI_RIGHT_PATH_CREATE_DIRECTORY |
                    t.WASI_RIGHT_PATH_CREATE_FILE |
                    t.WASI_RIGHT_PATH_LINK_SOURCE |
                    t.WASI_RIGHT_PATH_LINK_TARGET |
                    t.WASI_RIGHT_PATH_OPEN |
                    t.WASI_RIGHT_FD_READDIR |
                    t.WASI_RIGHT_PATH_READLINK |
                    t.WASI_RIGHT_PATH_RENAME_SOURCE |
                    t.WASI_RIGHT_PATH_RENAME_TARGET |
                    t.WASI_RIGHT_PATH_FILESTAT_GET |
                    t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE |
                    t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES |
                    t.WASI_RIGHT_FD_FILESTAT_GET |
                    t.WASI_RIGHT_FD_FILESTAT_SET_TIMES |
                    t.WASI_RIGHT_PATH_SYMLINK |
                    t.WASI_RIGHT_PATH_UNLINK_FILE |
                    t.WASI_RIGHT_PATH_REMOVE_DIRECTORY |
                    t.WASI_RIGHT_POLL_FD_READWRITE),
                (t.RIGHTS_DIRECTORY_INHERITING = t.RIGHTS_DIRECTORY_BASE | t.RIGHTS_REGULAR_FILE_BASE),
                (t.RIGHTS_SOCKET_BASE = t.WASI_RIGHT_FD_READ | t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | t.WASI_RIGHT_FD_WRITE | t.WASI_RIGHT_FD_FILESTAT_GET | t.WASI_RIGHT_POLL_FD_READWRITE | t.WASI_RIGHT_SOCK_SHUTDOWN),
                (t.RIGHTS_SOCKET_INHERITING = t.RIGHTS_ALL),
                (t.RIGHTS_TTY_BASE = t.WASI_RIGHT_FD_READ | t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | t.WASI_RIGHT_FD_WRITE | t.WASI_RIGHT_FD_FILESTAT_GET | t.WASI_RIGHT_POLL_FD_READWRITE),
                (t.RIGHTS_TTY_INHERITING = BigInt(0)),
                (t.WASI_CLOCK_REALTIME = 0),
                (t.WASI_CLOCK_MONOTONIC = 1),
                (t.WASI_CLOCK_PROCESS_CPUTIME_ID = 2),
                (t.WASI_CLOCK_THREAD_CPUTIME_ID = 3),
                (t.WASI_EVENTTYPE_CLOCK = 0),
                (t.WASI_EVENTTYPE_FD_READ = 1),
                (t.WASI_EVENTTYPE_FD_WRITE = 2),
                (t.WASI_FILESTAT_SET_ATIM = 1),
                (t.WASI_FILESTAT_SET_ATIM_NOW = 2),
                (t.WASI_FILESTAT_SET_MTIM = 4),
                (t.WASI_FILESTAT_SET_MTIM_NOW = 8),
                (t.WASI_O_CREAT = 1),
                (t.WASI_O_DIRECTORY = 2),
                (t.WASI_O_EXCL = 4),
                (t.WASI_O_TRUNC = 8),
                (t.WASI_PREOPENTYPE_DIR = 0),
                (t.WASI_DIRCOOKIE_START = 0),
                (t.WASI_STDIN_FILENO = 0),
                (t.WASI_STDOUT_FILENO = 1),
                (t.WASI_STDERR_FILENO = 2),
                (t.WASI_WHENCE_SET = 0),
                (t.WASI_WHENCE_CUR = 1),
                (t.WASI_WHENCE_END = 2),
                (t.ERROR_MAP = {
                    E2BIG: t.WASI_E2BIG,
                    EACCES: t.WASI_EACCES,
                    EADDRINUSE: t.WASI_EADDRINUSE,
                    EADDRNOTAVAIL: t.WASI_EADDRNOTAVAIL,
                    EAFNOSUPPORT: t.WASI_EAFNOSUPPORT,
                    EALREADY: t.WASI_EALREADY,
                    EAGAIN: t.WASI_EAGAIN,
                    EBADF: t.WASI_EBADF,
                    EBADMSG: t.WASI_EBADMSG,
                    EBUSY: t.WASI_EBUSY,
                    ECANCELED: t.WASI_ECANCELED,
                    ECHILD: t.WASI_ECHILD,
                    ECONNABORTED: t.WASI_ECONNABORTED,
                    ECONNREFUSED: t.WASI_ECONNREFUSED,
                    ECONNRESET: t.WASI_ECONNRESET,
                    EDEADLOCK: t.WASI_EDEADLK,
                    EDESTADDRREQ: t.WASI_EDESTADDRREQ,
                    EDOM: t.WASI_EDOM,
                    EDQUOT: t.WASI_EDQUOT,
                    EEXIST: t.WASI_EEXIST,
                    EFAULT: t.WASI_EFAULT,
                    EFBIG: t.WASI_EFBIG,
                    EHOSTDOWN: t.WASI_EHOSTUNREACH,
                    EHOSTUNREACH: t.WASI_EHOSTUNREACH,
                    EIDRM: t.WASI_EIDRM,
                    EILSEQ: t.WASI_EILSEQ,
                    EINPROGRESS: t.WASI_EINPROGRESS,
                    EINTR: t.WASI_EINTR,
                    EINVAL: t.WASI_EINVAL,
                    EIO: t.WASI_EIO,
                    EISCONN: t.WASI_EISCONN,
                    EISDIR: t.WASI_EISDIR,
                    ELOOP: t.WASI_ELOOP,
                    EMFILE: t.WASI_EMFILE,
                    EMLINK: t.WASI_EMLINK,
                    EMSGSIZE: t.WASI_EMSGSIZE,
                    EMULTIHOP: t.WASI_EMULTIHOP,
                    ENAMETOOLONG: t.WASI_ENAMETOOLONG,
                    ENETDOWN: t.WASI_ENETDOWN,
                    ENETRESET: t.WASI_ENETRESET,
                    ENETUNREACH: t.WASI_ENETUNREACH,
                    ENFILE: t.WASI_ENFILE,
                    ENOBUFS: t.WASI_ENOBUFS,
                    ENODEV: t.WASI_ENODEV,
                    ENOENT: t.WASI_ENOENT,
                    ENOEXEC: t.WASI_ENOEXEC,
                    ENOLCK: t.WASI_ENOLCK,
                    ENOLINK: t.WASI_ENOLINK,
                    ENOMEM: t.WASI_ENOMEM,
                    ENOMSG: t.WASI_ENOMSG,
                    ENOPROTOOPT: t.WASI_ENOPROTOOPT,
                    ENOSPC: t.WASI_ENOSPC,
                    ENOSYS: t.WASI_ENOSYS,
                    ENOTCONN: t.WASI_ENOTCONN,
                    ENOTDIR: t.WASI_ENOTDIR,
                    ENOTEMPTY: t.WASI_ENOTEMPTY,
                    ENOTRECOVERABLE: t.WASI_ENOTRECOVERABLE,
                    ENOTSOCK: t.WASI_ENOTSOCK,
                    ENOTTY: t.WASI_ENOTTY,
                    ENXIO: t.WASI_ENXIO,
                    EOVERFLOW: t.WASI_EOVERFLOW,
                    EOWNERDEAD: t.WASI_EOWNERDEAD,
                    EPERM: t.WASI_EPERM,
                    EPIPE: t.WASI_EPIPE,
                    EPROTO: t.WASI_EPROTO,
                    EPROTONOSUPPORT: t.WASI_EPROTONOSUPPORT,
                    EPROTOTYPE: t.WASI_EPROTOTYPE,
                    ERANGE: t.WASI_ERANGE,
                    EROFS: t.WASI_EROFS,
                    ESPIPE: t.WASI_ESPIPE,
                    ESRCH: t.WASI_ESRCH,
                    ESTALE: t.WASI_ESTALE,
                    ETIMEDOUT: t.WASI_ETIMEDOUT,
                    ETXTBSY: t.WASI_ETXTBSY,
                    EXDEV: t.WASI_EXDEV,
                }),
                (t.SIGNAL_MAP = {
                    [t.WASI_SIGHUP]: "SIGHUP",
                    [t.WASI_SIGINT]: "SIGINT",
                    [t.WASI_SIGQUIT]: "SIGQUIT",
                    [t.WASI_SIGILL]: "SIGILL",
                    [t.WASI_SIGTRAP]: "SIGTRAP",
                    [t.WASI_SIGABRT]: "SIGABRT",
                    [t.WASI_SIGBUS]: "SIGBUS",
                    [t.WASI_SIGFPE]: "SIGFPE",
                    [t.WASI_SIGKILL]: "SIGKILL",
                    [t.WASI_SIGUSR1]: "SIGUSR1",
                    [t.WASI_SIGSEGV]: "SIGSEGV",
                    [t.WASI_SIGUSR2]: "SIGUSR2",
                    [t.WASI_SIGPIPE]: "SIGPIPE",
                    [t.WASI_SIGALRM]: "SIGALRM",
                    [t.WASI_SIGTERM]: "SIGTERM",
                    [t.WASI_SIGCHLD]: "SIGCHLD",
                    [t.WASI_SIGCONT]: "SIGCONT",
                    [t.WASI_SIGSTOP]: "SIGSTOP",
                    [t.WASI_SIGTSTP]: "SIGTSTP",
                    [t.WASI_SIGTTIN]: "SIGTTIN",
                    [t.WASI_SIGTTOU]: "SIGTTOU",
                    [t.WASI_SIGURG]: "SIGURG",
                    [t.WASI_SIGXCPU]: "SIGXCPU",
                    [t.WASI_SIGXFSZ]: "SIGXFSZ",
                    [t.WASI_SIGVTALRM]: "SIGVTALRM",
                });
        },
        8994: function (e, t, r) {
            "use strict";
            var n =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.createFileSystem = void 0);
            let i = n(r(40610)),
                s = r(55370),
                o = r(14539);
            function a(e, t) {
                if ("zip" == e.type)
                    return (function (e, t = "/") {
                        let r = (0, s.createFsFromVolume)(new s.Volume());
                        return r.mkdirSync(t, { recursive: !0 }), (0, i.default)({ data: e, fs: r, directory: t }), r;
                    })(e.data, e.mountpoint);
                if ("zip-async" == e.type)
                    return (function (e, t = "/") {
                        let r = (0, s.createFsFromVolume)(new s.Volume()),
                            n = (async () => {
                                let n;
                                try {
                                    n = await e();
                                } catch (e) {
                                    throw (console.warn(`FAILED to load async filesystem for '${t}' - ${e}`), e);
                                }
                                (0, i.default)({ data: n, fs: r, directory: t });
                            })();
                        return (r.waitUntilLoaded = () => n), r;
                    })(e.getData, e.mountpoint);
                if ("zipfile" == e.type) throw Error(`you must convert zipfile -- read ${e.zipfile} into memory`);
                if ("zipurl" == e.type) throw Error(`you must convert zipurl -- read ${e.zipurl} into memory`);
                if ("native" == e.type)
                    return null == t
                        ? t
                        : (function (e) {
                            function t(t) {
                                let r = 0;
                                for (let n in s.fs.constants) n.startsWith("O_") && t & s.fs.constants[n] && (r |= e.constants[n]);
                                return r;
                            }
                            let r = async (r, n, i) => await e.open(r, t(n), i),
                                n = { ...e.promises, open: async (t, r, n) => await e.promises.open(t, r, n) };
                            return { ...{ ...e, promises: n }, open: r, openSync: (r, n, i) => e.openSync(r, t(n), i), constants: s.fs.constants };
                        })(t);
                if ("mem" == e.type) return l(e.contents);
                if ("dev" == e.type)
                    return (function () {
                        let e = s.Volume.fromJSON({ "/dev/stdin": "", "/dev/stdout": "", "/dev/stderr": "" });
                        e.releasedFds = [0, 1, 2];
                        let t = e.openSync("/dev/stderr", "w"),
                            r = e.openSync("/dev/stdout", "w"),
                            n = e.openSync("/dev/stdin", "r");
                        if (2 != t) throw Error(`invalid handle for stderr: ${t}`);
                        if (1 != r) throw Error(`invalid handle for stdout: ${r}`);
                        if (0 != n) throw Error(`invalid handle for stdin: ${n}`);
                        return (0, s.createFsFromVolume)(e);
                    })();
                throw Error(`unknown spec type - ${JSON.stringify(e)}`);
            }
            function l(e) {
                let t = null != e ? s.Volume.fromJSON(e) : new s.Volume();
                return (0, s.createFsFromVolume)(t);
            }
            t.createFileSystem = function (e, t) {
                if (0 == e.length) return l();
                if (1 == e.length) return a(e[0], t) ?? l();
                let r = new o.Union(),
                    n = [];
                for (let i of e) {
                    let e = a(i, t);
                    null != e && (r.use(e), null != e.waitUntilLoaded && n.push(e.waitUntilLoaded.bind(e)));
                }
                let i = async () => {
                    for (let e of n) await e();
                };
                return { ...r, constants: s.fs.constants, waitUntilLoaded: i };
            };
        },
        67545: function (e, t, r) {
            "use strict";
            var n =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r);
                        var i = Object.getOwnPropertyDescriptor(t, r);
                        (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                            (i = {
                                enumerable: !0,
                                get: function () {
                                    return t[r];
                                },
                            }),
                            Object.defineProperty(e, n, i);
                    }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                    }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function (e, t) {
                            Object.defineProperty(e, "default", { enumerable: !0, value: t });
                        }
                        : function (e, t) {
                            e.default = t;
                        }),
                s =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                        return i(t, e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.constants = t.createFileSystem = t.SOCKET_DEFAULT_RIGHTS = void 0);
            let o = s(r(78019));
            Object.defineProperty(t, "SOCKET_DEFAULT_RIGHTS", {
                enumerable: !0,
                get: function () {
                    return o.SOCKET_DEFAULT_RIGHTS;
                },
            }),
                (t.default = o.default);
            var a = r(8994);
            Object.defineProperty(t, "createFileSystem", {
                enumerable: !0,
                get: function () {
                    return a.createFileSystem;
                },
            });
            let l = s(r(8732));
            t.constants = l;
        },
        71359: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.WASIKillError = t.WASIExitError = t.WASIError = void 0);
            class r extends Error {
                constructor(e) {
                    super(), (this.errno = e), Object.setPrototypeOf(this, r.prototype);
                }
            }
            t.WASIError = r;
            class n extends Error {
                constructor(e) {
                    super(`WASI Exit error: ${e}`), (this.code = e), Object.setPrototypeOf(this, n.prototype);
                }
            }
            t.WASIExitError = n;
            class i extends Error {
                constructor(e) {
                    super(`WASI Kill signal: ${e}`), (this.signal = e), Object.setPrototypeOf(this, i.prototype);
                }
            }
            t.WASIKillError = i;
        },
        40610: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            let n = r(1864),
                i = r(63959);
            t.default = function ({ data: e, fs: t, directory: r }) {
                if ((e instanceof ArrayBuffer && (e = new Uint8Array(e)), !(e instanceof Uint8Array))) throw Error("impossible");
                for (let [s, o] of Object.entries((0, i.unzipSync)(e))) {
                    let e = (0, n.join)(r, s);
                    t.mkdirSync((0, n.dirname)(e), { recursive: !0 }), e.endsWith("/") || (t.writeFileSync(e, o), t.chmodSync(e, 511));
                }
            };
        },
        78019: function (e, t, r) {
            "use strict";
            var n = r(48764).Buffer,
                i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.SOCKET_DEFAULT_RIGHTS = void 0);
            let s = i(r(11227)),
                o = (0, s.default)("wasi"),
                a = (0, s.default)("wasi:open"),
                l = r(71359),
                u = i(r(65054)),
                c = r(8732),
                f = c.WASI_RIGHT_FD_DATASYNC | c.WASI_RIGHT_FD_READ | c.WASI_RIGHT_FD_SYNC | c.WASI_RIGHT_FD_ADVISE | c.WASI_RIGHT_FD_FILESTAT_GET | c.WASI_RIGHT_POLL_FD_READWRITE,
                h = c.WASI_RIGHT_FD_DATASYNC | c.WASI_RIGHT_FD_WRITE | c.WASI_RIGHT_FD_SYNC | c.WASI_RIGHT_FD_ADVISE | c.WASI_RIGHT_FD_FILESTAT_GET | c.WASI_RIGHT_POLL_FD_READWRITE;
            t.SOCKET_DEFAULT_RIGHTS = c.WASI_RIGHT_FD_DATASYNC | c.WASI_RIGHT_FD_READ | c.WASI_RIGHT_FD_WRITE | c.WASI_RIGHT_FD_ADVISE | c.WASI_RIGHT_FD_FILESTAT_GET | c.WASI_RIGHT_POLL_FD_READWRITE | c.WASI_RIGHT_FD_FDSTAT_SET_FLAGS;
            let d = (e) => {
                let t = Math.trunc(e),
                    r = BigInt(Math.round((e - t) * 1e6));
                return BigInt(t) * BigInt(1e6) + r;
            },
                _ = (e) => ("number" == typeof e && (e = Math.trunc(e)), Number(BigInt(e) / BigInt(1e6))),
                S = (e) => (...t) => {
                    try {
                        return e(...t);
                    } catch (t) {
                        let e = t;
                        for (; null != e.prev;) e = e.prev;
                        if (e?.code && "string" == typeof e?.code) return c.ERROR_MAP[e.code] || c.WASI_EINVAL;
                        if (e instanceof l.WASIError) return e.errno;
                        throw e;
                    }
                },
                p = (e, t) => {
                    let r = e.FD_MAP.get(t);
                    if (!r) throw new l.WASIError(c.WASI_EBADF);
                    if (void 0 === r.filetype) {
                        let n = e.fstatSync(r.real),
                            { filetype: i, rightsBase: s, rightsInheriting: o } = I(e, t, n);
                        (r.filetype = i), r.rights || (r.rights = { base: s, inheriting: o });
                    }
                    return r;
                },
                I = (e, t, r) => {
                    switch (!0) {
                        case r.isBlockDevice():
                            return { filetype: c.WASI_FILETYPE_BLOCK_DEVICE, rightsBase: c.RIGHTS_BLOCK_DEVICE_BASE, rightsInheriting: c.RIGHTS_BLOCK_DEVICE_INHERITING };
                        case r.isCharacterDevice(): {
                            let r = c.WASI_FILETYPE_CHARACTER_DEVICE;
                            if (void 0 !== t && e.bindings.isTTY(t)) return { filetype: r, rightsBase: c.RIGHTS_TTY_BASE, rightsInheriting: c.RIGHTS_TTY_INHERITING };
                            return { filetype: r, rightsBase: c.RIGHTS_CHARACTER_DEVICE_BASE, rightsInheriting: c.RIGHTS_CHARACTER_DEVICE_INHERITING };
                        }
                        case r.isDirectory():
                            return { filetype: c.WASI_FILETYPE_DIRECTORY, rightsBase: c.RIGHTS_DIRECTORY_BASE, rightsInheriting: c.RIGHTS_DIRECTORY_INHERITING };
                        case r.isFIFO():
                            return { filetype: c.WASI_FILETYPE_SOCKET_STREAM, rightsBase: c.RIGHTS_SOCKET_BASE, rightsInheriting: c.RIGHTS_SOCKET_INHERITING };
                        case r.isFile():
                            return { filetype: c.WASI_FILETYPE_REGULAR_FILE, rightsBase: c.RIGHTS_REGULAR_FILE_BASE, rightsInheriting: c.RIGHTS_REGULAR_FILE_INHERITING };
                        case r.isSocket():
                            return { filetype: c.WASI_FILETYPE_SOCKET_STREAM, rightsBase: c.RIGHTS_SOCKET_BASE, rightsInheriting: c.RIGHTS_SOCKET_INHERITING };
                        case r.isSymbolicLink():
                            return { filetype: c.WASI_FILETYPE_SYMBOLIC_LINK, rightsBase: BigInt(0), rightsInheriting: BigInt(0) };
                        default:
                            return { filetype: c.WASI_FILETYPE_UNKNOWN, rightsBase: BigInt(0), rightsInheriting: BigInt(0) };
                    }
                },
                E = !1;
            class A {
                constructor(e) {
                    (this.lastStdin = 0), (this.env = {}), (this.sleep = e.sleep), (this.getStdin = e.getStdin), (this.sendStdout = e.sendStdout), (this.sendStderr = e.sendStderr);
                    let t = {};
                    e.preopens && (t = e.preopens), e && e.env && (this.env = e.env);
                    let r = [];
                    e && e.args && (r = e.args), (this.memory = void 0), (this.view = void 0), (this.bindings = e.bindings);
                    let i = this.bindings.fs;
                    this.FD_MAP = new Map([
                        [c.WASI_STDIN_FILENO, { real: 0, filetype: c.WASI_FILETYPE_CHARACTER_DEVICE, rights: { base: f, inheriting: BigInt(0) }, path: "/dev/stdin" }],
                        [c.WASI_STDOUT_FILENO, { real: 1, filetype: c.WASI_FILETYPE_CHARACTER_DEVICE, rights: { base: h, inheriting: BigInt(0) }, path: "/dev/stdout" }],
                        [c.WASI_STDERR_FILENO, { real: 2, filetype: c.WASI_FILETYPE_CHARACTER_DEVICE, rights: { base: h, inheriting: BigInt(0) }, path: "/dev/stderr" }],
                    ]);
                    let s = this.bindings.path;
                    for (let [e, r] of Object.entries(t)) {
                        let t = i.openSync(r, i.constants.O_RDONLY),
                            n = this.getUnusedFileDescriptor();
                        this.FD_MAP.set(n, { real: t, filetype: c.WASI_FILETYPE_DIRECTORY, rights: { base: c.RIGHTS_DIRECTORY_BASE, inheriting: c.RIGHTS_DIRECTORY_INHERITING }, fakePath: e, path: r });
                    }
                    let A = (e, t) => (
                        this.refreshMemory(),
                        Array.from({ length: t }, (t, r) => {
                            let n = e + 8 * r,
                                i = this.view.getUint32(n, !0),
                                s = this.view.getUint32(n + 4, !0);
                            s > this.memory.buffer.byteLength - i && (o("getiovs: warning -- truncating buffer to fit in memory"), (s = Math.min(s, Math.max(0, this.memory.buffer.byteLength - i))));
                            try {
                                let e = new Uint8Array(this.memory.buffer, i, s);
                                return (0, u.default)(e);
                            } catch (e) {
                                throw (console.warn("WASI.getiovs -- invalid buffer", e), new l.WASIError(c.WASI_EINVAL));
                            }
                        })
                    ),
                        y = (e, t) => {
                            let r = p(this, e);
                            if (t !== BigInt(0) && (r.rights.base & t) === BigInt(0)) throw new l.WASIError(c.WASI_EPERM);
                            return r;
                        },
                        g = this.bindings.hrtime(),
                        T = (e) => {
                            switch (e) {
                                case c.WASI_CLOCK_MONOTONIC:
                                    return this.bindings.hrtime();
                                case c.WASI_CLOCK_REALTIME:
                                    return d(Date.now());
                                case c.WASI_CLOCK_PROCESS_CPUTIME_ID:
                                case c.WASI_CLOCK_THREAD_CPUTIME_ID:
                                    return this.bindings.hrtime() - g;
                                default:
                                    return null;
                            }
                        };
                    (this.wasiImport = {
                        args_get: (e, t) => {
                            this.refreshMemory();
                            let i = e,
                                s = t;
                            return (
                                r.forEach((e) => {
                                    this.view.setUint32(i, s, !0), (i += 4), (s += n.from(this.memory.buffer).write(`${e}\0`, s));
                                }),
                                c.WASI_ESUCCESS
                            );
                        },
                        args_sizes_get: (e, t) => {
                            this.refreshMemory(), this.view.setUint32(e, r.length, !0);
                            let i = r.reduce((e, t) => e + n.byteLength(t) + 1, 0);
                            return this.view.setUint32(t, i, !0), c.WASI_ESUCCESS;
                        },
                        environ_get: (e, t) => {
                            this.refreshMemory();
                            let r = e,
                                i = t;
                            return (
                                Object.entries(this.env).forEach(([e, t]) => {
                                    this.view.setUint32(r, i, !0), (r += 4), (i += n.from(this.memory.buffer).write(`${e}=${t}\0`, i));
                                }),
                                c.WASI_ESUCCESS
                            );
                        },
                        environ_sizes_get: (e, t) => {
                            this.refreshMemory();
                            let r = Object.entries(this.env).map(([e, t]) => `${e}=${t}\0`),
                                i = r.reduce((e, t) => e + n.byteLength(t), 0);
                            return this.view.setUint32(e, r.length, !0), this.view.setUint32(t, i, !0), c.WASI_ESUCCESS;
                        },
                        clock_res_get: (e, t) => {
                            let r;
                            switch (e) {
                                case c.WASI_CLOCK_MONOTONIC:
                                case c.WASI_CLOCK_PROCESS_CPUTIME_ID:
                                case c.WASI_CLOCK_THREAD_CPUTIME_ID:
                                    r = BigInt(1);
                                    break;
                                case c.WASI_CLOCK_REALTIME:
                                    r = BigInt(1e3);
                            }
                            if (!r) throw Error("invalid clockId");
                            return this.view.setBigUint64(t, r), c.WASI_ESUCCESS;
                        },
                        clock_time_get: (e, t, r) => {
                            this.refreshMemory();
                            let n = T(e);
                            return null === n ? c.WASI_EINVAL : (this.view.setBigUint64(r, BigInt(n), !0), c.WASI_ESUCCESS);
                        },
                        fd_advise: S((e, t, r, n) => (y(e, c.WASI_RIGHT_FD_ADVISE), c.WASI_ENOSYS)),
                        fd_allocate: S((e, t, r) => (y(e, c.WASI_RIGHT_FD_ALLOCATE), c.WASI_ENOSYS)),
                        fd_close: S((e) => {
                            let t = y(e, BigInt(0));
                            return i.closeSync(t.real), this.FD_MAP.delete(e), c.WASI_ESUCCESS;
                        }),
                        fd_datasync: S((e) => {
                            let t = y(e, c.WASI_RIGHT_FD_DATASYNC);
                            return i.fdatasyncSync(t.real), c.WASI_ESUCCESS;
                        }),
                        fd_fdstat_get: S((e, t) => {
                            let r = y(e, BigInt(0));
                            if ((this.refreshMemory(), null == r.filetype)) throw Error("stats.filetype must be set");
                            return (
                                this.view.setUint8(t, r.filetype),
                                this.view.setUint16(t + 2, 0, !0),
                                this.view.setUint16(t + 4, 0, !0),
                                this.view.setBigUint64(t + 8, BigInt(r.rights.base), !0),
                                this.view.setBigUint64(t + 8 + 8, BigInt(r.rights.inheriting), !0),
                                c.WASI_ESUCCESS
                            );
                        }),
                        fd_fdstat_set_flags: S((e, t) => ((y(e, c.WASI_RIGHT_FD_FDSTAT_SET_FLAGS), 0 == this.wasiImport.sock_fcntlSetFlags(e, t)) ? c.WASI_ESUCCESS : c.WASI_ENOSYS)),
                        fd_fdstat_set_rights: S((e, t, r) => {
                            let n = y(e, BigInt(0));
                            return (n.rights.base | t) > n.rights.base || (n.rights.inheriting | r) > n.rights.inheriting ? c.WASI_EPERM : ((n.rights.base = t), (n.rights.inheriting = r), c.WASI_ESUCCESS);
                        }),
                        fd_filestat_get: S((e, t) => {
                            let r = y(e, c.WASI_RIGHT_FD_FILESTAT_GET),
                                n = this.fstatSync(r.real);
                            if ((this.refreshMemory(), this.view.setBigUint64(t, BigInt(n.dev), !0), (t += 8), this.view.setBigUint64(t, BigInt(n.ino), !0), (t += 8), null == r.filetype)) throw Error("stats.filetype must be set");
                            return (
                                this.view.setUint8(t, r.filetype),
                                (t += 8),
                                this.view.setBigUint64(t, BigInt(n.nlink), !0),
                                (t += 8),
                                this.view.setBigUint64(t, BigInt(n.size), !0),
                                (t += 8),
                                this.view.setBigUint64(t, d(n.atimeMs), !0),
                                (t += 8),
                                this.view.setBigUint64(t, d(n.mtimeMs), !0),
                                (t += 8),
                                this.view.setBigUint64(t, d(n.ctimeMs), !0),
                                c.WASI_ESUCCESS
                            );
                        }),
                        fd_filestat_set_size: S((e, t) => {
                            let r = y(e, c.WASI_RIGHT_FD_FILESTAT_SET_SIZE);
                            return i.ftruncateSync(r.real, Number(t)), c.WASI_ESUCCESS;
                        }),
                        fd_filestat_set_times: S((e, t, r, n) => {
                            let s = y(e, c.WASI_RIGHT_FD_FILESTAT_SET_TIMES),
                                o = this.fstatSync(s.real),
                                a = o.atime,
                                l = o.mtime,
                                u = _(T(c.WASI_CLOCK_REALTIME)),
                                f = c.WASI_FILESTAT_SET_ATIM | c.WASI_FILESTAT_SET_ATIM_NOW;
                            if ((n & f) === f) return c.WASI_EINVAL;
                            let h = c.WASI_FILESTAT_SET_MTIM | c.WASI_FILESTAT_SET_MTIM_NOW;
                            return (n & h) === h
                                ? c.WASI_EINVAL
                                : ((n & c.WASI_FILESTAT_SET_ATIM) === c.WASI_FILESTAT_SET_ATIM ? (a = _(t)) : (n & c.WASI_FILESTAT_SET_ATIM_NOW) === c.WASI_FILESTAT_SET_ATIM_NOW && (a = u),
                                    (n & c.WASI_FILESTAT_SET_MTIM) === c.WASI_FILESTAT_SET_MTIM ? (l = _(r)) : (n & c.WASI_FILESTAT_SET_MTIM_NOW) === c.WASI_FILESTAT_SET_MTIM_NOW && (l = u),
                                    i.futimesSync(s.real, new Date(a), new Date(l)),
                                    c.WASI_ESUCCESS);
                        }),
                        fd_prestat_get: S((e, t) => {
                            let r = y(e, BigInt(0));
                            return this.refreshMemory(), this.view.setUint8(t, c.WASI_PREOPENTYPE_DIR), this.view.setUint32(t + 4, n.byteLength(r.fakePath ?? r.path ?? ""), !0), c.WASI_ESUCCESS;
                        }),
                        fd_prestat_dir_name: S((e, t, r) => {
                            let i = y(e, BigInt(0));
                            return this.refreshMemory(), n.from(this.memory.buffer).write(i.fakePath ?? i.path ?? "", t, r, "utf8"), c.WASI_ESUCCESS;
                        }),
                        fd_pwrite: S((e, t, r, n, s) => {
                            let o = y(e, c.WASI_RIGHT_FD_WRITE | c.WASI_RIGHT_FD_SEEK),
                                a = 0;
                            return (
                                A(t, r).forEach((e) => {
                                    let t = 0;
                                    for (; t < e.byteLength;) t += i.writeSync(o.real, e, t, e.byteLength - t, Number(n) + a + t);
                                    a += t;
                                }),
                                this.view.setUint32(s, a, !0),
                                c.WASI_ESUCCESS
                            );
                        }),
                        fd_write: S((e, t, r, n) => {
                            let s = y(e, c.WASI_RIGHT_FD_WRITE),
                                o = e == c.WASI_STDOUT_FILENO,
                                a = e == c.WASI_STDERR_FILENO,
                                l = 0;
                            return (
                                A(t, r).forEach((e) => {
                                    if (0 != e.byteLength) {
                                        if (o && null != this.sendStdout) this.sendStdout(e), (l += e.byteLength);
                                        else if (a && null != this.sendStderr) this.sendStderr(e), (l += e.byteLength);
                                        else {
                                            let t = 0;
                                            for (; t < e.byteLength;) {
                                                let r = i.writeSync(s.real, e, t, e.byteLength - t, s.offset ? Number(s.offset) : null);
                                                s.offset && (s.offset += BigInt(r)), (t += r);
                                            }
                                            l += t;
                                        }
                                    }
                                }),
                                this.view.setUint32(n, l, !0),
                                c.WASI_ESUCCESS
                            );
                        }),
                        fd_pread: S((e, t, r, n, s) => {
                            let o = y(e, c.WASI_RIGHT_FD_READ | c.WASI_RIGHT_FD_SEEK),
                                a = 0;
                            e: for (let e of A(t, r)) {
                                let t = 0;
                                for (; t < e.byteLength;) {
                                    let r = e.byteLength - t,
                                        s = i.readSync(o.real, e, t, e.byteLength - t, Number(n) + a + t);
                                    if (((t += s), (a += s), 0 === s || s < r)) break e;
                                }
                                a += t;
                            }
                            return this.view.setUint32(s, a, !0), c.WASI_ESUCCESS;
                        }),
                        fd_read: S((e, t, r, n) => {
                            let s = y(e, c.WASI_RIGHT_FD_READ),
                                o = e == c.WASI_STDIN_FILENO,
                                a = 0;
                            e: for (let e of A(t, r)) {
                                let t = 0;
                                for (; t < e.byteLength;) {
                                    let r = e.byteLength - t,
                                        n = o || void 0 === s.offset ? null : Number(s.offset),
                                        l = 0;
                                    if (o) {
                                        if (null != this.getStdin)
                                            null == this.stdinBuffer && (this.stdinBuffer = this.getStdin()),
                                                null != this.stdinBuffer &&
                                                ((l = this.stdinBuffer.copy(e)) == this.stdinBuffer.length ? (this.stdinBuffer = void 0) : (this.stdinBuffer = this.stdinBuffer.slice(l)),
                                                    l > 0 && (this.lastStdin = new Date().valueOf()));
                                        else {
                                            null != this.sleep || E || ((E = !0), console.log("(cpu waiting for stdin: please define a way to sleep!) "));
                                            try {
                                                l = i.readSync(s.real, e, t, r, n);
                                            } catch (e) { }
                                            0 == l ? this.shortPause() : (this.lastStdin = new Date().valueOf());
                                        }
                                    } else l = i.readSync(s.real, e, t, r, n);
                                    if ((s.filetype == c.WASI_FILETYPE_REGULAR_FILE && (s.offset = (s.offset ? s.offset : BigInt(0)) + BigInt(l)), (t += l), (a += l), 0 === l || l < r)) break e;
                                }
                            }
                            return this.view.setUint32(n, a, !0), c.WASI_ESUCCESS;
                        }),
                        fd_readdir: S((e, t, r, o, a) => {
                            let l = y(e, c.WASI_RIGHT_FD_READDIR);
                            this.refreshMemory();
                            let u = i.readdirSync(l.path, { withFileTypes: !0 }),
                                f = t;
                            for (let e = Number(o); e < u.length; e += 1) {
                                let o;
                                let a = u[e],
                                    h = n.byteLength(a.name);
                                if (t - f > r || (this.view.setBigUint64(t, BigInt(e + 1), !0), (t += 8) - f > r)) break;
                                let d = i.lstatSync(s.resolve(l.path, a.name));
                                if ((this.view.setBigUint64(t, BigInt(d.ino), !0), (t += 8) - f > r || (this.view.setUint32(t, h, !0), (t += 4) - f > r))) break;
                                switch (!0) {
                                    case d.isBlockDevice():
                                        o = c.WASI_FILETYPE_BLOCK_DEVICE;
                                        break;
                                    case d.isCharacterDevice():
                                        o = c.WASI_FILETYPE_CHARACTER_DEVICE;
                                        break;
                                    case d.isDirectory():
                                        o = c.WASI_FILETYPE_DIRECTORY;
                                        break;
                                    case d.isFIFO():
                                        o = c.WASI_FILETYPE_SOCKET_STREAM;
                                        break;
                                    case d.isFile():
                                        o = c.WASI_FILETYPE_REGULAR_FILE;
                                        break;
                                    case d.isSocket():
                                        o = c.WASI_FILETYPE_SOCKET_STREAM;
                                        break;
                                    case d.isSymbolicLink():
                                        o = c.WASI_FILETYPE_SYMBOLIC_LINK;
                                        break;
                                    default:
                                        o = c.WASI_FILETYPE_UNKNOWN;
                                }
                                if ((this.view.setUint8(t, o), (t += 4) + h >= f + r)) break;
                                n.from(this.memory.buffer).write(a.name, t), (t += h);
                            }
                            let h = t - f;
                            return this.view.setUint32(a, Math.min(h, r), !0), c.WASI_ESUCCESS;
                        }),
                        fd_renumber: S((e, t) => (y(e, BigInt(0)), y(t, BigInt(0)), i.closeSync(this.FD_MAP.get(e).real), this.FD_MAP.set(e, this.FD_MAP.get(t)), this.FD_MAP.delete(t), c.WASI_ESUCCESS)),
                        fd_seek: S((e, t, r, n) => {
                            let i = y(e, c.WASI_RIGHT_FD_SEEK);
                            switch ((this.refreshMemory(), r)) {
                                case c.WASI_WHENCE_CUR:
                                    i.offset = (i.offset ? i.offset : BigInt(0)) + BigInt(t);
                                    break;
                                case c.WASI_WHENCE_END:
                                    let { size: s } = this.fstatSync(i.real);
                                    i.offset = BigInt(s) + BigInt(t);
                                    break;
                                case c.WASI_WHENCE_SET:
                                    i.offset = BigInt(t);
                            }
                            if (null == i.offset) throw Error("stats.offset must be defined");
                            return this.view.setBigUint64(n, i.offset, !0), c.WASI_ESUCCESS;
                        }),
                        fd_tell: S((e, t) => {
                            let r = y(e, c.WASI_RIGHT_FD_TELL);
                            return this.refreshMemory(), r.offset || (r.offset = BigInt(0)), this.view.setBigUint64(t, r.offset, !0), c.WASI_ESUCCESS;
                        }),
                        fd_sync: S((e) => {
                            let t = y(e, c.WASI_RIGHT_FD_SYNC);
                            return i.fsyncSync(t.real), c.WASI_ESUCCESS;
                        }),
                        path_create_directory: S((e, t, r) => {
                            let o = y(e, c.WASI_RIGHT_PATH_CREATE_DIRECTORY);
                            if (!o.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let a = n.from(this.memory.buffer, t, r).toString();
                            return i.mkdirSync(s.resolve(o.path, a)), c.WASI_ESUCCESS;
                        }),
                        path_filestat_get: S((e, t, r, o, a) => {
                            let l;
                            let u = y(e, c.WASI_RIGHT_PATH_FILESTAT_GET);
                            if (!u.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let f = n.from(this.memory.buffer, r, o).toString();
                            return (
                                (l = t ? i.statSync(s.resolve(u.path, f)) : i.lstatSync(s.resolve(u.path, f))),
                                this.view.setBigUint64(a, BigInt(l.dev), !0),
                                (a += 8),
                                this.view.setBigUint64(a, BigInt(l.ino), !0),
                                (a += 8),
                                this.view.setUint8(a, I(this, void 0, l).filetype),
                                (a += 8),
                                this.view.setBigUint64(a, BigInt(l.nlink), !0),
                                (a += 8),
                                this.view.setBigUint64(a, BigInt(l.size), !0),
                                (a += 8),
                                this.view.setBigUint64(a, d(l.atimeMs), !0),
                                (a += 8),
                                this.view.setBigUint64(a, d(l.mtimeMs), !0),
                                (a += 8),
                                this.view.setBigUint64(a, d(l.ctimeMs), !0),
                                c.WASI_ESUCCESS
                            );
                        }),
                        path_filestat_set_times: S((e, t, r, o, a, l, u) => {
                            let f = y(e, c.WASI_RIGHT_PATH_FILESTAT_SET_TIMES);
                            if (!f.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let h = this.fstatSync(f.real),
                                d = h.atime,
                                S = h.mtime,
                                p = _(T(c.WASI_CLOCK_REALTIME)),
                                I = c.WASI_FILESTAT_SET_ATIM | c.WASI_FILESTAT_SET_ATIM_NOW;
                            if ((u & I) === I) return c.WASI_EINVAL;
                            let E = c.WASI_FILESTAT_SET_MTIM | c.WASI_FILESTAT_SET_MTIM_NOW;
                            if ((u & E) === E) return c.WASI_EINVAL;
                            (u & c.WASI_FILESTAT_SET_ATIM) === c.WASI_FILESTAT_SET_ATIM ? (d = _(a)) : (u & c.WASI_FILESTAT_SET_ATIM_NOW) === c.WASI_FILESTAT_SET_ATIM_NOW && (d = p),
                                (u & c.WASI_FILESTAT_SET_MTIM) === c.WASI_FILESTAT_SET_MTIM ? (S = _(l)) : (u & c.WASI_FILESTAT_SET_MTIM_NOW) === c.WASI_FILESTAT_SET_MTIM_NOW && (S = p);
                            let A = n.from(this.memory.buffer, r, o).toString();
                            return i.utimesSync(s.resolve(f.path, A), new Date(d), new Date(S)), c.WASI_ESUCCESS;
                        }),
                        path_link: S((e, t, r, o, a, l, u) => {
                            let f = y(e, c.WASI_RIGHT_PATH_LINK_SOURCE),
                                h = y(a, c.WASI_RIGHT_PATH_LINK_TARGET);
                            if (!f.path || !h.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let d = n.from(this.memory.buffer, r, o).toString(),
                                _ = n.from(this.memory.buffer, l, u).toString();
                            return i.linkSync(s.resolve(f.path, d), s.resolve(h.path, _)), c.WASI_ESUCCESS;
                        }),
                        path_open: S((e, t, r, o, u, f, h, d, _) => {
                            let S, I, E, A;
                            let g = y(e, c.WASI_RIGHT_PATH_OPEN);
                            (f = BigInt(f)), (h = BigInt(h));
                            let T = (f & (c.WASI_RIGHT_FD_READ | c.WASI_RIGHT_FD_READDIR)) !== BigInt(0),
                                m = (f & (c.WASI_RIGHT_FD_DATASYNC | c.WASI_RIGHT_FD_WRITE | c.WASI_RIGHT_FD_ALLOCATE | c.WASI_RIGHT_FD_FILESTAT_SET_SIZE)) !== BigInt(0);
                            m && T ? (S = i.constants.O_RDWR) : T ? (S = i.constants.O_RDONLY) : m && (S = i.constants.O_WRONLY);
                            let v = f | c.WASI_RIGHT_PATH_OPEN,
                                R = f | h;
                            (u & c.WASI_O_CREAT) != 0 && ((S |= i.constants.O_CREAT), (v |= c.WASI_RIGHT_PATH_CREATE_FILE)),
                                (u & c.WASI_O_DIRECTORY) != 0 && (S |= i.constants.O_DIRECTORY),
                                (u & c.WASI_O_EXCL) != 0 && (S |= i.constants.O_EXCL),
                                (u & c.WASI_O_TRUNC) != 0 && ((S |= i.constants.O_TRUNC), (v |= c.WASI_RIGHT_PATH_FILESTAT_SET_SIZE)),
                                (d & c.WASI_FDFLAG_APPEND) != 0 && (S |= i.constants.O_APPEND),
                                (d & c.WASI_FDFLAG_DSYNC) != 0 && (i.constants.O_DSYNC ? (S |= i.constants.O_DSYNC) : (S |= i.constants.O_SYNC), (R |= c.WASI_RIGHT_FD_DATASYNC)),
                                (d & c.WASI_FDFLAG_NONBLOCK) != 0 && (S |= i.constants.O_NONBLOCK),
                                (d & c.WASI_FDFLAG_RSYNC) != 0 && (i.constants.O_RSYNC ? (S |= i.constants.O_RSYNC) : (S |= i.constants.O_SYNC), (R |= c.WASI_RIGHT_FD_SYNC)),
                                (d & c.WASI_FDFLAG_SYNC) != 0 && ((S |= i.constants.O_SYNC), (R |= c.WASI_RIGHT_FD_SYNC)),
                                m && (S & (i.constants.O_APPEND | i.constants.O_TRUNC)) == 0 && (R |= c.WASI_RIGHT_FD_SEEK),
                                this.refreshMemory();
                            let b = n.from(this.memory.buffer, r, o).toString();
                            if ("dev/tty" == b) return this.view.setUint32(_, c.WASI_STDIN_FILENO, !0), c.WASI_ESUCCESS;
                            if ((a("path_open", b), b.startsWith("proc/"))) throw new l.WASIError(c.WASI_EBADF);
                            let w = s.resolve(g.path, b);
                            try {
                                I = i.realpathSync(w);
                            } catch (e) {
                                if (e?.code === "ENOENT") I = w;
                                else throw e;
                            }
                            if (m)
                                try {
                                    E = i.statSync(I).isDirectory();
                                } catch (e) { }
                            A = !m && E ? i.openSync(I, i.constants.O_RDONLY) : i.openSync(I, S);
                            let O = this.getUnusedFileDescriptor();
                            return this.FD_MAP.set(O, { real: A, filetype: void 0, rights: { base: v, inheriting: R }, path: I }), p(this, O), this.view.setUint32(_, O, !0), c.WASI_ESUCCESS;
                        }),
                        path_readlink: S((e, t, r, o, a, l) => {
                            let u = y(e, c.WASI_RIGHT_PATH_READLINK);
                            if (!u.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let f = n.from(this.memory.buffer, t, r).toString(),
                                h = s.resolve(u.path, f),
                                d = i.readlinkSync(h),
                                _ = n.from(this.memory.buffer).write(d, o, a);
                            return this.view.setUint32(l, _, !0), c.WASI_ESUCCESS;
                        }),
                        path_remove_directory: S((e, t, r) => {
                            let o = y(e, c.WASI_RIGHT_PATH_REMOVE_DIRECTORY);
                            if (!o.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let a = n.from(this.memory.buffer, t, r).toString();
                            return i.rmdirSync(s.resolve(o.path, a)), c.WASI_ESUCCESS;
                        }),
                        path_rename: S((e, t, r, o, a, l) => {
                            let u = y(e, c.WASI_RIGHT_PATH_RENAME_SOURCE),
                                f = y(o, c.WASI_RIGHT_PATH_RENAME_TARGET);
                            if (!u.path || !f.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let h = n.from(this.memory.buffer, t, r).toString(),
                                d = n.from(this.memory.buffer, a, l).toString();
                            return i.renameSync(s.resolve(u.path, h), s.resolve(f.path, d)), c.WASI_ESUCCESS;
                        }),
                        path_symlink: S((e, t, r, o, a) => {
                            let l = y(r, c.WASI_RIGHT_PATH_SYMLINK);
                            if (!l.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let u = n.from(this.memory.buffer, e, t).toString(),
                                f = n.from(this.memory.buffer, o, a).toString();
                            return i.symlinkSync(u, s.resolve(l.path, f)), c.WASI_ESUCCESS;
                        }),
                        path_unlink_file: S((e, t, r) => {
                            let o = y(e, c.WASI_RIGHT_PATH_UNLINK_FILE);
                            if (!o.path) return c.WASI_EINVAL;
                            this.refreshMemory();
                            let a = n.from(this.memory.buffer, t, r).toString();
                            return i.unlinkSync(s.resolve(o.path, a)), c.WASI_ESUCCESS;
                        }),
                        poll_oneoff: (e, t, r, n) => {
                            let i = 0,
                                s = "",
                                a = BigInt(0),
                                l = -1,
                                u = "read",
                                f = 0,
                                h = BigInt(this.bindings.hrtime());
                            this.refreshMemory();
                            let d = e;
                            for (let n = 0; n < r; n += 1) {
                                let r = this.view.getBigUint64(e, !0);
                                e += 8;
                                let h = this.view.getUint8(e);
                                switch (
                                ((e += 8),
                                    o.enabled &&
                                    o(
                                        (s =
                                            h == c.WASI_EVENTTYPE_CLOCK
                                                ? "poll_oneoff (type=WASI_EVENTTYPE_CLOCK): "
                                                : h == c.WASI_EVENTTYPE_FD_READ
                                                    ? "poll_oneoff (type=WASI_EVENTTYPE_FD_READ): "
                                                    : "poll_oneoff (type=WASI_EVENTTYPE_FD_WRITE): ")
                                    ),
                                    h)
                                ) {
                                    case c.WASI_EVENTTYPE_CLOCK: {
                                        let n = this.view.getUint32(e, !0);
                                        e += 8;
                                        let l = this.view.getBigUint64(e, !0);
                                        e += 16;
                                        let u = this.view.getUint16(e, !0);
                                        e += 8;
                                        let h = 1 === u;
                                        o.enabled && o(s, { clockid: n, timeout: l, absolute: h }), h || (f = Number(l / BigInt(1e6)));
                                        let d = c.WASI_ESUCCESS,
                                            _ = T(n);
                                        if (null == _) d = c.WASI_EINVAL;
                                        else {
                                            let e = (h ? l : _ + l) - _;
                                            e > a && (a = e);
                                        }
                                        this.view.setBigUint64(t, r, !0), (t += 8), this.view.setUint16(t, d, !0), (t += 2), this.view.setUint8(t, c.WASI_EVENTTYPE_CLOCK), (t += 6), (i += 1);
                                        break;
                                    }
                                    case c.WASI_EVENTTYPE_FD_READ:
                                    case c.WASI_EVENTTYPE_FD_WRITE:
                                        (l = this.view.getUint32(e, !0)),
                                            (u = h == c.WASI_EVENTTYPE_FD_READ ? "read" : "write"),
                                            (e += 4),
                                            o(s, "fd =", l),
                                            (e += 28),
                                            this.view.setBigUint64(t, r, !0),
                                            (t += 8),
                                            this.view.setUint16(t, c.WASI_ENOSYS, !0),
                                            (t += 2),
                                            this.view.setUint8(t, h),
                                            (t += 6),
                                            (i += 1),
                                            l == c.WASI_STDIN_FILENO && c.WASI_EVENTTYPE_FD_READ == h && this.shortPause();
                                        break;
                                    default:
                                        return c.WASI_EINVAL;
                                }
                                e - d != 48 && console.warn("*** BUG in wasi-js in poll_oneoff ", { i: n, sin: e, last_sin: d, diff: e - d }), (d = e);
                            }
                            if ((this.view.setUint32(n, i, !0), 2 == i && l >= 0)) {
                                let e = this.wasiImport.sock_pollSocket(l, u, f);
                                if (e != c.WASI_ENOSYS) return e;
                            }
                            if (a > 0 && (a -= BigInt(this.bindings.hrtime()) - h) >= 1e6) {
                                if ((null != this.sleep || E || ((E = !0), console.log("(100% cpu burning waiting for stdin: please define a way to sleep!) ")), null != this.sleep)) {
                                    let e = _(a);
                                    this.sleep(e);
                                } else {
                                    let e = BigInt(this.bindings.hrtime()) + a;
                                    for (; BigInt(this.bindings.hrtime()) < e;);
                                }
                            }
                            return c.WASI_ESUCCESS;
                        },
                        proc_exit: (e) => (this.bindings.exit(e), c.WASI_ESUCCESS),
                        proc_raise: (e) => (e in c.SIGNAL_MAP ? (this.bindings.kill(c.SIGNAL_MAP[e]), c.WASI_ESUCCESS) : c.WASI_EINVAL),
                        random_get: (e, t) => (this.refreshMemory(), this.bindings.randomFillSync(new Uint8Array(this.memory.buffer), e, t), c.WASI_ESUCCESS),
                        sched_yield: () => c.WASI_ESUCCESS,
                        sock_recv: () => c.WASI_ENOSYS,
                        sock_send: () => c.WASI_ENOSYS,
                        sock_shutdown: () => c.WASI_ENOSYS,
                        sock_fcntlSetFlags: (e, t) => c.WASI_ENOSYS,
                        sock_pollSocket: (e, t, r) => c.WASI_ENOSYS,
                    }),
                        o.enabled &&
                        Object.keys(this.wasiImport).forEach((e) => {
                            let t = this.wasiImport[e];
                            this.wasiImport[e] = function (...r) {
                                o(e, r);
                                try {
                                    let e = t(...r);
                                    return o("result", e), e;
                                } catch (e) {
                                    throw (o("error: ", e), e);
                                }
                            };
                        });
                }
                getState() {
                    return { env: this.env, FD_MAP: this.FD_MAP, bindings: this.bindings };
                }
                setState(e) {
                    (this.env = e.env), (this.FD_MAP = e.FD_MAP), (this.bindings = e.bindings);
                }
                fstatSync(e) {
                    if (e <= 2)
                        try {
                            return this.bindings.fs.fstatSync(e);
                        } catch (t) {
                            let e = new Date();
                            return {
                                dev: 0,
                                mode: 8592,
                                nlink: 1,
                                uid: 0,
                                gid: 0,
                                rdev: 0,
                                blksize: 65536,
                                ino: 0,
                                size: 0,
                                blocks: 0,
                                atimeMs: e.valueOf(),
                                mtimeMs: e.valueOf(),
                                ctimeMs: e.valueOf(),
                                birthtimeMs: 0,
                                atime: new Date(),
                                mtime: new Date(),
                                ctime: new Date(),
                                birthtime: new Date(0),
                            };
                        }
                    return this.bindings.fs.fstatSync(e);
                }
                shortPause() {
                    null != this.sleep && new Date().valueOf() - this.lastStdin > 2e3 && this.sleep(50);
                }
                getUnusedFileDescriptor(e = 3) {
                    let t = e;
                    for (; this.FD_MAP.has(t);) t += 1;
                    if (t > 32768) throw Error("no available file descriptors");
                    return t;
                }
                refreshMemory() {
                    (this.view && 0 !== this.view.buffer.byteLength) || (this.view = new DataView(this.memory.buffer));
                }
                setMemory(e) {
                    this.memory = e;
                }
                start(e, t) {
                    let r = e.exports;
                    if (null === r || "object" != typeof r) throw Error(`instance.exports must be an Object. Received ${r}.`);
                    if (null == t && !((t = r.memory) instanceof WebAssembly.Memory)) throw Error(`instance.exports.memory must be a WebAssembly.Memory. Recceived ${t}.`);
                    this.setMemory(t), r._start && r._start();
                }
                getImportNamespace(e) {
                    let t = null;
                    for (let r of WebAssembly.Module.imports(e))
                        if ("function" === r.kind && r.module.startsWith("wasi_")) {
                            if (t) {
                                if (t !== r.module) throw Error("Multiple namespaces detected.");
                            } else t = r.module;
                        }
                    return t;
                }
                getImports(e) {
                    switch (this.getImportNamespace(e)) {
                        case "wasi_unstable":
                            return { wasi_unstable: this.wasiImport };
                        case "wasi_snapshot_preview1":
                            return { wasi_snapshot_preview1: this.wasiImport };
                        default:
                            throw Error("Can't detect a WASI namespace for the WebAssembly Module");
                    }
                }
                initWasiFdInfo() {
                    if (null != this.env.WASI_FD_INFO) {
                        let e = JSON.parse(this.env.WASI_FD_INFO);
                        for (let t in e) {
                            console.log(t);
                            let r = parseInt(t);
                            if (this.FD_MAP.has(r)) continue;
                            let n = e[t];
                            try {
                                this.fstatSync(n);
                            } catch (e) {
                                console.log("discarding ", { wasi_fd: t, real: n });
                                continue;
                            }
                            let i = { real: n, filetype: c.WASI_FILETYPE_SOCKET_STREAM, rights: { base: f, inheriting: BigInt(0) } };
                            this.FD_MAP.set(r, i);
                        }
                        console.log("after initWasiFdInfo: ", this.FD_MAP), console.log("fdInfo = ", e);
                    } else console.log("no WASI_FD_INFO");
                }
            }
            t.default = A;
        },
        63959: function (e, t, r) {
            "use strict";
            var n = r(93989),
                i = Uint8Array,
                s = Uint16Array,
                o = Uint32Array,
                a = new i([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                l = new i([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                u = new i([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                c = function (e, t) {
                    for (var r = new s(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
                    for (var i = new o(r[30]), n = 1; n < 30; ++n) for (var a = r[n]; a < r[n + 1]; ++a) i[a] = ((a - r[n]) << 5) | n;
                    return [r, i];
                },
                f = c(a, 2),
                h = f[0],
                d = f[1];
            (h[28] = 258), (d[258] = 28);
            for (var _ = c(l, 0), S = _[0], p = _[1], I = new s(32768), E = 0; E < 32768; ++E) {
                var A = ((43690 & E) >>> 1) | ((21845 & E) << 1);
                (A = ((61680 & (A = ((52428 & A) >>> 2) | ((13107 & A) << 2))) >>> 4) | ((3855 & A) << 4)), (I[E] = (((65280 & A) >>> 8) | ((255 & A) << 8)) >>> 1);
            }
            for (
                var y = function (e, t, r) {
                    for (var n, i = e.length, o = 0, a = new s(t); o < i; ++o) e[o] && ++a[e[o] - 1];
                    var l = new s(t);
                    for (o = 0; o < t; ++o) l[o] = (l[o - 1] + a[o - 1]) << 1;
                    if (r) {
                        n = new s(1 << t);
                        var u = 15 - t;
                        for (o = 0; o < i; ++o) if (e[o]) for (var c = (o << 4) | e[o], f = t - e[o], h = l[e[o] - 1]++ << f, d = h | ((1 << f) - 1); h <= d; ++h) n[I[h] >>> u] = c;
                    } else for (o = 0, n = new s(i); o < i; ++o) e[o] && (n[o] = I[l[e[o] - 1]++] >>> (15 - e[o]));
                    return n;
                },
                g = new i(288),
                E = 0;
                E < 144;
                ++E
            )
                g[E] = 8;
            for (var E = 144; E < 256; ++E) g[E] = 9;
            for (var E = 256; E < 280; ++E) g[E] = 7;
            for (var E = 280; E < 288; ++E) g[E] = 8;
            for (var T = new i(32), E = 0; E < 32; ++E) T[E] = 5;
            var m = y(g, 9, 0),
                v = y(g, 9, 1),
                R = y(T, 5, 0),
                b = y(T, 5, 1),
                w = function (e) {
                    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
                    return t;
                },
                O = function (e, t, r) {
                    var n = (t / 8) | 0;
                    return ((e[n] | (e[n + 1] << 8)) >> (7 & t)) & r;
                },
                W = function (e, t) {
                    var r = (t / 8) | 0;
                    return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
                },
                C = function (e) {
                    return ((e + 7) / 8) | 0;
                },
                N = function (e, t, r) {
                    (null == t || t < 0) && (t = 0), (null == r || r > e.length) && (r = e.length);
                    var n = new (2 == e.BYTES_PER_ELEMENT ? s : 4 == e.BYTES_PER_ELEMENT ? o : i)(r - t);
                    return n.set(e.subarray(t, r)), n;
                };
            t.FlateErrorCode = {
                UnexpectedEOF: 0,
                InvalidBlockType: 1,
                InvalidLengthLiteral: 2,
                InvalidDistance: 3,
                StreamFinished: 4,
                NoStreamHandler: 5,
                InvalidHeader: 6,
                NoCallback: 7,
                InvalidUTF8: 8,
                ExtraFieldTooLong: 9,
                InvalidDate: 10,
                FilenameTooLong: 11,
                StreamFinishing: 12,
                InvalidZipData: 13,
                UnknownCompressionMethod: 14,
            };
            var L = [
                "unexpected EOF",
                "invalid block type",
                "invalid length/literal",
                "invalid distance",
                "stream finished",
                "no stream handler",
                ,
                "no callback",
                "invalid UTF-8 data",
                "extra field too long",
                "date not in range 1980-2099",
                "filename too long",
                "stream finishing",
                "invalid zip data",
            ],
                F = function (e, t, r) {
                    var n = Error(t || L[e]);
                    if (((n.code = e), Error.captureStackTrace && Error.captureStackTrace(n, F), !r)) throw n;
                    return n;
                },
                D = function (e, t, r) {
                    var n = e.length;
                    if (!n || (r && r.f && !r.l)) return t || new i(0);
                    var s = !t || r,
                        o = !r || r.i;
                    r || (r = {}), t || (t = new i(3 * n));
                    var c = function (e) {
                        var r = t.length;
                        if (e > r) {
                            var n = new i(Math.max(2 * r, e));
                            n.set(t), (t = n);
                        }
                    },
                        f = r.f || 0,
                        d = r.p || 0,
                        _ = r.b || 0,
                        p = r.l,
                        I = r.d,
                        E = r.m,
                        A = r.n,
                        g = 8 * n;
                    do {
                        if (!p) {
                            f = O(e, d, 1);
                            var T = O(e, d + 1, 3);
                            if (((d += 3), T)) {
                                if (1 == T) (p = v), (I = b), (E = 9), (A = 5);
                                else if (2 == T) {
                                    var m = O(e, d, 31) + 257,
                                        R = O(e, d + 10, 15) + 4,
                                        L = m + O(e, d + 5, 31) + 1;
                                    d += 14;
                                    for (var D = new i(L), P = new i(19), G = 0; G < R; ++G) P[u[G]] = O(e, d + 3 * G, 7);
                                    d += 3 * R;
                                    for (var M = w(P), k = (1 << M) - 1, B = y(P, M, 1), G = 0; G < L;) {
                                        var H = B[O(e, d, k)];
                                        d += 15 & H;
                                        var U = H >>> 4;
                                        if (U < 16) D[G++] = U;
                                        else {
                                            var x = 0,
                                                j = 0;
                                            for (16 == U ? ((j = 3 + O(e, d, 3)), (d += 2), (x = D[G - 1])) : 17 == U ? ((j = 3 + O(e, d, 7)), (d += 3)) : 18 == U && ((j = 11 + O(e, d, 127)), (d += 7)); j--;) D[G++] = x;
                                        }
                                    }
                                    var Y = D.subarray(0, m),
                                        V = D.subarray(m);
                                    (E = w(Y)), (A = w(V)), (p = y(Y, E, 1)), (I = y(V, A, 1));
                                } else F(1);
                            } else {
                                var U = C(d) + 4,
                                    K = e[U - 4] | (e[U - 3] << 8),
                                    $ = U + K;
                                if ($ > n) {
                                    o && F(0);
                                    break;
                                }
                                s && c(_ + K), t.set(e.subarray(U, $), _), (r.b = _ += K), (r.p = d = 8 * $), (r.f = f);
                                continue;
                            }
                            if (d > g) {
                                o && F(0);
                                break;
                            }
                        }
                        s && c(_ + 131072);
                        for (var z = (1 << E) - 1, q = (1 << A) - 1, X = d; ; X = d) {
                            var x = p[W(e, d) & z],
                                Z = x >>> 4;
                            if ((d += 15 & x) > g) {
                                o && F(0);
                                break;
                            }
                            if ((x || F(2), Z < 256)) t[_++] = Z;
                            else if (256 == Z) {
                                (X = d), (p = null);
                                break;
                            } else {
                                var J = Z - 254;
                                if (Z > 264) {
                                    var G = Z - 257,
                                        Q = a[G];
                                    (J = O(e, d, (1 << Q) - 1) + h[G]), (d += Q);
                                }
                                var ee = I[W(e, d) & q],
                                    et = ee >>> 4;
                                ee || F(3), (d += 15 & ee);
                                var V = S[et];
                                if (et > 3) {
                                    var Q = l[et];
                                    (V += W(e, d) & ((1 << Q) - 1)), (d += Q);
                                }
                                if (d > g) {
                                    o && F(0);
                                    break;
                                }
                                s && c(_ + 131072);
                                for (var er = _ + J; _ < er; _ += 4) (t[_] = t[_ - V]), (t[_ + 1] = t[_ + 1 - V]), (t[_ + 2] = t[_ + 2 - V]), (t[_ + 3] = t[_ + 3 - V]);
                                _ = er;
                            }
                        }
                        (r.l = p), (r.p = X), (r.b = _), (r.f = f), p && ((f = 1), (r.m = E), (r.d = I), (r.n = A));
                    } while (!f);
                    return _ == t.length ? t : N(t, 0, _);
                },
                P = function (e, t, r) {
                    r <<= 7 & t;
                    var n = (t / 8) | 0;
                    (e[n] |= r), (e[n + 1] |= r >>> 8);
                },
                G = function (e, t, r) {
                    r <<= 7 & t;
                    var n = (t / 8) | 0;
                    (e[n] |= r), (e[n + 1] |= r >>> 8), (e[n + 2] |= r >>> 16);
                },
                M = function (e, t) {
                    for (var r = [], n = 0; n < e.length; ++n) e[n] && r.push({ s: n, f: e[n] });
                    var o = r.length,
                        a = r.slice();
                    if (!o) return [Y, 0];
                    if (1 == o) {
                        var l = new i(r[0].s + 1);
                        return (l[r[0].s] = 1), [l, 1];
                    }
                    r.sort(function (e, t) {
                        return e.f - t.f;
                    }),
                        r.push({ s: -1, f: 25001 });
                    var u = r[0],
                        c = r[1],
                        f = 0,
                        h = 1,
                        d = 2;
                    for (r[0] = { s: -1, f: u.f + c.f, l: u, r: c }; h != o - 1;) (u = r[r[f].f < r[d].f ? f++ : d++]), (c = r[f != h && r[f].f < r[d].f ? f++ : d++]), (r[h++] = { s: -1, f: u.f + c.f, l: u, r: c });
                    for (var _ = a[0].s, n = 1; n < o; ++n) a[n].s > _ && (_ = a[n].s);
                    var S = new s(_ + 1),
                        p = k(r[h - 1], S, 0);
                    if (p > t) {
                        var n = 0,
                            I = 0,
                            E = p - t,
                            A = 1 << E;
                        for (
                            a.sort(function (e, t) {
                                return S[t.s] - S[e.s] || e.f - t.f;
                            });
                            n < o;
                            ++n
                        ) {
                            var y = a[n].s;
                            if (S[y] > t) (I += A - (1 << (p - S[y]))), (S[y] = t);
                            else break;
                        }
                        for (I >>>= E; I > 0;) {
                            var g = a[n].s;
                            S[g] < t ? (I -= 1 << (t - S[g]++ - 1)) : ++n;
                        }
                        for (; n >= 0 && I; --n) {
                            var T = a[n].s;
                            S[T] == t && (--S[T], ++I);
                        }
                        p = t;
                    }
                    return [new i(S), p];
                },
                k = function (e, t, r) {
                    return -1 == e.s ? Math.max(k(e.l, t, r + 1), k(e.r, t, r + 1)) : (t[e.s] = r);
                },
                B = function (e) {
                    for (var t = e.length; t && !e[--t];);
                    for (
                        var r = new s(++t),
                        n = 0,
                        i = e[0],
                        o = 1,
                        a = function (e) {
                            r[n++] = e;
                        },
                        l = 1;
                        l <= t;
                        ++l
                    )
                        if (e[l] == i && l != t) ++o;
                        else {
                            if (!i && o > 2) {
                                for (; o > 138; o -= 138) a(32754);
                                o > 2 && (a(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0));
                            } else if (o > 3) {
                                for (a(i), --o; o > 6; o -= 6) a(8304);
                                o > 2 && (a(((o - 3) << 5) | 8208), (o = 0));
                            }
                            for (; o--;) a(i);
                            (o = 1), (i = e[l]);
                        }
                    return [r.subarray(0, n), t];
                },
                H = function (e, t) {
                    for (var r = 0, n = 0; n < t.length; ++n) r += e[n] * t[n];
                    return r;
                },
                U = function (e, t, r) {
                    var n = r.length,
                        i = C(t + 2);
                    (e[i] = 255 & n), (e[i + 1] = n >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1]);
                    for (var s = 0; s < n; ++s) e[i + s + 4] = r[s];
                    return (i + 4 + n) * 8;
                },
                x = function (e, t, r, n, i, o, c, f, h, d, _) {
                    P(t, _++, r), ++i[256];
                    for (var S, p, I, E, A = M(i, 15), v = A[0], b = A[1], w = M(o, 15), O = w[0], W = w[1], C = B(v), N = C[0], L = C[1], F = B(O), D = F[0], k = F[1], x = new s(19), j = 0; j < N.length; ++j) x[31 & N[j]]++;
                    for (var j = 0; j < D.length; ++j) x[31 & D[j]]++;
                    for (var Y = M(x, 7), V = Y[0], K = Y[1], $ = 19; $ > 4 && !V[u[$ - 1]]; --$);
                    var z = (d + 5) << 3,
                        q = H(i, g) + H(o, T) + c,
                        X = H(i, v) + H(o, O) + c + 14 + 3 * $ + H(x, V) + (2 * x[16] + 3 * x[17] + 7 * x[18]);
                    if (z <= q && z <= X) return U(t, _, e.subarray(h, h + d));
                    if ((P(t, _, 1 + (X < q)), (_ += 2), X < q)) {
                        (S = y(v, b, 0)), (p = v), (I = y(O, W, 0)), (E = O);
                        var Z = y(V, K, 0);
                        P(t, _, L - 257), P(t, _ + 5, k - 1), P(t, _ + 10, $ - 4), (_ += 14);
                        for (var j = 0; j < $; ++j) P(t, _ + 3 * j, V[u[j]]);
                        _ += 3 * $;
                        for (var J = [N, D], Q = 0; Q < 2; ++Q)
                            for (var ee = J[Q], j = 0; j < ee.length; ++j) {
                                var et = 31 & ee[j];
                                P(t, _, Z[et]), (_ += V[et]), et > 15 && (P(t, _, (ee[j] >>> 5) & 127), (_ += ee[j] >>> 12));
                            }
                    } else (S = m), (p = g), (I = R), (E = T);
                    for (var j = 0; j < f; ++j)
                        if (n[j] > 255) {
                            var et = (n[j] >>> 18) & 31;
                            G(t, _, S[et + 257]), (_ += p[et + 257]), et > 7 && (P(t, _, (n[j] >>> 23) & 31), (_ += a[et]));
                            var er = 31 & n[j];
                            G(t, _, I[er]), (_ += E[er]), er > 3 && (G(t, _, (n[j] >>> 5) & 8191), (_ += l[er]));
                        } else G(t, _, S[n[j]]), (_ += p[n[j]]);
                    return G(t, _, S[256]), _ + p[256];
                },
                j = new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                Y = new i(0),
                V = function (e, t, r, n, u, c) {
                    var f = e.length,
                        h = new i(n + f + 5 * (1 + Math.ceil(f / 7e3)) + u),
                        _ = h.subarray(n, h.length - u),
                        S = 0;
                    if (!t || f < 8)
                        for (var I = 0; I <= f; I += 65535) {
                            var E = I + 65535;
                            E >= f && (_[S >> 3] = c), (S = U(_, S + 1, e.subarray(I, E)));
                        }
                    else {
                        for (
                            var A = j[t - 1],
                            y = A >>> 13,
                            g = 8191 & A,
                            T = (1 << r) - 1,
                            m = new s(32768),
                            v = new s(T + 1),
                            R = Math.ceil(r / 3),
                            b = 2 * R,
                            w = function (t) {
                                return (e[t] ^ (e[t + 1] << R) ^ (e[t + 2] << b)) & T;
                            },
                            O = new o(25e3),
                            W = new s(288),
                            L = new s(32),
                            F = 0,
                            D = 0,
                            I = 0,
                            P = 0,
                            G = 0,
                            M = 0;
                            I < f;
                            ++I
                        ) {
                            var k = w(I),
                                B = 32767 & I,
                                H = v[k];
                            if (((m[B] = H), (v[k] = B), G <= I)) {
                                var V = f - I;
                                if ((F > 7e3 || P > 24576) && V > 423) {
                                    (S = x(e, _, 0, O, W, L, D, P, M, I - M, S)), (P = F = D = 0), (M = I);
                                    for (var K = 0; K < 286; ++K) W[K] = 0;
                                    for (var K = 0; K < 30; ++K) L[K] = 0;
                                }
                                var $ = 2,
                                    z = 0,
                                    q = g,
                                    X = (B - H) & 32767;
                                if (V > 2 && k == w(I - X))
                                    for (var Z = Math.min(y, V) - 1, J = Math.min(32767, I), Q = Math.min(258, V); X <= J && --q && B != H;) {
                                        if (e[I + $] == e[I + $ - X]) {
                                            for (var ee = 0; ee < Q && e[I + ee] == e[I + ee - X]; ++ee);
                                            if (ee > $) {
                                                if ((($ = ee), (z = X), ee > Z)) break;
                                                for (var et = Math.min(X, ee - 2), er = 0, K = 0; K < et; ++K) {
                                                    var en = (I - X + K + 32768) & 32767,
                                                        ei = m[en],
                                                        es = (en - ei + 32768) & 32767;
                                                    es > er && ((er = es), (H = en));
                                                }
                                            }
                                        }
                                        (H = m[(B = H)]), (X += (B - H + 32768) & 32767);
                                    }
                                if (z) {
                                    O[P++] = 268435456 | (d[$] << 18) | p[z];
                                    var eo = 31 & d[$],
                                        ea = 31 & p[z];
                                    (D += a[eo] + l[ea]), ++W[257 + eo], ++L[ea], (G = I + $), ++F;
                                } else (O[P++] = e[I]), ++W[e[I]];
                            }
                        }
                        (S = x(e, _, c, O, W, L, D, P, M, I - M, S)), !c && 7 & S && (S = U(_, S + 1, Y));
                    }
                    return N(h, 0, n + C(S) + u);
                },
                K = (function () {
                    for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
                        for (var r = t, n = 9; --n;) r = (1 & r && -306674912) ^ (r >>> 1);
                        e[t] = r;
                    }
                    return e;
                })(),
                $ = function () {
                    var e = -1;
                    return {
                        p: function (t) {
                            for (var r = e, n = 0; n < t.length; ++n) r = K[(255 & r) ^ t[n]] ^ (r >>> 8);
                            e = r;
                        },
                        d: function () {
                            return ~e;
                        },
                    };
                },
                z = function () {
                    var e = 1,
                        t = 0;
                    return {
                        p: function (r) {
                            for (var n = e, i = t, s = 0 | r.length, o = 0; o != s;) {
                                for (var a = Math.min(o + 2655, s); o < a; ++o) i += n += r[o];
                                (n = (65535 & n) + 15 * (n >> 16)), (i = (65535 & i) + 15 * (i >> 16));
                            }
                            (e = n), (t = i);
                        },
                        d: function () {
                            return (e %= 65521), (t %= 65521), ((255 & e) << 24) | ((e >>> 8) << 16) | ((255 & t) << 8) | (t >>> 8);
                        },
                    };
                },
                q = function (e, t, r, n, i) {
                    return V(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, r, n, !i);
                },
                X = function (e, t) {
                    var r = {};
                    for (var n in e) r[n] = e[n];
                    for (var n in t) r[n] = t[n];
                    return r;
                },
                Z = function (e, t, r) {
                    for (
                        var n = e(),
                        i = e.toString(),
                        s = i
                            .slice(i.indexOf("[") + 1, i.lastIndexOf("]"))
                            .replace(/\s+/g, "")
                            .split(","),
                        o = 0;
                        o < n.length;
                        ++o
                    ) {
                        var a = n[o],
                            l = s[o];
                        if ("function" == typeof a) {
                            t += ";" + l + "=";
                            var u = a.toString();
                            if (a.prototype) {
                                if (-1 != u.indexOf("[native code]")) {
                                    var c = u.indexOf(" ", 8) + 1;
                                    t += u.slice(c, u.indexOf("(", c));
                                } else for (var f in ((t += u), a.prototype)) t += ";" + l + ".prototype." + f + "=" + a.prototype[f].toString();
                            } else t += u;
                        } else r[l] = a;
                    }
                    return [t, r];
                },
                J = [],
                Q = function (e) {
                    var t = [];
                    for (var r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
                    return t;
                },
                ee = function (e, t, r, i) {
                    if (!J[r]) {
                        for (var s, o = "", a = {}, l = e.length - 1, u = 0; u < l; ++u) (o = (s = Z(e[u], o, a))[0]), (a = s[1]);
                        J[r] = Z(e[l], o, a);
                    }
                    var c = X({}, J[r][1]);
                    return n.default(J[r][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", r, c, Q(c), i);
                },
                et = function () {
                    return [i, s, o, a, l, u, h, S, v, b, I, L, y, w, O, W, C, N, F, D, eC, ea, el];
                },
                er = function () {
                    return [i, s, o, a, l, u, d, p, m, g, R, T, I, j, Y, y, P, G, M, k, B, H, U, x, C, N, V, q, eb, ea];
                },
                en = function () {
                    return [ep, eA, eS, $, K];
                },
                ei = function () {
                    return [eI, eE];
                },
                es = function () {
                    return [ey, eS, z];
                },
                eo = function () {
                    return [eg];
                },
                ea = function (e) {
                    return postMessage(e, [e.buffer]);
                },
                el = function (e) {
                    return e && e.size && new i(e.size);
                },
                eu = function (e, t, r, n, i, s) {
                    var o = ee(r, n, i, function (e, t) {
                        o.terminate(), s(e, t);
                    });
                    return (
                        o.postMessage([e, t], t.consume ? [e.buffer] : []),
                        function () {
                            o.terminate();
                        }
                    );
                },
                ec = function (e) {
                    return (
                        (e.ondata = function (e, t) {
                            return postMessage([e, t], [e.buffer]);
                        }),
                        function (t) {
                            return e.push(t.data[0], t.data[1]);
                        }
                    );
                },
                ef = function (e, t, r, n, i) {
                    var s,
                        o = ee(e, n, i, function (e, r) {
                            e ? (o.terminate(), t.ondata.call(t, e)) : (r[1] && o.terminate(), t.ondata.call(t, e, r[0], r[1]));
                        });
                    o.postMessage(r),
                        (t.push = function (e, r) {
                            t.ondata || F(5), s && t.ondata(F(4, 0, 1), null, !!r), o.postMessage([e, (s = r)], [e.buffer]);
                        }),
                        (t.terminate = function () {
                            o.terminate();
                        });
                },
                eh = function (e, t) {
                    return e[t] | (e[t + 1] << 8);
                },
                ed = function (e, t) {
                    return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
                },
                e_ = function (e, t) {
                    return ed(e, t) + 4294967296 * ed(e, t + 4);
                },
                eS = function (e, t, r) {
                    for (; r; ++t) (e[t] = r), (r >>>= 8);
                },
                ep = function (e, t) {
                    var r = t.filename;
                    if (((e[0] = 31), (e[1] = 139), (e[2] = 8), (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0), (e[9] = 3), 0 != t.mtime && eS(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), r)) {
                        e[3] = 8;
                        for (var n = 0; n <= r.length; ++n) e[n + 10] = r.charCodeAt(n);
                    }
                },
                eI = function (e) {
                    (31 != e[0] || 139 != e[1] || 8 != e[2]) && F(6, "invalid gzip data");
                    var t = e[3],
                        r = 10;
                    4 & t && (r += e[10] | ((e[11] << 8) + 2));
                    for (var n = ((t >> 3) & 1) + ((t >> 4) & 1); n > 0; n -= !e[r++]);
                    return r + (2 & t);
                },
                eE = function (e) {
                    var t = e.length;
                    return (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0;
                },
                eA = function (e) {
                    return 10 + ((e.filename && e.filename.length + 1) || 0);
                },
                ey = function (e, t) {
                    var r = t.level,
                        n = 0 == r ? 0 : r < 6 ? 1 : 9 == r ? 3 : 2;
                    (e[0] = 120), (e[1] = (n << 6) | (n ? 32 - 2 * n : 1));
                },
                eg = function (e) {
                    ((15 & e[0]) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31) && F(6, "invalid zlib data"), 32 & e[1] && F(6, "invalid zlib data: preset dictionaries not supported");
                };
            function eT(e, t) {
                return t || "function" != typeof e || ((t = e), (e = {})), (this.ondata = t), e;
            }
            var em = (function () {
                function e(e, t) {
                    t || "function" != typeof e || ((t = e), (e = {})), (this.ondata = t), (this.o = e || {});
                }
                return (
                    (e.prototype.p = function (e, t) {
                        this.ondata(q(e, this.o, 0, 0, !t), t);
                    }),
                    (e.prototype.push = function (e, t) {
                        this.ondata || F(5), this.d && F(4), (this.d = t), this.p(e, t || !1);
                    }),
                    e
                );
            })();
            t.Deflate = em;
            var ev = function (e, t) {
                ef(
                    [
                        er,
                        function () {
                            return [ec, em];
                        },
                    ],
                    this,
                    eT.call(this, e, t),
                    function (e) {
                        onmessage = ec(new em(e.data));
                    },
                    6
                );
            };
            function eR(e, t, r) {
                return (
                    r || ((r = t), (t = {})),
                    "function" != typeof r && F(7),
                    eu(
                        e,
                        t,
                        [er],
                        function (e) {
                            return ea(eb(e.data[0], e.data[1]));
                        },
                        0,
                        r
                    )
                );
            }
            function eb(e, t) {
                return q(e, t || {}, 0, 0);
            }
            (t.AsyncDeflate = ev), (t.deflate = eR), (t.deflateSync = eb);
            var ew = (function () {
                function e(e) {
                    (this.s = {}), (this.p = new i(0)), (this.ondata = e);
                }
                return (
                    (e.prototype.e = function (e) {
                        this.ondata || F(5), this.d && F(4);
                        var t = this.p.length,
                            r = new i(t + e.length);
                        r.set(this.p), r.set(e, t), (this.p = r);
                    }),
                    (e.prototype.c = function (e) {
                        this.d = this.s.i = e || !1;
                        var t = this.s.b,
                            r = D(this.p, this.o, this.s);
                        this.ondata(N(r, t, this.s.b), this.d), (this.o = N(r, this.s.b - 32768)), (this.s.b = this.o.length), (this.p = N(this.p, (this.s.p / 8) | 0)), (this.s.p &= 7);
                    }),
                    (e.prototype.push = function (e, t) {
                        this.e(e), this.c(t);
                    }),
                    e
                );
            })();
            t.Inflate = ew;
            var eO = function (e) {
                (this.ondata = e),
                    ef(
                        [
                            et,
                            function () {
                                return [ec, ew];
                            },
                        ],
                        this,
                        0,
                        function () {
                            onmessage = ec(new ew());
                        },
                        7
                    );
            };
            function eW(e, t, r) {
                return (
                    r || ((r = t), (t = {})),
                    "function" != typeof r && F(7),
                    eu(
                        e,
                        t,
                        [et],
                        function (e) {
                            return ea(D(e.data[0], el(e.data[1])));
                        },
                        1,
                        r
                    )
                );
            }
            function eC(e, t) {
                return D(e, t);
            }
            (t.AsyncInflate = eO), (t.inflate = eW), (t.inflateSync = eC);
            var eN = (function () {
                function e(e, t) {
                    (this.c = $()), (this.l = 0), (this.v = 1), em.call(this, e, t);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        em.prototype.push.call(this, e, t);
                    }),
                    (e.prototype.p = function (e, t) {
                        this.c.p(e), (this.l += e.length);
                        var r = q(e, this.o, this.v && eA(this.o), t && 8, !t);
                        this.v && (ep(r, this.o), (this.v = 0)), t && (eS(r, r.length - 8, this.c.d()), eS(r, r.length - 4, this.l)), this.ondata(r, t);
                    }),
                    e
                );
            })();
            (t.Gzip = eN), (t.Compress = eN);
            var eL = function (e, t) {
                ef(
                    [
                        er,
                        en,
                        function () {
                            return [ec, em, eN];
                        },
                    ],
                    this,
                    eT.call(this, e, t),
                    function (e) {
                        onmessage = ec(new eN(e.data));
                    },
                    8
                );
            };
            function eF(e, t, r) {
                return (
                    r || ((r = t), (t = {})),
                    "function" != typeof r && F(7),
                    eu(
                        e,
                        t,
                        [
                            er,
                            en,
                            function () {
                                return [eD];
                            },
                        ],
                        function (e) {
                            return ea(eD(e.data[0], e.data[1]));
                        },
                        2,
                        r
                    )
                );
            }
            function eD(e, t) {
                t || (t = {});
                var r = $(),
                    n = e.length;
                r.p(e);
                var i = q(e, t, eA(t), 8),
                    s = i.length;
                return ep(i, t), eS(i, s - 8, r.d()), eS(i, s - 4, n), i;
            }
            (t.AsyncGzip = eL), (t.AsyncCompress = eL), (t.gzip = eF), (t.compress = eF), (t.gzipSync = eD), (t.compressSync = eD);
            var eP = (function () {
                function e(e) {
                    (this.v = 1), ew.call(this, e);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        if ((ew.prototype.e.call(this, e), this.v)) {
                            var r = this.p.length > 3 ? eI(this.p) : 4;
                            if (r >= this.p.length && !t) return;
                            (this.p = this.p.subarray(r)), (this.v = 0);
                        }
                        t && (this.p.length < 8 && F(6, "invalid gzip data"), (this.p = this.p.subarray(0, -8))), ew.prototype.c.call(this, t);
                    }),
                    e
                );
            })();
            t.Gunzip = eP;
            var eG = function (e) {
                (this.ondata = e),
                    ef(
                        [
                            et,
                            ei,
                            function () {
                                return [ec, ew, eP];
                            },
                        ],
                        this,
                        0,
                        function () {
                            onmessage = ec(new eP());
                        },
                        9
                    );
            };
            function eM(e, t, r) {
                return (
                    r || ((r = t), (t = {})),
                    "function" != typeof r && F(7),
                    eu(
                        e,
                        t,
                        [
                            et,
                            ei,
                            function () {
                                return [ek];
                            },
                        ],
                        function (e) {
                            return ea(ek(e.data[0]));
                        },
                        3,
                        r
                    )
                );
            }
            function ek(e, t) {
                return D(e.subarray(eI(e), -8), t || new i(eE(e)));
            }
            (t.AsyncGunzip = eG), (t.gunzip = eM), (t.gunzipSync = ek);
            var eB = (function () {
                function e(e, t) {
                    (this.c = z()), (this.v = 1), em.call(this, e, t);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        em.prototype.push.call(this, e, t);
                    }),
                    (e.prototype.p = function (e, t) {
                        this.c.p(e);
                        var r = q(e, this.o, this.v && 2, t && 4, !t);
                        this.v && (ey(r, this.o), (this.v = 0)), t && eS(r, r.length - 4, this.c.d()), this.ondata(r, t);
                    }),
                    e
                );
            })();
            function eH(e, t) {
                t || (t = {});
                var r = z();
                r.p(e);
                var n = q(e, t, 2, 4);
                return ey(n, t), eS(n, n.length - 4, r.d()), n;
            }
            (t.Zlib = eB),
                (t.AsyncZlib = function (e, t) {
                    ef(
                        [
                            er,
                            es,
                            function () {
                                return [ec, em, eB];
                            },
                        ],
                        this,
                        eT.call(this, e, t),
                        function (e) {
                            onmessage = ec(new eB(e.data));
                        },
                        10
                    );
                }),
                (t.zlib = function (e, t, r) {
                    return (
                        r || ((r = t), (t = {})),
                        "function" != typeof r && F(7),
                        eu(
                            e,
                            t,
                            [
                                er,
                                es,
                                function () {
                                    return [eH];
                                },
                            ],
                            function (e) {
                                return ea(eH(e.data[0], e.data[1]));
                            },
                            4,
                            r
                        )
                    );
                }),
                (t.zlibSync = eH);
            var eU = (function () {
                function e(e) {
                    (this.v = 1), ew.call(this, e);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        if ((ew.prototype.e.call(this, e), this.v)) {
                            if (this.p.length < 2 && !t) return;
                            (this.p = this.p.subarray(2)), (this.v = 0);
                        }
                        t && (this.p.length < 4 && F(6, "invalid zlib data"), (this.p = this.p.subarray(0, -4))), ew.prototype.c.call(this, t);
                    }),
                    e
                );
            })();
            t.Unzlib = eU;
            var ex = function (e) {
                (this.ondata = e),
                    ef(
                        [
                            et,
                            eo,
                            function () {
                                return [ec, ew, eU];
                            },
                        ],
                        this,
                        0,
                        function () {
                            onmessage = ec(new eU());
                        },
                        11
                    );
            };
            function ej(e, t, r) {
                return (
                    r || ((r = t), (t = {})),
                    "function" != typeof r && F(7),
                    eu(
                        e,
                        t,
                        [
                            et,
                            eo,
                            function () {
                                return [eY];
                            },
                        ],
                        function (e) {
                            return ea(eY(e.data[0], el(e.data[1])));
                        },
                        5,
                        r
                    )
                );
            }
            function eY(e, t) {
                return D((eg(e), e.subarray(2, -4)), t);
            }
            (t.AsyncUnzlib = ex), (t.unzlib = ej), (t.unzlibSync = eY);
            var eV = (function () {
                function e(e) {
                    (this.G = eP), (this.I = ew), (this.Z = eU), (this.ondata = e);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        if ((this.ondata || F(5), this.s)) this.s.push(e, t);
                        else {
                            if (this.p && this.p.length) {
                                var r = new i(this.p.length + e.length);
                                r.set(this.p), r.set(e, this.p.length);
                            } else this.p = e;
                            if (this.p.length > 2) {
                                var n = this,
                                    s = function () {
                                        n.ondata.apply(n, arguments);
                                    };
                                (this.s = 31 == this.p[0] && 139 == this.p[1] && 8 == this.p[2] ? new this.G(s) : (15 & this.p[0]) != 8 || this.p[0] >> 4 > 7 || ((this.p[0] << 8) | this.p[1]) % 31 ? new this.I(s) : new this.Z(s)),
                                    this.s.push(this.p, t),
                                    (this.p = null);
                            }
                        }
                    }),
                    e
                );
            })();
            t.Decompress = eV;
            var eK = (function () {
                function e(e) {
                    (this.G = eG), (this.I = eO), (this.Z = ex), (this.ondata = e);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        eV.prototype.push.call(this, e, t);
                    }),
                    e
                );
            })();
            (t.AsyncDecompress = eK),
                (t.decompress = function (e, t, r) {
                    return r || ((r = t), (t = {})), "function" != typeof r && F(7), 31 == e[0] && 139 == e[1] && 8 == e[2] ? eM(e, t, r) : (15 & e[0]) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31 ? eW(e, t, r) : ej(e, t, r);
                }),
                (t.decompressSync = function (e, t) {
                    return 31 == e[0] && 139 == e[1] && 8 == e[2] ? ek(e, t) : (15 & e[0]) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31 ? D(e, t) : eY(e, t);
                });
            var e$ = function (e, t, r, n) {
                for (var s in e) {
                    var o = e[s],
                        a = t + s,
                        l = n;
                    Array.isArray(o) && ((l = X(n, o[1])), (o = o[0])), o instanceof i ? (r[a] = [o, l]) : ((r[(a += "/")] = [new i(0), l]), e$(o, a, r, n));
                }
            },
                ez = "undefined" != typeof TextEncoder && new TextEncoder(),
                eq = "undefined" != typeof TextDecoder && new TextDecoder(),
                eX = 0;
            try {
                eq.decode(Y, { stream: !0 }), (eX = 1);
            } catch (e) { }
            var eZ = function (e) {
                for (var t = "", r = 0; ;) {
                    var n = e[r++],
                        i = (n > 127) + (n > 223) + (n > 239);
                    if (r + i > e.length) return [t, N(e, r - 1)];
                    i
                        ? 3 == i
                            ? (t += String.fromCharCode(55296 | ((n = (((15 & n) << 18) | ((63 & e[r++]) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++])) - 65536) >> 10), 56320 | (1023 & n)))
                            : 1 & i
                                ? (t += String.fromCharCode(((31 & n) << 6) | (63 & e[r++])))
                                : (t += String.fromCharCode(((15 & n) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++])))
                        : (t += String.fromCharCode(n));
                }
            },
                eJ = (function () {
                    function e(e) {
                        (this.ondata = e), eX ? (this.t = new TextDecoder()) : (this.p = Y);
                    }
                    return (
                        (e.prototype.push = function (e, t) {
                            if ((this.ondata || F(5), (t = !!t), this.t)) {
                                this.ondata(this.t.decode(e, { stream: !0 }), t), t && (this.t.decode().length && F(8), (this.t = null));
                                return;
                            }
                            this.p || F(4);
                            var r = new i(this.p.length + e.length);
                            r.set(this.p), r.set(e, this.p.length);
                            var n = eZ(r),
                                s = n[0],
                                o = n[1];
                            t ? (o.length && F(8), (this.p = null)) : (this.p = o), this.ondata(s, t);
                        }),
                        e
                    );
                })();
            t.DecodeUTF8 = eJ;
            var eQ = (function () {
                function e(e) {
                    this.ondata = e;
                }
                return (
                    (e.prototype.push = function (e, t) {
                        this.ondata || F(5), this.d && F(4), this.ondata(e0(e), (this.d = t || !1));
                    }),
                    e
                );
            })();
            function e0(e, t) {
                if (t) {
                    for (var r = new i(e.length), n = 0; n < e.length; ++n) r[n] = e.charCodeAt(n);
                    return r;
                }
                if (ez) return ez.encode(e);
                for (
                    var s = e.length,
                    o = new i(e.length + (e.length >> 1)),
                    a = 0,
                    l = function (e) {
                        o[a++] = e;
                    },
                    n = 0;
                    n < s;
                    ++n
                ) {
                    if (a + 5 > o.length) {
                        var u = new i(a + 8 + ((s - n) << 1));
                        u.set(o), (o = u);
                    }
                    var c = e.charCodeAt(n);
                    c < 128 || t
                        ? l(c)
                        : (c < 2048 ? l(192 | (c >> 6)) : (c > 55295 && c < 57344 ? (l(240 | ((c = (65536 + (1047552 & c)) | (1023 & e.charCodeAt(++n))) >> 18)), l(128 | ((c >> 12) & 63))) : l(224 | (c >> 12)), l(128 | ((c >> 6) & 63))),
                            l(128 | (63 & c)));
                }
                return N(o, 0, a);
            }
            function e1(e, t) {
                if (t) {
                    for (var r = "", n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
                    return r;
                }
                if (eq) return eq.decode(e);
                var i = eZ(e),
                    s = i[0];
                return i[1].length && F(8), s;
            }
            (t.EncodeUTF8 = eQ), (t.strToU8 = e0), (t.strFromU8 = e1);
            var e2 = function (e) {
                return 1 == e ? 3 : e < 6 ? 2 : 9 == e ? 1 : 0;
            },
                e3 = function (e, t) {
                    return t + 30 + eh(e, t + 26) + eh(e, t + 28);
                },
                e6 = function (e, t, r) {
                    var n = eh(e, t + 28),
                        i = e1(e.subarray(t + 46, t + 46 + n), !(2048 & eh(e, t + 8))),
                        s = t + 46 + n,
                        o = ed(e, t + 20),
                        a = r && 4294967295 == o ? e8(e, s) : [o, ed(e, t + 24), ed(e, t + 42)],
                        l = a[0],
                        u = a[1],
                        c = a[2];
                    return [eh(e, t + 10), l, u, i, s + eh(e, t + 30) + eh(e, t + 32), c];
                },
                e8 = function (e, t) {
                    for (; 1 != eh(e, t); t += 4 + eh(e, t + 2));
                    return [e_(e, t + 12), e_(e, t + 4), e_(e, t + 20)];
                },
                e4 = function (e) {
                    var t = 0;
                    if (e)
                        for (var r in e) {
                            var n = e[r].length;
                            n > 65535 && F(9), (t += n + 4);
                        }
                    return t;
                },
                e5 = function (e, t, r, n, i, s, o, a) {
                    var l = n.length,
                        u = r.extra,
                        c = a && a.length,
                        f = e4(u);
                    eS(e, t, null != o ? 33639248 : 67324752),
                        (t += 4),
                        null != o && ((e[t++] = 20), (e[t++] = r.os)),
                        (e[t] = 20),
                        (t += 2),
                        (e[t++] = (r.flag << 1) | (s < 0 && 8)),
                        (e[t++] = i && 8),
                        (e[t++] = 255 & r.compression),
                        (e[t++] = r.compression >> 8);
                    var h = new Date(null == r.mtime ? Date.now() : r.mtime),
                        d = h.getFullYear() - 1980;
                    if (
                        ((d < 0 || d > 119) && F(10),
                            eS(e, t, (d << 25) | ((h.getMonth() + 1) << 21) | (h.getDate() << 16) | (h.getHours() << 11) | (h.getMinutes() << 5) | (h.getSeconds() >>> 1)),
                            (t += 4),
                            -1 != s && (eS(e, t, r.crc), eS(e, t + 4, s < 0 ? -s - 2 : s), eS(e, t + 8, r.size)),
                            eS(e, t + 12, l),
                            eS(e, t + 14, f),
                            (t += 16),
                            null != o && (eS(e, t, c), eS(e, t + 6, r.attrs), eS(e, t + 10, o), (t += 14)),
                            e.set(n, t),
                            (t += l),
                            f)
                    )
                        for (var _ in u) {
                            var S = u[_],
                                p = S.length;
                            eS(e, t, +_), eS(e, t + 2, p), e.set(S, t + 4), (t += 4 + p);
                        }
                    return c && (e.set(a, t), (t += c)), t;
                },
                e7 = function (e, t, r, n, i) {
                    eS(e, t, 101010256), eS(e, t + 8, r), eS(e, t + 10, r), eS(e, t + 12, n), eS(e, t + 16, i);
                },
                e9 = (function () {
                    function e(e) {
                        (this.filename = e), (this.c = $()), (this.size = 0), (this.compression = 0);
                    }
                    return (
                        (e.prototype.process = function (e, t) {
                            this.ondata(null, e, t);
                        }),
                        (e.prototype.push = function (e, t) {
                            this.ondata || F(5), this.c.p(e), (this.size += e.length), t && (this.crc = this.c.d()), this.process(e, t || !1);
                        }),
                        e
                    );
                })();
            t.ZipPassThrough = e9;
            var te = (function () {
                function e(e, t) {
                    var r = this;
                    t || (t = {}),
                        e9.call(this, e),
                        (this.d = new em(t, function (e, t) {
                            r.ondata(null, e, t);
                        })),
                        (this.compression = 8),
                        (this.flag = e2(t.level));
                }
                return (
                    (e.prototype.process = function (e, t) {
                        try {
                            this.d.push(e, t);
                        } catch (e) {
                            this.ondata(e, null, t);
                        }
                    }),
                    (e.prototype.push = function (e, t) {
                        e9.prototype.push.call(this, e, t);
                    }),
                    e
                );
            })();
            t.ZipDeflate = te;
            var tt = (function () {
                function e(e, t) {
                    var r = this;
                    t || (t = {}),
                        e9.call(this, e),
                        (this.d = new ev(t, function (e, t, n) {
                            r.ondata(e, t, n);
                        })),
                        (this.compression = 8),
                        (this.flag = e2(t.level)),
                        (this.terminate = this.d.terminate);
                }
                return (
                    (e.prototype.process = function (e, t) {
                        this.d.push(e, t);
                    }),
                    (e.prototype.push = function (e, t) {
                        e9.prototype.push.call(this, e, t);
                    }),
                    e
                );
            })();
            t.AsyncZipDeflate = tt;
            var tr = (function () {
                function e(e) {
                    (this.ondata = e), (this.u = []), (this.d = 1);
                }
                return (
                    (e.prototype.add = function (e) {
                        var t = this;
                        if ((this.ondata || F(5), 2 & this.d)) this.ondata(F(4 + (1 & this.d) * 8, 0, 1), null, !1);
                        else {
                            var r = e0(e.filename),
                                n = r.length,
                                s = e.comment,
                                o = s && e0(s),
                                a = n != e.filename.length || (o && s.length != o.length),
                                l = n + e4(e.extra) + 30;
                            n > 65535 && this.ondata(F(11, 0, 1), null, !1);
                            var u = new i(l);
                            e5(u, 0, e, r, a, -1);
                            var c = [u],
                                f = function () {
                                    for (var e = 0, r = c; e < r.length; e++) {
                                        var n = r[e];
                                        t.ondata(null, n, !1);
                                    }
                                    c = [];
                                },
                                h = this.d;
                            this.d = 0;
                            var d = this.u.length,
                                _ = X(e, {
                                    f: r,
                                    u: a,
                                    o: o,
                                    t: function () {
                                        e.terminate && e.terminate();
                                    },
                                    r: function () {
                                        if ((f(), h)) {
                                            var e = t.u[d + 1];
                                            e ? e.r() : (t.d = 1);
                                        }
                                        h = 1;
                                    },
                                }),
                                S = 0;
                            (e.ondata = function (r, n, s) {
                                if (r) t.ondata(r, n, s), t.terminate();
                                else if (((S += n.length), c.push(n), s)) {
                                    var o = new i(16);
                                    eS(o, 0, 134695760), eS(o, 4, e.crc), eS(o, 8, S), eS(o, 12, e.size), c.push(o), (_.c = S), (_.b = l + S + 16), (_.crc = e.crc), (_.size = e.size), h && _.r(), (h = 1);
                                } else h && f();
                            }),
                                this.u.push(_);
                        }
                    }),
                    (e.prototype.end = function () {
                        var e = this;
                        if (2 & this.d) {
                            this.ondata(F(4 + (1 & this.d) * 8, 0, 1), null, !0);
                            return;
                        }
                        this.d
                            ? this.e()
                            : this.u.push({
                                r: function () {
                                    1 & e.d && (e.u.splice(-1, 1), e.e());
                                },
                                t: function () { },
                            }),
                            (this.d = 3);
                    }),
                    (e.prototype.e = function () {
                        for (var e = 0, t = 0, r = 0, n = 0, s = this.u; n < s.length; n++) {
                            var o = s[n];
                            r += 46 + o.f.length + e4(o.extra) + (o.o ? o.o.length : 0);
                        }
                        for (var a = new i(r + 22), l = 0, u = this.u; l < u.length; l++) {
                            var o = u[l];
                            e5(a, e, o, o.f, o.u, -o.c - 2, t, o.o), (e += 46 + o.f.length + e4(o.extra) + (o.o ? o.o.length : 0)), (t += o.b);
                        }
                        e7(a, e, this.u.length, r, t), this.ondata(null, a, !0), (this.d = 2);
                    }),
                    (e.prototype.terminate = function () {
                        for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
                        this.d = 2;
                    }),
                    e
                );
            })();
            (t.Zip = tr),
                (t.zip = function (e, t, r) {
                    r || ((r = t), (t = {})), "function" != typeof r && F(7);
                    var n = {};
                    e$(e, "", n, t);
                    var s = Object.keys(n),
                        o = s.length,
                        a = 0,
                        l = 0,
                        u = o,
                        c = Array(o),
                        f = [],
                        h = function () {
                            for (var e = 0; e < f.length; ++e) f[e]();
                        },
                        d = function (e, t) {
                            ta(function () {
                                r(e, t);
                            });
                        };
                    ta(function () {
                        d = r;
                    });
                    var _ = function () {
                        var e = new i(l + 22),
                            t = a,
                            r = l - a;
                        l = 0;
                        for (var n = 0; n < u; ++n) {
                            var s = c[n];
                            try {
                                var o = s.c.length;
                                e5(e, l, s, s.f, s.u, o);
                                var f = 30 + s.f.length + e4(s.extra),
                                    h = l + f;
                                e.set(s.c, h), e5(e, a, s, s.f, s.u, o, l, s.m), (a += 16 + f + (s.m ? s.m.length : 0)), (l = h + o);
                            } catch (e) {
                                return d(e, null);
                            }
                        }
                        e7(e, a, c.length, r, t), d(null, e);
                    };
                    o || _();
                    for (
                        var S = function (e) {
                            var t = s[e],
                                r = n[t],
                                i = r[0],
                                u = r[1],
                                S = $(),
                                p = i.length;
                            S.p(i);
                            var I = e0(t),
                                E = I.length,
                                A = u.comment,
                                y = A && e0(A),
                                g = y && y.length,
                                T = e4(u.extra),
                                m = 0 == u.level ? 0 : 8,
                                v = function (r, n) {
                                    if (r) h(), d(r, null);
                                    else {
                                        var i = n.length;
                                        (c[e] = X(u, { size: p, crc: S.d(), c: n, f: I, m: y, u: E != t.length || (y && A.length != g), compression: m })), (a += 30 + E + T + i), (l += 76 + 2 * (E + T) + (g || 0) + i), --o || _();
                                    }
                                };
                            if ((E > 65535 && v(F(11, 0, 1), null), m)) {
                                if (p < 16e4)
                                    try {
                                        v(null, eb(i, u));
                                    } catch (e) {
                                        v(e, null);
                                    }
                                else f.push(eR(i, u, v));
                            } else v(null, i);
                        },
                        p = 0;
                        p < u;
                        ++p
                    )
                        S(p);
                    return h;
                }),
                (t.zipSync = function (e, t) {
                    t || (t = {});
                    var r = {},
                        n = [];
                    e$(e, "", r, t);
                    var s = 0,
                        o = 0;
                    for (var a in r) {
                        var l = r[a],
                            u = l[0],
                            c = l[1],
                            f = 0 == c.level ? 0 : 8,
                            h = e0(a),
                            d = h.length,
                            _ = c.comment,
                            S = _ && e0(_),
                            p = S && S.length,
                            I = e4(c.extra);
                        d > 65535 && F(11);
                        var E = f ? eb(u, c) : u,
                            A = E.length,
                            y = $();
                        y.p(u), n.push(X(c, { size: u.length, crc: y.d(), c: E, f: h, m: S, u: d != a.length || (S && _.length != p), o: s, compression: f })), (s += 30 + d + I + A), (o += 76 + 2 * (d + I) + (p || 0) + A);
                    }
                    for (var g = new i(o + 22), T = s, m = o - s, v = 0; v < n.length; ++v) {
                        var h = n[v];
                        e5(g, h.o, h, h.f, h.u, h.c.length);
                        var R = 30 + h.f.length + e4(h.extra);
                        g.set(h.c, h.o + R), e5(g, s, h, h.f, h.u, h.c.length, h.o, h.m), (s += 16 + R + (h.m ? h.m.length : 0));
                    }
                    return e7(g, s, n.length, m, T), g;
                });
            var tn = (function () {
                function e() { }
                return (
                    (e.prototype.push = function (e, t) {
                        this.ondata(null, e, t);
                    }),
                    (e.compression = 0),
                    e
                );
            })();
            t.UnzipPassThrough = tn;
            var ti = (function () {
                function e() {
                    var e = this;
                    this.i = new ew(function (t, r) {
                        e.ondata(null, t, r);
                    });
                }
                return (
                    (e.prototype.push = function (e, t) {
                        try {
                            this.i.push(e, t);
                        } catch (e) {
                            this.ondata(e, null, t);
                        }
                    }),
                    (e.compression = 8),
                    e
                );
            })();
            t.UnzipInflate = ti;
            var ts = (function () {
                function e(e, t) {
                    var r = this;
                    t < 32e4
                        ? (this.i = new ew(function (e, t) {
                            r.ondata(null, e, t);
                        }))
                        : ((this.i = new eO(function (e, t, n) {
                            r.ondata(e, t, n);
                        })),
                            (this.terminate = this.i.terminate));
                }
                return (
                    (e.prototype.push = function (e, t) {
                        this.i.terminate && (e = N(e, 0)), this.i.push(e, t);
                    }),
                    (e.compression = 8),
                    e
                );
            })();
            t.AsyncUnzipInflate = ts;
            var to = (function () {
                function e(e) {
                    (this.onfile = e), (this.k = []), (this.o = { 0: tn }), (this.p = Y);
                }
                return (
                    (e.prototype.push = function (e, t) {
                        var r = this;
                        if ((this.onfile || F(5), this.p || F(4), this.c > 0)) {
                            var n = Math.min(this.c, e.length),
                                s = e.subarray(0, n);
                            if (((this.c -= n), this.d ? this.d.push(s, !this.c) : this.k[0].push(s), (e = e.subarray(n)).length)) return this.push(e, t);
                        } else {
                            var o = 0,
                                a = 0,
                                l = void 0,
                                u = void 0;
                            this.p.length ? (e.length ? ((u = new i(this.p.length + e.length)).set(this.p), u.set(e, this.p.length)) : (u = this.p)) : (u = e);
                            for (
                                var c = u.length, f = this.c, h = f && this.d, d = this;
                                a < c - 4 &&
                                "break" !==
                                (function () {
                                    var e = ed(u, a);
                                    if (67324752 == e) {
                                        (o = 1), (l = a), (d.d = null), (d.c = 0);
                                        var t = eh(u, a + 6),
                                            n = eh(u, a + 8),
                                            i = 8 & t,
                                            s = eh(u, a + 26),
                                            h = eh(u, a + 28);
                                        if (c > a + 30 + s + h) {
                                            var _,
                                                S,
                                                p = [];
                                            d.k.unshift(p), (o = 2);
                                            var I = ed(u, a + 18),
                                                E = ed(u, a + 22),
                                                A = e1(u.subarray(a + 30, (a += 30 + s)), !(2048 & t));
                                            4294967295 == I ? ((I = (_ = i ? [-2] : e8(u, a))[0]), (E = _[1])) : i && (I = -1), (a += h), (d.c = I);
                                            var y = {
                                                name: A,
                                                compression: n,
                                                start: function () {
                                                    if ((y.ondata || F(5), I)) {
                                                        var e = r.o[n];
                                                        e || y.ondata(F(14, "unknown compression type " + n, 1), null, !1),
                                                            ((S = I < 0 ? new e(A) : new e(A, I, E)).ondata = function (e, t, r) {
                                                                y.ondata(e, t, r);
                                                            });
                                                        for (var t = 0; t < p.length; t++) {
                                                            var i = p[t];
                                                            S.push(i, !1);
                                                        }
                                                        r.k[0] == p && r.c ? (r.d = S) : S.push(Y, !0);
                                                    } else y.ondata(null, Y, !0);
                                                },
                                                terminate: function () {
                                                    S && S.terminate && S.terminate();
                                                },
                                            };
                                            I >= 0 && ((y.size = I), (y.originalSize = E)), d.onfile(y);
                                        }
                                        return "break";
                                    }
                                    if (f) {
                                        if (134695760 == e) return (l = a += 12 + (-2 == f && 8)), (o = 3), (d.c = 0), "break";
                                        if (33639248 == e) return (l = a -= 4), (o = 3), (d.c = 0), "break";
                                    }
                                })();
                                ++a
                            );
                            if (((this.p = Y), f < 0)) {
                                var _ = o ? u.subarray(0, l - 12 - (-2 == f && 8) - (134695760 == ed(u, l - 16) && 4)) : u.subarray(0, a);
                                h ? h.push(_, !!o) : this.k[+(2 == o)].push(_);
                            }
                            if (2 & o) return this.push(u.subarray(a), t);
                            this.p = u.subarray(a);
                        }
                        t && (this.c && F(13), (this.p = null));
                    }),
                    (e.prototype.register = function (e) {
                        this.o[e.compression] = e;
                    }),
                    e
                );
            })();
            t.Unzip = to;
            var ta =
                "function" == typeof queueMicrotask
                    ? queueMicrotask
                    : "function" == typeof setTimeout
                        ? setTimeout
                        : function (e) {
                            e();
                        };
            (t.unzip = function (e, t, r) {
                r || ((r = t), (t = {})), "function" != typeof r && F(7);
                var n = [],
                    s = function () {
                        for (var e = 0; e < n.length; ++e) n[e]();
                    },
                    o = {},
                    a = function (e, t) {
                        ta(function () {
                            r(e, t);
                        });
                    };
                ta(function () {
                    a = r;
                });
                for (var l = e.length - 22; 101010256 != ed(e, l); --l) if (!l || e.length - l > 65558) return a(F(13, 0, 1), null), s;
                var u = eh(e, l + 8);
                if (u) {
                    var c = u,
                        f = ed(e, l + 16),
                        h = 4294967295 == f || 65535 == c;
                    if (h) {
                        var d = ed(e, l - 12);
                        (h = 101075792 == ed(e, d)) && ((c = u = ed(e, d + 32)), (f = ed(e, d + 48)));
                    }
                    for (var _ = t && t.filter, S = 0; S < c; ++S)
                        !(function (t) {
                            var r = e6(e, f, h),
                                l = r[0],
                                c = r[1],
                                d = r[2],
                                S = r[3],
                                p = r[4],
                                I = e3(e, r[5]);
                            f = p;
                            var E = function (e, t) {
                                e ? (s(), a(e, null)) : (t && (o[S] = t), --u || a(null, o));
                            };
                            if (!_ || _({ name: S, size: c, originalSize: d, compression: l })) {
                                if (l) {
                                    if (8 == l) {
                                        var A,
                                            y = e.subarray(I, I + c);
                                        if (c < 32e4)
                                            try {
                                                E(null, ((A = new i(d)), D(y, A)));
                                            } catch (e) {
                                                E(e, null);
                                            }
                                        else n.push(eW(y, { size: d }, E));
                                    } else E(F(14, "unknown compression type " + l, 1), null);
                                } else E(null, N(e, I, I + c));
                            } else E(null, null);
                        })(0);
                } else a(null, {});
                return s;
            }),
                (t.unzipSync = function (e, t) {
                    for (var r = {}, n = e.length - 22; 101010256 != ed(e, n); --n) (!n || e.length - n > 65558) && F(13);
                    var s = eh(e, n + 8);
                    if (!s) return {};
                    var o = ed(e, n + 16),
                        a = 4294967295 == o || 65535 == s;
                    if (a) {
                        var l = ed(e, n - 12);
                        (a = 101075792 == ed(e, l)) && ((s = ed(e, l + 32)), (o = ed(e, l + 48)));
                    }
                    for (var u = t && t.filter, c = 0; c < s; ++c) {
                        var f = e6(e, o, a),
                            h = f[0],
                            d = f[1],
                            _ = f[2],
                            S = f[3],
                            p = f[4],
                            I = e3(e, f[5]);
                        (o = p), (!u || u({ name: S, size: d, originalSize: _, compression: h })) && (h ? (8 == h ? (r[S] = D(e.subarray(I, I + d), new i(_))) : F(14, "unknown compression type " + h)) : (r[S] = N(e, I, I + d)));
                    }
                    return r;
                });
        },
        93989: function (e, t) {
            "use strict";
            var r = {};
            t.default = function (e, t, n, i, s) {
                var o = new Worker(r[t] || (r[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
                return (
                    (o.onmessage = function (e) {
                        var t = e.data,
                            r = t.$e$;
                        if (r) {
                            var n = Error(r[0]);
                            (n.code = r[1]), (n.stack = r[2]), s(n, null);
                        } else s(null, t);
                    }),
                    o.postMessage(n, i),
                    o
                );
            };
        },
    },
]);




// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7545],{92764:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dirent=void 0;let n=r(17994),i=r(78988),{S_IFMT:s,S_IFDIR:o,S_IFREG:a,S_IFBLK:l,S_IFCHR:u,S_IFLNK:c,S_IFIFO:f,S_IFSOCK:h}=n.constants;class d{constructor(){this.name="",this.mode=0}static build(e,t){let r=new d,{mode:n}=e.getNode();return r.name=(0,i.strToEncoding)(e.getName(),t),r.mode=n,r}_checkModeProperty(e){return(this.mode&s)===e}isDirectory(){return this._checkModeProperty(o)}isFile(){return this._checkModeProperty(a)}isBlockDevice(){return this._checkModeProperty(l)}isCharacterDevice(){return this._checkModeProperty(u)}isSymbolicLink(){return this._checkModeProperty(c)}isFIFO(){return this._checkModeProperty(f)}isSocket(){return this._checkModeProperty(h)}}t.Dirent=d,t.default=d},65844:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stats=void 0;let n=r(17994),i=r(62874),{S_IFMT:s,S_IFDIR:o,S_IFREG:a,S_IFBLK:l,S_IFCHR:u,S_IFLNK:c,S_IFIFO:f,S_IFSOCK:h}=n.constants;class d{static build(e,t=!1){let r=new d,{uid:n,gid:s,atime:o,mtime:a,ctime:l}=e,u=t?i.default:e=>e;r.uid=u(n),r.gid=u(s),r.rdev=u(0),r.blksize=u(4096),r.ino=u(e.ino),r.size=u(e.getSize()),r.blocks=u(1),r.atime=o,r.mtime=a,r.ctime=l,r.birthtime=l,r.atimeMs=u(o.getTime()),r.mtimeMs=u(a.getTime());let c=u(l.getTime());return r.ctimeMs=c,r.birthtimeMs=c,r.dev=u(0),r.mode=u(e.mode),r.nlink=u(e.nlink),r}_checkModeProperty(e){return(Number(this.mode)&s)===e}isDirectory(){return this._checkModeProperty(o)}isFile(){return this._checkModeProperty(a)}isBlockDevice(){return this._checkModeProperty(l)}isCharacterDevice(){return this._checkModeProperty(u)}isSymbolicLink(){return this._checkModeProperty(c)}isFIFO(){return this._checkModeProperty(f)}isSocket(){return this._checkModeProperty(h)}}t.Stats=d,t.default=d},17994:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=void 0,t.constants={O_RDONLY:0,O_WRONLY:1,O_RDWR:2,S_IFMT:61440,S_IFREG:32768,S_IFDIR:16384,S_IFCHR:8192,S_IFBLK:24576,S_IFIFO:4096,S_IFLNK:40960,S_IFSOCK:49152,O_CREAT:64,O_EXCL:128,O_NOCTTY:256,O_TRUNC:512,O_APPEND:1024,O_DIRECTORY:65536,O_NOATIME:262144,O_NOFOLLOW:131072,O_SYNC:1052672,O_DIRECT:16384,O_NONBLOCK:2048,S_IRWXU:448,S_IRUSR:256,S_IWUSR:128,S_IXUSR:64,S_IRWXG:56,S_IRGRP:32,S_IWGRP:16,S_IXGRP:8,S_IRWXO:7,S_IROTH:4,S_IWOTH:2,S_IXOTH:1,F_OK:0,R_OK:4,W_OK:2,X_OK:1,UV_FS_SYMLINK_DIR:1,UV_FS_SYMLINK_JUNCTION:2,UV_FS_COPYFILE_EXCL:1,UV_FS_COPYFILE_FICLONE:2,UV_FS_COPYFILE_FICLONE_FORCE:4,COPYFILE_EXCL:1,COPYFILE_FICLONE:2,COPYFILE_FICLONE_FORCE:4}},78988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.strToEncoding=t.assertEncoding=t.ENCODING_UTF8=void 0;let n=r(1526),i=r(2324);t.ENCODING_UTF8="utf8",t.assertEncoding=function(e){if(e&&!n.Buffer.isEncoding(e))throw new i.TypeError("ERR_INVALID_OPT_VALUE_ENCODING",e)},t.strToEncoding=function(e,r){return r&&r!==t.ENCODING_UTF8?"buffer"===r?new n.Buffer(e):new n.Buffer(e).toString(r):e}},62874:function(e,t){"function"==typeof BigInt?t.default=BigInt:t.default=function(){throw Error("BigInt is not supported in this environment.")}},55370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fs=t.createFsFromVolume=t.vol=t.Volume=void 0;let n=r(65844),i=r(92764),s=r(61299),{fsSyncMethods:o,fsAsyncMethods:a}=r(35659),l=r(17994),{F_OK:u,R_OK:c,W_OK:f,X_OK:h}=l.constants;function d(e){let t={F_OK:u,R_OK:c,W_OK:f,X_OK:h,constants:l.constants,Stats:n.default,Dirent:i.default};for(let r of o)"function"==typeof e[r]&&(t[r]=e[r].bind(e));for(let r of a)"function"==typeof e[r]&&(t[r]=e[r].bind(e));return t.StatWatcher=e.StatWatcher,t.FSWatcher=e.FSWatcher,t.WriteStream=e.WriteStream,t.ReadStream=e.ReadStream,t.promises=e.promises,t._toUnixTimestamp=s.toUnixTimestamp,t}t.Volume=s.Volume,t.vol=new s.Volume,t.createFsFromVolume=d,t.fs=d(t.vol),e.exports={...e.exports,...t.fs},e.exports.semantic=!0},1526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bufferFrom=t.bufferAllocUnsafe=t.Buffer=void 0;let n=r(48764);function i(e,...t){return new n.Buffer(e,...t)}Object.defineProperty(t,"Buffer",{enumerable:!0,get:function(){return n.Buffer}});let s=n.Buffer.allocUnsafe||i;t.bufferAllocUnsafe=s;let o=n.Buffer.from||i;t.bufferFrom=o},2324:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.E=t.AssertionError=t.message=t.RangeError=t.TypeError=t.Error=void 0;let n=r(48583),i=r(89539),s="undefined"==typeof Symbol?"_kCode":Symbol("code"),o={};function a(e){return class extends e{constructor(e,...t){super(c(e,t)),this.code=e,this[s]=e,this.name=`${super.name} [${this[s]}]`}}}let l="undefined"!=typeof globalThis?globalThis:r.g;class u extends l.Error{constructor(e){if("object"!=typeof e||null===e)throw new t.TypeError("ERR_INVALID_ARG_TYPE","options","object");e.message?super(e.message):super(`${i.inspect(e.actual).slice(0,128)} ${e.operator} ${i.inspect(e.expected).slice(0,128)}`),this.generatedMessage=!e.message,this.name="AssertionError [ERR_ASSERTION]",this.code="ERR_ASSERTION",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,t.Error.captureStackTrace(this,e.stackStartFunction)}}function c(e,t){let r;n.strictEqual(typeof e,"string");let s=o[e];if(n(s,`An invalid error message key was used: ${e}.`),"function"==typeof s)r=s;else{if(r=i.format,void 0===t||0===t.length)return s;t.unshift(s)}return String(r.apply(null,t))}function f(e,t){o[e]="function"==typeof t?t:String(t)}function h(e,t){if(n(e,"expected is required"),n("string"==typeof t,"thing is required"),!Array.isArray(e))return`of ${t} ${String(e)}`;{let r=e.length;return(n(r>0,"At least one expected value needs to be specified"),e=e.map(e=>String(e)),r>2)?`one of ${t} ${e.slice(0,r-1).join(", ")}, or `+e[r-1]:2===r?`one of ${t} ${e[0]} or ${e[1]}`:`of ${t} ${e[0]}`}}t.AssertionError=u,t.message=c,t.E=f,t.Error=a(l.Error),t.TypeError=a(l.TypeError),t.RangeError=a(l.RangeError),f("ERR_ARG_NOT_ITERABLE","%s must be iterable"),f("ERR_ASSERTION","%s"),f("ERR_BUFFER_OUT_OF_BOUNDS",function(e,t){return t?"Attempt to write outside buffer bounds":`"${e}" is outside of buffer bounds`}),f("ERR_CHILD_CLOSED_BEFORE_REPLY","Child closed before reply received"),f("ERR_CONSOLE_WRITABLE_STREAM","Console expects a writable stream instance for %s"),f("ERR_CPU_USAGE","Unable to obtain cpu usage %s"),f("ERR_DNS_SET_SERVERS_FAILED",(e,t)=>`c-ares failed to set servers: "${e}" [${t}]`),f("ERR_FALSY_VALUE_REJECTION","Promise was rejected with falsy value"),f("ERR_ENCODING_NOT_SUPPORTED",e=>`The "${e}" encoding is not supported`),f("ERR_ENCODING_INVALID_ENCODED_DATA",e=>`The encoded data was not valid for encoding ${e}`),f("ERR_HTTP_HEADERS_SENT","Cannot render headers after they are sent to the client"),f("ERR_HTTP_INVALID_STATUS_CODE","Invalid status code: %s"),f("ERR_HTTP_TRAILER_INVALID","Trailers are invalid with this transfer encoding"),f("ERR_INDEX_OUT_OF_RANGE","Index out of range"),f("ERR_INVALID_ARG_TYPE",function(e,t,r){let i,s;if(n(e,"name is required"),t.includes("not ")?(i="must not be",t=t.split("not ")[1]):i="must be",Array.isArray(e)){let r=e.map(e=>`"${e}"`).join(", ");s=`The ${r} arguments ${i} ${h(t,"type")}`}else if(e.includes(" argument"))s=`The ${e} ${i} ${h(t,"type")}`;else{let r=e.includes(".")?"property":"argument";s=`The "${e}" ${r} ${i} ${h(t,"type")}`}return arguments.length>=3&&(s+=`. Received type ${null!==r?typeof r:"null"}`),s}),f("ERR_INVALID_ARRAY_LENGTH",(e,t,r)=>(n.strictEqual(typeof r,"number"),`The array "${e}" (length ${r}) must be of length ${t}.`)),f("ERR_INVALID_BUFFER_SIZE","Buffer size must be a multiple of %s"),f("ERR_INVALID_CALLBACK","Callback must be a function"),f("ERR_INVALID_CHAR","Invalid character in %s"),f("ERR_INVALID_CURSOR_POS","Cannot set cursor row without setting its column"),f("ERR_INVALID_FD",'"fd" must be a positive integer: %s'),f("ERR_INVALID_FILE_URL_HOST",'File URL host must be "localhost" or empty on %s'),f("ERR_INVALID_FILE_URL_PATH","File URL path %s"),f("ERR_INVALID_HANDLE_TYPE","This handle type cannot be sent"),f("ERR_INVALID_IP_ADDRESS","Invalid IP address: %s"),f("ERR_INVALID_OPT_VALUE",(e,t)=>`The value "${String(t)}" is invalid for option "${e}"`),f("ERR_INVALID_OPT_VALUE_ENCODING",e=>`The value "${String(e)}" is invalid for option "encoding"`),f("ERR_INVALID_REPL_EVAL_CONFIG",'Cannot specify both "breakEvalOnSigint" and "eval" for REPL'),f("ERR_INVALID_SYNC_FORK_INPUT","Asynchronous forks do not support Buffer, Uint8Array or string input: %s"),f("ERR_INVALID_THIS",'Value of "this" must be of type %s'),f("ERR_INVALID_TUPLE","%s must be an iterable %s tuple"),f("ERR_INVALID_URL","Invalid URL: %s"),f("ERR_INVALID_URL_SCHEME",e=>`The URL must be ${h(e,"scheme")}`),f("ERR_IPC_CHANNEL_CLOSED","Channel closed"),f("ERR_IPC_DISCONNECTED","IPC channel is already disconnected"),f("ERR_IPC_ONE_PIPE","Child process can have only one IPC pipe"),f("ERR_IPC_SYNC_FORK","IPC cannot be used with synchronous forks"),f("ERR_MISSING_ARGS",function(...e){n(e.length>0,"At least one arg needs to be specified");let t="The ",r=e.length;switch(e=e.map(e=>`"${e}"`),r){case 1:t+=`${e[0]} argument`;break;case 2:t+=`${e[0]} and ${e[1]} arguments`;break;default:t+=e.slice(0,r-1).join(", ")+`, and ${e[r-1]} arguments`}return`${t} must be specified`}),f("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),f("ERR_NAPI_CONS_FUNCTION","Constructor must be a function"),f("ERR_NAPI_CONS_PROTOTYPE_OBJECT","Constructor.prototype must be an object"),f("ERR_NO_CRYPTO","Node.js is not compiled with OpenSSL crypto support"),f("ERR_NO_LONGER_SUPPORTED","%s is no longer supported"),f("ERR_PARSE_HISTORY_DATA","Could not parse history data in %s"),f("ERR_SOCKET_ALREADY_BOUND","Socket is already bound"),f("ERR_SOCKET_BAD_PORT","Port should be > 0 and < 65536"),f("ERR_SOCKET_BAD_TYPE","Bad socket type specified. Valid types are: udp4, udp6"),f("ERR_SOCKET_CANNOT_SEND","Unable to send data"),f("ERR_SOCKET_CLOSED","Socket is closed"),f("ERR_SOCKET_DGRAM_NOT_RUNNING","Not running"),f("ERR_STDERR_CLOSE","process.stderr cannot be closed"),f("ERR_STDOUT_CLOSE","process.stdout cannot be closed"),f("ERR_STREAM_WRAP","Stream has StringDecoder set or is in objectMode"),f("ERR_TLS_CERT_ALTNAME_INVALID","Hostname/IP does not match certificate's altnames: %s"),f("ERR_TLS_DH_PARAM_SIZE",e=>`DH parameter size ${e} is less than 2048`),f("ERR_TLS_HANDSHAKE_TIMEOUT","TLS handshake timeout"),f("ERR_TLS_RENEGOTIATION_FAILED","Failed to renegotiate"),f("ERR_TLS_REQUIRED_SERVER_NAME",'"servername" is required parameter for Server.addContext'),f("ERR_TLS_SESSION_ATTACK","TSL session renegotiation attack detected"),f("ERR_TRANSFORM_ALREADY_TRANSFORMING","Calling transform done when still transforming"),f("ERR_TRANSFORM_WITH_LENGTH_0","Calling transform done when writableState.length != 0"),f("ERR_UNKNOWN_ENCODING","Unknown encoding: %s"),f("ERR_UNKNOWN_SIGNAL","Unknown signal: %s"),f("ERR_UNKNOWN_STDIN_TYPE","Unknown stdin file type"),f("ERR_UNKNOWN_STREAM_TYPE","Unknown stream file type"),f("ERR_V8BREAKITERATOR","Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl")},57718:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.File=t.Link=t.Node=t.SEP=void 0;let n=r(44596),i=r(1526),s=r(17994),o=r(17187),a=r(65844),{S_IFMT:l,S_IFDIR:u,S_IFREG:c,S_IFLNK:f,O_APPEND:h}=s.constants,d=()=>n.default.getuid?.()??0,_=()=>n.default.getgid?.()??0;t.SEP="/";class S extends o.EventEmitter{constructor(e,t=438){super(),this.uid=d(),this.gid=_(),this.atime=new Date,this.mtime=new Date,this.ctime=new Date,this.perm=438,this.mode=c,this.nlink=1,this.perm=t,this.mode|=t,this.ino=e}getString(e="utf8"){return this.getBuffer().toString(e)}setString(e){this.buf=(0,i.bufferFrom)(e,"utf8"),this.touch()}getBuffer(){return this.buf||this.setBuffer((0,i.bufferAllocUnsafe)(0)),(0,i.bufferFrom)(this.buf)}setBuffer(e){this.buf=(0,i.bufferFrom)(e),this.touch()}getSize(){return this.buf?this.buf.length:0}setModeProperty(e){this.mode=this.mode&~l|e}setIsFile(){this.setModeProperty(c)}setIsDirectory(){this.setModeProperty(u)}setIsSymlink(){this.setModeProperty(f)}isFile(){return(this.mode&l)===c}isDirectory(){return(this.mode&l)===u}isSymlink(){return(this.mode&l)===f}makeSymlink(e){this.symlink=e,this.setIsSymlink()}write(e,t=0,r=e.length,n=0){if(this.buf||(this.buf=(0,i.bufferAllocUnsafe)(0)),n+r>this.buf.length){let e=(0,i.bufferAllocUnsafe)(n+r);this.buf.copy(e,0,0,this.buf.length),this.buf=e}return e.copy(this.buf,n,t,t+r),this.touch(),r}read(e,t=0,r=e.byteLength,n=0){this.buf||(this.buf=(0,i.bufferAllocUnsafe)(0));let s=r;return s>e.byteLength&&(s=e.byteLength),s+n>this.buf.length&&(s=this.buf.length-n),this.buf.copy(e,t,n,n+s),s}truncate(e=0){if(e){if(this.buf||(this.buf=(0,i.bufferAllocUnsafe)(0)),e<=this.buf.length)this.buf=this.buf.slice(0,e);else{let t=(0,i.bufferAllocUnsafe)(0);this.buf.copy(t),t.fill(0,e)}}else this.buf=(0,i.bufferAllocUnsafe)(0);this.touch()}chmod(e){this.perm=e,this.mode=-512&this.mode|e,this.touch()}chown(e,t){this.uid=e,this.gid=t,this.touch()}touch(){this.mtime=new Date,this.emit("change",this)}canRead(e=d(),t=_()){return!!(4&this.perm)||t===this.gid&&!!(32&this.perm)||e===this.uid&&!!(256&this.perm)}canWrite(e=d(),t=_()){return!!(2&this.perm)||t===this.gid&&!!(16&this.perm)||e===this.uid&&!!(128&this.perm)}del(){this.emit("delete",this)}toJSON(){return{ino:this.ino,uid:this.uid,gid:this.gid,atime:this.atime.getTime(),mtime:this.mtime.getTime(),ctime:this.ctime.getTime(),perm:this.perm,mode:this.mode,nlink:this.nlink,symlink:this.symlink,data:this.getString()}}}t.Node=S;class p extends o.EventEmitter{constructor(e,t,r){super(),this.children={},this._steps=[],this.ino=0,this.length=0,this.vol=e,this.parent=t,this.name=r,this.syncSteps()}get steps(){return this._steps}set steps(e){for(let t of(this._steps=e,Object.values(this.children)))t?.syncSteps()}setNode(e){this.node=e,this.ino=e.ino}getNode(){return this.node}createChild(e,t=this.vol.createNode()){let r=new p(this.vol,this,e);return r.setNode(t),t.isDirectory(),this.setChild(e,r),r}childrenChanged(){this.node.mtime=this.node.ctime=new Date}setChild(e,t=new p(this.vol,this,e)){return this.children[e]=t,this.childrenChanged(),t.parent=this,this.length++,this.emit("child:add",t,this),t}deleteChild(e){delete this.children[e.getName()],this.childrenChanged(),this.length--,this.emit("child:delete",e,this)}getChild(e){if(Object.hasOwnProperty.call(this.children,e))return this.children[e]}getPath(){return this.steps.join(t.SEP)}getName(){return this.steps[this.steps.length-1]}walk(e,t=e.length,r=0){if(r>=e.length||r>=t)return this;let n=e[r],i=this.getChild(n);return i?i.walk(e,t,r+1):null}toJSON(){return{steps:this.steps,ino:this.ino,children:Object.keys(this.children)}}syncSteps(){this.steps=this.parent?this.parent.steps.concat([this.name]):[this.name]}}t.Link=p;class I{constructor(e,t,r,n){this.position=0,this.link=e,this.node=t,this.flags=r,this.fd=n}getString(e="utf8"){return this.node.getString()}setString(e){this.node.setString(e)}getBuffer(){return this.node.getBuffer()}setBuffer(e){this.node.setBuffer(e)}getSize(){return this.node.getSize()}truncate(e){this.node.truncate(e)}seekTo(e){this.position=e}stats(){return a.default.build(this.node)}write(e,t=0,r=e.length,n){"number"!=typeof n&&(n=this.position),this.flags&h&&(n=this.getSize());let i=this.node.write(e,t,r,n);return this.position=n+i,i}read(e,t=0,r=e.byteLength,n){"number"!=typeof n&&(n=this.position);let i=this.node.read(e,t,r,n);return this.position=n+i,i}chmod(e){this.node.chmod(e)}chown(e,t){this.node.chown(e,t)}}t.File=I},44596:function(e,t,r){"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.createProcess=void 0;let i=()=>{if(void 0!==n)return n;try{return r(34155)}catch{return}};function s(){let e=i()||{};return e.cwd||(e.cwd=()=>"/"),e.nextTick||(e.nextTick=r(26913).default),e.emitWarning||(e.emitWarning=(e,t)=>{console.warn(`${t}${t?": ":""}${e}`)}),e.env||(e.env={}),e}t.createProcess=s,t.default=s()},71390:function(e,t){"use strict";function r(e,t,r=e=>e){return(...n)=>new Promise((i,s)=>{e[t].bind(e)(...n,(e,t)=>e?s(e):i(r(t)))})}Object.defineProperty(t,"__esModule",{value:!0}),t.FileHandle=void 0;class n{constructor(e,t){this.vol=e,this.fd=t}appendFile(e,t){return r(this.vol,"appendFile")(this.fd,e,t)}chmod(e){return r(this.vol,"fchmod")(this.fd,e)}chown(e,t){return r(this.vol,"fchown")(this.fd,e,t)}close(){return r(this.vol,"close")(this.fd)}datasync(){return r(this.vol,"fdatasync")(this.fd)}read(e,t,n,i){return r(this.vol,"read",t=>({bytesRead:t,buffer:e}))(this.fd,e,t,n,i)}readFile(e){return r(this.vol,"readFile")(this.fd,e)}stat(e){return r(this.vol,"fstat")(this.fd,e)}sync(){return r(this.vol,"fsync")(this.fd)}truncate(e){return r(this.vol,"ftruncate")(this.fd,e)}utimes(e,t){return r(this.vol,"futimes")(this.fd,e,t)}write(e,t,n,i){return r(this.vol,"write",t=>({bytesWritten:t,buffer:e}))(this.fd,e,t,n,i)}writeFile(e,t){return r(this.vol,"writeFile")(this.fd,e,t)}}t.FileHandle=n,t.default=function(e){return"undefined"==typeof Promise?null:{FileHandle:n,access:(t,n)=>r(e,"access")(t,n),appendFile:(t,i,s)=>r(e,"appendFile")(t instanceof n?t.fd:t,i,s),chmod:(t,n)=>r(e,"chmod")(t,n),chown:(t,n,i)=>r(e,"chown")(t,n,i),copyFile:(t,n,i)=>r(e,"copyFile")(t,n,i),lchmod:(t,n)=>r(e,"lchmod")(t,n),lchown:(t,n,i)=>r(e,"lchown")(t,n,i),link:(t,n)=>r(e,"link")(t,n),lstat:(t,n)=>r(e,"lstat")(t,n),mkdir:(t,n)=>r(e,"mkdir")(t,n),mkdtemp:(t,n)=>r(e,"mkdtemp")(t,n),open:(t,i,s)=>r(e,"open",t=>new n(e,t))(t,i,s),readdir:(t,n)=>r(e,"readdir")(t,n),readFile:(t,i)=>r(e,"readFile")(t instanceof n?t.fd:t,i),readlink:(t,n)=>r(e,"readlink")(t,n),realpath:(t,n)=>r(e,"realpath")(t,n),rename:(t,n)=>r(e,"rename")(t,n),rmdir:t=>r(e,"rmdir")(t),rm:(t,n)=>r(e,"rm")(t,n),stat:(t,n)=>r(e,"stat")(t,n),symlink:(t,n,i)=>r(e,"symlink")(t,n,i),truncate:(t,n)=>r(e,"truncate")(t,n),unlink:t=>r(e,"unlink")(t),utimes:(t,n,i)=>r(e,"utimes")(t,n,i),writeFile:(t,i,s)=>r(e,"writeFile")(t instanceof n?t.fd:t,i,s)}}},26913:function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),n="function"==typeof setImmediate?setImmediate.bind("undefined"!=typeof globalThis?globalThis:r.g):setTimeout.bind("undefined"!=typeof globalThis?globalThis:r.g),t.default=n},98919:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){let i=setTimeout.apply("undefined"!=typeof globalThis?globalThis:r.g,arguments);return i&&"object"==typeof i&&"function"==typeof i.unref&&i.unref(),i}},61299:function(e,t,r){"use strict";var n,i,s;Object.defineProperty(t,"__esModule",{value:!0}),t.FSWatcher=t.StatWatcher=t.Volume=t.toUnixTimestamp=t.bufferToEncoding=t.dataToBuffer=t.dataToStr=t.pathToSteps=t.filenameToSteps=t.pathToFilename=t.flagsToNumber=t.FLAGS=void 0;let o=r(1864),a=r(57718),l=r(65844),u=r(92764),c=r(1526),f=r(26913),h=r(44596),d=r(98919),_=r(79681),S=r(17994),p=r(17187),I=r(78988),E=r(2324),A=r(89539),y=r(71390),g=o.resolve,{O_RDONLY:T,O_WRONLY:m,O_RDWR:v,O_CREAT:R,O_EXCL:b,O_TRUNC:w,O_APPEND:O,O_SYNC:W,O_DIRECTORY:C,F_OK:N,COPYFILE_EXCL:L,COPYFILE_FICLONE_FORCE:F}=S.constants,{sep:D,relative:P,join:G,dirname:M}=o.posix?o.posix:o,k="win32"===h.default.platform,B={PATH_STR:"path must be a string or Buffer",FD:"fd must be a file descriptor",MODE_INT:"mode must be an int",CB:"callback must be a function",UID:"uid must be an unsigned int",GID:"gid must be an unsigned int"},H=e=>`Expected options to be either an object or a string, but got ${e} instead`,U="ENOENT",x="EBADF",j="EINVAL",Y="EEXIST",V="ENOTDIR",K="EMFILE",$="EACCES",z="EISDIR",q="ENOTEMPTY",X="ENOSYS",Z="ERR_FS_EISDIR";function J(e,t="",r="",n="",i=Error){let s=new i(function(e,t="",r="",n=""){let i="";switch(r&&(i=` '${r}'`),n&&(i+=` -> '${n}'`),e){case U:return`ENOENT: no such file or directory, ${t}${i}`;case x:return`EBADF: bad file descriptor, ${t}${i}`;case j:return`EINVAL: invalid argument, ${t}${i}`;case"EPERM":return`EPERM: operation not permitted, ${t}${i}`;case"EPROTO":return`EPROTO: protocol error, ${t}${i}`;case Y:return`EEXIST: file already exists, ${t}${i}`;case V:return`ENOTDIR: not a directory, ${t}${i}`;case z:return`EISDIR: illegal operation on a directory, ${t}${i}`;case $:return`EACCES: permission denied, ${t}${i}`;case q:return`ENOTEMPTY: directory not empty, ${t}${i}`;case K:return`EMFILE: too many open files, ${t}${i}`;case X:return`ENOSYS: function not implemented, ${t}${i}`;case Z:return`[ERR_FS_EISDIR]: Path is a directory: ${t} returned EISDIR (is a directory) ${r}`;default:return`${e}: error occurred, ${t}${i}`}}(e,t,r,n));return s.code=e,s}function Q(e){if("number"==typeof e)return e;if("string"==typeof e){let t=n[e];if(void 0!==t)return t}throw new E.TypeError("ERR_INVALID_OPT_VALUE","flags",e)}function ee(e,t){let r;if(!t)return e;{let n=typeof t;switch(n){case"string":r=Object.assign({},e,{encoding:t});break;case"object":r=Object.assign({},e,t);break;default:throw TypeError(H(n))}}return"buffer"!==r.encoding&&(0,I.assertEncoding)(r.encoding),r}function et(e){return t=>ee(e,t)}function er(e){if("function"!=typeof e)throw TypeError(B.CB);return e}function en(e){return(t,r)=>"function"==typeof t?[e(),t]:[e(t),er(r)]}(s=n=t.FLAGS||(t.FLAGS={}))[s.r=T]="r",s[s["r+"]=v]="r+",s[s.rs=T|W]="rs",s[s.sr=s.rs]="sr",s[s["rs+"]=v|W]="rs+",s[s["sr+"]=s["rs+"]]="sr+",s[s.w=m|R|w]="w",s[s.wx=m|R|w|b]="wx",s[s.xw=s.wx]="xw",s[s["w+"]=v|R|w]="w+",s[s["wx+"]=v|R|w|b]="wx+",s[s["xw+"]=s["wx+"]]="xw+",s[s.a=m|O|R]="a",s[s.ax=m|O|R|b]="ax",s[s.xa=s.ax]="xa",s[s["a+"]=v|O|R]="a+",s[s["ax+"]=v|O|R|b]="ax+",s[s["xa+"]=s["ax+"]]="xa+",t.flagsToNumber=Q;let ei={encoding:"utf8"},es=et(ei),eo=en(es),ea=et({flag:"r"}),el={encoding:"utf8",mode:438,flag:n[n.w]},eu=et(el),ec={encoding:"utf8",mode:438,flag:n[n.a]},ef=et(ec),eh=en(ef),ed=et(ei),e_=en(ed),eS={mode:511,recursive:!1},ep=e=>"number"==typeof e?Object.assign({},eS,{mode:e}):Object.assign({},eS,e),eI={recursive:!1},eE=e=>Object.assign({},eI,e),eA=en(et(ei)),ey=et({encoding:"utf8",withFileTypes:!1}),eg=en(ey),eT={bigint:!1},em=(e={})=>Object.assign({},eT,e),ev=(e,t)=>"function"==typeof e?[em(),e]:[em(e),er(t)];function eR(e){if("string"!=typeof e&&!c.Buffer.isBuffer(e)){try{if(!(e instanceof r(11987).URL))throw TypeError(B.PATH_STR)}catch(e){throw TypeError(B.PATH_STR)}e=function(e){if(""!==e.hostname)throw new E.TypeError("ERR_INVALID_FILE_URL_HOST",h.default.platform);let t=e.pathname;for(let e=0;e<t.length;e++)if("%"===t[e]){let r=32|t.codePointAt(e+2);if("2"===t[e+1]&&102===r)throw new E.TypeError("ERR_INVALID_FILE_URL_PATH","must not include encoded / characters")}return decodeURIComponent(t)}(e)}let t=String(e);return eC(t),t}t.pathToFilename=eR;let eb=(e,t=h.default.cwd())=>g(t,e);if(k){let e=eb,{unixify:t}=r(24290);eb=(r,n)=>t(e(r,n))}function ew(e,t){let r=eb(e,t).substr(1);return r?r.split(D):[]}function eO(e,t=I.ENCODING_UTF8){return c.Buffer.isBuffer(e)?e:e instanceof Uint8Array?(0,c.bufferFrom)(e):(0,c.bufferFrom)(String(e),t)}function eW(e,t){return t&&"buffer"!==t?e.toString(t):e}function eC(e,t){if(-1!==(""+e).indexOf("\0")){let e=Error("Path must be a string without null bytes");if(e.code=U,"function"!=typeof t)throw e;return h.default.nextTick(t,e),!1}return!0}function eN(e,t){let r="number"==typeof e?e:"string"==typeof e?parseInt(e,8):t?eN(t):void 0;if("number"!=typeof r||isNaN(r))throw TypeError(B.MODE_INT);return r}function eL(e){return e>>>0===e}function eF(e){if(!eL(e))throw TypeError(B.FD)}function eD(e){if("string"==typeof e&&+e==e)return+e;if(e instanceof Date)return e.getTime()/1e3;if(isFinite(e))return e<0?Date.now()/1e3:e;throw Error("Cannot parse time: "+e)}function eP(e){if("number"!=typeof e)throw TypeError(B.UID)}function eG(e){if("number"!=typeof e)throw TypeError(B.GID)}t.filenameToSteps=ew,t.pathToSteps=function(e){return ew(eR(e))},t.dataToStr=function(e,t=I.ENCODING_UTF8){return c.Buffer.isBuffer(e)?e.toString(t):e instanceof Uint8Array?(0,c.bufferFrom)(e).toString(t):String(e)},t.dataToBuffer=eO,t.bufferToEncoding=eW,t.toUnixTimestamp=eD;class eM{constructor(e={}){this.ino=0,this.inodes={},this.releasedInos=[],this.fds={},this.releasedFds=[],this.maxFiles=1e4,this.openFiles=0,this.promisesApi=(0,y.default)(this),this.statWatchers={},this.props=Object.assign({Node:a.Node,Link:a.Link,File:a.File},e);let t=this.createLink();t.setNode(this.createNode(!0));let r=this;this.StatWatcher=class extends eB{constructor(){super(r)}};let n=eH;this.ReadStream=class extends n{constructor(...e){super(r,...e)}};let i=ex;this.WriteStream=class extends i{constructor(...e){super(r,...e)}},this.FSWatcher=class extends ej{constructor(){super(r)}},this.root=t}static fromJSON(e,t){let r=new eM;return r.fromJSON(e,t),r}static fromNestedJSON(e,t){let r=new eM;return r.fromNestedJSON(e,t),r}get promises(){if(null===this.promisesApi)throw Error("Promise is not supported in this environment.");return this.promisesApi}createLink(e,t,r=!1,n){if(!e)return new this.props.Link(this,null,"");if(!t)throw Error("createLink: name cannot be empty");return e.createChild(t,this.createNode(r,n))}deleteLink(e){let t=e.parent;return!!t&&(t.deleteChild(e),!0)}newInoNumber(){return this.releasedInos.pop()||(this.ino=(this.ino+1)%4294967295,this.ino)}newFdNumber(){let e=this.releasedFds.pop();return"number"==typeof e?e:eM.fd--}createNode(e=!1,t){let r=new this.props.Node(this.newInoNumber(),t);return e&&r.setIsDirectory(),this.inodes[r.ino]=r,r}getNode(e){return this.inodes[e]}deleteNode(e){e.del(),delete this.inodes[e.ino],this.releasedInos.push(e.ino)}genRndStr(){let e=(Math.random()+1).toString(36).substr(2,6);return 6===e.length?e:this.genRndStr()}getLink(e){return this.root.walk(e)}getLinkOrThrow(e,t){let r=ew(e),n=this.getLink(r);if(!n)throw J(U,t,e);return n}getResolvedLink(e){let t="string"==typeof e?ew(e):e,r=this.root,n=0;for(;n<t.length;){let e=t[n];if(!(r=r.getChild(e)))return null;let i=r.getNode();if(i.isSymlink()){t=i.symlink.concat(t.slice(n+1)),r=this.root,n=0;continue}n++}return r}getResolvedLinkOrThrow(e,t){let r=this.getResolvedLink(e);if(!r)throw J(U,t,e);return r}resolveSymlinks(e){return this.getResolvedLink(e.steps.slice(1))}getLinkAsDirOrThrow(e,t){let r=this.getLinkOrThrow(e,t);if(!r.getNode().isDirectory())throw J(V,t,e);return r}getLinkParent(e){return this.root.walk(e,e.length-1)}getLinkParentAsDirOrThrow(e,t){let r=e instanceof Array?e:ew(e),n=this.getLinkParent(r);if(!n)throw J(U,t,D+r.join(D));if(!n.getNode().isDirectory())throw J(V,t,D+r.join(D));return n}getFileByFd(e){return this.fds[String(e)]}getFileByFdOrThrow(e,t){if(!eL(e))throw TypeError(B.FD);let r=this.getFileByFd(e);if(!r)throw J(x,t);return r}wrapAsync(e,t,r){er(r),(0,f.default)(()=>{let n;try{n=e.apply(this,t)}catch(e){r(e);return}r(null,n)})}_toJSON(e=this.root,t={},r){let n=!0,i=e.children;for(let s in e.getNode().isFile()&&(i={[e.getName()]:e.parent.getChild(e.getName())},e=e.parent),i){n=!1;let i=e.getChild(s);if(!i)throw Error("_toJSON: unexpected undefined");let o=i.getNode();if(o.isFile()){let e=i.getPath();r&&(e=P(r,e)),t[e]=o.getString()}else o.isDirectory()&&this._toJSON(i,t,r)}let s=e.getPath();return r&&(s=P(r,s)),s&&n&&(t[s]=null),t}toJSON(e,t={},r=!1){let n=[];if(e)for(let t of(e instanceof Array||(e=[e]),e)){let e=eR(t),r=this.getResolvedLink(e);r&&n.push(r)}else n.push(this.root);if(!n.length)return t;for(let e of n)this._toJSON(e,t,r?e.getPath():"");return t}fromJSON(e,t=h.default.cwd()){for(let r in e){let n=e[r];if(r=eb(r,t),"string"==typeof n){let e=M(r);this.mkdirpBase(e,511),this.writeFileSync(r,n)}else this.mkdirpBase(r,511)}}fromNestedJSON(e,t){this.fromJSON(function(e){let t={};return!function e(r,n){for(let i in n){let s=n[i],o=G(r,i);"string"==typeof s?t[o]=s:"object"==typeof s&&null!==s&&Object.keys(s).length>0?e(o,s):t[o]=null}}("",e),t}(e),t)}reset(){this.ino=0,this.inodes={},this.releasedInos=[],this.fds={},this.releasedFds=[],this.openFiles=0,this.root=this.createLink(),this.root.setNode(this.createNode(!0))}mountSync(e,t){this.fromJSON(t,e)}openLink(e,t,r=!0){if(this.openFiles>=this.maxFiles)throw J(K,"open",e.getPath());let n=e;if(r&&(n=this.resolveSymlinks(e)),!n)throw J(U,"open",e.getPath());let i=n.getNode();if(i.isDirectory()){if((t&(T|v|m))!==T)throw J(z,"open",e.getPath())}else if(t&C)throw J(V,"open",e.getPath());if(!(t&m)&&!i.canRead())throw J($,"open",e.getPath());let s=new this.props.File(e,i,t,this.newFdNumber());return this.fds[s.fd]=s,this.openFiles++,t&w&&s.truncate(),s}openFile(e,t,r,n=!0){let i=ew(e),s=n?this.getResolvedLink(i):this.getLink(i);if(s&&t&b)throw J(Y,"open",e);if(!s&&t&R){let e=this.getResolvedLink(i.slice(0,i.length-1));if(!e)throw J(U,"open",D+i.join(D));t&R&&"number"==typeof r&&(s=this.createLink(e,i[i.length-1],!1,r))}if(s)return this.openLink(s,t,n);throw J(U,"open",e)}openBase(e,t,r,n=!0){let i=this.openFile(e,t,r,n);if(!i)throw J(U,"open",e);return i.fd}openSync(e,t,r=438){let n=eN(r),i=eR(e),s=Q(t);return this.openBase(i,s,n)}open(e,t,r,n){let i=r,s=n;"function"==typeof r&&(i=438,s=r);let o=eN(i=i||438),a=eR(e),l=Q(t);this.wrapAsync(this.openBase,[a,l,o],s)}closeFile(e){this.fds[e.fd]&&(this.openFiles--,delete this.fds[e.fd],this.releasedFds.push(e.fd))}closeSync(e){eF(e);let t=this.getFileByFdOrThrow(e,"close");this.closeFile(t)}close(e,t){eF(e),this.wrapAsync(this.closeSync,[e],t)}openFileOrGetById(e,t,r){if("number"!=typeof e)return this.openFile(eR(e),t,r);{let t=this.fds[e];if(!t)throw J(U);return t}}readBase(e,t,r,n,i){return this.getFileByFdOrThrow(e).read(t,Number(r),Number(n),i)}readSync(e,t,r,n,i){return eF(e),this.readBase(e,t,r,n,i)}read(e,t,r,n,i,s){if(er(s),0===n)return h.default.nextTick(()=>{s&&s(null,0,t)});(0,f.default)(()=>{try{let o=this.readBase(e,t,r,n,i);s(null,o,t)}catch(e){s(e)}})}readFileBase(e,t,r){let n,i;let s="number"==typeof e&&eL(e);if(s)i=e;else{let r=ew(eR(e)),n=this.getResolvedLink(r);if(n&&n.getNode().isDirectory())throw J(z,"open",n.getPath());i=this.openSync(e,t)}try{n=eW(this.getFileByFdOrThrow(i).getBuffer(),r)}finally{s||this.closeSync(i)}return n}readFileSync(e,t){let r=ea(t),n=Q(r.flag);return this.readFileBase(e,n,r.encoding)}readFile(e,t,r){let[n,i]=en(ea)(t,r),s=Q(n.flag);this.wrapAsync(this.readFileBase,[e,s,n.encoding],i)}writeBase(e,t,r,n,i){return this.getFileByFdOrThrow(e,"write").write(t,r,n,i)}writeSync(e,t,r,n,i){let s,o,a,l;eF(e);let u="string"!=typeof t;u?(o=0|(r||0),a=n,l=i):(l=r,s=n);let c=eO(t,s);return u?void 0===a&&(a=c.length):(o=0,a=c.length),this.writeBase(e,c,o,a,l)}write(e,t,r,n,i,s){let o,a,l,u,c;eF(e);let h=typeof t,d=typeof r,_=typeof n,S=typeof i;"string"!==h?"function"===d?c=r:"function"===_?(o=0|r,c=n):"function"===S?(o=0|r,a=n,c=i):(o=0|r,a=n,l=i,c=s):"function"===d?c=r:"function"===_?(l=r,c=n):"function"===S&&(l=r,u=n,c=i);let p=eO(t,u);"string"!==h?void 0===a&&(a=p.length):(o=0,a=p.length);let I=er(c);(0,f.default)(()=>{try{let r=this.writeBase(e,p,o,a,l);"string"!==h?I(null,r,p):I(null,r,t)}catch(e){I(e)}})}writeFileBase(e,t,r,n){let i;let s="number"==typeof e;i=s?e:this.openBase(eR(e),r,n);let o=0,a=t.length,l=r&O?void 0:0;try{for(;a>0;){let e=this.writeSync(i,t,o,a,l);o+=e,a-=e,void 0!==l&&(l+=e)}}finally{s||this.closeSync(i)}}writeFileSync(e,t,r){let n=eu(r),i=Q(n.flag),s=eN(n.mode),o=eO(t,n.encoding);this.writeFileBase(e,o,i,s)}writeFile(e,t,r,n){let i=r,s=n;"function"==typeof r&&(i=el,s=r);let o=er(s),a=eu(i),l=Q(a.flag),u=eN(a.mode),c=eO(t,a.encoding);this.wrapAsync(this.writeFileBase,[e,c,l,u],o)}linkBase(e,t){let r=ew(e),n=this.getLink(r);if(!n)throw J(U,"link",e,t);let i=ew(t),s=this.getLinkParent(i);if(!s)throw J(U,"link",e,t);let o=i[i.length-1];if(s.getChild(o))throw J(Y,"link",e,t);let a=n.getNode();a.nlink++,s.createChild(o,a)}copyFileBase(e,t,r){let i=this.readFileSync(e);if(r&L&&this.existsSync(t))throw J(Y,"copyFile",e,t);if(r&F)throw J(X,"copyFile",e,t);this.writeFileBase(t,i,n.w,438)}copyFileSync(e,t,r){let n=eR(e),i=eR(t);return this.copyFileBase(n,i,0|(r||0))}copyFile(e,t,r,n){let i,s;let o=eR(e),a=eR(t);"function"==typeof r?(i=0,s=r):(i=r,s=n),er(s),this.wrapAsync(this.copyFileBase,[o,a,i],s)}linkSync(e,t){let r=eR(e),n=eR(t);this.linkBase(r,n)}link(e,t,r){let n=eR(e),i=eR(t);this.wrapAsync(this.linkBase,[n,i],r)}unlinkBase(e){let t=ew(e),r=this.getLink(t);if(!r)throw J(U,"unlink",e);if(r.length)throw Error("Dir not empty...");this.deleteLink(r);let n=r.getNode();n.nlink--,n.nlink<=0&&this.deleteNode(n)}unlinkSync(e){let t=eR(e);this.unlinkBase(t)}unlink(e,t){let r=eR(e);this.wrapAsync(this.unlinkBase,[r],t)}symlinkBase(e,t){let r=ew(t),n=this.getLinkParent(r);if(!n)throw J(U,"symlink",e,t);let i=r[r.length-1];if(n.getChild(i))throw J(Y,"symlink",e,t);let s=n.createChild(i);return s.getNode().makeSymlink(ew(e)),s}symlinkSync(e,t,r){let n=eR(e),i=eR(t);this.symlinkBase(n,i)}symlink(e,t,r,n){let i=er("function"==typeof r?r:n),s=eR(e),o=eR(t);this.wrapAsync(this.symlinkBase,[s,o],i)}realpathBase(e,t){let r=ew(e),n=this.getResolvedLink(r);if(!n)throw J(U,"realpath",e);let i=n.getPath();return(0,I.strToEncoding)(i||"/",t)}realpathSync(e,t){return this.realpathBase(eR(e),ed(t).encoding)}realpath(e,t,r){let[n,i]=e_(t,r),s=eR(e);this.wrapAsync(this.realpathBase,[s,n.encoding],i)}lstatBase(e,t=!1,r=!1){let n=this.getLink(ew(e));if(n)return l.default.build(n.getNode(),t);if(r)throw J(U,"lstat",e)}lstatSync(e,t){let{throwIfNoEntry:r=!0,bigint:n=!1}=em(t);return this.lstatBase(eR(e),n,r)}lstat(e,t,r){let[{throwIfNoEntry:n=!0,bigint:i=!1},s]=ev(t,r);this.wrapAsync(this.lstatBase,[eR(e),i,n],s)}statBase(e,t=!1,r=!0){let n=this.getResolvedLink(ew(e));if(n)return l.default.build(n.getNode(),t);if(r)throw J(U,"stat",e)}statSync(e,t){let{bigint:r=!0,throwIfNoEntry:n=!0}=em(t);return this.statBase(eR(e),r,n)}stat(e,t,r){let[{bigint:n=!1,throwIfNoEntry:i=!0},s]=ev(t,r);this.wrapAsync(this.statBase,[eR(e),n,i],s)}fstatBase(e,t=!1){let r=this.getFileByFd(e);if(!r)throw J(x,"fstat");return l.default.build(r.node,t)}fstatSync(e,t){return this.fstatBase(e,em(t).bigint)}fstat(e,t,r){let[n,i]=ev(t,r);this.wrapAsync(this.fstatBase,[e,n.bigint],i)}renameBase(e,t){let r=this.getLink(ew(e));if(!r)throw J(U,"rename",e,t);let n=ew(t),i=this.getLinkParent(n);if(!i)throw J(U,"rename",e,t);let s=r.parent;s&&s.deleteChild(r);let o=n[n.length-1];r.name=o,r.steps=[...i.steps,o],i.setChild(r.getName(),r)}renameSync(e,t){let r=eR(e),n=eR(t);this.renameBase(r,n)}rename(e,t,r){let n=eR(e),i=eR(t);this.wrapAsync(this.renameBase,[n,i],r)}existsBase(e){return!!this.statBase(e)}existsSync(e){try{return this.existsBase(eR(e))}catch(e){return!1}}exists(e,t){let r=eR(e);if("function"!=typeof t)throw Error(B.CB);(0,f.default)(()=>{try{t(this.existsBase(r))}catch(e){t(!1)}})}accessBase(e,t){this.getLinkOrThrow(e,"access")}accessSync(e,t=N){let r=eR(e);t|=0,this.accessBase(r,t)}access(e,t,r){let n,i=N;"function"!=typeof t?(i=0|t,n=er(r)):n=t;let s=eR(e);this.wrapAsync(this.accessBase,[s,i],n)}appendFileSync(e,t,r=ec){let n=ef(r);(!n.flag||eL(e))&&(n.flag="a"),this.writeFileSync(e,t,n)}appendFile(e,t,r,n){let[i,s]=eh(r,n);(!i.flag||eL(e))&&(i.flag="a"),this.writeFile(e,t,i,s)}readdirBase(e,t){let r=ew(e),n=this.getResolvedLink(r);if(!n)throw J(U,"readdir",e);if(!n.getNode().isDirectory())throw J(V,"scandir",e);if(t.withFileTypes){let e=[];for(let r in n.children){let i=n.getChild(r);i&&e.push(u.default.build(i,t.encoding))}return k||"buffer"===t.encoding||e.sort((e,t)=>e.name<t.name?-1:e.name>t.name?1:0),e}let i=[];for(let e in n.children)i.push((0,I.strToEncoding)(e,t.encoding));return k||"buffer"===t.encoding||i.sort(),i}readdirSync(e,t){let r=ey(t),n=eR(e);return this.readdirBase(n,r)}readdir(e,t,r){let[n,i]=eg(t,r),s=eR(e);this.wrapAsync(this.readdirBase,[s,n],i)}readlinkBase(e,t){let r=this.getLinkOrThrow(e,"readlink").getNode();if(!r.isSymlink())throw J(j,"readlink",e);let n=D+r.symlink.join(D);return(0,I.strToEncoding)(n,t)}readlinkSync(e,t){let r=es(t),n=eR(e);return this.readlinkBase(n,r.encoding)}readlink(e,t,r){let[n,i]=eo(t,r),s=eR(e);this.wrapAsync(this.readlinkBase,[s,n.encoding],i)}fsyncBase(e){this.getFileByFdOrThrow(e,"fsync")}fsyncSync(e){this.fsyncBase(e)}fsync(e,t){this.wrapAsync(this.fsyncBase,[e],t)}fdatasyncBase(e){this.getFileByFdOrThrow(e,"fdatasync")}fdatasyncSync(e){this.fdatasyncBase(e)}fdatasync(e,t){this.wrapAsync(this.fdatasyncBase,[e],t)}ftruncateBase(e,t){this.getFileByFdOrThrow(e,"ftruncate").truncate(t)}ftruncateSync(e,t){this.ftruncateBase(e,t)}ftruncate(e,t,r){let n="number"==typeof t?t:0,i=er("number"==typeof t?r:t);this.wrapAsync(this.ftruncateBase,[e,n],i)}truncateBase(e,t){let r=this.openSync(e,"r+");try{this.ftruncateSync(r,t)}finally{this.closeSync(r)}}truncateSync(e,t){if(eL(e))return this.ftruncateSync(e,t);this.truncateBase(e,t)}truncate(e,t,r){let n="number"==typeof t?t:0,i=er("number"==typeof t?r:t);if(eL(e))return this.ftruncate(e,n,i);this.wrapAsync(this.truncateBase,[e,n],i)}futimesBase(e,t,r){let n=this.getFileByFdOrThrow(e,"futimes").node;n.atime=new Date(1e3*t),n.mtime=new Date(1e3*r)}futimesSync(e,t,r){this.futimesBase(e,eD(t),eD(r))}futimes(e,t,r,n){this.wrapAsync(this.futimesBase,[e,eD(t),eD(r)],n)}utimesBase(e,t,r){let n=this.openSync(e,"r");try{this.futimesBase(n,t,r)}finally{this.closeSync(n)}}utimesSync(e,t,r){this.utimesBase(eR(e),eD(t),eD(r))}utimes(e,t,r,n){this.wrapAsync(this.utimesBase,[eR(e),eD(t),eD(r)],n)}mkdirBase(e,t){let r=ew(e);if(!r.length)throw J(Y,"mkdir",e);let n=this.getLinkParentAsDirOrThrow(e,"mkdir"),i=r[r.length-1];if(n.getChild(i))throw J(Y,"mkdir",e);n.createChild(i,this.createNode(!0,t))}mkdirpBase(e,t){let r=ew(e),n=this.root;for(let e=0;e<r.length;e++){let i=r[e];if(!n.getNode().isDirectory())throw J(V,"mkdir",n.getPath());let s=n.getChild(i);if(s){if(s.getNode().isDirectory())n=s;else throw J(V,"mkdir",s.getPath())}else n=n.createChild(i,this.createNode(!0,t))}}mkdirSync(e,t){let r=ep(t),n=eN(r.mode,511),i=eR(e);r.recursive?this.mkdirpBase(i,n):this.mkdirBase(i,n)}mkdir(e,t,r){let n=ep(t),i=er("function"==typeof t?t:r),s=eN(n.mode,511),o=eR(e);n.recursive?this.wrapAsync(this.mkdirpBase,[o,s],i):this.wrapAsync(this.mkdirBase,[o,s],i)}mkdirpSync(e,t){this.mkdirSync(e,{mode:t,recursive:!0})}mkdirp(e,t,r){let n="function"==typeof t?void 0:t,i=er("function"==typeof t?t:r);this.mkdir(e,{mode:n,recursive:!0},i)}mkdtempBase(e,t,r=5){let n=e+this.genRndStr();try{return this.mkdirBase(n,511),(0,I.strToEncoding)(n,t)}catch(n){if(n.code===Y){if(r>1)return this.mkdtempBase(e,t,r-1);throw Error("Could not create temp dir.")}throw n}}mkdtempSync(e,t){let{encoding:r}=es(t);if(!e||"string"!=typeof e)throw TypeError("filename prefix is required");return eC(e),this.mkdtempBase(e,r)}mkdtemp(e,t,r){let[{encoding:n},i]=eo(t,r);if(!e||"string"!=typeof e)throw TypeError("filename prefix is required");eC(e)&&this.wrapAsync(this.mkdtempBase,[e,n],i)}rmdirBase(e,t){let r=eE(t),n=this.getLinkAsDirOrThrow(e,"rmdir");if(n.length&&!r.recursive)throw J(q,"rmdir",e);this.deleteLink(n)}rmdirSync(e,t){this.rmdirBase(eR(e),t)}rmdir(e,t,r){let n=eE(t),i=er("function"==typeof t?t:r);this.wrapAsync(this.rmdirBase,[eR(e),n],i)}rmBase(e,t={}){let r=this.getResolvedLink(e);if(!r){if(!t.force)throw J(U,"stat",e);return}if(r.getNode().isDirectory()&&!t.recursive)throw J(Z,"rm",e);this.deleteLink(r)}rmSync(e,t){this.rmBase(eR(e),t)}rm(e,t,r){let[n,i]=eA(t,r);this.wrapAsync(this.rmBase,[eR(e),n],i)}fchmodBase(e,t){this.getFileByFdOrThrow(e,"fchmod").chmod(t)}fchmodSync(e,t){this.fchmodBase(e,eN(t))}fchmod(e,t,r){this.wrapAsync(this.fchmodBase,[e,eN(t)],r)}chmodBase(e,t){let r=this.openSync(e,"r");try{this.fchmodBase(r,t)}finally{this.closeSync(r)}}chmodSync(e,t){let r=eN(t),n=eR(e);this.chmodBase(n,r)}chmod(e,t,r){let n=eN(t),i=eR(e);this.wrapAsync(this.chmodBase,[i,n],r)}lchmodBase(e,t){let r=this.openBase(e,v,0,!1);try{this.fchmodBase(r,t)}finally{this.closeSync(r)}}lchmodSync(e,t){let r=eN(t),n=eR(e);this.lchmodBase(n,r)}lchmod(e,t,r){let n=eN(t),i=eR(e);this.wrapAsync(this.lchmodBase,[i,n],r)}fchownBase(e,t,r){this.getFileByFdOrThrow(e,"fchown").chown(t,r)}fchownSync(e,t,r){eP(t),eG(r),this.fchownBase(e,t,r)}fchown(e,t,r,n){eP(t),eG(r),this.wrapAsync(this.fchownBase,[e,t,r],n)}chownBase(e,t,r){this.getResolvedLinkOrThrow(e,"chown").getNode().chown(t,r)}chownSync(e,t,r){eP(t),eG(r),this.chownBase(eR(e),t,r)}chown(e,t,r,n){eP(t),eG(r),this.wrapAsync(this.chownBase,[eR(e),t,r],n)}lchownBase(e,t,r){this.getLinkOrThrow(e,"lchown").getNode().chown(t,r)}lchownSync(e,t,r){eP(t),eG(r),this.lchownBase(eR(e),t,r)}lchown(e,t,r,n){eP(t),eG(r),this.wrapAsync(this.lchownBase,[eR(e),t,r],n)}watchFile(e,t,r){let n=eR(e),i=t,s=r;if("function"==typeof i&&(s=t,i=null),"function"!=typeof s)throw Error('"watchFile()" requires a listener function');let o=5007,a=!0;i&&"object"==typeof i&&("number"==typeof i.interval&&(o=i.interval),"boolean"==typeof i.persistent&&(a=i.persistent));let l=this.statWatchers[n];return l||((l=new this.StatWatcher).start(n,a,o),this.statWatchers[n]=l),l.addListener("change",s),l}unwatchFile(e,t){let r=eR(e),n=this.statWatchers[r];n&&("function"==typeof t?n.removeListener("change",t):n.removeAllListeners("change"),0===n.listenerCount("change")&&(n.stop(),delete this.statWatchers[r]))}createReadStream(e,t){return new this.ReadStream(e,t)}createWriteStream(e,t){return new this.WriteStream(e,t)}watch(e,t,r){let n=eR(e),i=t;"function"==typeof t&&(r=t,i=null);let{persistent:s,recursive:o,encoding:a}=es(i);void 0===s&&(s=!0),void 0===o&&(o=!1);let l=new this.FSWatcher;return l.start(n,s,o,a),r&&l.addListener("change",r),l}}function ek(e){e.emit("stop")}t.Volume=eM,eM.fd=2147483647;class eB extends p.EventEmitter{constructor(e){super(),this.onInterval=()=>{try{let e=this.vol.statSync(this.filename);this.hasChanged(e)&&(this.emit("change",e,this.prev),this.prev=e)}finally{this.loop()}},this.vol=e}loop(){this.timeoutRef=this.setTimeout(this.onInterval,this.interval)}hasChanged(e){return e.mtimeMs>this.prev.mtimeMs||e.nlink!==this.prev.nlink}start(e,t=!0,n=5007){this.filename=eR(e),this.setTimeout=t?setTimeout.bind("undefined"!=typeof globalThis?globalThis:r.g):d.default,this.interval=n,this.prev=this.vol.statSync(this.filename),this.loop()}stop(){clearTimeout(this.timeoutRef),h.default.nextTick(ek,this)}}function eH(e,t,r){if(!(this instanceof eH))return new eH(e,t,r);if(this._vol=e,void 0===(r=Object.assign({},ee(r,{}))).highWaterMark&&(r.highWaterMark=65536),_.Readable.call(this,r),this.path=eR(t),this.fd=void 0===r.fd?null:r.fd,this.flags=void 0===r.flags?"r":r.flags,this.mode=void 0===r.mode?438:r.mode,this.start=r.start,this.end=r.end,this.autoClose=void 0===r.autoClose||r.autoClose,this.pos=void 0,this.bytesRead=0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError('"start" option must be a Number');if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError('"end" option must be a Number');if(this.start>this.end)throw Error('"start" option must be <= "end" option');this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.on("end",function(){this.autoClose&&this.destroy&&this.destroy()})}function eU(e){this.close()}function ex(e,t,r){if(!(this instanceof ex))return new ex(e,t,r);if(this._vol=e,r=Object.assign({},ee(r,{})),_.Writable.call(this,r),this.path=eR(t),this.fd=void 0===r.fd?null:r.fd,this.flags=void 0===r.flags?"w":r.flags,this.mode=void 0===r.mode?438:r.mode,this.start=r.start,this.autoClose=void 0===r.autoClose||!!r.autoClose,this.pos=void 0,this.bytesWritten=0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError('"start" option must be a Number');if(this.start<0)throw Error('"start" must be >= zero');this.pos=this.start}r.encoding&&this.setDefaultEncoding(r.encoding),"number"!=typeof this.fd&&this.open(),this.once("finish",function(){this.autoClose&&this.close()})}t.StatWatcher=eB,A.inherits(eH,_.Readable),t.ReadStream=eH,eH.prototype.open=function(){var e=this;this._vol.open(this.path,this.flags,this.mode,(t,r)=>{if(t){e.autoClose&&e.destroy&&e.destroy(),e.emit("error",t);return}e.fd=r,e.emit("open",r),e.read()})},eH.prototype._read=function(e){if("number"!=typeof this.fd)return this.once("open",function(){this._read(e)});if(!this.destroyed){if(!i||i.length-i.used<128){var t;t=this._readableState.highWaterMark,(i=(0,c.bufferAllocUnsafe)(t)).used=0}var r=i,n=Math.min(i.length-i.used,e),s=i.used;if(void 0!==this.pos&&(n=Math.min(this.end-this.pos+1,n)),n<=0)return this.push(null);var o=this;this._vol.read(this.fd,i,i.used,n,this.pos,function(e,t){if(e)o.autoClose&&o.destroy&&o.destroy(),o.emit("error",e);else{var n=null;t>0&&(o.bytesRead+=t,n=r.slice(s,s+t)),o.push(n)}}),void 0!==this.pos&&(this.pos+=n),i.used+=n}},eH.prototype._destroy=function(e,t){this.close(r=>{t(e||r)})},eH.prototype.close=function(e){if(e&&this.once("close",e),this.closed||"number"!=typeof this.fd){if("number"!=typeof this.fd){this.once("open",eU);return}return h.default.nextTick(()=>this.emit("close"))}"boolean"==typeof this._readableState?.closed?this._readableState.closed=!0:this.closed=!0,this._vol.close(this.fd,e=>{e?this.emit("error",e):this.emit("close")}),this.fd=null},A.inherits(ex,_.Writable),t.WriteStream=ex,ex.prototype.open=function(){this._vol.open(this.path,this.flags,this.mode,(function(e,t){if(e){this.autoClose&&this.destroy&&this.destroy(),this.emit("error",e);return}this.fd=t,this.emit("open",t)}).bind(this))},ex.prototype._write=function(e,t,r){if(!(e instanceof c.Buffer||e instanceof Uint8Array))return this.emit("error",Error("Invalid data"));if("number"!=typeof this.fd)return this.once("open",function(){this._write(e,t,r)});var n=this;this._vol.write(this.fd,e,0,e.length,this.pos,(e,t)=>{if(e)return n.autoClose&&n.destroy&&n.destroy(),r(e);n.bytesWritten+=t,r()}),void 0!==this.pos&&(this.pos+=e.length)},ex.prototype._writev=function(e,t){if("number"!=typeof this.fd)return this.once("open",function(){this._writev(e,t)});let r=this,n=e.length,i=Array(n);for(var s=0,o=0;o<n;o++){var a=e[o].chunk;i[o]=a,s+=a.length}let l=c.Buffer.concat(i);this._vol.write(this.fd,l,0,l.length,this.pos,(e,n)=>{if(e)return r.destroy&&r.destroy(),t(e);r.bytesWritten+=n,t()}),void 0!==this.pos&&(this.pos+=s)},ex.prototype.close=function(e){if(e&&this.once("close",e),this.closed||"number"!=typeof this.fd){if("number"!=typeof this.fd){this.once("open",eU);return}return h.default.nextTick(()=>this.emit("close"))}"boolean"==typeof this._writableState?.closed?this._writableState.closed=!0:this.closed=!0,this._vol.close(this.fd,e=>{e?this.emit("error",e):this.emit("close")}),this.fd=null},ex.prototype._destroy=eH.prototype._destroy,ex.prototype.destroySoon=ex.prototype.end;class ej extends p.EventEmitter{constructor(e){super(),this._filename="",this._filenameEncoded="",this._recursive=!1,this._encoding=I.ENCODING_UTF8,this._onNodeChange=()=>{this._emit("change")},this._onParentChild=e=>{e.getName()===this._getName()&&this._emit("rename")},this._emit=e=>{this.emit("change",e,this._filenameEncoded)},this._persist=()=>{this._timer=setTimeout(this._persist,1e6)},this._vol=e}_getName(){return this._steps[this._steps.length-1]}start(e,t=!0,r=!1,n=I.ENCODING_UTF8){this._filename=eR(e),this._steps=ew(this._filename),this._filenameEncoded=(0,I.strToEncoding)(this._filename),this._recursive=r,this._encoding=n;try{this._link=this._vol.getLinkOrThrow(this._filename,"FSWatcher")}catch(t){let e=Error(`watch ${this._filename} ${t.code}`);throw e.code=t.code,e.errno=t.code,e}this._link.getNode().on("change",this._onNodeChange),this._link.on("child:add",this._onNodeChange),this._link.on("child:delete",this._onNodeChange);let i=this._link.parent;i&&(i.setMaxListeners(i.getMaxListeners()+1),i.on("child:delete",this._onParentChild)),t&&this._persist()}close(){clearTimeout(this._timer),this._link.getNode().removeListener("change",this._onNodeChange);let e=this._link.parent;e&&e.removeListener("child:delete",this._onParentChild)}}t.FSWatcher=ej},14539:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ufs=t.Union=void 0;var n=r(9806);t.Union=n.Union,t.ufs=new n.Union,t.default=t.ufs},9806:function(e,t,r){"use strict";var n=r(48764).Buffer,i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,a)}l((n=n.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},a=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,s=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}return o};Object.defineProperty(t,"__esModule",{value:!0}),t.Union=void 0;var l=r(79681),u=r(35659),c=u.fsAsyncMethods,f=u.fsSyncMethods,h=new Set(["existsSync","readdir","readdirSync","createReadStream","createWriteStream","watch","watchFile","unwatchFile"]),d=new Set(["ENOTDIR","EEXIST"]),_=["access","copyFile","open","opendir","rename","truncate","rmdir","mkdir","readdir","readlink","symlink","lstat","stat","link","unlink","chmod","lchmod","lchown","chown","utimes","realpath","mkdtemp","writeFile","appendFile","readFile"],S=function(){function e(){var e,t,r,u,S,p,I,E,A=this;this.fss=[],this.ReadStream=l.Readable,this.WriteStream=l.Writable,this.promises={},this.unwatchFile=function(){for(var e,t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{for(var i=o(A.fss),s=i.next();!s.done;s=i.next()){var a=s.value;try{a.unwatchFile.apply(a,r)}catch(e){}}}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},this.watch=function(){for(var e,t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=[];try{for(var s=o(A.fss),l=s.next();!l.done;l=s.next()){var u=l.value;try{var c=u.watch.apply(u,r);i.push(c)}catch(e){}}}catch(t){e={error:t}}finally{try{l&&!l.done&&(t=s.return)&&t.call(s)}finally{if(e)throw e.error}}return new Proxy({},{get:function(e,t){var r,n,s,l=[];try{for(var u=o(i),c=u.next();!c.done;c=u.next()){var f=c.value;s=f[t],"function"==typeof s&&l.push([f,s])}}catch(e){r={error:e}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}return l.length?function(){for(var e,t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{for(var i=o(l),s=i.next();!s.done;s=i.next()){var u=a(s.value,2),c=u[0];u[1].apply(c,r)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}}:s}})},this.watchFile=function(){for(var e,t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{for(var i=o(A.fss),s=i.next();!s.done;s=i.next()){var a=s.value;try{a.watchFile.apply(a,r)}catch(e){}}}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},this.existsSync=function(e){var t,r;try{for(var n=o(A.fss),i=n.next();!i.done;i=n.next()){var s=i.value;try{if(s.existsSync(e))return!0}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return!1},this.readdir=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e.length-1,n=e[r];"function"!=typeof n&&(n=null,r++);var i=null,s=new Map,a=!1,l=function(t,u){if(void 0===t&&(t=0),u){if(d.has(u.code)){n&&n(u);return}u.prev=i,i=u}if(t>=A.fss.length){n&&(a?n(null,A.sortedArrayFromReaddirResult(s)):n(u||Error("No file systems attached.")));return}e[r]=function(e,r){var i,c;if(e||(a=!0),0===s.size&&e)return l(t+1,e);if(r)try{for(var f=o(r),h=f.next();!h.done;h=f.next()){var d=h.value;s.set(A.pathFromReaddirEntry(d),d)}}catch(e){i={error:e}}finally{try{h&&!h.done&&(c=f.return)&&c.call(f)}finally{if(i)throw i.error}}return t===A.fss.length-1?n(null,A.sortedArrayFromReaddirResult(s)):l(t+1,u)};var c=A.fss.length-t-1,f=A.fss[c],h=f.readdir;h?h.apply(f,e):l(t+1,Error("Method not supported: readdir"))};l()},this.readdirSync=function(){for(var e,t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var i=null,s=new Map,a=!1,l=A.fss.length-1;l>=0;l--){var u=A.fss[l];try{if(!u.readdirSync)throw Error('Method not supported: "readdirSync" with args "'.concat(r,'"'));try{for(var c=(e=void 0,o(u.readdirSync.apply(u,r))),f=c.next();!f.done;f=c.next()){var h=f.value;s.set(A.pathFromReaddirEntry(h),h)}}catch(t){e={error:t}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}a=!0}catch(e){if(d.has(e.code)||(e.prev=i,i=e,!l&&!a))throw e}}return A.sortedArrayFromReaddirResult(s)},this.readdirPromise=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(A,void 0,void 0,function(){var t,r,n,i,a,l,u,c,f,h;return s(this,function(s){switch(s.label){case 0:t=null,r=new Map,n=this.fss.length-1,s.label=1;case 1:if(!(n>=0))return[3,13];i=this.fss[n],s.label=2;case 2:if(s.trys.push([2,11,,12]),!i.promises||!i.promises.readdir)throw Error('Method not supported: "readdirSync" with args "'.concat(e,'"'));s.label=3;case 3:return s.trys.push([3,8,9,10]),f=void 0,[4,i.promises.readdir.apply(i,e)];case 4:l=(a=o.apply(void 0,[s.sent()])).next(),s.label=5;case 5:if(l.done)return[3,7];u=l.value,r.set(this.pathFromReaddirEntry(u),u),s.label=6;case 6:return l=a.next(),[3,5];case 7:return[3,10];case 8:return f={error:s.sent()},[3,10];case 9:try{l&&!l.done&&(h=a.return)&&h.call(a)}finally{if(f)throw f.error}return[7];case 10:return[3,12];case 11:if((c=s.sent()).prev=t,t=c,0===r.size&&!n)throw c;return[3,12];case 12:return n--,[3,1];case 13:return[2,this.sortedArrayFromReaddirResult(r)]}})})},this.pathFromReaddirEntry=function(e){return e instanceof n||"string"==typeof e?String(e):e.name},this.sortedArrayFromReaddirResult=function(e){var t,r,n=[];try{for(var i=o(Array.from(e.keys()).sort()),s=i.next();!s.done;s=i.next()){var a=s.value,l=e.get(a);void 0!==l&&n.push(l)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n},this.createReadStream=function(e){var t,r,n=null;try{for(var i=o(A.fss),s=i.next();!s.done;s=i.next()){var a=s.value;try{if(!a.createReadStream)throw Error('Method not supported: "createReadStream"');if(a.existsSync&&!a.existsSync(e))throw Error('file "'.concat(e,'" does not exists'));var l=a.createReadStream(e);if(!l)throw Error("no valid stream");return A.ReadStream=a.ReadStream,l}catch(e){n=e}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}throw n},this.createWriteStream=function(e){var t,r,n=null;try{for(var i=o(A.fss),s=i.next();!s.done;s=i.next()){var a=s.value;try{if(!a.createWriteStream)throw Error('Method not supported: "createWriteStream"');a.statSync(e);var l=a.createWriteStream(e);if(!l)throw Error("no valid stream");return A.WriteStream=a.WriteStream,l}catch(e){n=e}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}throw n};var y=function(e){h.has(e)||(g[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return A.syncMethod(e,t)})},g=this;try{for(var T=o(f),m=T.next();!m.done;m=T.next()){var v=m.value;y(v)}}catch(t){e={error:t}}finally{try{m&&!m.done&&(t=T.return)&&t.call(T)}finally{if(e)throw e.error}}var R=function(e){h.has(e)||(b[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return A.asyncMethod(e,t)})},b=this;try{for(var w=o(c),O=w.next();!O.done;O=w.next()){var v=O.value;R(v)}}catch(e){r={error:e}}finally{try{O&&!O.done&&(u=w.return)&&u.call(w)}finally{if(r)throw r.error}}var W=function(e){if("readdir"===e)return C.promises[e]=C.readdirPromise,"continue";C.promises[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return A.promiseMethod(e,t)}},C=this;try{for(var N=o(_),L=N.next();!L.done;L=N.next()){var v=L.value;W(v)}}catch(e){S={error:e}}finally{try{L&&!L.done&&(p=N.return)&&p.call(N)}finally{if(S)throw S.error}}try{for(var F=o(h.values()),D=F.next();!D.done;D=F.next()){var v=D.value;this[v]=this[v].bind(this)}}catch(e){I={error:e}}finally{try{D&&!D.done&&(E=F.return)&&E.call(F)}finally{if(I)throw I.error}}}return e.prototype.use=function(e){return this.fss.push(e),this},e.prototype.syncMethod=function(e,t){for(var r=null,n=this.fss.length-1;n>=0;n--){var i=this.fss[n];try{if(!i[e])throw Error('Method not supported: "'.concat(e,'" with args "').concat(t,'"'));return i[e].apply(i,t)}catch(e){if(d.has(e.code)||(e.prev=r,r=e,!n))throw e}}},e.prototype.asyncMethod=function(e,t){var r=this,n=t.length-1,i=t[n];"function"!=typeof i&&(i=null,n++);var s=null,o=function(a,l){if(void 0===a&&(a=0),null!=l&&d.has(null==l?void 0:l.code)){i&&i(l);return}if(l&&(l.prev=s,s=l),a>=r.fss.length){i&&i(l||Error("No file systems attached."));return}t[n]=function(e){if(e)return o(a+1,e);i&&i.apply(i,arguments)};var u=r.fss.length-a-1,c=r.fss[u],f=c[e];f?f.apply(c,t):o(a+1,Error("Method not supported: "+e))};o()},e.prototype.promiseMethod=function(e,t){return i(this,void 0,void 0,function(){var r,n,i,o;return s(this,function(s){switch(s.label){case 0:r=null,n=this.fss.length-1,s.label=1;case 1:if(!(n>=0))return[3,6];i=this.fss[n].promises,s.label=2;case 2:if(s.trys.push([2,4,,5]),!i||!i[e])throw Error('Promise of method not supported: "'.concat(String(e),'" with args "').concat(t,'"'));return[4,i[e].apply(i,t)];case 3:return[2,s.sent()];case 4:if((o=s.sent()).prev=r,r=o,!n)throw o;return[3,5];case 5:return n--,[3,1];case 6:return[2]}})})},e}();t.Union=S},48583:function(e,t,r){"use strict";var n=r(38399)();/*!
//  * The buffer module from node.js, for the browser.
//  *
//  * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
//  * @license  MIT
//  */function i(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0}function s(e){return r.g.Buffer&&"function"==typeof r.g.Buffer.isBuffer?r.g.Buffer.isBuffer(e):!!(null!=e&&e._isBuffer)}var o=r(89539),a=Object.prototype.hasOwnProperty,l=Array.prototype.slice,u="foo"===(function(){}).name;function c(e){return Object.prototype.toString.call(e)}function f(e){return!s(e)&&"function"==typeof r.g.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&!!(e instanceof DataView||e.buffer&&e.buffer instanceof ArrayBuffer))}var h=e.exports=E,d=/\s*function\s+([^\(\s]*)\s*/;function _(e){if(o.isFunction(e)){if(u)return e.name;var t=e.toString().match(d);return t&&t[1]}}function S(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function p(e){if(u||!o.isFunction(e))return o.inspect(e);var t=_(e);return"[Function"+(t?": "+t:"")+"]"}function I(e,t,r,n,i){throw new h.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function E(e,t){e||I(e,!0,t,"==",h.ok)}function A(e,t,r,n){if(e===t)return!0;if(s(e)&&s(t))return 0===i(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if((null===e||"object"!=typeof e)&&(null===t||"object"!=typeof t))return r?e===t:e==t;if(f(e)&&f(t)&&c(e)===c(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(s(e)!==s(t))return!1;var a=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return -1!==a&&a===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),function(e,t,r,n){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i,s,a=y(e),u=y(t);if(a&&!u||!a&&u)return!1;if(a)return A(e=l.call(e),t=l.call(t),r);var c=m(e),f=m(t);if(c.length!==f.length)return!1;for(c.sort(),f.sort(),s=c.length-1;s>=0;s--)if(c[s]!==f[s])return!1;for(s=c.length-1;s>=0;s--)if(!A(e[i=c[s]],t[i],r,n))return!1;return!0}(e,t,r,n))}function y(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function g(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function T(e,t,r,n){if("function"!=typeof t)throw TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=function(e){var t;try{e()}catch(e){t=e}return t}(t),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&I(i,r,"Missing expected exception"+n);var i,s="string"==typeof n,a=!e&&o.isError(i),l=!e&&i&&!r;if((a&&s&&g(i,r)||l)&&I(i,r,"Got unwanted exception"+n),e&&i&&r&&!g(i,r)||!e&&i)throw i}h.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=S(p(this.actual),128)+" "+this.operator+" "+S(p(this.expected),128),this.generatedMessage=!0);var t=e.stackStartFunction||I;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var r=Error();if(r.stack){var n=r.stack,i=_(t),s=n.indexOf("\n"+i);if(s>=0){var o=n.indexOf("\n",s+1);n=n.substring(o+1)}this.stack=n}}},o.inherits(h.AssertionError,Error),h.fail=I,h.ok=E,h.equal=function(e,t,r){e!=t&&I(e,t,r,"==",h.equal)},h.notEqual=function(e,t,r){e==t&&I(e,t,r,"!=",h.notEqual)},h.deepEqual=function(e,t,r){A(e,t,!1)||I(e,t,r,"deepEqual",h.deepEqual)},h.deepStrictEqual=function(e,t,r){A(e,t,!0)||I(e,t,r,"deepStrictEqual",h.deepStrictEqual)},h.notDeepEqual=function(e,t,r){A(e,t,!1)&&I(e,t,r,"notDeepEqual",h.notDeepEqual)},h.notDeepStrictEqual=function e(t,r,n){A(t,r,!0)&&I(t,r,n,"notDeepStrictEqual",e)},h.strictEqual=function(e,t,r){e!==t&&I(e,t,r,"===",h.strictEqual)},h.notStrictEqual=function(e,t,r){e===t&&I(e,t,r,"!==",h.notStrictEqual)},h.throws=function(e,t,r){T(!0,e,t,r)},h.doesNotThrow=function(e,t,r){T(!1,e,t,r)},h.ifError=function(e){if(e)throw e},h.strict=n(function e(t,r){t||I(t,!0,r,"==",e)},h,{equal:h.strictEqual,deepEqual:h.deepStrictEqual,notEqual:h.notStrictEqual,notDeepEqual:h.notDeepStrictEqual}),h.strict.strict=h.strict;var m=Object.keys||function(e){var t=[];for(var r in e)a.call(e,r)&&t.push(r);return t}},11227:function(e,t,r){let n;var i=r(34155);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,i=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&(i=n))}),t.splice(i,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&void 0!==i&&"env"in i&&(e=i.env.DEBUG),e},t.useColors=function(){return"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(n=!1,()=>{n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(82447)(t);let{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},82447:function(e,t,r){e.exports=function(e){function t(e){let r,i,s;let o=null;function a(...e){if(!a.enabled)return;let n=Number(new Date),i=n-(r||n);a.diff=i,a.prev=r,a.curr=n,r=n,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,n)=>{if("%%"===r)return"%";s++;let i=t.formatters[n];if("function"==typeof i){let t=e[s];r=i.call(a,t),e.splice(s,1),s--}return r}),t.formatArgs.call(a,e),(a.log||t.log).apply(a,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=n,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==o?o:(i!==t.namespaces&&(i=t.namespaces,s=t.enabled(e)),s),set:e=>{o=e}}),"function"==typeof t.init&&t.init(a),a}function n(e,r){let n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){let e=[...t.names.map(i),...t.skips.map(i).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.namespaces=e,t.names=[],t.skips=[];let n=("string"==typeof e?e:"").split(/[\s,]+/),i=n.length;for(r=0;r<i;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.slice(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){let r,n;if("*"===e[e.length-1])return!0;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(57824),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(r=>{t[r]=e[r]}),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t)|0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},17187:function(e){"use strict";var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise(function(r,n){var i;function s(r){e.removeListener(t,o),n(r)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",s),r([].slice.call(arguments))}S(e,t,o,{once:!0}),"error"!==t&&(i={once:!0},"function"==typeof e.on&&S(e,"error",s,i))})},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){if(a(r),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),s=e._events),o=s[t]),void 0===o)o=s[t]=r,++e._eventsCount;else if("function"==typeof o?o=s[t]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r),(i=l(e))>0&&o.length>i&&!o.warned){o.warned=!0;var i,s,o,u=Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=o.length,console&&console.warn&&console.warn(u)}return e}function c(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=c.bind(n);return i.listener=r,n.wrapFn=i,i}function h(e,t,r){var n=e._events;if(void 0===n)return[];var i=n[t];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(e){for(var t=Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(i):_(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function _(e,t){for(var r=Array(t),n=0;n<t;++n)r[n]=e[n];return r}function S(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else if("function"==typeof e.addEventListener)e.addEventListener(t,function i(s){n.once&&e.removeEventListener(t,i),r(s)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),s.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,s=this._events;if(void 0!==s)i=i&&void 0===s.error;else if(!i)return!1;if(i){if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var o,a=Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(void 0===l)return!1;if("function"==typeof l)n(l,this,t);else for(var u=l.length,c=_(l,u),r=0;r<u;++r)n(c[r],this,t);return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var r,n,i,s,o;if(a(t),void 0===(n=this._events)||void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,s=r.length-1;s>=0;s--)if(r[s]===t||r[s].listener===t){o=r[s].listener,i=s;break}if(i<0)return this;0===i?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,i),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0==arguments.length){var i,s=Object.keys(r);for(n=0;n<s.length;++n)"removeListener"!==(i=s[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},s.prototype.listeners=function(e){return h(this,e,!0)},s.prototype.rawListeners=function(e){return h(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},s.prototype.listenerCount=d,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},24290:function(e,t,r){"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.correctPath=function(e){return s(e.replace(/^\\\\\?\\.:\\/,"\\"))},t.unixify=s;var i="win32"===n.platform;function s(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return i?(e=function(e,t){if("string"!=typeof e)throw TypeError("expected a string");return e=e.replace(/[\\\/]+/g,"/"),!1!==t&&(e=function(e){var t,r,n=e.length-1;if(n<2)return e;for(;r=e[t=n],t>0&&("/"===r||i&&"\\"===r);)n--;return e.substr(0,n+1)}(e)),e}(e,t)).replace(/^([a-zA-Z]+:|\.\/)/,""):e}},35659:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fsSyncMethods=t.fsProps=t.fsAsyncMethods=void 0,t.fsProps=["constants","F_OK","R_OK","W_OK","X_OK","Stats"],t.fsSyncMethods=["renameSync","ftruncateSync","truncateSync","chownSync","fchownSync","lchownSync","chmodSync","fchmodSync","lchmodSync","statSync","lstatSync","fstatSync","linkSync","symlinkSync","readlinkSync","realpathSync","unlinkSync","rmdirSync","mkdirSync","mkdirpSync","readdirSync","closeSync","openSync","utimesSync","futimesSync","fsyncSync","writeSync","readSync","readFileSync","writeFileSync","appendFileSync","existsSync","accessSync","fdatasyncSync","mkdtempSync","copyFileSync","rmSync","createReadStream","createWriteStream"],t.fsAsyncMethods=["rename","ftruncate","truncate","chown","fchown","lchown","chmod","fchmod","lchmod","stat","lstat","fstat","link","symlink","readlink","realpath","unlink","rmdir","mkdir","mkdirp","readdir","close","open","utimes","futimes","fsync","write","read","readFile","writeFile","appendFile","exists","access","fdatasync","mkdtemp","copyFile","rm","watchFile","unwatchFile","watch"]},57824:function(e){function t(e,t,r,n){return Math.round(e/r)+" "+n+(t>=1.5*r?"s":"")}e.exports=function(e,r){r=r||{};var n,i,s=typeof e;if("string"===s&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e);if("number"===s&&isFinite(e))return r.long?(n=Math.abs(e))>=864e5?t(e,n,864e5,"day"):n>=36e5?t(e,n,36e5,"hour"):n>=6e4?t(e,n,6e4,"minute"):n>=1e3?t(e,n,1e3,"second"):e+" ms":(i=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":i>=36e5?Math.round(e/36e5)+"h":i>=6e4?Math.round(e/6e4)+"m":i>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},38399:function(e){"use strict";e.exports=function(){return Object.assign}},11987:function(e,t,r){!function(){var t={452:function(e){"use strict";e.exports=r(97334)}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,i),o=!1}finally{o&&delete n[e]}return s.exports}i.ab="//";var s={};!function(){var e,t=(e=i(452))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function n(e){"string"==typeof e&&(e=I(e));var n,i,s,o,a,l,u,c,f,h=(i=(n=e).auth,s=n.hostname,o=n.protocol||"",a=n.pathname||"",l=n.hash||"",u=n.query||"",c=!1,i=i?encodeURIComponent(i).replace(/%3A/i,":")+"@":"",n.host?c=i+n.host:s&&(c=i+(~s.indexOf(":")?"["+s+"]":s),n.port&&(c+=":"+n.port)),u&&"object"==typeof u&&(u=t.encode(u)),f=n.search||u&&"?"+u||"",o&&":"!==o.substr(-1)&&(o+=":"),n.slashes||(!o||r.test(o))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),f&&"?"!==f[0]&&(f="?"+f),{protocol:o,host:c,pathname:a=a.replace(/[?#]/g,encodeURIComponent),search:f=f.replace("#","%23"),hash:l});return""+h.protocol+h.host+h.pathname+h.search+h.hash}var o="http://",a=o+"w.w",l=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,u=/https?|ftp|gopher|file/;function c(e,t){var r="string"==typeof e?I(e):e;e="object"==typeof e?n(e):e;var i=I(t),s="";r.protocol&&!r.slashes&&(s=r.protocol,e=e.replace(r.protocol,""),s+="/"===t[0]||"/"===e[0]?"/":""),s&&i.protocol&&(s="",i.slashes||(s=i.protocol,t=t.replace(i.protocol,"")));var c=e.match(l);c&&!i.protocol&&(e=e.substr((s=c[1]+(c[2]||"")).length),/^\/\/[^/]/.test(t)&&(s=s.slice(0,-1)));var f=new URL(e,a+"/"),h=new URL(t,f).toString().replace(a,""),d=i.protocol||r.protocol;return d+=r.slashes||i.slashes?"//":"",!s&&d?h=h.replace(o,d):s&&(h=h.replace(o,"")),u.test(h)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==h.slice(-1)||(h=h.slice(0,-1)),s&&(h=s+("/"===h[0]?h.substr(1):h)),h}function f(){}f.prototype.parse=I,f.prototype.format=n,f.prototype.resolve=c,f.prototype.resolveObject=c;var h=/^https?|ftp|gopher|file/,d=/^(.*?)([#?].*)/,_=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,S=/^([a-z0-9.+-]*:)?\/\/\/*/i,p=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function I(e,r,i){if(void 0===r&&(r=!1),void 0===i&&(i=!1),e&&"object"==typeof e&&e instanceof f)return e;var s=(e=e.trim()).match(d);e=s?s[1].replace(/\\/g,"/")+s[2]:e.replace(/\\/g,"/"),p.test(e)&&"/"!==e.slice(-1)&&(e+="/");var o=!/(^javascript)/.test(e)&&e.match(_),l=S.test(e),u="";o&&(h.test(o[1])||(u=o[1].toLowerCase(),e=""+o[2]+o[3]),o[2]||(l=!1,h.test(o[1])?(u=o[1],e=""+o[3]):e="//"+o[3]),3!==o[2].length&&1!==o[2].length||(u=o[1],e="/"+o[3]));var c,I=(s?s[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),E=I&&I[1],A=new f,y="",g="";try{c=new URL(e)}catch(t){y=t,u||i||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(g="/",e=e.substr(1));try{c=new URL(e,a)}catch(e){return A.protocol=u,A.href=u,A}}A.slashes=l&&!g,A.host="w.w"===c.host?"":c.host,A.hostname="w.w"===c.hostname?"":c.hostname.replace(/(\[|\])/g,""),A.protocol=y?u||null:c.protocol,A.search=c.search.replace(/\\/g,"%5C"),A.hash=c.hash.replace(/\\/g,"%5C");var T=e.split("#");!A.search&&~T[0].indexOf("?")&&(A.search="?"),A.hash||""!==T[1]||(A.hash="#"),A.query=r?t.decode(c.search.substr(1)):A.search.substr(1),A.pathname=g+(o?c.pathname.replace(/['^|`]/g,function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(e,t){try{return decodeURIComponent(t).split("").map(function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()}).join("")}catch(e){return t}}):c.pathname),"about:"===A.protocol&&"blank"===A.pathname&&(A.protocol="",A.pathname=""),y&&"/"!==e[0]&&(A.pathname=A.pathname.substr(1)),u&&!h.test(u)&&"/"!==e.slice(-1)&&"/"===A.pathname&&(A.pathname=""),A.path=A.pathname+A.search,A.auth=[c.username,c.password].map(decodeURIComponent).filter(Boolean).join(":"),A.port=c.port,E&&!A.host.endsWith(E)&&(A.host+=E,A.port=E.slice(1)),A.href=g?""+A.pathname+A.search+A.hash:n(A);var m=/^(file)/.test(A.href)?["host","hostname"]:[];return Object.keys(A).forEach(function(e){~m.indexOf(e)||(A[e]=A[e]||null)}),A}s.parse=I,s.format=n,s.resolve=c,s.resolveObject=function(e,t){return I(c(e,t))},s.Url=f}(),e.exports=s}()},97334:function(e){!function(){"use strict";var t={815:function(e){e.exports=function(e,r,n,i){r=r||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var o=/\+/g;e=e.split(r);var a=1e3;i&&"number"==typeof i.maxKeys&&(a=i.maxKeys);var l=e.length;a>0&&l>a&&(l=a);for(var u=0;u<l;++u){var c,f,h,d,_=e[u].replace(o,"%20"),S=_.indexOf(n);(S>=0?(c=_.substr(0,S),f=_.substr(S+1)):(c=_,f=""),h=decodeURIComponent(c),d=decodeURIComponent(f),Object.prototype.hasOwnProperty.call(s,h))?t(s[h])?s[h].push(d):s[h]=[s[h],d]:s[h]=d}return s};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,s,o,a){return(s=s||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e)?n(i(e),function(i){var a=encodeURIComponent(t(i))+o;return r(e[i])?n(e[i],function(e){return a+encodeURIComponent(t(e))}).join(s):a+encodeURIComponent(t(e[i]))}).join(s):a?encodeURIComponent(t(a))+o+encodeURIComponent(t(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i={};i.decode=i.parse=n(815),i.encode=i.stringify=n(577),e.exports=i}()},79681:function(e,t,r){var n=r(34155);!function(){var t={782:function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}},646:function(e){"use strict";let t={};function r(e,r,n){n||(n=Error);class i extends n{constructor(e,t,n){super("string"==typeof r?r:r(e,t,n))}}i.prototype.name=n.name,i.prototype.code=e,t[e]=i}function n(e,t){if(!Array.isArray(e))return`of ${t} ${String(e)}`;{let r=e.length;return(e=e.map(e=>String(e)),r>2)?`one of ${t} ${e.slice(0,r-1).join(", ")}, or `+e[r-1]:2===r?`one of ${t} ${e[0]} or ${e[1]}`:`of ${t} ${e[0]}`}}r("ERR_INVALID_OPT_VALUE",function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'},TypeError),r("ERR_INVALID_ARG_TYPE",function(e,t,r){var i,s,o,a;let l,u;if("string"==typeof t&&(i="not ",t.substr(0,i.length)===i)?(l="must not be",t=t.replace(/^not /,"")):l="must be",s=" argument",(void 0===o||o>e.length)&&(o=e.length),e.substring(o-s.length,o)===s)u=`The ${e} ${l} ${n(t,"type")}`;else{let r=("number"!=typeof a&&(a=0),a+1>e.length||-1===e.indexOf(".",a))?"argument":"property";u=`The "${e}" ${r} ${l} ${n(t,"type")}`}return u+`. Received type ${typeof r}`},TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",function(e){return"The "+e+" method is not implemented"}),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",function(e){return"Cannot call "+e+" after a stream was destroyed"}),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",function(e){return"Unknown encoding: "+e},TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),e.exports.q=t},403:function(e,t,r){"use strict";var i=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=c;var s=r(709),o=r(337);r(782)(c,s);for(var a=i(o.prototype),l=0;l<a.length;l++){var u=a[l];c.prototype[u]||(c.prototype[u]=o.prototype[u])}function c(e){if(!(this instanceof c))return new c(e);s.call(this,e),o.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",f)))}function f(){this._writableState.ended||n.nextTick(h,this)}function h(e){e.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}})},889:function(e,t,r){"use strict";e.exports=i;var n=r(170);function i(e){if(!(this instanceof i))return new i(e);n.call(this,e)}r(782)(i,n),i.prototype._transform=function(e,t,r){r(null,e)}},709:function(e,t,i){"use strict";e.exports=b,b.ReadableState=R,i(361).EventEmitter;var s,o,a,l,u,c=function(e,t){return e.listeners(t).length},f=i(678),h=i(300).Buffer,d=r.g.Uint8Array||function(){},_=i(837);o=_&&_.debuglog?_.debuglog("stream"):function(){};var S=i(379),p=i(25),I=i(776).getHighWaterMark,E=i(646).q,A=E.ERR_INVALID_ARG_TYPE,y=E.ERR_STREAM_PUSH_AFTER_EOF,g=E.ERR_METHOD_NOT_IMPLEMENTED,T=E.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;i(782)(b,f);var m=p.errorOrDestroy,v=["error","close","destroy","pause","resume"];function R(e,t,r){s=s||i(403),e=e||{},"boolean"!=typeof r&&(r=t instanceof s),this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=I(this,e,"readableHighWaterMark",r),this.buffer=new S,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(a||(a=i(704).s),this.decoder=new a(e.encoding),this.encoding=e.encoding)}function b(e){if(s=s||i(403),!(this instanceof b))return new b(e);var t=this instanceof s;this._readableState=new R(e,this,t),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),f.call(this)}function w(e,t,r,n,i){o("readableAddChunk",t);var s,a,l,u,c,f=e._readableState;if(null===t)f.reading=!1,function(e,t){if(o("onEofChunk"),!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.sync?C(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,N(e)))}}(e,f);else{if(i||(s=f,a=t,h.isBuffer(a)||a instanceof d||"string"==typeof a||void 0===a||s.objectMode||(l=new A("chunk",["string","Buffer","Uint8Array"],a)),c=l),c)m(e,c);else if(f.objectMode||t&&t.length>0){if("string"==typeof t||f.objectMode||Object.getPrototypeOf(t)===h.prototype||(u=t,t=h.from(u)),n)f.endEmitted?m(e,new T):O(e,f,t,!0);else if(f.ended)m(e,new y);else{if(f.destroyed)return!1;f.reading=!1,f.decoder&&!r?(t=f.decoder.write(t),f.objectMode||0!==t.length?O(e,f,t,!1):L(e,f)):O(e,f,t,!1)}}else n||(f.reading=!1,L(e,f))}return!f.ended&&(f.length<f.highWaterMark||0===f.length)}function O(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&C(e)),L(e,t)}function W(e,t){if(e<=0||0===t.length&&t.ended)return 0;if(t.objectMode)return 1;if(e!=e)return t.flowing&&t.length?t.buffer.head.data.length:t.length;if(e>t.highWaterMark){var r;t.highWaterMark=((r=e)>=1073741824?r=1073741824:(r--,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r++),r)}return e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0)}function C(e){var t=e._readableState;o("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(o("emitReadable",t.flowing),t.emittedReadable=!0,n.nextTick(N,e))}function N(e){var t=e._readableState;o("emitReadable_",t.destroyed,t.length,t.ended),!t.destroyed&&(t.length||t.ended)&&(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,M(e)}function L(e,t){t.readingMore||(t.readingMore=!0,n.nextTick(F,e,t))}function F(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(o("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1}function D(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function P(e){o("readable nexttick read 0"),e.read(0)}function G(e,t){o("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),M(e),t.flowing&&!t.reading&&e.read(0)}function M(e){var t=e._readableState;for(o("flow",t.flowing);t.flowing&&null!==e.read(););}function k(e,t){var r;return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r)}function B(e){var t=e._readableState;o("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,n.nextTick(H,t,e))}function H(e,t){if(o("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy()}}function U(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}Object.defineProperty(b.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),b.prototype.destroy=p.destroy,b.prototype._undestroy=p.undestroy,b.prototype._destroy=function(e,t){t(e)},b.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=h.from(e,t),t=""),r=!0),w(this,e,t,!1,r)},b.prototype.unshift=function(e){return w(this,e,null,!0,!1)},b.prototype.isPaused=function(){return!1===this._readableState.flowing},b.prototype.setEncoding=function(e){a||(a=i(704).s);var t=new a(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var r=this._readableState.buffer.head,n="";null!==r;)n+=t.write(r.data),r=r.next;return this._readableState.buffer.clear(),""!==n&&this._readableState.buffer.push(n),this._readableState.length=n.length,this},b.prototype.read=function(e){o("read",e),e=parseInt(e,10);var t,r=this._readableState,n=e;if(0!==e&&(r.emittedReadable=!1),0===e&&r.needReadable&&((0!==r.highWaterMark?r.length>=r.highWaterMark:r.length>0)||r.ended))return o("read: emitReadable",r.length,r.ended),0===r.length&&r.ended?B(this):C(this),null;if(0===(e=W(e,r))&&r.ended)return 0===r.length&&B(this),null;var i=r.needReadable;return o("need readable",i),(0===r.length||r.length-e<r.highWaterMark)&&o("length less than watermark",i=!0),r.ended||r.reading?o("reading or ended",i=!1):i&&(o("do read"),r.reading=!0,r.sync=!0,0===r.length&&(r.needReadable=!0),this._read(r.highWaterMark),r.sync=!1,r.reading||(e=W(n,r))),null===(t=e>0?k(e,r):null)?(r.needReadable=r.length<=r.highWaterMark,e=0):(r.length-=e,r.awaitDrain=0),0===r.length&&(r.ended||(r.needReadable=!0),n!==e&&r.ended&&B(this)),null!==t&&this.emit("data",t),t},b.prototype._read=function(e){m(this,new g("_read()"))},b.prototype.pipe=function(e,t){var r=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=e;break;case 1:i.pipes=[i.pipes,e];break;default:i.pipes.push(e)}i.pipesCount+=1,o("pipe count=%d opts=%j",i.pipesCount,t);var s=t&&!1===t.end||e===n.stdout||e===n.stderr?S:a;function a(){o("onend"),e.end()}i.endEmitted?n.nextTick(s):r.once("end",s),e.on("unpipe",function t(n,s){o("onunpipe"),n===r&&s&&!1===s.hasUnpiped&&(s.hasUnpiped=!0,o("cleanup"),e.removeListener("close",d),e.removeListener("finish",_),e.removeListener("drain",l),e.removeListener("error",h),e.removeListener("unpipe",t),r.removeListener("end",a),r.removeListener("end",S),r.removeListener("data",f),u=!0,i.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&l())});var l=function(){var e=r._readableState;o("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&c(r,"data")&&(e.flowing=!0,M(r))};e.on("drain",l);var u=!1;function f(t){o("ondata");var n=e.write(t);o("dest.write",n),!1===n&&((1===i.pipesCount&&i.pipes===e||i.pipesCount>1&&-1!==U(i.pipes,e))&&!u&&(o("false write response, pause",i.awaitDrain),i.awaitDrain++),r.pause())}function h(t){o("onerror",t),S(),e.removeListener("error",h),0===c(e,"error")&&m(e,t)}function d(){e.removeListener("finish",_),S()}function _(){o("onfinish"),e.removeListener("close",d),S()}function S(){o("unpipe"),r.unpipe(e)}return r.on("data",f),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",h),e.once("close",d),e.once("finish",_),e.emit("pipe",r),i.flowing||(o("pipe resume"),r.resume()),e},b.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var s=0;s<i;s++)n[s].emit("unpipe",this,{hasUnpiped:!1});return this}var o=U(t.pipes,e);return -1===o||(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},b.prototype.on=function(e,t){var r=f.prototype.on.call(this,e,t),i=this._readableState;return"data"===e?(i.readableListening=this.listenerCount("readable")>0,!1!==i.flowing&&this.resume()):"readable"!==e||i.endEmitted||i.readableListening||(i.readableListening=i.needReadable=!0,i.flowing=!1,i.emittedReadable=!1,o("on readable",i.length,i.reading),i.length?C(this):i.reading||n.nextTick(P,this)),r},b.prototype.addListener=b.prototype.on,b.prototype.removeListener=function(e,t){var r=f.prototype.removeListener.call(this,e,t);return"readable"===e&&n.nextTick(D,this),r},b.prototype.removeAllListeners=function(e){var t=f.prototype.removeAllListeners.apply(this,arguments);return("readable"===e||void 0===e)&&n.nextTick(D,this),t},b.prototype.resume=function(){var e=this._readableState;return e.flowing||(o("resume"),e.flowing=!e.readableListening,e.resumeScheduled||(e.resumeScheduled=!0,n.nextTick(G,this,e))),e.paused=!1,this},b.prototype.pause=function(){return o("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(o("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},b.prototype.wrap=function(e){var t=this,r=this._readableState,n=!1;for(var i in e.on("end",function(){if(o("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(i){o("wrapped data"),r.decoder&&(i=r.decoder.write(i)),(!r.objectMode||null!=i)&&(r.objectMode||i&&i.length)&&(t.push(i)||(n=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var s=0;s<v.length;s++)e.on(v[s],this.emit.bind(this,v[s]));return this._read=function(t){o("wrapped _read",t),n&&(n=!1,e.resume())},this},"function"==typeof Symbol&&(b.prototype[Symbol.asyncIterator]=function(){return void 0===l&&(l=i(871)),l(this)}),Object.defineProperty(b.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(b.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(b.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),b._fromList=k,Object.defineProperty(b.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(b.from=function(e,t){return void 0===u&&(u=i(727)),u(b,e,t)})},170:function(e,t,r){"use strict";e.exports=c;var n=r(646).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,s=n.ERR_MULTIPLE_CALLBACK,o=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,a=n.ERR_TRANSFORM_WITH_LENGTH_0,l=r(403);function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new s);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function c(e){if(!(this instanceof c))return new c(e);l.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",f)}function f(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?h(this,null,null):this._flush(function(t,r){h(e,t,r)})}function h(e,t,r){if(t)return e.emit("error",t);if(null!=r&&e.push(r),e._writableState.length)throw new a;if(e._transformState.transforming)throw new o;return e.push(null)}r(782)(c,l),c.prototype.push=function(e,t){return this._transformState.needTransform=!1,l.prototype.push.call(this,e,t)},c.prototype._transform=function(e,t,r){r(new i("_transform()"))},c.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},c.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},c.prototype._destroy=function(e,t){l.prototype._destroy.call(this,e,function(e){t(e)})}},337:function(e,t,i){"use strict";function s(e){var t=this;this.next=null,this.entry=null,this.finish=function(){(function(e,t,r){var n=e.entry;for(e.entry=null;n;){var i=n.callback;t.pendingcb--,i(void 0),n=n.next}t.corkedRequestsFree.next=e})(t,e)}}e.exports=b,b.WritableState=R;var o,a,l={deprecate:i(769)},u=i(678),c=i(300).Buffer,f=r.g.Uint8Array||function(){},h=i(25),d=i(776).getHighWaterMark,_=i(646).q,S=_.ERR_INVALID_ARG_TYPE,p=_.ERR_METHOD_NOT_IMPLEMENTED,I=_.ERR_MULTIPLE_CALLBACK,E=_.ERR_STREAM_CANNOT_PIPE,A=_.ERR_STREAM_DESTROYED,y=_.ERR_STREAM_NULL_VALUES,g=_.ERR_STREAM_WRITE_AFTER_END,T=_.ERR_UNKNOWN_ENCODING,m=h.errorOrDestroy;function v(){}function R(e,t,r){o=o||i(403),e=e||{},"boolean"!=typeof r&&(r=t instanceof o),this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=d(this,e,"writableHighWaterMark",r),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){(function(e,t){var r=e._writableState,i=r.sync,s=r.writecb;if("function"!=typeof s)throw new I;if(r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,t)--r.pendingcb,i?(n.nextTick(s,t),n.nextTick(L,e,r),e._writableState.errorEmitted=!0,m(e,t)):(s(t),e._writableState.errorEmitted=!0,m(e,t),L(e,r));else{var o=C(r)||e.destroyed;o||r.corked||r.bufferProcessing||!r.bufferedRequest||W(e,r),i?n.nextTick(O,e,r,o,s):O(e,r,o,s)}})(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new s(this)}function b(e){var t=this instanceof(o=o||i(403));if(!t&&!a.call(b,this))return new b(e);this._writableState=new R(e,this,t),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),u.call(this)}function w(e,t,r,n,i,s,o){t.writelen=n,t.writecb=o,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new A("write")):r?e._writev(i,t.onwrite):e._write(i,s,t.onwrite),t.sync=!1}function O(e,t,r,n){r||0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain")),t.pendingcb--,n(),L(e,t)}function W(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=Array(t.bufferedRequestCount),i=t.corkedRequestsFree;i.entry=r;for(var o=0,a=!0;r;)n[o]=r,r.isBuf||(a=!1),r=r.next,o+=1;n.allBuffers=a,w(e,t,!0,t.length,n,"",i.finish),t.pendingcb++,t.lastBufferedRequest=null,i.next?(t.corkedRequestsFree=i.next,i.next=null):t.corkedRequestsFree=new s(t),t.bufferedRequestCount=0}else{for(;r;){var l=r.chunk,u=r.encoding,c=r.callback,f=t.objectMode?1:l.length;if(w(e,t,!1,f,l,u,c),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function C(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function N(e,t){e._final(function(r){t.pendingcb--,r&&m(e,r),t.prefinished=!0,e.emit("prefinish"),L(e,t)})}function L(e,t){var r=C(t);if(r&&(t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,n.nextTick(N,e,t))),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){var i=e._readableState;(!i||i.autoDestroy&&i.endEmitted)&&e.destroy()}return r}i(782)(b,u),R.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(R.prototype,"buffer",{get:l.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(a=Function.prototype[Symbol.hasInstance],Object.defineProperty(b,Symbol.hasInstance,{value:function(e){return!!a.call(this,e)||this===b&&e&&e._writableState instanceof R}})):a=function(e){return e instanceof this},b.prototype.pipe=function(){m(this,new E)},b.prototype.write=function(e,t,r){var i,s,o,a,l,u,h,d=this._writableState,_=!1,p=!d.objectMode&&(i=e,c.isBuffer(i)||i instanceof f);return p&&!c.isBuffer(e)&&(s=e,e=c.from(s)),("function"==typeof t&&(r=t,t=null),p?t="buffer":t||(t=d.defaultEncoding),"function"!=typeof r&&(r=v),d.ending)?(o=r,m(this,a=new g),n.nextTick(o,a)):(p||(l=e,u=r,null===l?h=new y:"string"==typeof l||d.objectMode||(h=new S("chunk",["string","Buffer"],l)),!h||(m(this,h),n.nextTick(u,h),0)))&&(d.pendingcb++,_=function(e,t,r,n,i,s){if(!r){var o,a,l=(o=n,a=i,t.objectMode||!1===t.decodeStrings||"string"!=typeof o||(o=c.from(o,a)),o);n!==l&&(r=!0,i="buffer",n=l)}var u=t.objectMode?1:n.length;t.length+=u;var f=t.length<t.highWaterMark;if(f||(t.needDrain=!0),t.writing||t.corked){var h=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:s,next:null},h?h.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else w(e,t,!1,u,n,i,s);return f}(this,d,p,e,t,r)),_},b.prototype.cork=function(){this._writableState.corked++},b.prototype.uncork=function(){var e=this._writableState;!e.corked||(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||W(this,e))},b.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new T(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(b.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(b.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),b.prototype._write=function(e,t,r){r(new p("_write()"))},b.prototype._writev=null,b.prototype.end=function(e,t,r){var i,s=this._writableState;return"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),s.corked&&(s.corked=1,this.uncork()),s.ending||(i=r,s.ending=!0,L(this,s),i&&(s.finished?n.nextTick(i):this.once("finish",i)),s.ended=!0,this.writable=!1),this},Object.defineProperty(b.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(b.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),b.prototype.destroy=h.destroy,b.prototype._undestroy=h.undestroy,b.prototype._destroy=function(e,t){t(e)}},871:function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s,o=r(698),a=Symbol("lastResolve"),l=Symbol("lastReject"),u=Symbol("error"),c=Symbol("ended"),f=Symbol("lastPromise"),h=Symbol("handlePromise"),d=Symbol("stream");function _(e,t){return{value:e,done:t}}function S(e){var t=e[a];if(null!==t){var r=e[d].read();null!==r&&(e[f]=null,e[a]=null,e[l]=null,t(_(r,!1)))}}function p(e){n.nextTick(S,e)}var I=Object.getPrototypeOf(function(){}),E=Object.setPrototypeOf((i(s={get stream(){return this[d]},next:function(){var e,t,r=this,i=this[u];if(null!==i)return Promise.reject(i);if(this[c])return Promise.resolve(_(void 0,!0));if(this[d].destroyed)return new Promise(function(e,t){n.nextTick(function(){r[u]?t(r[u]):e(_(void 0,!0))})});var s=this[f];if(s)t=new Promise((e=this,function(t,r){s.then(function(){if(e[c]){t(_(void 0,!0));return}e[h](t,r)},r)}));else{var o=this[d].read();if(null!==o)return Promise.resolve(_(o,!1));t=new Promise(this[h])}return this[f]=t,t}},Symbol.asyncIterator,function(){return this}),i(s,"return",function(){var e=this;return new Promise(function(t,r){e[d].destroy(null,function(e){if(e){r(e);return}t(_(void 0,!0))})})}),s),I);e.exports=function(e){var t,r=Object.create(E,(i(t={},d,{value:e,writable:!0}),i(t,a,{value:null,writable:!0}),i(t,l,{value:null,writable:!0}),i(t,u,{value:null,writable:!0}),i(t,c,{value:e._readableState.endEmitted,writable:!0}),i(t,h,{value:function(e,t){var n=r[d].read();n?(r[f]=null,r[a]=null,r[l]=null,e(_(n,!1))):(r[a]=e,r[l]=t)},writable:!0}),t));return r[f]=null,o(e,function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[l];null!==t&&(r[f]=null,r[a]=null,r[l]=null,t(e)),r[u]=e;return}var n=r[a];null!==n&&(r[f]=null,r[a]=null,r[l]=null,n(_(void 0,!0))),r[c]=!0}),e.on("readable",p.bind(null,r)),r}},379:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var i=r(300).Buffer,s=r(837).inspect,o=s&&s.custom||"inspect";e.exports=function(){var e;function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}return e=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return i.alloc(0);for(var t,r,n=i.allocUnsafe(e>>>0),s=this.head,o=0;s;)t=s.data,r=o,i.prototype.copy.call(t,n,r),o+=s.data.length,s=s.next;return n}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var i=t.data,s=e>i.length?i.length:e;if(s===i.length?n+=i:n+=i.slice(0,e),0==(e-=s)){s===i.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=i.slice(s));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=i.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var s=r.data,o=e>s.length?s.length:e;if(s.copy(t,t.length-e,0,o),0==(e-=o)){o===s.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=s.slice(o));break}++n}return this.length-=n,t}},{key:o,value:function(e,t){return s(this,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{depth:0,customInspect:!1}))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}()},25:function(e){"use strict";function t(e,t){i(e,t),r(e)}function r(e){(!e._writableState||e._writableState.emitClose)&&(!e._readableState||e._readableState.emitClose)&&e.emit("close")}function i(e,t){e.emit("error",t)}e.exports={destroy:function(e,s){var o=this,a=this._readableState&&this._readableState.destroyed,l=this._writableState&&this._writableState.destroyed;return a||l?s?s(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,n.nextTick(i,this,e)):n.nextTick(i,this,e)):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!s&&e?o._writableState?o._writableState.errorEmitted?n.nextTick(r,o):(o._writableState.errorEmitted=!0,n.nextTick(t,o,e)):n.nextTick(t,o,e):s?(n.nextTick(r,o),s(e)):n.nextTick(r,o)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t)}}},698:function(e,t,r){"use strict";var n=r(646).q.ERR_STREAM_PREMATURE_CLOSE;function i(){}e.exports=function e(t,r,s){if("function"==typeof r)return e(t,null,r);r||(r={}),o=s||i,a=!1,s=function(){if(!a){a=!0;for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];o.apply(this,t)}};var o,a,l=r.readable||!1!==r.readable&&t.readable,u=r.writable||!1!==r.writable&&t.writable,c=function(){t.writable||h()},f=t._writableState&&t._writableState.finished,h=function(){u=!1,f=!0,l||s.call(t)},d=t._readableState&&t._readableState.endEmitted,_=function(){l=!1,d=!0,u||s.call(t)},S=function(e){s.call(t,e)},p=function(){var e;return l&&!d?(t._readableState&&t._readableState.ended||(e=new n),s.call(t,e)):u&&!f?(t._writableState&&t._writableState.ended||(e=new n),s.call(t,e)):void 0},I=function(){t.req.on("finish",h)};return t.setHeader&&"function"==typeof t.abort?(t.on("complete",h),t.on("abort",p),t.req?I():t.on("request",I)):u&&!t._writableState&&(t.on("end",c),t.on("close",c)),t.on("end",_),t.on("finish",h),!1!==r.error&&t.on("error",S),t.on("close",p),function(){t.removeListener("complete",h),t.removeListener("abort",p),t.removeListener("request",I),t.req&&t.req.removeListener("finish",h),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",h),t.removeListener("end",_),t.removeListener("error",S),t.removeListener("close",p)}}},727:function(e,t,r){"use strict";function n(e,t,r,n,i,s,o){try{var a=e[s](o),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(n,i)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var s=r(646).q.ERR_INVALID_ARG_TYPE;e.exports=function(e,t,r){if(t&&"function"==typeof t.next)o=t;else if(t&&t[Symbol.asyncIterator])o=t[Symbol.asyncIterator]();else if(t&&t[Symbol.iterator])o=t[Symbol.iterator]();else throw new s("iterable",["Iterable"],t);var o,a=new e(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({objectMode:!0},r)),l=!1;function u(){return c.apply(this,arguments)}function c(){var e;return e=function*(){try{var e=yield o.next(),t=e.value;e.done?a.push(null):a.push((yield t))?u():l=!1}catch(e){a.destroy(e)}},(c=function(){var t=this,r=arguments;return new Promise(function(i,s){var o=e.apply(t,r);function a(e){n(o,i,s,a,l,"next",e)}function l(e){n(o,i,s,a,l,"throw",e)}a(void 0)})}).apply(this,arguments)}return a._read=function(){l||(l=!0,u())},a}},442:function(e,t,r){"use strict";var n,i=r(646).q,s=i.ERR_MISSING_ARGS,o=i.ERR_STREAM_DESTROYED;function a(e){if(e)throw e}function l(e){e()}function u(e,t){return e.pipe(t)}e.exports=function(){for(var e,t,i=arguments.length,c=Array(i),f=0;f<i;f++)c[f]=arguments[f];var h=(e=c).length&&"function"==typeof e[e.length-1]?e.pop():a;if(Array.isArray(c[0])&&(c=c[0]),c.length<2)throw new s("streams");var d=c.map(function(e,i){var s,a,u,f,_,S,p=i<c.length-1;return s=i>0,u=a=function(e){t||(t=e),e&&d.forEach(l),p||(d.forEach(l),h(t))},f=!1,a=function(){f||(f=!0,u.apply(void 0,arguments))},_=!1,e.on("close",function(){_=!0}),void 0===n&&(n=r(698)),n(e,{readable:p,writable:s},function(e){if(e)return a(e);_=!0,a()}),S=!1,function(t){if(!_&&!S){if(S=!0,e.setHeader&&"function"==typeof e.abort)return e.abort();if("function"==typeof e.destroy)return e.destroy();a(t||new o("pipe"))}}});return c.reduce(u)}},776:function(e,t,r){"use strict";var n=r(646).q.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,i){var s=null!=t.highWaterMark?t.highWaterMark:i?t[r]:null;if(null!=s){if(!(isFinite(s)&&Math.floor(s)===s)||s<0)throw new n(i?r:"highWaterMark",s);return Math.floor(s)}return e.objectMode?16:16384}}},678:function(e,t,r){e.exports=r(781)},55:function(e,t,r){var n=r(300),i=n.Buffer;function s(e,t){for(var r in e)t[r]=e[r]}function o(e,t,r){return i(e,t,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=n:(s(n,t),t.Buffer=o),o.prototype=Object.create(i.prototype),s(i,o),o.from=function(e,t,r){if("number"==typeof e)throw TypeError("Argument must not be a number");return i(e,t,r)},o.alloc=function(e,t,r){if("number"!=typeof e)throw TypeError("Argument must be a number");var n=i(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},o.allocUnsafe=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return i(e)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return n.SlowBuffer(e)}},173:function(e,t,r){e.exports=i;var n=r(361).EventEmitter;function i(){n.call(this)}r(782)(i,n),i.Readable=r(709),i.Writable=r(337),i.Duplex=r(403),i.Transform=r(170),i.PassThrough=r(889),i.finished=r(698),i.pipeline=r(442),i.Stream=i,i.prototype.pipe=function(e,t){var r=this;function i(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}function s(){r.readable&&r.resume&&r.resume()}r.on("data",i),e.on("drain",s),e._isStdio||t&&!1===t.end||(r.on("end",a),r.on("close",l));var o=!1;function a(){o||(o=!0,e.end())}function l(){o||(o=!0,"function"==typeof e.destroy&&e.destroy())}function u(e){if(c(),0===n.listenerCount(this,"error"))throw e}function c(){r.removeListener("data",i),e.removeListener("drain",s),r.removeListener("end",a),r.removeListener("close",l),r.removeListener("error",u),e.removeListener("error",u),r.removeListener("end",c),r.removeListener("close",c),e.removeListener("close",c)}return r.on("error",u),e.on("error",u),r.on("end",c),r.on("close",c),e.on("close",c),e.emit("pipe",r),e}},704:function(e,t,r){"use strict";var n=r(55).Buffer,i=n.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function s(e){var t;switch(this.encoding=function(e){var t=function(e){var t;if(!e)return"utf8";for(;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(n.isEncoding===i||!i(e)))throw Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=l,this.end=u,t=4;break;case"utf8":this.fillLast=a,t=4;break;case"base64":this.text=c,this.end=f,t=3;break;default:this.write=h,this.end=d;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(t)}function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,r=function(e,t,r){if((192&t[0])!=128)return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if((192&t[1])!=128)return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&(192&t[2])!=128)return e.lastNeed=2,"�"}}(this,e,0);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length)}function l(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function u(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function c(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function f(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function h(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):""}t.s=s,s.prototype.write=function(e){var t,r;if(0===e.length)return"";if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},s.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},s.prototype.text=function(e,t){var r=function(e,t,r){var n=t.length-1;if(n<r)return 0;var i=o(t[n]);return i>=0?(i>0&&(e.lastNeed=i-1),i):--n<r||-2===i?0:(i=o(t[n]))>=0?(i>0&&(e.lastNeed=i-2),i):--n<r||-2===i?0:(i=o(t[n]))>=0?(i>0&&(2===i?i=0:e.lastNeed=i-3),i):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},s.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},769:function(e){e.exports=function(e,r){if(t("noDeprecation"))return e;var n=!1;return function(){if(!n){if(t("throwDeprecation"))throw Error(r);t("traceDeprecation")?console.trace(r):console.warn(r),n=!0}return e.apply(this,arguments)}};function t(e){try{if(!r.g.localStorage)return!1}catch(e){return!1}var t=r.g.localStorage[e];return null!=t&&"true"===String(t).toLowerCase()}},300:function(e){"use strict";e.exports=r(48764)},361:function(e){"use strict";e.exports=r(17187)},781:function(e){"use strict";e.exports=r(17187).EventEmitter},837:function(e){"use strict";e.exports=r(89539)}},i={};function s(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}},o=!0;try{t[e](n,n.exports,s),o=!1}finally{o&&delete i[e]}return n.exports}s.ab="//";var o=s(173);e.exports=o}()},65054:function(e,t,r){var n=r(48764).Buffer;/*! typedarray-to-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=function(e){return ArrayBuffer.isView(e)?n.from(e.buffer,e.byteOffset,e.byteLength):n.from(e)}},91496:function(e){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},20384:function(e){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},89539:function(e,t,r){var n,i=r(34155),s=/%[sdj%]/g;t.format=function(e){if(!I(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(a(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,i=n.length,o=String(e).replace(s,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),l=n[r];r<i;l=n[++r])S(l)||!y(l)?o+=" "+l:o+=" "+a(l);return o},t.deprecate=function(e,n){if(E(r.g.process))return function(){return t.deprecate(e,n).apply(this,arguments)};if(!0===i.noDeprecation)return e;var s=!1;return function(){if(!s){if(i.throwDeprecation)throw Error(n);i.traceDeprecation?console.trace(n):console.error(n),s=!0}return e.apply(this,arguments)}};var o={};function a(e,r){var n={seen:[],stylize:u};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),_(r)?n.showHidden=r:r&&t._extend(n,r),E(n.showHidden)&&(n.showHidden=!1),E(n.depth)&&(n.depth=2),E(n.colors)&&(n.colors=!1),E(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=l),c(n,e,n.depth)}function l(e,t){var r=a.styles[t];return r?"\x1b["+a.colors[r][0]+"m"+e+"\x1b["+a.colors[r][1]+"m":e}function u(e,t){return e}function c(e,r,n){if(e.customInspect&&r&&m(r.inspect)&&r.inspect!==t.inspect&&!(r.constructor&&r.constructor.prototype===r)){var i,s,o,a,l,u=r.inspect(n,e);return I(u)||(u=c(e,u,n)),u}var y=function(e,t){if(E(t))return e.stylize("undefined","undefined");if(I(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return p(t)?e.stylize(""+t,"number"):_(t)?e.stylize(""+t,"boolean"):S(t)?e.stylize("null","null"):void 0}(e,r);if(y)return y;var v=Object.keys(r),R=(a={},v.forEach(function(e,t){a[e]=!0}),a);if(e.showHidden&&(v=Object.getOwnPropertyNames(r)),T(r)&&(v.indexOf("message")>=0||v.indexOf("description")>=0))return f(r);if(0===v.length){if(m(r)){var b=r.name?": "+r.name:"";return e.stylize("[Function"+b+"]","special")}if(A(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(g(r))return e.stylize(Date.prototype.toString.call(r),"date");if(T(r))return f(r)}var O="",W=!1,C=["{","}"];return(d(r)&&(W=!0,C=["[","]"]),m(r)&&(O=" [Function"+(r.name?": "+r.name:"")+"]"),A(r)&&(O=" "+RegExp.prototype.toString.call(r)),g(r)&&(O=" "+Date.prototype.toUTCString.call(r)),T(r)&&(O=" "+f(r)),0!==v.length||W&&0!=r.length)?n<0?A(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),l=W?function(e,t,r,n,i){for(var s=[],o=0,a=t.length;o<a;++o)w(t,String(o))?s.push(h(e,t,r,n,String(o),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(h(e,t,r,n,i,!0))}),s}(e,r,n,R,v):v.map(function(t){return h(e,r,n,R,t,W)}),e.seen.pop(),i=O,s=C,o=0,l.reduce(function(e,t){return o++,t.indexOf("\n")>=0&&o++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?s[0]+(""===i?"":i+"\n ")+" "+l.join(",\n  ")+" "+s[1]:s[0]+i+" "+l.join(", ")+" "+s[1]):C[0]+O+C[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,r,n,i,s){var o,a,l;if((l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(a=e.stylize("[Setter]","special")),w(n,i)||(o="["+i+"]"),!a&&(0>e.seen.indexOf(l.value)?(a=S(r)?c(e,l.value,null):c(e,l.value,r-1)).indexOf("\n")>-1&&(a=s?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),E(o)){if(s&&i.match(/^\d+$/))return a;(o=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a}function d(e){return Array.isArray(e)}function _(e){return"boolean"==typeof e}function S(e){return null===e}function p(e){return"number"==typeof e}function I(e){return"string"==typeof e}function E(e){return void 0===e}function A(e){return y(e)&&"[object RegExp]"===v(e)}function y(e){return"object"==typeof e&&null!==e}function g(e){return y(e)&&"[object Date]"===v(e)}function T(e){return y(e)&&("[object Error]"===v(e)||e instanceof Error)}function m(e){return"function"==typeof e}function v(e){return Object.prototype.toString.call(e)}function R(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(E(n)&&(n=i.env.NODE_DEBUG||""),!o[e=e.toUpperCase()]){if(RegExp("\\b"+e+"\\b","i").test(n)){var r=i.pid;o[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else o[e]=function(){}}return o[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=_,t.isNull=S,t.isNullOrUndefined=function(e){return null==e},t.isNumber=p,t.isString=I,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=E,t.isRegExp=A,t.isObject=y,t.isDate=g,t.isError=T,t.isFunction=m,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(20384);var b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function w(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,r;console.log("%s - %s",(r=[R((e=new Date).getHours()),R(e.getMinutes()),R(e.getSeconds())].join(":"),[e.getDate(),b[e.getMonth()],r].join(" ")),t.format.apply(t,arguments))},t.inherits=r(91496),t._extend=function(e,t){if(!t||!y(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}},8732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WASI_ENOMSG=t.WASI_ENOMEM=t.WASI_ENOLINK=t.WASI_ENOLCK=t.WASI_ENOEXEC=t.WASI_ENOENT=t.WASI_ENODEV=t.WASI_ENOBUFS=t.WASI_ENFILE=t.WASI_ENETUNREACH=t.WASI_ENETRESET=t.WASI_ENETDOWN=t.WASI_ENAMETOOLONG=t.WASI_EMULTIHOP=t.WASI_EMSGSIZE=t.WASI_EMLINK=t.WASI_EMFILE=t.WASI_ELOOP=t.WASI_EISDIR=t.WASI_EISCONN=t.WASI_EIO=t.WASI_EINVAL=t.WASI_EINTR=t.WASI_EINPROGRESS=t.WASI_EILSEQ=t.WASI_EIDRM=t.WASI_EHOSTUNREACH=t.WASI_EFBIG=t.WASI_EFAULT=t.WASI_EEXIST=t.WASI_EDQUOT=t.WASI_EDOM=t.WASI_EDESTADDRREQ=t.WASI_EDEADLK=t.WASI_ECONNRESET=t.WASI_ECONNREFUSED=t.WASI_ECONNABORTED=t.WASI_ECHILD=t.WASI_ECANCELED=t.WASI_EBUSY=t.WASI_EBADMSG=t.WASI_EBADF=t.WASI_EALREADY=t.WASI_EAGAIN=t.WASI_EAFNOSUPPORT=t.WASI_EADDRNOTAVAIL=t.WASI_EADDRINUSE=t.WASI_EACCES=t.WASI_E2BIG=t.WASI_ESUCCESS=void 0,t.WASI_SIGVTALRM=t.WASI_SIGUSR2=t.WASI_SIGUSR1=t.WASI_SIGURG=t.WASI_SIGTTOU=t.WASI_SIGTTIN=t.WASI_SIGTSTP=t.WASI_SIGTRAP=t.WASI_SIGTERM=t.WASI_SIGSTOP=t.WASI_SIGSEGV=t.WASI_SIGQUIT=t.WASI_SIGPIPE=t.WASI_SIGKILL=t.WASI_SIGINT=t.WASI_SIGILL=t.WASI_SIGHUP=t.WASI_SIGFPE=t.WASI_SIGCONT=t.WASI_SIGCHLD=t.WASI_SIGBUS=t.WASI_SIGALRM=t.WASI_SIGABRT=t.WASI_ENOTCAPABLE=t.WASI_EXDEV=t.WASI_ETXTBSY=t.WASI_ETIMEDOUT=t.WASI_ESTALE=t.WASI_ESRCH=t.WASI_ESPIPE=t.WASI_EROFS=t.WASI_ERANGE=t.WASI_EPROTOTYPE=t.WASI_EPROTONOSUPPORT=t.WASI_EPROTO=t.WASI_EPIPE=t.WASI_EPERM=t.WASI_EOWNERDEAD=t.WASI_EOVERFLOW=t.WASI_ENXIO=t.WASI_ENOTTY=t.WASI_ENOTSUP=t.WASI_ENOTSOCK=t.WASI_ENOTRECOVERABLE=t.WASI_ENOTEMPTY=t.WASI_ENOTDIR=t.WASI_ENOTCONN=t.WASI_ENOSYS=t.WASI_ENOSPC=t.WASI_ENOPROTOOPT=void 0,t.RIGHTS_REGULAR_FILE_BASE=t.RIGHTS_CHARACTER_DEVICE_INHERITING=t.RIGHTS_CHARACTER_DEVICE_BASE=t.RIGHTS_BLOCK_DEVICE_INHERITING=t.RIGHTS_BLOCK_DEVICE_BASE=t.RIGHTS_ALL=t.WASI_RIGHT_SOCK_SHUTDOWN=t.WASI_RIGHT_POLL_FD_READWRITE=t.WASI_RIGHT_PATH_UNLINK_FILE=t.WASI_RIGHT_PATH_REMOVE_DIRECTORY=t.WASI_RIGHT_PATH_SYMLINK=t.WASI_RIGHT_FD_FILESTAT_SET_TIMES=t.WASI_RIGHT_FD_FILESTAT_SET_SIZE=t.WASI_RIGHT_FD_FILESTAT_GET=t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES=t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE=t.WASI_RIGHT_PATH_FILESTAT_GET=t.WASI_RIGHT_PATH_RENAME_TARGET=t.WASI_RIGHT_PATH_RENAME_SOURCE=t.WASI_RIGHT_PATH_READLINK=t.WASI_RIGHT_FD_READDIR=t.WASI_RIGHT_PATH_OPEN=t.WASI_RIGHT_PATH_LINK_TARGET=t.WASI_RIGHT_PATH_LINK_SOURCE=t.WASI_RIGHT_PATH_CREATE_FILE=t.WASI_RIGHT_PATH_CREATE_DIRECTORY=t.WASI_RIGHT_FD_ALLOCATE=t.WASI_RIGHT_FD_ADVISE=t.WASI_RIGHT_FD_WRITE=t.WASI_RIGHT_FD_TELL=t.WASI_RIGHT_FD_SYNC=t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS=t.WASI_RIGHT_FD_SEEK=t.WASI_RIGHT_FD_READ=t.WASI_RIGHT_FD_DATASYNC=t.WASI_FDFLAG_SYNC=t.WASI_FDFLAG_RSYNC=t.WASI_FDFLAG_NONBLOCK=t.WASI_FDFLAG_DSYNC=t.WASI_FDFLAG_APPEND=t.WASI_FILETYPE_SYMBOLIC_LINK=t.WASI_FILETYPE_SOCKET_STREAM=t.WASI_FILETYPE_SOCKET_DGRAM=t.WASI_FILETYPE_REGULAR_FILE=t.WASI_FILETYPE_DIRECTORY=t.WASI_FILETYPE_CHARACTER_DEVICE=t.WASI_FILETYPE_BLOCK_DEVICE=t.WASI_FILETYPE_UNKNOWN=t.WASI_SIGXFSZ=t.WASI_SIGXCPU=void 0,t.SIGNAL_MAP=t.ERROR_MAP=t.WASI_WHENCE_END=t.WASI_WHENCE_CUR=t.WASI_WHENCE_SET=t.WASI_STDERR_FILENO=t.WASI_STDOUT_FILENO=t.WASI_STDIN_FILENO=t.WASI_DIRCOOKIE_START=t.WASI_PREOPENTYPE_DIR=t.WASI_O_TRUNC=t.WASI_O_EXCL=t.WASI_O_DIRECTORY=t.WASI_O_CREAT=t.WASI_FILESTAT_SET_MTIM_NOW=t.WASI_FILESTAT_SET_MTIM=t.WASI_FILESTAT_SET_ATIM_NOW=t.WASI_FILESTAT_SET_ATIM=t.WASI_EVENTTYPE_FD_WRITE=t.WASI_EVENTTYPE_FD_READ=t.WASI_EVENTTYPE_CLOCK=t.WASI_CLOCK_THREAD_CPUTIME_ID=t.WASI_CLOCK_PROCESS_CPUTIME_ID=t.WASI_CLOCK_MONOTONIC=t.WASI_CLOCK_REALTIME=t.RIGHTS_TTY_INHERITING=t.RIGHTS_TTY_BASE=t.RIGHTS_SOCKET_INHERITING=t.RIGHTS_SOCKET_BASE=t.RIGHTS_DIRECTORY_INHERITING=t.RIGHTS_DIRECTORY_BASE=t.RIGHTS_REGULAR_FILE_INHERITING=void 0,t.WASI_ESUCCESS=0,t.WASI_E2BIG=1,t.WASI_EACCES=2,t.WASI_EADDRINUSE=3,t.WASI_EADDRNOTAVAIL=4,t.WASI_EAFNOSUPPORT=5,t.WASI_EAGAIN=6,t.WASI_EALREADY=7,t.WASI_EBADF=8,t.WASI_EBADMSG=9,t.WASI_EBUSY=10,t.WASI_ECANCELED=11,t.WASI_ECHILD=12,t.WASI_ECONNABORTED=13,t.WASI_ECONNREFUSED=14,t.WASI_ECONNRESET=15,t.WASI_EDEADLK=16,t.WASI_EDESTADDRREQ=17,t.WASI_EDOM=18,t.WASI_EDQUOT=19,t.WASI_EEXIST=20,t.WASI_EFAULT=21,t.WASI_EFBIG=22,t.WASI_EHOSTUNREACH=23,t.WASI_EIDRM=24,t.WASI_EILSEQ=25,t.WASI_EINPROGRESS=26,t.WASI_EINTR=27,t.WASI_EINVAL=28,t.WASI_EIO=29,t.WASI_EISCONN=30,t.WASI_EISDIR=31,t.WASI_ELOOP=32,t.WASI_EMFILE=33,t.WASI_EMLINK=34,t.WASI_EMSGSIZE=35,t.WASI_EMULTIHOP=36,t.WASI_ENAMETOOLONG=37,t.WASI_ENETDOWN=38,t.WASI_ENETRESET=39,t.WASI_ENETUNREACH=40,t.WASI_ENFILE=41,t.WASI_ENOBUFS=42,t.WASI_ENODEV=43,t.WASI_ENOENT=44,t.WASI_ENOEXEC=45,t.WASI_ENOLCK=46,t.WASI_ENOLINK=47,t.WASI_ENOMEM=48,t.WASI_ENOMSG=49,t.WASI_ENOPROTOOPT=50,t.WASI_ENOSPC=51,t.WASI_ENOSYS=52,t.WASI_ENOTCONN=53,t.WASI_ENOTDIR=54,t.WASI_ENOTEMPTY=55,t.WASI_ENOTRECOVERABLE=56,t.WASI_ENOTSOCK=57,t.WASI_ENOTSUP=58,t.WASI_ENOTTY=59,t.WASI_ENXIO=60,t.WASI_EOVERFLOW=61,t.WASI_EOWNERDEAD=62,t.WASI_EPERM=63,t.WASI_EPIPE=64,t.WASI_EPROTO=65,t.WASI_EPROTONOSUPPORT=66,t.WASI_EPROTOTYPE=67,t.WASI_ERANGE=68,t.WASI_EROFS=69,t.WASI_ESPIPE=70,t.WASI_ESRCH=71,t.WASI_ESTALE=72,t.WASI_ETIMEDOUT=73,t.WASI_ETXTBSY=74,t.WASI_EXDEV=75,t.WASI_ENOTCAPABLE=76,t.WASI_SIGABRT=0,t.WASI_SIGALRM=1,t.WASI_SIGBUS=2,t.WASI_SIGCHLD=3,t.WASI_SIGCONT=4,t.WASI_SIGFPE=5,t.WASI_SIGHUP=6,t.WASI_SIGILL=7,t.WASI_SIGINT=8,t.WASI_SIGKILL=9,t.WASI_SIGPIPE=10,t.WASI_SIGQUIT=11,t.WASI_SIGSEGV=12,t.WASI_SIGSTOP=13,t.WASI_SIGTERM=14,t.WASI_SIGTRAP=15,t.WASI_SIGTSTP=16,t.WASI_SIGTTIN=17,t.WASI_SIGTTOU=18,t.WASI_SIGURG=19,t.WASI_SIGUSR1=20,t.WASI_SIGUSR2=21,t.WASI_SIGVTALRM=22,t.WASI_SIGXCPU=23,t.WASI_SIGXFSZ=24,t.WASI_FILETYPE_UNKNOWN=0,t.WASI_FILETYPE_BLOCK_DEVICE=1,t.WASI_FILETYPE_CHARACTER_DEVICE=2,t.WASI_FILETYPE_DIRECTORY=3,t.WASI_FILETYPE_REGULAR_FILE=4,t.WASI_FILETYPE_SOCKET_DGRAM=5,t.WASI_FILETYPE_SOCKET_STREAM=6,t.WASI_FILETYPE_SYMBOLIC_LINK=7,t.WASI_FDFLAG_APPEND=1,t.WASI_FDFLAG_DSYNC=2,t.WASI_FDFLAG_NONBLOCK=4,t.WASI_FDFLAG_RSYNC=8,t.WASI_FDFLAG_SYNC=16,t.WASI_RIGHT_FD_DATASYNC=BigInt(1),t.WASI_RIGHT_FD_READ=BigInt(2),t.WASI_RIGHT_FD_SEEK=BigInt(4),t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS=BigInt(8),t.WASI_RIGHT_FD_SYNC=BigInt(16),t.WASI_RIGHT_FD_TELL=BigInt(32),t.WASI_RIGHT_FD_WRITE=BigInt(64),t.WASI_RIGHT_FD_ADVISE=BigInt(128),t.WASI_RIGHT_FD_ALLOCATE=BigInt(256),t.WASI_RIGHT_PATH_CREATE_DIRECTORY=BigInt(512),t.WASI_RIGHT_PATH_CREATE_FILE=BigInt(1024),t.WASI_RIGHT_PATH_LINK_SOURCE=BigInt(2048),t.WASI_RIGHT_PATH_LINK_TARGET=BigInt(4096),t.WASI_RIGHT_PATH_OPEN=BigInt(8192),t.WASI_RIGHT_FD_READDIR=BigInt(16384),t.WASI_RIGHT_PATH_READLINK=BigInt(32768),t.WASI_RIGHT_PATH_RENAME_SOURCE=BigInt(65536),t.WASI_RIGHT_PATH_RENAME_TARGET=BigInt(131072),t.WASI_RIGHT_PATH_FILESTAT_GET=BigInt(262144),t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE=BigInt(524288),t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES=BigInt(1048576),t.WASI_RIGHT_FD_FILESTAT_GET=BigInt(2097152),t.WASI_RIGHT_FD_FILESTAT_SET_SIZE=BigInt(4194304),t.WASI_RIGHT_FD_FILESTAT_SET_TIMES=BigInt(8388608),t.WASI_RIGHT_PATH_SYMLINK=BigInt(16777216),t.WASI_RIGHT_PATH_REMOVE_DIRECTORY=BigInt(33554432),t.WASI_RIGHT_PATH_UNLINK_FILE=BigInt(67108864),t.WASI_RIGHT_POLL_FD_READWRITE=BigInt(134217728),t.WASI_RIGHT_SOCK_SHUTDOWN=BigInt(268435456),t.RIGHTS_ALL=t.WASI_RIGHT_FD_DATASYNC|t.WASI_RIGHT_FD_READ|t.WASI_RIGHT_FD_SEEK|t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|t.WASI_RIGHT_FD_SYNC|t.WASI_RIGHT_FD_TELL|t.WASI_RIGHT_FD_WRITE|t.WASI_RIGHT_FD_ADVISE|t.WASI_RIGHT_FD_ALLOCATE|t.WASI_RIGHT_PATH_CREATE_DIRECTORY|t.WASI_RIGHT_PATH_CREATE_FILE|t.WASI_RIGHT_PATH_LINK_SOURCE|t.WASI_RIGHT_PATH_LINK_TARGET|t.WASI_RIGHT_PATH_OPEN|t.WASI_RIGHT_FD_READDIR|t.WASI_RIGHT_PATH_READLINK|t.WASI_RIGHT_PATH_RENAME_SOURCE|t.WASI_RIGHT_PATH_RENAME_TARGET|t.WASI_RIGHT_PATH_FILESTAT_GET|t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE|t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES|t.WASI_RIGHT_FD_FILESTAT_GET|t.WASI_RIGHT_FD_FILESTAT_SET_TIMES|t.WASI_RIGHT_FD_FILESTAT_SET_SIZE|t.WASI_RIGHT_PATH_SYMLINK|t.WASI_RIGHT_PATH_UNLINK_FILE|t.WASI_RIGHT_PATH_REMOVE_DIRECTORY|t.WASI_RIGHT_POLL_FD_READWRITE|t.WASI_RIGHT_SOCK_SHUTDOWN,t.RIGHTS_BLOCK_DEVICE_BASE=t.RIGHTS_ALL,t.RIGHTS_BLOCK_DEVICE_INHERITING=t.RIGHTS_ALL,t.RIGHTS_CHARACTER_DEVICE_BASE=t.RIGHTS_ALL,t.RIGHTS_CHARACTER_DEVICE_INHERITING=t.RIGHTS_ALL,t.RIGHTS_REGULAR_FILE_BASE=t.WASI_RIGHT_FD_DATASYNC|t.WASI_RIGHT_FD_READ|t.WASI_RIGHT_FD_SEEK|t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|t.WASI_RIGHT_FD_SYNC|t.WASI_RIGHT_FD_TELL|t.WASI_RIGHT_FD_WRITE|t.WASI_RIGHT_FD_ADVISE|t.WASI_RIGHT_FD_ALLOCATE|t.WASI_RIGHT_FD_FILESTAT_GET|t.WASI_RIGHT_FD_FILESTAT_SET_SIZE|t.WASI_RIGHT_FD_FILESTAT_SET_TIMES|t.WASI_RIGHT_POLL_FD_READWRITE,t.RIGHTS_REGULAR_FILE_INHERITING=BigInt(0),t.RIGHTS_DIRECTORY_BASE=t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|t.WASI_RIGHT_FD_SYNC|t.WASI_RIGHT_FD_ADVISE|t.WASI_RIGHT_PATH_CREATE_DIRECTORY|t.WASI_RIGHT_PATH_CREATE_FILE|t.WASI_RIGHT_PATH_LINK_SOURCE|t.WASI_RIGHT_PATH_LINK_TARGET|t.WASI_RIGHT_PATH_OPEN|t.WASI_RIGHT_FD_READDIR|t.WASI_RIGHT_PATH_READLINK|t.WASI_RIGHT_PATH_RENAME_SOURCE|t.WASI_RIGHT_PATH_RENAME_TARGET|t.WASI_RIGHT_PATH_FILESTAT_GET|t.WASI_RIGHT_PATH_FILESTAT_SET_SIZE|t.WASI_RIGHT_PATH_FILESTAT_SET_TIMES|t.WASI_RIGHT_FD_FILESTAT_GET|t.WASI_RIGHT_FD_FILESTAT_SET_TIMES|t.WASI_RIGHT_PATH_SYMLINK|t.WASI_RIGHT_PATH_UNLINK_FILE|t.WASI_RIGHT_PATH_REMOVE_DIRECTORY|t.WASI_RIGHT_POLL_FD_READWRITE,t.RIGHTS_DIRECTORY_INHERITING=t.RIGHTS_DIRECTORY_BASE|t.RIGHTS_REGULAR_FILE_BASE,t.RIGHTS_SOCKET_BASE=t.WASI_RIGHT_FD_READ|t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|t.WASI_RIGHT_FD_WRITE|t.WASI_RIGHT_FD_FILESTAT_GET|t.WASI_RIGHT_POLL_FD_READWRITE|t.WASI_RIGHT_SOCK_SHUTDOWN,t.RIGHTS_SOCKET_INHERITING=t.RIGHTS_ALL,t.RIGHTS_TTY_BASE=t.WASI_RIGHT_FD_READ|t.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|t.WASI_RIGHT_FD_WRITE|t.WASI_RIGHT_FD_FILESTAT_GET|t.WASI_RIGHT_POLL_FD_READWRITE,t.RIGHTS_TTY_INHERITING=BigInt(0),t.WASI_CLOCK_REALTIME=0,t.WASI_CLOCK_MONOTONIC=1,t.WASI_CLOCK_PROCESS_CPUTIME_ID=2,t.WASI_CLOCK_THREAD_CPUTIME_ID=3,t.WASI_EVENTTYPE_CLOCK=0,t.WASI_EVENTTYPE_FD_READ=1,t.WASI_EVENTTYPE_FD_WRITE=2,t.WASI_FILESTAT_SET_ATIM=1,t.WASI_FILESTAT_SET_ATIM_NOW=2,t.WASI_FILESTAT_SET_MTIM=4,t.WASI_FILESTAT_SET_MTIM_NOW=8,t.WASI_O_CREAT=1,t.WASI_O_DIRECTORY=2,t.WASI_O_EXCL=4,t.WASI_O_TRUNC=8,t.WASI_PREOPENTYPE_DIR=0,t.WASI_DIRCOOKIE_START=0,t.WASI_STDIN_FILENO=0,t.WASI_STDOUT_FILENO=1,t.WASI_STDERR_FILENO=2,t.WASI_WHENCE_SET=0,t.WASI_WHENCE_CUR=1,t.WASI_WHENCE_END=2,t.ERROR_MAP={E2BIG:t.WASI_E2BIG,EACCES:t.WASI_EACCES,EADDRINUSE:t.WASI_EADDRINUSE,EADDRNOTAVAIL:t.WASI_EADDRNOTAVAIL,EAFNOSUPPORT:t.WASI_EAFNOSUPPORT,EALREADY:t.WASI_EALREADY,EAGAIN:t.WASI_EAGAIN,EBADF:t.WASI_EBADF,EBADMSG:t.WASI_EBADMSG,EBUSY:t.WASI_EBUSY,ECANCELED:t.WASI_ECANCELED,ECHILD:t.WASI_ECHILD,ECONNABORTED:t.WASI_ECONNABORTED,ECONNREFUSED:t.WASI_ECONNREFUSED,ECONNRESET:t.WASI_ECONNRESET,EDEADLOCK:t.WASI_EDEADLK,EDESTADDRREQ:t.WASI_EDESTADDRREQ,EDOM:t.WASI_EDOM,EDQUOT:t.WASI_EDQUOT,EEXIST:t.WASI_EEXIST,EFAULT:t.WASI_EFAULT,EFBIG:t.WASI_EFBIG,EHOSTDOWN:t.WASI_EHOSTUNREACH,EHOSTUNREACH:t.WASI_EHOSTUNREACH,EIDRM:t.WASI_EIDRM,EILSEQ:t.WASI_EILSEQ,EINPROGRESS:t.WASI_EINPROGRESS,EINTR:t.WASI_EINTR,EINVAL:t.WASI_EINVAL,EIO:t.WASI_EIO,EISCONN:t.WASI_EISCONN,EISDIR:t.WASI_EISDIR,ELOOP:t.WASI_ELOOP,EMFILE:t.WASI_EMFILE,EMLINK:t.WASI_EMLINK,EMSGSIZE:t.WASI_EMSGSIZE,EMULTIHOP:t.WASI_EMULTIHOP,ENAMETOOLONG:t.WASI_ENAMETOOLONG,ENETDOWN:t.WASI_ENETDOWN,ENETRESET:t.WASI_ENETRESET,ENETUNREACH:t.WASI_ENETUNREACH,ENFILE:t.WASI_ENFILE,ENOBUFS:t.WASI_ENOBUFS,ENODEV:t.WASI_ENODEV,ENOENT:t.WASI_ENOENT,ENOEXEC:t.WASI_ENOEXEC,ENOLCK:t.WASI_ENOLCK,ENOLINK:t.WASI_ENOLINK,ENOMEM:t.WASI_ENOMEM,ENOMSG:t.WASI_ENOMSG,ENOPROTOOPT:t.WASI_ENOPROTOOPT,ENOSPC:t.WASI_ENOSPC,ENOSYS:t.WASI_ENOSYS,ENOTCONN:t.WASI_ENOTCONN,ENOTDIR:t.WASI_ENOTDIR,ENOTEMPTY:t.WASI_ENOTEMPTY,ENOTRECOVERABLE:t.WASI_ENOTRECOVERABLE,ENOTSOCK:t.WASI_ENOTSOCK,ENOTTY:t.WASI_ENOTTY,ENXIO:t.WASI_ENXIO,EOVERFLOW:t.WASI_EOVERFLOW,EOWNERDEAD:t.WASI_EOWNERDEAD,EPERM:t.WASI_EPERM,EPIPE:t.WASI_EPIPE,EPROTO:t.WASI_EPROTO,EPROTONOSUPPORT:t.WASI_EPROTONOSUPPORT,EPROTOTYPE:t.WASI_EPROTOTYPE,ERANGE:t.WASI_ERANGE,EROFS:t.WASI_EROFS,ESPIPE:t.WASI_ESPIPE,ESRCH:t.WASI_ESRCH,ESTALE:t.WASI_ESTALE,ETIMEDOUT:t.WASI_ETIMEDOUT,ETXTBSY:t.WASI_ETXTBSY,EXDEV:t.WASI_EXDEV},t.SIGNAL_MAP={[t.WASI_SIGHUP]:"SIGHUP",[t.WASI_SIGINT]:"SIGINT",[t.WASI_SIGQUIT]:"SIGQUIT",[t.WASI_SIGILL]:"SIGILL",[t.WASI_SIGTRAP]:"SIGTRAP",[t.WASI_SIGABRT]:"SIGABRT",[t.WASI_SIGBUS]:"SIGBUS",[t.WASI_SIGFPE]:"SIGFPE",[t.WASI_SIGKILL]:"SIGKILL",[t.WASI_SIGUSR1]:"SIGUSR1",[t.WASI_SIGSEGV]:"SIGSEGV",[t.WASI_SIGUSR2]:"SIGUSR2",[t.WASI_SIGPIPE]:"SIGPIPE",[t.WASI_SIGALRM]:"SIGALRM",[t.WASI_SIGTERM]:"SIGTERM",[t.WASI_SIGCHLD]:"SIGCHLD",[t.WASI_SIGCONT]:"SIGCONT",[t.WASI_SIGSTOP]:"SIGSTOP",[t.WASI_SIGTSTP]:"SIGTSTP",[t.WASI_SIGTTIN]:"SIGTTIN",[t.WASI_SIGTTOU]:"SIGTTOU",[t.WASI_SIGURG]:"SIGURG",[t.WASI_SIGXCPU]:"SIGXCPU",[t.WASI_SIGXFSZ]:"SIGXFSZ",[t.WASI_SIGVTALRM]:"SIGVTALRM"}},8994:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createFileSystem=void 0;let i=n(r(40610)),s=r(55370),o=r(14539);function a(e,t){if("zip"==e.type)return function(e,t="/"){let r=(0,s.createFsFromVolume)(new s.Volume);return r.mkdirSync(t,{recursive:!0}),(0,i.default)({data:e,fs:r,directory:t}),r}(e.data,e.mountpoint);if("zip-async"==e.type)return function(e,t="/"){let r=(0,s.createFsFromVolume)(new s.Volume),n=(async()=>{let n;try{n=await e()}catch(e){throw console.warn(`FAILED to load async filesystem for '${t}' - ${e}`),e}(0,i.default)({data:n,fs:r,directory:t})})();return r.waitUntilLoaded=()=>n,r}(e.getData,e.mountpoint);if("zipfile"==e.type)throw Error(`you must convert zipfile -- read ${e.zipfile} into memory`);if("zipurl"==e.type)throw Error(`you must convert zipurl -- read ${e.zipurl} into memory`);if("native"==e.type)return null==t?t:function(e){function t(t){let r=0;for(let n in s.fs.constants)n.startsWith("O_")&&t&s.fs.constants[n]&&(r|=e.constants[n]);return r}let r=async(r,n,i)=>await e.open(r,t(n),i),n={...e.promises,open:async(t,r,n)=>await e.promises.open(t,r,n)};return{...{...e,promises:n},open:r,openSync:(r,n,i)=>e.openSync(r,t(n),i),constants:s.fs.constants}}(t);if("mem"==e.type)return l(e.contents);if("dev"==e.type)return function(){let e=s.Volume.fromJSON({"/dev/stdin":"","/dev/stdout":"","/dev/stderr":""});e.releasedFds=[0,1,2];let t=e.openSync("/dev/stderr","w"),r=e.openSync("/dev/stdout","w"),n=e.openSync("/dev/stdin","r");if(2!=t)throw Error(`invalid handle for stderr: ${t}`);if(1!=r)throw Error(`invalid handle for stdout: ${r}`);if(0!=n)throw Error(`invalid handle for stdin: ${n}`);return(0,s.createFsFromVolume)(e)}();throw Error(`unknown spec type - ${JSON.stringify(e)}`)}function l(e){let t=null!=e?s.Volume.fromJSON(e):new s.Volume;return(0,s.createFsFromVolume)(t)}t.createFileSystem=function(e,t){if(0==e.length)return l();if(1==e.length)return a(e[0],t)??l();let r=new o.Union,n=[];for(let i of e){let e=a(i,t);null!=e&&(r.use(e),null!=e.waitUntilLoaded&&n.push(e.waitUntilLoaded.bind(e)))}let i=async()=>{for(let e of n)await e()};return{...r,constants:s.fs.constants,waitUntilLoaded:i}}},67545:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.createFileSystem=t.SOCKET_DEFAULT_RIGHTS=void 0;let o=s(r(78019));Object.defineProperty(t,"SOCKET_DEFAULT_RIGHTS",{enumerable:!0,get:function(){return o.SOCKET_DEFAULT_RIGHTS}}),t.default=o.default;var a=r(8994);Object.defineProperty(t,"createFileSystem",{enumerable:!0,get:function(){return a.createFileSystem}});let l=s(r(8732));t.constants=l},71359:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WASIKillError=t.WASIExitError=t.WASIError=void 0;class r extends Error{constructor(e){super(),this.errno=e,Object.setPrototypeOf(this,r.prototype)}}t.WASIError=r;class n extends Error{constructor(e){super(`WASI Exit error: ${e}`),this.code=e,Object.setPrototypeOf(this,n.prototype)}}t.WASIExitError=n;class i extends Error{constructor(e){super(`WASI Kill signal: ${e}`),this.signal=e,Object.setPrototypeOf(this,i.prototype)}}t.WASIKillError=i},40610:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(1864),i=r(63959);t.default=function({data:e,fs:t,directory:r}){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),!(e instanceof Uint8Array))throw Error("impossible");for(let[s,o]of Object.entries((0,i.unzipSync)(e))){let e=(0,n.join)(r,s);t.mkdirSync((0,n.dirname)(e),{recursive:!0}),e.endsWith("/")||(t.writeFileSync(e,o),t.chmodSync(e,511))}}},78019:function(e,t,r){"use strict";var n=r(48764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SOCKET_DEFAULT_RIGHTS=void 0;let s=i(r(11227)),o=(0,s.default)("wasi"),a=(0,s.default)("wasi:open"),l=r(71359),u=i(r(65054)),c=r(8732),f=c.WASI_RIGHT_FD_DATASYNC|c.WASI_RIGHT_FD_READ|c.WASI_RIGHT_FD_SYNC|c.WASI_RIGHT_FD_ADVISE|c.WASI_RIGHT_FD_FILESTAT_GET|c.WASI_RIGHT_POLL_FD_READWRITE,h=c.WASI_RIGHT_FD_DATASYNC|c.WASI_RIGHT_FD_WRITE|c.WASI_RIGHT_FD_SYNC|c.WASI_RIGHT_FD_ADVISE|c.WASI_RIGHT_FD_FILESTAT_GET|c.WASI_RIGHT_POLL_FD_READWRITE;t.SOCKET_DEFAULT_RIGHTS=c.WASI_RIGHT_FD_DATASYNC|c.WASI_RIGHT_FD_READ|c.WASI_RIGHT_FD_WRITE|c.WASI_RIGHT_FD_ADVISE|c.WASI_RIGHT_FD_FILESTAT_GET|c.WASI_RIGHT_POLL_FD_READWRITE|c.WASI_RIGHT_FD_FDSTAT_SET_FLAGS;let d=e=>{let t=Math.trunc(e),r=BigInt(Math.round((e-t)*1e6));return BigInt(t)*BigInt(1e6)+r},_=e=>("number"==typeof e&&(e=Math.trunc(e)),Number(BigInt(e)/BigInt(1e6))),S=e=>(...t)=>{try{return e(...t)}catch(t){let e=t;for(;null!=e.prev;)e=e.prev;if(e?.code&&"string"==typeof e?.code)return c.ERROR_MAP[e.code]||c.WASI_EINVAL;if(e instanceof l.WASIError)return e.errno;throw e}},p=(e,t)=>{let r=e.FD_MAP.get(t);if(!r)throw new l.WASIError(c.WASI_EBADF);if(void 0===r.filetype){let n=e.fstatSync(r.real),{filetype:i,rightsBase:s,rightsInheriting:o}=I(e,t,n);r.filetype=i,r.rights||(r.rights={base:s,inheriting:o})}return r},I=(e,t,r)=>{switch(!0){case r.isBlockDevice():return{filetype:c.WASI_FILETYPE_BLOCK_DEVICE,rightsBase:c.RIGHTS_BLOCK_DEVICE_BASE,rightsInheriting:c.RIGHTS_BLOCK_DEVICE_INHERITING};case r.isCharacterDevice():{let r=c.WASI_FILETYPE_CHARACTER_DEVICE;if(void 0!==t&&e.bindings.isTTY(t))return{filetype:r,rightsBase:c.RIGHTS_TTY_BASE,rightsInheriting:c.RIGHTS_TTY_INHERITING};return{filetype:r,rightsBase:c.RIGHTS_CHARACTER_DEVICE_BASE,rightsInheriting:c.RIGHTS_CHARACTER_DEVICE_INHERITING}}case r.isDirectory():return{filetype:c.WASI_FILETYPE_DIRECTORY,rightsBase:c.RIGHTS_DIRECTORY_BASE,rightsInheriting:c.RIGHTS_DIRECTORY_INHERITING};case r.isFIFO():return{filetype:c.WASI_FILETYPE_SOCKET_STREAM,rightsBase:c.RIGHTS_SOCKET_BASE,rightsInheriting:c.RIGHTS_SOCKET_INHERITING};case r.isFile():return{filetype:c.WASI_FILETYPE_REGULAR_FILE,rightsBase:c.RIGHTS_REGULAR_FILE_BASE,rightsInheriting:c.RIGHTS_REGULAR_FILE_INHERITING};case r.isSocket():return{filetype:c.WASI_FILETYPE_SOCKET_STREAM,rightsBase:c.RIGHTS_SOCKET_BASE,rightsInheriting:c.RIGHTS_SOCKET_INHERITING};case r.isSymbolicLink():return{filetype:c.WASI_FILETYPE_SYMBOLIC_LINK,rightsBase:BigInt(0),rightsInheriting:BigInt(0)};default:return{filetype:c.WASI_FILETYPE_UNKNOWN,rightsBase:BigInt(0),rightsInheriting:BigInt(0)}}},E=!1;class A{constructor(e){this.lastStdin=0,this.env={},this.sleep=e.sleep,this.getStdin=e.getStdin,this.sendStdout=e.sendStdout,this.sendStderr=e.sendStderr;let t={};e.preopens&&(t=e.preopens),e&&e.env&&(this.env=e.env);let r=[];e&&e.args&&(r=e.args),this.memory=void 0,this.view=void 0,this.bindings=e.bindings;let i=this.bindings.fs;this.FD_MAP=new Map([[c.WASI_STDIN_FILENO,{real:0,filetype:c.WASI_FILETYPE_CHARACTER_DEVICE,rights:{base:f,inheriting:BigInt(0)},path:"/dev/stdin"}],[c.WASI_STDOUT_FILENO,{real:1,filetype:c.WASI_FILETYPE_CHARACTER_DEVICE,rights:{base:h,inheriting:BigInt(0)},path:"/dev/stdout"}],[c.WASI_STDERR_FILENO,{real:2,filetype:c.WASI_FILETYPE_CHARACTER_DEVICE,rights:{base:h,inheriting:BigInt(0)},path:"/dev/stderr"}]]);let s=this.bindings.path;for(let[e,r]of Object.entries(t)){let t=i.openSync(r,i.constants.O_RDONLY),n=this.getUnusedFileDescriptor();this.FD_MAP.set(n,{real:t,filetype:c.WASI_FILETYPE_DIRECTORY,rights:{base:c.RIGHTS_DIRECTORY_BASE,inheriting:c.RIGHTS_DIRECTORY_INHERITING},fakePath:e,path:r})}let A=(e,t)=>(this.refreshMemory(),Array.from({length:t},(t,r)=>{let n=e+8*r,i=this.view.getUint32(n,!0),s=this.view.getUint32(n+4,!0);s>this.memory.buffer.byteLength-i&&(o("getiovs: warning -- truncating buffer to fit in memory"),s=Math.min(s,Math.max(0,this.memory.buffer.byteLength-i)));try{let e=new Uint8Array(this.memory.buffer,i,s);return(0,u.default)(e)}catch(e){throw console.warn("WASI.getiovs -- invalid buffer",e),new l.WASIError(c.WASI_EINVAL)}})),y=(e,t)=>{let r=p(this,e);if(t!==BigInt(0)&&(r.rights.base&t)===BigInt(0))throw new l.WASIError(c.WASI_EPERM);return r},g=this.bindings.hrtime(),T=e=>{switch(e){case c.WASI_CLOCK_MONOTONIC:return this.bindings.hrtime();case c.WASI_CLOCK_REALTIME:return d(Date.now());case c.WASI_CLOCK_PROCESS_CPUTIME_ID:case c.WASI_CLOCK_THREAD_CPUTIME_ID:return this.bindings.hrtime()-g;default:return null}};this.wasiImport={args_get:(e,t)=>{this.refreshMemory();let i=e,s=t;return r.forEach(e=>{this.view.setUint32(i,s,!0),i+=4,s+=n.from(this.memory.buffer).write(`${e}\0`,s)}),c.WASI_ESUCCESS},args_sizes_get:(e,t)=>{this.refreshMemory(),this.view.setUint32(e,r.length,!0);let i=r.reduce((e,t)=>e+n.byteLength(t)+1,0);return this.view.setUint32(t,i,!0),c.WASI_ESUCCESS},environ_get:(e,t)=>{this.refreshMemory();let r=e,i=t;return Object.entries(this.env).forEach(([e,t])=>{this.view.setUint32(r,i,!0),r+=4,i+=n.from(this.memory.buffer).write(`${e}=${t}\0`,i)}),c.WASI_ESUCCESS},environ_sizes_get:(e,t)=>{this.refreshMemory();let r=Object.entries(this.env).map(([e,t])=>`${e}=${t}\0`),i=r.reduce((e,t)=>e+n.byteLength(t),0);return this.view.setUint32(e,r.length,!0),this.view.setUint32(t,i,!0),c.WASI_ESUCCESS},clock_res_get:(e,t)=>{let r;switch(e){case c.WASI_CLOCK_MONOTONIC:case c.WASI_CLOCK_PROCESS_CPUTIME_ID:case c.WASI_CLOCK_THREAD_CPUTIME_ID:r=BigInt(1);break;case c.WASI_CLOCK_REALTIME:r=BigInt(1e3)}if(!r)throw Error("invalid clockId");return this.view.setBigUint64(t,r),c.WASI_ESUCCESS},clock_time_get:(e,t,r)=>{this.refreshMemory();let n=T(e);return null===n?c.WASI_EINVAL:(this.view.setBigUint64(r,BigInt(n),!0),c.WASI_ESUCCESS)},fd_advise:S((e,t,r,n)=>(y(e,c.WASI_RIGHT_FD_ADVISE),c.WASI_ENOSYS)),fd_allocate:S((e,t,r)=>(y(e,c.WASI_RIGHT_FD_ALLOCATE),c.WASI_ENOSYS)),fd_close:S(e=>{let t=y(e,BigInt(0));return i.closeSync(t.real),this.FD_MAP.delete(e),c.WASI_ESUCCESS}),fd_datasync:S(e=>{let t=y(e,c.WASI_RIGHT_FD_DATASYNC);return i.fdatasyncSync(t.real),c.WASI_ESUCCESS}),fd_fdstat_get:S((e,t)=>{let r=y(e,BigInt(0));if(this.refreshMemory(),null==r.filetype)throw Error("stats.filetype must be set");return this.view.setUint8(t,r.filetype),this.view.setUint16(t+2,0,!0),this.view.setUint16(t+4,0,!0),this.view.setBigUint64(t+8,BigInt(r.rights.base),!0),this.view.setBigUint64(t+8+8,BigInt(r.rights.inheriting),!0),c.WASI_ESUCCESS}),fd_fdstat_set_flags:S((e,t)=>(y(e,c.WASI_RIGHT_FD_FDSTAT_SET_FLAGS),0==this.wasiImport.sock_fcntlSetFlags(e,t))?c.WASI_ESUCCESS:c.WASI_ENOSYS),fd_fdstat_set_rights:S((e,t,r)=>{let n=y(e,BigInt(0));return(n.rights.base|t)>n.rights.base||(n.rights.inheriting|r)>n.rights.inheriting?c.WASI_EPERM:(n.rights.base=t,n.rights.inheriting=r,c.WASI_ESUCCESS)}),fd_filestat_get:S((e,t)=>{let r=y(e,c.WASI_RIGHT_FD_FILESTAT_GET),n=this.fstatSync(r.real);if(this.refreshMemory(),this.view.setBigUint64(t,BigInt(n.dev),!0),t+=8,this.view.setBigUint64(t,BigInt(n.ino),!0),t+=8,null==r.filetype)throw Error("stats.filetype must be set");return this.view.setUint8(t,r.filetype),t+=8,this.view.setBigUint64(t,BigInt(n.nlink),!0),t+=8,this.view.setBigUint64(t,BigInt(n.size),!0),t+=8,this.view.setBigUint64(t,d(n.atimeMs),!0),t+=8,this.view.setBigUint64(t,d(n.mtimeMs),!0),t+=8,this.view.setBigUint64(t,d(n.ctimeMs),!0),c.WASI_ESUCCESS}),fd_filestat_set_size:S((e,t)=>{let r=y(e,c.WASI_RIGHT_FD_FILESTAT_SET_SIZE);return i.ftruncateSync(r.real,Number(t)),c.WASI_ESUCCESS}),fd_filestat_set_times:S((e,t,r,n)=>{let s=y(e,c.WASI_RIGHT_FD_FILESTAT_SET_TIMES),o=this.fstatSync(s.real),a=o.atime,l=o.mtime,u=_(T(c.WASI_CLOCK_REALTIME)),f=c.WASI_FILESTAT_SET_ATIM|c.WASI_FILESTAT_SET_ATIM_NOW;if((n&f)===f)return c.WASI_EINVAL;let h=c.WASI_FILESTAT_SET_MTIM|c.WASI_FILESTAT_SET_MTIM_NOW;return(n&h)===h?c.WASI_EINVAL:((n&c.WASI_FILESTAT_SET_ATIM)===c.WASI_FILESTAT_SET_ATIM?a=_(t):(n&c.WASI_FILESTAT_SET_ATIM_NOW)===c.WASI_FILESTAT_SET_ATIM_NOW&&(a=u),(n&c.WASI_FILESTAT_SET_MTIM)===c.WASI_FILESTAT_SET_MTIM?l=_(r):(n&c.WASI_FILESTAT_SET_MTIM_NOW)===c.WASI_FILESTAT_SET_MTIM_NOW&&(l=u),i.futimesSync(s.real,new Date(a),new Date(l)),c.WASI_ESUCCESS)}),fd_prestat_get:S((e,t)=>{let r=y(e,BigInt(0));return this.refreshMemory(),this.view.setUint8(t,c.WASI_PREOPENTYPE_DIR),this.view.setUint32(t+4,n.byteLength(r.fakePath??r.path??""),!0),c.WASI_ESUCCESS}),fd_prestat_dir_name:S((e,t,r)=>{let i=y(e,BigInt(0));return this.refreshMemory(),n.from(this.memory.buffer).write(i.fakePath??i.path??"",t,r,"utf8"),c.WASI_ESUCCESS}),fd_pwrite:S((e,t,r,n,s)=>{let o=y(e,c.WASI_RIGHT_FD_WRITE|c.WASI_RIGHT_FD_SEEK),a=0;return A(t,r).forEach(e=>{let t=0;for(;t<e.byteLength;)t+=i.writeSync(o.real,e,t,e.byteLength-t,Number(n)+a+t);a+=t}),this.view.setUint32(s,a,!0),c.WASI_ESUCCESS}),fd_write:S((e,t,r,n)=>{let s=y(e,c.WASI_RIGHT_FD_WRITE),o=e==c.WASI_STDOUT_FILENO,a=e==c.WASI_STDERR_FILENO,l=0;return A(t,r).forEach(e=>{if(0!=e.byteLength){if(o&&null!=this.sendStdout)this.sendStdout(e),l+=e.byteLength;else if(a&&null!=this.sendStderr)this.sendStderr(e),l+=e.byteLength;else{let t=0;for(;t<e.byteLength;){let r=i.writeSync(s.real,e,t,e.byteLength-t,s.offset?Number(s.offset):null);s.offset&&(s.offset+=BigInt(r)),t+=r}l+=t}}}),this.view.setUint32(n,l,!0),c.WASI_ESUCCESS}),fd_pread:S((e,t,r,n,s)=>{let o=y(e,c.WASI_RIGHT_FD_READ|c.WASI_RIGHT_FD_SEEK),a=0;e:for(let e of A(t,r)){let t=0;for(;t<e.byteLength;){let r=e.byteLength-t,s=i.readSync(o.real,e,t,e.byteLength-t,Number(n)+a+t);if(t+=s,a+=s,0===s||s<r)break e}a+=t}return this.view.setUint32(s,a,!0),c.WASI_ESUCCESS}),fd_read:S((e,t,r,n)=>{let s=y(e,c.WASI_RIGHT_FD_READ),o=e==c.WASI_STDIN_FILENO,a=0;e:for(let e of A(t,r)){let t=0;for(;t<e.byteLength;){let r=e.byteLength-t,n=o||void 0===s.offset?null:Number(s.offset),l=0;if(o){if(null!=this.getStdin)null==this.stdinBuffer&&(this.stdinBuffer=this.getStdin()),null!=this.stdinBuffer&&((l=this.stdinBuffer.copy(e))==this.stdinBuffer.length?this.stdinBuffer=void 0:this.stdinBuffer=this.stdinBuffer.slice(l),l>0&&(this.lastStdin=new Date().valueOf()));else{null!=this.sleep||E||(E=!0,console.log("(cpu waiting for stdin: please define a way to sleep!) "));try{l=i.readSync(s.real,e,t,r,n)}catch(e){}0==l?this.shortPause():this.lastStdin=new Date().valueOf()}}else l=i.readSync(s.real,e,t,r,n);if(s.filetype==c.WASI_FILETYPE_REGULAR_FILE&&(s.offset=(s.offset?s.offset:BigInt(0))+BigInt(l)),t+=l,a+=l,0===l||l<r)break e}}return this.view.setUint32(n,a,!0),c.WASI_ESUCCESS}),fd_readdir:S((e,t,r,o,a)=>{let l=y(e,c.WASI_RIGHT_FD_READDIR);this.refreshMemory();let u=i.readdirSync(l.path,{withFileTypes:!0}),f=t;for(let e=Number(o);e<u.length;e+=1){let o;let a=u[e],h=n.byteLength(a.name);if(t-f>r||(this.view.setBigUint64(t,BigInt(e+1),!0),(t+=8)-f>r))break;let d=i.lstatSync(s.resolve(l.path,a.name));if(this.view.setBigUint64(t,BigInt(d.ino),!0),(t+=8)-f>r||(this.view.setUint32(t,h,!0),(t+=4)-f>r))break;switch(!0){case d.isBlockDevice():o=c.WASI_FILETYPE_BLOCK_DEVICE;break;case d.isCharacterDevice():o=c.WASI_FILETYPE_CHARACTER_DEVICE;break;case d.isDirectory():o=c.WASI_FILETYPE_DIRECTORY;break;case d.isFIFO():o=c.WASI_FILETYPE_SOCKET_STREAM;break;case d.isFile():o=c.WASI_FILETYPE_REGULAR_FILE;break;case d.isSocket():o=c.WASI_FILETYPE_SOCKET_STREAM;break;case d.isSymbolicLink():o=c.WASI_FILETYPE_SYMBOLIC_LINK;break;default:o=c.WASI_FILETYPE_UNKNOWN}if(this.view.setUint8(t,o),(t+=4)+h>=f+r)break;n.from(this.memory.buffer).write(a.name,t),t+=h}let h=t-f;return this.view.setUint32(a,Math.min(h,r),!0),c.WASI_ESUCCESS}),fd_renumber:S((e,t)=>(y(e,BigInt(0)),y(t,BigInt(0)),i.closeSync(this.FD_MAP.get(e).real),this.FD_MAP.set(e,this.FD_MAP.get(t)),this.FD_MAP.delete(t),c.WASI_ESUCCESS)),fd_seek:S((e,t,r,n)=>{let i=y(e,c.WASI_RIGHT_FD_SEEK);switch(this.refreshMemory(),r){case c.WASI_WHENCE_CUR:i.offset=(i.offset?i.offset:BigInt(0))+BigInt(t);break;case c.WASI_WHENCE_END:let{size:s}=this.fstatSync(i.real);i.offset=BigInt(s)+BigInt(t);break;case c.WASI_WHENCE_SET:i.offset=BigInt(t)}if(null==i.offset)throw Error("stats.offset must be defined");return this.view.setBigUint64(n,i.offset,!0),c.WASI_ESUCCESS}),fd_tell:S((e,t)=>{let r=y(e,c.WASI_RIGHT_FD_TELL);return this.refreshMemory(),r.offset||(r.offset=BigInt(0)),this.view.setBigUint64(t,r.offset,!0),c.WASI_ESUCCESS}),fd_sync:S(e=>{let t=y(e,c.WASI_RIGHT_FD_SYNC);return i.fsyncSync(t.real),c.WASI_ESUCCESS}),path_create_directory:S((e,t,r)=>{let o=y(e,c.WASI_RIGHT_PATH_CREATE_DIRECTORY);if(!o.path)return c.WASI_EINVAL;this.refreshMemory();let a=n.from(this.memory.buffer,t,r).toString();return i.mkdirSync(s.resolve(o.path,a)),c.WASI_ESUCCESS}),path_filestat_get:S((e,t,r,o,a)=>{let l;let u=y(e,c.WASI_RIGHT_PATH_FILESTAT_GET);if(!u.path)return c.WASI_EINVAL;this.refreshMemory();let f=n.from(this.memory.buffer,r,o).toString();return l=t?i.statSync(s.resolve(u.path,f)):i.lstatSync(s.resolve(u.path,f)),this.view.setBigUint64(a,BigInt(l.dev),!0),a+=8,this.view.setBigUint64(a,BigInt(l.ino),!0),a+=8,this.view.setUint8(a,I(this,void 0,l).filetype),a+=8,this.view.setBigUint64(a,BigInt(l.nlink),!0),a+=8,this.view.setBigUint64(a,BigInt(l.size),!0),a+=8,this.view.setBigUint64(a,d(l.atimeMs),!0),a+=8,this.view.setBigUint64(a,d(l.mtimeMs),!0),a+=8,this.view.setBigUint64(a,d(l.ctimeMs),!0),c.WASI_ESUCCESS}),path_filestat_set_times:S((e,t,r,o,a,l,u)=>{let f=y(e,c.WASI_RIGHT_PATH_FILESTAT_SET_TIMES);if(!f.path)return c.WASI_EINVAL;this.refreshMemory();let h=this.fstatSync(f.real),d=h.atime,S=h.mtime,p=_(T(c.WASI_CLOCK_REALTIME)),I=c.WASI_FILESTAT_SET_ATIM|c.WASI_FILESTAT_SET_ATIM_NOW;if((u&I)===I)return c.WASI_EINVAL;let E=c.WASI_FILESTAT_SET_MTIM|c.WASI_FILESTAT_SET_MTIM_NOW;if((u&E)===E)return c.WASI_EINVAL;(u&c.WASI_FILESTAT_SET_ATIM)===c.WASI_FILESTAT_SET_ATIM?d=_(a):(u&c.WASI_FILESTAT_SET_ATIM_NOW)===c.WASI_FILESTAT_SET_ATIM_NOW&&(d=p),(u&c.WASI_FILESTAT_SET_MTIM)===c.WASI_FILESTAT_SET_MTIM?S=_(l):(u&c.WASI_FILESTAT_SET_MTIM_NOW)===c.WASI_FILESTAT_SET_MTIM_NOW&&(S=p);let A=n.from(this.memory.buffer,r,o).toString();return i.utimesSync(s.resolve(f.path,A),new Date(d),new Date(S)),c.WASI_ESUCCESS}),path_link:S((e,t,r,o,a,l,u)=>{let f=y(e,c.WASI_RIGHT_PATH_LINK_SOURCE),h=y(a,c.WASI_RIGHT_PATH_LINK_TARGET);if(!f.path||!h.path)return c.WASI_EINVAL;this.refreshMemory();let d=n.from(this.memory.buffer,r,o).toString(),_=n.from(this.memory.buffer,l,u).toString();return i.linkSync(s.resolve(f.path,d),s.resolve(h.path,_)),c.WASI_ESUCCESS}),path_open:S((e,t,r,o,u,f,h,d,_)=>{let S,I,E,A;let g=y(e,c.WASI_RIGHT_PATH_OPEN);f=BigInt(f),h=BigInt(h);let T=(f&(c.WASI_RIGHT_FD_READ|c.WASI_RIGHT_FD_READDIR))!==BigInt(0),m=(f&(c.WASI_RIGHT_FD_DATASYNC|c.WASI_RIGHT_FD_WRITE|c.WASI_RIGHT_FD_ALLOCATE|c.WASI_RIGHT_FD_FILESTAT_SET_SIZE))!==BigInt(0);m&&T?S=i.constants.O_RDWR:T?S=i.constants.O_RDONLY:m&&(S=i.constants.O_WRONLY);let v=f|c.WASI_RIGHT_PATH_OPEN,R=f|h;(u&c.WASI_O_CREAT)!=0&&(S|=i.constants.O_CREAT,v|=c.WASI_RIGHT_PATH_CREATE_FILE),(u&c.WASI_O_DIRECTORY)!=0&&(S|=i.constants.O_DIRECTORY),(u&c.WASI_O_EXCL)!=0&&(S|=i.constants.O_EXCL),(u&c.WASI_O_TRUNC)!=0&&(S|=i.constants.O_TRUNC,v|=c.WASI_RIGHT_PATH_FILESTAT_SET_SIZE),(d&c.WASI_FDFLAG_APPEND)!=0&&(S|=i.constants.O_APPEND),(d&c.WASI_FDFLAG_DSYNC)!=0&&(i.constants.O_DSYNC?S|=i.constants.O_DSYNC:S|=i.constants.O_SYNC,R|=c.WASI_RIGHT_FD_DATASYNC),(d&c.WASI_FDFLAG_NONBLOCK)!=0&&(S|=i.constants.O_NONBLOCK),(d&c.WASI_FDFLAG_RSYNC)!=0&&(i.constants.O_RSYNC?S|=i.constants.O_RSYNC:S|=i.constants.O_SYNC,R|=c.WASI_RIGHT_FD_SYNC),(d&c.WASI_FDFLAG_SYNC)!=0&&(S|=i.constants.O_SYNC,R|=c.WASI_RIGHT_FD_SYNC),m&&(S&(i.constants.O_APPEND|i.constants.O_TRUNC))==0&&(R|=c.WASI_RIGHT_FD_SEEK),this.refreshMemory();let b=n.from(this.memory.buffer,r,o).toString();if("dev/tty"==b)return this.view.setUint32(_,c.WASI_STDIN_FILENO,!0),c.WASI_ESUCCESS;if(a("path_open",b),b.startsWith("proc/"))throw new l.WASIError(c.WASI_EBADF);let w=s.resolve(g.path,b);try{I=i.realpathSync(w)}catch(e){if(e?.code==="ENOENT")I=w;else throw e}if(m)try{E=i.statSync(I).isDirectory()}catch(e){}A=!m&&E?i.openSync(I,i.constants.O_RDONLY):i.openSync(I,S);let O=this.getUnusedFileDescriptor();return this.FD_MAP.set(O,{real:A,filetype:void 0,rights:{base:v,inheriting:R},path:I}),p(this,O),this.view.setUint32(_,O,!0),c.WASI_ESUCCESS}),path_readlink:S((e,t,r,o,a,l)=>{let u=y(e,c.WASI_RIGHT_PATH_READLINK);if(!u.path)return c.WASI_EINVAL;this.refreshMemory();let f=n.from(this.memory.buffer,t,r).toString(),h=s.resolve(u.path,f),d=i.readlinkSync(h),_=n.from(this.memory.buffer).write(d,o,a);return this.view.setUint32(l,_,!0),c.WASI_ESUCCESS}),path_remove_directory:S((e,t,r)=>{let o=y(e,c.WASI_RIGHT_PATH_REMOVE_DIRECTORY);if(!o.path)return c.WASI_EINVAL;this.refreshMemory();let a=n.from(this.memory.buffer,t,r).toString();return i.rmdirSync(s.resolve(o.path,a)),c.WASI_ESUCCESS}),path_rename:S((e,t,r,o,a,l)=>{let u=y(e,c.WASI_RIGHT_PATH_RENAME_SOURCE),f=y(o,c.WASI_RIGHT_PATH_RENAME_TARGET);if(!u.path||!f.path)return c.WASI_EINVAL;this.refreshMemory();let h=n.from(this.memory.buffer,t,r).toString(),d=n.from(this.memory.buffer,a,l).toString();return i.renameSync(s.resolve(u.path,h),s.resolve(f.path,d)),c.WASI_ESUCCESS}),path_symlink:S((e,t,r,o,a)=>{let l=y(r,c.WASI_RIGHT_PATH_SYMLINK);if(!l.path)return c.WASI_EINVAL;this.refreshMemory();let u=n.from(this.memory.buffer,e,t).toString(),f=n.from(this.memory.buffer,o,a).toString();return i.symlinkSync(u,s.resolve(l.path,f)),c.WASI_ESUCCESS}),path_unlink_file:S((e,t,r)=>{let o=y(e,c.WASI_RIGHT_PATH_UNLINK_FILE);if(!o.path)return c.WASI_EINVAL;this.refreshMemory();let a=n.from(this.memory.buffer,t,r).toString();return i.unlinkSync(s.resolve(o.path,a)),c.WASI_ESUCCESS}),poll_oneoff:(e,t,r,n)=>{let i=0,s="",a=BigInt(0),l=-1,u="read",f=0,h=BigInt(this.bindings.hrtime());this.refreshMemory();let d=e;for(let n=0;n<r;n+=1){let r=this.view.getBigUint64(e,!0);e+=8;let h=this.view.getUint8(e);switch(e+=8,o.enabled&&o(s=h==c.WASI_EVENTTYPE_CLOCK?"poll_oneoff (type=WASI_EVENTTYPE_CLOCK): ":h==c.WASI_EVENTTYPE_FD_READ?"poll_oneoff (type=WASI_EVENTTYPE_FD_READ): ":"poll_oneoff (type=WASI_EVENTTYPE_FD_WRITE): "),h){case c.WASI_EVENTTYPE_CLOCK:{let n=this.view.getUint32(e,!0);e+=8;let l=this.view.getBigUint64(e,!0);e+=16;let u=this.view.getUint16(e,!0);e+=8;let h=1===u;o.enabled&&o(s,{clockid:n,timeout:l,absolute:h}),h||(f=Number(l/BigInt(1e6)));let d=c.WASI_ESUCCESS,_=T(n);if(null==_)d=c.WASI_EINVAL;else{let e=(h?l:_+l)-_;e>a&&(a=e)}this.view.setBigUint64(t,r,!0),t+=8,this.view.setUint16(t,d,!0),t+=2,this.view.setUint8(t,c.WASI_EVENTTYPE_CLOCK),t+=6,i+=1;break}case c.WASI_EVENTTYPE_FD_READ:case c.WASI_EVENTTYPE_FD_WRITE:l=this.view.getUint32(e,!0),u=h==c.WASI_EVENTTYPE_FD_READ?"read":"write",e+=4,o(s,"fd =",l),e+=28,this.view.setBigUint64(t,r,!0),t+=8,this.view.setUint16(t,c.WASI_ENOSYS,!0),t+=2,this.view.setUint8(t,h),t+=6,i+=1,l==c.WASI_STDIN_FILENO&&c.WASI_EVENTTYPE_FD_READ==h&&this.shortPause();break;default:return c.WASI_EINVAL}e-d!=48&&console.warn("*** BUG in wasi-js in poll_oneoff ",{i:n,sin:e,last_sin:d,diff:e-d}),d=e}if(this.view.setUint32(n,i,!0),2==i&&l>=0){let e=this.wasiImport.sock_pollSocket(l,u,f);if(e!=c.WASI_ENOSYS)return e}if(a>0&&(a-=BigInt(this.bindings.hrtime())-h)>=1e6){if(null!=this.sleep||E||(E=!0,console.log("(100% cpu burning waiting for stdin: please define a way to sleep!) ")),null!=this.sleep){let e=_(a);this.sleep(e)}else{let e=BigInt(this.bindings.hrtime())+a;for(;BigInt(this.bindings.hrtime())<e;);}}return c.WASI_ESUCCESS},proc_exit:e=>(this.bindings.exit(e),c.WASI_ESUCCESS),proc_raise:e=>e in c.SIGNAL_MAP?(this.bindings.kill(c.SIGNAL_MAP[e]),c.WASI_ESUCCESS):c.WASI_EINVAL,random_get:(e,t)=>(this.refreshMemory(),this.bindings.randomFillSync(new Uint8Array(this.memory.buffer),e,t),c.WASI_ESUCCESS),sched_yield:()=>c.WASI_ESUCCESS,sock_recv:()=>c.WASI_ENOSYS,sock_send:()=>c.WASI_ENOSYS,sock_shutdown:()=>c.WASI_ENOSYS,sock_fcntlSetFlags:(e,t)=>c.WASI_ENOSYS,sock_pollSocket:(e,t,r)=>c.WASI_ENOSYS},o.enabled&&Object.keys(this.wasiImport).forEach(e=>{let t=this.wasiImport[e];this.wasiImport[e]=function(...r){o(e,r);try{let e=t(...r);return o("result",e),e}catch(e){throw o("error: ",e),e}}})}getState(){return{env:this.env,FD_MAP:this.FD_MAP,bindings:this.bindings}}setState(e){this.env=e.env,this.FD_MAP=e.FD_MAP,this.bindings=e.bindings}fstatSync(e){if(e<=2)try{return this.bindings.fs.fstatSync(e)}catch(t){let e=new Date;return{dev:0,mode:8592,nlink:1,uid:0,gid:0,rdev:0,blksize:65536,ino:0,size:0,blocks:0,atimeMs:e.valueOf(),mtimeMs:e.valueOf(),ctimeMs:e.valueOf(),birthtimeMs:0,atime:new Date,mtime:new Date,ctime:new Date,birthtime:new Date(0)}}return this.bindings.fs.fstatSync(e)}shortPause(){null!=this.sleep&&new Date().valueOf()-this.lastStdin>2e3&&this.sleep(50)}getUnusedFileDescriptor(e=3){let t=e;for(;this.FD_MAP.has(t);)t+=1;if(t>32768)throw Error("no available file descriptors");return t}refreshMemory(){this.view&&0!==this.view.buffer.byteLength||(this.view=new DataView(this.memory.buffer))}setMemory(e){this.memory=e}start(e,t){let r=e.exports;if(null===r||"object"!=typeof r)throw Error(`instance.exports must be an Object. Received ${r}.`);if(null==t&&!((t=r.memory)instanceof WebAssembly.Memory))throw Error(`instance.exports.memory must be a WebAssembly.Memory. Recceived ${t}.`);this.setMemory(t),r._start&&r._start()}getImportNamespace(e){let t=null;for(let r of WebAssembly.Module.imports(e))if("function"===r.kind&&r.module.startsWith("wasi_")){if(t){if(t!==r.module)throw Error("Multiple namespaces detected.")}else t=r.module}return t}getImports(e){switch(this.getImportNamespace(e)){case"wasi_unstable":return{wasi_unstable:this.wasiImport};case"wasi_snapshot_preview1":return{wasi_snapshot_preview1:this.wasiImport};default:throw Error("Can't detect a WASI namespace for the WebAssembly Module")}}initWasiFdInfo(){if(null!=this.env.WASI_FD_INFO){let e=JSON.parse(this.env.WASI_FD_INFO);for(let t in e){console.log(t);let r=parseInt(t);if(this.FD_MAP.has(r))continue;let n=e[t];try{this.fstatSync(n)}catch(e){console.log("discarding ",{wasi_fd:t,real:n});continue}let i={real:n,filetype:c.WASI_FILETYPE_SOCKET_STREAM,rights:{base:f,inheriting:BigInt(0)}};this.FD_MAP.set(r,i)}console.log("after initWasiFdInfo: ",this.FD_MAP),console.log("fdInfo = ",e)}else console.log("no WASI_FD_INFO")}}t.default=A},63959:function(e,t,r){"use strict";var n=r(93989),i=Uint8Array,s=Uint16Array,o=Uint32Array,a=new i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l=new i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),u=new i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),c=function(e,t){for(var r=new s(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new o(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return[r,i]},f=c(a,2),h=f[0],d=f[1];h[28]=258,d[258]=28;for(var _=c(l,0),S=_[0],p=_[1],I=new s(32768),E=0;E<32768;++E){var A=(43690&E)>>>1|(21845&E)<<1;A=(61680&(A=(52428&A)>>>2|(13107&A)<<2))>>>4|(3855&A)<<4,I[E]=((65280&A)>>>8|(255&A)<<8)>>>1}for(var y=function(e,t,r){for(var n,i=e.length,o=0,a=new s(t);o<i;++o)e[o]&&++a[e[o]-1];var l=new s(t);for(o=0;o<t;++o)l[o]=l[o-1]+a[o-1]<<1;if(r){n=new s(1<<t);var u=15-t;for(o=0;o<i;++o)if(e[o])for(var c=o<<4|e[o],f=t-e[o],h=l[e[o]-1]++<<f,d=h|(1<<f)-1;h<=d;++h)n[I[h]>>>u]=c}else for(o=0,n=new s(i);o<i;++o)e[o]&&(n[o]=I[l[e[o]-1]++]>>>15-e[o]);return n},g=new i(288),E=0;E<144;++E)g[E]=8;for(var E=144;E<256;++E)g[E]=9;for(var E=256;E<280;++E)g[E]=7;for(var E=280;E<288;++E)g[E]=8;for(var T=new i(32),E=0;E<32;++E)T[E]=5;var m=y(g,9,0),v=y(g,9,1),R=y(T,5,0),b=y(T,5,1),w=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},O=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},W=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},C=function(e){return(e+7)/8|0},N=function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var n=new(2==e.BYTES_PER_ELEMENT?s:4==e.BYTES_PER_ELEMENT?o:i)(r-t);return n.set(e.subarray(t,r)),n};t.FlateErrorCode={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14};var L=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F=function(e,t,r){var n=Error(t||L[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,F),!r)throw n;return n},D=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new i(0);var s=!t||r,o=!r||r.i;r||(r={}),t||(t=new i(3*n));var c=function(e){var r=t.length;if(e>r){var n=new i(Math.max(2*r,e));n.set(t),t=n}},f=r.f||0,d=r.p||0,_=r.b||0,p=r.l,I=r.d,E=r.m,A=r.n,g=8*n;do{if(!p){f=O(e,d,1);var T=O(e,d+1,3);if(d+=3,T){if(1==T)p=v,I=b,E=9,A=5;else if(2==T){var m=O(e,d,31)+257,R=O(e,d+10,15)+4,L=m+O(e,d+5,31)+1;d+=14;for(var D=new i(L),P=new i(19),G=0;G<R;++G)P[u[G]]=O(e,d+3*G,7);d+=3*R;for(var M=w(P),k=(1<<M)-1,B=y(P,M,1),G=0;G<L;){var H=B[O(e,d,k)];d+=15&H;var U=H>>>4;if(U<16)D[G++]=U;else{var x=0,j=0;for(16==U?(j=3+O(e,d,3),d+=2,x=D[G-1]):17==U?(j=3+O(e,d,7),d+=3):18==U&&(j=11+O(e,d,127),d+=7);j--;)D[G++]=x}}var Y=D.subarray(0,m),V=D.subarray(m);E=w(Y),A=w(V),p=y(Y,E,1),I=y(V,A,1)}else F(1)}else{var U=C(d)+4,K=e[U-4]|e[U-3]<<8,$=U+K;if($>n){o&&F(0);break}s&&c(_+K),t.set(e.subarray(U,$),_),r.b=_+=K,r.p=d=8*$,r.f=f;continue}if(d>g){o&&F(0);break}}s&&c(_+131072);for(var z=(1<<E)-1,q=(1<<A)-1,X=d;;X=d){var x=p[W(e,d)&z],Z=x>>>4;if((d+=15&x)>g){o&&F(0);break}if(x||F(2),Z<256)t[_++]=Z;else if(256==Z){X=d,p=null;break}else{var J=Z-254;if(Z>264){var G=Z-257,Q=a[G];J=O(e,d,(1<<Q)-1)+h[G],d+=Q}var ee=I[W(e,d)&q],et=ee>>>4;ee||F(3),d+=15&ee;var V=S[et];if(et>3){var Q=l[et];V+=W(e,d)&(1<<Q)-1,d+=Q}if(d>g){o&&F(0);break}s&&c(_+131072);for(var er=_+J;_<er;_+=4)t[_]=t[_-V],t[_+1]=t[_+1-V],t[_+2]=t[_+2-V],t[_+3]=t[_+3-V];_=er}}r.l=p,r.p=X,r.b=_,r.f=f,p&&(f=1,r.m=E,r.d=I,r.n=A)}while(!f);return _==t.length?t:N(t,0,_)},P=function(e,t,r){r<<=7&t;var n=t/8|0;e[n]|=r,e[n+1]|=r>>>8},G=function(e,t,r){r<<=7&t;var n=t/8|0;e[n]|=r,e[n+1]|=r>>>8,e[n+2]|=r>>>16},M=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,a=r.slice();if(!o)return[Y,0];if(1==o){var l=new i(r[0].s+1);return l[r[0].s]=1,[l,1]}r.sort(function(e,t){return e.f-t.f}),r.push({s:-1,f:25001});var u=r[0],c=r[1],f=0,h=1,d=2;for(r[0]={s:-1,f:u.f+c.f,l:u,r:c};h!=o-1;)u=r[r[f].f<r[d].f?f++:d++],c=r[f!=h&&r[f].f<r[d].f?f++:d++],r[h++]={s:-1,f:u.f+c.f,l:u,r:c};for(var _=a[0].s,n=1;n<o;++n)a[n].s>_&&(_=a[n].s);var S=new s(_+1),p=k(r[h-1],S,0);if(p>t){var n=0,I=0,E=p-t,A=1<<E;for(a.sort(function(e,t){return S[t.s]-S[e.s]||e.f-t.f});n<o;++n){var y=a[n].s;if(S[y]>t)I+=A-(1<<p-S[y]),S[y]=t;else break}for(I>>>=E;I>0;){var g=a[n].s;S[g]<t?I-=1<<t-S[g]++-1:++n}for(;n>=0&&I;--n){var T=a[n].s;S[T]==t&&(--S[T],++I)}p=t}return[new i(S),p]},k=function(e,t,r){return -1==e.s?Math.max(k(e.l,t,r+1),k(e.r,t,r+1)):t[e.s]=r},B=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new s(++t),n=0,i=e[0],o=1,a=function(e){r[n++]=e},l=1;l<=t;++l)if(e[l]==i&&l!=t)++o;else{if(!i&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(i),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(i);o=1,i=e[l]}return[r.subarray(0,n),t]},H=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},U=function(e,t,r){var n=r.length,i=C(t+2);e[i]=255&n,e[i+1]=n>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1];for(var s=0;s<n;++s)e[i+s+4]=r[s];return(i+4+n)*8},x=function(e,t,r,n,i,o,c,f,h,d,_){P(t,_++,r),++i[256];for(var S,p,I,E,A=M(i,15),v=A[0],b=A[1],w=M(o,15),O=w[0],W=w[1],C=B(v),N=C[0],L=C[1],F=B(O),D=F[0],k=F[1],x=new s(19),j=0;j<N.length;++j)x[31&N[j]]++;for(var j=0;j<D.length;++j)x[31&D[j]]++;for(var Y=M(x,7),V=Y[0],K=Y[1],$=19;$>4&&!V[u[$-1]];--$);var z=d+5<<3,q=H(i,g)+H(o,T)+c,X=H(i,v)+H(o,O)+c+14+3*$+H(x,V)+(2*x[16]+3*x[17]+7*x[18]);if(z<=q&&z<=X)return U(t,_,e.subarray(h,h+d));if(P(t,_,1+(X<q)),_+=2,X<q){S=y(v,b,0),p=v,I=y(O,W,0),E=O;var Z=y(V,K,0);P(t,_,L-257),P(t,_+5,k-1),P(t,_+10,$-4),_+=14;for(var j=0;j<$;++j)P(t,_+3*j,V[u[j]]);_+=3*$;for(var J=[N,D],Q=0;Q<2;++Q)for(var ee=J[Q],j=0;j<ee.length;++j){var et=31&ee[j];P(t,_,Z[et]),_+=V[et],et>15&&(P(t,_,ee[j]>>>5&127),_+=ee[j]>>>12)}}else S=m,p=g,I=R,E=T;for(var j=0;j<f;++j)if(n[j]>255){var et=n[j]>>>18&31;G(t,_,S[et+257]),_+=p[et+257],et>7&&(P(t,_,n[j]>>>23&31),_+=a[et]);var er=31&n[j];G(t,_,I[er]),_+=E[er],er>3&&(G(t,_,n[j]>>>5&8191),_+=l[er])}else G(t,_,S[n[j]]),_+=p[n[j]];return G(t,_,S[256]),_+p[256]},j=new o([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Y=new i(0),V=function(e,t,r,n,u,c){var f=e.length,h=new i(n+f+5*(1+Math.ceil(f/7e3))+u),_=h.subarray(n,h.length-u),S=0;if(!t||f<8)for(var I=0;I<=f;I+=65535){var E=I+65535;E>=f&&(_[S>>3]=c),S=U(_,S+1,e.subarray(I,E))}else{for(var A=j[t-1],y=A>>>13,g=8191&A,T=(1<<r)-1,m=new s(32768),v=new s(T+1),R=Math.ceil(r/3),b=2*R,w=function(t){return(e[t]^e[t+1]<<R^e[t+2]<<b)&T},O=new o(25e3),W=new s(288),L=new s(32),F=0,D=0,I=0,P=0,G=0,M=0;I<f;++I){var k=w(I),B=32767&I,H=v[k];if(m[B]=H,v[k]=B,G<=I){var V=f-I;if((F>7e3||P>24576)&&V>423){S=x(e,_,0,O,W,L,D,P,M,I-M,S),P=F=D=0,M=I;for(var K=0;K<286;++K)W[K]=0;for(var K=0;K<30;++K)L[K]=0}var $=2,z=0,q=g,X=B-H&32767;if(V>2&&k==w(I-X))for(var Z=Math.min(y,V)-1,J=Math.min(32767,I),Q=Math.min(258,V);X<=J&&--q&&B!=H;){if(e[I+$]==e[I+$-X]){for(var ee=0;ee<Q&&e[I+ee]==e[I+ee-X];++ee);if(ee>$){if($=ee,z=X,ee>Z)break;for(var et=Math.min(X,ee-2),er=0,K=0;K<et;++K){var en=I-X+K+32768&32767,ei=m[en],es=en-ei+32768&32767;es>er&&(er=es,H=en)}}}H=m[B=H],X+=B-H+32768&32767}if(z){O[P++]=268435456|d[$]<<18|p[z];var eo=31&d[$],ea=31&p[z];D+=a[eo]+l[ea],++W[257+eo],++L[ea],G=I+$,++F}else O[P++]=e[I],++W[e[I]]}}S=x(e,_,c,O,W,L,D,P,M,I-M,S),!c&&7&S&&(S=U(_,S+1,Y))}return N(h,0,n+C(S)+u)},K=function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var r=t,n=9;--n;)r=(1&r&&-306674912)^r>>>1;e[t]=r}return e}(),$=function(){var e=-1;return{p:function(t){for(var r=e,n=0;n<t.length;++n)r=K[255&r^t[n]]^r>>>8;e=r},d:function(){return~e}}},z=function(){var e=1,t=0;return{p:function(r){for(var n=e,i=t,s=0|r.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)i+=n+=r[o];n=(65535&n)+15*(n>>16),i=(65535&i)+15*(i>>16)}e=n,t=i},d:function(){return e%=65521,t%=65521,(255&e)<<24|e>>>8<<16|(255&t)<<8|t>>>8}}},q=function(e,t,r,n,i){return V(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,r,n,!i)},X=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},Z=function(e,t,r){for(var n=e(),i=e.toString(),s=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<n.length;++o){var a=n[o],l=s[o];if("function"==typeof a){t+=";"+l+"=";var u=a.toString();if(a.prototype){if(-1!=u.indexOf("[native code]")){var c=u.indexOf(" ",8)+1;t+=u.slice(c,u.indexOf("(",c))}else for(var f in t+=u,a.prototype)t+=";"+l+".prototype."+f+"="+a.prototype[f].toString()}else t+=u}else r[l]=a}return[t,r]},J=[],Q=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},ee=function(e,t,r,i){if(!J[r]){for(var s,o="",a={},l=e.length-1,u=0;u<l;++u)o=(s=Z(e[u],o,a))[0],a=s[1];J[r]=Z(e[l],o,a)}var c=X({},J[r][1]);return n.default(J[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,c,Q(c),i)},et=function(){return[i,s,o,a,l,u,h,S,v,b,I,L,y,w,O,W,C,N,F,D,eC,ea,el]},er=function(){return[i,s,o,a,l,u,d,p,m,g,R,T,I,j,Y,y,P,G,M,k,B,H,U,x,C,N,V,q,eb,ea]},en=function(){return[ep,eA,eS,$,K]},ei=function(){return[eI,eE]},es=function(){return[ey,eS,z]},eo=function(){return[eg]},ea=function(e){return postMessage(e,[e.buffer])},el=function(e){return e&&e.size&&new i(e.size)},eu=function(e,t,r,n,i,s){var o=ee(r,n,i,function(e,t){o.terminate(),s(e,t)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}},ec=function(e){return e.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(t){return e.push(t.data[0],t.data[1])}},ef=function(e,t,r,n,i){var s,o=ee(e,n,i,function(e,r){e?(o.terminate(),t.ondata.call(t,e)):(r[1]&&o.terminate(),t.ondata.call(t,e,r[0],r[1]))});o.postMessage(r),t.push=function(e,r){t.ondata||F(5),s&&t.ondata(F(4,0,1),null,!!r),o.postMessage([e,s=r],[e.buffer])},t.terminate=function(){o.terminate()}},eh=function(e,t){return e[t]|e[t+1]<<8},ed=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},e_=function(e,t){return ed(e,t)+4294967296*ed(e,t+4)},eS=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},ep=function(e,t){var r=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&eS(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),r){e[3]=8;for(var n=0;n<=r.length;++n)e[n+10]=r.charCodeAt(n)}},eI=function(e){(31!=e[0]||139!=e[1]||8!=e[2])&&F(6,"invalid gzip data");var t=e[3],r=10;4&t&&(r+=e[10]|(e[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!e[r++]);return r+(2&t)},eE=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},eA=function(e){return 10+(e.filename&&e.filename.length+1||0)},ey=function(e,t){var r=t.level,n=0==r?0:r<6?1:9==r?3:2;e[0]=120,e[1]=n<<6|(n?32-2*n:1)},eg=function(e){((15&e[0])!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)&&F(6,"invalid zlib data"),32&e[1]&&F(6,"invalid zlib data: preset dictionaries not supported")};function eT(e,t){return t||"function"!=typeof e||(t=e,e={}),this.ondata=t,e}var em=function(){function e(e,t){t||"function"!=typeof e||(t=e,e={}),this.ondata=t,this.o=e||{}}return e.prototype.p=function(e,t){this.ondata(q(e,this.o,0,0,!t),t)},e.prototype.push=function(e,t){this.ondata||F(5),this.d&&F(4),this.d=t,this.p(e,t||!1)},e}();t.Deflate=em;var ev=function(e,t){ef([er,function(){return[ec,em]}],this,eT.call(this,e,t),function(e){onmessage=ec(new em(e.data))},6)};function eR(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),eu(e,t,[er],function(e){return ea(eb(e.data[0],e.data[1]))},0,r)}function eb(e,t){return q(e,t||{},0,0)}t.AsyncDeflate=ev,t.deflate=eR,t.deflateSync=eb;var ew=function(){function e(e){this.s={},this.p=new i(0),this.ondata=e}return e.prototype.e=function(e){this.ondata||F(5),this.d&&F(4);var t=this.p.length,r=new i(t+e.length);r.set(this.p),r.set(e,t),this.p=r},e.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,r=D(this.p,this.o,this.s);this.ondata(N(r,t,this.s.b),this.d),this.o=N(r,this.s.b-32768),this.s.b=this.o.length,this.p=N(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}();t.Inflate=ew;var eO=function(e){this.ondata=e,ef([et,function(){return[ec,ew]}],this,0,function(){onmessage=ec(new ew)},7)};function eW(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),eu(e,t,[et],function(e){return ea(D(e.data[0],el(e.data[1])))},1,r)}function eC(e,t){return D(e,t)}t.AsyncInflate=eO,t.inflate=eW,t.inflateSync=eC;var eN=function(){function e(e,t){this.c=$(),this.l=0,this.v=1,em.call(this,e,t)}return e.prototype.push=function(e,t){em.prototype.push.call(this,e,t)},e.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var r=q(e,this.o,this.v&&eA(this.o),t&&8,!t);this.v&&(ep(r,this.o),this.v=0),t&&(eS(r,r.length-8,this.c.d()),eS(r,r.length-4,this.l)),this.ondata(r,t)},e}();t.Gzip=eN,t.Compress=eN;var eL=function(e,t){ef([er,en,function(){return[ec,em,eN]}],this,eT.call(this,e,t),function(e){onmessage=ec(new eN(e.data))},8)};function eF(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),eu(e,t,[er,en,function(){return[eD]}],function(e){return ea(eD(e.data[0],e.data[1]))},2,r)}function eD(e,t){t||(t={});var r=$(),n=e.length;r.p(e);var i=q(e,t,eA(t),8),s=i.length;return ep(i,t),eS(i,s-8,r.d()),eS(i,s-4,n),i}t.AsyncGzip=eL,t.AsyncCompress=eL,t.gzip=eF,t.compress=eF,t.gzipSync=eD,t.compressSync=eD;var eP=function(){function e(e){this.v=1,ew.call(this,e)}return e.prototype.push=function(e,t){if(ew.prototype.e.call(this,e),this.v){var r=this.p.length>3?eI(this.p):4;if(r>=this.p.length&&!t)return;this.p=this.p.subarray(r),this.v=0}t&&(this.p.length<8&&F(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),ew.prototype.c.call(this,t)},e}();t.Gunzip=eP;var eG=function(e){this.ondata=e,ef([et,ei,function(){return[ec,ew,eP]}],this,0,function(){onmessage=ec(new eP)},9)};function eM(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),eu(e,t,[et,ei,function(){return[ek]}],function(e){return ea(ek(e.data[0]))},3,r)}function ek(e,t){return D(e.subarray(eI(e),-8),t||new i(eE(e)))}t.AsyncGunzip=eG,t.gunzip=eM,t.gunzipSync=ek;var eB=function(){function e(e,t){this.c=z(),this.v=1,em.call(this,e,t)}return e.prototype.push=function(e,t){em.prototype.push.call(this,e,t)},e.prototype.p=function(e,t){this.c.p(e);var r=q(e,this.o,this.v&&2,t&&4,!t);this.v&&(ey(r,this.o),this.v=0),t&&eS(r,r.length-4,this.c.d()),this.ondata(r,t)},e}();function eH(e,t){t||(t={});var r=z();r.p(e);var n=q(e,t,2,4);return ey(n,t),eS(n,n.length-4,r.d()),n}t.Zlib=eB,t.AsyncZlib=function(e,t){ef([er,es,function(){return[ec,em,eB]}],this,eT.call(this,e,t),function(e){onmessage=ec(new eB(e.data))},10)},t.zlib=function(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),eu(e,t,[er,es,function(){return[eH]}],function(e){return ea(eH(e.data[0],e.data[1]))},4,r)},t.zlibSync=eH;var eU=function(){function e(e){this.v=1,ew.call(this,e)}return e.prototype.push=function(e,t){if(ew.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}t&&(this.p.length<4&&F(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),ew.prototype.c.call(this,t)},e}();t.Unzlib=eU;var ex=function(e){this.ondata=e,ef([et,eo,function(){return[ec,ew,eU]}],this,0,function(){onmessage=ec(new eU)},11)};function ej(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),eu(e,t,[et,eo,function(){return[eY]}],function(e){return ea(eY(e.data[0],el(e.data[1])))},5,r)}function eY(e,t){return D((eg(e),e.subarray(2,-4)),t)}t.AsyncUnzlib=ex,t.unzlib=ej,t.unzlibSync=eY;var eV=function(){function e(e){this.G=eP,this.I=ew,this.Z=eU,this.ondata=e}return e.prototype.push=function(e,t){if(this.ondata||F(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var r=new i(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var n=this,s=function(){n.ondata.apply(n,arguments)};this.s=31==this.p[0]&&139==this.p[1]&&8==this.p[2]?new this.G(s):(15&this.p[0])!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},e}();t.Decompress=eV;var eK=function(){function e(e){this.G=eG,this.I=eO,this.Z=ex,this.ondata=e}return e.prototype.push=function(e,t){eV.prototype.push.call(this,e,t)},e}();t.AsyncDecompress=eK,t.decompress=function(e,t,r){return r||(r=t,t={}),"function"!=typeof r&&F(7),31==e[0]&&139==e[1]&&8==e[2]?eM(e,t,r):(15&e[0])!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?eW(e,t,r):ej(e,t,r)},t.decompressSync=function(e,t){return 31==e[0]&&139==e[1]&&8==e[2]?ek(e,t):(15&e[0])!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?D(e,t):eY(e,t)};var e$=function(e,t,r,n){for(var s in e){var o=e[s],a=t+s,l=n;Array.isArray(o)&&(l=X(n,o[1]),o=o[0]),o instanceof i?r[a]=[o,l]:(r[a+="/"]=[new i(0),l],e$(o,a,r,n))}},ez="undefined"!=typeof TextEncoder&&new TextEncoder,eq="undefined"!=typeof TextDecoder&&new TextDecoder,eX=0;try{eq.decode(Y,{stream:!0}),eX=1}catch(e){}var eZ=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return[t,N(e,r-1)];i?3==i?t+=String.fromCharCode(55296|(n=((15&n)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536)>>10,56320|1023&n):1&i?t+=String.fromCharCode((31&n)<<6|63&e[r++]):t+=String.fromCharCode((15&n)<<12|(63&e[r++])<<6|63&e[r++]):t+=String.fromCharCode(n)}},eJ=function(){function e(e){this.ondata=e,eX?this.t=new TextDecoder:this.p=Y}return e.prototype.push=function(e,t){if(this.ondata||F(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&F(8),this.t=null);return}this.p||F(4);var r=new i(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length);var n=eZ(r),s=n[0],o=n[1];t?(o.length&&F(8),this.p=null):this.p=o,this.ondata(s,t)},e}();t.DecodeUTF8=eJ;var eQ=function(){function e(e){this.ondata=e}return e.prototype.push=function(e,t){this.ondata||F(5),this.d&&F(4),this.ondata(e0(e),this.d=t||!1)},e}();function e0(e,t){if(t){for(var r=new i(e.length),n=0;n<e.length;++n)r[n]=e.charCodeAt(n);return r}if(ez)return ez.encode(e);for(var s=e.length,o=new i(e.length+(e.length>>1)),a=0,l=function(e){o[a++]=e},n=0;n<s;++n){if(a+5>o.length){var u=new i(a+8+(s-n<<1));u.set(o),o=u}var c=e.charCodeAt(n);c<128||t?l(c):(c<2048?l(192|c>>6):(c>55295&&c<57344?(l(240|(c=65536+(1047552&c)|1023&e.charCodeAt(++n))>>18),l(128|c>>12&63)):l(224|c>>12),l(128|c>>6&63)),l(128|63&c))}return N(o,0,a)}function e1(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}if(eq)return eq.decode(e);var i=eZ(e),s=i[0];return i[1].length&&F(8),s}t.EncodeUTF8=eQ,t.strToU8=e0,t.strFromU8=e1;var e2=function(e){return 1==e?3:e<6?2:9==e?1:0},e3=function(e,t){return t+30+eh(e,t+26)+eh(e,t+28)},e6=function(e,t,r){var n=eh(e,t+28),i=e1(e.subarray(t+46,t+46+n),!(2048&eh(e,t+8))),s=t+46+n,o=ed(e,t+20),a=r&&4294967295==o?e8(e,s):[o,ed(e,t+24),ed(e,t+42)],l=a[0],u=a[1],c=a[2];return[eh(e,t+10),l,u,i,s+eh(e,t+30)+eh(e,t+32),c]},e8=function(e,t){for(;1!=eh(e,t);t+=4+eh(e,t+2));return[e_(e,t+12),e_(e,t+4),e_(e,t+20)]},e4=function(e){var t=0;if(e)for(var r in e){var n=e[r].length;n>65535&&F(9),t+=n+4}return t},e5=function(e,t,r,n,i,s,o,a){var l=n.length,u=r.extra,c=a&&a.length,f=e4(u);eS(e,t,null!=o?33639248:67324752),t+=4,null!=o&&(e[t++]=20,e[t++]=r.os),e[t]=20,t+=2,e[t++]=r.flag<<1|(s<0&&8),e[t++]=i&&8,e[t++]=255&r.compression,e[t++]=r.compression>>8;var h=new Date(null==r.mtime?Date.now():r.mtime),d=h.getFullYear()-1980;if((d<0||d>119)&&F(10),eS(e,t,d<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),t+=4,-1!=s&&(eS(e,t,r.crc),eS(e,t+4,s<0?-s-2:s),eS(e,t+8,r.size)),eS(e,t+12,l),eS(e,t+14,f),t+=16,null!=o&&(eS(e,t,c),eS(e,t+6,r.attrs),eS(e,t+10,o),t+=14),e.set(n,t),t+=l,f)for(var _ in u){var S=u[_],p=S.length;eS(e,t,+_),eS(e,t+2,p),e.set(S,t+4),t+=4+p}return c&&(e.set(a,t),t+=c),t},e7=function(e,t,r,n,i){eS(e,t,101010256),eS(e,t+8,r),eS(e,t+10,r),eS(e,t+12,n),eS(e,t+16,i)},e9=function(){function e(e){this.filename=e,this.c=$(),this.size=0,this.compression=0}return e.prototype.process=function(e,t){this.ondata(null,e,t)},e.prototype.push=function(e,t){this.ondata||F(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},e}();t.ZipPassThrough=e9;var te=function(){function e(e,t){var r=this;t||(t={}),e9.call(this,e),this.d=new em(t,function(e,t){r.ondata(null,e,t)}),this.compression=8,this.flag=e2(t.level)}return e.prototype.process=function(e,t){try{this.d.push(e,t)}catch(e){this.ondata(e,null,t)}},e.prototype.push=function(e,t){e9.prototype.push.call(this,e,t)},e}();t.ZipDeflate=te;var tt=function(){function e(e,t){var r=this;t||(t={}),e9.call(this,e),this.d=new ev(t,function(e,t,n){r.ondata(e,t,n)}),this.compression=8,this.flag=e2(t.level),this.terminate=this.d.terminate}return e.prototype.process=function(e,t){this.d.push(e,t)},e.prototype.push=function(e,t){e9.prototype.push.call(this,e,t)},e}();t.AsyncZipDeflate=tt;var tr=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var t=this;if(this.ondata||F(5),2&this.d)this.ondata(F(4+(1&this.d)*8,0,1),null,!1);else{var r=e0(e.filename),n=r.length,s=e.comment,o=s&&e0(s),a=n!=e.filename.length||o&&s.length!=o.length,l=n+e4(e.extra)+30;n>65535&&this.ondata(F(11,0,1),null,!1);var u=new i(l);e5(u,0,e,r,a,-1);var c=[u],f=function(){for(var e=0,r=c;e<r.length;e++){var n=r[e];t.ondata(null,n,!1)}c=[]},h=this.d;this.d=0;var d=this.u.length,_=X(e,{f:r,u:a,o:o,t:function(){e.terminate&&e.terminate()},r:function(){if(f(),h){var e=t.u[d+1];e?e.r():t.d=1}h=1}}),S=0;e.ondata=function(r,n,s){if(r)t.ondata(r,n,s),t.terminate();else if(S+=n.length,c.push(n),s){var o=new i(16);eS(o,0,134695760),eS(o,4,e.crc),eS(o,8,S),eS(o,12,e.size),c.push(o),_.c=S,_.b=l+S+16,_.crc=e.crc,_.size=e.size,h&&_.r(),h=1}else h&&f()},this.u.push(_)}},e.prototype.end=function(){var e=this;if(2&this.d){this.ondata(F(4+(1&this.d)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){1&e.d&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var e=0,t=0,r=0,n=0,s=this.u;n<s.length;n++){var o=s[n];r+=46+o.f.length+e4(o.extra)+(o.o?o.o.length:0)}for(var a=new i(r+22),l=0,u=this.u;l<u.length;l++){var o=u[l];e5(a,e,o,o.f,o.u,-o.c-2,t,o.o),e+=46+o.f.length+e4(o.extra)+(o.o?o.o.length:0),t+=o.b}e7(a,e,this.u.length,r,t),this.ondata(null,a,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++)t[e].t();this.d=2},e}();t.Zip=tr,t.zip=function(e,t,r){r||(r=t,t={}),"function"!=typeof r&&F(7);var n={};e$(e,"",n,t);var s=Object.keys(n),o=s.length,a=0,l=0,u=o,c=Array(o),f=[],h=function(){for(var e=0;e<f.length;++e)f[e]()},d=function(e,t){ta(function(){r(e,t)})};ta(function(){d=r});var _=function(){var e=new i(l+22),t=a,r=l-a;l=0;for(var n=0;n<u;++n){var s=c[n];try{var o=s.c.length;e5(e,l,s,s.f,s.u,o);var f=30+s.f.length+e4(s.extra),h=l+f;e.set(s.c,h),e5(e,a,s,s.f,s.u,o,l,s.m),a+=16+f+(s.m?s.m.length:0),l=h+o}catch(e){return d(e,null)}}e7(e,a,c.length,r,t),d(null,e)};o||_();for(var S=function(e){var t=s[e],r=n[t],i=r[0],u=r[1],S=$(),p=i.length;S.p(i);var I=e0(t),E=I.length,A=u.comment,y=A&&e0(A),g=y&&y.length,T=e4(u.extra),m=0==u.level?0:8,v=function(r,n){if(r)h(),d(r,null);else{var i=n.length;c[e]=X(u,{size:p,crc:S.d(),c:n,f:I,m:y,u:E!=t.length||y&&A.length!=g,compression:m}),a+=30+E+T+i,l+=76+2*(E+T)+(g||0)+i,--o||_()}};if(E>65535&&v(F(11,0,1),null),m){if(p<16e4)try{v(null,eb(i,u))}catch(e){v(e,null)}else f.push(eR(i,u,v))}else v(null,i)},p=0;p<u;++p)S(p);return h},t.zipSync=function(e,t){t||(t={});var r={},n=[];e$(e,"",r,t);var s=0,o=0;for(var a in r){var l=r[a],u=l[0],c=l[1],f=0==c.level?0:8,h=e0(a),d=h.length,_=c.comment,S=_&&e0(_),p=S&&S.length,I=e4(c.extra);d>65535&&F(11);var E=f?eb(u,c):u,A=E.length,y=$();y.p(u),n.push(X(c,{size:u.length,crc:y.d(),c:E,f:h,m:S,u:d!=a.length||S&&_.length!=p,o:s,compression:f})),s+=30+d+I+A,o+=76+2*(d+I)+(p||0)+A}for(var g=new i(o+22),T=s,m=o-s,v=0;v<n.length;++v){var h=n[v];e5(g,h.o,h,h.f,h.u,h.c.length);var R=30+h.f.length+e4(h.extra);g.set(h.c,h.o+R),e5(g,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+R+(h.m?h.m.length:0)}return e7(g,s,n.length,m,T),g};var tn=function(){function e(){}return e.prototype.push=function(e,t){this.ondata(null,e,t)},e.compression=0,e}();t.UnzipPassThrough=tn;var ti=function(){function e(){var e=this;this.i=new ew(function(t,r){e.ondata(null,t,r)})}return e.prototype.push=function(e,t){try{this.i.push(e,t)}catch(e){this.ondata(e,null,t)}},e.compression=8,e}();t.UnzipInflate=ti;var ts=function(){function e(e,t){var r=this;t<32e4?this.i=new ew(function(e,t){r.ondata(null,e,t)}):(this.i=new eO(function(e,t,n){r.ondata(e,t,n)}),this.terminate=this.i.terminate)}return e.prototype.push=function(e,t){this.i.terminate&&(e=N(e,0)),this.i.push(e,t)},e.compression=8,e}();t.AsyncUnzipInflate=ts;var to=function(){function e(e){this.onfile=e,this.k=[],this.o={0:tn},this.p=Y}return e.prototype.push=function(e,t){var r=this;if(this.onfile||F(5),this.p||F(4),this.c>0){var n=Math.min(this.c,e.length),s=e.subarray(0,n);if(this.c-=n,this.d?this.d.push(s,!this.c):this.k[0].push(s),(e=e.subarray(n)).length)return this.push(e,t)}else{var o=0,a=0,l=void 0,u=void 0;this.p.length?e.length?((u=new i(this.p.length+e.length)).set(this.p),u.set(e,this.p.length)):u=this.p:u=e;for(var c=u.length,f=this.c,h=f&&this.d,d=this;a<c-4&&"break"!==function(){var e=ed(u,a);if(67324752==e){o=1,l=a,d.d=null,d.c=0;var t=eh(u,a+6),n=eh(u,a+8),i=8&t,s=eh(u,a+26),h=eh(u,a+28);if(c>a+30+s+h){var _,S,p=[];d.k.unshift(p),o=2;var I=ed(u,a+18),E=ed(u,a+22),A=e1(u.subarray(a+30,a+=30+s),!(2048&t));4294967295==I?(I=(_=i?[-2]:e8(u,a))[0],E=_[1]):i&&(I=-1),a+=h,d.c=I;var y={name:A,compression:n,start:function(){if(y.ondata||F(5),I){var e=r.o[n];e||y.ondata(F(14,"unknown compression type "+n,1),null,!1),(S=I<0?new e(A):new e(A,I,E)).ondata=function(e,t,r){y.ondata(e,t,r)};for(var t=0;t<p.length;t++){var i=p[t];S.push(i,!1)}r.k[0]==p&&r.c?r.d=S:S.push(Y,!0)}else y.ondata(null,Y,!0)},terminate:function(){S&&S.terminate&&S.terminate()}};I>=0&&(y.size=I,y.originalSize=E),d.onfile(y)}return"break"}if(f){if(134695760==e)return l=a+=12+(-2==f&&8),o=3,d.c=0,"break";if(33639248==e)return l=a-=4,o=3,d.c=0,"break"}}();++a);if(this.p=Y,f<0){var _=o?u.subarray(0,l-12-(-2==f&&8)-(134695760==ed(u,l-16)&&4)):u.subarray(0,a);h?h.push(_,!!o):this.k[+(2==o)].push(_)}if(2&o)return this.push(u.subarray(a),t);this.p=u.subarray(a)}t&&(this.c&&F(13),this.p=null)},e.prototype.register=function(e){this.o[e.compression]=e},e}();t.Unzip=to;var ta="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(e){e()};t.unzip=function(e,t,r){r||(r=t,t={}),"function"!=typeof r&&F(7);var n=[],s=function(){for(var e=0;e<n.length;++e)n[e]()},o={},a=function(e,t){ta(function(){r(e,t)})};ta(function(){a=r});for(var l=e.length-22;101010256!=ed(e,l);--l)if(!l||e.length-l>65558)return a(F(13,0,1),null),s;var u=eh(e,l+8);if(u){var c=u,f=ed(e,l+16),h=4294967295==f||65535==c;if(h){var d=ed(e,l-12);(h=101075792==ed(e,d))&&(c=u=ed(e,d+32),f=ed(e,d+48))}for(var _=t&&t.filter,S=0;S<c;++S)!function(t){var r=e6(e,f,h),l=r[0],c=r[1],d=r[2],S=r[3],p=r[4],I=e3(e,r[5]);f=p;var E=function(e,t){e?(s(),a(e,null)):(t&&(o[S]=t),--u||a(null,o))};if(!_||_({name:S,size:c,originalSize:d,compression:l})){if(l){if(8==l){var A,y=e.subarray(I,I+c);if(c<32e4)try{E(null,(A=new i(d),D(y,A)))}catch(e){E(e,null)}else n.push(eW(y,{size:d},E))}else E(F(14,"unknown compression type "+l,1),null)}else E(null,N(e,I,I+c))}else E(null,null)}(0)}else a(null,{});return s},t.unzipSync=function(e,t){for(var r={},n=e.length-22;101010256!=ed(e,n);--n)(!n||e.length-n>65558)&&F(13);var s=eh(e,n+8);if(!s)return{};var o=ed(e,n+16),a=4294967295==o||65535==s;if(a){var l=ed(e,n-12);(a=101075792==ed(e,l))&&(s=ed(e,l+32),o=ed(e,l+48))}for(var u=t&&t.filter,c=0;c<s;++c){var f=e6(e,o,a),h=f[0],d=f[1],_=f[2],S=f[3],p=f[4],I=e3(e,f[5]);o=p,(!u||u({name:S,size:d,originalSize:_,compression:h}))&&(h?8==h?r[S]=D(e.subarray(I,I+d),new i(_)):F(14,"unknown compression type "+h):r[S]=N(e,I,I+d))}return r}},93989:function(e,t){"use strict";var r={};t.default=function(e,t,n,i,s){var o=new Worker(r[t]||(r[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return o.onmessage=function(e){var t=e.data,r=t.$e$;if(r){var n=Error(r[0]);n.code=r[1],n.stack=r[2],s(n,null)}else s(null,t)},o.postMessage(n,i),o}}}]);