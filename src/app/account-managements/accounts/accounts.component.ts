import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  invalidLogin?: boolean;

  constructor(
    private router: Router, 
    private _HttpService: HttpService,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  login = async (form: NgForm) => {
    const body = {
      userName: form.value.username,
      password: form.value.password
    };

    try {
      debugger
      let res: any = await this._HttpService.login(body).toPromise();
debugger
      if (res.success) {
        this.authService.login(res.data);  
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully logged in.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/getusers']);
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid username or password.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}
