const {test,expect} = require ("@playwright/test")
test("InputBox validation", async({page})=>{
  await page.goto("https://demo.nopcommerce.com/register")
  const emailField=await page.locator('//input[@id="Email"]')
  await expect(emailField).toBeVisible()
  await expect(emailField).toBeEmpty()
  await expect(emailField).toBeEnabled()
  await expect(emailField).toBeEditable()
  await emailField.fill("pooja@yopmail.com")
  await page.waitForTimeout(5000)

})