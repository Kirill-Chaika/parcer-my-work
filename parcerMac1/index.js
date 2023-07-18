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
const arrLinkIstoreMac = [
    'https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-seryy-kosmos/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-seryy-kosmos/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-serebristyy/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-serebristyy/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-zolotoy/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-zolotoy/',

    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-space-gray/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-space-gray/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-silver/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-silver/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-gold/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-starlight/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-midnight/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-midnight/',

    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-512-gb-ssd-space-gray-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-1-tb-ssd-space-gray-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-512-gb-ssd-silver-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-1-tb-ssd-silver-2021/',
    
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-512-gb-ssd-space-gray-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-1-tb-ssd-space-gray-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-max-1-tb-ssd-space-gray-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-512-gb-ssd-silver-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-1-tb-ssd-silver-2021/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-max-1-tb-ssd-silver-2021/',

    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-256-gb-ssd-seryy-kosmos-2020/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-512-gb-ssd-seryy-kosmos-2020/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-256-gb-ssd-serebristyy-2020/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-512-gb-ssd-serebristyy-2020/',

    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-256-gb-ssd-space-gray/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-512-gb-ssd-space-gray/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-256-gb-ssd-silver/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-512-gb-ssd-silver/',

    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-512gb-space-gray-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-1-tb-space-gray-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-max-1-tb-space-gray-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-512gb-silver-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-max-1-tb-silver-2023/',

    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-512-tb-space-gray-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-1-tb-space-gray-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-max-1-tb-space-gray-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-max-1-tb-silver-2023/',
    'https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-512-tb-silver-2023/',

    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-space-gray/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-silver/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-midnight/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-starlight/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-space-gray/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-silver/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-midnight/',
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-starlight/'
];
const arrLinkJabkoMac = [
    'https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-starlight/',
    'https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--space-gray--512gb--mgn73--2020--apple-m1-',
    'https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--silver--256gb--mgn93--2020--apple-m1-',
    'https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--silver--512gb--mgna3--2020--apple-m1-',
    'https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--gold--256gb--mgnd3--2020--apple-m1-',
    'https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--gold--512gb--mgne3--2020--apple-m1-',

    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--space-gray--256gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--space-gray--512gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--silver--256gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--silver--512gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--starlight--256gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--starlight--512gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--midnight--256gb-with-apple-m2',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--midnight--512gb-with-apple-m2',

    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--512gb--space-gray-with-apple-m1--2021-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--1tb--space-gray-with-apple-m1-pro--2021-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14-512gb-silver-apple-m1-pro-mkgr3-2021',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--1tb--silver-with-apple-m1-pro--2021-',

    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16--2019-/apple-macbook-pro-16-retina--space-gray-mvvj2-2019',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--512gb-ssd--space-gray-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--1tb-ssd--space-gray-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-max--10-cpu--16-gpu--16gb-ram--1tb-ssd--space-gray-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--512gb-ssd--silver-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--1tb-ssd--silver-',
    'https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-max--10-cpu--32-gpu--32gb-ram--1tb-ssd--silver-',

    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/apple-macbook-pro-13-256gb-space-gray-with-apple-m1-myd82-2020',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/apple-macbook-pro-13-512gb-space-gray-with-apple-m1-myd92-2020',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/macbook-pro-13--256gb--',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/macbook-pro-13-3--2020-',

    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--256gb--space-gray-with-apple-m2--2022-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--512gb--space-gray-with-apple-m1--2022-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--256gb--silver-with-apple-m2---2022-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--512gb--silver-with-apple-m1--2022-',

    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14-512gb-space-gray-with-apple-m2-2023',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--space-gray-with-apple-m2-pro--2023-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--space-gray-with-apple-m2-max--2023-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--512gb--silver-with-apple-m2-2023',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--silver-with-apple-m2-max--2023-',

    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16--512gb--space-gray-with-apple-m2-2023',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-pro--12-cpu---19-gpu--16gb-ram--1tb-ssd--space-gray---2023-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-max--12-cpu---38-gpu--32gb-ram--1tb-ssd--space-gray---2023-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-max--12-cpu---38-gpu--32gb-ram--1tb-ssd--silver---2023-',
    'https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16--512gb--silver-with-apple-m2-2023-',

    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--spacegray--256gb--2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--silver--256gb--2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--midnight--256gb--2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina-starlight--256gb-2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--spacegray--512gb--2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--silver--512gb--2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--midnight--512gb--2023-',
    'https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--starlight--512gb--2023-'
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

