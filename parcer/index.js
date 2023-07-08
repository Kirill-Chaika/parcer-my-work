console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkSkay14 = [
  "https://skay.ua/uk/iphone-14/58753-apple-iphone-14-128gb-blue.html",
  "https://skay.ua/uk/iphone-14/58757-apple-iphone-14-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58755-apple-iphone-14-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14/58756-apple-iphone-14-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58754-apple-iphone-14-128gb-purple.html",
  "https://skay.ua/uk/iphone-14/61506-apple-iphone-14-128gb-yellow.html",
  "https://skay.ua/uk/iphone-14/58758-apple-iphone-14-256gb-blue.html",
  "https://skay.ua/uk/iphone-14/58762-apple-iphone-14-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58760-apple-iphone-14-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14/58761-apple-iphone-14-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58759-apple-iphone-14-256gb-purple.html",
  "https://skay.ua/uk/iphone-14/61509-apple-iphone-14-256gb-yellow.html",
  "https://skay.ua/uk/iphone-14/58763-apple-iphone-14-512gb-blue.html",
  "https://skay.ua/uk/iphone-14/58767-apple-iphone-14-512gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58765-apple-iphone-14-512gb-midnight.html",
  "https://skay.ua/uk/iphone-14/58766-apple-iphone-14-512gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58764-apple-iphone-14-512gb-purple.html",
  "https://skay.ua/uk/iphone-14/61510-apple-iphone-14-512gb-yellow.html",
];
const arrLinkJabko14 = [
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb-midnight",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--yellow-"
]
const arrLinkMobilePlanet = [
  'https://mobileplanet.ua/apple-iphone-14-128gb-blue-mpvn3-254643',
  'https://mobileplanet.ua/apple-iphone-14-128gb-product-red-mpva3-254640',
  'https://mobileplanet.ua/apple-iphone-14-128gb-midnight-mpuf3-254634',
  'https://mobileplanet.ua/apple-iphone-14-128gb-starlight-mpur3-254637',
  'https://mobileplanet.ua/apple-iphone-14-128gb-purple-mpv03-254646',
  'https://mobileplanet.ua/apple-iphone-14-128gb-yellow-mr3x3-269128',
  
  'https://mobileplanet.ua/apple-iphone-14-256gb-blue-mpwp3-254644',
  'https://mobileplanet.ua/apple-iphone-14-256gb-product-red-mpwh3-254641',
  'https://mobileplanet.ua/apple-iphone-14-256gb-midnight-mpvx3-254635',
  'https://mobileplanet.ua/apple-iphone-14-256gb-starlight-mpw43-254638',
  'https://mobileplanet.ua/apple-iphone-14-256gb-purple-mpwa3-254647',
  'https://mobileplanet.ua/apple-iphone-14-256gb-yellow-mr3y3-268925',
  
  'https://mobileplanet.ua/apple-iphone-14-512gb-blue-mpxn3-254645',
  'https://mobileplanet.ua/apple-iphone-14-512gb-product-red-mpxg3-254642',
  'https://mobileplanet.ua/apple-iphone-14-512gb-midnight-mpww3-254636',
  'https://mobileplanet.ua/apple-iphone-14-512gb-starlight-mpx33-254639',
  'https://mobileplanet.ua/apple-iphone-14-512gb-purple-mpx93-254648',
  'https://mobileplanet.ua/apple-iphone-14-512gb-yellow-mr513-272475'
];

  async function f() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    for (let i = 0; i < arrLinkSkay14.length; i += 1) {
      await page.goto(arrLinkSkay14[i]);
      await page.screenshot({ path: "img.png" });
  
    let arr1 = await page.evaluate(() => {
      let text = document.querySelector("#our_price_display").innerText;
      let text2 = document.querySelector("h1").innerText;
      return text2 + 'S: ' + text;
    });
    
    console.log(arr1)
    }

    for (let i = 0; i < arrLinkJabko14.length; i += 1) {
      await page.goto(arrLinkJabko14[i]);
      await page.screenshot({ path: "img.png" });
  
    let arr2 = await page.evaluate(() => {
      let text = document.querySelector(".price-new__uah").innerText;
      let text2 = document.querySelector("h1").innerText;
      return text2 + 'J: ' + text;
    });
    
    console.log(arr2)
    }
    
    for (let i = 0; i < arrLinkMobilePlanet.length; i += 1) {
      await page.goto(arrLinkMobilePlanet[i]);
      await page.screenshot({ path: "img.png" });
  
    let arr3 = await page.evaluate(() => {
      let text = document.querySelector(".price-value").innerText;
      let text2 = document.querySelector("h1").innerText;
      return text2 + 'MP: ' + text;
    });
    
    console.log(arr3)
    }
    
  }
  f()
