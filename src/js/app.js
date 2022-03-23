import Api from "./api/Api.js";
import { Controller } from "./controllers/controller.js";
import { Filter } from "./models/Filter.js"

const productsList = await Api.getProduts()
Controller.sendProductsCards(productsList)


const filtAll = document.querySelector(".filt__all")
filtAll.addEventListener("click", () => {

    Controller.sendProductsCards(productsList)
})

const filtPan = document.querySelector(".filt__pan")
filtPan.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtPan)
    console.log(result)

    Controller.sendProductsCards(result)
})

const filtFruits = document.querySelector(".filt__fruits")
filtFruits.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtFruits)
    console.log(result)

    Controller.sendProductsCards(result)
})

const filtDrinks = document.querySelector(".filt__drinks")
filtDrinks.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtDrinks)
    console.log(result)

    Controller.sendProductsCards(result)
})

const searchLabel = document.querySelector(".input_search")
searchLabel.addEventListener("keyup", () => {
    
    const value = searchLabel.value
    const result = Filter.filterSearchLabel(productsList, value)
    console.log(result)

    Controller.sendProductsCards(result)
})

console.log(Api.infoUser)