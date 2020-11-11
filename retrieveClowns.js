const Nightmare = require('nightmare')
const nightmare = Nightmare();

const fs = require('fs')

let imageURLS = [];
let yValue = 0;

console.log("STARTING NIGHTMARE...")

nightmare.goto("https://duckduckgo.com/?q=clown&atb=v231-1&iar=images&iax=images&ia=images")
for (i = 0; i < 10; i++) {
    yValue += 99999
    nightmare.scrollTo(yValue, 0)
    nightmare.wait(500)
}
nightmare.evaluate(() => {
        imgElements = document.body.getElementsByClassName("tile--img__img  js-lazyload");
        imgURLS = []
        for (let i = 0; i < imgElements.length; i++) {
            imgURLS.push(imgElements[i].src)
        }
        return imgURLS;
    })
    .then((res) => {
        console.log("RES LENGTH: " + res.length)
        for (let i = 0; i < res.length; i++) {
            oldText = fs.readFileSync("./clownURLS.txt");
            fs.writeFileSync("./clownURLs.txt", oldText + `${res[i]}   `)
        }
    })
    .catch(error => {
        console.error('Search failed:', error)
    })
nightmare.end();