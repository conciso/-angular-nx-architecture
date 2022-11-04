import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsDomainModule } from '@hotel-management/rooms/domain';
import { RoomViewPageComponent } from './room-view-page/room-view-page.component';

@NgModule({
  imports: [CommonModule, RoomsDomainModule],
  declarations: [RoomViewPageComponent],
  exports: [RoomViewPageComponent],
})
export class RoomsFeatureInfoModule {}
