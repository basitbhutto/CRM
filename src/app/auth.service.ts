import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  constructor(private router: Router) {}

  // Method to check if the user is authenticated
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('JWT');
    // Check whether the token is expired and return
    // true or false
    return token !== null && !this.jwtHelper.isTokenExpired(token);
  }

  // Method to login the user
  public login(token: string): void {
    localStorage.setItem('JWT', token);
    this.router.navigate(['/getusers']);
  }

  // Method to logout the user
  public logout(): void {
    localStorage.removeItem('JWT');
    this.router.navigate(['/account']);
  }

  // Optionally, you can add a method to get the decoded token data
  public getDecodedToken(): any {
    const token = localStorage.getItem('JWT');
    return token ? this.jwtHelper.decodeToken(token) : null;
  }
}
