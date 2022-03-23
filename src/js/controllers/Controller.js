import {Models} from "../models/Models.js"

class Controller {
    static sendProductsCards(produtos){
        produtos.forEach( (produto) =>{
            Models.productCardCreator(produto)
        })
    }
} 

export {Controller}