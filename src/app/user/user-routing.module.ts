import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path : "",   
    component : UserComponent,
    children : [
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "signup",
        component : SignupComponent
      },
      {
        path : "dashboard",
        canActivate : [BackdoorGuard],
        component : DashboardComponent
      },
      {
        path : "profile",
        canActivate : [BackdoorGuard],
        component : ProfileComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
