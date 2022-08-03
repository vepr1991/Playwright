import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://next-dev.technodom.kz/
  await page.goto('https://next-dev.technodom.kz/');

  // Click button:has-text("Да")
  await page.locator('button:has-text("Да")').click();

  // Click text=Каталог >> path
  await page.locator('text=Каталог >> path').click();

  // Click .sub-menu-list__item-link >> nth=0
  await page.locator('.sub-menu-list__item-link').first().click();
  await expect(page).toHaveURL('https://next-dev.technodom.kz/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony');

  // Click text=0 - 0 - 18Смартфон Vivo Y21 64Gb Metallic Blue89 990 ₸В корзину
  await page.locator('text=0 - 0 - 18Смартфон Vivo Y21 64Gb Metallic Blue89 990 ₸В корзину').click();
  await expect(page).toHaveURL('https://next-dev.technodom.kz/p/smartfon-vivo-y21-64gb-metallic-blue-255378');

  // Click button:has-text("Добавить в корзину") >> nth=1
  await page.locator('button:has-text("Добавить в корзину")').nth(1).click();

  // Click a:has-text("Перейти в корзину")
  await page.locator('a:has-text("Перейти в корзину")').click();
  await expect(page).toHaveURL('https://next-dev.technodom.kz/cart');

});