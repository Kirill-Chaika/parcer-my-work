console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkMobilePlanetMac = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    ''
 
];
const arrLinkSkayMac = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    ''
];
const arrLinkIstoreMac = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    ''
];
const arrLinkJabkoMac = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    ''
];









  async function f() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();



    for (let i = 0; i < arrLinkMobilePlanetMac.length; i += 1) {
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
    for (let i = 0; i < arrLinkSkayMac.length; i += 1) {
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
    for (let i = 0; i < arrLinkIstoreMac.length; i += 1) {
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
    for (let i = 0; i < arrLinkJabkoMac.length; i += 1) {
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


   

  }
  f()

