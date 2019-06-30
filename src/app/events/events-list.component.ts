import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  public constructor( private route: ActivatedRoute) { }
  events: any[];
  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => {this.events = events; });
     this.events = this.route.snapshot.data['events']; // 'events' of data in here is the same events that are declared in routes
  }
  handleEventClicked(data) {
    console.log('received: ', data );
  }

}
