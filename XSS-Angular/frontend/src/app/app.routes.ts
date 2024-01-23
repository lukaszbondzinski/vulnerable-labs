import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {AuthGuard} from "./auth/auth.guard";
import {HomeComponentComponent} from "./home-component/home-component.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponentComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponentComponent, canActivate: [AuthGuard]}
];
