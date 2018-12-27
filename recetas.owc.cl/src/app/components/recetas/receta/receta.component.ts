import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';
import { RecetaResponse } from 'src/app/models/recetaresponse.model';
import { Session } from 'src/app/models/Session.model';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})

export class RecetaComponent implements OnInit {
  public receta: RecetaResponse;
  public receta_id: string;
  public deleteMsg: string;
  public showError = false;
  session: Session;
  deleteRecetaForm = this.formBuilder.group({
    rec_nombre: ['']
  });
  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private router: Router, private route: ActivatedRoute, private recetasServices: RecetasService) {
    this.session = this.storageService.getCurrentSession();
    this.route.paramMap.subscribe(rec_id => this.receta_id = rec_id.get('rec_id'));
    // console.log(this.params);

    this.recetasServices.getRecetaById(this.receta_id).subscribe(receta => {
      this.receta = receta.body;
      // console.log(this.receta);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

   }

   closeError(){
     this.showError = false;
   }
  deleteReceta(){
    // console.log(this.deleteRecetaForm.value.rec_nombre);
    this.deleteMsg = "";
    if( this.receta.rec_details.rec_nombre != this.deleteRecetaForm.value.rec_nombre ){
      this.deleteMsg = "Debe ingresar el nombre de la receta a eliminar correctamente.";
      this.showError = true;
      return null;
    }
    
    if( this.receta.rec_usuarios.adm_rut != this.session.usuario.adm_rut ){
      this.deleteMsg = "Solo el propietario de la receta puede eliminarla.";
      this.showError = true;
      return null;
    }
    if( this.session.usuario.adm_nivel_permiso != 'moderador' && this.session.usuario.adm_nivel_permiso != 'admin'){
      this.deleteMsg = 'No tienes permisos suficientes.';
      this.showError = true;
      return null;
    }
    this.recetasServices.deleteReceta(this.receta_id).subscribe(data => {
      this.router.navigate(['/recetas/categoria/0']);
      location.reload();  
    });
  }

  ngOnInit() {
    
  }

}
