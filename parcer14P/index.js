console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkMobilePlanet14Pro = [
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-deep-purple-mq0g3-254615',
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-space-black-mpxv3-254603',
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-silver-mq023-254607',
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-gold-mq083-254611',

  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-deep-purple-mq1f3-254616',
  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-space-black-mq0t3-254604',
  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-silver-mq103-254608',
  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-gold-mq183-254612',

  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-space-black-mq1m3-254605',
  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-deep-purple-mq293-254617',
  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-silver-mq1w3-254609',
  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-gold-mq233-254613',

  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-deep-purple-mq323-254618',
  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-space-black-mq2g3-254606',
  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-silver-mq2n3-254610',
  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-gold-mq2v3-254614'
];
const arrLinkSkay14Pro = [
  'https://skay.ua/uk/iphone-14-pro/58783-apple-iphone-14-pro-128gb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/58786-apple-iphone-14-pro-128gb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/58785-apple-iphone-14-pro-128gb-silver.html',
  'https://skay.ua/uk/iphone-14-pro/58784-apple-iphone-14-pro-128gb-gold.html',

  'https://skay.ua/uk/iphone-14-pro/58788-apple-iphone-14-pro-256gb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/58791-apple-iphone-14-pro-256gb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/58790-apple-iphone-14-pro-256gb-silver.html',
  'https://skay.ua/uk/iphone-14-pro/58789-apple-iphone-14-pro-256gb-gold.html',

  'https://skay.ua/uk/iphone-14-pro/58792-apple-iphone-14-pro-512gb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/58795-apple-iphone-14-pro-512gb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/58794-apple-iphone-14-pro-512gb-silver.html',
  'https://skay.ua/uk/iphone-14-pro/58793-apple-iphone-14-pro-512gb-gold.html',

  'https://skay.ua/uk/iphone-14-pro/58796-apple-iphone-14-pro-1tb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/58799-apple-iphone-14-pro-1tb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/58798-apple-iphone-14-pro-1tb-silver.html',
  'https://skay.ua/uk/iphone-14-pro/58797-apple-iphone-14-pro-1tb-gold.html'
];
const arrLinkIstore14Pro = [
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-graphite/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-gold/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-gold/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-gold/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-gold/'
];
const arrLinkJabko14Pro = [
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--gold-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--gold-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--gold-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--gold-'
];


const arrLinkMobilePlanet14ProMax = [
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-deep-purple-mq9t3-254599',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-space-black-mq9p3-254587',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-silver-mq9q3-254591',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-gold-mq9r3-254595',

  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-deep-purple-mq9x3-254600',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-space-black-mq9u3-254588',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-silver-mq9v3-254592',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-gold-mq9w3-254596',

  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-deep-purple-mqam3-254601',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-space-black-mqaf3-254589',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-silver-mqah3-254593',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-gold-mqaj3-254597',

  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-deep-purple-mqc53-254602',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-space-black-mqc23-254590',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-silver-mqc33-254594',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-gold-mqc43-254598'
];
const arrLinkSkay14ProMax = [
  'https://skay.ua/uk/iphone-14-pro-max/58800-apple-iphone-14-pro-max-128gb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/58803-apple-iphone-14-pro-max-128gb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/58802-apple-iphone-14-pro-max-128gb-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/58801-apple-iphone-14-pro-max-128gb-gold.html',

  'https://skay.ua/uk/iphone-14-pro-max/58804-apple-iphone-14-pro-max-256gb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/58807-apple-iphone-14-pro-max-256gb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/58806-apple-iphone-14-pro-max-256gb-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/58805-apple-iphone-14-pro-max-256gb-gold.html',

  'https://skay.ua/uk/iphone-14-pro-max/58808-apple-iphone-14-pro-max-512gb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/58811-apple-iphone-14-pro-max-512gb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/58810-apple-iphone-14-pro-max-512gb-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/58809-apple-iphone-14-pro-max-512gb-gold.html',

  'https://skay.ua/uk/iphone-14-pro-max/58812-apple-iphone-14-pro-max-1tb-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/58815-apple-iphone-14-pro-max-1tb-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/58814-apple-iphone-14-pro-max-1tb-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/58813-apple-iphone-14-pro-max-1tb-gold.html'
];
const arrLinkIstore14ProMax = [
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-gold/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-gold/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-gold/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-deep-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-space-black/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-silver/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-gold/'
];
const arrLinkJabko14ProMax = [
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--gold-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--gold-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--midnight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--gold-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--graphite-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--silver-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--gold-'
];







  async function f() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();



    for (let i = 0; i < arrLinkMobilePlanet14Pro.length; i += 1) {
      await page.goto(arrLinkMobilePlanet14Pro[i]);
      const n = await page.$("#txt");
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr3)
    }
    for (let i = 0; i < arrLinkSkay14Pro.length; i += 1) {
      await page.goto(arrLinkSkay14Pro[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstore14Pro.length; i += 1) {
      await page.goto(arrLinkIstore14Pro[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabko14Pro.length; i += 1) {
      await page.goto(arrLinkJabko14Pro[i]);
      const n = await page.$("#txt");
  
    let arr2 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr2)
    }


    for (let i = 0; i < arrLinkMobilePlanet14ProMax.length; i += 1) {
      await page.goto(arrLinkMobilePlanet14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr5 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr5)
    }
    for (let i = 0; i < arrLinkSkay14ProMax.length; i += 1) {
      await page.goto(arrLinkSkay14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr6 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr6)
    }
    for (let i = 0; i < arrLinkIstore14ProMax.length; i += 1) {
      await page.goto(arrLinkIstore14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr7 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return}
      
    });
    
    console.log(arr7)
    }
    for (let i = 0; i < arrLinkJabko14ProMax.length; i += 1) {
      await page.goto(arrLinkJabko14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr8 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr8)
    }

  }
  f()

