const axios = require("axios");
const commandName = "يوتا";
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
        commandCategory: "العاب",
    },
    run: async function ({ event, api, args }) {
        const prompt = args.join(" ");
        if (!prompt) {
            const stickers = [
                "", "", "", "", ""
            ];

            const random = Math.floor(Math.random() * stickers.length);
            const randomSticker = stickers[random];
            return api.sendMessage(
                { sticker: randomSticker },
                event.threadID,
                (err, info) => {
                    if (err) return console.error(err);
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
            try {
                const userAnswer = prompt;
                const url2 = `https://app-gpt3-5dafa0a5befe.herokuapp.com/gpt=${encodeURIComponent(userAnswer)}&model=v3\n\n${xv}`;
                console.log(`Request URL: ${url2}`); // Debugging line
                const res = await axios.get(url2);
                console.log('Response:', res.data); // Debugging line
                const message = res.data.reply;
                return api.sendMessage(message, event.threadID, event.messageID);
            } catch (error) {
                console.error("Error details:", error.response ? error.response.data : error.message);
                return api.sendMessage("حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
            }
        }
    },
    handleReply: async function ({ api, event, handleReply }) {
        try {
            const { messageID, type } = handleReply;
            const userAnswer = event.body.trim().toLowerCase();
            const url2 = `https://app-gpt3-5dafa0a5befe.herokuapp.com/gpt=${encodeURIComponent(userAnswer)}&model=v3\n\n${xv}`;
            console.log(`Request URL: ${url2}`); // Debugging line
            const res = await axios.get(url2);
            console.log('Response:', res.data); // Debugging line
            const message = res.data.reply;
            return api.sendMessage(
                message,
                event.threadID,
                (error, info) => {
                    if (error) return console.error(error);
                    global.client.handleReply.push({
                        name: commandName,
                        author: event.senderID,
                        messageID: info.messageID,
                    });
                },
                event.messageID
            );
        } catch (error) {
            console.error("Error details:", error.response ? error.response.data : error.message);
            return api.sendMessage("حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.", event.threadID, event.messageID);
        }
    },
};
