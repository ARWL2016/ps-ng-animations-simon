import { Component, trigger, state, style, animate, transition, keyframes } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<button [@myTrigger]='state'>My Button</button>`,
  styles: [],
  animations: [
    trigger('myTrigger', [

    ])

  ]
})
export class AppComponent  {
  state: string = 'small';
}
