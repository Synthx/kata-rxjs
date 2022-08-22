import {Component} from '@angular/core';
import {fromEvent, map, Observable, tap, throttleTime} from "rxjs";
import {MousePosition} from "../model";

@Component({
  selector: 'app-mouse',
  template: '<div>{{ position$ | async | json }}</div><a routerLink="/">Go to product</a>',
})
export class MouseComponent {
  position$: Observable<MousePosition>;

  constructor() {
    this.position$ = fromEvent(document, 'mousemove').pipe(
      map(e => e as MouseEvent),
      throttleTime(300),
      map(e => ({x: e.clientX, y: e.clientY})),
      tap(console.warn), // tap(position => console.warn(position)),
    );
  }
}
