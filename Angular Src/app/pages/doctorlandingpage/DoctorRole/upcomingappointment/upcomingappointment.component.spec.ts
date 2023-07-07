import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingappointmentComponent } from './upcomingappointment.component';

describe('UpcomingappointmentComponent', () => {
  let component: UpcomingappointmentComponent;
  let fixture: ComponentFixture<UpcomingappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingappointmentComponent]
    });
    fixture = TestBed.createComponent(UpcomingappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
