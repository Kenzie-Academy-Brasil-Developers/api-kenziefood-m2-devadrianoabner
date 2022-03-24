import { Filter } from "../models/Filter.js"
import { Controller } from "./controller.js";

const filters = (productsList) =>{
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

}
export {filters}