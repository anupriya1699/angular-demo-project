import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgClass } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../service/user/user';
import { Message } from '../message/message';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, NgClass, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  userForm!: FormGroup;
  userFormError = false;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserForm>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: User
  ) {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
      ]),
      phone: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
    });

    if (this.data?.id) {
      this.userForm.patchValue({
        name: this.data.name,
        email: this.data.email,
        phone: this.data.phone,
        userType: this.data.userType,
      });
      // this.userForm.get('name')?.setValue(this.data.name);
    }
  }

  submitForm() {
    if (this.userForm.invalid) {
      this.userFormError = true;
      return;
    }
    this.userFormError = false;

    if (this.data?.id) {
      let formDataWithId = {
        ...this.userForm.value,
        id: this.data.id,
      };
      this.userService.editUser(formDataWithId).subscribe((users: any) => {});
    } else {
      // Generate unique ID for the new entry
      let uniqueId = 1;
      if (localStorage.getItem('user-data-array')) {
        const userDataArray = JSON.parse(localStorage.getItem('user-data-array')!);
        if (userDataArray.length > 0) {
          // Find the maximum ID from existing entries and increment
          const maxId = Math.max(...userDataArray.map((user: any) => user.id || 0));
          uniqueId = maxId + 1;
        }
      }

      // Add the unique ID to the form data
      const formDataWithId = {
        ...this.userForm.value,
        id: uniqueId,
      };

      /*       if (localStorage.getItem('user-data-array')) {
        const userDataArray = JSON.parse(localStorage.getItem('user-data-array')!);
        userDataArray.push(formDataWithId);
        localStorage.setItem('user-data-array', JSON.stringify(userDataArray));
      } else {
        const userDataArray = [formDataWithId];
        localStorage.setItem('user-data-array', JSON.stringify(userDataArray));
      } */

      this.userService.createUser(formDataWithId).subscribe((users: any) => {
        const dialogRef = this.dialog.open(Message, {
          width: '500px',
          data: {
            message: 'User created successfully',
            purpose: 'success',
          },
        });
        dialogRef.afterClosed().subscribe((value: any) => {
          if (value) {
            this.dialogRef.close(true);
          }
        });
      });
    }
  }

  closeForm() {
    this.dialogRef.close(false);
  }
}
