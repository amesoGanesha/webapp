import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(login: string, password: string): boolean {
    // Check for the specific login and password
    return login === 'Test@gmail.com' && password === 'Test@123';
  }
}
