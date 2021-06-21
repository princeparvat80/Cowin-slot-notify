import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PincodeComponent } from './components/pincode/pincode.component';

const routes: Routes = [{ path: 'pincode', component: PincodeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
