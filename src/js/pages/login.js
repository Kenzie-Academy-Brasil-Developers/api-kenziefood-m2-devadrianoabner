import Login from "../controllers/Login.js";
import Api from "../api/Api.js";

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))

if(infoUser != null){
    window.location.replace("../../index.html")
}else{
    Login.createTemplate()
    const formLogin = document.querySelector('.content__login--form')
    
    formLogin.addEventListener('submit',async(event)=>{
        event.preventDefault()
        let data = event.target
       await Login.createObjLogin(data)
    })
}




