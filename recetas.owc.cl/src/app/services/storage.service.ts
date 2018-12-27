import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../models/Session.model';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class StorageService {
  private localStorageService;
  private currentSession: Session = null;
  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }
  
  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUsuario', JSON.stringify(session));
  }
  
  loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem('currentUsuario');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }
  
  getCurrentSession(): Session {
    return this.currentSession;
  }
  
  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUsuario');
    this.currentSession = null;
  }
  
  getCurrentUsuario(): Usuario {
    const session: Session = this.getCurrentSession();
    return (session && session.usuario) ? session.usuario : null;
  }
  
  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  }
  
  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  }
  
  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}
