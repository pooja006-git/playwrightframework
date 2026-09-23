const {test,expect} = require("@playwright/test")

test("Registration form ",async({page})=>{

    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php")
    await page.locator("#prefix").selectOption("Mrs.")
    await page.locator('//input[@placeholder="First Name"]').fill("pooja")
    await expect(page.locator('//input[@placeholder="First Name"]')).toHaveValue("pooja")
    await page.locator('//input[@placeholder="Last Name"]').fill("raaghu")
    await page.locator("#pension").check()
    await expect(page.locator("#pension")).toBeChecked()
    await page.locator('//input[@name="fathername"]').fill("krishnamurthy")
    await page.locator('//input[@name="mothername"]').fill("meena")
    const checkbox = [
                '//input[@id="votercard" and @type="checkbox"]',
                '//input[@id="drivinglicense" and @type="checkbox"]'
                    ]
                    for(const locator of checkbox)
                    {
                        await page.locator(locator).check()
                    }
    await page.locator("#identity_number").fill("123456789")
    await page.locator("#female").check()
    await page.locator("#dob_month").selectOption("October")
    await expect(page.locator("#dob_month")).toHaveValue("October")
    await page.locator("#dob_date").selectOption("25")
    await page.locator("#dob_year").selectOption("1991")
    await page.locator("#married").check()
    await page.locator("#country_code").selectOption({value:"91"})
    await page.locator("#mobile").fill("8899776655")
    await page.locator("#nationality").selectOption("Indian")
    await page.locator('//input[@name="address"]').fill("123 street bangalore")
    await page.locator("#state").fill("karnataka")
    await page.locator("#country").selectOption("India")
    await page.locator('//input[@value="Submit"]').click()
    await expect(page.locator('//div[@class="col-md-8"]/p')).toHaveText("Your message has been received. We will respond back to you as soon as possible.")

})


