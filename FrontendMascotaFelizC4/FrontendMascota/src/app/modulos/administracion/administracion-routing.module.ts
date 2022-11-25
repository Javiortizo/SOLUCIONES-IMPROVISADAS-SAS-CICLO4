import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSolicitudAfiComponent } from './solicitudesAfi/buscar-solicitud-afi/buscar-solicitud-afi.component';
import { CrearSolicitudAfiComponent } from './solicitudesAfi/crear-solicitud-afi/crear-solicitud-afi.component';
import { EditarSolicitudAfiComponent } from './solicitudesAfi/editar-solicitud-afi/editar-solicitud-afi.component';
import { EliminarSolicitudAfiComponent } from './solicitudesAfi/eliminar-solicitud-afi/eliminar-solicitud-afi.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  // Enrutamiento CRUD Usuarios
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent
  },
  // Enrutamiento CRUD Productos - Servicios
  {
    path: 'crear-producto-servicio',
    component: CrearProductoServicioComponent
  },
  {
    path: 'editar-producto-servicio/:id',
    component: EditarProductoServicioComponent
  },
  {
    path: 'buscar-producto-servicio',
    component: BuscarProductoServicioComponent
  },
  {
    path: 'eliminar-producto-servicio',
    component: EliminarProductoServicioComponent
  },
  // Enrutamiento CRUD Solicitudes - Afiliaciones
  {
    path: 'crear-solicitud-afi',
    component: CrearSolicitudAfiComponent
  },
  {
    path: 'editar-solicitud-afi/:id',
    component: EditarSolicitudAfiComponent
  },
  {
    path: 'buscar-solicitud-afi',
    component: BuscarSolicitudAfiComponent
  },
  {
    path: 'eliminar-solicitud-afi',
    component: EliminarSolicitudAfiComponent
  },
  // Enrutamiento CRUD Sucursales
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent
  },
  {
    path: 'editar-sucursal/:id',
    component: EditarSucursalComponent
  },
  {
    path: 'buscar-sucursal',
    component: BuscarSucursalComponent
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent
  },
  // Enrutamiento CRUD Prospectos
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent
  },
  {
    path: 'editar-prospecto/:id',
    component: EditarProspectoComponent
  },
  {
    path: 'buscar-prospecto',
    component: BuscarProspectoComponent
  },
  {
    path: 'eliminar-prospecto',
    component: EliminarProspectoComponent
  },
  // Entrutamiento CRUD Planes
  {
    path: 'crear-plan',
    component: CrearPlanComponent
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent
  },
  {
    path: 'buscar-plan',
    component: BuscarPlanComponent
  },
  {
    path: 'eliminar-plan',
    component: EliminarPlanComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
