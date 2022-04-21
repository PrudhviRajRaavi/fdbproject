import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private authService:AuthGuardServiceService) { }

  ngOnInit() {
    this.createForm();
   }
   createForm(){
      this.loginForm = new FormGroup({
        email: new FormControl('raj@gmail.com'),
        password: new FormControl('')
      })
    }
    onSubmit(){
      console.log(this.loginForm.value);
      const email = this.loginForm.value.email;
     const password = this.loginForm.value.password;
     console.log(email, password);
     this.authService.loginUser(email, password).subscribe(
        (response) => {
          console.log(response);
        }
     );
    }

}
