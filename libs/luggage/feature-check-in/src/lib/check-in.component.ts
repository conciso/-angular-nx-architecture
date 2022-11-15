import { Component } from '@angular/core';
import { CheckInFacade } from '@hotel-management/luggage/domain';

@Component({
  selector: 'luggage-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent {
  constructor(private checkInFacade: CheckInFacade) {}
}
