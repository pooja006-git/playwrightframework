const {test,expect} = require("@playwright/test")
import {LoginPage} from "../Pages/LoginPage"
import {HomePage} from "../Pages/HomePage"
import { CartPage} from "../Pages/CartPage"

//JSON-JSONSTRING-JSON OBJECT

  const datas=JSON.parse(JSON.stringify(require("../utils/Multipledata.json")))

//const url="https://demoblaze.com/"
//const username ="pavanol"
//const password = "test@123"
let Page;
let Login;
for(const data of datas){
test.beforeEach(async({browser})=>{
    Page=await browser.newPage()
    Login=new LoginPage(Page)
    await Login.Launchurl(data.url)

})
test.afterAll(async () => {
  await Page.close();
});

test(`Login Validation ${data.username}`,async()=>{
     //const Login=new LoginPage(Page)
     await Login.goToLoginpage()
     await Login.LoginPage(data.username,data.password)
     await Page.waitForTimeout(3000)
})

}