import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

//Método para generar clave del usuario
GenerarClave(){
  let clave = generador(8, false); //Aquí se define la longitud de la contraseña y la complejidad de esta.
  return clave;
}

//Método para cifrar clave
CifrarClave(clave:string){
  let claveCifrada = cryptoJS.MD5(clave).toString();
  return claveCifrada;
}
}
