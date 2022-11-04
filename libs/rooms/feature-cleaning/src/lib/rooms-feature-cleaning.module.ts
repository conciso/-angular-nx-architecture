import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsDomainModule } from '@hotel-management/rooms/domain';
import { CleaningComponent } from './cleaning.component';

@NgModule({
  imports: [CommonModule, RoomsDomainModule],
  declarations: [CleaningComponent],
  exports: [CleaningComponent],
})
export class RoomsFeatureCleaningModule {}
