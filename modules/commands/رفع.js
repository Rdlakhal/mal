const axios = require('axios');

module.exports.config = {
    name: "رفع",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ط¹ظ…ط±",
    description: "ط§ط­طµظ„ ط¹ظ„ظ‰ ط±ط§ط¨ط· ظ…ط¨ط§ط´ط± ظ„ظ„ظپظٹط¯ظٹظˆ ظˆط§ظ„طµظˆطھ",
    commandCategory: "المطور",
    usages: "ط±ظپط¹",
    cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "invaidFormat": "ظ‡ظ„ ط§ظ†طھ ط§ط­ظ…ظ‚"
    },
    "en": {
        "invaidFormat": "ظ‡ظ„ ط؛ط¨ط§ط¦ظƒ ظ…طھظˆط§ط±ط«طں"
    }
};

module.exports.run = async ({ api, event, getText }) => {
    if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length === 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);

    const attachmentUrl = event.messageReply.attachments[0].url;

    try {
        console.log(`Sending request to: https://imgur-724edf1d7f4b.herokuapp.com/api/caera/imgur?link=${encodeURIComponent(attachmentUrl)}`);
        const response = await axios.get(`https://imgur-724edf1d7f4b.herokuapp.com/api/caera/imgur?link=${encodeURIComponent(attachmentUrl)}`);
        console.log('Response data:', response.data);

        if (response.data && response.data.data && response.data.data.link) {
            const directLink = response.data.data.link;
            return api.sendMessage(`ط±ط§ط¨ط· ط§ظ„طھط­ظ…ظٹظ„ ط§ظ„ظ…ط¨ط§ط´ط±: ${directLink}`, event.threadID, event.messageID);
        } else {
            console.error('Invalid response structure:', response.data);
            return api.sendMessage("ط­ط¯ط« ط®ط·ط£ ط£ط«ظ†ط§ط، ظ…ط¹ط§ظ„ط¬ط© ط·ظ„ط¨ظƒ. ظٹط±ط¬ظ‰ ط§ظ„ظ…ط­ط§ظˆظ„ط© ظ…ط±ط© ط£ط®ط±ظ‰ ظ„ط§ط­ظ‚ط§ظ‹.", event.threadID, event.messageID);
        }
    } catch (error) {
        console.error("Error details:", error.response ? error.response.data : error.message);
        return api.sendMessage("ط­ط¯ط« ط®ط·ط£ ط£ط«ظ†ط§ط، ظ…ط¹ط§ظ„ط¬ط© ط·ظ„ط¨ظƒ. ظٹط±ط¬ظ‰ ط§ظ„ظ…ط­ط§ظˆظ„ط© ظ…ط±ط© ط£ط®ط±ظ‰ ظ„ط§ط­ظ‚ط§ظ‹.", event.threadID, event.messageID);
    }
};
