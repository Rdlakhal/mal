module.exports.config = {
    name: "يوتا",
    version: "1.0.0",
    hasPermssion: 2, // تأكد من أن إذن المستخدم هو 2 (مسؤول)
    credits: "3bida",
    description: "",
    usages: "",
    commandCategory: "العاب",
    cooldowns: 0
};

module.exports.run = async({api, event, args, client, Users, Threads, __GLOBAL, Currencies}) => {
    // التحقق مما إذا كان المستخدم هو مسؤول في المجموعة
    var info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == event.senderID)) {
        return api.sendMessage('هذا الأمر مخصص للمسؤولين فقط.', event.threadID, event.messageID);
    }

    var hi = ["نعم بابي 😚🫣", "عيونها 😚😊", "نعم البي 🫢😊"];
    var know = hi[Math.floor(Math.random() * hi.length)];

    api.sendMessage(`${know}`, event.threadID);
};
