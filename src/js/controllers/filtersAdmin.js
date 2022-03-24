import { Filter } from "../models/Filter.js"
import { Controller } from "./controller.js";
import { ProductsAdmin } from "./templateProductsAdmin.js";

const filtersAdmin = (productsList) =>{
    const sectionOfProducts = document.querySelector(".product-list")

    const filtAll = document.querySelector(".filt__all")
    filtAll.addEventListener("click", () => {
        
        sectionOfProducts.innerHTML = ""
        ProductsAdmin.createTemplate(productsList)
        //ajustando posição dos produtos quando são filtrados
        sectionOfProducts.style ="align-content: space-around;"
    
    })
    
    const filtPan = document.querySelector(".filt__pan")
    filtPan.addEventListener("click", () => {
    
        const result = Filter.filterCategory(productsList, filtPan)
        sectionOfProducts.innerHTML = ""
        //ajustando posição dos produtos quando são filtrados
        sectionOfProducts.style ="align-content: space-between;"
        

        ProductsAdmin.createTemplate(result)
    })
    
    const filtFruits = document.querySelector(".filt__fruits")
    filtFruits.addEventListener("click", () => {
    
        const result = Filter.filterCategory(productsList, filtFruits)
        sectionOfProducts.innerHTML = ""
        ProductsAdmin.createTemplate(result)
         //ajustando posição dos produtos quando são filtrados
         sectionOfProducts.style ="align-content: space-between;"
    })
    
    const filtDrinks = document.querySelector(".filt__drinks")
    filtDrinks.addEventListener("click", () => {
        
        const result = Filter.filterCategory(productsList, filtDrinks)
        sectionOfProducts.innerHTML = ""
        ProductsAdmin.createTemplate(result)
         //ajustando posição dos produtos quando são filtrados
         sectionOfProducts.style ="align-content: space-between;"
    })
    
    const searchLabel = document.querySelector(".input_search")
    searchLabel.addEventListener("keyup", () => {
        
        const value = searchLabel.value
        const result = Filter.filterSearchLabel(productsList, value)
        sectionOfProducts.innerHTML = ""
        ProductsAdmin.createTemplate(result)
         //ajustando posição dos produtos quando são filtrados
         sectionOfProducts.style ="align-content: space-between;"
    })

}
export {filtersAdmin}