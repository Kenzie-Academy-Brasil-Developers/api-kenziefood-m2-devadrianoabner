import Api from "../api/Api.js";
import Register from "../controllers/Register.js"

Register.createTemplate()
// Api.register('data')

const form = document.querySelector(".content__register--form")

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let textInputs = event.target
    Register.createObjRegister(textInputs)
})