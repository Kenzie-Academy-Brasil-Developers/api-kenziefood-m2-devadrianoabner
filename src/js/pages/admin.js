import { Admin } from "../api/Admin.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";
import { Delete } from "../controllers/deleteAdminProduct.js";
import { EditProduct } from "../controllers/EditAdminProduct.js";


const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

const createProducts = document.querySelector('.createProductAdmin')
const teste = document.querySelector('.testeEdit')
const popUp = document.querySelector('.content__adminForm')


const testeDelete = document.querySelector('.testeDelete')

testeDelete.addEventListener('click', (e) => {
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
})

teste.addEventListener('click', (e) => {
    CreateProduct.main.innerHTML = ''
    let id = e.target.id
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
})

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




function createGrid(element) {
    const div1 = getElementById('list');

    let div2 = document.createElement('div');
    div2.className = "product-detail";
    div1.appendChild(div2);

    let p1 = document.createElement('p');
    p1.innerText = 'Banana';
    div2.appendChild(div1);

    let p2 = document.createElement('p');
    p2.innerText = 'Fruta';
    div2.appendChild(p2);

    let p3 = document.createElement('p');
    p2.innerText = 'Banana';
    div2.appendChild(p3);

    let div3 = document.createElement('div');
    div2.appendChild(div3);

    let button1 = document.createElement('button');
    button1.innerText = 'Editar';
    div3.appendChild(button1);

    let button2 = document.createElement('button');
    button2.innerText = 'Excluir';
    div3.appendChild(button2);

}