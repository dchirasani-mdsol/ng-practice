import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'event-details',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px;}
  .event-image {height: 100px;}
  `],
  templateUrl: './event-details.component.html'

})
export class EventDetailsComponent implements OnInit {
  public constructor(private eventService: EventService, private route: ActivatedRoute) {}
  event: any;
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

}
