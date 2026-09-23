const {test,expect} = require("@playwright/test")

test("Basic select dropdown validation",async({page}) =>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   //await page.locator("#country").selectOption("India")
   //await page.locator("#country").selectOption({label:"India"})
   //await page.waitForTimeout(4000)
   //const options=page.locator("#country option")
   //await expect(options).toHaveCount(10)
  // await page.waitForSelector("#country option")
  //await page.waitForTimeout(5000)
   const options=await page.$$("#country option")
   //await expect(options.length).toBe(10)
   for(const option of options)
   {
    let value=await option.textContent();
    //console.log(value)
    //await expect(value.includes("India")).toBeTruthy()
    if(value.includes('Canada'))
    {
       //await expect(value.includes("Canada")).toBeTruthy()
       console.log(value)
       //await page.locator("#country").selectOption(value)
       await page.selectOption("#country",value)
      break;
    }
   }
   await page.waitForTimeout(4000)

})