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
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDksy6N6Z1LhNP_4RErbG7YX1sBQGq7nmk',
      libraries: ['geometry','places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
