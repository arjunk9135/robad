import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplechartComponent } from './samplechart.component';

describe('SamplechartComponent', () => {
  let component: SamplechartComponent;
  let fixture: ComponentFixture<SamplechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
