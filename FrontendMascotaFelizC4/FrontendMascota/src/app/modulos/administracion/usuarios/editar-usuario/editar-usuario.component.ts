import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id: string = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'cedula': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private usuarioServicio: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }
  BuscarUsuario() {
    this.usuarioServicio.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloUsuario) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["rol"].setValue(datos.rol);
    });
  }
  EditarUsuario() {
    let cedula = this.fgValidador.controls["cedula"].value;
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let email = this.fgValidador.controls["email"].value;
    let rol = this.fgValidador.controls["rol"].value;
    let u = new ModeloUsuario();
    u.cedula = cedula;
    u.nombres = nombres;
    u.apellidos = apellidos;
    u.telefono = telefono;
    u.email = email;
    u.rol = rol;
    u.id = this.id;

    this.usuarioServicio.ActualizarUsuario(u).subscribe((datos: ModeloUsuario) => {
      alert("Usuario actualizado correctamente");
      this.router.navigate(["/administracion/buscar-usuario"]);
    }, (error: any) => {
      alert("Error actualizando el usuario");
    })
  }
}
