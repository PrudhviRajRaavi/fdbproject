import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
   constructor( ) { }
 
   ngOnInit() {
    this.createForm();
   }
 
   createForm(){
     this.loginForm = new FormGroup({
       'email': new FormControl(null),
       'password': new FormControl(null)
     })
   }
   onSubmit( ){
     
   }
 
 }
