import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {
  private loggedInStatus: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  // Get User Profile
  getUserType(){
    return localStorage.getItem('userType');
  }
  // Create a behavior subject to emit the value of the password validator
  private _passwordValidator = new BehaviorSubject<boolean>(false);
  passwordValidator = this._passwordValidator.asObservable();
  
  // Create a user object that will be used to store the user data
  public getUserDetails(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  // Set user details in local storage
  setUserDetails(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  // Logout the user
  logout() {
    this.loggedInStatus = false;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    localStorage.removeItem('email');
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('isLoggedIn')|| this.loggedInStatus.toString());
  }

  private _registerUrl = "http://localhost:8080/RP/register";
  private _loginUrl = "http://localhost:8080/RP/login";
  constructor(private http: HttpClient) { }

  // registerUser(user) {
  //   return this.http.post<any>(this._registerUrl, email,password);
  // }

  loginUser(email:any, password:any) {
    const data ={email: email, password: password};
    return this.http.post<any>(this._loginUrl, data)
  }
  public isAuthenticated(): boolean {
    return this.isLoggedIn;
    // Check whether the token is expired and return
    // true or false
    // return true;
  }
  registerUser(data:any){
    return this.http.post<any>(this._registerUrl, data);
  }

}
