const Discord = require("discord.js");
const bot = new Discord.Client();
import {imageURLS} from './nightmare.js';

clownIndex = 0;

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

davisid = "231432827139391488";
mikeid = "180735443418087424";
danielid = "157188647001522176";



bot.on('message', msg => {
    if (msg.author.bot) return;

    if (msg.author.id === davisid || msg.author.id === danielid) {
        msg.react('772820533066203167');
        msg.react('773656627281920091');
    }

    davisImg = new Discord.MessageAttachment;
    davisImg.attachment = imageURLS[clownIndex];

    if (msg.content === "testdb") {
        msg.channel.send(davisImg);
        clownIndex += 1;
    }

    msg.mentions.users.forEach(user => {
        if (user.id === davisid) {
            console.log("sending davis img...")
            msg.channel.send(davisImg)
            clownIndex += 1;
        }
        
        if (user.id === danielid) {
            console.log("sending daniel img..")
            msg.channel.send(danielImg)
        }
    });
    
})

bot.login(process.env.token);