import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Room} from './room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  baseUrl = '/rooms';

  constructor(private http: HttpClient) {}

  getRoom(id: string) {
    return this.http.get<Room>(environment.API_URL + this.baseUrl + id);
  }

  getRooms() {
    return this.http.get<Room[]>(environment.API_URL + this.baseUrl);
  }
}
