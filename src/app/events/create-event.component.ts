import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService, IEvent} from './shared';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styles: [`
    em {color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :-ms-input-placeholder { color: #999;}
  `],
})
export class CreateEventComponent {
  newEvent: IEvent;
  isDirty: boolean = true;
  public constructor(private router: Router, private eventService: EventService) { }
  performCancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(event: IEvent ) {
    console.log(event);
    this.eventService.saveEvent(event);
    this.router.navigate(['/events']);
  }
}
