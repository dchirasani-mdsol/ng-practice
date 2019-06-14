import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <navbar></navbar>
<!--
    <events-list></events-list>
-->
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
