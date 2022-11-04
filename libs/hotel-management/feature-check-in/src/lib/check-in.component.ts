import { Component, OnInit } from '@angular/core';
import { CheckInFacade } from '@hotel-management/hotel-management/domain';

@Component({
  selector: 'hotel-management-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  constructor(private checkInFacade: CheckInFacade) {}

  ngOnInit() {}
}
