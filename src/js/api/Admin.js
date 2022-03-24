import { Status } from "../controllers/Status.js"

class Admin {

    static URL_API = "https://kenzie-food-api.herokuapp.com/"

    static async getProducts(token) {
        const response = await fetch(`${this.URL_API}my/products`, { headers: { Authorization: `Bearer ${token}` } })
        const dataResponse = await response.json()
        return dataResponse

    }
    static async createProducts(data, token) {
        const response = await fetch(`${this.URL_API}my/products`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            "body": JSON.stringify(data)
        })
        switch (response.status) {
            case 201:
                Status.templateYes('Produto adicionado com sucesso')
                break;
            default:
                Status.templateNo('Ocorreu algum erro, o produto não foi adicionado')
        }
        const responseData = await response.json()
        return responseData
    }

    static async updateProducts(data, token, id) {
        const response = await fetch(`${this.URL_API}my/products/${id}`, {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            "body": JSON.stringify(data)
        })
        switch (response.status) {
            case 202:
                Status.templateYes('Produto editado com sucesso')
                break;
            default:
                Status.templateNo('Ocorreu algum erro, o produto não foi editado')
        }
        const responseData = await response.json()
        return responseData
    }

    static async deleteProduct(token, id) {
        const response = await fetch(`${this.URL_API}my/products/${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        switch (response.status) {
            case 204:
                Status.templateYes('Produto deletado com sucesso')
                break;
            default:
                Status.templateNo('Ocorreu algum erro, o produto não foi deletado')
        }
        const responseData = await response
        return responseData
    }
}

export { Admin }