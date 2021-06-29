import { StateService } from './../../state.service';
import { InfoWindowManager } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { DistService } from 'src/app/dist.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  group: any;
  cluster: any;
  a: any;
  //xyz:any;
  show: boolean = false;
  searchForm!: FormGroup
  sessionList: any;
  data:any=[]
  constructor(private State: StateService, private distx: DistService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      districtId: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.State.getstates().subscribe((display: any) => {
      this.group = display.states;
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
  onselect(group: any) {
    console.log(group)
    this.State.getdistricts(group.target.value).subscribe((showus: any) => {
      this.cluster = showus.districts;
      console.log(this.cluster)

    })
  }
  search() {
    this.show = true;
    this.data.push({date:"24-06-2021"})
    console.log(this.searchForm.value)
    const data = new Date();
    const date1 = data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear();
    this.distx.getdis(this.searchForm.controls.districtId.value, date1).subscribe((res: any) => {

      this.sessionList = res.sessions
      console.log(this.sessionList, "result for service")
    })
  }
}