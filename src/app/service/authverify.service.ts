import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthVerify {
  private apiUrl = `${environment.apiUrl}/api/v1/user/verify/`;

  constructor(private http: HttpClient) { }

  verify(email: string, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };

    const body = {
      email: email,
      token: token
    };

    return this.http.post<any>(this.apiUrl, body, httpOptions)

  }
}
