import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelManagementDomainModule } from '@hotel-management/hotel-management/domain';
import { CheckOutComponent } from './check-out.component';

@NgModule({
  imports: [CommonModule, HotelManagementDomainModule],
  declarations: [CheckOutComponent],
  exports: [CheckOutComponent],
})
export class HotelManagementFeatureCheckOutModule {}
