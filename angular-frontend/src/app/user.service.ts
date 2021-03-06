import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  ipAddress:string="http://54.174.70.133:9090"

  UpdateUser(body:any):Observable<Object> {
    return this.http.put(this.ipAddress+"/api/user/editUser",body);
  }
}
