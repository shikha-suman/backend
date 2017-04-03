import { RouterLinkActive } from '@angular/router';
import * as events from 'events';
import { Component, Input } from '@angular/core';
// import { MychildComponent } from "./event/Mychild.component";
import { AppModule } from "./app.module";
import { FormGroup , FormControl } from '@angular/forms';
import { EmployeeService } from './event/employee.service';
@Component({
  selector: 'my-app',
//  templateUrl: `app/app.component.html`,
//   styles:[`input.ng-invalid{border-left:5px solid red;}
//           input.ng-valid{border-left:5px solid green;}
//           input.ng-untouched{border-left:5px solid blue;}
//           #age.ng-untouched{border-left:5px solid black;}
//           `]
  template:`<h1>Random Company list and detail</h1>
             <employee-detail></employee-detail>`,

  // template:`<h1>Random Company list and detail</h1>
  //            <nav>
  //            <a routerLink="/department" RouterLinkActive="active">emp list</a>
  //            <a routerLink="/list" RouterLinkActive="active">event list</a>
  //            </nav>
  //            <router-outlet></router-outlet>`,
  providers:[EmployeeService]
})
export class AppComponent  { 
 
// date = new Date();
  //   ngSubmit(value:any) {
  //   console.log("hey");
  //   console.log(value);
  // }

  // userForm = new FormGroup({
  //   name: new FormControl(),
  //   email:new FormControl(),
  //   address: new FormGroup({
  //     street:new FormControl(),
  //     city:new FormControl()
  //   })
  // });

  // onSubmit() {
  //   console.log(this.userForm.value);
  // }

}


// {{name | uppercase}} 
//               {{name | lowercase}}
//               {{8.576 | number:'1.2-3'}}
//               {{8.576 | number:'3.2-3'}}
//               {{8.576 | currency:'USD':true}}
//               {{date | date:'fullDate'}}
//             <events-list></events-list>
//             <myparent-app></myparent-app>