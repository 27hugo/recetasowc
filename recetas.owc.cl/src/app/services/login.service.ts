import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/Session.model';
import { ApiRoute } from './apiroute.service';

@Injectable()
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private usersUrl: string;
  
  constructor(private http: HttpClient, private apiRoute: ApiRoute) {
    this.usersUrl = this.apiRoute.getApiUrl() + '/index.php/usuarios/'
  }
  loginUser(login_data): Observable<Session> {
    return this.http.post<Session>(this.usersUrl + 'validate/', login_data, this.httpOptions);
  }
}
