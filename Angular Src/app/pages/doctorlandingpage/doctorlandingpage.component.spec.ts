import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlandingpageComponent } from './doctorlandingpage.component';

describe('DoctorlandingpageComponent', () => {
  let component: DoctorlandingpageComponent;
  let fixture: ComponentFixture<DoctorlandingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorlandingpageComponent]
    });
    fixture = TestBed.createComponent(DoctorlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
