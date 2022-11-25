import { Component, OnInit } from '@angular/core';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-sucursal',
  templateUrl: './buscar-sucursal.component.html',
  styleUrls: ['./buscar-sucursal.component.css']
})
export class BuscarSucursalComponent implements OnInit {
  listadoRegistros: ModeloSucursal[] = [];

  constructor(private sucursalServicio: SucursalService) { }

  ngOnInit(): void {
    this.ObtenerListadoSucursales();
  }
  ObtenerListadoSucursales() {
    this.sucursalServicio.ObtenerRegistros().subscribe((datos: ModeloSucursal[]) => {
      this.listadoRegistros = datos;
    })
  }
  EliminarSucursal(id: string) {
    Swal.fire({
      title: '¿Estas Seguro De Eliminar La Sucursal ?',
      text: "Después De Eliminada, ¡No Se Podrá Recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Si, Elimínala!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sucursalServicio.EliminarSucursal(id).subscribe((datos: ModeloSucursal) => {
          Swal.fire(
            'Eliminado!',
            'La Sucursal Fue Eliminada!',
          );
          this.ObtenerListadoSucursales();
        },
          (error: any) => {
            Swal.fire(
              'Error al Eliminar La Sucursal',
              'warning'
            );
          })
      }
    })
  }
}

