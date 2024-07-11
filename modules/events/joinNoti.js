monst fs = require("fs-extra");
const axios = require("axios");
module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "عمر",
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
  const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == '100061089512442')) {
      return api.sendMessage('مطوري (￣▽￣)"', threadID);
    } 
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
      api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "Gry 凧<3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(`اتصال ناجه تم تشغيل البوت في المجموعة`, threadID);
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Africa/Casablanca").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Africa/Casablanca").format("HH");
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "اهلا بك انا ملاك\n${name}": msg = threadData.customJoin;
      msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? 'ُ' : 'ُ')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "اتمنى ان تحضى بصباح جيد" : 
    hours > 10 && hours <= 12 ? "مساء الخير لك" :
    hours > 12 && hours <= 18 ? "لتحضى بليلة سعيدة" : "لتحضى بليلة سعيدة")
                .replace(/\{time}/g, time);  



      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }
      let userFbId;
      event.logMessageData.addedParticipants.some(i => {
        userFbId = i.userFbId;
        return userFbId;
    });
var x = await getAvatarUrl(userFbId);
const pathh = __dirname + '/yo.png';
const writer = fs.createWriteStream(pathh);
const res = await axios.get(x, { responseType: "stream"});
res.data.pipe(writer);
writer.on("finish", () => {
  return api.sendMessage({body: msg, attachment: fs.createReadStream(pathh)}, threadID);
})

    } catch (e) { return console.log(e) };
  }
          }
