import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http : HttpClient) { } 
  userInfo(){
    return this._http.get<any>("http://localhost:2000/api/user", 
    { headers : { Authorization : localStorage.getItem("token") }}
    )
  }
}



