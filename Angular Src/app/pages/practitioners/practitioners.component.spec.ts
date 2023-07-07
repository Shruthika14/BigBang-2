import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionersComponent } from './practitioners.component';

describe('PractitionersComponent', () => {
  let component: PractitionersComponent;
  let fixture: ComponentFixture<PractitionersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractitionersComponent]
    });
    fixture = TestBed.createComponent(PractitionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
