module.exports.config = {
   name: "شعار_اور",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "",
    usages: "",
    commandCategory: "العاب",
    cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["#مملكة_زيكولا \n#Anime_Aur \n#نحو_دول_اور_الجديدة"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://i.imgur.com/RdZZWks.jpeg","https://i.imgur.com/49prZq8.jpeg"];
 var callback = () => api.sendMessage({body:`${know}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
