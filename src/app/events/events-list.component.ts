import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event-service.service';
import {ToastrService} from '../common/toastr-service.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  public constructor(private eventService: EventService, private toastr: ToastrService) { }
  events: any;
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  handleEventClicked(data) {
    console.log('received: ', data );
  }
  toastMessage(message: string) {
    this.toastr.success(message);
  }

}
