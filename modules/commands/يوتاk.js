const axios = require('axios');

module.exports.config = {
    name: "يوتا",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "حسين يعقوبي",
    description: "استخدام GPT للرد على الأسئلة",
    commandCategory: "𝗔𝗜",
    usages: "[سؤال]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const inputText = args.join(' ');
    let { threadID, messageID } = event;
    let tid = threadID,
        mid = messageID;

    if (inputText !== "") {
        const encodedInput = encodeURIComponent(inputText);
        const url = `https://deku-rest-api-ywad.onrender.com/new/gpt-4_adv?prompt=${encodedInput}`;

        try {
            const response = await axios.get(url);
            const answer = response.data.response;
            api.sendMessage(answer, tid, (err, info) => {
                if (err) return console.error(err);
            });
        } catch (error) {
            console.error(`حدث خطأ: ${error.message}`);
            api.sendMessage("حدث خطأ أثناء الاتصال بالخادم", tid, mid);
        }
    } else {
        api.sendMessage("في خدمتك.. 💀😈🍸", tid, mid);
    }
};
