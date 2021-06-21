import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AniService {
  baseurl:string;

  constructor(private httpClient:HttpClient) { 
    this.baseurl='https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=28.72&long=77.14';
     
  }
  getcenter()
  {
    console.log("hi");
     return this.httpClient.get(this.baseurl);
  }
  }

