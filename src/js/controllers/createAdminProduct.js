import Api from "../api/Api.js"
import { Admin } from "../api/Admin.js"
class CreateProduct {

    static main = document.querySelector('.content__adminForm')
    static categoria = ''
    static createTemplate(){
        
        this.main.innerHTML = ''
        this.main.innerHTML += `
        <div class='opacity'>
        <form class="content__admin--form" action="">
            <h2 class="content__admin--title">Cadastrar Produto</h2>
            <label class="content__admin--label" for="">Nome do Produto</label>
            <input  class="content__admin--input" name="nome" type="text" placeholder="Digitar o nome"/>
            <textarea class="content__admin--texterea" name="descricao" placeholder="Digitar a descrição"></textarea> 
            <label  class="content__admin--label" for="">Categorias</label>
            <div class='content__buttons'>
            <button  class="content__admin--inputButton" name="categoria" value="Panificadora" type='button'>Panificadora</button>
            <button  class="content__admin--inputButton" name="categoria" value="Frutas" type='button'>Frutas</button>
            <button  class="content__admin--inputButton"  value="Bebidas" type='button'>Bebidas</button>
            </div>
            <button class='buttonPopUp' type=button>X</button>
            <label class="content__admin--label" for="">Valor do Produto</label>
            <input  class="content__admin--input" name='preco' type="number" placeholder="Digitar o valor aqui">
            <label class="content__admin--label" for="">Link da imagem</label>
            <input class="content__admin--input"type="text" name='imagem' placeholder="Inserir link"/>
            <button id='submit'class='buttonCadastrar' >Cadastrar Produto</button>
        </form>
        </div>
        `

    }
    static createNewProduct(data,token){
        let newProduct = {}
        
        for (let i = 0; i < data.length; i++) {
            const { name, value } = data[i]
            if (name) {
                newProduct[name] = value
            }
        }
        newProduct.categoria = this.categoria
        console.log(newProduct)
        Admin.createProducts(newProduct,token)

    }
}

export {CreateProduct}