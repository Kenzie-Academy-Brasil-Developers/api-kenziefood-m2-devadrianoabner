const menu = document.querySelector('.menuDropItens')

let cont = true

function controllerDrop(){

    if(cont == true){
        menu.classList.remove('remover')
        cont = false
    }else if(cont == false){
        menu.classList.add('remover')
        cont = true
    }

}

export {controllerDrop}