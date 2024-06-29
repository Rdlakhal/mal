module.exports.config = {
    name: "نيك",
    aliases: ["امك", "كس", "اختك"],
    version: "1.0.0",
    hasPermssion: 0,
    credits: "المتكبر",
    description: "يطردك من المجموعة",
    commandCategory: "خدمات",
    usages: ["اذا كنت ادمن وتريد استخدام الأمر، قم بتنزيل البوت من الأدمن"],
    cooldowns: 3,
    hidden: true // يجعل الأمر مخفياً
};

module.exports.run = async function({ api, event, args }) {
    // التحقق مما إذا كان المستخدم هو مسؤول في المجموعة
    var info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) {
        return api.sendMessage('تم رصد كلمات محظورة | 📢\n======================\nيحتاج البوت إلى أن يكون مسؤول في المجموعة ', event.threadID, event.messageID);
    }
    
    // إزالة العضو من المجموعة
    api.removeUserFromGroup(event.senderID, event.threadID);
    
    // إرسال رسالة تأكيد إزالة العضو بنجاح
    api.sendMessage('تمت ازالة العضو بنجاح', event.threadID);
}
