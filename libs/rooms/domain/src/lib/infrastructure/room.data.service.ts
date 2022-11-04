import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../entities/room';
import { environment } from '@hotel-management/environments';

@Injectable({ providedIn: 'root' })
export class RoomDataService {
  constructor(private http: HttpClient) {}

  getRoom(id: string | null) {
    return this.http.get<Room>(environment.API_URL + '/room/' + id);
  }

  getRooms() {
    return this.http.get<Room[]>(environment.API_URL + '/rooms');
  }
}
