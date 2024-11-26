import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginRequest } from '../../Models/Login-Request.Model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const loginRequest: LoginRequest = { username: this.username, password: this.password };

    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        this.authService.storeUserData(response);
        this.router.navigate(['/dashboard']); // Redirect to dashboard after successful login
      },
      error: () => {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    });
  }
}
