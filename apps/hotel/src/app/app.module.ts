import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HotelManagementFeatureCheckInModule } from '@hotel-management/hotel-management/feature-check-in';
import { HotelManagementFeatureCheckOutModule } from '@hotel-management/hotel-management/feature-check-out';
import { LuggageFeatureCheckOutModule } from '@hotel-management/luggage/feature-check-out';
import { LuggageFeatureCheckInModule } from '@hotel-management/luggage/feature-check-in';
import { RoomsFeatureCleaningModule } from '@hotel-management/rooms/feature-cleaning';
import { RoomsFeatureInfoModule } from '@hotel-management/rooms/feature-info';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HotelManagementFeatureCheckInModule,
    HotelManagementFeatureCheckOutModule,
    LuggageFeatureCheckOutModule,
    LuggageFeatureCheckInModule,
    RoomsFeatureCleaningModule,
    RoomsFeatureInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
