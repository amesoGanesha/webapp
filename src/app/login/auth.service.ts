// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roles = {
    'admin@gmail.com': 'admin',
    'Test@gmail.com': 'user'
  };

  constructor() { }

  authenticate(login: string, password: string): boolean {
    const isAuthenticated = (login === 'Test@gmail.com' && password === 'Test@123') ||
                            (login === 'admin@gmail.com' && password === 'admin');

    if (isAuthenticated) {
      sessionStorage.setItem('authenticated', 'true');
      sessionStorage.setItem('user', login);
      sessionStorage.setItem('role', this.roles[login]);
    }

    return isAuthenticated;
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('authenticated') === 'true';
  }

  getUser(): string | null {
    return sessionStorage.getItem('user');
  }

  getUserRole(): string | null {
    return sessionStorage.getItem('role');
  }
}
