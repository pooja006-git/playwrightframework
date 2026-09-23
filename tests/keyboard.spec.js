const {test,expect} = require("@playwright/test")

test("Keyboard validation",async({page}) =>{

    await page.goto("https://gotranscript.com/text-compare")
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("welcome to automation")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")
    await page.keyboard.press("Control+V")

})