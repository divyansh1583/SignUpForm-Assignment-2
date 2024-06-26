import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashAuthGuard } from '../guards/dash-auth.guard';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate: [dashAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
