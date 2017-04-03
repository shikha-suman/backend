import { Component } from '@angular/core';
import { MychildComponent } from './Mychild.component';
@Component({
  selector: 'myparent-app',
  template: `<h1>this is my parent component</h1>
            <p>Enter the parent value</p>
            <input type="text" #ptext (keyup)="0">
            <p> value came from child component {{childData}}</p>
            <mychild-app (childEvent)="childData=$event" [parentData] = "ptext.value"></mychild-app>
            `
        
})
export class MyparentComponent  {
    public childData:string;
}