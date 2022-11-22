import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  // Enrutamiento a página de inicio
{
  path:"inicio",
  component: InicioComponent
},
// Enrutamiento redireccionado a página de inicio
{
  path:"",
  pathMatch:'full',
  redirectTo:'/inicio'
},
// Lazy Loading
{
  path:'seguridad',
  loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
},
{
  path:'administracion',
  loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
},
// Enrutamiento a página de error. Este enrutamiento debe ir de último porque de lo contrario presentará fallas en la validación de la ruta.
{
  path:'**',
  component: ErrorComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
