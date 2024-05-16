import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ AccountsComponent } from './accounts/accounts.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [
    AccountsComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwt'); // Adjust this based on your token storage
        }
      }
    }) 
  ],
  providers: [],
  bootstrap: [AccountsComponent]
})
export class AccountManagementsModule { }
