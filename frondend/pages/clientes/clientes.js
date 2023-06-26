import {getClientes, newClient} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaCliente();
})


async function cargaCliente(){
    const clientes = await getClientes();
    console.log(clientes);
    const tablaClientes = document.querySelector("#datosClientes");
    clientes.forEach(element => {
        const {id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = element;
        tablaClientes.innerHTML +=`
        <tr>
            <th scope="row">${id_constructora}</th>
            <td>${nombre_constructora}</td>
            <td>${nit_constructora}</td>
            <td>${nombre_representante}</td>
            <td>${email_contacto}</td>
            <td>${telefono_contacto}</td>
      </tr>
        `
    });    
}


const formulario = document.getElementById('regsitrar');
formulario.addEventListener('submit',newClient)


function newClient(e){
    e.preventDefault();

    const id = document.querySelector('#id').value
    const nombre_constructora = document.querySelector('#constructora').value
    const nit_constructora = document.querySelector('#nit').value
    const nombre_representante = document.querySelector('#representante').value
    const email_contacto = document.querySelector('#email').value
    const telefono_contacto = document.querySelector('#telefono').value
    console.log(id);

    const registro = {
        id_constructora,
        nombre_constructora,
        nit_constructora,
        nombre_representante,
        email_contacto,
        telefono_contacto
    }
    console.log(registro);
}