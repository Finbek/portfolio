import { test, expect, Page } from '@playwright/test';

test.describe('Topbar component', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173');
  });

  test('should display the current date and time', async () => {
    const dateTime = new Date().toLocaleString();
    const dateTimeElement = await page.$('.dateTime');
    const dateTimeText = await dateTimeElement?.textContent();
    expect(dateTimeText).toBe(dateTime);
  });

  test('should display the wifi icon', async () => {
    const wifiIcon = await page.$('.wifiIcon .fa-wifi');
    expect(wifiIcon).toBeTruthy();
  });

  test('should display the battery icon', async () => {
    const chargeIcon = await page.$('.chargeIcon .fa-battery-full');
    expect(chargeIcon).toBeTruthy();
  });
});
