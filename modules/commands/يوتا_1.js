const axios = require('axios');

// دالة للتواصل مع الشات بوت
async function chat(messages) {
  try {
    const res = await axios.post('https://chatbot-ji1z.onrender.com/chatbot-ji1z', { messages });
    return res.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error('Chatbot communication failed');
  }
}

// الكائن الذي يحتوي على وظائف البوت
const bot = {
  config: {
    name: "سوسن",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Takt Asahina",
    description: "العاب",
    commandCategory: "العاب",
    usages: "",
    cooldowns: 5,
  },

  // دالة لتشغيل البوت والتفاعل مع الرسائل
  run: async function({ event, api, args }) {
    const message = args.join(" ");
    if (!message) return this.sendMessage('اطرح سؤال... 😃🔥', event, api);

    let response = await chat([{ role: "user", content: message }]);

    return this.sendMessage(response, event, api);
  },

  // دالة لإرسال الرسائل
  sendMessage: async function(content, event, api) {
    await api.sendMessage(content, event.threadID, (error, info) => {
      if (error) {
        console.error('Failed to send message:', error);
        return;
      }
      global.client.handleReply.push(info.messageID, {
        name: this.config.name,
        author: event.senderID,
        messageID: info.messageID
      });
    });
  },

  // دالة للتعامل مع الردود
  handleReply: async function({ api, event }) {
    let response = await chat([{ role: "user", content: event.body }]);
    return this.sendMessage(response, event, api);
  },
};

module.exports = bot;
