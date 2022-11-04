import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'hotel-management-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  toolbarTitle = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.toolbarTitle = this.route.snapshot.data['title'];
  }
}
