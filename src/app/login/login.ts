import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { User } from '../service/user/user';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;
  loginError = false;
  invalidEmail = false;
  constructor(private fb: FormBuilder, private router: Router, private userService: User) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
      ]),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginError = true;
      return;
    }
    this.loginError = false;
    if (this.loginForm.value.email !== 'anupriyak529@gmail.com') {
      this.invalidEmail = true;
      return;
    }
    localStorage.setItem('user_token', JSON.stringify(this.loginForm.value));

    this.userService.userData.set(this.loginForm.value);
    this.router.navigate(['/']);
  }
}
