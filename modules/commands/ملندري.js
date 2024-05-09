const axios = require("axios");
module.exports.Preset = {
  name: "at",
  version: "1.0.0",
  Role: 3,
  credits: "S H A D Y",
  description: "",
  Class: "الأدمن",
  usages: "",
  Rest: 0
  }
 
module.exports.run = function ({ event, api, args }) {};
module.exports.onEvent = async function ({ event, api }) {
  const { body, threadID } = event;
  if (
    body &&
    (body.startsWith("https://youtu") ||
      body.startsWith("https://music.youtube.com"))
  ) {
    api.setMessageReaction("❔", event.messageID, null, true);
    api.sendMessage(
      `╭──«(»──𝒀𝑶𝑼𝑻𝑼𝑩𝑬──«)»──╮\n⇜ ༈ تم رصد فيديو YouTube 󰂆\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
      threadID,
      (err, info) => {
        global.Settings.onReply.set(info.messageID, {
          name: "at",
          messageID: info.messageID,
          link: body,
          type: "do"
        });
      },
      event.messageID
    );
  } else if (body && body.startsWith("https://www.instagram.com")) {
    api.setMessageReaction("❔", event.messageID, null, true);
    api.sendMessage(
      `╭─«(»──𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴──«)»─╮\n⇜ ༈ تم رصد فيديو Instagram 󰂆\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
      threadID,
      (err, info) => {
        global.Settings.onReply.set(info.messageID, {
          name: "at",
          messageID: info.messageID,
          link: body,
          type: "do"
        });
      },
      event.messageID
    );
  } else if (body && body.startsWith("https://www.facebook.com/")) {
    api.setMessageReaction("❔", event.messageID, null, true);
    api.sendMessage(
      `╭─«(»──𝑭𝑨𝑪𝑬𝑩𝑶𝑶𝑲──«)»─╮\n⇜ ༈ تم رصد فيديو facebook 󰟤\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
      threadID,
      (err, info) => {
        global.Settings.onReply.set(info.messageID, {
          name: "at",
          messageID: info.messageID,
          link: body,
          type: "do"
        });
      },
      event.messageID
    );
  } else if (body &&
    (body.startsWith("https://vt.tiktok.com/") ||
      body.startsWith("https://vm.tiktok.com/"))) {
    api.setMessageReaction("❔", event.messageID, null, true);
    api.sendMessage(
      `╭─«(»───𝑻𝑰𝑲𝑻𝑶𝑲───«)»─╮\n⇜ ༈ تم رصد فيديو TikTok 📱\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
      threadID,
      (err, info) => {
        global.Settings.onReply.set(info.messageID, {
          name: "at",
          messageID: info.messageID,
          link: body,
          type: "do"
        });
      },
      event.messageID
    );
  } else if (
    body &&
    (body.startsWith("https://pin.it/") ||
      body.startsWith("https://www.pinterest.com/"))
  ) {
    api.setMessageReaction("❔", event.messageID, null, true);
    api.sendMessage(
      `╭─«(»──𝑷𝑰𝑵𝑻𝑬𝑹𝑬𝑺𝑻──«)»─╮\n⇜ ༈ تم رصد فيديو Pinterest 󰟯\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
      threadID,
      (err, info) => {
        global.Settings.onReply.set(info.messageID, {
          name: "at",
          messageID: info.messageID,
          link: body,
          type: "do"
        });
      },
      event.messageID
    );
  } else if (
    body &&
    (body.startsWith("https://imgur.com/") ||
      body.startsWith("https://i.imgur.com/"))
  ) {
    api.setMessageReaction("❔", event.messageID, null, true);
    api.sendMessage(
      `╭─«(»───𝑰𝑴𝑮𝑼𝑹───«)»─╮\n⇜ ༈ تم رصد فيديو Imgur 󰦐\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
      threadID,
      (err, info) => {
global.Settings.onReply.set(info.messageID, {
          name: "at",
          messageID: info.messageID,
          link: body,
          type: "do"
        });
      },
      event.messageID
    );
  }
};
 
module.exports.onReply = async function ({ event, onReply, api, Message }) {
  const { type, link, messageID } = onReply;
  const { body } = event;
  const args = body.split(" ");
 
  if (type == "do") {
    if (["تحميل"].includes(args[0])) {
      await api.unsendMessage(messageID);
      api.setMessageReaction("⚙️", event.messageID, null, true);
 
 
       Message.send({
        body: "༈「تـم تـحـمـيـل الـفـيـديـو」 ✅ ༈",
        attachment: await global.Mods.getStreamFromURL(`https://app-alld-4e6d840874be.herokuapp.com/api/caera/aute?link=${encodeURIComponent(link)}`)
      } );
 
 
  api.setMessageReaction("✅", event.messageID, null, true);
 
 
 
 
 
    }
  }
 
 
 
 
 
 
};
