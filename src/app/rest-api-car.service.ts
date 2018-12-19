import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car-form/car';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiCarService {

  http: Http;

  headers: any = {
    'content-type':"application/json",
    'x-apikey': '5c14b061e908ae6c73f622e7',
    "cache-control": "no-cache"
  }

  url: string = "https://angularcourse-a170.restdb.io/rest/cars";

  constructor(http: Http) {
    this.http = http;
  }

  getById(id: string): Observable<Car>{
    var mapToUsers = map((response:Response)=>{
      return response.json();
    });
    return mapToUsers(this.http.get(this.url + "/" + id, {headers: this.headers}));
  }

  saveCar(car:Car): Observable<Response> {
    return this.http.post(this.url, car, {headers: this.headers});
   }

   editCar(car:Car , id : string): Observable<Response> {
    return this.http.put(this.url + "/" + id, car, {headers: this.headers});
   }

}
