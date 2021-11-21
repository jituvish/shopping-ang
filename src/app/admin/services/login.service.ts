import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) { }
  login(obj){
    return this._http.post<any>("http://localhost:2000/api/admin/login", obj);
  }

  isLoggedIn(){
    if(localStorage.getItem("adminToken")){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem("adminToken");
      this._router.navigate(["/"]);
  }
}
