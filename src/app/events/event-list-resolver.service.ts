import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventService} from './shared/event-service.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  public constructor(private eventService: EventService) { }
  resolve() {
  return this.eventService.getEvents().pipe(map(events => events));
  }
}
