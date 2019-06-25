import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event-service.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared';

@Component({
  selector: 'event-details',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px;}
  .event-image {height: 100px;}
  a {cursor: pointer; }
  `],
  templateUrl: './event-details.component.html'

})
export class EventDetailsComponent implements OnInit {
  public constructor(private eventService: EventService, private route: ActivatedRoute) {}
  event: IEvent;
  addMode: boolean;
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAddSession() {
    this.addMode = false;
  }
}
