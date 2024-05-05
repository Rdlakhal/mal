const axios = require("axios");

module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Notify bots or leavers",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;


const gifes = await axios.get(`https://i.ibb.co/rZZwCDC/289048626-3279695619019315-6860934043982649302-n-jpg-nc-cat-111-ccb-1-7-nc-sid-5f2048-nc-eui2-Ae-HN9.jpg`, { responseType: "stream"});
		const atth = gifes.data;

	
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "♧=「 غادر 」=♧" : "♧=「 اترمه 」=♧";
	const path = join(__dirname, "cache", "leachfvveGif");
	const gifPath = join(path, `byxcve2.jpg`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "💔    「{name}」   💔 \n「♕」لا تـحـزن عـلـيـهـا يا قـلـبـي فـانـهـا تهوا الـفـراق فـرحـلـت「♕」\n💔       {type}     💔" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: atth }
	else formPush = { body: msg, attachment: atth }
	
	return api.sendMessage(formPush, threadID);
}
