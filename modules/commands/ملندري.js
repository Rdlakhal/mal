const axios = require("axios");
module.exports.config = {
  name: "at",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "S H A D Y",
  description: "تحميل الفيديوهات من منصات متعددة",
  commandCategory: "المطور",
  usages: "",
  cooldowns: 0,
};

module.exports.run = async function({ event, api, args }) {};

module.exports.handleEvent = async function({ event, api }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  let platform = '';
  if (body.startsWith("https://youtu")) {
    platform = 'YouTube';
  } else if (body.startsWith("https://music.youtube.com")) {
    platform = 'YouTube Music';
  } else if (body.startsWith("https://www.instagram.com")) {
    platform = 'Instagram';
  } else if (body.startsWith("https://www.facebook.com/")) {
    platform = 'Facebook';
  } else if (body.startsWith("https://vt.tiktok.com/") || body.startsWith("https://vm.tiktok.com/")) {
    platform = 'TikTok';
  } else if (body.startsWith("https://pin.it/") || body.startsWith("https://www.pinterest.com/")) {
    platform = 'Pinterest';
  } else if (body.startsWith("https://imgur.com/") || body.startsWith("https://i.imgur.com/")) {
    platform = 'Imgur';
  }

  if (platform) {
    api.setMessageReaction("❔", messageID, null, true);
    api.sendMessage(
      `╭───「${platform}」───╮\nتم رصد فيديو ${platform} 📹\nالرد بـ "تحميل" لتحميل الفيديو.`,
      threadID,
      (err, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          link: body,
          type: "download"
        });
      }
    );
  }
};

module.exports.handleReply = async function({ event, api, handleReply }) {
  const { type, link, messageID } = handleReply;
  const { body, threadID } = event;

  if (type === "download" && body.toLowerCase() === "تحميل") {
    api.setMessageReaction("⚙️", messageID, null, true);
    try {
      const videoStream = await global.utils.getStreamFromURL(`https://app-alld-4e6d840874be.herokuapp.com/api/caera/aute?link=${encodeURIComponent(link)}`);
      api.sendMessage({
        body: "تم تحميل الفيديو بنجاح ✅",
        attachment: videoStream
      }, threadID);
      api.setMessageReaction("✅", messageID, null, true);
    } catch (error) {
      api.sendMessage("حدث خطأ أثناء تحميل الفيديو. حاول مرة أخرى.", threadID);
      api.setMessageReaction("❌", messageID, null, true);
    }
  }
};
