import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

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
