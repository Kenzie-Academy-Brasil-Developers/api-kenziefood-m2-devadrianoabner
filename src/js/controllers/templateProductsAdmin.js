import { Admin } from "../api/Admin.js";
import { CreateProduct } from "./createAdminProduct.js";
import { Delete } from "./deleteAdminProduct.js";
import { EditProduct } from "./EditAdminProduct.js";
import { updateProducts } from "./updateProducts.js";


const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))


class ProductsAdmin {

    static main = document.getElementById('list')
    static createTemplate(products) {
        const createProducts = document.querySelector('.createProductAdmin')
        const popUp = document.querySelector('.content__adminForm')

        products.forEach(product => {
            

            let imgProduct = document.createElement('img')
            imgProduct.classList.add('imgProduct')
            imgProduct.src = product.imagem
            imgProduct.alt = product.nome
            let div2 = document.createElement('div');
            div2.className = "product-detail";

            this.main.appendChild(div2);
            let divImg = document.createElement('div');
            divImg.className = 'divImg'; //flex, row
            div2.appendChild(divImg);

            let imgDiv = document.createElement('img');
            imgDiv.src = product.imagem;
            imgDiv.className = 'imgDiv'; //tamanho e radius pra deixar redonda
            divImg.appendChild(imgDiv);

            let p1 = document.createElement('p');
            p1.classList.add('textList')
            p1.innerText = product.nome;
            div2.appendChild(p1);

            let p2 = document.createElement('p');
            p2.classList.add('textList')
            p2.innerText = product.categoria;
            div2.appendChild(p2);

            let p3 = document.createElement('p');
            p3.classList.add('textList')
            p3.innerText = product.descricao;
            div2.appendChild(p3);

            let div3 = document.createElement('div');
            div2.appendChild(div3);

            let button1 = document.createElement('button');
            button1.className = 'button1';
            button1.id = product.id
            button1.addEventListener('click', editItem)
            div3.appendChild(button1);

            let img1 = document.createElement('img');
            img1.classList.add('imgButton')
            img1.src = "../img/edit.svg";
            button1.appendChild(img1);

            let button2 = document.createElement('button');
            button2.className = 'button1';
            button2.id = product.id
            button2.addEventListener('click', deleteItem);
            div3.appendChild(button2);

            let img2 = document.createElement('img');
            img2.classList.add('imgButton')
            img2.src = "../img/trash.svg";
            button2.appendChild(img2);
        });
        function editItem(e) {
            CreateProduct.main.innerHTML = ''
            let id = e.target.id
            console.log(id)
            EditProduct.createTemplate()
            popUp.classList.remove('remover')
            const addButton = document.querySelector('.content__buttons')
            const form = document.querySelector('.content__admin--form')
            const btnPopUp = document.querySelector('.buttonPopUp')
            const excluir = document.querySelector('.buttonEditarExcluir')

            btnPopUp.addEventListener('click', (e) => {
                e.preventDefault()
                popUp.classList.add('remover')

            })

            addButton.addEventListener('click', (e) => {
                EditProduct.categoria = e.target.value
            })
            excluir.addEventListener('click', (e) => {
                e.preventDefault()
                popUp.classList.add('remover')
            })
            form.addEventListener('submit', async (e) => {
                e.preventDefault()
                popUp.classList.add('remover')
                ProductsAdmin.main.innerHTML = ''
                 EditProduct.productForEdit(e.target, infoUser, id)
                 await updateProducts()
            })
        }

        function deleteItem(e) {
            CreateProduct.main.innerHTML = ''
            let id = e.target.id
            Delete.createTemplate()
            popUp.classList.remove('remover')
            const btnYes = document.querySelector('.buttonYes')
            const btnNo = document.querySelector('.buttonNo')
            const btnPopUp = document.querySelector('.buttonPopUp')

            btnYes.addEventListener('click', async (e) => {
                e.preventDefault()
                ProductsAdmin.main.innerHTML = ''
               await Admin.deleteProduct(infoUser, id)
                await updateProducts()
                popUp.classList.add('remover')
            })
            btnNo.addEventListener('click', () => {
                popUp.classList.add('remover')
            })
            btnPopUp.addEventListener('click', (e) => {
                e.preventDefault()
                popUp.classList.add('remover')

            })
        }

        createProducts.addEventListener('click', () => {
            CreateProduct.createTemplate()
            popUp.classList.remove('remover')
            const addButton = document.querySelector('.content__buttons')
            const form = document.querySelector('.content__admin--form')
            const btnPopUp = document.querySelector('.buttonPopUp')

            btnPopUp.addEventListener('click', () => {
                popUp.classList.add('remover')
            })

            addButton.addEventListener('click', (e) => {
                CreateProduct.categoria = e.target.value
            })
            form.addEventListener('submit', async(e) => {
                e.preventDefault()
                popUp.classList.add('remover')
                ProductsAdmin.main.innerHTML = ''
                await CreateProduct.createNewProduct(e.target, infoUser)
                await updateProducts()
               
            })
        })
    }
}

export { ProductsAdmin }