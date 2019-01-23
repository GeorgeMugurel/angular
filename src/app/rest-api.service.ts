import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './my-user/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  http: Http;

  headers: any = {
    'content-type':"application/json",
    'x-apikey': '5c14b061e908ae6c73f622e7',
    "cache-control": "no-cache"
  }

  url: string = 'https://angularcourse-a170.restdb.io/rest/employees';
  
  
  constructor(http: Http) {
    this.http = http;
   }

   getAll(): Observable<User[]> {
    var mapToUsers = map((response:Response)=>{
      return response.json();
    });
    return mapToUsers(this.http.get(this.url, {headers: this.headers}));
   }

   saveUser(user:User): Observable<Response> {
    return this.http.post(this.url, user, {headers: this.headers});
   }

   restDelete(id : string): Observable<Response> {
    return this.http.delete(this.url + "/" + id, {headers: this.headers});
   }

}
