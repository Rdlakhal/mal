module.exports.config = {
   name: "بنتي",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "3bida",
    description: "",
    usages: "",
    commandCategory: "المطور",
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
   var hi = ["نعم بابي ❤😋😚","نعم يا احلاه اب في العالم🥰😊"," نعم يبعد روحي ❤😊","نعم يا البي🤗🥰"," نعم يحبي❤🤗😊🥰"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://i.imgur.com/QNtuuaM.jpg","https://i.imgur.com/aXEKttE.jpg","https://i.imgur.com/KXtDqmB.jpg","https://i.imgur.com/6Ctqwug.jpg","https://i.imgur.com/JMmNkZ8.jpg","https://i.imgur.com/BJfb9o6.jpg","https://i.imgur.com/ZRXkNVS.jpg","https://i.imgur.com/wKzKPno.jpg","https://i.imgur.com/CaJfPnb.jpg","https://i.imgur.com/PotX8IC.jpg","https://i.imgur.com/mkb7hml.jpg","https://i.imgur.com/zHaEDHU.jpg","https://i.imgur.com/ChSdLHT.jpg","https://i.imgur.com/Zb3bpc6.jpg","https://i.imgur.com/PzLKQm2.jpg","https://i.imgur.com/qNgbjxB.jpg","https://i.imgur.com/80hPcHs.jpg","https://i.imgur.com/rWlweE8.jpg","https://i.imgur.com/tu6gkkc.jpg","https://i.imgur.com/OweI6iT.jpg","https://i.imgur.com/nv7JbsS.jpg","https://i.imgur.com/4Os0G9C.jpg","https://i.imgur.com/VTtr2pQ.jpg","https://i.imgur.com/YEYFCg8.jpg","https://i.imgur.com/4jMH2ki.jpg","https://i.imgur.com/BawYFx1.jpg","https://i.imgur.com/FT9ajDD.jpg","https://i.imgur.com/sbRlDOh.jpg",
  ];"https://scontent.xx.fbcdn.net/v/t1.15752-9/380350174_1013130929926085_6714927189524601430_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4_KH7HuM_bYAb5igGhI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGg4x5WK3aCqcNxN92u2OysodcUV2OjCI0c0VBGoyT1VA&oe=664A38EE"
];
	 var callback = () => api.sendMessage({body:`『🌌』 ${know} 『🌌』`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
