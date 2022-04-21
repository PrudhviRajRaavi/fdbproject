import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import { AppliedJobsComponent } from './candidate-page/pages/applied-jobs/applied-jobs.component';
import { ProfileComponent } from './candidate-page/pages/applied-jobs/profile/profile.component';
import { CandidateDashboardComponent } from './candidate-page/pages/applied-jobs/candidate-dashboard/candidate-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { ManagerDashboardComponent } from './manager-page/pages/manager-dashboard/manager-dashboard.component';
import { AvailableJobsComponent } from './candidate-page/pages/available-jobs/available-jobs.component';
import { ApplyJobFormComponent } from './candidate-page/pages/available-jobs/apply-job-form/apply-job-form.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    CandidatePageComponent,
    AppliedJobsComponent,
    ProfileComponent,
    CandidateDashboardComponent,
    ManagerPageComponent,
    ManagerDashboardComponent,
    AvailableJobsComponent,
    ApplyJobFormComponent,
    LogoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
