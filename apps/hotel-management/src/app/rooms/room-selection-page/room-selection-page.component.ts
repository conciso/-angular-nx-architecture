import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs';
import {Room} from '../room';
import {RoomService} from '../room.service';

@Component({
  selector: 'hotel-management-room-selection-page',
  templateUrl: './room-selection-page.component.html',
  styleUrls: ['./room-selection-page.component.scss'],
})
export class RoomSelectionPageComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe();
  }
}
