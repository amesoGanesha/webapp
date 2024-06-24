import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(login: string, password: string): boolean {
    // Check for the specific login and password
    const isAuthenticated = login === 'Test@gmail.com' && password === 'Test@123';
    
    if (isAuthenticated) {
      // Set value in session storage
      sessionStorage.setItem('authenticated', 'true');
      sessionStorage.setItem('user', login);
    }
    
    return isAuthenticated;
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('authenticated') === 'true';
  }

  getUser(): string | null {
    return sessionStorage.getItem('user');
  }
}
