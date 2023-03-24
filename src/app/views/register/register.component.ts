import { Component } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName!: string
  lastName!: string
  email!: string
  password!: string
  displayName!: string

  constructor(private registerService: RegisterService, private router: Router, private cookieService: CookieService) { }

  handleRegister() {
    this.registerService.register(this.firstName, this.lastName, this.email, this.password, this.displayName).subscribe(
      (response: any) => {
        console.log(response);
        switch (response.status.code) {
          case 200:
            this.cookieService.set('authVerify', "verify");
            alert("verify your email");

            this.router.navigate(['/verify/checkemail']);
            break;

          default:
            break;
        }

      },
      (error: any) => {
        console.log(error);
        switch (error.status) {
          case 400:
            alert("error " + error.error.result.message.details[0].message)
            break;


          case 410:
            alert("error " + error.error.result.message)
            break
          default:
            break;
        }
      }
    )
  }

}
