import { Component } from '@angular/core';
import { AuthGuardServiceService } from './auth-guard-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fdbproject';
  constructor(private authService:AuthGuardServiceService) { }
}
