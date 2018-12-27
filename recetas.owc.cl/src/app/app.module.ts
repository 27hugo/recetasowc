import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecetasService } from './services/recetas.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { StorageService } from './services/storage.service';
import { LoginService } from './services/login.service';
import { UsuariosService } from './services/usuarios.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { IngredientesService } from './services/ingredientes.service';
import { RecetaComponent } from './components/recetas/receta/receta.component';
import { CategoriasService } from './services/categorias.service';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ErrorComponent } from './components/error/error.component';
import { ApiRoute } from './services/apiroute.service';
import { RecetasAgregarComponent } from './components/administrar/recetas-agregar/recetas-agregar.component';
import { RecetasModificarComponent } from './components/administrar/recetas-modificar/recetas-modificar.component';
import { UsuariosAgregarComponent } from './components/administrar/usuarios-agregar/usuarios-agregar.component';
import { UsuariosModificarComponent } from './components/administrar/usuarios-modificar/usuarios-modificar.component';
import { UsuariosEliminarComponent } from './components/administrar/usuarios-eliminar/usuarios-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SidebarComponent,
    RecetasComponent,
    UsuariosComponent,
    PrincipalComponent,
    AdministrarComponent,
    RecetaComponent,
    AcercaDeComponent,
    ErrorComponent,
    RecetasAgregarComponent,
    RecetasModificarComponent,
    UsuariosAgregarComponent,
    UsuariosModificarComponent,
    UsuariosEliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ApiRoute, RecetasService, UsuariosService, StorageService, LoginService, IngredientesService, CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
