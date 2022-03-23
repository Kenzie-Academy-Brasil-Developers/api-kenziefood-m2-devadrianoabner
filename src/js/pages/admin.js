
import { Admin } from "../api/Admin.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";


const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))


const createProducts = document.querySelector('.createProductAdmin')
const popUp = document.querySelector('.content__adminForm')

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
        CreateProduct.createNewProduct(e.target)
    })
})
