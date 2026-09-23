const {test,expect} = require("@playwright/test")
test("mousehover Validation",async({page})=>{
    await page.goto("https://demo.nopcommerce.com")
    const computer = await page.locator("//a[normalize-space()='Computers']")
    const Notebook = await page.locator("//a[normalize-space()='Notebooks']")

    await computer.hover()
    await Notebook.hover()
    await page.waitForTimeout(5000)

})