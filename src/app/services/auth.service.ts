import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; // change as needed

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    return this.http.post<{ token: string }>(`${this.baseUrl}/signin`, { "username": email, password }).pipe(
      tap((res: any) => {
        return localStorage.setItem('token', res.token);
      })
    );
  }

  signup(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/signup`, { "username": email, password });
  }

  welcome() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage['token']}`
    });
    
    const tok = localStorage['token'];
    return this.http.get('http://localhost:8080/api/user/welcome', { headers });
    // return this.http.get(`http://localhost:8080/api/user/welcome`);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
