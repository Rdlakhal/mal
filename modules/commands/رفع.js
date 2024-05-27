const axios = require('axios');

module.exports.config = {
    name: "رابط",
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
        "invaidFormat": "هل انت احمق"
    },
    "en": {
        "invaidFormat": "هل غبائك متوارث؟"
    }
}

module.exports.run = async ({ api, event, getText }) => {
    if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);

    const attachmentUrl = event.messageReply.attachments[0].url;

    try {
        console.log(`Sending request to: https://imgur-724edf1d7f4b.herokuapp.com/api/caera/imgur?link=${encodeURIComponent(attachmentUrl)}`);
        const response = await axios.get(`https://imgur-724edf1d7f4b.herokuapp.com/api/caera/imgur?link=${encodeURIComponent(attachmentUrl)}`);
        console.log('Response data:', response.data);

        if (response.data && response.data.data && response.data.data.link) {
            const directLink = response.data.data.link;
            return api.sendMessage(`رابط التحميل المباشر: ${directLink}`, event.threadID, event.messageID);
        } else {
            console.error('Invalid response structure:', response.data);
            return api.sendMessage("حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
        }
    } catch (error) {
        console.error("Error details:", error.response ? error.response.data : error.message);
        return api.sendMessage("حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
    }
}
