import { Admin } from "../api/Admin.js"
import {CreateProduct} from "../controllers/createAdminProduct.js"
class EditProduct {

    static categoria = ''
    static createTemplate() {
        CreateProduct.main.innerHTML += `

        <div class='opacity'>
        <form class="content__admin--form editProduct" action="">
            <h2 class="content__admin--title">Editar Produto</h2>
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
            <div class='content_div'>
            <button id='submit'class='buttonEditarExcluir'>Excluir</button>
            <button id='submit'class='buttonEditar'>Salvar alterações</button>
            </div>
        </form>
        </div>
        `

    }
    static productForEdit(data, token, id) {
        let newProduct = {}

        for (let i = 0; i < data.length; i++) {
            const { name, value } = data[i]
            if (name) {
                newProduct[name] = value
            }
        }
        newProduct.categoria = this.categoria
        Admin.updateProducts(newProduct, token, id)

    }
}

export { EditProduct } 