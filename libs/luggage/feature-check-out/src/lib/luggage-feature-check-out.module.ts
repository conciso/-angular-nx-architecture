import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@hotel-management/luggage/domain';
import { CheckOutComponent } from './check-out.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [CheckOutComponent],
  exports: [CheckOutComponent],
})
export class LuggageFeatureCheckOutModule {}
