import { CreateProduct } from "./createAdminProduct.js"

class Delete {

   

    static createTemplate() {
        CreateProduct.main.innerHTML += `
        <div class='opacity'>
        <div class="content__admin--div" action="">
            <h2 class="content__admin--titleDel">Exclusão de produto</h2>
            <p class='content__admin--p'>Tem certeza que deja excluir o produto ?</p>
            <div class='content__buttonsDel'>
            <button class='buttonYes'>Sim</button>
            <button class='buttonNo'>Não</button>
            </div>
            <button class='buttonPopUp' type=button>X</button>
        </div>
        </div>
        `
    }

}
export {Delete}