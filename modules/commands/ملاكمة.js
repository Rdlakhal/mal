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
    // التحقق مما إذا كان المستخدم مطور أو مشرف
    if (role < 0) {
        return api.sendMessage('هذا الأمر مخصص للمطورين أو الأدمن فقط!', event.threadID, event.messageID);
    }

    var hi = ["نعم بابي 😚🫣", "عيونها 😚😊", "نعم البي 🫢😊"];
    var know = hi[Math.floor(Math.random() * hi.length)];

    api.sendMessage(`${know}`, event.threadID);
};

module.exports.atCall = async function ({ api, message, event, args, threadsData, role }) {
    // التحقق مما إذا كان المستخدم مطور أو مشرف
    if (role < 1) {
        return message.reply('هذا الأمر مخصص للمطورين أو الأدمن فقط!');
    }
    let threadData = await threadsData.get(event.threadID);
    const BOTID = api.getCurrentUserID();
    
    // تنفيذ ما تود إضافته في atCall هنا
};
