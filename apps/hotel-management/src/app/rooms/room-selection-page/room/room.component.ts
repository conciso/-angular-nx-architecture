import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

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

  @Input()
  id!: string;

  constructor(private router: Router) {}

  openRoomDetails() {
    this.router.navigate(['room', this.id]);
  }
}
