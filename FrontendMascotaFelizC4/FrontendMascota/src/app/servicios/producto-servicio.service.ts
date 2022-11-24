import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProductoServicio } from '../modelos/producto-servicio.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken();
     }

  ObtenerRegistros(): Observable<ModeloProductoServicio[]> {
    return this.http.get<ModeloProductoServicio[]>(`${this.url}/productos-servicios`);
  }

  ObtenerRegistroPorId(id: string): Observable<ModeloProductoServicio> {
    return this.http.get<ModeloProductoServicio>(`${this.url}/productos-servicios/${id}`);
  }

  CrearProductoServicio(productoServicio: ModeloProductoServicio): Observable<ModeloProductoServicio>{
    return this.http.post<ModeloProductoServicio>(`${this.url}/productos-servicios`, productoServicio, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  ActualizarProductoServicio(productoServicio: ModeloProductoServicio): Observable<ModeloProductoServicio>{   
    return this.http.put<ModeloProductoServicio>(`${this.url}/productos-servicios/${productoServicio.id}`, productoServicio, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  EliminarProductoServicio(id: string): Observable<any> {
    return this.http.delete(`${this.url}/productos-servicios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
