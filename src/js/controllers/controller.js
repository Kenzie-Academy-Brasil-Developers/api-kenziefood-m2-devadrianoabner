import {Models} from "../models/models.js"

class Controller {
    static sendProductsCards(produtos){
        produtos.forEach( (produto) =>{
            Models.productCardCreator(produto)
        })
    }
} 

export {Controller}