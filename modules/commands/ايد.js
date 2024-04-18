module.exports.config = {
  name: "id",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DRIDI-RAYEN",
  description: "قم على الآيدي الخاص بك",
  commandCategory: "خدمات",
  usePrefix:false,
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  if (Object.keys(event.mentions) == 0) return api.sendMessage(`ٍ     ༺ཌ༈ⓎⓄⓊⓉⒶ༈ད༻ \n\n𓍯𓂃𓆉\n★آيدي المستخدم★🍃\n${event.senderID}\n\n★رابط الفيسبوك★🍃\nwww.facebook.com/${event.senderID} \n\n★رابط الدردشة★🍃\nm.me/${event.senderID}\n\n
  ٍ     ༺ཌ༈ⓎⓄⓊⓉⒶ༈ད༻`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
                                                                                                                                          }
