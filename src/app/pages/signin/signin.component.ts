import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    // const user = { email: this.email, password: this.password };
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login success', res);
        this.router.navigate(['/welcome']);
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid credentials');
      }
    });
  }
}
