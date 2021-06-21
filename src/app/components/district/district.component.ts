import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  constructor(private auth: AuthService) { 
    this.auth.getData().subscribe(data=>{
      console.warn(data)
    })
  }

  ngOnInit() {
    this.state = this.auth.state();
    
    console.log(this.state);

  }
  state:any=[];
  city:any=[];
  
  

  onSelect(state:any){
    this.city = this.auth.city().filter(e=>e.id == state.target.value);  
    console.log(this.city);
  }

}