import { NgModule }      from '@angular/core';
import { EmployeeDetailComponent } from "./event/employee-detail.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
// import { EventListComponent }  from './event/event-list.component';
import { MychildComponent }  from './event/Mychild.component';
import { MyparentComponent }  from './event/Myparent.component';
import { AppRoutingModule } from './app.router.module';
//import { routingcomponent } from './app.router.module';
// import { EmployeeListComponent } from './event/employee-list.component';
@NgModule({
  // ,ReactiveFormsModule,,routingcomponent,MychildComponent,MyparentComponent
  imports:      [ BrowserModule, FormsModule,HttpModule,AppRoutingModule],
  declarations: [ AppComponent,EmployeeDetailComponent],
  bootstrap:    [AppComponent ]
})
export class AppModule {}

