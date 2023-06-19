import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveddevicesComponent } from './approveddevices.component';

describe('ApproveddevicesComponent', () => {
  let component: ApproveddevicesComponent;
  let fixture: ComponentFixture<ApproveddevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveddevicesComponent]
    });
    fixture = TestBed.createComponent(ApproveddevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
