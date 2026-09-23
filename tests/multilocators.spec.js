const {test,expect} = require("@playwright/test")
test("multiple elemnts locator",async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
   await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
   const products= await page.$$("//div[@id='tbodyid']//div//h4/a")
   for(const product of products)
   {
    const productnames= await product.textContent()
    console.log(productnames)
   }


})