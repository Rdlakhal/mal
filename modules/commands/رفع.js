const axios = require('axios');

module.exports.config = {
    name: "رفع",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "عمر",
    description: "احصل على رابط مباشر للفيديو والصوت",
    commandCategory: "خدمات",
    usages: "رفع",
    cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "invaidFormat": "ايش اسوي بامك هسا💢🙂"
    },
    "en": {
        "invaidFormat": "سوال انت غبائك متوارث؟.. 🙂💔"
    }
}

module.exports.run = async ({ api, event, getText }) => {
    if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);

    const attachmentUrl = event.messageReply.attachments[0].url;

    try {
        const response = await axios.get(`https://imgur-724edf1d7f4b.herokuapp.com/api/caera/imgur?link=${encodeURIComponent(attachmentUrl)}`);
        const directLink = response.data.data.link;
        return api.sendMessage(`رابط التحميل الخاص بك: ${directLink}`, event.threadID, event.messageID);
    } catch (error) {
        console.error(error);
        return api.sendMessage("حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
    }
}
