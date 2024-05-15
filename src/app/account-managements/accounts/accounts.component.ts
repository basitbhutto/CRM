import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  invalidLogin?: boolean;
  url : string = 'http://localhost:7080/api/Accounts/Login'
  constructor(private router: Router, private http: HttpClient,private jwtHelper : JwtHelperService) { }
  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http.post(this.url, credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {    
        return false;
    }
  }
}