const { createCanvas, loadImage } = require("canvas");
const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "تحويل",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "عمر",
    description: "حول الفلوس - رد ع رسالة الشخص واكتب المبلغ",
    commandCategory: "الاموال",
    usages: "دفع [ رد ع رسالة الشخص واكتب المبلغ ]",
    cooldowns: 5,
};

module.exports.run = async function ({ api, args, event, Currencies, Users }) {
    let { threadID, messageID, senderID } = event;

    if (event.type !== "message_reply") {
        return api.sendMessage('[ تحويل ] - يجب عليك الرد على رسالة الشخص الذي تريد تحويل المال إليه.', threadID, messageID);
    }

    let balance = args[0];
    if (isNaN(balance) || balance <= 0) {
        return api.sendMessage('[ تحويل ] - حط المبلغ الذي تريد تحويله 💳', threadID, messageID);
    }

    let mention = event.messageReply.senderID;
    let coins = (parseInt(balance) * 85) / 100;
    let senderBalance = (await Currencies.getData(senderID)).money;

    if (coins > senderBalance) {
        return api.sendMessage('[الاموال] - المبلغ الذي تريد تحويله اكبر من ميزانيتك 💳', threadID, messageID);
    }

    const userInfo = await api.getUserInfo(senderID);
    const userName = userInfo[senderID].name;
    const time = moment.tz("Asia/Baghdad").format("HH:mm");
    const day = moment.tz("Asia/Baghdad").format("DD/MM/YYYY");

    const fontsPath = __dirname + '/cache/';
    if (!fs.existsSync(fontsPath + 'SplineSans-Medium.ttf')) {
        let font1 = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(fontsPath + 'SplineSans-Medium.ttf', Buffer.from(font1, "utf-8"));
    }
    if (!fs.existsSync(fontsPath + 'SplineSans.ttf')) {
        let font2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(fontsPath + 'SplineSans.ttf', Buffer.from(font2, "utf-8"));
    }

    const data = ["334819875", "334819873", "334819969", "334819439", "334819666", "364819282", "352842956", "334819999", "372842941"];
    const sdt = data[Math.floor(Math.random() * data.length)];
    const codeGD = String(Math.floor(Math.random() * (90000000000 - 1)) + 10000000000);
    const path = __dirname + "/cache/comment.png";
    const bg = (await axios.get(`https://i.postimg.cc/kXcG0YNN/received-642116578073186.jpg`, { responseType: "arraybuffer" })).data;

    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));

    const bgBase = await loadImage(path);
    const canvas = createCanvas(bgBase.width, bgBase.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    ctx.font = "22px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    ctx.fillText('-' + balance.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '$', 88, 1217);
    ctx.fillText('-' + balance.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '$', 320, 370);
    ctx.font = "25px SplineSans";
    ctx.fillText(`${args.slice(1).join(" ")}`, 377, 430);
    ctx.font = "23px SplineSans-Medium";
    ctx.textAlign = "right";
    ctx.fillText(`${userName}`, 582, 230);
    ctx.fillStyle = "#000000";
    ctx.font = "24px SplineSans-Medium";
    ctx.fillText(`+84${sdt}`, 297, 265);
    ctx.font = "22px SplineSans";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "right";
    ctx.font = "19px SplineSans-Medium";
    ctx.fillText(' ', 547, 504);
    ctx.fillText(' ', 507, 436);
    ctx.fillText(`${time} - ${day}`, 300, 440);

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);

    await Currencies.decreaseMoney(senderID, coins);
    await Currencies.increaseMoney(mention, coins);

    return api.sendMessage({
        body: `[ تحويل ] - تمت العملية بنجاح`,
        attachment: fs.createReadStream(path)
    }, threadID, () => fs.unlinkSync(path));
};
