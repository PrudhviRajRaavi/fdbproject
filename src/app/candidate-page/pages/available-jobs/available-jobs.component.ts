import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppServiceService } from 'src/app/services/app-service.service';

// export interface UserData {
//   job_title: string;
//   job_description: string;
//   jobcode_id: number;
//   employment_type: string;
//   effective_date:string;
// }


@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrls: ['./available-jobs.component.css']
})
export class AvailableJobsComponent implements OnInit {
  displayedColumns: string[] = ['job_title', 'job_description', 'jobcode_id', 'employment_type','effective_date','apply'];
  dataSource!: MatTableDataSource<any>;
  tableData:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private appService: AppServiceService,  private _snackBar: MatSnackBar) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
   

    // // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }
   userData: any=[];
  ngOnInit() {
    this.appService.getAllJobs().subscribe(res => {
      console.log(res);
      this.tableData = res.responseObject.openPositions
      this.userData = res.responseObject.openPositions;
      this.dataSource = new MatTableDataSource(this.userData);
      console.log(this.userData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(data);
    }
    );}

  apply(id: string){
    const data = {candApplicationId: {
      candidate_id: JSON.parse(localStorage.getItem('candidate')|| '{}').candidateId.toString(),
      job_id: id
    },}
    this.appService.applyJob(data).subscribe(data => {
      console.log(data);
      this._snackBar.open("Succesfully applied job", undefined, { duration: 2000, panelClass: ['snackbar-success'] });
    })
  }
  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// "candApplicationId": {
//   "candidate_id": 0,
//   "job_id": 0
// },
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
