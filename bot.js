const Discord = require("discord.js");
const bot = new Discord.Client();

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
    davisImg.attachment = "https://cdn.discordapp.com/attachments/773180545957232664/773615213408026674/mrandmrs.png";
    danielImg = new Discord.MessageAttachment;
    danielImg.attachment = "./danielclown.jpg";

    if (msg.content === "testdb") {
        msg.channel.send(danielImg);
    }

    msg.mentions.users.forEach(user => {
        if (user.id === danielid) {
            console.log("sending daniel img..")
            msg.channel.send(danielImg)
        }

        if (user.id === davisid) {
            console.log("sending davis img...")
            msg.channel.send(davisImg)
        }
    });
    
})

bot.login(process.env.token);