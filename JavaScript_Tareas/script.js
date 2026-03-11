
const button = document.getElementById('agregar');
const entrada= document.getElementById('entrada');
const listatarea=document.getElementById('listatareas');
const bcambiarcolor=document.getElementById('cambiarcolor');

button.addEventListener('click', agregar);
bcambiarcolor.addEventListener('click', colorrojo);

function colorrojo() {
    const listatareasli=document.querySelectorAll('li');
    for(let i=0; i<listatareasli.length; i++)
        {listatareasli[i].style.color='red';}
}


function agregar() {
    const litarea = document.createElement("li");


    const node = document.createTextNode(entrada.value);
    litarea.appendChild(node);
    listatareas.appendChild(litarea);
}

