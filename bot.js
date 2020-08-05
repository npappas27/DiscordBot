// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const discordTTS=require("discord-tts");


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message",msg=>{
    if (msg.content.startsWith("say")){
        const voiceChannel = msg.member.voice.channel;
        const removeSay = msg.content.substring(3);
        voiceChannel.join().then(connection => {
            const stream = discordTTS.getVoiceStream(removeSay);
            const dispatcher = connection.play(stream);
            //dispatcher.on("finish",()=>voiceChannel.leave())
        });
        msg.delete({ timeout: 10000 })
    }
    if(msg.content == "ferr" || msg.content == "FERR"){
        const voiceChannel = msg.member.voice.channel;
        console.log(voiceChannel.name)

        voiceChannel.join().then(connection => {
            const stream = discordTTS.getVoiceStream("Ferrrr Metticharranearrr");
            const dispatcher = connection.play(stream);
            dispatcher.on("finish",()=>voiceChannel.leave())
        });
    }

    if(msg.content == "connie job"){
        msg.reply("waitlisted :p")
    }

    if(msg.content == "test"){
        const voiceChannel = msg.member.voice.channel;
        console.log(voiceChannel.id)
    }
    if(msg.content == "help"){
        msg.reply("\n Hi, my name's Peter! I like woodworking, The Office, and hanging out with my wife and her boyfriend! \n command -- description \n say {xyz} -- reads xyz in voice channel \n ferr -- ferrrr metticharrr \n roll d{number} -- rolls a number between 1 & number \n connie job -- { status of connies employment } \n created by best veigar NA, @KingDiesel")
    }

    if(msg.content.startsWith("roll d")){
        const strNum = msg.content.substring(6)
        const num = parseInt(strNum)
        console.log(num)
        const rando = Math.floor(Math.random() * num) + 1  
        msg.reply(rando)
    }
    
});

client.on('guildMemberAdd', member => {
    member.send('Welcome to the server, homie!')
});

client.login(process.env.DISCORD_TOKEN);

