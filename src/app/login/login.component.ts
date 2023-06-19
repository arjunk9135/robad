import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  submitForm() {
    // Send a GET request to retrieve the user's password
    this.http.get<any>('http://localhost:8080/user/credentials', { params: { email: this.email } })
      .subscribe(
        response => {
          const user = response;
          if (user && user.password === this.password) {
            // Password matches, proceed with further actions
            console.log('Login successful');
            // Redirect or perform additional actions
            this.router.navigate(['/dashboard']); // Redirect to '/dashboard'
          } else {
            // Password doesn't match
            console.log('Invalid email or password');
            alert('Error');
            // Handle invalid credentials
          }
        },
        error => {
          // Handle any errors that occur during the API call
          console.error('Error retrieving user data:', error);
          // Additional error handling
        }
      );
  }
}
