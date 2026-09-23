const {test,expect} = require ("@playwright/test")
test("Frames Validation",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames")
    const allFrames=await page.frames()
    console.log(allFrames.length)

   /* const inputframe=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await inputframe.locator("//input[@name='mytext1']").fill("Hello")*/

    const iframe1=await page.frameLocator("//frame[@src='frame_1.html']")
    iframe1.locator("//input[@name='mytext1']").fill("welcome")

    await page.waitForTimeout(4000)


})