onst axios = require('axios');

module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.4",
    credits: "Mirai Team",
    description: "Thông báo bot hoặc người vào nhóm",
    dependencies: {
        "fs-extra": " "
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "ن" : getHours < 8 ? "ح" : getHours < 11 ? "ه" : getHours < 16 ? "ق" : getHours < 23 ? "ث" : "ه"}`
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
  const { PREFIX } = global.config;
    console.log(2)
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        console.log(1)
        return api.sendMessage("‌    ‌▂▃▅▆تحميل...𝟏𝟎𝟎%▆▅▃▂\n\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●[⚜]\n⚜️== 「اتصال ناجح ✅」==⚜️\n ●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●[⚜]", threadID, async () => {
            let check = true;
            while (check) {
                setTimeout(() => check = false, 30 * 1000);
                const threadData = (await Threads.getInfo(threadID)) || {};
                if (threadData.hasOwnProperty("adminIDs")) {
                    check = false;
                    api.sendMessage("وتف", threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: "langChoose_0x01042022",
                            messageID: info.messageID,
                            adminIDs: threadData.adminIDs
                        });
                    });
                }
            }
            api.changeNickname(` ${(!global.config.BOTNAME) ? "و" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
          	api.sendMessage(`احي`, threadID);
		}); 
	}
    else {
        try {
            const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join("خرا");
			const pathGif = join(path, `hdfi2.jpg`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
		const gifes = await axios.get(`https://i.imgur.com/aBbZnVa.gif`, { responseType: "stream"});
		const atth = gifes.data;
		memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = " ⚜️=×= 「 اشعار 」=×=⚜️\n\n\n[⚜]●▬▬▬▬๑⇧⇧๑▬▬▬▬●[⚜]\n「{name}」اسـم الـعـضـو الـجـديـد\n \n\nاسـم الـمـجـمـوعـة\n\n『{threadName}』\n[⚜]●▬▬▬▬๑⇧⇧๑▬▬▬▬●[⚜]\n{soThanhVien}\n[⚜]●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●[⚜]\n{type}" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join('🌚💔'))
			.replace(/\{type}/g, (memLength.length > 1) ?  'عضو مبند 🌚💔' : 'انا بوت ملاك في خدمتك 💀🎻')
			.replace(/\{soThanhVien}/g, memLength.join('😂💔'))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: atth, mentions }
			else formPush = { body: msg, attachment: atth, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
        }
