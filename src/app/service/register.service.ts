import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiURLRegister = `${environment.apiUrl}/api/v1/user/register`
  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, password: string, displayName: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };

    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      displayName: displayName
    }
    return this.http.post<any>(this.apiURLRegister, body, httpOptions)
  }
}
