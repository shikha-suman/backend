import { NgModel } from '@angular/forms/src/directives';
import { Component, Input, keyframes, OnInit } from '@angular/core';
import { EmployeeService } from "./employee.service";
@Component({
  selector: 'employee-detail',
  template: `<h1>employee detail component</h1>
              <form #userForm = "ngForm" (ngSubmit)= "ngSubmit(userForm.value)">
                name:<input type="text" name="name" [(ngModel)]="name">
                email:<input type="text" name="email" [(ngModel)]="email">
                DOB:<input type="text" name="DOB" [(ngModel)]="DOB">
                dept:<input type="text" name="dept" [(ngModel)]="dept">
                gender:<input type="text" name="gender" [(ngModel)]="gender">
                age:<input type="text" name="age" [(ngModel)]="age">
                id:<input type="text" name="_id" [(ngModel)]="_id" readonly>
               <button type="submit" class="btn btn-primary" >Submit</button>
               <button type="button" class="btn btn-primary" (click)="UpdateFunc(userForm.value)" >Update</button>
              </form>

            <table class="table table-bordered">
                <thead><tr>
                <th>Name </th><th>Id</th>
                </tr></thead>
                <tbody >
                <tr *ngFor="let employee of employees" style="border:1px solid red;">
                  <td>{{employee.name}}</td>
                  <td>{{employee._id}}</td>
                  <td><button type='button' class="btn btn-danger" (click)="myFunc(employee._id)">Delete</button></td>
                  <td><button type='button' class="btn btn-primary" (click)="myUpFunc(employee)">Update</button></td>
                </tr>
                
                </tbody>
            </table>`
})
export class EmployeeDetailComponent implements OnInit { 
  
   employees:any = [];
   private name:any;
   private email:any;
   private DOB:any;
   private gender:any;
   private dept:any;
   private age:any;
   private empId:any;
   private _id:any;
  constructor(private _employeeService:EmployeeService) {
     
  }
  ngOnInit() {
     
     // 
      //this._employeeService.deleteMessage().subscribe(() => console.log('success!'),error=> console.error("error"));

     // this._employeeService.updateMessage().subscribe(() => console.log('success!'),error=> console.error("error"));
      this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData
      
        // for(let ele of this.employees)
        // {
        //   this.employees.push(ele);
        // }
        // return this.employees;
      );
      
 // this._employeeService.getEmployees();
    //console.log("hello"+p.employees);
    
  }

  ngSubmit(value:any) {
  //   console.log("hey");
  this._employeeService.saveMessage(value).subscribe(() => console.log('success!'),error=> console.error("error"));
   console.log(value);
   this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData
      
        // for(let ele of this.employees)
        // {
        //   this.employees.push(ele);
        // }
        // return this.employees;
      );
   
  }

  myFunc(id:any) {
    console.log("hey baby");
    console.log(id);
    this._employeeService.deleteMessage(id).subscribe(() => console.log('success!'),error=> console.error("error"));
    this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
  }

   UpdateFunc(empData:any) {
    console.log(empData);
    this._employeeService.updateMessage(empData).subscribe(() => console.log('success!'),error=> console.error("error"));
    this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
    
    }
  myUpFunc(employee:any) {
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
  }

}