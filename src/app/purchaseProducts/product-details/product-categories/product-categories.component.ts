import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from 'src/app/http.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent {

  data : any;
  categoryFormModel: any = {}; // Model for form data

  constructor(
    private router: Router, 
    private _HttpService : HttpService
  ) { }
  ngOnInit() {
   this.getCategories();
  }

  getCategories() {
    debugger
    this._HttpService.Getproductcategory().subscribe(
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

  saveCategory(form: NgForm) {
    debugger
    if (form.valid) {
      if (this.categoryFormModel.id) {
        // Update existing category
        this._HttpService.updateproductcategory(this.categoryFormModel).subscribe(
          (res: any) => {
            console.log('this is res',res)
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.getCategories();
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
        this._HttpService.addproductcategory(this.categoryFormModel).subscribe(
          (res: any) => {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.getCategories();
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

  editCategory(category: any) {
    this.categoryFormModel = { ...category };
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.categoryFormModel = {};
  }

}
