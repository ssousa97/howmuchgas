import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopbarModule } from './topbar/topbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MapsService } from './maps/maps.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TopbarModule,
    SidebarModule,
  ],
  providers: [MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
