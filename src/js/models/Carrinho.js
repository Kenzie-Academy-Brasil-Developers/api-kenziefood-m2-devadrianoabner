const sectionCart = document.querySelector('.main__cart')
      
const divCartBody = document.querySelector('.cart__body')
const divQuantity = document.createElement('div')
const divTotalPrice = document.createElement('div')
const quantity = document.createElement('h3')
const totalPrice = document.createElement('h3')
const quantityNum = document.createElement('p')
const totalPriceNum = document.createElement('p')

divCartBody.classList.add('cart__body')
divQuantity.classList.add('cart__footerQuantity')
divTotalPrice.classList.add('cart__footerTotalPrice')
quantity.classList.add("cart__footerQuantity--format")
totalPrice.classList.add("cart__footerPrice--format")
quantityNum.classList.add("cart__footerQuantity__Number--format")
totalPriceNum.classList.add("cart__footerPrice__Number--format")

quantity.innerText = 'Quantidade'
totalPrice.innerText = 'Total'
totalPriceNum.innerText = 0

divQuantity.appendChild(quantity)
divQuantity.appendChild(quantityNum)
divTotalPrice.appendChild(totalPrice)
divTotalPrice.appendChild(totalPriceNum)

sectionCart.appendChild(divCartBody)
sectionCart.appendChild(divQuantity)
sectionCart.appendChild(divTotalPrice)

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