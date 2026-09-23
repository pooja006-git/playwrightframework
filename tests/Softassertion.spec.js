const {test,expect} = require("@playwright/test")
test("soft asserytion",async({page}) =>{

    await page.goto("https://demo.nopcommerce.com/register")
    await expect.soft(page).toHaveTitle("nopCommerc")
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register")
    const logo=await page.locator(".header-logo")
    await expect.soft(logo).toBeVisible()



})