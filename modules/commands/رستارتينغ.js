module.exports.config = {
    name: "ريست",
    version: "2.0.2",
    hasPermssion: 2,
    credits: "Mirai ",
    description: "اعادة التشغيل 👽🎧",
    commandCategory: "رست",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
  let name = await Users.getNameUser(event.senderID)
 const permission = ["100094409873389"];
      if (!permission.includes(event.senderID)) return api.sendMessage("༺........ ༺ لا يــمــكــن اســتــخـــدام الامــــر الا بــواســطـــة ", event.threadID, event.messageID);
if(args.length == 0) api.sendMessage(`💟 مــرحــبًـــا بـالـرئـيــس : ༒ ${name}\n ༒يــرجــى الانـتـظــار لـحـظـــة سـيـتــم إعـــادة تـشـغـيــل نــظــام مــلاـــك بــــعــــد (10 ثـــــوانٍ) 💟`,event.threadID, () =>process.exit(1))
}  
  /*
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`⌛ســيـتــم إعــادة تـشــغــيــل مـلاــــك بـــعــد : ${gio}s\n⏰الآن: ${gio}:${Minutes}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("⌛بـــدء عــمـلــيــة إعـــادة الــتــشــغــيــل",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}
*/
