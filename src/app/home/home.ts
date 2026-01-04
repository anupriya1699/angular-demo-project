import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTable } from '../user-table/user-table';
@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, UserTable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
