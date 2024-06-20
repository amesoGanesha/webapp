import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmesoTextile';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  login() {
    this.authService.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
