const { test, expect } = require('@playwright/test');

test('Navigate to Rossvideo and verify Careers page', async ({ page }) => {
  // Open Rossvideo.com
  await page.goto('https://www.rossvideo.com');

  // Scroll down to the bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Wait for the "Careers" button to be available and click on it
  await page.waitForSelector('a[href="/careers"]'); // Ensure the Careers button is visible
  await page.click('a[href="/careers"]');

  // Wait for the careers page to load and validate the URL
  await page.waitForURL('**/careers');

  // Validate the Careers page is opened
  expect(page.url()).toContain('/careers'); // Use Playwright's expect for validation
  console.log('Careers page is opened.'); // Log successful navigation
});
