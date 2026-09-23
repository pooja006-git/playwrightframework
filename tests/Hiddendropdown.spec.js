const {test,expect}=require("@playwright/test")
test("Hidden dropdown validation",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click()
    await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]").click()
    await page.waitForTimeout(3000)
    const options=await page.$$("//div[@role='listbox']//span")
    for(const opt of options)
    {
        let value=await opt.textContent()
        if(value.includes("Content Specialist"))
        {
            await opt.click();
            break;
        }
    }
    await page.waitForTimeout(3000)

})