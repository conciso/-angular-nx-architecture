import { Component } from '@angular/core';
import { CheckOutFacade } from '@hotel-management/luggage/domain';

@Component({
  selector: 'luggage-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  constructor(private checkOutFacade: CheckOutFacade) {}
}
