const {test,expect} = require("@playwright/test")

import {LoginPage} from "../Pages/LoginPage"
import {HomePage} from "../Pages/HomePage"
import { CartPage} from "../Pages/CartPage"

//JSON-JSONSTRING-JSON OBJECT

  const data=JSON.parse(JSON.stringify(require("../utils/Singledata.json")))

//const url="https://demoblaze.com/"
//const username ="pavanol"
//const password = "test@123"

const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;
let Page;
let Login;
test.beforeEach(async({browser})=>{
    Page=await browser.newPage()
    Login=new LoginPage(Page)
    await Login.Launchurl(data.url)

})
test.afterAll(async () => {
  await Page.close();
});

test("Login Validation",async()=>{
     //const Login=new LoginPage(Page)
     await Login.goToLoginpage()
     await Login.LoginPage(username,password)
     console.log("Username available:", !!process.env.TEST_USERNAME);
     console.log("Password available:", !!process.env.TEST_PASSWORD);
     await Page.waitForTimeout(3000)
})
