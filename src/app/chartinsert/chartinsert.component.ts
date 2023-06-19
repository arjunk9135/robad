import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chartinsert',
  templateUrl: './chartinsert.component.html',
  styleUrls: ['./chartinsert.component.scss']
})
export class ChartinsertComponent {

  constructor(private http: HttpClient) { }

  onInsert() {
    const id = (<HTMLInputElement>document.getElementById("id")).value;
    const sun = (<HTMLInputElement>document.getElementById("sun")).value;
    const mon = (<HTMLInputElement>document.getElementById("mon")).value;
    const tue = (<HTMLInputElement>document.getElementById("tue")).value;
    const wed = (<HTMLInputElement>document.getElementById("wed")).value;
    const thu = (<HTMLInputElement>document.getElementById("thu")).value;
    const fri = (<HTMLInputElement>document.getElementById("fri")).value;
    const sat = (<HTMLInputElement>document.getElementById("sat")).value;
    
  
    //const formData = new FormData();
    const data = {
      "id": id,
      "sun": sun,
      "mon": mon,
      "tue": tue,
      "wed": wed,
      "thu": thu,
      "fri": fri,
      "sat": sat
    };
  
    console.log('data Data: ', data);
    console.log('data Data: ', data);
    console.log('data Data: ', data);
    console.log('data Data: ', data);
    console.log('data Data: ', data);
  
    this.http.post('http://192.168.1.3:8080/charts/add', data)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          window.location.reload();
        },
        (error) => {
          console.log('Error: ', error);
          window.location.reload();
        }
      );
  
  }

  //update
  onUpdate() {
    const id = (<HTMLInputElement>document.getElementById("id")).value;
    const sun = (<HTMLInputElement>document.getElementById("sun")).value;
    const mon = (<HTMLInputElement>document.getElementById("mon")).value;
    const tue = (<HTMLInputElement>document.getElementById("tue")).value;
    const wed = (<HTMLInputElement>document.getElementById("wed")).value;
    const thu = (<HTMLInputElement>document.getElementById("thu")).value;
    const fri = (<HTMLInputElement>document.getElementById("fri")).value;
    const sat = (<HTMLInputElement>document.getElementById("sat")).value;
      
    const data = {
      "id": id,
      "sun": sun,
      "mon": mon,
      "tue": tue,
      "wed": wed,
      "thu": thu,
      "fri": fri,
      "sat": sat
    };
  
    this.http.put(`http://localhost:8080/charts/update/${id}`, data)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          window.location.reload();
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

  onDelete() {
    const id = (<HTMLInputElement>document.getElementById("id")).value;
  
    this.http.delete(`http://localhost:8080/charts/delete/${id}`)
      .subscribe(
        (response) => {
          console.log('Response: ', response);
          window.location.reload();
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
      console.log('deleted');
  }
  
  
  

}
