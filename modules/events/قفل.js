module.exports.config = {
 name: "قفل",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "scorpion",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "هل طردني شخص ما ?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`${name}  \n استطاع الهرب من المجموعة...! 😂🥂`, event.threadID)
   } else api.sendMessage(`${name} علاوي حبيب قلبي المجموعه في وضع القفـــــــــل..  ! 🫨🪽`, event.threadID);
  })
 }
}
