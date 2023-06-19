import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagertabComponent } from './managertab.component';

describe('ManagertabComponent', () => {
  let component: ManagertabComponent;
  let fixture: ComponentFixture<ManagertabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagertabComponent]
    });
    fixture = TestBed.createComponent(ManagertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
