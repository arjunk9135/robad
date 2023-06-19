import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';





export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-editdevice',
  templateUrl: './editdevice.component.html',
  styleUrls: ['./editdevice.component.scss'],
  
})
export class EditdeviceComponent implements OnInit {
  card: any;
  dname: string = " ";
  imei: string = " ";
  dnumber: string = " ";
  panelOpenState = false;
  //
  confA: number = 0;
  confB: number = 0;
  confC: number = 0;
  confD: number = 0;
  confE: number = 0;
  confF: number = 0;
  confG: number = 0;
  confH: number = 0;
  //
  confA_interval: any;
  confB_interval: any;
  confC_interval: any;
  confD_interval:any;
  confE_interval: any;
  confF_interval: any;
  confG_interval: any;
  confH_interval: any;
  //
  antenna_interval:any;
  
  loading: boolean = false;
  //for device testing
  lights: number=0;
  //
  //
  conf1_check: boolean = false;
  conf2_check: boolean = false;
  conf3_check: boolean = false;
  conf4_check: boolean = false;
  conf5_check: boolean = false;
  conf6_check: boolean = false;
  conf7_check: boolean = false;
  conf8_check: boolean = false;
  //
  confD_check:boolean=false;
  isAutomationSuccessful: boolean = false;
  isManualSuccessful: boolean = false;
  // faulty devices
  faulty_lights: number=0;
  faulty_speaker: number=0;
  faulty_antenna: number=0;
  //auto_test report variables
  conf1_passed:boolean=false;
  antenna__passed:boolean=false;
  confD_passed:boolean=false;
  pass_variable:string=" ";
  //
  lights_working: boolean=true;
  speaker_working:boolean=true;
  antenna_working:boolean=true;
//
lights_radio: string = "1";
speaker_radio: string = "1";
antenna_radio: string = "1";
//
//testData: any[] = [];
lights_condition:String="Working";
antenna_condition:String="Working";
speaker_condition:String="Working";
//
conf1working:string='';
conf2working:string='';
conf3working:string='';
conf4working:string='';
conf5working:string='';
conf6working:string='';
conf7working:string='';
conf8working:string='';
// Example property names, update them as needed
submittedDname: String = '';
submittedImei: string = '';
submittedDnumber: string = '';
submittedLightsCondition: string = '';
submittedSpeakerCondition: string = '';
submittedAntennaCondition: string = '';
//
light_review:string='Nil';
speaker_review:string='Nil';
antenna_review:string='Nil';
//
collapseB:boolean=false;
toastshow:boolean=false;
//
CurrentCard: any; 

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  submitForm() {
    // Create an object with the form data
    const formData = {
      "device": this.dname,
      "number": this.dnumber,
      "IMEI": this.imei
    };

    // Make the API call to post the form data
    this.http.put(`http://localhost:8080/devices/update-device/${this.card.imei}`, formData)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          this.router.navigate(['/dashboard/devices']);
          window.location.reload();
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  ngOnInit(): void {
    this.card = history.state.card;
    this.dname = String(this.card?.device);
    this.imei = String(this.card?.imei);
    this.dnumber = String(this.card?.number);
    //
    // Assign the values to the new properties
  this.submittedDname = this.dname;
  this.submittedImei = this.imei;
  this.submittedDnumber = this.dnumber;
}

  

  conf1() {
    this.conf1_check = false;
    this.conf1working = "Not Working";
    this.confA = 0;
    this.confA_interval = setInterval(() => {
      this.confA++;
      console.log(this.confA);
      if (this.confA >= 100) {
        clearInterval(this.confA_interval);
        this.conf1_check = true;
        this.conf1working = "Working";
      }
    }, 50);
  }
  
  conf2() {
    this.conf2_check = false;
    this.conf2working = "Not Working";
    this.confB = 0;
    this.confB_interval = setInterval(() => {
      this.confB++;
      console.log(this.confB);
      if (this.confB >= 100) {
        clearInterval(this.confB_interval);
        this.conf2_check = true;
        this.pass_variable = "PASSED";
        this.conf2working = "Working";
      }
    }, 50);
  }
  
  conf3() {
    this.conf3working = "Not Working";
    this.conf3_check = false;
    this.confC = 0;
    this.confC_interval = setInterval(() => {
      this.confC++;
      console.log(this.conf3);
      if (this.confC >= 100) {
        clearInterval(this.confC_interval);
        this.conf3_check = true;
        this.isAutomationSuccessful = true;
        this.conf3working = "Working";
      }
    }, 50);
  }
  
  conf4() {
    this.conf4_check = false;
    this.conf4working = "Not Working";
    this.confD = 0;
    this.confD_interval = setInterval(() => {
      this.confD++;
      console.log(this.confD);
      if (this.confD >= 100) {
        clearInterval(this.confD_interval);
        this.conf4_check = true;
        this.isAutomationSuccessful = true;
        this.conf4working = "Working";
      }
    }, 50);
  }
  
  conf5() {
    this.conf5_check = false;
    this.conf5working = "Not Working";
    this.confE = 0;
    this.confE_interval = setInterval(() => {
      this.confE++;
      console.log(this.confE);
      if (this.confE >= 100) {
        clearInterval(this.confE_interval);
        this.conf5_check = true;
        this.isAutomationSuccessful = true;
        this.conf5working = "Working";
      }
    }, 50);
  }
  
  conf6() {
    this.conf6_check = false;
    this.conf6working = "Not Working";
    this.confF = 0;
    this.confF_interval = setInterval(() => {
      this.confF++;
      console.log(this.confF);
      if (this.confF >= 80) {
        clearInterval(this.confF_interval);
        this.conf6working = "Not Working";
      }
    }, 50);
  }
  
  conf7() {
    this.conf7_check = false;
    this.conf7working = "Not Working";
    this.confG = 0;
    this.confG_interval = setInterval(() => {
      this.confG++;
      console.log(this.confG);
      if (this.confG >= 100) {
        clearInterval(this.confG_interval);
        this.conf7_check = true;
        this.conf7working = "Working";
      }
    }, 50);
  }
  
  conf8() {
    this.conf8_check = false;
    this.conf8working = "Not Working";
    this.confH = 0;
    this.confH_interval = setInterval(() => {
      this.confH++;
      console.log(this.confH);
      if (this.confH >= 100) {
        clearInterval(this.confH_interval);
        this.conf8_check = true;
        this.conf8working = "Working";
      }
    }, 50);
  }
  

  //checkbox


  


  addFaultyLights()
  {
    this.faulty_lights++;
  }
  removeFaultyLights()
  {
    this.faulty_lights--;
  }

  addFaultySpeaker()
  {
    this.faulty_speaker++;
  }
  removeFaultySpeaker()
  {
    this.faulty_speaker--;
  }

  addFaultyantenna()
  {
    this.faulty_antenna++;
  }
  removeFaultyantenna()
  {
    this.faulty_antenna--;
  }

  testautomate()
  {
    this.conf1();
    this.conf2();
    this.conf3();
    this.conf4();
    this.conf5();
    this.conf6();
    this.conf7();
    this.conf8();
    
  }

  lightSelectedValue(){
    console.log("Lights: "+this.lights_radio);
    if(this.lights_radio=="1")
    {
      this.lights_working=true;
      this.lights_condition="Working";
    }
    else if(this.lights_radio=="2")
    {
      this.lights_working=false;
      this.lights_condition="Not Working";
    }
    
  }

  speakerSelectedValue(){
    console.log("SPeaker: "+this.speaker_radio);
    if(this.speaker_radio=="1")
    {
      this.speaker_working=true;
      this.speaker_condition="Working";
    }
    else if(this.speaker_radio=="2")
    {
      this.speaker_working=false;
      this.speaker_condition="Not Working";
    }
  }
  
  antennaSelectedValue(){
    console.log("Antenna: "+this.antenna_radio);
    if(this.antenna_radio=="1")
    {
      this.antenna_working=true;
      this.antenna_condition="Working";
    }
    else if(this.antenna_radio=="2")
    {
      this.antenna_working=false;
      this.antenna_condition="Not Working";
    }
  }

   
  submitTest() {
    console.log('submitTest() called');
    const currtime = this.getCurrentDateTime();
    
    const testData = {
  "device": this.dname,
  "imei": this.imei,
  "number": this.dnumber,
  "light": this.lights_condition,
  "speaker": this.speaker_condition,
  "antenna": this.antenna_condition,
  "time": currtime,
  "configuration1": this.conf1working,
  "configuration2": this.conf2working,
  "configuration3": this.conf3working,
  "configuration4": this.conf4working,
  "configuration5": this.conf5working,
  "configuration6": this.conf6working,
  "configuration7": this.conf7working,
  "configuration8": this.conf8working,
  "lightreview":this.light_review,
  "speakerreview":this.speaker_review,
  "antennareview":this.antenna_review
  };
  console.log("Test Data: \n", testData);
  this.http.post('http://localhost:8080/report/submit',testData)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          //this.router.navigate(['/dashboard/devices']);
          
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
      this.collapseB=!this.collapseB;
      this.toastshow=!this.toastshow;

      //
      
}
  
  
  
  
  
  

  getCurrentDateTime(): string {
    const currentDateTime = new Date().toLocaleString();
    return currentDateTime;
  }
  
  reportGenerate()
  {
    
    this.CurrentCard = this.card;
    const queryParams = { card: JSON.stringify(this.CurrentCard) };
  const url = this.router.createUrlTree(['/report'], { queryParams }).toString();
  window.open(url, '_blank');
  }

  openNewTab()
    {
      
    }


   approvedDevices()
   {
    const currrenttime = this.getCurrentDateTime();
    const approveddevices = {
      "device": this.dname,
      "imei": this.imei,
      "number": this.dnumber,
      "light": this.lights_condition,
      "speaker": this.speaker_condition,
      "antenna": this.antenna_condition,
      "time": currrenttime,
      "configuration1": this.conf1working,
      "configuration2": this.conf2working,
      "configuration3": this.conf3working,
      "configuration4": this.conf4working,
      "configuration5": this.conf5working,
      "configuration6": this.conf6working,
      "configuration7": this.conf7working,
      "configuration8": this.conf8working,
      "lightreview":this.light_review,
      "speakerreview":this.speaker_review,
      "antennareview":this.antenna_review

      //post data to approved data 
       

      };

      this.http.post('http://localhost:8080/approved-devices/add',approveddevices)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          this.router.navigate(['/dashboard/devices']);
          
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
        
      this.deleteDevicefrommaintaned();
   }


   //move to mainenance list

   maintenanceDevices()
   {
    const currrenttime = this.getCurrentDateTime();
    const maintenance = {
      "device": this.dname,
      "imei": this.imei,
      "number": this.dnumber,
      "light": this.lights_condition,
      "speaker": this.speaker_condition,
      "antenna": this.antenna_condition,
      "time": currrenttime,
      "configuration1": this.conf1working,
      "configuration2": this.conf2working,
      "configuration3": this.conf3working,
      "configuration4": this.conf4working,
      "configuration5": this.conf5working,
      "configuration6": this.conf6working,
      "configuration7": this.conf7working,
      "configuration8": this.conf8working,
      "lightreview":this.light_review,
      "speakerreview":this.speaker_review,
      "antennareview":this.antenna_review

      //post data to approved data 
       

      };

      this.http.post('http://localhost:8080/maintenance-list/move',maintenance)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          this.router.navigate(['/dashboard/devices']);
          
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
      this.deleteDevice();
      this.deleteDevicefromapproved();

   }
   
   // delete the devies from the list


   deleteDevice() {
    this.http.delete(`http://localhost:8080/devices/delete-device/${this.card.imei}`)
    .subscribe(
      () => {
        console.log('Device deleted successfully');
        this.router.navigate(['/dashboard/devices']);
        window.location.reload();
      },
      (error) => {
        console.log('Error deleting device: ', error);
      }
    );
  }


  deleteDevicefrommaintaned() {
    this.http.delete(`http://localhost:8080/maintenance-list/delete-device/${this.card.imei}`)
    .subscribe(
      () => {
        console.log('Device deleted successfully');
        this.router.navigate(['/dashboard/devices']);
        window.location.reload();
      },
      (error) => {
        console.log('Error deleting device: ', error);
      }
    );
  }
  
  deleteDevicefromapproved() {
    this.http.delete(`http://localhost:8080/approved-devices/delete-device/${this.card.imei}`)
    .subscribe(
      () => {
        console.log('Device deleted successfully');
        this.router.navigate(['/dashboard/devices']);
        window.location.reload();
      },
      (error) => {
        console.log('Error deleting device: ', error);
      }
    );
  }




}
function collapsePanel() {
  throw new Error('Function not implemented.');
}

