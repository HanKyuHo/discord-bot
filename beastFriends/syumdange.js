const Discord = require('discord.js');
const 슘당이 = new Discord.Client();

슘당이.on('ready', () => {
    console.log(`Logged in as ${슘당이.user.tag}!`);
});

슘당이.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('반갑슘당');
    }
});

슘당이.login('ODA4MTU0ODAyMzk0NzU5MTY5.YCCazw.0OMtyPBX5Cy_HQ1rtyUx0VEu3VI');

exports.슘당이 = 슘당이;