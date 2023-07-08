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

    await page.goto('https://skay.ua/uk/iphone-14/58757-apple-iphone-14-128gb-product-red.html')
    let arr2 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })

    await page.goto('https://skay.ua/uk/iphone-14/58755-apple-iphone-14-128gb-midnight.html')
    let arr3 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
 
    await page.goto('https://skay.ua/uk/iphone-14/58756-apple-iphone-14-128gb-starlight.html')
    let arr4 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })

    await page.goto('https://skay.ua/uk/iphone-14/58754-apple-iphone-14-128gb-purple.html')
    let arr5 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/61506-apple-iphone-14-128gb-yellow.html')
    let arr6 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })

    console.log(
        'blue 128:',arr, ';',
         'product-red 128:',arr2,';',
          'midnight 128:',arr3,';',
           'starlight 128:',arr4,';',
            'purple 128:', arr5,';',
             'yellow 128:',arr6,';'
    )

    await page.goto('https://skay.ua/uk/iphone-14/58758-apple-iphone-14-256gb-blue.html')
    await page.screenshot({path: 'img.png'})

    let arr7 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58762-apple-iphone-14-256gb-product-red.html')
    let arr8 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58760-apple-iphone-14-256gb-midnight.html')
    let arr9 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })

    await page.goto('https://skay.ua/uk/iphone-14/58761-apple-iphone-14-256gb-starlight.html')
    let arr10 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58759-apple-iphone-14-256gb-purple.html')
    let arr11 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/61509-apple-iphone-14-256gb-yellow.html')
    let arr12 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })

    console.log(
        'blue 256:',arr7, ';',
         'product-red 256:',arr8,';',
          'midnight 256:',arr9,';',
           'starlight 256:',arr10,';',
            'purple 256:', arr11,';',
             'yellow 256:',arr12,';'
    )

    await page.goto('https://skay.ua/uk/iphone-14/58763-apple-iphone-14-512gb-blue.html')
    await page.screenshot({path: 'img.png'})

    let arr13 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58767-apple-iphone-14-512gb-product-red.html')
    let arr14 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58765-apple-iphone-14-512gb-midnight.html')
    let arr15 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58766-apple-iphone-14-512gb-starlight.html')
    let arr16 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    
    await page.goto('https://skay.ua/uk/iphone-14/58764-apple-iphone-14-512gb-purple.html')
    let arr17 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    // console.log('purple 128: ',arr5)
    await page.goto('https://skay.ua/uk/iphone-14/61510-apple-iphone-14-512gb-yellow.html')
    let arr18 = await page.evaluate(()=>{
        let text = document.querySelector('#our_price_display').innerText
        return text
    })
    

    console.log(
        'blue 512:',arr13, ';',
         'product-red 512:',arr14,';',
          'midnight 512:',arr15,';',
           'starlight 512:',arr16,';',
            'purple 512:', arr17,';',
             'yellow 512:',arr18,';'
    )

    await browser.close()
}


