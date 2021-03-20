require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot successfully updated and deployed online!');
})

client.on('message', msg => {
    if (msg.content === 'hello') {
      msg.reply('hello!');
    }

    if (msg.content === 'react me') {
        msg.react('😁');
    }
});

client.login(process.env.BOT_TOKEN);