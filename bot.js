require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Hello there!');
})

client.on('message', msg => {
    if (msg.content === 'hello') {
      msg.channel.send('not tagging you hehe')
    }
});

client.login(process.env.BOT_TOKEN);