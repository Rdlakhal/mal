module.exports.config = {
	name: "رابط",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "عمر",
	description: "احصل على رابط مباشر للفيديو والصوت ",
	commandCategory: "خدمات",
	usages: "رفع",
	cooldowns: 5,
};

module.exports.languages = {
	"vi": {
		"invaidFormat": "امزح مع امك انا؟ 🙂💢"
	},
	"en": {
		"invaidFormat": "يبني رد على صورة ولا فيديو لا اقوم افشخك🙂💢"
	}
}

module.exports.run = async ({ api, event, getText }) => {
	if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	return api.sendMessage(`"${event.messageReply.attachments[0].url}",`, event.threadID, event.messageID);
}
