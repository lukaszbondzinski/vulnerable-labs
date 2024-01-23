import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private jwtHelper: JwtHelperService = new JwtHelperService();

  get isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    return token != null && token.length > 0;
  }

  constructor() { }


  public setToken(jwt: string) {
    localStorage.setItem('token',  jwt);
  }

  public removeToken() {
    localStorage.removeItem('token');
  }
  public getToken(): string | null {
    return this.isAuthenticated ? localStorage.getItem('token') : null;
  }

  public getCurrentLoggedUsername() : string {
    return this.jwtHelper.decodeToken(localStorage.getItem('token') as string)['sub'];
  }

  public getCurrentLoggedRoles() : string[] {
    return this.jwtHelper.decodeToken(localStorage.getItem('token') as string)['roles'];
  }

  public getCurrentLoggedNameWithSurname() : string {
    return this.jwtHelper.decodeToken(localStorage.getItem('token')!)['name'] + ' ' + this.jwtHelper.decodeToken(localStorage.getItem('token')!)['surname'];
  }
}
