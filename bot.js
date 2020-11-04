const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

davisid = "231432827139391488";
mikeid = "180735443418087424";

bot.on('message', msg => {
    if (msg.author.bot) return;

    rnd = Math.floor((Math.random() * 2) + 1);



    if (msg.author.id === davisid) {
        msg.react('772820533066203167')
    }

    davisImg = new Discord.MessageAttachment;
    davisImg.attachment = "https://i.postimg.cc/zXmZVfZ5/mrandmrs.png";

    if (msg.content === "testdb") {
        console.log("oopsie");
        msg.channel.send(davisImg);
    }

    msg.mentions.users.forEach(user => {
        if (user.id === davisid) {
            console.log("sending davis img...")
            msg.channel.send(davisImg)
        }
    });
    
})

bot.login(process.env.token);