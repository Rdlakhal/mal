const axios = require("axios");
const fs = require("fs-extra");
const ytdl = require("ytdl-core");
const yts = require("yt-search");

module.exports.config = {
  name: "اغاني",
  version: "2.0.5",
  hasPermssion: 0,
  credits: "جلجامش ساما",
  usePrefix: false,
  description: "قم بتشغيل الأغنية التي تحبها",
  commandCategory: "ترفيه",
  usages: "[إسم الأغنية]",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "axios": "",
    "ytdl-core": "",
    "yt-search": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage("أّعٌتٌـذر لَأّيِّوٌجّـدٍ أّغُنِيِّةّ بًلَأّ أّسِـمً أّدٍخِـلَ أّسِـمًهّـأّ", event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    api.sendMessage(`حًسِـنِأّ『${song}』أّذنِ`, event.threadID);

    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      return api.sendMessage("خطأ: الطلب غير صالح.", event.threadID, event.messageID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: "audioonly" });

    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', () => {
      console.info('[DOWNLOADER]', 'Starting download now!');
    });

    stream.on('info', (info) => {
      console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
    });

    stream.on('end', () => {
      console.info('[DOWNLOADER] Downloaded');

      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('[💀] حًجّـمً أّلَفُـيِّدٍيِّوٌ أّکْبًر مًنِ قُدٍرتٌـيِّ.', event.threadID);
      }

      const message = {
        body: `✅︙لَقُدٍ نِجّـحًتٌـ أّلَعٌمًلَيِّةّ\n📝︙أّلَأّرشُـأّدٍ ${video.title}\n🎶︙أّلَمًغُنِيِّ ${video.author.name}`,
        attachment: fs.createReadStream(filePath)
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });

    stream.on('error', (error) => {
      console.error('[ERROR]', error);
      fs.unlinkSync(filePath);
      api.sendMessage('أّعٌتٌـذر، حدث خطأ أثناء تحميل الأغنية.', event.threadID);
    });
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('أّعٌتٌـذر، لا أستطيع جلب الأغنية المطلوبة.', event.threadID);
  }
};
