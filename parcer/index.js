console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanet = [
  'https://mobileplanet.ua/apple-iphone-14-128gb-starlight-mpur3-254637',
  'https://mobileplanet.ua/apple-iphone-14-128gb-product-red-mpva3-254640',
  'https://mobileplanet.ua/apple-iphone-14-128gb-purple-mpv03-254646',
  'https://mobileplanet.ua/apple-iphone-14-128gb-blue-mpvn3-254643',
  'https://mobileplanet.ua/apple-iphone-14-128gb-midnight-mpuf3-254634',
  'https://mobileplanet.ua/apple-iphone-14-128gb-yellow-mr3x3-269128',
  
  'https://mobileplanet.ua/apple-iphone-14-256gb-starlight-mpw43-254638',
  'https://mobileplanet.ua/apple-iphone-14-256gb-product-red-mpwh3-254641',
  'https://mobileplanet.ua/apple-iphone-14-256gb-purple-mpwa3-254647',
  'https://mobileplanet.ua/apple-iphone-14-256gb-blue-mpwp3-254644',
  'https://mobileplanet.ua/apple-iphone-14-256gb-midnight-mpvx3-254635',
  'https://mobileplanet.ua/apple-iphone-14-256gb-yellow-mr3y3-268925',
  
  'https://mobileplanet.ua/apple-iphone-14-512gb-starlight-mpx33-254639',
  'https://mobileplanet.ua/apple-iphone-14-512gb-product-red-mpxg3-254642',
  'https://mobileplanet.ua/apple-iphone-14-512gb-purple-mpx93-254648',
  'https://mobileplanet.ua/apple-iphone-14-512gb-blue-mpxn3-254645',
  'https://mobileplanet.ua/apple-iphone-14-512gb-midnight-mpww3-254636',
  'https://mobileplanet.ua/apple-iphone-14-512gb-yellow-mr513-272475'
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
  "https://skay.ua/uk/iphone-14/61510-apple-iphone-14-512gb-yellow.html",
];
const arrLinkIstore14 = [
  'https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-starlight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-red/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-blue/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-midnight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-yellow/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-starlight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-red/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-blue/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-midnight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-yellow/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-starlight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-red/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-blue/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-midnight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-yellow/'
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
  'https://mobileplanet.ua/apple-iphone-14-plus-128gb-starlight-mq4y3-254622',
  'https://mobileplanet.ua/apple-iphone-14-plus-128gb-product-red-mq513-254625',
  'https://mobileplanet.ua/apple-iphone-14-plus-128gb-purple-mq503-254631',
  'https://mobileplanet.ua/apple-iphone-14-plus-128gb-blue-mq523-254628',
  'https://mobileplanet.ua/apple-iphone-14-plus-128gb-midnight-mq4x3-254619',
  'https://mobileplanet.ua/apple-iphone-14-plus-128gb-yellow-mr693-269368',

  'https://mobileplanet.ua/apple-iphone-14-plus-256gb-starlight-mq553-254623',
  'https://mobileplanet.ua/apple-iphone-14-plus-256gb-product-red-mq573-254626',
  'https://mobileplanet.ua/apple-iphone-14-plus-256gb-purple-mq563-254632',
  'https://mobileplanet.ua/apple-iphone-14-plus-256gb-blue-mq583-254629',
  'https://mobileplanet.ua/apple-iphone-14-plus-256gb-midnight-mq533-254620',
  'https://mobileplanet.ua/apple-iphone-14-plus-256gb-yellow-mr6d3-270614',

  'https://mobileplanet.ua/apple-iphone-14-plus-512gb-starlight-mq5d3-254624',
  'https://mobileplanet.ua/apple-iphone-14-plus-512gb-product-red-mq5f3-254627',
  'https://mobileplanet.ua/apple-iphone-14-plus-512gb-purple-mq5e3-254633',
  'https://mobileplanet.ua/apple-iphone-14-plus-512gb-blue-mq5g3-254630',
  'https://mobileplanet.ua/apple-iphone-14-plus-512gb-midnight-mq593-254621'
];
const arrLinkSkay14Plus = [
  'https://skay.ua/uk/iphone-14-plus/58772-apple-iphone-14-plus-128gb-starlight.html',
  'https://skay.ua/uk/iphone-14-plus/58773-apple-iphone-14-plus-128gb-product-red.html',
  'https://skay.ua/uk/iphone-14-plus/58770-apple-iphone-14-plus-128gb-purple.html',
  'https://skay.ua/uk/iphone-14-plus/58768-apple-iphone-14-plus-128gb-blue.html',
  'https://skay.ua/uk/iphone-14-plus/58771-apple-iphone-14-plus-128gb-midnight.html',
  'https://skay.ua/uk/iphone-14-plus/61507-apple-iphone-14-plus-128gb-yellow.html',

  'https://skay.ua/uk/iphone-14-plus/58777-apple-iphone-14-plus-256gb-starlight.html',
  'https://skay.ua/uk/iphone-14-plus/58778-apple-iphone-14-plus-256gb-product-red.html',
  'https://skay.ua/uk/iphone-14-plus/58775-apple-iphone-14-plus-256gb-purple.html',
  'https://skay.ua/uk/iphone-14-plus/58774-apple-iphone-14-plus-256gb-blue.html',
  'https://skay.ua/uk/iphone-14-plus/58776-apple-iphone-14-plus-256gb-midnight.html',
  'https://skay.ua/uk/iphone-14-plus/61511-apple-iphone-14-plus-256gb-yellow.html',

  'https://skay.ua/uk/iphone-14-plus/58781-apple-iphone-14-plus-512gb-starlight.html',
  'https://skay.ua/uk/iphone-14-plus/58782-apple-iphone-14-plus-512gb-product-red.html',
  'https://skay.ua/uk/iphone-14-plus/58816-apple-iphone-14-plus-512gb-purple.html',
  'https://skay.ua/uk/iphone-14-plus/58779-apple-iphone-14-plus-512gb-blue.html',
  'https://skay.ua/uk/iphone-14-plus/58780-apple-iphone-14-plus-512gb-midnight.html',
  'https://skay.ua/uk/iphone-14-plus/61512-apple-iphone-14-plus-512gb-yellow.html'
];
const arrLinkIstore14Plus = [
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-starlight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-red/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-blue/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-midnight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-yellow/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-starlight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-red/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-blue/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-midnight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-yellow/',

  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-starlight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-red/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-purple/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-blue/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-midnight/',
  'https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-yellow/'
];
const arrLinkJabko14Plus = [
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--starlight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--red-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--pink-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--midnight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-128gb--yellow-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--starlight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--red-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--pink-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--midnight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-256gb--yellow-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--starlight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--red-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--pink-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--blue-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--midnight-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-512gb--yellow-'
];

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

