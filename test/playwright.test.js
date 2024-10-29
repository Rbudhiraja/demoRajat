const { test, expect } = require('@playwright/test');

test('Navigate to Rossvideo and verify Careers page', async ({ page }) => {
  // Open Rossvideo.com
  (async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
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
    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        await browser.close(); // Ensure the browser is closed after execution
    }
})();
