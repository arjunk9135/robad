import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-samplechart',
  templateUrl: './samplechart.component.html',
  styleUrls: ['./samplechart.component.scss']
})
export class SamplechartComponent implements OnInit {

    myData: any[] = [];
  canvas: any;
  ctx: any;
  currv: number[] = [];
  investv: number[] = [];
  
  @ViewChild('mychart') mychart: any;

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.getData().subscribe(data => {
      this.myData = data;
      let firstObject = this.myData.find(obj => obj.id === 1);
      let secondObject = this.myData.find(obj => obj.id === 4);


      //let secondObject = this.myData[1];
      //let currentv = [parseInt(firstObject.sunday), parseInt(firstObject.monday), parseInt(firstObject.tuesday), parseInt(firstObject.wednesday),
      //parseInt(firstObject.thursday), parseInt(firstObject.friday), parseInt(firstObject.saturday)];

      //let investedv = [parseInt(secondObject.sunday), parseInt(secondObject.monday), parseInt(secondObject.tuesday), parseInt(secondObject.wednesday),
      //parseInt(secondObject.thursday), parseInt(secondObject.friday), parseInt(secondObject.saturday)];

      console.log(firstObject);
      let dataArray1 = Object.values(firstObject).map(val => val as number);
      let dataArray2 = Object.values(secondObject).map(val1 => val1 as number);
     console.log(dataArray1);
     console.log(dataArray2);
      //console.log(investedv);
      //this.currv = currentv;
      //this.investv = investedv;
      // Render the chart after data is fetched
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'Current Value',
            data: dataArray1,
            backgroundColor: "rgb(51, 102, 255)",
            borderColor: "",
            barThickness: 40,
            fill: true,
          },
          {
            label: 'Invested Amount',
            data: dataArray2,
            backgroundColor: ['rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)', 'rgb(128, 128, 255)'],
            borderColor: "",
            barThickness: 40,
            fill: true,
          }],
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
      });
    });
  }
}
