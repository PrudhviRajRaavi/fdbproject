import { Component, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateJobComponent } from './create-job/create-job.component';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  createJobs() {
    const dialogRef = this.dialog.open(CreateJobComponent,{
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}
}
// @Component({
//   selector: 'CreateJob',
//   templateUrl: 'createjob.component.html',
// })
// export class CreateJob {
//   constructor(
//     public dialogRef: MatDialogRef<CreateJob>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//   ) {

//   }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
