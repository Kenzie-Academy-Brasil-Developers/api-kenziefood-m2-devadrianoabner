import Api from "./api/Api.js";
import { Controller } from "./Controller/controller.js";
import { Filter } from "./models/Filter.js"

const productsList = await Api.getProduts()
Controller.sendProductsCards(productsList)
console.log(productsList)
const sectionOfProducts = document.querySelector(".product__Cards")


const filtAll = document.querySelector(".filt__all")
filtAll.addEventListener("click", () => {

    
    sectionOfProducts.innerHTML = ""
    Controller.sendProductsCards(productsList)


    console.log(productsList)
    //paginaDeProdutos.listarProdutos(productsList)
})

const filtPan = document.querySelector(".filt__pan")
filtPan.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtPan)
sectionOfProducts.innerHTML = ""
    
    Controller.sendProductsCards(result)    

    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

const filtFruits = document.querySelector(".filt__fruits")
filtFruits.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtFruits)
    sectionOfProducts.innerHTML = ""
    
    Controller.sendProductsCards(result)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

const filtDrinks = document.querySelector(".filt__drinks")
filtDrinks.addEventListener("click", () => {
    
    const result = Filter.filterCategory(productsList, filtDrinks)
    sectionOfProducts.innerHTML = ""
    
    Controller.sendProductsCards(result)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

const searchLabel = document.querySelector(".input_search")
searchLabel.addEventListener("keyup", () => {
    
    const value = searchLabel.value
    const result = Filter.filterSearchLabel(productsList, value)
    sectionOfProducts.innerHTML = ""
    
    Controller.sendProductsCards(result)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

sectionOfProducts.addEventListener("click", (event) =>{
    
   let productId = event.target.id 
   
})