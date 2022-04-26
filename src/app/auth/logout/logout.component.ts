import { Component, OnInit } from '@angular/core';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authGuardServiceService:AuthGuardServiceService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.authGuardServiceService.logout();
  }

}
