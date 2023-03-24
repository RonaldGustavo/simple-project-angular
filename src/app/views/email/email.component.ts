import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthVerify } from 'src/app/service/authverify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  email: any = this.route.snapshot.queryParamMap.get('email')

  token: any = this.route.snapshot.queryParamMap.get('token')
  constructor(private authVerify: AuthVerify, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.email && !this.token) {
      this.router.navigate(["/"])
    }
  }

  handleVerify() {
    this.authVerify.verify(this.email, this.token).subscribe(
      (response: any) => {
        console.log(response);
        switch (response.status.code) {
          case 200:
            alert("Register Success!");
            this.router.navigate(['/']);
            break;

          case 400:
            alert(response.result.message[0].message);
            this.router.navigate(['/']);
            break;


          case 410:
            alert(response.result.message);
            this.router.navigate(['/']);
            break;

          default:
            alert(response.result.message);
            this.router.navigate(['/']);
            break;
        }
      },
      (error: any) => {
        console.log(error);

      }
    )
  }
}



