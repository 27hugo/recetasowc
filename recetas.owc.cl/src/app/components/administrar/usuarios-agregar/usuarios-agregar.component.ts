import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session.model';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-agregar',
  templateUrl: './usuarios-agregar.component.html',
  styleUrls: ['./usuarios-agregar.component.css']
})
export class UsuariosAgregarComponent implements OnInit {
  private session: Session;
  public errorMsg: string;
  public showError = false;
  usuarioForm = this.formBuilder.group({
    adm_rut: [''],
    adm_nombre: [''],
    adm_apellido: [''],
    adm_correo: [''],
    adm_password: [''],
    adm_nivel_permiso: [''],
  });
  constructor(private usuariosService: UsuariosService, private formBuilder: FormBuilder, private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.session = this.storageService.getCurrentSession();
    if(this.session.usuario.adm_nivel_permiso != 'admin'){
      this.router.navigate(['error']);
    }
  }
  closeError(){
    this.showError = false;
  }
  onSubmit() {
    this.errorMsg = "";
    
    if(!this.usuarioForm.valid){
      this.errorMsg = "Compruebe que no falten datos antes de continuar.";
      this.showError = true;
      return null;
    }
    
    this.usuariosService.createUsuario(this.usuarioForm.value).subscribe(data =>{
      this.router.navigate(['/administrar/usuarios/agregar']);
      location.reload();
    });
  }
}
