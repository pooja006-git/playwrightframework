const {test,expect} = require("@playwright/test")
test("Single file upload validation",async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#singleFileInput').setInputFiles('tests/uploadfiles/My Resume.pdf')
    await page.locator("//button[normalize-space()='Upload Single File']").click()
    await page.waitForTimeout(3000)
    await expect(await page.locator("#singleFileStatus")).toHaveText("Single file selected: My Resume.pdf, Size: 72417 bytes, Type: application/pdf")

})

test.only("Multiple file uploadvalidation",async({page}) =>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(["tests/uploadfiles/My Resume.pdf","tests/uploadfiles/PF Transfer.pdf"])
    await page.waitForTimeout(3000)
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("My Resume.pdf")
    expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("PF Transfer.pdf")
    await page.locator("#filesToUpload").setInputFiles([])
    await page.waitForTimeout(3000)
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected")
})