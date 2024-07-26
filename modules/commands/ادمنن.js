module.exports.config = {
 name: "الادمن",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "حماية الكروب من تغيير الادمنية",
 usages: "",
 commandCategory: "مسؤول",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('⚜️=== 「 ادمن و تدلل 」===⚜️', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`» تم ${(data["guard"] == true) ? "تشغيل" : "اطفاء"} الادمن الادمن!`, event.threadID, event.messageID);
}
