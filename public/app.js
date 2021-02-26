const Discord = require('discord.js');
const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = 0;
let serverStart = false;
client.on('ready', () => {
    serverStart = true;
    console.log('BGM Bot 실행');
});

// 813018081260863540 Role 아이디

var winners = {
    '396918076894871553' : {
        playing : true,
        name : '이보미1'
    },
    '555348150492332061' : {
        playing : true,
        name : '리모네'
    },
    '376027415551410176' : {
        playing : true,
        name : '버노찌'
    },
    '115501584435249152' : {
        playing : true,
        name : '굿나잇자러감'
    },
    '329612487135723522' : {
        playing : true,
        name : '칼바람공주님'
    },
    '307818950958252033' : {
        playing : true,
        name : '순진한척하는거야'
    }
};

setTimeout(function () {
    client.on('message', msg => {
        if(msg.content.split('!')[1] === 'off'){
            winners[msg.member.user.id].playing = false;
            msg.reply(winners[msg.member.user.id].name + '님 브금 Off');
        }

        if(msg.content.split('!')[1] === 'on'){
            winners[msg.member.user.id].playing = true;
            msg.reply(winners[msg.member.user.id].name + '님 브금 On');
        }
    });

    client.on('voiceStateUpdate', (oldState, newState) => {
        if(oldState.channelID === newState.channelID){
            if(oldState.selfDeaf !== newState.selfDeaf || oldState.selfMute !== newState.selfMute || oldState.selfVideo !== newState.selfVideo || oldState.streaming !== newState.streaming){
                return;
            }
        }

        if (newState.channelID !== null) {
            newState.member.roles.cache.forEach(function (data) {
                if (data.id === '810838193842683915') {
                    if(newState.member.user.id === '307818950958252033' &&  winners['307818950958252033']){
                        soundPlay(newState, __dirname + '/contents/bgm.mp3');
                    }
                }
            });
        }
    });
}, 2000);

function soundPlay(newState, source) {
    client.channels.fetch(newState.channelID).then(channel => {
        let dispatcher = null;
        let VC = channel;
        VC.join()
            .then(connection => {
                if (dispatcher !== null) {
                    if (dispatcher.speaking) {
                        return;
                    }
                }

                dispatcher = connection.play(source);
                dispatcher.setVolume(0.3);
                dispatcher.on('finish', () => {
                    VC.leave();
                });
            })
            .catch(console.error);
    });
}

client.login('ODA3OTU5MDU0NDI4NTM2ODMy.YB_kgQ.Ylabd9EuzXrHVVMMSsjqnUs57l4');