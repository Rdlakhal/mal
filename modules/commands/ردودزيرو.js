const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "المطور",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["تحتاج شيئا  ؟ ","اسمي فخمه صح" , "اتركني لست في مزاج جيد ","ابنت عمر 🥹🌹", "هل تريد ان تعترف لي بشيء 🤭" , "اشتقت لك 🥰" , "انا في خدمتك" , "باكا" , "هففف ماذا مجددا " ,"عمتك🖤💃", "جامبري جامبري" , "ميمو الكيوته فخدمتك" , " انا تحت امرك يا سيد" , "نعم يا شيخ" , " شبدك حب" , "ملل صح...! ✅🌳" , " نعم اسمعك...! 🪴" , "اهلا وسهلا من انت....! 🌱🍂" , " يبني انت متاكد انك صائم...! 🙂☘️","نعم يبعد عمري🤗😝","هيهيهي 🤗😝", "شبدك يحلو🤗😝","نعم يعسل 🤗😝", "يا هلا بلحلو😝🤗"," 🫢🤗", "😝🤗"," 🤗😝نعم يبعد البي", "تئبرني محلامك نعم❤️‍🔥👊","يوهو نعم 🎻"," بتحبني🥹😝", "يب 🤗🌹","يس 😽☺️", "بتحبني 😽☺️", "اره اره😮‍💨🫥","جيجي شبدك☺️😽", "كيفك🎉🤗","ماذا تريد مني🌰🙊"," انا رح غير اسمي 🦆👊", "شوبدك قرفتني 😮‍💨🧘‍♀️"," جاتك القرف💔🎊", "ماذا هناك...! 🪄💍","فلتمت يا مزعج 😝🌹","الله يقرفك شو مزعج🎻😪"," ها؟ 🧐","انا ختفيت انا ختفيت؟ 🤗🫥","😮‍💨👊","ماعاد اعرف انام بسببك 🎉❤️‍🔥","مح 😝🤗","بحبك ❤🫢","مكنتش عارفه ايش هعمل بدونك 🤗😝","نعم يبعد عمري ❤🫢","ماذا تريد يا ايها البشري المتواضق...! 🤔✨","كيف يممكني مساعدة شخص مثلك.. 🙂😏","ماذا تريد يا ايها العبد.. 🌚✨","كف عن نطق اسمي ولايلا جلتك...! 🗿🐥","كيف يتجرء بشري مثلك نطق اسمي..! 🗿🥂","لن تتعبو من مناداتي ؟ 😠👊🏻"];  var rand = tl[Math.floor(Math.random() * tl.length)]
  if ((event.body.toLowerCase() == "🐦⬛") || (event.body.toLowerCase() =="غراب")) {
     return api.sendMessage("ايتاتشي اوتشيها 😔💔", threadID)
   };
  if ((event.body.toLowerCase() == "تجربة") || (event.body.toLowerCase() == "ريان")) {
     return api.sendMessage("ناجحه...! 🦎", threadID)
   };
  if ((event.body.toLowerCase() == "وليد") || (event.body.toLowerCase() == "متحرش")) {
     return api.sendMessage("اكثر البشر تحرشن على وجه الارض تقول الاسطورة انه تحرش بجميع المطورين حتى شادي 😈🥶", threadID)
   };
if ((event.body.toLowerCase() == "😔💔") || (event.body.toLowerCase() == "💔😔")) {
     return api.sendMessage("يولدي شبيك 🐢❤🦆", threadID)
   };
if ((event.body.toLowerCase() == "تعي خاص") || (event.body.toLowerCase() == "تعالي خاص")) {
     return api.sendMessage("خووووووووف/🐏تمسااااااااح🐊", threadID)
   };
if ((event.body.toLowerCase() == "بوت معطوب") || (event.body.toLowerCase() == "بوت زبالة")) {
     return api.sendMessage("ماتشبهني بي عائلتك 🤯🫰", threadID)
   };
if ((event.body.toLowerCase() == "لا تسب") || (event.body.toLowerCase() == "ممنوع السب")) {
     return api.sendMessage("اتفق و بشده♡•-•", threadID)
   };
