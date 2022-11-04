import {Component, OnDestroy, OnInit} from '@angular/core';
import { Room, RoomApiAssignService } from '@hotel-management/rooms/api-assign';
import {Observable, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'hotel-management-room-selection-page',
  templateUrl: './room-selection-page.component.html',
  styleUrls: ['./room-selection-page.component.scss'],
})
export class RoomSelectionPageComponent implements OnInit, OnDestroy {
  rooms$!: Observable<Room[]>;

  private unsubscribe$ = new Subject<void>();

  constructor(private roomService: RoomApiAssignService) {}

  ngOnInit(): void {
    this.rooms$ = this.roomService.getRooms().pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
