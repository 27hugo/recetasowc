import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Session } from 'src/app/models/Session.model';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { RecetasService } from 'src/app/services/recetas.service';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { RecetaResponse } from 'src/app/models/recetaresponse.model';

@Component({
  selector: 'app-recetas-modificar',
  templateUrl: './recetas-modificar.component.html',
  styleUrls: ['./recetas-modificar.component.css']
})
export class RecetasModificarComponent implements OnInit {

  ngOnInit() {
    
  }
}