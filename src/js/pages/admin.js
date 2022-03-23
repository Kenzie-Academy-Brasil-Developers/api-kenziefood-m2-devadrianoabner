import { Admin } from "../api/Admin.js";

const infoUser = JSON.parse(localStorage.getItem('@kenzie_food:token'))





function createGrid(element) {
    const div1 = getElementById('list');

    let div2 = document.createElement('div');
    div2.className = "product-detail";
    div1.appendChild(div2);

    let p1 = document.createElement('p');
    p1.innerText = 'Banana';
    div2.appendChild(div1);

    let p2 = document.createElement('p');
    p2.innerText = 'Fruta';
    div2.appendChild(p2);

    let p3 = document.createElement('p');
    p2.innerText = 'Banana';
    div2.appendChild(p3);

    let div3 = document.createElement('div');
    div2.appendChild(div3);

    let button1 = document.createElement('button');
    button1.innerText = 'Editar';
    div3.appendChild(button1);

    let button2 = document.createElement('button');
    button2.innerText = 'Excluir';
    div3.appendChild(button2);

}