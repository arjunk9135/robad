import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SamplechartComponent } from '../samplechart/samplechart.component';
import { SamplecomponentComponent } from '../samplecomponent/samplecomponent.component';
import { SamplecomponentnewComponent } from '../samplecomponentnew/samplecomponentnew.component';
import { PiechartComponent } from '../piechart/piechart.component';
import { LinechartComponent } from '../linechart/linechart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 0.75, component: SamplechartComponent },
          { title: 'Card 2', cols: 1, rows: 1, component: PiechartComponent },
          { title: 'Card 3', cols: 1, rows: 1, component: PiechartComponent }
        ];
      }

      return [
        { title: 'Sensor Data', cols: 2, rows: 0.75, component: SamplechartComponent },
        { title: 'Card 2', cols: 1, rows: 1, component: PiechartComponent },
        { title: 'Card 3', cols: 1, rows: 1, component: LinechartComponent }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
