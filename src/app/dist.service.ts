import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistService {
  dist_url:string;

  constructor(private http:HttpClient) {
    this.dist_url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict";
   }

   getdis(district_id:string,date:string){
     console.log();
     return this.http.get(this.dist_url + "?district_id="+district_id+"&date="+date);

   }
}
