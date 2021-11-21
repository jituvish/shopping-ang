import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AfterloginGuard implements CanActivate {
  constructor(private _router : Router){ }
  canActivate(){
    if( ! localStorage.getItem("adminToken")){
      return true;
    }
    else
    {
      this._router.navigate(["/admin/dashboard"]);
      return false;
    }
 }
  
}
