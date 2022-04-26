import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup
  signupForm!: FormGroup
  durationInSeconds = 5;
  constructor(private authService: AuthGuardServiceService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.registeForm();
  }
  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('raj@gmail.com'),
      password: new FormControl('raj@123')
    })
  }
  registeForm() {
    this.signupForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rpassword: new FormControl('', [Validators.required])

    });
  }
  onSignUpSubmit() {
    console.log(this.signupForm.value);
    const fname = this.signupForm.value.fname;
    const lname = this.signupForm.value.lname;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const rpassword = this.signupForm.value.rpassword;
    console.log(fname, lname, email, password, rpassword);
    if (password != rpassword) {
      this._snackBar.open("Password don't match", undefined, { duration: 2000, panelClass: ['snackbar-success'] });
      return
    }
    var data = { first_name: fname, last_name: lname, email: email, password: password };
    this.authService.registerUser(data).subscribe(res => {
      console.log(res);
      if (res) {
        //   console.log("js");
        //   if(res=="Invalid credentials"){
        //     console.log("ho")

        //   }
        //   else{
        //   this.authService.setLoggedIn(true);
        //   localStorage.setItem('email', res[0]["email"]);
        //   localStorage.setItem('userType', res[0]["user_type"]);
        //   if(res[0]["stepper"] == 0){
        //     this.router.navigate(['/candidate-details']);
        //   }
        //   else{
        //     this.router.navigate(['/candidate']);
        //   }
        // }


      }
    }, err => {
      console.log(err);
      this._snackBar.openFromComponent(PizzaPartyComponent, {
        duration: this.durationInSeconds * 1000,
      });
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log(email, password);
    this.authService.loginUser(email, password).subscribe(res => {
      //  console.log(res.responseObject.candidateDetails);
      if (res) {
        // console.log("js");
        if (res.responseCode == "400") {
          this._snackBar.open("Invalid Credentials", undefined, { duration: 2000, panelClass: ['snackbar-success'] });

        }
        else {
          if (res.responseMessage == "Login Successfull") {
            this.authService.setLoggedIn(true);
            localStorage.setItem('email', res.responseObject["email"]);
            localStorage.setItem('userType', res.responseObject["userType"]);
            localStorage.setItem('name', res.responseObject["name"]);
            localStorage.setItem('candidate', JSON.stringify(res.responseObject.candidateDetails));
            // localStorage.setItem('candidateId',JSON.parse(localStorage.getItem('candidate')|| '{}').candidateId)
            if (res.responseObject["userType"] == "MANAGER" || res.responseObject["userType"] == "manager" || res.responseObject["userType"] == "Manager") {
              this.router.navigate(['/manager']);
              return
            }
            if (res.responseObject.candidateDetails["step_id"] == 0) {
              this.router.navigate(['/candidate-details']);
            }
            else {
              
              
                this.router.navigate(['/candidate']);
              
            }
          }
        }

      }
    }, err => {
      this._snackBar.open("Invalid Credentials", undefined, { duration: 2000, panelClass: ['snackbar-success'] });
      console.log(err);
      // this._snackBar.openFromComponent(PizzaPartyComponent, {
      //   duration: this.durationInSeconds * 1000,
      // });
    });
  }

}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'invalid.html',
  styles: [
    `
    .example-pizza-party {
      color: #626A99;
    }
  `,
  ],
})
export class PizzaPartyComponent { }
