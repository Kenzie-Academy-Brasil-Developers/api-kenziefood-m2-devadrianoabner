import Api from "./api/Api.js";
import { Controller } from "./controllers/controller.js";
import { filters } from "./controllers/Filters.js";


const productsList = await Api.getProduts()
const louOut = document.querySelector('.buttonLogOut')
Controller.sendProductsCards(productsList)
filters(productsList)


louOut.addEventListener('click',()=>{
    window.location.replace("./src/pages/Login.html")
    localStorage.clear('@kenzie_food:token')
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
export {productsList}