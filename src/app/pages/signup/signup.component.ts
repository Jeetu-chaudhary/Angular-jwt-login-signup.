import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    // const user = { email: this.email, password: this.password };
    this.auth.signup(this.email, this.password).subscribe({
      next: (res:any) => {
        console.log('Signup success', res);
        alert('Registered successfully!');
        localStorage.setItem("token",res.token);
        this.router.navigate(['/welcome']);
      },
      error: (err) => {
        console.error('Signup failed', err);
        alert('Registration failed');
      }
    });
  }
}
