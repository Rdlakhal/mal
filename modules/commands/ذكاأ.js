const axios = require('axios');
const stringSimilarity = require('string-similarity');

async function chat(messages) {
    try {
        const res = await axios.post('https://chatbot-ji1z.onrender.com/chatbot-ji1z', { messages });
        return res.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        throw new Error('Chatbot communication failed');
    }
}

const aa = {
    config: {
        name: "ملاك",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Takt Asahina",
        description: "العاب",
        commandCategory: "العاب",
        usages: "",
        cooldowns: 5,
    },

    run: async function({ event, api, args}) {
        const coj = args.join(" ");
        const responses = [
            "يرجى طرح سؤال... 😃🔥",
            "لم تقم بطرح أي سؤال. حاول مجددًا! 🙃",
            "لم أتمكن من معرفة سؤالك. 😅"
        ];

        if (!coj) return out(responses[Math.floor(Math.random() * responses.length)]);
        
        async function out(gry, callback)  {
            await api.sendMessage(gry, event.threadID, callback, event.messageID);
        };

        // التحقق من التشابه
        const possibleNames = ["ملاك", "الملاك", "ملاكي"];
        let matched = false;
        for (let name of possibleNames) {
            if (stringSimilarity.compareTwoStrings(name, event.senderID) > 0.7) {
                matched = true;
                break;
            }
        }

        if (!matched) {
            return out("الاسم المدخل غير مطابق أو لا يشبه الاسم المسجل.");
        }

        let data = await chat([{ role: "user", content: coj }]);

        return out({ body: data }, (error, info) => {
            global.client.handleReply.push(info.messageID, {
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            });
        });
    },

    handleReply: async function({ api, event, handleReply, usersData, threadsData }) {
        async function out(gry, callback)  {
            await api.sendMessage(gry, event.threadID, callback, event.messageID);
        };

        let data = await chat([{ role: "user", content: event.body }]);
        return out(data, (error, info) => {
            global.client.handleReply.push(info.messageID, {
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            });
        });
    },
};

module.exports = aa;
