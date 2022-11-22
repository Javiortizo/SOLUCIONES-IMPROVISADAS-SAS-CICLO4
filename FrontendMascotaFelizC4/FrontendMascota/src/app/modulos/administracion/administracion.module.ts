import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearProductoPlanComponent } from './productos-planes/crear-producto-plan/crear-producto-plan.component';
import { BuscarProductoPlanComponent } from './productos-planes/buscar-producto-plan/buscar-producto-plan.component';
import { EditarProductoPlanComponent } from './productos-planes/editar-producto-plan/editar-producto-plan.component';
import { EliminarProductoPlanComponent } from './productos-planes/eliminar-producto-plan/eliminar-producto-plan.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { CrearSolicitudAfiComponent } from './solicitudesAfi/crear-solicitud-afi/crear-solicitud-afi.component';
import { BuscarSolicitudAfiComponent } from './solicitudesAfi/buscar-solicitud-afi/buscar-solicitud-afi.component';
import { EditarSolicitudAfiComponent } from './solicitudesAfi/editar-solicitud-afi/editar-solicitud-afi.component';
import { EliminarSolicitudAfiComponent } from './solicitudesAfi/eliminar-solicitud-afi/eliminar-solicitud-afi.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearProductoPlanComponent,
    BuscarProductoPlanComponent,
    EditarProductoPlanComponent,
    EliminarProductoPlanComponent,
    CrearSucursalComponent,
    BuscarSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    CrearSolicitudAfiComponent,
    BuscarSolicitudAfiComponent,
    EditarSolicitudAfiComponent,
    EliminarSolicitudAfiComponent,
    CrearProspectoComponent,
    BuscarProspectoComponent,
    EditarProspectoComponent,
    EliminarProspectoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
