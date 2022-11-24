import { Component, OnInit } from '@angular/core';
import { ModeloProductoServicio } from 'src/app/modelos/producto-servicio.model';
import { ProductoServicioService } from 'src/app/servicios/producto-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-producto-servicio',
  templateUrl: './buscar-producto-servicio.component.html',
  styleUrls: ['./buscar-producto-servicio.component.css']
})
export class BuscarProductoServicioComponent implements OnInit {
  listadoRegistros: ModeloProductoServicio[] = [];

  constructor(private productoServicioServicio:ProductoServicioService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductosServicios();
  }
  ObtenerListadoProductosServicios(){
    this.productoServicioServicio.ObtenerRegistros().subscribe((datos: ModeloProductoServicio[]) => {
      this.listadoRegistros = datos;
    })
  }
  EliminarProductoServicio(id:string){
    Swal.fire({
      title: '¿Estas Seguro De Eliminar El Producto o Servicio ?',
      text: "Después De Eliminado, ¡No Se Podrá Recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Si, Elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoServicioServicio.EliminarProductoServicio(id).subscribe((datos:ModeloProductoServicio) => {
          Swal.fire(
            'Eliminado!',
            'El Producto o Servicio Fue Eliminado!',
          );
          this.ObtenerListadoProductosServicios();
        }, 
        (error: any) => {
          Swal.fire(
            'Error al Eliminar el Producto o Servicio',
            'warning'
          );
        })
      }
    })  
  }
}
