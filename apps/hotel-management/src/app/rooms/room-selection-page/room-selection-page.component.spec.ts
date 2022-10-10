import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomSelectionPageComponent} from './room-selection-page.component';

describe('RoomSelectionPageComponent', () => {
  let component: RoomSelectionPageComponent;
  let fixture: ComponentFixture<RoomSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomSelectionPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
