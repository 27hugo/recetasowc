import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session.model';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  public session: Session;
  constructor(private router: Router, private storageService: StorageService) {
    this.session = this.storageService.getCurrentSession();
    if(!this.session){
      this.router.navigate(['error']);
    }
   }

  ngOnInit() {
  }

}
