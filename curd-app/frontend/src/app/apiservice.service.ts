import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend 

  apiUrl = 'http://localhost:3000/user/';

  //get all data
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  //get single data
  getSingleData(id:any):Observable<any>
  {
    return this._http.get(`${this.apiUrl}${id}`);
  }

  //create data
  createData(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`, data);
  }

  //delete data
  deleteData(id:any):Observable<any>
  {
    return this._http.delete(`${this.apiUrl}${id}`);
  }

  //update data
  updateData(data:any, id:any):Observable<any>
  {
    return this._http.put(`${this.apiUrl}${id}`, data);
  }

}
