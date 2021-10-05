const puppeteer = require('puppeteer');

async function scraperStart(){
    await scraperPage();
}

var scraperPage = async function(){
    console.log("---- starting scraping");

    const url = "https://gatsbyuimaster.gatsbyjs.io/totalapi/";

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(".api-module--apiData--15-o7");
    let infos = await page.evaluate(() => {
        let infos = document.body.querySelector(".api-module--apiData--15-o7").textContent;
        return infos;
    })
    console.log(infos);
    // for (var i = 0 ; i<infos.length; i++){
    //     console.log(infos[i])
    // }
    page.close();
    browser.close();
}
scraperStart();