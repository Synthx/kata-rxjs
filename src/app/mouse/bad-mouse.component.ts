import {Component} from "@angular/core";
import {fromEvent, map, throttleTime} from "rxjs";
import { MousePosition } from "../model";

@Component({
  selector: 'app-bad-mouse',
  template: '<div>{{ position | json }}</div><a routerLink="/">Go to product</a>',
})
export class BadMouseComponent {
  position?: MousePosition;

  constructor() {
    fromEvent(document, 'mousemove').pipe(
      map(e => e as MouseEvent),
      throttleTime(300),
    ).subscribe(e => {
      this.position = {x: e.clientX, y: e.clientY};
      console.warn(this.position);
    });
  }
}
