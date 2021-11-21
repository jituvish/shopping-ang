import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddComponent } from './pages/add/add.component';
import { DemoComponent } from './pages/demo/demo.component';
import { InfoComponent } from './pages/info/info.component';


const routes: Routes = [
  {
    path : "",
    component : CustomerComponent,
    children : [
      {
        path : "",
        component : InfoComponent
      },
      {
        path : "demo",
        component : DemoComponent
      },
      {
        path : "add",
        component : AddComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
