import { Injectable } from '@angular/core';
import { RoomDataService } from '@hotel-management/rooms/domain';

@Injectable({ providedIn: 'root' })
export class RoomApiAssignService {
  constructor(private roomDataService: RoomDataService) {}

  getRoom(id: string | null) {
    return this.roomDataService.getRoom(id);
  }

  getRooms() {
    return this.roomDataService.getRooms();
  }
}
