import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorsRegistrationComponent } from './advisors-registration.component';

describe('AdvisorsRegistrationComponent', () => {
  let component: AdvisorsRegistrationComponent;
  let fixture: ComponentFixture<AdvisorsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisorsRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisorsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
