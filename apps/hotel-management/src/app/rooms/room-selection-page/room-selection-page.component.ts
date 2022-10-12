import {Component, OnInit} from '@angular/core';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import {Room} from '../room';
import {RoomService} from '../room.service';

@Component({
  selector: 'hotel-management-room-selection-page',
  templateUrl: './room-selection-page.component.html',
  styleUrls: ['./room-selection-page.component.scss'],
})
export class RoomSelectionPageComponent implements OnInit {
  rooms$!: Observable<Room[]>;

  private unsubscribe$ = new Subject<void>();

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.rooms$ = this.roomService.getRooms().pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
