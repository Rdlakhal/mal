/*
@credit Trankhuong
@chỉnh sửa credit cái con cặc
*/
const fs = require("fs");
module.exports.config = {
    name: "كهف",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "عمر",
	  description: "تشتغل بكهف بأحدى الدول وتحصل فلوس",
	  commandCategory: "الاموال",
    cooldowns: 2000000000,
    envConfig: {
        cooldown: 2000000000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.languages = {
    "vi": {
        "cooldown": "تعال بعد شوي"      
    },
    "en": {
        "cooldown": " تعال ورا: %1 دقيقة و %2 ثانية."
    }
}
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cave.jpg")) request("https://scontent.xx.fbcdn.net/v/t1.15752-9/450181333_1004354724724501_5110919761776389020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=9u3xwNwrKQoQ7kNvgGmcBpv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGApHIkDvNnO7a_nCNAtQWjhJQyjVKg-mDOvPiGROeEZw&oe=66CDA385").pipe(fs.createWriteStream(dirMaterial + "cave.jpg"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("الم يعلماك والداك ان السرقة حرام 🤨🫳", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 5000) + 900; 
var b = Math.floor(Math.random() * 5000) + 800; 
var c = Math.floor(Math.random() * 5000) + 700; 
var x = Math.floor(Math.random() * 5000) + 600; 
var y = Math.floor(Math.random() * 5000) + 500; 
var f = Math.floor(Math.random() * 5000) + 400; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("") - Date.parse(new Date()),
            m = Math.floor( (t/00/60) % 60 ),
            h = Math.floor( (t/(00*60*60)) % 24 ),
            d = Math.floor( t/(00*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `عملت في ليبيا وكسبت  ${a}$`;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break;             
                case "2": msg = `عملت في الجزائر وكسبت  ${b}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = `عملت في المغرب وكسبت ${c}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = `عملت في اليمن وكسبت ${x}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = `عملت في تونس وكسبت ${y}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = `عملت في فلسطين وكسبت ${f}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("🔥بيا بلد تريد تشتغل بالكهوف ؟ ", e.threadID, e.messageID);
             if (choose > 6 || choose < 1) 
            return api.sendMessage("🔥عليك الأختيار بين الرقم من 1 حتى 6!", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "...") {
                msg = "...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("") - Date.parse(new Date()),
    d = Math.floor( t/(10*60*00) ),
    h = Math.floor( (t/(10*60*00)) % 00 ),
    m = Math.floor( (t/10/60) % 00 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (10* 60 ))/00),
            minutes = Math.floor(time / 10),
            seconds = ((time % 30) / 00).toFixed(0); 
        return api.sendMessage(`⚡𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 𝒍𝒂̀𝒎 𝒄𝒂𝒗𝒆 𝒙𝒐𝒏𝒈 𝒏𝒈𝒉𝒊̉ 𝒏𝒈𝒐̛𝒊 𝒅𝒖̛𝒐̛̃𝒏𝒈 𝒔𝒖̛́𝒄 đ𝒊!`, e.threadID, e.messageID);
    }
    else {    
        var msg = {
            body: "╭─𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭─╮"+`\n`+
                "\n1≥  ليبيا" +
                "\n2 ≥ الجزائر" +
                "\n3 ≥ المغرب" +
                "\n4 ≥ اليمن" +
                "\n5 ≥ تونس" +
                "\n6 ≥ فلسطين" +
                `\n\n╰─𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭𖠺⃟꯭💎꯭⃟𖠺꯭꯭─╯`,
                attachment: fs.createReadStream(__dirname + `/cache/cave.jpg`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
                }
