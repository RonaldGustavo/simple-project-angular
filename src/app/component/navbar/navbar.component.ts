import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cookieservice: CookieService, private router: Router) { }

  handleLogout() {
    this.cookieservice.delete("token")
    this.router.navigate(["/"])
    alert("logout success!")

  }
}
