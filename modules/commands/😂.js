module.exports.config = {
    name: "لا",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عبدالرحمن",
    description: "لعبة احزر ",
    usages: ["لعبة"],
    commandCategory: "العاب",
    cooldowns: 0
};

const questions = [

{ question: "هل تعرف اسم مطوري", answer: "عمر" },

];

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 20);
        api.sendMessage(`احسنت يا عزيزي ${userName} `, event.threadID);
        api.unsendMessage(handleReply.messageID); 
    } else {
        api.sendMessage(`'هاذا غير صحيح','وتفا ليست هوا'`, event.threadID);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;
    const question = randomQuestion.question;

    const message = `${question}`;

    api.sendMessage({ body: message }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};
