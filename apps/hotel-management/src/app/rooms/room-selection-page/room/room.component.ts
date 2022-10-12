import {Component, Input} from '@angular/core';

@Component({
  selector: 'hotel-management-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  @Input()
  name!: string;

  @Input()
  roomSize!: number;
}
