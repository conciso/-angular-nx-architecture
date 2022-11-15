import { Component } from '@angular/core';
import { CleaningFacade } from '@hotel-management/rooms/domain';

@Component({
  selector: 'rooms-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.scss'],
})
export class CleaningComponent {
  constructor(private cleaningFacade: CleaningFacade) {}
}
