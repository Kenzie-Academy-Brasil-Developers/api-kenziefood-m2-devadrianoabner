
import { Admin } from "../api/Admin.js";
import { controllerButtons } from "../controllers/buttonsControls.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";
import { Delete } from "../controllers/deleteAdminProduct.js";
import { EditProduct } from "../controllers/EditAdminProduct.js";
import { Status } from "../controllers/Status.js";



const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

if(infoUser != null){
    controllerButtons()
    console.log('teste')
}else{
    Status.templateNo('Você não tem permissão para ver essa página')
    
}


