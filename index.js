const { default: start } = require('./start.js');
const puppeteer = require('puppeteer-core');
const config = require('config');
(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: config.get('browserless.url')
  });
  const page = await browser.newPage();

  await start({ page, browser });

  return browser.close();
})()
.then(() => console.log('Script complete!'))
.catch((err) => console.error('Error running script' + err));