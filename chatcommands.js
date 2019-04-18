import { Client, Message } from "discord.js";

Client.on('message', (msg) => {
    if (msg.content === '$help') {
        msg.channel.send('Hello $(msg.author)!');
    }
});