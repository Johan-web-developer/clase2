const  urlClientes = "http://localhost/ArTeM02-059/clase2/backend/controller.php?op=getAll";
const urlnewClient = "http://localhost/ArTeM02-059/clase2/backend/controller.php?op=insert";

export const getClientes = async ()=>{
    try {
        const clientes = await fetch(urlClientes);
        const datosClientes = clientes.json();
        return datosClientes;
    } catch (error) {
        console.log(error);
    }
}

export const newClient = async (registro)=>{
    try {
        await fetch(urlnewClient),{
            method:"POST",
            body:JSON.stringify(registro),
            headers:{
                "Content-Type":'application/json'
            }
        }
    } catch (error) {
        console.log(error);
    }
}