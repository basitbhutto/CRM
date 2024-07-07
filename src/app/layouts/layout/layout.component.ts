// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.css']
// })
// export class LayoutComponent {

// }




import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import {AuthService } from '../../auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, RouterModule] // Add RouterModule here
})
export class LayoutComponent {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e : any): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/accounts']); // Navigate to the logout route
  }
}
