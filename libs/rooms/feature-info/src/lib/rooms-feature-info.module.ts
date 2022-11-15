import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsDomainModule } from '@hotel-management/rooms/domain';
import { RoomViewPageComponent } from './room-view-page/room-view-page.component';
import { RoomsApiAssignModule } from '@hotel-management/rooms/api-assign';

@NgModule({
  imports: [CommonModule, RoomsDomainModule, RoomsApiAssignModule],
  declarations: [RoomViewPageComponent],
  exports: [RoomViewPageComponent],
})
export class RoomsFeatureInfoModule {}
