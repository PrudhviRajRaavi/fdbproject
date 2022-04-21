import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  private _registerUrl = "http://localhost:3080/api/register";
  private _loginUrl = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }

  // registerUser(user) {
  //   return this.http.post<any>(this._registerUrl, email,password);
  // }

  loginUser(email:any, password:any) {
    return this.http.post<any>(this._loginUrl, email,password);
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return true;
  }

}
