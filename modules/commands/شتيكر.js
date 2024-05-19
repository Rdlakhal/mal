const axios = require("axios");

/*
يغاق وقف
ابييي اساعددد وااع
نجب وشاهد
*/


module.exports = {
    config: {
	name: "ستيكر",
	version: "1.2.2",
	hasPermssion: 0,
	credits: "ريووووووووووو",
	description: "ستيكرات تع مدري المهم جرب",
	commandCategory: "صور",
	usages: ".."
    },
    run: async ({ api, event }) => {
      
        const msg = `🔥 |  مكتــبة الستيكرات 🏫📚

 ←› يرجى الرد على هذه الرسالة بكلمات البحث لاسم الستيكر  
 المراد البحث عنه . 

⌯︙يفضل استخدام الحروف الانجليزية .\n⌯︙ يمكنك البحث عن شخصيه انمي او انمي او يوتيوبرز يابانين\nسعر الاستيكر 90`;

        api.sendMessage(msg, event.threadID , (err, info) => {
             global.client.handleReply.push({
                name: "ستيكر",
                messageID: info.messageID,
                author: event.senderID,
                type: "letsSearch"
            });
        });
    },
    handleReply: async ({ handleReply: onReply, api, event }) => {
        const { type, result, author } = onReply;
         if( author != event.senderID ) return;
const messageBody = event.body.trim().toLowerCase();
        const body = parseInt(messageBody);
        
        if (type === "letsSearch") {
            const keywords = messageBody;
            
            try {
                const response = await axios.get(
                    `https://app-lines-986717226d96.herokuapp.com/line?ser=${encodeURIComponent(keywords)}`);
                const mangaData = response.data.data;
                const NumberOfSearch = mangaData.length;

                if (NumberOfSearch === 0) {
                  
                    return  api.sendMessage(`❌︙لم يتم العثور على "${keywords}" ❌`, event.threadID);
                }

                let formattedMessage = `〄 تم العثور على ${NumberOfSearch} ستيكرات 🔎⤷\n\n`;

                mangaData.forEach((anime, index) => {
                    formattedMessage += `${index + 1}- اسم الاستيكر ←› ${anime.title} 🤍\n`;
                      });

                let please = `⌯︙قم بالرد برقم بين 1 و ${NumberOfSearch} 🧞‍♂`;
                if (NumberOfSearch === 1) {
                    please = "⌯︙ قم بالرد برقم واحد 1 .";
                }

                api.sendMessage(
                    `
${formattedMessage}
${please}
`, event.threadID,
                    (err, info) => {
                        global.client.handleReply.push({
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
                return api.sendMessage(`❌︙لم يتم العثور على "${keywords}" ❌`, event.threadID);
            }
        }

        if (type === "animeResults") {
            try {
                if (isNaN(body) || body < 1 || body > result.length) {
                    return api.sendMessage(`⌯︙قم بالرد برقم بين 1 و ${result.length} 🧞‍♂`, event.threadID);
                } //خلص عملتها
            

                const index = body - 1;
                const playUrl = result[index].id;

                const response = await axios.get(
                    `https://app-iddown-1c256a7868f2.herokuapp.com/dline?id=${playUrl}`);
                const arr = response.data.data;
                
              
                
                let stream = [];
             for( ar of arr) {
                const { data } = await axios.get(ar, { responseType: "stream" });
stream.push(data);

             }
              
              
              api.sendMessage(
                    {
                        body: "⇣♡◄∘ تفضل ستيكراتك عزيزي ∘►♡⇡",
                        attachment: stream,
                    } , event.threadID
                );
            } catch (error) {
                console.error("Error occurred while fetching anime details:", error);
                return api.sendMessage("❌︙حدث خطأ أثناء جلب تفاصيل الستيكر. الرجاء المحاولة مرة أخرى في وقت لاحق.", event.threadID);
            }
        }
        
    },
};
