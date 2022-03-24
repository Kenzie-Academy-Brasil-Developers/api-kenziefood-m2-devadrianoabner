import { Admin } from "../api/Admin.js";
import { controllerButtons } from "../controllers/buttonsControls.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";
import { Delete } from "../controllers/deleteAdminProduct.js";
import { EditProduct } from "../controllers/EditAdminProduct.js";
import Api from "../api/Api.js";
import { Status } from "../controllers/Status.js";
import { productsAdmin } from "../controllers/templateProductsAdmin.js";
import { filters } from "../controllers/Filters.js"

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))
const products = await Admin.getProducts(infoUser); // Ai aqui vai ser infoUser

if(infoUser != null){
    // controllerButtons()
    productsAdmin.createTemplate(products)
    filters(products)
}else{
    Status.templateNo('Você não tem permissão para ver essa página')
    
}



 
    
    


