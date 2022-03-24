import { Admin } from "./api/Admin.js";
import Api from "./api/Api.js";
import { Controller } from "./controllers/controller.js";
import { Carrinho } from "./models/Carrinho.js";
import { Filter } from "./models/Filter.js"
import { filters } from "./controllers/Filters.js";

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))
const productsList = await Api.getProduts()
const admin = document.querySelector('.linkAdmin')
const logOut = document.querySelector('.buttonLogOut')
const mainSection = document.querySelector('.product__Cards')

if(infoUser != null){
    const productsPrivade = await Admin.getProducts(infoUser)
    Controller.sendProductsCards(productsPrivade)
    filters(productsPrivade)
    admin.classList.remove('remover')
    logOut.classList.remove('remover')

    mainSection.addEventListener("click", (event) => {
     
        const btnBuy  = event.target
        
        if(btnBuy.tagName == "IMG"){
    
            const idProduto  = btnBuy.id

            let indexProd = productsPrivade.findIndex(produ => produ.id == idProduto)
            Carrinho.postProduct(productsPrivade[indexProd])
            Carrinho.sendProductsCards()
        }
    })

}else{
    Controller.sendProductsCards(productsList)
    filters(productsList)
    admin.classList.add('remover')
    logOut.classList.add('remover')
   
}

logOut.addEventListener('click',()=>{
    window.location.replace("./src/pages/Login.html")
    localStorage.clear()
})

//ativando botão do carrinho versão mobile
const cart = document.querySelector(".main__cart")
const cartButton = document.querySelector(".cart__button")
const closeCart = document.querySelector(".cart__header__button")

cartButton.addEventListener("click", () =>{

    cart.style = "display:block;"

})

closeCart.addEventListener("click", () =>{
    
    cart.style = "display:none;"
                
})

Carrinho.sendProductsCards()

export {productsList}
