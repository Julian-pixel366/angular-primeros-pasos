import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'app-counter',
    template: `
    <h2>la pelota siempre al {{counter}} </h2>
<button (click)="increaseBY(1)" >+1</button>
<button (click)="reset()" >reset</button>
<button (click)="increaseBY(-1)" >-1</button>

    
`    
    
})

export class CounterComponent {
    public  title: string = 'Mi primera app de angular ';

    public counter:number =10;
   
    increaseBY(value:number ):void {
   
     this.counter += value;
   
    };
   
    reset (){
     this.counter = 10
    }
   

   
}