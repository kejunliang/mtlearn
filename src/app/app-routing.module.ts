import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from  '@angular/router';
import {LoginformComponent} from  './loginform/loginform.component';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
   { path: 'login', component: LoginformComponent },
   { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
