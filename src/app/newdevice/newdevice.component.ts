import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { QrcodescannerComponent } from '../qrcodescanner/qrcodescanner.component';

@Component({
  selector: 'app-newdevice',
  templateUrl: './newdevice.component.html',
  styleUrls: ['./newdevice.component.scss'],
  animations: [
    trigger('successAnimation', [
      state('visible', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in')
      ]),
      transition(':leave', animate('300ms ease-out', style({ opacity: 0 })))
    ])
  ]
})
export class NewdeviceComponent {

  dname: String = '';
  imeinumber: String = '';
  dnumber: String = '';
  // Component properties and methods
  successVisible: boolean = false;

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  submitForm() {
    // Send a GET request to retrieve the user's password

    const formData = {
      "device": String(this.dname),
      "number": String(this.dnumber),
      "IMEI": String(this.imeinumber)
    };
    this.http.post('http://localhost:8080/devices/add-device', formData)
      .subscribe(
        response => {
          // Handle the response from the API
          console.log('Form data submitted successfully');

          window.location.reload();

          // Additional actions on success
        },
        error => {
          // Handle any errors that occur during the API call
          console.error('Error submitting form data:', error);
          // Additional error handling
        }
      );
  }

  openQRCodeGenerator(): void {
    const dialogRef = this.dialog.open(QrcodescannerComponent, {
      width: '600px', // Adjust the width as per your requirement
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.imeinumber = result; // Update the IMEI input field with the scanned result
        console.log("QR code result:", result);}
    });
  }
  

  
}
