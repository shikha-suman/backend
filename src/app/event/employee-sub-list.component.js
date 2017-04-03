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
var EventSubListComponent = (function () {
    function EventSubListComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    // ngOnInit() {
    //   // this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
    //  // this._employeeService.getEmployees();
    //   // console.log(this.employees);
    //   // this._employeeService.getEmployees();
    //   let id = this.route.snapshot.params['id'];
    //   this.depId = id;
    // }
    EventSubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.depId = id;
        });
    };
    EventSubListComponent.prototype.goPrevious = function () {
        var previousid = this.depId - 1;
        this.router.navigate(['/department', previousid]);
    };
    EventSubListComponent.prototype.goNext = function () {
        var nextid = this.depId + 1;
        this.router.navigate(['/department', nextid]);
    };
    EventSubListComponent = __decorate([
        core_1.Component({
            template: "you selected department with id ={{depId }}\n            <a (click) = \"goPrevious()\">previous</a>\n            <a (click) = \"goNext()\">next</a>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], EventSubListComponent);
    return EventSubListComponent;
}());
exports.EventSubListComponent = EventSubListComponent;
//# sourceMappingURL=employee-sub-list.component.js.map