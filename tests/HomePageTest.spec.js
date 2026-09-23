const {test,expect} = require('@playwright/test')

test("Homepage title validation",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const pagetitle=page.title()
    console.log("PageTitle is:",pagetitle)
    await expect(page).toHaveTitle("OrangeHRM")
    await page.close()

})