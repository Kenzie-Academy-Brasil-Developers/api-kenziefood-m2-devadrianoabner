import Api from "./api/Api.js";
import { Controller } from "./Controller/controller.js";

const productsList = await Api.getProduts()

Controller.sendProductsCards(productsList)

console.log(productsList)

