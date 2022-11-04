import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Room } from '../entities/room';
import { RoomDataService } from '../infrastructure/room.data.service';

@Injectable({ providedIn: 'root' })
export class RoomsFacade {
  private roomListSubject = new BehaviorSubject<Room[]>([]);
  private roomSubject = new BehaviorSubject<Room | null>(null);
  
  roomList$ = this.roomListSubject.asObservable();
  room$ = this.roomSubject.asObservable();

  constructor(private roomDataService: RoomDataService) {}

  getRooms(): void {
    this.roomDataService.getRooms().subscribe({
      next: (roomList) => {
        this.roomListSubject.next(roomList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }

  getRoom(id: string): void {
    this.roomDataService.getRoom(id).subscribe({
      next: (room) => {
        this.roomSubject.next(room);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
