const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const moment = require("moment-timezone");

module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "𝐊𝐈𝐓𝐄 凧",
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "axios": ""
  }
};

module.exports.onLoad = function () {
  const { existsSync, mkdirSync } = fs;

  const joinGifPath = path.join(__dirname, "cache", "joinGif");
  if (!existsSync(joinGifPath)) mkdirSync(joinGifPath, { recursive: true });

  const randomGifPath = path.join(__dirname, "cache", "joinGif", "randomgif");
  if (!existsSync(randomGifPath)) mkdirSync(randomGifPath, { recursive: true });

  return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == '100094409873389')) {
    return api.sendMessage('مطوري (￣▽￣)"', threadID);
  } 
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "Gry 凧<3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(`تم تشغيل البوت بمجموعتكم ☆*: .｡. o(≧▽≦)o .｡.:*☆`, threadID);
  } else {
    try {
      const { createReadStream, existsSync, readdirSync } = fs;
      const time = moment.tz("Africa/Casablanca").format("DD/MM/YYYY || HH:mm:s");
      const hours = moment.tz("Africa/Casablanca").format("HH");
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const joinGifPath = path.join(__dirname, "cache", "joinGif");
      const pathGif = path.join(joinGifPath, `${threadID}.gif`);

      let mentions = [], nameArray = [], memLength = [], i = 0;

      for (const participant of event.logMessageData.addedParticipants) {
        const userName = participant.fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id: participant.userFbId });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      let msg = threadData.customJoin || "مرحبا بك ، انا شيلي o(〃＾▽＾〃)o";
      msg = msg.replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? 'ُ' : 'ُ')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "اتمنى ان تحضى بصباح جيد" : 
    hours > 10 && hours <= 12 ? "مساء الخير لك" :
    hours > 12 && hours <= 18 ? "لتحضى بليلة سعيدة" : "لتحضى بليلة سعيدة")
                .replace(/\{time}/g, time);

      if (!existsSync(joinGifPath)) mkdirSync(joinGifPath, { recursive: true });

      const randomPath = readdirSync(path.join(__dirname, "cache", "joinGif", "randomgif"));

      let formPush;
      if (existsSync(pathGif)) {
        formPush = { body: msg, attachment: createReadStream(pathGif), mentions };
      } else if (randomPath.length != 0) {
        const pathRandom = path.join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions };
      } else {
        formPush = { body: msg, mentions };
      }

      let userFbId;
      event.logMessageData
