const { MessageType } = require("@adiwajshing/baileys");

module.exports.config = {
  name: "غشم",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "DRIDI-RAYEN",
  description: "إنشاء غرفة دردشة جماعية مع أعضاء محددين",
  commandCategory: "المجموعات",
  usages: "[ردود الفعل/الأعضاء] [عدد الأعضاء]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, client, Users, Threads }) {
  try {
    const type = args[0];
    const count = parseInt(args[1]);

    if (!type || !count)
      return api.sendMessage(
        "يرجى تحديد نوع الغرفة (ردود الفعل/الأعضاء) وعدد الأعضاء.",
        event.threadID,
        event.messageID
      );

    if (count <= 0 || count > 100)
      return api.sendMessage(
        "الرجاء إدخال عدد صحيح بين 1 و100 للأعضاء.",
        event.threadID,
        event.messageID
      );

    const allMembers = await Threads.getAllParticipants(event.threadID);
    const members = [];

    switch (type) {
      case "ردود الفعل":
        for (let i = 0; i < count; i++) {
          const randomMember =
            allMembers[Math.floor(Math.random() * allMembers.length)];
          if (!members.includes(randomMember.id))
            members.push(randomMember.id);
        }
        break;
      case "الأعضاء":
        for (let i = 1; i < args.length; i++) {
          const memberID = await utils.parseMention(args[i]);
          if (!memberID || members.includes(memberID) || memberID === event.sender.id) continue;
          members.push(memberID);
        }
        break;
      default:
        return api.sendMessage(
          "الرجاء تحديد نوع الغرفة الصحيح (ردود الفعل/الأعضاء).",
          event.threadID,
          event.messageID
        );
    }

    if (members.length < count)
      return api.sendMessage(
        `لم يتم العثور على عدد كافٍ من الأعضاء المتاحين. تم العثور على ${members.length} فقط.`,
        event.threadID,
        event.messageID
      );

    const groupName = `غرفة ${type} ${count} أعضاء`;
    const groupDesc = `غرفة دردشة ${type} تم إنشاؤها بواسطة ${event.sender.id.replace(
          "@c.us",
          ""
        )}`;

    const newGroup = await Threads.createGroup(groupName, members, groupDesc);

    const button = {
      buttonText: "انضم إلى الغرفة",
      description: "انضم إلى غرفة الدردشة",
      sections: [
        {
          rows: [
            {
              title: "انضم إلى الغرفة",
              rowId: ".joinGroup",
            },
          ],
        },
      ],
    };

    const text = `تم إنشاء غرفة دردشة ${type} بنجاح!`;
    api.sendMessage(
      {
        text: text,
        mentions: members,
        messageStub: {
          ...button,
          ...{
            footer: "انقر للانضمام إلى الغرفة",
          },
        },
        buttons: [button],
        templateButtons: [button.sections],
      },
      event.threadID,
      event.messageID
    );
  } catch (err) {
    console.error(err);
    api.sendMessage(
      "حدث خطأ أثناء إنشاء غرفة الدردشة. يرجى المحاولة مرة أخرى لاحقًا.",
      event.threadID,
      event.messageID
    );
  }
};
