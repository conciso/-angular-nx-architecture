import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject, takeUntil} from 'rxjs';
import {Room} from '../room';
import {RoomService} from '../room.service';

@Component({
  selector: 'hotel-management-room-view-page',
  templateUrl: './room-view-page.component.html',
  styleUrls: ['./room-view-page.component.scss'],
})
export class RoomViewPageComponent {
  constructor(private route: ActivatedRoute, private roomService: RoomService) {}

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
