import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient,private router: Router) { }
  private apiEndpoint = 'http://localhost:8080/RP/';

  // get all available Jobs
  getAllJobs() {
    // Set the headers
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // Set the request headers
    // let options = {
    //   headers: headers
    // };
    // let options = new ({ headers: headers });
    // Return the observable
    console.log(JSON.parse(localStorage.getItem('candidate')|| '{}').candidateId)
    const headers= new HttpHeaders().set('candidateId',JSON.parse(localStorage.getItem('candidate')|| '{}').candidateId.toString());
    
    return this.http.get<any>(this.apiEndpoint + 'candidate/availableJobs', {'headers': headers});
    
    // return this.http.get(this.apiEndpoint + 'candidate/availableJobs');
  }
  updateProfile(user:any) {
    return this.http.post(this.apiEndpoint + 'candidate/updateProfile', user);
  }
  confirmCandidateDetails(user:any) {
    return this.http.post(this.apiEndpoint + 'saveCandidateDetails', user);
  }
  confirmFinalDetails(user:any) {
    return this.http.post(this.apiEndpoint + 'saveWorkExpDetails', user);
  }
  educationDetails(user:any) {
    return this.http.post(this.apiEndpoint + 'saveEducationalDetails', user);
  }
  applyJob(user:any) {
    return this.http.post(this.apiEndpoint + 'candidate/applyJob', user);
  }
  createJob(user:any) {
    return this.http.put(this.apiEndpoint + 'createJob', user);
  }
}
