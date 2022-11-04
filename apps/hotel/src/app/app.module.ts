import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomSelectionPageComponent } from './rooms/room-selection-page/room-selection-page.component';
import { RoomViewPageComponent } from './rooms/room-view-page/room-view-page.component';
import { RoomComponent } from './rooms/room-selection-page/room/room.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelManagementFeatureCheckInModule } from '@hotel-management/hotel-management/feature-check-in';
import { HotelManagementFeatureCheckOutModule } from '@hotel-management/hotel-management/feature-check-out';
import { LuggageFeatureCheckOutModule } from '@hotel-management/luggage/feature-check-out';
import { LuggageFeatureCheckInModule } from '@hotel-management/luggage/feature-check-in';
import { RoomsFeatureCleaningModule } from '@hotel-management/rooms/feature-cleaning';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LandingPageComponent,
    RoomSelectionPageComponent,
    RoomViewPageComponent,
    RoomComponent,
  ],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
