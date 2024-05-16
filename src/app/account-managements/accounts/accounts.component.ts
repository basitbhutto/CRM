import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  invalidLogin?: boolean;

  constructor(
    private router: Router, 
    private _HttpService : HttpService
  ) { }
  
  ngOnInit() {
   
  }
  
  login = async (form: NgForm) => {
    debugger;
    const body = {
      userName: form.value.username,
      password: form.value.password
    };
      let res: any = await this._HttpService.login(body).toPromise();
     debugger;
     if(res.success){
      console.log('dta',res.data)
      localStorage.setItem('JWT', JSON.stringify(res.data));
     }

  }


  
  
  //  login = (form: NgForm) => {
  //   debugger
  //   const body ={
  //     userName: form.value.username,
  //     password: form.value.password
  //   };
  //   let res: any =  this._HttpService.login(body).toPromise();
  //   // if (res.true) {
  //     let date = res;
  //     console.log(date );
      
  //   // }
  // }


  // isUserAuthenticated() {
  //   const token = localStorage.getItem("jwt");
  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
}