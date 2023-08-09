console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkIstoreIPAD = [
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-64-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-64-gb-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-64-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-64-gb-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-256-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-128-gb-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-256-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-256-gb-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-purple",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-128gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-128gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-256gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-256gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-512-gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-512gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-512gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-512gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-128gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-128gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-256gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-256gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-512gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-512gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-512gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-512gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/ipad-mini-6-64-gb-wi-fi-space-gray",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-purple",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-lte-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64gb-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64gb-starlight",

  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-space-gray",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-purple",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-lte-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256gb-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256gb-starlight"
];
const arrLinkJabkoIPAD = [
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--wi-fi--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--space-gray--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--wi-fi---lte--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--wi-fi---lte--space-gray--2021",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi--space-gray--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi---lte--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi---lte--space-gray--2021",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--yellow--2022",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--yellow--2022",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--yellow--2022",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--yellow--2022",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--starlight--2022-",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--starlight--2022-",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--starlight--2022-",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--starlight--2022-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--128gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/apple-ipad-pro-11-2020--128gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--128gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--128gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--space-gray--wi-fi-m2",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--silver--wi-fi---lte--m2",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--512gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--512gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--512gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi--starlight-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--space-gray-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--starlight-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--space-gray-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--starlight-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--space-gray-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--starlight-"
];

async function f() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkIstoreIPAD.length; i += 1) {
    await page.goto(arrLinkIstoreIPAD[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
  }
  for (let i = 0; i < arrLinkJabkoIPAD.length; i += 1) {
    await page.goto(arrLinkJabkoIPAD[i]);
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
