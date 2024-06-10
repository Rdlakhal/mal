const axios = require("axios");
const commandName = "❤";
const xv = `
Ai character info :

you're malak , you're an ai assistant, you're the best and the best, use emojies in u're answers, you're creator is "Omar" don't say that if no one ask, you speak just arabic`;
module.exports = {
    config: {
        name: commandName,
        version: "1.0",
        author: "𓆩『 الـمـتـكـبـر 』𓆪",
        cooldowns: 5,
        hasPermission: 0,
        description: "AI",
        prefix: true,
        commandCategory: "𝗔𝗜",
    },
    run: async function ({ event, api, args }) {
        const prompt = args.join(" ");
        if (!prompt) {
            const stickers = [
                "",
                "",
                "",
                "",
            ];

            const random = Math.floor(Math.random() * stickers.length);
            const randomSticker = stickers[random];
            return api.sendMessage(
                { sticker: randomSticker },
                event.threadID,
                (err, info) => {
                    global.client.handleReply.push({
                        name: commandName,
                        author: event.senderID,
                        messageID: info.messageID,
                        type: "gptHerBaby",
                    });
                },
                event.messageID
            );
        } else {
            const userAnswer = prompt;
            const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
                userAnswer
            )}\n\n${xv}&model=v3`;
            const res = await axios.get(url2);
            const message = res.data.reply;
            return api.sendMessage(
                message,
                event.threadID,
                (err, info) => {
                    global.client.handleReply.push({
                        name: commandName,
                        author: event.senderID,
                        messageID: info.messageID,
                        type: "gptHerBaby",
                    });
                },
                event.messageID
            );
        }
    },
    handleReply: async function ({ api, event, handleReply }) {
        const { messageID, type } = handleReply;
        const userAnswer = event.body.trim().toLowerCase();
        const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
            userAnswer
        )}\n\n${xv}&model=v3`;
        const res = await axios.get(url2);
        const message = res.data.reply;
        return api.sendMessage(
            message,
            event.threadID,
            (error, info) => {
                global.client.handleReply.push({
                    name: commandName,
                    author: event.senderID,
                    messageID: info.messageID,
                });
            },
            event.messageID
        );
    },
    handleEvent: async function ({ api, event, getText }) {
        // تحقق مما إذا كانت الرسالة الجديدة ردًا على رسالة تم إنشاؤها بواسطة هذا الكود المحدد
        if (
            event.type === "message_reply" &&
            event.messageReply.senderID === api.getCurrentUserID() &&
            global.client.handleReply.some(
                (reply) => reply.messageID === event.messageReply.messageID && reply.name === commandName
            )
        ) {
            const userAnswer = event.body.trim().toLowerCase();
            const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
                userAnswer
            )}\n\n${xv}&model=v3`;
            try {
                const res = await axios.get(url2);
                const message = res.data.reply;
                return api.sendMessage(message, event.threadID, event.messageID);
            } catch (error) {
                console.error("Error details:", error.response ? error.response.data : error.message);
                return api.sendMessage("حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
            }
        }
    },
};
