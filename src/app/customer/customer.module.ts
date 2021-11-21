import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import{ ReactiveFormsModule } from '@angular/forms';


import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { InfoComponent } from './pages/info/info.component';
import { DemoComponent } from './pages/demo/demo.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [CustomerComponent, InfoComponent, DemoComponent, AddComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
