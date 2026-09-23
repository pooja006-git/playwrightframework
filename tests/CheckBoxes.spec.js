const {test,expect} = require("playwright/test")
test("Checkbox validation", async({page})=>{

    await page.goto("https://www.qa-practice.com/elements/checkbox/mult_checkbox")
    const checkbox1='//input[@id="id_checkboxes_0" and @value="one"]'
    const checkbox2='//input[@id="id_checkboxes_2" and @value="three"]'
    const checkbox='//input[@type="checkbox"]'
    await page.waitForSelector(checkbox)
    const checkboxs=await page.$$(checkbox)
    await page.locator(checkbox1).check()
    await expect(page.locator(checkbox1)).toBeChecked()
    await expect(page.locator(checkbox1).isChecked()).toBeTruthy()
    await page.waitForTimeout(5000)
    await page.locator(checkbox1).uncheck()
    await expect(page.locator(checkbox2)).not.toBeChecked()
    await expect(await page.locator(checkbox2).isChecked()).toBeFalsy()
    await page.waitForTimeout(5000)
    for(const loc of checkboxs)
    {
        await loc.check()

    }
    const checkboxes=[checkbox1,checkbox2];
    for(const loc of checkboxes)
    {
        await page.locator(loc).check()
    }
     await page.waitForTimeout(5000)

     for(const loc of checkboxes)
     {
        if(await page.locator(loc).isChecked())
        {
            await page.locator(loc).uncheck()
        }
     }
    
})