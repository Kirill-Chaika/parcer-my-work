console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanet = [
  "https://mobileplanet.ua/apple-iphone-14-128gb-starlight-mpur3-254637",
  "https://mobileplanet.ua/apple-iphone-14-128gb-product-red-mpva3-254640",
  "https://mobileplanet.ua/apple-iphone-14-128gb-purple-mpv03-254646",
  "https://mobileplanet.ua/apple-iphone-14-128gb-blue-mpvn3-254643",
  "https://mobileplanet.ua/apple-iphone-14-128gb-midnight-mpuf3-254634",
  "https://mobileplanet.ua/apple-iphone-14-128gb-yellow-mr3x3-269128",

  "https://mobileplanet.ua/apple-iphone-14-256gb-starlight-mpw43-254638",
  "https://mobileplanet.ua/apple-iphone-14-256gb-product-red-mpwh3-254641",
  "https://mobileplanet.ua/apple-iphone-14-256gb-purple-mpwa3-254647",
  "https://mobileplanet.ua/apple-iphone-14-256gb-blue-mpwp3-254644",
  "https://mobileplanet.ua/apple-iphone-14-256gb-midnight-mpvx3-254635",
  "https://mobileplanet.ua/apple-iphone-14-256gb-yellow-mr3y3-268925",

  "https://mobileplanet.ua/apple-iphone-14-512gb-starlight-mpx33-254639",
  "https://mobileplanet.ua/apple-iphone-14-512gb-product-red-mpxg3-254642",
  "https://mobileplanet.ua/apple-iphone-14-512gb-purple-mpx93-254648",
  "https://mobileplanet.ua/apple-iphone-14-512gb-blue-mpxn3-254645",
  "https://mobileplanet.ua/apple-iphone-14-512gb-midnight-mpww3-254636",
  "https://mobileplanet.ua/apple-iphone-14-512gb-yellow-mr513-272475"
];
const arrLinkSkay14 = [
  "https://skay.ua/uk/iphone-14/58756-apple-iphone-14-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58757-apple-iphone-14-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58754-apple-iphone-14-128gb-purple.html",
  "https://skay.ua/uk/iphone-14/58753-apple-iphone-14-128gb-blue.html",
  "https://skay.ua/uk/iphone-14/58755-apple-iphone-14-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61506-apple-iphone-14-128gb-yellow.html",

  "https://skay.ua/uk/iphone-14/58761-apple-iphone-14-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58762-apple-iphone-14-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58759-apple-iphone-14-256gb-purple.html",
  "https://skay.ua/uk/iphone-14/58758-apple-iphone-14-256gb-blue.html",
  "https://skay.ua/uk/iphone-14/58760-apple-iphone-14-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61509-apple-iphone-14-256gb-yellow.html",

  "https://skay.ua/uk/iphone-14/58766-apple-iphone-14-512gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58767-apple-iphone-14-512gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58764-apple-iphone-14-512gb-purple.html",
  "https://skay.ua/uk/iphone-14/58763-apple-iphone-14-512gb-blue.html",
  "https://skay.ua/uk/iphone-14/58765-apple-iphone-14-512gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61510-apple-iphone-14-512gb-yellow.html"
];
const arrLinkIstore14 = [
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-yellow/"
];
const arrLinkJabko14 = [
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb-midnight",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--yellow-"
];

const arrLinkMobilePlanet14Plus = [
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-starlight-mq4y3-254622",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-product-red-mq513-254625",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-purple-mq503-254631",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-blue-mq523-254628",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-midnight-mq4x3-254619",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-yellow-mr693-269368",

  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-starlight-mq553-254623",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-product-red-mq573-254626",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-purple-mq563-254632",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-blue-mq583-254629",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-midnight-mq533-254620",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-yellow-mr6d3-270614",

  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-starlight-mq5d3-254624",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-product-red-mq5f3-254627",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-purple-mq5e3-254633",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-blue-mq5g3-254630",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-midnight-mq593-254621"
];
const arrLinkSkay14Plus = [
  "https://skay.ua/uk/iphone-14-plus/58772-apple-iphone-14-plus-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58773-apple-iphone-14-plus-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58770-apple-iphone-14-plus-128gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58768-apple-iphone-14-plus-128gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58771-apple-iphone-14-plus-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61507-apple-iphone-14-plus-128gb-yellow.html",

  "https://skay.ua/uk/iphone-14-plus/58777-apple-iphone-14-plus-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58778-apple-iphone-14-plus-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58775-apple-iphone-14-plus-256gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58774-apple-iphone-14-plus-256gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58776-apple-iphone-14-plus-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61511-apple-iphone-14-plus-256gb-yellow.html",

  "https://skay.ua/uk/iphone-14-plus/58781-apple-iphone-14-plus-512gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58782-apple-iphone-14-plus-512gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58816-apple-iphone-14-plus-512gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58779-apple-iphone-14-plus-512gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58780-apple-iphone-14-plus-512gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61512-apple-iphone-14-plus-512gb-yellow.html"
];
const arrLinkIstore14Plus = [
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-yellow/"
];
const arrLinkJabko14Plus = [
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-128gb--yellow-",

  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-256gb--yellow-",

  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-512gb--yellow-"
];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkMobilePlanet.length; i += 1) {
    await page.goto(arrLinkMobilePlanet[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
  }

  for (let i = 0; i < arrLinkSkay14.length; i += 1) {
    await page.goto(arrLinkSkay14[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr1);
  }
  for (let i = 0; i < arrLinkIstore14.length; i += 1) {
    await page.goto(arrLinkIstore14[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text3 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text3 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text3;
      }
    });

    console.log(arr4);
  }
  for (let i = 0; i < arrLinkJabko14.length; i += 1) {
    await page.goto(arrLinkJabko14[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
  }

  for (let i = 0; i < arrLinkMobilePlanet14Plus.length; i += 1) {
    await page.goto(arrLinkMobilePlanet14Plus[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
  }
  for (let i = 0; i < arrLinkSkay14Plus.length; i += 1) {
    await page.goto(arrLinkSkay14Plus[i]);
    const n = await page.$("#txt");

    let arr6 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr6);
  }
  for (let i = 0; i < arrLinkIstore14Plus.length; i += 1) {
    await page.goto(arrLinkIstore14Plus[i]);
    const n = await page.$("#txt");

    let arr7 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr7);
  }

  for (let i = 0; i < arrLinkJabko14Plus.length; i += 1) {
    await page.goto(arrLinkJabko14Plus[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
  }
}
f();
