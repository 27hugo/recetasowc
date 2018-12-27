import { Component } from '@angular/core';
import { ApiRoute } from './services/apiroute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  
  public constructor(private apiRoute: ApiRoute){
    this.apiRoute.setApiUrl('http://api.recetas.owc.cl');
  }
}
