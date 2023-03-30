require("colors");

//*Integrar paquetes propios
const leerInput = require("./helpers/input");
const {menu,pausa} = require("./helpers/menu")
const Clients = require("./models/clients")
const Client = require("./models/client")

const main = async () =>{
    //*console.log("Hola mundo!".rainbow);
    //*menu();
    const clients = new Clients();
    let opt = "";

    do{
        opt = await menu();

        switch(opt){
            case "1":
                const nombre = await leerInput("Nombre del cliente:")
                clients.crearCliente(nombre)
                break
            case "2":
                console.log(clients._clients)
        }

        await pausa();

        console.log({opt});
    }while(opt !== "0")
}

main();