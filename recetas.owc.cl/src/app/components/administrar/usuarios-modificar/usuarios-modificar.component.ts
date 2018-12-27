import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-modificar',
  templateUrl: './usuarios-modificar.component.html',
  styleUrls: ['./usuarios-modificar.component.css']
})
export class UsuariosModificarComponent implements OnInit {
  public user: Usuario;
  usuarioForm = this.formBuilder.group({
    adm_rut: [''],
    adm_nombre: [''],
    adm_apellido: [''],
    adm_correo: [''],
    adm_password: [''],
    adm_repassword: [''],
    adm_nivel_permiso: [''],
  });
  public errorMsg: string;
  public showError = false;
  constructor(private router: Router, private storageService: StorageService, private formBuilder: FormBuilder, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUsuario();
    this.user.adm_correo
  }

  closeError(){
    this.showError = false;
  }
  onSubmit() {
    console.log(this.usuarioForm.valid);
    this.errorMsg = "";
    if(!this.usuarioForm.valid){
      this.errorMsg = "Compruebe que no falten datos antes de continuar.";
      this.showError = true;
      return null;
    }
    if(!this.usuarioForm.value.adm_correo) {
      this.usuarioForm.value.adm_correo = this.user.adm_correo;
    }
    if(this.usuarioForm.value.adm_password != this.usuarioForm.value.adm_repassword){
      this.errorMsg = "Las contraseñas no coinciden, revise nuevamente";
      this.showError = true;
      return null;
    }

    this.usuarioForm.value.adm_rut = this.user.adm_rut;
    // console.log(this.usuarioForm.value);
    
    this.usuariosService.updateUsuario(this.usuarioForm.value).subscribe(data => {
      this.router.navigate(['/login']);
      location.reload();
      this.storageService.logout();
    });
  }

}
