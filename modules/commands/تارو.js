module.exports.config = {
  name: "تارو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "الفخم المتكبر ",
  description: "",
  commandCategory: "صور",
  usages: "art",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = ["https://i.imgur.com/2R0f20J.jpg","https://i.imgur.com/mEdIJnB.jpg","https://i.imgur.com/OFuOHXq.jpg","https://i.imgur.com/bbRQY5P.jpg","https://i.imgur.com/pPRJWsr.jpg","https://i.imgur.com/yIeo9ou.jpg","https://i.imgur.com/egpjvuT.jpg","https://i.imgur.com/Fn3DfOQ.jpg","https://i.imgur.com/r5J7D1F.jpg","https://i.imgur.com/M6PQkAX.jpg","https://i.imgur.com/nr8cAjF.jpg","https://i.imgur.com/xHXRAM4.jpg","https://i.imgur.com/ufCpqcg.jpg","https://i.imgur.com/47ugEAm.jpg", "https://i.imgur.com/v2pU3Tj.jpg",
    "https://i.imgur.com/SLJeyO7.jpg",
    "https://i.imgur.com/FDLf4PD.jpg",
    "https://i.imgur.com/E4Izv3W.jpg",
    "https://i.imgur.com/gmtqHam.jpg",
    "https://i.imgur.com/0iM9AZr.jpg",
    "https://i.imgur.com/hqdrxWu.jpg", "https://i.imgur.com/TZ99Hrf.jpg",
"https://i.imgur.com/72UYGI3.jpg",
"https://i.imgur.com/c6NwUje.jpg",
"https://i.imgur.com/mZMa4Fj.jpg",
"https://i.imgur.com/RHUIrHU.jpg",
"https://i.imgur.com/zPSurUw.jpg",
"https://i.imgur.com/Y7szmB8.jpg",
"https://i.imgur.com/Kbe8Bqp.jpg",
"https://i.imgur.com/wkAo07R.jpg",
"https://i.imgur.com/DIWtOYm.jpg",
"https://i.imgur.com/Sdoom63.jpg",
"https://i.imgur.com/B92OLSz.jpg",
"https://i.imgur.com/bwogAyR.jpg",
"https://i.imgur.com/c79JoOC.jpg",
"https://i.imgur.com/LtH8hG1.jpg",
"https://i.imgur.com/42lhm0a.jpg",
"https://i.imgur.com/vkE8lQe.jpg",
"https://i.imgur.com/9BbHCP2.jpg",
"https://i.imgur.com/OfE3Yqz.jpg",
"https://i.imgur.com/q9n8E5g.jpg",
"https://i.imgur.com/JFuYxMM.jpg",
"https://i.imgur.com/VlIGbTn.jpg",
"https://i.imgur.com/rP6XR6x.jpg",
"https://i.imgur.com/AZS7FD9.jpg",
"https://i.imgur.com/CKX4wK4.jpg",
"https://i.imgur.com/facyYlk.jpg",
"https://i.imgur.com/e0tmasp.jpg",
"https://i.imgur.com/nz6LPgp.jpg",
"https://i.imgur.com/hsf3IKh.jpg",
"https://i.imgur.com/0GgHNBv.jpg",
"https://i.imgur.com/WMPCYzR.jpg",
"https://i.imgur.com/KmpvSna.jpg",
"https://i.imgur.com/iaexTGb.jpg",
"https://i.imgur.com/divQPMT.jpg",
"https://i.imgur.com/elwwQqH.jpg",
"https://i.imgur.com/ByGb1S4.jpg",
"https://i.imgur.com/J6HFj2Y.jpg",
"https://i.imgur.com/gAnYCxo.jpg",
"https://i.imgur.com/zmzQaQs.jpg",
"https://i.imgur.com/MZhBoTa.jpg",
"https://i.imgur.com/ctb5EGr.jpg",
"https://i.imgur.com/9rHIjdA.jpg",
"https://i.imgur.com/2OrvMyG.jpg",
"https://i.imgur.com/G9IQfVE.jpg",
"https://i.imgur.com/Bo9sYsE.jpg",
"https://i.imgur.com/9bOLYY1.jpg",
"https://i.imgur.com/Pu3blC3.jpg",
"https://i.imgur.com/L3Ae7fP.jpg",
"https://i.imgur.com/8fT9TZn.jpg","https://i.imgur.com/l9Vans7.jpg","https://i.imgur.com/DIUaEXq.jpg","https://i.imgur.com/cCCkWKm.jpg","https://i.imgur.com/0l4VrgL.jpg","https://i.imgur.com/AC2ywmg.jpg","https://i.imgur.com/nU8hCMe.jpg","https://i.imgur.com/abgyjPw.jpg","https://i.imgur.com/P5sDCfN.jpg","https://i.imgur.com/dyQX44D.jpg","https://i.imgur.com/j1oB7P2.jpg","https://i.imgur.com/MhTMfYr.jpg","https://i.imgur.com/JxnKzAB.jpg","https://i.imgur.com/A5Nk86m.jpg","https://i.imgur.com/kVGleEP.jpg","https://i.imgur.com/jMfFd3I.jpg","https://i.imgur.com/ARmNHxw.jpg","https://i.imgur.com/Ho4xa1s.jpg","https://i.imgur.com/UgMfdbf.jpg","https://i.imgur.com/Wu1aRXD.jpg","https://i.imgur.com/Chfusnp.jpg","https://i.imgur.com/2VwJbZg.jpg","https://i.imgur.com/BZTivE6.jpg","https://i.imgur.com/SNk6M88.jpg","https://i.imgur.com/e0OXKdQ.jpg","https://i.imgur.com/J2XGzpE.jpg","https://i.imgur.com/KxU7Zbf.jpg","https://i.imgur.com/bzjW6CK.jpg","https://i.imgur.com/kMZNz8o.jpg","https://i.imgur.com/LlRFOFv.jpg","https://i.imgur.com/rr10fgG.jpg","https://i.imgur.com/UWyRY8W.jpg","https://i.imgur.com/czusqtb.jpg","https://i.imgur.com/WRCWzit.jpg","https://i.imgur.com/sbRlDOh.jpg"];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("عشان تحصل افخم صور الانمي لازم يمون معاك 900000 واذا مامعك عادي في دين بيصير عليك دين 900000",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 900000})
   var callback = () => api.sendMessage({body:` افـخـم صـور الانمي
💀عدد صور ${link.length}\n-900000 دولار!`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
