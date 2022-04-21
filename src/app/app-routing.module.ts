import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthenticationGuard } from './authentication.guard';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import { AppliedJobsComponent } from './candidate-page/pages/applied-jobs/applied-jobs.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: RegisterComponent},
  {path:'candidate', component: CandidatePageComponent, canActivate: [AuthenticationGuard]},
  {path:'applied-jobs', component: AppliedJobsComponent},
  {path:'manager', component:ManagerPageComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'manager'}},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
