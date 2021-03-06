import {Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {LoginComponent} from './login.component';
import {ProfileRouteActivator} from './profile-route-activator.service';

export const userRoutes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [ProfileRouteActivator]},
  {path: 'login', component: LoginComponent},
];
