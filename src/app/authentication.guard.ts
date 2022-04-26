import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardServiceService } from './auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private auth: AuthGuardServiceService, private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expectedRole = route.data.expectedRole;
      const token = localStorage.getItem('token')
      
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      if(this.auth.isAuthenticated()){
        if(expectedRole){
          // console.log(localStorage.getItem('userType')|| '{}').toString().toLowerCase())
          if(expectedRole !== localStorage.getItem("userType")?.toLowerCase()){
            this.router.navigate(['/login']);
            return false;
          }
        }

      }
    return true;
  }
  
}
