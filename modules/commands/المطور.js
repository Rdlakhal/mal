module.exports.config = {
	name: "المطور",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "معلومات البوت و المطور",
	commandCategory: "المطور",
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
var link = ["https://scontent.xx.fbcdn.net/v/t1.15752-9/438083794_354048690974485_6751256833478114601_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cafwTM6OCtsAb68is9o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGkSoxXap6TBLEtmOYMydCeTloKK8Pi_Pk3vtXApJIXTw&oe=664B4559","https://scontent.xx.fbcdn.net/v/t1.15752-9/438083794_354048690974485_6751256833478114601_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHo2WNCOgP-30vsiDlwZdsZO4c2VAOSrss7hzZUA5Kuyy1yjcoGu706hhgFZ_c-o-yRRVuv8HyTwNl-m4jEym9N&_nc_ohc=cafwTM6OCtsAb68is9o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHAgP-mWxAngrnPxRRNK6gW6oU7saAP8JJ6wYIanrl6vw&oe=664B4559","https://scontent.xx.fbcdn.net/v/t1.15752-9/438171648_1760713144458866_8741732658149275578_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ulBMqdDRhI0Ab7pnwvM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGX7VYbgjLAgLUUcTFDns-GgDlvTgF2vmlrSKYGU-yaTg&oe=664B552E","https://scontent.xx.fbcdn.net/v/t1.15752-9/438171648_1760713144458866_8741732658149275578_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvrv2LRomjPA_Ir_0bw9pZUXYBpSnnYnBRdgGlKedicMpDESvKfitmsFP3eMvmqYNqu0KnR2jA2_RN9c2Hax_m&_nc_ohc=ulBMqdDRhI0Ab7pnwvM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGEDRs1_-h6mLkEfiQB-GW2utzO_dysOAXaqWvSMzngmQ&oe=664B552E"];
var callback = () => api.sendMessage({body:`.      ༺ཌ༈ⓎⓄⓊⓉⒶ༈ད༻

كنيتي: ${global.config.BOTNAME}
 ${global.config.PREFIX}




✫ مطور البوت:⏎  \n ༺༽الـمـتـكـبـر༼༻



رابط حساب المطور• 

https://www.facebook.com/arrogant3j?mibextid=ZbWKwL



 للدردشة مع المطور ⏎:\n m.me/100094409873389

مرحبا بي الجميع  في الخاص للاستفسار او افكار للبوت 

⏎سيرفر البوت✅



⏎اليوم: ${juswa} 

تم تشغيل البوت على  ${hours}:${minutes}:${seconds}.

⏎شكرا على إستعمالي ${global.config.BOTNAME} بوت✅!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
