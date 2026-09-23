const {test,expect} = require("@playwright/test")
test("drag and drop",async({page})=>{
   
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const drag1=page.locator("//div[@class='draggable']")
    const drop1=page.locator("//div[@class='droppable']")
    //Approach 1
   // await drag1.dragTo(drop1)
   //await page.waitForTimeout(3000)

   await drag1.hover()
   await page.mouse.down()

   await drop1.hover()
   await page.mouse.up()
   await page.waitForTimeout(3000)
    
})