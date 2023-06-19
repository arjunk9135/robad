import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { QrcodescannerComponent } from '../qrcodescanner/qrcodescanner.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewdeviceComponent } from '../newdevice/newdevice.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  data: any[] = [];
  CurrentCard: any; // Variable to store selected card data
  

  constructor(private http: HttpClient, private router: Router,private dialog: MatDialog) { }
  openCardEditor(card: any) {
    this.CurrentCard = card; // Store the selected card data in CurrentCard variable
  this.router.navigate(['/dashboard/edit-device'], { state: { card: this.CurrentCard } });
  }

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    const apiUrl = 'http://localhost:8080/devices/get-devices'; // Replace with your API endpoint
    this.http.get<any>(apiUrl).subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  openNewDeviceDialog(): void {
    const dialogRef: MatDialogRef<NewdeviceComponent> = this.dialog.open(NewdeviceComponent, {
      width: '900px',
      height:'400px', // Adjust the width as per your requirements
      disableClose: false, // Prevent closing the dialog by clicking outside or pressing ESC
      // You can add more configuration options here
    });
  
    // Subscribe to the dialog's afterClosed event to handle the result or perform any actions
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result or perform any actions
    });
  }
  

}
