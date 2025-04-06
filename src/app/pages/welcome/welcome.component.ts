import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  username: string = '';

  constructor(private router: Router, private auth:AuthService) {}

  ngOnInit(): void {
    // Get username from local storage (or auth service)
    const user = localStorage.getItem('username');
    this.username = user ? user : 'Guest';
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  apiCall():void{

    this.auth.welcome().subscribe({
      next: (res:any) => {
        console.log('Signup success', res.message);
        alert(res.message);
      },
      error: (res) => {
        console.log('Signup failed', res);
        alert('Api Call failed');
      }
    });
  }
}
