const {test,expect} = require("@playwright/test")
test.skip("simple alerts-ok",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async dialog =>{
        await expect(dialog.type()).toContain("alert")
        await expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    })
    await page.locator("(//button[normalize-space()='Simple Alert'])[1]").click()
    await page.waitForTimeout(3000)
})
test.skip("confirmation alert-ok",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async dialog =>{
        await expect(dialog.type()).toContain("confirm")
        await expect(dialog.message()).toContain("Press a button!")
        await dialog.accept()
    })
    await page.locator("(//button[normalize-space()='Confirmation Alert'])[1]").click()
    await expect(page.locator("//p[@id='demo']")).toContainText("You pressed OK!")
    await page.waitForTimeout(3000)
})

test.skip("confirmation alert-cancel",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async dialog =>{
        await expect(dialog.type()).toContain("confirm")
        await expect(dialog.message()).toContain("Press a button!")
        await dialog.dismiss()
    })
    await page.locator("(//button[normalize-space()='Confirmation Alert'])[1]").click()
    await expect(page.locator("//p[@id='demo']")).toContainText("You pressed Cancel!")
    await page.waitForTimeout(3000)
})

test("prompt alert-ok",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async dialog=>{
        await expect(dialog.type()).toContain("prompt")
        await expect(dialog.message()).toContain("Please enter your name:")
        await expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept("pooja")
    })
    await page.locator("(//button[normalize-space()='Prompt Alert'])[1]").click()
    await expect(page.locator("//p[@id='demo']")).toContainText("Hello pooja! How are you today?")
})