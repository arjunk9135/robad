import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface ReportModel {
  id: string;
  device: string;
  number: string;
  imei: string;
  light: string;
  speaker: string;
  antenna: string;
  time: string;
  configuration1: string;
  configuration2: string;
  configuration3: string;
  configuration4: string;
  configuration5: string;
  configuration6: string;
  configuration7: string;
  configuration8: string;
  lightreview: string;
  speakerreview: string;
  antennareview: string;
  class: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  card: any;
  dname: string = '';
  imei: string = '';
  dnumber: string = '';
  completed: any;
  currtime: string = 'pending';
  conf1working: string = '';
  conf2working: string = '';
  conf3working: string = '';
  conf4working: string = '';
  conf5working: string = '';
  conf6working: string = '';
  conf7working: string = '';
  conf8working: string = '';
  lights_condition: string = '';
  antenna_condition: string = '';
  speaker_condition: string = '';
  device: any;
  idd: string = '';
  dlight: string = '';
  dantenna: string = '';
  dspeaker: string = '';
  dtime: string = '';
  data: ReportModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['card']) {
        this.card = JSON.parse(params['card']);
        this.dname = this.card?.device;
        this.imei = this.card?.imei;
        this.dnumber = this.card?.number;
        // this.currtime = this.card?.currtime;
        // this.conf1working = this.card?.conf1working;
        // this.conf2working = this.card?.conf2working;
        // this.conf3working = this.card?.conf3working;
        // this.conf4working = this.card?.conf4working;
        // this.conf5working = this.card?.conf5working;
        // this.conf6working = this.card?.conf6working;
        // this.conf7working = this.card?.conf7working;
        // this.conf8working = this.card?.conf8working;
        // this.lights_condition = this.card?.lights_condition;
        // this.speaker_condition = this.card?.speaker_condition;
        // this.antenna_condition = this.card?.antenna_condition;
        // console.log(this.dname);
        // console.log(this.conf1working);
        // console.log(this.lights_condition);
      }
    });

    // Fetch report by IMEI
    this.fetchReportByIMEI(this.imei);
  }

  fetchReportByIMEI(imei: string): void {
    if (!imei) {
      console.error('IMEI is missing.');
      return;
    }

    const url = `http://localhost:8080/report/getreport/${imei}`;
    this.http.get<ReportModel[]>(url).subscribe(
      (reports: ReportModel[]) => {
        console.log(reports);
        this.data = reports;
        // You can update the necessary properties or variables here
        // Example:
        // this.idd = this.data[0].id;
        // this.dname = this.data[0].device;
        // this.dnumber = this.data[0].number;
        // this.dlight = this.data[0].lightreview;
        // this.dspeaker = this.data[0].speakerreview;
        // this.dantenna = this.data[0].antennareview;
        // this.dtime = this.data[0].time;
        // this.conf1working = this.data[0].configuration1;
        // this.conf2working = this.data[0].configuration2;
        // this.conf3working = this.data[0].configuration3;
        // this.conf4working = this.data[0].configuration4;
        // this.conf5working = this.data[0].configuration5;
        // this.conf6working = this.data[0].configuration6;
        // this.conf7working = this.data[0].configuration7;
        // this.conf8working = this.data[0].configuration8;
        // this.lights_condition = this.data[0].light;
        // this.speaker_condition = this.data[0].speaker;
        // this.antenna_condition = this.data[0].antenna;
      },
      (error: any) => {
        if (error.status === 404) {
          console.log('Report not found.');
        } else {
          console.error('Error fetching report:', error);
        }
      }
    );
  }

  // rest of the code
  printScreen() {
    window.print();
  }
}
