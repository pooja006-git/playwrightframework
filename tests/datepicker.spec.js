const{test,expect} = require("@playwright/test")

test("datepicker validation",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator("#datepicker").fill("04/23/2025")
    const year="2026"
    const month="March"
    const date="20"
    await page.locator("#datepicker").click()
     
    while(true)
    {
        const currentMonth=await page.locator("//span[@class='ui-datepicker-month']")
        const currentYear=await page.locator("//span[@class='ui-datepicker-year']")
        const curMonth=await currentMonth.textContent()
        const curYear=await currentYear.textContent() 
        
        if(curMonth==month && curYear==year)
        {
            break;
        }
        await page .locator("//a[@title='Next']").click()
    }
    /*const dates=await page.$$("//a[@class='ui-state-default']")
    for(const dt of dates)
    {
        if(await dt.textContent()===date)
        {
            await dt.click()
            break
        }
    }*/
    const dates=await page.locator(`//a[@class='ui-state-default'][text()='${date}']`)
    await dates.click()
    await page.waitForTimeout(3000)
})