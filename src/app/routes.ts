import {Routes} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver, CreateSessionComponent
} from './events/index';
import {Error404Component} from './error/404.component';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  {path: 'events/session/new', component: CreateSessionComponent, canDeactivate: ['canDeactivateCreateEvent']},

  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]
