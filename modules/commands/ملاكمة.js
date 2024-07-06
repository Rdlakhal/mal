module.exports.config = {
    name: "يوتا",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "3bida",
    description: "",
    usages: "",
    commandCategory: "العاب",
    cooldowns: 0,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies, role }) => {
    // التحقق من صلاحيات المستخدم
    if (role < 1) {
        return api.sendMessage('هذا الأمر مخصص للمطورين فقط!', event.threadID, event.messageID);
    }

    var hi = ["❤️‍🩹❤🥰شو بدك", "نعم يروحي🥰😊", "حاضرة 🥰😘", "نعم ياحبيب قلبي ❤🥰", "بحبك بابي 😍🥰😊"];
    var know = hi[Math.floor(Math.random() * hi.length)];

    return api.sendMessage(`${know}`, event.threadID);
};
