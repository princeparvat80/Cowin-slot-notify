import { Component, OnInit } from '@angular/core';
import { CalenderService } from 'src/app/calender.service';
import { PinService } from 'src/app/Service/pin.service';
@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {
  
  
  result:any;
  priyadarshi:any;
  
  
  constructor(private code:PinService, private nidhi:CalenderService) { 

   
   this.code.getData().subscribe(data=>{
     this.result=data
     console.warn(this.result);
   }) 
  }

  ngOnInit(): void {
    this.nidhi.getnew().subscribe((total:any)=>
{
this.priyadarshi=total.centers;
console.log(this.priyadarshi);
})
  }
  
}
