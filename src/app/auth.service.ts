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

  state(){
    return[
      {
        id: 1,
        name: "Maharashtra"
      },
      {
        id: 2,
        name: "West Bengal"

      },
      {
        id: 3,
        name: "Haryana"

      },
      {
        id: 4,
        name: "Uttar Pradesh"

      }
    ]
  }




  city(){
    return[
      {
        id: 1,
        name: "Mumbai"
      },
      {
        id: 1,
        name: "Pune"
      },
      {
        id: 2,
        name: "Kolkata"
      },
      {
        id: 2,
        name: "Howrah"
      },
      {
        id: 3,
        name: "Ambala"
      },
      {
        id: 3,
        name: "Sonipat"
      },
      {
        id: 4,
        name: "Agra"
      },
      {
        id: 4,
        name: "Ghaziabad"
      }
    ]
  }
  getData()
  {
    let url="https://cdn-api.co-vin.in/api/v2/admin/location/states";
    return this.http.get(url);
  
}


}
