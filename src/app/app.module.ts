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
import { ProductCategoriesComponent } from './purchaseProducts/product-details/product-categories/product-categories.component';
import { ProductColorComponent } from './purchaseProducts/product-details/product-color/product-color.component';
import { ProductSizeComponent } from './purchaseProducts/product-details/product-size/product-size.component';
import { FormsModule } from '@angular/forms'; // Ensure this import


@NgModule({
  declarations: [
    AppComponent,
     AuthenticatedLayoutComponent,
    UnauthenticatedLayoutComponent,
    LogoutComponent,
    ProductCategoriesComponent,
    ProductColorComponent,
    ProductSizeComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccountManagementsModule,
    LayoutComponent,
    FormsModule // Don't forget to add FormsModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
