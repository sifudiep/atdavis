const Discord = require("discord.js");
const bot = new Discord.Client();

const Nightmare = require('nightmare')
const nightmare = Nightmare();

imageURLS = [];
yValue = 0

nightmare.goto("https://duckduckgo.com/?q=clown&atb=v231-1&iar=images&iax=images&ia=images")
for (i = 0; i < 10; i++) {
    yValue += 99999
    nightmare.scrollTo(yValue, 0)
    nightmare.wait(1000)
}
nightmare.evaluate(() => {
        imgElements = document.body.getElementsByClassName("tile--img__img  js-lazyload");
        imgURLS = []
        for (let index = 0; index < imgElements.length; index++) {
            imgURLS.push(imgElements[index].src)
        }
        return imgURLS;
    })
    .then(result => {
        imageURLS = result;
    })
    .catch(error => {
        console.error('Search failed:', error)
    })
nightmare.end();

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