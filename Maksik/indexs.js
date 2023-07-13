const puppeteer = require("puppeteer");

// Здесь происходят импорты модулей. Так же как ты импортировал модуль puppeteer.
// Тоесть я в указаных файлах написал что нужно отдать на экспорт и здесь получил это. И это словари

const MobilePlanet = require('./data_links/MobilePlanet.js');
const Istore = require('./data_links/Istore.js');
const Skay = require('./data_links/Skay.js');
const Jabko = require('./data_links/Jabko.js');

// Здесь мы обращаемся к нужному словарю и указываем нужный нам ключ и в ответ получим список привязанный к указанному ключу.
// Таким образом получаемся список ссылок
// Важно указывать правильное название ключей, иначе словарь сломается и выдаст ошибку.
// console.log(MobilePlanet['14'])



// Здесь я постарался передать все меняющиеся значения в аргументы и с помощью форматирования строк придать результат вид подобного твоему
async function Parser(list, symbol, selector) {
    const browser = await puppeteer.launch( {headless: 'new'});
    const page = await browser.newPage();
    
    for (let i = 0; i < list.length; i += 1) {
       
        await page.goto(list[i],  { timeout: 60000 });
        const n = await page.$("#txt");
        
        let arr = await page.evaluate((symbol, selector) => {
          let header = document.querySelector('h1').innerText
          let price = document.querySelector(selector).innerText
            
          if (price != null) {
              return `${header} ${symbol}: ${price}`
          }
          else {return}

        }, symbol, selector)
        console.log(arr)
        
    }
}



// Cписок ключей
const keys = Object.keys(MobilePlanet)
// [ '14', '14Plus', '14Pro', '14ProMax', '14ProESIM', '14ProMaxESIM' ]
console.log(keys) 



async function TaskManager(indx) {
  await Parser(MobilePlanet[indx], 'MP', ".price-value")
  await Parser(Skay[indx], 'S', "#our_price_display")
  await Parser(Istore[indx], 'I', ".product_price ")
  await Parser(Jabko[indx], 'J', ".price-new__uah")
}

// Так как функция Parser которую мы написали асинхронная то она будет выполнятся быстро но не последовательно, тоесть данные будут в перемешку. 
// К тому же если грузить все сразу то тестовый браузер не справляется с такой задачей. Поэтому можно просто выполнять скрипт с разными вызовами. 
// Решение этой проблемы я пытался найти но не смог, но я не пробовал использовать другие способы парсинга, а только твой. Может в других способах можно сделать 
// все удобнее. Остается проверить, если нет то пробуй другой способ.

TaskManager('14')

// TaskManager('14Plus')
// TaskManager('14Pro')
// TaskManager('14ProMax')
// TaskManager('14ProESIM')
// TaskManager('14ProMaxESIM')

