const {test,expect} = require("@playwright/test")

test("webtable validation", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const table=await page.locator("#productTable")

    //Find number of rows and Column in table
    
    const rows=await table.locator("tbody tr")
    console.log("number of rows",await rows.count())
    const column=await table.locator("thead tr th")
    console.log("number of column",await column.count())

    //check the checkbox of specific product
   /* const matchrow=rows.filter({
        has:page.locator("td"),
        hasText:"Smartwatch"
    })
    await matchrow.locator("input").check()
    await page.waitForTimeout(3000)*/

    // check the Multiple checkboxes based on nme of product

  /*await selectProduct(rows,page,"Smartwatch")
  await selectProduct(rows,page,"Wireless Earbuds")
  await selectProduct(rows,page,"Laptop")
  await page.waitForTimeout(3000)*/

  // print all values from table using for loop
 /* for(let i=0;i<await rows.count();i++)
  {
    const row=await rows.nth(i)
    const tds=await row.locator("td")
    for(let j=0;j<await tds.count()-1;j++)
    {
        console.log(await tds.nth(j).textContent())
    }

  }*/
 //print specific row using for loop
   /* for(let i=0;i<await rows.count();i++)
    {
        const row=await rows.nth(i)
        const rowtext=await row.textContent()
        const tds=await row.locator("td")
        if(rowtext.includes("Smartphone"))
        {
            for(let j=0;j<await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        }
    }

    //print specific column all rows using for loop
    for(let i=0;i<await rows.count();i++)
    {
        const row1=await rows.nth(i)
        const tds1=await row1.locator("td")
        for(let j=0;j<await tds1.count()-1;j++)
        {
            if(j==1)
            {
                console.log(await tds1.nth(j).textContent())
            }
        }
    }*/

        // print all data using for loop of all the pages
        const pages=await page.locator("#pagination li a")
        console.log("no of pages:",await pages.count())
        for(let p=0;p<await pages.count();p++)
        {
            if(p>0)
            {
                await pages.nth(p).click()
            }
            for(let i=0;i<await rows.count();i++)
            {
                const row=await rows.nth(i)
                const tds=await row.locator("td")
                for(let j=0;j<await tds.count()-1;j++)
                {
                    console.log(await tds.nth(j).textContent())
                }
            }
            await page.waitForTimeout(3000)
        }

})

async function selectProduct(rows,page,name)
{
    const matchrow=rows.filter({
        has:page.locator("td"),
        hasText:name
    })
    await matchrow.locator("input").check()
}