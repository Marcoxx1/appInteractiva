require('colors');

const menu = ()=>{

    //Las promesas resuelven un valor que se procesa y un error
    return new Promise(resolve => {
    console.clear();
    console.log('================================'.green);
    console.log('              MENU              '.green);
    console.log('================================\n'.green);
    console.log(`(1). Crear clientes`);
    console.log(`(2). Lista de clientes`);
    console.log(`(0). Salir\n`);

    //Uso de std
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    //Ejecuta un callback, cuando el usuario introduce la opción

    readline.question(`Seleccione una opción:`,(opt) =>{
    //Imprime opción seleccionada
    //console.log(opt)
        readline.close();
        resolve(opt);
    });
    })

}

const pausa = () =>{
    return new Promise(resolve => {

            //Uso de std
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        //Ejecuta un callback, cuando el usuario introduce la opcion
        readline.question(`Presiona ENTER para continuar`,() =>{
        //console.log(opt)
            readline.close();
            resolve();
        });
    })
}

module.exports = {menu,pausa};