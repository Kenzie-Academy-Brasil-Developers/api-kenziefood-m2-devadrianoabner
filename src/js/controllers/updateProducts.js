import { Admin } from "../api/Admin.js"
import { filtersAdmin } from "./filtersAdmin.js"
import { ProductsAdmin } from "./templateProductsAdmin.js"
const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

const updateProducts = async () => {
    const product = await Admin.getProducts(infoUser)
    
    ProductsAdmin.createTemplate(product)
    filtersAdmin(product)
}

export  {updateProducts}
