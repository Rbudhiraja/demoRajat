const { test, expect } = require('@playwright/test');

test('Navigate to Rossvideo and verify Careers page', async ({ page }) => {
  // Open Rossvideo.com
  await page.goto('https://www.rossvideo.com');

  // Scroll down to the bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Click on the "Careers" button
  await page.click('a[href="/careers"]');

  // Wait for the careers page to load and validate the URL
  await page.waitForURL('**/careers');
  
  // Validate that the URL is correct
  await expect(page).toHaveURL(/.*careers/); // This line asserts the URL matches the expected pattern

  console.log('Careers page is opened.');
});

