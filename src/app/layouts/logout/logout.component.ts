import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    debugger;
    this.authService.logout();
  }
}
