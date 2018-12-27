import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Receta } from '../models/receta.model';
import { RecetaResponse } from '../models/recetaresponse.model';
import { Observable } from 'rxjs';
import { ApiRoute } from './apiroute.service';

@Injectable()
export class RecetasService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  private RecetasUrl: string;

  constructor(private http: HttpClient, private apiRoute: ApiRoute) {
    this.RecetasUrl = this.apiRoute.getApiUrl() + '/index.php/recetas/';
  }
  getRecetas(): Observable<HttpResponse<Receta>> {
    return this.http.get<Receta>(
      this.RecetasUrl, {observe: 'response'}
      );
  }
  getRecetaById(rec_id): Observable<HttpResponse<RecetaResponse>> {
    return this.http.get<RecetaResponse>(this.RecetasUrl + 'search/' + rec_id, {observe: 'response'});
  }
  getRecetasByCategoria(cat_id): Observable<HttpResponse<Receta>> {
    return this.http.get<Receta>(this.RecetasUrl + 'category/' + cat_id, {observe: 'response'});
  }
  getRecent(limit): Observable<HttpResponse<Receta>> {
    return this.http.get<Receta>(this.RecetasUrl + 'recent/' + limit, {observe: 'response'});
  }
  getFechasRecetas() {
    return this.http.get(this.RecetasUrl + 'fechasRecetas/');
  }
  createReceta(rec_data) {
    console.log(rec_data);
    return this.http.post(this.RecetasUrl , rec_data , this.httpOptions);
  }
  updateReceta() {

  }
  deleteReceta(rec_id) {
    console.log(rec_id);
    return this.http.delete(this.RecetasUrl + 'delete/' + rec_id, this.httpOptions);
  }
}
