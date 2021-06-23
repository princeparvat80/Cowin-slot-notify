import { InfoWindowManager } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { DistService } from 'src/app/dist.service';
 


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  xyz:any;

  constructor(private abc:DistService) { 
    
  }

  ngOnInit() {
    
   /* this.abc.getdis().subscribe((rest:any)=>{
      this.xyz=rest.sessions;
      console.log(this.xyz);
    })*/
    

  }
  
  
  

  
  

  

  

}