import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelManagementDomainModule } from '@hotel-management/hotel-management/domain';
import { CheckInComponent } from './check-in.component';

@NgModule({
  imports: [CommonModule, HotelManagementDomainModule],
  declarations: [CheckInComponent],
  exports: [CheckInComponent],
})
export class HotelManagementFeatureCheckInModule {}
