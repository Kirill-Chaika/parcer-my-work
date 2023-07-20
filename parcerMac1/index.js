console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkMobilePlanetMac = [
    'https://mobileplanet.ua/apple-macbook-air-13-space-gray-mgn63-20-193343',
    'https://mobileplanet.ua/apple-macbook-air-13-space-gray-mgn73-20-193345',
    'https://mobileplanet.ua/apple-macbook-air-13-silver-mgn93-2020-193342',
    'https://mobileplanet.ua/apple-macbook-air-13-silver-mgna3-2020-193344',
    'https://mobileplanet.ua/apple-macbook-air-13-gold-mgnd3-2020-193341',
    
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-space-gray-mlx-253143',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-space-gray-mlx-253327',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-silver-mlxy3-2-253326',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-silver-mly03-2-253142',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-starlight-mly1-253144',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-starlight-mly2-253328',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-midnight-mly33-253140',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-midnight-mly43-253141',

    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2021-mkgp3-237453',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2021-mkgq3-237454',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-mkgr3-2021-238146',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-mkgt3-2021-238139',

    'https://mobileplanet.ua/Apple-MacBook-Pro-16-Space-Gray-MVVJ2-20-142026',

    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2021-mk183-237455',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-mk193-2021-238000',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-mk1a3-2021-238001',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1e3-2021-237970',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1f3-2021-237971',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1h3-2021-237972',

    'https://mobileplanet.ua/apple-macbook-pro-13-space-gray-myd82-20-190626',
    'https://mobileplanet.ua/apple-macbook-pro-13-m1-space-gray-myd92-190757',
    'https://mobileplanet.ua/apple-macbook-pro-13-silver-myda2-2020-190627',
    'https://mobileplanet.ua/apple-macbook-pro-13-m1-silver-mydc2-202-190758',

    'https://mobileplanet.ua/apple-macbook-pro-13-m2-space-gray-mneh3-252071',
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-space-gray-mnej3-252073',
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-silver-mnep3-252072',
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-silver-mneq3-252074',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphe3-265267',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphf3-265268',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphg3-265269',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-2023-mphh3-265264',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-2023-mphk3-265266',

    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnw83-265273',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnw93-265274',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnwa3-265275',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-2023-mnwe3-265272',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-2023-mnwc3-265270',

    'https://mobileplanet.ua/apple-macbook-air-15-m2-space-gray-2023-mqkp3-273143',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-silver-2023-mqkr3-273141',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-midnight-2023-mqkw3-273139',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-starlight-2023-mqku3-273145',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-space-gray-2023-mqkq3-273144',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-silver-2023-mqkt3-273142',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-midnight-2023-mqkx3-273140',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-starlight-2023-mqkv3-273146'
];
const arrLinkSkayMac = [
    'https://skay.ua/uk/macbook-air/47261-apple-macbook-air-13-m1-chip-256gb-mgn63-2020-space-gray.html?search_query=MGN63&results=4',
    'https://skay.ua/uk/macbook-air/47266-apple-macbook-air-13-m1-chip-512gb-mgn73-2020-space-grey.html',
    'https://skay.ua/uk/macbook-air/47269-apple-macbook-air-13-m1-chip-256gb-mgn93-2020-silver.html',
    'https://skay.ua/uk/macbook-air/47270-apple-macbook-air-13-m1-chip-512gb-mgna3-2020-silver.html',
    'https://skay.ua/uk/macbook-air/47267-apple-macbook-air-13-m1-chip-256gb-mgnd3-2020-gold.html',
    'https://skay.ua/uk/macbook-air/47268-apple-macbook-air-13-m1-chip-512gb-mgne3-2020-gold.html',

    'https://skay.ua/uk/macbook-air/58023-apple-macbook-air-13-m2-chip-256gb-mlxw3-2022-space-gray.html',
    'https://skay.ua/uk/macbook-air/58026-apple-macbook-air-13-m2-chip-512gb-mlxx3-2022-space-gray.html',
    'https://skay.ua/uk/macbook-air/58024-apple-macbook-air-13-m2-chip-256gb-mlxy3-2022-silver.html',
    'https://skay.ua/uk/macbook-air/58027-apple-macbook-air-13-m2-chip-512gb-mly03-2022-silver.html',
    'https://skay.ua/uk/macbook-air/58022-apple-macbook-air-13-m2-chip-256gb-mly13-2022-starlight.html',
    'https://skay.ua/uk/macbook-air/58025-apple-macbook-air-13-m2-chip-512gb-mly23-2022-starlight.html',
    'https://skay.ua/uk/macbook-air/58020-apple-macbook-air-13-m2-chip-256gb-mly33-2022-midnight.html',
    'https://skay.ua/uk/macbook-air/58021-apple-macbook-air-13-m2-chip-512gb-mly43-2022-midnight.html',

    'https://skay.ua/uk/macbook-pro-2021/54396-apple-macbook-pro-14-m1-pro-chip-512gb-mkgp3-2021-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2021/54403-apple-macbook-pro-14-m1-pro-chip-1tb-mkgq3-2021-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2021/54402-apple-macbook-pro-14-m1-pro-chip-512gb-mkgr3-2021-silver.html',
    'https://skay.ua/uk/macbook-pro-2021/54404-apple-macbook-pro-14-m1-pro-chip-1tb-mkgt3-2021-silver.html',

    'https://skay.ua/uk/macbook-pro-2019/35731-apple-macbook-pro-16-retina-with-touch-bar-mvvj2-2019-space-gray.html',

    'https://skay.ua/uk/macbook-pro-2021/54405-apple-macbook-pro-16-m1-pro-chip-512gb-mk183-2021-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2021/54407-apple-macbook-pro-16-m1-pro-chip-1tb-mk193-2021-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2021/54409-apple-macbook-pro-16-m1-max-chip-1tb-mk1a3-2021-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2021/54406-apple-macbook-pro-16-m1-pro-chip-512gb-mk1e3-2021-silver.html',
    'https://skay.ua/uk/macbook-pro-2021/54408-apple-macbook-pro-16-m1-pro-chip-1tb-mk1f3-2021-silver.html',
    'https://skay.ua/uk/macbook-pro-2021/54416-apple-macbook-pro-16-m1-max-chip-1tb-mk1h3-2021-silver.html',

    'https://skay.ua/uk/macbook-pro-2020/47277-apple-macbook-pro-13-m1-chip-256gb-myd82-2020-space-grey.html',
    'https://skay.ua/uk/macbook-pro-2020/47278-apple-macbook-pro-13-m1-chip-512gb-myd92-2020-space-grey.html',
    'https://skay.ua/uk/macbook-pro-2020/47279-apple-macbook-pro-13-m1-chip-256gb-myda2-2020-silver.html',
    'https://skay.ua/uk/macbook-pro-2020/47280-apple-macbook-pro-13-m1-chip-512gb-mydc2-2020-silver.html',
    
    'https://skay.ua/uk/macbook-pro-2022/57883-apple-macbook-pro-13-m2-chip-256gb-mneh3-2022-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2022/57885-apple-macbook-pro-13-m2-chip-512gb-mnej3-2022-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2022/57884-apple-macbook-pro-13-m2-chip-256gb-mnep3-2022-silver.html',
    'https://skay.ua/uk/macbook-pro-2022/57886-apple-macbook-pro-13-m2-chip-512gb-mneq3-2022-silver.html',
    
    'https://skay.ua/uk/macbook-pro-2023/60610-apple-macbook-pro-14-m2-pro-chip-512gb-mphe3-2023-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2023/60612-apple-macbook-pro-14-m2-pro-chip-1tb-mphf3-2023-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2023/60614-apple-macbook-pro-14-m2-max-chip-1tb-mphg3-2023-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2023/60611-apple-macbook-pro-14-m2-pro-chip-512gb-mphh3-2023-silver.html',
    'https://skay.ua/uk/macbook-pro-2023/60615-apple-macbook-pro-14-m2-max-chip-1tb-mphk3-2023-silver.html',
    'https://skay.ua/uk/macbook-pro-2023/60616-apple-macbook-pro-16-m2-pro-chip-512gb-mnw83-2023-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2023/60618-apple-macbook-pro-16-m2-pro-chip-1tb-mnw93-2023-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2023/60620-apple-macbook-pro-16-m2-max-chip-1tb-mnwa3-2023-space-gray.html',
    'https://skay.ua/uk/macbook-pro-2023/60621-apple-macbook-pro-16-m2-max-chip-1tb-mnwe3-2023-silver.html',
    'https://skay.ua/uk/macbook-pro-2023/60617-apple-macbook-pro-16-m2-pro-chip-512gb-mnwc3-2023-silver.html',

    'https://skay.ua/uk/macbook-air/64278-apple-macbook-air-15-m2-chip-256gb-mqkp3-2023-space-gray.html',
    'https://skay.ua/uk/macbook-air/64279-apple-macbook-air-15-m2-chip-256gb-mqkr3-2023-silver.html',
    'https://skay.ua/uk/macbook-air/64272-apple-macbook-air-15-m2-chip-256gb-mqkw3-2023-midnight.html',
    'https://skay.ua/uk/macbook-air/64277-apple-macbook-air-15-m2-chip-256gb-mqku3-2023-starlight.html',
    'https://skay.ua/uk/macbook-air/64283-apple-macbook-air-15-m2-chip-512gb-mqkq3-2023-space-gray.html',
    'https://skay.ua/uk/macbook-air/64284-apple-macbook-air-15-m2-chip-512gb-mqkt3-2023-silver.html',
    'https://skay.ua/uk/macbook-air/64281-apple-macbook-air-15-m2-chip-512gb-mqkx3-2023-midnight.html',
    'https://skay.ua/uk/macbook-air/64282-apple-macbook-air-15-m2-chip-512gb-mqkv3-2023-starlight.html'
];



  async function f() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();


    for (let i = 0; i < arrLinkMobilePlanetMac.length; i += 1) {
      await page.goto(arrLinkMobilePlanetMac[i]);
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
      await page.goto(arrLinkSkayMac[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }

  }
  f()

