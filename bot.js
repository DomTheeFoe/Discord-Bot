const botconfig = require("./auth.json");
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
    console.log(`${bot.user.username} "Is Online!"`);
});
bot.login(botconfig.token);

Client.on('message', (msg) => {
    if (msg.content === '$help') {
        msg.channel.send('Hello $(msg.author)!');
    }
});