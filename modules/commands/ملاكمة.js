module.exports.config = {
    name: "يوتا",
    version: "1.0.0",
    hasPermssion: 2, // تحديد الإذن للمطورين فقط
    credits: "3bida",
    description: "",
    usages: "",
    commandCategory: "العاب",
    cooldowns: 0
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies, role }) => {
    var hi = ["نعم بابي 😚🫣", "عيونها 😚😊", "نعم البي 🫢😊"];
    var know = hi[Math.floor(Math.random() * hi.length)];

    if (role < 1) {
        return api.sendMessage('هذا الأمر مخصص للمطورين فقط!', event.threadID, event.messageID);
    }

    api.sendMessage(`${know}`, event.threadID);
};

module.exports.atCall = async function ({ api, message, event, args, threadsData, role }) {
    if (role < 1) {
        return message.reply('هذا الأمر مخصص للمطورين فقط!');
    }
    let threadData = await threadsData.get(event.threadID);
    const BOTID = api.getCurrentUserID();
    
    // تنفيذ ما تود إضافته في atCall هنا
};
