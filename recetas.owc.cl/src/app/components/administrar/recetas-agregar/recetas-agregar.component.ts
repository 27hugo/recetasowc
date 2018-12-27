import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/Session.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { RecetasService } from 'src/app/services/recetas.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-recetas-agregar',
  templateUrl: './recetas-agregar.component.html',
  styleUrls: ['./recetas-agregar.component.css']
})
export class RecetasAgregarComponent implements OnInit {
  public showError = false;
  recetaForm = this.formBuilder.group({
    rec_nombre: [''],
    rec_porciones: [''],
    rec_duracion: [''],
    rec_categoria: [''],
    rec_descripcion: [''],
    rec_preparacion: [''],
    rec_image: [null],
    ingredientes: this.formBuilder.array([])
  });
  public categorias: object;
  public session: Session;
  public errorMsg: string;
  constructor(private router: Router, private cd: ChangeDetectorRef,private categoriasService: CategoriasService, private recetasService: RecetasService, private storageService: StorageService, private formBuilder: FormBuilder) { }

  onFileChange(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.recetaForm.patchValue({
         rec_image: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  closeError(){
    this.showError = false;
  }
  get ingredientes() {
    return this.recetaForm.get('ingredientes') as FormArray;
  }

  addIngrediente() {
    this.ingredientes.push(this.formBuilder.control(''));
  }
  deleteIngrediente(ing: number){
    this.ingredientes.removeAt(ing);
  }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(categorias => this.categorias = categorias);
    this.session = this.storageService.getCurrentSession();
  }
  onSubmit() {
    console.log(this.recetaForm.valid);
    this.errorMsg = "";
    if(!this.recetaForm.valid){
      this.errorMsg = "Compruebe que no falten datos antes de continuar.";
      this.showError = true;
      return null;
    }
    this.recetaForm.addControl('adm_rut', new FormControl(''));
    this.recetaForm.value.adm_rut = this.session.usuario.adm_rut
    this.recetasService.createReceta(this.recetaForm.value).subscribe(data => {
      this.router.navigate(['/recetas/categoria/0']);
      location.reload();
      console.log(data);
    });
  }
}
