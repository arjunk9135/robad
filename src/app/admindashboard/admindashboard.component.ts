import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SamplechartComponent } from '../samplechart/samplechart.component';
import { SamplecomponentComponent } from '../samplecomponent/samplecomponent.component';
import { SamplecomponentnewComponent } from '../samplecomponentnew/samplecomponentnew.component';
import { PiechartComponent } from '../piechart/piechart.component';
import { LinechartComponent } from '../linechart/linechart.component';
import { ChartinsertComponent } from '../chartinsert/chartinsert.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 2 ,component: ChartinsertComponent }
        ];
      }

      return [
        { title: 'Sensor Data', cols: 2, rows: 2, component: ChartinsertComponent }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
