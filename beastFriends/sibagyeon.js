const Discord = require('discord.js');
const 시바견 = new Discord.Client();

시바견.on('ready', () => {
    console.log(`Logged in as ${시바견.user.tag}!`);
});

시바견.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('[ 님 누구? ]');
    }
});

시바견.login('ODA4MTUzNjI5NTkxNzMyMjc1.YCCZuA.GeTuSVZrNYLg2g9iBeKV0VEkPv4');

exports.시바견 = 시바견;