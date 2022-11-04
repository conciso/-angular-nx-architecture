import { Component, OnInit } from '@angular/core';
import { CheckOutFacade } from '@hotel-management/hotel-management/domain';

@Component({
  selector: 'hotel-management-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  constructor(private checkOutFacade: CheckOutFacade) {}

  ngOnInit() {}
}
