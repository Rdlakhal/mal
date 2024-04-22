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
      msg += `\nالاستخدام: ${(command_config.usages) ? command_config.usages : "ال"}`;
      msg += `\nوقت الانتظار: ${command_config.cooldowns || 5}s`;
      msg += `\nالصلاحية: ${(command_config.hasPermssion == 0) ? "ك" : (command_config.hasPermssion == 1) ? "مسؤولي المجموعات" : "المطور"}`;
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
  const img = ["https://scontent.xx.fbcdn.net/v/t1.15752-9/438089792_1135988231159796_4523076980072127150_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEkHBPeGczMlw9gFa1eYz-9HbHs_us4v3odsez-6zi_et3bTydZ9j2Nnz-buEpCbQrnF2qk0Y3nfOIn5L82oMZX&_nc_ohc=VPVkT-T_OyYAb4bOxUn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGSX_2tAoggZC8f6S3JpjbrquUlRosKNxDvK_VLo0yZdA&oe=664DDB6A", "https://scontent.xx.fbcdn.net/v/t1.15752-9/438089827_768216195503592_8072226927899701248_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRTXHZnV4En-DLGGKUsDH-mBMFQb_TxsOYEwVBv9PGwxjpslSv1qxETVzC3JmaOyb3U8W4OhGR2LAPk7Uy7Mnr&_nc_ohc=5KP5y67IdQIAb5LNJQX&_nc_ad=z-m&_nc_cid=0&_nc_ht=.&oh=&oe=664DD29C",
"https://scontent.xx.fbcdn.net/v/t1.15752-9/438083808_1766225380568866_7681935192886424738_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFwx1rmjL5D3e3cPhKOzAA6gC41e5g0MN2ALjV7mDQw3eOYv46w1ldWFE8NVMW3-Lg5HKIGXKHgmU71qQhyV3I4&_nc_ohc=FT3uEAolWFAAb6WTxji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHpkE8QU19Zxq6P8dRWeU2HkRNbGxRQO3cXohfaelzWOw&oe=664DE4D5", 
"https://scontent.xx.fbcdn.net/v/t1.15752-9/414252410_334076712827303_5239024295342902847_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGxwLtccKVU49mvP8ixjNeo6X_pJBTHbdTpf-kkFMdt1Jsa-KSjNGFFTdbiTMhzZgc4lbAL5AG7c_gPNOmgu-Q5&_nc_ohc=rNR0VxWcXXcAb7wUdMi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QH57NBHuxUQ79d7PC3uGf3hB8viItPQLz33PRQl_HUSMQ&oe=664E038B"
 ]
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

  if (args[0] && ["all", "ك"].includes(args[0].trim())) {
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
    group.forEach(commandGroup => msg += `\n『${index_start+=1}』⏎ الاسم  ⎒ ❲  ${commandGroup.group.toUpperCase()} ❳ ⎒`);
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
