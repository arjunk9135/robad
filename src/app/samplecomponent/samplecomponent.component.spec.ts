import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecomponentComponent } from './samplecomponent.component';

describe('SamplecomponentComponent', () => {
  let component: SamplecomponentComponent;
  let fixture: ComponentFixture<SamplecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
