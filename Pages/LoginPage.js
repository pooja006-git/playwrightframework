exports.LoginPage = class LoginPage {

    constructor(Page){
      this.Page=Page
      this.LoginLink="#login2"
      this.UserName="#loginusername"
      this.Password="#loginpassword"
      this.LoginBtn="//button[@class='btn btn-primary' and @onclick='logIn()']"
     }
     
     async Launchurl(url){
      await this.Page.goto(url)
     }
     async goToLoginpage(){
        await this.Page.locator(this.LoginLink).click()
     }
  
     async LoginPage(UserName,Password){
        await this.Page.locator(this.UserName).fill(UserName)
        await this.Page.locator(this.Password).fill(Password)
        await this.Page.locator(this.LoginBtn).click()
   }

}