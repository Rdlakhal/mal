const fs = require("fs");
const request = require("request");
const Currencies = require('path-to-your-currencies-module'); // تأكد من إضافة المسار الصحيح لموديول العملات

module.exports.config = {
    name: "كهف",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "عمر",
    description: "تشتغل بكهف بأحدى الدول وتحصل فلوس",
    commandCategory: "الاموال",
    cooldowns: 2000000000,
    envConfig: {
        cooldown: 2000000000
    },
    dependencies: {
        "fs": "",
        "request": ""
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "تعال بعد شوي"      
    },
    "en": {
        "cooldown": " تعال تعد 30 ثانية."
    }
};

module.exports.onLoad = () => {
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial)) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cave.jpg")) {
        request("https://scontent.xx.fbcdn.net/v/t1.15752-9/450181333_1004354724724501_5110919761776389020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=9u3xwNwrKQoQ7kNvgGmcBpv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGApHIkDvNnO7a_nCNAtQWjhJQyjVKg-mDOvPiGROeEZw&oe=66CDA385").pipe(fs.createWriteStream(dirMaterial + "cave.jpg"));
    }
};

module.exports.handleReply = async ({ event: e, api, handleReply, Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
    if (handleReply.author != e.senderID) 
        return api.sendMessage("الم يعلماك والداك ان السرقة حرام 🤨🫳", e.threadID, e.messageID);

    let amount = Math.floor(Math.random() * 5000) + 400;
    switch(e.body) {
        case "1": amount += 500; break;
        case "2": amount += 400; break;
        case "3": amount += 300; break;
        case "4": amount += 200; break;
        case "5": amount += 100; break;
        case "6": break;
        default: return api.sendMessage("🔥عليك الأختيار بين الرقم من 1 حتى 6!", e.threadID, e.messageID);
    }

    api.unsendMessage(handleReply.messageID);
    api.sendMessage(`اشتغلت بالكهوف وحصلت على ${amount}$`, threadID, async () => {
        data.work2Time = Date.now();
        await Currencies.increaseMoney(e.senderID, parseInt(amount));
        await Currencies.setData(senderID, { data });
    });
};

module.exports.run = async ({ event: e, api, Currencies }) => {
    const { threadID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
    let cooldown = global.configModule[this.config.name].cooldownTime;

    if (data.work2Time && (Date.now() - data.work2Time) < cooldown) {
        let timeRemaining = cooldown - (Date.now() - data.work2Time);
        let minutes = Math.floor(timeRemaining / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        return api.sendMessage(`⚡ تعال ورا: ${minutes} دقيقة و ${seconds} ثانية.`, threadID);
    } else {
        let msg = {
            body: "╭──𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭──╮" +
                "\n1≥  ليبيا" +
                "\n2 ≥ الجزائر" +
                "\n3 ≥ المغرب" +
                "\n4 ≥ اليمن" +
                "\n5 ≥ تونس" +
                "\n6 ≥ فلسطين" +
                `\n\n🔥╰──𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭──╯`,
            attachment: fs.createReadStream(__dirname + `/cache/cave.jpg`)
        };
        return api.sendMessage(msg, threadID, (error, info) => {
            data.work2Time = Date.now();
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: e.senderID,
                messageID: info.messageID
            });
        });
    }
};

// تشغيل الكود كل 30 ثانية
setInterval(() => {
    // استدعاء الدالة أو الكود المراد تشغيله
    module.exports.run({ event: { threadID: 'YOUR_THREAD_ID', senderID: 'YOUR_SENDER_ID' }, api: 'YOUR_API_INSTANCE', Currencies: 'YOUR_CURRENCIES_MODULE' });
}, 30000); // 30000 ملي ثانية تعني 30 ثانية
