import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Income } from '../income-class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiTrackerComponent {

  http: Http;

  headers: any = {
    'content-type':"application/json",
    'x-apikey': '5c14b061e908ae6c73f622e7',
    "cache-control": "no-cache"
  }

  url: string = "https://angularcourse-a170.restdb.io/rest/tracker";

  constructor(http: Http) {
    this.http = http;
  }

  saveIncome(income:Income): Observable<Response> {
    return this.http.post(this.url, income, {headers: this.headers});
   }


}
