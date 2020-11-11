const Nightmare = require('nightmare')
const nightmare = Nightmare();

console.log("nightmare is starting...")

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
console.log("nightmare is finished...")

export {imageURLS};