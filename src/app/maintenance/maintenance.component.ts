import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  constructor(private http: HttpClient,private dialog: MatDialog, private router:Router) { }
  data: any[] = [];
  CurrentCard: any; // Variable to store selected card data

  openCardEditor(card: any) {
    this.CurrentCard = card; // Store the selected card data in CurrentCard variable
  this.router.navigate(['/dashboard/edit-device'], { state: { card: this.CurrentCard } });
  }

  ngOnInit(): void {
    this.getDataFromApi();
  }
  getDataFromApi(): void {
    const apiUrl = 'http://localhost:8080/maintenance-list/get-devices'; // Replace with your API endpoint
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
