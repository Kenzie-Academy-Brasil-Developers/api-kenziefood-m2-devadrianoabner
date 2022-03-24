import { Admin } from "../api/Admin.js";
import { Status } from "../controllers/Status.js";
import { filtersAdmin } from "../controllers/filtersAdmin.js";
import { updateProducts } from "../controllers/updateProducts.js";
import { controllerDrop } from "../controllers/menuDrop.js";

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))
const products = await Admin.getProducts(infoUser); 

if(infoUser != null && infoUser.error == undefined){
    updateProducts()
    filtersAdmin(products)
}else{
    Status.templateNo('Você não tem permissão para ver essa página') 
}

const menuDrop = document.querySelector('.menuDrop')
menuDrop.addEventListener('click',controllerDrop)

 
    
    


