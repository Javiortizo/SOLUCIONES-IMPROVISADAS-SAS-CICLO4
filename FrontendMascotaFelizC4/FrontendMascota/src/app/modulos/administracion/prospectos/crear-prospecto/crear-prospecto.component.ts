import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-crear-prospecto',
  templateUrl: './crear-prospecto.component.html',
  styleUrls: ['./crear-prospecto.component.css']
})
export class CrearProspectoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({    
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private prospectoServicio: ProspectoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarProspecto() {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;    
    let email = this.fgValidador.controls["email"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let p = new ModeloProspecto();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.email = email;
    p.telefono = telefono;
    p.comentario = comentario;

    this.prospectoServicio.CrearProspecto(p).subscribe((datos: ModeloProspecto) => {
      alert("Prospecto Almacenado Correctamente");
      this.router.navigate(["/administracion/buscar-prospecto"]);
    }, (error: any) => {
      alert("Error almacenando el Prospecto");
    })
  }
}

