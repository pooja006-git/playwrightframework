const {test,expect} = require("@playwright/test")
test("Hard Assertion",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register")
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    const logo=await page.locator(".header-logo")
    await expect(logo).toBeVisible()
    
    const searcbutton=await page.locator("#small-searchterms")
    await expect(searcbutton).toBeEnabled();
    const maleradio=await page.locator("#gender-male")
    await expect(maleradio).not.toBeChecked()

    await maleradio.check();
    await expect(maleradio).toBeChecked();
    await expect(maleradio).toHaveAttribute('type','radio')
    const texts=await page.locator("//h2[normalize-space()='Your Personal Details']")
    await expect(texts).toHaveText("Your Personal Details")
    await expect(texts).toContainText("Your")
    const emailaddress=await page.locator("#Email")
    await emailaddress.fill("pooja@yopmail.com")
    await expect(emailaddress).toHaveValue("pooja@yopmail.com")
    await page.locator("//a[@role='button'][normalize-space()='Books']").click()
    const dropdown=await page.locator("//select[@id='products-pagesize']/option")
    await expect(dropdown).toHaveCount(3)

})
