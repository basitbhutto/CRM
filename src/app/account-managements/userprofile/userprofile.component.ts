import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  data : any;

  constructor(
    private router: Router, 
    private _HttpService : HttpService
  ) { }
  ngOnInit() {
   this.getuser();
  }
  

  // getuser(){
  //   debugger;
  //   let res: any = this._HttpService.GetUsers().toPromise()

  //   if(res.success){
  //     debugger
  //     this.data = res.data;
  //     console.log('data', this.data)
  //   }
  //   console.log(res);
  // }



  getuser() {
    this._HttpService.GetUsers().subscribe(
      (res: any) => {
        if (res.success) {
          debugger
          this.data = res.data;
          console.log('data', this.data);
        } else {
          debugger
          console.error('Error fetching user data:', res.message);
        }
      },
      (error) => {
        debugger
        console.error('API call error:', error);
      }
    );
  }
}
