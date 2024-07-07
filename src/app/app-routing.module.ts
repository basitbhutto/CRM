import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './account-managements/accounts/accounts.component';
import { UserprofileComponent } from './account-managements/userprofile/userprofile.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { AuthGuard } from './auth.guard';



import { UnauthenticatedLayoutComponent } from './layouts/unauthenticated-layout/unauthenticated-layout.component';
import { LogoutComponent } from './layouts/logout/logout.component';
import { ProductCategoriesComponent } from './purchaseProducts/product-details/product-categories/product-categories.component';
import { ProductSizeComponent } from './purchaseProducts/product-details/product-size/product-size.component';
import { ProductColorComponent } from './purchaseProducts/product-details/product-color/product-color.component';
//import { GetUsersComponent } from './get-users/get-users.component';  // Example component



const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponent,
     canActivate: [AuthGuard],
    children: [
      { path: 'getusers', component: UserprofileComponent },
      // Add more authenticated routes here
      { path: 'product-category', component: ProductCategoriesComponent },
      { path: 'product-size', component: ProductSizeComponent },
      { path: 'product-color', component: ProductColorComponent },

    ]
  },
  {
    path: '',
    component: UnauthenticatedLayoutComponent,
    children: [
      { path: 'account', component: AccountsComponent },
      // Add more unauthenticated routes here
    ]
  },
  { path: 'logout', component: LogoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
