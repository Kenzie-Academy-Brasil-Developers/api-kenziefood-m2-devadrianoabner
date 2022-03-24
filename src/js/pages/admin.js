import { Admin } from "../api/Admin.js";
import { CreateProduct } from "../controllers/createAdminProduct.js";
import { Delete } from "../controllers/deleteAdminProduct.js";
import { EditProduct } from "../controllers/EditAdminProduct.js";
import Api from "../api/Api.js";
import { Status } from "../controllers/Status.js";
import { ProductsAdmin } from "../controllers/templateProductsAdmin.js";

import { filtersAdmin } from "../controllers/filtersAdmin.js";
import { updateProducts } from "../controllers/updateProducts.js";



const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))
const products = await Admin.getProducts(infoUser); 

if(infoUser != null){
    updateProducts()
    filtersAdmin(products)
}else{
    Status.templateNo('Você não tem permissão para ver essa página') 
}



 
    
    


