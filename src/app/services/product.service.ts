import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http : HttpClient) { }
  
  getProduct(){
    return this._http.get<any>("http://localhost:2000/api/product");
  }
}
