import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
   url:string;
   disturl:string;

  constructor(private _http:HttpClient) { 
    this.url="https://cdn-api.co-vin.in/api/v2/admin/location/states";
    this.disturl="https://cdn-api.co-vin.in/api/v2/admin/location/districts";
  }
  getstates() {
    console.log("qwerty");
    return this._http.get(this.url);
  }
  getdistricts(id:string) {
    console.log("xyzabc");
    return this._http.get(this.disturl+'/'+id);
}
}
