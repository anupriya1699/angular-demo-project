import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';

import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../service/user/user';
import { CssService } from '../service/css/css-service';
@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  userRegisterForm!: FormGroup;
  userFormError = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: User,
    public cssService: CssService
  ) {
    this.userRegisterForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
      ]),
      mobile: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
    });

    this.userRegisterForm
      .get('age')
      ?.valueChanges.pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((value) => {});
  }

  register() {
    if (this.userRegisterForm.invalid) {
      this.userFormError = true;
      return;
    }
    this.userFormError = false;
    localStorage.setItem('user_token', JSON.stringify(this.userRegisterForm.value));

    this.userService.userData.set(this.userRegisterForm.value);
    this.router.navigate(['/']);
  }

  reset() {
    this.userRegisterForm.reset();
    this.userFormError = false;
  }
}
