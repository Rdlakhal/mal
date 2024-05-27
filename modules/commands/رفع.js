module.exports.config = {
    name: "رفع",
    version: "2.1.0",
    hasPermssion: 0,
    credits: "Richard",
    description: "imgur upload",
    commandCategory: "imgur",
    usages: "[reply to image]",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = async ({ api, event }) => {
    const axios = global.nodemodule['axios'];
    
    // تحقق من الرد على صورة
    if (!event.messageReply || !event.messageReply.attachments || event.messageReply.attachments.length === 0 || event.messageReply.attachments[0].type !== 'photo') {
        return api.sendMessage('Please reply to an image.', event.threadID, event.messageID);
    }

    var imageUrl = event.messageReply.attachments[0].url;

    try {
        // طلب رابط API الجديد
        const res = await axios.get(`https://for-devs.onrender.com/api/imgur?link=${encodeURIComponent(imageUrl)}&apikey=api1`);

        // تحقق من وجود خطأ في الاستجابة
        if (res.data.uploaded.status !== 'success') {
            return api.sendMessage('Error uploading image to Imgur.', event.threadID, event.messageID);
        }

        // استخراج رابط Imgur
        var imgurLink = res.data.uploaded.url;

        // إرسال رابط Imgur إلى الدردشة
        return api.sendMessage(`Here is your Imgur link:\n${imgurLink}`, event.threadID, event.messageID);
    } catch (error) {
        console.error('Error uploading image:', error);
        return api.sendMessage('An error occurred while uploading the image. Please try again later.', event.threadID, event.messageID);
    }
};
