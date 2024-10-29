const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open Rossvideo.com
  await page.goto('https://www.rossvideo.com');

  // Scroll down to the bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Click on the "Careers" button
  await page.click('a[href="/careers"]');

  // Wait for the careers page to load and validate the URL
  await page.waitForURL('**/careers');
  if (page.url().includes('/careers')) {
    console.log('Careers page is opened.');
  } else {
    console.error('Failed to open Careers page.');
  }

  await browser.close();
})();

