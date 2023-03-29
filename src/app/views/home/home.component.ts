import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private router: Router, private cookieService: CookieService) { }
  ngOnInit() {
    const tokenValue = this.cookieService.get('token');
    const authLogin = localStorage.getItem("authLogin")

    if (!tokenValue) {
      this.router.navigate(["/"])
    }
    if (authLogin !== tokenValue) {
      localStorage.removeItem("authLogin")
      this.cookieService.delete("token")
      this.router.navigate(["/"])

    }
  }

}
