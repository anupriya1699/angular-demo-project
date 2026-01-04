import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgClass } from '@angular/common';
import { User } from '../../service/user/user';

@Component({
  selector: 'app-store-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './store-form.html',
  styleUrl: './store-form.css',
})
export class StoreForm {
  storeForm!: FormGroup;
  storeFormError = false;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StoreForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: User
  ) {
    this.storeForm = this.fb.group({
      storeDetail: this.fb.array([]),
    });
  }
  ngOnInit() {
    this.addStoreDataForm();
    this.userService.getUserStoreList().subscribe((userStore: any) => {
      console.log(userStore);
      if (userStore && Array.isArray(userStore)) {
        // Loop through each object in the array
        userStore.forEach((storeObj: any) => {
          // Check if the object has a key that matches data.id
          const dataIdString = String(this.data?.id);
          console.log(storeObj.hasOwnProperty(dataIdString), 'storeObj', dataIdString);

          if (storeObj.hasOwnProperty(dataIdString)) {
            const storeDetails = storeObj[dataIdString];
            // Clear existing form array controls
            while (this.storeDetailGet.length !== 0) {
              this.storeDetailGet.removeAt(0);
            }
            // Add form controls for each store detail
            storeDetails.forEach((store: any) => {
              const storeFormGroup = this.getStoreDataForm();
              storeFormGroup.patchValue(store);
              this.storeDetailGet.push(storeFormGroup);
            });
          }
        });
      }
    });
  }

  getStoreDataForm() {
    const storeDetail = this.fb.group({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
    return storeDetail;
  }

  get storeDetailGet() {
    return this.storeForm.get('storeDetail') as FormArray;
  }

  addStoreDataForm() {
    this.storeDetailGet.push(this.getStoreDataForm());
  }

  deleteStoreDataForm(index: number) {
    this.storeDetailGet.removeAt(index);
  }

  isLastIndex(index: number): boolean {
    const controls = this.storeDetailGet?.controls;
    if (!controls || controls.length === 0) {
      return false;
    }
    return controls.length - 1 === index;
  }

  isFirstIndex() {
    const controls = this.storeDetailGet?.controls;
    if (!controls || controls.length === 1) {
      return true;
    }
    return false;
  }

  closeForm() {
    this.dialogRef.close(false);
  }

  submitForm() {
    if (this.storeForm.invalid) {
      this.storeFormError = true;
      return;
    }
    this.storeFormError = false;
    if (this.data?.id) {
      // Loop through storeDetailGet and set unique IDs
      this.storeDetailGet?.controls.forEach((control, index) => {
        // Generate unique ID using sequential numbers (1, 2, 3, etc.)
        const uniqueId = index + 1;
        control.get('id')?.setValue(uniqueId);
      });

      let userStoreMap = new Map();

      userStoreMap.set(this.data.id, this.storeDetailGet?.value);
      this.userService.createUserStore(userStoreMap).subscribe((userStore: any) => {
        console.log(userStore);
      });
      this.dialogRef.close(true);
    }
  }
}
