import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictComponent } from './components/district/district.component';

const routes: Routes = [
  {
    path: 'district',
    component: DistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
