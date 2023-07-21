console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanetAWS = [
    'https://mobileplanet.ua/apple-watch-series-7-41mm-gps-starlight-235148',
    'https://mobileplanet.ua/apple-watch-series-7-41mm-gps-midnight-a-235151',
    'https://mobileplanet.ua/apple-watch-series-7-41mm-gps-green-alum-235145',
    'https://mobileplanet.ua/apple-watch-series-7-41mm-gps-blue-alumi-235144',
    'https://mobileplanet.ua/apple-watch-series-7-41mm-gps-product-re-235152',
    'https://mobileplanet.ua/apple-watch-series-7-gps-plus-cellular-4-251993',
    'https://mobileplanet.ua/apple-watch-series-7-gps-cellular-41mm-silver-stai-237444',
    'https://mobileplanet.ua/apple-watch-series-7-gps-cellular-41mm-gold-stainl-237440',
    
    'https://mobileplanet.ua/apple-watch-series-7-45mm-gps-starlight-235150',
    'https://mobileplanet.ua/apple-watch-series-7-45mm-gps-green-alum-235143',
    'https://mobileplanet.ua/apple-watch-series-7-nike-45mm-gps-starl-235147',
    'https://mobileplanet.ua/apple-watch-series-7-45mm-gps-midnight-a-235146',
    'https://mobileplanet.ua/apple-watch-series-7-45mm-gps-product-re-235153',
    'https://mobileplanet.ua/apple-watch-series-7-45mm-gps-blue-alumi-235149',
    'https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-silver-stai-237446',
    'https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-gold-stainl-237450',
    'https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-graphite-s-237452',
    'https://mobileplanet.ua/apple-watch-series-7-nike-45mm-gps-midni-235155',
    'https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-s-246496',
    
    'https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-aluminum-ca-254733',
    'https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-a-259901',
    'https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-a-265206',
    'https://mobileplanet.ua/apple-watch-series-8-gps-41mm-starlight-aluminum-c-254736',
    'https://mobileplanet.ua/apple-watch-series-8-gps-41mm-starlight-260904',
    'https://mobileplanet.ua/apple-watch-series-8-41mm-gps-starlight-260762',
    'https://mobileplanet.ua/apple-watch-series-8-gps-41mm-silver-aluminum-case-254735',
    'https://mobileplanet.ua/apple-watch-series-8-41mm-silver-aluminu-259836',
    
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-aluminum-ca-254737',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-a-260629',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-a-260766',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-aluminum-ca-254737',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-aluminum-c-254740',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-260908',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-265263',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-silver-aluminum-case-254739',
    
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-silver-aluminum-case-254739',
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-product-red-aluminum-254738',
    
    'https://mobileplanet.ua/apple-watch-series-8-gps-45mm-product-re-261461',
    'https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-midnight-al-254755',
    'https://mobileplanet.ua/apple-watch-series-8-gps-cellular-41mm-midnight-al-265111',
    'https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-midnight-al-265113',
    'https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-graphite-s-254754',
    
    
    'https://mobileplanet.ua/apple-watch-se-2-gps-40mm-starlight-alum-268918',
    'https://mobileplanet.ua/apple-watch-se-2-gps-40mm-midnight-aluminum-case-w-255872',
    'https://mobileplanet.ua/apple-watch-series-se2-40mm-silver-alumi-257587',
    'https://mobileplanet.ua/apple-watch-se-2-gps-44mm-starlight-aluminum-case-255877',
    'https://mobileplanet.ua/apple-watch-se-2-gps-44mm-midnight-aluminum-case-w-255875',
    'https://mobileplanet.ua/apple-watch-se-2-gps-44mm-silver-aluminum-case-wit-255876',
    
    'https://mobileplanet.ua/apple-watch-se-2-lte-44mm-midnight-alumi-270557',
    
    
    'https://mobileplanet.ua/apple-watch-se-gps-40mm-silver-aluminum-238556',
    'https://mobileplanet.ua/apple-watch-se-gps-40mm-gold-aluminum-ca-237400',
    'https://mobileplanet.ua/apple-watch-se-gps-40mm-space-gray-aluminum-case-w-239809',
    'https://mobileplanet.ua/apple-watch-se-gps-44mm-silver-aluminum-238603',
    'https://mobileplanet.ua/apple-watch-se-gps-44mm-gold-aluminum-ca-238604',
    'https://mobileplanet.ua/apple-watch-se-gps-44mm-space-gray-alumi-238557',
    
    'https://mobileplanet.ua/apple-watch-se-gps-cellular-40mm-silver-aluminum-c-251697',
    'https://mobileplanet.ua/apple-watch-se-gps-cellular-40mm-gold-aluminum-cas-251695',
    'https://mobileplanet.ua/apple-watch-se-gps-plus-cellular-40mm-go-255754',
    'https://mobileplanet.ua/apple-watch-se-gps-cellular-40mm-space-g-260924',
    'https://mobileplanet.ua/apple-watch-se-gps-cellular-44mm-silver-a-case-w-a-255695',
    'https://mobileplanet.ua/apple-watch-se-gps-cellular-44mm-space-g-246499',
    
    
    
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254776',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254777',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254775',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254770',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254771',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254773',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254774',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254772',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254778',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254767',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254768',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254769',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254761',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254762',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254763',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254764',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254765',
    'https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254766'
];
const arrLinkSkayAWS = [

];
const arrLinkJabkoAWS = [
  
];
const arrLinkIstoreAWS = [
  
];

  async function f() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (let i = 0; i < arrLinkMobilePlanetAWS.length; i += 1) {
      await page.goto(arrLinkMobilePlanetAWS[i]);
      const n = await page.$("#txt");
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr3)
    } 

    for (let i = 0; i < arrLinkSkayAWS.length; i += 1) {
      await page.goto(arrLinkSkayAWS[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstoreAWS.length; i += 1) {
      await page.goto(arrLinkIstoreAWS[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text3 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text3 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return text3}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabkoAWS.length; i += 1) {
      await page.goto(arrLinkJabkoAWS[i]);
      const n = await page.$("#txt");
  
    let arr2 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr2)
    }
    

  }
  f()

