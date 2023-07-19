console.log("Hello world");

const puppeteer = require("puppeteer");


const arrLinkIstoreIPAD = [
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
const arrLinkJabkoIPAD = [
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


    for (let i = 0; i < arrLinkIstoreIPAD.length; i += 1) {
      await page.goto(arrLinkIstoreIPAD[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return text2}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabkoIPAD.length; i += 1) {
      await page.goto(arrLinkJabkoIPAD[i]);
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

