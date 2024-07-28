module.exports.config = {
    name: "حماية",
    aliases: ["حماية", "حظر", "طرد"],
    version: "1.0.0",
    hasPermssion: 0,
    credits: "المتكبر",
    description: "يطردك من المجموعة عند قول كلمات محظورة",
    commandCategory: "خدمات",
    usages: ["اذا كنت ادمن وتريد استخدام الأمر، قم بتنزيل البوت من الأدمن"],
    cooldowns: 3,
    hidden: true // يجعل الأمر مخفياً
};

module.exports.run = async function({ api, event, args }) {
    // الكلمات المحظورة
    const forbiddenWords = ["نيك", "امك", "كس", "اختك"];
    
    // التحقق مما إذا كانت الرسالة تحتوي على أي من الكلمات المحظورة
    const message = event.body.toLowerCase();
    if (forbiddenWords.some(word => message.includes(word))) {
        // التحقق مما إذا كان البوت هو مسؤول في المجموعة
        var info = await api.getThreadInfo(event.threadID);
        if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) {
            return api.sendMessage('تم رصد كلمات محظورة | 📢\n======================\nيحتاج البوت إلى أن يكون مسؤول في المجموعة', event.threadID, event.messageID);
        }
        
        // إزالة العضو من المجموعة
        api.removeUserFromGroup(event.senderID, event.threadID);
        
        // إرسال رسالة تأكيد إزالة العضو بنجاح
        return api.sendMessage('تمت ازالة العضو بنجاح', event.threadID);
    }
};
