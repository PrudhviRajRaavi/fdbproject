import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  firstFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private appService: AppServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      desc: ['', Validators.required],
      jobcode: ['', Validators.required],
      effDate: ['', Validators.required],

    });
    
  }
  createJob() {
    let data = { 
    job_title: this.firstFormGroup.value.title,
    employment_type: this.firstFormGroup.value.type,
    job_description: this.firstFormGroup.value.desc,
    effective_date: this.firstFormGroup.value.effDate,
    jobcode_id: this.firstFormGroup.value.jobcode}
    this.appService.createJob(data).subscribe(data => {
      this._snackBar.open("Create Job Successfully", undefined, { duration: 2000, panelClass: ['snackbar-success'] });
    })
  }
 
}
