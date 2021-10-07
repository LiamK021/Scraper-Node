const puppeteer = require('puppeteer');
const fs = require('fs');
const { parse } = require('path');

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
    let result = "";
    for ( var i = 0 ; i< infos.length; i++){
        if ( infos[i] == "{"){
            result += ("\n" + infos[i])
        }
        else {
            result += infos[i]
        }
    }
    // console.log("result: ", result);

    fs.writeFile("./tmp/result.txt", result, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    // console.log(infos);
    // for (var i = 0 ; i<infos.length; i++){
    //     console.log(infos[i])
    // }
    page.close();
    browser.close();
}
scraperStart();