const arrLinkMobilePlanet14ProESIM = [
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-deep-purple-mq0e3-254677',
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-space-black-mpxt3-254665',
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-silver-mq003-254669',
  'https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-gold-mq063-254673',

  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-deep-purple-mq1d3-254678',
  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-space-black-mq0n3-254666',
  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-silver-mq0x3-254670',
  'https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-gold-mq163-254674',

  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-deep-purple-mq273-254679',
  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-space-black-mq1k3-254667',
  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-silver-mq1u3-254671',
  'https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-gold-mq213-254675',

  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-deep-purple-mq303-254680',
  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-space-black-mq2e3-254668',
  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-silver-mq2l3-254672',
  'https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-gold-mq2t3-254676'
];
const arrLinkSkay14ProESIM = [
  'https://skay.ua/uk/iphone-14-pro/59589-apple-iphone-14-pro-128gb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/59591-apple-iphone-14-pro-128gb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/59625-apple-iphone-14-pro-128gb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro/59242-apple-iphone-14-pro-128gb-esim-gold.html',

  'https://skay.ua/uk/iphone-14-pro/59450-apple-iphone-14-pro-256gb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/59448-apple-iphone-14-pro-256gb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/59449-apple-iphone-14-pro-256gb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro/59243-apple-iphone-14-pro-256gb-esim-gold.html',

  'https://skay.ua/uk/iphone-14-pro/59475-apple-iphone-14-pro-512gb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/59447-apple-iphone-14-pro-512gb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/59703-apple-iphone-14-pro-512gb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro/59446-apple-iphone-14-pro-512gb-esim-gold.html',

  'https://skay.ua/uk/iphone-14-pro/59590-apple-iphone-14-pro-1tb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro/59592-apple-iphone-14-pro-1tb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro/59813-apple-iphone-14-pro-1tb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro/59812-apple-iphone-14-pro-1tb-esim-gold.html'
];
const arrLinkIstore14ProESIM = [
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-gold/',

  'https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-gold/',

  'https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-gold/',

  'https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-gold/'
];
const arrLinkJabko14ProESIM = [
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--gold---e-sim-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--gold---e-sim-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--gold---e-sim-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--gold---e-sim-'
]; 

