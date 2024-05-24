import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountManagementsModule } from './account-managements/account-managements.module'
import { HttpClient } from '@angular/common/http';
import { LayoutComponent } from './layouts/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnauthenticatedLayoutComponent } from './layouts/unauthenticated-layout/unauthenticated-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { LogoutComponent } from './layouts/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
     AuthenticatedLayoutComponent,
    UnauthenticatedLayoutComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccountManagementsModule,
    LayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
