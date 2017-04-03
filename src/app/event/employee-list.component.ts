import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "./employee.service";
@Component({
  selector: 'employee-list',
  // template: `<h1>employee list component</h1>
  //           <ul *ngFor="let employee of employees">
  //           <li>{{employee.name}}</li>
  //           </ul>`
  template:`hello from emp-list`
})
export class EmployeeListComponent{ 
  //  employees:any = [];
  // constructor(private _employeeService:EmployeeService) {

  // }
  // ngOnInit() {
    
  //   // this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
  //   this._employeeService.getEmployees();
  //   // console.log(this.employees);
  //   // this._employeeService.getEmployees();
  // }

}