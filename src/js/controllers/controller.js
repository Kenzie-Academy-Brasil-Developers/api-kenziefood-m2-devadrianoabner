import {Models} from "../models/models.js"

class Controller {
    static sendProductsCards(produtos){
        
        let productSection = document.querySelector(".product__Cards")

        productSection.innerHTML = ""
        
        produtos.forEach( (produto) =>{
            Models.productCardCreator(produto)
        })
    }
} 

export {Controller}