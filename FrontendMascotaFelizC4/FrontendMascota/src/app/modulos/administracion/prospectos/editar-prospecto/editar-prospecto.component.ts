import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-prospecto',
  templateUrl: './editar-prospecto.component.html',
  styleUrls: ['./editar-prospecto.component.css']
})
export class EditarProspectoComponent implements OnInit {
  id: string = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],    
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],    
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private prospectoServicio: ProspectoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProspecto();
  }
  BuscarProspecto() {
    this.prospectoServicio.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProspecto) => {
      this.fgValidador.controls["id"].setValue(this.id);      
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);      
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
    });
  }
  EditarProspecto() {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;    
    let email = this.fgValidador.controls["email"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let p = new ModeloProspecto();   
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.telefono = telefono;
    p.email = email;
    p.comentario = comentario;    
    p.id = this.id;

    this.prospectoServicio.ActualizarProspecto(p).subscribe((datos: ModeloProspecto) => {
      alert("Prospecto actualizado correctamente");
      this.router.navigate(["/administracion/buscar-prospecto"]);
    }, (error: any) => {
      alert("Error actualizando el prospecto");
    })
  }
}