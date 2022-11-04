import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RoomViewPageComponent} from '../../../../libs/rooms/feature-info/src/lib/room-view-page/room-view-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      title: 'Main page',
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
