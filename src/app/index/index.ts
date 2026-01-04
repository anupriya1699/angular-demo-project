import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { RouterOutlet } from '@angular/router';
import { User } from '../service/user/user';
@Component({
  selector: 'app-index',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  constructor(public userService: User) {
    this.userService.userData.set(
      localStorage.getItem('user_token') ? JSON.parse(localStorage.getItem('user_token')!) : null
    );
  }
}
