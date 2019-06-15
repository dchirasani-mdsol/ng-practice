import {Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';

export const userRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'profile', pathMatch: 'full'}
]
