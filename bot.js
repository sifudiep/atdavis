const Discord = require("discord.js");
const bot = new Discord.Client();

const Nightmare = require('nightmare')
const nightmare = Nightmare();

const fs = require('fs')
const request = require('request')

let imageURLS = [];
let yValue = 0
const path = "./clown.jpg"

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

function startBot() {
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

        danielImg = new Discord.MessageAttachment;
        danielImg.attachment = "./danielclown.jpg"

        davisImg = new Discord.MessageAttachment;

        if (msg.content === "testdb") {
            console.log(imageURLS[clownIndex])
            download(imageURLS[clownIndex], path , (err) => {
                console.log("wow it downloaded....")
                davisImg.attachment = path;
                msg.channel.send(davisImg)
                clownIndex += 1
            })
        }


        msg.mentions.users.forEach(user => {
            console.log("download start...")
            if (user.id === davisid) {
                download(imageURLS[clownIndex], path , (err) => {
                    console.log("wow it downloaded....")
                    davisImg.attachment = path;
                    msg.channel.send(davisImg)
                    clownIndex += 1
                })
            }
            
            if (user.id === danielid) {
                download(imageURLS[clownIndex], path , (err) => {
                    console.log("wow it downloaded....")
                    davisImg.attachment = path;
                    msg.channel.send(davisImg)
                    clownIndex += 1
                })
            }
        });
    
    })

    bot.login(process.env.token);

}

console.log("STARTING NIGHTMARE...")

nightmare.goto("https://duckduckgo.com/?q=clown&atb=v231-1&iar=images&iax=images&ia=images")
for (i = 0; i < 10; i++) {
    yValue += 99999
    nightmare.scrollTo(yValue, 0)
    nightmare.wait(1000)
}
nightmare.evaluate(() => {
        imgElements = document.body.getElementsByClassName("tile--img__img  js-lazyload");
        imgURLS = []

        for (let i = 0; i < imgElements.length; i++) {
            imgURLS.push(imgElements[i].src)
        }
        return imgURLS;
    })
    .then(result => {
        imageURLS = result;
        console.log("imageURLS LENGTH: ", imageURLS.length)
        console.log("nightmare is finished!!!")    
        console.log("Starting bot...")
        console.log("RESULT[0]", result[0])
        startBot();
    })
    .catch(error => {
        console.error('Search failed:', error)
    })
nightmare.end();

clownIndex = 0;

