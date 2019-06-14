import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event-service.service';
import {ToastrService} from './common/toastr-service.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './error/404.component';
import {EventRouteActivator} from './events/event-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if ( component.isDirty === true ) {
    return window.confirm('The data is not saved yet!! Do you still want to discard the changes?');
  }
  return false;
}

