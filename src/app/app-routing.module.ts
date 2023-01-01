import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {ClientComponent} from './client/client.component';

const routes: Routes = [
  {redirectTo:'login', path:'', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin',component:AdminComponent},
  {path:'consultant',component:ConsultantComponent},
  {path:'client',component:ClientComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
