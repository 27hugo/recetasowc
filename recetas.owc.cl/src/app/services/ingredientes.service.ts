import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Ingrediente } from '../models/ingrediente.model';
import { Observable } from 'rxjs';
import { ApiRoute } from './apiroute.service';

@Injectable()
export class IngredientesService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private IngredientesUrl: string;

  constructor(private http: HttpClient, private apiRoute: ApiRoute) {
    this.IngredientesUrl = this.apiRoute.getApiUrl() + '/index.php/ingredientes_receta/';
  }
  
  getIngredientes(): Observable<HttpResponse<Ingrediente>> {
    return this.http.get<Ingrediente>(
      this.IngredientesUrl, {observe: 'response'}
      );
  }
  
  getIngredienteById(ing_id): Observable<HttpResponse<Ingrediente>> {
    return this.http.get<Ingrediente>(this.IngredientesUrl + 'search/' + ing_id, {observe: 'response'});
  }
}
