import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [],
  declarations: [ProfileComponent, LoginComponent],
})
export class UserModule { }

