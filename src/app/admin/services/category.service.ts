import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://localhost:2000/api/admin/category/";

  constructor(private _http : HttpClient) { }
  getAll()
  {
    return this._http.get<any>(this.apiUrl);
  }
  get(id)
  {
    return this._http.get<any>(this.apiUrl+id);
  }
  add(obj)
  {
    return this._http.post<any>(this.apiUrl, obj);
  }
  update(obj, id)
  {
    return this._http.put<any>(this.apiUrl+id, obj);
  }
  delete(id)
  {
    return this._http.delete<any>(this.apiUrl+id);
  }

}
