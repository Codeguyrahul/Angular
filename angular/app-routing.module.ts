import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForComponent } from './ng-for/ng-for.component';
const routes: Routes = [
  {path:'ng-for',component:NgForComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
