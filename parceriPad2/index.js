console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkSkayIPAD = [
  "https://skay.ua/uk/ipad-9-2021/53840-apple-ipad-102-9-gen-64gb-wi-fi-2021-silver-mk2l3.html",
  "https://skay.ua/uk/ipad-9-2021/53839-apple-ipad-102-9-gen-64gb-wi-fi-2021-space-gray-mk2k3.html",
  "https://skay.ua/uk/ipad-9-2021/53844-apple-ipad-102-9-gen-64gb-wi-fi4g-2021-silver-mk673.html",
  "https://skay.ua/uk/ipad-9-2021/53843-apple-ipad-102-9-gen-64gb-wi-fi4g-2021-space-gray-mk663.html",

  "https://skay.ua/uk/ipad-9-2021/53842-apple-ipad-102-9-gen-256gb-wi-fi-2021-silver-mk2p3.html",
  "https://skay.ua/uk/ipad-9-2021/53841-apple-ipad-102-9-gen-256gb-wi-fi-2021-space-gray-mk2n3.html",
  "https://skay.ua/uk/ipad-9-2021/53846-apple-ipad-102-9-gen-256gb-wi-fi4g-2021-silver-mk6a3mk4h3.html",
  "https://skay.ua/uk/ipad-9-2021/53845-apple-ipad-102-9-gen-256gb-wi-fi4g-2021-space-gray-mk693.html",

  "https://skay.ua/uk/ipad-10-2022/59413-apple-ipad-109-10-gen-64gb-wi-fi-2022-blue-mpq13.html",
  "https://skay.ua/uk/ipad-10-2022/59479-apple-ipad-109-10-gen-64gb-wi-fi-2022-pink-mpq33.html",
  "https://skay.ua/uk/ipad-10-2022/59480-apple-ipad-109-10-gen-64gb-wi-fi-2022-silver-mpq03.html",
  "https://skay.ua/uk/ipad-10-2022/59481-apple-ipad-109-10-gen-64gb-wi-fi-2022-yellow-mpq23.html",

  "https://skay.ua/uk/ipad-10-2022/59486-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-blue-mq6k3.html",
  "https://skay.ua/uk/ipad-10-2022/59487-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-pink-mq6m3.html",
  "https://skay.ua/uk/ipad-10-2022/59488-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-silver-mq6j3.html",
  "https://skay.ua/uk/ipad-10-2022/59489-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-yellow-mq6l3.html",

  "https://skay.ua/uk/ipad-10-2022/59482-apple-ipad-109-10-gen-256gb-wi-fi-2022-blue-mpq93.html",
  "https://skay.ua/uk/ipad-10-2022/59483-apple-ipad-109-10-gen-256gb-wi-fi-2022-pink-mpqc3.html",
  "https://skay.ua/uk/ipad-10-2022/59484-apple-ipad-109-10-gen-256gb-wi-fi-2022-silver-mpq83.html",
  "https://skay.ua/uk/ipad-10-2022/59485-apple-ipad-109-10-gen-256gb-wi-fi-2022-yellow-mpqa3.html",

  "https://skay.ua/uk/ipad-10-2022/59490-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-blue-mq6u3.html",
  "https://skay.ua/uk/ipad-10-2022/59491-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-pink-mq6w3.html",
  "https://skay.ua/uk/ipad-10-2022/59492-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-silver-mq6t3.html",
  "https://skay.ua/uk/ipad-10-2022/59493-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-yellow-mq6v3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57645-apple-ipad-air-m1-2022-109-64gb-wi-fi-space-gray-mm9c3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57649-apple-ipad-air-m1-2022-109-64gb-wi-fi-blue-mm9e3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57648-apple-ipad-air-m1-2022-109-64gb-wi-fi-purple-mme23.html",
  "https://skay.ua/uk/ipad-air-5-2022/57647-apple-ipad-air-m1-2022-109-64gb-wi-fi-pink-mm9d3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57650-apple-ipad-air-m1-2022-109-64gb-wi-fi-starlight-mm9f3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57646-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-space-gray-mm6r3mm753.html",
  "https://skay.ua/uk/ipad-air-5-2022/57659-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-blue-mm6u3mm773.html",
  "https://skay.ua/uk/ipad-air-5-2022/57658-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-purple-mme93.html",
  "https://skay.ua/uk/ipad-air-5-2022/57657-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-pink-mm6t3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57660-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-starlight-mm6v3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57651-apple-ipad-air-m1-2022-109-256gb-wi-fi-space-gray-mm9l3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57654-apple-ipad-air-m1-2022-109-256gb-wi-fi-blue-mm9n3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57653-apple-ipad-air-m1-2022-109-256gb-wi-fi-purple-mme63.html",
  "https://skay.ua/uk/ipad-air-5-2022/57652-apple-ipad-air-m1-2022-109-256gb-wi-fi-pink-mm9m3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57655-apple-ipad-air-m1-2022-109-256gb-wi-fi-starlight-mm9p3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57661-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-space-gray-mm713mm7e3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57664-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-blue-mm733mm7g3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57663-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-purple-mmed3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57662-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-pink-mm723mm7f3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57665-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-starlight-mm743mm7h3.html",

  "https://skay.ua/uk/ipad-pro/50825-apple-ipad-pro-m1-2021-11-128gb-wi-fi-silver-mhw63.html",
  "https://skay.ua/uk/ipad-pro/50820-apple-ipad-pro-m1-2021-11-128gb-wi-fi-space-grey-mhqr3.html",
  "https://skay.ua/uk/ipad-pro/50835-apple-ipad-pro-m1-2021-11-128gb-wi-fi4g-silver-mhw63.html",
  "https://skay.ua/uk/ipad-pro/50830-apple-ipad-pro-m1-2021-11-128gb-wi-fi4g-space-grey-mhw53.html",

  "https://skay.ua/uk/ipad-pro/50826-apple-ipad-pro-m1-2021-11-256gb-wi-fi-silver-mhqv3.html",
  "https://skay.ua/uk/ipad-pro/50821-apple-ipad-pro-m1-2021-11-256gb-wi-fi-space-grey-mhqu3.html",
  "https://skay.ua/uk/ipad-pro/50836-apple-ipad-pro-m1-2021-11-256gb-wi-fi4g-silver-mhw83.html",
  "https://skay.ua/uk/ipad-pro/50831-apple-ipad-pro-m1-2021-11-256gb-wi-fi4g-space-grey-mhw73.html",

  "https://skay.ua/uk/ipad-pro/50827-apple-ipad-pro-m1-2021-11-512gb-wi-fi-silver-mhqx3.html",
  "https://skay.ua/uk/ipad-pro/50822-apple-ipad-pro-m1-2021-11-512gb-wi-fi-space-grey-mhqw3.html",
  "https://skay.ua/uk/ipad-pro/50837-apple-ipad-pro-m1-2021-11-512gb-wi-fi4g-silver-mhwa3.html",
  "https://skay.ua/uk/ipad-pro/50832-apple-ipad-pro-m1-2021-11-512gb-wi-fi4g-space-grey-mhw93mhmx3.html",

  "https://skay.ua/uk/ipad-pro/50828-apple-ipad-pro-m1-2021-11-1tb-wi-fi-silver-mhr03.html",
  "https://skay.ua/uk/ipad-pro/50823-apple-ipad-pro-m1-2021-11-1tb-wi-fi-space-grey-mhqy3.html",
  "https://skay.ua/uk/ipad-pro/50838-apple-ipad-pro-m1-2021-11-1tb-wi-fi4g-silver-mhwd3.html",
  "https://skay.ua/uk/ipad-pro/50833-apple-ipad-pro-m1-2021-11-1tb-wi-fi4g-space-grey-mhwc3.html",

  "https://skay.ua/uk/ipad-pro/50829-apple-ipad-pro-m1-2021-11-2tb-wi-fi-silver-mhr33.html",
  "https://skay.ua/uk/ipad-pro/50824-apple-ipad-pro-m1-2021-11-2tb-wi-fi-space-grey-mhr23.html",
  "https://skay.ua/uk/ipad-pro/50839-apple-ipad-pro-m1-2021-11-2tb-wi-fi4g-silver-mhwf3.html",
  "https://skay.ua/uk/ipad-pro/50834-apple-ipad-pro-m1-2021-11-2tb-wi-fi4g-space-grey-mhwe3.html",

  "https://skay.ua/uk/ipad-pro/59643-apple-ipad-pro-m2-2022-11-128gb-wi-fi-silver-mnxe3.html",
  "https://skay.ua/uk/ipad-pro/59607-apple-ipad-pro-m2-2022-11-128gb-wi-fi-space-gray-mnxd3.html",
  "https://skay.ua/uk/ipad-pro/59658-apple-ipad-pro-m2-2022-11-128gb-wi-fi4g-silver-mnyd3mp563.html",
  "https://skay.ua/uk/ipad-pro/59657-apple-ipad-pro-m2-2022-11-128gb-wi-fi4g-space-gray-mp553mnyc3.html",

  "https://skay.ua/uk/ipad-pro/59645-apple-ipad-pro-m2-2022-11-256gb-wi-fi-silver-mnxg3.html",
  "https://skay.ua/uk/ipad-pro/59644-apple-ipad-pro-m2-2022-11-256gb-wi-fi-space-gray-mnxf3.html",
  "https://skay.ua/uk/ipad-pro/59660-apple-ipad-pro-m2-2022-11-256gb-wi-fi4g-silver-mp583mnyf3.html",
  "https://skay.ua/uk/ipad-pro/59659-apple-ipad-pro-m2-2022-11-256gb-wi-fi4g-space-gray-mp573mnye3.html",

  "https://skay.ua/uk/ipad-pro/59652-apple-ipad-pro-m2-2022-11-512gb-wi-fi-silver-mnxj3.html",
  "https://skay.ua/uk/ipad-pro/59647-apple-ipad-pro-m2-2022-11-512gb-wi-fi-space-gray-mnxh3.html",

  "https://skay.ua/uk/ipad-pro/59661-apple-ipad-pro-m2-2022-11-512gb-wi-fi4g-space-gray-mnyg3.html",

  "https://skay.ua/uk/ipad-pro/50845-apple-ipad-pro-m1-2021-129-128gb-wi-fi-silver-mhng3.html",
  "https://skay.ua/uk/ipad-pro/50840-apple-ipad-pro-m1-2021-129-128gb-wi-fi-space-grey-mhnf3.html",
  "https://skay.ua/uk/ipad-pro/50861-apple-ipad-pro-m1-2021-129-128gb-wi-fi-4g-silver-mhnt3mhr53.html",
  "https://skay.ua/uk/ipad-pro/50856-apple-ipad-pro-m1-2021-129-128gb-wi-fi-4g-space-grey-mhr43mhnr3.html",

  "https://skay.ua/uk/ipad-pro/50846-apple-ipad-pro-m1-2021-129-256gb-wi-fi-silver-mhnj3.html",
  "https://skay.ua/uk/ipad-pro/50841-apple-ipad-pro-m1-2021-129-256gb-wi-fi-space-grey-mhnh3.html",
  "https://skay.ua/uk/ipad-pro/50862-apple-ipad-pro-m1-2021-129-256gb-wi-fi-4g-silver-mhr73.html",
  "https://skay.ua/uk/ipad-pro/50857-apple-ipad-pro-m1-2021-129-256gb-wi-fi-4g-space-grey-mhr63.html",

  "https://skay.ua/uk/ipad-pro/50847-apple-ipad-pro-m1-2021-129-512gb-wi-fi-silver-mhnl3.html",
  "https://skay.ua/uk/ipad-pro/50842-apple-ipad-pro-m1-2021-129-512gb-wi-fi-space-grey-mhnk3.html",
  "https://skay.ua/uk/ipad-pro/50863-apple-ipad-pro-m1-2021-129-512gb-wi-fi-4g-silver-mhr93.html",
  "https://skay.ua/uk/ipad-pro/50858-apple-ipad-pro-m1-2021-129-512gb-wi-fi-4g-space-grey-mhr83.html",

  "https://skay.ua/uk/ipad-pro/50848-apple-ipad-pro-m1-2021-129-1tb-wi-fi-silver-mhnn3.html",
  "https://skay.ua/uk/ipad-pro/50843-apple-ipad-pro-m1-2021-129-1tb-wi-fi-space-grey-mhnm3.html",
  "https://skay.ua/uk/ipad-pro/50864-apple-ipad-pro-m1-2021-129-1tb-wi-fi-4g-silver-mhrc3.html",
  "https://skay.ua/uk/ipad-pro/50859-apple-ipad-pro-m1-2021-129-1tb-wi-fi-4g-space-grey-mhp13mhra3.html",

  "https://skay.ua/uk/ipad-pro/50849-apple-ipad-pro-m1-2021-129-2tb-wi-fi-silver-mhnq3.html",
  "https://skay.ua/uk/ipad-pro/50844-apple-ipad-pro-m1-2021-129-2tb-wi-fi-space-grey-mhnp3.html",
  "https://skay.ua/uk/ipad-pro/50865-apple-ipad-pro-m1-2021-129-2tb-wi-fi-4g-silver-mhre3.html",
  "https://skay.ua/uk/ipad-pro/50860-apple-ipad-pro-m1-2021-129-2tb-wi-fi-4g-space-grey-mhrd3.html",

  "https://skay.ua/uk/ipad-pro/59678-apple-ipad-pro-m2-2022-129-128gb-wi-fi-silver-mnxq3.html",
  "https://skay.ua/uk/ipad-pro/59677-apple-ipad-pro-m2-2022-129-128gb-wi-fi-space-gray-mnxp3.html",
  "https://skay.ua/uk/ipad-pro/59668-apple-ipad-pro-m2-2022-129-128gb-wi-fi4g-silver-mp5y3mp1y3.html",
  "https://skay.ua/uk/ipad-pro/59667-apple-ipad-pro-m2-2022-129-128gb-wi-fi4g-space-gray-mp5x3mp1x3.html",

  "https://skay.ua/uk/ipad-pro/59680-apple-ipad-pro-m2-2022-129-256gb-wi-fi-silver-mnxt3.html",
  "https://skay.ua/uk/ipad-pro/59679-apple-ipad-pro-m2-2022-129-256gb-wi-fi-space-gray-mnxr3.html",
  "https://skay.ua/uk/ipad-pro/59670-apple-ipad-pro-m2-2022-129-256gb-wi-fi4g-silver-mp213.html",
  "https://skay.ua/uk/ipad-pro/59669-apple-ipad-pro-m2-2022-129-256gb-wi-fi4g-space-gray-mp203.html",

  "https://skay.ua/uk/ipad-pro/59682-apple-ipad-pro-m2-2022-129-512gb-wi-fi-silver-mnxv3.html",
  "https://skay.ua/uk/ipad-pro/59681-apple-ipad-pro-m2-2022-129-512gb-wi-fi-space-gray-mnxu3.html",
  "https://skay.ua/uk/ipad-pro/59672-apple-ipad-pro-m2-2022-129-512gb-wi-fi4g-silver-mp233mp633.html",
  "https://skay.ua/uk/ipad-pro/59671-apple-ipad-pro-m2-2022-129-512gb-wi-fi4g-space-gray-mp623mp223.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53851-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-space-gray-mk7m3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53850-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-purple-mk7r3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53849-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-pink-mlwl3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53847-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-starlight-mk7p3.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53859-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-space-gray-mk893.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53858-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-purple-mk8e3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53857-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-pink-mlx43.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53856-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-starlight-mk8c3.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53855-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-space-gray-mk7t3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53854-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-purple-mk7x3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53853-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-pink-mlwr3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53852-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-starlight-mk7v3.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53863-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-space-gray-mk8f3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53862-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-purple-mk8k3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53861-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-pink-mlx93.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53860-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-starlight-mk8h3.html"
];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkSkayIPAD.length; i += 1) {
    await page.goto(arrLinkSkayIPAD[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr1);
  }
}
f();
