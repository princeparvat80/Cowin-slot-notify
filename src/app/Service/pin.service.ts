import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class PinService {
url:string;
  constructor(private http:HttpClient) {this.url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=801503&date=23-06-2021"; }
  
  getData()

  
  {
    console.log();
    // let url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=31-03-2021";
    return this.http.get(this.url);
    
  }
}
