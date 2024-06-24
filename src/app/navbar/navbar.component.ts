// src/app/navbar/navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  theme = true; // true for dark theme, false for light theme
  isCollapsed = false;
  isMaximized = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMaximize(): void {
    this.isMaximized = !this.isMaximized;
  }

  logout(): void {
    // Implement your logout logic here
    console.log('Logout clicked');
    // Example: Redirect to login page
    // this.router.navigate(['/login']); // Ensure Router is imported
  }
}