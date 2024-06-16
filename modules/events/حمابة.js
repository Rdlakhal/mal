const { create, Client } = require('mirai');
const fs = require('fs-extra');

// إعداد الاتصال بـ mirai
const client = new Client();
create({
    authKey: 'YOUR_AUTH_KEY',
    qq: YOUR_QQ_NUMBER,
    host: 'http://localhost:8080' // أو عنوان المضيف الخاص بك
}).then(c => client.listen(c));

// تحميل وحفظ الكنيات الأصلية
const nicknamesFilePath = './nicknames.json';
let nicknames = {};
let protectionEnabled = true;

// تحميل الكنيات من الملف
function loadNicknames() {
    if (fs.existsSync(nicknamesFilePath)) {
        nicknames = fs.readJSONSync(nicknamesFilePath);
    }
}

// حفظ الكنيات إلى الملف
function saveNicknames() {
    fs.writeJSONSync(nicknamesFilePath, nicknames, { spaces: 2 });
}

// استرجاع الكنية الأصلية
function getOriginalNickname(userId) {
    return nicknames[userId];
}

// تعيين الكنية الأصلية
function setOriginalNickname(userId, nickname) {
    nicknames[userId] = nickname;
    saveNicknames();
}

// تمكين/تعطيل حماية الكنية
function toggleProtection(enable) {
    protectionEnabled = enable;
    console.log(`Nickname protection ${enable ? 'enabled' : 'disabled'}`);
}

// تحميل الكنيات عند بدء التشغيل
loadNicknames();

// حدث تغيير الكنية
client.on('MemberCardChangeEvent', async event => {
    if (!protectionEnabled) return;

    const userId = event.member.id;
    const newNickname = event.new;
    const originalNickname = getOriginalNickname(userId);

    // إذا لم يكن هناك كنية أصلية مخزنة، قم بتخزين الكنية الجديدة كأصلية
    if (!originalNickname) {
        setOriginalNickname(userId, newNickname);
    } else if (newNickname !== originalNickname) {
        // إعادة تعيين الكنية إلى الكنية الأصلية
        await client.setGroupMemberCard(event.group.id, userId, originalNickname);
        console.log(`Restored nickname for user ${userId} to ${originalNickname}`);
    }
});

// أوامر لتشغيل/إيقاف حماية الكنية
client.on('message.group', async message => {
    const [command, ...args] = message.raw_message.split(' ');

    if (command === 'kan') {
        if (args[0] === 'on') {
            toggleProtection(true);
            await client.sendGroupMsg(message.group.id, 'Nickname protection enabled');
        } else if (args[0] === 'off') {
            toggleProtection(false);
            await client.sendGroupMsg(message.group.id, 'Nickname protection disabled');
        } else {
            await client.sendGroupMsg(message.group.id, 'Usage: kan [on|off]');
        }
    }
});
