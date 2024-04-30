const axios = require("axios");
module.exports = {
    Caera: {
        name: "ستيكر",
        Aliases: ["ملسق", "ستيكرات"],
        version: "1.0.0",
        author: "عبدالرحمن محمد",
        Validity: 0,
        CDown: 0,
        description: "شراء ستيكرات من يوتا",
        Class: "ثريدز",
    },
    onUse: async ({ Message: message, event }) => {
        const msg = `🔥 |  مكتــبة الستيكرات 🏫📚

 ←› يرجى الرد على هذه الرسالة بكلمات البحث لاسم الستيكر  
 المراد البحث عنه . 

⌯︙يفضل استخدام الحروف الانجليزية .\n⌯︙ يمكنك البحث عن شخصيه انمي او انمي او يوتيوبرز يابانين\nسعر الاستيكر 90`;

        message.reply(msg, (err, info) => {
            global.Caera.onReply.set(info.messageID, {
                name: "ستيكر",
                messageID: info.messageID,
                author: event.senderID,
                type: "letsSearch"
            });
        });
    },
    onReply: async ({ onReply, Message: message, event, usersData }) => {
        const { type, result, author } = onReply;
         if( author != event.senderID ) return;
const messageBody = event.body.trim().toLowerCase();
        const body = parseInt(messageBody);
        
        if (type === "letsSearch") {
            const keywords = messageBody;
            message.react("🔎");
            try {
                const response = await axios.get(
                    `https://app-lines-986717226d96.herokuapp.com/line?ser=${encodeURIComponent(keywords)}`);
                const mangaData = response.data.data;
                const NumberOfSearch = mangaData.length;

                if (NumberOfSearch === 0) {
                    message.react("❌");
                    return message.reply(`❌︙لم يتم العثور على "${keywords}" ❌`);
                }

                let formattedMessage = `〄 تم العثور على ${NumberOfSearch} ستيكرات 🔎⤷\n\n`;

                mangaData.forEach((anime, index) => {
                    formattedMessage += `${index + 1}- اسم الاستيكر ←› ${anime.title} 🤍\n`;
                      });

                let please = `⌯︙قم بالرد برقم بين 1 و ${NumberOfSearch} 🧞‍♂`;
                if (NumberOfSearch === 1) {
                    please = "⌯︙ قم بالرد برقم واحد 1 .";
                }

                message.reply(
                    `
${formattedMessage}
${please}
`,
                    (err, info) => {
                        global.Caera.onReply.set(info.messageID, {
                            name: "ستيكر",
                            messageID: info.messageID,
                            resultMessageID: info.messageID,
                            author: event.senderID,
                            type: "animeResults",
                            result: mangaData,
                        });
                    }
                );
            } catch (error) {
                console.error("Error occurred while fetching anime data:", error);
                return message.reply(`❌︙لم يتم العثور على "${keywords}" ❌`);
            }
        }

        if (type === "animeResults") {
            try {
                if (isNaN(body) || body < 1 || body > result.length) {
                    return message.reply(`⌯︙قم بالرد برقم بين 1 و ${result.length} 🧞‍♂`);
                }
              let datas = await usersData.get(event.senderID);
              let money = datas.money;
              if (money < 90) { return message.reply("نقلع وجيب 90 وتعال") }
              await usersData.addMoney(event.senderID, -90);

                const index = body - 1;
                const playUrl = result[index].id;

                const response = await axios.get(
                    `https://app-iddown-1c256a7868f2.herokuapp.com/dline?id=${playUrl}`);
                const arr = response.data.data;
                
              
                
                let stream = [];
             for( ar of arr) {

               stream.push(await global.Mods.imgd(ar))
             }
              
              
              message.reply(
                    {
                        body: "⇣♡◄∘ تفضل ستيكراتك عزيزي ∘►♡⇡",
                        attachment: stream,
                    }
                );
            } catch (error) {
                console.error("Error occurred while fetching anime details:", error);
                return message.reply("❌︙حدث خطأ أثناء جلب تفاصيل الستيكر. الرجاء المحاولة مرة أخرى في وقت لاحق.");
            }
        }
        
    },
};
