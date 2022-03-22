import Api from "../api/Api.js"

class Register {

    static main = document.querySelector(".content__register")
    static createTemplate(msg) {
        this.main.innerHTML += `
        <form class="content__register--form"action="#">
            <h1 class="content__register--title">Cadastro</h1>
            <label class="content__register--label" for="">Nome de Usuário</label>
            <input class="content__register--input"name="name" type="text" placeholder="Nome de usuário">
            <label class="content__register--label" for="">Email</label>
            <input class="content__register--input"name="email" type="email" placeholder="Email">
            <label class="content__register--label" for="">Senha</label>
            <input class="content__register--input"name="password" type="password" placeholder="Senha">
            <button class='content__register--ButtonCadastro'>Cadastrar</button>
            <span class="content__register-span">Já possui Cadastro? Clique em 
                <a class="content__register-a"href="./Login.html">mim.</a>
            </span>
            <span class='msgBadError'></span>
        </form>
        `
    }

    static createObjRegister(data) {
        let newRegister = {}

        for (let i = 0; i < data.length; i++) {
            const { name, value } = data[i]
            if (name) {
                newRegister[name] = value
            }
        }
        Api.register(newRegister)
    }
}

export default Register