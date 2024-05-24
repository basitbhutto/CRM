import { Component } from '@angular/core';
// import { AuthService } from '../../a'
import { AuthService } from '../../auth.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.css']
})
export class AuthenticatedLayoutComponent {
  constructor(public authService: AuthService) {}

}
