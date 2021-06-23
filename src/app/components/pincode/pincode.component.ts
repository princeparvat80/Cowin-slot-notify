import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  pincodeForm!: FormGroup;
  
  constructor(private code:PinService, private nidhi:CalenderService) { 

   
  // //  this.code.getData().subscribe(data=>{
  //    this.result=data
  //   //  console.warn(this.result);
  //  }) 
  }

  ngOnInit(): void {
    this.pincodeForm = new FormGroup({
      'pincode':new FormControl()
    })
//     this.nidhi.getnew().subscribe((total:any)=>
// {
// this.priyadarshi=total.centers;
// console.log(this.priyadarshi);
// })
  }
  submitForm(){
    console.log(this.pincodeForm.value)
    const date=new Date()
    const date1=date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()
    this.code.getData(this.pincodeForm.controls.pincode.value,date1).subscribe(data=>{
         this.result=data
       console.warn(this.result);
        }) 
  }
}
