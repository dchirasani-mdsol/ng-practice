import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {EventService} from '../shared/event-service.service';
import {Injectable} from '@angular/core';

@Injectable()
export class EventRouteActivator implements CanActivate {
  public constructor(private event: EventService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.event.getEvent(+route.params['id']);
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
