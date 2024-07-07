import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from 'src/app/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.css']
})
export class ProductSizeComponent {
  data : any;
  sizeFormModel: any = {}; // Model for form data

  constructor(
    private router: Router, 
    private _HttpService : HttpService
  ) { }
  ngOnInit() {
   this.getSize();
  }

  getSize() {
    debugger
    this._HttpService.Getproductsize().subscribe(
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

  saveSize(form: NgForm) {
    debugger
    if (form.valid) {
      if (this.sizeFormModel.id) {
        // Update existing category
        this._HttpService.updateproductsize(this.sizeFormModel).subscribe(
          (res: any) => {
            console.log('this is res',res)
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.getSize();
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
        this._HttpService.addproductsize(this.sizeFormModel).subscribe(
          (res: any) => {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.getSize();
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

  editSize(size: any) {
    this.sizeFormModel = { ...size };
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.sizeFormModel = {};
  }
}