const arrLinkMobilePlanet14ProMaxESIM = [
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-deep-purple-mq8-254661',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-space-black-mq8-254649',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-silver-mq8p3-254653',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-gold-mq8q3-254657',

  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-deep-purple-mq8-254662',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-space-black-mq8-254650',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-silver-mq8u3-254654',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-gold-mq8v3-254658',

  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-deep-purple-mq9-254663',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-space-black-mq8-254651',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-silver-mq8y3-254655',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-gold-mq903-254659',

  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-deep-purple-mq953-254664',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-space-black-mq923-254652',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-silver-mq933-254656',
  'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-gold-mq943-254660'
];
const arrLinkSkay14ProMaxESIM = [
  'https://skay.ua/uk/iphone-14-pro-max/59399-apple-iphone-14-pro-max-128gb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/59442-apple-iphone-14-pro-max-128gb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/59445-apple-iphone-14-pro-max-128gb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/59441-apple-iphone-14-pro-max-128gb-esim-gold.html',

  'https://skay.ua/uk/iphone-14-pro-max/59139-apple-iphone-14-pro-max-256gb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/59443-apple-iphone-14-pro-max-256gb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/59444-apple-iphone-14-pro-max-256gb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/59244-apple-iphone-14-pro-max-256gb-esim-gold.html',

  'https://skay.ua/uk/iphone-14-pro-max/59140-apple-iphone-14-pro-max-512gb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/59119-apple-iphone-14-pro-max-512gb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/59603-apple-iphone-14-pro-max-512gb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/59440-apple-iphone-14-pro-max-512gb-esim-gold.html',

  'https://skay.ua/uk/iphone-14-pro-max/59476-apple-iphone-14-pro-max-1tb-esim-deep-purple.html',
  'https://skay.ua/uk/iphone-14-pro-max/59605-apple-iphone-14-pro-max-1tb-esim-space-black.html',
  'https://skay.ua/uk/iphone-14-pro-max/59602-apple-iphone-14-pro-max-1tb-esim-silver.html',
  'https://skay.ua/uk/iphone-14-pro-max/59604-apple-iphone-14-pro-max-1tb-esim-gold.html'
];
const arrLinkIstore14ProMaxESIM = [
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-gold/',

  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-gold/',

  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512-gb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512-gb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512gb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512gb-esim-gold/',

  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-deep-purple/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-space-black/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-silver/',
  'https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-gold/'
];
const arrLinkJabko14ProMaxESIM = [
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--gold---e-sim-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--gold---e-sim-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--gold---e-sim-',

  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--deep-purple---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--space-black---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--silver---e-sim-',
  'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--gold---e-sim-'
];





  async function f() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    for (let i = 0; i < arrLinkMobilePlanet.length; i += 1) {
      await page.goto(arrLinkMobilePlanet[i]);
      const n = await page.$("#txt");
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return}
      
    });
    
    console.log(arr3)
    } 
    for (let i = 0; i < arrLinkSkay14.length; i += 1) {
      await page.goto(arrLinkSkay14[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstore14.length; i += 1) {
      await page.goto(arrLinkIstore14[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text3 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text3 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return text3}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabko14.length; i += 1) {
      await page.goto(arrLinkJabko14[i]);
      const n = await page.$("#txt");
  
    let arr2 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr2)
    }
    


    for (let i = 0; i < arrLinkMobilePlanet14Plus.length; i += 1) {
      await page.goto(arrLinkMobilePlanet14Plus[i]);
      const n = await page.$("#txt");
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr3)
    } 
    for (let i = 0; i < arrLinkSkay14Plus.length; i += 1) {
      await page.goto(arrLinkSkay14Plus[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstore14Plus.length; i += 1) {
      await page.goto(arrLinkIstore14Plus[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabko14Plus.length; i += 1) {
      await page.goto(arrLinkJabko14Plus[i]);
      const n = await page.$("#txt");
  
    let arr2 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr2)
    }



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
      } else {return text2}
      
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
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr3)
    }
    for (let i = 0; i < arrLinkSkay14ProMax.length; i += 1) {
      await page.goto(arrLinkSkay14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstore14ProMax.length; i += 1) {
      await page.goto(arrLinkIstore14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabko14ProMax.length; i += 1) {
      await page.goto(arrLinkJabko14ProMax[i]);
      const n = await page.$("#txt");
  
    let arr2 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr2)
    }




    for (let i = 0; i < arrLinkMobilePlanet14ProESIM.length; i += 1) {
      await page.goto(arrLinkMobilePlanet14ProESIM[i]);
      const n = await page.$("#txt");
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr3)
    }
    for (let i = 0; i < arrLinkSkay14ProESIM.length; i += 1) {
      await page.goto(arrLinkSkay14ProESIM[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstore14ProESIM.length; i += 1) {
      await page.goto(arrLinkIstore14ProESIM[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabko14ProESIM.length; i += 1) {
      await page.goto(arrLinkJabko14ProESIM[i]);
      const n = await page.$("#txt");
  
    let arr2 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-new__uah") != null){
        return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
      } else {return text2}
      
    });
    
    console.log(arr2)
    }




    for (let i = 0; i < arrLinkMobilePlanet14ProMaxESIM.length; i += 1) {
      await page.goto(arrLinkMobilePlanet14ProMaxESIM[i]);
      const n = await page.$("#txt");
  
    let arr3 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".price-value") != null){
        return text2 + 'MP: ' + document.querySelector(".price-value").innerText
      } else {return text2}
      
    });
    
    console.log(arr3)
    }
    for (let i = 0; i < arrLinkSkay14ProMaxESIM.length; i += 1) {
      await page.goto(arrLinkSkay14ProMaxESIM[i]);
      const n = await page.$("#txt");
  
    let arr1 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector("#our_price_display") != null){
        return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
      } else {return}
      
    });
    
    console.log(arr1)
    }
    for (let i = 0; i < arrLinkIstore14ProMaxESIM.length; i += 1) {
      await page.goto(arrLinkIstore14ProMaxESIM[i]);
      const n = await page.$("#txt");
  
    let arr4 = await page.evaluate(() => {
      
      let text2 = document.querySelector("h1").innerText;
      if(document.querySelector(".product_price ") != null){
        return text2 + 'I: ' + document.querySelector(".product_price ").innerText
      } else {return}
      
    });
    
    console.log(arr4)
    }
    for (let i = 0; i < arrLinkJabko14ProMaxESIM.length; i += 1) {
      await page.goto(arrLinkJabko14ProMaxESIM[i]);
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

