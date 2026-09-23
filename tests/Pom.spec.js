const {test,expect} = require("@playwright/test")
import {LoginPage} from "../Pages/LoginPage"
import {HomePage} from "../Pages/HomePage"
import { CartPage} from "../Pages/CartPage"

const url="https://demoblaze.com/"
const username ="pavanol"
const password = "test@123"
let Page;
let Login;
test.beforeEach(async({browser})=>{
    Page=await browser.newPage()
    Login=new LoginPage(Page)
    await Login.Launchurl(url)

})
test.afterAll(async () => {
  await Page.close();
});

test("Login Validation",async()=>{
     //const Login=new LoginPage(Page)
     await Login.goToLoginpage()
     await Login.LoginPage(username,password)
     await Page.waitForTimeout(3000)
})

test("Add to cart validation",async()=>{
  const Home=new HomePage(Page)
  await Login.goToLoginpage()
  await Login.LoginPage(username,password)
  await Page.waitForTimeout(3000)
  await Home.SelectProduct("Iphone 6 32gb")
  await Page.waitForTimeout(7000)
  await Home.AddToCart()
  await Page.waitForTimeout(3000)
  await Home.GoTocartPage()
  await Page.waitForTimeout(5000)
  const Cart= new CartPage(Page)
  const status=await Cart.getNoofProductsInCart("Iphone 6 32gb")
  await expect(status).toBeTruthy()
  const totalpricestatus=await Cart.getTotalPriceInCart()
  await expect(totalpricestatus).toBeTruthy()
  const placeorderstatus=await Cart.placeOrder("test","India","Karnataka","41134411344114","12","2026")
  await expect(placeorderstatus).toBeTruthy()
})

