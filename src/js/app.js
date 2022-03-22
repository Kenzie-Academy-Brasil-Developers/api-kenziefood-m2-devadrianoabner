

import Api from "./api/Api.js";
import { Filter } from "./models/Filter.js"

const productsList = await Api.getProduts()
const filtAll = document.getElementById("all")
filtAll.addEventListener("click", function(){

    const result = Filter.filterCategory('products', filtAll)

    //paginaDeProdutos.listarProdutos(result)
})

const filtPan = document.getElementById("pan")
filtPan.addEventListener("click", function(){

    const result = Filter.filterCategory('products', filtPan)

    //paginaDeProdutos.listarProdutos(result)
})

const filtFruits = document.getElementById("fruits")
filtFruits.addEventListener("click", function(){

    const result = Filter.filterCategory('products', filtFruits)

    //paginaDeProdutos.listarProdutos(result)
})

const filtDrinks = document.getElementById("drinks")
filtDrinks.addEventListener("click", function(){

    const result = Filter.filterCategory('products', filtDrinks)

    //paginaDeProdutos.listarProdutos(result)
})

const searchLabel = document.getElementById("searchLabel")
searchLabel.addEventListener("keyup", function(){
    
    const value = searchLabel.value
    const result = Filter.filterSearchLabel('products', value)

    //paginaDeProdutos.listarProdutos(result)
})

