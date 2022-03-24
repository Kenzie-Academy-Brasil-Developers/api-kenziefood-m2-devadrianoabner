import { Admin } from "./api/Admin.js";
import Api from "./api/Api.js";
import { Controller } from "./controllers/controller.js";
import { filters } from "./controllers/Filters.js";

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))
const productsList = await Api.getProduts()
const productsPrivade = await Admin.getProducts(infoUser)
const admin = document.querySelector('.linkAdmin')
const logOut = document.querySelector('.buttonLogOut')

if(infoUser != null){
    Controller.sendProductsCards(productsPrivade)
    filters(productsPrivade)
    admin.classList.remove('remover')
    logOut.classList.remove('remover')
}else{
    Controller.sendProductsCards(productsList)
    filters(productsList)
    admin.classList.add('remover')
    logOut.classList.add('remover')
}

logOut.addEventListener('click',()=>{
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
export {productsList,productsPrivade}