if ((event.body.toLowerCase() == "ممنوع الكلام") || (event.body.toLowerCase() == "كلام ممنوع")) {
     return api.sendMessage("قد اتكلم بلخطأ فارجو ان تعذرني لاني بوت.. 😊❤️‍🩹", threadID)
   };
if ((event.body.toLowerCase() == "من المطور") || (event.body.toLowerCase() == "مين عمر")) {
     return api.sendMessage("عمر حبيبي رابط حسابه \n m.me/100094409873389", threadID)
   };
if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلامليكم")) {
     return api.sendMessage("وعليكم السلام ورحمه الله و بركاته...! 🦆❤", threadID)
   };
if ((event.body.toLowerCase() == "نورتي") || (event.body.toLowerCase() == "منور")) {
     return api.sendMessage("بنوري....! 🐢", threadID)
   };
if ((event.body.toLowerCase() == "تحب البط") || (event.body.toLowerCase() == "ليش تحبي البط")) {
     return api.sendMessage("رئيت عمر يستعمله ف استعملته...! 🐢🫰", threadID)
   };
if ((event.body.toLowerCase() == "يوتا كمان تحب البط") || (event.body.toLowerCase() == "يوتا تحب البط")) {
    return api.sendMessage("بحبه بسبب عمر حبيبي..! 🦆❤", threadID)
   };
if ((event.body.toLowerCase() == "انت صنعته") || (event.body.toLowerCase() == "انت صاحب البوت")) {
     return api.sendMessage("اجل الفتى المتكبر هوا بابي...! 🦆❤", threadID)
   };
if ((event.body.toLowerCase() == "🦆💔") || (event.body.toLowerCase() == "🦆❤")) {
     return api.sendMessage("ذكرتني بحبيبي عمر هوا كمان يحب البط...! 🦆✅", threadID)
   };
if ((event.body.toLowerCase() == "قحبة") || (event.body.toLowerCase() == "يا قحبة")) {
     return api.sendMessage("محدش سئلك على اسم امك..! 🚮", threadID)
   };
  if ((event.body.toLowerCase() == "ايهاب") || (event.body.toLowerCase() =="عبدالمالك"&& event.senderID == "100094409873389")) {
     return api.sendMessage("واحد واطي 😡🔪", threadID);
   };
  if ((event.body.toLowerCase() == "لما") || (event.body.toLowerCase() =="لماذا" )) {
     return api.sendMessage("ما ندري", threadID);
   };
  if ((event.body.toLowerCase() == "ليبيا") || (event.body.toLowerCase() =="ليبي" && event.senderID == "100094409873389")) {
    return api.sendMessage("اهل العز و الفخامة يرب احفضهم 🖤😩🎧", threadID);
   };
  if ((event.body.toLowerCase() == "هل تعلم انهو هناك الف مجرة في هاذا الكون") || (event.body.toLowerCase() == "هل تعلم انهو هناك الف مجرة في هاذا الكون")) {
     return api.sendMessage("و في مجرة درب التبانه هناك مليارات الكواكب", threadID);
   };
  if ((event.body.toLowerCase() == "و في مجرة درب التبانه هناك مليارات الكواكب") || (event.body.toLowerCase() == "و في مجرة درب التبانه هناك مليارات الكواكب")) {
     return api.sendMessage("و منبين الكولاكب هناك كوكب صغير جدة جدة", threadID);
   };
  if ((event.body.toLowerCase() == "من انت؟") || (event.body.toLowerCase() =="من انت" )) {
     return api.sendMessage("اكيد حتت بشري حقير زليل عويل معفن ملوش فايدة....! 😂❇️", threadID);
   };
  if ((event.body.toLowerCase() == "شادي") || (event.body.toLowerCase() =="احمد" && event.senderID == "100094409873389")) {
     return api.sendMessage("جربوع", threadID);
   };
if ((event.body.toLowerCase() == "مش متحمم من اسبوع") || (event.body.toLowerCase() =="مو متحمم من اسبوع" && event.senderID == "100094409873389")) {
     return api.sendMessage("الشانبو عندو دايمن مقطوع", threadID);
   };
