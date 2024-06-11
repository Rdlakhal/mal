onst fs = require("fs");
module.exports.config = {
	name: "مواساه",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "OMAR", 
	description: "مواساه",
	commandCategory: "خدمات",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("sakit") || react.includes("Sakit") || react.includes("حزن") || react.includes("Saket") || react.includes("peyn") || react.includes("Peyn") || react.includes("Pain") || react.includes("mamatay") || react.includes("Mamatay") || react.includes("ayaw ko na") || react.includes("Ayaw ko na") || react.includes("saktan") || react.includes("Saktan") || react.includes("Sasaktan") || react.includes("sasaktan") || react.includes("sad") || react.includes("مجروح") || react.includes("malungkot") || react.includes("Malungkot") || react.includes("😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes(":(") || react.includes("😔") || react.includes("😞") || react.includes("منزعج") || react.includes("حزين") || react.includes("💔") || react.includes("انا حزين") || react.includes("depression") || react.includes("Depression") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("😭")) {
		var msg = {
				body: "لَأّ تٌـحًﺰنِ يِّأّصّـغُيِّريِّ أّنِضًـرىنِحًوٌ أّلَسِـمًأّء","لَمًأّذأّ أّلَحًﺰنِ يِّأّقُمًر"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐑", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
