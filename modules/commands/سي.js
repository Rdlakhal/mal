const axios = require('axios');


const aa = {
  config: {
  name: "‌",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "عمر",
  description: "العاب",
  commandCategory: "العاب",
  usages: "",
  cooldowns: 5,
},

  run: async function({ event, api, args}) {
  
    const coj = args.join(" ")
    if (!coj) return out('اكتب شي')
async function out(gry, callback)  {
await api.sendMessage(gry, event.threadID, callback, event.messageID);
};
fetch("https://simsimi.vn/web/simtalk", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-GB,en;q=0.9,fr-MA;q=0.8,fr;q=0.7,en-US;q=0.6",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "Referer": "https://simsimi.vn/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": `text=${coj}&lc=ar&=`,
  "method": "POST"
}).then(async res => {
var data = await res.json();
  var rd = data.success;
  return out({ body: rd }, (error, info) => {
      global.client.handleReply.push(info.messageID, {
        name: this.config.name,
        author: event.senderID,
        messageID: info.messageID

      });
    });
});

    
  },

  handleReply: async function({ api, event, handleReply , usersData, threadsData }) {

async function out(gry, callback)  {
await api.sendMessage(gry, event.threadID, callback, event.messageID);
};
    fetch("https://simsimi.vn/web/simtalk", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-GB,en;q=0.9,fr-MA;q=0.8,fr;q=0.7,en-US;q=0.6",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "Referer": "https://simsimi.vn/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": `text=${event.body}&lc=ar&=`,
  "method": "POST"
}).then(async res => {
var data = await res.json();
  var rd = data.success;
  return out(rd, (error, info) => {
      global.client.handleReply.push(info.messageID, {
        name: this.config.name,
        author: event.senderID,
        messageID: info.messageID

      });
    });
});





  },
};


module.exports = aa;
