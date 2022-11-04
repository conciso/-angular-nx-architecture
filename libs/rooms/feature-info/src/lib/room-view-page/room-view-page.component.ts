import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Room, RoomDataService } from '@hotel-management/rooms/domain';
import {Observable, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'hotel-management-room-view-page',
  templateUrl: './room-view-page.component.html',
  styleUrls: ['./room-view-page.component.scss'],
})
export class RoomViewPageComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private roomService: RoomDataService) {}

  private unsubscribe$ = new Subject<void>();

  id: string | null = '';

  room$!: Observable<Room>;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.room$ = this.roomService.getRoom(this.id).pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
