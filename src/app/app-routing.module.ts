import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { ManageusersComponent } from './manageusers/manageusers.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'',component:HomepageComponent},
  {path:'manageusers', component:ManageusersComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
