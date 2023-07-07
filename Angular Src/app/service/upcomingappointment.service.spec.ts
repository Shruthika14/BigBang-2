import { TestBed } from '@angular/core/testing';

import { UpcomingappointmentService } from './upcomingappointment.service';

describe('UpcomingappointmentService', () => {
  let service: UpcomingappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
