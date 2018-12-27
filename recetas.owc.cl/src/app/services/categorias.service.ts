import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiRoute } from './apiroute.service';

@Injectable()
export class CategoriasService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  public categoriasUrl;

  constructor(private http: HttpClient, private apiRoute: ApiRoute) {
    this.categoriasUrl = this.apiRoute.getApiUrl() + '/index.php/categorias/';
  }
  getCategorias() {
    return this.http.get( this.categoriasUrl , this.httpOptions );
  }
  getCategoriaById(cat_id) {
    return this.http.get(this.categoriasUrl + 'search/' + cat_id  );
  }
}
