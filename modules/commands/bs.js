module.exports.config = {
  name: "بنترست",
  version: "1.0",
  hasPermssion: 0,
  credits: "jameslim",
  description: "يجيبلك الصورة الي تريدها",
  usePrefix: true,
  commandCategory: "صور",
  usages: "query",
  cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const keySearch = args.join(" ");

    if (!keySearch.includes("-")) return api.sendMessage('حدث خطأ حاول من جديد...! 🐢', event.threadID, event.messageID);
    
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-')).trim();
    const numberSearch = keySearch.split("-").pop().trim() || 9;

    const res = await axios.get(`https://api-samir.onrender.com/pinterest?query=${encodeURIComponent(keySearchs)}&number=${numberSearch}`);
    const data = res.data.result;
    var num = 0;
    var imgData = [];

    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    api.sendMessage({
        attachment: imgData,
        body: numberSearch + ' images for ' + keySearchs
    }, event.threadID, event.messageID);

    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};
