module.exports.config = {
  name: "ملاك",
  version: "1.0.0",
  hasPermision: 2,
  credits: "uomar",
  description: "ميخصكش",
  usage: "نكته",
  commandCategory: "المطور",
  cooldowns: 0,
};

module.exports.run = async function ({ api, event }) {
  const jokes = ["نعم ياسيدي"];

  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  api.sendMessage(joke, event.threadID, event.messageID);
};
