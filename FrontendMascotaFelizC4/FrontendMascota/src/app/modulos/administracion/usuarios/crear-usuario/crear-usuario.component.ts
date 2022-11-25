import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'cedula': ['',[Validators.required]],
    'nombres': ['',[Validators.required]],
    'apellidos': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'email': ['',[Validators.required, Validators.email]],
    'rol': ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private usuarioServicio: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }
GuardarUsuario(){
  let cedula = this.fgValidador.controls["cedula"].value;
  let nombres = this.fgValidador.controls["nombres"].value;
  let apellidos = this.fgValidador.controls["apellidos"].value;
  let telefono = this.fgValidador.controls["telefono"].value;
  let email = this.fgValidador.controls["email"].value;
  let rol = this.fgValidador.controls["rol"].value;
  let u = new ModeloUsuario();
  u.cedula =  cedula;
  u.nombres =  nombres;
  u.apellidos =  apellidos;
  u.telefono =  telefono;
  u.email =  email;
  u.rol =  rol;

  this.usuarioServicio.CrearUsuario(u).subscribe((datos:ModeloUsuario) => {
    alert("Usuario almacenado correctamente");
    this.router.navigate(["/administracion/buscar-usuario"]);
  },(error:any) => {
    alert("Error almacenando el Usuario");
  })
}
}
