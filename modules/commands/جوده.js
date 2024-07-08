const fs = require('fs');
const axios = require("axios");
const sizeOf = require('image-size');
const FormData = require('form-data');
const path = require('path');
module.exports.config = {
 name: "جوده",
 version: "1.0.0",
 credits: "Takt Asahina",
 hasPermssion: 1,
 description: "رفع الجودة",
 usages: "",
 commandCategory: "صور",
 cooldowns: 8
};

module.exports.run = async({ api, event }) => {

 

if (event.type !== "message_reply" || !["photo", "sticker"].includes(event.messageReply.attachments[0].type)) {
  return api.sendMessage("رد على صورة يا غبي....! 🍃😹", event.threadID);
}
 


const imageUrl = encodeURIComponent(event.messageReply.attachments[0].url);

try {
function grn(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ggr = grn(1000000, 999292220822);
const apiUrl = 'https://api.upscalepics.com/upscale-to-size';
const imageUrl = event.messageReply.attachments[0].url

let ress = await axios.get(imageUrl, { responseType: 'arraybuffer' })
  
    const buffer = Buffer.from(ress.data);

    const dimensions = sizeOf(buffer);

    const formData = new FormData();
    formData.append('image_file', buffer, {
      filename: 'image.jpg',
      contentType: 'image/jpg',
    });
    formData.append('name', ggr);
    formData.append('desiredHeight', dimensions.height*4);
    formData.append('desiredWidth', dimensions.width*4);
    formData.append('outputFormat', 'png');
    formData.append('compressionLevel', 'None');
    formData.append('anime', 'False');

   const res = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        'Origin': 'https://upscalepics.com',
        'Referer': 'https://upscalepics.com/',
        'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Timezone': 'Africa/Cairo',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
    })
      
        


const resss = await axios.get(res.data.bgRemoved, {responseType:"stream"});


const impath =__dirname + "/cache/ccuy.png";
const writer = fs.createWriteStream(impath);
resss.data.pipe(writer);
writer.on("finish", () => {
api.sendMessage({
 body: "⚜️= 「 تفضل 」=⚜️",
 attachment : fs.createReadStream(impath)
              }, event.threadID, event.messageID )})



}
