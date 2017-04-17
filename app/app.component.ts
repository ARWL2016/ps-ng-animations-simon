import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <button (click)="toggleState()">My Button</button>
    <ul> 
      <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
    </ul>
    `,
    styles: [],
    animations: [
        trigger('myTrigger', [
            state('small', style({
                transform: 'scale(1)'
            })),
            state('large', style({
                transform: 'scale(2)'
            })), 
            state('fadeIn', style({
              opacity: '1'
            })),
            // transition('small <=> large', animate('500ms ease-in') )
            transition('void => fadeIn', [
              style({opacity: 0, transform: 'translateY(20px)'}), 
              animate('500ms')
            ])

        ])
    ]
})
export class AppComponent { 
    state: string = 'large';
    items: string[] = []; 

    toggleState() {
      // this.state = this.state === 'large' ? 'small' : 'large'; 

      this.items.push('another item'); 
      this.state = 'fadeIn'; 
    }
}


