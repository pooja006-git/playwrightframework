const {test,expect}=require("@playwright/test")

test("statictable validation",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const table=await page.locator("//table[@name='BookTable']")
    //print no of rows and column
    const rows=await table.locator("tbody tr")
    console.log("number of rows:",await rows.count())
    const columns=await table.locator("tbody tr th")
    console.log("number of columns:",await columns.count())

    //print all values from tables using for loop
    /*for(let i=1;i<await rows.count();i++)
    {
        const row= await rows.nth(i)
        const tds=await row.locator("td")
        for(let j=0;j<await tds.count();j++)
        {
            console.log(await tds.nth(j).textContent())
        }
    }*/
    //print specific column value and sum the total
   /* let sum=0;
    for(let i=1;i<await rows.count();i++)
    {
        const row=await rows.nth(i)
        const tds=await row.locator("td").last().textContent()
        //console.log(tds)
        sum+=parseInt(tds)    
         
    }
     console.log("total",sum)*/

     //
     let sum=0
     for(let i=1;i<await rows.count();i++)
     {
        const row=rows.nth(i)
        const tds=await row.locator("td")
        for(let j=0;j<await tds.count();j++)
        {
          if(j==3)
            {
                const price=await tds.nth(j).textContent()
                //console.log("total",price)
                sum+=parseInt(price)
            }
        }
       
     }
     console.log("total",sum)
})