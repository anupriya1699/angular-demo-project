import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {
  constructor(private dialogRef: MatDialogRef<Message>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data, 'data');
  }

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
