import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AmesoTextile';
  isAuthenticated = false;
  user: string | null = null;
  userRole: string | null = null;
  intervalId: any;
  theme = true; // true for dark theme, false for light theme
  isCollapsed = false;
  isMaximized = false; 
  showLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.updateAuthStatus();
    this.intervalId = setInterval(() => {
      this.updateAuthStatus();
    }, 1000); // Adjust the interval as needed
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateAuthStatus() {
    const wasAuthenticated = this.isAuthenticated;
    this.isAuthenticated = this.authService.isAuthenticated();
    this.user = this.authService.getUser();
    this.userRole = this.authService.getUserRole();

    if (this.isAuthenticated && !wasAuthenticated) {
      this.showLoading = true;
      if (this.userRole === 'admin') {
        this.router.navigate(['/App/ameso-tag-status']); 
      } else {
        this.router.navigate(['/App/report']);
      }
      setTimeout(() => {
        this.showLoading = false;
      }, 1000); // Show loading for 1 second
    }
  }

  onLogout() {
    sessionStorage.clear();
    this.updateAuthStatus();
    this.router.navigate(['/']);
    console.log('User is logged out');
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMaximize(): void {
    this.isMaximized = !this.isMaximized;
  }

  logout(): void {
    console.log('Logout clicked');
  }
}
