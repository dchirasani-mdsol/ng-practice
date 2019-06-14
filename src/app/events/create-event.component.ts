import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'create-event',
  template:`
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form]</h3>
      <button class="btn-primary">Submit</button>
      <span>&nbsp;</span>
      <button class="btn-default" (click)="performCancel()">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {
  isDirty: boolean = true;
  public constructor(private router: Router) { }
  performCancel() {
    this.router.navigate(['/events']);
  }
}
