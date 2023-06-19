import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent {
   bardata: any[] = []
  canvas: any;
  ctx: any;
  @ViewChild('linechart') linechart: any;
    
    constructor(private chartService: ChartService) {}
  ngAfterViewInit() {
    this.chartService.getData().subscribe(data => {
      this.canvas = this.linechart.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      const chartData = this.bardata.map(data => parseFloat(data));
      this.bardata = data;
      let firstObject = this.bardata.find(obj => obj.id === 1);
      let secondObject = this.bardata.find(obj => obj.id === 4);

      //

      let dataArray1 = Object.values(firstObject).map(val => val as number);
      let dataArray2 = Object.values(secondObject).map(val1 => val1 as number);
      //

      new Chart(this.ctx, {
          type: 'bar',
          data: {
              datasets: [{
                  label: 'Current Vallue',
                  data: dataArray1,//[320, 120, 400, 200, 40, 20],
                  backgroundColor: "rgb(51, 102, 255)",
                  borderColor: "#007ee7",
                  barThickness: 40,
                  fill: true,
              },
              {
                  label: 'Invested Amount',
                  data: dataArray2,//[143, 180, 140, 60, 120, 50],
                  backgroundColor: ['rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)'],
                  borderColor: "#007ee7",
                  barThickness: 40,
                  fill: true,
              }],
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          },
      });

    });
  }


}
