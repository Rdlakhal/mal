module.exports.config = {
    name: "video1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
    description: "قم بتشغيل مقاطع الفيديو عبر روابط YouTube أو كلمات البحث الرئيسية",
    commandCategory: "خدمات",
    usages: "[searchVideos]",
    cooldowns: 10,
    dependencies: {
        "ytdl-core": "",
        "simple-youtube-api": ""
    }
}, module.exports.handleReply = async function({
    api: e,
    event: a,
    handleReply: t
}) {
    const n = global.nodemodule.axios,
        s = global.nodemodule["fs-extra"],
        i = (global.nodemodule.request, await n.get("https://raw.githubusercontent.com/RqzaX040/Global-Hokai/main/video.json")),
        r = i.data.keyVideo.length,
        o = i.data.keyVideo[Math.floor(Math.random() * r)],
        {
            createReadStream: d,
            createWriteStream: m,
            unlinkSync: l,
            statSync: h
        } = global.nodemodule["fs-extra"];
    var c, u = a.body;
    if (c = u, isNaN(c) || (c < 1 || c > 6)) return e.sendMessage("فقط اختر من 1 -> 6 ", a.threadID, a.messageID);
    e.unsendMessage(t.messageID);
    try {
        var g = {
            method: "GET",
            url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
            params: {
                id: `${t.link[a.body-1]}`
            },
            headers: {
                "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
                "x-rapidapi-key": `${o.API_KEY}`
            }
        };
        var p = (await n.request(g)).data,
            y = p.title;
        if ("fail" == p.status) return e.sendMessage("Không thể gửi file này.", a.threadID);
        var f = Object.keys(p.link)[1],
            b = p.link[f][0];
        path1 = __dirname + "/cache/1.mp4";
        const i = (await n.get(`${b}`, {
            responseType: "arraybuffer"
        })).data;
        return s.writeFileSync(path1, Buffer.from(i, "utf-8")), e.unsendMessage(t.messageID), s.statSync(__dirname + "/cache/1.mp4").size > 96e6 ? e.sendMessage("لا يمكن إرسال الملف لأنه أكبر من 25MB", a.threadID, (() => l(__dirname + "/cache/1.mp4")), a.messageID) : e.sendMessage({
            body: `${y}`,
            attachment: s.createReadStream(__dirname + "/cache/1.mp4")
        }, a.threadID, (() => s.unlinkSync(__dirname + "/cache/1.mp4")), a.messageID)
    } catch {
        return e.sendMessage("Không thể gửi file này!", a.threadID, a.messageID)
    }
    for (let e = 1; e < 7; e++) l(__dirname + `/cache/${e}.png`)
}, module.exports.run = async function({
    api: e,
    event: a,
    args: t
}) {
    const n = global.nodemodule.axios,
        s = global.nodemodule["fs-extra"],
        i = (global.nodemodule.request, await n.get("https://raw.githubusercontent.com/RqzaX040/Global-Hokai/main/video.json")),
        r = i.data.keyVideo.length,
        o = i.data.keyVideo[Math.floor(Math.random() * r)],
        d = (global.nodemodule["ytdl-core"], global.nodemodule["simple-youtube-api"]),
        {
            createReadStream: m,
            createWriteStream: l,
            unlinkSync: h,
            statSync: c
        } = global.nodemodule["fs-extra"];
    var u = ["AIzaSyD6NWUuQCNLRbdmjDTtXXunXP6vrYAgPsQ"];
    const g = u[Math.floor(Math.random() * u.length)],
        p = new d(g);
    if (0 == t.length || !t) return e.sendMessage("🐣 لا يمكن ترك حقل البحث فارغًا!", a.threadID, a.messageID);
    const y = t.join(" ");
    if (0 == t.join(" ").indexOf("https://")) {
        var f = {
            method: "GET",
            url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
            params: {
                id: t.join(" ").split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/)[3]
            },
            headers: {
                "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
                "x-rapidapi-key": `${o.API_KEY}`
            }
        };
        var b = (await n.request(f)).data,
            v = b.title;
        if ("fail" == b.status) return e.sendMessage("Không thể gửi file này.", a.threadID);
        var k = Object.keys(b.link)[1],
            I = b.link[k][0];
        path1 = __dirname + "/cache/1.mp4";
        const i = (await n.get(`${I}`, {
            responseType: "arraybuffer"
        })).data;
        return s.writeFileSync(path1, Buffer.from(i, "utf-8")), s.statSync(__dirname + "/cache/1.mp4").size > 96e6 ? e.sendMessage("لا يمكن إرسال الملف لأنه أكبر من  25MB.", a.threadID, (() => h(__dirname + "/cache/1.mp4")), a.messageID) : e.sendMessage({
            body: `» ${v}`,
            attachment: s.createReadStream(__dirname + "/cache/1.mp4")
        }, a.threadID, (() => s.unlinkSync(__dirname + "/cache/1.mp4")), a.messageID)
    }
    try {
        const t = global.nodemodule["fs-extra"],
            n = global.nodemodule.axios;
        var w = [],
            _ = "",
            D = 0,
            S = 0,
            M = [],
            $ = await p.searchVideos(y, 6);
        for (let e of $) {
            if (void 0 === e.id) return;
            w.push(e.id);
            e.id;
            let a = __dirname + `/cache/${S+=1}.png`,
                s = `https://img.youtube.com/vi/${e.id}/hqdefault.jpg`,
                i = (await n.get(`${s}`, {
                    responseType: "arraybuffer"
                })).data,
                r = (await n.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${e.id}&key=${g}`)).data.items[0].contentDetails.duration.slice(2).replace("S", "").replace("M", ":");
            (await n.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${e.id}&key=${g}`)).data.items[0].snippet.channelTitle;
            if (t.writeFileSync(a, Buffer.from(i, "utf-8")), M.push(t.createReadStream(__dirname + `/cache/${S}.png`)), 1 == (D = D += 1)) var x = "1";
            if (2 == D) x = "2";
            if (3 == D) x = "3";
            if (4 == D) x = "4";
            if (5 == D) x = "5";
            if (6 == D) x = "6";
            _ += `${x} • [ ${r} ] ${e.title}\n\n`
        }
        var j = `${w.length} 🔎 هناك 6 قوائم مطابقة لكلمات البحث الخاصة بك::\n\n${_}
🎥 الرجاء الرد (الرد برقم الطلب) باختيار أحد عمليات البحث أعلاه 🐣`;
        return e.sendMessage({
            attachment: M,
            body: j
        }, a.threadID, ((e, t) => global.client.handleReply.push({
            name: this.config.name,
            messageID: t.messageID,
            author: a.senderID,
            link: w
        })), a.messageID)
    } catch (t) {
        return e.sendMessage(" تعذرت معالجة الطلب بسبب حدوث خطأ module: " + t.message, a.threadID, a.messageID)
    }
};
