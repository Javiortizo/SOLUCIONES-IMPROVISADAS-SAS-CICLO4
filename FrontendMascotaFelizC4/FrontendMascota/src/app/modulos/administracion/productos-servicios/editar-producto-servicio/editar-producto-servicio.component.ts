import { Component, OnInit } from '@angular/core';
import { ModuleTeardownOptions } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProductoServicio } from 'src/app/modelos/producto-servicio.model';
import { ProductoServicioService } from 'src/app/servicios/producto-servicio.service';

@Component({
  selector: 'app-editar-producto-servicio',
  templateUrl: './editar-producto-servicio.component.html',
  styleUrls: ['./editar-producto-servicio.component.css']
})
export class EditarProductoServicioComponent implements OnInit {
  id: string = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'tipo': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private productoServicioServicio: ProductoServicioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProductoServicio();
  }
  BuscarProductoServicio(){
    this.productoServicioServicio.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloProductoServicio) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
    }); 
  }
EditarProductoServicio(){
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
  ps.id = this.id;

  this.productoServicioServicio.ActualizarProductoServicio(ps).subscribe((datos:ModeloProductoServicio) => {
    alert("Producto o servicio actualizado correctamente");
    this.router.navigate(["/administracion/buscar-producto-servicio"]);
  },(error:any) => {
    alert("Error actualizando el producto o servicio");
  })
}
}

