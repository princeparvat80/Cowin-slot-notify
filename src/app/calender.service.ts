import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
baseurl:string;

  constructor(private httpclient:HttpClient) { 
    this.baseurl="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=801503&date=23-06-2021";

  }
  getnew(){
    console.log();
    return this.httpclient.get(this.baseurl);
  }
}