if ((event.body.toLowerCase() == "اجرب") || (event.body.toLowerCase() =="اجرب" && event.senderID == "100094409873389")) {
     return api.sendMessage("اوووو💃✨", threadID);
   };
if ((event.body.toLowerCase() == "مابيتحمم ايلا بي العيد") || (event.body.toLowerCase() =="مابتحمم ايلا بلعيد" && event.senderID == "100094409873389")) {
     return api.sendMessage("بتشم ريحتو حتا لو كان بعيد💃✨", threadID);
   };
if ((event.body.toLowerCase() == "ريحتو قويا بدها بندول") || (event.body.toLowerCase() =="ريحتو قويا بدها بندول" && event.senderID == "100094409873389")) {
     return api.sendMessage("جرثيم مابيقضي عليها ديتول💃✨", threadID);
   };
if ((event.body.toLowerCase() == "بحبكي") || (event.body.toLowerCase() =="بحبك" && event.senderID == "100094409873389")) {
     return api.sendMessage("وانا اموت فيك يا حبي", threadID);
   };
  if ((event.body.toLowerCase() == "🦧") || (event.body.toLowerCase() == "🦍")) {
     return api.sendMessage("واو هناك غوريلى مفقسة في نص الجروب", threadID);
   };
  if ((event.body.toLowerCase() == "كرنج") || (event.body.toLowerCase() == "كرنجي")) {
     return api.sendMessage("هاذا تجاوز مرحله الكرنج صار صبار 🌵.. 😂", threadID);
   };
  if ((event.body.toLowerCase() == "معك حق") || (event.body.toLowerCase() == "اتفق")) {
     return api.sendMessage("+1", threadID);
   };

  if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("قلبك مكسور ليش هوا كزازا...!😂", threadID);
   };

  if ((event.body.toLowerCase() == "استغفرالله ") || (event.body.toLowerCase() == "استغفر الله ")) {
     return api.sendMessage("استغفراللهالعظيم ...! 🙎‍♀️🍃", threadID);
   };
 if ((event.body.toLowerCase() == "بطبع") || (event.body.toLowerCase() == "يس")) {    return api.sendMessage("متاكد؟", threadID);
   };
  
  if ((event.body.toLowerCase() == "شرح زينبو") || (event.body.toLowerCase() == "ماهوا الزينبو")) {
     return api.sendMessage("الزينبو هو عضو التناسل الذكري لدى الإنسان والحيوانات. يتكون القضيب من نسيج مشبك يحتوي على أنسجة عضلية وأنسجة ضامة وأنسجة تجلط الدم. وظيفة القضيب الأساسية هي إدخال السائل المنوي إلى جسم الأنثى أثناء الجماع، وهي وظيفة تساهم في عملية التكاثر. يتغير حجم وشكل القضيب بين الأفراد ويمكن أن يتأثر بعوامل مثل الهرمونات والصحة العامة للشخص. يجب الإشارة إلى أن الحديث عن القضيب يتعلق بالموضوعات الجنسية والتشريعات المحلية، ولذلك يجب أن يتم التعبير عنها بطريقة محترمة ومناسبة.🤓🤓🤓", threadID);
   };

  if ((event.body.toLowerCase() == "تم تجاهلي بنجاح") || (event.body.toLowerCase() == "تم تجاهلي")) {
     return api.sendMessage("لا تحزن يا صديقي هاكذا هم الكلاب تركض خلف مصلحتها فقط🤧🤘يسلام عليا🌞صرت فنانا", threadID);
   };
  if ((event.body.toLowerCase() == "وينكم") || (event.body.toLowerCase() == "اين الجميع")) {
     return api.sendMessage("ملاك يوتا موجود و نوري يطفي نور الكل😐🤘", threadID);
   };
  if ((event.body.toLowerCase() == "ملاك الخداع") || (event.body.toLowerCase() == "انت بوت؟ ")) {
     return api.sendMessage("نعم معك ملاك الخداع بوت💪😎", threadID);
   };
  
  if ((event.body.toLowerCase() == "عبيدة") || (event.body.toLowerCase() == "@دﻣٰۧشٖ۫قٰيٖ ۦٰ۪ۦۧۦٰ۪٭۬ﮧ۬")) {
     return api.sendMessage("عمك..! 🍃", threadID);
   };
  
  if ((event.body.toLowerCase() == "تتكلم مع بوت") || (event.body.toLowerCase() == "هاذا بوت")) {
     return api.sendMessage(" فضحتني الله  يفضحك كنت استمتع😹😹🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "كيف الحال") || (event.body.toLowerCase() == "لباس عليك")) {
     return api.sendMessage("في نعما الحمد لله وانت", threadID);
   };
  
    if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💗")) {
     return api.sendMessage("هل انا حبيبك لترسل لي هذا ؟", threadID);
   };

  if ((event.body.toLowerCase() == "@شامخ عليكم بقوه") || (event.body.toLowerCase() == "يا شامخ")) {
     return api.sendMessage("سيدك وتاج راسك👑💪😎", threadID);
   };
    if ((event.body.toLowerCase() == "اوامر") || (event.body.toLowerCase() == "اكتب قائمة")) {
    return api.sendMessage("قائمة", threadID);
   };
  
  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("انت تعرف اين يضع الناس لايك", threadID);
   };

  if ((event.body.toLowerCase() == "اطرد البوت") || (event.body.toLowerCase() == "اطرد ملاك")) {
     return api.sendMessage("اطردوني مابدي ابقا حسا نفسي في زريبه🙂 تماسيح🐊 و خنازيد🐖 و بطاريق🐧 و كلاب🦮 و دجاج🐓 و خواريف🐑", threadID);
   };
  
  if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("استغفر الله...! 🧐💢", threadID);
   };
  
   if ((event.body.toLowerCase() == "اكرهك") || (event.body.toLowerCase() == "لا احبك")) {
     return api.sendMessage("اوكي اكرهني يا احمق", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "tnx") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "i'm")) {
     return api.sendMessage("دوي بالعربية المعياق(ة) ", threadID);
   };

   if ((event.body.toLowerCase() == "كسمك") || (event.body.toLowerCase() == "نكمك")) {
     return api.sendMessage("شوفو في كلب عم ينبح🤣💔", threadID);
   };

   if ((event.body.toLowerCase() == "استغفرالله ") || (event.body.toLowerCase() == "استغفر الله")) {
     return api.sendMessage("استغفر الله العظيم...! 🖤🦅", threadID);
   };

   if ((event.body.toLowerCase() == "صباحو") || (event.body.toLowerCase() == "صباح الخير")) {
     return api.sendMessage("صباح النور عزيزي لتحضى بيوم جيد ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "تصبحون على خير") || (event.body.toLowerCase() == "ليلة سعيدة")) {
     return api.sendMessage("ليلة سعيدة لك ايضا عزيزي ❤️", threadID);
   };
if ((event.body.toLowerCase() == "ليبيا") || (event.body.toLowerCase() == "eg") || (event.body.toLowerCase() == "ليبيه") || (event.body.toLowerCase() == "ليبي")) {
     return api.sendMessage("احسن و احلا و افضل و افخم  ناس", threadID);
  }; 
  if ((event.body.toLowerCase() == "ملاك مطور") || (event.body.toLowerCase() == "ملاك المطور") || (event.body.toLowerCase() == "المطور") || (event.body.toLowerCase() == ".المطور")) {
     return api.sendMessage( "لَلَتٌـوٌأّصّـلَ مًعٌ أّلَمًطِوٌر\n\nوٌتٌـسِـأّبً\n  ↳ ✦ 『+218920832706』 ✦ ↲\n\nمًسِـنِجّـر\n ↳ ✦ 『m.me/100094409873389』 ✦ ↲\n\nتٌـلَغُرأّمً\n ↳ ✦ 『t.me/MTKBR1』 ✦ ↲ فُـيِّسِـبًوٌکْ\n ↳ ✦ 『https://www.facebook.com/arrogant3j?mibextid=ZbWKwL』 ✦ ↲\n\nواحب اقلك من الان لم يرد عليك 😁🩵",threadID);
   };

   if ((event.body.toLowerCase() == "طار") || (event.body.toLowerCase() == "الحساب طار")) {
     return api.sendMessage("‎ليه هوا طيارة؟ ", threadID);
   };
  if ((event.body.toLowerCase() == "@ンの人 コーラ") || (event.body.toLowerCase() == "ملاكي")) {
     return api.sendMessage("شبيك لبيك ملاك الوحده بين يديك", threadID);
   };

  if ((event.body.toLowerCase() == "بوووم") || (event.body.toLowerCase() == "الجبها طارت")) {
     return api.sendMessage(" كسر الخواطر 👍🏻عجن الخواطر 👍🏻طحن الخواطر 👍🏻 تسطير الخواطر 👍🏻تفليش الخواطر 👍🏻هرس الخواطر 👍🏻فعص الخواطر 👍🏻فرم الخواطر 👍🏻خبز الخواطر 👍🏻سلق الخواطر 👍🏻حرق الخواطر 👍🏻دعس الخواطر 👍🏻تكديس الخواطر 👍🏻صلخ الخواطر 👍🏻تشليع الخواطر 👍🏻تمليخ الخواطر 👍🏻ضرب الخواطر 👍🏻فشخ الخواطر 👍🏻تفتيت الخواطر 👍🏻تحطيم الخواطر 👍🏻بعص الخواطر 👍🏻عصر الخواطر 👍🏻زرف الخواطر 👍🏻ذبح الخواطر 👍🏻بصق الخواطر 👍🏻تقطيع الخواطر 👍🏻تفجير الخواطر 👍🏻قتل الخواطر 👍🏻أكل الخواطر 👍🏻دهس الخواطر 👍🏻بلع الخواطر👍🏻تدمير الخواطر 👍🏻شنق الخواطر 👍🏻خنق الخواطر 👍🏻لعن الخواطر 👍🏻طعن الخواطر 👍🏻هدم الخواطر 👍🏻قص الخواطر 👍🏻شق الخواطر 👍🏻تعذيب الخواطر 👍🏻تخويف الخواطر 👍🏻إحزان الخواطر 👍🏻ضرب الخواطر بالحزام 👍🏻سحق الخواطر 👍🏻استأصال الخواطر 👍🏻قلع الخواطر 👍🏻نعل الخواطر 👍🏻جعص الخواطر 👍🏻فرش الخواطر 👍🏻قضم الخواطر 👍🏻صعق الخواطر 👍🏻أستهزاء الخواطر 👍🏻رفس الخواطر 👍🏻اعدام الخواطر 👍🏻قطع الخواطر👍🏻تفحيط الخواطر 👍🏻دفن الخواطر 👍🏻", threadID);
  };

   if ((event.body.toLowerCase() == "اسكت") || (event.body.toLowerCase() == "توقف")) {
     return api.sendMessage("كيف تقدر تسكت بنت كيوت مثلي... 🥹😚", threadID);
   };

   if ((event.body.toLowerCase() == "مارسي") || (event.body.toLowerCase() == "ملوكة")) {
     return api.sendMessage("انا مارسلين ملكة مصاصين الدماء و بنت شامخ", threadID);
   };

   if ((event.body.toLowerCase() == "قحبه") || (event.body.toLowerCase() == "بوت قحبه") || (event.body.toLowerCase() == "يا قحبه") || (event.body.toLowerCase() == "القحبه")) {
     return api.sendMessage("عيب تنادي اسم امك 😅", threadID);
   };
   if ((event.body.toLowerCase() == "ليبيا") || (event.body.toLowerCase() == "eg") || (event.body.toLowerCase() == "ليبيه") || (event.body.toLowerCase() == "ليبي")) {
     return api.sendMessage("احسن و احلا و افضل و افخم  ناس", threadID);
   };

   if ((event.body.toLowerCase() == "احح") || (event.body.toLowerCase() == "ااااااح") || (event.body.toLowerCase() == "اححححح") || (event.body.toLowerCase() == "اح")) {
     return api.sendMessage("منحرف اهربووووووووو", threadID);
   };

   if ((event.body.toLowerCase() == "مح") || (event.body.toLowerCase() == "بوسيني")) {
     return api.sendMessage("️مح على شامخ وحدو", threadID);
   };

   if ((event.body.toLowerCase() == "جيد") || (event.body.toLowerCase() == "شكرا") || (event.body.toLowerCase() == "شكرا لك") || (event.body.toLowerCase() == "شكرا لك ")) {
     return api.sendMessage("️انا في الخدمة فقط اطلب عزيزي.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 لماذا انت غاضب انا هنا كي افرج عنك😘", threadID);
   };
if ((event.body.toLowerCase() == "لونا الافضل ") || (event.body.toLowerCase() == "لونا بوت") ||(event.body.toLowerCase() == "بوت لونا") || (event.body.toLowerCase() == "لونا")) {
     return api.sendMessage(" انا عمتها...! 🪴💮", threadID);
   };
  if ((event.body.toLowerCase() == "هممم") || (event.body.toLowerCase() == "امممم") ||(event.body.toLowerCase() == "لا اعلم") || (event.body.toLowerCase() == "مادري")) {
     return api.sendMessage("تي متستعبطش عليا احكي احسنلك.. 😡🕷", threadID);
   };
   if ((event.body.toLowerCase() == "تبا") || (event.body.toLowerCase() == "اسكت احسن لك") || (event.body.toLowerCase() == "🙂 💢")) {
     return api.sendMessage("احا حبي عصب انفدو بريشكم🐧😱.", threadID);
   }; 

   if ((event.body.toLowerCase() == "الصور") || (event.body.toLowerCase() == ".صور")) {
     return api.sendMessage("️اذهب لغوغل يا ابني", threadID);
   };

   if ((event.body.toLowerCase() == "يااحمد يامحسن") || (event.body.toLowerCase() == "احمد محسن")) {
     return api.sendMessage("بيو بيو ببيو بيو بيو بيو بيو🐢💃", threadID);
   };
if ((event.body.toLowerCase() == "نعم") || (event.body.toLowerCase() == "اجل")) {
     return api.sendMessage("️نعامه تخبطك...! 😑😾", threadID);
   };

   if ((event.body.toLowerCase() == "ملاك بحبك") || (event.body.toLowerCase() == "ملاك نتزوج")) {
     return api.sendMessage("️يحبك برص.. 🤨😾", threadID);
   };

   if ((event.body.toLowerCase() == "لا احد يحبني") || (event.body.toLowerCase() == "انا حزين") || (event.body.toLowerCase() == "انا سنجل")) {
     return api.sendMessage("️ولكنني احبك☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦‍♀️")) {
     return api.sendMessage("🤦‍♀️", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("الله يدوم الضحكة الحلوه يبعد روحي..!😚😋", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("هل انت مغرم بي?🥰", threadID);
   };
   if ((event.body.toLowerCase() == "كيف حالك")) {
     return api.sendMessage("بخير اتمنى ان تكون كذلك ايضا ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "يوتا حزينة") || (event.body.toLowerCase() == "هل انتي حزينة")) {
     return api.sendMessage( "ولما اكون حزينة والكل يحبني", threadID);
   };

   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("عليكم السلام", threadID);
   };

   if ((event.body.toLowerCase() == "هلا") || (event.body.toLowerCase() == "السلام عليكم")) {
     return api.sendMessage("اهلين بلقمر .. 😏🌚", threadID);
   };

   if ((event.body.toLowerCase() == "وتفك") || (event.body.toLowerCase() == "وات")) {
     return api.sendMessage("نعم وات فاك مان", threadID);
   }; 
   if ((event.body.toLowerCase() == "هل تحبني ؟") || (event.body.toLowerCase() == "هل ملاك ؟")) {
     return api.sendMessage("لا...! ", threadID);
   };
   if ((event.body.toLowerCase() == "راح") || (event.body.toLowerCase() == "مات")) {
     return api.sendMessage("من قال ذلك ?", threadID);
   };
  
  if (event.body.indexOf("ملاك") == 0 || (event.body.indexOf("ببيبي") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
