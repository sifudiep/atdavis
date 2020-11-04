const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

imageURL = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.premierecreative.com%2Fwp-content%2Fuploads%2F2012%2F11%2Furlstructure.jpg&f=1&nofb=1";   

davisid = "231432827139391488";
mikeid = "180735443418087424";

bot.on('message', msg => {
    if (msg.author.bot) return;

    rnd = Math.floor((Math.random() * 2) + 1);

    davisImg = new Discord.MessageAttachment;
    if (rnd === 1) {
        davisImg.attachment = "./mrandmrs.png";
    }

    if (msg.author.id === davisid) {
        msg.react('772820533066203167')
    }

    if (msg.content === "testdb") {
        msg.channel.send(davisImg);
    }

    msg.mentions.users.forEach(user => {
        if (user.id === mikeid) {
            console.log("sending davis img...")
            msg.channel.send(davisImg)
        }
    });
})

token = "NzczMjA1NTI4Mjg1NDEzMzg3.X6F1ww.ZXyXv8XjulGoflOabE_TjSzeo6w"


bot.login(token);