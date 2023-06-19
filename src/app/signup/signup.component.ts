import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  phno: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  submitForm() {
    const formData = {
      email: this.email,
      password: this.password,
      phno: this.phno
    };

    this.http.post('http://localhost:8080/user/signup', formData)
      .subscribe(
        response => {
          console.log('Form data submitted successfully');
          this.router.navigate(['/login']);
          // Additional actions on success
        },
        error => {
          console.error('Error submitting form data:', error);
          // Additional error handling
        }
      );
  }
}
