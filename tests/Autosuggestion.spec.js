const {test,expect} = require("@playwright/test")
test("auto suggestion dropdown validation",async({page})=>{
    await page.goto("https://www.makemytrip.com/")
    await page.locator(".commonModal__close").click()
    await page.waitForTimeout(3000)
    await page.locator("//span[normalize-space()='From']").click()
    //await page.locator("//input[@placeholder='From']").fill("Delhi")
    await page.waitForSelector('//div[@class="makeFlex"]//p[@class="font14 appendBottom5 blackText"]')
    const fromoption=await page.$$('//div[@class="makeFlex"]//p[@class="font14 appendBottom5 blackText"]')
    for(const option of fromoption)
    {
        let value=await option.textContent()
        //console.log(value)
        if(value.includes("Dubai, United Arab Emirates"))
        {
            await option.click()
            break;
        }
    }
    await page.waitForTimeout(3000)


})