import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div class="well hoverwell thumbnail" [routerLink]="['/events',eventInput.id]">
    <h2>{{eventInput?.name}}</h2>
    <div> Date: {{eventInput?.date}}</div>
    <div [ngSwitch]="eventInput?.time">
      <div>
        Time: {{eventInput?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
    </div>
    <div>Price: \${{eventInput.price}}</div>
    <div [hidden]="!eventInput?.location"><!-- Adding safe navigation in case if eventInput turns out to be null -->
      <span>Location : {{eventInput?.location?.address}}</span>
      <span class="pad-left"></span>
      <span>{{eventInput?.location?.city}},&nbsp;{{eventInput?.location?.country}}</span>
   </div>
  <div [hidden]="!eventInput?.onlineUrl">
    <span>OnlineURL : {{eventInput?.onlineUrl}}</span>
  </div>
   <!-- <button class="btn btn-primary" (click)="handleClickMe()" >Click Me!</button>-->
  </div>`,
  styles: [`
    .thumbnail {min-height: 210px;}
    .well div {color: #bbb;}
    .pad-left {margin-left: 10px;}
  `]
})
export class EventThumbnailComponent {
 @Input() eventInput: any;
 // @Output() eventClick = new EventEmitter();
 /*handleClickMe() {
   console.log('clicked!');
   this.eventClick.emit(this.eventInput.name);
 }*/

 logFoo() {
   console.log('logFoo');
 }
}
