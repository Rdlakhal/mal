const fs = require("fs");
const axios = require("axios");

const dataPath = './groupImageData.json';

module.exports.config = {
	name: "حماية_الصورة",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "قم بحماية صورة مجموعتك منزالتغيير",
	commandCategory: "Box",
	usages: "حماية_الصورة [تفعيل/تعطيل]",
	cooldowns: 0,
	dependencies: []
};

module.exports.onLoad = function({ api }) {
	// Ensure groupImageData.json exists
	if (!fs.existsSync(dataPath)) {
		fs.writeFileSync(dataPath, JSON.stringify({}));
	}

	// Set up listener for group image changes
	api.listenMqtt(async (error, message) => {
		if (message.type === "event" && message.logMessageType === "log:thread-image") {
			const data = JSON.parse(fs.readFileSync(dataPath));
			if (data[message.threadID] && data[message.threadID].enabled) {
				const newImageUrl = message.logMessageData.imageUrl;
				const originalImagePath = __dirname + `/cache/${message.threadID}_original.png`;
				if (newImageUrl !== originalImagePath) {
					api.changeGroupImage(fs.createReadStream(originalImagePath), message.threadID, () => {
						api.sendMessage(`🚨 تم تغيير صورة المجموعة من قِبَل أحدهم، ولكن تم إعادتها إلى حالتها الأصلية.`, message.threadID);
					});
				}
			}
		}
	});
};

module.exports.run = async function({ api, event, args }) {
	const subCommand = args[0];
	let data = JSON.parse(fs.readFileSync(dataPath));

	if (!data[event.threadID]) {
		data[event.threadID] = { enabled: false, originalImagePath: null };
	}

	if (subCommand === "تفعيل) {
		if (event.type !== "message_reply") {
			return api.sendMessage("ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ❌ يجب الرد على صورة لتعيين الصورة الأصلية للمجموعة.ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ", event.threadID, event.messageID);
		}
		if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) {
			return api.sendMessage("ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ❌ يجب الرد على صورة لتعيين الصورة الأصلية للمجموعة.ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ", event.threadID, event.messageID);
		}
		if (event.messageReply.attachments.length > 1) {
			return api.sendMessage(`ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ❌ الرجاء الرد على صورة واحدة فقط!ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ`, event.threadID, event.messageID);
		}

		const imageUrl = event.messageReply.attachments[0].url;
		const originalImagePath = __dirname + `/cache/${event.threadID}_original.png`;
		const imageBuffer = (await axios.get(imageUrl, { responseType: 'arraybuffer' })).data;
		fs.writeFileSync(originalImagePath, Buffer.from(imageBuffer, 'utf-8'));

		data[event.threadID] = { enabled: true, originalImagePath: originalImagePath };
		fs.writeFileSync(dataPath, JSON.stringify(data));

		api.sendMessage("ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ🔒 حماية صورة المجموعة مفعلة.ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ", event.threadID, event.messageID);
	} else if (subCommand === "تعطيل") {
		data[event.threadID].enabled = false;
		fs.writeFileSync(dataPath, JSON.stringify(data));
		api.sendMessage("ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ🔓 حماية صورة المجموعة معطلة.ટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁડૂઁટૂૂઁૂઁૂૂઁૂઁૂઁૂઁૂૂઁૂઁ", event.threadID, event.messageID);
	} else {
		api.sendMessage("❗ استخدام غير صحيح. الرجاء استخدام ' حماية_الصورة تفعيل' أو ' حماية_الصورة تعطيل'.", event.threadID, event.messageID);
	}
};
