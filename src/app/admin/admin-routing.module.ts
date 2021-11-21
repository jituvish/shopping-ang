import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { UserComponent } from './pages/user/user.component';
import { AfterloginGuard } from './guards/afterlogin.guard';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { StudentComponent } from './pages/student/student.component';


const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        canActivate : [AfterloginGuard],
        component : LoginComponent
      },
      {
        path : "dashboard",
        canActivate : [BackdoorGuard],
        component : DashboardComponent
      },
      {
        path : "product",
        canActivate : [BackdoorGuard],
        component : ProductComponent
      },
      {
        path : "product/add",
        canActivate : [BackdoorGuard],
        component : AddProductComponent
      },
      {
        path : "product/edit/:id",
        canActivate : [BackdoorGuard],
        component : EditProductComponent
      },
      {
        path : "category",
        canActivate : [BackdoorGuard],
        component : CategoryComponent
      },
      {
        path : "users",
        canActivate : [BackdoorGuard],
        component : UserComponent
      },
      {
        path : "student",
        canActivate : [BackdoorGuard],
        component : StudentComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
