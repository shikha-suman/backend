import { Component, EventEmitter } from '@angular/core';
import { MyparentComponent } from './Myparent.component';
@Component({
  selector: 'mychild-app',
  template: `<h1>this is my child component</h1>
            <p>Enter the child value</p>
            <input type="text" #childtext (keyup)="onChange(childtext.value)">
            <p> value came from parent component{{parentData}}</p>
            `,
            inputs: [`parentData`],
            outputs:[`childEvent`]
})
export class MychildComponent  { 
     public parentData:string;
     childEvent = new EventEmitter<string>();
     onChange(value:string) {
         this.childEvent.emit(value);
     }
}