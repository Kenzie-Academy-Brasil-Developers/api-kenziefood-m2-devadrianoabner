import { Carrinho } from "./Carrinho.js"



class Models {

    static productCardCreator(product){

        //fazer a descontrução

        let productSection = document.querySelector(".product__Cards")
        let card = document.createElement("div")
        card.classList.add("card__Product")

        card.innerHTML = 
            `
            <figure class="card__Product--format">
                <img class="card__Product--resize" src="${product.imagem}">
            </figure>
            <h2 class="Title--format">${product.nome}</h2>
            <p class="Paragraph--format" >${product.descricao}</p>
            <h3 class="category--format">${product.categoria}</h3>
            <div class="product__Price">
                <p class="product__Price--format" >R$ ${Number(product.preco).toFixed(2)}</p>
                <button class="product__Button" id="btnToCart${product.id}">
                    <img class="product__Button--resize" src="./src/img/imagem_carrinho_figma.png" alt="carrinho" id="${product.id}">
                </button>
            </div>
            `
            productSection.appendChild(card)

        return card
    }

}

export {Models}