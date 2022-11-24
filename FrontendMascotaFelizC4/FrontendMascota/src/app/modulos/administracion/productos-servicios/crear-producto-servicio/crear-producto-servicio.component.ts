import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProductoServicio } from 'src/app/modelos/producto-servicio.model';
import { ProductoServicioService } from 'src/app/servicios/producto-servicio.service';

@Component({
  selector: 'app-crear-producto-servicio',
  templateUrl: './crear-producto-servicio.component.html',
  styleUrls: ['./crear-producto-servicio.component.css']
})
export class CrearProductoServicioComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'tipo': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private productoServicioServicio: ProductoServicioService,
    private router: Router) { }

  ngOnInit(): void {
  }
GuardarProductoServicio(){
  let tipo = this.fgValidador.controls["tipo"].value;
  let nombre = this.fgValidador.controls["nombre"].value;
  let descripcion = this.fgValidador.controls["descripcion"].value;
  let precio = parseInt(this.fgValidador.controls["precio"].value);
  let imagen = this.fgValidador.controls["imagen"].value;
  let ps = new ModeloProductoServicio();
  ps.tipo =  tipo;
  ps.nombre = nombre;
  ps.descripcion = descripcion;
  ps.precio = precio;
  ps.imagen = imagen;

  this.productoServicioServicio.CrearProductoServicio(ps).subscribe((datos:ModeloProductoServicio) => {
    alert("Producto o servicio almacenado correctamente");
    this.router.navigate(["/administracion/buscar-producto-servicio"]);
  },(error:any) => {
    alert("Error almacenando el producto o servicio");
  })
}
}
