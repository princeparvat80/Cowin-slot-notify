import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PincodeComponent } from './components/pincode/pincode.component';
import { DistrictComponent } from './components/district/district.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PincodeComponent,
    DistrictComponent,
    MapComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDksy6N6Z1LhNP_4RErbG7YX1sBQGq7nmk',
      libraries: ['geometry','places']
    }),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
