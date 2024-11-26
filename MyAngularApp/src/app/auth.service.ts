import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Models/Login-Request.Model';
import { Observable } from 'rxjs';
import { loginResponse } from '../Models/Login-Response.Model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  private ApiUrl = 'https://sturdy-palm-tree-44q6vwr95r7fv9w-5112.app.github.dev/api/Login';
  constructor(private http:HttpClient) { }

  login(loginrequest:LoginRequest):Observable<loginResponse>
  {
       return this.http.post<loginResponse>(this.ApiUrl , loginrequest)
  }

  storeUserData(response: loginResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('username', response.username);
    localStorage.setItem('roles', JSON.stringify(response.roles));
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
  }

  getRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

}
