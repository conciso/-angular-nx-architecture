import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsApiAssignModule } from '@hotel-management/rooms/api-assign';

@NgModule({
  imports: [
    CommonModule,
    RoomsApiAssignModule
  ],
})
export class HotelManagementDomainModule {}
