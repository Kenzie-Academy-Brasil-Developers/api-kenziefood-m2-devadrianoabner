
import { Admin } from "../api/Admin.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";
import { EditProduct } from "../controllers/EditAdminProduct.js";


const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

const createProducts = document.querySelector('.createProductAdmin')
const teste = document.querySelector('.testeEdit')
const popUp = document.querySelector('.content__adminForm')


teste.addEventListener('click', (e) => {
    let id = e.target.id
    EditProduct.createTemplate()
    popUp.classList.remove('remover')
    const addButton = document.querySelector('.content__buttons')
    const form = document.querySelector('.content__admin--form')
    const btnPopUp = document.querySelector('.buttonPopUp')

    btnPopUp.addEventListener('click', (e) => {
        e.preventDefault()
       
        popUp.classList.add('remover')
    
        console.log(id)
    })

    addButton.addEventListener('click', (e) => {
        EditProduct.categoria = e.target.value
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


