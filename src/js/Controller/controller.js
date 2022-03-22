import {Models} from "./../Models/models.js"

class Controller {
    static sendProductsCards(produtos){
        produtos.forEach( (produto) =>{
            Models.productCardCreator(produto)
        })
    }
} 

export {Controller}