import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Room} from './room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRoom(id: string | null) {
    return this.http.get<Room>(environment.API_URL + '/room/' + id);
  }

  getRooms() {
    return this.http.get<Room[]>(environment.API_URL + '/rooms');
  }
}
