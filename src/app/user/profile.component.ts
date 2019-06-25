import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :-ms-input-placeholder { color: #999;}
  `],
})
export class ProfileComponent implements  OnInit {
  constructor(private auth: AuthService, private router: Router) { }
  profileForm: FormGroup;

  ngOnInit(): void {
    const firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    const lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveData() {
    if (this.profileForm.valid) {
      this.auth.updateUser(this.profileForm.controls.firstName.value, this.profileForm.controls.lastName.value);
      this.router.navigate(['/events']);
    }
  }
  cancel() {
    this.router.navigate(['/events']);

  }

  validateField(formControl: FormControl): boolean {
    if ( formControl.invalid && formControl.touched ) {
      return true;
    } else {
      return false;
    }
  }



}
