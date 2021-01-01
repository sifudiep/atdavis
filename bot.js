const Discord = require("discord.js");
const bot = new Discord.Client();

const fs = require('fs')
const request = require('request')

let yValue = 0
const path = "./clown.jpg"
let clownIndex = 0;

let imageURLsText = fs.readFileSync("./clownURLs.txt", 'utf8');
let imageURLs = imageURLsText.split("   ");

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setStatus('invisible');
});

davisid = "231432827139391488";
mikeid = "180735443418087424";
danielid = "157188647001522176";
henryid = "219512008947662848";

bot.on('message', msg => {
    if (msg.author.bot) return;

    msg.guild.members.get(henryId).setNickname("söt stenkastare");

    if (msg.author.id === davisid || msg.author.id === danielid) {
        msg.react('772820533066203167');
        msg.react('773656627281920091');
    }

    davisImg = new Discord.MessageAttachment;

    if (msg.content === "testdb") {
        console.log(imageURLs[clownIndex])
        download(imageURLs[clownIndex], path , (err) => {
            console.log("wow it downloaded....")
            davisImg.attachment = path;
            msg.channel.send(davisImg)
            clownIndex += 1
        })
    }

    msg.mentions.users.forEach(user => {
        console.log("download start...")
        rndClownIndex = Math.floor(Math.random() * imageURLs.length);
        if (user.id === davisid || user.id === danielid) {
            download(imageURLs[rndClownIndex], path , (err) => {
                console.log("wow it downloaded....")
                davisImg.attachment = path;
                msg.channel.send(davisImg)
            })
        }
    });

})

bot.login(process.env.token);


