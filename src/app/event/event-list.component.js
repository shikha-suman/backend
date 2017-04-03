"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var EventListComponent = (function () {
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
    function EventListComponent(_router) {
        this._router = _router;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "node" },
            { "id": 3, "name": "Mongo" },
            { "id": 4, "name": "Ruby" },
            { "id": 5, "name": "Bootstrap" },
            { "id": 6, "name": "python" }
        ];
    }
    EventListComponent.prototype.onSelect = function (department) {
        this._router.navigate(['/department', department.id]);
    };
    EventListComponent = __decorate([
        core_1.Component({
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
            template: "<h1>hello from me</h1>\n                 <ul (click)=\"onSelect(department)\" *ngFor=\"let department of departments\">\n                       <li>{{department.id}}</li>\n               </ul>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map