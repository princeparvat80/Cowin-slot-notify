import { StateService } from './../../state.service';
import { InfoWindowManager } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { DistService } from 'src/app/dist.service';
 


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
 group:any;
 cluster:any;
 a:any;
 //xyz:any;

  constructor(private State:StateService, private distx:StateService) { 
    
  }

  ngOnInit():void {
    this.State.getstates().subscribe((display:any)=>{
      this.group=display.states;
      console.log(this.group)
    })


    /* this.abc.getdis().subscribe((rest:any)=>{
      this.xyz=rest.sessions;
      console.log(this.xyz);
    })*/
    /*private abc:DistService*/
    
    // this.distx.getdistricts().subscribe((showus:any)=>{
    //   this.cluster=showus.districts;
    //   console.log(this.cluster)
    // })
    // this.abcde.getstateid(a).subscribe((giveus:any)=>{
    //   this.troop=giveus.
    // })
    
    
    
  }
  onselect(group:any){
    console.log(group)
    this.distx.getdistricts(group.target.value).subscribe((showus:any)=>{
      this.cluster=showus.districts;
      console.log(this.cluster)
    
    })
  }
}