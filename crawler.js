// crawler.js

const puppeteer = require('puppeteer');

async function crawlWebsite(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(url);
        const pageTitle = await page.title();
        console.log(`Title of ${url}: ${pageTitle}`);

        // You can add more logic here to extract specific data from the page
        // For example, find and print all links on the page:
        const links = await page.evaluate(() => {
            const anchorElements = document.querySelectorAll('a');
            return Array.from(anchorElements).map((a) => a.href);
        });
        console.log('Links on the page:');
        links.forEach((link) => console.log(link));
    } catch (error) {
        console.error('Error while crawling:', error);
    } finally {
        await browser.close();
    }
}

// Usage: Replace with the actual URL you want to crawl
const targetUrl = 'https://buddhistuniversity.net/';
crawlWebsite(targetUrl);
