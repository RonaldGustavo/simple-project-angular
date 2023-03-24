import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-checkemail',
  templateUrl: './checkemail.component.html',
  styleUrls: ['./checkemail.component.css']
})
export class CheckemailComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) { }
  ngOnInit() {
    const verifyValue = this.cookieService.get("authVerify")
    if (!verifyValue) {
      this.router.navigate(["/"])
    }
  }
}
