import Api from "./api/Api.js";

const productsList = await Api.getProduts()

console.log(productsList)

