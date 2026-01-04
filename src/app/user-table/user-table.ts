import { Component, effect, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserForm } from '../shared/user-form/user-form';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../service/user/user';
import { StoreForm } from '../shared/store-form/store-form';
import { Message } from '../shared/message/message';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-user-table',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
})
export class UserTable {
  usersData = signal<any[]>([]);
  panelOpenState = signal(false);
  openedUserId = signal<number | null>(null);
  userStoreDetails = signal<any[]>([]);
  constructor(private dialog: MatDialog, private userService: User) {
    effect(
      () => {
        if (this.openedUserId()) {
          this.getUserStoreList();
        }
      },
      { allowSignalWrites: true }
    );
  }

  openUserForm(user?: any) {
    const dialogRef = this.dialog.open(UserForm, {
      width: '500px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((value: any) => {
      if (value) {
        this.getUsersData();
      }
    });
  }

  getUsersData() {
    this.userService.getUsersList().subscribe((users: any) => {
      this.usersData.set(users);
    });
  }

  ngOnInit() {
    this.getUsersData();
  }

  editUser(user: any) {
    this.openUserForm(user);
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(Message, {
      width: '500px',
      data: {
        message: 'Are you sure you want to delete this user?',
        purpose: 'delete',
      },
    });

    dialogRef.afterClosed().subscribe((value: any) => {
      if (value) {
        this.userService.deleteUser(id).subscribe((users: any) => {
          this.usersData.set(users);
        });
        this.getUsersData();
      }
    });
  }

  openStoreForm(user?: any) {
    const dialogRef = this.dialog.open(StoreForm, {
      width: '700px',
      data: user,
    });
  }

  onPanelOpened(userId: number) {
    this.panelOpenState.set(true);
    this.openedUserId.set(userId);
  }

  onPanelClosed() {
    this.panelOpenState.set(false);
    this.openedUserId.set(null);
  }

  getUserStoreList() {
    this.userService.getUserStoreList().subscribe((userStore: any) => {
      if (userStore && Array.isArray(userStore)) {
        // Loop through each object in the array
        userStore.forEach((storeObj: any) => {
          // Check if the object has a key that matches data.id
          const dataIdString = String(this.openedUserId());

          if (storeObj.hasOwnProperty(dataIdString)) {
            const storeDetails = storeObj[dataIdString];
            this.userStoreDetails.set(storeDetails);
          } else {
            this.userStoreDetails.set([]);
          }
        });
      }
    });
  }
}
