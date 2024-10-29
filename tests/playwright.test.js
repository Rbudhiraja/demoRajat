const { test, expect } = require('@playwright/test');

test('Navigate directly to Rossvideo Careers page and verify', async ({ page }) => {
  // Navigate directly to the Rossvideo Careers page
  await page.goto('https://www.rossvideo.com/company/careers');

  // Wait for the careers page to load
  await page.waitForLoadState('domcontentloaded'); // Wait until the DOM is loaded

  // Validate that the URL is correct
  expect(page.url()).toContain('/company/careers'); // Use Playwright's expect for validation
  console.log('Successfully navigated to the Careers page.');

  // Validate that the text "Careers at Ross" is present on the page
  const careersText = await page.locator('h1').textContent(); // Change the selector if needed
  expect(careersText).toContain('Careers at Ross'); // Check if the text is present
  console.log('Verified that "Careers at Ross" is present on the page.');
});

