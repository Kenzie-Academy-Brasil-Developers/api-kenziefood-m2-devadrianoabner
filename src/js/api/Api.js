class Api {

    static API_URL = "https://kenzie-food-api.herokuapp.com/"

    static async getProduts(){
        const response = await fetch(`${this.API_URL}products`)
        const responseData = response.json()    
        return responseData
    }
}

export default Api