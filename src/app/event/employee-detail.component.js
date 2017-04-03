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
var employee_service_1 = require("./employee.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.employees = [];
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        // 
        //this._employeeService.deleteMessage().subscribe(() => console.log('success!'),error=> console.error("error"));
        var _this = this;
        // this._employeeService.updateMessage().subscribe(() => console.log('success!'),error=> console.error("error"));
        this._employeeService.getEmployees().subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
        // this._employeeService.getEmployees();
        //console.log("hello"+p.employees);
    };
    EmployeeDetailComponent.prototype.ngSubmit = function (value) {
        var _this = this;
        //   console.log("hey");
        this._employeeService.saveMessage(value).subscribe(function () { return console.log('success!'); }, function (error) { return console.error("error"); });
        console.log(value);
        this._employeeService.getEmployees().subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
    };
    EmployeeDetailComponent.prototype.myFunc = function (id) {
        var _this = this;
        console.log("hey baby");
        console.log(id);
        this._employeeService.deleteMessage(id).subscribe(function () { return console.log('success!'); }, function (error) { return console.error("error"); });
        this._employeeService.getEmployees().subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
    };
    EmployeeDetailComponent.prototype.UpdateFunc = function (empData) {
        var _this = this;
        console.log(empData);
        this._employeeService.updateMessage(empData).subscribe(function () { return console.log('success!'); }, function (error) { return console.error("error"); });
        this._employeeService.getEmployees().subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
    };
    EmployeeDetailComponent.prototype.myUpFunc = function (employee) {
        // userForm.name = "value"
        console.log("hey update");
        console.log(employee);
        this.name = employee.name;
        this.email = employee.email;
        this.DOB = employee.DOB;
        this.gender = employee.gender;
        this.dept = employee.dept;
        this.age = employee.age;
        this._id = employee._id;
        this.empId = employee._id;
        // var p = function() {
        //   return this.empId;
        // }
        //this.passFunc(employee._id);
        //  this._employeeService.updateMessage().subscribe(() => console.log('success!'),error=> console.error("error"));
        //  this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            template: "<h1>employee detail component</h1>\n              <form #userForm = \"ngForm\" (ngSubmit)= \"ngSubmit(userForm.value)\">\n                name:<input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n                email:<input type=\"text\" name=\"email\" [(ngModel)]=\"email\">\n                DOB:<input type=\"text\" name=\"DOB\" [(ngModel)]=\"DOB\">\n                dept:<input type=\"text\" name=\"dept\" [(ngModel)]=\"dept\">\n                gender:<input type=\"text\" name=\"gender\" [(ngModel)]=\"gender\">\n                age:<input type=\"text\" name=\"age\" [(ngModel)]=\"age\">\n                id:<input type=\"text\" name=\"_id\" [(ngModel)]=\"_id\" readonly>\n               <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\n               <button type=\"button\" class=\"btn btn-primary\" (click)=\"UpdateFunc(userForm.value)\" >Update</button>\n              </form>\n\n            <table class=\"table table-bordered\">\n                <thead><tr>\n                <th>Name </th><th>Id</th>\n                </tr></thead>\n                <tbody >\n                <tr *ngFor=\"let employee of employees\" style=\"border:1px solid red;\">\n                  <td>{{employee.name}}</td>\n                  <td>{{employee._id}}</td>\n                  <td><button type='button' class=\"btn btn-danger\" (click)=\"myFunc(employee._id)\">Delete</button></td>\n                  <td><button type='button' class=\"btn btn-primary\" (click)=\"myUpFunc(employee)\">Update</button></td>\n                </tr>\n                \n                </tbody>\n            </table>"
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map