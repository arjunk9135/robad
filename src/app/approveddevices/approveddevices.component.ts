import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-approveddevices',
  templateUrl: './approveddevices.component.html',
  styleUrls: ['./approveddevices.component.scss']
})

export class ApproveddevicesComponent {
  constructor(private http: HttpClient,private dialog: MatDialog) { }
  data: any[] = [];

  ngOnInit(): void {
    this.getDataFromApi();
  }
  getDataFromApi(): void {
    const apiUrl = 'http://localhost:8080/approved-devices/all-approved-devices'; // Replace with your API endpoint
    this.http.get<any>(apiUrl).subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
