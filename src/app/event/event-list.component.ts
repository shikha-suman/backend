import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common/src/directives/ng_switch';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { StyleCompiler } from '@angular/compiler';
import { Component, style } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'events-list',
    // template: `<div><h1>{{ title }}</h1>
    //             <div [class.myClass]="applyClass">Apply class</div>
    //             <div [style.color]="applyBlue?'blue':'green'">Apply class</div>
    //             </div>

            //     <input type="text" #demoInput>
            //     <button (click)= "onClick(demoInput.value)">click me</button>
            //     <input type="text" [(ngModel)]="fname">
            //    <p *ngIf="applyBlue">show</p>
            //    <div [ngSwitch]="color">
            //    <p *ngSwitchCase="'red'">red color in shown</p>
            //    <p *ngSwitchCase="'green'">green color in shown</p>
            //    <p *ngSwitchDefault>default color in shown</p>
            //    </div>
            //    <ul>
            //     <li *ngFor="let color of colors">{{color}}</li>
            //    </ul>
            //    <p [ngClass] = "{classOne:cone,classTwo:ctwo}">hey</p>
            //    <button (click)="toggle()" >show</button>
            //    <p [ngStyle] = "{'font-style':style,'font-size':size}">hey bro</p>
              // `,
    // styles:[`.myClass {background-color:red;}
    //          .classOne{color:white}
    //          .classTwo{background-color:black}`]
    template: `<h1>hello from me</h1>
                 <ul (click)="onSelect(department)" *ngFor="let department of departments">
                       <li>{{department.id}}</li>
               </ul>`
})

export class EventListComponent {
    // public title = "tutorial from jonthon";
    // public applyClass = true;
    // public applyBlue = false;
    // public fname:any;
    // public color ="black";
    // public colors = ["red","green","yellow"];
    // public cone = true;
    // public ctwo = true;
    // public style='italic';
    // public size ='30px';

    // onClick(value:any) {
    //     console.log("hello"+value);
    // }
    // toggle() {
    //     this.cone = !this.cone;
    //     this.ctwo = !this.ctwo;
    // }
    constructor(private _router:Router) {

    }
    departments = [
        {"id": 1, "name":"Angular"},
        {"id": 2, "name":"node"},
        {"id": 3, "name":"Mongo"},
        {"id": 4, "name":"Ruby"},
        {"id": 5, "name":"Bootstrap"},
        {"id": 6, "name":"python"}
    ]

    onSelect(department:any) {
        this._router.navigate(['/department', department.id]);
    }
}