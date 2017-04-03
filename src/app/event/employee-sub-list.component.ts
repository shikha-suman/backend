
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  template: `you selected department with id ={{depId }}
            <a (click) = "goPrevious()">previous</a>
            <a (click) = "goNext()">next</a>
  `,
})
export class EventSubListComponent implements OnInit { 
  //  employees:any = [];
  // constructor(private _employeeService:EmployeeService) {

  // }
  public depId:any;
  constructor(private route:ActivatedRoute,private router:Router) {}
  // ngOnInit() {
    
  //   // this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
  //  // this._employeeService.getEmployees();
  //   // console.log(this.employees);
  //   // this._employeeService.getEmployees();
  //   let id = this.route.snapshot.params['id'];
  //   this.depId = id;
  // }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let id = parseInt(params['id']);
      this.depId =  id;
    })
  }

  goPrevious() {

    let previousid = this.depId-1;
    this.router.navigate(['/department', previousid]);

  }
  goNext() {

    let nextid = this.depId+1;
    this.router.navigate(['/department', nextid]);
  }

}