import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Llaves } from '../config/llaves';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */
  @repository(UsuarioRepository)
  public usuarioRepository : UsuarioRepository
  ) {}

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
  //En este método se identifica el usuario por sus propiedades
  IdentificarUsuario(usuario:string, clave:string){
    try{
      let u = this.usuarioRepository.findOne({where:{email: usuario, clave: clave}})
      if(u){
        return u;
      }
      return false;
    }catch{
      return false;    
    } 
  }
  // Se genera el token para cada usuario
  GenerarTokenJWT(usuario: Usuario){
    let token = jwt.sign({
      data:{
        id: usuario.id,
        nombre: usuario.nombres + " " + usuario.apellidos,
        email: usuario.email,
        //Podemos ingresar más propiedades para el token 
      }      
    },
    Llaves.claveJWT)
    return token;
  }
  // Se valida el token para cada usuario
  ValidarTokenJWT(token:string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }
}
