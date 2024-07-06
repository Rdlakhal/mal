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
    // التحقق مما إذا كان المستخدم مطور
    if (role < 1) {
        return api.sendMessage('بس بابا بيناديني بهاذا الاسم 🤨😾🌳🍃', event.threadID, event.messageID);
    }

    var hi = ["نعم بابي 😚🫣", "عيونها 😚😊", "نعم البي 🫢😊"];
    var know = hi[Math.floor(Math.random() * hi.length)];

    api.sendMessage(`${know}`, event.threadID);
};

module.exports.atCall = async function ({ api, message, event, args, threadsData, role }) {
    if (role < 1) return message.reply('فقط الأدمن يقدر يشغله يا غبي 🌝');
    let threadData = await threadsData.get(event.threadID);
    const BOTID = api.getCurrentUserID();
    
    // تنفيذ ما تود إضافته في atCall هنا
};
