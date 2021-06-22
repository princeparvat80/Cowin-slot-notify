import { InfoWindowManager } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Service/district.service';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  ItemsArray:any= [];

  constructor(private auth: AuthService) { 
    this.auth.getData().subscribe(data=>{
      console.warn(data)
    })
  }

  ngOnInit() {
    this.state = this.auth.state();
    
    console.log(this.state);

    this.auth.getDat().subscribe((res: any[])=>{
      this.ItemsArray= res;
      console.log(res);
    }) 

    

  }
  
  state:any=[];
  city:any=[];
  

  
  

  onSelect(state:any){
    this.city = this.auth.city().filter(e=>e.id == state.target.value);  
    console.log(this.city);
  }

  headers:any = ["ID", "Name", "Age", "Gender", "Vaccine Name", "Dose 1", "Dose 2", "Address", "Free/Paid"];

  rows:any = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "18+",
      "Gender" : "Male",
      "Vaccine Name" : "Covishield",
      "Dose 1": "24 Slots",
      "Dose 2": "Booked",
      "Address": "Ghaziabad, Apollo Clinic, 201001",
      "Free/Paid": "Free"

      
      
    },
    {
      "ID" : "5",
      "Name" : "John",
      "Age" : "45+",
      "Gender" : "Male",
      "Vaccine Name" : "Covishield",
      "Dose 1" : "Booked",
      "Dose 2": "60 Slots",
      "Address": "Kolkata, Fortis Hospital, 700025",
      "Free/Paid": "Paid"


    },
    {
      "ID" : "6",
      "Name" : "Raman",
      "Age" : "18+",
      "Gender" : "Male",
      "Vaccine Name" : "Covaxin",
      "Dose 1": "100 Slots",
      "Dose 2": "Booked",
      "Address": "Mumbai, Alica Hall, 400101",
      "Free/Paid": "Paid"


    },
    {
      "ID" : "7",
      "Name" : "Mohan",
      "Age" : "18+",
      "Gender" : "Male",
      "Vaccine Name" : "Sputnik V",
      "Dose 1": "29 Slots",
      "Dose 2": "5 Slots",
      "Address": "Ambala, GSS School, 134203",
      "Free/Paid": "Free"

    },
    {
      "ID" : "8",
      "Name" : "Shreya",
      "Age" : "45+",
      "Gender" : "Female",
      "Vaccine Name" : "Covaxin",
      "Dose 1": "Booked",
      "Dose 2": "100 Slots",
      "Address": "Ghaziabad, Divoc Health, 201017",
      "Free/Paid": "Free"

    },
    {
      "ID" : "11",
      "Name" : "Ram",
      "Age" : "18+",
      "Gender" : "Male",
      "Vaccine Name" : "Covishield",
      "Dose 1": "24 Slots",
      "Dose 2": "Booked",
      "Address": "Ghaziabad, Apollo Clinic, 201001",
      "Free/Paid": "Free"

      
      
    },
    {
      "ID" : "12",
      "Name" : "Nitin",
      "Age" : "45+",
      "Gender" : "Male",
      "Vaccine Name" : "Covishield",
      "Dose 1" : "Booked",
      "Dose 2": "60 Slots",
      "Address": "Kolkata, Fortis Hospital, 700025",
      "Free/Paid": "Paid"


    },
    {
      "ID" : "13",
      "Name" : "Alok",
      "Age" : "18+",
      "Gender" : "Male",
      "Vaccine Name" : "Covaxin",
      "Dose 1": "100 Slots",
      "Dose 2": "Booked",
      "Address": "Mumbai, Alica Hall, 400101",
      "Free/Paid": "Free"


    }
    
  ]

}