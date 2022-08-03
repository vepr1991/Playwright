import { test, expect } from '@playwright/test';

test('Authorization', async ({ page }) => {

  // Go to https://next-dev.technodom.kz/
  await page.goto('https://next-dev.technodom.kz/');

  // Click button:has-text("Да")
  await page.locator('button:has-text("Да")').click();

  // Click a:has-text("Вход")
  await page.locator('a:has-text("Вход")').click();

  // Click text=Номер телефона
  await page.locator('text=Номер телефона').click();

  // Fill input[name="sign-in-form__phone"]
  await page.locator('input[name="sign-in-form__phone"]').fill('+7 777 488 99 37');

  // Click button:has-text("Получить СМС-код")
  await page.locator('button:has-text("Получить СМС-код")').click();

  // Fill #sms-modal__form-digit-0
  await page.locator('#sms-modal__form-digit-0').fill('1');

  // Fill #sms-modal__form-digit-1
  await page.locator('#sms-modal__form-digit-1').fill('1');

  // Fill #sms-modal__form-digit-2
  await page.locator('#sms-modal__form-digit-2').fill('1');

  // Fill #sms-modal__form-digit-3
  await page.locator('#sms-modal__form-digit-3').fill('1');
  await expect(page).toHaveURL('https://next-dev.technodom.kz/my-account/overview');
  
});