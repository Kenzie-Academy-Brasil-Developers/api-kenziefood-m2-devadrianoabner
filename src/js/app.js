import { Admin } from "./api/Admin.js";
import Api from "./api/Api.js";
import { Controller } from "./controllers/controller.js";
import { Carrinho } from "./models/Carrinho.js";
import { Filter } from "./models/Filter.js"
import { filters } from "./controllers/Filters.js";
import { controllerDrop } from "./controllers/menuDrop.js";

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

const productsList = await Api.getProduts()
const admin = document.querySelector('.linkAdmin')
const logOut = document.querySelector('.buttonLogOut')
const mainSection = document.querySelector('.product__Cards')
const productsPrivade = await Admin.getProducts(infoUser)

if (infoUser != null && infoUser.error == undefined) {
    Controller.sendProductsCards(productsPrivade)
    filters(productsPrivade)
    admin.classList.remove('remover')
    logOut.classList.remove('remover')

} else {
    Controller.sendProductsCards(productsList)
    filters(productsList)
    admin.classList.add('remover')
    logOut.classList.add('remover')




    mainSection.addEventListener("click", (event) => {

        const btnBuy = event.target
        if (btnBuy.tagName == "IMG") {

            document.querySelector(".modal").style = "display: flex;"
            cartaux.style = "display:flex";
        }
    })



}
logOut.addEventListener('click', () => {
    window.location.replace("./src/pages/Login.html")
    localStorage.clear()
})

//ativando botão do carrinho versão mobile
const cart = document.querySelector(".main__cart")
const cartButton = document.querySelector(".cart__button")
const closeCart = document.querySelector(".cart__header__button")
const cartBoddy = document.querySelector('.cart__body')
const cartaux = document.querySelector(".main__cart__aux")
mainSection.addEventListener("click", (event) => {

    const btnBuy = event.target

    if (btnBuy.tagName == "IMG") {

        const idProduct = btnBuy.id

        let indexProd = productsPrivade.findIndex(produ => produ.id == idProduct)
        Carrinho.postProduct(productsPrivade[indexProd])
        Carrinho.sendProductsCards()
    }

})
cartButton.addEventListener("click", () => {
    cart.style = "display:flex;";
    cartaux.style = "display:block";
})

closeCart.addEventListener("click", () => {
    cart.style = "display:none;"
    cartaux.style = "display:none";
})


//fechando o modal de registrar 
let modalButtonRegisterClose = document.querySelector(".closeModal__title--resize")

modalButtonRegisterClose.addEventListener("click", () => {

    document.querySelector(".modal").style = "display: none;"
    cartaux.style = "display:none";
})

Carrinho.sendProductsCards()




cartBoddy.addEventListener("click", (event) => {

    const btnRemove = event.target

    if (btnRemove.className == "imgTrash__cart--resize" || btnRemove.className == "buttonProduct__remove") {

        const idProduct = btnRemove.id

        Carrinho.removeProduct(idProduct)
        Carrinho.sendProductsCards()
    }

})


const menuDrop = document.querySelector('.menuDrop')
menuDrop.addEventListener('click', controllerDrop)

export { productsList }