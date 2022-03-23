
import { Admin } from "../api/Admin.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";
import { Delete } from "../controllers/deleteAdminProduct.js";
import { EditProduct } from "../controllers/EditAdminProduct.js";


const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

const createProducts = document.querySelector('.createProductAdmin')
const teste = document.querySelector('.testeEdit')
const popUp = document.querySelector('.content__adminForm')
const buttonExit = document.querySelector('.buttonExit')

const testeDelete = document.querySelector('.testeDelete')

testeDelete.addEventListener('click',(e)=>{
    CreateProduct.main.innerHTML = ''
    let id = e.target.id
    Delete.createTemplate()
    
    popUp.classList.remove('remover')
    const btnYes = document.querySelector('.buttonYes')
    const btnNo = document.querySelector('.buttonNo')
    const btnPopUp = document.querySelector('.buttonPopUp')
    buttonSair.classList.remove('remover')
    btnYes.addEventListener('click',(e)=>{
        e.preventDefault()
        Admin.deleteProduct(infoUser,id)
        
        popUp.classList.add('remover')
    })
    btnNo.addEventListener('click',()=>{
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
    const excluir =  document.querySelector('.buttonEditarExcluir')

    btnPopUp.addEventListener('click', (e) => {
        e.preventDefault()
        popUp.classList.add('remover')
       
    })
    
    addButton.addEventListener('click', (e) => {
        EditProduct.categoria = e.target.value
    })
    excluir.addEventListener('click',(e)=>{
        e.preventDefault()
        popUp.classList.add('remover')
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        popUp.classList.add('remover')
        EditProduct.productForEdit(e.target,infoUser,id)
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
        CreateProduct.createNewProduct(e.target,infoUser)
    })
})

