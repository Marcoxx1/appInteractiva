const Client = require("./client")
//*Clase encargada del manejo de los clientes a crear y enlistar
class Clients{
    //*hash
    _clients ={};
    constructor(){
        this._clients = {}
    }

    crearCliente(name = ""){
        const client = new Client(name);
        this._clients[Client.id] = client;
    }
}

// let client = new Clients()
// let valor = client.crearCliente("Marco")
// console.log(valor)
module.exports = Clients; 