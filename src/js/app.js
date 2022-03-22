import Api from "./api/Api.js";
import { Filter } from "./models/Filter.js"

const productsList = await Api.getProduts()

const filtAll = document.querySelector(".filt__all")
filtAll.addEventListener("click", () => {

    console.log(productsList)

    //paginaDeProdutos.listarProdutos(productsList)
})

const filtPan = document.querySelector(".filt__pan")
filtPan.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtPan)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

const filtFruits = document.querySelector(".filt__fruits")
filtFruits.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtFruits)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

const filtDrinks = document.querySelector(".filt__drinks")
filtDrinks.addEventListener("click", () => {

    const result = Filter.filterCategory(productsList, filtDrinks)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

const searchLabel = document.getElementById("searchLabel")
searchLabel.addEventListener("keyup", () => {
    
    const value = searchLabel.value
    const result = Filter.filterSearchLabel(productsList, value)
    console.log(result)

    //paginaDeProdutos.listarProdutos(result)
})

