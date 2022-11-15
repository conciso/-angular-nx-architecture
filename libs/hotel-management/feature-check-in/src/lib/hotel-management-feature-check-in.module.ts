import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelManagementDomainModule } from '@hotel-management/hotel-management/domain';
import { CheckInComponent } from './check-in.component';
import { RoomSelectionPageComponent } from './room-selection-page/room-selection-page.component';
import { RouterModule } from '@angular/router';
import { RoomComponent } from './room-selection-page/room/room.component';
import { MatCardModule } from '@angular/material/card';

const routes = [{
  path: 'rooms',
  component: RoomSelectionPageComponent,
  data: {
    title: 'Room Selection Page',
  },
}];

@NgModule({
  imports: [
    CommonModule,
    HotelManagementDomainModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [CheckInComponent, RoomSelectionPageComponent, RoomComponent],
  exports: [CheckInComponent, RoomSelectionPageComponent, RoomComponent],
})
export class HotelManagementFeatureCheckInModule {}
