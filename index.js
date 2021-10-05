const puppeteer = require('puppeteer');

async function scraperStart(){

}

var scraperPage = async function(){
    console.log("---- starting scraping");

    const url = "https://gatsbyuimaster.gatsbyjs.io/totalapi/";

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
}
scraperStart();