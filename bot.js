const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590247145030811699")
setInterval(function() {
channel.send(`خلاص ازعجتونا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
