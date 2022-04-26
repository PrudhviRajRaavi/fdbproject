import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  candidate:any
  isEditable = true;

  constructor(private _formBuilder: FormBuilder,private appService: AppServiceService,private _snackBar: MatSnackBar,private router: Router) {
    this.candidate = JSON.parse(localStorage.getItem('candidate')|| '{}')
    console.log(this.candidate["candidateId"])
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      addr1: ['', Validators.required],
      addr2: ['', ],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      qualification: ['', Validators.required],
      university: ['', Validators.required],
      year: ['', Validators.required],
      company: ['', Validators.required],
      exp: ['', Validators.required],
    });
  }
  confirmdetails() {
    //  this.candidate = localStorage.getItem('candidate')
    // console.log(this.candidate)
    let candidateId = this.candidate["candidateId"]
    let firstName = this.candidate["first_name"]
    let lastName = this.candidate["last_name"]
    let email = this.candidate["email"]
    // console.log(candidate)
    let data ={candidateId: candidateId, first_name:firstName, last_name:lastName , email:email,gender:this.firstFormGroup.value.gender,phonenumber:this.firstFormGroup.value.phone,
    dob: this.firstFormGroup.value.dob, address_line1:this.secondFormGroup.value.addr1, address_line2:this.secondFormGroup.value.addr2,zipcode:{zipcode:this.secondFormGroup.value.zipcode,city:this.secondFormGroup.value.city,state:this.secondFormGroup.value.state,country:this.secondFormGroup.value.country},step_id:0}
    this.appService.confirmCandidateDetails(data).subscribe(res => {
      console.log(res);
      this._snackBar.open("Details Updated", undefined, { duration: 2000, panelClass: ['snackbar-success'] });
    })
    console.log(data)
  }
  confirmFinalDetails(){
    let candidateId = this.candidate["candidateId"]
    
    console.log(candidateId)
    
    let data =[{candidateWorkId:{candidate_id: candidateId, company_name:this.thirdFormGroup.value.company},years:this.thirdFormGroup.value.exp}]
    let data2 = [
      {
        candQualId: {
          candidate_id: candidateId,
          qualification_type: this.thirdFormGroup.value.qualification
        },
        institute_name: this.thirdFormGroup.value.university,
        yearOfPassing: this.thirdFormGroup.value.year
      }
    ]
    this.appService.confirmFinalDetails(data).subscribe(res => {
      console.log(res);
      this._snackBar.open("Profile Data Updated", undefined, { duration: 2000, panelClass: ['snackbar-success'] });
    })
    this.appService.educationDetails(data2).subscribe(res => {
      console.log(res);
      this.router.navigate(['/candidate']);
    })
  }
  

}
