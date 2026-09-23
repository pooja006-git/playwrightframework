exports.HomePage= class HomePage {

  constructor(Page){
    this.Page=Page
    this.ProductNames='//div[@id="tbodyid"]/div/div/div/h4/a'
    this.AddtoCartBtn='//a[normalize-space()="Add to cart"]'
    this.cartLink="#cartur"

  }

  async SelectProduct(productName){

    await this.Page.waitForSelector(this.ProductNames)
    const products=await this.Page.$$(this.ProductNames)
    for(const product of products)
    {
        const ProductText=await product.innerText()
        console.log(ProductText)
        if(productName===ProductText){
            await product.click()
            break;
          }
    }

  }

  async AddToCart(){

    await this.Page.on("dialog",async dialog=>{
    if(dialog.message().includes("Product added"))
    {
        await dialog.accept()
    }
   })
     await this.Page.locator(this.AddtoCartBtn).click()
    
  }
async GoTocartPage(){
    await this.Page.locator(this.cartLink).click()
}

}