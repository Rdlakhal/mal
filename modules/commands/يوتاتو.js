const axios = require("axios");

module.exports.config = {
    name: "يوتا",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Omar",
    description: "التفاعل مع Character AI",
    commandCategory: "خدمات",
    usages: "يوتا [السؤال]",
    cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "missingPrompt": "❌ يجب كتابة سؤال بعد الأمر 「يوتا」."
    },
    "en": {
        "missingPrompt": "❌ يجب كتابة سؤال بعد الأمر 「يوتا」."
    }
};

module.exports.run = async ({ api, event, args }) => {
    const prompt = args.join(" ");
    if (!prompt) {
        return api.sendMessage("❌ يجب كتابة سؤال بعد الأمر 「يوتا」.", event.threadID, event.messageID);
    }

    try {
        const response = await axios.get(`https://old.character.ai/chat2`, {
            params: {
                char: 'SGVsAvurSP15SdXfumNdQReZEwA5qxLb4viRHaP5Fkg',
                input: prompt
            }
        });
        console.log(response.data); // Debugging response data
        const message = response.data;
        return api.sendMessage(`「${message}」`, event.threadID, event.messageID);
    } catch (error) {
        console.error("Error details:", error.response ? error.response.data : error.message); // Detailed error logging
        return api.sendMessage("❌ حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
    }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    try {
        const userAnswer = event.body.trim();
        const response = await axios.get(`https://old.character.ai/chat2`, {
            params: {
                char: 'SGVsAvurSP15SdXfumNdQReZEwA5qxLb4viRHaP5Fkg',
                input: userAnswer
            }
        });
        console.log(response.data); // Debugging response data
        const message = response.data;
        return api.sendMessage(`「${message}」`, event.threadID, (error, info) => {
            if (error) return console.error(error);
            global.client.handleReply.push({
                name: "يوتا",
                author: event.senderID,
                messageID: info.messageID,
            });
        }, event.messageID);
    } catch (error) {
        console.error("Error details:", error.response ? error.response.data : error.message); // Detailed error logging
        return api.sendMessage("❌ حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
    }
};
