import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './account-managements/accounts/accounts.component';
import { UserprofileComponent } from './account-managements/userprofile/userprofile.component';

const routes: Routes = [
  {
    path : 'account',
    component: AccountsComponent
},
{
  path : 'getusers',
  component: UserprofileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
