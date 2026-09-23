const {test,expect} = require("@playwright/test")
test.skip("right click validation",async({page})=>{

    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const button=await page.locator("#rightclick")
    await button.click({button: 'right'})
    await page.waitForTimeout(3000)
})

test("double click validation",async({page})=>{
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const doublebtn=await page.locator("#dblclick")
    await doublebtn.dblclick()
    await page.waitForTimeout(3000)
    await expect(page.locator("#demo")).toHaveText("Double Click Action is Performed")
})