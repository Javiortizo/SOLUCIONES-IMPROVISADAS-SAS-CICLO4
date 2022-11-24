import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS =  require('crypto-js');
import { Router } from '@angular/router';
// const cryptoJS = require("cryptojs");
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  // Valida e intercambia información en la parte gráfica
  fgValidador: FormGroup = this.fb.group({
    // usuario requerido y de tipo email
    'usuario': ['',[Validators.required, Validators.email]],
    // clave requerida. Se pueden poner más validadores, como longitud mínima, etc.
    'clave': ['',[Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }
  // En esta función se toman los datos del formulario para ser enviados por medio del servicio al backend
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    // alert(usuario)
    // alert(clave)
    let claveCifrada = cryptoJS.MD5(clave).toString();  
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"])
      // alert("Datos correctos")
    }, (error: any) => {
      //ko. Agregar Ventana modal
      alert("Datos inválidos")
    })
    
  }

}
