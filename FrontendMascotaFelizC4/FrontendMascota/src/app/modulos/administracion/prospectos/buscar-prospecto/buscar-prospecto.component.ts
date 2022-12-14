import { Component, OnInit } from '@angular/core';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-prospecto',
  templateUrl: './buscar-prospecto.component.html',
  styleUrls: ['./buscar-prospecto.component.css']
})
export class BuscarProspectoComponent implements OnInit {
  listadoRegistros: ModeloProspecto[] = [];

  constructor(private prospectoServicio: ProspectoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProspectos();
  }
  ObtenerListadoProspectos() {
    this.prospectoServicio.ObtenerRegistros().subscribe((datos: ModeloProspecto[]) => {
      this.listadoRegistros = datos;
    })
  }
  EliminarProspecto(id: string) {
    Swal.fire({
      title: '¿Estas Seguro De Eliminar El Prospecto ?',
      text: "Después De Eliminado, ¡No Se Podrá Recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Si, Elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.prospectoServicio.EliminarProspecto(id).subscribe((datos: ModeloProspecto) => {
          Swal.fire(
            'Eliminado!',
            'El Prospecto Fue Eliminado!',
          );
          this.ObtenerListadoProspectos();
        },
          (error: any) => {
            Swal.fire(
              'Error al Eliminar el Prospecto',
              'warning'
            );
          })
      }
    })
  }
}
