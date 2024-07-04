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

    await Currencies.decreaseMoney(senderID, coins);
    await Currencies.increaseMoney(mention, coins);

    const receiverInfo = await api.getUserInfo(mention);
    const receiverName = receiverInfo[mention].name;

    return api.sendMessage({
        body: `[ تحويل ] - ${userName} حول مبلغ ${balance} إلى ${receiverName}.`
    }, threadID);
};
