import Login from "../controllers/Login.js";
import Api from "../api/Api.js";

Login.createTemplate()
console.log('oi')
const formLogin = document.querySelector('.content__login--form')

formLogin.addEventListener('submit',async(event)=>{
    event.preventDefault()
    let data = event.target
   await Login.createObjLogin(data)
})




