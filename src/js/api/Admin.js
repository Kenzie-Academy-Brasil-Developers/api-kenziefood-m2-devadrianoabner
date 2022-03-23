class Admin {

    static URL_API = "https://kenzie-food-api.herokuapp.com/"

    static async getProducts(token) {
        const response = await fetch(`${this.URL_API}my/products`, { headers: { Authorization: `Bearer ${token}` } })
        const dataResponse = await response.json()
        console.log(dataResponse)
    }
    static async createProducts(data,token) {
        const response = await fetch(`${this.URL_API}my/products`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            "body": JSON.stringify(data)
        })
        const responseData = await response.json()
        console.log(responseData)
        return responseData
    }

    static async updateProducts(data,token, id) {
        const response = await fetch(`${this.URL_API}my/products/${id}`, {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            "body": JSON.stringify(data)
        })

        const responseData = response.json()
        console.log(responseData)
        return responseData
    }

    static async deleteProduct(token,id){
        const response = await fetch(`${this.URL_API}my/products/${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        const responseData = await response.json()
        console.log(responseData)
        return responseData
    }
}

export { Admin }