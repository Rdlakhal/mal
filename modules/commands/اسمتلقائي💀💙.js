const fs = require("fs"),
  path = __dirname + "/cache/autosetname.json";

module.exports.config = {
  name: "autosetname",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "NTKhang",
  description: "Auto change nickname of new member",
  commandCategory: "مسؤول",
  usages: "[set/view/on/off]",
  cooldowns: 5
};

module.exports.onLoad = () => {   
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
};

module.exports.handleEvent = async function ({ api, event, Threads, Users }) {
  const { threadID } = event;
  const data = JSON.parse(fs.readFileSync(path));
  const threadData = await Threads.getData(threadID);
  const config = data[threadID] || { status: false, configAutoSetName: '' };

  if (event.logMessageType === "log:subscribe" && config.status) {
    for (const user of event.logMessageData.addedParticipants) {
      const { userFbId: uid, fullName: userName } = user;
      const nickname = config.configAutoSetName.replace(/\{userName\}/gi, userName).replace(/\{userID\}/gi, uid);
      api.changeNickname(nickname, threadID, uid);
    }
  }
};

module.exports.run = async function ({ api, event, args, Threads }) {
  const { threadID } = event;
  let data = JSON.parse(fs.readFileSync(path));

  switch (args[0]) {
    case "set":
      if (args.length < 2) return api.sendMessage("Please provide a nickname format", threadID);
      const configAutoSetName = args.slice(1).join(" ");
      data[threadID] = { status: true, configAutoSetName };
      fs.writeFileSync(path, JSON.stringify(data, null, 2));
      return api.sendMessage("Configuration set successfully", threadID);
    case "view":
      const config = data[threadID] ? data[threadID].configAutoSetName : "Not configured";
      return api.sendMessage(`Current configuration: ${config}`, threadID);
    case "on":
    case "off":
      if (!data[threadID]) data[threadID] = { status: args[0] === "on", configAutoSetName: '' };
      else data[threadID].status = args[0] === "on";
      fs.writeFileSync(path, JSON.stringify(data, null, 2));
      return api.sendMessage(`Auto nickname feature has been turned ${args[0] === "on" ? "on" : "off"}`, threadID);
    default:
      return api.sendMessage("Invalid command. Use set/view/on/off", threadID);
  }
};
