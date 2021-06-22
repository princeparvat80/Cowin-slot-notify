import { Component, OnInit } from '@angular/core';
import { PinService } from 'src/Service/pin.service';
@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {
  
  user:any;
  result:any;
  
  
  constructor(private code:PinService) { 

    this.user = {
      Age18: '',
      Age45: '',
      Covidsheild: '',
      Covaxin: '',
      SputnikV: '',
      Free: '',
     Paid: ''
    }
   this.code.getData().subscribe(data=>{
     this.result=data
     console.warn(this.result);
   }) 
  }

  ngOnInit(): void {
  }
  
}
