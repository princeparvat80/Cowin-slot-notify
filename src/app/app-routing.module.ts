import { MapComponent } from './components/map/map.component';
import { DistrictComponent } from './components/district/district.component';
import { PincodeComponent } from './components/pincode/pincode.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'search-by-pincode', component: PincodeComponent},
  {path: 'search-by-District', component: DistrictComponent},
  {path: 'search-by-Map', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
