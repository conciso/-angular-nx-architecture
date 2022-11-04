import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Room } from '../entities/room';
import { RoomDataService } from '../infrastructure/room.data.service';

@Injectable({ providedIn: 'root' })
export class RoomsFacade {
  private roomListSubject = new BehaviorSubject<Room[]>([]);
  roomList$ = this.roomListSubject.asObservable();

  constructor(private roomDataService: RoomDataService) {}

  load(): void {
    this.roomDataService.load().subscribe({
      next: (roomList) => {
        this.roomListSubject.next(roomList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
