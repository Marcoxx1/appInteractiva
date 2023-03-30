const inquirer = require('inquirer');
require('colors');
const leerInput = async (mensaje)=>{
   const pregunta = [
      {
        type: 'input',
        name: 'desc',
        message: mensaje,
        validate(value){
          if(value.length === 0){
            return 'Ingresa un nombre valido'
          }
         return true;
        }     }
  ];
  const {desc} = await inquirer.prompt(pregunta);
  return desc;
}
module.exports = leerInput