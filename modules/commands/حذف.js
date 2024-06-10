module.exports.config = {
    name: "حذف",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "عمر",
    description: "ا",
    commandCategory: "مسؤول",
    usages: "حذف رسائل البوت",
    cooldowns: 0
};

module.exports.languages = {
    "vi": {
        "returnCant": "Không thể gỡ tin nhắn của người khác.",
        "missingReply": "Hãy reply tin nhắn cần gỡ."
    },
    "en": {
        "returnCant": " مش رسالتي",
        "missingReply": "رد عالى الرسالتي"
    }
}

module.exports.run = function({ api, event, getText }) {
    if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
    if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
    return api.unsendMessage(event.messageReply.messageID);
}
