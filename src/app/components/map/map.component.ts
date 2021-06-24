import { ForsevendaysService } from './../../forsevendays.service';
import { AniService } from '../../Service/map.service';
import { Component, OnInit,ViewChild,ElementRef,NgZone } from '@angular/core';
import {  MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  total:any;
  collections:any;
  lat:number;
  long:number;
  zoom:number;
  address!:string;
  
  
 @ViewChild('search')
 public searchElementRef!:ElementRef;
  

  constructor(private AniService:AniService , private mapsAPILoader:MapsAPILoader,
    private ngZone:NgZone,private cent:ForsevendaysService) 
    { this.lat=28.7041;
      this.long=77.1025;
      this.zoom=6;
     }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {

      this.setCurrentLocation();

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);

      autocomplete.addListener("place_changed", () => {

        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  

          if (place.geometry === undefined || place.geometry === null) {

            return;

          }
          this.lat = place.geometry.location.lat();

          this.long = place.geometry.location.lng();

          this.zoom = 12;

        });

      });

    });
    
    this.AniService.getcenter().subscribe((result:any)=>
    {
      
      this.collections=result.centers;
      console.log(this.collections);
    })
    
    this.cent.getcent().subscribe((center:any)=>
    {
      this.total=center.centers;
      console.log(this.total);
    })
    
  }
  private  setCurrentLocation()
  {
    if('geolocation'in navigator)
    {
    navigator.geolocation.getCurrentPosition(position =>
      {
        this.lat=position.coords.latitude;
        this.long=position.coords.longitude;
        this.zoom=17;
        
      })
  }
  }

}
