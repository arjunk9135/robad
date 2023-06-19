import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qrcodescanner',
  templateUrl: './qrcodescanner.component.html',
  styleUrls: ['./qrcodescanner.component.scss']
})
export class QrcodescannerComponent implements OnInit {
  scanResult: string = '';

  constructor(private dialogRef: MatDialogRef<QrcodescannerComponent>) {}

  ngOnInit() {}

  handleCodeResult(result: string): void {
    this.scanResult = result;
    //console.log('Scanned QR code:', this.scanResult);
    this.closeDialogWithResult();
  }

  closeDialogWithResult(): void {
    const dialogResult = this.scanResult;
    console.log('QR code scanner dialog result:', dialogResult);
    this.dialogRef.close(dialogResult);

    
  }
}
