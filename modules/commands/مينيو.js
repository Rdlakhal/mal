module.exports.config = {
  name: "الاوامر",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "اوامر البوت",
  usages: "الاوامر",
  commandCategory: "خدمات",
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  let num = parseInt(event.body.split(" ")[0].trim());
  (handleReply.bonus) ? num -= handleReply.bonus : num;
  let msg = "";
  let data = handleReply.content;
  let check = false;
  if (isNaN(num)) msg = "اختار رقم الامر الي تريده..! 🌚🤍";
  else if (num > data.length || num <= 0) msg = "الرقم الذي اخترته غير موجود بالقائمة ";
  else {
    const { commands } = global.client;
    let dataAfter = data[num-=1];
    if (handleReply.type == "cmd_info") {
      let command_config = commands.get(dataAfter).config;
      msg += `〖${command_config.commandCategory.toUpperCase()}〗\n`;
      msg += `\nاسم الأمر: ${dataAfter}`;
      msg += `\nمعلومات: ${command_config.description}`;
      msg += `\nالاستخدام: ${(command_config.usages) ? command_config.usages : "الكل"}`;
      msg += `\nوقت الانتظار: ${command_config.cooldowns || 5}s`;
      msg += `\nالصلاحية: ${(command_config.hasPermssion == 0) ? "الكل" : (command_config.hasPermssion == 1) ? "مسؤولي المجموعات" : "المطور"}`;
     msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
      msg += `\n\n↞ تم برمجته بواسطة ${command_config.credits} `;
    } else {
      check = true;
      let count = 0;
      msg += `هاذي هيا الاوامر من نوع ❖ 」${dataAfter.group.toUpperCase()}「 ❖ \n`;

      dataAfter.cmds.forEach(item => {
        msg += `\n 『${count+=1}』⎒ ❲  ${item}  ❳ ⎒\n\n ⏎ ${commands.get(item).config.description}\n\n\n\n`;
      })
      msg += "\n\n ‌.     ‌ ༺ⓜⒶⓁⒶⓀ༻";
    }
  }
  const axios = require('axios');
  const fs = require('fs-extra');
  const img = ["https://i.imgur.com/0ur3dLU.jpeg","https://i.imgur.com/PnLf0hw.jpeg"," https://i.imgur.com/lM7q1g3.jpeg","https://i.imgur.com/Qo7HxLe.jpeg","https://i.imgur.com/RcOwqE0.jpeg","https://i.imgur.com/pMT247s.jpeg","https://i.imgur.com/B7ZJS0I.jpeg","https://i.imgur.com/dcrIjLh.jpeg","https://i.imgur.com/6Lg75kM.jpeg","https://i.imgur.com/uOJMUn3.jpeg"," https://i.imgur.com/bDbGc5I.jpeg","https://i.imgur.com/nKxid5W.jpeg","https://app-gpt3-5dafa0a5befe.herokuapp.com/gpt",]
var path = __dirname + "/cache/menu.jpg"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 
  const imgP = []
  let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
  imgP.push(fs.createReadStream(path))
  var msgg = {body: msg, attachment: imgP}
  api.unsendMessage(handleReply.messageID);
  return api.sendMessage(msgg, event.threadID, (error, info) => {
    if (error) console.log(error);
    if (check) {
      global.client.handleReply.push({
        type: "cmd_info",
        name: this.config.name,
        messageID: info.messageID,
        content: data[num].cmds
      })
    }
  }, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  const axios = require('axios');
  const fs = require('fs-extra');
  const imgP = []
  const img = ["https://scontent.xx.fbcdn.net/v/t1.15752-9/367385987_232212126452955_5945552453509546609_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4ZXcoQTFsA2UW8Koi8Y7Bp01VmzC5xy-nTVWbMLnHLy4lrJXIWFox-VnAe4VtC4PliejB5uMVgWFhenaC1BIb&_nc_ohc=3LGeavEI8SEAb4dr3oU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QECzlaFZOwI7qYtpqAo_NGLZ0KLjPzn5tGWsydrs9Eoaw&oe=664A104C","https://scontent.xx.fbcdn.net/v/t1.15752-9/367393460_1484063028801167_6279139986347503565_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s2ToZnMJi_0Ab4xovbl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QERNdnNzcAo05MWtRmYn3BDV_qnFwTtsWHiI-XG47aoeg&oe=664E09B0"
,"https://scontent.xx.fbcdn.net/v/t1.15752-9/368576737_605403615006655_3180810604628144376_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjRgJxXK4MG0Fx6xYotdwh2pvCd2b56Hjam8J3ZvnoeL4QLJ5vvsDUUKtzI9ho-5j0j6U62oMM595PgQcZO1pP&_nc_ohc=su5goNO3JmIAb7LZcMx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG6kQ_ybgZR80O9LR8jiWGPg_tD23G83iQrE8E_mCzosg&oe=6649EE5A",]
  var path = __dirname + "/cache/menu.jpg"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 

    let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
  const command = commands.values();
  var group = [], msg = "༺ཌ༈ⓜⓐⓛⓐⓚ༈ད༻\n";
  let check = true, page_num_input = "";
  let bonus = 0;

  for (const commandConfig of command) {
    if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
    else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
  }

  if (args[0] && ["all", "الكل"].includes(args[0].trim())) {
    let all_commands = [];
    group.forEach(commandGroup => {
      commandGroup.cmds.forEach(item => all_commands.push(item));
    });
    let page_num_total = Math.ceil(all_commands.length / 2222222222);
    if (args[1]) {
      check = false;
      page_num_input = parseInt(args[1]);
      if (isNaN(page_num_input)) msg = "m.me/100094409873389";
      else if (page_num_input > page_num_total || page_num_input <= 0) msg = "الرقم الذي اخترته غير موجود بالقائمة";
      else check = true;
    }
    if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
      bonus = index_start;
      index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
      all_commands = all_commands.slice(index_start, index_end);
      all_commands.forEach(e => {
        msg += `\n╭────────────╮\n『${index_start+=1}』『${e}』 ${commands.get(e).config.description}\n╰────────────╯`;
      })
      msg += `\n\n• ${page_num_input || 1}/${page_num_total}`;
      msg +=``
      msg += "\n╭──────\n \n‌              𓆩『 الـمـتـكـبـر 』𓆪\n \n‌               ──────╯";
    }
    var msgg = {body: msg, attachment: imgP}
    return api.sendMessage(msgg, threadID, (error, info) => {
      if (check) {
        global.client.handleReply.push({
          type: "cmd_info",
          bonus: bonus,
          name: this.config.name,
          messageID: info.messageID,
          content: all_commands
        })
      }
    }, messageID)
  }

  let page_num_total = Math.ceil(group.length / 2222222222);
  if (args[0]) {
    check = false;
    page_num_input = parseInt(args[0]);
    if (isNaN(page_num_input)) msg = "m.me/100094409873389";
    else if (page_num_input > page_num_total || page_num_input <= 0) msg = "  الرقم الذي اخترته غير موجود بالقائمة";
    else check = true;
  }
  if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
    bonus = index_start;
    index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
    group = group.slice(index_start, index_end);
    group.forEach(commandGroup => msg += `\n『${index_start+=1}』⏎ ࿐ཽ༵͜͜͜  ⎒ ❲  ${commandGroup.group.toUpperCase()} ❳ ⎒`);
    msg += `\n\n• {${page_num_input || 1}/${page_num_total}} `;
    msg +=``
    msg += `\n╭───────────────╮\n‌         من تصميم الـفـخـم الـمـتـكـبــر \n╰───────────────╯ `;
  }
  var msgg = {body: msg, attachment: imgP}
  return api.sendMessage(msgg, threadID, async (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      bonus: bonus,
      messageID: info.messageID,
      content: group
    })
  });
    }
