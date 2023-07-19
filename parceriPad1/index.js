console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanetIPAD = [
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-64gb-silver-228408",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-64gb-space-228409",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-64gb-si-228412",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-64gb-sp-228413",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-256gb-silve-228410",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-256gb-space-228411",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-256gb-s-228414",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-256gb-s-228415",

  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-blue-mpq13-2022-256497",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-pink-mpq33-2022-256505",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-silver-mpq03-2022-256493",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-yellow-mpq23-2022-256501",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-blue-mq6k3-202-256499",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-pink-mq6m3-202-256507",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-silver-mq6j3-2-256495",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-yellow-mq6l3-2-256503",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-blue-mpq93-2022-256498",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-pink-mpqc3-2022-256506",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-silver-mpq83-2022-256494",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-yellow-mpqa3-2022-256502",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-blue-mq6u3-20-256500",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-pink-mq6w3-20-256508",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-silver-mq6t3-256496",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-yellow-mq6v3-256504",

  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-space-g-251166",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-blue-mm-251163",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-purple-251165",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-pink-mm-251164",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-starlig-251162",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-spac-251171",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-blue-251170",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-purp-251167",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-pink-251168",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-star-251169",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-space-251174",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-blue-m-251173",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-purple-251176",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-pink-m-251175",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-starli-251177",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-spa-251182",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-blu-251180",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-pur-251178",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-pin-251181",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-sta-251179",

  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-128gb-sil-213766",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-128gb-spa-213765",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-256gb-sil-213768",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-256gb-spa-213767",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-512gb-sil-213770",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-512gb-spa-213769",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-lte-512gb-213779",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-1tb-silve-213772",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-2tb-silve-213774",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-2tb-space-213773",

  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-128gb-silver-mnxe3-2022-256483",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-128gb-space-gray-mnxd3-202-256473",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-128gb-silver-mp56-256488",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-128gb-space-gray-256478",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-256gb-silver-mnxg3-2022-256484",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-256gb-space-gray-mnxf3-202-256474",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-256gb-silver-mp58-256489",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-256gb-space-gray-256479",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-512gb-silver-mnxj3-2022-256485",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-512gb-space-gray-mnxh3-202-256475",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-512gb-silver-mp5d-256490",

  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-128gb-s-213786",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-128gb-s-213785",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-128-213796",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-128-213795",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-256gb-s-213788",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-256gb-s-213787",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-512gb-s-213790",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-512gb-s-213789",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-1tb-sil-213792",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-1tb-spa-213791",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-1tb-213801",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-2tb-sil-213794",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-2tb-spa-213793",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-2tb-213803",

  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-128gb-silver-mnxq3-2022-256463",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-128gb-space-gray-mnxp3-2-256453",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-128gb-silver-mp-256468",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-128gb-space-gra-256458",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-256gb-silver-mnxt3-2022-256464",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-256gb-space-gray-mnxr3-2-256454",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-256gb-silver-mp-256469",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-256gb-space-gra-256459",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-512gb-silver-mnxv3-2022-256465",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-512gb-space-gray-mnxu3-2-256455",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-512gb-silver-mp-256470",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-512gb-space-gra-256460",

  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-sp-228418",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-pu-228417",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-pi-228416",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-st-228419",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228426",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228425",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228424",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228427",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-s-228422",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-p-228421",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-p-228420",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-s-228423",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228430",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228429",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228428",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228431",
];

async function f() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkMobilePlanetIPAD.length; i += 1) {
    await page.goto(arrLinkMobilePlanetIPAD[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr3);
  }
}
f();
