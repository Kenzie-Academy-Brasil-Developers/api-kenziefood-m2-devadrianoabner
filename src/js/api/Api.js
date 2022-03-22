import Register from "../controllers/Register.js"

class Api {

    static API_URL = "https://kenzie-food-api.herokuapp.com/"
    static  infoUser = {
        autenticacao: {},
        informacoes: {}
    }
    static async getProduts() {
        const response = await fetch(`${this.API_URL}products`)
        const responseData = response.json()
        return responseData
    }

    static async register(data) {
        const msgErro = document.querySelector('.msgBadError')
        const response = await fetch(`${this.API_URL}auth/register`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })

        switch (response.status) {
            case 200:
                msgErro.innerText = ''
                window.location.replace("./Login.html")
                break;
            default:
                msgErro.innerText = 'Ops, aconteceu algo de errado, tente novamente.'
        }
        const responseData = response.json()
        return responseData
    }

    static async login(data) {
        const msgErro = document.querySelector('.msgBadError')
        const response = await fetch(`${this.API_URL}auth/login`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })
        const responseData =  await response.json()
        
        switch (responseData.status) {
            case 'Error':
                msgErro.innerText = 'Ops, aconteceu algo de errado, tente novamente.'
                break;
                default:
                    msgErro.innerText = ''
                    window.location.replace("../../index.html")
                break
        }
        this.infoUser.autenticacao = responseData
        localStorage.setItem('info',JSON.stringify(Api.infoUser.autenticacao))
        return responseData
    }
}

export default Api