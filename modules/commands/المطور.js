module.exports.config = {
	name: "المطور",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "معلومات البوت و المطور",
	commandCategory: "خدمات",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/YDPzVrs.jpeg", "https://i.imgur.com/5DncvHN.jpeg", "https://i.imgur.com/4lUuDRy.jpeg", "https://i.imgur.com/YDPzVrs.jpeg", "https://i.imgur.com/5DncvHN.jpeg", "https://i.imgur.com/4lUuDRy.jpeg", "https://i.imgur.com/2wiUzQv.jpeg", "https://i.imgur.com/NJ57QCs.jpg"];
var callback = () => api.sendMessage({body:`.      ༺ཌ༈ⓎⓄⓊⓉⒶ༈ད༻

كنيتي: ${global.config.BOTNAME}
 ${global.config.PREFIX}

✫ مطور البوت:⏎  ༺༽الـمـتـكـبـر༼༻

 رابط حساب المطور ⏎:\n m.me/100094409873389

⏎سيرفر البوت✅

⏎اليوم: ${juswa} 

تم تشغيل البوت على  ${hours}:${minutes}:${seconds}.

⏎شكرا على إستعمالي ${global.config.BOTNAME} بوت✅!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
