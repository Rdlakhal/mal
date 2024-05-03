let bxo = global.config.adonly;

module.exports = {
	config: {
	name: "‌نضام",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "ريوو",
	description: "ٕ",
	commandCategory: "المطور",
	cooldowns: 0
        },
run: async function({ api, event, args }) {
let dd = args[0];
	if( dd == "تشغيل" ) {
		api.sendMessage("تمم رجعتلكم ملاك", event.threadID);
		bxo = false;
	}

if( dd == "ايقاف" ) {
		api.sendMessage("رايحه انام", event.threadID);
		bxo = true;
	}
	
}

}
