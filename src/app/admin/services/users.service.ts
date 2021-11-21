import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http : HttpClient) { }
  allUsers(){
    return this._http.get<any>("http://localhost:2000/api/admin/users", 
    { headers : { Authorization : localStorage.getItem("adminToken") }}
    )
  }
}
