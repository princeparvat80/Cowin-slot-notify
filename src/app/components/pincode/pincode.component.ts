import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {
  
  user:any;
  
  
  constructor() { 

    this.user = {
      Age18: '',
      Age45: '',
      Covidsheild: '',
      Covaxin: '',
      SputnikV: '',
      Free: '',
     Paid: ''
    }
    
  }

  ngOnInit(): void {
  }
  
}
