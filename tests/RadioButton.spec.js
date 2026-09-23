const {test,expect} = require("@playwright/test")
test("Radio Button Validation", async({page}) =>{
  await page.goto("https://demo.nopcommerce.com/register")
  const maleradio='//input[@id="gender-male"]'
  await page.locator(maleradio).check()
  await expect(page.locator(maleradio)).toBeEnabled()
  await expect(page.locator(maleradio)).toBeChecked()
  await expect(page.locator(maleradio).isChecked()).toBeTruthy()
  await page.waitForTimeout(5000)
  const femaleradio='//input[@id="gender-female"]'
  await page.locator(femaleradio)
  await expect(page.locator(femaleradio)).not.toBeChecked()
  await expect(await page.locator(femaleradio).isChecked()).toBeFalsy()

})