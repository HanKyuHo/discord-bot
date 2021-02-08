const Discord = require('discord.js');
const 새대갈 = new Discord.Client();

새대갈.on('ready', () => {
    console.log(`Logged in as ${새대갈.user.tag}!`);
});

새대갈.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('누구세용?');
    }
});

새대갈.login('ODA3OTU5MDU0NDI4NTM2ODMy.YB_kgQ.2JIV1o94m6iwhGKmL9lsu1pxXqk');

exports.새대갈 = 새대갈;