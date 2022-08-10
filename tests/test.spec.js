import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://next-dev.technodom.kz/
  await page.goto('https://next-dev.technodom.kz/');

  // Click button:has-text("Да")
  await page.locator('button:has-text("Да")').click();

  // Click a[role="button"]:has-text("Избранное")
  await page.locator('a[role="button"]:has-text("Избранное")').click();

  // Click text=Каталог >> svg
  await page.locator('text=Каталог >> svg').click();

  // Click a[role="button"]:has-text("Смартфоны Apple") >> nth=0
  await page.locator('a[role="button"]:has-text("Смартфоны Apple")').first().click();
  await expect(page).toHaveURL('https://next-dev.technodom.kz/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony');

  // Click .category-filters__tag-link > .Typography >> nth=0
  await page.locator('.category-filters__tag-link > .Typography').first().click();
  await expect(page).toHaveURL('https://next-dev.technodom.kz/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/apple');

  // Click text=0 - 0 - 18Смартфон Apple iPhone 11 64GB Black324 990 ₸В корзину
  await page.locator('text=0 - 0 - 18Смартфон Apple iPhone 11 64GB Black324 990 ₸В корзину').click();
  await expect(page).toHaveURL('https://next-dev.technodom.kz/p/smartfon-apple-iphone-11-64gb-black-mhda3rma-228936');

  // Click div:nth-child(4) > .product-actions__buy-in-future-buttons > .IconButton
  await page.locator('div:nth-child(4) > .product-actions__buy-in-future-buttons > .IconButton').click();

});