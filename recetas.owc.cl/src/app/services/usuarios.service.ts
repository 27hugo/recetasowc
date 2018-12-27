import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { ApiRoute } from './apiroute.service';

@Injectable()
export class UsuariosService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  
  private UsuariosUrl: string;

  constructor(private http: HttpClient, private apiRoute: ApiRoute) {
    this.UsuariosUrl = this.apiRoute.getApiUrl() + '/index.php/Usuarios/';
  }
  getUsuarios(): Observable<HttpResponse<Usuario>> {
    return this.http.get<Usuario>(
      this.UsuariosUrl, {observe: 'response'}
      );
  }
  getUsuarioById(user_id): Observable<HttpResponse<Usuario>> {
    return this.http.get<Usuario>(
      this.UsuariosUrl + 'search/' + user_id, {observe: 'response'}
    );
  }
  
  createUsuario(user_data) {
    return this.http.post(this.UsuariosUrl , user_data , this.httpOptions);
  }
  
  deleteUsuario(user_id) {
    return this.http.delete(this.UsuariosUrl + user_id, this.httpOptions);
  }
  
  updateUsuario(user_data) {
    return this.http.put(this.UsuariosUrl, user_data , this.httpOptions);
  }
}
