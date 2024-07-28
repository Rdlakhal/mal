module.exports.handleEvent = async ({ event, api})  => {
if (["ختك","مك"].includes(event.body)) {
return api.removeUserFromGroup(event.senderID, event.threadID);
}
};
