import Api from "../api/Api.js";

export class User{

    static verifyAuthentication(user){

        for(let i = 0; i < Api.infoUser.autenticacao.length; i++){
            if(user.email === Api.infoUser.autenticacao[i].email || user.password === Api.infoUser.autenticacao[i].password){
                console.log('Não é anônimo')
            } else{
                console.log('É anônimo')
            }
        }
    }
}