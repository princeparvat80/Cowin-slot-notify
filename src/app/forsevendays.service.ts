import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForsevendaysService {
resurl:string;
  constructor(private http_ :HttpClient) {
     this.resurl="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter?center_id=702971&date=24-06-2021"
   }
   getcent()
   {
     console.log("hi")
     return this.http_.get(this.resurl);
}
}
