import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginService } from './services/login.service';
import { UsersService } from './services/users.service';
import { UserComponent } from './pages/user/user.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { StudentComponent } from './pages/student/student.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { DemoDirective } from './directives/demo.directive';
import { TokenInterceptor } from './helper/token.intercepter';


@NgModule({
  declarations: [AdminComponent, LoginComponent, ProductComponent, CategoryComponent, HeaderComponent, FooterComponent, DashboardComponent, UserComponent, AddProductComponent, EditProductComponent, StudentComponent, DiscountPipe, DemoDirective],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [LoginService, UsersService, CategoryService, ProductService,
    {
      provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true
    }
  ]
})
export class AdminModule { }
