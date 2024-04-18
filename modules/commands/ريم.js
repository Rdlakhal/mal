import axios from "axios";
import fs from "fs";
import path from "path";

async function translate(text, sourceLang, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
    text
  )}`;
  const res = await axios.get(url);
  const translation = res.data[0].map((item) => item[0]).join("");
  return translation;
}

export const config = {
  name: "ارسم",
  version: "0.0.1",
  credits: "S H A D Y",
  description: "",
};

export async function onCall({ message }) {
  message.react("⚙️");

  if (!message || !message.body) {
    console.error("اكتب شيئا", message);
    return;
  }

  const args = message.body.split(" ");
  const imagePath = path.join(global.assetsPath, "image.jpg");
  try {
    const translatedText = await translate(args.slice(1).join(" "), "ar", "en");

    const { data: imageStream } = await axios({
      url: `https://imagine.shady-api-pack.repl.co/draw/?model=3&apiKey=Ayakey&query=${encodeURIComponent(
        translatedText
      )}`,
      method: "GET",
      responseType: "stream",
    });

    const writer = fs.createWriteStream(imagePath);
    await new Promise((resolve, reject) => {
      imageStream.pipe(writer);
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    message.reply({
      attachment: [fs.createReadStream(imagePath)],
    });
    message.react("✅");
  } catch (error) {
    message.reply("حدث خطاء ما");
  }
      }
