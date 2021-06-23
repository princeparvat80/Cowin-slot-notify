import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getDat(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

 
  getData()
  {
    let url="https://cdn-api.co-vin.in/api/v2/admin/location/states";
    return this.http.get(url);
  
}


}
