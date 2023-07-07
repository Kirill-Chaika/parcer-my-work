console.log("Hello world")

const puppeteer = require('puppeteer');
const kurs = '37,2';
async function f() {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://skay.ua/uk/iphone-14/58753-apple-iphone-14-128gb-blue.html')
    await page.screenshot({path: 'img.png'})

    let arr = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    console.log('blue 128: ', arr )
    await page.goto('https://skay.ua/uk/iphone-14/58757-apple-iphone-14-128gb-product-red.html')
    let arr2 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    console.log('product-red 128: ',arr2)
    await page.goto('https://skay.ua/uk/iphone-14/58755-apple-iphone-14-128gb-midnight.html')
    let arr3 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    console.log('midnight 128: ',arr3)
    await page.goto('https://skay.ua/uk/iphone-14/58756-apple-iphone-14-128gb-starlight.html')
    let arr4 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    console.log('starlight 128: ',arr4)
    await page.goto('https://skay.ua/uk/iphone-14/58754-apple-iphone-14-128gb-purple.html')
    let arr5 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    console.log('purple 128: ',arr5)
    await page.goto('https://skay.ua/uk/iphone-14/61506-apple-iphone-14-128gb-yellow.html')
    let arr6 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    console.log('yellow 128: ',arr6)
    console.log( arr, arr2, arr3, arr4, arr5, arr6)

    await browser.close()
}
f()
