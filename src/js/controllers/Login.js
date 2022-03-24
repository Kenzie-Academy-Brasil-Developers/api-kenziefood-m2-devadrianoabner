import Api from "../api/Api.js"

class Login {

        static main = document.querySelector('.content__login')
    static createTemplate(){
       this.main.innerHTML += `
       <form class="content__login--form"action="#">
       <h1 class="content__login--title">Login</h1>
       <label class="content__login--label" for="">Email</label>
       <input class="content__login--input"name="email" type="email" placeholder="Email">
       <label class="content__login--label" for="">Senha</label>
       <input class="content__login--input"name="password" type="password" placeholder="Senha">
       <button class='content__login--ButtonCadastro'>Login</button>
       <span class="content__register-span">Volte para home. Clique em 
                <a class="content__register-a"href="../../index.html">mim.</a>
            </span>
       <span class='msgBadError'></span>
        </form>
       `
    }

    static createObjLogin(data){
        let newLogin = {}

        for (let i = 0; i < data.length; i++) {
            const { name, value } = data[i]
            if (name) {
                newLogin[name] = value
            }
        }
        Api.login(newLogin)
    }
    
}

export default Login