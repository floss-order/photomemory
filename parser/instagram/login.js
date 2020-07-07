const puppeteer = require('puppeteer')


async function login(username, password) {
    const loginURL = 'https://www.instagram.com/accounts/login/'

    //Browser start
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: './userData'
    })
    const page = await browser.newPage({waitUntil: 'networkidle2'})

    //Go and wait
    await page.goto(loginURL)
    await page.waitFor(500)
    
    //Get current URL
    const currentURL = page.url()

    //Check if the user is authorized
    if(loginURL === currentURL) {
        //Authorize
        await page.type('form input[name="username"]', username, { delay: 50 })
        await page.type('form input[name="password"]', password, { delay: 50 })
        await page.click('button[type="submit"]')
        await page.waitForNavigation({waitUntil: 'networkidle2'}) 

        //Save the credentials by clicking the "Save Info" button
        await page.waitFor(500)
        let button = await page.$x('/html/body/div[1]/section/main/div/div/div/section/div/button')
        await button[0].click()

        //Wait until the auth finishes and close the browser
        await page.waitForNavigation({waitUntil: 'networkidle2'}) 
        await browser.close()
    }

    else {
        await browser.close()
        console.log('You have already logged into your instagram account!')
    }


}

login('_matsiev_', 'albert95')
