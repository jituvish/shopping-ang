import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { SignupService } from './services/signup.service';
import { LoginService } from './services/login.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [UserComponent, HomeComponent, AboutComponent, ContactComponent, LoginComponent, SignupComponent, HeaderComponent, FooterComponent, ProductBoxComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers : [ProductService, CategoryService, SignupService, LoginService, UserService]

})
export class UserModule { }
