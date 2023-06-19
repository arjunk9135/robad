import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SamplecomponentComponent } from '../samplecomponent/samplecomponent.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  dashboard() {
    this.router.navigate(['/dashboard']); // Replace '/new-component' with your desired route path
  }
  dataUpdate() {
    // Navigate to the data update component
    this.router.navigate(['/signup']);
  }
  
  devices() {
    // Navigate to the devices component
  }

}
