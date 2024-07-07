import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from 'src/app/http.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.css']
})
export class ProductColorComponent {
  data : any;
  colorFormModel: any = {}; // Model for form data

  constructor(
    private router: Router, 
    private _HttpService : HttpService
  ) { }
  ngOnInit() {
   this.getColor();
  }

  getColor() {
    debugger
    this._HttpService.Getproductcolor().subscribe(
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

  saveColor(form: NgForm) {
    debugger
    if (form.valid) {
      if (this.colorFormModel.id) {
        // Update existing category
        this._HttpService.updateproductcolor(this.colorFormModel).subscribe(
          (res: any) => {
            console.log('this is res',res)
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.getColor();
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: error.message,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        );
      } else {
        // Add new category
        this._HttpService.addproductcolor(this.colorFormModel).subscribe(
          (res: any) => {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.getColor();
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: error.message,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        );
      }
    }
  }

  editColor(color: any) {
    this.colorFormModel = { ...color };
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.colorFormModel = {};
  }
}
