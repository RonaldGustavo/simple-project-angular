import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLogin } from 'src/app/service/authlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthLogin, private router: Router) { }

  handleLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response.messages)
        switch (response.status.code) {
          case 200:
            alert("Berhasil Login");
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
