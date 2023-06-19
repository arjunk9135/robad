import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecomponentnewComponent } from './samplecomponentnew.component';

describe('SamplecomponentnewComponent', () => {
  let component: SamplecomponentnewComponent;
  let fixture: ComponentFixture<SamplecomponentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplecomponentnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplecomponentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
