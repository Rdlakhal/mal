module.exports.config = {
   name: "لكم",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "3bida",
    description: "",
    usages: "",
    commandCategory: "ترفية",
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
   var hi = ["「 ابلع بوكس 👊」"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://scontent.xx.fbcdn.net/v/t1.15752-9/407026204_322112850714377_4812992066938230451_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_isjzzsltVEAX88rQ-C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSjyWPCMcJOnILnSPtw1k2IdewCtqgwMRzghlRH0gC_ag&oe=66338A20"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
