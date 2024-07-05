module.exports.config = {
  name: "ملاك",
  version: "1.0.0",
  hasPermision: 2,
  credits: "عمر",
  description: "يرسل لك نكتة عشوائية",
  usage: "نكته",
  commandCategory: "ترفية",
  cooldowns: 0,
};

module.exports.run = async function ({ api, event }) {
  const jokes = [
    "نعم باتي",
    "عيونها"
  ];

  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  api.sendMessage(joke, event.threadID, event.messageID);
};
