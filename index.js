const botconfig = require("./botconfig.json");
const chatcommands = require("./chatcommands.js");
const musiccommands = require("./musiccommands.js");
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
    console.log(`${bot.user.username} "Is Online!"`);
});
bot.login(botconfig.token);