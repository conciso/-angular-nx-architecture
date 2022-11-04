import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsDomainModule } from '@hotel-management/rooms/domain';

@NgModule({
  imports: [
    CommonModule,
    RoomsDomainModule
  ],
})
export class RoomsApiAssignModule {}
