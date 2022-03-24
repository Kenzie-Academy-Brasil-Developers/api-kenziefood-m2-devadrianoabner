import { Admin } from "../api/Admin.js";
import { CreateProduct } from "./createAdminProduct.js";
import { Delete } from "./deleteAdminProduct.js";
import { EditProduct } from "./EditAdminProduct.js";

class productsAdmin {


    static createTemplate(products) {
        const createProducts = document.querySelector('.createProductAdmin')
        const teste = document.querySelector('.testeEdit')
        const popUp = document.querySelector('.content__adminForm')
        products.forEach(product => {
            const div1 = document.getElementById('list');

            let imgProduct = document.createElement('img')
            imgProduct.classList.add('imgProduct')
            imgProduct.src = product.imagem
            imgProduct.alt = product.nome
            let div2 = document.createElement('div');
            div2.className = "product-detail";
            
            div1.appendChild(div2);

            let p1 = document.createElement('p');
            p1.innerText = product.nome;
            div2.appendChild(p1);

            let p2 = document.createElement('p');
            p2.innerText = product.categoria;
            div2.appendChild(p2);

            let p3 = document.createElement('p');
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
            img1.src = "../img/edit.svg";
            button1.appendChild(img1);

            let button2 = document.createElement('button');
            button2.className = 'button1';
            button2.id = product.id
            button2.addEventListener('click', deleteItem);
            div3.appendChild(button2);

            let img2 = document.createElement('img');
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
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                popUp.classList.add('remover')
                EditProduct.productForEdit(e.target, infoUser, id)
            })
        }

        function deleteItem(e) {
            CreateProduct.main.innerHTML = ''
            let id = e.target.id
            console.log(id)
            Delete.createTemplate()
            popUp.classList.remove('remover')
            const btnYes = document.querySelector('.buttonYes')
            const btnNo = document.querySelector('.buttonNo')
            const btnPopUp = document.querySelector('.buttonPopUp')

            btnYes.addEventListener('click', (e) => {
                e.preventDefault()
                Admin.deleteProduct(infoUser, id)

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
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                popUp.classList.add('remover')
                CreateProduct.createNewProduct(e.target, infoUser)
            })
        })


    }

}

export { productsAdmin }