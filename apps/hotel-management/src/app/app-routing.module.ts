import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RoomSelectionPageComponent} from './rooms/room-selection-page/room-selection-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
