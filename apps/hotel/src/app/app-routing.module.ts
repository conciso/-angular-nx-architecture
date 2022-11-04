import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RoomSelectionPageComponent} from './rooms/room-selection-page/room-selection-page.component';
import {RoomViewPageComponent} from './rooms/room-view-page/room-view-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      title: 'Main page',
    },
  },
  {
    path: 'rooms',
    component: RoomSelectionPageComponent,
    data: {
      title: 'Room Selection Page',
    },
  },
  {
    path: 'room/:id',
    component: RoomViewPageComponent,
    data: {
      title: 'Room View Page',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
