import { Component, trigger, state, style, transition, animate, keyframes, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <button (click)="toggleState()" [@removeMe]='btnState'>My Button</button>
    <ul> 
      <li *ngFor="let item of items" [@myTrigger]='state' (@myTrigger.start)="animStart($event)" (@myTrigger.done)="animDone($event)">{{ item }}</li>
    </ul>
    {{ animDetails }}
    `,
    styles: [`
    ul { list-style-type: none; margin: 30px 30px 0 0; padding: 0; }
    li {
      padding: 15px; 
      background: #f1f1f1; 
      width: 100%; 
      margin-bottom: 2px; 
      font-weight: bold; 
    }
    `],
    animations: [
        trigger('myTrigger', [ 
            state('fadeIn', style({
              opacity: '1', 
              transform: 'scale(1.2)'
            })),
            transition('void => fadeIn', [
              animate(500, keyframes([
                style({opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
                style({opacity: 1, transform: 'translateY(5px) scale(1.2)', offset: 0.3 }),
                style({opacity: 1, transform: 'translateY(0px) scale(1.2)', offset: 1 })
              ]))
            ])
        ]), 
        trigger('removeMe', [
          state('out', style({
            transform: 'scale(1)', 
            opacity: 0
          })), 
          transition('* => out', [
            animate('500ms 0s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(-8px)', offset: 0}), 
              style({opacity: 1, transform: 'translateY(0px)', offset: 0.3}), 
              style({opacity: 0, transform: 'translateY(50px)', offset: 1}), 
            ]))
          ])
        ])

    ]
})
export class AppComponent { 
    state: string = 'fadeIn';
    items = new Array(); 
    animDetails: string = 'Waiting'; 
    btnState: string;  


    constructor(private cdRef: ChangeDetectorRef){}

    toggleState() {
      // this.state = this.state === 'large' ? 'small' : 'large'; 
      this.btnState = 'out'; 
      this.items.push('another item'); 
      // this.state = 'fadeIn'; 
    }
    animStart(event:any) {
      console.log(event); 
    }

    animDone(event:any) {
      this.animDetails = `It took me a total time of ${event.totalTime}ms to complete`; 
      this.cdRef.detectChanges(); 
    }
}


