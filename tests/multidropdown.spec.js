const {test,expect} = require("@playwright/test")
test("Multiselection dropdown validation",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // const colors=page.locator("#colors option")
   // await expect(colors).toHaveCount(7)
   const colors=await page.$$("#colors")
   for(const color of colors)
   {
    let value=await color.textContent()
    //console.log(value)
    await expect(value.includes("Blue")).toBeTruthy()
    //await page.selectOption("#colors",value)
    break
   }
   //await expect(colors.length).toBe(7)
   

    await page.selectOption("#colors",["Blue","Green"])
    await page.waitForTimeout(3000)
})