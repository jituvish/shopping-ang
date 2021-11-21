import { Input, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import("./user/user.module").then(module0=>module0.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import("./admin/admin.module").then(module1=>module1.AdminModule)
  },
  {
    path : "customer",
    loadChildren : ()=> import("./customer/customer.module").then(module2=>module2.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
