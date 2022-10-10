import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoomSelectionPageComponent} from './rooms/room-selection-page/room-selection-page.component';
import {RoomViewPageComponent} from './rooms/room-view-page/room-view-page.component';
import {RoomComponent} from './rooms/room-selection-page/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LandingPageComponent,
    RoomSelectionPageComponent,
    RoomViewPageComponent,
    RoomComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
