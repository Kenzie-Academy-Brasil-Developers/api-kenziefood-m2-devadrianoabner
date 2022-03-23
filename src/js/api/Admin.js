class Admin {

    static URL_API = "https://kenzie-food-api.herokuapp.com/"

    static async getProducts() {
        const response = await fetch(`${this.URL_API}`, { headers: { Authorization: "Bearer TokenDaEquipe" } })
        const dataResponse = response.json()
        console.log(dataResponse)
    }
}

export { Admin }