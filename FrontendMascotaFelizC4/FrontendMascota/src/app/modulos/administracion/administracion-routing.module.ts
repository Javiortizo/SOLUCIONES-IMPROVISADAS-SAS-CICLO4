import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarProductoPlanComponent } from './productos-planes/buscar-producto-plan/buscar-producto-plan.component';
import { CrearProductoPlanComponent } from './productos-planes/crear-producto-plan/crear-producto-plan.component';
import { EditarProductoPlanComponent } from './productos-planes/editar-producto-plan/editar-producto-plan.component';
import { EliminarProductoPlanComponent } from './productos-planes/eliminar-producto-plan/eliminar-producto-plan.component';
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
    path: 'editar-usuario',
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
  // Enrutamiento CRUD Productos - Planes
  {
    path: 'crear-producto-plan',
    component: CrearProductoPlanComponent
  },
  {
    path: 'editar-producto-plan',
    component: EditarProductoPlanComponent
  },
  {
    path: 'buscar-producto-plan',
    component: BuscarProductoPlanComponent
  },
  {
    path: 'eliminar-producto-plan',
    component: EliminarProductoPlanComponent
  },
  // Enrutamiento CRUD Solicitudes - Afiliaciones
  {
    path: 'crear-solicitud-afi',
    component: CrearSolicitudAfiComponent
  },
  {
    path: 'editar-solicitud-afi',
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
    path: 'editar-sucursal',
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
    path: 'editar-prospecto',
    component: EditarProspectoComponent
  },
  {
    path: 'buscar-prospecto',
    component: BuscarProspectoComponent
  },
  {
    path: 'eliminar-prospecto',
    component: EliminarProspectoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
