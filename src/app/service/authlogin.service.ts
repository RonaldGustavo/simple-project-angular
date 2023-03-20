import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLogin {
  private apiUrl = `https://api.kepe.pet/api/v1/user/login`;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer STORMZ`
      })
    };

    const body = {
      email: email,
      password: password
    };

    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }
}
