module.exports.config = {

	name: "رصيدي",

	version: "1.0.2",

	hasPermssion: 0,

	credits: "Mirai Team",

	description: "تحقق من المبلغ الخاص بك أو الشخص الذي تم وضع منشن عليه",
    
    usePrefix:true,

	commandCategory: "الاموال",

	usages: "[تاغ أو أتركه فرغا]",



	cooldowns: 5

};

module.exports.languages = {

	"vi": {

		"sotienbanthan": "Số tiền bạn đang có: %1$",

		"sotiennguoikhac": "Số tiền của %1 hiện đang có là: %2$"

	},

	"en": {

		"sotienbanthan": "╭──𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭──╮\nتقدر ثروتك بي: %1$\n╰──𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭──╯",

		"sotiennguoikhac": "%1's ╭──𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭──╮\nتقدر ثروتك بي: %2$\n╰──𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭──╯" 

	}

}

module.exports.run = async function({ api, event, args, Currencies, getText }) {

	const { threadID, messageID, senderID, mentions } = event;

	if (!args[0]) {

		const money = (await Currencies.getData(senderID)).money;

		return api.sendMessage(getText("sotienbanthan", money), threadID);

	}

	else if (Object.keys(event.mentions).length == 1) {

		var mention = Object.keys(mentions)[0];

		var money = (await Currencies.getData(mention)).money;

		if (!money) money = 0;

		return api.sendMessage({

			body: getText("sotiennguoikhac", mentions[mention].replace(/\@/g, ""), money),

			mentions: [{

				tag: mentions[mention].replace(/\@/g, ""),

				id: mention

			}]

		}, threadID, messageID);

	}

	else return global.utils.throwError(this.config.name, threadID, messageID);

                                      }
