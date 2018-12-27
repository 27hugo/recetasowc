import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RecetaComponent } from './components/recetas/receta/receta.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ErrorComponent } from './components/error/error.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { RecetasAgregarComponent } from './components/administrar/recetas-agregar/recetas-agregar.component';
import { RecetasModificarComponent } from './components/administrar/recetas-modificar/recetas-modificar.component';
import { UsuariosAgregarComponent } from './components/administrar/usuarios-agregar/usuarios-agregar.component';
import { UsuariosModificarComponent } from './components/administrar/usuarios-modificar/usuarios-modificar.component';
import { UsuariosEliminarComponent } from './components/administrar/usuarios-eliminar/usuarios-eliminar.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recetas/categoria/:cat_id', component: RecetasComponent},
  {path: 'receta/:rec_id', component: RecetaComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'administrar', component: AdministrarComponent , children: [
    {path: '', redirectTo: 'recetas/agregar', pathMatch: 'full'},
    {path: 'recetas/agregar', component: RecetasAgregarComponent },
    {path: 'recetas/modificar', component: RecetasModificarComponent },
    {path: 'usuarios/agregar', component: UsuariosAgregarComponent },
    {path: 'usuarios/modificar', component: UsuariosModificarComponent },
    {path: 'usuarios/eliminar', component: UsuariosEliminarComponent }, 
    {path: '**', component: ErrorComponent, pathMatch: 'full'}
  ]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
