import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RoomViewPageComponent } from '@hotel-management/rooms/feature-info';
import {LandingPageComponent} from './landing-page/landing-page.component';

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
