import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oauthcallback',
  template: `<p>Redirecting...</p>`,
})
export class OauthcallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('token', token);
        this.router.navigate(['/welcome'], { replaceUrl: true });
      } else {
        this.router.navigate(['/signin']);
      }
    });
  }
}
