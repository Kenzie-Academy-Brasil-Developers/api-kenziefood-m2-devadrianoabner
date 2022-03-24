const sectionCart = document.querySelector('.main__cart')
      
const divCartBody = document.querySelector('.cart__body')

const quantityNum = document.querySelector('.cart__footerQuantity__Number--format')
const totalPriceNum = document.querySelector('.cart__footerPrice__Number--format')
const divQuantity = document.querySelector('.cart__footerQuantity')
const divTotalPrice = document.querySelector('.cart__footerTotalPrice')
const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))


export class Carrinho{

    static products = []
    
    static interfaceCarrinho(product){

      let cardCart = document.createElement("div")
        cardCart.classList.add("cardCart__Product")

        cardCart.innerHTML = `
        <div class="cart_cardBody">
                 <figure class="productImg__cart">
                     <img class="productImg__cart--resize" src="${product.imagem}">
                 </figure>
                <div>
                    <h2 class="productCart__title--format">${product.nome}</h2>
                    <p class="productCart__category--format">${product.categoria}</p>
                    <h3 class="productCart__price--format">${product.preco}</h3>
                </div>
                <button class="buttonProduct__remove">
                <img src="./src/img/trash.png" class="imgTrash__cart--resize">
                </button>
          </div>`
      
      divCartBody.appendChild(cardCart)
    }

    static sendProductsCards(){

      divCartBody.innerHTML = ''
      quantityNum.innerText = this.products.length
      this.totalValue()

      this.getLocalStorage().forEach(product =>{
          this.interfaceCarrinho(product)
      })
  }

    static totalValue() {

        const total = this.products.reduce((total, product) => {
          const productPrice = product.preco;
          return total + Number(productPrice);
        }, 0)
    
        totalPriceNum.innerText = `R$ ${total.toFixed(2)}`
    }

    static getProducts(){
      return this.products
    }

    static postProduct(produt){
      
        this.products.push(produt)
        this.setLocalStorage()
        divQuantity.style = "display: flex;"
        divTotalPrice.style = "display: flex;"
        divCartBody.style = "background-image: none"

    }

    static setLocalStorage(){

      const productsCart  =  JSON.stringify(this.products)

      localStorage.setItem('produtos', productsCart)

    }

    static getLocalStorage(){

      const productsJson = localStorage.getItem("produtos")
      
      if(typeof productsJson === "string"){
          
          const productsCart   =  JSON.parse(productsJson)

          this.products = productsCart 

          return this.products

      }else{

          return []
      
      }
     
  }
  
    static initDataBase(){
    this.getLocalStorage()
    }
}

Carrinho.initDataBase()