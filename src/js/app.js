import Api from "./api/Api.js";
import { Controller } from "./controllers/controller.js";
import { Filter } from "./models/Filter.js"

const productsList = await Api.getProduts()
Controller.sendProductsCards(productsList)


const sectionOfProducts = document.querySelector(".product__Cards")


const filtAll = document.querySelector(".filt__all")
filtAll.addEventListener("click", () => {
    
    sectionOfProducts.innerHTML = ""
    Controller.sendProductsCards(productsList)

})

const filtPan = document.querySelector(".filt__pan")
filtPan.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtPan)
sectionOfProducts.innerHTML = ""
    
    Controller.sendProductsCards(result)
})

const filtFruits = document.querySelector(".filt__fruits")
filtFruits.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtFruits)
    sectionOfProducts.innerHTML = ""
    Controller.sendProductsCards(result)
})

const filtDrinks = document.querySelector(".filt__drinks")
filtDrinks.addEventListener("click", () => {
    
    const result = Filter.filterCategory(productsList, filtDrinks)
    sectionOfProducts.innerHTML = ""
    Controller.sendProductsCards(result)
})

const searchLabel = document.querySelector(".input_search")
searchLabel.addEventListener("keyup", () => {
    
    const value = searchLabel.value
    const result = Filter.filterSearchLabel(productsList, value)
    sectionOfProducts.innerHTML = ""
    Controller.sendProductsCards(result)
})


//ativando botão do carrinho versão mobile
const cart = document.querySelector(".main__cart")
const cartButton = document.querySelector(".cart__button")
const closeCart = document.querySelector(".cart__header__button")
const cartBoddy = document.querySelector(".cart__body")
const cartCard = document.querySelector(".cart_cardBody")

cartButton.addEventListener("click", () =>{

    cart.style = "display:block;"

})

closeCart.addEventListener("click", () =>{

    cart.style = "display:none;"

})
// fazer addEventListener no body do cart
cartBoddy.addEventListener("click", (event) =>{

    if(event.target.id === "remove"){
        // fazer um splice 
        // cartCard.splice()
    }
})
