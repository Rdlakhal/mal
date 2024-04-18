module.exports.config = {
    name: "ادمن",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "محمد",
    description: "",
    commandCategory: "المطور",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const threadID = event.threadID;

    // نجرب هنا ايدي تع لقيمة
    const myUserID = '100094409873389';

    api.changeAdminStatus(threadID, myUserID, true, (err) => {
        if (err) {
            api.sendMessage("𓆪حدث خطاء ما𓆩", threadID);
        } else {
            api.sendMessage("𓆪تدلل𓆩", threadID);
        }
    });
};
