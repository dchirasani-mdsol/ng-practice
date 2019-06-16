import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseOverLogin: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    if ( this.authService.isAuthenticated() ) {
      this.router.navigate(['/events']);
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
