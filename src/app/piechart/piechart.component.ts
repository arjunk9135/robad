import { Component, OnInit, ViewChild } from '@angular/core';
    import { Chart } from 'chart.js';
import { ChartService } from '../services/chart.service';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {

  canvas: any;
  ctx: any;
  pieData: any[] = [];
  @ViewChild('piechart') piechart: any;


  constructor(private chartService: ChartService) {}
  ngAfterViewInit() {
    this.chartService.getData().subscribe(data => {
      this.canvas = this.piechart.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      this.pieData = data;
      let firstObject = this.pieData.find(obj => obj.id === 1);
      let secondObject = this.pieData.find(obj => obj.id === 4);
      //
      let dataArray1 = Object.values(firstObject).map(val => val as number);
      let dataArray2 = Object.values(secondObject).map(val1 => val1 as number);



      new Chart(this.ctx, {
          type: 'pie',
          data: {
            datasets: [{
              label: 'My First Dataset',
              data: dataArray2,//[100,30, 50, 100,120,34,20],
              backgroundColor: [
                '#1B66D5',
                'rgb(128, 128, 255)',
                '#929BD1',
                '#AED2FF',
                '#444655',
                '',
                ''
                
              ],
              
              
            }],
              labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
          },
      });
  
    });  
    }

}
