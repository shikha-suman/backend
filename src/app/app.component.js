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
var employee_service_1 = require('./event/employee.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //  templateUrl: `app/app.component.html`,
            //   styles:[`input.ng-invalid{border-left:5px solid red;}
            //           input.ng-valid{border-left:5px solid green;}
            //           input.ng-untouched{border-left:5px solid blue;}
            //           #age.ng-untouched{border-left:5px solid black;}
            //           `]
            template: "<h1>Random Company list and detail</h1>\n             <employee-detail></employee-detail>",
            // template:`<h1>Random Company list and detail</h1>
            //            <nav>
            //            <a routerLink="/department" RouterLinkActive="active">emp list</a>
            //            <a routerLink="/list" RouterLinkActive="active">event list</a>
            //            </nav>
            //            <router-outlet></router-outlet>`,
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// {{name | uppercase}} 
//               {{name | lowercase}}
//               {{8.576 | number:'1.2-3'}}
//               {{8.576 | number:'3.2-3'}}
//               {{8.576 | currency:'USD':true}}
//               {{date | date:'fullDate'}}
//             <events-list></events-list>
//             <myparent-app></myparent-app> 
//# sourceMappingURL=app.component.js.map