import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
// import { EventListComponent }  from './event/event-list.component';
// import { EmployeeListComponent } from './event/employee-list.component';
// import { EventSubListComponent } from './event/employee-sub-list.component';

// import { PageNotFoundComponent } from './event/pagenotfound.component';



const routes:Routes = [
    // {path: 'department', component:EventListComponent},
    // {path: 'list', component:EmployeeListComponent},
    // {path: 'department/:id', component:EventSubListComponent},
    // {path: '**',component:PageNotFoundComponent}
];


@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
//export const routingcomponent = [EmployeeListComponent, EventListComponent,EventSubListComponent,PageNotFoundComponent];
