import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserListComponent } from './view-user-list/view-user-list.component';

const routes: Routes = [
  
  {path:'addUser',component:AddUserComponent},
  {path:'viewUserList',component:ViewUserListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
