console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanetAWS = [
  "https://mobileplanet.ua/apple-watch-series-7-41mm-gps-starlight-235148",
  "https://mobileplanet.ua/apple-watch-series-7-41mm-gps-midnight-a-235151",
  "https://mobileplanet.ua/apple-watch-series-7-41mm-gps-green-alum-235145",
  "https://mobileplanet.ua/apple-watch-series-7-41mm-gps-blue-alumi-235144",
  "https://mobileplanet.ua/apple-watch-series-7-41mm-gps-product-re-235152",
  "https://mobileplanet.ua/apple-watch-series-7-gps-plus-cellular-4-251993",
  "https://mobileplanet.ua/apple-watch-series-7-gps-cellular-41mm-silver-stai-237444",
  "https://mobileplanet.ua/apple-watch-series-7-gps-cellular-41mm-gold-stainl-237440",

  "https://mobileplanet.ua/apple-watch-series-7-45mm-gps-starlight-235150",
  "https://mobileplanet.ua/apple-watch-series-7-45mm-gps-green-alum-235143",
  "https://mobileplanet.ua/apple-watch-series-7-nike-45mm-gps-starl-235147",
  "https://mobileplanet.ua/apple-watch-series-7-45mm-gps-midnight-a-235146",
  "https://mobileplanet.ua/apple-watch-series-7-45mm-gps-product-re-235153",
  "https://mobileplanet.ua/apple-watch-series-7-45mm-gps-blue-alumi-235149",
  "https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-silver-stai-237446",
  "https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-gold-stainl-237450",
  "https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-graphite-s-237452",
  "https://mobileplanet.ua/apple-watch-series-7-nike-45mm-gps-midni-235155",
  "https://mobileplanet.ua/apple-watch-series-7-gps-cellular-45mm-s-246496",

  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-aluminum-ca-254733",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-a-259901",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-a-265206",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-starlight-aluminum-c-254736",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-starlight-260904",
  "https://mobileplanet.ua/apple-watch-series-8-41mm-gps-starlight-260762",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-silver-aluminum-case-254735",
  "https://mobileplanet.ua/apple-watch-series-8-41mm-silver-aluminu-259836",

  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-aluminum-ca-254737",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-a-260629",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-a-260766",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-aluminum-ca-254737",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-aluminum-c-254740",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-260908",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-265263",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-silver-aluminum-case-254739",

  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-silver-aluminum-case-254739",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-product-red-aluminum-254738",

  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-product-re-261461",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-midnight-al-254755",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-41mm-midnight-al-265111",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-midnight-al-265113",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-graphite-s-254754",

  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-starlight-alum-268918",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-midnight-aluminum-case-w-255872",
  "https://mobileplanet.ua/apple-watch-series-se2-40mm-silver-alumi-257587",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-starlight-aluminum-case-255877",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-midnight-aluminum-case-w-255875",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-silver-aluminum-case-wit-255876",

  "https://mobileplanet.ua/apple-watch-se-2-lte-44mm-midnight-alumi-270557",

  "https://mobileplanet.ua/apple-watch-se-gps-40mm-silver-aluminum-238556",
  "https://mobileplanet.ua/apple-watch-se-gps-40mm-gold-aluminum-ca-237400",
  "https://mobileplanet.ua/apple-watch-se-gps-40mm-space-gray-aluminum-case-w-239809",
  "https://mobileplanet.ua/apple-watch-se-gps-44mm-silver-aluminum-238603",
  "https://mobileplanet.ua/apple-watch-se-gps-44mm-gold-aluminum-ca-238604",
  "https://mobileplanet.ua/apple-watch-se-gps-44mm-space-gray-alumi-238557",

  "https://mobileplanet.ua/apple-watch-se-gps-cellular-40mm-silver-aluminum-c-251697",
  "https://mobileplanet.ua/apple-watch-se-gps-cellular-40mm-gold-aluminum-cas-251695",
  "https://mobileplanet.ua/apple-watch-se-gps-plus-cellular-40mm-go-255754",
  "https://mobileplanet.ua/apple-watch-se-gps-cellular-40mm-space-g-260924",
  "https://mobileplanet.ua/apple-watch-se-gps-cellular-44mm-silver-a-case-w-a-255695",
  "https://mobileplanet.ua/apple-watch-se-gps-cellular-44mm-space-g-246499",

  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254776",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254777",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254775",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254770",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254771",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254773",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254774",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254772",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254778",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254767",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254768",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254769",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254761",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254762",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254763",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254764",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254765",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254766",
];
const arrLinkSkayAWS = [
  "https://skay.ua/uk/series-7/54018-apple-watch-series-7-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-mkmy3.html?search_query=MKMY3&results=3",
  "https://skay.ua/uk/series-7/54017-apple-watch-series-7-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-mkmx3.html?search_query=MKMX3&results=3",
  "https://skay.ua/uk/series-7/54014-apple-watch-series-7-41mm-gps-green-aluminum-case.html?search_query=MKN03&results=2",
  "https://skay.ua/uk/series-7/53996-apple-watch-series-7-41mm-gps-blue-aluminum-case-w-abyss-blue-sport-band-mkn13.html?search_query=MKN13&results=2",
  "https://skay.ua/uk/series-7/54016-apple-watch-series-7-41mm-gps-productred-aluminum-case-w-productred-sport-band-mkn23.html?search_query=MKN23&results=2",
  "https://skay.ua/uk/series-7/56181-apple-watch-series-7-41mm-gpslte-graphite-stainless-steel-case-w-graphite-milanese-loop-mkhk3mklf3.html?search_query=MKHK3&results=1",
  "https://skay.ua/uk/series-7/55974-apple-watch-series-7-41mm-gpslte-silver-stainless-steel-case-w-silver-milanese-loop-mkhx3mkhf3.html?search_query=MKHX3&results=1",
  "https://skay.ua/uk/series-7/55975-apple-watch-series-7-41mm-gpslte-gold-stainless-steel-case-w-gold-milanese-loop-mkj03mkhh3.html?search_query=MKJ03&results=1",

  "https://skay.ua/uk/series-7/54027-apple-watch-series-7-45mm-gps-starlight-aluminum-case-w-starlight-sport-band-mkn63.html?search_query=MKN63&results=3",
  "https://skay.ua/uk/series-7/54022-apple-watch-series-7-45mm-gps-green-aluminum-case-w-clover-sport-band-mkn73.html?search_query=MKN73&results=3",
  "https://skay.ua/uk/series-7/54975-apple-watch-series-7-45mm-gps-starlight-aluminum-case-w-pure-platinumblack-nike-sport-band-mkna3.html?search_query=MKNA3&results=2",
  "https://skay.ua/uk/series-7/54025-apple-watch-series-7-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-mkn53.html?search_query=MKN53&results=3",
  "https://skay.ua/uk/series-7/54023-apple-watch-series-7-45mm-gps-productred-aluminum-case-w-productred-sport-band-mkn93.html?search_query=MKN93&results=2",
  "https://skay.ua/uk/series-7/54019-apple-watch-series-7-45mm-gps-blue-aluminum-case-w-abyss-blue-sport-band-mkn83.html?search_query=MKN83&results=3",
  "https://skay.ua/uk/series-7/55971-apple-watch-series-7-45mm-gpslte-silver-stainless-steel-case-w-silver-milanese-loop-mkje3mkjw3.html?search_query=MKJE3&results=1",
  "https://skay.ua/uk/series-7/55972-apple-watch-series-7-45mm-gpslte-gold-stainless-steel-case-w-gold-milanese-loop-mkjy3mkjg3.html?search_query=MKJG3&results=1",
  "https://skay.ua/uk/series-7/56180-apple-watch-series-7-45mm-gpslte-graphite-stainless-steel-case-w-graphite-milanese-loop-mkl33mkjj3.html?search_query=MKJJ3&results=1",
  "https://skay.ua/uk/series-7/54972-apple-watch-series-7-45mm-gpslte-starlight-aluminum-case-w-starlight-sport-band-mkj83mkjq3.html?search_query=MKJ83&results=2",

  "https://skay.ua/uk/series-8/58856-apple-watch-series-8-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-regular-mnp53.html?search_query=MNP53&results=2",
  "https://skay.ua/uk/series-8/60071-apple-watch-series-8-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-sm-mnu73.html?search_query=MNU73&results=1",
  "https://skay.ua/uk/series-8/60170-apple-watch-series-8-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnu83.html?search_query=MNU83&results=1",
  "https://skay.ua/uk/series-8/58858-apple-watch-series-8-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-regular-mnp63.html?search_query=MNP63&results=2",
  "https://skay.ua/uk/series-8/59437-apple-watch-series-8-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-sm-mnu93.html?search_query=MNU93&results=1",
  "https://skay.ua/uk/series-8/59651-apple-watch-series-8-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-ml-mnuf3.html?search_query=MNUF3&results=1",
  "https://skay.ua/uk/series-8/61034-apple-watch-series-8-41mm-gps-silver-aluminum-case-with-white-sport-band-regular-mp6k3.html?search_query=MP6K3&results=2",
  "https://skay.ua/uk/series-8/59608-apple-watch-series-8-41mm-gps-silver-aluminum-case-w-white-sport-band-size-sm-mp6l3.html?search_query=MP6L3&results=1",

  "https://skay.ua/uk/series-8/58857-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-regular-mnp13.html?search_query=MNP13&results=2",
  "https://skay.ua/uk/series-8/60105-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-sm-mnuj3.html?search_query=MNUJ3&results=2",
  "https://skay.ua/uk/series-8/59815-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnp83.html?search_query=MNP83&results=1",
  "https://skay.ua/uk/series-8/59701-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnul3.html?search_query=MNUL3&results=1",
  "https://skay.ua/uk/series-8/58859-apple-watch-series-8-45mm-gps-starlight-aluminum-case-with-starlight-sport-band-regular-mnp23.html?search_query=MNP23&results=2",
  "https://skay.ua/uk/series-8/59845-apple-watch-series-8-45mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-sm-mnup3.html?search_query=MNUP3&results=1",
  "https://skay.ua/uk/series-8/59438-apple-watch-series-8-45mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-ml-mnuq3.html?search_query=MNUQ3&results=1",
  "https://skay.ua/uk/series-8/58861-apple-watch-series-8-45mm-gps-silver-aluminum-case-w-white-sport-band-regular-mp6n3.html?search_query=MP6N3&results=2",

  "https://skay.ua/uk/series-8/59439-apple-watch-series-8-45mm-gps-silver-aluminum-case-w-white-sport-band-size-ml-mp6q3.html?search_query=MP6Q3&results=1",
  "https://skay.ua/uk/series-8/58863-apple-watch-series-8-45mm-gps-productred-aluminum-case-with-productred-sport-band-regular-mnp43.html?search_query=MNP43&results=2",

  "https://skay.ua/uk/series-8/59814-apple-watch-series-8-45mm-gps-productred-aluminum-case-with-productred-sport-band-size-ml-mnuu3.html?search_query=MNUU3&results=1",
  "https://skay.ua/uk/series-8/60296-apple-watch-series-8-41mm-gpslte-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnuw3.html?search_query=MNUW3&results=1",
  "https://skay.ua/uk/series-8/60367-apple-watch-series-8-45mm-gpslte-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnvl3.html?search_query=MNVL3&results=1",

  "https://skay.ua/uk/apple-watch-se/60173-apple-watch-se-2022-40mm-gps-starlight-aluminum-case-w-starlight-sport-band-mnjp3.html?search_query=MNJP3&results=2",
  "https://skay.ua/uk/apple-watch-se/60554-apple-watch-se-2022-40mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-sm-mnt73.html?search_query=MNT73&results=1",
  "https://skay.ua/uk/apple-watch-se/59743-apple-watch-se-2022-40mm-gps-silver-aluminum-case-w-white-sport-band-size-ml-mntc3.html?search_query=MNTC3&results=1",
  "https://skay.ua/uk/apple-watch-se/64005-apple-watch-se-2022-44mm-gps-starlight-aluminum-case-w-starlight-sport-band-mnjx3.html?search_query=MNJX3&results=2",
  "https://skay.ua/uk/apple-watch-se/60903-apple-watch-se-2022-44mm-gps-midnight-aluminum-case-w-midnight-sport-band-mntg3mntf3.html?search_query=MNTG3&results=1",
  "https://skay.ua/uk/apple-watch-se/62336-apple-watch-se-2022-44mm-gps-silver-aluminum-case-w-white-sport-band-mnk23.html?search_query=MNK23&results=2",

  "https://skay.ua/uk/apple-watch-se/62757-apple-watch-se-2022-44mm-gpslte-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnu03mnty3.html?search_query=MNU03&results=1",

  "https://skay.ua/uk/apple-watch-se/55654-apple-watch-se-40mm-gps-silver-aluminum-case-w-abyss-blue-sport-band-mkny3.html?search_query=MKNY3&results=2",
  "https://skay.ua/uk/apple-watch-se/55414-apple-watch-se-40mm-gps-gold-aluminium-case-w-starlight-sport-band-mkq03.html?search_query=MKQ03&results=2",
  "https://skay.ua/uk/apple-watch-se/56635-apple-watch-se-40mm-gps-space-gray-aluminum-case-w-midnight-sport-band-mkq13.html?search_query=MKQ13&results=2",
  "https://skay.ua/uk/apple-watch-se/55838-apple-watch-se-44mm-gps-silver-aluminum-case-w-abyss-blue-sport-band-mkq43.html?search_query=MKQ43&results=2",
  "https://skay.ua/uk/apple-watch-se/56636-apple-watch-se-44mm-gps-gold-aluminium-case-w-starlight-sport-band-mkq53.html?search_query=MKQ53&results=2",
  "https://skay.ua/uk/apple-watch-se/57118-apple-watch-se-44mm-gps-space-gray-aluminum-case-w-midnight-sport-band-mkq63.html?search_query=MKQ63&results=2",

  "https://skay.ua/uk/apple-watch-se/58422-apple-watch-se-40mm-gpslte-silver-aluminum-case-w-abyss-blue-sport-band-mkql3.html?search_query=MKQL3&results=1",
  "https://skay.ua/uk/apple-watch-se/58595-apple-watch-se-40mm-gpslte-gold-aluminum-case-w-starlight-sport-band-mkqn3.html?search_query=MKQN3&results=1",
  "https://skay.ua/uk/apple-watch-se/59129-apple-watch-se-40mm-gpslte-gold-aluminum-case-w-maizewhite-sport-loop-mkqp3.html?search_query=MKQP3&results=1",
  "https://skay.ua/uk/apple-watch-se/58423-apple-watch-se-40mm-gpslte-space-gray-aluminum-case-w-midnight-sport-band-mkqq3.html?search_query=MKQQ3&results=1",
  "https://skay.ua/uk/apple-watch-se/59248-apple-watch-se-44mm-gpslte-silver-aluminum-case-w-abyss-blue-sport-band-mkrj3.html?search_query=MKRJ3&results=1",
  "https://skay.ua/uk/apple-watch-se/54978-apple-watch-se-44mm-gpslte-gold-aluminum-case-w-pink-sand-sport-band-myep2myex2.html?search_query=MYEP2&results=1",
  "https://skay.ua/uk/apple-watch-se/57912-apple-watch-se-44mm-gpslte-space-gray-aluminum-case-w-midnight-sport-band-mkrr3.html?search_query=MKRR3&results=1",

  "https://skay.ua/uk/apple-watch-ultra/58848-apple-watch-ultra-49mm-gpslte-titanium-case-with-white-ocean-band-mnh83mnhf3.html?search_query=MNH83&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58849-apple-watch-ultra-49mm-gpslte-titanium-case-with-yellow-ocean-band-mnhg3.html?search_query=MNHG3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58847-apple-watch-ultra-49mm-gpslte-titanium-case-with-midnight-ocean-band-mqet3mqfk3.html?search_query=MQET3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58852-apple-watch-ultra-49mm-gpslte-titanium-case-with-bluegray-trail-loop-sm-mnhe3mnhl3.html?search_query=MNHE3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58853-apple-watch-ultra-49mm-gpslte-titanium-case-with-bluegray-trail-loop-ml-mqej3mqf33.html?search_query=MQEJ3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58850-apple-watch-ultra-49mm-gpslte-titanium-case-with-yellowbeige-trail-loop-sm-mnhk3mnhd3.html?search_query=MNHK3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58851-apple-watch-ultra-49mm-gpslte-titanium-case-with-yellowbeige-trail-loop-ml-mqfu3mqf23.html?search_query=MQFU3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58854-apple-watch-ultra-49mm-gpslte-titanium-case-with-blackgray-trail-loop-sm-mqfw3mqf43.html?search_query=MQFW3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58855-apple-watch-ultra-49mm-gpslte-titanium-case-with-blackgray-trail-loop-ml-mqfx3.html?search_query=MQF53&results=2",
  "https://skay.ua/uk/apple-watch-ultra/58846-apple-watch-ultra-49mm-gpslte-titanium-case-with-orange-alpine-loop-small-mnhh3mnha3.html?search_query=MNHH3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58845-apple-watch-ultra-49mm-gpslte-titanium-case-with-orange-alpine-loop-medium-mqeu3mqfl3.html?search_query=MQEU3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58844-apple-watch-ultra-49mm-gpslte-titanium-case-with-orange-alpine-loop-large-mqev3mqfm3.html?search_query=MQEV3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58840-apple-watch-ultra-49mm-gpslte-titanium-case-with-green-alpine-loop-small-mnhj3mnhc3.html?search_query=MNHJ3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58839-apple-watch-ultra-49mm-gpslte-titanium-case-with-green-alpine-loop-medium-mqfn3.html?search_query=MQFN3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58838-apple-watch-ultra-49mm-gpslte-titanium-case-with-green-alpine-loop-large-mqex3mqfp3.html?search_query=MQEX3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58843-apple-watch-ultra-49mm-gpslte-titanium-case-with-starlight-alpine-loop-small-mqey3mqfq3.html?search_query=MQEY3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58842-apple-watch-ultra-49mm-gpslte-titanium-case-with-starlight-alpine-loop-medium-mqfr3mqf03.html?search_query=MQFR3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58841-apple-watch-ultra-49mm-gpslte-titanium-case-with-starlight-alpine-loop-large-mqft3mqf13.html?search_query=MQFT3&results=1",
];
const arrLinkIstoreAWS = [
  "https://www.istore.ua/catalog/item/apple-watch-series-7-41mm-starlight-aluminum-case-with-starlight-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-41mm-midnight-aluminum-case-with-midnight-sport-band-/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-41mm-green-aluminum-case-with-clover-sport-band-/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-41mm-blue-aluminum-case-with-abyss-blue-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-41mm-product-red-aluminum-case-with-red-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-7-45mm-starlight-aluminum-case-with-starlight-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-45mm-green-aluminum-case-with-clover-sport-band-mkn73ul-a-preview-foto-1-apple-/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-45mm-midnight-aluminum-case-with-midnight-sport-band-/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-45mm-product-red-aluminum-case-with-red-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-series-7-45mm-blue-aluminum-case-with-abyss-blue-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-41mm-midnight-aluminum-case-with-midnight-sport-band-/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-41mm-starlight-aluminium-case-with-starlight-sport-band-/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-41mm-silver-aluminium-case-with-white-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-midnight-aluminium-case-with-midnight-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-starlight-aluminium-case-with-starlight-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-silver-aluminium-case-with-white-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-product-red-aluminium-case-with-product-red-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-se-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-/",
  "https://www.istore.ua/catalog/item/apple-watch-se-gps-40mm-midnight-aluminium-case-with-midnight-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-se-gps-40mm-silver-aluminium-case-with-white-sport-band-regular/",
  "https://www.istore.ua/catalog/item/apple-watch-se-gps-44mm-starlight-aluminium-case-with-starlight-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-se-gps-44mm-midnight-aluminium-case-with-midnight-sport-band/",
  "https://www.istore.ua/catalog/item/apple-watch-se-gps-44mm-silver-aluminium-case-with-white-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-white-ocean-band/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-yellow-ocean-band/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-midnight-ocean-band/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-blue-gray-trail-loop-s-m/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-yellow-beige-trail-loop-s-m/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-yellow-beige-trail-loop-m-l/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-black-gray-trail-loop-s-m/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-black-gray-trail-loop-m-l/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-orange-alpine-loop-small/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-orange-alpine-loop-medium/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-orange-alpine-loop-large/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-green-alpine-loop-small/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-green-alpine-loop-medium/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-starlight-alpine-loop-small/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-starlight-alpine-loop-medium/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-starlight-alpine-loop-large/",
];
const arrLinkJabkoAWS = [
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-starlight-aluminum-case-white-spor",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-midnight-aluminum-case-black-sport",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-green-aluminum-case-with-green-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-blue-aluminum-case-blue-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-starlight-aluminum-case-with-white-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-graphite-stainless-steel-case-with-graphite-milanese-loop--mklf3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-silver-stainless-steel-case-with-silver-milanese-loop--mkhf3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm-gold-stainless-steel-case-with-gold-milanese-loop--mkhh3-",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-starlight-aluminum-case-white-spor",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-green-aluminum-case-with-green-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-starlight-aluminum-case-with-pure-platinum-black-nike-sport-band--mkn33-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-midnight-aluminum-case-black-sport",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-41mm--midnight-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-blue-aluminum-case-blue-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-silver-stainless-steel-case-with-silver-milanese-loop--mkje3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-gold-stainless-steel-case-with-gold-milanese-loop--mkjg3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-7/apple-watch-series-7-45mm-graphite-stainless-steel-case-with-graphite-milanese-loop--mkjj3-",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-midnight-aluminum-case-with-midnight-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-blue-aluminum-case-with-blue-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-blue-aluminum-case-with-blue-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-blue-aluminum-case-with-blue-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-red-aluminum-case-with-red-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-gps---lte--midnight-aluminium-case-with-midnight-sport-band--mnk43-",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-gps---cellular--graphite-stainless-steel-case-with-graphite-milanese-loop--mnkx3-",

  "https://jabko.ua/rus/apple-watch/apple-watch-se-2/apple-watch-se-2-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-se-2/apple-watch-se-2-41mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-se-2/apple-watch-se-2-41mm-silver-aluminum-case-with-white-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-se-2/apple-watch-se-2-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-se-2/apple-watch-se-2-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-se-2/apple-watch-se-2-45mm-silver-aluminum-case-with-white-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-40mm-silver-with-abyss-blue-sport-band--mkny3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-40mm-gold-with-starlight-sport-band--mkq03-",
  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-40mm-space-gray-with-midnight-sport-band--mkq13-",
  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-44mm-silver-with-blue-sport-band--mkq43-",
  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-44mm-gold-with-starlight-sport-band--mkq53-",
  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-44mm-space-gray-with-midnight-sport-band--mkq63-",

  "https://jabko.ua/rus/apple-watch/apple-watch-se/apple-watch-series-se-44mm-gps---lte-space-gray-with-midnight-sport-band--mkrr3-mkt33-",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-white-ocean-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-yellow-ocean-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-midnight-ocean-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-blue-gray-trail-loop-s-m--mnhl3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-blue-gray-trail-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-yellow-beige-trail-loop-s-m--mnhk3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-yellow-beige-trail-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-black-gray-trail-loop-s-m--mqfw3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-black-gray-trail-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-series-8-pro-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-orange-alpine-loop-medium--mqfl3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-orange-alpine-loop-large--mqfm3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-green-alpine-loop-small--mnhj3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-green-alpine-loop-medium--mqfn3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-green-alpine-loop-large--mqfp3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-starlight-alpine-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-starlight-alpine-loop-medium--mqfr3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-starlight-alpine-loop-large--mqft3-",
];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkMobilePlanetAWS.length; i += 1) {
    await page.goto(arrLinkMobilePlanetAWS[i]);
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
  for (let i = 0; i < arrLinkSkayAWS.length; i += 1) {
    await page.goto(arrLinkSkayAWS[i]);
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
  for (let i = 0; i < arrLinkIstoreAWS.length; i += 1) {
    await page.goto(arrLinkIstoreAWS[i]);
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
  for (let i = 0; i < arrLinkJabkoAWS.length; i += 1) {
    await page.goto(arrLinkJabkoAWS[i]);
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
}
f();
