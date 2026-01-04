import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  public userData = signal<any>(null);

  getUsersList() {
    const sequence = new Observable((observer) => {
      const userDataArray = JSON.parse(localStorage.getItem('user-data-array')!);
      observer.next(userDataArray);
      observer.complete();
    });
    return sequence;
  }

  createUser(user: any) {
    const sequence = new Observable((observer) => {
      if (localStorage.getItem('user-data-array')) {
        const userDataArray = JSON.parse(localStorage.getItem('user-data-array')!);
        userDataArray.push(user);
        localStorage.setItem('user-data-array', JSON.stringify(userDataArray));
        observer.next(userDataArray);
        observer.complete();
      } else {
        const userDataArray = [user];
        localStorage.setItem('user-data-array', JSON.stringify(userDataArray));
        observer.next(userDataArray);
        observer.complete();
      }
    });
    return sequence;
  }

  editUser(editUserData: any) {
    const sequence = new Observable((observer) => {
      const userDataArray = JSON.parse(localStorage.getItem('user-data-array')!);
      const index = userDataArray.findIndex((user: any) => user.id === editUserData.id);
      userDataArray[index] = editUserData;
      localStorage.setItem('user-data-array', JSON.stringify(userDataArray));
      observer.next(userDataArray);
      observer.complete();
    });
    return sequence;
  }

  deleteUser(id: number) {
    const sequence = new Observable((observer) => {
      const userDataArray = JSON.parse(localStorage.getItem('user-data-array')!);
      const index = userDataArray.findIndex((user: any) => user.id === id);
      userDataArray.splice(index, 1);
      localStorage.setItem('user-data-array', JSON.stringify(userDataArray));
      observer.next(userDataArray);
      observer.complete();
    });
    return sequence;
  }

  createUserStore(userStore: any) {
    const userStoreObject = Object.fromEntries(userStore);
    const sequence = new Observable((observer) => {
      if (localStorage.getItem('user-store-data-array')) {
        const userStoreDataArray = JSON.parse(localStorage.getItem('user-store-data-array')!);
        // Get the key from userStoreObject (e.g., "2", "3")
        const key = Object.keys(userStoreObject)[0];
        // Find index of existing object with the same key
        const existingIndex = userStoreDataArray.findIndex((item: any) => item.hasOwnProperty(key));

        if (existingIndex !== -1) {
          // Replace existing entry
          userStoreDataArray[existingIndex] = userStoreObject;
        } else {
          // Add as new entry
          userStoreDataArray.push(userStoreObject);
        }

        localStorage.setItem('user-store-data-array', JSON.stringify(userStoreDataArray));
        observer.next(userStoreDataArray);
        observer.complete();
      } else {
        const userStoreDataArray = [userStoreObject];
        localStorage.setItem('user-store-data-array', JSON.stringify(userStoreDataArray));
        observer.next(userStoreDataArray);
        observer.complete();
      }
    });
    return sequence;
  }

  getUserStoreList() {
    const sequence = new Observable((observer) => {
      const userStoreDataArray = JSON.parse(localStorage.getItem('user-store-data-array')!);
      observer.next(userStoreDataArray);
      observer.complete();
    });
    return sequence;
  }

  /*   getAllCity(params?: any) {
    const sequence = new Observable((observer) => {
      this.http.get(environment.city_search, { params: params }).subscribe(
        (result: any) => {
          if (result.count && !params) {
            this.cityDataSignal.set(result.results);
          }
          observer.next(result);
          observer.complete();
        },
        (error: any) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
    return sequence;
  } */
}
