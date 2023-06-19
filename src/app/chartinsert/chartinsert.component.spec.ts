import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartinsertComponent } from './chartinsert.component';

describe('ChartinsertComponent', () => {
  let component: ChartinsertComponent;
  let fixture: ComponentFixture<ChartinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
