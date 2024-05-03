module.exports.config = {
	name: "‌إيقاف",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "ٕ",
	commandCategory: "المطور",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("تم ايقاف النضام",event.threadID, () =>process.exit(0))
