import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLogin } from 'src/app/service/authlogin.service';
import { CookieService } from 'ngx-cookie-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  token!: string

  constructor(private authService: AuthLogin, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    const tokenValue = this.cookieService.get('token');

    if (tokenValue) {
      this.router.navigate(['/home']);
    }
  }

  handleLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        this.token = response.result.token

        console.log(response.messages)
        switch (response.status.code) {
          case 200:
            alert("Berhasil Login");
            this.cookieService.set('token', this.token);
            this.router.navigate(['/home']);
            break;

          default:
            break;
        }
      },
      (error: any) => {
        switch (error.status) {
          case 400:
            alert("error: " + error.error.result.message[0].message);

            break;
          case 410:
            alert("error: " + error.error.result.message);

            break;

          default:
            break;
        }
      }
    );
  }




}
