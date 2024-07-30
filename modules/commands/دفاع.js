const fs = require("fs");
module.exports.config = {
	name: "gilgamesh2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "خدمات",
	usages: "fuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("سارق")==0 || event.body.indexOf("نصاب")==0 || event.body.indexOf("بوت سارق")==0 || event.body.indexOf("بوت غبي")==0 || event.body.indexOf("بوت جبان")==0 || event.body.indexOf("جبان")==0 || event.body.indexOf("مغفل")==0 || event.body.indexOf("بوت مغفل")==0 || event.body.indexOf("ابله")==0 || event.body.indexOf("بوت فاشل")==0 || event.body.indexOf("بوت سيئ")==0 || event.body.indexOf("بوت كلب")==0) {
		var msg = {
				body: " انا لست كذلك ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ohh.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}const fs = require("fs");
module.exports.config = {
	name: "gilgamesh1",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "خدمات",
	usages: "fuck",
    cooldowns: 5, 
};
