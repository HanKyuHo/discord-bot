const Discord = require('discord.js');
const 땅땅이 = new Discord.Client();

땅땅이.on('ready', () => {
    console.log(`Logged in as ${땅땅이.user.tag}!`);
});

땅땅이.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('찌발럼아');
    }
});

땅땅이.login('ODA4MTUyMzA2MjQ3MjcwNDMy.YCCYfA.mKrVry1cQooCsG6tS1Vq112bc-U');

exports.땅땅이 = 땅땅이;