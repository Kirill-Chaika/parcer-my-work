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
  "https://mobileplanet.ua/apple-iphone-14-512gb-yellow-mr513-272475",
];

async function f(mass, priceValue, namePosission) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  for (let i = 0; i < mass.length; i += 1) {
    await page.goto(mass[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(`${namePosission}`).innerText;
      if (document.querySelector(`${priceValue}`) != null) {
        return text2 + "MP: " + document.querySelector(`${priceValue}`).innerText;
      } else {
        return text2;
      }
    });
    console.log(arr3);
  }
}
f(arrLinkMobilePlanet, ".price-value", "h1");
