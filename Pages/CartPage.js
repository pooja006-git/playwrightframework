exports.CartPage= class CartPage {


constructor(Page){
    this.Page=Page
    this.noOfproductsInCart='//tbody[@id="tbodyid"]/tr/td[2]'
    this.productPrice='//tbody[@id="tbodyid"]/tr/td[3]'
    this.totalPrice="##totalp"
    this.PlaceOrderBtn='//button[normalize-space()="Place Order"]'
    this.NameInput="#name"
    this.CountryInput="#country"
    this.CityInput="#city"
    this.CreditInput="#card"
    this.MonthInput="#month"
    this.YearInput="#year"
    this.purchaseBtn='//button[normalize-space()="Purchase"]'
    this.successMsg='//h2[normalize-space()="Thank you for your purchase!"]'
    this.OkBtn='//button[normalize-space()="OK"]'
}

async getNoofProductsInCart(productname){
    await this.Page.waitForSelector(this.noOfproductsInCart)
    const productInCart=await this.Page.$$(this.noOfproductsInCart)
    for(const productCart of productInCart)
    {
        const productCartext=await productCart.innerText()
        console.log(productCartext)
        if(productname===productCartext)
        {
            return true
            break;
        }
    }
    return false;
}

 async getTotalPriceInCart(){
    await this.Page.waitForSelector(this.productPrice)
    const productPriceInCart=await this.Page.$$(this.productPrice)
    let total=0
    for(const price of productPriceInCart)
    {
        const priceText=await price.innerText()
        total=total+parseInt(priceText)
    }
    return total
    const totalpriceText=await this.Page.locator(this.totalPrice).innerText()
    const totalPriceValue=parseInt(totalpriceText)
    if(total===totalPriceValue)
    {
        return true
    }
 }
       

 async placeOrder(name,country,city,card,month,year){
    await this.Page.locator(this.PlaceOrderBtn).click()
    await this.Page.locator(this.NameInput).fill(name)
    await this.Page.locator(this.CountryInput).fill(country)
    await this.Page.locator(this.CityInput).fill(city)
    await this.Page.locator(this.CreditInput).fill(card)
    await this.Page.locator(this.MonthInput).fill(month)
    await this.Page.locator(this.YearInput).fill(year)
    await this.Page.locator(this.purchaseBtn).click()
    if(await this.Page.locator(this.successMsg).isVisible())
    {
        await this.Page.locator(this.OkBtn).click()
        return true
    }

 }
    
}




