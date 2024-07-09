module.exports.config = {
	name: "ايقاف",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "عمر",
	description: "إطفاء البوت",
	commandCategory: "المطور",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("اخيرا رحمتوني",event.threadID, () =>process.exit(0))
