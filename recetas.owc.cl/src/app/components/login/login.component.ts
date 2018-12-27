import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/Session.model';
import { StorageService } from 'src/app/services/storage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorResponse: string;
  public showError = false;
  constructor(private loginService: LoginService, private router: Router, private storageService: StorageService) {

  }
  closeError(){
   this.showError = false; 
  }

  logIn(user: NgForm) {
    this.loginService.loginUser(user.value).subscribe(data => this.correctLogin(data), error => {
      this.errorResponse = error.error;
      this.showError = true;
    });
  }

  ngOnInit() {
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    location.reload();
    this.router.navigate(['']);
  }

}
