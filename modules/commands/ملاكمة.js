module.exports.config = {
    name: "يوتا",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "3bida",
    description: "",
    usages: "",
    commandCategory: "العاب",
    cooldowns: 0
};

module.exports.run = async({api, event, args, client, Users, Threads, __GLOBAL, Currencies}) => {
    var hi = ["نعم بابي 😚🫣","عيونها 😚😊","نعم البي 🫢😊"];
    var know = hi[Math.floor(Math.random() * hi.length)];

    api.sendMessage(`${know}`, event.threadID);
};
