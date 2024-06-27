// src/app/loginpage/loginpage.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private message: NzMessageService
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const { login, password } = this.loginForm.value;

    if (this.authService.authenticate(login, password)) {
      this.message.success('Login successful!');
      setTimeout(() => {
        // Navigate to the dashboard or another page
      }, 0);  // Wait for 2 seconds
    } else {
      this.message.error('Authentication failed. Please check your credentials.');
    }
  }
}
