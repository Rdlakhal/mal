let url = "https://ai-tools.replit.app";
const {get} = require('axios');
const fs = require('fs');

let f = __dirname + '/cache/pixart.png';

module.exports.config = {
    name: "درو",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Deku",/*modified ǺᎩᎧᏬᏰ*/
    description: ".",
    commandCategory: "خدمات",
    usages: "[prompt | style]",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    function r(msg) {
        api.sendMessage(msg, event.threadID, event.messageID);
    }

    let g = `•——[Style list]——•\n\n1. سينمائية
    2. التصوير الفوتوغرافي
    3. انمي
    4. مانجا
    5. الفن الرقمي
    6. فن البكسل
    7. فن الخيال
    8. النيون فاسق
    9. نموذج 3D`;

    if (!args[0]) return r('مفقود موجه والأسلوب\n\n' + g);

    const a = args.join(" ").split("|").map((item) => (item = item.trim()));
    let ayoub = a[0], c = a[1];
    if (!ayoub) return r('موجه مفقود!');
    if (!c) return r('أسلوب مفقود!\n\n' + g);

    const translateURL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(ayoub)}`;

    try {
        const translationResponse = await get(translateURL);
        const translatedText = translationResponse.data[0][0][0];

        const d = (await get(url + '/pixart?prompt=' + translatedText + '&styles=' + c, {
            responseType: 'arraybuffer'
        })).data;
        fs.writeFileSync(f, Buffer.from(d, "binary"));
        return r({ attachment: fs.createReadStream(f, () => fs.unlinkSync(f)) });
    } catch (e) {
        return r(e.message)
    }
}
